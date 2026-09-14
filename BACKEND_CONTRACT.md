# Sonder — backend contract & work split

Written for: Astra (the agent that owns the app UI in `preview/`), and Aadi.

Status: the UI mockup in `preview/` is approved and stays. This document freezes
the data contract between the pipeline and that UI so both sides can finish in
parallel without stepping on each other.

---

## 1. The split, in one line

**Astra owns everything inside `preview/src/`. I own everything that produces
`preview/public/data/*.json`.** The only shared surface is the shape of those
files, defined in §4. Neither side edits the other's files.

| Owned by me (backend) | Owned by Astra (frontend) |
|---|---|
| `scripts/*.py` — scrape, tag, build | `preview/src/explore/explore.js` |
| `preview/public/data/lectures.json` | `preview/src/explore/explore.css` |
| `preview/public/data/topics.json` | `preview/src/explore/icons.js` |
| `preview/public/data/buildings.json` (see §8b) | `preview/src/campus-map.js` |
| ~~`preview/src/explore/data.js`~~ — Astra's `catalogue.js` replaced it | `preview/explore.html`, `preview/src/explore/catalogue.js` |
| `landing/` (whole directory) | — |
| This document | `preview/APP_PREVIEW.md` |

`preview/src/explore/samples.js` is **deleted at integration**, replaced by
`data.js` exporting the same names. See §5.

---

## 2. What already exists (verified, not assumed)

Checked against `data/lectures.json` and `.cache/stage2_detail.json` today:

- **12,202 meetings**, 3,220 distinct courses, St. George, Fall 2026 + Winter 2027.
- **65 buildings, all with `lat`/`lng` and a footprint `polygon`.** Nothing to geocode.
- **Capacity on 12,173 of 12,202 meetings (99.8%).** The "big rooms" feature is free.
- **Course descriptions on 99.6% of course records**, already cached in
  `.cache/stage2_detail.json` under `cmCourseInfo.description`. They were being
  dropped by `build.py`, not missing. No re-scrape needed.
- **82 departments** and official **BR=1…BR=5 breadth categories** per course.

That last point matters: the university already publishes a subject taxonomy.
Astra's five `topics` (`Everything / Science / Arts & ideas / Society /
Technology`) map onto it directly, so the `subject` field is derived, not invented.

---

## 3. Why search is topic-based, not substring

Measured on the real catalogue:

- Substring `"ai"` over titles returns **Aircraft Flight**, **Faith and Physics**,
  **Sustainability in Africa**, **Beyond the Bible**. Noise.
- Topic `"ai"` over title + description returns **100 courses** including
  APS360 Deep Learning, CHE321 ML for Chemical Engineers, COG100 Cognitive
  Science, CRE367 Creativity and AI — across six different departments.

The second is the product. Someone types `ai` and gets every AI course on
campus regardless of which faculty owns it. Substring matching cannot do this,
and a client-side fuzzy library makes it worse, not better (it would rank
*Aircraft* highly for `ai`).

**How the tags get made:** a fixed, hand-written topic vocabulary (my
judgement — it doubles as the browsable topic grid), then one build-time pass
where a cheap model assigns each of the 3,220 courses 5–8 tags *from that fixed
list only*, off-list tags rejected. Output is an inverted index. Query time is a
hash lookup — no model, no API, no key in the browser. Runs once a month on my
machine, costs pennies.

Free-text that matches no topic falls back to plain substring over code and
title, which is still correct for `CSC311` or a professor's name.

---

## 4. The data contract

Three files in `preview/public/data/`. All static, all gzipped by the host.

### 4.1 `lectures.json`

```jsonc
{
  "generated": "2026-09-14",
  "terms": { "F": "Fall 2026", "S": "Winter 2027" },
  "meetings": [
    {
      "id": "CSC108H1-LEC0101-1-540",   // stable, unique
      "code": "CSC108H1",
      "title": "Introduction to Computer Programming",
      "section": "LEC0101",
      "building": "BA",                  // key into buildings.json
      "room": "1130",                    // "" when the building IS the room (CH)
      "day": 1,                          // 1=Mon … 5=Fri
      "start": 540,                      // minutes from midnight
      "end": 600,
      "seats": 300,                      // null on the 0.2% with no capacity
      "term": "F",
      "subject": "Technology",           // one of Astra's five
      "topics": ["programming", "ai"],   // ids into topics.json
      "description": "Explore the logic…",   // cleaned; card shows first 1-2 sentences
      "descFull": "…"                       // full text, detail view + tagging
    }
  ]
}
```

**Field-by-field mapping from the mockup's `samples.js`:**

| `samples.js` | `lectures.json` | note |
|---|---|---|
| `code`, `title`, `room`, `start`, `end` | same | direct |
| `building` | `building` | abbrev, unchanged |
| `place` | — | **look up `buildings[b].name`**, don't duplicate per meeting |
| `seats` | `seats` | real capacity |
| `walk` | — | **computed client-side** from the user's pin, see §4.3 |
| `subject` | `subject` | derived from breadth category |
| `description` | `description` | real calendar copy |
| `id` | `id` | now a real composite key |
| `icon` | — | derived from `subject`, see §6 |
| `hook`, `tag` | — | **dropped, see §6** |

### 4.2 `topics.json`

```jsonc
{
  "ai": {
    "label": "AI & machine learning",
    "synonyms": ["ai", "artificial intelligence", "machine learning", "ml",
                 "neural networks", "deep learning"],
    "courses": ["CSC311H1", "APS360H1", "CHE321H1", "…"]
  }
}
```

Resolution order for a query: normalise → exact synonym hit → topic →
course list. Miss → substring over code/title.

This replaces the placeholder `programs` object at
`preview/src/explore/explore.js:27`. Roughly 40 top-level topics, with
subtopics only where the catalogue is genuinely dense (CS, life sci, econ).

### 4.3 `buildings.json`

Unchanged in shape from `data/lectures.json`'s `buildings` block — `name`,
`short`, `lat`, `lng`, `polygon`. All 65 present.

**Walking time is computed in the browser**, not baked in, because it depends
on where the user's pin is:

```
haversine(pin, building) × 1.3 detour ÷ 1.4 m/s → minutes
```

Always rendered as `~6 min`, never `6 min`. No routing API — on a campus this
dense the error is under two minutes and a router is a paid dependency.

---

## 5. The integration seam

Astra's file imports fixtures on one line
(`preview/src/explore/explore.js:5`):

```js
import { lectures, laterLectures } from "./samples.js";
```

I will add **`preview/src/explore/data.js`** exporting the *same two names*
with the *same record shape*, loaded from the JSON above and filtered to the
current day and time. Integration is then a one-line change:

```js
import { lectures, laterLectures } from "./data.js";
```

`samples.js` is deleted in the same commit.

**This means Astra does not have to wait for me.** Keep building against
`samples.js`. The only thing I need from that side is that the record shape in
§4.1 stays honoured — if the UI starts needing a new per-meeting field, say so
here rather than adding it to the fixture, because a field in the fixture that
isn't in the contract is a field that will be `undefined` in production.

Two known shape changes Astra should absorb now:

1. **`place` goes away** — look it up from `buildings.json`.
2. **`walk` goes away** — call the helper I'll export from `data.js`;
   it depends on pin position and changes when the user drags the pin.

---

## 6. `hook`, `tag`, `icon` — decided: dropped

The mockup gave every class a hand-written hook (*"You have a brain. Might as
well meet it."*) and a tag (`INSIDE YOUR HEAD`). Eight of them, for eight
fixture courses. They do not scale to 3,220, and generating them would mean
shipping 3,220 machine-written jokes nobody will ever proof-read.

**Decision (Aadi): drop `hook` and `tag`. The card shows the course title and
the real calendar description instead.**

Consequences:

- `hook` and `tag` are **not** in the contract and must not be referenced by the UI.
- The description is now doing the persuading, so it is load-bearing copy, not
  metadata. See §4.1 on truncation.
- `icon` stays — it maps from `subject`, so it costs nothing and keeps the cards
  from being a wall of grey text.

Because nothing is hand-written any more, **search quality is the entire
product surface.** Everything in §3 gets stricter — see §6b.

## 6b. What "search should be great" actually requires

With hooks gone, a result is only as good as whether it should be there at all.
Four things carry that:

**1. Descriptions get cleaned, not just copied.** Calendar prose is full of
matter that reads as noise on a card: prerequisite chains, exclusions,
"Restricted to students in…", breadth codes trailing the text. These get
stripped at build time. The first 1–2 sentences are what the card shows; the
full text stays available for the detail view and for tagging.

**2. Tagging sees title + description + department.** Department is the
disambiguator: it is what stops *Neural Bioelectricity* (BME) landing on `ai`
because the word "neural" appears, which was a real false positive when I tested
keyword-only triggers. 22% of titles (927 of 4,222) are opaque — "Topics in…",
"Advanced…", "Seminar in…" — so for roughly a fifth of the catalogue the
description is the only real signal.

**3. Ranking, not just matching.** A topic hit returns 100 courses; the order
decides whether search feels good. Rank by, in order:
   - exact code match first (`CSC311` → that course, always top)
   - topic match strength (primary tag beats secondary tag)
   - **starting soon and reachable** — a perfect match three hours from now is
     worse than a good match in twenty minutes, because the product is about
     the gap you are standing in
   - bigger rooms above smaller ones, for the slip-in-unnoticed reason

**4. An honest empty state.** No hooks means no decoration to hide behind. If a
query matches nothing, say so and offer the topic grid, rather than showing
loosely-related filler.

## 7. The four agreed features, and where each lives

| Feature | Backend (me) | Frontend (Astra) |
|---|---|---|
| **The gap** — "free 2 to 4, what fits" | meetings carry `start`/`end`; filter helper in `data.js` | the two-handle time control; already drafted as `minutes`/`time` in `state` |
| **Building view** — tap a building, see its day | `buildings.json` + meetings keyed by `building` | already works — map selection filters the list |
| **Big rooms only** | `seats` on every meeting | a toggle bound to `state.minSeats`; already in `defaults` |
| **Shareable link** | — | encode `state` into the URL hash, restore on load |

Three of the four are already scaffolded in the mockup's `state` object. The
backend work is mostly making the numbers real.

**On the shareable link and the mockup's "no browser storage" rule:** a URL
hash is not storage — nothing is written to the device, and it's how the link
gets shared at all. The location pin should also default to campus centre with
a small "use my location" link rather than an automatic geolocation prompt: the
prompt on first visit from Reddit costs conversions, and campus GPS is accurate
to about the wrong building.

---

## 8. Order of work

Mine, in order:

1. Thread `cmCourseInfo.description`, `department`, `faculty` and `breadths`
   through `build.py` — they're cached already, just dropped.
2. Derive `subject` from breadth category.
3. Write the topic vocabulary (~40 topics + synonyms).
4. Build-time tagging pass → `topics.json`.
5. Emit `lectures.json` / `buildings.json` into `preview/public/data/`.
6. Write `data.js` (loader, day/time filter, walking-time helper).
7. Flip the import, delete `samples.js`.

Astra's is unblocked and parallel: finish the UI against `samples.js`, absorb
the two shape changes in §5, and wire the URL hash.

Steps 1–2 are also what the landing page's `stats.json` should be regenerated
from, so the "1,787 courses" figure it quotes becomes the real 3,220.

---

## 8b. Status — steps 1-5 done

`scripts/build.py` now writes all three public files. Real numbers, measured:

- **11,929 meetings**, 3,220 courses, 65 buildings (63 with a polygon).
- **Seats on 11,898 of 11,929 meetings (99.7%).** The other 31 are `null`:
  the registrar publishes `9999` as a "no cap" sentinel on independent-research
  courses and `0` where capacity is unknown. Both are filtered out in
  `build.py` rather than passed through, because either would sort straight to
  the top or bottom of a "big rooms" filter and mean nothing. Con Hall's 1,500
  is the real ceiling.

- Seats coverage — the "big rooms" toggle is fully backed.
- **Descriptions on all but 10 meetings**; those 10 fall back to the title, so
  `description` is never empty and the card never renders a blank block.
- **All 40 topics non-empty.** Smallest is `robotics` (24 courses), largest
  `engineering` (446). Nothing is a dead end in the topic grid.
- Subject split: Science 3,810 / Technology 3,169 / Society 2,846 / Arts & ideas 2,104.

Two shapes were confirmed against Astra's code rather than assumed:

- `preview/public/data/buildings.json` was a **stale copy** of the 3D massing
  data. `campus-map.js` imports its manifest from `preview/src/campus-geometry.json`
  and only *fetches* `campus.bin(.gz)` and `ground.json`, so overwriting
  `buildings.json` with the contract shape breaks nothing. No rename needed.
- `catalogue.js` already fetches and validates all three files, which makes
  contract §5's `data.js` unnecessary. The seam Astra built is the seam.

**Skipped meetings, and why** (from 12,760 raw): 558 with no building assigned,
273 exact duplicates of `(code, section, term, day, start)`, 151 in buildings
outside the St. George map (`TL`, `UY`, `BY`, `ON`), plus weekend and
zero-length rows. These are dropped, not repaired — a meeting with no room is
one a student cannot walk into.

### Open question for Astra: payload size

`lectures.json` is **10.8 MB raw, 2.11 MB gzipped**. The transfer is fine (the
same order as `campus.bin.gz`, which already ships), but a phone still parses
and holds 10.8 MB. The cause is duplication, not volume: `descFull` alone is
5.68 MB because each course's description is repeated on every one of its
meetings, and 3,220 courses produce 11,929 meetings.

The fix is to key course-level fields by course code:

```jsonc
{ "courses": { "CSC108H1": { "title": …, "subject": …, "topics": […],
                             "description": …, "descFull": … } },
  "meetings": [ { "id", "code", "building", "room", "section",
                  "day", "start", "end", "seats", "term" } ] }
```

That is roughly 3 MB raw. It is **not** shipped, because `catalogue.js`
validates those five fields as strings on every meeting record, and that file
is Astra's. If you want it, say so here and I will emit both shapes for one
build so the switch is not a flag day.

---

### Tagging, final

`scripts/tag.py` ran both layers. The deterministic pass tags all 3,220 courses
with no network; the model pass then revised **1,444** of them, leaving **7**
untagged (courses with an empty description and an opaque title -- there is
nothing to tag them from).

The threshold matters and was wrong at first. `llm_pass` originally skipped
anything at confidence >= 0.7, but 0.7 is the score for "one title hit plus a
department prior" -- exactly the ambiguous middle the model is for. Sitting on
the threshold rather than under it, the three known false positives were never
sent. Raising it to 1.0 sends everything except the unambiguous cases, and all
three cleared:

| course | before | after |
|---|---|---|
| BME445H1 Neural Bioelectricity | engineering, neuroscience, biology, **ai** | engineering, neuroscience |
| APS360H1 Deep Learning | ai, engineering, education, programming, **philosophy** | ai, programming |
| CHE324H1 | engineering, design, chemistry, economics, **philosophy**, **music** | engineering, design |

Measured search quality on the shipped `topics.json`:

| query | courses | distinct department prefixes |
|---|---|---|
| `ai` | 50 | 20 — CSC, ECE, MIE, COG, ROB, CRE, HPS, MSE… |
| `climate` | 200 | 59 — ENV, EEB, FOR, GGR, CIV, ESS, CHM… |
| `gender` | 107 | 41 — WGS, SDS, HIS, RLG, GGR, ANT… |
| `space` | 26 | 10 — AST, AER, ENV, ESS, PHY… |

That cross-faculty spread is the whole argument in §3, now measured on shipped
data rather than promised.

**Provider note:** the Anthropic key has no credit and the Groq and OpenRouter
keys are dead. `tag.py` now tries each provider in turn with a one-token ping
before committing to a run, so an unfunded key costs a second rather than
forty batches. It fell through to OpenAI `gpt-4o-mini`. No key ships; tagging
happens once a month on Aadi's machine and the browser only ever reads JSON.

---

## 9. Corrections to older docs

Not yet applied, noted so nobody builds on them:

- `DESIGN_HANDOFF.md:47` says "468 lectures in 54 buildings". The real peak
  concurrency is **288, at 11am Wednesday**; there are **65** buildings.
- `PLAN.md` still lists rooms as an unsolved limitation (solved — per-meeting
  rooms are in the data) and proposes Overpass/Nominatim for geocoding
  (unnecessary — coordinates ship with the building data).
- `SCHEMA.md` needs the 273 duplicate `(c,s,d,st,term)` keys explained. They
  are now **dropped** in `build.py` rather than emitted: the same meeting
  appears twice in the registrar feed, and `catalogue.js` rejects the whole
  catalogue if any `id` repeats, so passing them through would silently fall
  the app back to fixtures.
- `DESIGN_HANDOFF.md` peak concurrency: measured again on the final build it is
  **271 at 11:45 on Wednesday** (Fall term only — mixing terms double-counts,
  since no student sees both at once).
- Deployment is documented in `DEPLOY.md`; `./scripts/site.sh` builds `site/`.
