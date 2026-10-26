var qc=0,dl=1,Yc=2;var mr=1,Zc=2,Fs=3,si=0,Ht=1,mn=2,ri=0,Os=1,fl=2,pl=3,ml=4,Ca=5;var _i=100,$c=101,Jc=102,Kc=103,jc=104,Qc=200,gr=201,eh=202,th=203,gl=204,xl=205,nh=206,ih=207,sh=208,rh=209,ah=210,oh=211,lh=212,ch=213,hh=214,jr=0,Qr=1,ea=2,Es=3,ta=4,na=5,ia=6,sa=7,vl=0,uh=1,dh=2,Vn=0,_l=1,yl=2,Ml=3,bl=4,Sl=5,xr=6,El=7;var wl=300,Ui=301,ts=302,Pa=303,Ia=304,vr=306,ra=1e3,$n=1001,aa=1002,Ut=1003,fh=1004;var _r=1005;var Ft=1006,La=1007;var Fi=1008;var nn=1009,Tl=1010,Al=1011,Bs=1012,Da=1013,Gn=1014,Tn=1015,hn=1016,Na=1017,Ua=1018,zs=1020,Rl=35902,Cl=35899,Pl=1021,Il=1022,gn=1023,Jn=1026,Oi=1027,ks=1028,Fa=1029,Bi=1030,Oa=1031;var Ba=1033,yr=33776,Mr=33777,br=33778,Sr=33779,za=35840,ka=35841,Ha=35842,Va=35843,Ga=36196,Wa=37492,Xa=37496,qa=37488,Ya=37489,Er=37490,Za=37491,$a=37808,Ja=37809,Ka=37810,ja=37811,Qa=37812,eo=37813,to=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,co=36492,ho=36494,uo=36495,fo=36283,po=36284,wr=36285,mo=36286;var ir=2300,oa=2301,Jr=2302,sl=2303,rl=2400,al=2401,ol=2402;var ph=3200;var go=0,mh=1,yi="",fn="srgb",Kn="srgb-linear",sr="linear",Mt="srgb";var Kr=7680;var gh=519,xh=512,vh=513,_h=514,xo=515,yh=516,Mh=517,vo=518,bh=519,Sh=35044;var Ll="300 es",kn=2e3,ws=2001;function Uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eh(){let i=rr("canvas");return i.style.display="block",i}var bc={},Ts=null;function Dl(...i){let e="THREE."+i.shift();Ts?Ts("log",e,...i):console.log(e,...i)}function wh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=wh(i);let e="THREE."+i.shift();if(Ts)Ts("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=wh(i);let e="THREE."+i.shift();if(Ts)Ts("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ki(...i){let e=i.join(" ");e in bc||(bc[e]=!0,Ye(...i))}function Th(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ah={[jr]:Qr,[ea]:ia,[ta]:sa,[Es]:na,[Qr]:jr,[ia]:ea,[sa]:ta,[na]:Es},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=1234567,tr=Math.PI/180,As=180/Math.PI;function Hs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function Nl(i,e){return(i%e+e)%e}function Ou(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Bu(i,e,t){return i!==e?(t-i)/(e-i):0}function nr(i,e,t){return(1-t)*i+t*e}function zu(i,e,t,n){return nr(i,e,1-Math.exp(-t*n))}function ku(i,e=1){return e-Math.abs(Nl(i,e*2)-e)}function Hu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wu(i,e){return i+Math.random()*(e-i)}function Xu(i){return i*(.5-Math.random())}function qu(i){i!==void 0&&(Sc=i);let e=Sc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yu(i){return i*tr}function Zu(i){return i*As}function $u(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ju(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ju(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),m=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*x,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*x,o*c);break;case"ZYZ":i.set(l*x,l*m,o*u,o*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var It={DEG2RAD:tr,RAD2DEG:As,generateUUID:Hs,clamp:ht,euclideanModulo:Nl,mapLinear:Ou,inverseLerp:Bu,lerp:nr,damp:zu,pingpong:ku,smoothstep:Hu,smootherstep:Vu,randInt:Gu,randFloat:Wu,randFloatSpread:Xu,seededRandom:qu,degToRad:Yu,radToDeg:Zu,isPowerOfTwo:$u,ceilPowerOfTwo:Ju,floorPowerOfTwo:Ku,setQuaternionFromProperEuler:ju,normalize:dn,denormalize:bs},_e=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],m=r[a+1],x=r[a+2],M=r[a+3];if(f!==M||l!==h||c!==m||u!==x){let p=l*h+c*m+u*x+f*M;p<0&&(h=-h,m=-m,x=-x,M=-M,p=-p);let d=1-o;if(p<.9995){let w=Math.acos(p),A=Math.sin(w);d=Math.sin(d*w)/A,o=Math.sin(o*w)/A,l=l*d+h*o,c=c*d+m*o,u=u*d+x*o,f=f*d+M*o}else{l=l*d+h*o,c=c*d+m*o,u=u*d+x*o,f=f*d+M*o;let w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+u*f+l*m-c*h,e[t+1]=l*x+u*h+c*f-o*m,e[t+2]=c*x+u*m+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ec.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oo=new B,Ec=new Qn,tt=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],x=n[8],M=s[0],p=s[3],d=s[6],w=s[1],A=s[4],y=s[7],b=s[2],S=s[5],R=s[8];return r[0]=a*M+o*w+l*b,r[3]=a*p+o*A+l*S,r[6]=a*d+o*y+l*R,r[1]=c*M+u*w+f*b,r[4]=c*p+u*A+f*S,r[7]=c*d+u*y+f*R,r[2]=h*M+m*w+x*b,r[5]=h*p+m*A+x*S,r[8]=h*d+m*y+x*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,m=c*r-a*l,x=t*f+n*h+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=f*M,e[1]=(s*c-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=h*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return Ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return Ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bo=new tt,wc=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qu(){let i={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kn]:{primaries:e,whitePoint:n,transfer:sr,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}var pt=Qu();function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cs,la=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=rr("canvas")),cs.width=e.width,cs.height=e.height;let s=cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ed=0,Rs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zo(s[a].image)):r.push(zo(s[a]))}else r=zo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?la.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var td=0,ko=new B,yn=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$n,s=$n,r=Ft,a=Fi,o=gn,l=nn,c=i.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Hs(),this.name="",this.source=new Rs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=wl;yn.DEFAULT_ANISOTROPY=1;var At=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],M=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(m+1)/2,b=(d+1)/2,S=(u+h)/4,R=(f+M)/4,v=(x+p)/4;return A>y&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=S/n,r=R/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=v/r),this.set(n,s,r,t),this}let w=Math.sqrt((p-x)*(p-x)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(p-x)/w,this.y=(f-M)/w,this.z=(h-u)/w,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ca=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new yn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Rs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends ca{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ar=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Tt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,f,h,m,x,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,m,x,M,p)}set(e,t,n,s,r,a,o,l,c,u,f,h,m,x,M,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=x,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,m=a*f,x=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,m=l*f,x=c*u,M=c*f;t[0]=h+M*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,m=l*f,x=c*u,M=c*f;t[0]=h-M*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,m=a*f,x=o*u,M=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+M,t[1]=l*f,t[5]=M*c+h,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,m=a*c,x=o*l,M=o*c;t[0]=l*u,t[4]=M-h*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=h-M*f}else if(e.order==="XZY"){let h=a*l,m=a*c,x=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+M,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nd,e,id)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ei.crossVectors(n,bn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ei.crossVectors(n,bn)),Ei.normalize(),Ir.crossVectors(bn,Ei),s[0]=Ei.x,s[4]=Ir.x,s[8]=bn.x,s[1]=Ei.y,s[5]=Ir.y,s[9]=bn.y,s[2]=Ei.z,s[6]=Ir.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],x=n[2],M=n[6],p=n[10],d=n[14],w=n[3],A=n[7],y=n[11],b=n[15],S=s[0],R=s[4],v=s[8],E=s[12],P=s[1],N=s[5],U=s[9],k=s[13],C=s[2],H=s[6],$=s[10],Y=s[14],le=s[3],K=s[7],ie=s[11],re=s[15];return r[0]=a*S+o*P+l*C+c*le,r[4]=a*R+o*N+l*H+c*K,r[8]=a*v+o*U+l*$+c*ie,r[12]=a*E+o*k+l*Y+c*re,r[1]=u*S+f*P+h*C+m*le,r[5]=u*R+f*N+h*H+m*K,r[9]=u*v+f*U+h*$+m*ie,r[13]=u*E+f*k+h*Y+m*re,r[2]=x*S+M*P+p*C+d*le,r[6]=x*R+M*N+p*H+d*K,r[10]=x*v+M*U+p*$+d*ie,r[14]=x*E+M*k+p*Y+d*re,r[3]=w*S+A*P+y*C+b*le,r[7]=w*R+A*N+y*H+b*K,r[11]=w*v+A*U+y*$+b*ie,r[15]=w*E+A*k+y*Y+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],M=e[7],p=e[11],d=e[15],w=l*m-c*h,A=o*m-c*f,y=o*h-l*f,b=a*m-c*u,S=a*h-l*u,R=a*f-o*u;return t*(M*w-p*A+d*y)-n*(x*w-p*b+d*S)+s*(x*A-M*b+d*R)-r*(x*y-M*S+p*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],M=e[13],p=e[14],d=e[15],w=t*o-n*a,A=t*l-s*a,y=t*c-r*a,b=n*l-s*o,S=n*c-r*o,R=s*c-r*l,v=u*M-f*x,E=u*p-h*x,P=u*d-m*x,N=f*p-h*M,U=f*d-m*M,k=h*d-m*p,C=w*k-A*U+y*N+b*P-S*E+R*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/C;return e[0]=(o*k-l*U+c*N)*H,e[1]=(s*U-n*k-r*N)*H,e[2]=(M*R-p*S+d*b)*H,e[3]=(h*S-f*R-m*b)*H,e[4]=(l*P-a*k-c*E)*H,e[5]=(t*k-s*P+r*E)*H,e[6]=(p*y-x*R-d*A)*H,e[7]=(u*R-h*y+m*A)*H,e[8]=(a*U-o*P+c*v)*H,e[9]=(n*P-t*U-r*v)*H,e[10]=(x*S-M*y+d*w)*H,e[11]=(f*y-u*S-m*w)*H,e[12]=(o*E-a*N-l*v)*H,e[13]=(t*N-n*E+s*v)*H,e[14]=(M*A-x*b-p*w)*H,e[15]=(u*b-f*A+h*w)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,m=r*u,x=r*f,M=a*u,p=a*f,d=o*f,w=l*c,A=l*u,y=l*f,b=n.x,S=n.y,R=n.z;return s[0]=(1-(M+d))*b,s[1]=(m+y)*b,s[2]=(x-A)*b,s[3]=0,s[4]=(m-y)*S,s[5]=(1-(h+d))*S,s[6]=(p+w)*S,s[7]=0,s[8]=(x+A)*R,s[9]=(p-w)*R,s[10]=(1-(h+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),l=hs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);let c=1/a,u=1/o,f=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,t.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=kn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s),x,M;if(l)x=r/(a-r),M=a*r/(a-r);else if(o===kn)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===ws)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=kn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),m=-(n+s)/(n-s),x,M;if(l)x=1/(a-r),M=a/(a-r);else if(o===kn)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===ws)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},hs=new B,On=new Tt,nd=new B(0,0,0),id=new B(1,1,1),Ei=new B,Ir=new B,bn=new B,Ac=new Tt,Rc=new Qn,vi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sd=0,Cc=new B,us=new Qn,di=new Tt,Lr=new B,Ks=new B,rd=new B,ad=new Qn,Pc=new B(1,0,0),Ic=new B(0,1,0),Lc=new B(0,0,1),Dc={type:"added"},od={type:"removed"},ds={type:"childadded",child:null},Ho={type:"childremoved",child:null},pn=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new vi,n=new Qn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new tt}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ks,Lr,this.up):di.lookAt(Lr,Ks,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),us.setFromRotationMatrix(di),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),ds.child=e,this.dispatchEvent(ds),ds.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(od),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,ad,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new B(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ji=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ld={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let p=t.getJointPose(M,n),d=this._getHandJoint(c,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ld)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var st=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Nl(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vo(a,r,e+1/3),this.g=Vo(a,r,e),this.b=Vo(a,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=Rh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return pt.workingToColorSpace(on.copy(this),e),Math.round(ht(on.r*255,0,255))*65536+Math.round(ht(on.g*255,0,255))*256+Math.round(ht(on.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=fn){pt.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Dr);let n=nr(wi.h,Dr.h,t),s=nr(wi.s,Dr.s,t),r=nr(wi.l,Dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new st;st.NAMES=Rh;var Dn=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new B,fi=new B,Go=new B,pi=new B,fs=new B,ps=new B,Nc=new B,Wo=new B,Xo=new B,qo=new B,Yo=new At,Zo=new At,$o=new At,Ci=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),fi.subVectors(n,t),Go.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(fi),l=Bn.dot(Go),c=fi.dot(fi),u=fi.dot(Go),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,m=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Yo.setScalar(0),Zo.setScalar(0),$o.setScalar(0),Yo.fromBufferAttribute(e,t),Zo.fromBufferAttribute(e,n),$o.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Yo,r.x),a.addScaledVector(Zo,r.y),a.addScaledVector($o,r.z),a}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),fi.subVectors(e,t),Bn.cross(fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Bn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;fs.subVectors(s,n),ps.subVectors(r,n),Wo.subVectors(e,n);let l=fs.dot(Wo),c=ps.dot(Wo);if(l<=0&&c<=0)return t.copy(n);Xo.subVectors(e,s);let u=fs.dot(Xo),f=ps.dot(Xo);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(fs,a);qo.subVectors(e,r);let m=fs.dot(qo),x=ps.dot(qo);if(x>=0&&m<=x)return t.copy(r);let M=m*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(ps,o);let p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return Nc.subVectors(r,s),o=(f-u)/(f-u+(m-x)),t.copy(s).addScaledVector(Nc,o);let d=1/(p+M+h);return a=M*d,o=h*d,t.copy(n).addScaledVector(fs,a).addScaledVector(ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pi=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),Ur.subVectors(this.max,js),ms.subVectors(e.a,js),gs.subVectors(e.b,js),xs.subVectors(e.c,js),Ti.subVectors(gs,ms),Ai.subVectors(xs,gs),qi.subVectors(ms,xs);let t=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-qi.z,qi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,qi.z,0,-qi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-qi.y,qi.x,0];return!Jo(t,ms,gs,xs,Ur)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,ms,gs,xs,Ur))?!1:(Fr.crossVectors(Ti,Ai),t=[Fr.x,Fr.y,Fr.z],Jo(t,ms,gs,xs,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new B,new B,new B,new B,new B,new B,new B,new B],zn=new B,Nr=new Pi,ms=new B,gs=new B,xs=new B,Ti=new B,Ai=new B,qi=new B,js=new B,Ur=new B,Fr=new B,Yi=new B;function Jo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yi.fromArray(i,r);let o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),u=n.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Gt=new B,Or=new _e,cd=0,Ln=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sh,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var or=class extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lr=class extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var zt=class extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},hd=new Pi,Qs=new B,Ko=new B,Is=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);let t=Qs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Ko)),this.expandByPoint(Qs.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ud=0,In=new Tt,jo=new pn,vs=new B,Sn=new Pi,er=new Pi,Jt=new B,cn=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?lr:or)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Sn.min,er.min),Sn.expandByPoint(Jt),Jt.addVectors(Sn.max,er.max),Sn.expandByPoint(Jt)):(Sn.expandByPoint(er.min),Sn.expandByPoint(er.max))}Sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jt.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),Jt.add(vs)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new B,l[v]=new B;let c=new B,u=new B,f=new B,h=new _e,m=new _e,x=new _e,M=new B,p=new B;function d(v,E,P){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,P),h.fromBufferAttribute(r,v),m.fromBufferAttribute(r,E),x.fromBufferAttribute(r,P),u.sub(c),f.sub(c),m.sub(h),x.sub(h);let N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(N),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(N),o[v].add(M),o[E].add(M),o[P].add(M),l[v].add(p),l[E].add(p),l[P].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,E=w.length;v<E;++v){let P=w[v],N=P.start,U=P.count;for(let k=N,C=N+U;k<C;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let A=new B,y=new B,b=new B,S=new B;function R(v){b.fromBufferAttribute(s,v),S.copy(b);let E=o[v];A.copy(E),A.sub(b.multiplyScalar(b.dot(E))).normalize(),y.crossVectors(S,E);let N=y.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,N)}for(let v=0,E=w.length;v<E;++v){let P=w[v],N=P.start,U=P.count;for(let k=N,C=N+U;k<C;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){let x=e.getX(h+0),M=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),m=0,x=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*u;for(let d=0;d<u;d++)h[x++]=c[m++]}return new Ln(h,u,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Qo=new B,dd=new B,fd=new tt,En=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Qo.subVectors(n,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fd.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pd=0,Ii=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=Os,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=xl,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new st().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new En().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var gi=new B,el=new B,Br=new B,zr=new B,ji=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){el.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(el);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=zr.dot(this.direction),l=-zr.dot(Br),c=zr.lengthSq(),u=Math.abs(1-a*a),f,h,m,x;if(u>0)if(f=a*l-o,h=a*o-l,x=r*u,f>=0)if(h>=-x)if(h<=x){let M=1/u;f*=M,h*=M,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(el).addScaledVector(Br,h),m}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,m=e.z-a.z,x=t.x-a.x,M=t.y-a.y,p=t.z-a.z,d=n.x-a.x,w=n.y-a.y,A=n.z-a.z,y=Math.abs(l),b=Math.abs(c),S=Math.abs(u),R,v,E,P,N,U,k,C,H,$,Y,le;if(y>=b&&y>=S?(E=l,U=f,H=x,le=d,l>=0?(R=c,v=u,P=h,N=m,k=M,C=p,$=w,Y=A):(R=u,v=c,P=m,N=h,k=p,C=M,$=A,Y=w)):b>=S?(E=c,U=h,H=M,le=w,c>=0?(R=u,v=l,P=m,N=f,k=p,C=x,$=A,Y=d):(R=l,v=u,P=f,N=m,k=x,C=p,$=d,Y=A)):(E=u,U=m,H=p,le=A,u>=0?(R=l,v=c,P=f,N=h,k=x,C=M,$=d,Y=w):(R=c,v=l,P=h,N=f,k=M,C=x,$=w,Y=d)),E===0)return null;let K=R/E,ie=v/E,re=1/E,Le=P-K*U,De=N-ie*U,ue=k-K*H,Ce=C-ie*H,ke=$-K*le,Q=Y-ie*le,ae=ke*Ce-Q*ue,Ae=Le*Q-De*ke,He=ue*De-Ce*Le;if(s){if(ae<0||Ae<0||He<0)return null}else if((ae<0||Ae<0||He<0)&&(ae>0||Ae>0||He>0))return null;let Se=ae+Ae+He;if(Se===0)return null;let Ve=re*(ae*U+Ae*H+He*le);return(Se>0?Ve<0:Ve>0)?null:this.at(Ve/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ei=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Uc=new Tt,Zi=new ji,kr=new Is,Fc=new B,Hr=new B,Vr=new B,Gr=new B,tl=new B,Wr=new B,Oc=new B,Xr=new B,Pt=class extends pn{constructor(e=new cn,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(tl.fromBufferAttribute(f,e),a?Wr.addScaledVector(tl,u):Wr.addScaledVector(tl.sub(t),u))}t.add(Wr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(kr.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(kr,Fc)===null||Zi.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Uc.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){let p=h[x],d=a[p.materialIndex],w=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,b=A;y<b;y+=3){let S=o.getX(y),R=o.getX(y+1),v=o.getX(y+2);s=qr(this,d,e,n,c,u,f,S,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=x,d=M;p<d;p+=3){let w=o.getX(p),A=o.getX(p+1),y=o.getX(p+2);s=qr(this,a,e,n,c,u,f,w,A,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){let p=h[x],d=a[p.materialIndex],w=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,b=A;y<b;y+=3){let S=y,R=y+1,v=y+2;s=qr(this,d,e,n,c,u,f,S,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=x,d=M;p<d;p+=3){let w=p,A=p+1,y=p+2;s=qr(this,a,e,n,c,u,f,w,A,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function md(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===si,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:i}}function qr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Hr),i.getVertexPosition(l,Vr),i.getVertexPosition(c,Gr);let u=md(i,e,t,n,Hr,Vr,Gr,Oc);if(u){let f=new B;Ci.getBarycoord(Oc,Hr,Vr,Gr,f),s&&(u.uv=Ci.getInterpolatedAttribute(s,o,l,c,f,new _e)),r&&(u.uv1=Ci.getInterpolatedAttribute(r,o,l,c,f,new _e)),a&&(u.normal=Ci.getInterpolatedAttribute(a,o,l,c,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new B,materialIndex:0};Ci.getNormal(Hr,Vr,Gr,h.normal),u.face=h,u.barycoord=f}return u}var Qi=class extends yn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,u=Ut,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $i=new Is,gd=new _e(.5,.5),Yr=new B,Ls=class{constructor(e=new En,t=new En,n=new En,s=new En,r=new En,a=new En){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],m=r[7],x=r[8],M=r[9],p=r[10],d=r[11],w=r[12],A=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,m-u,d-x,b-w).normalize(),s[1].setComponents(c+a,m+u,d+x,b+w).normalize(),s[2].setComponents(c+o,m+f,d+M,b+A).normalize(),s[3].setComponents(c-o,m-f,d-M,b-A).normalize(),n)s[4].setComponents(l,h,p,y).normalize(),s[5].setComponents(c-l,m-h,d-p,b-y).normalize();else if(s[4].setComponents(c-l,m-h,d-p,b-y).normalize(),t===kn)s[5].setComponents(c+l,m+h,d+p,b+y).normalize();else if(t===ws)s[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);let t=gd.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cr=class extends yn{constructor(e=[],t=Ui,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ti=class extends yn{constructor(e,t,n=Gn,s,r,a,o=Ut,l=Ut,c,u=Jn,f=1){if(u!==Jn&&u!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ua=class extends ti{constructor(e,t=Gn,n=Ui,s,r,a=Ut,o=Ut,l,c=Jn){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},hr=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hn=class i extends cn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,m=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function x(M,p,d,w,A,y,b,S,R,v,E){let P=y/R,N=b/v,U=y/2,k=b/2,C=S/2,H=R+1,$=v+1,Y=0,le=0,K=new B;for(let ie=0;ie<$;ie++){let re=ie*N-k;for(let Le=0;Le<H;Le++){let De=Le*P-U;K[M]=De*w,K[p]=re*A,K[d]=C,c.push(K.x,K.y,K.z),K[M]=0,K[p]=0,K[d]=S>0?1:-1,u.push(K.x,K.y,K.z),f.push(Le/R),f.push(1-ie/v),Y+=1}}for(let ie=0;ie<v;ie++)for(let re=0;re<R;re++){let Le=h+re+H*ie,De=h+re+H*(ie+1),ue=h+(re+1)+H*(ie+1),Ce=h+(re+1)+H*ie;l.push(Le,De,Ce),l.push(De,ue,Ce),le+=6}o.addGroup(m,le,E),m+=le,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var es=class i extends cn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],m=[],x=0,M=[],p=n/2,d=0;w(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new zt(f,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(m,2));function w(){let y=new B,b=new B,S=0,R=(t-e)/n;for(let v=0;v<=r;v++){let E=[],P=v/r,N=P*(t-e)+e;for(let U=0;U<=s;U++){let k=U/s,C=k*l+o,H=Math.sin(C),$=Math.cos(C);b.x=N*H,b.y=-P*n+p,b.z=N*$,f.push(b.x,b.y,b.z),y.set(H,R,$).normalize(),h.push(y.x,y.y,y.z),m.push(k,1-P),E.push(x++)}M.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){let P=M[E][v],N=M[E+1][v],U=M[E+1][v+1],k=M[E][v+1];(e>0||E!==0)&&(u.push(P,N,k),S+=3),(t>0||E!==r-1)&&(u.push(N,U,k),S+=3)}c.addGroup(d,S,0),d+=S}function A(y){let b=x,S=new _e,R=new B,v=0,E=y===!0?e:t,P=y===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,p*P,0),h.push(0,P,0),m.push(.5,.5),x++;let N=x;for(let U=0;U<=s;U++){let C=U/s*l+o,H=Math.cos(C),$=Math.sin(C);R.x=E*$,R.y=p*P,R.z=E*H,f.push(R.x,R.y,R.z),h.push(0,P,0),S.x=H*.5+.5,S.y=$*.5*P+.5,m.push(S.x,S.y),x++}for(let U=0;U<s;U++){let k=b+U,C=N+U;y===!0?u.push(C,C+1,k):u.push(C+1,C,k),v+=3}c.addGroup(d,v,y===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ds=class i extends cn{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ht(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,f=new B,h=new _e,m=new B,x=new B,M=new B,p=0,d=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:p=e[w+1].x-e[w].x,d=e[w+1].y-e[w].y,m.x=d*1,m.y=-p,m.z=d*0,M.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:p=e[w+1].x-e[w].x,d=e[w+1].y-e[w].y,m.x=d*1,m.y=-p,m.z=d*0,x.copy(m),m.x+=M.x,m.y+=M.y,m.z+=M.z,m.normalize(),l.push(m.x,m.y,m.z),M.copy(x)}for(let w=0;w<=t;w++){let A=n+w*u*s,y=Math.sin(A),b=Math.cos(A);for(let S=0;S<=e.length-1;S++){f.x=e[S].x*y,f.y=e[S].y,f.z=e[S].x*b,a.push(f.x,f.y,f.z),h.x=w/t,h.y=S/(e.length-1),o.push(h.x,h.y);let R=l[3*S+0]*y,v=l[3*S+1],E=l[3*S+0]*b;c.push(R,v,E)}}for(let w=0;w<t;w++)for(let A=0;A<e.length-1;A++){let y=A+w*e.length,b=y,S=y+e.length,R=y+e.length+1,v=y+1;r.push(b,S,v),r.push(R,v,S)}this.setIndex(r),this.setAttribute("position",new zt(a,3)),this.setAttribute("uv",new zt(o,2)),this.setAttribute("normal",new zt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ni=class i extends cn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,m=[],x=[],M=[],p=[];for(let d=0;d<u;d++){let w=d*h-a;for(let A=0;A<c;A++){let y=A*f-r;x.push(y,-w,0),M.push(0,0,1),p.push(A/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){let A=w+c*d,y=w+c*(d+1),b=w+1+c*(d+1),S=w+1+c*d;m.push(A,y,S),m.push(y,b,S)}this.setIndex(m),this.setAttribute("position",new zt(x,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Bc(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Bc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=ns(i[t]);for(let s in n)e[s]=n[s]}return e}function Bc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ul(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var Ch={clone:ns,merge:un},vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=_d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new st().setHex(s.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},da=class extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ns=class extends Ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Us=class extends Ns{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var fa=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pa=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function nl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ma=class extends Li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rl,endingEnd:rl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case al:r=e,o=2*t-n;break;case ol:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case al:a=e,l=2*n-t;break;case ol:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),M=x*x,p=M*x,d=-h*p+2*h*M-h*x,w=(1+h)*p+(-1.5-2*h)*M+(-.5+h)*x+1,A=(-1-m)*p+(1.5+m)*M+.5*x,y=m*p-m*M;for(let b=0;b!==o;++b)r[b]=d*a[u+b]+w*a[c+b]+A*a[l+b]+y*a[f+b];return r}},ga=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},xa=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},va=class extends Li{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let x=(n-t)/(s-t),M=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*M+a[l+p]*x;return r}let h=o*2,m=e-1;for(let x=0;x!==o;++x){let M=a[c+x],p=a[l+x],d=m*h+x*2,w=f[d],A=f[d+1],y=e*h+x*2,b=u[y],S=u[y+1],R=Md(n,t,w,b,s);r[x]=Ph(R,M,A,S,p)}return r}};function Ph(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function yd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Md(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ph(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=yd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),nl(e.settings)&&(n.settings={inTangents:_s(e.settings.inTangents,Array),outTangents:_s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new va(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case oa:t=this.InterpolantFactoryMethodLinear;break;case Jr:t=this.InterpolantFactoryMethodSmooth;break;case sl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return Jr;case this.InterpolantFactoryMethodBezier:return sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;nl(this.settings)&&(zc(this.settings.inTangents,e),zc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Fu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,h=f-n,m=f+n;for(let x=0;x!==n;++x){let M=t[f+x];if(M!==t[h+x]||M!==t[m+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let m=0;m!==n;++m)t[h+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,nl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=oa;var Di=class extends wn{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=ir;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};_a.prototype.ValueTypeName="color";var ya=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};ya.prototype.ValueTypeName="number";var Ma=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Qn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ur=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ma(this.times,this.values,this.getValueSize(),e)}};ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends wn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ir;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};ba.prototype.ValueTypeName="vector";var Sa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ih=new Sa,Ea=class{constructor(e){this.manager=e!==void 0?e:Ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var wa=class extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var il=new Tt,kc=new B,Hc=new B,Ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(il,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ws||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zr=new B,$r=new Qn,Zn=new B,dr=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zr,$r,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,$r,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zr,$r,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,$r,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ri=new B,Vc=new _e,Gc=new _e,ln=class extends dr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Vc,Gc),t.subVectors(Gc,Vc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ii=class extends dr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ll=class extends Ta{constructor(){super(new ii(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new ll}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ys=-90,Ms=1,Aa=class extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(ys,Ms,e,t);s.layers=this.layers,this.add(s);let r=new ln(ys,Ms,e,t);r.layers=this.layers,this.add(r);let a=new ln(ys,Ms,e,t);a.layers=this.layers,this.add(a);let o=new ln(ys,Ms,e,t);o.layers=this.layers,this.add(o);let l=new ln(ys,Ms,e,t);l.layers=this.layers,this.add(l);let c=new ln(ys,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ra=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Fl="\\[\\]\\.:\\/",bd=new RegExp("["+Fl+"]","g"),Ol="[^"+Fl+"]",Sd="[^"+Fl.replace("\\.","")+"]",Ed=/((?:WC+[\/:])*)/.source.replace("WC",Ol),wd=/(WCOD+)?/.source.replace("WCOD",Sd),Td=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol),Ad=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol),Rd=new RegExp("^"+Ed+wd+Td+Ad+"$"),Cd=["material","materials","bones","map"],cl=class{constructor(e,t,n){let s=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bd,"")}static parseTrackName(e){let t=Rd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=cl;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xx=new Float32Array(1);var Wc=new Tt,pr=class{constructor(e,t,n=0,s=1/0){this.ray=new ji(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wc),this}intersectObject(e,t=!0,n=[]){return hl(e,this,n,t),n.sort(Xc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)hl(e[s],this,n,t);return n.sort(Xc),n}};function Xc(i,e){return i.distance-e.distance}function hl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)hl(r[a],e,t,!0)}}var ul=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Bl(i,e,t,n){let s=Pd(n);switch(t){case Pl:return i*e;case ks:return i*e/s.components*s.byteLength;case Fa:return i*e/s.components*s.byteLength;case Bi:return i*e*2/s.components*s.byteLength;case Oa:return i*e*2/s.components*s.byteLength;case Il:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case Ba:return i*e*4/s.components*s.byteLength;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case br:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:case Va:return Math.max(i,16)*Math.max(e,8)/4;case za:case Ha:return Math.max(i,8)*Math.max(e,8)/2;case Ga:case Wa:case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:case Er:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case co:case ho:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fo:case po:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wr:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pd(i){switch(i){case nn:case Tl:return{byteLength:1,components:1};case Bs:case Al:case hn:return{byteLength:2,components:1};case Na:case Ua:return{byteLength:2,components:4};case Gn:case Da:case Tn:return{byteLength:4,components:1};case Rl:case Cl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Qh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ld(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<f.length;m++){let x=f[h],M=f[m];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,f[h]=M)}f.length=h+1;for(let m=0,x=f.length;m<x;m++){let M=f[m];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
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
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
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
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
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
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,If=`PhysicalMaterial material;
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
#endif`,Lf=`uniform sampler2D dfgLUT;
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
}`,Df=`
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wf=`#if defined( USE_POINTS_UV )
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
#endif`,Xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
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
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_p=`float getShadowMask() {
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
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
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
}`,Hp=`#if DEPTH_PACKING == 3200
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
}`,Vp=`#define DISTANCE
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
}`,Gp=`#define DISTANCE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`uniform float scale;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,$p=`uniform vec3 diffuse;
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
}`,Jp=`#define LAMBERT
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
}`,Kp=`#define LAMBERT
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
}`,jp=`#define MATCAP
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
}`,Qp=`#define MATCAP
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
}`,em=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,nm=`#define PHONG
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
}`,im=`#define PHONG
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
}`,sm=`#define STANDARD
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
}`,rm=`#define STANDARD
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
}`,am=`#define TOON
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
}`,om=`#define TOON
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
}`,lm=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 color;
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
}`,dm=`uniform float rotation;
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
}`,fm=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Dd,alphahash_pars_fragment:Nd,alphamap_fragment:Ud,alphamap_pars_fragment:Fd,alphatest_fragment:Od,alphatest_pars_fragment:Bd,aomap_fragment:zd,aomap_pars_fragment:kd,batching_pars_vertex:Hd,batching_vertex:Vd,begin_vertex:Gd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:Kd,color_fragment:jd,color_pars_fragment:Qd,color_pars_vertex:ef,color_vertex:tf,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:af,displacementmap_vertex:of,emissivemap_fragment:lf,emissivemap_pars_fragment:cf,colorspace_fragment:hf,colorspace_pars_fragment:uf,envmap_fragment:df,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Tf,envmap_vertex:gf,fog_vertex:xf,fog_pars_vertex:vf,fog_fragment:_f,fog_pars_fragment:yf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:bf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:Ef,lights_pars_begin:wf,lights_toon_fragment:Af,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Pf,lights_physical_fragment:If,lights_physical_pars_fragment:Lf,lights_fragment_begin:Df,lights_fragment_maps:Nf,lights_fragment_end:Uf,lightprobes_pars_fragment:Ff,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:kf,map_fragment:Hf,map_pars_fragment:Vf,map_particle_fragment:Gf,map_particle_pars_fragment:Wf,metalnessmap_fragment:Xf,metalnessmap_pars_fragment:qf,morphinstance_vertex:Yf,morphcolor_vertex:Zf,morphnormal_vertex:$f,morphtarget_pars_vertex:Jf,morphtarget_vertex:Kf,normal_fragment_begin:jf,normal_fragment_maps:Qf,normal_pars_fragment:ep,normal_pars_vertex:tp,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:op,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:dp,dithering_pars_fragment:fp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:xp,shadowmap_vertex:vp,shadowmask_pars_fragment:_p,skinbase_vertex:yp,skinning_pars_vertex:Mp,skinning_vertex:bp,skinnormal_vertex:Sp,specularmap_fragment:Ep,specularmap_pars_fragment:wp,tonemapping_fragment:Tp,tonemapping_pars_fragment:Ap,transmission_fragment:Rp,transmission_pars_fragment:Cp,uv_pars_fragment:Pp,uv_pars_vertex:Ip,uv_vertex:Lp,worldpos_vertex:Dp,background_vert:Np,background_frag:Up,backgroundCube_vert:Fp,backgroundCube_frag:Op,cube_vert:Bp,cube_frag:zp,depth_vert:kp,depth_frag:Hp,distance_vert:Vp,distance_frag:Gp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:qp,linedashed_frag:Yp,meshbasic_vert:Zp,meshbasic_frag:$p,meshlambert_vert:Jp,meshlambert_frag:Kp,meshmatcap_vert:jp,meshmatcap_frag:Qp,meshnormal_vert:em,meshnormal_frag:tm,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:sm,meshphysical_frag:rm,meshtoon_vert:am,meshtoon_frag:om,points_vert:lm,points_frag:cm,shadow_vert:hm,shadow_frag:um,sprite_vert:dm,sprite_frag:fm},Te={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},oi={basic:{uniforms:un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:un([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:un([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new st(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:un([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:un([Te.points,Te.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:un([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:un([Te.common,Te.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:un([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:un([Te.sprite,Te.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:un([Te.common,Te.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:un([Te.lights,Te.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};oi.physical={uniforms:un([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var _o={r:0,b:0,g:0},pm=new Tt,eu=new tt;eu.set(-1,0,0,0,1,0,0,0,1);function mm(i,e,t,n,s,r){let a=new st(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function m(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){let y=w.backgroundBlurriness>0;A=e.get(A,y)}return A}function x(w){let A=!1,y=m(w);y===null?p(a,o):y&&y.isColor&&(p(y,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(w,A){let y=m(A);y&&(y.isCubeTexture||y.mapping===vr)?(c===void 0&&(c=new Pt(new Hn(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:ns(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(eu),c.material.toneMapped=pt.getTransfer(y.colorSpace)!==Mt,(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pt(new ni(2,2),new Kt({name:"BackgroundMaterial",uniforms:ns(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=pt.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,A){w.getRGB(_o,Ul(i)),t.buffers.color.setClear(_o.r,_o.g,_o.b,A,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,p(a,o)},render:x,addToRenderList:M,dispose:d}}function gm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(N,U,k,C,H){let $=!1,Y=f(N,C,k,U);r!==Y&&(r=Y,c(r.object)),$=m(N,C,k,H),$&&x(N,C,k,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(N,U,k,C),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function f(N,U,k,C){let H=C.wireframe===!0,$=n[U.id];$===void 0&&($={},n[U.id]=$);let Y=N.isInstancedMesh===!0?N.id:0,le=$[Y];le===void 0&&(le={},$[Y]=le);let K=le[k.id];K===void 0&&(K={},le[k.id]=K);let ie=K[H];return ie===void 0&&(ie=h(l()),K[H]=ie),ie}function h(N){let U=[],k=[],C=[];for(let H=0;H<t;H++)U[H]=0,k[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:C,object:N,attributes:{},index:null}}function m(N,U,k,C){let H=r.attributes,$=U.attributes,Y=0,le=k.getAttributes();for(let K in le)if(le[K].location>=0){let re=H[K],Le=$[K];if(Le===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Le=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Le=N.instanceColor)),re===void 0||re.attribute!==Le||Le&&re.data!==Le.data)return!0;Y++}return r.attributesNum!==Y||r.index!==C}function x(N,U,k,C){let H={},$=U.attributes,Y=0,le=k.getAttributes();for(let K in le)if(le[K].location>=0){let re=$[K];re===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));let Le={};Le.attribute=re,re&&re.data&&(Le.data=re.data),H[K]=Le,Y++}r.attributes=H,r.attributesNum=Y,r.index=C}function M(){let N=r.newAttributes;for(let U=0,k=N.length;U<k;U++)N[U]=0}function p(N){d(N,0)}function d(N,U){let k=r.newAttributes,C=r.enabledAttributes,H=r.attributeDivisors;k[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),H[N]!==U&&(i.vertexAttribDivisor(N,U),H[N]=U)}function w(){let N=r.newAttributes,U=r.enabledAttributes;for(let k=0,C=U.length;k<C;k++)U[k]!==N[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function A(N,U,k,C,H,$,Y){Y===!0?i.vertexAttribIPointer(N,U,k,H,$):i.vertexAttribPointer(N,U,k,C,H,$)}function y(N,U,k,C){M();let H=C.attributes,$=k.getAttributes(),Y=U.defaultAttributeValues;for(let le in $){let K=$[le];if(K.location>=0){let ie=H[le];if(ie===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor)),ie!==void 0){let re=ie.normalized,Le=ie.itemSize,De=e.get(ie);if(De===void 0)continue;let ue=De.buffer,Ce=De.type,ke=De.bytesPerElement,Q=Ce===i.INT||Ce===i.UNSIGNED_INT||ie.gpuType===Da;if(ie.isInterleavedBufferAttribute){let ae=ie.data,Ae=ae.stride,He=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let Se=0;Se<K.locationSize;Se++)d(K.location+Se,ae.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Se=0;Se<K.locationSize;Se++)p(K.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let Se=0;Se<K.locationSize;Se++)A(K.location+Se,Le/K.locationSize,Ce,re,Ae*ke,(He+Le/K.locationSize*Se)*ke,Q)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)d(K.location+ae,ie.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<K.locationSize;ae++)p(K.location+ae);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let ae=0;ae<K.locationSize;ae++)A(K.location+ae,Le/K.locationSize,Ce,re,Le*ke,Le/K.locationSize*ae*ke,Q)}}else if(Y!==void 0){let re=Y[le];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(K.location,re);break;case 3:i.vertexAttrib3fv(K.location,re);break;case 4:i.vertexAttrib4fv(K.location,re);break;default:i.vertexAttrib1fv(K.location,re)}}}}w()}function b(){E();for(let N in n){let U=n[N];for(let k in U){let C=U[k];for(let H in C){let $=C[H];for(let Y in $)u($[Y].object),delete $[Y];delete C[H]}}delete n[N]}}function S(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let k in U){let C=U[k];for(let H in C){let $=C[H];for(let Y in $)u($[Y].object),delete $[Y];delete C[H]}}delete n[N.id]}function R(N){for(let U in n){let k=n[U];for(let C in k){let H=k[C];if(H[N.id]===void 0)continue;let $=H[N.id];for(let Y in $)u($[Y].object),delete $[Y];delete H[N.id]}}}function v(N){for(let U in n){let k=n[U],C=N.isInstancedMesh===!0?N.id:0,H=k[C];if(H!==void 0){for(let $ in H){let Y=H[$];for(let le in Y)u(Y[le].object),delete Y[le];delete H[$]}delete k[C],Object.keys(k).length===0&&delete n[U]}}}function E(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:w}}function xm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function vm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==gn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==nn&&R!==Tn&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:y,maxSamples:b,samples:S}}function _m(i){let e=this,t=null,n=0,s=!1,r=!1,a=new En,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let m=f.length!==0||h||n!==0||s;return s=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){let x=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||x===null||x.length===0||r&&!p)r?u(null):c();else{let w=r?0:n,A=w*4,y=d.clippingState||null;l.value=y,y=u(x,h,A,m);for(let b=0;b!==A;++b)y[b]=t[b];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,x){let M=f!==null?f.length:0,p=null;if(M!==0){if(p=l.value,x!==!0||p===null){let d=m+M*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,y=m;A!==M;++A,y+=4)a.copy(f[A]).applyMatrix4(w,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}var Gs=4,ym=6,Mm=20,bm=256,Tr=new ii,Lh=new st,zl=null,kl=0,Hl=0,Vl=!1,Sm=new B,is=new B,zi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Sm}=r;zl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zl,kl,Hl),this._renderer.xr.enabled=Vl,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:hn,format:gn,colorSpace:Kn,depthBuffer:!1},s=Dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Em(r)),this._blurMaterial=Tm(r,e,t),this._ggxMaterial=wm(r,e,t)}return s}_compileMaterial(e){let t=new Pt(new cn,e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,n,s,r){let l=new ln(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(Lh),f.toneMapping=Vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Hn,new ei({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,p=M.material,d=!1,w=e.background;w?w.isColor&&(p.color.copy(w),e.background=null,d=!0):(p.color.copy(Lh),d=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let b=this._cubeSize;Vs(s,y*b,A>2?b:0,b,b),f.setRenderTarget(s),d&&f.render(M,l),f.render(e,l)}f.toneMapping=m,f.autoClear=h,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ui||e.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Tr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,m=f*h,{_lodMax:x}=this,M=this._sizeLods[n],p=3*M*(n>x-Gs?n-x+Gs:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-t,Vs(r,p,d,3*M,2*M),s.setRenderTarget(r),s.render(o,Tr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Vs(e,p,d,3*M,2*M),s.setRenderTarget(e),s.render(o,Tr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Gs?s-this._lodMax+Gs:0),h=4*(this._cubeSize-u);Vs(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Tr)}};function Em(i){let e=[],t=[],n=i,s=i-Gs+1+ym;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,m=3,x=new Float32Array(m*h*f),M=new Float32Array(m*h*f);for(let d=0;d<f;d++){let w=d%3*2/3-1,A=d>2?0:-1,y=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];x.set(y,m*h*d);for(let b=0;b<h;b++){let S=u[b*2]*2-1,R=u[b*2+1]*2-1;d===0?is.set(1,R,S):d===1?is.set(-S,1,-R):d===2?is.set(-S,R,1):d===3?is.set(-1,R,-S):d===4?is.set(-S,-1,R):is.set(S,R,-1),is.toArray(M,(d*h+b)*m)}}let p=new cn;p.setAttribute("position",new Ln(x,m)),p.setAttribute("outputDirection",new Ln(M,m)),t.push(new Pt(p,null)),n>Gs&&n--}return{lodMeshes:t,sizeLods:e}}function Dh(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wm(i,e,t){return new Kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:So(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Tm(i,e,t){return new Kt({name:"SphericalGaussianBlur",defines:{SAMPLES:Mm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:So(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Nh(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Uh(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function So(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Mo=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new cr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hn(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:ri});r.uniforms.tEquirect.value=t;let a=new Pt(s,r),o=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Ft),new Aa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Am(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===Pa||m===Ia)if(e.has(h)){let x=e.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let M=new Mo(x.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let m=h.mapping,x=m===Pa||m===Ia,M=m===Ui||m===ts;if(x||M){let p=t.get(h),d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new zi(i)),p=x?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let w=h.image;return x&&w&&w.height>0||M&&w&&l(w)?(n===null&&(n=new zi(i)),p=x?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===Pa?h.mapping=Ui:m===Ia&&(h.mapping=ts),h}function l(h){let m=0,x=6;for(let M=0;M<x;M++)h[M]!==void 0&&m++;return m===x}function c(h){let m=h.target;m.removeEventListener("dispose",c);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Rm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ki("WebGLRenderer: "+n+" extension not supported."),s}}}function Cm(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(f){let h=[],m=f.index,x=f.attributes.position,M=0;if(x===void 0)return;if(m!==null){let w=m.array;M=m.version;for(let A=0,y=w.length;A<y;A+=3){let b=w[A+0],S=w[A+1],R=w[A+2];h.push(b,S,S,R,R,b)}}else{let w=x.array;M=x.version;for(let A=0,y=w.length/3-1;A<y;A+=3){let b=A+0,S=A+1,R=A+2;h.push(b,S,S,R,R,b)}}let p=new(x.count>=65535?lr:or)(h,1);p.version=M;let d=r.get(f);d&&e.remove(d),r.set(f,p)}function u(f){let h=r.get(f);if(h){let m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Pm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,f*a,m),t.update(h,n,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,m);let M=0;for(let p=0;p<m;p++)M+=h[p];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Im(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lm(i,e,t){let n=new WeakMap,s=new At;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],A=0;m===!0&&(A=1),x===!0&&(A=2),M===!0&&(A=3);let y=o.attributes.position.count*A,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*b*4*f),R=new ar(S,y,b,f);R.type=Tn,R.needsUpdate=!0;let v=A*4;for(let P=0;P<f;P++){let N=p[P],U=d[P],k=w[P],C=y*b*4*P;for(let H=0;H<N.count;H++){let $=H*v;m===!0&&(s.fromBufferAttribute(N,H),S[C+$+0]=s.x,S[C+$+1]=s.y,S[C+$+2]=s.z,S[C+$+3]=0),x===!0&&(s.fromBufferAttribute(U,H),S[C+$+4]=s.x,S[C+$+5]=s.y,S[C+$+6]=s.z,S[C+$+7]=0),M===!0&&(s.fromBufferAttribute(k,H),S[C+$+8]=s.x,S[C+$+9]=s.y,S[C+$+10]=s.z,S[C+$+11]=k.itemSize===4?s.w:1)}}h={count:f,texture:R,size:new _e(y,b)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Dm(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Nm={[_l]:"LINEAR_TONE_MAPPING",[yl]:"REINHARD_TONE_MAPPING",[Ml]:"CINEON_TONE_MAPPING",[bl]:"ACES_FILMIC_TONE_MAPPING",[xr]:"AGX_TONE_MAPPING",[El]:"NEUTRAL_TONE_MAPPING",[Sl]:"CUSTOM_TONE_MAPPING"};function Um(i,e,t,n,s,r){let a=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new cn;c.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new zt([0,2,0,0,2,0],2));let u=new da({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(c,u),h=new ii(-1,1,1,-1,0,1),m=null,x=null,M=!1,p,d=null,w=[],A=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let S=0;S<w.length;S++){let R=w[S];R.setSize&&R.setSize(y,b)}},this.setEffects=function(y){w=y,A=w.length>0&&w[0].isRenderPass===!0;let b=a.width,S=a.height;w.length>0&&o===null&&(o=new Wt(b,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(b,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<w.length;R++){let v=w[R];v.setSize&&v.setSize(b,S)}},this.begin=function(y,b){if(M||y.toneMapping===Vn&&w.length===0)return!1;if(d=b,b!==null){let S=b.width,R=b.height;(a.width!==S||a.height!==R)&&this.setSize(S,R)}return A===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=Vn,!0},this.hasRenderPass=function(){return A},this.end=function(y,b){y.toneMapping=p,M=!0;let S=a,R=o;for(let v=0;v<w.length;v++){let E=w[v];E.enabled!==!1&&(E.render(y,R,S,b),E.needsSwap!==!1&&(S=R,R=R===o?l:o))}if(m!==y.outputColorSpace||x!==y.toneMapping){m=y.outputColorSpace,x=y.toneMapping,u.defines={},pt.getTransfer(m)===Mt&&(u.defines.SRGB_TRANSFER="");let v=Nm[x];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(d),y.render(f,h),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var tu=new yn,Xl=new ti(1,1),nu=new ar,iu=new ha,su=new cr,Fh=[],Oh=[],Bh=new Float32Array(16),zh=new Float32Array(9),kh=new Float32Array(4);function Xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Eo(i,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),$t(t,n)}}function Hm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;zh.set(n),i.uniformMatrix3fv(this.addr,!1,zh),$t(t,n)}}function Vm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;Bh.set(n),i.uniformMatrix4fv(this.addr,!1,Bh),$t(t,n)}}function Gm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xl.compareFunction=t.isReversedDepthBuffer()?vo:xo,r=Xl):r=tu,t.setTexture2D(e||r,s)}function jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||iu,s)}function Qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||su,s)}function e0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nu,s)}function t0(i){switch(i){case 5126:return Fm;case 35664:return Om;case 35665:return Bm;case 35666:return zm;case 35674:return km;case 35675:return Hm;case 35676:return Vm;case 5124:case 35670:return Gm;case 35667:case 35671:return Wm;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return Ym;case 36294:return Zm;case 36295:return $m;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return e0}}function n0(i,e){i.uniform1fv(this.addr,e)}function i0(i,e){let t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function s0(i,e){let t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function r0(i,e){let t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function a0(i,e){let t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function o0(i,e){let t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function l0(i,e){let t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function c0(i,e){i.uniform1iv(this.addr,e)}function h0(i,e){i.uniform2iv(this.addr,e)}function u0(i,e){i.uniform3iv(this.addr,e)}function d0(i,e){i.uniform4iv(this.addr,e)}function f0(i,e){i.uniform1uiv(this.addr,e)}function p0(i,e){i.uniform2uiv(this.addr,e)}function m0(i,e){i.uniform3uiv(this.addr,e)}function g0(i,e){i.uniform4uiv(this.addr,e)}function x0(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xl:a=tu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function v0(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||iu,r[a])}function _0(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||su,r[a])}function y0(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nu,r[a])}function M0(i){switch(i){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return a0;case 35675:return o0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return h0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return y0}}var ql=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=t0(t.type)}},Yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M0(t.type)}},Zl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Gl=/(\w+)(\])?(\[|\.)?/g;function Hh(i,e){i.seq.push(e),i.map[e.id]=e}function b0(i,e,t){let n=i.name,s=n.length;for(Gl.lastIndex=0;;){let r=Gl.exec(n),a=Gl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hh(t,c===void 0?new ql(o,i,e):new Yl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Zl(o),Hh(t,f)),t=f}}}var Ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);b0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Vh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var S0=37297,E0=0;function w0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Gh=new tt;function T0(i){pt._getMatrix(Gh,pt.workingColorSpace,i);let e=`mat3( ${Gh.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case sr:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+w0(i.getShaderSource(e),o)}else return r}function A0(i,e){let t=T0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var R0={[_l]:"Linear",[yl]:"Reinhard",[Ml]:"Cineon",[bl]:"ACESFilmic",[xr]:"AgX",[El]:"Neutral",[Sl]:"Custom"};function C0(i,e){let t=R0[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yo=new B;function P0(){pt.getLuminanceCoefficients(yo);let i=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function L0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function D0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Rr(i){return i!==""}function Xh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(N0,F0)}var U0=new Map;function F0(i,e){let t=lt[e];if(t===void 0){let n=U0.get(e);if(n!==void 0)t=lt[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $l(t)}var O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(i){return i.replace(O0,B0)}function B0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var z0={[mr]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function k0(i){return z0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H0={[Ui]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE_UV"};function V0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":H0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var G0={[ts]:"ENVMAP_MODE_REFRACTION"};function W0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var X0={[vl]:"ENVMAP_BLENDING_MULTIPLY",[uh]:"ENVMAP_BLENDING_MIX",[dh]:"ENVMAP_BLENDING_ADD"};function q0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":X0[i.combine]||"ENVMAP_BLENDING_NONE"}function Y0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Z0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=k0(t),c=V0(t),u=W0(t),f=q0(t),h=Y0(t),m=I0(t),x=L0(r),M=s.createProgram(),p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Rr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Rr).join(`
`),d.length>0&&(d+=`
`)):(p=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),d=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?lt.tonemapping_pars_fragment:"",t.toneMapping!==Vn?C0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,A0("linearToOutputTexel",t.outputColorSpace),P0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),a=$l(a),a=Xh(a,t),a=qh(a,t),o=$l(o),o=Xh(o,t),o=qh(o,t),a=Yh(a),o=Yh(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=w+p+a,y=w+d+o,b=Vh(s,s.VERTEX_SHADER,A),S=Vh(s,s.FRAGMENT_SHADER,y);s.attachShader(M,b),s.attachShader(M,S),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(N){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(M)||"",k=s.getShaderInfoLog(b)||"",C=s.getShaderInfoLog(S)||"",H=U.trim(),$=k.trim(),Y=C.trim(),le=!0,K=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,S);else{let ie=Wh(s,b,"vertex"),re=Wh(s,S,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+ie+`
`+re)}else H!==""?Ye("WebGLProgram: Program Info Log:",H):($===""||Y==="")&&(K=!1);K&&(N.diagnostics={runnable:le,programLog:H,vertexShader:{log:$,prefix:p},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(b),s.deleteShader(S),v=new Ws(s,M),E=D0(s,M)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,S0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=S,this}var $0=0,Jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kl(e),t.set(e,n)),n}},Kl=class{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}};function J0(i){return i===Bi||i===Er||i===wr}function K0(i,e,t,n,s,r){let a=new Cs,o=new Jl,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,E,P,N,U,k){let C=N.fog,H=U.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,le=e.get(v.envMap||$,Y),K=le&&le.mapping===vr?le.image.height:null,ie=m[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ye("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Le=re!==void 0?re.length:0,De=0;H.morphAttributes.position!==void 0&&(De=1),H.morphAttributes.normal!==void 0&&(De=2),H.morphAttributes.color!==void 0&&(De=3);let ue,Ce,ke,Q;if(ie){let ct=oi[ie];ue=ct.vertexShader,Ce=ct.fragmentShader}else{ue=v.vertexShader,Ce=v.fragmentShader;let ct=o.getVertexShaderStage(v),nt=o.getFragmentShaderStage(v);o.update(v,ct,nt),ke=ct.id,Q=nt.id}let ae=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),He=U.isInstancedMesh===!0,Se=U.isBatchedMesh===!0,Ve=!!v.map,mt=!!v.matcap,Ke=!!le,Qe=!!v.aoMap,gt=!!v.lightMap,Ge=!!v.bumpMap&&v.wireframe===!1,ut=!!v.normalMap,Lt=!!v.displacementMap,bt=!!v.emissiveMap,Rt=!!v.metalnessMap,St=!!v.roughnessMap,L=v.anisotropy>0,Dt=v.clearcoat>0,rt=v.dispersion>0,T=v.retroreflectivity>0,g=v.iridescence>0,O=v.sheen>0,W=v.transmission>0,j=L&&!!v.anisotropyMap,te=Dt&&!!v.clearcoatMap,de=Dt&&!!v.clearcoatNormalMap,J=Dt&&!!v.clearcoatRoughnessMap,se=g&&!!v.iridescenceMap,he=g&&!!v.iridescenceThicknessMap,Ue=O&&!!v.sheenColorMap,ye=O&&!!v.sheenRoughnessMap,ve=!!v.specularMap,Ne=!!v.specularColorMap,Re=!!v.specularIntensityMap,We=W&&!!v.transmissionMap,D=W&&!!v.thicknessMap,me=!!v.gradientMap,Z=!!v.alphaMap,ge=v.alphaTest>0,be=!!v.alphaHash,oe=!!v.extensions,Fe=Vn;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Fe=i.toneMapping);let Pe={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:ue,fragmentShader:Ce,defines:v.defines,customVertexShaderID:ke,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Se,batchingColor:Se&&U._colorsTexture!==null,instancing:He,instancingColor:He&&U.instanceColor!==null,instancingMorph:He&&U.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:mt,envMap:Ke,envMapMode:Ke&&le.mapping,envMapCubeUVHeight:K,aoMap:Qe,lightMap:gt,bumpMap:Ge,normalMap:ut,displacementMap:Lt,emissiveMap:bt,normalMapObjectSpace:ut&&v.normalMapType===mh,normalMapTangentSpace:ut&&v.normalMapType===go,packedNormalMap:ut&&v.normalMapType===go&&J0(v.normalMap.format),metalnessMap:Rt,roughnessMap:St,anisotropy:L,anisotropyMap:j,clearcoat:Dt,clearcoatMap:te,clearcoatNormalMap:de,clearcoatRoughnessMap:J,dispersion:rt,retroreflection:T,iridescence:g,iridescenceMap:se,iridescenceThicknessMap:he,sheen:O,sheenColorMap:Ue,sheenRoughnessMap:ye,specularMap:ve,specularColorMap:Ne,specularIntensityMap:Re,transmission:W,transmissionMap:We,thicknessMap:D,gradientMap:me,opaque:v.transparent===!1&&v.blending===Os&&v.alphaToCoverage===!1,alphaMap:Z,alphaTest:ge,alphaHash:be,combine:v.combine,mapUv:Ve&&x(v.map.channel),aoMapUv:Qe&&x(v.aoMap.channel),lightMapUv:gt&&x(v.lightMap.channel),bumpMapUv:Ge&&x(v.bumpMap.channel),normalMapUv:ut&&x(v.normalMap.channel),displacementMapUv:Lt&&x(v.displacementMap.channel),emissiveMapUv:bt&&x(v.emissiveMap.channel),metalnessMapUv:Rt&&x(v.metalnessMap.channel),roughnessMapUv:St&&x(v.roughnessMap.channel),anisotropyMapUv:j&&x(v.anisotropyMap.channel),clearcoatMapUv:te&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(v.sheenRoughnessMap.channel),specularMapUv:ve&&x(v.specularMap.channel),specularColorMapUv:Ne&&x(v.specularColorMap.channel),specularIntensityMapUv:Re&&x(v.specularIntensityMap.channel),transmissionMapUv:We&&x(v.transmissionMap.channel),thicknessMapUv:D&&x(v.thicknessMap.channel),alphaMapUv:Z&&x(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ut||L),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Ve||Z),fog:!!C,useFog:v.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&ut===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ae,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:De,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&pt.getTransfer(v.map.colorSpace)===Mt,decodeVideoTextureEmissive:bt&&v.emissiveMap.isVideoTexture===!0&&pt.getTransfer(v.emissiveMap.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mn,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:oe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&v.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(d(E,v),w(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function d(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function w(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){let E=m[v.type],P;if(E){let N=oi[E];P=Ch.clone(N.uniforms)}else P=v.uniforms;return P}function y(v,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new Z0(i,E,v,s),c.push(P),u.set(E,P)),P}function b(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function S(v){o.remove(v)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:A,acquireProgram:y,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:R}}function j0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Q0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function $h(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,x,M,p,d){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:m,material:x,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:d},i[e]=w):(w.id=h.id,w.object=h,w.geometry=m,w.material=x,w.materialVariant=a(h),w.groupOrder=M,w.renderOrder=h.renderOrder,w.z=p,w.group=d),e++,w}function l(h,m,x,M,p,d,w){w.reversedDepth===!0&&(p=-p);let A=o(h,m,x,M,p,d);x.transmission>0?n.push(A):x.transparent===!0?s.push(A):t.push(A)}function c(h,m,x,M,p,d){let w=o(h,m,x,M,p,d);x.transmission>0?n.unshift(w):x.transparent===!0?s.unshift(w):t.unshift(w)}function u(h,m){t.length>1&&t.sort(h||Q0),n.length>1&&n.sort(m||$h),s.length>1&&s.sort(m||$h)}function f(){for(let h=e,m=i.length;h<m;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function eg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Jh,i.set(n,[a])):s>=r.length?(a=new Jh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new st};break;case"SpotLight":t={position:new B,direction:new B,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function ng(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ig=0;function sg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rg(i){let e=new tg,t=ng(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Tt,a=new Tt;function o(c){let u=0,f=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,x=0,M=0,p=0,d=0,w=0,A=0,y=0,b=0,S=0,R=0,v=0,E=0,P=0;c.sort(sg);for(let U=0,k=c.length;U<k;U++){let C=c[U],H=C.color,$=C.intensity,Y=C.distance,le=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Bi?le=C.shadow.map.texture:le=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=H.r*$,f+=H.g*$,h+=H.b*$;else if(C.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(C.sh.coefficients[K],$);P++}else if(C.isSunLight){let K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ie=C.shadow,re=t.get(C);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[x]=re,n.sunShadowMap[x]=le;let Le=ie.getViewportCount();for(let De=0;De<Le;De++)n.sunShadowMatrix[M+De]=ie.getMatrix(De),n.sunShadowCascade[M+De]=ie._cascadeData[De];M+=Le,x++}n.sun[m]=K,m++}else if(C.isDirectionalLight){let K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ie=C.shadow,re=t.get(C);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,n.directionalShadow[p]=re,n.directionalShadowMap[p]=le,n.directionalShadowMatrix[p]=C.shadow.matrix,b++}n.directional[p]=K,p++}else if(C.isSpotLight){let K=e.get(C);K.position.setFromMatrixPosition(C.matrixWorld),K.color.copy(H).multiplyScalar($),K.distance=Y,K.coneCos=Math.cos(C.angle),K.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),K.decay=C.decay,n.spot[w]=K;let ie=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,ie.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[w]=ie.matrix,C.castShadow){let re=t.get(C);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,n.spotShadow[w]=re,n.spotShadowMap[w]=le,R++}w++}else if(C.isRectAreaLight){let K=e.get(C);K.color.copy(H).multiplyScalar($),K.halfWidth.set(C.width*.5,0,0),K.halfHeight.set(0,C.height*.5,0),n.rectArea[A]=K,A++}else if(C.isPointLight){let K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),K.distance=C.distance,K.decay=C.decay,C.castShadow){let ie=C.shadow,re=t.get(C);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,re.shadowCameraNear=ie.camera.near,re.shadowCameraFar=ie.camera.far,n.pointShadow[d]=re,n.pointShadowMap[d]=le,n.pointShadowMatrix[d]=C.shadow.matrix,S++}n.point[d]=K,d++}else if(C.isHemisphereLight){let K=e.get(C);K.skyColor.copy(C.color).multiplyScalar($),K.groundColor.copy(C.groundColor).multiplyScalar($),n.hemi[y]=K,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let N=n.hash;(N.sunLength!==m||N.directionalLength!==p||N.pointLength!==d||N.spotLength!==w||N.rectAreaLength!==A||N.hemiLength!==y||N.numSunShadows!==x||N.numDirectionalShadows!==b||N.numPointShadows!==S||N.numSpotShadows!==R||N.numSpotMaps!==v||N.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=p,n.spot.length=w,n.rectArea.length=A,n.point.length=d,n.hemi.length=y,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,N.sunLength=m,N.directionalLength=p,N.pointLength=d,N.spotLength=w,N.rectAreaLength=A,N.hemiLength=y,N.numSunShadows=x,N.numDirectionalShadows=b,N.numPointShadows=S,N.numSpotShadows=R,N.numSpotMaps=v,N.numLightProbes=P,n.version=ig++)}function l(c,u){let f=0,h=0,m=0,x=0,M=0,p=0,d=u.matrixWorldInverse;for(let w=0,A=c.length;w<A;w++){let y=c[w];if(y.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),f++}else if(y.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(y.isSpotLight){let b=n.spot[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),x++}else if(y.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let b=n.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function Kh(i){let e=new rg(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ag(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Kh(i),e.set(s,[o])):r>=a.length?(o=new Kh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
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
}`,cg=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],hg=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],jh=new Tt,Ar=new B,Wl=new B;function ug(i,e,t){let n=new Ls,s=new _e,r=new _e,a=new At,o=new fa,l=new pa,c={},u=t.maxTextureSize,f={[si]:Ht,[Ht]:si,[mn]:mn},h=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:og,fragmentShader:lg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let x=new cn;x.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Pt(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let d=this.type;this.render=function(S,R,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===Zc&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mr);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ri),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=d!==this.type;k&&R.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(H=>H.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,H=S.length;C<H;C++){let $=S[C],Y=$.shadow;if(Y===void 0){Ye("WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let le=Y.getFrameExtents();s.multiply(le),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,Y.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=K,Y.map===null||k===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Fs){if($.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Wt(s.x,s.y,{format:Bi,type:hn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),Y.map.texture.name=$.name+".shadowMap",Y.map.depthTexture=new ti(s.x,s.y,Tn),Y.map.depthTexture.name=$.name+".shadowMapDepth",Y.map.depthTexture.format=Jn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ut,Y.map.depthTexture.magFilter=Ut}else $.isPointLight?(Y.map=new Mo(s.x),Y.map.depthTexture=new ua(s.x,Gn)):(Y.map=new Wt(s.x,s.y),Y.map.depthTexture=new ti(s.x,s.y,Gn)),Y.map.depthTexture.name=$.name+".shadowMap",Y.map.depthTexture.format=Jn,this.type===mr?(Y.map.depthTexture.compareFunction=K?vo:xo,Y.map.depthTexture.minFilter=Ft,Y.map.depthTexture.magFilter=Ft):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ut,Y.map.depthTexture.magFilter=Ut);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let ie=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();$.isPointLight!==!0&&Y.updateMatrices($,v);for(let re=0;re<ie;re++){let Le=Y.getCamera(re);if($.isPointLight){let De=Y.camera,ue=Y.matrix,Ce=$.distance||De.far;Ce!==De.far&&(De.far=Ce,De.updateProjectionMatrix()),Ar.setFromMatrixPosition($.matrixWorld),De.position.copy(Ar),Wl.copy(De.position),Wl.add(cg[re]),De.up.copy(hg[re]),De.lookAt(Wl),De.updateMatrixWorld(),ue.makeTranslation(-Ar.x,-Ar.y,-Ar.z),jh.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(jh,De.coordinateSystem,De.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,re),i.clear();else{re===0&&(i.setRenderTarget(Y.map),i.clear());let De=Y.getViewport(re);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),U.viewport(a)}n=Y.getFrustum(re),y(R,v,Le,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Fs&&w(Y,v),Y.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(E,P,N)};function w(S,R){let v=e.update(M);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new Wt(s.x,s.y,{format:Bi,type:hn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,v,h,M,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,v,m,M,null)}function A(S,R,v,E){let P=null,N=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)P=N;else if(P=v.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=P.uuid,k=R.uuid,C=c[U];C===void 0&&(C={},c[U]=C);let H=C[k];H===void 0&&(H=P.clone(),C[k]=H,R.addEventListener("dispose",b)),P=H}if(P.visible=R.visible,P.wireframe=R.wireframe,E===Fs?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=i.properties.get(P);U.light=v}return P}function y(S,R,v,E,P){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Fs)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let k=e.update(S),C=S.material;if(Array.isArray(C)){let H=k.groups;for(let $=0,Y=H.length;$<Y;$++){let le=H[$],K=C[le.materialIndex];if(K&&K.visible){let ie=A(S,K,E,P);S.onBeforeShadow(i,S,R,v,k,ie,le),i.renderBufferDirect(v,null,k,ie,S,le),S.onAfterShadow(i,S,R,v,k,ie,le)}}}else if(C.visible){let H=A(S,C,E,P);S.onBeforeShadow(i,S,R,v,k,H,null),i.renderBufferDirect(v,null,k,H,S,null),S.onAfterShadow(i,S,R,v,k,H,null)}}let U=S.children;for(let k=0,C=U.length;k<C;k++)y(U[k],R,v,E,P)}function b(S){S.target.removeEventListener("dispose",b);for(let v in c){let E=c[v],P=S.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function dg(i,e){function t(){let D=!1,me=new At,Z=null,ge=new At(0,0,0,0);return{setMask:function(be){Z!==be&&!D&&(i.colorMask(be,be,be,be),Z=be)},setLocked:function(be){D=be},setClear:function(be,oe,Fe,Pe,ct){ct===!0&&(be*=Pe,oe*=Pe,Fe*=Pe),me.set(be,oe,Fe,Pe),ge.equals(me)===!1&&(i.clearColor(be,oe,Fe,Pe),ge.copy(me))},reset:function(){D=!1,Z=null,ge.set(-1,0,0,0)}}}function n(){let D=!1,me=!1,Z=null,ge=null,be=null;return{setReversed:function(oe){if(me!==oe){let Fe=e.get("EXT_clip_control");oe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),me=oe;let Pe=be;be=null,this.setClear(Pe)}},getReversed:function(){return me},setTest:function(oe){oe?ae(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(oe){Z!==oe&&!D&&(i.depthMask(oe),Z=oe)},setFunc:function(oe){if(me&&(oe=Ah[oe]),ge!==oe){switch(oe){case jr:i.depthFunc(i.NEVER);break;case Qr:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case ta:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=oe}},setLocked:function(oe){D=oe},setClear:function(oe){be!==oe&&(be=oe,me&&(oe=1-oe),i.clearDepth(oe))},reset:function(){D=!1,Z=null,ge=null,be=null,me=!1}}}function s(){let D=!1,me=null,Z=null,ge=null,be=null,oe=null,Fe=null,Pe=null,ct=null;return{setTest:function(nt){D||(nt?ae(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(nt){me!==nt&&!D&&(i.stencilMask(nt),me=nt)},setFunc:function(nt,qt,Yt){(Z!==nt||ge!==qt||be!==Yt)&&(i.stencilFunc(nt,qt,Yt),Z=nt,ge=qt,be=Yt)},setOp:function(nt,qt,Yt){(oe!==nt||Fe!==qt||Pe!==Yt)&&(i.stencilOp(nt,qt,Yt),oe=nt,Fe=qt,Pe=Yt)},setLocked:function(nt){D=nt},setClear:function(nt){ct!==nt&&(i.clearStencil(nt),ct=nt)},reset:function(){D=!1,me=null,Z=null,ge=null,be=null,oe=null,Fe=null,Pe=null,ct=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},m=new WeakMap,x=[],M=null,p=!1,d=null,w=null,A=null,y=null,b=null,S=null,R=null,v=new st(0,0,0),E=0,P=!1,N=null,U=null,k=null,C=null,H=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,le=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=le>=1):K.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=le>=2);let ie=null,re={},Le=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),ue=new At().fromArray(Le),Ce=new At().fromArray(De);function ke(D,me,Z,ge){let be=new Uint8Array(4),oe=i.createTexture();i.bindTexture(D,oe),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Z;Fe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(me+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return oe}let Q={};Q[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Es),Ge(!1),ut(dl),ae(i.CULL_FACE),Qe(ri);function ae(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ae(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function He(D,me){return h[D]!==me?(i.bindFramebuffer(D,me),h[D]=me,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function Se(D,me){let Z=x,ge=!1;if(D){Z=m.get(me),Z===void 0&&(Z=[],m.set(me,Z));let be=D.textures;if(Z.length!==be.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Fe=be.length;oe<Fe;oe++)Z[oe]=i.COLOR_ATTACHMENT0+oe;Z.length=be.length,ge=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ge=!0);ge&&i.drawBuffers(Z)}function Ve(D){return M!==D?(i.useProgram(D),M=D,!0):!1}let mt={[_i]:i.FUNC_ADD,[$c]:i.FUNC_SUBTRACT,[Jc]:i.FUNC_REVERSE_SUBTRACT};mt[Kc]=i.MIN,mt[jc]=i.MAX;let Ke={[Qc]:i.ZERO,[gr]:i.ONE,[eh]:i.SRC_COLOR,[gl]:i.SRC_ALPHA,[ah]:i.SRC_ALPHA_SATURATE,[sh]:i.DST_COLOR,[nh]:i.DST_ALPHA,[th]:i.ONE_MINUS_SRC_COLOR,[xl]:i.ONE_MINUS_SRC_ALPHA,[rh]:i.ONE_MINUS_DST_COLOR,[ih]:i.ONE_MINUS_DST_ALPHA,[oh]:i.CONSTANT_COLOR,[lh]:i.ONE_MINUS_CONSTANT_COLOR,[ch]:i.CONSTANT_ALPHA,[hh]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(D,me,Z,ge,be,oe,Fe,Pe,ct,nt){if(D===ri){p===!0&&(Ae(i.BLEND),p=!1);return}if(p===!1&&(ae(i.BLEND),p=!0),D!==Ca){if(D!==d||nt!==P){if((w!==_i||b!==_i)&&(i.blendEquation(i.FUNC_ADD),w=_i,b=_i),nt)switch(D){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",D);break}else switch(D){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pl:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ml:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",D);break}A=null,y=null,S=null,R=null,v.set(0,0,0),E=0,d=D,P=nt}return}be=be||me,oe=oe||Z,Fe=Fe||ge,(me!==w||be!==b)&&(i.blendEquationSeparate(mt[me],mt[be]),w=me,b=be),(Z!==A||ge!==y||oe!==S||Fe!==R)&&(i.blendFuncSeparate(Ke[Z],Ke[ge],Ke[oe],Ke[Fe]),A=Z,y=ge,S=oe,R=Fe),(Pe.equals(v)===!1||ct!==E)&&(i.blendColor(Pe.r,Pe.g,Pe.b,ct),v.copy(Pe),E=ct),d=D,P=!1}function gt(D,me){D.side===mn?Ae(i.CULL_FACE):ae(i.CULL_FACE);let Z=D.side===Ht;me&&(Z=!Z),Ge(Z),D.blending===Os&&D.transparent===!1?Qe(ri):Qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ge=D.stencilWrite;o.setTest(ge),ge&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),bt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function ut(D){D!==qc?(ae(i.CULL_FACE),D!==U&&(D===dl?i.cullFace(i.BACK):D===Yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),U=D}function Lt(D){D!==k&&(Y&&i.lineWidth(D),k=D)}function bt(D,me,Z){D?(ae(i.POLYGON_OFFSET_FILL),(C!==me||H!==Z)&&(C=me,H=Z,a.getReversed()&&(me=-me),i.polygonOffset(me,Z))):Ae(i.POLYGON_OFFSET_FILL)}function Rt(D){D?ae(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function St(D){D===void 0&&(D=i.TEXTURE0+$-1),ie!==D&&(i.activeTexture(D),ie=D)}function L(D,me,Z){Z===void 0&&(ie===null?Z=i.TEXTURE0+$-1:Z=ie);let ge=re[Z];ge===void 0&&(ge={type:void 0,texture:void 0},re[Z]=ge),(ge.type!==D||ge.texture!==me)&&(ie!==Z&&(i.activeTexture(Z),ie=Z),i.bindTexture(D,me||Q[D]),ge.type=D,ge.texture=me)}function Dt(){let D=re[ie];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function g(){try{i.texSubImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function O(){try{i.texSubImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function te(){try{i.texStorage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function de(){try{i.texStorage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function J(){try{i.texImage2D(...arguments)}catch(D){Je("WebGLState:",D)}}function se(){try{i.texImage3D(...arguments)}catch(D){Je("WebGLState:",D)}}function he(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function Ue(D,me){f[D]!==me&&(i.pixelStorei(D,me),f[D]=me)}function ye(D){ue.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ue.copy(D))}function ve(D){Ce.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ce.copy(D))}function Ne(D,me){let Z=c.get(me);Z===void 0&&(Z=new WeakMap,c.set(me,Z));let ge=Z.get(D);ge===void 0&&(ge=i.getUniformBlockIndex(me,D.name),Z.set(D,ge))}function Re(D,me){let ge=c.get(me).get(D);l.get(me)!==ge&&(i.uniformBlockBinding(me,ge,D.__bindingPointIndex),l.set(me,ge))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ie=null,re={},h={},m=new WeakMap,x=[],M=null,p=!1,d=null,w=null,A=null,y=null,b=null,S=null,R=null,v=new st(0,0,0),E=0,P=!1,N=null,U=null,k=null,C=null,H=null,ue.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Ae,bindFramebuffer:He,drawBuffers:Se,useProgram:Ve,setBlending:Qe,setMaterial:gt,setFlipSided:Ge,setCullFace:ut,setLineWidth:Lt,setPolygonOffset:bt,setScissorTest:Rt,activeTexture:St,bindTexture:L,unbindTexture:Dt,compressedTexImage2D:rt,compressedTexImage3D:T,texImage2D:J,texImage3D:se,pixelStorei:Ue,getParameter:he,updateUBOMapping:Ne,uniformBlockBinding:Re,texStorage2D:te,texStorage3D:de,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:j,scissor:ye,viewport:ve,reset:We}}function fg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap,f=new Set,h,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,g){return x?new OffscreenCanvas(T,g):rr("canvas")}function p(T,g,O){let W=1,j=rt(T);if((j.width>O||j.height>O)&&(W=O/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let te=Math.floor(W*j.width),de=Math.floor(W*j.height);h===void 0&&(h=M(te,de));let J=g?M(te,de):h;return J.width=te,J.height=de,J.getContext("2d").drawImage(T,0,0,te,de),Ye("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+te+"x"+de+")."),J}else return"data"in T&&Ye("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function d(T){return T.generateMipmaps}function w(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,g,O,W,j,te=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de;W&&(de=e.get("EXT_texture_norm16"),de||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),O===i.SHORT&&de&&(J=de.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),g===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),O===i.SHORT&&de&&(J=de.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),O===i.SHORT&&de&&(J=de.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){let se=te?sr:pt.getTransfer(j);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=se===Mt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),O===i.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(T,g){let O;return T?g===null||g===Gn||g===zs?O=i.DEPTH24_STENCIL8:g===Tn?O=i.DEPTH32F_STENCIL8:g===Bs&&(O=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Gn||g===zs?O=i.DEPTH_COMPONENT24:g===Tn?O=i.DEPTH_COMPONENT32F:g===Bs&&(O=i.DEPTH_COMPONENT16),O}function S(T,g){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==Ft?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function R(T){let g=T.target;g.removeEventListener("dispose",R),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function v(T){let g=T.target;g.removeEventListener("dispose",v),N(g)}function E(T){let g=n.get(T);if(g.__webglInit===void 0)return;let O=T.source,W=m.get(O);if(W){let j=W[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(T),Object.keys(W).length===0&&m.delete(O)}n.remove(T)}function P(T){let g=n.get(T);i.deleteTexture(g.__webglTexture);let O=T.source,W=m.get(O);delete W[g.__cacheKey],a.memory.textures--}function N(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let j=0;j<g.__webglFramebuffer[W].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[W][j]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let O=T.textures;for(let W=0,j=O.length;W<j;W++){let te=n.get(O[W]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(O[W])}n.remove(T)}let U=0;function k(){U=0}function C(){return U}function H(T){U=T}function $(){let T=U;return T>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function Y(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function le(T,g){let O=n.get(T);if(T.isVideoTexture&&L(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let W=T.image;if(W===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,T,g);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function K(T,g){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Ae(O,T,g);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function ie(T,g){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Ae(O,T,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function re(T,g){let O=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){He(O,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}let Le={[ra]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},De={[Ut]:i.NEAREST,[fh]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[La]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},ue={[xh]:i.NEVER,[bh]:i.ALWAYS,[vh]:i.LESS,[xo]:i.LEQUAL,[_h]:i.EQUAL,[vo]:i.GEQUAL,[yh]:i.GREATER,[Mh]:i.NOTEQUAL};function Ce(T,g){if(g.type===Tn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ft||g.magFilter===La||g.magFilter===_r||g.magFilter===Fi||g.minFilter===Ft||g.minFilter===La||g.minFilter===_r||g.minFilter===Fi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Le[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Le[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Le[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,De[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,De[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ue[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ut||g.minFilter!==_r&&g.minFilter!==Fi||g.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ke(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",R));let W=g.source,j=m.get(W);j===void 0&&(j={},m.set(W,j));let te=Y(g);if(te!==T.__cacheKey){j[te]===void 0&&(j[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[te].usedTimes++;let de=j[T.__cacheKey];de!==void 0&&(j[T.__cacheKey].usedTimes--,de.usedTimes===0&&P(g)),T.__cacheKey=te,T.__webglTexture=j[te].texture}return O}function Q(T,g,O){return Math.floor(Math.floor(T/O)/g)}function ae(T,g,O,W){let te=T.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,W,g.data);else{te.sort((Ue,ye)=>Ue.start-ye.start);let de=0;for(let Ue=1;Ue<te.length;Ue++){let ye=te[de],ve=te[Ue],Ne=ye.start+ye.count,Re=Q(ve.start,g.width,4),We=Q(ye.start,g.width,4);ve.start<=Ne+1&&Re===We&&Q(ve.start+ve.count-1,g.width,4)===Re?ye.count=Math.max(ye.count,ve.start+ve.count-ye.start):(++de,te[de]=ve)}te.length=de+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ue=0,ye=te.length;Ue<ye;Ue++){let ve=te[Ue],Ne=Math.floor(ve.start/4),Re=Math.ceil(ve.count/4),We=Ne%g.width,D=Math.floor(Ne/g.width),me=Re,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,We,D,me,Z,O,W,g.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function Ae(T,g,O){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);let j=ke(T,g),te=g.source;t.bindTexture(W,T.__webglTexture,i.TEXTURE0+O);let de=n.get(te);if(te.version!==de.__version||j===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Z=pt.getPrimaries(pt.workingColorSpace),ge=g.colorSpace===yi?null:pt.getPrimaries(g.colorSpace),be=g.colorSpace===yi||Z===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let se=p(g.image,!1,s.maxTextureSize);se=Dt(g,se);let he=r.convert(g.format,g.colorSpace),Ue=r.convert(g.type),ye=y(g.internalFormat,he,Ue,g.normalized,g.colorSpace,g.isVideoTexture);Ce(W,g);let ve,Ne=g.mipmaps,Re=g.isVideoTexture!==!0,We=de.__version===void 0||j===!0,D=te.dataReady,me=S(g,se);if(g.isDepthTexture)ye=b(g.format===Oi,g.type),We&&(Re?t.texStorage2D(i.TEXTURE_2D,1,ye,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,ye,se.width,se.height,0,he,Ue,null));else if(g.isDataTexture)if(Ne.length>0){Re&&We&&t.texStorage2D(i.TEXTURE_2D,me,ye,Ne[0].width,Ne[0].height);for(let Z=0,ge=Ne.length;Z<ge;Z++)ve=Ne[Z],Re?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,he,Ue,ve.data):t.texImage2D(i.TEXTURE_2D,Z,ye,ve.width,ve.height,0,he,Ue,ve.data);g.generateMipmaps=!1}else Re?(We&&t.texStorage2D(i.TEXTURE_2D,me,ye,se.width,se.height),D&&ae(g,se,he,Ue)):t.texImage2D(i.TEXTURE_2D,0,ye,se.width,se.height,0,he,Ue,se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Re&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ye,Ne[0].width,Ne[0].height,se.depth);for(let Z=0,ge=Ne.length;Z<ge;Z++)if(ve=Ne[Z],g.format!==gn)if(he!==null)if(Re){if(D)if(g.layerUpdates.size>0){let be=Bl(ve.width,ve.height,g.format,g.type);for(let oe of g.layerUpdates){let Fe=ve.data.subarray(oe*be/ve.data.BYTES_PER_ELEMENT,(oe+1)*be/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,oe,ve.width,ve.height,1,he,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,se.depth,he,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ye,ve.width,ve.height,se.depth,0,ve.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,se.depth,he,Ue,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,ye,ve.width,ve.height,se.depth,0,he,Ue,ve.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Re&&We&&t.texStorage2D(i.TEXTURE_2D,me,ye,Ne[0].width,Ne[0].height);for(let Z=0,ge=Ne.length;Z<ge;Z++)ve=Ne[Z],g.format!==gn?he!==null?Re?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,he,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,ye,ve.width,ve.height,0,ve.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,he,Ue,ve.data):t.texImage2D(i.TEXTURE_2D,Z,ye,ve.width,ve.height,0,he,Ue,ve.data)}else if(g.isDataArrayTexture)if(Re){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ye,se.width,se.height,se.depth),D)if(g.layerUpdates.size>0){let Z=Bl(se.width,se.height,g.format,g.type);for(let ge of g.layerUpdates){let be=se.data.subarray(ge*Z/se.data.BYTES_PER_ELEMENT,(ge+1)*Z/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,se.width,se.height,1,he,Ue,be)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,Ue,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,se.width,se.height,se.depth,0,he,Ue,se.data);else if(g.isData3DTexture)Re?(We&&t.texStorage3D(i.TEXTURE_3D,me,ye,se.width,se.height,se.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,Ue,se.data)):t.texImage3D(i.TEXTURE_3D,0,ye,se.width,se.height,se.depth,0,he,Ue,se.data);else if(g.isFramebufferTexture){if(We)if(Re)t.texStorage2D(i.TEXTURE_2D,me,ye,se.width,se.height);else{let Z=se.width,ge=se.height;for(let be=0;be<me;be++)t.texImage2D(i.TEXTURE_2D,be,ye,Z,ge,0,he,Ue,null),Z>>=1,ge>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),se.parentNode!==Z){Z.appendChild(se),f.add(g),Z.onpaint=ge=>{let be=ge.changedElements;for(let oe of f)be.includes(oe.image)&&(oe.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let be=i.RGBA,oe=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,oe,Fe,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Re&&We){let Z=rt(Ne[0]);t.texStorage2D(i.TEXTURE_2D,me,ye,Z.width,Z.height)}for(let Z=0,ge=Ne.length;Z<ge;Z++)ve=Ne[Z],Re?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,he,Ue,ve):t.texImage2D(i.TEXTURE_2D,Z,ye,he,Ue,ve);g.generateMipmaps=!1}else if(Re){if(We){let Z=rt(se);t.texStorage2D(i.TEXTURE_2D,me,ye,Z.width,Z.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ue,se)}else t.texImage2D(i.TEXTURE_2D,0,ye,he,Ue,se);d(g)&&w(W),de.__version=te.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function He(T,g,O){if(g.image.length!==6)return;let W=ke(T,g),j=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let te=n.get(j);if(j.version!==te.__version||W===!0){t.activeTexture(i.TEXTURE0+O);let de=pt.getPrimaries(pt.workingColorSpace),J=g.colorSpace===yi?null:pt.getPrimaries(g.colorSpace),se=g.colorSpace===yi||de===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let he=g.isCompressedTexture||g.image[0].isCompressedTexture,Ue=g.image[0]&&g.image[0].isDataTexture,ye=[];for(let oe=0;oe<6;oe++)!he&&!Ue?ye[oe]=p(g.image[oe],!0,s.maxCubemapSize):ye[oe]=Ue?g.image[oe].image:g.image[oe],ye[oe]=Dt(g,ye[oe]);let ve=ye[0],Ne=r.convert(g.format,g.colorSpace),Re=r.convert(g.type),We=y(g.internalFormat,Ne,Re,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,me=te.__version===void 0||W===!0,Z=j.dataReady,ge=S(g,ve);Ce(i.TEXTURE_CUBE_MAP,g);let be;if(he){D&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,We,ve.width,ve.height);for(let oe=0;oe<6;oe++){be=ye[oe].mipmaps;for(let Fe=0;Fe<be.length;Fe++){let Pe=be[Fe];g.format!==gn?Ne!==null?D?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,Pe.width,Pe.height,Ne,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,We,Pe.width,Pe.height,0,Pe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,Pe.width,Pe.height,Ne,Re,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,We,Pe.width,Pe.height,0,Ne,Re,Pe.data)}}}else{if(be=g.mipmaps,D&&me){be.length>0&&ge++;let oe=rt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,We,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ue){D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ye[oe].width,ye[oe].height,Ne,Re,ye[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,We,ye[oe].width,ye[oe].height,0,Ne,Re,ye[oe].data);for(let Fe=0;Fe<be.length;Fe++){let ct=be[Fe].image[oe].image;D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,ct.width,ct.height,Ne,Re,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,We,ct.width,ct.height,0,Ne,Re,ct.data)}}else{D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ne,Re,ye[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,We,Ne,Re,ye[oe]);for(let Fe=0;Fe<be.length;Fe++){let Pe=be[Fe];D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,Ne,Re,Pe.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,We,Ne,Re,Pe.image[oe])}}}d(g)&&w(i.TEXTURE_CUBE_MAP),te.__version=j.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Se(T,g,O,W,j,te){let de=r.convert(O.format,O.colorSpace),J=r.convert(O.type),se=y(O.internalFormat,de,J,O.normalized,O.colorSpace),he=n.get(g),Ue=n.get(O);if(Ue.__renderTarget=g,!he.__hasExternalTextures){let ye=Math.max(1,g.width>>te),ve=Math.max(1,g.height>>te);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,te,se,ye,ve,g.depth,0,de,J,null):t.texImage2D(j,te,se,ye,ve,0,de,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),St(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,j,Ue.__webglTexture,0,Rt(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,j,Ue.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(T,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){let W=g.depthTexture,j=W&&W.isDepthTexture?W.type:null,te=b(g.stencilBuffer,j),de=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;St(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt(g),te,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt(g),te,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,te,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,T)}else{let W=g.textures;for(let j=0;j<W.length;j++){let te=W[j],de=r.convert(te.format,te.colorSpace),J=r.convert(te.type),se=y(te.internalFormat,de,J,te.normalized,te.colorSpace);St(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt(g),se,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt(g),se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,se,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(T,g,O){let W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(g.depthTexture);if(j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(j.__webglInit===void 0&&(j.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,g.depthTexture);let he=r.convert(g.depthTexture.format),Ue=r.convert(g.depthTexture.type),ye;g.depthTexture.format===Jn?ye=i.DEPTH_COMPONENT24:g.depthTexture.format===Oi&&(ye=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ye,g.width,g.height,0,he,Ue,null)}}else le(g.depthTexture,0);let te=j.__webglTexture,de=Rt(g),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,se=g.depthTexture.format===Oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Jn)St(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,J,te,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,se,J,te,0);else if(g.depthTexture.format===Oi)St(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,J,te,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,se,J,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(T){let g=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let W=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){let j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=W}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)mt(g.__webglFramebuffer[W],T,W);else{let W=T.texture.mipmaps;W&&W.length>0?mt(g.__webglFramebuffer[0],T,0):mt(g.__webglFramebuffer,T,0)}else if(O){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Ve(g.__webglDepthbuffer[W],T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,te)}}else{let W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ve(g.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(T,g,O){let W=n.get(T);g!==void 0&&Se(W.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ke(T)}function gt(T){let g=T.texture,O=n.get(T),W=n.get(g);T.addEventListener("dispose",v);let j=T.textures,te=T.isWebGLCubeRenderTarget===!0,de=j.length>1;if(de||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),te){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let se=0;se<g.mipmaps.length;se++)O.__webglFramebuffer[J][se]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(de)for(let J=0,se=j.length;J<se;J++){let he=n.get(j[J]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&St(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){let se=j[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let he=r.convert(se.format,se.colorSpace),Ue=r.convert(se.type),ye=y(se.internalFormat,he,Ue,se.normalized,se.colorSpace,T.isXRRenderTarget===!0),ve=Rt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ye,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let se=0;se<g.mipmaps.length;se++)Se(O.__webglFramebuffer[J][se],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,se);else Se(O.__webglFramebuffer[J],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(g)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let J=0,se=j.length;J<se;J++){let he=j[J],Ue=n.get(he),ye=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ye=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ue.__webglTexture),Ce(ye,he),Se(O.__webglFramebuffer,T,he,i.COLOR_ATTACHMENT0+J,ye,0),d(he)&&w(ye)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),Ce(J,g),g.mipmaps&&g.mipmaps.length>0)for(let se=0;se<g.mipmaps.length;se++)Se(O.__webglFramebuffer[se],T,g,i.COLOR_ATTACHMENT0,J,se);else Se(O.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,J,0);d(g)&&w(J),t.unbindTexture()}T.depthBuffer&&Ke(T)}function Ge(T){let g=T.textures;for(let O=0,W=g.length;O<W;O++){let j=g[O];if(d(j)){let te=A(T),de=n.get(j).__webglTexture;t.bindTexture(te,de),w(te),t.unbindTexture()}}}let ut=[],Lt=[];function bt(T){if(T.samples>0){if(St(T)===!1){let g=T.textures,O=T.width,W=T.height,j=i.COLOR_BUFFER_BIT,te=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(T),J=g.length>1;if(J)for(let he=0;he<g.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let se=T.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<g.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[he]);let Ue=n.get(g[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,j,i.NEAREST),l===!0&&(ut.length=0,Lt.length=0,ut.push(i.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ut.push(te),Lt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let he=0;he<g.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,de.__webglColorRenderbuffer[he]);let Ue=n.get(g[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Rt(T){return Math.min(s.maxSamples,T.samples)}function St(T){let g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(T){let g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Dt(T,g){let O=T.colorSpace,W=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Kn&&O!==yi&&(pt.getTransfer(O)===Mt?(W!==gn||j!==nn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",O)),g}function rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=k,this.getTextureUnits=C,this.setTextureUnits=H,this.setTexture2D=le,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=re,this.rebindTextures=Qe,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pg(i,e){function t(n,s=yi){let r,a=pt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tl)return i.BYTE;if(n===Al)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Da)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Pl)return i.ALPHA;if(n===Il)return i.RGB;if(n===gn)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===ks)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===yr||n===Mr||n===br||n===Sr)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===ka||n===Ha||n===Va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Er||n===Za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Wa)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qa)return r.COMPRESSED_R11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Er)return r.COMPRESSED_RG11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===ho||n===uo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===co)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fo||n===po||n===wr||n===mo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gg=`
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

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new hr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kt({vertexShader:mg,fragmentShader:gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends jn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,x=null,M=typeof XRWebGLBinding<"u",p=new jl,d={},w=t.getContextAttributes(),A=null,y=null,b=[],S=[],R=new _e,v=null,E=null,P=new ln;P.viewport=new At;let N=new ln;N.viewport=new At;let U=[P,N],k=new Ra,C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=b[Q];return ae===void 0&&(ae=new Ps,b[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=b[Q];return ae===void 0&&(ae=new Ps,b[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=b[Q];return ae===void 0&&(ae=new Ps,b[Q]=ae),ae.getHandSpace()};function $(Q){let ae=S.indexOf(Q.inputSource);if(ae===-1)return;let Ae=b[ae];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,c||a),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",le);for(let Q=0;Q<b.length;Q++){let ae=S[Q];ae!==null&&(S[Q]=null,b[Q].disconnect(ae))}C=null,H=null,p.reset();for(let Q in d)delete d[Q];if(e.setRenderTarget(A),m=null,h=null,f=null,s=null,y=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),E!==null){let Q=E.camera;Q.fov=E.fov,Q.zoom=E.zoom,Q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",le),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,He=null,Se=null;w.depth&&(Se=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=w.stencil?Oi:Jn,He=w.stencil?zs:Gn);let Ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ve),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Wt(h.textureWidth,h.textureHeight,{format:gn,type:nn,depthTexture:new ti(h.textureWidth,h.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ae={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Wt(m.framebufferWidth,m.framebufferHeight,{format:gn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function le(Q){for(let ae=0;ae<Q.removed.length;ae++){let Ae=Q.removed[ae],He=S.indexOf(Ae);He>=0&&(S[He]=null,b[He].disconnect(Ae))}for(let ae=0;ae<Q.added.length;ae++){let Ae=Q.added[ae],He=S.indexOf(Ae);if(He===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=S.length){S.push(Ae),He=Ve;break}else if(S[Ve]===null){S[Ve]=Ae,He=Ve;break}if(He===-1)break}let Se=b[He];Se&&Se.connect(Ae)}}let K=new B,ie=new B;function re(Q,ae,Ae){K.setFromMatrixPosition(ae.matrixWorld),ie.setFromMatrixPosition(Ae.matrixWorld);let He=K.distanceTo(ie),Se=ae.projectionMatrix.elements,Ve=Ae.projectionMatrix.elements,mt=Se[14]/(Se[10]-1),Ke=Se[14]/(Se[10]+1),Qe=(Se[9]+1)/Se[5],gt=(Se[9]-1)/Se[5],Ge=(Se[8]-1)/Se[0],ut=(Ve[8]+1)/Ve[0],Lt=mt*Ge,bt=mt*ut,Rt=He/(-Ge+ut),St=Rt*-Ge;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(St),Q.translateZ(Rt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Se[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let L=mt+Rt,Dt=Ke+Rt,rt=Lt-St,T=bt+(He-St),g=Qe*Ke/Dt*L,O=gt*Ke/Dt*L;Q.projectionMatrix.makePerspective(rt,T,g,O,L,Dt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Le(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ae=Q.near,Ae=Q.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(Ae=p.depthFar)),k.near=N.near=P.near=ae,k.far=N.far=P.far=Ae,(C!==k.near||H!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),C=k.near,H=k.far),k.layers.mask=Q.layers.mask|6,P.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let He=Q.parent,Se=k.cameras;Le(k,He);for(let Ve=0;Ve<Se.length;Ve++)Le(Se[Ve],He);Se.length===2?re(k,P,N):k.projectionMatrix.copy(P.projectionMatrix),E===null&&Q.isPerspectiveCamera&&(E={camera:Q,fov:Q.fov,zoom:Q.zoom}),De(Q,k,He)};function De(Q,ae,Ae){Ae===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=As*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(Q){return d[Q]};let ue=null;function Ce(Q,ae){if(u=ae.getViewerPose(c||a),x=ae,u!==null){let Ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let He=!1;Ae.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let Ke=0;Ke<Ae.length;Ke++){let Qe=Ae[Ke],gt=null;if(m!==null)gt=m.getViewport(Qe);else{let ut=f.getViewSubImage(h,Qe);gt=ut.viewport,Ke===0&&(e.setRenderTargetTextures(y,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(y))}let Ge=U[Ke];Ge===void 0&&(Ge=new ln,Ge.layers.enable(Ke),Ge.viewport=new At,U[Ke]=Ge),Ge.matrix.fromArray(Qe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Qe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(gt.x,gt.y,gt.width,gt.height),Ke===0&&(k.matrix.copy(Ge.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(Ge)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let Ke=f.getDepthInformation(Ae[0]);Ke&&Ke.isValid&&Ke.texture&&p.init(Ke,s.renderState)}if(Se&&Se.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let Ke=0;Ke<Ae.length;Ke++){let Qe=Ae[Ke].camera;if(Qe){let gt=d[Qe];gt||(gt=new hr,d[Qe]=gt);let Ge=f.getCameraImage(Qe);gt.sourceTexture=Ge}}}}for(let Ae=0;Ae<b.length;Ae++){let He=S[Ae],Se=b[Ae];He!==null&&Se!==void 0&&Se.update(He,ae,c||a)}ue&&ue(Q,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),x=null}let ke=new Qh;ke.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){ue=Q},this.dispose=function(){}}},xg=new Tt,ru=new tt;ru.set(-1,0,0,0,1,0,0,0,1);function vg(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Ul(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,w,A,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),x(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),M(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,w,A):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ht&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ht&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let w=e.get(d),A=w.envMap,y=w.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ru),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ht&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){let w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _g(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let S=b.program;n.uniformBlockBinding(y,S)}function c(y,b){let S=s[y.id];S===void 0&&(p(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",w));let R=b.program;n.updateUBOMapping(y,R);let v=e.render.frame;r[y.id]!==v&&(h(y),r[y.id]=v)}function u(y){let b=f();y.__bindingPointIndex=b;let S=i.createBuffer(),R=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let b=s[y.id],S=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,E=S.length;v<E;v++){let P=S[v];if(Array.isArray(P))for(let N=0,U=P.length;N<U;N++)m(P[N],v,N,R);else m(P,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,b,S,R){if(M(y,b,S,R)===!0){let v=y.__offset,E=y.value;if(Array.isArray(E)){let P=0;for(let N=0;N<E.length;N++){let U=E[N],k=d(U);x(U,y.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function x(y,b,S){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,S)}function M(y,b,S,R){let v=y.value,E=b+"_"+S;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{let P=R[E];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function p(y){let b=y.uniforms,S=0,R=16;for(let E=0,P=b.length;E<P;E++){let N=Array.isArray(b[E])?b[E]:[b[E]];for(let U=0,k=N.length;U<k;U++){let C=N[U],H=Array.isArray(C.value)?C.value:[C.value];for(let $=0,Y=H.length;$<Y;$++){let le=H[$],K=d(le),ie=S%R,re=ie%K.boundary,Le=ie+re;S+=re,Le!==0&&R-Le<K.storage&&(S+=R-Le),C.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=K.storage}}}let v=S%R;return v>0&&(S+=R-v),y.__size=S,y.__cache={},this}function d(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",y),b}function w(y){let b=y.target;b.removeEventListener("dispose",w);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var yg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ai=null;function Mg(){return ai===null&&(ai=new Qi(yg,16,16,Bi,hn),ai.name="DFG_LUT",ai.minFilter=Ft,ai.magFilter=Ft,ai.wrapS=$n,ai.wrapT=$n,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}var bo=class{constructor(e={}){let{canvas:t=Eh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=nn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let M=m,p=new Set([Ba,Oa,Fa]),d=new Set([nn,Gn,Bs,zs,Na,Ua]),w=new Uint32Array(4),A=new Int32Array(4),y=new B,b=null,S=null,R=[],v=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,U=null,k=null,C=null,H=null;this._outputColorSpace=fn;let $=0,Y=0,le=null,K=-1,ie=null,re=new At,Le=new At,De=null,ue=new st(0),Ce=0,ke=t.width,Q=t.height,ae=1,Ae=null,He=null,Se=new At(0,0,ke,Q),Ve=new At(0,0,ke,Q),mt=!1,Ke=new Ls,Qe=!1,gt=!1,Ge=new Tt,ut=new B,Lt=new At,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function St(){return le===null?ae:1}let L=n;function Dt(_,I){return t.getContext(_,I)}let rt,T,g,O,W,j,te,de,J,se,he,Ue,ye,ve,Ne,Re,We,D,me,Z,ge,be,oe;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",qt,!1),L===null){let I="webgl2";if(L=Dt(I,_),L===null)throw Dt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(_){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",qt,!1),Je("WebGLRenderer: "+_.message),_}function Fe(){rt=new Rm(L),rt.init(),ge=new pg(L,rt),T=new vm(L,rt,e,ge),g=new dg(L,rt),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),k=L.createFramebuffer(),C=L.createFramebuffer(),H=L.createFramebuffer(),O=new Im(L),W=new j0,j=new fg(L,rt,g,W,T,ge,O),te=new Am(P),de=new Ld(L),be=new gm(L,de),J=new Cm(L,de,O,be),se=new Dm(L,J,de,be,O),D=new Lm(L,T,j),Ne=new _m(W),he=new K0(P,te,rt,T,be,Ne),Ue=new vg(P,W),ye=new eg,ve=new ag(rt),We=new mm(P,te,g,se,x,l),Re=new ug(P,se,T),oe=new _g(L,O,T,g),me=new xm(L,rt,O),Z=new Pm(L,rt,O),O.programs=he.programs,P.capabilities=T,P.extensions=rt,P.properties=W,P.renderLists=ye,P.shadowMap=Re,P.state=g,P.info=O}M!==nn&&(E=new Um(M,t.width,t.height,o,s,r));let Pe=new Ql(P,L);this.xr=Pe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let _=rt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=rt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(_){_!==void 0&&(ae=_,this.setSize(ke,Q,!1))},this.getSize=function(_){return _.set(ke,Q)},this.setSize=function(_,I,X=!0){if(Pe.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=_,Q=I,t.width=Math.floor(_*ae),t.height=Math.floor(I*ae),X===!0&&(t.style.width=_+"px",t.style.height=I+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(ke*ae,Q*ae).floor()},this.setDrawingBufferSize=function(_,I,X){ke=_,Q=I,ae=X,t.width=Math.floor(_*X),t.height=Math.floor(I*X),this.setViewport(0,0,_,I)},this.setEffects=function(_){if(M===nn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let I=0;I<_.length;I++)if(_[I].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(re)},this.getViewport=function(_){return _.copy(Se)},this.setViewport=function(_,I,X,z){_.isVector4?Se.set(_.x,_.y,_.z,_.w):Se.set(_,I,X,z),g.viewport(re.copy(Se).multiplyScalar(ae).round())},this.getScissor=function(_){return _.copy(Ve)},this.setScissor=function(_,I,X,z){_.isVector4?Ve.set(_.x,_.y,_.z,_.w):Ve.set(_,I,X,z),g.scissor(Le.copy(Ve).multiplyScalar(ae).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(_){g.setScissorTest(mt=_)},this.setOpaqueSort=function(_){Ae=_},this.setTransparentSort=function(_){He=_},this.getClearColor=function(_){return _.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(_=!0,I=!0,X=!0){let z=0;if(_){let V=!1;if(le!==null){let Ee=le.texture.format;V=p.has(Ee)}if(V){let Ee=le.texture.type,F=d.has(Ee),q=We.getClearColor(),ne=We.getClearAlpha(),ee=q.r,pe=q.g,xe=q.b;F?(w[0]=ee,w[1]=pe,w[2]=xe,w[3]=ne,L.clearBufferuiv(L.COLOR,0,w)):(A[0]=ee,A[1]=pe,A[2]=xe,A[3]=ne,L.clearBufferiv(L.COLOR,0,A))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),U=_},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",qt,!1),We.dispose(),ye.dispose(),ve.dispose(),W.dispose(),te.dispose(),se.dispose(),be.dispose(),oe.dispose(),he.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",hi),Pe.removeEventListener("sessionend",os),Xe.stop()};function ct(_){_.preventDefault(),Dl("WebGLRenderer: Context Lost."),N=!0}function nt(){Dl("WebGLRenderer: Context Restored."),N=!1;let _=O.autoReset,I=Re.enabled,X=Re.autoUpdate,z=Re.needsUpdate,V=Re.type;Fe(),O.autoReset=_,Re.enabled=I,Re.autoUpdate=X,Re.needsUpdate=z,Re.type=V}function qt(_){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Yt(_){let I=_.target;I.removeEventListener("dispose",Yt),rn(I)}function rn(_){An(_),W.remove(_)}function An(_){let I=W.get(_).programs;I!==void 0&&(I.forEach(function(X){he.releaseProgram(X)}),_.isShaderMaterial&&he.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,X,z,V,Ee){I===null&&(I=bt);let F=V.isMesh&&V.matrixWorld.determinantAffine()<0,q=Ot(_,I,X,z,V);g.setMaterial(z,F);let ne=X.index,ee=1;if(z.wireframe===!0){if(ne=J.getWireframeAttribute(X),ne===void 0)return;ee=2}let pe=X.drawRange,xe=X.attributes.position,fe=pe.start*ee,Ie=(pe.start+pe.count)*ee;Ee!==null&&(fe=Math.max(fe,Ee.start*ee),Ie=Math.min(Ie,(Ee.start+Ee.count)*ee)),ne!==null?(fe=Math.max(fe,0),Ie=Math.min(Ie,ne.count)):xe!=null&&(fe=Math.max(fe,0),Ie=Math.min(Ie,xe.count));let et=Ie-fe;if(et<0||et===1/0)return;be.setup(V,z,q,X,ne);let Be,je=me;if(ne!==null&&(Be=de.get(ne),je=Z,je.setIndex(Be)),V.isMesh)z.wireframe===!0?(g.setLineWidth(z.wireframeLinewidth*St()),je.setMode(L.LINES)):je.setMode(L.TRIANGLES);else if(V.isLine){let _t=z.linewidth;_t===void 0&&(_t=1),g.setLineWidth(_t*St()),V.isLineSegments?je.setMode(L.LINES):V.isLineLoop?je.setMode(L.LINE_LOOP):je.setMode(L.LINE_STRIP)}else V.isPoints?je.setMode(L.POINTS):V.isSprite&&je.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))je.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let _t=V._multiDrawStarts,Me=V._multiDrawCounts,we=V._multiDrawCount,Oe=ne?de.get(ne).bytesPerElement:1,ze=W.get(z).currentProgram.getUniforms();for(let at=0;at<we;at++)ze.setValue(L,"_gl_DrawID",at),je.render(_t[at]/Oe,Me[at])}else if(V.isInstancedMesh)je.renderInstances(fe,et,V.count);else if(X.isInstancedBufferGeometry){let _t=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Me=Math.min(X.instanceCount,_t);je.renderInstances(fe,et,Me)}else je.render(fe,et)};function Nn(_,I,X,z){U!==null&&_.isNodeMaterial&&U.setObject(z,_),Qe===!0&&Ne.setState(_,X,!1),_.transparent===!0&&_.side===mn&&_.forceSinglePass===!1?(_.side=Ht,_.needsUpdate=!0,Ze(_,I,z),_.side=si,_.needsUpdate=!0,Ze(_,I,z),_.side=mn):Ze(_,I,z)}this.compile=function(_,I,X=null){X===null&&(X=_),U!==null&&U.renderStart(_,I,X),S=ve.get(X),S.init(I),v.push(S),X.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),_!==X&&_.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),gt=this.localClippingEnabled,Qe=Ne.init(this.clippingPlanes,gt),Qe===!0&&Ne.setGlobalState(this.clippingPlanes,I),U!==null&&Re.render(S.state.shadowsArray,X,I);let z=new Set;return _.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Ee=V.material;if(Ee)if(Array.isArray(Ee))for(let F=0;F<Ee.length;F++){let q=Ee[F];Nn(q,X,I,V),z.add(q)}else Nn(Ee,X,I,V),z.add(Ee)}),S=v.pop(),U!==null&&U.renderEnd(),z},this.compileAsync=function(_,I,X=null){let z=this.compile(_,I,X);return new Promise(V=>{function Ee(){if(z.forEach(function(F){let ne=W.get(F).currentProgram;(ne===void 0||ne.isReady())&&z.delete(F)}),z.size===0){V(_);return}setTimeout(Ee,10)}rt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Un=null;function Wi(_){Un&&Un(_)}function hi(){Xe.stop()}function os(){Xe.start()}let Xe=new Qh;Xe.setAnimationLoop(Wi),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(_){Un=_,Pe.setAnimationLoop(_),_===null?Xe.stop():Xe.start()},Pe.addEventListener("sessionstart",hi),Pe.addEventListener("sessionend",os),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(_,I);let X=Pe.enabled===!0&&Pe.isPresenting===!0,z=E!==null&&(le===null||X)&&E.begin(P,le);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(I),I=Pe.getCamera()),_.isScene===!0&&_.onBeforeRender(P,_,I,le),S=ve.get(_,v.length),S.init(I),S.state.textureUnits=j.getTextureUnits(),v.push(S),Ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ke.setFromProjectionMatrix(Ge,kn,I.reversedDepth),gt=this.localClippingEnabled,Qe=Ne.init(this.clippingPlanes,gt),b=ye.get(_,R.length),b.init(),R.push(b),Pe.enabled===!0&&Pe.isPresenting===!0){let F=P.xr.getDepthSensingMesh();F!==null&&Rn(F,I,-1/0,P.sortObjects)}Rn(_,I,0,P.sortObjects),b.finish(),U!==null&&U.updateLights(S.state.lightsArray),P.sortObjects===!0&&b.sort(Ae,He),Rt=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,Rt&&We.addToRenderList(b,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ne.beginShadows();let V=S.state.shadowsArray;if(Re.render(V,_,I),Qe===!0&&Ne.endShadows(),(z&&E.hasRenderPass())===!1){let F=b.opaque,q=b.transmissive;if(S.setupLights(),I.isArrayCamera){let ne=I.cameras;if(q.length>0)for(let ee=0,pe=ne.length;ee<pe;ee++){let xe=ne[ee];G(F,q,_,xe)}Rt&&We.render(_);for(let ee=0,pe=ne.length;ee<pe;ee++){let xe=ne[ee];Cn(b,_,xe,xe.viewport)}}else q.length>0&&G(F,q,_,I),Rt&&We.render(_),Cn(b,_,I)}le!==null&&Y===0&&(j.updateMultisampleRenderTarget(le),j.updateRenderTargetMipmap(le)),z&&E.end(P),_.isScene===!0&&_.onAfterRender(P,_,I),be.resetDefaultState(),K=-1,ie=null,v.pop(),v.length>0?(S=v[v.length-1],j.setTextureUnits(S.state.textureUnits),Qe===!0&&Ne.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,U!==null&&U.renderEnd()};function Rn(_,I,X,z){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)X=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLightProbeGrid)S.pushLightProbeGrid(_);else if(_.isLight)S.pushLight(_),_.castShadow&&S.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(Ke)){z&&Lt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ge);let F=se.update(_),q=_.material;q.visible&&b.push(_,F,q,X,Lt.z,null,I)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(Ke))){let F=se.update(_),q=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Lt.copy(_.boundingSphere.center)):(F.boundingSphere===null&&F.computeBoundingSphere(),Lt.copy(F.boundingSphere.center)),Lt.applyMatrix4(_.matrixWorld).applyMatrix4(Ge)),Array.isArray(q)){let ne=F.groups;for(let ee=0,pe=ne.length;ee<pe;ee++){let xe=ne[ee],fe=q[xe.materialIndex];fe&&fe.visible&&b.push(_,F,fe,X,Lt.z,xe,I)}}else q.visible&&b.push(_,F,q,X,Lt.z,null,I)}}let Ee=_.children;for(let F=0,q=Ee.length;F<q;F++)Rn(Ee[F],I,X,z)}function Cn(_,I,X,z){let{opaque:V,transmissive:Ee,transparent:F}=_;S.setupLightsView(X),Qe===!0&&Ne.setGlobalState(P.clippingPlanes,X),z&&g.viewport(re.copy(z)),V.length>0&&ce(V,I,X),Ee.length>0&&ce(Ee,I,X),F.length>0&&ce(F,I,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function G(_,I,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){let fe=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new Wt(1,1,{generateMipmaps:!0,type:fe?hn:nn,minFilter:Fi,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Ee=S.state.transmissionRenderTarget[z.id],F=z.viewport||re;Ee.setSize(F.z*P.transmissionResolutionScale,F.w*P.transmissionResolutionScale);let q=P.getRenderTarget(),ne=P.getActiveCubeFace(),ee=P.getActiveMipmapLevel();P.setRenderTarget(Ee),P.getClearColor(ue),Ce=P.getClearAlpha(),Ce<1&&P.setClearColor(16777215,.5),P.clear(),Rt&&We.render(X);let pe=P.toneMapping;P.toneMapping=Vn;let xe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),Qe===!0&&Ne.setGlobalState(P.clippingPlanes,z),ce(_,X,z),j.updateMultisampleRenderTarget(Ee),j.updateRenderTargetMipmap(Ee),rt.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ie=0,et=I.length;Ie<et;Ie++){let Be=I[Ie],{object:je,geometry:_t,material:Me,group:we}=Be;if(Me.side===mn&&je.layers.test(z.layers)){let Oe=Me.side;Me.side=Ht,Me.needsUpdate=!0,qe(je,X,z,_t,Me,we),Me.side=Oe,Me.needsUpdate=!0,fe=!0}}fe===!0&&(j.updateMultisampleRenderTarget(Ee),j.updateRenderTargetMipmap(Ee))}P.setRenderTarget(q,ne,ee),P.setClearColor(ue,Ce),xe!==void 0&&(z.viewport=xe),P.toneMapping=pe}function ce(_,I,X){let z=I.isScene===!0?I.overrideMaterial:null;for(let V=0,Ee=_.length;V<Ee;V++){let F=_[V],{object:q,geometry:ne,group:ee}=F,pe=F.material;pe.allowOverride===!0&&z!==null&&(pe=z),q.layers.test(X.layers)&&qe(q,I,X,ne,pe,ee)}}function qe(_,I,X,z,V,Ee){U!==null&&V.isNodeMaterial&&U.setObject(_,V),_.onBeforeRender(P,I,X,z,V,Ee),_.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),V.onBeforeRender(P,I,X,z,_,Ee),V.transparent===!0&&V.side===mn&&V.forceSinglePass===!1?(V.side=Ht,V.needsUpdate=!0,P.renderBufferDirect(X,I,z,V,_,Ee),V.side=si,V.needsUpdate=!0,P.renderBufferDirect(X,I,z,V,_,Ee),V.side=mn):P.renderBufferDirect(X,I,z,V,_,Ee),_.onAfterRender(P,I,X,z,V,Ee)}function Ze(_,I,X){I.isScene!==!0&&(I=bt);let z=W.get(_),V=S.state.lights,Ee=S.state.shadowsArray,F=V.state.version,q=he.getParameters(_,V.state,Ee,I,X,S.state.lightProbeGridArray),ne=he.getProgramCacheKey(q),ee=z.programs;z.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;let pe=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;z.envMap=te.get(_.envMap||z.environment,pe),z.envMapRotation=z.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,ee===void 0&&(_.addEventListener("dispose",Yt),ee=new Map,z.programs=ee);let xe=ee.get(ne);if(xe!==void 0){if(z.currentProgram===xe&&z.lightsStateVersion===F)return Et(_,q),xe}else q.uniforms=he.getUniforms(_),U!==null&&_.isNodeMaterial&&U.build(_,X,q),_.onBeforeCompile(q,P),xe=he.acquireProgram(q,ne),ee.set(ne,xe),z.uniforms=q.uniforms;let fe=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(fe.clippingPlanes=Ne.uniform),Et(_,q),z.needsLights=Qt(_),z.lightsStateVersion=F,z.needsLights&&(fe.ambientLightColor.value=V.state.ambient,fe.lightProbe.value=V.state.probe,fe.sunLights.value=V.state.sun,fe.sunLightShadows.value=V.state.sunShadow,fe.directionalLights.value=V.state.directional,fe.directionalLightShadows.value=V.state.directionalShadow,fe.spotLights.value=V.state.spot,fe.spotLightShadows.value=V.state.spotShadow,fe.rectAreaLights.value=V.state.rectArea,fe.ltc_1.value=V.state.rectAreaLTC1,fe.ltc_2.value=V.state.rectAreaLTC2,fe.pointLights.value=V.state.point,fe.pointLightShadows.value=V.state.pointShadow,fe.hemisphereLights.value=V.state.hemi,fe.sunShadowMatrix.value=V.state.sunShadowMatrix,fe.sunShadowCascade.value=V.state.sunShadowCascade,fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,fe.spotLightMatrix.value=V.state.spotLightMatrix,fe.spotLightMap.value=V.state.spotLightMap,fe.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=S.state.lightProbeGridArray.length>0,z.currentProgram=xe,z.uniformsList=null,xe}function it(_){if(_.uniformsList===null){let I=_.currentProgram.getUniforms();_.uniformsList=Ws.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function Et(_,I){let X=W.get(_);X.outputColorSpace=I.outputColorSpace,X.batching=I.batching,X.batchingColor=I.batchingColor,X.instancing=I.instancing,X.instancingColor=I.instancingColor,X.instancingMorph=I.instancingMorph,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function ot(_,I){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(I.matrixWorld);for(let X=0,z=_.length;X<z;X++){let V=_[X];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Ot(_,I,X,z,V){I.isScene!==!0&&(I=bt),j.resetTextureUnits();let Ee=I.fog,F=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,q=le===null?P.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:pt.workingColorSpace,ne=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,ee=te.get(z.envMap||F,ne),pe=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,xe=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),fe=!!X.morphAttributes.position,Ie=!!X.morphAttributes.normal,et=!!X.morphAttributes.color,Be=Vn;z.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Be=P.toneMapping);let je=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=je!==void 0?je.length:0,Me=W.get(z),we=S.state.lights;if(Qe===!0&&(gt===!0||_!==ie)){let xt=_===ie&&z.id===K;Ne.setState(z,_,xt)}let Oe=!1;z.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==we.state.version||Me.outputColorSpace!==q||V.isBatchedMesh&&Me.batching===!1||!V.isBatchedMesh&&Me.batching===!0||V.isBatchedMesh&&Me.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Me.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Me.instancing===!1||!V.isInstancedMesh&&Me.instancing===!0||V.isSkinnedMesh&&Me.skinning===!1||!V.isSkinnedMesh&&Me.skinning===!0||V.isInstancedMesh&&Me.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Me.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Me.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Me.instancingMorph===!1&&V.morphTexture!==null||Me.envMap!==ee||z.fog===!0&&Me.fog!==Ee||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ne.numPlanes||Me.numIntersection!==Ne.numIntersection)||Me.vertexAlphas!==pe||Me.vertexTangents!==xe||Me.morphTargets!==fe||Me.morphNormals!==Ie||Me.morphColors!==et||Me.toneMapping!==Be||Me.morphTargetsCount!==_t||!!Me.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,Me.__version=z.version);let ze=Me.currentProgram;Oe===!0&&(ze=Ze(z,I,V),U&&z.isNodeMaterial&&U.onUpdateProgram(z,ze,Me));let at=!1,Ct=!1,ft=!1,$e=ze.getUniforms(),wt=Me.uniforms;if(g.useProgram(ze.program)&&(at=!0,Ct=!0,ft=!0),z.id!==K&&(K=z.id,Ct=!0),Me.needsLights){let xt=ot(S.state.lightProbeGridArray,V);Me.lightProbeGrid!==xt&&(Me.lightProbeGrid=xt,Ct=!0)}if(at||ie!==_){g.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),$e.setValue(L,"projectionMatrix",_.projectionMatrix),$e.setValue(L,"viewMatrix",_.matrixWorldInverse);let Mn=$e.map.cameraPosition;Mn!==void 0&&Mn.setValue(L,ut.setFromMatrixPosition(_.matrixWorld)),T.logarithmicDepthBuffer&&$e.setValue(L,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&$e.setValue(L,"isOrthographic",_.isOrthographicCamera===!0),ie!==_&&(ie=_,Ct=!0,ft=!0)}if(Me.needsLights&&(we.state.sunShadowMap.length>0&&$e.setValue(L,"sunShadowMap",we.state.sunShadowMap,j),we.state.directionalShadowMap.length>0&&$e.setValue(L,"directionalShadowMap",we.state.directionalShadowMap,j),we.state.spotShadowMap.length>0&&$e.setValue(L,"spotShadowMap",we.state.spotShadowMap,j),we.state.pointShadowMap.length>0&&$e.setValue(L,"pointShadowMap",we.state.pointShadowMap,j)),V.isSkinnedMesh){$e.setOptional(L,V,"bindMatrix"),$e.setOptional(L,V,"bindMatrixInverse");let xt=V.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),$e.setValue(L,"boneTexture",xt.boneTexture,j))}V.isBatchedMesh&&($e.setOptional(L,V,"batchingTexture"),$e.setValue(L,"batchingTexture",V._matricesTexture,j),$e.setOptional(L,V,"batchingIdTexture"),$e.setValue(L,"batchingIdTexture",V._indirectTexture,j),$e.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&$e.setValue(L,"batchingColorTexture",V._colorsTexture,j));let en=X.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&D.update(V,X,ze),(Ct||Me.receiveShadow!==V.receiveShadow)&&(Me.receiveShadow=V.receiveShadow,$e.setValue(L,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(wt.envMapIntensity.value=I.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=Mg()),Ct){if($e.setValue(L,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&Vt(wt,ft),Ee&&z.fog===!0&&Ue.refreshFogUniforms(wt,Ee),Ue.refreshMaterialUniforms(wt,z,ae,Q,S.state.transmissionRenderTarget[_.id]),Me.needsLights&&Me.lightProbeGrid){let xt=Me.lightProbeGrid;wt.probesSH.value=xt.texture,wt.probesMin.value.copy(xt.boundingBox.min),wt.probesMax.value.copy(xt.boundingBox.max),wt.probesResolution.value.copy(xt.resolution)}Ws.upload(L,it(Me),wt,j)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ws.upload(L,it(Me),wt,j),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&$e.setValue(L,"center",V.center),$e.setValue(L,"modelViewMatrix",V.modelViewMatrix),$e.setValue(L,"normalMatrix",V.normalMatrix),$e.setValue(L,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let xt=z.uniformsGroups;for(let Mn=0,qn=xt.length;Mn<qn;Mn++){let vn=xt[Mn];oe.update(vn,ze),oe.bind(vn,ze)}}return ze}function Vt(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.sunLights.needsUpdate=I,_.sunLightShadows.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function Qt(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(_,I,X){let z=W.get(_);z.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),W.get(_.texture).__webglTexture=I,W.get(_.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,I){let X=W.get(_);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(_,I=0,X=0){le=_,$=I,Y=X;let z=null,V=!1,Ee=!1;if(_){let q=W.get(_);if(q.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,q.__webglFramebuffer),re.copy(_.viewport),Le.copy(_.scissor),De=_.scissorTest,g.viewport(re),g.scissor(Le),g.setScissorTest(De),K=-1;return}else if(q.__webglFramebuffer===void 0)j.setupRenderTarget(_);else if(q.__hasExternalTextures)j.rebindTextures(_,W.get(_.texture).__webglTexture,W.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let pe=_.depthTexture;if(q.__boundDepthTexture!==pe){if(pe!==null&&W.has(pe)&&(_.width!==pe.image.width||_.height!==pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(_)}}let ne=_.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Ee=!0);let ee=W.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(ee[I])?z=ee[I][X]:z=ee[I],V=!0):_.samples>0&&j.useMultisampledRTT(_)===!1?z=W.get(_).__webglMultisampledFramebuffer:Array.isArray(ee)?z=ee[X]:z=ee,re.copy(_.viewport),Le.copy(_.scissor),De=_.scissorTest}else re.copy(Se).multiplyScalar(ae).floor(),Le.copy(Ve).multiplyScalar(ae).floor(),De=mt;if(X!==0&&(z=k),g.bindFramebuffer(L.FRAMEBUFFER,z)&&g.drawBuffers(_,z),g.viewport(re),g.scissor(Le),g.setScissorTest(De),V){let q=W.get(_.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,q.__webglTexture,X)}else if(Ee){let q=I;for(let ne=0;ne<_.textures.length;ne++){let ee=W.get(_.textures[ne]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ne,ee.__webglTexture,X,q)}}else if(_!==null&&X!==0){let q=W.get(_.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,q.__webglTexture,X)}K=-1};function vt(_){let I=W.get(_);return(I.__readFormat!==_.format||I.__readType!==_.type)&&(I.__readFormat=_.format,I.__readType=_.type,I.__formatReadable=T.textureFormatReadable(_.format),I.__typeReadable=T.textureTypeReadable(_.type)),I}this.readRenderTargetPixels=function(_,I,X,z,V,Ee,F,q=0){if(!(_&&_.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=W.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&F!==void 0&&(ne=ne[F]),ne){g.bindFramebuffer(L.FRAMEBUFFER,ne);try{let ee=_.textures[q],pe=ee.format,xe=ee.type;_.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+q);let fe=vt(ee);if(fe.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(fe.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-z&&X>=0&&X<=_.height-V&&L.readPixels(I,X,z,V,ge.convert(pe),ge.convert(xe),Ee)}finally{let ee=le!==null?W.get(le).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(_,I,X,z,V,Ee,F,q=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=W.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&F!==void 0&&(ne=ne[F]),ne)if(I>=0&&I<=_.width-z&&X>=0&&X<=_.height-V){g.bindFramebuffer(L.FRAMEBUFFER,ne);let ee=_.textures[q],pe=ee.format,xe=ee.type;_.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+q);let fe=vt(ee);if(fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.bufferData(L.PIXEL_PACK_BUFFER,Ee.byteLength,L.STREAM_READ),L.readPixels(I,X,z,V,ge.convert(pe),ge.convert(xe),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let et=le!==null?W.get(le).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,et);let Be=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Th(L,Be,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ee),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ie),L.deleteSync(Be),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,I=null,X=0){let z=Math.pow(2,-X),V=Math.floor(_.image.width*z),Ee=Math.floor(_.image.height*z),F=I!==null?I.x:0,q=I!==null?I.y:0;j.setTexture2D(_,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,F,q,V,Ee),g.unbindTexture()},this.copyTextureToTexture=function(_,I,X=null,z=null,V=0,Ee=0){let F,q,ne,ee,pe,xe,fe,Ie,et,Be=_.isCompressedTexture?_.mipmaps[Ee]:_.image;if(X!==null)F=X.max.x-X.min.x,q=X.max.y-X.min.y,ne=X.isBox3?X.max.z-X.min.z:1,ee=X.min.x,pe=X.min.y,xe=X.isBox3?X.min.z:0;else{let wt=Math.pow(2,-V);F=Math.floor(Be.width*wt),q=Math.floor(Be.height*wt),_.isDataArrayTexture?ne=Be.depth:_.isData3DTexture?ne=Math.floor(Be.depth*wt):ne=1,ee=0,pe=0,xe=0}z!==null?(fe=z.x,Ie=z.y,et=z.z):(fe=0,Ie=0,et=0);let je=ge.convert(I.format),_t=ge.convert(I.type),Me;I.isData3DTexture?(j.setTexture3D(I,0),Me=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(j.setTexture2DArray(I,0),Me=L.TEXTURE_2D_ARRAY):(j.setTexture2D(I,0),Me=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);let we=g.getParameter(L.UNPACK_ROW_LENGTH),Oe=g.getParameter(L.UNPACK_IMAGE_HEIGHT),ze=g.getParameter(L.UNPACK_SKIP_PIXELS),at=g.getParameter(L.UNPACK_SKIP_ROWS),Ct=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,Be.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Be.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,ee),g.pixelStorei(L.UNPACK_SKIP_ROWS,pe),g.pixelStorei(L.UNPACK_SKIP_IMAGES,xe);let ft=_.isDataArrayTexture||_.isData3DTexture,$e=I.isDataArrayTexture||I.isData3DTexture;if(_.isDepthTexture){let wt=W.get(_),en=W.get(I),xt=W.get(wt.__renderTarget),Mn=W.get(en.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,xt.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let qn=0;qn<ne;qn++)ft&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(_).__webglTexture,V,xe+qn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(I).__webglTexture,Ee,et+qn)),L.blitFramebuffer(ee,pe,F,q,fe,Ie,F,q,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||_.isRenderTargetTexture||W.has(_)){let wt=W.get(_),en=W.get(I);g.bindFramebuffer(L.READ_FRAMEBUFFER,C),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,H);for(let xt=0;xt<ne;xt++)ft?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,V,xe+xt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,V),$e?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,en.__webglTexture,Ee,et+xt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,en.__webglTexture,Ee),V!==0?L.blitFramebuffer(ee,pe,F,q,fe,Ie,F,q,L.COLOR_BUFFER_BIT,L.NEAREST):$e?L.copyTexSubImage3D(Me,Ee,fe,Ie,et+xt,ee,pe,F,q):L.copyTexSubImage2D(Me,Ee,fe,Ie,ee,pe,F,q);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else $e?_.isDataTexture||_.isData3DTexture?L.texSubImage3D(Me,Ee,fe,Ie,et,F,q,ne,je,_t,Be.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,Ee,fe,Ie,et,F,q,ne,je,Be.data):L.texSubImage3D(Me,Ee,fe,Ie,et,F,q,ne,je,_t,Be):_.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ee,fe,Ie,F,q,je,_t,Be.data):_.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ee,fe,Ie,Be.width,Be.height,je,Be.data):L.texSubImage2D(L.TEXTURE_2D,Ee,fe,Ie,F,q,je,_t,Be);g.pixelStorei(L.UNPACK_ROW_LENGTH,we),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Oe),g.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),g.pixelStorei(L.UNPACK_SKIP_ROWS,at),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Ct),Ee===0&&I.generateMipmaps&&L.generateMipmap(Me),g.unbindTexture()},this.initRenderTarget=function(_){W.get(_).__webglFramebuffer===void 0&&j.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?j.setTextureCube(_,0):_.isData3DTexture?j.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?j.setTexture2DArray(_,0):j.setTexture2D(_,0),g.unbindTexture()},this.resetState=function(){$=0,Y=0,le=null,g.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var sn=Math.PI/180,wo=sn*23.4397,Cr={lat:55.676,lon:12.578},au=i=>i.valueOf()/864e5-.5+2440588-2451545,tc=(i,e)=>Math.atan2(Math.sin(i)*Math.cos(wo)-Math.tan(e)*Math.sin(wo),Math.cos(i)),nc=(i,e)=>Math.asin(Math.sin(e)*Math.cos(wo)+Math.cos(e)*Math.sin(wo)*Math.sin(i)),bg=(i,e)=>sn*(280.16+360.9856235*i)-e,Sg=i=>(i=Math.max(i,0),2967e-7/Math.tan(i+.00312536/(i+.08901179)));function ou(i,e,t){let n=-Cr.lon*sn,s=Cr.lat*sn,r=bg(i,n)-e,a=Math.asin(Math.sin(s)*Math.sin(t)+Math.cos(s)*Math.cos(t)*Math.cos(r));return a+=Sg(a),{az:((Math.atan2(Math.sin(r),Math.cos(r)*Math.sin(s)-Math.tan(t)*Math.cos(s))/sn+180)%360+360)%360,el:a/sn}}function ic(i){let e=au(i),t=sn*(357.5291+.98560028*e),n=sn*(1.9148*Math.sin(t)+.02*Math.sin(2*t)+3e-4*Math.sin(3*t)),s=t+n+sn*102.9372+Math.PI;return ou(e,tc(s,0),nc(s,0))}function Eg(i){let e=sn*(218.316+13.176396*i),t=sn*(134.963+13.064993*i),n=sn*(93.272+13.22935*i),s=e+sn*6.289*Math.sin(t),r=sn*5.128*Math.sin(n);return{ra:tc(s,r),dec:nc(s,r),l:s,b:r}}function wg(i){let e=au(i),t=Eg(e),n=sn*(357.5291+.98560028*e),s=n+sn*(1.9148*Math.sin(n)+.02*Math.sin(2*n)+3e-4*Math.sin(3*n))+sn*102.9372+Math.PI,r=tc(s,0),a=nc(s,0),o=Math.acos(Math.sin(a)*Math.sin(t.dec)+Math.cos(a)*Math.cos(t.dec)*Math.cos(r-t.ra)),l=Math.atan2(149598e3*Math.sin(o),385001-149598e3*Math.cos(o));return{...ou(e,t.ra,t.dec),lit:(1+Math.cos(l))/2}}function sc(i){let e=ic(i),t=1-ki(-6,1,e.el),n=ki(-12,-2,e.el)*(1-ki(-1,6,e.el)),r=((c,u)=>[1+(c[0]-1)*n+(u[0]-1)*t*(1-n),1+(c[1]-1)*n+(u[1]-1)*t*(1-n),1+(c[2]-1)*n+(u[2]-1)*t*(1-n)])([.55,.7,1.2],[.2,.23,.32]),a=ki(-7,8,e.el);if(e.el>-3){let c=ki(2,24,e.el),u=(6+9*c)*ki(-3,3,e.el);return{kind:e.el>-.83?"sun":"night",az:e.az,el:e.el,shadeEl:Math.max(e.el,1.6),color:[u,u*(.56+.38*c),u*(.34+.52*c)],day:a,night:t,sky:r}}let o=wg(i),l=(1.3+1.6*o.lit)*ki(0,5,o.el)*ki(-3,-8,e.el);return{kind:o.el>0?"moon":"night",az:o.az,el:o.el,shadeEl:Math.max(o.el,3),color:[l*.72,l*.82,l],day:a,night:t,sky:r}}function ki(i,e,t){let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)}var qs={wind:4,from:240,cloud:.2,rain:0,temp:12},To={clear:{wind:2,from:240,cloud:0,rain:0,temp:14},fair:qs,cloudy:{wind:6,from:250,cloud:.7,rain:0,temp:11},overcast:{wind:5,from:230,cloud:1,rain:0,temp:9},rain:{wind:7,from:220,cloud:1,rain:2.4,temp:8},storm:{wind:17,from:260,cloud:.85,rain:4,temp:7}},lu="pintable-weather",Tg=`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${Cr.lat}&lon=${Cr.lon}`,Hi=null,Pr=null,rc=null;function Ag(i){let e=i?.properties?.timeseries??[],t=[];for(let n of e){let s=n.data?.instant?.details;if(!s)continue;let r=n.data.next_1_hours?.details?.precipitation_amount??(n.data.next_6_hours?.details?.precipitation_amount??0)/6;t.push({t:Date.parse(n.time),wind:s.wind_speed??qs.wind,from:s.wind_from_direction??qs.from,cloud:(s.cloud_area_fraction??20)/100,rain:r,temp:s.air_temperature??qs.temp})}return t.filter(n=>Number.isFinite(n.t)).sort((n,s)=>n.t-s.t)}function cu(){if(typeof window>"u")return Promise.resolve();let i=new URLSearchParams(location.search).get("weather");if(i&&To[i])return Pr=To[i],Promise.resolve();try{let n=JSON.parse(localStorage.getItem(lu)??"null");if(n&&n.until>Date.now()&&n.rows?.length)return Hi=n.rows,rc="met",Promise.resolve()}catch{}let e=new AbortController,t=setTimeout(()=>e.abort(),6e3);return fetch(Tg,{signal:e.signal,credentials:"omit"}).then(async n=>{if(!n.ok)throw new Error(`weather ${n.status}`);let s=Ag(await n.json());if(!s.length)throw new Error("weather: empty");Hi=s,rc="met";let r=Date.parse(n.headers.get("expires")??"")||Date.now()+30*6e4;try{localStorage.setItem(lu,JSON.stringify({until:Math.max(r,Date.now()+10*6e4),rows:s}))}catch{}}).catch(()=>{}).finally(()=>clearTimeout(t))}var Rg=(i,e,t)=>i+(((e-i)%360+540)%360-180)*t;function ac(i,e={...qs}){if(Pr)return Object.assign(e,Pr);if(!Hi?.length)return Object.assign(e,qs);let t=i.valueOf(),n=0;for(;n<Hi.length-1&&Hi[n+1].t<=t;)n++;let s=Hi[n],r=Hi[Math.min(n+1,Hi.length-1)],a=r.t>s.t?Math.min(1,Math.max(0,(t-s.t)/(r.t-s.t))):0;return e.wind=s.wind+(r.wind-s.wind)*a,e.from=Rg(s.from,r.from,a),e.cloud=s.cloud+(r.cloud-s.cloud)*a,e.rain=s.rain+(r.rain-s.rain)*a,e.temp=s.temp+(r.temp-s.temp)*a,e}function hu(i){Pr=i&&To[i]?To[i]:null}var oc=()=>Pr?"set":rc;function lc(i){let e=i.rain>=4?"heavy rain":i.rain>=.8?"rain":i.rain>=.1?"light rain":i.cloud>.87?"overcast":i.cloud>.55?"cloudy":i.cloud>.2?"fair":"clear";return i.wind>=8?`${e}, wind ${Math.round(i.wind)} m/s`:e}var Ys=typeof location>"u"||new URLSearchParams(location.search).get("pins")!=="coarse",Ao=Ys?823592:205892,uu=.285,du=16;var xn=[{name:"Christiansborg",x:200.5,z:213.5,kind:"building",fact:"Finished 1928 \xB7 tower 106 m, the city's tallest",flood:1},{name:"B\xF8rsen",x:293,z:240,kind:"building",fact:"Built 1619\u20131640 \xB7 its 56 m dragon spire fell in the 2024 fire",flood:.9},{name:"Inderhavnen",x:330,z:300,kind:"water"},{name:"Holmens Kirke",x:278,z:192,kind:"building",fact:"An anchor forge of 1563 \xB7 a church since 1619",flood:1},{name:"Den Sorte Diamant",x:263,z:339,kind:"building",fact:"Schmidt Hammer Lassen, 1999",flood:.5},{name:"Christianshavn",x:432,z:352,kind:"district"},{name:"Slotsholmen",x:236,z:271,kind:"district"},{name:"Thorvaldsens Museum",x:149,z:192,kind:"building",fact:"Built 1838\u20131848 \xB7 M. G. Bindesb\xF8ll",flood:.8},{name:"Christians Kirke",x:379,z:377,kind:"building",fact:"Built 1754\u20131759 \xB7 tower 70 m",flood:1},{name:"Nikolaj",x:225,z:104,kind:"building",fact:"Spire raised 1909 \xB7 the city's third-tallest tower",flood:1},{name:"Det Kongelige Teater",x:346,z:79,kind:"building",fact:"Founded 1748 \xB7 this house built 1872\u20131874",flood:1},{name:"Nationalmuseet",x:63,z:288,kind:"building",fact:"The Prince's Mansion \xB7 a museum since 1892",flood:.6},{name:"Frederiksholms Kanal",x:146,z:318,kind:"water"},{name:"Gammel Strand",x:148,z:160,kind:"district"},{name:"B\xF8rsgraven",x:316,z:218,kind:"water"},{name:"Christiansborg Slotskirke",x:172.6,z:178,kind:"building",fact:"Inaugurated 14 May 1826",flood:.9},{name:"Krigsmuseet",x:203,z:301,kind:"building",fact:"Christian IV's arsenal \xB7 163 m long, finished 1604",flood:.5},{name:"Bibliotekshaven",x:229,z:290,kind:"district"},{name:"Christian IV's Bryghus",x:193,z:349,kind:"building",fact:"Built 1608 as a bastion",flood:.7},{name:"Christianshavns Kanal",x:442,z:398,kind:"water"},{name:"Gammel Dok",x:474,z:218,kind:"building",fact:"A warehouse by H. C. Scharling, 1882",flood:.5},{name:"Gammelholm",x:417,z:128,kind:"district"},{name:"Magasin du Nord",x:285.6,z:96,kind:"building",fact:"Department store \xB7 its building completed 1894",flood:.8},{name:"H\xF8jbro Plads",x:183,z:119,kind:"district"},{name:"Hellig\xE5ndskirken",x:108,z:92.5,kind:"building",fact:"One of the city's oldest churches \xB7 spire 1594",flood:.9},{name:"Amagertorv",x:141.5,z:102,kind:"district"}];var cc=[{closed:!0,pts:[303.6,219.5,295.8,217.9,288.4,215,281.7,210.8,274.8,206.9,268.7,201.8,262,197.4,254.7,194.5,248.1,190.1,241.5,185.6,234.8,181.2,228.2,176.8,221.5,172.4,214.9,167.9,208.3,163.5,201.6,159.1,194.6,155.4,187,153,179,153.1,171.4,155.5,163.9,158.2,157.1,162.3,150.2,166.2,144,171.3,137.4,175.8,131.7,181.3,126.4,187.3,121.4,193.4,116.4,199.6,111.2,205.7,106.7,212.2,101.6,218.4,96.5,224.5,91.5,230.7,87.5,237.6,89,245,93.4,251.6,98.5,257.8,102.9,264.4,108,270.5,112.9,276.9,117.5,283.3,122.5,289.5,127.1,296,132.1,302.2,136.7,308.7,141.7,315,146.4,321.4,151.2,327.8,156.3,333.9,160.7,340.5,165.8,346.7,170.3,353.2,175.3,359.4,180.3,365.6,185.6,371.6,191.2,377.2,196.9,382.9,202.5,388.5,208.1,394.1,213.4,400.1,215.3,407.8,216,415.7,217.5,422.4,223.2,416.8,228.9,411.1,234.5,405.5,240.1,399.9,245.8,394.2,251.4,388.6,257.1,382.9,263.2,377.8,268.8,372.2,274.5,366.5,280.1,360.9,285.8,355.2,291.4,349.6,297,344,302.7,338.3,308.3,332.7,314,327,319.7,321.5,326.2,316.8,332.5,312,338.4,306.6,344,301,349.7,295.3,355.3,289.7,361,284,366.6,278.4,372.2,272.8,377.9,267.1,383.2,261.2,384,253.4,383.9,245.4,379.1,239.1,373,234,366.1,230,358.3,229,350.4,228,342.7,226.1,334.9,224.3,327.2,222.7,319.4,221.2,311.5,220]},{closed:!0,pts:[428.6,210.4,422.5,215.5,416.4,220.6,410.7,226.3,405.1,231.9,399.6,237.7,397.9,245.2,393.4,251.6,387.7,257.3,382.1,262.9,376.4,268.6,370.8,274.2,365.2,279.8,359.5,285.5,353.9,291.1,348.2,296.8,342.6,302.4,337,308,331,313.3,324.4,317.8,318.7,323.3,313,329,307.4,334.6,301.8,340.2,296.1,345.9,290.5,351.5,284.8,357.2,279.2,362.8,273.6,368.4,274.2,372,282.2,372,289.9,373.3,296,378.4,302.2,383.5,307.9,388.9,314.1,394,320.2,399.1,326.3,404.2,332.7,408.9,339.3,413.3,346,417.6,352.1,422.7,358,428,364.1,433.1,370.2,438.3,376.1,443.7,382.2,448.8,388.5,453.5,396.2,452.6,401.9,447,407,440.9,412.1,434.8,417.2,428.7,422.2,422.5,427.3,416.4,432.4,410.3,437.5,404.2,442.6,398.1,447.7,391.9,453,386,458.1,379.9,463.2,373.8,468.3,367.7,473.4,361.6,478.5,355.5,483.7,349.3,488.8,343.2,492.2,336.1,495.3,328.7,500.4,322.6,505.4,316.4,507.7,308.8,509.6,301,511.4,293.3,513.3,285.5,515.1,277.7,516.7,269.9,515.9,262,514.9,254.1,513.9,246.2,512.8,238.3,511.1,230.6,507.2,223.6,503.3,216.7,499.4,209.7,495,203,490.2,196.7,484,191.7,477.4,187.3,470.1,187.6,463.5,192.1,456.9,196.6,450.3,201,443.7,205.4,436,207.6]},{closed:!1,pts:[200,443,205.2,436.9,210.3,430.8,215.4,424.7,221,419,226.6,413.4,232.3,407.7,237.9,402.1,243.6,396.4,249.2,390.8,254.9,385.1,261,380,266.6,374.4,272.3,368.7,277.9,363.1,283.5,357.5,289.2,351.8,294.8,346.2,300.5,340.5,306.1,334.9,311.8,329.2,317.4,323.6,323.6,318.6,330.2,314.2,336.2,308.8,341.8,303.2,347.5,297.5,353.1,291.9,358.7,286.3,364.4,280.6,370,275,375.7,269.3,381.3,263.7,387,258,392.6,252.4,397.9,246.4,398.9,238.6,404.3,232.7,409.9,227.1,415.5,221.5,421.7,216.3,427.5,211,433.7,205.9,439.8,200.8,446.4,196.3,452.6,191.2,458.7,186.1,464.4,180.6,470,175]}],Po=[{route:0,phase:0,speed:3.2,size:[4.5,1.1,.55,.95]},{route:0,phase:1/3,speed:3.2,size:[4.5,1.1,.55,.95]},{route:0,phase:2/3,speed:3.2,size:[4.5,1.1,.55,.95]},{route:1,phase:.1,speed:3.2,size:[4.5,1.1,.55,.95]},{route:1,phase:.6,speed:3.2,size:[4.5,1.1,.55,.95]},{route:2,phase:.3,speed:5,size:[5,1.5,.7,1.4]}],Io=Po.length,Ro=14,Co=6,pu=cc.map(i=>{let e=i.pts,t=e.length/2,n=[0];for(let s=1;s<=(i.closed?t:t-1);s++){let r=(s-1)%t,a=s%t;n.push(n[s-1]+Math.hypot(e[a*2]-e[r*2],e[a*2+1]-e[r*2+1]))}return n});function fu(i,e,t,n){let s=cc[i],r=s.pts,a=r.length/2,o=pu[i],l=o[o.length-1];e=s.closed?(e%l+l)%l:Math.min(Math.max(e,0),l-.001);let c=0;for(;c<o.length-2&&o[c+1]<=e;)c++;let u=(e-o[c])/Math.max(1e-6,o[c+1]-o[c]),f=d=>(s.closed?(d%a+a)%a:Math.min(Math.max(d,0),a-1))*2,h=f(c-1),m=f(c),x=f(c+1),M=f(c+2);for(let d=0;d<2;d++){let w=r[h+d],A=r[m+d],y=r[x+d],b=r[M+d];t[n+d]=.5*(2*A+(y-w)*u+(2*w-5*A+4*y-b)*u*u+(3*A-w-3*y+b)*u*u*u),t[n+2+d]=.5*(y-w+2*(2*w-5*A+4*y-b)*u+3*(3*A-w-3*y+b)*u*u)}let p=Math.hypot(t[n+2],t[n+3])||1;t[n+2]/=p,t[n+3]/=p}function Cg(i,e,t){let n=(i+2*Ro)/e,s=2*(n+Co),r=(t%s+s)%s,a=r>=n+Co;a&&(r-=n+Co);let o=2*Ro/e,l=r>=n?i:r<o?e*r*r/(2*o):r>n-o?i-e*(n-r)**2/(2*o):Ro+e*(r-o);return{s:a?i-l:l,back:a}}var mu=Float32Array.from(Po.flatMap(i=>i.size)),iM=Po.map(i=>i.route===2?1:0);function gu(i,e){return Po.forEach((t,n)=>{let s=pu[t.route],r=s[s.length-1];if(cc[t.route].closed)fu(t.route,t.phase*r+t.speed*i,e,n*4);else{let{s:a,back:o}=Cg(r,t.speed,i+t.phase*2*((r+2*Ro)/t.speed+Co));fu(t.route,a,e,n*4),o&&(e[n*4+2]*=-1,e[n*4+3]*=-1)}}),e}function Zs(i,e,t,n){try{if(i.extensions.has("KHR_parallel_shader_compile"))return i.compileAsync(e,t,n??null).then(()=>xu(i),()=>{});i.compile(e,t,n??null),xu(i)}catch{}return Promise.resolve()}function xu(i){for(let e of i.info.programs??[])e.getUniforms?.()}var Xt=512,jt=uu/(Xt/2),Do=Xt/2+1.5,li=-6,Lo=58,_u=2.5,Pg=-1,bi=4,ss={n:Xt,cityM:_u,pitch:jt,pocket:Do*jt},Ig=3,Lg=.35,Dg=(i,e)=>Math.round((i?88:132)*(e>1?1.4:1)),Ng="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",hc=`
vec2 mid(ivec2 c) { return (vec2(c) + 0.5) / RES; }`,yu=`
uint pcg(uint v) { uint s = v * 747796405u + 2891336453u; uint w = ((s >> ((s >> 28u) + 4u)) ^ s) * 277803737u; return (w >> 22u) ^ w; }
vec4 rnd(ivec2 c) {
  uint a = pcg(uint(c.x) * 1031u + pcg(uint(c.y))), b = pcg(a), d = pcg(b), e = pcg(d);
  return vec4(uvec4(a, b, d, e) >> 8u) / 16777215.0;
}`,uc=`
#define BOATS ${Io}
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
}`,Ug=`
uniform highp sampler2D tRest; uniform highp sampler2D tSim;
uniform float uTime; uniform float uSink; uniform float uFloor; uniform float uBoatDip; uniform vec4 uLift;
${hc}
${uc}
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
}`,Fg=`
uniform highp sampler2D tSrc;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy) * 4;
  float m = -1e4;
  for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) m = max(m, texelFetch(tSrc, c + ivec2(i, j), 0).r);
  gl_FragColor = vec4(m);
}`,Og=`
uniform highp sampler2D tH; uniform highp sampler2D t4; uniform highp sampler2D t16; uniform highp sampler2D t64;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  gl_FragColor = vec4(texelFetch(tH, c, 0).r, texelFetch(t4, c / 4, 0).r, texelFetch(t16, c / 16, 0).r, texelFetch(t64, c / 64, 0).r);
}`,Bg=`
uniform highp sampler2D tH;
${yu}
float at(ivec2 q) { vec4 s = texelFetch(tH, q, 0); return s.g < -5.0 ? s.r : s.b; }   // (the pocket: its floor)
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  float h = at(c), a = rnd(c).x, occ = 0.0;
  for (int k = 0; k < 8; k++) {
    float ang = float(k) * 0.7854 + a, r = k < 4 ? 2.5 : 6.0;
    ivec2 q = clamp(c + ivec2(round(vec2(cos(ang), sin(ang)) * r * RES)), ivec2(0), ivec2(NT - 1));
    occ += clamp((at(q) - h) / (r * 1.6), 0.0, 1.0);
  }
  gl_FragColor = vec4(1.0 - 0.55 * occ / 8.0);
}`,zg=`
uniform highp sampler2D tSrc; uniform vec2 uDir; uniform float uTan; uniform float uStep; uniform int uInit;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  ivec2 q = ivec2(floor(vec2(c) + 0.5 + uDir * uStep));
  bool inside = all(greaterThanEqual(q, ivec2(0))) && all(lessThan(q, ivec2(NT)));
  // (the first pass reads the heights without the boats, the rest what it made; uStep is in texels)
  vec4 src = inside ? texelFetch(tSrc, q, 0) : vec4(0.0);
  float far = inside ? (uInit == 1 ? src.b : src.r) - uTan * uStep / RES : -1e4;
  gl_FragColor = vec4(uInit == 1 ? far : max(texelFetch(tSrc, c, 0).r, far));
}`,kg=`
uniform highp sampler2D tSim; uniform highp sampler2D tH; uniform highp sampler2D tRest; uniform float uDt;
uniform vec4 uHand; uniform vec2 uHandV; uniform float uHandOn; uniform float uDip; uniform vec4 uDrops[6]; uniform float uBoatDip;
${hc}
${uc}
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
}`,Hg="void main() { gl_FragColor = vec4(0.0); }",Vg=`
uniform float uPitch;
varying vec3 vG;
void main() {
  vG = vec3(position.x / uPitch + 256.0, position.y / uPitch, position.z / uPitch + 256.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Gg=`
#include <common>
#include <cube_uv_reflection_fragment>
uniform highp sampler2D tMax; uniform highp sampler2D tRest; uniform highp sampler2D tShadow; uniform highp sampler2D tSim;
uniform sampler2D tOpen; uniform sampler2D envMap; uniform sampler2D tLamp;
uniform vec3 uCamG; uniform mat4 uGtoClip; uniform vec2 uBlur;
uniform vec3 uLight; uniform vec3 uLightColor; uniform vec2 uSunDir; uniform float uTan; uniform float uEnv; uniform float uPix;
uniform float uWell; uniform float uFloor; uniform float uTop; uniform float uLit; uniform float uSun; uniform float uSwell;
uniform vec3 uFill; uniform vec3 uFillColor; uniform float uNight; uniform float uShoulder; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uDome; uniform vec3 uGlow;
uniform vec3 uRimAway; uniform vec3 uRimSun; uniform vec3 uAura;
uniform float uRiseT; uniform float uSink; uniform sampler2D studioMap; uniform float uRoom;
uniform vec2 uSpin; uniform float uWind; uniform vec2 uWindDir; uniform float uWindT; uniform float uCloud; uniform vec2 uCloudAt; uniform float uWet;
uniform float uFlood[${xn.length}]; uniform vec2 uPicked;
varying vec3 vG;
${hc}
${uc}

// Round pins, 0.93 of the pitch across, their heads domed a little and rounded at the rim (in pins: RES a unit).
const float RAD = 0.465, CHAMFER = 0.1, DOME = 0.7;
// The city's light after dark (linear): sodium-warm lamps, windows a little whiter, floodlights whiter still.
const vec3 LAMP = vec3(1.0, 0.56, 0.24), WINDOW = vec3(1.0, 0.74, 0.46), FLOOD = vec3(1.0, 0.8, 0.56);

${yu}
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
// The sky by day as the steel mirrors it, in the table's space (where the sun is): deepest overhead (uDome), paler down
// to the horizon, where it is lighter under the sun (uRimSun) than away from it (uRimAway), and brightest round the sun
// itself (uAura), a glow the rougher steel spreads wider. As the sun gets low the horizon under it and its glow go gold
// while the sky overhead and away from it stays blue: a domed head reads warm on its sunward side and cool on the
// other, and what lies in shade, lit by that sky alone, reads blue against the faces the sun lights.
vec3 sky(vec3 dir, float rough) {
  float hz = pow(1.0 - clamp(dir.y, 0.0, 1.0), 3.0);
  vec2 f = dir.xz / max(length(dir.xz), 1e-4), s = uLight.xz / max(length(uLight.xz), 1e-4);
  float toward = 0.5 + 0.5 * dot(f, s), k = mix(36.0, 4.0, rough);
  return mix(uDome, mix(uRimAway, uRimSun, toward * toward), hz) + uAura * (pow(max(dot(dir, uLight), 0.0), k) * (k + 2.0) / 38.0);
}
// The room (tinted by the sky: blue through twilight, low at night) under that sky, and under the horizon the city's
// own streets, which is what a facade mirrors: lit by the sun by day and by the lamps at night. After dark the city's
// own glow hangs low in the sky, so the harbour mirrors a dark amber with the swell running through it rather than
// nothing. The city's sky goes with the city: a pin that has sunk flush at the end (gCity 0) mirrors the studio it
// stands in, lit as the studio is, so the empty table reads as the plinth's own steel top rather than a dark hole.
float gCity = 1.0;
vec3 env(vec3 dirL, float rough) {
  vec3 dirG = dirL;                                                // (the sky goes round with the sun)
  dirL = vec3(uSpin.x * dirL.x + uSpin.y * dirL.z, dirL.y, uSpin.x * dirL.z - uSpin.y * dirL.x);   // the room stays put as the table turns
  float below = smoothstep(0.04 + 0.2 * rough, -0.12 - 0.5 * rough, dirL.y);
  float above = smoothstep(-0.04 - 0.3 * rough, 0.04 + 0.2 * rough, dirL.y);
  float low = smoothstep(-0.06 - 0.2 * rough, 0.02, dirL.y) * (1.0 - smoothstep(0.0, 0.45 + 0.3 * rough, dirL.y));
  vec3 city = (textureCubeUV(envMap, dirL, rough).rgb * uSky + sky(dirG, rough) * above + uGlow * low + uGround * below) * uEnv;
  if (gCity > 0.999) return city;
  return mix(textureCubeUV(studioMap, dirL, rough).rgb * uRoom, city, gCity);
}

// A head turned on a lathe: its steel smoother along the rings the tool left (gT, the way round the head at the point)
// than across them, so the light's highlight on it runs out from its middle in a streak, as on any machined part. gAn:
// how much of that a pixel sees (only up close; 0 everywhere else).
vec3 gT = vec3(1.0, 0.0, 0.0);
float gAn = 0.0;
vec3 brdf(vec3 n, vec3 V, vec3 L, vec3 f0, float a2, float NoV) {
  vec3 H = normalize(V + L);
  float NoL = max(dot(n, L), 0.0), NoH = max(dot(n, H), 0.0), VoH = max(dot(V, H), 0.0);
  vec3 F = f0 + (1.0 - f0) * pow(1.0 - VoH, 5.0);
  float D = ggx(a2, NoH);
  if (gAn > 0.0) {
    float a = sqrt(a2), at = a * 0.3, ab = min(a * 2.5, 1.0);
    float x = dot(gT, H) / at, y = dot(cross(n, gT), H) / ab, k = x * x + y * y + NoH * NoH;
    D = mix(D, 1.0 / (PI * at * ab * k * k), gAn);
  }
  return D * smithV(a2, NoV, NoL) * F * NoL;
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
  // The satin's sheen toward a low sun is some ten times a lit face: a film's shoulder rolls it off above uShoulder (3
  // by day), so the flat tops hold a bright grey with their grain in it instead of one white sheet (the harbour's
  // glints keep theirs). After dark it rolls off far lower (0.3), as the moon's sheen would otherwise paint them white.
  float L = dot(direct, vec3(0.2126, 0.7152, 0.0722)), over = max(L - uShoulder, 0.0);
  direct *= mix(1.0, (uShoulder + over / (1.0 + over / uShoulder)) / max(L, 1e-4), clamp(broad * 2.4, 0.0, 1.0));
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
  float k = hash3(c, int(fl) * 4 + face), on = 0.24 * uNight;
  // Further off, where a window is a pixel or less across, which pixel lands on a lit one is chance and the facades
  // speckle, so there they hold what their windows give on average, more in some blocks than in others (a noise some
  // ten pins across and five floors up, smooth from one pixel to the next).
  float far = smoothstep(0.25, 0.75, fp);
  vec3 one = vec3(0.0);
  if (far < 1.0 && k <= on) {
    float band = smoothstep(0.24, 0.32, v) * (1.0 - smoothstep(0.68, 0.76, v));
    vec3 tone = k < 0.05 * uNight ? vec3(0.62, 0.8, 1.0) : WINDOW;   // a few lit cooler, by screens or LEDs
    one = tone * (band * (1.6 + 5.0 * hash3(c, int(fl) * 4 + face + 2)));
  }
  if (far <= 0.0) return one;
  float busy = vnoise(mid(c) * RES / 10.0 + P.y / 6.0);
  vec3 avg = mix(WINDOW, vec3(0.62, 0.8, 1.0), 0.21) * (on * 0.44 * 4.1 * (0.25 + 2.25 * busy * busy));
  return mix(one, avg, far);
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
    float gap, ao = 1.0, lath = 0.0, even = 0.0, wall = 1.0;
    vec3 lathT = vec3(1.0, 0.0, 0.0);
    if (kind < 0.5) {
      // The pocket's floor and the pins' feet: near black.
      col = env(reflect(-V, n), 0.7) * 0.015;
      gap = 0.0;
    } else {
      // Each pin seated a little off true (the land's by up to a degree): up close the sun catches some heads and not
      // their neighbours, so a lit square reads as a field of pins rather than one sheet.
      float tilt = mix(0.017, 0.012, wm);
      // The harbour's pins are lapped flat and tilted along a slow swell (three trains of it), so the water breaks the
      // sun into glints that run across it.
      vec2 q = mid(c), swell = vec2(0.0);
      if (wm > 0.0) {
        // (the first train runs with the wind, and all three grow with it)
        float sea = 0.55 + 1.5 * uWind;
        swell += sea * 0.024 * uWindDir * cos(dot(q, uWindDir * 0.31) - uSwell * 1.1);
        swell += sea * 0.018 * vec2(-0.45, 0.89) * cos(dot(q, vec2(-0.45, 0.89) * 0.53) - uSwell * 1.6 + 1.7);
        swell += sea * 0.011 * vec2(0.95, -0.31) * cos(dot(q, vec2(0.95, -0.31) * 0.97) - uSwell * 2.3 + 4.1);
        // Ripples: each pin rocks a little on its own, faster than the swell, so the sun breaks on the water in glints
        // that come and go (further off, where a pixel holds several pins, they spread into a glitter path).
        swell += (0.018 + 0.03 * uWind) * (1.0 - many) * vec2(sin(uSwell * (5.0 + 3.0 * rn.x) + rn.z * 6.283), cos(uSwell * (4.0 + 3.0 * rn.y) + rn.w * 6.283));
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
        // Turned on a lathe (brdf()): seen up close, a head a few pixels across or more.
        lath = (1.0 - wm) * (1.0 - many) * clamp(2.0 - fp * 3.5, 0.0, 1.0) * smoothstep(0.02, 0.12, rr);
        vec3 tg = vec3(-out2.y, 0.0, out2.x);
        lathT = normalize(tg - n * dot(tg, n) + vec3(1e-5, 0.0, 0.0));
        gap = mix(smoothstep(RAD - 0.5 * fp, RAD + 0.5 * fp, rr), 1.0 - PI * RAD * RAD, many);
        gap *= 0.45 + 0.55 * clamp(V.y * 1.6, 0.0, 1.0);      // at a low angle the heads hide the gaps between them
        // The sky a pin sees past its neighbours (OPEN: lower in a courtyard or a narrow street).
        ao = texelFetch(tOpen, c, 0).r;
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
        // A step in a roof a pixel or less tall (a pitched roof's pins, seen from further off) is most of the pixel's
        // roof, so it takes the roof's light (up, the roof's sky, the gaps between heads); lit as a wall, it speckles
        // the roofs, dark against lit heads (most of all after dark). A wall less than a floor tall has no windows.
        even = 1.0 - smoothstep(0.5, 1.5, (h - ground) * RES / fp);
        n = normalize(mix(n, vec3(0.0, 1.0, 0.0), even));
        ao = mix(ao, texelFetch(tOpen, c, 0).r, even);
        gap = mix(gap, (1.0 - PI * RAD * RAD) * (0.45 + 0.55 * clamp(V.y * 1.6, 0.0, 1.0)), even);
        wall = (1.0 - even) * smoothstep(1.2, 2.4, h - ground);
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
      // The harbour's pins blued, nearly black, so by day the water reads deep: dark looked down into, the sky and the
      // quays in it only at a low look, and its glints bright still (the sun is that much brighter than the sky). After
      // dark it takes the lamps as bright steel does. (fl: what a pin returns of the lamps' light)
      vec3 fl = f0;
      f0 = mix(f0, vec3(0.11, 0.15, 0.19), wm * (1.0 - uNight));
      float lit = sunSeen(c, vec3(P.x, mix(P.y, h, even), P.z), fp) * cloudShade(P);
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
      gT = lathT; gAn = lath;
      col = steel(n, V, f0, rough, lit, envC, 0.42 * (1.0 - wm)) * ao;
      gAn = 0.0;
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
        col += fl * LAMP * (pool * 2.2 * uNight * m) * ao;
        // (where the lens will blur it, its blur averages the windows itself and they glitter through it as discs of
        // light, as lit windows do through a lens: there they stay one by one however small; uBlur: the lens's focus,
        // view depth, and its blur at infinity, px, as lens.ts reckons them)
        float zv = (uGtoClip * vec4(P, 1.0)).w, cv = 1.0 - uBlur.x / max(zv, 1e-4);
        float sharp = 1.0 - smoothstep(1.5, 4.0, cv > 0.0 ? 0.6 * uBlur.y * cv : min(-uBlur.y * cv, 1.3 * uBlur.y));
        if (boat) col += boatGlow(bI, P, face, h, many) * (uNight * m);
        else col += glow(c, P, face, h, fp * sharp, many, rest.a, mt) * (m * wall);
        // A landmark's floodlights on its walls (the patina takes them green).
        if (rest.a < -0.5) col += (mt == 1 ? vec3(0.16, 0.36, 0.28) : f0) * FLOOD * (flood(-rest.a, P, face, h, many) * 1.5 * uNight * m) * mix(1.0, ao, 0.5);
        // The water round a boat, lit by its cabin.
        if (wm > 0.0 && bSd < 5.0) col += fl * WINDOW * (0.45 * exp(-max(bSd, 0.0) / 1.3) * uNight * wm);
        if (wm > 0.0 && face == 0 && R.y > 0.02) {
          // The quays' lamps in the harbour: the lamp map read where the mirrored ray climbs past a lamp's height,
          // at four heights, so each lamp lies on the water as a streak towards the eye that the swell breaks up.
          vec2 run = R.xz / R.y;
          float seen = 0.0;
          for (int i = 0; i < 4; i++) {
            vec2 q = P.xz + run * min(0.6 * exp2(float(i)), 40.0 / max(length(run), 1e-3));
            seen += texture2D(tLamp, q / 512.0).r;
          }
          col += fl * LAMP * (seen * 0.9 * uNight * wm);
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
}`,Mi=(i,e=i)=>new Wt(i,e,{type:hn,format:gn,minFilter:Ut,magFilter:Ut,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),vu=typeof location<"u"&&Number(new URLSearchParams(location.search).get("pins-debug"))||0;function Mu(i){let{renderer:e}=i,t=e.extensions;if(!t.has("EXT_color_buffer_float")&&!t.has("EXT_color_buffer_half_float"))return null;let n=Ys?2:1,s=Xt*n,r=(F,q)=>Math.floor(q*n)*s+Math.floor(F*n),a=new Float32Array(s*s*4),o=new Qi(a,s,s,gn,Tn);o.minFilter=o.magFilter=Ut;let l=new Float32Array(s*s),c={col:200.5,row:213.5,h:37.4},u=!1,f=!1,h=!0,m=Promise.resolve(),x=-1,M=1,p=new Float32Array(0),d=!1,w=0,A=!0,y=!1,b=!0,S=-1,R=new Int32Array(0),v=xn.map(()=>null),E=0;async function P(F,q,ne=s){for(let ee=0;ee<F;ee+=ne)if(q(ee,Math.min(F,ee+ne)),!(performance.now()-E<6)){if(await new Promise(pe=>{let xe=new MessageChannel;xe.port1.onmessage=()=>{xe.port1.close(),pe()},xe.port2.postMessage(0)}),!h)throw new Error("left");E=performance.now()}}(async()=>{let F=fetch(i.marks).then(yt=>yt.ok?yt.blob():null).then(yt=>yt&&createImageBitmap(yt,{colorSpaceConversion:"none",premultiplyAlpha:"none"})).catch(()=>null),q=await fetch(i.city);if(!q.ok)throw new Error(`city: ${q.status}`);let ne=await createImageBitmap(await q.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),ee=document.createElement("canvas");ee.width=ee.height=s;let pe=ee.getContext("2d",{willReadFrequently:!0});pe.drawImage(ne,0,0),ne.close();let xe=pe.getImageData(0,0,s,s).data,fe=0,Ie=-1,et=0,Be=[];if(await P(s*s,(yt,tn)=>{for(let dt=yt;dt<tn;dt++){let ui=xe[dt*4+2];if(ui&2){fe++;let Si=(xe[dt*4]<<8|xe[dt*4+1])*128/65535,kt=ui&1&&Si<.5?Pg:Si/_u;a[dt*4]=kt,a[dt*4+1]=ui&1&&Si<.5?2:1+.08*Math.min(5,ui>>2),a[dt*4+1]===2&&Be.push(dt),l[dt]=kt,kt>Ie&&(Ie=kt,et=dt)}else a[dt*4]=li,l[dt]=li}}),fe!==Ao||Ie<30||Ie>45)throw new Error(`city: ${fe} pins, tallest ${Ie.toFixed(1)}`);let je={col:(et%s+.5)/n,row:(Math.floor(et/s)+.5)/n,h:Ie},_t=new Float32Array(fe),Me=7,we=0,Oe=1/0,ze=-1/0,at=()=>(Me=Me*16807%2147483647)/2147483647;await P(s*s,(yt,tn)=>{for(let dt=yt;dt<tn;dt++){let ui=(dt%s+.5)/n,Si=(Math.floor(dt/s)+.5)/n,Pn=.6+Math.hypot(ui-je.col,Si-je.row)*.0062+(at()-.5)*.09;a[dt*4+2]=Pn,a[dt*4+1]>.5&&(_t[we++]=Pn,Oe=Math.min(Oe,Pn),ze=Math.max(ze,Pn))}});let Ct=4096,ft=Ct/(ze-Oe),$e=new Uint32Array(Ct+1),wt=new Float32Array(fe),en=yt=>Math.min(Ct-1,Math.max(0,Math.floor((yt-Oe)*ft)));await P(fe,(yt,tn)=>{for(let dt=yt;dt<tn;dt++)$e[en(_t[dt])+1]++});for(let yt=0;yt<Ct;yt++)$e[yt+1]+=$e[yt];let xt=$e.slice(0,Ct);await P(fe,(yt,tn)=>{for(let dt=yt;dt<tn;dt++)wt[xt[en(_t[dt])]++]=_t[dt]}),await P(Ct,(yt,tn)=>{for(let dt=yt;dt<tn;dt++)wt.subarray($e[dt],$e[dt+1]).sort()},64),await k(at);let Mn=xn.map(()=>null),qn=await F;if(qn){pe.clearRect(0,0,s,s),pe.drawImage(qn,0,0),qn.close();let yt=pe.getImageData(0,0,s,s).data,tn=xn.map(()=>[0,0,0,-1e9,0]);await P(s*s,(kt,Pn)=>{for(let Bt=kt;Bt<Pn;Bt++){let Yn=a[Bt*4+1],_n=yt[Bt*4];if(_n>100&&(_n=0),!_n||_n>xn.length||Yn<.5||Yn>1.5)continue;a[Bt*4+3]=-_n;let Fn=tn[_n-1];Fn[0]++,Fn[1]+=(Bt%s+.5)/n,Fn[2]+=(Math.floor(Bt/s)+.5)/n,a[Bt*4]>Fn[3]&&(Fn[3]=a[Bt*4],Fn[4]=Bt)}});let dt=kt=>[(kt%s+.5)/n,(Math.floor(kt/s)+.5)/n,a[kt*4]],ui=xn.map(()=>[-1e9,-1e9,-1e9,-1e9,-1e9,-1e9,-1e9,-1e9]),Si=xn.map(()=>new Int32Array(8));tn.forEach(([kt,Pn,Bt,Yn,_n],Fn)=>{kt&&(Mn[Fn]={x:Pn/kt,z:Bt/kt,top:Yn,reach:0,pins:kt,hull:dt(_n)})}),await P(s*s,(kt,Pn)=>{for(let Bt=kt;Bt<Pn;Bt++){let Yn=a[Bt*4+3]<-.5?-a[Bt*4+3]-1:-1,_n=Yn>=0?Mn[Yn]:null;if(!_n)continue;let Fn=(Bt%s+.5)/n-_n.x,_c=(Math.floor(Bt/s)+.5)/n-_n.z;_n.reach=Math.max(_n.reach,Math.hypot(Fn,_c));for(let ls=0;ls<8;ls++){let yc=ls*Math.PI/4,Mc=Fn*Math.cos(yc)+_c*Math.sin(yc);Mc>ui[Yn][ls]&&(ui[Yn][ls]=Mc,Si[Yn][ls]=Bt)}}}),Mn.forEach((kt,Pn)=>{if(kt)for(let Bt of Si[Pn])kt.hull.push(...dt(Bt))})}o.source.dataReady=!1,o.needsUpdate=!0,e.initTexture(o),o.source.dataReady=!0;let vn=e.getContext(),Xi=e.state;await P(s,(yt,tn)=>{Xi.bindTexture(vn.TEXTURE_2D,e.properties.get(o).__webglTexture),Xi.pixelStorei(vn.UNPACK_FLIP_Y_WEBGL,!1),Xi.pixelStorei(vn.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),Xi.pixelStorei(vn.UNPACK_ALIGNMENT,4),Xi.pixelStorei(vn.UNPACK_ROW_LENGTH,0),Xi.pixelStorei(vn.UNPACK_SKIP_PIXELS,0),Xi.pixelStorei(vn.UNPACK_SKIP_ROWS,0),vn.texSubImage2D(vn.TEXTURE_2D,0,0,yt,s,tn-yt,vn.RGBA,vn.FLOAT,a.subarray(yt*s*4,tn*s*4))},64),await m,h&&(c=je,p=wt,R=Int32Array.from(Be),Mn.forEach((yt,tn)=>v[tn]=yt),u=!0,A=!0,i.invalidate())})().catch(F=>{h&&(f=!0,i.onFail(F),i.invalidate())});let N=new Uint8Array(s*s),U=new Qi(N,s,s,ks,nn);U.minFilter=U.magFilter=Ft;async function k(F){let q=async we=>{let Oe=new Uint8Array(s*s),ze=new Uint8Array(s*s);return await P(s,(at,Ct)=>{for(let ft=at;ft<Ct;ft++){let $e=0,wt=we(ft*s)?1:0;for(let en=0;en<s;en++){let xt=en+1<s&&we(ft*s+en+1)?1:0;Oe[ft*s+en]=$e|wt|xt,$e=wt,wt=xt}}},8),await P(s,(at,Ct)=>{for(let ft=at*s;ft<Ct*s;ft++)ze[ft]=Oe[ft]|(ft>=s?Oe[ft-s]:0)|(ft+s<s*s?Oe[ft+s]:0)},8),ze},ne=we=>a[we*4+1],ee=we=>ne(we)>.5&&ne(we)<1.5,pe=we=>Math.abs(ne(we)-1.32)<.02,xe=await q(we=>ee(we)&&!pe(we)&&a[we*4]>2),fe=await q(we=>ne(we)===2),Ie=new Float32Array(s*s);await P(s*s,(we,Oe)=>{for(let ze=we;ze<Oe;ze++){if(a[ze*4+3]=0,!ee(ze)||a[ze*4]>.4)continue;let at=(fe[ze]?.15:xe[ze]?.1:0)/n;at&&F()<at&&(a[ze*4+3]=Ie[ze]=.6+.4*F())}});let et=n,Be=3*n,je=[];for(let we=-Be;we<=Be;we++)je.push(Math.exp(-(we*we)/(2*et*et)));let _t=2*Math.PI,Me=new Float32Array(s*s);await P(s,(we,Oe)=>{for(let ze=we;ze<Oe;ze++)for(let at=0;at<s;at++){let Ct=0;for(let ft=-Be;ft<=Be;ft++){let $e=at+ft;$e>=0&&$e<s&&(Ct+=Ie[ze*s+$e]*je[ft+Be])}Me[ze*s+at]=Ct}},8),await P(s,(we,Oe)=>{for(let ze=we;ze<Oe;ze++)for(let at=0;at<s;at++){let Ct=0;for(let ft=-Be;ft<=Be;ft++){let $e=ze+ft;$e>=0&&$e<s&&(Ct+=Me[$e*s+at]*je[ft+Be])}N[ze*s+at]=Math.min(255,Math.round(Ct/_t*2.5*255))}},8),U.needsUpdate=!0,e.initTexture(U)}let C=new Dn,H=new ii(-1,1,1,-1,0,1),$=new cn;$.setAttribute("position",new zt([-1,-1,0,3,-1,0,-1,3,0],3));let Y=new Pt($);Y.frustumCulled=!1,C.add(Y);let le={RES:n.toFixed(1),NT:String(s)},K=(F,q)=>new Kt({vertexShader:Ng,fragmentShader:F,uniforms:q,defines:le,depthTest:!1,depthWrite:!1}),ie=Mi(s),re=Mi(s),Le=Mi(s),De=Mi(s/4),ue=Mi(s/16),Ce=Mi(s/64),ke=Mi(s),Q=Mi(s),ae=Mi(s),Ae=new Wt(s,s,{type:nn,format:ks,minFilter:Ut,magFilter:Ut,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),He=[ie,re],Se=()=>Array.from({length:Io},()=>new At),Ve={uBoat:{value:Se()},uBoatOn:{value:0},uBoatDip:{value:0},uBoatSize:{value:Se().map((F,q)=>F.fromArray(mu,q*4))}},mt=K(Ug,{tRest:{value:o},tSim:{value:ie.texture},uTime:{value:0},uSink:{value:0},uFloor:{value:li},uLift:{value:new At},...Ve}),Ke=K(Fg,{tSrc:{value:null}}),Qe=K(Og,{tH:{value:Le.texture},t4:{value:De.texture},t16:{value:ue.texture},t64:{value:Ce.texture}}),gt=K(Bg,{tH:{value:Le.texture}}),Ge=K(zg,{tSrc:{value:null},uDir:{value:new _e},uTan:{value:0},uStep:{value:1},uInit:{value:1}}),ut=K(kg,{tSim:{value:ie.texture},tH:{value:Le.texture},tRest:{value:o},uDt:{value:1/120},uHand:{value:new At},uHandV:{value:new _e},uHandOn:{value:0},uDip:{value:.5},uDrops:{value:Array.from({length:6},()=>new At)},...Ve,uBoat:{value:Se()}}),Lt=K(Hg,{}),bt=(F,q)=>{Y.material=F,e.setRenderTarget(q),e.render(C,H)},Rt=[];for(let F of[mt,Ke,Qe,gt,Ge,ut,Lt]){let q=e.getRenderTarget();Y.material=F,e.setRenderTarget(re),Rt.push(Zs(e,C,H)),e.setRenderTarget(q)}m=Promise.race([Promise.all(Rt),new Promise(F=>setTimeout(F,4e3))]);let St=new zi(e),L=null,Dt=(F,q=si)=>new ei({color:F,side:q}),rt=(F,q,ne)=>new st().setRGB(F,q,ne,Kn);function T(){let F=new Dn,q=[],ne=xe=>(q.push(xe),F.add(xe),xe);ne(new Pt(new Hn(8,6,8),Dt(rt(.004,.0042,.0046),Ht)));let ee=(xe,fe,Ie,et)=>{let Be=ne(new Pt(new ni(xe,fe),Dt(et,mn)));Be.position.set(...Ie),Be.lookAt(0,.05,0)};ee(2.6,.5,[-1.3,.75,-1.6],rt(2.3,2.25,2.15)),ee(1.4,1.4,[.3,1.8,.4],rt(.7,.7,.72));let pe=St.fromScene(F,0,.01,20);return q.forEach(xe=>{xe.geometry.dispose(),xe.material.dispose()}),pe}L=T();function g(){let F=new Dn,q=[],ne=xe=>(q.push(xe),F.add(xe),xe);ne(new Pt(new Hn(8,6,8),Dt(rt(.15,.148,.144),Ht)));let ee=(xe,fe,Ie,et)=>{let Be=ne(new Pt(new ni(xe,fe),Dt(et,mn)));Be.position.set(...Ie),Be.lookAt(0,.05,0)};ee(3.2,3.2,[0,2.8,0],rt(1.5,1.48,1.45)),ee(2.6,1.4,[-2.2,1.2,1.4],rt(1.9,1.87,1.82));let pe=St.fromScene(F,0,.01,20);return q.forEach(xe=>{xe.geometry.dispose(),xe.material.dispose()}),pe}let O=g(),W=L.texture.image.height,j=Math.log2(W)-2,te={tMax:{value:ke.texture},tOpen:{value:Ae.texture},tRest:{value:o},tShadow:{value:Q.texture},tSim:{value:ie.texture},tLamp:{value:U},envMap:{value:L.texture},studioMap:{value:O.texture},uFill:{value:new B(0,1,0)},uFillColor:{value:new B},uNight:{value:0},uShoulder:{value:3},uSky:{value:new B(1,1,1)},uGround:{value:new B},uDome:{value:new B},uGlow:{value:new B},uRimAway:{value:new B},uRimSun:{value:new B},uAura:{value:new B},uCamG:{value:new B},uGtoClip:{value:new Tt},uBlur:{value:new _e(1,0)},uLight:{value:new B(0,1,0)},uLightColor:{value:new B(10,10,10)},uSunDir:{value:new _e(0,1)},uTan:{value:1},uEnv:{value:4.5},uPix:{value:.001},uWell:{value:Do},uFloor:{value:li},uTop:{value:Lo},uLit:{value:1},uSun:{value:1},uSwell:{value:0},uPitch:{value:jt},uRiseT:{value:0},uSink:{value:0},uRoom:{value:0},uSpin:{value:new _e(1,0)},uWind:{value:0},uWindDir:{value:new _e(1,0)},uWindT:{value:0},uCloud:{value:0},uCloudAt:{value:new _e},uWet:{value:0},uBoat:Ve.uBoat,uBoatSize:Ve.uBoatSize,uBoatOn:Ve.uBoatOn,uFlood:{value:xn.map(F=>F.flood??0)},uPicked:{value:new _e}},de=new Kt({vertexShader:Vg,fragmentShader:Gg,uniforms:te,side:Ht,defines:{...le,STEPS:Dg(i.phone,n),REFLECT_STEPS:56+16*(n-1),LAMP_K:(n*n).toFixed(1),FLOOR_G:li.toFixed(1),...i.phone?{}:{REFLECT:1},...vu?{DEBUG:vu}:{},ENVMAP_TYPE_CUBE_UV:1,CUBEUV_TEXEL_WIDTH:1/(3*Math.max(2**j,112)),CUBEUV_TEXEL_HEIGHT:1/W,CUBEUV_MAX_MIP:j.toFixed(1)}}),J=new es(1,1,1,96,1,!1),se=Do*jt/Math.cos(Math.PI/96);J.scale(se,(Lo-li+1)*jt,se),J.translate(0,(Lo+li-1)/2*jt,0);let he=new Pt(J,de);he.position.y=i.top;let Ue=42,ye=du,ve=Math.atan2(Math.sin(Ue*Math.PI/180),-Math.cos(Ue*Math.PI/180)),Ne=It.degToRad(ye)-ve;he.rotation.y=Ne,he.updateMatrixWorld();let Re=sc(i.at??new Date),We=i.at??new Date,D=0,me=NaN,Z=new B,ge=new B,be=new _e,oe=new _e(1e6,1e6),Fe=new B(0,1,0),Pe=new B(.36,.37,.39),ct=new B(.16,.13,.105),nt=0,qt=0,Yt=0,rn=ac(We),An=new _e(1,0),Nn=0,Un=0;cu().then(()=>{me=NaN,i.invalidate()});let Wi=2.95,hi=(F,q,ne)=>{let ee=It.degToRad(F-Wi),pe=It.degToRad(q);return ne.set(Math.sin(ee)*Math.cos(pe),Math.sin(pe),-Math.cos(ee)*Math.cos(pe))};function os(F){let q=Date.now();if(F!==me||q-D>=3e4){me=F,D=q,We=new Date((i.at??new Date).valueOf()+F*36e5),Re=sc(We),ac(We,rn),hi(Re.az,Re.shadeEl,ge);let[pe,xe,fe]=Re.color,Ie=Re.night;te.uLightColor.value.set(pe,xe,fe).multiplyScalar(1.5),te.uGround.value.set(pe*.038+.05*Ie,xe*.038+.028*Ie,fe*.038+.012*Ie),te.uFillColor.value.set(3,3.3,4).multiplyScalar(.55*Ie);let et=rn.cloud;te.uSky.value.set(...Re.sky).lerp(new B(.8,.82,.86),.5*et);let Be=1-It.smoothstep(Re.el,3,24),je=Re.day*(1+.9*et),_t=(Oe,ze,at)=>Oe.set(ze[0]+(at[0]-ze[0])*Be,ze[1]+(at[1]-ze[1])*Be,ze[2]+(at[2]-ze[2])*Be).lerp(Pe,et).multiplyScalar(je);_t(te.uDome.value,[.15,.22,.4],[.12,.19,.46]),_t(te.uRimAway.value,[.34,.38,.44],[.3,.3,.48]),_t(te.uRimSun.value,[.44,.45,.46],[.95,.52,.24]),_t(te.uAura.value,[.8,.78,.72],[1.7,.85,.3]).multiplyScalar((1-.95*et)/(1+.9*et)),te.uGlow.value.set(.5,.36,.26).multiplyScalar(Ie*(1+.8*et));let Me=Ie*(1+1.2*et);te.uDome.value.addScaledVector(ct,Me),te.uRimAway.value.addScaledVector(ct,Me),te.uRimSun.value.addScaledVector(ct,Me),te.uNight.value=Ie,te.uShoulder.value=3-2.7*Ie;let we=It.degToRad(rn.from+180-Wi);An.set(Math.sin(we),-Math.cos(we))}qt||Yt?hi(Re.az+qt,Math.max(Re.shadeEl+Yt,Re.shadeEl*.5),Z):Z.copy(ge),Z.applyAxisAngle(Fe,-nt),te.uLight.value.copy(Z),hi(305,11,te.uFill.value).applyAxisAngle(Fe,-nt),te.uSpin.value.set(Math.cos(nt),Math.sin(nt)),te.uWindDir.value.copy(An).rotateAround(new _e,nt);let ne=Math.hypot(Z.x,Z.z),ee=Math.max(Z.y/ne,.02);be.set(Z.x/ne/ee,Z.z/ne/ee),be.distanceTo(oe)*c.h*n>.4&&(b=!0)}let Xe={x:0,z:0,px:0,pz:0,depth:5,radius:9,on:!1,lastAt:-1e9,water:!1,wet:!1},Rn=null,Cn=new Tt,G=new ji,ce=new B;function qe(F,q){if(!u)return null;Cn.copy(he.matrixWorld).invert(),G.origin.setFromMatrixPosition(q.matrixWorld),ce.set(F.x,F.y,.5).unproject(q),G.direction.copy(ce).sub(G.origin).normalize(),G.applyMatrix4(Cn);let ne=G.origin.clone().divideScalar(jt).add(new B(Xt/2,0,Xt/2)),ee=G.direction.clone().normalize();if(ee.y>=0)return null;let pe=Math.max(0,(Lo-ne.y)/ee.y),xe=(li-ne.y)/ee.y,fe=Ze;for(;pe<xe;pe+=.5/n){let Ie=ne.x+ee.x*pe,et=ne.y+ee.y*pe,Be=ne.z+ee.z*pe;if(Ie<0||Be<0||Ie>=Xt||Be>=Xt)continue;let je=l[r(Ie,Be)];if(!(je<=li)&&et<=je*(1-fe))return{x:Ie,z:Be}}return null}let Ze=0,it=!1,Et=-1e9,ot=(i.at??new Date).valueOf()/1e3%86400,Ot=!1,Vt=new Float32Array(Io*4),Qt=(F,q)=>{gu(q,Vt),F.forEach((ne,ee)=>ne.fromArray(Vt,ee*4))};Qt(Ve.uBoat.value,ot);let vt=[{id:0,y:0,v:0,to:0},{id:0,y:0,v:0,to:0}],_=F=>F<-.5?(vt[0].id===-F?vt[0].y:0)+(vt[1].id===-F?vt[1].y:0):0,I=F=>l[F]+_(a[F*4+3]);function X(F,q,ne){x>=0&&(x=ne?bi:Math.min(bi+1,x+q*M/Ig));let ee=Math.max(x,0),pe=u&&ee<bi;te.uRiseT.value=ee,Ze!==S&&(S=Ze,A=!0);let xe=Xe.on||F-Xe.lastAt<(Xe.water?14e3:4500),fe=u&&!ne&&Ze<.6&&ee>=bi*.6?rn.rain:0;fe>.05&&(Et=F);let Ie=R.length>0&&F-Et<8e3,et=u&&Ze<.5&&ee>=bi*.75?1:0,Be=Ve.uBoatOn;Be.value=ne?et:Be.value+(et-Be.value)*Math.min(1,q*1.2),Math.abs(Be.value-et)<.002&&(Be.value=et);let je=Be.value>0;je!==Ot&&(Ot=je,A=!0);let _t=e.getRenderTarget();if((xe||Ie||je)&&!ne){let we=ut.uniforms.uDrops.value,Oe=fe>.05?Math.min(6,fe*2.2+.6):0;ut.uniforms.uHandV.value.set(Xe.x-Xe.px,Xe.z-Xe.pz).multiplyScalar(Xe.on?1/Math.max(q,1/120):0);for(let ze=1;ze<=2;ze++){let at=ze/2;ut.uniforms.tSim.value=He[w].texture,ut.uniforms.uHand.value.set(Xe.px+(Xe.x-Xe.px)*at,Xe.pz+(Xe.z-Xe.pz)*at,Xe.depth,Xe.radius),ut.uniforms.uHandOn.value=Xe.on?1:0,ut.uniforms.uDip.value=Xe.depth<0?1.1:.5,we.forEach((Ct,ft)=>{if(ft>=Oe||Math.random()>Oe-ft){Ct.z=0;return}let $e=R[Math.floor(Math.random()*R.length)];Ct.set(($e%s+Math.random())/n,(Math.floor($e/s)+Math.random())/n,30+50*Math.random(),0)}),je&&(ot+=1/120,Qt(ut.uniforms.uBoat.value,ot)),bt(ut,He[1-w]),w=1-w}d=!0,xe?A=!0:je&&(y=!0)}else d&&(bt(Lt,He[0]),bt(Lt,He[1]),w=0,d=!1,Xe.water=!1,A=!0);Qt(Ve.uBoat.value,ot),Ve.uBoatDip.value=d?Lg:0,te.tSim.value=He[w].texture,Xe.px=Xe.x,Xe.pz=Xe.z,(pe||u&&!it)&&(A=!0);let Me=!1;for(let we of vt)if(!(we.y===we.to&&we.v===0)){ne&&(we.y=we.to,we.v=0);for(let Oe=0,ze=Math.min(q,1/30)/2;Oe<2&&!ne;Oe++)we.v+=(81*(we.to-we.y)-2*.42*9*we.v)*ze,we.y+=we.v*ze;Math.abs(we.to-we.y)<.003&&Math.abs(we.v)<.02?(we.y=we.to,we.v=0):Me=!0,A=!0}if(mt.uniforms.uLift.value.set(vt[0].id,vt[0].y,vt[1].id,vt[1].y),te.uPicked.value.set(vt[0].id,Math.min(1,Math.max(0,vt[0].y/2))),(A||y)&&u&&(it=ee>=bi,mt.uniforms.tSim.value=He[w].texture,mt.uniforms.uTime.value=ee,mt.uniforms.uSink.value=Ze,bt(mt,Le),Ke.uniforms.tSrc.value=Le.texture,bt(Ke,De),Ke.uniforms.tSrc.value=De.texture,bt(Ke,ue),Ke.uniforms.tSrc.value=ue.texture,bt(Ke,Ce),bt(Qe,ke),A&&(bt(gt,Ae),b=!0)),b&&u){let we=Math.hypot(Z.x,Z.z);Ge.uniforms.uDir.value.set(Z.x/we,Z.z/we),Ge.uniforms.uTan.value=Z.y/we,te.uSunDir.value.set(Z.x/we,Z.z/we),te.uTan.value=Z.y/we,oe.copy(be),Ge.uniforms.tSrc.value=Le.texture,Ge.uniforms.uStep.value=1,Ge.uniforms.uInit.value=1,bt(Ge,Q);let Oe=Q,ze=ae;Ge.uniforms.uInit.value=0;for(let at=1;at<s;at*=2)Ge.uniforms.tSrc.value=Oe.texture,Ge.uniforms.uStep.value=at,bt(Ge,ze),[Oe,ze]=[ze,Oe];te.tShadow.value=Oe.texture,b=!1}return A=y=!1,e.setRenderTarget(_t),pe||xe||Ie||Me||je&&!ne}let z={value:0},V=new B,Ee=new Tt().makeScale(jt,jt,jt).multiply(new Tt().makeTranslation(-Xt/2,0,-Xt/2));return{mesh:he,get ready(){return u},turn(F){F!==nt&&(nt=F,he.rotation.y=Ne+nt,he.updateMatrixWorld())},tilt(F,q){F===qt&&q===Yt||(qt=F,Yt=q,i.invalidate())},relight(){me=NaN,i.invalidate()},get failed(){return f},get light(){return Re},get risen(){if(x<0||!p.length)return 0;let F=x-.08,q=0,ne=p.length;for(;q<ne;){let ee=q+ne>>1;p[ee]<=F?q=ee+1:ne=ee}return q},landmark(F){return v[F]??null},get under(){return Rn},lift(F,q){let ne=F!==null&&v[F]?F+1:0;ne&&vt[1].id===ne&&vt.reverse();let[ee,pe]=vt;!ne||ee.id===ne?ee.to=ne?q:0:(ee.id&&(ee.y!==0||ee.v!==0)&&Object.assign(pe,ee,{to:0}),Object.assign(ee,{id:ne,y:0,v:0,to:q})),i.invalidate()},arrive(){x<0&&u&&(x=0,i.invalidate())},rush(){M=7},get arriving(){return x>=0&&x<bi},get intro(){return x},get lightTime(){return We},get weather(){return rn},gridToWorld(F,q,ne,ee){return ee.set((F-Xt/2)*jt,q*jt,(ne-Xt/2)*jt).applyMatrix4(he.matrixWorld)},worldToGrid(F,q){return Cn.copy(he.matrixWorld).invert(),q.copy(F).applyMatrix4(Cn).divideScalar(jt),q.set(q.x+Xt/2,q.y,q.z+Xt/2)},heightAt(F,q){return F<0||q<0||F>=Xt||q>=Xt?li:I(r(F,q))*(1-Ze)},clear(F,q){let ne=Math.hypot(q.x-F.x,q.z-F.z),ee=Math.min(400,Math.ceil(ne/1.5));for(let pe=2;pe<ee;pe++){let xe=pe/ee,fe=F.x+(q.x-F.x)*xe,Ie=F.z+(q.z-F.z)*xe;if(fe<0||Ie<0||fe>=Xt||Ie>=Xt)break;if(I(r(fe,Ie))*(1-Ze)>F.y+(q.y-F.y)*xe)return!1}return!0},update(F){os(F.hours),Ze=F.sink;let q=X(F.now,F.dt,F.still);he.visible=u,z.value=u?1:0,he.updateMatrixWorld(),Cn.copy(he.matrixWorld).invert(),V.setFromMatrixPosition(F.camera.matrixWorld).applyMatrix4(Cn),te.uCamG.value.set(V.x/jt+Xt/2,V.y/jt,V.z/jt+Xt/2),te.uGtoClip.value.copy(F.camera.projectionMatrix).multiply(F.camera.matrixWorldInverse).multiply(he.matrixWorld).multiply(Ee),te.uPix.value=2*Math.tan(It.degToRad(F.camera.fov)/2)/Math.max(1,F.height)/(F.camera.zoom||1),te.uBlur.value.set(F.blur?.[0]??1,F.blur?.[1]??0),te.uEnv.value=F.lit,te.uSun.value=1-It.smoothstep(F.sink,.25,.75),te.uSink.value=F.sink,te.uRoom.value=F.room,te.uLit.value=1+.6*Re.day*(1-It.smoothstep(F.sink,.55,1));let ne=F.still?1:1-Math.exp(-F.dt*2.5);Nn+=(It.smoothstep(rn.wind,1,14)-Nn)*ne;let ee=It.smoothstep(rn.rain,.05,1.2);return Un+=(ee-Un)*(ee>Un?ne:ne*.3),te.uWind.value=Nn,te.uWet.value=Un*(1-It.smoothstep(F.sink,.3,.8)),te.uCloud.value+=(rn.cloud-te.uCloud.value)*ne,F.still||(te.uSwell.value+=F.dt*(.6+.9*Nn),te.uWindT.value+=F.dt*(.5+1.5*Nn),te.uCloudAt.value.addScaledVector(te.uWindDir.value,-F.dt*(.012+.03*rn.wind))),q||!F.still&&(rn.cloud>.02||Nn>.05)},pointer(F,q,ne){let ee=F&&ne?qe(F,q):null,pe=performance.now(),xe=ee?a[r(ee.x,ee.z)*4+3]:0;return Rn=ee&&xe<-.5?Math.round(-xe)-1:null,!ee||Rn!==null&&ne==="hover"?(Xe.on&&(Xe.on=!1,Xe.lastAt=pe,i.invalidate()),!!ee):(Xe.on||(Xe.px=ee.x,Xe.pz=ee.z),Xe.x=ee.x,Xe.z=ee.z,Xe.on=!0,Xe.depth=ne==="press"?-.6:6.5,Xe.wet=a[r(ee.x,ee.z)*4+1]>1.5,Xe.wet&&(Xe.water=!0),Xe.radius=ne==="press"?15:10,Xe.lastAt=pe,i.invalidate(),!0)},patchPlinth(F,q){let ne=F.onBeforeCompile;F.onBeforeCompile=(pe,xe)=>{ne.call(F,pe,xe),pe.uniforms.uPocket=z,pe.vertexShader=pe.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPinW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vPinW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),pe.fragmentShader=pe.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPinW;
uniform float uPocket;`).replace("void main() {",`void main() {
  if (uPocket > 0.5 && vPinW.y > ${(q-8e-4).toFixed(4)} && length(vPinW.xz) < ${(Do*jt).toFixed(5)}) discard;`)};let ee=F.customProgramCacheKey();F.customProgramCacheKey=()=>"pin-pocket|"+ee,F.needsUpdate=!0},dispose(){h=!1;for(let F of[ie,re,Le,De,ue,Ce,ke,Ae,Q,ae])F.dispose();for(let F of[mt,Ke,Qe,gt,Ge,ut,Lt,de])F.dispose();o.dispose(),U.dispose(),$.dispose(),J.dispose(),L?.dispose(),O.dispose(),St.dispose()}}}var Wg="varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",bu=`
uniform float uNear; uniform float uFar; uniform float uFocus; uniform float uCoc;
// Signed circle of confusion (px): + behind the focus, - in front, from a depth-buffer value. Behind the focus it
// grows at 0.6 of the lens's rate, so the city further off stays legible (a portrait blur hid
// everything beyond the nearest street); in front it keeps the full macro blur.
float coc(float depth) {
  float z = (uNear * uFar) / (uFar - depth * (uFar - uNear));
  float c = 1.0 - uFocus / z;
  return c > 0.0 ? 0.6 * uCoc * c : max(uCoc * c, -1.3 * uCoc);
}`,Xg=`
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 uTexel;
${bu}
void main() {
  vec2 o = uTexel * 0.5;
  vec3 c = texture2D(tColor, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, -o.y)).rgb
         + texture2D(tColor, vUv + vec2(-o.x, o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, o.y)).rgb;
  float d = min(min(texture2D(tDepth, vUv + vec2(-o.x, -o.y)).r, texture2D(tDepth, vUv + vec2(o.x, -o.y)).r),
                min(texture2D(tDepth, vUv + vec2(-o.x, o.y)).r, texture2D(tDepth, vUv + vec2(o.x, o.y)).r));
  gl_FragColor = vec4(c * 0.25, coc(d) * 0.5);            // half-size pixels
}`,qg=`
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
}`,Yg=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel;
void main() {
  vec2 o = uTexel;
  vec4 c = texture2D(tSrc, vUv) * 4.0
    + (texture2D(tSrc, vUv + vec2(o.x, 0.0)) + texture2D(tSrc, vUv - vec2(o.x, 0.0)) + texture2D(tSrc, vUv + vec2(0.0, o.y)) + texture2D(tSrc, vUv - vec2(0.0, o.y))) * 2.0
    + texture2D(tSrc, vUv + o) + texture2D(tSrc, vUv - o) + texture2D(tSrc, vUv + vec2(o.x, -o.y)) + texture2D(tSrc, vUv + vec2(-o.x, o.y));
  gl_FragColor = c / 16.0;
}`,Zg=`
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
}`,$g=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel;
vec3 at(float x, float y) { return texture2D(tSrc, vUv + uTexel * vec2(x, y)).rgb; }
void main() {
  vec3 c = at(0.0, 0.0) * 0.125
    + (at(-2.0, 2.0) + at(2.0, 2.0) + at(-2.0, -2.0) + at(2.0, -2.0)) * 0.03125
    + (at(0.0, 2.0) + at(-2.0, 0.0) + at(2.0, 0.0) + at(0.0, -2.0)) * 0.0625
    + (at(-1.0, 1.0) + at(1.0, 1.0) + at(-1.0, -1.0) + at(1.0, -1.0)) * 0.125;
  gl_FragColor = vec4(c, 1.0);
}`,Jg=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uGain;
void main() {
  vec2 o = uTexel;
  vec3 c = texture2D(tSrc, vUv).rgb * 4.0
    + (texture2D(tSrc, vUv + vec2(o.x, 0.0)).rgb + texture2D(tSrc, vUv - vec2(o.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, o.y)).rgb + texture2D(tSrc, vUv - vec2(0.0, o.y)).rgb) * 2.0
    + texture2D(tSrc, vUv + o).rgb + texture2D(tSrc, vUv - o).rgb + texture2D(tSrc, vUv + vec2(o.x, -o.y)).rgb + texture2D(tSrc, vUv + vec2(-o.x, o.y)).rgb;
  gl_FragColor = vec4(c * (uGain / 16.0), 1.0);
}`,Kg=`
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tDepth; uniform sampler2D tBlur; uniform vec2 uHalfTexel; uniform float uGrain; uniform float uTime;
uniform float uShade; uniform float uAspect; uniform vec2 uSize; uniform sampler2D tBloom; uniform vec2 uBloomTexel; uniform float uBloom;
${bu}
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
}`,jg=2.4,Qg=.7,ex=1+.7+.49+.343+.2401,tx=(()=>{let i=typeof location>"u"?null:new URLSearchParams(location.search).get("bloom");return i!==null&&Number.isFinite(Number(i))?Number(i):.3})()/ex;function Su(i,e){let t=new Wt(1,1,{type:hn,depthTexture:new ti(1,1),samples:0,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),n=()=>new Wt(1,1,{type:hn,depthBuffer:!1,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),s=n(),r=n(),a=n(),o=[n(),n(),n(),n(),n()],l={uNear:{value:.05},uFar:{value:40},uFocus:{value:1},uCoc:{value:0}},c=(N,U,k={})=>new Kt({vertexShader:Wg,fragmentShader:N,uniforms:U,depthTest:!1,depthWrite:!1,...k}),u=c(Xg,{tColor:{value:t.texture},tDepth:{value:t.depthTexture},uTexel:{value:new _e},...l}),f=c(qg,{tDown:{value:s.texture},uTexel:{value:new _e},uRadius:{value:0}},{defines:{SAMPLES:e?30:52}}),h=c(Yg,{tSrc:{value:r.texture},uTexel:{value:new _e}}),m=c(Zg,{tDown:{value:s.texture},tSoft:{value:a.texture},uTexel:{value:new _e},uExposure:{value:1},uThreshold:{value:jg}}),x=c($g,{tSrc:{value:null},uTexel:{value:new _e}}),M=c(Jg,{tSrc:{value:null},uTexel:{value:new _e},uGain:{value:Qg}},{blending:Ca,blendEquation:_i,blendSrc:gr,blendDst:gr}),p=c(Kg,{tColor:{value:t.texture},tDepth:{value:t.depthTexture},tBlur:{value:a.texture},uHalfTexel:{value:new _e},uGrain:{value:0},uTime:{value:0},uShade:{value:0},uAspect:{value:1},uSize:{value:new _e(1,1)},...l,tBloom:{value:o[0].texture},uBloomTexel:{value:new _e},uBloom:{value:0}}),d=new Dn,w=new ii(-1,1,1,-1,0,1),A=new cn;A.setAttribute("position",new zt([-1,-1,0,3,-1,0,-1,3,0],3));let y=new Pt(A,p);y.frustumCulled=!1,d.add(y);let b=(N,U,k=!1)=>{y.material=N,i.setRenderTarget(U);let C=i.autoClear;i.autoClear=!k,i.render(d,w),i.autoClear=C},S=o.map(()=>new _e),R=1,v=1,E=1,P=new B;return{get blur(){return[l.uFocus.value,l.uCoc.value]},setSize(N,U,k=1){E=Math.max(1,Math.round(N*k));let C=Math.max(1,Math.round(U*k));R=N,v=U,t.setSize(E,C),s.setSize(Math.ceil(E/2),Math.ceil(C/2)),r.setSize(Math.ceil(E/2),Math.ceil(C/2)),a.setSize(Math.ceil(E/2),Math.ceil(C/2)),o.forEach((H,$)=>{H.setSize(Math.max(1,Math.ceil(E/(4<<$))),Math.max(1,Math.ceil(C/(4<<$)))),S[$].set(1/H.width,1/H.height)}),m.uniforms.uTexel.value.set(1/Math.ceil(E/2),1/Math.ceil(C/2)),p.uniforms.uBloomTexel.value.copy(S[0]),h.uniforms.uTexel.value.set(1/Math.ceil(E/2),1/Math.ceil(C/2)),u.uniforms.uTexel.value.set(1/E,1/C),f.uniforms.uTexel.value.set(1/Math.ceil(E/2),1/Math.ceil(C/2)),p.uniforms.uHalfTexel.value.set(1/Math.ceil(E/2),1/Math.ceil(C/2)),p.uniforms.uSize.value.set(E,C)},render(N,U,k,C,H){i.setRenderTarget(t),i.render(N,U),P.copy(k).applyMatrix4(U.matrixWorldInverse),l.uNear.value=U.near,l.uFar.value=U.far,l.uFocus.value=Math.max(.01,-P.z);let $=E/40*C;l.uCoc.value=$,f.uniforms.uRadius.value=$/2*1.3,p.uniforms.uGrain.value=.022*Math.min(1,C*1.5),p.uniforms.uTime.value=H,p.uniforms.uShade.value=Math.min(1,C*1.2),p.uniforms.uAspect.value=R/v,p.uniforms.uBloom.value=tx*Math.min(1,C*8),b(u,s),b(f,r),b(h,a),m.uniforms.uExposure.value=i.toneMappingExposure,b(m,o[0]);for(let Y=1;Y<o.length;Y++)x.uniforms.tSrc.value=o[Y-1].texture,x.uniforms.uTexel.value=S[Y-1],b(x,o[Y]);for(let Y=o.length-2;Y>=0;Y--)M.uniforms.tSrc.value=o[Y+1].texture,M.uniforms.uTexel.value=S[Y+1],b(M,o[Y],!0);b(p,null)},warm(){let N=i.getRenderTarget(),U=[],k=[[u,s],[f,r],[h,a],[m,o[0]],[x,o[1]],[M,o[0]],[p,null]];try{for(let[C,H]of k)y.material=C,i.setRenderTarget(H),U.push(Zs(i,d,w))}finally{y.material=p,i.setRenderTarget(N)}return Promise.all(U)},within(N){let U=i.getRenderTarget();i.setRenderTarget(t);try{N()}finally{i.setRenderTarget(U)}},dispose(){t.depthTexture?.dispose(),t.dispose(),s.dispose(),r.dispose(),a.dispose(),o.forEach(N=>N.dispose()),u.dispose(),f.dispose(),h.dispose(),m.dispose(),x.dispose(),M.dispose(),p.dispose(),A.dispose()}}}var nx=.3,ix=1.75,sx=6,Wn=Math.PI/180;function Eu(i){let{canvas:e,phone:t}=i,n=new bo({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"});n.setPixelRatio(i.pixelRatio),n.toneMapping=xr,n.toneMappingExposure=nx,n.outputColorSpace=fn,n.setClearColor(197380,1);let s=!0,r=0,a=i.still,o=!1,l=0,c=0,u=0,f=()=>{!r&&s&&(r=requestAnimationFrame(Xe))},h=G=>{s&&(s=!1,cancelAnimationFrame(r),i.onFail(G))},m=Mu({renderer:n,top:0,phone:t,at:i.at,city:i.city,marks:i.marks,invalidate:f,onFail:h});if(!m)throw n.dispose(),new Error("pintable: no float render targets");let x=m,M=Su(n,t),p=new Dn;p.add(x.mesh);let d=new ln(t?30:24,1,.02,20),w=ss.n,A=ss.pocket,y=ss.n/512,b=new zi(n),S=(()=>{let G=new Dn,ce=(Et,ot,Ot)=>new st().setRGB(Et,ot,Ot,Kn),qe=new Pt(new Hn(8,6,8),new ei({color:ce(.004,.0042,.0046),side:Ht}));G.add(qe);let Ze=(Et,ot,Ot,Vt)=>{let Qt=new Pt(new ni(Et,ot),new ei({color:Vt,side:mn}));Qt.position.set(...Ot),Qt.lookAt(0,.05,0),G.add(Qt)};Ze(2.6,.5,[-1.3,.75,-1.6],ce(2.3,2.25,2.15)),Ze(1.4,1.4,[.3,1.8,.4],ce(.7,.7,.72));let it=b.fromScene(G,0,.01,20);return G.traverse(Et=>{let ot=Et;ot.geometry?.dispose(),ot.material?.dispose()}),it})();p.environment=S.texture,p.environmentRotation.y=x.mesh.rotation.y,p.environmentIntensity=1;let R=A+.0085,v=[new _e(A,-.006),new _e(A,-6e-4),new _e(A+5e-4,-5e-5),new _e(A+9e-4,0)];for(let G=0;G<=10;G++){let ce=G/10*Math.PI/2;v.push(new _e(R-.0024+Math.sin(ce)*.0024,-.0024+Math.cos(ce)*.0024))}v.push(new _e(R,-.0075),new _e(R-8e-4,-.0083));let E=new Ds(v,192),P=new Us({color:14277340,metalness:1,roughness:.16,clearcoat:.4,clearcoatRoughness:.08}),N=new Pt(E,P),U=new Ds([new _e(0,-.054),new _e(R-.004,-.054),new _e(R-8e-4,-.0505),new _e(R-8e-4,-.0083),new _e(A,-.0083)],192),k=new Us({color:657931,metalness:.55,roughness:.4,clearcoat:.25,clearcoatRoughness:.35}),C=new Pt(U,k),H=new es(.022,.026,1.6,64,1,!0);H.translate(0,-.054-.8,0);let $=new Ns({color:460552,metalness:.2,roughness:.7}),Y=new Pt(H,$);p.add(N,C,Y);let le=new fr(16777215,0);p.add(le,le.target);let K=!1;setTimeout(()=>{if(!s)return;let G=Promise.resolve();M.within(()=>{G=Zs(n,p,d)}),Promise.race([Promise.all([G,M.warm()]),new Promise(ce=>setTimeout(ce,4e3))]).then(()=>{K=!0,f()})},0);let ie=w/2,re={x0:-1,x1:1,y0:-1,y1:1},Le=()=>{let G=Math.tan(d.fov*Wn/2),ce=G*d.aspect,qe=A*(d.aspect<.8?1.14:1.08)/(ce*(re.x1-re.x0)/2),Ze=A*(Math.sin(31*Wn)*1.08+.2)/(G*(re.y1-re.y0)/2);return Math.min(Math.max(qe,Ze),4.2)},De=.09,ue={b:148,el:31,dist:1,gx:ie,gz:ie},Ce={...ue},ke=1,Q=(G,ce,qe)=>qe.set(Math.sin(G*Wn)*Math.cos(ce*Wn),Math.sin(ce*Wn),-Math.cos(G*Wn)*Math.cos(ce*Wn)).applyAxisAngle(ae,x.mesh.rotation.y),ae=new B(0,1,0),Ae=new B,He=new B,Se=new B,Ve=new B,mt=0,Ke=G=>It.lerp(3,12,It.smoothstep(Math.log(G),Math.log(.18),Math.log(.6)));function Qe(G){G.dist=It.clamp(G.dist,De,ke*1.2),G.el=It.clamp(G.el,Ke(G.dist),82);let ce=w/2*.92*(1-It.smoothstep(G.dist,ke*.45,ke*.95)),qe=G.gx-ie,Ze=G.gz-ie,it=Math.hypot(qe,Ze);it>ce&&(G.gx=ie+qe/it*ce,G.gz=ie+Ze/it*ce)}let gt={el:74,dist:1.25};function Ge(G){let ce=a?1:1-Math.exp(-G*7),qe=ue.b-Ce.b;qe-=360*Math.round(qe/360),Ce.b+=qe*ce,Ce.el+=(ue.el-Ce.el)*ce,Ce.dist=Math.exp(Math.log(Ce.dist)+(Math.log(ue.dist)-Math.log(Ce.dist))*ce),Ce.gx+=(ue.gx-Ce.gx)*ce,Ce.gz+=(ue.gz-Ce.gz)*ce;let Ze=Math.abs(qe)>.01||Math.abs(ue.el-Ce.el)>.01||Math.abs(ue.dist/Ce.dist-1)>5e-4||Math.hypot(ue.gx-Ce.gx,ue.gz-Ce.gz)>.02;Ze||Object.assign(Ce,ue);let{b:it,el:Et,dist:ot}=Ce;if(de&&!te){let I=x.intro,X=I<0?0:Math.min(1,I/(bi-.4)),z=X*X*X*(X*(X*6-15)+10);Et=It.lerp(gt.el,Et,z),ot=Math.exp(It.lerp(Math.log(gt.dist*ke),Math.log(ot),z)),it=it-40*(1-z)}x.gridToWorld(Ce.gx,0,Ce.gz,Ae),d.position.copy(Ae).addScaledVector(Q(it,Et,He),ot),d.lookAt(Ae),d.near=ot<.5?.003:.02,d.updateProjectionMatrix(),d.updateMatrixWorld();let Ot=ot<.6?x.heightAt(Ce.gx,Ce.gz)*Math.min(1,(.6-ot)/.3):0;x.gridToWorld(Ce.gx,Math.max(0,Ot)*.6,Ce.gz,Se);let Vt=I=>-I.applyMatrix4(d.matrixWorldInverse).z,Qt=Vt(Ve.copy(Se)),vt=ct===null?null:x.landmark(ct),_=0;if(vt?.hull){let I=1/0,X=0;for(let z=0;z<vt.hull.length;z+=3)I=Math.min(I,Vt(x.gridToWorld(vt.hull[z],vt.hull[z+2]+Yt(),vt.hull[z+1],Ve))),X=Math.max(X,Vt(x.gridToWorld(vt.hull[z],0,vt.hull[z+1],Ve)));I>0&&X>I&&(_=1.6/(1/I+.6/X)-Qt)}return mt=a?_:mt+(_-mt)*(1-Math.exp(-G*4)),Math.abs(mt)>1e-5&&Se.set(0,0,-(Qt+mt)).applyMatrix4(d.matrixWorld),Ze||Math.abs(_-mt)>1e-4}let ut=G=>It.lerp(.95,.12,It.smoothstep(Math.log(G),Math.log(.28),Math.log(ke))),Lt=new _e,bt=new pr,Rt=new En(new B(0,1,0),0),St=new B,L=new B,Dt=1,rt=1,T=(G,ce,qe=Lt)=>qe.set(G/Dt*2-1,-(ce/rt*2-1));function g(G,ce){return bt.setFromCamera(T(G,ce,new _e),d),!bt.ray.intersectPlane(Rt,St)||Math.hypot(St.x-x.mesh.position.x,St.z-x.mesh.position.z)>A?null:(x.worldToGrid(St,L),{x:L.x,z:L.z})}let O=new Map,W=null,j=!1,te=!1,de=!1,J=null,se=()=>e.getBoundingClientRect();function he(){te||(te=!0,de&&(Object.assign(Ce,Ue()),x.rush()))}function Ue(){let G=d.position.clone().sub(Ae),ce=G.length(),qe=Math.asin(It.clamp(G.y/ce,-1,1))/Wn;G.applyAxisAngle(ae,-x.mesh.rotation.y);let Ze=Math.atan2(G.x,-G.z)/Wn,it={...Ce,b:Ze,el:qe,dist:ce};return Object.assign(ue,{b:Ze,el:qe,dist:ce}),it}function ye(G){if(!o)return;let ce=se(),qe=G.clientX-ce.left,Ze=G.clientY-ce.top;j=G.pointerType==="mouse",he(),e.setPointerCapture(G.pointerId);let it=!g(qe,Ze),Et=G.button===2||G.ctrlKey||G.altKey||O.size>0||a||it;if(O.size>0)for(let ot of O.values())ot.mode="turn";O.set(G.pointerId,{mode:Et?"turn":"press",x:qe,y:Ze,id:G.pointerId,beside:it&&G.pointerType==="touch"}),O.size===2&&ve(),f()}function ve(){let[G,ce]=[...O.values()];J={d:Math.hypot(G.x-ce.x,G.y-ce.y),a:Math.atan2(ce.y-G.y,ce.x-G.x),dist:ue.dist,b:ue.b}}function Ne(G){let ce=se(),qe=G.clientX-ce.left,Ze=G.clientY-ce.top,it=O.get(G.pointerId);if(!it){G.pointerType==="mouse"&&(W={x:qe,y:Ze},j=!0,f());return}let Et=qe-it.x,ot=Ze-it.y;if(it.x=qe,it.y=Ze,O.size===2&&J){let[Ot,Vt]=[...O.values()],Qt=Math.hypot(Ot.x-Vt.x,Ot.y-Vt.y),vt=Math.atan2(Vt.y-Ot.y,Vt.x-Ot.x),_=J.d/Math.max(Qt,1);D((Ot.x+Vt.x)/2,(Ot.y+Vt.y)/2,J.dist*_/ue.dist),ue.b=J.b+(vt-J.a)/Wn,Qe(ue)}else it.mode==="turn"&&(ue.b-=Et*.28,it.beside||(ue.el+=ot*.2),Qe(ue));f()}function Re(G){O.delete(G.pointerId),O.size<2&&(J=null),G.pointerType!=="mouse"&&(W=null),f()}function We(G){G.pointerType==="mouse"&&!O.size&&(W=null,f())}function D(G,ce,qe){let Ze=ue.dist;ue.dist*=qe,Qe(ue);let it=ue.dist/Ze,Et=g(G,ce);if(Et&&it<1)ue.gx+=(Et.x-ue.gx)*(1-it),ue.gz+=(Et.z-ue.gz)*(1-it);else if(it>1){let ot=Math.min(1,(it-1)*1.6);ue.gx+=(ie-ue.gx)*ot*It.smoothstep(ue.dist,ke*.35,ke*.9),ue.gz+=(ie-ue.gz)*ot*It.smoothstep(ue.dist,ke*.35,ke*.9)}Qe(ue)}function me(G){if(!o)return;G.preventDefault(),he();let ce=se(),qe=G.clientX-ce.left,Ze=G.clientY-ce.top,it=G.deltaMode===1?16:G.deltaMode===2?rt:1;!G.ctrlKey&&Math.abs(G.deltaX)>Math.abs(G.deltaY)*1.2?(ue.b-=G.deltaX*it*.12,Qe(ue)):D(qe,Ze,Math.exp(G.deltaY*it*(G.ctrlKey?.01:.0016))),f()}function Z(G){if(!o)return;let ce=se(),qe=g(G.clientX-ce.left,G.clientY-ce.top);qe&&(he(),ue.gx=qe.x,ue.gz=qe.z,ue.dist=Math.min(ue.dist,.3),Qe(ue),f())}let ge=G=>G.preventDefault(),be=!1;function oe(G){if(!o)return;let ce=G.touches,qe=se();be=ce.length>1||!!g(ce[0].clientX-qe.left,ce[0].clientY-qe.top),be&&G.preventDefault()}let Fe=G=>{(be||G.touches.length>1)&&G.cancelable&&G.preventDefault()};e.addEventListener("touchstart",oe,{passive:!1}),e.addEventListener("touchmove",Fe,{passive:!1}),e.addEventListener("pointerdown",ye),e.addEventListener("pointermove",Ne),e.addEventListener("pointerup",Re),e.addEventListener("pointercancel",Re),e.addEventListener("pointerleave",We),e.addEventListener("wheel",me,{passive:!1}),e.addEventListener("dblclick",Z),e.addEventListener("contextmenu",ge);let Pe=G=>{G.preventDefault(),h(new Error("WebGL context lost"))};e.addEventListener("webglcontextlost",Pe);let ct=null,nt=null,qt=()=>ix/ss.cityM,Yt=()=>sx/ss.cityM;function rn(G){let ce=ct??G;ce!==nt&&(nt=ce,x.lift(ce,ce===null?0:ce===ct?Yt():qt()))}let An=new B;function Nn(){let G=ct??x.under;if(G===null||!xn[G]?.fact||!x.landmark(G)){i.onLabel(null,0,0);return}let ce=x.landmark(G);if(x.gridToWorld(ce.x,ce.top+(G===ct?Yt():qt())+3*y,ce.z,An),An.project(d),An.z>1||Math.abs(An.x)>1.05||Math.abs(An.y)>1.05){i.onLabel(null,0,0);return}i.onLabel(G,(An.x*.5+.5)*Dt,(.5-An.y*.5)*rt)}let Un=0,Wi="",hi=new _e;function os(G,ce){x.ready&&K&&!o&&(o=!0,i.onReady()),o&&x.intro<0&&x.arrive(),de=x.arriving&&!a;let qe=Ge(G),Ze=[...O.values()].find(I=>I.mode==="press"),it=!1;a||!o?x.pointer(null,d,null):Ze?it=x.pointer(T(Ze.x,Ze.y,hi),d,"press"):W&&j&&!O.size?it=x.pointer(T(W.x,W.y,hi),d,"hover"):x.pointer(null,d,null),o&&(a||!de)&&rn(it&&!Ze?x.under:null),e.style.cursor=O.size?Ze?"grabbing":"move":it?"pointer":"grab";let Et=x.update({now:ce,dt:G,camera:d,sink:0,lit:1,room:.35,still:a,height:rt,hours:Un,blur:M.blur}),ot=x.light;Q(ot.az-2.95,Math.max(ot.el,1.5),le.position),le.position.multiplyScalar(3);let Ot=(ot.color[0]+ot.color[1]+ot.color[2])/3;le.color.setRGB(ot.color[0]/Math.max(Ot,.001),ot.color[1]/Math.max(Ot,.001),ot.color[2]/Math.max(Ot,.001),Kn),le.intensity=Ot*.9*(1-.8*(x.weather.cloud>.85?1:0));let Vt=x.risen;Nn();let Qt=x.weather,vt=x.lightTime,_=`${Math.round(Vt/997)}|${de}|${ot.kind}${ot.az.toFixed(0)}/${ot.el.toFixed(0)}|${Math.floor(vt.valueOf()/6e4)}|${lc(Qt)}|${oc()}|${x.under}`;return _!==Wi&&(Wi=_,i.onNews({risen:Vt,arriving:de,light:ot,at:vt,weather:lc(Qt),source:oc(),under:x.under})),Et||qe||de||O.size>0}function Xe(G){if(r=0,!s)return;let ce=G-l;if(l&&ce<1e3/60-3){r=requestAnimationFrame(Xe);return}let qe=l?Math.min(.05,(G-c)/1e3):1/60;l=l&&ce<1e3/30?l+1e3/60:G,c=G,a||(u+=qe);let Ze=os(qe,G);o?M.render(p,d,Se,ut(Ce.dist),u):(n.setRenderTarget(null),n.clear()),i.onFrame?.(G,1e3/60),Ze||!o?r||(r=requestAnimationFrame(Xe)):l=0}function Rn(){let G=Math.max(1,e.clientWidth),ce=Math.max(1,e.clientHeight);Dt=G,rt=ce,n.setSize(G,ce,!1),d.aspect=G/ce,d.fov=G<700?30:24,re=i.region?.(G,ce)??{x0:-1,x1:1,y0:-1,y1:1},d.setViewOffset(G,ce,-(re.x0+re.x1)/2*(G/2),(re.y0+re.y1)/2*(ce/2),G,ce),d.updateProjectionMatrix();let qe=ke;ke=Le(),qe!==ke&&o&&(ue.dist*=ke/qe,Ce.dist*=ke/qe),Qe(ue);let Ze=Math.tan(d.fov*Wn/2),it=a?ue.dist:gt.dist*ke;i.onFit?.(((re.x0+re.x1)/2+1)/2*G,(1-(re.y0+re.y1)/2)/2*ce,A/(it*Ze)*ce);let Et=n.getPixelRatio();M.setSize(Math.round(G*Et),Math.round(ce*Et),Math.min(1,1.5/Et)),f()}ke=1,Rn(),ue.dist=ke,Object.assign(Ce,ue);let Cn=new ResizeObserver(Rn);return Cn.observe(e),f(),{get ready(){return o},get places(){return xn},setMoment(G){Un=(G.valueOf()-i.at.valueOf())/36e5,f()},setSky(G){hu(G),x.relight(),f()},choose(G){he(),ct=G;let ce=G===null?null:x.landmark(G);ce&&(ue.gx=ce.x,ue.gz=ce.z,ue.dist=Math.min(ue.dist,It.clamp(ce.reach*ss.pitch*7,.28,.6)),ue.el=Math.max(ue.el,24),Qe(ue)),nt=-1,rn(null),f()},home(){he(),ct=null,nt=-1,rn(null),Object.assign(ue,{b:ue.b,el:31,dist:ke,gx:ie,gz:ie}),f()},key(G){if(!o)return!1;let ce=G==="ArrowLeft"?[-8,0,1]:G==="ArrowRight"?[8,0,1]:G==="ArrowUp"?[0,5,1]:G==="ArrowDown"?[0,-5,1]:G==="+"||G==="="?[0,0,.8]:G==="-"||G==="_"?[0,0,1.25]:null;return ce?(he(),ue.b+=ce[0],ue.el+=ce[1],ue.dist*=ce[2],Qe(ue),f(),!0):!1},setStill(G){a=G,G&&O.clear(),f()},setPixelRatio(G){n.setPixelRatio(G),Rn()},refit(){Rn()},dispose(){s=!1,cancelAnimationFrame(r),Cn.disconnect(),e.removeEventListener("touchstart",oe),e.removeEventListener("touchmove",Fe),e.removeEventListener("pointerdown",ye),e.removeEventListener("pointermove",Ne),e.removeEventListener("pointerup",Re),e.removeEventListener("pointercancel",Re),e.removeEventListener("pointerleave",We),e.removeEventListener("wheel",me),e.removeEventListener("dblclick",Z),e.removeEventListener("contextmenu",ge),e.removeEventListener("webglcontextlost",Pe),x.dispose(),M.dispose(),S.dispose(),b.dispose(),E.dispose(),U.dispose(),H.dispose(),P.dispose(),k.dispose(),$.dispose(),n.dispose(),n.forceContextLoss()}}}var rx="Europe/Copenhagen",ax=new Intl.DateTimeFormat("en-GB",{timeZone:rx,year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23"});function dc(i){let e=Object.fromEntries(ax.formatToParts(new Date(i)).map(t=>[t.type,Number(t.value)]));return{y:e.year,m:e.month-1,d:e.day,min:e.hour*60+e.minute,s:e.second}}function fc(i,e,t,n){let s=Date.UTC(i,e,t,0,n),r=l=>{let c=dc(l);return Date.UTC(c.y,c.m,c.d,0,c.min,c.s)-Math.floor(l/1e3)*1e3},a=s-r(s),o=s-r(a);return o!==a&&(a=o),new Date(a)}var No=i=>`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(Math.round(i%60)).padStart(2,"0")}`,ox=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],lx=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Tu=(i,e,t)=>`${ox[new Date(Date.UTC(i,e,t)).getUTCDay()]} ${t} ${lx[e]}`;function Au(i,e,t){let n=r=>ic(fc(i,e,t,r)).el+.83,s=[];for(let r=0;r<1440;r+=20){let a=r+20;if(Math.sign(n(r))===Math.sign(n(a)))continue;let o=r,l=a;for(let c=0;c<12;c++){let u=(o+l)/2;Math.sign(n(u))===Math.sign(n(o))?o=u:l=u}s.push(Math.round((o+l)/2))}return s}var cx=["north","north-east","east","south-east","south","south-west","west","north-west"],wu=i=>cx[Math.round((i%360+360)%360/45)%8];function Ru(i){return i?i.kind==="sun"?`Sun ${Math.max(0,Math.round(i.el))}\xB0 ${wu(i.az)}`:i.kind==="moon"?`Moon ${Math.round(i.el)}\xB0 ${wu(i.az)}`:"Night":""}var hx=0;function Cu(i){let e=`dial-${++hx}`,t=i.value,n=!1,s=document.createElement("div");s.className="dial",s.innerHTML=`<p class="dial-head"><span class="dial-label" id="${e}"></span><span class="dial-value"></span><span class="dial-note" hidden></span></p>
    <div class="dial-track" role="slider" tabindex="0" aria-labelledby="${e}" aria-valuemin="${i.min}" aria-valuemax="${i.max}">
      <div class="dial-scale"></div><span class="dial-needle" aria-hidden="true"></span></div>`;let r=A=>s.querySelector(A);r(".dial-label").textContent=i.label;let a=r(".dial-value"),o=r(".dial-note"),l=r(".dial-track"),c=r(".dial-scale"),u=Math.round((i.max-i.min)/i.step),f=i.every??10,h="";for(let A=0;A<=u;A+=i.draw??1)h+=`<i class="${A%f===0?"dial-tick dial-tick-long":"dial-tick"}" style="left:${A*i.gap}px"></i>`;let m=A=>{c.innerHTML=h+A.map(y=>`<b class="dial-mark" style="left:${(y-i.min)/i.step*i.gap}px"></b>`).join("")};m(i.marks??[]);let x=A=>Math.min(i.max,Math.max(i.min,Math.round(A/i.step)*i.step));function M(){a.textContent=i.format(t);let A=i.note?.(t)??"";o.hidden=!A,o.textContent=A,l.setAttribute("aria-valuenow",String(t)),l.setAttribute("aria-valuetext",(i.spoken??i.format)(t)),c.style.transform=`translate3d(${-((t-i.min)/i.step)*i.gap}px,0,0)`}function p(A){let y=x(A);y!==t&&(t=y,M(),i.onChange(t))}let d=null;l.addEventListener("pointerdown",A=>{n||(l.setPointerCapture(A.pointerId),d={id:A.pointerId,x:A.clientX,v:t},s.dataset.dragging="")}),l.addEventListener("pointermove",A=>{d&&d.id===A.pointerId&&p(d.v-(A.clientX-d.x)/i.gap*i.step)});let w=()=>{d=null,delete s.dataset.dragging};return l.addEventListener("pointerup",w),l.addEventListener("pointercancel",w),l.addEventListener("wheel",A=>{if(n)return;A.preventDefault();let y=Math.abs(A.deltaX)>Math.abs(A.deltaY)?A.deltaX:A.deltaY;p(t+Math.sign(y)*i.step)},{passive:!1}),l.addEventListener("keydown",A=>{if(n)return;let y=A.key,b=i.step*f,S=y==="ArrowRight"||y==="ArrowUp"?t+i.step:y==="ArrowLeft"||y==="ArrowDown"?t-i.step:y==="PageUp"?t+b:y==="PageDown"?t-b:y==="Home"?i.min:y==="End"?i.max:null;S!==null&&(A.preventDefault(),p(S))}),M(),{el:s,get value(){return t},setMarks(A){m(A)},refresh(){M()},setDisabled(A){n=A,l.tabIndex=A?-1:0,A?(l.setAttribute("aria-disabled","true"),s.dataset.disabled=""):(l.removeAttribute("aria-disabled"),delete s.dataset.disabled)}}}var Xn=i=>document.querySelector(i),Js=Xn(".ps"),pc=Xn(".ps canvas"),rs=Xn(".ps-label"),Pu=Xn(".ps-read"),ux=Xn(".ps-hint"),mc=matchMedia("(prefers-reduced-motion: reduce)").matches,Lu=matchMedia("(pointer: coarse)").matches;Xn(".ps-count").textContent=Ao.toLocaleString("en-GB");var $s=dc(Date.now()),Vi=[{label:"Today",y:$s.y,m:$s.m,d:$s.d},{label:"21 June",y:$s.y,m:5,d:21},{label:"21 December",y:$s.y,m:11,d:21}],Gi=0,Fo=Math.round($s.min/5)*5,as=null,ci=null,gc=()=>fc(Vi[Gi].y,Vi[Gi].m,Vi[Gi].d,Fo),Du=()=>Au(Vi[Gi].y,Vi[Gi].m,Vi[Gi].d).map(i=>Math.round(i/5)*5),xc=Cu({label:"Hour",value:Fo,min:0,max:1435,step:5,gap:2,every:12,draw:3,marks:Du(),format:No,spoken:i=>`${No(i)} in Copenhagen`,note:()=>Ru(as?.light??null),onChange:i=>{Fo=i,ci?.setMoment(gc()),vc()}});Xn(".ps-dials").prepend(xc.el);function Nu(i,e,t){let n=Xn(i);e.forEach((s,r)=>{let a=document.createElement("button");a.type="button",a.className="ps-chip",a.setAttribute("role","radio"),a.textContent=s,a.setAttribute("aria-checked",String(r===0)),a.addEventListener("click",()=>{n.querySelectorAll("button").forEach((o,l)=>o.setAttribute("aria-checked",String(l===r))),t(r)}),n.append(a)})}Nu(".ps-day",Vi.map(i=>i.label),i=>{Gi=i,xc.setMarks(Du()),ci?.setMoment(gc()),vc()});var dx=[null,"clear","rain","storm"];Nu(".ps-sky",["Forecast","Clear","Rain","Storm"],i=>ci?.setSky(dx[i]));function vc(){let i=Vi[Gi];if(!as){Pu.textContent="";return}Pu.innerHTML=as.arriving?`<span>${as.risen.toLocaleString("en-GB")} pins</span>`:`<span>${Tu(i.y,i.m,i.d)} \xB7 ${No(Fo)}</span><span>${as.weather}${as.source==="met"?" \xB7 MET Norway":""}</span>`}var Uo=Xn(".ps-places");xn.forEach((i,e)=>{if(i.kind!=="building"||!i.fact)return;let t=document.createElement("option");t.value=String(e),t.textContent=i.name,Uo.append(t)});Uo.addEventListener("change",()=>{Uo.value===""?ci?.home():ci?.choose(Number(Uo.value))});ux.textContent=mc?"Motion is off: set the hour, the day and the sky.":Lu?"Press the pins \xB7 two fingers turn the table and go closer":"Press the pins \xB7 drag beside the table or right-drag to turn it \xB7 scroll to go closer";var fx=(i,e)=>{let t=pc.getBoundingClientRect(),n=l=>1-2*(l-t.top)/e,s=l=>-1+2*(l-t.left)/i,r=Xn(".ps-head").getBoundingClientRect(),a=Xn(".ps-dials").getBoundingClientRect(),o=n(a.top-14);return e>i*1.1?{x0:-1,x1:1,y0:o,y1:n(r.bottom+10)}:{x0:s(r.right+24),x1:1,y0:o,y1:n(40)}},Iu=()=>{Js.dataset.gl="off"};try{ci=Eu({canvas:pc,city:Ys?"city-fine.png":"city.png",marks:Ys?"landmarks-fine.png":"landmarks.png",phone:matchMedia("(max-width: 700px)").matches,pixelRatio:Math.min(devicePixelRatio||1,Lu?1.5:2),still:mc,at:new Date,region:fx,onReady:()=>{Js.dataset.gl="on",document.fonts?.ready.then(()=>ci?.refit())},onFail:Iu,onFit:(i,e,t)=>{Js.style.setProperty("--ring-x",`${i|0}px`),Js.style.setProperty("--ring-y",`${e|0}px`),Js.style.setProperty("--ring-d",`${t|0}px`)},onNews:i=>{as=i,xc.refresh(),vc()},onLabel:(i,e,t)=>{if(rs.hidden=i===null,i===null)return;rs.style.transform=`translate3d(${e.toFixed(1)}px,${t.toFixed(1)}px,0)`;let n=xn[i];rs.dataset.at!==String(i)&&(rs.dataset.at=String(i),rs.innerHTML="<b></b><span></span>",rs.querySelector("b").textContent=n.name,rs.querySelector("span").textContent=n.fact??"")}}),ci.setMoment(gc())}catch{Iu()}var px=new IntersectionObserver(([i])=>ci?.setStill(mc||!i.isIntersecting),{threshold:.05});px.observe(Js);pc.parentElement.addEventListener("keydown",i=>{ci?.key(i.key)&&i.preventDefault()});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
