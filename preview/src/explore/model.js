// Pure frontend rules. No requests, browser storage, or recommendation API.
export const SONDERATE_WINDOW_MINUTES = 60;
export const CAMPUS_CENTRE = Object.freeze({ lat: 43.6623, lng: -79.3968 });
export const SUBJECTS = [
  "Everything",
  "Science",
  "Arts & ideas",
  "Society",
  "Technology",
];
export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
export const DEFAULTS = Object.freeze({
  subject: "Everything",
  gapStart: 650,
  gapEnd: 770,
  walk: 15,
  minSeats: 0,
  day: 2,
  term: "F",
});
export function catalogueDefaults(date = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Toronto",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      month: "numeric",
      hourCycle: "h23",
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  const weekday = DAYS.indexOf(parts.weekday),
    now = Number(parts.hour) * 60 + Number(parts.minute);
  const nextDay = weekday < 0 || now >= 1320;
  const day =
    weekday < 0 ? 1 : now >= 1320 ? ((weekday + 1) % 5) + 1 : weekday + 1;
  const gapStart = nextDay ? 530 : Math.max(480, Math.ceil(now / 10) * 10);
  return {
    ...DEFAULTS,
    day,
    term: Number(parts.month) <= 4 ? "S" : "F",
    gapStart,
    gapEnd: Math.min(1440, gapStart + 120),
  };
}
export const initialState = () => ({
  ...DEFAULTS,
  query: "",
  building: null,
  selected: null,
  view: "list",
  pin: { ...CAMPUS_CENTRE },
});
export const normalize = (value) =>
  String(value ?? "")
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
export function validPin(pin) {
  return (
    !!pin &&
    Number.isFinite(pin.lat) &&
    Number.isFinite(pin.lng) &&
    pin.lat >= 43.64 &&
    pin.lat <= 43.69 &&
    pin.lng >= -79.43 &&
    pin.lng <= -79.37
  );
}
export function walkMinutes(pin, building) {
  if (
    !pin ||
    !building ||
    ![pin.lat, pin.lng, building.lat, building.lng].every(Number.isFinite)
  )
    return null;
  const rad = Math.PI / 180,
    dLat = (building.lat - pin.lat) * rad,
    dLng = (building.lng - pin.lng) * rad;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(pin.lat * rad) *
      Math.cos(building.lat * rad) *
      Math.sin(dLng / 2) ** 2;
  return Math.ceil(
    (6371000 *
      2 *
      Math.atan2(Math.sqrt(a), Math.sqrt(Math.max(0, 1 - a))) *
      1.3) /
      1.4 /
      60,
  );
}
export function createSearchIndex(topics) {
  const synonyms = new Map();
  for (const [id, topic] of Object.entries(topics)) {
    const resolved = {
      id,
      label: topic.label,
      courses: new Set(topic.courses),
    };
    for (const word of [id, topic.label, ...topic.synonyms])
      synonyms.set(normalize(word), resolved);
  }
  return synonyms;
}
const codeKey = (code) => normalize(code).replace(/\s/g, "");
export const exactCode = (code, query) =>
  codeKey(code) === codeKey(query) ||
  codeKey(code).replace(/[hy]1$/, "") === codeKey(query);
export function findMeetings(
  meetings,
  state,
  buildings,
  searchIndex,
  { dayView = !!state.building } = {},
) {
  const query = normalize(state.query),
    topic = searchIndex.get(query);
  const matches = [];
  for (const meeting of meetings) {
    if (meeting.day !== state.day || meeting.term !== state.term) continue;
    if (state.subject !== "Everything" && meeting.subject !== state.subject)
      continue;
    if (state.building && !state.building.codes.includes(meeting.building))
      continue;
    if (
      state.minSeats &&
      (meeting.seats == null || meeting.seats < state.minSeats)
    )
      continue;
    const walk = walkMinutes(state.pin, buildings[meeting.building]);
    if (
      !dayView &&
      (meeting.start < state.gapStart ||
        meeting.end > state.gapEnd ||
        (walk !== null && walk > state.walk))
    )
      continue;
    const exact = !!query && exactCode(meeting.code, query);
    if (
      query &&
      !exact &&
      !(topic
        ? topic.courses.has(meeting.code)
        : codeKey(meeting.code).includes(codeKey(query)) ||
          normalize(meeting.title).includes(query))
    )
      continue;
    const strength = topic && meeting.topics?.[0] === topic.id ? 1 : 0;
    const reachable = walk !== null && meeting.start >= state.gapStart + walk;
    matches.push({ meeting, exact, strength, reachable });
  }
  matches.sort(
    (a, b) =>
      Number(b.exact) - Number(a.exact) ||
      b.strength - a.strength ||
      (dayView ? 0 : Number(b.reachable) - Number(a.reachable)) ||
      a.meeting.start - b.meeting.start ||
      (b.meeting.seats ?? -1) - (a.meeting.seats ?? -1) ||
      a.meeting.id.localeCompare(b.meeting.id),
  );
  return matches.map(({ meeting }) => meeting);
}
export function cardDescription(value) {
  // Preserve abbreviations/decimal numbers by requiring sentence punctuation + whitespace.
  const text = String(value ?? "").trim();
  return text.match(/^.*?[.!?](?:\s+|$).*?[.!?](?=\s|$)/s)?.[0]?.trim() || text;
}
export function encodeState(state) {
  const p = new URLSearchParams({ v: "1" });
  for (const key of Object.keys(DEFAULTS)) p.set(key, String(state[key]));
  if (state.query) p.set("q", state.query.slice(0, 200));
  if (state.building) p.set("b", state.building.codes.join(","));
  if (state.selected) p.set("class", state.selected);
  if (state.view === "map") p.set("view", "map");
  if (validPin(state.pin))
    p.set("pin", `${state.pin.lat.toFixed(6)},${state.pin.lng.toFixed(6)}`);
  return "#" + p;
}
export function decodeState(hash, buildings = {}, meetings = []) {
  const state = initialState();
  if (hash.length > 4096) return state;
  const p = new URLSearchParams(hash.replace(/^#/, ""));
  if (p.get("v") !== "1") return state;
  const number = (key, min, max) => {
    if (!p.has(key) || !/^\d+$/.test(p.get(key))) return;
    const value = Number(p.get(key));
    if (Number.isInteger(value) && value >= min && value <= max)
      state[key] = value;
  };
  number("gapStart", 0, 1430);
  number("gapEnd", 10, 1440);
  number("day", 1, 5);
  if (state.gapEnd - state.gapStart < 10) {
    state.gapStart = DEFAULTS.gapStart;
    state.gapEnd = DEFAULTS.gapEnd;
  }
  if (["5", "10", "15", "30"].includes(p.get("walk")))
    state.walk = Number(p.get("walk"));
  if (p.get("minSeats") === "100") state.minSeats = 100;
  if (SUBJECTS.includes(p.get("subject"))) state.subject = p.get("subject");
  if (["F", "S"].includes(p.get("term"))) state.term = p.get("term");
  state.query = (p.get("q") || "").slice(0, 200);
  const codes = [
    ...new Set(
      (p.get("b") || "")
        .split(",")
        .filter((code) => Object.hasOwn(buildings, code)),
    ),
  ];
  if (codes.length)
    state.building = {
      codes,
      name: codes.map((code) => buildings[code].name).join(" / "),
    };
  if (p.get("view") === "map") state.view = "map";
  const pin = (p.get("pin") || "").split(",");
  if (pin.length === 2 && pin.every((v) => /^-?\d+(\.\d+)?$/.test(v))) {
    const candidate = { lat: Number(pin[0]), lng: Number(pin[1]) };
    if (validPin(candidate)) state.pin = candidate;
  }
  if (meetings.some((m) => m.id === p.get("class")))
    state.selected = p.get("class");
  return state;
}

export function sonderateCandidates(meetings, state, buildings, searchIndex) {
  return findMeetings(meetings, state, buildings, searchIndex, {
    dayView: false,
  }).filter((meeting) => {
    const walk = walkMinutes(state.pin, buildings[meeting.building]);
    return (
      walk !== null &&
      meeting.start >= state.gapStart + walk &&
      meeting.start <= state.gapStart + SONDERATE_WINDOW_MINUTES
    );
  });
}
