import { test, expect } from '@playwright/test';
import { initialState, encodeState } from '../src/explore/model.js';

test.use({ isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
async function open(page, width, extra = {}) {
  await page.setViewportSize({ width, height: width === 320 ? 568 : 844 });
  await page.route('**/data/lectures.json', route => route.fulfill({ status: 404, body: 'Fixtures' }));
  await page.goto('/explore.html' + encodeState({ ...initialState(), view: 'map', ...extra }));
  await page.waitForFunction(() => window.sonderPreview.map?.stats.isIdle);
}
for (const width of [320, 390]) {
  test(`zero-match building offers filters before scrolling at ${width}px`, async ({ page }) => {
    await open(page, width, { timeMode: 'custom', gapStart: 0, gapEnd: 10 });
    await page.evaluate(() => window.sonderPreview.map.selectBuilding('BA'));
    await expect(page.locator('.class-ticket')).toHaveCount(0);
    const change = page.getByRole('button', { name: 'Change filters', exact: true });
    await expect(change).toBeInViewport();
    const rect = await change.boundingBox();
    const actions = await page.locator('.mobile-switch').boundingBox();
    expect(rect.y + rect.height).toBeLessThan(actions.y);
    await expect(page.locator('#active-summary')).toBeHidden();
    await expect(page.locator('.empty-state > span')).toHaveCount(0);
    expect(await page.locator('#lecture-list').evaluate(el => el.scrollTop)).toBe(0);
    await change.tap();
    await expect(page.locator('#filters-dialog')).toBeVisible();
    await page.locator('#filter-when > summary').tap();
    await page.locator('#time-mode').selectOption('day');
    await page.locator('#apply-filters').tap();
    await expect(page.locator('body')).toHaveAttribute('data-view', 'map');
    await expect.poll(() => page.locator('.class-ticket').count()).toBeGreaterThan(0);
    expect(await page.locator('.room-number').allTextContents()).toEqual(expect.arrayContaining([expect.stringMatching(/^BA /)]));
    expect(await page.evaluate(() => window.sonderPreview.state.building.codes)).toContain('BA');
    await expect(page.locator('#map-sheet-toggle')).toHaveAccessibleName('More courses');
  });

  test(`search chooses a building inside the map at ${width}px, including with a keyboard`, async ({ page }) => {
    await open(page, width, { timeMode: 'day' });
    await page.locator('#toggle-search').tap();
    await expect(page.locator('body')).toHaveAttribute('data-view', 'map');
    await expect(page.locator('#search-topics')).toBeVisible();
    await page.locator('#search').fill('Robarts');
    await page.evaluate(() => {
      Object.defineProperty(visualViewport, 'height', { value: 310, configurable: true });
      visualViewport.dispatchEvent(new Event('resize'));
    });
    await expect(page.locator('body')).toHaveClass(/mobile-keyboard/);
    await expect(page.locator('#scene canvas')).toBeVisible();
    await expect.poll(async () => {
      const box = await page.locator('#search-suggestions').boundingBox();
      return box.y + box.height;
    }).toBeLessThan(310);
    await page.locator('[data-search-building="RL"]').tap();
    await page.evaluate(() => { delete visualViewport.height; visualViewport.dispatchEvent(new Event('resize')); });
    await expect(page.locator('body')).toHaveAttribute('data-view', 'map');
    await expect(page.locator('#search-panel')).toBeHidden();
    await expect(page.locator('#map-sheet-name')).toHaveText('Robarts');
    await expect(page.locator('.campus-destination-marker')).toContainText('Robarts');
    await page.locator('#toggle-search').tap();
    await page.locator('#search-topics').tap();
    await expect(page.locator('#filters-title')).toHaveText('Topics');
    await page.locator('#close-filters').tap();
    await expect(page.locator('body')).toHaveAttribute('data-view', 'map');
    await page.locator('#close-search').tap();
    await expect(page.locator('#toggle-search')).toBeInViewport();
  });
}
