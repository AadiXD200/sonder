# Sonder — design handoff

You're designing the front end of a small, free, student-made web app.
This document gives you the situation and the constraints. It does not give you
a spec, a layout, or a component list — those are yours to invent.

---

## The idea

There's a thing every student knows and nobody does anything about: you have a
two-hour gap between classes, you're on a campus with a thousand rooms, and in
maybe four hundred of them right now a person who has spent their life studying
one subject is explaining it to whoever showed up. You could just walk in. Nobody
checks. Most people never do it once in four years.

Sonder shows you what's happening around you, right now, so you can go sit in on
something that isn't yours.

*Sonder (n.) — the realization that each passerby has a life as vivid as your own.*
That's the name and it's decided. It's the whole thesis in one word: the point
isn't scheduling, it's the vertigo of realizing how much is going on without you.

## Who it's for

University of Toronto, St. George campus. It launches with one post on r/UofT
and lives or dies on whether students send it to each other. It is free, made by
one undergrad, and has no business model. It should feel that way — made by a
student, for students, not by a committee with a brand deck.

The tone should be quirky, a little odd, human. Not startup-clean. Not
institutional. It can have an opinion and it can be funny. It should not be
cutesy or try too hard.

## What actually exists

Real, complete, already scraped and verified:

- **12,202 lecture meetings**, Fall 2026 + Winter 2027
- **3,215 courses** — each with its real calendar description (~450 words),
  prerequisites, breadth requirements, faculty, program
- **65 buildings** with coordinates and footprint polygons
- Every meeting knows its day, start, end, building, room, and seat count

Some figures that are true and might be useful:

- At 11am on a Tuesday, **468 lectures** are running in **54 buildings** at once
- The median class has **40 seats**; the largest has **1,500** (Convocation Hall —
  Intro Psych, Stars and Galaxies)
- Room numbers encode the floor: `SS 2118` is Sidney Smith, second floor
- Course descriptions are searchable, so "find me something about climate"
  is a real thing the app can do

## What already exists visually

A separate collaborator built the 3D campus map, and it's good — it reads as an
architectural line drawing rather than a map: white ground, UofT blue linework,
the real 2025 city massing geometry, buildings you can orbit and select. Restrained
and a bit beautiful. Screenshots are in `preview/artifacts/`.

**Look at them.** You don't have to match that look — but the map and whatever you
make have to end up in the same universe, and right now the map is the part that's
finished. Decide deliberately whether you're extending its language or deliberately
contrasting with it, and make that a choice rather than an accident.

## What you're designing

The part that isn't the map: how someone arrives, understands what this is in about
four seconds, and steers it toward something they'd actually walk to.

Steering means roughly: what am I into, what am I studying, how far will I walk,
when am I free. But *how* that's expressed is the open question and the reason
you're here — a form with four dropdowns is the obvious answer and the obvious
answer is what we're trying to avoid.

Two things worth knowing as you think about it:

- Most people will open this **on a phone, standing up, between classes**, with
  about thirty seconds of patience.
- The emotional hook isn't efficiency. It's *how much is going on right now that
  you had no idea about*. If the design makes 468 simultaneous lectures feel like
  a number in a table, it has missed. Whatever conveys that scale is the design.

## Constraints — these are real

- **Free forever.** Static hosting, no backend, no paid API, no keys, no auth.
  Everything ships as static files.
- **Mobile first**, genuinely. Phone is the primary device, not the fallback.
- **Fast on campus wifi.** The data is ~250KB gzipped and the map is ~2MB; whatever
  you add sits on top of that budget, so spend it deliberately.
- Don't design anything that needs a login, a database, or a server.
- Accessibility isn't optional — real contrast, real focus states, `prefers-reduced-motion`
  respected. Students use this in bright sun on a phone.

## What we're not asking you for

Don't design the 3D map — that exists. Don't write the data pipeline — that's done.
Don't solve search ranking — that's a separate problem being worked on.

## The actual brief

Give it a soul.

Make something that feels like it was made by a specific person who had a specific
feeling about their campus, rather than assembled from a template. Take a real
swing. If it's a bit strange, good — strange is more likely to get posted to Reddit
than tasteful is.

We'd rather see one confident opinionated direction than three safe ones.

---

*Data and schema: `SCHEMA.md`. Map preview: `preview/artifacts/*.png`.
Existing written voice, for reference only, not a constraint: `FRONTEND_BRIEF.md`.*
