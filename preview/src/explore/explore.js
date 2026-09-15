import "@fontsource/archivo-black/latin-400.css";
import "@fontsource/dm-mono/latin-400.css";
import "@fontsource/dm-mono/latin-500.css";
import "@fontsource/caveat/latin-600.css";
import { lectures, laterLectures } from "./samples.js";
import {
  DEFAULTS,
  SONDERATE_WINDOW_MINUTES,
  sonderateCandidates,
  catalogueDefaults,
  CAMPUS_CENTRE,
  SUBJECTS,
  DAYS,
  validPin,
  walkMinutes,
  createSearchIndex,
  findMeetings,
  cardDescription,
  encodeState,
  decodeState,
} from "./model.js";
import { fixtureReference, loadCatalogue } from "./catalogue.js";
import { icon } from "./icons.js";
import "./explore.css";

const $ = (id) => document.getElementById(id);
const filterIcon =
  '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 7h18M3 17h18"/><path d="M8 4v6m8 4v6" stroke-width="3"/></svg>';
const defaults = { ...DEFAULTS };
let buildings = fixtureReference.buildings,
  topicDictionary = fixtureReference.topics,
  terms = fixtureReference.terms;
let all = [...lectures, ...laterLectures],
  searchIndex = createSearchIndex(topicDictionary);
const incomingHash = location.hash;
const state = decodeState(incomingHash, buildings, all);
const topics = SUBJECTS;
const mobile = matchMedia("(max-width:760px)");
const lifecycle = new AbortController();
let map,
  mapSelection = null,
  mapLoadPromise,
  draft,
  disposed = false,
  selectingFromList = false,
  lastDetailTrigger = null;
let visibleLimit = 40,
  liveData = false,
  loadingCatalogue = false,
  userChanged = false,
  locationRequest = 0;
let sharedNoticeShown = false,
  sharedNoticeTimer;
const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const clock = (minutes) =>
  `${Math.floor(minutes / 60) % 12 || 12}:${String(minutes % 60).padStart(2, "0")}`;
const fullTime = (minutes) =>
  `${clock(minutes)} ${minutes < 720 || minutes === 1440 ? "AM" : "PM"}`;
const timeInput = (minutes) =>
  `${String(Math.floor((minutes % 1440) / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
const activeCount = (filters) =>
  Object.keys(defaults).filter((key) => filters[key] !== defaults[key]).length;
const available = (filters, options) =>
  findMeetings(all, { ...state, ...filters }, buildings, searchIndex, options);
const walk = (meeting) => walkMinutes(state.pin, buildings[meeting.building]);
const walkText = (meeting) =>
  walk(meeting) === null ? "Walk unavailable" : `~${walk(meeting)} min`;
const buildingName = (code) => buildings[code]?.name || code;
const roomName = (meeting) =>
  meeting.room ? `${meeting.building} ${meeting.room}` : meeting.building;
const subjectIcon = (subject) =>
  ({
    Science: "orbit",
    "Arts & ideas": "asterisk",
    Society: "world",
    Technology: "code",
  })[subject] || "asterisk";
const pinLabel = () =>
  Math.hypot(
    state.pin.lat - CAMPUS_CENTRE.lat,
    state.pin.lng - CAMPUS_CENTRE.lng,
  ) < 0.000001
    ? "campus centre"
    : "your pin";
function syncURL() {
  const hash = encodeState(state);
  if (location.hash !== hash)
    history.replaceState(null, "", location.pathname + location.search + hash);
}
function showSharedNotice() {
  if (sharedNoticeShown || !hadSharedState) return;
  sharedNoticeShown = true;
  const selected = all.find((meeting) => meeting.id === state.selected);
  $("shared-banner-copy").textContent = selected
    ? `${selected.code} · ${selected.title}`
    : "Your filters and map position are restored.";
  $("shared-banner").hidden = false;
  clearTimeout(sharedNoticeTimer);
  sharedNoticeTimer = setTimeout(() => {
    if (!disposed) $("shared-banner").hidden = true;
  }, 6000);
}
$("sonder").innerHTML = `
<div class="app-shell">
<header class="masthead"><a class="logo" href="../" aria-label="Sonder — home">SON<b>DER</b></a><span class="masthead-note">TIMETABLE, UNSUPERVISED.</span><button id="preview-info" class="preview-stamp">UI PREVIEW <span>↗</span></button></header>
<main class="workspace">
  <section class="workspace-top" aria-label="Explore controls">
    <div class="page-title"><h1>Find a detour.</h1><p><span class="campus-context">ST. GEORGE</span> <span class="campus-context">·</span> <button id="change-time" aria-label="Change time filters"><span id="current-time"></span> ${icon("chevron")}</button><span id="data-label" class="demo-label">SAMPLE DAY</span></p></div>
    <div class="main-actions"><button id="sonderate" class="sonderate" title="Pick a random class starting soon">${icon("shuffle")} Sonderate ${icon("arrow")}</button><button id="open-filters" class="utility-button" aria-label="Filters" aria-haspopup="dialog">${filterIcon} <span class="filter-label">Filters</span> <span id="filter-count" hidden></span></button><button id="toggle-search" class="utility-button search-toggle" aria-expanded="false" aria-controls="search-panel" aria-label="Find a class">${icon("search")}<span>Find a class</span></button></div>
  </section>
  <div id="search-panel" class="search-panel" hidden><label for="search" class="sr-only">Search classes</label>${icon("search")}<input id="search" type="search" placeholder="Topic or course code…" autocomplete="off" enterkeyhint="search" maxlength="200"><button id="close-search" aria-label="Close and clear search">${icon("close")}</button></div>
  <div class="context-bar"><button id="open-location">${icon("pin")} Walks from <span id="pin-label">campus centre</span> <span aria-hidden="true">↗</span></button><button id="share-link">Share link ${icon("diagonal")}</button></div>
  <div class="panes">
    <section class="class-pane" aria-label="Nearby classes">
      <div class="pane-heading"><h2 id="results-title" tabindex="-1">STARTING SOON</h2><div class="list-heading-actions"><span id="result-count">08 CLASSES</span><button id="toggle-map" aria-expanded="false" aria-controls="map-pane">${icon("map")} <span>Show map</span></button></div></div><div class="column-headings" aria-hidden="true"><span>CLASS</span><span>WHEN</span><span>WHERE</span><span>WALK</span></div>
      <div id="active-summary" class="active-summary" hidden><span></span><button id="clear-all" aria-label="Clear search and filters">${icon("close")}</button></div>
      <div id="lecture-list" class="lecture-list"></div>
      <p class="list-note">A different room. A different rabbit hole.</p>
    </section>
    <section id="map-pane" class="map-pane" aria-label="Campus map">
      <div class="pane-heading map-heading"><h2>THE CAMPUS</h2><span class="map-hand-note">pick a building, peek inside. <span aria-hidden="true">↙</span></span><span id="mobile-map-hint" class="mobile-map-hint">Tap a building to explore</span></div>
      <div class="map-frame"><div id="explore-map" class="embedded-map"></div><div class="map-origin">${icon("pin")} <span id="map-pin-label">Campus centre</span><span>· drag the blue pin</span></div><div class="map-bottom"><span class="map-credit"><a href="https://open.toronto.ca/dataset/3d-massing/" target="_blank" rel="noreferrer">Toronto Open Data</a> · <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap</a></span><button id="map-sources">Sources ↗</button></div></div>
      <aside id="map-building-preview" class="map-building-preview" aria-label="Selected building" hidden><button id="map-building-classes" class="map-building-classes"><span class="map-building-copy"><span id="map-building-day" class="eyebrow"></span><strong id="map-building-name"></strong><span id="map-building-count"></span></span>${icon("arrow")}</button><button id="dismiss-map-building" class="icon-button" aria-label="Dismiss building preview">${icon("close")}</button></aside>
    </section>
  </div>
</main>
<footer class="app-footer"><span>NOT ON YOUR TIMETABLE. STILL ON YOUR CAMPUS.</span><span id="data-footer">SAMPLE TIMETABLE / FALL 2026</span></footer>
</div>
<nav class="mobile-switch" aria-label="Explore navigation"><button id="show-list" aria-pressed="true">${icon("list")} Classes <span id="mobile-count">8</span></button><button id="show-map" aria-pressed="false" aria-label="Campus map">${icon("map")} Map</button></nav>
<dialog id="filters-dialog" class="sheet filters-sheet" aria-labelledby="filters-title"><form id="filter-form"><header class="sheet-heading"><div><p class="eyebrow">A LITTLE MORE SPECIFIC</p><h2 id="filters-title">Your kind of detour.</h2></div><button type="button" id="close-filters" class="icon-button" aria-label="Close filters">${icon("close")}</button></header><div class="sheet-body">
 <fieldset class="subject-field"><legend>What sounds interesting?</legend><div class="topic-chips">${topics.map((topic) => `<button type="button" data-topic="${topic}" aria-pressed="${topic === "Everything"}">${topic}</button>`).join("")}</div></fieldset>
 <div class="filter-grid"><label>Term<select id="term"><option value="F">Fall 2026</option><option value="S">Winter 2027</option></select></label><label>Day<select id="day">${DAYS.map((day, i) => `<option value="${i + 1}">${day}</option>`).join("")}</select></label></div>
 <fieldset class="gap-field"><legend>Your free gap</legend><div class="gap-values"><label>From<input id="gap-from" type="time" step="600" required></label><span aria-hidden="true">—</span><label>Until<input id="gap-until" type="time" step="600" required></label></div><div class="gap-slider"><div class="gap-track"><span id="gap-fill"></span></div><input id="gap-start" type="range" min="0" max="1430" step="10" aria-label="Gap start"><input id="gap-end" type="range" min="10" max="1440" step="10" aria-label="Gap end"></div><p id="gap-note" class="filter-note">Classes must start and finish inside your gap.</p></fieldset>
 <label class="time-field">Maximum walk from your pin<select id="walk-time"><option value="5">~5 minutes</option><option value="10">~10 minutes</option><option value="15">~15 minutes</option><option value="30">~30 minutes</option></select></label>
 <label class="room-filter"><span><strong>Bigger rooms only</strong><small>100+ seats. More room to blend in.</small></span><input id="big-rooms" type="checkbox"></label>
 <p class="filter-note">Walking estimates use distance, not turn-by-turn routes. Unknown room sizes are excluded only when bigger rooms is on.</p>
 </div><footer class="sheet-actions"><button type="button" id="reset-filters" class="text-button">Reset</button><button type="submit" id="apply-filters" class="ink-button">Show 8 classes ${icon("arrow")}</button></footer></form></dialog>
<dialog id="lecture-detail" class="sheet detail-sheet" aria-labelledby="detail-title"></dialog>
<dialog id="about-preview" class="sheet about-sheet" aria-labelledby="about-title"><header class="sheet-heading"><div><p class="eyebrow">NOT QUITE THE REAL THING</p><h2 id="about-title">A preview of Sonder.</h2></div><button id="close-preview" class="icon-button" aria-label="Close preview information">${icon("close")}</button></header><div class="sheet-body"><p>The map uses sourced campus geometry. The SAMPLE DAY label means meetings and descriptions are fixtures; the label changes when all three published catalogue files are ready.</p><p>Sonderate picks a reachable class starting within ${SONDERATE_WINDOW_MINUTES} minutes of your gap’s start. Walking estimates use your pin and building coordinates. Search, ranking, and filters run locally.</p><p>Shared links include your filters and approximate pin position. No account or browser storage is used. <button id="retry-data" class="text-button">Check for published timetable ↗</button><span id="data-status" role="status"></span></p></div></dialog>
<dialog id="location-dialog" class="sheet" aria-labelledby="location-title"><header class="sheet-heading"><div><p class="eyebrow">START HERE</p><h2 id="location-title">Where are you walking from?</h2></div><button id="close-location" class="icon-button" aria-label="Close location">${icon("close")}</button></header><div class="sheet-body"><p>Campus centre is the default. Choose a building, use your location, or drag the blue pin on the map.</p><label class="time-field">Start near a building<select id="location-building"><option value="">Choose a building…</option></select></label><div class="location-actions"><button id="use-location" class="ink-button">Use my location</button><button id="centre-location" class="text-button">Campus centre</button><button id="move-pin" class="text-button">Move pin on map ↗</button></div><p id="location-status" class="filter-note" role="status"></p><p class="filter-note">Shared links include this approximate position.</p></div></dialog>
<dialog id="share-dialog" class="sheet" aria-labelledby="share-title"><header class="sheet-heading"><h2 id="share-title">Share this detour.</h2><button id="close-share" class="icon-button" aria-label="Close share link">${icon("close")}</button></header><div class="sheet-body"><label class="time-field">Copy this link<input id="share-url" type="url" readonly></label><p class="filter-note">Includes your filters and approximate pin position.</p></div></dialog>
<div id="shared-banner" class="shared-banner" hidden role="status" aria-live="polite"><span><strong>Shared detour loaded</strong><small id="shared-banner-copy"></small></span><button id="close-shared-banner" class="icon-button" aria-label="Dismiss shared link notice">${icon("close")}</button></div>
<div id="announcement" class="sr-only" role="status" aria-live="polite"></div>`;

function ensureMap() {
  if (map) return map.ready;
  if (mapLoadPromise) return mapLoadPromise;
  $("explore-map").innerHTML =
    '<div class="map-component-message" role="status">Opening the campus…</div>';
  mapLoadPromise = import("../campus-map.js")
    .then(({ mountCampusMap }) => {
      if (disposed) return false;
      map = mountCampusMap($("explore-map"), {
        embedded: true,
        catalogue: buildings,
        labelTop: 60,
        labelBottom: 95,
        location: state.pin,
        onLocationChange(pin) {
          setPin(pin);
        },
        onSelect(building) {
          if (disposed) return;
          mapSelection = building;
          renderMapSelection();
          if (selectingFromList) return;
          state.building = building
            ? { codes: building.codes, name: building.name }
            : null;
          changed();
        },
      });
      return map.ready;
    })
    .then((ok) => {
      if (ok && !disposed) {
        map.setLocation(state.pin);
        syncMapControlLabels();
        updateMapCounts();
        if (state.building?.codes[0]) focusBuilding(state.building.codes[0]);
      }
      return ok;
    })
    .catch((error) => {
      if (!disposed) {
        $("explore-map").innerHTML =
          '<div class="map-component-message"><p>The map couldn’t load.</p><button id="retry-component" class="text-button">Try again</button></div>';
        mapLoadPromise = null;
        console.warn("Map module unavailable", error);
      }
      return false;
    });
  return mapLoadPromise;
}
function focusBuilding(code) {
  ensureMap().then((ok) => {
    if (!ok || disposed) return;
    selectingFromList = true;
    const found = map.selectBuilding(code);
    selectingFromList = false;
    if (!found)
      $("announcement").textContent =
        "This building has no selectable mesh. Its name, room, and walk remain in the class list.";
  });
}
// The map owns selection and the camera; this shell owns the second tap into classes.
// Keeping this separate from state.building also covers “Show on map” from a class.
function renderMapSelection() {
  const panel = $("map-building-preview");
  panel.hidden = !mapSelection;
  $("mobile-map-hint").textContent = mapSelection
    ? "Tap its name to see classes"
    : "Tap a building to explore";
  if (!mapSelection) return;
  const building = { codes: mapSelection.codes, name: mapSelection.name };
  const count = available({ building }).length;
  const hasCatalogueCode = building.codes.some((code) =>
    Object.hasOwn(buildings, code),
  );
  $("map-building-day").textContent =
    `${DAYS[state.day - 1]} · ${terms[state.term]}`;
  $("map-building-name").textContent = building.name;
  $("map-building-count").textContent = !hasCatalogueCode
    ? "No timetable listings for this building"
    : count
      ? `View ${count} ${count === 1 ? "class" : "classes"} →`
      : "No matches with these filters · View classes →";
  $("map-building-classes").disabled = !hasCatalogueCode;
  $("map-building-classes").setAttribute(
    "aria-label",
    hasCatalogueCode
      ? `See classes in ${building.name}`
      : `${building.name}: no timetable listings`,
  );
}
function updateMapCounts() {
  if (!map || map.status !== "ready") return;
  const counts = new Map();
  for (const l of all)
    if (l.term === state.term && l.day === state.day)
      counts.set(l.building, (counts.get(l.building) || 0) + 1);
  for (const label of $("explore-map").querySelectorAll(".map-label")) {
    const count =
      counts.get(label.querySelector(".label-code")?.textContent) || 0;
    let badge = label.querySelector(".lecture-badge");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "lecture-badge";
      label.append(badge);
    }
    badge.textContent = count;
    badge.hidden = !count;
    label.classList.toggle("with-lectures", count > 0);
  }
}
function topicGrid() {
  return `<div class="browse-topics"><p>Try a topic</p><div class="topic-chips">${Object.entries(
    topicDictionary,
  )
    .map(
      ([id, topic]) =>
        `<button type="button" data-browse="${esc(id)}" aria-label="Search ${esc(topic.label)}">${esc(topic.label)}</button>`,
    )
    .join("")}</div></div>`;
}
function card(l) {
  const reachable = walk(l) !== null && l.start >= state.gapStart + walk(l);
  const timing = state.building
    ? esc(l.section)
    : !reachable
      ? "ALLOW FOR THE WALK"
      : l.start - state.gapStart <= 20
        ? `IN ${l.start - state.gapStart} MIN`
        : "FITS YOUR GAP";
  return `<article class="class-ticket"><button class="lecture-open" data-open="${esc(l.id)}" aria-label="Explore ${esc(l.title)}"><div class="ticket-course"><div class="ticket-top"><span class="course-code">${icon(subjectIcon(l.subject))}${esc(l.code)}</span><span class="starts">${timing}</span></div><h3>${esc(l.title)}</h3><p class="ticket-description">${esc(cardDescription(l.description))}</p></div><div class="ticket-time"><span class="sr-only">When: </span>${icon("clock")}<span>${fullTime(l.start)}<span class="time-separator">–</span>${fullTime(l.end)}</span></div><div class="ticket-place">${icon("pin")}<div><span>${esc(buildingName(l.building))}</span><small>${esc(roomName(l))}</small></div></div><div class="ticket-walk">${icon("walk")}<span>${walkText(l)}<small class="mobile-walk-label"> walk</small></span>${icon("diagonal")}</div></button></article>`;
}
function render() {
  const items = available(state),
    count = activeCount(state);
  $("current-time").textContent =
    `${DAYS[state.day - 1].slice(0, 3).toUpperCase()} ${fullTime(state.gapStart)}–${fullTime(state.gapEnd)}`;
  $("data-label").textContent = liveData ? terms[state.term] : "SAMPLE DAY";
  $("data-footer").textContent =
    `${liveData ? "PUBLISHED TIMETABLE" : "SAMPLE TIMETABLE"} / ${terms[state.term]}`;
  $("result-count").textContent =
    `${String(items.length).padStart(2, "0")} ${items.length === 1 ? "CLASS" : "CLASSES"}`;
  $("mobile-count").textContent = items.length;
  $("filter-count").hidden = !count;
  $("filter-count").textContent = count;
  $("open-filters").classList.toggle("has-filters", count > 0);
  $("results-title").textContent = state.building
    ? `${DAYS[state.day - 1].toUpperCase()} IN THIS BUILDING`
    : state.query
      ? "SEARCH RESULTS"
      : "IN YOUR GAP";
  $("active-summary").hidden = !(state.building || state.query || count);
  $("active-summary").querySelector("span").textContent = [
    state.building?.name,
    state.building ? "Full day · gap and walk limits off" : "",
    state.query ? `“${state.query}”` : "",
    count ? `${count} filters on` : "",
  ]
    .filter(Boolean)
    .join(" · ");
  $("lecture-list").innerHTML = items.length
    ? items.slice(0, visibleLimit).map(card).join("") +
      (items.length > visibleLimit
        ? `<button id="show-more" class="load-more text-button">Show ${Math.min(40, items.length - visibleLimit)} more classes ↓</button>`
        : "")
    : `<div class="empty-state"><span aria-hidden="true">↗</span><h3>No classes match.</h3><p>${state.query ? `Nothing for “${esc(state.query)}” with these filters.` : "No classes fit this day and these filters."} Try another gap or explore a topic.</p><button id="reset-empty" class="text-button">Reset search & filters ${icon("arrow")}</button>${topicGrid()}</div>`;
  $("pin-label").textContent = pinLabel();
  $("map-pin-label").textContent = `From ${pinLabel()}`;
  $("announcement").textContent =
    `${items.length} ${liveData ? "" : "sample "}classes shown.`;
  updateMapCounts();
  renderMapSelection();
  syncURL();
}
function changed() {
  userChanged = true;
  visibleLimit = 40;
  render();
}
function populateFilters() {
  $("term").value = draft.term;
  $("day").value = draft.day;
  $("walk-time").value = draft.walk;
  $("big-rooms").checked = !!draft.minSeats;
  document
    .querySelectorAll("[data-topic]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        button.dataset.topic === draft.subject,
      ),
    );
  syncGap();
  updateFilterCount();
}
function syncGap() {
  $("gap-start").value = draft.gapStart;
  $("gap-end").value = draft.gapEnd;
  $("gap-start").setAttribute("aria-valuetext", fullTime(draft.gapStart));
  $("gap-end").setAttribute("aria-valuetext", fullTime(draft.gapEnd));
  $("gap-start").setAttribute("aria-valuemax", draft.gapEnd - 10);
  $("gap-end").setAttribute("aria-valuemin", draft.gapStart + 10);
  $("gap-from").value = timeInput(draft.gapStart);
  $("gap-until").value = timeInput(draft.gapEnd);
  // End 00:00 means midnight at the end of the chosen day.
  $("gap-until").setCustomValidity("");
  $("gap-from").setCustomValidity("");
  $("gap-fill").style.left = `${(draft.gapStart / 1440) * 100}%`;
  $("gap-fill").style.width =
    `${((draft.gapEnd - draft.gapStart) / 1440) * 100}%`;
  $("gap-note").textContent = state.building
    ? "Building view shows the full day. Your gap will apply when you leave the building view."
    : `${fullTime(draft.gapStart)} – ${fullTime(draft.gapEnd)}. Classes must start and finish inside this gap.`;
}
function updateFilterCount() {
  const count = available(draft).length;
  $("apply-filters").innerHTML =
    `Show ${count} ${count === 1 ? "class" : "classes"} ${icon("arrow")}`;
}
function openFilters() {
  draft = Object.fromEntries(
    Object.keys(defaults).map((key) => [key, state[key]]),
  );
  populateFilters();
  $("filters-dialog").showModal();
}
function clearAll() {
  Object.assign(state, defaults, { query: "", building: null });
  $("search").value = "";
  if (map) {
    selectingFromList = true;
    map.reset();
    selectingFromList = false;
  }
  changed();
}
function setView(view) {
  if (mobile.matches && view === "map") {
    if (document.activeElement === $("search")) $("search").blur();
    toggleSearch(false, false);
  }
  state.view = view;
  document.body.dataset.view = view;
  $("show-list").setAttribute("aria-pressed", view === "list");
  $("show-map").setAttribute("aria-pressed", view === "map");
  $("toggle-map").setAttribute("aria-expanded", view === "map");
  $("toggle-map").querySelector("span").textContent =
    view === "map" ? "Hide map" : "Show map";
  if (view === "map") ensureMap();
  syncURL();
}
function toggleSearch(open = $("search-panel").hidden, focus = true) {
  $("search-panel").hidden = !open;
  $("toggle-search").setAttribute("aria-expanded", open);
  if (open && focus) {
    if (mobile.matches) setView("list");
    $("search").focus();
  }
}
function openLecture(id, fromRandom = false) {
  const l = all.find((item) => item.id === id);
  if (!l) return;
  if (!$("lecture-detail").open) lastDetailTrigger = document.activeElement;
  state.selected = id;
  if (state.view === "map") focusBuilding(l.building);
  $("lecture-detail").innerHTML =
    `<header class="sheet-heading"><div><p class="eyebrow">${fromRandom ? "YOU HAVE BEEN SONDERATED" : "A POSSIBLE DETOUR"}</p><span class="detail-code">${esc(l.code)} · ${esc(l.section)}</span></div><button id="close-detail" class="icon-button" aria-label="Close class details">${icon("close")}</button></header><div class="sheet-body detail-body"><p class="hand-note">${fromRandom ? "didn’t see that one coming." : "a little outside your usual."}</p><h2 id="detail-title">${esc(l.title)}</h2><p class="detail-description">${esc(l.descFull || l.description)}</p><dl><div><dt>WHEN</dt><dd>${fullTime(l.start)} – ${fullTime(l.end)}<small>${DAYS[l.day - 1]} · ${esc(terms[l.term])}</small></dd></div><div><dt>WHERE</dt><dd>${esc(buildingName(l.building))}<small>${esc(roomName(l))}</small></dd></div><div><dt>THE WALK</dt><dd>${walkText(l)} from ${pinLabel()}<small>Distance estimate · allow extra time</small></dd></div><div><dt>THE ROOM</dt><dd>${l.seats === null ? "Capacity unknown" : `${l.seats.toLocaleString()} seats`}<small>Capacity, not attendance</small></dd></div></dl><p class="sample-note">${liveData ? "PUBLISHED MEETING" : "SAMPLE MEETING"} · ${DAYS[l.day - 1].toUpperCase()}</p></div><footer class="detail-actions"><button id="show-building" class="ink-button">${icon("map")} Show on map ${icon("arrow")}</button><button id="building-day" class="text-button">See this building’s day ↗</button><button id="share-class" class="text-button">Share class ↗</button><button id="sonderate-again" class="text-button">${icon("shuffle")} Sonderate again</button></footer>`;
  syncDetailLayout();
  if (!$("lecture-detail").open) $("lecture-detail").showModal();
  else $("close-detail").focus();
  syncURL();
}
function sonderate() {
  const eligible = sonderateCandidates(all, state, buildings, searchIndex);
  const alternatives = eligible.filter((l) => l.id !== state.selected),
    pool = alternatives.length ? alternatives : eligible;
  if (pool.length)
    return openLecture(pool[Math.floor(Math.random() * pool.length)].id, true);
  if (!$("lecture-detail").open) lastDetailTrigger = document.activeElement;
  state.selected = null;
  syncURL();
  $("lecture-detail").innerHTML =
    `<header class="sheet-heading"><p class="eyebrow">A SMALL PLOT TWIST</p><button id="close-detail" class="icon-button" aria-label="Close class details">${icon("close")}</button></header><div class="sheet-body"><h2 id="detail-title">Nothing you can get to in time.</h2><p>No class starts within ${SONDERATE_WINDOW_MINUTES} minutes of ${fullTime(state.gapStart)} and fits your filters and walk. Try another gap.</p></div><footer class="detail-actions"><button id="adjust-filters" class="ink-button">Adjust filters ${icon("arrow")}</button></footer>`;
  if (!$("lecture-detail").open) $("lecture-detail").showModal();
}
function setPin(pin) {
  if (!validPin(pin)) return false;
  state.pin = {
    lat: Number(pin.lat.toFixed(6)),
    lng: Number(pin.lng.toFixed(6)),
  };
  map?.setLocation(state.pin);
  changed();
  if ($("lecture-detail").open && state.selected) openLecture(state.selected);
  return true;
}
function populateLocations() {
  $("location-building").innerHTML =
    '<option value="">Choose a building…</option>' +
    Object.entries(buildings)
      .sort((a, b) => a[1].name.localeCompare(b[1].name))
      .map(
        ([code, b]) =>
          `<option value="${esc(code)}">${esc(code)} · ${esc(b.name)}</option>`,
      )
      .join("");
}
async function shareLink(source = "toolbar") {
  syncURL();
  try {
    await navigator.clipboard.writeText(location.href);
    $("announcement").textContent =
      "Link copied. It includes your filters and approximate pin position.";
    const label = source === "class" ? $("share-class") : $("share-link");
    const original = source === "class" ? "Share class ↗" : "Share link ↗";
    label.textContent = "Copied ✓";
    setTimeout(() => {
      if (!disposed) {
        label.innerHTML =
          source === "class" ? original : `Share link ${icon("diagonal")}`;
      }
    }, 2500);
    if (source === "class") {
      $("share-url").value = location.href;
      $("share-dialog").showModal();
      $("share-url").select();
    }
  } catch {
    $("share-url").value = location.href;
    $("share-dialog").showModal();
    $("share-url").select();
  }
}
function restore(hash) {
  if ($("lecture-detail").open) $("lecture-detail").close();
  Object.assign(state, decodeState(hash, buildings, all));
  $("search").value = state.query;
  toggleSearch(!!state.query, false);
  map?.setLocation(state.pin);
  setView(state.view);
  render();
  if (state.building?.codes[0] && state.view === "map")
    focusBuilding(state.building.codes[0]);
  if (state.selected) openLecture(state.selected);
  showSharedNotice();
}
async function refreshCatalogue() {
  if (loadingCatalogue) return;
  loadingCatalogue = true;
  $("data-status").textContent = "Checking…";
  const originalHash = !liveData && incomingHash ? incomingHash : location.hash;
  try {
    const catalogue = await loadCatalogue(lifecycle.signal);
    if (disposed) return;
    if (!catalogue) {
      $("data-status").textContent = liveData
        ? "Updated files are not ready. The last loaded timetable remains available."
        : "Published files are not ready. Sample timetable is shown.";
      return;
    }
    const firstLoad = !liveData;
    all = catalogue.meetings;
    buildings = catalogue.buildings;
    map?.setCatalogue(buildings);
    topicDictionary = catalogue.topics;
    terms = catalogue.terms;
    searchIndex = createSearchIndex(topicDictionary);
    liveData = true;
    populateLocations();
    $("preview-info").innerHTML = "TIMETABLE INFO <span>↗</span>";
    $("data-status").textContent =
      `Published ${catalogue.generated || "timetable loaded"}.`;
    if (firstLoad) Object.assign(defaults, catalogueDefaults());
    if (firstLoad && !userChanged && !hadSharedState) {
      Object.assign(state, defaults, { selected: null });
      render();
    } else restore(userChanged ? location.hash : originalHash);
  } catch (error) {
    if (!disposed)
      $("data-status").textContent = liveData
        ? "Could not refresh. The last loaded timetable remains available."
        : "Could not load the published timetable. Sample timetable is shown.";
  } finally {
    loadingCatalogue = false;
  }
}
function listen(target, type, callback) {
  target.addEventListener(
    type,
    (event) => {
      if (
        event.isTrusted &&
        ["click", "input", "change", "submit", "keydown"].includes(type)
      )
        userChanged = true;
      callback(event);
    },
    { signal: lifecycle.signal },
  );
}
listen($("sonderate"), "click", sonderate);
for (const id of ["open-filters", "change-time"])
  listen($(id), "click", openFilters);
listen($("close-filters"), "click", () => $("filters-dialog").close());
listen($("reset-filters"), "click", () => {
  draft = { ...defaults };
  populateFilters();
});
listen($("filter-form"), "submit", (event) => {
  event.preventDefault();
  Object.assign(state, draft);
  $("filters-dialog").close();
  changed();
});
for (const [id, key] of [
  ["walk-time", "walk"],
  ["day", "day"],
  ["term", "term"],
])
  listen($(id), "change", (event) => {
    draft[key] =
      key === "term" ? event.target.value : Number(event.target.value);
    updateFilterCount();
  });
for (const [id, key] of [
  ["gap-start", "gapStart"],
  ["gap-end", "gapEnd"],
])
  listen($(id), "input", (event) => {
    const value = Number(event.target.value);
    draft[key] =
      key === "gapStart"
        ? Math.min(value, draft.gapEnd - 10)
        : Math.max(value, draft.gapStart + 10);
    syncGap();
    updateFilterCount();
  });
for (const [id, key] of [
  ["gap-from", "gapStart"],
  ["gap-until", "gapEnd"],
])
  listen($(id), "change", (event) => {
    const [hours, minutes] = event.target.value.split(":").map(Number);
    const value =
      key === "gapEnd" && hours === 0 && minutes === 0
        ? 1440
        : hours * 60 + minutes;
    if (!Number.isFinite(value)) return;
    if (
      (key === "gapStart" && value > draft.gapEnd - 10) ||
      (key === "gapEnd" && value < draft.gapStart + 10)
    ) {
      event.target.setCustomValidity(
        "Choose an end at least 10 minutes after the start.",
      );
      event.target.reportValidity();
      return;
    }
    draft[key] = value;
    syncGap();
    updateFilterCount();
  });
listen($("big-rooms"), "change", (event) => {
  draft.minSeats = event.target.checked ? 100 : 0;
  updateFilterCount();
});
listen($("toggle-search"), "click", () => toggleSearch());
listen($("search"), "input", (event) => {
  state.query = event.target.value.slice(0, 200);
  changed();
});
listen($("search"), "keydown", (event) => {
  if (mobile.matches && event.key === "Enter") {
    event.preventDefault();
    $("search").blur();
    $("results-title").focus({ preventScroll: true });
  }
});
listen($("close-search"), "click", () => {
  state.query = "";
  $("search").value = "";
  toggleSearch(false);
  changed();
  $("toggle-search").focus();
});
listen($("clear-all"), "click", clearAll);
listen($("toggle-map"), "click", () =>
  setView(state.view === "map" ? "list" : "map"),
);
listen($("map-building-classes"), "click", () => {
  if (!mapSelection || $("map-building-classes").disabled) return;
  state.building = { codes: [...mapSelection.codes], name: mapSelection.name };
  changed();
  setView("list");
  $("results-title").focus({ preventScroll: true });
});
listen($("dismiss-map-building"), "click", () => {
  map?.clearSelection();
  $("explore-map").querySelector("canvas")?.focus({ preventScroll: true });
});
listen($("show-list"), "click", () => setView("list"));
listen($("show-map"), "click", () => setView("map"));
listen($("preview-info"), "click", () => $("about-preview").showModal());
listen($("close-preview"), "click", () => $("about-preview").close());
listen($("retry-data"), "click", refreshCatalogue);
listen($("map-sources"), "click", async () => {
  if (await ensureMap()) $("explore-map").querySelector("#sources").showModal();
});
listen($("share-link"), "click", shareLink);
listen($("close-share"), "click", () => $("share-dialog").close());
listen($("close-shared-banner"), "click", () => {
  clearTimeout(sharedNoticeTimer);
  $("shared-banner").hidden = true;
});
listen($("open-location"), "click", () => {
  $("location-status").textContent = `Walking from ${pinLabel()}.`;
  $("location-dialog").showModal();
});
listen($("close-location"), "click", () => $("location-dialog").close());
listen($("location-building"), "change", (event) => {
  locationRequest++;
  const b = buildings[event.target.value];
  if (b && setPin(b))
    $("location-status").textContent = `Walks now start at ${b.name}.`;
});
listen($("centre-location"), "click", () => {
  locationRequest++;
  setPin(CAMPUS_CENTRE);
  $("location-building").value = "";
  $("location-status").textContent = "Walks now start at campus centre.";
});
listen($("move-pin"), "click", async () => {
  $("location-dialog").close();
  setView("map");
  if (await ensureMap()) map.focusLocation();
});
listen($("use-location"), "click", () => {
  const request = ++locationRequest;
  if (!navigator.geolocation) {
    $("location-status").textContent =
      "Location is unavailable. Choose a building or move the pin.";
    return;
  }
  $("location-status").textContent = "Finding your location…";
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      if (disposed || request !== locationRequest) return;
      const ok = setPin({ lat: coords.latitude, lng: coords.longitude });
      $("location-status").textContent = ok
        ? "Walks now start at your location. Adjust the pin if needed."
        : "You appear to be outside the campus area. Choose a building or move the pin.";
      $("location-building").value = "";
    },
    () => {
      if (!disposed && request === locationRequest)
        $("location-status").textContent =
          "Location could not be used. Your pin has stayed in place; choose a building or move it on the map.";
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 },
  );
});
listen($("lecture-detail"), "close", () => {
  // A queued close event can arrive after a shared detail has been reopened.
  if ($("lecture-detail").open) return;
  state.selected = null;
  syncURL();
  if (
    lastDetailTrigger?.isConnected &&
    !lastDetailTrigger.closest("#lecture-detail")
  )
    lastDetailTrigger.focus({ preventScroll: true });
});
listen(document, "click", (event) => {
  if (event.target.closest("#retry-component")) ensureMap();
  const topic = event.target.closest("[data-topic]");
  if (topic) {
    draft.subject = topic.dataset.topic;
    populateFilters();
  }
  const browse = event.target.closest("[data-browse]");
  if (browse) {
    state.query = browse.dataset.browse;
    changed();
    $("search").value = state.query;
    toggleSearch(true);
    $("search").focus({ preventScroll: true });
    $("search").select();
  }
  const open = event.target.closest("[data-open]");
  if (open) openLecture(open.dataset.open);
  if (event.target.closest("#close-detail")) $("lecture-detail").close();
  if (event.target.closest("#sonderate-again")) sonderate();
  if (event.target.closest("#share-class")) shareLink("class");
  if (event.target.closest("#show-more")) {
    visibleLimit += 40;
    render();
  }
  if (event.target.closest("#reset-empty")) clearAll();
  if (event.target.closest("#adjust-filters")) {
    $("lecture-detail").close();
    openFilters();
  }
  if (event.target.closest("#show-building, #building-day")) {
    const l = all.find((item) => item.id === state.selected);
    $("lecture-detail").close();
    state.selected = null;
    if (!l) return;
    if (event.target.closest("#building-day")) {
      state.building = { codes: [l.building], name: buildingName(l.building) };
      setView("list");
      changed();
    } else {
      setView("map");
      focusBuilding(l.building);
    }
  }
});
listen(document, "keydown", (event) => {
  if (
    event.key === "/" &&
    !document.querySelector("dialog[open]") &&
    !["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement.tagName)
  ) {
    event.preventDefault();
    toggleSearch(true);
  }
});
listen(window, "hashchange", () => {
  userChanged = true;
  restore(location.hash);
});
// Reuse the same primary action so its state and event handler survive breakpoints.
function syncMapControlLabels() {
  for (const [id, small, full] of [
    ["view-3d", "3D", "3D VIEW"],
    ["view-2d", "Plan", "PLAN VIEW"],
  ]) {
    const button = $("explore-map").querySelector("#" + id);
    if (!button) continue;
    button.textContent = mobile.matches ? small : full;
    button.setAttribute("aria-label", full);
  }
}
function syncDetailLayout() {
  const description = document.querySelector(".detail-description");
  const facts = document.querySelector(".detail-body dl");
  if (!description || !facts) return;
  if (mobile.matches) description.before(facts);
  else facts.before(description);
}
function syncMobileLayout() {
  const action = $("sonderate");
  const body = $("filters-dialog").querySelector(".sheet-body");
  const subject = body.querySelector(".subject-field"),
    gap = body.querySelector(".gap-field"),
    time = body.querySelector(".time-field");
  if (mobile.matches) {
    document
      .querySelector(".mobile-switch")
      .insertBefore(action, $("show-map"));
    body.prepend(gap);
    body.insertBefore(subject, body.querySelector(".room-filter"));
  } else {
    document.querySelector(".main-actions").prepend(action);
    body.prepend(subject);
    body.insertBefore(gap, time);
  }
  syncDetailLayout();
  syncMapControlLabels();
  syncMobileViewport();
}
function syncMobileViewport() {
  const viewport = window.visualViewport;
  const height = viewport?.height || innerHeight;
  const keyboardInset = Math.max(
    0,
    innerHeight - height - (viewport?.offsetTop || 0),
  );
  const editing = document.activeElement?.matches(
    'input:not([type="range"]):not([type="checkbox"]), textarea',
  );
  document.body.classList.toggle(
    "mobile-keyboard",
    mobile.matches && !!editing && keyboardInset > 140,
  );
  document.documentElement.style.setProperty(
    "--mobile-viewport-height",
    `${height}px`,
  );
  document.documentElement.style.setProperty(
    "--mobile-keyboard-inset",
    `${mobile.matches && editing ? keyboardInset : 0}px`,
  );
}
listen(mobile, "change", syncMobileLayout);
if (window.visualViewport)
  listen(window.visualViewport, "resize", syncMobileViewport);
listen(window, "resize", syncMobileViewport);
listen(document, "focusin", syncMobileViewport);
listen(document, "focusout", () =>
  requestAnimationFrame(() => {
    if (!disposed) syncMobileViewport();
  }),
);
syncMobileLayout();
window.sonderPreview = {
  get map() {
    return map;
  },
  state,
  get liveData() {
    return liveData;
  },
};
const hadSharedState = incomingHash.startsWith("#v=1");
populateLocations();
$("search").value = state.query;
toggleSearch(!!state.query, false);
setView(state.view);
render();
if (state.selected) openLecture(state.selected);
refreshCatalogue();
if (import.meta.hot)
  import.meta.hot.dispose(() => {
    disposed = true;
    lifecycle.abort();
    map?.dispose();
    document
      .querySelectorAll("dialog[open]")
      .forEach((dialog) => dialog.close());
  });
