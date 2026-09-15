# Sonder main app — frontend handoff

Open **http://localhost:5174/explore.html**. Run `npm run dev -- --port 5174 --strictPort` from `preview/` if needed. The standalone map remains at `/`.

The approved design stays: warm paper, Archivo Black headings, DM Mono text, a red SON/DER stamp, and the blue/white sourced campus map. Classes are the default view on desktop and phones. The landing page is owned separately and was not changed.

## Contract work completed

- **Your gap:** two keyboard-accessible range handles plus native time inputs. A meeting must start and finish within the selected interval. Choose weekday and Fall 2026 / Winter 2027 in the filter sheet. Changes apply on submit; closing discards the draft. End `00:00` means midnight at the end of that day.
- **Building day:** select a building on the map, or choose “See this building’s day” in class details. This shows the selected weekday/term’s full day, bypassing gap and maximum-walk limits. Subject, search, and room-capacity filters still apply; the active summary explains this. Clear the summary to return to gap browsing.
- **Big rooms:** the existing 100+ seats toggle excludes unknown capacities only when enabled. Otherwise unknown capacity is allowed and details say “Capacity unknown.” Capacity is not attendance.
- **Shareable links:** filters, day, term, query, building codes, selected meeting, view, and approximate pin coordinates are validated and encoded in the URL hash. Reloads and incoming hash changes restore state. “Share link” / “Share class” copies the URL; clipboard denial opens a selectable link instead. No local/session storage or account is used.
- **Walking start:** defaults to campus centre. The small “Walks from…” control opens building selection, explicit “Use my location,” and map placement. There is no automatic location prompt. Denial or an off-campus result preserves the previous pin. Drag the blue pin, or focus it and use arrow keys (10 metres; Shift = 50 metres). Estimates update locally: haversine × 1.3 / 1.4 m/s, rounded up to minutes and always prefixed `~`. These are estimates, not routed directions. Shared links include the approximate pin.
- **Cards and details:** building names come from the dictionary, rooms can be empty, subject supplies the icon, and the card shows the first two description sentences clamped to two lines. Details show `descFull`. All catalogue text is escaped. No `place`, `walk`, `hook`, `tag`, or `icon` field is needed on a meeting.
- **Search:** Unicode/case/whitespace normalization, exact topic ID/label/synonym lookup, then indexed course membership. Unrecognized queries use code/title substring search only. Exact course codes support omission of H1/Y1. Ranking is exact code, primary topic tag (`topics[0]`), reachability, earlier start, then larger room. Building-day results use chronological order after relevance. No filler or fuzzy matching; empty results offer the available topic grid. There is no instructor field in this contract, so instructor search is not implemented.
- **Sonderate:** randomly selects a reachable meeting that starts within 60 minutes of the gap’s start and fits all active filters, including the gap even in building view. Rerolls avoid the previous meeting when alternatives exist.

## Integration: read before flipping the import

Backend-owned files were not edited: `BACKEND_CONTRACT.md`, `scripts/`, `preview/public/data/*.json`, `preview/src/explore/data.js`, and `landing/`.

The frontend still imports `lectures` and `laterLectures` from `samples.js`. Fixture meetings now exactly follow §4.1; the backing `fixture-meetings.json` also supplies deterministic tests. `fixture-buildings.json` is a read-only snapshot of the existing root dataset’s building dictionary. Meeting times, capacities, descriptions, and topic memberships are fictional and visibly labelled **SAMPLE DAY**.

`src/explore/catalogue.js` is the frontend reference-data adapter. It checks for published `lectures.json`, then loads `buildings.json` and `topics.json` together, validates their shapes and meeting IDs, and switches all three atomically. Until that succeeds, the labelled preview remains usable. “Timetable info → Check for published timetable” retries. Once loaded, the header shows the term and published-timetable status. New visits use Toronto’s weekday/time and the appropriate term; shared links retain their selections. The published 11,929-meeting catalogue is now available and covered by real-data regressions in addition to intercepted contract-shaped responses.

**A day/time-prefiltered loader is insufficient for these features.** §5 proposes filtering exported arrays to the current day/time, but building days, weekday/term controls, and shared future gaps need the complete `meetings` array. The adapter deliberately reads the full published catalogue and performs filtering in `model.js`. The backend can flip the existing import and delete `samples.js` without changing record fields. When consolidating loaders, expose the full catalogue plus `buildings`, `topics`, and `terms`; do not remove the complete-data path. The walking helper is currently frontend-owned in `model.js` because the backend helper export does not exist yet; use its `(pin, building) → integer minutes | null` semantics if consolidating it into `data.js`.

**The `buildings.json` filename collision is resolved.** Before this work, that URL held the 228-record 3D mesh manifest, not the contract’s 65-building coordinate dictionary. The renderer now imports the preserved manifest from frontend-owned `src/campus-geometry.json` inside its lazy map chunk. It no longer fetches `public/data/buildings.json`, so the backend can replace that URL with the coordinate dictionary. Mesh offsets must stay paired with `campus.bin[.gz]`; if geometry is regenerated, update the source manifest alongside the binary. The geometry itself has not changed.

## Performance and verification

The map module, renderer, geometry manifest, mesh binary, and ground layer load only when the map is opened. Class lists initially render at most 40 matches, with “Show more” for the rest. Querying and ranking are local; no model/API call or new runtime library is required. The base map uses 14 draw calls; a selected catalogue footprint adds one line draw. Rendering stops at rest, including after pin movement or destination selection.

`campus-coordinates.js` uses WGS84 / UTM zone 17N and the mesh’s exact origin. Forward results were checked against PROJ at all 65 building coordinates (maximum local-coordinate difference below 0.001 m); inverse round trips are covered by tests. This checks the conversion, not the accuracy of the original building footprints or walking estimates.

Build deployable app assets with `npm run build -- --base=./`; run checks with `npm test`. Tests cover Chromium and WebKit: topic noise and ranking, boundaries and term/day filtering, unknown capacities, URL validation/restoration, published-only shared meeting IDs, escaped catalogue content, clipboard fallback, no storage/automatic geolocation, deferred map loading, location denial, keyboard and pointer pin moves, idle rendering, atomic catalogue integration, the dictionary/geometry collision, and 320–760px layouts. Existing standalone-map tests remain in place.

Screenshots in `artifacts/`: `explore-desktop.png`, `explore-mobile.png`, `explore-filters.png`, `explore-mobile-filters.png`, `explore-detail.png`, `explore-map-desktop.png`, and `explore-mobile-map.png`.

## Published-data fixes

`SONDERATE_WINDOW_MINUTES` in `model.js` is 60. The eligibility helper still enforces walking time, all filters, and the end of the user's gap; the information and empty-state copy use that same constant. Real :00/:30 starts no longer leave the round-hour gap empty merely because the walk is nonzero. On the shipped catalogue, Wednesday Fall at 10:00–12:00 has 72 eligible meetings. A sweep of 610 two-hour gaps (both terms, Monday–Friday, starts every 10 minutes from 08:00 through 18:00, campus-centre pin, default filters) found choices in 596 gaps versus 214 with the previous 20-minute window. These results depend on those filters and timetable data.

All 65 catalogue codes now resolve in the embedded map, covering every published meeting. Six verified named meshes received codes in `campus-geometry.json`: OI, RO, RW, WB, WO, WS. The other 18 previously unmapped codes receive selectable targets from the published coordinates and footprint polygons through `setCatalogue()` / `campus-destinations.js`; they are not assigned to the nearest mesh. Myhal's published footprint is null, so it gets a precise location marker. Selection shows the catalogue destination label and, where available, its footprint outline. The existing sourced massing remains unchanged; a location target does not claim a verified mesh boundary. This also supports a catalogue arriving after the map has already loaded.

`tests/catalogue-regressions.spec.js` reproduces the round-hour failure with real records, verifies all 24 formerly missing codes and all 65 destinations, checks mobile Myhal “Show on map,” and checks that rendering settles. Review screenshots: `artifacts/myhal-map-mobile.png` and `artifacts/galbraith-map-desktop.png`.

## Mobile map tap flow

On phones (up to 760px), selecting a mesh or label stays on the map so the fly-to completes. A compact panel below the map shows the selected building name as a button, the active day/term, and its matching class count. Tapping that name opens the building-day list. Zero matches keep the button available and lead to the explained empty state; buildings outside the timetable show a disabled control explaining that there are no listings. Dismissing the panel clears selection without leaving the map. “Show on map” from class details also populates this panel. Desktop retains the existing split view and immediate list filtering.

The two-stage panel lives in `explore.js` and `explore.css`; map selection payloads, camera code, and the 6px/multi-pointer tap thresholds are unchanged. The later mobile pass below adjusts when a valid touch selection is dispatched. `tests/map-tap.spec.js` uses 390px `isMobile`/`hasTouch` contexts for Chromium and WebKit, plus a CDP touch-drag/cancel regression and a desktop regression. The full suite passed 56 checks with two CDP-only WebKit skips.

The logo now links to `../` with the accessible name “Sonder — home.” The relative-base production build was browser-verified at `/prefix/app/explore.html`, including map loading, both taps, and logo navigation to the real landing page at `/prefix/`, with no failed requests or page errors. Screenshots: `artifacts/map-tap-chromium-mobile.png` and `artifacts/map-tap-webkit-mobile.png`.

For release, follow `MAP_TAP_SPEC.md` §3: source on `main`, locally built output on `gh-pages`, and the existing `scripts/deploy.sh` flow. Keep the `--base=./` build and deployment asset-path guard. These tap changes have been verified locally; this work did not publish a deployment.

## Phone ergonomics pass

The mobile layout now puts the existing Sonderate button between Classes and Map in the bottom navigation. Search and explicitly labelled Filters remain above the content. The same button returns to its original desktop toolbar at the breakpoint, preserving its handler; no duplicate random-class action is created. The phone masthead and map heading are compact, decorative copy is reduced, and the map header gives the appropriate first/second-tap instruction.

Map controls are 44×44px with legible 3D/Plan labels. Primary actions, search, filters, and sheet actions have at least 44px targets. Cards use larger body text and a distinct room label. Filter sheets put the free gap first; class details put time, building, room, walk, and capacity ahead of the full description, with sticky actions at the bottom. Responsive DOM order matches this reading/focus order, including after resizing back to desktop. The 320px time fields retain room for their AM/PM labels.

Search opened from the phone map switches to the result list. Inputs use 16px text; Enter dismisses search focus and moves to the results heading. VisualViewport resize handling makes room for the keyboard and temporarily hides bottom navigation while typing. Keyboard testing simulates the viewport change because Playwright does not open an operating-system keyboard; touch interactions themselves use `isMobile: true` / `hasTouch: true` in Chromium and WebKit.

A touch-specific bug was reproduced: changing panel layout on pointerup moved Plan view under the original finger position, and the browser's subsequent click activated it. `campus-map.js` now records a valid touch hit on pointerup and commits it on the canvas click, after the browser fixes that click's target. Mouse selection stays on pointerup. The 6px drag threshold, one-pointer requirement, cancellation handling, and rendering at rest remain intact. The two-stage tap regression explicitly checks that selecting Bahen does not switch to Plan view.

Verification covers 320–760px phones, switching back to desktop, bottom-action placement, touch-target sizes, gap-first sheets, fact-first details, keyboard viewport changes, and the existing map/catalogue tests. The relative-base production build was also exercised under `/prefix/app/` in both browsers with no request failures or page errors. Production-style local preview: **http://localhost:8781/app/explore.html**; the logo goes to the landing page on that server. This remains a local build, not a deployment.

Latest screenshots: `artifacts/mobile-ux-chromium-list.png`, `mobile-ux-chromium-map.png`, `mobile-ux-chromium-detail.png`, and corresponding `mobile-ux-webkit-*` files, including 320px filters and desktop views. No new runtime dependencies were added; the map still loads on demand and renders only while changing.
