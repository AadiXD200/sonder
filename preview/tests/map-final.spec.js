import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";

async function loaded(page) {
  await page.goto("/");
  await page.waitForFunction(
    () =>
      window.campusMap?.status === "ready" &&
      window.campusMap.stats.renderCount > 0,
  );
}

test("directory codes select grouped source geometry and close preserves view", async ({
  page,
}) => {
  await loaded(page);
  await page.evaluate(() => {
    window.selections = [];
    document
      .getElementById("app")
      .addEventListener("campus:select", (e) =>
        window.selections.push(e.detail),
      );
  });
  await page.locator("#building-picker").selectOption("campus:SM");
  await expect(page.locator("#selection-name")).toHaveText(
    "Gerstein / Canadiana complex",
  );
  await expect(page.locator("#selection-code")).toHaveText("SM / CG");
  await expect(page.locator("#official-link")).toHaveAttribute(
    "href",
    "https://map.utoronto.ca/?id=1809#!m/494508",
  );
  const identities = await page.evaluate(() => window.campusMap.getBuildings());
  expect(identities.filter((b) => b.codes.includes("SM"))).toHaveLength(1);
  await page.getByRole("button", { name: "PLAN VIEW", exact: true }).click();
  await page.waitForTimeout(800);
  await page.getByRole("button", { name: "Close building details" }).click();
  expect(await page.evaluate(() => window.campusMap.stats.planView)).toBe(true);
  expect(
    await page.evaluate(() => window.selections.map((b) => b?.id ?? null)),
  ).toEqual(["campus:SM", null]);
  await page.evaluate(() => window.campusMap.selectBuilding("CG"));
  await expect(page.locator("#selection-name")).toHaveText("Gerstein / Canadiana complex");
  await expect(page.locator("#selection-note")).toContainText("separate boundaries");
  await expect(page.locator("#official-link")).toHaveAttribute(
    "href",
    "https://map.utoronto.ca/?id=1809#!m/494505",
  );
  for (const [code, name] of [
    ["HH", "Hart House"],
    ["TC", "Trinity College"],
    ["KX", "Knox College"],
  ]) {
    expect(
      await page.evaluate(
        (code) => window.campusMap.selectBuilding(code),
        code,
      ),
    ).toBe(true);
    await expect(page.locator("#selection-name")).toHaveText(name);
  }
});

test("failed download retries successfully and all runtime assets are local", async ({
  page,
}) => {
  const external = [];
  page.on("request", (request) => {
    if (!new URL(request.url()).hostname.match(/^(127\.0\.0\.1|localhost)$/))
      external.push(request.url());
  });
  await page.route("**/data/campus.bin.gz", (r) => r.abort());
  await page.goto("/");
  await expect(page.locator("#fallback")).toBeVisible();
  await page.unroute("**/data/campus.bin.gz");
  await page.getByRole("button", { name: "Retry map" }).click();
  await page.waitForFunction(() => window.campusMap.status === "ready");
  await expect(page.locator("#fallback")).toBeHidden();
  await expect(page.locator("#scene canvas")).toHaveCount(1);
  expect(external).toEqual([]);
});

test("predecoded gzip and uncompressed fallback both load", async ({
  page,
}) => {
  const binary = await readFile("public/data/campus.bin");
  // Browser fetch exposes an already-decoded body while retaining this response header.
  await page.route("**/data/campus.bin.gz", (r) =>
    r.fulfill({
      status: 200,
      headers: {
        "content-encoding": "gzip",
        "content-type": "application/octet-stream",
      },
      body: binary,
    }),
  );
  await loaded(page);
  await page.unroute("**/data/campus.bin.gz");
  await page.addInitScript(() => {
    delete window.DecompressionStream;
  });
  const fallback = page.waitForRequest("**/data/campus.bin");
  await loaded(page);
  await fallback;
});

test("keyboard navigation and resize work; disposing releases the renderer", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await loaded(page);
  const before = await page.evaluate(() =>
    window.campusMap.project("Robarts Library"),
  );
  await page.locator("#scene canvas").focus();
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(800);
  const after = await page.evaluate(() =>
    window.campusMap.project("Robarts Library"),
  );
  expect(Math.abs(before.x - after.x)).toBeGreaterThan(5);
  await page.keyboard.press("Home");
  await page.waitForTimeout(800);
  await page.evaluate(() => {
    document.getElementById("app").style.width = "800px";
  });
  await page.waitForTimeout(100);
  expect((await page.locator("#scene canvas").boundingBox()).width).toBe(800);
  await page.evaluate(() => {
    window.oldMap = window.campusMap;
    window.campusMap.dispose();
  });
  await expect(page.locator("#scene canvas")).toHaveCount(0);
  const frames = await page.evaluate(() => window.oldMap.stats.renderCount);
  await page.waitForTimeout(100);
  expect(await page.evaluate(() => window.oldMap.stats.renderCount)).toBe(
    frames,
  );
  expect(await page.evaluate(() => window.oldMap.status)).toBe("disposed");
  // The component can mount again without a page reload.
  await page.evaluate(async () => {
    const { mountCampusMap } = await import("/src/campus-map.js");
    window.campusMap = mountCampusMap(document.getElementById("app"));
    await window.campusMap.ready;
  });
  await expect(page.locator("#scene canvas")).toHaveCount(1);
  expect(await page.evaluate(() => window.campusMap.stats.buildings)).toBe(219);
  expect(errors).toEqual([]);
});

test("pinch and cancelled touch do not select a building", async ({
  page,
  browserName,
}) => {
  test.skip(
    browserName !== "chromium",
    "Real multi-touch injection requires CDP",
  );
  await loaded(page);
  await page.getByRole("button", { name: "Toggle building labels" }).click();
  const point = await page.evaluate(() =>
    window.campusMap.project("Robarts Library"),
  );
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [{ x: point.x, y: point.y, id: 1 }],
  });
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchCancel",
    touchPoints: [],
  });
  expect(await page.evaluate(() => window.campusMap.stats.selected)).toBeNull();
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [
      { x: point.x, y: point.y, id: 2 },
      { x: point.x + 40, y: point.y, id: 3 },
    ],
  });
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchMove",
    touchPoints: [
      { x: point.x - 20, y: point.y, id: 2 },
      { x: point.x + 60, y: point.y, id: 3 },
    ],
  });
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchEnd",
    touchPoints: [],
  });
  expect(await page.evaluate(() => window.campusMap.stats.selected)).toBeNull();
});

test("graphics context loss offers working recovery", async ({ page }) => {
  await loaded(page);
  const supported = await page.evaluate(() => {
    const gl = document.querySelector("#scene canvas").getContext("webgl2");
    const extension = gl.getExtension("WEBGL_lose_context");
    extension?.loseContext();
    return !!extension;
  });
  test.skip(
    !supported,
    "Browser does not expose the context-loss test extension",
  );
  await expect(page.locator("#fallback")).toBeVisible();
  await page.getByRole("button", { name: "Retry map" }).click();
  await page.waitForFunction(() => window.campusMap.status === "ready");
  await expect(page.locator("#fallback")).toBeHidden();
});
