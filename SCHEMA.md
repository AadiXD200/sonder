# Data contract — `data/lectures.json`

This is the locked schema promised in FRONTEND_BRIEF.md §3. Real data, whole
St. George campus, already in the repo. Build against this file directly.

**Generated:** 2026-09-14 · **Source:** UofT TTB (`api.easi.utoronto.ca`)
**Size:** 1.6 MB raw / **255 KB gzipped** — one static fetch, no backend, no API keys.

## Shape

```jsonc
{
  "generated": "2026-09-14",
  "campus": "UTSG",
  "terms": { "F": "Fall 2026", "S": "Winter 2027" },

  "buildings": {
    "SS": {
      "name":  "Sidney Smith Hall",
      "short": "Sid Smith",
      "lat":   43.66288,
      "lng":   -79.39856,
      "polygon": [[lng, lat], ...]   // building footprint, or null
    }
  },

  "meetings": [
    {
      "c":    "MAT246H1",   // course code
      "t":    "Concepts in Abstract Mathematics",
      "s":    "LEC5101",    // section
      "b":    "SS",         // key into buildings
      "r":    "2135",       // room — STRING, not always numeric
      "d":    1,            // 1=Mon … 5=Fri
      "st":   1080,         // start, minutes from midnight (1080 = 18:00)
      "en":   1200,         // end
      "cap":  188,          // room/section capacity
      "term": "F"           // "F" or "S"
    }
  ]
}
```

`meetings` is pre-sorted by `(d, st, b, c)`.

## The five things that affect your design

1. **A meeting is one room at one time — not a section.** `MAT246H1 LEC5101`
   meets Mon in `SS 2135` and Wed in `SS 2118`. Key everything by
   `(section, day, time)`. Never `section → room`.

2. **`r` is a string and often not a number.** Real values: `2135`, `B024`,
   `CART`, `222E`, `2BO5E`, `---` (Convocation Hall's floor-less main hall).
   **Do not parse a floor out of it.** ~1.5% are non-numeric. If your building
   interior needs floors, derive them some other way or design so you don't
   need them.

3. **`polygon` is null for 2 of 65 buildings** (Myhal, ROM — geocoded by hand,
   point only). Always fall back to `lat`/`lng`.

4. **Two terms in one file.** Filter by `term` or you'll show Winter lectures
   in the Fall. `F` and `S` are near-identical in size (6,144 / 6,058).

5. **Everything is client-side.** The whole file loads once. Any interaction —
   scrubbing time, walking into a building — is a local array filter. No
   spinners on interaction, ever.

## The core query, in full

```ts
const now = meetings.filter(m =>
  m.term === currentTerm && m.d === today && m.st <= mins && mins < m.en
);
```

Wednesday 14:00, Fall → **272 lectures in progress.** Biggest room in that
slot is PSL300H1 *Human Physiology I* in Convocation Hall, capacity 1,400.
There is always something to wander into.

## Coverage — what's actually in here

| | |
|---|---|
| Meetings shipped | **12,202** |
| Buildings | **65** (63 with polygons) |
| UTSG courses scraped | 3,618 |
| Room coverage of in-person meetings | **95.7%** |

**What got dropped, and why** (558 + 151 meetings):

- **292 SYNC** — online lectures. No room because there is no room. Correct to omit.
- **265 INPER** — in-person but room genuinely TBA in TTB. Mostly PRA/TUT.
- **151** in 4 buildings TTB uses but no public dataset maps: `TL` (97),
  `UY` (27), `BY` (24), `ON` (3 — an online placeholder, room literally `LINE`).
  1.2% of meetings. Cobalt's dataset is from 2016 and UofT publishes no
  buildings endpoint, so I left these out rather than invent coordinates.

Buildings by volume: BA 1451, SS 1122, UC 760, MY 714, MP 608, OI 568, GB 552.

## Regenerating

```bash
python3 scripts/stage1.py   # enumerate all courses      (~84s)
python3 scripts/stage2.py   # fetch rooms, 6 workers     (~30s)
python3 scripts/build.py    # join + emit lectures.json
```

Two minutes end to end, zero errors on the last run. Cheap enough to re-run
daily on a cron if we ever want it fresher.
