"""Emit the three public data files the app fetches at runtime.

  preview/public/data/lectures.json   meetings + course copy, per BACKEND_CONTRACT 4.1
  preview/public/data/buildings.json  name/short/lat/lng/polygon, keyed by code
  preview/public/data/topics.json     label/synonyms/courses, keyed by topic id

data/lectures.json is still written as the raw archive. The public files are
the contract; nothing in preview/src/ is touched.

Descriptions come from .cache/stage2_detail.json (cmCourseInfo.description),
cleaned of prerequisite and restriction boilerplate. Two forms ship: `description`
is 1-2 sentences for the card, `descFull` the whole thing for the detail view.
Tags come from .cache/tags.json -- run scripts/tag.py first.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from paths import CACHE, DATA, p
from topics import TOPICS, SUBJECT_OF_TOPIC, IDS
from clean_desc import clean, summarise

import json, collections

HERE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(os.path.dirname(HERE), "preview", "public", "data")

B = {}
for l in open(p("bldg.raw")):
    l = l.strip()
    if l:
        b = json.loads(l); B[b["code"].strip().upper()] = b
OV = json.load(open(os.path.join(HERE, "overrides.json")))
for k, v in OV.items(): B.setdefault(k, v)

SESS = {"20269": "F", "20271": "S"}
d = json.load(open(p("stage2_detail.json")))
TAGS = json.load(open(p("tags.json"))) if os.path.exists(p("tags.json")) else {}

# Breadth code -> bucket, used only when a course has no tags at all. "CS"
# (Complementary Studies) is an engineering *requirement*, not a subject, so it
# says nothing about content and is deliberately absent.
BREADTH_SUBJECT = {
    "BR=1": "Arts & ideas", "BR=2": "Arts & ideas", "BR=3": "Society",
    "BR=4": "Science", "BR=5": "Science",
    "Hum": "Arts & ideas", "HSS": "Society", "SSc": "Society",
    "Sci": "Science", "NSC": "Science",
}


def seats_of(cap):
    """Capacity, or None when the number is not a room size. 9999 is the
    registrar's "no cap" sentinel (it appears on independent-research courses,
    which have no lecture hall at all) and 0 means unknown, not empty. Both
    would otherwise sort to the top or bottom of a "big rooms" filter.
    Con Hall seats 1,500 and is the largest room on campus."""
    if not isinstance(cap, int) or cap <= 0 or cap > 1600:
        return None
    return cap


def subject_of(code, breadths):
    """Vote across the course's topics; the first tag breaks ties because the
    tagger already ranks it highest. Engineering and CS courses often carry a
    humanities breadth requirement, so the tags are the better signal."""
    votes = collections.Counter()
    for i, t in enumerate(TAGS.get(code, [])):
        s = SUBJECT_OF_TOPIC.get(t)
        if s:
            votes[s] += max(1, 4 - i)
    if votes:
        return votes.most_common(1)[0][0]
    for b in breadths or []:
        for t in b.get("breadthTypes") or []:
            s = BREADTH_SUBJECT.get(t.get("code"))
            if s:
                return s
    return "Society"


meetings = []; skipped = collections.Counter(); used = set(); seen_ids = set()
courses_out = set()
for code, cs in d.items():
    for c in cs:
        title = c.get("name") or ""
        ci = c.get("cmCourseInfo") or {}
        full = clean(ci.get("description") or "")
        card = summarise(full) if full else ""
        subj = subject_of(code, c.get("breadths"))
        tags = TAGS.get(code, [])
        for s in c.get("sections") or []:
            sect = s.get("name") or ""
            cap = s.get("maxEnrolment")
            for m in s.get("meetingTimes") or []:
                sc = m.get("sessionCode") or ""
                if sc not in SESS: skipped["other-session"] += 1; continue
                b = m.get("building") or {}
                bc = (b.get("buildingCode") or "").strip().upper()
                rn = (b.get("buildingRoomNumber") or "").strip()
                if not bc: skipped["no-building"] += 1; continue
                if bc not in B: skipped[f"unmapped:{bc}"] += 1; continue
                st = m.get("start") or {}; en = m.get("end") or {}
                day = st.get("day"); s_ms = st.get("millisofday"); e_ms = en.get("millisofday")
                if day is None or s_ms is None or e_ms is None: skipped["no-time"] += 1; continue
                day = int(day); start = s_ms // 60000; end = e_ms // 60000
                # The UI only renders a weekday grid, and a zero-length meeting
                # is a data artefact, not a class anyone can walk into.
                if not 1 <= day <= 5: skipped["weekend"] += 1; continue
                if end <= start or end > 1440: skipped["bad-time"] += 1; continue
                mid = f"{code}-{sect}-{SESS[sc]}-{day}-{start}"
                if mid in seen_ids: skipped["duplicate"] += 1; continue
                seen_ids.add(mid); used.add(bc); courses_out.add(code)
                meetings.append({
                    "id": mid, "code": code, "title": title, "section": sect,
                    "building": bc, "room": rn, "day": day,
                    "start": start, "end": end,
                    "seats": seats_of(cap),
                    "term": SESS[sc], "subject": subj, "topics": tags,
                    "description": card or title, "descFull": full or card or title,
                })

meetings.sort(key=lambda x: (x["day"], x["start"], x["building"], x["code"]))
buildings = {k: {"name": B[k]["name"],
                 "short": B[k].get("short_name") or B[k]["name"],
                 "lat": B[k]["lat"], "lng": B[k]["lng"],
                 "polygon": B[k].get("polygon")} for k in sorted(used)}
terms = {"F": "Fall 2026", "S": "Winter 2027"}

# topics.json carries only courses that actually have a scheduled meeting --
# a topic that lists courses the app can never show is a dead end in the UI.
by_topic = collections.defaultdict(list)
for code in sorted(courses_out):
    for t in TAGS.get(code, []):
        by_topic[t].append(code)
topics_out = {t: {"label": TOPICS[t][0], "synonyms": TOPICS[t][1],
                  "courses": by_topic[t]}
              for t in IDS if by_topic[t]}

os.makedirs(PUBLIC, exist_ok=True)
json.dump({"generated": "2026-09-14",
           "source": "UofT TTB api.easi.utoronto.ca",
           "campus": "UTSG", "terms": terms, "meetings": meetings},
          open(os.path.join(PUBLIC, "lectures.json"), "w"), separators=(",", ":"))
json.dump(buildings, open(os.path.join(PUBLIC, "buildings.json"), "w"),
          separators=(",", ":"))
json.dump(topics_out, open(os.path.join(PUBLIC, "topics.json"), "w"),
          separators=(",", ":"))
json.dump({"generated": "2026-09-14", "terms": terms,
           "buildings": buildings, "meetings": meetings},
          open(os.path.join(DATA, "lectures.json"), "w"), separators=(",", ":"))

nodesc = sum(1 for m in meetings if m["description"] == m["title"])
print(f"meetings   : {len(meetings)}")
print(f"courses    : {len(courses_out)}")
print(f"buildings  : {len(used)}  polygon {sum(1 for k in used if B[k].get('polygon'))}")
print(f"topics     : {len(topics_out)} non-empty of {len(IDS)}")
print(f"no desc    : {nodesc} meetings fall back to the title")
print(f"seats      : {sum(1 for m in meetings if m['seats'] is not None)}")
print("subjects   :", dict(collections.Counter(m['subject'] for m in meetings)))
print("skipped    :", dict(skipped.most_common(6)))
for f in ("lectures.json", "buildings.json", "topics.json"):
    print(f"  {f:16s} {os.path.getsize(os.path.join(PUBLIC, f))/1e6:.1f} MB")
