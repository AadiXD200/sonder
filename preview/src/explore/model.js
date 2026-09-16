// Pure frontend rules. No requests, browser storage, or recommendation API.
import { placeMatcher } from './place-search.js';
import { programById, resolveProgram } from './program-search.js';
export const SONDERATE_WINDOW_MINUTES = 60;
export const COURSE_LEVELS = [100, 200, 300, 400];
export function courseLevel(code) {
  const number = Number(String(code ?? '').match(/^[A-Z]+(\d+)/i)?.[1]);
  return Number.isFinite(number) && number >= 100 ? Math.min(400, Math.floor(number / 100) * 100) : null;
}
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
  timeMode: "soon",
  finishBy: false,
  walk: 15,
  minSeats: 0,
  day: 2,
  term: "F",
});
export function torontoClock(date = new Date()) {
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
  return { weekday: [...DAYS, 'Saturday', 'Sunday'].indexOf(parts.weekday),
    minute: Number(parts.hour) * 60 + Number(parts.minute),
    term: Number(parts.month) <= 4 ? 'S' : 'F' };
}
export function catalogueDefaults(date = new Date(), meetings = null) {
  const clock = torontoClock(date), weekday = clock.weekday < 5 ? clock.weekday : -1, now = clock.minute;
  if (meetings?.length) {
    const scheduled = meetings.filter(m => m.term === clock.term);
    const upcoming = scheduled.some(m => m.day === weekday + 1 && (m.start >= now || (m.start > now - 20 && m.end > now)));
    if (weekday >= 0 && upcoming) {
      const start = Math.max(480, Math.min(1430, Math.ceil(now / 10) * 10));
      return { ...DEFAULTS, day: weekday + 1, term: clock.term, gapStart: start, gapEnd: Math.min(1440, start + 120) };
    }
    for (let offset = 1; offset <= 7; offset++) {
      const day = (clock.weekday + offset) % 7 + 1;
      if (day > 5) continue;
      const starts = scheduled.filter(m => m.day === day).map(m => m.start);
      if (!starts.length) continue;
      const start = Math.max(0, Math.min(...starts) - 10);
      return { ...DEFAULTS, day, term: clock.term, gapStart: start, gapEnd: Math.min(1440, start + 120) };
    }
  }
  const nextDay = weekday < 0 || now >= 1320;
  const day =
    weekday < 0 ? 1 : now >= 1320 ? ((weekday + 1) % 5) + 1 : weekday + 1;
  const gapStart = nextDay ? 530 : Math.max(480, Math.ceil(now / 10) * 10);
  return {
    ...DEFAULTS,
    day,
    term: clock.term,
    gapStart,
    gapEnd: Math.min(1440, gapStart + 120),
  };
}
export const initialState = () => ({
  ...DEFAULTS,
  query: "",
  interests: [],
  levels: [],
  program: null,
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
export function timeWindow(state) {
  if (state.timeMode === "day") return { start: 0, end: 1440 };
  return {
    start: state.gapStart,
    end: state.timeMode === "soon"
      ? Math.min(1440, state.gapStart + 120)
      : state.gapEnd,
  };
}
export function findMeetings(meetings, state, buildings, searchIndex, options = {}) {
  const query = normalize(state.query),
    topic = searchIndex.get(query),
    programQuery = resolveProgram(query),
    program = programById.get(state.program),
    exactBuilding = Object.keys(buildings).some(code => normalize(code) === query),
    matchesPlace = placeMatcher(query, buildings),
    interests = (state.interests || []).map(id => searchIndex.get(id)).filter(Boolean),
    window = timeWindow(state);
  const matches = [];
  for (const meeting of meetings) {
    if (meeting.day !== state.day || meeting.term !== state.term) continue;
    if (state.levels?.length && !state.levels.includes(courseLevel(meeting.code))) continue;
    if (program && !program.courseSet.has(meeting.code)) continue;
    if (state.subject !== "Everything" && meeting.subject !== state.subject)
      continue;
    if (interests.length && !interests.some(interest => interest.courses.has(meeting.code))) continue;
    if (state.building && !state.building.codes.includes(meeting.building))
      continue;
    if (
      state.minSeats &&
      (meeting.seats == null || meeting.seats < state.minSeats)
    )
      continue;
    const walk = walkMinutes(state.pin, buildings[meeting.building]);
    const liveSoon = state.timeMode === 'soon' && Number.isFinite(options.now);
    const justStarted = liveSoon && meeting.start <= options.now && meeting.start > options.now - 20 && meeting.end > options.now;
    if (
      (meeting.start < window.start && !justStarted) ||
      (liveSoon && meeting.start <= options.now && !justStarted) ||
      meeting.start >= window.end ||
      (state.timeMode === "custom" && state.finishBy && meeting.end > window.end) ||
      (walk !== null && walk > state.walk)
    )
      continue;
    const exact = !!query && exactCode(meeting.code, query);
    if (
      query &&
      !exact &&
      !(exactBuilding ? matchesPlace(meeting) : programQuery ? programQuery.courseSet.has(meeting.code) : topic
        ? topic.courses.has(meeting.code)
        : matchesPlace(meeting) || codeKey(meeting.code).includes(codeKey(query)) ||
          normalize(meeting.title).includes(query))
    )
      continue;
    const strength = topic && meeting.topics?.[0] === topic.id ? 1 : 0;
    const reachable = walk !== null && meeting.start >= state.gapStart + walk;
    matches.push({ meeting, exact, strength, reachable, justStarted });
  }
  matches.sort(
    (a, b) =>
      Number(b.exact) - Number(a.exact) ||
      Number(b.justStarted) - Number(a.justStarted) ||
      (a.justStarted && b.justStarted ? b.meeting.start - a.meeting.start : 0) ||
      b.strength - a.strength ||
      (state.timeMode === "day" ? 0 : Number(b.reachable) - Number(a.reachable)) ||
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
  if (state.interests?.length) p.set("interests", state.interests.join(','));
  const levels = [...new Set(state.levels || [])].filter(level => COURSE_LEVELS.includes(level)).sort((a, b) => a - b);
  if (levels.length) p.set('levels', levels.join(','));
  if (state.program) p.set('program', state.program);
  if (state.building) p.set("b", state.building.codes.join(","));
  if (state.selected) p.set("class", state.selected);
  if (state.view === "map") p.set("view", "map");
  if (validPin(state.pin))
    p.set("pin", `${state.pin.lat.toFixed(6)},${state.pin.lng.toFixed(6)}`);
  return "#" + p;
}
export function decodeState(hash, buildings = {}, meetings = [], topics = null) {
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
  if (["soon", "day", "custom"].includes(p.get("timeMode"))) {
    state.timeMode = p.get("timeMode");
    state.finishBy = p.get("finishBy") === "true";
  } else if (
    !p.has("timeMode") &&
    /^\d+$/.test(p.get("gapStart")) &&
    /^\d+$/.test(p.get("gapEnd")) &&
    Number(p.get("gapStart")) <= 1430 &&
    Number(p.get("gapEnd")) <= 1440 &&
    Number(p.get("gapEnd")) - Number(p.get("gapStart")) >= 10
  ) {
    // Preserve explicit time constraints in links created before time modes.
    state.timeMode = "custom";
    state.finishBy = true;
  }
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
  state.program = programById.has(p.get('program')) ? p.get('program') : null;
  state.levels = [...new Set((p.get('levels') || '').split(',').filter(value => /^(100|200|300|400)$/.test(value)).map(Number))].sort((a, b) => a - b);
  state.interests = [...new Set((p.get('interests') || '').split(','))]
    .filter(id => /^[a-z][a-z0-9-]{0,49}$/.test(id) && (!topics || Object.hasOwn(topics, id)))
    .slice(0, 40);
  if (state.interests.length) state.subject = 'Everything';
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
  return findMeetings(meetings, state, buildings, searchIndex).filter((meeting) => {
    const walk = walkMinutes(state.pin, buildings[meeting.building]);
    return (
      walk !== null &&
      meeting.start >= state.gapStart + walk &&
      meeting.start <= state.gapStart + SONDERATE_WINDOW_MINUTES
    );
  });
}
