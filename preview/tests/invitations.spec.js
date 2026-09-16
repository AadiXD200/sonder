import { test, expect } from '@playwright/test';

test.beforeEach(async ({ context }) => {
  await context.route('**/data/lectures.json', r => r.fulfill({ status: 404, body: 'Fixtures' }));
});
for (const width of [390, 1440]) {
  test(`a class invite opens a welcome and then the correct class at ${width}px`, async ({ page, context }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/explore.html');
    await page.locator('.lecture-open').first().click();
    await page.getByRole('button', { name: 'Full details', exact: true }).click();
    const title = await page.locator('#detail-title').textContent();
    await page.getByRole('button', { name: 'Share class', exact: true }).click();
    await expect(page.locator('#share-preview')).toContainText(title);
    const link = await page.locator('#share-url').inputValue();
    const recipient = await context.newPage();
    const errors = [];
    recipient.on('pageerror', e => errors.push(e.message));
    await recipient.setViewportSize({ width, height: 844 });
    await recipient.goto(link);
    await expect(recipient.locator('#invite-welcome')).toBeVisible();
    await expect(recipient.locator('#invite-title')).toContainText('Go together.');
    await expect(recipient.locator('#invite-welcome .invitation-ticket')).toContainText(title);
    await expect(recipient.locator('#lecture-detail')).toBeHidden();
    expect(await recipient.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await recipient.locator('#accept-invitation').click();
    await expect(recipient.locator('#invite-welcome')).toBeHidden();
    await expect(recipient.locator('#detail-title')).toHaveText(title);
    expect(recipient.url()).not.toContain('invite=1');
    await recipient.reload();
    await expect(recipient.locator('#invite-welcome')).toBeHidden();
    await expect(recipient.locator('#detail-title')).toHaveText(title);
    expect(errors).toEqual([]);
  });
}
test('copy denial gives a selectable invitation and recipients can decline or recover a missing class', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: async () => { throw new Error('Denied'); } },
  }));
  await page.goto('/explore.html');
  await page.locator('.lecture-open').first().click();
  await page.getByRole('button', { name: 'Full details', exact: true }).click();
  await page.locator('#share-class').click();
  await page.locator('#copy-invite').click();
  await expect(page.locator('#share-feedback')).toContainText('Select and copy');
  await expect(page.locator('#share-url')).toBeFocused();
  const link = await page.locator('#share-url').inputValue();
  await page.goto(link);
  await expect(page.locator('#invite-welcome')).toBeVisible();
  await page.locator('#browse-instead').click();
  await expect(page.locator('#invite-welcome')).toBeHidden();
  expect(page.url()).not.toContain('invite=1');
  await page.goto('/explore.html#v=1&invite=1&class=missing');
  await expect(page.locator('#invite-title')).toHaveText('This detour is unavailable.');
  await expect(page.locator('#accept-invitation')).toHaveCount(0);
  await page.locator('#browse-instead').click();
  await expect(page.locator('.class-ticket').first()).toBeVisible();
});

test('published invitations resolve after the catalogue loads', async ({ page, context }) => {
  await context.unroute('**/data/lectures.json');
  const response = await page.request.get('/data/lectures.json');
  const catalogue = await response.json();
  const meeting = catalogue.meetings[0];
  await page.goto('/explore.html#' + new URLSearchParams({
    v: '1', invite: '1', class: meeting.id, day: String(meeting.day), term: meeting.term, timeMode: 'day',
  }));
  await page.waitForFunction(() => window.sonderPreview.liveData);
  await expect(page.locator('#invite-welcome .invitation-ticket')).toContainText(meeting.title);
  await page.locator('#accept-invitation').click();
  await expect(page.locator('#detail-title')).toHaveText(meeting.title);
});
