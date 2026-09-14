/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ln={ROTATE:0,DOLLY:1,PAN:2},In={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pc=0,la=1,Oc=2,ks=1,Lc=2,Vi=3,si=0,Qe=1,Je=2,Un=0,Yi=1,ca=2,ua=3,da=4,Uc=5,Ti=100,Dc=101,Nc=102,Fc=103,Bc=104,zc=200,Hc=201,Gc=202,kc=203,Pl=204,Ol=205,Vc=206,Wc=207,Xc=208,Yc=209,qc=210,Zc=211,Kc=212,Jc=213,$c=214,Wr=0,Xr=1,Yr=2,Qi=3,qr=4,Zr=5,Kr=6,Jr=7,Ll=0,Qc=1,jc=2,Sn=0,Ul=1,Dl=2,Nl=3,Fl=4,Bl=5,zl=6,Hl=7,Gl=300,ri=301,Ii=302,ar=303,lr=304,sr=306,$r=1e3,Pn=1001,Qr=1002,Ne=1003,tu=1004,ds=1005,Ge=1006,cr=1007,ni=1008,rn=1009,kl=1010,Vl=1011,ji=1012,Fo=1013,Mn=1014,xn=1015,yn=1016,Bo=1017,zo=1018,ts=1020,Wl=35902,Xl=35899,Yl=1021,ql=1022,dn=1023,Nn=1026,ii=1027,Zl=1028,Ho=1029,oi=1030,Go=1031,ko=1033,Vs=33776,Ws=33777,Xs=33778,Ys=33779,jr=35840,to=35841,eo=35842,no=35843,io=36196,so=37492,ro=37496,oo=37488,ao=37489,Ks=37490,lo=37491,co=37808,uo=37809,fo=37810,ho=37811,po=37812,mo=37813,go=37814,_o=37815,xo=37816,vo=37817,So=37818,Mo=37819,yo=37820,bo=37821,Eo=36492,To=36494,Co=36495,Ao=36283,wo=36284,Js=36285,Ro=36286,eu=3200,fa=0,nu=1,Yn="",Ke="srgb",$s="srgb-linear",Qs="linear",le="srgb",ur=7680,iu=519,su=512,ru=513,ou=514,Vo=515,au=516,lu=517,Wo=518,cu=519,uu=35044,ha="300 es",vn=2e3,js=2001;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){const i=tr("canvas");return i.style.display="block",i}const pa={};function ma(...i){const t="THREE."+i.shift();console.log(t,...i)}function Kl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=Kl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ie(...i){i=Kl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function wi(...i){const t=i.join(" ");t in pa||(pa[t]=!0,Ft(...i))}function hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const pu={[Wr]:Xr,[Yr]:Kr,[qr]:Jr,[Qi]:Zr,[Xr]:Wr,[Kr]:Yr,[Jr]:qr,[Zr]:Qi};class Zn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ga=1234567;const qi=Math.PI/180,es=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Xo(i,t){return(i%t+t)%t}function mu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gu(i,t,e){return i!==t?(e-i)/(t-i):0}function Zi(i,t,e){return(1-e)*i+e*t}function _u(i,t,e,n){return Zi(i,t,1-Math.exp(-e*n))}function xu(i,t=1){return t-Math.abs(Xo(i,t*2)-t)}function vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Su(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yu(i,t){return i+Math.random()*(t-i)}function bu(i){return i*(.5-Math.random())}function Eu(i){i!==void 0&&(ga=i);let t=ga+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tu(i){return i*qi}function Cu(i){return i*es}function Au(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ru(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),p=r((t-n)/2),d=o((t-n)/2),h=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*p,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*p,a*c);break;case"ZXZ":i.set(l*p,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*h,a*c);break;case"YXY":i.set(l*h,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*h,a*u,a*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Io={DEG2RAD:qi,RAD2DEG:es,generateUUID:ci,clamp:Kt,euclideanModulo:Xo,mapLinear:mu,inverseLerp:gu,lerp:Zi,damp:_u,pingpong:xu,smoothstep:vu,smootherstep:Su,randInt:Mu,randFloat:yu,randFloatSpread:bu,seededRandom:Eu,degToRad:Tu,radToDeg:Cu,isPowerOfTwo:Au,ceilPowerOfTwo:wu,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:Iu,normalize:We,denormalize:Ci},jo=class jo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jo.prototype.isVector2=!0;let Mt=jo;class qn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],d=r[o+0],h=r[o+1],g=r[o+2],M=r[o+3];if(p!==M||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+p*M;m<0&&(d=-d,h=-h,g=-g,M=-M,m=-m);let f=1-a;if(m<.9995){const T=Math.acos(m),w=Math.sin(T);f=Math.sin(f*T)/w,a=Math.sin(a*T)/w,l=l*f+d*a,c=c*f+h*a,u=u*f+g*a,p=p*f+M*a}else{l=l*f+d*a,c=c*f+h*a,u=u*f+g*a,p=p*f+M*a;const T=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=T,c*=T,u*=T,p*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*p+l*h-c*d,t[e+1]=l*g+u*d+c*p-a*h,t[e+2]=c*g+u*h+a*d-l*p,t[e+3]=u*g-a*p-l*d-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),p=a(r/2),d=l(n/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*p+c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p-d*h*g;break;case"YXZ":this._x=d*u*p+c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p+d*h*g;break;case"ZXY":this._x=d*u*p-c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p-d*h*g;break;case"ZYX":this._x=d*u*p-c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p+d*h*g;break;case"YZX":this._x=d*u*p+c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p-d*h*g;break;case"XZY":this._x=d*u*p-c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p+d*h*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],p=e[10],d=n+a+p;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(n>a&&n>p){const h=2*Math.sqrt(1+n-a-p);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>p){const h=2*Math.sqrt(1+a-n-p);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+p-n-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ta=class ta{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*u,this.y=n+l*u+a*c-r*p,this.z=s+l*p+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dr.copy(this).projectOnVector(t),this.sub(dr)}reflect(t){return this.sub(dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ta.prototype.isVector3=!0;let I=ta;const dr=new I,_a=new qn,ea=class ea{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],h=n[5],g=n[8],M=s[0],m=s[3],f=s[6],T=s[1],w=s[4],S=s[7],E=s[2],y=s[5],R=s[8];return r[0]=o*M+a*T+l*E,r[3]=o*m+a*w+l*y,r[6]=o*f+a*S+l*R,r[1]=c*M+u*T+p*E,r[4]=c*m+u*w+p*y,r[7]=c*f+u*S+p*R,r[2]=d*M+h*T+g*E,r[5]=d*m+h*w+g*y,r[8]=d*f+h*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],p=u*o-a*c,d=a*l-u*r,h=c*r-o*l,g=e*p+n*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=p*M,t[1]=(s*c-u*n)*M,t[2]=(a*n-s*o)*M,t[3]=d*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=h*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fr.makeScale(t,e)),this}rotate(t){return wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fr.makeRotation(-t)),this}translate(t,e){return wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ea.prototype.isMatrix3=!0;let kt=ea;const fr=new kt,xa=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),va=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pu(){const i={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?Qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$s]:{primaries:t,whitePoint:n,transfer:Qs,toXYZ:xa,fromXYZ:va,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:le,toXYZ:xa,fromXYZ:va,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}const te=Pu();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fi;class Ou{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fi===void 0&&(fi=tr("canvas")),fi.width=t.width,fi.height=t.height;const s=fi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=fi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lu=0;class Yo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hr(s[o].image)):r.push(hr(s[o]))}else r=hr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function hr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let Uu=0;const pr=new I;class ke extends Zn{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Pn,s=Pn,r=Ge,o=ni,a=dn,l=rn,c=ke.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=ci(),this.name="",this.source=new Yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pr).x}get height(){return this.source.getSize(pr).y}get depth(){return this.source.getSize(pr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $r:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case Qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $r:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case Qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Gl;ke.DEFAULT_ANISOTROPY=1;const na=class na{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],p=l[8],d=l[1],h=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,S=(h+1)/2,E=(f+1)/2,y=(u+d)/4,R=(p+M)/4,v=(g+m)/4;return w>S&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=y/n,r=R/n):S>E?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=y/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=v/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(p-M)*(p-M)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(p-M)/T,this.z=(d-u)/T,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};na.prototype.isVector4=!0;let Me=na;class Du extends Zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new ke(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Du{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jl extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nu extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ir=class ir{constructor(t,e,n,s,r,o,a,l,c,u,p,d,h,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,p,d,h,g,M,m)}set(t,e,n,s,r,o,a,l,c,u,p,d,h,g,M,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=d,f[3]=h,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ir().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),o=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const d=o*u,h=o*p,g=a*u,M=a*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=h+g*c,e[5]=d-M*c,e[9]=-a*l,e[2]=M-d*c,e[6]=g+h*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,h=l*p,g=c*u,M=c*p;e[0]=d+M*a,e[4]=g*a-h,e[8]=o*c,e[1]=o*p,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=M+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,h=l*p,g=c*u,M=c*p;e[0]=d-M*a,e[4]=-o*p,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=M-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,h=o*p,g=a*u,M=a*p;e[0]=l*u,e[4]=g*c-h,e[8]=d*c+M,e[1]=l*p,e[5]=M*c+d,e[9]=h*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,h=o*c,g=a*l,M=a*c;e[0]=l*u,e[4]=M-d*p,e[8]=g*p+h,e[1]=p,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*p+g,e[10]=d-M*p}else if(t.order==="XZY"){const d=o*l,h=o*c,g=a*l,M=a*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=d*p+M,e[5]=o*u,e[9]=h*p-g,e[2]=g*p-h,e[6]=a*u,e[10]=M*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fu,t,Bu)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Hn.crossVectors(n,je),Hn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Hn.crossVectors(n,je)),Hn.normalize(),fs.crossVectors(je,Hn),s[0]=Hn.x,s[4]=fs.x,s[8]=je.x,s[1]=Hn.y,s[5]=fs.y,s[9]=je.y,s[2]=Hn.z,s[6]=fs.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],h=n[13],g=n[2],M=n[6],m=n[10],f=n[14],T=n[3],w=n[7],S=n[11],E=n[15],y=s[0],R=s[4],v=s[8],C=s[12],D=s[1],F=s[5],z=s[9],W=s[13],N=s[2],k=s[6],q=s[10],K=s[14],at=s[3],$=s[7],it=s[11],ot=s[15];return r[0]=o*y+a*D+l*N+c*at,r[4]=o*R+a*F+l*k+c*$,r[8]=o*v+a*z+l*q+c*it,r[12]=o*C+a*W+l*K+c*ot,r[1]=u*y+p*D+d*N+h*at,r[5]=u*R+p*F+d*k+h*$,r[9]=u*v+p*z+d*q+h*it,r[13]=u*C+p*W+d*K+h*ot,r[2]=g*y+M*D+m*N+f*at,r[6]=g*R+M*F+m*k+f*$,r[10]=g*v+M*z+m*q+f*it,r[14]=g*C+M*W+m*K+f*ot,r[3]=T*y+w*D+S*N+E*at,r[7]=T*R+w*F+S*k+E*$,r[11]=T*v+w*z+S*q+E*it,r[15]=T*C+w*W+S*K+E*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],p=t[6],d=t[10],h=t[14],g=t[3],M=t[7],m=t[11],f=t[15],T=l*h-c*d,w=a*h-c*p,S=a*d-l*p,E=o*h-c*u,y=o*d-l*u,R=o*p-a*u;return e*(M*T-m*w+f*S)-n*(g*T-m*E+f*y)+s*(g*w-M*E+f*R)-r*(g*S-M*y+m*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],p=t[9],d=t[10],h=t[11],g=t[12],M=t[13],m=t[14],f=t[15],T=e*a-n*o,w=e*l-s*o,S=e*c-r*o,E=n*l-s*a,y=n*c-r*a,R=s*c-r*l,v=u*M-p*g,C=u*m-d*g,D=u*f-h*g,F=p*m-d*M,z=p*f-h*M,W=d*f-h*m,N=T*W-w*z+S*F+E*D-y*C+R*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return t[0]=(a*W-l*z+c*F)*k,t[1]=(s*z-n*W-r*F)*k,t[2]=(M*R-m*y+f*E)*k,t[3]=(d*y-p*R-h*E)*k,t[4]=(l*D-o*W-c*C)*k,t[5]=(e*W-s*D+r*C)*k,t[6]=(m*S-g*R-f*w)*k,t[7]=(u*R-d*S+h*w)*k,t[8]=(o*z-a*D+c*v)*k,t[9]=(n*D-e*z-r*v)*k,t[10]=(g*y-M*S+f*T)*k,t[11]=(p*S-u*y-h*T)*k,t[12]=(a*C-o*F-l*v)*k,t[13]=(e*F-n*C+s*v)*k,t[14]=(M*w-g*E-m*T)*k,t[15]=(u*E-p*w+d*T)*k,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,p=a+a,d=r*c,h=r*u,g=r*p,M=o*u,m=o*p,f=a*p,T=l*c,w=l*u,S=l*p,E=n.x,y=n.y,R=n.z;return s[0]=(1-(M+f))*E,s[1]=(h+S)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(h-S)*y,s[5]=(1-(d+f))*y,s[6]=(m+T)*y,s[7]=0,s[8]=(g+w)*R,s[9]=(m-T)*R,s[10]=(1-(d+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=hi.set(s[0],s[1],s[2]).length();const a=hi.set(s[4],s[5],s[6]).length(),l=hi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),on.copy(this);const c=1/o,u=1/a,p=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=p,on.elements[9]*=p,on.elements[10]*=p,e.setFromRotationMatrix(on),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=vn,l=!1){const c=this.elements,u=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let g,M;if(l)g=r/(o-r),M=o*r/(o-r);else if(a===vn)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===js)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vn,l=!1){const c=this.elements,u=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),h=-(n+s)/(n-s);let g,M;if(l)g=1/(o-r),M=o/(o-r);else if(a===vn)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===js)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ir.prototype.isMatrix4=!0;let xe=ir;const hi=new I,on=new xe,Fu=new I(0,0,0),Bu=new I(1,1,1),Hn=new I,fs=new I,je=new I,Sa=new xe,Ma=new qn;class ai{constructor(t=0,e=0,n=0,s=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],p=s[2],d=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class qo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zu=0;const ya=new I,pi=new qn,Tn=new xe,hs=new I,Ni=new I,Hu=new I,Gu=new qn,ba=new I(1,0,0),Ea=new I(0,1,0),Ta=new I(0,0,1),Ca={type:"added"},ku={type:"removed"},mi={type:"childadded",child:null},mr={type:"childremoved",child:null};class qe extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new I,e=new ai,n=new qn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new kt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(ba,t)}rotateY(t){return this.rotateOnAxis(Ea,t)}rotateZ(t){return this.rotateOnAxis(Ta,t)}translateOnAxis(t,e){return ya.copy(t).applyQuaternion(this.quaternion),this.position.add(ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ba,t)}translateY(t){return this.translateOnAxis(Ea,t)}translateZ(t){return this.translateOnAxis(Ta,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hs.copy(t):hs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Ni,hs,this.up):Tn.lookAt(hs,Ni,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(Tn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ca),mi.child=t,this.dispatchEvent(mi),mi.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ku),mr.child=t,this.dispatchEvent(mr),mr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ca),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),p=o(t.shapes),d=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qe.DEFAULT_UP=new I(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ps extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vu={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ps;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function _r(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Xo(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_r(o,r,t+1/3),this.g=_r(o,r,t),this.b=_r(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=$l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return te.workingToColorSpace(He.copy(this),t),Math.round(Kt(He.r*255,0,255))*65536+Math.round(Kt(He.g*255,0,255))*256+Math.round(Kt(He.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ke){te.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(ms);const n=Zi(Gn.h,ms.h,e),s=Zi(Gn.s,ms.s,e),r=Zi(Gn.l,ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Jt;Jt.NAMES=$l;class Wu extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const an=new I,Cn=new I,xr=new I,An=new I,gi=new I,_i=new I,Aa=new I,vr=new I,Sr=new I,Mr=new I,yr=new Me,br=new Me,Er=new Me;class un{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),Cn.subVectors(n,e),xr.subVectors(t,e);const o=an.dot(an),a=an.dot(Cn),l=an.dot(xr),c=Cn.dot(Cn),u=Cn.dot(xr),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;const d=1/p,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return yr.setScalar(0),br.setScalar(0),Er.setScalar(0),yr.fromBufferAttribute(t,e),br.fromBufferAttribute(t,n),Er.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yr,r.x),o.addScaledVector(br,r.y),o.addScaledVector(Er,r.z),o}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),Cn.subVectors(t,e),an.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;gi.subVectors(s,n),_i.subVectors(r,n),vr.subVectors(t,n);const l=gi.dot(vr),c=_i.dot(vr);if(l<=0&&c<=0)return e.copy(n);Sr.subVectors(t,s);const u=gi.dot(Sr),p=_i.dot(Sr);if(u>=0&&p<=u)return e.copy(s);const d=l*p-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(gi,o);Mr.subVectors(t,r);const h=gi.dot(Mr),g=_i.dot(Mr);if(g>=0&&h<=g)return e.copy(r);const M=h*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(_i,a);const m=u*g-h*p;if(m<=0&&p-u>=0&&h-g>=0)return Aa.subVectors(r,s),a=(p-u)/(p-u+(h-g)),e.copy(s).addScaledVector(Aa,a);const f=1/(m+M+d);return o=M*f,a=d*f,e.copy(n).addScaledVector(gi,o).addScaledVector(_i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class os{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(t.matrixWorld),this.union(gs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),_s.subVectors(this.max,Fi),xi.subVectors(t.a,Fi),vi.subVectors(t.b,Fi),Si.subVectors(t.c,Fi),kn.subVectors(vi,xi),Vn.subVectors(Si,vi),$n.subVectors(xi,Si);let e=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-$n.z,$n.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,$n.z,0,-$n.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-$n.y,$n.x,0];return!Tr(e,xi,vi,Si,_s)||(e=[1,0,0,0,1,0,0,0,1],!Tr(e,xi,vi,Si,_s))?!1:(xs.crossVectors(kn,Vn),e=[xs.x,xs.y,xs.z],Tr(e,xi,vi,Si,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,gs=new os,xi=new I,vi=new I,Si=new I,kn=new I,Vn=new I,$n=new I,Fi=new I,_s=new I,xs=new I,Qn=new I;function Tr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qn.fromArray(i,r);const a=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ee=new I,vs=new Mt;let Xu=0;class $e extends Zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ql extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jl extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Yu=new os,Bi=new I,Cr=new I;class as{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);const e=Bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(Cr)),this.expandByPoint(Bi.copy(t.center).sub(Cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let qu=0;const nn=new xe,Ar=new qe,Mi=new I,tn=new os,zi=new os,De=new I;class Te extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?jl:Ql)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Ar.lookAt(t),Ar.updateMatrix(),this.applyMatrix4(Ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];zi.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(tn.min,zi.min),tn.expandByPoint(De),De.addVectors(tn.max,zi.max),tn.expandByPoint(De)):(tn.expandByPoint(zi.min),tn.expandByPoint(zi.max))}tn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)De.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(t,c),De.add(Mi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new $e(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new I,l[v]=new I;const c=new I,u=new I,p=new I,d=new Mt,h=new Mt,g=new Mt,M=new I,m=new I;function f(v,C,D){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,C),p.fromBufferAttribute(n,D),d.fromBufferAttribute(r,v),h.fromBufferAttribute(r,C),g.fromBufferAttribute(r,D),u.sub(c),p.sub(c),h.sub(d),g.sub(d);const F=1/(h.x*g.y-g.x*h.y);isFinite(F)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(p,-h.y).multiplyScalar(F),m.copy(p).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(F),a[v].add(M),a[C].add(M),a[D].add(M),l[v].add(m),l[C].add(m),l[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let v=0,C=T.length;v<C;++v){const D=T[v],F=D.start,z=D.count;for(let W=F,N=F+z;W<N;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const w=new I,S=new I,E=new I,y=new I;function R(v){E.fromBufferAttribute(s,v),y.copy(E);const C=a[v];w.copy(C),w.sub(E.multiplyScalar(E.dot(C))).normalize(),S.crossVectors(y,C);const F=S.dot(l[v])<0?-1:1;o.setXYZW(v,w.x,w.y,w.z,F)}for(let v=0,C=T.length;v<C;++v){const D=T[v],F=D.start,z=D.count;for(let W=F,N=F+z;W<N;W+=3)R(t.getX(W+0)),R(t.getX(W+1)),R(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,p=new I;if(t)for(let d=0,h=t.count;d<h;d+=3){const g=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=e.count;d<h;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,p=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?h=l[M]*a.data.stride+a.offset:h=l[M]*u;for(let f=0;f<u;f++)d[g++]=c[h++]}return new $e(d,u,p)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,p=c.length;u<p;u++){const d=c[u],h=t(d,n);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){const h=c[p];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],p=r[c];for(let d=0,h=p.length;d<h;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wr=new I,Zu=new I,Ku=new kt;class gn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wr.subVectors(n,e).cross(Zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(wr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ku.getNormalMatrix(t),s=this.coplanarPoint(wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Ju=0;class Ui extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Yi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Ol,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Rn=new I,Rr=new I,Ss=new I,Ms=new I;class ls{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Rr.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),Ms.copy(this.origin).sub(Rr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ss),a=Ms.dot(this.direction),l=-Ms.dot(Ss),c=Ms.lengthSq(),u=Math.abs(1-o*o);let p,d,h,g;if(u>0)if(p=o*l-a,d=o*a-l,g=r*u,p>=0)if(d>=-g)if(d<=g){const M=1/u;p*=M,d*=M,h=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=r,p=Math.max(0,-(o*d+a)),h=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(o*d+a)),h=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*r+a)),d=p>0?-r:Math.min(Math.max(-r,-l),r),h=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(p=Math.max(0,-(o*r+a)),d=p>0?r:Math.min(Math.max(-r,-l),r),h=-p*p+d*(d+2*l)+c);else d=o>0?-r:r,p=Math.max(0,-(o*d+a)),h=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Rr).addScaledVector(Ss,d),h}intersectSphere(t,e){if(t.radius<0)return null;Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(a=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,p=t.x-o.x,d=t.y-o.y,h=t.z-o.z,g=e.x-o.x,M=e.y-o.y,m=e.z-o.z,f=n.x-o.x,T=n.y-o.y,w=n.z-o.z,S=Math.abs(l),E=Math.abs(c),y=Math.abs(u);let R,v,C,D,F,z,W,N,k,q,K,at;if(S>=E&&S>=y?(C=l,z=p,k=g,at=f,l>=0?(R=c,v=u,D=d,F=h,W=M,N=m,q=T,K=w):(R=u,v=c,D=h,F=d,W=m,N=M,q=w,K=T)):E>=y?(C=c,z=d,k=M,at=T,c>=0?(R=u,v=l,D=h,F=p,W=m,N=g,q=w,K=f):(R=l,v=u,D=p,F=h,W=g,N=m,q=f,K=w)):(C=u,z=h,k=m,at=w,u>=0?(R=l,v=c,D=p,F=d,W=g,N=M,q=f,K=T):(R=c,v=l,D=d,F=p,W=M,N=g,q=T,K=f)),C===0)return null;const $=R/C,it=v/C,ot=1/C,Tt=D-$*z,It=F-it*z,oe=W-$*k,Bt=N-it*k,ee=q-$*at,Q=K-it*at,et=ee*Bt-Q*oe,yt=Tt*Q-It*ee,Dt=oe*It-Bt*Tt;if(s){if(et<0||yt<0||Dt<0)return null}else if((et<0||yt<0||Dt<0)&&(et>0||yt>0||Dt>0))return null;const St=et+yt+Dt;if(St===0)return null;const Vt=ot*(et*z+yt*k+Dt*at);return(St>0?Vt<0:Vt>0)?null:this.at(Vt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xn extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const wa=new xe,jn=new ls,ys=new as,Ra=new I,bs=new I,Es=new I,Ts=new I,Ir=new I,Cs=new I,Ia=new I,As=new I;class Ye extends qe{constructor(t=new Te,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],p=r[l];u!==0&&(Ir.fromBufferAttribute(p,t),o?Cs.addScaledVector(Ir,u):Cs.addScaledVector(Ir.sub(e),u))}e.add(Cs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(ys.containsPoint(jn.origin)===!1&&(jn.intersectSphere(ys,Ra)===null||jn.origin.distanceToSquared(Ra)>(t.far-t.near)**2))&&(wa.copy(r).invert(),jn.copy(t.ray).applyMatrix4(wa),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=T,E=w;S<E;S+=3){const y=a.getX(S),R=a.getX(S+1),v=a.getX(S+2);s=ws(this,f,t,n,c,u,p,y,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),M=Math.min(a.count,h.start+h.count);for(let m=g,f=M;m<f;m+=3){const T=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);s=ws(this,o,t,n,c,u,p,T,w,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=T,E=w;S<E;S+=3){const y=S,R=S+1,v=S+2;s=ws(this,f,t,n,c,u,p,y,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let m=g,f=M;m<f;m+=3){const T=m,w=m+1,S=m+2;s=ws(this,o,t,n,c,u,p,T,w,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function $u(i,t,e,n,s,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===si,a),l===null)return null;As.copy(a),As.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(As);return c<e.near||c>e.far?null:{distance:c,point:As.clone(),object:i}}function ws(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,bs),i.getVertexPosition(l,Es),i.getVertexPosition(c,Ts);const u=$u(i,t,e,n,bs,Es,Ts,Ia);if(u){const p=new I;un.getBarycoord(Ia,bs,Es,Ts,p),s&&(u.uv=un.getInterpolatedAttribute(s,a,l,c,p,new Mt)),r&&(u.uv1=un.getInterpolatedAttribute(r,a,l,c,p,new Mt)),o&&(u.normal=un.getInterpolatedAttribute(o,a,l,c,p,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};un.getNormal(bs,Es,Ts,d.normal),u.face=d,u.barycoord=p}return u}class Qu extends ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ne,u=Ne,p,d){super(null,o,a,l,c,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ti=new as,ju=new Mt(.5,.5),Rs=new I;class tc{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,o=new gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],p=r[5],d=r[6],h=r[7],g=r[8],M=r[9],m=r[10],f=r[11],T=r[12],w=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-o,h-u,f-g,E-T).normalize(),s[1].setComponents(c+o,h+u,f+g,E+T).normalize(),s[2].setComponents(c+a,h+p,f+M,E+w).normalize(),s[3].setComponents(c-a,h-p,f-M,E-w).normalize(),n)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,h-d,f-m,E-S).normalize();else if(s[4].setComponents(c-l,h-d,f-m,E-S).normalize(),e===vn)s[5].setComponents(c+l,h+d,f+m,E+S).normalize();else if(e===js)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){ti.center.set(0,0,0);const e=ju.distanceTo(t.center);return ti.radius=.7071067811865476+e,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Rs.x=s.normal.x>0?t.max.x:t.min.x,Rs.y=s.normal.y>0?t.max.y:t.min.y,Rs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qs extends Ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const er=new I,nr=new I,Pa=new xe,Hi=new ls,Is=new as,Pr=new I,Oa=new I;class ec extends qe{constructor(t=new Te,e=new qs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)er.fromBufferAttribute(e,s-1),nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=er.distanceTo(nr);t.setAttribute("lineDistance",new Fe(n,1))}else Ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(s),Is.radius+=r,t.ray.intersectsSphere(Is)===!1)return;Pa.copy(s).invert(),Hi.copy(t.ray).applyMatrix4(Pa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let M=h,m=g-1;M<m;M+=c){const f=u.getX(M),T=u.getX(M+1),w=Ps(this,t,Hi,l,f,T,M);w&&e.push(w)}if(this.isLineLoop){const M=u.getX(g-1),m=u.getX(h),f=Ps(this,t,Hi,l,M,m,g-1);f&&e.push(f)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let M=h,m=g-1;M<m;M+=c){const f=Ps(this,t,Hi,l,M,M+1,M);f&&e.push(f)}if(this.isLineLoop){const M=Ps(this,t,Hi,l,g-1,h,g-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ps(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(er.fromBufferAttribute(a,s),nr.fromBufferAttribute(a,r),e.distanceSqToSegment(er,nr,Pr,Oa)>n)return;Pr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pr);if(!(c<t.near||c>t.far))return{distance:c,point:Oa.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const La=new I,Ua=new I;class Da extends ec{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)La.fromBufferAttribute(e,s),Ua.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+La.distanceTo(Ua);t.setAttribute("lineDistance",new Fe(n,1))}else Ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class td extends ec{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class nc extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Na=new xe,Po=new ls,Os=new as,Ls=new I;class ed extends qe{constructor(t=new Te,e=new nc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),Os.radius+=r,t.ray.intersectsSphere(Os)===!1)return;Na.copy(s).invert(),Po.copy(t.ray).applyMatrix4(Na);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,M=h;g<M;g++){const m=c.getX(g);Ls.fromBufferAttribute(p,m),Fa(Ls,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),h=Math.min(p.count,o.start+o.count);for(let g=d,M=h;g<M;g++)Ls.fromBufferAttribute(p,g),Fa(Ls,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fa(i,t,e,n,s,r,o){const a=Po.distanceSqToPoint(i);if(a<e){const l=new I;Po.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ic extends ke{constructor(t=[],e=ri,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nd extends ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ns extends ke{constructor(t,e,n=Mn,s,r,o,a=Ne,l=Ne,c,u=Nn,p=1){if(u!==Nn&&u!==ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:p};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class id extends ns{constructor(t,e=Mn,n=ri,s,r,o=Ne,a=Ne,l,c=Nn){const u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sc extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cs extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],p=[];let d=0,h=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(p,2));function g(M,m,f,T,w,S,E,y,R,v,C){const D=S/R,F=E/v,z=S/2,W=E/2,N=y/2,k=R+1,q=v+1;let K=0,at=0;const $=new I;for(let it=0;it<q;it++){const ot=it*F-W;for(let Tt=0;Tt<k;Tt++){const It=Tt*D-z;$[M]=It*T,$[m]=ot*w,$[f]=N,c.push($.x,$.y,$.z),$[M]=0,$[m]=0,$[f]=y>0?1:-1,u.push($.x,$.y,$.z),p.push(Tt/R),p.push(1-it/v),K+=1}}for(let it=0;it<v;it++)for(let ot=0;ot<R;ot++){const Tt=d+ot+k*it,It=d+ot+k*(it+1),oe=d+(ot+1)+k*(it+1),Bt=d+(ot+1)+k*it;l.push(Tt,It,Bt),l.push(It,oe,Bt),at+=6}a.addGroup(h,at,C),h+=at,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ft("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,h=(o-u)/d;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Mt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,l=new xe;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Kt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(Kt(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zo extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*p+this.aX,c=d*p+h*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sd extends Zo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ko(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,p){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+p)+(l-a)/p;d*=u,h*=u,s(o,a,d,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ba=new I,za=new I,Or=new Ko,Lr=new Ko,Ur=new Ko;class rd extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(za.subVectors(s[0],s[1]).add(s[0]),c=za);const p=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ba.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),h),M=Math.pow(p.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Or.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,g,M,m),Lr.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,g,M,m),Ur.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(Or.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),Lr.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),Ur.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return n.set(Or.calc(l),Lr.calc(l),Ur.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ha(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function od(i,t){const e=1-i;return e*e*t}function ad(i,t){return 2*(1-i)*i*t}function ld(i,t){return i*i*t}function Ki(i,t,e,n){return od(i,t)+ad(i,e)+ld(i,n)}function cd(i,t){const e=1-i;return e*e*e*t}function ud(i,t){const e=1-i;return 3*e*e*i*t}function dd(i,t){return 3*(1-i)*i*i*t}function fd(i,t){return i*i*i*t}function Ji(i,t,e,n,s){return cd(i,t)+ud(i,e)+dd(i,n)+fd(i,s)}class rc extends En{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ji(t,s.x,r.x,o.x,a.x),Ji(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hd extends En{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ji(t,s.x,r.x,o.x,a.x),Ji(t,s.y,r.y,o.y,a.y),Ji(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class oc extends En{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pd extends En{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ac extends En{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ki(t,s.x,r.x,o.x),Ki(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class md extends En{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ki(t,s.x,r.x,o.x),Ki(t,s.y,r.y,o.y),Ki(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lc extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Ha(a,l.x,c.x,u.x,p.x),Ha(a,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}}var Ga=Object.freeze({__proto__:null,ArcCurve:sd,CatmullRomCurve3:rd,CubicBezierCurve:rc,CubicBezierCurve3:hd,EllipseCurve:Zo,LineCurve:oc,LineCurve3:pd,QuadraticBezierCurve:ac,QuadraticBezierCurve3:md,SplineCurve:lc});class gd extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ga[s.type]().fromJSON(s))}return this}}class ka extends gd{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new oc(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ac(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new rc(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new lc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Zo(t,e,n,s,r,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cc extends ka{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ka().fromJSON(s))}return this}}function _d(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=uc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=yd(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,p=l;for(let d=e;d<s;d+=e){const h=i[d],g=i[d+1];h<a&&(a=h),g<l&&(l=g),h>u&&(u=h),g>p&&(p=g)}c=Math.max(u-a,p-l),c=c!==0?32767/c:0}return is(r,o,e,a,l,c,0),o}function uc(i,t,e,n,s){let r;if(s===Ld(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Va(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Va(o/n|0,i[o],i[o+1],r);return r&&Pi(r,r.next)&&(rs(r),r=r.next),r}function li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Pi(e,e.next)||ve(e.prev,e,e.next)===0)){if(rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function is(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Ad(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?vd(i,n,s,r):xd(i)){t.push(l.i,i.i,c.i),rs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Sd(li(i),t),is(i,t,e,n,s,r,2)):o===2&&Md(i,t,e,n,s,r):is(li(i),t,e,n,s,r,1);break}}}function xd(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),p=Math.min(a,l,c),d=Math.max(s,r,o),h=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=p&&g.y<=h&&Wi(s,a,r,l,o,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,p=r.y,d=o.y,h=Math.min(a,l,c),g=Math.min(u,p,d),M=Math.max(a,l,c),m=Math.max(u,p,d),f=Oo(h,g,t,e,n),T=Oo(M,m,t,e,n);let w=i.prevZ,S=i.nextZ;for(;w&&w.z>=f&&S&&S.z<=T;){if(w.x>=h&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&Wi(a,u,l,p,c,d,w.x,w.y)&&ve(w.prev,w,w.next)>=0||(w=w.prevZ,S.x>=h&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Wi(a,u,l,p,c,d,S.x,S.y)&&ve(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;w&&w.z>=f;){if(w.x>=h&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&Wi(a,u,l,p,c,d,w.x,w.y)&&ve(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;S&&S.z<=T;){if(S.x>=h&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Wi(a,u,l,p,c,d,S.x,S.y)&&ve(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Sd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Pi(n,s)&&fc(n,e,e.next,s)&&ss(n,s)&&ss(s,n)&&(t.push(n.i,e.i,s.i),rs(e),rs(e.next),e=i=s),e=e.next}while(e!==i);return li(e)}function Md(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Id(o,a)){let l=hc(o,a);o=li(o,o.next),l=li(l,l.next),is(o,t,e,n,s,r,0),is(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function yd(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=uc(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Rd(c))}s.sort(bd);for(let r=0;r<s.length;r++)e=Ed(s[r],e);return e}function bd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ed(i,t){const e=Td(i,t);if(!e)return t;const n=hc(e,i);return li(n,n.next),li(e,e.next)}function Td(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Pi(i,e))return e;do{if(Pi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&dc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const p=Math.abs(s-e.y)/(n-e.x);ss(e,i)&&(p<u||p===u&&(e.x>o.x||e.x===o.x&&Cd(o,e)))&&(o=e,u=p)}e=e.next}while(e!==a);return o}function Cd(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function Ad(i,t,e,n){let s=i;do s.z===0&&(s.z=Oo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wd(s)}function wd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Oo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Rd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function dc(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Wi(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&dc(i,t,e,n,s,r,o,a)}function Id(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pd(i,t)&&(ss(i,t)&&ss(t,i)&&Od(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||Pi(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Pi(i,t){return i.x===t.x&&i.y===t.y}function fc(i,t,e,n){const s=Ds(ve(i,t,e)),r=Ds(ve(i,t,n)),o=Ds(ve(e,n,i)),a=Ds(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&Us(i,e,t)||r===0&&Us(i,n,t)||o===0&&Us(e,i,n)||a===0&&Us(e,t,n))}function Us(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ds(i){return i>0?1:i<0?-1:0}function Pd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ss(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Od(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hc(i,t){const e=Lo(i.i,i.x,i.y),n=Lo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Va(i,t,e,n){const s=Lo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ld(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ud{static triangulate(t,e,n=2){return _d(t,e,n)}}class $i{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return $i.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Wa(t),Xa(n,t);let o=t.length;e.forEach(Wa);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Xa(n,e[l]);const a=Ud.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Wa(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xa(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Oi extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,p=t/a,d=e/l,h=[],g=[],M=[],m=[];for(let f=0;f<u;f++){const T=f*d-o;for(let w=0;w<c;w++){const S=w*p-r;g.push(S,-T,0),M.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const w=T+c*f,S=T+c*(f+1),E=T+1+c*(f+1),y=T+1+c*f;h.push(w,S,y),h.push(S,E,y)}this.setIndex(h),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(M,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jo extends Te{constructor(t=new cc([new Mt(0,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(r,3)),this.setAttribute("uv",new Fe(o,2));function c(u){const p=s.length/3,d=u.extractPoints(e);let h=d.shape;const g=d.holes;$i.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,f=g.length;m<f;m++){const T=g[m];$i.isClockWise(T)===!0&&(g[m]=T.reverse())}const M=$i.triangulateShape(h,g);for(let m=0,f=g.length;m<f;m++){const T=g[m];h=h.concat(T)}for(let m=0,f=h.length;m<f;m++){const T=h[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,f=M.length;m<f;m++){const T=M[m],w=T[0]+p,S=T[1]+p,E=T[2]+p;n.push(w,S,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Dd(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Jo(n,t.curveSegments)}}function Dd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function Li(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Ya(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ya(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Li(i[e]);for(const s in n)t[s]=n[s]}return t}function Ya(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Fd={clone:Li,merge:Xe};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Hd extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gd extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kd extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ns=new I,Fs=new qn,pn=new I;class mc extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ns,Fs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ns,Fs,pn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ns,Fs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ns,Fs,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new I,qa=new Mt,Za=new Mt;class cn extends mc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,qa,Za),e.subVectors(Za,qa)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class $o extends mc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const yi=-90,bi=1;class Vd extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(yi,bi,t,e);s.layers=this.layers,this.add(s);const r=new cn(yi,bi,t,e);r.layers=this.layers,this.add(r);const o=new cn(yi,bi,t,e);o.layers=this.layers,this.add(o);const a=new cn(yi,bi,t,e);a.layers=this.layers,this.add(a);const l=new cn(yi,bi,t,e);l.layers=this.layers,this.add(l);const c=new cn(yi,bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wd extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ka=new xe;class Xd{constructor(t,e,n=0,s=1/0){this.ray=new ls(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ka.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ka),this}intersectObject(t,e=!0,n=[]){return Uo(t,this,n,e),n.sort(Ja),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Uo(t[s],this,n,e);return n.sort(Ja),n}}function Ja(i,t){return i.distance-t.distance}function Uo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Uo(r[o],t,e,!0)}}class $a{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ia=class ia{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ia.prototype.isMatrix2=!0;let Qa=ia;class Yd extends Zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ja(i,t,e,n){const s=qd(n);switch(e){case Yl:return i*t;case Zl:return i*t/s.components*s.byteLength;case Ho:return i*t/s.components*s.byteLength;case oi:return i*t*2/s.components*s.byteLength;case Go:return i*t*2/s.components*s.byteLength;case ql:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case ko:return i*t*4/s.components*s.byteLength;case Vs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:case no:return Math.max(i,16)*Math.max(t,8)/4;case jr:case eo:return Math.max(i,8)*Math.max(t,8)/2;case io:case so:case oo:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ro:case Ks:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Eo:case To:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ao:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Js:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qd(i){switch(i){case rn:case kl:return{byteLength:1,components:1};case ji:case Vl:case yn:return{byteLength:2,components:1};case Bo:case zo:return{byteLength:2,components:4};case Mn:case Fo:case xn:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gc(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zd(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){const u=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,u);else{p.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<p.length;h++){const g=p[d],M=p[h];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,p[d]=M)}p.length=d+1;for(let h=0,g=p.length;h<g;h++){const M=p[h];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,th=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ih=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ah=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ch=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ph=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Th=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ah=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ih=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$h=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_p=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Kd,alphahash_pars_fragment:Jd,alphamap_fragment:$d,alphamap_pars_fragment:Qd,alphatest_fragment:jd,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:rf,begin_vertex:of,beginnormal_vertex:af,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:uf,clipping_planes_fragment:df,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:hf,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:xf,common:vf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:yf,displacementmap_vertex:bf,emissivemap_fragment:Ef,emissivemap_pars_fragment:Tf,colorspace_fragment:Cf,colorspace_pars_fragment:Af,envmap_fragment:wf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:If,envmap_pars_vertex:Pf,envmap_physical_pars_fragment:kf,envmap_vertex:Of,fog_vertex:Lf,fog_pars_vertex:Uf,fog_fragment:Df,fog_pars_fragment:Nf,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Bf,lights_lambert_fragment:zf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Gf,lights_toon_fragment:Vf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:Yf,lights_physical_fragment:qf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Kf,lights_fragment_maps:Jf,lights_fragment_end:$f,lightprobes_pars_fragment:Qf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:th,logdepthbuf_pars_vertex:eh,logdepthbuf_vertex:nh,map_fragment:ih,map_pars_fragment:sh,map_particle_fragment:rh,map_particle_pars_fragment:oh,metalnessmap_fragment:ah,metalnessmap_pars_fragment:lh,morphinstance_vertex:ch,morphcolor_vertex:uh,morphnormal_vertex:dh,morphtarget_pars_vertex:fh,morphtarget_vertex:hh,normal_fragment_begin:ph,normal_fragment_maps:mh,normal_pars_fragment:gh,normal_pars_vertex:_h,normal_vertex:xh,normalmap_pars_fragment:vh,clearcoat_normal_fragment_begin:Sh,clearcoat_normal_fragment_maps:Mh,clearcoat_pars_fragment:yh,iridescence_pars_fragment:bh,opaque_fragment:Eh,packing:Th,premultiplied_alpha_fragment:Ch,project_vertex:Ah,dithering_fragment:wh,dithering_pars_fragment:Rh,roughnessmap_fragment:Ih,roughnessmap_pars_fragment:Ph,shadowmap_pars_fragment:Oh,shadowmap_pars_vertex:Lh,shadowmap_vertex:Uh,shadowmask_pars_fragment:Dh,skinbase_vertex:Nh,skinning_pars_vertex:Fh,skinning_vertex:Bh,skinnormal_vertex:zh,specularmap_fragment:Hh,specularmap_pars_fragment:Gh,tonemapping_fragment:kh,tonemapping_pars_fragment:Vh,transmission_fragment:Wh,transmission_pars_fragment:Xh,uv_pars_fragment:Yh,uv_pars_vertex:qh,uv_vertex:Zh,worldpos_vertex:Kh,background_vert:Jh,background_frag:$h,backgroundCube_vert:Qh,backgroundCube_frag:jh,cube_vert:tp,cube_frag:ep,depth_vert:np,depth_frag:ip,distance_vert:sp,distance_frag:rp,equirect_vert:op,equirect_frag:ap,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:up,meshbasic_frag:dp,meshlambert_vert:fp,meshlambert_frag:hp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:_p,meshphong_vert:xp,meshphong_frag:vp,meshphysical_vert:Sp,meshphysical_frag:Mp,meshtoon_vert:yp,meshtoon_frag:bp,points_vert:Ep,points_frag:Tp,shadow_vert:Cp,shadow_frag:Ap,sprite_vert:wp,sprite_frag:Rp},_t={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},_n={basic:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Xe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Xe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Xe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Xe([_t.points,_t.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Xe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Xe([_t.common,_t.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Xe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Xe([_t.sprite,_t.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Xe([_t.common,_t.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Xe([_t.lights,_t.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};_n.physical={uniforms:Xe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Bs={r:0,b:0,g:0},Ip=new xe,_c=new kt;_c.set(-1,0,0,0,1,0,0,0,1);function Pp(i,t,e,n,s,r){const o=new Jt(0);let a=s===!0?0:1,l,c,u=null,p=0,d=null;function h(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){const S=T.backgroundBlurriness>0;w=t.get(w,S)}return w}function g(T){let w=!1;const S=h(T);S===null?m(o,a):S&&S.isColor&&(m(S,1),w=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(T,w){const S=h(w);S&&(S.isCubeTexture||S.mapping===sr)?(c===void 0&&(c=new Ye(new cs(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Li(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_c),c.material.toneMapped=te.getTransfer(S.colorSpace)!==le,(u!==S||p!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ye(new Oi(2,2),new bn({name:"BackgroundMaterial",uniforms:Li(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=te.getTransfer(S.colorSpace)!==le,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,w){T.getRGB(Bs,pc(i)),e.buffers.color.setClear(Bs.r,Bs.g,Bs.b,w,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,m(o,a)},render:g,addToRenderList:M,dispose:f}}function Op(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(F,z,W,N,k){let q=!1;const K=p(F,N,W,z);r!==K&&(r=K,c(r.object)),q=h(F,N,W,k),q&&g(F,N,W,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(F,z,W,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function p(F,z,W,N){const k=N.wireframe===!0;let q=n[z.id];q===void 0&&(q={},n[z.id]=q);const K=F.isInstancedMesh===!0?F.id:0;let at=q[K];at===void 0&&(at={},q[K]=at);let $=at[W.id];$===void 0&&($={},at[W.id]=$);let it=$[k];return it===void 0&&(it=d(l()),$[k]=it),it}function d(F){const z=[],W=[],N=[];for(let k=0;k<e;k++)z[k]=0,W[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:N,object:F,attributes:{},index:null}}function h(F,z,W,N){const k=r.attributes,q=z.attributes;let K=0;const at=W.getAttributes();for(const $ in at)if(at[$].location>=0){const ot=k[$];let Tt=q[$];if(Tt===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(Tt=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(Tt=F.instanceColor)),ot===void 0||ot.attribute!==Tt||Tt&&ot.data!==Tt.data)return!0;K++}return r.attributesNum!==K||r.index!==N}function g(F,z,W,N){const k={},q=z.attributes;let K=0;const at=W.getAttributes();for(const $ in at)if(at[$].location>=0){let ot=q[$];ot===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(ot=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(ot=F.instanceColor));const Tt={};Tt.attribute=ot,ot&&ot.data&&(Tt.data=ot.data),k[$]=Tt,K++}r.attributes=k,r.attributesNum=K,r.index=N}function M(){const F=r.newAttributes;for(let z=0,W=F.length;z<W;z++)F[z]=0}function m(F){f(F,0)}function f(F,z){const W=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;W[F]=1,N[F]===0&&(i.enableVertexAttribArray(F),N[F]=1),k[F]!==z&&(i.vertexAttribDivisor(F,z),k[F]=z)}function T(){const F=r.newAttributes,z=r.enabledAttributes;for(let W=0,N=z.length;W<N;W++)z[W]!==F[W]&&(i.disableVertexAttribArray(W),z[W]=0)}function w(F,z,W,N,k,q,K){K===!0?i.vertexAttribIPointer(F,z,W,k,q):i.vertexAttribPointer(F,z,W,N,k,q)}function S(F,z,W,N){M();const k=N.attributes,q=W.getAttributes(),K=z.defaultAttributeValues;for(const at in q){const $=q[at];if($.location>=0){let it=k[at];if(it===void 0&&(at==="instanceMatrix"&&F.instanceMatrix&&(it=F.instanceMatrix),at==="instanceColor"&&F.instanceColor&&(it=F.instanceColor)),it!==void 0){const ot=it.normalized,Tt=it.itemSize,It=t.get(it);if(It===void 0)continue;const oe=It.buffer,Bt=It.type,ee=It.bytesPerElement,Q=Bt===i.INT||Bt===i.UNSIGNED_INT||it.gpuType===Fo;if(it.isInterleavedBufferAttribute){const et=it.data,yt=et.stride,Dt=it.offset;if(et.isInstancedInterleavedBuffer){for(let St=0;St<$.locationSize;St++)f($.location+St,et.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let St=0;St<$.locationSize;St++)m($.location+St);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let St=0;St<$.locationSize;St++)w($.location+St,Tt/$.locationSize,Bt,ot,yt*ee,(Dt+Tt/$.locationSize*St)*ee,Q)}else{if(it.isInstancedBufferAttribute){for(let et=0;et<$.locationSize;et++)f($.location+et,it.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let et=0;et<$.locationSize;et++)m($.location+et);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let et=0;et<$.locationSize;et++)w($.location+et,Tt/$.locationSize,Bt,ot,Tt*ee,Tt/$.locationSize*et*ee,Q)}}else if(K!==void 0){const ot=K[at];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv($.location,ot);break;case 3:i.vertexAttrib3fv($.location,ot);break;case 4:i.vertexAttrib4fv($.location,ot);break;default:i.vertexAttrib1fv($.location,ot)}}}}T()}function E(){C();for(const F in n){const z=n[F];for(const W in z){const N=z[W];for(const k in N){const q=N[k];for(const K in q)u(q[K].object),delete q[K];delete N[k]}}delete n[F]}}function y(F){if(n[F.id]===void 0)return;const z=n[F.id];for(const W in z){const N=z[W];for(const k in N){const q=N[k];for(const K in q)u(q[K].object),delete q[K];delete N[k]}}delete n[F.id]}function R(F){for(const z in n){const W=n[z];for(const N in W){const k=W[N];if(k[F.id]===void 0)continue;const q=k[F.id];for(const K in q)u(q[K].object),delete q[K];delete k[F.id]}}}function v(F){for(const z in n){const W=n[z],N=F.isInstancedMesh===!0?F.id:0,k=W[N];if(k!==void 0){for(const q in k){const K=k[q];for(const at in K)u(K[at].object),delete K[at];delete k[q]}delete W[N],Object.keys(W).length===0&&delete n[z]}}}function C(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function Lp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Up(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const v=R===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==rn&&R!==xn&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Ft("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:S,maxSamples:E,samples:y}}function Dp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new gn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const h=p.length!==0||d||n!==0||s;return s=d,n=p.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,h){const g=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:n,w=T*4;let S=f.clippingState||null;l.value=S,S=u(g,d,w,h);for(let E=0;E!==w;++E)S[E]=e[E];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,h,g){const M=p!==null?p.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const f=h+M*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,S=h;w!==M;++w,S+=4)o.copy(p[w]).applyMatrix4(T,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const Ai=4,Np=6,Fp=20,Bp=256,Gi=new $o,tl=new Jt;let Dr=null,Nr=0,Fr=0,Br=!1;const zp=new I,ei=new I;class el{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=zp}=r;Dr=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dr,Nr,Fr),this._renderer.xr.enabled=Br,t.scissorTest=!1,Ei(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ri||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dr=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:yn,format:dn,colorSpace:$s,depthBuffer:!1},s=nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Hp(r)),this._blurMaterial=kp(r,t,e),this._ggxMaterial=Gp(r,t,e)}return s}_compileMaterial(t){const e=new Ye(new Te,t);this._renderer.compile(e,Gi)}_sceneToCubeUV(t,e,n,s,r){const l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,h=p.toneMapping;p.getClearColor(tl),p.toneMapping=Sn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new cs,new Xn({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let f=!1;const T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,f=!0):(m.color.copy(tl),f=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const E=this._cubeSize;Ei(s,S*E,w>2?E:0,E,E),p.setRenderTarget(s),f&&p.render(M,l),p.render(t,l)}p.toneMapping=h,p.autoClear=d,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ri||t.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ei(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Gi)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-u*u),d=c*1.25,h=p*d,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-Ai?n-g+Ai:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=g-e,Ei(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(a,Gi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ei(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(a,Gi)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],p=3*u*(s>this._lodMax-Ai?s-this._lodMax+Ai:0),d=4*(this._cubeSize-u);Ei(e,p,d,3*u,2*u),o.setRenderTarget(e),o.render(l,Gi)}}function Hp(i){const t=[],e=[];let n=i;const s=i-Ai+1+Np;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,d=6,h=3,g=new Float32Array(h*d*p),M=new Float32Array(h*d*p);for(let f=0;f<p;f++){const T=f%3*2/3-1,w=f>2?0:-1,S=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];g.set(S,h*d*f);for(let E=0;E<d;E++){const y=u[E*2]*2-1,R=u[E*2+1]*2-1;f===0?ei.set(1,R,y):f===1?ei.set(-y,1,-R):f===2?ei.set(-y,R,1):f===3?ei.set(-1,R,-y):f===4?ei.set(-y,-1,R):ei.set(y,R,-1),ei.toArray(M,(f*d+E)*h)}}const m=new Te;m.setAttribute("position",new $e(g,h)),m.setAttribute("outputDirection",new $e(M,h)),e.push(new Ye(m,null)),n>Ai&&n--}return{lodMeshes:e,sizeLods:t}}function nl(i,t,e){const n=new fn(i,t,e);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ei(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gp(i,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function kp(i,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:Fp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function il(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function sl(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function rr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xc extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ic(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cs(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Un});r.uniforms.tEquirect.value=e;const o=new Ye(s,r),a=e.minFilter;return e.minFilter===ni&&(e.minFilter=Ge),new Vd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function Vp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===ar||h===lr)if(t.has(d)){const g=t.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const M=new xc(g.height);return M.fromEquirectangularTexture(i,d),t.set(d,M),d.addEventListener("dispose",c),a(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,g=h===ar||h===lr,M=h===ri||h===Ii;if(g||M){let m=e.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new el(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const T=d.image;return g&&T&&T.height>0||M&&T&&l(T)?(n===null&&(n=new el(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===ar?d.mapping=ri:h===lr&&(d.mapping=Ii),d}function l(d){let h=0;const g=6;for(let M=0;M<g;M++)d[M]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Wp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&wi("WebGLRenderer: "+n+" extension not supported."),s}}}function Xp(i,t,e,n){const s={},r=new WeakMap;function o(p){const d=p.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(t.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(p,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(p){const d=p.attributes;for(const h in d)t.update(d[h],i.ARRAY_BUFFER)}function c(p){const d=[],h=p.index,g=p.attributes.position;let M=0;if(g===void 0)return;if(h!==null){const T=h.array;M=h.version;for(let w=0,S=T.length;w<S;w+=3){const E=T[w+0],y=T[w+1],R=T[w+2];d.push(E,y,y,R,R,E)}}else{const T=g.array;M=g.version;for(let w=0,S=T.length/3-1;w<S;w+=3){const E=w+0,y=w+1,R=w+2;d.push(E,y,y,R,R,E)}}const m=new(g.count>=65535?jl:Ql)(d,1);m.version=M;const f=r.get(p);f&&t.remove(f),r.set(p,m)}function u(p){const d=r.get(p);if(d){const h=p.index;h!==null&&d.version<h.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function Yp(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*o),e.update(d,n,1)}function c(p,d,h){h!==0&&(i.drawElementsInstanced(n,d,r,p*o,h),e.update(d,n,h))}function u(p,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,h);let M=0;for(let m=0;m<h;m++)M+=d[m];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function qp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ie("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zp(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==p){let C=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let w=0;h===!0&&(w=1),g===!0&&(w=2),M===!0&&(w=3);let S=a.attributes.position.count*w,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const y=new Float32Array(S*E*4*p),R=new Jl(y,S,E,p);R.type=xn,R.needsUpdate=!0;const v=w*4;for(let D=0;D<p;D++){const F=m[D],z=f[D],W=T[D],N=S*E*4*D;for(let k=0;k<F.count;k++){const q=k*v;h===!0&&(s.fromBufferAttribute(F,k),y[N+q+0]=s.x,y[N+q+1]=s.y,y[N+q+2]=s.z,y[N+q+3]=0),g===!0&&(s.fromBufferAttribute(z,k),y[N+q+4]=s.x,y[N+q+5]=s.y,y[N+q+6]=s.z,y[N+q+7]=0),M===!0&&(s.fromBufferAttribute(W,k),y[N+q+8]=s.x,y[N+q+9]=s.y,y[N+q+10]=s.z,y[N+q+11]=W.itemSize===4?s.w:1)}}d={count:p,texture:R,size:new Mt(S,E)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let M=0;M<c.length;M++)h+=c[M];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Kp(i,t,e,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const Jp={[Ul]:"LINEAR_TONE_MAPPING",[Dl]:"REINHARD_TONE_MAPPING",[Nl]:"CINEON_TONE_MAPPING",[Fl]:"ACES_FILMIC_TONE_MAPPING",[zl]:"AGX_TONE_MAPPING",[Hl]:"NEUTRAL_TONE_MAPPING",[Bl]:"CUSTOM_TONE_MAPPING"};function $p(i,t,e,n,s,r){const o=new fn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Te;c.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const u=new Hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ye(c,u),d=new $o(-1,1,1,-1,0,1);let h=null,g=null,M=!1,m,f=null,T=[],w=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let y=0;y<T.length;y++){const R=T[y];R.setSize&&R.setSize(S,E)}},this.setEffects=function(S){T=S,w=T.length>0&&T[0].isRenderPass===!0;const E=o.width,y=o.height;T.length>0&&a===null&&(a=new fn(E,y,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(E,y,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){const v=T[R];v.setSize&&v.setSize(E,y)}},this.begin=function(S,E){if(M||S.toneMapping===Sn&&T.length===0)return!1;if(f=E,E!==null){const y=E.width,R=E.height;(o.width!==y||o.height!==R)&&this.setSize(y,R)}return w===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=Sn,!0},this.hasRenderPass=function(){return w},this.end=function(S,E){S.toneMapping=m,M=!0;let y=o,R=a;for(let v=0;v<T.length;v++){const C=T[v];C.enabled!==!1&&(C.render(S,R,y,E),C.needsSwap!==!1&&(y=R,R=R===a?l:a))}if(h!==S.outputColorSpace||g!==S.toneMapping){h=S.outputColorSpace,g=S.toneMapping,u.defines={},te.getTransfer(h)===le&&(u.defines.SRGB_TRANSFER="");const v=Jp[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(f),S.render(p,d),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const vc=new ke,Do=new ns(1,1),Sc=new Jl,Mc=new Nu,yc=new ic,rl=[],ol=[],al=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function Di(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=rl[s];if(r===void 0&&(r=new Float32Array(s),rl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function or(i,t){let e=ol[t];e===void 0&&(e=new Int32Array(t),ol[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),Ie(e,n)}}function i0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),Ie(e,n)}}function s0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;al.set(n),i.uniformMatrix4fv(this.addr,!1,al),Ie(e,n)}}function r0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function c0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function h0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Do.compareFunction=e.isReversedDepthBuffer()?Wo:Vo,r=Do):r=vc,e.setTexture2D(t||r,s)}function p0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mc,s)}function m0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yc,s)}function g0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sc,s)}function _0(i){switch(i){case 5126:return Qp;case 35664:return jp;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(i,t){i.uniform1fv(this.addr,t)}function v0(i,t){const e=Di(t,this.size,2);i.uniform2fv(this.addr,e)}function S0(i,t){const e=Di(t,this.size,3);i.uniform3fv(this.addr,e)}function M0(i,t){const e=Di(t,this.size,4);i.uniform4fv(this.addr,e)}function y0(i,t){const e=Di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b0(i,t){const e=Di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E0(i,t){const e=Di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T0(i,t){i.uniform1iv(this.addr,t)}function C0(i,t){i.uniform2iv(this.addr,t)}function A0(i,t){i.uniform3iv(this.addr,t)}function w0(i,t){i.uniform4iv(this.addr,t)}function R0(i,t){i.uniform1uiv(this.addr,t)}function I0(i,t){i.uniform2uiv(this.addr,t)}function P0(i,t){i.uniform3uiv(this.addr,t)}function O0(i,t){i.uniform4uiv(this.addr,t)}function L0(i,t,e){const n=this.cache,s=t.length,r=or(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Do:o=vc;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function U0(i,t,e){const n=this.cache,s=t.length,r=or(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mc,r[o])}function D0(i,t,e){const n=this.cache,s=t.length,r=or(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||yc,r[o])}function N0(i,t,e){const n=this.cache,s=t.length,r=or(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Sc,r[o])}function F0(i){switch(i){case 5126:return x0;case 35664:return v0;case 35665:return S0;case 35666:return M0;case 35674:return y0;case 35675:return b0;case 35676:return E0;case 5124:case 35670:return T0;case 35667:case 35671:return C0;case 35668:case 35672:return A0;case 35669:case 35673:return w0;case 5125:return R0;case 36294:return I0;case 36295:return P0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return N0}}class B0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_0(e.type)}}class z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F0(e.type)}}class H0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const zr=/(\w+)(\])?(\[|\.)?/g;function ul(i,t){i.seq.push(t),i.map[t.id]=t}function G0(i,t,e){const n=i.name,s=n.length;for(zr.lastIndex=0;;){const r=zr.exec(n),o=zr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ul(e,c===void 0?new B0(a,i,t):new z0(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new H0(a),ul(e,p)),e=p}}}class Zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);G0(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function dl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const k0=37297;let V0=0;function W0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const fl=new kt;function X0(i){te._getMatrix(fl,te.workingColorSpace,i);const t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Qs:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+W0(i.getShaderSource(t),a)}else return r}function Y0(i,t){const e=X0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const q0={[Ul]:"Linear",[Dl]:"Reinhard",[Nl]:"Cineon",[Fl]:"ACESFilmic",[zl]:"AgX",[Hl]:"Neutral",[Bl]:"Custom"};function Z0(i,t){const e=q0[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new I;function K0(){te.getLuminanceCoefficients(zs);const i=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function $0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Xi(i){return i!==""}function pl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ml(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(i){return i.replace(j0,em)}const tm=new Map;function em(i,t){let e=Zt[t];if(e===void 0){const n=tm.get(t);if(n!==void 0)e=Zt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return No(e)}const nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(nm,im)}function im(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _l(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const sm={[ks]:"SHADOWMAP_TYPE_PCF",[Vi]:"SHADOWMAP_TYPE_VSM"};function rm(i){return sm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const om={[ri]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE_UV"};function am(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":om[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const lm={[Ii]:"ENVMAP_MODE_REFRACTION"};function cm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const um={[Ll]:"ENVMAP_BLENDING_MULTIPLY",[Qc]:"ENVMAP_BLENDING_MIX",[jc]:"ENVMAP_BLENDING_ADD"};function dm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":um[i.combine]||"ENVMAP_BLENDING_NONE"}function fm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=rm(e),c=am(e),u=cm(e),p=dm(e),d=fm(e),h=J0(e),g=$0(r),M=s.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xi).join(`
`),f.length>0&&(f+=`
`)):(m=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),f=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Z0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Y0("linearToOutputTexel",e.outputColorSpace),K0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xi).join(`
`)),o=No(o),o=pl(o,e),o=ml(o,e),a=No(a),a=pl(a,e),a=ml(a,e),o=gl(o),a=gl(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=T+m+o,S=T+f+a,E=dl(s,s.VERTEX_SHADER,w),y=dl(s,s.FRAGMENT_SHADER,S);s.attachShader(M,E),s.attachShader(M,y),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(F){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(M)||"",W=s.getShaderInfoLog(E)||"",N=s.getShaderInfoLog(y)||"",k=z.trim(),q=W.trim(),K=N.trim();let at=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,y);else{const it=hl(s,E,"vertex"),ot=hl(s,y,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+it+`
`+ot)}else k!==""?Ft("WebGLProgram: Program Info Log:",k):(q===""||K==="")&&($=!1);$&&(F.diagnostics={runnable:at,programLog:k,vertexShader:{log:q,prefix:m},fragmentShader:{log:K,prefix:f}})}s.deleteShader(E),s.deleteShader(y),v=new Zs(s,M),C=Q0(s,M)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(M,k0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=y,this}let pm=0;class mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gm(t),e.set(t,n)),n}}class gm{constructor(t){this.id=pm++,this.code=t,this.usedTimes=0}}function _m(i){return i===oi||i===Ks||i===Js}function xm(i,t,e,n,s,r){const o=new qo,a=new mm,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer;let d=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,C,D,F,z,W){const N=F.fog,k=z.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,at=t.get(v.envMap||q,K),$=at&&at.mapping===sr?at.image.height:null,it=h[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ft("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Tt=ot!==void 0?ot.length:0;let It=0;k.morphAttributes.position!==void 0&&(It=1),k.morphAttributes.normal!==void 0&&(It=2),k.morphAttributes.color!==void 0&&(It=3);let oe,Bt,ee,Q;if(it){const st=_n[it];oe=st.vertexShader,Bt=st.fragmentShader}else{oe=v.vertexShader,Bt=v.fragmentShader;const st=a.getVertexShaderStage(v),rt=a.getFragmentShaderStage(v);a.update(v,st,rt),ee=st.id,Q=rt.id}const et=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Dt=z.isInstancedMesh===!0,St=z.isBatchedMesh===!0,Vt=!!v.map,_e=!!v.matcap,Wt=!!at,Xt=!!v.aoMap,Yt=!!v.lightMap,$t=!!v.bumpMap&&v.wireframe===!1,se=!!v.normalMap,Se=!!v.displacementMap,Ce=!!v.emissiveMap,de=!!v.metalnessMap,me=!!v.roughnessMap,U=v.anisotropy>0,Pe=v.clearcoat>0,jt=v.dispersion>0,b=v.retroreflectivity>0,_=v.iridescence>0,B=v.sheen>0,V=v.transmission>0,J=U&&!!v.anisotropyMap,ct=Pe&&!!v.clearcoatMap,ut=Pe&&!!v.clearcoatNormalMap,j=Pe&&!!v.clearcoatRoughnessMap,nt=_&&!!v.iridescenceMap,dt=_&&!!v.iridescenceThicknessMap,Pt=B&&!!v.sheenColorMap,gt=B&&!!v.sheenRoughnessMap,pt=!!v.specularMap,wt=!!v.specularColorMap,Lt=!!v.specularIntensityMap,Ht=V&&!!v.transmissionMap,L=V&&!!v.thicknessMap,ft=!!v.gradientMap,tt=!!v.alphaMap,ht=v.alphaTest>0,A=!!v.alphaHash,P=!!v.extensions;let Z=Sn;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Z=i.toneMapping);const X={shaderID:it,shaderType:v.type,shaderName:v.name,vertexShader:oe,fragmentShader:Bt,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:St,batchingColor:St&&z._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&z.instanceColor!==null,instancingMorph:Dt&&z.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:_e,envMap:Wt,envMapMode:Wt&&at.mapping,envMapCubeUVHeight:$,aoMap:Xt,lightMap:Yt,bumpMap:$t,normalMap:se,displacementMap:Se,emissiveMap:Ce,normalMapObjectSpace:se&&v.normalMapType===nu,normalMapTangentSpace:se&&v.normalMapType===fa,packedNormalMap:se&&v.normalMapType===fa&&_m(v.normalMap.format),metalnessMap:de,roughnessMap:me,anisotropy:U,anisotropyMap:J,clearcoat:Pe,clearcoatMap:ct,clearcoatNormalMap:ut,clearcoatRoughnessMap:j,dispersion:jt,retroreflection:b,iridescence:_,iridescenceMap:nt,iridescenceThicknessMap:dt,sheen:B,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:pt,specularColorMap:wt,specularIntensityMap:Lt,transmission:V,transmissionMap:Ht,thicknessMap:L,gradientMap:ft,opaque:v.transparent===!1&&v.blending===Yi&&v.alphaToCoverage===!1,alphaMap:tt,alphaTest:ht,alphaHash:A,combine:v.combine,mapUv:Vt&&g(v.map.channel),aoMapUv:Xt&&g(v.aoMap.channel),lightMapUv:Yt&&g(v.lightMap.channel),bumpMapUv:$t&&g(v.bumpMap.channel),normalMapUv:se&&g(v.normalMap.channel),displacementMapUv:Se&&g(v.displacementMap.channel),emissiveMapUv:Ce&&g(v.emissiveMap.channel),metalnessMapUv:de&&g(v.metalnessMap.channel),roughnessMapUv:me&&g(v.roughnessMap.channel),anisotropyMapUv:J&&g(v.anisotropyMap.channel),clearcoatMapUv:ct&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(v.sheenRoughnessMap.channel),specularMapUv:pt&&g(v.specularMap.channel),specularColorMapUv:wt&&g(v.specularColorMap.channel),specularIntensityMapUv:Lt&&g(v.specularIntensityMap.channel),transmissionMapUv:Ht&&g(v.transmissionMap.channel),thicknessMapUv:L&&g(v.thicknessMap.channel),alphaMapUv:tt&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(se||U),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Vt||tt),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&se===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:yt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:It,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Z,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:Ce&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Je,flipSided:v.side===Qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:P&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(P&&v.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return X.vertexUv1s=l.has(1),X.vertexUv2s=l.has(2),X.vertexUv3s=l.has(3),l.clear(),X}function m(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)C.push(D),C.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(f(C,v),T(C,v),C.push(i.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function f(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function T(v,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function w(v){const C=h[v.type];let D;if(C){const F=_n[C];D=Fd.clone(F.uniforms)}else D=v.uniforms;return D}function S(v,C){let D=u.get(C);return D!==void 0?++D.usedTimes:(D=new hm(i,C,v,s),c.push(D),u.set(C,D)),D}function E(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function y(v){a.remove(v)}function R(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:w,acquireProgram:S,releaseProgram:E,releaseShaderCache:y,programs:c,dispose:R}}function vm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,M,m,f){let T=i[t];return T===void 0?(T={id:d.id,object:d,geometry:h,material:g,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:f},i[t]=T):(T.id=d.id,T.object=d,T.geometry=h,T.material=g,T.materialVariant=o(d),T.groupOrder=M,T.renderOrder=d.renderOrder,T.z=m,T.group=f),t++,T}function l(d,h,g,M,m,f,T){T.reversedDepth===!0&&(m=-m);const w=a(d,h,g,M,m,f);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(d,h,g,M,m,f){const T=a(d,h,g,M,m,f);g.transmission>0?n.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function u(d,h){e.length>1&&e.sort(d||Sm),n.length>1&&n.sort(h||xl),s.length>1&&s.sort(h||xl)}function p(){for(let d=t,h=i.length;d<h;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function Mm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new vl,i.set(n,[o])):s>=r.length?(o=new vl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Jt};break;case"SpotLight":e={position:new I,direction:new I,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function bm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Em=0;function Tm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cm(i){const t=new ym,e=bm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new xe,o=new xe;function a(c){let u=0,p=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let h=0,g=0,M=0,m=0,f=0,T=0,w=0,S=0,E=0,y=0,R=0,v=0,C=0,D=0;c.sort(Tm);for(let z=0,W=c.length;z<W;z++){const N=c[z],k=N.color,q=N.intensity,K=N.distance;let at=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===oi?at=N.shadow.map.texture:at=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*q,p+=k.g*q,d+=k.b*q;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],q);D++}else if(N.isSunLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const it=N.shadow,ot=e.get(N);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[g]=ot,n.sunShadowMap[g]=at;const Tt=it.getViewportCount();for(let It=0;It<Tt;It++)n.sunShadowMatrix[M+It]=it.getMatrix(It),n.sunShadowCascade[M+It]=it._cascadeData[It];M+=Tt,g++}n.sun[h]=$,h++}else if(N.isDirectionalLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const it=N.shadow,ot=e.get(N);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,n.directionalShadow[m]=ot,n.directionalShadowMap[m]=at,n.directionalShadowMatrix[m]=N.shadow.matrix,E++}n.directional[m]=$,m++}else if(N.isSpotLight){const $=t.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(k).multiplyScalar(q),$.distance=K,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[T]=$;const it=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,it.updateMatrices(N),N.castShadow&&C++),n.spotLightMatrix[T]=it.matrix,N.castShadow){const ot=e.get(N);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,n.spotShadow[T]=ot,n.spotShadowMap[T]=at,R++}T++}else if(N.isRectAreaLight){const $=t.get(N);$.color.copy(k).multiplyScalar(q),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=$,w++}else if(N.isPointLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const it=N.shadow,ot=e.get(N);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,ot.shadowCameraNear=it.camera.near,ot.shadowCameraFar=it.camera.far,n.pointShadow[f]=ot,n.pointShadowMap[f]=at,n.pointShadowMatrix[f]=N.shadow.matrix,y++}n.point[f]=$,f++}else if(N.isHemisphereLight){const $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(q),$.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[S]=$,S++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;const F=n.hash;(F.sunLength!==h||F.directionalLength!==m||F.pointLength!==f||F.spotLength!==T||F.rectAreaLength!==w||F.hemiLength!==S||F.numSunShadows!==g||F.numDirectionalShadows!==E||F.numPointShadows!==y||F.numSpotShadows!==R||F.numSpotMaps!==v||F.numLightProbes!==D)&&(n.sun.length=h,n.directional.length=m,n.spot.length=T,n.rectArea.length=w,n.point.length=f,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-C,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,F.sunLength=h,F.directionalLength=m,F.pointLength=f,F.spotLength=T,F.rectAreaLength=w,F.hemiLength=S,F.numSunShadows=g,F.numDirectionalShadows=E,F.numPointShadows=y,F.numSpotShadows=R,F.numSpotMaps=v,F.numLightProbes=D,n.version=Em++)}function l(c,u){let p=0,d=0,h=0,g=0,M=0,m=0;const f=u.matrixWorldInverse;for(let T=0,w=c.length;T<w;T++){const S=c[T];if(S.isSunLight){const E=n.sun[p];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),p++}else if(S.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),d++}else if(S.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const E=n.rectArea[M];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(S.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),h++}else if(S.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:n}}function Sl(i){const t=new Cm(i),e=[],n=[],s=[];function r(d){p.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}const p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Am(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Sl(i),t.set(s,[a])):r>=o.length?(a=new Sl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Im=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Pm=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Ml=new xe,ki=new I,Hr=new I;function Om(i,t,e){let n=new tc;const s=new Mt,r=new Mt,o=new Me,a=new Gd,l=new kd,c={},u=e.maxTextureSize,p={[si]:Qe,[Qe]:si,[Je]:Je},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:wm,fragmentShader:Rm}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ye(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let f=this.type;this.render=function(y,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Lc&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);const C=i.getRenderTarget(),D=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Un),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=f!==this.type;W&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=y.length;N<k;N++){const q=y[N],K=q.shadow;if(K===void 0){Ft("WebGLShadowMap:",q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const at=K.getFrameExtents();s.multiply(at),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,K.mapSize.y=r.y));const $=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=$,K.map===null||W===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Vi){if(q.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new fn(s.x,s.y,{format:oi,type:yn,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),K.map.texture.name=q.name+".shadowMap",K.map.depthTexture=new ns(s.x,s.y,xn),K.map.depthTexture.name=q.name+".shadowMapDepth",K.map.depthTexture.format=Nn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ne,K.map.depthTexture.magFilter=Ne}else q.isPointLight?(K.map=new xc(s.x),K.map.depthTexture=new id(s.x,Mn)):(K.map=new fn(s.x,s.y),K.map.depthTexture=new ns(s.x,s.y,Mn)),K.map.depthTexture.name=q.name+".shadowMap",K.map.depthTexture.format=Nn,this.type===ks?(K.map.depthTexture.compareFunction=$?Wo:Vo,K.map.depthTexture.minFilter=Ge,K.map.depthTexture.magFilter=Ge):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ne,K.map.depthTexture.magFilter=Ne);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);const it=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();q.isPointLight!==!0&&K.updateMatrices(q,v);for(let ot=0;ot<it;ot++){const Tt=K.getCamera(ot);if(q.isPointLight){const It=K.camera,oe=K.matrix,Bt=q.distance||It.far;Bt!==It.far&&(It.far=Bt,It.updateProjectionMatrix()),ki.setFromMatrixPosition(q.matrixWorld),It.position.copy(ki),Hr.copy(It.position),Hr.add(Im[ot]),It.up.copy(Pm[ot]),It.lookAt(Hr),It.updateMatrixWorld(),oe.makeTranslation(-ki.x,-ki.y,-ki.z),Ml.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Ml,It.coordinateSystem,It.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(K.map),i.clear());const It=K.getViewport(ot);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),z.viewport(o)}n=K.getFrustum(ot),S(R,v,Tt,q,this.type)}K.isPointLightShadow!==!0&&this.type===Vi&&T(K,v),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(C,D,F)};function T(y,R){const v=t.update(M);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,h.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),y.mapPass===null?y.mapPass=new fn(s.x,s.y,{format:oi,type:yn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(R,null,v,d,M,null),h.uniforms.shadow_pass.value=y.mapPass.texture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(R,null,v,h,M,null)}function w(y,R,v,C){let D=null;const F=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(F!==void 0)D=F;else if(D=v.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=D.uuid,W=R.uuid;let N=c[z];N===void 0&&(N={},c[z]=N);let k=N[W];k===void 0&&(k=D.clone(),N[W]=k,R.addEventListener("dispose",E)),D=k}if(D.visible=R.visible,D.wireframe=R.wireframe,C===Vi?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:p[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const z=i.properties.get(D);z.light=v}return D}function S(y,R,v,C,D){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&D===Vi)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld);const W=t.update(y),N=y.material;if(Array.isArray(N)){const k=W.groups;for(let q=0,K=k.length;q<K;q++){const at=k[q],$=N[at.materialIndex];if($&&$.visible){const it=w(y,$,C,D);y.onBeforeShadow(i,y,R,v,W,it,at),i.renderBufferDirect(v,null,W,it,y,at),y.onAfterShadow(i,y,R,v,W,it,at)}}}else if(N.visible){const k=w(y,N,C,D);y.onBeforeShadow(i,y,R,v,W,k,null),i.renderBufferDirect(v,null,W,k,y,null),y.onAfterShadow(i,y,R,v,W,k,null)}}const z=y.children;for(let W=0,N=z.length;W<N;W++)S(z[W],R,v,C,D)}function E(y){y.target.removeEventListener("dispose",E);for(const v in c){const C=c[v],D=y.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}function Lm(i,t){function e(){let L=!1;const ft=new Me;let tt=null;const ht=new Me(0,0,0,0);return{setMask:function(A){tt!==A&&!L&&(i.colorMask(A,A,A,A),tt=A)},setLocked:function(A){L=A},setClear:function(A,P,Z,X,st){st===!0&&(A*=X,P*=X,Z*=X),ft.set(A,P,Z,X),ht.equals(ft)===!1&&(i.clearColor(A,P,Z,X),ht.copy(ft))},reset:function(){L=!1,tt=null,ht.set(-1,0,0,0)}}}function n(){let L=!1,ft=!1,tt=null,ht=null,A=null;return{setReversed:function(P){if(ft!==P){const Z=t.get("EXT_clip_control");P?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT),ft=P;const X=A;A=null,this.setClear(X)}},getReversed:function(){return ft},setTest:function(P){P?et(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(P){tt!==P&&!L&&(i.depthMask(P),tt=P)},setFunc:function(P){if(ft&&(P=pu[P]),ht!==P){switch(P){case Wr:i.depthFunc(i.NEVER);break;case Xr:i.depthFunc(i.ALWAYS);break;case Yr:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case qr:i.depthFunc(i.EQUAL);break;case Zr:i.depthFunc(i.GEQUAL);break;case Kr:i.depthFunc(i.GREATER);break;case Jr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=P}},setLocked:function(P){L=P},setClear:function(P){A!==P&&(A=P,ft&&(P=1-P),i.clearDepth(P))},reset:function(){L=!1,tt=null,ht=null,A=null,ft=!1}}}function s(){let L=!1,ft=null,tt=null,ht=null,A=null,P=null,Z=null,X=null,st=null;return{setTest:function(rt){L||(rt?et(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(rt){ft!==rt&&!L&&(i.stencilMask(rt),ft=rt)},setFunc:function(rt,lt,Nt){(tt!==rt||ht!==lt||A!==Nt)&&(i.stencilFunc(rt,lt,Nt),tt=rt,ht=lt,A=Nt)},setOp:function(rt,lt,Nt){(P!==rt||Z!==lt||X!==Nt)&&(i.stencilOp(rt,lt,Nt),P=rt,Z=lt,X=Nt)},setLocked:function(rt){L=rt},setClear:function(rt){st!==rt&&(i.clearStencil(rt),st=rt)},reset:function(){L=!1,ft=null,tt=null,ht=null,A=null,P=null,Z=null,X=null,st=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},p={},d={},h=new WeakMap,g=[],M=null,m=!1,f=null,T=null,w=null,S=null,E=null,y=null,R=null,v=new Jt(0,0,0),C=0,D=!1,F=null,z=null,W=null,N=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,at=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec($)[1]),K=at>=1):$.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=at>=2);let it=null,ot={};const Tt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),oe=new Me().fromArray(Tt),Bt=new Me().fromArray(It);function ee(L,ft,tt,ht){const A=new Uint8Array(4),P=i.createTexture();i.bindTexture(L,P),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Z=0;Z<tt;Z++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,A):i.texImage2D(ft+Z,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,A);return P}const Q={};Q[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Qi),$t(!1),se(la),et(i.CULL_FACE),Xt(Un);function et(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function yt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Dt(L,ft){return d[L]!==ft?(i.bindFramebuffer(L,ft),d[L]=ft,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ft),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function St(L,ft){let tt=g,ht=!1;if(L){tt=h.get(ft),tt===void 0&&(tt=[],h.set(ft,tt));const A=L.textures;if(tt.length!==A.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let P=0,Z=A.length;P<Z;P++)tt[P]=i.COLOR_ATTACHMENT0+P;tt.length=A.length,ht=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,ht=!0);ht&&i.drawBuffers(tt)}function Vt(L){return M!==L?(i.useProgram(L),M=L,!0):!1}const _e={[Ti]:i.FUNC_ADD,[Dc]:i.FUNC_SUBTRACT,[Nc]:i.FUNC_REVERSE_SUBTRACT};_e[Fc]=i.MIN,_e[Bc]=i.MAX;const Wt={[zc]:i.ZERO,[Hc]:i.ONE,[Gc]:i.SRC_COLOR,[Pl]:i.SRC_ALPHA,[qc]:i.SRC_ALPHA_SATURATE,[Xc]:i.DST_COLOR,[Vc]:i.DST_ALPHA,[kc]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[Yc]:i.ONE_MINUS_DST_COLOR,[Wc]:i.ONE_MINUS_DST_ALPHA,[Zc]:i.CONSTANT_COLOR,[Kc]:i.ONE_MINUS_CONSTANT_COLOR,[Jc]:i.CONSTANT_ALPHA,[$c]:i.ONE_MINUS_CONSTANT_ALPHA};function Xt(L,ft,tt,ht,A,P,Z,X,st,rt){if(L===Un){m===!0&&(yt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),L!==Uc){if(L!==f||rt!==D){if((T!==Ti||E!==Ti)&&(i.blendEquation(i.FUNC_ADD),T=Ti,E=Ti),rt)switch(L){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFunc(i.ONE,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case da:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ie("WebGLState: Invalid blending: ",L);break}else switch(L){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ua:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case da:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",L);break}w=null,S=null,y=null,R=null,v.set(0,0,0),C=0,f=L,D=rt}return}A=A||ft,P=P||tt,Z=Z||ht,(ft!==T||A!==E)&&(i.blendEquationSeparate(_e[ft],_e[A]),T=ft,E=A),(tt!==w||ht!==S||P!==y||Z!==R)&&(i.blendFuncSeparate(Wt[tt],Wt[ht],Wt[P],Wt[Z]),w=tt,S=ht,y=P,R=Z),(X.equals(v)===!1||st!==C)&&(i.blendColor(X.r,X.g,X.b,st),v.copy(X),C=st),f=L,D=!1}function Yt(L,ft){L.side===Je?yt(i.CULL_FACE):et(i.CULL_FACE);let tt=L.side===Qe;ft&&(tt=!tt),$t(tt),L.blending===Yi&&L.transparent===!1?Xt(Un):Xt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const ht=L.stencilWrite;a.setTest(ht),ht&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(L){F!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),F=L)}function se(L){L!==Pc?(et(i.CULL_FACE),L!==z&&(L===la?i.cullFace(i.BACK):L===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),z=L}function Se(L){L!==W&&(K&&i.lineWidth(L),W=L)}function Ce(L,ft,tt){L?(et(i.POLYGON_OFFSET_FILL),(N!==ft||k!==tt)&&(N=ft,k=tt,o.getReversed()&&(ft=-ft),i.polygonOffset(ft,tt))):yt(i.POLYGON_OFFSET_FILL)}function de(L){L?et(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function me(L){L===void 0&&(L=i.TEXTURE0+q-1),it!==L&&(i.activeTexture(L),it=L)}function U(L,ft,tt){tt===void 0&&(it===null?tt=i.TEXTURE0+q-1:tt=it);let ht=ot[tt];ht===void 0&&(ht={type:void 0,texture:void 0},ot[tt]=ht),(ht.type!==L||ht.texture!==ft)&&(it!==tt&&(i.activeTexture(tt),it=tt),i.bindTexture(L,ft||Q[L]),ht.type=L,ht.texture=ft)}function Pe(){const L=ot[it];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function _(){try{i.texSubImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function B(){try{i.texSubImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function ct(){try{i.texStorage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function ut(){try{i.texStorage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function j(){try{i.texImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function nt(){try{i.texImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function dt(L){return p[L]!==void 0?p[L]:i.getParameter(L)}function Pt(L,ft){p[L]!==ft&&(i.pixelStorei(L,ft),p[L]=ft)}function gt(L){oe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function pt(L){Bt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Bt.copy(L))}function wt(L,ft){let tt=c.get(ft);tt===void 0&&(tt=new WeakMap,c.set(ft,tt));let ht=tt.get(L);ht===void 0&&(ht=i.getUniformBlockIndex(ft,L.name),tt.set(L,ht))}function Lt(L,ft){const ht=c.get(ft).get(L);l.get(ft)!==ht&&(i.uniformBlockBinding(ft,ht,L.__bindingPointIndex),l.set(ft,ht))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},it=null,ot={},d={},h=new WeakMap,g=[],M=null,m=!1,f=null,T=null,w=null,S=null,E=null,y=null,R=null,v=new Jt(0,0,0),C=0,D=!1,F=null,z=null,W=null,N=null,k=null,oe.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:yt,bindFramebuffer:Dt,drawBuffers:St,useProgram:Vt,setBlending:Xt,setMaterial:Yt,setFlipSided:$t,setCullFace:se,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:de,activeTexture:me,bindTexture:U,unbindTexture:Pe,compressedTexImage2D:jt,compressedTexImage3D:b,texImage2D:j,texImage3D:nt,pixelStorei:Pt,getParameter:dt,updateUBOMapping:wt,uniformBlockBinding:Lt,texStorage2D:ct,texStorage3D:ut,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:J,scissor:gt,viewport:pt,reset:Ht}}function Um(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap,p=new Set;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,_){return g?new OffscreenCanvas(b,_):tr("canvas")}function m(b,_,B){let V=1;const J=jt(b);if((J.width>B||J.height>B)&&(V=B/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ct=Math.floor(V*J.width),ut=Math.floor(V*J.height);d===void 0&&(d=M(ct,ut));const j=_?M(ct,ut):d;return j.width=ct,j.height=ut,j.getContext("2d").drawImage(b,0,0,ct,ut),Ft("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ct+"x"+ut+")."),j}else return"data"in b&&Ft("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function f(b){return b.generateMipmaps}function T(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(b,_,B,V,J,ct=!1){if(b!==null){if(i[b]!==void 0)return i[b];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ut;V&&(ut=t.get("EXT_texture_norm16"),ut||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8),B===i.UNSIGNED_SHORT&&ut&&(j=ut.R16_EXT),B===i.SHORT&&ut&&(j=ut.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),_===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8),B===i.UNSIGNED_SHORT&&ut&&(j=ut.RG16_EXT),B===i.SHORT&&ut&&(j=ut.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&ut&&(j=ut.RGB16_EXT),B===i.SHORT&&ut&&(j=ut.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),_===i.RGBA){const nt=ct?Qs:te.getTransfer(J);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=nt===le?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ut&&(j=ut.RGBA16_EXT),B===i.SHORT&&ut&&(j=ut.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function E(b,_){let B;return b?_===null||_===Mn||_===ts?B=i.DEPTH24_STENCIL8:_===xn?B=i.DEPTH32F_STENCIL8:_===ji&&(B=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Mn||_===ts?B=i.DEPTH_COMPONENT24:_===xn?B=i.DEPTH_COMPONENT32F:_===ji&&(B=i.DEPTH_COMPONENT16),B}function y(b,_){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ne&&b.minFilter!==Ge?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){const _=b.target;_.removeEventListener("dispose",R),C(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&p.delete(_)}function v(b){const _=b.target;_.removeEventListener("dispose",v),F(_)}function C(b){const _=n.get(b);if(_.__webglInit===void 0)return;const B=b.source,V=h.get(B);if(V){const J=V[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(b),Object.keys(V).length===0&&h.delete(B)}n.remove(b)}function D(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const B=b.source,V=h.get(B);delete V[_.__cacheKey],o.memory.textures--}function F(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let J=0;J<_.__webglFramebuffer[V].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[V][J]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=b.textures;for(let V=0,J=B.length;V<J;V++){const ct=n.get(B[V]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(B[V])}n.remove(b)}let z=0;function W(){z=0}function N(){return z}function k(b){z=b}function q(){const b=z;return b>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,b}function K(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function at(b,_){const B=n.get(b);if(b.isVideoTexture&&U(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const V=b.image;if(V===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(B,b,_);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function $(b,_){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){yt(B,b,_);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function it(b,_){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){yt(B,b,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function ot(b,_){const B=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&B.__version!==b.version){Dt(B,b,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const Tt={[$r]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Qr]:i.MIRRORED_REPEAT},It={[Ne]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[cr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},oe={[su]:i.NEVER,[cu]:i.ALWAYS,[ru]:i.LESS,[Vo]:i.LEQUAL,[ou]:i.EQUAL,[Wo]:i.GEQUAL,[au]:i.GREATER,[lu]:i.NOTEQUAL};function Bt(b,_){if(_.type===xn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ge||_.magFilter===cr||_.magFilter===ds||_.magFilter===ni||_.minFilter===Ge||_.minFilter===cr||_.minFilter===ds||_.minFilter===ni)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Tt[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Tt[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Tt[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,It[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,It[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,oe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ne||_.minFilter!==ds&&_.minFilter!==ni||_.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ee(b,_){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",R));const V=_.source;let J=h.get(V);J===void 0&&(J={},h.set(V,J));const ct=K(_);if(ct!==b.__cacheKey){J[ct]===void 0&&(J[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[ct].usedTimes++;const ut=J[b.__cacheKey];ut!==void 0&&(J[b.__cacheKey].usedTimes--,ut.usedTimes===0&&D(_)),b.__cacheKey=ct,b.__webglTexture=J[ct].texture}return B}function Q(b,_,B){return Math.floor(Math.floor(b/B)/_)}function et(b,_,B,V){const ct=b.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,V,_.data);else{ct.sort((Pt,gt)=>Pt.start-gt.start);let ut=0;for(let Pt=1;Pt<ct.length;Pt++){const gt=ct[ut],pt=ct[Pt],wt=gt.start+gt.count,Lt=Q(pt.start,_.width,4),Ht=Q(gt.start,_.width,4);pt.start<=wt+1&&Lt===Ht&&Q(pt.start+pt.count-1,_.width,4)===Lt?gt.count=Math.max(gt.count,pt.start+pt.count-gt.start):(++ut,ct[ut]=pt)}ct.length=ut+1;const j=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Pt=0,gt=ct.length;Pt<gt;Pt++){const pt=ct[Pt],wt=Math.floor(pt.start/4),Lt=Math.ceil(pt.count/4),Ht=wt%_.width,L=Math.floor(wt/_.width),ft=Lt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,Ht,L,ft,tt,B,V,_.data)}b.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function yt(b,_,B){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);const J=ee(b,_),ct=_.source;e.bindTexture(V,b.__webglTexture,i.TEXTURE0+B);const ut=n.get(ct);if(ct.version!==ut.__version||J===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const tt=te.getPrimaries(te.workingColorSpace),ht=_.colorSpace===Yn?null:te.getPrimaries(_.colorSpace),A=_.colorSpace===Yn||tt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,A)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let nt=m(_.image,!1,s.maxTextureSize);nt=Pe(_,nt);const dt=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type);let gt=S(_.internalFormat,dt,Pt,_.normalized,_.colorSpace,_.isVideoTexture);Bt(V,_);let pt;const wt=_.mipmaps,Lt=_.isVideoTexture!==!0,Ht=ut.__version===void 0||J===!0,L=ct.dataReady,ft=y(_,nt);if(_.isDepthTexture)gt=E(_.format===ii,_.type),Ht&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,gt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,gt,nt.width,nt.height,0,dt,Pt,null));else if(_.isDataTexture)if(wt.length>0){Lt&&Ht&&e.texStorage2D(i.TEXTURE_2D,ft,gt,wt[0].width,wt[0].height);for(let tt=0,ht=wt.length;tt<ht;tt++)pt=wt[tt],Lt?L&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,pt.width,pt.height,dt,Pt,pt.data):e.texImage2D(i.TEXTURE_2D,tt,gt,pt.width,pt.height,0,dt,Pt,pt.data);_.generateMipmaps=!1}else Lt?(Ht&&e.texStorage2D(i.TEXTURE_2D,ft,gt,nt.width,nt.height),L&&et(_,nt,dt,Pt)):e.texImage2D(i.TEXTURE_2D,0,gt,nt.width,nt.height,0,dt,Pt,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Lt&&Ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,gt,wt[0].width,wt[0].height,nt.depth);for(let tt=0,ht=wt.length;tt<ht;tt++)if(pt=wt[tt],_.format!==dn)if(dt!==null)if(Lt){if(L)if(_.layerUpdates.size>0){const A=ja(pt.width,pt.height,_.format,_.type);for(const P of _.layerUpdates){const Z=pt.data.subarray(P*A/pt.data.BYTES_PER_ELEMENT,(P+1)*A/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,P,pt.width,pt.height,1,dt,Z)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,nt.depth,dt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,gt,pt.width,pt.height,nt.depth,0,pt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,nt.depth,dt,Pt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,gt,pt.width,pt.height,nt.depth,0,dt,Pt,pt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Lt&&Ht&&e.texStorage2D(i.TEXTURE_2D,ft,gt,wt[0].width,wt[0].height);for(let tt=0,ht=wt.length;tt<ht;tt++)pt=wt[tt],_.format!==dn?dt!==null?Lt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,gt,pt.width,pt.height,0,pt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?L&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,pt.width,pt.height,dt,Pt,pt.data):e.texImage2D(i.TEXTURE_2D,tt,gt,pt.width,pt.height,0,dt,Pt,pt.data)}else if(_.isDataArrayTexture)if(Lt){if(Ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,gt,nt.width,nt.height,nt.depth),L)if(_.layerUpdates.size>0){const tt=ja(nt.width,nt.height,_.format,_.type);for(const ht of _.layerUpdates){const A=nt.data.subarray(ht*tt/nt.data.BYTES_PER_ELEMENT,(ht+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,nt.width,nt.height,1,dt,Pt,A)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,dt,Pt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,nt.width,nt.height,nt.depth,0,dt,Pt,nt.data);else if(_.isData3DTexture)Lt?(Ht&&e.texStorage3D(i.TEXTURE_3D,ft,gt,nt.width,nt.height,nt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,dt,Pt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,gt,nt.width,nt.height,nt.depth,0,dt,Pt,nt.data);else if(_.isFramebufferTexture){if(Ht)if(Lt)e.texStorage2D(i.TEXTURE_2D,ft,gt,nt.width,nt.height);else{let tt=nt.width,ht=nt.height;for(let A=0;A<ft;A++)e.texImage2D(i.TEXTURE_2D,A,gt,tt,ht,0,dt,Pt,null),tt>>=1,ht>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),p.add(_),tt.onpaint=ht=>{const A=ht.changedElements;for(const P of p)A.includes(P.image)&&(P.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{const A=i.RGBA,P=i.RGBA,Z=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,A,P,Z,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(Lt&&Ht){const tt=jt(wt[0]);e.texStorage2D(i.TEXTURE_2D,ft,gt,tt.width,tt.height)}for(let tt=0,ht=wt.length;tt<ht;tt++)pt=wt[tt],Lt?L&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt,Pt,pt):e.texImage2D(i.TEXTURE_2D,tt,gt,dt,Pt,pt);_.generateMipmaps=!1}else if(Lt){if(Ht){const tt=jt(nt);e.texStorage2D(i.TEXTURE_2D,ft,gt,tt.width,tt.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Pt,nt)}else e.texImage2D(i.TEXTURE_2D,0,gt,dt,Pt,nt);f(_)&&T(V),ut.__version=ct.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Dt(b,_,B){if(_.image.length!==6)return;const V=ee(b,_),J=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const ct=n.get(J);if(J.version!==ct.__version||V===!0){e.activeTexture(i.TEXTURE0+B);const ut=te.getPrimaries(te.workingColorSpace),j=_.colorSpace===Yn?null:te.getPrimaries(_.colorSpace),nt=_.colorSpace===Yn||ut===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const dt=_.isCompressedTexture||_.image[0].isCompressedTexture,Pt=_.image[0]&&_.image[0].isDataTexture,gt=[];for(let P=0;P<6;P++)!dt&&!Pt?gt[P]=m(_.image[P],!0,s.maxCubemapSize):gt[P]=Pt?_.image[P].image:_.image[P],gt[P]=Pe(_,gt[P]);const pt=gt[0],wt=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type),Ht=S(_.internalFormat,wt,Lt,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ft=ct.__version===void 0||V===!0,tt=J.dataReady;let ht=y(_,pt);Bt(i.TEXTURE_CUBE_MAP,_);let A;if(dt){L&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ht,pt.width,pt.height);for(let P=0;P<6;P++){A=gt[P].mipmaps;for(let Z=0;Z<A.length;Z++){const X=A[Z];_.format!==dn?wt!==null?L?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,Z,0,0,X.width,X.height,wt,X.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,Z,Ht,X.width,X.height,0,X.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,Z,0,0,X.width,X.height,wt,Lt,X.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,Z,Ht,X.width,X.height,0,wt,Lt,X.data)}}}else{if(A=_.mipmaps,L&&ft){A.length>0&&ht++;const P=jt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ht,P.width,P.height)}for(let P=0;P<6;P++)if(Pt){L?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,gt[P].width,gt[P].height,wt,Lt,gt[P].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Ht,gt[P].width,gt[P].height,0,wt,Lt,gt[P].data);for(let Z=0;Z<A.length;Z++){const st=A[Z].image[P].image;L?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,Z+1,0,0,st.width,st.height,wt,Lt,st.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,Z+1,Ht,st.width,st.height,0,wt,Lt,st.data)}}else{L?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,wt,Lt,gt[P]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Ht,wt,Lt,gt[P]);for(let Z=0;Z<A.length;Z++){const X=A[Z];L?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,Z+1,0,0,wt,Lt,X.image[P]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,Z+1,Ht,wt,Lt,X.image[P])}}}f(_)&&T(i.TEXTURE_CUBE_MAP),ct.__version=J.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function St(b,_,B,V,J,ct){const ut=r.convert(B.format,B.colorSpace),j=r.convert(B.type),nt=S(B.internalFormat,ut,j,B.normalized,B.colorSpace),dt=n.get(_),Pt=n.get(B);if(Pt.__renderTarget=_,!dt.__hasExternalTextures){const gt=Math.max(1,_.width>>ct),pt=Math.max(1,_.height>>ct);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ct,nt,gt,pt,_.depth,0,ut,j,null):e.texImage2D(J,ct,nt,gt,pt,0,ut,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),me(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,J,Pt.__webglTexture,0,de(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,J,Pt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(b,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const V=_.depthTexture,J=V&&V.isDepthTexture?V.type:null,ct=E(_.stencilBuffer,J),ut=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(_),ct,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(_),ct,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ct,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,b)}else{const V=_.textures;for(let J=0;J<V.length;J++){const ct=V[J],ut=r.convert(ct.format,ct.colorSpace),j=r.convert(ct.type),nt=S(ct.internalFormat,ut,j,ct.normalized,ct.colorSpace);me(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(_),nt,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(_),nt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,nt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(b,_,B){const V=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,_.depthTexture);const dt=r.convert(_.depthTexture.format),Pt=r.convert(_.depthTexture.type);let gt;_.depthTexture.format===Nn?gt=i.DEPTH_COMPONENT24:_.depthTexture.format===ii&&(gt=i.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,gt,_.width,_.height,0,dt,Pt,null)}}else at(_.depthTexture,0);const ct=J.__webglTexture,ut=de(_),j=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,nt=_.depthTexture.format===ii?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Nn)me(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,j,ct,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,nt,j,ct,0);else if(_.depthTexture.format===ii)me(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,j,ct,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,nt,j,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(b){const _=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const V=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=V}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)_e(_.__webglFramebuffer[V],b,V);else{const V=b.texture.mipmaps;V&&V.length>0?_e(_.__webglFramebuffer[0],b,0):_e(_.__webglFramebuffer,b,0)}else if(B){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Vt(_.__webglDepthbuffer[V],b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ct)}}else{const V=b.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Vt(_.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(b,_,B){const V=n.get(b);_!==void 0&&St(V.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Wt(b)}function Yt(b){const _=b.texture,B=n.get(b),V=n.get(_);b.addEventListener("dispose",v);const J=b.textures,ct=b.isWebGLCubeRenderTarget===!0,ut=J.length>1;if(ut||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,o.memory.textures++),ct){B.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[j]=[];for(let nt=0;nt<_.mipmaps.length;nt++)B.__webglFramebuffer[j][nt]=i.createFramebuffer()}else B.__webglFramebuffer[j]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)B.__webglFramebuffer[j]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ut)for(let j=0,nt=J.length;j<nt;j++){const dt=n.get(J[j]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&me(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){const nt=J[j];B.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[j]);const dt=r.convert(nt.format,nt.colorSpace),Pt=r.convert(nt.type),gt=S(nt.internalFormat,dt,Pt,nt.normalized,nt.colorSpace,b.isXRRenderTarget===!0),pt=de(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,gt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,B.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let nt=0;nt<_.mipmaps.length;nt++)St(B.__webglFramebuffer[j][nt],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt);else St(B.__webglFramebuffer[j],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(_)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let j=0,nt=J.length;j<nt;j++){const dt=J[j],Pt=n.get(dt);let gt=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(gt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Pt.__webglTexture),Bt(gt,dt),St(B.__webglFramebuffer,b,dt,i.COLOR_ATTACHMENT0+j,gt,0),f(dt)&&T(gt)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,V.__webglTexture),Bt(j,_),_.mipmaps&&_.mipmaps.length>0)for(let nt=0;nt<_.mipmaps.length;nt++)St(B.__webglFramebuffer[nt],b,_,i.COLOR_ATTACHMENT0,j,nt);else St(B.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,j,0);f(_)&&T(j),e.unbindTexture()}b.depthBuffer&&Wt(b)}function $t(b){const _=b.textures;for(let B=0,V=_.length;B<V;B++){const J=_[B];if(f(J)){const ct=w(b),ut=n.get(J).__webglTexture;e.bindTexture(ct,ut),T(ct),e.unbindTexture()}}}const se=[],Se=[];function Ce(b){if(b.samples>0){if(me(b)===!1){const _=b.textures,B=b.width,V=b.height;let J=i.COLOR_BUFFER_BIT;const ct=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(b),j=_.length>1;if(j)for(let dt=0;dt<_.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);const nt=b.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let dt=0;dt<_.length;dt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);const Pt=n.get(_[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,B,V,0,0,B,V,J,i.NEAREST),l===!0&&(se.length=0,Se.length=0,se.push(i.COLOR_ATTACHMENT0+dt),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(se.push(ct),Se.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let dt=0;dt<_.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);const Pt=n.get(_[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function de(b){return Math.min(s.maxSamples,b.samples)}function me(b){const _=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function Pe(b,_){const B=b.colorSpace,V=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==$s&&B!==Yn&&(te.getTransfer(B)===le?(V!==dn||J!==rn)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",B)),_}function jt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=W,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=at,this.setTexture2DArray=$,this.setTexture3D=it,this.setTextureCube=ot,this.rebindTextures=Xt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Dm(i,t){function e(n,s=Yn){let r;const o=te.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===Bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kl)return i.BYTE;if(n===Vl)return i.SHORT;if(n===ji)return i.UNSIGNED_SHORT;if(n===Fo)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===ql)return i.RGB;if(n===dn)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===ii)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===Ho)return i.RED_INTEGER;if(n===oi)return i.RG;if(n===Go)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===Vs||n===Ws||n===Xs||n===Ys)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===io||n===so||n===ro||n===oo||n===ao||n===Ks||n===lo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===io||n===so)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ro)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oo)return r.COMPRESSED_R11_EAC;if(n===ao)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ks)return r.COMPRESSED_RG11_EAC;if(n===lo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===co||n===uo||n===fo||n===ho||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===So||n===Mo||n===yo||n===bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===go)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===So)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===To||n===Co)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Eo)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ao||n===wo||n===Js||n===Ro)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new sc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:Nm,fragmentShader:Fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ye(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zm extends Zn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,d=null,h=null,g=null;const M=typeof XRWebGLBinding<"u",m=new Bm,f={},T=e.getContextAttributes();let w=null,S=null;const E=[],y=[],R=new Mt;let v=null,C=null;const D=new cn;D.viewport=new Me;const F=new cn;F.viewport=new Me;const z=[D,F],W=new Wd;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let et=E[Q];return et===void 0&&(et=new gr,E[Q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Q){let et=E[Q];return et===void 0&&(et=new gr,E[Q]=et),et.getGripSpace()},this.getHand=function(Q){let et=E[Q];return et===void 0&&(et=new gr,E[Q]=et),et.getHandSpace()};function q(Q){const et=y.indexOf(Q.inputSource);if(et===-1)return;const yt=E[et];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,c||o),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",at);for(let Q=0;Q<E.length;Q++){const et=y[Q];et!==null&&(y[Q]=null,E[Q].disconnect(et))}N=null,k=null,m.reset();for(const Q in f)delete f[Q];if(t.setRenderTarget(w),h=null,d=null,p=null,s=null,S=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),C!==null){const Q=C.camera;Q.fov=C.fov,Q.zoom=C.zoom,Q.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",K),s.addEventListener("inputsourceschange",at),T.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Dt=null,St=null;T.depth&&(St=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=T.stencil?ii:Nn,Dt=T.stencil?ts:Mn);const Vt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new fn(d.textureWidth,d.textureHeight,{format:dn,type:rn,depthTexture:new ns(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new fn(h.framebufferWidth,h.framebufferHeight,{format:dn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(Q){for(let et=0;et<Q.removed.length;et++){const yt=Q.removed[et],Dt=y.indexOf(yt);Dt>=0&&(y[Dt]=null,E[Dt].disconnect(yt))}for(let et=0;et<Q.added.length;et++){const yt=Q.added[et];let Dt=y.indexOf(yt);if(Dt===-1){for(let Vt=0;Vt<E.length;Vt++)if(Vt>=y.length){y.push(yt),Dt=Vt;break}else if(y[Vt]===null){y[Vt]=yt,Dt=Vt;break}if(Dt===-1)break}const St=E[Dt];St&&St.connect(yt)}}const $=new I,it=new I;function ot(Q,et,yt){$.setFromMatrixPosition(et.matrixWorld),it.setFromMatrixPosition(yt.matrixWorld);const Dt=$.distanceTo(it),St=et.projectionMatrix.elements,Vt=yt.projectionMatrix.elements,_e=St[14]/(St[10]-1),Wt=St[14]/(St[10]+1),Xt=(St[9]+1)/St[5],Yt=(St[9]-1)/St[5],$t=(St[8]-1)/St[0],se=(Vt[8]+1)/Vt[0],Se=_e*$t,Ce=_e*se,de=Dt/(-$t+se),me=de*-$t;if(et.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(me),Q.translateZ(de),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),St[10]===-1)Q.projectionMatrix.copy(et.projectionMatrix),Q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const U=_e+de,Pe=Wt+de,jt=Se-me,b=Ce+(Dt-me),_=Xt*Wt/Pe*U,B=Yt*Wt/Pe*U;Q.projectionMatrix.makePerspective(jt,b,_,B,U,Pe),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Tt(Q,et){et===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(et.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let et=Q.near,yt=Q.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),W.near=F.near=D.near=et,W.far=F.far=D.far=yt,(N!==W.near||k!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),N=W.near,k=W.far),W.layers.mask=Q.layers.mask|6,D.layers.mask=W.layers.mask&-5,F.layers.mask=W.layers.mask&-3;const Dt=Q.parent,St=W.cameras;Tt(W,Dt);for(let Vt=0;Vt<St.length;Vt++)Tt(St[Vt],Dt);St.length===2?ot(W,D,F):W.projectionMatrix.copy(D.projectionMatrix),C===null&&Q.isPerspectiveCamera&&(C={camera:Q,fov:Q.fov,zoom:Q.zoom}),It(Q,W,Dt)};function It(Q,et,yt){yt===null?Q.matrix.copy(et.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(et.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(et.projectionMatrix),Q.projectionMatrixInverse.copy(et.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=es*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(Q){return f[Q]};let oe=null;function Bt(Q,et){if(u=et.getViewerPose(c||o),g=et,u!==null){const yt=u.views;h!==null&&(t.setRenderTargetFramebuffer(S,h.framebuffer),t.setRenderTarget(S));let Dt=!1;yt.length!==W.cameras.length&&(W.cameras.length=0,Dt=!0);for(let Wt=0;Wt<yt.length;Wt++){const Xt=yt[Wt];let Yt=null;if(h!==null)Yt=h.getViewport(Xt);else{const se=p.getViewSubImage(d,Xt);Yt=se.viewport,Wt===0&&(t.setRenderTargetTextures(S,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(S))}let $t=z[Wt];$t===void 0&&($t=new cn,$t.layers.enable(Wt),$t.viewport=new Me,z[Wt]=$t),$t.matrix.fromArray(Xt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Xt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Wt===0&&(W.matrix.copy($t.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Dt===!0&&W.cameras.push($t)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();const Wt=p.getDepthInformation(yt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(St&&St.includes("camera-access")&&M){t.state.unbindTexture(),p=n.getBinding();for(let Wt=0;Wt<yt.length;Wt++){const Xt=yt[Wt].camera;if(Xt){let Yt=f[Xt];Yt||(Yt=new sc,f[Xt]=Yt);const $t=p.getCameraImage(Xt);Yt.sourceTexture=$t}}}}for(let yt=0;yt<E.length;yt++){const Dt=y[yt],St=E[yt];Dt!==null&&St!==void 0&&St.update(Dt,et,c||o)}oe&&oe(Q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ee=new gc;ee.setAnimationLoop(Bt),this.setAnimationLoop=function(Q){oe=Q},this.dispose=function(){}}}const Hm=new xe,bc=new kt;bc.set(-1,0,0,0,1,0,0,0,1);function Gm(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,pc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,w,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&h(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,T,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),w=T.envMap,S=T.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bc),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function km(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const y=E.program;n.uniformBlockBinding(S,y)}function c(S,E){let y=s[S.id];y===void 0&&(m(S),y=u(S),s[S.id]=y,S.addEventListener("dispose",T));const R=E.program;n.updateUBOMapping(S,R);const v=t.render.frame;r[S.id]!==v&&(d(S),r[S.id]=v)}function u(S){const E=p();S.__bindingPointIndex=E;const y=i.createBuffer(),R=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function p(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],y=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,C=y.length;v<C;v++){const D=y[v];if(Array.isArray(D))for(let F=0,z=D.length;F<z;F++)h(D[F],v,F,R);else h(D,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,E,y,R){if(M(S,E,y,R)===!0){const v=S.__offset,C=S.value;if(Array.isArray(C)){let D=0;for(let F=0;F<C.length;F++){const z=C[F],W=f(z);g(z,S.__data,D),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function g(S,E,y){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,y)}function M(S,E,y,R){const v=S.value,C=E+"_"+y;if(R[C]===void 0)return typeof v=="number"||typeof v=="boolean"?R[C]=v:ArrayBuffer.isView(v)?R[C]=v.slice():R[C]=v.clone(),!0;{const D=R[C];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return R[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function m(S){const E=S.uniforms;let y=0;const R=16;for(let C=0,D=E.length;C<D;C++){const F=Array.isArray(E[C])?E[C]:[E[C]];for(let z=0,W=F.length;z<W;z++){const N=F[z],k=Array.isArray(N.value)?N.value:[N.value];for(let q=0,K=k.length;q<K;q++){const at=k[q],$=f(at),it=y%R,ot=it%$.boundary,Tt=it+ot;y+=ot,Tt!==0&&R-Tt<$.storage&&(y+=R-Tt),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=$.storage}}}const v=y%R;return v>0&&(y+=R-v),S.__size=y,S.__cache={},this}function f(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",S),E}function T(S){const E=S.target;E.removeEventListener("dispose",T);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}const Vm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function Wm(){return mn===null&&(mn=new Qu(Vm,16,16,oi,yn),mn.name="DFG_LUT",mn.minFilter=Ge,mn.magFilter=Ge,mn.wrapS=Pn,mn.wrapT=Pn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class Xm{constructor(t={}){const{canvas:e=fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:h=rn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const M=h,m=new Set([ko,Go,Ho]),f=new Set([rn,Mn,ji,ts,Bo,zo]),T=new Uint32Array(4),w=new Int32Array(4),S=new I;let E=null,y=null;const R=[],v=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1,z=null,W=null,N=null,k=null;this._outputColorSpace=Ke;let q=0,K=0,at=null,$=-1,it=null;const ot=new Me,Tt=new Me;let It=null;const oe=new Jt(0);let Bt=0,ee=e.width,Q=e.height,et=1,yt=null,Dt=null;const St=new Me(0,0,ee,Q),Vt=new Me(0,0,ee,Q);let _e=!1;const Wt=new tc;let Xt=!1,Yt=!1;const $t=new xe,se=new I,Se=new Me,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function me(){return at===null?et:1}let U=n;function Pe(x,O){return e.getContext(x,O)}let jt,b,_,B,V,J,ct,ut,j,nt,dt,Pt,gt,pt,wt,Lt,Ht,L,ft,tt,ht,A,P;try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r186"),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){const O="webgl2";if(U=Pe(O,x),U===null)throw Pe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Z()}catch(x){throw e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ie("WebGLRenderer: "+x.message),x}function Z(){jt=new Wp(U),jt.init(),ht=new Dm(U,jt),b=new Up(U,jt,t,ht),_=new Lm(U,jt),b.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),W=U.createFramebuffer(),N=U.createFramebuffer(),k=U.createFramebuffer(),B=new qp(U),V=new vm,J=new Um(U,jt,_,V,b,ht,B),ct=new Vp(D),ut=new Zd(U),A=new Op(U,ut),j=new Xp(U,ut,B,A),nt=new Kp(U,j,ut,A,B),L=new Zp(U,b,J),wt=new Dp(V),dt=new xm(D,ct,jt,b,A,wt),Pt=new Gm(D,V),gt=new Mm,pt=new Am(jt),Ht=new Pp(D,ct,_,nt,g,l),Lt=new Om(D,nt,b),P=new km(U,B,b,_),ft=new Lp(U,jt,B),tt=new Yp(U,jt,B),B.programs=dt.programs,D.capabilities=b,D.extensions=jt,D.properties=V,D.renderLists=gt,D.shadowMap=Lt,D.state=_,D.info=B}M!==rn&&(C=new $p(M,e.width,e.height,a,s,r));const X=new zm(D,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=jt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=jt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(x){x!==void 0&&(et=x,this.setSize(ee,Q,!1))},this.getSize=function(x){return x.set(ee,Q)},this.setSize=function(x,O,Y=!0){if(X.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=x,Q=O,e.width=Math.floor(x*et),e.height=Math.floor(O*et),Y===!0&&(e.style.width=x+"px",e.style.height=O+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set(ee*et,Q*et).floor()},this.setDrawingBufferSize=function(x,O,Y){ee=x,Q=O,et=Y,e.width=Math.floor(x*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,x,O)},this.setEffects=function(x){if(M===rn){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let O=0;O<x.length;O++)if(x[O].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ot)},this.getViewport=function(x){return x.copy(St)},this.setViewport=function(x,O,Y,H){x.isVector4?St.set(x.x,x.y,x.z,x.w):St.set(x,O,Y,H),_.viewport(ot.copy(St).multiplyScalar(et).round())},this.getScissor=function(x){return x.copy(Vt)},this.setScissor=function(x,O,Y,H){x.isVector4?Vt.set(x.x,x.y,x.z,x.w):Vt.set(x,O,Y,H),_.scissor(Tt.copy(Vt).multiplyScalar(et).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(x){_.setScissorTest(_e=x)},this.setOpaqueSort=function(x){yt=x},this.setTransparentSort=function(x){Dt=x},this.getClearColor=function(x){return x.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(x=!0,O=!0,Y=!0){let H=0;if(x){let G=!1;if(at!==null){const vt=at.texture.format;G=m.has(vt)}if(G){const vt=at.texture.type,Et=f.has(vt),xt=Ht.getClearColor(),Ct=Ht.getClearAlpha(),Ot=xt.r,qt=xt.g,Qt=xt.b;Et?(T[0]=Ot,T[1]=qt,T[2]=Qt,T[3]=Ct,U.clearBufferuiv(U.COLOR,0,T)):(w[0]=Ot,w[1]=qt,w[2]=Qt,w[3]=Ct,U.clearBufferiv(U.COLOR,0,w))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),z=x},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Ht.dispose(),gt.dispose(),pt.dispose(),V.dispose(),ct.dispose(),nt.dispose(),A.dispose(),P.dispose(),dt.dispose(),X.dispose(),X.removeEventListener("sessionstart",fe),X.removeEventListener("sessionend",Oe),Ae.stop()};function st(x){x.preventDefault(),ma("WebGLRenderer: Context Lost."),F=!0}function rt(){ma("WebGLRenderer: Context Restored."),F=!1;const x=B.autoReset,O=Lt.enabled,Y=Lt.autoUpdate,H=Lt.needsUpdate,G=Lt.type;Z(),B.autoReset=x,Lt.enabled=O,Lt.autoUpdate=Y,Lt.needsUpdate=H,Lt.type=G}function lt(x){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Nt(x){const O=x.target;O.removeEventListener("dispose",Nt),mt(O)}function mt(x){Ut(x),V.remove(x)}function Ut(x){const O=V.get(x).programs;O!==void 0&&(O.forEach(function(Y){dt.releaseProgram(Y)}),x.isShaderMaterial&&dt.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,Y,H,G,vt){O===null&&(O=Ce);const Et=G.isMesh&&G.matrixWorld.determinantAffine()<0,xt=wc(x,O,Y,H,G);_.setMaterial(H,Et);let Ct=Y.index,Ot=1;if(H.wireframe===!0){if(Ct=j.getWireframeAttribute(Y),Ct===void 0)return;Ot=2}const qt=Y.drawRange,Qt=Y.attributes.position;let At=qt.start*Ot,re=(qt.start+qt.count)*Ot;vt!==null&&(At=Math.max(At,vt.start*Ot),re=Math.min(re,(vt.start+vt.count)*Ot)),Ct!==null?(At=Math.max(At,0),re=Math.min(re,Ct.count)):Qt!=null&&(At=Math.max(At,0),re=Math.min(re,Qt.count));const be=re-At;if(be<0||be===1/0)return;A.setup(G,H,xt,Y,Ct);let ge,he=ft;if(Ct!==null&&(ge=ut.get(Ct),he=tt,he.setIndex(ge)),G.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*me()),he.setMode(U.LINES)):he.setMode(U.TRIANGLES);else if(G.isLine){let Be=H.linewidth;Be===void 0&&(Be=1),_.setLineWidth(Be*me()),G.isLineSegments?he.setMode(U.LINES):G.isLineLoop?he.setMode(U.LINE_LOOP):he.setMode(U.LINE_STRIP)}else G.isPoints?he.setMode(U.POINTS):G.isSprite&&he.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))he.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Be=G._multiDrawStarts,bt=G._multiDrawCounts,Ve=G._multiDrawCount,ne=Ct?ut.get(Ct).bytesPerElement:1,en=V.get(H).currentProgram.getUniforms();for(let hn=0;hn<Ve;hn++)en.setValue(U,"_gl_DrawID",hn),he.render(Be[hn]/ne,bt[hn])}else if(G.isInstancedMesh)he.renderInstances(At,be,G.count);else if(Y.isInstancedBufferGeometry){const Be=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,bt=Math.min(Y.instanceCount,Be);he.renderInstances(At,be,bt)}else he.render(At,be)};function zt(x,O,Y,H){z!==null&&x.isNodeMaterial&&z.setObject(H,x),Xt===!0&&wt.setState(x,Y,!1),x.transparent===!0&&x.side===Je&&x.forceSinglePass===!1?(x.side=Qe,x.needsUpdate=!0,us(x,O,H),x.side=si,x.needsUpdate=!0,us(x,O,H),x.side=Je):us(x,O,H)}this.compile=function(x,O,Y=null){Y===null&&(Y=x),z!==null&&z.renderStart(x,O,Y),y=pt.get(Y),y.init(O),v.push(y),Y.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),x!==Y&&x.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights(),z!==null&&z.updateLights(y.state.lightsArray),Yt=this.localClippingEnabled,Xt=wt.init(this.clippingPlanes,Yt),Xt===!0&&wt.setGlobalState(this.clippingPlanes,O),z!==null&&Lt.render(y.state.shadowsArray,Y,O);const H=new Set;return x.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const vt=G.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){const xt=vt[Et];zt(xt,Y,O,G),H.add(xt)}else zt(vt,Y,O,G),H.add(vt)}),y=v.pop(),z!==null&&z.renderEnd(),H},this.compileAsync=function(x,O,Y=null){const H=this.compile(x,O,Y);return new Promise(G=>{function vt(){if(H.forEach(function(Et){const Ct=V.get(Et).currentProgram;(Ct===void 0||Ct.isReady())&&H.delete(Et)}),H.size===0){G(x);return}setTimeout(vt,10)}jt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Gt=null;function Rt(x){Gt&&Gt(x)}function fe(){Ae.stop()}function Oe(){Ae.start()}const Ae=new gc;Ae.setAnimationLoop(Rt),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(x){Gt=x,X.setAnimationLoop(x),x===null?Ae.stop():Ae.start()},X.addEventListener("sessionstart",fe),X.addEventListener("sessionend",Oe),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(x,O);const Y=X.enabled===!0&&X.isPresenting===!0,H=C!==null&&(at===null||Y)&&C.begin(D,at);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),x.isScene===!0&&x.onBeforeRender(D,x,O,at),y=pt.get(x,v.length),y.init(O),y.state.textureUnits=J.getTextureUnits(),v.push(y),$t.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Wt.setFromProjectionMatrix($t,vn,O.reversedDepth),Yt=this.localClippingEnabled,Xt=wt.init(this.clippingPlanes,Yt),E=gt.get(x,R.length),E.init(),R.push(E),X.enabled===!0&&X.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&ae(Et,O,-1/0,D.sortObjects)}ae(x,O,0,D.sortObjects),E.finish(),z!==null&&z.updateLights(y.state.lightsArray),D.sortObjects===!0&&E.sort(yt,Dt),de=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,de&&Ht.addToRenderList(E,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&wt.beginShadows();const G=y.state.shadowsArray;if(Lt.render(G,x,O),Xt===!0&&wt.endShadows(),(H&&C.hasRenderPass())===!1){const Et=E.opaque,xt=E.transmissive;if(y.setupLights(),O.isArrayCamera){const Ct=O.cameras;if(xt.length>0)for(let Ot=0,qt=Ct.length;Ot<qt;Ot++){const Qt=Ct[Ot];Ue(Et,xt,x,Qt)}de&&Ht.render(x);for(let Ot=0,qt=Ct.length;Ot<qt;Ot++){const Qt=Ct[Ot];Le(E,x,Qt,Qt.viewport)}}else xt.length>0&&Ue(Et,xt,x,O),de&&Ht.render(x),Le(E,x,O)}at!==null&&K===0&&(J.updateMultisampleRenderTarget(at),J.updateRenderTargetMipmap(at)),H&&C.end(D),x.isScene===!0&&x.onAfterRender(D,x,O),A.resetDefaultState(),$=-1,it=null,v.pop(),v.length>0?(y=v[v.length-1],J.setTextureUnits(y.state.textureUnits),Xt===!0&&wt.setGlobalState(D.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,z!==null&&z.renderEnd()};function ae(x,O,Y,H){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)Y=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLightProbeGrid)y.pushLightProbeGrid(x);else if(x.isLight)y.pushLight(x),x.castShadow&&y.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Wt)){H&&Se.setFromMatrixPosition(x.matrixWorld).applyMatrix4($t);const Et=nt.update(x),xt=x.material;xt.visible&&E.push(x,Et,xt,Y,Se.z,null,O)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Wt))){const Et=nt.update(x),xt=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Se.copy(x.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Se.copy(Et.boundingSphere.center)),Se.applyMatrix4(x.matrixWorld).applyMatrix4($t)),Array.isArray(xt)){const Ct=Et.groups;for(let Ot=0,qt=Ct.length;Ot<qt;Ot++){const Qt=Ct[Ot],At=xt[Qt.materialIndex];At&&At.visible&&E.push(x,Et,At,Y,Se.z,Qt,O)}}else xt.visible&&E.push(x,Et,xt,Y,Se.z,null,O)}}const vt=x.children;for(let Et=0,xt=vt.length;Et<xt;Et++)ae(vt[Et],O,Y,H)}function Le(x,O,Y,H){const{opaque:G,transmissive:vt,transparent:Et}=x;y.setupLightsView(Y),Xt===!0&&wt.setGlobalState(D.clippingPlanes,Y),H&&_.viewport(ot.copy(H)),G.length>0&&Kn(G,O,Y),vt.length>0&&Kn(vt,O,Y),Et.length>0&&Kn(Et,O,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ue(x,O,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[H.id]===void 0){const At=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[H.id]=new fn(1,1,{generateMipmaps:!0,type:At?yn:rn,minFilter:ni,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}const vt=y.state.transmissionRenderTarget[H.id],Et=H.viewport||ot;vt.setSize(Et.z*D.transmissionResolutionScale,Et.w*D.transmissionResolutionScale);const xt=D.getRenderTarget(),Ct=D.getActiveCubeFace(),Ot=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(oe),Bt=D.getClearAlpha(),Bt<1&&D.setClearColor(16777215,.5),D.clear(),de&&Ht.render(Y);const qt=D.toneMapping;D.toneMapping=Sn;const Qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),y.setupLightsView(H),Xt===!0&&wt.setGlobalState(D.clippingPlanes,H),Kn(x,Y,H),J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let re=0,be=O.length;re<be;re++){const ge=O[re],{object:he,geometry:Be,material:bt,group:Ve}=ge;if(bt.side===Je&&he.layers.test(H.layers)){const ne=bt.side;bt.side=Qe,bt.needsUpdate=!0,Jn(he,Y,H,Be,bt,Ve),bt.side=ne,bt.needsUpdate=!0,At=!0}}At===!0&&(J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt))}D.setRenderTarget(xt,Ct,Ot),D.setClearColor(oe,Bt),Qt!==void 0&&(H.viewport=Qt),D.toneMapping=qt}function Kn(x,O,Y){const H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,vt=x.length;G<vt;G++){const Et=x[G],{object:xt,geometry:Ct,group:Ot}=Et;let qt=Et.material;qt.allowOverride===!0&&H!==null&&(qt=H),xt.layers.test(Y.layers)&&Jn(xt,O,Y,Ct,qt,Ot)}}function Jn(x,O,Y,H,G,vt){z!==null&&G.isNodeMaterial&&z.setObject(x,G),x.onBeforeRender(D,O,Y,H,G,vt),x.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),G.onBeforeRender(D,O,Y,H,x,vt),G.transparent===!0&&G.side===Je&&G.forceSinglePass===!1?(G.side=Qe,G.needsUpdate=!0,D.renderBufferDirect(Y,O,H,G,x,vt),G.side=si,G.needsUpdate=!0,D.renderBufferDirect(Y,O,H,G,x,vt),G.side=Je):D.renderBufferDirect(Y,O,H,G,x,vt),x.onAfterRender(D,O,Y,H,G,vt)}function us(x,O,Y){O.isScene!==!0&&(O=Ce);const H=V.get(x),G=y.state.lights,vt=y.state.shadowsArray,Et=G.state.version,xt=dt.getParameters(x,G.state,vt,O,Y,y.state.lightProbeGridArray),Ct=dt.getProgramCacheKey(xt);let Ot=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const qt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=ct.get(x.envMap||H.environment,qt),H.envMapRotation=H.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,Ot===void 0&&(x.addEventListener("dispose",Nt),Ot=new Map,H.programs=Ot);let Qt=Ot.get(Ct);if(Qt!==void 0){if(H.currentProgram===Qt&&H.lightsStateVersion===Et)return ra(x,xt),Qt}else xt.uniforms=dt.getUniforms(x),z!==null&&x.isNodeMaterial&&z.build(x,Y,xt),x.onBeforeCompile(xt,D),Qt=dt.acquireProgram(xt,Ct),Ot.set(Ct,Qt),H.uniforms=xt.uniforms;const At=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(At.clippingPlanes=wt.uniform),ra(x,xt),H.needsLights=Ic(x),H.lightsStateVersion=Et,H.needsLights&&(At.ambientLightColor.value=G.state.ambient,At.lightProbe.value=G.state.probe,At.sunLights.value=G.state.sun,At.sunLightShadows.value=G.state.sunShadow,At.directionalLights.value=G.state.directional,At.directionalLightShadows.value=G.state.directionalShadow,At.spotLights.value=G.state.spot,At.spotLightShadows.value=G.state.spotShadow,At.rectAreaLights.value=G.state.rectArea,At.ltc_1.value=G.state.rectAreaLTC1,At.ltc_2.value=G.state.rectAreaLTC2,At.pointLights.value=G.state.point,At.pointLightShadows.value=G.state.pointShadow,At.hemisphereLights.value=G.state.hemi,At.sunShadowMatrix.value=G.state.sunShadowMatrix,At.sunShadowCascade.value=G.state.sunShadowCascade,At.directionalShadowMatrix.value=G.state.directionalShadowMatrix,At.spotLightMatrix.value=G.state.spotLightMatrix,At.spotLightMap.value=G.state.spotLightMap,At.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=y.state.lightProbeGridArray.length>0,H.currentProgram=Qt,H.uniformsList=null,Qt}function sa(x){if(x.uniformsList===null){const O=x.currentProgram.getUniforms();x.uniformsList=Zs.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function ra(x,O){const Y=V.get(x);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Ac(x,O){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let Y=0,H=x.length;Y<H;Y++){const G=x[Y];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function wc(x,O,Y,H,G){O.isScene!==!0&&(O=Ce),J.resetTextureUnits();const vt=O.fog,Et=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,xt=at===null?D.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:te.workingColorSpace,Ct=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ot=ct.get(H.envMap||Et,Ct),qt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Qt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!Y.morphAttributes.position,re=!!Y.morphAttributes.normal,be=!!Y.morphAttributes.color;let ge=Sn;H.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ge=D.toneMapping);const he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Be=he!==void 0?he.length:0,bt=V.get(H),Ve=y.state.lights;if(Xt===!0&&(Yt===!0||x!==it)){const pe=x===it&&H.id===$;wt.setState(H,x,pe)}let ne=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ve.state.version||bt.outputColorSpace!==xt||G.isBatchedMesh&&bt.batching===!1||!G.isBatchedMesh&&bt.batching===!0||G.isBatchedMesh&&bt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&bt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&bt.instancing===!1||!G.isInstancedMesh&&bt.instancing===!0||G.isSkinnedMesh&&bt.skinning===!1||!G.isSkinnedMesh&&bt.skinning===!0||G.isInstancedMesh&&bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&bt.instancingMorph===!1&&G.morphTexture!==null||bt.envMap!==Ot||H.fog===!0&&bt.fog!==vt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==wt.numPlanes||bt.numIntersection!==wt.numIntersection)||bt.vertexAlphas!==qt||bt.vertexTangents!==Qt||bt.morphTargets!==At||bt.morphNormals!==re||bt.morphColors!==be||bt.toneMapping!==ge||bt.morphTargetsCount!==Be||!!bt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,bt.__version=H.version);let en=bt.currentProgram;ne===!0&&(en=us(H,O,G),z&&H.isNodeMaterial&&z.onUpdateProgram(H,en,bt));let hn=!1,Fn=!1,ui=!1;const ue=en.getUniforms(),ye=bt.uniforms;if(_.useProgram(en.program)&&(hn=!0,Fn=!0,ui=!0),H.id!==$&&($=H.id,Fn=!0),bt.needsLights){const pe=Ac(y.state.lightProbeGridArray,G);bt.lightProbeGrid!==pe&&(bt.lightProbeGrid=pe,Fn=!0)}if(hn||it!==x){_.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ue.setValue(U,"projectionMatrix",x.projectionMatrix),ue.setValue(U,"viewMatrix",x.matrixWorldInverse);const zn=ue.map.cameraPosition;zn!==void 0&&zn.setValue(U,se.setFromMatrixPosition(x.matrixWorld)),b.logarithmicDepthBuffer&&ue.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ue.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),it!==x&&(it=x,Fn=!0,ui=!0)}if(bt.needsLights&&(Ve.state.sunShadowMap.length>0&&ue.setValue(U,"sunShadowMap",Ve.state.sunShadowMap,J),Ve.state.directionalShadowMap.length>0&&ue.setValue(U,"directionalShadowMap",Ve.state.directionalShadowMap,J),Ve.state.spotShadowMap.length>0&&ue.setValue(U,"spotShadowMap",Ve.state.spotShadowMap,J),Ve.state.pointShadowMap.length>0&&ue.setValue(U,"pointShadowMap",Ve.state.pointShadowMap,J)),G.isSkinnedMesh){ue.setOptional(U,G,"bindMatrix"),ue.setOptional(U,G,"bindMatrixInverse");const pe=G.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),ue.setValue(U,"boneTexture",pe.boneTexture,J))}G.isBatchedMesh&&(ue.setOptional(U,G,"batchingTexture"),ue.setValue(U,"batchingTexture",G._matricesTexture,J),ue.setOptional(U,G,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",G._indirectTexture,J),ue.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&ue.setValue(U,"batchingColorTexture",G._colorsTexture,J));const Bn=Y.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&L.update(G,Y,en),(Fn||bt.receiveShadow!==G.receiveShadow)&&(bt.receiveShadow=G.receiveShadow,ue.setValue(U,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(ye.envMapIntensity.value=O.environmentIntensity),ye.dfgLUT!==void 0&&(ye.dfgLUT.value=Wm()),Fn){if(ue.setValue(U,"toneMappingExposure",D.toneMappingExposure),bt.needsLights&&Rc(ye,ui),vt&&H.fog===!0&&Pt.refreshFogUniforms(ye,vt),Pt.refreshMaterialUniforms(ye,H,et,Q,y.state.transmissionRenderTarget[x.id]),bt.needsLights&&bt.lightProbeGrid){const pe=bt.lightProbeGrid;ye.probesSH.value=pe.texture,ye.probesMin.value.copy(pe.boundingBox.min),ye.probesMax.value.copy(pe.boundingBox.max),ye.probesResolution.value.copy(pe.resolution)}Zs.upload(U,sa(bt),ye,J)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Zs.upload(U,sa(bt),ye,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ue.setValue(U,"center",G.center),ue.setValue(U,"modelViewMatrix",G.modelViewMatrix),ue.setValue(U,"normalMatrix",G.normalMatrix),ue.setValue(U,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const pe=H.uniformsGroups;for(let zn=0,di=pe.length;zn<di;zn++){const aa=pe[zn];P.update(aa,en),P.bind(aa,en)}}return en}function Rc(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.sunLights.needsUpdate=O,x.sunLightShadows.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function Ic(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(x,O,Y){const H=V.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(x.texture).__webglTexture=O,V.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,O){const Y=V.get(x);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(x,O=0,Y=0){at=x,q=O,K=Y;let H=null,G=!1,vt=!1;if(x){const xt=V.get(x);if(xt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,xt.__webglFramebuffer),ot.copy(x.viewport),Tt.copy(x.scissor),It=x.scissorTest,_.viewport(ot),_.scissor(Tt),_.setScissorTest(It),$=-1;return}else if(xt.__webglFramebuffer===void 0)J.setupRenderTarget(x);else if(xt.__hasExternalTextures)J.rebindTextures(x,V.get(x.texture).__webglTexture,V.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const qt=x.depthTexture;if(xt.__boundDepthTexture!==qt){if(qt!==null&&V.has(qt)&&(x.width!==qt.image.width||x.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(x)}}const Ct=x.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(vt=!0);const Ot=V.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ot[O])?H=Ot[O][Y]:H=Ot[O],G=!0):x.samples>0&&J.useMultisampledRTT(x)===!1?H=V.get(x).__webglMultisampledFramebuffer:Array.isArray(Ot)?H=Ot[Y]:H=Ot,ot.copy(x.viewport),Tt.copy(x.scissor),It=x.scissorTest}else ot.copy(St).multiplyScalar(et).floor(),Tt.copy(Vt).multiplyScalar(et).floor(),It=_e;if(Y!==0&&(H=W),_.bindFramebuffer(U.FRAMEBUFFER,H)&&_.drawBuffers(x,H),_.viewport(ot),_.scissor(Tt),_.setScissorTest(It),G){const xt=V.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,Y)}else if(vt){const xt=O;for(let Ct=0;Ct<x.textures.length;Ct++){const Ot=V.get(x.textures[Ct]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ct,Ot.__webglTexture,Y,xt)}}else if(x!==null&&Y!==0){const xt=V.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xt.__webglTexture,Y)}$=-1};function oa(x){const O=V.get(x);return(O.__readFormat!==x.format||O.__readType!==x.type)&&(O.__readFormat=x.format,O.__readType=x.type,O.__formatReadable=b.textureFormatReadable(x.format),O.__typeReadable=b.textureTypeReadable(x.type)),O}this.readRenderTargetPixels=function(x,O,Y,H,G,vt,Et,xt=0){if(!(x&&x.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){_.bindFramebuffer(U.FRAMEBUFFER,Ct);try{const Ot=x.textures[xt],qt=Ot.format,Qt=Ot.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt);const At=oa(Ot);if(At.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-H&&Y>=0&&Y<=x.height-G&&U.readPixels(O,Y,H,G,ht.convert(qt),ht.convert(Qt),vt)}finally{const Ot=at!==null?V.get(at).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(x,O,Y,H,G,vt,Et,xt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct)if(O>=0&&O<=x.width-H&&Y>=0&&Y<=x.height-G){_.bindFramebuffer(U.FRAMEBUFFER,Ct);const Ot=x.textures[xt],qt=Ot.format,Qt=Ot.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt);const At=oa(Ot);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,re),U.bufferData(U.PIXEL_PACK_BUFFER,vt.byteLength,U.STREAM_READ),U.readPixels(O,Y,H,G,ht.convert(qt),ht.convert(Qt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const be=at!==null?V.get(at).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,be);const ge=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await hu(U,ge,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,re),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,vt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(re),U.deleteSync(ge),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,O=null,Y=0){const H=Math.pow(2,-Y),G=Math.floor(x.image.width*H),vt=Math.floor(x.image.height*H),Et=O!==null?O.x:0,xt=O!==null?O.y:0;J.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Et,xt,G,vt),_.unbindTexture()},this.copyTextureToTexture=function(x,O,Y=null,H=null,G=0,vt=0){let Et,xt,Ct,Ot,qt,Qt,At,re,be;const ge=x.isCompressedTexture?x.mipmaps[vt]:x.image;if(Y!==null)Et=Y.max.x-Y.min.x,xt=Y.max.y-Y.min.y,Ct=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,qt=Y.min.y,Qt=Y.isBox3?Y.min.z:0;else{const ye=Math.pow(2,-G);Et=Math.floor(ge.width*ye),xt=Math.floor(ge.height*ye),x.isDataArrayTexture?Ct=ge.depth:x.isData3DTexture?Ct=Math.floor(ge.depth*ye):Ct=1,Ot=0,qt=0,Qt=0}H!==null?(At=H.x,re=H.y,be=H.z):(At=0,re=0,be=0);const he=ht.convert(O.format),Be=ht.convert(O.type);let bt;O.isData3DTexture?(J.setTexture3D(O,0),bt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(J.setTexture2DArray(O,0),bt=U.TEXTURE_2D_ARRAY):(J.setTexture2D(O,0),bt=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Ve=_.getParameter(U.UNPACK_ROW_LENGTH),ne=_.getParameter(U.UNPACK_IMAGE_HEIGHT),en=_.getParameter(U.UNPACK_SKIP_PIXELS),hn=_.getParameter(U.UNPACK_SKIP_ROWS),Fn=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Ot),_.pixelStorei(U.UNPACK_SKIP_ROWS,qt),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Qt);const ui=x.isDataArrayTexture||x.isData3DTexture,ue=O.isDataArrayTexture||O.isData3DTexture;if(x.isDepthTexture){const ye=V.get(x),Bn=V.get(O),pe=V.get(ye.__renderTarget),zn=V.get(Bn.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,pe.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let di=0;di<Ct;di++)ui&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(x).__webglTexture,G,Qt+di),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(O).__webglTexture,vt,be+di)),U.blitFramebuffer(Ot,qt,Et,xt,At,re,Et,xt,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||x.isRenderTargetTexture||V.has(x)){const ye=V.get(x),Bn=V.get(O);_.bindFramebuffer(U.READ_FRAMEBUFFER,N),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let pe=0;pe<Ct;pe++)ui?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.__webglTexture,G,Qt+pe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ye.__webglTexture,G),ue?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bn.__webglTexture,vt,be+pe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Bn.__webglTexture,vt),G!==0?U.blitFramebuffer(Ot,qt,Et,xt,At,re,Et,xt,U.COLOR_BUFFER_BIT,U.NEAREST):ue?U.copyTexSubImage3D(bt,vt,At,re,be+pe,Ot,qt,Et,xt):U.copyTexSubImage2D(bt,vt,At,re,Ot,qt,Et,xt);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ue?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(bt,vt,At,re,be,Et,xt,Ct,he,Be,ge.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,vt,At,re,be,Et,xt,Ct,he,ge.data):U.texSubImage3D(bt,vt,At,re,be,Et,xt,Ct,he,Be,ge):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,vt,At,re,Et,xt,he,Be,ge.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,vt,At,re,ge.width,ge.height,he,ge.data):U.texSubImage2D(U.TEXTURE_2D,vt,At,re,Et,xt,he,Be,ge);_.pixelStorei(U.UNPACK_ROW_LENGTH,Ve),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne),_.pixelStorei(U.UNPACK_SKIP_PIXELS,en),_.pixelStorei(U.UNPACK_SKIP_ROWS,hn),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Fn),vt===0&&O.generateMipmaps&&U.generateMipmap(bt),_.unbindTexture()},this.initRenderTarget=function(x){V.get(x).__webglFramebuffer===void 0&&J.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?J.setTextureCube(x,0):x.isData3DTexture?J.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?J.setTexture2DArray(x,0):J.setTexture2D(x,0),_.unbindTexture()},this.resetState=function(){q=0,K=0,at=null,_.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const yl={type:"change"},Qo={type:"start"},Ec={type:"end"},Hs=new ls,bl=new gn,Ym=Math.cos(70*Io.DEG2RAD),we=new I,Ze=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gr=1e-6;class qm extends Yd{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ln.ROTATE,MIDDLE:Ln.DOLLY,RIGHT:Ln.PAN},this.touches={ONE:In.ROTATE,TWO:In.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new qn,this._lastTargetPosition=new I,this._quat=new qn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $a,this._sphericalDelta=new $a,this._scale=1,this._panOffset=new I,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new I,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Km.bind(this),this._onPointerDown=Zm.bind(this),this._onPointerUp=Jm.bind(this),this._onContextMenu=ig.bind(this),this._onMouseWheel=jm.bind(this),this._onKeyDown=tg.bind(this),this._onTouchStart=eg.bind(this),this._onTouchMove=ng.bind(this),this._onMouseDown=$m.bind(this),this._onMouseMove=Qm.bind(this),this._interceptControlDown=sg.bind(this),this._interceptControlUp=rg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ce.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yl),this.update(),this.state=ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=we.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Hs.origin.copy(this.object.position),Hs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hs.direction))<Ym?this.object.lookAt(this.target):(bl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hs.intersectPlane(bl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gr||this._lastTargetPosition.distanceToSquared(this.target)>Gr?(this.dispatchEvent(yl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Zm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Km(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Jm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ec),this.state=ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $m(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ln.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case Ln.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case Ln.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Qo)}function Qm(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jm(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(Qo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ec))}function tg(i){this.enabled!==!1&&this._handleKeyDown(i)}function eg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case In.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case In.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case In.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case In.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Qo)}function ng(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function ig(i){this.enabled!==!1&&i.preventDefault()}function sg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gs(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Te;let c=0;for(let u=0;u<i.length;++u){const p=i[u];let d=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in p.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(p.attributes[h]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in p.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(p.morphAttributes[h])}if(t){let h;if(e)h=p.index.count;else if(p.attributes.position!==void 0)h=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(e){let u=0;const p=[];for(let d=0;d<i.length;++d){const h=i[d].index;for(let g=0;g<h.count;++g)p.push(h.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(p)}for(const u in r){const p=El(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(const u in o){const p=o[u][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<p;++d){const h=[];for(let M=0;M<o[u].length;++M)h.push(o[u][M][d]);const g=El(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function El(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new $e(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const p=l/e;for(let d=0,h=u.count;d<h;d++)for(let g=0;g<e;g++){const M=u.getComponent(d,g);a.setComponent(d+p,g,M)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const og=`<div id="scene"></div>
<div class="edge-fade" aria-hidden="true"></div>
<header>
  <div class="identity">
    <svg class="site-mark" viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M5 28V13l15-8 15 8v15l-15 8-15-8Zm0-15 15 8 15-8M20 21v15M12 17v15M28 17v15M12 9l16 8M20 5v8l15 8"
      />
    </svg>
    <div>
      <div class="overline">UNIVERSITY OF TORONTO</div>
      <h1>St. George<span class="title-period">.</span></h1>
    </div>
  </div>
  <div class="header-center">
    <span class="blue-dot"></span>CAMPUS MODEL<span class="header-divider"
      >/</span
    ><span>01</span>
  </div>
  <button class="source-button" id="source-button">
    Map sources <span>↗</span>
  </button>
</header>
<div class="map-meta">
  <span id="model-count">LOADING CAMPUS</span
  ><span>43.6623° N &nbsp; 79.3968° W</span>
</div>
<select id="building-picker" aria-label="Go to a building" disabled>
  <option>Go to a building…</option>
</select>
<div id="labels"></div>
<aside id="selection" hidden aria-labelledby="selection-name">
  <div class="selection-top">
    <span id="selection-code">BUILDING</span
    ><button id="close-selection" aria-label="Close building details">×</button>
  </div>
  <h2 id="selection-name"></h2>
  <p id="selection-note">City of Toronto · 2025 building model</p>
  <a id="official-link" target="_blank" rel="noreferrer"
    >View on UofT map <span>↗</span></a
  >
</aside>
<nav class="view-controls" aria-label="Map view">
  <div class="view-switch">
    <button id="view-3d" class="active" aria-pressed="true">3D VIEW</button
    ><button id="view-2d" aria-pressed="false">PLAN VIEW</button>
  </div>
  <div class="control-rule"></div>
  <button id="zoom-in" class="square-control" aria-label="Zoom in">+</button>
  <button id="zoom-out" class="square-control" aria-label="Zoom out">−</button>
  <div class="control-rule"></div>
  <button
    id="reset-view"
    class="square-control"
    aria-label="Reset campus view"
    title="Reset campus view"
  >
    <svg viewBox="0 0 24 24">
      <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M8 12h8m-4-4v8" />
    </svg>
  </button>
  <button
    id="labels-toggle"
    class="square-control labels-control active"
    aria-pressed="true"
    aria-label="Toggle building labels"
    title="Building labels"
  >
    Aa
  </button>
</nav>
<div class="compass" aria-hidden="true">
  <span>N</span
  ><svg id="compass-arrow" viewBox="0 0 36 36">
    <path d="m18 4 6 25-6-5-6 5Z" />
  </svg>
</div>
<div class="map-scale" aria-label="Map scale">
  <span id="scale-text">100 m</span><i id="scale-line"></i>
</div>
<div class="map-instruction">
  <span class="instruction-cross">+</span
  ><span>Go on. Change your perspective.</span
  ><small
    >Drag to orbit <b>·</b> Right-drag to pan <b>·</b> Scroll to zoom</small
  >
</div>
<footer>
  <span class="study-tag">CAMPUS EXPLORER</span
  ><span class="footer-note">Independent campus map · 2025 city geometry</span
  ><span class="attribution"
    ><a
      href="https://open.toronto.ca/dataset/3d-massing/"
      target="_blank"
      rel="noreferrer"
      >Toronto Open Data</a
    ><span>+</span
    ><a
      href="https://www.openstreetmap.org/copyright"
      target="_blank"
      rel="noreferrer"
      >© OpenStreetMap</a
    ></span
  >
</footer>
<dialog id="sources" aria-label="Map sources">
  <div class="dialog-top">
    <span class="overline">THE GEOMETRY BEHIND THE VIEW</span
    ><button id="close-sources" aria-label="Close map sources">×</button>
  </div>
  <h2>A real campus.<br />A traceable model.</h2>
  <div class="source-entry">
    <span>01</span>
    <div>
      <h3>Building shapes & heights</h3>
      <a
        href="https://open.toronto.ca/dataset/3d-massing/"
        target="_blank"
        rel="noreferrer"
        >City of Toronto · 3D Massing, 2025 ↗</a
      >
      <p>
        Building volumes and roof surfaces extracted from the city model.
        Detailed meshes are reduced for browser performance; building locations
        are retained.
      </p>
    </div>
  </div>
  <div class="source-entry">
    <span>02</span>
    <div>
      <h3>Streets, paths & landscape</h3>
      <a
        href="https://www.openstreetmap.org/#map=16/43.6635/-79.3965"
        target="_blank"
        rel="noreferrer"
        >OpenStreetMap · September 2026 ↗</a
      >
      <p>
        Mapped paths, planted areas, and tree locations. Tree canopy sizes and
        path widths are illustrative.
      </p>
    </div>
  </div>
  <div class="source-entry">
    <span>03</span>
    <div>
      <h3>Campus reference</h3>
      <a
        href="https://map.utoronto.ca/?id=1809"
        target="_blank"
        rel="noreferrer"
        >University of Toronto · official campus map ↗</a
      >
      <p>
        Reference for building names and campus layout. This independent map is
        not an official university map.
      </p>
    </div>
  </div>
  <p class="source-footnote">
    Central St. George and immediate surroundings. Source vintages differ;
    recent changes may be missing. The city model is for illustration, not
    survey or indoor navigation.
  </p>
</dialog>
<div id="loading" role="status">
  <svg viewBox="0 0 40 40">
    <path d="M5 28V13l15-8 15 8v15l-15 8-15-8Zm0-15 15 8 15-8M20 21v15" /></svg
  ><span>ASSEMBLING ST. GEORGE</span
  ><small>From city geometry to your screen.</small>
</div>
<div id="fallback" hidden>
  <h2>The 3D view couldn’t load.</h2>
  <p id="fallback-message">
    Check your connection and WebGL support, then try again.
  </p>
  <button id="retry-map">Retry map</button
  ><a href="https://map.utoronto.ca/?id=1809">Open the official map ↗</a>
</div>
`,ag={source:"City of Toronto, 3D Massing, 2025 release",sourceUrl:"https://open.toronto.ca/dataset/3d-massing/",groundSource:"OpenStreetMap, retrieved 2026-09-14",officialReference:"https://map.utoronto.ca/?id=1809",projection:"WGS84 / UTM zone 17N (EPSG:32617), local metres",origin:{lon:-79.3968,lat:43.6623},bbox:[-79.4035,43.658,-79.389,43.6693],note:"Source massing retained. Rendering style and vegetation canopy sizes are illustrative. No survey-grade accuracy asserted.",extentSource:"OpenStreetMap UTSG relation 18447148 plus mapped college grounds; ROM and Ontario Legislature retained as context.",identityAudit:"OSM named building relations and 184 official directory entries; unmatched geometry remains explicitly unnamed.",catalogueCodeAudit:{source:"preview/public/data/buildings.json",matchedNames:{"osm-9303310":"RW","osm-4942687":"RO","osm-10336057":"WO","osm-8106022":"WS","osm-1464898602":"WB","osm-10725629":"OI"},note:"Other timetable codes use exact catalogue coordinates/footprints via campus-map setCatalogue; no nearest-building assignment."}},lg=JSON.parse(`[{"id":"osm-8117208","name":"Northrop Frye Hall","osmId":8117208,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494600","center":[368.38999938964844,6.815000057220459,-463.6300048828125],"bounds":[[347.42999267578125,0,-479.8399963378906],[389.3500061035156,13.630000114440918,-447.4200134277344]],"positionOffset":0,"positionCount":360,"edgeOffset":360,"edgeCount":240,"triangles":40,"simplificationErrorM":0,"buildingId":"campus:NF","identitySource":"https://map.utoronto.ca/?id=1809#!m/494600","codes":["NF"]},{"id":"osm-23436128","name":"Toronto School of Theology","osmId":23436128,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055910","center":[492.5449981689453,6.014999866485596,-280.7250061035156],"bounds":[[475.1600036621094,0,-294.8900146484375],[509.92999267578125,12.029999732971191,-266.55999755859375]],"positionOffset":600,"positionCount":495,"edgeOffset":1095,"edgeCount":336,"triangles":55,"simplificationErrorM":0,"buildingId":"campus:TH","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055910","codes":["TH"]},{"id":"osm-23436149","name":"Multicultural History Society of Ontario","osmId":23436149,"officialUrl":null,"center":[498.9449920654297,5.340000152587891,-259.65999603271484],"bounds":[[486.8999938964844,0,-270.42999267578125],[510.989990234375,10.680000305175781,-248.88999938964844]],"positionOffset":1431,"positionCount":405,"edgeOffset":1836,"edgeCount":300,"triangles":45,"simplificationErrorM":0,"buildingId":"osm-23436149","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-150434794","name":"Campus context","osmId":150434794,"officialUrl":null,"center":[554.5050048828125,2.950000047683716,-255.84500885009766],"bounds":[[545.5499877929688,0,-264.9800109863281],[563.4600219726562,5.900000095367432,-246.7100067138672]],"positionOffset":2136,"positionCount":198,"edgeOffset":2334,"edgeCount":144,"triangles":22,"simplificationErrorM":0,"buildingId":"osm-150434794","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23435826","name":"McLuhan Program in Culture and Technology","osmId":23435826,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494529","center":[561.8450012207031,2.359999895095825,-235.80500030517578],"bounds":[[555.8900146484375,0,-243.1300048828125],[567.7999877929688,4.71999979019165,-228.47999572753906]],"positionOffset":2478,"positionCount":90,"edgeOffset":2568,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-23435826","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-20","name":"Campus context","osmId":null,"officialUrl":null,"center":[262.2200012207031,1.7699999809265137,-685.2250061035156],"bounds":[[257.1600036621094,0,-691.0599975585938],[267.2799987792969,3.5399999618530273,-679.3900146484375]],"positionOffset":2640,"positionCount":90,"edgeOffset":2730,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-20","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204281828","name":"Campus context","osmId":204281828,"officialUrl":null,"center":[599.3399963378906,1.4700000286102295,-446.1000061035156],"bounds":[[596.97998046875,0,-450.1000061035156],[601.7000122070312,2.940000057220459,-442.1000061035156]],"positionOffset":2802,"positionCount":90,"edgeOffset":2892,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-204281828","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22747247","name":"North West Chiller Plant","osmId":22747247,"officialUrl":null,"center":[-448.3350067138672,6.34499979019165,-298.93499755859375],"bounds":[[-464.8900146484375,0,-320.67999267578125],[-431.7799987792969,12.6899995803833,-277.19000244140625]],"positionOffset":2964,"positionCount":90,"edgeOffset":3054,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-22747247","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-12000657","name":"Falconer Hall","osmId":12000657,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494552","center":[221.33499908447266,4.46999979019165,-493.2250061035156],"bounds":[[202.97999572753906,0,-510.6400146484375],[239.69000244140625,8.9399995803833,-475.80999755859375]],"positionOffset":3126,"positionCount":2007,"edgeOffset":5133,"edgeCount":1080,"triangles":223,"simplificationErrorM":0,"buildingId":"campus:FH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494552","codes":["FH"]},{"id":"osm-141692092","name":"Cumberland House","osmId":141692092,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494464","center":[76.80000114440918,4.510000228881836,315.3450012207031],"bounds":[[61.369998931884766,0,298.05999755859375],[92.2300033569336,9.020000457763672,332.6300048828125]],"positionOffset":6213,"positionCount":729,"edgeOffset":6942,"edgeCount":492,"triangles":81,"simplificationErrorM":0,"buildingId":"campus:CU","identitySource":"https://map.utoronto.ca/?id=1809#!m/494464","codes":["CU"]},{"id":"osm-20173368","name":"J. Robert S. Prichard Alumni House","osmId":20173368,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494507","center":[4.400000095367432,5.855000019073486,24.499999523162842],"bounds":[[-12.109999656677246,0,10.289999961853027],[20.90999984741211,11.710000038146973,38.709999084472656]],"positionOffset":7434,"positionCount":288,"edgeOffset":7722,"edgeCount":216,"triangles":32,"simplificationErrorM":0,"buildingId":"campus:DR","identitySource":"https://map.utoronto.ca/?id=1809#!m/494507","codes":["DR"]},{"id":"osm-22898457","name":"Fasken Martineau Building","osmId":22898457,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494527","center":[-431.1999969482422,5.019999980926514,-193.6999969482422],"bounds":[[-446.6000061035156,0,-209.00999450683594],[-415.79998779296875,10.039999961853027,-178.38999938964844]],"positionOffset":7938,"positionCount":603,"edgeOffset":8541,"edgeCount":414,"triangles":67,"simplificationErrorM":0,"buildingId":"osm-22898457","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479315","name":"Campus context","osmId":127479315,"officialUrl":null,"center":[-353.26499938964844,5.590000152587891,-336.510009765625],"bounds":[[-369.0799865722656,0,-353.510009765625],[-337.45001220703125,11.180000305175781,-319.510009765625]],"positionOffset":8955,"positionCount":1251,"edgeOffset":10206,"edgeCount":816,"triangles":139,"simplificationErrorM":0,"buildingId":"osm-127479315","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-280289231","name":"Daniels Architecture Commons","osmId":280289231,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494532","center":[-441.2849884033203,4.619999885559082,-229.83499908447266],"bounds":[[-455.989990234375,0,-243.39999389648438],[-426.5799865722656,9.239999771118164,-216.27000427246094]],"positionOffset":11022,"positionCount":333,"edgeOffset":11355,"edgeCount":222,"triangles":37,"simplificationErrorM":0,"buildingId":"osm-280289231","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584652","name":"Campus context","osmId":1433584652,"officialUrl":null,"center":[-473.47999572753906,5.195000171661377,-327.9949951171875],"bounds":[[-486.7099914550781,0,-342.0199890136719],[-460.25,10.390000343322754,-313.9700012207031]],"positionOffset":11577,"positionCount":630,"edgeOffset":12207,"edgeCount":432,"triangles":70,"simplificationErrorM":0,"buildingId":"osm-1433584652","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742866","name":"Campus context","osmId":126742866,"officialUrl":null,"center":[-300.3050079345703,4.965000152587891,-326.1300048828125],"bounds":[[-316.7300109863281,0,-337.44000244140625],[-283.8800048828125,9.930000305175781,-314.82000732421875]],"positionOffset":12639,"positionCount":495,"edgeOffset":13134,"edgeCount":324,"triangles":55,"simplificationErrorM":0,"buildingId":"osm-126742866","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1346238636","name":"Xavier House","osmId":1346238636,"officialUrl":null,"center":[-322.75999450683594,4.755000114440918,-416.76499938964844],"bounds":[[-337.8599853515625,0,-426.7099914550781],[-307.6600036621094,9.510000228881836,-406.82000732421875]],"positionOffset":13458,"positionCount":378,"edgeOffset":13836,"edgeCount":270,"triangles":42,"simplificationErrorM":0,"buildingId":"osm-1346238636","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1346238638","name":"Rochdale House","osmId":1346238638,"officialUrl":null,"center":[-333.4449920654297,4.295000076293945,-443.260009765625],"bounds":[[-347.6499938964844,0,-452.6000061035156],[-319.239990234375,8.59000015258789,-433.9200134277344]],"positionOffset":14106,"positionCount":414,"edgeOffset":14520,"edgeCount":288,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-1346238638","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742865","name":"Campus context","osmId":126742865,"officialUrl":null,"center":[-313.89500427246094,4.460000038146973,-372.5500030517578],"bounds":[[-326.57000732421875,0,-382.44000244140625],[-301.2200012207031,8.920000076293945,-362.6600036621094]],"positionOffset":14808,"positionCount":333,"edgeOffset":15141,"edgeCount":228,"triangles":37,"simplificationErrorM":0,"buildingId":"osm-126742865","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1346238637","name":"Dayfoot House","osmId":1346238637,"officialUrl":null,"center":[-329.7899932861328,4.619999885559082,-429.52000427246094],"bounds":[[-343.3299865722656,0,-438.8500061035156],[-316.25,9.239999771118164,-420.19000244140625]],"positionOffset":15369,"positionCount":414,"edgeOffset":15783,"edgeCount":288,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-1346238637","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742256","name":"Campus context","osmId":126742256,"officialUrl":null,"center":[-338.7050018310547,4.630000114440918,-469.81500244140625],"bounds":[[-353.6000061035156,0,-479.0899963378906],[-323.80999755859375,9.260000228881836,-460.5400085449219]],"positionOffset":16071,"positionCount":90,"edgeOffset":16161,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-126742256","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22199519","name":"Sigma Chi Toronto","osmId":22199519,"officialUrl":null,"center":[-303.75,3.6050000190734863,-166.7199935913086],"bounds":[[-317.2300109863281,0,-175.7899932861328],[-290.2699890136719,7.210000038146973,-157.64999389648438]],"positionOffset":16233,"positionCount":360,"edgeOffset":16593,"edgeCount":252,"triangles":40,"simplificationErrorM":0,"buildingId":"osm-22199519","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742863","name":"Campus context","osmId":126742863,"officialUrl":null,"center":[-309.7550048828125,4.809999942779541,-357.8300018310547],"bounds":[[-322.6600036621094,0,-366.57000732421875],[-296.8500061035156,9.619999885559082,-349.0899963378906]],"positionOffset":16845,"positionCount":360,"edgeOffset":17205,"edgeCount":252,"triangles":40,"simplificationErrorM":0,"buildingId":"osm-126742863","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22372213","name":"Kappa Alpha","osmId":22372213,"officialUrl":null,"center":[-261.81500244140625,5.550000190734863,-503.32000732421875],"bounds":[[-275.9800109863281,0,-511.4800109863281],[-247.64999389648438,11.100000381469727,-495.1600036621094]],"positionOffset":17457,"positionCount":684,"edgeOffset":18141,"edgeCount":384,"triangles":76,"simplificationErrorM":0,"buildingId":"osm-22372213","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479225","name":"Campus context","osmId":127479225,"officialUrl":null,"center":[-438.3800048828125,5.715000152587891,-212.52999877929688],"bounds":[[-450.80999755859375,0,-221.67999267578125],[-425.95001220703125,11.430000305175781,-203.3800048828125]],"positionOffset":18525,"positionCount":441,"edgeOffset":18966,"edgeCount":300,"triangles":49,"simplificationErrorM":0,"buildingId":"osm-127479225","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-27944825","name":"Campus context","osmId":27944825,"officialUrl":null,"center":[190.03499603271484,4.565000057220459,-237.63999938964844],"bounds":[[180.89999389648438,0,-247.58999633789062],[199.1699981689453,9.130000114440918,-227.69000244140625]],"positionOffset":19266,"positionCount":252,"edgeOffset":19518,"edgeCount":180,"triangles":28,"simplificationErrorM":0,"buildingId":"osm-27944825","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23434318","name":"Luella Massey Studio Theatre","osmId":23434318,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494530","center":[-353.7149963378906,4.119999885559082,-220.95999908447266],"bounds":[[-361.8500061035156,0,-233.44000244140625],[-345.5799865722656,8.239999771118164,-208.47999572753906]],"positionOffset":19698,"positionCount":198,"edgeOffset":19896,"edgeCount":132,"triangles":22,"simplificationErrorM":0,"buildingId":"campus:GM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494530","codes":["GM"]},{"id":"osm-1433584637","name":"Campus context","osmId":1433584637,"officialUrl":null,"center":[-402.6000061035156,5.090000152587891,-299.7949981689453],"bounds":[[-411.2200012207031,0,-310.7300109863281],[-393.9800109863281,10.180000305175781,-288.8599853515625]],"positionOffset":20028,"positionCount":225,"edgeOffset":20253,"edgeCount":156,"triangles":25,"simplificationErrorM":0,"buildingId":"osm-1433584637","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742862","name":"Campus context","osmId":126742862,"officialUrl":null,"center":[-265.8500061035156,5.21999979019165,-339.4149932861328],"bounds":[[-274.07000732421875,0,-350.5],[-257.6300048828125,10.4399995803833,-328.3299865722656]],"positionOffset":20409,"positionCount":360,"edgeOffset":20769,"edgeCount":252,"triangles":40,"simplificationErrorM":0,"buildingId":"osm-126742862","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-98271994","name":"Campus context","osmId":98271994,"officialUrl":null,"center":[-451.3900146484375,4.565000057220459,-341.90000915527344],"bounds":[[-459.6400146484375,0,-353.760009765625],[-443.1400146484375,9.130000114440918,-330.0400085449219]],"positionOffset":21021,"positionCount":468,"edgeOffset":21489,"edgeCount":324,"triangles":52,"simplificationErrorM":0,"buildingId":"osm-98271994","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479316","name":"Campus context","osmId":127479316,"officialUrl":null,"center":[-360.4100036621094,3.640000104904175,-364.3249969482422],"bounds":[[-371.44000244140625,0,-372.42999267578125],[-349.3800048828125,7.28000020980835,-356.2200012207031]],"positionOffset":21813,"positionCount":252,"edgeOffset":22065,"edgeCount":180,"triangles":28,"simplificationErrorM":0,"buildingId":"osm-127479316","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433587477","name":"Campus context","osmId":1433587477,"officialUrl":null,"center":[-402.88999938964844,4.190000057220459,-252.68000030517578],"bounds":[[-410.8699951171875,0,-264.07000732421875],[-394.9100036621094,8.380000114440918,-241.2899932861328]],"positionOffset":22245,"positionCount":351,"edgeOffset":22596,"edgeCount":246,"triangles":39,"simplificationErrorM":0,"buildingId":"osm-1433587477","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-802228283","name":"Campus context","osmId":802228283,"officialUrl":null,"center":[-377.25999450683594,8.319999694824219,-305.9700012207031],"bounds":[[-384.8699951171875,0,-317.25],[-369.6499938964844,16.639999389648438,-294.69000244140625]],"positionOffset":22842,"positionCount":306,"edgeOffset":23148,"edgeCount":216,"triangles":34,"simplificationErrorM":0,"buildingId":"osm-802228283","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584643","name":"Campus context","osmId":1433584643,"officialUrl":null,"center":[-438.989990234375,4.215000152587891,-346.23500061035156],"bounds":[[-446.8999938964844,0,-357.489990234375],[-431.0799865722656,8.430000305175781,-334.9800109863281]],"positionOffset":23364,"positionCount":414,"edgeOffset":23778,"edgeCount":288,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-1433584643","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1383198917","name":"Campus context","osmId":1383198917,"officialUrl":null,"center":[-408.9499969482422,4.699999809265137,-401.0299987792969],"bounds":[[-416.75,0,-411.80999755859375],[-401.1499938964844,9.399999618530273,-390.25]],"positionOffset":24066,"positionCount":441,"edgeOffset":24507,"edgeCount":300,"triangles":49,"simplificationErrorM":0,"buildingId":"osm-1383198917","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742861","name":"Campus context","osmId":126742861,"officialUrl":null,"center":[-278.8949890136719,4.59499979019165,-334.1000061035156],"bounds":[[-287.0199890136719,0,-343.9800109863281],[-270.7699890136719,9.1899995803833,-324.2200012207031]],"positionOffset":24807,"positionCount":387,"edgeOffset":25194,"edgeCount":252,"triangles":43,"simplificationErrorM":0,"buildingId":"osm-126742861","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584641","name":"Campus context","osmId":1433584641,"officialUrl":null,"center":[-426.625,4.184999942779541,-348.9499969482422],"bounds":[[-434.4700012207031,0,-359.7699890136719],[-418.7799987792969,8.369999885559082,-338.1300048828125]],"positionOffset":25446,"positionCount":252,"edgeOffset":25698,"edgeCount":168,"triangles":28,"simplificationErrorM":0,"buildingId":"osm-1433584641","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-802228282","name":"Campus context","osmId":802228282,"officialUrl":null,"center":[-389.375,5.534999847412109,-303.05499267578125],"bounds":[[-397.19000244140625,0,-313.3299865722656],[-381.55999755859375,11.069999694824219,-292.7799987792969]],"positionOffset":25866,"positionCount":306,"edgeOffset":26172,"edgeCount":204,"triangles":34,"simplificationErrorM":0,"buildingId":"osm-802228282","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584646","name":"Campus context","osmId":1433584646,"officialUrl":null,"center":[-403.9499969482422,4.585000038146973,-357.76499938964844],"bounds":[[-411.7099914550781,0,-368.20001220703125],[-396.19000244140625,9.170000076293945,-347.3299865722656]],"positionOffset":26376,"positionCount":333,"edgeOffset":26709,"edgeCount":228,"triangles":37,"simplificationErrorM":0,"buildingId":"osm-1433584646","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-98271987","name":"Campus context","osmId":98271987,"officialUrl":null,"center":[-415.7050018310547,4.914999961853027,-354.19500732421875],"bounds":[[-423.3699951171875,0,-364.4200134277344],[-408.0400085449219,9.829999923706055,-343.9700012207031]],"positionOffset":26937,"positionCount":306,"edgeOffset":27243,"edgeCount":216,"triangles":34,"simplificationErrorM":0,"buildingId":"osm-98271987","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479255","name":"Campus context","osmId":127479255,"officialUrl":null,"center":[-391.0550079345703,4.869999885559082,-257.07000732421875],"bounds":[[-398.4700012207031,0,-267.07000732421875],[-383.6400146484375,9.739999771118164,-247.07000732421875]],"positionOffset":27459,"positionCount":360,"edgeOffset":27819,"edgeCount":252,"triangles":40,"simplificationErrorM":0,"buildingId":"osm-127479255","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-731138650","name":"Campus context","osmId":731138650,"officialUrl":null,"center":[-202.08999633789062,4.309999942779541,450.1750030517578],"bounds":[[-209.30999755859375,0,439.9200134277344],[-194.8699951171875,8.619999885559082,460.42999267578125]],"positionOffset":28071,"positionCount":279,"edgeOffset":28350,"edgeCount":192,"triangles":31,"simplificationErrorM":0,"buildingId":"osm-731138650","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742252","name":"Campus context","osmId":126742252,"officialUrl":null,"center":[-324.6949920654297,4.599999904632568,-462.4250030517578],"bounds":[[-351.7099914550781,0,-474.0400085449219],[-297.67999267578125,9.199999809265137,-450.80999755859375]],"positionOffset":28542,"positionCount":477,"edgeOffset":29019,"edgeCount":342,"triangles":53,"simplificationErrorM":0,"buildingId":"osm-126742252","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479224","name":"Campus context","osmId":127479224,"officialUrl":null,"center":[-450.8300018310547,5.199999809265137,-243.43000030517578],"bounds":[[-459.67999267578125,0,-251.2100067138672],[-441.9800109863281,10.399999618530273,-235.64999389648438]],"positionOffset":29361,"positionCount":171,"edgeOffset":29532,"edgeCount":120,"triangles":19,"simplificationErrorM":0,"buildingId":"osm-127479224","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433587480","name":"Campus context","osmId":1433587480,"officialUrl":null,"center":[-362.8999938964844,3.4100000858306885,-214.86499786376953],"bounds":[[-369.7699890136719,0,-223.97999572753906],[-356.0299987792969,6.820000171661377,-205.75]],"positionOffset":29652,"positionCount":378,"edgeOffset":30030,"edgeCount":270,"triangles":42,"simplificationErrorM":0,"buildingId":"osm-1433587480","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-98271995","name":"Campus context","osmId":98271995,"officialUrl":null,"center":[-391.88499450683594,5.53000020980835,-359.5849914550781],"bounds":[[-398.5799865722656,0,-371.04998779296875],[-385.19000244140625,11.0600004196167,-348.1199951171875]],"positionOffset":30300,"positionCount":351,"edgeOffset":30651,"edgeCount":234,"triangles":39,"simplificationErrorM":0,"buildingId":"osm-98271995","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584648","name":"Campus context","osmId":1433584648,"officialUrl":null,"center":[-477.25,4.440000057220459,-342.6850128173828],"bounds":[[-488.5299987792969,0,-348.95001220703125],[-465.9700012207031,8.880000114440918,-336.4200134277344]],"positionOffset":30885,"positionCount":144,"edgeOffset":31029,"edgeCount":108,"triangles":16,"simplificationErrorM":0,"buildingId":"osm-1433584648","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742249","name":"Campus context","osmId":126742249,"officialUrl":null,"center":[-293.4049987792969,2.680000066757202,-437.6999969482422],"bounds":[[-299.82000732421875,0,-449.19000244140625],[-286.989990234375,5.360000133514404,-426.2099914550781]],"positionOffset":31137,"positionCount":252,"edgeOffset":31389,"edgeCount":180,"triangles":28,"simplificationErrorM":0,"buildingId":"osm-126742249","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433589636","name":"Campus context","osmId":1433589636,"officialUrl":null,"center":[-304.9149932861328,2.359999895095825,-185.79000091552734],"bounds":[[-315,0,-192.63999938964844],[-294.8299865722656,4.71999979019165,-178.94000244140625]],"positionOffset":31569,"positionCount":333,"edgeOffset":31902,"edgeCount":204,"triangles":37,"simplificationErrorM":0,"buildingId":"osm-1433589636","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479254","name":"Campus context","osmId":127479254,"officialUrl":null,"center":[-390.19000244140625,3.6700000762939453,-205.36499786376953],"bounds":[[-396.44000244140625,0,-215.3000030517578],[-383.94000244140625,7.340000152587891,-195.42999267578125]],"positionOffset":32106,"positionCount":279,"edgeOffset":32385,"edgeCount":192,"triangles":31,"simplificationErrorM":0,"buildingId":"osm-127479254","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433587479","name":"Campus context","osmId":1433587479,"officialUrl":null,"center":[-420.5800018310547,4.045000076293945,-253.3949966430664],"bounds":[[-428.2799987792969,0,-261.0199890136719],[-412.8800048828125,8.09000015258789,-245.77000427246094]],"positionOffset":32577,"positionCount":306,"edgeOffset":32883,"edgeCount":216,"triangles":34,"simplificationErrorM":0,"buildingId":"osm-1433587479","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479511","name":"Campus context","osmId":127479511,"officialUrl":null,"center":[-325.3999938964844,4.184999942779541,-252.94500732421875],"bounds":[[-336.25,0,-258.760009765625],[-314.54998779296875,8.369999885559082,-247.1300048828125]],"positionOffset":33099,"positionCount":459,"edgeOffset":33558,"edgeCount":300,"triangles":51,"simplificationErrorM":0,"buildingId":"osm-127479511","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479510","name":"Campus Coop","osmId":127479510,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494533","center":[-324.9250030517578,4.349999904632568,-244.14500427246094],"bounds":[[-334.9100036621094,0,-251.1300048828125],[-314.94000244140625,8.699999809265137,-237.16000366210938]],"positionOffset":33858,"positionCount":333,"edgeOffset":34191,"edgeCount":216,"triangles":37,"simplificationErrorM":0,"buildingId":"osm-127479510","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-804457478","name":"Electrometallurgy Lab","osmId":804457478,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494465","center":[125.36999893188477,3.450000047683716,311.69000244140625],"bounds":[[116.54000091552734,0,305.5299987792969],[134.1999969482422,6.900000095367432,317.8500061035156]],"positionOffset":34407,"positionCount":90,"edgeOffset":34497,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"campus:EL","identitySource":"https://map.utoronto.ca/?id=1809#!m/494465","codes":["EL"]},{"id":"osm-127479475","name":"Campus context","osmId":127479475,"officialUrl":null,"center":[-301.50999450683594,3.509999990463257,-179.8499984741211],"bounds":[[-312.25,0,-185.3300018310547],[-290.7699890136719,7.019999980926514,-174.3699951171875]],"positionOffset":34569,"positionCount":252,"edgeOffset":34821,"edgeCount":156,"triangles":28,"simplificationErrorM":0,"buildingId":"osm-127479475","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479260","name":"Campus context","osmId":127479260,"officialUrl":null,"center":[-380.77500915527344,4.889999866485596,-260.4449996948242],"bounds":[[-386.3900146484375,0,-269.67999267578125],[-375.1600036621094,9.779999732971191,-251.2100067138672]],"positionOffset":34977,"positionCount":225,"edgeOffset":35202,"edgeCount":132,"triangles":25,"simplificationErrorM":0,"buildingId":"osm-127479260","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-802228281","name":"Campus context","osmId":802228281,"officialUrl":null,"center":[-295.44500732421875,4.739999771118164,-490.4700012207031],"bounds":[[-300.9200134277344,0,-498.489990234375],[-289.9700012207031,9.479999542236328,-482.45001220703125]],"positionOffset":35334,"positionCount":225,"edgeOffset":35559,"edgeCount":162,"triangles":25,"simplificationErrorM":0,"buildingId":"osm-802228281","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479317","name":"Campus context","osmId":127479317,"officialUrl":null,"center":[-357.61000061035156,5.210000038146973,-355.2150115966797],"bounds":[[-366.3500061035156,0,-360.7900085449219],[-348.8699951171875,10.420000076293945,-349.6400146484375]],"positionOffset":35721,"positionCount":225,"edgeOffset":35946,"edgeCount":156,"triangles":25,"simplificationErrorM":0,"buildingId":"osm-127479317","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-74","name":"Campus context","osmId":null,"officialUrl":null,"center":[117.04499816894531,4.375,-128.4099998474121],"bounds":[[111.75,0,-136.11000061035156],[122.33999633789062,8.75,-120.70999908447266]],"positionOffset":36102,"positionCount":198,"edgeOffset":36300,"edgeCount":144,"triangles":22,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-74","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479253","name":"Campus context","osmId":127479253,"officialUrl":null,"center":[-383.70001220703125,3.3450000286102295,-210.4250030517578],"bounds":[[-388.70001220703125,0,-219.0500030517578],[-378.70001220703125,6.690000057220459,-201.8000030517578]],"positionOffset":36444,"positionCount":360,"edgeOffset":36804,"edgeCount":240,"triangles":40,"simplificationErrorM":0,"buildingId":"osm-127479253","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-76","name":"Campus context","osmId":null,"officialUrl":null,"center":[-362.11500549316406,3.430000066757202,-119.31000137329102],"bounds":[[-368.260009765625,0,-127.13999938964844],[-355.9700012207031,6.860000133514404,-111.4800033569336]],"positionOffset":37044,"positionCount":162,"edgeOffset":37206,"edgeCount":132,"triangles":18,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-76","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479257","name":"Campus context","osmId":127479257,"officialUrl":null,"center":[-372.5349884033203,3.890000104904175,-262.8699951171875],"bounds":[[-377.5199890136719,0,-270.80999755859375],[-367.54998779296875,7.78000020980835,-254.92999267578125]],"positionOffset":37338,"positionCount":144,"edgeOffset":37482,"edgeCount":108,"triangles":16,"simplificationErrorM":0,"buildingId":"osm-127479257","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-78","name":"Campus context","osmId":null,"officialUrl":null,"center":[-325.11000061035156,4.045000076293945,-235.88999938964844],"bounds":[[-332.92999267578125,0,-240.75],[-317.2900085449219,8.09000015258789,-231.02999877929688]],"positionOffset":37590,"positionCount":252,"edgeOffset":37842,"edgeCount":168,"triangles":28,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-78","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742251","name":"Campus context","osmId":126742251,"officialUrl":null,"center":[-298.5399932861328,3.509999990463257,-454.4750061035156],"bounds":[[-303.739990234375,0,-461.30999755859375],[-293.3399963378906,7.019999980926514,-447.6400146484375]],"positionOffset":38010,"positionCount":90,"edgeOffset":38100,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-126742251","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479284","name":"Campus context","osmId":127479284,"officialUrl":null,"center":[-433.8399963378906,2.565000057220459,-250.90999603271484],"bounds":[[-438.5299987792969,0,-255.52999877929688],[-429.1499938964844,5.130000114440918,-246.2899932861328]],"positionOffset":38172,"positionCount":198,"edgeOffset":38370,"edgeCount":132,"triangles":22,"simplificationErrorM":0,"buildingId":"osm-127479284","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742254","name":"Campus context","osmId":126742254,"officialUrl":null,"center":[-311.09498596191406,2.0950000286102295,-489.63999938964844],"bounds":[[-315.5799865722656,0,-493.69000244140625],[-306.6099853515625,4.190000057220459,-485.5899963378906]],"positionOffset":38502,"positionCount":90,"edgeOffset":38592,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-126742254","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23434831","name":"Pontifical Institute of Medieval Studies","osmId":23434831,"officialUrl":null,"center":[469,5.945000171661377,-365.53001403808594],"bounds":[[446.3999938964844,0,-395.6400146484375],[491.6000061035156,11.890000343322754,-335.4200134277344]],"positionOffset":38664,"positionCount":387,"edgeOffset":39051,"edgeCount":264,"triangles":43,"simplificationErrorM":0,"buildingId":"osm-23434831","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584653","name":"Campus context","osmId":1433584653,"officialUrl":null,"center":[-489.6600036621094,3.940000057220459,-379.75],"bounds":[[-501.6300048828125,0,-387.7099914550781],[-477.69000244140625,7.880000114440918,-371.7900085449219]],"positionOffset":39315,"positionCount":522,"edgeOffset":39837,"edgeCount":318,"triangles":58,"simplificationErrorM":0,"buildingId":"osm-1433584653","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584655","name":"Campus context","osmId":1433584655,"officialUrl":null,"center":[-451.2899932861328,6.880000114440918,-388.2550048828125],"bounds":[[-459.3399963378906,0,-400.8800048828125],[-443.239990234375,13.760000228881836,-375.6300048828125]],"positionOffset":40155,"positionCount":630,"edgeOffset":40785,"edgeCount":420,"triangles":70,"simplificationErrorM":0,"buildingId":"osm-1433584655","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479373","name":"Campus context","osmId":127479373,"officialUrl":null,"center":[-423.01499938964844,4,-397.0699920654297],"bounds":[[-430.8699951171875,0,-409.8599853515625],[-415.1600036621094,8,-384.2799987792969]],"positionOffset":41205,"positionCount":567,"edgeOffset":41772,"edgeCount":390,"triangles":63,"simplificationErrorM":0,"buildingId":"osm-127479373","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23434610","name":"703 Spadina Avenue","osmId":23434610,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494542","center":[-484.2200012207031,4.204999923706055,-370.90501403808594],"bounds":[[-496.44000244140625,0,-377.8900146484375],[-472,8.40999984741211,-363.9200134277344]],"positionOffset":42162,"positionCount":495,"edgeOffset":42657,"edgeCount":336,"triangles":55,"simplificationErrorM":0,"buildingId":"campus:IA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494542","codes":["IA"]},{"id":"osm-1383198918","name":"Campus context","osmId":1383198918,"officialUrl":null,"center":[-463.88999938964844,6.565000057220459,-383.1199951171875],"bounds":[[-471.4100036621094,0,-394.1600036621094],[-456.3699951171875,13.130000114440918,-372.0799865722656]],"positionOffset":42993,"positionCount":414,"edgeOffset":43407,"edgeCount":288,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-1383198918","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479370","name":"Campus context","osmId":127479370,"officialUrl":null,"center":[-437.0299987792969,4.699999809265137,-392.1499938964844],"bounds":[[-444.7900085449219,0,-404.739990234375],[-429.2699890136719,9.399999618530273,-379.55999755859375]],"positionOffset":43695,"positionCount":711,"edgeOffset":44406,"edgeCount":474,"triangles":79,"simplificationErrorM":0,"buildingId":"osm-127479370","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479397","name":"Campus context","osmId":127479397,"officialUrl":null,"center":[-493.23500061035156,4.829999923706055,-392.6000061035156],"bounds":[[-505.5,0,-401.19000244140625],[-480.9700012207031,9.65999984741211,-384.010009765625]],"positionOffset":44880,"positionCount":495,"edgeOffset":45375,"edgeCount":312,"triangles":55,"simplificationErrorM":0,"buildingId":"osm-127479397","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-685","name":"Campus context","osmId":null,"officialUrl":null,"center":[-495.89500427246094,3.4200000762939453,-403.9750061035156],"bounds":[[-504.6300048828125,0,-409.3500061035156],[-487.1600036621094,6.840000152587891,-398.6000061035156]],"positionOffset":45687,"positionCount":360,"edgeOffset":46047,"edgeCount":216,"triangles":40,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-685","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1383202632","name":"Oak House","osmId":1383202632,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055926","center":[-526.5600128173828,5.235000133514404,-268.26000213623047],"bounds":[[-549.27001953125,0,-292.1300048828125],[-503.8500061035156,10.470000267028809,-244.38999938964844]],"positionOffset":46263,"positionCount":2250,"edgeOffset":48513,"edgeCount":1542,"triangles":250,"simplificationErrorM":0,"buildingId":"osm-1383202632","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204342862","name":"Campus context","osmId":204342862,"officialUrl":null,"center":[-346.2749938964844,4.010000228881836,-312.35499572753906],"bounds":[[-359.80999755859375,0,-322.6499938964844],[-332.739990234375,8.020000457763672,-302.05999755859375]],"positionOffset":50055,"positionCount":873,"edgeOffset":50928,"edgeCount":552,"triangles":97,"simplificationErrorM":0,"buildingId":"osm-204342862","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584639","name":"Campus context","osmId":1433584639,"officialUrl":null,"center":[-419.72999572753906,4.505000114440918,-294.625],"bounds":[[-432.1300048828125,0,-306.989990234375],[-407.3299865722656,9.010000228881836,-282.260009765625]],"positionOffset":51480,"positionCount":549,"edgeOffset":52029,"edgeCount":372,"triangles":61,"simplificationErrorM":0,"buildingId":"osm-1433584639","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204343782","name":"Campus context","osmId":204343782,"officialUrl":null,"center":[-363.5400085449219,5.085000038146973,-303.19500732421875],"bounds":[[-369.1700134277344,0,-309.3900146484375],[-357.9100036621094,10.170000076293945,-297]],"positionOffset":52401,"positionCount":198,"edgeOffset":52599,"edgeCount":132,"triangles":22,"simplificationErrorM":0,"buildingId":"osm-204343782","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479509","name":"Campus context","osmId":127479509,"officialUrl":null,"center":[-329.2050018310547,4.940000057220459,-264.12500762939453],"bounds":[[-341.19000244140625,0,-274.7300109863281],[-317.2200012207031,9.880000114440918,-253.52000427246094]],"positionOffset":52731,"positionCount":855,"edgeOffset":53586,"edgeCount":558,"triangles":95,"simplificationErrorM":0,"buildingId":"osm-127479509","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479259","name":"Campus context","osmId":127479259,"officialUrl":null,"center":[-365.48500061035156,3.890000104904175,-265.3050079345703],"bounds":[[-370.4800109863281,0,-273.1700134277344],[-360.489990234375,7.78000020980835,-257.44000244140625]],"positionOffset":54144,"positionCount":468,"edgeOffset":54612,"edgeCount":324,"triangles":52,"simplificationErrorM":0,"buildingId":"osm-127479259","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479258","name":"Campus context","osmId":127479258,"officialUrl":null,"center":[-375.1600036621094,4.184999942779541,-209.94000244140625],"bounds":[[-381.17999267578125,0,-219.0500030517578],[-369.1400146484375,8.369999885559082,-200.8300018310547]],"positionOffset":54936,"positionCount":414,"edgeOffset":55350,"edgeCount":264,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-127479258","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23434099","name":"Sussex Court","osmId":23434099,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494534","center":[-341.11000061035156,12.0600004196167,-276.1700134277344],"bounds":[[-361.2699890136719,0,-289.1700134277344],[-320.95001220703125,24.1200008392334,-263.1700134277344]],"positionOffset":55614,"positionCount":1080,"edgeOffset":56694,"edgeCount":690,"triangles":120,"simplificationErrorM":0,"buildingId":"campus:SC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494534","codes":["SC"]},{"id":"osm-43804428","name":"Saint Thomas's Anglican Church","osmId":43804428,"officialUrl":null,"center":[-312.7099914550781,4.90500020980835,-400.44000244140625],"bounds":[[-335.2699890136719,0,-416.6000061035156],[-290.1499938964844,9.8100004196167,-384.2799987792969]],"positionOffset":57384,"positionCount":1674,"edgeOffset":59058,"edgeCount":1080,"triangles":186,"simplificationErrorM":0,"buildingId":"osm-43804428","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1318933933","name":"Campus context","osmId":1318933933,"officialUrl":null,"center":[-290.1549987792969,3.8299999237060547,-392.9150085449219],"bounds":[[-306.67999267578125,0,-407.9100036621094],[-273.6300048828125,7.659999847412109,-377.9200134277344]],"positionOffset":60138,"positionCount":387,"edgeOffset":60525,"edgeCount":264,"triangles":43,"simplificationErrorM":0,"buildingId":"osm-1318933933","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-704","name":"Campus context","osmId":null,"officialUrl":null,"center":[-291.19000244140625,3.325000047683716,-407.6699981689453],"bounds":[[-293.05999755859375,0,-412.4700012207031],[-289.32000732421875,6.650000095367432,-402.8699951171875]],"positionOffset":60789,"positionCount":90,"edgeOffset":60879,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-704","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22372214","name":"162 St. George Street","osmId":22372214,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494555","center":[-269.5800018310547,4.699999809265137,-524.9949951171875],"bounds":[[-285.3399963378906,0,-537.3800048828125],[-253.82000732421875,9.399999618530273,-512.6099853515625]],"positionOffset":60951,"positionCount":666,"edgeOffset":61617,"edgeCount":420,"triangles":74,"simplificationErrorM":0,"buildingId":"campus:CO","identitySource":"https://map.utoronto.ca/?id=1809#!m/494555","codes":["CO"]},{"id":"osm-27801041","name":"Ernescliff College","osmId":27801041,"officialUrl":null,"center":[-263.875,5.114999771118164,-460.7900085449219],"bounds":[[-285.8399963378906,0,-477.07000732421875],[-241.91000366210938,10.229999542236328,-444.510009765625]],"positionOffset":62037,"positionCount":648,"edgeOffset":62685,"edgeCount":354,"triangles":72,"simplificationErrorM":0,"buildingId":"osm-27801041","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22372217","name":"Centre for Industrial Relations and Human Resources","osmId":22372217,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494551","center":[-194.25,4.425000190734863,-484.13499450683594],"bounds":[[-207.61000061035156,0,-497.6199951171875],[-180.88999938964844,8.850000381469727,-470.6499938964844]],"positionOffset":63039,"positionCount":711,"edgeOffset":63750,"edgeCount":468,"triangles":79,"simplificationErrorM":0,"buildingId":"osm-22372217","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23113405","name":"Gerald Larkin Building","osmId":23113405,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494575","center":[-17.365000247955322,5.909999847412109,-373.0799865722656],"bounds":[[-42.790000915527344,0,-392.04998779296875],[8.0600004196167,11.819999694824219,-354.1099853515625]],"positionOffset":64218,"positionCount":198,"edgeOffset":64416,"edgeCount":144,"triangles":22,"simplificationErrorM":0,"buildingId":"campus:LA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494575","codes":["LA"]},{"id":"osm-27291427","name":"George Ignatieff Theatre","osmId":27291427,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494577","center":[-32.52499961853027,2.190000057220459,-392.739990234375],"bounds":[[-43.54999923706055,0,-403.5799865722656],[-21.5,4.380000114440918,-381.8999938964844]],"positionOffset":64560,"positionCount":333,"edgeOffset":64893,"edgeCount":234,"triangles":37,"simplificationErrorM":0,"buildingId":"campus:GI","identitySource":"https://map.utoronto.ca/?id=1809#!m/494577","codes":["GI"]},{"id":"osm-8033844","name":"Louis B. Stewart Observatory","osmId":8033844,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494516","center":[173.98500061035156,5.360000133514404,-99.89999771118164],"bounds":[[163.1199951171875,0,-110.12999725341797],[184.85000610351562,10.720000267028809,-89.66999816894531]],"positionOffset":65127,"positionCount":423,"edgeOffset":65550,"edgeCount":294,"triangles":47,"simplificationErrorM":0,"buildingId":"campus:SO","identitySource":"https://map.utoronto.ca/?id=1809#!m/494516","codes":["SO"]},{"id":"osm-8032167","name":"University College","osmId":8032167,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055922","center":[75.2650021314621,14.885000228881836,-59.73000168800354],"bounds":[[2.509999990463257,0,-120.2300033569336],[148.02000427246094,29.770000457763672,0.7699999809265137]],"positionOffset":65844,"positionCount":9747,"edgeOffset":75591,"edgeCount":4812,"triangles":1083,"simplificationErrorM":0,"buildingId":"campus:UC","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055922","codes":["UC"]},{"id":"osm-22775068","name":"University College Union","osmId":22775068,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055923","center":[-63.354997634887695,6.800000190734863,-117.79500198364258],"bounds":[[-90.58999633789062,0,-133.49000549316406],[-36.119998931884766,13.600000381469727,-102.0999984741211]],"positionOffset":80403,"positionCount":549,"edgeOffset":80952,"edgeCount":372,"triangles":61,"simplificationErrorM":0,"buildingId":"campus:UP","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055923","codes":["UP"]},{"id":"osm-22597592","name":"School of Graduate Studies - Office of the Dean","osmId":22597592,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494506","center":[-28.480000019073486,5.820000171661377,34.22500038146973],"bounds":[[-43.75,0,24.59000015258789],[-13.210000038146973,11.640000343322754,43.86000061035156]],"positionOffset":81324,"positionCount":945,"edgeOffset":82269,"edgeCount":624,"triangles":105,"simplificationErrorM":0,"buildingId":"osm-22597592","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22597593","name":"Macdonald-Mullard House","osmId":22597593,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494504","center":[-15.90999984741211,5.164999961853027,56.05000114440918],"bounds":[[-31.81999969482422,0,43.40999984741211],[0,10.329999923706055,68.69000244140625]],"positionOffset":82893,"positionCount":720,"edgeOffset":83613,"edgeCount":486,"triangles":80,"simplificationErrorM":0,"buildingId":"osm-22597593","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-739","name":"Campus context","osmId":null,"officialUrl":null,"center":[-7.254999995231628,4.755000114440918,60.915000915527344],"bounds":[[-12,0,58.9900016784668],[-2.509999990463257,9.510000228881836,62.84000015258789]],"positionOffset":84099,"positionCount":90,"edgeOffset":84189,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-739","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401957","name":"Physical Geography Building","osmId":15401957,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494483","center":[27.9399995803833,7.554999828338623,213.6699981689453],"bounds":[[12.579999923706055,0,200.6199951171875],[43.29999923706055,15.109999656677246,226.72000122070312]],"positionOffset":84261,"positionCount":306,"edgeOffset":84567,"edgeCount":216,"triangles":34,"simplificationErrorM":0,"buildingId":"campus:PG","identitySource":"https://map.utoronto.ca/?id=1809#!m/494483","codes":["PG"]},{"id":"osm-23433288","name":"Engineering Annex","osmId":23433288,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494468","center":[114.59500503540039,5.440000057220459,298.4199981689453],"bounds":[[93.62000274658203,0,283.3399963378906],[135.57000732421875,10.880000114440918,313.5]],"positionOffset":84783,"positionCount":540,"edgeOffset":85323,"edgeCount":306,"triangles":60,"simplificationErrorM":0,"buildingId":"campus:EA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494468","codes":["EA"]},{"id":"osm-354180331","name":"Mechanical Engineering Building","osmId":354180331,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494474","center":[244.19500732421875,10.204999923706055,245.06999969482422],"bounds":[[209.16000366210938,0,204.0800018310547],[279.2300109863281,20.40999984741211,286.05999755859375]],"positionOffset":85629,"positionCount":2079,"edgeOffset":87708,"edgeCount":1302,"triangles":231,"simplificationErrorM":0,"buildingId":"campus:MC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494474","codes":["MC"]},{"id":"osm-23433306","name":"Haultain Building","osmId":23433306,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494475","center":[255.87999725341797,10.045000076293945,248.81000518798828],"bounds":[[231.0500030517578,0,218.61000061035156],[280.7099914550781,20.09000015258789,279.010009765625]],"positionOffset":89010,"positionCount":801,"edgeOffset":89811,"edgeCount":522,"triangles":89,"simplificationErrorM":0,"buildingId":"campus:HA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494475","codes":["HA"]},{"id":"osm-240330043","name":"Fitzgerald Building","osmId":240330043,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494479","center":[363.6999969482422,10.260000228881836,239.28499603271484],"bounds":[[335.0899963378906,0,201.75999450683594],[392.30999755859375,20.520000457763672,276.80999755859375]],"positionOffset":90333,"positionCount":2421,"edgeOffset":92754,"edgeCount":1464,"triangles":269,"simplificationErrorM":0,"buildingId":"campus:FG","identitySource":"https://map.utoronto.ca/?id=1809#!m/494479","codes":["FG"]},{"id":"osm-23433608","name":"McMurrich Building","osmId":23433608,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494500","center":[314.5349884033203,10.395000457763672,110.57500457763672],"bounds":[[296.989990234375,0,78.41000366210938],[332.0799865722656,20.790000915527344,142.74000549316406]],"positionOffset":94218,"positionCount":1233,"edgeOffset":95451,"edgeCount":726,"triangles":137,"simplificationErrorM":0,"buildingId":"campus:MR","identitySource":"https://map.utoronto.ca/?id=1809#!m/494500","codes":["MR"]},{"id":"osm-23433615","name":"Medical Sciences Building","osmId":23433615,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494491","center":[278.0999984741211,23,163.15500259399414],"bounds":[[181.8300018310547,0,116.51000213623047],[374.3699951171875,46,209.8000030517578]],"positionOffset":96177,"positionCount":3600,"edgeOffset":99777,"edgeCount":2172,"triangles":400,"simplificationErrorM":0,"buildingId":"campus:MS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494491","codes":["MS"]},{"id":"osm-988615299","name":"Medical Sciences Building","osmId":988615299,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494491","center":[273.2000045776367,6.304999828338623,103.43499755859375],"bounds":[[250.97999572753906,0,86.7699966430664],[295.4200134277344,12.609999656677246,120.0999984741211]],"positionOffset":101949,"positionCount":495,"edgeOffset":102444,"edgeCount":336,"triangles":55,"simplificationErrorM":0,"buildingId":"campus:MS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494491","codes":["MS"]},{"id":"osm-23433971","name":"Gerstein / Canadiana complex","osmId":23433971,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494505","center":[304.2099914550781,3.755000114440918,43.39000129699707],"bounds":[[299.3999938964844,0,38.130001068115234],[309.0199890136719,7.510000228881836,48.650001525878906]],"positionOffset":102780,"positionCount":144,"edgeOffset":102924,"edgeCount":108,"triangles":16,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494505","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-789","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[265.98500061035156,8.630000114440918,-13.574999809265137],"bounds":[[250.22000122070312,0,-43.279998779296875],[281.75,17.260000228881836,16.1299991607666]],"positionOffset":103032,"positionCount":495,"edgeOffset":103527,"edgeCount":342,"triangles":55,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-790","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[271.00498962402344,10.6850004196167,41.755001068115234],"bounds":[[266.42999267578125,0,37.220001220703125],[275.5799865722656,21.3700008392334,46.290000915527344]],"positionOffset":103869,"positionCount":198,"edgeOffset":104067,"edgeCount":132,"triangles":22,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-791","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[264.1650085449219,2.134999990463257,58.10999870300293],"bounds":[[258.260009765625,0,50.119998931884766],[270.07000732421875,4.269999980926514,66.0999984741211]],"positionOffset":104199,"positionCount":684,"edgeOffset":104883,"edgeCount":372,"triangles":76,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-792","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[276.17000579833984,7.324999809265137,30.919998168945312],"bounds":[[227.61000061035156,0,-21],[324.7300109863281,14.649999618530273,82.83999633789062]],"positionOffset":105255,"positionCount":2439,"edgeOffset":107694,"edgeCount":1398,"triangles":271,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-793","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[266.4350051879883,6.639999866485596,24.474998474121094],"bounds":[[208.13999938964844,0,-33.88999938964844],[324.7300109863281,13.279999732971191,82.83999633789062]],"positionOffset":109092,"positionCount":1656,"edgeOffset":110748,"edgeCount":1020,"triangles":184,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-794","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[231.25499725341797,4.989999771118164,2.450000762939453],"bounds":[[208.13999938964844,0,-33.88999938964844],[254.3699951171875,9.979999542236328,38.790000915527344]],"positionOffset":111768,"positionCount":981,"edgeOffset":112749,"edgeCount":510,"triangles":109,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-795","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[264.1650085449219,2.134999990463257,58.10999870300293],"bounds":[[258.260009765625,0,50.119998931884766],[270.07000732421875,4.269999980926514,66.0999984741211]],"positionOffset":113259,"positionCount":684,"edgeOffset":113943,"edgeCount":372,"triangles":76,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-796","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[252.49501037597656,8.220000267028809,1.8249998092651367],"bounds":[[245.82000732421875,0,-10.930000305175781],[259.1700134277344,16.440000534057617,14.579999923706055]],"positionOffset":114315,"positionCount":90,"edgeOffset":114405,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"osm-14748487","name":"Cody Hall","osmId":14748487,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494489","center":[-56.63999938964844,6.789999961853027,186.63499450683594],"bounds":[[-85.27999877929688,0,165.0399932861328],[-28,13.579999923706055,208.22999572753906]],"positionOffset":114477,"positionCount":1386,"edgeOffset":115863,"edgeCount":834,"triangles":154,"simplificationErrorM":0,"buildingId":"osm-14748487","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1466904837","name":"Campus context","osmId":1466904837,"officialUrl":null,"center":[-128.4550018310547,1.4450000524520874,102.36999893188477],"bounds":[[-135,0,95.95999908447266],[-121.91000366210938,2.890000104904175,108.77999877929688]],"positionOffset":116697,"positionCount":306,"edgeOffset":117003,"edgeCount":216,"triangles":34,"simplificationErrorM":0,"buildingId":"osm-1466904837","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1428103037","name":"McLennan Physical Laboratories","osmId":1428103037,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494490","center":[-129.1300048828125,34.75,172.5250015258789],"bounds":[[-173.4600067138672,0,109.44999694824219],[-84.80000305175781,69.5,235.60000610351562]],"positionOffset":117219,"positionCount":7263,"edgeOffset":124482,"edgeCount":5172,"triangles":807,"simplificationErrorM":0.499,"buildingId":"campus:MP","identitySource":"https://map.utoronto.ca/?id=1809#!m/494490","codes":["MP"]},{"id":"Multipatch_50H_NORTH-803","name":"Campus context","osmId":null,"officialUrl":null,"center":[-150.37999725341797,1.3799999952316284,-71.68000030517578],"bounds":[[-153.92999267578125,0,-76.06999969482422],[-146.8300018310547,2.759999990463257,-67.29000091552734]],"positionOffset":129654,"positionCount":90,"edgeOffset":129744,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-803","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204343980","name":"Campus context","osmId":204343980,"officialUrl":null,"center":[-378.5299987792969,3.640000104904175,-168.60499572753906],"bounds":[[-384.2200012207031,0,-178.4199981689453],[-372.8399963378906,7.28000020980835,-158.7899932861328]],"positionOffset":129816,"positionCount":441,"edgeOffset":130257,"edgeCount":288,"triangles":49,"simplificationErrorM":0,"buildingId":"osm-204343980","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-805","name":"Campus context","osmId":null,"officialUrl":null,"center":[-348.7799987792969,3.369999885559082,-121.72000122070312],"bounds":[[-357.32000732421875,0,-131.8300018310547],[-340.239990234375,6.739999771118164,-111.61000061035156]],"positionOffset":130545,"positionCount":387,"edgeOffset":130932,"edgeCount":252,"triangles":43,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-805","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-806","name":"Campus context","osmId":null,"officialUrl":null,"center":[-335.0399932861328,3.299999952316284,-125.83999633789062],"bounds":[[-344.989990234375,0,-135.58999633789062],[-325.0899963378906,6.599999904632568,-116.08999633789062]],"positionOffset":131184,"positionCount":855,"edgeOffset":132039,"edgeCount":582,"triangles":95,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-806","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20319809","name":"Faculty Club","osmId":20319809,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494501","center":[-297.0199890136719,4.224999904632568,133.06000137329102],"bounds":[[-311.67999267578125,0,113.81999969482422],[-282.3599853515625,8.449999809265137,152.3000030517578]],"positionOffset":132621,"positionCount":342,"edgeOffset":132963,"edgeCount":234,"triangles":38,"simplificationErrorM":0,"buildingId":"osm-20319809","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401968","name":"Centre for Urban and Community Studies","osmId":15401968,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494452","center":[-224.94499969482422,6.605000019073486,455.4550018310547],"bounds":[[-244.72000122070312,0,436.760009765625],[-205.1699981689453,13.210000038146973,474.1499938964844]],"positionOffset":133197,"positionCount":225,"edgeOffset":133422,"edgeCount":144,"triangles":25,"simplificationErrorM":0,"buildingId":"osm-15401968","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23436210","name":"Jesuits in English Canada","osmId":23436210,"officialUrl":null,"center":[513.5299835205078,4.014999866485596,-227.44499969482422],"bounds":[[501.6499938964844,0,-238.11000061035156],[525.4099731445312,8.029999732971191,-216.77999877929688]],"positionOffset":133566,"positionCount":1089,"edgeOffset":134655,"edgeCount":714,"triangles":121,"simplificationErrorM":0,"buildingId":"osm-23436210","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-8932810","name":"Muzzo Family Alumni Hall","osmId":8932810,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494578","center":[532.0150146484375,9.75,-283.4350128173828],"bounds":[[512.0700073242188,0,-305.9800109863281],[551.9600219726562,19.5,-260.8900146484375]],"positionOffset":135369,"positionCount":1737,"edgeOffset":137106,"edgeCount":954,"triangles":193,"simplificationErrorM":0,"buildingId":"campus:AH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494578","codes":["AH"]},{"id":"osm-8027952","name":"John M. Kelly Library - St. Michael’s College","osmId":8027952,"officialUrl":null,"center":[582.5050048828125,9.895000457763672,-293.69500732421875],"bounds":[[551.260009765625,0,-324.9200134277344],[613.75,19.790000915527344,-262.4700012207031]],"positionOffset":138060,"positionCount":486,"edgeOffset":138546,"edgeCount":324,"triangles":54,"simplificationErrorM":0,"buildingId":"osm-8027952","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-8810864","name":"Carr Hall","osmId":8810864,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494580","center":[508.49000549316406,8.390000343322754,-335.0899963378906],"bounds":[[481.8399963378906,0,-350.3699951171875],[535.1400146484375,16.780000686645508,-319.80999755859375]],"positionOffset":138870,"positionCount":927,"edgeOffset":139797,"edgeCount":594,"triangles":103,"simplificationErrorM":0,"buildingId":"campus:CR","identitySource":"https://map.utoronto.ca/?id=1809#!m/494580","codes":["CR"]},{"id":"osm-23436644","name":"Loretto College","osmId":23436644,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494597","center":[537.9250030517578,12.199999809265137,-574.5950012207031],"bounds":[[502.8299865722656,0,-594.5499877929688],[573.02001953125,24.399999618530273,-554.6400146484375]],"positionOffset":140391,"positionCount":918,"edgeOffset":141309,"edgeCount":600,"triangles":102,"simplificationErrorM":0,"buildingId":"campus:LC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494597","codes":["LC"]},{"id":"osm-23436633","name":"Rowell Jackman Hall","osmId":23436633,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494606","center":[473.01499938964844,13.75,-577.8399963378906],"bounds":[[449.4200134277344,0,-609.4299926757812],[496.6099853515625,27.5,-546.25]],"positionOffset":141909,"positionCount":1332,"edgeOffset":143241,"edgeCount":864,"triangles":148,"simplificationErrorM":0,"buildingId":"campus:RJ","identitySource":"https://map.utoronto.ca/?id=1809#!m/494606","codes":["RJ"]},{"id":"osm-8111900","name":"E. J. Pratt Library","osmId":8111900,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/959687","center":[435.9700012207031,7.300000190734863,-454.8000030517578],"bounds":[[414.3800048828125,0,-477.4599914550781],[457.55999755859375,14.600000381469727,-432.1400146484375]],"positionOffset":144105,"positionCount":468,"edgeOffset":144573,"edgeCount":360,"triangles":52,"simplificationErrorM":0,"buildingId":"campus:PR","identitySource":"https://map.utoronto.ca/?id=1809#!m/959687","codes":["PR"]},{"id":"osm-23436616","name":"Goldring Student Centre","osmId":23436616,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494608","center":[342.1549987792969,5.184999942779541,-611.9149780273438],"bounds":[[306.32000732421875,0,-638.0399780273438],[377.989990234375,10.369999885559082,-585.7899780273438]],"positionOffset":144933,"positionCount":990,"edgeOffset":145923,"edgeCount":648,"triangles":110,"simplificationErrorM":0,"buildingId":"campus:GC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494608","codes":["GC"]},{"id":"osm-10334996","name":"371 Bloor Street West","osmId":10334996,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494550","center":[-460.57000732421875,11.350000381469727,-458.3199920654297],"bounds":[[-528.1900024414062,0,-509.79998779296875],[-392.95001220703125,22.700000762939453,-406.8399963378906]],"positionOffset":146571,"positionCount":7605,"edgeOffset":154176,"edgeCount":4896,"triangles":845,"simplificationErrorM":0.492,"buildingId":"campus:FE","identitySource":"https://map.utoronto.ca/?id=1809#!m/494550","codes":["FE"]},{"id":"osm-1461363247","name":"Schwartz Reisman Innovation Campus","osmId":1461363247,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/514444","center":[604.5199890136719,32.400001525878906,195.69499969482422],"bounds":[[572,0,168.6699981689453],[637.0399780273438,64.80000305175781,222.72000122070312]],"positionOffset":159072,"positionCount":1251,"edgeOffset":160323,"edgeCount":708,"triangles":139,"simplificationErrorM":0,"buildingId":"osm-1461363247","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-12000960","name":"Rotman School of Management","osmId":12000960,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494538","center":[-130.21999740600586,19.850000381469727,-306.87000274658203],"bounds":[[-169.5399932861328,0,-371.19000244140625],[-90.9000015258789,39.70000076293945,-242.5500030517578]],"positionOffset":161031,"positionCount":220653,"edgeOffset":381684,"edgeCount":141054,"triangles":24517,"simplificationErrorM":0.492,"buildingId":"campus:RT","identitySource":"https://map.utoronto.ca/?id=1809#!m/494538","codes":["RT"]},{"id":"osm-217103112","name":"Campus context","osmId":217103112,"officialUrl":null,"center":[537.6449890136719,9.850000381469727,-588.6999816894531],"bounds":[[531.6699829101562,0,-594.5499877929688],[543.6199951171875,19.700000762939453,-582.8499755859375]],"positionOffset":522738,"positionCount":90,"edgeOffset":522828,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-217103112","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-1111","name":"Hart House","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494521","center":[179.56499862670898,16.5,-179.36499786376953],"bounds":[[117.31999969482422,0,-226.5500030517578],[241.80999755859375,33,-132.17999267578125]],"positionOffset":522900,"positionCount":2907,"edgeOffset":525807,"edgeCount":2130,"triangles":323,"simplificationErrorM":0,"buildingId":"campus:HH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494521","codes":["HH"]},{"id":"Multipatch_50H_NORTH-1112","name":"Campus context","osmId":null,"officialUrl":null,"center":[143.38999938964844,8.5,-238.37999725341797],"bounds":[[95.33000183105469,0,-277.04998779296875],[191.4499969482422,17,-199.7100067138672]],"positionOffset":527937,"positionCount":2511,"edgeOffset":530448,"edgeCount":1686,"triangles":279,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-1112","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204323317","name":"Emmanuel College","osmId":204323317,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494601","center":[313.5449981689453,10,-513.8499908447266],"bounds":[[279.7799987792969,0,-557.219970703125],[347.30999755859375,20,-470.4800109863281]],"positionOffset":532134,"positionCount":999,"edgeOffset":533133,"edgeCount":690,"triangles":111,"simplificationErrorM":0,"buildingId":"campus:EM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494601","codes":["EM"]},{"id":"osm-12873892","name":"Isabel Bader Theatre","osmId":12873892,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494605","center":[347.2050018310547,7.199999809265137,-554.9950256347656],"bounds":[[324.82000732421875,0,-573.6500244140625],[369.5899963378906,14.399999618530273,-536.3400268554688]],"positionOffset":533823,"positionCount":7191,"edgeOffset":541014,"edgeCount":4866,"triangles":799,"simplificationErrorM":0.049,"buildingId":"campus:BT","identitySource":"https://map.utoronto.ca/?id=1809#!m/494605","codes":["BT"]},{"id":"osm-204323029","name":"Victoria College","osmId":204323029,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494602","center":[381.2949981689453,24,-520.8300018310547],"bounds":[[356.32000732421875,0,-542.6199951171875],[406.2699890136719,48,-499.0400085449219]],"positionOffset":545880,"positionCount":999,"edgeOffset":546879,"edgeCount":684,"triangles":111,"simplificationErrorM":0,"buildingId":"campus:VC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494602","codes":["VC"]},{"id":"osm-12873850","name":"Burwash Hall","osmId":12873850,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494607","center":[430.7749938964844,8.505000114440918,-513.3000183105469],"bounds":[[370.0299987792969,0,-598.780029296875],[491.5199890136719,17.010000228881836,-427.82000732421875]],"positionOffset":547563,"positionCount":6066,"edgeOffset":553629,"edgeCount":4320,"triangles":674,"simplificationErrorM":0,"buildingId":"campus:BW","identitySource":"https://map.utoronto.ca/?id=1809#!m/494607","codes":["BW"]},{"id":"osm-30430629","name":"77 Charles West","osmId":30430629,"officialUrl":null,"center":[515.9450073242188,31.700000762939453,-605.0050048828125],"bounds":[[485.6099853515625,0,-628.27001953125],[546.280029296875,63.400001525878906,-581.739990234375]],"positionOffset":557949,"positionCount":82944,"edgeOffset":640893,"edgeCount":47814,"triangles":9216,"simplificationErrorM":0.491,"buildingId":"osm-30430629","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-30430627","name":"Law House","osmId":30430627,"officialUrl":null,"center":[548.1099853515625,5.5,-623.5050048828125],"bounds":[[539.5,0,-632.5599975585938],[556.719970703125,11,-614.4500122070312]],"positionOffset":688707,"positionCount":648,"edgeOffset":689355,"edgeCount":486,"triangles":72,"simplificationErrorM":0,"buildingId":"osm-30430627","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-991956441","name":"Campus context","osmId":991956441,"officialUrl":null,"center":[608.0449829101562,6.675000190734863,-499.93499755859375],"bounds":[[584.5499877929688,0,-511.19000244140625],[631.5399780273438,13.350000381469727,-488.67999267578125]],"positionOffset":689841,"positionCount":21384,"edgeOffset":711225,"edgeCount":15210,"triangles":2376,"simplificationErrorM":0.491,"buildingId":"osm-991956441","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401924","name":"St. Basil's Church","osmId":15401924,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494593","center":[632.2799987792969,23,-463.44500732421875],"bounds":[[602.8499755859375,0,-489.2300109863281],[661.7100219726562,46,-437.6600036621094]],"positionOffset":726435,"positionCount":1206,"edgeOffset":727641,"edgeCount":936,"triangles":134,"simplificationErrorM":0,"buildingId":"campus:BS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494593","codes":["BS"]},{"id":"osm-15401954","name":"Brennan Hall","osmId":15401954,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494595","center":[537.135009765625,8.005000114440918,-481.0399932861328],"bounds":[[491.20001220703125,0,-532.8699951171875],[583.0700073242188,16.010000228881836,-429.2099914550781]],"positionOffset":728577,"positionCount":2601,"edgeOffset":731178,"edgeCount":1734,"triangles":289,"simplificationErrorM":0,"buildingId":"campus:BR","identitySource":"https://map.utoronto.ca/?id=1809#!m/494595","codes":["BR"]},{"id":"osm-20343239","name":"Anthropology Building","osmId":20343239,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494472","center":[-130.87000274658203,11,273.9100036621094],"bounds":[[-151.16000366210938,0,253.6199951171875],[-110.58000183105469,22,294.20001220703125]],"positionOffset":732912,"positionCount":900,"edgeOffset":733812,"edgeCount":576,"triangles":100,"simplificationErrorM":0,"buildingId":"campus:AP","identitySource":"https://map.utoronto.ca/?id=1809#!m/494472","codes":["AP"]},{"id":"Multipatch_50H_NORTH-1145","name":"Campus context","osmId":null,"officialUrl":null,"center":[-88.93500137329102,45.70000076293945,278.5600128173828],"bounds":[[-91.81999969482422,0,275.6700134277344],[-86.05000305175781,91.4000015258789,281.45001220703125]],"positionOffset":734388,"positionCount":1926,"edgeOffset":736314,"edgeCount":864,"triangles":214,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-1145","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20174304","name":"Central Steam Plant","osmId":20174304,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494477","center":[-79.61000061035156,8.5,261.40499114990234],"bounds":[[-112.93000030517578,0,236.75999450683594],[-46.290000915527344,17,286.04998779296875]],"positionOffset":737178,"positionCount":387,"edgeOffset":737565,"edgeCount":294,"triangles":43,"simplificationErrorM":0,"buildingId":"campus:ST","identitySource":"https://map.utoronto.ca/?id=1809#!m/494477","codes":["ST"]},{"id":"osm-236943829","name":"215 Huron Street","osmId":236943829,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494463","center":[-108.4900016784668,18.450000762939453,340.9599914550781],"bounds":[[-135.35000610351562,0,297.0799865722656],[-81.62999725341797,36.900001525878906,384.8399963378906]],"positionOffset":737859,"positionCount":1980,"edgeOffset":739839,"edgeCount":1386,"triangles":220,"simplificationErrorM":0,"buildingId":"campus:HU","identitySource":"https://map.utoronto.ca/?id=1809#!m/494463","codes":["HU"]},{"id":"osm-23432948","name":"Fields Institute for Research in Math Science","osmId":23432948,"officialUrl":null,"center":[-51.02000045776367,9.449999809265137,391.02500915527344],"bounds":[[-68.01000213623047,0,372.07000732421875],[-34.029998779296875,18.899999618530273,409.9800109863281]],"positionOffset":741225,"positionCount":5022,"edgeOffset":746247,"edgeCount":3264,"triangles":558,"simplificationErrorM":0,"buildingId":"osm-23432948","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-12872719","name":"UTSU Student Commons","osmId":12872719,"officialUrl":null,"center":[-88.53499984741211,12.050000190734863,407.34999084472656],"bounds":[[-109.55999755859375,0,382.0799865722656],[-67.51000213623047,24.100000381469727,432.6199951171875]],"positionOffset":749511,"positionCount":3420,"edgeOffset":752931,"edgeCount":1872,"triangles":380,"simplificationErrorM":0,"buildingId":"osm-12872719","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-141691917","name":"Bahen Centre for Information Technology","osmId":141691917,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494470","center":[-31.710001945495605,19.100000381469727,312.875],"bounds":[[-94.7300033569336,0,227.85000610351562],[31.309999465942383,38.20000076293945,397.8999938964844]],"positionOffset":754803,"positionCount":53307,"edgeOffset":808110,"edgeCount":28632,"triangles":5923,"simplificationErrorM":0.149,"buildingId":"campus:BA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494470","codes":["BA","VN"]},{"id":"osm-8068859","name":"New Residence (New College)","osmId":8068859,"officialUrl":null,"center":[-316.0249938964844,15.800000190734863,168.90999603271484],"bounds":[[-343.5199890136719,0,120.55999755859375],[-288.5299987792969,31.600000381469727,217.25999450683594]],"positionOffset":836742,"positionCount":28449,"edgeOffset":865191,"edgeCount":17112,"triangles":3161,"simplificationErrorM":0.494,"buildingId":"osm-8068859","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-1154","name":"Borden Building South","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494480","center":[-225.76000213623047,11.300000190734863,178.53499221801758],"bounds":[[-289.7200012207031,0,90.7699966430664],[-161.8000030517578,22.600000381469727,266.29998779296875]],"positionOffset":882303,"positionCount":13356,"edgeOffset":895659,"edgeCount":8730,"triangles":1484,"simplificationErrorM":0.496,"buildingId":"campus:SB","identitySource":"https://map.utoronto.ca/?id=1809#!m/494480","codes":["SB"]},{"id":"osm-9303310","name":"Ramsay Wright Building","osmId":9303310,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494515","center":[-183.03499603271484,13.449999809265137,-95.74500274658203],"bounds":[[-240.1199951171875,0,-147.8800048828125],[-125.94999694824219,26.899999618530273,-43.61000061035156]],"positionOffset":904389,"positionCount":61614,"edgeOffset":966003,"edgeCount":39780,"triangles":6846,"simplificationErrorM":0.498,"buildingId":"osm-9303310","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["RW"]},{"id":"osm-7948423","name":"Sidney Smith Hall","osmId":7948423,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494510","center":[-158.86000061035156,14.75,-15.624998092651367],"bounds":[[-216.8000030517578,0,-68.94999694824219],[-100.91999816894531,29.5,37.70000076293945]],"positionOffset":1005783,"positionCount":5400,"edgeOffset":1011183,"edgeCount":4140,"triangles":600,"simplificationErrorM":0,"buildingId":"campus:SS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494510","codes":["SS"]},{"id":"osm-7991747","name":"Robarts Library","osmId":7991747,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/959690","center":[-225.72500610351562,33.599998474121094,-247.6449966430664],"bounds":[[-287.260009765625,0,-319.04998779296875],[-164.19000244140625,67.19999694824219,-176.24000549316406]],"positionOffset":1015323,"positionCount":12933,"edgeOffset":1028256,"edgeCount":7500,"triangles":1437,"simplificationErrorM":0,"buildingId":"campus:RL","identitySource":"https://map.utoronto.ca/?id=1809#!m/959690","codes":["RL"]},{"id":"osm-22372215","name":"Innis College","osmId":22372215,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055913","center":[-232.0199966430664,5.800000190734863,-367.1750030517578],"bounds":[[-258.2799987792969,0,-395.9599914550781],[-205.75999450683594,11.600000381469727,-338.3900146484375]],"positionOffset":1035756,"positionCount":2268,"edgeOffset":1038024,"edgeCount":1650,"triangles":252,"simplificationErrorM":0,"buildingId":"campus:IN","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055913","codes":["IN"]},{"id":"osm-28516661","name":"St. Thomas Aquinas Church","osmId":28516661,"officialUrl":null,"center":[-83.95499801635742,7.5,-246.04000091552734],"bounds":[[-94.88999938964844,0,-264.2200012207031],[-73.0199966430664,15,-227.86000061035156]],"positionOffset":1039674,"positionCount":684,"edgeOffset":1040358,"edgeCount":528,"triangles":76,"simplificationErrorM":0,"buildingId":"osm-28516661","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401952","name":"Windle House","osmId":15401952,"officialUrl":null,"center":[582.64501953125,7,-427.35499572753906],"bounds":[[568.9500122070312,0,-434.8500061035156],[596.3400268554688,14,-419.8599853515625]],"positionOffset":1040886,"positionCount":414,"edgeOffset":1041300,"edgeCount":276,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-15401952","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22201015","name":"Newman Centre","osmId":22201015,"officialUrl":null,"center":[-111.33000183105469,7.5,-232.91500091552734],"bounds":[[-127.55000305175781,0,-246.8000030517578],[-95.11000061035156,15,-219.02999877929688]],"positionOffset":1041576,"positionCount":7200,"edgeOffset":1048776,"edgeCount":3024,"triangles":800,"simplificationErrorM":0.135,"buildingId":"osm-22201015","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20898043","name":"Innis Residence","osmId":20898043,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055914","center":[-158.86499786376953,12.449999809265137,-403.489990234375],"bounds":[[-188.4499969482422,0,-437.3599853515625],[-129.27999877929688,24.899999618530273,-369.6199951171875]],"positionOffset":1051800,"positionCount":6822,"edgeOffset":1058622,"edgeCount":3732,"triangles":758,"simplificationErrorM":0,"buildingId":"campus:IS","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055914","codes":["IS"]},{"id":"Multipatch_50H_NORTH-1164","name":"Massey College","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055911","center":[-63.769999504089355,6,-280.7699966430664],"bounds":[[-97.3499984741211,0,-327.239990234375],[-30.190000534057617,12,-234.3000030517578]],"positionOffset":1062354,"positionCount":3204,"edgeOffset":1065558,"edgeCount":2178,"triangles":356,"simplificationErrorM":0,"buildingId":"campus:MA","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055911","codes":["MA"]},{"id":"osm-23433444","name":"St. Hilda's College","osmId":23433444,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494576","center":[-97.95000076293945,5.5,-377.2050018310547],"bounds":[[-129.5,0,-431.20001220703125],[-66.4000015258789,11,-323.2099914550781]],"positionOffset":1067736,"positionCount":1674,"edgeOffset":1069410,"edgeCount":1068,"triangles":186,"simplificationErrorM":0,"buildingId":"campus:HI","identitySource":"https://map.utoronto.ca/?id=1809#!m/494576","codes":["HI"]},{"id":"osm-10334994","name":"Devonshire House","osmId":10334994,"officialUrl":null,"center":[4.1449995040893555,7.099999904632568,-302.0249938964844],"bounds":[[-31.899999618530273,0,-348.04998779296875],[40.189998626708984,14.199999809265137,-256]],"positionOffset":1070478,"positionCount":14418,"edgeOffset":1084896,"edgeCount":11232,"triangles":1602,"simplificationErrorM":0.499,"buildingId":"osm-10334994","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-1167","name":"Trinity College","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494574","center":[79.43000316619873,10.050000190734863,-334.90000915527344],"bounds":[[23.6200008392334,0,-398.70001220703125],[135.24000549316406,20.100000381469727,-271.1000061035156]],"positionOffset":1096128,"positionCount":2466,"edgeOffset":1098594,"edgeCount":1734,"triangles":274,"simplificationErrorM":0,"buildingId":"campus:TC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494574","codes":["TC"]},{"id":"osm-12000624","name":"Edward Johnson Building","osmId":12000624,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494549","center":[170.55999755859375,13.850000381469727,-481.6050109863281],"bounds":[[139.13999938964844,0,-525.3200073242188],[201.97999572753906,27.700000762939453,-437.8900146484375]],"positionOffset":1100328,"positionCount":1260,"edgeOffset":1101588,"edgeCount":786,"triangles":140,"simplificationErrorM":0,"buildingId":"campus:EJ","identitySource":"https://map.utoronto.ca/?id=1809#!m/494549","codes":["EJ"]},{"id":"osm-12000627","name":"Bora Laskin Law Library","osmId":12000627,"officialUrl":null,"center":[208.25,10,-396.5500030517578],"bounds":[[162.7100067138672,0,-446.4599914550781],[253.7899932861328,20,-346.6400146484375]],"positionOffset":1102374,"positionCount":7191,"edgeOffset":1109565,"edgeCount":4080,"triangles":799,"simplificationErrorM":0.089,"buildingId":"osm-12000627","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401948","name":"Phelan House","osmId":15401948,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494591","center":[590.2650146484375,7.5,-399.2550048828125],"bounds":[[580.510009765625,0,-408.55999755859375],[600.02001953125,15,-389.95001220703125]],"positionOffset":1113645,"positionCount":234,"edgeOffset":1113879,"edgeCount":180,"triangles":26,"simplificationErrorM":0,"buildingId":"campus:PH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494591","codes":["PH"]},{"id":"osm-12873822","name":"Margaret Addison Hall","osmId":12873822,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494612","center":[336.13999938964844,11.100000381469727,-656.5],"bounds":[[303.94000244140625,0,-678.8900146484375],[368.3399963378906,22.200000762939453,-634.1099853515625]],"positionOffset":1114059,"positionCount":3402,"edgeOffset":1117461,"edgeCount":1626,"triangles":378,"simplificationErrorM":0,"buildingId":"campus:MG","identitySource":"https://map.utoronto.ca/?id=1809#!m/494612","codes":["MG"]},{"id":"osm-15401945","name":"Founders House","osmId":15401945,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494585","center":[596.9700012207031,7.5,-369.09999084472656],"bounds":[[588.8099975585938,0,-381.79998779296875],[605.1300048828125,15,-356.3999938964844]],"positionOffset":1119087,"positionCount":234,"edgeOffset":1119321,"edgeCount":174,"triangles":26,"simplificationErrorM":0,"buildingId":"campus:BH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494585","codes":["BH"]},{"id":"osm-20252184","name":"Lillian Massey Building","osmId":20252184,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494613","center":[250.10000610351562,7.849999904632568,-680.5450134277344],"bounds":[[225.6300048828125,0,-712.7000122070312],[274.57000732421875,15.699999809265137,-648.3900146484375]],"positionOffset":1119495,"positionCount":7200,"edgeOffset":1126695,"edgeCount":4044,"triangles":800,"simplificationErrorM":0.023,"buildingId":"campus:LI","identitySource":"https://map.utoronto.ca/?id=1809#!m/494613","codes":["LI"]},{"id":"osm-992457515","name":"Campus context","osmId":992457515,"officialUrl":null,"center":[279.8800048828125,24.350000381469727,-704.6599731445312],"bounds":[[256.5299987792969,0,-728.969970703125],[303.2300109863281,48.70000076293945,-680.3499755859375]],"positionOffset":1130739,"positionCount":2070,"edgeOffset":1132809,"edgeCount":1578,"triangles":230,"simplificationErrorM":0,"buildingId":"osm-992457515","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20252183","name":"Gardiner Museum","osmId":20252183,"officialUrl":null,"center":[283.5699920654297,8.300000190734863,-655.0149841308594],"bounds":[[261.55999755859375,0,-679.1799926757812],[305.5799865722656,16.600000381469727,-630.8499755859375]],"positionOffset":1134387,"positionCount":10728,"edgeOffset":1145115,"edgeCount":6138,"triangles":1192,"simplificationErrorM":0.489,"buildingId":"osm-20252183","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23436623","name":"Annesley Hall","osmId":23436623,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494609","center":[294.4199981689453,6.5,-618.1950073242188],"bounds":[[273.260009765625,0,-644.739990234375],[315.5799865722656,13,-591.6500244140625]],"positionOffset":1151253,"positionCount":1053,"edgeOffset":1152306,"edgeCount":738,"triangles":117,"simplificationErrorM":0,"buildingId":"campus:AN","identitySource":"https://map.utoronto.ca/?id=1809#!m/494609","codes":["AN"]},{"id":"osm-4942687","name":"Royal Ontario Museum","osmId":4942687,"officialUrl":null,"center":[158.35499572753906,17.849999248981476,-595.7749938964844],"bounds":[[92.27999877929688,-1.399999976158142,-688.7999877929688],[224.42999267578125,37.099998474121094,-502.75]],"positionOffset":1153044,"positionCount":92052,"edgeOffset":1245096,"edgeCount":50460,"triangles":10228,"simplificationErrorM":0.496,"buildingId":"osm-4942687","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["RO"]},{"id":"Multipatch_50H_NORTH-1194","name":"Campus context","osmId":null,"officialUrl":null,"center":[-67.45500087738037,1.5,-615.2899780273438],"bounds":[[-104.01000213623047,0,-629.4199829101562],[-30.899999618530273,3,-601.1599731445312]],"positionOffset":1295556,"positionCount":144,"edgeOffset":1295700,"edgeCount":108,"triangles":16,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-1194","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204343133","name":"Varsity Pavilion","osmId":204343133,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494548","center":[-13.69999885559082,6.75,-447.4700012207031],"bounds":[[-71.73999786376953,0,-472.8699951171875],[44.34000015258789,13.5,-422.07000732421875]],"positionOffset":1295808,"positionCount":29790,"edgeOffset":1325598,"edgeCount":14232,"triangles":3310,"simplificationErrorM":0.489,"buildingId":"campus:VP","identitySource":"https://map.utoronto.ca/?id=1809#!m/494548","codes":["VP"]},{"id":"osm-8095834","name":"Varsity Arena","osmId":8095834,"officialUrl":null,"center":[39.279998660087585,11,-555.1899871826172],"bounds":[[-3.069999933242798,0,-635.4199829101562],[81.62999725341797,22,-474.9599914550781]],"positionOffset":1339830,"positionCount":3204,"edgeOffset":1343034,"edgeCount":2124,"triangles":356,"simplificationErrorM":0,"buildingId":"osm-8095834","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-58741954","name":"Campus context","osmId":58741954,"officialUrl":null,"center":[7.090000152587891,13.25,-547.1950073242188],"bounds":[[-23.270000457763672,0,-622.77001953125],[37.45000076293945,26.5,-471.6199951171875]],"positionOffset":1345158,"positionCount":63432,"edgeOffset":1408590,"edgeCount":36036,"triangles":7048,"simplificationErrorM":0.498,"buildingId":"osm-58741954","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401950","name":"Sorbara Hall Student Residence","osmId":15401950,"officialUrl":null,"center":[629.7899780273438,9.25,-394.3999938964844],"bounds":[[602.0399780273438,0,-424.4700012207031],[657.5399780273438,18.5,-364.3299865722656]],"positionOffset":1444626,"positionCount":6021,"edgeOffset":1450647,"edgeCount":3954,"triangles":669,"simplificationErrorM":0,"buildingId":"osm-15401950","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20251223","name":"TELUS Centre for Performance and Learning","osmId":20251223,"officialUrl":null,"center":[37.31500053405762,16.950000762939453,-612.9849853515625],"bounds":[[-10.15999984741211,0,-651.9199829101562],[84.79000091552734,33.900001525878906,-574.0499877929688]],"positionOffset":1454601,"positionCount":47484,"edgeOffset":1502085,"edgeCount":32310,"triangles":5276,"simplificationErrorM":0.495,"buildingId":"osm-20251223","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22236557","name":"Transitional Year Programme","osmId":22236557,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494554","center":[-205.15999603271484,5.699999809265137,-506.0799865722656],"bounds":[[-215.4199981689453,0,-516.8499755859375],[-194.89999389648438,11.399999618530273,-495.30999755859375]],"positionOffset":1534395,"positionCount":792,"edgeOffset":1535187,"edgeCount":540,"triangles":88,"simplificationErrorM":0,"buildingId":"osm-22236557","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-27750952","name":"Arthur M. Kruger Hall","osmId":27750952,"officialUrl":null,"center":[-170.91000366210938,7.800000190734863,-480.4250030517578],"bounds":[[-198.8800048828125,0,-526.3200073242188],[-142.94000244140625,15.600000381469727,-434.5299987792969]],"positionOffset":1535727,"positionCount":2205,"edgeOffset":1537932,"edgeCount":1560,"triangles":245,"simplificationErrorM":0,"buildingId":"osm-27750952","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-466988054","name":"Campus context","osmId":466988054,"officialUrl":null,"center":[-170.05999755859375,2.5999999046325684,-561.1499938964844],"bounds":[[-174.1199951171875,0,-566.5800170898438],[-166,5.199999809265137,-555.719970703125]],"positionOffset":1539492,"positionCount":2124,"edgeOffset":1541616,"edgeCount":1722,"triangles":236,"simplificationErrorM":0,"buildingId":"osm-466988054","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20251671","name":"Munk School of Global Affairs & Public Policy","osmId":20251671,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055916","center":[-151.26000213623047,9.5600004196167,-567.2799987792969],"bounds":[[-168.2100067138672,0,-583.5499877929688],[-134.30999755859375,19.1200008392334,-551.010009765625]],"positionOffset":1543338,"positionCount":34407,"edgeOffset":1577745,"edgeCount":20820,"triangles":3823,"simplificationErrorM":0.495,"buildingId":"campus:MU","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055916","codes":["MU"]},{"id":"osm-258167657","name":"Goldring Centre","osmId":258167657,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494556","center":[-137.56500244140625,9.949999809265137,-515.5950164794922],"bounds":[[-166.07000732421875,0,-559.780029296875],[-109.05999755859375,19.899999618530273,-471.4100036621094]],"positionOffset":1598565,"positionCount":14922,"edgeOffset":1613487,"edgeCount":7662,"triangles":1658,"simplificationErrorM":0.492,"buildingId":"osm-258167657","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-10336057","name":"Woodsworth College Residence","osmId":10336057,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/983219","center":[-200.3800048828125,27.100000381469727,-548.6100158691406],"bounds":[[-233.2100067138672,0,-578.4000244140625],[-167.5500030517578,54.20000076293945,-518.8200073242188]],"positionOffset":1621149,"positionCount":11151,"edgeOffset":1632300,"edgeCount":7962,"triangles":1239,"simplificationErrorM":0.497,"buildingId":"osm-10336057","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["WO"]},{"id":"osm-22372212","name":"School of Continuing Studies","osmId":22372212,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494553","center":[-261.6050033569336,7.75,-485.0500030517578],"bounds":[[-283.6700134277344,0,-496.4200134277344],[-239.5399932861328,15.5,-473.67999267578125]],"positionOffset":1640262,"positionCount":3510,"edgeOffset":1643772,"edgeCount":2472,"triangles":390,"simplificationErrorM":0,"buildingId":"campus:CS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494553","codes":["CS"]},{"id":"osm-22372211","name":"Lambda Chi Alpha","osmId":22372211,"officialUrl":null,"center":[-245.79000091552734,6.5,-443.02500915527344],"bounds":[[-258.6600036621094,0,-450.95001220703125],[-232.9199981689453,13,-435.1000061035156]],"positionOffset":1646244,"positionCount":486,"edgeOffset":1646730,"edgeCount":372,"triangles":54,"simplificationErrorM":0,"buildingId":"osm-22372211","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22372209","name":"Max Gluskin House","osmId":22372209,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494546","center":[-250.37500762939453,8.449999809265137,-414.31500244140625],"bounds":[[-277.8900146484375,0,-437.2300109863281],[-222.86000061035156,16.899999618530273,-391.3999938964844]],"positionOffset":1647102,"positionCount":24642,"edgeOffset":1671744,"edgeCount":16638,"triangles":2738,"simplificationErrorM":0.498,"buildingId":"campus:GE","identitySource":"https://map.utoronto.ca/?id=1809#!m/494546","codes":["GE"]},{"id":"osm-27765374","name":"Senator David A. Croll Apartments","osmId":27765374,"officialUrl":null,"center":[-313.375,27.75,-524.9749908447266],"bounds":[[-371.8500061035156,0,-559.1799926757812],[-254.89999389648438,55.5,-490.7699890136719]],"positionOffset":1688382,"positionCount":7317,"edgeOffset":1695699,"edgeCount":5268,"triangles":813,"simplificationErrorM":0.463,"buildingId":"osm-27765374","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15089986","name":"Ontario Legislative Building","osmId":15089986,"officialUrl":null,"center":[413.6750030517578,27.7549991607666,-42.440001487731934],"bounds":[[342.260009765625,0,-107.30000305175781],[485.0899963378906,55.5099983215332,22.420000076293945]],"positionOffset":1700967,"positionCount":39168,"edgeOffset":1740135,"edgeCount":27420,"triangles":4352,"simplificationErrorM":0.15,"buildingId":"osm-15089986","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401943","name":"McCorkell House","osmId":15401943,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494583","center":[551.9450073242188,7.164999961853027,-359.5299987792969],"bounds":[[541.1799926757812,0,-373.8500061035156],[562.7100219726562,14.329999923706055,-345.2099914550781]],"positionOffset":1767555,"positionCount":18720,"edgeOffset":1786275,"edgeCount":11322,"triangles":2080,"simplificationErrorM":0.495,"buildingId":"campus:MZ","identitySource":"https://map.utoronto.ca/?id=1809#!m/494583","codes":["MZ"]},{"id":"osm-15401938","name":"Maritain House","osmId":15401938,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494587","center":[542.6600036621094,5.485000133514404,-384.9100036621094],"bounds":[[531.989990234375,0,-396.7200012207031],[553.3300170898438,10.970000267028809,-373.1000061035156]],"positionOffset":1797597,"positionCount":8658,"edgeOffset":1806255,"edgeCount":6126,"triangles":962,"simplificationErrorM":0.483,"buildingId":"osm-15401938","identitySource":"https://map.utoronto.ca/?id=1809#!m/494587","codes":[]},{"id":"osm-60303738","name":"Regis College","osmId":60303738,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055909","center":[553.8200073242188,6.800000190734863,-219.26000213623047],"bounds":[[503.8900146484375,0,-257.05999755859375],[603.75,13.600000381469727,-181.4600067138672]],"positionOffset":1812381,"positionCount":33093,"edgeOffset":1845474,"edgeCount":21912,"triangles":3677,"simplificationErrorM":0.493,"buildingId":"campus:RG","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055909","codes":["RG"]},{"id":"osm-32022566","name":"Campus context","osmId":32022566,"officialUrl":null,"center":[-543.6099853515625,12.399999618530273,-295.69000244140625],"bounds":[[-564.3599853515625,0,-307.55999755859375],[-522.8599853515625,24.799999237060547,-283.82000732421875]],"positionOffset":1867386,"positionCount":1890,"edgeOffset":1869276,"edgeCount":1224,"triangles":210,"simplificationErrorM":0,"buildingId":"osm-32022566","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-1252","name":"Graduate House","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494518","center":[-400.9199981689453,15.550000190734863,-133.55500030517578],"bounds":[[-431.6000061035156,0,-173.66000366210938],[-370.239990234375,31.100000381469727,-93.44999694824219]],"positionOffset":1870500,"positionCount":7101,"edgeOffset":1877601,"edgeCount":4074,"triangles":789,"simplificationErrorM":0,"buildingId":"campus:GD","identitySource":"https://map.utoronto.ca/?id=1809#!m/494518","codes":["GD"]},{"id":"osm-23434161","name":"Early Learning Centre (Glen Morris)","osmId":23434161,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494524","center":[-354.5749969482422,6.099999904632568,-173.89500427246094],"bounds":[[-372.55999755859375,0,-188.82000732421875],[-336.5899963378906,12.199999809265137,-158.97000122070312]],"positionOffset":1881675,"positionCount":3078,"edgeOffset":1884753,"edgeCount":2046,"triangles":342,"simplificationErrorM":0,"buildingId":"osm-23434161","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22199517","name":"The Wolland Centre for Jewish Campus Life (Hillel)","osmId":22199517,"officialUrl":null,"center":[-299.3249969482422,6.599999904632568,-135.37999725341797],"bounds":[[-316.42999267578125,0,-146.55999755859375],[-282.2200012207031,13.199999809265137,-124.19999694824219]],"positionOffset":1886799,"positionCount":8910,"edgeOffset":1895709,"edgeCount":3762,"triangles":990,"simplificationErrorM":0.477,"buildingId":"osm-22199517","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-8106022","name":"Warren Stevens Building","osmId":8106022,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/959693","center":[-323.01000213623047,10.350000381469727,-57.25],"bounds":[[-398.6600036621094,0,-114.25],[-247.36000061035156,20.700000762939453,-0.25]],"positionOffset":1899471,"positionCount":882,"edgeOffset":1900353,"edgeCount":606,"triangles":98,"simplificationErrorM":0,"buildingId":"osm-8106022","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["WS"]},{"id":"osm-10336058","name":"Wilson Hall","osmId":10336058,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055921","center":[-298.14500427246094,12.5,41.49500131607056],"bounds":[[-370.510009765625,0,-13.949999809265137],[-225.77999877929688,25,96.94000244140625]],"positionOffset":1900959,"positionCount":3402,"edgeOffset":1904361,"edgeCount":1872,"triangles":378,"simplificationErrorM":0,"buildingId":"campus:WI","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055921","codes":["WI"]},{"id":"osm-34116297","name":"Graduate Students Union","osmId":34116297,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494496","center":[-280.385009765625,5,170.65999603271484],"bounds":[[-291.70001220703125,0,152.77999877929688],[-269.07000732421875,10,188.5399932861328]],"positionOffset":1906233,"positionCount":234,"edgeOffset":1906467,"edgeCount":174,"triangles":26,"simplificationErrorM":0,"buildingId":"osm-34116297","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-8101762","name":"Daniels Building","osmId":8101762,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494471","center":[-310.2949981689453,18.850000381469727,301.5500030517578],"bounds":[[-347.7200012207031,0,263.2200012207031],[-272.8699951171875,37.70000076293945,339.8800048828125]],"positionOffset":1906641,"positionCount":7038,"edgeOffset":1913679,"edgeCount":4668,"triangles":782,"simplificationErrorM":0,"buildingId":"campus:DA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494471","codes":["DA"]},{"id":"osm-1466900017","name":"Lash Miller Chemical Laboratories","osmId":1466900017,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494502","center":[-116.20499801635742,16.350000381469727,90.31500244140625],"bounds":[[-181.22999572753906,0,36],[-51.18000030517578,32.70000076293945,144.6300048828125]],"positionOffset":1918347,"positionCount":2349,"edgeOffset":1920696,"edgeCount":1320,"triangles":261,"simplificationErrorM":0,"buildingId":"campus:LM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494502","codes":["LM"]},{"id":"Multipatch_50H_NORTH-1280","name":"Knox College","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055907","center":[12.38499927520752,12.5,96.50000381469727],"bounds":[[-27.760000228881836,0,47.540000915527344],[52.529998779296875,25,145.4600067138672]],"positionOffset":1922016,"positionCount":1854,"edgeOffset":1923870,"edgeCount":1350,"triangles":206,"simplificationErrorM":0,"buildingId":"campus:KX","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055907","codes":["KX"]},{"id":"osm-10336055","name":"Simcoe Hall","osmId":10336055,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494492","center":[50.67500185966492,21.850000381469727,172.3550033569336],"bounds":[[-3.309999942779541,0,134.22000122070312],[104.66000366210938,43.70000076293945,210.49000549316406]],"positionOffset":1925220,"positionCount":31212,"edgeOffset":1956432,"edgeCount":15408,"triangles":3468,"simplificationErrorM":0,"buildingId":"campus:SI","identitySource":"https://map.utoronto.ca/?id=1809#!m/494492","codes":["SI"]},{"id":"osm-1464898602","name":"Wallberg Building","osmId":1464898602,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494460","center":[118.44999694824219,12.550000190734863,287.2050018310547],"bounds":[[29.360000610351562,0,195.16000366210938],[207.5399932861328,25.100000381469727,379.25]],"positionOffset":1971840,"positionCount":7425,"edgeOffset":1979265,"edgeCount":5238,"triangles":825,"simplificationErrorM":0.497,"buildingId":"osm-1464898602","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["WB"]},{"id":"osm-12873543","name":"Lassonde Mining Building","osmId":12873543,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494466","center":[273.29500579833984,12.805000305175781,303.7900085449219],"bounds":[[228.6699981689453,0,278.3800048828125],[317.9200134277344,25.610000610351562,329.20001220703125]],"positionOffset":1984503,"positionCount":1098,"edgeOffset":1985601,"edgeCount":990,"triangles":122,"simplificationErrorM":0,"buildingId":"campus:MB","identitySource":"https://map.utoronto.ca/?id=1809#!m/494466","codes":["MB"]},{"id":"osm-23433584","name":"C. David Naylor Building","osmId":23433584,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494486","center":[396.6549987792969,8.5,208.63500213623047],"bounds":[[369.8800048828125,0,188.6300048828125],[423.42999267578125,17,228.63999938964844]],"positionOffset":1986591,"positionCount":7776,"edgeOffset":1994367,"edgeCount":6840,"triangles":864,"simplificationErrorM":0.277,"buildingId":"campus:NL","identitySource":"https://map.utoronto.ca/?id=1809#!m/494486","codes":["NL"]},{"id":"osm-12873582","name":"Leslie Dan Pharmacy Building","osmId":12873582,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494476","center":[412.30499267578125,30.799999237060547,254.22000122070312],"bounds":[[387.1499938964844,0,231.39999389648438],[437.4599914550781,61.599998474121094,277.0400085449219]],"positionOffset":2001207,"positionCount":23517,"edgeOffset":2024724,"edgeCount":10434,"triangles":2613,"simplificationErrorM":0.494,"buildingId":"campus:PB","identitySource":"https://map.utoronto.ca/?id=1809#!m/494476","codes":["PB"]},{"id":"osm-8027962","name":"Sir Daniel Wilson Residence","osmId":8027962,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055918","center":[-37.05500078201294,22.350000381469727,-44.93499946594238],"bounds":[[-86.1500015258789,0,-111.27999877929688],[12.039999961853027,44.70000076293945,21.40999984741211]],"positionOffset":2035158,"positionCount":79488,"edgeOffset":2114646,"edgeCount":60114,"triangles":8832,"simplificationErrorM":0.5,"buildingId":"campus:SD","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055918","codes":["SD"]},{"id":"osm-12874392","name":"Whitney Hall","osmId":12874392,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055920","center":[-81.47500038146973,6.800000190734863,-163.2750015258789],"bounds":[[-117.22000122070312,0,-205.5800018310547],[-45.72999954223633,13.600000381469727,-120.97000122070312]],"positionOffset":2174760,"positionCount":1278,"edgeOffset":2176038,"edgeCount":828,"triangles":142,"simplificationErrorM":0,"buildingId":"campus:WT","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055920","codes":["WT"]},{"id":"osm-12873396","name":"Donnelly Centre for Cellular and Biomolecular Research","osmId":12873396,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494482","center":[305.5449981689453,32.79999923706055,231.66500854492188],"bounds":[[273.92999267578125,0,183.85000610351562],[337.1600036621094,65.5999984741211,279.4800109863281]],"positionOffset":2176866,"positionCount":19899,"edgeOffset":2196765,"edgeCount":11838,"triangles":2211,"simplificationErrorM":0.494,"buildingId":"osm-12873396","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479283","name":"Campus context","osmId":127479283,"officialUrl":null,"center":[-317.49000549316406,6.920000076293945,-223.3300018310547],"bounds":[[-327.7799987792969,0,-230.69000244140625],[-307.20001220703125,13.84000015258789,-215.97000122070312]],"positionOffset":2208603,"positionCount":702,"edgeOffset":2209305,"edgeCount":450,"triangles":78,"simplificationErrorM":0,"buildingId":"osm-127479283","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23436801","name":"Health Sciences Building","osmId":23436801,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494459","center":[332.34999084472656,16.274999618530273,352.5800018310547],"bounds":[[288.9599914550781,0,326.8999938964844],[375.739990234375,32.54999923706055,378.260009765625]],"positionOffset":2209755,"positionCount":180,"edgeOffset":2209935,"edgeCount":144,"triangles":20,"simplificationErrorM":0,"buildingId":"campus:HS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494459","codes":["HS"]},{"id":"osm-23436808","name":"University of Toronto Communications House","osmId":23436808,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494458","center":[267.7100067138672,4.034999847412109,374.19000244140625],"bounds":[[255.47000122070312,0,353.239990234375],[279.95001220703125,8.069999694824219,395.1400146484375]],"positionOffset":2210079,"positionCount":198,"edgeOffset":2210277,"edgeCount":144,"triangles":22,"simplificationErrorM":0,"buildingId":"osm-23436808","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-70948818","name":"Stewart Building","osmId":70948818,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494462","center":[394.84999084472656,2.950000047683716,338.1549987792969],"bounds":[[378.7099914550781,0,313.7300109863281],[410.989990234375,5.900000095367432,362.5799865722656]],"positionOffset":2210421,"positionCount":1008,"edgeOffset":2211429,"edgeCount":606,"triangles":112,"simplificationErrorM":0,"buildingId":"campus:EP","identitySource":"https://map.utoronto.ca/?id=1809#!m/494462","codes":["EP"]},{"id":"osm-23436871","name":"Caretaking","osmId":23436871,"officialUrl":null,"center":[267.11000061035156,9.25,409.34999084472656],"bounds":[[245.55999755859375,0,394.79998779296875],[288.6600036621094,18.5,423.8999938964844]],"positionOffset":2212035,"positionCount":288,"edgeOffset":2212323,"edgeCount":210,"triangles":32,"simplificationErrorM":0,"buildingId":"osm-23436871","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23436965","name":"Old Admin Building","osmId":23436965,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494457","center":[350.8949890136719,14.199999809265137,383.3299865722656],"bounds":[[333.3599853515625,0,366.0799865722656],[368.42999267578125,28.399999618530273,400.5799865722656]],"positionOffset":2212533,"positionCount":900,"edgeOffset":2213433,"edgeCount":600,"triangles":100,"simplificationErrorM":0,"buildingId":"osm-23436965","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23436928","name":"Central Exams Facility","osmId":23436928,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494453","center":[327.3699951171875,8.699999809265137,420.4550018310547],"bounds":[[300.6199951171875,0,383.7799987792969],[354.1199951171875,17.399999618530273,457.1300048828125]],"positionOffset":2214033,"positionCount":16920,"edgeOffset":2230953,"edgeCount":13908,"triangles":1880,"simplificationErrorM":0.461,"buildingId":"osm-23436928","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-62003382","name":"St. George","osmId":62003382,"officialUrl":null,"center":[-111.52000427246094,1.5299999713897705,-702.7449951171875],"bounds":[[-130.4600067138672,0,-713.4400024414062],[-92.58000183105469,3.059999942779541,-692.0499877929688]],"positionOffset":2244861,"positionCount":576,"edgeOffset":2245437,"edgeCount":366,"triangles":64,"simplificationErrorM":0,"buildingId":"osm-62003382","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-804686130","name":"Campus context","osmId":804686130,"officialUrl":null,"center":[-95.09499740600586,1.784999966621399,-698.6399841308594],"bounds":[[-100.0999984741211,0,-702.2999877929688],[-90.08999633789062,3.569999933242798,-694.97998046875]],"positionOffset":2245803,"positionCount":90,"edgeOffset":2245893,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-804686130","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22372218","name":"Factor-Inwentash Faculty of Social Work","osmId":22372218,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494564","center":[-90.75,15.949999809265137,-663.2999877929688],"bounds":[[-106.43000030517578,0,-685.1799926757812],[-75.06999969482422,31.899999618530273,-641.4199829101562]],"positionOffset":2245965,"positionCount":26496,"edgeOffset":2272461,"edgeCount":24024,"triangles":2944,"simplificationErrorM":0.465,"buildingId":"campus:SK","identitySource":"https://map.utoronto.ca/?id=1809#!m/494564","codes":["SK"]},{"id":"osm-10725629","name":"Ontario Institute for Studies in Education (University of Toronto)","osmId":10725629,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494563","center":[-166.1699981689453,26.700000762939453,-676.27001953125],"bounds":[[-207.67999267578125,0,-731.8400268554688],[-124.66000366210938,53.400001525878906,-620.7000122070312]],"positionOffset":2296485,"positionCount":42318,"edgeOffset":2338803,"edgeCount":20052,"triangles":4702,"simplificationErrorM":0.5,"buildingId":"osm-10725629","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["OI"]},{"id":"osm-23201562","name":"Jackman Humanities Building","osmId":23201562,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494560","center":[-295.7149963378906,21.200000762939453,-596.5850219726562],"bounds":[[-318.2799987792969,0,-622.5900268554688],[-273.1499938964844,42.400001525878906,-570.5800170898438]],"positionOffset":2358855,"positionCount":35298,"edgeOffset":2394153,"edgeCount":27876,"triangles":3922,"simplificationErrorM":0.447,"buildingId":"campus:JH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494560","codes":["JH"]},{"id":"osm-330718925","name":"Convocation Hall","osmId":330718925,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494494","center":[108.5,9.399999618530273,170.55500030517578],"bounds":[[76.77999877929688,0,141.07000732421875],[140.22000122070312,18.799999237060547,200.0399932861328]],"positionOffset":2422029,"positionCount":8244,"edgeOffset":2430273,"edgeCount":3726,"triangles":916,"simplificationErrorM":0,"buildingId":"campus:CH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494494","codes":["CH"]}]`),Tl={metadata:ag,buildings:lg},Cl=Math.PI/180,Al=6378137,sn=.0066943799901413165,kr=sn/(1-sn),wl=.9996;function Tc({lat:i,lng:t}){const e=i*Cl,n=(t+81)*Cl,s=Math.sin(e),r=Math.cos(e),o=Math.tan(e),a=Al/Math.sqrt(1-sn*s*s),l=o*o,c=kr*r*r,u=r*n,p=Al*((1-sn/4-3*sn**2/64-5*sn**3/256)*e-(3*sn/8+3*sn**2/32+45*sn**3/1024)*Math.sin(2*e)+(15*sn**2/256+45*sn**3/1024)*Math.sin(4*e)-35*sn**3/3072*Math.sin(6*e));return[5e5+wl*a*(u+(1-l+c)*u**3/6+(5-18*l+l*l+72*c-58*kr)*u**5/120),wl*(p+a*o*(u*u/2+(5-l+9*c+4*c*c)*u**4/24+(61-58*l+l*l+600*c-330*kr)*u**6/720))]}const Cc={lat:43.6623,lng:-79.3968},Rl=Tc(Cc);function On(i){const[t,e]=Tc(i);return{x:t-Rl[0],z:Rl[1]-e}}function Il({x:i,z:t}){let e={...Cc};for(let n=0;n<4;n++){const s=On(e),r=On({...e,lat:e.lat+1e-5}),o=On({...e,lng:e.lng+1e-5}),a=(r.x-s.x)/1e-5,l=(o.x-s.x)/1e-5,c=(r.z-s.z)/1e-5,u=(o.z-s.z)/1e-5,p=a*u-l*c;e.lat+=((i-s.x)*u-(t-s.z)*l)/p,e.lng+=((t-s.z)*a-(i-s.x)*c)/p}return e}function cg(i){return Object.entries(i||{}).flatMap(([t,e])=>{if(!e||typeof e.name!="string"||!Number.isFinite(e.lat)||!Number.isFinite(e.lng))return[];const n=On(e),s=Array.isArray(e.polygon)?e.polygon.filter(o=>Array.isArray(o)&&o.length>=2&&o.every(Number.isFinite)).map(([o,a])=>On({lat:o,lng:a})):[],r=s.length>=3?s:[n];return[{buildingId:`catalogue:${t}`,name:e.name,codes:[t],center:[n.x,0,n.z],bounds:[[Math.min(...r.map(o=>o.x)),0,Math.min(...r.map(o=>o.z))],[Math.max(...r.map(o=>o.x)),0,Math.max(...r.map(o=>o.z))]],footprint:s,parts:[],landmark:{short:e.short||e.name,priority:20},catalogueTarget:!0,complexNote:s.length>=3?"Building footprint and location from the published timetable.":"Building location from the published timetable."}]})}const Vr=new WeakMap;function ug(i,t={}){var ht;if(!(i instanceof HTMLElement))throw new TypeError("A map container is required");(ht=Vr.get(i))==null||ht.dispose(),i.classList.add("campus-map"),i.innerHTML=og;const e=A=>i.querySelector("#"+A);let n=t.location?{...t.location}:null,s=null,r=t.catalogue||{},o=[],a=[],l=null,c=null;const u=document.createElement("div");u.className="campus-destination-marker",u.hidden=!0,u.setAttribute("role","status"),i.append(u);const p=()=>i.clientWidth<=650,d=matchMedia("(prefers-reduced-motion: reduce)"),h=[{name:"Robarts Library",priority:0},{name:"University College",priority:1},{name:"Convocation Hall",priority:2},{name:"Sidney Smith Hall",priority:3},{name:"Bahen Centre for Information Technology",short:"Bahen Centre",priority:4},{name:"Royal Ontario Museum",priority:5},{name:"Ontario Legislative Building",short:"Ontario Legislature",priority:6},{name:"Trinity College",priority:7},{name:"Victoria College",priority:8},{name:"Rotman School of Management",short:"Rotman",priority:9},{name:"Medical Sciences Building",short:"Medical Sciences",priority:10},{name:"Lash Miller Chemical Laboratories",short:"Lash Miller",priority:11},{name:"McLennan Physical Laboratories",short:"McLennan Labs",priority:12},{name:"Hart House",priority:5.5},{name:"Gerstein / Canadiana complex",short:"Gerstein / Canadiana",priority:13},{name:"Knox College",priority:14}];let g,M,m,f,T,w,S=null,E=null,y=null,R=!1,v=!1,C=0,D=!0,F=!1,z=null,W=!1,N=!1,k=!1,q="loading",K,at,$,it=0;const ot=[],Tt=new Set,It=new AbortController;function oe(A,P,Z){A.addEventListener(P,Z,{signal:It.signal})}function Bt(A,P,Z){A.addEventListener(P,Z),ot.push(()=>A.removeEventListener(P,Z))}function ee(A){return A?{id:A.buildingId,name:A.name==="Campus context"?"Unnamed building":A.name,codes:[...A.codes||[]],officialUrl:A.officialUrl||null,officialEntries:(A.officialEntries||[]).map(P=>({...P})),note:A.complexNote||null,center:[...A.center]}:null}function Q(){var P;const A=ee(S);i.dispatchEvent(new CustomEvent("campus:select",{detail:A,bubbles:!0})),(P=t.onSelect)==null||P.call(t,A)}const et=[],yt=[],Dt=[],St=new Xd,Vt=new Mt,_e=new I(20,0,-185),Wt=new I(440,920,1020),Xt={white:new Jt("#fcfdff"),side:new Jt("#d9e7f8"),edge:new Jt("#7095c2"),landmarkEdge:new Jt("#164f97"),selected:new Jt("#c4ddff"),selectedEdge:new Jt("#0758cc"),paper:new Jt("white")};function Yt(){g&&q==="ready"&&!k&&!R&&!v&&!document.hidden&&(R=!0,at=requestAnimationFrame($t))}function $t(A){if(R=!1,k||q!=="ready"||document.hidden)return;v=!0;let P=!1;if(y){const lt=d.matches?1:Math.min(1,(A-y.start)/700),Nt=lt<.5?4*lt**3:1-(-2*lt+2)**3/2;f.target.lerpVectors(y.fromTarget,y.toTarget,Nt),m.position.lerpVectors(y.fromPosition,y.toPosition,Nt),m.zoom=Io.lerp(y.fromZoom,y.toZoom,Nt),m.updateProjectionMatrix(),f.update(),lt===1&&(y=null,f.enableDamping=!d.matches)}y||(P=f.update()),g.render(M,m),C++,Pe(),nt(),J();const Z=new I(0,0,-100).applyQuaternion(m.quaternion.clone().invert());e("compass-arrow").style.transform=`rotate(${Math.atan2(Z.x,Z.y)*180/Math.PI}deg)`;const X=e("scene").clientWidth/((m.right-m.left)/m.zoom),st=p()?38:65,rt=[10,20,50,100,200,500].reduce((lt,Nt)=>Math.abs(Nt*X-st)<Math.abs(lt*X-st)?Nt:lt,100);e("scale-text").textContent=`${rt} m`,e("scale-line").style.width=`${rt*X}px`,v=!1,(y||P&&f.enableDamping)&&Yt()}function se(A,P,Z=m.position.clone().sub(f.target)){f.enableDamping=!1,y={start:performance.now(),fromTarget:f.target.clone(),toTarget:A.clone(),fromPosition:m.position.clone(),toPosition:A.clone().add(Z),fromZoom:m.zoom,toZoom:P},Yt()}function Se(A){q==="ready"&&(F=A,e("view-3d").classList.toggle("active",!A),e("view-2d").classList.toggle("active",A),e("view-3d").setAttribute("aria-pressed",!A),e("view-2d").setAttribute("aria-pressed",A),f.enableRotate=!A,f.mouseButtons.LEFT=A?Ln.PAN:Ln.ROTATE,f.touches.ONE=A?In.PAN:In.ROTATE,se(f.target,m.zoom,A?new I(0,1400,.1):Wt))}function Ce(){if(q!=="ready")return;const A=!!S;S=null,V(null),E=null,e("selection").hidden=!0,i.classList.remove("has-selection"),e("building-picker").value="",jt(),A&&Q()}function de(){q==="ready"&&(Ce(),F=!1,f.enableRotate=!0,f.mouseButtons.LEFT=Ln.ROTATE,f.touches.ONE=In.ROTATE,e("view-3d").classList.add("active"),e("view-2d").classList.remove("active"),e("view-3d").setAttribute("aria-pressed","true"),e("view-2d").setAttribute("aria-pressed","false"),jt(),se(_e,1,Wt))}function me(A,P){var Nt,mt,Ut;if(!A||q!=="ready")return;S=A;const Z=o.find(zt=>{var Gt;return P?zt.codes.includes(P):(Gt=A.codes)==null?void 0:Gt.some(Rt=>zt.codes.includes(Rt))});V(Z),i.classList.add("has-selection"),e("selection").hidden=!1,e("selection-name").textContent=A.name==="Campus context"?"Unnamed building":A.name,e("selection-code").textContent=((Nt=A.codes)==null?void 0:Nt.join(" / "))||"BUILDING",e("selection-note").textContent=A.complexNote||"City of Toronto · 2025 building model";const X=((mt=A.officialEntries)==null?void 0:mt.find(zt=>zt.code===P))||((Ut=A.officialEntries)==null?void 0:Ut[0]),st=(X==null?void 0:X.url)||A.officialUrl;e("official-link").textContent=X?`View ${X.name} on UofT map ↗`:"View on UofT map ↗",e("official-link").hidden=!st,st&&(e("official-link").href=st),jt();const rt=(Z==null?void 0:Z.center)||A.center,lt=new I(rt[0],0,rt[2]);p()&&(lt.z+=100),se(lt,p()?2.6:2.9,F?new I(0,1400,.1):new I(390,800,900)),e("building-picker").value=A.buildingId,t.embedded||e("close-selection").focus({preventScroll:!0}),Q()}function U(A){var st;const P=document.createElement("button");P.className="map-label";const Z=document.createElement("span");Z.className="label-code",Z.textContent=((st=A.codes)==null?void 0:st[0])||"",Z.hidden=!Z.textContent;const X=document.createElement("span");X.textContent=A.landmark.short||A.name,P.append(Z,X),P.setAttribute("aria-label",`Explore ${A.name}`),P.onclick=()=>me(A),e("labels").append(P),Dt.push({button:P,b:A})}function Pe(){var st;const A=i.clientWidth,P=e("scene").clientHeight,Z=[],X=[...Dt].sort((rt,lt)=>(lt.b===S)-(rt.b===S)||rt.b.landmark.priority-lt.b.landmark.priority);for(const{button:rt,b:lt}of X){if(l&&((st=lt.codes)!=null&&st.includes(l.codes[0]))){rt.hidden=!0;continue}const Nt=new I(lt.center[0],lt.bounds[1][1]+26,lt.center[2]).project(m),mt=(Nt.x*.5+.5)*A,Ut=(-Nt.y*.5+.5)*P,zt=rt.offsetWidth||130,Gt=rt.offsetHeight||29,Rt={x:mt-zt/2,y:Ut-Gt,w:zt,h:Gt+20},fe=Z.some(Ue=>Rt.x<Ue.x+Ue.w+12&&Rt.x+Rt.w+12>Ue.x&&Rt.y<Ue.y+Ue.h+8&&Rt.y+Rt.h+8>Ue.y),Oe=!t.embedded&&S&&(p()?Ut>P-360:mt<350&&Ut>P-390),Ae=m.zoom<1.6&&lt.landmark.priority>(p()?4:8),ae=!t.embedded&&mt>A-(p()?190:270)&&Ut<210,Le=!D||ae||fe||Oe||Ae||Nt.z>1||mt<zt/2+18||mt>A-zt/2-18||Ut<(t.embedded?t.labelTop??170:160)||Ut>P-(t.embedded?t.labelBottom??120:180);rt.style.left=`${mt}px`,rt.style.top=`${Ut}px`,rt.classList.toggle("label-hidden",Le),rt.classList.toggle("selected",lt===S),rt.tabIndex=Le?-1:0,Le||Z.push(Rt)}}function jt(A=et){if(!T)return;const P=T.geometry.attributes.color,Z=T.geometry.attributes.normal,X=w.geometry.attributes.color,st=new Jt;for(const rt of A){const lt=rt===S||rt===E,Nt=lt?Xt.selectedEdge:rt.landmark?Xt.landmarkEdge:Xt.edge;for(const mt of rt.parts){for(let Ut=mt.surfaceStart;Ut<mt.surfaceStart+mt.surfaceCount;Ut++){const zt=Math.abs(Z.getY(Ut)),Gt=Math.max(0,Math.min(.6,(1-zt)*.37+Math.abs(Z.getX(Ut))*.08));st.copy(Xt.white).lerp(lt?Xt.selected:Xt.side,lt?.55+Gt:Gt),S&&!lt&&st.lerp(Xt.paper,.25),P.setXYZ(Ut,st.r,st.g,st.b)}st.copy(Nt),S&&!lt&&st.lerp(Xt.paper,.42);for(let Ut=mt.edgeStart;Ut<mt.edgeStart+mt.edgeCount;Ut++)X.setXYZ(Ut,st.r,st.g,st.b)}}P.needsUpdate=!0,X.needsUpdate=!0,Yt()}function b(A,P){const Z=[],X=[],st=new Map;let rt=0,lt=0;const Nt=new Xn({side:Je});for(const mt of A.buildings){for(const[ae,Le,Ue]of[[mt.positionOffset,mt.positionCount,9],[mt.edgeOffset,mt.edgeCount,6]])if(!Number.isInteger(ae)||!Number.isInteger(Le)||ae<0||Le<0||Le%Ue||ae+Le>P.length)throw new Error("Invalid campus geometry buffer");const Ut=mt.buildingId||mt.id;let zt=st.get(Ut);if(!zt)zt={...mt,buildingId:Ut,center:[...mt.center],bounds:mt.bounds.map(ae=>[...ae]),landmark:h.find(ae=>ae.name===mt.name),parts:[]},st.set(Ut,zt),et.push(zt);else for(let ae=0;ae<3;ae++)zt.bounds[0][ae]=Math.min(zt.bounds[0][ae],mt.bounds[0][ae]),zt.bounds[1][ae]=Math.max(zt.bounds[1][ae],mt.bounds[1][ae]),zt.center[ae]=(zt.bounds[0][ae]+zt.bounds[1][ae])/2;const Gt={surfaceStart:rt,surfaceCount:mt.positionCount/3,edgeStart:lt,edgeCount:mt.edgeCount/3};zt.parts.push(Gt),rt+=Gt.surfaceCount,lt+=Gt.edgeCount;const Rt=new Te;Rt.setAttribute("position",new $e(P.subarray(mt.positionOffset,mt.positionOffset+mt.positionCount),3)),Rt.computeVertexNormals(),Rt.setAttribute("color",new $e(new Float32Array(mt.positionCount),3));const fe=new Te;fe.setAttribute("position",new $e(P.subarray(mt.edgeOffset,mt.edgeOffset+mt.edgeCount),3)),fe.setAttribute("color",new $e(new Float32Array(mt.edgeCount),3)),Z.push(Rt),X.push(fe);const Oe=new Te;Oe.setAttribute("position",Rt.attributes.position),Oe.computeBoundingBox(),Oe.computeBoundingSphere();const Ae=new Ye(Oe,Nt);Ae.userData.building=zt,Ae.updateMatrixWorld(),yt.push(Ae)}T=new Ye(Gs(Z),new Xn({vertexColors:!0,side:Je,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})),M.add(T),w=new Da(Gs(X),new qs({vertexColors:!0,transparent:!0,opacity:.8})),M.add(w),[...Z,...X].forEach(mt=>mt.dispose());for(const mt of et)mt.landmark&&U(mt);_(),e("model-count").textContent="ST. GEORGE · 2025 BUILDING MODEL",jt()}function _(){var P;const A=e("building-picker");A.replaceChildren(new Option("Go to a building…",""));for(const Z of[...et,...a].filter(X=>X.name!=="Campus context").sort((X,st)=>X.name.localeCompare(st.name)))A.add(new Option(`${(P=Z.codes)!=null&&P.length?Z.codes.join(" / ")+" · ":""}${Z.name}`,Z.buildingId));A.value=(S==null?void 0:S.buildingId)||""}function B(A){var Z;if(r=A||{},!M||!T)return;const P=(l==null?void 0:l.codes[0])||((Z=S==null?void 0:S.codes)==null?void 0:Z[0]);for(let X=Dt.length-1;X>=0;X--)Dt[X].b.catalogueTarget&&(Dt[X].button.remove(),Dt.splice(X,1));o=cg(r),a=o.filter(X=>!et.some(st=>{var rt;return(rt=st.codes)==null?void 0:rt.includes(X.codes[0])}));for(const X of a)U(X);S!=null&&S.catalogueTarget&&(S=a.find(X=>X.codes.includes(P))||null),_(),V(o.find(X=>X.codes.includes(P))||null),Yt()}function V(A){if(l=A||null,c&&(M==null||M.remove(c),c.geometry.dispose(),c.material.dispose(),c=null),u.hidden=!A,!!A){if(u.textContent=`${A.codes[0]} · ${A.name}`,M&&A.footprint.length>=3){const P=A.footprint.map(Z=>new I(Z.x,1.5,Z.z));c=new td(new Te().setFromPoints(P),new qs({color:"#0758cc",depthTest:!1})),c.renderOrder=10,M.add(c)}J()}}function J(){if(!m||!l)return;const A=new I(...l.center).project(m),P=e("scene").getBoundingClientRect(),Z=(A.x*.5+.5)*P.width,X=(-A.y*.5+.5)*P.height;u.style.left=`${Z}px`,u.style.top=`${X}px`,u.hidden=A.z<-1||A.z>1||Z<0||Z>P.width||X<0||X>P.height}function ct(A){const P=new Ye(new Oi(1800,1800),new Xn({color:"#ffffff"}));P.rotation.x=-Math.PI/2,P.position.set(0,-.3,-150),M.add(P);const Z=[];for(let mt=-620;mt<700;mt+=20)for(let Ut=-830;Ut<500;Ut+=20)Z.push(mt,-.15,Ut);const X=new Te;X.setAttribute("position",new Fe(Z,3)),M.add(new ed(X,new nc({color:"#87a9d2",size:1,sizeAttenuation:!1,transparent:!0,opacity:.26})));const st=[];for(const mt of A.roads){const Ut=mt.tags.highway,zt=parseFloat(mt.tags.width)||(["primary","secondary","tertiary"].includes(Ut)?8:["residential","unclassified","service"].includes(Ut)?4:1.15);for(let Gt=1;Gt<mt.geometry.length;Gt++){const Rt=mt.geometry[Gt-1],fe=mt.geometry[Gt];if([Rt,fe].some(Jn=>Jn.x<-590||Jn.x>660||Jn.z<-790||Jn.z>480))continue;const Oe=fe.x-Rt.x,Ae=fe.z-Rt.z,ae=Math.hypot(Oe,Ae);if(ae<.1)continue;const Le=-Ae/ae*zt/2,Ue=Oe/ae*zt/2,Kn=new Te;Kn.setAttribute("position",new Fe([Rt.x+Le,-.05,Rt.z+Ue,Rt.x-Le,-.05,Rt.z-Ue,fe.x+Le,-.05,fe.z+Ue,Rt.x-Le,-.05,Rt.z-Ue,fe.x-Le,-.05,fe.z-Ue,fe.x+Le,-.05,fe.z+Ue],3)),st.push(Kn)}}st.length&&(M.add(new Ye(Gs(st),new Xn({color:"#d8e5f5",side:Je}))),st.forEach(mt=>mt.dispose()));const rt=[],lt=[];for(const mt of A.green){const Ut=mt.geometry;if(Ut.length<4||Ut.some(Rt=>Rt.x<-590||Rt.x>660||Rt.z<-790||Rt.z>480))continue;const zt=new cc(Ut.map(Rt=>new Mt(Rt.x,-Rt.z))),Gt=new Jo(zt);Gt.rotateX(-Math.PI/2),Gt.translate(0,-.1,0),rt.push(Gt);for(let Rt=1;Rt<Ut.length;Rt++)lt.push(Ut[Rt-1].x,0,Ut[Rt-1].z,Ut[Rt].x,0,Ut[Rt].z)}rt.length&&(M.add(new Ye(Gs(rt),new Xn({color:"#f0f5fc",side:Je}))),rt.forEach(mt=>mt.dispose()));const Nt=[];for(const mt of A.trees)if(!(mt.x<-590||mt.x>660||mt.z<-790||mt.z>480))for(let Ut=0;Ut<10;Ut++){const zt=Ut/10*Math.PI*2,Gt=(Ut+1)/10*Math.PI*2;Nt.push(mt.x+Math.cos(zt)*2.8,.2,mt.z+Math.sin(zt)*2.8,mt.x+Math.cos(Gt)*2.8,.2,mt.z+Math.sin(Gt)*2.8)}for(const[mt,Ut,zt]of[[lt,"#9fbce0",.48],[Nt,"#7ea3d2",.55]]){const Gt=new Te;Gt.setAttribute("position",new Fe(mt,3)),M.add(new Da(Gt,new qs({color:Ut,transparent:!0,opacity:zt})))}for(const[mt,Ut]of[["St George Street","ST. GEORGE ST."],["College Street","COLLEGE ST."],["Hoskin Avenue","HOSKIN AVE."]]){const zt=[];for(const Gt of A.roads.filter(Rt=>{var fe;return((fe=Rt.tags.name)==null?void 0:fe.replace("St. ","St "))===mt}))for(let Rt=1;Rt<Gt.geometry.length;Rt++){const fe=Gt.geometry[Rt-1],Oe=Gt.geometry[Rt],Ae=Math.hypot(Oe.x-fe.x,Oe.z-fe.z);Ae>55&&Math.abs((fe.x+Oe.x)/2)<350&&Math.abs((fe.z+Oe.z)/2+180)<600&&zt.push({a:fe,b:Oe,length:Ae})}if(zt.sort((Gt,Rt)=>Rt.length-Gt.length),zt.length){const{a:Gt,b:Rt}=zt[0];ut(Ut,(Gt.x+Rt.x)/2,(Gt.z+Rt.z)/2,-Math.atan2(Rt.z-Gt.z,Rt.x-Gt.x))}}}function ut(A,P,Z,X){const st=document.createElement("canvas");st.width=512,st.height=64;const rt=st.getContext("2d");rt.fillStyle="#6a8db8",rt.font="24px Arial",rt.textAlign="center",rt.textBaseline="middle",rt.fillText(A,256,32);const lt=new nd(st);lt.colorSpace=Ke;const Nt=new Ye(new Oi(112,14),new Xn({map:lt,transparent:!0,depthWrite:!1,side:Je}));Nt.rotation.set(-Math.PI/2,0,X),Nt.position.set(P,.25,Z),M.add(Nt)}function j(){if(!g||k)return;const A=e("scene").clientWidth,P=e("scene").clientHeight;if(!A||!P)return;const Z=p()?Math.max(1400,1160*P/A):1490;m.left=-Z*A/P/2,m.right=Z*A/P/2,m.top=Z/2,m.bottom=-Z/2,m.updateProjectionMatrix(),g.setPixelRatio(Math.min(devicePixelRatio,p()?1.5:1.75)),g.setSize(A,P),Yt()}function nt(){if(!s||!n||!m)return;const A=On(n),P=new I(A.x,1,A.z).project(m),Z=e("scene").getBoundingClientRect(),X=(P.x*.5+.5)*Z.width,st=(-P.y*.5+.5)*Z.height;s.style.left=`${X}px`,s.style.top=`${st}px`,s.hidden=P.z<-1||P.z>1||X<0||X>Z.width||st<0||st>Z.height}function dt(A){var rt;const[P,Z,X,st]=Tl.metadata.bbox;n={lat:Math.max(Z,Math.min(st,A.lat)),lng:Math.max(P,Math.min(X,A.lng))},nt(),Yt(),(rt=t.onLocationChange)==null||rt.call(t,{...n})}function Pt(){if(!n)return;s=document.createElement("button"),s.className="campus-location-pin",s.setAttribute("aria-label","Walking start pin. Drag to move, or use arrow keys."),s.title="Walking start · drag to move",s.innerHTML='<span aria-hidden="true">●</span>',e("scene").append(s);let A=null;const P=new gn(new I(0,1,0),0),Z=st=>{const rt=g.domElement.getBoundingClientRect();return Vt.set((st.clientX-rt.left)/rt.width*2-1,-((st.clientY-rt.top)/rt.height)*2+1),St.setFromCamera(Vt,m),St.ray.intersectPlane(P,new I)};Bt(s,"pointerdown",st=>{if(st.button!==0||A)return;const rt=Z(st);if(!rt)return;st.preventDefault(),st.stopPropagation(),y=null,f.enabled=!1;const lt=On(n);A={id:st.pointerId,x:lt.x-rt.x,z:lt.z-rt.z},s.setPointerCapture(st.pointerId),s.focus({preventScroll:!0})}),Bt(s,"pointermove",st=>{if(!A||A.id!==st.pointerId)return;const rt=Z(st);rt&&dt(Il({x:rt.x+A.x,z:rt.z+A.z}))});const X=st=>{(A==null?void 0:A.id)===st.pointerId&&(A=null,f.enabled=!0,Yt())};for(const st of["pointerup","pointercancel","lostpointercapture"])Bt(s,st,X);Bt(s,"keydown",st=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(st.key))return;st.preventDefault(),st.stopPropagation();const rt=On(n),lt=st.shiftKey?50:10;rt.x+=st.key==="ArrowLeft"?-lt:st.key==="ArrowRight"?lt:0,rt.z+=st.key==="ArrowUp"?-lt:st.key==="ArrowDown"?lt:0,dt(Il(rt))}),ot.push(()=>{s==null||s.remove(),s=null})}function gt(A,P){var X;const Z=g.domElement.getBoundingClientRect();return Vt.set((A-Z.left)/Z.width*2-1,-(P-Z.top)/Z.height*2+1),St.setFromCamera(Vt,m),((X=St.intersectObjects(yt,!1)[0])==null?void 0:X.object.userData.building)||null}function pt(A,P,Z){g=new Xm({antialias:!0,powerPreference:"low-power"}),g.setClearColor("#ffffff"),g.outputColorSpace=Ke,e("scene").append(g.domElement),g.domElement.tabIndex=0,g.domElement.setAttribute("aria-label","St. George campus model. Drag to orbit, right-drag to pan, pinch or scroll to zoom. Arrow keys pan, plus and minus zoom, Home resets. Choose a building from the selector or labels."),M=new Wu,m=new $o(-900,900,745,-745,1,4500),f=new qm(m,g.domElement),f.target.copy(_e),m.position.copy(_e).add(Wt),f.enableDamping=!d.matches,f.dampingFactor=.14,f.rotateSpeed=.42,f.minPolarAngle=5e-5,f.maxPolarAngle=Math.PI/2.5,f.minZoom=.7,f.maxZoom=7,f.screenSpacePanning=!1,f.maxTargetRadius=1300,f.cursor.copy(_e),f.update(),f.addEventListener("change",Yt),f.addEventListener("start",()=>{y=null,f.enableDamping=!d.matches}),ct(Z),b(A,P),B(r),j(),Pt();const X=g.domElement;Bt(X,"pointerdown",lt=>{Tt.add(lt.pointerId),Tt.size===1?(z={id:lt.pointerId,x:lt.clientX,y:lt.clientY},W=!1):W=!0}),Bt(X,"pointermove",lt=>{z&&Math.hypot(lt.clientX-z.x,lt.clientY-z.y)>6&&(W=!0),!(lt.pointerType!=="mouse"||lt.buttons||N||y||Tt.size)&&(N=!0,$=requestAnimationFrame(()=>{if(N=!1,k||q!=="ready"||Tt.size)return;const Nt=gt(lt.clientX,lt.clientY);if(Nt!==E){const mt=E;E=Nt,jt([mt,Nt].filter(Boolean)),X.style.cursor=Nt?"pointer":"grab"}}))}),Bt(X,"pointerleave",()=>{const lt=E;E=null,X.style.cursor="grab",lt&&jt([lt])}),Bt(X,"pointerup",lt=>{const Nt=Tt.size===1&&(z==null?void 0:z.id)===lt.pointerId&&!W&&lt.button===0;Tt.delete(lt.pointerId),Nt&&me(gt(lt.clientX,lt.clientY)),Tt.size||(z=null)});const st=lt=>{Tt.delete(lt.pointerId),W=!0,Tt.size||(z=null)};Bt(X,"pointercancel",st),Bt(X,"lostpointercapture",st),Bt(X,"webglcontextlost",lt=>{lt.preventDefault(),q="error",cancelAnimationFrame(at),R=!1,wt("The graphics connection was interrupted. Retry to reopen the map.")}),Bt(X,"keydown",lt=>{if(q==="ready")if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(lt.key)){lt.preventDefault();const Nt=new I(lt.key==="ArrowLeft"?-1:lt.key==="ArrowRight"?1:0,0,lt.key==="ArrowUp"?-1:lt.key==="ArrowDown"?1:0).multiplyScalar(65/m.zoom);se(f.target.clone().add(Nt),m.zoom)}else lt.key==="+"||lt.key==="="?(lt.preventDefault(),Lt(1.4)):lt.key==="-"?(lt.preventDefault(),Lt(1/1.4)):lt.key==="Home"&&(lt.preventDefault(),de())});const rt=new ResizeObserver(j);rt.observe(i),ot.push(()=>rt.disconnect()),Bt(document,"visibilitychange",()=>{document.hidden||Yt()}),Bt(d,"change",()=>{f.enableDamping=!d.matches,Yt()})}function wt(A="Check your connection and WebGL support, then try again."){e("fallback").hidden=!1,e("fallback-message").textContent=A,e("scene").hidden=!0,e("labels").hidden=!0,i.querySelector(".view-controls").hidden=!0,e("building-picker").disabled=!0,e("selection").hidden=!0,i.classList.remove("has-selection"),e("model-count").textContent="CAMPUS MODEL UNAVAILABLE"}function Lt(A){q==="ready"&&se(f.target,Io.clamp(m.zoom*A,.7,7))}e("source-button").onclick=()=>e("sources").showModal(),e("close-sources").onclick=()=>e("sources").close(),oe(e("sources"),"click",A=>{if(A.target===e("sources")){const P=e("sources").getBoundingClientRect();(A.clientX<P.left||A.clientX>P.right||A.clientY<P.top||A.clientY>P.bottom)&&e("sources").close()}}),e("view-3d").onclick=()=>Se(!1),e("view-2d").onclick=()=>Se(!0),e("reset-view").onclick=de,e("zoom-in").onclick=()=>Lt(1.4),e("zoom-out").onclick=()=>Lt(1/1.4),e("labels-toggle").onclick=()=>{D=!D,e("labels-toggle").classList.toggle("active",D),e("labels-toggle").setAttribute("aria-pressed",D),Yt()},e("building-picker").onchange=A=>{A.target.value?me([...et,...a].find(P=>P.buildingId===A.target.value)):Ce()};function Ht(){Ce(),g==null||g.domElement.focus({preventScroll:!0})}e("close-selection").onclick=Ht,oe(i,"keydown",A=>{A.key==="Escape"&&S&&!e("sources").open&&(A.preventDefault(),Ht())}),e("retry-map").onclick=()=>{tt.ready=ft()};function L(){var st;cancelAnimationFrame(at),cancelAnimationFrame($),R=!1,v=!1,N=!1,ot.splice(0).forEach(rt=>rt()),f==null||f.dispose();const A=new Set,P=new Set,Z=new Set,X=rt=>{rt.geometry&&A.add(rt.geometry);for(const lt of[rt.material].flat().filter(Boolean)){P.add(lt);for(const Nt of Object.values(lt))Nt!=null&&Nt.isTexture&&Z.add(Nt)}};V(null),o=[],a=[],M==null||M.traverse(X),yt.forEach(X),A.forEach(rt=>rt.dispose()),P.forEach(rt=>rt.dispose()),Z.forEach(rt=>rt.dispose()),g==null||g.dispose(),g==null||g.forceContextLoss(),g==null||g.domElement.remove(),g=M=m=f=T=w=S=E=y=null,et.length=yt.length=Dt.length=0,Tt.clear(),z=null,F=!1,(st=e("labels"))==null||st.replaceChildren()}async function ft(){var X;if(k)return!1;const A=++it;K==null||K.abort(),L(),q="loading",K=new AbortController;const P=K,Z=setTimeout(()=>P.abort(),3e4);e("loading").classList.remove("done"),e("fallback").hidden=!0,e("scene").hidden=!1,e("labels").hidden=!1,i.querySelector(".view-controls").hidden=!1,e("building-picker").disabled=!0,e("selection").hidden=!0,i.classList.remove("has-selection");try{const st=new URL(t.assetBase||"./data/",document.baseURI),rt="DecompressionStream"in window,lt=await Promise.all([rt?"campus.bin.gz":"campus.bin","ground.json"].map(Rt=>fetch(new URL(Rt,st),{signal:P.signal})));if(lt.some(Rt=>!Rt.ok))throw new Error("Campus asset request failed");const mt=rt&&!((X=lt[0].headers.get("content-encoding"))!=null&&X.includes("gzip"))?new Response(lt[0].body.pipeThrough(new DecompressionStream("gzip"))):lt[0],[Ut,zt,Gt]=await Promise.all([Promise.resolve(Tl),mt.arrayBuffer(),lt[1].json()]);if(k||A!==it)return!1;if(!Array.isArray(Ut.buildings)||!Ut.buildings.length||zt.byteLength%4)throw new Error("Invalid campus data");return pt(Ut,new Float32Array(zt),Gt),q="ready",e("building-picker").disabled=!1,e("view-3d").classList.add("active"),e("view-2d").classList.remove("active"),e("view-3d").setAttribute("aria-pressed","true"),e("view-2d").setAttribute("aria-pressed","false"),Yt(),document.fonts.ready.then(()=>{!k&&A===it&&Yt()}),!0}catch(st){return k||A!==it||(P.abort(),L(),q="error",console.warn("Campus map:",st),wt()),!1}finally{clearTimeout(Z),!k&&A===it&&e("loading").classList.add("done")}}const tt={ready:null,get status(){return q},get stats(){return{buildings:et.length,geometryGroups:yt.length,triangles:(g==null?void 0:g.info.render.triangles)||0,drawCalls:(g==null?void 0:g.info.render.calls)||0,renderCount:C,isIdle:q==="ready"&&!y&&!R&&!v,pixelRatio:(g==null?void 0:g.getPixelRatio())||0,selected:(S==null?void 0:S.name)||null,planView:F}},getBuildings(){return[...et,...a].map(ee)},selectBuilding(A){if(q!=="ready")return!1;const P=[...et,...a].find(Z=>{var X;return Z.buildingId===A||((X=Z.codes)==null?void 0:X.includes(A))});return P?(me(P,A),!0):!1},clearSelection:Ce,reset:de,setView(A){if(!["plan","3d"].includes(A))throw new TypeError("View must be plan or 3d");Se(A==="plan")},setCatalogue:B,setLocation(A){return!A||!Number.isFinite(A.lat)||!Number.isFinite(A.lng)?!1:(n={...A},nt(),Yt(),!0)},focusLocation(){if(q!=="ready"||!n)return;const A=On(n);se(new I(A.x,0,A.z),Math.max(1.4,m.zoom)),s==null||s.focus({preventScroll:!0})},project(A){if(q!=="ready")return null;const P=[...et,...a].find(st=>{var rt;return st.buildingId===A||st.name===A||((rt=st.codes)==null?void 0:rt.includes(A))});if(!P)return null;const Z=new I(...P.center).project(m),X=e("scene").getBoundingClientRect();return{x:X.left+(Z.x*.5+.5)*X.width,y:X.top+(-Z.y*.5+.5)*X.height}},dispose(){k||(k=!0,q="disposed",it++,K==null||K.abort(),It.abort(),e("sources").close(),L(),i.replaceChildren(),i.classList.remove("has-selection"),Vr.delete(i))}};return Vr.set(i,tt),tt.ready=ft(),tt}export{ug as mountCampusMap};
