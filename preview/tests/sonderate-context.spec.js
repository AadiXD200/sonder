import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { initialState, encodeState, sonderateCandidates, createSearchIndex } from '../src/explore/model.js';

const readFixture = async name => JSON.parse(await readFile(new URL(`../src/explore/fixture-${name}.json`, import.meta.url)));
const meetings = await readFixture('meetings');
const buildings = await readFixture('buildings');
const topics = await readFixture('topics');
const defaults = { ...initialState(), timeMode: 'day', gapStart: 640 };
async function open(page, state = defaults) {
  await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
  await page.goto('/explore.html' + encodeState(state));
  await expect(page.locator('#sonderate')).toBeVisible();
}

test('the explanation describes the actual draw, keeps filters, and rerolls independently of the mission', async ({ page }) => {
  await open(page);
  const pool = sonderateCandidates(meetings, defaults, buildings, createSearchIndex(topics));
  expect(pool.length).toBeGreaterThan(1);
  await page.locator('#sonderate').click();
  await expect(page.locator('.sonderate-pick-summary')).toContainText(`${pool.length} matching classes`);
  await expect(page.locator('.sonderate-day-note')).toContainText('Sonderate still uses the hour shown above.');
  await expect(page.locator('.sonderate-filter-assurance')).toHaveText('Your filters stay on.');
  const title = await page.locator('#detail-title').textContent();
  const mission = await page.locator('#sonderate-mission-text').textContent();
  await page.locator('#next-mission').click();
  await expect(page.locator('#sonderate-mission-text')).not.toHaveText(mission);
  await expect(page.locator('#detail-title')).toHaveText(title);
  await page.locator('#sonderate-again').click();
  await expect(page.locator('#detail-title')).not.toHaveText(title);
  await expect(page.locator('.sonderate-pick-summary')).toContainText(`${pool.length - 1} matching classes`);
  await page.locator('[data-sonderate-filters]').click();
  await expect(page.locator('#lecture-detail')).toBeHidden();
  await expect(page.locator('#filters-dialog')).toBeVisible();
  await page.locator('#close-filters').click();
  await page.locator('.lecture-open').first().click();
  await expect(page.locator('#sonderate-context')).toHaveCount(0);
});

test('custom constraints and empty draws have an accurate explanation and recovery', async ({ page }) => {
  await open(page, { ...defaults, timeMode: 'custom', finishBy: true, gapEnd: 720,
    building: { codes: ['SS'] }, interests: ['psychology'], query: 'PSY100', minSeats: 100 });
  await page.locator('#sonderate').click();
  const filters = page.locator('.sonderate-applied-filters');
  for (const text of [topics.psychology.label, 'Sidney Smith', 'PSY100', '100+ seats', 'Must finish by 12:00 PM'])
    await expect(filters).toContainText(text);
  await page.locator('#close-detail').click();
  await page.goto('/explore.html' + encodeState({ ...defaults, gapStart: 1380, query: 'nonexistent-course' }));
  await page.locator('#sonderate').click();
  await expect(page.locator('#detail-title')).toHaveText('Nothing you can get to in time.');
  await expect(page.locator('#next-mission')).toHaveCount(0);
  await page.locator('#adjust-filters').click();
  await expect(page.locator('#filters-dialog')).toBeVisible();
});

test.describe('touch screens', () => {
  test.use({ isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
  for (const [width, height] of [[320, 568], [360, 740], [375, 667], [390, 844], [430, 932], [844, 390]]) {
    test(`class, explanation, share and filters stay usable at ${width} × ${height}`, async ({ page }) => {
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.setViewportSize({ width, height });
      await open(page);
      await page.locator('#sonderate').tap();
      const detail = page.locator('#lecture-detail');
      const explainer = page.locator('#sonderate-explainer');
      if (width <= 760) {
        await expect(explainer).not.toHaveAttribute('open');
        await explainer.locator('summary').tap();
      }
      await expect(explainer).toHaveAttribute('open');
      const mission = await page.locator('#sonderate-mission-text').textContent();
      await page.locator('#next-mission').tap();
      await expect(page.locator('#sonderate-mission-text')).not.toHaveText(mission);
      await expect(page.locator('#show-building')).toBeInViewport();
      await expect(page.locator('#share-class')).toBeInViewport();
      expect(await detail.evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
      await page.locator('#share-class').tap();
      await expect(page.locator('#share-preview')).toBeVisible();
      await expect(page.locator('#copy-invite')).toBeInViewport();
      expect(await page.locator('#share-dialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
      await page.locator('#close-share').tap();
      await expect(detail).toBeVisible();
      await page.locator('[data-sonderate-filters]').tap();
      await expect(page.locator('#filters-dialog')).toBeVisible();
      await expect(page.locator('#apply-filters')).toBeInViewport();
      await page.locator('#close-filters').tap();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(errors).toEqual([]);
    });
  }

  test('rotation moves the explanation between the sidebar and the class sheet', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await open(page);
    await page.locator('#sonderate').tap();
    await expect(page.locator('.detail-body > #sonderate-context')).toBeVisible();
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(page.locator('#lecture-detail > #sonderate-context')).toBeVisible();
    await expect(page.locator('#sonderate-explainer')).toHaveAttribute('open');
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.locator('.detail-body > #sonderate-context')).toBeVisible();
    await expect(page.locator('#sonderate-explainer')).not.toHaveAttribute('open');
    await page.locator('#close-detail').tap();
    await expect(page.locator('#sonderate')).toBeFocused();
  });
});
