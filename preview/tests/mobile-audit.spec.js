import { test, expect } from '@playwright/test';
import { initialState, encodeState } from '../src/explore/model.js';

test.use({ isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
async function open(page, width = 390, height = 844) {
  await page.setViewportSize({ width, height });
  await page.route('**/data/lectures.json', route => route.fulfill({ status: 404, body: 'Fixtures' }));
  await page.goto('/explore.html' + encodeState({ ...initialState(), timeMode: 'day' }));
}
for (const width of [320, 390, 430]) {
  test(`phone header, search and actions have usable space at ${width}px`, async ({ page }) => {
    await open(page, width, width === 320 ? 568 : 844);
    const random = await page.locator('#sonderate').boundingBox();
    const map = await page.locator('#toggle-map').boundingBox();
    expect(Math.abs(random.width - map.width)).toBeLessThan(1);
    expect(random.height).toBe(map.height);
    const count = await page.locator('#result-count').boundingBox();
    const header = await page.locator('.masthead').boundingBox();
    expect(count.y + count.height).toBeLessThan(header.y + header.height);
    const first = await page.locator('.lecture-open').first().boundingBox();
    expect(first.y).toBeLessThan(130);
    await expect(page.locator('#toggle-search > span')).toBeVisible();
    await expect(page.locator('#toggle-search')).toHaveText('Search');
    await page.locator('#toggle-search').tap();
    const input = await page.locator('#search').boundingBox();
    expect(input.width).toBeGreaterThan(width * 0.6);
    await expect(page.locator('#search')).toHaveAttribute('placeholder', 'Search campus…');
    await expect(page.locator('#search-topics')).toBeVisible();
    await page.locator('#search').fill('computer science');
    await page.evaluate(() => {
      Object.defineProperty(visualViewport, 'height', { value: 310, configurable: true });
      visualViewport.dispatchEvent(new Event('resize'));
    });
    await expect.poll(async () => {
      const results = await page.locator('#search-suggestions').boundingBox();
      return results.y + results.height;
    }).toBeLessThanOrEqual(302);
    await page.locator('[data-search-program]').first().tap();
    await expect(page.locator('#search-suggestions')).toBeHidden();
    await page.evaluate(() => { delete visualViewport.height; visualViewport.dispatchEvent(new Event('resize')); });
    await expect(page.locator('#active-summary')).toContainText('Computer Science');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}

test('small-phone Sonderate prioritizes the room and time and exposes the mission without expanding', async ({ page }) => {
  await open(page, 320, 568);
  await page.locator('#sonderate').tap();
  await expect(page.locator('.detail-time')).toBeInViewport();
  await expect(page.locator('.detail-room')).toBeInViewport();
  const room = await page.locator('.detail-room').boundingBox();
  const context = await page.locator('#sonderate-context').boundingBox();
  expect(context.y).toBeGreaterThan(room.y + room.height);
  await expect(page.locator('#sonderate-explainer')).not.toHaveAttribute('open');
  await expect(page.locator('#sonderate-context > .sonderate-mission')).toBeVisible();
  const mission = await page.locator('#sonderate-mission-text').textContent();
  await page.locator('#next-mission').tap();
  await expect(page.locator('#sonderate-mission-text')).not.toHaveText(mission);
  await page.locator('#share-class').tap();
  await expect(page.locator('#copy-invite')).toBeInViewport();
  await page.locator('#copy-invite').tap();
  await expect(page.locator('#share-feedback')).toContainText(/copied|copy the invitation/);
});

test('landscape phones keep the map controls inside the screen', async ({ page }) => {
  await open(page, 844, 390);
  await page.locator('#toggle-map').tap();
  await page.waitForFunction(() => window.sonderPreview.map?.stats.isIdle);
  for (const id of ['zoom-in', 'zoom-out', 'labels-toggle', 'source-button']) {
    const control = page.locator('#' + id);
    await expect(control).toBeInViewport();
    const box = await control.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(44);
    expect(box.height).toBeGreaterThanOrEqual(44);
  }
});
