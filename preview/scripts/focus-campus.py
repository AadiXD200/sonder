"""Keep campus geometry using OSM campus/college boundaries, not a guessed outline."""
import json
import xml.etree.ElementTree as ET
from pathlib import Path
from pyproj import Transformer
from shapely.geometry import LineString, Polygon, MultiPoint
from shapely.ops import polygonize, unary_union

root = Path(__file__).resolve().parent.parent
xml = ET.parse(root/'.cache/campus.osm').getroot()
t = Transformer.from_crs(4326,32617,always_xy=True)
ox,oy = t.transform(-79.3968,43.6623)
nodes = {}
for n in xml.findall('node'):
    x,y=t.transform(float(n.get('lon')),float(n.get('lat')))
    nodes[n.get('id')] = (x-ox,-(y-oy))
ways = {w.get('id'):w for w in xml.findall('way')}
polys=[]
relation=next(r for r in xml.findall('relation') if r.get('id')=='18447148')
lines=[]
for m in relation.findall('member'):
    if m.get('type')=='way' and m.get('role')=='outer' and m.get('ref') in ways:
        refs=[n.get('ref') for n in ways[m.get('ref')].findall('nd')]
        if all(r in nodes for r in refs):lines.append(LineString([nodes[r] for r in refs]))
polys.extend(polygonize(unary_union(lines)))
for w in ways.values():
    tags={v.get('k'):v.get('v') for v in w.findall('tag')}
    if tags.get('amenity') not in ('college','university') or 'building' in tags:continue
    refs=[n.get('ref') for n in w.findall('nd')]
    if len(refs)>3 and all(r in nodes for r in refs):polys.append(Polygon([nodes[r] for r in refs]).buffer(0))
assert polys,'No campus boundaries found'
boundary=unary_union(polys)
mask=boundary.buffer(12)
raw=json.loads((root/'.cache/campus.json').read_text())
keep=[]
for b in raw['buildings']:
    v=b['vertices'];hull=MultiPoint([(v[i],v[i+2]) for i in range(0,len(v),3)]).convex_hull
    overlap=hull.intersection(mask).area/max(1,hull.area)
    if overlap>.3 or b['name'] in ('Royal Ontario Museum','Ontario Legislative Building'):
        keep.append(b)
raw['buildings']=keep
raw['metadata']['extentSource']='OpenStreetMap UTSG relation 18447148 plus mapped college grounds; ROM and Ontario Legislature retained as context.'
raw['boundary']=[list(p.exterior.coords) for p in (list(boundary.geoms) if hasattr(boundary,'geoms') else [boundary]) if p.geom_type=='Polygon']
(root/'.cache/campus-focused.json').write_text(json.dumps(raw,separators=(',',':')))
print('Campus focus:',len(keep),'buildings,',sum(len(b['indices'])//3 for b in keep),'triangles')
