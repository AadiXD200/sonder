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
  // The closer phone default crops Bahen; zoom out before these mesh gestures.
  const tools = page.locator('#map-tools-toggle');
  if (await tools.isVisible()) {
    const point = await page.evaluate(() => window.sonderPreview.map.project('BA'));
    const canvas = await page.locator('#scene canvas').boundingBox();
    if (point.x < canvas.x + 20 || point.x > canvas.x + canvas.width - 20) {
      await tools.tap();
      await page.locator('#zoom-out').tap();
      await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
      await tools.tap();
    }
  }
}
async function tapBahenMesh(page) {
  // Hide labels so this is a genuine canvas/mesh tap, not a label click.
  if (await page.locator("#labels-toggle").getAttribute("aria-pressed") === "true") {
    if (await page.locator("#map-tools-toggle").isVisible()) await page.locator("#map-tools-toggle").tap();
    await page.locator("#labels-toggle").tap();
  }
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

  test("mesh tap focuses the building and shows its classes alongside the map", async ({
    page,
  }) => {
    await openMap(page);
    const before = await tapBahenMesh(page);
    await expect(page.locator("body")).toHaveAttribute("data-view", "map");
    await expect(page.locator("#map-sheet-clear")).toBeVisible();
    expect(
      await page.evaluate(() => window.sonderPreview.map.stats.planView),
    ).toBe(false);
    await expect(page.locator("#map-sheet-name")).toContainText("Bahen");
    await expect(page.locator("#map-sheet-meta")).toContainText(
      "1 class",
    );
    const after = await page.evaluate(() =>
      window.sonderPreview.map.project("BA"),
    );
    expect(Math.hypot(before.x - after.x, before.y - after.y)).toBeGreaterThan(
      5,
    );
    const panel = await page.locator(".map-sheet-heading").boundingBox(),
      nav = await page.locator(".mobile-switch").boundingBox();
    expect(panel.y + panel.height).toBeLessThanOrEqual(nav.y);
    expect(panel.x).toBeGreaterThanOrEqual(0);
    expect(panel.x + panel.width).toBeLessThanOrEqual(390);
    await expect(page.locator(".class-ticket")).toHaveCount(1);
    await page.locator("#map-sheet-toggle").tap();
    await expect(page.locator("body")).toHaveAttribute("data-map-sheet", "full");
    await expect(page.locator("body")).toHaveAttribute("data-view", "map");
    await page.locator("#map-sheet-clear").tap();
    await expect(page.locator("#map-sheet-clear")).toBeHidden();
    expect(
      await page.evaluate(() => window.sonderPreview.state.building),
    ).toBeNull();
    await expect(page.locator("body")).toHaveAttribute("data-view", "map");
  });

  test("dragging after a building tap clears its preview and filter", async ({
    page,
    browserName,
  }) => {
    test.skip(browserName !== "chromium", "Touch dragging requires CDP");
    await openMap(page);
    await tapBahenMesh(page);
    const point = await page.evaluate(() =>
      window.sonderPreview.map.project("BA"),
    );
    const session = await page.context().newCDPSession(page);
    await session.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [{ x: point.x, y: point.y, id: 1 }],
    });
    await expect(page.locator("#map-sheet-clear")).toBeVisible();
    await session.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x: point.x + 20, y: point.y - 10, id: 1 }],
    });
    await expect(page.locator("#map-sheet-clear")).toBeVisible();
    await session.send("Input.dispatchTouchEvent", {
      type: "touchEnd", touchPoints: [],
    });
    await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
    await expect(page.locator("#map-sheet-clear")).toBeVisible();
    await session.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [{ x: point.x, y: point.y, id: 1 }],
    });
    await session.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x: point.x + 110, y: point.y - 30, id: 1 }],
    });
    await expect(page.locator("#map-sheet-clear")).toBeHidden();
    await session.send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [],
    });
    await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
    expect(
      await page.evaluate(() => window.sonderPreview.state.building),
    ).toBeNull();
    expect(
      await page.evaluate(() => window.sonderPreview.map.stats.selected),
    ).toBeNull();
    expect(
      await page.evaluate(() => window.sonderPreview.map.stats.planView),
    ).toBe(false);
    await expect(page.locator("body")).toHaveAttribute("data-view", "map");
    await expect(page.locator(".campus-destination-marker")).toBeHidden();
    await expect(page.locator("#view-2d, #view-3d")).toHaveCount(0);
  });

  test("two-finger twisting changes the angle and pinching zooms without leaving a building", async ({ page, browserName }) => {
    test.skip(browserName !== "chromium", "Multi-touch input requires CDP");
    await openMap(page);
    await tapBahenMesh(page);
    const box = await page.locator("#scene canvas").boundingBox();
    const x = box.x + box.width / 2;
    // Keep both fingers on the canvas, away from the draggable walking pin.
    const y = await page.evaluate(({ box, x }) => {
      for (const fraction of [0.25, 0.4, 0.6]) {
        const y = box.y + box.height * fraction;
        const clear = [0, 0.35, 0.7].every(angle => [50, 85].every(radius =>
          [-1, 1].every(sign => document.elementFromPoint(
            x + sign * Math.cos(angle) * radius,
            y + sign * Math.sin(angle) * radius,
          )?.tagName === "CANVAS"),
        ));
        if (clear) return y;
      }
      throw new Error("No unobstructed area for the two-finger gesture");
    }, { box, x });
    const points = (angle, radius) => [
      { x: x - Math.cos(angle) * radius, y: y - Math.sin(angle) * radius, id: 1 },
      { x: x + Math.cos(angle) * radius, y: y + Math.sin(angle) * radius, id: 2 },
    ];
    const vector = () => page.evaluate(() => {
      const a = window.sonderPreview.map.project("BA"), b = window.sonderPreview.map.project("RL");
      return { x: b.x - a.x, y: b.y - a.y };
    });
    const before = await vector();
    const session = await page.context().newCDPSession(page);
    await session.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: points(0, 50) });
    for (let i = 1; i <= 7; i++)
      await session.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: points(i / 10, 50) });
    await session.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
    await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
    const turned = await vector();
    expect(Math.hypot(turned.x - before.x, turned.y - before.y)).toBeGreaterThan(10);
    await expect(page.locator("#map-sheet-clear")).toBeVisible();
    await session.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: points(0, 50) });
    for (let radius = 55; radius <= 85; radius += 5)
      await session.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: points(0, radius) });
    await session.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
    await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
    const zoomed = await vector();
    expect(Math.hypot(zoomed.x, zoomed.y)).toBeGreaterThan(Math.hypot(turned.x, turned.y) * 1.2);
    await expect(page.locator("#map-sheet-clear")).toBeVisible();
  });

  test("zero matches are explained in the sheet beside the selected building", async ({
    page,
  }) => {
    await openMap(page, { query: "unmatched subject" });
    await tapBahenMesh(page);
    await expect(page.locator("#map-sheet-meta")).toContainText(
      "0 classes",
    );
    await expect(page.locator("body")).toHaveAttribute("data-view", "map");
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
    if (await page.locator("#labels-toggle").getAttribute("aria-pressed") === "true") {
    if (await page.locator("#map-tools-toggle").isVisible()) await page.locator("#map-tools-toggle").tap();
    await page.locator("#labels-toggle").tap();
  }
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
    await expect(page.locator("#map-sheet-clear")).toBeHidden();
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
    await expect(page.locator("#map-sheet-clear")).toBeHidden();
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
  await expect(page.locator(".class-ticket")).toHaveCount(1);
  await expect(page.locator("#map-sheet-clear")).toBeHidden();
  await expect(page.locator("body")).toHaveAttribute("data-view", "map");
  await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
  const selectedPoint = await page.evaluate(() =>
    window.sonderPreview.map.project("BA"),
  );
  // Hover and a little pointer jitter should keep the building selected.
  await page.mouse.move(selectedPoint.x, selectedPoint.y);
  expect(
    await page.evaluate(() => window.sonderPreview.state.building?.codes),
  ).toContain("BA");
  await page.mouse.down();
  await page.mouse.move(selectedPoint.x + 2, selectedPoint.y + 2);
  expect(
    await page.evaluate(() => window.sonderPreview.state.building?.codes),
  ).toContain("BA");
  await page.mouse.move(selectedPoint.x + 30, selectedPoint.y - 10, { steps: 5 });
  expect(await page.evaluate(() => window.sonderPreview.state.building?.codes)).toContain("BA");
  await page.mouse.move(selectedPoint.x + 150, selectedPoint.y - 30, { steps: 10 });
  expect(
    await page.evaluate(() => window.sonderPreview.state.building),
  ).toBeNull();
  await page.mouse.up();
  await page.waitForFunction(() => window.sonderPreview.map.stats.isIdle);
  expect(
    await page.evaluate(() => window.sonderPreview.map.stats.selected),
  ).toBeNull();
  expect(
    await page.evaluate(() => window.sonderPreview.map.stats.planView),
  ).toBe(false);
  const movedPoint = await page.evaluate(() =>
    window.sonderPreview.map.project("BA"),
  );
  expect(Math.hypot(movedPoint.x - selectedPoint.x, movedPoint.y - selectedPoint.y)).toBeGreaterThan(5);
  await expect(page.locator("#active-summary")).not.toContainText("Bahen");
  expect(await page.locator(".class-ticket").count()).toBeGreaterThan(3);
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
