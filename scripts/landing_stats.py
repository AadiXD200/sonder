"""Regenerate landing/stats.json (and landing/_data.js) from the real build.

The landing page needs four things:
  grid  -- how many classes are running in each 15-minute slot, Mon-Fri 08:00
           onward, which is the animated ribbon
  pool  -- a sample of real meetings the page cycles through as proof it is
           showing actual classes, biased to big rooms because those are the
           ones a stranger can actually slip into
  ncourses / nbuildings -- the two figures in the copy

Run after scripts/build.py.
"""
import os, sys, json, collections
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from paths import DATA

HERE = os.path.dirname(os.path.abspath(__file__))
LANDING = os.path.join(os.path.dirname(HERE), "landing")
PUBLIC = os.path.join(os.path.dirname(HERE), "preview", "public", "data")

cat = json.load(open(os.path.join(PUBLIC, "lectures.json")))
bld = json.load(open(os.path.join(PUBLIC, "buildings.json")))
meet = cat["meetings"]

# Fall only. Mixing terms would double-count -- no student sees both at once.
fall = [m for m in meet if m["term"] == "F"]

START, SLOT, N = 8 * 60, 15, 56
grid = {}
for day in range(1, 6):
    row = [0] * N
    for m in fall:
        if m["day"] != day:
            continue
        a = max(0, (m["start"] - START) // SLOT)
        b = min(N, -(-(m["end"] - START) // SLOT))
        for i in range(a, b):
            row[i] += 1
    grid[str(day)] = row

# One meeting per course, biggest room first, so the sample reads as a tour of
# the campus rather than eight sections of the same lecture.
best = {}
for m in fall:
    cur = best.get(m["code"])
    if cur is None or (m["seats"] or 0) > (cur["seats"] or 0):
        best[m["code"]] = m
pool = []
for m in sorted(best.values(), key=lambda x: -(x["seats"] or 0))[:260]:
    b = bld[m["building"]]
    pool.append({"c": m["code"], "t": m["title"], "b": m["building"],
                 "bn": b["short"], "r": m["room"] or "---",
                 "d": m["day"], "st": m["start"], "en": m["end"],
                 "cap": m["seats"]})

out = {"grid": grid, "pool": pool,
       "nbuildings": len(bld),
       "ncourses": len({m["code"] for m in meet}),
       # The scale line in the footer. Hardcoding these drifts every time the
       # registrar republishes, so they come from the data like everything else.
       "nmeetings": len(meet)}
blob = json.dumps(out, separators=(",", ":"))
open(os.path.join(LANDING, "stats.json"), "w").write(blob)
# The alts open over file:// where fetch is blocked, so they read a JS global.
for d in (LANDING, os.path.join(LANDING, "alts")):
    if os.path.isdir(d):
        open(os.path.join(d, "_data.js"), "w").write(f"const SONDER={blob};\n")

peak = max((v, d, i) for d, r in grid.items() for i, v in enumerate(r))
hh, mm = divmod(START + peak[2] * SLOT, 60)
print(f"courses   : {out['ncourses']}")
print(f"buildings : {out['nbuildings']}")
print(f"meetings  : {out['nmeetings']}")
print(f"pool      : {len(pool)} meetings, {pool[0]['cap']} down to {pool[-1]['cap']} seats")
print(f"peak      : {peak[0]} at once, day {peak[1]} {hh:02d}:{mm:02d}")
