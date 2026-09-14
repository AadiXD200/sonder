# Deploying Sonder

Everything is static. There is no server, no database, and no API key in
anything that reaches a browser. The whole site is one directory.

## Build

```bash
./scripts/site.sh
```

That runs the data pipeline, builds the app, and assembles `site/`:

```
site/index.html      landing page
site/app/            the app (vite build, base=/app/)
site/app/data/       lectures.json, buildings.json, topics.json, campus.bin.gz, ground.json
```

`site/` is disposable — it is rebuilt from scratch each time and should not be
committed.

## Host

Either works and both are free at this size.

**Cloudflare Pages** — connect the repo, set build command `./scripts/site.sh`
and output directory `site`. Serves gzip automatically, which is the setting
that matters: `lectures.json` is 10.8 MB on disk and 2.1 MB over the wire.

**GitHub Pages** — push `site/` to a `gh-pages` branch. Pages gzips JSON too.

Whichever you pick, confirm gzip before launch:

```bash
curl -sI -H 'Accept-Encoding: gzip' https://YOUR-HOST/app/data/lectures.json | grep -i content-encoding
```

If that header is missing the app still works, but a phone downloads 10.8 MB
instead of 2.1 MB. On campus wifi at 11am that is the difference between the
page feeling instant and feeling broken.

## Refreshing the data

Monthly, or whenever the timetable changes:

```bash
source .venv/bin/activate
python scripts/stage1.py && python scripts/stage2.py   # scrape
python scripts/tag.py --llm                            # needs a provider key
./scripts/site.sh
```

`tag.py` reads its key from the environment and picks the first provider that
answers (Groq, then OpenRouter, then OpenAI). Without `--llm` it still produces
a complete tag set from the deterministic pass alone, so a failed or unfunded
key degrades tag quality but never breaks the build.

**`.env` never ships.** It is gitignored, it is read only by build scripts on
your machine, and nothing in `site/` references it.

## Checks before launch

```bash
cd site && python3 -m http.server 8791
```

- `/` — landing page, both CTAs go to the app
- `/app/explore.html` — the header says PUBLISHED TIMETABLE, not SAMPLE.
  If it says SAMPLE, `loadCatalogue` rejected the data and fell back to
  fixtures; re-run the validator in `scripts/` to find which field broke.
- Phone width — the app has breakpoints down to 360px
