# St. George campus map

A finished standalone map component: white background, UofT blue linework, sourced campus geometry, orbit/zoom, plan view, building selection, and source references. No lecture data, landing page, model API calls, map tokens, or runtime backend.

## Run

```sh
cd preview
npm install
npm run dev -- --port 5174 --strictPort
```

Open http://localhost:5174. Drag to orbit; right-drag or two-finger drag to pan; scroll/pinch to zoom. Plan view switches one-finger/left drag to panning. Select buildings by clicking geometry, a label, or the building selector. With the canvas focused, arrow keys pan, +/− zoom, and Home resets. Escape closes selection. The source dialog links directly to the datasets.

```sh
npm run build
npm test
```

Tests use a separate temporary Vite server on port 5175. Install the browsers once with `npx playwright install chromium webkit` if needed. Chromium and WebKit both run the suite; real pinch/cancel injection uses Chromium’s CDP and is skipped in WebKit.

## Integrating the map later

`src/campus-map.js` owns its scoped styles, fonts, renderer, and cleanup. The standalone entry is `src/main.js`; only that entry exposes `window.campusMap` for local inspection. The component needs Three.js and a Vite-compatible bundler. Copy `public/data/` and `public/THIRD_PARTY_NOTICES.txt` into the host application's public assets.

```js
import { mountCampusMap } from './src/campus-map.js';

const map = mountCampusMap(container, {
  // Optional; must end with a slash. Default respects Vite's configured base.
  assetBase: '/data/',
  onSelect(building) {
    // null on deselection; otherwise id, name, codes, center, official links.
    console.log(building);
  },
});
if (await map.ready) map.selectBuilding('BA');
map.setView('plan'); // or '3d'
// When the parent view unmounts:
map.dispose();
```

The container defaults to viewport height; the host can override `.campus-map` height (minimum 540px). Container queries and ResizeObserver handle embedded widths. Mounting into an already-used container disposes its previous map.

| API | Behavior |
| --- | --- |
| `ready` | Resolves `true` when loaded or `false` on failure/disposal. Updated by the Retry button. |
| `status` | `loading`, `ready`, `error`, or `disposed`. |
| `getBuildings()` | Copies of selectable identities, including source codes and complex notes. |
| `selectBuilding(idOrCode)` | Focuses a stable identity or official code, returns whether found. |
| `clearSelection()`, `reset()` | Clear details while preserving view, or restore overview. |
| `setView('plan' \| '3d')` | Switch camera mode. |
| `dispose()` | Abort loads, remove listeners, cancel frames, release GPU resources. |

Selection also dispatches the bubbling `campus:select` DOM event with the same detail as `onSelect`. `stats` and `project(idOrName)` support diagnostics. This component is browser-only; mount it after the host view has attached its container.

`npm run build` emits deployable static files in `dist/`. For a subdirectory, build with `npm run build -- --base=/campus/`. Serve the files over HTTP(S); retain attribution. No server process is needed in production.

## Geometry and provenance

- **Building surfaces:** [City of Toronto 3D Massing](https://open.toronto.ca/dataset/3d-massing/), 2025 multipatch release, downloaded 2026-09-14. Resource ID `ad1164e1-cd93-4314-b73c-e9ebf87a1c74`. Tiles `50H_NORTH`, `50H_SOUTH_2`, `50H_SOUTH_3`, and `50J`.
- **Campus extent, ground features, names:** [OpenStreetMap](https://www.openstreetmap.org/relation/18447148), retrieved 2026-09-14 through the OSM map API. Campus relation 18447148 plus mapped college grounds; ROM and the Ontario Legislature remain as context. Bounded source area: west -79.4035, south 43.6580, east -79.3890, north 43.6693.
- **Campus reference:** [UofT official map](https://map.utoronto.ca/?id=1809). Used to check the campus arrangement and link identifiable buildings to their official entries. The identity pass cross-checks 184 directory entries and named OSM building relations. Unmatched city geometry remains unnamed; this is not a complete official building directory. The audit is recorded in `scripts/identity-audit.json`.
- **Colour reference:** UofT Blue `#002A5C`; blue tints and white. [UofT brand guidelines](https://adcomms.utoronto.ca/images/brand/assets/DefyGravity_BrandGuidelines-1.0.pdf).

Source XY coordinates are transformed from their declared CRS into EPSG:32617 (UTM 17N), then translated into local metres around 43.6623° N, 79.3968° W. Despite the archive filename, the extracted city layers declare EPSG:3857; the conversion uses that declared CRS. Original city roof and wall surfaces replace the earlier procedural approximations. Heights are not exaggerated.

The city stores some connected buildings in one feature. Convocation Hall is assigned its own interaction group using the OSM footprint within the connected Simcoe complex. This does not change the source triangles. Hart House, Trinity, and Knox use named OSM multipolygon identities. Gerstein and Canadiana are represented as one connected complex because city surfaces straddle their boundaries; both SM and CG codes resolve to it, with their respective official links. This avoids inventing a boundary between them.

This is a sourced illustrative model, not an exact survey. The city data is a 2025 release, ground data is from 2026, and recent construction can differ. Tree canopy sizes and untagged path widths are stylistic. There is no terrain reconstruction or interior mapping. Mesh simplification uses approximate error targets of 0.15 m for selected landmarks and 0.5 m for context; these are algorithm error metrics, not measured guarantees. Source vertices are rounded to centimetres during export.

## Performance

- 219 selectable building/complex groups from 228 city geometry records; 166,099 building triangles / 184,390 total scene triangles.
- 14 draw calls in the tested overview, with merged geometry and shared materials.
- About 2.1 MB for the gzip building asset, plus ground geometry, metadata, and application code.
- Gzip is decoded once, respecting servers that already set `Content-Encoding`. Browsers without native stream decompression receive the uncompressed fallback.
- Renders on interaction and during camera settling; zero continuous idle loop. Reduced motion skips camera tweening and damping.
- Pixel density capped at 1.5 on narrow screens, 1.75 on desktop. No bloom, shadow maps, ambient occlusion, or map tile requests. Fonts are self-hosted.

Final validation: 21 browser tests passed across Chromium and WebKit; the CDP pinch test was skipped on WebKit. The production build also loaded under `/campus/` in both engines without failed requests or page errors.

Browser checks cover desktop and a 390×844 touch viewport, labels and mesh picking, directory codes, selection events, keyboard navigation, container resizing, disposal/remounting, idle rendering, reduced motion, gzip delivery variants, failed-load retry, and graphics-context recovery. Phone viewport emulation is not a real-device FPS or battery measurement.

## Preparing assets

Heavy source downloads and intermediate files remain in ignored `.cache/`; they are not copied into the production bundle. The already prepared static assets are committed-ready, so GIS tools are not required to run the map.

With the source archive extracted in `.cache/massing/` and the cached OSM/official reference data present:

```sh
.cache/geo/bin/python scripts/prepare-campus.py
.cache/geo/bin/python scripts/focus-campus.py
node scripts/pack-campus.mjs
.cache/geo/bin/python scripts/enrich-buildings.py
```

Preparation uses Python 3.12 with Fiona, NumPy, PyProj, Shapely, and mapbox-earcut. Packing uses meshoptimizer and Three.js. `scripts/prepare-campus.py` records the coordinate conversion and triangulation; `focus-campus.py` derives the campus extent from mapped boundaries; `pack-campus.mjs` builds the runtime buffers.

## Data licences

Contains information licensed under the [Open Government Licence – Toronto](https://open.toronto.ca/open-data-licence/). OpenStreetMap-derived data is © OpenStreetMap contributors, available under the [Open Database Licence](https://www.openstreetmap.org/copyright). University map artwork is not redistributed. Third-party code notices are in `public/THIRD_PARTY_NOTICES.txt`.

Screenshots of the overview, plan view, building detail, and mobile view are in `artifacts/`. The map component is complete for this phase. The lecture interface and the rest of the frontend are separate work.
