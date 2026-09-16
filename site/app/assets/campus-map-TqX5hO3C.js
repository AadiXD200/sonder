/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zn={ROTATE:0,DOLLY:1,PAN:2},qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pc=0,la=1,Oc=2,Vs=1,Lc=2,Xi=3,ri=0,tn=1,Qe=2,Un=0,Zi=1,ca=2,ua=3,da=4,Uc=5,Ai=100,Dc=101,Nc=102,Fc=103,Bc=104,zc=200,Hc=201,Gc=202,kc=203,Pl=204,Ol=205,Vc=206,Wc=207,Xc=208,Yc=209,qc=210,Zc=211,Kc=212,Jc=213,$c=214,Yo=0,qo=1,Zo=2,ts=3,Ko=4,Jo=5,$o=6,Qo=7,Ll=0,Qc=1,jc=2,bn=0,Ul=1,Dl=2,Nl=3,Fl=4,Bl=5,zl=6,Hl=7,Gl=300,ai=301,Oi=302,lo=303,co=304,oo=306,jo=1e3,Ln=1001,tr=1002,Be=1003,tu=1004,fs=1005,Ve=1006,uo=1007,si=1008,an=1009,kl=1010,Vl=1011,es=1012,Br=1013,En=1014,Mn=1015,Tn=1016,zr=1017,Hr=1018,ns=1020,Wl=35902,Xl=35899,Yl=1021,ql=1022,hn=1023,Nn=1026,oi=1027,Zl=1028,Gr=1029,li=1030,kr=1031,Vr=1033,Ws=33776,Xs=33777,Ys=33778,qs=33779,er=35840,nr=35841,ir=35842,sr=35843,or=36196,rr=37492,ar=37496,lr=37488,cr=37489,Js=37490,ur=37491,dr=37808,fr=37809,hr=37810,pr=37811,mr=37812,gr=37813,_r=37814,xr=37815,vr=37816,Sr=37817,Mr=37818,yr=37819,br=37820,Er=37821,Tr=36492,Cr=36494,Ar=36495,wr=36283,Rr=36284,$s=36285,Ir=36286,eu=3200,fa=0,nu=1,Yn="",$e="srgb",Qs="srgb-linear",js="linear",ue="srgb",fo=7680,iu=519,su=512,ou=513,ru=514,Wr=515,au=516,lu=517,Xr=518,cu=519,uu=35044,ha="300 es",yn=2e3,to=2001;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){const i=eo("canvas");return i.style.display="block",i}const pa={};function ma(...i){const t="THREE."+i.shift();console.log(t,...i)}function Kl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Kl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function oe(...i){i=Kl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ii(...i){const t=i.join(" ");t in pa||(pa[t]=!0,zt(...i))}function hu(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const pu={[Yo]:qo,[Zo]:$o,[Ko]:Qo,[ts]:Jo,[qo]:Yo,[$o]:Zo,[Qo]:Ko,[Jo]:ts};class Jn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ga=1234567;const Ki=Math.PI/180,is=180/Math.PI;function di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function Yr(i,t){return(i%t+t)%t}function mu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gu(i,t,e){return i!==t?(e-i)/(t-i):0}function Ji(i,t,e){return(1-e)*i+e*t}function _u(i,t,e,n){return Ji(i,t,1-Math.exp(-e*n))}function xu(i,t=1){return t-Math.abs(Yr(i,t*2)-t)}function vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Su(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yu(i,t){return i+Math.random()*(t-i)}function bu(i){return i*(.5-Math.random())}function Eu(i){i!==void 0&&(ga=i);let t=ga+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tu(i){return i*Ki}function Cu(i){return i*is}function Au(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ru(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),u=r((t+n)/2),p=o((t-n)/2),d=r((t-n)/2),h=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*u,l*p,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*p,a*c);break;case"ZXZ":i.set(l*p,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*h,a*c);break;case"YXY":i.set(l*h,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*h,a*u,a*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pr={DEG2RAD:Ki,RAD2DEG:is,generateUUID:di,clamp:$t,euclideanModulo:Yr,mapLinear:mu,inverseLerp:gu,lerp:Ji,damp:_u,pingpong:xu,smoothstep:vu,smootherstep:Su,randInt:Mu,randFloat:yu,randFloatSpread:bu,seededRandom:Eu,degToRad:Tu,radToDeg:Cu,isPowerOfTwo:Au,ceilPowerOfTwo:wu,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:Iu,normalize:Ye,denormalize:wi},ta=class ta{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ta.prototype.isVector2=!0;let bt=ta;class Kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],d=o[r+0],h=o[r+1],g=o[r+2],M=o[r+3];if(p!==M||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+p*M;m<0&&(d=-d,h=-h,g=-g,M=-M,m=-m);let f=1-a;if(m<.9995){const T=Math.acos(m),w=Math.sin(T);f=Math.sin(f*T)/w,a=Math.sin(a*T)/w,l=l*f+d*a,c=c*f+h*a,u=u*f+g*a,p=p*f+M*a}else{l=l*f+d*a,c=c*f+h*a,u=u*f+g*a,p=p*f+M*a;const T=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=T,c*=T,u*=T,p*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=o[r],d=o[r+1],h=o[r+2],g=o[r+3];return t[e]=a*g+u*p+l*h-c*d,t[e+1]=l*g+u*d+c*p-a*h,t[e+2]=c*g+u*h+a*d-l*p,t[e+3]=u*g-a*p-l*d-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),p=a(o/2),d=l(n/2),h=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=d*u*p+c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p-d*h*g;break;case"YXZ":this._x=d*u*p+c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p+d*h*g;break;case"ZXY":this._x=d*u*p-c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p-d*h*g;break;case"ZYX":this._x=d*u*p-c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p+d*h*g;break;case"YZX":this._x=d*u*p+c*h*g,this._y=c*h*p+d*u*g,this._z=c*u*g-d*h*p,this._w=c*u*p-d*h*g;break;case"XZY":this._x=d*u*p-c*h*g,this._y=c*h*p-d*u*g,this._z=c*u*g+d*h*p,this._w=c*u*p+d*h*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],p=e[10],d=n+a+p;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(o-c)*h,this._z=(r-s)*h}else if(n>a&&n>p){const h=2*Math.sqrt(1+n-a-p);this._w=(u-l)/h,this._x=.25*h,this._y=(s+r)/h,this._z=(o+c)/h}else if(a>p){const h=2*Math.sqrt(1+a-n-p);this._w=(o-c)/h,this._x=(s+r)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+p-n-a);this._w=(r-s)/h,this._x=(o+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*a+s*c-o*l,this._y=s*u+r*l+o*a-n*c,this._z=o*u+r*c+n*l-s*a,this._w=r*u-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ea=class ea{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),u=2*(a*e-o*s),p=2*(o*n-r*e);return this.x=e+l*c+r*p-a*u,this.y=n+l*u+a*c-o*p,this.z=s+l*p+o*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ea.prototype.isVector3=!0;let R=ea;const ho=new R,_a=new Kn,na=class na{constructor(t,e,n,s,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],h=n[5],g=n[8],M=s[0],m=s[3],f=s[6],T=s[1],w=s[4],S=s[7],E=s[2],y=s[5],I=s[8];return o[0]=r*M+a*T+l*E,o[3]=r*m+a*w+l*y,o[6]=r*f+a*S+l*I,o[1]=c*M+u*T+p*E,o[4]=c*m+u*w+p*y,o[7]=c*f+u*S+p*I,o[2]=d*M+h*T+g*E,o[5]=d*m+h*w+g*y,o[8]=d*f+h*S+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-n*o*u+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],p=u*r-a*c,d=a*l-u*o,h=c*o-r*l,g=e*p+n*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=p*M,t[1]=(s*c-u*n)*M,t[2]=(a*n-s*r)*M,t[3]=d*M,t[4]=(u*e-s*l)*M,t[5]=(s*o-a*e)*M,t[6]=h*M,t[7]=(n*l-c*e)*M,t[8]=(r*e-n*o)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return Ii("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(po.makeScale(t,e)),this}rotate(t){return Ii("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(po.makeRotation(-t)),this}translate(t,e){return Ii("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};na.prototype.isMatrix3=!0;let Xt=na;const po=new Xt,xa=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),va=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pu(){const i={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ue&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ue&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Ii("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Ii("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qs]:{primaries:t,whitePoint:n,transfer:js,toXYZ:xa,fromXYZ:va,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:xa,fromXYZ:va,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}const ne=Pu();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class Ou{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{pi===void 0&&(pi=eo("canvas")),pi.width=t.width,pi.height=t.height;const s=pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=eo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Dn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lu=0;class qr{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(mo(s[r].image)):o.push(mo(s[r]))}else o=mo(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let Uu=0;const go=new R;class We extends Jn{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Ln,s=Ln,o=Ve,r=si,a=hn,l=an,c=We.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=di(),this.name="",this.source=new qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jo:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jo:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Gl;We.DEFAULT_ANISOTROPY=1;const ia=class ia{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],u=l[4],p=l[8],d=l[1],h=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,S=(h+1)/2,E=(f+1)/2,y=(u+d)/4,I=(p+M)/4,v=(g+m)/4;return w>S&&w>E?w<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(w),s=y/n,o=I/n):S>E?S<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),n=y/s,o=v/s):E<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(E),n=I/o,s=v/o),this.set(n,s,o,e),this}let T=Math.sqrt((m-g)*(m-g)+(p-M)*(p-M)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(p-M)/T,this.z=(d-u)/T,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ia.prototype.isVector4=!0;let Te=ia;class Du extends Jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},o=new We(s),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new qr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends Du{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jl extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nu extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const so=class so{constructor(t,e,n,s,o,r,a,l,c,u,p,d,h,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,u,p,d,h,g,M,m)}set(t,e,n,s,o,r,a,l,c,u,p,d,h,g,M,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=o,f[5]=r,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=d,f[3]=h,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new so().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/mi.setFromMatrixColumn(t,0).length(),o=1/mi.setFromMatrixColumn(t,1).length(),r=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(o),p=Math.sin(o);if(t.order==="XYZ"){const d=r*u,h=r*p,g=a*u,M=a*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=h+g*c,e[5]=d-M*c,e[9]=-a*l,e[2]=M-d*c,e[6]=g+h*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*u,h=l*p,g=c*u,M=c*p;e[0]=d+M*a,e[4]=g*a-h,e[8]=r*c,e[1]=r*p,e[5]=r*u,e[9]=-a,e[2]=h*a-g,e[6]=M+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*u,h=l*p,g=c*u,M=c*p;e[0]=d-M*a,e[4]=-r*p,e[8]=g+h*a,e[1]=h+g*a,e[5]=r*u,e[9]=M-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*u,h=r*p,g=a*u,M=a*p;e[0]=l*u,e[4]=g*c-h,e[8]=d*c+M,e[1]=l*p,e[5]=M*c+d,e[9]=h*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,h=r*c,g=a*l,M=a*c;e[0]=l*u,e[4]=M-d*p,e[8]=g*p+h,e[1]=p,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*p+g,e[10]=d-M*p}else if(t.order==="XZY"){const d=r*l,h=r*c,g=a*l,M=a*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=d*p+M,e[5]=r*u,e[9]=h*p-g,e[2]=g*p-h,e[6]=a*u,e[10]=M*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fu,t,Bu)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Hn.crossVectors(n,en),Hn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Hn.crossVectors(n,en)),Hn.normalize(),hs.crossVectors(en,Hn),s[0]=Hn.x,s[4]=hs.x,s[8]=en.x,s[1]=Hn.y,s[5]=hs.y,s[9]=en.y,s[2]=Hn.z,s[6]=hs.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],h=n[13],g=n[2],M=n[6],m=n[10],f=n[14],T=n[3],w=n[7],S=n[11],E=n[15],y=s[0],I=s[4],v=s[8],C=s[12],U=s[1],N=s[5],B=s[9],W=s[13],D=s[2],k=s[6],Y=s[10],q=s[14],at=s[3],K=s[7],it=s[11],ot=s[15];return o[0]=r*y+a*U+l*D+c*at,o[4]=r*I+a*N+l*k+c*K,o[8]=r*v+a*B+l*Y+c*it,o[12]=r*C+a*W+l*q+c*ot,o[1]=u*y+p*U+d*D+h*at,o[5]=u*I+p*N+d*k+h*K,o[9]=u*v+p*B+d*Y+h*it,o[13]=u*C+p*W+d*q+h*ot,o[2]=g*y+M*U+m*D+f*at,o[6]=g*I+M*N+m*k+f*K,o[10]=g*v+M*B+m*Y+f*it,o[14]=g*C+M*W+m*q+f*ot,o[3]=T*y+w*U+S*D+E*at,o[7]=T*I+w*N+S*k+E*K,o[11]=T*v+w*B+S*Y+E*it,o[15]=T*C+w*W+S*q+E*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],p=t[6],d=t[10],h=t[14],g=t[3],M=t[7],m=t[11],f=t[15],T=l*h-c*d,w=a*h-c*p,S=a*d-l*p,E=r*h-c*u,y=r*d-l*u,I=r*p-a*u;return e*(M*T-m*w+f*S)-n*(g*T-m*E+f*y)+s*(g*w-M*E+f*I)-o*(g*S-M*y+m*I)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],r=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(r*u-a*c)-n*(o*u-a*l)+s*(o*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],p=t[9],d=t[10],h=t[11],g=t[12],M=t[13],m=t[14],f=t[15],T=e*a-n*r,w=e*l-s*r,S=e*c-o*r,E=n*l-s*a,y=n*c-o*a,I=s*c-o*l,v=u*M-p*g,C=u*m-d*g,U=u*f-h*g,N=p*m-d*M,B=p*f-h*M,W=d*f-h*m,D=T*W-w*B+S*N+E*U-y*C+I*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/D;return t[0]=(a*W-l*B+c*N)*k,t[1]=(s*B-n*W-o*N)*k,t[2]=(M*I-m*y+f*E)*k,t[3]=(d*y-p*I-h*E)*k,t[4]=(l*U-r*W-c*C)*k,t[5]=(e*W-s*U+o*C)*k,t[6]=(m*S-g*I-f*w)*k,t[7]=(u*I-d*S+h*w)*k,t[8]=(r*B-a*U+c*v)*k,t[9]=(n*U-e*B-o*v)*k,t[10]=(g*y-M*S+f*T)*k,t[11]=(p*S-u*y-h*T)*k,t[12]=(a*C-r*N-l*v)*k,t[13]=(e*N-n*C+s*v)*k,t[14]=(M*w-g*E-m*T)*k,t[15]=(u*E-p*w+d*T)*k,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,u=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*r,0,c*l-s*a,u*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,u=r+r,p=a+a,d=o*c,h=o*u,g=o*p,M=r*u,m=r*p,f=a*p,T=l*c,w=l*u,S=l*p,E=n.x,y=n.y,I=n.z;return s[0]=(1-(M+f))*E,s[1]=(h+S)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(h-S)*y,s[5]=(1-(d+f))*y,s[6]=(m+T)*y,s[7]=0,s[8]=(g+w)*I,s[9]=(m-T)*I,s[10]=(1-(d+M))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=mi.set(s[0],s[1],s[2]).length();const a=mi.set(s[4],s[5],s[6]).length(),l=mi.set(s[8],s[9],s[10]).length();o<0&&(r=-r),ln.copy(this);const c=1/r,u=1/a,p=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=p,ln.elements[9]*=p,ln.elements[10]*=p,e.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,o,r,a=yn,l=!1){const c=this.elements,u=2*o/(e-t),p=2*o/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let g,M;if(l)g=o/(r-o),M=r*o/(r-o);else if(a===yn)g=-(r+o)/(r-o),M=-2*r*o/(r-o);else if(a===to)g=-r/(r-o),M=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=yn,l=!1){const c=this.elements,u=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),h=-(n+s)/(n-s);let g,M;if(l)g=1/(r-o),M=r/(r-o);else if(a===yn)g=-2/(r-o),M=-(r+o)/(r-o);else if(a===to)g=-1/(r-o),M=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};so.prototype.isMatrix4=!0;let Se=so;const mi=new R,ln=new Se,Fu=new R(0,0,0),Bu=new R(1,1,1),Hn=new R,hs=new R,en=new R,Sa=new Se,Ma=new Kn;class ci{constructor(t=0,e=0,n=0,s=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],u=s[9],p=s[2],d=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-$t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,h),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Zr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zu=0;const ya=new R,gi=new Kn,wn=new Se,ps=new R,Bi=new R,Hu=new R,Gu=new Kn,ba=new R(1,0,0),Ea=new R(0,1,0),Ta=new R(0,0,1),Ca={type:"added"},ku={type:"removed"},_i={type:"childadded",child:null},_o={type:"childremoved",child:null};class Ke extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new R,e=new ci,n=new Kn,s=new R(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Xt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(ba,t)}rotateY(t){return this.rotateOnAxis(Ea,t)}rotateZ(t){return this.rotateOnAxis(Ta,t)}translateOnAxis(t,e){return ya.copy(t).applyQuaternion(this.quaternion),this.position.add(ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ba,t)}translateY(t){return this.translateOnAxis(Ea,t)}translateZ(t){return this.translateOnAxis(Ta,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ps.copy(t):ps.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Bi,ps,this.up):wn.lookAt(ps,Bi,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(wn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ca),_i.child=t,this.dispatchEvent(_i),_i.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ku),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ca),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];o(t.shapes,p)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),p=r(t.shapes),d=r(t.skeletons),h=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ke.DEFAULT_UP=new R(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ms extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vu={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Yr(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=vo(r,o,t+1/3),this.g=vo(r,o,t),this.b=vo(r,o,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(o){o!==void 0&&parseFloat(o)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=$l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ne.workingToColorSpace(ke.copy(this),t),Math.round($t(ke.r*255,0,255))*65536+Math.round($t(ke.g*255,0,255))*256+Math.round($t(ke.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,o=ke.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const p=r-a;switch(c=u<=.5?p/(r+a):p/(2-r-a),r){case n:l=(s-o)/p+(s<o?6:0);break;case s:l=(o-n)/p+2;break;case o:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=$e){ne.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(gs);const n=Ji(Gn.h,gs.h,e),s=Ji(Gn.s,gs.s,e),o=Ji(Gn.l,gs.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Qt;Qt.NAMES=$l;class Wu extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const cn=new R,Rn=new R,So=new R,In=new R,xi=new R,vi=new R,Aa=new R,Mo=new R,yo=new R,bo=new R,Eo=new Te,To=new Te,Co=new Te;class fn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){cn.subVectors(s,e),Rn.subVectors(n,e),So.subVectors(t,e);const r=cn.dot(cn),a=cn.dot(Rn),l=cn.dot(So),c=Rn.dot(Rn),u=Rn.dot(So),p=r*c-a*a;if(p===0)return o.set(0,0,0),null;const d=1/p,h=(c*l-a*u)*d,g=(r*u-a*l)*d;return o.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,In.x),l.addScaledVector(r,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Eo.setScalar(0),To.setScalar(0),Co.setScalar(0),Eo.fromBufferAttribute(t,e),To.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Eo,o.x),r.addScaledVector(To,o.y),r.addScaledVector(Co,o.z),r}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Rn.subVectors(t,e),cn.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),cn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;xi.subVectors(s,n),vi.subVectors(o,n),Mo.subVectors(t,n);const l=xi.dot(Mo),c=vi.dot(Mo);if(l<=0&&c<=0)return e.copy(n);yo.subVectors(t,s);const u=xi.dot(yo),p=vi.dot(yo);if(u>=0&&p<=u)return e.copy(s);const d=l*p-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(xi,r);bo.subVectors(t,o);const h=xi.dot(bo),g=vi.dot(bo);if(g>=0&&h<=g)return e.copy(o);const M=h*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(vi,a);const m=u*g-h*p;if(m<=0&&p-u>=0&&h-g>=0)return Aa.subVectors(o,s),a=(p-u)/(p-u+(h-g)),e.copy(s).addScaledVector(Aa,a);const f=1/(m+M+d);return r=M*f,a=d*f,e.copy(n).addScaledVector(xi,r).addScaledVector(vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ls{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,un):un.fromBufferAttribute(o,r),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_s.copy(n.boundingBox)),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),xs.subVectors(this.max,zi),Si.subVectors(t.a,zi),Mi.subVectors(t.b,zi),yi.subVectors(t.c,zi),kn.subVectors(Mi,Si),Vn.subVectors(yi,Mi),jn.subVectors(Si,yi);let e=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-jn.z,jn.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,jn.z,0,-jn.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-jn.y,jn.x,0];return!Ao(e,Si,Mi,yi,xs)||(e=[1,0,0,0,1,0,0,0,1],!Ao(e,Si,Mi,yi,xs))?!1:(vs.crossVectors(kn,Vn),e=[vs.x,vs.y,vs.z],Ao(e,Si,Mi,yi,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new R,new R,new R,new R,new R,new R,new R,new R],un=new R,_s=new ls,Si=new R,Mi=new R,yi=new R,kn=new R,Vn=new R,jn=new R,zi=new R,xs=new R,vs=new R,ti=new R;function Ao(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ti.fromArray(i,o);const a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ie=new R,Ss=new bt;let Xu=0;class je extends Jn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ss.fromBufferAttribute(this,e),Ss.applyMatrix3(t),this.setXY(e,Ss.x,Ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array),o=Ye(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ql extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jl extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ze extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Yu=new ls,Hi=new R,wo=new R;class cs{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yu.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hi.subVectors(t,this.center);const e=Hi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hi.copy(t.center).add(wo)),this.expandByPoint(Hi.copy(t.center).sub(wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let qu=0;const on=new Se,Ro=new Ke,bi=new R,nn=new ls,Gi=new ls,Ne=new R;class Pe extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?jl:Ql)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Xt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ro.lookAt(t),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ze(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];nn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Gi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(nn.min,Gi.min),nn.expandByPoint(Ne),Ne.addVectors(nn.max,Gi.max),nn.expandByPoint(Ne)):(nn.expandByPoint(Gi.min),nn.expandByPoint(Gi.max))}nn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ne.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ne.fromBufferAttribute(a,c),l&&(bi.fromBufferAttribute(t,c),Ne.add(bi)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new je(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new R,l[v]=new R;const c=new R,u=new R,p=new R,d=new bt,h=new bt,g=new bt,M=new R,m=new R;function f(v,C,U){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,C),p.fromBufferAttribute(n,U),d.fromBufferAttribute(o,v),h.fromBufferAttribute(o,C),g.fromBufferAttribute(o,U),u.sub(c),p.sub(c),h.sub(d),g.sub(d);const N=1/(h.x*g.y-g.x*h.y);isFinite(N)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(p,-h.y).multiplyScalar(N),m.copy(p).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(N),a[v].add(M),a[C].add(M),a[U].add(M),l[v].add(m),l[C].add(m),l[U].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let v=0,C=T.length;v<C;++v){const U=T[v],N=U.start,B=U.count;for(let W=N,D=N+B;W<D;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const w=new R,S=new R,E=new R,y=new R;function I(v){E.fromBufferAttribute(s,v),y.copy(E);const C=a[v];w.copy(C),w.sub(E.multiplyScalar(E.dot(C))).normalize(),S.crossVectors(y,C);const N=S.dot(l[v])<0?-1:1;r.setXYZW(v,w.x,w.y,w.z,N)}for(let v=0,C=T.length;v<C;++v){const U=T[v],N=U.start,B=U.count;for(let W=N,D=N+B;W<D;W+=3)I(t.getX(W+0)),I(t.getX(W+1)),I(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new R,o=new R,r=new R,a=new R,l=new R,c=new R,u=new R,p=new R;if(t)for(let d=0,h=t.count;d<h;d+=3){const g=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,M),r.fromBufferAttribute(e,m),u.subVectors(r,o),p.subVectors(s,o),u.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=e.count;d<h;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,o),p.subVectors(s,o),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,p=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?h=l[M]*a.data.stride+a.offset:h=l[M]*u;for(let f=0;f<u;f++)d[g++]=c[h++]}return new je(d,u,p)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,p=c.length;u<p;u++){const d=c[u],h=t(d,n);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){const h=c[p];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const o=t.morphAttributes;for(const c in o){const u=[],p=o[c];for(let d=0,h=p.length;d<h;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Io=new R,Zu=new R,Ku=new Xt;class xn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Io.subVectors(n,e).cross(Zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Io),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ku.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Ju=0;class Ni extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=di(),this.name="",this.type="Material",this.blending=Zi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Ol,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new xn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const On=new R,Po=new R,Ms=new R,ys=new R;class us{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Po.copy(t).add(e).multiplyScalar(.5),Ms.copy(e).sub(t).normalize(),ys.copy(this.origin).sub(Po);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ms),a=ys.dot(this.direction),l=-ys.dot(Ms),c=ys.lengthSq(),u=Math.abs(1-r*r);let p,d,h,g;if(u>0)if(p=r*l-a,d=r*a-l,g=o*u,p>=0)if(d>=-g)if(d<=g){const M=1/u;p*=M,d*=M,h=p*(p+r*d+2*a)+d*(r*p+d+2*l)+c}else d=o,p=Math.max(0,-(r*d+a)),h=-p*p+d*(d+2*l)+c;else d=-o,p=Math.max(0,-(r*d+a)),h=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-r*o+a)),d=p>0?-o:Math.min(Math.max(-o,-l),o),h=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-o,-l),o),h=d*(d+2*l)+c):(p=Math.max(0,-(r*o+a)),d=p>0?o:Math.min(Math.max(-o,-l),o),h=-p*p+d*(d+2*l)+c);else d=r>0?-o:o,p=Math.max(0,-(r*d+a)),h=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Po).addScaledVector(Ms,d),h}intersectSphere(t,e){if(t.radius<0)return null;On.subVectors(t.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(o=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(o=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),p>=0?(a=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(a=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,o){const r=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,p=t.x-r.x,d=t.y-r.y,h=t.z-r.z,g=e.x-r.x,M=e.y-r.y,m=e.z-r.z,f=n.x-r.x,T=n.y-r.y,w=n.z-r.z,S=Math.abs(l),E=Math.abs(c),y=Math.abs(u);let I,v,C,U,N,B,W,D,k,Y,q,at;if(S>=E&&S>=y?(C=l,B=p,k=g,at=f,l>=0?(I=c,v=u,U=d,N=h,W=M,D=m,Y=T,q=w):(I=u,v=c,U=h,N=d,W=m,D=M,Y=w,q=T)):E>=y?(C=c,B=d,k=M,at=T,c>=0?(I=u,v=l,U=h,N=p,W=m,D=g,Y=w,q=f):(I=l,v=u,U=p,N=h,W=g,D=m,Y=f,q=w)):(C=u,B=h,k=m,at=w,u>=0?(I=l,v=c,U=p,N=d,W=g,D=M,Y=f,q=T):(I=c,v=l,U=d,N=p,W=M,D=g,Y=T,q=f)),C===0)return null;const K=I/C,it=v/C,ot=1/C,Ct=U-K*B,Lt=N-it*B,re=W-K*k,Bt=D-it*k,ie=Y-K*at,J=q-it*at,Q=ie*Bt-J*re,Et=Ct*J-Lt*ie,Ft=re*Lt-Bt*Ct;if(s){if(Q<0||Et<0||Ft<0)return null}else if((Q<0||Et<0||Ft<0)&&(Q>0||Et>0||Ft>0))return null;const yt=Q+Et+Ft;if(yt===0)return null;const Yt=ot*(Q*B+Et*k+Ft*at);return(yt>0?Yt<0:Yt>0)?null:this.at(Yt/yt,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xn extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const wa=new Se,ei=new us,bs=new cs,Ra=new R,Es=new R,Ts=new R,Cs=new R,Oo=new R,As=new R,Ia=new R,ws=new R;class Ze extends Ke{constructor(t=new Pe,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){As.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],p=o[l];u!==0&&(Oo.fromBufferAttribute(p,t),r?As.addScaledVector(Oo,u):As.addScaledVector(Oo.sub(e),u))}e.add(As)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(o),ei.copy(t.ray).recast(t.near),!(bs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(bs,Ra)===null||ei.origin.distanceToSquared(Ra)>(t.far-t.near)**2))&&(wa.copy(o).invert(),ei.copy(t.ray).applyMatrix4(wa),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,p=o.attributes.normal,d=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,M=d.length;g<M;g++){const m=d[g],f=r[m.materialIndex],T=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=T,E=w;S<E;S+=3){const y=a.getX(S),I=a.getX(S+1),v=a.getX(S+2);s=Rs(this,f,t,n,c,u,p,y,I,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),M=Math.min(a.count,h.start+h.count);for(let m=g,f=M;m<f;m+=3){const T=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);s=Rs(this,r,t,n,c,u,p,T,w,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,M=d.length;g<M;g++){const m=d[g],f=r[m.materialIndex],T=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=T,E=w;S<E;S+=3){const y=S,I=S+1,v=S+2;s=Rs(this,f,t,n,c,u,p,y,I,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let m=g,f=M;m<f;m+=3){const T=m,w=m+1,S=m+2;s=Rs(this,r,t,n,c,u,p,T,w,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function $u(i,t,e,n,s,o,r,a){let l;if(t.side===tn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===ri,a),l===null)return null;ws.copy(a),ws.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ws);return c<e.near||c>e.far?null:{distance:c,point:ws.clone(),object:i}}function Rs(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Es),i.getVertexPosition(l,Ts),i.getVertexPosition(c,Cs);const u=$u(i,t,e,n,Es,Ts,Cs,Ia);if(u){const p=new R;fn.getBarycoord(Ia,Es,Ts,Cs,p),s&&(u.uv=fn.getInterpolatedAttribute(s,a,l,c,p,new bt)),o&&(u.uv1=fn.getInterpolatedAttribute(o,a,l,c,p,new bt)),r&&(u.normal=fn.getInterpolatedAttribute(r,a,l,c,p,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new R,materialIndex:0};fn.getNormal(Es,Ts,Cs,d.normal),u.face=d,u.barycoord=p}return u}class Qu extends We{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Be,u=Be,p,d){super(null,r,a,l,c,u,s,o,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ni=new cs,ju=new bt(.5,.5),Is=new R;class tc{constructor(t=new xn,e=new xn,n=new xn,s=new xn,o=new xn,r=new xn){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],u=o[4],p=o[5],d=o[6],h=o[7],g=o[8],M=o[9],m=o[10],f=o[11],T=o[12],w=o[13],S=o[14],E=o[15];if(s[0].setComponents(c-r,h-u,f-g,E-T).normalize(),s[1].setComponents(c+r,h+u,f+g,E+T).normalize(),s[2].setComponents(c+a,h+p,f+M,E+w).normalize(),s[3].setComponents(c-a,h-p,f-M,E-w).normalize(),n)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,h-d,f-m,E-S).normalize();else if(s[4].setComponents(c-l,h-d,f-m,E-S).normalize(),e===yn)s[5].setComponents(c+l,h+d,f+m,E+S).normalize();else if(e===to)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){ni.center.set(0,0,0);const e=ju.distanceTo(t.center);return ni.radius=.7071067811865476+e,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Is.x=s.normal.x>0?t.max.x:t.min.x,Is.y=s.normal.y>0?t.max.y:t.min.y,Is.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zs extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const no=new R,io=new R,Pa=new Se,ki=new us,Ps=new cs,Lo=new R,Oa=new R;class ec extends Ke{constructor(t=new Pe,e=new Zs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)no.fromBufferAttribute(e,s-1),io.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=no.distanceTo(io);t.setAttribute("lineDistance",new ze(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Ps.radius+=o,t.ray.intersectsSphere(Ps)===!1)return;Pa.copy(s).invert(),ki.copy(t.ray).applyMatrix4(Pa);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let M=h,m=g-1;M<m;M+=c){const f=u.getX(M),T=u.getX(M+1),w=Os(this,t,ki,l,f,T,M);w&&e.push(w)}if(this.isLineLoop){const M=u.getX(g-1),m=u.getX(h),f=Os(this,t,ki,l,M,m,g-1);f&&e.push(f)}}else{const h=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let M=h,m=g-1;M<m;M+=c){const f=Os(this,t,ki,l,M,M+1,M);f&&e.push(f)}if(this.isLineLoop){const M=Os(this,t,ki,l,g-1,h,g-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Os(i,t,e,n,s,o,r){const a=i.geometry.attributes.position;if(no.fromBufferAttribute(a,s),io.fromBufferAttribute(a,o),e.distanceSqToSegment(no,io,Lo,Oa)>n)return;Lo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Lo);if(!(c<t.near||c>t.far))return{distance:c,point:Oa.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const La=new R,Ua=new R;class Da extends ec{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)La.fromBufferAttribute(e,s),Ua.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+La.distanceTo(Ua);t.setAttribute("lineDistance",new ze(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class td extends ec{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class nc extends Ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Na=new Se,Or=new us,Ls=new cs,Us=new R;class ed extends Ke{constructor(t=new Pe,e=new nc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),Ls.radius+=o,t.ray.intersectsSphere(Ls)===!1)return;Na.copy(s).invert(),Or.copy(t.ray).applyMatrix4(Na);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),h=Math.min(c.count,r.start+r.count);for(let g=d,M=h;g<M;g++){const m=c.getX(g);Us.fromBufferAttribute(p,m),Fa(Us,m,l,s,t,e,this)}}else{const d=Math.max(0,r.start),h=Math.min(p.count,r.start+r.count);for(let g=d,M=h;g<M;g++)Us.fromBufferAttribute(p,g),Fa(Us,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Fa(i,t,e,n,s,o,r){const a=Or.distanceSqToPoint(i);if(a<e){const l=new R;Or.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ic extends We{constructor(t=[],e=ai,n,s,o,r,a,l,c,u){super(t,e,n,s,o,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nd extends We{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ss extends We{constructor(t,e,n=En,s,o,r,a=Be,l=Be,c,u=Nn,p=1){if(u!==Nn&&u!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:p};super(d,s,o,r,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class id extends ss{constructor(t,e=En,n=ai,s,o,r=Be,a=Be,l,c=Nn){const u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,o,r,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sc extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ds extends Pe{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],u=[],p=[];let d=0,h=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(p,2));function g(M,m,f,T,w,S,E,y,I,v,C){const U=S/I,N=E/v,B=S/2,W=E/2,D=y/2,k=I+1,Y=v+1;let q=0,at=0;const K=new R;for(let it=0;it<Y;it++){const ot=it*N-W;for(let Ct=0;Ct<k;Ct++){const Lt=Ct*U-B;K[M]=Lt*T,K[m]=ot*w,K[f]=D,c.push(K.x,K.y,K.z),K[M]=0,K[m]=0,K[f]=y>0?1:-1,u.push(K.x,K.y,K.z),p.push(Ct/I),p.push(1-it/v),q+=1}}for(let it=0;it<v;it++)for(let ot=0;ot<I;ot++){const Ct=d+ot+k*it,Lt=d+ot+k*(it+1),re=d+(ot+1)+k*(it+1),Bt=d+(ot+1)+k*it;l.push(Ct,Lt,Bt),l.push(Lt,re,Bt),at+=6}a.addGroup(h,at,C),h+=at,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const u=n[s],d=n[s+1]-u,h=(r-u)/d;return(s+h)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new bt:new R);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,s=[],o=[],r=[],a=new R,l=new Se;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new R)}o[0]=new R,r[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let h=1;h<=t;h++){if(o[h]=o[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($t(s[h-1].dot(s[h]),-1,1));o[h].applyMatrix4(l.makeRotationAxis(a,g))}r[h].crossVectors(s[h],o[h])}if(e===!0){let h=Math.acos($t(o[0].dot(o[t]),-1,1));h/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(h=-h);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],h*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Kr extends An{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new bt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*p+this.aX,c=d*p+h*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sd extends Kr{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Jr(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,u,p){let d=(r-o)/c-(a-o)/(c+u)+(a-r)/u,h=(a-r)/u-(l-r)/(u+p)+(l-a)/p;d*=u,h*=u,s(r,a,d,h)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Ba=new R,za=new R,Uo=new Jr,Do=new Jr,No=new Jr;class od extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%o]:(za.subVectors(s[0],s[1]).add(s[0]),c=za);const p=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Ba.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),h),M=Math.pow(p.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Uo.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,g,M,m),Do.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,g,M,m),No.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),Do.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),No.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return n.set(Uo.calc(l),Do.calc(l),No.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ha(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function rd(i,t){const e=1-i;return e*e*t}function ad(i,t){return 2*(1-i)*i*t}function ld(i,t){return i*i*t}function $i(i,t,e,n){return rd(i,t)+ad(i,e)+ld(i,n)}function cd(i,t){const e=1-i;return e*e*e*t}function ud(i,t){const e=1-i;return 3*e*e*i*t}function dd(i,t){return 3*(1-i)*i*i*t}function fd(i,t){return i*i*i*t}function Qi(i,t,e,n,s){return cd(i,t)+ud(i,e)+dd(i,n)+fd(i,s)}class oc extends An{constructor(t=new bt,e=new bt,n=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new bt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Qi(t,s.x,o.x,r.x,a.x),Qi(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hd extends An{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Qi(t,s.x,o.x,r.x,a.x),Qi(t,s.y,o.y,r.y,a.y),Qi(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rc extends An{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pd extends An{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ac extends An{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set($i(t,s.x,o.x,r.x),$i(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class md extends An{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set($i(t,s.x,o.x,r.x),$i(t,s.y,o.y,r.y),$i(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lc extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],p=s[r>s.length-3?s.length-1:r+2];return n.set(Ha(a,l.x,c.x,u.x,p.x),Ha(a,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new bt().fromArray(s))}return this}}var Ga=Object.freeze({__proto__:null,ArcCurve:sd,CatmullRomCurve3:od,CubicBezierCurve:oc,CubicBezierCurve3:hd,EllipseCurve:Kr,LineCurve:rc,LineCurve3:pd,QuadraticBezierCurve:ac,QuadraticBezierCurve3:md,SplineCurve:lc});class gd extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ga[s.type]().fromJSON(s))}return this}}class ka extends gd{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new rc(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new ac(this.currentPoint.clone(),new bt(t,e),new bt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new oc(this.currentPoint.clone(),new bt(t,e),new bt(n,s),new bt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new lc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Kr(t,e,n,s,o,r,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cc extends ka{constructor(t){super(t),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ka().fromJSON(s))}return this}}function _d(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=uc(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=yd(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let u=a,p=l;for(let d=e;d<s;d+=e){const h=i[d],g=i[d+1];h<a&&(a=h),g<l&&(l=g),h>u&&(u=h),g>p&&(p=g)}c=Math.max(u-a,p-l),c=c!==0?32767/c:0}return os(o,r,e,a,l,c,0),r}function uc(i,t,e,n,s){let o;if(s===Ld(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=Va(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=Va(r/n|0,i[r],i[r+1],o);return o&&Li(o,o.next)&&(as(o),o=o.next),o}function ui(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Li(e,e.next)||Me(e.prev,e,e.next)===0)){if(as(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function os(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Ad(i,n,s,o);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(o?vd(i,n,s,o):xd(i)){t.push(l.i,i.i,c.i),as(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Sd(ui(i),t),os(i,t,e,n,s,o,2)):r===2&&Md(i,t,e,n,s,o):os(ui(i),t,e,n,s,o,1);break}}}function xd(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,o,r),p=Math.min(a,l,c),d=Math.max(s,o,r),h=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=p&&g.y<=h&&Yi(s,a,o,l,r,c,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vd(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Me(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,u=s.y,p=o.y,d=r.y,h=Math.min(a,l,c),g=Math.min(u,p,d),M=Math.max(a,l,c),m=Math.max(u,p,d),f=Lr(h,g,t,e,n),T=Lr(M,m,t,e,n);let w=i.prevZ,S=i.nextZ;for(;w&&w.z>=f&&S&&S.z<=T;){if(w.x>=h&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==r&&Yi(a,u,l,p,c,d,w.x,w.y)&&Me(w.prev,w,w.next)>=0||(w=w.prevZ,S.x>=h&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==r&&Yi(a,u,l,p,c,d,S.x,S.y)&&Me(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;w&&w.z>=f;){if(w.x>=h&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==r&&Yi(a,u,l,p,c,d,w.x,w.y)&&Me(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;S&&S.z<=T;){if(S.x>=h&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==r&&Yi(a,u,l,p,c,d,S.x,S.y)&&Me(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Sd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Li(n,s)&&fc(n,e,e.next,s)&&rs(n,s)&&rs(s,n)&&(t.push(n.i,e.i,s.i),as(e),as(e.next),e=i=s),e=e.next}while(e!==i);return ui(e)}function Md(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Id(r,a)){let l=hc(r,a);r=ui(r,r.next),l=ui(l,l.next),os(r,t,e,n,s,o,0),os(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function yd(i,t,e,n){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=uc(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Rd(c))}s.sort(bd);for(let o=0;o<s.length;o++)e=Ed(s[o],e);return e}function bd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ed(i,t){const e=Td(i,t);if(!e)return t;const n=hc(e,i);return ui(n,n.next),ui(e,e.next)}function Td(i,t){let e=t;const n=i.x,s=i.y;let o=-1/0,r;if(Li(i,e))return e;do{if(Li(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>o&&(o=p,r=e.x<e.next.x?e:e.next,p===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&dc(s<c?n:o,s,l,c,s<c?o:n,s,e.x,e.y)){const p=Math.abs(s-e.y)/(n-e.x);rs(e,i)&&(p<u||p===u&&(e.x>r.x||e.x===r.x&&Cd(r,e)))&&(r=e,u=p)}e=e.next}while(e!==a);return r}function Cd(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function Ad(i,t,e,n){let s=i;do s.z===0&&(s.z=Lr(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wd(s)}function wd(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function Lr(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Rd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function dc(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Yi(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&dc(i,t,e,n,s,o,r,a)}function Id(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pd(i,t)&&(rs(i,t)&&rs(t,i)&&Od(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||Li(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Li(i,t){return i.x===t.x&&i.y===t.y}function fc(i,t,e,n){const s=Ns(Me(i,t,e)),o=Ns(Me(i,t,n)),r=Ns(Me(e,n,i)),a=Ns(Me(e,n,t));return!!(s!==o&&r!==a||s===0&&Ds(i,e,t)||o===0&&Ds(i,n,t)||r===0&&Ds(e,i,n)||a===0&&Ds(e,t,n))}function Ds(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ns(i){return i>0?1:i<0?-1:0}function Pd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function rs(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function Od(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hc(i,t){const e=Ur(i.i,i.x,i.y),n=Ur(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Va(i,t,e,n){const s=Ur(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function as(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ur(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ld(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Ud{static triangulate(t,e,n=2){return _d(t,e,n)}}class ji{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return ji.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Wa(t),Xa(n,t);let r=t.length;e.forEach(Wa);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Xa(n,e[l]);const a=Ud.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Wa(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xa(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ui extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,p=t/a,d=e/l,h=[],g=[],M=[],m=[];for(let f=0;f<u;f++){const T=f*d-r;for(let w=0;w<c;w++){const S=w*p-o;g.push(S,-T,0),M.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const w=T+c*f,S=T+c*(f+1),E=T+1+c*(f+1),y=T+1+c*f;h.push(w,S,y),h.push(S,E,y)}this.setIndex(h),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(M,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.widthSegments,t.heightSegments)}}class $r extends Pe{constructor(t=new cc([new bt(0,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(o,3)),this.setAttribute("uv",new ze(r,2));function c(u){const p=s.length/3,d=u.extractPoints(e);let h=d.shape;const g=d.holes;ji.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,f=g.length;m<f;m++){const T=g[m];ji.isClockWise(T)===!0&&(g[m]=T.reverse())}const M=ji.triangulateShape(h,g);for(let m=0,f=g.length;m<f;m++){const T=g[m];h=h.concat(T)}for(let m=0,f=h.length;m<f;m++){const T=h[m];s.push(T.x,T.y,0),o.push(0,0,1),r.push(T.x,T.y)}for(let m=0,f=M.length;m<f;m++){const T=M[m],w=T[0]+p,S=T[1]+p,E=T[2]+p;n.push(w,S,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Dd(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new $r(n,t.curveSegments)}}function Dd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function Di(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Ya(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ya(s[0])){const o=[];for(let r=0,a=s.length;r<a;r++)o[r]=s[r].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=Di(i[e]);for(const s in n)t[s]=n[s]}return t}function Ya(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Fd={clone:Di,merge:qe};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Hd extends Cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gd extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kd extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fs=new R,Bs=new Kn,gn=new R;class mc extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fs,Bs,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Bs,gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fs,Bs,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Bs,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new R,qa=new bt,Za=new bt;class dn extends mc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,qa,Za),e.subVectors(Za,qa)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Qr extends mc{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ei=-90,Ti=1;class Vd extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Ei,Ti,t,e);s.layers=this.layers,this.add(s);const o=new dn(Ei,Ti,t,e);o.layers=this.layers,this.add(o);const r=new dn(Ei,Ti,t,e);r.layers=this.layers,this.add(r);const a=new dn(Ei,Ti,t,e);a.layers=this.layers,this.add(a);const l=new dn(Ei,Ti,t,e);l.layers=this.layers,this.add(l);const c=new dn(Ei,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wd extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ka=new Se;class Xd{constructor(t,e,n=0,s=1/0){this.ray=new us(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):oe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ka.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ka),this}intersectObject(t,e=!0,n=[]){return Dr(t,this,n,e),n.sort(Ja),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Dr(t[s],this,n,e);return n.sort(Ja),n}}function Ja(i,t){return i.distance-t.distance}function Dr(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Dr(o[r],t,e,!0)}}class $a{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const sa=class sa{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};sa.prototype.isMatrix2=!0;let Qa=sa;class Yd extends Jn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ja(i,t,e,n){const s=qd(n);switch(e){case Yl:return i*t;case Zl:return i*t/s.components*s.byteLength;case Gr:return i*t/s.components*s.byteLength;case li:return i*t*2/s.components*s.byteLength;case kr:return i*t*2/s.components*s.byteLength;case ql:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case Vr:return i*t*4/s.components*s.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ys:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nr:case sr:return Math.max(i,16)*Math.max(t,8)/4;case er:case ir:return Math.max(i,8)*Math.max(t,8)/2;case or:case rr:case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case Js:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case hr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case gr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _r:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case yr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case br:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Er:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tr:case Cr:case Ar:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wr:case Rr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $s:case Ir:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qd(i){switch(i){case an:case kl:return{byteLength:1,components:1};case es:case Vl:case Tn:return{byteLength:2,components:1};case zr:case Hr:return{byteLength:2,components:4};case En:case Br:case Mn:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gc(){let i=null,t=!1,e=null,n=null;function s(o,r){n=i.requestAnimationFrame(s),e(o,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Zd(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){const u=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,u);else{p.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<p.length;h++){const g=p[d],M=p[h];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,p[d]=M)}p.length=d+1;for(let h=0,g=p.length;h<g;h++){const M=p[h];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var Kd=`#ifdef USE_ALPHAHASH
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
#endif`,of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`vec3 transformed = vec3( position );
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
#endif`,oh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rh=`#if defined( USE_POINTS_UV )
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
}`,op=`#define DISTANCE
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
}`,rp=`varying vec3 vWorldDirection;
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
}`,Jt={alphahash_fragment:Kd,alphahash_pars_fragment:Jd,alphamap_fragment:$d,alphamap_pars_fragment:Qd,alphatest_fragment:jd,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:of,begin_vertex:rf,beginnormal_vertex:af,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:uf,clipping_planes_fragment:df,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:hf,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:xf,common:vf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:yf,displacementmap_vertex:bf,emissivemap_fragment:Ef,emissivemap_pars_fragment:Tf,colorspace_fragment:Cf,colorspace_pars_fragment:Af,envmap_fragment:wf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:If,envmap_pars_vertex:Pf,envmap_physical_pars_fragment:kf,envmap_vertex:Of,fog_vertex:Lf,fog_pars_vertex:Uf,fog_fragment:Df,fog_pars_fragment:Nf,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Bf,lights_lambert_fragment:zf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Gf,lights_toon_fragment:Vf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:Yf,lights_physical_fragment:qf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Kf,lights_fragment_maps:Jf,lights_fragment_end:$f,lightprobes_pars_fragment:Qf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:th,logdepthbuf_pars_vertex:eh,logdepthbuf_vertex:nh,map_fragment:ih,map_pars_fragment:sh,map_particle_fragment:oh,map_particle_pars_fragment:rh,metalnessmap_fragment:ah,metalnessmap_pars_fragment:lh,morphinstance_vertex:ch,morphcolor_vertex:uh,morphnormal_vertex:dh,morphtarget_pars_vertex:fh,morphtarget_vertex:hh,normal_fragment_begin:ph,normal_fragment_maps:mh,normal_pars_fragment:gh,normal_pars_vertex:_h,normal_vertex:xh,normalmap_pars_fragment:vh,clearcoat_normal_fragment_begin:Sh,clearcoat_normal_fragment_maps:Mh,clearcoat_pars_fragment:yh,iridescence_pars_fragment:bh,opaque_fragment:Eh,packing:Th,premultiplied_alpha_fragment:Ch,project_vertex:Ah,dithering_fragment:wh,dithering_pars_fragment:Rh,roughnessmap_fragment:Ih,roughnessmap_pars_fragment:Ph,shadowmap_pars_fragment:Oh,shadowmap_pars_vertex:Lh,shadowmap_vertex:Uh,shadowmask_pars_fragment:Dh,skinbase_vertex:Nh,skinning_pars_vertex:Fh,skinning_vertex:Bh,skinnormal_vertex:zh,specularmap_fragment:Hh,specularmap_pars_fragment:Gh,tonemapping_fragment:kh,tonemapping_pars_fragment:Vh,transmission_fragment:Wh,transmission_pars_fragment:Xh,uv_pars_fragment:Yh,uv_pars_vertex:qh,uv_vertex:Zh,worldpos_vertex:Kh,background_vert:Jh,background_frag:$h,backgroundCube_vert:Qh,backgroundCube_frag:jh,cube_vert:tp,cube_frag:ep,depth_vert:np,depth_frag:ip,distance_vert:sp,distance_frag:op,equirect_vert:rp,equirect_frag:ap,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:up,meshbasic_frag:dp,meshlambert_vert:fp,meshlambert_frag:hp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:_p,meshphong_vert:xp,meshphong_frag:vp,meshphysical_vert:Sp,meshphysical_frag:Mp,meshtoon_vert:yp,meshtoon_frag:bp,points_vert:Ep,points_frag:Tp,shadow_vert:Cp,shadow_frag:Ap,sprite_vert:wp,sprite_frag:Rp},vt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},vn={basic:{uniforms:qe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:qe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:qe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:qe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:qe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:qe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:qe([vt.points,vt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:qe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:qe([vt.common,vt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:qe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:qe([vt.sprite,vt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:qe([vt.common,vt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:qe([vt.lights,vt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};vn.physical={uniforms:qe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const zs={r:0,b:0,g:0},Ip=new Se,_c=new Xt;_c.set(-1,0,0,0,1,0,0,0,1);function Pp(i,t,e,n,s,o){const r=new Qt(0);let a=s===!0?0:1,l,c,u=null,p=0,d=null;function h(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){const S=T.backgroundBlurriness>0;w=t.get(w,S)}return w}function g(T){let w=!1;const S=h(T);S===null?m(r,a):S&&S.isColor&&(m(S,1),w=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(T,w){const S=h(w);S&&(S.isCubeTexture||S.mapping===oo)?(c===void 0&&(c=new Ze(new ds(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Di(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,y,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_c),c.material.toneMapped=ne.getTransfer(S.colorSpace)!==ue,(u!==S||p!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ze(new Ui(2,2),new Cn({name:"BackgroundMaterial",uniforms:Di(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ne.getTransfer(S.colorSpace)!==ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,w){T.getRGB(zs,pc(i)),e.buffers.color.setClear(zs.r,zs.g,zs.b,w,o)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(T,w=1){r.set(T),a=w,m(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,m(r,a)},render:g,addToRenderList:M,dispose:f}}function Op(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(N,B,W,D,k){let Y=!1;const q=p(N,D,W,B);o!==q&&(o=q,c(o.object)),Y=h(N,D,W,k),Y&&g(N,D,W,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,S(N,B,W,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function p(N,B,W,D){const k=D.wireframe===!0;let Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);const q=N.isInstancedMesh===!0?N.id:0;let at=Y[q];at===void 0&&(at={},Y[q]=at);let K=at[W.id];K===void 0&&(K={},at[W.id]=K);let it=K[k];return it===void 0&&(it=d(l()),K[k]=it),it}function d(N){const B=[],W=[],D=[];for(let k=0;k<e;k++)B[k]=0,W[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:D,object:N,attributes:{},index:null}}function h(N,B,W,D){const k=o.attributes,Y=B.attributes;let q=0;const at=W.getAttributes();for(const K in at)if(at[K].location>=0){const ot=k[K];let Ct=Y[K];if(Ct===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Ct=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Ct=N.instanceColor)),ot===void 0||ot.attribute!==Ct||Ct&&ot.data!==Ct.data)return!0;q++}return o.attributesNum!==q||o.index!==D}function g(N,B,W,D){const k={},Y=B.attributes;let q=0;const at=W.getAttributes();for(const K in at)if(at[K].location>=0){let ot=Y[K];ot===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(ot=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(ot=N.instanceColor));const Ct={};Ct.attribute=ot,ot&&ot.data&&(Ct.data=ot.data),k[K]=Ct,q++}o.attributes=k,o.attributesNum=q,o.index=D}function M(){const N=o.newAttributes;for(let B=0,W=N.length;B<W;B++)N[B]=0}function m(N){f(N,0)}function f(N,B){const W=o.newAttributes,D=o.enabledAttributes,k=o.attributeDivisors;W[N]=1,D[N]===0&&(i.enableVertexAttribArray(N),D[N]=1),k[N]!==B&&(i.vertexAttribDivisor(N,B),k[N]=B)}function T(){const N=o.newAttributes,B=o.enabledAttributes;for(let W=0,D=B.length;W<D;W++)B[W]!==N[W]&&(i.disableVertexAttribArray(W),B[W]=0)}function w(N,B,W,D,k,Y,q){q===!0?i.vertexAttribIPointer(N,B,W,k,Y):i.vertexAttribPointer(N,B,W,D,k,Y)}function S(N,B,W,D){M();const k=D.attributes,Y=W.getAttributes(),q=B.defaultAttributeValues;for(const at in Y){const K=Y[at];if(K.location>=0){let it=k[at];if(it===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(it=N.instanceColor)),it!==void 0){const ot=it.normalized,Ct=it.itemSize,Lt=t.get(it);if(Lt===void 0)continue;const re=Lt.buffer,Bt=Lt.type,ie=Lt.bytesPerElement,J=Bt===i.INT||Bt===i.UNSIGNED_INT||it.gpuType===Br;if(it.isInterleavedBufferAttribute){const Q=it.data,Et=Q.stride,Ft=it.offset;if(Q.isInstancedInterleavedBuffer){for(let yt=0;yt<K.locationSize;yt++)f(K.location+yt,Q.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let yt=0;yt<K.locationSize;yt++)m(K.location+yt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let yt=0;yt<K.locationSize;yt++)w(K.location+yt,Ct/K.locationSize,Bt,ot,Et*ie,(Ft+Ct/K.locationSize*yt)*ie,J)}else{if(it.isInstancedBufferAttribute){for(let Q=0;Q<K.locationSize;Q++)f(K.location+Q,it.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Q=0;Q<K.locationSize;Q++)m(K.location+Q);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Q=0;Q<K.locationSize;Q++)w(K.location+Q,Ct/K.locationSize,Bt,ot,Ct*ie,Ct/K.locationSize*Q*ie,J)}}else if(q!==void 0){const ot=q[at];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(K.location,ot);break;case 3:i.vertexAttrib3fv(K.location,ot);break;case 4:i.vertexAttrib4fv(K.location,ot);break;default:i.vertexAttrib1fv(K.location,ot)}}}}T()}function E(){C();for(const N in n){const B=n[N];for(const W in B){const D=B[W];for(const k in D){const Y=D[k];for(const q in Y)u(Y[q].object),delete Y[q];delete D[k]}}delete n[N]}}function y(N){if(n[N.id]===void 0)return;const B=n[N.id];for(const W in B){const D=B[W];for(const k in D){const Y=D[k];for(const q in Y)u(Y[q].object),delete Y[q];delete D[k]}}delete n[N.id]}function I(N){for(const B in n){const W=n[B];for(const D in W){const k=W[D];if(k[N.id]===void 0)continue;const Y=k[N.id];for(const q in Y)u(Y[q].object),delete Y[q];delete k[N.id]}}}function v(N){for(const B in n){const W=n[B],D=N.isInstancedMesh===!0?N.id:0,k=W[D];if(k!==void 0){for(const Y in k){const q=k[Y];for(const at in q)u(q[at].object),delete q[at];delete k[Y]}delete W[D],Object.keys(W).length===0&&delete n[B]}}}function C(){U(),r=!0,o!==s&&(o=s,c(o.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:U,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function Lp(i,t,e){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];e.update(d,n,1)}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function Up(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(I){return!(I!==hn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const v=I===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==an&&I!==Mn&&!v&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:S,maxSamples:E,samples:y}}function Dp(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new xn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const h=p.length!==0||d||n!==0||s;return s=d,n=p.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,h){const g=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||o&&!m)o?u(null):c();else{const T=o?0:n,w=T*4;let S=f.clippingState||null;l.value=S,S=u(g,d,w,h);for(let E=0;E!==w;++E)S[E]=e[E];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,h,g){const M=p!==null?p.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const f=h+M*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,S=h;w!==M;++w,S+=4)r.copy(p[w]).applyMatrix4(T,a),r.normal.toArray(m,S),m[S+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const Ri=4,Np=6,Fp=20,Bp=256,Vi=new Qr,tl=new Qt;let Fo=null,Bo=0,zo=0,Ho=!1;const zp=new R,ii=new R;class el{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){const{size:r=256,position:a=zp}=o;Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Bo,zo),this._renderer.xr.enabled=Ho,t.scissorTest=!1,Ci(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ai||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Tn,format:hn,colorSpace:Qs,depthBuffer:!1},s=nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Hp(o)),this._blurMaterial=kp(o,t,e),this._ggxMaterial=Gp(o,t,e)}return s}_compileMaterial(t){const e=new Ze(new Pe,t);this._renderer.compile(e,Vi)}_sceneToCubeUV(t,e,n,s,o){const l=new dn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,h=p.toneMapping;p.getClearColor(tl),p.toneMapping=bn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new ds,new Xn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let f=!1;const T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,f=!0):(m.color.copy(tl),f=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[w],o.y,o.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[w],o.z)):(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[w]));const E=this._cubeSize;Ci(s,S*E,w>2?E:0,E,E),p.setRenderTarget(s),f&&p.render(M,l),p.render(t,l)}p.toneMapping=h,p.autoClear=d,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ai||t.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const o=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Ci(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Vi)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-u*u),d=c*1.25,h=p*d,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-Ri?n-g+Ri:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=g-e,Ci(o,m,f,3*M,2*M),s.setRenderTarget(o),s.render(a,Vi),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=g-n,Ci(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(a,Vi)}_blur(t,e,n,s){const o=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,r),this._blurPass(o,t,n,n,r)}_blurPass(t,e,n,s,o){const r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],p=3*u*(s>this._lodMax-Ri?s-this._lodMax+Ri:0),d=4*(this._cubeSize-u);Ci(e,p,d,3*u,2*u),r.setRenderTarget(e),r.render(l,Vi)}}function Hp(i){const t=[],e=[];let n=i;const s=i-Ri+1+Np;for(let o=0;o<s;o++){const r=Math.pow(2,n);t.push(r);const a=1/(r-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,d=6,h=3,g=new Float32Array(h*d*p),M=new Float32Array(h*d*p);for(let f=0;f<p;f++){const T=f%3*2/3-1,w=f>2?0:-1,S=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];g.set(S,h*d*f);for(let E=0;E<d;E++){const y=u[E*2]*2-1,I=u[E*2+1]*2-1;f===0?ii.set(1,I,y):f===1?ii.set(-y,1,-I):f===2?ii.set(-y,I,1):f===3?ii.set(-1,I,-y):f===4?ii.set(-y,-1,I):ii.set(y,I,-1),ii.toArray(M,(f*d+E)*h)}}const m=new Pe;m.setAttribute("position",new je(g,h)),m.setAttribute("outputDirection",new je(M,h)),e.push(new Ze(m,null)),n>Ri&&n--}return{lodMeshes:e,sizeLods:t}}function nl(i,t,e){const n=new pn(i,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ci(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gp(i,t,e){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ro(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function kp(i,t,e){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:Fp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ro(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function il(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function sl(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xc extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ic(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ds(5,5,5),o=new Cn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Un});o.uniforms.tEquirect.value=e;const r=new Ze(s,o),a=e.minFilter;return e.minFilter===si&&(e.minFilter=Ve),new Vd(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}function Vp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,h=!1){return d==null?null:h?r(d):o(d)}function o(d){if(d&&d.isTexture){const h=d.mapping;if(h===lo||h===co)if(t.has(d)){const g=t.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const M=new xc(g.height);return M.fromEquirectangularTexture(i,d),t.set(d,M),d.addEventListener("dispose",c),a(M.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const h=d.mapping,g=h===lo||h===co,M=h===ai||h===Oi;if(g||M){let m=e.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new el(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const T=d.image;return g&&T&&T.height>0||M&&T&&l(T)?(n===null&&(n=new el(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===lo?d.mapping=ai:h===co&&(d.mapping=Oi),d}function l(d){let h=0;const g=6;for(let M=0;M<g;M++)d[M]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Wp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ii("WebGLRenderer: "+n+" extension not supported."),s}}}function Xp(i,t,e,n){const s={},o=new WeakMap;function r(p){const d=p.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete s[d.id];const h=o.get(d);h&&(t.remove(h),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(p,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(p){const d=p.attributes;for(const h in d)t.update(d[h],i.ARRAY_BUFFER)}function c(p){const d=[],h=p.index,g=p.attributes.position;let M=0;if(g===void 0)return;if(h!==null){const T=h.array;M=h.version;for(let w=0,S=T.length;w<S;w+=3){const E=T[w+0],y=T[w+1],I=T[w+2];d.push(E,y,y,I,I,E)}}else{const T=g.array;M=g.version;for(let w=0,S=T.length/3-1;w<S;w+=3){const E=w+0,y=w+1,I=w+2;d.push(E,y,y,I,I,E)}}const m=new(g.count>=65535?jl:Ql)(d,1);m.version=M;const f=o.get(p);f&&t.remove(f),o.set(p,m)}function u(p){const d=o.get(p);if(d){const h=p.index;h!==null&&d.version<h.version&&c(p)}else c(p);return o.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function Yp(i,t,e){let n;function s(p){n=p}let o,r;function a(p){o=p.type,r=p.bytesPerElement}function l(p,d){i.drawElements(n,d,o,p*r),e.update(d,n,1)}function c(p,d,h){h!==0&&(i.drawElementsInstanced(n,d,o,p*r,h),e.update(d,n,h))}function u(p,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,p,0,h);let M=0;for(let m=0;m<h;m++)M+=d[m];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function qp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:oe("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zp(i,t,e){const n=new WeakMap,s=new Te;function o(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==p){let C=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let w=0;h===!0&&(w=1),g===!0&&(w=2),M===!0&&(w=3);let S=a.attributes.position.count*w,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const y=new Float32Array(S*E*4*p),I=new Jl(y,S,E,p);I.type=Mn,I.needsUpdate=!0;const v=w*4;for(let U=0;U<p;U++){const N=m[U],B=f[U],W=T[U],D=S*E*4*U;for(let k=0;k<N.count;k++){const Y=k*v;h===!0&&(s.fromBufferAttribute(N,k),y[D+Y+0]=s.x,y[D+Y+1]=s.y,y[D+Y+2]=s.z,y[D+Y+3]=0),g===!0&&(s.fromBufferAttribute(B,k),y[D+Y+4]=s.x,y[D+Y+5]=s.y,y[D+Y+6]=s.z,y[D+Y+7]=0),M===!0&&(s.fromBufferAttribute(W,k),y[D+Y+8]=s.x,y[D+Y+9]=s.y,y[D+Y+10]=s.z,y[D+Y+11]=W.itemSize===4?s.w:1)}}d={count:p,texture:I,size:new bt(S,E)},n.set(a,d),a.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let h=0;for(let M=0;M<c.length;M++)h+=c[M];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function Kp(i,t,e,n,s){let o=new WeakMap;function r(c){const u=s.render.frame,p=c.geometry,d=t.get(c,p);if(o.get(d)!==u&&(t.update(d),o.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;o.get(h)!==u&&(h.update(),o.set(h,u))}return d}function a(){o=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const Jp={[Ul]:"LINEAR_TONE_MAPPING",[Dl]:"REINHARD_TONE_MAPPING",[Nl]:"CINEON_TONE_MAPPING",[Fl]:"ACES_FILMIC_TONE_MAPPING",[zl]:"AGX_TONE_MAPPING",[Hl]:"NEUTRAL_TONE_MAPPING",[Bl]:"CUSTOM_TONE_MAPPING"};function $p(i,t,e,n,s,o){const r=new pn(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Pe;c.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ze([0,2,0,0,2,0],2));const u=new Hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ze(c,u),d=new Qr(-1,1,1,-1,0,1);let h=null,g=null,M=!1,m,f=null,T=[],w=!1;this.setSize=function(S,E){r.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let y=0;y<T.length;y++){const I=T[y];I.setSize&&I.setSize(S,E)}},this.setEffects=function(S){T=S,w=T.length>0&&T[0].isRenderPass===!0;const E=r.width,y=r.height;T.length>0&&a===null&&(a=new pn(E,y,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new pn(E,y,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<T.length;I++){const v=T[I];v.setSize&&v.setSize(E,y)}},this.begin=function(S,E){if(M||S.toneMapping===bn&&T.length===0)return!1;if(f=E,E!==null){const y=E.width,I=E.height;(r.width!==y||r.height!==I)&&this.setSize(y,I)}return w===!1&&S.setRenderTarget(r),m=S.toneMapping,S.toneMapping=bn,!0},this.hasRenderPass=function(){return w},this.end=function(S,E){S.toneMapping=m,M=!0;let y=r,I=a;for(let v=0;v<T.length;v++){const C=T[v];C.enabled!==!1&&(C.render(S,I,y,E),C.needsSwap!==!1&&(y=I,I=I===a?l:a))}if(h!==S.outputColorSpace||g!==S.toneMapping){h=S.outputColorSpace,g=S.toneMapping,u.defines={},ne.getTransfer(h)===ue&&(u.defines.SRGB_TRANSFER="");const v=Jp[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(f),S.render(p,d),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const vc=new We,Nr=new ss(1,1),Sc=new Jl,Mc=new Nu,yc=new ic,ol=[],rl=[],al=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function Fi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=ol[s];if(o===void 0&&(o=new Float32Array(s),ol[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ao(i,t){let e=rl[t];e===void 0&&(e=new Int32Array(t),rl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),Ue(e,n)}}function i0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),Ue(e,n)}}function s0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Le(e,n))return;al.set(n),i.uniformMatrix4fv(this.addr,!1,al),Ue(e,n)}}function o0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function c0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function h0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Nr.compareFunction=e.isReversedDepthBuffer()?Xr:Wr,o=Nr):o=vc,e.setTexture2D(t||o,s)}function p0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mc,s)}function m0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yc,s)}function g0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sc,s)}function _0(i){switch(i){case 5126:return Qp;case 35664:return jp;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return o0;case 35667:case 35671:return r0;case 35668:case 35672:return a0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(i,t){i.uniform1fv(this.addr,t)}function v0(i,t){const e=Fi(t,this.size,2);i.uniform2fv(this.addr,e)}function S0(i,t){const e=Fi(t,this.size,3);i.uniform3fv(this.addr,e)}function M0(i,t){const e=Fi(t,this.size,4);i.uniform4fv(this.addr,e)}function y0(i,t){const e=Fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b0(i,t){const e=Fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E0(i,t){const e=Fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T0(i,t){i.uniform1iv(this.addr,t)}function C0(i,t){i.uniform2iv(this.addr,t)}function A0(i,t){i.uniform3iv(this.addr,t)}function w0(i,t){i.uniform4iv(this.addr,t)}function R0(i,t){i.uniform1uiv(this.addr,t)}function I0(i,t){i.uniform2uiv(this.addr,t)}function P0(i,t){i.uniform3uiv(this.addr,t)}function O0(i,t){i.uniform4uiv(this.addr,t)}function L0(i,t,e){const n=this.cache,s=t.length,o=ao(e,s);Le(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));let r;this.type===i.SAMPLER_2D_SHADOW?r=Nr:r=vc;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function U0(i,t,e){const n=this.cache,s=t.length,o=ao(e,s);Le(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Mc,o[r])}function D0(i,t,e){const n=this.cache,s=t.length,o=ao(e,s);Le(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||yc,o[r])}function N0(i,t,e){const n=this.cache,s=t.length,o=ao(e,s);Le(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Sc,o[r])}function F0(i){switch(i){case 5126:return x0;case 35664:return v0;case 35665:return S0;case 35666:return M0;case 35674:return y0;case 35675:return b0;case 35676:return E0;case 5124:case 35670:return T0;case 35667:case 35671:return C0;case 35668:case 35672:return A0;case 35669:case 35673:return w0;case 5125:return R0;case 36294:return I0;case 36295:return P0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return N0}}class B0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_0(e.type)}}class z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F0(e.type)}}class H0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function ul(i,t){i.seq.push(t),i.map[t.id]=t}function G0(i,t,e){const n=i.name,s=n.length;for(Go.lastIndex=0;;){const o=Go.exec(n),r=Go.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){ul(e,c===void 0?new B0(a,i,t):new z0(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new H0(a),ul(e,p)),e=p}}}class Ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);G0(a,l,this)}const s=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function dl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const k0=37297;let V0=0;function W0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const fl=new Xt;function X0(i){ne._getMatrix(fl,ne.workingColorSpace,i);const t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case js:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+W0(i.getShaderSource(t),a)}else return o}function Y0(i,t){const e=X0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const q0={[Ul]:"Linear",[Dl]:"Reinhard",[Nl]:"Cineon",[Fl]:"ACESFilmic",[zl]:"AgX",[Hl]:"Neutral",[Bl]:"Custom"};function Z0(i,t){const e=q0[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hs=new R;function K0(){ne.getLuminanceCoefficients(Hs);const i=Hs.x.toFixed(4),t=Hs.y.toFixed(4),e=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function $0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function qi(i){return i!==""}function pl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ml(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fr(i){return i.replace(j0,em)}const tm=new Map;function em(i,t){let e=Jt[t];if(e===void 0){const n=tm.get(t);if(n!==void 0)e=Jt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fr(e)}const nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(nm,im)}function im(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function _l(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const sm={[Vs]:"SHADOWMAP_TYPE_PCF",[Xi]:"SHADOWMAP_TYPE_VSM"};function om(i){return sm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rm={[ai]:"ENVMAP_TYPE_CUBE",[Oi]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE_UV"};function am(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":rm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const lm={[Oi]:"ENVMAP_MODE_REFRACTION"};function cm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const um={[Ll]:"ENVMAP_BLENDING_MULTIPLY",[Qc]:"ENVMAP_BLENDING_MIX",[jc]:"ENVMAP_BLENDING_ADD"};function dm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":um[i.combine]||"ENVMAP_BLENDING_NONE"}function fm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hm(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=om(e),c=am(e),u=cm(e),p=dm(e),d=fm(e),h=J0(e),g=$0(o),M=s.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),f.length>0&&(f+=`
`)):(m=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),f=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==bn?Z0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Y0("linearToOutputTexel",e.outputColorSpace),K0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qi).join(`
`)),r=Fr(r),r=pl(r,e),r=ml(r,e),a=Fr(a),a=pl(a,e),a=ml(a,e),r=gl(r),a=gl(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=T+m+r,S=T+f+a,E=dl(s,s.VERTEX_SHADER,w),y=dl(s,s.FRAGMENT_SHADER,S);s.attachShader(M,E),s.attachShader(M,y),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(N){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(M)||"",W=s.getShaderInfoLog(E)||"",D=s.getShaderInfoLog(y)||"",k=B.trim(),Y=W.trim(),q=D.trim();let at=!0,K=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,y);else{const it=hl(s,E,"vertex"),ot=hl(s,y,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+it+`
`+ot)}else k!==""?zt("WebGLProgram: Program Info Log:",k):(Y===""||q==="")&&(K=!1);K&&(N.diagnostics={runnable:at,programLog:k,vertexShader:{log:Y,prefix:m},fragmentShader:{log:q,prefix:f}})}s.deleteShader(E),s.deleteShader(y),v=new Ks(s,M),C=Q0(s,M)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(M,k0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=y,this}let pm=0;class mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gm(t),e.set(t,n)),n}}class gm{constructor(t){this.id=pm++,this.code=t,this.usedTimes=0}}function _m(i){return i===li||i===Js||i===$s}function xm(i,t,e,n,s,o){const r=new Zr,a=new mm,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer;let d=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,C,U,N,B,W){const D=N.fog,k=B.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,at=t.get(v.envMap||Y,q),K=at&&at.mapping===oo?at.image.height:null,it=h[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&zt("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ct=ot!==void 0?ot.length:0;let Lt=0;k.morphAttributes.position!==void 0&&(Lt=1),k.morphAttributes.normal!==void 0&&(Lt=2),k.morphAttributes.color!==void 0&&(Lt=3);let re,Bt,ie,J;if(it){const tt=vn[it];re=tt.vertexShader,Bt=tt.fragmentShader}else{re=v.vertexShader,Bt=v.fragmentShader;const tt=a.getVertexShaderStage(v),st=a.getFragmentShaderStage(v);a.update(v,tt,st),ie=tt.id,J=st.id}const Q=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Ft=B.isInstancedMesh===!0,yt=B.isBatchedMesh===!0,Yt=!!v.map,ye=!!v.matcap,qt=!!at,ee=!!v.aoMap,le=!!v.lightMap,Vt=!!v.bumpMap&&v.wireframe===!1,jt=!!v.normalMap,Ae=!!v.displacementMap,be=!!v.emissiveMap,xe=!!v.metalnessMap,ge=!!v.roughnessMap,L=v.anisotropy>0,Ee=v.clearcoat>0,ae=v.dispersion>0,b=v.retroreflectivity>0,_=v.iridescence>0,F=v.sheen>0,V=v.transmission>0,Z=L&&!!v.anisotropyMap,ut=Ee&&!!v.clearcoatMap,dt=Ee&&!!v.clearcoatNormalMap,$=Ee&&!!v.clearcoatRoughnessMap,nt=_&&!!v.iridescenceMap,ht=_&&!!v.iridescenceThicknessMap,It=F&&!!v.sheenColorMap,_t=F&&!!v.sheenRoughnessMap,gt=!!v.specularMap,Pt=!!v.specularColorMap,Nt=!!v.specularIntensityMap,Wt=V&&!!v.transmissionMap,P=V&&!!v.thicknessMap,pt=!!v.gradientMap,j=!!v.alphaMap,mt=v.alphaTest>0,xt=!!v.alphaHash,rt=!!v.extensions;let A=bn;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(A=i.toneMapping);const z={shaderID:it,shaderType:v.type,shaderName:v.name,vertexShader:re,fragmentShader:Bt,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:yt,batchingColor:yt&&B._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&B.instanceColor!==null,instancingMorph:Ft&&B.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:ye,envMap:qt,envMapMode:qt&&at.mapping,envMapCubeUVHeight:K,aoMap:ee,lightMap:le,bumpMap:Vt,normalMap:jt,displacementMap:Ae,emissiveMap:be,normalMapObjectSpace:jt&&v.normalMapType===nu,normalMapTangentSpace:jt&&v.normalMapType===fa,packedNormalMap:jt&&v.normalMapType===fa&&_m(v.normalMap.format),metalnessMap:xe,roughnessMap:ge,anisotropy:L,anisotropyMap:Z,clearcoat:Ee,clearcoatMap:ut,clearcoatNormalMap:dt,clearcoatRoughnessMap:$,dispersion:ae,retroreflection:b,iridescence:_,iridescenceMap:nt,iridescenceThicknessMap:ht,sheen:F,sheenColorMap:It,sheenRoughnessMap:_t,specularMap:gt,specularColorMap:Pt,specularIntensityMap:Nt,transmission:V,transmissionMap:Wt,thicknessMap:P,gradientMap:pt,opaque:v.transparent===!1&&v.blending===Zi&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:mt,alphaHash:xt,combine:v.combine,mapUv:Yt&&g(v.map.channel),aoMapUv:ee&&g(v.aoMap.channel),lightMapUv:le&&g(v.lightMap.channel),bumpMapUv:Vt&&g(v.bumpMap.channel),normalMapUv:jt&&g(v.normalMap.channel),displacementMapUv:Ae&&g(v.displacementMap.channel),emissiveMapUv:be&&g(v.emissiveMap.channel),metalnessMapUv:xe&&g(v.metalnessMap.channel),roughnessMapUv:ge&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:ut&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(v.sheenRoughnessMap.channel),specularMapUv:gt&&g(v.specularMap.channel),specularColorMapUv:Pt&&g(v.specularColorMap.channel),specularIntensityMapUv:Nt&&g(v.specularIntensityMap.channel),transmissionMapUv:Wt&&g(v.transmissionMap.channel),thicknessMapUv:P&&g(v.thicknessMap.channel),alphaMapUv:j&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(jt||L),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Yt||j),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&jt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Et,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Lt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:A,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:be&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qe,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&v.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return z.vertexUv1s=l.has(1),z.vertexUv2s=l.has(2),z.vertexUv3s=l.has(3),l.clear(),z}function m(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)C.push(U),C.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(f(C,v),T(C,v),C.push(i.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function f(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function T(v,C){r.disableAll(),C.instancing&&r.enable(0),C.instancingColor&&r.enable(1),C.instancingMorph&&r.enable(2),C.matcap&&r.enable(3),C.envMap&&r.enable(4),C.normalMapObjectSpace&&r.enable(5),C.normalMapTangentSpace&&r.enable(6),C.clearcoat&&r.enable(7),C.iridescence&&r.enable(8),C.alphaTest&&r.enable(9),C.vertexColors&&r.enable(10),C.vertexAlphas&&r.enable(11),C.vertexUv1s&&r.enable(12),C.vertexUv2s&&r.enable(13),C.vertexUv3s&&r.enable(14),C.vertexTangents&&r.enable(15),C.anisotropy&&r.enable(16),C.alphaHash&&r.enable(17),C.batching&&r.enable(18),C.dispersion&&r.enable(19),C.retroreflection&&r.enable(24),C.batchingColor&&r.enable(20),C.gradientMap&&r.enable(21),C.packedNormalMap&&r.enable(22),C.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.reversedDepthBuffer&&r.enable(4),C.skinning&&r.enable(5),C.morphTargets&&r.enable(6),C.morphNormals&&r.enable(7),C.morphColors&&r.enable(8),C.premultipliedAlpha&&r.enable(9),C.shadowMapEnabled&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.transmission&&r.enable(15),C.sheen&&r.enable(16),C.opaque&&r.enable(17),C.pointsUvs&&r.enable(18),C.decodeVideoTexture&&r.enable(19),C.decodeVideoTextureEmissive&&r.enable(20),C.alphaToCoverage&&r.enable(21),C.numLightProbeGrids>0&&r.enable(22),C.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function w(v){const C=h[v.type];let U;if(C){const N=vn[C];U=Fd.clone(N.uniforms)}else U=v.uniforms;return U}function S(v,C){let U=u.get(C);return U!==void 0?++U.usedTimes:(U=new hm(i,C,v,s),c.push(U),u.set(C,U)),U}function E(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function y(v){a.remove(v)}function I(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:w,acquireProgram:S,releaseProgram:E,releaseShaderCache:y,programs:c,dispose:I}}function vm(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vl(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,M,m,f){let T=i[t];return T===void 0?(T={id:d.id,object:d,geometry:h,material:g,materialVariant:r(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:f},i[t]=T):(T.id=d.id,T.object=d,T.geometry=h,T.material=g,T.materialVariant=r(d),T.groupOrder=M,T.renderOrder=d.renderOrder,T.z=m,T.group=f),t++,T}function l(d,h,g,M,m,f,T){T.reversedDepth===!0&&(m=-m);const w=a(d,h,g,M,m,f);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(d,h,g,M,m,f){const T=a(d,h,g,M,m,f);g.transmission>0?n.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function u(d,h){e.length>1&&e.sort(d||Sm),n.length>1&&n.sort(h||xl),s.length>1&&s.sort(h||xl)}function p(){for(let d=t,h=i.length;d<h;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:p,sort:u}}function Mm(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new vl,i.set(n,[r])):s>=o.length?(r=new vl,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Qt};break;case"SpotLight":e={position:new R,direction:new R,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function bm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Em=0;function Tm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cm(i){const t=new ym,e=bm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,o=new Se,r=new Se;function a(c){let u=0,p=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let h=0,g=0,M=0,m=0,f=0,T=0,w=0,S=0,E=0,y=0,I=0,v=0,C=0,U=0;c.sort(Tm);for(let B=0,W=c.length;B<W;B++){const D=c[B],k=D.color,Y=D.intensity,q=D.distance;let at=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===li?at=D.shadow.map.texture:at=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=k.r*Y,p+=k.g*Y,d+=k.b*Y;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],Y);U++}else if(D.isSunLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const it=D.shadow,ot=e.get(D);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[g]=ot,n.sunShadowMap[g]=at;const Ct=it.getViewportCount();for(let Lt=0;Lt<Ct;Lt++)n.sunShadowMatrix[M+Lt]=it.getMatrix(Lt),n.sunShadowCascade[M+Lt]=it._cascadeData[Lt];M+=Ct,g++}n.sun[h]=K,h++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const it=D.shadow,ot=e.get(D);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,n.directionalShadow[m]=ot,n.directionalShadowMap[m]=at,n.directionalShadowMatrix[m]=D.shadow.matrix,E++}n.directional[m]=K,m++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(k).multiplyScalar(Y),K.distance=q,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[T]=K;const it=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,it.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[T]=it.matrix,D.castShadow){const ot=e.get(D);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,n.spotShadow[T]=ot,n.spotShadowMap[T]=at,I++}T++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(k).multiplyScalar(Y),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=K,w++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const it=D.shadow,ot=e.get(D);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,ot.shadowCameraNear=it.camera.near,ot.shadowCameraFar=it.camera.far,n.pointShadow[f]=ot,n.pointShadowMap[f]=at,n.pointShadowMatrix[f]=D.shadow.matrix,y++}n.point[f]=K,f++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(Y),K.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[S]=K,S++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;const N=n.hash;(N.sunLength!==h||N.directionalLength!==m||N.pointLength!==f||N.spotLength!==T||N.rectAreaLength!==w||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==E||N.numPointShadows!==y||N.numSpotShadows!==I||N.numSpotMaps!==v||N.numLightProbes!==U)&&(n.sun.length=h,n.directional.length=m,n.spot.length=T,n.rectArea.length=w,n.point.length=f,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+v-C,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=U,N.sunLength=h,N.directionalLength=m,N.pointLength=f,N.spotLength=T,N.rectAreaLength=w,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=E,N.numPointShadows=y,N.numSpotShadows=I,N.numSpotMaps=v,N.numLightProbes=U,n.version=Em++)}function l(c,u){let p=0,d=0,h=0,g=0,M=0,m=0;const f=u.matrixWorldInverse;for(let T=0,w=c.length;T<w;T++){const S=c[T];if(S.isSunLight){const E=n.sun[p];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),p++}else if(S.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),d++}else if(S.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const E=n.rectArea[M];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),r.identity(),o.copy(S.matrixWorld),o.premultiply(f),r.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),M++}else if(S.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),h++}else if(S.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:n}}function Sl(i){const t=new Cm(i),e=[],n=[],s=[];function o(d){p.camera=d,e.length=0,n.length=0,s.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}const p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:p,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function Am(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Sl(i),t.set(s,[a])):o>=r.length?(a=new Sl(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const wm=`void main() {
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
}`,Im=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Pm=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Ml=new Se,Wi=new R,ko=new R;function Om(i,t,e){let n=new tc;const s=new bt,o=new bt,r=new Te,a=new Gd,l=new kd,c={},u=e.maxTextureSize,p={[ri]:tn,[tn]:ri,[Qe]:Qe},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:wm,fragmentShader:Rm}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ze(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let f=this.type;this.render=function(y,I,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Lc&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vs);const C=i.getRenderTarget(),U=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Un),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=f!==this.type;W&&I.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=y.length;D<k;D++){const Y=y[D],q=Y.shadow;if(q===void 0){zt("WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const at=q.getFrameExtents();s.multiply(at),o.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/at.x),s.x=o.x*at.x,q.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/at.y),s.y=o.y*at.y,q.mapSize.y=o.y));const K=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||W===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Xi){if(Y.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new pn(s.x,s.y,{format:li,type:Tn,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),q.map.texture.name=Y.name+".shadowMap",q.map.depthTexture=new ss(s.x,s.y,Mn),q.map.depthTexture.name=Y.name+".shadowMapDepth",q.map.depthTexture.format=Nn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Be,q.map.depthTexture.magFilter=Be}else Y.isPointLight?(q.map=new xc(s.x),q.map.depthTexture=new id(s.x,En)):(q.map=new pn(s.x,s.y),q.map.depthTexture=new ss(s.x,s.y,En)),q.map.depthTexture.name=Y.name+".shadowMap",q.map.depthTexture.format=Nn,this.type===Vs?(q.map.depthTexture.compareFunction=K?Xr:Wr,q.map.depthTexture.minFilter=Ve,q.map.depthTexture.magFilter=Ve):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Be,q.map.depthTexture.magFilter=Be);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);const it=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Y.isPointLight!==!0&&q.updateMatrices(Y,v);for(let ot=0;ot<it;ot++){const Ct=q.getCamera(ot);if(Y.isPointLight){const Lt=q.camera,re=q.matrix,Bt=Y.distance||Lt.far;Bt!==Lt.far&&(Lt.far=Bt,Lt.updateProjectionMatrix()),Wi.setFromMatrixPosition(Y.matrixWorld),Lt.position.copy(Wi),ko.copy(Lt.position),ko.add(Im[ot]),Lt.up.copy(Pm[ot]),Lt.lookAt(ko),Lt.updateMatrixWorld(),re.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Ml.multiplyMatrices(Lt.projectionMatrix,Lt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Ml,Lt.coordinateSystem,Lt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(q.map),i.clear());const Lt=q.getViewport(ot);r.set(o.x*Lt.x,o.y*Lt.y,o.x*Lt.z,o.y*Lt.w),B.viewport(r)}n=q.getFrustum(ot),S(I,v,Ct,Y,this.type)}q.isPointLightShadow!==!0&&this.type===Xi&&T(q,v),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(C,U,N)};function T(y,I){const v=t.update(M);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,h.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),y.mapPass===null?y.mapPass=new pn(s.x,s.y,{format:li,type:Tn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(I,null,v,d,M,null),h.uniforms.shadow_pass.value=y.mapPass.texture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(I,null,v,h,M,null)}function w(y,I,v,C){let U=null;const N=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(N!==void 0)U=N;else if(U=v.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=U.uuid,W=I.uuid;let D=c[B];D===void 0&&(D={},c[B]=D);let k=D[W];k===void 0&&(k=U.clone(),D[W]=k,I.addEventListener("dispose",E)),U=k}if(U.visible=I.visible,U.wireframe=I.wireframe,C===Xi?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:p[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const B=i.properties.get(U);B.light=v}return U}function S(y,I,v,C,U){if(y.visible===!1)return;if(y.layers.test(I.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&U===Xi)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld);const W=t.update(y),D=y.material;if(Array.isArray(D)){const k=W.groups;for(let Y=0,q=k.length;Y<q;Y++){const at=k[Y],K=D[at.materialIndex];if(K&&K.visible){const it=w(y,K,C,U);y.onBeforeShadow(i,y,I,v,W,it,at),i.renderBufferDirect(v,null,W,it,y,at),y.onAfterShadow(i,y,I,v,W,it,at)}}}else if(D.visible){const k=w(y,D,C,U);y.onBeforeShadow(i,y,I,v,W,k,null),i.renderBufferDirect(v,null,W,k,y,null),y.onAfterShadow(i,y,I,v,W,k,null)}}const B=y.children;for(let W=0,D=B.length;W<D;W++)S(B[W],I,v,C,U)}function E(y){y.target.removeEventListener("dispose",E);for(const v in c){const C=c[v],U=y.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}}function Lm(i,t){function e(){let P=!1;const pt=new Te;let j=null;const mt=new Te(0,0,0,0);return{setMask:function(xt){j!==xt&&!P&&(i.colorMask(xt,xt,xt,xt),j=xt)},setLocked:function(xt){P=xt},setClear:function(xt,rt,A,z,tt){tt===!0&&(xt*=z,rt*=z,A*=z),pt.set(xt,rt,A,z),mt.equals(pt)===!1&&(i.clearColor(xt,rt,A,z),mt.copy(pt))},reset:function(){P=!1,j=null,mt.set(-1,0,0,0)}}}function n(){let P=!1,pt=!1,j=null,mt=null,xt=null;return{setReversed:function(rt){if(pt!==rt){const A=t.get("EXT_clip_control");rt?A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT):A.clipControlEXT(A.LOWER_LEFT_EXT,A.NEGATIVE_ONE_TO_ONE_EXT),pt=rt;const z=xt;xt=null,this.setClear(z)}},getReversed:function(){return pt},setTest:function(rt){rt?Q(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(rt){j!==rt&&!P&&(i.depthMask(rt),j=rt)},setFunc:function(rt){if(pt&&(rt=pu[rt]),mt!==rt){switch(rt){case Yo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Zo:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=rt}},setLocked:function(rt){P=rt},setClear:function(rt){xt!==rt&&(xt=rt,pt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){P=!1,j=null,mt=null,xt=null,pt=!1}}}function s(){let P=!1,pt=null,j=null,mt=null,xt=null,rt=null,A=null,z=null,tt=null;return{setTest:function(st){P||(st?Q(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(st){pt!==st&&!P&&(i.stencilMask(st),pt=st)},setFunc:function(st,lt,ct){(j!==st||mt!==lt||xt!==ct)&&(i.stencilFunc(st,lt,ct),j=st,mt=lt,xt=ct)},setOp:function(st,lt,ct){(rt!==st||A!==lt||z!==ct)&&(i.stencilOp(st,lt,ct),rt=st,A=lt,z=ct)},setLocked:function(st){P=st},setClear:function(st){tt!==st&&(i.clearStencil(st),tt=st)},reset:function(){P=!1,pt=null,j=null,mt=null,xt=null,rt=null,A=null,z=null,tt=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},p={},d={},h=new WeakMap,g=[],M=null,m=!1,f=null,T=null,w=null,S=null,E=null,y=null,I=null,v=new Qt(0,0,0),C=0,U=!1,N=null,B=null,W=null,D=null,k=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,at=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=at>=1):K.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=at>=2);let it=null,ot={};const Ct=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),re=new Te().fromArray(Ct),Bt=new Te().fromArray(Lt);function ie(P,pt,j,mt){const xt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(P,rt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let A=0;A<j;A++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(pt+A,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return rt}const J={};J[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),r.setFunc(ts),Vt(!1),jt(la),Q(i.CULL_FACE),ee(Un);function Q(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Et(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Ft(P,pt){return d[P]!==pt?(i.bindFramebuffer(P,pt),d[P]=pt,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function yt(P,pt){let j=g,mt=!1;if(P){j=h.get(pt),j===void 0&&(j=[],h.set(pt,j));const xt=P.textures;if(j.length!==xt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,A=xt.length;rt<A;rt++)j[rt]=i.COLOR_ATTACHMENT0+rt;j.length=xt.length,mt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,mt=!0);mt&&i.drawBuffers(j)}function Yt(P){return M!==P?(i.useProgram(P),M=P,!0):!1}const ye={[Ai]:i.FUNC_ADD,[Dc]:i.FUNC_SUBTRACT,[Nc]:i.FUNC_REVERSE_SUBTRACT};ye[Fc]=i.MIN,ye[Bc]=i.MAX;const qt={[zc]:i.ZERO,[Hc]:i.ONE,[Gc]:i.SRC_COLOR,[Pl]:i.SRC_ALPHA,[qc]:i.SRC_ALPHA_SATURATE,[Xc]:i.DST_COLOR,[Vc]:i.DST_ALPHA,[kc]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[Yc]:i.ONE_MINUS_DST_COLOR,[Wc]:i.ONE_MINUS_DST_ALPHA,[Zc]:i.CONSTANT_COLOR,[Kc]:i.ONE_MINUS_CONSTANT_COLOR,[Jc]:i.CONSTANT_ALPHA,[$c]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(P,pt,j,mt,xt,rt,A,z,tt,st){if(P===Un){m===!0&&(Et(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),P!==Uc){if(P!==f||st!==U){if((T!==Ai||E!==Ai)&&(i.blendEquation(i.FUNC_ADD),T=Ai,E=Ai),st)switch(P){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFunc(i.ONE,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case da:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:oe("WebGLState: Invalid blending: ",P);break}else switch(P){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ua:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case da:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",P);break}w=null,S=null,y=null,I=null,v.set(0,0,0),C=0,f=P,U=st}return}xt=xt||pt,rt=rt||j,A=A||mt,(pt!==T||xt!==E)&&(i.blendEquationSeparate(ye[pt],ye[xt]),T=pt,E=xt),(j!==w||mt!==S||rt!==y||A!==I)&&(i.blendFuncSeparate(qt[j],qt[mt],qt[rt],qt[A]),w=j,S=mt,y=rt,I=A),(z.equals(v)===!1||tt!==C)&&(i.blendColor(z.r,z.g,z.b,tt),v.copy(z),C=tt),f=P,U=!1}function le(P,pt){P.side===Qe?Et(i.CULL_FACE):Q(i.CULL_FACE);let j=P.side===tn;pt&&(j=!j),Vt(j),P.blending===Zi&&P.transparent===!1?ee(Un):ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),o.setMask(P.colorWrite);const mt=P.stencilWrite;a.setTest(mt),mt&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),be(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(P){N!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),N=P)}function jt(P){P!==Pc?(Q(i.CULL_FACE),P!==B&&(P===la?i.cullFace(i.BACK):P===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),B=P}function Ae(P){P!==W&&(q&&i.lineWidth(P),W=P)}function be(P,pt,j){P?(Q(i.POLYGON_OFFSET_FILL),(D!==pt||k!==j)&&(D=pt,k=j,r.getReversed()&&(pt=-pt),i.polygonOffset(pt,j))):Et(i.POLYGON_OFFSET_FILL)}function xe(P){P?Q(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function ge(P){P===void 0&&(P=i.TEXTURE0+Y-1),it!==P&&(i.activeTexture(P),it=P)}function L(P,pt,j){j===void 0&&(it===null?j=i.TEXTURE0+Y-1:j=it);let mt=ot[j];mt===void 0&&(mt={type:void 0,texture:void 0},ot[j]=mt),(mt.type!==P||mt.texture!==pt)&&(it!==j&&(i.activeTexture(j),it=j),i.bindTexture(P,pt||J[P]),mt.type=P,mt.texture=pt)}function Ee(){const P=ot[it];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ae(){try{i.compressedTexImage2D(...arguments)}catch(P){oe("WebGLState:",P)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(P){oe("WebGLState:",P)}}function _(){try{i.texSubImage2D(...arguments)}catch(P){oe("WebGLState:",P)}}function F(){try{i.texSubImage3D(...arguments)}catch(P){oe("WebGLState:",P)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(P){oe("WebGLState:",P)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(P){oe("WebGLState:",P)}}function ut(){try{i.texStorage2D(...arguments)}catch(P){oe("WebGLState:",P)}}function dt(){try{i.texStorage3D(...arguments)}catch(P){oe("WebGLState:",P)}}function $(){try{i.texImage2D(...arguments)}catch(P){oe("WebGLState:",P)}}function nt(){try{i.texImage3D(...arguments)}catch(P){oe("WebGLState:",P)}}function ht(P){return p[P]!==void 0?p[P]:i.getParameter(P)}function It(P,pt){p[P]!==pt&&(i.pixelStorei(P,pt),p[P]=pt)}function _t(P){re.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),re.copy(P))}function gt(P){Bt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Bt.copy(P))}function Pt(P,pt){let j=c.get(pt);j===void 0&&(j=new WeakMap,c.set(pt,j));let mt=j.get(P);mt===void 0&&(mt=i.getUniformBlockIndex(pt,P.name),j.set(P,mt))}function Nt(P,pt){const mt=c.get(pt).get(P);l.get(pt)!==mt&&(i.uniformBlockBinding(pt,mt,P.__bindingPointIndex),l.set(pt,mt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},it=null,ot={},d={},h=new WeakMap,g=[],M=null,m=!1,f=null,T=null,w=null,S=null,E=null,y=null,I=null,v=new Qt(0,0,0),C=0,U=!1,N=null,B=null,W=null,D=null,k=null,re.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:Q,disable:Et,bindFramebuffer:Ft,drawBuffers:yt,useProgram:Yt,setBlending:ee,setMaterial:le,setFlipSided:Vt,setCullFace:jt,setLineWidth:Ae,setPolygonOffset:be,setScissorTest:xe,activeTexture:ge,bindTexture:L,unbindTexture:Ee,compressedTexImage2D:ae,compressedTexImage3D:b,texImage2D:$,texImage3D:nt,pixelStorei:It,getParameter:ht,updateUBOMapping:Pt,uniformBlockBinding:Nt,texStorage2D:ut,texStorage3D:dt,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:_t,viewport:gt,reset:Wt}}function Um(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap,p=new Set;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,_){return g?new OffscreenCanvas(b,_):eo("canvas")}function m(b,_,F){let V=1;const Z=ae(b);if((Z.width>F||Z.height>F)&&(V=F/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ut=Math.floor(V*Z.width),dt=Math.floor(V*Z.height);d===void 0&&(d=M(ut,dt));const $=_?M(ut,dt):d;return $.width=ut,$.height=dt,$.getContext("2d").drawImage(b,0,0,ut,dt),zt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ut+"x"+dt+")."),$}else return"data"in b&&zt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function f(b){return b.generateMipmaps}function T(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(b,_,F,V,Z,ut=!1){if(b!==null){if(i[b]!==void 0)return i[b];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let dt;V&&(dt=t.get("EXT_texture_norm16"),dt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8),F===i.UNSIGNED_SHORT&&dt&&($=dt.R16_EXT),F===i.SHORT&&dt&&($=dt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),_===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8),F===i.UNSIGNED_SHORT&&dt&&($=dt.RG16_EXT),F===i.SHORT&&dt&&($=dt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_SHORT&&dt&&($=dt.RGB16_EXT),F===i.SHORT&&dt&&($=dt.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){const nt=ut?js:ne.getTransfer(Z);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=nt===ue?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&dt&&($=dt.RGBA16_EXT),F===i.SHORT&&dt&&($=dt.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function E(b,_){let F;return b?_===null||_===En||_===ns?F=i.DEPTH24_STENCIL8:_===Mn?F=i.DEPTH32F_STENCIL8:_===es&&(F=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===En||_===ns?F=i.DEPTH_COMPONENT24:_===Mn?F=i.DEPTH_COMPONENT32F:_===es&&(F=i.DEPTH_COMPONENT16),F}function y(b,_){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==Be&&b.minFilter!==Ve?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function I(b){const _=b.target;_.removeEventListener("dispose",I),C(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&p.delete(_)}function v(b){const _=b.target;_.removeEventListener("dispose",v),N(_)}function C(b){const _=n.get(b);if(_.__webglInit===void 0)return;const F=b.source,V=h.get(F);if(V){const Z=V[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&U(b),Object.keys(V).length===0&&h.delete(F)}n.remove(b)}function U(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const F=b.source,V=h.get(F);delete V[_.__cacheKey],r.memory.textures--}function N(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Z=0;Z<_.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=b.textures;for(let V=0,Z=F.length;V<Z;V++){const ut=n.get(F[V]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),r.memory.textures--),n.remove(F[V])}n.remove(b)}let B=0;function W(){B=0}function D(){return B}function k(b){B=b}function Y(){const b=B;return b>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,b}function q(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function at(b,_){const F=n.get(b);if(b.isVideoTexture&&L(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const V=b.image;if(V===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(F,b,_);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function K(b,_){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Et(F,b,_);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function it(b,_){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Et(F,b,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function ot(b,_){const F=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&F.__version!==b.version){Ft(F,b,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const Ct={[jo]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[tr]:i.MIRRORED_REPEAT},Lt={[Be]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},re={[su]:i.NEVER,[cu]:i.ALWAYS,[ou]:i.LESS,[Wr]:i.LEQUAL,[ru]:i.EQUAL,[Xr]:i.GEQUAL,[au]:i.GREATER,[lu]:i.NOTEQUAL};function Bt(b,_){if(_.type===Mn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ve||_.magFilter===uo||_.magFilter===fs||_.magFilter===si||_.minFilter===Ve||_.minFilter===uo||_.minFilter===fs||_.minFilter===si)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Ct[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Ct[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Ct[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Lt[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Lt[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,re[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Be||_.minFilter!==fs&&_.minFilter!==si||_.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ie(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",I));const V=_.source;let Z=h.get(V);Z===void 0&&(Z={},h.set(V,Z));const ut=q(_);if(ut!==b.__cacheKey){Z[ut]===void 0&&(Z[ut]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,F=!0),Z[ut].usedTimes++;const dt=Z[b.__cacheKey];dt!==void 0&&(Z[b.__cacheKey].usedTimes--,dt.usedTimes===0&&U(_)),b.__cacheKey=ut,b.__webglTexture=Z[ut].texture}return F}function J(b,_,F){return Math.floor(Math.floor(b/F)/_)}function Q(b,_,F,V){const ut=b.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,V,_.data);else{ut.sort((It,_t)=>It.start-_t.start);let dt=0;for(let It=1;It<ut.length;It++){const _t=ut[dt],gt=ut[It],Pt=_t.start+_t.count,Nt=J(gt.start,_.width,4),Wt=J(_t.start,_.width,4);gt.start<=Pt+1&&Nt===Wt&&J(gt.start+gt.count-1,_.width,4)===Nt?_t.count=Math.max(_t.count,gt.start+gt.count-_t.start):(++dt,ut[dt]=gt)}ut.length=dt+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let It=0,_t=ut.length;It<_t;It++){const gt=ut[It],Pt=Math.floor(gt.start/4),Nt=Math.ceil(gt.count/4),Wt=Pt%_.width,P=Math.floor(Pt/_.width),pt=Nt,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,P),e.texSubImage2D(i.TEXTURE_2D,0,Wt,P,pt,j,F,V,_.data)}b.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function Et(b,_,F){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);const Z=ie(b,_),ut=_.source;e.bindTexture(V,b.__webglTexture,i.TEXTURE0+F);const dt=n.get(ut);if(ut.version!==dt.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const j=ne.getPrimaries(ne.workingColorSpace),mt=_.colorSpace===Yn?null:ne.getPrimaries(_.colorSpace),xt=_.colorSpace===Yn||j===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let nt=m(_.image,!1,s.maxTextureSize);nt=Ee(_,nt);const ht=o.convert(_.format,_.colorSpace),It=o.convert(_.type);let _t=S(_.internalFormat,ht,It,_.normalized,_.colorSpace,_.isVideoTexture);Bt(V,_);let gt;const Pt=_.mipmaps,Nt=_.isVideoTexture!==!0,Wt=dt.__version===void 0||Z===!0,P=ut.dataReady,pt=y(_,nt);if(_.isDepthTexture)_t=E(_.format===oi,_.type),Wt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,_t,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,_t,nt.width,nt.height,0,ht,It,null));else if(_.isDataTexture)if(Pt.length>0){Nt&&Wt&&e.texStorage2D(i.TEXTURE_2D,pt,_t,Pt[0].width,Pt[0].height);for(let j=0,mt=Pt.length;j<mt;j++)gt=Pt[j],Nt?P&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,ht,It,gt.data):e.texImage2D(i.TEXTURE_2D,j,_t,gt.width,gt.height,0,ht,It,gt.data);_.generateMipmaps=!1}else Nt?(Wt&&e.texStorage2D(i.TEXTURE_2D,pt,_t,nt.width,nt.height),P&&Q(_,nt,ht,It)):e.texImage2D(i.TEXTURE_2D,0,_t,nt.width,nt.height,0,ht,It,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Nt&&Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,_t,Pt[0].width,Pt[0].height,nt.depth);for(let j=0,mt=Pt.length;j<mt;j++)if(gt=Pt[j],_.format!==hn)if(ht!==null)if(Nt){if(P)if(_.layerUpdates.size>0){const xt=ja(gt.width,gt.height,_.format,_.type);for(const rt of _.layerUpdates){const A=gt.data.subarray(rt*xt/gt.data.BYTES_PER_ELEMENT,(rt+1)*xt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,rt,gt.width,gt.height,1,ht,A)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,nt.depth,ht,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,_t,gt.width,gt.height,nt.depth,0,gt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,nt.depth,ht,It,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,_t,gt.width,gt.height,nt.depth,0,ht,It,gt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Nt&&Wt&&e.texStorage2D(i.TEXTURE_2D,pt,_t,Pt[0].width,Pt[0].height);for(let j=0,mt=Pt.length;j<mt;j++)gt=Pt[j],_.format!==hn?ht!==null?Nt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,ht,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,_t,gt.width,gt.height,0,gt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?P&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,ht,It,gt.data):e.texImage2D(i.TEXTURE_2D,j,_t,gt.width,gt.height,0,ht,It,gt.data)}else if(_.isDataArrayTexture)if(Nt){if(Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,_t,nt.width,nt.height,nt.depth),P)if(_.layerUpdates.size>0){const j=ja(nt.width,nt.height,_.format,_.type);for(const mt of _.layerUpdates){const xt=nt.data.subarray(mt*j/nt.data.BYTES_PER_ELEMENT,(mt+1)*j/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,nt.width,nt.height,1,ht,It,xt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ht,It,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,nt.width,nt.height,nt.depth,0,ht,It,nt.data);else if(_.isData3DTexture)Nt?(Wt&&e.texStorage3D(i.TEXTURE_3D,pt,_t,nt.width,nt.height,nt.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ht,It,nt.data)):e.texImage3D(i.TEXTURE_3D,0,_t,nt.width,nt.height,nt.depth,0,ht,It,nt.data);else if(_.isFramebufferTexture){if(Wt)if(Nt)e.texStorage2D(i.TEXTURE_2D,pt,_t,nt.width,nt.height);else{let j=nt.width,mt=nt.height;for(let xt=0;xt<pt;xt++)e.texImage2D(i.TEXTURE_2D,xt,_t,j,mt,0,ht,It,null),j>>=1,mt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),nt.parentNode!==j){j.appendChild(nt),p.add(_),j.onpaint=mt=>{const xt=mt.changedElements;for(const rt of p)xt.includes(rt.image)&&(rt.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{const xt=i.RGBA,rt=i.RGBA,A=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,rt,A,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Nt&&Wt){const j=ae(Pt[0]);e.texStorage2D(i.TEXTURE_2D,pt,_t,j.width,j.height)}for(let j=0,mt=Pt.length;j<mt;j++)gt=Pt[j],Nt?P&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ht,It,gt):e.texImage2D(i.TEXTURE_2D,j,_t,ht,It,gt);_.generateMipmaps=!1}else if(Nt){if(Wt){const j=ae(nt);e.texStorage2D(i.TEXTURE_2D,pt,_t,j.width,j.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,It,nt)}else e.texImage2D(i.TEXTURE_2D,0,_t,ht,It,nt);f(_)&&T(V),dt.__version=ut.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ft(b,_,F){if(_.image.length!==6)return;const V=ie(b,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const ut=n.get(Z);if(Z.version!==ut.__version||V===!0){e.activeTexture(i.TEXTURE0+F);const dt=ne.getPrimaries(ne.workingColorSpace),$=_.colorSpace===Yn?null:ne.getPrimaries(_.colorSpace),nt=_.colorSpace===Yn||dt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const ht=_.isCompressedTexture||_.image[0].isCompressedTexture,It=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let rt=0;rt<6;rt++)!ht&&!It?_t[rt]=m(_.image[rt],!0,s.maxCubemapSize):_t[rt]=It?_.image[rt].image:_.image[rt],_t[rt]=Ee(_,_t[rt]);const gt=_t[0],Pt=o.convert(_.format,_.colorSpace),Nt=o.convert(_.type),Wt=S(_.internalFormat,Pt,Nt,_.normalized,_.colorSpace),P=_.isVideoTexture!==!0,pt=ut.__version===void 0||V===!0,j=Z.dataReady;let mt=y(_,gt);Bt(i.TEXTURE_CUBE_MAP,_);let xt;if(ht){P&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Wt,gt.width,gt.height);for(let rt=0;rt<6;rt++){xt=_t[rt].mipmaps;for(let A=0;A<xt.length;A++){const z=xt[A];_.format!==hn?Pt!==null?P?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,A,0,0,z.width,z.height,Pt,z.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,A,Wt,z.width,z.height,0,z.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,A,0,0,z.width,z.height,Pt,Nt,z.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,A,Wt,z.width,z.height,0,Pt,Nt,z.data)}}}else{if(xt=_.mipmaps,P&&pt){xt.length>0&&mt++;const rt=ae(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Wt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(It){P?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,_t[rt].width,_t[rt].height,Pt,Nt,_t[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Wt,_t[rt].width,_t[rt].height,0,Pt,Nt,_t[rt].data);for(let A=0;A<xt.length;A++){const tt=xt[A].image[rt].image;P?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,A+1,0,0,tt.width,tt.height,Pt,Nt,tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,A+1,Wt,tt.width,tt.height,0,Pt,Nt,tt.data)}}else{P?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Pt,Nt,_t[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Wt,Pt,Nt,_t[rt]);for(let A=0;A<xt.length;A++){const z=xt[A];P?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,A+1,0,0,Pt,Nt,z.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,A+1,Wt,Pt,Nt,z.image[rt])}}}f(_)&&T(i.TEXTURE_CUBE_MAP),ut.__version=Z.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function yt(b,_,F,V,Z,ut){const dt=o.convert(F.format,F.colorSpace),$=o.convert(F.type),nt=S(F.internalFormat,dt,$,F.normalized,F.colorSpace),ht=n.get(_),It=n.get(F);if(It.__renderTarget=_,!ht.__hasExternalTextures){const _t=Math.max(1,_.width>>ut),gt=Math.max(1,_.height>>ut);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,ut,nt,_t,gt,_.depth,0,dt,$,null):e.texImage2D(Z,ut,nt,_t,gt,0,dt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),ge(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,It.__webglTexture,0,xe(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,It.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(b,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const V=_.depthTexture,Z=V&&V.isDepthTexture?V.type:null,ut=E(_.stencilBuffer,Z),dt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(_),ut,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(_),ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,b)}else{const V=_.textures;for(let Z=0;Z<V.length;Z++){const ut=V[Z],dt=o.convert(ut.format,ut.colorSpace),$=o.convert(ut.type),nt=S(ut.internalFormat,dt,$,ut.normalized,ut.colorSpace);ge(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(_),nt,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(_),nt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,nt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(b,_,F){const V=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",I)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,_.depthTexture);const ht=o.convert(_.depthTexture.format),It=o.convert(_.depthTexture.type);let _t;_.depthTexture.format===Nn?_t=i.DEPTH_COMPONENT24:_.depthTexture.format===oi&&(_t=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,_t,_.width,_.height,0,ht,It,null)}}else at(_.depthTexture,0);const ut=Z.__webglTexture,dt=xe(_),$=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,nt=_.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Nn)ge(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,$,ut,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,$,ut,0);else if(_.depthTexture.format===oi)ge(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,$,ut,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,$,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(b){const _=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const V=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=V}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)ye(_.__webglFramebuffer[V],b,V);else{const V=b.texture.mipmaps;V&&V.length>0?ye(_.__webglFramebuffer[0],b,0):ye(_.__webglFramebuffer,b,0)}else if(F){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Yt(_.__webglDepthbuffer[V],b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ut)}}else{const V=b.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Yt(_.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(b,_,F){const V=n.get(b);_!==void 0&&yt(V.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&qt(b)}function le(b){const _=b.texture,F=n.get(b),V=n.get(_);b.addEventListener("dispose",v);const Z=b.textures,ut=b.isWebGLCubeRenderTarget===!0,dt=Z.length>1;if(dt||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,r.memory.textures++),ut){F.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[$]=[];for(let nt=0;nt<_.mipmaps.length;nt++)F.__webglFramebuffer[$][nt]=i.createFramebuffer()}else F.__webglFramebuffer[$]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)F.__webglFramebuffer[$]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(dt)for(let $=0,nt=Z.length;$<nt;$++){const ht=n.get(Z[$]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),r.memory.textures++)}if(b.samples>0&&ge(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let $=0;$<Z.length;$++){const nt=Z[$];F.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[$]);const ht=o.convert(nt.format,nt.colorSpace),It=o.convert(nt.type),_t=S(nt.internalFormat,ht,It,nt.normalized,nt.colorSpace,b.isXRRenderTarget===!0),gt=xe(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,_t,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,F.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let nt=0;nt<_.mipmaps.length;nt++)yt(F.__webglFramebuffer[$][nt],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,nt);else yt(F.__webglFramebuffer[$],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(_)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let $=0,nt=Z.length;$<nt;$++){const ht=Z[$],It=n.get(ht);let _t=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_t=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,It.__webglTexture),Bt(_t,ht),yt(F.__webglFramebuffer,b,ht,i.COLOR_ATTACHMENT0+$,_t,0),f(ht)&&T(_t)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&($=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,V.__webglTexture),Bt($,_),_.mipmaps&&_.mipmaps.length>0)for(let nt=0;nt<_.mipmaps.length;nt++)yt(F.__webglFramebuffer[nt],b,_,i.COLOR_ATTACHMENT0,$,nt);else yt(F.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,$,0);f(_)&&T($),e.unbindTexture()}b.depthBuffer&&qt(b)}function Vt(b){const _=b.textures;for(let F=0,V=_.length;F<V;F++){const Z=_[F];if(f(Z)){const ut=w(b),dt=n.get(Z).__webglTexture;e.bindTexture(ut,dt),T(ut),e.unbindTexture()}}}const jt=[],Ae=[];function be(b){if(b.samples>0){if(ge(b)===!1){const _=b.textures,F=b.width,V=b.height;let Z=i.COLOR_BUFFER_BIT;const ut=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(b),$=_.length>1;if($)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);const nt=b.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[ht]);const It=n.get(_[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,Z,i.NEAREST),l===!0&&(jt.length=0,Ae.length=0,jt.push(i.COLOR_ATTACHMENT0+ht),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(jt.push(ut),Ae.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,dt.__webglColorRenderbuffer[ht]);const It=n.get(_[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function xe(b){return Math.min(s.maxSamples,b.samples)}function ge(b){const _=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(b){const _=r.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function Ee(b,_){const F=b.colorSpace,V=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Qs&&F!==Yn&&(ne.getTransfer(F)===ue?(V!==hn||Z!==an)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",F)),_}function ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=at,this.setTexture2DArray=K,this.setTexture3D=it,this.setTextureCube=ot,this.rebindTextures=ee,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Dm(i,t){function e(n,s=Yn){let o;const r=ne.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===zr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kl)return i.BYTE;if(n===Vl)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===Br)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===ql)return i.RGB;if(n===hn)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===Gr)return i.RED_INTEGER;if(n===li)return i.RG;if(n===kr)return i.RG_INTEGER;if(n===Vr)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===Ys||n===qs)if(r===ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ws)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ws)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===er||n===nr||n===ir||n===sr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===er)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ir)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===or||n===rr||n===ar||n===lr||n===cr||n===Js||n===ur)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===or||n===rr)return r===ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ar)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===lr)return o.COMPRESSED_R11_EAC;if(n===cr)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Js)return o.COMPRESSED_RG11_EAC;if(n===ur)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dr||n===fr||n===hr||n===pr||n===mr||n===gr||n===_r||n===xr||n===vr||n===Sr||n===Mr||n===yr||n===br||n===Er)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===dr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_r)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===br)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Er)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===Cr||n===Ar)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Tr)return r===ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ar)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wr||n===Rr||n===$s||n===Ir)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===wr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Rr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$s)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ir)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Nm=`
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

}`;class Bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new sc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:Nm,fragmentShader:Fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ze(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zm extends Jn{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,u=null,p=null,d=null,h=null,g=null;const M=typeof XRWebGLBinding<"u",m=new Bm,f={},T=e.getContextAttributes();let w=null,S=null;const E=[],y=[],I=new bt;let v=null,C=null;const U=new dn;U.viewport=new Te;const N=new dn;N.viewport=new Te;const B=[U,N],W=new Wd;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=E[J];return Q===void 0&&(Q=new xo,E[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=E[J];return Q===void 0&&(Q=new xo,E[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=E[J];return Q===void 0&&(Q=new xo,E[J]=Q),Q.getHandSpace()};function Y(J){const Q=y.indexOf(J.inputSource);if(Q===-1)return;const Et=E[Q];Et!==void 0&&(Et.update(J.inputSource,J.frame,c||r),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",at);for(let J=0;J<E.length;J++){const Q=y[J];Q!==null&&(y[J]=null,E[J].disconnect(Q))}D=null,k=null,m.reset();for(const J in f)delete f[J];if(t.setRenderTarget(w),h=null,d=null,p=null,s=null,S=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(I.width,I.height,!1),C!==null){const J=C.camera;J.fov=C.fov,J.zoom=C.zoom,J.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",q),s.addEventListener("inputsourceschange",at),T.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ft=null,yt=null;T.depth&&(yt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=T.stencil?oi:Nn,Ft=T.stencil?ns:En);const Yt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:o};p=this.getBinding(),d=p.createProjectionLayer(Yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new pn(d.textureWidth,d.textureHeight,{format:hn,type:an,depthTexture:new ss(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Et={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new pn(h.framebufferWidth,h.framebufferHeight,{format:hn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(J){for(let Q=0;Q<J.removed.length;Q++){const Et=J.removed[Q],Ft=y.indexOf(Et);Ft>=0&&(y[Ft]=null,E[Ft].disconnect(Et))}for(let Q=0;Q<J.added.length;Q++){const Et=J.added[Q];let Ft=y.indexOf(Et);if(Ft===-1){for(let Yt=0;Yt<E.length;Yt++)if(Yt>=y.length){y.push(Et),Ft=Yt;break}else if(y[Yt]===null){y[Yt]=Et,Ft=Yt;break}if(Ft===-1)break}const yt=E[Ft];yt&&yt.connect(Et)}}const K=new R,it=new R;function ot(J,Q,Et){K.setFromMatrixPosition(Q.matrixWorld),it.setFromMatrixPosition(Et.matrixWorld);const Ft=K.distanceTo(it),yt=Q.projectionMatrix.elements,Yt=Et.projectionMatrix.elements,ye=yt[14]/(yt[10]-1),qt=yt[14]/(yt[10]+1),ee=(yt[9]+1)/yt[5],le=(yt[9]-1)/yt[5],Vt=(yt[8]-1)/yt[0],jt=(Yt[8]+1)/Yt[0],Ae=ye*Vt,be=ye*jt,xe=Ft/(-Vt+jt),ge=xe*-Vt;if(Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ge),J.translateZ(xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),yt[10]===-1)J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const L=ye+xe,Ee=qt+xe,ae=Ae-ge,b=be+(Ft-ge),_=ee*qt/Ee*L,F=le*qt/Ee*L;J.projectionMatrix.makePerspective(ae,b,_,F,L,Ee),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ct(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Q=J.near,Et=J.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),W.near=N.near=U.near=Q,W.far=N.far=U.far=Et,(D!==W.near||k!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),D=W.near,k=W.far),W.layers.mask=J.layers.mask|6,U.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;const Ft=J.parent,yt=W.cameras;Ct(W,Ft);for(let Yt=0;Yt<yt.length;Yt++)Ct(yt[Yt],Ft);yt.length===2?ot(W,U,N):W.projectionMatrix.copy(U.projectionMatrix),C===null&&J.isPerspectiveCamera&&(C={camera:J,fov:J.fov,zoom:J.zoom}),Lt(J,W,Ft)};function Lt(J,Q,Et){Et===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=is*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(J){return f[J]};let re=null;function Bt(J,Q){if(u=Q.getViewerPose(c||r),g=Q,u!==null){const Et=u.views;h!==null&&(t.setRenderTargetFramebuffer(S,h.framebuffer),t.setRenderTarget(S));let Ft=!1;Et.length!==W.cameras.length&&(W.cameras.length=0,Ft=!0);for(let qt=0;qt<Et.length;qt++){const ee=Et[qt];let le=null;if(h!==null)le=h.getViewport(ee);else{const jt=p.getViewSubImage(d,ee);le=jt.viewport,qt===0&&(t.setRenderTargetTextures(S,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(S))}let Vt=B[qt];Vt===void 0&&(Vt=new dn,Vt.layers.enable(qt),Vt.viewport=new Te,B[qt]=Vt),Vt.matrix.fromArray(ee.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(ee.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(le.x,le.y,le.width,le.height),qt===0&&(W.matrix.copy(Vt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ft===!0&&W.cameras.push(Vt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();const qt=p.getDepthInformation(Et[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,s.renderState)}if(yt&&yt.includes("camera-access")&&M){t.state.unbindTexture(),p=n.getBinding();for(let qt=0;qt<Et.length;qt++){const ee=Et[qt].camera;if(ee){let le=f[ee];le||(le=new sc,f[ee]=le);const Vt=p.getCameraImage(ee);le.sourceTexture=Vt}}}}for(let Et=0;Et<E.length;Et++){const Ft=y[Et],yt=E[Et];Ft!==null&&yt!==void 0&&yt.update(Ft,Q,c||r)}re&&re(J,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ie=new gc;ie.setAnimationLoop(Bt),this.setAnimationLoop=function(J){re=J},this.dispose=function(){}}}const Hm=new Se,bc=new Xt;bc.set(-1,0,0,0,1,0,0,0,1);function Gm(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,pc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,w,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?o(m,f):f.isMeshLambertMaterial?(o(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(o(m,f),p(m,f)):f.isMeshPhongMaterial?(o(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(o(m,f),d(m,f),f.isMeshPhysicalMaterial&&h(m,f,S)):f.isMeshMatcapMaterial?(o(m,f),g(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),M(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,T,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),w=T.envMap,S=T.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bc),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function km(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const y=E.program;n.uniformBlockBinding(S,y)}function c(S,E){let y=s[S.id];y===void 0&&(m(S),y=u(S),s[S.id]=y,S.addEventListener("dispose",T));const I=E.program;n.updateUBOMapping(S,I);const v=t.render.frame;o[S.id]!==v&&(d(S),o[S.id]=v)}function u(S){const E=p();S.__bindingPointIndex=E;const y=i.createBuffer(),I=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function p(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],y=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,C=y.length;v<C;v++){const U=y[v];if(Array.isArray(U))for(let N=0,B=U.length;N<B;N++)h(U[N],v,N,I);else h(U,v,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,E,y,I){if(M(S,E,y,I)===!0){const v=S.__offset,C=S.value;if(Array.isArray(C)){let U=0;for(let N=0;N<C.length;N++){const B=C[N],W=f(B);g(B,S.__data,U),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(U+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function g(S,E,y){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,y)}function M(S,E,y,I){const v=S.value,C=E+"_"+y;if(I[C]===void 0)return typeof v=="number"||typeof v=="boolean"?I[C]=v:ArrayBuffer.isView(v)?I[C]=v.slice():I[C]=v.clone(),!0;{const U=I[C];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return I[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(U.equals(v)===!1)return U.copy(v),!0}}return!1}function m(S){const E=S.uniforms;let y=0;const I=16;for(let C=0,U=E.length;C<U;C++){const N=Array.isArray(E[C])?E[C]:[E[C]];for(let B=0,W=N.length;B<W;B++){const D=N[B],k=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,q=k.length;Y<q;Y++){const at=k[Y],K=f(at),it=y%I,ot=it%K.boundary,Ct=it+ot;y+=ot,Ct!==0&&I-Ct<K.storage&&(y+=I-Ct),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=K.storage}}}const v=y%I;return v>0&&(y+=I-v),S.__size=y,S.__cache={},this}function f(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",S),E}function T(S){const E=S.target;E.removeEventListener("dispose",T);const y=r.indexOf(E.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete o[E.id]}function w(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:l,update:c,dispose:w}}const Vm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function Wm(){return _n===null&&(_n=new Qu(Vm,16,16,li,Tn),_n.name="DFG_LUT",_n.minFilter=Ve,_n.magFilter=Ve,_n.wrapS=Ln,_n.wrapT=Ln,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class Xm{constructor(t={}){const{canvas:e=fu(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:h=an}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const M=h,m=new Set([Vr,kr,Gr]),f=new Set([an,En,es,ns,zr,Hr]),T=new Uint32Array(4),w=new Int32Array(4),S=new R;let E=null,y=null;const I=[],v=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let N=!1,B=null,W=null,D=null,k=null;this._outputColorSpace=$e;let Y=0,q=0,at=null,K=-1,it=null;const ot=new Te,Ct=new Te;let Lt=null;const re=new Qt(0);let Bt=0,ie=e.width,J=e.height,Q=1,Et=null,Ft=null;const yt=new Te(0,0,ie,J),Yt=new Te(0,0,ie,J);let ye=!1;const qt=new tc;let ee=!1,le=!1;const Vt=new Se,jt=new R,Ae=new Te,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function ge(){return at===null?Q:1}let L=n;function Ee(x,O){return e.getContext(x,O)}let ae,b,_,F,V,Z,ut,dt,$,nt,ht,It,_t,gt,Pt,Nt,Wt,P,pt,j,mt,xt,rt;try{const x={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r186"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",lt,!1),L===null){const O="webgl2";if(L=Ee(O,x),L===null)throw Ee(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}A()}catch(x){throw e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),oe("WebGLRenderer: "+x.message),x}function A(){ae=new Wp(L),ae.init(),mt=new Dm(L,ae),b=new Up(L,ae,t,mt),_=new Lm(L,ae),b.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),W=L.createFramebuffer(),D=L.createFramebuffer(),k=L.createFramebuffer(),F=new qp(L),V=new vm,Z=new Um(L,ae,_,V,b,mt,F),ut=new Vp(U),dt=new Zd(L),xt=new Op(L,dt),$=new Xp(L,dt,F,xt),nt=new Kp(L,$,dt,xt,F),P=new Zp(L,b,Z),Pt=new Dp(V),ht=new xm(U,ut,ae,b,xt,Pt),It=new Gm(U,V),_t=new Mm,gt=new Am(ae),Wt=new Pp(U,ut,_,nt,g,l),Nt=new Om(U,nt,b),rt=new km(L,F,b,_),pt=new Lp(L,ae,F),j=new Yp(L,ae,F),F.programs=ht.programs,U.capabilities=b,U.extensions=ae,U.properties=V,U.renderLists=_t,U.shadowMap=Nt,U.state=_,U.info=F}M!==an&&(C=new $p(M,e.width,e.height,a,s,o));const z=new zm(U,L);this.xr=z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=ae.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ae.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(x){x!==void 0&&(Q=x,this.setSize(ie,J,!1))},this.getSize=function(x){return x.set(ie,J)},this.setSize=function(x,O,X=!0){if(z.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=x,J=O,e.width=Math.floor(x*Q),e.height=Math.floor(O*Q),X===!0&&(e.style.width=x+"px",e.style.height=O+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set(ie*Q,J*Q).floor()},this.setDrawingBufferSize=function(x,O,X){ie=x,J=O,Q=X,e.width=Math.floor(x*X),e.height=Math.floor(O*X),this.setViewport(0,0,x,O)},this.setEffects=function(x){if(M===an){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let O=0;O<x.length;O++)if(x[O].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ot)},this.getViewport=function(x){return x.copy(yt)},this.setViewport=function(x,O,X,H){x.isVector4?yt.set(x.x,x.y,x.z,x.w):yt.set(x,O,X,H),_.viewport(ot.copy(yt).multiplyScalar(Q).round())},this.getScissor=function(x){return x.copy(Yt)},this.setScissor=function(x,O,X,H){x.isVector4?Yt.set(x.x,x.y,x.z,x.w):Yt.set(x,O,X,H),_.scissor(Ct.copy(Yt).multiplyScalar(Q).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(x){_.setScissorTest(ye=x)},this.setOpaqueSort=function(x){Et=x},this.setTransparentSort=function(x){Ft=x},this.getClearColor=function(x){return x.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(x=!0,O=!0,X=!0){let H=0;if(x){let G=!1;if(at!==null){const Mt=at.texture.format;G=m.has(Mt)}if(G){const Mt=at.texture.type,At=f.has(Mt),St=Wt.getClearColor(),wt=Wt.getClearAlpha(),Dt=St.r,Kt=St.g,te=St.b;At?(T[0]=Dt,T[1]=Kt,T[2]=te,T[3]=wt,L.clearBufferuiv(L.COLOR,0,T)):(w[0]=Dt,w[1]=Kt,w[2]=te,w[3]=wt,L.clearBufferiv(L.COLOR,0,w))}else H|=L.COLOR_BUFFER_BIT}O&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),B=x},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Wt.dispose(),_t.dispose(),gt.dispose(),V.dispose(),ut.dispose(),nt.dispose(),xt.dispose(),rt.dispose(),ht.dispose(),z.dispose(),z.removeEventListener("sessionstart",Gt),z.removeEventListener("sessionend",et),kt.stop()};function tt(x){x.preventDefault(),ma("WebGLRenderer: Context Lost."),N=!0}function st(){ma("WebGLRenderer: Context Restored."),N=!1;const x=F.autoReset,O=Nt.enabled,X=Nt.autoUpdate,H=Nt.needsUpdate,G=Nt.type;A(),F.autoReset=x,Nt.enabled=O,Nt.autoUpdate=X,Nt.needsUpdate=H,Nt.type=G}function lt(x){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ct(x){const O=x.target;O.removeEventListener("dispose",ct),Ut(O)}function Ut(x){Zt(x),V.remove(x)}function Zt(x){const O=V.get(x).programs;O!==void 0&&(O.forEach(function(X){ht.releaseProgram(X)}),x.isShaderMaterial&&ht.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,X,H,G,Mt){O===null&&(O=be);const At=G.isMesh&&G.matrixWorld.determinantAffine()<0,St=wc(x,O,X,H,G);_.setMaterial(H,At);let wt=X.index,Dt=1;if(H.wireframe===!0){if(wt=$.getWireframeAttribute(X),wt===void 0)return;Dt=2}const Kt=X.drawRange,te=X.attributes.position;let Rt=Kt.start*Dt,ce=(Kt.start+Kt.count)*Dt;Mt!==null&&(Rt=Math.max(Rt,Mt.start*Dt),ce=Math.min(ce,(Mt.start+Mt.count)*Dt)),wt!==null?(Rt=Math.max(Rt,0),ce=Math.min(ce,wt.count)):te!=null&&(Rt=Math.max(Rt,0),ce=Math.min(ce,te.count));const Re=ce-Rt;if(Re<0||Re===1/0)return;xt.setup(G,H,St,X,wt);let ve,me=pt;if(wt!==null&&(ve=dt.get(wt),me=j,me.setIndex(ve)),G.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*ge()),me.setMode(L.LINES)):me.setMode(L.TRIANGLES);else if(G.isLine){let He=H.linewidth;He===void 0&&(He=1),_.setLineWidth(He*ge()),G.isLineSegments?me.setMode(L.LINES):G.isLineLoop?me.setMode(L.LINE_LOOP):me.setMode(L.LINE_STRIP)}else G.isPoints?me.setMode(L.POINTS):G.isSprite&&me.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))me.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const He=G._multiDrawStarts,Tt=G._multiDrawCounts,Xe=G._multiDrawCount,se=wt?dt.get(wt).bytesPerElement:1,sn=V.get(H).currentProgram.getUniforms();for(let mn=0;mn<Xe;mn++)sn.setValue(L,"_gl_DrawID",mn),me.render(He[mn]/se,Tt[mn])}else if(G.isInstancedMesh)me.renderInstances(Rt,Re,G.count);else if(X.isInstancedBufferGeometry){const He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tt=Math.min(X.instanceCount,He);me.renderInstances(Rt,Re,Tt)}else me.render(Rt,Re)};function ft(x,O,X,H){B!==null&&x.isNodeMaterial&&B.setObject(H,x),ee===!0&&Pt.setState(x,X,!1),x.transparent===!0&&x.side===Qe&&x.forceSinglePass===!1?(x.side=tn,x.needsUpdate=!0,$n(x,O,H),x.side=ri,x.needsUpdate=!0,$n(x,O,H),x.side=Qe):$n(x,O,H)}this.compile=function(x,O,X=null){X===null&&(X=x),B!==null&&B.renderStart(x,O,X),y=gt.get(X),y.init(O),v.push(y),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),x!==X&&x.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights(),B!==null&&B.updateLights(y.state.lightsArray),le=this.localClippingEnabled,ee=Pt.init(this.clippingPlanes,le),ee===!0&&Pt.setGlobalState(this.clippingPlanes,O),B!==null&&Nt.render(y.state.shadowsArray,X,O);const H=new Set;return x.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const St=Mt[At];ft(St,X,O,G),H.add(St)}else ft(Mt,X,O,G),H.add(Mt)}),y=v.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(x,O,X=null){const H=this.compile(x,O,X);return new Promise(G=>{function Mt(){if(H.forEach(function(At){const wt=V.get(At).currentProgram;(wt===void 0||wt.isReady())&&H.delete(At)}),H.size===0){G(x);return}setTimeout(Mt,10)}ae.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Ot=null;function Ht(x){Ot&&Ot(x)}function Gt(){kt.stop()}function et(){kt.start()}const kt=new gc;kt.setAnimationLoop(Ht),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(x){Ot=x,z.setAnimationLoop(x),x===null?kt.stop():kt.start()},z.addEventListener("sessionstart",Gt),z.addEventListener("sessionend",et),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(x,O);const X=z.enabled===!0&&z.isPresenting===!0,H=C!==null&&(at===null||X)&&C.begin(U,at);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(O),O=z.getCamera()),x.isScene===!0&&x.onBeforeRender(U,x,O,at),y=gt.get(x,v.length),y.init(O),y.state.textureUnits=Z.getTextureUnits(),v.push(y),Vt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),qt.setFromProjectionMatrix(Vt,yn,O.reversedDepth),le=this.localClippingEnabled,ee=Pt.init(this.clippingPlanes,le),E=_t.get(x,I.length),E.init(),I.push(E),z.enabled===!0&&z.isPresenting===!0){const At=U.xr.getDepthSensingMesh();At!==null&&fe(At,O,-1/0,U.sortObjects)}fe(x,O,0,U.sortObjects),E.finish(),B!==null&&B.updateLights(y.state.lightsArray),U.sortObjects===!0&&E.sort(Et,Ft),xe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,xe&&Wt.addToRenderList(E,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ee===!0&&Pt.beginShadows();const G=y.state.shadowsArray;if(Nt.render(G,x,O),ee===!0&&Pt.endShadows(),(H&&C.hasRenderPass())===!1){const At=E.opaque,St=E.transmissive;if(y.setupLights(),O.isArrayCamera){const wt=O.cameras;if(St.length>0)for(let Dt=0,Kt=wt.length;Dt<Kt;Dt++){const te=wt[Dt];he(At,St,x,te)}xe&&Wt.render(x);for(let Dt=0,Kt=wt.length;Dt<Kt;Dt++){const te=wt[Dt];Fe(E,x,te,te.viewport)}}else St.length>0&&he(At,St,x,O),xe&&Wt.render(x),Fe(E,x,O)}at!==null&&q===0&&(Z.updateMultisampleRenderTarget(at),Z.updateRenderTargetMipmap(at)),H&&C.end(U),x.isScene===!0&&x.onAfterRender(U,x,O),xt.resetDefaultState(),K=-1,it=null,v.pop(),v.length>0?(y=v[v.length-1],Z.setTextureUnits(y.state.textureUnits),ee===!0&&Pt.setGlobalState(U.clippingPlanes,y.state.camera)):y=null,I.pop(),I.length>0?E=I[I.length-1]:E=null,B!==null&&B.renderEnd()};function fe(x,O,X,H){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLightProbeGrid)y.pushLightProbeGrid(x);else if(x.isLight)y.pushLight(x),x.castShadow&&y.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(qt)){H&&Ae.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Vt);const At=nt.update(x),St=x.material;St.visible&&E.push(x,At,St,X,Ae.z,null,O)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(qt))){const At=nt.update(x),St=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ae.copy(x.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ae.copy(At.boundingSphere.center)),Ae.applyMatrix4(x.matrixWorld).applyMatrix4(Vt)),Array.isArray(St)){const wt=At.groups;for(let Dt=0,Kt=wt.length;Dt<Kt;Dt++){const te=wt[Dt],Rt=St[te.materialIndex];Rt&&Rt.visible&&E.push(x,At,Rt,X,Ae.z,te,O)}}else St.visible&&E.push(x,At,St,X,Ae.z,null,O)}}const Mt=x.children;for(let At=0,St=Mt.length;At<St;At++)fe(Mt[At],O,X,H)}function Fe(x,O,X,H){const{opaque:G,transmissive:Mt,transparent:At}=x;y.setupLightsView(X),ee===!0&&Pt.setGlobalState(U.clippingPlanes,X),H&&_.viewport(ot.copy(H)),G.length>0&&we(G,O,X),Mt.length>0&&we(Mt,O,X),At.length>0&&we(At,O,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function he(x,O,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[H.id]===void 0){const Rt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[H.id]=new pn(1,1,{generateMipmaps:!0,type:Rt?Tn:an,minFilter:si,samples:Math.max(4,b.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const Mt=y.state.transmissionRenderTarget[H.id],At=H.viewport||ot;Mt.setSize(At.z*U.transmissionResolutionScale,At.w*U.transmissionResolutionScale);const St=U.getRenderTarget(),wt=U.getActiveCubeFace(),Dt=U.getActiveMipmapLevel();U.setRenderTarget(Mt),U.getClearColor(re),Bt=U.getClearAlpha(),Bt<1&&U.setClearColor(16777215,.5),U.clear(),xe&&Wt.render(X);const Kt=U.toneMapping;U.toneMapping=bn;const te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),y.setupLightsView(H),ee===!0&&Pt.setGlobalState(U.clippingPlanes,H),we(x,X,H),Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ce=0,Re=O.length;ce<Re;ce++){const ve=O[ce],{object:me,geometry:He,material:Tt,group:Xe}=ve;if(Tt.side===Qe&&me.layers.test(H.layers)){const se=Tt.side;Tt.side=tn,Tt.needsUpdate=!0,De(me,X,H,He,Tt,Xe),Tt.side=se,Tt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt))}U.setRenderTarget(St,wt,Dt),U.setClearColor(re,Bt),te!==void 0&&(H.viewport=te),U.toneMapping=Kt}function we(x,O,X){const H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,Mt=x.length;G<Mt;G++){const At=x[G],{object:St,geometry:wt,group:Dt}=At;let Kt=At.material;Kt.allowOverride===!0&&H!==null&&(Kt=H),St.layers.test(X.layers)&&De(St,O,X,wt,Kt,Dt)}}function De(x,O,X,H,G,Mt){B!==null&&G.isNodeMaterial&&B.setObject(x,G),x.onBeforeRender(U,O,X,H,G,Mt),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),G.onBeforeRender(U,O,X,H,x,Mt),G.transparent===!0&&G.side===Qe&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,U.renderBufferDirect(X,O,H,G,x,Mt),G.side=ri,G.needsUpdate=!0,U.renderBufferDirect(X,O,H,G,x,Mt),G.side=Qe):U.renderBufferDirect(X,O,H,G,x,Mt),x.onAfterRender(U,O,X,H,G,Mt)}function $n(x,O,X){O.isScene!==!0&&(O=be);const H=V.get(x),G=y.state.lights,Mt=y.state.shadowsArray,At=G.state.version,St=ht.getParameters(x,G.state,Mt,O,X,y.state.lightProbeGridArray),wt=ht.getProgramCacheKey(St);let Dt=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Kt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=ut.get(x.envMap||H.environment,Kt),H.envMapRotation=H.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,Dt===void 0&&(x.addEventListener("dispose",ct),Dt=new Map,H.programs=Dt);let te=Dt.get(wt);if(te!==void 0){if(H.currentProgram===te&&H.lightsStateVersion===At)return oa(x,St),te}else St.uniforms=ht.getUniforms(x),B!==null&&x.isNodeMaterial&&B.build(x,X,St),x.onBeforeCompile(St,U),te=ht.acquireProgram(St,wt),Dt.set(wt,te),H.uniforms=St.uniforms;const Rt=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Rt.clippingPlanes=Pt.uniform),oa(x,St),H.needsLights=Ic(x),H.lightsStateVersion=At,H.needsLights&&(Rt.ambientLightColor.value=G.state.ambient,Rt.lightProbe.value=G.state.probe,Rt.sunLights.value=G.state.sun,Rt.sunLightShadows.value=G.state.sunShadow,Rt.directionalLights.value=G.state.directional,Rt.directionalLightShadows.value=G.state.directionalShadow,Rt.spotLights.value=G.state.spot,Rt.spotLightShadows.value=G.state.spotShadow,Rt.rectAreaLights.value=G.state.rectArea,Rt.ltc_1.value=G.state.rectAreaLTC1,Rt.ltc_2.value=G.state.rectAreaLTC2,Rt.pointLights.value=G.state.point,Rt.pointLightShadows.value=G.state.pointShadow,Rt.hemisphereLights.value=G.state.hemi,Rt.sunShadowMatrix.value=G.state.sunShadowMatrix,Rt.sunShadowCascade.value=G.state.sunShadowCascade,Rt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Rt.spotLightMatrix.value=G.state.spotLightMatrix,Rt.spotLightMap.value=G.state.spotLightMap,Rt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=y.state.lightProbeGridArray.length>0,H.currentProgram=te,H.uniformsList=null,te}function Qn(x){if(x.uniformsList===null){const O=x.currentProgram.getUniforms();x.uniformsList=Ks.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function oa(x,O){const X=V.get(x);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Ac(x,O){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let X=0,H=x.length;X<H;X++){const G=x[X];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function wc(x,O,X,H,G){O.isScene!==!0&&(O=be),Z.resetTextureUnits();const Mt=O.fog,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,St=at===null?U.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ne.workingColorSpace,wt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Dt=ut.get(H.envMap||At,wt),Kt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,te=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,Re=!!X.morphAttributes.color;let ve=bn;H.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ve=U.toneMapping);const me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,He=me!==void 0?me.length:0,Tt=V.get(H),Xe=y.state.lights;if(ee===!0&&(le===!0||x!==it)){const _e=x===it&&H.id===K;Pt.setState(H,x,_e)}let se=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Xe.state.version||Tt.outputColorSpace!==St||G.isBatchedMesh&&Tt.batching===!1||!G.isBatchedMesh&&Tt.batching===!0||G.isBatchedMesh&&Tt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Tt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Tt.instancing===!1||!G.isInstancedMesh&&Tt.instancing===!0||G.isSkinnedMesh&&Tt.skinning===!1||!G.isSkinnedMesh&&Tt.skinning===!0||G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null||Tt.envMap!==Dt||H.fog===!0&&Tt.fog!==Mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Pt.numPlanes||Tt.numIntersection!==Pt.numIntersection)||Tt.vertexAlphas!==Kt||Tt.vertexTangents!==te||Tt.morphTargets!==Rt||Tt.morphNormals!==ce||Tt.morphColors!==Re||Tt.toneMapping!==ve||Tt.morphTargetsCount!==He||!!Tt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Tt.__version=H.version);let sn=Tt.currentProgram;se===!0&&(sn=$n(H,O,G),B&&H.isNodeMaterial&&B.onUpdateProgram(H,sn,Tt));let mn=!1,Fn=!1,fi=!1;const pe=sn.getUniforms(),Ce=Tt.uniforms;if(_.useProgram(sn.program)&&(mn=!0,Fn=!0,fi=!0),H.id!==K&&(K=H.id,Fn=!0),Tt.needsLights){const _e=Ac(y.state.lightProbeGridArray,G);Tt.lightProbeGrid!==_e&&(Tt.lightProbeGrid=_e,Fn=!0)}if(mn||it!==x){_.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),pe.setValue(L,"projectionMatrix",x.projectionMatrix),pe.setValue(L,"viewMatrix",x.matrixWorldInverse);const zn=pe.map.cameraPosition;zn!==void 0&&zn.setValue(L,jt.setFromMatrixPosition(x.matrixWorld)),b.logarithmicDepthBuffer&&pe.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pe.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),it!==x&&(it=x,Fn=!0,fi=!0)}if(Tt.needsLights&&(Xe.state.sunShadowMap.length>0&&pe.setValue(L,"sunShadowMap",Xe.state.sunShadowMap,Z),Xe.state.directionalShadowMap.length>0&&pe.setValue(L,"directionalShadowMap",Xe.state.directionalShadowMap,Z),Xe.state.spotShadowMap.length>0&&pe.setValue(L,"spotShadowMap",Xe.state.spotShadowMap,Z),Xe.state.pointShadowMap.length>0&&pe.setValue(L,"pointShadowMap",Xe.state.pointShadowMap,Z)),G.isSkinnedMesh){pe.setOptional(L,G,"bindMatrix"),pe.setOptional(L,G,"bindMatrixInverse");const _e=G.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),pe.setValue(L,"boneTexture",_e.boneTexture,Z))}G.isBatchedMesh&&(pe.setOptional(L,G,"batchingTexture"),pe.setValue(L,"batchingTexture",G._matricesTexture,Z),pe.setOptional(L,G,"batchingIdTexture"),pe.setValue(L,"batchingIdTexture",G._indirectTexture,Z),pe.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&pe.setValue(L,"batchingColorTexture",G._colorsTexture,Z));const Bn=X.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&P.update(G,X,sn),(Fn||Tt.receiveShadow!==G.receiveShadow)&&(Tt.receiveShadow=G.receiveShadow,pe.setValue(L,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Ce.envMapIntensity.value=O.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=Wm()),Fn){if(pe.setValue(L,"toneMappingExposure",U.toneMappingExposure),Tt.needsLights&&Rc(Ce,fi),Mt&&H.fog===!0&&It.refreshFogUniforms(Ce,Mt),It.refreshMaterialUniforms(Ce,H,Q,J,y.state.transmissionRenderTarget[x.id]),Tt.needsLights&&Tt.lightProbeGrid){const _e=Tt.lightProbeGrid;Ce.probesSH.value=_e.texture,Ce.probesMin.value.copy(_e.boundingBox.min),Ce.probesMax.value.copy(_e.boundingBox.max),Ce.probesResolution.value.copy(_e.resolution)}Ks.upload(L,Qn(Tt),Ce,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ks.upload(L,Qn(Tt),Ce,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pe.setValue(L,"center",G.center),pe.setValue(L,"modelViewMatrix",G.modelViewMatrix),pe.setValue(L,"normalMatrix",G.normalMatrix),pe.setValue(L,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const _e=H.uniformsGroups;for(let zn=0,hi=_e.length;zn<hi;zn++){const aa=_e[zn];rt.update(aa,sn),rt.bind(aa,sn)}}return sn}function Rc(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.sunLights.needsUpdate=O,x.sunLightShadows.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function Ic(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(x,O,X){const H=V.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(x.texture).__webglTexture=O,V.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,O){const X=V.get(x);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(x,O=0,X=0){at=x,Y=O,q=X;let H=null,G=!1,Mt=!1;if(x){const St=V.get(x);if(St.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,St.__webglFramebuffer),ot.copy(x.viewport),Ct.copy(x.scissor),Lt=x.scissorTest,_.viewport(ot),_.scissor(Ct),_.setScissorTest(Lt),K=-1;return}else if(St.__webglFramebuffer===void 0)Z.setupRenderTarget(x);else if(St.__hasExternalTextures)Z.rebindTextures(x,V.get(x.texture).__webglTexture,V.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Kt=x.depthTexture;if(St.__boundDepthTexture!==Kt){if(Kt!==null&&V.has(Kt)&&(x.width!==Kt.image.width||x.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(x)}}const wt=x.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(Mt=!0);const Dt=V.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Dt[O])?H=Dt[O][X]:H=Dt[O],G=!0):x.samples>0&&Z.useMultisampledRTT(x)===!1?H=V.get(x).__webglMultisampledFramebuffer:Array.isArray(Dt)?H=Dt[X]:H=Dt,ot.copy(x.viewport),Ct.copy(x.scissor),Lt=x.scissorTest}else ot.copy(yt).multiplyScalar(Q).floor(),Ct.copy(Yt).multiplyScalar(Q).floor(),Lt=ye;if(X!==0&&(H=W),_.bindFramebuffer(L.FRAMEBUFFER,H)&&_.drawBuffers(x,H),_.viewport(ot),_.scissor(Ct),_.setScissorTest(Lt),G){const St=V.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,St.__webglTexture,X)}else if(Mt){const St=O;for(let wt=0;wt<x.textures.length;wt++){const Dt=V.get(x.textures[wt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+wt,Dt.__webglTexture,X,St)}}else if(x!==null&&X!==0){const St=V.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,St.__webglTexture,X)}K=-1};function ra(x){const O=V.get(x);return(O.__readFormat!==x.format||O.__readType!==x.type)&&(O.__readFormat=x.format,O.__readType=x.type,O.__formatReadable=b.textureFormatReadable(x.format),O.__typeReadable=b.textureTypeReadable(x.type)),O}this.readRenderTargetPixels=function(x,O,X,H,G,Mt,At,St=0){if(!(x&&x.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At]),wt){_.bindFramebuffer(L.FRAMEBUFFER,wt);try{const Dt=x.textures[St],Kt=Dt.format,te=Dt.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+St);const Rt=ra(Dt);if(Rt.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-H&&X>=0&&X<=x.height-G&&L.readPixels(O,X,H,G,mt.convert(Kt),mt.convert(te),Mt)}finally{const Dt=at!==null?V.get(at).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(x,O,X,H,G,Mt,At,St=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At]),wt)if(O>=0&&O<=x.width-H&&X>=0&&X<=x.height-G){_.bindFramebuffer(L.FRAMEBUFFER,wt);const Dt=x.textures[St],Kt=Dt.format,te=Dt.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+St);const Rt=ra(Dt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ce),L.bufferData(L.PIXEL_PACK_BUFFER,Mt.byteLength,L.STREAM_READ),L.readPixels(O,X,H,G,mt.convert(Kt),mt.convert(te),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Re=at!==null?V.get(at).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Re);const ve=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await hu(L,ve,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Mt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ce),L.deleteSync(ve),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,O=null,X=0){const H=Math.pow(2,-X),G=Math.floor(x.image.width*H),Mt=Math.floor(x.image.height*H),At=O!==null?O.x:0,St=O!==null?O.y:0;Z.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,At,St,G,Mt),_.unbindTexture()},this.copyTextureToTexture=function(x,O,X=null,H=null,G=0,Mt=0){let At,St,wt,Dt,Kt,te,Rt,ce,Re;const ve=x.isCompressedTexture?x.mipmaps[Mt]:x.image;if(X!==null)At=X.max.x-X.min.x,St=X.max.y-X.min.y,wt=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Kt=X.min.y,te=X.isBox3?X.min.z:0;else{const Ce=Math.pow(2,-G);At=Math.floor(ve.width*Ce),St=Math.floor(ve.height*Ce),x.isDataArrayTexture?wt=ve.depth:x.isData3DTexture?wt=Math.floor(ve.depth*Ce):wt=1,Dt=0,Kt=0,te=0}H!==null?(Rt=H.x,ce=H.y,Re=H.z):(Rt=0,ce=0,Re=0);const me=mt.convert(O.format),He=mt.convert(O.type);let Tt;O.isData3DTexture?(Z.setTexture3D(O,0),Tt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Z.setTexture2DArray(O,0),Tt=L.TEXTURE_2D_ARRAY):(Z.setTexture2D(O,0),Tt=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Xe=_.getParameter(L.UNPACK_ROW_LENGTH),se=_.getParameter(L.UNPACK_IMAGE_HEIGHT),sn=_.getParameter(L.UNPACK_SKIP_PIXELS),mn=_.getParameter(L.UNPACK_SKIP_ROWS),Fn=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,ve.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ve.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),_.pixelStorei(L.UNPACK_SKIP_ROWS,Kt),_.pixelStorei(L.UNPACK_SKIP_IMAGES,te);const fi=x.isDataArrayTexture||x.isData3DTexture,pe=O.isDataArrayTexture||O.isData3DTexture;if(x.isDepthTexture){const Ce=V.get(x),Bn=V.get(O),_e=V.get(Ce.__renderTarget),zn=V.get(Bn.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,_e.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let hi=0;hi<wt;hi++)fi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(x).__webglTexture,G,te+hi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(O).__webglTexture,Mt,Re+hi)),L.blitFramebuffer(Dt,Kt,At,St,Rt,ce,At,St,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||x.isRenderTargetTexture||V.has(x)){const Ce=V.get(x),Bn=V.get(O);_.bindFramebuffer(L.READ_FRAMEBUFFER,D),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let _e=0;_e<wt;_e++)fi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,G,te+_e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ce.__webglTexture,G),pe?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bn.__webglTexture,Mt,Re+_e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Bn.__webglTexture,Mt),G!==0?L.blitFramebuffer(Dt,Kt,At,St,Rt,ce,At,St,L.COLOR_BUFFER_BIT,L.NEAREST):pe?L.copyTexSubImage3D(Tt,Mt,Rt,ce,Re+_e,Dt,Kt,At,St):L.copyTexSubImage2D(Tt,Mt,Rt,ce,Dt,Kt,At,St);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pe?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(Tt,Mt,Rt,ce,Re,At,St,wt,me,He,ve.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,Mt,Rt,ce,Re,At,St,wt,me,ve.data):L.texSubImage3D(Tt,Mt,Rt,ce,Re,At,St,wt,me,He,ve):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Mt,Rt,ce,At,St,me,He,ve.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Mt,Rt,ce,ve.width,ve.height,me,ve.data):L.texSubImage2D(L.TEXTURE_2D,Mt,Rt,ce,At,St,me,He,ve);_.pixelStorei(L.UNPACK_ROW_LENGTH,Xe),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),_.pixelStorei(L.UNPACK_SKIP_PIXELS,sn),_.pixelStorei(L.UNPACK_SKIP_ROWS,mn),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Fn),Mt===0&&O.generateMipmaps&&L.generateMipmap(Tt),_.unbindTexture()},this.initRenderTarget=function(x){V.get(x).__webglFramebuffer===void 0&&Z.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Z.setTextureCube(x,0):x.isData3DTexture?Z.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Z.setTexture2DArray(x,0):Z.setTexture2D(x,0),_.unbindTexture()},this.resetState=function(){Y=0,q=0,at=null,_.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const yl={type:"change"},jr={type:"start"},Ec={type:"end"},Gs=new us,bl=new xn,Ym=Math.cos(70*Pr.DEG2RAD),Oe=new R,Je=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vo=1e-6;class qm extends Yd{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Kn,this._lastTargetPosition=new R,this._quat=new Kn().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $a,this._sphericalDelta=new $a,this._scale=1,this._panOffset=new R,this._rotateStart=new bt,this._rotateEnd=new bt,this._rotateDelta=new bt,this._panStart=new bt,this._panEnd=new bt,this._panDelta=new bt,this._dollyStart=new bt,this._dollyEnd=new bt,this._dollyDelta=new bt,this._dollyDirection=new R,this._mouse=new bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Km.bind(this),this._onPointerDown=Zm.bind(this),this._onPointerUp=Jm.bind(this),this._onContextMenu=ig.bind(this),this._onMouseWheel=jm.bind(this),this._onKeyDown=tg.bind(this),this._onTouchStart=eg.bind(this),this._onTouchMove=ng.bind(this),this._onMouseDown=$m.bind(this),this._onMouseMove=Qm.bind(this),this._interceptControlDown=sg.bind(this),this._interceptControlUp=og.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=de.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yl),this.update(),this.state=de.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Je:n>Math.PI&&(n-=Je),s<-Math.PI?s+=Je:s>Math.PI&&(s-=Je),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Oe.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Gs.origin.copy(this.object.position),Gs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gs.direction))<Ym?this.object.lookAt(this.target):(bl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gs.intersectPlane(bl,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Vo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vo||this._lastTargetPosition.distanceToSquared(this.target)>Vo?(this.dispatchEvent(yl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Je/60*this.autoRotateSpeed*t:Je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Oe.copy(s).sub(this.target);let o=Oe.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Zm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Km(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Jm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ec),this.state=de.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $m(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case Zn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case Zn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(jr)}function Qm(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jm(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(jr),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ec))}function tg(i){this.enabled!==!1&&this._handleKeyDown(i)}function eg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case qn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case qn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case qn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case qn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(jr)}function ng(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function ig(i){this.enabled!==!1&&i.preventDefault()}function sg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function og(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ks(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Pe;let c=0;for(let u=0;u<i.length;++u){const p=i[u];let d=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in p.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;o[h]===void 0&&(o[h]=[]),o[h].push(p.attributes[h]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in p.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[h]===void 0&&(r[h]=[]),r[h].push(p.morphAttributes[h])}if(t){let h;if(e)h=p.index.count;else if(p.attributes.position!==void 0)h=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(e){let u=0;const p=[];for(let d=0;d<i.length;++d){const h=i[d].index;for(let g=0;g<h.count;++g)p.push(h.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(p)}for(const u in o){const p=El(o[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(const u in r){const p=r[u][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<p;++d){const h=[];for(let M=0;M<r[u].length;++M)h.push(r[u][M][d]);const g=El(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function El(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new je(r,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const p=l/e;for(let d=0,h=u.count;d<h;d++)for(let g=0;g<e;g++){const M=u.getComponent(d,g);a.setComponent(d+p,g,M)}}else r.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const rg=`<div id="scene"></div>
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
  <p class="building-gesture-hint">Drag a little to look around. Swipe farther to return to campus.</p>
  <a id="official-link" target="_blank" rel="noreferrer"
    >View on UofT map <span>↗</span></a
  >
</aside>
<nav class="view-controls" aria-label="Map view">
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
<button class="compass" id="face-north" aria-label="Face north" title="Face north without changing your location or zoom">
  <span>N</span
  ><svg id="compass-arrow" viewBox="0 0 36 36">
    <path d="m18 4 6 25-6-5-6 5Z" />
  </svg>
</button>
<div class="map-scale" aria-label="Map scale">
  <span id="scale-text">100 m</span><i id="scale-line"></i>
</div>
<div class="map-instruction">
  <span class="instruction-cross">+</span
  ><span>Go on. Change your perspective.</span
  ><small
    >Drag to rotate <b>·</b> Two fingers to turn and tilt <b>·</b> Pinch or scroll to zoom</small
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
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noreferrer"
        >© OpenStreetMap · September 2026 ↗</a
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
`,ag={source:"City of Toronto, 3D Massing, 2025 release",sourceUrl:"https://open.toronto.ca/dataset/3d-massing/",groundSource:"OpenStreetMap, retrieved 2026-09-14",officialReference:"https://map.utoronto.ca/?id=1809",projection:"WGS84 / UTM zone 17N (EPSG:32617), local metres",origin:{lon:-79.3968,lat:43.6623},bbox:[-79.4035,43.658,-79.389,43.6693],note:"Source massing retained. Rendering style and vegetation canopy sizes are illustrative. No survey-grade accuracy asserted.",extentSource:"OpenStreetMap UTSG relation 18447148 plus mapped college grounds; ROM and Ontario Legislature retained as context.",identityAudit:"OSM named building relations and 184 official directory entries; unmatched geometry remains explicitly unnamed.",catalogueCodeAudit:{source:"preview/public/data/buildings.json",matchedNames:{"osm-9303310":"RW","osm-4942687":"RO","osm-10336057":"WO","osm-8106022":"WS","osm-1464898602":"WB","osm-10725629":"OI"},note:"Other timetable codes use exact catalogue coordinates/footprints via campus-map setCatalogue; no nearest-building assignment."}},lg=JSON.parse(`[{"id":"osm-8117208","name":"Northrop Frye Hall","osmId":8117208,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494600","center":[368.38999938964844,6.815000057220459,-463.6300048828125],"bounds":[[347.42999267578125,0,-479.8399963378906],[389.3500061035156,13.630000114440918,-447.4200134277344]],"positionOffset":0,"positionCount":360,"edgeOffset":360,"edgeCount":240,"triangles":40,"simplificationErrorM":0,"buildingId":"campus:NF","identitySource":"https://map.utoronto.ca/?id=1809#!m/494600","codes":["NF"]},{"id":"osm-23436128","name":"Toronto School of Theology","osmId":23436128,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055910","center":[492.5449981689453,6.014999866485596,-280.7250061035156],"bounds":[[475.1600036621094,0,-294.8900146484375],[509.92999267578125,12.029999732971191,-266.55999755859375]],"positionOffset":600,"positionCount":495,"edgeOffset":1095,"edgeCount":336,"triangles":55,"simplificationErrorM":0,"buildingId":"campus:TH","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055910","codes":["TH"]},{"id":"osm-23436149","name":"Multicultural History Society of Ontario","osmId":23436149,"officialUrl":null,"center":[498.9449920654297,5.340000152587891,-259.65999603271484],"bounds":[[486.8999938964844,0,-270.42999267578125],[510.989990234375,10.680000305175781,-248.88999938964844]],"positionOffset":1431,"positionCount":405,"edgeOffset":1836,"edgeCount":300,"triangles":45,"simplificationErrorM":0,"buildingId":"osm-23436149","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-150434794","name":"Campus context","osmId":150434794,"officialUrl":null,"center":[554.5050048828125,2.950000047683716,-255.84500885009766],"bounds":[[545.5499877929688,0,-264.9800109863281],[563.4600219726562,5.900000095367432,-246.7100067138672]],"positionOffset":2136,"positionCount":198,"edgeOffset":2334,"edgeCount":144,"triangles":22,"simplificationErrorM":0,"buildingId":"osm-150434794","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23435826","name":"McLuhan Program in Culture and Technology","osmId":23435826,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494529","center":[561.8450012207031,2.359999895095825,-235.80500030517578],"bounds":[[555.8900146484375,0,-243.1300048828125],[567.7999877929688,4.71999979019165,-228.47999572753906]],"positionOffset":2478,"positionCount":90,"edgeOffset":2568,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-23435826","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-20","name":"Campus context","osmId":null,"officialUrl":null,"center":[262.2200012207031,1.7699999809265137,-685.2250061035156],"bounds":[[257.1600036621094,0,-691.0599975585938],[267.2799987792969,3.5399999618530273,-679.3900146484375]],"positionOffset":2640,"positionCount":90,"edgeOffset":2730,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-20","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204281828","name":"Campus context","osmId":204281828,"officialUrl":null,"center":[599.3399963378906,1.4700000286102295,-446.1000061035156],"bounds":[[596.97998046875,0,-450.1000061035156],[601.7000122070312,2.940000057220459,-442.1000061035156]],"positionOffset":2802,"positionCount":90,"edgeOffset":2892,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-204281828","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22747247","name":"North West Chiller Plant","osmId":22747247,"officialUrl":null,"center":[-448.3350067138672,6.34499979019165,-298.93499755859375],"bounds":[[-464.8900146484375,0,-320.67999267578125],[-431.7799987792969,12.6899995803833,-277.19000244140625]],"positionOffset":2964,"positionCount":90,"edgeOffset":3054,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-22747247","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-12000657","name":"Falconer Hall","osmId":12000657,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494552","center":[221.33499908447266,4.46999979019165,-493.2250061035156],"bounds":[[202.97999572753906,0,-510.6400146484375],[239.69000244140625,8.9399995803833,-475.80999755859375]],"positionOffset":3126,"positionCount":2007,"edgeOffset":5133,"edgeCount":1080,"triangles":223,"simplificationErrorM":0,"buildingId":"campus:FH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494552","codes":["FH"]},{"id":"osm-141692092","name":"Cumberland House","osmId":141692092,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494464","center":[76.80000114440918,4.510000228881836,315.3450012207031],"bounds":[[61.369998931884766,0,298.05999755859375],[92.2300033569336,9.020000457763672,332.6300048828125]],"positionOffset":6213,"positionCount":729,"edgeOffset":6942,"edgeCount":492,"triangles":81,"simplificationErrorM":0,"buildingId":"campus:CU","identitySource":"https://map.utoronto.ca/?id=1809#!m/494464","codes":["CU"]},{"id":"osm-20173368","name":"J. Robert S. Prichard Alumni House","osmId":20173368,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494507","center":[4.400000095367432,5.855000019073486,24.499999523162842],"bounds":[[-12.109999656677246,0,10.289999961853027],[20.90999984741211,11.710000038146973,38.709999084472656]],"positionOffset":7434,"positionCount":288,"edgeOffset":7722,"edgeCount":216,"triangles":32,"simplificationErrorM":0,"buildingId":"campus:DR","identitySource":"https://map.utoronto.ca/?id=1809#!m/494507","codes":["DR"]},{"id":"osm-22898457","name":"Fasken Martineau Building","osmId":22898457,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494527","center":[-431.1999969482422,5.019999980926514,-193.6999969482422],"bounds":[[-446.6000061035156,0,-209.00999450683594],[-415.79998779296875,10.039999961853027,-178.38999938964844]],"positionOffset":7938,"positionCount":603,"edgeOffset":8541,"edgeCount":414,"triangles":67,"simplificationErrorM":0,"buildingId":"osm-22898457","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479315","name":"Campus context","osmId":127479315,"officialUrl":null,"center":[-353.26499938964844,5.590000152587891,-336.510009765625],"bounds":[[-369.0799865722656,0,-353.510009765625],[-337.45001220703125,11.180000305175781,-319.510009765625]],"positionOffset":8955,"positionCount":1251,"edgeOffset":10206,"edgeCount":816,"triangles":139,"simplificationErrorM":0,"buildingId":"osm-127479315","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-280289231","name":"Daniels Architecture Commons","osmId":280289231,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494532","center":[-441.2849884033203,4.619999885559082,-229.83499908447266],"bounds":[[-455.989990234375,0,-243.39999389648438],[-426.5799865722656,9.239999771118164,-216.27000427246094]],"positionOffset":11022,"positionCount":333,"edgeOffset":11355,"edgeCount":222,"triangles":37,"simplificationErrorM":0,"buildingId":"osm-280289231","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584652","name":"Campus context","osmId":1433584652,"officialUrl":null,"center":[-473.47999572753906,5.195000171661377,-327.9949951171875],"bounds":[[-486.7099914550781,0,-342.0199890136719],[-460.25,10.390000343322754,-313.9700012207031]],"positionOffset":11577,"positionCount":630,"edgeOffset":12207,"edgeCount":432,"triangles":70,"simplificationErrorM":0,"buildingId":"osm-1433584652","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742866","name":"Campus context","osmId":126742866,"officialUrl":null,"center":[-300.3050079345703,4.965000152587891,-326.1300048828125],"bounds":[[-316.7300109863281,0,-337.44000244140625],[-283.8800048828125,9.930000305175781,-314.82000732421875]],"positionOffset":12639,"positionCount":495,"edgeOffset":13134,"edgeCount":324,"triangles":55,"simplificationErrorM":0,"buildingId":"osm-126742866","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1346238636","name":"Xavier House","osmId":1346238636,"officialUrl":null,"center":[-322.75999450683594,4.755000114440918,-416.76499938964844],"bounds":[[-337.8599853515625,0,-426.7099914550781],[-307.6600036621094,9.510000228881836,-406.82000732421875]],"positionOffset":13458,"positionCount":378,"edgeOffset":13836,"edgeCount":270,"triangles":42,"simplificationErrorM":0,"buildingId":"osm-1346238636","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1346238638","name":"Rochdale House","osmId":1346238638,"officialUrl":null,"center":[-333.4449920654297,4.295000076293945,-443.260009765625],"bounds":[[-347.6499938964844,0,-452.6000061035156],[-319.239990234375,8.59000015258789,-433.9200134277344]],"positionOffset":14106,"positionCount":414,"edgeOffset":14520,"edgeCount":288,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-1346238638","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742865","name":"Campus context","osmId":126742865,"officialUrl":null,"center":[-313.89500427246094,4.460000038146973,-372.5500030517578],"bounds":[[-326.57000732421875,0,-382.44000244140625],[-301.2200012207031,8.920000076293945,-362.6600036621094]],"positionOffset":14808,"positionCount":333,"edgeOffset":15141,"edgeCount":228,"triangles":37,"simplificationErrorM":0,"buildingId":"osm-126742865","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1346238637","name":"Dayfoot House","osmId":1346238637,"officialUrl":null,"center":[-329.7899932861328,4.619999885559082,-429.52000427246094],"bounds":[[-343.3299865722656,0,-438.8500061035156],[-316.25,9.239999771118164,-420.19000244140625]],"positionOffset":15369,"positionCount":414,"edgeOffset":15783,"edgeCount":288,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-1346238637","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742256","name":"Campus context","osmId":126742256,"officialUrl":null,"center":[-338.7050018310547,4.630000114440918,-469.81500244140625],"bounds":[[-353.6000061035156,0,-479.0899963378906],[-323.80999755859375,9.260000228881836,-460.5400085449219]],"positionOffset":16071,"positionCount":90,"edgeOffset":16161,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-126742256","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22199519","name":"Sigma Chi Toronto","osmId":22199519,"officialUrl":null,"center":[-303.75,3.6050000190734863,-166.7199935913086],"bounds":[[-317.2300109863281,0,-175.7899932861328],[-290.2699890136719,7.210000038146973,-157.64999389648438]],"positionOffset":16233,"positionCount":360,"edgeOffset":16593,"edgeCount":252,"triangles":40,"simplificationErrorM":0,"buildingId":"osm-22199519","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742863","name":"Campus context","osmId":126742863,"officialUrl":null,"center":[-309.7550048828125,4.809999942779541,-357.8300018310547],"bounds":[[-322.6600036621094,0,-366.57000732421875],[-296.8500061035156,9.619999885559082,-349.0899963378906]],"positionOffset":16845,"positionCount":360,"edgeOffset":17205,"edgeCount":252,"triangles":40,"simplificationErrorM":0,"buildingId":"osm-126742863","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22372213","name":"Kappa Alpha","osmId":22372213,"officialUrl":null,"center":[-261.81500244140625,5.550000190734863,-503.32000732421875],"bounds":[[-275.9800109863281,0,-511.4800109863281],[-247.64999389648438,11.100000381469727,-495.1600036621094]],"positionOffset":17457,"positionCount":684,"edgeOffset":18141,"edgeCount":384,"triangles":76,"simplificationErrorM":0,"buildingId":"osm-22372213","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479225","name":"Campus context","osmId":127479225,"officialUrl":null,"center":[-438.3800048828125,5.715000152587891,-212.52999877929688],"bounds":[[-450.80999755859375,0,-221.67999267578125],[-425.95001220703125,11.430000305175781,-203.3800048828125]],"positionOffset":18525,"positionCount":441,"edgeOffset":18966,"edgeCount":300,"triangles":49,"simplificationErrorM":0,"buildingId":"osm-127479225","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-27944825","name":"Campus context","osmId":27944825,"officialUrl":null,"center":[190.03499603271484,4.565000057220459,-237.63999938964844],"bounds":[[180.89999389648438,0,-247.58999633789062],[199.1699981689453,9.130000114440918,-227.69000244140625]],"positionOffset":19266,"positionCount":252,"edgeOffset":19518,"edgeCount":180,"triangles":28,"simplificationErrorM":0,"buildingId":"osm-27944825","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23434318","name":"Luella Massey Studio Theatre","osmId":23434318,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494530","center":[-353.7149963378906,4.119999885559082,-220.95999908447266],"bounds":[[-361.8500061035156,0,-233.44000244140625],[-345.5799865722656,8.239999771118164,-208.47999572753906]],"positionOffset":19698,"positionCount":198,"edgeOffset":19896,"edgeCount":132,"triangles":22,"simplificationErrorM":0,"buildingId":"campus:GM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494530","codes":["GM"]},{"id":"osm-1433584637","name":"Campus context","osmId":1433584637,"officialUrl":null,"center":[-402.6000061035156,5.090000152587891,-299.7949981689453],"bounds":[[-411.2200012207031,0,-310.7300109863281],[-393.9800109863281,10.180000305175781,-288.8599853515625]],"positionOffset":20028,"positionCount":225,"edgeOffset":20253,"edgeCount":156,"triangles":25,"simplificationErrorM":0,"buildingId":"osm-1433584637","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742862","name":"Campus context","osmId":126742862,"officialUrl":null,"center":[-265.8500061035156,5.21999979019165,-339.4149932861328],"bounds":[[-274.07000732421875,0,-350.5],[-257.6300048828125,10.4399995803833,-328.3299865722656]],"positionOffset":20409,"positionCount":360,"edgeOffset":20769,"edgeCount":252,"triangles":40,"simplificationErrorM":0,"buildingId":"osm-126742862","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-98271994","name":"Campus context","osmId":98271994,"officialUrl":null,"center":[-451.3900146484375,4.565000057220459,-341.90000915527344],"bounds":[[-459.6400146484375,0,-353.760009765625],[-443.1400146484375,9.130000114440918,-330.0400085449219]],"positionOffset":21021,"positionCount":468,"edgeOffset":21489,"edgeCount":324,"triangles":52,"simplificationErrorM":0,"buildingId":"osm-98271994","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479316","name":"Campus context","osmId":127479316,"officialUrl":null,"center":[-360.4100036621094,3.640000104904175,-364.3249969482422],"bounds":[[-371.44000244140625,0,-372.42999267578125],[-349.3800048828125,7.28000020980835,-356.2200012207031]],"positionOffset":21813,"positionCount":252,"edgeOffset":22065,"edgeCount":180,"triangles":28,"simplificationErrorM":0,"buildingId":"osm-127479316","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433587477","name":"Campus context","osmId":1433587477,"officialUrl":null,"center":[-402.88999938964844,4.190000057220459,-252.68000030517578],"bounds":[[-410.8699951171875,0,-264.07000732421875],[-394.9100036621094,8.380000114440918,-241.2899932861328]],"positionOffset":22245,"positionCount":351,"edgeOffset":22596,"edgeCount":246,"triangles":39,"simplificationErrorM":0,"buildingId":"osm-1433587477","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-802228283","name":"Campus context","osmId":802228283,"officialUrl":null,"center":[-377.25999450683594,8.319999694824219,-305.9700012207031],"bounds":[[-384.8699951171875,0,-317.25],[-369.6499938964844,16.639999389648438,-294.69000244140625]],"positionOffset":22842,"positionCount":306,"edgeOffset":23148,"edgeCount":216,"triangles":34,"simplificationErrorM":0,"buildingId":"osm-802228283","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584643","name":"Campus context","osmId":1433584643,"officialUrl":null,"center":[-438.989990234375,4.215000152587891,-346.23500061035156],"bounds":[[-446.8999938964844,0,-357.489990234375],[-431.0799865722656,8.430000305175781,-334.9800109863281]],"positionOffset":23364,"positionCount":414,"edgeOffset":23778,"edgeCount":288,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-1433584643","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1383198917","name":"Campus context","osmId":1383198917,"officialUrl":null,"center":[-408.9499969482422,4.699999809265137,-401.0299987792969],"bounds":[[-416.75,0,-411.80999755859375],[-401.1499938964844,9.399999618530273,-390.25]],"positionOffset":24066,"positionCount":441,"edgeOffset":24507,"edgeCount":300,"triangles":49,"simplificationErrorM":0,"buildingId":"osm-1383198917","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742861","name":"Campus context","osmId":126742861,"officialUrl":null,"center":[-278.8949890136719,4.59499979019165,-334.1000061035156],"bounds":[[-287.0199890136719,0,-343.9800109863281],[-270.7699890136719,9.1899995803833,-324.2200012207031]],"positionOffset":24807,"positionCount":387,"edgeOffset":25194,"edgeCount":252,"triangles":43,"simplificationErrorM":0,"buildingId":"osm-126742861","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584641","name":"Campus context","osmId":1433584641,"officialUrl":null,"center":[-426.625,4.184999942779541,-348.9499969482422],"bounds":[[-434.4700012207031,0,-359.7699890136719],[-418.7799987792969,8.369999885559082,-338.1300048828125]],"positionOffset":25446,"positionCount":252,"edgeOffset":25698,"edgeCount":168,"triangles":28,"simplificationErrorM":0,"buildingId":"osm-1433584641","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-802228282","name":"Campus context","osmId":802228282,"officialUrl":null,"center":[-389.375,5.534999847412109,-303.05499267578125],"bounds":[[-397.19000244140625,0,-313.3299865722656],[-381.55999755859375,11.069999694824219,-292.7799987792969]],"positionOffset":25866,"positionCount":306,"edgeOffset":26172,"edgeCount":204,"triangles":34,"simplificationErrorM":0,"buildingId":"osm-802228282","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584646","name":"Campus context","osmId":1433584646,"officialUrl":null,"center":[-403.9499969482422,4.585000038146973,-357.76499938964844],"bounds":[[-411.7099914550781,0,-368.20001220703125],[-396.19000244140625,9.170000076293945,-347.3299865722656]],"positionOffset":26376,"positionCount":333,"edgeOffset":26709,"edgeCount":228,"triangles":37,"simplificationErrorM":0,"buildingId":"osm-1433584646","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-98271987","name":"Campus context","osmId":98271987,"officialUrl":null,"center":[-415.7050018310547,4.914999961853027,-354.19500732421875],"bounds":[[-423.3699951171875,0,-364.4200134277344],[-408.0400085449219,9.829999923706055,-343.9700012207031]],"positionOffset":26937,"positionCount":306,"edgeOffset":27243,"edgeCount":216,"triangles":34,"simplificationErrorM":0,"buildingId":"osm-98271987","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479255","name":"Campus context","osmId":127479255,"officialUrl":null,"center":[-391.0550079345703,4.869999885559082,-257.07000732421875],"bounds":[[-398.4700012207031,0,-267.07000732421875],[-383.6400146484375,9.739999771118164,-247.07000732421875]],"positionOffset":27459,"positionCount":360,"edgeOffset":27819,"edgeCount":252,"triangles":40,"simplificationErrorM":0,"buildingId":"osm-127479255","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-731138650","name":"Campus context","osmId":731138650,"officialUrl":null,"center":[-202.08999633789062,4.309999942779541,450.1750030517578],"bounds":[[-209.30999755859375,0,439.9200134277344],[-194.8699951171875,8.619999885559082,460.42999267578125]],"positionOffset":28071,"positionCount":279,"edgeOffset":28350,"edgeCount":192,"triangles":31,"simplificationErrorM":0,"buildingId":"osm-731138650","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742252","name":"Campus context","osmId":126742252,"officialUrl":null,"center":[-324.6949920654297,4.599999904632568,-462.4250030517578],"bounds":[[-351.7099914550781,0,-474.0400085449219],[-297.67999267578125,9.199999809265137,-450.80999755859375]],"positionOffset":28542,"positionCount":477,"edgeOffset":29019,"edgeCount":342,"triangles":53,"simplificationErrorM":0,"buildingId":"osm-126742252","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479224","name":"Campus context","osmId":127479224,"officialUrl":null,"center":[-450.8300018310547,5.199999809265137,-243.43000030517578],"bounds":[[-459.67999267578125,0,-251.2100067138672],[-441.9800109863281,10.399999618530273,-235.64999389648438]],"positionOffset":29361,"positionCount":171,"edgeOffset":29532,"edgeCount":120,"triangles":19,"simplificationErrorM":0,"buildingId":"osm-127479224","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433587480","name":"Campus context","osmId":1433587480,"officialUrl":null,"center":[-362.8999938964844,3.4100000858306885,-214.86499786376953],"bounds":[[-369.7699890136719,0,-223.97999572753906],[-356.0299987792969,6.820000171661377,-205.75]],"positionOffset":29652,"positionCount":378,"edgeOffset":30030,"edgeCount":270,"triangles":42,"simplificationErrorM":0,"buildingId":"osm-1433587480","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-98271995","name":"Campus context","osmId":98271995,"officialUrl":null,"center":[-391.88499450683594,5.53000020980835,-359.5849914550781],"bounds":[[-398.5799865722656,0,-371.04998779296875],[-385.19000244140625,11.0600004196167,-348.1199951171875]],"positionOffset":30300,"positionCount":351,"edgeOffset":30651,"edgeCount":234,"triangles":39,"simplificationErrorM":0,"buildingId":"osm-98271995","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584648","name":"Campus context","osmId":1433584648,"officialUrl":null,"center":[-477.25,4.440000057220459,-342.6850128173828],"bounds":[[-488.5299987792969,0,-348.95001220703125],[-465.9700012207031,8.880000114440918,-336.4200134277344]],"positionOffset":30885,"positionCount":144,"edgeOffset":31029,"edgeCount":108,"triangles":16,"simplificationErrorM":0,"buildingId":"osm-1433584648","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742249","name":"Campus context","osmId":126742249,"officialUrl":null,"center":[-293.4049987792969,2.680000066757202,-437.6999969482422],"bounds":[[-299.82000732421875,0,-449.19000244140625],[-286.989990234375,5.360000133514404,-426.2099914550781]],"positionOffset":31137,"positionCount":252,"edgeOffset":31389,"edgeCount":180,"triangles":28,"simplificationErrorM":0,"buildingId":"osm-126742249","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433589636","name":"Campus context","osmId":1433589636,"officialUrl":null,"center":[-304.9149932861328,2.359999895095825,-185.79000091552734],"bounds":[[-315,0,-192.63999938964844],[-294.8299865722656,4.71999979019165,-178.94000244140625]],"positionOffset":31569,"positionCount":333,"edgeOffset":31902,"edgeCount":204,"triangles":37,"simplificationErrorM":0,"buildingId":"osm-1433589636","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479254","name":"Campus context","osmId":127479254,"officialUrl":null,"center":[-390.19000244140625,3.6700000762939453,-205.36499786376953],"bounds":[[-396.44000244140625,0,-215.3000030517578],[-383.94000244140625,7.340000152587891,-195.42999267578125]],"positionOffset":32106,"positionCount":279,"edgeOffset":32385,"edgeCount":192,"triangles":31,"simplificationErrorM":0,"buildingId":"osm-127479254","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433587479","name":"Campus context","osmId":1433587479,"officialUrl":null,"center":[-420.5800018310547,4.045000076293945,-253.3949966430664],"bounds":[[-428.2799987792969,0,-261.0199890136719],[-412.8800048828125,8.09000015258789,-245.77000427246094]],"positionOffset":32577,"positionCount":306,"edgeOffset":32883,"edgeCount":216,"triangles":34,"simplificationErrorM":0,"buildingId":"osm-1433587479","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479511","name":"Campus context","osmId":127479511,"officialUrl":null,"center":[-325.3999938964844,4.184999942779541,-252.94500732421875],"bounds":[[-336.25,0,-258.760009765625],[-314.54998779296875,8.369999885559082,-247.1300048828125]],"positionOffset":33099,"positionCount":459,"edgeOffset":33558,"edgeCount":300,"triangles":51,"simplificationErrorM":0,"buildingId":"osm-127479511","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479510","name":"Campus Coop","osmId":127479510,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494533","center":[-324.9250030517578,4.349999904632568,-244.14500427246094],"bounds":[[-334.9100036621094,0,-251.1300048828125],[-314.94000244140625,8.699999809265137,-237.16000366210938]],"positionOffset":33858,"positionCount":333,"edgeOffset":34191,"edgeCount":216,"triangles":37,"simplificationErrorM":0,"buildingId":"osm-127479510","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-804457478","name":"Electrometallurgy Lab","osmId":804457478,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494465","center":[125.36999893188477,3.450000047683716,311.69000244140625],"bounds":[[116.54000091552734,0,305.5299987792969],[134.1999969482422,6.900000095367432,317.8500061035156]],"positionOffset":34407,"positionCount":90,"edgeOffset":34497,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"campus:EL","identitySource":"https://map.utoronto.ca/?id=1809#!m/494465","codes":["EL"]},{"id":"osm-127479475","name":"Campus context","osmId":127479475,"officialUrl":null,"center":[-301.50999450683594,3.509999990463257,-179.8499984741211],"bounds":[[-312.25,0,-185.3300018310547],[-290.7699890136719,7.019999980926514,-174.3699951171875]],"positionOffset":34569,"positionCount":252,"edgeOffset":34821,"edgeCount":156,"triangles":28,"simplificationErrorM":0,"buildingId":"osm-127479475","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479260","name":"Campus context","osmId":127479260,"officialUrl":null,"center":[-380.77500915527344,4.889999866485596,-260.4449996948242],"bounds":[[-386.3900146484375,0,-269.67999267578125],[-375.1600036621094,9.779999732971191,-251.2100067138672]],"positionOffset":34977,"positionCount":225,"edgeOffset":35202,"edgeCount":132,"triangles":25,"simplificationErrorM":0,"buildingId":"osm-127479260","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-802228281","name":"Campus context","osmId":802228281,"officialUrl":null,"center":[-295.44500732421875,4.739999771118164,-490.4700012207031],"bounds":[[-300.9200134277344,0,-498.489990234375],[-289.9700012207031,9.479999542236328,-482.45001220703125]],"positionOffset":35334,"positionCount":225,"edgeOffset":35559,"edgeCount":162,"triangles":25,"simplificationErrorM":0,"buildingId":"osm-802228281","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479317","name":"Campus context","osmId":127479317,"officialUrl":null,"center":[-357.61000061035156,5.210000038146973,-355.2150115966797],"bounds":[[-366.3500061035156,0,-360.7900085449219],[-348.8699951171875,10.420000076293945,-349.6400146484375]],"positionOffset":35721,"positionCount":225,"edgeOffset":35946,"edgeCount":156,"triangles":25,"simplificationErrorM":0,"buildingId":"osm-127479317","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-74","name":"Campus context","osmId":null,"officialUrl":null,"center":[117.04499816894531,4.375,-128.4099998474121],"bounds":[[111.75,0,-136.11000061035156],[122.33999633789062,8.75,-120.70999908447266]],"positionOffset":36102,"positionCount":198,"edgeOffset":36300,"edgeCount":144,"triangles":22,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-74","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479253","name":"Campus context","osmId":127479253,"officialUrl":null,"center":[-383.70001220703125,3.3450000286102295,-210.4250030517578],"bounds":[[-388.70001220703125,0,-219.0500030517578],[-378.70001220703125,6.690000057220459,-201.8000030517578]],"positionOffset":36444,"positionCount":360,"edgeOffset":36804,"edgeCount":240,"triangles":40,"simplificationErrorM":0,"buildingId":"osm-127479253","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-76","name":"Campus context","osmId":null,"officialUrl":null,"center":[-362.11500549316406,3.430000066757202,-119.31000137329102],"bounds":[[-368.260009765625,0,-127.13999938964844],[-355.9700012207031,6.860000133514404,-111.4800033569336]],"positionOffset":37044,"positionCount":162,"edgeOffset":37206,"edgeCount":132,"triangles":18,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-76","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479257","name":"Campus context","osmId":127479257,"officialUrl":null,"center":[-372.5349884033203,3.890000104904175,-262.8699951171875],"bounds":[[-377.5199890136719,0,-270.80999755859375],[-367.54998779296875,7.78000020980835,-254.92999267578125]],"positionOffset":37338,"positionCount":144,"edgeOffset":37482,"edgeCount":108,"triangles":16,"simplificationErrorM":0,"buildingId":"osm-127479257","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-78","name":"Campus context","osmId":null,"officialUrl":null,"center":[-325.11000061035156,4.045000076293945,-235.88999938964844],"bounds":[[-332.92999267578125,0,-240.75],[-317.2900085449219,8.09000015258789,-231.02999877929688]],"positionOffset":37590,"positionCount":252,"edgeOffset":37842,"edgeCount":168,"triangles":28,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-78","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742251","name":"Campus context","osmId":126742251,"officialUrl":null,"center":[-298.5399932861328,3.509999990463257,-454.4750061035156],"bounds":[[-303.739990234375,0,-461.30999755859375],[-293.3399963378906,7.019999980926514,-447.6400146484375]],"positionOffset":38010,"positionCount":90,"edgeOffset":38100,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-126742251","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479284","name":"Campus context","osmId":127479284,"officialUrl":null,"center":[-433.8399963378906,2.565000057220459,-250.90999603271484],"bounds":[[-438.5299987792969,0,-255.52999877929688],[-429.1499938964844,5.130000114440918,-246.2899932861328]],"positionOffset":38172,"positionCount":198,"edgeOffset":38370,"edgeCount":132,"triangles":22,"simplificationErrorM":0,"buildingId":"osm-127479284","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-126742254","name":"Campus context","osmId":126742254,"officialUrl":null,"center":[-311.09498596191406,2.0950000286102295,-489.63999938964844],"bounds":[[-315.5799865722656,0,-493.69000244140625],[-306.6099853515625,4.190000057220459,-485.5899963378906]],"positionOffset":38502,"positionCount":90,"edgeOffset":38592,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-126742254","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23434831","name":"Pontifical Institute of Medieval Studies","osmId":23434831,"officialUrl":null,"center":[469,5.945000171661377,-365.53001403808594],"bounds":[[446.3999938964844,0,-395.6400146484375],[491.6000061035156,11.890000343322754,-335.4200134277344]],"positionOffset":38664,"positionCount":387,"edgeOffset":39051,"edgeCount":264,"triangles":43,"simplificationErrorM":0,"buildingId":"osm-23434831","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584653","name":"Campus context","osmId":1433584653,"officialUrl":null,"center":[-489.6600036621094,3.940000057220459,-379.75],"bounds":[[-501.6300048828125,0,-387.7099914550781],[-477.69000244140625,7.880000114440918,-371.7900085449219]],"positionOffset":39315,"positionCount":522,"edgeOffset":39837,"edgeCount":318,"triangles":58,"simplificationErrorM":0,"buildingId":"osm-1433584653","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584655","name":"Campus context","osmId":1433584655,"officialUrl":null,"center":[-451.2899932861328,6.880000114440918,-388.2550048828125],"bounds":[[-459.3399963378906,0,-400.8800048828125],[-443.239990234375,13.760000228881836,-375.6300048828125]],"positionOffset":40155,"positionCount":630,"edgeOffset":40785,"edgeCount":420,"triangles":70,"simplificationErrorM":0,"buildingId":"osm-1433584655","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479373","name":"Campus context","osmId":127479373,"officialUrl":null,"center":[-423.01499938964844,4,-397.0699920654297],"bounds":[[-430.8699951171875,0,-409.8599853515625],[-415.1600036621094,8,-384.2799987792969]],"positionOffset":41205,"positionCount":567,"edgeOffset":41772,"edgeCount":390,"triangles":63,"simplificationErrorM":0,"buildingId":"osm-127479373","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23434610","name":"703 Spadina Avenue","osmId":23434610,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494542","center":[-484.2200012207031,4.204999923706055,-370.90501403808594],"bounds":[[-496.44000244140625,0,-377.8900146484375],[-472,8.40999984741211,-363.9200134277344]],"positionOffset":42162,"positionCount":495,"edgeOffset":42657,"edgeCount":336,"triangles":55,"simplificationErrorM":0,"buildingId":"campus:IA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494542","codes":["IA"]},{"id":"osm-1383198918","name":"Campus context","osmId":1383198918,"officialUrl":null,"center":[-463.88999938964844,6.565000057220459,-383.1199951171875],"bounds":[[-471.4100036621094,0,-394.1600036621094],[-456.3699951171875,13.130000114440918,-372.0799865722656]],"positionOffset":42993,"positionCount":414,"edgeOffset":43407,"edgeCount":288,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-1383198918","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479370","name":"Campus context","osmId":127479370,"officialUrl":null,"center":[-437.0299987792969,4.699999809265137,-392.1499938964844],"bounds":[[-444.7900085449219,0,-404.739990234375],[-429.2699890136719,9.399999618530273,-379.55999755859375]],"positionOffset":43695,"positionCount":711,"edgeOffset":44406,"edgeCount":474,"triangles":79,"simplificationErrorM":0,"buildingId":"osm-127479370","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479397","name":"Campus context","osmId":127479397,"officialUrl":null,"center":[-493.23500061035156,4.829999923706055,-392.6000061035156],"bounds":[[-505.5,0,-401.19000244140625],[-480.9700012207031,9.65999984741211,-384.010009765625]],"positionOffset":44880,"positionCount":495,"edgeOffset":45375,"edgeCount":312,"triangles":55,"simplificationErrorM":0,"buildingId":"osm-127479397","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-685","name":"Campus context","osmId":null,"officialUrl":null,"center":[-495.89500427246094,3.4200000762939453,-403.9750061035156],"bounds":[[-504.6300048828125,0,-409.3500061035156],[-487.1600036621094,6.840000152587891,-398.6000061035156]],"positionOffset":45687,"positionCount":360,"edgeOffset":46047,"edgeCount":216,"triangles":40,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-685","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1383202632","name":"Oak House","osmId":1383202632,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055926","center":[-526.5600128173828,5.235000133514404,-268.26000213623047],"bounds":[[-549.27001953125,0,-292.1300048828125],[-503.8500061035156,10.470000267028809,-244.38999938964844]],"positionOffset":46263,"positionCount":2250,"edgeOffset":48513,"edgeCount":1542,"triangles":250,"simplificationErrorM":0,"buildingId":"osm-1383202632","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204342862","name":"Campus context","osmId":204342862,"officialUrl":null,"center":[-346.2749938964844,4.010000228881836,-312.35499572753906],"bounds":[[-359.80999755859375,0,-322.6499938964844],[-332.739990234375,8.020000457763672,-302.05999755859375]],"positionOffset":50055,"positionCount":873,"edgeOffset":50928,"edgeCount":552,"triangles":97,"simplificationErrorM":0,"buildingId":"osm-204342862","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1433584639","name":"Campus context","osmId":1433584639,"officialUrl":null,"center":[-419.72999572753906,4.505000114440918,-294.625],"bounds":[[-432.1300048828125,0,-306.989990234375],[-407.3299865722656,9.010000228881836,-282.260009765625]],"positionOffset":51480,"positionCount":549,"edgeOffset":52029,"edgeCount":372,"triangles":61,"simplificationErrorM":0,"buildingId":"osm-1433584639","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204343782","name":"Campus context","osmId":204343782,"officialUrl":null,"center":[-363.5400085449219,5.085000038146973,-303.19500732421875],"bounds":[[-369.1700134277344,0,-309.3900146484375],[-357.9100036621094,10.170000076293945,-297]],"positionOffset":52401,"positionCount":198,"edgeOffset":52599,"edgeCount":132,"triangles":22,"simplificationErrorM":0,"buildingId":"osm-204343782","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479509","name":"Campus context","osmId":127479509,"officialUrl":null,"center":[-329.2050018310547,4.940000057220459,-264.12500762939453],"bounds":[[-341.19000244140625,0,-274.7300109863281],[-317.2200012207031,9.880000114440918,-253.52000427246094]],"positionOffset":52731,"positionCount":855,"edgeOffset":53586,"edgeCount":558,"triangles":95,"simplificationErrorM":0,"buildingId":"osm-127479509","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479259","name":"Campus context","osmId":127479259,"officialUrl":null,"center":[-365.48500061035156,3.890000104904175,-265.3050079345703],"bounds":[[-370.4800109863281,0,-273.1700134277344],[-360.489990234375,7.78000020980835,-257.44000244140625]],"positionOffset":54144,"positionCount":468,"edgeOffset":54612,"edgeCount":324,"triangles":52,"simplificationErrorM":0,"buildingId":"osm-127479259","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479258","name":"Campus context","osmId":127479258,"officialUrl":null,"center":[-375.1600036621094,4.184999942779541,-209.94000244140625],"bounds":[[-381.17999267578125,0,-219.0500030517578],[-369.1400146484375,8.369999885559082,-200.8300018310547]],"positionOffset":54936,"positionCount":414,"edgeOffset":55350,"edgeCount":264,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-127479258","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23434099","name":"Sussex Court","osmId":23434099,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494534","center":[-341.11000061035156,12.0600004196167,-276.1700134277344],"bounds":[[-361.2699890136719,0,-289.1700134277344],[-320.95001220703125,24.1200008392334,-263.1700134277344]],"positionOffset":55614,"positionCount":1080,"edgeOffset":56694,"edgeCount":690,"triangles":120,"simplificationErrorM":0,"buildingId":"campus:SC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494534","codes":["SC"]},{"id":"osm-43804428","name":"Saint Thomas's Anglican Church","osmId":43804428,"officialUrl":null,"center":[-312.7099914550781,4.90500020980835,-400.44000244140625],"bounds":[[-335.2699890136719,0,-416.6000061035156],[-290.1499938964844,9.8100004196167,-384.2799987792969]],"positionOffset":57384,"positionCount":1674,"edgeOffset":59058,"edgeCount":1080,"triangles":186,"simplificationErrorM":0,"buildingId":"osm-43804428","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1318933933","name":"Campus context","osmId":1318933933,"officialUrl":null,"center":[-290.1549987792969,3.8299999237060547,-392.9150085449219],"bounds":[[-306.67999267578125,0,-407.9100036621094],[-273.6300048828125,7.659999847412109,-377.9200134277344]],"positionOffset":60138,"positionCount":387,"edgeOffset":60525,"edgeCount":264,"triangles":43,"simplificationErrorM":0,"buildingId":"osm-1318933933","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-704","name":"Campus context","osmId":null,"officialUrl":null,"center":[-291.19000244140625,3.325000047683716,-407.6699981689453],"bounds":[[-293.05999755859375,0,-412.4700012207031],[-289.32000732421875,6.650000095367432,-402.8699951171875]],"positionOffset":60789,"positionCount":90,"edgeOffset":60879,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-704","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22372214","name":"162 St. George Street","osmId":22372214,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494555","center":[-269.5800018310547,4.699999809265137,-524.9949951171875],"bounds":[[-285.3399963378906,0,-537.3800048828125],[-253.82000732421875,9.399999618530273,-512.6099853515625]],"positionOffset":60951,"positionCount":666,"edgeOffset":61617,"edgeCount":420,"triangles":74,"simplificationErrorM":0,"buildingId":"campus:CO","identitySource":"https://map.utoronto.ca/?id=1809#!m/494555","codes":["CO"]},{"id":"osm-27801041","name":"Ernescliff College","osmId":27801041,"officialUrl":null,"center":[-263.875,5.114999771118164,-460.7900085449219],"bounds":[[-285.8399963378906,0,-477.07000732421875],[-241.91000366210938,10.229999542236328,-444.510009765625]],"positionOffset":62037,"positionCount":648,"edgeOffset":62685,"edgeCount":354,"triangles":72,"simplificationErrorM":0,"buildingId":"osm-27801041","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22372217","name":"Centre for Industrial Relations and Human Resources","osmId":22372217,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494551","center":[-194.25,4.425000190734863,-484.13499450683594],"bounds":[[-207.61000061035156,0,-497.6199951171875],[-180.88999938964844,8.850000381469727,-470.6499938964844]],"positionOffset":63039,"positionCount":711,"edgeOffset":63750,"edgeCount":468,"triangles":79,"simplificationErrorM":0,"buildingId":"osm-22372217","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23113405","name":"Gerald Larkin Building","osmId":23113405,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494575","center":[-17.365000247955322,5.909999847412109,-373.0799865722656],"bounds":[[-42.790000915527344,0,-392.04998779296875],[8.0600004196167,11.819999694824219,-354.1099853515625]],"positionOffset":64218,"positionCount":198,"edgeOffset":64416,"edgeCount":144,"triangles":22,"simplificationErrorM":0,"buildingId":"campus:LA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494575","codes":["LA"]},{"id":"osm-27291427","name":"George Ignatieff Theatre","osmId":27291427,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494577","center":[-32.52499961853027,2.190000057220459,-392.739990234375],"bounds":[[-43.54999923706055,0,-403.5799865722656],[-21.5,4.380000114440918,-381.8999938964844]],"positionOffset":64560,"positionCount":333,"edgeOffset":64893,"edgeCount":234,"triangles":37,"simplificationErrorM":0,"buildingId":"campus:GI","identitySource":"https://map.utoronto.ca/?id=1809#!m/494577","codes":["GI"]},{"id":"osm-8033844","name":"Louis B. Stewart Observatory","osmId":8033844,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494516","center":[173.98500061035156,5.360000133514404,-99.89999771118164],"bounds":[[163.1199951171875,0,-110.12999725341797],[184.85000610351562,10.720000267028809,-89.66999816894531]],"positionOffset":65127,"positionCount":423,"edgeOffset":65550,"edgeCount":294,"triangles":47,"simplificationErrorM":0,"buildingId":"campus:SO","identitySource":"https://map.utoronto.ca/?id=1809#!m/494516","codes":["SO"]},{"id":"osm-8032167","name":"University College","osmId":8032167,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055922","center":[75.2650021314621,14.885000228881836,-59.73000168800354],"bounds":[[2.509999990463257,0,-120.2300033569336],[148.02000427246094,29.770000457763672,0.7699999809265137]],"positionOffset":65844,"positionCount":9747,"edgeOffset":75591,"edgeCount":4812,"triangles":1083,"simplificationErrorM":0,"buildingId":"campus:UC","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055922","codes":["UC"]},{"id":"osm-22775068","name":"University College Union","osmId":22775068,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055923","center":[-63.354997634887695,6.800000190734863,-117.79500198364258],"bounds":[[-90.58999633789062,0,-133.49000549316406],[-36.119998931884766,13.600000381469727,-102.0999984741211]],"positionOffset":80403,"positionCount":549,"edgeOffset":80952,"edgeCount":372,"triangles":61,"simplificationErrorM":0,"buildingId":"campus:UP","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055923","codes":["UP"]},{"id":"osm-22597592","name":"School of Graduate Studies - Office of the Dean","osmId":22597592,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494506","center":[-28.480000019073486,5.820000171661377,34.22500038146973],"bounds":[[-43.75,0,24.59000015258789],[-13.210000038146973,11.640000343322754,43.86000061035156]],"positionOffset":81324,"positionCount":945,"edgeOffset":82269,"edgeCount":624,"triangles":105,"simplificationErrorM":0,"buildingId":"osm-22597592","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22597593","name":"Macdonald-Mullard House","osmId":22597593,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494504","center":[-15.90999984741211,5.164999961853027,56.05000114440918],"bounds":[[-31.81999969482422,0,43.40999984741211],[0,10.329999923706055,68.69000244140625]],"positionOffset":82893,"positionCount":720,"edgeOffset":83613,"edgeCount":486,"triangles":80,"simplificationErrorM":0,"buildingId":"osm-22597593","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-739","name":"Campus context","osmId":null,"officialUrl":null,"center":[-7.254999995231628,4.755000114440918,60.915000915527344],"bounds":[[-12,0,58.9900016784668],[-2.509999990463257,9.510000228881836,62.84000015258789]],"positionOffset":84099,"positionCount":90,"edgeOffset":84189,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-739","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401957","name":"Physical Geography Building","osmId":15401957,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494483","center":[27.9399995803833,7.554999828338623,213.6699981689453],"bounds":[[12.579999923706055,0,200.6199951171875],[43.29999923706055,15.109999656677246,226.72000122070312]],"positionOffset":84261,"positionCount":306,"edgeOffset":84567,"edgeCount":216,"triangles":34,"simplificationErrorM":0,"buildingId":"campus:PG","identitySource":"https://map.utoronto.ca/?id=1809#!m/494483","codes":["PG"]},{"id":"osm-23433288","name":"Engineering Annex","osmId":23433288,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494468","center":[114.59500503540039,5.440000057220459,298.4199981689453],"bounds":[[93.62000274658203,0,283.3399963378906],[135.57000732421875,10.880000114440918,313.5]],"positionOffset":84783,"positionCount":540,"edgeOffset":85323,"edgeCount":306,"triangles":60,"simplificationErrorM":0,"buildingId":"campus:EA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494468","codes":["EA"]},{"id":"osm-354180331","name":"Mechanical Engineering Building","osmId":354180331,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494474","center":[244.19500732421875,10.204999923706055,245.06999969482422],"bounds":[[209.16000366210938,0,204.0800018310547],[279.2300109863281,20.40999984741211,286.05999755859375]],"positionOffset":85629,"positionCount":2079,"edgeOffset":87708,"edgeCount":1302,"triangles":231,"simplificationErrorM":0,"buildingId":"campus:MC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494474","codes":["MC"]},{"id":"osm-23433306","name":"Haultain Building","osmId":23433306,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494475","center":[255.87999725341797,10.045000076293945,248.81000518798828],"bounds":[[231.0500030517578,0,218.61000061035156],[280.7099914550781,20.09000015258789,279.010009765625]],"positionOffset":89010,"positionCount":801,"edgeOffset":89811,"edgeCount":522,"triangles":89,"simplificationErrorM":0,"buildingId":"campus:HA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494475","codes":["HA"]},{"id":"osm-240330043","name":"Fitzgerald Building","osmId":240330043,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494479","center":[363.6999969482422,10.260000228881836,239.28499603271484],"bounds":[[335.0899963378906,0,201.75999450683594],[392.30999755859375,20.520000457763672,276.80999755859375]],"positionOffset":90333,"positionCount":2421,"edgeOffset":92754,"edgeCount":1464,"triangles":269,"simplificationErrorM":0,"buildingId":"campus:FG","identitySource":"https://map.utoronto.ca/?id=1809#!m/494479","codes":["FG"]},{"id":"osm-23433608","name":"McMurrich Building","osmId":23433608,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494500","center":[314.5349884033203,10.395000457763672,110.57500457763672],"bounds":[[296.989990234375,0,78.41000366210938],[332.0799865722656,20.790000915527344,142.74000549316406]],"positionOffset":94218,"positionCount":1233,"edgeOffset":95451,"edgeCount":726,"triangles":137,"simplificationErrorM":0,"buildingId":"campus:MR","identitySource":"https://map.utoronto.ca/?id=1809#!m/494500","codes":["MR"]},{"id":"osm-23433615","name":"Medical Sciences Building","osmId":23433615,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494491","center":[278.0999984741211,23,163.15500259399414],"bounds":[[181.8300018310547,0,116.51000213623047],[374.3699951171875,46,209.8000030517578]],"positionOffset":96177,"positionCount":3600,"edgeOffset":99777,"edgeCount":2172,"triangles":400,"simplificationErrorM":0,"buildingId":"campus:MS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494491","codes":["MS"]},{"id":"osm-988615299","name":"Medical Sciences Building","osmId":988615299,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494491","center":[273.2000045776367,6.304999828338623,103.43499755859375],"bounds":[[250.97999572753906,0,86.7699966430664],[295.4200134277344,12.609999656677246,120.0999984741211]],"positionOffset":101949,"positionCount":495,"edgeOffset":102444,"edgeCount":336,"triangles":55,"simplificationErrorM":0,"buildingId":"campus:MS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494491","codes":["MS"]},{"id":"osm-23433971","name":"Gerstein / Canadiana complex","osmId":23433971,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494505","center":[304.2099914550781,3.755000114440918,43.39000129699707],"bounds":[[299.3999938964844,0,38.130001068115234],[309.0199890136719,7.510000228881836,48.650001525878906]],"positionOffset":102780,"positionCount":144,"edgeOffset":102924,"edgeCount":108,"triangles":16,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494505","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-789","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[265.98500061035156,8.630000114440918,-13.574999809265137],"bounds":[[250.22000122070312,0,-43.279998779296875],[281.75,17.260000228881836,16.1299991607666]],"positionOffset":103032,"positionCount":495,"edgeOffset":103527,"edgeCount":342,"triangles":55,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-790","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[271.00498962402344,10.6850004196167,41.755001068115234],"bounds":[[266.42999267578125,0,37.220001220703125],[275.5799865722656,21.3700008392334,46.290000915527344]],"positionOffset":103869,"positionCount":198,"edgeOffset":104067,"edgeCount":132,"triangles":22,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-791","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[264.1650085449219,2.134999990463257,58.10999870300293],"bounds":[[258.260009765625,0,50.119998931884766],[270.07000732421875,4.269999980926514,66.0999984741211]],"positionOffset":104199,"positionCount":684,"edgeOffset":104883,"edgeCount":372,"triangles":76,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-792","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[276.17000579833984,7.324999809265137,30.919998168945312],"bounds":[[227.61000061035156,0,-21],[324.7300109863281,14.649999618530273,82.83999633789062]],"positionOffset":105255,"positionCount":2439,"edgeOffset":107694,"edgeCount":1398,"triangles":271,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-793","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[266.4350051879883,6.639999866485596,24.474998474121094],"bounds":[[208.13999938964844,0,-33.88999938964844],[324.7300109863281,13.279999732971191,82.83999633789062]],"positionOffset":109092,"positionCount":1656,"edgeOffset":110748,"edgeCount":1020,"triangles":184,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-794","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[231.25499725341797,4.989999771118164,2.450000762939453],"bounds":[[208.13999938964844,0,-33.88999938964844],[254.3699951171875,9.979999542236328,38.790000915527344]],"positionOffset":111768,"positionCount":981,"edgeOffset":112749,"edgeCount":510,"triangles":109,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-795","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[264.1650085449219,2.134999990463257,58.10999870300293],"bounds":[[258.260009765625,0,50.119998931884766],[270.07000732421875,4.269999980926514,66.0999984741211]],"positionOffset":113259,"positionCount":684,"edgeOffset":113943,"edgeCount":372,"triangles":76,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"Multipatch_50H_NORTH-796","name":"Gerstein / Canadiana complex","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494508","center":[252.49501037597656,8.220000267028809,1.8249998092651367],"bounds":[[245.82000732421875,0,-10.930000305175781],[259.1700134277344,16.440000534057617,14.579999923706055]],"positionOffset":114315,"positionCount":90,"edgeOffset":114405,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"campus:SM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494508","codes":["SM","CG"],"complexNote":"Connected library / Canadiana geometry; separate boundaries are not resolved.","officialEntries":[{"code":"SM","name":"Sigmund Samuel Library Building","url":"https://map.utoronto.ca/?id=1809#!m/494508"},{"code":"CG","name":"Canadiana Gallery","url":"https://map.utoronto.ca/?id=1809#!m/494505"}]},{"id":"osm-14748487","name":"Cody Hall","osmId":14748487,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494489","center":[-56.63999938964844,6.789999961853027,186.63499450683594],"bounds":[[-85.27999877929688,0,165.0399932861328],[-28,13.579999923706055,208.22999572753906]],"positionOffset":114477,"positionCount":1386,"edgeOffset":115863,"edgeCount":834,"triangles":154,"simplificationErrorM":0,"buildingId":"osm-14748487","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1466904837","name":"Campus context","osmId":1466904837,"officialUrl":null,"center":[-128.4550018310547,1.4450000524520874,102.36999893188477],"bounds":[[-135,0,95.95999908447266],[-121.91000366210938,2.890000104904175,108.77999877929688]],"positionOffset":116697,"positionCount":306,"edgeOffset":117003,"edgeCount":216,"triangles":34,"simplificationErrorM":0,"buildingId":"osm-1466904837","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-1428103037","name":"McLennan Physical Laboratories","osmId":1428103037,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494490","center":[-129.1300048828125,34.75,172.5250015258789],"bounds":[[-173.4600067138672,0,109.44999694824219],[-84.80000305175781,69.5,235.60000610351562]],"positionOffset":117219,"positionCount":7263,"edgeOffset":124482,"edgeCount":5172,"triangles":807,"simplificationErrorM":0.499,"buildingId":"campus:MP","identitySource":"https://map.utoronto.ca/?id=1809#!m/494490","codes":["MP"]},{"id":"Multipatch_50H_NORTH-803","name":"Campus context","osmId":null,"officialUrl":null,"center":[-150.37999725341797,1.3799999952316284,-71.68000030517578],"bounds":[[-153.92999267578125,0,-76.06999969482422],[-146.8300018310547,2.759999990463257,-67.29000091552734]],"positionOffset":129654,"positionCount":90,"edgeOffset":129744,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-803","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204343980","name":"Campus context","osmId":204343980,"officialUrl":null,"center":[-378.5299987792969,3.640000104904175,-168.60499572753906],"bounds":[[-384.2200012207031,0,-178.4199981689453],[-372.8399963378906,7.28000020980835,-158.7899932861328]],"positionOffset":129816,"positionCount":441,"edgeOffset":130257,"edgeCount":288,"triangles":49,"simplificationErrorM":0,"buildingId":"osm-204343980","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-805","name":"Campus context","osmId":null,"officialUrl":null,"center":[-348.7799987792969,3.369999885559082,-121.72000122070312],"bounds":[[-357.32000732421875,0,-131.8300018310547],[-340.239990234375,6.739999771118164,-111.61000061035156]],"positionOffset":130545,"positionCount":387,"edgeOffset":130932,"edgeCount":252,"triangles":43,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-805","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-806","name":"Campus context","osmId":null,"officialUrl":null,"center":[-335.0399932861328,3.299999952316284,-125.83999633789062],"bounds":[[-344.989990234375,0,-135.58999633789062],[-325.0899963378906,6.599999904632568,-116.08999633789062]],"positionOffset":131184,"positionCount":855,"edgeOffset":132039,"edgeCount":582,"triangles":95,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-806","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20319809","name":"Faculty Club","osmId":20319809,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494501","center":[-297.0199890136719,4.224999904632568,133.06000137329102],"bounds":[[-311.67999267578125,0,113.81999969482422],[-282.3599853515625,8.449999809265137,152.3000030517578]],"positionOffset":132621,"positionCount":342,"edgeOffset":132963,"edgeCount":234,"triangles":38,"simplificationErrorM":0,"buildingId":"osm-20319809","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401968","name":"Centre for Urban and Community Studies","osmId":15401968,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494452","center":[-224.94499969482422,6.605000019073486,455.4550018310547],"bounds":[[-244.72000122070312,0,436.760009765625],[-205.1699981689453,13.210000038146973,474.1499938964844]],"positionOffset":133197,"positionCount":225,"edgeOffset":133422,"edgeCount":144,"triangles":25,"simplificationErrorM":0,"buildingId":"osm-15401968","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23436210","name":"Jesuits in English Canada","osmId":23436210,"officialUrl":null,"center":[513.5299835205078,4.014999866485596,-227.44499969482422],"bounds":[[501.6499938964844,0,-238.11000061035156],[525.4099731445312,8.029999732971191,-216.77999877929688]],"positionOffset":133566,"positionCount":1089,"edgeOffset":134655,"edgeCount":714,"triangles":121,"simplificationErrorM":0,"buildingId":"osm-23436210","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-8932810","name":"Muzzo Family Alumni Hall","osmId":8932810,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494578","center":[532.0150146484375,9.75,-283.4350128173828],"bounds":[[512.0700073242188,0,-305.9800109863281],[551.9600219726562,19.5,-260.8900146484375]],"positionOffset":135369,"positionCount":1737,"edgeOffset":137106,"edgeCount":954,"triangles":193,"simplificationErrorM":0,"buildingId":"campus:AH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494578","codes":["AH"]},{"id":"osm-8027952","name":"John M. Kelly Library - St. Michael’s College","osmId":8027952,"officialUrl":null,"center":[582.5050048828125,9.895000457763672,-293.69500732421875],"bounds":[[551.260009765625,0,-324.9200134277344],[613.75,19.790000915527344,-262.4700012207031]],"positionOffset":138060,"positionCount":486,"edgeOffset":138546,"edgeCount":324,"triangles":54,"simplificationErrorM":0,"buildingId":"osm-8027952","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-8810864","name":"Carr Hall","osmId":8810864,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494580","center":[508.49000549316406,8.390000343322754,-335.0899963378906],"bounds":[[481.8399963378906,0,-350.3699951171875],[535.1400146484375,16.780000686645508,-319.80999755859375]],"positionOffset":138870,"positionCount":927,"edgeOffset":139797,"edgeCount":594,"triangles":103,"simplificationErrorM":0,"buildingId":"campus:CR","identitySource":"https://map.utoronto.ca/?id=1809#!m/494580","codes":["CR"]},{"id":"osm-23436644","name":"Loretto College","osmId":23436644,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494597","center":[537.9250030517578,12.199999809265137,-574.5950012207031],"bounds":[[502.8299865722656,0,-594.5499877929688],[573.02001953125,24.399999618530273,-554.6400146484375]],"positionOffset":140391,"positionCount":918,"edgeOffset":141309,"edgeCount":600,"triangles":102,"simplificationErrorM":0,"buildingId":"campus:LC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494597","codes":["LC"]},{"id":"osm-23436633","name":"Rowell Jackman Hall","osmId":23436633,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494606","center":[473.01499938964844,13.75,-577.8399963378906],"bounds":[[449.4200134277344,0,-609.4299926757812],[496.6099853515625,27.5,-546.25]],"positionOffset":141909,"positionCount":1332,"edgeOffset":143241,"edgeCount":864,"triangles":148,"simplificationErrorM":0,"buildingId":"campus:RJ","identitySource":"https://map.utoronto.ca/?id=1809#!m/494606","codes":["RJ"]},{"id":"osm-8111900","name":"E. J. Pratt Library","osmId":8111900,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/959687","center":[435.9700012207031,7.300000190734863,-454.8000030517578],"bounds":[[414.3800048828125,0,-477.4599914550781],[457.55999755859375,14.600000381469727,-432.1400146484375]],"positionOffset":144105,"positionCount":468,"edgeOffset":144573,"edgeCount":360,"triangles":52,"simplificationErrorM":0,"buildingId":"campus:PR","identitySource":"https://map.utoronto.ca/?id=1809#!m/959687","codes":["PR"]},{"id":"osm-23436616","name":"Goldring Student Centre","osmId":23436616,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494608","center":[342.1549987792969,5.184999942779541,-611.9149780273438],"bounds":[[306.32000732421875,0,-638.0399780273438],[377.989990234375,10.369999885559082,-585.7899780273438]],"positionOffset":144933,"positionCount":990,"edgeOffset":145923,"edgeCount":648,"triangles":110,"simplificationErrorM":0,"buildingId":"campus:GC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494608","codes":["GC"]},{"id":"osm-10334996","name":"371 Bloor Street West","osmId":10334996,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494550","center":[-460.57000732421875,11.350000381469727,-458.3199920654297],"bounds":[[-528.1900024414062,0,-509.79998779296875],[-392.95001220703125,22.700000762939453,-406.8399963378906]],"positionOffset":146571,"positionCount":7605,"edgeOffset":154176,"edgeCount":4896,"triangles":845,"simplificationErrorM":0.492,"buildingId":"campus:FE","identitySource":"https://map.utoronto.ca/?id=1809#!m/494550","codes":["FE"]},{"id":"osm-1461363247","name":"Schwartz Reisman Innovation Campus","osmId":1461363247,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/514444","center":[604.5199890136719,32.400001525878906,195.69499969482422],"bounds":[[572,0,168.6699981689453],[637.0399780273438,64.80000305175781,222.72000122070312]],"positionOffset":159072,"positionCount":1251,"edgeOffset":160323,"edgeCount":708,"triangles":139,"simplificationErrorM":0,"buildingId":"osm-1461363247","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-12000960","name":"Rotman School of Management","osmId":12000960,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494538","center":[-130.21999740600586,19.850000381469727,-306.87000274658203],"bounds":[[-169.5399932861328,0,-371.19000244140625],[-90.9000015258789,39.70000076293945,-242.5500030517578]],"positionOffset":161031,"positionCount":220653,"edgeOffset":381684,"edgeCount":141054,"triangles":24517,"simplificationErrorM":0.492,"buildingId":"campus:RT","identitySource":"https://map.utoronto.ca/?id=1809#!m/494538","codes":["RT"]},{"id":"osm-217103112","name":"Campus context","osmId":217103112,"officialUrl":null,"center":[537.6449890136719,9.850000381469727,-588.6999816894531],"bounds":[[531.6699829101562,0,-594.5499877929688],[543.6199951171875,19.700000762939453,-582.8499755859375]],"positionOffset":522738,"positionCount":90,"edgeOffset":522828,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-217103112","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-1111","name":"Hart House","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494521","center":[179.56499862670898,16.5,-179.36499786376953],"bounds":[[117.31999969482422,0,-226.5500030517578],[241.80999755859375,33,-132.17999267578125]],"positionOffset":522900,"positionCount":2907,"edgeOffset":525807,"edgeCount":2130,"triangles":323,"simplificationErrorM":0,"buildingId":"campus:HH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494521","codes":["HH"]},{"id":"Multipatch_50H_NORTH-1112","name":"Campus context","osmId":null,"officialUrl":null,"center":[143.38999938964844,8.5,-238.37999725341797],"bounds":[[95.33000183105469,0,-277.04998779296875],[191.4499969482422,17,-199.7100067138672]],"positionOffset":527937,"positionCount":2511,"edgeOffset":530448,"edgeCount":1686,"triangles":279,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-1112","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204323317","name":"Emmanuel College","osmId":204323317,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494601","center":[313.5449981689453,10,-513.8499908447266],"bounds":[[279.7799987792969,0,-557.219970703125],[347.30999755859375,20,-470.4800109863281]],"positionOffset":532134,"positionCount":999,"edgeOffset":533133,"edgeCount":690,"triangles":111,"simplificationErrorM":0,"buildingId":"campus:EM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494601","codes":["EM"]},{"id":"osm-12873892","name":"Isabel Bader Theatre","osmId":12873892,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494605","center":[347.2050018310547,7.199999809265137,-554.9950256347656],"bounds":[[324.82000732421875,0,-573.6500244140625],[369.5899963378906,14.399999618530273,-536.3400268554688]],"positionOffset":533823,"positionCount":7191,"edgeOffset":541014,"edgeCount":4866,"triangles":799,"simplificationErrorM":0.049,"buildingId":"campus:BT","identitySource":"https://map.utoronto.ca/?id=1809#!m/494605","codes":["BT"]},{"id":"osm-204323029","name":"Victoria College","osmId":204323029,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494602","center":[381.2949981689453,24,-520.8300018310547],"bounds":[[356.32000732421875,0,-542.6199951171875],[406.2699890136719,48,-499.0400085449219]],"positionOffset":545880,"positionCount":999,"edgeOffset":546879,"edgeCount":684,"triangles":111,"simplificationErrorM":0,"buildingId":"campus:VC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494602","codes":["VC"]},{"id":"osm-12873850","name":"Burwash Hall","osmId":12873850,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494607","center":[430.7749938964844,8.505000114440918,-513.3000183105469],"bounds":[[370.0299987792969,0,-598.780029296875],[491.5199890136719,17.010000228881836,-427.82000732421875]],"positionOffset":547563,"positionCount":6066,"edgeOffset":553629,"edgeCount":4320,"triangles":674,"simplificationErrorM":0,"buildingId":"campus:BW","identitySource":"https://map.utoronto.ca/?id=1809#!m/494607","codes":["BW"]},{"id":"osm-30430629","name":"77 Charles West","osmId":30430629,"officialUrl":null,"center":[515.9450073242188,31.700000762939453,-605.0050048828125],"bounds":[[485.6099853515625,0,-628.27001953125],[546.280029296875,63.400001525878906,-581.739990234375]],"positionOffset":557949,"positionCount":82944,"edgeOffset":640893,"edgeCount":47814,"triangles":9216,"simplificationErrorM":0.491,"buildingId":"osm-30430629","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-30430627","name":"Law House","osmId":30430627,"officialUrl":null,"center":[548.1099853515625,5.5,-623.5050048828125],"bounds":[[539.5,0,-632.5599975585938],[556.719970703125,11,-614.4500122070312]],"positionOffset":688707,"positionCount":648,"edgeOffset":689355,"edgeCount":486,"triangles":72,"simplificationErrorM":0,"buildingId":"osm-30430627","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-991956441","name":"Campus context","osmId":991956441,"officialUrl":null,"center":[608.0449829101562,6.675000190734863,-499.93499755859375],"bounds":[[584.5499877929688,0,-511.19000244140625],[631.5399780273438,13.350000381469727,-488.67999267578125]],"positionOffset":689841,"positionCount":21384,"edgeOffset":711225,"edgeCount":15210,"triangles":2376,"simplificationErrorM":0.491,"buildingId":"osm-991956441","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401924","name":"St. Basil's Church","osmId":15401924,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494593","center":[632.2799987792969,23,-463.44500732421875],"bounds":[[602.8499755859375,0,-489.2300109863281],[661.7100219726562,46,-437.6600036621094]],"positionOffset":726435,"positionCount":1206,"edgeOffset":727641,"edgeCount":936,"triangles":134,"simplificationErrorM":0,"buildingId":"campus:BS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494593","codes":["BS"]},{"id":"osm-15401954","name":"Brennan Hall","osmId":15401954,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494595","center":[537.135009765625,8.005000114440918,-481.0399932861328],"bounds":[[491.20001220703125,0,-532.8699951171875],[583.0700073242188,16.010000228881836,-429.2099914550781]],"positionOffset":728577,"positionCount":2601,"edgeOffset":731178,"edgeCount":1734,"triangles":289,"simplificationErrorM":0,"buildingId":"campus:BR","identitySource":"https://map.utoronto.ca/?id=1809#!m/494595","codes":["BR"]},{"id":"osm-20343239","name":"Anthropology Building","osmId":20343239,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494472","center":[-130.87000274658203,11,273.9100036621094],"bounds":[[-151.16000366210938,0,253.6199951171875],[-110.58000183105469,22,294.20001220703125]],"positionOffset":732912,"positionCount":900,"edgeOffset":733812,"edgeCount":576,"triangles":100,"simplificationErrorM":0,"buildingId":"campus:AP","identitySource":"https://map.utoronto.ca/?id=1809#!m/494472","codes":["AP"]},{"id":"Multipatch_50H_NORTH-1145","name":"Campus context","osmId":null,"officialUrl":null,"center":[-88.93500137329102,45.70000076293945,278.5600128173828],"bounds":[[-91.81999969482422,0,275.6700134277344],[-86.05000305175781,91.4000015258789,281.45001220703125]],"positionOffset":734388,"positionCount":1926,"edgeOffset":736314,"edgeCount":864,"triangles":214,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-1145","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20174304","name":"Central Steam Plant","osmId":20174304,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494477","center":[-79.61000061035156,8.5,261.40499114990234],"bounds":[[-112.93000030517578,0,236.75999450683594],[-46.290000915527344,17,286.04998779296875]],"positionOffset":737178,"positionCount":387,"edgeOffset":737565,"edgeCount":294,"triangles":43,"simplificationErrorM":0,"buildingId":"campus:ST","identitySource":"https://map.utoronto.ca/?id=1809#!m/494477","codes":["ST"]},{"id":"osm-236943829","name":"215 Huron Street","osmId":236943829,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494463","center":[-108.4900016784668,18.450000762939453,340.9599914550781],"bounds":[[-135.35000610351562,0,297.0799865722656],[-81.62999725341797,36.900001525878906,384.8399963378906]],"positionOffset":737859,"positionCount":1980,"edgeOffset":739839,"edgeCount":1386,"triangles":220,"simplificationErrorM":0,"buildingId":"campus:HU","identitySource":"https://map.utoronto.ca/?id=1809#!m/494463","codes":["HU"]},{"id":"osm-23432948","name":"Fields Institute for Research in Math Science","osmId":23432948,"officialUrl":null,"center":[-51.02000045776367,9.449999809265137,391.02500915527344],"bounds":[[-68.01000213623047,0,372.07000732421875],[-34.029998779296875,18.899999618530273,409.9800109863281]],"positionOffset":741225,"positionCount":5022,"edgeOffset":746247,"edgeCount":3264,"triangles":558,"simplificationErrorM":0,"buildingId":"osm-23432948","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-12872719","name":"UTSU Student Commons","osmId":12872719,"officialUrl":null,"center":[-88.53499984741211,12.050000190734863,407.34999084472656],"bounds":[[-109.55999755859375,0,382.0799865722656],[-67.51000213623047,24.100000381469727,432.6199951171875]],"positionOffset":749511,"positionCount":3420,"edgeOffset":752931,"edgeCount":1872,"triangles":380,"simplificationErrorM":0,"buildingId":"osm-12872719","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-141691917","name":"Bahen Centre for Information Technology","osmId":141691917,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494470","center":[-31.710001945495605,19.100000381469727,312.875],"bounds":[[-94.7300033569336,0,227.85000610351562],[31.309999465942383,38.20000076293945,397.8999938964844]],"positionOffset":754803,"positionCount":53307,"edgeOffset":808110,"edgeCount":28632,"triangles":5923,"simplificationErrorM":0.149,"buildingId":"campus:BA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494470","codes":["BA","VN"]},{"id":"osm-8068859","name":"New Residence (New College)","osmId":8068859,"officialUrl":null,"center":[-316.0249938964844,15.800000190734863,168.90999603271484],"bounds":[[-343.5199890136719,0,120.55999755859375],[-288.5299987792969,31.600000381469727,217.25999450683594]],"positionOffset":836742,"positionCount":28449,"edgeOffset":865191,"edgeCount":17112,"triangles":3161,"simplificationErrorM":0.494,"buildingId":"osm-8068859","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-1154","name":"Borden Building South","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494480","center":[-225.76000213623047,11.300000190734863,178.53499221801758],"bounds":[[-289.7200012207031,0,90.7699966430664],[-161.8000030517578,22.600000381469727,266.29998779296875]],"positionOffset":882303,"positionCount":13356,"edgeOffset":895659,"edgeCount":8730,"triangles":1484,"simplificationErrorM":0.496,"buildingId":"campus:SB","identitySource":"https://map.utoronto.ca/?id=1809#!m/494480","codes":["SB"]},{"id":"osm-9303310","name":"Ramsay Wright Building","osmId":9303310,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494515","center":[-183.03499603271484,13.449999809265137,-95.74500274658203],"bounds":[[-240.1199951171875,0,-147.8800048828125],[-125.94999694824219,26.899999618530273,-43.61000061035156]],"positionOffset":904389,"positionCount":61614,"edgeOffset":966003,"edgeCount":39780,"triangles":6846,"simplificationErrorM":0.498,"buildingId":"osm-9303310","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["RW"]},{"id":"osm-7948423","name":"Sidney Smith Hall","osmId":7948423,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494510","center":[-158.86000061035156,14.75,-15.624998092651367],"bounds":[[-216.8000030517578,0,-68.94999694824219],[-100.91999816894531,29.5,37.70000076293945]],"positionOffset":1005783,"positionCount":5400,"edgeOffset":1011183,"edgeCount":4140,"triangles":600,"simplificationErrorM":0,"buildingId":"campus:SS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494510","codes":["SS"]},{"id":"osm-7991747","name":"Robarts Library","osmId":7991747,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/959690","center":[-225.72500610351562,33.599998474121094,-247.6449966430664],"bounds":[[-287.260009765625,0,-319.04998779296875],[-164.19000244140625,67.19999694824219,-176.24000549316406]],"positionOffset":1015323,"positionCount":12933,"edgeOffset":1028256,"edgeCount":7500,"triangles":1437,"simplificationErrorM":0,"buildingId":"campus:RL","identitySource":"https://map.utoronto.ca/?id=1809#!m/959690","codes":["RL"]},{"id":"osm-22372215","name":"Innis College","osmId":22372215,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055913","center":[-232.0199966430664,5.800000190734863,-367.1750030517578],"bounds":[[-258.2799987792969,0,-395.9599914550781],[-205.75999450683594,11.600000381469727,-338.3900146484375]],"positionOffset":1035756,"positionCount":2268,"edgeOffset":1038024,"edgeCount":1650,"triangles":252,"simplificationErrorM":0,"buildingId":"campus:IN","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055913","codes":["IN"]},{"id":"osm-28516661","name":"St. Thomas Aquinas Church","osmId":28516661,"officialUrl":null,"center":[-83.95499801635742,7.5,-246.04000091552734],"bounds":[[-94.88999938964844,0,-264.2200012207031],[-73.0199966430664,15,-227.86000061035156]],"positionOffset":1039674,"positionCount":684,"edgeOffset":1040358,"edgeCount":528,"triangles":76,"simplificationErrorM":0,"buildingId":"osm-28516661","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401952","name":"Windle House","osmId":15401952,"officialUrl":null,"center":[582.64501953125,7,-427.35499572753906],"bounds":[[568.9500122070312,0,-434.8500061035156],[596.3400268554688,14,-419.8599853515625]],"positionOffset":1040886,"positionCount":414,"edgeOffset":1041300,"edgeCount":276,"triangles":46,"simplificationErrorM":0,"buildingId":"osm-15401952","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22201015","name":"Newman Centre","osmId":22201015,"officialUrl":null,"center":[-111.33000183105469,7.5,-232.91500091552734],"bounds":[[-127.55000305175781,0,-246.8000030517578],[-95.11000061035156,15,-219.02999877929688]],"positionOffset":1041576,"positionCount":7200,"edgeOffset":1048776,"edgeCount":3024,"triangles":800,"simplificationErrorM":0.135,"buildingId":"osm-22201015","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20898043","name":"Innis Residence","osmId":20898043,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055914","center":[-158.86499786376953,12.449999809265137,-403.489990234375],"bounds":[[-188.4499969482422,0,-437.3599853515625],[-129.27999877929688,24.899999618530273,-369.6199951171875]],"positionOffset":1051800,"positionCount":6822,"edgeOffset":1058622,"edgeCount":3732,"triangles":758,"simplificationErrorM":0,"buildingId":"campus:IS","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055914","codes":["IS"]},{"id":"Multipatch_50H_NORTH-1164","name":"Massey College","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055911","center":[-63.769999504089355,6,-280.7699966430664],"bounds":[[-97.3499984741211,0,-327.239990234375],[-30.190000534057617,12,-234.3000030517578]],"positionOffset":1062354,"positionCount":3204,"edgeOffset":1065558,"edgeCount":2178,"triangles":356,"simplificationErrorM":0,"buildingId":"campus:MA","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055911","codes":["MA"]},{"id":"osm-23433444","name":"St. Hilda's College","osmId":23433444,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494576","center":[-97.95000076293945,5.5,-377.2050018310547],"bounds":[[-129.5,0,-431.20001220703125],[-66.4000015258789,11,-323.2099914550781]],"positionOffset":1067736,"positionCount":1674,"edgeOffset":1069410,"edgeCount":1068,"triangles":186,"simplificationErrorM":0,"buildingId":"campus:HI","identitySource":"https://map.utoronto.ca/?id=1809#!m/494576","codes":["HI"]},{"id":"osm-10334994","name":"Devonshire House","osmId":10334994,"officialUrl":null,"center":[4.1449995040893555,7.099999904632568,-302.0249938964844],"bounds":[[-31.899999618530273,0,-348.04998779296875],[40.189998626708984,14.199999809265137,-256]],"positionOffset":1070478,"positionCount":14418,"edgeOffset":1084896,"edgeCount":11232,"triangles":1602,"simplificationErrorM":0.499,"buildingId":"osm-10334994","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-1167","name":"Trinity College","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494574","center":[79.43000316619873,10.050000190734863,-334.90000915527344],"bounds":[[23.6200008392334,0,-398.70001220703125],[135.24000549316406,20.100000381469727,-271.1000061035156]],"positionOffset":1096128,"positionCount":2466,"edgeOffset":1098594,"edgeCount":1734,"triangles":274,"simplificationErrorM":0,"buildingId":"campus:TC","identitySource":"https://map.utoronto.ca/?id=1809#!m/494574","codes":["TC"]},{"id":"osm-12000624","name":"Edward Johnson Building","osmId":12000624,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494549","center":[170.55999755859375,13.850000381469727,-481.6050109863281],"bounds":[[139.13999938964844,0,-525.3200073242188],[201.97999572753906,27.700000762939453,-437.8900146484375]],"positionOffset":1100328,"positionCount":1260,"edgeOffset":1101588,"edgeCount":786,"triangles":140,"simplificationErrorM":0,"buildingId":"campus:EJ","identitySource":"https://map.utoronto.ca/?id=1809#!m/494549","codes":["EJ"]},{"id":"osm-12000627","name":"Bora Laskin Law Library","osmId":12000627,"officialUrl":null,"center":[208.25,10,-396.5500030517578],"bounds":[[162.7100067138672,0,-446.4599914550781],[253.7899932861328,20,-346.6400146484375]],"positionOffset":1102374,"positionCount":7191,"edgeOffset":1109565,"edgeCount":4080,"triangles":799,"simplificationErrorM":0.089,"buildingId":"osm-12000627","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401948","name":"Phelan House","osmId":15401948,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494591","center":[590.2650146484375,7.5,-399.2550048828125],"bounds":[[580.510009765625,0,-408.55999755859375],[600.02001953125,15,-389.95001220703125]],"positionOffset":1113645,"positionCount":234,"edgeOffset":1113879,"edgeCount":180,"triangles":26,"simplificationErrorM":0,"buildingId":"campus:PH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494591","codes":["PH"]},{"id":"osm-12873822","name":"Margaret Addison Hall","osmId":12873822,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494612","center":[336.13999938964844,11.100000381469727,-656.5],"bounds":[[303.94000244140625,0,-678.8900146484375],[368.3399963378906,22.200000762939453,-634.1099853515625]],"positionOffset":1114059,"positionCount":3402,"edgeOffset":1117461,"edgeCount":1626,"triangles":378,"simplificationErrorM":0,"buildingId":"campus:MG","identitySource":"https://map.utoronto.ca/?id=1809#!m/494612","codes":["MG"]},{"id":"osm-15401945","name":"Founders House","osmId":15401945,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494585","center":[596.9700012207031,7.5,-369.09999084472656],"bounds":[[588.8099975585938,0,-381.79998779296875],[605.1300048828125,15,-356.3999938964844]],"positionOffset":1119087,"positionCount":234,"edgeOffset":1119321,"edgeCount":174,"triangles":26,"simplificationErrorM":0,"buildingId":"campus:BH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494585","codes":["BH"]},{"id":"osm-20252184","name":"Lillian Massey Building","osmId":20252184,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494613","center":[250.10000610351562,7.849999904632568,-680.5450134277344],"bounds":[[225.6300048828125,0,-712.7000122070312],[274.57000732421875,15.699999809265137,-648.3900146484375]],"positionOffset":1119495,"positionCount":7200,"edgeOffset":1126695,"edgeCount":4044,"triangles":800,"simplificationErrorM":0.023,"buildingId":"campus:LI","identitySource":"https://map.utoronto.ca/?id=1809#!m/494613","codes":["LI"]},{"id":"osm-992457515","name":"Campus context","osmId":992457515,"officialUrl":null,"center":[279.8800048828125,24.350000381469727,-704.6599731445312],"bounds":[[256.5299987792969,0,-728.969970703125],[303.2300109863281,48.70000076293945,-680.3499755859375]],"positionOffset":1130739,"positionCount":2070,"edgeOffset":1132809,"edgeCount":1578,"triangles":230,"simplificationErrorM":0,"buildingId":"osm-992457515","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20252183","name":"Gardiner Museum","osmId":20252183,"officialUrl":null,"center":[283.5699920654297,8.300000190734863,-655.0149841308594],"bounds":[[261.55999755859375,0,-679.1799926757812],[305.5799865722656,16.600000381469727,-630.8499755859375]],"positionOffset":1134387,"positionCount":10728,"edgeOffset":1145115,"edgeCount":6138,"triangles":1192,"simplificationErrorM":0.489,"buildingId":"osm-20252183","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23436623","name":"Annesley Hall","osmId":23436623,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494609","center":[294.4199981689453,6.5,-618.1950073242188],"bounds":[[273.260009765625,0,-644.739990234375],[315.5799865722656,13,-591.6500244140625]],"positionOffset":1151253,"positionCount":1053,"edgeOffset":1152306,"edgeCount":738,"triangles":117,"simplificationErrorM":0,"buildingId":"campus:AN","identitySource":"https://map.utoronto.ca/?id=1809#!m/494609","codes":["AN"]},{"id":"osm-4942687","name":"Royal Ontario Museum","osmId":4942687,"officialUrl":null,"center":[158.35499572753906,17.849999248981476,-595.7749938964844],"bounds":[[92.27999877929688,-1.399999976158142,-688.7999877929688],[224.42999267578125,37.099998474121094,-502.75]],"positionOffset":1153044,"positionCount":92052,"edgeOffset":1245096,"edgeCount":50460,"triangles":10228,"simplificationErrorM":0.496,"buildingId":"osm-4942687","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["RO"]},{"id":"Multipatch_50H_NORTH-1194","name":"Campus context","osmId":null,"officialUrl":null,"center":[-67.45500087738037,1.5,-615.2899780273438],"bounds":[[-104.01000213623047,0,-629.4199829101562],[-30.899999618530273,3,-601.1599731445312]],"positionOffset":1295556,"positionCount":144,"edgeOffset":1295700,"edgeCount":108,"triangles":16,"simplificationErrorM":0,"buildingId":"Multipatch_50H_NORTH-1194","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-204343133","name":"Varsity Pavilion","osmId":204343133,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494548","center":[-13.69999885559082,6.75,-447.4700012207031],"bounds":[[-71.73999786376953,0,-472.8699951171875],[44.34000015258789,13.5,-422.07000732421875]],"positionOffset":1295808,"positionCount":29790,"edgeOffset":1325598,"edgeCount":14232,"triangles":3310,"simplificationErrorM":0.489,"buildingId":"campus:VP","identitySource":"https://map.utoronto.ca/?id=1809#!m/494548","codes":["VP"]},{"id":"osm-8095834","name":"Varsity Arena","osmId":8095834,"officialUrl":null,"center":[39.279998660087585,11,-555.1899871826172],"bounds":[[-3.069999933242798,0,-635.4199829101562],[81.62999725341797,22,-474.9599914550781]],"positionOffset":1339830,"positionCount":3204,"edgeOffset":1343034,"edgeCount":2124,"triangles":356,"simplificationErrorM":0,"buildingId":"osm-8095834","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-58741954","name":"Campus context","osmId":58741954,"officialUrl":null,"center":[7.090000152587891,13.25,-547.1950073242188],"bounds":[[-23.270000457763672,0,-622.77001953125],[37.45000076293945,26.5,-471.6199951171875]],"positionOffset":1345158,"positionCount":63432,"edgeOffset":1408590,"edgeCount":36036,"triangles":7048,"simplificationErrorM":0.498,"buildingId":"osm-58741954","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401950","name":"Sorbara Hall Student Residence","osmId":15401950,"officialUrl":null,"center":[629.7899780273438,9.25,-394.3999938964844],"bounds":[[602.0399780273438,0,-424.4700012207031],[657.5399780273438,18.5,-364.3299865722656]],"positionOffset":1444626,"positionCount":6021,"edgeOffset":1450647,"edgeCount":3954,"triangles":669,"simplificationErrorM":0,"buildingId":"osm-15401950","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20251223","name":"TELUS Centre for Performance and Learning","osmId":20251223,"officialUrl":null,"center":[37.31500053405762,16.950000762939453,-612.9849853515625],"bounds":[[-10.15999984741211,0,-651.9199829101562],[84.79000091552734,33.900001525878906,-574.0499877929688]],"positionOffset":1454601,"positionCount":47484,"edgeOffset":1502085,"edgeCount":32310,"triangles":5276,"simplificationErrorM":0.495,"buildingId":"osm-20251223","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22236557","name":"Transitional Year Programme","osmId":22236557,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494554","center":[-205.15999603271484,5.699999809265137,-506.0799865722656],"bounds":[[-215.4199981689453,0,-516.8499755859375],[-194.89999389648438,11.399999618530273,-495.30999755859375]],"positionOffset":1534395,"positionCount":792,"edgeOffset":1535187,"edgeCount":540,"triangles":88,"simplificationErrorM":0,"buildingId":"osm-22236557","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-27750952","name":"Arthur M. Kruger Hall","osmId":27750952,"officialUrl":null,"center":[-170.91000366210938,7.800000190734863,-480.4250030517578],"bounds":[[-198.8800048828125,0,-526.3200073242188],[-142.94000244140625,15.600000381469727,-434.5299987792969]],"positionOffset":1535727,"positionCount":2205,"edgeOffset":1537932,"edgeCount":1560,"triangles":245,"simplificationErrorM":0,"buildingId":"osm-27750952","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-466988054","name":"Campus context","osmId":466988054,"officialUrl":null,"center":[-170.05999755859375,2.5999999046325684,-561.1499938964844],"bounds":[[-174.1199951171875,0,-566.5800170898438],[-166,5.199999809265137,-555.719970703125]],"positionOffset":1539492,"positionCount":2124,"edgeOffset":1541616,"edgeCount":1722,"triangles":236,"simplificationErrorM":0,"buildingId":"osm-466988054","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-20251671","name":"Munk School of Global Affairs & Public Policy","osmId":20251671,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055916","center":[-151.26000213623047,9.5600004196167,-567.2799987792969],"bounds":[[-168.2100067138672,0,-583.5499877929688],[-134.30999755859375,19.1200008392334,-551.010009765625]],"positionOffset":1543338,"positionCount":34407,"edgeOffset":1577745,"edgeCount":20820,"triangles":3823,"simplificationErrorM":0.495,"buildingId":"campus:MU","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055916","codes":["MU"]},{"id":"osm-258167657","name":"Goldring Centre","osmId":258167657,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494556","center":[-137.56500244140625,9.949999809265137,-515.5950164794922],"bounds":[[-166.07000732421875,0,-559.780029296875],[-109.05999755859375,19.899999618530273,-471.4100036621094]],"positionOffset":1598565,"positionCount":14922,"edgeOffset":1613487,"edgeCount":7662,"triangles":1658,"simplificationErrorM":0.492,"buildingId":"osm-258167657","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-10336057","name":"Woodsworth College Residence","osmId":10336057,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/983219","center":[-200.3800048828125,27.100000381469727,-548.6100158691406],"bounds":[[-233.2100067138672,0,-578.4000244140625],[-167.5500030517578,54.20000076293945,-518.8200073242188]],"positionOffset":1621149,"positionCount":11151,"edgeOffset":1632300,"edgeCount":7962,"triangles":1239,"simplificationErrorM":0.497,"buildingId":"osm-10336057","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["WO"]},{"id":"osm-22372212","name":"School of Continuing Studies","osmId":22372212,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494553","center":[-261.6050033569336,7.75,-485.0500030517578],"bounds":[[-283.6700134277344,0,-496.4200134277344],[-239.5399932861328,15.5,-473.67999267578125]],"positionOffset":1640262,"positionCount":3510,"edgeOffset":1643772,"edgeCount":2472,"triangles":390,"simplificationErrorM":0,"buildingId":"campus:CS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494553","codes":["CS"]},{"id":"osm-22372211","name":"Lambda Chi Alpha","osmId":22372211,"officialUrl":null,"center":[-245.79000091552734,6.5,-443.02500915527344],"bounds":[[-258.6600036621094,0,-450.95001220703125],[-232.9199981689453,13,-435.1000061035156]],"positionOffset":1646244,"positionCount":486,"edgeOffset":1646730,"edgeCount":372,"triangles":54,"simplificationErrorM":0,"buildingId":"osm-22372211","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22372209","name":"Max Gluskin House","osmId":22372209,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494546","center":[-250.37500762939453,8.449999809265137,-414.31500244140625],"bounds":[[-277.8900146484375,0,-437.2300109863281],[-222.86000061035156,16.899999618530273,-391.3999938964844]],"positionOffset":1647102,"positionCount":24642,"edgeOffset":1671744,"edgeCount":16638,"triangles":2738,"simplificationErrorM":0.498,"buildingId":"campus:GE","identitySource":"https://map.utoronto.ca/?id=1809#!m/494546","codes":["GE"]},{"id":"osm-27765374","name":"Senator David A. Croll Apartments","osmId":27765374,"officialUrl":null,"center":[-313.375,27.75,-524.9749908447266],"bounds":[[-371.8500061035156,0,-559.1799926757812],[-254.89999389648438,55.5,-490.7699890136719]],"positionOffset":1688382,"positionCount":7317,"edgeOffset":1695699,"edgeCount":5268,"triangles":813,"simplificationErrorM":0.463,"buildingId":"osm-27765374","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15089986","name":"Ontario Legislative Building","osmId":15089986,"officialUrl":null,"center":[413.6750030517578,27.7549991607666,-42.440001487731934],"bounds":[[342.260009765625,0,-107.30000305175781],[485.0899963378906,55.5099983215332,22.420000076293945]],"positionOffset":1700967,"positionCount":39168,"edgeOffset":1740135,"edgeCount":27420,"triangles":4352,"simplificationErrorM":0.15,"buildingId":"osm-15089986","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-15401943","name":"McCorkell House","osmId":15401943,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494583","center":[551.9450073242188,7.164999961853027,-359.5299987792969],"bounds":[[541.1799926757812,0,-373.8500061035156],[562.7100219726562,14.329999923706055,-345.2099914550781]],"positionOffset":1767555,"positionCount":18720,"edgeOffset":1786275,"edgeCount":11322,"triangles":2080,"simplificationErrorM":0.495,"buildingId":"campus:MZ","identitySource":"https://map.utoronto.ca/?id=1809#!m/494583","codes":["MZ"]},{"id":"osm-15401938","name":"Maritain House","osmId":15401938,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494587","center":[542.6600036621094,5.485000133514404,-384.9100036621094],"bounds":[[531.989990234375,0,-396.7200012207031],[553.3300170898438,10.970000267028809,-373.1000061035156]],"positionOffset":1797597,"positionCount":8658,"edgeOffset":1806255,"edgeCount":6126,"triangles":962,"simplificationErrorM":0.483,"buildingId":"osm-15401938","identitySource":"https://map.utoronto.ca/?id=1809#!m/494587","codes":[]},{"id":"osm-60303738","name":"Regis College","osmId":60303738,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055909","center":[553.8200073242188,6.800000190734863,-219.26000213623047],"bounds":[[503.8900146484375,0,-257.05999755859375],[603.75,13.600000381469727,-181.4600067138672]],"positionOffset":1812381,"positionCount":33093,"edgeOffset":1845474,"edgeCount":21912,"triangles":3677,"simplificationErrorM":0.493,"buildingId":"campus:RG","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055909","codes":["RG"]},{"id":"osm-32022566","name":"Campus context","osmId":32022566,"officialUrl":null,"center":[-543.6099853515625,12.399999618530273,-295.69000244140625],"bounds":[[-564.3599853515625,0,-307.55999755859375],[-522.8599853515625,24.799999237060547,-283.82000732421875]],"positionOffset":1867386,"positionCount":1890,"edgeOffset":1869276,"edgeCount":1224,"triangles":210,"simplificationErrorM":0,"buildingId":"osm-32022566","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"Multipatch_50H_NORTH-1252","name":"Graduate House","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494518","center":[-400.9199981689453,15.550000190734863,-133.55500030517578],"bounds":[[-431.6000061035156,0,-173.66000366210938],[-370.239990234375,31.100000381469727,-93.44999694824219]],"positionOffset":1870500,"positionCount":7101,"edgeOffset":1877601,"edgeCount":4074,"triangles":789,"simplificationErrorM":0,"buildingId":"campus:GD","identitySource":"https://map.utoronto.ca/?id=1809#!m/494518","codes":["GD"]},{"id":"osm-23434161","name":"Early Learning Centre (Glen Morris)","osmId":23434161,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494524","center":[-354.5749969482422,6.099999904632568,-173.89500427246094],"bounds":[[-372.55999755859375,0,-188.82000732421875],[-336.5899963378906,12.199999809265137,-158.97000122070312]],"positionOffset":1881675,"positionCount":3078,"edgeOffset":1884753,"edgeCount":2046,"triangles":342,"simplificationErrorM":0,"buildingId":"osm-23434161","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22199517","name":"The Wolland Centre for Jewish Campus Life (Hillel)","osmId":22199517,"officialUrl":null,"center":[-299.3249969482422,6.599999904632568,-135.37999725341797],"bounds":[[-316.42999267578125,0,-146.55999755859375],[-282.2200012207031,13.199999809265137,-124.19999694824219]],"positionOffset":1886799,"positionCount":8910,"edgeOffset":1895709,"edgeCount":3762,"triangles":990,"simplificationErrorM":0.477,"buildingId":"osm-22199517","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-8106022","name":"Warren Stevens Building","osmId":8106022,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/959693","center":[-323.01000213623047,10.350000381469727,-57.25],"bounds":[[-398.6600036621094,0,-114.25],[-247.36000061035156,20.700000762939453,-0.25]],"positionOffset":1899471,"positionCount":882,"edgeOffset":1900353,"edgeCount":606,"triangles":98,"simplificationErrorM":0,"buildingId":"osm-8106022","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["WS"]},{"id":"osm-10336058","name":"Wilson Hall","osmId":10336058,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055921","center":[-298.14500427246094,12.5,41.49500131607056],"bounds":[[-370.510009765625,0,-13.949999809265137],[-225.77999877929688,25,96.94000244140625]],"positionOffset":1900959,"positionCount":3402,"edgeOffset":1904361,"edgeCount":1872,"triangles":378,"simplificationErrorM":0,"buildingId":"campus:WI","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055921","codes":["WI"]},{"id":"osm-34116297","name":"Graduate Students Union","osmId":34116297,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494496","center":[-280.385009765625,5,170.65999603271484],"bounds":[[-291.70001220703125,0,152.77999877929688],[-269.07000732421875,10,188.5399932861328]],"positionOffset":1906233,"positionCount":234,"edgeOffset":1906467,"edgeCount":174,"triangles":26,"simplificationErrorM":0,"buildingId":"osm-34116297","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-8101762","name":"Daniels Building","osmId":8101762,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494471","center":[-310.2949981689453,18.850000381469727,301.5500030517578],"bounds":[[-347.7200012207031,0,263.2200012207031],[-272.8699951171875,37.70000076293945,339.8800048828125]],"positionOffset":1906641,"positionCount":7038,"edgeOffset":1913679,"edgeCount":4668,"triangles":782,"simplificationErrorM":0,"buildingId":"campus:DA","identitySource":"https://map.utoronto.ca/?id=1809#!m/494471","codes":["DA"]},{"id":"osm-1466900017","name":"Lash Miller Chemical Laboratories","osmId":1466900017,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494502","center":[-116.20499801635742,16.350000381469727,90.31500244140625],"bounds":[[-181.22999572753906,0,36],[-51.18000030517578,32.70000076293945,144.6300048828125]],"positionOffset":1918347,"positionCount":2349,"edgeOffset":1920696,"edgeCount":1320,"triangles":261,"simplificationErrorM":0,"buildingId":"campus:LM","identitySource":"https://map.utoronto.ca/?id=1809#!m/494502","codes":["LM"]},{"id":"Multipatch_50H_NORTH-1280","name":"Knox College","osmId":null,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055907","center":[12.38499927520752,12.5,96.50000381469727],"bounds":[[-27.760000228881836,0,47.540000915527344],[52.529998779296875,25,145.4600067138672]],"positionOffset":1922016,"positionCount":1854,"edgeOffset":1923870,"edgeCount":1350,"triangles":206,"simplificationErrorM":0,"buildingId":"campus:KX","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055907","codes":["KX"]},{"id":"osm-10336055","name":"Simcoe Hall","osmId":10336055,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494492","center":[50.67500185966492,21.850000381469727,172.3550033569336],"bounds":[[-3.309999942779541,0,134.22000122070312],[104.66000366210938,43.70000076293945,210.49000549316406]],"positionOffset":1925220,"positionCount":31212,"edgeOffset":1956432,"edgeCount":15408,"triangles":3468,"simplificationErrorM":0,"buildingId":"campus:SI","identitySource":"https://map.utoronto.ca/?id=1809#!m/494492","codes":["SI"]},{"id":"osm-1464898602","name":"Wallberg Building","osmId":1464898602,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494460","center":[118.44999694824219,12.550000190734863,287.2050018310547],"bounds":[[29.360000610351562,0,195.16000366210938],[207.5399932861328,25.100000381469727,379.25]],"positionOffset":1971840,"positionCount":7425,"edgeOffset":1979265,"edgeCount":5238,"triangles":825,"simplificationErrorM":0.497,"buildingId":"osm-1464898602","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["WB"]},{"id":"osm-12873543","name":"Lassonde Mining Building","osmId":12873543,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494466","center":[273.29500579833984,12.805000305175781,303.7900085449219],"bounds":[[228.6699981689453,0,278.3800048828125],[317.9200134277344,25.610000610351562,329.20001220703125]],"positionOffset":1984503,"positionCount":1098,"edgeOffset":1985601,"edgeCount":990,"triangles":122,"simplificationErrorM":0,"buildingId":"campus:MB","identitySource":"https://map.utoronto.ca/?id=1809#!m/494466","codes":["MB"]},{"id":"osm-23433584","name":"C. David Naylor Building","osmId":23433584,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494486","center":[396.6549987792969,8.5,208.63500213623047],"bounds":[[369.8800048828125,0,188.6300048828125],[423.42999267578125,17,228.63999938964844]],"positionOffset":1986591,"positionCount":7776,"edgeOffset":1994367,"edgeCount":6840,"triangles":864,"simplificationErrorM":0.277,"buildingId":"campus:NL","identitySource":"https://map.utoronto.ca/?id=1809#!m/494486","codes":["NL"]},{"id":"osm-12873582","name":"Leslie Dan Pharmacy Building","osmId":12873582,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494476","center":[412.30499267578125,30.799999237060547,254.22000122070312],"bounds":[[387.1499938964844,0,231.39999389648438],[437.4599914550781,61.599998474121094,277.0400085449219]],"positionOffset":2001207,"positionCount":23517,"edgeOffset":2024724,"edgeCount":10434,"triangles":2613,"simplificationErrorM":0.494,"buildingId":"campus:PB","identitySource":"https://map.utoronto.ca/?id=1809#!m/494476","codes":["PB"]},{"id":"osm-8027962","name":"Sir Daniel Wilson Residence","osmId":8027962,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055918","center":[-37.05500078201294,22.350000381469727,-44.93499946594238],"bounds":[[-86.1500015258789,0,-111.27999877929688],[12.039999961853027,44.70000076293945,21.40999984741211]],"positionOffset":2035158,"positionCount":79488,"edgeOffset":2114646,"edgeCount":60114,"triangles":8832,"simplificationErrorM":0.5,"buildingId":"campus:SD","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055918","codes":["SD"]},{"id":"osm-12874392","name":"Whitney Hall","osmId":12874392,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/1055920","center":[-81.47500038146973,6.800000190734863,-163.2750015258789],"bounds":[[-117.22000122070312,0,-205.5800018310547],[-45.72999954223633,13.600000381469727,-120.97000122070312]],"positionOffset":2174760,"positionCount":1278,"edgeOffset":2176038,"edgeCount":828,"triangles":142,"simplificationErrorM":0,"buildingId":"campus:WT","identitySource":"https://map.utoronto.ca/?id=1809#!m/1055920","codes":["WT"]},{"id":"osm-12873396","name":"Donnelly Centre for Cellular and Biomolecular Research","osmId":12873396,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494482","center":[305.5449981689453,32.79999923706055,231.66500854492188],"bounds":[[273.92999267578125,0,183.85000610351562],[337.1600036621094,65.5999984741211,279.4800109863281]],"positionOffset":2176866,"positionCount":19899,"edgeOffset":2196765,"edgeCount":11838,"triangles":2211,"simplificationErrorM":0.494,"buildingId":"osm-12873396","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-127479283","name":"Campus context","osmId":127479283,"officialUrl":null,"center":[-317.49000549316406,6.920000076293945,-223.3300018310547],"bounds":[[-327.7799987792969,0,-230.69000244140625],[-307.20001220703125,13.84000015258789,-215.97000122070312]],"positionOffset":2208603,"positionCount":702,"edgeOffset":2209305,"edgeCount":450,"triangles":78,"simplificationErrorM":0,"buildingId":"osm-127479283","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23436801","name":"Health Sciences Building","osmId":23436801,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494459","center":[332.34999084472656,16.274999618530273,352.5800018310547],"bounds":[[288.9599914550781,0,326.8999938964844],[375.739990234375,32.54999923706055,378.260009765625]],"positionOffset":2209755,"positionCount":180,"edgeOffset":2209935,"edgeCount":144,"triangles":20,"simplificationErrorM":0,"buildingId":"campus:HS","identitySource":"https://map.utoronto.ca/?id=1809#!m/494459","codes":["HS"]},{"id":"osm-23436808","name":"University of Toronto Communications House","osmId":23436808,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494458","center":[267.7100067138672,4.034999847412109,374.19000244140625],"bounds":[[255.47000122070312,0,353.239990234375],[279.95001220703125,8.069999694824219,395.1400146484375]],"positionOffset":2210079,"positionCount":198,"edgeOffset":2210277,"edgeCount":144,"triangles":22,"simplificationErrorM":0,"buildingId":"osm-23436808","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-70948818","name":"Stewart Building","osmId":70948818,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494462","center":[394.84999084472656,2.950000047683716,338.1549987792969],"bounds":[[378.7099914550781,0,313.7300109863281],[410.989990234375,5.900000095367432,362.5799865722656]],"positionOffset":2210421,"positionCount":1008,"edgeOffset":2211429,"edgeCount":606,"triangles":112,"simplificationErrorM":0,"buildingId":"campus:EP","identitySource":"https://map.utoronto.ca/?id=1809#!m/494462","codes":["EP"]},{"id":"osm-23436871","name":"Caretaking","osmId":23436871,"officialUrl":null,"center":[267.11000061035156,9.25,409.34999084472656],"bounds":[[245.55999755859375,0,394.79998779296875],[288.6600036621094,18.5,423.8999938964844]],"positionOffset":2212035,"positionCount":288,"edgeOffset":2212323,"edgeCount":210,"triangles":32,"simplificationErrorM":0,"buildingId":"osm-23436871","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23436965","name":"Old Admin Building","osmId":23436965,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494457","center":[350.8949890136719,14.199999809265137,383.3299865722656],"bounds":[[333.3599853515625,0,366.0799865722656],[368.42999267578125,28.399999618530273,400.5799865722656]],"positionOffset":2212533,"positionCount":900,"edgeOffset":2213433,"edgeCount":600,"triangles":100,"simplificationErrorM":0,"buildingId":"osm-23436965","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-23436928","name":"Central Exams Facility","osmId":23436928,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494453","center":[327.3699951171875,8.699999809265137,420.4550018310547],"bounds":[[300.6199951171875,0,383.7799987792969],[354.1199951171875,17.399999618530273,457.1300048828125]],"positionOffset":2214033,"positionCount":16920,"edgeOffset":2230953,"edgeCount":13908,"triangles":1880,"simplificationErrorM":0.461,"buildingId":"osm-23436928","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-62003382","name":"St. George","osmId":62003382,"officialUrl":null,"center":[-111.52000427246094,1.5299999713897705,-702.7449951171875],"bounds":[[-130.4600067138672,0,-713.4400024414062],[-92.58000183105469,3.059999942779541,-692.0499877929688]],"positionOffset":2244861,"positionCount":576,"edgeOffset":2245437,"edgeCount":366,"triangles":64,"simplificationErrorM":0,"buildingId":"osm-62003382","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-804686130","name":"Campus context","osmId":804686130,"officialUrl":null,"center":[-95.09499740600586,1.784999966621399,-698.6399841308594],"bounds":[[-100.0999984741211,0,-702.2999877929688],[-90.08999633789062,3.569999933242798,-694.97998046875]],"positionOffset":2245803,"positionCount":90,"edgeOffset":2245893,"edgeCount":72,"triangles":10,"simplificationErrorM":0,"buildingId":"osm-804686130","identitySource":"OpenStreetMap name / city context","codes":[]},{"id":"osm-22372218","name":"Factor-Inwentash Faculty of Social Work","osmId":22372218,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494564","center":[-90.75,15.949999809265137,-663.2999877929688],"bounds":[[-106.43000030517578,0,-685.1799926757812],[-75.06999969482422,31.899999618530273,-641.4199829101562]],"positionOffset":2245965,"positionCount":26496,"edgeOffset":2272461,"edgeCount":24024,"triangles":2944,"simplificationErrorM":0.465,"buildingId":"campus:SK","identitySource":"https://map.utoronto.ca/?id=1809#!m/494564","codes":["SK"]},{"id":"osm-10725629","name":"Ontario Institute for Studies in Education (University of Toronto)","osmId":10725629,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494563","center":[-166.1699981689453,26.700000762939453,-676.27001953125],"bounds":[[-207.67999267578125,0,-731.8400268554688],[-124.66000366210938,53.400001525878906,-620.7000122070312]],"positionOffset":2296485,"positionCount":42318,"edgeOffset":2338803,"edgeCount":20052,"triangles":4702,"simplificationErrorM":0.5,"buildingId":"osm-10725629","identitySource":"Published St. George timetable building dictionary; matched building name","codes":["OI"]},{"id":"osm-23201562","name":"Jackman Humanities Building","osmId":23201562,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494560","center":[-295.7149963378906,21.200000762939453,-596.5850219726562],"bounds":[[-318.2799987792969,0,-622.5900268554688],[-273.1499938964844,42.400001525878906,-570.5800170898438]],"positionOffset":2358855,"positionCount":35298,"edgeOffset":2394153,"edgeCount":27876,"triangles":3922,"simplificationErrorM":0.447,"buildingId":"campus:JH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494560","codes":["JH"]},{"id":"osm-330718925","name":"Convocation Hall","osmId":330718925,"officialUrl":"https://map.utoronto.ca/?id=1809#!m/494494","center":[108.5,9.399999618530273,170.55500030517578],"bounds":[[76.77999877929688,0,141.07000732421875],[140.22000122070312,18.799999237060547,200.0399932861328]],"positionOffset":2422029,"positionCount":8244,"edgeOffset":2430273,"edgeCount":3726,"triangles":916,"simplificationErrorM":0,"buildingId":"campus:CH","identitySource":"https://map.utoronto.ca/?id=1809#!m/494494","codes":["CH"]}]`),Tl={metadata:ag,buildings:lg},Cl=Math.PI/180,Al=6378137,rn=.0066943799901413165,Wo=rn/(1-rn),wl=.9996;function Tc({lat:i,lng:t}){const e=i*Cl,n=(t+81)*Cl,s=Math.sin(e),o=Math.cos(e),r=Math.tan(e),a=Al/Math.sqrt(1-rn*s*s),l=r*r,c=Wo*o*o,u=o*n,p=Al*((1-rn/4-3*rn**2/64-5*rn**3/256)*e-(3*rn/8+3*rn**2/32+45*rn**3/1024)*Math.sin(2*e)+(15*rn**2/256+45*rn**3/1024)*Math.sin(4*e)-35*rn**3/3072*Math.sin(6*e));return[5e5+wl*a*(u+(1-l+c)*u**3/6+(5-18*l+l*l+72*c-58*Wo)*u**5/120),wl*(p+a*r*(u*u/2+(5-l+9*c+4*c*c)*u**4/24+(61-58*l+l*l+600*c-330*Wo)*u**6/720))]}const Cc={lat:43.6623,lng:-79.3968},Rl=Tc(Cc);function Sn(i){const[t,e]=Tc(i);return{x:t-Rl[0],z:Rl[1]-e}}function Il({x:i,z:t}){let e={...Cc};for(let n=0;n<4;n++){const s=Sn(e),o=Sn({...e,lat:e.lat+1e-5}),r=Sn({...e,lng:e.lng+1e-5}),a=(o.x-s.x)/1e-5,l=(r.x-s.x)/1e-5,c=(o.z-s.z)/1e-5,u=(r.z-s.z)/1e-5,p=a*u-l*c;e.lat+=((i-s.x)*u-(t-s.z)*l)/p,e.lng+=((t-s.z)*a-(i-s.x)*c)/p}return e}function cg(i){return Object.entries(i||{}).flatMap(([t,e])=>{if(!e||typeof e.name!="string"||!Number.isFinite(e.lat)||!Number.isFinite(e.lng))return[];const n=Sn(e),s=Array.isArray(e.polygon)?e.polygon.filter(r=>Array.isArray(r)&&r.length>=2&&r.every(Number.isFinite)).map(([r,a])=>Sn({lat:r,lng:a})):[],o=s.length>=3?s:[n];return[{buildingId:`catalogue:${t}`,name:e.name,codes:[t],center:[n.x,0,n.z],bounds:[[Math.min(...o.map(r=>r.x)),0,Math.min(...o.map(r=>r.z))],[Math.max(...o.map(r=>r.x)),0,Math.max(...o.map(r=>r.z))]],footprint:s,parts:[],landmark:{short:e.short||e.name,priority:20},catalogueTarget:!0,complexNote:s.length>=3?"Building footprint and location from the published timetable.":"Building location from the published timetable."}]})}const Xo=new WeakMap;function ug(i,t={}){var rt;if(!(i instanceof HTMLElement))throw new TypeError("A map container is required");(rt=Xo.get(i))==null||rt.dispose(),i.classList.add("campus-map"),i.innerHTML=rg;const e=A=>i.querySelector("#"+A);if(t.embedded){const A=e("source-button");A.className="square-control map-info-control",A.textContent="↗",A.setAttribute("aria-label","Map information and sources"),A.setAttribute("aria-haspopup","dialog"),A.title="Map information and sources",e("labels-toggle").after(A);const z=i.querySelector(".view-controls");z.id="map-tools";const tt=document.createElement("button");tt.id="map-tools-toggle",tt.className="map-tools-toggle",tt.type="button",tt.innerHTML='<span aria-hidden="true">⋯</span><span>Map tools</span>',tt.setAttribute("aria-expanded","false"),tt.setAttribute("aria-controls","map-tools"),i.classList.remove("map-tools-open"),i.append(tt)}let n=t.location?{...t.location}:null,s=null,o=t.catalogue||{},r=[],a=[],l=null,c=null;const u=document.createElement("div");u.className="campus-destination-marker",u.hidden=!0,u.setAttribute("role","status"),i.append(u);const p=()=>i.clientWidth<=650,d=matchMedia("(prefers-reduced-motion: reduce)"),h=[{name:"Robarts Library",priority:0},{name:"University College",priority:1},{name:"Convocation Hall",priority:2},{name:"Sidney Smith Hall",priority:3},{name:"Bahen Centre for Information Technology",short:"Bahen Centre",priority:4},{name:"Royal Ontario Museum",priority:5},{name:"Ontario Legislative Building",short:"Ontario Legislature",priority:6},{name:"Trinity College",priority:7},{name:"Victoria College",priority:8},{name:"Rotman School of Management",short:"Rotman",priority:9},{name:"Medical Sciences Building",short:"Medical Sciences",priority:10},{name:"Lash Miller Chemical Laboratories",short:"Lash Miller",priority:11},{name:"McLennan Physical Laboratories",short:"McLennan Labs",priority:12},{name:"Hart House",priority:5.5},{name:"Gerstein / Canadiana complex",short:"Gerstein / Canadiana",priority:13},{name:"Knox College",priority:14}];let g,M,m,f,T,w,S=null,E=null,y=null,I=!1,v=!1,C=0,U=t.initialLabels!==!1,N=!1,B=null,W=!1,D=!1,k=!1,Y="loading",q,at,K,it=0;const ot=[],Ct=new Set,Lt=new AbortController;function re(A,z,tt){A.addEventListener(z,tt,{signal:Lt.signal})}function Bt(A,z,tt){A.addEventListener(z,tt),ot.push(()=>A.removeEventListener(z,tt))}if(e("labels-toggle").classList.toggle("active",U),e("labels-toggle").setAttribute("aria-pressed",String(U)),t.embedded){const A=e("map-tools-toggle"),z=tt=>{i.classList.toggle("map-tools-open",tt),A.setAttribute("aria-expanded",String(tt))};re(A,"click",()=>z(A.getAttribute("aria-expanded")!=="true")),re(e("scene"),"pointerdown",()=>z(!1)),re(i,"keydown",tt=>{tt.key==="Escape"&&!i.querySelector("dialog[open]")&&A.getAttribute("aria-expanded")==="true"&&(z(!1),A.focus({preventScroll:!0}))})}function ie(A){return A?{id:A.buildingId,name:A.name==="Campus context"?"Unnamed building":A.name,codes:[...A.codes||[]],officialUrl:A.officialUrl||null,officialEntries:(A.officialEntries||[]).map(z=>({...z})),note:A.complexNote||null,center:[...A.center]}:null}function J(){var z;const A=ie(S);i.dispatchEvent(new CustomEvent("campus:select",{detail:A,bubbles:!0})),(z=t.onSelect)==null||z.call(t,A)}const Q=[],Et=[],Ft=[],yt=new Xd,Yt=new bt,ye=Sn({lat:43.66174,lng:-79.39518}),qt=t.embedded?new R(ye.x,0,ye.z):new R(20,0,-185),ee=t.mobileFraming?new R(1180,620,550):t.embedded?new R(1280,720,200):new R(440,920,1020),le=t.mobileFraming?2.6:t.embedded?2.4:1.35,Vt={white:new Qt("#fcfdff"),side:new Qt("#bdd1eb"),edge:new Qt("#6487b1"),landmarkEdge:new Qt("#164f97"),selected:new Qt("#c4ddff"),selectedEdge:new Qt("#0758cc"),paper:new Qt("white")};function jt(){g&&Y==="ready"&&!k&&!I&&!v&&!document.hidden&&(I=!0,at=requestAnimationFrame(Ae))}function Ae(A){if(I=!1,k||Y!=="ready"||document.hidden)return;v=!0;let z=!1;if(y){const Ut=d.matches?1:Math.min(1,(A-y.start)/700),Zt=Ut<.5?4*Ut**3:1-(-2*Ut+2)**3/2;f.target.lerpVectors(y.fromTarget,y.toTarget,Zt),m.position.lerpVectors(y.fromPosition,y.toPosition,Zt),m.zoom=Pr.lerp(y.fromZoom,y.toZoom,Zt),m.updateProjectionMatrix(),f.update(),Ut===1&&(y=null,f.enableDamping=!d.matches)}y||(z=f.update()),g.render(M,m),C++,b(),It(),dt();const tt=new R(0,0,-100).applyQuaternion(m.quaternion.clone().invert());e("compass-arrow").style.transform=`rotate(${Math.atan2(tt.x,tt.y)*180/Math.PI}deg)`;const st=e("scene").clientWidth/((m.right-m.left)/m.zoom),lt=p()?38:65,ct=[10,20,50,100,200,500].reduce((Ut,Zt)=>Math.abs(Zt*st-lt)<Math.abs(Ut*st-lt)?Zt:Ut,100);e("scale-text").textContent=`${ct} m`,e("scale-line").style.width=`${ct*st}px`,v=!1,(y||z&&f.enableDamping)&&jt()}function be(A,z,tt=m.position.clone().sub(f.target)){f.enableDamping=!1,y={start:performance.now(),fromTarget:f.target.clone(),toTarget:A.clone(),fromPosition:m.position.clone(),toPosition:A.clone().add(tt),fromZoom:m.zoom,toZoom:z},jt()}function xe(A){Y==="ready"&&(N=A,f.enableRotate=!A,be(f.target,m.zoom,A?new R(0,1400,.1):ee))}function ge(){if(Y!=="ready")return;const A=!!S;S=null,ut(null),E=null,e("selection").hidden=!0,i.classList.remove("has-selection"),e("building-picker").value="",_(),A&&J()}function L(){Y==="ready"&&(ge(),N=!1,f.enableRotate=!0,_(),be(qt,le,ee))}function Ee(A,z){var Zt,ft,Ot;if(!A||Y!=="ready")return;S=A;const tt=r.find(Ht=>{var Gt;return z?Ht.codes.includes(z):(Gt=A.codes)==null?void 0:Gt.some(et=>Ht.codes.includes(et))});ut(tt),i.classList.add("has-selection"),e("selection").hidden=!1,e("selection-name").textContent=A.name==="Campus context"?"Unnamed building":A.name,e("selection-code").textContent=((Zt=A.codes)==null?void 0:Zt.join(" / "))||"BUILDING",e("selection-note").textContent=A.complexNote||"City of Toronto · 2025 building model";const st=((ft=A.officialEntries)==null?void 0:ft.find(Ht=>Ht.code===z))||((Ot=A.officialEntries)==null?void 0:Ot[0]),lt=(st==null?void 0:st.url)||A.officialUrl;e("official-link").textContent=st?`View ${st.name} on UofT map ↗`:"View on UofT map ↗",e("official-link").hidden=!lt,lt&&(e("official-link").href=lt),_();const ct=(tt==null?void 0:tt.center)||A.center,Ut=new R(ct[0],0,ct[2]);p()&&(Ut.z+=100),be(Ut,p()?2.6:2.9,N?new R(0,1400,.1):new R(390,800,900)),e("building-picker").value=A.buildingId,t.embedded||e("close-selection").focus({preventScroll:!0}),J()}function ae(A){var lt;const z=document.createElement("button");z.className="map-label";const tt=document.createElement("span");tt.className="label-code",tt.textContent=((lt=A.codes)==null?void 0:lt[0])||"",tt.hidden=!tt.textContent;const st=document.createElement("span");st.textContent=A.landmark.short||A.name,z.append(tt,st),z.setAttribute("aria-label",`Explore ${A.name}`),z.onclick=()=>Ee(A),e("labels").append(z),Ft.push({button:z,b:A})}function b(){var lt;const A=i.clientWidth,z=e("scene").clientHeight,tt=[],st=[...Ft].sort((ct,Ut)=>(Ut.b===S)-(ct.b===S)||ct.b.landmark.priority-Ut.b.landmark.priority);for(const{button:ct,b:Ut}of st){if(l&&((lt=Ut.codes)!=null&&lt.includes(l.codes[0]))){ct.hidden=!0;continue}const Zt=new R(Ut.center[0],Ut.bounds[1][1]+26,Ut.center[2]).project(m),ft=(Zt.x*.5+.5)*A,Ot=(-Zt.y*.5+.5)*z,Ht=ct.offsetWidth||130,Gt=ct.offsetHeight||29,et={x:ft-Ht/2,y:Ot-Gt,w:Ht,h:Gt+20},kt=tt.some(De=>et.x<De.x+De.w+12&&et.x+et.w+12>De.x&&et.y<De.y+De.h+8&&et.y+et.h+8>De.y),fe=!t.embedded&&S&&(p()?Ot>z-360:ft<350&&Ot>z-390),Fe=m.zoom<1.6&&Ut.landmark.priority>(p()?4:8),he=!t.embedded&&ft>A-(p()?190:270)&&Ot<210,we=!U||he||kt||fe||Fe||Zt.z>1||ft<Ht/2+18||ft>A-Ht/2-18||Ot<(t.embedded?t.labelTop??170:160)||Ot>z-(t.embedded?t.labelBottom??120:180);ct.style.left=`${ft}px`,ct.style.top=`${Ot}px`,ct.classList.toggle("label-hidden",we),ct.classList.toggle("selected",Ut===S),ct.tabIndex=we?-1:0,we||tt.push(et)}}function _(A=Q){if(!T)return;const z=T.geometry.attributes.color,tt=T.geometry.attributes.normal,st=w.geometry.attributes.color,lt=new Qt;for(const ct of A){const Ut=ct===S||ct===E,Zt=Ut?Vt.selectedEdge:ct.landmark?Vt.landmarkEdge:Vt.edge;for(const ft of ct.parts){for(let Ot=ft.surfaceStart;Ot<ft.surfaceStart+ft.surfaceCount;Ot++){const Ht=Math.abs(tt.getY(Ot)),Gt=Math.max(0,Math.min(.7,(1-Ht)*.48+Math.abs(tt.getX(Ot))*.12));lt.copy(Vt.white).lerp(Ut?Vt.selected:Vt.side,Ut?.55+Gt:Gt),S&&!Ut&&lt.lerp(Vt.paper,.25),z.setXYZ(Ot,lt.r,lt.g,lt.b)}lt.copy(Zt),S&&!Ut&&lt.lerp(Vt.paper,.42);for(let Ot=ft.edgeStart;Ot<ft.edgeStart+ft.edgeCount;Ot++)st.setXYZ(Ot,lt.r,lt.g,lt.b)}}z.needsUpdate=!0,st.needsUpdate=!0,jt()}function F(A,z){const tt=[],st=[],lt=new Map;let ct=0,Ut=0;const Zt=new Xn({side:Qe});for(const ft of A.buildings){for(const[he,we,De]of[[ft.positionOffset,ft.positionCount,9],[ft.edgeOffset,ft.edgeCount,6]])if(!Number.isInteger(he)||!Number.isInteger(we)||he<0||we<0||we%De||he+we>z.length)throw new Error("Invalid campus geometry buffer");const Ot=ft.buildingId||ft.id;let Ht=lt.get(Ot);if(!Ht)Ht={...ft,buildingId:Ot,center:[...ft.center],bounds:ft.bounds.map(he=>[...he]),landmark:h.find(he=>he.name===ft.name),parts:[]},lt.set(Ot,Ht),Q.push(Ht);else for(let he=0;he<3;he++)Ht.bounds[0][he]=Math.min(Ht.bounds[0][he],ft.bounds[0][he]),Ht.bounds[1][he]=Math.max(Ht.bounds[1][he],ft.bounds[1][he]),Ht.center[he]=(Ht.bounds[0][he]+Ht.bounds[1][he])/2;const Gt={surfaceStart:ct,surfaceCount:ft.positionCount/3,edgeStart:Ut,edgeCount:ft.edgeCount/3};Ht.parts.push(Gt),ct+=Gt.surfaceCount,Ut+=Gt.edgeCount;const et=new Pe;et.setAttribute("position",new je(z.subarray(ft.positionOffset,ft.positionOffset+ft.positionCount),3)),et.computeVertexNormals(),et.setAttribute("color",new je(new Float32Array(ft.positionCount),3));const kt=new Pe;kt.setAttribute("position",new je(z.subarray(ft.edgeOffset,ft.edgeOffset+ft.edgeCount),3)),kt.setAttribute("color",new je(new Float32Array(ft.edgeCount),3)),tt.push(et),st.push(kt);const fe=new Pe;fe.setAttribute("position",et.attributes.position),fe.computeBoundingBox(),fe.computeBoundingSphere();const Fe=new Ze(fe,Zt);Fe.userData.building=Ht,Fe.updateMatrixWorld(),Et.push(Fe)}T=new Ze(ks(tt),new Xn({vertexColors:!0,side:Qe,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})),M.add(T),w=new Da(ks(st),new Zs({vertexColors:!0,transparent:!0,opacity:.8})),M.add(w),[...tt,...st].forEach(ft=>ft.dispose());for(const ft of Q)ft.landmark&&ae(ft);V(),e("model-count").textContent="ST. GEORGE · 2025 BUILDING MODEL",_()}function V(){var z;const A=e("building-picker");A.replaceChildren(new Option("Go to a building…",""));for(const tt of[...Q,...a].filter(st=>st.name!=="Campus context").sort((st,lt)=>st.name.localeCompare(lt.name)))A.add(new Option(`${(z=tt.codes)!=null&&z.length?tt.codes.join(" / ")+" · ":""}${tt.name}`,tt.buildingId));A.value=(S==null?void 0:S.buildingId)||""}function Z(A){var tt;if(o=A||{},!M||!T)return;const z=(l==null?void 0:l.codes[0])||((tt=S==null?void 0:S.codes)==null?void 0:tt[0]);for(let st=Ft.length-1;st>=0;st--)Ft[st].b.catalogueTarget&&(Ft[st].button.remove(),Ft.splice(st,1));r=cg(o),a=r.filter(st=>!Q.some(lt=>{var ct;return(ct=lt.codes)==null?void 0:ct.includes(st.codes[0])}));for(const st of a)ae(st);S!=null&&S.catalogueTarget&&(S=a.find(st=>st.codes.includes(z))||null),V(),ut(r.find(st=>st.codes.includes(z))||null),jt()}function ut(A){if(l=A||null,c&&(M==null||M.remove(c),c.geometry.dispose(),c.material.dispose(),c=null),u.hidden=!A,!!A){if(u.textContent=`${A.codes[0]} · ${A.name}`,M&&A.footprint.length>=3){const z=A.footprint.map(tt=>new R(tt.x,1.5,tt.z));c=new td(new Pe().setFromPoints(z),new Zs({color:"#0758cc",depthTest:!1})),c.renderOrder=10,M.add(c)}dt()}}function dt(){if(!m||!l)return;const A=new R(...l.center).project(m),z=e("scene").getBoundingClientRect(),tt=(A.x*.5+.5)*z.width,st=(-A.y*.5+.5)*z.height;u.style.left=`${tt}px`,u.style.top=`${st}px`,u.hidden=A.z<-1||A.z>1||tt<0||tt>z.width||st<0||st>z.height}function $(A){const z=new Ze(new Ui(1800,1800),new Xn({color:"#ffffff"}));z.rotation.x=-Math.PI/2,z.position.set(0,-.3,-150),M.add(z);const tt=[];for(let ft=-620;ft<700;ft+=20)for(let Ot=-830;Ot<500;Ot+=20)tt.push(ft,-.15,Ot);const st=new Pe;st.setAttribute("position",new ze(tt,3)),M.add(new ed(st,new nc({color:"#87a9d2",size:1,sizeAttenuation:!1,transparent:!0,opacity:.14})));const lt=[];for(const ft of A.roads){const Ot=ft.tags.highway,Ht=parseFloat(ft.tags.width)||(["primary","secondary","tertiary"].includes(Ot)?8:["residential","unclassified","service"].includes(Ot)?4:1.15);for(let Gt=1;Gt<ft.geometry.length;Gt++){const et=ft.geometry[Gt-1],kt=ft.geometry[Gt];if([et,kt].some(Qn=>Qn.x<-590||Qn.x>660||Qn.z<-790||Qn.z>480))continue;const fe=kt.x-et.x,Fe=kt.z-et.z,he=Math.hypot(fe,Fe);if(he<.1)continue;const we=-Fe/he*Ht/2,De=fe/he*Ht/2,$n=new Pe;$n.setAttribute("position",new ze([et.x+we,-.05,et.z+De,et.x-we,-.05,et.z-De,kt.x+we,-.05,kt.z+De,et.x-we,-.05,et.z-De,kt.x-we,-.05,kt.z-De,kt.x+we,-.05,kt.z+De],3)),lt.push($n)}}lt.length&&(M.add(new Ze(ks(lt),new Xn({color:"#d8e5f5",side:Qe}))),lt.forEach(ft=>ft.dispose()));const ct=[],Ut=[];for(const ft of A.green){const Ot=ft.geometry;if(Ot.length<4||Ot.some(et=>et.x<-590||et.x>660||et.z<-790||et.z>480))continue;const Ht=new cc(Ot.map(et=>new bt(et.x,-et.z))),Gt=new $r(Ht);Gt.rotateX(-Math.PI/2),Gt.translate(0,-.1,0),ct.push(Gt);for(let et=1;et<Ot.length;et++)Ut.push(Ot[et-1].x,0,Ot[et-1].z,Ot[et].x,0,Ot[et].z)}ct.length&&(M.add(new Ze(ks(ct),new Xn({color:"#f0f5fc",side:Qe}))),ct.forEach(ft=>ft.dispose()));const Zt=[];for(const ft of A.trees)if(!(ft.x<-590||ft.x>660||ft.z<-790||ft.z>480))for(let Ot=0;Ot<10;Ot++){const Ht=Ot/10*Math.PI*2,Gt=(Ot+1)/10*Math.PI*2;Zt.push(ft.x+Math.cos(Ht)*2.8,.2,ft.z+Math.sin(Ht)*2.8,ft.x+Math.cos(Gt)*2.8,.2,ft.z+Math.sin(Gt)*2.8)}for(const[ft,Ot,Ht]of[[Ut,"#9fbce0",.48],[Zt,"#7ea3d2",.55]]){const Gt=new Pe;Gt.setAttribute("position",new ze(ft,3)),M.add(new Da(Gt,new Zs({color:Ot,transparent:!0,opacity:Ht})))}for(const[ft,Ot]of[["St George Street","ST. GEORGE ST."],["College Street","COLLEGE ST."],["Hoskin Avenue","HOSKIN AVE."]]){const Ht=[];for(const Gt of A.roads.filter(et=>{var kt;return((kt=et.tags.name)==null?void 0:kt.replace("St. ","St "))===ft}))for(let et=1;et<Gt.geometry.length;et++){const kt=Gt.geometry[et-1],fe=Gt.geometry[et],Fe=Math.hypot(fe.x-kt.x,fe.z-kt.z);Fe>55&&Math.abs((kt.x+fe.x)/2)<350&&Math.abs((kt.z+fe.z)/2+180)<600&&Ht.push({a:kt,b:fe,length:Fe})}if(Ht.sort((Gt,et)=>et.length-Gt.length),Ht.length){const{a:Gt,b:et}=Ht[0];nt(Ot,(Gt.x+et.x)/2,(Gt.z+et.z)/2,-Math.atan2(et.z-Gt.z,et.x-Gt.x))}}}function nt(A,z,tt,st){const lt=document.createElement("canvas");lt.width=512,lt.height=64;const ct=lt.getContext("2d");ct.fillStyle="#6a8db8",ct.font="24px Arial",ct.textAlign="center",ct.textBaseline="middle",ct.fillText(A,256,32);const Ut=new nd(lt);Ut.colorSpace=$e;const Zt=new Ze(new Ui(112,14),new Xn({map:Ut,transparent:!0,depthWrite:!1,side:Qe}));Zt.rotation.set(-Math.PI/2,0,st),Zt.position.set(z,.25,tt),M.add(Zt)}function ht(){if(!g||k)return;const A=e("scene").clientWidth,z=e("scene").clientHeight;if(!A||!z)return;const tt=p()?Math.max(1400,1160*z/A):1490;m.left=-tt*A/z/2,m.right=tt*A/z/2,m.top=tt/2,m.bottom=-tt/2,m.updateProjectionMatrix(),g.setPixelRatio(Math.min(devicePixelRatio,p()?1.5:1.75)),g.setSize(A,z),jt()}function It(){if(!s||!n||!m)return;const A=Sn(n),z=new R(A.x,1,A.z).project(m),tt=e("scene").getBoundingClientRect(),st=(z.x*.5+.5)*tt.width,lt=(-z.y*.5+.5)*tt.height;s.style.left=`${st}px`,s.style.top=`${lt}px`,s.hidden=z.z<-1||z.z>1||st<0||st>tt.width||lt<0||lt>tt.height}function _t(A){var ct;const[z,tt,st,lt]=Tl.metadata.bbox;n={lat:Math.max(tt,Math.min(lt,A.lat)),lng:Math.max(z,Math.min(st,A.lng))},It(),jt(),(ct=t.onLocationChange)==null||ct.call(t,{...n})}function gt(){if(!n)return;s=document.createElement("button"),s.className="campus-location-pin",s.setAttribute("aria-label","Walking start pin. Drag to move, or use arrow keys."),s.title="Walking start · drag to move",s.innerHTML='<span aria-hidden="true">●</span>',e("scene").append(s);let A=null;const z=new xn(new R(0,1,0),0),tt=lt=>{const ct=g.domElement.getBoundingClientRect();return Yt.set((lt.clientX-ct.left)/ct.width*2-1,-((lt.clientY-ct.top)/ct.height)*2+1),yt.setFromCamera(Yt,m),yt.ray.intersectPlane(z,new R)};Bt(s,"pointerdown",lt=>{if(lt.button!==0||A)return;const ct=tt(lt);if(!ct)return;lt.preventDefault(),lt.stopPropagation(),y=null,f.enabled=!1;const Ut=Sn(n);A={id:lt.pointerId,x:Ut.x-ct.x,z:Ut.z-ct.z},s.setPointerCapture(lt.pointerId),s.focus({preventScroll:!0})}),Bt(s,"pointermove",lt=>{if(!A||A.id!==lt.pointerId)return;const ct=tt(lt);ct&&_t(Il({x:ct.x+A.x,z:ct.z+A.z}))});const st=lt=>{(A==null?void 0:A.id)===lt.pointerId&&(A=null,f.enabled=!0,jt())};for(const lt of["pointerup","pointercancel","lostpointercapture"])Bt(s,lt,st);Bt(s,"keydown",lt=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(lt.key))return;lt.preventDefault(),lt.stopPropagation();const ct=Sn(n),Ut=lt.shiftKey?50:10;ct.x+=lt.key==="ArrowLeft"?-Ut:lt.key==="ArrowRight"?Ut:0,ct.z+=lt.key==="ArrowUp"?-Ut:lt.key==="ArrowDown"?Ut:0,_t(Il(ct))}),ot.push(()=>{s==null||s.remove(),s=null})}function Pt(A,z){var st;const tt=g.domElement.getBoundingClientRect();return Yt.set((A-tt.left)/tt.width*2-1,-(z-tt.top)/tt.height*2+1),yt.setFromCamera(Yt,m),((st=yt.intersectObjects(Et,!1)[0])==null?void 0:st.object.userData.building)||null}function Nt(A,z,tt){g=new Xm({antialias:!0,powerPreference:"low-power"}),g.setClearColor("#ffffff"),g.outputColorSpace=$e,e("scene").append(g.domElement),g.domElement.tabIndex=0,g.domElement.setAttribute("aria-label","St. George campus model. Drag to rotate. When a building is selected, drag a little to look around it or swipe farther to return to campus. Use two fingers to turn or tilt, pinch or scroll to zoom. Arrow keys rotate, plus and minus zoom, Home resets. Choose a building from the selector or labels."),M=new Wu,m=new Qr(-900,900,745,-745,1,4500),m.zoom=le,f=new qm(m,g.domElement),f.mouseButtons.LEFT=Zn.ROTATE,f.mouseButtons.RIGHT=Zn.ROTATE,f.touches.ONE=qn.ROTATE,f.touches.TWO=qn.DOLLY_ROTATE,f.target.copy(qt),m.position.copy(qt).add(ee),f.enableDamping=!d.matches,f.dampingFactor=.14,f.rotateSpeed=.42,f.minPolarAngle=5e-5,f.maxPolarAngle=Math.PI/2.5,f.minZoom=.7,f.maxZoom=7,f.zoomToCursor=!1,f.screenSpacePanning=!1,f.enablePan=!1,f.maxTargetRadius=1300,f.cursor.copy(qt),f.update(),f.addEventListener("change",jt),f.addEventListener("start",()=>{y=null,f.enableDamping=!d.matches}),$(tt),F(A,z),Z(o),ht(),gt();const st=g.domElement;let lt=null,ct=null,Ut=!1;const Zt=new Map,ft=()=>{if(Zt.size!==2)return null;const[et,kt]=[...Zt.values()];return Math.atan2(kt.y-et.y,kt.x-et.x)},Ot=()=>{Ct.size||(ct=null,Ut&&(Ut=!1,be(qt,le,m.position.clone().sub(f.target))))};Bt(st,"pointerdown",et=>{lt=null,Ct.add(et.pointerId),et.pointerType==="touch"&&Zt.set(et.pointerId,{x:et.clientX,y:et.clientY}),Ct.size===1?(B={id:et.pointerId,x:et.clientX,y:et.clientY},W=!1,ct=S?{...B}:null,Ut=!1):(W=!0,ct=null)}),Bt(st,"pointermove",et=>{if(Zt.has(et.pointerId)){const kt=ft();Zt.set(et.pointerId,{x:et.clientX,y:et.clientY});const fe=ft();if(kt!==null&&fe!==null&&f.enableRotate){const Fe=Math.atan2(Math.sin(fe-kt),Math.cos(fe-kt));Math.abs(Fe)>.001&&f.rotateLeft(-Fe)}}Ct.has(et.pointerId)&&B&&Math.hypot(et.clientX-B.x,et.clientY-B.y)>6&&(W=!0),S&&(ct==null?void 0:ct.id)===et.pointerId&&Math.hypot(et.clientX-ct.x,et.clientY-ct.y)>Math.max(70,Math.min(110,st.clientWidth*.2))&&(ge(),ct=null,Ut=!0),!(et.pointerType!=="mouse"||et.buttons||D||y||Ct.size)&&(D=!0,K=requestAnimationFrame(()=>{if(D=!1,k||Y!=="ready"||Ct.size)return;const kt=Pt(et.clientX,et.clientY);if(kt!==E){const fe=E;E=kt,_([fe,kt].filter(Boolean)),st.style.cursor=kt?"pointer":"grab"}}))}),Bt(st,"pointerleave",()=>{const et=E;E=null,st.style.cursor="grab",et&&_([et])}),Bt(st,"pointerup",et=>{const kt=Ct.size===1&&(B==null?void 0:B.id)===et.pointerId&&!W&&et.button===0;if(Ct.delete(et.pointerId),Zt.delete(et.pointerId),kt){const fe=Pt(et.clientX,et.clientY);et.pointerType==="touch"?lt={building:fe}:Ee(fe)}Ct.size||(B=null),Ot()}),Bt(st,"click",()=>{if(!lt)return;const{building:et}=lt;lt=null,Ee(et)});const Ht=et=>{et.type==="pointercancel"&&(lt=null),Ct.delete(et.pointerId),Zt.delete(et.pointerId),W=!0,Ct.size||(B=null),Ot()};Bt(st,"pointercancel",Ht),Bt(st,"lostpointercapture",Ht),Bt(st,"webglcontextlost",et=>{et.preventDefault(),Y="error",cancelAnimationFrame(at),I=!1,Wt("The graphics connection was interrupted. Retry to reopen the map.")}),Bt(st,"keydown",et=>{Y==="ready"&&(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(et.key)?(et.preventDefault(),y=null,et.key==="ArrowLeft"||et.key==="ArrowRight"?f.rotateLeft(et.key==="ArrowLeft"?.15:-.15):f.rotateUp(et.key==="ArrowUp"?.1:-.1)):et.key==="+"||et.key==="="?(et.preventDefault(),P(1.4)):et.key==="-"?(et.preventDefault(),P(1/1.4)):et.key==="Home"&&(et.preventDefault(),L()))});const Gt=new ResizeObserver(ht);Gt.observe(i),ot.push(()=>Gt.disconnect()),Bt(document,"visibilitychange",()=>{document.hidden||jt()}),Bt(d,"change",()=>{f.enableDamping=!d.matches,jt()})}function Wt(A="Check your connection and WebGL support, then try again."){e("fallback").hidden=!1,e("fallback-message").textContent=A,e("scene").hidden=!0,e("labels").hidden=!0,i.querySelector(".view-controls").hidden=!0,e("building-picker").disabled=!0,e("selection").hidden=!0,i.classList.remove("has-selection"),e("model-count").textContent="CAMPUS MODEL UNAVAILABLE"}function P(A){Y==="ready"&&be(f.target,Pr.clamp(m.zoom*A,.7,7))}e("source-button").onclick=()=>e("sources").showModal(),e("close-sources").onclick=()=>e("sources").close(),re(e("sources"),"click",A=>{if(A.target===e("sources")){const z=e("sources").getBoundingClientRect();(A.clientX<z.left||A.clientX>z.right||A.clientY<z.top||A.clientY>z.bottom)&&e("sources").close()}}),e("reset-view").onclick=L,e("face-north").onclick=()=>{if(Y!=="ready")return;const A=m.position.clone().sub(f.target);be(f.target,m.zoom,new R(0,A.y,Math.hypot(A.x,A.z)))},e("zoom-in").onclick=()=>P(1.4),e("zoom-out").onclick=()=>P(1/1.4),e("labels-toggle").onclick=()=>{U=!U,e("labels-toggle").classList.toggle("active",U),e("labels-toggle").setAttribute("aria-pressed",U),jt()},e("building-picker").onchange=A=>{A.target.value?Ee([...Q,...a].find(z=>z.buildingId===A.target.value)):ge()};function pt(){ge(),g==null||g.domElement.focus({preventScroll:!0})}e("close-selection").onclick=pt,re(i,"keydown",A=>{A.key==="Escape"&&S&&!e("sources").open&&(A.preventDefault(),pt())}),e("retry-map").onclick=()=>{xt.ready=mt()};function j(){var lt;cancelAnimationFrame(at),cancelAnimationFrame(K),I=!1,v=!1,D=!1,ot.splice(0).forEach(ct=>ct()),f==null||f.dispose();const A=new Set,z=new Set,tt=new Set,st=ct=>{ct.geometry&&A.add(ct.geometry);for(const Ut of[ct.material].flat().filter(Boolean)){z.add(Ut);for(const Zt of Object.values(Ut))Zt!=null&&Zt.isTexture&&tt.add(Zt)}};ut(null),r=[],a=[],M==null||M.traverse(st),Et.forEach(st),A.forEach(ct=>ct.dispose()),z.forEach(ct=>ct.dispose()),tt.forEach(ct=>ct.dispose()),g==null||g.dispose(),g==null||g.forceContextLoss(),g==null||g.domElement.remove(),g=M=m=f=T=w=S=E=y=null,Q.length=Et.length=Ft.length=0,Ct.clear(),B=null,N=!1,(lt=e("labels"))==null||lt.replaceChildren()}async function mt(){var st;if(k)return!1;const A=++it;q==null||q.abort(),j(),Y="loading",q=new AbortController;const z=q,tt=setTimeout(()=>z.abort(),3e4);e("loading").classList.remove("done"),e("fallback").hidden=!0,e("scene").hidden=!1,e("labels").hidden=!1,i.querySelector(".view-controls").hidden=!1,e("building-picker").disabled=!0,e("selection").hidden=!0,i.classList.remove("has-selection");try{const lt=new URL(t.assetBase||"./data/",document.baseURI),ct="DecompressionStream"in window,Ut=await Promise.all([ct?"campus.bin.gz":"campus.bin","ground.json"].map(et=>fetch(new URL(et,lt),{signal:z.signal})));if(Ut.some(et=>!et.ok))throw new Error("Campus asset request failed");const ft=ct&&!((st=Ut[0].headers.get("content-encoding"))!=null&&st.includes("gzip"))?new Response(Ut[0].body.pipeThrough(new DecompressionStream("gzip"))):Ut[0],[Ot,Ht,Gt]=await Promise.all([Promise.resolve(Tl),ft.arrayBuffer(),Ut[1].json()]);if(k||A!==it)return!1;if(!Array.isArray(Ot.buildings)||!Ot.buildings.length||Ht.byteLength%4)throw new Error("Invalid campus data");return Nt(Ot,new Float32Array(Ht),Gt),Y="ready",e("building-picker").disabled=!1,jt(),document.fonts.ready.then(()=>{!k&&A===it&&jt()}),!0}catch(lt){return k||A!==it||(z.abort(),j(),Y="error",console.warn("Campus map:",lt),Wt()),!1}finally{clearTimeout(tt),!k&&A===it&&e("loading").classList.add("done")}}const xt={ready:null,get status(){return Y},get stats(){return{buildings:Q.length,geometryGroups:Et.length,triangles:(g==null?void 0:g.info.render.triangles)||0,drawCalls:(g==null?void 0:g.info.render.calls)||0,renderCount:C,isIdle:Y==="ready"&&!y&&!I&&!v,pixelRatio:(g==null?void 0:g.getPixelRatio())||0,selected:(S==null?void 0:S.name)||null,planView:N}},getBuildings(){return[...Q,...a].map(ie)},selectBuilding(A){if(Y!=="ready")return!1;const z=[...Q,...a].find(tt=>{var st;return tt.buildingId===A||((st=tt.codes)==null?void 0:st.includes(A))});return z?(Ee(z,A),!0):!1},clearSelection:ge,reset:L,setView(A){if(!["plan","3d"].includes(A))throw new TypeError("View must be plan or 3d");xe(A==="plan")},setCatalogue:Z,setLocation(A){return!A||!Number.isFinite(A.lat)||!Number.isFinite(A.lng)?!1:(n={...A},It(),jt(),!0)},focusLocation(){if(Y!=="ready"||!n)return;const A=Sn(n);be(new R(A.x,0,A.z),Math.max(1.4,m.zoom)),s==null||s.focus({preventScroll:!0})},project(A){if(Y!=="ready")return null;const z=[...Q,...a].find(lt=>{var ct;return lt.buildingId===A||lt.name===A||((ct=lt.codes)==null?void 0:ct.includes(A))});if(!z)return null;const tt=new R(...z.center).project(m),st=e("scene").getBoundingClientRect();return{x:st.left+(tt.x*.5+.5)*st.width,y:st.top+(-tt.y*.5+.5)*st.height}},dispose(){k||(k=!0,Y="disposed",it++,q==null||q.abort(),Lt.abort(),e("sources").close(),j(),i.replaceChildren(),i.classList.remove("has-selection"),Xo.delete(i))}};return Xo.set(i,xt),xt.ready=mt(),xt}export{ug as mountCampusMap};
