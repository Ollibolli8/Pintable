var Nc=0,il=1,Uc=2;var ir=1,Fc=2,Es=3,Kn=0,Ot=1,un=2,Qn=0,ws=1,sl=2,rl=3,al=4,va=5;var ci=100,Oc=101,Bc=102,zc=103,kc=104,Hc=200,sr=201,Vc=202,Gc=203,ol=204,ll=205,Wc=206,Xc=207,qc=208,Yc=209,Zc=210,$c=211,Jc=212,Kc=213,Qc=214,Hr=0,Vr=1,Gr=2,ds=3,Wr=4,Xr=5,qr=6,Yr=7,cl=0,jc=1,eh=2,Un=0,hl=1,ul=2,dl=3,fl=4,pl=5,rr=6,ml=7;var gl=300,wi=301,Wi=302,_a=303,ya=304,ar=306,Zr=1e3,Vn=1001,$r=1002,Ut=1003,th=1004;var or=1005;var Rt=1006,Ma=1007;var Ti=1008;var rn=1009,xl=1010,vl=1011,Ts=1012,ba=1013,Fn=1014,Mn=1015,an=1016,Sa=1017,Ea=1018,As=1020,_l=35902,yl=35899,Ml=1021,bl=1022,dn=1023,Gn=1026,Ai=1027,lr=1028,wa=1029,Ri=1030,Ta=1031;var Aa=1033,cr=33776,hr=33777,ur=33778,dr=33779,Ra=35840,Ca=35841,Pa=35842,Ia=35843,La=36196,Da=37492,Na=37496,Ua=37488,Fa=37489,fr=37490,Oa=37491,Ba=37808,za=37809,ka=37810,Ha=37811,Va=37812,Ga=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,Za=37818,$a=37819,Ja=37820,Ka=37821,Qa=36492,ja=36494,eo=36495,to=36283,no=36284,pr=36285,io=36286;var Xs=2300,Jr=2301,zr=2302,$o=2303,Jo=2400,Ko=2401,Qo=2402;var nh=3200;var so=0,ih=1,hi="",cn="srgb",Wn="srgb-linear",qs="linear",_t="srgb";var kr=7680;var sh=519,rh=512,ah=513,oh=514,ro=515,lh=516,ch=517,ao=518,hh=519,uh=35044;var Sl="300 es",Dn=2e3,fs=2001;function Eu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dh(){let i=Ys("canvas");return i.style.display="block",i}var hc={},ps=null;function El(...i){let e="THREE."+i.shift();ps?ps("log",e,...i):console.log(e,...i)}function fh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=fh(i);let e="THREE."+i.shift();if(ps)ps("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=fh(i);let e="THREE."+i.shift();if(ps)ps("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ki(...i){let e=i.join(" ");e in hc||(hc[e]=!0,Xe(...i))}function ph(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var mh={[Hr]:Vr,[Gr]:qr,[Wr]:Yr,[ds]:Xr,[Vr]:Hr,[qr]:Gr,[Yr]:Wr,[Xr]:ds},Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uc=1234567,Gs=Math.PI/180,ms=180/Math.PI;function Rs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function wl(i,e){return(i%e+e)%e}function Tu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Au(i,e,t){return i!==e?(t-i)/(e-i):0}function Ws(i,e,t){return(1-t)*i+t*e}function Ru(i,e,t,n){return Ws(i,e,1-Math.exp(-t*n))}function Cu(i,e=1){return e-Math.abs(wl(i,e*2)-e)}function Pu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Iu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Du(i,e){return i+Math.random()*(e-i)}function Nu(i){return i*(.5-Math.random())}function Uu(i){i!==void 0&&(uc=i);let e=uc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fu(i){return i*Gs}function Ou(i){return i*ms}function Bu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function zu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),m=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*m,l*u,o*c);break;case"YZY":i.set(l*u,o*d,l*m,o*c);break;case"ZXZ":i.set(l*m,l*u,o*d,o*c);break;case"XZX":i.set(o*d,l*x,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*x,o*c);break;case"ZYZ":i.set(l*x,l*f,o*d,o*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Et={DEG2RAD:Gs,RAD2DEG:ms,generateUUID:Rs,clamp:lt,euclideanModulo:wl,mapLinear:Tu,inverseLerp:Au,lerp:Ws,damp:Ru,pingpong:Cu,smoothstep:Pu,smootherstep:Iu,randInt:Lu,randFloat:Du,randFloatSpread:Nu,seededRandom:Uu,degToRad:Fu,radToDeg:Ou,isPowerOfTwo:Bu,ceilPowerOfTwo:zu,floorPowerOfTwo:ku,setQuaternionFromProperEuler:Hu,normalize:ln,denormalize:hs},_e=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],m=n[s+3],u=r[a+0],f=r[a+1],x=r[a+2],b=r[a+3];if(m!==b||l!==u||c!==f||d!==x){let g=l*u+c*f+d*x+m*b;g<0&&(u=-u,f=-f,x=-x,b=-b,g=-g);let h=1-o;if(g<.9995){let T=Math.acos(g),R=Math.sin(T);h=Math.sin(h*T)/R,o=Math.sin(o*T)/R,l=l*h+u*o,c=c*h+f*o,d=d*h+x*o,m=m*h+b*o}else{l=l*h+u*o,c=c*h+f*o,d=d*h+x*o,m=m*h+b*o;let T=1/Math.sqrt(l*l+c*c+d*d+m*m);l*=T,c*=T,d*=T,m*=T}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],m=r[a],u=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+d*m+l*f-c*u,e[t+1]=l*x+d*u+c*m-o*f,e[t+2]=c*x+d*f+o*u-l*m,e[t+3]=d*x-o*m-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),m=o(r/2),u=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*d*m+c*f*x,this._y=c*f*m-u*d*x,this._z=c*d*x+u*f*m,this._w=c*d*m-u*f*x;break;case"YXZ":this._x=u*d*m+c*f*x,this._y=c*f*m-u*d*x,this._z=c*d*x-u*f*m,this._w=c*d*m+u*f*x;break;case"ZXY":this._x=u*d*m-c*f*x,this._y=c*f*m+u*d*x,this._z=c*d*x+u*f*m,this._w=c*d*m-u*f*x;break;case"ZYX":this._x=u*d*m-c*f*x,this._y=c*f*m+u*d*x,this._z=c*d*x-u*f*m,this._w=c*d*m+u*f*x;break;case"YZX":this._x=u*d*m+c*f*x,this._y=c*f*m+u*d*x,this._z=c*d*x-u*f*m,this._w=c*d*m-u*f*x;break;case"XZY":this._x=u*d*m-c*f*x,this._y=c*f*m-u*d*x,this._z=c*d*x+u*f*m,this._w=c*d*m+u*f*x;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],m=t[10],u=n+o+m;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>m){let f=2*Math.sqrt(1+n-o-m);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>m){let f=2*Math.sqrt(1+o-n-m);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+m-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*d,this.y=n+l*d+o*c-r*m,this.z=s+l*m+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ro=new z,dc=new qn,tt=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],m=n[7],u=n[2],f=n[5],x=n[8],b=s[0],g=s[3],h=s[6],T=s[1],R=s[4],y=s[7],S=s[2],E=s[5],C=s[8];return r[0]=a*b+o*T+l*S,r[3]=a*g+o*R+l*E,r[6]=a*h+o*y+l*C,r[1]=c*b+d*T+m*S,r[4]=c*g+d*R+m*E,r[7]=c*h+d*y+m*C,r[2]=u*b+f*T+x*S,r[5]=u*g+f*R+x*E,r[8]=u*h+f*y+x*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],m=d*a-o*c,u=o*l-d*r,f=c*r-a*l,x=t*m+n*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=m*b,e[1]=(s*c-d*n)*b,e[2]=(o*n-s*a)*b,e[3]=u*b,e[4]=(d*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Co.makeScale(e,t)),this}rotate(e){return ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Co=new tt,fc=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pc=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vu(){let i={enabled:!0,workingColorSpace:Wn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wn]:{primaries:e,whitePoint:n,transfer:qs,toXYZ:fc,fromXYZ:pc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:fc,fromXYZ:pc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}var dt=Vu();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ki,Kr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=Ys("canvas")),Ki.width=e.width,Ki.height=e.height;let s=Ki.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gu=0,gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Po(s[a].image)):r.push(Po(s[a]))}else r=Po(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var Wu=0,Io=new z,fn=class i extends Xn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Vn,s=Vn,r=Rt,a=Ti,o=dn,l=rn,c=i.DEFAULT_ANISOTROPY,d=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Rs(),this.name="",this.source=new gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Io).x}get height(){return this.source.getSize(Io).y}get depth(){return this.source.getSize(Io).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=gl;fn.DEFAULT_ANISOTROPY=1;var Mt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],m=l[8],u=l[1],f=l[5],x=l[9],b=l[2],g=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(m-b)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(m+b)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,y=(f+1)/2,S=(h+1)/2,E=(d+u)/4,C=(m+b)/4,v=(x+g)/4;return R>y&&R>S?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=E/n,r=C/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=v/r),this.set(n,s,r,t),this}let T=Math.sqrt((g-x)*(g-x)+(m-b)*(m-b)+(u-d)*(u-d));return Math.abs(T)<.001&&(T=1),this.x=(g-x)/T,this.y=(m-b)/T,this.z=(u-d)/T,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qr=class extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new fn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new gs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends Qr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zs=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jr=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var yt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,d,m,u,f,x,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,m,u,f,x,b,g)}set(e,t,n,s,r,a,o,l,c,d,m,u,f,x,b,g){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=m,h[14]=u,h[3]=f,h[7]=x,h[11]=b,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let u=a*d,f=a*m,x=o*d,b=o*m;t[0]=l*d,t[4]=-l*m,t[8]=c,t[1]=f+x*c,t[5]=u-b*c,t[9]=-o*l,t[2]=b-u*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*d,f=l*m,x=c*d,b=c*m;t[0]=u+b*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*m,t[5]=a*d,t[9]=-o,t[2]=f*o-x,t[6]=b+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*d,f=l*m,x=c*d,b=c*m;t[0]=u-b*o,t[4]=-a*m,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*d,t[9]=b-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*d,f=a*m,x=o*d,b=o*m;t[0]=l*d,t[4]=x*c-f,t[8]=u*c+b,t[1]=l*m,t[5]=b*c+u,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,x=o*l,b=o*c;t[0]=l*d,t[4]=b-u*m,t[8]=x*m+f,t[1]=m,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*m+x,t[10]=u-b*m}else if(e.order==="XZY"){let u=a*l,f=a*c,x=o*l,b=o*c;t[0]=l*d,t[4]=-m,t[8]=c*d,t[1]=u*m+b,t[5]=a*d,t[9]=f*m-x,t[2]=x*m-f,t[6]=o*d,t[10]=b*m+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xu,e,qu)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),pi.crossVectors(n,xn),pi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),pi.crossVectors(n,xn)),pi.normalize(),yr.crossVectors(xn,pi),s[0]=pi.x,s[4]=yr.x,s[8]=xn.x,s[1]=pi.y,s[5]=yr.y,s[9]=xn.y,s[2]=pi.z,s[6]=yr.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],m=n[5],u=n[9],f=n[13],x=n[2],b=n[6],g=n[10],h=n[14],T=n[3],R=n[7],y=n[11],S=n[15],E=s[0],C=s[4],v=s[8],w=s[12],N=s[1],U=s[5],B=s[9],H=s[13],D=s[2],V=s[6],q=s[10],X=s[14],re=s[3],Y=s[7],Q=s[11],j=s[15];return r[0]=a*E+o*N+l*D+c*re,r[4]=a*C+o*U+l*V+c*Y,r[8]=a*v+o*B+l*q+c*Q,r[12]=a*w+o*H+l*X+c*j,r[1]=d*E+m*N+u*D+f*re,r[5]=d*C+m*U+u*V+f*Y,r[9]=d*v+m*B+u*q+f*Q,r[13]=d*w+m*H+u*X+f*j,r[2]=x*E+b*N+g*D+h*re,r[6]=x*C+b*U+g*V+h*Y,r[10]=x*v+b*B+g*q+h*Q,r[14]=x*w+b*H+g*X+h*j,r[3]=T*E+R*N+y*D+S*re,r[7]=T*C+R*U+y*V+S*Y,r[11]=T*v+R*B+y*q+S*Q,r[15]=T*w+R*H+y*X+S*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],m=e[6],u=e[10],f=e[14],x=e[3],b=e[7],g=e[11],h=e[15],T=l*f-c*u,R=o*f-c*m,y=o*u-l*m,S=a*f-c*d,E=a*u-l*d,C=a*m-o*d;return t*(b*T-g*R+h*y)-n*(x*T-g*S+h*E)+s*(x*R-b*S+h*C)-r*(x*y-b*E+g*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],m=e[9],u=e[10],f=e[11],x=e[12],b=e[13],g=e[14],h=e[15],T=t*o-n*a,R=t*l-s*a,y=t*c-r*a,S=n*l-s*o,E=n*c-r*o,C=s*c-r*l,v=d*b-m*x,w=d*g-u*x,N=d*h-f*x,U=m*g-u*b,B=m*h-f*b,H=u*h-f*g,D=T*H-R*B+y*U+S*N-E*w+C*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/D;return e[0]=(o*H-l*B+c*U)*V,e[1]=(s*B-n*H-r*U)*V,e[2]=(b*C-g*E+h*S)*V,e[3]=(u*E-m*C-f*S)*V,e[4]=(l*N-a*H-c*w)*V,e[5]=(t*H-s*N+r*w)*V,e[6]=(g*y-x*C-h*R)*V,e[7]=(d*C-u*y+f*R)*V,e[8]=(a*B-o*N+c*v)*V,e[9]=(n*N-t*B-r*v)*V,e[10]=(x*E-b*y+h*T)*V,e[11]=(m*y-d*E-f*T)*V,e[12]=(o*w-a*U-l*v)*V,e[13]=(t*U-n*w+s*v)*V,e[14]=(b*R-x*S-g*T)*V,e[15]=(d*S-m*R+u*T)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,m=o+o,u=r*c,f=r*d,x=r*m,b=a*d,g=a*m,h=o*m,T=l*c,R=l*d,y=l*m,S=n.x,E=n.y,C=n.z;return s[0]=(1-(b+h))*S,s[1]=(f+y)*S,s[2]=(x-R)*S,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+h))*E,s[6]=(g+T)*E,s[7]=0,s[8]=(x+R)*C,s[9]=(g-T)*C,s[10]=(1-(u+b))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Qi.set(s[0],s[1],s[2]).length(),o=Qi.set(s[4],s[5],s[6]).length(),l=Qi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Pn.copy(this);let c=1/a,d=1/o,m=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=d,Pn.elements[5]*=d,Pn.elements[6]*=d,Pn.elements[8]*=m,Pn.elements[9]*=m,Pn.elements[10]*=m,t.setFromRotationMatrix(Pn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Dn,l=!1){let c=this.elements,d=2*r/(t-e),m=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),x,b;if(l)x=r/(a-r),b=a*r/(a-r);else if(o===Dn)x=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===fs)x=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Dn,l=!1){let c=this.elements,d=2/(t-e),m=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),x,b;if(l)x=1/(a-r),b=a/(a-r);else if(o===Dn)x=-2/(a-r),b=-(a+r)/(a-r);else if(o===fs)x=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qi=new z,Pn=new yt,Xu=new z(0,0,0),qu=new z(1,1,1),pi=new z,yr=new z,xn=new z,mc=new yt,gc=new qn,li=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],m=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gc.setFromEuler(this),this.setFromQuaternion(gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yu=0,xc=new z,ji=new qn,ni=new yt,Mr=new z,zs=new z,Zu=new z,$u=new qn,vc=new z(1,0,0),_c=new z(0,1,0),yc=new z(0,0,1),Mc={type:"added"},Ju={type:"removed"},es={type:"childadded",child:null},Lo={type:"childremoved",child:null},hn=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new li,n=new qn,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new tt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return xc.copy(e).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(zs,Mr,this.up):ni.lookAt(Mr,zs,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(ni),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mc),es.child=e,this.dispatchEvent(es),es.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ju),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mc),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,$u,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),m=a(e.shapes),u=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new z(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zi=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ku={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),h=this._getHandJoint(c,b);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let d=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=d.position.distanceTo(m.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},br={h:0,s:0,l:0};function Do(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var it=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=wl(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Do(a,r,e+1/3),this.g=Do(a,r,e),this.b=Do(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){let n=gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return dt.workingToColorSpace(tn.copy(this),e),Math.round(lt(tn.r*255,0,255))*65536+Math.round(lt(tn.g*255,0,255))*256+Math.round(lt(tn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=d<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=cn){dt.workingToColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(br);let n=Ws(mi.h,br.h,t),s=Ws(mi.s,br.s,t),r=Ws(mi.l,br.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new it;it.NAMES=gh;var An=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},In=new z,ii=new z,No=new z,si=new z,ts=new z,ns=new z,bc=new z,Uo=new z,Fo=new z,Oo=new z,Bo=new Mt,zo=new Mt,ko=new Mt,_i=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),In.subVectors(e,t),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){In.subVectors(s,t),ii.subVectors(n,t),No.subVectors(e,t);let a=In.dot(In),o=In.dot(ii),l=In.dot(No),c=ii.dot(ii),d=ii.dot(No),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let u=1/m,f=(c*l-o*d)*u,x=(a*d-o*l)*u;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Bo.setScalar(0),zo.setScalar(0),ko.setScalar(0),Bo.fromBufferAttribute(e,t),zo.fromBufferAttribute(e,n),ko.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Bo,r.x),a.addScaledVector(zo,r.y),a.addScaledVector(ko,r.z),a}static isFrontFacing(e,t,n,s){return In.subVectors(n,t),ii.subVectors(e,t),In.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),In.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ts.subVectors(s,n),ns.subVectors(r,n),Uo.subVectors(e,n);let l=ts.dot(Uo),c=ns.dot(Uo);if(l<=0&&c<=0)return t.copy(n);Fo.subVectors(e,s);let d=ts.dot(Fo),m=ns.dot(Fo);if(d>=0&&m<=d)return t.copy(s);let u=l*m-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(ts,a);Oo.subVectors(e,r);let f=ts.dot(Oo),x=ns.dot(Oo);if(x>=0&&f<=x)return t.copy(r);let b=f*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(ns,o);let g=d*x-f*m;if(g<=0&&m-d>=0&&f-x>=0)return bc.subVectors(r,s),o=(m-d)/(m-d+(f-x)),t.copy(s).addScaledVector(bc,o);let h=1/(g+b+u);return a=b*h,o=u*h,t.copy(n).addScaledVector(ts,a).addScaledVector(ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yi=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Er.subVectors(this.max,ks),is.subVectors(e.a,ks),ss.subVectors(e.b,ks),rs.subVectors(e.c,ks),gi.subVectors(ss,is),xi.subVectors(rs,ss),Ui.subVectors(is,rs);let t=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Ui.z,Ui.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Ui.z,0,-Ui.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Ui.y,Ui.x,0];return!Ho(t,is,ss,rs,Er)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,is,ss,rs,Er))?!1:(wr.crossVectors(gi,xi),t=[wr.x,wr.y,wr.z],Ho(t,is,ss,rs,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ri=[new z,new z,new z,new z,new z,new z,new z,new z],Ln=new z,Sr=new yi,is=new z,ss=new z,rs=new z,gi=new z,xi=new z,Ui=new z,ks=new z,Er=new z,wr=new z,Fi=new z;function Ho(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fi.fromArray(i,r);let o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),d=n.dot(Fi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var zt=new z,Tr=new _e,Qu=0,Tn=class extends Xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var $s=class extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Js=class extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Nt=class extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},ju=new yi,Hs=new z,Vo=new z,_s=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ju.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);let t=Hs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Vo)),this.expandByPoint(Hs.copy(e.center).sub(Vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ed=0,wn=new yt,Go=new hn,as=new z,vn=new yi,Vs=new yi,$t=new z,sn=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eu(e)?Js:$s)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(vn.min,Vs.min),vn.expandByPoint($t),$t.addVectors(vn.max,Vs.max),vn.expandByPoint($t)):(vn.expandByPoint(Vs.min),vn.expandByPoint(Vs.max))}vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)$t.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),$t.add(as)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new z,l[v]=new z;let c=new z,d=new z,m=new z,u=new _e,f=new _e,x=new _e,b=new z,g=new z;function h(v,w,N){c.fromBufferAttribute(n,v),d.fromBufferAttribute(n,w),m.fromBufferAttribute(n,N),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),x.fromBufferAttribute(r,N),d.sub(c),m.sub(c),f.sub(u),x.sub(u);let U=1/(f.x*x.y-x.x*f.y);isFinite(U)&&(b.copy(d).multiplyScalar(x.y).addScaledVector(m,-f.y).multiplyScalar(U),g.copy(m).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(U),o[v].add(b),o[w].add(b),o[N].add(b),l[v].add(g),l[w].add(g),l[N].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let v=0,w=T.length;v<w;++v){let N=T[v],U=N.start,B=N.count;for(let H=U,D=U+B;H<D;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let R=new z,y=new z,S=new z,E=new z;function C(v){S.fromBufferAttribute(s,v),E.copy(S);let w=o[v];R.copy(w),R.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(E,w);let U=y.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,U)}for(let v=0,w=T.length;v<w;++v){let N=T[v],U=N.start,B=N.count;for(let H=U,D=U+B;H<D;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,d=new z,m=new z;if(e)for(let u=0,f=e.count;u<f;u+=3){let x=e.getX(u+0),b=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,m=o.normalized,u=new c.constructor(l.length*d),f=0,x=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*d;for(let h=0;h<d;h++)u[x++]=c[f++]}return new Tn(u,d,m)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,m=c.length;d<m;d++){let u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let m=0,u=c.length;m<u;m++){let f=c[m];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],m=r[c];for(let u=0,f=m.length;u<f;u++)d.push(m[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Wo=new z,td=new z,nd=new tt,_n=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wo.subVectors(n,t).cross(td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Wo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nd.getNormalMatrix(e),s=this.coplanarPoint(Wo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},id=0,Mi=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=ws,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=ll,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new _n().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ai=new z,Xo=new z,Ar=new z,Rr=new z,Hi=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xo.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Xo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ar),o=Rr.dot(this.direction),l=-Rr.dot(Ar),c=Rr.lengthSq(),d=Math.abs(1-a*a),m,u,f,x;if(d>0)if(m=a*l-o,u=a*o-l,x=r*d,m>=0)if(u>=-x)if(u<=x){let b=1/d;m*=b,u*=b,f=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=r,m=Math.max(0,-(a*u+o)),f=-m*m+u*(u+2*l)+c;else u=-r,m=Math.max(0,-(a*u+o)),f=-m*m+u*(u+2*l)+c;else u<=-x?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-l),r),f=-m*m+u*(u+2*l)+c):u<=x?(m=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-l),r),f=-m*m+u*(u+2*l)+c);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),f=-m*m+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Xo).addScaledVector(Ar,u),f}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-u.z)*m,l=(e.max.z-u.z)*m):(o=(e.max.z-u.z)*m,l=(e.min.z-u.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,m=e.x-a.x,u=e.y-a.y,f=e.z-a.z,x=t.x-a.x,b=t.y-a.y,g=t.z-a.z,h=n.x-a.x,T=n.y-a.y,R=n.z-a.z,y=Math.abs(l),S=Math.abs(c),E=Math.abs(d),C,v,w,N,U,B,H,D,V,q,X,re;if(y>=S&&y>=E?(w=l,B=m,V=x,re=h,l>=0?(C=c,v=d,N=u,U=f,H=b,D=g,q=T,X=R):(C=d,v=c,N=f,U=u,H=g,D=b,q=R,X=T)):S>=E?(w=c,B=u,V=b,re=T,c>=0?(C=d,v=l,N=f,U=m,H=g,D=x,q=R,X=h):(C=l,v=d,N=m,U=f,H=x,D=g,q=h,X=R)):(w=d,B=f,V=g,re=R,d>=0?(C=l,v=c,N=m,U=u,H=x,D=b,q=h,X=T):(C=c,v=l,N=u,U=m,H=b,D=x,q=T,X=h)),w===0)return null;let Y=C/w,Q=v/w,j=1/w,Fe=N-Y*B,Ue=U-Q*B,he=H-Y*V,Le=D-Q*V,Be=q-Y*re,J=X-Q*re,ee=Be*Le-J*he,Ee=Fe*J-Ue*Be,Oe=he*Ue-Le*Fe;if(s){if(ee<0||Ee<0||Oe<0)return null}else if((ee<0||Ee<0||Oe<0)&&(ee>0||Ee>0||Oe>0))return null;let Me=ee+Ee+Oe;if(Me===0)return null;let Ze=j*(ee*B+Ee*V+Oe*re);return(Me>0?Ze<0:Ze>0)?null:this.at(Ze/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yn=class extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sc=new yt,Oi=new Hi,Cr=new _s,Ec=new z,Pr=new z,Ir=new z,Lr=new z,qo=new z,Dr=new z,wc=new z,Nr=new z,St=class extends hn{constructor(e=new sn,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],m=r[l];d!==0&&(qo.fromBufferAttribute(m,e),a?Dr.addScaledVector(qo,d):Dr.addScaledVector(qo.sub(t),d))}t.add(Dr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(Cr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Cr,Ec)===null||Oi.origin.distanceToSquared(Ec)>(e.far-e.near)**2))&&(Sc.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=u.length;x<b;x++){let g=u[x],h=a[g.materialIndex],T=Math.max(g.start,f.start),R=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=T,S=R;y<S;y+=3){let E=o.getX(y),C=o.getX(y+1),v=o.getX(y+2);s=Ur(this,h,e,n,c,d,m,E,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=x,h=b;g<h;g+=3){let T=o.getX(g),R=o.getX(g+1),y=o.getX(g+2);s=Ur(this,a,e,n,c,d,m,T,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,b=u.length;x<b;x++){let g=u[x],h=a[g.materialIndex],T=Math.max(g.start,f.start),R=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=T,S=R;y<S;y+=3){let E=y,C=y+1,v=y+2;s=Ur(this,h,e,n,c,d,m,E,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=x,h=b;g<h;g+=3){let T=g,R=g+1,y=g+2;s=Ur(this,a,e,n,c,d,m,T,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function sd(i,e,t,n,s,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Kn,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Nr);return c<t.near||c>t.far?null:{distance:c,point:Nr.clone(),object:i}}function Ur(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Pr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Lr);let d=sd(i,e,t,n,Pr,Ir,Lr,wc);if(d){let m=new z;_i.getBarycoord(wc,Pr,Ir,Lr,m),s&&(d.uv=_i.getInterpolatedAttribute(s,o,l,c,m,new _e)),r&&(d.uv1=_i.getInterpolatedAttribute(r,o,l,c,m,new _e)),a&&(d.normal=_i.getInterpolatedAttribute(a,o,l,c,m,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new z,materialIndex:0};_i.getNormal(Pr,Ir,Lr,u.normal),d.face=u,d.barycoord=m}return d}var Vi=class extends fn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,d=Ut,m,u){super(null,a,o,l,c,d,s,r,m,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=new _s,rd=new _e(.5,.5),Fr=new z,ys=class{constructor(e=new _n,t=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],m=r[5],u=r[6],f=r[7],x=r[8],b=r[9],g=r[10],h=r[11],T=r[12],R=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,f-d,h-x,S-T).normalize(),s[1].setComponents(c+a,f+d,h+x,S+T).normalize(),s[2].setComponents(c+o,f+m,h+b,S+R).normalize(),s[3].setComponents(c-o,f-m,h-b,S-R).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,f-u,h-g,S-y).normalize();else if(s[4].setComponents(c-l,f-u,h-g,S-y).normalize(),t===Dn)s[5].setComponents(c+l,f+u,h+g,S+y).normalize();else if(t===fs)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);let t=rd.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends fn{constructor(e=[],t=wi,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Zn=class extends fn{constructor(e,t,n=Fn,s,r,a,o=Ut,l=Ut,c,d=Gn,m=1){if(d!==Gn&&d!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:m};super(u,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ea=class extends Zn{constructor(e,t=Fn,n=wi,s,r,a=Ut,o=Ut,l,c=Gn){let d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qs=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Nn=class i extends sn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],m=[],u=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(m,2));function x(b,g,h,T,R,y,S,E,C,v,w){let N=y/C,U=S/v,B=y/2,H=S/2,D=E/2,V=C+1,q=v+1,X=0,re=0,Y=new z;for(let Q=0;Q<q;Q++){let j=Q*U-H;for(let Fe=0;Fe<V;Fe++){let Ue=Fe*N-B;Y[b]=Ue*T,Y[g]=j*R,Y[h]=D,c.push(Y.x,Y.y,Y.z),Y[b]=0,Y[g]=0,Y[h]=E>0?1:-1,d.push(Y.x,Y.y,Y.z),m.push(Fe/C),m.push(1-Q/v),X+=1}}for(let Q=0;Q<v;Q++)for(let j=0;j<C;j++){let Fe=u+j+V*Q,Ue=u+j+V*(Q+1),he=u+(j+1)+V*(Q+1),Le=u+(j+1)+V*Q;l.push(Fe,Ue,Le),l.push(Ue,he,Le),re+=6}o.addGroup(f,re,w),f+=re,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Gi=class i extends sn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],m=[],u=[],f=[],x=0,b=[],g=n/2,h=0;T(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new Nt(m,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(f,2));function T(){let y=new z,S=new z,E=0,C=(t-e)/n;for(let v=0;v<=r;v++){let w=[],N=v/r,U=N*(t-e)+e;for(let B=0;B<=s;B++){let H=B/s,D=H*l+o,V=Math.sin(D),q=Math.cos(D);S.x=U*V,S.y=-N*n+g,S.z=U*q,m.push(S.x,S.y,S.z),y.set(V,C,q).normalize(),u.push(y.x,y.y,y.z),f.push(H,1-N),w.push(x++)}b.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let N=b[w][v],U=b[w+1][v],B=b[w+1][v+1],H=b[w][v+1];(e>0||w!==0)&&(d.push(N,U,H),E+=3),(t>0||w!==r-1)&&(d.push(U,B,H),E+=3)}c.addGroup(h,E,0),h+=E}function R(y){let S=x,E=new _e,C=new z,v=0,w=y===!0?e:t,N=y===!0?1:-1;for(let B=1;B<=s;B++)m.push(0,g*N,0),u.push(0,N,0),f.push(.5,.5),x++;let U=x;for(let B=0;B<=s;B++){let D=B/s*l+o,V=Math.cos(D),q=Math.sin(D);C.x=w*q,C.y=g*N,C.z=w*V,m.push(C.x,C.y,C.z),u.push(0,N,0),E.x=V*.5+.5,E.y=q*.5*N+.5,f.push(E.x,E.y),x++}for(let B=0;B<s;B++){let H=S+B,D=U+B;y===!0?d.push(D,D+1,H):d.push(D+1,D,H),v+=3}c.addGroup(h,v,y===!0?1:2),h+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ms=class i extends sn{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=lt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],d=1/t,m=new z,u=new _e,f=new z,x=new z,b=new z,g=0,h=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:g=e[T+1].x-e[T].x,h=e[T+1].y-e[T].y,f.x=h*1,f.y=-g,f.z=h*0,b.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:g=e[T+1].x-e[T].x,h=e[T+1].y-e[T].y,f.x=h*1,f.y=-g,f.z=h*0,x.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),l.push(f.x,f.y,f.z),b.copy(x)}for(let T=0;T<=t;T++){let R=n+T*d*s,y=Math.sin(R),S=Math.cos(R);for(let E=0;E<=e.length-1;E++){m.x=e[E].x*y,m.y=e[E].y,m.z=e[E].x*S,a.push(m.x,m.y,m.z),u.x=T/t,u.y=E/(e.length-1),o.push(u.x,u.y);let C=l[3*E+0]*y,v=l[3*E+1],w=l[3*E+0]*S;c.push(C,v,w)}}for(let T=0;T<t;T++)for(let R=0;R<e.length-1;R++){let y=R+T*e.length,S=y,E=y+e.length,C=y+e.length+1,v=y+1;r.push(S,E,v),r.push(C,v,E)}this.setIndex(r),this.setAttribute("position",new Nt(a,3)),this.setAttribute("uv",new Nt(o,2)),this.setAttribute("normal",new Nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var $n=class i extends sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,m=e/o,u=t/l,f=[],x=[],b=[],g=[];for(let h=0;h<d;h++){let T=h*u-a;for(let R=0;R<c;R++){let y=R*m-r;x.push(y,-T,0),b.push(0,0,1),g.push(R/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){let R=T+c*h,y=T+c*(h+1),S=T+1+c*(h+1),E=T+1+c*h;f.push(R,y,E),f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new Nt(x,3)),this.setAttribute("normal",new Nt(b,3)),this.setAttribute("uv",new Nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Xi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Tc(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Tc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=Xi(i[t]);for(let s in n)e[s]=n[s]}return e}function Tc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ad(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var xh={clone:Xi,merge:on},od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new it().setHex(s.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ta=class extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bs=class extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ss=class extends bs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var na=class extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ia=class extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function os(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sa=class extends bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jo,endingEnd:Jo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ko:r=e,o=2*t-n;break;case Qo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ko:a=e,l=2*n-t;break;case Qo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),b=x*x,g=b*x,h=-u*g+2*u*b-u*x,T=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*x+1,R=(-1-f)*g+(1.5+f)*b+.5*x,y=f*g-f*b;for(let S=0;S!==o;++S)r[S]=h*a[d+S]+T*a[c+S]+R*a[l+S]+y*a[m+S];return r}},ra=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),m=1-d;for(let u=0;u!==o;++u)r[u]=a[c+u]*m+a[l+u]*d;return r}},aa=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},oa=class extends bi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,m=this.outTangents;if(!d||!m){let x=(n-t)/(s-t),b=1-x;for(let g=0;g!==o;++g)r[g]=a[c+g]*b+a[l+g]*x;return r}let u=o*2,f=e-1;for(let x=0;x!==o;++x){let b=a[c+x],g=a[l+x],h=f*u+x*2,T=m[h],R=m[h+1],y=e*u+x*2,S=d[y],E=d[y+1],C=hd(n,t,T,S,s);r[x]=vh(C,b,R,E,g)}return r}};function vh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function cd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function hd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=vh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=cd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=os(t,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:os(e.times,Array),values:os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Yo(e.settings)&&(n.settings={inTangents:os(e.settings.inTangents,Array),outTangents:os(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new oa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case Jr:t=this.InterpolantFactoryMethodLinear;break;case zr:t=this.InterpolantFactoryMethodSmooth;break;case $o:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return zr;case this.InterpolantFactoryMethodBezier:return $o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Yo(this.settings)&&(Ac(this.settings.inTangents,e),Ac(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ye("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&wu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,u=m-n,f=m+n;for(let x=0;x!==n;++x){let b=t[m+x];if(b!==t[u+x]||b!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[m+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Yo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ac(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Jr;var Si=class extends yn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Xs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};la.prototype.ValueTypeName="color";var ca=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};ca.prototype.ValueTypeName="number";var ha=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)qn.slerpFlat(r,0,a,c-o,a,c,l);return r}},js=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}};js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends yn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Xs;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};ua.prototype.ValueTypeName="vector";var da=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,m){return c.push(d,m),this},this.removeHandler=function(d){let m=c.indexOf(d);return m!==-1&&c.splice(m,2),this},this.getHandler=function(d){for(let m=0,u=c.length;m<u;m+=2){let f=c[m],x=c[m+1];if(f.global&&(f.lastIndex=0),f.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_h=new da,fa=class{constructor(e){this.manager=e!==void 0?e:_h,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var pa=class extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Zo=new yt,Rc=new z,Cc=new z,ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Rc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rc),Cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===fs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Or=new z,Br=new qn,Hn=new z,er=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Or,Br,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Br,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Or,Br,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Br,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new z,Pc=new _e,Ic=new _e,nn=class extends er{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Pc,Ic),t.subVectors(Ic,Pc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Jn=class extends er{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},jo=class extends ma{constructor(){super(new Jn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new jo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ls=-90,cs=1,ga=class extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(ls,cs,e,t);s.layers=this.layers,this.add(s);let r=new nn(ls,cs,e,t);r.layers=this.layers,this.add(r);let a=new nn(ls,cs,e,t);a.layers=this.layers,this.add(a);let o=new nn(ls,cs,e,t);o.layers=this.layers,this.add(o);let l=new nn(ls,cs,e,t);l.layers=this.layers,this.add(l);let c=new nn(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,m=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(m,u,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},xa=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Al="\\[\\]\\.:\\/",ud=new RegExp("["+Al+"]","g"),Rl="[^"+Al+"]",dd="[^"+Al.replace("\\.","")+"]",fd=/((?:WC+[\/:])*)/.source.replace("WC",Rl),pd=/(WCOD+)?/.source.replace("WCOD",dd),md=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),gd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),xd=new RegExp("^"+fd+pd+md+gd+"$"),vd=["material","materials","bones","map"],el=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ud,"")}static parseTrackName(e){let t=xd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=el;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rx=new Float32Array(1);var Lc=new yt,nr=class{constructor(e,t,n=0,s=1/0){this.ray=new Hi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lc),this}intersectObject(e,t=!0,n=[]){return tl(e,this,n,t),n.sort(Dc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)tl(e[s],this,n,t);return n.sort(Dc),n}};function Dc(i,e){return i.distance-e.distance}function tl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)tl(r[a],e,t,!0)}}var nl=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Cl(i,e,t,n){let s=_d(n);switch(t){case Ml:return i*e;case lr:return i*e/s.components*s.byteLength;case wa:return i*e/s.components*s.byteLength;case Ri:return i*e*2/s.components*s.byteLength;case Ta:return i*e*2/s.components*s.byteLength;case bl:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case Aa:return i*e*4/s.components*s.byteLength;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:case Ia:return Math.max(i,16)*Math.max(e,8)/4;case Ra:case Pa:return Math.max(i,8)*Math.max(e,8)/2;case La:case Da:case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Na:case fr:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qa:case ja:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pr:case io:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _d(i){switch(i){case rn:case xl:return{byteLength:1,components:1};case Ts:case vl:case an:return{byteLength:2,components:1};case Sa:case Ea:return{byteLength:2,components:4};case Fn:case ba:case Mn:return{byteLength:4,components:1};case _l:case yl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Md(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let d=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,d);else{m.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<m.length;f++){let x=m[u],b=m[f];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++u,m[u]=b)}m.length=u+1;for(let f=0,x=m.length;f<x;f++){let b=m[f];i.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sd=`#ifdef USE_ALPHAHASH
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
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rd=`#ifdef USE_AOMAP
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
#endif`,Cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pd=`#ifdef USE_BATCHING
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
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
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
#endif`,Fd=`#ifdef USE_BUMPMAP
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Xd=`#define PI 3.141592653589793
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
} // validated`,qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yd=`vec3 transformedNormal = objectNormal;
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
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hf=`#ifdef USE_GRADIENTMAP
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
}`,uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
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
#endif`,Mf=`uniform sampler2D dfgLUT;
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
}`,bf=`
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Df=`#if defined( USE_POINTS_UV )
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
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Of=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
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
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qf=`#ifdef USE_NORMALMAP
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
#endif`,Yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lp=`float getShadowMask() {
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
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hp=`#ifdef USE_SKINNING
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
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ep=`uniform sampler2D t2D;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`#include <common>
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
}`,Pp=`#if DEPTH_PACKING == 3200
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
}`,Ip=`#define DISTANCE
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
}`,Lp=`#define DISTANCE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`uniform float scale;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#include <common>
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
}`,Bp=`uniform vec3 diffuse;
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
}`,zp=`#define LAMBERT
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
}`,kp=`#define LAMBERT
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
}`,Hp=`#define MATCAP
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
}`,Vp=`#define MATCAP
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
}`,Gp=`#define NORMAL
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define PHONG
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
}`,qp=`#define PHONG
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
}`,Yp=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,$p=`#define TOON
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
}`,Jp=`#define TOON
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
}`,Kp=`uniform float size;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,em=`uniform vec3 color;
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
}`,tm=`uniform float rotation;
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
}`,nm=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:bd,alphahash_pars_fragment:Sd,alphamap_fragment:Ed,alphamap_pars_fragment:wd,alphatest_fragment:Td,alphatest_pars_fragment:Ad,aomap_fragment:Rd,aomap_pars_fragment:Cd,batching_pars_vertex:Pd,batching_vertex:Id,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Nd,iridescence_fragment:Ud,bumpmap_pars_fragment:Fd,clipping_planes_fragment:Od,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:zd,clipping_planes_vertex:kd,color_fragment:Hd,color_pars_fragment:Vd,color_pars_vertex:Gd,color_vertex:Wd,common:Xd,cube_uv_reflection_fragment:qd,defaultnormal_vertex:Yd,displacementmap_pars_vertex:Zd,displacementmap_vertex:$d,emissivemap_fragment:Jd,emissivemap_pars_fragment:Kd,colorspace_fragment:Qd,colorspace_pars_fragment:jd,envmap_fragment:ef,envmap_common_pars_fragment:tf,envmap_pars_fragment:nf,envmap_pars_vertex:sf,envmap_physical_pars_fragment:mf,envmap_vertex:rf,fog_vertex:af,fog_pars_vertex:of,fog_fragment:lf,fog_pars_fragment:cf,gradientmap_pars_fragment:hf,lightmap_pars_fragment:uf,lights_lambert_fragment:df,lights_lambert_pars_fragment:ff,lights_pars_begin:pf,lights_toon_fragment:gf,lights_toon_pars_fragment:xf,lights_phong_fragment:vf,lights_phong_pars_fragment:_f,lights_physical_fragment:yf,lights_physical_pars_fragment:Mf,lights_fragment_begin:bf,lights_fragment_maps:Sf,lights_fragment_end:Ef,lightprobes_pars_fragment:wf,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:Af,logdepthbuf_pars_vertex:Rf,logdepthbuf_vertex:Cf,map_fragment:Pf,map_pars_fragment:If,map_particle_fragment:Lf,map_particle_pars_fragment:Df,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:Uf,morphinstance_vertex:Ff,morphcolor_vertex:Of,morphnormal_vertex:Bf,morphtarget_pars_vertex:zf,morphtarget_vertex:kf,normal_fragment_begin:Hf,normal_fragment_maps:Vf,normal_pars_fragment:Gf,normal_pars_vertex:Wf,normal_vertex:Xf,normalmap_pars_fragment:qf,clearcoat_normal_fragment_begin:Yf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:Jf,opaque_fragment:Kf,packing:Qf,premultiplied_alpha_fragment:jf,project_vertex:ep,dithering_fragment:tp,dithering_pars_fragment:np,roughnessmap_fragment:ip,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:rp,shadowmap_pars_vertex:ap,shadowmap_vertex:op,shadowmask_pars_fragment:lp,skinbase_vertex:cp,skinning_pars_vertex:hp,skinning_vertex:up,skinnormal_vertex:dp,specularmap_fragment:fp,specularmap_pars_fragment:pp,tonemapping_fragment:mp,tonemapping_pars_fragment:gp,transmission_fragment:xp,transmission_pars_fragment:vp,uv_pars_fragment:_p,uv_pars_vertex:yp,uv_vertex:Mp,worldpos_vertex:bp,background_vert:Sp,background_frag:Ep,backgroundCube_vert:wp,backgroundCube_frag:Tp,cube_vert:Ap,cube_frag:Rp,depth_vert:Cp,depth_frag:Pp,distance_vert:Ip,distance_frag:Lp,equirect_vert:Dp,equirect_frag:Np,linedashed_vert:Up,linedashed_frag:Fp,meshbasic_vert:Op,meshbasic_frag:Bp,meshlambert_vert:zp,meshlambert_frag:kp,meshmatcap_vert:Hp,meshmatcap_frag:Vp,meshnormal_vert:Gp,meshnormal_frag:Wp,meshphong_vert:Xp,meshphong_frag:qp,meshphysical_vert:Yp,meshphysical_frag:Zp,meshtoon_vert:$p,meshtoon_frag:Jp,points_vert:Kp,points_frag:Qp,shadow_vert:jp,shadow_frag:em,sprite_vert:tm,sprite_frag:nm},be={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ei={basic:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:on([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:on([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new it(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:on([be.points,be.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:on([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:on([be.common,be.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:on([be.sprite,be.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:on([be.common,be.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:on([be.lights,be.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ei.physical={uniforms:on([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var oo={r:0,b:0,g:0},im=new yt,Vh=new tt;Vh.set(-1,0,0,0,1,0,0,0,1);function sm(i,e,t,n,s,r){let a=new it(0),o=s===!0?0:1,l,c,d=null,m=0,u=null;function f(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let y=T.backgroundBlurriness>0;R=e.get(R,y)}return R}function x(T){let R=!1,y=f(T);y===null?g(a,o):y&&y.isColor&&(g(y,1),R=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(T,R){let y=f(R);y&&(y.isCubeTexture||y.mapping===ar)?(c===void 0&&(c=new St(new Nn(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Xi(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(im.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vh),c.material.toneMapped=dt.getTransfer(y.colorSpace)!==_t,(d!==y||m!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,m=y.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new St(new $n(2,2),new Jt({name:"BackgroundMaterial",uniforms:Xi(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=dt.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||m!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,m=y.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,R){T.getRGB(oo,Tl(i)),t.buffers.color.setClear(oo.r,oo.g,oo.b,R,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,R=1){a.set(T),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(a,o)},render:x,addToRenderList:b,dispose:h}}function rm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,B,H,D,V){let q=!1,X=m(U,D,H,B);r!==X&&(r=X,c(r.object)),q=f(U,D,H,V),q&&x(U,D,H,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(U,B,H,D),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function d(U){return i.deleteVertexArray(U)}function m(U,B,H,D){let V=D.wireframe===!0,q=n[B.id];q===void 0&&(q={},n[B.id]=q);let X=U.isInstancedMesh===!0?U.id:0,re=q[X];re===void 0&&(re={},q[X]=re);let Y=re[H.id];Y===void 0&&(Y={},re[H.id]=Y);let Q=Y[V];return Q===void 0&&(Q=u(l()),Y[V]=Q),Q}function u(U){let B=[],H=[],D=[];for(let V=0;V<t;V++)B[V]=0,H[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,B,H,D){let V=r.attributes,q=B.attributes,X=0,re=H.getAttributes();for(let Y in re)if(re[Y].location>=0){let j=V[Y],Fe=q[Y];if(Fe===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Fe=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Fe=U.instanceColor)),j===void 0||j.attribute!==Fe||Fe&&j.data!==Fe.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function x(U,B,H,D){let V={},q=B.attributes,X=0,re=H.getAttributes();for(let Y in re)if(re[Y].location>=0){let j=q[Y];j===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(j=U.instanceColor));let Fe={};Fe.attribute=j,j&&j.data&&(Fe.data=j.data),V[Y]=Fe,X++}r.attributes=V,r.attributesNum=X,r.index=D}function b(){let U=r.newAttributes;for(let B=0,H=U.length;B<H;B++)U[B]=0}function g(U){h(U,0)}function h(U,B){let H=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;H[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),V[U]!==B&&(i.vertexAttribDivisor(U,B),V[U]=B)}function T(){let U=r.newAttributes,B=r.enabledAttributes;for(let H=0,D=B.length;H<D;H++)B[H]!==U[H]&&(i.disableVertexAttribArray(H),B[H]=0)}function R(U,B,H,D,V,q,X){X===!0?i.vertexAttribIPointer(U,B,H,V,q):i.vertexAttribPointer(U,B,H,D,V,q)}function y(U,B,H,D){b();let V=D.attributes,q=H.getAttributes(),X=B.defaultAttributeValues;for(let re in q){let Y=q[re];if(Y.location>=0){let Q=V[re];if(Q===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let j=Q.normalized,Fe=Q.itemSize,Ue=e.get(Q);if(Ue===void 0)continue;let he=Ue.buffer,Le=Ue.type,Be=Ue.bytesPerElement,J=Le===i.INT||Le===i.UNSIGNED_INT||Q.gpuType===ba;if(Q.isInterleavedBufferAttribute){let ee=Q.data,Ee=ee.stride,Oe=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let Me=0;Me<Y.locationSize;Me++)h(Y.location+Me,ee.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Me=0;Me<Y.locationSize;Me++)g(Y.location+Me);i.bindBuffer(i.ARRAY_BUFFER,he);for(let Me=0;Me<Y.locationSize;Me++)R(Y.location+Me,Fe/Y.locationSize,Le,j,Ee*Be,(Oe+Fe/Y.locationSize*Me)*Be,J)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)h(Y.location+ee,Q.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<Y.locationSize;ee++)g(Y.location+ee);i.bindBuffer(i.ARRAY_BUFFER,he);for(let ee=0;ee<Y.locationSize;ee++)R(Y.location+ee,Fe/Y.locationSize,Le,j,Fe*Be,Fe/Y.locationSize*ee*Be,J)}}else if(X!==void 0){let j=X[re];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(Y.location,j);break;case 3:i.vertexAttrib3fv(Y.location,j);break;case 4:i.vertexAttrib4fv(Y.location,j);break;default:i.vertexAttrib1fv(Y.location,j)}}}}T()}function S(){w();for(let U in n){let B=n[U];for(let H in B){let D=B[H];for(let V in D){let q=D[V];for(let X in q)d(q[X].object),delete q[X];delete D[V]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;let B=n[U.id];for(let H in B){let D=B[H];for(let V in D){let q=D[V];for(let X in q)d(q[X].object),delete q[X];delete D[V]}}delete n[U.id]}function C(U){for(let B in n){let H=n[B];for(let D in H){let V=H[D];if(V[U.id]===void 0)continue;let q=V[U.id];for(let X in q)d(q[X].object),delete q[X];delete V[U.id]}}}function v(U){for(let B in n){let H=n[B],D=U.isInstancedMesh===!0?U.id:0,V=H[D];if(V!==void 0){for(let q in V){let X=V[q];for(let re in X)d(X[re].object),delete X[re];delete V[q]}delete H[D],Object.keys(H).length===0&&delete n[B]}}}function w(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:g,disableUnusedAttributes:T}}function am(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function om(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==dn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let v=C===an&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==rn&&C!==Mn&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Xe("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let m=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:y,maxSamples:S,samples:E}}function lm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new _n,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){let f=m.length!==0||u||n!==0||s;return s=u,n=m.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){t=d(m,u,0)},this.setState=function(m,u,f){let x=m.clippingPlanes,b=m.clipIntersection,g=m.clipShadows,h=i.get(m);if(!s||x===null||x.length===0||r&&!g)r?d(null):c();else{let T=r?0:n,R=T*4,y=h.clippingState||null;l.value=y,y=d(x,u,R,f);for(let S=0;S!==R;++S)y[S]=t[S];h.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,u,f,x){let b=m!==null?m.length:0,g=null;if(b!==0){if(g=l.value,x!==!0||g===null){let h=f+b*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<h)&&(g=new Float32Array(h));for(let R=0,y=f;R!==b;++R,y+=4)a.copy(m[R]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var Ps=4,cm=6,hm=20,um=256,mr=new Jn,yh=new it,Pl=null,Il=0,Ll=0,Dl=!1,dm=new z,qi=new z,Ci=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=dm}=r;Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Il,Ll),this._renderer.xr.enabled=Dl,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:an,format:dn,colorSpace:Wn,depthBuffer:!1},s=Mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fm(r)),this._blurMaterial=mm(r,e,t),this._ggxMaterial=pm(r,e,t)}return s}_compileMaterial(e){let t=new St(new sn,e);this._renderer.compile(t,mr)}_sceneToCubeUV(e,t,n,s,r){let l=new nn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,f=m.toneMapping;m.getClearColor(yh),m.toneMapping=Un,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new Nn,new Yn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,h=!1,T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,h=!0):(g.color.copy(yh),h=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[R],r.y,r.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[R]));let S=this._cubeSize;Cs(s,y*S,R>2?S:0,S,S),m.setRenderTarget(s),h&&m.render(b,l),m.render(e,l)}m.toneMapping=f,m.autoClear=u,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===wi||e.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,mr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),m=Math.sqrt(c*c-d*d),u=c*1.25,f=m*u,{_lodMax:x}=this,b=this._sizeLods[n],g=3*b*(n>x-Ps?n-x+Ps:0),h=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,Cs(r,g,h,3*b,2*b),s.setRenderTarget(r),s.render(o,mr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Cs(e,g,h,3*b,2*b),s.setRenderTarget(e),s.render(o,mr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],m=3*d*(s>this._lodMax-Ps?s-this._lodMax+Ps:0),u=4*(this._cubeSize-d);Cs(t,m,u,3*d,2*d),a.setRenderTarget(t),a.render(l,mr)}};function fm(i){let e=[],t=[],n=i,s=i-Ps+1+cm;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,u=6,f=3,x=new Float32Array(f*u*m),b=new Float32Array(f*u*m);for(let h=0;h<m;h++){let T=h%3*2/3-1,R=h>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(y,f*u*h);for(let S=0;S<u;S++){let E=d[S*2]*2-1,C=d[S*2+1]*2-1;h===0?qi.set(1,C,E):h===1?qi.set(-E,1,-C):h===2?qi.set(-E,C,1):h===3?qi.set(-1,C,-E):h===4?qi.set(-E,-1,C):qi.set(E,C,-1),qi.toArray(b,(h*u+S)*f)}}let g=new sn;g.setAttribute("position",new Tn(x,f)),g.setAttribute("outputDirection",new Tn(b,f)),t.push(new St(g,null)),n>Ps&&n--}return{lodMeshes:t,sizeLods:e}}function Mh(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pm(i,e,t){return new Jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:um,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uo(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function mm(i,e,t){return new Jt({name:"SphericalGaussianBlur",defines:{SAMPLES:hm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:uo(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function bh(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Sh(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function uo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var co=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ks(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nn(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Qn});r.uniforms.tEquirect.value=t;let a=new St(s,r),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Rt),new ga(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function gm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===_a||f===ya)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let b=new co(x.height);return b.fromEquirectangularTexture(i,u),e.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,x=f===_a||f===ya,b=f===wi||f===Wi;if(x||b){let g=t.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new Ci(i)),g=x?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let T=u.image;return x&&T&&T.height>0||b&&T&&l(T)?(n===null&&(n=new Ci(i)),g=x?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,f){return f===_a?u.mapping=wi:f===ya&&(u.mapping=Wi),u}function l(u){let f=0,x=6;for(let b=0;b<x;b++)u[b]!==void 0&&f++;return f===x}function c(u){let f=u.target;f.removeEventListener("dispose",c);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function xm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ki("WebGLRenderer: "+n+" extension not supported."),s}}}function vm(i,e,t,n){let s={},r=new WeakMap;function a(m){let u=m.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(m,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(m){let u=m.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(m){let u=[],f=m.index,x=m.attributes.position,b=0;if(x===void 0)return;if(f!==null){let T=f.array;b=f.version;for(let R=0,y=T.length;R<y;R+=3){let S=T[R+0],E=T[R+1],C=T[R+2];u.push(S,E,E,C,C,S)}}else{let T=x.array;b=x.version;for(let R=0,y=T.length/3-1;R<y;R+=3){let S=R+0,E=R+1,C=R+2;u.push(S,E,E,C,C,S)}}let g=new(x.count>=65535?Js:$s)(u,1);g.version=b;let h=r.get(m);h&&e.remove(h),r.set(m,g)}function d(m){let u=r.get(m);if(u){let f=m.index;f!==null&&u.version<f.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:d}}function _m(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*a),t.update(u,n,1)}function c(m,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,m*a,f),t.update(u,n,f))}function d(m,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,f);let b=0;for(let g=0;g<f;g++)b+=u[g];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function ym(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mm(i,e,t){let n=new WeakMap,s=new Mt;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0,u=n.get(o);if(u===void 0||u.count!==m){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],R=0;f===!0&&(R=1),x===!0&&(R=2),b===!0&&(R=3);let y=o.attributes.position.count*R,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*S*4*m),C=new Zs(E,y,S,m);C.type=Mn,C.needsUpdate=!0;let v=R*4;for(let N=0;N<m;N++){let U=g[N],B=h[N],H=T[N],D=y*S*4*N;for(let V=0;V<U.count;V++){let q=V*v;f===!0&&(s.fromBufferAttribute(U,V),E[D+q+0]=s.x,E[D+q+1]=s.y,E[D+q+2]=s.z,E[D+q+3]=0),x===!0&&(s.fromBufferAttribute(B,V),E[D+q+4]=s.x,E[D+q+5]=s.y,E[D+q+6]=s.z,E[D+q+7]=0),b===!0&&(s.fromBufferAttribute(H,V),E[D+q+8]=s.x,E[D+q+9]=s.y,E[D+q+10]=s.z,E[D+q+11]=H.itemSize===4?s.w:1)}}u={count:m,texture:C,size:new _e(y,S)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function bm(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,m=c.geometry,u=e.get(c,m);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var Sm={[hl]:"LINEAR_TONE_MAPPING",[ul]:"REINHARD_TONE_MAPPING",[dl]:"CINEON_TONE_MAPPING",[fl]:"ACES_FILMIC_TONE_MAPPING",[rr]:"AGX_TONE_MAPPING",[ml]:"NEUTRAL_TONE_MAPPING",[pl]:"CUSTOM_TONE_MAPPING"};function Em(i,e,t,n,s,r){let a=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new sn;c.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Nt([0,2,0,0,2,0],2));let d=new ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new St(c,d),u=new Jn(-1,1,1,-1,0,1),f=null,x=null,b=!1,g,h=null,T=[],R=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let E=0;E<T.length;E++){let C=T[E];C.setSize&&C.setSize(y,S)}},this.setEffects=function(y){T=y,R=T.length>0&&T[0].isRenderPass===!0;let S=a.width,E=a.height;T.length>0&&o===null&&(o=new Wt(S,E,{type:an,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(S,E,{type:an,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<T.length;C++){let v=T[C];v.setSize&&v.setSize(S,E)}},this.begin=function(y,S){if(b||y.toneMapping===Un&&T.length===0)return!1;if(h=S,S!==null){let E=S.width,C=S.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return R===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Un,!0},this.hasRenderPass=function(){return R},this.end=function(y,S){y.toneMapping=g,b=!0;let E=a,C=o;for(let v=0;v<T.length;v++){let w=T[v];w.enabled!==!1&&(w.render(y,C,E,S),w.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(f!==y.outputColorSpace||x!==y.toneMapping){f=y.outputColorSpace,x=y.toneMapping,d.defines={},dt.getTransfer(f)===_t&&(d.defines.SRGB_TRANSFER="");let v=Sm[x];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(h),y.render(m,u),h=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Gh=new fn,Fl=new Zn(1,1),Wh=new Zs,Xh=new jr,qh=new Ks,Eh=[],wh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Rh=new Float32Array(4);function Ls(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fo(i,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Am(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Rm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Cm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Rh.set(n),i.uniformMatrix2fv(this.addr,!1,Rh),qt(t,n)}}function Pm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),qt(t,n)}}function Im(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),qt(t,n)}}function Lm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function Fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fl.compareFunction=t.isReversedDepthBuffer()?ao:ro,r=Fl):r=Gh,t.setTexture2D(e||r,s)}function Hm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xh,s)}function Vm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qh,s)}function Gm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wh,s)}function Wm(i){switch(i){case 5126:return wm;case 35664:return Tm;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Pm;case 35676:return Im;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Nm;case 35669:case 35673:return Um;case 5125:return Fm;case 36294:return Om;case 36295:return Bm;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Xm(i,e){i.uniform1fv(this.addr,e)}function qm(i,e){let t=Ls(e,this.size,2);i.uniform2fv(this.addr,t)}function Ym(i,e){let t=Ls(e,this.size,3);i.uniform3fv(this.addr,t)}function Zm(i,e){let t=Ls(e,this.size,4);i.uniform4fv(this.addr,t)}function $m(i,e){let t=Ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jm(i,e){let t=Ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Km(i,e){let t=Ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qm(i,e){i.uniform1iv(this.addr,e)}function jm(i,e){i.uniform2iv(this.addr,e)}function e0(i,e){i.uniform3iv(this.addr,e)}function t0(i,e){i.uniform4iv(this.addr,e)}function n0(i,e){i.uniform1uiv(this.addr,e)}function i0(i,e){i.uniform2uiv(this.addr,e)}function s0(i,e){i.uniform3uiv(this.addr,e)}function r0(i,e){i.uniform4uiv(this.addr,e)}function a0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Fl:a=Gh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function o0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xh,r[a])}function l0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qh,r[a])}function c0(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wh,r[a])}function h0(i){switch(i){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return Zm;case 35674:return $m;case 35675:return Jm;case 35676:return Km;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}var Ol=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wm(t.type)}},Bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h0(t.type)}},zl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Nl=/(\w+)(\])?(\[|\.)?/g;function Ch(i,e){i.seq.push(e),i.map[e.id]=e}function u0(i,e,t){let n=i.name,s=n.length;for(Nl.lastIndex=0;;){let r=Nl.exec(n),a=Nl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ch(t,c===void 0?new Ol(o,i,e):new Bl(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new zl(o),Ch(t,m)),t=m}}}var Is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);u0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ph(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var d0=37297,f0=0;function p0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ih=new tt;function m0(i){dt._getMatrix(Ih,dt.workingColorSpace,i);let e=`mat3( ${Ih.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case qs:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+p0(i.getShaderSource(e),o)}else return r}function g0(i,e){let t=m0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var x0={[hl]:"Linear",[ul]:"Reinhard",[dl]:"Cineon",[fl]:"ACESFilmic",[rr]:"AgX",[ml]:"Neutral",[pl]:"Custom"};function v0(i,e){let t=x0[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lo=new z;function _0(){dt.getLuminanceCoefficients(lo);let i=lo.x.toFixed(4),e=lo.y.toFixed(4),t=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function M0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function b0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xr(i){return i!==""}function Dh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(i){return i.replace(S0,w0)}var E0=new Map;function w0(i,e){let t=rt[e];if(t===void 0){let n=E0.get(e);if(n!==void 0)t=rt[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return kl(t)}var T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(i){return i.replace(T0,A0)}function A0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var R0={[ir]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function C0(i){return R0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P0={[wi]:"ENVMAP_TYPE_CUBE",[Wi]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE_UV"};function I0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":P0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var L0={[Wi]:"ENVMAP_MODE_REFRACTION"};function D0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":L0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N0={[cl]:"ENVMAP_BLENDING_MULTIPLY",[jc]:"ENVMAP_BLENDING_MIX",[eh]:"ENVMAP_BLENDING_ADD"};function U0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":N0[i.combine]||"ENVMAP_BLENDING_NONE"}function F0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function O0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=C0(t),c=I0(t),d=D0(t),m=U0(t),u=F0(t),f=y0(t),x=M0(r),b=s.createProgram(),g,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(xr).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(xr).join(`
`),h.length>0&&(h+=`
`)):(g=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),h=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?rt.tonemapping_pars_fragment:"",t.toneMapping!==Un?v0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,g0("linearToOutputTexel",t.outputColorSpace),_0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=kl(a),a=Dh(a,t),a=Nh(a,t),o=kl(o),o=Dh(o,t),o=Nh(o,t),a=Uh(a),o=Uh(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let R=T+g+a,y=T+h+o,S=Ph(s,s.VERTEX_SHADER,R),E=Ph(s,s.FRAGMENT_SHADER,y);s.attachShader(b,S),s.attachShader(b,E),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(U){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(b)||"",H=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(E)||"",V=B.trim(),q=H.trim(),X=D.trim(),re=!0,Y=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,S,E);else{let Q=Lh(s,S,"vertex"),j=Lh(s,E,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+Q+`
`+j)}else V!==""?Xe("WebGLProgram: Program Info Log:",V):(q===""||X==="")&&(Y=!1);Y&&(U.diagnostics={runnable:re,programLog:V,vertexShader:{log:q,prefix:g},fragmentShader:{log:X,prefix:h}})}s.deleteShader(S),s.deleteShader(E),v=new Is(s,b),w=b0(s,b)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(b,d0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f0++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=S,this.fragmentShader=E,this}var B0=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vl(e),t.set(e,n)),n}},Vl=class{constructor(e){this.id=B0++,this.code=e,this.usedTimes=0}};function z0(i){return i===Ri||i===fr||i===pr}function k0(i,e,t,n,s,r){let a=new xs,o=new Hl,l=new Set,c=[],d=new Map,m=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,w,N,U,B,H){let D=U.fog,V=B.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,re=e.get(v.envMap||q,X),Y=re&&re.mapping===ar?re.image.height:null,Q=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Xe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let j=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Fe=j!==void 0?j.length:0,Ue=0;V.morphAttributes.position!==void 0&&(Ue=1),V.morphAttributes.normal!==void 0&&(Ue=2),V.morphAttributes.color!==void 0&&(Ue=3);let he,Le,Be,J;if(Q){let ut=ei[Q];he=ut.vertexShader,Le=ut.fragmentShader}else{he=v.vertexShader,Le=v.fragmentShader;let ut=o.getVertexShaderStage(v),ot=o.getFragmentShaderStage(v);o.update(v,ut,ot),Be=ut.id,J=ot.id}let ee=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Oe=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,Ze=!!v.map,mt=!!v.matcap,Ve=!!re,Qe=!!v.aoMap,pt=!!v.lightMap,qe=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,wt=!!v.displacementMap,At=!!v.emissiveMap,ft=!!v.metalnessMap,bt=!!v.roughnessMap,O=v.anisotropy>0,Ct=v.clearcoat>0,ct=v.dispersion>0,A=v.retroreflectivity>0,p=v.iridescence>0,k=v.sheen>0,G=v.transmission>0,Z=O&&!!v.anisotropyMap,ae=Ct&&!!v.clearcoatMap,fe=Ct&&!!v.clearcoatNormalMap,$=Ct&&!!v.clearcoatRoughnessMap,te=p&&!!v.iridescenceMap,ge=p&&!!v.iridescenceThicknessMap,Te=k&&!!v.sheenColorMap,me=k&&!!v.sheenRoughnessMap,pe=!!v.specularMap,De=!!v.specularColorMap,Ae=!!v.specularIntensityMap,$e=G&&!!v.transmissionMap,F=G&&!!v.thicknessMap,xe=!!v.gradientMap,K=!!v.alphaMap,de=v.alphaTest>0,ye=!!v.alphaHash,ie=!!v.extensions,Se=Un;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Se=i.toneMapping);let Ie={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:he,fragmentShader:Le,defines:v.defines,customVertexShaderID:Be,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ze,matcap:mt,envMap:Ve,envMapMode:Ve&&re.mapping,envMapCubeUVHeight:Y,aoMap:Qe,lightMap:pt,bumpMap:qe,normalMap:xt,displacementMap:wt,emissiveMap:At,normalMapObjectSpace:xt&&v.normalMapType===ih,normalMapTangentSpace:xt&&v.normalMapType===so,packedNormalMap:xt&&v.normalMapType===so&&z0(v.normalMap.format),metalnessMap:ft,roughnessMap:bt,anisotropy:O,anisotropyMap:Z,clearcoat:Ct,clearcoatMap:ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:$,dispersion:ct,retroreflection:A,iridescence:p,iridescenceMap:te,iridescenceThicknessMap:ge,sheen:k,sheenColorMap:Te,sheenRoughnessMap:me,specularMap:pe,specularColorMap:De,specularIntensityMap:Ae,transmission:G,transmissionMap:$e,thicknessMap:F,gradientMap:xe,opaque:v.transparent===!1&&v.blending===ws&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:de,alphaHash:ye,combine:v.combine,mapUv:Ze&&x(v.map.channel),aoMapUv:Qe&&x(v.aoMap.channel),lightMapUv:pt&&x(v.lightMap.channel),bumpMapUv:qe&&x(v.bumpMap.channel),normalMapUv:xt&&x(v.normalMap.channel),displacementMapUv:wt&&x(v.displacementMap.channel),emissiveMapUv:At&&x(v.emissiveMap.channel),metalnessMapUv:ft&&x(v.metalnessMap.channel),roughnessMapUv:bt&&x(v.roughnessMap.channel),anisotropyMapUv:Z&&x(v.anisotropyMap.channel),clearcoatMapUv:ae&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(v.sheenRoughnessMap.channel),specularMapUv:pe&&x(v.specularMap.channel),specularColorMapUv:De&&x(v.specularColorMap.channel),specularIntensityMapUv:Ae&&x(v.specularIntensityMap.channel),transmissionMapUv:$e&&x(v.transmissionMap.channel),thicknessMapUv:F&&x(v.thicknessMap.channel),alphaMapUv:K&&x(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xt||O),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Ze||K),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ee,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Ue,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Ze&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:At&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===Ot,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function g(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)w.push(N),w.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(h(w,v),T(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function h(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function T(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){let w=f[v.type],N;if(w){let U=ei[w];N=xh.clone(U.uniforms)}else N=v.uniforms;return N}function y(v,w){let N=d.get(w);return N!==void 0?++N.usedTimes:(N=new O0(i,w,v,s),c.push(N),d.set(w,N)),N}function S(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:R,acquireProgram:y,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:C}}function H0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function V0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,x,b,g,h){let T=i[e];return T===void 0?(T={id:u.id,object:u,geometry:f,material:x,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:h},i[e]=T):(T.id=u.id,T.object=u,T.geometry=f,T.material=x,T.materialVariant=a(u),T.groupOrder=b,T.renderOrder=u.renderOrder,T.z=g,T.group=h),e++,T}function l(u,f,x,b,g,h,T){T.reversedDepth===!0&&(g=-g);let R=o(u,f,x,b,g,h);x.transmission>0?n.push(R):x.transparent===!0?s.push(R):t.push(R)}function c(u,f,x,b,g,h){let T=o(u,f,x,b,g,h);x.transmission>0?n.unshift(T):x.transparent===!0?s.unshift(T):t.unshift(T)}function d(u,f){t.length>1&&t.sort(u||V0),n.length>1&&n.sort(f||Oh),s.length>1&&s.sort(f||Oh)}function m(){for(let u=e,f=i.length;u<f;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:d}}function G0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Bh,i.set(n,[a])):s>=r.length?(a=new Bh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function W0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new it};break;case"SpotLight":t={position:new z,direction:new z,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function X0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var q0=0;function Y0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z0(i){let e=new W0,t=X0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new yt,a=new yt;function o(c){let d=0,m=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,x=0,b=0,g=0,h=0,T=0,R=0,y=0,S=0,E=0,C=0,v=0,w=0,N=0;c.sort(Y0);for(let B=0,H=c.length;B<H;B++){let D=c[B],V=D.color,q=D.intensity,X=D.distance,re=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ri?re=D.shadow.map.texture:re=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=V.r*q,m+=V.g*q,u+=V.b*q;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],q);N++}else if(D.isSunLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,j=t.get(D);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[x]=j,n.sunShadowMap[x]=re;let Fe=Q.getViewportCount();for(let Ue=0;Ue<Fe;Ue++)n.sunShadowMatrix[b+Ue]=Q.getMatrix(Ue),n.sunShadowCascade[b+Ue]=Q._cascadeData[Ue];b+=Fe,x++}n.sun[f]=Y,f++}else if(D.isDirectionalLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,j=t.get(D);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=D.shadow.matrix,S++}n.directional[g]=Y,g++}else if(D.isSpotLight){let Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(V).multiplyScalar(q),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[T]=Y;let Q=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,Q.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[T]=Q.matrix,D.castShadow){let j=t.get(D);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[T]=j,n.spotShadowMap[T]=re,C++}T++}else if(D.isRectAreaLight){let Y=e.get(D);Y.color.copy(V).multiplyScalar(q),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[R]=Y,R++}else if(D.isPointLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let Q=D.shadow,j=t.get(D);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[h]=j,n.pointShadowMap[h]=re,n.pointShadowMatrix[h]=D.shadow.matrix,E++}n.point[h]=Y,h++}else if(D.isHemisphereLight){let Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(q),Y.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[y]=Y,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=u;let U=n.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==h||U.spotLength!==T||U.rectAreaLength!==R||U.hemiLength!==y||U.numSunShadows!==x||U.numDirectionalShadows!==S||U.numPointShadows!==E||U.numSpotShadows!==C||U.numSpotMaps!==v||U.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=g,n.spot.length=T,n.rectArea.length=R,n.point.length=h,n.hemi.length=y,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=N,U.sunLength=f,U.directionalLength=g,U.pointLength=h,U.spotLength=T,U.rectAreaLength=R,U.hemiLength=y,U.numSunShadows=x,U.numDirectionalShadows=S,U.numPointShadows=E,U.numSpotShadows=C,U.numSpotMaps=v,U.numLightProbes=N,n.version=q0++)}function l(c,d){let m=0,u=0,f=0,x=0,b=0,g=0,h=d.matrixWorldInverse;for(let T=0,R=c.length;T<R;T++){let y=c[T];if(y.isSunLight){let S=n.sun[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(h),m++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),u++}else if(y.isSpotLight){let S=n.spot[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),x++}else if(y.isRectAreaLight){let S=n.rectArea[b];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),a.identity(),r.copy(y.matrixWorld),r.premultiply(h),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),b++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),f++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:n}}function zh(i){let e=new Z0(i),t=[],n=[],s=[];function r(u){m.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}let m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new zh(i),e.set(s,[o])):r>=a.length?(o=new zh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var J0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
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
}`,Q0=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],j0=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],kh=new yt,gr=new z,Ul=new z;function eg(i,e,t){let n=new ys,s=new _e,r=new _e,a=new Mt,o=new na,l=new ia,c={},d=t.maxTextureSize,m={[Kn]:Ot,[Ot]:Kn,[un]:un},u=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:J0,fragmentShader:K0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new sn;x.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new St(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let h=this.type;this.render=function(E,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Fc&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);let w=i.getRenderTarget(),N=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Qn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=h!==this.type;H&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(V=>V.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,V=E.length;D<V;D++){let q=E[D],X=q.shadow;if(X===void 0){Xe("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let re=X.getFrameExtents();s.multiply(re),r.copy(X.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/re.x),s.x=r.x*re.x,X.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/re.y),s.y=r.y*re.y,X.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||H===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Es){if(q.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Wt(s.x,s.y,{format:Ri,type:an,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new Zn(s.x,s.y,Mn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Gn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ut,X.map.depthTexture.magFilter=Ut}else q.isPointLight?(X.map=new co(s.x),X.map.depthTexture=new ea(s.x,Fn)):(X.map=new Wt(s.x,s.y),X.map.depthTexture=new Zn(s.x,s.y,Fn)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Gn,this.type===ir?(X.map.depthTexture.compareFunction=Y?ao:ro,X.map.depthTexture.minFilter=Rt,X.map.depthTexture.magFilter=Rt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ut,X.map.depthTexture.magFilter=Ut);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,v);for(let j=0;j<Q;j++){let Fe=X.getCamera(j);if(q.isPointLight){let Ue=X.camera,he=X.matrix,Le=q.distance||Ue.far;Le!==Ue.far&&(Ue.far=Le,Ue.updateProjectionMatrix()),gr.setFromMatrixPosition(q.matrixWorld),Ue.position.copy(gr),Ul.copy(Ue.position),Ul.add(Q0[j]),Ue.up.copy(j0[j]),Ue.lookAt(Ul),Ue.updateMatrixWorld(),he.makeTranslation(-gr.x,-gr.y,-gr.z),kh.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse),X._frustum.setFromProjectionMatrix(kh,Ue.coordinateSystem,Ue.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,j),i.clear();else{j===0&&(i.setRenderTarget(X.map),i.clear());let Ue=X.getViewport(j);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),B.viewport(a)}n=X.getFrustum(j),y(C,v,Fe,q,this.type)}X.isPointLightShadow!==!0&&this.type===Es&&T(X,v),X.needsUpdate=!1}h=this.type,g.needsUpdate=!1,i.setRenderTarget(w,N,U)};function T(E,C){let v=e.update(b);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Wt(s.x,s.y,{format:Ri,type:an}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,v,u,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,v,f,b,null)}function R(E,C,v,w){let N=null,U=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)N=U;else if(N=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=N.uuid,H=C.uuid,D=c[B];D===void 0&&(D={},c[B]=D);let V=D[H];V===void 0&&(V=N.clone(),D[H]=V,C.addEventListener("dispose",S)),N=V}if(N.visible=C.visible,N.wireframe=C.wireframe,w===Es?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:m[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let B=i.properties.get(N);B.light=v}return N}function y(E,C,v,w,N){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Es)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let H=e.update(E),D=E.material;if(Array.isArray(D)){let V=H.groups;for(let q=0,X=V.length;q<X;q++){let re=V[q],Y=D[re.materialIndex];if(Y&&Y.visible){let Q=R(E,Y,w,N);E.onBeforeShadow(i,E,C,v,H,Q,re),i.renderBufferDirect(v,null,H,Q,E,re),E.onAfterShadow(i,E,C,v,H,Q,re)}}}else if(D.visible){let V=R(E,D,w,N);E.onBeforeShadow(i,E,C,v,H,V,null),i.renderBufferDirect(v,null,H,V,E,null),E.onAfterShadow(i,E,C,v,H,V,null)}}let B=E.children;for(let H=0,D=B.length;H<D;H++)y(B[H],C,v,w,N)}function S(E){E.target.removeEventListener("dispose",S);for(let v in c){let w=c[v],N=E.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function tg(i,e){function t(){let F=!1,xe=new Mt,K=null,de=new Mt(0,0,0,0);return{setMask:function(ye){K!==ye&&!F&&(i.colorMask(ye,ye,ye,ye),K=ye)},setLocked:function(ye){F=ye},setClear:function(ye,ie,Se,Ie,ut){ut===!0&&(ye*=Ie,ie*=Ie,Se*=Ie),xe.set(ye,ie,Se,Ie),de.equals(xe)===!1&&(i.clearColor(ye,ie,Se,Ie),de.copy(xe))},reset:function(){F=!1,K=null,de.set(-1,0,0,0)}}}function n(){let F=!1,xe=!1,K=null,de=null,ye=null;return{setReversed:function(ie){if(xe!==ie){let Se=e.get("EXT_clip_control");ie?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),xe=ie;let Ie=ye;ye=null,this.setClear(Ie)}},getReversed:function(){return xe},setTest:function(ie){ie?ee(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(ie){K!==ie&&!F&&(i.depthMask(ie),K=ie)},setFunc:function(ie){if(xe&&(ie=mh[ie]),de!==ie){switch(ie){case Hr:i.depthFunc(i.NEVER);break;case Vr:i.depthFunc(i.ALWAYS);break;case Gr:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Wr:i.depthFunc(i.EQUAL);break;case Xr:i.depthFunc(i.GEQUAL);break;case qr:i.depthFunc(i.GREATER);break;case Yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=ie}},setLocked:function(ie){F=ie},setClear:function(ie){ye!==ie&&(ye=ie,xe&&(ie=1-ie),i.clearDepth(ie))},reset:function(){F=!1,K=null,de=null,ye=null,xe=!1}}}function s(){let F=!1,xe=null,K=null,de=null,ye=null,ie=null,Se=null,Ie=null,ut=null;return{setTest:function(ot){F||(ot?ee(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(ot){xe!==ot&&!F&&(i.stencilMask(ot),xe=ot)},setFunc:function(ot,Yt,Lt){(K!==ot||de!==Yt||ye!==Lt)&&(i.stencilFunc(ot,Yt,Lt),K=ot,de=Yt,ye=Lt)},setOp:function(ot,Yt,Lt){(ie!==ot||Se!==Yt||Ie!==Lt)&&(i.stencilOp(ot,Yt,Lt),ie=ot,Se=Yt,Ie=Lt)},setLocked:function(ot){F=ot},setClear:function(ot){ut!==ot&&(i.clearStencil(ot),ut=ot)},reset:function(){F=!1,xe=null,K=null,de=null,ye=null,ie=null,Se=null,Ie=null,ut=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},m={},u={},f=new WeakMap,x=[],b=null,g=!1,h=null,T=null,R=null,y=null,S=null,E=null,C=null,v=new it(0,0,0),w=0,N=!1,U=null,B=null,H=null,D=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,re=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=re>=1):Y.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=re>=2);let Q=null,j={},Fe=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),he=new Mt().fromArray(Fe),Le=new Mt().fromArray(Ue);function Be(F,xe,K,de){let ye=new Uint8Array(4),ie=i.createTexture();i.bindTexture(F,ie),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<K;Se++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(xe+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ie}let J={};J[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(ds),qe(!1),xt(il),ee(i.CULL_FACE),Qe(Qn);function ee(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function Ee(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function Oe(F,xe){return u[F]!==xe?(i.bindFramebuffer(F,xe),u[F]=xe,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xe),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Me(F,xe){let K=x,de=!1;if(F){K=f.get(xe),K===void 0&&(K=[],f.set(xe,K));let ye=F.textures;if(K.length!==ye.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Se=ye.length;ie<Se;ie++)K[ie]=i.COLOR_ATTACHMENT0+ie;K.length=ye.length,de=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,de=!0);de&&i.drawBuffers(K)}function Ze(F){return b!==F?(i.useProgram(F),b=F,!0):!1}let mt={[ci]:i.FUNC_ADD,[Oc]:i.FUNC_SUBTRACT,[Bc]:i.FUNC_REVERSE_SUBTRACT};mt[zc]=i.MIN,mt[kc]=i.MAX;let Ve={[Hc]:i.ZERO,[sr]:i.ONE,[Vc]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[Zc]:i.SRC_ALPHA_SATURATE,[qc]:i.DST_COLOR,[Wc]:i.DST_ALPHA,[Gc]:i.ONE_MINUS_SRC_COLOR,[ll]:i.ONE_MINUS_SRC_ALPHA,[Yc]:i.ONE_MINUS_DST_COLOR,[Xc]:i.ONE_MINUS_DST_ALPHA,[$c]:i.CONSTANT_COLOR,[Jc]:i.ONE_MINUS_CONSTANT_COLOR,[Kc]:i.CONSTANT_ALPHA,[Qc]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(F,xe,K,de,ye,ie,Se,Ie,ut,ot){if(F===Qn){g===!0&&(Ee(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),F!==va){if(F!==h||ot!==N){if((T!==ci||S!==ci)&&(i.blendEquation(i.FUNC_ADD),T=ci,S=ci),ot)switch(F){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",F);break}else switch(F){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rl:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case al:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",F);break}R=null,y=null,E=null,C=null,v.set(0,0,0),w=0,h=F,N=ot}return}ye=ye||xe,ie=ie||K,Se=Se||de,(xe!==T||ye!==S)&&(i.blendEquationSeparate(mt[xe],mt[ye]),T=xe,S=ye),(K!==R||de!==y||ie!==E||Se!==C)&&(i.blendFuncSeparate(Ve[K],Ve[de],Ve[ie],Ve[Se]),R=K,y=de,E=ie,C=Se),(Ie.equals(v)===!1||ut!==w)&&(i.blendColor(Ie.r,Ie.g,Ie.b,ut),v.copy(Ie),w=ut),h=F,N=!1}function pt(F,xe){F.side===un?Ee(i.CULL_FACE):ee(i.CULL_FACE);let K=F.side===Ot;xe&&(K=!K),qe(K),F.blending===ws&&F.transparent===!1?Qe(Qn):Qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let de=F.stencilWrite;o.setTest(de),de&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),At(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){U!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),U=F)}function xt(F){F!==Nc?(ee(i.CULL_FACE),F!==B&&(F===il?i.cullFace(i.BACK):F===Uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),B=F}function wt(F){F!==H&&(X&&i.lineWidth(F),H=F)}function At(F,xe,K){F?(ee(i.POLYGON_OFFSET_FILL),(D!==xe||V!==K)&&(D=xe,V=K,a.getReversed()&&(xe=-xe),i.polygonOffset(xe,K))):Ee(i.POLYGON_OFFSET_FILL)}function ft(F){F?ee(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function bt(F){F===void 0&&(F=i.TEXTURE0+q-1),Q!==F&&(i.activeTexture(F),Q=F)}function O(F,xe,K){K===void 0&&(Q===null?K=i.TEXTURE0+q-1:K=Q);let de=j[K];de===void 0&&(de={type:void 0,texture:void 0},j[K]=de),(de.type!==F||de.texture!==xe)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(F,xe||J[F]),de.type=F,de.texture=xe)}function Ct(){let F=j[Q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ct(){try{i.compressedTexImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function p(){try{i.texSubImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function k(){try{i.texSubImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function ae(){try{i.texStorage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function fe(){try{i.texStorage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function $(){try{i.texImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function te(){try{i.texImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function ge(F){return m[F]!==void 0?m[F]:i.getParameter(F)}function Te(F,xe){m[F]!==xe&&(i.pixelStorei(F,xe),m[F]=xe)}function me(F){he.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),he.copy(F))}function pe(F){Le.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Le.copy(F))}function De(F,xe){let K=c.get(xe);K===void 0&&(K=new WeakMap,c.set(xe,K));let de=K.get(F);de===void 0&&(de=i.getUniformBlockIndex(xe,F.name),K.set(F,de))}function Ae(F,xe){let de=c.get(xe).get(F);l.get(xe)!==de&&(i.uniformBlockBinding(xe,de,F.__bindingPointIndex),l.set(xe,de))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},Q=null,j={},u={},f=new WeakMap,x=[],b=null,g=!1,h=null,T=null,R=null,y=null,S=null,E=null,C=null,v=new it(0,0,0),w=0,N=!1,U=null,B=null,H=null,D=null,V=null,he.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:Ee,bindFramebuffer:Oe,drawBuffers:Me,useProgram:Ze,setBlending:Qe,setMaterial:pt,setFlipSided:qe,setCullFace:xt,setLineWidth:wt,setPolygonOffset:At,setScissorTest:ft,activeTexture:bt,bindTexture:O,unbindTexture:Ct,compressedTexImage2D:ct,compressedTexImage3D:A,texImage2D:$,texImage3D:te,pixelStorei:Te,getParameter:ge,updateUBOMapping:De,uniformBlockBinding:Ae,texStorage2D:ae,texStorage3D:fe,texSubImage2D:p,texSubImage3D:k,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:me,viewport:pe,reset:$e}}function ng(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,d=new WeakMap,m=new Set,u,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,p){return x?new OffscreenCanvas(A,p):Ys("canvas")}function g(A,p,k){let G=1,Z=ct(A);if((Z.width>k||Z.height>k)&&(G=k/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ae=Math.floor(G*Z.width),fe=Math.floor(G*Z.height);u===void 0&&(u=b(ae,fe));let $=p?b(ae,fe):u;return $.width=ae,$.height=fe,$.getContext("2d").drawImage(A,0,0,ae,fe),Xe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ae+"x"+fe+")."),$}else return"data"in A&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function h(A){return A.generateMipmaps}function T(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,p,k,G,Z,ae=!1){if(A!==null){if(i[A]!==void 0)return i[A];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;G&&(fe=e.get("EXT_texture_norm16"),fe||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=p;if(p===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8),k===i.UNSIGNED_SHORT&&fe&&($=fe.R16_EXT),k===i.SHORT&&fe&&($=fe.R16_SNORM_EXT)),p===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),p===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8),k===i.UNSIGNED_SHORT&&fe&&($=fe.RG16_EXT),k===i.SHORT&&fe&&($=fe.RG16_SNORM_EXT)),p===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),p===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),p===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),p===i.RGB&&(k===i.UNSIGNED_SHORT&&fe&&($=fe.RGB16_EXT),k===i.SHORT&&fe&&($=fe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),p===i.RGBA){let te=ae?qs:dt.getTransfer(Z);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=te===_t?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&fe&&($=fe.RGBA16_EXT),k===i.SHORT&&fe&&($=fe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(A,p){let k;return A?p===null||p===Fn||p===As?k=i.DEPTH24_STENCIL8:p===Mn?k=i.DEPTH32F_STENCIL8:p===Ts&&(k=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Fn||p===As?k=i.DEPTH_COMPONENT24:p===Mn?k=i.DEPTH_COMPONENT32F:p===Ts&&(k=i.DEPTH_COMPONENT16),k}function E(A,p){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==Rt?Math.log2(Math.max(p.width,p.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?p.mipmaps.length:1}function C(A){let p=A.target;p.removeEventListener("dispose",C),w(p),p.isVideoTexture&&d.delete(p),p.isHTMLTexture&&m.delete(p)}function v(A){let p=A.target;p.removeEventListener("dispose",v),U(p)}function w(A){let p=n.get(A);if(p.__webglInit===void 0)return;let k=A.source,G=f.get(k);if(G){let Z=G[p.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&N(A),Object.keys(G).length===0&&f.delete(k)}n.remove(A)}function N(A){let p=n.get(A);i.deleteTexture(p.__webglTexture);let k=A.source,G=f.get(k);delete G[p.__cacheKey],a.memory.textures--}function U(A){let p=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(p.__webglFramebuffer[G]))for(let Z=0;Z<p.__webglFramebuffer[G].length;Z++)i.deleteFramebuffer(p.__webglFramebuffer[G][Z]);else i.deleteFramebuffer(p.__webglFramebuffer[G]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[G])}else{if(Array.isArray(p.__webglFramebuffer))for(let G=0;G<p.__webglFramebuffer.length;G++)i.deleteFramebuffer(p.__webglFramebuffer[G]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let G=0;G<p.__webglColorRenderbuffer.length;G++)p.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[G]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let k=A.textures;for(let G=0,Z=k.length;G<Z;G++){let ae=n.get(k[G]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(k[G])}n.remove(A)}let B=0;function H(){B=0}function D(){return B}function V(A){B=A}function q(){let A=B;return A>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function X(A){let p=[];return p.push(A.wrapS),p.push(A.wrapT),p.push(A.wrapR||0),p.push(A.magFilter),p.push(A.minFilter),p.push(A.anisotropy),p.push(A.internalFormat),p.push(A.format),p.push(A.type),p.push(A.generateMipmaps),p.push(A.premultiplyAlpha),p.push(A.flipY),p.push(A.unpackAlignment),p.push(A.colorSpace),p.join()}function re(A,p){let k=n.get(A);if(A.isVideoTexture&&O(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let G=A.image;if(G===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(k,A,p);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+p)}function Y(A,p){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Ee(k,A,p);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+p)}function Q(A,p){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Ee(k,A,p);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+p)}function j(A,p){let k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Oe(k,A,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+p)}let Fe={[Zr]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},Ue={[Ut]:i.NEAREST,[th]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},he={[rh]:i.NEVER,[hh]:i.ALWAYS,[ah]:i.LESS,[ro]:i.LEQUAL,[oh]:i.EQUAL,[ao]:i.GEQUAL,[lh]:i.GREATER,[ch]:i.NOTEQUAL};function Le(A,p){if(p.type===Mn&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===Rt||p.magFilter===Ma||p.magFilter===or||p.magFilter===Ti||p.minFilter===Rt||p.minFilter===Ma||p.minFilter===or||p.minFilter===Ti)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Fe[p.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Fe[p.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Fe[p.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ue[p.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ue[p.minFilter]),p.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,he[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Ut||p.minFilter!==or&&p.minFilter!==Ti||p.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function Be(A,p){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,p.addEventListener("dispose",C));let G=p.source,Z=f.get(G);Z===void 0&&(Z={},f.set(G,Z));let ae=X(p);if(ae!==A.__cacheKey){Z[ae]===void 0&&(Z[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[ae].usedTimes++;let fe=Z[A.__cacheKey];fe!==void 0&&(Z[A.__cacheKey].usedTimes--,fe.usedTimes===0&&N(p)),A.__cacheKey=ae,A.__webglTexture=Z[ae].texture}return k}function J(A,p,k){return Math.floor(Math.floor(A/k)/p)}function ee(A,p,k,G){let ae=A.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,k,G,p.data);else{ae.sort((Te,me)=>Te.start-me.start);let fe=0;for(let Te=1;Te<ae.length;Te++){let me=ae[fe],pe=ae[Te],De=me.start+me.count,Ae=J(pe.start,p.width,4),$e=J(me.start,p.width,4);pe.start<=De+1&&Ae===$e&&J(pe.start+pe.count-1,p.width,4)===Ae?me.count=Math.max(me.count,pe.start+pe.count-me.start):(++fe,ae[fe]=pe)}ae.length=fe+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let Te=0,me=ae.length;Te<me;Te++){let pe=ae[Te],De=Math.floor(pe.start/4),Ae=Math.ceil(pe.count/4),$e=De%p.width,F=Math.floor(De/p.width),xe=Ae,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,$e,F,xe,K,k,G,p.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function Ee(A,p,k){let G=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(G=i.TEXTURE_3D);let Z=Be(A,p),ae=p.source;t.bindTexture(G,A.__webglTexture,i.TEXTURE0+k);let fe=n.get(ae);if(ae.version!==fe.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let K=dt.getPrimaries(dt.workingColorSpace),de=p.colorSpace===hi?null:dt.getPrimaries(p.colorSpace),ye=p.colorSpace===hi||K===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment);let te=g(p.image,!1,s.maxTextureSize);te=Ct(p,te);let ge=r.convert(p.format,p.colorSpace),Te=r.convert(p.type),me=y(p.internalFormat,ge,Te,p.normalized,p.colorSpace,p.isVideoTexture);Le(G,p);let pe,De=p.mipmaps,Ae=p.isVideoTexture!==!0,$e=fe.__version===void 0||Z===!0,F=ae.dataReady,xe=E(p,te);if(p.isDepthTexture)me=S(p.format===Ai,p.type),$e&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,me,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,me,te.width,te.height,0,ge,Te,null));else if(p.isDataTexture)if(De.length>0){Ae&&$e&&t.texStorage2D(i.TEXTURE_2D,xe,me,De[0].width,De[0].height);for(let K=0,de=De.length;K<de;K++)pe=De[K],Ae?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,pe.width,pe.height,ge,Te,pe.data):t.texImage2D(i.TEXTURE_2D,K,me,pe.width,pe.height,0,ge,Te,pe.data);p.generateMipmaps=!1}else Ae?($e&&t.texStorage2D(i.TEXTURE_2D,xe,me,te.width,te.height),F&&ee(p,te,ge,Te)):t.texImage2D(i.TEXTURE_2D,0,me,te.width,te.height,0,ge,Te,te.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Ae&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,me,De[0].width,De[0].height,te.depth);for(let K=0,de=De.length;K<de;K++)if(pe=De[K],p.format!==dn)if(ge!==null)if(Ae){if(F)if(p.layerUpdates.size>0){let ye=Cl(pe.width,pe.height,p.format,p.type);for(let ie of p.layerUpdates){let Se=pe.data.subarray(ie*ye/pe.data.BYTES_PER_ELEMENT,(ie+1)*ye/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ie,pe.width,pe.height,1,ge,Se)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,pe.width,pe.height,te.depth,ge,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,me,pe.width,pe.height,te.depth,0,pe.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,pe.width,pe.height,te.depth,ge,Te,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,me,pe.width,pe.height,te.depth,0,ge,Te,pe.data);p.layerUpdates.size>0&&p.clearLayerUpdates()}else{Ae&&$e&&t.texStorage2D(i.TEXTURE_2D,xe,me,De[0].width,De[0].height);for(let K=0,de=De.length;K<de;K++)pe=De[K],p.format!==dn?ge!==null?Ae?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,K,me,pe.width,pe.height,0,pe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,pe.width,pe.height,ge,Te,pe.data):t.texImage2D(i.TEXTURE_2D,K,me,pe.width,pe.height,0,ge,Te,pe.data)}else if(p.isDataArrayTexture)if(Ae){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,me,te.width,te.height,te.depth),F)if(p.layerUpdates.size>0){let K=Cl(te.width,te.height,p.format,p.type);for(let de of p.layerUpdates){let ye=te.data.subarray(de*K/te.data.BYTES_PER_ELEMENT,(de+1)*K/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,te.width,te.height,1,ge,Te,ye)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Te,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,te.width,te.height,te.depth,0,ge,Te,te.data);else if(p.isData3DTexture)Ae?($e&&t.texStorage3D(i.TEXTURE_3D,xe,me,te.width,te.height,te.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Te,te.data)):t.texImage3D(i.TEXTURE_3D,0,me,te.width,te.height,te.depth,0,ge,Te,te.data);else if(p.isFramebufferTexture){if($e)if(Ae)t.texStorage2D(i.TEXTURE_2D,xe,me,te.width,te.height);else{let K=te.width,de=te.height;for(let ye=0;ye<xe;ye++)t.texImage2D(i.TEXTURE_2D,ye,me,K,de,0,ge,Te,null),K>>=1,de>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),te.parentNode!==K){K.appendChild(te),m.add(p),K.onpaint=de=>{let ye=de.changedElements;for(let ie of m)ye.includes(ie.image)&&(ie.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let ye=i.RGBA,ie=i.RGBA,Se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,ie,Se,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ae&&$e){let K=ct(De[0]);t.texStorage2D(i.TEXTURE_2D,xe,me,K.width,K.height)}for(let K=0,de=De.length;K<de;K++)pe=De[K],Ae?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ge,Te,pe):t.texImage2D(i.TEXTURE_2D,K,me,ge,Te,pe);p.generateMipmaps=!1}else if(Ae){if($e){let K=ct(te);t.texStorage2D(i.TEXTURE_2D,xe,me,K.width,K.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Te,te)}else t.texImage2D(i.TEXTURE_2D,0,me,ge,Te,te);h(p)&&T(G),fe.__version=ae.version,p.onUpdate&&p.onUpdate(p)}A.__version=p.version}function Oe(A,p,k){if(p.image.length!==6)return;let G=Be(A,p),Z=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let ae=n.get(Z);if(Z.version!==ae.__version||G===!0){t.activeTexture(i.TEXTURE0+k);let fe=dt.getPrimaries(dt.workingColorSpace),$=p.colorSpace===hi?null:dt.getPrimaries(p.colorSpace),te=p.colorSpace===hi||fe===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ge=p.isCompressedTexture||p.image[0].isCompressedTexture,Te=p.image[0]&&p.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!ge&&!Te?me[ie]=g(p.image[ie],!0,s.maxCubemapSize):me[ie]=Te?p.image[ie].image:p.image[ie],me[ie]=Ct(p,me[ie]);let pe=me[0],De=r.convert(p.format,p.colorSpace),Ae=r.convert(p.type),$e=y(p.internalFormat,De,Ae,p.normalized,p.colorSpace),F=p.isVideoTexture!==!0,xe=ae.__version===void 0||G===!0,K=Z.dataReady,de=E(p,pe);Le(i.TEXTURE_CUBE_MAP,p);let ye;if(ge){F&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,$e,pe.width,pe.height);for(let ie=0;ie<6;ie++){ye=me[ie].mipmaps;for(let Se=0;Se<ye.length;Se++){let Ie=ye[Se];p.format!==dn?De!==null?F?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,Ie.width,Ie.height,De,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,$e,Ie.width,Ie.height,0,Ie.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,Ie.width,Ie.height,De,Ae,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,$e,Ie.width,Ie.height,0,De,Ae,Ie.data)}}}else{if(ye=p.mipmaps,F&&xe){ye.length>0&&de++;let ie=ct(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,$e,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Te){F?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,De,Ae,me[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,me[ie].width,me[ie].height,0,De,Ae,me[ie].data);for(let Se=0;Se<ye.length;Se++){let ut=ye[Se].image[ie].image;F?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,ut.width,ut.height,De,Ae,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,$e,ut.width,ut.height,0,De,Ae,ut.data)}}else{F?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,De,Ae,me[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,De,Ae,me[ie]);for(let Se=0;Se<ye.length;Se++){let Ie=ye[Se];F?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,De,Ae,Ie.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,$e,De,Ae,Ie.image[ie])}}}h(p)&&T(i.TEXTURE_CUBE_MAP),ae.__version=Z.version,p.onUpdate&&p.onUpdate(p)}A.__version=p.version}function Me(A,p,k,G,Z,ae){let fe=r.convert(k.format,k.colorSpace),$=r.convert(k.type),te=y(k.internalFormat,fe,$,k.normalized,k.colorSpace),ge=n.get(p),Te=n.get(k);if(Te.__renderTarget=p,!ge.__hasExternalTextures){let me=Math.max(1,p.width>>ae),pe=Math.max(1,p.height>>ae);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ae,te,me,pe,p.depth,0,fe,$,null):t.texImage2D(Z,ae,te,me,pe,0,fe,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),bt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Z,Te.__webglTexture,0,ft(p)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Z,Te.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(A,p,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),p.depthBuffer){let G=p.depthTexture,Z=G&&G.isDepthTexture?G.type:null,ae=S(p.stencilBuffer,Z),fe=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;bt(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(p),ae,p.width,p.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(p),ae,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,ae,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,A)}else{let G=p.textures;for(let Z=0;Z<G.length;Z++){let ae=G[Z],fe=r.convert(ae.format,ae.colorSpace),$=r.convert(ae.type),te=y(ae.internalFormat,fe,$,ae.normalized,ae.colorSpace);bt(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(p),te,p.width,p.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(p),te,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,te,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(A,p,k){let G=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(p.depthTexture);if(Z.__renderTarget=p,(!Z.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,p.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Le(i.TEXTURE_CUBE_MAP,p.depthTexture);let ge=r.convert(p.depthTexture.format),Te=r.convert(p.depthTexture.type),me;p.depthTexture.format===Gn?me=i.DEPTH_COMPONENT24:p.depthTexture.format===Ai&&(me=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,me,p.width,p.height,0,ge,Te,null)}}else re(p.depthTexture,0);let ae=Z.__webglTexture,fe=ft(p),$=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,te=p.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(p.depthTexture.format===Gn)bt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,ae,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,te,$,ae,0);else if(p.depthTexture.format===Ai)bt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,ae,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,te,$,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(A){let p=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==A.depthTexture){let G=A.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),G){let Z=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),p.__depthDisposeCallback=Z}p.__boundDepthTexture=G}if(A.depthTexture&&!p.__autoAllocateDepthBuffer)if(k)for(let G=0;G<6;G++)mt(p.__webglFramebuffer[G],A,G);else{let G=A.texture.mipmaps;G&&G.length>0?mt(p.__webglFramebuffer[0],A,0):mt(p.__webglFramebuffer,A,0)}else if(k){p.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[G]),p.__webglDepthbuffer[G]===void 0)p.__webglDepthbuffer[G]=i.createRenderbuffer(),Ze(p.__webglDepthbuffer[G],A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=p.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ae)}}else{let G=A.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),Ze(p.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(A,p,k){let G=n.get(A);p!==void 0&&Me(G.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ve(A)}function pt(A){let p=A.texture,k=n.get(A),G=n.get(p);A.addEventListener("dispose",v);let Z=A.textures,ae=A.isWebGLCubeRenderTarget===!0,fe=Z.length>1;if(fe||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=p.version,a.memory.textures++),ae){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(p.mipmaps&&p.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let te=0;te<p.mipmaps.length;te++)k.__webglFramebuffer[$][te]=i.createFramebuffer()}else k.__webglFramebuffer[$]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<p.mipmaps.length;$++)k.__webglFramebuffer[$]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(fe)for(let $=0,te=Z.length;$<te;$++){let ge=n.get(Z[$]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&bt(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<Z.length;$++){let te=Z[$];k.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let ge=r.convert(te.format,te.colorSpace),Te=r.convert(te.type),me=y(te.internalFormat,ge,Te,te.normalized,te.colorSpace,A.isXRRenderTarget===!0),pe=ft(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,k.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Le(i.TEXTURE_CUBE_MAP,p);for(let $=0;$<6;$++)if(p.mipmaps&&p.mipmaps.length>0)for(let te=0;te<p.mipmaps.length;te++)Me(k.__webglFramebuffer[$][te],A,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,te);else Me(k.__webglFramebuffer[$],A,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);h(p)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let $=0,te=Z.length;$<te;$++){let ge=Z[$],Te=n.get(ge),me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Te.__webglTexture),Le(me,ge),Me(k.__webglFramebuffer,A,ge,i.COLOR_ATTACHMENT0+$,me,0),h(ge)&&T(me)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,G.__webglTexture),Le($,p),p.mipmaps&&p.mipmaps.length>0)for(let te=0;te<p.mipmaps.length;te++)Me(k.__webglFramebuffer[te],A,p,i.COLOR_ATTACHMENT0,$,te);else Me(k.__webglFramebuffer,A,p,i.COLOR_ATTACHMENT0,$,0);h(p)&&T($),t.unbindTexture()}A.depthBuffer&&Ve(A)}function qe(A){let p=A.textures;for(let k=0,G=p.length;k<G;k++){let Z=p[k];if(h(Z)){let ae=R(A),fe=n.get(Z).__webglTexture;t.bindTexture(ae,fe),T(ae),t.unbindTexture()}}}let xt=[],wt=[];function At(A){if(A.samples>0){if(bt(A)===!1){let p=A.textures,k=A.width,G=A.height,Z=i.COLOR_BUFFER_BIT,ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(A),$=p.length>1;if($)for(let ge=0;ge<p.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let te=A.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<p.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);let Te=n.get(p[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,k,G,0,0,k,G,Z,i.NEAREST),l===!0&&(xt.length=0,wt.length=0,xt.push(i.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(xt.push(ae),wt.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ge=0;ge<p.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);let Te=n.get(p[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let p=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function ft(A){return Math.min(s.maxSamples,A.samples)}function bt(A){let p=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function O(A){let p=a.render.frame;d.get(A)!==p&&(d.set(A,p),A.update())}function Ct(A,p){let k=A.colorSpace,G=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Wn&&k!==hi&&(dt.getTransfer(k)===_t?(G!==dn||Z!==rn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",k)),p}function ct(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=H,this.getTextureUnits=D,this.setTextureUnits=V,this.setTexture2D=re,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=Qe,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ig(i,e){function t(n,s=hi){let r,a=dt.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ea)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xl)return i.BYTE;if(n===vl)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===ba)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===an)return i.HALF_FLOAT;if(n===Ml)return i.ALPHA;if(n===bl)return i.RGB;if(n===dn)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===lr)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===cr||n===hr||n===ur||n===dr)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Pa||n===Ia)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Da||n===Na||n===Ua||n===Fa||n===fr||n===Oa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Da)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ua)return r.COMPRESSED_R11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fr)return r.COMPRESSED_RG11_EAC;if(n===Oa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===ja||n===eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===to||n===no||n===pr||n===io)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===to)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`,Gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jt({vertexShader:sg,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wl=class extends Xn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,m=null,u=null,f=null,x=null,b=typeof XRWebGLBinding<"u",g=new Gl,h={},T=t.getContextAttributes(),R=null,y=null,S=[],E=[],C=new _e,v=null,w=null,N=new nn;N.viewport=new Mt;let U=new nn;U.viewport=new Mt;let B=[N,U],H=new xa,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=S[J];return ee===void 0&&(ee=new vs,S[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=S[J];return ee===void 0&&(ee=new vs,S[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=S[J];return ee===void 0&&(ee=new vs,S[J]=ee),ee.getHandSpace()};function q(J){let ee=E.indexOf(J.inputSource);if(ee===-1)return;let Ee=S[ee];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,c||a),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",re);for(let J=0;J<S.length;J++){let ee=E[J];ee!==null&&(E[J]=null,S[J].disconnect(ee))}D=null,V=null,g.reset();for(let J in h)delete h[J];if(e.setRenderTarget(R),f=null,u=null,m=null,s=null,y=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",re),T.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Oe=null,Me=null;T.depth&&(Me=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=T.stencil?Ai:Gn,Oe=T.stencil?As:Fn);let Ze={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(Ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Wt(u.textureWidth,u.textureHeight,{format:dn,type:rn,depthTexture:new Zn(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ee={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Wt(f.framebufferWidth,f.framebufferHeight,{format:dn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(J){for(let ee=0;ee<J.removed.length;ee++){let Ee=J.removed[ee],Oe=E.indexOf(Ee);Oe>=0&&(E[Oe]=null,S[Oe].disconnect(Ee))}for(let ee=0;ee<J.added.length;ee++){let Ee=J.added[ee],Oe=E.indexOf(Ee);if(Oe===-1){for(let Ze=0;Ze<S.length;Ze++)if(Ze>=E.length){E.push(Ee),Oe=Ze;break}else if(E[Ze]===null){E[Ze]=Ee,Oe=Ze;break}if(Oe===-1)break}let Me=S[Oe];Me&&Me.connect(Ee)}}let Y=new z,Q=new z;function j(J,ee,Ee){Y.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(Ee.matrixWorld);let Oe=Y.distanceTo(Q),Me=ee.projectionMatrix.elements,Ze=Ee.projectionMatrix.elements,mt=Me[14]/(Me[10]-1),Ve=Me[14]/(Me[10]+1),Qe=(Me[9]+1)/Me[5],pt=(Me[9]-1)/Me[5],qe=(Me[8]-1)/Me[0],xt=(Ze[8]+1)/Ze[0],wt=mt*qe,At=mt*xt,ft=Oe/(-qe+xt),bt=ft*-qe;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(bt),J.translateZ(ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Me[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let O=mt+ft,Ct=Ve+ft,ct=wt-bt,A=At+(Oe-bt),p=Qe*Ve/Ct*O,k=pt*Ve/Ct*O;J.projectionMatrix.makePerspective(ct,A,p,k,O,Ct),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Fe(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ee=J.near,Ee=J.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),H.near=U.near=N.near=ee,H.far=U.far=N.far=Ee,(D!==H.near||V!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,V=H.far),H.layers.mask=J.layers.mask|6,N.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Oe=J.parent,Me=H.cameras;Fe(H,Oe);for(let Ze=0;Ze<Me.length;Ze++)Fe(Me[Ze],Oe);Me.length===2?j(H,N,U):H.projectionMatrix.copy(N.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),Ue(J,H,Oe)};function Ue(J,ee,Ee){Ee===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ms*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(J){return h[J]};let he=null;function Le(J,ee){if(d=ee.getViewerPose(c||a),x=ee,d!==null){let Ee=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Oe=!1;Ee.length!==H.cameras.length&&(H.cameras.length=0,Oe=!0);for(let Ve=0;Ve<Ee.length;Ve++){let Qe=Ee[Ve],pt=null;if(f!==null)pt=f.getViewport(Qe);else{let xt=m.getViewSubImage(u,Qe);pt=xt.viewport,Ve===0&&(e.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(y))}let qe=B[Ve];qe===void 0&&(qe=new nn,qe.layers.enable(Ve),qe.viewport=new Mt,B[Ve]=qe),qe.matrix.fromArray(Qe.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Qe.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(pt.x,pt.y,pt.width,pt.height),Ve===0&&(H.matrix.copy(qe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Oe===!0&&H.cameras.push(qe)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){m=n.getBinding();let Ve=m.getDepthInformation(Ee[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,s.renderState)}if(Me&&Me.includes("camera-access")&&b){e.state.unbindTexture(),m=n.getBinding();for(let Ve=0;Ve<Ee.length;Ve++){let Qe=Ee[Ve].camera;if(Qe){let pt=h[Qe];pt||(pt=new Qs,h[Qe]=pt);let qe=m.getCameraImage(Qe);pt.sourceTexture=qe}}}}for(let Ee=0;Ee<S.length;Ee++){let Oe=E[Ee],Me=S[Ee];Oe!==null&&Me!==void 0&&Me.update(Oe,ee,c||a)}he&&he(J,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),x=null}let Be=new Hh;Be.setAnimationLoop(Le),this.setAnimationLoop=function(J){he=J},this.dispose=function(){}}},ag=new yt,Yh=new tt;Yh.set(-1,0,0,0,1,0,0,0,1);function og(i,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function n(g,h){h.color.getRGB(g.fogColor.value,Tl(i)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,T,R,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(g,h):h.isMeshLambertMaterial?(r(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(g,h),m(g,h)):h.isMeshPhongMaterial?(r(g,h),d(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(g,h),u(g,h),h.isMeshPhysicalMaterial&&f(g,h,y)):h.isMeshMatcapMaterial?(r(g,h),x(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),b(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,T,R):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Ot&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Ot&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let T=e.get(h),R=T.envMap,y=T.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(ag.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Yh),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,T,R){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*T,g.scale.value=R*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function d(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function m(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function f(g,h,T){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ot&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,h){h.matcap&&(g.matcap.value=h.matcap)}function b(g,h){let T=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let E=S.program;n.uniformBlockBinding(y,E)}function c(y,S){let E=s[y.id];E===void 0&&(g(y),E=d(y),s[y.id]=E,y.addEventListener("dispose",T));let C=S.program;n.updateUBOMapping(y,C);let v=e.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function d(y){let S=m();y.__bindingPointIndex=S;let E=i.createBuffer(),C=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function m(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=s[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,w=E.length;v<w;v++){let N=E[v];if(Array.isArray(N))for(let U=0,B=N.length;U<B;U++)f(N[U],v,U,C);else f(N,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,E,C){if(b(y,S,E,C)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let N=0;for(let U=0;U<w.length;U++){let B=w[U],H=h(B);x(B,y.__data,N),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(N+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function x(y,S,E){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,E)}function b(y,S,E,C){let v=y.value,w=S+"_"+E;if(C[w]===void 0)return typeof v=="number"||typeof v=="boolean"?C[w]=v:ArrayBuffer.isView(v)?C[w]=v.slice():C[w]=v.clone(),!0;{let N=C[w];if(typeof v=="number"||typeof v=="boolean"){if(N!==v)return C[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(N.equals(v)===!1)return N.copy(v),!0}}return!1}function g(y){let S=y.uniforms,E=0,C=16;for(let w=0,N=S.length;w<N;w++){let U=Array.isArray(S[w])?S[w]:[S[w]];for(let B=0,H=U.length;B<H;B++){let D=U[B],V=Array.isArray(D.value)?D.value:[D.value];for(let q=0,X=V.length;q<X;q++){let re=V[q],Y=h(re),Q=E%C,j=Q%Y.boundary,Fe=Q+j;E+=j,Fe!==0&&C-Fe<Y.storage&&(E+=C-Fe),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=Y.storage}}}let v=E%C;return v>0&&(E+=C-v),y.__size=E,y.__cache={},this}function h(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",y),S}function T(y){let S=y.target;S.removeEventListener("dispose",T);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function R(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var cg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jn=null;function hg(){return jn===null&&(jn=new Vi(cg,16,16,Ri,an),jn.name="DFG_LUT",jn.minFilter=Rt,jn.magFilter=Rt,jn.wrapS=Vn,jn.wrapT=Vn,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}var ho=class{constructor(e={}){let{canvas:t=dh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let b=f,g=new Set([Aa,Ta,wa]),h=new Set([rn,Fn,Ts,As,Sa,Ea]),T=new Uint32Array(4),R=new Int32Array(4),y=new z,S=null,E=null,C=[],v=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,U=!1,B=null,H=null,D=null,V=null;this._outputColorSpace=cn;let q=0,X=0,re=null,Y=-1,Q=null,j=new Mt,Fe=new Mt,Ue=null,he=new it(0),Le=0,Be=t.width,J=t.height,ee=1,Ee=null,Oe=null,Me=new Mt(0,0,Be,J),Ze=new Mt(0,0,Be,J),mt=!1,Ve=new ys,Qe=!1,pt=!1,qe=new yt,xt=new z,wt=new Mt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function bt(){return re===null?ee:1}let O=n;function Ct(_,M){return t.getContext(_,M)}let ct,A,p,k,G,Z,ae,fe,$,te,ge,Te,me,pe,De,Ae,$e,F,xe,K,de,ye,ie;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Yt,!1),O===null){let M="webgl2";if(O=Ct(M,_),O===null)throw Ct(M)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Se()}catch(_){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Yt,!1),Ye("WebGLRenderer: "+_.message),_}function Se(){ct=new xm(O),ct.init(),de=new ig(O,ct),A=new om(O,ct,e,de),p=new tg(O,ct),A.reversedDepthBuffer&&u&&p.buffers.depth.setReversed(!0),H=O.createFramebuffer(),D=O.createFramebuffer(),V=O.createFramebuffer(),k=new ym(O),G=new H0,Z=new ng(O,ct,p,G,A,de,k),ae=new gm(N),fe=new Md(O),ye=new rm(O,fe),$=new vm(O,fe,k,ye),te=new bm(O,$,fe,ye,k),F=new Mm(O,A,Z),De=new lm(G),ge=new k0(N,ae,ct,A,ye,De),Te=new og(N,G),me=new G0,pe=new $0(ct),$e=new sm(N,ae,p,te,x,l),Ae=new eg(N,te,A),ie=new lg(O,k,A,p),xe=new am(O,ct,k),K=new _m(O,ct,k),k.programs=ge.programs,N.capabilities=A,N.extensions=ct,N.properties=G,N.renderLists=me,N.shadowMap=Ae,N.state=p,N.info=k}b!==rn&&(w=new Em(b,t.width,t.height,o,s,r));let Ie=new Wl(N,O);this.xr=Ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let _=ct.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ct.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(_){_!==void 0&&(ee=_,this.setSize(Be,J,!1))},this.getSize=function(_){return _.set(Be,J)},this.setSize=function(_,M,L=!0){if(Ie.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=_,J=M,t.width=Math.floor(_*ee),t.height=Math.floor(M*ee),L===!0&&(t.style.width=_+"px",t.style.height=M+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,_,M)},this.getDrawingBufferSize=function(_){return _.set(Be*ee,J*ee).floor()},this.setDrawingBufferSize=function(_,M,L){Be=_,J=M,ee=L,t.width=Math.floor(_*L),t.height=Math.floor(M*L),this.setViewport(0,0,_,M)},this.setEffects=function(_){if(b===rn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let M=0;M<_.length;M++)if(_[M].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(j)},this.getViewport=function(_){return _.copy(Me)},this.setViewport=function(_,M,L,I){_.isVector4?Me.set(_.x,_.y,_.z,_.w):Me.set(_,M,L,I),p.viewport(j.copy(Me).multiplyScalar(ee).round())},this.getScissor=function(_){return _.copy(Ze)},this.setScissor=function(_,M,L,I){_.isVector4?Ze.set(_.x,_.y,_.z,_.w):Ze.set(_,M,L,I),p.scissor(Fe.copy(Ze).multiplyScalar(ee).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(_){p.setScissorTest(mt=_)},this.setOpaqueSort=function(_){Ee=_},this.setTransparentSort=function(_){Oe=_},this.getClearColor=function(_){return _.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(_=!0,M=!0,L=!0){let I=0;if(_){let P=!1;if(re!==null){let ne=re.texture.format;P=g.has(ne)}if(P){let ne=re.texture.type,se=h.has(ne),le=$e.getClearColor(),ce=$e.getClearAlpha(),ve=le.r,we=le.g,ze=le.b;se?(T[0]=ve,T[1]=we,T[2]=ze,T[3]=ce,O.clearBufferuiv(O.COLOR,0,T)):(R[0]=ve,R[1]=we,R[2]=ze,R[3]=ce,O.clearBufferiv(O.COLOR,0,R))}else I|=O.COLOR_BUFFER_BIT}M&&(I|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),L&&(I|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I!==0&&O.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),B=_},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Yt,!1),$e.dispose(),me.dispose(),pe.dispose(),G.dispose(),ae.dispose(),te.dispose(),ye.dispose(),ie.dispose(),ge.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",En),Ie.removeEventListener("sessionend",Ni),pn.stop()};function ut(_){_.preventDefault(),El("WebGLRenderer: Context Lost."),U=!0}function ot(){El("WebGLRenderer: Context Restored."),U=!1;let _=k.autoReset,M=Ae.enabled,L=Ae.autoUpdate,I=Ae.needsUpdate,P=Ae.type;Se(),k.autoReset=_,Ae.enabled=M,Ae.autoUpdate=L,Ae.needsUpdate=I,Ae.type=P}function Yt(_){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Lt(_){let M=_.target;M.removeEventListener("dispose",Lt),Os(M)}function Os(_){Ge(_),G.remove(_)}function Ge(_){let M=G.get(_).programs;M!==void 0&&(M.forEach(function(L){ge.releaseProgram(L)}),_.isShaderMaterial&&ge.releaseShaderCache(_))}this.renderBufferDirect=function(_,M,L,I,P,ne){M===null&&(M=At);let se=P.isMesh&&P.matrixWorld.determinantAffine()<0,le=Dt(_,M,L,I,P);p.setMaterial(I,se);let ce=L.index,ve=1;if(I.wireframe===!0){if(ce=$.getWireframeAttribute(L),ce===void 0)return;ve=2}let we=L.drawRange,ze=L.attributes.position,Re=we.start*ve,at=(we.start+we.count)*ve;ne!==null&&(Re=Math.max(Re,ne.start*ve),at=Math.min(at,(ne.start+ne.count)*ve)),ce!==null?(Re=Math.max(Re,0),at=Math.min(at,ce.count)):ze!=null&&(Re=Math.max(Re,0),at=Math.min(at,ze.count));let We=at-Re;if(We<0||We===1/0)return;ye.setup(P,I,le,L,ce);let Pe,Ne=xe;if(ce!==null&&(Pe=fe.get(ce),Ne=K,Ne.setIndex(Pe)),P.isMesh)I.wireframe===!0?(p.setLineWidth(I.wireframeLinewidth*bt()),Ne.setMode(O.LINES)):Ne.setMode(O.TRIANGLES);else if(P.isLine){let Ke=I.linewidth;Ke===void 0&&(Ke=1),p.setLineWidth(Ke*bt()),P.isLineSegments?Ne.setMode(O.LINES):P.isLineLoop?Ne.setMode(O.LINE_LOOP):Ne.setMode(O.LINE_STRIP)}else P.isPoints?Ne.setMode(O.POINTS):P.isSprite&&Ne.setMode(O.TRIANGLES);if(P.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Ne.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Ke=P._multiDrawStarts,ue=P._multiDrawCounts,et=P._multiDrawCount,He=ce?fe.get(ce).bytesPerElement:1,Pt=G.get(I).currentProgram.getUniforms();for(let Vt=0;Vt<et;Vt++)Pt.setValue(O,"_gl_DrawID",Vt),Ne.render(Ke[Vt]/He,ue[Vt])}else if(P.isInstancedMesh)Ne.renderInstances(Re,We,P.count);else if(L.isInstancedBufferGeometry){let Ke=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,ue=Math.min(L.instanceCount,Ke);Ne.renderInstances(Re,We,ue)}else Ne.render(Re,We)};function Sn(_,M,L,I){B!==null&&_.isNodeMaterial&&B.setObject(I,_),Qe===!0&&De.setState(_,L,!1),_.transparent===!0&&_.side===un&&_.forceSinglePass===!1?(_.side=Ot,_.needsUpdate=!0,nt(_,M,I),_.side=Kn,_.needsUpdate=!0,nt(_,M,I),_.side=un):nt(_,M,I)}this.compile=function(_,M,L=null){L===null&&(L=_),B!==null&&B.renderStart(_,M,L),E=pe.get(L),E.init(M),v.push(E),L.traverseVisible(function(P){P.isLight&&P.layers.test(M.layers)&&(E.pushLight(P),P.castShadow&&E.pushShadow(P))}),_!==L&&_.traverseVisible(function(P){P.isLight&&P.layers.test(M.layers)&&(E.pushLight(P),P.castShadow&&E.pushShadow(P))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),pt=this.localClippingEnabled,Qe=De.init(this.clippingPlanes,pt),Qe===!0&&De.setGlobalState(this.clippingPlanes,M),B!==null&&Ae.render(E.state.shadowsArray,L,M);let I=new Set;return _.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let ne=P.material;if(ne)if(Array.isArray(ne))for(let se=0;se<ne.length;se++){let le=ne[se];Sn(le,L,M,P),I.add(le)}else Sn(ne,L,M,P),I.add(ne)}),E=v.pop(),B!==null&&B.renderEnd(),I},this.compileAsync=function(_,M,L=null){let I=this.compile(_,M,L);return new Promise(P=>{function ne(){if(I.forEach(function(se){let ce=G.get(se).currentProgram;(ce===void 0||ce.isReady())&&I.delete(se)}),I.size===0){P(_);return}setTimeout(ne,10)}ct.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let zn=null;function Cn(_){zn&&zn(_)}function En(){pn.stop()}function Ni(){pn.start()}let pn=new Hh;pn.setAnimationLoop(Cn),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(_){zn=_,Ie.setAnimationLoop(_),_===null?pn.stop():pn.start()},Ie.addEventListener("sessionstart",En),Ie.addEventListener("sessionend",Ni),this.render=function(_,M){if(M!==void 0&&M.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(_,M);let L=Ie.enabled===!0&&Ie.isPresenting===!0,I=w!==null&&(re===null||L)&&w.begin(N,re);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(M),M=Ie.getCamera()),_.isScene===!0&&_.onBeforeRender(N,_,M,re),E=pe.get(_,v.length),E.init(M),E.state.textureUnits=Z.getTextureUnits(),v.push(E),qe.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),Ve.setFromProjectionMatrix(qe,Dn,M.reversedDepth),pt=this.localClippingEnabled,Qe=De.init(this.clippingPlanes,pt),S=me.get(_,C.length),S.init(),C.push(S),Ie.enabled===!0&&Ie.isPresenting===!0){let se=N.xr.getDepthSensingMesh();se!==null&&Zt(se,M,-1/0,N.sortObjects)}Zt(_,M,0,N.sortObjects),S.finish(),B!==null&&B.updateLights(E.state.lightsArray),N.sortObjects===!0&&S.sort(Ee,Oe),ft=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,ft&&$e.addToRenderList(S,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&De.beginShadows();let P=E.state.shadowsArray;if(Ae.render(P,_,M),Qe===!0&&De.endShadows(),(I&&w.hasRenderPass())===!1){let se=S.opaque,le=S.transmissive;if(E.setupLights(),M.isArrayCamera){let ce=M.cameras;if(le.length>0)for(let ve=0,we=ce.length;ve<we;ve++){let ze=ce[ve];W(se,le,_,ze)}ft&&$e.render(_);for(let ve=0,we=ce.length;ve<we;ve++){let ze=ce[ve];fi(S,_,ze,ze.viewport)}}else le.length>0&&W(se,le,_,M),ft&&$e.render(_),fi(S,_,M)}re!==null&&X===0&&(Z.updateMultisampleRenderTarget(re),Z.updateRenderTargetMipmap(re)),I&&w.end(N),_.isScene===!0&&_.onAfterRender(N,_,M),ye.resetDefaultState(),Y=-1,Q=null,v.pop(),v.length>0?(E=v[v.length-1],Z.setTextureUnits(E.state.textureUnits),Qe===!0&&De.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,B!==null&&B.renderEnd()};function Zt(_,M,L,I){if(_.visible===!1)return;if(_.layers.test(M.layers)){if(_.isGroup)L=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(M);else if(_.isLightProbeGrid)E.pushLightProbeGrid(_);else if(_.isLight)E.pushLight(_),_.castShadow&&E.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(Ve)){I&&wt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(qe);let se=te.update(_),le=_.material;le.visible&&S.push(_,se,le,L,wt.z,null,M)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(Ve))){let se=te.update(_),le=_.material;if(I&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),wt.copy(_.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),wt.copy(se.boundingSphere.center)),wt.applyMatrix4(_.matrixWorld).applyMatrix4(qe)),Array.isArray(le)){let ce=se.groups;for(let ve=0,we=ce.length;ve<we;ve++){let ze=ce[ve],Re=le[ze.materialIndex];Re&&Re.visible&&S.push(_,se,Re,L,wt.z,ze,M)}}else le.visible&&S.push(_,se,le,L,wt.z,null,M)}}let ne=_.children;for(let se=0,le=ne.length;se<le;se++)Zt(ne[se],M,L,I)}function fi(_,M,L,I){let{opaque:P,transmissive:ne,transparent:se}=_;E.setupLightsView(L),Qe===!0&&De.setGlobalState(N.clippingPlanes,L),I&&p.viewport(j.copy(I)),P.length>0&&oe(P,M,L),ne.length>0&&oe(ne,M,L),se.length>0&&oe(se,M,L),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function W(_,M,L,I){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[I.id]===void 0){let Re=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[I.id]=new Wt(1,1,{generateMipmaps:!0,type:Re?an:rn,minFilter:Ti,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let ne=E.state.transmissionRenderTarget[I.id],se=I.viewport||j;ne.setSize(se.z*N.transmissionResolutionScale,se.w*N.transmissionResolutionScale);let le=N.getRenderTarget(),ce=N.getActiveCubeFace(),ve=N.getActiveMipmapLevel();N.setRenderTarget(ne),N.getClearColor(he),Le=N.getClearAlpha(),Le<1&&N.setClearColor(16777215,.5),N.clear(),ft&&$e.render(L);let we=N.toneMapping;N.toneMapping=Un;let ze=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),E.setupLightsView(I),Qe===!0&&De.setGlobalState(N.clippingPlanes,I),oe(_,L,I),Z.updateMultisampleRenderTarget(ne),Z.updateRenderTargetMipmap(ne),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let at=0,We=M.length;at<We;at++){let Pe=M[at],{object:Ne,geometry:Ke,material:ue,group:et}=Pe;if(ue.side===un&&Ne.layers.test(I.layers)){let He=ue.side;ue.side=Ot,ue.needsUpdate=!0,ke(Ne,L,I,Ke,ue,et),ue.side=He,ue.needsUpdate=!0,Re=!0}}Re===!0&&(Z.updateMultisampleRenderTarget(ne),Z.updateRenderTargetMipmap(ne))}N.setRenderTarget(le,ce,ve),N.setClearColor(he,Le),ze!==void 0&&(I.viewport=ze),N.toneMapping=we}function oe(_,M,L){let I=M.isScene===!0?M.overrideMaterial:null;for(let P=0,ne=_.length;P<ne;P++){let se=_[P],{object:le,geometry:ce,group:ve}=se,we=se.material;we.allowOverride===!0&&I!==null&&(we=I),le.layers.test(L.layers)&&ke(le,M,L,ce,we,ve)}}function ke(_,M,L,I,P,ne){B!==null&&P.isNodeMaterial&&B.setObject(_,P),_.onBeforeRender(N,M,L,I,P,ne),_.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),P.onBeforeRender(N,M,L,I,_,ne),P.transparent===!0&&P.side===un&&P.forceSinglePass===!1?(P.side=Ot,P.needsUpdate=!0,N.renderBufferDirect(L,M,I,P,_,ne),P.side=Kn,P.needsUpdate=!0,N.renderBufferDirect(L,M,I,P,_,ne),P.side=un):N.renderBufferDirect(L,M,I,P,_,ne),_.onAfterRender(N,M,L,I,P,ne)}function nt(_,M,L){M.isScene!==!0&&(M=At);let I=G.get(_),P=E.state.lights,ne=E.state.shadowsArray,se=P.state.version,le=ge.getParameters(_,P.state,ne,M,L,E.state.lightProbeGridArray),ce=ge.getProgramCacheKey(le),ve=I.programs;I.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?M.environment:null,I.fog=M.fog;let we=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;I.envMap=ae.get(_.envMap||I.environment,we),I.envMapRotation=I.environment!==null&&_.envMap===null?M.environmentRotation:_.envMapRotation,ve===void 0&&(_.addEventListener("dispose",Lt),ve=new Map,I.programs=ve);let ze=ve.get(ce);if(ze!==void 0){if(I.currentProgram===ze&&I.lightsStateVersion===se)return st(_,le),ze}else le.uniforms=ge.getUniforms(_),B!==null&&_.isNodeMaterial&&B.build(_,L,le),_.onBeforeCompile(le,N),ze=ge.acquireProgram(le,ce),ve.set(ce,ze),I.uniforms=le.uniforms;let Re=I.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Re.clippingPlanes=De.uniform),st(_,le),I.needsLights=Ht(_),I.lightsStateVersion=se,I.needsLights&&(Re.ambientLightColor.value=P.state.ambient,Re.lightProbe.value=P.state.probe,Re.sunLights.value=P.state.sun,Re.sunLightShadows.value=P.state.sunShadow,Re.directionalLights.value=P.state.directional,Re.directionalLightShadows.value=P.state.directionalShadow,Re.spotLights.value=P.state.spot,Re.spotLightShadows.value=P.state.spotShadow,Re.rectAreaLights.value=P.state.rectArea,Re.ltc_1.value=P.state.rectAreaLTC1,Re.ltc_2.value=P.state.rectAreaLTC2,Re.pointLights.value=P.state.point,Re.pointLightShadows.value=P.state.pointShadow,Re.hemisphereLights.value=P.state.hemi,Re.sunShadowMatrix.value=P.state.sunShadowMatrix,Re.sunShadowCascade.value=P.state.sunShadowCascade,Re.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Re.spotLightMatrix.value=P.state.spotLightMatrix,Re.spotLightMap.value=P.state.spotLightMap,Re.pointShadowMatrix.value=P.state.pointShadowMatrix),I.lightProbeGrid=E.state.lightProbeGridArray.length>0,I.currentProgram=ze,I.uniformsList=null,ze}function je(_){if(_.uniformsList===null){let M=_.currentProgram.getUniforms();_.uniformsList=Is.seqWithValue(M.seq,_.uniforms)}return _.uniformsList}function st(_,M){let L=G.get(_);L.outputColorSpace=M.outputColorSpace,L.batching=M.batching,L.batchingColor=M.batchingColor,L.instancing=M.instancing,L.instancingColor=M.instancingColor,L.instancingMorph=M.instancingMorph,L.skinning=M.skinning,L.morphTargets=M.morphTargets,L.morphNormals=M.morphNormals,L.morphColors=M.morphColors,L.morphTargetsCount=M.morphTargetsCount,L.numClippingPlanes=M.numClippingPlanes,L.numIntersection=M.numClipIntersection,L.vertexAlphas=M.vertexAlphas,L.vertexTangents=M.vertexTangents,L.toneMapping=M.toneMapping}function ht(_,M){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(M.matrixWorld);for(let L=0,I=_.length;L<I;L++){let P=_[L];if(P.texture!==null&&P.boundingBox.containsPoint(y))return P}return null}function Dt(_,M,L,I,P){M.isScene!==!0&&(M=At),Z.resetTextureUnits();let ne=M.fog,se=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?M.environment:null,le=re===null?N.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:dt.workingColorSpace,ce=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,ve=ae.get(I.envMap||se,ce),we=I.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,ze=!!L.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Re=!!L.morphAttributes.position,at=!!L.morphAttributes.normal,We=!!L.morphAttributes.color,Pe=Un;I.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Pe=N.toneMapping);let Ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Ke=Ne!==void 0?Ne.length:0,ue=G.get(I),et=E.state.lights;if(Qe===!0&&(pt===!0||_!==Q)){let Ce=_===Q&&I.id===Y;De.setState(I,_,Ce)}let He=!1;I.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==et.state.version||ue.outputColorSpace!==le||P.isBatchedMesh&&ue.batching===!1||!P.isBatchedMesh&&ue.batching===!0||P.isBatchedMesh&&ue.batchingColor===!0&&P._colorsTexture===null||P.isBatchedMesh&&ue.batchingColor===!1&&P._colorsTexture!==null||P.isInstancedMesh&&ue.instancing===!1||!P.isInstancedMesh&&ue.instancing===!0||P.isSkinnedMesh&&ue.skinning===!1||!P.isSkinnedMesh&&ue.skinning===!0||P.isInstancedMesh&&ue.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&ue.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&ue.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&ue.instancingMorph===!1&&P.morphTexture!==null||ue.envMap!==ve||I.fog===!0&&ue.fog!==ne||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==De.numPlanes||ue.numIntersection!==De.numIntersection)||ue.vertexAlphas!==we||ue.vertexTangents!==ze||ue.morphTargets!==Re||ue.morphNormals!==at||ue.morphColors!==We||ue.toneMapping!==Pe||ue.morphTargetsCount!==Ke||!!ue.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(He=!0):(He=!0,ue.__version=I.version);let Pt=ue.currentProgram;He===!0&&(Pt=nt(I,M,P),B&&I.isNodeMaterial&&B.onUpdateProgram(I,Pt,ue));let Vt=!1,mn=!1,kn=!1,gt=Pt.getUniforms(),Je=ue.uniforms;if(p.useProgram(Pt.program)&&(Vt=!0,mn=!0,kn=!0),I.id!==Y&&(Y=I.id,mn=!0),ue.needsLights){let Ce=ht(E.state.lightProbeGridArray,P);ue.lightProbeGrid!==Ce&&(ue.lightProbeGrid=Ce,mn=!0)}if(Vt||Q!==_){p.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",_.projectionMatrix),gt.setValue(O,"viewMatrix",_.matrixWorldInverse);let Ft=gt.map.cameraPosition;Ft!==void 0&&Ft.setValue(O,xt.setFromMatrixPosition(_.matrixWorld)),A.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&gt.setValue(O,"isOrthographic",_.isOrthographicCamera===!0),Q!==_&&(Q=_,mn=!0,kn=!0)}if(ue.needsLights&&(et.state.sunShadowMap.length>0&&gt.setValue(O,"sunShadowMap",et.state.sunShadowMap,Z),et.state.directionalShadowMap.length>0&&gt.setValue(O,"directionalShadowMap",et.state.directionalShadowMap,Z),et.state.spotShadowMap.length>0&&gt.setValue(O,"spotShadowMap",et.state.spotShadowMap,Z),et.state.pointShadowMap.length>0&&gt.setValue(O,"pointShadowMap",et.state.pointShadowMap,Z)),P.isSkinnedMesh){gt.setOptional(O,P,"bindMatrix"),gt.setOptional(O,P,"bindMatrixInverse");let Ce=P.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),gt.setValue(O,"boneTexture",Ce.boneTexture,Z))}P.isBatchedMesh&&(gt.setOptional(O,P,"batchingTexture"),gt.setValue(O,"batchingTexture",P._matricesTexture,Z),gt.setOptional(O,P,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",P._indirectTexture,Z),gt.setOptional(O,P,"batchingColorTexture"),P._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",P._colorsTexture,Z));let It=L.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&F.update(P,L,Pt),(mn||ue.receiveShadow!==P.receiveShadow)&&(ue.receiveShadow=P.receiveShadow,gt.setValue(O,"receiveShadow",P.receiveShadow)),(I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial)&&I.envMap===null&&M.environment!==null&&(Je.envMapIntensity.value=M.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=hg()),mn){if(gt.setValue(O,"toneMappingExposure",N.toneMappingExposure),ue.needsLights&&Bt(Je,kn),ne&&I.fog===!0&&Te.refreshFogUniforms(Je,ne),Te.refreshMaterialUniforms(Je,I,ee,J,E.state.transmissionRenderTarget[_.id]),ue.needsLights&&ue.lightProbeGrid){let Ce=ue.lightProbeGrid;Je.probesSH.value=Ce.texture,Je.probesMin.value.copy(Ce.boundingBox.min),Je.probesMax.value.copy(Ce.boundingBox.max),Je.probesResolution.value.copy(Ce.resolution)}Is.upload(O,je(ue),Je,Z)}if(I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Is.upload(O,je(ue),Je,Z),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&gt.setValue(O,"center",P.center),gt.setValue(O,"modelViewMatrix",P.modelViewMatrix),gt.setValue(O,"normalMatrix",P.normalMatrix),gt.setValue(O,"modelMatrix",P.matrixWorld),I.uniformsGroups!==void 0){let Ce=I.uniformsGroups;for(let Ft=0,vt=Ce.length;Ft<vt;Ft++){let Gt=Ce[Ft];ie.update(Gt,Pt),ie.bind(Gt,Pt)}}return Pt}function Bt(_,M){_.ambientLightColor.needsUpdate=M,_.lightProbe.needsUpdate=M,_.sunLights.needsUpdate=M,_.sunLightShadows.needsUpdate=M,_.directionalLights.needsUpdate=M,_.directionalLightShadows.needsUpdate=M,_.pointLights.needsUpdate=M,_.pointLightShadows.needsUpdate=M,_.spotLights.needsUpdate=M,_.spotLightShadows.needsUpdate=M,_.rectAreaLights.needsUpdate=M,_.hemisphereLights.needsUpdate=M}function Ht(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(_,M,L){let I=G.get(_);I.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),G.get(_.texture).__webglTexture=M,G.get(_.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:L,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,M){let L=G.get(_);L.__webglFramebuffer=M,L.__useDefaultFramebuffer=M===void 0},this.setRenderTarget=function(_,M=0,L=0){re=_,q=M,X=L;let I=null,P=!1,ne=!1;if(_){let le=G.get(_);if(le.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(O.FRAMEBUFFER,le.__webglFramebuffer),j.copy(_.viewport),Fe.copy(_.scissor),Ue=_.scissorTest,p.viewport(j),p.scissor(Fe),p.setScissorTest(Ue),Y=-1;return}else if(le.__webglFramebuffer===void 0)Z.setupRenderTarget(_);else if(le.__hasExternalTextures)Z.rebindTextures(_,G.get(_.texture).__webglTexture,G.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let we=_.depthTexture;if(le.__boundDepthTexture!==we){if(we!==null&&G.has(we)&&(_.width!==we.image.width||_.height!==we.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(_)}}let ce=_.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(ne=!0);let ve=G.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(ve[M])?I=ve[M][L]:I=ve[M],P=!0):_.samples>0&&Z.useMultisampledRTT(_)===!1?I=G.get(_).__webglMultisampledFramebuffer:Array.isArray(ve)?I=ve[L]:I=ve,j.copy(_.viewport),Fe.copy(_.scissor),Ue=_.scissorTest}else j.copy(Me).multiplyScalar(ee).floor(),Fe.copy(Ze).multiplyScalar(ee).floor(),Ue=mt;if(L!==0&&(I=H),p.bindFramebuffer(O.FRAMEBUFFER,I)&&p.drawBuffers(_,I),p.viewport(j),p.scissor(Fe),p.setScissorTest(Ue),P){let le=G.get(_.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+M,le.__webglTexture,L)}else if(ne){let le=M;for(let ce=0;ce<_.textures.length;ce++){let ve=G.get(_.textures[ce]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ce,ve.__webglTexture,L,le)}}else if(_!==null&&L!==0){let le=G.get(_.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,le.__webglTexture,L)}Y=-1};function jt(_){let M=G.get(_);return(M.__readFormat!==_.format||M.__readType!==_.type)&&(M.__readFormat=_.format,M.__readType=_.type,M.__formatReadable=A.textureFormatReadable(_.format),M.__typeReadable=A.textureTypeReadable(_.type)),M}this.readRenderTargetPixels=function(_,M,L,I,P,ne,se,le=0){if(!(_&&_.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=G.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&se!==void 0&&(ce=ce[se]),ce){p.bindFramebuffer(O.FRAMEBUFFER,ce);try{let ve=_.textures[le],we=ve.format,ze=ve.type;_.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+le);let Re=jt(ve);if(Re.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}M>=0&&M<=_.width-I&&L>=0&&L<=_.height-P&&O.readPixels(M,L,I,P,de.convert(we),de.convert(ze),ne)}finally{let ve=re!==null?G.get(re).__webglFramebuffer:null;p.bindFramebuffer(O.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(_,M,L,I,P,ne,se,le=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=G.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&se!==void 0&&(ce=ce[se]),ce)if(M>=0&&M<=_.width-I&&L>=0&&L<=_.height-P){p.bindFramebuffer(O.FRAMEBUFFER,ce);let ve=_.textures[le],we=ve.format,ze=ve.type;_.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+le);let Re=jt(ve);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.bufferData(O.PIXEL_PACK_BUFFER,ne.byteLength,O.STREAM_READ),O.readPixels(M,L,I,P,de.convert(we),de.convert(ze),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let We=re!==null?G.get(re).__webglFramebuffer:null;p.bindFramebuffer(O.FRAMEBUFFER,We);let Pe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ph(O,Pe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ne),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(at),O.deleteSync(Pe),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,M=null,L=0){let I=Math.pow(2,-L),P=Math.floor(_.image.width*I),ne=Math.floor(_.image.height*I),se=M!==null?M.x:0,le=M!==null?M.y:0;Z.setTexture2D(_,0),O.copyTexSubImage2D(O.TEXTURE_2D,L,0,0,se,le,P,ne),p.unbindTexture()},this.copyTextureToTexture=function(_,M,L=null,I=null,P=0,ne=0){let se,le,ce,ve,we,ze,Re,at,We,Pe=_.isCompressedTexture?_.mipmaps[ne]:_.image;if(L!==null)se=L.max.x-L.min.x,le=L.max.y-L.min.y,ce=L.isBox3?L.max.z-L.min.z:1,ve=L.min.x,we=L.min.y,ze=L.isBox3?L.min.z:0;else{let Je=Math.pow(2,-P);se=Math.floor(Pe.width*Je),le=Math.floor(Pe.height*Je),_.isDataArrayTexture?ce=Pe.depth:_.isData3DTexture?ce=Math.floor(Pe.depth*Je):ce=1,ve=0,we=0,ze=0}I!==null?(Re=I.x,at=I.y,We=I.z):(Re=0,at=0,We=0);let Ne=de.convert(M.format),Ke=de.convert(M.type),ue;M.isData3DTexture?(Z.setTexture3D(M,0),ue=O.TEXTURE_3D):M.isDataArrayTexture||M.isCompressedArrayTexture?(Z.setTexture2DArray(M,0),ue=O.TEXTURE_2D_ARRAY):(Z.setTexture2D(M,0),ue=O.TEXTURE_2D),p.activeTexture(O.TEXTURE0),p.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,M.flipY),p.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),p.pixelStorei(O.UNPACK_ALIGNMENT,M.unpackAlignment);let et=p.getParameter(O.UNPACK_ROW_LENGTH),He=p.getParameter(O.UNPACK_IMAGE_HEIGHT),Pt=p.getParameter(O.UNPACK_SKIP_PIXELS),Vt=p.getParameter(O.UNPACK_SKIP_ROWS),mn=p.getParameter(O.UNPACK_SKIP_IMAGES);p.pixelStorei(O.UNPACK_ROW_LENGTH,Pe.width),p.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pe.height),p.pixelStorei(O.UNPACK_SKIP_PIXELS,ve),p.pixelStorei(O.UNPACK_SKIP_ROWS,we),p.pixelStorei(O.UNPACK_SKIP_IMAGES,ze);let kn=_.isDataArrayTexture||_.isData3DTexture,gt=M.isDataArrayTexture||M.isData3DTexture;if(_.isDepthTexture){let Je=G.get(_),It=G.get(M),Ce=G.get(Je.__renderTarget),Ft=G.get(It.__renderTarget);p.bindFramebuffer(O.READ_FRAMEBUFFER,Ce.__webglFramebuffer),p.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let vt=0;vt<ce;vt++)kn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(_).__webglTexture,P,ze+vt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(M).__webglTexture,ne,We+vt)),O.blitFramebuffer(ve,we,se,le,Re,at,se,le,O.DEPTH_BUFFER_BIT,O.NEAREST);p.bindFramebuffer(O.READ_FRAMEBUFFER,null),p.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(P!==0||_.isRenderTargetTexture||G.has(_)){let Je=G.get(_),It=G.get(M);p.bindFramebuffer(O.READ_FRAMEBUFFER,D),p.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let Ce=0;Ce<ce;Ce++)kn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Je.__webglTexture,P,ze+Ce):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Je.__webglTexture,P),gt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,ne,We+Ce):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,It.__webglTexture,ne),P!==0?O.blitFramebuffer(ve,we,se,le,Re,at,se,le,O.COLOR_BUFFER_BIT,O.NEAREST):gt?O.copyTexSubImage3D(ue,ne,Re,at,We+Ce,ve,we,se,le):O.copyTexSubImage2D(ue,ne,Re,at,ve,we,se,le);p.bindFramebuffer(O.READ_FRAMEBUFFER,null),p.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gt?_.isDataTexture||_.isData3DTexture?O.texSubImage3D(ue,ne,Re,at,We,se,le,ce,Ne,Ke,Pe.data):M.isCompressedArrayTexture?O.compressedTexSubImage3D(ue,ne,Re,at,We,se,le,ce,Ne,Pe.data):O.texSubImage3D(ue,ne,Re,at,We,se,le,ce,Ne,Ke,Pe):_.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ne,Re,at,se,le,Ne,Ke,Pe.data):_.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ne,Re,at,Pe.width,Pe.height,Ne,Pe.data):O.texSubImage2D(O.TEXTURE_2D,ne,Re,at,se,le,Ne,Ke,Pe);p.pixelStorei(O.UNPACK_ROW_LENGTH,et),p.pixelStorei(O.UNPACK_IMAGE_HEIGHT,He),p.pixelStorei(O.UNPACK_SKIP_PIXELS,Pt),p.pixelStorei(O.UNPACK_SKIP_ROWS,Vt),p.pixelStorei(O.UNPACK_SKIP_IMAGES,mn),ne===0&&M.generateMipmaps&&O.generateMipmap(ue),p.unbindTexture()},this.initRenderTarget=function(_){G.get(_).__webglFramebuffer===void 0&&Z.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Z.setTextureCube(_,0):_.isData3DTexture?Z.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Z.setTexture2DArray(_,0):Z.setTexture2D(_,0),p.unbindTexture()},this.resetState=function(){q=0,X=0,re=null,p.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var Qt=Math.PI/180,po=Qt*23.4397,vr={lat:55.676,lon:12.578},Zh=i=>i.valueOf()/864e5-.5+2440588-2451545,ql=(i,e)=>Math.atan2(Math.sin(i)*Math.cos(po)-Math.tan(e)*Math.sin(po),Math.cos(i)),Yl=(i,e)=>Math.asin(Math.sin(e)*Math.cos(po)+Math.cos(e)*Math.sin(po)*Math.sin(i)),ug=(i,e)=>Qt*(280.16+360.9856235*i)-e,dg=i=>(i=Math.max(i,0),2967e-7/Math.tan(i+.00312536/(i+.08901179)));function $h(i,e,t){let n=-vr.lon*Qt,s=vr.lat*Qt,r=ug(i,n)-e,a=Math.asin(Math.sin(s)*Math.sin(t)+Math.cos(s)*Math.cos(t)*Math.cos(r));return a+=dg(a),{az:((Math.atan2(Math.sin(r),Math.cos(r)*Math.sin(s)-Math.tan(t)*Math.cos(s))/Qt+180)%360+360)%360,el:a/Qt}}function Zl(i){let e=Zh(i),t=Qt*(357.5291+.98560028*e),n=Qt*(1.9148*Math.sin(t)+.02*Math.sin(2*t)+3e-4*Math.sin(3*t)),s=t+n+Qt*102.9372+Math.PI;return $h(e,ql(s,0),Yl(s,0))}function fg(i){let e=Qt*(218.316+13.176396*i),t=Qt*(134.963+13.064993*i),n=Qt*(93.272+13.22935*i),s=e+Qt*6.289*Math.sin(t),r=Qt*5.128*Math.sin(n);return{ra:ql(s,r),dec:Yl(s,r),l:s,b:r}}function pg(i){let e=Zh(i),t=fg(e),n=Qt*(357.5291+.98560028*e),s=n+Qt*(1.9148*Math.sin(n)+.02*Math.sin(2*n)+3e-4*Math.sin(3*n))+Qt*102.9372+Math.PI,r=ql(s,0),a=Yl(s,0),o=Math.acos(Math.sin(a)*Math.sin(t.dec)+Math.cos(a)*Math.cos(t.dec)*Math.cos(r-t.ra)),l=Math.atan2(149598e3*Math.sin(o),385001-149598e3*Math.cos(o));return{...$h(e,t.ra,t.dec),lit:(1+Math.cos(l))/2}}function $l(i){let e=Zl(i),t=1-Pi(-8,-1,e.el),n=Pi(-12,-2,e.el)*(1-Pi(-1,6,e.el)),r=((c,d)=>[1+(c[0]-1)*n+(d[0]-1)*t*(1-n),1+(c[1]-1)*n+(d[1]-1)*t*(1-n),1+(c[2]-1)*n+(d[2]-1)*t*(1-n)])([.55,.7,1.2],[.2,.23,.32]),a=Pi(-4,8,e.el);if(e.el>-3){let c=Pi(2,24,e.el),d=(6+9*c)*Pi(-3,3,e.el);return{kind:e.el>-.83?"sun":"night",az:e.az,el:e.el,shadeEl:Math.max(e.el,1.6),color:[d,d*(.56+.38*c),d*(.34+.52*c)],day:a,night:t,sky:r}}let o=pg(i),l=(3.2+4*o.lit)*Pi(0,5,o.el)*Pi(-3,-8,e.el);return{kind:o.el>0?"moon":"night",az:o.az,el:o.el,shadeEl:Math.max(o.el,3),color:[l*.72,l*.82,l],day:a,night:t,sky:r}}function Pi(i,e,t){let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)}var Ds={wind:4,from:240,cloud:.2,rain:0,temp:12},mo={clear:{wind:2,from:240,cloud:0,rain:0,temp:14},fair:Ds,cloudy:{wind:6,from:250,cloud:.7,rain:0,temp:11},overcast:{wind:5,from:230,cloud:1,rain:0,temp:9},rain:{wind:7,from:220,cloud:1,rain:2.4,temp:8},storm:{wind:17,from:260,cloud:.85,rain:4,temp:7}},Jh="pintable-weather",mg=`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${vr.lat}&lon=${vr.lon}`,Ii=null,_r=null,Jl=null;function gg(i){let e=i?.properties?.timeseries??[],t=[];for(let n of e){let s=n.data?.instant?.details;if(!s)continue;let r=n.data.next_1_hours?.details?.precipitation_amount??(n.data.next_6_hours?.details?.precipitation_amount??0)/6;t.push({t:Date.parse(n.time),wind:s.wind_speed??Ds.wind,from:s.wind_from_direction??Ds.from,cloud:(s.cloud_area_fraction??20)/100,rain:r,temp:s.air_temperature??Ds.temp})}return t.filter(n=>Number.isFinite(n.t)).sort((n,s)=>n.t-s.t)}function Kh(){if(typeof window>"u")return Promise.resolve();let i=new URLSearchParams(location.search).get("weather");if(i&&mo[i])return _r=mo[i],Promise.resolve();try{let n=JSON.parse(localStorage.getItem(Jh)??"null");if(n&&n.until>Date.now()&&n.rows?.length)return Ii=n.rows,Jl="met",Promise.resolve()}catch{}let e=new AbortController,t=setTimeout(()=>e.abort(),6e3);return fetch(mg,{signal:e.signal,credentials:"omit"}).then(async n=>{if(!n.ok)throw new Error(`weather ${n.status}`);let s=gg(await n.json());if(!s.length)throw new Error("weather: empty");Ii=s,Jl="met";let r=Date.parse(n.headers.get("expires")??"")||Date.now()+30*6e4;try{localStorage.setItem(Jh,JSON.stringify({until:Math.max(r,Date.now()+10*6e4),rows:s}))}catch{}}).catch(()=>{}).finally(()=>clearTimeout(t))}var xg=(i,e,t)=>i+(((e-i)%360+540)%360-180)*t;function Kl(i,e={...Ds}){if(_r)return Object.assign(e,_r);if(!Ii?.length)return Object.assign(e,Ds);let t=i.valueOf(),n=0;for(;n<Ii.length-1&&Ii[n+1].t<=t;)n++;let s=Ii[n],r=Ii[Math.min(n+1,Ii.length-1)],a=r.t>s.t?Math.min(1,Math.max(0,(t-s.t)/(r.t-s.t))):0;return e.wind=s.wind+(r.wind-s.wind)*a,e.from=xg(s.from,r.from,a),e.cloud=s.cloud+(r.cloud-s.cloud)*a,e.rain=s.rain+(r.rain-s.rain)*a,e.temp=s.temp+(r.temp-s.temp)*a,e}function Qh(i){_r=i&&mo[i]?mo[i]:null}var Ql=()=>_r?"set":Jl;function jl(i){let e=i.rain>=4?"heavy rain":i.rain>=.8?"rain":i.rain>=.1?"light rain":i.cloud>.87?"overcast":i.cloud>.55?"cloudy":i.cloud>.2?"fair":"clear";return i.wind>=8?`${e}, wind ${Math.round(i.wind)} m/s`:e}var Ns=typeof location>"u"||new URLSearchParams(location.search).get("pins")!=="coarse",go=Ns?823592:205892,jh=.285,eu=16;var bn=[{name:"Christiansborg",x:200.5,z:213.5,kind:"building",fact:"Finished 1928 \xB7 tower 106 m, the city's tallest",flood:1},{name:"B\xF8rsen",x:293,z:240,kind:"building",fact:"Built 1619\u20131640 \xB7 its 56 m dragon spire fell in the 2024 fire",flood:.9},{name:"Inderhavnen",x:330,z:300,kind:"water"},{name:"Holmens Kirke",x:278,z:192,kind:"building",fact:"An anchor forge of 1563 \xB7 a church since 1619",flood:1},{name:"Den Sorte Diamant",x:263,z:339,kind:"building",fact:"Schmidt Hammer Lassen, 1999",flood:.5},{name:"Christianshavn",x:432,z:352,kind:"district"},{name:"Slotsholmen",x:236,z:271,kind:"district"},{name:"Thorvaldsens Museum",x:149,z:192,kind:"building",fact:"Built 1838\u20131848 \xB7 M. G. Bindesb\xF8ll",flood:.8},{name:"Christians Kirke",x:379,z:377,kind:"building",fact:"Built 1754\u20131759 \xB7 tower 70 m",flood:1},{name:"Nikolaj",x:225,z:104,kind:"building",fact:"Spire raised 1909 \xB7 the city's third-tallest tower",flood:1},{name:"Det Kongelige Teater",x:346,z:79,kind:"building",fact:"Founded 1748 \xB7 this house built 1872\u20131874",flood:1},{name:"Nationalmuseet",x:63,z:288,kind:"building",fact:"The Prince's Mansion \xB7 a museum since 1892",flood:.6},{name:"Frederiksholms Kanal",x:146,z:318,kind:"water"},{name:"Gammel Strand",x:148,z:160,kind:"district"},{name:"B\xF8rsgraven",x:316,z:218,kind:"water"},{name:"Christiansborg Slotskirke",x:172.6,z:178,kind:"building",fact:"Inaugurated 14 May 1826",flood:.9},{name:"Krigsmuseet",x:203,z:301,kind:"building",fact:"Christian IV's arsenal \xB7 163 m long, finished 1604",flood:.5},{name:"Bibliotekshaven",x:229,z:290,kind:"district"},{name:"Christian IV's Bryghus",x:193,z:349,kind:"building",fact:"Built 1608 as a bastion",flood:.7},{name:"Christianshavns Kanal",x:442,z:398,kind:"water"},{name:"Gammel Dok",x:474,z:218,kind:"building",fact:"A warehouse by H. C. Scharling, 1882",flood:.5},{name:"Gammelholm",x:417,z:128,kind:"district"},{name:"Magasin du Nord",x:285.6,z:96,kind:"building",fact:"Department store \xB7 its building completed 1894",flood:.8},{name:"H\xF8jbro Plads",x:183,z:119,kind:"district"},{name:"Hellig\xE5ndskirken",x:108,z:92.5,kind:"building",fact:"One of the city's oldest churches \xB7 spire 1594",flood:.9},{name:"Amagertorv",x:141.5,z:102,kind:"district"}];var ec=[{closed:!0,pts:[303.6,219.5,295.8,217.9,288.4,215,281.7,210.8,274.8,206.9,268.7,201.8,262,197.4,254.7,194.5,248.1,190.1,241.5,185.6,234.8,181.2,228.2,176.8,221.5,172.4,214.9,167.9,208.3,163.5,201.6,159.1,194.6,155.4,187,153,179,153.1,171.4,155.5,163.9,158.2,157.1,162.3,150.2,166.2,144,171.3,137.4,175.8,131.7,181.3,126.4,187.3,121.4,193.4,116.4,199.6,111.2,205.7,106.7,212.2,101.6,218.4,96.5,224.5,91.5,230.7,87.5,237.6,89,245,93.4,251.6,98.5,257.8,102.9,264.4,108,270.5,112.9,276.9,117.5,283.3,122.5,289.5,127.1,296,132.1,302.2,136.7,308.7,141.7,315,146.4,321.4,151.2,327.8,156.3,333.9,160.7,340.5,165.8,346.7,170.3,353.2,175.3,359.4,180.3,365.6,185.6,371.6,191.2,377.2,196.9,382.9,202.5,388.5,208.1,394.1,213.4,400.1,215.3,407.8,216,415.7,217.5,422.4,223.2,416.8,228.9,411.1,234.5,405.5,240.1,399.9,245.8,394.2,251.4,388.6,257.1,382.9,263.2,377.8,268.8,372.2,274.5,366.5,280.1,360.9,285.8,355.2,291.4,349.6,297,344,302.7,338.3,308.3,332.7,314,327,319.7,321.5,326.2,316.8,332.5,312,338.4,306.6,344,301,349.7,295.3,355.3,289.7,361,284,366.6,278.4,372.2,272.8,377.9,267.1,383.2,261.2,384,253.4,383.9,245.4,379.1,239.1,373,234,366.1,230,358.3,229,350.4,228,342.7,226.1,334.9,224.3,327.2,222.7,319.4,221.2,311.5,220]},{closed:!0,pts:[428.6,210.4,422.5,215.5,416.4,220.6,410.7,226.3,405.1,231.9,399.6,237.7,397.9,245.2,393.4,251.6,387.7,257.3,382.1,262.9,376.4,268.6,370.8,274.2,365.2,279.8,359.5,285.5,353.9,291.1,348.2,296.8,342.6,302.4,337,308,331,313.3,324.4,317.8,318.7,323.3,313,329,307.4,334.6,301.8,340.2,296.1,345.9,290.5,351.5,284.8,357.2,279.2,362.8,273.6,368.4,274.2,372,282.2,372,289.9,373.3,296,378.4,302.2,383.5,307.9,388.9,314.1,394,320.2,399.1,326.3,404.2,332.7,408.9,339.3,413.3,346,417.6,352.1,422.7,358,428,364.1,433.1,370.2,438.3,376.1,443.7,382.2,448.8,388.5,453.5,396.2,452.6,401.9,447,407,440.9,412.1,434.8,417.2,428.7,422.2,422.5,427.3,416.4,432.4,410.3,437.5,404.2,442.6,398.1,447.7,391.9,453,386,458.1,379.9,463.2,373.8,468.3,367.7,473.4,361.6,478.5,355.5,483.7,349.3,488.8,343.2,492.2,336.1,495.3,328.7,500.4,322.6,505.4,316.4,507.7,308.8,509.6,301,511.4,293.3,513.3,285.5,515.1,277.7,516.7,269.9,515.9,262,514.9,254.1,513.9,246.2,512.8,238.3,511.1,230.6,507.2,223.6,503.3,216.7,499.4,209.7,495,203,490.2,196.7,484,191.7,477.4,187.3,470.1,187.6,463.5,192.1,456.9,196.6,450.3,201,443.7,205.4,436,207.6]},{closed:!1,pts:[200,443,205.2,436.9,210.3,430.8,215.4,424.7,221,419,226.6,413.4,232.3,407.7,237.9,402.1,243.6,396.4,249.2,390.8,254.9,385.1,261,380,266.6,374.4,272.3,368.7,277.9,363.1,283.5,357.5,289.2,351.8,294.8,346.2,300.5,340.5,306.1,334.9,311.8,329.2,317.4,323.6,323.6,318.6,330.2,314.2,336.2,308.8,341.8,303.2,347.5,297.5,353.1,291.9,358.7,286.3,364.4,280.6,370,275,375.7,269.3,381.3,263.7,387,258,392.6,252.4,397.9,246.4,398.9,238.6,404.3,232.7,409.9,227.1,415.5,221.5,421.7,216.3,427.5,211,433.7,205.9,439.8,200.8,446.4,196.3,452.6,191.2,458.7,186.1,464.4,180.6,470,175]}],_o=[{route:0,phase:0,speed:3.2,size:[4.5,1.1,.55,.95]},{route:0,phase:1/3,speed:3.2,size:[4.5,1.1,.55,.95]},{route:0,phase:2/3,speed:3.2,size:[4.5,1.1,.55,.95]},{route:1,phase:.1,speed:3.2,size:[4.5,1.1,.55,.95]},{route:1,phase:.6,speed:3.2,size:[4.5,1.1,.55,.95]},{route:2,phase:.3,speed:5,size:[5,1.5,.7,1.4]}],yo=_o.length,xo=14,vo=6,nu=ec.map(i=>{let e=i.pts,t=e.length/2,n=[0];for(let s=1;s<=(i.closed?t:t-1);s++){let r=(s-1)%t,a=s%t;n.push(n[s-1]+Math.hypot(e[a*2]-e[r*2],e[a*2+1]-e[r*2+1]))}return n});function tu(i,e,t,n){let s=ec[i],r=s.pts,a=r.length/2,o=nu[i],l=o[o.length-1];e=s.closed?(e%l+l)%l:Math.min(Math.max(e,0),l-.001);let c=0;for(;c<o.length-2&&o[c+1]<=e;)c++;let d=(e-o[c])/Math.max(1e-6,o[c+1]-o[c]),m=h=>(s.closed?(h%a+a)%a:Math.min(Math.max(h,0),a-1))*2,u=m(c-1),f=m(c),x=m(c+1),b=m(c+2);for(let h=0;h<2;h++){let T=r[u+h],R=r[f+h],y=r[x+h],S=r[b+h];t[n+h]=.5*(2*R+(y-T)*d+(2*T-5*R+4*y-S)*d*d+(3*R-T-3*y+S)*d*d*d),t[n+2+h]=.5*(y-T+2*(2*T-5*R+4*y-S)*d+3*(3*R-T-3*y+S)*d*d)}let g=Math.hypot(t[n+2],t[n+3])||1;t[n+2]/=g,t[n+3]/=g}function vg(i,e,t){let n=(i+2*xo)/e,s=2*(n+vo),r=(t%s+s)%s,a=r>=n+vo;a&&(r-=n+vo);let o=2*xo/e,l=r>=n?i:r<o?e*r*r/(2*o):r>n-o?i-e*(n-r)**2/(2*o):xo+e*(r-o);return{s:a?i-l:l,back:a}}var iu=Float32Array.from(_o.flatMap(i=>i.size)),Xy=_o.map(i=>i.route===2?1:0);function su(i,e){return _o.forEach((t,n)=>{let s=nu[t.route],r=s[s.length-1];if(ec[t.route].closed)tu(t.route,t.phase*r+t.speed*i,e,n*4);else{let{s:a,back:o}=vg(r,t.speed,i+t.phase*2*((r+2*xo)/t.speed+vo));tu(t.route,a,e,n*4),o&&(e[n*4+2]*=-1,e[n*4+3]*=-1)}}),e}function au(i,e,t,n){try{i.extensions.has("KHR_parallel_shader_compile")?i.compileAsync(e,t,n??null).then(()=>ru(i),()=>{}):(i.compile(e,t,n??null),ru(i))}catch{}}function ru(i){for(let e of i.info.programs??[])e.getUniforms?.()}var kt=512,Kt=jh/(kt/2),bo=kt/2+1.5,ti=-6,Mo=58,lu=2.5,_g=-1,di=4,Yi={n:kt,cityM:lu,pitch:Kt,pocket:bo*Kt},yg=3,Mg=.35,bg=(i,e)=>Math.round((i?88:132)*(e>1?1.4:1)),Sg="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",tc=`
vec2 mid(ivec2 c) { return (vec2(c) + 0.5) / RES; }`,nc=`
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
}`,Eg=`
uniform highp sampler2D tRest; uniform highp sampler2D tSim;
uniform float uTime; uniform float uSink; uniform float uFloor; uniform float uBoatDip; uniform vec4 uLift;
${tc}
${nc}
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
}`,wg=`
uniform highp sampler2D tSrc;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy) * 4;
  float m = -1e4;
  for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) m = max(m, texelFetch(tSrc, c + ivec2(i, j), 0).r);
  gl_FragColor = vec4(m);
}`,Tg=`
uniform highp sampler2D tH; uniform highp sampler2D t4; uniform highp sampler2D t16; uniform highp sampler2D t64;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  gl_FragColor = vec4(texelFetch(tH, c, 0).r, texelFetch(t4, c / 4, 0).r, texelFetch(t16, c / 16, 0).r, texelFetch(t64, c / 64, 0).r);
}`,Ag=`
uniform highp sampler2D tSrc; uniform vec2 uDir; uniform float uTan; uniform float uStep; uniform int uInit;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  ivec2 q = ivec2(floor(vec2(c) + 0.5 + uDir * uStep));
  bool inside = all(greaterThanEqual(q, ivec2(0))) && all(lessThan(q, ivec2(NT)));
  // (the first pass reads the heights without the boats, the rest what it made; uStep is in texels)
  vec4 src = inside ? texelFetch(tSrc, q, 0) : vec4(0.0);
  float far = inside ? (uInit == 1 ? src.b : src.r) - uTan * uStep / RES : -1e4;
  gl_FragColor = vec4(uInit == 1 ? far : max(texelFetch(tSrc, c, 0).r, far));
}`,Rg=`
uniform highp sampler2D tSim; uniform highp sampler2D tH; uniform highp sampler2D tRest; uniform float uDt;
uniform vec4 uHand; uniform vec2 uHandV; uniform float uHandOn; uniform float uDip; uniform vec4 uDrops[6]; uniform float uBoatDip;
${tc}
${nc}
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
}`,Cg="void main() { gl_FragColor = vec4(0.0); }",Pg=`
uniform float uPitch;
varying vec3 vG;
void main() {
  vG = vec3(position.x / uPitch + 256.0, position.y / uPitch, position.z / uPitch + 256.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ig=`
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
uniform float uFlood[${bn.length}]; uniform vec2 uPicked;
varying vec3 vG;
${tc}
${nc}

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
}`,ui=(i,e=i)=>new Wt(i,e,{type:an,format:dn,minFilter:Ut,magFilter:Ut,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),ou=typeof location<"u"&&Number(new URLSearchParams(location.search).get("pins-debug"))||0;function cu(i){let{renderer:e}=i,t=e.extensions;if(!t.has("EXT_color_buffer_float")&&!t.has("EXT_color_buffer_half_float"))return null;let n=Ns?2:1,s=kt*n,r=(M,L)=>Math.floor(L*n)*s+Math.floor(M*n),a=new Float32Array(s*s*4),o=new Vi(a,s,s,dn,Mn);o.minFilter=o.magFilter=Ut;let l=new Float32Array(s*s),c={col:200.5,row:213.5,h:37.4},d=!1,m=!1,u=!0,f=-1,x=1,b=new Float32Array(0),g=!1,h=0,T=!0,R=!1,y=!0,S=-1,E=new Int32Array(0),C=bn.map(()=>null),v=0;async function w(M,L,I=s){for(let P=0;P<M;P+=I)if(L(P,Math.min(M,P+I)),!(performance.now()-v<6)){if(await new Promise(ne=>{let se=new MessageChannel;se.port1.onmessage=()=>{se.port1.close(),ne()},se.port2.postMessage(0)}),!u)throw new Error("left");v=performance.now()}}(async()=>{let M=fetch(i.marks).then(Je=>Je.ok?Je.blob():null).then(Je=>Je&&createImageBitmap(Je,{colorSpaceConversion:"none",premultiplyAlpha:"none"})).catch(()=>null),L=await fetch(i.city);if(!L.ok)throw new Error(`city: ${L.status}`);let I=await createImageBitmap(await L.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),P=document.createElement("canvas");P.width=P.height=s;let ne=P.getContext("2d",{willReadFrequently:!0});ne.drawImage(I,0,0),I.close();let se=ne.getImageData(0,0,s,s).data,le=0,ce=-1,ve=0,we=[];if(await w(s*s,(Je,It)=>{for(let Ce=Je;Ce<It;Ce++){let Ft=se[Ce*4+2];if(Ft&2){le++;let vt=(se[Ce*4]<<8|se[Ce*4+1])*128/65535,Gt=Ft&1&&vt<.5?_g:vt/lu;a[Ce*4]=Gt,a[Ce*4+1]=Ft&1&&vt<.5?2:1+.08*Math.min(5,Ft>>2),a[Ce*4+1]===2&&we.push(Ce),l[Ce]=Gt,Gt>ce&&(ce=Gt,ve=Ce)}else a[Ce*4]=ti,l[Ce]=ti}}),le!==go||ce<30||ce>45)throw new Error(`city: ${le} pins, tallest ${ce.toFixed(1)}`);let ze={col:(ve%s+.5)/n,row:(Math.floor(ve/s)+.5)/n,h:ce},Re=new Float32Array(le),at=7,We=0,Pe=1/0,Ne=-1/0,Ke=()=>(at=at*16807%2147483647)/2147483647;await w(s*s,(Je,It)=>{for(let Ce=Je;Ce<It;Ce++){let Ft=(Ce%s+.5)/n,vt=(Math.floor(Ce/s)+.5)/n,gn=.6+Math.hypot(Ft-ze.col,vt-ze.row)*.0062+(Ke()-.5)*.09;a[Ce*4+2]=gn,a[Ce*4+1]>.5&&(Re[We++]=gn,Pe=Math.min(Pe,gn),Ne=Math.max(Ne,gn))}});let ue=4096,et=ue/(Ne-Pe),He=new Uint32Array(ue+1),Pt=new Float32Array(le),Vt=Je=>Math.min(ue-1,Math.max(0,Math.floor((Je-Pe)*et)));await w(le,(Je,It)=>{for(let Ce=Je;Ce<It;Ce++)He[Vt(Re[Ce])+1]++});for(let Je=0;Je<ue;Je++)He[Je+1]+=He[Je];let mn=He.slice(0,ue);await w(le,(Je,It)=>{for(let Ce=Je;Ce<It;Ce++)Pt[mn[Vt(Re[Ce])]++]=Re[Ce]}),await w(ue,(Je,It)=>{for(let Ce=Je;Ce<It;Ce++)Pt.subarray(He[Ce],He[Ce+1]).sort()},64),await B(Ke);let kn=bn.map(()=>null),gt=await M;if(gt){ne.clearRect(0,0,s,s),ne.drawImage(gt,0,0),gt.close();let Je=ne.getImageData(0,0,s,s).data,It=bn.map(()=>[0,0,0,-1e9]);await w(s*s,(Ce,Ft)=>{for(let vt=Ce;vt<Ft;vt++){let Gt=a[vt*4+1],gn=Je[vt*4];if(gn>100&&(gn=0),!gn||gn>bn.length||Gt<.5||Gt>1.5)continue;a[vt*4+3]=-gn;let Bs=It[gn-1];Bs[0]++,Bs[1]+=(vt%s+.5)/n,Bs[2]+=(Math.floor(vt/s)+.5)/n,Bs[3]=Math.max(Bs[3],a[vt*4])}}),It.forEach(([Ce,Ft,vt,Gt],gn)=>{Ce&&(kn[gn]={x:Ft/Ce,z:vt/Ce,top:Gt,reach:0,pins:Ce})}),await w(s*s,(Ce,Ft)=>{for(let vt=Ce;vt<Ft;vt++){let Gt=a[vt*4+3]<-.5?kn[-a[vt*4+3]-1]:null;Gt&&(Gt.reach=Math.max(Gt.reach,Math.hypot((vt%s+.5)/n-Gt.x,(Math.floor(vt/s)+.5)/n-Gt.z)))}})}u&&(c=ze,b=Pt,E=Int32Array.from(we),kn.forEach((Je,It)=>C[It]=Je),o.needsUpdate=!0,d=!0,T=!0,i.invalidate())})().catch(M=>{u&&(m=!0,i.onFail(M),i.invalidate())});let N=new Uint8Array(s*s),U=new Vi(N,s,s,lr,rn);U.minFilter=U.magFilter=Rt;async function B(M){let L=async We=>{let Pe=new Uint8Array(s*s),Ne=new Uint8Array(s*s);return await w(s,(Ke,ue)=>{for(let et=Ke;et<ue;et++){let He=0,Pt=We(et*s)?1:0;for(let Vt=0;Vt<s;Vt++){let mn=Vt+1<s&&We(et*s+Vt+1)?1:0;Pe[et*s+Vt]=He|Pt|mn,He=Pt,Pt=mn}}},8),await w(s,(Ke,ue)=>{for(let et=Ke*s;et<ue*s;et++)Ne[et]=Pe[et]|(et>=s?Pe[et-s]:0)|(et+s<s*s?Pe[et+s]:0)},8),Ne},I=We=>a[We*4+1],P=We=>I(We)>.5&&I(We)<1.5,ne=We=>Math.abs(I(We)-1.32)<.02,se=await L(We=>P(We)&&!ne(We)&&a[We*4]>2),le=await L(We=>I(We)===2),ce=new Float32Array(s*s);await w(s*s,(We,Pe)=>{for(let Ne=We;Ne<Pe;Ne++){if(a[Ne*4+3]=0,!P(Ne)||a[Ne*4]>.4)continue;let Ke=(le[Ne]?.15:se[Ne]?.1:0)/n;Ke&&M()<Ke&&(a[Ne*4+3]=ce[Ne]=.6+.4*M())}});let ve=n,we=3*n,ze=[];for(let We=-we;We<=we;We++)ze.push(Math.exp(-(We*We)/(2*ve*ve)));let Re=2*Math.PI,at=new Float32Array(s*s);await w(s,(We,Pe)=>{for(let Ne=We;Ne<Pe;Ne++)for(let Ke=0;Ke<s;Ke++){let ue=0;for(let et=-we;et<=we;et++){let He=Ke+et;He>=0&&He<s&&(ue+=ce[Ne*s+He]*ze[et+we])}at[Ne*s+Ke]=ue}},8),await w(s,(We,Pe)=>{for(let Ne=We;Ne<Pe;Ne++)for(let Ke=0;Ke<s;Ke++){let ue=0;for(let et=-we;et<=we;et++){let He=Ne+et;He>=0&&He<s&&(ue+=at[He*s+Ke]*ze[et+we])}N[Ne*s+Ke]=Math.min(255,Math.round(ue/Re*2.5*255))}},8),U.needsUpdate=!0}let H=new An,D=new Jn(-1,1,1,-1,0,1),V=new sn;V.setAttribute("position",new Nt([-1,-1,0,3,-1,0,-1,3,0],3));let q=new St(V);q.frustumCulled=!1,H.add(q);let X={RES:n.toFixed(1),NT:String(s)},re=(M,L)=>new Jt({vertexShader:Sg,fragmentShader:M,uniforms:L,defines:X,depthTest:!1,depthWrite:!1}),Y=ui(s),Q=ui(s),j=ui(s),Fe=ui(s/4),Ue=ui(s/16),he=ui(s/64),Le=ui(s),Be=ui(s),J=ui(s),ee=[Y,Q],Ee=()=>Array.from({length:yo},()=>new Mt),Oe={uBoat:{value:Ee()},uBoatOn:{value:0},uBoatDip:{value:0},uBoatSize:{value:Ee().map((M,L)=>M.fromArray(iu,L*4))}},Me=re(Eg,{tRest:{value:o},tSim:{value:Y.texture},uTime:{value:0},uSink:{value:0},uFloor:{value:ti},uLift:{value:new Mt},...Oe}),Ze=re(wg,{tSrc:{value:null}}),mt=re(Tg,{tH:{value:j.texture},t4:{value:Fe.texture},t16:{value:Ue.texture},t64:{value:he.texture}}),Ve=re(Ag,{tSrc:{value:null},uDir:{value:new _e},uTan:{value:0},uStep:{value:1},uInit:{value:1}}),Qe=re(Rg,{tSim:{value:Y.texture},tH:{value:j.texture},tRest:{value:o},uDt:{value:1/120},uHand:{value:new Mt},uHandV:{value:new _e},uHandOn:{value:0},uDip:{value:.5},uDrops:{value:Array.from({length:6},()=>new Mt)},...Oe,uBoat:{value:Ee()}}),pt=re(Cg,{}),qe=(M,L)=>{q.material=M,e.setRenderTarget(L),e.render(H,D)};for(let M of[Qe,pt]){let L=e.getRenderTarget();q.material=M,e.setRenderTarget(Q),au(e,H,D),e.setRenderTarget(L)}let xt=new Ci(e),wt=null,At=(M,L=Kn)=>new Yn({color:M,side:L}),ft=(M,L,I)=>new it().setRGB(M,L,I,Wn);function bt(){let M=new An,L=[],I=se=>(L.push(se),M.add(se),se);I(new St(new Nn(8,6,8),At(ft(.004,.0042,.0046),Ot)));let P=(se,le,ce,ve)=>{let we=I(new St(new $n(se,le),At(ve,un)));we.position.set(...ce),we.lookAt(0,.05,0)};P(2.6,.5,[-1.3,.75,-1.6],ft(2.3,2.25,2.15)),P(1.4,1.4,[.3,1.8,.4],ft(.7,.7,.72));let ne=xt.fromScene(M,0,.01,20);return L.forEach(se=>{se.geometry.dispose(),se.material.dispose()}),ne}wt=bt();function O(){let M=new An,L=[],I=se=>(L.push(se),M.add(se),se);I(new St(new Nn(8,6,8),At(ft(.15,.148,.144),Ot)));let P=(se,le,ce,ve)=>{let we=I(new St(new $n(se,le),At(ve,un)));we.position.set(...ce),we.lookAt(0,.05,0)};P(3.2,3.2,[0,2.8,0],ft(1.5,1.48,1.45)),P(2.6,1.4,[-2.2,1.2,1.4],ft(1.9,1.87,1.82));let ne=xt.fromScene(M,0,.01,20);return L.forEach(se=>{se.geometry.dispose(),se.material.dispose()}),ne}let Ct=O(),ct=wt.texture.image.height,A=Math.log2(ct)-2,p={tMax:{value:Le.texture},tRest:{value:o},tShadow:{value:Be.texture},tSim:{value:Y.texture},tLamp:{value:U},envMap:{value:wt.texture},studioMap:{value:Ct.texture},uFill:{value:new z(0,1,0)},uFillColor:{value:new z},uNight:{value:0},uSky:{value:new z(1,1,1)},uGround:{value:new z},uDome:{value:new z},uGlow:{value:new z},uCamG:{value:new z},uGtoClip:{value:new yt},uLight:{value:new z(0,1,0)},uLightColor:{value:new z(10,10,10)},uSunDir:{value:new _e(0,1)},uTan:{value:1},uEnv:{value:4.5},uPix:{value:.001},uWell:{value:bo},uFloor:{value:ti},uTop:{value:Mo},uLit:{value:1},uSun:{value:1},uSwell:{value:0},uPitch:{value:Kt},uRiseT:{value:0},uSink:{value:0},uRoom:{value:0},uSpin:{value:new _e(1,0)},uWind:{value:0},uWindDir:{value:new _e(1,0)},uWindT:{value:0},uCloud:{value:0},uCloudAt:{value:new _e},uWet:{value:0},uBoat:Oe.uBoat,uBoatSize:Oe.uBoatSize,uBoatOn:Oe.uBoatOn,uFlood:{value:bn.map(M=>M.flood??0)},uPicked:{value:new _e}},k=new Jt({vertexShader:Pg,fragmentShader:Ig,uniforms:p,side:Ot,defines:{...X,STEPS:bg(i.phone,n),REFLECT_STEPS:56+16*(n-1),LAMP_K:(n*n).toFixed(1),FLOOR_G:ti.toFixed(1),...i.phone?{}:{REFLECT:1},...ou?{DEBUG:ou}:{},ENVMAP_TYPE_CUBE_UV:1,CUBEUV_TEXEL_WIDTH:1/(3*Math.max(2**A,112)),CUBEUV_TEXEL_HEIGHT:1/ct,CUBEUV_MAX_MIP:A.toFixed(1)}}),G=new Gi(1,1,1,96,1,!1),Z=bo*Kt/Math.cos(Math.PI/96);G.scale(Z,(Mo-ti+1)*Kt,Z),G.translate(0,(Mo+ti-1)/2*Kt,0);let ae=new St(G,k);ae.position.y=i.top;let fe=42,$=eu,te=Math.atan2(Math.sin(fe*Math.PI/180),-Math.cos(fe*Math.PI/180)),ge=Et.degToRad($)-te;ae.rotation.y=ge,ae.updateMatrixWorld();let Te=$l(i.at??new Date),me=i.at??new Date,pe=0,De=NaN,Ae=new z,$e=new z,F=new _e,xe=new _e(1e6,1e6),K=new z(0,1,0),de=0,ye=0,ie=0,Se=Kl(me),Ie=new _e(1,0),ut=0,ot=0;Kh().then(()=>{De=NaN,i.invalidate()});let Yt=2.95,Lt=(M,L,I)=>{let P=Et.degToRad(M-Yt),ne=Et.degToRad(L);return I.set(Math.sin(P)*Math.cos(ne),Math.sin(ne),-Math.cos(P)*Math.cos(ne))};function Os(M){let L=Date.now();if(M!==De||L-pe>=3e4){De=M,pe=L,me=new Date((i.at??new Date).valueOf()+M*36e5),Te=$l(me),Kl(me,Se),Lt(Te.az,Te.shadeEl,$e);let[ne,se,le]=Te.color,ce=Te.night;p.uLightColor.value.set(ne,se,le).multiplyScalar(1.5),p.uGround.value.set(ne*.038+.05*ce,se*.038+.028*ce,le*.038+.012*ce),p.uFillColor.value.set(3,3.3,4).multiplyScalar(.55*ce);let ve=Se.cloud;p.uSky.value.set(...Te.sky).lerp(new z(.8,.82,.86),.5*ve),p.uDome.value.set(.24,.3,.4).lerp(new z(.36,.37,.39),ve).multiplyScalar(Te.day*(1+.9*ve)),p.uGlow.value.set(.5,.36,.26).multiplyScalar(ce*(1+.8*ve)),p.uNight.value=ce;let we=Et.degToRad(Se.from+180-Yt);Ie.set(Math.sin(we),-Math.cos(we))}ye||ie?Lt(Te.az+ye,Math.max(Te.shadeEl+ie,Te.shadeEl*.5),Ae):Ae.copy($e),Ae.applyAxisAngle(K,-de),p.uLight.value.copy(Ae),Lt(305,11,p.uFill.value).applyAxisAngle(K,-de),p.uSpin.value.set(Math.cos(de),Math.sin(de)),p.uWindDir.value.copy(Ie).rotateAround(new _e,de);let I=Math.hypot(Ae.x,Ae.z),P=Math.max(Ae.y/I,.02);F.set(Ae.x/I/P,Ae.z/I/P),F.distanceTo(xe)*c.h*n>.4&&(y=!0)}let Ge={x:0,z:0,px:0,pz:0,depth:5,radius:9,on:!1,lastAt:-1e9,water:!1,wet:!1},Sn=null,zn={pins:0,water:0},Cn=new yt,En=new Hi,Ni=new z;function pn(M,L){if(!d)return null;Cn.copy(ae.matrixWorld).invert(),En.origin.setFromMatrixPosition(L.matrixWorld),Ni.set(M.x,M.y,.5).unproject(L),En.direction.copy(Ni).sub(En.origin).normalize(),En.applyMatrix4(Cn);let I=En.origin.clone().divideScalar(Kt).add(new z(kt/2,0,kt/2)),P=En.direction.clone().normalize();if(P.y>=0)return null;let ne=Math.max(0,(Mo-I.y)/P.y),se=(ti-I.y)/P.y,le=Zt;for(;ne<se;ne+=.5/n){let ce=I.x+P.x*ne,ve=I.y+P.y*ne,we=I.z+P.z*ne;if(ce<0||we<0||ce>=kt||we>=kt)continue;let ze=l[r(ce,we)];if(!(ze<=ti)&&ve<=ze*(1-le))return{x:ce,z:we}}return null}let Zt=0,fi=!1,W=-1e9,oe=(i.at??new Date).valueOf()/1e3%86400,ke=!1,nt=new Float32Array(yo*4),je=(M,L)=>{su(L,nt),M.forEach((I,P)=>I.fromArray(nt,P*4))};je(Oe.uBoat.value,oe);let st=[{id:0,y:0,v:0,to:0},{id:0,y:0,v:0,to:0}],ht=M=>M<-.5?(st[0].id===-M?st[0].y:0)+(st[1].id===-M?st[1].y:0):0,Dt=M=>l[M]+ht(a[M*4+3]);function Bt(M,L,I){f>=0&&(f=I?di:Math.min(di+1,f+L*x/yg));let P=Math.max(f,0),ne=d&&P<di;p.uRiseT.value=P,Zt!==S&&(S=Zt,T=!0);let se=Ge.on||M-Ge.lastAt<(Ge.water?14e3:4500),le=d&&!I&&Zt<.6&&P>=di*.6?Se.rain:0;le>.05&&(W=M);let ce=E.length>0&&M-W<8e3,ve=d&&Zt<.5&&P>=di*.75?1:0,we=Oe.uBoatOn;we.value=I?ve:we.value+(ve-we.value)*Math.min(1,L*1.2),Math.abs(we.value-ve)<.002&&(we.value=ve);let ze=we.value>0;ze!==ke&&(ke=ze,T=!0);let Re=e.getRenderTarget();if((se||ce||ze)&&!I){let Pe=Qe.uniforms.uDrops.value,Ne=le>.05?Math.min(6,le*2.2+.6):0;Qe.uniforms.uHandV.value.set(Ge.x-Ge.px,Ge.z-Ge.pz).multiplyScalar(Ge.on?1/Math.max(L,1/120):0);for(let Ke=1;Ke<=2;Ke++){let ue=Ke/2;Qe.uniforms.tSim.value=ee[h].texture,Qe.uniforms.uHand.value.set(Ge.px+(Ge.x-Ge.px)*ue,Ge.pz+(Ge.z-Ge.pz)*ue,Ge.depth,Ge.radius),Qe.uniforms.uHandOn.value=Ge.on?1:0,Qe.uniforms.uDip.value=Ge.depth<0?1.1:.5,Pe.forEach((et,He)=>{if(He>=Ne||Math.random()>Ne-He){et.z=0;return}let Pt=E[Math.floor(Math.random()*E.length)];et.set((Pt%s+Math.random())/n,(Math.floor(Pt/s)+Math.random())/n,30+50*Math.random(),0)}),ze&&(oe+=1/120,je(Qe.uniforms.uBoat.value,oe)),qe(Qe,ee[1-h]),h=1-h}g=!0,se?T=!0:ze&&(R=!0)}else g&&(qe(pt,ee[0]),qe(pt,ee[1]),h=0,g=!1,Ge.water=!1,T=!0);je(Oe.uBoat.value,oe),Oe.uBoatDip.value=g?Mg:0,p.tSim.value=ee[h].texture;let at=Ge.on&&!I?Math.hypot(Ge.x-Ge.px,Ge.z-Ge.pz)/Math.max(L,1/240):0;zn.water=Ge.wet?at:0,zn.pins=Ge.wet?0:at*Ge.radius*(Ge.depth<0?1.1:.12),Ge.px=Ge.x,Ge.pz=Ge.z,(ne||d&&!fi)&&(T=!0);let We=!1;for(let Pe of st)if(!(Pe.y===Pe.to&&Pe.v===0)){I&&(Pe.y=Pe.to,Pe.v=0);for(let Ne=0,Ke=Math.min(L,1/30)/2;Ne<2&&!I;Ne++)Pe.v+=(81*(Pe.to-Pe.y)-2*.42*9*Pe.v)*Ke,Pe.y+=Pe.v*Ke;Math.abs(Pe.to-Pe.y)<.003&&Math.abs(Pe.v)<.02?(Pe.y=Pe.to,Pe.v=0):We=!0,T=!0}if(Me.uniforms.uLift.value.set(st[0].id,st[0].y,st[1].id,st[1].y),p.uPicked.value.set(st[0].id,Math.min(1,Math.max(0,st[0].y/2))),(T||R)&&d&&(fi=P>=di,Me.uniforms.tSim.value=ee[h].texture,Me.uniforms.uTime.value=P,Me.uniforms.uSink.value=Zt,qe(Me,j),Ze.uniforms.tSrc.value=j.texture,qe(Ze,Fe),Ze.uniforms.tSrc.value=Fe.texture,qe(Ze,Ue),Ze.uniforms.tSrc.value=Ue.texture,qe(Ze,he),qe(mt,Le),T&&(y=!0)),y&&d){let Pe=Math.hypot(Ae.x,Ae.z);Ve.uniforms.uDir.value.set(Ae.x/Pe,Ae.z/Pe),Ve.uniforms.uTan.value=Ae.y/Pe,p.uSunDir.value.set(Ae.x/Pe,Ae.z/Pe),p.uTan.value=Ae.y/Pe,xe.copy(F),Ve.uniforms.tSrc.value=j.texture,Ve.uniforms.uStep.value=1,Ve.uniforms.uInit.value=1,qe(Ve,Be);let Ne=Be,Ke=J;Ve.uniforms.uInit.value=0;for(let ue=1;ue<s;ue*=2)Ve.uniforms.tSrc.value=Ne.texture,Ve.uniforms.uStep.value=ue,qe(Ve,Ke),[Ne,Ke]=[Ke,Ne];p.tShadow.value=Ne.texture,y=!1}return T=R=!1,e.setRenderTarget(Re),ne||se||ce||We||ze&&!I}let Ht={value:0},jt=new z,_=new yt().makeScale(Kt,Kt,Kt).multiply(new yt().makeTranslation(-kt/2,0,-kt/2));return{mesh:ae,get ready(){return d},turn(M){M!==de&&(de=M,ae.rotation.y=ge+de,ae.updateMatrixWorld())},tilt(M,L){M===ye&&L===ie||(ye=M,ie=L,i.invalidate())},relight(){De=NaN,i.invalidate()},get failed(){return m},get light(){return Te},get stir(){return zn},get risen(){if(f<0||!b.length)return 0;let M=f-.08,L=0,I=b.length;for(;L<I;){let P=L+I>>1;b[P]<=M?L=P+1:I=P}return L},landmark(M){return C[M]??null},get res(){return n},get under(){return Sn},lift(M,L){let I=M!==null&&C[M]?M+1:0;I&&st[1].id===I&&st.reverse();let[P,ne]=st;!I||P.id===I?P.to=I?L:0:(P.id&&(P.y!==0||P.v!==0)&&Object.assign(ne,P,{to:0}),Object.assign(P,{id:I,y:0,v:0,to:L})),i.invalidate()},arrive(){f<0&&d&&(f=0,i.invalidate())},rush(){x=7},get arriving(){return f>=0&&f<di},get intro(){return f},get lightTime(){return me},get weather(){return Se},gridToWorld(M,L,I,P){return P.set((M-kt/2)*Kt,L*Kt,(I-kt/2)*Kt).applyMatrix4(ae.matrixWorld)},worldToGrid(M,L){return Cn.copy(ae.matrixWorld).invert(),L.copy(M).applyMatrix4(Cn).divideScalar(Kt),L.set(L.x+kt/2,L.y,L.z+kt/2)},heightAt(M,L){return M<0||L<0||M>=kt||L>=kt?ti:Dt(r(M,L))*(1-Zt)},clear(M,L){let I=Math.hypot(L.x-M.x,L.z-M.z),P=Math.min(400,Math.ceil(I/1.5));for(let ne=2;ne<P;ne++){let se=ne/P,le=M.x+(L.x-M.x)*se,ce=M.z+(L.z-M.z)*se;if(le<0||ce<0||le>=kt||ce>=kt)break;if(Dt(r(le,ce))*(1-Zt)>M.y+(L.y-M.y)*se)return!1}return!0},update(M){Os(M.hours),Zt=M.sink;let L=Bt(M.now,M.dt,M.still);ae.visible=d,Ht.value=d?1:0,ae.updateMatrixWorld(),Cn.copy(ae.matrixWorld).invert(),jt.setFromMatrixPosition(M.camera.matrixWorld).applyMatrix4(Cn),p.uCamG.value.set(jt.x/Kt+kt/2,jt.y/Kt,jt.z/Kt+kt/2),p.uGtoClip.value.copy(M.camera.projectionMatrix).multiply(M.camera.matrixWorldInverse).multiply(ae.matrixWorld).multiply(_),p.uPix.value=2*Math.tan(Et.degToRad(M.camera.fov)/2)/Math.max(1,M.height)/(M.camera.zoom||1),p.uEnv.value=M.lit,p.uSun.value=1-Et.smoothstep(M.sink,.25,.75),p.uSink.value=M.sink,p.uRoom.value=M.room,p.uLit.value=1+.6*Te.day*(1-Et.smoothstep(M.sink,.55,1));let I=M.still?1:1-Math.exp(-M.dt*2.5);ut+=(Et.smoothstep(Se.wind,1,14)-ut)*I;let P=Et.smoothstep(Se.rain,.05,1.2);return ot+=(P-ot)*(P>ot?I:I*.3),p.uWind.value=ut,p.uWet.value=ot*(1-Et.smoothstep(M.sink,.3,.8)),p.uCloud.value+=(Se.cloud-p.uCloud.value)*I,M.still||(p.uSwell.value+=M.dt*(.6+.9*ut),p.uWindT.value+=M.dt*(.5+1.5*ut),p.uCloudAt.value.addScaledVector(p.uWindDir.value,-M.dt*(.012+.03*Se.wind))),L||!M.still&&(Se.cloud>.02||ut>.05)},pointer(M,L,I){let P=M&&I?pn(M,L):null,ne=performance.now(),se=P?a[r(P.x,P.z)*4+3]:0;return Sn=P&&se<-.5?Math.round(-se)-1:null,!P||Sn!==null&&I==="hover"?(Ge.on&&(Ge.on=!1,Ge.lastAt=ne,i.invalidate()),!!P):(Ge.on||(Ge.px=P.x,Ge.pz=P.z),Ge.x=P.x,Ge.z=P.z,Ge.on=!0,Ge.depth=I==="press"?-.6:6.5,Ge.wet=a[r(P.x,P.z)*4+1]>1.5,Ge.wet&&(Ge.water=!0),Ge.radius=I==="press"?15:10,Ge.lastAt=ne,i.invalidate(),!0)},patchPlinth(M,L){let I=M.onBeforeCompile;M.onBeforeCompile=(ne,se)=>{I.call(M,ne,se),ne.uniforms.uPocket=Ht,ne.vertexShader=ne.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPinW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vPinW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),ne.fragmentShader=ne.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPinW;
uniform float uPocket;`).replace("void main() {",`void main() {
  if (uPocket > 0.5 && vPinW.y > ${(L-8e-4).toFixed(4)} && length(vPinW.xz) < ${(bo*Kt).toFixed(5)}) discard;`)};let P=M.customProgramCacheKey();M.customProgramCacheKey=()=>"pin-pocket|"+P,M.needsUpdate=!0},dispose(){u=!1;for(let M of[Y,Q,j,Fe,Ue,he,Le,Be,J])M.dispose();for(let M of[Me,Ze,mt,Ve,Qe,pt,k])M.dispose();o.dispose(),U.dispose(),V.dispose(),G.dispose(),wt?.dispose(),Ct.dispose(),xt.dispose()}}}var Lg="varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",hu=`
uniform float uNear; uniform float uFar; uniform float uFocus; uniform float uCoc;
// Signed circle of confusion (px): + behind the focus, - in front, from a depth-buffer value. Behind the focus it
// grows at 0.6 of the lens's rate, so the city further off stays legible (a portrait blur hid
// everything beyond the nearest street); in front it keeps the full macro blur.
float coc(float depth) {
  float z = (uNear * uFar) / (uFar - depth * (uFar - uNear));
  float c = 1.0 - uFocus / z;
  return c > 0.0 ? 0.6 * uCoc * c : max(uCoc * c, -1.3 * uCoc);
}`,Dg=`
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 uTexel;
${hu}
void main() {
  vec2 o = uTexel * 0.5;
  vec3 c = texture2D(tColor, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, -o.y)).rgb
         + texture2D(tColor, vUv + vec2(-o.x, o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, o.y)).rgb;
  float d = min(min(texture2D(tDepth, vUv + vec2(-o.x, -o.y)).r, texture2D(tDepth, vUv + vec2(o.x, -o.y)).r),
                min(texture2D(tDepth, vUv + vec2(-o.x, o.y)).r, texture2D(tDepth, vUv + vec2(o.x, o.y)).r));
  gl_FragColor = vec4(c * 0.25, coc(d) * 0.5);            // half-size pixels
}`,Ng=`
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
}`,Ug=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel;
void main() {
  vec2 o = uTexel;
  vec4 c = texture2D(tSrc, vUv) * 4.0
    + (texture2D(tSrc, vUv + vec2(o.x, 0.0)) + texture2D(tSrc, vUv - vec2(o.x, 0.0)) + texture2D(tSrc, vUv + vec2(0.0, o.y)) + texture2D(tSrc, vUv - vec2(0.0, o.y))) * 2.0
    + texture2D(tSrc, vUv + o) + texture2D(tSrc, vUv - o) + texture2D(tSrc, vUv + vec2(o.x, -o.y)) + texture2D(tSrc, vUv + vec2(-o.x, o.y));
  gl_FragColor = c / 16.0;
}`,Fg=`
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
}`,Og=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel;
vec3 at(float x, float y) { return texture2D(tSrc, vUv + uTexel * vec2(x, y)).rgb; }
void main() {
  vec3 c = at(0.0, 0.0) * 0.125
    + (at(-2.0, 2.0) + at(2.0, 2.0) + at(-2.0, -2.0) + at(2.0, -2.0)) * 0.03125
    + (at(0.0, 2.0) + at(-2.0, 0.0) + at(2.0, 0.0) + at(0.0, -2.0)) * 0.0625
    + (at(-1.0, 1.0) + at(1.0, 1.0) + at(-1.0, -1.0) + at(1.0, -1.0)) * 0.125;
  gl_FragColor = vec4(c, 1.0);
}`,Bg=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uGain;
void main() {
  vec2 o = uTexel;
  vec3 c = texture2D(tSrc, vUv).rgb * 4.0
    + (texture2D(tSrc, vUv + vec2(o.x, 0.0)).rgb + texture2D(tSrc, vUv - vec2(o.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, o.y)).rgb + texture2D(tSrc, vUv - vec2(0.0, o.y)).rgb) * 2.0
    + texture2D(tSrc, vUv + o).rgb + texture2D(tSrc, vUv - o).rgb + texture2D(tSrc, vUv + vec2(o.x, -o.y)).rgb + texture2D(tSrc, vUv + vec2(-o.x, o.y)).rgb;
  gl_FragColor = vec4(c * (uGain / 16.0), 1.0);
}`,zg=`
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tDepth; uniform sampler2D tBlur; uniform vec2 uHalfTexel; uniform float uGrain; uniform float uTime;
uniform float uShade; uniform float uAspect; uniform vec2 uSize; uniform sampler2D tBloom; uniform vec2 uBloomTexel; uniform float uBloom;
${hu}
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
}`,kg=2.4,Hg=.7,Vg=1+.7+.49+.343+.2401,Gg=(()=>{let i=typeof location>"u"?null:new URLSearchParams(location.search).get("bloom");return i!==null&&Number.isFinite(Number(i))?Number(i):.3})()/Vg;function uu(i,e){let t=new Wt(1,1,{type:an,depthTexture:new Zn(1,1),samples:0,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),n=()=>new Wt(1,1,{type:an,depthBuffer:!1,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),s=n(),r=n(),a=n(),o=[n(),n(),n(),n(),n()],l={uNear:{value:.05},uFar:{value:40},uFocus:{value:1},uCoc:{value:0}},c=(U,B,H={})=>new Jt({vertexShader:Lg,fragmentShader:U,uniforms:B,depthTest:!1,depthWrite:!1,...H}),d=c(Dg,{tColor:{value:t.texture},tDepth:{value:t.depthTexture},uTexel:{value:new _e},...l}),m=c(Ng,{tDown:{value:s.texture},uTexel:{value:new _e},uRadius:{value:0}},{defines:{SAMPLES:e?30:52}}),u=c(Ug,{tSrc:{value:r.texture},uTexel:{value:new _e}}),f=c(Fg,{tDown:{value:s.texture},tSoft:{value:a.texture},uTexel:{value:new _e},uExposure:{value:1},uThreshold:{value:kg}}),x=c(Og,{tSrc:{value:null},uTexel:{value:new _e}}),b=c(Bg,{tSrc:{value:null},uTexel:{value:new _e},uGain:{value:Hg}},{blending:va,blendEquation:ci,blendSrc:sr,blendDst:sr}),g=c(zg,{tColor:{value:t.texture},tDepth:{value:t.depthTexture},tBlur:{value:a.texture},uHalfTexel:{value:new _e},uGrain:{value:0},uTime:{value:0},uShade:{value:0},uAspect:{value:1},uSize:{value:new _e(1,1)},...l,tBloom:{value:o[0].texture},uBloomTexel:{value:new _e},uBloom:{value:0}}),h=new An,T=new Jn(-1,1,1,-1,0,1),R=new sn;R.setAttribute("position",new Nt([-1,-1,0,3,-1,0,-1,3,0],3));let y=new St(R,g);y.frustumCulled=!1,h.add(y);let S=(U,B,H=!1)=>{y.material=U,i.setRenderTarget(B);let D=i.autoClear;i.autoClear=!H,i.render(h,T),i.autoClear=D},E=o.map(()=>new _e),C=1,v=1,w=1,N=new z;return{setSize(U,B,H=1){w=Math.max(1,Math.round(U*H));let D=Math.max(1,Math.round(B*H));C=U,v=B,t.setSize(w,D),s.setSize(Math.ceil(w/2),Math.ceil(D/2)),r.setSize(Math.ceil(w/2),Math.ceil(D/2)),a.setSize(Math.ceil(w/2),Math.ceil(D/2)),o.forEach((V,q)=>{V.setSize(Math.max(1,Math.ceil(w/(4<<q))),Math.max(1,Math.ceil(D/(4<<q)))),E[q].set(1/V.width,1/V.height)}),f.uniforms.uTexel.value.set(1/Math.ceil(w/2),1/Math.ceil(D/2)),g.uniforms.uBloomTexel.value.copy(E[0]),u.uniforms.uTexel.value.set(1/Math.ceil(w/2),1/Math.ceil(D/2)),d.uniforms.uTexel.value.set(1/w,1/D),m.uniforms.uTexel.value.set(1/Math.ceil(w/2),1/Math.ceil(D/2)),g.uniforms.uHalfTexel.value.set(1/Math.ceil(w/2),1/Math.ceil(D/2)),g.uniforms.uSize.value.set(w,D)},render(U,B,H,D,V){i.setRenderTarget(t),i.render(U,B),N.copy(H).applyMatrix4(B.matrixWorldInverse),l.uNear.value=B.near,l.uFar.value=B.far,l.uFocus.value=Math.max(.01,-N.z);let q=w/40*D;l.uCoc.value=q,m.uniforms.uRadius.value=q/2*1.3,g.uniforms.uGrain.value=.022*Math.min(1,D*1.5),g.uniforms.uTime.value=V,g.uniforms.uShade.value=Math.min(1,D*1.2),g.uniforms.uAspect.value=C/v,g.uniforms.uBloom.value=Gg*Math.min(1,D*8),S(d,s),S(m,r),S(u,a),f.uniforms.uExposure.value=i.toneMappingExposure,S(f,o[0]);for(let X=1;X<o.length;X++)x.uniforms.tSrc.value=o[X-1].texture,x.uniforms.uTexel.value=E[X-1],S(x,o[X]);for(let X=o.length-2;X>=0;X--)b.uniforms.tSrc.value=o[X+1].texture,b.uniforms.uTexel.value=E[X+1],S(b,o[X],!0);S(g,null)},within(U){let B=i.getRenderTarget();i.setRenderTarget(t);try{U()}finally{i.setRenderTarget(B)}},dispose(){t.depthTexture?.dispose(),t.dispose(),s.dispose(),r.dispose(),a.dispose(),o.forEach(U=>U.dispose()),d.dispose(),m.dispose(),u.dispose(),f.dispose(),x.dispose(),b.dispose(),g.dispose(),R.dispose()}}}var Wg=.3,Xg=1.75,qg=6,On=Math.PI/180;function du(i){let{canvas:e,phone:t}=i,n=new ho({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"});n.setPixelRatio(i.pixelRatio),n.toneMapping=rr,n.toneMappingExposure=Wg,n.outputColorSpace=cn,n.setClearColor(197380,1);let s=!0,r=0,a=i.still,o=!1,l=0,c=0,d=0,m=()=>{!r&&s&&(r=requestAnimationFrame(pn))},u=W=>{s&&(s=!1,cancelAnimationFrame(r),i.onFail(W))},f=cu({renderer:n,top:0,phone:t,at:i.at,city:i.city,marks:i.marks,invalidate:m,onFail:u});if(!f)throw n.dispose(),new Error("pintable: no float render targets");let x=f,b=uu(n,t),g=new An;g.add(x.mesh);let h=new nn(t?30:24,1,.02,20),T=Yi.n,R=Yi.pocket,y=Yi.n/512,S=x.res*x.res,E=new Ci(n),C=(()=>{let W=new An,oe=(st,ht,Dt)=>new it().setRGB(st,ht,Dt,Wn),ke=new St(new Nn(8,6,8),new Yn({color:oe(.004,.0042,.0046),side:Ot}));W.add(ke);let nt=(st,ht,Dt,Bt)=>{let Ht=new St(new $n(st,ht),new Yn({color:Bt,side:un}));Ht.position.set(...Dt),Ht.lookAt(0,.05,0),W.add(Ht)};nt(2.6,.5,[-1.3,.75,-1.6],oe(2.3,2.25,2.15)),nt(1.4,1.4,[.3,1.8,.4],oe(.7,.7,.72));let je=E.fromScene(W,0,.01,20);return W.traverse(st=>{let ht=st;ht.geometry?.dispose(),ht.material?.dispose()}),je})();g.environment=C.texture,g.environmentRotation.y=x.mesh.rotation.y,g.environmentIntensity=1;let v=R+.0085,w=[new _e(R,-.006),new _e(R,-6e-4),new _e(R+5e-4,-5e-5),new _e(R+9e-4,0)];for(let W=0;W<=10;W++){let oe=W/10*Math.PI/2;w.push(new _e(v-.0024+Math.sin(oe)*.0024,-.0024+Math.cos(oe)*.0024))}w.push(new _e(v,-.0075),new _e(v-8e-4,-.0083));let N=new Ms(w,192),U=new Ss({color:14277340,metalness:1,roughness:.16,clearcoat:.4,clearcoatRoughness:.08}),B=new St(N,U),H=new Ms([new _e(0,-.054),new _e(v-.004,-.054),new _e(v-8e-4,-.0505),new _e(v-8e-4,-.0083),new _e(R,-.0083)],192),D=new Ss({color:657931,metalness:.55,roughness:.4,clearcoat:.25,clearcoatRoughness:.35}),V=new St(H,D),q=new Gi(.022,.026,1.6,64,1,!0);q.translate(0,-.054-.8,0);let X=new bs({color:460552,metalness:.2,roughness:.7}),re=new St(q,X);g.add(B,V,re);let Y=new tr(16777215,0);g.add(Y,Y.target);let Q=T/2,j={x0:-1,x1:1,y0:-1,y1:1},Fe=()=>{let W=Math.tan(h.fov*On/2),oe=W*h.aspect,ke=R*(h.aspect<.8?1.14:1.08)/(oe*(j.x1-j.x0)/2),nt=R*(Math.sin(31*On)*1.08+.2)/(W*(j.y1-j.y0)/2);return Math.min(Math.max(ke,nt),4.2)},Ue=.09,he={b:148,el:31,dist:1,gx:Q,gz:Q},Le={...he},Be=1,J=(W,oe,ke)=>ke.set(Math.sin(W*On)*Math.cos(oe*On),Math.sin(oe*On),-Math.cos(W*On)*Math.cos(oe*On)).applyAxisAngle(ee,x.mesh.rotation.y),ee=new z(0,1,0),Ee=new z,Oe=new z,Me=new z,Ze=W=>Et.lerp(3,12,Et.smoothstep(Math.log(W),Math.log(.18),Math.log(.6)));function mt(W){W.dist=Et.clamp(W.dist,Ue,Be*1.2),W.el=Et.clamp(W.el,Ze(W.dist),82);let oe=T/2*.92*(1-Et.smoothstep(W.dist,Be*.45,Be*.95)),ke=W.gx-Q,nt=W.gz-Q,je=Math.hypot(ke,nt);je>oe&&(W.gx=Q+ke/je*oe,W.gz=Q+nt/je*oe)}let Ve={el:74,dist:1.25};function Qe(W){let oe=a?1:1-Math.exp(-W*7),ke=he.b-Le.b;ke-=360*Math.round(ke/360),Le.b+=ke*oe,Le.el+=(he.el-Le.el)*oe,Le.dist=Math.exp(Math.log(Le.dist)+(Math.log(he.dist)-Math.log(Le.dist))*oe),Le.gx+=(he.gx-Le.gx)*oe,Le.gz+=(he.gz-Le.gz)*oe;let nt=Math.abs(ke)>.01||Math.abs(he.el-Le.el)>.01||Math.abs(he.dist/Le.dist-1)>5e-4||Math.hypot(he.gx-Le.gx,he.gz-Le.gz)>.02;nt||Object.assign(Le,he);let{b:je,el:st,dist:ht}=Le;if(Z&&!G){let Bt=x.intro,Ht=Bt<0?0:Math.min(1,Bt/(di-.4)),jt=Ht*Ht*Ht*(Ht*(Ht*6-15)+10);st=Et.lerp(Ve.el,st,jt),ht=Math.exp(Et.lerp(Math.log(Ve.dist*Be),Math.log(ht),jt)),je=je-40*(1-jt)}x.gridToWorld(Le.gx,0,Le.gz,Ee),h.position.copy(Ee).addScaledVector(J(je,st,Oe),ht),h.lookAt(Ee),h.near=ht<.5?.003:.02,h.updateProjectionMatrix(),h.updateMatrixWorld();let Dt=ht<.6?x.heightAt(Le.gx,Le.gz)*Math.min(1,(.6-ht)/.3):0;return x.gridToWorld(Le.gx,Math.max(0,Dt)*.6,Le.gz,Me),nt}let pt=W=>Et.lerp(.95,.12,Et.smoothstep(Math.log(W),Math.log(.28),Math.log(Be))),qe=new _e,xt=new nr,wt=new _n(new z(0,1,0),0),At=new z,ft=new z,bt=1,O=1,Ct=(W,oe,ke=qe)=>ke.set(W/bt*2-1,-(oe/O*2-1));function ct(W,oe){return xt.setFromCamera(Ct(W,oe,new _e),h),!xt.ray.intersectPlane(wt,At)||Math.hypot(At.x-x.mesh.position.x,At.z-x.mesh.position.z)>R?null:(x.worldToGrid(At,ft),{x:ft.x,z:ft.z})}let A=new Map,p=null,k=!1,G=!1,Z=!1,ae=null,fe=()=>e.getBoundingClientRect();function $(){G||(G=!0,Z&&(Object.assign(Le,te()),x.rush()))}function te(){let W=h.position.clone().sub(Ee),oe=W.length(),ke=Math.asin(Et.clamp(W.y/oe,-1,1))/On;W.applyAxisAngle(ee,-x.mesh.rotation.y);let nt=Math.atan2(W.x,-W.z)/On,je={...Le,b:nt,el:ke,dist:oe};return Object.assign(he,{b:nt,el:ke,dist:oe}),je}function ge(W){if(!o)return;let oe=fe(),ke=W.clientX-oe.left,nt=W.clientY-oe.top;k=W.pointerType==="mouse",$(),e.setPointerCapture(W.pointerId);let je=!ct(ke,nt),st=W.button===2||W.ctrlKey||W.altKey||A.size>0||a||je;if(A.size>0)for(let ht of A.values())ht.mode="turn";A.set(W.pointerId,{mode:st?"turn":"press",x:ke,y:nt,id:W.pointerId,beside:je&&W.pointerType==="touch"}),A.size===2&&Te(),m()}function Te(){let[W,oe]=[...A.values()];ae={d:Math.hypot(W.x-oe.x,W.y-oe.y),a:Math.atan2(oe.y-W.y,oe.x-W.x),dist:he.dist,b:he.b}}function me(W){let oe=fe(),ke=W.clientX-oe.left,nt=W.clientY-oe.top,je=A.get(W.pointerId);if(!je){W.pointerType==="mouse"&&(p={x:ke,y:nt},k=!0,m());return}let st=ke-je.x,ht=nt-je.y;if(je.x=ke,je.y=nt,A.size===2&&ae){let[Dt,Bt]=[...A.values()],Ht=Math.hypot(Dt.x-Bt.x,Dt.y-Bt.y),jt=Math.atan2(Bt.y-Dt.y,Bt.x-Dt.x),_=ae.d/Math.max(Ht,1);Ae((Dt.x+Bt.x)/2,(Dt.y+Bt.y)/2,ae.dist*_/he.dist),he.b=ae.b+(jt-ae.a)/On,mt(he)}else je.mode==="turn"&&(he.b-=st*.28,je.beside||(he.el+=ht*.2),mt(he));m()}function pe(W){A.delete(W.pointerId),A.size<2&&(ae=null),W.pointerType!=="mouse"&&(p=null),m()}function De(W){W.pointerType==="mouse"&&!A.size&&(p=null,m())}function Ae(W,oe,ke){let nt=he.dist;he.dist*=ke,mt(he);let je=he.dist/nt,st=ct(W,oe);if(st&&je<1)he.gx+=(st.x-he.gx)*(1-je),he.gz+=(st.z-he.gz)*(1-je);else if(je>1){let ht=Math.min(1,(je-1)*1.6);he.gx+=(Q-he.gx)*ht*Et.smoothstep(he.dist,Be*.35,Be*.9),he.gz+=(Q-he.gz)*ht*Et.smoothstep(he.dist,Be*.35,Be*.9)}mt(he)}function $e(W){if(!o)return;W.preventDefault(),$();let oe=fe(),ke=W.clientX-oe.left,nt=W.clientY-oe.top,je=W.deltaMode===1?16:W.deltaMode===2?O:1;!W.ctrlKey&&Math.abs(W.deltaX)>Math.abs(W.deltaY)*1.2?(he.b-=W.deltaX*je*.12,mt(he)):Ae(ke,nt,Math.exp(W.deltaY*je*(W.ctrlKey?.01:.0016))),m()}function F(W){if(!o)return;let oe=fe(),ke=ct(W.clientX-oe.left,W.clientY-oe.top);ke&&($(),he.gx=ke.x,he.gz=ke.z,he.dist=Math.min(he.dist,.3),mt(he),m())}let xe=W=>W.preventDefault(),K=!1;function de(W){if(!o)return;let oe=W.touches,ke=fe();K=oe.length>1||!!ct(oe[0].clientX-ke.left,oe[0].clientY-ke.top),K&&W.preventDefault()}let ye=W=>{(K||W.touches.length>1)&&W.cancelable&&W.preventDefault()};e.addEventListener("touchstart",de,{passive:!1}),e.addEventListener("touchmove",ye,{passive:!1}),e.addEventListener("pointerdown",ge),e.addEventListener("pointermove",me),e.addEventListener("pointerup",pe),e.addEventListener("pointercancel",pe),e.addEventListener("pointerleave",De),e.addEventListener("wheel",$e,{passive:!1}),e.addEventListener("dblclick",F),e.addEventListener("contextmenu",xe);let ie=W=>{W.preventDefault(),u(new Error("WebGL context lost"))};e.addEventListener("webglcontextlost",ie);let Se=null,Ie=null,ut=()=>Xg/Yi.cityM,ot=()=>qg/Yi.cityM;function Yt(W){let oe=Se??W;if(oe===Ie)return;Ie=oe,x.lift(oe,oe===null?0:oe===Se?ot():ut());let ke=oe===null?null:x.landmark(oe);ke&&Sn?.on&&Sn.burst(Math.min(90,ke.pins/(y*y*6*S)),.7,0)}let Lt=new z;function Os(){let W=Se??x.under;if(W===null||!bn[W]?.fact||!x.landmark(W)){i.onLabel(null,0,0);return}let oe=x.landmark(W);if(x.gridToWorld(oe.x,oe.top+(W===Se?ot():ut())+3*y,oe.z,Lt),Lt.project(h),Lt.z>1||Math.abs(Lt.x)>1.05||Math.abs(Lt.y)>1.05){i.onLabel(null,0,0);return}i.onLabel(W,(Lt.x*.5+.5)*bt,(.5-Lt.y*.5)*O)}let Ge=0,Sn=null,zn=0,Cn="",En=new _e;function Ni(W,oe){x.ready&&!o&&(o=!0,i.onReady()),o&&x.intro<0&&x.arrive(),Z=x.arriving&&!a;let ke=Qe(W),nt=[...A.values()].find(M=>M.mode==="press"),je=!1;a||!o?x.pointer(null,h,null):nt?je=x.pointer(Ct(nt.x,nt.y,En),h,"press"):p&&k&&!A.size?je=x.pointer(Ct(p.x,p.y,En),h,"hover"):x.pointer(null,h,null),o&&(a||!Z)&&Yt(je&&!nt?x.under:null),e.style.cursor=A.size?nt?"grabbing":"move":je?"pointer":"grab";let st=x.update({now:oe,dt:W,camera:h,sink:0,lit:1,room:.35,still:a,height:O,hours:Ge}),ht=x.light;J(ht.az-2.95,Math.max(ht.el,1.5),Y.position),Y.position.multiplyScalar(3);let Dt=(ht.color[0]+ht.color[1]+ht.color[2])/3;Y.color.setRGB(ht.color[0]/Math.max(Dt,.001),ht.color[1]/Math.max(Dt,.001),ht.color[2]/Math.max(Dt,.001),Wn),Y.intensity=Dt*.9*(1-.8*(x.weather.cloud>.85?1:0));let Bt=x.risen;if(Sn?.on){let M=nt?nt.x/bt*2-1:p?p.x/bt*2-1:0;Sn.feed(x.stir.pins+Math.max(0,Bt-zn)/Math.max(W,1/120)*.02/(y*y*S),x.stir.water,M,W)}zn=Bt,Os();let Ht=x.weather,jt=x.lightTime,_=`${Math.round(Bt/997)}|${Z}|${ht.kind}${ht.az.toFixed(0)}/${ht.el.toFixed(0)}|${Math.floor(jt.valueOf()/6e4)}|${jl(Ht)}|${Ql()}|${x.under}`;return _!==Cn&&(Cn=_,i.onNews({risen:Bt,arriving:Z,light:ht,at:jt,weather:jl(Ht),source:Ql(),under:x.under})),st||ke||Z||A.size>0}function pn(W){if(r=0,!s)return;let oe=W-l;if(l&&oe<1e3/60-3){r=requestAnimationFrame(pn);return}let ke=l?Math.min(.05,(W-c)/1e3):1/60;l=l&&oe<1e3/30?l+1e3/60:W,c=W,a||(d+=ke);let nt=Ni(ke,W);x.ready?b.render(g,h,Me,pt(Le.dist),d):(n.setRenderTarget(null),n.clear()),i.onFrame?.(W,1e3/60),nt||!x.ready?r=requestAnimationFrame(pn):l=0}function Zt(){let W=Math.max(1,e.clientWidth),oe=Math.max(1,e.clientHeight);bt=W,O=oe,n.setSize(W,oe,!1),h.aspect=W/oe,h.fov=W<700?30:24,j=i.region?.(W,oe)??{x0:-1,x1:1,y0:-1,y1:1},h.setViewOffset(W,oe,-(j.x0+j.x1)/2*(W/2),(j.y0+j.y1)/2*(oe/2),W,oe),h.updateProjectionMatrix();let ke=Be;Be=Fe(),ke!==Be&&o&&(he.dist*=Be/ke,Le.dist*=Be/ke),mt(he);let nt=Math.tan(h.fov*On/2),je=a?he.dist:Ve.dist*Be;i.onFit?.(((j.x0+j.x1)/2+1)/2*W,(1-(j.y0+j.y1)/2)/2*oe,R/(je*nt)*oe);let st=n.getPixelRatio();b.setSize(Math.round(W*st),Math.round(oe*st),Math.min(1,1.5/st)),m()}Be=1,Zt(),he.dist=Be,Object.assign(Le,he);let fi=new ResizeObserver(Zt);return fi.observe(e),m(),{get ready(){return o},get places(){return bn},setMoment(W){Ge=(W.valueOf()-i.at.valueOf())/36e5,m()},setSky(W){Qh(W),x.relight(),m()},choose(W){$(),Se=W;let oe=W===null?null:x.landmark(W);oe&&(he.gx=oe.x,he.gz=oe.z,he.dist=Math.min(he.dist,Et.clamp(oe.reach*Yi.pitch*7,.28,.6)),he.el=Math.max(he.el,24),mt(he)),Ie=-1,Yt(null),m()},home(){$(),Se=null,Ie=-1,Yt(null),Object.assign(he,{b:he.b,el:31,dist:Be,gx:Q,gz:Q}),m()},key(W){if(!o)return!1;let oe=W==="ArrowLeft"?[-8,0,1]:W==="ArrowRight"?[8,0,1]:W==="ArrowUp"?[0,5,1]:W==="ArrowDown"?[0,-5,1]:W==="+"||W==="="?[0,0,.8]:W==="-"||W==="_"?[0,0,1.25]:null;return oe?($(),he.b+=oe[0],he.el+=oe[1],he.dist*=oe[2],mt(he),m(),!0):!1},setSound(W){Sn=W},setStill(W){a=W,W&&A.clear(),m()},setPixelRatio(W){n.setPixelRatio(W),Zt()},refit(){Zt()},dispose(){s=!1,cancelAnimationFrame(r),fi.disconnect(),e.removeEventListener("touchstart",de),e.removeEventListener("touchmove",ye),e.removeEventListener("pointerdown",ge),e.removeEventListener("pointermove",me),e.removeEventListener("pointerup",pe),e.removeEventListener("pointercancel",pe),e.removeEventListener("pointerleave",De),e.removeEventListener("wheel",$e),e.removeEventListener("dblclick",F),e.removeEventListener("contextmenu",xe),e.removeEventListener("webglcontextlost",ie),x.dispose(),b.dispose(),C.dispose(),E.dispose(),N.dispose(),H.dispose(),q.dispose(),U.dispose(),D.dispose(),X.dispose(),n.dispose()}}}function fu(){let i=null,e=null,t=!1,n=!1,s=[],r=null,a=null,o=0,l=[],c=f=>{let x=f.sampleRate,b=[];for(let g=0;g<24;g++){let h=Math.round(x*.07),T=f.createBuffer(1,h,x),R=T.getChannelData(0),y=2400+Math.random()*2600,S=x*(.006+Math.random()*.024),E=[[y,1,S],[y*2.76,.45,S*.55],[y*5.4,.2,S*.3]];for(let[C,v,w]of E){let N=2*Math.PI*C/x,U=Math.random()*6.283;for(let B=0;B<h;B++)R[B]+=v*Math.exp(-B/w)*Math.sin(N*B+U)}for(let C=0;C<x*.001;C++)R[C]+=(Math.random()*2-1)*.8*(1-C/(x*.001));b.push(T)}return b},d=f=>{s=c(f),e=f.createGain(),e.gain.value=0;let x=f.createDynamicsCompressor();x.threshold.value=-14,x.ratio.value=5,x.attack.value=.003,x.release.value=.2,e.connect(x).connect(f.destination);let b=f.createBuffer(1,f.sampleRate*4,f.sampleRate),g=b.getChannelData(0);for(let T=0;T<g.length;T++)g[T]=Math.random()*2-1;let h=(T,R,y)=>{let S=f.createBufferSource();S.buffer=b,S.loop=!0;let E=f.createBiquadFilter();E.type=T,E.frequency.value=R,E.Q.value=y;let C=f.createGain(),v=f.createStereoPanner();return C.gain.value=0,S.connect(E).connect(C).connect(v).connect(e),S.start(0,Math.random()*4),{gain:C,pan:v,filter:E}};r=h("bandpass",4200,.9),a=h("bandpass",700,.7)},m=(f,x,b)=>{if(!i||!e)return;let g=i.createBufferSource(),h=i.createGain(),T=i.createStereoPanner();g.buffer=s[Math.floor(Math.random()*s.length)],g.playbackRate.value=.82+Math.random()*.4,h.gain.value=x*(.25+.75*Math.random()**2),T.pan.value=Math.max(-1,Math.min(1,b+(Math.random()-.5)*.5)),g.connect(h).connect(T).connect(e),g.start(f)},u=()=>{!i||!t||(document.hidden?i.suspend():i.resume())};return document.addEventListener("visibilitychange",u),{get on(){return t},set(f){if(!(n||f===t)){if(t=f,t)i||(i=new AudioContext,d(i)),i.resume(),e.gain.setTargetAtTime(.8,i.currentTime,.15);else if(i&&e){e.gain.setTargetAtTime(0,i.currentTime,.08);let x=i;setTimeout(()=>{t||x.suspend()},600)}}},feed(f,x,b,g){if(!t||!i||i.state!=="running"||!r||!a)return;let h=i.currentTime,T=Math.min(g,.1),R=Math.max(0,f);for(let C=l.length-1;C>=0;C--){let v=l[C];if(h>=v.until){l.splice(C,1);continue}R+=v.n,b=b*.5+v.pan*.5}o+=Math.min(R,260)*T;let y=.5/Math.sqrt(1+R/40);for(;o>=1;o--)m(h+.03+Math.random()*T,y,b);let S=h+.01;r.gain.gain.cancelScheduledValues(S),r.gain.gain.setTargetAtTime(Math.min(.5,Math.max(0,R-260*.6)/1500),S,.05),r.gain.gain.setTargetAtTime(0,S+.15,.1),r.pan.pan.setTargetAtTime(b*.7,S,.05);let E=Math.min(1,x/30);a.gain.gain.cancelScheduledValues(S),a.gain.gain.setTargetAtTime(.45*E**.8,S,.06),a.gain.gain.setTargetAtTime(0,S+.2,.15),a.filter.frequency.setTargetAtTime(500+1600*E,S,.08),a.pan.pan.setTargetAtTime(b*.7,S,.05)},burst(f,x,b=0){!t||!i||l.push({n:f/Math.max(.05,x),until:i.currentTime+x,pan:b})},dispose(){n=!0,t=!1,document.removeEventListener("visibilitychange",u),i?.close(),i=null}}}var Yg="Europe/Copenhagen",Zg=new Intl.DateTimeFormat("en-GB",{timeZone:Yg,year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23"});function ic(i){let e=Object.fromEntries(Zg.formatToParts(new Date(i)).map(t=>[t.type,Number(t.value)]));return{y:e.year,m:e.month-1,d:e.day,min:e.hour*60+e.minute,s:e.second}}function sc(i,e,t,n){let s=Date.UTC(i,e,t,0,n),r=l=>{let c=ic(l);return Date.UTC(c.y,c.m,c.d,0,c.min,c.s)-Math.floor(l/1e3)*1e3},a=s-r(s),o=s-r(a);return o!==a&&(a=o),new Date(a)}var So=i=>`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(Math.round(i%60)).padStart(2,"0")}`,$g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Jg=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mu=(i,e,t)=>`${$g[new Date(Date.UTC(i,e,t)).getUTCDay()]} ${t} ${Jg[e]}`;function gu(i,e,t){let n=r=>Zl(sc(i,e,t,r)).el+.83,s=[];for(let r=0;r<1440;r+=20){let a=r+20;if(Math.sign(n(r))===Math.sign(n(a)))continue;let o=r,l=a;for(let c=0;c<12;c++){let d=(o+l)/2;Math.sign(n(d))===Math.sign(n(o))?o=d:l=d}s.push(Math.round((o+l)/2))}return s}var Kg=["north","north-east","east","south-east","south","south-west","west","north-west"],pu=i=>Kg[Math.round((i%360+360)%360/45)%8];function xu(i){return i?i.kind==="sun"?`Sun ${Math.max(0,Math.round(i.el))}\xB0 ${pu(i.az)}`:i.kind==="moon"?`Moon ${Math.round(i.el)}\xB0 ${pu(i.az)}`:"Night":""}var Qg=0;function vu(i){let e=`dial-${++Qg}`,t=i.value,n=!1,s=document.createElement("div");s.className="dial",s.innerHTML=`<p class="dial-head"><span class="dial-label" id="${e}"></span><span class="dial-value"></span><span class="dial-note" hidden></span></p>
    <div class="dial-track" role="slider" tabindex="0" aria-labelledby="${e}" aria-valuemin="${i.min}" aria-valuemax="${i.max}">
      <div class="dial-scale"></div><span class="dial-needle" aria-hidden="true"></span></div>`;let r=R=>s.querySelector(R);r(".dial-label").textContent=i.label;let a=r(".dial-value"),o=r(".dial-note"),l=r(".dial-track"),c=r(".dial-scale"),d=Math.round((i.max-i.min)/i.step),m=i.every??10,u="";for(let R=0;R<=d;R+=i.draw??1)u+=`<i class="${R%m===0?"dial-tick dial-tick-long":"dial-tick"}" style="left:${R*i.gap}px"></i>`;let f=R=>{c.innerHTML=u+R.map(y=>`<b class="dial-mark" style="left:${(y-i.min)/i.step*i.gap}px"></b>`).join("")};f(i.marks??[]);let x=R=>Math.min(i.max,Math.max(i.min,Math.round(R/i.step)*i.step));function b(){a.textContent=i.format(t);let R=i.note?.(t)??"";o.hidden=!R,o.textContent=R,l.setAttribute("aria-valuenow",String(t)),l.setAttribute("aria-valuetext",(i.spoken??i.format)(t)),c.style.transform=`translate3d(${-((t-i.min)/i.step)*i.gap}px,0,0)`}function g(R){let y=x(R);y!==t&&(t=y,b(),i.onChange(t))}let h=null;l.addEventListener("pointerdown",R=>{n||(l.setPointerCapture(R.pointerId),h={id:R.pointerId,x:R.clientX,v:t},s.dataset.dragging="")}),l.addEventListener("pointermove",R=>{h&&h.id===R.pointerId&&g(h.v-(R.clientX-h.x)/i.gap*i.step)});let T=()=>{h=null,delete s.dataset.dragging};return l.addEventListener("pointerup",T),l.addEventListener("pointercancel",T),l.addEventListener("wheel",R=>{if(n)return;R.preventDefault();let y=Math.abs(R.deltaX)>Math.abs(R.deltaY)?R.deltaX:R.deltaY;g(t+Math.sign(y)*i.step)},{passive:!1}),l.addEventListener("keydown",R=>{if(n)return;let y=R.key,S=i.step*m,E=y==="ArrowRight"||y==="ArrowUp"?t+i.step:y==="ArrowLeft"||y==="ArrowDown"?t-i.step:y==="PageUp"?t+S:y==="PageDown"?t-S:y==="Home"?i.min:y==="End"?i.max:null;E!==null&&(R.preventDefault(),g(E))}),b(),{el:s,get value(){return t},setMarks(R){f(R)},refresh(){b()},setDisabled(R){n=R,l.tabIndex=R?-1:0,R?(l.setAttribute("aria-disabled","true"),s.dataset.disabled=""):(l.removeAttribute("aria-disabled"),delete s.dataset.disabled)}}}var Rn=i=>document.querySelector(i),Fs=Rn(".ps"),rc=Rn(".ps canvas"),Zi=Rn(".ps-label"),_u=Rn(".ps-read"),jg=Rn(".ps-hint"),ac=matchMedia("(prefers-reduced-motion: reduce)").matches,Mu=matchMedia("(pointer: coarse)").matches;Rn(".ps-count").textContent=go.toLocaleString("en-GB");var Us=ic(Date.now()),Li=[{label:"Today",y:Us.y,m:Us.m,d:Us.d},{label:"21 June",y:Us.y,m:5,d:21},{label:"21 December",y:Us.y,m:11,d:21}],Di=0,Ao=Math.round(Us.min/5)*5,Ji=null,Bn=null,oc=()=>sc(Li[Di].y,Li[Di].m,Li[Di].d,Ao),bu=()=>gu(Li[Di].y,Li[Di].m,Li[Di].d).map(i=>Math.round(i/5)*5),lc=vu({label:"Hour",value:Ao,min:0,max:1435,step:5,gap:2,every:12,draw:3,marks:bu(),format:So,spoken:i=>`${So(i)} in Copenhagen`,note:()=>xu(Ji?.light??null),onChange:i=>{Ao=i,Bn?.setMoment(oc()),cc()}});Rn(".ps-dials").prepend(lc.el);function Su(i,e,t){let n=Rn(i);e.forEach((s,r)=>{let a=document.createElement("button");a.type="button",a.className="ps-chip",a.setAttribute("role","radio"),a.textContent=s,a.setAttribute("aria-checked",String(r===0)),a.addEventListener("click",()=>{n.querySelectorAll("button").forEach((o,l)=>o.setAttribute("aria-checked",String(l===r))),t(r)}),n.append(a)})}Su(".ps-day",Li.map(i=>i.label),i=>{Di=i,lc.setMarks(bu()),Bn?.setMoment(oc()),cc()});var ex=[null,"clear","rain","storm"];Su(".ps-sky",["Forecast","Clear","Rain","Storm"],i=>Bn?.setSky(ex[i]));function cc(){let i=Li[Di];if(!Ji){_u.textContent="";return}_u.innerHTML=Ji.arriving?`<span>${Ji.risen.toLocaleString("en-GB")} pins</span>`:`<span>${mu(i.y,i.m,i.d)} \xB7 ${So(Ao)}</span><span>${Ji.weather}${Ji.source==="met"?" \xB7 MET Norway":""}</span>`}var wo=Rn(".ps-places");bn.forEach((i,e)=>{if(i.kind!=="building"||!i.fact)return;let t=document.createElement("option");t.value=String(e),t.textContent=i.name,wo.append(t)});wo.addEventListener("change",()=>{wo.value===""?Bn?.home():Bn?.choose(Number(wo.value))});var Eo=null,$i=!1,To=Rn(".ps-sound");To.addEventListener("click",()=>{Eo||(Eo=fu()),$i=!$i,Eo.set($i),Bn?.setSound($i?Eo:null),To.setAttribute("aria-pressed",String($i)),To.textContent=$i?"Sound on":"Sound off"});document.addEventListener("visibilitychange",()=>{document.hidden&&$i&&To.click()});jg.textContent=ac?"Motion is off: set the hour, the day and the sky.":Mu?"Press the pins \xB7 two fingers turn the table and go closer":"Press the pins \xB7 drag beside the table or right-drag to turn it \xB7 scroll to go closer";var tx=(i,e)=>{let t=rc.getBoundingClientRect(),n=l=>1-2*(l-t.top)/e,s=l=>-1+2*(l-t.left)/i,r=Rn(".ps-head").getBoundingClientRect(),a=Rn(".ps-dials").getBoundingClientRect(),o=n(a.top-14);return e>i*1.1?{x0:-1,x1:1,y0:o,y1:n(r.bottom+10)}:{x0:s(r.right+24),x1:1,y0:o,y1:n(40)}},yu=()=>{Fs.dataset.gl="off"};try{Bn=du({canvas:rc,city:Ns?"city-fine.png":"city.png",marks:Ns?"landmarks-fine.png":"landmarks.png",phone:matchMedia("(max-width: 700px)").matches,pixelRatio:Math.min(devicePixelRatio||1,Mu?1.5:2),still:ac,at:new Date,region:tx,onReady:()=>{Fs.dataset.gl="on",document.fonts?.ready.then(()=>Bn?.refit())},onFail:yu,onFit:(i,e,t)=>{Fs.style.setProperty("--ring-x",`${i|0}px`),Fs.style.setProperty("--ring-y",`${e|0}px`),Fs.style.setProperty("--ring-d",`${t|0}px`)},onNews:i=>{Ji=i,lc.refresh(),cc()},onLabel:(i,e,t)=>{if(Zi.hidden=i===null,i===null)return;Zi.style.transform=`translate3d(${e.toFixed(1)}px,${t.toFixed(1)}px,0)`;let n=bn[i];Zi.dataset.at!==String(i)&&(Zi.dataset.at=String(i),Zi.innerHTML="<b></b><span></span>",Zi.querySelector("b").textContent=n.name,Zi.querySelector("span").textContent=n.fact??"")}}),Bn.setMoment(oc())}catch{yu()}var nx=new IntersectionObserver(([i])=>Bn?.setStill(ac||!i.isIntersecting),{threshold:.05});nx.observe(Fs);rc.parentElement.addEventListener("keydown",i=>{Bn?.key(i.key)&&i.preventDefault()});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
