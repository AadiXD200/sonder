import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";
import {
  initialState,
  createSearchIndex,
  findMeetings,
  sonderateCandidates,
  SONDERATE_WINDOW_MINUTES,
  walkMinutes,
  encodeState,
} from "../src/explore/model.js";
import { catalogueDestinations } from "../src/campus-destinations.js";
import { toMapPoint } from "../src/campus-coordinates.js";
const readJSON = async (file) =>
  JSON.parse(await readFile(new URL(file, import.meta.url), "utf8"));
const catalogue = await readJSON("../public/data/lectures.json");
const buildings = await readJSON("../public/data/buildings.json");
const topics = await readJSON("../public/data/topics.json");
const index = createSearchIndex(topics);
const formerlyMissing = [
  "AB",
  "BF",
  "BN",
  "ES",
  "GB",
  "JP",
  "KP",
  "MK",
  "MY",
  "NB",
  "OH",
  "OI",
  "PT",
  "RO",
  "RS",
  "RW",
  "SF",
  "SU",
  "TF",
  "WB",
  "WE",
  "WO",
  "WS",
  "WW",
];
const gap = {
  ...initialState(),
  day: 3,
  term: "F",
  gapStart: 600,
  gapEnd: 720,
};

test("real Wednesday 10:00 gap has reachable Sonderate choices through 11:00", () => {
  const oldPool = findMeetings(catalogue.meetings, gap, buildings, index, {
    dayView: false,
  }).filter(
    (m) =>
      m.start <= gap.gapStart + 20 &&
      m.start >= gap.gapStart + walkMinutes(gap.pin, buildings[m.building]),
  );
  expect(oldPool).toHaveLength(0);
  const pool = sonderateCandidates(catalogue.meetings, gap, buildings, index);
  expect(pool.length).toBeGreaterThan(0);
  expect(SONDERATE_WINDOW_MINUTES).toBe(60);
  for (const m of pool) {
    expect(m.start).toBeGreaterThanOrEqual(
      gap.gapStart + walkMinutes(gap.pin, buildings[m.building]),
    );
    expect(m.start).toBeLessThanOrEqual(660);
    expect(m.end).toBeLessThanOrEqual(720);
    expect(m.day).toBe(3);
    expect(m.term).toBe("F");
  }
  const restricted = { ...gap, gapEnd: 630 };
  expect(
    sonderateCandidates(catalogue.meetings, restricted, buildings, index).every(
      (m) => m.end <= 630,
    ),
  ).toBe(true);
});

test("missing building targets use their published coordinates, never nearest mesh centres", () => {
  const destinations = catalogueDestinations(buildings);
  for (const code of formerlyMissing) {
    const d = destinations.find((d) => d.codes.includes(code)),
      point = toMapPoint(buildings[code]);
    expect(d.center).toEqual([point.x, 0, point.z]);
    expect(d.name).toBe(buildings[code].name);
    expect(d.footprint.length).toBe(buildings[code].polygon?.length || 0);
  }
});

test("published Show on map resolves every course building, including mobile Myhal", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.setViewportSize({ width: 390, height: 844 });
  const meeting = catalogue.meetings.find((m) => m.building === "MY");
  await page.goto(
    "/explore.html" +
      encodeState({
        ...gap,
        day: meeting.day,
        term: meeting.term,
        selected: meeting.id,
      }),
  );
  await page.waitForFunction(() => window.sonderPreview.liveData);
  await expect(page.locator("#lecture-detail")).toBeVisible();
  await page.locator("#show-building").click();
  await page.waitForFunction(
    () =>
      window.sonderPreview.map?.status === "ready" &&
      window.sonderPreview.map.stats.isIdle,
  );
  await expect(page.locator(".campus-destination-marker")).toBeVisible();
  await expect(page.locator(".campus-destination-marker")).toContainText(
    "MY · Myhal",
  );
  const codes = await page.evaluate(() =>
    window.sonderPreview.map.getBuildings().flatMap((b) => b.codes),
  );
  for (const code of Object.keys(buildings)) expect(codes).toContain(code);
  for (const code of formerlyMissing) {
    expect(
      await page.evaluate(
        (code) => window.sonderPreview.map.selectBuilding(code),
        code,
      ),
    ).toBe(true);
    await expect(page.locator("#explore-map #selection-code")).toContainText(
      code,
    );
    await expect(page.locator(".campus-destination-marker")).toContainText(
      `${code} · ${buildings[code].name}`,
    );
  }
  await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
  const frames = await page.evaluate(
    () => window.sonderPreview.map.stats.renderCount,
  );
  await page.waitForTimeout(150);
  expect(
    await page.evaluate(() => window.sonderPreview.map.stats.renderCount),
  ).toBe(frames);
  expect(errors).toEqual([]);
});

test("Sonderate button works with the published catalogue at a round-hour start", async ({
  page,
}) => {
  await page.goto("/explore.html" + encodeState(gap));
  await page.waitForFunction(() => window.sonderPreview.liveData);
  await page.locator("#sonderate").click();
  const id = await page.evaluate(() => window.sonderPreview.state.selected);
  expect(
    sonderateCandidates(catalogue.meetings, gap, buildings, index).some(
      (m) => m.id === id,
    ),
  ).toBe(true);
  await expect(page.locator("#detail-title")).not.toHaveText(
    "Nothing you can get to in time.",
  );
});
