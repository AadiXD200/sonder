export async function expandFilters(page) {
  for (const name of ['when', 'interests', 'walk']) {
    const section = page.locator(`#filter-${name}`);
    if (await section.getAttribute('open') === null)
      await section.locator(':scope > summary').click();
  }
}
