#!/usr/bin/env bash
# Build the site and publish it to the gh-pages branch.
#
#   ./scripts/deploy.sh          build, publish, wait for the deploy
#   ./scripts/deploy.sh --skip-build   publish the existing site/ as-is
#   ./scripts/deploy.sh --skip-data    build UI with the existing timetable
#
# Why two branches: site/ is ~14 MB of build output, and it cannot be built in
# CI because scripts/build.py regenerates the data from ~100 MB of registrar
# scrape intermediates in .cache/ that are not in the repo. So main stays
# source-only and the artifact lives on gh-pages, which is the branch name
# every static host already recognises.
set -euo pipefail
cd "$(dirname "$0")/.."

BRANCH=gh-pages
START_BRANCH=$(git rev-parse --abbrev-ref HEAD)

case "${1:-}" in
  ""|--skip-build|--skip-data) ;;
  *) echo "usage: $0 [--skip-build|--skip-data]" >&2; exit 1 ;;
esac
[ "$#" -le 1 ] || { echo "usage: $0 [--skip-build|--skip-data]" >&2; exit 1; }

if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "error: uncommitted tracked changes. Commit or stash them first." >&2
  git status --short --untracked-files=no >&2
  exit 1
fi

if [ "${1:-}" != "--skip-build" ]; then
  # Warn rather than fail: an untracked deploy is a valid thing to want, but
  # doing it by accident on launch day is not recoverable -- those visits are
  # simply never counted.
  if [ -z "${SONDER_GC_SITE:-}" ]; then
    echo "warning: SONDER_GC_SITE unset, publishing with no analytics" >&2
  fi
  if [ "${1:-}" = "--skip-data" ]; then
    ./scripts/site.sh --skip-data
  else
    ./scripts/site.sh
  fi
fi

[ -f site/app/explore.html ] || { echo "error: site/ has no built app" >&2; exit 1; }

# The app must use relative asset paths. Root-absolute ones (base=/app/) 404
# under the /sonder/ prefix Pages serves from, which renders a blank page --
# the HTML still returns 200, so only this check catches it.
if grep -q 'src="/app/' site/app/explore.html; then
  echo "error: explore.html has root-absolute asset paths; build with --base=./" >&2
  exit 1
fi

# Never silently drop analytics that the live site already has. A build from a
# shell without SONDER_GC_SITE produces untracked pages that look identical to
# tracked ones, and republishing them stops collection without any error --
# exactly how a day of launch traffic went uncounted. Compares against what is
# actually being served rather than the local branch, because site/ is build
# output and the published pages are the only record of what visitors load.
for page in index.html app/explore.html; do
  built="site/$page"
  [ -f "$built" ] || continue
  # gh-pages keeps the build under site/, matching the layout published below.
  live=$(git show "$BRANCH:site/$page" 2>/dev/null || true)
  case "$live" in *goatcounter*) ;; *) continue ;; esac
  if ! grep -q goatcounter "$built"; then
    echo "error: $page is tracked on $BRANCH but this build is not." >&2
    echo "       Set SONDER_GC_SITE (see .env.sonder.example), rebuild, and retry." >&2
    echo "       To publish untracked on purpose: SONDER_ALLOW_UNTRACKED=1 $0 ${*:-}" >&2
    [ -n "${SONDER_ALLOW_UNTRACKED:-}" ] || exit 1
  fi
done

# Stage the build outside the worktree BEFORE switching branches: checking out
# gh-pages overwrites site/ with that branch's copy, so building in place and
# then switching loses the thing being published.
STAGE=$(mktemp -d)
trap 'rm -rf "$STAGE"' EXIT
cp -R site/. "$STAGE/"

git checkout -q "$BRANCH"
rm -rf site && mkdir -p site && cp -R "$STAGE/." site/
git add -A site

if git diff --cached --quiet; then
  echo "no change to publish"
else
  git commit -q -m "Rebuild site ($(date +%Y-%m-%d))"
  git push -q origin "$BRANCH"
  echo "pushed $BRANCH"
fi

git checkout -q "$START_BRANCH"
# Restore the local site/ so the working copy matches what was published
# rather than whatever the branch switch left behind.
rm -rf site && mkdir -p site && cp -R "$STAGE/." site/

echo "deploying: https://github.com/AadiXD200/sonder/actions"
echo "live:      https://aadixd200.github.io/sonder/"
