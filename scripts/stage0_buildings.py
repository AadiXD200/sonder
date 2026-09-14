import os, sys, urllib.request
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from paths import p

# Cobalt's UofT buildings dataset: codes, names, lat/lng, footprint polygons.
# Public domain snapshot, last updated 2016 — predates a few newer buildings
# (Myhal, etc), which is why scripts/overrides.json exists.
URL = "https://raw.githubusercontent.com/cobalt-uoft/datasets/master/buildings.json"

print("stage 0: fetching buildings from Cobalt")
req = urllib.request.Request(URL, headers={"User-Agent": "sonder/0.1 (student project)"})
data = urllib.request.urlopen(req, timeout=60).read()

n = sum(1 for l in data.decode().splitlines() if l.strip())
with open(p("bldg.raw"), "wb") as f:
    f.write(data)
print(f"  {n} buildings -> {p('bldg.raw')}")
