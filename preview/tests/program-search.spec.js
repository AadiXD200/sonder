import { test, expect } from '@playwright/test';
import { searchPrograms, resolveProgram, programById } from '../src/explore/program-search.js';
import { initialState, encodeState, decodeState } from '../src/explore/model.js';

test('program aliases and shared-link validation use the published course groups', () => {
  expect(searchPrograms('comp sci')[0].id).toBe('computer-science');
  expect(resolveProgram('Computer Science').courseSet.has('CSC108H1')).toBe(true);
  expect(searchPrograms('rotman')[0].id).toBe('rotman-commerce');
  expect(programById.get('electrical-and-computer-engineering').prefixes).toContain('ECE');
  expect(decodeState(encodeState({ ...initialState(), program: 'computer-science' })).program).toBe('computer-science');
  expect(decodeState('#v=1&program=made-up').program).toBeNull();
});
for (const width of [390, 1440]) {
  test(`program suggestions select a course group and survive refresh at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
    await page.goto('/explore.html' + encodeState({ ...initialState(), timeMode: 'day', walk: 30 }));
    await page.locator('#toggle-search').click();
    await page.locator('#search').fill('comp sci');
    await expect(page.locator('[data-search-program="computer-science"]')).toContainText('Computer Science');
    await page.locator('[data-search-program="computer-science"]').click();
    await expect(page.locator('#search-panel')).toBeHidden();
    await expect(page.locator('#active-summary')).toContainText('Computer Science');
    const codes = await page.locator('.course-code').allTextContents();
    expect(codes.length).toBeGreaterThan(0);
    expect(codes.every(code => code.startsWith('CSC'))).toBe(true);
    expect(await page.evaluate(() => [window.sonderPreview.state.walk, window.sonderPreview.state.timeMode])).toEqual([30, 'day']);
    await page.reload();
    await expect(page.locator('#active-summary')).toContainText('Computer Science');
    await page.locator('#clear-all').click();
    expect(await page.evaluate(() => window.sonderPreview.state.program)).toBeNull();
  });
}
