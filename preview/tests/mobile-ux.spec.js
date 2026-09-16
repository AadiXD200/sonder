import { expandFilters } from "./filter-helpers.js";
import { test, expect } from "@playwright/test";
import { initialState, encodeState } from "../src/explore/model.js";

test.use({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
async function open(page, view = "list") {
  await page.route("**/data/lectures.json", (r) =>
    r.fulfill({ status: 404, body: "Fixtures" }),
  );
  await page.goto("/explore.html" + encodeState({ ...initialState(), view }));
  await expect(page.locator("#sonderate")).toBeVisible();
  if (view === "map")
    await page.waitForFunction(
      () =>
        window.sonderPreview.map?.status === "ready" &&
        window.sonderPreview.map.stats.isIdle,
    );
}
async function revealTools(page) {
  const toggle = page.locator('#map-tools-toggle');
  if (await toggle.isVisible() && await toggle.getAttribute('aria-expanded') === 'false') await toggle.tap();
}
test("primary action stays within thumb reach and returns to the desktop toolbar", async ({
  page,
}) => {
  await open(page);
  for (const width of [320, 390, 760]) {
    await page.setViewportSize({ width, height: 844 });
    expect(
      await page
        .locator("#sonderate")
        .evaluate((el) => el.parentElement.classList.contains("mobile-switch")),
    ).toBe(true);
    for (const id of [
      "sonderate",
      "toggle-map",
      "open-filters",
      "toggle-search",
    ]) {
      const r = await page.locator("#" + id).boundingBox();
      expect(r.height).toBeGreaterThanOrEqual(44);
      expect(r.width).toBeGreaterThanOrEqual(44);
      expect(r.x).toBeGreaterThanOrEqual(0);
      expect(r.x + r.width).toBeLessThanOrEqual(width);
    }
    expect((await page.locator("#sonderate").boundingBox()).y).toBeGreaterThan(
      740,
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.locator("#sonderate").tap();
  await expect(page.locator("#lecture-detail")).toBeVisible();
  await page.locator("#close-detail").tap();
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(page.locator(".main-actions #sonderate")).toBeVisible();
  await expect(page.locator(".mobile-switch")).toBeHidden();
  await page.locator("#sonderate").click();
  await expect(page.locator("#lecture-detail")).toBeVisible();
});
test("one mobile map toggle changes its label and preserves the selected filters", async ({ page }) => {
  await open(page);
  await page.locator('#time-day').tap();
  const toggle = page.locator('.mobile-switch #toggle-map');
  await expect(page.locator('.mobile-switch > button')).toHaveCount(2);
  await expect(toggle).toHaveText('Show map');
  await toggle.tap();
  await expect(page.locator('body')).toHaveAttribute('data-view', 'map');
  await expect(toggle).toHaveText('Hide map');
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await toggle.tap();
  await expect(page.locator('body')).toHaveAttribute('data-view', 'list');
  await expect(toggle).toHaveText('Show map');
  await expect(page.locator('#time-day')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.lecture-open').first()).toBeVisible();
});
test("map controls have finger-sized targets, with space retained for the map", async ({
  page,
}) => {
  await open(page, "map");
  expect(
    (await page.locator("#scene canvas").boundingBox()).height,
  ).toBeGreaterThan(350);
  for (const width of [320, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await revealTools(page);
    for (const id of [
      "zoom-in",
      "zoom-out",
      "reset-view",
      "labels-toggle",
      "source-button",
    ]) {
      const r = await page.locator("#" + id).boundingBox();
      expect(r.width).toBeGreaterThanOrEqual(44);
      expect(r.height).toBeGreaterThanOrEqual(44);
      expect(r.x).toBeGreaterThanOrEqual(0);
      expect(r.x + r.width).toBeLessThanOrEqual(width);
    }
  }
});
test("map information sits beside Aa and the handwritten caption sits at the bottom", async ({ page }) => {
  await open(page, "map");
  for (const width of [320, 390, 1440]) {
    await page.setViewportSize({ width, height: 844 });
    await revealTools(page);
    const source = page.getByRole('button', { name: 'Map information and sources' });
    const arrow = await source.boundingBox();
    const labels = await page.locator('#labels-toggle').boundingBox();
    expect(arrow.x).toBeGreaterThanOrEqual(labels.x + labels.width);
    expect(Math.abs(arrow.y - labels.y)).toBeLessThan(2);
    const caption = await page.locator('.map-discovery-note').boundingBox();
    const frame = await page.locator('.map-frame').boundingBox();
    expect(frame.y + frame.height - caption.y - caption.height).toBeLessThanOrEqual(14);
    await expect(page.locator('.map-bottom')).toHaveCount(0);
    await source.tap();
    await expect(page.locator('#sources')).toBeVisible();
    await expect(page.locator('#sources')).toContainText('© OpenStreetMap');
    await page.locator('#close-sources').tap();
    await expect(page.locator('#sources')).toBeHidden();
  }
});
test("search stays on the map, accommodates the keyboard, and finishes on Enter", async ({
  page,
}) => {
  await open(page, "map");
  await page.locator("#toggle-search").tap();
  await expect(page.locator("body")).toHaveAttribute("data-view", "map");
  await expect(page.locator("#search")).toBeFocused();
  expect(
    await page
      .locator("#search")
      .evaluate((el) => parseFloat(getComputedStyle(el).fontSize)),
  ).toBeGreaterThanOrEqual(16);
  await page.locator("#search").fill("psychology");
  await expect(page.locator(".class-ticket")).toHaveCount(1);
  // Browser automation has no OS keyboard. Simulate its VisualViewport resize.
  await page.evaluate(() => {
    Object.defineProperty(visualViewport, "height", {
      value: 420,
      configurable: true,
    });
    visualViewport.dispatchEvent(new Event("resize"));
  });
  await expect(page.locator("body")).toHaveClass(/mobile-keyboard/);
  await expect(page.locator(".mobile-switch")).toBeHidden();
  expect((await page.locator(".app-shell").boundingBox()).height).toBe(420);
  expect((await page.locator("#search").boundingBox()).y).toBeLessThan(100);
  await page.keyboard.press("Enter");
  await expect(page.locator("body")).toHaveAttribute("data-view", "map");
  await expect(page.locator("#search-panel")).toBeHidden();
  await expect(page.locator("#results-title")).toBeFocused();
  await page.evaluate(() => {
    delete visualViewport.height;
    visualViewport.dispatchEvent(new Event("resize"));
  });
  await expect(page.locator(".mobile-switch")).toBeVisible();
  await page.locator("#toggle-map").tap();
  await expect(page.locator("#search-panel")).toBeHidden();
  expect(await page.evaluate(() => window.sonderPreview.state.query)).toBe(
    "psychology",
  );
});
test("phone sheets prioritize the gap and meeting facts, with reachable actions", async ({
  page,
}) => {
  await open(page);
  await page.locator("#open-filters").tap();
  await expandFilters(page);
  expect((await page.locator(".gap-field").boundingBox()).y).toBeLessThan(
    (await page.locator(".subject-field").boundingBox()).y,
  );
  for (const id of ["gap-from", "gap-until", "term", "day", "walk-time"])
    expect(
      await page
        .locator("#" + id)
        .evaluate((el) => parseFloat(getComputedStyle(el).fontSize)),
    ).toBeGreaterThanOrEqual(16);
  const apply = await page.locator("#apply-filters").boundingBox();
  expect(apply.y + apply.height).toBeLessThanOrEqual(844);
  await page.locator("#close-filters").tap();
  await page.locator(".lecture-open").first().tap();
  const facts = await page.locator(".detail-body dl").boundingBox(),
    description = await page.locator(".detail-description").boundingBox();
  expect(facts.y + facts.height).toBeLessThanOrEqual(description.y);
  await expect(page.locator("#show-building")).toBeInViewport();
  await expect(page.locator("#share-class")).toBeInViewport();
  expect(
    await page
      .locator("#lecture-detail")
      .evaluate((el) => el.scrollWidth <= el.clientWidth),
  ).toBe(true);
  await page.setViewportSize({ width: 320, height: 667 });
  await expect(page.locator("#show-building")).toBeInViewport();
  expect(
    await page
      .locator("#lecture-detail")
      .evaluate((el) => el.scrollWidth <= el.clientWidth),
  ).toBe(true);
});
