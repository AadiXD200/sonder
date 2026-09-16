import { test, expect } from '@playwright/test';
import { COURSE_LEVELS, courseLevel, initialState, encodeState, decodeState, findMeetings, sonderateCandidates, CAMPUS_CENTRE } from '../src/explore/model.js';

test('course levels match code numbers, combine as a union and retain other constraints', () => {
  expect(['CSC108H1', 'PSY200H1', 'MIE301H1', 'BIO400H1', 'ECE540H1', 'MAT1000H'].map(courseLevel)).toEqual([100, 200, 300, 400, 400, 400]);
  expect(courseLevel('TBA')).toBeNull();
  const base = { ...initialState(), timeMode: 'day' };
  const buildings = { BA: CAMPUS_CENTRE, SS: CAMPUS_CENTRE };
  const meeting = { day: base.day, term: base.term, subject: 'Science', building: 'BA', seats: 200, start: 660, end: 720, room: '100', title: 'Test class' };
  const meetings = [100, 200, 300, 400, 500].map(level => ({ ...meeting, id: String(level), code: `CSC${level}H1` }));
  meetings.push({ ...meeting, id: 'other-building', code: 'BIO200H1', building: 'SS' });
  meetings.push({ ...meeting, id: 'other-time', code: 'CSC201H1', start: 800, end: 860 });
  meetings.push({ ...meeting, id: 'unknown', code: 'TBA' });
  const matches = overrides => findMeetings(meetings, { ...base, ...overrides }, buildings, new Map()).map(m => m.id);
  expect(matches({})).toHaveLength(8);
  expect(matches({ levels: [400] })).toEqual(['400', '500']);
  expect(matches({ levels: [100, 200], building: { codes: ['BA'] }, timeMode: 'custom', gapStart: 650, gapEnd: 700 })).toEqual(['100', '200']);
  expect(matches({ levels: [100], query: 'CSC300' })).toEqual([]);
  expect(sonderateCandidates(meetings, { ...base, levels: [300] }, buildings, new Map()).map(m => m.id)).toEqual(['300']);
  const saved = decodeState(encodeState({ ...base, levels: [300, 100, 300] }));
  expect(saved.levels).toEqual([100, 300]);
  expect(decodeState('#v=1&levels=200,garbage,900,200,400').levels).toEqual([200, 400]);
  expect(decodeState('#v=1').levels).toEqual([]);
  expect(COURSE_LEVELS).toEqual([100, 200, 300, 400]);
});
for (const width of [320, 390, 1440]) {
  test(`course-level drafts cancel, apply, survive refresh and reset at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 320 ? 568 : 900 });
    await page.route('**/data/lectures.json', route => route.fulfill({ status: 404, body: 'Fixtures' }));
    await page.goto('/explore.html' + encodeState({ ...initialState(), timeMode: 'day', view: width <= 760 ? 'map' : 'list' }));
    await page.locator('#open-filters').click();
    await expect(page.locator('#filter-levels-value')).toHaveText('All levels');
    await page.locator('#filter-levels > summary').click();
    await page.locator('[data-course-level="100"]').click();
    await page.locator('#close-filters').click();
    expect(await page.evaluate(() => window.sonderPreview.state.levels)).toEqual([]);
    await page.locator('#open-filters').click();
    await page.locator('#filter-levels > summary').click();
    await page.locator('[data-course-level="100"]').click();
    await page.locator('[data-course-level="300"]').click();
    await expect(page.locator('#filter-levels-value')).toHaveText('100 · 300');
    await expect(page.locator('#apply-filters')).toBeInViewport();
    expect(await page.locator('#filters-dialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await page.locator('#apply-filters').click();
    expect(await page.evaluate(() => window.sonderPreview.state.levels)).toEqual([100, 300]);
    const codes = await page.locator('.course-code').allTextContents();
    expect(codes.length).toBeGreaterThan(0);
    expect(codes.every(code => [100, 300].includes(courseLevel(code.trim())))).toBe(true);
    await page.reload();
    expect(await page.evaluate(() => window.sonderPreview.state.levels)).toEqual([100, 300]);
    await page.locator('#open-filters').click();
    await expect(page.locator('#filter-levels-value')).toHaveText('100 · 300');
    await page.locator('#reset-filters').click();
    await expect(page.locator('#filter-levels-value')).toHaveText('All levels');
    await page.locator('#apply-filters').click();
    expect(await page.evaluate(() => window.sonderPreview.state.levels)).toEqual([]);
  });
}
