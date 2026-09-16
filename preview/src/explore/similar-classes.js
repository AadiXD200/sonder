const genericWords = new Set(['introduction', 'introductory', 'fundamentals', 'principles', 'studies', 'topics', 'course', 'special', 'selected', 'advanced', 'with', 'from', 'their', 'this', 'that']);
const words = title => new Set((title.toLowerCase().match(/[\p{L}]{4,}/gu) || []).filter(word => !genericWords.has(word)));

// Rank the already-filtered catalogue using its existing metadata. No network work.
export function similarClasses(source, candidates, dictionary, limit = 8) {
  const sourceTopics = new Set(source.topics || []), sourceWords = words(source.title);
  const prefix = source.code.match(/^[A-Z]+/)?.[0];
  const byCourse = new Map();
  for (const meeting of candidates) {
    if (meeting.code === source.code) continue;
    const sharedTopics = [...new Set(meeting.topics || [])].filter(id => sourceTopics.has(id));
    const sharedWords = [...words(meeting.title)].filter(word => sourceWords.has(word));
    const sameDepartment = !!prefix && meeting.code.match(/^[A-Z]+/)?.[0] === prefix;
    const sameSubject = !!source.subject && meeting.subject === source.subject;
    const score = sharedTopics.length * 50 + Number(sameDepartment) * 15 + (sharedWords.length >= 2 ? sharedWords.length * 3 : 0) + Number(sameSubject);
    if (!score) continue;
    const reason = sharedTopics.length ? sharedTopics.slice(0, 2).map(id => dictionary[id]?.label || id).join(' + ')
      : sameDepartment ? `${prefix} courses` : sharedWords.length >= 2 ? 'Shared themes' : `Same subject · ${source.subject}`;
    const previous = byCourse.get(meeting.code);
    if (!previous || score > previous.score || (score === previous.score && meeting.start < previous.meeting.start))
      byCourse.set(meeting.code, { meeting, reason, score });
  }
  return [...byCourse.values()].sort((a, b) => b.score - a.score || a.meeting.start - b.meeting.start || a.meeting.code.localeCompare(b.meeting.code)).slice(0, limit);
}
