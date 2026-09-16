import "@fontsource-variable/dm-sans/wght.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

import shell from "./map-shell.html?raw";
import geometryManifest from "./campus-geometry.json";
import { toMapPoint, fromMapPoint } from "./campus-coordinates.js";
import { catalogueDestinations } from "./campus-destinations.js";

const mountedMaps = new WeakMap();

export function mountCampusMap(root, options = {}) {
  if (!(root instanceof HTMLElement))
    throw new TypeError("A map container is required");
  mountedMaps.get(root)?.dispose();
  root.classList.add("campus-map");
  root.innerHTML = shell;
  const $ = (id) => root.querySelector("#" + id);
  if (options.embedded) {
    const sourceButton = $("source-button");
    sourceButton.className = "square-control map-info-control";
    sourceButton.textContent = "↗";
    sourceButton.setAttribute("aria-label", "Map information and sources");
    sourceButton.setAttribute("aria-haspopup", "dialog");
    sourceButton.title = "Map information and sources";
    $("labels-toggle").after(sourceButton);
    const controlsPanel = root.querySelector('.view-controls');
    controlsPanel.id = 'map-tools';
    const toolsToggle = document.createElement('button');
    toolsToggle.id = 'map-tools-toggle';
    toolsToggle.className = 'map-tools-toggle';
    toolsToggle.type = 'button';
    toolsToggle.innerHTML = '<span aria-hidden="true">⋯</span><span>Map tools</span>';
    toolsToggle.setAttribute('aria-expanded', 'false');
    toolsToggle.setAttribute('aria-controls', 'map-tools');
    root.classList.remove('map-tools-open');
    root.append(toolsToggle);
  }
  let locationPin = options.location ? { ...options.location } : null,
    pinButton = null;
  let catalogue = options.catalogue || {},
    destinations = [],
    extraTargets = [],
    selectedDestination = null,
    destinationOutline = null;
  const destinationMarker = document.createElement("div");
  destinationMarker.className = "campus-destination-marker";
  destinationMarker.hidden = true;
  destinationMarker.setAttribute("role", "status");
  root.append(destinationMarker);
  const mobile = () => root.clientWidth <= 650;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const landmarks = [
    {
      name: "Robarts Library",

      priority: 0,
    },
    { name: "University College", priority: 1 },
    { name: "Convocation Hall", priority: 2 },
    { name: "Sidney Smith Hall", priority: 3 },
    {
      name: "Bahen Centre for Information Technology",
      short: "Bahen Centre",

      priority: 4,
    },
    { name: "Royal Ontario Museum", priority: 5 },
    {
      name: "Ontario Legislative Building",
      short: "Ontario Legislature",

      priority: 6,
    },
    { name: "Trinity College", priority: 7 },
    { name: "Victoria College", priority: 8 },
    {
      name: "Rotman School of Management",
      short: "Rotman",

      priority: 9,
    },
    {
      name: "Medical Sciences Building",
      short: "Medical Sciences",

      priority: 10,
    },
    {
      name: "Lash Miller Chemical Laboratories",
      short: "Lash Miller",

      priority: 11,
    },
    {
      name: "McLennan Physical Laboratories",
      short: "McLennan Labs",
      priority: 12,
    },
    { name: "Hart House", priority: 5.5 },
    {
      name: "Gerstein / Canadiana complex",
      short: "Gerstein / Canadiana",
      priority: 13,
    },
    { name: "Knox College", priority: 14 },
  ];
  let renderer,
    scene,
    camera,
    controls,
    surfaceMesh,
    edgeMesh,
    selected = null,
    hovered = null,
    tween = null;
  let framePending = false,
    isRendering = false,
    renderCount = 0,
    showLabels = options.initialLabels !== false,
    planView = false,
    lastPointer = null;
  let pointerMoved = false,
    hoverPending = false;
  let disposed = false,
    status = "loading",
    loadController,
    frameId,
    hoverFrameId,
    loadSequence = 0;
  const cleanups = [],
    activePointers = new Set();
  const lifetime = new AbortController();
  function listen(target, type, callback) {
    target.addEventListener(type, callback, { signal: lifetime.signal });
  }
  function listenScene(target, type, callback) {
    target.addEventListener(type, callback);
    cleanups.push(() => target.removeEventListener(type, callback));
  }
  $("labels-toggle").classList.toggle('active', showLabels);
  $("labels-toggle").setAttribute('aria-pressed', String(showLabels));
  if (options.embedded) {
    const toggle = $('map-tools-toggle');
    const setToolsOpen = open => {
      root.classList.toggle('map-tools-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    listen(toggle, 'click', () => setToolsOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    listen($('scene'), 'pointerdown', () => setToolsOpen(false));
    listen(root, 'keydown', event => {
      if (event.key === 'Escape' && !root.querySelector('dialog[open]') && toggle.getAttribute('aria-expanded') === 'true') {
        setToolsOpen(false);
        toggle.focus({ preventScroll: true });
      }
    });
  }
  function publicBuilding(b) {
    return b
      ? {
          id: b.buildingId,
          name: b.name === "Campus context" ? "Unnamed building" : b.name,
          codes: [...(b.codes || [])],
          officialUrl: b.officialUrl || null,
          officialEntries: (b.officialEntries || []).map((entry) => ({
            ...entry,
          })),
          note: b.complexNote || null,
          center: [...b.center],
        }
      : null;
  }
  function announceSelection() {
    const detail = publicBuilding(selected);
    root.dispatchEvent(
      new CustomEvent("campus:select", { detail, bubbles: true }),
    );
    options.onSelect?.(detail);
  }
  const buildings = [],
    pickMeshes = [],
    labels = [];
  const raycaster = new THREE.Raycaster(),
    pointer = new THREE.Vector2();
  // Centre of King's College Circle (OpenStreetMap way 4212296).
  const circleCentre = toMapPoint({ lat: 43.66174, lng: -79.39518 });
  const homeTarget = options.embedded
      ? new THREE.Vector3(circleCentre.x, 0, circleCentre.z)
      : new THREE.Vector3(20, 0, -185),
    homeOffset = options.mobileFraming
      ? new THREE.Vector3(1180, 620, 550)
      : options.embedded
        ? new THREE.Vector3(1280, 720, 200)
        : new THREE.Vector3(440, 920, 1020),
    homeZoom = options.mobileFraming ? 2.6 : options.embedded ? 2.4 : 1.35;
  const colors = {
    white: new THREE.Color("#fcfdff"),
    side: new THREE.Color("#bdd1eb"),
    edge: new THREE.Color("#6487b1"),
    landmarkEdge: new THREE.Color("#164f97"),
    selected: new THREE.Color("#c4ddff"),
    selectedEdge: new THREE.Color("#0758cc"),
    paper: new THREE.Color("white"),
  };

  function invalidate() {
    if (
      renderer &&
      status === "ready" &&
      !disposed &&
      !framePending &&
      !isRendering &&
      !document.hidden
    ) {
      framePending = true;
      frameId = requestAnimationFrame(render);
    }
  }
  function render(now) {
    framePending = false;
    if (disposed || status !== "ready" || document.hidden) return;
    isRendering = true;
    let settling = false;
    if (tween) {
      const p = reducedMotion.matches
        ? 1
        : Math.min(1, (now - tween.start) / 700);
      const t = p < 0.5 ? 4 * p ** 3 : 1 - (-2 * p + 2) ** 3 / 2;
      controls.target.lerpVectors(tween.fromTarget, tween.toTarget, t);
      camera.position.lerpVectors(tween.fromPosition, tween.toPosition, t);
      camera.zoom = THREE.MathUtils.lerp(tween.fromZoom, tween.toZoom, t);
      camera.updateProjectionMatrix();
      controls.update();
      if (p === 1) {
        tween = null;
        controls.enableDamping = !reducedMotion.matches;
      }
    }
    if (!tween) settling = controls.update();
    renderer.render(scene, camera);
    renderCount++;
    positionLabels();
    positionLocation();
    positionDestination();
    const north = new THREE.Vector3(0, 0, -100).applyQuaternion(
      camera.quaternion.clone().invert(),
    );
    $("compass-arrow").style.transform =
      `rotate(${(Math.atan2(north.x, north.y) * 180) / Math.PI}deg)`;
    const pixelsPerMetre =
      $("scene").clientWidth / ((camera.right - camera.left) / camera.zoom);
    const preferred = mobile() ? 38 : 65;
    const distance = [10, 20, 50, 100, 200, 500].reduce(
      (best, n) =>
        Math.abs(n * pixelsPerMetre - preferred) <
        Math.abs(best * pixelsPerMetre - preferred)
          ? n
          : best,
      100,
    );
    $("scale-text").textContent = `${distance} m`;
    $("scale-line").style.width = `${distance * pixelsPerMetre}px`;
    isRendering = false;
    if (tween || (settling && controls.enableDamping)) invalidate();
  }
  function flyTo(
    target,
    zoom,
    offset = camera.position.clone().sub(controls.target),
  ) {
    controls.enableDamping = false;
    tween = {
      start: performance.now(),
      fromTarget: controls.target.clone(),
      toTarget: target.clone(),
      fromPosition: camera.position.clone(),
      toPosition: target.clone().add(offset),
      fromZoom: camera.zoom,
      toZoom: zoom,
    };
    invalidate();
  }
  function setView(plan) {
    if (status !== "ready") return;
    planView = plan;
    controls.enableRotate = !plan;
    flyTo(
      controls.target,
      camera.zoom,
      plan ? new THREE.Vector3(0, 1400, 0.1) : homeOffset,
    );
  }
  function clearSelection() {
    if (status !== "ready") return;
    const changed = !!selected;
    selected = null;
    showDestination(null);
    hovered = null;
    $("selection").hidden = true;
    root.classList.remove("has-selection");
    $("building-picker").value = "";
    paintBuildings();
    if (changed) announceSelection();
  }
  function reset() {
    if (status !== "ready") return;
    clearSelection();
    planView = false;
    controls.enableRotate = true;
    paintBuildings();
    flyTo(homeTarget, homeZoom, homeOffset);
  }
  function select(b, requestedCode) {
    if (!b || status !== "ready") return;
    selected = b;
    const destination = destinations.find((d) =>
      requestedCode
        ? d.codes.includes(requestedCode)
        : b.codes?.some((code) => d.codes.includes(code)),
    );
    showDestination(destination);
    root.classList.add("has-selection");
    $("selection").hidden = false;
    $("selection-name").textContent =
      b.name === "Campus context" ? "Unnamed building" : b.name;
    $("selection-code").textContent = b.codes?.join(" / ") || "BUILDING";
    $("selection-note").textContent =
      b.complexNote || "City of Toronto · 2025 building model";
    const entry =
      b.officialEntries?.find((entry) => entry.code === requestedCode) ||
      b.officialEntries?.[0];
    const url = entry?.url || b.officialUrl;
    $("official-link").textContent = entry
      ? `View ${entry.name} on UofT map ↗`
      : "View on UofT map ↗";
    $("official-link").hidden = !url;
    if (url) $("official-link").href = url;
    paintBuildings();
    const center = destination?.center || b.center;
    const target = new THREE.Vector3(center[0], 0, center[2]);
    // Leave space for the mobile detail sheet without placing the building behind it.
    if (mobile()) target.z += 100;
    flyTo(
      target,
      mobile() ? 2.6 : 2.9,
      planView
        ? new THREE.Vector3(0, 1400, 0.1)
        : new THREE.Vector3(390, 800, 900),
    );
    $("building-picker").value = b.buildingId;
    if (!options.embedded) $("close-selection").focus({ preventScroll: true });
    announceSelection();
  }
  function createLabel(b) {
    const button = document.createElement("button");
    button.className = "map-label";
    const code = document.createElement("span");
    code.className = "label-code";
    code.textContent = b.codes?.[0] || "";
    code.hidden = !code.textContent;
    const name = document.createElement("span");
    name.textContent = b.landmark.short || b.name;
    button.append(code, name);
    button.setAttribute("aria-label", `Explore ${b.name}`);
    button.onclick = () => select(b);
    $("labels").append(button);
    labels.push({ button, b });
  }
  function positionLabels() {
    const w = root.clientWidth,
      h = $("scene").clientHeight,
      rects = [];
    const sorted = [...labels].sort(
      (a, b) =>
        (b.b === selected) - (a.b === selected) ||
        a.b.landmark.priority - b.b.landmark.priority,
    );
    for (const { button, b } of sorted) {
      if (
        selectedDestination &&
        b.codes?.includes(selectedDestination.codes[0])
      ) {
        button.hidden = true;
        continue;
      }
      const point = new THREE.Vector3(
        b.center[0],
        b.bounds[1][1] + 26,
        b.center[2],
      ).project(camera);
      const x = (point.x * 0.5 + 0.5) * w,
        y = (-point.y * 0.5 + 0.5) * h,
        bw = button.offsetWidth || 130,
        bh = button.offsetHeight || 29;
      const rect = { x: x - bw / 2, y: y - bh, w: bw, h: bh + 20 };
      const overlap = rects.some(
        (q) =>
          rect.x < q.x + q.w + 12 &&
          rect.x + rect.w + 12 > q.x &&
          rect.y < q.y + q.h + 8 &&
          rect.y + rect.h + 8 > q.y,
      );
      const behindPanel =
        !options.embedded &&
        selected &&
        (mobile() ? y > h - 360 : x < 350 && y > h - 390);
      const tooDetailed =
        camera.zoom < 1.6 && b.landmark.priority > (mobile() ? 4 : 8);
      const behindPicker =
        !options.embedded && x > w - (mobile() ? 190 : 270) && y < 210;
      const hidden =
        !showLabels ||
        behindPicker ||
        overlap ||
        behindPanel ||
        tooDetailed ||
        point.z > 1 ||
        x < bw / 2 + 18 ||
        x > w - bw / 2 - 18 ||
        y < (options.embedded ? (options.labelTop ?? 170) : 160) ||
        y > h - (options.embedded ? (options.labelBottom ?? 120) : 180);
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
      button.classList.toggle("label-hidden", hidden);
      button.classList.toggle("selected", b === selected);
      button.tabIndex = hidden ? -1 : 0;
      if (!hidden) rects.push(rect);
    }
  }
  function paintBuildings(only = buildings) {
    if (!surfaceMesh) return;
    const faces = surfaceMesh.geometry.attributes.color,
      normals = surfaceMesh.geometry.attributes.normal,
      edges = edgeMesh.geometry.attributes.color;
    const c = new THREE.Color();
    for (const b of only) {
      const emphasized = b === selected || b === hovered;
      const edge = emphasized
        ? colors.selectedEdge
        : b.landmark
          ? colors.landmarkEdge
          : colors.edge;
      for (const part of b.parts) {
        for (
          let i = part.surfaceStart;
          i < part.surfaceStart + part.surfaceCount;
          i++
        ) {
          const ny = Math.abs(normals.getY(i));
          const shade = Math.max(
            0,
            Math.min(0.7, (1 - ny) * 0.48 + Math.abs(normals.getX(i)) * 0.12),
          );
          c.copy(colors.white).lerp(
            emphasized ? colors.selected : colors.side,
            emphasized ? 0.55 + shade : shade,
          );
          if (selected && !emphasized) c.lerp(colors.paper, 0.25);
          faces.setXYZ(i, c.r, c.g, c.b);
        }
        c.copy(edge);
        if (selected && !emphasized) c.lerp(colors.paper, 0.42);
        for (let i = part.edgeStart; i < part.edgeStart + part.edgeCount; i++)
          edges.setXYZ(i, c.r, c.g, c.b);
      }
    }
    faces.needsUpdate = true;
    edges.needsUpdate = true;
    invalidate();
  }
  function buildModel(meta, binary) {
    const surfaceParts = [],
      edgeParts = [],
      groups = new Map();
    let surfaceOffset = 0,
      edgeOffset = 0;
    const pickMaterial = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
    });
    for (const item of meta.buildings) {
      for (const [offset, count, multiple] of [
        [item.positionOffset, item.positionCount, 9],
        [item.edgeOffset, item.edgeCount, 6],
      ]) {
        if (
          !Number.isInteger(offset) ||
          !Number.isInteger(count) ||
          offset < 0 ||
          count < 0 ||
          count % multiple ||
          offset + count > binary.length
        )
          throw new Error("Invalid campus geometry buffer");
      }
      const id = item.buildingId || item.id;
      let building = groups.get(id);
      if (!building) {
        building = {
          ...item,
          buildingId: id,
          center: [...item.center],
          bounds: item.bounds.map((v) => [...v]),
          landmark: landmarks.find((l) => l.name === item.name),
          parts: [],
        };
        groups.set(id, building);
        buildings.push(building);
      } else {
        for (let axis = 0; axis < 3; axis++) {
          building.bounds[0][axis] = Math.min(
            building.bounds[0][axis],
            item.bounds[0][axis],
          );
          building.bounds[1][axis] = Math.max(
            building.bounds[1][axis],
            item.bounds[1][axis],
          );
          building.center[axis] =
            (building.bounds[0][axis] + building.bounds[1][axis]) / 2;
        }
      }
      const part = {
        surfaceStart: surfaceOffset,
        surfaceCount: item.positionCount / 3,
        edgeStart: edgeOffset,
        edgeCount: item.edgeCount / 3,
      };
      building.parts.push(part);
      surfaceOffset += part.surfaceCount;
      edgeOffset += part.edgeCount;
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
          binary.subarray(
            item.positionOffset,
            item.positionOffset + item.positionCount,
          ),
          3,
        ),
      );
      geometry.computeVertexNormals();
      geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(new Float32Array(item.positionCount), 3),
      );
      const edge = new THREE.BufferGeometry();
      edge.setAttribute(
        "position",
        new THREE.BufferAttribute(
          binary.subarray(item.edgeOffset, item.edgeOffset + item.edgeCount),
          3,
        ),
      );
      edge.setAttribute(
        "color",
        new THREE.BufferAttribute(new Float32Array(item.edgeCount), 3),
      );
      surfaceParts.push(geometry);
      edgeParts.push(edge);
      // Picking only needs positions; GPU rendering uses the two merged batches below.
      const pickGeometry = new THREE.BufferGeometry();
      pickGeometry.setAttribute("position", geometry.attributes.position);
      pickGeometry.computeBoundingBox();
      pickGeometry.computeBoundingSphere();
      const pick = new THREE.Mesh(pickGeometry, pickMaterial);
      pick.userData.building = building;
      pick.updateMatrixWorld();
      pickMeshes.push(pick);
    }
    surfaceMesh = new THREE.Mesh(
      mergeGeometries(surfaceParts),
      new THREE.MeshBasicMaterial({
        vertexColors: true,
        side: THREE.DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
      }),
    );
    scene.add(surfaceMesh);
    edgeMesh = new THREE.LineSegments(
      mergeGeometries(edgeParts),
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
      }),
    );
    scene.add(edgeMesh);
    [...surfaceParts, ...edgeParts].forEach((g) => g.dispose());
    for (const building of buildings)
      if (building.landmark) createLabel(building);
    updatePicker();
    $("model-count").textContent = "ST. GEORGE · 2025 BUILDING MODEL";
    paintBuildings();
  }
  function updatePicker() {
    const picker = $("building-picker");
    picker.replaceChildren(new Option("Go to a building…", ""));
    for (const building of [...buildings, ...extraTargets]
      .filter((b) => b.name !== "Campus context")
      .sort((a, b) => a.name.localeCompare(b.name))) {
      picker.add(
        new Option(
          `${building.codes?.length ? building.codes.join(" / ") + " · " : ""}${building.name}`,
          building.buildingId,
        ),
      );
    }
    picker.value = selected?.buildingId || "";
  }
  function setCatalogue(value) {
    catalogue = value || {};
    if (!scene || !surfaceMesh) return;
    const previousCode = selectedDestination?.codes[0] || selected?.codes?.[0];
    for (let i = labels.length - 1; i >= 0; i--) {
      if (labels[i].b.catalogueTarget) {
        labels[i].button.remove();
        labels.splice(i, 1);
      }
    }
    destinations = catalogueDestinations(catalogue);
    extraTargets = destinations.filter(
      (d) => !buildings.some((b) => b.codes?.includes(d.codes[0])),
    );
    for (const target of extraTargets) createLabel(target);
    if (selected?.catalogueTarget)
      selected =
        extraTargets.find((d) => d.codes.includes(previousCode)) || null;
    updatePicker();
    showDestination(
      destinations.find((d) => d.codes.includes(previousCode)) || null,
    );
    invalidate();
  }
  function showDestination(destination) {
    selectedDestination = destination || null;
    if (destinationOutline) {
      scene?.remove(destinationOutline);
      destinationOutline.geometry.dispose();
      destinationOutline.material.dispose();
      destinationOutline = null;
    }
    destinationMarker.hidden = !destination;
    if (!destination) return;
    destinationMarker.textContent = `${destination.codes[0]} · ${destination.name}`;
    if (scene && destination.footprint.length >= 3) {
      const points = destination.footprint.map(
        (p) => new THREE.Vector3(p.x, 1.5, p.z),
      );
      destinationOutline = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({ color: "#0758cc", depthTest: false }),
      );
      destinationOutline.renderOrder = 10;
      scene.add(destinationOutline);
    }
    positionDestination();
  }
  function positionDestination() {
    if (!camera || !selectedDestination) return;
    const p = new THREE.Vector3(...selectedDestination.center).project(camera);
    const rect = $("scene").getBoundingClientRect();
    const x = (p.x * 0.5 + 0.5) * rect.width,
      y = (-p.y * 0.5 + 0.5) * rect.height;
    destinationMarker.style.left = `${x}px`;
    destinationMarker.style.top = `${y}px`;
    destinationMarker.hidden =
      p.z < -1 ||
      p.z > 1 ||
      x < 0 ||
      x > rect.width ||
      y < 0 ||
      y > rect.height;
  }
  function ground(data) {
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(1800, 1800),
      new THREE.MeshBasicMaterial({ color: "#ffffff" }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -0.3, -150);
    scene.add(floor);
    const dots = [];
    for (let x = -620; x < 700; x += 20)
      for (let z = -830; z < 500; z += 20) dots.push(x, -0.15, z);
    const dg = new THREE.BufferGeometry();
    dg.setAttribute("position", new THREE.Float32BufferAttribute(dots, 3));
    scene.add(
      new THREE.Points(
        dg,
        new THREE.PointsMaterial({
          color: "#87a9d2",
          size: 1,
          sizeAttenuation: false,
          transparent: true,
          opacity: 0.14,
        }),
      ),
    );
    const roadParts = [];
    for (const way of data.roads) {
      const type = way.tags.highway;
      const width =
        parseFloat(way.tags.width) ||
        (["primary", "secondary", "tertiary"].includes(type)
          ? 8
          : ["residential", "unclassified", "service"].includes(type)
            ? 4
            : 1.15);
      for (let i = 1; i < way.geometry.length; i++) {
        const a = way.geometry[i - 1],
          b = way.geometry[i];
        if (
          [a, b].some((p) => p.x < -590 || p.x > 660 || p.z < -790 || p.z > 480)
        )
          continue;
        const dx = b.x - a.x,
          dz = b.z - a.z,
          l = Math.hypot(dx, dz);
        if (l < 0.1) continue;
        const nx = ((-dz / l) * width) / 2,
          nz = ((dx / l) * width) / 2;
        const g = new THREE.BufferGeometry();
        g.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(
            [
              a.x + nx,
              -0.05,
              a.z + nz,
              a.x - nx,
              -0.05,
              a.z - nz,
              b.x + nx,
              -0.05,
              b.z + nz,
              a.x - nx,
              -0.05,
              a.z - nz,
              b.x - nx,
              -0.05,
              b.z - nz,
              b.x + nx,
              -0.05,
              b.z + nz,
            ],
            3,
          ),
        );
        roadParts.push(g);
      }
    }
    if (roadParts.length) {
      scene.add(
        new THREE.Mesh(
          mergeGeometries(roadParts),
          new THREE.MeshBasicMaterial({
            color: "#d8e5f5",
            side: THREE.DoubleSide,
          }),
        ),
      );
      roadParts.forEach((g) => g.dispose());
    }
    const greens = [],
      outlines = [];
    for (const patch of data.green) {
      const pts = patch.geometry;
      if (
        pts.length < 4 ||
        pts.some((p) => p.x < -590 || p.x > 660 || p.z < -790 || p.z > 480)
      )
        continue;
      const shape = new THREE.Shape(
        pts.map((p) => new THREE.Vector2(p.x, -p.z)),
      );
      const g = new THREE.ShapeGeometry(shape);
      g.rotateX(-Math.PI / 2);
      g.translate(0, -0.1, 0);
      greens.push(g);
      for (let i = 1; i < pts.length; i++)
        outlines.push(pts[i - 1].x, 0, pts[i - 1].z, pts[i].x, 0, pts[i].z);
    }
    if (greens.length) {
      scene.add(
        new THREE.Mesh(
          mergeGeometries(greens),
          new THREE.MeshBasicMaterial({
            color: "#f0f5fc",
            side: THREE.DoubleSide,
          }),
        ),
      );
      greens.forEach((g) => g.dispose());
    }
    const trees = [];
    for (const p of data.trees) {
      if (p.x < -590 || p.x > 660 || p.z < -790 || p.z > 480) continue;
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2,
          b = ((i + 1) / 10) * Math.PI * 2;
        trees.push(
          p.x + Math.cos(a) * 2.8,
          0.2,
          p.z + Math.sin(a) * 2.8,
          p.x + Math.cos(b) * 2.8,
          0.2,
          p.z + Math.sin(b) * 2.8,
        );
      }
    }
    for (const [points, color, opacity] of [
      [outlines, "#9fbce0", 0.48],
      [trees, "#7ea3d2", 0.55],
    ]) {
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
      scene.add(
        new THREE.LineSegments(
          g,
          new THREE.LineBasicMaterial({ color, transparent: true, opacity }),
        ),
      );
    }
    // Small, world-aligned street labels help orientation without adding a basemap.
    for (const [name, text] of [
      ["St George Street", "ST. GEORGE ST."],
      ["College Street", "COLLEGE ST."],
      ["Hoskin Avenue", "HOSKIN AVE."],
    ]) {
      const segments = [];
      for (const road of data.roads.filter(
        (r) => r.tags.name?.replace("St. ", "St ") === name,
      )) {
        for (let i = 1; i < road.geometry.length; i++) {
          const a = road.geometry[i - 1],
            b = road.geometry[i],
            length = Math.hypot(b.x - a.x, b.z - a.z);
          if (
            length > 55 &&
            Math.abs((a.x + b.x) / 2) < 350 &&
            Math.abs((a.z + b.z) / 2 + 180) < 600
          )
            segments.push({ a, b, length });
        }
      }
      segments.sort((a, b) => b.length - a.length);
      if (segments.length) {
        const { a, b } = segments[0];
        addStreetText(
          text,
          (a.x + b.x) / 2,
          (a.z + b.z) / 2,
          -Math.atan2(b.z - a.z, b.x - a.x),
        );
      }
    }
  }
  function addStreetText(text, x, z, rotation) {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#6a8db8";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 256, 32);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(112, 14),
      new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    mesh.rotation.set(-Math.PI / 2, 0, rotation);
    mesh.position.set(x, 0.25, z);
    scene.add(mesh);
  }
  function resize() {
    if (!renderer || disposed) return;
    const w = $("scene").clientWidth,
      h = $("scene").clientHeight;
    if (!w || !h) return;
    const span = mobile() ? Math.max(1400, (1160 * h) / w) : 1490;
    camera.left = (-span * w) / h / 2;
    camera.right = (span * w) / h / 2;
    camera.top = span / 2;
    camera.bottom = -span / 2;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio, mobile() ? 1.5 : 1.75));
    renderer.setSize(w, h);
    invalidate();
  }
  function positionLocation() {
    if (!pinButton || !locationPin || !camera) return;
    const local = toMapPoint(locationPin);
    const point = new THREE.Vector3(local.x, 1, local.z).project(camera);
    const rect = $("scene").getBoundingClientRect();
    const x = (point.x * 0.5 + 0.5) * rect.width,
      y = (-point.y * 0.5 + 0.5) * rect.height;
    pinButton.style.left = `${x}px`;
    pinButton.style.top = `${y}px`;
    pinButton.hidden =
      point.z < -1 ||
      point.z > 1 ||
      x < 0 ||
      x > rect.width ||
      y < 0 ||
      y > rect.height;
  }
  function moveLocation(pin) {
    // Keep pointer/keyboard moves inside the sourced campus extent.
    const [west, south, east, north] = geometryManifest.metadata.bbox;
    locationPin = {
      lat: Math.max(south, Math.min(north, pin.lat)),
      lng: Math.max(west, Math.min(east, pin.lng)),
    };
    positionLocation();
    invalidate();
    options.onLocationChange?.({ ...locationPin });
  }
  function setupLocation() {
    if (!locationPin) return;
    pinButton = document.createElement("button");
    pinButton.className = "campus-location-pin";
    pinButton.setAttribute(
      "aria-label",
      "Walking start pin. Drag to move, or use arrow keys.",
    );
    pinButton.title = "Walking start · drag to move";
    pinButton.innerHTML = '<span aria-hidden="true">●</span>';
    $("scene").append(pinButton);
    let drag = null;
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const groundPoint = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.set(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1,
      );
      raycaster.setFromCamera(pointer, camera);
      return raycaster.ray.intersectPlane(plane, new THREE.Vector3());
    };
    listenScene(pinButton, "pointerdown", (e) => {
      if (e.button !== 0 || drag) return;
      const point = groundPoint(e);
      if (!point) return;
      e.preventDefault();
      e.stopPropagation();
      tween = null;
      controls.enabled = false;
      const local = toMapPoint(locationPin);
      drag = { id: e.pointerId, x: local.x - point.x, z: local.z - point.z };
      pinButton.setPointerCapture(e.pointerId);
      pinButton.focus({ preventScroll: true });
    });
    listenScene(pinButton, "pointermove", (e) => {
      if (!drag || drag.id !== e.pointerId) return;
      const point = groundPoint(e);
      if (point)
        moveLocation(
          fromMapPoint({ x: point.x + drag.x, z: point.z + drag.z }),
        );
    });
    const stop = (e) => {
      if (drag?.id === e.pointerId) {
        drag = null;
        controls.enabled = true;
        invalidate();
      }
    };
    for (const type of ["pointerup", "pointercancel", "lostpointercapture"])
      listenScene(pinButton, type, stop);
    listenScene(pinButton, "keydown", (e) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key))
        return;
      e.preventDefault();
      e.stopPropagation();
      const p = toMapPoint(locationPin),
        step = e.shiftKey ? 50 : 10;
      p.x += e.key === "ArrowLeft" ? -step : e.key === "ArrowRight" ? step : 0;
      p.z += e.key === "ArrowUp" ? -step : e.key === "ArrowDown" ? step : 0;
      moveLocation(fromMapPoint(p));
    });
    cleanups.push(() => {
      pinButton?.remove();
      pinButton = null;
    });
  }
  function hitTest(x, y) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(
      ((x - rect.left) / rect.width) * 2 - 1,
      (-(y - rect.top) / rect.height) * 2 + 1,
    );
    raycaster.setFromCamera(pointer, camera);
    return (
      raycaster.intersectObjects(pickMeshes, false)[0]?.object.userData
        .building || null
    );
  }
  function setup(meta, binary, data) {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setClearColor("#ffffff");
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    $("scene").append(renderer.domElement);
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute(
      "aria-label",
      "St. George campus model. Drag to rotate. When a building is selected, drag a little to look around it or swipe farther to return to campus. Use two fingers to turn or tilt, pinch or scroll to zoom. Arrow keys rotate, plus and minus zoom, Home resets. Choose a building from the selector or labels.",
    );
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-900, 900, 745, -745, 1, 4500);
    camera.zoom = homeZoom;
    controls = new OrbitControls(camera, renderer.domElement);
    controls.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
    controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
    controls.touches.ONE = THREE.TOUCH.ROTATE;
    controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
    controls.target.copy(homeTarget);
    camera.position.copy(homeTarget).add(homeOffset);
    controls.enableDamping = !reducedMotion.matches;
    controls.dampingFactor = 0.14;
    controls.rotateSpeed = 0.42;
    controls.minPolarAngle = 0.00005;
    controls.maxPolarAngle = Math.PI / 2.5;
    controls.minZoom = 0.7;
    controls.maxZoom = 7;
    controls.zoomToCursor = false;
    controls.screenSpacePanning = false;
    controls.enablePan = false;
    controls.maxTargetRadius = 1300;
    controls.cursor.copy(homeTarget);
    controls.update();
    controls.addEventListener("change", invalidate);
    controls.addEventListener("start", () => {
      tween = null;
      controls.enableDamping = !reducedMotion.matches;
    });
    ground(data);
    buildModel(meta, binary);
    setCatalogue(catalogue);
    resize();
    setupLocation();
    const canvas = renderer.domElement;
    let pendingTouchTap = null;
    let buildingDrag = null,
      returnToCampus = false;
    const touchPositions = new Map();
    const touchAngle = () => {
      if (touchPositions.size !== 2) return null;
      const [a, b] = [...touchPositions.values()];
      return Math.atan2(b.y - a.y, b.x - a.x);
    };
    const finishBuildingDrag = () => {
      if (activePointers.size) return;
      buildingDrag = null;
      if (!returnToCampus) return;
      returnToCampus = false;
      // Finish the gesture before easing out, so animation never fights the finger.
      flyTo(homeTarget, homeZoom, camera.position.clone().sub(controls.target));
    };
    listenScene(canvas, "pointerdown", (e) => {
      pendingTouchTap = null;
      activePointers.add(e.pointerId);
      if (e.pointerType === "touch")
        touchPositions.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (activePointers.size === 1) {
        lastPointer = { id: e.pointerId, x: e.clientX, y: e.clientY };
        pointerMoved = false;
        buildingDrag = selected ? { ...lastPointer } : null;
        returnToCampus = false;
      } else {
        pointerMoved = true;
        buildingDrag = null;
      }
    });
    listenScene(canvas, "pointermove", (e) => {
      if (touchPositions.has(e.pointerId)) {
        const before = touchAngle();
        touchPositions.set(e.pointerId, { x: e.clientX, y: e.clientY });
        const after = touchAngle();
        if (before !== null && after !== null && controls.enableRotate) {
          const delta = Math.atan2(
            Math.sin(after - before), Math.cos(after - before),
          );
          if (Math.abs(delta) > 0.001) controls.rotateLeft(-delta);
        }
      }
      if (
        activePointers.has(e.pointerId) &&
        lastPointer &&
        Math.hypot(e.clientX - lastPointer.x, e.clientY - lastPointer.y) > 6
      ) {
        pointerMoved = true;
      }
      if (
        selected &&
        buildingDrag?.id === e.pointerId &&
        Math.hypot(e.clientX - buildingDrag.x, e.clientY - buildingDrag.y) >
          Math.max(70, Math.min(110, canvas.clientWidth * 0.2))
      ) {
        clearSelection();
        buildingDrag = null;
        returnToCampus = true;
      }
      if (
        e.pointerType !== "mouse" ||
        e.buttons ||
        hoverPending ||
        tween ||
        activePointers.size
      )
        return;
      hoverPending = true;
      hoverFrameId = requestAnimationFrame(() => {
        hoverPending = false;
        if (disposed || status !== "ready" || activePointers.size) return;
        const next = hitTest(e.clientX, e.clientY);
        if (next !== hovered) {
          const previous = hovered;
          hovered = next;
          paintBuildings([previous, next].filter(Boolean));
          canvas.style.cursor = next ? "pointer" : "grab";
        }
      });
    });
    listenScene(canvas, "pointerleave", () => {
      const previous = hovered;
      hovered = null;
      canvas.style.cursor = "grab";
      if (previous) paintBuildings([previous]);
    });
    listenScene(canvas, "pointerup", (e) => {
      const tapped =
        activePointers.size === 1 &&
        lastPointer?.id === e.pointerId &&
        !pointerMoved &&
        e.button === 0;
      activePointers.delete(e.pointerId);
      touchPositions.delete(e.pointerId);
      if (tapped) {
        const building = hitTest(e.clientX, e.clientY);
        // Complete touch selection on click, after the browser fixes its target.
        // Opening a host panel on pointerup can move another control under the
        // finger before the compatibility click, accidentally activating it.
        if (e.pointerType === "touch") pendingTouchTap = { building };
        else select(building);
      }
      if (!activePointers.size) lastPointer = null;
      finishBuildingDrag();
    });
    listenScene(canvas, "click", () => {
      if (!pendingTouchTap) return;
      const { building } = pendingTouchTap;
      pendingTouchTap = null;
      select(building);
    });
    const cancelPointer = (e) => {
      if (e.type === "pointercancel") pendingTouchTap = null;
      activePointers.delete(e.pointerId);
      touchPositions.delete(e.pointerId);
      pointerMoved = true;
      if (!activePointers.size) lastPointer = null;
      finishBuildingDrag();
    };
    listenScene(canvas, "pointercancel", cancelPointer);
    listenScene(canvas, "lostpointercapture", cancelPointer);
    listenScene(canvas, "webglcontextlost", (e) => {
      e.preventDefault();
      status = "error";
      cancelAnimationFrame(frameId);
      framePending = false;
      showFallback(
        "The graphics connection was interrupted. Retry to reopen the map.",
      );
    });
    listenScene(canvas, "keydown", (e) => {
      if (status !== "ready") return;
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        tween = null;
        if (e.key === "ArrowLeft" || e.key === "ArrowRight")
          controls.rotateLeft(e.key === "ArrowLeft" ? 0.15 : -0.15);
        else controls.rotateUp(e.key === "ArrowUp" ? 0.1 : -0.1);
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        zoom(1.4);
      } else if (e.key === "-") {
        e.preventDefault();
        zoom(1 / 1.4);
      } else if (e.key === "Home") {
        e.preventDefault();
        reset();
      }
    });
    const observer = new ResizeObserver(resize);
    observer.observe(root);
    cleanups.push(() => observer.disconnect());
    listenScene(document, "visibilitychange", () => {
      if (!document.hidden) invalidate();
    });
    listenScene(reducedMotion, "change", () => {
      controls.enableDamping = !reducedMotion.matches;
      invalidate();
    });
  }

  function showFallback(
    message = "Check your connection and WebGL support, then try again.",
  ) {
    $("fallback").hidden = false;
    $("fallback-message").textContent = message;
    $("scene").hidden = true;
    $("labels").hidden = true;
    root.querySelector(".view-controls").hidden = true;
    $("building-picker").disabled = true;
    $("selection").hidden = true;
    root.classList.remove("has-selection");
    $("model-count").textContent = "CAMPUS MODEL UNAVAILABLE";
  }
  function zoom(factor) {
    if (status === "ready")
      flyTo(
        controls.target,
        THREE.MathUtils.clamp(camera.zoom * factor, 0.7, 7),
      );
  }
  $("source-button").onclick = () => $("sources").showModal();
  $("close-sources").onclick = () => $("sources").close();
  listen($("sources"), "click", (e) => {
    if (e.target === $("sources")) {
      const r = $("sources").getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        $("sources").close();
    }
  });
  $("reset-view").onclick = reset;
  $("face-north").onclick = () => {
    if (status !== "ready") return;
    const offset = camera.position.clone().sub(controls.target);
    flyTo(
      controls.target,
      camera.zoom,
      new THREE.Vector3(0, offset.y, Math.hypot(offset.x, offset.z)),
    );
  };
  $("zoom-in").onclick = () => zoom(1.4);
  $("zoom-out").onclick = () => zoom(1 / 1.4);
  $("labels-toggle").onclick = () => {
    showLabels = !showLabels;
    $("labels-toggle").classList.toggle("active", showLabels);
    $("labels-toggle").setAttribute("aria-pressed", showLabels);
    invalidate();
  };
  $("building-picker").onchange = (e) => {
    if (e.target.value)
      select(
        [...buildings, ...extraTargets].find(
          (b) => b.buildingId === e.target.value,
        ),
      );
    else clearSelection();
  };
  function dismissSelection() {
    clearSelection();
    renderer?.domElement.focus({ preventScroll: true });
  }
  $("close-selection").onclick = dismissSelection;
  listen(root, "keydown", (e) => {
    if (e.key === "Escape" && selected && !$("sources").open) {
      e.preventDefault();
      dismissSelection();
    }
  });
  $("retry-map").onclick = () => {
    api.ready = init();
  };
  function teardownScene() {
    cancelAnimationFrame(frameId);
    cancelAnimationFrame(hoverFrameId);
    framePending = false;
    isRendering = false;
    hoverPending = false;
    cleanups.splice(0).forEach((cleanup) => cleanup());
    controls?.dispose();
    const geometries = new Set(),
      materials = new Set(),
      textures = new Set();
    const collect = (object) => {
      if (object.geometry) geometries.add(object.geometry);
      for (const material of [object.material].flat().filter(Boolean)) {
        materials.add(material);
        for (const value of Object.values(material))
          if (value?.isTexture) textures.add(value);
      }
    };
    showDestination(null);
    destinations = [];
    extraTargets = [];
    scene?.traverse(collect);
    pickMeshes.forEach(collect);
    geometries.forEach((g) => g.dispose());
    materials.forEach((m) => m.dispose());
    textures.forEach((t) => t.dispose());
    renderer?.dispose();
    renderer?.forceContextLoss();
    renderer?.domElement.remove();
    renderer =
      scene =
      camera =
      controls =
      surfaceMesh =
      edgeMesh =
      selected =
      hovered =
      tween =
        null;
    buildings.length = pickMeshes.length = labels.length = 0;
    activePointers.clear();
    lastPointer = null;
    planView = false;
    $("labels")?.replaceChildren();
  }
  async function init() {
    if (disposed) return false;
    const sequence = ++loadSequence;
    loadController?.abort();
    teardownScene();
    status = "loading";
    loadController = new AbortController();
    const controller = loadController;
    const timeout = setTimeout(() => controller.abort(), 30000);
    $("loading").classList.remove("done");
    $("fallback").hidden = true;
    $("scene").hidden = false;
    $("labels").hidden = false;
    root.querySelector(".view-controls").hidden = false;
    $("building-picker").disabled = true;
    $("selection").hidden = true;
    root.classList.remove("has-selection");
    try {
      const base = new URL(
        options.assetBase || `${import.meta.env.BASE_URL}data/`,
        document.baseURI,
      );
      const compressed = "DecompressionStream" in window;
      const responses = await Promise.all(
        [compressed ? "campus.bin.gz" : "campus.bin", "ground.json"].map(
          (file) => fetch(new URL(file, base), { signal: controller.signal }),
        ),
      );
      if (responses.some((r) => !r.ok))
        throw new Error("Campus asset request failed");
      // Browsers already decode gzip when the server sends Content-Encoding.
      const needsDecode =
        compressed &&
        !responses[0].headers.get("content-encoding")?.includes("gzip");
      const meshResponse = needsDecode
        ? new Response(
            responses[0].body.pipeThrough(new DecompressionStream("gzip")),
          )
        : responses[0];
      const [meta, binary, data] = await Promise.all([
        Promise.resolve(geometryManifest),
        meshResponse.arrayBuffer(),
        responses[1].json(),
      ]);
      if (disposed || sequence !== loadSequence) return false;
      if (
        !Array.isArray(meta.buildings) ||
        !meta.buildings.length ||
        binary.byteLength % 4
      )
        throw new Error("Invalid campus data");
      setup(meta, new Float32Array(binary), data);
      status = "ready";
      $("building-picker").disabled = false;
      invalidate();
      document.fonts.ready.then(() => {
        if (!disposed && sequence === loadSequence) invalidate();
      });
      return true;
    } catch (error) {
      if (disposed || sequence !== loadSequence) return false;
      controller.abort();
      teardownScene();
      status = "error";
      console.warn("Campus map:", error);
      showFallback();
      return false;
    } finally {
      clearTimeout(timeout);
      if (!disposed && sequence === loadSequence)
        $("loading").classList.add("done");
    }
  }
  const api = {
    ready: null,
    get status() {
      return status;
    },
    get stats() {
      return {
        buildings: buildings.length,
        geometryGroups: pickMeshes.length,
        triangles: renderer?.info.render.triangles || 0,
        drawCalls: renderer?.info.render.calls || 0,
        renderCount,
        isIdle: status === "ready" && !tween && !framePending && !isRendering,
        pixelRatio: renderer?.getPixelRatio() || 0,
        selected: selected?.name || null,
        planView,
      };
    },
    getBuildings() {
      return [...buildings, ...extraTargets].map(publicBuilding);
    },
    selectBuilding(id) {
      if (status !== "ready") return false;
      const b = [...buildings, ...extraTargets].find(
        (b) => b.buildingId === id || b.codes?.includes(id),
      );
      if (!b) return false;
      select(b, id);
      return true;
    },
    clearSelection,
    reset,
    setView(view) {
      if (!["plan", "3d"].includes(view))
        throw new TypeError("View must be plan or 3d");
      setView(view === "plan");
    },
    setCatalogue,
    setLocation(pin) {
      if (!pin || !Number.isFinite(pin.lat) || !Number.isFinite(pin.lng))
        return false;
      locationPin = { ...pin };
      positionLocation();
      invalidate();
      return true;
    },
    focusLocation() {
      if (status !== "ready" || !locationPin) return;
      const p = toMapPoint(locationPin);
      flyTo(new THREE.Vector3(p.x, 0, p.z), Math.max(1.4, camera.zoom));
      pinButton?.focus({ preventScroll: true });
    },
    project(id) {
      if (status !== "ready") return null;
      const b = [...buildings, ...extraTargets].find(
        (b) => b.buildingId === id || b.name === id || b.codes?.includes(id),
      );
      if (!b) return null;
      const p = new THREE.Vector3(...b.center).project(camera),
        rect = $("scene").getBoundingClientRect();
      return {
        x: rect.left + (p.x * 0.5 + 0.5) * rect.width,
        y: rect.top + (-p.y * 0.5 + 0.5) * rect.height,
      };
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      status = "disposed";
      loadSequence++;
      loadController?.abort();
      lifetime.abort();
      $("sources").close();
      teardownScene();
      root.replaceChildren();
      root.classList.remove("has-selection");
      mountedMaps.delete(root);
    },
  };
  mountedMaps.set(root, api);
  api.ready = init();
  return api;
}
