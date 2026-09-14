import { toMapPoint } from "./campus-coordinates.js";

// The timetable's sourced locations are authoritative for class destinations.
// Mesh identity is separate: a nearby mesh is not evidence of a building-code match.
export function catalogueDestinations(catalogue) {
  return Object.entries(catalogue || {}).flatMap(([code, building]) => {
    if (
      !building ||
      typeof building.name !== "string" ||
      !Number.isFinite(building.lat) ||
      !Number.isFinite(building.lng)
    )
      return [];
    const point = toMapPoint(building);
    const footprint = Array.isArray(building.polygon)
      ? building.polygon
          .filter(
            (p) =>
              Array.isArray(p) && p.length >= 2 && p.every(Number.isFinite),
          )
          .map(([lat, lng]) => toMapPoint({ lat, lng }))
      : [];
    const points = footprint.length >= 3 ? footprint : [point];
    return [
      {
        buildingId: `catalogue:${code}`,
        name: building.name,
        codes: [code],
        center: [point.x, 0, point.z],
        bounds: [
          [
            Math.min(...points.map((p) => p.x)),
            0,
            Math.min(...points.map((p) => p.z)),
          ],
          [
            Math.max(...points.map((p) => p.x)),
            0,
            Math.max(...points.map((p) => p.z)),
          ],
        ],
        footprint,
        parts: [],
        landmark: { short: building.short || building.name, priority: 20 },
        catalogueTarget: true,
        complexNote:
          footprint.length >= 3
            ? "Building footprint and location from the published timetable."
            : "Building location from the published timetable.",
      },
    ];
  });
}
