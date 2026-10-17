var Lc=0,tl=1,Dc=2;var nr=1,Nc=2,Es=3,Zn=0,Ot=1,hn=2,$n=0,ws=1,nl=2,il=3,sl=4,_a=5;var ci=100,Uc=101,Fc=102,Oc=103,Bc=104,zc=200,ir=201,kc=202,Hc=203,rl=204,al=205,Vc=206,Gc=207,Wc=208,Xc=209,qc=210,Yc=211,Zc=212,$c=213,Jc=214,Hr=0,Vr=1,Gr=2,ds=3,Wr=4,Xr=5,qr=6,Yr=7,ol=0,Kc=1,jc=2,Ln=0,ll=1,cl=2,hl=3,ul=4,dl=5,sr=6,fl=7;var pl=300,wi=301,Wi=302,va=303,ya=304,rr=306,Zr=1e3,zn=1001,$r=1002,Ut=1003,Qc=1004;var ar=1005;var It=1006,Ma=1007;var Ti=1008;var nn=1009,ml=1010,gl=1011,Ts=1012,ba=1013,Dn=1014,_n=1015,sn=1016,Sa=1017,Ea=1018,As=1020,xl=35902,_l=35899,vl=1021,yl=1022,un=1023,kn=1026,Ai=1027,or=1028,wa=1029,Ri=1030,Ta=1031;var Aa=1033,lr=33776,cr=33777,hr=33778,ur=33779,Ra=35840,Ca=35841,Pa=35842,Ia=35843,La=36196,Da=37492,Na=37496,Ua=37488,Fa=37489,dr=37490,Oa=37491,Ba=37808,za=37809,ka=37810,Ha=37811,Va=37812,Ga=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,Za=37818,$a=37819,Ja=37820,Ka=37821,ja=36492,Qa=36494,eo=36495,to=36283,no=36284,fr=36285,io=36286;var Ws=2300,Jr=2301,zr=2302,Yo=2303,Zo=2400,$o=2401,Jo=2402;var eh=3200;var so=0,th=1,hi="",ln="srgb",Hn="srgb-linear",Xs="linear",_t="srgb";var kr=7680;var nh=519,ih=512,sh=513,rh=514,ro=515,ah=516,oh=517,ao=518,lh=519,ch=35044;var Ml="300 es",Pn=2e3,fs=2001;function Mu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hh(){let i=qs("canvas");return i.style.display="block",i}var lc={},ps=null;function bl(...i){let e="THREE."+i.shift();ps?ps("log",e,...i):console.log(e,...i)}function uh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=uh(i);let e="THREE."+i.shift();if(ps)ps("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=uh(i);let e="THREE."+i.shift();if(ps)ps("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ki(...i){let e=i.join(" ");e in lc||(lc[e]=!0,We(...i))}function dh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var fh={[Hr]:Vr,[Gr]:qr,[Wr]:Yr,[ds]:Xr,[Vr]:Hr,[qr]:Gr,[Yr]:Wr,[Xr]:ds},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=1234567,Vs=Math.PI/180,ms=180/Math.PI;function Rs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function Sl(i,e){return(i%e+e)%e}function Su(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Eu(i,e,t){return i!==e?(t-i)/(e-i):0}function Gs(i,e,t){return(1-t)*i+t*e}function wu(i,e,t,n){return Gs(i,e,1-Math.exp(-t*n))}function Tu(i,e=1){return e-Math.abs(Sl(i,e*2)-e)}function Au(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ru(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pu(i,e){return i+Math.random()*(e-i)}function Iu(i){return i*(.5-Math.random())}function Lu(i){i!==void 0&&(cc=i);let e=cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Du(i){return i*Vs}function Nu(i){return i*ms}function Uu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Fu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),m=r((e-n)/2),h=a((e-n)/2),g=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*m,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*m,o*c);break;case"ZXZ":i.set(l*m,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*g,o*c);break;case"YXY":i.set(l*g,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*g,o*u,o*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Rt={DEG2RAD:Vs,RAD2DEG:ms,generateUUID:Rs,clamp:ct,euclideanModulo:Sl,mapLinear:Su,inverseLerp:Eu,lerp:Gs,damp:wu,pingpong:Tu,smoothstep:Au,smootherstep:Ru,randInt:Cu,randFloat:Pu,randFloatSpread:Iu,seededRandom:Lu,degToRad:Du,radToDeg:Nu,isPowerOfTwo:Uu,ceilPowerOfTwo:Fu,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:Bu,normalize:on,denormalize:hs},ye=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],m=n[s+3],h=r[a+0],g=r[a+1],_=r[a+2],M=r[a+3];if(m!==M||l!==h||c!==g||u!==_){let x=l*h+c*g+u*_+m*M;x<0&&(h=-h,g=-g,_=-_,M=-M,x=-x);let d=1-o;if(x<.9995){let w=Math.acos(x),R=Math.sin(w);d=Math.sin(d*w)/R,o=Math.sin(o*w)/R,l=l*d+h*o,c=c*d+g*o,u=u*d+_*o,m=m*d+M*o}else{l=l*d+h*o,c=c*d+g*o,u=u*d+_*o,m=m*d+M*o;let w=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=w,c*=w,u*=w,m*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],m=r[a],h=r[a+1],g=r[a+2],_=r[a+3];return e[t]=o*_+u*m+l*g-c*h,e[t+1]=l*_+u*h+c*m-o*g,e[t+2]=c*_+u*g+o*h-l*m,e[t+3]=u*_-o*m-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),m=o(r/2),h=l(n/2),g=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*m+c*g*_,this._y=c*g*m-h*u*_,this._z=c*u*_+h*g*m,this._w=c*u*m-h*g*_;break;case"YXZ":this._x=h*u*m+c*g*_,this._y=c*g*m-h*u*_,this._z=c*u*_-h*g*m,this._w=c*u*m+h*g*_;break;case"ZXY":this._x=h*u*m-c*g*_,this._y=c*g*m+h*u*_,this._z=c*u*_+h*g*m,this._w=c*u*m-h*g*_;break;case"ZYX":this._x=h*u*m-c*g*_,this._y=c*g*m+h*u*_,this._z=c*u*_-h*g*m,this._w=c*u*m+h*g*_;break;case"YZX":this._x=h*u*m+c*g*_,this._y=c*g*m+h*u*_,this._z=c*u*_-h*g*m,this._w=c*u*m-h*g*_;break;case"XZY":this._x=h*u*m-c*g*_,this._y=c*g*m-h*u*_,this._z=c*u*_+h*g*m,this._w=c*u*m+h*g*_;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],m=t[10],h=n+o+m;if(h>0){let g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>m){let g=2*Math.sqrt(1+n-o-m);this._w=(u-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>m){let g=2*Math.sqrt(1+o-n-m);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+m-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*u,this.y=n+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},To=new z,hc=new Gn,Ke=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],h=n[2],g=n[5],_=n[8],M=s[0],x=s[3],d=s[6],w=s[1],R=s[4],y=s[7],E=s[2],b=s[5],P=s[8];return r[0]=a*M+o*w+l*E,r[3]=a*x+o*R+l*b,r[6]=a*d+o*y+l*P,r[1]=c*M+u*w+m*E,r[4]=c*x+u*R+m*b,r[7]=c*d+u*y+m*P,r[2]=h*M+g*w+_*E,r[5]=h*x+g*R+_*b,r[8]=h*d+g*y+_*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=u*a-o*c,h=o*l-u*r,g=c*r-a*l,_=t*m+n*h+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=m*M,e[1]=(s*c-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=h*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=g*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ao=new Ke,uc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){let i={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?Xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hn]:{primaries:e,whitePoint:n,transfer:Xs,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var ft=zu();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ki,Kr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=qs("canvas")),Ki.width=e.width,Ki.height=e.height;let s=Ki.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ku=0,gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ro(s[a].image)):r.push(Ro(s[a]))}else r=Ro(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var Hu=0,Co=new z,dn=class i extends Vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=zn,s=zn,r=It,a=Ti,o=un,l=nn,c=i.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Rs(),this.name="",this.source=new gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=pl;dn.DEFAULT_ANISOTROPY=1;var bt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],m=l[8],h=l[1],g=l[5],_=l[9],M=l[2],x=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(m-M)<.01&&Math.abs(_-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(m+M)<.1&&Math.abs(_+x)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,y=(g+1)/2,E=(d+1)/2,b=(u+h)/4,P=(m+M)/4,v=(_+x)/4;return R>y&&R>E?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=b/n,r=P/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=P/r,s=v/r),this.set(n,s,r,t),this}let w=Math.sqrt((x-_)*(x-_)+(m-M)*(m-M)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(x-_)/w,this.y=(m-M)/w,this.z=(h-u)/w,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jr=class extends Vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new dn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new gs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends jr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ys=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qr=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Mt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,m,h,g,_,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,m,h,g,_,M,x)}set(e,t,n,s,r,a,o,l,c,u,m,h,g,_,M,x){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=m,d[14]=h,d[3]=g,d[7]=_,d[11]=M,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),a=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let h=a*u,g=a*m,_=o*u,M=o*m;t[0]=l*u,t[4]=-l*m,t[8]=c,t[1]=g+_*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=_+g*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,g=l*m,_=c*u,M=c*m;t[0]=h+M*o,t[4]=_*o-g,t[8]=a*c,t[1]=a*m,t[5]=a*u,t[9]=-o,t[2]=g*o-_,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,g=l*m,_=c*u,M=c*m;t[0]=h-M*o,t[4]=-a*m,t[8]=_+g*o,t[1]=g+_*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,g=a*m,_=o*u,M=o*m;t[0]=l*u,t[4]=_*c-g,t[8]=h*c+M,t[1]=l*m,t[5]=M*c+h,t[9]=g*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,g=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=M-h*m,t[8]=_*m+g,t[1]=m,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*m+_,t[10]=h-M*m}else if(e.order==="XZY"){let h=a*l,g=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=-m,t[8]=c*u,t[1]=h*m+M,t[5]=a*u,t[9]=g*m-_,t[2]=_*m-g,t[6]=o*u,t[10]=M*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vu,e,Gu)}lookAt(e,t,n){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),pi.crossVectors(n,pn),pi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),pi.crossVectors(n,pn)),pi.normalize(),yr.crossVectors(pn,pi),s[0]=pi.x,s[4]=yr.x,s[8]=pn.x,s[1]=pi.y,s[5]=yr.y,s[9]=pn.y,s[2]=pi.z,s[6]=yr.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],h=n[9],g=n[13],_=n[2],M=n[6],x=n[10],d=n[14],w=n[3],R=n[7],y=n[11],E=n[15],b=s[0],P=s[4],v=s[8],S=s[12],N=s[1],F=s[5],B=s[9],H=s[13],I=s[2],G=s[6],Y=s[10],q=s[14],se=s[3],X=s[7],K=s[11],re=s[15];return r[0]=a*b+o*N+l*I+c*se,r[4]=a*P+o*F+l*G+c*X,r[8]=a*v+o*B+l*Y+c*K,r[12]=a*S+o*H+l*q+c*re,r[1]=u*b+m*N+h*I+g*se,r[5]=u*P+m*F+h*G+g*X,r[9]=u*v+m*B+h*Y+g*K,r[13]=u*S+m*H+h*q+g*re,r[2]=_*b+M*N+x*I+d*se,r[6]=_*P+M*F+x*G+d*X,r[10]=_*v+M*B+x*Y+d*K,r[14]=_*S+M*H+x*q+d*re,r[3]=w*b+R*N+y*I+E*se,r[7]=w*P+R*F+y*G+E*X,r[11]=w*v+R*B+y*Y+E*K,r[15]=w*S+R*H+y*q+E*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],m=e[6],h=e[10],g=e[14],_=e[3],M=e[7],x=e[11],d=e[15],w=l*g-c*h,R=o*g-c*m,y=o*h-l*m,E=a*g-c*u,b=a*h-l*u,P=a*m-o*u;return t*(M*w-x*R+d*y)-n*(_*w-x*E+d*b)+s*(_*R-M*E+d*P)-r*(_*y-M*b+x*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=e[9],h=e[10],g=e[11],_=e[12],M=e[13],x=e[14],d=e[15],w=t*o-n*a,R=t*l-s*a,y=t*c-r*a,E=n*l-s*o,b=n*c-r*o,P=s*c-r*l,v=u*M-m*_,S=u*x-h*_,N=u*d-g*_,F=m*x-h*M,B=m*d-g*M,H=h*d-g*x,I=w*H-R*B+y*F+E*N-b*S+P*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return e[0]=(o*H-l*B+c*F)*G,e[1]=(s*B-n*H-r*F)*G,e[2]=(M*P-x*b+d*E)*G,e[3]=(h*b-m*P-g*E)*G,e[4]=(l*N-a*H-c*S)*G,e[5]=(t*H-s*N+r*S)*G,e[6]=(x*y-_*P-d*R)*G,e[7]=(u*P-h*y+g*R)*G,e[8]=(a*B-o*N+c*v)*G,e[9]=(n*N-t*B-r*v)*G,e[10]=(_*b-M*y+d*w)*G,e[11]=(m*y-u*b-g*w)*G,e[12]=(o*S-a*F-l*v)*G,e[13]=(t*F-n*S+s*v)*G,e[14]=(M*R-_*E-x*w)*G,e[15]=(u*E-m*R+h*w)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,m=o+o,h=r*c,g=r*u,_=r*m,M=a*u,x=a*m,d=o*m,w=l*c,R=l*u,y=l*m,E=n.x,b=n.y,P=n.z;return s[0]=(1-(M+d))*E,s[1]=(g+y)*E,s[2]=(_-R)*E,s[3]=0,s[4]=(g-y)*b,s[5]=(1-(h+d))*b,s[6]=(x+w)*b,s[7]=0,s[8]=(_+R)*P,s[9]=(x-w)*P,s[10]=(1-(h+M))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ji.set(s[0],s[1],s[2]).length(),o=ji.set(s[4],s[5],s[6]).length(),l=ji.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);let c=1/a,u=1/o,m=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=m,An.elements[9]*=m,An.elements[10]*=m,t.setFromRotationMatrix(An),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Pn,l=!1){let c=this.elements,u=2*r/(t-e),m=2*r/(n-s),h=(t+e)/(t-e),g=(n+s)/(n-s),_,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===Pn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===fs)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Pn,l=!1){let c=this.elements,u=2/(t-e),m=2/(n-s),h=-(t+e)/(t-e),g=-(n+s)/(n-s),_,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===Pn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===fs)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ji=new z,An=new Mt,Vu=new z(0,0,0),Gu=new z(1,1,1),pi=new z,yr=new z,pn=new z,fc=new Mt,pc=new Gn,li=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],h=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wu=0,mc=new z,Qi=new Gn,ni=new Mt,Mr=new z,Bs=new z,Xu=new z,qu=new Gn,gc=new z(1,0,0),xc=new z(0,1,0),_c=new z(0,0,1),vc={type:"added"},Yu={type:"removed"},es={type:"childadded",child:null},Po={type:"childremoved",child:null},cn=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new li,n=new Gn,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ke}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(xc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(xc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Bs,Mr,this.up):ni.lookAt(Mr,Bs,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(ni),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vc),es.child=e,this.dispatchEvent(es),es.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yu),Po.child=e,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vc),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Xu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),m=a(e.shapes),h=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new z(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zi=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zu={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let x=t.getJointPose(M,n),d=this._getHandJoint(c,M);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=u.position.distanceTo(m.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},br={h:0,s:0,l:0};function Io(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Sl(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Io(a,r,e+1/3),this.g=Io(a,r,e),this.b=Io(a,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){let n=ph[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return ft.workingToColorSpace(Qt.copy(this),e),Math.round(ct(Qt.r*255,0,255))*65536+Math.round(ct(Qt.g*255,0,255))*256+Math.round(ct(Qt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=ln){ft.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(br);let n=Gs(mi.h,br.h,t),s=Gs(mi.s,br.s,t),r=Gs(mi.l,br.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new et;et.NAMES=ph;var Tn=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new z,ii=new z,Lo=new z,si=new z,ts=new z,ns=new z,yc=new z,Do=new z,No=new z,Uo=new z,Fo=new bt,Oo=new bt,Bo=new bt,vi=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),ii.subVectors(n,t),Lo.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(ii),l=Rn.dot(Lo),c=ii.dot(ii),u=ii.dot(Lo),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let h=1/m,g=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-g-_,_,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,n),Bo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fo,r.x),a.addScaledVector(Oo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),ii.subVectors(e,t),Rn.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Rn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ts.subVectors(s,n),ns.subVectors(r,n),Do.subVectors(e,n);let l=ts.dot(Do),c=ns.dot(Do);if(l<=0&&c<=0)return t.copy(n);No.subVectors(e,s);let u=ts.dot(No),m=ns.dot(No);if(u>=0&&m<=u)return t.copy(s);let h=l*m-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ts,a);Uo.subVectors(e,r);let g=ts.dot(Uo),_=ns.dot(Uo);if(_>=0&&g<=_)return t.copy(r);let M=g*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ns,o);let x=u*_-g*m;if(x<=0&&m-u>=0&&g-_>=0)return yc.subVectors(r,s),o=(m-u)/(m-u+(g-_)),t.copy(s).addScaledVector(yc,o);let d=1/(x+M+h);return a=M*d,o=h*d,t.copy(n).addScaledVector(ts,a).addScaledVector(ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yi=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Er.subVectors(this.max,zs),is.subVectors(e.a,zs),ss.subVectors(e.b,zs),rs.subVectors(e.c,zs),gi.subVectors(ss,is),xi.subVectors(rs,ss),Ui.subVectors(is,rs);let t=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Ui.z,Ui.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Ui.z,0,-Ui.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Ui.y,Ui.x,0];return!zo(t,is,ss,rs,Er)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,is,ss,rs,Er))?!1:(wr.crossVectors(gi,xi),t=[wr.x,wr.y,wr.z],zo(t,is,ss,rs,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ri=[new z,new z,new z,new z,new z,new z,new z,new z],Cn=new z,Sr=new yi,is=new z,ss=new z,rs=new z,gi=new z,xi=new z,Ui=new z,zs=new z,Er=new z,wr=new z,Fi=new z;function zo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fi.fromArray(i,r);let o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Bt=new z,Tr=new ye,$u=0,wn=class extends Vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$u++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ch,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Zs=class extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $s=class extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Nt=class extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ju=new yi,ks=new z,ko=new z,vs=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ju.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);let t=ks.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(ko)),this.expandByPoint(ks.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ku=0,En=new Mt,Ho=new cn,as=new z,mn=new yi,Hs=new yi,qt=new z,tn=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?$s:Zs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(mn.min,Hs.min),mn.expandByPoint(qt),qt.addVectors(mn.max,Hs.max),mn.expandByPoint(qt)):(mn.expandByPoint(Hs.min),mn.expandByPoint(Hs.max))}mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qt.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),qt.add(as)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new z,l[v]=new z;let c=new z,u=new z,m=new z,h=new ye,g=new ye,_=new ye,M=new z,x=new z;function d(v,S,N){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),m.fromBufferAttribute(n,N),h.fromBufferAttribute(r,v),g.fromBufferAttribute(r,S),_.fromBufferAttribute(r,N),u.sub(c),m.sub(c),g.sub(h),_.sub(h);let F=1/(g.x*_.y-_.x*g.y);isFinite(F)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(m,-g.y).multiplyScalar(F),x.copy(m).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(F),o[v].add(M),o[S].add(M),o[N].add(M),l[v].add(x),l[S].add(x),l[N].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,S=w.length;v<S;++v){let N=w[v],F=N.start,B=N.count;for(let H=F,I=F+B;H<I;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let R=new z,y=new z,E=new z,b=new z;function P(v){E.fromBufferAttribute(s,v),b.copy(E);let S=o[v];R.copy(S),R.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(b,S);let F=y.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,F)}for(let v=0,S=w.length;v<S;++v){let N=w[v],F=N.start,B=N.count;for(let H=F,I=F+B;H<I;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,m=new z;if(e)for(let h=0,g=e.count;h<g;h+=3){let _=e.getX(h+0),M=e.getX(h+1),x=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,x),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,g=t.count;h<g;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,m=o.normalized,h=new c.constructor(l.length*u),g=0,_=0;for(let M=0,x=l.length;M<x;M++){o.isInterleavedBufferAttribute?g=l[M]*o.data.stride+o.offset:g=l[M]*u;for(let d=0;d<u;d++)h[_++]=c[g++]}return new wn(h,u,m)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){let h=c[u],g=e(h,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,h=c.length;m<h;m++){let g=c[m];u.push(g.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],m=r[c];for(let h=0,g=m.length;h<g;h++)u.push(m[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Vo=new z,ju=new z,Qu=new Ke,gn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Vo.subVectors(n,t).cross(ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Vo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qu.getNormalMatrix(e),s=this.coplanarPoint(Vo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ed=0,Mi=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=ws,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=al,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ai=new z,Go=new z,Ar=new z,Rr=new z,Hi=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Go.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Go);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ar),o=Rr.dot(this.direction),l=-Rr.dot(Ar),c=Rr.lengthSq(),u=Math.abs(1-a*a),m,h,g,_;if(u>0)if(m=a*l-o,h=a*o-l,_=r*u,m>=0)if(h>=-_)if(h<=_){let M=1/u;m*=M,h*=M,g=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=r,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*l)+c;else h=-r,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*l)+c;else h<=-_?(m=Math.max(0,-(-a*r+o)),h=m>0?-r:Math.min(Math.max(-r,-l),r),g=-m*m+h*(h+2*l)+c):h<=_?(m=0,h=Math.min(Math.max(-r,-l),r),g=h*(h+2*l)+c):(m=Math.max(0,-(a*r+o)),h=m>0?r:Math.min(Math.max(-r,-l),r),g=-m*m+h*(h+2*l)+c);else h=a>0?-r:r,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Go).addScaledVector(Ar,h),g}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-h.z)*m,l=(e.max.z-h.z)*m):(o=(e.max.z-h.z)*m,l=(e.min.z-h.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,m=e.x-a.x,h=e.y-a.y,g=e.z-a.z,_=t.x-a.x,M=t.y-a.y,x=t.z-a.z,d=n.x-a.x,w=n.y-a.y,R=n.z-a.z,y=Math.abs(l),E=Math.abs(c),b=Math.abs(u),P,v,S,N,F,B,H,I,G,Y,q,se;if(y>=E&&y>=b?(S=l,B=m,G=_,se=d,l>=0?(P=c,v=u,N=h,F=g,H=M,I=x,Y=w,q=R):(P=u,v=c,N=g,F=h,H=x,I=M,Y=R,q=w)):E>=b?(S=c,B=h,G=M,se=w,c>=0?(P=u,v=l,N=g,F=m,H=x,I=_,Y=R,q=d):(P=l,v=u,N=m,F=g,H=_,I=x,Y=d,q=R)):(S=u,B=g,G=x,se=R,u>=0?(P=l,v=c,N=m,F=h,H=_,I=M,Y=d,q=w):(P=c,v=l,N=h,F=m,H=M,I=_,Y=w,q=d)),S===0)return null;let X=P/S,K=v/S,re=1/S,Le=N-X*B,ee=F-K*B,De=H-X*G,Ue=I-K*G,at=Y-X*se,$=q-K*se,Q=at*Ue-$*De,Re=Le*$-ee*at,Fe=De*ee-Ue*Le;if(s){if(Q<0||Re<0||Fe<0)return null}else if((Q<0||Re<0||Fe<0)&&(Q>0||Re>0||Fe>0))return null;let be=Q+Re+Fe;if(be===0)return null;let Oe=re*(Q*B+Re*G+Fe*se);return(be>0?Oe<0:Oe>0)?null:this.at(Oe/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wn=class extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mc=new Mt,Oi=new Hi,Cr=new vs,bc=new z,Pr=new z,Ir=new z,Lr=new z,Wo=new z,Dr=new z,Sc=new z,Nr=new z,wt=class extends cn{constructor(e=new tn,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],m=r[l];u!==0&&(Wo.fromBufferAttribute(m,e),a?Dr.addScaledVector(Wo,u):Dr.addScaledVector(Wo.sub(t),u))}t.add(Dr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(Cr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Cr,bc)===null||Oi.origin.distanceToSquared(bc)>(e.far-e.near)**2))&&(Mc.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,h=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){let x=h[_],d=a[x.materialIndex],w=Math.max(x.start,g.start),R=Math.min(o.count,Math.min(x.start+x.count,g.start+g.count));for(let y=w,E=R;y<E;y+=3){let b=o.getX(y),P=o.getX(y+1),v=o.getX(y+2);s=Ur(this,d,e,n,c,u,m,b,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let _=Math.max(0,g.start),M=Math.min(o.count,g.start+g.count);for(let x=_,d=M;x<d;x+=3){let w=o.getX(x),R=o.getX(x+1),y=o.getX(x+2);s=Ur(this,a,e,n,c,u,m,w,R,y),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){let x=h[_],d=a[x.materialIndex],w=Math.max(x.start,g.start),R=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let y=w,E=R;y<E;y+=3){let b=y,P=y+1,v=y+2;s=Ur(this,d,e,n,c,u,m,b,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let _=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let x=_,d=M;x<d;x+=3){let w=x,R=x+1,y=x+2;s=Ur(this,a,e,n,c,u,m,w,R,y),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function td(i,e,t,n,s,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Zn,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Nr);return c<t.near||c>t.far?null:{distance:c,point:Nr.clone(),object:i}}function Ur(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Pr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Lr);let u=td(i,e,t,n,Pr,Ir,Lr,Sc);if(u){let m=new z;vi.getBarycoord(Sc,Pr,Ir,Lr,m),s&&(u.uv=vi.getInterpolatedAttribute(s,o,l,c,m,new ye)),r&&(u.uv1=vi.getInterpolatedAttribute(r,o,l,c,m,new ye)),a&&(u.normal=vi.getInterpolatedAttribute(a,o,l,c,m,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new z,materialIndex:0};vi.getNormal(Pr,Ir,Lr,h.normal),u.face=h,u.barycoord=m}return u}var Vi=class extends dn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,u=Ut,m,h){super(null,a,o,l,c,u,s,r,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=new vs,nd=new ye(.5,.5),Fr=new z,ys=class{constructor(e=new gn,t=new gn,n=new gn,s=new gn,r=new gn,a=new gn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],m=r[5],h=r[6],g=r[7],_=r[8],M=r[9],x=r[10],d=r[11],w=r[12],R=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-a,g-u,d-_,E-w).normalize(),s[1].setComponents(c+a,g+u,d+_,E+w).normalize(),s[2].setComponents(c+o,g+m,d+M,E+R).normalize(),s[3].setComponents(c-o,g-m,d-M,E-R).normalize(),n)s[4].setComponents(l,h,x,y).normalize(),s[5].setComponents(c-l,g-h,d-x,E-y).normalize();else if(s[4].setComponents(c-l,g-h,d-x,E-y).normalize(),t===Pn)s[5].setComponents(c+l,g+h,d+x,E+y).normalize();else if(t===fs)s[5].setComponents(l,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);let t=nd.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Js=class extends dn{constructor(e=[],t=wi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Xn=class extends dn{constructor(e,t,n=Dn,s,r,a,o=Ut,l=Ut,c,u=kn,m=1){if(u!==kn&&u!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:m};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ea=class extends Xn{constructor(e,t=Dn,n=wi,s,r,a=Ut,o=Ut,l,c=kn){let u={width:e,height:e,depth:1},m=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ks=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},In=class i extends tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],m=[],h=0,g=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(m,2));function _(M,x,d,w,R,y,E,b,P,v,S){let N=y/P,F=E/v,B=y/2,H=E/2,I=b/2,G=P+1,Y=v+1,q=0,se=0,X=new z;for(let K=0;K<Y;K++){let re=K*F-H;for(let Le=0;Le<G;Le++){let ee=Le*N-B;X[M]=ee*w,X[x]=re*R,X[d]=I,c.push(X.x,X.y,X.z),X[M]=0,X[x]=0,X[d]=b>0?1:-1,u.push(X.x,X.y,X.z),m.push(Le/P),m.push(1-K/v),q+=1}}for(let K=0;K<v;K++)for(let re=0;re<P;re++){let Le=h+re+G*K,ee=h+re+G*(K+1),De=h+(re+1)+G*(K+1),Ue=h+(re+1)+G*K;l.push(Le,ee,Ue),l.push(ee,De,Ue),se+=6}o.addGroup(g,se,S),g+=se,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Gi=class i extends tn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],m=[],h=[],g=[],_=0,M=[],x=n/2,d=0;w(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Nt(m,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(g,2));function w(){let y=new z,E=new z,b=0,P=(t-e)/n;for(let v=0;v<=r;v++){let S=[],N=v/r,F=N*(t-e)+e;for(let B=0;B<=s;B++){let H=B/s,I=H*l+o,G=Math.sin(I),Y=Math.cos(I);E.x=F*G,E.y=-N*n+x,E.z=F*Y,m.push(E.x,E.y,E.z),y.set(G,P,Y).normalize(),h.push(y.x,y.y,y.z),g.push(H,1-N),S.push(_++)}M.push(S)}for(let v=0;v<s;v++)for(let S=0;S<r;S++){let N=M[S][v],F=M[S+1][v],B=M[S+1][v+1],H=M[S][v+1];(e>0||S!==0)&&(u.push(N,F,H),b+=3),(t>0||S!==r-1)&&(u.push(F,B,H),b+=3)}c.addGroup(d,b,0),d+=b}function R(y){let E=_,b=new ye,P=new z,v=0,S=y===!0?e:t,N=y===!0?1:-1;for(let B=1;B<=s;B++)m.push(0,x*N,0),h.push(0,N,0),g.push(.5,.5),_++;let F=_;for(let B=0;B<=s;B++){let I=B/s*l+o,G=Math.cos(I),Y=Math.sin(I);P.x=S*Y,P.y=x*N,P.z=S*G,m.push(P.x,P.y,P.z),h.push(0,N,0),b.x=G*.5+.5,b.y=Y*.5*N+.5,g.push(b.x,b.y),_++}for(let B=0;B<s;B++){let H=E+B,I=F+B;y===!0?u.push(I,I+1,H):u.push(I+1,I,H),v+=3}c.addGroup(d,v,y===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ms=class i extends tn{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ct(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,m=new z,h=new ye,g=new z,_=new z,M=new z,x=0,d=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:x=e[w+1].x-e[w].x,d=e[w+1].y-e[w].y,g.x=d*1,g.y=-x,g.z=d*0,M.copy(g),g.normalize(),l.push(g.x,g.y,g.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:x=e[w+1].x-e[w].x,d=e[w+1].y-e[w].y,g.x=d*1,g.y=-x,g.z=d*0,_.copy(g),g.x+=M.x,g.y+=M.y,g.z+=M.z,g.normalize(),l.push(g.x,g.y,g.z),M.copy(_)}for(let w=0;w<=t;w++){let R=n+w*u*s,y=Math.sin(R),E=Math.cos(R);for(let b=0;b<=e.length-1;b++){m.x=e[b].x*y,m.y=e[b].y,m.z=e[b].x*E,a.push(m.x,m.y,m.z),h.x=w/t,h.y=b/(e.length-1),o.push(h.x,h.y);let P=l[3*b+0]*y,v=l[3*b+1],S=l[3*b+0]*E;c.push(P,v,S)}}for(let w=0;w<t;w++)for(let R=0;R<e.length-1;R++){let y=R+w*e.length,E=y,b=y+e.length,P=y+e.length+1,v=y+1;r.push(E,b,v),r.push(P,v,b)}this.setIndex(r),this.setAttribute("position",new Nt(a,3)),this.setAttribute("uv",new Nt(o,2)),this.setAttribute("normal",new Nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var qn=class i extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,m=e/o,h=t/l,g=[],_=[],M=[],x=[];for(let d=0;d<u;d++){let w=d*h-a;for(let R=0;R<c;R++){let y=R*m-r;_.push(y,-w,0),M.push(0,0,1),x.push(R/o),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){let R=w+c*d,y=w+c*(d+1),E=w+1+c*(d+1),b=w+1+c*d;g.push(R,y,b),g.push(y,E,b)}this.setIndex(g),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(M,3)),this.setAttribute("uv",new Nt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Xi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ec(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ec(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function rn(i){let e={};for(let t=0;t<i.length;t++){let n=Xi(i[t]);for(let s in n)e[s]=n[s]}return e}function Ec(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function id(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function El(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var mh={clone:Xi,merge:rn},sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yt=class extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new et().setHex(s.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ta=class extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bs=class extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ss=class extends bs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var na=class extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ia=class extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function os(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Xo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sa=class extends bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zo,endingEnd:Zo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $o:r=e,o=2*t-n;break;case Jo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $o:a=e,l=2*n-t;break;case Jo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,h=this._weightPrev,g=this._weightNext,_=(n-t)/(s-t),M=_*_,x=M*_,d=-h*x+2*h*M-h*_,w=(1+h)*x+(-1.5-2*h)*M+(-.5+h)*_+1,R=(-1-g)*x+(1.5+g)*M+.5*_,y=g*x-g*M;for(let E=0;E!==o;++E)r[E]=d*a[u+E]+w*a[c+E]+R*a[l+E]+y*a[m+E];return r}},ra=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),m=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*m+a[l+h]*u;return r}},aa=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},oa=class extends bi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,m=this.outTangents;if(!u||!m){let _=(n-t)/(s-t),M=1-_;for(let x=0;x!==o;++x)r[x]=a[c+x]*M+a[l+x]*_;return r}let h=o*2,g=e-1;for(let _=0;_!==o;++_){let M=a[c+_],x=a[l+_],d=g*h+_*2,w=m[d],R=m[d+1],y=e*h+_*2,E=u[y],b=u[y+1],P=od(n,t,w,E,s);r[_]=gh(P,M,R,b,x)}return r}};function gh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function ad(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function od(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=gh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=ad(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var xn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=os(t,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:os(e.times,Array),values:os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Xo(e.settings)&&(n.settings={inTangents:os(e.settings.inTangents,Array),outTangents:os(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new oa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case Jr:t=this.InterpolantFactoryMethodLinear;break;case zr:t=this.InterpolantFactoryMethodSmooth;break;case Yo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return zr;case this.InterpolantFactoryMethodBezier:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Xo(this.settings)&&(wc(this.settings.inTangents,e),wc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&bu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,h=m-n,g=m+n;for(let _=0;_!==n;++_){let M=t[m+_];if(M!==t[h+_]||M!==t[g+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,h=a*n;for(let g=0;g!==n;++g)t[h+g]=t[m+g]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Xo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Jr;var Si=class extends xn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Ws;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}};la.prototype.ValueTypeName="color";var ca=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}};ca.prototype.ValueTypeName="number";var ha=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},js=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}};js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends xn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Ws;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}};ua.prototype.ValueTypeName="vector";var da=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,h=c.length;m<h;m+=2){let g=c[m],_=c[m+1];if(g.global&&(g.lastIndex=0),g.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xh=new da,fa=class{constructor(e){this.manager=e!==void 0?e:xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var pa=class extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var qo=new Mt,Tc=new z,Ac=new z,ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tc),Ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ac),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(qo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===fs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Or=new z,Br=new Gn,Bn=new z,Qs=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Or,Br,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Br,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Or,Br,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Br,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_i=new z,Rc=new ye,Cc=new ye,en=class extends Qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,Rc,Cc),t.subVectors(Cc,Rc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Yn=class extends Qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ko=class extends ma{constructor(){super(new Yn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Ko}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ls=-90,cs=1,ga=class extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(ls,cs,e,t);s.layers=this.layers,this.add(s);let r=new en(ls,cs,e,t);r.layers=this.layers,this.add(r);let a=new en(ls,cs,e,t);a.layers=this.layers,this.add(a);let o=new en(ls,cs,e,t);o.layers=this.layers,this.add(o);let l=new en(ls,cs,e,t);l.layers=this.layers,this.add(l);let c=new en(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(m,h,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},xa=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var wl="\\[\\]\\.:\\/",ld=new RegExp("["+wl+"]","g"),Tl="[^"+wl+"]",cd="[^"+wl.replace("\\.","")+"]",hd=/((?:WC+[\/:])*)/.source.replace("WC",Tl),ud=/(WCOD+)?/.source.replace("WCOD",cd),dd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),fd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),pd=new RegExp("^"+hd+ud+dd+fd+"$"),md=["material","materials","bones","map"],jo=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ld,"")}static parseTrackName(e){let t=pd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);md.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=jo;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nx=new Float32Array(1);var Pc=new Mt,tr=class{constructor(e,t,n=0,s=1/0){this.ray=new Hi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pc),this}intersectObject(e,t=!0,n=[]){return Qo(e,this,n,t),n.sort(Ic),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Qo(e[s],this,n,t);return n.sort(Ic),n}};function Ic(i,e){return i.distance-e.distance}function Qo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Qo(r[a],e,t,!0)}}var el=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Al(i,e,t,n){let s=gd(n);switch(t){case vl:return i*e;case or:return i*e/s.components*s.byteLength;case wa:return i*e/s.components*s.byteLength;case Ri:return i*e*2/s.components*s.byteLength;case Ta:return i*e*2/s.components*s.byteLength;case yl:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case Aa:return i*e*4/s.components*s.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:case Ia:return Math.max(i,16)*Math.max(e,8)/4;case Ra:case Pa:return Math.max(i,8)*Math.max(e,8)/2;case La:case Da:case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Na:case dr:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ja:case Qa:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fr:case io:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gd(i){switch(i){case nn:case ml:return{byteLength:1,components:1};case Ts:case gl:case sn:return{byteLength:2,components:1};case Sa:case Ea:return{byteLength:2,components:4};case Dn:case ba:case _n:return{byteLength:4,components:1};case xl:case _l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _d(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,m=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let u=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,u);else{m.sort((g,_)=>g.start-_.start);let h=0;for(let g=1;g<m.length;g++){let _=m[h],M=m[g];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,m[h]=M)}m.length=h+1;for(let g=0,_=m.length;g<_;g++){let M=m[g];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
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
#endif`,Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wd=`#ifdef USE_AOMAP
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
#endif`,Td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ad=`#ifdef USE_BATCHING
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
#endif`,Rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ld=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vd=`#define PI 3.141592653589793
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
} // validated`,Gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,of=`#ifdef USE_GRADIENTMAP
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
}`,lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
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
#endif`,_f=`uniform sampler2D dfgLUT;
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
}`,vf=`
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pf=`#if defined( USE_POINTS_UV )
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
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`#ifdef USE_MORPHTARGETS
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
#endif`,Of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gf=`#ifdef USE_NORMALMAP
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
#endif`,Wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$f=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rp=`float getShadowMask() {
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
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cp=`#ifdef USE_SKINNING
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
#endif`,hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
}`,Rp=`#define DISTANCE
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
}`,Cp=`#define DISTANCE
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Up=`uniform vec3 diffuse;
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
}`,Fp=`#define LAMBERT
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
}`,Op=`#define LAMBERT
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
}`,Bp=`#define MATCAP
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
}`,zp=`#define MATCAP
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
}`,kp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
}`,Vp=`#define PHONG
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
}`,Gp=`#define PHONG
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define STANDARD
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
}`,qp=`#define TOON
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
}`,Yp=`#define TOON
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
}`,Zp=`uniform float size;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Kp=`uniform vec3 color;
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
}`,jp=`uniform float rotation;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:vd,alphahash_pars_fragment:yd,alphamap_fragment:Md,alphamap_pars_fragment:bd,alphatest_fragment:Sd,alphatest_pars_fragment:Ed,aomap_fragment:wd,aomap_pars_fragment:Td,batching_pars_vertex:Ad,batching_vertex:Rd,begin_vertex:Cd,beginnormal_vertex:Pd,bsdfs:Id,iridescence_fragment:Ld,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Od,color_fragment:Bd,color_pars_fragment:zd,color_pars_vertex:kd,color_vertex:Hd,common:Vd,cube_uv_reflection_fragment:Gd,defaultnormal_vertex:Wd,displacementmap_pars_vertex:Xd,displacementmap_vertex:qd,emissivemap_fragment:Yd,emissivemap_pars_fragment:Zd,colorspace_fragment:$d,colorspace_pars_fragment:Jd,envmap_fragment:Kd,envmap_common_pars_fragment:jd,envmap_pars_fragment:Qd,envmap_pars_vertex:ef,envmap_physical_pars_fragment:df,envmap_vertex:tf,fog_vertex:nf,fog_pars_vertex:sf,fog_fragment:rf,fog_pars_fragment:af,gradientmap_pars_fragment:of,lightmap_pars_fragment:lf,lights_lambert_fragment:cf,lights_lambert_pars_fragment:hf,lights_pars_begin:uf,lights_toon_fragment:ff,lights_toon_pars_fragment:pf,lights_phong_fragment:mf,lights_phong_pars_fragment:gf,lights_physical_fragment:xf,lights_physical_pars_fragment:_f,lights_fragment_begin:vf,lights_fragment_maps:yf,lights_fragment_end:Mf,lightprobes_pars_fragment:bf,logdepthbuf_fragment:Sf,logdepthbuf_pars_fragment:Ef,logdepthbuf_pars_vertex:wf,logdepthbuf_vertex:Tf,map_fragment:Af,map_pars_fragment:Rf,map_particle_fragment:Cf,map_particle_pars_fragment:Pf,metalnessmap_fragment:If,metalnessmap_pars_fragment:Lf,morphinstance_vertex:Df,morphcolor_vertex:Nf,morphnormal_vertex:Uf,morphtarget_pars_vertex:Ff,morphtarget_vertex:Of,normal_fragment_begin:Bf,normal_fragment_maps:zf,normal_pars_fragment:kf,normal_pars_vertex:Hf,normal_vertex:Vf,normalmap_pars_fragment:Gf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:Xf,clearcoat_pars_fragment:qf,iridescence_pars_fragment:Yf,opaque_fragment:Zf,packing:$f,premultiplied_alpha_fragment:Jf,project_vertex:Kf,dithering_fragment:jf,dithering_pars_fragment:Qf,roughnessmap_fragment:ep,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:sp,shadowmask_pars_fragment:rp,skinbase_vertex:ap,skinning_pars_vertex:op,skinning_vertex:lp,skinnormal_vertex:cp,specularmap_fragment:hp,specularmap_pars_fragment:up,tonemapping_fragment:dp,tonemapping_pars_fragment:fp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:xp,uv_vertex:_p,worldpos_vertex:vp,background_vert:yp,background_frag:Mp,backgroundCube_vert:bp,backgroundCube_frag:Sp,cube_vert:Ep,cube_frag:wp,depth_vert:Tp,depth_frag:Ap,distance_vert:Rp,distance_frag:Cp,equirect_vert:Pp,equirect_frag:Ip,linedashed_vert:Lp,linedashed_frag:Dp,meshbasic_vert:Np,meshbasic_frag:Up,meshlambert_vert:Fp,meshlambert_frag:Op,meshmatcap_vert:Bp,meshmatcap_frag:zp,meshnormal_vert:kp,meshnormal_frag:Hp,meshphong_vert:Vp,meshphong_frag:Gp,meshphysical_vert:Wp,meshphysical_frag:Xp,meshtoon_vert:qp,meshtoon_frag:Yp,points_vert:Zp,points_frag:$p,shadow_vert:Jp,shadow_frag:Kp,sprite_vert:jp,sprite_frag:Qp},Se={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Kn={basic:{uniforms:rn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:rn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:rn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:rn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:rn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:rn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:rn([Se.points,Se.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:rn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:rn([Se.common,Se.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:rn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:rn([Se.sprite,Se.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:rn([Se.common,Se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:rn([Se.lights,Se.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Kn.physical={uniforms:rn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var oo={r:0,b:0,g:0},em=new Mt,kh=new Ke;kh.set(-1,0,0,0,1,0,0,0,1);function tm(i,e,t,n,s,r){let a=new et(0),o=s===!0?0:1,l,c,u=null,m=0,h=null;function g(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let y=w.backgroundBlurriness>0;R=e.get(R,y)}return R}function _(w){let R=!1,y=g(w);y===null?x(a,o):y&&y.isColor&&(x(y,1),R=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(w,R){let y=g(R);y&&(y.isCubeTexture||y.mapping===rr)?(c===void 0&&(c=new wt(new In(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Xi(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(em.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kh),c.material.toneMapped=ft.getTransfer(y.colorSpace)!==_t,(u!==y||m!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,m=y.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new wt(new qn(2,2),new Yt({name:"BackgroundMaterial",uniforms:Xi(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=ft.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||m!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,m=y.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function x(w,R){w.getRGB(oo,El(i)),t.buffers.color.setClear(oo.r,oo.g,oo.b,R,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,x(a,o)},render:_,addToRenderList:M,dispose:d}}function nm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(F,B,H,I,G){let Y=!1,q=m(F,I,H,B);r!==q&&(r=q,c(r.object)),Y=g(F,I,H,G),Y&&_(F,I,H,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(F,B,H,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function m(F,B,H,I){let G=I.wireframe===!0,Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);let q=F.isInstancedMesh===!0?F.id:0,se=Y[q];se===void 0&&(se={},Y[q]=se);let X=se[H.id];X===void 0&&(X={},se[H.id]=X);let K=X[G];return K===void 0&&(K=h(l()),X[G]=K),K}function h(F){let B=[],H=[],I=[];for(let G=0;G<t;G++)B[G]=0,H[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:I,object:F,attributes:{},index:null}}function g(F,B,H,I){let G=r.attributes,Y=B.attributes,q=0,se=H.getAttributes();for(let X in se)if(se[X].location>=0){let re=G[X],Le=Y[X];if(Le===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(Le=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(Le=F.instanceColor)),re===void 0||re.attribute!==Le||Le&&re.data!==Le.data)return!0;q++}return r.attributesNum!==q||r.index!==I}function _(F,B,H,I){let G={},Y=B.attributes,q=0,se=H.getAttributes();for(let X in se)if(se[X].location>=0){let re=Y[X];re===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));let Le={};Le.attribute=re,re&&re.data&&(Le.data=re.data),G[X]=Le,q++}r.attributes=G,r.attributesNum=q,r.index=I}function M(){let F=r.newAttributes;for(let B=0,H=F.length;B<H;B++)F[B]=0}function x(F){d(F,0)}function d(F,B){let H=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;H[F]=1,I[F]===0&&(i.enableVertexAttribArray(F),I[F]=1),G[F]!==B&&(i.vertexAttribDivisor(F,B),G[F]=B)}function w(){let F=r.newAttributes,B=r.enabledAttributes;for(let H=0,I=B.length;H<I;H++)B[H]!==F[H]&&(i.disableVertexAttribArray(H),B[H]=0)}function R(F,B,H,I,G,Y,q){q===!0?i.vertexAttribIPointer(F,B,H,G,Y):i.vertexAttribPointer(F,B,H,I,G,Y)}function y(F,B,H,I){M();let G=I.attributes,Y=H.getAttributes(),q=B.defaultAttributeValues;for(let se in Y){let X=Y[se];if(X.location>=0){let K=G[se];if(K===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(K=F.instanceColor)),K!==void 0){let re=K.normalized,Le=K.itemSize,ee=e.get(K);if(ee===void 0)continue;let De=ee.buffer,Ue=ee.type,at=ee.bytesPerElement,$=Ue===i.INT||Ue===i.UNSIGNED_INT||K.gpuType===ba;if(K.isInterleavedBufferAttribute){let Q=K.data,Re=Q.stride,Fe=K.offset;if(Q.isInstancedInterleavedBuffer){for(let be=0;be<X.locationSize;be++)d(X.location+be,Q.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let be=0;be<X.locationSize;be++)x(X.location+be);i.bindBuffer(i.ARRAY_BUFFER,De);for(let be=0;be<X.locationSize;be++)R(X.location+be,Le/X.locationSize,Ue,re,Re*at,(Fe+Le/X.locationSize*be)*at,$)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)d(X.location+Q,K.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<X.locationSize;Q++)x(X.location+Q);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Q=0;Q<X.locationSize;Q++)R(X.location+Q,Le/X.locationSize,Ue,re,Le*at,Le/X.locationSize*Q*at,$)}}else if(q!==void 0){let re=q[se];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(X.location,re);break;case 3:i.vertexAttrib3fv(X.location,re);break;case 4:i.vertexAttrib4fv(X.location,re);break;default:i.vertexAttrib1fv(X.location,re)}}}}w()}function E(){S();for(let F in n){let B=n[F];for(let H in B){let I=B[H];for(let G in I){let Y=I[G];for(let q in Y)u(Y[q].object),delete Y[q];delete I[G]}}delete n[F]}}function b(F){if(n[F.id]===void 0)return;let B=n[F.id];for(let H in B){let I=B[H];for(let G in I){let Y=I[G];for(let q in Y)u(Y[q].object),delete Y[q];delete I[G]}}delete n[F.id]}function P(F){for(let B in n){let H=n[B];for(let I in H){let G=H[I];if(G[F.id]===void 0)continue;let Y=G[F.id];for(let q in Y)u(Y[q].object),delete Y[q];delete G[F.id]}}}function v(F){for(let B in n){let H=n[B],I=F.isInstancedMesh===!0?F.id:0,G=H[I];if(G!==void 0){for(let Y in G){let q=G[Y];for(let se in q)u(q[se].object),delete q[se];delete G[Y]}delete H[I],Object.keys(H).length===0&&delete n[B]}}}function S(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:x,disableUnusedAttributes:w}}function im(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let g=0;g<u;g++)h+=c[g];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==un&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==nn&&P!==_n&&!v&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let m=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:y,maxSamples:E,samples:b}}function rm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new gn,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){let g=m.length!==0||h||n!==0||s;return s=h,n=m.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){t=u(m,h,0)},this.setState=function(m,h,g){let _=m.clippingPlanes,M=m.clipIntersection,x=m.clipShadows,d=i.get(m);if(!s||_===null||_.length===0||r&&!x)r?u(null):c();else{let w=r?0:n,R=w*4,y=d.clippingState||null;l.value=y,y=u(_,h,R,g);for(let E=0;E!==R;++E)y[E]=t[E];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(m,h,g,_){let M=m!==null?m.length:0,x=null;if(M!==0){if(x=l.value,_!==!0||x===null){let d=g+M*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(x===null||x.length<d)&&(x=new Float32Array(d));for(let R=0,y=g;R!==M;++R,y+=4)a.copy(m[R]).applyMatrix4(w,o),a.normal.toArray(x,y),x[y+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}var Ps=4,am=6,om=20,lm=256,pr=new Yn,_h=new et,Rl=null,Cl=0,Pl=0,Il=!1,cm=new z,qi=new z,Ci=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=cm}=r;Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rl,Cl,Pl),this._renderer.xr.enabled=Il,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:sn,format:un,colorSpace:Hn,depthBuffer:!1},s=vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hm(r)),this._blurMaterial=dm(r,e,t),this._ggxMaterial=um(r,e,t)}return s}_compileMaterial(e){let t=new wt(new tn,e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,n,s,r){let l=new en(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,g=m.toneMapping;m.getClearColor(_h),m.toneMapping=Ln,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new In,new Wn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,x=M.material,d=!1,w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,d=!0):(x.color.copy(_h),d=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));let E=this._cubeSize;Cs(s,y*E,R>2?E:0,E,E),m.setRenderTarget(s),d&&m.render(M,l),m.render(e,l)}m.toneMapping=g,m.autoClear=h,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===wi||e.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,pr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),m=Math.sqrt(c*c-u*u),h=c*1.25,g=m*h,{_lodMax:_}=this,M=this._sizeLods[n],x=3*M*(n>_-Ps?n-_+Ps:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=_-t,Cs(r,x,d,3*M,2*M),s.setRenderTarget(r),s.render(o,pr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Cs(e,x,d,3*M,2*M),s.setRenderTarget(e),s.render(o,pr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],m=3*u*(s>this._lodMax-Ps?s-this._lodMax+Ps:0),h=4*(this._cubeSize-u);Cs(t,m,h,3*u,2*u),a.setRenderTarget(t),a.render(l,pr)}};function hm(i){let e=[],t=[],n=i,s=i-Ps+1+am;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,h=6,g=3,_=new Float32Array(g*h*m),M=new Float32Array(g*h*m);for(let d=0;d<m;d++){let w=d%3*2/3-1,R=d>2?0:-1,y=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];_.set(y,g*h*d);for(let E=0;E<h;E++){let b=u[E*2]*2-1,P=u[E*2+1]*2-1;d===0?qi.set(1,P,b):d===1?qi.set(-b,1,-P):d===2?qi.set(-b,P,1):d===3?qi.set(-1,P,-b):d===4?qi.set(-b,-1,P):qi.set(b,P,-1),qi.toArray(M,(d*h+E)*g)}}let x=new tn;x.setAttribute("position",new wn(_,g)),x.setAttribute("outputDirection",new wn(M,g)),t.push(new wt(x,null)),n>Ps&&n--}return{lodMeshes:t,sizeLods:e}}function vh(i,e,t){let n=new Gt(i,e,t);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function um(i,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function dm(i,e,t){return new Yt({name:"SphericalGaussianBlur",defines:{SAMPLES:om,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:uo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function yh(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Mh(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function uo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var co=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Js(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new In(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:$n});r.uniforms.tEquirect.value=t;let a=new wt(s,r),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=It),new ga(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function fm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,g=!1){return h==null?null:g?a(h):r(h)}function r(h){if(h&&h.isTexture){let g=h.mapping;if(g===va||g===ya)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let M=new co(_.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let g=h.mapping,_=g===va||g===ya,M=g===wi||g===Wi;if(_||M){let x=t.get(h),d=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Ci(i)),x=_?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{let w=h.image;return _&&w&&w.height>0||M&&w&&l(w)?(n===null&&(n=new Ci(i)),x=_?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function o(h,g){return g===va?h.mapping=wi:g===ya&&(h.mapping=Wi),h}function l(h){let g=0,_=6;for(let M=0;M<_;M++)h[M]!==void 0&&g++;return g===_}function c(h){let g=h.target;g.removeEventListener("dispose",c);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function u(h){let g=h.target;g.removeEventListener("dispose",u);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function pm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ki("WebGLRenderer: "+n+" extension not supported."),s}}}function mm(i,e,t,n){let s={},r=new WeakMap;function a(m){let h=m.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let g=r.get(h);g&&(e.remove(g),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(m,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(m){let h=m.attributes;for(let g in h)e.update(h[g],i.ARRAY_BUFFER)}function c(m){let h=[],g=m.index,_=m.attributes.position,M=0;if(_===void 0)return;if(g!==null){let w=g.array;M=g.version;for(let R=0,y=w.length;R<y;R+=3){let E=w[R+0],b=w[R+1],P=w[R+2];h.push(E,b,b,P,P,E)}}else{let w=_.array;M=_.version;for(let R=0,y=w.length/3-1;R<y;R+=3){let E=R+0,b=R+1,P=R+2;h.push(E,b,b,P,P,E)}}let x=new(_.count>=65535?$s:Zs)(h,1);x.version=M;let d=r.get(m);d&&e.remove(d),r.set(m,x)}function u(m){let h=r.get(m);if(h){let g=m.index;g!==null&&h.version<g.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:u}}function gm(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,h){i.drawElements(n,h,r,m*a),t.update(h,n,1)}function c(m,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,m*a,g),t.update(h,n,g))}function u(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,g);let M=0;for(let x=0;x<g;x++)M+=h[x];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function xm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _m(i,e,t){let n=new WeakMap,s=new bt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==m){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],R=0;g===!0&&(R=1),_===!0&&(R=2),M===!0&&(R=3);let y=o.attributes.position.count*R,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*E*4*m),P=new Ys(b,y,E,m);P.type=_n,P.needsUpdate=!0;let v=R*4;for(let N=0;N<m;N++){let F=x[N],B=d[N],H=w[N],I=y*E*4*N;for(let G=0;G<F.count;G++){let Y=G*v;g===!0&&(s.fromBufferAttribute(F,G),b[I+Y+0]=s.x,b[I+Y+1]=s.y,b[I+Y+2]=s.z,b[I+Y+3]=0),_===!0&&(s.fromBufferAttribute(B,G),b[I+Y+4]=s.x,b[I+Y+5]=s.y,b[I+Y+6]=s.z,b[I+Y+7]=0),M===!0&&(s.fromBufferAttribute(H,G),b[I+Y+8]=s.x,b[I+Y+9]=s.y,b[I+Y+10]=s.z,b[I+Y+11]=H.itemSize===4?s.w:1)}}h={count:m,texture:P,size:new ye(y,E)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let M=0;M<c.length;M++)g+=c[M];let _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function vm(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,m=c.geometry,h=e.get(c,m);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var ym={[ll]:"LINEAR_TONE_MAPPING",[cl]:"REINHARD_TONE_MAPPING",[hl]:"CINEON_TONE_MAPPING",[ul]:"ACES_FILMIC_TONE_MAPPING",[sr]:"AGX_TONE_MAPPING",[fl]:"NEUTRAL_TONE_MAPPING",[dl]:"CUSTOM_TONE_MAPPING"};function Mm(i,e,t,n,s,r){let a=new Gt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new tn;c.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Nt([0,2,0,0,2,0],2));let u=new ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new wt(c,u),h=new Yn(-1,1,1,-1,0,1),g=null,_=null,M=!1,x,d=null,w=[],R=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let b=0;b<w.length;b++){let P=w[b];P.setSize&&P.setSize(y,E)}},this.setEffects=function(y){w=y,R=w.length>0&&w[0].isRenderPass===!0;let E=a.width,b=a.height;w.length>0&&o===null&&(o=new Gt(E,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(E,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<w.length;P++){let v=w[P];v.setSize&&v.setSize(E,b)}},this.begin=function(y,E){if(M||y.toneMapping===Ln&&w.length===0)return!1;if(d=E,E!==null){let b=E.width,P=E.height;(a.width!==b||a.height!==P)&&this.setSize(b,P)}return R===!1&&y.setRenderTarget(a),x=y.toneMapping,y.toneMapping=Ln,!0},this.hasRenderPass=function(){return R},this.end=function(y,E){y.toneMapping=x,M=!0;let b=a,P=o;for(let v=0;v<w.length;v++){let S=w[v];S.enabled!==!1&&(S.render(y,P,b,E),S.needsSwap!==!1&&(b=P,P=P===o?l:o))}if(g!==y.outputColorSpace||_!==y.toneMapping){g=y.outputColorSpace,_=y.toneMapping,u.defines={},ft.getTransfer(g)===_t&&(u.defines.SRGB_TRANSFER="");let v=ym[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(d),y.render(m,h),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Hh=new dn,Nl=new Xn(1,1),Vh=new Ys,Gh=new Qr,Wh=new Js,bh=[],Sh=[],Eh=new Float32Array(16),wh=new Float32Array(9),Th=new Float32Array(4);function Ls(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fo(i,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Tm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),Xt(t,n)}}function Am(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;wh.set(n),i.uniformMatrix3fv(this.addr,!1,wh),Xt(t,n)}}function Rm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),Xt(t,n)}}function Cm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Dm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Om(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nl.compareFunction=t.isReversedDepthBuffer()?ao:ro,r=Nl):r=Hh,t.setTexture2D(e||r,s)}function Bm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gh,s)}function zm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wh,s)}function km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vh,s)}function Hm(i){switch(i){case 5126:return bm;case 35664:return Sm;case 35665:return Em;case 35666:return wm;case 35674:return Tm;case 35675:return Am;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Pm;case 35668:case 35672:return Im;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Nm;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return km}}function Vm(i,e){i.uniform1fv(this.addr,e)}function Gm(i,e){let t=Ls(e,this.size,2);i.uniform2fv(this.addr,t)}function Wm(i,e){let t=Ls(e,this.size,3);i.uniform3fv(this.addr,t)}function Xm(i,e){let t=Ls(e,this.size,4);i.uniform4fv(this.addr,t)}function qm(i,e){let t=Ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ym(i,e){let t=Ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zm(i,e){let t=Ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $m(i,e){i.uniform1iv(this.addr,e)}function Jm(i,e){i.uniform2iv(this.addr,e)}function Km(i,e){i.uniform3iv(this.addr,e)}function jm(i,e){i.uniform4iv(this.addr,e)}function Qm(i,e){i.uniform1uiv(this.addr,e)}function e0(i,e){i.uniform2uiv(this.addr,e)}function t0(i,e){i.uniform3uiv(this.addr,e)}function n0(i,e){i.uniform4uiv(this.addr,e)}function i0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Nl:a=Hh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function s0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Gh,r[a])}function r0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Wh,r[a])}function a0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vh,r[a])}function o0(i){switch(i){case 5126:return Vm;case 35664:return Gm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return jm;case 5125:return Qm;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}var Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hm(t.type)}},Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o0(t.type)}},Ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Ah(i,e){i.seq.push(e),i.map[e.id]=e}function l0(i,e,t){let n=i.name,s=n.length;for(Ll.lastIndex=0;;){let r=Ll.exec(n),a=Ll.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ah(t,c===void 0?new Ul(o,i,e):new Fl(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new Ol(o),Ah(t,m)),t=m}}}var Is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);l0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Rh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var c0=37297,h0=0;function u0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ch=new Ke;function d0(i){ft._getMatrix(Ch,ft.workingColorSpace,i);let e=`mat3( ${Ch.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Xs:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ph(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+u0(i.getShaderSource(e),o)}else return r}function f0(i,e){let t=d0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var p0={[ll]:"Linear",[cl]:"Reinhard",[hl]:"Cineon",[ul]:"ACESFilmic",[sr]:"AgX",[fl]:"Neutral",[dl]:"Custom"};function m0(i,e){let t=p0[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lo=new z;function g0(){ft.getLuminanceCoefficients(lo);let i=lo.x.toFixed(4),e=lo.y.toFixed(4),t=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function _0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function v0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function gr(i){return i!==""}function Ih(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(i){return i.replace(y0,b0)}var M0=new Map;function b0(i,e){let t=rt[e];if(t===void 0){let n=M0.get(e);if(n!==void 0)t=rt[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bl(t)}var S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(S0,E0)}function E0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var w0={[nr]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function T0(i){return w0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var A0={[wi]:"ENVMAP_TYPE_CUBE",[Wi]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE_UV"};function R0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":A0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var C0={[Wi]:"ENVMAP_MODE_REFRACTION"};function P0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":C0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var I0={[ol]:"ENVMAP_BLENDING_MULTIPLY",[Kc]:"ENVMAP_BLENDING_MIX",[jc]:"ENVMAP_BLENDING_ADD"};function L0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":I0[i.combine]||"ENVMAP_BLENDING_NONE"}function D0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function N0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=T0(t),c=R0(t),u=P0(t),m=L0(t),h=D0(t),g=x0(t),_=_0(r),M=s.createProgram(),x,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gr).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gr).join(`
`),d.length>0&&(d+=`
`)):(x=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),d=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ln?m0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,f0("linearToOutputTexel",t.outputColorSpace),g0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),a=Bl(a),a=Ih(a,t),a=Lh(a,t),o=Bl(o),o=Ih(o,t),o=Lh(o,t),a=Dh(a),o=Dh(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",t.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let R=w+x+a,y=w+d+o,E=Rh(s,s.VERTEX_SHADER,R),b=Rh(s,s.FRAGMENT_SHADER,y);s.attachShader(M,E),s.attachShader(M,b),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(F){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(M)||"",H=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(b)||"",G=B.trim(),Y=H.trim(),q=I.trim(),se=!0,X=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,b);else{let K=Ph(s,E,"vertex"),re=Ph(s,b,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+G+`
`+K+`
`+re)}else G!==""?We("WebGLProgram: Program Info Log:",G):(Y===""||q==="")&&(X=!1);X&&(F.diagnostics={runnable:se,programLog:G,vertexShader:{log:Y,prefix:x},fragmentShader:{log:q,prefix:d}})}s.deleteShader(E),s.deleteShader(b),v=new Is(s,M),S=v0(s,M)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(M,c0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=b,this}var U0=0,zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kl(e),t.set(e,n)),n}},kl=class{constructor(e){this.id=U0++,this.code=e,this.usedTimes=0}};function F0(i){return i===Ri||i===dr||i===fr}function O0(i,e,t,n,s,r){let a=new xs,o=new zl,l=new Set,c=[],u=new Map,m=n.logarithmicDepthBuffer,h=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,S,N,F,B,H){let I=F.fog,G=B.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,se=e.get(v.envMap||Y,q),X=se&&se.mapping===rr?se.image.height:null,K=g[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Le=re!==void 0?re.length:0,ee=0;G.morphAttributes.position!==void 0&&(ee=1),G.morphAttributes.normal!==void 0&&(ee=2),G.morphAttributes.color!==void 0&&(ee=3);let De,Ue,at,$;if(K){let ht=Kn[K];De=ht.vertexShader,Ue=ht.fragmentShader}else{De=v.vertexShader,Ue=v.fragmentShader;let ht=o.getVertexShaderStage(v),ot=o.getFragmentShaderStage(v);o.update(v,ht,ot),at=ht.id,$=ot.id}let Q=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,be=B.isBatchedMesh===!0,Oe=!!v.map,Tt=!!v.matcap,ke=!!se,Je=!!v.aoMap,gt=!!v.lightMap,Ve=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,St=!!v.displacementMap,Lt=!!v.emissiveMap,mt=!!v.metalnessMap,Et=!!v.roughnessMap,O=v.anisotropy>0,Pt=v.clearcoat>0,Ge=v.dispersion>0,A=v.retroreflectivity>0,p=v.iridescence>0,k=v.sheen>0,W=v.transmission>0,Z=O&&!!v.anisotropyMap,oe=Pt&&!!v.clearcoatMap,fe=Pt&&!!v.clearcoatNormalMap,J=Pt&&!!v.clearcoatRoughnessMap,te=p&&!!v.iridescenceMap,ve=p&&!!v.iridescenceThicknessMap,Ee=k&&!!v.sheenColorMap,me=k&&!!v.sheenRoughnessMap,_e=!!v.specularMap,Pe=!!v.specularColorMap,we=!!v.specularIntensityMap,qe=W&&!!v.transmissionMap,U=W&&!!v.thicknessMap,xe=!!v.gradientMap,j=!!v.alphaMap,de=v.alphaTest>0,Me=!!v.alphaHash,ie=!!v.extensions,Te=Ln;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Te=i.toneMapping);let Ce={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:De,fragmentShader:Ue,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:be,batchingColor:be&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Oe,matcap:Tt,envMap:ke,envMapMode:ke&&se.mapping,envMapCubeUVHeight:X,aoMap:Je,lightMap:gt,bumpMap:Ve,normalMap:xt,displacementMap:St,emissiveMap:Lt,normalMapObjectSpace:xt&&v.normalMapType===th,normalMapTangentSpace:xt&&v.normalMapType===so,packedNormalMap:xt&&v.normalMapType===so&&F0(v.normalMap.format),metalnessMap:mt,roughnessMap:Et,anisotropy:O,anisotropyMap:Z,clearcoat:Pt,clearcoatMap:oe,clearcoatNormalMap:fe,clearcoatRoughnessMap:J,dispersion:Ge,retroreflection:A,iridescence:p,iridescenceMap:te,iridescenceThicknessMap:ve,sheen:k,sheenColorMap:Ee,sheenRoughnessMap:me,specularMap:_e,specularColorMap:Pe,specularIntensityMap:we,transmission:W,transmissionMap:qe,thicknessMap:U,gradientMap:xe,opaque:v.transparent===!1&&v.blending===ws&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:de,alphaHash:Me,combine:v.combine,mapUv:Oe&&_(v.map.channel),aoMapUv:Je&&_(v.aoMap.channel),lightMapUv:gt&&_(v.lightMap.channel),bumpMapUv:Ve&&_(v.bumpMap.channel),normalMapUv:xt&&_(v.normalMap.channel),displacementMapUv:St&&_(v.displacementMap.channel),emissiveMapUv:Lt&&_(v.emissiveMap.channel),metalnessMapUv:mt&&_(v.metalnessMap.channel),roughnessMapUv:Et&&_(v.roughnessMap.channel),anisotropyMapUv:Z&&_(v.anisotropyMap.channel),clearcoatMapUv:oe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(v.sheenRoughnessMap.channel),specularMapUv:_e&&_(v.specularMap.channel),specularColorMapUv:Pe&&_(v.specularColorMap.channel),specularIntensityMapUv:we&&_(v.specularIntensityMap.channel),transmissionMapUv:qe&&_(v.transmissionMap.channel),thicknessMapUv:U&&_(v.thicknessMap.channel),alphaMapUv:j&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(xt||O),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Oe||j),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Re,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:ee,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Oe&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:Lt&&v.emissiveMap.isVideoTexture===!0&&ft.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===hn,flipSided:v.side===Ot,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function x(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(d(S,v),w(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function d(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function w(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){let S=g[v.type],N;if(S){let F=Kn[S];N=mh.clone(F.uniforms)}else N=v.uniforms;return N}function y(v,S){let N=u.get(S);return N!==void 0?++N.usedTimes:(N=new N0(i,S,v,s),c.push(N),u.set(S,N)),N}function E(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:R,acquireProgram:y,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:P}}function B0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function z0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Uh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,_,M,x,d){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:g,material:_,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:x,group:d},i[e]=w):(w.id=h.id,w.object=h,w.geometry=g,w.material=_,w.materialVariant=a(h),w.groupOrder=M,w.renderOrder=h.renderOrder,w.z=x,w.group=d),e++,w}function l(h,g,_,M,x,d,w){w.reversedDepth===!0&&(x=-x);let R=o(h,g,_,M,x,d);_.transmission>0?n.push(R):_.transparent===!0?s.push(R):t.push(R)}function c(h,g,_,M,x,d){let w=o(h,g,_,M,x,d);_.transmission>0?n.unshift(w):_.transparent===!0?s.unshift(w):t.unshift(w)}function u(h,g){t.length>1&&t.sort(h||z0),n.length>1&&n.sort(g||Uh),s.length>1&&s.sort(g||Uh)}function m(){for(let h=e,g=i.length;h<g;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:u}}function k0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Fh,i.set(n,[a])):s>=r.length?(a=new Fh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function H0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new et};break;case"SpotLight":t={position:new z,direction:new z,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function V0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var G0=0;function W0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function X0(i){let e=new H0,t=V0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Mt,a=new Mt;function o(c){let u=0,m=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let g=0,_=0,M=0,x=0,d=0,w=0,R=0,y=0,E=0,b=0,P=0,v=0,S=0,N=0;c.sort(W0);for(let B=0,H=c.length;B<H;B++){let I=c[B],G=I.color,Y=I.intensity,q=I.distance,se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ri?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=G.r*Y,m+=G.g*Y,h+=G.b*Y;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],Y);N++}else if(I.isSunLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,re=t.get(I);re.shadowIntensity=K.intensity,re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[_]=re,n.sunShadowMap[_]=se;let Le=K.getViewportCount();for(let ee=0;ee<Le;ee++)n.sunShadowMatrix[M+ee]=K.getMatrix(ee),n.sunShadowCascade[M+ee]=K._cascadeData[ee];M+=Le,_++}n.sun[g]=X,g++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,re=t.get(I);re.shadowIntensity=K.intensity,re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,n.directionalShadow[x]=re,n.directionalShadowMap[x]=se,n.directionalShadowMatrix[x]=I.shadow.matrix,E++}n.directional[x]=X,x++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(G).multiplyScalar(Y),X.distance=q,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[w]=X;let K=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,K.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[w]=K.matrix,I.castShadow){let re=t.get(I);re.shadowIntensity=K.intensity,re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,n.spotShadow[w]=re,n.spotShadowMap[w]=se,P++}w++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(G).multiplyScalar(Y),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=X,R++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let K=I.shadow,re=t.get(I);re.shadowIntensity=K.intensity,re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,re.shadowCameraNear=K.camera.near,re.shadowCameraFar=K.camera.far,n.pointShadow[d]=re,n.pointShadowMap[d]=se,n.pointShadowMatrix[d]=I.shadow.matrix,b++}n.point[d]=X,d++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(Y),X.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[y]=X,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=h;let F=n.hash;(F.sunLength!==g||F.directionalLength!==x||F.pointLength!==d||F.spotLength!==w||F.rectAreaLength!==R||F.hemiLength!==y||F.numSunShadows!==_||F.numDirectionalShadows!==E||F.numPointShadows!==b||F.numSpotShadows!==P||F.numSpotMaps!==v||F.numLightProbes!==N)&&(n.sun.length=g,n.directional.length=x,n.spot.length=w,n.rectArea.length=R,n.point.length=d,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+v-S,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=N,F.sunLength=g,F.directionalLength=x,F.pointLength=d,F.spotLength=w,F.rectAreaLength=R,F.hemiLength=y,F.numSunShadows=_,F.numDirectionalShadows=E,F.numPointShadows=b,F.numSpotShadows=P,F.numSpotMaps=v,F.numLightProbes=N,n.version=G0++)}function l(c,u){let m=0,h=0,g=0,_=0,M=0,x=0,d=u.matrixWorldInverse;for(let w=0,R=c.length;w<R;w++){let y=c[w];if(y.isSunLight){let E=n.sun[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),m++}else if(y.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),h++}else if(y.isSpotLight){let E=n.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),_++}else if(y.isRectAreaLight){let E=n.rectArea[M];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let E=n.point[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),g++}else if(y.isHemisphereLight){let E=n.hemi[x];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),x++}}}return{setup:o,setupView:l,state:n}}function Oh(i){let e=new X0(i),t=[],n=[],s=[];function r(h){m.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function q0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Oh(i),e.set(s,[o])):r>=a.length?(o=new Oh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`,$0=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],J0=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Bh=new Mt,mr=new z,Dl=new z;function K0(i,e,t){let n=new ys,s=new ye,r=new ye,a=new bt,o=new na,l=new ia,c={},u=t.maxTextureSize,m={[Zn]:Ot,[Ot]:Zn,[hn]:hn},h=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Y0,fragmentShader:Z0}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let _=new tn;_.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new wt(_,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let d=this.type;this.render=function(b,P,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===Nc&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nr);let S=i.getRenderTarget(),N=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),B=i.state;B.setBlending($n),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=d!==this.type;H&&P.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=b.length;I<G;I++){let Y=b[I],q=Y.shadow;if(q===void 0){We("WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let se=q.getFrameExtents();s.multiply(se),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,q.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=X,q.map===null||H===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Es){if(Y.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Gt(s.x,s.y,{format:Ri,type:sn,minFilter:It,magFilter:It,generateMipmaps:!1}),q.map.texture.name=Y.name+".shadowMap",q.map.depthTexture=new Xn(s.x,s.y,_n),q.map.depthTexture.name=Y.name+".shadowMapDepth",q.map.depthTexture.format=kn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ut,q.map.depthTexture.magFilter=Ut}else Y.isPointLight?(q.map=new co(s.x),q.map.depthTexture=new ea(s.x,Dn)):(q.map=new Gt(s.x,s.y),q.map.depthTexture=new Xn(s.x,s.y,Dn)),q.map.depthTexture.name=Y.name+".shadowMap",q.map.depthTexture.format=kn,this.type===nr?(q.map.depthTexture.compareFunction=X?ao:ro,q.map.depthTexture.minFilter=It,q.map.depthTexture.magFilter=It):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ut,q.map.depthTexture.magFilter=Ut);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let K=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Y.isPointLight!==!0&&q.updateMatrices(Y,v);for(let re=0;re<K;re++){let Le=q.getCamera(re);if(Y.isPointLight){let ee=q.camera,De=q.matrix,Ue=Y.distance||ee.far;Ue!==ee.far&&(ee.far=Ue,ee.updateProjectionMatrix()),mr.setFromMatrixPosition(Y.matrixWorld),ee.position.copy(mr),Dl.copy(ee.position),Dl.add($0[re]),ee.up.copy(J0[re]),ee.lookAt(Dl),ee.updateMatrixWorld(),De.makeTranslation(-mr.x,-mr.y,-mr.z),Bh.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Bh,ee.coordinateSystem,ee.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,re),i.clear();else{re===0&&(i.setRenderTarget(q.map),i.clear());let ee=q.getViewport(re);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),B.viewport(a)}n=q.getFrustum(re),y(P,v,Le,Y,this.type)}q.isPointLightShadow!==!0&&this.type===Es&&w(q,v),q.needsUpdate=!1}d=this.type,x.needsUpdate=!1,i.setRenderTarget(S,N,F)};function w(b,P){let v=e.update(M);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null?b.mapPass=new Gt(s.x,s.y,{format:Ri,type:sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(P,null,v,h,M,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value.set(b.map.width,b.map.height),g.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(P,null,v,g,M,null)}function R(b,P,v,S){let N=null,F=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)N=F;else if(N=v.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=N.uuid,H=P.uuid,I=c[B];I===void 0&&(I={},c[B]=I);let G=I[H];G===void 0&&(G=N.clone(),I[H]=G,P.addEventListener("dispose",E)),N=G}if(N.visible=P.visible,N.wireframe=P.wireframe,S===Es?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:m[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let B=i.properties.get(N);B.light=v}return N}function y(b,P,v,S,N){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===Es)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let H=e.update(b),I=b.material;if(Array.isArray(I)){let G=H.groups;for(let Y=0,q=G.length;Y<q;Y++){let se=G[Y],X=I[se.materialIndex];if(X&&X.visible){let K=R(b,X,S,N);b.onBeforeShadow(i,b,P,v,H,K,se),i.renderBufferDirect(v,null,H,K,b,se),b.onAfterShadow(i,b,P,v,H,K,se)}}}else if(I.visible){let G=R(b,I,S,N);b.onBeforeShadow(i,b,P,v,H,G,null),i.renderBufferDirect(v,null,H,G,b,null),b.onAfterShadow(i,b,P,v,H,G,null)}}let B=b.children;for(let H=0,I=B.length;H<I;H++)y(B[H],P,v,S,N)}function E(b){b.target.removeEventListener("dispose",E);for(let v in c){let S=c[v],N=b.target.uuid;N in S&&(S[N].dispose(),delete S[N])}}}function j0(i,e){function t(){let U=!1,xe=new bt,j=null,de=new bt(0,0,0,0);return{setMask:function(Me){j!==Me&&!U&&(i.colorMask(Me,Me,Me,Me),j=Me)},setLocked:function(Me){U=Me},setClear:function(Me,ie,Te,Ce,ht){ht===!0&&(Me*=Ce,ie*=Ce,Te*=Ce),xe.set(Me,ie,Te,Ce),de.equals(xe)===!1&&(i.clearColor(Me,ie,Te,Ce),de.copy(xe))},reset:function(){U=!1,j=null,de.set(-1,0,0,0)}}}function n(){let U=!1,xe=!1,j=null,de=null,Me=null;return{setReversed:function(ie){if(xe!==ie){let Te=e.get("EXT_clip_control");ie?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),xe=ie;let Ce=Me;Me=null,this.setClear(Ce)}},getReversed:function(){return xe},setTest:function(ie){ie?Q(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(ie){j!==ie&&!U&&(i.depthMask(ie),j=ie)},setFunc:function(ie){if(xe&&(ie=fh[ie]),de!==ie){switch(ie){case Hr:i.depthFunc(i.NEVER);break;case Vr:i.depthFunc(i.ALWAYS);break;case Gr:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Wr:i.depthFunc(i.EQUAL);break;case Xr:i.depthFunc(i.GEQUAL);break;case qr:i.depthFunc(i.GREATER);break;case Yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=ie}},setLocked:function(ie){U=ie},setClear:function(ie){Me!==ie&&(Me=ie,xe&&(ie=1-ie),i.clearDepth(ie))},reset:function(){U=!1,j=null,de=null,Me=null,xe=!1}}}function s(){let U=!1,xe=null,j=null,de=null,Me=null,ie=null,Te=null,Ce=null,ht=null;return{setTest:function(ot){U||(ot?Q(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(ot){xe!==ot&&!U&&(i.stencilMask(ot),xe=ot)},setFunc:function(ot,Dt,Jt){(j!==ot||de!==Dt||Me!==Jt)&&(i.stencilFunc(ot,Dt,Jt),j=ot,de=Dt,Me=Jt)},setOp:function(ot,Dt,Jt){(ie!==ot||Te!==Dt||Ce!==Jt)&&(i.stencilOp(ot,Dt,Jt),ie=ot,Te=Dt,Ce=Jt)},setLocked:function(ot){U=ot},setClear:function(ot){ht!==ot&&(i.clearStencil(ot),ht=ot)},reset:function(){U=!1,xe=null,j=null,de=null,Me=null,ie=null,Te=null,Ce=null,ht=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},m={},h={},g=new WeakMap,_=[],M=null,x=!1,d=null,w=null,R=null,y=null,E=null,b=null,P=null,v=new et(0,0,0),S=0,N=!1,F=null,B=null,H=null,I=null,G=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,se=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=se>=2);let K=null,re={},Le=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),De=new bt().fromArray(Le),Ue=new bt().fromArray(ee);function at(U,xe,j,de){let Me=new Uint8Array(4),ie=i.createTexture();i.bindTexture(U,ie),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<j;Te++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(xe+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ie}let $={};$[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(ds),Ve(!1),xt(tl),Q(i.CULL_FACE),Je($n);function Q(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Re(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Fe(U,xe){return h[U]!==xe?(i.bindFramebuffer(U,xe),h[U]=xe,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function be(U,xe){let j=_,de=!1;if(U){j=g.get(xe),j===void 0&&(j=[],g.set(xe,j));let Me=U.textures;if(j.length!==Me.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Te=Me.length;ie<Te;ie++)j[ie]=i.COLOR_ATTACHMENT0+ie;j.length=Me.length,de=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,de=!0);de&&i.drawBuffers(j)}function Oe(U){return M!==U?(i.useProgram(U),M=U,!0):!1}let Tt={[ci]:i.FUNC_ADD,[Uc]:i.FUNC_SUBTRACT,[Fc]:i.FUNC_REVERSE_SUBTRACT};Tt[Oc]=i.MIN,Tt[Bc]=i.MAX;let ke={[zc]:i.ZERO,[ir]:i.ONE,[kc]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[qc]:i.SRC_ALPHA_SATURATE,[Wc]:i.DST_COLOR,[Vc]:i.DST_ALPHA,[Hc]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[Xc]:i.ONE_MINUS_DST_COLOR,[Gc]:i.ONE_MINUS_DST_ALPHA,[Yc]:i.CONSTANT_COLOR,[Zc]:i.ONE_MINUS_CONSTANT_COLOR,[$c]:i.CONSTANT_ALPHA,[Jc]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(U,xe,j,de,Me,ie,Te,Ce,ht,ot){if(U===$n){x===!0&&(Re(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),U!==_a){if(U!==d||ot!==N){if((w!==ci||E!==ci)&&(i.blendEquation(i.FUNC_ADD),w=ci,E=ci),ot)switch(U){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",U);break}else switch(U){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",U);break}R=null,y=null,b=null,P=null,v.set(0,0,0),S=0,d=U,N=ot}return}Me=Me||xe,ie=ie||j,Te=Te||de,(xe!==w||Me!==E)&&(i.blendEquationSeparate(Tt[xe],Tt[Me]),w=xe,E=Me),(j!==R||de!==y||ie!==b||Te!==P)&&(i.blendFuncSeparate(ke[j],ke[de],ke[ie],ke[Te]),R=j,y=de,b=ie,P=Te),(Ce.equals(v)===!1||ht!==S)&&(i.blendColor(Ce.r,Ce.g,Ce.b,ht),v.copy(Ce),S=ht),d=U,N=!1}function gt(U,xe){U.side===hn?Re(i.CULL_FACE):Q(i.CULL_FACE);let j=U.side===Ot;xe&&(j=!j),Ve(j),U.blending===ws&&U.transparent===!1?Je($n):Je(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let de=U.stencilWrite;o.setTest(de),de&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(U){F!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),F=U)}function xt(U){U!==Lc?(Q(i.CULL_FACE),U!==B&&(U===tl?i.cullFace(i.BACK):U===Dc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),B=U}function St(U){U!==H&&(q&&i.lineWidth(U),H=U)}function Lt(U,xe,j){U?(Q(i.POLYGON_OFFSET_FILL),(I!==xe||G!==j)&&(I=xe,G=j,a.getReversed()&&(xe=-xe),i.polygonOffset(xe,j))):Re(i.POLYGON_OFFSET_FILL)}function mt(U){U?Q(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function Et(U){U===void 0&&(U=i.TEXTURE0+Y-1),K!==U&&(i.activeTexture(U),K=U)}function O(U,xe,j){j===void 0&&(K===null?j=i.TEXTURE0+Y-1:j=K);let de=re[j];de===void 0&&(de={type:void 0,texture:void 0},re[j]=de),(de.type!==U||de.texture!==xe)&&(K!==j&&(i.activeTexture(j),K=j),i.bindTexture(U,xe||$[U]),de.type=U,de.texture=xe)}function Pt(){let U=re[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ge(){try{i.compressedTexImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function p(){try{i.texSubImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function k(){try{i.texSubImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function oe(){try{i.texStorage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function fe(){try{i.texStorage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function J(){try{i.texImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function ve(U){return m[U]!==void 0?m[U]:i.getParameter(U)}function Ee(U,xe){m[U]!==xe&&(i.pixelStorei(U,xe),m[U]=xe)}function me(U){De.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),De.copy(U))}function _e(U){Ue.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ue.copy(U))}function Pe(U,xe){let j=c.get(xe);j===void 0&&(j=new WeakMap,c.set(xe,j));let de=j.get(U);de===void 0&&(de=i.getUniformBlockIndex(xe,U.name),j.set(U,de))}function we(U,xe){let de=c.get(xe).get(U);l.get(xe)!==de&&(i.uniformBlockBinding(xe,de,U.__bindingPointIndex),l.set(xe,de))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},m={},K=null,re={},h={},g=new WeakMap,_=[],M=null,x=!1,d=null,w=null,R=null,y=null,E=null,b=null,P=null,v=new et(0,0,0),S=0,N=!1,F=null,B=null,H=null,I=null,G=null,De.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:Re,bindFramebuffer:Fe,drawBuffers:be,useProgram:Oe,setBlending:Je,setMaterial:gt,setFlipSided:Ve,setCullFace:xt,setLineWidth:St,setPolygonOffset:Lt,setScissorTest:mt,activeTexture:Et,bindTexture:O,unbindTexture:Pt,compressedTexImage2D:Ge,compressedTexImage3D:A,texImage2D:J,texImage3D:te,pixelStorei:Ee,getParameter:ve,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:oe,texStorage3D:fe,texSubImage2D:p,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:me,viewport:_e,reset:qe}}function Q0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap,m=new Set,h,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,p){return _?new OffscreenCanvas(A,p):qs("canvas")}function x(A,p,k){let W=1,Z=Ge(A);if((Z.width>k||Z.height>k)&&(W=k/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let oe=Math.floor(W*Z.width),fe=Math.floor(W*Z.height);h===void 0&&(h=M(oe,fe));let J=p?M(oe,fe):h;return J.width=oe,J.height=fe,J.getContext("2d").drawImage(A,0,0,oe,fe),We("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+oe+"x"+fe+")."),J}else return"data"in A&&We("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function d(A){return A.generateMipmaps}function w(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,p,k,W,Z,oe=!1){if(A!==null){if(i[A]!==void 0)return i[A];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;W&&(fe=e.get("EXT_texture_norm16"),fe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=p;if(p===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8),k===i.UNSIGNED_SHORT&&fe&&(J=fe.R16_EXT),k===i.SHORT&&fe&&(J=fe.R16_SNORM_EXT)),p===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),p===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8),k===i.UNSIGNED_SHORT&&fe&&(J=fe.RG16_EXT),k===i.SHORT&&fe&&(J=fe.RG16_SNORM_EXT)),p===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),p===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),p===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),p===i.RGB&&(k===i.UNSIGNED_SHORT&&fe&&(J=fe.RGB16_EXT),k===i.SHORT&&fe&&(J=fe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),p===i.RGBA){let te=oe?Xs:ft.getTransfer(Z);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=te===_t?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&fe&&(J=fe.RGBA16_EXT),k===i.SHORT&&fe&&(J=fe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(A,p){let k;return A?p===null||p===Dn||p===As?k=i.DEPTH24_STENCIL8:p===_n?k=i.DEPTH32F_STENCIL8:p===Ts&&(k=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Dn||p===As?k=i.DEPTH_COMPONENT24:p===_n?k=i.DEPTH_COMPONENT32F:p===Ts&&(k=i.DEPTH_COMPONENT16),k}function b(A,p){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==It?Math.log2(Math.max(p.width,p.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?p.mipmaps.length:1}function P(A){let p=A.target;p.removeEventListener("dispose",P),S(p),p.isVideoTexture&&u.delete(p),p.isHTMLTexture&&m.delete(p)}function v(A){let p=A.target;p.removeEventListener("dispose",v),F(p)}function S(A){let p=n.get(A);if(p.__webglInit===void 0)return;let k=A.source,W=g.get(k);if(W){let Z=W[p.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&N(A),Object.keys(W).length===0&&g.delete(k)}n.remove(A)}function N(A){let p=n.get(A);i.deleteTexture(p.__webglTexture);let k=A.source,W=g.get(k);delete W[p.__cacheKey],a.memory.textures--}function F(A){let p=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(p.__webglFramebuffer[W]))for(let Z=0;Z<p.__webglFramebuffer[W].length;Z++)i.deleteFramebuffer(p.__webglFramebuffer[W][Z]);else i.deleteFramebuffer(p.__webglFramebuffer[W]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[W])}else{if(Array.isArray(p.__webglFramebuffer))for(let W=0;W<p.__webglFramebuffer.length;W++)i.deleteFramebuffer(p.__webglFramebuffer[W]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let W=0;W<p.__webglColorRenderbuffer.length;W++)p.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[W]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let k=A.textures;for(let W=0,Z=k.length;W<Z;W++){let oe=n.get(k[W]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(A)}let B=0;function H(){B=0}function I(){return B}function G(A){B=A}function Y(){let A=B;return A>=s.maxTextures&&We("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function q(A){let p=[];return p.push(A.wrapS),p.push(A.wrapT),p.push(A.wrapR||0),p.push(A.magFilter),p.push(A.minFilter),p.push(A.anisotropy),p.push(A.internalFormat),p.push(A.format),p.push(A.type),p.push(A.generateMipmaps),p.push(A.premultiplyAlpha),p.push(A.flipY),p.push(A.unpackAlignment),p.push(A.colorSpace),p.join()}function se(A,p){let k=n.get(A);if(A.isVideoTexture&&O(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let W=A.image;if(W===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(k,A,p);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+p)}function X(A,p){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Re(k,A,p);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+p)}function K(A,p){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Re(k,A,p);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+p)}function re(A,p){let k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Fe(k,A,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+p)}let Le={[Zr]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},ee={[Ut]:i.NEAREST,[Qc]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},De={[ih]:i.NEVER,[lh]:i.ALWAYS,[sh]:i.LESS,[ro]:i.LEQUAL,[rh]:i.EQUAL,[ao]:i.GEQUAL,[ah]:i.GREATER,[oh]:i.NOTEQUAL};function Ue(A,p){if(p.type===_n&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===It||p.magFilter===Ma||p.magFilter===ar||p.magFilter===Ti||p.minFilter===It||p.minFilter===Ma||p.minFilter===ar||p.minFilter===Ti)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Le[p.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Le[p.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Le[p.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ee[p.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ee[p.minFilter]),p.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,De[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Ut||p.minFilter!==ar&&p.minFilter!==Ti||p.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function at(A,p){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,p.addEventListener("dispose",P));let W=p.source,Z=g.get(W);Z===void 0&&(Z={},g.set(W,Z));let oe=q(p);if(oe!==A.__cacheKey){Z[oe]===void 0&&(Z[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[oe].usedTimes++;let fe=Z[A.__cacheKey];fe!==void 0&&(Z[A.__cacheKey].usedTimes--,fe.usedTimes===0&&N(p)),A.__cacheKey=oe,A.__webglTexture=Z[oe].texture}return k}function $(A,p,k){return Math.floor(Math.floor(A/k)/p)}function Q(A,p,k,W){let oe=A.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,k,W,p.data);else{oe.sort((Ee,me)=>Ee.start-me.start);let fe=0;for(let Ee=1;Ee<oe.length;Ee++){let me=oe[fe],_e=oe[Ee],Pe=me.start+me.count,we=$(_e.start,p.width,4),qe=$(me.start,p.width,4);_e.start<=Pe+1&&we===qe&&$(_e.start+_e.count-1,p.width,4)===we?me.count=Math.max(me.count,_e.start+_e.count-me.start):(++fe,oe[fe]=_e)}oe.length=fe+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let Ee=0,me=oe.length;Ee<me;Ee++){let _e=oe[Ee],Pe=Math.floor(_e.start/4),we=Math.ceil(_e.count/4),qe=Pe%p.width,U=Math.floor(Pe/p.width),xe=we,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,qe,U,xe,j,k,W,p.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function Re(A,p,k){let W=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(W=i.TEXTURE_3D);let Z=at(A,p),oe=p.source;t.bindTexture(W,A.__webglTexture,i.TEXTURE0+k);let fe=n.get(oe);if(oe.version!==fe.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let j=ft.getPrimaries(ft.workingColorSpace),de=p.colorSpace===hi?null:ft.getPrimaries(p.colorSpace),Me=p.colorSpace===hi||j===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment);let te=x(p.image,!1,s.maxTextureSize);te=Pt(p,te);let ve=r.convert(p.format,p.colorSpace),Ee=r.convert(p.type),me=y(p.internalFormat,ve,Ee,p.normalized,p.colorSpace,p.isVideoTexture);Ue(W,p);let _e,Pe=p.mipmaps,we=p.isVideoTexture!==!0,qe=fe.__version===void 0||Z===!0,U=oe.dataReady,xe=b(p,te);if(p.isDepthTexture)me=E(p.format===Ai,p.type),qe&&(we?t.texStorage2D(i.TEXTURE_2D,1,me,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,me,te.width,te.height,0,ve,Ee,null));else if(p.isDataTexture)if(Pe.length>0){we&&qe&&t.texStorage2D(i.TEXTURE_2D,xe,me,Pe[0].width,Pe[0].height);for(let j=0,de=Pe.length;j<de;j++)_e=Pe[j],we?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,_e.width,_e.height,ve,Ee,_e.data):t.texImage2D(i.TEXTURE_2D,j,me,_e.width,_e.height,0,ve,Ee,_e.data);p.generateMipmaps=!1}else we?(qe&&t.texStorage2D(i.TEXTURE_2D,xe,me,te.width,te.height),U&&Q(p,te,ve,Ee)):t.texImage2D(i.TEXTURE_2D,0,me,te.width,te.height,0,ve,Ee,te.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){we&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,me,Pe[0].width,Pe[0].height,te.depth);for(let j=0,de=Pe.length;j<de;j++)if(_e=Pe[j],p.format!==un)if(ve!==null)if(we){if(U)if(p.layerUpdates.size>0){let Me=Al(_e.width,_e.height,p.format,p.type);for(let ie of p.layerUpdates){let Te=_e.data.subarray(ie*Me/_e.data.BYTES_PER_ELEMENT,(ie+1)*Me/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ie,_e.width,_e.height,1,ve,Te)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,te.depth,ve,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,me,_e.width,_e.height,te.depth,0,_e.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,te.depth,ve,Ee,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,me,_e.width,_e.height,te.depth,0,ve,Ee,_e.data);p.layerUpdates.size>0&&p.clearLayerUpdates()}else{we&&qe&&t.texStorage2D(i.TEXTURE_2D,xe,me,Pe[0].width,Pe[0].height);for(let j=0,de=Pe.length;j<de;j++)_e=Pe[j],p.format!==un?ve!==null?we?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,j,me,_e.width,_e.height,0,_e.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,_e.width,_e.height,ve,Ee,_e.data):t.texImage2D(i.TEXTURE_2D,j,me,_e.width,_e.height,0,ve,Ee,_e.data)}else if(p.isDataArrayTexture)if(we){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,me,te.width,te.height,te.depth),U)if(p.layerUpdates.size>0){let j=Al(te.width,te.height,p.format,p.type);for(let de of p.layerUpdates){let Me=te.data.subarray(de*j/te.data.BYTES_PER_ELEMENT,(de+1)*j/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,te.width,te.height,1,ve,Ee,Me)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ve,Ee,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,te.width,te.height,te.depth,0,ve,Ee,te.data);else if(p.isData3DTexture)we?(qe&&t.texStorage3D(i.TEXTURE_3D,xe,me,te.width,te.height,te.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ve,Ee,te.data)):t.texImage3D(i.TEXTURE_3D,0,me,te.width,te.height,te.depth,0,ve,Ee,te.data);else if(p.isFramebufferTexture){if(qe)if(we)t.texStorage2D(i.TEXTURE_2D,xe,me,te.width,te.height);else{let j=te.width,de=te.height;for(let Me=0;Me<xe;Me++)t.texImage2D(i.TEXTURE_2D,Me,me,j,de,0,ve,Ee,null),j>>=1,de>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),te.parentNode!==j){j.appendChild(te),m.add(p),j.onpaint=de=>{let Me=de.changedElements;for(let ie of m)Me.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let Me=i.RGBA,ie=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,ie,Te,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(we&&qe){let j=Ge(Pe[0]);t.texStorage2D(i.TEXTURE_2D,xe,me,j.width,j.height)}for(let j=0,de=Pe.length;j<de;j++)_e=Pe[j],we?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ve,Ee,_e):t.texImage2D(i.TEXTURE_2D,j,me,ve,Ee,_e);p.generateMipmaps=!1}else if(we){if(qe){let j=Ge(te);t.texStorage2D(i.TEXTURE_2D,xe,me,j.width,j.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ee,te)}else t.texImage2D(i.TEXTURE_2D,0,me,ve,Ee,te);d(p)&&w(W),fe.__version=oe.version,p.onUpdate&&p.onUpdate(p)}A.__version=p.version}function Fe(A,p,k){if(p.image.length!==6)return;let W=at(A,p),Z=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let oe=n.get(Z);if(Z.version!==oe.__version||W===!0){t.activeTexture(i.TEXTURE0+k);let fe=ft.getPrimaries(ft.workingColorSpace),J=p.colorSpace===hi?null:ft.getPrimaries(p.colorSpace),te=p.colorSpace===hi||fe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ve=p.isCompressedTexture||p.image[0].isCompressedTexture,Ee=p.image[0]&&p.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!ve&&!Ee?me[ie]=x(p.image[ie],!0,s.maxCubemapSize):me[ie]=Ee?p.image[ie].image:p.image[ie],me[ie]=Pt(p,me[ie]);let _e=me[0],Pe=r.convert(p.format,p.colorSpace),we=r.convert(p.type),qe=y(p.internalFormat,Pe,we,p.normalized,p.colorSpace),U=p.isVideoTexture!==!0,xe=oe.__version===void 0||W===!0,j=Z.dataReady,de=b(p,_e);Ue(i.TEXTURE_CUBE_MAP,p);let Me;if(ve){U&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,qe,_e.width,_e.height);for(let ie=0;ie<6;ie++){Me=me[ie].mipmaps;for(let Te=0;Te<Me.length;Te++){let Ce=Me[Te];p.format!==un?Pe!==null?U?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,Ce.width,Ce.height,Pe,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,qe,Ce.width,Ce.height,0,Ce.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,Ce.width,Ce.height,Pe,we,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,qe,Ce.width,Ce.height,0,Pe,we,Ce.data)}}}else{if(Me=p.mipmaps,U&&xe){Me.length>0&&de++;let ie=Ge(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,qe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ee){U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,Pe,we,me[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,qe,me[ie].width,me[ie].height,0,Pe,we,me[ie].data);for(let Te=0;Te<Me.length;Te++){let ht=Me[Te].image[ie].image;U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,ht.width,ht.height,Pe,we,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,qe,ht.width,ht.height,0,Pe,we,ht.data)}}else{U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,we,me[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,qe,Pe,we,me[ie]);for(let Te=0;Te<Me.length;Te++){let Ce=Me[Te];U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,Pe,we,Ce.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,qe,Pe,we,Ce.image[ie])}}}d(p)&&w(i.TEXTURE_CUBE_MAP),oe.__version=Z.version,p.onUpdate&&p.onUpdate(p)}A.__version=p.version}function be(A,p,k,W,Z,oe){let fe=r.convert(k.format,k.colorSpace),J=r.convert(k.type),te=y(k.internalFormat,fe,J,k.normalized,k.colorSpace),ve=n.get(p),Ee=n.get(k);if(Ee.__renderTarget=p,!ve.__hasExternalTextures){let me=Math.max(1,p.width>>oe),_e=Math.max(1,p.height>>oe);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,oe,te,me,_e,p.depth,0,fe,J,null):t.texImage2D(Z,oe,te,me,_e,0,fe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Et(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Z,Ee.__webglTexture,0,mt(p)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Z,Ee.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(A,p,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),p.depthBuffer){let W=p.depthTexture,Z=W&&W.isDepthTexture?W.type:null,oe=E(p.stencilBuffer,Z),fe=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Et(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(p),oe,p.width,p.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(p),oe,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,oe,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,A)}else{let W=p.textures;for(let Z=0;Z<W.length;Z++){let oe=W[Z],fe=r.convert(oe.format,oe.colorSpace),J=r.convert(oe.type),te=y(oe.internalFormat,fe,J,oe.normalized,oe.colorSpace);Et(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(p),te,p.width,p.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(p),te,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,te,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(A,p,k){let W=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(p.depthTexture);if(Z.__renderTarget=p,(!Z.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,p.depthTexture.addEventListener("dispose",P)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,p.depthTexture);let ve=r.convert(p.depthTexture.format),Ee=r.convert(p.depthTexture.type),me;p.depthTexture.format===kn?me=i.DEPTH_COMPONENT24:p.depthTexture.format===Ai&&(me=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,me,p.width,p.height,0,ve,Ee,null)}}else se(p.depthTexture,0);let oe=Z.__webglTexture,fe=mt(p),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,te=p.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(p.depthTexture.format===kn)Et(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,oe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,oe,0);else if(p.depthTexture.format===Ai)Et(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,oe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(A){let p=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==A.depthTexture){let W=A.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),W){let Z=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),p.__depthDisposeCallback=Z}p.__boundDepthTexture=W}if(A.depthTexture&&!p.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Tt(p.__webglFramebuffer[W],A,W);else{let W=A.texture.mipmaps;W&&W.length>0?Tt(p.__webglFramebuffer[0],A,0):Tt(p.__webglFramebuffer,A,0)}else if(k){p.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[W]),p.__webglDepthbuffer[W]===void 0)p.__webglDepthbuffer[W]=i.createRenderbuffer(),Oe(p.__webglDepthbuffer[W],A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=p.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,oe)}}else{let W=A.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),Oe(p.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(A,p,k){let W=n.get(A);p!==void 0&&be(W.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ke(A)}function gt(A){let p=A.texture,k=n.get(A),W=n.get(p);A.addEventListener("dispose",v);let Z=A.textures,oe=A.isWebGLCubeRenderTarget===!0,fe=Z.length>1;if(fe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=p.version,a.memory.textures++),oe){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(p.mipmaps&&p.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let te=0;te<p.mipmaps.length;te++)k.__webglFramebuffer[J][te]=i.createFramebuffer()}else k.__webglFramebuffer[J]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<p.mipmaps.length;J++)k.__webglFramebuffer[J]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(fe)for(let J=0,te=Z.length;J<te;J++){let ve=n.get(Z[J]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Et(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let te=Z[J];k.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let ve=r.convert(te.format,te.colorSpace),Ee=r.convert(te.type),me=y(te.internalFormat,ve,Ee,te.normalized,te.colorSpace,A.isXRRenderTarget===!0),_e=mt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,k.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,p);for(let J=0;J<6;J++)if(p.mipmaps&&p.mipmaps.length>0)for(let te=0;te<p.mipmaps.length;te++)be(k.__webglFramebuffer[J][te],A,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else be(k.__webglFramebuffer[J],A,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(p)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let J=0,te=Z.length;J<te;J++){let ve=Z[J],Ee=n.get(ve),me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Ee.__webglTexture),Ue(me,ve),be(k.__webglFramebuffer,A,ve,i.COLOR_ATTACHMENT0+J,me,0),d(ve)&&w(me)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),Ue(J,p),p.mipmaps&&p.mipmaps.length>0)for(let te=0;te<p.mipmaps.length;te++)be(k.__webglFramebuffer[te],A,p,i.COLOR_ATTACHMENT0,J,te);else be(k.__webglFramebuffer,A,p,i.COLOR_ATTACHMENT0,J,0);d(p)&&w(J),t.unbindTexture()}A.depthBuffer&&ke(A)}function Ve(A){let p=A.textures;for(let k=0,W=p.length;k<W;k++){let Z=p[k];if(d(Z)){let oe=R(A),fe=n.get(Z).__webglTexture;t.bindTexture(oe,fe),w(oe),t.unbindTexture()}}}let xt=[],St=[];function Lt(A){if(A.samples>0){if(Et(A)===!1){let p=A.textures,k=A.width,W=A.height,Z=i.COLOR_BUFFER_BIT,oe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(A),J=p.length>1;if(J)for(let ve=0;ve<p.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let te=A.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ve=0;ve<p.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);let Ee=n.get(p[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,Z,i.NEAREST),l===!0&&(xt.length=0,St.length=0,xt.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(xt.push(oe),St.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,St)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ve=0;ve<p.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);let Ee=n.get(p[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let p=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function mt(A){return Math.min(s.maxSamples,A.samples)}function Et(A){let p=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function O(A){let p=a.render.frame;u.get(A)!==p&&(u.set(A,p),A.update())}function Pt(A,p){let k=A.colorSpace,W=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Hn&&k!==hi&&(ft.getTransfer(k)===_t?(W!==un||Z!==nn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",k)),p}function Ge(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=H,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=se,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=re,this.rebindTextures=Je,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eg(i,e){function t(n,s=hi){let r,a=ft.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ea)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ml)return i.BYTE;if(n===gl)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===ba)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===yl)return i.RGB;if(n===un)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===or)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Pa||n===Ia)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Da||n===Na||n===Ua||n===Fa||n===dr||n===Oa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Da)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ua)return r.COMPRESSED_R11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===dr)return r.COMPRESSED_RG11_EAC;if(n===Oa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===Qa||n===eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===to||n===no||n===fr||n===io)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===to)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
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

}`,Hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ks(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yt({vertexShader:tg,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vl=class extends Vn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,h=null,g=null,_=null,M=typeof XRWebGLBinding<"u",x=new Hl,d={},w=t.getContextAttributes(),R=null,y=null,E=[],b=[],P=new ye,v=null,S=null,N=new en;N.viewport=new bt;let F=new en;F.viewport=new bt;let B=[N,F],H=new xa,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=E[$];return Q===void 0&&(Q=new _s,E[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=E[$];return Q===void 0&&(Q=new _s,E[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=E[$];return Q===void 0&&(Q=new _s,E[$]=Q),Q.getHandSpace()};function Y($){let Q=b.indexOf($.inputSource);if(Q===-1)return;let Re=E[Q];Re!==void 0&&(Re.update($.inputSource,$.frame,c||a),Re.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",se);for(let $=0;$<E.length;$++){let Q=b[$];Q!==null&&(b[$]=null,E[$].disconnect(Q))}I=null,G=null,x.reset();for(let $ in d)delete d[$];if(e.setRenderTarget(R),g=null,h=null,m=null,s=null,y=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),S!==null){let $=S.camera;$.fov=S.fov,$.zoom=S.zoom,$.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",q),s.addEventListener("inputsourceschange",se),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Fe=null,be=null;w.depth&&(be=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=w.stencil?Ai:kn,Fe=w.stencil?As:Dn);let Oe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(Oe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Gt(h.textureWidth,h.textureHeight,{format:un,type:nn,depthTexture:new Xn(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Re={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new Gt(g.framebufferWidth,g.framebufferHeight,{format:un,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function se($){for(let Q=0;Q<$.removed.length;Q++){let Re=$.removed[Q],Fe=b.indexOf(Re);Fe>=0&&(b[Fe]=null,E[Fe].disconnect(Re))}for(let Q=0;Q<$.added.length;Q++){let Re=$.added[Q],Fe=b.indexOf(Re);if(Fe===-1){for(let Oe=0;Oe<E.length;Oe++)if(Oe>=b.length){b.push(Re),Fe=Oe;break}else if(b[Oe]===null){b[Oe]=Re,Fe=Oe;break}if(Fe===-1)break}let be=E[Fe];be&&be.connect(Re)}}let X=new z,K=new z;function re($,Q,Re){X.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(Re.matrixWorld);let Fe=X.distanceTo(K),be=Q.projectionMatrix.elements,Oe=Re.projectionMatrix.elements,Tt=be[14]/(be[10]-1),ke=be[14]/(be[10]+1),Je=(be[9]+1)/be[5],gt=(be[9]-1)/be[5],Ve=(be[8]-1)/be[0],xt=(Oe[8]+1)/Oe[0],St=Tt*Ve,Lt=Tt*xt,mt=Fe/(-Ve+xt),Et=mt*-Ve;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Et),$.translateZ(mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let O=Tt+mt,Pt=ke+mt,Ge=St-Et,A=Lt+(Fe-Et),p=Je*ke/Pt*O,k=gt*ke/Pt*O;$.projectionMatrix.makePerspective(Ge,A,p,k,O,Pt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Le($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,Re=$.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),H.near=F.near=N.near=Q,H.far=F.far=N.far=Re,(I!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,G=H.far),H.layers.mask=$.layers.mask|6,N.layers.mask=H.layers.mask&-5,F.layers.mask=H.layers.mask&-3;let Fe=$.parent,be=H.cameras;Le(H,Fe);for(let Oe=0;Oe<be.length;Oe++)Le(be[Oe],Fe);be.length===2?re(H,N,F):H.projectionMatrix.copy(N.projectionMatrix),S===null&&$.isPerspectiveCamera&&(S={camera:$,fov:$.fov,zoom:$.zoom}),ee($,H,Fe)};function ee($,Q,Re){Re===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(Re.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ms*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function($){return d[$]};let De=null;function Ue($,Q){if(u=Q.getViewerPose(c||a),_=Q,u!==null){let Re=u.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let Fe=!1;Re.length!==H.cameras.length&&(H.cameras.length=0,Fe=!0);for(let ke=0;ke<Re.length;ke++){let Je=Re[ke],gt=null;if(g!==null)gt=g.getViewport(Je);else{let xt=m.getViewSubImage(h,Je);gt=xt.viewport,ke===0&&(e.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(y))}let Ve=B[ke];Ve===void 0&&(Ve=new en,Ve.layers.enable(ke),Ve.viewport=new bt,B[ke]=Ve),Ve.matrix.fromArray(Je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(gt.x,gt.y,gt.width,gt.height),ke===0&&(H.matrix.copy(Ve.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Fe===!0&&H.cameras.push(Ve)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){m=n.getBinding();let ke=m.getDepthInformation(Re[0]);ke&&ke.isValid&&ke.texture&&x.init(ke,s.renderState)}if(be&&be.includes("camera-access")&&M){e.state.unbindTexture(),m=n.getBinding();for(let ke=0;ke<Re.length;ke++){let Je=Re[ke].camera;if(Je){let gt=d[Je];gt||(gt=new Ks,d[Je]=gt);let Ve=m.getCameraImage(Je);gt.sourceTexture=Ve}}}}for(let Re=0;Re<E.length;Re++){let Fe=b[Re],be=E[Re];Fe!==null&&be!==void 0&&be.update(Fe,Q,c||a)}De&&De($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}let at=new zh;at.setAnimationLoop(Ue),this.setAnimationLoop=function($){De=$},this.dispose=function(){}}},ig=new Mt,Xh=new Ke;Xh.set(-1,0,0,0,1,0,0,0,1);function sg(i,e){function t(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function n(x,d){d.color.getRGB(x.fogColor.value,El(i)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function s(x,d,w,R,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(x,d):d.isMeshLambertMaterial?(r(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(x,d),m(x,d)):d.isMeshPhongMaterial?(r(x,d),u(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(x,d),h(x,d),d.isMeshPhysicalMaterial&&g(x,d,y)):d.isMeshMatcapMaterial?(r(x,d),_(x,d)):d.isMeshDepthMaterial?r(x,d):d.isMeshDistanceMaterial?(r(x,d),M(x,d)):d.isMeshNormalMaterial?r(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?l(x,d,w,R):d.isSpriteMaterial?c(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,t(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,t(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,t(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===Ot&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,t(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===Ot&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,t(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,t(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);let w=e.get(d),R=w.envMap,y=w.envMapRotation;R&&(x.envMap.value=R,x.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Xh),x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,t(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,w,R){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*w,x.scale.value=R*.5,d.map&&(x.map.value=d.map,t(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,t(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function c(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,t(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,t(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function m(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function h(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function g(x,d,w){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.retroreflectivity>0&&(x.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,d){d.matcap&&(x.matcap.value=d.matcap)}function M(x,d){let w=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let b=E.program;n.uniformBlockBinding(y,b)}function c(y,E){let b=s[y.id];b===void 0&&(x(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",w));let P=E.program;n.updateUBOMapping(y,P);let v=e.render.frame;r[y.id]!==v&&(h(y),r[y.id]=v)}function u(y){let E=m();y.__bindingPointIndex=E;let b=i.createBuffer(),P=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function m(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let E=s[y.id],b=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,S=b.length;v<S;v++){let N=b[v];if(Array.isArray(N))for(let F=0,B=N.length;F<B;F++)g(N[F],v,F,P);else g(N,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,E,b,P){if(M(y,E,b,P)===!0){let v=y.__offset,S=y.value;if(Array.isArray(S)){let N=0;for(let F=0;F<S.length;F++){let B=S[F],H=d(B);_(B,y.__data,N),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(N+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(S,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function _(y,E,b){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,b)}function M(y,E,b,P){let v=y.value,S=E+"_"+b;if(P[S]===void 0)return typeof v=="number"||typeof v=="boolean"?P[S]=v:ArrayBuffer.isView(v)?P[S]=v.slice():P[S]=v.clone(),!0;{let N=P[S];if(typeof v=="number"||typeof v=="boolean"){if(N!==v)return P[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(N.equals(v)===!1)return N.copy(v),!0}}return!1}function x(y){let E=y.uniforms,b=0,P=16;for(let S=0,N=E.length;S<N;S++){let F=Array.isArray(E[S])?E[S]:[E[S]];for(let B=0,H=F.length;B<H;B++){let I=F[B],G=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,q=G.length;Y<q;Y++){let se=G[Y],X=d(se),K=b%P,re=K%X.boundary,Le=K+re;b+=re,Le!==0&&P-Le<X.storage&&(b+=P-Le),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=X.storage}}}let v=b%P;return v>0&&(b+=P-v),y.__size=b,y.__cache={},this}function d(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):We("WebGLRenderer: Unsupported uniform value type.",y),E}function w(y){let E=y.target;E.removeEventListener("dispose",w);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function R(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function og(){return Jn===null&&(Jn=new Vi(ag,16,16,Ri,sn),Jn.name="DFG_LUT",Jn.minFilter=It,Jn.magFilter=It,Jn.wrapS=zn,Jn.wrapT=zn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var ho=class{constructor(e={}){let{canvas:t=hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:g=nn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let M=g,x=new Set([Aa,Ta,wa]),d=new Set([nn,Dn,Ts,As,Sa,Ea]),w=new Uint32Array(4),R=new Int32Array(4),y=new z,E=null,b=null,P=[],v=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,F=!1,B=null,H=null,I=null,G=null;this._outputColorSpace=ln;let Y=0,q=0,se=null,X=-1,K=null,re=new bt,Le=new bt,ee=null,De=new et(0),Ue=0,at=t.width,$=t.height,Q=1,Re=null,Fe=null,be=new bt(0,0,at,$),Oe=new bt(0,0,at,$),Tt=!1,ke=new ys,Je=!1,gt=!1,Ve=new Mt,xt=new z,St=new bt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function Et(){return se===null?Q:1}let O=n;function Pt(f,T){return t.getContext(f,T)}let Ge,A,p,k,W,Z,oe,fe,J,te,ve,Ee,me,_e,Pe,we,qe,U,xe,j,de,Me,ie;try{let f={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),O===null){let T="webgl2";if(O=Pt(T,f),O===null)throw Pt(T)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(f){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),Xe("WebGLRenderer: "+f.message),f}function Te(){Ge=new pm(O),Ge.init(),de=new eg(O,Ge),A=new sm(O,Ge,e,de),p=new j0(O,Ge),A.reversedDepthBuffer&&h&&p.buffers.depth.setReversed(!0),H=O.createFramebuffer(),I=O.createFramebuffer(),G=O.createFramebuffer(),k=new xm(O),W=new B0,Z=new Q0(O,Ge,p,W,A,de,k),oe=new fm(N),fe=new _d(O),Me=new nm(O,fe),J=new mm(O,fe,k,Me),te=new vm(O,J,fe,Me,k),U=new _m(O,A,Z),Pe=new rm(W),ve=new O0(N,oe,Ge,A,Me,Pe),Ee=new sg(N,W),me=new k0,_e=new q0(Ge),qe=new tm(N,oe,p,te,_,l),we=new K0(N,te,A),ie=new rg(O,k,A,p),xe=new im(O,Ge,k),j=new gm(O,Ge,k),k.programs=ve.programs,N.capabilities=A,N.extensions=Ge,N.properties=W,N.renderLists=me,N.shadowMap=we,N.state=p,N.info=k}M!==nn&&(S=new Mm(M,t.width,t.height,o,s,r));let Ce=new Vl(N,O);this.xr=Ce,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let f=Ge.get("WEBGL_lose_context");f&&f.loseContext()},this.forceContextRestore=function(){let f=Ge.get("WEBGL_lose_context");f&&f.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(f){f!==void 0&&(Q=f,this.setSize(at,$,!1))},this.getSize=function(f){return f.set(at,$)},this.setSize=function(f,T,L=!0){if(Ce.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}at=f,$=T,t.width=Math.floor(f*Q),t.height=Math.floor(T*Q),L===!0&&(t.style.width=f+"px",t.style.height=T+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,f,T)},this.getDrawingBufferSize=function(f){return f.set(at*Q,$*Q).floor()},this.setDrawingBufferSize=function(f,T,L){at=f,$=T,Q=L,t.width=Math.floor(f*L),t.height=Math.floor(T*L),this.setViewport(0,0,f,T)},this.setEffects=function(f){if(M===nn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(f){for(let T=0;T<f.length;T++)if(f[T].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(f||[])},this.getCurrentViewport=function(f){return f.copy(re)},this.getViewport=function(f){return f.copy(be)},this.setViewport=function(f,T,L,C){f.isVector4?be.set(f.x,f.y,f.z,f.w):be.set(f,T,L,C),p.viewport(re.copy(be).multiplyScalar(Q).round())},this.getScissor=function(f){return f.copy(Oe)},this.setScissor=function(f,T,L,C){f.isVector4?Oe.set(f.x,f.y,f.z,f.w):Oe.set(f,T,L,C),p.scissor(Le.copy(Oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(f){p.setScissorTest(Tt=f)},this.setOpaqueSort=function(f){Re=f},this.setTransparentSort=function(f){Fe=f},this.getClearColor=function(f){return f.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(f=!0,T=!0,L=!0){let C=0;if(f){let D=!1;if(se!==null){let ne=se.texture.format;D=x.has(ne)}if(D){let ne=se.texture.type,he=d.has(ne),ae=qe.getClearColor(),ge=qe.getClearAlpha(),ue=ae.r,Ne=ae.g,$e=ae.b;he?(w[0]=ue,w[1]=Ne,w[2]=$e,w[3]=ge,O.clearBufferuiv(O.COLOR,0,w)):(R[0]=ue,R[1]=Ne,R[2]=$e,R[3]=ge,O.clearBufferiv(O.COLOR,0,R))}else C|=O.COLOR_BUFFER_BIT}T&&(C|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),L&&(C|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C!==0&&O.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(f){f.setRenderer(this),B=f},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),qe.dispose(),me.dispose(),_e.dispose(),W.dispose(),oe.dispose(),te.dispose(),Me.dispose(),ie.dispose(),ve.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Fn),Ce.removeEventListener("sessionend",Ni),V.stop()};function ht(f){f.preventDefault(),bl("WebGLRenderer: Context Lost."),F=!0}function ot(){bl("WebGLRenderer: Context Restored."),F=!1;let f=k.autoReset,T=we.enabled,L=we.autoUpdate,C=we.needsUpdate,D=we.type;Te(),k.autoReset=f,we.enabled=T,we.autoUpdate=L,we.needsUpdate=C,we.type=D}function Dt(f){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",f.statusMessage)}function Jt(f){let T=f.target;T.removeEventListener("dispose",Jt),Ji(T)}function Ji(f){Qe(f),W.remove(f)}function Qe(f){let T=W.get(f).programs;T!==void 0&&(T.forEach(function(L){ve.releaseProgram(L)}),f.isShaderMaterial&&ve.releaseShaderCache(f))}this.renderBufferDirect=function(f,T,L,C,D,ne){T===null&&(T=Lt);let he=D.isMesh&&D.matrixWorld.determinantAffine()<0,ae=bn(f,T,L,C,D);p.setMaterial(C,he);let ge=L.index,ue=1;if(C.wireframe===!0){if(ge=J.getWireframeAttribute(L),ge===void 0)return;ue=2}let Ne=L.drawRange,$e=L.attributes.position,Ae=Ne.start*ue,pe=(Ne.start+Ne.count)*ue;ne!==null&&(Ae=Math.max(Ae,ne.start*ue),pe=Math.min(pe,(ne.start+ne.count)*ue)),ge!==null?(Ae=Math.max(Ae,0),pe=Math.min(pe,ge.count)):$e!=null&&(Ae=Math.max(Ae,0),pe=Math.min(pe,$e.count));let Ye=pe-Ae;if(Ye<0||Ye===1/0)return;Me.setup(D,C,ae,L,ge);let Ie,Be=xe;if(ge!==null&&(Ie=fe.get(ge),Be=j,Be.setIndex(Ie)),D.isMesh)C.wireframe===!0?(p.setLineWidth(C.wireframeLinewidth*Et()),Be.setMode(O.LINES)):Be.setMode(O.TRIANGLES);else if(D.isLine){let ut=C.linewidth;ut===void 0&&(ut=1),p.setLineWidth(ut*Et()),D.isLineSegments?Be.setMode(O.LINES):D.isLineLoop?Be.setMode(O.LINE_LOOP):Be.setMode(O.LINE_STRIP)}else D.isPoints?Be.setMode(O.POINTS):D.isSprite&&Be.setMode(O.TRIANGLES);if(D.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))Be.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let ut=D._multiDrawStarts,le=D._multiDrawCounts,dt=D._multiDrawCount,it=ge?fe.get(ge).bytesPerElement:1,Ft=W.get(C).currentProgram.getUniforms();for(let an=0;an<dt;an++)Ft.setValue(O,"_gl_DrawID",an),Be.render(ut[an]/it,le[an])}else if(D.isInstancedMesh)Be.renderInstances(Ae,Ye,D.count);else if(L.isInstancedBufferGeometry){let ut=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,le=Math.min(L.instanceCount,ut);Be.renderInstances(Ae,Ye,le)}else Be.render(Ae,Ye)};function ei(f,T,L,C){B!==null&&f.isNodeMaterial&&B.setObject(C,f),Je===!0&&Pe.setState(f,L,!1),f.transparent===!0&&f.side===hn&&f.forceSinglePass===!1?(f.side=Ot,f.needsUpdate=!0,nt(f,T,C),f.side=Zn,f.needsUpdate=!0,nt(f,T,C),f.side=hn):nt(f,T,C)}this.compile=function(f,T,L=null){L===null&&(L=f),B!==null&&B.renderStart(f,T,L),b=_e.get(L),b.init(T),v.push(b),L.traverseVisible(function(D){D.isLight&&D.layers.test(T.layers)&&(b.pushLight(D),D.castShadow&&b.pushShadow(D))}),f!==L&&f.traverseVisible(function(D){D.isLight&&D.layers.test(T.layers)&&(b.pushLight(D),D.castShadow&&b.pushShadow(D))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),gt=this.localClippingEnabled,Je=Pe.init(this.clippingPlanes,gt),Je===!0&&Pe.setGlobalState(this.clippingPlanes,T),B!==null&&we.render(b.state.shadowsArray,L,T);let C=new Set;return f.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let ne=D.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){let ae=ne[he];ei(ae,L,T,D),C.add(ae)}else ei(ne,L,T,D),C.add(ne)}),b=v.pop(),B!==null&&B.renderEnd(),C},this.compileAsync=function(f,T,L=null){let C=this.compile(f,T,L);return new Promise(D=>{function ne(){if(C.forEach(function(he){let ge=W.get(he).currentProgram;(ge===void 0||ge.isReady())&&C.delete(he)}),C.size===0){D(f);return}setTimeout(ne,10)}Ge.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let yn=null;function Mn(f){yn&&yn(f)}function Fn(){V.stop()}function Ni(){V.start()}let V=new zh;V.setAnimationLoop(Mn),typeof self<"u"&&V.setContext(self),this.setAnimationLoop=function(f){yn=f,Ce.setAnimationLoop(f),f===null?V.stop():V.start()},Ce.addEventListener("sessionstart",Fn),Ce.addEventListener("sessionend",Ni),this.render=function(f,T){if(T!==void 0&&T.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(f,T);let L=Ce.enabled===!0&&Ce.isPresenting===!0,C=S!==null&&(se===null||L)&&S.begin(N,se);if(f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(T),T=Ce.getCamera()),f.isScene===!0&&f.onBeforeRender(N,f,T,se),b=_e.get(f,v.length),b.init(T),b.state.textureUnits=Z.getTextureUnits(),v.push(b),Ve.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),ke.setFromProjectionMatrix(Ve,Pn,T.reversedDepth),gt=this.localClippingEnabled,Je=Pe.init(this.clippingPlanes,gt),E=me.get(f,P.length),E.init(),P.push(E),Ce.enabled===!0&&Ce.isPresenting===!0){let he=N.xr.getDepthSensingMesh();he!==null&&ce(he,T,-1/0,N.sortObjects)}ce(f,T,0,N.sortObjects),E.finish(),B!==null&&B.updateLights(b.state.lightsArray),N.sortObjects===!0&&E.sort(Re,Fe),mt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,mt&&qe.addToRenderList(E,f),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Pe.beginShadows();let D=b.state.shadowsArray;if(we.render(D,f,T),Je===!0&&Pe.endShadows(),(C&&S.hasRenderPass())===!1){let he=E.opaque,ae=E.transmissive;if(b.setupLights(),T.isArrayCamera){let ge=T.cameras;if(ae.length>0)for(let ue=0,Ne=ge.length;ue<Ne;ue++){let $e=ge[ue];tt(he,ae,f,$e)}mt&&qe.render(f);for(let ue=0,Ne=ge.length;ue<Ne;ue++){let $e=ge[ue];He(E,f,$e,$e.viewport)}}else ae.length>0&&tt(he,ae,f,T),mt&&qe.render(f),He(E,f,T)}se!==null&&q===0&&(Z.updateMultisampleRenderTarget(se),Z.updateRenderTargetMipmap(se)),C&&S.end(N),f.isScene===!0&&f.onAfterRender(N,f,T),Me.resetDefaultState(),X=-1,K=null,v.pop(),v.length>0?(b=v[v.length-1],Z.setTextureUnits(b.state.textureUnits),Je===!0&&Pe.setGlobalState(N.clippingPlanes,b.state.camera)):b=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,B!==null&&B.renderEnd()};function ce(f,T,L,C){if(f.visible===!1)return;if(f.layers.test(T.layers)){if(f.isGroup)L=f.renderOrder;else if(f.isLOD)f.autoUpdate===!0&&f.update(T);else if(f.isLightProbeGrid)b.pushLightProbeGrid(f);else if(f.isLight)b.pushLight(f),f.castShadow&&b.pushShadow(f);else if(f.isSprite){if(!f.frustumCulled||f.intersectsFrustum(ke)){C&&St.setFromMatrixPosition(f.matrixWorld).applyMatrix4(Ve);let he=te.update(f),ae=f.material;ae.visible&&E.push(f,he,ae,L,St.z,null,T)}}else if((f.isMesh||f.isLine||f.isPoints)&&(!f.frustumCulled||f.intersectsFrustum(ke))){let he=te.update(f),ae=f.material;if(C&&(f.boundingSphere!==void 0?(f.boundingSphere===null&&f.computeBoundingSphere(),St.copy(f.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),St.copy(he.boundingSphere.center)),St.applyMatrix4(f.matrixWorld).applyMatrix4(Ve)),Array.isArray(ae)){let ge=he.groups;for(let ue=0,Ne=ge.length;ue<Ne;ue++){let $e=ge[ue],Ae=ae[$e.materialIndex];Ae&&Ae.visible&&E.push(f,he,Ae,L,St.z,$e,T)}}else ae.visible&&E.push(f,he,ae,L,St.z,null,T)}}let ne=f.children;for(let he=0,ae=ne.length;he<ae;he++)ce(ne[he],T,L,C)}function He(f,T,L,C){let{opaque:D,transmissive:ne,transparent:he}=f;b.setupLightsView(L),Je===!0&&Pe.setGlobalState(N.clippingPlanes,L),C&&p.viewport(re.copy(C)),D.length>0&&Ze(D,T,L),ne.length>0&&Ze(ne,T,L),he.length>0&&Ze(he,T,L),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function tt(f,T,L,C){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[C.id]===void 0){let Ae=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[C.id]=new Gt(1,1,{generateMipmaps:!0,type:Ae?sn:nn,minFilter:Ti,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let ne=b.state.transmissionRenderTarget[C.id],he=C.viewport||re;ne.setSize(he.z*N.transmissionResolutionScale,he.w*N.transmissionResolutionScale);let ae=N.getRenderTarget(),ge=N.getActiveCubeFace(),ue=N.getActiveMipmapLevel();N.setRenderTarget(ne),N.getClearColor(De),Ue=N.getClearAlpha(),Ue<1&&N.setClearColor(16777215,.5),N.clear(),mt&&qe.render(L);let Ne=N.toneMapping;N.toneMapping=Ln;let $e=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),b.setupLightsView(C),Je===!0&&Pe.setGlobalState(N.clippingPlanes,C),Ze(f,L,C),Z.updateMultisampleRenderTarget(ne),Z.updateRenderTargetMipmap(ne),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let pe=0,Ye=T.length;pe<Ye;pe++){let Ie=T[pe],{object:Be,geometry:ut,material:le,group:dt}=Ie;if(le.side===hn&&Be.layers.test(C.layers)){let it=le.side;le.side=Ot,le.needsUpdate=!0,vt(Be,L,C,ut,le,dt),le.side=it,le.needsUpdate=!0,Ae=!0}}Ae===!0&&(Z.updateMultisampleRenderTarget(ne),Z.updateRenderTargetMipmap(ne))}N.setRenderTarget(ae,ge,ue),N.setClearColor(De,Ue),$e!==void 0&&(C.viewport=$e),N.toneMapping=Ne}function Ze(f,T,L){let C=T.isScene===!0?T.overrideMaterial:null;for(let D=0,ne=f.length;D<ne;D++){let he=f[D],{object:ae,geometry:ge,group:ue}=he,Ne=he.material;Ne.allowOverride===!0&&C!==null&&(Ne=C),ae.layers.test(L.layers)&&vt(ae,T,L,ge,Ne,ue)}}function vt(f,T,L,C,D,ne){B!==null&&D.isNodeMaterial&&B.setObject(f,D),f.onBeforeRender(N,T,L,C,D,ne),f.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,f.matrixWorld),f.normalMatrix.getNormalMatrix(f.modelViewMatrix),D.onBeforeRender(N,T,L,C,f,ne),D.transparent===!0&&D.side===hn&&D.forceSinglePass===!1?(D.side=Ot,D.needsUpdate=!0,N.renderBufferDirect(L,T,C,D,f,ne),D.side=Zn,D.needsUpdate=!0,N.renderBufferDirect(L,T,C,D,f,ne),D.side=hn):N.renderBufferDirect(L,T,C,D,f,ne),f.onAfterRender(N,T,L,C,D,ne)}function nt(f,T,L){T.isScene!==!0&&(T=Lt);let C=W.get(f),D=b.state.lights,ne=b.state.shadowsArray,he=D.state.version,ae=ve.getParameters(f,D.state,ne,T,L,b.state.lightProbeGridArray),ge=ve.getProgramCacheKey(ae),ue=C.programs;C.environment=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?T.environment:null,C.fog=T.fog;let Ne=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap;C.envMap=oe.get(f.envMap||C.environment,Ne),C.envMapRotation=C.environment!==null&&f.envMap===null?T.environmentRotation:f.envMapRotation,ue===void 0&&(f.addEventListener("dispose",Jt),ue=new Map,C.programs=ue);let $e=ue.get(ge);if($e!==void 0){if(C.currentProgram===$e&&C.lightsStateVersion===he)return kt(f,ae),$e}else ae.uniforms=ve.getUniforms(f),B!==null&&f.isNodeMaterial&&B.build(f,L,ae),f.onBeforeCompile(ae,N),$e=ve.acquireProgram(ae,ge),ue.set(ge,$e),C.uniforms=ae.uniforms;let Ae=C.uniforms;return(!f.isShaderMaterial&&!f.isRawShaderMaterial||f.clipping===!0)&&(Ae.clippingPlanes=Pe.uniform),kt(f,ae),C.needsLights=fi(f),C.lightsStateVersion=he,C.needsLights&&(Ae.ambientLightColor.value=D.state.ambient,Ae.lightProbe.value=D.state.probe,Ae.sunLights.value=D.state.sun,Ae.sunLightShadows.value=D.state.sunShadow,Ae.directionalLights.value=D.state.directional,Ae.directionalLightShadows.value=D.state.directionalShadow,Ae.spotLights.value=D.state.spot,Ae.spotLightShadows.value=D.state.spotShadow,Ae.rectAreaLights.value=D.state.rectArea,Ae.ltc_1.value=D.state.rectAreaLTC1,Ae.ltc_2.value=D.state.rectAreaLTC2,Ae.pointLights.value=D.state.point,Ae.pointLightShadows.value=D.state.pointShadow,Ae.hemisphereLights.value=D.state.hemi,Ae.sunShadowMatrix.value=D.state.sunShadowMatrix,Ae.sunShadowCascade.value=D.state.sunShadowCascade,Ae.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ae.spotLightMatrix.value=D.state.spotLightMatrix,Ae.spotLightMap.value=D.state.spotLightMap,Ae.pointShadowMatrix.value=D.state.pointShadowMatrix),C.lightProbeGrid=b.state.lightProbeGridArray.length>0,C.currentProgram=$e,C.uniformsList=null,$e}function pt(f){if(f.uniformsList===null){let T=f.currentProgram.getUniforms();f.uniformsList=Is.seqWithValue(T.seq,f.uniforms)}return f.uniformsList}function kt(f,T){let L=W.get(f);L.outputColorSpace=T.outputColorSpace,L.batching=T.batching,L.batchingColor=T.batchingColor,L.instancing=T.instancing,L.instancingColor=T.instancingColor,L.instancingMorph=T.instancingMorph,L.skinning=T.skinning,L.morphTargets=T.morphTargets,L.morphNormals=T.morphNormals,L.morphColors=T.morphColors,L.morphTargetsCount=T.morphTargetsCount,L.numClippingPlanes=T.numClippingPlanes,L.numIntersection=T.numClipIntersection,L.vertexAlphas=T.vertexAlphas,L.vertexTangents=T.vertexTangents,L.toneMapping=T.toneMapping}function Ht(f,T){if(f.length===0)return null;if(f.length===1)return f[0].texture!==null?f[0]:null;y.setFromMatrixPosition(T.matrixWorld);for(let L=0,C=f.length;L<C;L++){let D=f[L];if(D.texture!==null&&D.boundingBox.containsPoint(y))return D}return null}function bn(f,T,L,C,D){T.isScene!==!0&&(T=Lt),Z.resetTextureUnits();let ne=T.fog,he=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?T.environment:null,ae=se===null?N.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ft.workingColorSpace,ge=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,ue=oe.get(C.envMap||he,ge),Ne=C.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,$e=!!L.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),Ae=!!L.morphAttributes.position,pe=!!L.morphAttributes.normal,Ye=!!L.morphAttributes.color,Ie=Ln;C.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ie=N.toneMapping);let Be=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ut=Be!==void 0?Be.length:0,le=W.get(C),dt=b.state.lights;if(Je===!0&&(gt===!0||f!==K)){let je=f===K&&C.id===X;Pe.setState(C,f,je)}let it=!1;C.version===le.__version?(le.needsLights&&le.lightsStateVersion!==dt.state.version||le.outputColorSpace!==ae||D.isBatchedMesh&&le.batching===!1||!D.isBatchedMesh&&le.batching===!0||D.isBatchedMesh&&le.batchingColor===!0&&D._colorsTexture===null||D.isBatchedMesh&&le.batchingColor===!1&&D._colorsTexture!==null||D.isInstancedMesh&&le.instancing===!1||!D.isInstancedMesh&&le.instancing===!0||D.isSkinnedMesh&&le.skinning===!1||!D.isSkinnedMesh&&le.skinning===!0||D.isInstancedMesh&&le.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&le.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&le.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&le.instancingMorph===!1&&D.morphTexture!==null||le.envMap!==ue||C.fog===!0&&le.fog!==ne||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==Pe.numPlanes||le.numIntersection!==Pe.numIntersection)||le.vertexAlphas!==Ne||le.vertexTangents!==$e||le.morphTargets!==Ae||le.morphNormals!==pe||le.morphColors!==Ye||le.toneMapping!==Ie||le.morphTargetsCount!==ut||!!le.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,le.__version=C.version);let Ft=le.currentProgram;it===!0&&(Ft=nt(C,T,D),B&&C.isNodeMaterial&&B.onUpdateProgram(C,Ft,le));let an=!1,Sn=!1,On=!1,st=Ft.getUniforms(),yt=le.uniforms;if(p.useProgram(Ft.program)&&(an=!0,Sn=!0,On=!0),C.id!==X&&(X=C.id,Sn=!0),le.needsLights){let je=Ht(b.state.lightProbeGridArray,D);le.lightProbeGrid!==je&&(le.lightProbeGrid=je,Sn=!0)}if(an||K!==f){p.buffers.depth.getReversed()&&f.reversedDepth!==!0&&(f._reversedDepth=!0,f.updateProjectionMatrix()),st.setValue(O,"projectionMatrix",f.projectionMatrix),st.setValue(O,"viewMatrix",f.matrixWorldInverse);let ze=st.map.cameraPosition;ze!==void 0&&ze.setValue(O,xt.setFromMatrixPosition(f.matrixWorld)),A.logarithmicDepthBuffer&&st.setValue(O,"logDepthBufFC",2/(Math.log(f.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&st.setValue(O,"isOrthographic",f.isOrthographicCamera===!0),K!==f&&(K=f,Sn=!0,On=!0)}if(le.needsLights&&(dt.state.sunShadowMap.length>0&&st.setValue(O,"sunShadowMap",dt.state.sunShadowMap,Z),dt.state.directionalShadowMap.length>0&&st.setValue(O,"directionalShadowMap",dt.state.directionalShadowMap,Z),dt.state.spotShadowMap.length>0&&st.setValue(O,"spotShadowMap",dt.state.spotShadowMap,Z),dt.state.pointShadowMap.length>0&&st.setValue(O,"pointShadowMap",dt.state.pointShadowMap,Z)),D.isSkinnedMesh){st.setOptional(O,D,"bindMatrix"),st.setOptional(O,D,"bindMatrixInverse");let je=D.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),st.setValue(O,"boneTexture",je.boneTexture,Z))}D.isBatchedMesh&&(st.setOptional(O,D,"batchingTexture"),st.setValue(O,"batchingTexture",D._matricesTexture,Z),st.setOptional(O,D,"batchingIdTexture"),st.setValue(O,"batchingIdTexture",D._indirectTexture,Z),st.setOptional(O,D,"batchingColorTexture"),D._colorsTexture!==null&&st.setValue(O,"batchingColorTexture",D._colorsTexture,Z));let lt=L.morphAttributes;if((lt.position!==void 0||lt.normal!==void 0||lt.color!==void 0)&&U.update(D,L,Ft),(Sn||le.receiveShadow!==D.receiveShadow)&&(le.receiveShadow=D.receiveShadow,st.setValue(O,"receiveShadow",D.receiveShadow)),(C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial)&&C.envMap===null&&T.environment!==null&&(yt.envMapIntensity.value=T.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=og()),Sn){if(st.setValue(O,"toneMappingExposure",N.toneMappingExposure),le.needsLights&&ti(yt,On),ne&&C.fog===!0&&Ee.refreshFogUniforms(yt,ne),Ee.refreshMaterialUniforms(yt,C,Q,$,b.state.transmissionRenderTarget[f.id]),le.needsLights&&le.lightProbeGrid){let je=le.lightProbeGrid;yt.probesSH.value=je.texture,yt.probesMin.value.copy(je.boundingBox.min),yt.probesMax.value.copy(je.boundingBox.max),yt.probesResolution.value.copy(je.resolution)}Is.upload(O,pt(le),yt,Z)}if(C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(Is.upload(O,pt(le),yt,Z),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&st.setValue(O,"center",D.center),st.setValue(O,"modelViewMatrix",D.modelViewMatrix),st.setValue(O,"normalMatrix",D.normalMatrix),st.setValue(O,"modelMatrix",D.matrixWorld),C.uniformsGroups!==void 0){let je=C.uniformsGroups;for(let ze=0,Vt=je.length;ze<Vt;ze++){let At=je[ze];ie.update(At,Ft),ie.bind(At,Ft)}}return Ft}function ti(f,T){f.ambientLightColor.needsUpdate=T,f.lightProbe.needsUpdate=T,f.sunLights.needsUpdate=T,f.sunLightShadows.needsUpdate=T,f.directionalLights.needsUpdate=T,f.directionalLightShadows.needsUpdate=T,f.pointLights.needsUpdate=T,f.pointLightShadows.needsUpdate=T,f.spotLights.needsUpdate=T,f.spotLightShadows.needsUpdate=T,f.rectAreaLights.needsUpdate=T,f.hemisphereLights.needsUpdate=T}function fi(f){return f.isMeshLambertMaterial||f.isMeshToonMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isShadowMaterial||f.isShaderMaterial&&f.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(f,T,L){let C=W.get(f);C.__autoAllocateDepthBuffer=f.resolveDepthBuffer===!1,C.__autoAllocateDepthBuffer===!1&&(C.__useRenderToTexture=!1),W.get(f.texture).__webglTexture=T,W.get(f.depthTexture).__webglTexture=C.__autoAllocateDepthBuffer?void 0:L,C.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(f,T){let L=W.get(f);L.__webglFramebuffer=T,L.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(f,T=0,L=0){se=f,Y=T,q=L;let C=null,D=!1,ne=!1;if(f){let ae=W.get(f);if(ae.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(O.FRAMEBUFFER,ae.__webglFramebuffer),re.copy(f.viewport),Le.copy(f.scissor),ee=f.scissorTest,p.viewport(re),p.scissor(Le),p.setScissorTest(ee),X=-1;return}else if(ae.__webglFramebuffer===void 0)Z.setupRenderTarget(f);else if(ae.__hasExternalTextures)Z.rebindTextures(f,W.get(f.texture).__webglTexture,W.get(f.depthTexture).__webglTexture);else if(f.depthBuffer){let Ne=f.depthTexture;if(ae.__boundDepthTexture!==Ne){if(Ne!==null&&W.has(Ne)&&(f.width!==Ne.image.width||f.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(f)}}let ge=f.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ne=!0);let ue=W.get(f).__webglFramebuffer;f.isWebGLCubeRenderTarget?(Array.isArray(ue[T])?C=ue[T][L]:C=ue[T],D=!0):f.samples>0&&Z.useMultisampledRTT(f)===!1?C=W.get(f).__webglMultisampledFramebuffer:Array.isArray(ue)?C=ue[L]:C=ue,re.copy(f.viewport),Le.copy(f.scissor),ee=f.scissorTest}else re.copy(be).multiplyScalar(Q).floor(),Le.copy(Oe).multiplyScalar(Q).floor(),ee=Tt;if(L!==0&&(C=H),p.bindFramebuffer(O.FRAMEBUFFER,C)&&p.drawBuffers(f,C),p.viewport(re),p.scissor(Le),p.setScissorTest(ee),D){let ae=W.get(f.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+T,ae.__webglTexture,L)}else if(ne){let ae=T;for(let ge=0;ge<f.textures.length;ge++){let ue=W.get(f.textures[ge]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ge,ue.__webglTexture,L,ae)}}else if(f!==null&&L!==0){let ae=W.get(f.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ae.__webglTexture,L)}X=-1};function vr(f){let T=W.get(f);return(T.__readFormat!==f.format||T.__readType!==f.type)&&(T.__readFormat=f.format,T.__readType=f.type,T.__formatReadable=A.textureFormatReadable(f.format),T.__typeReadable=A.textureTypeReadable(f.type)),T}this.readRenderTargetPixels=function(f,T,L,C,D,ne,he,ae=0){if(!(f&&f.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=W.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){p.bindFramebuffer(O.FRAMEBUFFER,ge);try{let ue=f.textures[ae],Ne=ue.format,$e=ue.type;f.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ae);let Ae=vr(ue);if(Ae.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=f.width-C&&L>=0&&L<=f.height-D&&O.readPixels(T,L,C,D,de.convert(Ne),de.convert($e),ne)}finally{let ue=se!==null?W.get(se).__webglFramebuffer:null;p.bindFramebuffer(O.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(f,T,L,C,D,ne,he,ae=0){if(!(f&&f.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=W.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge)if(T>=0&&T<=f.width-C&&L>=0&&L<=f.height-D){p.bindFramebuffer(O.FRAMEBUFFER,ge);let ue=f.textures[ae],Ne=ue.format,$e=ue.type;f.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ae);let Ae=vr(ue);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,pe),O.bufferData(O.PIXEL_PACK_BUFFER,ne.byteLength,O.STREAM_READ),O.readPixels(T,L,C,D,de.convert(Ne),de.convert($e),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ye=se!==null?W.get(se).__webglFramebuffer:null;p.bindFramebuffer(O.FRAMEBUFFER,Ye);let Ie=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await dh(O,Ie,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ne),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(pe),O.deleteSync(Ie),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(f,T=null,L=0){let C=Math.pow(2,-L),D=Math.floor(f.image.width*C),ne=Math.floor(f.image.height*C),he=T!==null?T.x:0,ae=T!==null?T.y:0;Z.setTexture2D(f,0),O.copyTexSubImage2D(O.TEXTURE_2D,L,0,0,he,ae,D,ne),p.unbindTexture()},this.copyTextureToTexture=function(f,T,L=null,C=null,D=0,ne=0){let he,ae,ge,ue,Ne,$e,Ae,pe,Ye,Ie=f.isCompressedTexture?f.mipmaps[ne]:f.image;if(L!==null)he=L.max.x-L.min.x,ae=L.max.y-L.min.y,ge=L.isBox3?L.max.z-L.min.z:1,ue=L.min.x,Ne=L.min.y,$e=L.isBox3?L.min.z:0;else{let yt=Math.pow(2,-D);he=Math.floor(Ie.width*yt),ae=Math.floor(Ie.height*yt),f.isDataArrayTexture?ge=Ie.depth:f.isData3DTexture?ge=Math.floor(Ie.depth*yt):ge=1,ue=0,Ne=0,$e=0}C!==null?(Ae=C.x,pe=C.y,Ye=C.z):(Ae=0,pe=0,Ye=0);let Be=de.convert(T.format),ut=de.convert(T.type),le;T.isData3DTexture?(Z.setTexture3D(T,0),le=O.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(Z.setTexture2DArray(T,0),le=O.TEXTURE_2D_ARRAY):(Z.setTexture2D(T,0),le=O.TEXTURE_2D),p.activeTexture(O.TEXTURE0),p.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,T.flipY),p.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),p.pixelStorei(O.UNPACK_ALIGNMENT,T.unpackAlignment);let dt=p.getParameter(O.UNPACK_ROW_LENGTH),it=p.getParameter(O.UNPACK_IMAGE_HEIGHT),Ft=p.getParameter(O.UNPACK_SKIP_PIXELS),an=p.getParameter(O.UNPACK_SKIP_ROWS),Sn=p.getParameter(O.UNPACK_SKIP_IMAGES);p.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),p.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),p.pixelStorei(O.UNPACK_SKIP_PIXELS,ue),p.pixelStorei(O.UNPACK_SKIP_ROWS,Ne),p.pixelStorei(O.UNPACK_SKIP_IMAGES,$e);let On=f.isDataArrayTexture||f.isData3DTexture,st=T.isDataArrayTexture||T.isData3DTexture;if(f.isDepthTexture){let yt=W.get(f),lt=W.get(T),je=W.get(yt.__renderTarget),ze=W.get(lt.__renderTarget);p.bindFramebuffer(O.READ_FRAMEBUFFER,je.__webglFramebuffer),p.bindFramebuffer(O.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Vt=0;Vt<ge;Vt++)On&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(f).__webglTexture,D,$e+Vt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(T).__webglTexture,ne,Ye+Vt)),O.blitFramebuffer(ue,Ne,he,ae,Ae,pe,he,ae,O.DEPTH_BUFFER_BIT,O.NEAREST);p.bindFramebuffer(O.READ_FRAMEBUFFER,null),p.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(D!==0||f.isRenderTargetTexture||W.has(f)){let yt=W.get(f),lt=W.get(T);p.bindFramebuffer(O.READ_FRAMEBUFFER,I),p.bindFramebuffer(O.DRAW_FRAMEBUFFER,G);for(let je=0;je<ge;je++)On?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.__webglTexture,D,$e+je):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yt.__webglTexture,D),st?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,lt.__webglTexture,ne,Ye+je):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,lt.__webglTexture,ne),D!==0?O.blitFramebuffer(ue,Ne,he,ae,Ae,pe,he,ae,O.COLOR_BUFFER_BIT,O.NEAREST):st?O.copyTexSubImage3D(le,ne,Ae,pe,Ye+je,ue,Ne,he,ae):O.copyTexSubImage2D(le,ne,Ae,pe,ue,Ne,he,ae);p.bindFramebuffer(O.READ_FRAMEBUFFER,null),p.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else st?f.isDataTexture||f.isData3DTexture?O.texSubImage3D(le,ne,Ae,pe,Ye,he,ae,ge,Be,ut,Ie.data):T.isCompressedArrayTexture?O.compressedTexSubImage3D(le,ne,Ae,pe,Ye,he,ae,ge,Be,Ie.data):O.texSubImage3D(le,ne,Ae,pe,Ye,he,ae,ge,Be,ut,Ie):f.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ne,Ae,pe,he,ae,Be,ut,Ie.data):f.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ne,Ae,pe,Ie.width,Ie.height,Be,Ie.data):O.texSubImage2D(O.TEXTURE_2D,ne,Ae,pe,he,ae,Be,ut,Ie);p.pixelStorei(O.UNPACK_ROW_LENGTH,dt),p.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it),p.pixelStorei(O.UNPACK_SKIP_PIXELS,Ft),p.pixelStorei(O.UNPACK_SKIP_ROWS,an),p.pixelStorei(O.UNPACK_SKIP_IMAGES,Sn),ne===0&&T.generateMipmaps&&O.generateMipmap(le),p.unbindTexture()},this.initRenderTarget=function(f){W.get(f).__webglFramebuffer===void 0&&Z.setupRenderTarget(f)},this.initTexture=function(f){f.isCubeTexture?Z.setTextureCube(f,0):f.isData3DTexture?Z.setTexture3D(f,0):f.isDataArrayTexture||f.isCompressedArrayTexture?Z.setTexture2DArray(f,0):Z.setTexture2D(f,0),p.unbindTexture()},this.resetState=function(){Y=0,q=0,se=null,p.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var $t=Math.PI/180,po=$t*23.4397,xr={lat:55.676,lon:12.578},qh=i=>i.valueOf()/864e5-.5+2440588-2451545,Wl=(i,e)=>Math.atan2(Math.sin(i)*Math.cos(po)-Math.tan(e)*Math.sin(po),Math.cos(i)),Xl=(i,e)=>Math.asin(Math.sin(e)*Math.cos(po)+Math.cos(e)*Math.sin(po)*Math.sin(i)),lg=(i,e)=>$t*(280.16+360.9856235*i)-e,cg=i=>(i=Math.max(i,0),2967e-7/Math.tan(i+.00312536/(i+.08901179)));function Yh(i,e,t){let n=-xr.lon*$t,s=xr.lat*$t,r=lg(i,n)-e,a=Math.asin(Math.sin(s)*Math.sin(t)+Math.cos(s)*Math.cos(t)*Math.cos(r));return a+=cg(a),{az:((Math.atan2(Math.sin(r),Math.cos(r)*Math.sin(s)-Math.tan(t)*Math.cos(s))/$t+180)%360+360)%360,el:a/$t}}function ql(i){let e=qh(i),t=$t*(357.5291+.98560028*e),n=$t*(1.9148*Math.sin(t)+.02*Math.sin(2*t)+3e-4*Math.sin(3*t)),s=t+n+$t*102.9372+Math.PI;return Yh(e,Wl(s,0),Xl(s,0))}function hg(i){let e=$t*(218.316+13.176396*i),t=$t*(134.963+13.064993*i),n=$t*(93.272+13.22935*i),s=e+$t*6.289*Math.sin(t),r=$t*5.128*Math.sin(n);return{ra:Wl(s,r),dec:Xl(s,r),l:s,b:r}}function ug(i){let e=qh(i),t=hg(e),n=$t*(357.5291+.98560028*e),s=n+$t*(1.9148*Math.sin(n)+.02*Math.sin(2*n)+3e-4*Math.sin(3*n))+$t*102.9372+Math.PI,r=Wl(s,0),a=Xl(s,0),o=Math.acos(Math.sin(a)*Math.sin(t.dec)+Math.cos(a)*Math.cos(t.dec)*Math.cos(r-t.ra)),l=Math.atan2(149598e3*Math.sin(o),385001-149598e3*Math.cos(o));return{...Yh(e,t.ra,t.dec),lit:(1+Math.cos(l))/2}}function Yl(i){let e=ql(i),t=1-Pi(-8,-1,e.el),n=Pi(-12,-2,e.el)*(1-Pi(-1,6,e.el)),r=((c,u)=>[1+(c[0]-1)*n+(u[0]-1)*t*(1-n),1+(c[1]-1)*n+(u[1]-1)*t*(1-n),1+(c[2]-1)*n+(u[2]-1)*t*(1-n)])([.55,.7,1.2],[.2,.23,.32]),a=Pi(-4,8,e.el);if(e.el>-3){let c=Pi(2,24,e.el),u=(6+9*c)*Pi(-3,3,e.el);return{kind:e.el>-.83?"sun":"night",az:e.az,el:e.el,shadeEl:Math.max(e.el,1.6),color:[u,u*(.56+.38*c),u*(.34+.52*c)],day:a,night:t,sky:r}}let o=ug(i),l=(3.2+4*o.lit)*Pi(0,5,o.el)*Pi(-3,-8,e.el);return{kind:o.el>0?"moon":"night",az:o.az,el:o.el,shadeEl:Math.max(o.el,3),color:[l*.72,l*.82,l],day:a,night:t,sky:r}}function Pi(i,e,t){let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)}var Ds={wind:4,from:240,cloud:.2,rain:0,temp:12},mo={clear:{wind:2,from:240,cloud:0,rain:0,temp:14},fair:Ds,cloudy:{wind:6,from:250,cloud:.7,rain:0,temp:11},overcast:{wind:5,from:230,cloud:1,rain:0,temp:9},rain:{wind:7,from:220,cloud:1,rain:2.4,temp:8},storm:{wind:17,from:260,cloud:.85,rain:4,temp:7}},Zh="pintable-weather",dg=`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${xr.lat}&lon=${xr.lon}`,Ii=null,_r=null,Zl=null;function fg(i){let e=i?.properties?.timeseries??[],t=[];for(let n of e){let s=n.data?.instant?.details;if(!s)continue;let r=n.data.next_1_hours?.details?.precipitation_amount??(n.data.next_6_hours?.details?.precipitation_amount??0)/6;t.push({t:Date.parse(n.time),wind:s.wind_speed??Ds.wind,from:s.wind_from_direction??Ds.from,cloud:(s.cloud_area_fraction??20)/100,rain:r,temp:s.air_temperature??Ds.temp})}return t.filter(n=>Number.isFinite(n.t)).sort((n,s)=>n.t-s.t)}function $h(){if(typeof window>"u")return Promise.resolve();let i=new URLSearchParams(location.search).get("weather");if(i&&mo[i])return _r=mo[i],Promise.resolve();try{let n=JSON.parse(localStorage.getItem(Zh)??"null");if(n&&n.until>Date.now()&&n.rows?.length)return Ii=n.rows,Zl="met",Promise.resolve()}catch{}let e=new AbortController,t=setTimeout(()=>e.abort(),6e3);return fetch(dg,{signal:e.signal,credentials:"omit"}).then(async n=>{if(!n.ok)throw new Error(`weather ${n.status}`);let s=fg(await n.json());if(!s.length)throw new Error("weather: empty");Ii=s,Zl="met";let r=Date.parse(n.headers.get("expires")??"")||Date.now()+30*6e4;try{localStorage.setItem(Zh,JSON.stringify({until:Math.max(r,Date.now()+10*6e4),rows:s}))}catch{}}).catch(()=>{}).finally(()=>clearTimeout(t))}var pg=(i,e,t)=>i+(((e-i)%360+540)%360-180)*t;function $l(i,e={...Ds}){if(_r)return Object.assign(e,_r);if(!Ii?.length)return Object.assign(e,Ds);let t=i.valueOf(),n=0;for(;n<Ii.length-1&&Ii[n+1].t<=t;)n++;let s=Ii[n],r=Ii[Math.min(n+1,Ii.length-1)],a=r.t>s.t?Math.min(1,Math.max(0,(t-s.t)/(r.t-s.t))):0;return e.wind=s.wind+(r.wind-s.wind)*a,e.from=pg(s.from,r.from,a),e.cloud=s.cloud+(r.cloud-s.cloud)*a,e.rain=s.rain+(r.rain-s.rain)*a,e.temp=s.temp+(r.temp-s.temp)*a,e}function Jh(i){_r=i&&mo[i]?mo[i]:null}var Jl=()=>_r?"set":Zl;function Kl(i){let e=i.rain>=4?"heavy rain":i.rain>=.8?"rain":i.rain>=.1?"light rain":i.cloud>.87?"overcast":i.cloud>.55?"cloudy":i.cloud>.2?"fair":"clear";return i.wind>=8?`${e}, wind ${Math.round(i.wind)} m/s`:e}var Ns=typeof location>"u"||new URLSearchParams(location.search).get("pins")!=="coarse",go=Ns?823592:205892,Kh=.285,jh=16;var vn=[{name:"Christiansborg",x:200.5,z:213.5,kind:"building",fact:"Finished 1928 \xB7 tower 106 m, the city's tallest",flood:1},{name:"B\xF8rsen",x:293,z:240,kind:"building",fact:"Built 1619\u20131640 \xB7 its 56 m dragon spire fell in the 2024 fire",flood:.9},{name:"Inderhavnen",x:330,z:300,kind:"water"},{name:"Holmens Kirke",x:278,z:192,kind:"building",fact:"An anchor forge of 1563 \xB7 a church since 1619",flood:1},{name:"Den Sorte Diamant",x:263,z:339,kind:"building",fact:"Schmidt Hammer Lassen, 1999",flood:.5},{name:"Christianshavn",x:432,z:352,kind:"district"},{name:"Slotsholmen",x:236,z:271,kind:"district"},{name:"Thorvaldsens Museum",x:149,z:192,kind:"building",fact:"Built 1838\u20131848 \xB7 M. G. Bindesb\xF8ll",flood:.8},{name:"Christians Kirke",x:379,z:377,kind:"building",fact:"Built 1754\u20131759 \xB7 tower 70 m",flood:1},{name:"Nikolaj",x:225,z:104,kind:"building",fact:"Spire raised 1909 \xB7 the city's third-tallest tower",flood:1},{name:"Det Kongelige Teater",x:346,z:79,kind:"building",fact:"Founded 1748 \xB7 this house built 1872\u20131874",flood:1},{name:"Nationalmuseet",x:63,z:288,kind:"building",fact:"The Prince's Mansion \xB7 a museum since 1892",flood:.6},{name:"Frederiksholms Kanal",x:146,z:318,kind:"water"},{name:"Gammel Strand",x:148,z:160,kind:"district"},{name:"B\xF8rsgraven",x:316,z:218,kind:"water"},{name:"Christiansborg Slotskirke",x:172.6,z:178,kind:"building",fact:"Inaugurated 14 May 1826",flood:.9},{name:"Krigsmuseet",x:203,z:301,kind:"building",fact:"Christian IV's arsenal \xB7 163 m long, finished 1604",flood:.5},{name:"Bibliotekshaven",x:229,z:290,kind:"district"},{name:"Christian IV's Bryghus",x:193,z:349,kind:"building",fact:"Built 1608 as a bastion",flood:.7},{name:"Christianshavns Kanal",x:442,z:398,kind:"water"},{name:"Gammel Dok",x:474,z:218,kind:"building",fact:"A warehouse by H. C. Scharling, 1882",flood:.5},{name:"Gammelholm",x:417,z:128,kind:"district"},{name:"Magasin du Nord",x:285.6,z:96,kind:"building",fact:"Department store \xB7 its building completed 1894",flood:.8},{name:"H\xF8jbro Plads",x:183,z:119,kind:"district"},{name:"Hellig\xE5ndskirken",x:108,z:92.5,kind:"building",fact:"One of the city's oldest churches \xB7 spire 1594",flood:.9},{name:"Amagertorv",x:141.5,z:102,kind:"district"}];var jl=[{closed:!0,pts:[303.6,219.5,295.8,217.9,288.4,215,281.7,210.8,274.8,206.9,268.7,201.8,262,197.4,254.7,194.5,248.1,190.1,241.5,185.6,234.8,181.2,228.2,176.8,221.5,172.4,214.9,167.9,208.3,163.5,201.6,159.1,194.6,155.4,187,153,179,153.1,171.4,155.5,163.9,158.2,157.1,162.3,150.2,166.2,144,171.3,137.4,175.8,131.7,181.3,126.4,187.3,121.4,193.4,116.4,199.6,111.2,205.7,106.7,212.2,101.6,218.4,96.5,224.5,91.5,230.7,87.5,237.6,89,245,93.4,251.6,98.5,257.8,102.9,264.4,108,270.5,112.9,276.9,117.5,283.3,122.5,289.5,127.1,296,132.1,302.2,136.7,308.7,141.7,315,146.4,321.4,151.2,327.8,156.3,333.9,160.7,340.5,165.8,346.7,170.3,353.2,175.3,359.4,180.3,365.6,185.6,371.6,191.2,377.2,196.9,382.9,202.5,388.5,208.1,394.1,213.4,400.1,215.3,407.8,216,415.7,217.5,422.4,223.2,416.8,228.9,411.1,234.5,405.5,240.1,399.9,245.8,394.2,251.4,388.6,257.1,382.9,263.2,377.8,268.8,372.2,274.5,366.5,280.1,360.9,285.8,355.2,291.4,349.6,297,344,302.7,338.3,308.3,332.7,314,327,319.7,321.5,326.2,316.8,332.5,312,338.4,306.6,344,301,349.7,295.3,355.3,289.7,361,284,366.6,278.4,372.2,272.8,377.9,267.1,383.2,261.2,384,253.4,383.9,245.4,379.1,239.1,373,234,366.1,230,358.3,229,350.4,228,342.7,226.1,334.9,224.3,327.2,222.7,319.4,221.2,311.5,220]},{closed:!0,pts:[428.6,210.4,422.5,215.5,416.4,220.6,410.7,226.3,405.1,231.9,399.6,237.7,397.9,245.2,393.4,251.6,387.7,257.3,382.1,262.9,376.4,268.6,370.8,274.2,365.2,279.8,359.5,285.5,353.9,291.1,348.2,296.8,342.6,302.4,337,308,331,313.3,324.4,317.8,318.7,323.3,313,329,307.4,334.6,301.8,340.2,296.1,345.9,290.5,351.5,284.8,357.2,279.2,362.8,273.6,368.4,274.2,372,282.2,372,289.9,373.3,296,378.4,302.2,383.5,307.9,388.9,314.1,394,320.2,399.1,326.3,404.2,332.7,408.9,339.3,413.3,346,417.6,352.1,422.7,358,428,364.1,433.1,370.2,438.3,376.1,443.7,382.2,448.8,388.5,453.5,396.2,452.6,401.9,447,407,440.9,412.1,434.8,417.2,428.7,422.2,422.5,427.3,416.4,432.4,410.3,437.5,404.2,442.6,398.1,447.7,391.9,453,386,458.1,379.9,463.2,373.8,468.3,367.7,473.4,361.6,478.5,355.5,483.7,349.3,488.8,343.2,492.2,336.1,495.3,328.7,500.4,322.6,505.4,316.4,507.7,308.8,509.6,301,511.4,293.3,513.3,285.5,515.1,277.7,516.7,269.9,515.9,262,514.9,254.1,513.9,246.2,512.8,238.3,511.1,230.6,507.2,223.6,503.3,216.7,499.4,209.7,495,203,490.2,196.7,484,191.7,477.4,187.3,470.1,187.6,463.5,192.1,456.9,196.6,450.3,201,443.7,205.4,436,207.6]},{closed:!1,pts:[200,443,205.2,436.9,210.3,430.8,215.4,424.7,221,419,226.6,413.4,232.3,407.7,237.9,402.1,243.6,396.4,249.2,390.8,254.9,385.1,261,380,266.6,374.4,272.3,368.7,277.9,363.1,283.5,357.5,289.2,351.8,294.8,346.2,300.5,340.5,306.1,334.9,311.8,329.2,317.4,323.6,323.6,318.6,330.2,314.2,336.2,308.8,341.8,303.2,347.5,297.5,353.1,291.9,358.7,286.3,364.4,280.6,370,275,375.7,269.3,381.3,263.7,387,258,392.6,252.4,397.9,246.4,398.9,238.6,404.3,232.7,409.9,227.1,415.5,221.5,421.7,216.3,427.5,211,433.7,205.9,439.8,200.8,446.4,196.3,452.6,191.2,458.7,186.1,464.4,180.6,470,175]}],vo=[{route:0,phase:0,speed:3.2,size:[4.5,1.1,.55,.95]},{route:0,phase:1/3,speed:3.2,size:[4.5,1.1,.55,.95]},{route:0,phase:2/3,speed:3.2,size:[4.5,1.1,.55,.95]},{route:1,phase:.1,speed:3.2,size:[4.5,1.1,.55,.95]},{route:1,phase:.6,speed:3.2,size:[4.5,1.1,.55,.95]},{route:2,phase:.3,speed:5,size:[5,1.5,.7,1.4]}],yo=vo.length,xo=14,_o=6,eu=jl.map(i=>{let e=i.pts,t=e.length/2,n=[0];for(let s=1;s<=(i.closed?t:t-1);s++){let r=(s-1)%t,a=s%t;n.push(n[s-1]+Math.hypot(e[a*2]-e[r*2],e[a*2+1]-e[r*2+1]))}return n});function Qh(i,e,t,n){let s=jl[i],r=s.pts,a=r.length/2,o=eu[i],l=o[o.length-1];e=s.closed?(e%l+l)%l:Math.min(Math.max(e,0),l-.001);let c=0;for(;c<o.length-2&&o[c+1]<=e;)c++;let u=(e-o[c])/Math.max(1e-6,o[c+1]-o[c]),m=d=>(s.closed?(d%a+a)%a:Math.min(Math.max(d,0),a-1))*2,h=m(c-1),g=m(c),_=m(c+1),M=m(c+2);for(let d=0;d<2;d++){let w=r[h+d],R=r[g+d],y=r[_+d],E=r[M+d];t[n+d]=.5*(2*R+(y-w)*u+(2*w-5*R+4*y-E)*u*u+(3*R-w-3*y+E)*u*u*u),t[n+2+d]=.5*(y-w+2*(2*w-5*R+4*y-E)*u+3*(3*R-w-3*y+E)*u*u)}let x=Math.hypot(t[n+2],t[n+3])||1;t[n+2]/=x,t[n+3]/=x}function mg(i,e,t){let n=(i+2*xo)/e,s=2*(n+_o),r=(t%s+s)%s,a=r>=n+_o;a&&(r-=n+_o);let o=2*xo/e,l=r>=n?i:r<o?e*r*r/(2*o):r>n-o?i-e*(n-r)**2/(2*o):xo+e*(r-o);return{s:a?i-l:l,back:a}}var tu=Float32Array.from(vo.flatMap(i=>i.size)),Vy=vo.map(i=>i.route===2?1:0);function nu(i,e){return vo.forEach((t,n)=>{let s=eu[t.route],r=s[s.length-1];if(jl[t.route].closed)Qh(t.route,t.phase*r+t.speed*i,e,n*4);else{let{s:a,back:o}=mg(r,t.speed,i+t.phase*2*((r+2*xo)/t.speed+_o));Qh(t.route,a,e,n*4),o&&(e[n*4+2]*=-1,e[n*4+3]*=-1)}}),e}function su(i,e,t,n){try{i.extensions.has("KHR_parallel_shader_compile")?i.compileAsync(e,t,n??null).then(()=>iu(i),()=>{}):(i.compile(e,t,n??null),iu(i))}catch{}}function iu(i){for(let e of i.info.programs??[])e.getUniforms?.()}var zt=512,Zt=Kh/(zt/2),bo=zt/2+1.5,jn=-6,Mo=58,au=2.5,gg=-1,di=4,Yi={n:zt,cityM:au,pitch:Zt,pocket:bo*Zt},xg=3,_g=.35,vg=(i,e)=>Math.round((i?88:132)*(e>1?1.4:1)),yg="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",Ql=`
vec2 mid(ivec2 c) { return (vec2(c) + 0.5) / RES; }`,ec=`
#define BOATS ${yo}
uniform vec4 uBoat[BOATS]; uniform vec4 uBoatSize[BOATS]; uniform float uBoatOn;
float cabinAt(vec2 l, vec4 z) { return smoothstep(-z.x * 0.85, -z.x * 0.7, l.x) * (1.0 - smoothstep(z.x * 0.3, z.x * 0.45, l.x)); }
float boatAt(vec2 q, out float top, out int which, out vec2 l, out float sd) {
  float best = 0.0; top = 0.0; which = -1; l = vec2(0.0); sd = 1e4;
  if (uBoatOn <= 0.0) return 0.0;
  for (int i = 0; i < BOATS; i++) {
    vec4 b = uBoat[i], z = uBoatSize[i];
    vec2 d = q - b.xy;
    if (dot(d, d) > (z.x + 6.0) * (z.x + 6.0)) continue;
    vec2 m = vec2(dot(d, b.zw), dot(d, vec2(b.w, -b.z)));
    float f = clamp((m.x - z.x * 0.3) / (z.x * 0.7), 0.0, 1.0);
    float s = max(abs(m.x) - z.x, abs(m.y) - z.y * sqrt(max(1.0 - f * f, 0.0)));
    if (s < sd) { sd = s; l = m; which = i; }
    float cov = clamp(0.5 - s, 0.0, 1.0) * (1.0 - smoothstep(236.0, 250.0, length(b.xy - 256.0))) * uBoatOn;
    if (cov > best) { best = cov; top = mix(z.z, z.w, cabinAt(m, z)); }
  }
  return best;
}`,Mg=`
uniform highp sampler2D tRest; uniform highp sampler2D tSim;
uniform float uTime; uniform float uSink; uniform float uFloor; uniform float uBoatDip; uniform vec4 uLift;
${Ql}
${ec}
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  vec4 r = texelFetch(tRest, c, 0);                        // height, kind (0 pocket, 1 land, 2 water), delay, lamp
  if (r.g < 0.5) { gl_FragColor = vec4(uFloor, uFloor, 0.0, 0.0); return; }
  // (a landmark's pins carry minus its number where a street's carry their lamp)
  float lift = r.a < -0.5 ? (abs(r.a + uLift.x) < 0.5 ? uLift.y : 0.0) + (abs(r.a + uLift.z) < 0.5 ? uLift.w : 0.0) : 0.0;
  float tall = smoothstep(10.0, 30.0, r.r);
  float tau = (uTime - r.b) * mix(1.0, 0.42, tall);
  // The spring: 13 rad/s, damping 0.32 (one bounce you see), 0.62 for the tallest.
  float Z = mix(0.32, 0.62, tall), W = 13.0, WD = W * sqrt(1.0 - Z * Z);
  float rise = tau <= 0.0 ? 0.0 : tau > 3.0 ? 1.0 : 1.0 - exp(-Z * W * tau) * (cos(WD * tau) + Z * W / WD * sin(WD * tau));
  float u = length(mid(c) - 256.0) / 256.0;
  float sink = smoothstep(u, u + 0.4, uSink * 1.4);
  float rest = (r.r * rise + lift) * (1.0 - sink);
  float level = rest + texelFetch(tSim, c, 0).r, hull = 0.0;
  if (r.g > 1.5) {
    // (the simulation holds the water under a hull down by uBoatDip, so the deck stands its height over the water round it)
    float top, sd; int which; vec2 l;
    float cov = boatAt(mid(c), top, which, l, sd);
    hull = cov * (top + uBoatDip * cov);
  }
  gl_FragColor = vec4(level + hull, rest, level, 0.0);
}`,bg=`
uniform highp sampler2D tSrc;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy) * 4;
  float m = -1e4;
  for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) m = max(m, texelFetch(tSrc, c + ivec2(i, j), 0).r);
  gl_FragColor = vec4(m);
}`,Sg=`
uniform highp sampler2D tH; uniform highp sampler2D t4; uniform highp sampler2D t16; uniform highp sampler2D t64;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  gl_FragColor = vec4(texelFetch(tH, c, 0).r, texelFetch(t4, c / 4, 0).r, texelFetch(t16, c / 16, 0).r, texelFetch(t64, c / 64, 0).r);
}`,Eg=`
uniform highp sampler2D tSrc; uniform vec2 uDir; uniform float uTan; uniform float uStep; uniform int uInit;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  ivec2 q = ivec2(floor(vec2(c) + 0.5 + uDir * uStep));
  bool inside = all(greaterThanEqual(q, ivec2(0))) && all(lessThan(q, ivec2(NT)));
  // (the first pass reads the heights without the boats, the rest what it made; uStep is in texels)
  vec4 src = inside ? texelFetch(tSrc, q, 0) : vec4(0.0);
  float far = inside ? (uInit == 1 ? src.b : src.r) - uTan * uStep / RES : -1e4;
  gl_FragColor = vec4(uInit == 1 ? far : max(texelFetch(tSrc, c, 0).r, far));
}`,wg=`
uniform highp sampler2D tSim; uniform highp sampler2D tH; uniform highp sampler2D tRest; uniform float uDt;
uniform vec4 uHand; uniform vec2 uHandV; uniform float uHandOn; uniform float uDip; uniform vec4 uDrops[6]; uniform float uBoatDip;
${Ql}
${ec}
float nb(ivec2 q, float kind, float own) {
  q = clamp(q, ivec2(0), ivec2(NT - 1));
  return abs(texelFetch(tRest, q, 0).g - kind) < 0.5 ? texelFetch(tSim, q, 0).r : own;
}
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  float kind = texelFetch(tRest, c, 0).g;
  if (kind < 0.5) { gl_FragColor = vec4(0.0); return; }   // the pocket
  vec4 s = texelFetch(tSim, c, 0);
  float rest = texelFetch(tH, c, 0).g;
  float off = s.r, vel = s.g;
  // (the Laplacian a unit: RES^2 that of the texels, so the rings run as fast over the city on either table)
  float lap = (nb(c + ivec2(1, 0), kind, off) + nb(c - ivec2(1, 0), kind, off) + nb(c + ivec2(0, 1), kind, off) + nb(c - ivec2(0, 1), kind, off) - 4.0 * off) * RES * RES;
  bool water = kind > 1.5;
  vel += (water ? -1.5 * off + 240.0 * lap - 0.45 * vel : -38.0 * off + 210.0 * lap - 2.6 * vel) * uDt;
  off += vel * uDt;
  if (uHandOn > 0.5) {
    float r = distance(mid(c), uHand.xy);
    if (water) {
      float R = uHand.w * 0.55;
      if (r < R) {
        float hollow = -uDip * (1.0 - r * r / (R * R));
        if (off > hollow) { off = hollow; vel = min(vel, 0.0); }
      }
      float sp = length(uHandV);
      if (sp > 0.5 && r < R * 1.9) {
        float ahead = dot(mid(c) - uHand.xy, uHandV) / (max(r, 0.5) * sp);
        vel += smoothstep(0.1, 0.9, ahead) * smoothstep(R * 0.6, R, r) * (1.0 - smoothstep(R * 1.25, R * 1.9, r)) * 1.3 * min(sp, 30.0) * uDt;
      }
    } else if (r < uHand.w) {
      float surface = uHand.z + uHand.w - sqrt(uHand.w * uHand.w - r * r);
      if (rest + off > surface) { off = surface - rest; vel = min(vel, 0.0); }
    }
  }
  // Rain on the harbour: each drop knocks a small dent into the water where it lands, and a ring runs out from it.
  if (water) for (int i = 0; i < 6; i++) {
    float r = distance(mid(c), uDrops[i].xy);
    if (r < 1.8) vel -= uDrops[i].z * (1.0 - r * r / 3.24);
  }
  if (water) {
    float top, sd; int which; vec2 l;
    float cov = boatAt(mid(c), top, which, l, sd);
    float hollow = -uBoatDip * cov;
    if (cov > 0.0 && off > hollow) { off = hollow; vel = min(vel, 0.0); }
  }
  gl_FragColor = vec4(off, vel, 0.0, 0.0);
}`,Tg="void main() { gl_FragColor = vec4(0.0); }",Ag=`
uniform float uPitch;
varying vec3 vG;
void main() {
  vG = vec3(position.x / uPitch + 256.0, position.y / uPitch, position.z / uPitch + 256.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Rg=`
#include <common>
#include <cube_uv_reflection_fragment>
uniform highp sampler2D tMax; uniform highp sampler2D tRest; uniform highp sampler2D tShadow; uniform highp sampler2D tSim;
uniform sampler2D envMap; uniform sampler2D tLamp;
uniform vec3 uCamG; uniform mat4 uGtoClip;
uniform vec3 uLight; uniform vec3 uLightColor; uniform vec2 uSunDir; uniform float uTan; uniform float uEnv; uniform float uPix;
uniform float uWell; uniform float uFloor; uniform float uTop; uniform float uLit; uniform float uSun; uniform float uSwell;
uniform vec3 uFill; uniform vec3 uFillColor; uniform float uNight; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uDome; uniform vec3 uGlow;
uniform float uRiseT; uniform float uSink; uniform sampler2D studioMap; uniform float uRoom;
uniform vec2 uSpin; uniform float uWind; uniform vec2 uWindDir; uniform float uWindT; uniform float uCloud; uniform vec2 uCloudAt; uniform float uWet;
uniform float uFlood[${vn.length}]; uniform vec2 uPicked;
varying vec3 vG;
${Ql}
${ec}

// Round pins, 0.93 of the pitch across, their heads domed a little and rounded at the rim (in pins: RES a unit).
const float RAD = 0.465, CHAMFER = 0.1, DOME = 0.7;
// The city's light after dark (linear): sodium-warm lamps, windows a little whiter, floodlights whiter still.
const vec3 LAMP = vec3(1.0, 0.56, 0.24), WINDOW = vec3(1.0, 0.74, 0.46), FLOOD = vec3(1.0, 0.8, 0.56);

uint pcg(uint v) { uint s = v * 747796405u + 2891336453u; uint w = ((s >> ((s >> 28u) + 4u)) ^ s) * 277803737u; return (w >> 22u) ^ w; }
vec4 rnd(ivec2 c) {
  uint a = pcg(uint(c.x) * 1031u + pcg(uint(c.y))), b = pcg(a), d = pcg(b), e = pcg(d);
  return vec4(uvec4(a, b, d, e) >> 8u) / 16777215.0;
}
// Each pin's material (materials.py, from OpenStreetMap): 0 steel, 1 patinated copper, 2 dark copper, 3 gilt, 4 a
// tree's crown, 5 lawn. The land's kind is 1 + 0.08 x the material (so the press still treats it all as land).
int matOf(float kind) { return kind > 1.5 ? 0 : int((kind - 1.0) * 12.5 + 0.5); }
// How a material looks in the harbour's mirror, against plain steel.
vec3 matTint(int mt) {
  return mt == 1 ? vec3(0.42, 0.78, 0.66) : mt == 2 ? vec3(0.8, 0.5, 0.36) : mt == 3 ? vec3(1.3, 1.0, 0.5) : mt == 4 ? vec3(0.2, 0.3, 0.17) : mt == 5 ? vec3(0.3, 0.42, 0.26) : vec3(1.0);
}
// Whether a pin still stands for the city at the end (1) or has sunk flush (0), as COMPOSE sinks it.
float staying(ivec2 c) {
  float u = length(mid(c) - 256.0) / 256.0;
  return 1.0 - smoothstep(0.6, 1.0, smoothstep(u, u + 0.4, uSink * 1.4));
}
// Whether a pin is the city's yet (1) or still the plinth's blank steel (0). Its part of the plan shows a moment before
// it rises (the harbour polishes, the streets light) and goes as it sinks flush, so the table starts and ends as one
// even satin disc with no trace of the map on it.
float presence(ivec2 c, float delay) { return smoothstep(-0.45, -0.1, uRiseT - delay) * staying(c); }
int gIters = 0;
float pick(vec4 m, int l) { return l == 0 ? m.r : l == 1 ? m.g : l == 2 ? m.b : m.a; }

// Through the city from o (inside the volume) along d, at most tEnd: the first pin it meets. Coarse blocks first; a
// level down only where the ray dips under a block's tallest pin, and straight down to that height when it does. A
// block is 1, 4, 16 or 64 texels across; cell is the texel hit.
bool trace(vec3 o, vec3 d, float tEnd, int steps, out float tHit, out ivec2 cell, out int face) {
  tHit = 0.0; cell = ivec2(0); face = 0;
  vec2 dir = d.xz;
  vec2 sgn = vec2(dir.x >= 0.0 ? 1.0 : -1.0, dir.y >= 0.0 ? 1.0 : -1.0);
  vec2 inv = sgn / max(abs(dir), vec2(1e-7));
  vec2 ahead = step(0.0, dir);
  float t = 0.0;
  int lvl = 3, axis = abs(dir.x) > abs(dir.y) ? 0 : 1;
  bool crossed = false;
  for (int i = 0; i < steps; i++) {
    gIters = i;
    if (t > tEnd) return false;
    vec3 p = o + d * t;
    int n = 1 << (2 * lvl);
    float s = float(n) / RES;
    vec2 blk = floor(p.xz / s);
    vec2 at = blk * s;
    bool out_ = any(lessThan(at, vec2(0.0))) || any(greaterThanEqual(at, vec2(512.0)));
    ivec2 tc = clamp(ivec2(blk) * n, ivec2(0), ivec2(NT - 1));
    float h = out_ ? uFloor : pick(texelFetch(tMax, tc, 0), lvl);
    vec2 tb = ((blk + ahead) * s - o.xz) * inv;
    float tEx = min(tb.x, tb.y);
    float yEx = o.y + d.y * min(tEx, tEnd);
    if (min(p.y, yEx) > h) {
      t = tEx + 2e-3;
      axis = tb.x < tb.y ? 0 : 1;
      crossed = true;
      // A level up where the ray leaves the parent block too (a falling ray stays under a block it went under), or
      // at once for a rising one, which may clear the parent's tallest pin from here on.
      if (lvl < 3 && (d.y > 0.0 || floor((o.xz + d.xz * t) / (s * 4.0)) != floor(blk * 0.25))) lvl++;
      continue;
    }
    if (lvl > 0) {
      if (p.y > h) { t += (h - p.y) / d.y; crossed = false; }
      lvl--;
      continue;
    }
    cell = tc;
    if (p.y > h) { tHit = t + (h - p.y) / d.y; face = 0; }
    else { tHit = t; face = crossed ? 1 + axis : 0; }
    return true;
  }
  // Out of steps (far off, at a grazing angle): down to the pin it is over, which a pixel that far can't tell apart.
  vec3 p = o + d * t;
  cell = clamp(ivec2(floor(p.xz * RES)), ivec2(0), ivec2(NT - 1));
  float h = texelFetch(tMax, cell, 0).r;
  tHit = d.y < 0.0 && p.y > h ? t + (h - p.y) / d.y : t;
  face = 0;
  return true;
}

// Where a ray from o along d leaves the volume (o inside it).
float exitT(vec3 o, vec3 d) {
  vec2 oc = o.xz - 256.0;
  float a = max(dot(d.xz, d.xz), 1e-9), b = dot(oc, d.xz), c = dot(oc, oc) - uWell * uWell;
  float t = (-b + sqrt(max(b * b - a * c, 0.0))) / a;
  if (d.y > 0.0) t = min(t, (uTop - o.y) / d.y);
  else if (d.y < 0.0) t = min(t, (uFloor - 1.0 - o.y) / d.y);
  return t;
}

float ggx(float a2, float NoH) { float k = (NoH * a2 - NoH) * NoH + 1.0; return a2 / (PI * k * k); }
float smithV(float a2, float NoV, float NoL) {
  return 0.5 / (NoL * sqrt(NoV * NoV * (1.0 - a2) + a2) + NoV * sqrt(NoL * NoL * (1.0 - a2) + a2) + 1e-5);
}
vec2 envBRDF(float r, float NoV) {
  vec4 k = r * vec4(-1.0, -0.0275, -0.572, 0.022) + vec4(1.0, 0.0425, 1.04, -0.04);
  float a = min(k.x * k.x, exp2(-9.28 * NoV)) * k.x + k.y;
  return vec2(-1.04, 1.04) * a + k.zw;
}
// The room (tinted by the sky: blue through twilight, low at night), by day a pale sky over it (what the roofs and the
// harbour mirror), and under the horizon the city's own streets, which is what a facade mirrors: lit by the sun by day
// and by the lamps at night. After dark the city's own glow hangs low in the sky, so the harbour mirrors a dark amber
// with the swell running through it rather than nothing. The city's sky goes with the city: a pin that has sunk flush
// at the end (gCity 0) mirrors the studio it stands in, lit as the studio is, so the empty table reads as the plinth's
// own steel top rather than a dark hole.
float gCity = 1.0;
vec3 env(vec3 dirL, float rough) {
  dirL = vec3(uSpin.x * dirL.x + uSpin.y * dirL.z, dirL.y, uSpin.x * dirL.z - uSpin.y * dirL.x);   // the room stays put as the table turns
  float below = smoothstep(0.04 + 0.2 * rough, -0.12 - 0.5 * rough, dirL.y);
  float above = smoothstep(-0.04 - 0.3 * rough, 0.55, dirL.y);
  float low = smoothstep(-0.06 - 0.2 * rough, 0.02, dirL.y) * (1.0 - smoothstep(0.0, 0.45 + 0.3 * rough, dirL.y));
  vec3 city = (textureCubeUV(envMap, dirL, rough).rgb * uSky + uDome * above + uGlow * low + uGround * below) * uEnv;
  if (gCity > 0.999) return city;
  return mix(textureCubeUV(studioMap, dirL, rough).rgb * uRoom, city, gCity);
}

vec3 brdf(vec3 n, vec3 V, vec3 L, vec3 f0, float a2, float NoV) {
  vec3 H = normalize(V + L);
  float NoL = max(dot(n, L), 0.0), NoH = max(dot(n, H), 0.0), VoH = max(dot(V, H), 0.0);
  vec3 F = f0 + (1.0 - f0) * pow(1.0 - VoH, 5.0);
  return ggx(a2, NoH) * smithV(a2, NoV, NoL) * F * NoL;
}
// Steel under the light, the room's own low lamp after dark (no shadows: it is broad and close) and the room. n and V
// in table space; lit is the light's visibility. The land's steel is satin, bead-blasted: besides its sheen it has a
// broad lobe and a matt one (broad of them), so a face the light falls on reads lit from any side, and the shadows
// read as a sundial's at any hour, not only when the sun stands behind the city; the harbour's is polished, all sheen.
vec3 steel(vec3 n, vec3 V, vec3 f0, float rough, float lit, vec3 envC, float broad) {
  float a2 = max(pow4(rough), 1.2e-5), NoV = max(dot(n, V), 1e-3);
  vec3 sun = mix(brdf(n, V, uLight, f0, a2, NoV), brdf(n, V, uLight, f0, 0.16, NoV), broad)
           + f0 * (broad * 0.2 * max(dot(n, uLight), 0.0));
  vec3 direct = sun * uLightColor * lit * uSun;
  if (uNight > 0.01) direct += brdf(n, V, uFill, f0, mix(a2, 0.16, broad), NoV) * uFillColor * uSun;
  vec2 ab = envBRDF(rough, NoV);
  return min(direct, vec3(48.0)) + envC * (f0 * ab.x + ab.y);
}

float hash3(ivec2 c, int a) { return float(pcg(uint(c.x) * 1031u + pcg(uint(c.y) * 7u + pcg(uint(a)))) >> 8u) / 16777215.0; }

// After dark the city lights up: lamps along the streets and quays, pins whose heads glow (each comes on at its own
// moment through dusk), and windows along the facades, floor by floor (3 m, 1.2 units), some of them lit. lamp is the
// pin's lamp (0 none), h its height, fp the pins a pixel spans, many whether it holds several.
// The streets themselves glow faintly, more in some quarters than others (a noise 30 m across), so from far off the
// street plan draws itself in gold between the dark blocks.
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  ivec2 a = ivec2(i) + 4096;
  return mix(mix(hash3(a, 11), hash3(a + ivec2(1, 0), 11), f.x), mix(hash3(a + ivec2(0, 1), 11), hash3(a + ivec2(1, 1), 11), f.x), f.y);
}
vec3 glow(ivec2 c, vec3 P, int face, float h, float fp, float many, float lamp, int mt) {
  if (uNight < 0.01 || mt == 4) return vec3(0.0);             // (no windows in the trees)
  if (face == 0) {
    vec3 e = vec3(0.0);
    if (h > -0.5 && h < 0.3) e = LAMP * (0.55 * uNight * (0.25 + 0.75 * vnoise(mid(c) / 12.0)) * (0.6 + 0.4 * hash3(c, 5)) * (mt == 5 ? 0.2 : 1.0));
    if (lamp <= 0.0 || hash3(c, 3) > uNight * 1.15 - 0.1) return e;
    // (a lamp's light is its own, whatever the pin: a smaller head holds it brighter)
    float rr = length(P.xz - mid(c)) * RES;
    return e + LAMP * (lamp * 16.0 * LAMP_K * mix(1.0 - smoothstep(0.16, 0.4, rr), 0.3, many));
  }
  if (h < 2.5 || P.y < 1.1 || P.y > h - 0.7 || lamp < -0.5) return vec3(0.0);   // (a landmark is floodlit instead)
  float fl = floor(P.y / 1.2), v = fract(P.y / 1.2);
  float k = hash3(c, int(fl) * 4 + face);
  if (k > 0.24 * uNight) return vec3(0.0);
  float band = mix(smoothstep(0.24, 0.32, v) * (1.0 - smoothstep(0.68, 0.76, v)), 0.44, clamp(fp * 1.5 - 0.4, 0.0, 1.0));
  vec3 tone = k < 0.05 * uNight ? vec3(0.62, 0.8, 1.0) : WINDOW;     // a few lit cooler, by screens or LEDs
  return tone * (band * (1.6 + 5.0 * hash3(c, int(fl) * 4 + face + 2)));
}

// A boat's lights after dark: its cabin's windows along its sides and its glass roof lit from inside, and its running
// lights (white at the mast and the stern, red to port, green to starboard), each a point the pixel always holds. P is
// the point hit, on boat i; h its pin's height.
vec3 boatGlow(int i, vec3 P, int face, float h, float many) {
  vec4 b = uBoat[i], z = uBoatSize[i];
  vec2 d = P.xz - b.xy, l = vec2(dot(d, b.zw), dot(d, vec2(b.w, -b.z)));
  float cab = cabinAt(l, z);
  if (face != 0) return WINDOW * (2.2 * cab * smoothstep(-0.9, -0.75, P.y) * (1.0 - smoothstep(h - 0.14, h - 0.05, P.y)));
  vec3 e = WINDOW * (0.45 * cab);
  float mast = length(l - vec2(z.x * 0.55, 0.0)), stern = length(l - vec2(-z.x * 0.95, 0.0));
  float port = length(l - vec2(z.x * 0.3, z.y * 0.75)), star = length(l - vec2(z.x * 0.3, -z.y * 0.75));
  vec4 r = vec4(mast, stern, port, star);
  vec4 pt = mix(vec4(1.0) - smoothstep(vec4(0.1), vec4(0.32), r), vec4(0.22) * step(r, vec4(0.9)), many) * 18.0;
  return e + vec3(1.0, 0.93, 0.82) * (pt.x + pt.y) + vec3(1.0, 0.08, 0.04) * pt.z + vec3(0.1, 1.0, 0.35) * pt.w;
}

// A landmark floodlit after dark: lamps at its walls' foot, spaced along them, so the light is brightest low and fans
// up the wall in scallops; a tower or a spire is lit to its tip, a roof only grazed. id is the landmark's number (its
// pins' rest.a is minus it), P the point hit on its pin, h the pin's height. Returns the light's strength there.
float flood(float id, vec3 P, int face, float h, float many) {
  float k = uFlood[int(id + 0.5) - 1];
  if (k <= 0.0) return 0.0;
  if (face == 0) return 0.1 * k;
  float along = face == 1 ? P.z : P.x;
  float scallop = mix(0.6 + 0.4 * cos(along * 1.15), 0.8, many);
  float spire = smoothstep(14.0, 24.0, h);
  return k * scallop * mix(0.3 + 0.7 * exp(-max(P.y, 0.0) / 7.0), 0.7, spire);
}

// Whether a point sees the light. The shadow texture holds, per pin, the height a point at the pin's centre must clear;
// a point nearer the light clears it lower (the pins that shade it are that much further off), so a shadow's edge
// runs across a pin's top where it falls, not pin by pin.
float sunSeen(ivec2 c, vec3 P, float fp) {
  float need = texelFetch(tShadow, c, 0).r + dot(P.xz - mid(c), uSunDir) * uTan;
  float w = 0.015 + 0.5 * fp / RES * uTan + 0.3 * uCloud * uCloud;
  return smoothstep(-w, w, P.y - need);
}
// The clouds' shadows: the forecast's cover as a field of soft cells 300-600 m across, cast from a layer over the
// table along the sun and drifting with the wind (faster than life, as a miniature's time-lapse runs). Past nine
// tenths of cover the cells close: overcast, the sun's light a tenth of itself everywhere.
float cloudShade(vec3 P) {
  if (uCloud < 0.02) return 1.0;
  vec2 q = (P.xz + uSunDir * min((90.0 - P.y) / max(uTan, 0.08), 900.0)) / 170.0 + uCloudAt;
  float n = 0.68 * vnoise(q) + 0.32 * vnoise(q * 2.3 + 5.1);
  float edge = 1.0 - uCloud * 1.05;
  return 1.0 - 0.88 * smoothstep(edge - 0.1, edge + 0.1, n);
}
// A surface with a colour of its own (the copper's patina, leaves, grass): diffuse in the sun and the room, with a dull
// sheen (glossier wet).
vec3 coat(vec3 n, vec3 V, vec3 alb, float rough, float lit) {
  float NoL = max(dot(n, uLight), 0.0);
  vec3 c = alb * (uLightColor * (NoL * lit * uSun / PI) + env(n, 1.0));
  if (uNight > 0.01) c += alb * uFillColor * (max(dot(n, uFill), 0.0) * uSun / PI);
  float r = mix(rough, 0.16, uWet);
  return c + steel(n, V, vec3(0.04), r, lit, env(reflect(-V, n), r), 0.0);
}

void main() {
  vec3 o = uCamG, d = normalize(vG - uCamG);
  vec2 oc = o.xz - 256.0;
  float a = max(dot(d.xz, d.xz), 1e-9), b = dot(oc, d.xz), cc = dot(oc, oc) - uWell * uWell, disc = b * b - a * cc;
  if (disc <= 0.0) discard;
  float sq = sqrt(disc), y0 = (uFloor - 1.0 - o.y) / d.y, y1 = (uTop - o.y) / d.y;
  float tIn = max(max((-b - sq) / a, min(y0, y1)), 0.0), tOut = min((-b + sq) / a, max(y0, y1));
  if (tIn >= tOut) discard;
  vec3 p0 = o + d * tIn, V = -d;
  gCity = staying(ivec2(NT / 2));                          // (the pocket's floor and wall: as the table's middle)
  float t; ivec2 c; int face;
  vec3 col, P;
  bool hit = trace(p0, d, tOut - tIn, STEPS, t, c, face);
  int iters = gIters;
  if (!hit) {
    // Out through the pocket's wall below the plinth's top: the dark stone inside the pocket. Above it: nothing here.
    P = p0 + d * (tOut - tIn);
    if (P.y > 0.0) discard;
    col = env(normalize(vec3(256.0 - P.x, 0.0, 256.0 - P.z)), 0.8) * 0.012 * smoothstep(FLOOR_G, 0.0, P.y);
  } else {
    P = p0 + d * t;
    vec4 rest = texelFetch(tRest, c, 0);
    float h = texelFetch(tMax, c, 0).r, kind = rest.g;
    float dist = tIn + t;
    vec4 rn = rnd(c);
    bool water = kind > 1.5;
    int mt = matOf(kind);
    gCity = staying(c);
    // A pin a boat has raised out of the water is the boat's, not the harbour's.
    float bTop = 0.0, bSd = 1e4; int bI = -1; vec2 bL = vec2(0.0);
    float bCov = water ? boatAt(mid(c), bTop, bI, bL, bSd) : 0.0;
    bool boat = bCov > 0.3;
    float m = smoothstep(-0.45, -0.1, uRiseT - rest.b) * gCity, wm = water && !boat ? m : 0.0;   // (a blank pin: land's steel, unlit)
    vec2 sgn = vec2(d.x >= 0.0 ? 1.0 : -1.0, d.z >= 0.0 ? 1.0 : -1.0);
    vec3 n = face == 0 ? vec3(0.0, 1.0, 0.0) : face == 1 ? vec3(-sgn.x, 0.0, 0.0) : vec3(0.0, 0.0, -sgn.y);
    float fp = dist * uPix / max(abs(dot(n, V)), 0.2) * RES; // pins a pixel spans here
    float many = smoothstep(0.4, 1.6, fp);                   // past ~1 pin a pixel, the pixel holds their average
    float gap, ao = 1.0;
    if (kind < 0.5) {
      // The pocket's floor and the pins' feet: near black.
      col = env(reflect(-V, n), 0.7) * 0.015;
      gap = 0.0;
    } else {
      float tilt = mix(0.007, 0.012, wm);
      // The harbour's pins are lapped flat and tilted along a slow swell (three trains of it), so the water breaks the
      // sun into glints that run across it.
      vec2 q = mid(c), swell = vec2(0.0);
      if (wm > 0.0) {
        // (the first train runs with the wind, and all three grow with it)
        float sea = 0.55 + 1.5 * uWind;
        swell += sea * 0.024 * uWindDir * cos(dot(q, uWindDir * 0.31) - uSwell * 1.1);
        swell += sea * 0.018 * vec2(-0.45, 0.89) * cos(dot(q, vec2(-0.45, 0.89) * 0.53) - uSwell * 1.6 + 1.7);
        swell += sea * 0.011 * vec2(0.95, -0.31) * cos(dot(q, vec2(0.95, -0.31) * 0.97) - uSwell * 2.3 + 4.1);
        // The wave the hand set off (the simulation's offsets): each pin tilted along its slope (a unit's rise a unit).
        float sl = texelFetch(tSim, max(c - ivec2(1, 0), ivec2(0)), 0).r, sr = texelFetch(tSim, min(c + ivec2(1, 0), ivec2(NT - 1)), 0).r;
        float su = texelFetch(tSim, max(c - ivec2(0, 1), ivec2(0)), 0).r, sd = texelFetch(tSim, min(c + ivec2(0, 1), ivec2(NT - 1)), 0).r;
        swell -= 0.5 * RES * vec2(sr - sl, sd - su);
        swell *= wm;
      }
      vec2 jitter = (rn.zw - 0.5) * 2.0 * tilt * (1.0 - many) + swell;
      // A tree's leaves: each pin's head turned this way and that by the wind, in gusts that run across the city.
      if (mt == 4) {
        float gust = 0.35 + 0.65 * vnoise(P.xz / 26.0 - uWindDir * uWindT * 2.2);
        jitter += (0.06 + 0.32 * uWind * gust) * vec2(sin(uWindT * 6.1 + rn.x * 40.0), cos(uWindT * 4.7 + rn.y * 40.0)) * m;
      }
      if (face == 0) {
        // A domed head: the normal leans out with the radius, harder over the rounded rim; between the heads, the
        // dark gaps down to the pins' feet. Far off, a pixel holds the average.
        vec2 uv = (P.xz - mid(c)) * RES;                       // (in pins)
        float rr = length(uv);
        vec2 out2 = rr > 1e-4 ? uv / rr : vec2(0.0);
        float rim = clamp((rr - (RAD - CHAMFER)) / CHAMFER, 0.0, 1.0) * clamp(CHAMFER / fp - 0.4, 0.0, 1.0);
        float lean = (DOME * rr * (1.0 - wm) + rim * rim * 1.1) * (1.0 - many);
        n = normalize(vec3(out2.x * sin(lean) + jitter.x, cos(lean), out2.y * sin(lean) + jitter.y));
        gap = mix(smoothstep(RAD - 0.5 * fp, RAD + 0.5 * fp, rr), 1.0 - PI * RAD * RAD, many);
        gap *= 0.45 + 0.55 * clamp(V.y * 1.6, 0.0, 1.0);      // at a low angle the heads hide the gaps between them
        // The sky a pin sees past its neighbours (6 m and 15 m off): lower in a courtyard or a narrow street.
        float occ = 0.0;
        for (int k = 0; k < 8; k++) {
          float ang = float(k) * 0.7854 + rn.x;
          float r = k < 4 ? 2.5 : 6.0;
          ivec2 q = clamp(c + ivec2(round(vec2(cos(ang), sin(ang)) * r * RES)), ivec2(0), ivec2(NT - 1));
          occ += clamp((texelFetch(tMax, q, 0).r - h) / (r * 1.6), 0.0, 1.0);
        }
        ao = 1.0 - 0.55 * occ / 8.0;
      } else {
        // A pin's side: a rod, its normal turning across it; rounded into the head at the top.
        float along = ((face == 1 ? P.z : P.x) - (face == 1 ? mid(c).y : mid(c).x)) * RES;   // (in pins)
        float down = (h - P.y) * RES;
        float a = asin(clamp(along / RAD, -1.0, 1.0)) * (1.0 - many);
        n = n * cos(a) + (face == 1 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0)) * sin(a);
        float band = (1.0 - clamp(down / CHAMFER, 0.0, 1.0)) * clamp(CHAMFER / fp - 0.4, 0.0, 1.0);
        n = normalize(n + vec3(0.0, band * 1.2, 0.0));
        gap = mix(smoothstep(RAD - 0.5 * fp, RAD + 0.5 * fp, abs(along)), 1.0 - 2.0 * RAD, many);
        // Darker towards a facade's foot, where the street in front of it meets it.
        ivec2 front = clamp(c - ivec2(face == 1 ? int(sgn.x) : 0, face == 2 ? int(sgn.y) : 0), ivec2(0), ivec2(NT - 1));
        float ground = texelFetch(tMax, front, 0).r;
        ao = 0.28 + 0.72 * (1.0 - exp(-max(P.y - ground, 0.0) / 4.5));
      }
      float rough = mix(mix(0.22, 0.32, rn.x), mix(0.035, 0.08, rn.x), wm);
      rough = mix(rough, mix(0.3, 0.09, wm), many);
      rough *= 1.0 - 0.45 * uWet * (1.0 - wm);                   // rain: the land's steel wet and glossier
      // Up close the tilt is in the normal; far off, a pixel's pins spread the highlight instead.
      rough = sqrt(rough * rough + many * (tilt * 9.0 + 0.06 * (1.0 - wm)));
      vec3 f0 = vec3(mix(mix(0.50, 0.60, rn.y), 0.55, many)) * vec3(0.985, 0.995, 1.0);
      // The palace's copper, browned since it was relaid (2006-09), and the gilt of the tower's crowns: metals, so only
      // their colour and finish change.
      if (mt == 2) { f0 = mix(f0, vec3(0.44, 0.25, 0.17) * mix(0.85, 1.1, rn.y), m); rough = mix(rough, 0.36, m); }
      else if (mt == 3) { f0 = mix(f0, vec3(1.0, 0.77, 0.34), m); rough = mix(rough, 0.2, m); }
      // The landmark picked up (uPicked: its number, how far up): its steel polished, so it gleams apart from the rest.
      float sel = rest.a < -0.5 && abs(rest.a + uPicked.x) < 0.5 ? uPicked.y : 0.0;
      f0 *= 1.0 + 0.22 * sel; rough *= 1.0 - 0.45 * sel;
      float lit = sunSeen(c, P, fp) * cloudShade(P);
      vec3 R = reflect(-V, n);
      vec3 envC = env(R, rough);
#ifdef REFLECT
      // The harbour mirrors what stands over it: a second ray from the polished pins.
      if (wm > 0.0 && face == 0 && R.y > 0.0 && fp < 2.5) {
        vec3 ro = P + vec3(0.0, 0.01, 0.0);
        float tr; ivec2 cr; int fr;
        vec4 rr4 = vec4(0.0);
        if (trace(ro, R, exitT(ro, R), REFLECT_STEPS, tr, cr, fr)) rr4 = texelFetch(tRest, cr, 0);
        if (rr4.g > 0.5) {
          vec3 Pr = ro + R * tr;
          vec2 sr = vec2(R.x >= 0.0 ? 1.0 : -1.0, R.z >= 0.0 ? 1.0 : -1.0);
          vec3 nr = fr == 0 ? vec3(0.0, 1.0, 0.0) : fr == 1 ? vec3(-sr.x, 0.0, 0.0) : vec3(0.0, 0.0, -sr.y);
          float hr = texelFetch(tMax, cr, 0).r;
          int mr = matOf(rr4.g);
          vec3 seen = steel(nr, -R, vec3(0.55), 0.36, sunSeen(cr, Pr, 1.0) * cloudShade(Pr), env(reflect(R, nr), 0.36), 0.4);
          seen *= mix(vec3(1.0), matTint(mr), presence(cr, rr4.b));
          float foot = fr == 0 ? 1.0 : 0.3 + 0.7 * (1.0 - exp(-max(Pr.y, 0.0) / 4.5));
          vec3 em = glow(cr, Pr, fr, hr, 1.0, 1.0, rr4.a, mr);
          if (rr4.a < -0.5 && uNight > 0.01) em += vec3(0.55) * FLOOD * (flood(-rr4.a, Pr, fr, hr, 1.0) * 1.5 * uNight);
          if (rr4.g > 1.5) {
            // (a boat seen in the water: its lights, not the street's)
            float bt, bs; int bw; vec2 bl;
            if (boatAt(vec2(cr) + 0.5, bt, bw, bl, bs) > 0.3) em = uNight > 0.01 ? boatGlow(bw, Pr, fr, hr, 1.0) * uNight : vec3(0.0);
          }
          envC = mix(envC, seen * foot + em * presence(cr, rr4.b), wm);
        }
      }
#endif
      col = steel(n, V, f0, rough, lit, envC, 0.42 * (1.0 - wm)) * ao;
      if ((mt == 1 || mt >= 4) && m > 0.0) {
        // The patina (verdigris), the trees' crowns and the lawns: coloured, matt; darker wet. Leaves glow a little
        // with the sun behind them.
        vec3 alb = mt == 1 ? vec3(0.12, 0.29, 0.22) : mt == 4 ? vec3(0.026, 0.048, 0.02) : vec3(0.038, 0.062, 0.028);
        alb *= mix(0.85, 1.15, rn.y) * (1.0 - 0.3 * uWet);
        vec3 own = coat(n, V, alb, mt == 1 ? 0.55 : 0.8, lit) * ao;
        if (mt == 4) own += vec3(0.05, 0.08, 0.012) * uLightColor * (lit * uSun * pow(max(dot(-V, uLight), 0.0), 3.0) * 0.5);
        col = mix(col, own, m);
      }
      if (boat) {
        // The boats' paint, satin: the canal boats' hulls a deep blue under pale roofs over their cabins, the harbour
        // bus white with a dark band of windows; the decks fore and aft bare steel.
        vec4 z = uBoatSize[bI];
        bool bus = z.w > 1.2, cabin = cabinAt(bL, z) > 0.5;
        vec3 alb = face == 0 ? (cabin ? vec3(0.52, 0.53, 0.52) : vec3(0.0)) : bus ? vec3(0.55, 0.56, 0.55) : vec3(0.011, 0.02, 0.048);
        if (face != 0 && bus && P.y > h - 0.5) alb = vec3(0.01);
        if (alb.r > 0.0 || face != 0) col = coat(n, V, alb, 0.32, lit) * ao;
      }
      if (uNight > 0.01) {
        // The lamps' light on the streets round them and up the feet of the facades (the steel takes it as it takes
        // the room's light), then the lamps and the windows themselves.
        vec2 at = face == 0 ? P.xz : P.xz - vec2(face == 1 ? sgn.x : 0.0, face == 2 ? sgn.y : 0.0) * 0.7;
        float pool = texture2D(tLamp, at / 512.0).r * exp(-max(P.y, 0.0) / 2.2) * mix(1.0, 0.25, wm);
        col += f0 * LAMP * (pool * 2.2 * uNight * m) * ao;
        if (boat) col += boatGlow(bI, P, face, h, many) * (uNight * m);
        else col += glow(c, P, face, h, fp, many, rest.a, mt) * m;
        // A landmark's floodlights on its walls (the patina takes them green).
        if (rest.a < -0.5) col += (mt == 1 ? vec3(0.16, 0.36, 0.28) : f0) * FLOOD * (flood(-rest.a, P, face, h, many) * 1.5 * uNight * m) * mix(1.0, ao, 0.5);
        // The water round a boat, lit by its cabin.
        if (wm > 0.0 && bSd < 5.0) col += f0 * WINDOW * (0.45 * exp(-max(bSd, 0.0) / 1.3) * uNight * wm);
        if (wm > 0.0 && face == 0 && R.y > 0.02) {
          // The quays' lamps in the harbour: the lamp map read where the mirrored ray climbs past a lamp's height,
          // at four heights, so each lamp lies on the water as a streak towards the eye that the swell breaks up.
          vec2 run = R.xz / R.y;
          float seen = 0.0;
          for (int i = 0; i < 4; i++) {
            vec2 q = P.xz + run * min(0.6 * exp2(float(i)), 40.0 / max(length(run), 1e-3));
            seen += texture2D(tLamp, q / 512.0).r;
          }
          col += f0 * LAMP * (seen * 0.9 * uNight * wm);
        }
      }
#ifdef DEBUG
      col = DEBUG == 6 ? (iters >= STEPS - 1 ? vec3(4.0, 0.0, 0.0) : vec3(float(iters) / float(STEPS))) : DEBUG == 1 ? vec3(lit) : DEBUG == 2 ? n * 0.5 + 0.5 : DEBUG == 3 ? envC : DEBUG == 4 ? vec3(ao) : vec3(texelFetch(tShadow, c, 0).r - h) * 0.1 + 0.5;
#endif
    }
    col *= 1.0 - gap * 0.94;
  }
  col *= uLit;
  gl_FragColor = vec4(col, 1.0);
  vec4 clip = uGtoClip * vec4(P, 1.0);
  gl_FragDepth = clamp(0.5 * clip.z / clip.w + 0.5, 0.0, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,ui=(i,e=i)=>new Gt(i,e,{type:sn,format:un,minFilter:Ut,magFilter:Ut,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),ru=typeof location<"u"&&Number(new URLSearchParams(location.search).get("pins-debug"))||0;function ou(i){let{renderer:e}=i,t=e.extensions;if(!t.has("EXT_color_buffer_float")&&!t.has("EXT_color_buffer_half_float"))return null;let n=Ns?2:1,s=zt*n,r=(f,T)=>Math.floor(T*n)*s+Math.floor(f*n),a=new Float32Array(s*s*4),o=new Vi(a,s,s,un,_n);o.minFilter=o.magFilter=Ut;let l=new Float32Array(s*s),c={col:200.5,row:213.5,h:37.4},u=!1,m=!1,h=!0,g=-1,_=1,M=new Float32Array(0),x=!1,d=0,w=!0,R=!1,y=!0,E=-1,b=new Int32Array(0),P=vn.map(()=>null),v=0;async function S(f,T,L=s){for(let C=0;C<f;C+=L)if(T(C,Math.min(f,C+L)),!(performance.now()-v<6)){if(await new Promise(D=>{let ne=new MessageChannel;ne.port1.onmessage=()=>{ne.port1.close(),D()},ne.port2.postMessage(0)}),!h)throw new Error("left");v=performance.now()}}(async()=>{let f=fetch(i.marks).then(lt=>lt.ok?lt.blob():null).then(lt=>lt&&createImageBitmap(lt,{colorSpaceConversion:"none",premultiplyAlpha:"none"})).catch(()=>null),T=await fetch(i.city);if(!T.ok)throw new Error(`city: ${T.status}`);let L=await createImageBitmap(await T.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),C=document.createElement("canvas");C.width=C.height=s;let D=C.getContext("2d",{willReadFrequently:!0});D.drawImage(L,0,0),L.close();let ne=D.getImageData(0,0,s,s).data,he=0,ae=-1,ge=0,ue=[];if(await S(s*s,(lt,je)=>{for(let ze=lt;ze<je;ze++){let Vt=ne[ze*4+2];if(Vt&2){he++;let At=(ne[ze*4]<<8|ne[ze*4+1])*128/65535,Kt=Vt&1&&At<.5?gg:At/au;a[ze*4]=Kt,a[ze*4+1]=Vt&1&&At<.5?2:1+.08*Math.min(5,Vt>>2),a[ze*4+1]===2&&ue.push(ze),l[ze]=Kt,Kt>ae&&(ae=Kt,ge=ze)}else a[ze*4]=jn,l[ze]=jn}}),he!==go||ae<30||ae>45)throw new Error(`city: ${he} pins, tallest ${ae.toFixed(1)}`);let Ne={col:(ge%s+.5)/n,row:(Math.floor(ge/s)+.5)/n,h:ae},$e=new Float32Array(he),Ae=7,pe=0,Ye=1/0,Ie=-1/0,Be=()=>(Ae=Ae*16807%2147483647)/2147483647;await S(s*s,(lt,je)=>{for(let ze=lt;ze<je;ze++){let Vt=(ze%s+.5)/n,At=(Math.floor(ze/s)+.5)/n,fn=.6+Math.hypot(Vt-Ne.col,At-Ne.row)*.0062+(Be()-.5)*.09;a[ze*4+2]=fn,a[ze*4+1]>.5&&($e[pe++]=fn,Ye=Math.min(Ye,fn),Ie=Math.max(Ie,fn))}});let ut=4096,le=ut/(Ie-Ye),dt=new Uint32Array(ut+1),it=new Float32Array(he),Ft=lt=>Math.min(ut-1,Math.max(0,Math.floor((lt-Ye)*le)));await S(he,(lt,je)=>{for(let ze=lt;ze<je;ze++)dt[Ft($e[ze])+1]++});for(let lt=0;lt<ut;lt++)dt[lt+1]+=dt[lt];let an=dt.slice(0,ut);await S(he,(lt,je)=>{for(let ze=lt;ze<je;ze++)it[an[Ft($e[ze])]++]=$e[ze]}),await S(ut,(lt,je)=>{for(let ze=lt;ze<je;ze++)it.subarray(dt[ze],dt[ze+1]).sort()},64),await B(Be);let Sn=vn.map(()=>null),On=await f;if(On){D.clearRect(0,0,s,s),D.drawImage(On,0,0),On.close();let lt=D.getImageData(0,0,s,s).data,je=vn.map(()=>[0,0,0,-1e9]);await S(s*s,(ze,Vt)=>{for(let At=ze;At<Vt;At++){let Kt=a[At*4+1],fn=lt[At*4];if(fn>100&&(fn=0),!fn||fn>vn.length||Kt<.5||Kt>1.5)continue;a[At*4+3]=-fn;let Os=je[fn-1];Os[0]++,Os[1]+=(At%s+.5)/n,Os[2]+=(Math.floor(At/s)+.5)/n,Os[3]=Math.max(Os[3],a[At*4])}}),je.forEach(([ze,Vt,At,Kt],fn)=>{ze&&(Sn[fn]={x:Vt/ze,z:At/ze,top:Kt,reach:0,pins:ze})}),await S(s*s,(ze,Vt)=>{for(let At=ze;At<Vt;At++){let Kt=a[At*4+3]<-.5?Sn[-a[At*4+3]-1]:null;Kt&&(Kt.reach=Math.max(Kt.reach,Math.hypot((At%s+.5)/n-Kt.x,(Math.floor(At/s)+.5)/n-Kt.z)))}})}o.source.dataReady=!1,o.needsUpdate=!0,e.initTexture(o),o.source.dataReady=!0;let st=e.getContext(),yt=e.state;await S(s,(lt,je)=>{yt.bindTexture(st.TEXTURE_2D,e.properties.get(o).__webglTexture),yt.pixelStorei(st.UNPACK_FLIP_Y_WEBGL,!1),yt.pixelStorei(st.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),yt.pixelStorei(st.UNPACK_ALIGNMENT,4),yt.pixelStorei(st.UNPACK_ROW_LENGTH,0),yt.pixelStorei(st.UNPACK_SKIP_PIXELS,0),yt.pixelStorei(st.UNPACK_SKIP_ROWS,0),st.texSubImage2D(st.TEXTURE_2D,0,0,lt,s,je-lt,st.RGBA,st.FLOAT,a.subarray(lt*s*4,je*s*4))},64),h&&(c=Ne,M=it,b=Int32Array.from(ue),Sn.forEach((lt,je)=>P[je]=lt),u=!0,w=!0,i.invalidate())})().catch(f=>{h&&(m=!0,i.onFail(f),i.invalidate())});let N=new Uint8Array(s*s),F=new Vi(N,s,s,or,nn);F.minFilter=F.magFilter=It;async function B(f){let T=async pe=>{let Ye=new Uint8Array(s*s),Ie=new Uint8Array(s*s);return await S(s,(Be,ut)=>{for(let le=Be;le<ut;le++){let dt=0,it=pe(le*s)?1:0;for(let Ft=0;Ft<s;Ft++){let an=Ft+1<s&&pe(le*s+Ft+1)?1:0;Ye[le*s+Ft]=dt|it|an,dt=it,it=an}}},8),await S(s,(Be,ut)=>{for(let le=Be*s;le<ut*s;le++)Ie[le]=Ye[le]|(le>=s?Ye[le-s]:0)|(le+s<s*s?Ye[le+s]:0)},8),Ie},L=pe=>a[pe*4+1],C=pe=>L(pe)>.5&&L(pe)<1.5,D=pe=>Math.abs(L(pe)-1.32)<.02,ne=await T(pe=>C(pe)&&!D(pe)&&a[pe*4]>2),he=await T(pe=>L(pe)===2),ae=new Float32Array(s*s);await S(s*s,(pe,Ye)=>{for(let Ie=pe;Ie<Ye;Ie++){if(a[Ie*4+3]=0,!C(Ie)||a[Ie*4]>.4)continue;let Be=(he[Ie]?.15:ne[Ie]?.1:0)/n;Be&&f()<Be&&(a[Ie*4+3]=ae[Ie]=.6+.4*f())}});let ge=n,ue=3*n,Ne=[];for(let pe=-ue;pe<=ue;pe++)Ne.push(Math.exp(-(pe*pe)/(2*ge*ge)));let $e=2*Math.PI,Ae=new Float32Array(s*s);await S(s,(pe,Ye)=>{for(let Ie=pe;Ie<Ye;Ie++)for(let Be=0;Be<s;Be++){let ut=0;for(let le=-ue;le<=ue;le++){let dt=Be+le;dt>=0&&dt<s&&(ut+=ae[Ie*s+dt]*Ne[le+ue])}Ae[Ie*s+Be]=ut}},8),await S(s,(pe,Ye)=>{for(let Ie=pe;Ie<Ye;Ie++)for(let Be=0;Be<s;Be++){let ut=0;for(let le=-ue;le<=ue;le++){let dt=Ie+le;dt>=0&&dt<s&&(ut+=Ae[dt*s+Be]*Ne[le+ue])}N[Ie*s+Be]=Math.min(255,Math.round(ut/$e*2.5*255))}},8),F.needsUpdate=!0,e.initTexture(F)}let H=new Tn,I=new Yn(-1,1,1,-1,0,1),G=new tn;G.setAttribute("position",new Nt([-1,-1,0,3,-1,0,-1,3,0],3));let Y=new wt(G);Y.frustumCulled=!1,H.add(Y);let q={RES:n.toFixed(1),NT:String(s)},se=(f,T)=>new Yt({vertexShader:yg,fragmentShader:f,uniforms:T,defines:q,depthTest:!1,depthWrite:!1}),X=ui(s),K=ui(s),re=ui(s),Le=ui(s/4),ee=ui(s/16),De=ui(s/64),Ue=ui(s),at=ui(s),$=ui(s),Q=[X,K],Re=()=>Array.from({length:yo},()=>new bt),Fe={uBoat:{value:Re()},uBoatOn:{value:0},uBoatDip:{value:0},uBoatSize:{value:Re().map((f,T)=>f.fromArray(tu,T*4))}},be=se(Mg,{tRest:{value:o},tSim:{value:X.texture},uTime:{value:0},uSink:{value:0},uFloor:{value:jn},uLift:{value:new bt},...Fe}),Oe=se(bg,{tSrc:{value:null}}),Tt=se(Sg,{tH:{value:re.texture},t4:{value:Le.texture},t16:{value:ee.texture},t64:{value:De.texture}}),ke=se(Eg,{tSrc:{value:null},uDir:{value:new ye},uTan:{value:0},uStep:{value:1},uInit:{value:1}}),Je=se(wg,{tSim:{value:X.texture},tH:{value:re.texture},tRest:{value:o},uDt:{value:1/120},uHand:{value:new bt},uHandV:{value:new ye},uHandOn:{value:0},uDip:{value:.5},uDrops:{value:Array.from({length:6},()=>new bt)},...Fe,uBoat:{value:Re()}}),gt=se(Tg,{}),Ve=(f,T)=>{Y.material=f,e.setRenderTarget(T),e.render(H,I)};for(let f of[Je,gt]){let T=e.getRenderTarget();Y.material=f,e.setRenderTarget(K),su(e,H,I),e.setRenderTarget(T)}let xt=new Ci(e),St=null,Lt=(f,T=Zn)=>new Wn({color:f,side:T}),mt=(f,T,L)=>new et().setRGB(f,T,L,Hn);function Et(){let f=new Tn,T=[],L=ne=>(T.push(ne),f.add(ne),ne);L(new wt(new In(8,6,8),Lt(mt(.004,.0042,.0046),Ot)));let C=(ne,he,ae,ge)=>{let ue=L(new wt(new qn(ne,he),Lt(ge,hn)));ue.position.set(...ae),ue.lookAt(0,.05,0)};C(2.6,.5,[-1.3,.75,-1.6],mt(2.3,2.25,2.15)),C(1.4,1.4,[.3,1.8,.4],mt(.7,.7,.72));let D=xt.fromScene(f,0,.01,20);return T.forEach(ne=>{ne.geometry.dispose(),ne.material.dispose()}),D}St=Et();function O(){let f=new Tn,T=[],L=ne=>(T.push(ne),f.add(ne),ne);L(new wt(new In(8,6,8),Lt(mt(.15,.148,.144),Ot)));let C=(ne,he,ae,ge)=>{let ue=L(new wt(new qn(ne,he),Lt(ge,hn)));ue.position.set(...ae),ue.lookAt(0,.05,0)};C(3.2,3.2,[0,2.8,0],mt(1.5,1.48,1.45)),C(2.6,1.4,[-2.2,1.2,1.4],mt(1.9,1.87,1.82));let D=xt.fromScene(f,0,.01,20);return T.forEach(ne=>{ne.geometry.dispose(),ne.material.dispose()}),D}let Pt=O(),Ge=St.texture.image.height,A=Math.log2(Ge)-2,p={tMax:{value:Ue.texture},tRest:{value:o},tShadow:{value:at.texture},tSim:{value:X.texture},tLamp:{value:F},envMap:{value:St.texture},studioMap:{value:Pt.texture},uFill:{value:new z(0,1,0)},uFillColor:{value:new z},uNight:{value:0},uSky:{value:new z(1,1,1)},uGround:{value:new z},uDome:{value:new z},uGlow:{value:new z},uCamG:{value:new z},uGtoClip:{value:new Mt},uLight:{value:new z(0,1,0)},uLightColor:{value:new z(10,10,10)},uSunDir:{value:new ye(0,1)},uTan:{value:1},uEnv:{value:4.5},uPix:{value:.001},uWell:{value:bo},uFloor:{value:jn},uTop:{value:Mo},uLit:{value:1},uSun:{value:1},uSwell:{value:0},uPitch:{value:Zt},uRiseT:{value:0},uSink:{value:0},uRoom:{value:0},uSpin:{value:new ye(1,0)},uWind:{value:0},uWindDir:{value:new ye(1,0)},uWindT:{value:0},uCloud:{value:0},uCloudAt:{value:new ye},uWet:{value:0},uBoat:Fe.uBoat,uBoatSize:Fe.uBoatSize,uBoatOn:Fe.uBoatOn,uFlood:{value:vn.map(f=>f.flood??0)},uPicked:{value:new ye}},k=new Yt({vertexShader:Ag,fragmentShader:Rg,uniforms:p,side:Ot,defines:{...q,STEPS:vg(i.phone,n),REFLECT_STEPS:56+16*(n-1),LAMP_K:(n*n).toFixed(1),FLOOR_G:jn.toFixed(1),...i.phone?{}:{REFLECT:1},...ru?{DEBUG:ru}:{},ENVMAP_TYPE_CUBE_UV:1,CUBEUV_TEXEL_WIDTH:1/(3*Math.max(2**A,112)),CUBEUV_TEXEL_HEIGHT:1/Ge,CUBEUV_MAX_MIP:A.toFixed(1)}}),W=new Gi(1,1,1,96,1,!1),Z=bo*Zt/Math.cos(Math.PI/96);W.scale(Z,(Mo-jn+1)*Zt,Z),W.translate(0,(Mo+jn-1)/2*Zt,0);let oe=new wt(W,k);oe.position.y=i.top;let fe=42,J=jh,te=Math.atan2(Math.sin(fe*Math.PI/180),-Math.cos(fe*Math.PI/180)),ve=Rt.degToRad(J)-te;oe.rotation.y=ve,oe.updateMatrixWorld();let Ee=Yl(i.at??new Date),me=i.at??new Date,_e=0,Pe=NaN,we=new z,qe=new z,U=new ye,xe=new ye(1e6,1e6),j=new z(0,1,0),de=0,Me=0,ie=0,Te=$l(me),Ce=new ye(1,0),ht=0,ot=0;$h().then(()=>{Pe=NaN,i.invalidate()});let Dt=2.95,Jt=(f,T,L)=>{let C=Rt.degToRad(f-Dt),D=Rt.degToRad(T);return L.set(Math.sin(C)*Math.cos(D),Math.sin(D),-Math.cos(C)*Math.cos(D))};function Ji(f){let T=Date.now();if(f!==Pe||T-_e>=3e4){Pe=f,_e=T,me=new Date((i.at??new Date).valueOf()+f*36e5),Ee=Yl(me),$l(me,Te),Jt(Ee.az,Ee.shadeEl,qe);let[D,ne,he]=Ee.color,ae=Ee.night;p.uLightColor.value.set(D,ne,he).multiplyScalar(1.5),p.uGround.value.set(D*.038+.05*ae,ne*.038+.028*ae,he*.038+.012*ae),p.uFillColor.value.set(3,3.3,4).multiplyScalar(.55*ae);let ge=Te.cloud;p.uSky.value.set(...Ee.sky).lerp(new z(.8,.82,.86),.5*ge),p.uDome.value.set(.24,.3,.4).lerp(new z(.36,.37,.39),ge).multiplyScalar(Ee.day*(1+.9*ge)),p.uGlow.value.set(.5,.36,.26).multiplyScalar(ae*(1+.8*ge)),p.uNight.value=ae;let ue=Rt.degToRad(Te.from+180-Dt);Ce.set(Math.sin(ue),-Math.cos(ue))}Me||ie?Jt(Ee.az+Me,Math.max(Ee.shadeEl+ie,Ee.shadeEl*.5),we):we.copy(qe),we.applyAxisAngle(j,-de),p.uLight.value.copy(we),Jt(305,11,p.uFill.value).applyAxisAngle(j,-de),p.uSpin.value.set(Math.cos(de),Math.sin(de)),p.uWindDir.value.copy(Ce).rotateAround(new ye,de);let L=Math.hypot(we.x,we.z),C=Math.max(we.y/L,.02);U.set(we.x/L/C,we.z/L/C),U.distanceTo(xe)*c.h*n>.4&&(y=!0)}let Qe={x:0,z:0,px:0,pz:0,depth:5,radius:9,on:!1,lastAt:-1e9,water:!1,wet:!1},ei=null,yn=new Mt,Mn=new Hi,Fn=new z;function Ni(f,T){if(!u)return null;yn.copy(oe.matrixWorld).invert(),Mn.origin.setFromMatrixPosition(T.matrixWorld),Fn.set(f.x,f.y,.5).unproject(T),Mn.direction.copy(Fn).sub(Mn.origin).normalize(),Mn.applyMatrix4(yn);let L=Mn.origin.clone().divideScalar(Zt).add(new z(zt/2,0,zt/2)),C=Mn.direction.clone().normalize();if(C.y>=0)return null;let D=Math.max(0,(Mo-L.y)/C.y),ne=(jn-L.y)/C.y,he=V;for(;D<ne;D+=.5/n){let ae=L.x+C.x*D,ge=L.y+C.y*D,ue=L.z+C.z*D;if(ae<0||ue<0||ae>=zt||ue>=zt)continue;let Ne=l[r(ae,ue)];if(!(Ne<=jn)&&ge<=Ne*(1-he))return{x:ae,z:ue}}return null}let V=0,ce=!1,He=-1e9,tt=(i.at??new Date).valueOf()/1e3%86400,Ze=!1,vt=new Float32Array(yo*4),nt=(f,T)=>{nu(T,vt),f.forEach((L,C)=>L.fromArray(vt,C*4))};nt(Fe.uBoat.value,tt);let pt=[{id:0,y:0,v:0,to:0},{id:0,y:0,v:0,to:0}],kt=f=>f<-.5?(pt[0].id===-f?pt[0].y:0)+(pt[1].id===-f?pt[1].y:0):0,Ht=f=>l[f]+kt(a[f*4+3]);function bn(f,T,L){g>=0&&(g=L?di:Math.min(di+1,g+T*_/xg));let C=Math.max(g,0),D=u&&C<di;p.uRiseT.value=C,V!==E&&(E=V,w=!0);let ne=Qe.on||f-Qe.lastAt<(Qe.water?14e3:4500),he=u&&!L&&V<.6&&C>=di*.6?Te.rain:0;he>.05&&(He=f);let ae=b.length>0&&f-He<8e3,ge=u&&V<.5&&C>=di*.75?1:0,ue=Fe.uBoatOn;ue.value=L?ge:ue.value+(ge-ue.value)*Math.min(1,T*1.2),Math.abs(ue.value-ge)<.002&&(ue.value=ge);let Ne=ue.value>0;Ne!==Ze&&(Ze=Ne,w=!0);let $e=e.getRenderTarget();if((ne||ae||Ne)&&!L){let pe=Je.uniforms.uDrops.value,Ye=he>.05?Math.min(6,he*2.2+.6):0;Je.uniforms.uHandV.value.set(Qe.x-Qe.px,Qe.z-Qe.pz).multiplyScalar(Qe.on?1/Math.max(T,1/120):0);for(let Ie=1;Ie<=2;Ie++){let Be=Ie/2;Je.uniforms.tSim.value=Q[d].texture,Je.uniforms.uHand.value.set(Qe.px+(Qe.x-Qe.px)*Be,Qe.pz+(Qe.z-Qe.pz)*Be,Qe.depth,Qe.radius),Je.uniforms.uHandOn.value=Qe.on?1:0,Je.uniforms.uDip.value=Qe.depth<0?1.1:.5,pe.forEach((ut,le)=>{if(le>=Ye||Math.random()>Ye-le){ut.z=0;return}let dt=b[Math.floor(Math.random()*b.length)];ut.set((dt%s+Math.random())/n,(Math.floor(dt/s)+Math.random())/n,30+50*Math.random(),0)}),Ne&&(tt+=1/120,nt(Je.uniforms.uBoat.value,tt)),Ve(Je,Q[1-d]),d=1-d}x=!0,ne?w=!0:Ne&&(R=!0)}else x&&(Ve(gt,Q[0]),Ve(gt,Q[1]),d=0,x=!1,Qe.water=!1,w=!0);nt(Fe.uBoat.value,tt),Fe.uBoatDip.value=x?_g:0,p.tSim.value=Q[d].texture,Qe.px=Qe.x,Qe.pz=Qe.z,(D||u&&!ce)&&(w=!0);let Ae=!1;for(let pe of pt)if(!(pe.y===pe.to&&pe.v===0)){L&&(pe.y=pe.to,pe.v=0);for(let Ye=0,Ie=Math.min(T,1/30)/2;Ye<2&&!L;Ye++)pe.v+=(81*(pe.to-pe.y)-2*.42*9*pe.v)*Ie,pe.y+=pe.v*Ie;Math.abs(pe.to-pe.y)<.003&&Math.abs(pe.v)<.02?(pe.y=pe.to,pe.v=0):Ae=!0,w=!0}if(be.uniforms.uLift.value.set(pt[0].id,pt[0].y,pt[1].id,pt[1].y),p.uPicked.value.set(pt[0].id,Math.min(1,Math.max(0,pt[0].y/2))),(w||R)&&u&&(ce=C>=di,be.uniforms.tSim.value=Q[d].texture,be.uniforms.uTime.value=C,be.uniforms.uSink.value=V,Ve(be,re),Oe.uniforms.tSrc.value=re.texture,Ve(Oe,Le),Oe.uniforms.tSrc.value=Le.texture,Ve(Oe,ee),Oe.uniforms.tSrc.value=ee.texture,Ve(Oe,De),Ve(Tt,Ue),w&&(y=!0)),y&&u){let pe=Math.hypot(we.x,we.z);ke.uniforms.uDir.value.set(we.x/pe,we.z/pe),ke.uniforms.uTan.value=we.y/pe,p.uSunDir.value.set(we.x/pe,we.z/pe),p.uTan.value=we.y/pe,xe.copy(U),ke.uniforms.tSrc.value=re.texture,ke.uniforms.uStep.value=1,ke.uniforms.uInit.value=1,Ve(ke,at);let Ye=at,Ie=$;ke.uniforms.uInit.value=0;for(let Be=1;Be<s;Be*=2)ke.uniforms.tSrc.value=Ye.texture,ke.uniforms.uStep.value=Be,Ve(ke,Ie),[Ye,Ie]=[Ie,Ye];p.tShadow.value=Ye.texture,y=!1}return w=R=!1,e.setRenderTarget($e),D||ne||ae||Ae||Ne&&!L}let ti={value:0},fi=new z,vr=new Mt().makeScale(Zt,Zt,Zt).multiply(new Mt().makeTranslation(-zt/2,0,-zt/2));return{mesh:oe,get ready(){return u},turn(f){f!==de&&(de=f,oe.rotation.y=ve+de,oe.updateMatrixWorld())},tilt(f,T){f===Me&&T===ie||(Me=f,ie=T,i.invalidate())},relight(){Pe=NaN,i.invalidate()},get failed(){return m},get light(){return Ee},get risen(){if(g<0||!M.length)return 0;let f=g-.08,T=0,L=M.length;for(;T<L;){let C=T+L>>1;M[C]<=f?T=C+1:L=C}return T},landmark(f){return P[f]??null},get under(){return ei},lift(f,T){let L=f!==null&&P[f]?f+1:0;L&&pt[1].id===L&&pt.reverse();let[C,D]=pt;!L||C.id===L?C.to=L?T:0:(C.id&&(C.y!==0||C.v!==0)&&Object.assign(D,C,{to:0}),Object.assign(C,{id:L,y:0,v:0,to:T})),i.invalidate()},arrive(){g<0&&u&&(g=0,i.invalidate())},rush(){_=7},get arriving(){return g>=0&&g<di},get intro(){return g},get lightTime(){return me},get weather(){return Te},gridToWorld(f,T,L,C){return C.set((f-zt/2)*Zt,T*Zt,(L-zt/2)*Zt).applyMatrix4(oe.matrixWorld)},worldToGrid(f,T){return yn.copy(oe.matrixWorld).invert(),T.copy(f).applyMatrix4(yn).divideScalar(Zt),T.set(T.x+zt/2,T.y,T.z+zt/2)},heightAt(f,T){return f<0||T<0||f>=zt||T>=zt?jn:Ht(r(f,T))*(1-V)},clear(f,T){let L=Math.hypot(T.x-f.x,T.z-f.z),C=Math.min(400,Math.ceil(L/1.5));for(let D=2;D<C;D++){let ne=D/C,he=f.x+(T.x-f.x)*ne,ae=f.z+(T.z-f.z)*ne;if(he<0||ae<0||he>=zt||ae>=zt)break;if(Ht(r(he,ae))*(1-V)>f.y+(T.y-f.y)*ne)return!1}return!0},update(f){Ji(f.hours),V=f.sink;let T=bn(f.now,f.dt,f.still);oe.visible=u,ti.value=u?1:0,oe.updateMatrixWorld(),yn.copy(oe.matrixWorld).invert(),fi.setFromMatrixPosition(f.camera.matrixWorld).applyMatrix4(yn),p.uCamG.value.set(fi.x/Zt+zt/2,fi.y/Zt,fi.z/Zt+zt/2),p.uGtoClip.value.copy(f.camera.projectionMatrix).multiply(f.camera.matrixWorldInverse).multiply(oe.matrixWorld).multiply(vr),p.uPix.value=2*Math.tan(Rt.degToRad(f.camera.fov)/2)/Math.max(1,f.height)/(f.camera.zoom||1),p.uEnv.value=f.lit,p.uSun.value=1-Rt.smoothstep(f.sink,.25,.75),p.uSink.value=f.sink,p.uRoom.value=f.room,p.uLit.value=1+.6*Ee.day*(1-Rt.smoothstep(f.sink,.55,1));let L=f.still?1:1-Math.exp(-f.dt*2.5);ht+=(Rt.smoothstep(Te.wind,1,14)-ht)*L;let C=Rt.smoothstep(Te.rain,.05,1.2);return ot+=(C-ot)*(C>ot?L:L*.3),p.uWind.value=ht,p.uWet.value=ot*(1-Rt.smoothstep(f.sink,.3,.8)),p.uCloud.value+=(Te.cloud-p.uCloud.value)*L,f.still||(p.uSwell.value+=f.dt*(.6+.9*ht),p.uWindT.value+=f.dt*(.5+1.5*ht),p.uCloudAt.value.addScaledVector(p.uWindDir.value,-f.dt*(.012+.03*Te.wind))),T||!f.still&&(Te.cloud>.02||ht>.05)},pointer(f,T,L){let C=f&&L?Ni(f,T):null,D=performance.now(),ne=C?a[r(C.x,C.z)*4+3]:0;return ei=C&&ne<-.5?Math.round(-ne)-1:null,!C||ei!==null&&L==="hover"?(Qe.on&&(Qe.on=!1,Qe.lastAt=D,i.invalidate()),!!C):(Qe.on||(Qe.px=C.x,Qe.pz=C.z),Qe.x=C.x,Qe.z=C.z,Qe.on=!0,Qe.depth=L==="press"?-.6:6.5,Qe.wet=a[r(C.x,C.z)*4+1]>1.5,Qe.wet&&(Qe.water=!0),Qe.radius=L==="press"?15:10,Qe.lastAt=D,i.invalidate(),!0)},patchPlinth(f,T){let L=f.onBeforeCompile;f.onBeforeCompile=(D,ne)=>{L.call(f,D,ne),D.uniforms.uPocket=ti,D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPinW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vPinW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),D.fragmentShader=D.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPinW;
uniform float uPocket;`).replace("void main() {",`void main() {
  if (uPocket > 0.5 && vPinW.y > ${(T-8e-4).toFixed(4)} && length(vPinW.xz) < ${(bo*Zt).toFixed(5)}) discard;`)};let C=f.customProgramCacheKey();f.customProgramCacheKey=()=>"pin-pocket|"+C,f.needsUpdate=!0},dispose(){h=!1;for(let f of[X,K,re,Le,ee,De,Ue,at,$])f.dispose();for(let f of[be,Oe,Tt,ke,Je,gt,k])f.dispose();o.dispose(),F.dispose(),G.dispose(),W.dispose(),St?.dispose(),Pt.dispose(),xt.dispose()}}}var Cg="varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",lu=`
uniform float uNear; uniform float uFar; uniform float uFocus; uniform float uCoc;
// Signed circle of confusion (px): + behind the focus, - in front, from a depth-buffer value. Behind the focus it
// grows at 0.6 of the lens's rate, so the city further off stays legible (a portrait blur hid
// everything beyond the nearest street); in front it keeps the full macro blur.
float coc(float depth) {
  float z = (uNear * uFar) / (uFar - depth * (uFar - uNear));
  float c = 1.0 - uFocus / z;
  return c > 0.0 ? 0.6 * uCoc * c : max(uCoc * c, -1.3 * uCoc);
}`,Pg=`
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 uTexel;
${lu}
void main() {
  vec2 o = uTexel * 0.5;
  vec3 c = texture2D(tColor, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, -o.y)).rgb
         + texture2D(tColor, vUv + vec2(-o.x, o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, o.y)).rgb;
  float d = min(min(texture2D(tDepth, vUv + vec2(-o.x, -o.y)).r, texture2D(tDepth, vUv + vec2(o.x, -o.y)).r),
                min(texture2D(tDepth, vUv + vec2(-o.x, o.y)).r, texture2D(tDepth, vUv + vec2(o.x, o.y)).r));
  gl_FragColor = vec4(c * 0.25, coc(d) * 0.5);            // half-size pixels
}`,Ig=`
varying vec2 vUv;
uniform sampler2D tDown; uniform vec2 uTexel; uniform float uRadius;
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
void main() {
  vec4 c0 = texture2D(tDown, vUv);
  float cc = c0.a;
  vec3 acc = c0.rgb;
  float wsum = 1.0, fg = 0.0;
  float spin = ign(gl_FragCoord.xy) * 6.2831853;
  for (int i = 0; i < SAMPLES; i++) {
    float f = (float(i) + 0.5) / float(SAMPLES);
    float r = sqrt(f) * uRadius;
    float a = float(i) * 2.3999632 + spin;
    vec4 s = texture2D(tDown, vUv + vec2(cos(a), sin(a)) * r * uTexel);
    float size = abs(s.a);
    if (s.a > cc) size = min(size, abs(cc) * 2.0);      // farther: it can't cover a sharper pixel in front
    float w = smoothstep(r - 1.0, r + 1.0, size);
    acc += s.rgb * w;
    wsum += w;
    if (s.a < cc - 1.0) fg += w;
  }
  gl_FragColor = vec4(acc / wsum, clamp(2.0 * fg / max(wsum - 1.0, 1.0), 0.0, 1.0));
}`,Lg=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel;
void main() {
  vec2 o = uTexel;
  vec4 c = texture2D(tSrc, vUv) * 4.0
    + (texture2D(tSrc, vUv + vec2(o.x, 0.0)) + texture2D(tSrc, vUv - vec2(o.x, 0.0)) + texture2D(tSrc, vUv + vec2(0.0, o.y)) + texture2D(tSrc, vUv - vec2(0.0, o.y))) * 2.0
    + texture2D(tSrc, vUv + o) + texture2D(tSrc, vUv - o) + texture2D(tSrc, vUv + vec2(o.x, -o.y)) + texture2D(tSrc, vUv + vec2(-o.x, o.y));
  gl_FragColor = c / 16.0;
}`,Dg=`
varying vec2 vUv;
uniform sampler2D tDown; uniform sampler2D tSoft; uniform vec2 uTexel; uniform float uExposure; uniform float uThreshold;
vec3 lensAt(vec2 uv) {
  vec4 d = texture2D(tDown, uv), s = texture2D(tSoft, uv);
  return mix(d.rgb, s.rgb, max(smoothstep(0.6, 2.2, abs(d.a) * 2.0), s.a));
}
vec3 bright(vec3 c) {
  c = min(c * uExposure, vec3(12.0));
  float b = max(c.r, max(c.g, c.b)), knee = 0.5 * uThreshold;
  float q = clamp(b - uThreshold + knee, 0.0, 2.0 * knee);
  return c * (max(q * q / (4.0 * knee), b - uThreshold) / max(b, 1e-4));
}
void main() {
  vec2 o = uTexel;
  vec3 c = bright(lensAt(vUv + vec2(-o.x, -o.y))) + bright(lensAt(vUv + vec2(o.x, -o.y)))
         + bright(lensAt(vUv + vec2(-o.x, o.y))) + bright(lensAt(vUv + vec2(o.x, o.y)));
  gl_FragColor = vec4(c * 0.25 / uExposure, 1.0);
}`,Ng=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel;
vec3 at(float x, float y) { return texture2D(tSrc, vUv + uTexel * vec2(x, y)).rgb; }
void main() {
  vec3 c = at(0.0, 0.0) * 0.125
    + (at(-2.0, 2.0) + at(2.0, 2.0) + at(-2.0, -2.0) + at(2.0, -2.0)) * 0.03125
    + (at(0.0, 2.0) + at(-2.0, 0.0) + at(2.0, 0.0) + at(0.0, -2.0)) * 0.0625
    + (at(-1.0, 1.0) + at(1.0, 1.0) + at(-1.0, -1.0) + at(1.0, -1.0)) * 0.125;
  gl_FragColor = vec4(c, 1.0);
}`,Ug=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uGain;
void main() {
  vec2 o = uTexel;
  vec3 c = texture2D(tSrc, vUv).rgb * 4.0
    + (texture2D(tSrc, vUv + vec2(o.x, 0.0)).rgb + texture2D(tSrc, vUv - vec2(o.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, o.y)).rgb + texture2D(tSrc, vUv - vec2(0.0, o.y)).rgb) * 2.0
    + texture2D(tSrc, vUv + o).rgb + texture2D(tSrc, vUv - o).rgb + texture2D(tSrc, vUv + vec2(o.x, -o.y)).rgb + texture2D(tSrc, vUv + vec2(-o.x, o.y)).rgb;
  gl_FragColor = vec4(c * (uGain / 16.0), 1.0);
}`,Fg=`
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tDepth; uniform sampler2D tBlur; uniform vec2 uHalfTexel; uniform float uGrain; uniform float uTime;
uniform float uShade; uniform float uAspect; uniform vec2 uSize; uniform sampler2D tBloom; uniform vec2 uBloomTexel; uniform float uBloom;
${lu}
float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
// The sharp frame at this pixel: Catmull-Rom from the drawn frame's pixels (five bilinear reads), clamped to the four
// nearest so a glint brighter than white leaves no dark ring. Where the frame is the screen's size it is exact.
vec3 sharpAt(vec2 uv) {
  vec2 p = uv * uSize - 0.5, f = fract(p), t = floor(p) + 0.5;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f)), w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f)), w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2, t0 = (t - 1.0) / uSize, t3 = (t + 2.0) / uSize, t12 = (t + w2 / w12) / uSize;
  vec3 c = texture2D(tColor, vec2(t12.x, t0.y)).rgb * (w12.x * w0.y) + texture2D(tColor, vec2(t0.x, t12.y)).rgb * (w0.x * w12.y)
         + texture2D(tColor, t12).rgb * (w12.x * w12.y) + texture2D(tColor, vec2(t3.x, t12.y)).rgb * (w3.x * w12.y)
         + texture2D(tColor, vec2(t12.x, t3.y)).rgb * (w12.x * w3.y);
  c /= w12.x * w0.y + w0.x * w12.y + w12.x * w12.y + w3.x * w12.y + w12.x * w3.y;
  vec2 a = t / uSize, e = (t + 1.0) / uSize;
  vec3 p00 = texture2D(tColor, a).rgb, p10 = texture2D(tColor, vec2(e.x, a.y)).rgb, p01 = texture2D(tColor, vec2(a.x, e.y)).rgb, p11 = texture2D(tColor, e).rgb;
  return clamp(c, min(min(p00, p10), min(p01, p11)), max(max(p00, p10), max(p01, p11)));
}
void main() {
  float k0 = abs(coc(texture2D(tDepth, vUv).r));
  vec2 o = uHalfTexel * 0.75;
  vec4 b = 0.25 * (texture2D(tBlur, vUv + vec2(-o.x, -o.y)) + texture2D(tBlur, vUv + vec2(o.x, -o.y))
                 + texture2D(tBlur, vUv + vec2(-o.x, o.y)) + texture2D(tBlur, vUv + vec2(o.x, o.y)));
  float k = max(smoothstep(0.6, 2.2, k0), b.a);
  vec3 col = k < 0.999 ? mix(sharpAt(vUv), b.rgb, k) : b.rgb;
  vec2 q = uBloomTexel * 0.75;
  col += uBloom * 0.25 * (texture2D(tBloom, vUv + vec2(-q.x, -q.y)).rgb + texture2D(tBloom, vUv + vec2(q.x, -q.y)).rgb
                        + texture2D(tBloom, vUv + vec2(-q.x, q.y)).rgb + texture2D(tBloom, vUv + vec2(q.x, q.y)).rgb);
  // The lens's own fall-off, and a graduated filter over the lower half, where the name stands: half of it before the
  // tone curve, as glass in front of the lens would, the rest after it, so the sun's glints there darken too.
  float r = length((vUv - 0.5) * vec2(uAspect, 1.0)) / length(vec2(uAspect, 1.0) * 0.5);
  float grad = smoothstep(0.66, 0.0, vUv.y);
  col *= mix(1.0, (1.0 - 0.38 * smoothstep(0.45, 1.0, r)) * (1.0 - 0.5 * grad), uShade);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor.rgb *= 1.0 - 0.45 * grad * uShade;
  // Film grain, finer than a pixel's worth of light, and enough to dither the dark gradients.
  gl_FragColor.rgb += (hash(gl_FragCoord.xy + fract(uTime) * 917.0) - 0.5) * uGrain;
}`,Og=2.4,Bg=.7,zg=1+.7+.49+.343+.2401,kg=(()=>{let i=typeof location>"u"?null:new URLSearchParams(location.search).get("bloom");return i!==null&&Number.isFinite(Number(i))?Number(i):.3})()/zg;function cu(i,e){let t=new Gt(1,1,{type:sn,depthTexture:new Xn(1,1),samples:0,minFilter:It,magFilter:It,generateMipmaps:!1}),n=()=>new Gt(1,1,{type:sn,depthBuffer:!1,minFilter:It,magFilter:It,generateMipmaps:!1}),s=n(),r=n(),a=n(),o=[n(),n(),n(),n(),n()],l={uNear:{value:.05},uFar:{value:40},uFocus:{value:1},uCoc:{value:0}},c=(F,B,H={})=>new Yt({vertexShader:Cg,fragmentShader:F,uniforms:B,depthTest:!1,depthWrite:!1,...H}),u=c(Pg,{tColor:{value:t.texture},tDepth:{value:t.depthTexture},uTexel:{value:new ye},...l}),m=c(Ig,{tDown:{value:s.texture},uTexel:{value:new ye},uRadius:{value:0}},{defines:{SAMPLES:e?30:52}}),h=c(Lg,{tSrc:{value:r.texture},uTexel:{value:new ye}}),g=c(Dg,{tDown:{value:s.texture},tSoft:{value:a.texture},uTexel:{value:new ye},uExposure:{value:1},uThreshold:{value:Og}}),_=c(Ng,{tSrc:{value:null},uTexel:{value:new ye}}),M=c(Ug,{tSrc:{value:null},uTexel:{value:new ye},uGain:{value:Bg}},{blending:_a,blendEquation:ci,blendSrc:ir,blendDst:ir}),x=c(Fg,{tColor:{value:t.texture},tDepth:{value:t.depthTexture},tBlur:{value:a.texture},uHalfTexel:{value:new ye},uGrain:{value:0},uTime:{value:0},uShade:{value:0},uAspect:{value:1},uSize:{value:new ye(1,1)},...l,tBloom:{value:o[0].texture},uBloomTexel:{value:new ye},uBloom:{value:0}}),d=new Tn,w=new Yn(-1,1,1,-1,0,1),R=new tn;R.setAttribute("position",new Nt([-1,-1,0,3,-1,0,-1,3,0],3));let y=new wt(R,x);y.frustumCulled=!1,d.add(y);let E=(F,B,H=!1)=>{y.material=F,i.setRenderTarget(B);let I=i.autoClear;i.autoClear=!H,i.render(d,w),i.autoClear=I},b=o.map(()=>new ye),P=1,v=1,S=1,N=new z;return{setSize(F,B,H=1){S=Math.max(1,Math.round(F*H));let I=Math.max(1,Math.round(B*H));P=F,v=B,t.setSize(S,I),s.setSize(Math.ceil(S/2),Math.ceil(I/2)),r.setSize(Math.ceil(S/2),Math.ceil(I/2)),a.setSize(Math.ceil(S/2),Math.ceil(I/2)),o.forEach((G,Y)=>{G.setSize(Math.max(1,Math.ceil(S/(4<<Y))),Math.max(1,Math.ceil(I/(4<<Y)))),b[Y].set(1/G.width,1/G.height)}),g.uniforms.uTexel.value.set(1/Math.ceil(S/2),1/Math.ceil(I/2)),x.uniforms.uBloomTexel.value.copy(b[0]),h.uniforms.uTexel.value.set(1/Math.ceil(S/2),1/Math.ceil(I/2)),u.uniforms.uTexel.value.set(1/S,1/I),m.uniforms.uTexel.value.set(1/Math.ceil(S/2),1/Math.ceil(I/2)),x.uniforms.uHalfTexel.value.set(1/Math.ceil(S/2),1/Math.ceil(I/2)),x.uniforms.uSize.value.set(S,I)},render(F,B,H,I,G){i.setRenderTarget(t),i.render(F,B),N.copy(H).applyMatrix4(B.matrixWorldInverse),l.uNear.value=B.near,l.uFar.value=B.far,l.uFocus.value=Math.max(.01,-N.z);let Y=S/40*I;l.uCoc.value=Y,m.uniforms.uRadius.value=Y/2*1.3,x.uniforms.uGrain.value=.022*Math.min(1,I*1.5),x.uniforms.uTime.value=G,x.uniforms.uShade.value=Math.min(1,I*1.2),x.uniforms.uAspect.value=P/v,x.uniforms.uBloom.value=kg*Math.min(1,I*8),E(u,s),E(m,r),E(h,a),g.uniforms.uExposure.value=i.toneMappingExposure,E(g,o[0]);for(let q=1;q<o.length;q++)_.uniforms.tSrc.value=o[q-1].texture,_.uniforms.uTexel.value=b[q-1],E(_,o[q]);for(let q=o.length-2;q>=0;q--)M.uniforms.tSrc.value=o[q+1].texture,M.uniforms.uTexel.value=b[q+1],E(M,o[q],!0);E(x,null)},within(F){let B=i.getRenderTarget();i.setRenderTarget(t);try{F()}finally{i.setRenderTarget(B)}},dispose(){t.depthTexture?.dispose(),t.dispose(),s.dispose(),r.dispose(),a.dispose(),o.forEach(F=>F.dispose()),u.dispose(),m.dispose(),h.dispose(),g.dispose(),_.dispose(),M.dispose(),x.dispose(),R.dispose()}}}var Hg=.3,Vg=1.75,Gg=6,Nn=Math.PI/180;function hu(i){let{canvas:e,phone:t}=i,n=new ho({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"});n.setPixelRatio(i.pixelRatio),n.toneMapping=sr,n.toneMappingExposure=Hg,n.outputColorSpace=ln,n.setClearColor(197380,1);let s=!0,r=0,a=i.still,o=!1,l=0,c=0,u=0,m=()=>{!r&&s&&(r=requestAnimationFrame(Mn))},h=V=>{s&&(s=!1,cancelAnimationFrame(r),i.onFail(V))},g=ou({renderer:n,top:0,phone:t,at:i.at,city:i.city,marks:i.marks,invalidate:m,onFail:h});if(!g)throw n.dispose(),new Error("pintable: no float render targets");let _=g,M=cu(n,t),x=new Tn;x.add(_.mesh);let d=new en(t?30:24,1,.02,20),w=Yi.n,R=Yi.pocket,y=Yi.n/512,E=new Ci(n),b=(()=>{let V=new Tn,ce=(vt,nt,pt)=>new et().setRGB(vt,nt,pt,Hn),He=new wt(new In(8,6,8),new Wn({color:ce(.004,.0042,.0046),side:Ot}));V.add(He);let tt=(vt,nt,pt,kt)=>{let Ht=new wt(new qn(vt,nt),new Wn({color:kt,side:hn}));Ht.position.set(...pt),Ht.lookAt(0,.05,0),V.add(Ht)};tt(2.6,.5,[-1.3,.75,-1.6],ce(2.3,2.25,2.15)),tt(1.4,1.4,[.3,1.8,.4],ce(.7,.7,.72));let Ze=E.fromScene(V,0,.01,20);return V.traverse(vt=>{let nt=vt;nt.geometry?.dispose(),nt.material?.dispose()}),Ze})();x.environment=b.texture,x.environmentRotation.y=_.mesh.rotation.y,x.environmentIntensity=1;let P=R+.0085,v=[new ye(R,-.006),new ye(R,-6e-4),new ye(R+5e-4,-5e-5),new ye(R+9e-4,0)];for(let V=0;V<=10;V++){let ce=V/10*Math.PI/2;v.push(new ye(P-.0024+Math.sin(ce)*.0024,-.0024+Math.cos(ce)*.0024))}v.push(new ye(P,-.0075),new ye(P-8e-4,-.0083));let S=new Ms(v,192),N=new Ss({color:14277340,metalness:1,roughness:.16,clearcoat:.4,clearcoatRoughness:.08}),F=new wt(S,N),B=new Ms([new ye(0,-.054),new ye(P-.004,-.054),new ye(P-8e-4,-.0505),new ye(P-8e-4,-.0083),new ye(R,-.0083)],192),H=new Ss({color:657931,metalness:.55,roughness:.4,clearcoat:.25,clearcoatRoughness:.35}),I=new wt(B,H),G=new Gi(.022,.026,1.6,64,1,!0);G.translate(0,-.054-.8,0);let Y=new bs({color:460552,metalness:.2,roughness:.7}),q=new wt(G,Y);x.add(F,I,q);let se=new er(16777215,0);x.add(se,se.target);let X=w/2,K={x0:-1,x1:1,y0:-1,y1:1},re=()=>{let V=Math.tan(d.fov*Nn/2),ce=V*d.aspect,He=R*(d.aspect<.8?1.14:1.08)/(ce*(K.x1-K.x0)/2),tt=R*(Math.sin(31*Nn)*1.08+.2)/(V*(K.y1-K.y0)/2);return Math.min(Math.max(He,tt),4.2)},Le=.09,ee={b:148,el:31,dist:1,gx:X,gz:X},De={...ee},Ue=1,at=(V,ce,He)=>He.set(Math.sin(V*Nn)*Math.cos(ce*Nn),Math.sin(ce*Nn),-Math.cos(V*Nn)*Math.cos(ce*Nn)).applyAxisAngle($,_.mesh.rotation.y),$=new z(0,1,0),Q=new z,Re=new z,Fe=new z,be=V=>Rt.lerp(3,12,Rt.smoothstep(Math.log(V),Math.log(.18),Math.log(.6)));function Oe(V){V.dist=Rt.clamp(V.dist,Le,Ue*1.2),V.el=Rt.clamp(V.el,be(V.dist),82);let ce=w/2*.92*(1-Rt.smoothstep(V.dist,Ue*.45,Ue*.95)),He=V.gx-X,tt=V.gz-X,Ze=Math.hypot(He,tt);Ze>ce&&(V.gx=X+He/Ze*ce,V.gz=X+tt/Ze*ce)}let Tt={el:74,dist:1.25};function ke(V){let ce=a?1:1-Math.exp(-V*7),He=ee.b-De.b;He-=360*Math.round(He/360),De.b+=He*ce,De.el+=(ee.el-De.el)*ce,De.dist=Math.exp(Math.log(De.dist)+(Math.log(ee.dist)-Math.log(De.dist))*ce),De.gx+=(ee.gx-De.gx)*ce,De.gz+=(ee.gz-De.gz)*ce;let tt=Math.abs(He)>.01||Math.abs(ee.el-De.el)>.01||Math.abs(ee.dist/De.dist-1)>5e-4||Math.hypot(ee.gx-De.gx,ee.gz-De.gz)>.02;tt||Object.assign(De,ee);let{b:Ze,el:vt,dist:nt}=De;if(W&&!k){let kt=_.intro,Ht=kt<0?0:Math.min(1,kt/(di-.4)),bn=Ht*Ht*Ht*(Ht*(Ht*6-15)+10);vt=Rt.lerp(Tt.el,vt,bn),nt=Math.exp(Rt.lerp(Math.log(Tt.dist*Ue),Math.log(nt),bn)),Ze=Ze-40*(1-bn)}_.gridToWorld(De.gx,0,De.gz,Q),d.position.copy(Q).addScaledVector(at(Ze,vt,Re),nt),d.lookAt(Q),d.near=nt<.5?.003:.02,d.updateProjectionMatrix(),d.updateMatrixWorld();let pt=nt<.6?_.heightAt(De.gx,De.gz)*Math.min(1,(.6-nt)/.3):0;return _.gridToWorld(De.gx,Math.max(0,pt)*.6,De.gz,Fe),tt}let Je=V=>Rt.lerp(.95,.12,Rt.smoothstep(Math.log(V),Math.log(.28),Math.log(Ue))),gt=new ye,Ve=new tr,xt=new gn(new z(0,1,0),0),St=new z,Lt=new z,mt=1,Et=1,O=(V,ce,He=gt)=>He.set(V/mt*2-1,-(ce/Et*2-1));function Pt(V,ce){return Ve.setFromCamera(O(V,ce,new ye),d),!Ve.ray.intersectPlane(xt,St)||Math.hypot(St.x-_.mesh.position.x,St.z-_.mesh.position.z)>R?null:(_.worldToGrid(St,Lt),{x:Lt.x,z:Lt.z})}let Ge=new Map,A=null,p=!1,k=!1,W=!1,Z=null,oe=()=>e.getBoundingClientRect();function fe(){k||(k=!0,W&&(Object.assign(De,J()),_.rush()))}function J(){let V=d.position.clone().sub(Q),ce=V.length(),He=Math.asin(Rt.clamp(V.y/ce,-1,1))/Nn;V.applyAxisAngle($,-_.mesh.rotation.y);let tt=Math.atan2(V.x,-V.z)/Nn,Ze={...De,b:tt,el:He,dist:ce};return Object.assign(ee,{b:tt,el:He,dist:ce}),Ze}function te(V){if(!o)return;let ce=oe(),He=V.clientX-ce.left,tt=V.clientY-ce.top;p=V.pointerType==="mouse",fe(),e.setPointerCapture(V.pointerId);let Ze=!Pt(He,tt),vt=V.button===2||V.ctrlKey||V.altKey||Ge.size>0||a||Ze;if(Ge.size>0)for(let nt of Ge.values())nt.mode="turn";Ge.set(V.pointerId,{mode:vt?"turn":"press",x:He,y:tt,id:V.pointerId,beside:Ze&&V.pointerType==="touch"}),Ge.size===2&&ve(),m()}function ve(){let[V,ce]=[...Ge.values()];Z={d:Math.hypot(V.x-ce.x,V.y-ce.y),a:Math.atan2(ce.y-V.y,ce.x-V.x),dist:ee.dist,b:ee.b}}function Ee(V){let ce=oe(),He=V.clientX-ce.left,tt=V.clientY-ce.top,Ze=Ge.get(V.pointerId);if(!Ze){V.pointerType==="mouse"&&(A={x:He,y:tt},p=!0,m());return}let vt=He-Ze.x,nt=tt-Ze.y;if(Ze.x=He,Ze.y=tt,Ge.size===2&&Z){let[pt,kt]=[...Ge.values()],Ht=Math.hypot(pt.x-kt.x,pt.y-kt.y),bn=Math.atan2(kt.y-pt.y,kt.x-pt.x),ti=Z.d/Math.max(Ht,1);Pe((pt.x+kt.x)/2,(pt.y+kt.y)/2,Z.dist*ti/ee.dist),ee.b=Z.b+(bn-Z.a)/Nn,Oe(ee)}else Ze.mode==="turn"&&(ee.b-=vt*.28,Ze.beside||(ee.el+=nt*.2),Oe(ee));m()}function me(V){Ge.delete(V.pointerId),Ge.size<2&&(Z=null),V.pointerType!=="mouse"&&(A=null),m()}function _e(V){V.pointerType==="mouse"&&!Ge.size&&(A=null,m())}function Pe(V,ce,He){let tt=ee.dist;ee.dist*=He,Oe(ee);let Ze=ee.dist/tt,vt=Pt(V,ce);if(vt&&Ze<1)ee.gx+=(vt.x-ee.gx)*(1-Ze),ee.gz+=(vt.z-ee.gz)*(1-Ze);else if(Ze>1){let nt=Math.min(1,(Ze-1)*1.6);ee.gx+=(X-ee.gx)*nt*Rt.smoothstep(ee.dist,Ue*.35,Ue*.9),ee.gz+=(X-ee.gz)*nt*Rt.smoothstep(ee.dist,Ue*.35,Ue*.9)}Oe(ee)}function we(V){if(!o)return;V.preventDefault(),fe();let ce=oe(),He=V.clientX-ce.left,tt=V.clientY-ce.top,Ze=V.deltaMode===1?16:V.deltaMode===2?Et:1;!V.ctrlKey&&Math.abs(V.deltaX)>Math.abs(V.deltaY)*1.2?(ee.b-=V.deltaX*Ze*.12,Oe(ee)):Pe(He,tt,Math.exp(V.deltaY*Ze*(V.ctrlKey?.01:.0016))),m()}function qe(V){if(!o)return;let ce=oe(),He=Pt(V.clientX-ce.left,V.clientY-ce.top);He&&(fe(),ee.gx=He.x,ee.gz=He.z,ee.dist=Math.min(ee.dist,.3),Oe(ee),m())}let U=V=>V.preventDefault(),xe=!1;function j(V){if(!o)return;let ce=V.touches,He=oe();xe=ce.length>1||!!Pt(ce[0].clientX-He.left,ce[0].clientY-He.top),xe&&V.preventDefault()}let de=V=>{(xe||V.touches.length>1)&&V.cancelable&&V.preventDefault()};e.addEventListener("touchstart",j,{passive:!1}),e.addEventListener("touchmove",de,{passive:!1}),e.addEventListener("pointerdown",te),e.addEventListener("pointermove",Ee),e.addEventListener("pointerup",me),e.addEventListener("pointercancel",me),e.addEventListener("pointerleave",_e),e.addEventListener("wheel",we,{passive:!1}),e.addEventListener("dblclick",qe),e.addEventListener("contextmenu",U);let Me=V=>{V.preventDefault(),h(new Error("WebGL context lost"))};e.addEventListener("webglcontextlost",Me);let ie=null,Te=null,Ce=()=>Vg/Yi.cityM,ht=()=>Gg/Yi.cityM;function ot(V){let ce=ie??V;ce!==Te&&(Te=ce,_.lift(ce,ce===null?0:ce===ie?ht():Ce()))}let Dt=new z;function Jt(){let V=ie??_.under;if(V===null||!vn[V]?.fact||!_.landmark(V)){i.onLabel(null,0,0);return}let ce=_.landmark(V);if(_.gridToWorld(ce.x,ce.top+(V===ie?ht():Ce())+3*y,ce.z,Dt),Dt.project(d),Dt.z>1||Math.abs(Dt.x)>1.05||Math.abs(Dt.y)>1.05){i.onLabel(null,0,0);return}i.onLabel(V,(Dt.x*.5+.5)*mt,(.5-Dt.y*.5)*Et)}let Ji=0,Qe="",ei=new ye;function yn(V,ce){_.ready&&!o&&(o=!0,i.onReady()),o&&_.intro<0&&_.arrive(),W=_.arriving&&!a;let He=ke(V),tt=[...Ge.values()].find(fi=>fi.mode==="press"),Ze=!1;a||!o?_.pointer(null,d,null):tt?Ze=_.pointer(O(tt.x,tt.y,ei),d,"press"):A&&p&&!Ge.size?Ze=_.pointer(O(A.x,A.y,ei),d,"hover"):_.pointer(null,d,null),o&&(a||!W)&&ot(Ze&&!tt?_.under:null),e.style.cursor=Ge.size?tt?"grabbing":"move":Ze?"pointer":"grab";let vt=_.update({now:ce,dt:V,camera:d,sink:0,lit:1,room:.35,still:a,height:Et,hours:Ji}),nt=_.light;at(nt.az-2.95,Math.max(nt.el,1.5),se.position),se.position.multiplyScalar(3);let pt=(nt.color[0]+nt.color[1]+nt.color[2])/3;se.color.setRGB(nt.color[0]/Math.max(pt,.001),nt.color[1]/Math.max(pt,.001),nt.color[2]/Math.max(pt,.001),Hn),se.intensity=pt*.9*(1-.8*(_.weather.cloud>.85?1:0));let kt=_.risen;Jt();let Ht=_.weather,bn=_.lightTime,ti=`${Math.round(kt/997)}|${W}|${nt.kind}${nt.az.toFixed(0)}/${nt.el.toFixed(0)}|${Math.floor(bn.valueOf()/6e4)}|${Kl(Ht)}|${Jl()}|${_.under}`;return ti!==Qe&&(Qe=ti,i.onNews({risen:kt,arriving:W,light:nt,at:bn,weather:Kl(Ht),source:Jl(),under:_.under})),vt||He||W||Ge.size>0}function Mn(V){if(r=0,!s)return;let ce=V-l;if(l&&ce<1e3/60-3){r=requestAnimationFrame(Mn);return}let He=l?Math.min(.05,(V-c)/1e3):1/60;l=l&&ce<1e3/30?l+1e3/60:V,c=V,a||(u+=He);let tt=yn(He,V);_.ready?M.render(x,d,Fe,Je(De.dist),u):(n.setRenderTarget(null),n.clear()),i.onFrame?.(V,1e3/60),tt||!_.ready?r=requestAnimationFrame(Mn):l=0}function Fn(){let V=Math.max(1,e.clientWidth),ce=Math.max(1,e.clientHeight);mt=V,Et=ce,n.setSize(V,ce,!1),d.aspect=V/ce,d.fov=V<700?30:24,K=i.region?.(V,ce)??{x0:-1,x1:1,y0:-1,y1:1},d.setViewOffset(V,ce,-(K.x0+K.x1)/2*(V/2),(K.y0+K.y1)/2*(ce/2),V,ce),d.updateProjectionMatrix();let He=Ue;Ue=re(),He!==Ue&&o&&(ee.dist*=Ue/He,De.dist*=Ue/He),Oe(ee);let tt=Math.tan(d.fov*Nn/2),Ze=a?ee.dist:Tt.dist*Ue;i.onFit?.(((K.x0+K.x1)/2+1)/2*V,(1-(K.y0+K.y1)/2)/2*ce,R/(Ze*tt)*ce);let vt=n.getPixelRatio();M.setSize(Math.round(V*vt),Math.round(ce*vt),Math.min(1,1.5/vt)),m()}Ue=1,Fn(),ee.dist=Ue,Object.assign(De,ee);let Ni=new ResizeObserver(Fn);return Ni.observe(e),m(),{get ready(){return o},get places(){return vn},setMoment(V){Ji=(V.valueOf()-i.at.valueOf())/36e5,m()},setSky(V){Jh(V),_.relight(),m()},choose(V){fe(),ie=V;let ce=V===null?null:_.landmark(V);ce&&(ee.gx=ce.x,ee.gz=ce.z,ee.dist=Math.min(ee.dist,Rt.clamp(ce.reach*Yi.pitch*7,.28,.6)),ee.el=Math.max(ee.el,24),Oe(ee)),Te=-1,ot(null),m()},home(){fe(),ie=null,Te=-1,ot(null),Object.assign(ee,{b:ee.b,el:31,dist:Ue,gx:X,gz:X}),m()},key(V){if(!o)return!1;let ce=V==="ArrowLeft"?[-8,0,1]:V==="ArrowRight"?[8,0,1]:V==="ArrowUp"?[0,5,1]:V==="ArrowDown"?[0,-5,1]:V==="+"||V==="="?[0,0,.8]:V==="-"||V==="_"?[0,0,1.25]:null;return ce?(fe(),ee.b+=ce[0],ee.el+=ce[1],ee.dist*=ce[2],Oe(ee),m(),!0):!1},setStill(V){a=V,V&&Ge.clear(),m()},setPixelRatio(V){n.setPixelRatio(V),Fn()},refit(){Fn()},dispose(){s=!1,cancelAnimationFrame(r),Ni.disconnect(),e.removeEventListener("touchstart",j),e.removeEventListener("touchmove",de),e.removeEventListener("pointerdown",te),e.removeEventListener("pointermove",Ee),e.removeEventListener("pointerup",me),e.removeEventListener("pointercancel",me),e.removeEventListener("pointerleave",_e),e.removeEventListener("wheel",we),e.removeEventListener("dblclick",qe),e.removeEventListener("contextmenu",U),e.removeEventListener("webglcontextlost",Me),_.dispose(),M.dispose(),b.dispose(),E.dispose(),S.dispose(),B.dispose(),G.dispose(),N.dispose(),H.dispose(),Y.dispose(),n.dispose()}}}var Wg="Europe/Copenhagen",Xg=new Intl.DateTimeFormat("en-GB",{timeZone:Wg,year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23"});function tc(i){let e=Object.fromEntries(Xg.formatToParts(new Date(i)).map(t=>[t.type,Number(t.value)]));return{y:e.year,m:e.month-1,d:e.day,min:e.hour*60+e.minute,s:e.second}}function nc(i,e,t,n){let s=Date.UTC(i,e,t,0,n),r=l=>{let c=tc(l);return Date.UTC(c.y,c.m,c.d,0,c.min,c.s)-Math.floor(l/1e3)*1e3},a=s-r(s),o=s-r(a);return o!==a&&(a=o),new Date(a)}var So=i=>`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(Math.round(i%60)).padStart(2,"0")}`,qg=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Yg=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],du=(i,e,t)=>`${qg[new Date(Date.UTC(i,e,t)).getUTCDay()]} ${t} ${Yg[e]}`;function fu(i,e,t){let n=r=>ql(nc(i,e,t,r)).el+.83,s=[];for(let r=0;r<1440;r+=20){let a=r+20;if(Math.sign(n(r))===Math.sign(n(a)))continue;let o=r,l=a;for(let c=0;c<12;c++){let u=(o+l)/2;Math.sign(n(u))===Math.sign(n(o))?o=u:l=u}s.push(Math.round((o+l)/2))}return s}var Zg=["north","north-east","east","south-east","south","south-west","west","north-west"],uu=i=>Zg[Math.round((i%360+360)%360/45)%8];function pu(i){return i?i.kind==="sun"?`Sun ${Math.max(0,Math.round(i.el))}\xB0 ${uu(i.az)}`:i.kind==="moon"?`Moon ${Math.round(i.el)}\xB0 ${uu(i.az)}`:"Night":""}var $g=0;function mu(i){let e=`dial-${++$g}`,t=i.value,n=!1,s=document.createElement("div");s.className="dial",s.innerHTML=`<p class="dial-head"><span class="dial-label" id="${e}"></span><span class="dial-value"></span><span class="dial-note" hidden></span></p>
    <div class="dial-track" role="slider" tabindex="0" aria-labelledby="${e}" aria-valuemin="${i.min}" aria-valuemax="${i.max}">
      <div class="dial-scale"></div><span class="dial-needle" aria-hidden="true"></span></div>`;let r=R=>s.querySelector(R);r(".dial-label").textContent=i.label;let a=r(".dial-value"),o=r(".dial-note"),l=r(".dial-track"),c=r(".dial-scale"),u=Math.round((i.max-i.min)/i.step),m=i.every??10,h="";for(let R=0;R<=u;R+=i.draw??1)h+=`<i class="${R%m===0?"dial-tick dial-tick-long":"dial-tick"}" style="left:${R*i.gap}px"></i>`;let g=R=>{c.innerHTML=h+R.map(y=>`<b class="dial-mark" style="left:${(y-i.min)/i.step*i.gap}px"></b>`).join("")};g(i.marks??[]);let _=R=>Math.min(i.max,Math.max(i.min,Math.round(R/i.step)*i.step));function M(){a.textContent=i.format(t);let R=i.note?.(t)??"";o.hidden=!R,o.textContent=R,l.setAttribute("aria-valuenow",String(t)),l.setAttribute("aria-valuetext",(i.spoken??i.format)(t)),c.style.transform=`translate3d(${-((t-i.min)/i.step)*i.gap}px,0,0)`}function x(R){let y=_(R);y!==t&&(t=y,M(),i.onChange(t))}let d=null;l.addEventListener("pointerdown",R=>{n||(l.setPointerCapture(R.pointerId),d={id:R.pointerId,x:R.clientX,v:t},s.dataset.dragging="")}),l.addEventListener("pointermove",R=>{d&&d.id===R.pointerId&&x(d.v-(R.clientX-d.x)/i.gap*i.step)});let w=()=>{d=null,delete s.dataset.dragging};return l.addEventListener("pointerup",w),l.addEventListener("pointercancel",w),l.addEventListener("wheel",R=>{if(n)return;R.preventDefault();let y=Math.abs(R.deltaX)>Math.abs(R.deltaY)?R.deltaX:R.deltaY;x(t+Math.sign(y)*i.step)},{passive:!1}),l.addEventListener("keydown",R=>{if(n)return;let y=R.key,E=i.step*m,b=y==="ArrowRight"||y==="ArrowUp"?t+i.step:y==="ArrowLeft"||y==="ArrowDown"?t-i.step:y==="PageUp"?t+E:y==="PageDown"?t-E:y==="Home"?i.min:y==="End"?i.max:null;b!==null&&(R.preventDefault(),x(b))}),M(),{el:s,get value(){return t},setMarks(R){g(R)},refresh(){M()},setDisabled(R){n=R,l.tabIndex=R?-1:0,R?(l.setAttribute("aria-disabled","true"),s.dataset.disabled=""):(l.removeAttribute("aria-disabled"),delete s.dataset.disabled)}}}var Un=i=>document.querySelector(i),Fs=Un(".ps"),ic=Un(".ps canvas"),Zi=Un(".ps-label"),gu=Un(".ps-read"),Jg=Un(".ps-hint"),sc=matchMedia("(prefers-reduced-motion: reduce)").matches,_u=matchMedia("(pointer: coarse)").matches;Un(".ps-count").textContent=go.toLocaleString("en-GB");var Us=tc(Date.now()),Li=[{label:"Today",y:Us.y,m:Us.m,d:Us.d},{label:"21 June",y:Us.y,m:5,d:21},{label:"21 December",y:Us.y,m:11,d:21}],Di=0,wo=Math.round(Us.min/5)*5,$i=null,Qn=null,rc=()=>nc(Li[Di].y,Li[Di].m,Li[Di].d,wo),vu=()=>fu(Li[Di].y,Li[Di].m,Li[Di].d).map(i=>Math.round(i/5)*5),ac=mu({label:"Hour",value:wo,min:0,max:1435,step:5,gap:2,every:12,draw:3,marks:vu(),format:So,spoken:i=>`${So(i)} in Copenhagen`,note:()=>pu($i?.light??null),onChange:i=>{wo=i,Qn?.setMoment(rc()),oc()}});Un(".ps-dials").prepend(ac.el);function yu(i,e,t){let n=Un(i);e.forEach((s,r)=>{let a=document.createElement("button");a.type="button",a.className="ps-chip",a.setAttribute("role","radio"),a.textContent=s,a.setAttribute("aria-checked",String(r===0)),a.addEventListener("click",()=>{n.querySelectorAll("button").forEach((o,l)=>o.setAttribute("aria-checked",String(l===r))),t(r)}),n.append(a)})}yu(".ps-day",Li.map(i=>i.label),i=>{Di=i,ac.setMarks(vu()),Qn?.setMoment(rc()),oc()});var Kg=[null,"clear","rain","storm"];yu(".ps-sky",["Forecast","Clear","Rain","Storm"],i=>Qn?.setSky(Kg[i]));function oc(){let i=Li[Di];if(!$i){gu.textContent="";return}gu.innerHTML=$i.arriving?`<span>${$i.risen.toLocaleString("en-GB")} pins</span>`:`<span>${du(i.y,i.m,i.d)} \xB7 ${So(wo)}</span><span>${$i.weather}${$i.source==="met"?" \xB7 MET Norway":""}</span>`}var Eo=Un(".ps-places");vn.forEach((i,e)=>{if(i.kind!=="building"||!i.fact)return;let t=document.createElement("option");t.value=String(e),t.textContent=i.name,Eo.append(t)});Eo.addEventListener("change",()=>{Eo.value===""?Qn?.home():Qn?.choose(Number(Eo.value))});Jg.textContent=sc?"Motion is off: set the hour, the day and the sky.":_u?"Press the pins \xB7 two fingers turn the table and go closer":"Press the pins \xB7 drag beside the table or right-drag to turn it \xB7 scroll to go closer";var jg=(i,e)=>{let t=ic.getBoundingClientRect(),n=l=>1-2*(l-t.top)/e,s=l=>-1+2*(l-t.left)/i,r=Un(".ps-head").getBoundingClientRect(),a=Un(".ps-dials").getBoundingClientRect(),o=n(a.top-14);return e>i*1.1?{x0:-1,x1:1,y0:o,y1:n(r.bottom+10)}:{x0:s(r.right+24),x1:1,y0:o,y1:n(40)}},xu=()=>{Fs.dataset.gl="off"};try{Qn=hu({canvas:ic,city:Ns?"city-fine.png":"city.png",marks:Ns?"landmarks-fine.png":"landmarks.png",phone:matchMedia("(max-width: 700px)").matches,pixelRatio:Math.min(devicePixelRatio||1,_u?1.5:2),still:sc,at:new Date,region:jg,onReady:()=>{Fs.dataset.gl="on",document.fonts?.ready.then(()=>Qn?.refit())},onFail:xu,onFit:(i,e,t)=>{Fs.style.setProperty("--ring-x",`${i|0}px`),Fs.style.setProperty("--ring-y",`${e|0}px`),Fs.style.setProperty("--ring-d",`${t|0}px`)},onNews:i=>{$i=i,ac.refresh(),oc()},onLabel:(i,e,t)=>{if(Zi.hidden=i===null,i===null)return;Zi.style.transform=`translate3d(${e.toFixed(1)}px,${t.toFixed(1)}px,0)`;let n=vn[i];Zi.dataset.at!==String(i)&&(Zi.dataset.at=String(i),Zi.innerHTML="<b></b><span></span>",Zi.querySelector("b").textContent=n.name,Zi.querySelector("span").textContent=n.fact??"")}}),Qn.setMoment(rc())}catch{xu()}var Qg=new IntersectionObserver(([i])=>Qn?.setStill(sc||!i.isIntersecting),{threshold:.05});Qg.observe(Fs);ic.parentElement.addEventListener("keydown",i=>{Qn?.key(i.key)&&i.preventDefault()});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
