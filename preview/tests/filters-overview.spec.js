import { test, expect } from '@playwright/test';
import { initialState, encodeState } from '../src/explore/model.js';

test.use({ reducedMotion: 'reduce', hasTouch: true });
test.beforeEach(async ({ page }) => {
  await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
});
for (const width of [320, 390, 1440]) {
  test(`filter overview exposes choices and edits them independently at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 320 ? 568 : 844 });
    await page.goto('/explore.html' + encodeState({ ...initialState(), timeMode: 'day' }));
    await page.locator('#open-filters').tap();
    await expect(page.locator('details.filter-section[open]')).toHaveCount(0);
    await expect(page.locator('#filter-when-value')).toContainText('Tuesday · Fall 2026 · All day');
    await expect(page.locator('#filter-interests-value')).toHaveText('Everything');
    await expect(page.locator('#filter-walk-value')).toHaveText('Campus centre · ~15 min');
    await page.locator('#filter-walk > summary').tap();
    await page.locator('#location-building').selectOption('BA');
    await page.locator('#walk-time').selectOption('10');
    await page.locator('#filter-walk > summary').tap();
    await expect(page.locator('#filter-walk-value')).toContainText('Bahen');
    await expect(page.locator('#filter-walk-value')).toContainText('~10 min');
    await page.locator('#filter-interests > summary').tap();
    await page.locator('[data-topic="Science"]').tap();
    await page.locator('#filter-interests > summary').tap();
    await expect(page.locator('#filter-interests-value')).toHaveText('Science');
    await page.locator('#big-rooms').check();
    await expect(page.locator('#capacity-note')).toBeVisible();
    await expect(page.locator('#apply-filters')).toBeInViewport();
    expect(await page.locator('#filters-dialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await page.locator('#apply-filters').tap();
    await page.locator('#open-filters').tap();
    await expect(page.locator('#filter-interests-value')).toHaveText('Science');
    await expect(page.locator('#filter-walk-value')).toContainText('~10 min');
    await page.locator('#reset-filters').tap();
    await expect(page.locator('#filter-interests-value')).toHaveText('Everything');
    await expect(page.locator('#filter-walk-value')).toHaveText('Campus centre · ~15 min');
    await expect(page.locator('#big-rooms')).not.toBeChecked();
    await expect(page.locator('#capacity-note')).toBeHidden();
  });
}

test('topic search remains above a simulated phone keyboard and applies multiple interests', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto('/explore.html');
  await page.locator('#open-filters').tap();
  await page.locator('#filter-interests > summary').tap();
  await page.locator('#topic-picker > summary').tap();
  await page.locator('#topic-search').fill('psych');
  await page.evaluate(() => {
    Object.defineProperty(visualViewport, 'height', { value: 320, configurable: true });
    visualViewport.dispatchEvent(new Event('resize'));
  });
  await expect.poll(async () => {
    const input = await page.locator('#topic-search').boundingBox();
    const body = await page.locator('#filters-dialog .sheet-body').boundingBox();
    return input.y >= body.y && input.y + input.height <= body.y + body.height;
  }).toBe(true);
  expect(await page.locator('#topic-search').evaluate(el => parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThanOrEqual(16);
  await page.evaluate(() => {
    delete visualViewport.height;
    visualViewport.dispatchEvent(new Event('resize'));
  });
  await page.locator('[data-interest="psychology"]').check();
  await page.locator('#topic-search').fill('music');
  await page.locator('[data-interest="music"]').check();
  await page.locator('#filter-interests > summary').tap();
  await expect(page.locator('#filter-interests-value')).toContainText('Music');
  await page.locator('#apply-filters').tap();
  await expect(page.locator('#interest-summary button')).toHaveCount(2);
});
