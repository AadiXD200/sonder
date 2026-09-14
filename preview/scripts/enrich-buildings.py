"""Attach campus identities without altering the sourced mesh coordinates.

Uses cached OSM building multipolygons and the university's official directory.
Keep this step after pack-campus.mjs when regenerating assets.
"""
import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path
from pyproj import Transformer
from shapely.geometry import LineString, MultiPoint
from shapely.ops import polygonize, unary_union

root=Path(__file__).resolve().parent.parent
data=json.loads((root/'public/data/buildings.json').read_text())
raw=json.loads((root/'.cache/campus-focused.json').read_text())['buildings']
official=json.loads((root/'.cache/official-buildings.json').read_text())
xml=ET.parse(root/'.cache/campus.osm').getroot()
t=Transformer.from_crs(4326,32617,always_xy=True)
ox,oy=t.transform(-79.3968,43.6623)
nodes={}
for node in xml.findall('node'):
    x,y=t.transform(float(node.get('lon')),float(node.get('lat')))
    nodes[node.get('id')]=(x-ox,-(y-oy))
ways={way.get('id'):way for way in xml.findall('way')}
relations=[]
for relation in xml.findall('relation'):
    tags={tag.get('k'):tag.get('v') for tag in relation.findall('tag')}
    if not ('building' in tags and 'name' in tags):continue
    lines=[]
    for member in relation.findall('member'):
        if member.get('role')=='outer' and member.get('ref') in ways:
            refs=[n.get('ref') for n in ways[member.get('ref')].findall('nd')]
            if all(ref in nodes for ref in refs):lines.append(LineString([nodes[ref] for ref in refs]))
    polygon=unary_union(list(polygonize(unary_union(lines))))
    if not polygon.is_empty:relations.append((relation.get('id'),tags['name'],polygon))

def normalize(value):
    return re.sub(r'[^a-z0-9]','',value.lower().replace('centre','center').replace('saint','st'))

names={normalize(place['name'].split(' | ')[0]):place for place in official}
# Gerstein / Sigmund Samuel identity: https://arthistory.utoronto.ca/research/library-resources/other-libraries
aliases={'Gerstein Science Information Centre':'Sigmund Samuel Library Building','Graduate House':'Graduate House (Grad Room)', 'Trinity College':'Trinity College & Residence', 'Victoria College':'Victoria College Building'}
geometry={b['id']:b for b in raw}
changes=[]
for building in data['buildings']:
    source=geometry[building['id']]
    v=source['vertices']
    hull=MultiPoint([(v[i],v[i+2]) for i in range(0,len(v),3)]).convex_hull
    best=None
    for rid,name,polygon in relations:
        if hull.area and hull.intersects(polygon):
            score=hull.intersection(polygon).area/hull.area
            if score>.55 and (best is None or score>best[0]):best=(score,rid,name)
    building['buildingId']=building['id']
    building['identitySource']='OpenStreetMap name / city context'
    if best:
        old=source['name']
        building['name']=best[2]
        building['buildingId']='osm-relation-'+best[1]
        building['identitySource']='https://www.openstreetmap.org/relation/'+best[1]
        if old!=building['name']:changes.append({'geometryId':building['id'],'before':old,'after':building['name'],'source':building['identitySource']})
    place=names.get(normalize(building['name'])) or names.get(normalize(aliases.get(building['name'],'')))
    # A matched university directory entry supplies codes. Never infer codes from names.
    building['codes']=[]
    if place:
        segments=place['name'].split(' | ')
        building['codes']=re.findall(r'\b[A-Z]{2,3}\b',segments[1]) if len(segments)>1 else []
        building['officialUrl']=place['url']
        building['identitySource']=place['url']
        if building['codes']:building['buildingId']='campus:'+building['codes'][0]
    elif best:
        # An earlier point-based match may have named a small room inside a complex.
        building['officialUrl']=None
# City roof/wall records straddle the library and adjoining Canadiana wing.
# Preserve the connected massing as a complex instead of inventing a partition.
for building in data['buildings']:
    if building['buildingId'] in ['campus:SM','campus:CG']:
        building['buildingId']='campus:SM'
        building['name']='Gerstein / Canadiana complex'
        building['codes']=['SM','CG']
        building['complexNote']='Connected library / Canadiana geometry; separate boundaries are not resolved.'
        building['officialEntries']=[{'code':code,'name':place['name'].split(' | ')[0],'url':place['url']} for code in ['SM','CG'] for place in official if place['name'].endswith(' | '+code)]
data['metadata']['identityAudit']='OSM named building relations and 184 official directory entries; unmatched geometry remains explicitly unnamed.'
(root/'public/data/buildings.json').write_text(json.dumps(data,separators=(',',':')))
for change in changes:
    change['after']=next(b['name'] for b in data['buildings'] if b['id']==change['geometryId'])
(root/'scripts/identity-audit.json').write_text(json.dumps({'changes':changes},indent=2)+'\n')
print('Corrected identities:',len(changes),'logical buildings:',len({b['buildingId'] for b in data['buildings']}))
for change in changes:print(change['before'],'->',change['after'])
