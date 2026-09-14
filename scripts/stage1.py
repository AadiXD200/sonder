import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from paths import CACHE, DATA, p

import json, urllib.request, time

H = {"Content-Type":"application/json","Accept":"application/json",
     "Origin":"https://ttb.utoronto.ca","Referer":"https://ttb.utoronto.ca/","User-Agent":"Mozilla/5.0"}
URL = "https://api.easi.utoronto.ca/ttb/getPageableCourses"
DIVS = ["ARTSC","APSC","SCAR","ERIN","MUSIC","ARCLA","FPEH"]
SESSIONS = ["20269","20271"]

def fetch(div, sess, pg, tries=4):
    body = json.dumps({
      "courseCodeAndTitleProps":{"courseCode":"","courseTitle":"","courseSectionCode":"","searchCourseDescription":False},
      "departmentProps":[],"campuses":[],"sessions":[sess],"requirementProps":[],"instructor":"",
      "courseLevels":[],"deliveryModes":[],"dayPreferences":[],"timePreferences":[],
      "divisions":[div],"creditWeights":[],"page":pg,"pageSize":20,"direction":"asc"}).encode()
    for a in range(tries):
        try:
            r = urllib.request.urlopen(urllib.request.Request(URL, data=body, headers=H), timeout=45)
            return json.loads(r.read())
        except Exception:
            if a == tries-1: raise
            time.sleep(1.5*(a+1))

all_courses, seen = [], set()
t0 = time.time()
for sess in SESSIONS:
    for div in DIVS:
        j = fetch(div, sess, 1)
        total = j["payload"]["pageableCourse"]["total"] or 0
        pages = (total + 19)//20
        got = list(j["payload"]["pageableCourse"]["courses"] or [])
        for pg in range(2, pages+1):
            got += list(fetch(div, sess, pg)["payload"]["pageableCourse"]["courses"] or [])
            time.sleep(0.1)
        new = 0
        for c in got:
            k = (c.get("code"), c.get("sectionCode"), tuple(c.get("sessions") or []))
            if k in seen: continue
            seen.add(k); all_courses.append(c); new += 1
        print(f"{sess} {div:6s} total={total:5} fetched={len(got):5} new={new:5}", flush=True)

json.dump(all_courses, open(p("stage1_courses.json"),"w"))
codes = sorted({c["code"] for c in all_courses if c.get("code")})
json.dump(codes, open(p("stage1_codes.json"),"w"))
print(f"\nelapsed {time.time()-t0:.0f}s")
print("course-records:", len(all_courses))
print("unique codes  :", len(codes))
