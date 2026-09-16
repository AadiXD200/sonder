// A persistent course sheet. Only its handle captures drags; the map and list
// keep their own gestures. The visible map resizes above the sheet.
export function createMobileMapSheet({ stage, handle, enabled, isEmpty, onChangeFilters }) {
  const lifecycle = new AbortController();
  const shortLandscape = matchMedia('(min-width: 500px) and (max-width: 760px) and (max-height: 500px)');
  let mode = 'half', drag = null, lastDrag = -Infinity;
  const sizes = () => {
    const height = stage.clientHeight;
    return { peek: 64, half: Math.min(300, Math.max(190, height * .35)), full: height - Math.min(180, height * .28) };
  };
  function sync() {
    const active = enabled();
    const empty = isEmpty();
    if (empty && mode === 'full') mode = 'half';
    handle.disabled = active && shortLandscape.matches && !empty;
    document.body.classList.toggle('mobile-map-open', active);
    document.body.dataset.mapSheet = mode;
    if (!active) { stage.style.removeProperty('--map-sheet-height'); return; }
    stage.style.setProperty('--map-sheet-height', `${sizes()[mode]}px`);
    handle.setAttribute('aria-expanded', String(mode !== 'peek'));
    handle.setAttribute('aria-label', empty ? 'Change filters' : mode === 'full' ? 'More map' : 'More courses');
    handle.querySelector('.map-sheet-action').textContent = empty ? 'Change filters' : mode === 'full' ? 'More map ↓' : 'More courses ↑';
  }
  function setMode(next) { mode = next; sync(); }
  const listen = (type, handler) => handle.addEventListener(type, handler, { signal: lifecycle.signal });
  listen('click', () => {
    if (performance.now() - lastDrag < 400) return;
    if (isEmpty()) { onChangeFilters(); return; }
    // Taps always switch predictably between browsing and the shared map view.
    // The optional drag can also tuck the list away to its header.
    setMode(mode === 'half' ? 'full' : 'half');
  });
  listen('pointerdown', event => {
    if (!enabled() || handle.disabled || isEmpty() || event.button !== 0) return;
    drag = { id: event.pointerId, y: event.clientY, height: sizes()[mode], moved: false };
    handle.setPointerCapture(event.pointerId);
  });
  listen('pointermove', event => {
    if (!drag || event.pointerId !== drag.id) return;
    const delta = drag.y - event.clientY;
    if (Math.abs(delta) > 8) drag.moved = true;
    if (!drag.moved) return;
    const limits = sizes();
    stage.style.setProperty('--map-sheet-height', `${Math.max(limits.peek, Math.min(limits.full, drag.height + delta))}px`);
  });
  listen('pointerup', event => {
    if (!drag || event.pointerId !== drag.id) return;
    if (drag.moved) {
      lastDrag = performance.now();
      const height = drag.height + drag.y - event.clientY;
      mode = Object.entries(sizes()).sort((a, b) => Math.abs(a[1] - height) - Math.abs(b[1] - height))[0][0];
    }
    drag = null;
    sync();
  });
  listen('pointercancel', () => { drag = null; sync(); });
  const observer = new ResizeObserver(() => { if (!drag) sync(); });
  observer.observe(stage);
  return { sync, setMode, dispose() { lifecycle.abort(); observer.disconnect(); } };
}
