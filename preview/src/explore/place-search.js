import { venueName } from './venue-names.js';

const words = value => String(value ?? '').normalize('NFKD')
  .replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const compact = value => words(value).replace(/\s/g, '');

export function searchBuildings(query, buildings) {
  const text = words(query);
  if (!text) return [];
  const exactCode = Object.keys(buildings).find(code => words(code) === text);
  if (exactCode) return [{ code: exactCode, name: venueName(exactCode, buildings), score: 4 }];
  const tokens = text.split(/\s+/);
  return Object.entries(buildings).flatMap(([code, building]) => {
    const name = venueName(code, buildings);
    const aliases = [name, building.name, building.short].filter(Boolean).map(words);
    const score = aliases.some(alias => alias === text) ? 3
      : aliases.some(alias => alias.startsWith(text) || alias.includes(` ${text}`)) ? 2
      : aliases.some(alias => tokens.every(token => alias.split(' ').some(word => word.startsWith(token)))) ? 1 : 0;
    return score ? [{ code, name, score }] : [];
  }).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

// Compile once per search, rather than scanning the venue dictionary per class.
export function placeMatcher(query, buildings) {
  const text = words(query);
  const codes = new Set(searchBuildings(query, buildings).map(b => b.code));
  let room = '', roomCodes = null;
  if (/^[a-z]?\d+[a-z]?$/.test(text)) room = compact(text);
  else {
    const joined = text.match(/^([a-z]{2})\s*(?:room\s*)?([a-z]?\d+[a-z]?)$/);
    const named = text.match(/^(.+?)\s+(?:room\s+)?([a-z]?\d+[a-z]?)$/);
    const match = joined || named;
    if (match) {
      roomCodes = new Set(searchBuildings(match[1], buildings).map(b => b.code));
      room = compact(match[2]);
    }
  }
  return meeting => codes.has(meeting.building) || !!room &&
    compact(meeting.room) === room && (!roomCodes || roomCodes.has(meeting.building));
}
