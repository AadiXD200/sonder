#!/usr/bin/env bash
# Build the site and publish it to the gh-pages branch.
#
#   ./scripts/deploy.sh          build, publish, wait for the deploy
#   ./scripts/deploy.sh --skip-build   publish the existing site/ as-is
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

if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "error: uncommitted tracked changes. Commit or stash them first." >&2
  git status --short --untracked-files=no >&2
  exit 1
fi

if [ "${1:-}" != "--skip-build" ]; then
  ./scripts/site.sh
fi

[ -f site/app/explore.html ] || { echo "error: site/ has no built app" >&2; exit 1; }

# The app must use relative asset paths. Root-absolute ones (base=/app/) 404
# under the /sonder/ prefix Pages serves from, which renders a blank page --
# the HTML still returns 200, so only this check catches it.
if grep -q 'src="/app/' site/app/explore.html; then
  echo "error: explore.html has root-absolute asset paths; build with --base=./" >&2
  exit 1
fi

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
