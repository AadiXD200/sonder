import fs from 'node:fs';
import { gzipSync } from 'node:zlib';
import * as THREE from 'three';
import { MeshoptSimplifier } from 'meshoptimizer';

await MeshoptSimplifier.ready;
const campus=JSON.parse(fs.readFileSync('.cache/campus-focused.json','utf8'));
const ground={metadata:campus.metadata,roads:campus.roads,green:campus.green,trees:campus.trees,boundary:campus.boundary};
fs.writeFileSync('public/data/ground.json',JSON.stringify(ground));
const data=[],metadata=[];
let offset=0,totalBefore=0,totalAfter=0;
for(const b of campus.buildings){
  const vertices=new Float32Array(b.vertices);
  const original=new Uint32Array(b.indices);
  const geometry=new THREE.BufferGeometry();
  geometry.setAttribute('position',new THREE.BufferAttribute(vertices,3));
  geometry.computeBoundingBox();
  const box=geometry.boundingBox;
  const scale=Math.max(...box.getSize(new THREE.Vector3()).toArray());
  const landmark=/Robarts|Convocation|University College|Simcoe|Bahen|Sidney Smith|Ontario Legislative/.test(b.name);
  // Preserve every original vertex position. Only remove redundant triangles;
  // Approximate error target: 15 cm for landmarks, 50 cm for context.
  const target=Math.min(original.length,landmark?12000:2400);
  const [indices,error]=original.length>target?MeshoptSimplifier.simplify(original,vertices,3,target,landmark?.15:.5,['ErrorAbsolute']):[original,0];
  geometry.setIndex(new THREE.BufferAttribute(indices,1));
  geometry.computeVertexNormals();
  const flat=geometry.toNonIndexed();
  flat.computeVertexNormals();
  const positions=flat.attributes.position.array;
  const edges=new THREE.EdgesGeometry(geometry,26).attributes.position.array;
  const center=box.getCenter(new THREE.Vector3());
  metadata.push({id:b.id,name:b.name,osmId:b.osmId,officialUrl:b.officialUrl,center:center.toArray(),bounds:[box.min.toArray(),box.max.toArray()],positionOffset:offset,positionCount:positions.length,edgeOffset:offset+positions.length,edgeCount:edges.length,triangles:positions.length/9,simplificationErrorM:Math.round(error*1000)/1000});
  data.push(positions,edges);offset+=positions.length+edges.length;
  totalBefore+=original.length/3;totalAfter+=positions.length/9;
  geometry.dispose();flat.dispose();
}
const buffer=new Float32Array(offset);let cursor=0;
for(const part of data){buffer.set(part,cursor);cursor+=part.length;}
const binary=Buffer.from(buffer.buffer);
fs.writeFileSync('public/data/campus.bin',binary);
fs.writeFileSync('public/data/campus.bin.gz',gzipSync(binary,{level:9}));
fs.writeFileSync('public/data/buildings.json',JSON.stringify({metadata:campus.metadata,buildings:metadata}));
console.log({buildings:metadata.length,trianglesBefore:totalBefore,trianglesAfter:totalAfter,binaryBytes:binary.length,gzipBytes:gzipSync(binary).length});
