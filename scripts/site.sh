#!/usr/bin/env bash
# Assemble the deployable static site into site/.
#
#   site/index.html      the landing page
#   site/app/            the built app (vite, base=./ so it works at any mount point)
#
# One directory, no server, no build step at the host. Drop it on GitHub Pages
# or Cloudflare Pages as-is.
set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> data"
.venv/bin/python scripts/build.py
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

echo "==> done"
du -sh site site/app
find site -name '*.json' -size +1M -exec ls -lh {} \; | awk '{print "  large:", $9, $5}'
