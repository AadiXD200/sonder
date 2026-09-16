import { test, expect } from '@playwright/test';
import {
  initialState, findMeetings, createSearchIndex, encodeState, decodeState,
} from '../src/explore/model.js';

const buildings = {
  BA: { name: 'Bahen', lat: 43.6623, lng: -79.3968 },
  FAR: { name: 'Far away', lat: 43.69, lng: -79.43 },
};
const index = createSearchIndex({});
const meeting = { day: 2, term: 'F', subject: 'Technology', building: 'BA', seats: 100, code: 'CSC100', title: 'Computing' };
const meetings = [
  { ...meeting, id: 'earlier', start: 600, end: 660 },
  { ...meeting, id: 'long', start: 660, end: 900 },
  { ...meeting, id: 'fits', start: 660, end: 720 },
  { ...meeting, id: 'last-minute', start: 769, end: 830 },
  { ...meeting, id: 'at-end', start: 770, end: 830 },
  { ...meeting, id: 'later', start: 840, end: 900 },
  { ...meeting, id: 'too-far', building: 'FAR', start: 660, end: 720 },
];
const matching = (extra = {}) => findMeetings(meetings, { ...initialState(), ...extra }, buildings, index).map(m => m.id);

test('start windows, optional deadlines, and building filters follow the same rules', () => {
  expect(matching()).toEqual(['fits', 'long', 'last-minute']);
  expect(matching({ building: { codes: ['BA'] } })).toEqual(matching());
  expect(matching({ timeMode: 'custom', finishBy: true })).toEqual(['fits']);
  expect(matching({ timeMode: 'custom', finishBy: false })).toEqual(matching());
  expect(matching({ timeMode: 'day', building: { codes: ['BA'] } })).toEqual(['earlier', 'fits', 'long', 'last-minute', 'at-end', 'later']);
  expect(matching({ timeMode: 'day' })).not.toContain('too-far');
  expect(matching({ timeMode: 'day', subject: 'Science' })).toEqual([]);
});

test('time modes and deadlines survive shared links, including older custom gaps', () => {
  for (const timeMode of ['soon', 'day', 'custom']) {
    const state = { ...initialState(), timeMode, finishBy: true };
    expect(decodeState(encodeState(state), buildings, meetings)).toEqual(state);
  }
  expect(decodeState('#v=1&gapStart=650&gapEnd=770')).toMatchObject({ timeMode: 'custom', finishBy: true });
  expect(decodeState('#v=1&timeMode=bad&finishBy=no')).toMatchObject({ timeMode: 'soon', finishBy: false });
});

for (const width of [390, 1440]) {
  test(`quick time choices preserve building and other filters at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
    await page.goto('/explore.html' + encodeState({
      ...initialState(), building: { codes: ['BA'], name: 'Bahen' }, query: 'computer science', walk: 10,
    }));
    await expect(page.locator('#time-soon')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.class-ticket')).toHaveCount(1);
    await page.locator('#time-day').click();
    await expect(page.locator('.class-ticket')).toHaveCount(3);
    await expect(page.locator('#time-summary')).toHaveAttribute('aria-label', /All day/);
    expect(await page.evaluate(() => window.sonderPreview.state)).toMatchObject({
      building: { codes: ['BA'] }, query: 'computer science', walk: 10, timeMode: 'day',
    });
    await page.reload();
    await expect(page.locator('#time-day')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.class-ticket')).toHaveCount(3);
    await page.locator('#time-soon').click();
    await expect(page.locator('.class-ticket')).toHaveCount(1);
    await expect(page.locator('#time-summary')).toHaveAttribute('aria-label', /Next 2 hours/);
    await expect(page.locator('#active-summary')).toContainText('Bahen');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}

test('custom timing can allow later finishes or enforce a deadline, and Reset returns to soon', async ({ page }) => {
  await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
  await page.goto('/explore.html');
  await page.locator('#time-summary').click();
  await expect(page.locator('#custom-time-fields')).toBeHidden();
  await page.locator('#time-mode').selectOption('custom');
  await page.locator('#gap-until').fill('11:40');
  await page.locator('#gap-until').dispatchEvent('change');
  await page.locator('#apply-filters').click();
  await expect(page.locator('.class-ticket')).toHaveCount(8);
  await expect(page.locator('#time-custom')).toHaveAttribute('aria-pressed', 'true');
  await page.locator('#time-custom').click();
  await page.locator('#finish-by').check();
  await page.locator('#apply-filters').click();
  await expect(page.locator('.class-ticket')).toHaveCount(0);
  await page.locator('#empty-all-day').click();
  expect(await page.locator('.class-ticket').count()).toBeGreaterThan(8);
  await page.locator('#open-filters').click();
  await page.locator('#reset-filters').click();
  await page.locator('#apply-filters').click();
  await expect(page.locator('#time-soon')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.class-ticket')).toHaveCount(8);
});

test('laptop time choices share the class-count heading and survive resizing', async ({ page }) => {
  await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/explore.html' + encodeState({ ...initialState(), view: 'map', timeMode: 'day' }));
  await expect(page.locator('.class-ticket').first()).toBeVisible();
  for (const width of [1280, 390, 1024]) {
    await page.setViewportSize({ width, height: 800 });
    if (width === 390) await page.locator('#toggle-map').click();
    else if (await page.locator('#toggle-map').getAttribute('aria-expanded') === 'false') await page.locator('#toggle-map').click();
    await expect(page.locator('#time-day')).toBeVisible();
    await expect(page.locator('#result-count')).toBeVisible();
    const filters = await page.locator('#open-filters').boundingBox();
    const allDay = await page.locator('#time-day').boundingBox();
    const soon = await page.locator('#time-soon').boundingBox();
    expect(filters.x + filters.width).toBeLessThan(soon.x);
    expect(Math.abs(filters.y - allDay.y)).toBeLessThan(2);
    const firstCard = await page.locator('.class-ticket').first().boundingBox();
    expect(firstCard.y).toBeLessThan(width > 760 ? 130 : 170);
    if (width > 760) {
      const time = await page.locator('#time-day').boundingBox();
      const count = await page.locator('#result-count').boundingBox();
      const day = await page.locator('#time-summary').boundingBox();
      expect(day.x).toBeGreaterThan(allDay.x + allDay.width);
      expect(count.x).toBeGreaterThan(day.x + day.width);
      expect(Math.abs(time.y + time.height / 2 - count.y - count.height / 2)).toBeLessThan(2);
      await expect(page.locator('#time-summary')).not.toContainText('All day');
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});
