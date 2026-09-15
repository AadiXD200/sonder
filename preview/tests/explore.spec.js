import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";
const fixtureMeetings = JSON.parse(
  await readFile(
    new URL("../src/explore/fixture-meetings.json", import.meta.url),
  ),
);
const lectures = fixtureMeetings.slice(0, 8),
  laterLectures = fixtureMeetings.slice(8);
import {
  initialState,
  createSearchIndex,
  findMeetings,
  walkMinutes,
  encodeState,
  decodeState,
  CAMPUS_CENTRE,
} from "../src/explore/model.js";
import { toMapPoint, fromMapPoint } from "../src/campus-coordinates.js";
const buildings = JSON.parse(
  await readFile(
    new URL("../src/explore/fixture-buildings.json", import.meta.url),
  ),
);
const topics = JSON.parse(
  await readFile(
    new URL("../src/explore/fixture-topics.json", import.meta.url),
  ),
);
const all = [...lectures, ...laterLectures],
  index = createSearchIndex(topics);
test.beforeEach(async ({ page }) => {
  await page.route("**/data/lectures.json", (r) =>
    r.fulfill({ status: 404, body: "Not published" }),
  );
});
async function open(page, state) {
  await page.goto("/explore.html" + (state ? encodeState(state) : ""));
  await expect(page.locator(".class-ticket").first()).toBeVisible();
}
test("topic resolution, ranking, gap boundaries, term/day and unknown capacities", () => {
  const state = { ...initialState(), gapStart: 640, gapEnd: 960 };
  const noisy = {
    ...lectures[0],
    id: "noise",
    code: "AIR100H1",
    title: "Aircraft Flight",
    start: 650,
    end: 710,
    topics: [],
  };
  const ai = findMeetings(
    [...all, noisy],
    { ...state, query: " AI " },
    buildings,
    index,
  );
  expect(ai[0].code).toBe("CSC311H1");
  expect(ai.every((m) => ["CSC108H1", "CSC311H1"].includes(m.code))).toBe(true);
  expect(
    findMeetings(all, { ...state, query: "CSC311" }, buildings, index).map(
      (m) => m.code,
    ),
  ).toEqual(["CSC311H1"]);
  expect(
    findMeetings(
      all,
      { ...state, query: "unlisted interest" },
      buildings,
      index,
    ),
  ).toEqual([]);
  const gap = findMeetings(
    all,
    { ...state, gapStart: 840, gapEnd: 900 },
    buildings,
    index,
  );
  expect(gap.length).toBeGreaterThan(0);
  expect(gap.every((m) => m.start >= 840 && m.end <= 900)).toBe(true);
  const day = findMeetings(
    all,
    { ...state, gapStart: 650, gapEnd: 720, building: { codes: ["BA"] } },
    buildings,
    index,
  );
  expect(day.some((m) => m.start === 840)).toBe(true);
  expect(day.every((m) => m.day === 2 && m.term === "F")).toBe(true);
  const winter = findMeetings(all, { ...state, term: "S" }, buildings, index);
  expect(winter.length).toBeGreaterThan(0);
  expect(winter.every((m) => m.term === "S")).toBe(true);
  expect(
    findMeetings(all, state, buildings, index).some((m) => m.seats === null),
  ).toBe(true);
  expect(
    findMeetings(all, { ...state, minSeats: 100 }, buildings, index).every(
      (m) => m.seats !== null && m.seats >= 100,
    ),
  ).toBe(true);
  expect(
    findMeetings(lectures.slice(0, 5), state, buildings, index).map(
      (m) => m.seats,
    ),
  ).toEqual([1500, 450, 300, 200, 180]);
});
test("hash validation and coordinate round trips", () => {
  const state = {
    ...initialState(),
    query: "<img src=x onerror=alert(1)>",
    pin: { lat: 43.6611, lng: -79.3955 },
    selected: all[0].id,
    building: { codes: ["BA"], name: buildings.BA.name },
    gapStart: 840,
    gapEnd: 960,
    day: 3,
    term: "S",
    view: "map",
    minSeats: 100,
  };
  expect(decodeState(encodeState(state), buildings, all)).toEqual(state);
  expect(
    decodeState(
      "#v=1&gapStart=99999&gapEnd=-1&day=6&term=X&walk=99&pin=0,0&class=bad&b=__proto__",
      buildings,
      all,
    ),
  ).toEqual(initialState());
  expect(walkMinutes(CAMPUS_CENTRE, CAMPUS_CENTRE)).toBe(0);
  expect(walkMinutes(CAMPUS_CENTRE, buildings.BA)).toBe(5);
  expect(walkMinutes(CAMPUS_CENTRE, null)).toBeNull();
  expect(toMapPoint(CAMPUS_CENTRE)).toEqual({ x: 0, z: 0 });
  for (const b of Object.values(buildings)) {
    const p = fromMapPoint(toMapPoint(b));
    expect(p.lat).toBeCloseTo(b.lat, 9);
    expect(p.lng).toBeCloseTo(b.lng, 9);
  }
});
test("list stays light, no automatic location or storage, and shared details reload", async ({
  page,
}) => {
  const requests = [],
    errors = [];
  page.on("request", (r) => requests.push(r.url()));
  page.on("pageerror", (e) => errors.push(e.message));
  await page.addInitScript(() => {
    window.locationCalls = 0;
    Object.defineProperty(navigator, "geolocation", {
      value: {
        getCurrentPosition() {
          window.locationCalls++;
        },
      },
    });
  });
  await open(page);
  expect(
    requests.some((url) => /campus\.bin|ground\.json|campus-map\.js/.test(url)),
  ).toBe(false);
  expect(await page.evaluate(() => window.locationCalls)).toBe(0);
  await page.locator("#toggle-search").click();
  await page.locator("#search").fill("computer science");
  await expect(page.locator(".class-ticket")).toHaveCount(1);
  await expect(page.locator(".ticket-walk")).toContainText("~5 min");
  await page.locator(".lecture-open").click();
  await expect(page.locator("#lecture-detail")).toBeVisible();
  expect(page.url()).toContain("class=");
  await page.reload();
  await expect(page.locator("#detail-title")).toHaveText(
    "Introduction to Computer Programming",
  );
  await page.locator("#close-detail").click();
  await expect
    .poll(() => new URL(page.url()).hash.includes("class="))
    .toBe(false);
  expect(
    await page.evaluate(() => [localStorage.length, sessionStorage.length]),
  ).toEqual([0, 0]);
  expect(errors).toEqual([]);
});
test("gap draft cancels, keyboard handles apply, and building view includes later meetings", async ({
  page,
}) => {
  await open(page);
  await page.locator("#open-filters").click();
  await page.locator("#term").selectOption("S");
  await page.keyboard.press("Escape");
  expect(await page.evaluate(() => window.sonderPreview.state.term)).toBe("F");
  await page.locator("#open-filters").click();
  await page.locator("#gap-end").focus();
  await page.keyboard.press("End");
  await page.locator("#gap-start").focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("#gap-from")).toHaveValue("11:00");
  await page.locator("#gap-until").fill("16:00");
  await page.locator("#gap-until").dispatchEvent("change");
  await page.locator("#gap-from").fill("14:00");
  await page.locator("#gap-from").dispatchEvent("change");
  await page.locator("#apply-filters").click();
  const state = await page.evaluate(() => window.sonderPreview.state);
  expect(state.gapStart).toBe(840);
  expect(state.gapEnd).toBe(960);
  await expect(page.locator(".class-ticket")).toHaveCount(6);
  await page.locator("#clear-all").click();
  await page.locator('[data-open="CSC108H1-LEC0101-F-2-660"]').click();
  await page.locator("#building-day").click();
  await expect(page.locator("#active-summary")).toContainText("Full day");
  await expect(page.locator(".class-ticket")).toHaveCount(3);
  await expect(page.locator("#lecture-list")).toContainText(
    "Introduction to Machine Learning",
  );
});
test("empty results offer topics, text is escaped, and capacity can be unknown", async ({
  page,
}) => {
  await open(page);
  await page.locator("#toggle-search").click();
  await page.locator("#search").fill("<img src=x onerror=alert(1)>");
  await expect(page.locator(".class-ticket")).toHaveCount(0);
  await expect(page.locator(".browse-topics")).toBeVisible();
  await expect(page.locator(".empty-state img")).toHaveCount(0);
  await page.locator('[data-browse="music"]').click();
  await page.locator(".lecture-open").click();
  await expect(page.locator("#lecture-detail")).toContainText(
    "Capacity unknown",
  );
  await page.locator("#close-detail").click();
  await page.locator("#open-filters").click();
  await page.locator("#big-rooms").check();
  await page.locator("#apply-filters").click();
  await expect(page.locator(".class-ticket")).toHaveCount(0);
});
test("location denial preserves pin; keyboard and pointer moves update walks and hash", async ({
  page,
}) => {
  await page.addInitScript(() =>
    Object.defineProperty(navigator, "geolocation", {
      value: {
        getCurrentPosition(_ok, fail) {
          fail({ code: 1 });
        },
      },
    }),
  );
  await open(page);
  await page.locator("#open-location").click();
  await page.locator("#use-location").click();
  await expect(page.locator("#location-status")).toContainText(
    "stayed in place",
  );
  await page.locator("#location-building").selectOption("VC");
  await expect(page.locator("#location-status")).toContainText("Victoria");
  await page.locator("#move-pin").click();
  await page.waitForFunction(
    () =>
      window.sonderPreview.map?.status === "ready" &&
      window.sonderPreview.map.stats.isIdle,
  );
  const pin = page.locator(".campus-location-pin");
  await expect(pin).toBeVisible();
  const before = await page.evaluate(() => ({
    ...window.sonderPreview.state.pin,
  }));
  await pin.focus();
  await page.keyboard.press("ArrowRight");
  const after = await page.evaluate(() => ({
    ...window.sonderPreview.state.pin,
  }));
  expect(after.lng).toBeGreaterThan(before.lng);
  const r = await pin.boundingBox();
  await page.mouse.move(r.x + 22, r.y + 22);
  await page.mouse.down();
  await page.mouse.move(r.x + 55, r.y + 22, { steps: 5 });
  await page.mouse.up();
  const dragged = await page.evaluate(() => ({
    ...window.sonderPreview.state.pin,
  }));
  expect(dragged.lng).not.toBe(after.lng);
  await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
  const frames = await page.evaluate(
    () => window.sonderPreview.map.stats.renderCount,
  );
  await page.waitForTimeout(150);
  expect(
    await page.evaluate(() => window.sonderPreview.map.stats.renderCount),
  ).toBe(frames);
  await page.reload();
  await page.waitForFunction(
    () => window.sonderPreview.map?.status === "ready",
  );
  expect(await page.evaluate(() => window.sonderPreview.state.pin)).toEqual(
    dragged,
  );
});
test("published catalogue switches atomically and dictionary buildings do not break map", async ({
  page,
}) => {
  const xss = {
    ...all[0],
    id: "xss",
    title: "<img src=x onerror=alert(1)>",
    description: "<b>Calendar copy.</b>",
    descFull: "<script>bad()</script>",
  };
  await page.route("**/data/lectures.json", (r) =>
    r.fulfill({
      json: {
        generated: "2026-09-14",
        terms: { F: "Fall 2026", S: "Winter 2027" },
        meetings: [...all, xss],
      },
    }),
  );
  await page.route("**/data/buildings.json", (r) =>
    r.fulfill({ json: buildings }),
  );
  await page.route("**/data/topics.json", (r) => r.fulfill({ json: topics }));
  await open(page, { ...initialState(), selected: "xss" });
  await page.waitForFunction(() => window.sonderPreview.liveData);
  await expect(page.locator("#detail-title")).toHaveText(xss.title);
  await page.locator("#close-detail").click();
  await expect(page.locator("#data-label")).toHaveText("Fall 2026");
  await expect(page.locator(".class-ticket")).toHaveCount(9);
  await expect(page.locator(".class-ticket img")).toHaveCount(0);
  await page.locator('[data-open="xss"]').click();
  await expect(page.locator("#detail-title")).toHaveText(xss.title);
  await expect(page.locator(".detail-description")).toHaveText(xss.descFull);
  await page.locator("#close-detail").click();
  await page.locator("#toggle-map").click();
  await page.waitForFunction(
    () => window.sonderPreview.map?.status === "ready",
  );
  expect(
    await page.evaluate(() => window.sonderPreview.map.stats.buildings),
  ).toBe(219);
});
test("phone layout and sheets fit 320–760 px without horizontal scrolling", async ({
  page,
}) => {
  await open(page);
  for (const width of [320, 390, 760]) {
    await page.setViewportSize({ width, height: 844 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.locator("#open-filters").click();
    const r = await page.locator("#filters-dialog").boundingBox();
    expect(r.x).toBeGreaterThanOrEqual(0);
    expect(r.width).toBeLessThanOrEqual(width);
    expect(
      await page
        .locator("#filters-dialog")
        .evaluate((el) => el.scrollWidth <= el.clientWidth),
    ).toBe(true);
    await page.locator("#close-filters").click();
  }
});

test("Sonderate stays reachable, rerolls, and share fallback preserves the class link", async ({
  page,
}) => {
  await page.addInitScript(() =>
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: async () => {
          throw new Error("denied");
        },
      },
    }),
  );
  await open(page);
  await page.locator("#sonderate").click();
  const first = await page.evaluate(() => window.sonderPreview.state.selected);
  const meeting = all.find((m) => m.id === first);
  expect(meeting.start).toBeGreaterThanOrEqual(
    650 + walkMinutes(CAMPUS_CENTRE, buildings[meeting.building]),
  );
  expect(meeting.start).toBeLessThanOrEqual(670);
  await page.locator("#sonderate-again").click();
  expect(
    await page.evaluate(() => window.sonderPreview.state.selected),
  ).not.toBe(first);
  await page.locator("#share-class").click();
  await expect(page.locator("#share-dialog")).toBeVisible();
  await expect(page.locator("#share-url")).toHaveValue(page.url());
});

test("toolbar and class share controls give visible clipboard feedback", async ({
  page,
}) => {
  await page.addInitScript(() =>
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: async (value) => (window.__sharedUrl = value) },
    }),
  );
  await open(page);
  await page.locator("#share-link").click();
  await expect(page.locator("#share-link")).toHaveText(/Link copied/);
  expect(await page.evaluate(() => window.__sharedUrl)).toBe(page.url());
  await page.locator(".lecture-open").first().click();
  await page.locator("#share-class").click();
  await expect(page.locator("#share-class")).toHaveText("Copied ✓");
  await expect(page.locator("#share-dialog")).toBeVisible();
  expect(await page.evaluate(() => window.__sharedUrl)).toBe(page.url());
});
