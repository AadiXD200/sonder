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
- **Sonderate:** randomly selects a reachable meeting that starts within 20 minutes of the gap’s start and fits all active filters, including the gap even in building view. Rerolls avoid the previous meeting when alternatives exist.

## Integration: read before flipping the import

Backend-owned files were not edited: `BACKEND_CONTRACT.md`, `scripts/`, `preview/public/data/*.json`, `preview/src/explore/data.js`, and `landing/`.

The frontend still imports `lectures` and `laterLectures` from `samples.js`. Fixture meetings now exactly follow §4.1; the backing `fixture-meetings.json` also supplies deterministic tests. `fixture-buildings.json` is a read-only snapshot of the existing root dataset’s building dictionary. Meeting times, capacities, descriptions, and topic memberships are fictional and visibly labelled **SAMPLE DAY**.

`src/explore/catalogue.js` is the frontend reference-data adapter. It checks for published `lectures.json`, then loads `buildings.json` and `topics.json` together, validates their shapes and meeting IDs, and switches all three atomically. Until that succeeds, the labelled preview remains usable. “Timetable info → Check for published timetable” retries. Once loaded, the header shows the term and published-timetable status. New visits use Toronto’s weekday/time and the appropriate term; shared links retain their selections. This has been tested with intercepted contract-shaped responses; the backend files are still pending at this handoff.

**A day/time-prefiltered loader is insufficient for these features.** §5 proposes filtering exported arrays to the current day/time, but building days, weekday/term controls, and shared future gaps need the complete `meetings` array. The adapter deliberately reads the full published catalogue and performs filtering in `model.js`. The backend can flip the existing import and delete `samples.js` without changing record fields. When consolidating loaders, expose the full catalogue plus `buildings`, `topics`, and `terms`; do not remove the complete-data path. The walking helper is currently frontend-owned in `model.js` because the backend helper export does not exist yet; use its `(pin, building) → integer minutes | null` semantics if consolidating it into `data.js`.

**The `buildings.json` filename collision is resolved.** Before this work, that URL held the 228-record 3D mesh manifest, not the contract’s 65-building coordinate dictionary. The renderer now imports the preserved manifest from frontend-owned `src/campus-geometry.json` inside its lazy map chunk. It no longer fetches `public/data/buildings.json`, so the backend can replace that URL with the coordinate dictionary. Mesh offsets must stay paired with `campus.bin[.gz]`; if geometry is regenerated, update the source manifest alongside the binary. The geometry itself has not changed.

## Performance and verification

The map module, renderer, geometry manifest, mesh binary, and ground layer load only when the map is opened. Class lists initially render at most 40 matches, with “Show more” for the rest. Querying and ranking are local; no model/API call or new runtime library is required. The map still uses 14 draw calls and stops rendering at rest, including after pin movement.

`campus-coordinates.js` uses WGS84 / UTM zone 17N and the mesh’s exact origin. Forward results were checked against PROJ at all 65 building coordinates (maximum local-coordinate difference below 0.001 m); inverse round trips are covered by tests. This checks the conversion, not the accuracy of the original building footprints or walking estimates.

Run `npm run build` and `npm test`. Tests cover Chromium and WebKit: topic noise and ranking, boundaries and term/day filtering, unknown capacities, URL validation/restoration, published-only shared meeting IDs, escaped catalogue content, clipboard fallback, no storage/automatic geolocation, deferred map loading, location denial, keyboard and pointer pin moves, idle rendering, atomic catalogue integration, the dictionary/geometry collision, and 320–760px layouts. Existing standalone-map tests remain in place.

Screenshots in `artifacts/`: `explore-desktop.png`, `explore-mobile.png`, `explore-filters.png`, `explore-mobile-filters.png`, `explore-detail.png`, `explore-map-desktop.png`, and `explore-mobile-map.png`.
