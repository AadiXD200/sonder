import { test, expect } from '@playwright/test';
import { initialState, encodeState } from '../src/explore/model.js';

test.use({ isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
async function open(page, width, height) {
  await page.setViewportSize({ width, height });
  await page.route('**/data/lectures.json', route => route.fulfill({ status: 404, body: 'Fixtures' }));
  await page.goto('/explore.html' + encodeState({ ...initialState(), view: 'map', timeMode: 'day' }));
  await page.waitForFunction(() => window.sonderPreview.map?.stats.isIdle);
}
for (const [width, height] of [[320, 568], [390, 844], [430, 932]]) {
  test(`map and courses share the phone screen at ${width}px`, async ({ page }) => {
    await open(page, width, height);
    await expect(page.locator('.masthead')).toBeHidden();
    for (const id of ['open-filters', 'time-day', 'time-summary', 'toggle-search', 'sonderate', 'toggle-map']) {
      await expect(page.locator('#' + id)).toBeInViewport();
      const rect = await page.locator('#' + id).boundingBox();
      expect(rect.height).toBeGreaterThanOrEqual(44);
      expect(rect.x).toBeGreaterThanOrEqual(0);
      expect(rect.x + rect.width).toBeLessThanOrEqual(width);
    }
    const canvas = await page.locator('#scene canvas').boundingBox();
    const sheet = await page.locator('.class-pane').boundingBox();
    expect(canvas.y).toBe(0);
    expect(canvas.height / (canvas.height + sheet.height)).toBeGreaterThan(0.6);
    expect(canvas.y + canvas.height).toBeLessThanOrEqual(sheet.y);
    await page.locator('.lecture-open').first().tap();
    await expect(page.locator('.map-course-preview:visible')).toHaveCount(1);
    await expect(page.locator('#lecture-detail')).toBeHidden();
    await page.getByRole('button', { name: 'Full details' }).tap();
    await expect(page.locator('#lecture-detail')).toBeVisible();
    await expect(page.locator('#show-building')).toBeHidden();
    await page.locator('#close-detail').tap();
    await page.locator('#map-sheet-toggle').tap();
    await expect(page.locator('body')).toHaveAttribute('data-map-sheet', 'full');
    await page.locator('#map-sheet-toggle').tap();
    await expect(page.locator('body')).toHaveAttribute('data-map-sheet', 'half');
    await expect(page.locator('#map-sheet-toggle')).toHaveAccessibleName('More courses');
    await expect.poll(async () => (await page.locator('#scene canvas').boundingBox()).height).toBeGreaterThan(canvas.height - 2);
    await expect(page.locator('#lecture-list')).toBeVisible();
    await page.locator('#toggle-map').tap();
    await expect(page.locator('.masthead')).toBeVisible();
    await expect(page.locator('#toggle-search')).toHaveText('Search');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.locator('#toggle-map').click();
    await expect(page.locator('.map-sheet-heading')).toBeHidden();
    await expect(page.locator('.masthead #toggle-search')).toHaveText('Find a class');
    const desktopMap = await page.locator('#map-pane').boundingBox();
    const desktopList = await page.locator('.class-pane').boundingBox();
    expect(desktopList.x + desktopList.width).toBeLessThan(desktopMap.x);
  });
}

test('dragging only the sheet handle changes size without rotating the campus', async ({ page }) => {
  await open(page, 390, 844);
  const selected = await page.evaluate(() => window.sonderPreview.map.stats.selected);
  const handle = await page.locator('#map-sheet-toggle').boundingBox();
  await page.mouse.move(handle.x + 130, handle.y + 25);
  await page.mouse.down();
  await page.mouse.move(handle.x + 130, handle.y - 220, { steps: 12 });
  await page.mouse.up();
  await expect(page.locator('body')).toHaveAttribute('data-map-sheet', 'full');
  const highHandle = await page.locator('#map-sheet-toggle').boundingBox();
  await page.mouse.move(highHandle.x + 130, highHandle.y + 25);
  await page.mouse.down();
  await page.mouse.move(highHandle.x + 130, 725, { steps: 15 });
  await page.mouse.up();
  await expect(page.locator('body')).toHaveAttribute('data-map-sheet', 'peek');
  expect(await page.evaluate(() => window.sonderPreview.map.stats.selected)).toBe(selected);
  await expect(page.locator('#lecture-list')).toBeHidden();
  // After an optional drag, a plain tap brings the courses back.
  await page.waitForTimeout(410);
  await page.locator('#map-sheet-toggle').tap();
  await expect(page.locator('body')).toHaveAttribute('data-map-sheet', 'half');
});

test('mobile starts without labels or the tool row, and exposes both on demand', async ({ page }) => {
  await open(page, 390, 844);
  await expect(page.locator('#labels-toggle')).toHaveAttribute('aria-pressed', 'false');
  await expect(page.locator('.map-label:not(.label-hidden)')).toHaveCount(0);
  await expect(page.locator('.view-controls')).toBeHidden();
  await page.getByRole('button', { name: 'Map tools', exact: true }).tap();
  await expect(page.locator('.view-controls')).toBeVisible();
  const home = await page.evaluate(() => window.sonderPreview.map.project('UC'));
  await page.locator('#zoom-in').tap();
  await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
  const zoomed = await page.evaluate(() => window.sonderPreview.map.project('UC'));
  expect(Math.hypot(zoomed.x - home.x, zoomed.y - home.y)).toBeGreaterThan(3);
  await page.locator('#reset-view').tap();
  await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
  const reset = await page.evaluate(() => window.sonderPreview.map.project('UC'));
  expect(Math.hypot(reset.x - home.x, reset.y - home.y)).toBeLessThan(1);
  await page.locator('#labels-toggle').tap();
  await expect(page.locator('#labels-toggle')).toHaveAttribute('aria-pressed', 'true');
  await expect.poll(() => page.locator('.map-label:not(.label-hidden)').count()).toBeGreaterThan(0);
  await page.locator('#source-button').tap();
  await expect(page.locator('#sources')).toBeVisible();
  await page.locator('#close-sources').tap();
  await page.locator('#map-tools-toggle').tap();
  await expect(page.locator('.view-controls')).toBeHidden();
  await page.locator('.lecture-open').first().tap();
  await expect(page.locator('.campus-destination-marker')).toBeVisible();
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator('.view-controls')).toBeVisible();
  await expect(page.locator('#map-tools-toggle')).toBeHidden();
});

test('small landscape phones keep the map beside the courses and above the actions', async ({ page }) => {
  await open(page, 568, 320);
  const canvas = await page.locator('#scene canvas').boundingBox();
  const list = await page.locator('.class-pane').boundingBox();
  const actions = await page.locator('.mobile-switch').boundingBox();
  expect(canvas.height).toBeGreaterThan(200);
  expect(canvas.x + canvas.width).toBeLessThanOrEqual(list.x + 1);
  expect(list.y + list.height).toBeLessThanOrEqual(actions.y);
  await expect(page.locator('#map-sheet-toggle')).toBeDisabled();
  await page.locator('#map-tools-toggle').tap();
  for (const id of ['zoom-in', 'labels-toggle', 'source-button']) await expect(page.locator('#' + id)).toBeInViewport();
  await page.setViewportSize({ width: 320, height: 568 });
  await expect(page.locator('#map-sheet-toggle')).toBeEnabled();
  await expect(page.locator('#map-sheet-toggle')).toHaveAccessibleName('More courses');
});
