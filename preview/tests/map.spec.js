import { test, expect } from "@playwright/test";

test("campus loads, selects sourced buildings, changes view, and stops rendering at rest", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await page.waitForFunction(
    () =>
      window.campusMap?.status === "ready" &&
      window.campusMap.stats.renderCount > 0,
  );
  await expect(page.locator("#fallback")).toBeHidden();
  await expect(
    page.getByRole("heading", { name: "St. George." }),
  ).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => window.campusMap.stats.isIdle);
  const stats = await page.evaluate(() => window.campusMap.stats);
  expect(stats.buildings).toBeGreaterThan(200);
  expect(stats.drawCalls).toBeLessThan(20);
  await page.waitForTimeout(500);
  expect(await page.evaluate(() => window.campusMap.stats.renderCount)).toBe(
    stats.renderCount,
  );
  await page
    .getByRole("button", { name: "Explore Robarts Library", exact: true })
    .click();
  await expect(page.locator("#selection-name")).toHaveText("Robarts Library");
  await expect(page.locator("#official-link")).toHaveAttribute(
    "href",
    "https://map.utoronto.ca/?id=1809#!m/959690",
  );
  await page.waitForFunction(() => window.campusMap.stats.isIdle);
  await page.keyboard.press("Escape");
  await expect(page.locator("#selection")).toBeHidden();
  await page.waitForFunction(() => window.campusMap.stats.isIdle);
  await page.getByRole("button", { name: "PLAN VIEW", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "PLAN VIEW", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.waitForFunction(() => window.campusMap.stats.isIdle);
  const rest = await page.evaluate(() => window.campusMap.stats.renderCount);
  await page.waitForTimeout(300);
  expect(await page.evaluate(() => window.campusMap.stats.renderCount)).toBe(
    rest,
  );
  await page.getByRole("button", { name: "Toggle building labels" }).click();
  await expect(page.locator(".map-label:not(.label-hidden)")).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("mesh picking works independently of labels", async ({ page }) => {
  await page.goto("/");
  await page.waitForFunction(
    () =>
      window.campusMap?.status === "ready" &&
      window.campusMap.stats.renderCount > 0,
  );
  await page.getByRole("button", { name: "Toggle building labels" }).click();
  const point = await page.evaluate(() =>
    window.campusMap.project("Robarts Library"),
  );
  await page.mouse.click(point.x, point.y);
  await expect(page.locator("#selection-name")).toHaveText("Robarts Library");
});

test("mobile controls and selected building remain usable", async ({
  browser,
}) => {
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
  });
  await page.goto("http://127.0.0.1:5175");
  await page.waitForFunction(
    () =>
      window.campusMap?.status === "ready" &&
      window.campusMap.stats.renderCount > 0,
  );
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(
    390,
  );
  expect(
    await page.evaluate(() => window.campusMap.stats.pixelRatio),
  ).toBeLessThanOrEqual(1.5);
  await page
    .getByRole("button", { name: "Explore Robarts Library", exact: true })
    .tap();
  await expect(page.locator("#selection")).toBeVisible();
  await page.waitForFunction(() => window.campusMap.stats.isIdle);
  const box = await page.locator("#selection").boundingBox();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(390);
  expect(box.y + box.height).toBeLessThan(700);
  await page.getByRole("button", { name: "Close building details" }).tap();
  await expect(page.locator("#selection")).toBeHidden();
  await page.close();
});

test("sources are accessible and map failure has a usable fallback", async ({
  page,
}) => {
  await page.route("**/data/campus.bin.gz", (r) => r.abort());
  await page.goto("/");
  await expect(page.locator("#fallback")).toBeVisible();
  await page.getByRole("button", { name: "Map sources" }).click();
  await expect(page.locator("#sources")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "City of Toronto · 3D Massing, 2025 ↗" }),
  ).toHaveAttribute("href", "https://open.toronto.ca/dataset/3d-massing/");
  await page.keyboard.press("Escape");
  await expect(page.locator("#sources")).toBeHidden();
});

test("reduced motion completes camera changes without a running animation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.waitForFunction(
    () =>
      window.campusMap?.status === "ready" &&
      window.campusMap.stats.renderCount > 0,
  );
  await page.getByRole("button", { name: "PLAN VIEW", exact: true }).click();
  await page.waitForTimeout(100);
  const frames = await page.evaluate(() => window.campusMap.stats.renderCount);
  await page.waitForTimeout(200);
  expect(await page.evaluate(() => window.campusMap.stats.renderCount)).toBe(
    frames,
  );
});
