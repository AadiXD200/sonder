/* Sonder — landing. Drives the live board off SONDER (see _data.js).
   grid: {1..5 = Mon..Fri} -> 56 slots of 15 min, starting 08:00.
   pool: real meetings, st/en in minutes past midnight, d = 1..5.        */

(function () {
  var D = (typeof SONDER !== "undefined") ? SONDER : window.SONDER;
  if (!D) return;

  var SLOT0 = 8 * 60;   // first slot starts 08:00
  var SLOT = 15;        // minutes per slot
  var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  var $ = function (id) { return document.getElementById(id); };

  /* ── where are we in the week ─────────────────────────────── */
  // Weekends and the small hours have no lectures. Rather than show a
  // dead zero, we show the next weekday morning and say so plainly.
  function campusNow() {
    var n = new Date();
    var d = n.getDay(), mins = n.getHours() * 60 + n.getMinutes();
    var live = true;

    if (d === 0 || d === 6) { d = 1; mins = 11 * 60; live = false; }
    else if (mins < SLOT0 + 60) { mins = 11 * 60; live = false; }
    else if (mins > 20 * 60) {
      d = d === 5 ? 1 : d + 1; mins = 11 * 60; live = false;
    }
    return { day: d, mins: mins, live: live };
  }

  function slotOf(mins) {
    return Math.max(0, Math.min(55, Math.floor((mins - SLOT0) / SLOT)));
  }

  var T = campusNow();
  var row = D.grid[String(T.day)] || [];
  var count = row[slotOf(T.mins)] || 0;

  /* ── what's on at that moment ─────────────────────────────── */
  var onNow = (D.pool || []).filter(function (m) {
    return m.d === T.day && m.st <= T.mins && m.en > T.mins;
  });
  // If the exact instant is thin (a gap between class blocks), widen to
  // the whole day so the board always has something real to show.
  if (onNow.length < 4) {
    onNow = (D.pool || []).filter(function (m) { return m.d === T.day; });
  }

  // The pool is a 260-course sample, so its distinct-building count is far
  // below the truth. Scale the sample's buildings-per-lecture ratio up to the
  // real concurrent count, capped at the number of buildings that exist.
  var sampleB = new Set(onNow.map(function (m) { return m.b; })).size;
  var nBuild = Math.min(
    D.nbuildings,
    Math.max(sampleB, Math.round(count * (sampleB / Math.max(1, onNow.length))))
  );

  /* ── paint the numbers ────────────────────────────────────── */
  function fmt(mins) {
    var h = Math.floor(mins / 60), m = mins % 60;
    var ap = h >= 12 ? 'pm' : 'am';
    var hh = h % 12; if (hh === 0) hh = 12;
    return hh + ':' + (m < 10 ? '0' : '') + m + ap;
  }

  $('today').textContent = DAYS[T.day].toUpperCase() + ' ' + fmt(T.mins);
  $('board-clock').textContent = DAYS[T.day].slice(0, 3) + ' ' + fmt(T.mins);
  $('nbuild').textContent = nBuild || D.nbuildings;
  $('closeC').textContent = (D.ncourses || 0).toLocaleString();
  $('closeB').textContent = D.nbuildings;
  if (D.nmeetings) $('closeM').textContent = D.nmeetings.toLocaleString();

  if (!T.live) {
    document.querySelector('.live').innerHTML =
      '<i aria-hidden="true"></i>' + DAYS[T.day].slice(0, 3) + ' 11am';
    $('board-label').innerHTML =
      "campus is quiet right now &mdash; here's what " + DAYS[T.day] +
      " morning looks like, and you're not in any of it.";
  }

  /* ── count-up ─────────────────────────────────────────────── */
  var el = $('count');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || count === 0) {
    el.textContent = count;
  } else {
    var t0 = null, DUR = 1100;
    requestAnimationFrame(function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / DUR);
      var e = 1 - Math.pow(1 - p, 3);            // ease-out cubic
      el.textContent = Math.round(count * e);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = count;
    });
  }

  /* ── departure board ──────────────────────────────────────── */
  var ROWS = 4;
  var ticker = $('ticker');

  // Shuffle once so every visit sees a different slice of campus.
  var deck = onNow.slice();
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp;
  }

  function rowEl(m) {
    var li = document.createElement('li');

    var code = document.createElement('span');
    code.className = 't-code';
    code.textContent = m.c.replace(/H1$|Y1$/, '');

    var name = document.createElement('span');
    name.className = 't-name';
    name.textContent = m.t;

    var where = document.createElement('span');
    where.className = 't-where';
    where.textContent = m.bn;

    li.append(code, name, where);
    return li;
  }

  if (!deck.length) {
    ticker.remove();
  } else {
    var head = 0;
    for (var k = 0; k < Math.min(ROWS, deck.length); k++) {
      ticker.append(rowEl(deck[head++ % deck.length]));
    }

    // Cycle one row at a time — a board that flips, not a carousel.
    if (!reduce && deck.length > ROWS) {
      setInterval(function () {
        if (document.hidden) return;
        if (ticker.firstChild) ticker.firstChild.remove();
        ticker.append(rowEl(deck[head++ % deck.length]));
      }, 2600);
    }
  }
})();
