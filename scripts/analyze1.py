import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from paths import CACHE, DATA, p

import json, collections
cs = json.load(open(p("stage1_courses.json")))
codes = json.load(open(p("stage1_codes.json")))
print("records:", len(cs), "| unique codes:", len(codes))

# how many meetings total, and how many are lectures with a building
nm = nlec = nbldg = 0
tm = collections.Counter(); camp = collections.Counter()
for c in cs:
    for s in c.get("sections") or []:
        tmeth = (s.get("teachMethod") or "?")
        for m in s.get("meetingTimes") or []:
            nm += 1; tm[tmeth] += 1
            if tmeth == "LEC": nlec += 1
            if ((m.get("building") or {}).get("buildingCode") or "").strip(): nbldg += 1
    camp[c.get("campus") or "?"] += 1
print("meetings:", nm, "| LEC meetings:", nlec, "| with buildingCode:", nbldg)
print("teachMethod:", dict(tm.most_common(8)))
print("campus:", dict(camp))

# UTSG only (St George) — that's the app's scope
sg = [c for c in cs if (c.get("campus") or "").upper().startswith("ST")]
sgcodes = sorted({c["code"] for c in sg if c.get("code")})
print("\nUTSG records:", len(sg), "| UTSG unique codes:", len(sgcodes))
json.dump(sgcodes, open(p("stage1_codes_utsg.json"),"w"))
