import { test, expect } from "@playwright/test";
import { initialState, encodeState } from "../src/explore/model.js";

async function openMap(page, overrides = {}) {
  await page.route("**/data/lectures.json", (r) =>
    r.fulfill({ status: 404, body: "Fixture preview" }),
  );
  await page.goto(
    "/explore.html" +
      encodeState({ ...initialState(), view: "map", ...overrides }),
  );
  await page.waitForFunction(
    () =>
      window.sonderPreview.map?.status === "ready" &&
      window.sonderPreview.map.stats.isIdle,
  );
}
async function tapBahenMesh(page) {
  // Hide labels so this is a genuine canvas/mesh tap, not a label click.
  await page.locator("#labels-toggle").tap();
  const before = await page.evaluate(() =>
    window.sonderPreview.map.project("BA"),
  );
  await page.touchscreen.tap(before.x, before.y);
  await expect
    .poll(() => page.evaluate(() => window.sonderPreview.state.building?.codes))
    .toContain("BA");
  await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
  return before;
}

test.describe("phone map with actual touch input", () => {
  test.use({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });

  test("mesh tap arrives on map, then building-name tap opens its classes", async ({
    page,
  }) => {
    await openMap(page);
    const before = await tapBahenMesh(page);
    await expect(page.locator("body")).toHaveAttribute("data-view", "map");
    await expect(page.locator("#map-building-preview")).toBeVisible();
    expect(
      await page.evaluate(() => window.sonderPreview.map.stats.planView),
    ).toBe(false);
    await expect(page.locator("#map-building-name")).toContainText("Bahen");
    await expect(page.locator("#map-building-count")).toContainText(
      "View 3 classes",
    );
    const after = await page.evaluate(() =>
      window.sonderPreview.map.project("BA"),
    );
    expect(Math.hypot(before.x - after.x, before.y - after.y)).toBeGreaterThan(
      5,
    );
    const panel = await page.locator("#map-building-preview").boundingBox(),
      nav = await page.locator(".mobile-switch").boundingBox();
    expect(panel.y + panel.height).toBeLessThanOrEqual(nav.y);
    expect(panel.x).toBeGreaterThanOrEqual(0);
    expect(panel.x + panel.width).toBeLessThanOrEqual(390);
    await page.locator("#map-building-classes").tap();
    await expect(page.locator("body")).toHaveAttribute("data-view", "list");
    await expect(page.locator(".class-ticket")).toHaveCount(3);
    await expect(page.locator("#active-summary")).toContainText("Bahen");
    await expect(page.locator("#results-title")).toBeFocused();
    await page.locator("#show-map").tap();
    await expect(page.locator("#map-building-preview")).toBeVisible();
    await page.locator("#dismiss-map-building").tap();
    await expect(page.locator("#map-building-preview")).toBeHidden();
    expect(
      await page.evaluate(() => window.sonderPreview.state.building),
    ).toBeNull();
    await expect(page.locator("body")).toHaveAttribute("data-view", "map");
  });

  test("zero-match name control leads to an explained empty list", async ({
    page,
  }) => {
    await openMap(page, { query: "unmatched subject" });
    await tapBahenMesh(page);
    await expect(page.locator("#map-building-count")).toContainText(
      "No matches with these filters",
    );
    await page.locator("#map-building-classes").tap();
    await expect(page.locator("body")).toHaveAttribute("data-view", "list");
    await expect(page.locator(".class-ticket")).toHaveCount(0);
    await expect(page.locator(".empty-state")).toContainText(
      "Nothing for “unmatched subject” with these filters.",
    );
    await expect(page.locator("#active-summary")).toContainText("Bahen");
  });

  test("touch orbit and cancelled touch never open a building preview", async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName !== "chromium",
      "Multi-step touch injection requires CDP",
    );
    await openMap(page);
    await page.locator("#labels-toggle").tap();
    const point = await page.evaluate(() =>
      window.sonderPreview.map.project("BA"),
    );
    const session = await page.context().newCDPSession(page);
    await session.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [{ x: point.x, y: point.y, id: 1 }],
    });
    await session.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x: point.x + 35, y: point.y - 20, id: 1 }],
    });
    await session.send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [],
    });
    await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
    await expect(page.locator("#map-building-preview")).toBeHidden();
    expect(
      await page.evaluate(() => window.sonderPreview.map.stats.selected),
    ).toBeNull();
    await session.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [{ x: point.x, y: point.y, id: 2 }],
    });
    await session.send("Input.dispatchTouchEvent", {
      type: "touchCancel",
      touchPoints: [],
    });
    await expect(page.locator("#map-building-preview")).toBeHidden();
    await expect(page.locator("body")).toHaveAttribute("data-view", "map");
  });
});

test("desktop keeps the split map and filtered list without the phone panel", async ({
  page,
}) => {
  await openMap(page);
  await page.locator("#labels-toggle").click();
  const point = await page.evaluate(() =>
    window.sonderPreview.map.project("BA"),
  );
  await page.mouse.click(point.x, point.y);
  await expect
    .poll(() => page.evaluate(() => window.sonderPreview.state.building?.codes))
    .toContain("BA");
  await expect(page.locator(".class-pane")).toBeVisible();
  await expect(page.locator("#map-pane")).toBeVisible();
  await expect(page.locator(".class-ticket")).toHaveCount(3);
  await expect(page.locator("#map-building-preview")).toBeHidden();
  await expect(page.locator("body")).toHaveAttribute("data-view", "map");
});

test("logo links relatively to the landing page", async ({ page }) => {
  await openMap(page);
  await expect(
    page.getByRole("link", { name: "Sonder — home" }),
  ).toHaveAttribute("href", "../");
  expect(
    await page
      .locator(".logo")
      .evaluate(
        (el) =>
          new URL(
            el.getAttribute("href"),
            "https://example.test/prefix/app/explore.html",
          ).pathname,
      ),
  ).toBe("/prefix/");
});
