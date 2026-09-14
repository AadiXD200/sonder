"""Extract a small, georeferenced campus mesh from Toronto's 2025 massing model.

Run with .cache/geo/bin/python scripts/prepare-campus.py from preview/.
The heavy GIS source stays in .cache. Only compact, static preview assets ship.
"""
from pathlib import Path
import json
import math
import gzip
from collections import Counter

import fiona
import numpy as np
import mapbox_earcut
from pyproj import Transformer
from shapely.geometry import Polygon, MultiPoint, Point
from shapely.strtree import STRtree

ROOT = Path(__file__).resolve().parent.parent
GDB = ROOT / '.cache/massing/3DMassingMultipatch_2025_WGS84.gdb'
SOURCE = ROOT / '.cache/footprints.json'
to_utm = Transformer.from_crs(4326, 32617, always_xy=True)
city_to_utm = Transformer.from_crs(3857, 32617, always_xy=True)
to_city = Transformer.from_crs(4326, 3857, always_xy=True)
ORIGIN = to_utm.transform(-79.3968, 43.6623)
BBOX = (-79.4035, 43.6580, -79.3890, 43.6693)
city_bbox = (*to_city.transform(*BBOX[:2]), *to_city.transform(*BBOX[2:]))

def local(lon, lat):
    x, y = to_utm.transform(lon, lat)
    return (x - ORIGIN[0], -(y - ORIGIN[1]))

osm = json.loads(SOURCE.read_text())
osm_polygons, osm_elements = [], []
for item in osm['elements']:
    coords = [local(p['lon'], p['lat']) for p in item['geometry']]
    if len(coords) < 4:
        continue
    poly = Polygon(coords).buffer(0)
    if poly.is_empty or poly.area < 10:
        continue
    osm_polygons.append(poly)
    osm_elements.append(item)
tree = STRtree(osm_polygons)
official = json.loads((ROOT / '.cache/official-buildings.json').read_text())
official_pts = [(Point(local(p['lon'], p['lat'])), p) for p in official]

def polygons(geometry):
    kind = geometry['type']
    if kind in ('MultiPolygon', 'TIN', 'PolyhedralSurface'):
        yield from geometry['coordinates']
    elif kind in ('Polygon', 'Triangle'):
        yield geometry['coordinates']
    elif kind == 'GeometryCollection':
        for part in geometry['geometries']:
            yield from polygons(part)
    else:
        raise ValueError(f'Unsupported source geometry: {kind}')

def triangulate(rings):
    """Triangulate each original planar 3D face, retaining holes and roof slopes."""
    clean = []
    for ring in rings:
        a = np.asarray(ring, dtype=np.float64)
        if len(a) > 1 and np.linalg.norm(a[0] - a[-1]) < .00001:
            a = a[:-1]
        if len(a) < 3:
            continue
        # Coordinates are already local metric x/up/z, improving numeric stability.
        clean.append(a)
    if not clean:
        return []
    outer = clean[0]
    normal = np.sum(np.cross(outer, np.roll(outer, -1, axis=0)), axis=0)
    if np.linalg.norm(normal) < 1e-7:
        return []
    drop = int(np.argmax(np.abs(normal)))
    all_points = np.concatenate(clean)
    projected = np.ascontiguousarray(np.delete(all_points, drop, axis=1))
    ends = np.cumsum([len(a) for a in clean], dtype=np.uint32)
    idx = mapbox_earcut.triangulate_float64(projected, ends).reshape(-1, 3)
    result = []
    for inds in idx:
        tri = all_points[inds]
        cross = np.cross(tri[1] - tri[0], tri[2] - tri[0])
        if np.linalg.norm(cross) < .001:
            continue
        if np.dot(cross, normal) < 0:
            tri = tri[[0, 2, 1]]
        result.append(tri)
    return result

groups = {}
counts = Counter()
layers = ['Multipatch_50H_NORTH', 'Multipatch_50H_SOUTH_2', 'Multipatch_50H_SOUTH_3', 'Multipatch_50J']
for layer in layers:
    print('Reading', layer, flush=True)
    with fiona.open(GDB, layer=layer) as src:
        assert src.crs.to_epsg() == 3857, f'Unexpected CRS {src.crs}'
        for feature in src.filter(bbox=city_bbox):
            raw_faces = list(polygons(feature['geometry']))
            if not raw_faces:
                continue
            all_coords = np.asarray([p for face in raw_faces for ring in face for p in ring])
            ux, uy = city_to_utm.transform(all_coords[:, 0], all_coords[:, 1])
            positions = np.column_stack((ux - ORIGIN[0], all_coords[:, 2], -(uy - ORIGIN[1])))
            hull = MultiPoint(positions[:, [0, 2]]).convex_hull
            if hull.is_empty or hull.area < 5 or positions[:, 1].max() < 2:
                continue
            midpoint = hull.centroid
            llx, llz = local(BBOX[0], BBOX[3])
            urx, urz = local(BBOX[2], BBOX[1])
            if not (llx < midpoint.x < urx and llz < midpoint.y < urz):
                continue
            candidates = tree.query(hull)
            best, score = None, 0
            for i in candidates:
                intersection = hull.intersection(osm_polygons[i]).area
                value = intersection / max(1, hull.area)
                if value > score:
                    score, best = value, int(i)
            item = osm_elements[best] if best is not None and score > .2 else None
            key = f'osm-{item["id"]}' if item else f'{layer}-{feature.id}'
            name = item['tags'].get('name', '') if item else ''
            official_match = None
            footprint = osm_polygons[best] if item else hull
            for point, place in official_pts:
                if footprint.covers(point):
                    official_match = place
                    break
            if not name and official_match:
                name = official_match['name'].split(' | ')[0]
            group = groups.setdefault(key, {'id': key, 'name': name or 'Campus context', 'osmId': item['id'] if item else None, 'source': 'Toronto 3D Massing 2025', 'officialUrl': official_match['url'] if official_match else None, 'triangles': [], 'tiles': set()})
            group['tiles'].add(layer)
            offset = 0
            for face in raw_faces:
                rings = []
                for ring in face:
                    rings.append(positions[offset:offset + len(ring)])
                    offset += len(ring)
                # Ground/bottom faces add no visible architecture.
                if max(p[1] for ring in rings for p in ring) < .05:
                    continue
                group['triangles'].extend(triangulate(rings))
            counts['features'] += 1

# Separate the connected Simcoe/Convocation complex using the sourced footprint.
hall_index = next(i for i, e in enumerate(osm_elements) if e['tags'].get('name') == 'Convocation Hall')
hall_polygon = osm_polygons[hall_index].buffer(2)
hall_item = osm_elements[hall_index]
hall_key = f'osm-{hall_item["id"]}'
hall_group = {'id': hall_key, 'name': 'Convocation Hall', 'osmId': hall_item['id'], 'source': 'Toronto 3D Massing 2025', 'officialUrl': 'https://map.utoronto.ca/?id=1809#!m/494494', 'triangles': [], 'tiles': set()}
for g in list(groups.values()):
    if g['name'] == 'Simcoe Hall':
        remain = []
        for tri in g['triangles']:
            center = tri.mean(axis=0)
            if hall_polygon.covers(Point(center[0], center[2])):
                hall_group['triangles'].append(tri)
                hall_group['tiles'].update(g['tiles'])
            else:
                remain.append(tri)
        g['triangles'] = remain
if hall_group['triangles']:
    groups[hall_key] = hall_group

output = []
for key, g in groups.items():
    vertices, indices, lookup, unique_triangles = [], [], {}, set()
    for triangle in g.pop('triangles'):
        tri_idx = []
        for point in triangle:
            # 1 cm quantization keeps assets compact without reshaping footprints.
            vertex = tuple(round(float(x), 2) for x in point)
            if vertex not in lookup:
                lookup[vertex] = len(vertices) // 3
                vertices.extend(vertex)
            tri_idx.append(lookup[vertex])
        canonical = tuple(sorted(tri_idx))
        if len(set(tri_idx)) == 3 and canonical not in unique_triangles:
            unique_triangles.add(canonical)
            indices.extend(tri_idx)
    if not indices:
        continue
    g['vertices'], g['indices'], g['tiles'] = vertices, indices, sorted(g['tiles'])
    output.append(g)
    counts['triangles'] += len(indices) // 3

ground = {}
for key in ('roads', 'green'):
    ground[key] = []
    for item in osm.get(key, []):
        points = []
        for p in item['geometry']:
            x, z = local(p['lon'], p['lat'])
            points.append({'x': round(x, 2), 'z': round(z, 2)})
        ground[key].append({'id':item['id'], 'tags': {k:v for k,v in item['tags'].items() if k in ('name','highway','leisure','natural','landuse','width')}, 'geometry': points})
ground['trees'] = []
for p in osm.get('trees', []):
    x, z = local(p['lon'], p['lat'])
    ground['trees'].append({'x':round(x, 2),'z':round(z, 2)})

data = {'metadata': {'source':'City of Toronto, 3D Massing, 2025 release', 'sourceUrl':'https://open.toronto.ca/dataset/3d-massing/', 'groundSource':'OpenStreetMap, retrieved 2026-09-14', 'officialReference':'https://map.utoronto.ca/?id=1809', 'projection':'WGS84 / UTM zone 17N (EPSG:32617), local metres', 'origin':{'lon':-79.3968,'lat':43.6623}, 'bbox':BBOX, 'note':'Source massing retained. Rendering style and vegetation canopy sizes are illustrative. No survey-grade accuracy asserted.'}, 'buildings':output, **ground}
encoded = json.dumps(data, separators=(',', ':')).encode()
destination=ROOT/'.cache/campus.json'
destination.write_bytes(encoded)
print('Exported',len(output),'building groups;',dict(counts),flush=True)
print('Asset bytes',len(encoded),'gzip bytes',len(gzip.compress(encoded)),flush=True)
for b in output:
    if any(n in b['name'] for n in ('Robarts','Convocation','University College','Sidney Smith','Bahen')):
        print('LANDMARK',b['name'],'triangles',len(b['indices'])//3,'height',max(b['vertices'][1::3]),b['officialUrl'],flush=True)
