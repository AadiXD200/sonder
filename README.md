# Sonder

**[sonderate.me](https://sonderate.me)** · **[Demo video](https://youtu.be/ttVOj9_ygrw)**

Hundreds of lectures are happening on the UofT St. George campus right now.
Sonder shows you the ones you could walk into.

You have a two-hour gap between your own classes. Somewhere within a five
minute walk, someone is giving a lecture on the history of plague, or orbital
mechanics, or Dostoevsky. Nobody checks the door. Sonder is a map of those
rooms, sorted by how soon they start and how far you have to go.

[![Watch the demo](https://img.youtube.com/vi/ttVOj9_ygrw/maxresdefault.jpg)](https://youtu.be/ttVOj9_ygrw)

The same clip is in the repo at
[`preview/artifacts/sonder-reddit-promo.mp4`](preview/artifacts/sonder-reddit-promo.mp4).

---

## What it does

Two ways in, depending on how decisive you feel:

- **Sonderate** — one button. It picks a lecture starting soon, somewhere you
  can actually reach, and tells you the room. No browsing, no deciding.
- **Find something relevant** — search by topic rather than by course code.
  Typing `plague` finds the history-of-medicine lecture, not courses with
  "plague" in the title. Each course is tagged against a hand-written
  vocabulary of 40 topics.

Once you've got a lecture:

- **The gap** — how long you have before it starts, and whether you'll make it
  on foot.
- **Building view** — a 3D campus map that flies to the building and shows you
  which door to use.
- **Big rooms only** — a toggle for the lecture halls where one extra person is
  invisible. Con Hall seats 1,500.
- **Shareable link** — the state lives in the URL hash, so you can send a
  specific lecture to a friend.

## The data

| | |
|---|---|
| Source | UofT Timetable Builder API (`api.easi.utoronto.ca`) |
| Campus | St. George |
| Terms | Fall 2026, Winter 2027 |
| Meetings | 11,929 |
| Buildings | 65, with coordinates and footprints |
| Topics | 40 |

Everything is resolved at build time into one static JSON file. There is no
backend, no API key, no account, and no request to any server but the one
hosting the page. The site is a directory of files.

## How it's built

```
scripts/
  run_all.py            the whole pipeline, ~2 minutes
    stage0_buildings.py   building coordinates and footprints
    stage1.py             enumerate every course
    analyze1.py           filter to St. George
    stage2.py             fetch rooms and meeting times
    build.py              join it all into data/lectures.json
  topics.py / tag.py    tag courses against the topic vocabulary (LLM, build-time only)
  landing_stats.py      the density grid on the landing page
  site.sh               assemble landing + app into site/
  deploy.sh             push site/ to the gh-pages branch
```

The app itself is Vite + vanilla JS, with `three` for the campus map. The
landing page is a single hand-written HTML file.

Tagging runs once, at build time, and its output is committed to
`.cache/tags.json` — so a clone can rebuild the site without an LLM key. The
rest of `.cache/` is scrape intermediates and regenerates itself.

## Running it

The pipeline is pure standard library — no Python dependencies to install.

```bash
python3 -m venv .venv
cd preview && npm install && cd ..

.venv/bin/python scripts/run_all.py   # rebuild the dataset from the TTB API
./scripts/site.sh                     # assemble site/
./scripts/deploy.sh                   # publish to gh-pages
```

For the app alone, `cd preview && npm run dev`.

### Analytics

Off by default. Set `SONDER_GC_SITE` to a [GoatCounter](https://www.goatcounter.com)
subdomain and `site.sh` injects the tag into both pages at assembly time;
leave it unset and the site ships with no tracking at all.

## Notes

- `BACKEND_CONTRACT.md` and `SCHEMA.md` describe the shape of
  `data/lectures.json` and the guarantees the app relies on.
- The app source under `preview/src/` has its own README.

## A caveat

Sitting in on a lecture you aren't registered for is a courtesy, not a right.
Take a seat at the back, don't take someone's spot in a full room, and if a
lecturer asks you to leave, leave. Labs, tutorials, and anything with a
midterm in it are not what this is for.

---

Built by a UofT student, for UofT students. Free, and staying that way.
