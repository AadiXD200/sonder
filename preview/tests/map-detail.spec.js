import { test, expect } from '@playwright/test';
import { initialState, encodeState } from '../src/explore/model.js';

async function open(page, view = 'map') {
  await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
  await page.goto('/explore.html' + encodeState({ ...initialState(), view }));
  if (view === 'map') await page.waitForFunction(() => window.sonderPreview.map?.stats.isIdle);
}

test('new desktop and phone visits open the map while saved list views retain their choice', async ({ page }) => {
  await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
  await page.goto('/explore.html');
  await expect(page.locator('body')).toHaveAttribute('data-view', 'map');
  await expect(page.locator('#toggle-map')).toHaveText('Hide map');
  await expect(page.locator('.lecture-open').first()).toBeVisible();
  await page.waitForFunction(() => window.sonderPreview.map?.stats.isIdle);
  await page.locator('#toggle-map').click();
  await page.reload();
  await expect(page.locator('body')).toHaveAttribute('data-view', 'list');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/explore.html');
  await expect(page.locator('body')).toHaveAttribute('data-view', 'map');
  await expect(page.locator('#toggle-map')).toHaveText('Hide map');
  await page.waitForFunction(() => window.sonderPreview.map?.stats.isIdle);
  await page.locator('#toggle-map').click();
  await page.reload();
  await expect(page.locator('body')).toHaveAttribute('data-view', 'list');
  await expect(page.locator('#toggle-map')).toHaveText('Show map');
});

for (const width of [390, 1440]) {
  test(`campus home is centred on King's College Circle at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
    // A pin at the Circle provides a visible reference for the camera target.
    await page.goto('/explore.html' + encodeState({
      ...initialState(), view: 'map', pin: { lat: 43.66174, lng: -79.39518 },
    }));
    await page.waitForFunction(() => window.sonderPreview.map?.stats.isIdle);
    const offset = () => page.locator('.campus-location-pin').evaluate(pin => {
      const scene = pin.parentElement.getBoundingClientRect();
      return Math.hypot(parseFloat(pin.style.left) - scene.width / 2,
        parseFloat(pin.style.top) - scene.height / 2);
    });
    expect(await offset()).toBeLessThan(3);
    if (width <= 760) await page.locator('#map-tools-toggle').click();
    await page.locator('#zoom-in').click();
    await page.locator('#reset-view').click();
    await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
    expect(await offset()).toBeLessThan(3);
  });
}

for (const [view, random, width] of [['list', false, 1440], ['map', false, 1440], ['list', true, 1440], ['map', true, 1440], ['list', false, 390]]) {
  test(`building full day opens the selected building from ${view}, random=${random}, ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await open(page, view);
    if (random) await page.locator('#sonderate').click();
    else {
      await page.locator('.lecture-open').first().click();
      if (view === 'map') await page.getByRole('button', { name: 'Full details' }).click();
    }
    const buildingName = await page.locator('.detail-building').textContent();
    await page.locator('#building-day').click();
    await expect(page.locator('#lecture-detail')).toBeHidden();
    await expect(page.locator('body')).toHaveAttribute('data-view', width > 760 ? 'map' : 'list');
    await expect(page.locator('#time-day')).toHaveAttribute('aria-pressed', 'true');
    expect(await page.evaluate(() => window.sonderPreview.state.building.name)).toBe(buildingName);
    if (width > 760) {
      await page.waitForFunction(() => window.sonderPreview.map?.stats.isIdle);
      await expect(page.locator('#map-building-name')).toHaveText(buildingName);
    }
  });
}

test('desktop class details stay to the left while the map focuses and remains interactive', async ({ page }) => {
  await open(page);
  const before = await page.evaluate(() => window.sonderPreview.map.project('CH'));
  await page.locator('.lecture-open').first().click();
  if (await page.locator('.map-course-preview:visible').count()) await page.getByRole('button', { name: 'Full details' }).click();
  const detail = page.locator('#lecture-detail');
  await expect(detail).toHaveClass(/map-detail-docked/);
  expect(await detail.evaluate(el => el.matches(':modal'))).toBe(false);
  const panel = await detail.boundingBox(), canvas = await page.locator('#scene canvas').boundingBox();
  expect(panel.x + panel.width).toBeLessThan(canvas.x);
  await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
  const after = await page.evaluate(() => window.sonderPreview.map.project('CH'));
  expect(Math.hypot(before.x - after.x, before.y - after.y)).toBeGreaterThan(5);
  await page.locator('#zoom-in').click();
  await expect(detail).toBeVisible();
  await page.locator('#share-class').click();
  await expect(page.locator('#share-dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#share-dialog')).toBeHidden();
  await expect(detail).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(detail).toBeHidden();
  await expect(page.locator('.lecture-open').first()).toBeVisible();
  await page.locator('.lecture-open').first().click();
  await page.locator('#time-day').click();
  await expect(detail).toBeHidden();
  await expect(page.locator('.lecture-open').first()).toBeVisible();
});

test('Show on map docks the same class, and resizing restores phone modality without losing it', async ({ page }) => {
  await open(page, 'list');
  await page.locator('.lecture-open').first().click();
  if (await page.locator('.map-course-preview:visible').count()) await page.getByRole('button', { name: 'Full details' }).click();
  const detail = page.locator('#lecture-detail');
  const title = await page.locator('#detail-title').textContent();
  await page.locator('#show-building').click();
  await expect(detail).toHaveClass(/map-detail-docked/);
  await expect(page.locator('#detail-title')).toHaveText(title);
  for (const width of [1024, 1280]) {
    await page.setViewportSize({ width, height: 720 });
    const panel = await detail.boundingBox(), map = await page.locator('#map-pane').boundingBox();
    expect(panel.x + panel.width).toBeLessThanOrEqual(map.x);
    expect(await detail.evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await expect(page.locator('#share-class')).toBeInViewport();
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(detail).not.toHaveClass(/map-detail-docked/);
  expect(await detail.evaluate(el => el.matches(':modal'))).toBe(true);
  await expect(page.locator('#detail-title')).toHaveText(title);
  await expect(page.locator('#show-building')).toBeHidden();
  await page.locator('#close-detail').click();
  await expect(detail).toBeHidden();
  await expect(page.locator('body')).toHaveAttribute('data-view', 'map');
});

test('Sonderate fits its explanation into the map side panel and returns to a modal when the map closes', async ({ page }) => {
  await open(page);
  await page.locator('#sonderate').click();
  await expect(page.locator('#lecture-detail')).toHaveClass(/map-detail-docked/);
  await expect(page.locator('.detail-body #sonderate-context')).toBeVisible();
  await expect(page.locator('#show-building')).toBeHidden();
  await expect(page.locator('#similar-classes')).toBeInViewport();
  await expect(page.locator('#similar-classes')).toHaveClass('ink-button');
  await expect(page.locator('#share-class')).toBeInViewport();
  await expect(page.locator('#sonderate-mission-text')).toBeVisible();
  await expect(page.locator('.sonderate-explanation')).toBeVisible();
  await page.locator('#next-mission').click();
  await page.locator('#toggle-map').click();
  expect(await page.locator('#lecture-detail').evaluate(el => el.matches(':modal'))).toBe(true);
  await expect(page.locator('#lecture-detail > #sonderate-context')).toBeVisible();
  await page.locator('#close-detail').click();
  await expect(page.locator('#sonderate')).toBeFocused();
});

for (const width of [1024, 1440]) {
  test(`map course previews expand in place before full details at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await open(page);
    const first = page.locator('.lecture-open').first();
    await first.click();
    await expect(first).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#lecture-detail')).toBeHidden();
    await expect(page.locator('.map-course-preview:visible')).toHaveCount(1);
    await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
    await page.locator('#zoom-in').click();
    await expect(page.locator('.map-course-preview:visible')).toHaveCount(1);
    await first.click();
    await expect(first).toHaveAttribute('aria-expanded', 'false');
    await first.click();
    await page.locator('.lecture-open').nth(1).click();
    await expect(first).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('.map-course-preview:visible')).toHaveCount(1);
    await page.getByRole('button', { name: 'Full details' }).click();
    await expect(page.locator('#lecture-detail')).toHaveClass(/map-detail-docked/);
    await page.locator('#close-detail').click();
    await expect(page.locator('.map-course-preview:visible')).toHaveCount(1);
    await page.locator('#toggle-map').click();
    await page.locator('.lecture-open').first().click();
    expect(await page.locator('#lecture-detail').evaluate(el => el.matches(':modal'))).toBe(true);
  });
}
