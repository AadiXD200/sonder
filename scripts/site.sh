#!/usr/bin/env bash
# Assemble the deployable static site into site/.
#
#   site/index.html      the landing page
#   site/app/            the built app (vite, base=./ so it works at any mount point)
#
# One directory, no server, no build step at the host. Drop it on GitHub Pages
# or Cloudflare Pages as-is.
# Use --skip-data for UI releases that keep the existing published timetable.
set -euo pipefail
cd "$(dirname "$0")/.."

case "${1:-}" in
  ""|--skip-data) ;;
  *) echo "usage: $0 [--skip-data]" >&2; exit 1 ;;
esac
[ "$#" -le 1 ] || { echo "usage: $0 [--skip-data]" >&2; exit 1; }

echo "==> data"
if [ "${1:-}" = "--skip-data" ]; then
  .venv/bin/python - <<'VALIDATE'
import json
from pathlib import Path
root = Path('preview/public/data')
for filename in ('lectures.json', 'buildings.json', 'topics.json'):
    path = root / filename
    if not path.is_file():
        raise SystemExit(f'error: missing published data: {path}; rebuild the timetable first')
    data = json.loads(path.read_text())
    if not isinstance(data, dict) or not data or (filename == 'lectures.json' and not data.get('meetings')):
        raise SystemExit(f'error: empty or invalid published data: {path}')
print('Keeping the existing published timetable.')
VALIDATE
else
  for input in .cache/bldg.raw .cache/stage2_detail.json; do
    [ -f "$input" ] || { echo "error: missing $input; use --skip-data to build with the existing published timetable" >&2; exit 1; }
  done
  .venv/bin/python scripts/build.py
fi
.venv/bin/python scripts/landing_stats.py

echo "==> app"
( cd preview && npm run build -- --base=./ )

echo "==> assemble"
rm -rf site && mkdir -p site
cp -R landing/. site/
rm -rf site/alts                 # design explorations, not shipped
cp -R preview/dist site/app
# campus.bin is the uncompressed fallback for browsers without
# DecompressionStream -- none since 2023. Keeping it would put 9.7 MB in the
# deploy that nothing ever requests.
rm -f site/app/data/campus.bin

# The custom domain. Pages reads this from the uploaded artifact, so it has to
# be inside site/ -- a CNAME at the repo root never reaches the published site.
# Written by the build because site/ is wiped on every run; placing it by hand
# would work once and then disappear on the next deploy.
echo "sonderate.me" > site/CNAME

# The analytics tag. Injected here rather than into landing/index.html or the
# app's source because it has to land in both pages, and preview/src is Astra's
# -- a build-time injection survives his rebuilds and keeps one copy of the
# snippet. Set SONDER_GC_SITE to your GoatCounter subdomain to enable it;
# unset, the site ships with no tracking at all, which is the right default
# for local builds and previews.
if [ -n "${SONDER_GC_SITE:-}" ]; then
  echo "==> analytics ($SONDER_GC_SITE)"
  TAG='<script data-goatcounter="https://'"$SONDER_GC_SITE"'.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>'
  for f in site/index.html site/app/explore.html; do
    [ -f "$f" ] || continue
    # Insert before </head>. python rather than sed: the tag contains slashes
    # and ampersands that sed's replacement syntax would mangle.
    TAG="$TAG" python3 - "$f" <<'INJECT'
import os, sys
path = sys.argv[1]
tag = os.environ["TAG"]
html = open(path, encoding="utf-8").read()
if "goatcounter" in html:
    sys.exit(0)
if "</head>" not in html:
    sys.exit(f"error: {path} has no </head> to inject into")
open(path, "w", encoding="utf-8").write(html.replace("</head>", tag + "\n</head>", 1))
INJECT
    echo "    tagged $f"
  done
else
  echo "==> analytics: SONDER_GC_SITE unset, shipping untracked"
fi

echo "==> done"
du -sh site site/app
find site -name '*.json' -size +1M -exec ls -lh {} \; | awk '{print "  large:", $9, $5}'
