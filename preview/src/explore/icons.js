const paths = {
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  diagonal: '<path d="M6 18 18 6M6 6h12v12"/>',
  shuffle:
    '<path d="M3 6h3c5 0 7 12 12 12h3m-4-4 4 4-4 4M3 18h3c2 0 4-3 5-6m3-4c1-1 2-2 4-2h3m-4-4 4 4-4 4"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4Z"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  walk: '<circle cx="14" cy="4" r="2"/><path d="m8 21 4-9 3 4v5M5 12l4-4 5 1 3 4h4M12 8l-1 5"/>',
  chevron: '<path d="m8 10 4 4 4-4"/>',
  orbit:
    '<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="11" ry="5" transform="rotate(-35 12 12)"/><path d="m4 2 1 3 3 1-3 1-1 3-1-3-3-1 3-1Z"/>',
  mind: '<path d="M12 5c-4-6-10 0-7 3-5 1-4 7 0 7-2 5 5 8 7 3 3 5 9 1 7-3 4-1 5-6 0-7 2-5-4-8-7-3Zm0 0v13M5 8l3 2m11 5-3-2M5 15l3-2m11-5-3 2"/>',
  world:
    '<circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20M4 6h16M4 18h16"/>',
  asterisk: '<path d="M12 1v22M1 12h22M4 4l16 16M4 20 20 4"/>',
  code: '<path d="m7 5-6 7 6 7m10-14 6 7-6 7M14 3l-4 18"/>',
  music:
    '<path d="M9 18V5l12-3v13M9 9l12-3"/><ellipse cx="5" cy="18" rx="4" ry="3"/><ellipse cx="17" cy="15" rx="4" ry="3"/>',
  map: '<path d="m2 5 6-3 8 3 6-3v17l-6 3-8-3-6 3Zm6-3v17m8-14v17"/>',
  list: '<path d="M8 5h14M8 12h14M8 19h14M2 5h1M2 12h1M2 19h1"/>',
};
export const icon = (name, cls = "") =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.asterisk}</svg>`;
