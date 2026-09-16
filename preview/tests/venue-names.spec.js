import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { venueName } from '../src/explore/venue-names.js';
import { initialState, encodeState } from '../src/explore/model.js';

const buildings = JSON.parse(await readFile(new URL('../public/data/buildings.json', import.meta.url)));
const { meetings } = JSON.parse(await readFile(new URL('../public/data/lectures.json', import.meta.url)));

test('current venues have distinct compact labels; unknown venues retain their full name', () => {
  const names = Object.keys(buildings).map(code => venueName(code, buildings));
  expect(names.every(name => name.length <= 20)).toBe(true);
  expect(new Set(names).size).toBe(names.length);
  expect(venueName('NEW', { NEW: { name: 'New Campus Building' } })).toBe('New Campus Building');
  expect(venueName('UNKNOWN', buildings)).toBe('UNKNOWN');
});

test('long venue names use readable labels in cards and retain the full name in details', async ({ page }) => {
  for (const [code, label] of [['RL', 'Robarts'], ['OI', 'OISE'], ['MY', 'Myhal'], ['SM', 'Gerstein Library']]) {
    const meeting = meetings.find(m => m.building === code);
    expect(meeting).toBeTruthy();
    await page.goto('/explore.html' + encodeState({
      ...initialState(), day: meeting.day, term: meeting.term, timeMode: 'day',
      walk: 30, query: meeting.code, view: 'list',
    }));
    await page.waitForFunction(() => window.sonderPreview.liveData);
    const card = page.locator(`[data-open="${meeting.id}"]`);
    await expect(card.locator('.building-name')).toHaveText(label);
    await expect(card.locator('.building-name')).toHaveAttribute('title', buildings[code].name);
    await card.click();
    await expect(page.locator('.detail-building')).toHaveText(buildings[code].name);
    await expect(page.locator('.detail-room')).toContainText(code);
    await page.locator('#share-class').click();
    await expect(page.locator('#share-preview')).toContainText(label);
  }
});
