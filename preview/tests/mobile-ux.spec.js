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
      "show-list",
      "show-map",
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
test("map controls have finger-sized targets, with space retained for the map", async ({
  page,
}) => {
  await open(page, "map");
  expect(
    (await page.locator("#scene canvas").boundingBox()).height,
  ).toBeGreaterThan(440);
  for (const width of [320, 390]) {
    await page.setViewportSize({ width, height: 844 });
    for (const id of [
      "view-3d",
      "view-2d",
      "zoom-in",
      "zoom-out",
      "reset-view",
      "labels-toggle",
    ]) {
      const r = await page.locator("#" + id).boundingBox();
      expect(r.width).toBeGreaterThanOrEqual(44);
      expect(r.height).toBeGreaterThanOrEqual(44);
      expect(r.x).toBeGreaterThanOrEqual(0);
      expect(r.x + r.width).toBeLessThanOrEqual(width);
    }
  }
});
test("search from the map opens results, accommodates the keyboard, and finishes on Enter", async ({
  page,
}) => {
  await open(page, "map");
  await page.locator("#toggle-search").tap();
  await expect(page.locator("body")).toHaveAttribute("data-view", "list");
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
  await expect(page.locator("#results-title")).toBeFocused();
  await page.evaluate(() => {
    delete visualViewport.height;
    visualViewport.dispatchEvent(new Event("resize"));
  });
  await expect(page.locator(".mobile-switch")).toBeVisible();
  await page.locator("#show-map").tap();
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
