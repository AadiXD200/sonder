import { test, expect } from '@playwright/test';
import { similarClasses } from '../src/explore/similar-classes.js';
import { initialState, encodeState } from '../src/explore/model.js';

test('shared topics outrank broad subjects, repeated sections collapse, and the source course is excluded', () => {
  const source = { id: 'source', code: 'CSC108H1', title: 'Introduction to Programming', subject: 'Technology', topics: ['programming'] };
  const candidates = [source, { ...source, id: 'another-section' },
    { id: 'near', code: 'MAT137H1', title: 'Programming with Mathematics', subject: 'Science', topics: ['programming'], start: 600 },
    { id: 'duplicate', code: 'MAT137H1', title: 'Programming with Mathematics', subject: 'Science', topics: ['programming'], start: 700 },
    { id: 'broad', code: 'ECE100H1', title: 'Electronic Systems', subject: 'Technology', topics: [], start: 540 },
    { id: 'unrelated', code: 'MUS100H1', title: 'Music History', subject: 'Arts & ideas', topics: ['music'], start: 540 }];
  const ranked = similarClasses(source, candidates, { programming: { label: 'Programming' } });
  expect(ranked.map(result => result.meeting.id)).toEqual(['near', 'broad']);
  expect(ranked[0].reason).toBe('Programming');
});

test.use({ reducedMotion: 'reduce', hasTouch: true });
for (const [width, view] of [[320, 'list'], [390, 'list'], [1440, 'map']]) {
  test(`similar classes can be opened and revisited at ${width}px in ${view}`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 320 ? 568 : 844 });
    await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
    await page.goto('/explore.html' + encodeState({ ...initialState(), view, timeMode: 'day', query: 'CSC108' }));
    await page.locator('.lecture-open').first().tap();
    if (view === 'map') await page.getByRole('button', { name: 'Full details' }).tap();
    await expect(page.locator('#sonderate-again')).toHaveCount(0);
    await page.locator('#similar-classes').tap();
    await expect(page.locator('#detail-title')).toHaveText('Similar classes');
    await expect(page.locator('.similar-class').first()).toContainText('CSC311H1');
    await expect(page.locator('#back-to-class')).toBeInViewport();
    expect(await page.locator('#lecture-detail').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    if (view === 'map') expect(await page.locator('#lecture-detail').evaluate(el => el.matches(':modal'))).toBe(false);
    await page.locator('#back-to-class').tap();
    await expect(page.locator('.detail-code')).toContainText('CSC108');
    await page.locator('#similar-classes').tap();
    await page.locator('.similar-class').first().tap();
    await expect(page.locator('.detail-code')).toContainText('CSC311');
    await expect(page.locator('#share-class')).toBeVisible();
    await page.locator('#close-detail').tap();
    await page.locator('#sonderate').tap();
    await expect(page.locator('#sonderate-again')).toBeVisible();
  });
}

test('similar classes respect the building restriction and offer filter recovery when none fit', async ({ page }) => {
  await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
  await page.goto('/explore.html' + encodeState({ ...initialState(), query: 'PSY100', building: { codes: ['SS'] } }));
  await page.locator('.lecture-open').first().click();
  await page.locator('#similar-classes').click();
  await expect(page.locator('.similar-empty')).toBeVisible();
  await page.locator('[data-sonderate-filters]').click();
  await expect(page.locator('#filters-dialog')).toBeVisible();
});
