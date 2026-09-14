# Sonder — plan

**One line:** a live map of every lecture happening around you at UofT, right now.

Working name: **Sonder** (n. the realization that each passerby has a life as vivid as your own).
Fallback names: Auditor, Drop In, Open Lecture, Halls.

---

## 0. TL;DR

- Data source is **solved and verified** — UofT's own TTB API, no key, no auth, full campus in ~2 seconds.
- Backend is a **~150-line Python script that runs once a day** and writes a JSON file. There is no server, no database, no login.
- 100% free forever on Vercel Hobby. No paid tier anywhere in the stack.
- Therefore **all effort goes into the UI**, which is the actual product.

---

## 1. Verified research findings

Everything below I tested live during planning, not assumed.

### The data source works

`POST https://api.easi.utoronto.ca/ttb/getPageableCourses`

No API key. No auth. No rate limiting encountered. Requires header `Accept: application/json`
(without it you get XML) and `Origin: https://ttb.utoronto.ca`.

Confirmed live session codes: `20269` (Fall 2026), `20271` (Winter 2027).
Divisions: `ARTSC` (1672), `SCAR` (777), `ERIN` (773), `APSC` (253), `MUSIC` (58), `ARCLA` (55), `FPEH` (43).
**Total ≈ 3,631 courses/session.**

`pageSize` is **hard-capped at 20** regardless of what you request — so a full scrape is
~182 paged requests. Measured: **300 courses in 0.4s** at 8 threads → **full campus in ~2 seconds.**

Each meeting returns exactly what we need:

```json
{ "start": {"day": 5, "millisofday": 43200000},
  "end":   {"day": 5, "millisofday": 46800000},
  "building": {"buildingCode": "MS", "buildingUrl": "https://map.utoronto.ca/?id=1809#!m/494491"},
  "repetition": "WEEKLY" }
```

Plus per-section: `teachMethod` (LEC/TUT/PRA), `maxEnrolment`, `currentEnrolment`, `instructors`,
`deliveryModes`, `cancelInd`.

From a real full ARTSC scrape: **2,380 LEC meetings, 58 distinct buildings, 680 lectures with
cap ≥100, 207 with cap ≥200.** Compact index = **222 KB** of JSON. That is small enough to ship
as a static file and filter entirely client-side.

### The one real limitation

**`buildingRoomNumber` is empty — always.** I sampled 237 meetings across both sessions and
both ARTSC/APSC: **0 room numbers.** TTB gives you the *building*, never the room.

The old Arts & Science timetable (`timetable.iit.artsci.utoronto.ca`) that used to carry rooms
**no longer resolves** — it's been folded into TTB. So there is no second source.

**Design consequence, and it's the most important one in this doc:** the app cannot say
"go to SS 2118." It says **"go to Sidney Smith, 2nd floor boards will show it."** This is
genuinely fine — it matches how people actually navigate ("meet me at Bahen") — but the UI must
be *designed around building-level truth* instead of pretending to room precision. Don't build a
floor-plan UI. Build a campus UI.

### Free map stack, no API keys

- **MapLibre GL 6.9.0** (BSD-3) — real vector maps, no token, no Mapbox account, no bill.
- **Protomaps / pmtiles 4.5.0** (BSD-3) — basemap with no API key and no per-view pricing.
- **OSM building footprints via Overpass** — I pulled the campus bbox live: **1,066 building ways,
  267 named**, including Sidney Smith, Convocation Hall, Bahen, Robarts, UC. All footprint polygons
  serialize to **112 KB**.
- Auto-matched **14 of 16** top TTB building codes to OSM polygons by name fragment. The ~44
  stragglers get hand-mapped once into a `buildings.json` and never touched again.

This means we render **actual building shapes**, not generic map pins. That's the whole aesthetic.

### Hosting: free, with one constraint

Vercel Hobby: $0, 100GB bandwidth, 50 custom domains.
**Cron on Hobby is limited to once per day** (`0 * * * *` fails deploy).

That's not a problem — it's a design gift. Timetables change daily at most, so:
**daily cron → regenerate static JSON → zero runtime compute.** Every user request is a static
file from CDN. No function invocations, no database, nothing that can exceed a free tier.

### Prior art to borrow from

**[plon/illinispots](https://github.com/plon/illinispots) — MIT licensed, pushed today, TypeScript.**
Same problem inverted (empty rooms vs. occupied). Directly reusable:
`TimelineSchedule.tsx`, `RoomBadge.tsx`, `RoomFilter.tsx`, `DateTimeButton.tsx`, the whole
`components/ui/*` shadcn set, and its map/sidebar layout pattern.
MIT = copy freely, keep the license header.

(UNSW `freerooms` is also close but has no clear license — read for ideas, don't copy code.)

---

## 2. The creative concept

The insight: **this is not a search tool, it's a "what's around me right now" tool.** Nobody
opens it knowing what they want. They open it bored, standing outside Robarts, with 50 minutes.

So the design metaphor is **radar, not a list.**

### 2.1 The hero: a living campus map

Full-bleed MapLibre map of St. George, rendered with real OSM footprints. Not a generic basemap
with pins on top — the *buildings themselves are the UI.*

- Each building is an extruded polygon whose **height = number of lectures in session right now.**
  Campus literally rises and falls through the day. At 10am it's a skyline; at 7pm it's flat.
- Each building **glows** with intensity = total seats currently sitting in it. Con Hall with
  AST101's 1,500 seats burns brightest on campus.
- **Color encodes crashability**, which is the app's actual opinion:
  - warm amber = big anonymous lecture, walk right in (cap ≥ 150)
  - cool blue = mid-size, you'd be noticed but it's fine (50–150)
  - dim grey = small seminar, don't (< 50)
- Tap a building → it lifts, the rest of campus dims, and a card stack slides up listing every
  lecture inside with time remaining.

### 2.2 The radius — "what's near me"

A soft, breathing **pulse ring centered on your GPS location**, default radius 400m (≈5 min walk).
Drag a single slider and the ring expands; buildings outside it desaturate to near-transparent in
real time. It reads as sonar sweeping the campus.

Because everything is client-side in a 222KB index, this filtering is **instant** — no network
round trip as you drag. That responsiveness is the thing that will make it feel expensive.

If geolocation is denied, drop the ring on Sidney Smith and say "showing from the middle of campus."
Never a dead end.

### 2.3 The time scrubber

A horizontal scrubber pinned to the bottom, defaulting to **now**, with a bold "NOW" pill.
Drag it forward and the skyline animates — buildings grow and shrink as lectures start and end.
You can see 2pm Tuesday become a completely different campus.

This turns a boring filter into the single most screenshot-able interaction in the app, and it's
the thing people will post. Marketing and function are the same feature.

### 2.4 "Starting soon" — the actual killer view

A bottom sheet, swipe-up, sorted by **time-to-start then walking distance**:

```
┌────────────────────────────────────────┐
│  ● starts in 6 min · 3 min walk        │
│  AST101 — The Sun and Its Neighbours   │
│  Convocation Hall · 1,500 seats        │
│  ████████████████░░  easy to slip in   │
└────────────────────────────────────────┘
```

Every card answers the only four questions that matter: **can I make it, is it interesting,
will I be noticed, where do I go.** The "easy to slip in" meter is `cap` rendered as an
anonymity score — a genuinely novel piece of information that exists nowhere else.

### 2.5 The one delightful extra: Shuffle

A single dice button. Picks one random lecture starting in the next 20 minutes that you can
physically reach, and drops a pin with a walking line. No filters, no choosing.

This is the feature that matches what you actually described doing — wandering. It's also
the demo that sells the app in five seconds.

### 2.6 Visual direction

Deliberately **not** another blue-and-white student utility.

- **Dark by default.** Campus at night, warm lights in the windows. Light mode exists but dark
  is the identity, and it makes the glow work.
- **Type:** one characterful display face for headers and numbers, one clean grotesk for UI.
  Big confident numerals — time-remaining and seat counts are the content, so set them large.
- **Motion with restraint:** buildings ease in height, the radius ring breathes slowly, cards
  spring up. Everything else is still. Respect `prefers-reduced-motion`.
- **Texture:** subtle grain over the map so it reads crafted rather than default-Mapbox.

---

## 3. Architecture

Deliberately the simplest thing that supports the above.

```
  daily cron (Vercel, 1×/day)
          │
          ▼
   scripts/scrape.py ──► TTB API (182 paged requests, ~2s)
          │
          ├─► public/data/lectures.json   (~222 KB, gzips to ~40 KB)
          └─► public/data/buildings.json  (~112 KB, footprints — rebuilt rarely)
          │
          ▼
   Static Next.js app on Vercel CDN
          │
          ▼
   Browser: loads both JSONs once, filters by
   time + radius + size entirely in memory
```

**There is no backend, no database, no auth, no API routes.** Two static JSON files and a
client-side app. This is why it's free and why it can't break at 3am.

Stack: **Next.js (static export) + TypeScript + Tailwind + shadcn/ui + MapLibre GL + Framer Motion.**
Chosen because it's exactly illiniSpots' stack, so its MIT components drop in with minimal rework.

### Data shape

```ts
type Lecture = {
  c: string;   // "AST101H1"
  t: string;   // "The Sun and Its Neighbours"
  b: string;   // "CH" building code
  d: number;   // day of week
  s: number;   // start, minutes from midnight
  e: number;   // end
  cap: number; // maxEnrolment → drives glow + anonymity score
}
```

Minified keys because it ships to every visitor. 2,380 rows ≈ 222 KB raw, ~40 KB gzipped.

---

## 4. Build order

**Phase 1 — data (half a day).**
Port the verified scraper into `scripts/scrape.py`. Fan out 182 requests across divisions/sessions,
flatten to the `Lecture` shape, write `lectures.json`. Build `buildings.json` once from the Overpass
pull + hand-map the ~44 unmatched codes. Wire the daily cron.
*Done when: a JSON file on disk correctly answers "what's in Con Hall at 2pm Tuesday."*

**Phase 2 — the map (2–3 days, the real work).**
MapLibre + Protomaps, extruded footprints, height/glow/color encodings, tap-to-expand.
This is where the project succeeds or fails; budget accordingly.

**Phase 3 — controls (1–2 days).**
Radius ring + slider, time scrubber, "starting soon" sheet, Shuffle. Borrow
`TimelineSchedule` / `DateTimeButton` / shadcn primitives from illiniSpots.

**Phase 4 — landing page (1 day, see below).**

**Phase 5 — polish.** Reduced-motion, geolocation-denied path, offline cache, OG images, a11y pass.

---

## 5. The landing page

Since this is public, the landing page does the marketing. Keep it to one scroll.

**Above the fold:** no hero illustration, no stock photo — the **live map itself**, already
running, already showing real lectures happening right now, with the headline over it:

> ### There are 47 lectures happening within 5 minutes of you.
> ### You're not enrolled in any of them. Go anyway.

with a single button: **Show me →**

The count is real and computed on load. A visitor sees true, specific, local information in the
first second — that's the entire pitch, and no competitor can fake it.

**Then three short sections**, each one sentence + one visual:
1. *See campus think.* — the time scrubber animating a day.
2. *Find the big ones.* — the anonymity meter; 1,500 seats means nobody's counting.
3. *Or just wander.* — Shuffle.

**Then the honest footer.** Say plainly: this uses public UofT timetable data, it shows buildings
not room numbers, and be respectful — don't crash small seminars, don't take a seat in a full room.
Being upfront about the etiquette is what keeps this charming instead of sketchy, and it's what
makes it defensible if the university ever asks.

Tone throughout: confident, a little conspiratorial, never try-hard. It's an invitation, not a growth product.

---

## 6. Risks, stated honestly

| Risk | Reality |
|---|---|
| **No room numbers** | Confirmed, unfixable, no second source. Design around buildings. Biggest single constraint. |
| TTB API is undocumented | It could change shape without notice. Mitigation: the scraper is ~150 lines and the app degrades to the last good JSON rather than breaking. |
| Session codes roll over | `20269`→`20271`→… Hardcode with a yearly note, or probe on scrape. Two-minute fix, once a term. |
| Scraping etiquette | 182 requests once per day is nothing. Keep it daily, identify in User-Agent, never hammer. |
| Vercel Hobby is non-commercial | Fine as a free student project. If it ever monetizes, that's a different plan. |
| It's still a novelty | Everything in §1–2 of our earlier conversation stands. Build it because it's fun and it'll be genuinely beautiful — not because it's a company. |

---

## 7. What I'd cut if short on time

Ship **map + radius + starting-soon + Shuffle.** That's the product.
The time scrubber is the most impressive piece but also the most work — it's the first thing to
defer to v1.1, and the first thing to build if you want it to go viral.
