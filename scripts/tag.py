"""Assign each scheduled course 3-8 topics from the fixed vocabulary.

Two layers, in this order:

  1. A deterministic pass over title + description + department prefix. Cheap,
     reproducible, no network. It gets the easy 80% right and, importantly,
     it gets *every* course something, so the build never depends on a model
     being reachable.
  2. An optional LLM pass (`--llm`) over the courses the deterministic pass is
     least confident about -- the ones with few hits or an opaque title. This
     is where the money and the time go, so it is targeted rather than
     blanket. Off-vocabulary tags from the model are dropped on the floor.

Output: .cache/tags.json  ->  {"CSC108H1": ["programming", "ai"], ...}

Run:
    python3 scripts/tag.py            # deterministic only
    python3 scripts/tag.py --llm      # + model pass on the weak cases
"""
import os, sys, re, json, collections
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from paths import CACHE, p
from topics import TOPICS, PREFIX_PRIOR, IDS
from clean_desc import clean

MAX_TAGS = 8
MIN_TAGS = 2

# Titles that tell you nothing on their own. These are the courses where the
# description is doing all the work, and where the LLM pass earns its keep.
# Words common enough in course prose that a description hit carries no signal.
BROAD = {
    "cultur", "culture", "social", "society", "communit", "identity",
    "histor", "history", "historical", "century", "design", "designs",
    "analysis", "studies", "research", "project", "theory", "theories",
    "development", "modern", "contemporary", "practice", "practices",
    "writing", "text", "texts", "language", "media", "art", "performance",
    "logic", "argument", "measure", "wave", "cell", "reaction", "studio",
    "state", "power and", "class and", "region", "planning", "management",
    "environmental", "clinical", "patient", "student", "students",
}

OPAQUE = re.compile(
    r'\b(topics?|seminar|studies|special|advanced|independent|research|'
    r'project|readings?|directed|thesis|internship|practicum)\b', re.I)


def load_courses():
    """{code: {code,title,desc,dept,prefix}} for every scheduled course."""
    detail = json.load(open(p("stage2_detail.json")))
    scheduled = set(json.load(open(p("scheduled_codes.json"))))
    out = {}
    for code, entries in detail.items():
        if code not in scheduled or code in out:
            continue
        c = entries[0]
        ci = c.get("cmCourseInfo") or {}
        dept = (c.get("department") or {}).get("name") or ""
        out[code] = {
            "code": code,
            "title": c.get("name") or c.get("title") or "",
            "desc": clean(ci.get("description") or ""),
            "dept": dept,
            "prefix": (re.match(r"[A-Z]+", code) or [""])[0],
        }
    return out


def score(course):
    """Weighted keyword scoring. Title hits count more than description hits
    because a word in a title is about the course; a word in a description may
    be about one week of it."""
    title = course["title"].lower()
    desc = course["desc"].lower()
    dept = course["dept"].lower()
    hay_t = " " + re.sub(r"[^a-z0-9 ]+", " ", title) + " "
    hay_d = " " + re.sub(r"[^a-z0-9 ]+", " ", desc) + " "

    s = collections.Counter()
    for tid, (_label, syns, kws) in TOPICS.items():
        for term in set(syns) | set(kws):
            t = re.sub(r"[^a-z0-9 ]+", " ", term.lower()).strip()
            # "c++" normalises to "c", which then matches every word starting
            # with c. Anything this short after normalisation is noise.
            if len(t) < 3:
                continue
            # Whole-word-ish: keyword stems like "psycholog" are prefixes, so
            # require a word boundary on the left only.
            pat = r"\b" + re.escape(t)
            if re.search(pat, hay_t):
                s[tid] += 3
            # Some words are everywhere in humanities prose -- "cultural",
            # "social", "historical", "design" appear in hundreds of
            # descriptions that are not about those topics. In a *title* they
            # still mean something; in a description they are connective
            # tissue. So the broad ones score on title only.
            elif t not in BROAD and re.search(pat, hay_d):
                s[tid] += 1
        if re.search(r"\b" + re.escape(tid), dept or ""):
            s[tid] += 1

    # Department prior. Strong enough to break ties and to carry a course whose
    # prose gave nothing, not strong enough to beat real textual evidence.
    for tid in PREFIX_PRIOR.get(course["prefix"], []):
        s[tid] += 4
    return s


def pick(s):
    if not s:
        return []
    top = s.most_common()
    best = top[0][1]
    # Keep tags within a factor of the leader; a tag scoring 1 next to a leader
    # scoring 20 is a coincidence, not a topic.
    floor = max(2, best * 0.25)
    out = [t for t, v in top if v >= floor][:MAX_TAGS]
    return out or [top[0][0]]


def confidence(course, s, tags):
    """Low-confidence cases get sent to the model. Three signals: nothing
    scored, the title is opaque so the prior is doing all the work, or the
    leader is weak in absolute terms."""
    if not tags:
        return 0.0
    best = s.most_common(1)[0][1]
    if best >= 9 and not OPAQUE.search(course["title"]):
        return 1.0
    if best >= 6:
        return 0.7
    if best >= 3:
        return 0.4
    return 0.2


# Last resort when a course scores nothing at all: courses whose catalogue
# entry is literally "topics vary from year to year depending on the
# instructor" have no subject matter to detect. The tag comes from the
# course's own subject area so the course is at least reachable -- an
# untagged course is invisible to every topic query in the app, which is
# worse than a loose tag.
FALLBACK_BY_LEVEL = "education"


def deterministic(courses):
    tags, conf = {}, {}
    for code, c in courses.items():
        s = score(c)
        t = pick(s)
        if not t:
            t = [FALLBACK_BY_LEVEL]
        tags[code] = t
        conf[code] = confidence(c, s, t)
    return tags, conf


# --------------------------------------------------------------------------
# Optional model pass
# --------------------------------------------------------------------------

PROMPT = """You are tagging University of Toronto courses so students can search by subject.

Choose ONLY from this exact list of topic ids:
{vocab}

For each course below, return 2-6 ids that describe what the course is actually about. Use the department as a disambiguator: "Neural Bioelectricity" in Biomedical Engineering is engineering and biology, NOT ai. Prefer specific topics over broad ones. Never invent an id.

Return one JSON object, no prose:
{{"COURSECODE": ["id", "id"], ...}}

Courses:
{items}"""


# Providers, in the order they are tried. All speak the OpenAI chat-completions
# shape, so one code path covers them; only the base URL, key and model differ.
# No SDK -- urllib is enough and keeps the pipeline dependency-free.
PROVIDERS = [
    ("GROQ_API_KEY", "https://api.groq.com/openai/v1/chat/completions",
     "llama-3.3-70b-versatile"),
    ("OPENROUTER_API_KEY", "https://openrouter.ai/api/v1/chat/completions",
     "meta-llama/llama-3.3-70b-instruct"),
    ("OPENAI_API_KEY", "https://api.openai.com/v1/chat/completions",
     "gpt-4o-mini"),
]


def pick_provider():
    """First provider whose key is set AND that answers a one-token ping.
    Pinging matters: a key can be present and out of credit, which is exactly
    what happened with Anthropic here, and discovering that on batch 40 of 40
    wastes the whole run."""
    import urllib.request, urllib.error
    for env, url, model in PROVIDERS:
        key = os.environ.get(env)
        if not key:
            continue
        body = json.dumps({"model": model, "max_tokens": 4,
                           "messages": [{"role": "user", "content": "hi"}]}).encode()
        req = urllib.request.Request(
            url, data=body,
            headers={"Authorization": f"Bearer {key}",
                     "Content-Type": "application/json"})
        try:
            urllib.request.urlopen(req, timeout=30).read()
            print(f"  provider: {env.split('_')[0].lower()} / {model}")
            return key, url, model
        except Exception as e:
            detail = ""
            if isinstance(e, urllib.error.HTTPError):
                try:
                    detail = json.loads(e.read())["error"]["message"][:90]
                except Exception:
                    detail = str(e.code)
            print(f"  {env}: unusable ({detail or type(e).__name__})")
    return None, None, None


def ask(key, url, model, prompt, retries=4):
    import urllib.request, urllib.error, time as _t
    body = json.dumps({
        "model": model, "max_tokens": 3000, "temperature": 0,
        "messages": [{"role": "user", "content": prompt}],
    }).encode()
    for attempt in range(retries):
        req = urllib.request.Request(
            url, data=body,
            headers={"Authorization": f"Bearer {key}",
                     "Content-Type": "application/json"})
        try:
            r = json.loads(urllib.request.urlopen(req, timeout=120).read())
            return r["choices"][0]["message"]["content"]
        except urllib.error.HTTPError as e:
            # 429 is the free tier doing its job, not a failure. Back off.
            if e.code in (429, 500, 502, 503) and attempt < retries - 1:
                _t.sleep(2 ** attempt * 5)
                continue
            raise
        except Exception:
            if attempt < retries - 1:
                _t.sleep(3)
                continue
            raise
    return ""


def llm_pass(courses, tags, conf, threshold=1.0, batch=20, limit=None):
    key, url, model = pick_provider()
    if not key:
        print("  no usable provider; keeping deterministic tags")
        return 0

    weak = sorted(c for c in courses if conf[c] < threshold)
    if limit:
        weak = weak[:limit]
    total = -(-len(weak) // batch)
    print(f"  {len(weak)} ambiguous courses -> model, {total} batches")

    vocab = "\n".join(f"{t} = {TOPICS[t][0]}" for t in IDS)
    valid = set(IDS)
    changed = failed = 0

    for i in range(0, len(weak), batch):
        chunk = weak[i:i + batch]
        items = "\n\n".join(
            "{code} | {title} | dept: {dept}\n{desc}".format(
                code=c, title=courses[c]["title"], dept=courses[c]["dept"],
                desc=(courses[c]["desc"] or "(no description)")[:600])
            for c in chunk)
        try:
            txt = ask(key, url, model, PROMPT.format(vocab=vocab, items=items))
            m = re.search(r"\{.*\}", txt or "", re.S)
            got = json.loads(m.group(0)) if m else {}
        except Exception as e:
            failed += 1
            print(f"  batch {i//batch + 1}/{total}: {type(e).__name__}", flush=True)
            continue

        n = 0
        for code, ids in got.items():
            if code not in tags or not isinstance(ids, list):
                continue
            keep = [t for t in ids if t in valid][:MAX_TAGS]
            if len(keep) >= (MIN_TAGS if tags[code] else 1):
                # Union with the deterministic top pick: the department prior
                # knows things the prose does not say (an ECE course is
                # engineering even when the description never uses the word).
                det = tags[code][:1]
                tags[code] = (keep + [t for t in det if t not in keep])[:MAX_TAGS]
                changed += 1
                n += 1
        print(f"  batch {i//batch + 1}/{total}: {n}/{len(chunk)}", flush=True)

    if failed:
        print(f"  {failed} batches failed (those keep deterministic tags)")
    return changed


def main():
    use_llm = "--llm" in sys.argv
    limit = None
    for a in sys.argv:
        if a.startswith("--limit="):
            limit = int(a.split("=", 1)[1])

    courses = load_courses()
    print(f"courses: {len(courses)}")
    tags, conf = deterministic(courses)

    dist = collections.Counter(len(v) for v in tags.values())
    print("tags/course:", dict(sorted(dist.items())))
    print("untagged   :", sum(1 for v in tags.values() if not v))
    print("low conf   :", sum(1 for v in conf.values() if v < 0.7))

    if use_llm:
        n = llm_pass(courses, tags, conf, limit=limit)
        print(f"model revised: {n}")

    json.dump(tags, open(p("tags.json"), "w"), separators=(",", ":"))

    per = collections.Counter()
    for v in tags.values():
        per.update(v)
    print("\ntopic sizes:")
    for t in IDS:
        print(f"  {t:14s} {per[t]:4d}  {TOPICS[t][0]}")
    empty = [t for t in IDS if per[t] == 0]
    if empty:
        print("EMPTY TOPICS:", empty)


if __name__ == "__main__":
    main()
