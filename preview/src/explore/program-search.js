import data from './programs.json' with { type: 'json' };
import { searchTopics } from './topic-search.js';

// Arts & Science memberships are the course headings in each official area listing,
// retrieved 2026-09-16. Engineering areas use their departmental designators.
// These groups support discovery; they do not encode degree requirements.
const shortNames = {
  'Dr. David Chu Program In Contemporary Asian Studies': 'Contemporary Asian Studies',
  'Mark S. Bonham Centre for Sexual Diversity Studies': 'Sexual Diversity Studies',
  'Cinema Studies Institute': 'Cinema Studies',
  'School of the Environment': 'Environmental Studies',
  'Munk School of Global Affairs and Public Policy': 'Global Affairs & Public Policy',
};
export const programs = data.map(program => ({ ...program, fullName: program.label,
  label: shortNames[program.label] || program.label.replace(/^Centre for /, '').replace(/ and /g, ' & '),
  courseSet: new Set(program.courses) }));
export const programById = new Map(programs.map(program => [program.id, program]));
const normalize = value => value.trim().toLowerCase().replace(/&/g, 'and').replace(/\s+/g, ' ');
const names = new Map(programs.flatMap(program => [program.label, program.fullName, ...(program.aliases || [])].map(name => [normalize(name), program])));
const searchIndex = Object.fromEntries(programs.map(program => [program.id, { label: program.label, synonyms: [program.fullName, ...program.prefixes, ...(program.aliases || [])] }]));
export const resolveProgram = query => names.get(normalize(query));
export const searchPrograms = query => searchTopics(query, searchIndex).map(result => programById.get(result.id));
