import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { catalogueDefaults, initialState, encodeState, findMeetings, createSearchIndex, CAMPUS_CENTRE } from '../src/explore/model.js';
const { meetings } = JSON.parse(await readFile(new URL('../public/data/lectures.json', import.meta.url)));

test('the default follows actual last starts, the grace period, early mornings and weekends', () => {
  expect(catalogueDefaults(new Date('2026-09-18T21:19:00Z'), meetings).day).toBe(5);
  expect(catalogueDefaults(new Date('2026-09-18T21:20:00Z'), meetings)).toMatchObject({ day: 1, gapStart: 530, gapEnd: 650 });
  expect(catalogueDefaults(new Date('2026-09-22T00:20:00Z'), meetings)).toMatchObject({ day: 2, gapStart: 470, gapEnd: 590 });
  expect(catalogueDefaults(new Date('2026-09-20T12:00:00Z'), meetings).day).toBe(1);
  const sparse = [{ day: 2, term: 'F', start: 600, end: 660 }];
  expect(catalogueDefaults(new Date('2026-09-18T21:20:00Z'), sparse)).toMatchObject({ day: 2, gapStart: 590 });
  expect(catalogueDefaults(new Date('2026-09-17T02:30:00Z'), [{ day: 3, term: 'F', start: 1380, end: 1430 }]).day).toBe(3);
});

test('just-started classes expire exactly at 20 minutes or when they finish; explicit time windows retain them', () => {
  const meeting = { id: 'test', code: 'ZZZ100H1', title: 'A class', day: 3, term: 'F', start: 1020, end: 1080, building: 'ZZ', subject: 'Science', topics: [], seats: 100 };
  const buildings = { ZZ: CAMPUS_CENTRE }, index = createSearchIndex({});
  const state = { ...initialState(), day: 3, gapStart: 1040 };
  expect(findMeetings([meeting], state, buildings, index, { now: 1039 })).toHaveLength(1);
  expect(findMeetings([meeting], state, buildings, index, { now: 1040 })).toHaveLength(0);
  expect(findMeetings([{ ...meeting, end: 1030 }], state, buildings, index, { now: 1031 })).toHaveLength(0);
  expect(findMeetings([meeting], { ...state, timeMode: 'day' }, buildings, index, { now: 1040 })).toHaveLength(1);
  expect(findMeetings([meeting], { ...state, timeMode: 'custom', gapStart: 1020, gapEnd: 1100 }, buildings, index, { now: 1040 })).toHaveLength(1);
});

test('the live page removes a started class after 20 minutes and All day recovers it', async ({ page }) => {
  await page.clock.install({ time: new Date('2026-09-16T21:00:00Z') });
  await page.goto('/explore.html');
  await page.waitForFunction(() => window.sonderPreview.liveData);
  const starting = page.locator('.class-ticket').filter({ has: page.locator('.starts', { hasText: 'STARTING NOW' }) }).first();
  await expect(starting).toBeVisible();
  const id = await starting.locator('.lecture-open').getAttribute('data-open');
  await page.clock.fastForward(19 * 60000);
  await expect(page.locator(`[data-open="${id}"] .starts`)).toHaveText('STARTED 19 MIN AGO');
  await page.clock.fastForward(60050);
  await expect(page.locator(`[data-open="${id}"]`)).toHaveCount(0);
  await page.locator('#time-day').click();
  // The list is paginated; filter by this course to locate its earlier meeting.
  const code = meetings.find(m => m.id === id).code;
  await page.locator('#toggle-search').click();
  await page.locator('#search').fill(code);
  await expect(page.locator(`.lecture-open[data-open="${id}"]`)).toBeVisible();
});

for (const width of [390, 1440]) {
  test(`after-hours defaults are explicit and shared times stay fixed at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.clock.install({ time: new Date('2026-09-17T00:20:00Z') });
    await page.goto('/explore.html');
    await page.waitForFunction(() => window.sonderPreview.liveData);
    expect(await page.evaluate(() => [window.sonderPreview.state.day, window.sonderPreview.state.gapStart])).toEqual([4, 530]);
    await expect(page.locator('#time-summary')).toHaveAttribute('aria-label', /Tomorrow · 8:50 AM–10:50 AM/);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto('/explore.html' + encodeState({ ...initialState(), day: 3, gapStart: 480, gapEnd: 600 }));
    await page.waitForFunction(() => window.sonderPreview.liveData);
    await page.clock.fastForward(120000);
    expect(await page.evaluate(() => [window.sonderPreview.state.day, window.sonderPreview.state.gapStart])).toEqual([3, 480]);
  });
}
