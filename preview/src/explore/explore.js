import { createMobileMapSheet } from './mobile-map-sheet.js';
import "@fontsource/archivo-black/latin-400.css";
import "@fontsource/dm-mono/latin-400.css";
import "@fontsource/dm-mono/latin-500.css";
import "@fontsource/caveat/latin-600.css";
import { lectures, laterLectures } from "./samples.js";
import {
  DEFAULTS,
  COURSE_LEVELS,
  timeWindow,
  SONDERATE_WINDOW_MINUTES,
  sonderateCandidates,
  catalogueDefaults,
  torontoClock,
  CAMPUS_CENTRE,
  SUBJECTS,
  DAYS,
  validPin,
  walkMinutes,
  createSearchIndex,
  findMeetings,
  cardDescription,
  encodeState,
  decodeState,
} from "./model.js";
import { fixtureReference, loadCatalogue } from "./catalogue.js";
import { icon } from "./icons.js";
import { venueName } from "./venue-names.js";
import { searchBuildings } from "./place-search.js";
import { searchTopics } from "./topic-search.js";
import { similarClasses } from "./similar-classes.js";
import { searchPrograms, programById } from "./program-search.js";
import "./explore.css";

const $ = (id) => document.getElementById(id);
const filterIcon =
  '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 7h18M3 17h18"/><path d="M8 4v6m8 4v6" stroke-width="3"/></svg>';
const defaults = { ...DEFAULTS };
let buildings = fixtureReference.buildings,
  topicDictionary = fixtureReference.topics,
  terms = fixtureReference.terms;
let all = [...lectures, ...laterLectures],
  searchIndex = createSearchIndex(topicDictionary);
const incomingHash = location.hash;
const state = decodeState(incomingHash, buildings, all, topicDictionary);
let followClock = !incomingHash.startsWith('#v=1');
let clockTimer;
const topics = SUBJECTS;
const mobile = matchMedia("(max-width:760px)");
// New arrivals start on the campus. Explicit shared/list views keep their choice.
if (!incomingHash.startsWith('#v=1')) state.view = 'map';
const lifecycle = new AbortController();
let map,
  mapSelection = null,
  mapSheet,
  mapPreviewId = null,
  mapLoadPromise,
  draft,
  disposed = false,
  selectingFromList = false,
  lastDetailTrigger = null;
let visibleLimit = 40,
  liveData = false,
  loadingCatalogue = false,
  userChanged = false,
  suggestionsOpen = false,
  sonderateRound = 0,
  missionIndex = 0,
  locationRequest = 0;
let invitationId = invitationFromHash(incomingHash),
  invitationUrl = "";
const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const clock = (minutes) =>
  `${Math.floor(minutes / 60) % 12 || 12}:${String(minutes % 60).padStart(2, "0")}`;
const fullTime = (minutes) =>
  `${clock(minutes)} ${minutes < 720 || minutes === 1440 ? "AM" : "PM"}`;
const timeInput = (minutes) =>
  `${String(Math.floor((minutes % 1440) / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
const activeCount = (filters) =>
  ["subject", "walk", "minSeats", "day", "term"].filter(
    (key) => filters[key] !== defaults[key],
  ).length + (filters.timeMode === "custom" ? 1 : 0) + (filters.interests?.length || 0) + (filters.levels?.length ? 1 : 0);
const available = (filters = {}, options = {}) => {
  const effective = { ...state, ...filters }, clock = torontoClock();
  const now = liveData && followClock && effective.day === clock.weekday + 1 && effective.term === clock.term ? clock.minute : undefined;
  return findMeetings(all, effective, buildings, searchIndex, { now, ...options });
};
const walk = (meeting) => walkMinutes(state.pin, buildings[meeting.building]);
const walkText = (meeting) =>
  walk(meeting) === null ? "Walk unavailable" : `~${walk(meeting)} min`;
const buildingName = (code) => buildings[code]?.name || code;
const compactBuildingName = (code) => venueName(code, buildings);
const roomName = (meeting) =>
  meeting.room ? `${meeting.building} ${meeting.room}` : meeting.building;
const subjectIcon = (subject) =>
  ({
    Science: "orbit",
    "Arts & ideas": "asterisk",
    Society: "world",
    Technology: "code",
  })[subject] || "asterisk";
const pinLabel = () =>
  Math.hypot(
    state.pin.lat - CAMPUS_CENTRE.lat,
    state.pin.lng - CAMPUS_CENTRE.lng,
  ) < 0.000001
    ? "campus centre"
    : "your pin";
function syncURL() {
  let hash = encodeState(state);
  if (invitationId) {
    const params = new URLSearchParams(hash.slice(1));
    params.set("invite", "1");
    params.set("class", invitationId);
    hash = "#" + params;
  }
  if (location.hash !== hash)
    history.replaceState(null, "", location.pathname + location.search + hash);
}
function invitationFromHash(hash) {
  const params = new URLSearchParams(hash.replace(/^#/, ""));
  return params.get("invite") === "1" ? params.get("class")?.slice(0, 300) || null : null;
}
$("sonder").innerHTML = `
<div class="app-shell">
<header class="masthead"><div class="brand-lockup"><a class="logo" href="../" aria-label="Sonder — home">SON<b>DER</b></a></div><h1 class="sr-only">Find classes on campus</h1><div class="main-actions"><button id="sonderate" class="sonderate" title="Pick a random class starting soon">${icon("shuffle")} Sonderate ${icon("arrow")}</button><button id="open-filters" class="utility-button" aria-label="Filters" aria-haspopup="dialog">${filterIcon} <span class="filter-label">Filters</span> <span id="filter-count" hidden></span></button><button id="toggle-search" class="utility-button search-toggle" aria-expanded="false" aria-controls="search-panel" aria-label="Find a class" title="Search courses, programs, topics, buildings and rooms · /">${icon("search")}<span>Find a class</span></button></div></header>
<main class="workspace">
  <section class="workspace-top" aria-label="Explore controls"><div class="time-browse" role="group" aria-label="Class times"><button id="time-soon" type="button" aria-pressed="true">Starting soon</button><button id="time-day" type="button" aria-pressed="false">All day</button><button id="time-custom" type="button" aria-pressed="false" hidden>Custom time</button></div>
      <button id="time-summary" class="time-summary" aria-label="Edit time and filters"></button><p class="workspace-note">A different room. A different rabbit hole.</p></section>
  <div id="search-panel" class="search-panel" hidden><label for="search" class="sr-only">Search courses, programs, topics, buildings and rooms</label><div class="search-field">${icon("search")}<input id="search" type="search" placeholder="Course, program, topic, building or room…" autocomplete="off" enterkeyhint="search" maxlength="200"><button id="close-search" aria-label="Close and clear search">${icon("close")}</button></div><button id="search-topics" type="button" aria-haspopup="dialog">${icon("asterisk")} Topics <span id="search-topic-count" hidden></span></button><div id="search-suggestions" class="search-suggestions" aria-label="Search suggestions" hidden></div></div>
  <div class="panes">
    <div id="mobile-map-toolbar" class="mobile-map-toolbar" hidden></div>
    <section class="class-pane" aria-label="Nearby classes"><div class="map-sheet-heading"><button id="map-sheet-toggle" type="button" aria-controls="lecture-list" aria-expanded="true"><span class="map-sheet-grip" aria-hidden="true"></span><span class="map-sheet-copy"><strong id="map-sheet-name">Campus classes</strong><small id="map-sheet-meta"></small></span><span class="map-sheet-action">Expand ↑</span></button><button id="map-sheet-clear" type="button" class="icon-button" aria-label="Clear building selection" hidden>${icon("close")}</button></div>
      <div class="pane-heading"><h2 id="results-title" tabindex="-1">STARTING SOON</h2><div class="list-heading-actions"><span id="result-count">08 CLASSES</span><button id="toggle-map" aria-expanded="false" aria-controls="map-pane">${icon("map")} <span>Show map</span></button></div></div>

      <div class="column-headings" aria-hidden="true"><span>CLASS</span><span>WHEN</span><span>WHERE</span><span>WALK</span></div>
      <div id="active-summary" class="active-summary" hidden><span></span><button id="clear-all" aria-label="Clear search and filters">${icon("close")}</button></div>
      <div id="interest-summary" class="interest-summary" aria-label="Selected interests" hidden></div>
      <div id="lecture-list" class="lecture-list"></div>
    </section>
    <section id="map-pane" class="map-pane" aria-label="Campus map">
      <div class="pane-heading map-heading"><h2>THE CAMPUS</h2><span id="mobile-map-hint" class="mobile-map-hint">Tap a building to explore</span></div>
      <div class="map-frame"><div id="explore-map" class="embedded-map"></div><p class="map-discovery-note">pick a building, peek inside.</p></div>
      <aside id="map-building-preview" class="map-building-preview" aria-label="Selected building" hidden><button id="map-building-classes" class="map-building-classes"><span class="map-building-copy"><span id="map-building-day" class="eyebrow"></span><strong id="map-building-name"></strong><span id="map-building-count"></span></span>${icon("arrow")}</button><button id="dismiss-map-building" class="icon-button" aria-label="Dismiss building preview">${icon("close")}</button></aside>
    </section>
  </div>
</main>
</div>
<nav class="mobile-switch" aria-label="Explore actions"></nav>
<dialog id="filters-dialog" class="sheet filters-sheet" aria-labelledby="filters-title"><form id="filter-form"><header class="sheet-heading"><div><h2 id="filters-title">Filters</h2><p class="filter-intro">For your class list &amp; your next Sonderate.</p></div><button type="button" id="close-filters" class="icon-button" aria-label="Close filters">${icon("close")}</button></header><div class="sheet-body">
 <details id="filter-when" class="filter-section"><summary>${icon("clock")}<span class="filter-section-label"><strong>When</strong><span id="filter-when-value" class="filter-section-value"></span></span>${icon("chevron")}</summary><fieldset class="gap-field" aria-label="When"><div class="filter-grid"><label>Day<select id="day">${DAYS.map((day, i) => `<option value="${i + 1}">${day}</option>`).join("")}</select></label><label>Term<select id="term"><option value="F">Fall 2026</option><option value="S">Winter 2027</option></select></label></div><label class="time-field">Show classes<select id="time-mode"><option value="soon">Starting soon · next 2 hours</option><option value="day">All day</option><option value="custom">Choose a time</option></select></label><div id="custom-time-fields" hidden><div class="gap-values"><label>Starting from<input id="gap-from" type="time" step="600" required></label><span aria-hidden="true">—</span><label><span id="time-end-label">Starting before</span><input id="gap-until" type="time" step="600" required></label></div><div class="gap-slider"><div class="gap-track"><span id="gap-fill"></span></div><input id="gap-start" type="range" min="0" max="1430" step="10" aria-label="Gap start"><input id="gap-end" type="range" min="10" max="1440" step="10" aria-label="Gap end"></div><label class="room-filter"><span><strong>I’m free until this time</strong><small>The class must finish before your deadline.</small></span><input id="finish-by" type="checkbox"></label></div><p id="gap-note" class="filter-note"></p></fieldset></details>
 <details id="filter-interests" class="filter-section"><summary>${icon("asterisk")}<span class="filter-section-label"><strong>Interests</strong><span id="filter-interests-value" class="filter-section-value"></span></span>${icon("chevron")}</summary><fieldset class="subject-field" aria-label="Interests"><p class="filter-note">Go broad, or mix a few things you love.</p><div class="topic-chips">${topics.map((topic) => `<button type="button" data-topic="${topic}" aria-pressed="${topic === "Everything"}">${topic}</button>`).join("")}</div><div id="draft-interests" class="interest-summary"></div><details id="topic-picker" class="topic-picker"><summary><span>More topics <span id="topic-picker-count"></span></span>${icon("chevron")}</summary><p class="filter-note">Pick a few. Classes can match any selected interest.</p><label for="topic-search" class="sr-only">Find a topic</label><input id="topic-search" type="search" placeholder="Find an interest…" autocomplete="off"><div id="topic-options" class="topic-options"></div></details></fieldset></details>
 <details id="filter-levels" class="filter-section"><summary>${icon("list")}<span class="filter-section-label"><strong>Course level</strong><span id="filter-levels-value" class="filter-section-value">All levels</span></span>${icon("chevron")}</summary><fieldset aria-label="Course level"><p class="filter-note">Choose one or more levels.</p><div class="level-options" role="group" aria-label="Course levels"><button type="button" data-course-level="all" aria-label="All levels" aria-pressed="true">All</button>${COURSE_LEVELS.map(level => `<button type="button" data-course-level="${level}" aria-label="${level === 400 ? '400+' : level} level" aria-pressed="false">${level === 400 ? '400+' : level}</button>`).join('')}</div></fieldset></details>
 <details id="filter-walk" class="filter-section"><summary>${icon("pin")}<span class="filter-section-label"><strong>The walk</strong><span id="filter-walk-value" class="filter-section-value"></span></span>${icon("chevron")}</summary><fieldset class="location-field" aria-label="The walk"><div class="location-fields"><label class="time-field">Starting point<select id="location-building"><option value="">Campus centre</option></select></label><label class="time-field">Maximum walk<select id="walk-time"><option value="5">~5 minutes</option><option value="10">~10 minutes</option><option value="15">~15 minutes</option><option value="30">~30 minutes</option></select></label></div><div class="location-actions"><button type="button" id="use-location" class="text-button">${icon("pin")} Use my location</button><button type="button" id="move-pin" class="text-button">Apply & set on map ↗</button></div><p id="location-status" class="filter-note" role="status"></p><p class="filter-note walking-note">Distance estimate · allow a little extra time.</p></fieldset></details>
 <div class="room-preference"><label class="room-filter extra-filter"><span><strong>Bigger rooms <span class="capacity-badge">100+ seats</span></strong><small>More room to blend in.</small></span><input id="big-rooms" type="checkbox" role="switch" aria-label="Bigger rooms only" aria-describedby="capacity-note"></label><p id="capacity-note" class="filter-note">Rooms with unknown capacity are left out.</p></div>
 <div class="filter-information"><span id="data-label" class="demo-label">SAMPLE DAY</span><button type="button" id="preview-info" class="text-button">Timetable info ↗</button></div>
 </div><footer class="sheet-actions"><button type="button" id="reset-filters" class="text-button">Reset</button><button type="submit" id="apply-filters" class="ink-button">Show 8 classes ${icon("arrow")}</button></footer></form></dialog>
<dialog id="lecture-detail" class="sheet detail-sheet" aria-labelledby="detail-title"></dialog>
<dialog id="about-preview" class="sheet about-sheet" aria-labelledby="about-title"><header class="sheet-heading"><div><p class="eyebrow">NOT QUITE THE REAL THING</p><h2 id="about-title">A preview of Sonder.</h2></div><button id="close-preview" class="icon-button" aria-label="Close preview information">${icon("close")}</button></header><div class="sheet-body"><p>The map uses sourced campus geometry. The SAMPLE DAY label means meetings and descriptions are fixtures; the label changes when all three published catalogue files are ready.</p><p>Sonderate picks a reachable class starting within ${SONDERATE_WINDOW_MINUTES} minutes of your gap’s start. Walking estimates use your pin and building coordinates. Search, ranking, and filters run locally.</p><p>Class invitations share the class details and open a welcome screen for your friend. No account is needed. <button id="retry-data" class="text-button">Check for published timetable ↗</button><span id="data-status" role="status"></span></p></div></dialog>
<dialog id="share-dialog" class="sheet invitation-sheet" aria-labelledby="share-title"><header class="sheet-heading"><div><p class="eyebrow">BETTER WITH COMPANY</p><h2 id="share-title">Share class.</h2></div><button id="close-share" class="icon-button" aria-label="Close class invitation">${icon("close")}</button></header><div class="sheet-body"><p class="invitation-intro">Found something good? Bring a friend.</p><div id="share-preview"></div><label class="invite-link-field">Your class invitation<input id="share-url" readonly aria-label="Class invitation link"></label><p id="share-feedback" class="filter-note" role="status">Your friend gets their own invitation to this class.</p></div><footer class="invitation-actions"><button id="copy-invite" class="invite-button">Copy invite link ${icon("arrow")}</button><button id="send-invite" class="text-button" hidden>Send to a friend ↗</button></footer></dialog>
<dialog id="invite-welcome" class="sheet invitation-sheet welcome-sheet" aria-labelledby="invite-title"></dialog>
<div id="announcement" class="sr-only" role="status" aria-live="polite"></div>`;

function ensureMap() {
  if (map) return map.ready;
  if (mapLoadPromise) return mapLoadPromise;
  $("explore-map").innerHTML =
    '<div class="map-component-message" role="status">Opening the campus…</div>';
  mapLoadPromise = import("../campus-map.js")
    .then(({ mountCampusMap }) => {
      if (disposed) return false;
      map = mountCampusMap($("explore-map"), {
        embedded: true,
        initialLabels: !mobile.matches,
        mobileFraming: mobile.matches,
        catalogue: buildings,
        labelTop: 60,
        labelBottom: 95,
        location: state.pin,
        onLocationChange(pin) {
          setPin(pin);
        },
        onSelect(building) {
          if (disposed) return;
          mapSelection = building;
          renderMapSelection();
          if (selectingFromList) return;
          mapPreviewId = null;
          if ($("lecture-detail").classList.contains("map-detail-docked")) $("lecture-detail").close();
          if (building && mobile.matches) mapSheet?.setMode('half');
          state.building = building
            ? { codes: building.codes, name: building.name }
            : null;
          changed();
        },
      });
      return map.ready;
    })
    .then((ok) => {
      if (ok && !disposed) {
        map.setLocation(state.pin);
        updateMapCounts();
        if (state.building?.codes[0]) focusBuilding(state.building.codes[0]);
      }
      return ok;
    })
    .catch((error) => {
      if (!disposed) {
        $("explore-map").innerHTML =
          '<div class="map-component-message"><p>The map couldn’t load.</p><button id="retry-component" class="text-button">Try again</button></div>';
        mapLoadPromise = null;
        console.warn("Map module unavailable", error);
      }
      return false;
    });
  return mapLoadPromise;
}
function focusBuilding(code) {
  ensureMap().then((ok) => {
    if (!ok || disposed) return;
    selectingFromList = true;
    const found = map.selectBuilding(code);
    selectingFromList = false;
    if (!found)
      $("announcement").textContent =
        "This building has no selectable mesh. Its name, room, and walk remain in the class list.";
  });
}
// The map owns selection and the camera; this shell owns the second tap into classes.
// Keeping this separate from state.building also covers “Show on map” from a class.
function renderMapSelection() {
  const panel = $("map-building-preview");
  panel.hidden = !mapSelection;
  $("mobile-map-hint").textContent = mapSelection
    ? "Short drag: look around · Long swipe: leave"
    : "Tap a building to explore";
  if (!mapSelection) return;
  const building = { codes: mapSelection.codes, name: mapSelection.name };
  const count = available({ building }).length;
  const hasCatalogueCode = building.codes.some((code) =>
    Object.hasOwn(buildings, code),
  );
  $("map-building-day").textContent =
    `${DAYS[state.day - 1]} · ${terms[state.term]}`;
  $("map-building-name").textContent = building.name;
  $("map-building-count").textContent = !hasCatalogueCode
    ? "No timetable listings for this building"
    : count
      ? `View ${count} ${count === 1 ? "class" : "classes"} →`
      : "No matches with these filters · View classes →";
  $("map-building-classes").disabled = !hasCatalogueCode;
  $("map-building-classes").setAttribute(
    "aria-label",
    hasCatalogueCode
      ? `See classes in ${building.name}`
      : `${building.name}: no timetable listings`,
  );
}
function updateMapCounts() {
  if (!map || map.status !== "ready") return;
  const counts = new Map();
  for (const l of available({ building: null }))
    counts.set(l.building, (counts.get(l.building) || 0) + 1);
  for (const label of $("explore-map").querySelectorAll(".map-label")) {
    const count =
      counts.get(label.querySelector(".label-code")?.textContent) || 0;
    let badge = label.querySelector(".lecture-badge");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "lecture-badge";
      label.append(badge);
    }
    badge.textContent = count;
    badge.hidden = !count;
    label.classList.toggle("with-lectures", count > 0);
  }
}
function topicGrid() {
  return `<div class="browse-topics"><p>Try a different direction</p><div class="topic-chips">${SUBJECTS.filter(s => s !== 'Everything').map(subject =>
    `<button type="button" data-browse-subject="${esc(subject)}">${esc(subject)}</button>`).join('')}<button type="button" data-more-topics="clear-search">More topics +</button></div></div>`;
}
function interestChips(ids, attribute) {
  return ids.map(id => `<button type="button" ${attribute}="${esc(id)}" aria-label="Remove ${esc(topicDictionary[id]?.label || id)}">${esc(topicDictionary[id]?.label || id)} ${icon('close')}</button>`).join('');
}
function renderTopicOptions() {
  const query = $('topic-search').value.trim().toLowerCase();
  const options = Object.entries(topicDictionary).filter(([id, topic]) =>
    [id, topic.label, ...topic.synonyms].some(value => value.toLowerCase().includes(query)));
  $('topic-options').innerHTML = options.length ? options.sort((a, b) => a[1].label.localeCompare(b[1].label))
    .map(([id, topic]) => `<label><input type="checkbox" data-interest="${esc(id)}" ${draft.interests.includes(id) ? 'checked' : ''}><span>${esc(topic.label)}</span></label>`).join('')
    : '<p class="filter-note">No matching interests. Try another word.</p>';
}
function syncInterestPicker() {
  $('draft-interests').innerHTML = interestChips(draft.interests, 'data-remove-draft-interest');
  $('draft-interests').hidden = !draft.interests.length;
  $('topic-picker-count').textContent = draft.interests.length ? `${draft.interests.length} selected` : '';
  for (const input of $('topic-options').querySelectorAll('[data-interest]')) input.checked = draft.interests.includes(input.dataset.interest);
}
function openTopicsPicker(clearSearch = false) {
  openFilters();
  if (clearSearch) draft.query = '';
  $('filters-dialog').classList.add('topics-only');
  $('filters-title').textContent = 'Topics';
  $('filters-dialog').querySelector('.filter-intro').textContent = 'Pick a few. Classes can match any selected interest.';
  $('reset-filters').textContent = 'Clear topics';
  $('filter-interests').open = true;
  $('topic-picker').open = true;
  updateFilterCount();
  $('topic-search').focus();
}
function renderSearchSuggestions() {
  $('search-topic-count').textContent = state.interests.length;
  $('search-topic-count').hidden = !state.interests.length;
  const panel = $('search-suggestions');
  panel.hidden = !suggestionsOpen || $('search-panel').hidden;
  if (panel.hidden) return;
  if (!state.query.trim()) {
    panel.hidden = true;
    panel.replaceChildren();
    return;
  }
  const venues = searchBuildings(state.query, buildings).slice(0, 4);
  const matchingTopics = searchTopics(state.query, topicDictionary).slice(0, 4);
  const matchingPrograms = searchPrograms(state.query).filter(program => all.some(meeting => program.courseSet.has(meeting.code))).slice(0, 4);
  if (!venues.length && !matchingTopics.length && !matchingPrograms.length) { panel.hidden = true; panel.replaceChildren(); return; }
  const counts = new Map();
  for (const meeting of available({query: '', building: null})) counts.set(meeting.building, (counts.get(meeting.building) || 0) + 1);
  const venueRows = venues.length ? `<div class="search-suggestion-heading"><span>Buildings</span><small>Counts use your current filters</small></div><ul>${venues.map(({code, name}) => {
    const count = counts.get(code) || 0;
    return `<li><button type="button" data-search-building="${esc(code)}"><span class="suggestion-code">${esc(code)}</span><span class="suggestion-name"><strong>${esc(name)}</strong><small>${esc(buildingName(code))}</small></span><span class="suggestion-count">${count ? `${count} ${count === 1 ? 'class' : 'classes'}` : 'No matches'}</span></button><button type="button" data-search-map="${esc(code)}" aria-label="Show ${esc(name)} on map" title="Show on map">${icon('map')}</button></li>`;
  }).join('')}</ul>` : '';
  const topicRows = matchingTopics.length ? `<div class="search-suggestion-heading"><span>Topics</span><small>Classes within your time and walking limits</small></div><ul>${matchingTopics.map(({id, label}) => {
    const count = available({query: '', subject: 'Everything', interests: [id]}).length;
    const selected = state.interests.includes(id);
    return `<li><button type="button" data-search-topic="${esc(id)}" aria-pressed="${selected}"><span class="suggestion-code">${icon('asterisk')}</span><span class="suggestion-name"><strong>${esc(label)}</strong><small>${selected ? 'Selected interest' : 'Add to your interests'}</small></span><span class="suggestion-count">${count ? `${count} ${count === 1 ? 'class' : 'classes'}` : 'No matches'}</span><span class="suggestion-add" aria-hidden="true">${selected ? '✓' : '+'}</span></button></li>`;
  }).join('')}</ul>` : '';
  const programRows = matchingPrograms.length ? `<div class="search-suggestion-heading"><span>Programs &amp; subjects</span><small>Courses within your current filters</small></div><ul>${matchingPrograms.map(program => {
    const count = available({ query: '', program: program.id }).length;
    return `<li><button type="button" data-search-program="${esc(program.id)}"><span class="suggestion-code">${esc(program.prefixes[0])}</span><span class="suggestion-name"><strong>${esc(program.label)}</strong><small>${esc(program.prefixes.join(' · '))} courses</small></span><span class="suggestion-count">${count ? `${count} ${count === 1 ? 'class' : 'classes'}` : 'No matches'}</span><span class="suggestion-add" aria-hidden="true">→</span></button></li>`;
  }).join('')}</ul>` : '';
  panel.innerHTML = venueRows + topicRows + programRows;
}
function selectSearchProgram(id) {
  if (!programById.has(id)) return;
  state.program = id;
  state.query = '';
  $('search').value = '';
  toggleSearch(false, false);
  changed();
  $('results-title').focus({ preventScroll: true });
}
function selectSearchTopic(id) {
  if (!topicDictionary[id]) return;
  state.interests = [...new Set([...state.interests, id])];
  state.subject = 'Everything';
  state.query = '';
  $('search').value = '';
  suggestionsOpen = false;
  changed();
  $('search').focus({ preventScroll: true });
  $('announcement').textContent = `${topicDictionary[id].label} added to your interests.`;
}
function selectSearchBuilding(code, showMap = false) {
  if (!buildings[code]) return;
  state.building = {codes: [code], name: compactBuildingName(code)};
  state.query = '';
  $('search').value = '';
  toggleSearch(false, false);
  changed();
  if (mobile.matches && (showMap || state.view === 'map')) mapSheet?.setMode('half');
  if (showMap) { setView('map'); focusBuilding(code); }
  else {
    if (state.view === 'map') focusBuilding(code);
    $('results-title').focus({preventScroll: true});
  }
}
function card(l) {
  const reachable = walk(l) !== null && l.start >= state.gapStart + walk(l);
  const clock = liveData ? torontoClock() : null;
  const started = clock && l.day === clock.weekday + 1 && l.term === clock.term && l.start <= clock.minute && l.end > clock.minute;
  const timing = started ? (clock.minute === l.start ? 'STARTING NOW' : `STARTED ${clock.minute - l.start} MIN AGO`) : state.timeMode === "day"
    ? esc(l.section)
    : !reachable
      ? "ALLOW FOR THE WALK"
      : l.start - state.gapStart <= 20
        ? `IN ${l.start - state.gapStart} MIN`
        : state.timeMode === "custom" && state.finishBy
          ? "FITS YOUR GAP"
          : "STARTING SOON";
  const expandable = state.view === 'map';
  const expanded = expandable && mapPreviewId === l.id;
  return `<article class="class-ticket${expanded ? ' has-preview' : ''}"><button class="lecture-open" ${expandable ? `aria-expanded="${expanded}" aria-controls="map-course-${esc(l.id)}"` : ''} data-open="${esc(l.id)}" aria-label="Explore ${esc(l.title)}"><div class="ticket-course"><div class="ticket-top"><span class="course-code">${icon(subjectIcon(l.subject))}${esc(l.code)}</span><span class="starts${started ? " is-started" : ""}">${timing}</span></div><h3>${esc(l.title)}</h3><p class="ticket-description">${esc(cardDescription(l.description))}</p></div><div class="ticket-time"><span class="sr-only">When: </span>${icon("clock")}<span class="ticket-time-range"><span>${fullTime(l.start)}</span><span><span class="time-separator">–</span>${fullTime(l.end)}</span></span></div><div class="ticket-place">${icon("pin")}<div><strong class="room-number">${esc(roomName(l))}</strong><small class="building-name" title="${esc(buildingName(l.building))}">${esc(compactBuildingName(l.building))}</small></div></div><div class="ticket-walk">${icon("walk")}<span>${walkText(l)}<small class="mobile-walk-label"> walk</small></span>${icon(expandable ? "chevron" : "diagonal")}</div></button>${expandable ? `<div id="map-course-${esc(l.id)}" class="map-course-preview" ${expanded ? '' : 'hidden'}><p>${esc(l.descFull || l.description)}</p><div class="map-course-preview-footer"><span>${esc(DAYS[l.day - 1])} · ${esc(l.section)}${l.seats === null ? '' : ` · ${l.seats.toLocaleString()} seats`}</span><button type="button" class="text-button" data-open="${esc(l.id)}">Full details ${icon('arrow')}</button></div></div>` : ''}</article>`;
}
function render() {
  const items = available(state),
    count = activeCount(state),
    window = timeWindow(state),
    timeLabel = state.timeMode === "day" ? "All day"
      : state.timeMode === "soon" ? "Next 2 hours"
      : `${fullTime(window.start)}–${fullTime(window.end)}${state.finishBy ? " · finish by then" : " starts"}`,
    currentDay = torontoClock(),
    dayLabel = !liveData ? DAYS[state.day - 1] : state.day - 1 === currentDay.weekday
      ? (followClock && state.gapStart < currentDay.minute - 20 ? `Next ${DAYS[state.day - 1]}` : 'Today')
      : state.day - 1 === (currentDay.weekday + 1) % 7 ? 'Tomorrow' : DAYS[state.day - 1],
    futureWindow = liveData && followClock && dayLabel !== 'Today',
    visibleTime = futureWindow ? `${fullTime(window.start)}–${fullTime(window.end)}` : '';
  for (const mode of ["soon", "day", "custom"])
    $("time-" + mode).setAttribute("aria-pressed", state.timeMode === mode);
  $("time-custom").hidden = state.timeMode !== "custom";
  $("time-summary").innerHTML = `<span class="time-summary-full">${dayLabel}${visibleTime ? ` · ${visibleTime}` : ""}</span><span class="time-summary-short">${state.timeMode === "custom" ? "Custom · " : ""}${dayLabel === "Today" || dayLabel === "Tomorrow" ? dayLabel : dayLabel.slice(0, 3)}${visibleTime ? `<small>${visibleTime}</small>` : ""}</span> ${icon("chevron")}`;
  $("time-summary").setAttribute("aria-label", `${dayLabel} · ${visibleTime || timeLabel} · Edit time and filters`);
  $("time-summary").title = `${dayLabel} · ${fullTime(window.start)}–${fullTime(window.end)} · Edit time and filters`;
  $("data-label").textContent = liveData ? terms[state.term] : "SAMPLE DAY";
  $("result-count").innerHTML =
    `<span class="result-count-badge"><strong>${items.length}</strong> ${items.length === 1 ? "class" : "classes"}</span>`;
  document.querySelector('.class-pane').classList.toggle('is-empty', !items.length);
  const selectedVenue = state.building && compactBuildingName(state.building.codes[0]);
  $('map-sheet-name').textContent = state.building
    ? (selectedVenue === state.building.codes[0] ? state.building.name : selectedVenue)
    : state.program ? programById.get(state.program)?.label || 'Campus classes' : 'Campus classes';
  $('map-sheet-meta').textContent = `${dayLabel} · ${items.length} ${items.length === 1 ? 'class' : 'classes'}`;
  $('map-sheet-clear').hidden = !state.building;
  mapSheet?.sync();
  $("filter-count").hidden = !count;
  $("filter-count").textContent = count;
  $('interest-summary').innerHTML = interestChips(state.interests, 'data-remove-interest');
  $('interest-summary').hidden = !state.interests.length;
  $("open-filters").classList.toggle("has-filters", count > 0);
  $("results-title").textContent = state.building ? "Classes here" : state.query ? "Search results" : "Classes";
  $("active-summary").hidden = !(state.building || state.query || state.program);
  $("active-summary").classList.toggle("building-only", !!state.building && !state.query && !state.program);
  $("active-summary").querySelector("span").textContent = [
    state.building?.name,
    state.program ? programById.get(state.program)?.label : null,
    state.query ? `“${state.query}”` : "",
  ]
    .filter(Boolean)
    .join(" · ");
  $("lecture-list").innerHTML = items.length
    ? items.slice(0, visibleLimit).map(card).join("") +
      (items.length > visibleLimit
        ? `<button id="show-more" class="load-more text-button">Show ${Math.min(40, items.length - visibleLimit)} more classes ↓</button>`
        : "")
    : `<div class="empty-state"><button type="button" class="ink-button" data-empty-filters>Change filters ${filterIcon}</button><h3>No classes match.</h3><p>${state.query ? `Nothing for “${esc(state.query)}” with these filters.` : "No classes fit this day and these filters."} ${state.timeMode === "day" ? "Try another day or adjust your filters." : "Try All day or choose another time."}</p>${state.timeMode !== "day" ? '<button id="empty-all-day" class="text-button">See all day →</button>' : ""}<button id="reset-empty" class="text-button">Reset search & filters ${icon("arrow")}</button>${topicGrid()}</div>`;
  $("announcement").textContent =
    `${items.length} ${liveData ? "" : "sample "}classes shown.`;
  updateMapCounts();
  renderSearchSuggestions();
  renderMapSelection();
  syncURL();
}
function changed() {
  userChanged = true;
  mapPreviewId = null;
  visibleLimit = 40;
  render();
}
function chooseTimeMode(filters, mode) {
  filters.timeMode = mode;
  if (mode === "soon") {
    filters.gapStart = liveData ? catalogueDefaults(new Date(), all).gapStart : defaults.gapStart;
    filters.gapEnd = Math.min(1440, filters.gapStart + 120);
  }
}
function populateFilters() {
  $("term").value = draft.term;
  $("day").value = draft.day;
  $("walk-time").value = draft.walk;
  $("big-rooms").checked = !!draft.minSeats;
  syncLocationDraft();
  document.querySelectorAll('[data-course-level]').forEach(button => {
    const level = button.dataset.courseLevel;
    button.setAttribute('aria-pressed', level === 'all' ? !draft.levels.length : draft.levels.includes(Number(level)));
  });
  document
    .querySelectorAll("[data-topic]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        !draft.interests.length && button.dataset.topic === draft.subject,
      ),
    );
  syncGap();
  syncInterestPicker();
  updateFilterCount();
}
function syncGap() {
  $("time-mode").value = draft.timeMode;
  $("custom-time-fields").hidden = draft.timeMode !== "custom";
  for (const input of $("custom-time-fields").querySelectorAll("input"))
    input.disabled = draft.timeMode !== "custom";
  $("finish-by").checked = draft.finishBy;
  $("time-end-label").textContent = draft.finishBy ? "Must finish by" : "Starting before";
  $("gap-start").value = draft.gapStart;
  $("gap-end").value = draft.gapEnd;
  $("gap-start").setAttribute("aria-valuetext", fullTime(draft.gapStart));
  $("gap-end").setAttribute("aria-valuetext", fullTime(draft.gapEnd));
  $("gap-start").setAttribute("aria-valuemax", draft.gapEnd - 10);
  $("gap-end").setAttribute("aria-valuemin", draft.gapStart + 10);
  $("gap-from").value = timeInput(draft.gapStart);
  $("gap-until").value = timeInput(draft.gapEnd);
  // End 00:00 means midnight at the end of the chosen day.
  $("gap-until").setCustomValidity("");
  $("gap-from").setCustomValidity("");
  $("gap-fill").style.left = `${(draft.gapStart / 1440) * 100}%`;
  $("gap-fill").style.width =
    `${((draft.gapEnd - draft.gapStart) / 1440) * 100}%`;
  $("gap-note").textContent = draft.timeMode === "day"
    ? "Any start time on the selected day. Your other filters still apply."
    : draft.timeMode === "soon"
      ? `Starting ${fullTime(draft.gapStart)}–${fullTime(timeWindow(draft).end)}. Classes can finish later.`
      : draft.finishBy
        ? `Classes must start and finish between ${fullTime(draft.gapStart)} and ${fullTime(draft.gapEnd)}.`
        : "Classes must start in this window. They can finish later.";
}
function updateFilterCount() {
  const timing = draft.timeMode === 'day' ? 'All day' : draft.timeMode === 'soon' ? 'Next 2 hours'
    : `${fullTime(draft.gapStart)}–${fullTime(draft.gapEnd)}${draft.finishBy ? ' · Finish by' : ''}`;
  $('filter-when-value').textContent = `${DAYS[draft.day - 1]} · ${terms[draft.term]} · ${timing}`;
  const interests = draft.interests.map(id => topicDictionary[id]?.label || id);
  $('filter-levels-value').textContent = draft.levels.length ? draft.levels.map(level => level === 400 ? '400+' : level).join(' · ') : 'All levels';
  $('filter-interests-value').textContent = interests.length ? interests.slice(0, 2).join(' + ') + (interests.length > 2 ? ` + ${interests.length - 2} more` : '') : draft.subject;
  const place = $('location-building').selectedOptions[0]?.textContent || 'Campus centre';
  $('filter-walk-value').textContent = `${place.replace(/^[A-Z]{2} · /, '')} · ~${draft.walk} min`;
  const count = available(draft).length;
  $("apply-filters").innerHTML =
    `Show ${count} ${count === 1 ? "class" : "classes"} ${icon("arrow")}`;
}
function openFilters() {
  $('filters-dialog').classList.remove('topics-only');
  $('filters-title').textContent = 'Filters';
  $('filters-dialog').querySelector('.filter-intro').textContent = 'For your class list & your next Sonderate.';
  $('reset-filters').textContent = 'Reset';
  if ($("lecture-detail").classList.contains("map-detail-docked")) $("lecture-detail").close();
  draft = Object.fromEntries(
    Object.keys(defaults).map((key) => [key, state[key]]),
  );
  draft.pin = { ...state.pin };
  draft.interests = [...state.interests];
  draft.levels = [...state.levels];
  draft.query = state.query;
  $('topic-search').value = '';
  for (const section of document.querySelectorAll('details.filter-section')) section.open = false;
  $('topic-picker').open = false;
  renderTopicOptions();
  locationRequest++;
  $("use-location").disabled = false;
  $("location-status").textContent = "";
  populateFilters();
  $("filters-dialog").showModal();
}
function syncLocationDraft() {
  const samePoint = (point) => point && Math.hypot(
    draft.pin.lat - point.lat, draft.pin.lng - point.lng,
  ) < 0.000001;
  const building = Object.entries(buildings).find(([, point]) => samePoint(point));
  $("location-building").value = samePoint(CAMPUS_CENTRE) ? "" : building?.[0] || "__pin";
}
function setDraftPin(pin) {
  if (!validPin(pin)) return false;
  draft.pin = { lat: Number(pin.lat.toFixed(6)), lng: Number(pin.lng.toFixed(6)) };
  syncLocationDraft();
  updateFilterCount();
  return true;
}
function applyFilters() {
  if (!$('filters-dialog').classList.contains('topics-only')) followClock = false;
  Object.assign(state, draft, { pin: { ...draft.pin } });
  $('search').value = state.query;
  map?.setLocation(state.pin);
  $("filters-dialog").close();
  changed();
}
function clearAll() {
  followClock = true;
  if (liveData) Object.assign(defaults, catalogueDefaults(new Date(), all));
  Object.assign(state, defaults, { query: "", interests: [], levels: [], building: null, program: null });
  $("search").value = "";
  if (map) {
    selectingFromList = true;
    map.reset();
    selectingFromList = false;
  }
  changed();
}
function setView(view) {
  if (mobile.matches && view === "map") {
    if (document.activeElement === $("search")) $("search").blur();
    toggleSearch(false, false);
  }
  if (state.view !== view) mapPreviewId = null;
  state.view = view;
  document.body.dataset.view = view;
  syncMapControls();
  syncSearchLayout();
  $("toggle-map").setAttribute("aria-expanded", view === "map");
  $("toggle-map").querySelector("span").textContent =
    view === "map" ? "Hide map" : "Show map";
  if (view === "map") ensureMap();
  render();
  if ($("lecture-detail").open) presentDetail();
  syncURL();
}
function syncSearchLayout() {
  const topicButton = $('search-topics');
  if (mobile.matches && state.view !== 'map') document.querySelector('.main-actions').append(topicButton);
  else $('search-suggestions').before(topicButton);
  topicButton.hidden = mobile.matches && $('search-panel').hidden;
  document.body.classList.toggle('search-open', !$('search-panel').hidden);
}
function toggleSearch(open = $("search-panel").hidden, focus = true) {
  suggestionsOpen = open && focus;
  $("search-panel").hidden = !open;
  syncSearchLayout();
  $("toggle-search").setAttribute("aria-expanded", open);
  if (open && focus) {
    if ($("lecture-detail").classList.contains("map-detail-docked")) $("lecture-detail").close();
    $("search").focus();
  }
  renderSearchSuggestions();
  syncMobileViewport();
}
const tinyMissions = [
  "Steal one idea for your next personality phase.",
  "Find one fact that sounds illegal to know.",
  "Write the worst dating-app bio this topic could inspire.",
  "Pick a claim you’d fight about at 2 a.m. Build your case silently.",
  "Give this lecture a scandalous podcast title.",
  "Draft an unhinged group-chat recap. Send it after class.",
  "Find an idea with red flags. Give it a suspiciously fair chance.",
  "Take notes using only drawings.",
  "Tell someone after class: “Plot twist—I’m not taking this course.”",
  "Ask the prof after class which idea they wish everyone understood.",
  "Turn today’s big idea into a three-panel comic.",
  "Ask someone after class which lecture you should try next.",
  "Catch yourself changing your mind. Log the betrayal.",
  "Give one concept a villain origin story.",
  "Explain the main idea using only food analogies.",
  "Write a review of this topic as if it were a terrible first date.",
  "Find today’s plot twist. Write yourself a spoiler alert.",
  "Make a tiny bingo card of words the lecture keeps coming back to.",
  "Leave with one question you did not know existed.",
  "Invent a band name from two words in your notes.",
  "Turn one idea into a very dramatic movie tagline.",
  "Find a fact you’ll be insufferable about at dinner.",
  "Write the lecture’s group-chat name.",
  "Ask someone after class what surprised them today.",
  "Thank the prof after class for introducing you to something new.",
  "Ask the prof after class for one good thing to read next.",
  "Tell someone after class which subject you usually study. Compare worlds.",
  "Draw a map connecting three ideas from the lecture.",
  "Write a six-word summary with wildly unnecessary drama.",
  "Find the concept most likely to start a family argument.",
  "Take notes like a detective trying to solve a very nerdy crime.",
  "Give one theory an extremely honest dating profile.",
  "Turn your favourite idea into a fake inspirational poster.",
  "Find one thing your past self would confidently get wrong.",
  "Name the hill this subject is willing to die on.",
  "Write a headline that makes this topic sound like celebrity gossip.",
  "Find the idea you’d smuggle into an entirely different subject.",
  "After class, ask someone why they chose this course.",
  "Sketch what this lecture would look like as an album cover.",
  "Leave with a new word. Give it an unnecessarily dramatic definition."
];
missionIndex = Math.floor(Math.random() * tinyMissions.length);
function sonderatePanel(draw) {
  const upper = Math.min(1440, state.gapStart + SONDERATE_WINDOW_MINUTES, timeWindow(state).end);
  const filters = [
    `${DAYS[state.day - 1]} · ${fullTime(state.gapStart)}–${fullTime(upper)}`,
    `Within ~${state.walk} min of ${pinLabel()}`,
    state.interests.length ? state.interests.map(id => topicDictionary[id]?.label || id).join(' or ')
      : state.subject === 'Everything' ? null : state.subject,
    state.building ? state.building.codes.map(compactBuildingName).join(' / ') : null,
    state.query ? `Search: “${state.query}”` : null,
    state.program ? programById.get(state.program)?.label : null,
    state.minSeats ? `${state.minSeats}+ seats` : null,
    state.levels.length ? `Course level: ${state.levels.map(level => level === 400 ? '400+' : level).join(' or ')}` : null,
    state.timeMode === 'custom' && state.finishBy ? `Must finish by ${fullTime(state.gapEnd)}` : null,
  ].filter(Boolean);
  return `<aside id="sonderate-context" class="sonderate-context" aria-labelledby="sonderate-context-title"><h3 id="sonderate-context-title">Sonderate picks a random class for you.</h3><p class="sonderate-pick-summary">${draw.size ? `<strong>${draw.size} matching ${draw.size === 1 ? 'class' : 'classes'} in the mix.</strong>` : '<strong>No reachable pick this time.</strong>'}</p><details id="sonderate-explainer" open><summary>How it works + your mission ${icon('chevron')}</summary><p class="sonderate-explanation">It finds one starting within an hour of ${fullTime(state.gapStart)}, with enough time to walk there.</p><p class="sonderate-filter-assurance">Your filters stay on.</p><ul class="sonderate-applied-filters">${filters.map(filter => `<li>${esc(filter)}</li>`).join('')}</ul>${state.timeMode === 'day' ? '<p class="sonderate-day-note">All day expands your list. Sonderate still uses the hour shown above.</p>' : ''}<button type="button" data-sonderate-filters class="text-button">Change filters ${filterIcon}</button>${draw.size ? `<div class="sonderate-mission"><span class="eyebrow">YOUR TINY MISSION</span><p id="sonderate-mission-text" aria-live="polite">${tinyMissions[missionIndex % tinyMissions.length]}</p><button type="button" id="next-mission" class="text-button">Another mission ↻</button></div>` : ''}</details></aside>`;
}
function openLecture(id, fromRandom = false, draw = null) {
  const l = all.find((item) => item.id === id);
  if (!l) return;
  if (!$("lecture-detail").open) lastDetailTrigger = fromRandom ? $('sonderate')
    : document.querySelector(`[data-open="${CSS.escape(id)}"]`) || document.activeElement;
  state.selected = id;
  $('lecture-detail').classList.remove('similar-detail');
  $('lecture-detail').classList.toggle('sonderate-detail', fromRandom);
  if (state.view === "map") focusBuilding(l.building);
  $("lecture-detail").innerHTML =
    `<header class="sheet-heading"><div><p class="eyebrow">${fromRandom ? "YOU HAVE BEEN SONDERATED" : "A POSSIBLE DETOUR"}</p><span class="detail-code">${esc(l.code)} · ${esc(l.section)}</span></div><button id="close-detail" class="icon-button" aria-label="Close class details">${icon("close")}</button></header><div class="sheet-body detail-body"><p class="hand-note">${fromRandom ? "didn’t see that one coming." : "a little outside your usual."}</p><h2 id="detail-title">${esc(l.title)}</h2><p class="detail-description">${esc(l.descFull || l.description)}</p><dl><div class="detail-when"><dt>WHEN</dt><dd><strong class="detail-time"><span>${fullTime(l.start)}</span> <span>– ${fullTime(l.end)}</span></strong><small>${DAYS[l.day - 1]} · ${esc(terms[l.term])}</small></dd></div><div><dt>WHERE</dt><dd class="detail-location"><strong class="detail-room">${esc(roomName(l))}</strong><small class="detail-building">${esc(buildingName(l.building))}</small></dd></div><div><dt>THE WALK</dt><dd>${walkText(l)} from ${pinLabel()}<small>Distance estimate · allow extra time</small></dd></div><div><dt>THE ROOM</dt><dd>${l.seats === null ? "Capacity unknown" : `${l.seats.toLocaleString()} seats`}<small>Capacity, not attendance</small></dd></div></dl><p class="sample-note">${liveData ? "PUBLISHED MEETING" : "SAMPLE MEETING"} · ${DAYS[l.day - 1].toUpperCase()}</p></div><footer class="detail-actions"><button id="show-building" class="ink-button">${icon("map")} Show on map ${icon("arrow")}</button><button id="share-class" class="invite-button">${icon("asterisk")} Share class ${icon("arrow")}</button><button id="building-day" class="text-button">See this building’s full day ↗</button>${fromRandom ? `<button id="sonderate-again" class="invite-button sonderate-repeat">${icon("shuffle")} <span>Sonderate again</span> ${icon("arrow")}</button>` : ''}<button id="similar-classes" class="text-button">${icon("search")} Similar classes</button></footer>`;
  if (fromRandom) $('lecture-detail').insertAdjacentHTML('beforeend', sonderatePanel(draw));
  presentDetail();
  $("close-detail").focus({ preventScroll: true });
  syncURL();
}
function showSimilarClasses() {
  const source = all.find(meeting => meeting.id === state.selected);
  if (!source) return;
  // The lookup text identifies the source course; other filters constrain its alternatives.
  const matches = similarClasses(source, available({ query: '' }), topicDictionary);
  const dialog = $('lecture-detail');
  dialog.classList.remove('sonderate-detail');
  dialog.classList.add('similar-detail');
  dialog.innerHTML = `<header class="sheet-heading"><div><p class="eyebrow">FOLLOW THAT THREAD</p><h2 id="detail-title">Similar classes</h2></div><button id="close-detail" class="icon-button" aria-label="Close similar classes">${icon('close')}</button></header><div class="sheet-body detail-body"><p class="similar-source">More like <strong>${esc(source.code)} · ${esc(source.title)}</strong></p><p class="similar-note">Shared topics first. Your time, walking and other filters still apply.</p>${matches.length ? `<div class="similar-list">${matches.map(({meeting, reason}) => `<button type="button" class="similar-class" data-open="${esc(meeting.id)}"><span class="similar-code">${esc(meeting.code)} <span>${icon('arrow')}</span></span><strong class="similar-title">${esc(meeting.title)}</strong><span class="similar-reason">${esc(reason)}</span><span class="similar-facts"><span>${fullTime(meeting.start)}–${fullTime(meeting.end)}</span><span>${esc(roomName(meeting))} · ${walkText(meeting)}</span></span></button>`).join('')}</div>` : '<div class="similar-empty"><h3>No nearby matches this time.</h3><p>Try another day, time or walking limit to find more classes in this direction.</p></div>'}</div><footer class="detail-actions"><button id="back-to-class" class="text-button">← Back to class</button><button type="button" data-sonderate-filters class="text-button">Edit filters ${filterIcon}</button></footer>`;
  presentDetail();
  $('close-detail').focus({ preventScroll: true });
}
function sonderate() {
  missionIndex = (missionIndex + 1 + Math.floor(Math.random() * (tinyMissions.length - 1))) % tinyMissions.length;
  const eligible = sonderateCandidates(all, state, buildings, searchIndex);
  const alternatives = eligible.filter((l) => l.id !== state.selected),
    pool = alternatives.length ? alternatives : eligible;
  if (pool.length)
    return openLecture(pool[Math.floor(Math.random() * pool.length)].id, true, {size: pool.length, round: ++sonderateRound});
  if (!$("lecture-detail").open) lastDetailTrigger = document.activeElement;
  state.selected = null;
  $('lecture-detail').classList.remove('similar-detail');
  $('lecture-detail').classList.add('sonderate-detail');
  syncURL();
  $("lecture-detail").innerHTML =
    `<header class="sheet-heading"><p class="eyebrow">A SMALL PLOT TWIST</p><button id="close-detail" class="icon-button" aria-label="Close class details">${icon("close")}</button></header><div class="sheet-body detail-body"><h2 id="detail-title">Nothing you can get to in time.</h2><p>No class starts within ${SONDERATE_WINDOW_MINUTES} minutes of ${fullTime(state.gapStart)} and fits your filters and walk. Try another time or adjust your filters.</p></div><footer class="detail-actions"><button id="adjust-filters" class="ink-button">Adjust filters ${icon("arrow")}</button></footer>${sonderatePanel({size: 0, round: ++sonderateRound})}`;
  presentDetail();
}
function setPin(pin) {
  if (!validPin(pin)) return false;
  state.pin = {
    lat: Number(pin.lat.toFixed(6)),
    lng: Number(pin.lng.toFixed(6)),
  };
  map?.setLocation(state.pin);
  changed();
  if ($("lecture-detail").open && state.selected) openLecture(state.selected);
  return true;
}
function populateLocations() {
  $("location-building").innerHTML =
    '<option value="">Campus centre</option><option value="__pin" disabled>Custom map pin</option>' +
    Object.entries(buildings)
      .sort((a, b) => a[1].name.localeCompare(b[1].name))
      .map(
        ([code, b]) =>
          `<option value="${esc(code)}" title="${esc(b.name)}">${esc(code)} · ${esc(compactBuildingName(code))}</option>`,
      )
      .join("");
}
function invitationCard(l) {
  return `<article class="invitation-ticket"><div class="invitation-ticket-top"><span>${esc(l.code)} · ${esc(l.section)}</span><span class="invitation-stamp">LET’S GO</span></div><h3>${esc(l.title)}</h3><div class="invitation-ticket-facts"><p>${icon("clock")}<span><strong class="invitation-fact"><span>${fullTime(l.start)}</span> <span>– ${fullTime(l.end)}</span></strong><small>${DAYS[l.day - 1]} · ${esc(terms[l.term])}</small></span></p><p>${icon("pin")}<span><strong class="invitation-fact">${esc(roomName(l))}</strong><small title="${esc(buildingName(l.building))}">${esc(compactBuildingName(l.building))}</small></span></p></div></article>`;
}
function shareClass() {
  const l = all.find((item) => item.id === state.selected);
  if (!l || !$("lecture-detail").open) return;
  const url = new URL(location.pathname, location.origin);
  url.hash = new URLSearchParams({ v: "1", invite: "1", class: l.id, day: String(l.day), term: l.term, timeMode: "day" }).toString();
  invitationUrl = url.href;
  $("share-preview").innerHTML = invitationCard(l);
  $("share-url").value = invitationUrl;
  $("copy-invite").innerHTML = `Copy invite link ${icon("arrow")}`;
  $("copy-invite").classList.remove("is-copied");
  $("share-feedback").textContent = "Your friend gets their own invitation to this class.";
  $("send-invite").hidden = typeof navigator.share !== "function";
  $("share-dialog").showModal();
}
async function copyInvitation() {
  try {
    await navigator.clipboard.writeText(invitationUrl);
    if (disposed) return;
    $("copy-invite").textContent = "Copied — send it to a friend ✓";
    $("copy-invite").classList.add("is-copied");
    $("share-feedback").textContent = "Invitation copied. Paste it into your chat.";
  } catch {
    if (disposed) return;
    $("share-feedback").textContent = "Select and copy the invitation link below.";
    $("share-url").focus();
    $("share-url").select();
  }
}
async function sendInvitation() {
  const l = all.find((item) => item.id === state.selected);
  if (!l || !navigator.share) return;
  try {
    await navigator.share({ title: `Come to ${l.code} with me`, text: `Found a detour: ${l.title}. Want to go together?`, url: invitationUrl });
  } catch (error) {
    if (!disposed && error.name !== "AbortError")
      $("share-feedback").textContent = "You can still copy the invitation link and send it in a chat.";
  }
}
function showInvitation(pending = false) {
  if (!invitationId) return;
  const l = all.find((item) => item.id === invitationId);
  $("invite-welcome").innerHTML = `<header class="sheet-heading"><p class="eyebrow">${l ? "A DETOUR FOR TWO" : "YOUR CLASS INVITATION"}</p><button id="close-invitation" class="icon-button" aria-label="Close invitation">${icon("close")}</button></header><div class="sheet-body"><div class="invitation-art" aria-hidden="true"><span>YOU</span><i>+</i><span>YOUR<br>FRIEND</span><b>↗</b></div><h2 id="invite-title">${l ? "Go together.<br>Get curious." : pending ? "Opening your invitation…" : "This detour is unavailable."}</h2><p class="invitation-intro">${l ? "A friend found this class and thought of you. Take a little detour together." : pending ? "Finding the class in the timetable." : "This class could not be found in the available timetable. You can still find another one to share."}</p>${l ? invitationCard(l) : '<p role="status" class="filter-note">' + (pending ? "Loading class details…" : "Try another invitation or explore the campus.") + '</p>'}</div><footer class="invitation-actions">${l ? '<button id="accept-invitation" class="invite-button">Let’s go — view class ' + icon("arrow") + '</button>' : ""}<button id="browse-instead" class="text-button">${l ? "Explore on my own" : "Browse classes"}</button></footer>`;
  if (!$("invite-welcome").open) $("invite-welcome").showModal();
}
function dismissInvitation() {
  invitationId = null;
  state.selected = null;
  $("invite-welcome").close();
  render();
  $("results-title").focus({ preventScroll: true });
}
function acceptInvitation() {
  const l = all.find((item) => item.id === invitationId);
  if (!l) return;
  invitationId = null;
  $("invite-welcome").close();
  state.day = l.day;
  state.term = l.term;
  openLecture(l.id);
}
function restore(hash) {
  invitationId = invitationFromHash(hash);
  if ($("share-dialog").open) $("share-dialog").close();
  if (!invitationId && $("invite-welcome").open) $("invite-welcome").close();
  if ($("lecture-detail").open) $("lecture-detail").close();
  Object.assign(state, decodeState(hash, buildings, all, topicDictionary));
  $("search").value = state.query;
  toggleSearch(!!state.query, false);
  map?.setLocation(state.pin);
  setView(state.view);
  render();
  if (state.building?.codes[0] && state.view === "map")
    focusBuilding(state.building.codes[0]);
  if (invitationId) showInvitation(loadingCatalogue);
  else if (state.selected) openLecture(state.selected);
}
async function refreshCatalogue() {
  if (loadingCatalogue) return;
  loadingCatalogue = true;
  $("data-status").textContent = "Checking…";
  const originalHash = !liveData && incomingHash ? incomingHash : location.hash;
  try {
    const catalogue = await loadCatalogue(lifecycle.signal);
    if (disposed) return;
    if (!catalogue) {
      $("data-status").textContent = liveData
        ? "Updated files are not ready. The last loaded timetable remains available."
        : "Published files are not ready. Sample timetable is shown.";
      return;
    }
    const firstLoad = !liveData;
    all = catalogue.meetings;
    buildings = catalogue.buildings;
    map?.setCatalogue(buildings);
    topicDictionary = catalogue.topics;
    terms = catalogue.terms;
    searchIndex = createSearchIndex(topicDictionary);
    liveData = true;
    populateLocations();
    $("preview-info").textContent = "Timetable info ↗";
    $("data-status").textContent =
      `Published ${catalogue.generated || "timetable loaded"}.`;
    if (firstLoad) Object.assign(defaults, catalogueDefaults(new Date(), all));
    if (firstLoad && !userChanged && !hadSharedState) {
      Object.assign(state, defaults, { selected: null });
      render();
    } else restore(userChanged ? location.hash : originalHash);
  } catch (error) {
    if (!disposed)
      $("data-status").textContent = liveData
        ? "Could not refresh. The last loaded timetable remains available."
        : "Could not load the published timetable. Sample timetable is shown.";
  } finally {
    loadingCatalogue = false;
    if (!disposed && invitationId) showInvitation();
  }
}
function listen(target, type, callback) {
  target.addEventListener(
    type,
    (event) => {
      if (
        event.isTrusted &&
        ["click", "input", "change", "submit", "keydown"].includes(type)
      )
        userChanged = true;
      callback(event);
    },
    { signal: lifecycle.signal },
  );
}
mapSheet = createMobileMapSheet({
  stage: document.querySelector('.panes'), handle: $('map-sheet-toggle'),
  enabled: () => mobile.matches && state.view === 'map',
  isEmpty: () => document.querySelector('.class-pane').classList.contains('is-empty'),
  onChangeFilters: openFilters,
});
listen($('map-sheet-clear'), 'click', () => {
  state.building = null;
  map?.clearSelection();
  changed();
});
listen($("sonderate"), "click", sonderate);
for (const mode of ["soon", "day"])
  listen($("time-" + mode), "click", () => {
    if ($('lecture-detail').classList.contains('map-detail-docked')) $('lecture-detail').close();
    const clock = torontoClock();
    followClock = mode === 'soon' && state.day === clock.weekday + 1 && state.term === clock.term;
    chooseTimeMode(state, mode);
    changed();
  });
listen($("time-mode"), "change", (event) => {
  chooseTimeMode(draft, event.target.value);
  syncGap();
  updateFilterCount();
});
listen($("finish-by"), "change", (event) => {
  draft.finishBy = event.target.checked;
  syncGap();
  updateFilterCount();
});
for (const id of ["open-filters", "time-summary", "time-custom"])
  listen($(id), "click", () => {
    openFilters();
    if (id !== 'open-filters') $('filter-when').open = true;
  });
listen($("close-filters"), "click", () => $("filters-dialog").close());
listen($('search-topics'), 'click', () => openTopicsPicker(true));
listen($("reset-filters"), "click", () => {
  if ($('filters-dialog').classList.contains('topics-only')) {
    draft.subject = 'Everything';
    draft.interests = [];
    populateFilters();
    return;
  }
  locationRequest++;
  $("use-location").disabled = false;
  $("location-status").textContent = "";
  draft = { ...defaults, pin: { ...CAMPUS_CENTRE }, interests: [], levels: [], query: state.query };
  populateFilters();
});
listen($("filter-form"), "submit", (event) => {
  event.preventDefault();
  applyFilters();
});
for (const [id, key] of [
  ["walk-time", "walk"],
  ["day", "day"],
  ["term", "term"],
])
  listen($(id), "change", (event) => {
    draft[key] =
      key === "term" ? event.target.value : Number(event.target.value);
    updateFilterCount();
  });
for (const [id, key] of [
  ["gap-start", "gapStart"],
  ["gap-end", "gapEnd"],
])
  listen($(id), "input", (event) => {
    const value = Number(event.target.value);
    draft[key] =
      key === "gapStart"
        ? Math.min(value, draft.gapEnd - 10)
        : Math.max(value, draft.gapStart + 10);
    syncGap();
    updateFilterCount();
  });
for (const [id, key] of [
  ["gap-from", "gapStart"],
  ["gap-until", "gapEnd"],
])
  listen($(id), "change", (event) => {
    const [hours, minutes] = event.target.value.split(":").map(Number);
    const value =
      key === "gapEnd" && hours === 0 && minutes === 0
        ? 1440
        : hours * 60 + minutes;
    if (!Number.isFinite(value)) return;
    if (
      (key === "gapStart" && value > draft.gapEnd - 10) ||
      (key === "gapEnd" && value < draft.gapStart + 10)
    ) {
      event.target.setCustomValidity(
        "Choose an end at least 10 minutes after the start.",
      );
      event.target.reportValidity();
      return;
    }
    draft[key] = value;
    syncGap();
    updateFilterCount();
  });
listen($("big-rooms"), "change", (event) => {
  draft.minSeats = event.target.checked ? 100 : 0;
  updateFilterCount();
});
listen($("toggle-search"), "click", () => toggleSearch());
listen($("search"), "input", (event) => {
  suggestionsOpen = true;
  state.query = event.target.value.slice(0, 200);
  changed();
});
listen($("search"), "keydown", (event) => {
  if (event.key === 'ArrowDown' && !$('search-suggestions').hidden) {
    event.preventDefault();
    $('search-suggestions').querySelector('button')?.focus();
  }
  if (event.key === 'Escape') {
    event.preventDefault();
    suggestionsOpen = false;
    renderSearchSuggestions();
  }
  if (event.key === 'Enter') {
    suggestionsOpen = false;
    renderSearchSuggestions();
  }
  if (mobile.matches && event.key === "Enter") {
    event.preventDefault();
    $("search").blur();
    if (state.view === "map") { toggleSearch(false, false); mapSheet?.setMode("half"); }
    $("results-title").focus({ preventScroll: true });
  }
});
listen($('search'), 'focus', () => { suggestionsOpen = true; renderSearchSuggestions(); });
listen($('search-panel'), 'focusout', event => {
  if (event.relatedTarget && !$('search-panel').contains(event.relatedTarget)) {
    suggestionsOpen = false;
    renderSearchSuggestions();
  }
});
listen($('search-suggestions'), 'keydown', event => {
  if (event.key === 'Escape') { $('search').focus(); suggestionsOpen = false; renderSearchSuggestions(); }
  if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
  event.preventDefault();
  const buttons = [...$('search-suggestions').querySelectorAll('button')];
  const index = buttons.indexOf(document.activeElement);
  const next = index + (event.key === 'ArrowDown' ? 1 : -1);
  if (next < 0) $('search').focus();
  else buttons[next % buttons.length]?.focus();
});
listen($('topic-search'), 'input', renderTopicOptions);
listen($('topic-options'), 'change', event => {
  const id = event.target.dataset.interest;
  if (!id || !topicDictionary[id]) return;
  draft.interests = event.target.checked ? [...new Set([...draft.interests, id])] : draft.interests.filter(value => value !== id);
  draft.subject = 'Everything';
  populateFilters();
});
listen($("close-search"), "click", () => {
  state.query = "";
  $("search").value = "";
  toggleSearch(false);
  changed();
  $("toggle-search").focus();
});
listen($("clear-all"), "click", clearAll);
listen($("toggle-map"), "click", () =>
  setView(state.view === "map" ? "list" : "map"),
);
listen($("map-building-classes"), "click", () => {
  if (!mapSelection || $("map-building-classes").disabled) return;
  state.building = { codes: [...mapSelection.codes], name: mapSelection.name };
  changed();
  setView("list");
  $("results-title").focus({ preventScroll: true });
});
listen($("dismiss-map-building"), "click", () => {
  map?.clearSelection();
  $("explore-map").querySelector("canvas")?.focus({ preventScroll: true });
});
listen($("preview-info"), "click", () => $("about-preview").showModal());
listen($("close-preview"), "click", () => $("about-preview").close());
listen($("retry-data"), "click", refreshCatalogue);
listen($("copy-invite"), "click", copyInvitation);
listen($("send-invite"), "click", sendInvitation);
listen($("invite-welcome"), "cancel", (event) => {
  event.preventDefault();
  dismissInvitation();
});
listen($("close-share"), "click", () => $("share-dialog").close());
listen($("filters-dialog"), "close", () => {
  if ($("filters-dialog").open) return;
  locationRequest++;
  $("use-location").disabled = false;
});
listen($("location-building"), "change", (event) => {
  locationRequest++;
  $("use-location").disabled = false;
  const point = event.target.value ? buildings[event.target.value] : CAMPUS_CENTRE;
  if (point && setDraftPin(point)) $("location-status").textContent = "";
});
listen($("move-pin"), "click", async () => {
  if (!$("filter-form").reportValidity()) return;
  applyFilters();
  setView("map");
  if (await ensureMap()) map.focusLocation();
});
listen($("use-location"), "click", () => {
  const request = ++locationRequest;
  if (!navigator.geolocation) {
    $("location-status").textContent = "Location is unavailable. Choose a starting building.";
    return;
  }
  $("use-location").disabled = true;
  $("location-status").textContent = "Finding your location…";
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      if (disposed || request !== locationRequest || !$("filters-dialog").open) return;
      $("use-location").disabled = false;
      const ok = setDraftPin({ lat: coords.latitude, lng: coords.longitude });
      $("location-status").textContent = ok
        ? "Location found. Apply filters to update your walking estimates."
        : "You appear to be outside the campus area. Choose a starting building.";
    },
    () => {
      if (disposed || request !== locationRequest || !$("filters-dialog").open) return;
      $("use-location").disabled = false;
      $("location-status").textContent = "Location could not be used. Your starting point stayed in place; choose a building or set it on the map.";
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 },
  );
});
listen($("lecture-detail"), "close", () => {
  // A queued close event can arrive after a shared detail has been reopened.
  if ($("lecture-detail").open) return;
  state.selected = null;
  syncURL();
  if (
    lastDetailTrigger?.isConnected &&
    !lastDetailTrigger.closest("#lecture-detail")
  )
    lastDetailTrigger.focus({ preventScroll: true });
});
listen(document, "click", (event) => {
  if (!event.target.closest('#search-panel, #toggle-search')) {
    suggestionsOpen = false;
    renderSearchSuggestions();
  }
  const venue = event.target.closest('[data-search-building], [data-search-map]');
  if (venue) selectSearchBuilding(venue.dataset.searchBuilding || venue.dataset.searchMap, !!venue.dataset.searchMap);
  const programSuggestion = event.target.closest('[data-search-program]');
  if (programSuggestion) selectSearchProgram(programSuggestion.dataset.searchProgram);
  const topicSuggestion = event.target.closest('[data-search-topic]');
  if (topicSuggestion) selectSearchTopic(topicSuggestion.dataset.searchTopic);
  const moreTopics = event.target.closest('[data-more-topics]');
  if (moreTopics) openTopicsPicker(moreTopics.dataset.moreTopics === 'clear-search');
  if (event.target.closest('[data-sonderate-filters]')) {
    $('lecture-detail').close();
    openFilters();
  }
  if (event.target.closest('#next-mission')) {
    missionIndex = (missionIndex + 1) % tinyMissions.length;
    $('sonderate-mission-text').textContent = tinyMissions[missionIndex];
  }
  const removeInterest = event.target.closest('[data-remove-interest]');
  if (removeInterest) { state.interests = state.interests.filter(id => id !== removeInterest.dataset.removeInterest); changed(); }
  const removeDraft = event.target.closest('[data-remove-draft-interest]');
  if (removeDraft) { draft.interests = draft.interests.filter(id => id !== removeDraft.dataset.removeDraftInterest); populateFilters(); }
  const category = event.target.closest('[data-browse-subject]');
  if (category) {
    state.query = '';
    state.interests = [];
    state.subject = category.dataset.browseSubject;
    $('search').value = '';
    toggleSearch(false, false);
    changed();
  }
  if (event.target.closest("#retry-component")) ensureMap();
  const levelButton = event.target.closest('[data-course-level]');
  if (levelButton) {
    const value = levelButton.dataset.courseLevel;
    const level = Number(value);
    draft.levels = value === 'all' ? [] : draft.levels.includes(level)
      ? draft.levels.filter(selected => selected !== level)
      : [...draft.levels, level].sort((a, b) => a - b);
    populateFilters();
  }
  const topic = event.target.closest("[data-topic]");
  if (topic) {
    draft.subject = topic.dataset.topic;
    draft.interests = [];
    populateFilters();
  }
  const browse = event.target.closest("[data-browse]");
  if (browse) {
    state.query = browse.dataset.browse;
    changed();
    $("search").value = state.query;
    toggleSearch(true);
    $("search").focus({ preventScroll: true });
    $("search").select();
  }
  const open = event.target.closest("[data-open]");
  if (open) {
    if (open.matches('#lecture-list .lecture-open') && state.view === 'map') {
      const id = open.dataset.open;
      mapPreviewId = mapPreviewId === id ? null : id;
      if (mapPreviewId) {
        if (mobile.matches) mapSheet?.setMode('half');
        focusBuilding(all.find(meeting => meeting.id === id).building);
      }
      render();
      document.querySelector(`#lecture-list [data-open="${CSS.escape(id)}"]`)?.focus({ preventScroll: true });
    } else openLecture(open.dataset.open);
  }
  if (event.target.closest("#close-detail")) $("lecture-detail").close();
  if (event.target.closest("#sonderate-again")) sonderate();
  if (event.target.closest("#similar-classes")) showSimilarClasses();
  if (event.target.closest("#back-to-class")) openLecture(state.selected);
  if (event.target.closest("#share-class")) shareClass();
  if (event.target.closest("#accept-invitation")) acceptInvitation();
  if (event.target.closest("#close-invitation, #browse-instead")) dismissInvitation();
  if (event.target.closest("#show-more")) {
    visibleLimit += 40;
    render();
  }
  if (event.target.closest("[data-empty-filters]")) openFilters();
  if (event.target.closest("#reset-empty")) clearAll();
  if (event.target.closest("#empty-all-day")) {
    chooseTimeMode(state, "day");
    changed();
  }
  if (event.target.closest("#adjust-filters")) {
    $("lecture-detail").close();
    openFilters();
  }
  if (event.target.closest("#show-building, #building-day")) {
    const l = all.find((item) => item.id === state.selected);
    if (!l) return;
    if (event.target.closest("#building-day")) {
      $("lecture-detail").close();
      state.selected = null;
      state.timeMode = "day";
      state.day = l.day;
      state.term = l.term;
      followClock = false;
      state.query = '';
      $('search').value = '';
      toggleSearch(false, false);
      state.building = { codes: [l.building], name: buildingName(l.building) };
      setView(mobile.matches ? 'list' : 'map');
      if (!mobile.matches) focusBuilding(l.building);
      changed();
      $('results-title').focus({ preventScroll: true });
    } else {
      if (mobile.matches) {
        $('lecture-detail').close();
        state.selected = null;
      }
      setView('map');
      focusBuilding(l.building);
    }
  }
});
listen(document, "keydown", (event) => {
  if (event.key === 'Escape' && !document.querySelector('dialog:modal') && $('lecture-detail').open && $('lecture-detail').classList.contains('map-detail-docked')) {
    event.preventDefault();
    $('lecture-detail').close();
  }
  if (
    event.key === "/" &&
    !document.querySelector("dialog[open]") &&
    !["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement.tagName)
  ) {
    event.preventDefault();
    toggleSearch(true);
  }
});
for (const dialog of document.querySelectorAll('dialog.sheet')) {
  let backdropStart = null;
  const outside = event => {
    const rect = dialog.getBoundingClientRect();
    return event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom);
  };
  listen(dialog, 'pointerdown', event => {
    backdropStart = event.button === 0 && outside(event) ? {x: event.clientX, y: event.clientY} : null;
  });
  listen(dialog, 'pointercancel', () => { backdropStart = null; });
  listen(dialog, 'click', event => {
    const dismiss = backdropStart && outside(event) && Math.hypot(event.clientX - backdropStart.x, event.clientY - backdropStart.y) < 10;
    backdropStart = null;
    if (!dismiss) return;
    if (dialog.id === 'invite-welcome') dismissInvitation();
    else dialog.close();
  });
}
listen(window, "hashchange", () => {
  userChanged = true;
  followClock = false;
  restore(location.hash);
});
function presentDetail() {
  const dialog = $('lecture-detail');
  const docked = state.view === 'map' && !mobile.matches;
  // close/show switches native dialog modality; queued close events are ignored while reopened.
  if (dialog.open && dialog.matches(':modal') === docked) dialog.close();
  dialog.classList.toggle('map-detail-docked', docked);
  const host = docked ? document.querySelector('.class-pane') : $('sonder');
  if (dialog.parentElement !== host) host.append(dialog);
  syncDetailLayout();
  if (!dialog.open) docked ? dialog.show() : dialog.showModal();
}
function syncDetailLayout() {
  const onMap = state.view === 'map';
  if ($('show-building')) $('show-building').hidden = onMap;
  if ($('sonderate-again')) $('sonderate-again').parentElement.prepend($('sonderate-again'));
  const similar = $('similar-classes');
  if (similar) {
    similar.hidden = !onMap && $('lecture-detail').classList.contains('sonderate-detail');
    similar.className = onMap ? 'ink-button' : 'text-button';
    if (onMap) $('share-class').before(similar);
    else similar.parentElement.append(similar);
  }
  const compact = mobile.matches || $('lecture-detail').classList.contains('map-detail-docked');
  const context = $('sonderate-context');
  if (context) {
    context.classList.toggle('compact-context', compact);
    if (compact) $('detail-title').after(context);
    else $('lecture-detail').append(context);
    const explainer = $('sonderate-explainer');
    const mission = context.querySelector('.sonderate-mission');
    explainer.open = !mobile.matches;
    explainer.querySelector('summary').innerHTML = `${mobile.matches ? 'How this pick works' : 'How it works + your mission'} ${icon('chevron')}`;
    if (mission) {
      if (mobile.matches) explainer.before(mission);
      else explainer.append(mission);
    }
  }
  const description = document.querySelector(".detail-description");
  const facts = document.querySelector(".detail-body dl");
  if (!description || !facts) return;
  if (compact) description.before(facts);
  else facts.before(description);
}
function syncMapControls() {
  const onMap = mobile.matches && state.view === 'map';
  const toolbar = $('mobile-map-toolbar');
  toolbar.hidden = !onMap;
  const times = document.querySelector('.time-browse');
  if (onMap) toolbar.append($('open-filters'), times, $('time-summary'), $('toggle-search'));
  else {
    document.querySelector('.workspace-top').prepend($('open-filters'), times);
    document.querySelector('.main-actions').append($('toggle-search'));
    if (mobile.matches) document.querySelector('.main-actions').prepend($('time-summary'));
    else times.after($('time-summary'));
  }
  $('time-soon').textContent = onMap ? 'Soon' : 'Starting soon';
  $('toggle-search').querySelector('span').textContent = mobile.matches ? 'Search' : 'Find a class';
  $('toggle-search').setAttribute('aria-label', mobile.matches ? 'Search campus' : 'Find a class');
}
function syncMobileLayout() {
  syncMapControls();
  const action = $("sonderate");
  const controls = document.querySelector(".workspace-top");
  controls.prepend($("open-filters"));
  $('search').placeholder = mobile.matches ? 'Search campus…' : 'Course, program, topic, building or room…';
  syncSearchLayout();
  if (mobile.matches) {
    document.querySelector(".main-actions").prepend($("time-summary"));
    document.querySelector('.brand-lockup').append($('result-count'));
    document.querySelector('.mobile-switch').append(action, $('toggle-map'));
  } else {
    controls.querySelector(".time-browse").after($("time-summary"));
    $("time-summary").after($("result-count"));
    const toolbar = document.querySelector(".main-actions");
    toolbar.prepend(action);
    toolbar.append($("toggle-map"));
  }
  syncMapControls();
  if ($("lecture-detail").open) presentDetail();
  else syncDetailLayout();
  render();
  syncMobileViewport();
}
function syncMobileViewport() {
  const viewport = window.visualViewport;
  const height = viewport?.height || innerHeight;
  const keyboardInset = Math.max(
    0,
    innerHeight - height - (viewport?.offsetTop || 0),
  );
  const editing = document.activeElement?.matches(
    'input:not([type="range"]):not([type="checkbox"]), textarea',
  );
  // Keep the keyboard layout during a tap until the OS actually restores the viewport.
  const keyboardVisible = mobile.matches && keyboardInset > 140 &&
    (!!editing || document.body.classList.contains('mobile-keyboard'));
  document.body.classList.toggle(
    "mobile-keyboard",
    keyboardVisible,
  );
  document.documentElement.style.setProperty(
    "--mobile-viewport-height",
    `${height}px`,
  );
  document.documentElement.style.setProperty(
    "--mobile-keyboard-inset",
    `${keyboardVisible ? keyboardInset : 0}px`,
  );
  if (mobile.matches) requestAnimationFrame(() => {
    if (disposed) return;
    const remaining = height - $('search-panel').getBoundingClientRect().bottom - 12;
    document.documentElement.style.setProperty('--search-results-height', `${Math.max(80, remaining)}px`);
  });
  if (mobile.matches && editing) {
    const input = document.activeElement;
    requestAnimationFrame(() => {
      if (disposed || input !== document.activeElement) return;
      const body = input.closest('dialog[open] .sheet-body');
      if (!body) return;
      const field = input.getBoundingClientRect(), area = body.getBoundingClientRect();
      if (field.bottom > area.bottom - 8) body.scrollTop += field.bottom - area.bottom + 8;
      else if (field.top < area.top + 8) body.scrollTop -= area.top - field.top + 8;
    });
  }
}
listen(mobile, "change", syncMobileLayout);
if (window.visualViewport)
  listen(window.visualViewport, "resize", syncMobileViewport);
listen(window, "resize", syncMobileViewport);
listen(document, "focusin", syncMobileViewport);
listen(document, "focusout", () =>
  requestAnimationFrame(() => {
    if (!disposed) syncMobileViewport();
  }),
);
syncMobileLayout();
window.sonderPreview = {
  get map() {
    return map;
  },
  state,
  get liveData() {
    return liveData;
  },
};
const hadSharedState = incomingHash.startsWith("#v=1");
populateLocations();
$("search").value = state.query;
toggleSearch(!!state.query, false);
setView(state.view);
render();
if (invitationId) showInvitation(true);
else if (state.selected) openLecture(state.selected);
refreshCatalogue();
function refreshClock() {
  if (disposed || !liveData || document.hidden || document.querySelector('dialog[open]')) return;
  if (followClock) {
    const next = catalogueDefaults(new Date(), all);
    Object.assign(defaults, next);
    Object.assign(state, { day: next.day, term: next.term, gapStart: next.gapStart, gapEnd: next.gapEnd });
    syncURL();
  }
  render();
}
function scheduleClock() {
  clockTimer = setTimeout(() => { refreshClock(); scheduleClock(); }, 60000 - Date.now() % 60000 + 25);
}
scheduleClock();
listen(document, 'visibilitychange', refreshClock);
listen(window, 'focus', refreshClock);
if (import.meta.hot)
  import.meta.hot.dispose(() => {
    disposed = true;
    lifecycle.abort();
    clearTimeout(clockTimer);
    mapSheet?.dispose();
    map?.dispose();
    document
      .querySelectorAll("dialog[open]")
      .forEach((dialog) => dialog.close());
  });
