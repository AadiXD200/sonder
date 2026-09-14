# Mobile map: two-stage tap, and the deploy flow

Written for: Astra (owns `preview/src/`). From: the backend/landing side.

Three things in here. §1 and §2 are changes Aadi wants in your files. §3 is the
deploy flow, which changed since you last shipped — read it before you push,
because the app is now live on a real domain and there is a new failure mode.

---

## 1. The change Aadi asked for

> "the mobile version in the campus map, make it so that one tap gives like the
> building animation, and then one more tap on the building names takes them to
> the classes there"

### What happens today

`preview/src/explore/explore.js:157`, inside the `onSelect` callback you pass to
`mountCampusMap`:

```js
onSelect(building) {
  if (selectingFromList || disposed) return;
  state.building = building ? { codes: building.codes, name: building.name } : null;
  changed();
  if (building && mobile.matches) setView("list");   // <- this line
}
```

On mobile, one tap on a building does both jobs at once: it selects the building
*and* immediately switches the whole view to the class list.

The problem is what that interrupts. `select()` in `campus-map.js:283` starts a
camera fly-to on every selection (`campus-map.js:310-319`) — it eases the camera
to the building, drops to `zoom 2.6` on mobile, and offsets the target by
`z += 100` so the building clears the detail sheet. It also fills in the
selection panel: name, codes, note, and the UofT map link.

`setView("list")` fires synchronously in the same turn, so on a phone none of
that is ever seen. The fly-to animates behind a view that has already been
swapped away, and the selection panel you built is populated and then hidden.
The tap reads as "the map blinked and threw me somewhere else."

Worth saying plainly: the map work is good, and this is the one interaction
where the phone never gets to show it.

### What Aadi wants instead

Split the single tap into two stages on mobile:

**Tap 1 — on the building mesh.** Stay on the map. Let the fly-to run and let
the selection panel appear. Nothing else changes. This is just `select()`
without the forced view switch.

**Tap 2 — on the building name.** Goes to that building's classes. The second
tap is specifically on the *name*, per Aadi's wording, so the affordance has to
look tappable and say where it goes.

Desktop keeps its current behaviour exactly. There is a standing constraint from
Aadi — "bro dont break desktop pls" — and the list/map split doesn't exist there
in the same form anyway.

### Where the second tap should live

Your call, but the obvious candidate is the selection panel that already appears
on tap 1. It has `#selection-name` populated at `campus-map.js:294`, which is
literally the building name, and the panel is already the mobile detail sheet.

Two things to decide, both yours:

1. **Is `#selection-name` itself the control, or does the panel get an explicit
   button** (something like "See what's on in Bahen →"). A plain heading that
   happens to be tappable is not discoverable on a phone; whatever you pick needs
   to read as a control. An explicit button is the safer call, but it's your
   design language, not mine.

2. **What the second tap does when a building has no classes in the current gap.**
   The list can legitimately come back empty — it's filtered to the active time
   window. Either suppress the control, or let it through to an empty state that
   explains why. Suppressing it means reading the filtered count at panel-render
   time; there's a `updateMapCounts()` in `explore.js` that may already have
   what you need.

### The ownership line

`campus-map.js` dispatches `campus:select` and calls `options.onSelect` from
`announceSelection()` (`campus-map.js:140-146`). That's the seam between the map
component and the explore shell.

If the second tap can be built by changing only how `explore.js` reacts to
selection — not switching views on tap 1, and rendering a control that calls
`setView("list")` on tap 2 — then `campus-map.js` doesn't need to change at all.
That's the cheapest version and probably the right one.

If you do need the map component to emit something new (say, a distinct event
for "name was tapped"), that's fine, it's your file. Just keep `publicBuilding()`
at `campus-map.js:125` as the payload shape, because it's the documented contract
and the backend side reads it.

### Don't let tap 1 regress into a drag

`campus-map.js:1058-1066` already distinguishes a tap from a drag: a pointerup
only counts if the pointer didn't move more than 6px and only one pointer was
down. Since tap 1 will now be the *only* thing standing between the user and the
map, a stray drag being read as a tap gets more annoying, not less — it'll fire a
fly-to mid-orbit. The existing guard looks right; just don't loosen it.

### How to check it

Aadi is on a phone at roughly 390px. Worth confirming on a real touch device or
an emulated one with `isMobile: true` and `hasTouch: true` — `mobile.matches` in
`explore.js` and `mobile()` in `campus-map.js` are the branches that matter, and
a desktop browser narrowed to 390px does not exercise the same pointer path.

Specifically: tap a building, and confirm the camera actually arrives and the
panel is readable *before* anything else happens.

---

## 2. The logo should go home

> "also make it so that if you tap the sonder logo on the top, it takes you back
> to the landing page"

`explore.js:96`:

```js
<a class="logo" href="./explore.html" aria-label="Sonder explore">SON<b>DER</b></a>
```

It points at `./explore.html` — the page it's already on. Tapping the wordmark
reloads the app. Confirmed live on `https://sonderate.me/app/explore.html`.

It should go to the landing page instead. The app is served from `/app/`, so
the landing page is one level up:

```js
<a class="logo" href="../" aria-label="Sonder — home">SON<b>DER</b></a>
```

Use `../`, not `/` and not an absolute URL. Two reasons: the whole site is built
with `--base=./` precisely so it doesn't depend on being at a domain root (§3),
and a hardcoded `https://sonderate.me/` would break local preview on
`localhost:5173`. `../` resolves correctly in both.

Update the `aria-label` too — it currently says "Sonder explore", which will be
wrong once the link goes home.

---

## 3. Deploy flow — read this before you push

This changed this week. The old instructions in your notes are stale.

### The site is live

- **https://sonderate.me/** — landing page
- **https://sonderate.me/app/explore.html** — your app

Custom domain, HTTPS enforced. The old `aadixd200.github.io/sonder/` URL
redirects here, so old links still work.

### Two branches, and what each is for

| Branch | Holds |
|---|---|
| `main` | source only — no build output |
| `gh-pages` | the built `site/`, produced **locally**, never by CI |

CI does not build. It can't: `build.py` needs ~100 MB of registrar scrape
intermediates that live in an uncommitted `.cache/`. The GitHub Action only
publishes what's already committed on `gh-pages`.

### How to ship

```bash
# from the repo root, with a clean tree
./scripts/deploy.sh
```

That rebuilds, assembles `site/`, commits to `gh-pages`, and pushes. It refuses
to run with uncommitted tracked changes — commit to `main` first. `--skip-build`
reuses the existing `site/` if you already built.

Commit your source to `main` as usual; `deploy.sh` handles the rest.

### The failure mode that will bite you

The app is served from **`/app/`**, not the domain root. Vite must be built with
`--base=./` so asset URLs are document-relative. `scripts/site.sh:17` does this.

If it's ever built with `--base=/app/` instead, every asset URL becomes
root-absolute and 404s — and `explore.html` still returns **HTTP 200** while
doing it. The page is blank and every status check says the site is fine. This
cost real time already.

`deploy.sh` now hard-fails on it:

```bash
if grep -q 'src="/app/' site/app/explore.html; then
  echo "error: explore.html has root-absolute asset paths; build with --base=./" >&2
  exit 1
fi
```

Don't remove that guard, and don't change the `--base` value in `site.sh`.

Both your data fetches already resolve through `import.meta.env.BASE_URL` +
`document.baseURI` (`catalogue.js:13`, `campus-map.js:1249`), so a relative base
propagates correctly with no code change on your side. That part is fine as-is.

### Two more things

**Verify in a browser, not with curl.** See above — a 200 proves nothing here.
Load the actual page and look at it. I reported this site "verified" on status
codes once; it was blank.

**GitHub Pages caches HTML for 10 minutes** (`max-age=600`), and Vite filenames
are content-hashed. So right after a deploy a stale HTML can reference a deleted
asset and go blank on a normal reload. Hard-refresh before concluding you broke
something.

### `site/CNAME`

`scripts/site.sh` writes `site/CNAME` on every build. It has to be inside
`site/` because that's the directory the workflow uploads — a `CNAME` at the
repo root never reaches the published site. Don't move it or hand-place it;
`site/` is wiped on every build.
