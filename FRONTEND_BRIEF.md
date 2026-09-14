# Frontend handoff brief

**To:** the frontend/3D agent
**From:** Aadi (UofT student, building this solo)
**Your half:** everything the user sees. The 3D campus, the interactions, the landing page.
**My half (separate agent, already in progress):** the data pipeline. You will be handed a
JSON file. You never have to talk to a university API.

---

## 0. Read this first

**Do not start modelling yet.** Build a preview, get approval, then build the real thing.
Details in §8. This is the one hard process rule in this document.

Everything else here is context and intent, not specification. Where this brief is vague,
that is deliberate — make the call yourself.

---

## 1. What the thing is

At UofT you get gaps between classes. An hour, ninety minutes, nothing to do, and you're
standing somewhere on St. George campus. There are, at that exact moment, hundreds of lectures
happening in the buildings around you. Some of them are 1,500-person first-year lectures in
Convocation Hall where nobody on earth would notice one more person walking in and sitting down.

This app tells you which ones, and how long you have to get there.

That's it. You open it bored, standing outside Robarts, with 50 minutes. It shows you what's
around you that you could walk into right now.

**It is not a search tool.** Nobody opens it knowing what they want. Design for the bored
wanderer, not the person looking up a room number. If the first thing a user sees is a search
box, the design has failed.

The official UofT app finds *empty* rooms, for studying. This finds *full* ones, for wandering
into. That inversion is the whole pitch and it's what makes it funny.

---

## 2. The vision — a campus you fly into

This is the part I care about and the part I'm handing you creative freedom on, because your
3D is better than mine.

What I picture: **a holographic model of St. George campus.** Not a map with pins on it — an
object. Something that feels like a table-top hologram you're leaning over, or a scanner
readout. Campus rendered as light rather than as cartography.

And then **depth by pressing in.** You start above the whole campus. You press a building and
you don't get a popup — you *go into it.* The camera moves. The building opens up, and you're
looking at floors. Press a floor, you're looking at rooms. Press a room and you're there: this
is MAT246, it's in SS 2135, it started 12 minutes ago, there are 188 seats, go.

Campus → building → floor → room. One continuous movement inward. That's the feeling I want.
Like you're zooming into the campus until you're standing in the lecture.

I don't know exactly how far that's realistic to take and I'm not asking you to commit to all
four levels. **You decide how deep is actually good.** If campus → building → room-list is
sharper and floors are a gimmick, do that instead and tell me why. I'd rather have two levels
that feel incredible than four that feel like a tech demo.

### Things I think are true about the look

Take or leave these — they're instincts, not requirements.

- **Dark.** Campus at night, buildings lit from inside. The glow is the identity. A light mode
  can exist but it isn't the personality.
- **Buildings as the UI, not the backdrop.** The data should be *in* the geometry — a building
  that's busy right now should look busy. Height, brightness, density, colour, something. I want
  to be able to glance at the model and read the campus without reading any text.
- **Campus should breathe through the day.** At 10am it's a skyline. At 7pm it's dark and flat.
  If someone can drag time forward and watch the campus light up and die down, that's the thing
  people screenshot and post. Marketing and function are the same feature here.
- **Restraint in motion.** Things ease, they don't bounce everywhere. One or two moments of real
  delight beat constant animation. Respect `prefers-reduced-motion`.
- **Not another blue-and-white student utility.** It should look like someone made it, on purpose,
  at 2am, because they thought it'd be funny. Which is what happened.

### The one opinion the app has

Every lecture has a seat count. That number is the app's actual editorial voice, because it
answers the real question: **will I be noticed?**

- ~1,500 seats (Con Hall) → you are invisible, walk in
- ~200 seats → fine, sit at the back
- ~30-seat seminar → absolutely not, they will know

Find a way to express that visually. It's genuinely information that exists nowhere else, and
it's the difference between a timetable viewer and this. I called it an "anonymity score" but
name it whatever's funnier.

### Quirk

I'm launching this on r/UofT. It should sound like a student made it, because one did. Student-
to-student, not product-to-user. Room to be funny in the copy, the empty states, the loading
text, the 404. Memorable beats polished. If it's a choice between "nice" and "someone screenshots
this and posts it," take the screenshot every time.

One feature I already know I want: **a shuffle button.** One press, it picks a random lecture
starting in the next 20 minutes that you could physically walk to, and takes you there. No
filtering, no choosing. That's literally what I do in real life, and it's the five-second demo
that sells the whole app.

---

## 3. What you're getting from me

**It's done. The data is real and it's in the repo: `data/lectures.json`.**
Full schema and coverage notes in **`SCHEMA.md`** — read that before you model anything.

A static JSON file is the entire backend. No API, no database, no auth, no loading states beyond
the first fetch. 1.6 MB raw, **255 KB gzipped**, served from the CDN.

```ts
type Meeting = {
  c:    string;  // "MAT246H1"   course code
  t:    string;  // "Concepts in Abstract Mathematics"
  s:    string;  // "LEC5101"    section
  b:    string;  // "SS"         key into the buildings map
  r:    string;  // "2135"       NOT always numeric — see below
  d:    number;  // 1 = Monday … 5 = Friday
  st:   number;  // start, minutes from midnight (1080 = 18:00)
  en:   number;  // end
  cap:  number;  // 188 — drives the anonymity thing
  term: "F" | "S";
}
```

Keys are short because the file ships to every visitor. Alongside it, a `buildings` map keyed by
code with **real footprint polygons and lat/lng**, so you have true geometry to extrude rather
than boxes on a basemap.

**12,202 meetings · 65 buildings · 63 with polygons · 95.7% room coverage.**

### Five facts about the data that will affect your design

1. **Rooms are per-meeting, not per-section.** MAT246 LEC5101 meets Monday in SS 2135 and
   Wednesday in SS 2118. Same section, different rooms. Never cache "this class is in this
   room" — always resolve by day and time.
2. **Room numbers are not always numbers.** Real values include `2135`, `B024`, `CART`, `222E`,
   `2BO5E`, and `---` (Convocation Hall, which has exactly one room). Don't parse them, and
   **don't derive a floor from the first digit** — ~1.5% would break. If you want real floors
   I'll have to source them separately; tell me if your design needs them.
3. **Two terms live in the same file.** Filter on `term` or you'll show Winter lectures in the
   Fall. They're near-identical in size (6,144 F / 6,058 S).
4. **A small tail has no room at all** — 292 online, 265 genuinely TBA, 151 in four buildings
   nobody publishes coordinates for. Omitted from the file rather than faked. If you ever surface
   a course-not-found state, that's why.
5. **Everything is client-side.** The whole dataset loads once and lives in memory, so filtering
   by time, distance, and size is instant. No spinners on interaction. That responsiveness is
   most of what will make it feel expensive — don't give it away by adding round trips.

### The number that matters

Wednesday 14:00: **272 lectures in progress simultaneously.** The biggest is Human Physiology I
in Convocation Hall, capacity 1,400. There is always something to wander into — the design
problem is choosing between 272 options, not finding one.

### Hard constraints

- **Free forever.** Free hosting, no paid APIs, no map tokens, nothing with a credit card behind
  it. This gets posted publicly and I'm a student.
- **Works on a phone.** People will open this while walking. That's the primary device, and it
  constrains how heavy the 3D can be. A beautiful thing that melts an iPhone is a failure.
- **Borrow aggressively.** Don't build from scratch what you can take from an MIT-licensed
  project. That's a standing instruction across this whole project.

---

## 4. Where I'll push back

Being straight with you about my worries so you can address them or talk me out of them:

- **3D that's slower to use than a list.** The hologram has to be genuinely faster at answering
  "where do I go" than a boring table would be. If drilling in takes four taps and a table takes
  zero, the 3D is decoration. There probably needs to be a fast path alongside the beautiful path.
- **Mobile performance.** See above. Real device, not a desktop Chrome tab.
- **The five-second test.** Someone lands from a Reddit link, gives it five seconds. If they don't
  immediately get it, they leave. The landing page and the app may need to be the same surface.
- **Geolocation gets denied.** A lot. Never a dead end — put the user in the middle of campus and
  carry on.

---

## 5. The landing page

Matters as much as the app, because Reddit is the entire launch.

It should probably show the thing working rather than describe it — a live campus, real lectures,
real countdowns. "Here are 47 lectures happening at UofT right now" is a better headline than any
sentence I could write about the product.

Your call on whether it's a separate page or the app just *is* the landing page with the map
running behind the copy. I lean toward the second but I'm not attached.

---

## 6. Explicitly your call

Framework, 3D library, rendering approach, art direction, typography, colour, how deep the
drill-down goes, how time is controlled, information architecture, how the anonymity thing is
visualised, naming of features, copy and jokes, whether the landing page is separate.

The only fixed points: free, fast on a phone, dark-and-glowing, campus-you-fly-into, funny.

**The project is called Sonder.** *(n. the realization that each passerby has a life as vivid
as your own.)* That's decided — it's the whole thesis of the app in one word. Don't pitch
alternatives, build around it.

---

## 7. What I do not want

- A generic map with pins
- A search-first interface
- Corporate SaaS voice
- 3D for its own sake, where the flat version would genuinely be better
- Anything that costs money to run
- Anything that needs a login

---

## 8. Process — preview before you build

**This is the one thing I'm being strict about.**

Before you do real modelling or write the bulk of the code, show me a preview so I can approve
the direction. Doesn't need to be functional. Doesn't need real data — hardcode a handful of
buildings. I want to see and feel where you're taking it.

What would make a preview useful to me:

- what the campus actually looks like — the hologram, the lighting, the mood
- the drill-in, even faked: pressing a building and going inward
- roughly how the "is this crashable" read works visually
- a name and a bit of the voice

Something I can open and click is worth more than stills, but if a static concept communicates
it better, do that instead.

**Then stop and wait for me.** I'll approve it, redirect it, or ask for a different direction
entirely. Once we agree, build the real thing.

If you hit something where my intent is genuinely unclear and guessing wrong would waste real
work — ask. Otherwise make the call and show me in the preview.

---

## 9. Division of labour

| | |
|---|---|
| **You** | 3D campus, all interaction, landing page, copy, art direction, naming |
| **Me (backend agent)** | scraping UofT's timetable API, room resolution, building geometry, the daily cron, producing the JSON |
| **Aadi** | approving the preview, launching it on r/UofT |

I'll hand you a real dataset and a locked schema shortly. Nothing in §8 is blocked on that —
hardcode a few buildings and start.

Go make it good. The data works, the idea works, this part is the one that decides whether
anyone cares.
