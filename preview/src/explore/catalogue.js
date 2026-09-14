import fixtureBuildings from "./fixture-buildings.json";
import fixtureTopics from "./fixture-topics.json";
export const fixtureReference = {
  buildings: fixtureBuildings,
  topics: fixtureTopics,
  terms: { F: "Fall 2026", S: "Winter 2027" },
};

// Frontend reference-data seam. Never write backend-owned public JSON or data.js.
// Fetch the COMPLETE catalogue: day/time-prefiltered arrays cannot power building days,
// another weekday, or another term. All three files must be ready before switching.
export async function loadCatalogue(signal) {
  const base = new URL(`${import.meta.env.BASE_URL}data/`, document.baseURI);
  const response = await fetch(new URL("lectures.json", base), { signal });
  if (!response.ok || !response.headers.get("content-type")?.includes("json"))
    return null;
  const catalogue = await response.json();
  const responses = await Promise.all(
    ["buildings.json", "topics.json"].map((file) =>
      fetch(new URL(file, base), { signal }),
    ),
  );
  if (
    responses.some(
      (r) => !r.ok || !r.headers.get("content-type")?.includes("json"),
    )
  )
    return null;
  const [buildings, topics] = await Promise.all(responses.map((r) => r.json()));
  if (
    !Array.isArray(catalogue.meetings) ||
    !catalogue.meetings.length ||
    Array.isArray(buildings.buildings)
  )
    return null;
  if (
    !Object.values(buildings).every(
      (b) =>
        b &&
        typeof b.name === "string" &&
        Number.isFinite(b.lat) &&
        Number.isFinite(b.lng),
    )
  )
    return null;
  if (
    !Object.values(topics).every(
      (t) =>
        t &&
        typeof t.label === "string" &&
        Array.isArray(t.synonyms) &&
        Array.isArray(t.courses),
    )
  )
    return null;
  const ids = new Set();
  if (
    !catalogue.meetings.every((m) => {
      if (!m || typeof m.id !== "string" || ids.has(m.id)) return false;
      ids.add(m.id);
      return (
        [
          "code",
          "title",
          "building",
          "room",
          "section",
          "description",
          "descFull",
          "subject",
        ].every((key) => typeof m[key] === "string") &&
        Object.hasOwn(buildings, m.building) &&
        Array.isArray(m.topics) &&
        Number.isInteger(m.day) &&
        m.day >= 1 &&
        m.day <= 5 &&
        ["F", "S"].includes(m.term) &&
        Number.isInteger(m.start) &&
        Number.isInteger(m.end) &&
        m.start >= 0 &&
        m.end <= 1440 &&
        m.end > m.start &&
        (m.seats === null || (Number.isFinite(m.seats) && m.seats >= 0))
      );
    })
  )
    return null;
  return {
    meetings: catalogue.meetings,
    buildings,
    topics,
    terms: catalogue.terms || fixtureReference.terms,
    generated: catalogue.generated,
  };
}
