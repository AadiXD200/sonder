// WGS84 / UTM 17N, the same projection and origin as campus-geometry.json.
// Transverse Mercator series (Snyder, USGS Professional Paper 1395, equations 8-9…8-15).
const RAD = Math.PI / 180;
const A = 6378137,
  E2 = 0.0066943799901413165,
  EP2 = E2 / (1 - E2),
  K = 0.9996;
function utm({ lat, lng }) {
  const phi = lat * RAD,
    lambda = (lng + 81) * RAD;
  const s = Math.sin(phi),
    c = Math.cos(phi),
    t = Math.tan(phi);
  const n = A / Math.sqrt(1 - E2 * s * s),
    T = t * t,
    C = EP2 * c * c,
    d = c * lambda;
  const m =
    A *
    ((1 - E2 / 4 - (3 * E2 ** 2) / 64 - (5 * E2 ** 3) / 256) * phi -
      ((3 * E2) / 8 + (3 * E2 ** 2) / 32 + (45 * E2 ** 3) / 1024) *
        Math.sin(2 * phi) +
      ((15 * E2 ** 2) / 256 + (45 * E2 ** 3) / 1024) * Math.sin(4 * phi) -
      ((35 * E2 ** 3) / 3072) * Math.sin(6 * phi));
  return [
    500000 +
      K *
        n *
        (d +
          ((1 - T + C) * d ** 3) / 6 +
          ((5 - 18 * T + T * T + 72 * C - 58 * EP2) * d ** 5) / 120),
    K *
      (m +
        n *
          t *
          ((d * d) / 2 +
            ((5 - T + 9 * C + 4 * C * C) * d ** 4) / 24 +
            ((61 - 58 * T + T * T + 600 * C - 330 * EP2) * d ** 6) / 720)),
  ];
}
const origin = { lat: 43.6623, lng: -79.3968 },
  offset = utm(origin);
export function toMapPoint(pin) {
  const [east, north] = utm(pin);
  return { x: east - offset[0], z: offset[1] - north };
}
export function fromMapPoint({ x, z }) {
  // Invert locally by Newton iteration; campus bounds stay far from UTM singularities.
  let pin = { ...origin };
  for (let i = 0; i < 4; i++) {
    const p = toMapPoint(pin),
      lat = toMapPoint({ ...pin, lat: pin.lat + 0.00001 }),
      lng = toMapPoint({ ...pin, lng: pin.lng + 0.00001 });
    const a = (lat.x - p.x) / 0.00001,
      b = (lng.x - p.x) / 0.00001,
      c = (lat.z - p.z) / 0.00001,
      d = (lng.z - p.z) / 0.00001,
      det = a * d - b * c;
    pin.lat += ((x - p.x) * d - (z - p.z) * b) / det;
    pin.lng += ((z - p.z) * a - (x - p.x) * c) / det;
  }
  return pin;
}
