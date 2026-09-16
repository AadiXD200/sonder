import { test, expect } from '@playwright/test';
import { searchTopics } from '../src/explore/topic-search.js';
import { readFile } from 'node:fs/promises';
import { initialState, encodeState } from '../src/explore/model.js';

const topics = JSON.parse(await readFile(new URL('../src/explore/fixture-topics.json', import.meta.url)));
test('topic suggestions resolve aliases and word prefixes without incidental substrings', () => {
  expect(searchTopics(' AI ', topics)[0].id).toBe('ai');
  expect(searchTopics('psych', topics).map(t => t.id)).toContain('psychology');
  expect(searchTopics('', topics)).toEqual([]);
  expect(searchTopics('bra', { brain: { label: 'Brain science', synonyms: [] }, library: { label: 'Library studies', synonyms: [] } }).map(t => t.id)).toEqual(['brain']);
});
test.use({ hasTouch: true, reducedMotion: 'reduce' });
for (const width of [320, 390, 1440]) {
  test(`search suggests topics and the topic chooser preserves other filters at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 320 ? 568 : 844 });
    await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
    await page.goto('/explore.html' + encodeState({ ...initialState(), timeMode: 'day', walk: 30 }));
    await page.locator('#toggle-search').tap();
    await page.locator('#search').fill('psych');
    const suggestion = page.locator('[data-search-topic="psychology"]');
    await expect(suggestion).toContainText('2 classes');
    await suggestion.tap();
    await expect(page.locator('#search')).toHaveValue('');
    await expect(page.locator('#interest-summary button')).toHaveCount(1);
    await page.locator('#search').fill('music');
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('[data-search-topic="music"]')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('#interest-summary button')).toHaveCount(2);
    await expect(page.locator('#search-topic-count')).toHaveText('2');
    await page.locator('#search-topics').tap();
    await expect(page.locator('#filters-title')).toHaveText('Topics');
    await expect(page.locator('#filter-when')).toBeHidden();
    await expect(page.locator('#topic-search')).toBeFocused();
    await expect(page.locator('#apply-filters')).toBeInViewport();
    await page.locator('#reset-filters').tap();
    await page.locator('#close-filters').tap();
    await expect(page.locator('#interest-summary button')).toHaveCount(2);
    await page.locator('#search-topics').tap();
    await page.locator('#reset-filters').tap();
    await page.locator('#apply-filters').tap();
    await expect(page.locator('#interest-summary')).toBeHidden();
    expect(await page.evaluate(() => [window.sonderPreview.state.walk, window.sonderPreview.state.timeMode])).toEqual([30, 'day']);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.locator('#open-filters').tap();
    await expect(page.locator('#filters-title')).toHaveText('Filters');
    await expect(page.locator('#filter-when')).toBeVisible();
  });
}
