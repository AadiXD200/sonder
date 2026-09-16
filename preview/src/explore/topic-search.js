const normalize = value => String(value).normalize('NFKC').trim().toLowerCase().replace(/\s+/g, ' ');

export function searchTopics(query, dictionary) {
  const needle = normalize(query);
  if (needle.length < 2) return [];
  return Object.entries(dictionary).map(([id, topic]) => {
    const names = [id, topic.label, ...(topic.synonyms || [])].map(normalize);
    const score = names.some(name => name === needle) ? 0
      : names.some(name => name.split(/[^\p{L}\p{N}]+/u).some((_, i, words) => words.slice(i).join(' ').startsWith(needle))) ? 1 : 2;
    return { id, label: topic.label, score };
  }).filter(topic => topic.score < 2)
    .sort((a, b) => a.score - b.score || a.label.localeCompare(b.label));
}
