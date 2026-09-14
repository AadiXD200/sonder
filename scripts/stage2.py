import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from paths import CACHE, DATA, p

import json, urllib.request, time, concurrent.futures as cf, threading

H = {"Accept":"application/json","Origin":"https://ttb.utoronto.ca",
     "Referer":"https://ttb.utoronto.ca/","User-Agent":"Mozilla/5.0"}
BASE = "https://api.easi.utoronto.ca/ttb/getCoursesByCodeAndSectionCode/"
lock = threading.Lock(); done = [0]

def one(code, tries=3):
    for a in range(tries):
        try:
            r = urllib.request.urlopen(urllib.request.Request(BASE+code, headers=H), timeout=30)
            j = json.loads(r.read())
            with lock:
                done[0] += 1
                if done[0] % 500 == 0: print(f"  {done[0]} ...", flush=True)
            return code, (j.get("payload") or {}).get("pageableCourse", {}).get("courses") or [], None
        except Exception as e:
            if a == tries-1:
                with lock: done[0] += 1
                return code, [], f"{type(e).__name__}: {e}"
            time.sleep(1.0*(a+1))

codes = json.load(open(p("stage1_codes_utsg.json")))
print("stage 2: detail-fetching", len(codes), "UTSG codes")
t0 = time.time()
out, errs = {}, {}
with cf.ThreadPoolExecutor(6) as ex:
    for code, courses, err in ex.map(one, codes):
        if err: errs[code] = err
        else: out[code] = courses
print(f"elapsed {time.time()-t0:.0f}s | ok={len(out)} err={len(errs)}")
json.dump(out, open(p("stage2_detail.json"),"w"))
json.dump(errs, open(p("stage2_errors.json"),"w"))
if errs:
    for k,v in list(errs.items())[:5]: print("  ERR", k, v[:80])
