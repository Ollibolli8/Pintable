var Vc=0,ll=1,Gc=2;var ur=1,Wc=2,Ds=3,ei=0,zt=1,mn=2,ti=0,Ns=1,cl=2,hl=3,ul=4,wa=5;var gi=100,Xc=101,qc=102,Yc=103,Zc=104,$c=200,dr=201,Jc=202,Kc=203,dl=204,fl=205,jc=206,Qc=207,eh=208,th=209,nh=210,ih=211,sh=212,rh=213,ah=214,Zr=0,$r=1,Jr=2,Ms=3,Kr=4,jr=5,Qr=6,ea=7,pl=0,oh=1,lh=2,zn=0,ml=1,gl=2,xl=3,vl=4,_l=5,fr=6,yl=7;var Ml=300,Ni=301,ji=302,Ta=303,Aa=304,pr=306,ta=1e3,Xn=1001,na=1002,Lt=1003,ch=1004;var mr=1005;var Dt=1006,Ra=1007;var Ui=1008;var Qt=1009,bl=1010,Sl=1011,Us=1012,Ca=1013,kn=1014,An=1015,ln=1016,Pa=1017,Ia=1018,Fs=1020,El=35902,wl=35899,Tl=1021,Al=1022,gn=1023,qn=1026,Fi=1027,Os=1028,La=1029,Oi=1030,Da=1031;var Na=1033,gr=33776,xr=33777,vr=33778,_r=33779,Ua=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,ka=37492,Ha=37496,Va=37488,Ga=37489,yr=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,$a=37812,Ja=37813,Ka=37814,ja=37815,Qa=37816,eo=37817,to=37818,no=37819,io=37820,so=37821,ro=36492,ao=36494,oo=36495,lo=36283,co=36284,Mr=36285,ho=36286;var Qs=2300,ia=2301,qr=2302,el=2303,tl=2400,nl=2401,il=2402;var hh=3200;var uo=0,uh=1,xi="",fn="srgb",Yn="srgb-linear",er="linear",Mt="srgb";var Yr=7680;var dh=519,fh=512,ph=513,mh=514,fo=515,gh=516,xh=517,po=518,vh=519,_h=35044;var Rl="300 es",On=2e3,bs=2001;function Lu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Du(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yh(){let i=tr("canvas");return i.style.display="block",i}var vc={},Ss=null;function Cl(...i){let e="THREE."+i.shift();Ss?Ss("log",e,...i):console.log(e,...i)}function Mh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=Mh(i);let e="THREE."+i.shift();if(Ss)Ss("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=Mh(i);let e="THREE."+i.shift();if(Ss)Ss("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Zi(...i){let e=i.join(" ");e in vc||(vc[e]=!0,We(...i))}function bh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Sh={[Zr]:$r,[Jr]:Qr,[Kr]:ea,[Ms]:jr,[$r]:Zr,[Qr]:Jr,[ea]:Kr,[jr]:Ms},Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=1234567,Ks=Math.PI/180,Es=180/Math.PI;function Bs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Pl(i,e){return(i%e+e)%e}function Nu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Uu(i,e,t){return i!==e?(t-i)/(e-i):0}function js(i,e,t){return(1-t)*i+t*e}function Fu(i,e,t,n){return js(i,e,1-Math.exp(-t*n))}function Ou(i,e=1){return e-Math.abs(Pl(i,e*2)-e)}function Bu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ku(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hu(i,e){return i+Math.random()*(e-i)}function Vu(i){return i*(.5-Math.random())}function Gu(i){i!==void 0&&(_c=i);let e=_c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wu(i){return i*Ks}function Xu(i){return i*Es}function qu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Yu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $u(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*x,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*x,o*c);break;case"ZYZ":i.set(l*x,l*p,o*u,o*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Rt={DEG2RAD:Ks,RAD2DEG:Es,generateUUID:Bs,clamp:ot,euclideanModulo:Pl,mapLinear:Nu,inverseLerp:Uu,lerp:js,damp:Fu,pingpong:Ou,smoothstep:Bu,smootherstep:zu,randInt:ku,randFloat:Hu,randFloatSpread:Vu,seededRandom:Gu,degToRad:Wu,radToDeg:Xu,isPowerOfTwo:qu,ceilPowerOfTwo:Yu,floorPowerOfTwo:Zu,setQuaternionFromProperEuler:$u,normalize:dn,denormalize:_s},be=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$n=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],x=r[a+2],M=r[a+3];if(f!==M||l!==h||c!==p||u!==x){let g=l*h+c*p+u*x+f*M;g<0&&(h=-h,p=-p,x=-x,M=-M,g=-g);let d=1-o;if(g<.9995){let T=Math.acos(g),R=Math.sin(T);d=Math.sin(d*T)/R,o=Math.sin(o*T)/R,l=l*d+h*o,c=c*d+p*o,u=u*d+x*o,f=f*d+M*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+x*o,f=f*d+M*o;let T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+u*f+l*p-c*h,e[t+1]=l*x+u*h+c*f-o*p,e[t+2]=c*x+u*p+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"YXZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"ZXY":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"ZYX":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"YZX":this._x=h*u*f+c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f-h*p*x;break;case"XZY":this._x=h*u*f-c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f+h*p*x;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Do=new B,yc=new $n,Ze=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],x=n[8],M=s[0],g=s[3],d=s[6],T=s[1],R=s[4],y=s[7],E=s[2],b=s[5],P=s[8];return r[0]=a*M+o*T+l*E,r[3]=a*g+o*R+l*b,r[6]=a*d+o*y+l*P,r[1]=c*M+u*T+f*E,r[4]=c*g+u*R+f*b,r[7]=c*d+u*y+f*P,r[2]=h*M+p*T+x*E,r[5]=h*g+p*R+x*b,r[8]=h*d+p*y+x*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,x=t*f+n*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=f*M,e[1]=(s*c-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=h*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(No.makeScale(e,t)),this}rotate(e){return Zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(No.makeRotation(-e)),this}translate(e,t){return Zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},No=new Ze,Mc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ju(){let i={enabled:!0,workingColorSpace:Yn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yn]:{primaries:e,whitePoint:n,transfer:er,toXYZ:Mc,fromXYZ:bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Mc,fromXYZ:bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}var dt=Ju();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=tr("canvas")),as.width=e.width,as.height=e.height;let s=as.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=as}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ku=0,ws=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uo(s[a].image)):r.push(Uo(s[a]))}else r=Uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var ju=0,Fo=new B,Mn=class i extends Zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=Dt,a=Ui,o=gn,l=Qt,c=i.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Bs(),this.name="",this.source=new ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fo).x}get height(){return this.source.getSize(Fo).y}get depth(){return this.source.getSize(Fo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ta:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ta:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Ml;Mn.DEFAULT_ANISOTROPY=1;var Tt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],x=l[9],M=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,y=(p+1)/2,E=(d+1)/2,b=(u+h)/4,P=(f+M)/4,v=(x+g)/4;return R>y&&R>E?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=b/n,r=P/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=P/r,s=v/r),this.set(n,s,r,t),this}let T=Math.sqrt((g-x)*(g-x)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(g-x)/T,this.y=(f-M)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ra=class extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Mn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ws(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends ra{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},nr=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var aa=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,f,h,p,x,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,p,x,M,g)}set(e,t,n,s,r,a,o,l,c,u,f,h,p,x,M,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,p=a*f,x=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*f,x=c*u,M=c*f;t[0]=h+M*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*f,x=c*u,M=c*f;t[0]=h-M*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*f,x=o*u,M=o*f;t[0]=l*u,t[4]=x*c-p,t[8]=h*c+M,t[1]=l*f,t[5]=M*c+h,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,x=o*l,M=o*c;t[0]=l*u,t[4]=M-h*f,t[8]=x*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+x,t[10]=h-M*f}else if(e.order==="XZY"){let h=a*l,p=a*c,x=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+M,t[5]=a*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qu,e,ed)}lookAt(e,t,n){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Si.crossVectors(n,Sn),Si.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Si.crossVectors(n,Sn)),Si.normalize(),Ar.crossVectors(Sn,Si),s[0]=Si.x,s[4]=Ar.x,s[8]=Sn.x,s[1]=Si.y,s[5]=Ar.y,s[9]=Sn.y,s[2]=Si.z,s[6]=Ar.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],x=n[2],M=n[6],g=n[10],d=n[14],T=n[3],R=n[7],y=n[11],E=n[15],b=s[0],P=s[4],v=s[8],S=s[12],N=s[1],F=s[5],z=s[9],H=s[13],I=s[2],V=s[6],Z=s[10],Y=s[14],re=s[3],q=s[7],Q=s[11],ae=s[15];return r[0]=a*b+o*N+l*I+c*re,r[4]=a*P+o*F+l*V+c*q,r[8]=a*v+o*z+l*Z+c*Q,r[12]=a*S+o*H+l*Y+c*ae,r[1]=u*b+f*N+h*I+p*re,r[5]=u*P+f*F+h*V+p*q,r[9]=u*v+f*z+h*Z+p*Q,r[13]=u*S+f*H+h*Y+p*ae,r[2]=x*b+M*N+g*I+d*re,r[6]=x*P+M*F+g*V+d*q,r[10]=x*v+M*z+g*Z+d*Q,r[14]=x*S+M*H+g*Y+d*ae,r[3]=T*b+R*N+y*I+E*re,r[7]=T*P+R*F+y*V+E*q,r[11]=T*v+R*z+y*Z+E*Q,r[15]=T*S+R*H+y*Y+E*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],x=e[3],M=e[7],g=e[11],d=e[15],T=l*p-c*h,R=o*p-c*f,y=o*h-l*f,E=a*p-c*u,b=a*h-l*u,P=a*f-o*u;return t*(M*T-g*R+d*y)-n*(x*T-g*E+d*b)+s*(x*R-M*E+d*P)-r*(x*y-M*b+g*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],x=e[12],M=e[13],g=e[14],d=e[15],T=t*o-n*a,R=t*l-s*a,y=t*c-r*a,E=n*l-s*o,b=n*c-r*o,P=s*c-r*l,v=u*M-f*x,S=u*g-h*x,N=u*d-p*x,F=f*g-h*M,z=f*d-p*M,H=h*d-p*g,I=T*H-R*z+y*F+E*N-b*S+P*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return e[0]=(o*H-l*z+c*F)*V,e[1]=(s*z-n*H-r*F)*V,e[2]=(M*P-g*b+d*E)*V,e[3]=(h*b-f*P-p*E)*V,e[4]=(l*N-a*H-c*S)*V,e[5]=(t*H-s*N+r*S)*V,e[6]=(g*y-x*P-d*R)*V,e[7]=(u*P-h*y+p*R)*V,e[8]=(a*z-o*N+c*v)*V,e[9]=(n*N-t*z-r*v)*V,e[10]=(x*b-M*y+d*T)*V,e[11]=(f*y-u*b-p*T)*V,e[12]=(o*S-a*F-l*v)*V,e[13]=(t*F-n*S+s*v)*V,e[14]=(M*R-x*E-g*T)*V,e[15]=(u*E-f*R+h*T)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,x=r*f,M=a*u,g=a*f,d=o*f,T=l*c,R=l*u,y=l*f,E=n.x,b=n.y,P=n.z;return s[0]=(1-(M+d))*E,s[1]=(p+y)*E,s[2]=(x-R)*E,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(h+d))*b,s[6]=(g+T)*b,s[7]=0,s[8]=(x+R)*P,s[9]=(g-T)*P,s[10]=(1-(h+M))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=os.set(s[0],s[1],s[2]).length(),o=os.set(s[4],s[5],s[6]).length(),l=os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);let c=1/a,u=1/o,f=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,t.setFromRotationMatrix(Nn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=On,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s),x,M;if(l)x=r/(a-r),M=a*r/(a-r);else if(o===On)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===bs)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s),x,M;if(l)x=1/(a-r),M=a/(a-r);else if(o===On)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===bs)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},os=new B,Nn=new wt,Qu=new B(0,0,0),ed=new B(1,1,1),Si=new B,Ar=new B,Sn=new B,Sc=new wt,Ec=new $n,mi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},td=0,wc=new B,ls=new $n,ci=new wt,Rr=new B,Ys=new B,nd=new B,id=new $n,Tc=new B(1,0,0),Ac=new B(0,1,0),Rc=new B(0,0,1),Cc={type:"added"},sd={type:"removed"},cs={type:"childadded",child:null},Oo={type:"childremoved",child:null},pn=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new mi,n=new $n,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ze}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(Rc,e)}translateOnAxis(e,t){return wc.copy(e).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(Rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Ys,Rr,this.up):ci.lookAt(Rr,Ys,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(ci),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cc),cs.child=e,this.dispatchEvent(cs),cs.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sd),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cc),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new B(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yi=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},rd={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let g=t.getJointPose(M,n),d=this._getHandJoint(c,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Pl(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bo(a,r,e+1/3),this.g=Bo(a,r,e),this.b=Bo(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=Eh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return dt.workingToColorSpace(rn.copy(this),e),Math.round(ot(rn.r*255,0,255))*65536+Math.round(ot(rn.g*255,0,255))*256+Math.round(ot(rn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=fn){dt.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Cr);let n=js(Ei.h,Cr.h,t),s=js(Ei.s,Cr.s,t),r=js(Ei.l,Cr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Ke;Ke.NAMES=Eh;var Ln=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new B,hi=new B,zo=new B,ui=new B,hs=new B,us=new B,Pc=new B,ko=new B,Ho=new B,Vo=new B,Go=new Tt,Wo=new Tt,Xo=new Tt,Ri=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Un.subVectors(s,t),hi.subVectors(n,t),zo.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(hi),l=Un.dot(zo),c=hi.dot(hi),u=hi.dot(zo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Wo,r.y),a.addScaledVector(Xo,r.z),a}static isFrontFacing(e,t,n,s){return Un.subVectors(n,t),hi.subVectors(e,t),Un.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Un.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;hs.subVectors(s,n),us.subVectors(r,n),ko.subVectors(e,n);let l=hs.dot(ko),c=us.dot(ko);if(l<=0&&c<=0)return t.copy(n);Ho.subVectors(e,s);let u=hs.dot(Ho),f=us.dot(Ho);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(hs,a);Vo.subVectors(e,r);let p=hs.dot(Vo),x=us.dot(Vo);if(x>=0&&p<=x)return t.copy(r);let M=p*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(us,o);let g=u*x-p*f;if(g<=0&&f-u>=0&&p-x>=0)return Pc.subVectors(r,s),o=(f-u)/(f-u+(p-x)),t.copy(s).addScaledVector(Pc,o);let d=1/(g+M+h);return a=M*d,o=h*d,t.copy(n).addScaledVector(hs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ci=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Ir.subVectors(this.max,Zs),ds.subVectors(e.a,Zs),fs.subVectors(e.b,Zs),ps.subVectors(e.c,Zs),wi.subVectors(fs,ds),Ti.subVectors(ps,fs),Gi.subVectors(ds,ps);let t=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-Gi.z,Gi.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,Gi.z,0,-Gi.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-Gi.y,Gi.x,0];return!qo(t,ds,fs,ps,Ir)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,ds,fs,ps,Ir))?!1:(Lr.crossVectors(wi,Ti),t=[Lr.x,Lr.y,Lr.z],qo(t,ds,fs,ps,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new B,new B,new B,new B,new B,new B,new B,new B],Fn=new B,Pr=new Ci,ds=new B,fs=new B,ps=new B,wi=new B,Ti=new B,Gi=new B,Zs=new B,Ir=new B,Lr=new B,Wi=new B;function qo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wi.fromArray(i,r);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Vt=new B,Dr=new be,ad=0,In=class extends Zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ad++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_s(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ir=class extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sr=class extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ft=class extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}},od=new Ci,$s=new B,Yo=new B,Rs=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):od.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);let t=$s.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Yo)),this.expandByPoint($s.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ld=0,Pn=new wt,Zo=new pn,ms=new B,En=new Ci,Js=new Ci,$t=new B,on=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?sr:ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Js.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(En.min,Js.min),En.expandByPoint($t),$t.addVectors(En.max,Js.max),En.expandByPoint($t)):(En.expandByPoint(Js.min),En.expandByPoint(Js.max))}En.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$t.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(e,c),$t.add(ms)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new In(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new B,l[v]=new B;let c=new B,u=new B,f=new B,h=new be,p=new be,x=new be,M=new B,g=new B;function d(v,S,N){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,N),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,N),u.sub(c),f.sub(c),p.sub(h),x.sub(h);let F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(F),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(F),o[v].add(M),o[S].add(M),o[N].add(M),l[v].add(g),l[S].add(g),l[N].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let v=0,S=T.length;v<S;++v){let N=T[v],F=N.start,z=N.count;for(let H=F,I=F+z;H<I;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let R=new B,y=new B,E=new B,b=new B;function P(v){E.fromBufferAttribute(s,v),b.copy(E);let S=o[v];R.copy(S),R.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(b,S);let F=y.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,F)}for(let v=0,S=T.length;v<S;++v){let N=T[v],F=N.start,z=N.count;for(let H=F,I=F+z;H<I;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){let x=e.getX(h+0),M=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,x=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let d=0;d<u;d++)h[x++]=c[p++]}return new In(h,u,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $o=new B,cd=new B,hd=new Ze,wn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$o.subVectors(n,t).cross(cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($o),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hd.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ud=0,Pi=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Ns,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var fi=new B,Jo=new B,Nr=new B,Ur=new B,$i=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jo.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(Jo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),o=Ur.dot(this.direction),l=-Ur.dot(Nr),c=Ur.lengthSq(),u=Math.abs(1-a*a),f,h,p,x;if(u>0)if(f=a*l-o,h=a*o-l,x=r*u,f>=0)if(h>=-x)if(h<=x){let M=1/u;f*=M,h*=M,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Jo).addScaledVector(Nr,h),p}intersectSphere(e,t){if(e.radius<0)return null;fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,p=e.z-a.z,x=t.x-a.x,M=t.y-a.y,g=t.z-a.z,d=n.x-a.x,T=n.y-a.y,R=n.z-a.z,y=Math.abs(l),E=Math.abs(c),b=Math.abs(u),P,v,S,N,F,z,H,I,V,Z,Y,re;if(y>=E&&y>=b?(S=l,z=f,V=x,re=d,l>=0?(P=c,v=u,N=h,F=p,H=M,I=g,Z=T,Y=R):(P=u,v=c,N=p,F=h,H=g,I=M,Z=R,Y=T)):E>=b?(S=c,z=h,V=M,re=T,c>=0?(P=u,v=l,N=p,F=f,H=g,I=x,Z=R,Y=d):(P=l,v=u,N=f,F=p,H=x,I=g,Z=d,Y=R)):(S=u,z=p,V=g,re=R,u>=0?(P=l,v=c,N=f,F=h,H=x,I=M,Z=d,Y=T):(P=c,v=l,N=h,F=f,H=M,I=x,Z=T,Y=d)),S===0)return null;let q=P/S,Q=v/S,ae=1/S,Le=N-q*z,ne=F-Q*z,De=H-q*V,Ne=I-Q*V,it=Z-q*re,j=Y-Q*re,ie=it*Ne-j*De,Te=Le*j-ne*it,Fe=De*ne-Ne*Le;if(s){if(ie<0||Te<0||Fe<0)return null}else if((ie<0||Te<0||Fe<0)&&(ie>0||Te>0||Fe>0))return null;let ye=ie+Te+Fe;if(ye===0)return null;let ze=ae*(ie*z+Te*V+Fe*re);return(ye>0?ze<0:ze>0)?null:this.at(ze/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jn=class extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ic=new wt,Xi=new $i,Fr=new Rs,Lc=new B,Or=new B,Br=new B,zr=new B,Ko=new B,kr=new B,Dc=new B,Hr=new B,At=class extends pn{constructor(e=new on,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Ko.fromBufferAttribute(f,e),a?kr.addScaledVector(Ko,u):kr.addScaledVector(Ko.sub(t),u))}t.add(kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Xi.copy(e.ray).recast(e.near),!(Fr.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Fr,Lc)===null||Xi.origin.distanceToSquared(Lc)>(e.far-e.near)**2))&&(Ic.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(Ic),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){let g=h[x],d=a[g.materialIndex],T=Math.max(g.start,p.start),R=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,E=R;y<E;y+=3){let b=o.getX(y),P=o.getX(y+1),v=o.getX(y+2);s=Vr(this,d,e,n,c,u,f,b,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=x,d=M;g<d;g+=3){let T=o.getX(g),R=o.getX(g+1),y=o.getX(g+2);s=Vr(this,a,e,n,c,u,f,T,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){let g=h[x],d=a[g.materialIndex],T=Math.max(g.start,p.start),R=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,E=R;y<E;y+=3){let b=y,P=y+1,v=y+2;s=Vr(this,d,e,n,c,u,f,b,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=x,d=M;g<d;g+=3){let T=g,R=g+1,y=g+2;s=Vr(this,a,e,n,c,u,f,T,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function dd(i,e,t,n,s,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ei,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:i}}function Vr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Or),i.getVertexPosition(l,Br),i.getVertexPosition(c,zr);let u=dd(i,e,t,n,Or,Br,zr,Dc);if(u){let f=new B;Ri.getBarycoord(Dc,Or,Br,zr,f),s&&(u.uv=Ri.getInterpolatedAttribute(s,o,l,c,f,new be)),r&&(u.uv1=Ri.getInterpolatedAttribute(r,o,l,c,f,new be)),a&&(u.normal=Ri.getInterpolatedAttribute(a,o,l,c,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new B,materialIndex:0};Ri.getNormal(Or,Br,zr,h.normal),u.face=h,u.barycoord=f}return u}var Ji=class extends Mn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Lt,u=Lt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qi=new Rs,fd=new be(.5,.5),Gr=new B,Cs=class{constructor(e=new wn,t=new wn,n=new wn,s=new wn,r=new wn,a=new wn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],x=r[8],M=r[9],g=r[10],d=r[11],T=r[12],R=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-a,p-u,d-x,E-T).normalize(),s[1].setComponents(c+a,p+u,d+x,E+T).normalize(),s[2].setComponents(c+o,p+f,d+M,E+R).normalize(),s[3].setComponents(c-o,p-f,d-M,E-R).normalize(),n)s[4].setComponents(l,h,g,y).normalize(),s[5].setComponents(c-l,p-h,d-g,E-y).normalize();else if(s[4].setComponents(c-l,p-h,d-g,E-y).normalize(),t===On)s[5].setComponents(c+l,p+h,d+g,E+y).normalize();else if(t===bs)s[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);let t=fd.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var rr=class extends Mn{constructor(e=[],t=Ni,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Kn=class extends Mn{constructor(e,t,n=kn,s,r,a,o=Lt,l=Lt,c,u=qn,f=1){if(u!==qn&&u!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ws(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},oa=class extends Kn{constructor(e,t=kn,n=Ni,s,r,a=Lt,o=Lt,l,c=qn){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ar=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bn=class i extends on{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function x(M,g,d,T,R,y,E,b,P,v,S){let N=y/P,F=E/v,z=y/2,H=E/2,I=b/2,V=P+1,Z=v+1,Y=0,re=0,q=new B;for(let Q=0;Q<Z;Q++){let ae=Q*F-H;for(let Le=0;Le<V;Le++){let ne=Le*N-z;q[M]=ne*T,q[g]=ae*R,q[d]=I,c.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[d]=b>0?1:-1,u.push(q.x,q.y,q.z),f.push(Le/P),f.push(1-Q/v),Y+=1}}for(let Q=0;Q<v;Q++)for(let ae=0;ae<P;ae++){let Le=h+ae+V*Q,ne=h+ae+V*(Q+1),De=h+(ae+1)+V*(Q+1),Ne=h+(ae+1)+V*Q;l.push(Le,ne,Ne),l.push(ne,De,Ne),re+=6}o.addGroup(p,re,S),p+=re,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ki=class i extends on{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],p=[],x=0,M=[],g=n/2,d=0;T(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(p,2));function T(){let y=new B,E=new B,b=0,P=(t-e)/n;for(let v=0;v<=r;v++){let S=[],N=v/r,F=N*(t-e)+e;for(let z=0;z<=s;z++){let H=z/s,I=H*l+o,V=Math.sin(I),Z=Math.cos(I);E.x=F*V,E.y=-N*n+g,E.z=F*Z,f.push(E.x,E.y,E.z),y.set(V,P,Z).normalize(),h.push(y.x,y.y,y.z),p.push(H,1-N),S.push(x++)}M.push(S)}for(let v=0;v<s;v++)for(let S=0;S<r;S++){let N=M[S][v],F=M[S+1][v],z=M[S+1][v+1],H=M[S][v+1];(e>0||S!==0)&&(u.push(N,F,H),b+=3),(t>0||S!==r-1)&&(u.push(F,z,H),b+=3)}c.addGroup(d,b,0),d+=b}function R(y){let E=x,b=new be,P=new B,v=0,S=y===!0?e:t,N=y===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,g*N,0),h.push(0,N,0),p.push(.5,.5),x++;let F=x;for(let z=0;z<=s;z++){let I=z/s*l+o,V=Math.cos(I),Z=Math.sin(I);P.x=S*Z,P.y=g*N,P.z=S*V,f.push(P.x,P.y,P.z),h.push(0,N,0),b.x=V*.5+.5,b.y=Z*.5*N+.5,p.push(b.x,b.y),x++}for(let z=0;z<s;z++){let H=E+z,I=F+z;y===!0?u.push(I,I+1,H):u.push(I+1,I,H),v+=3}c.addGroup(d,v,y===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ps=class i extends on{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ot(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,f=new B,h=new be,p=new B,x=new B,M=new B,g=0,d=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:g=e[T+1].x-e[T].x,d=e[T+1].y-e[T].y,p.x=d*1,p.y=-g,p.z=d*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:g=e[T+1].x-e[T].x,d=e[T+1].y-e[T].y,p.x=d*1,p.y=-g,p.z=d*0,x.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(x)}for(let T=0;T<=t;T++){let R=n+T*u*s,y=Math.sin(R),E=Math.cos(R);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*y,f.y=e[b].y,f.z=e[b].x*E,a.push(f.x,f.y,f.z),h.x=T/t,h.y=b/(e.length-1),o.push(h.x,h.y);let P=l[3*b+0]*y,v=l[3*b+1],S=l[3*b+0]*E;c.push(P,v,S)}}for(let T=0;T<t;T++)for(let R=0;R<e.length-1;R++){let y=R+T*e.length,E=y,b=y+e.length,P=y+e.length+1,v=y+1;r.push(E,b,v),r.push(P,v,b)}this.setIndex(r),this.setAttribute("position",new Ft(a,3)),this.setAttribute("uv",new Ft(o,2)),this.setAttribute("normal",new Ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var jn=class i extends on{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,p=[],x=[],M=[],g=[];for(let d=0;d<u;d++){let T=d*h-a;for(let R=0;R<c;R++){let y=R*f-r;x.push(y,-T,0),M.push(0,0,1),g.push(R/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){let R=T+c*d,y=T+c*(d+1),E=T+1+c*(d+1),b=T+1+c*d;p.push(R,y,b),p.push(y,E,b)}this.setIndex(p),this.setAttribute("position",new Ft(x,3)),this.setAttribute("normal",new Ft(M,3)),this.setAttribute("uv",new Ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Qi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Nc(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Nc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=Qi(i[t]);for(let s in n)e[s]=n[s]}return e}function Nc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Il(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var wh={clone:Qi,merge:cn},md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=md,this.fragmentShader=gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},la=class extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Is=class extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ls=class extends Is{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ca=class extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ha=class extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function jo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ii=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends Ii{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tl,endingEnd:tl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nl:r=e,o=2*t-n;break;case il:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nl:a=e,l=2*n-t;break;case il:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),M=x*x,g=M*x,d=-h*g+2*h*M-h*x,T=(1+h)*g+(-1.5-2*h)*M+(-.5+h)*x+1,R=(-1-p)*g+(1.5+p)*M+.5*x,y=p*g-p*M;for(let E=0;E!==o;++E)r[E]=d*a[u+E]+T*a[c+E]+R*a[l+E]+y*a[f+E];return r}},da=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},fa=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pa=class extends Ii{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let x=(n-t)/(s-t),M=1-x;for(let g=0;g!==o;++g)r[g]=a[c+g]*M+a[l+g]*x;return r}let h=o*2,p=e-1;for(let x=0;x!==o;++x){let M=a[c+x],g=a[l+x],d=p*h+x*2,T=f[d],R=f[d+1],y=e*h+x*2,E=u[y],b=u[y+1],P=vd(n,t,T,E,s);r[x]=Th(P,M,R,b,g)}return r}};function Th(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function xd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function vd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Th(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=xd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),jo(e.settings)&&(n.settings={inTangents:gs(e.settings.inTangents,Array),outTangents:gs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case qr:t=this.InterpolantFactoryMethodSmooth;break;case el:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;jo(this.settings)&&(Uc(this.settings.inTangents,e),Uc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Du(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,h=f-n,p=f+n;for(let x=0;x!==n;++x){let M=t[f+x];if(M!==t[h+x]||M!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,jo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Uc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=ia;var Li=class extends Tn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Qs;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};ma.prototype.ValueTypeName="color";var ga=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};ga.prototype.ValueTypeName="number";var xa=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)$n.slerpFlat(r,0,a,c-o,a,c,l);return r}},or=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}};or.prototype.ValueTypeName="quaternion";or.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends Tn{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Qs;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};va.prototype.ValueTypeName="vector";var _a=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ah=new _a,ya=class{constructor(e){this.manager=e!==void 0?e:Ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ma=class extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Qo=new wt,Fc=new B,Oc=new B,ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fc),Oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Qo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===bs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wr=new B,Xr=new $n,Wn=new B,lr=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wr,Xr,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Wr,Xr,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new B,Bc=new be,zc=new be,an=class extends lr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,zc),t.subVectors(zc,Bc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Qn=class extends lr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sl=class extends ba{constructor(){super(new Qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends Ma{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new sl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var xs=-90,vs=1,Sa=class extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(xs,vs,e,t);s.layers=this.layers,this.add(s);let r=new an(xs,vs,e,t);r.layers=this.layers,this.add(r);let a=new an(xs,vs,e,t);a.layers=this.layers,this.add(a);let o=new an(xs,vs,e,t);o.layers=this.layers,this.add(o);let l=new an(xs,vs,e,t);l.layers=this.layers,this.add(l);let c=new an(xs,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ea=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ll="\\[\\]\\.:\\/",_d=new RegExp("["+Ll+"]","g"),Dl="[^"+Ll+"]",yd="[^"+Ll.replace("\\.","")+"]",Md=/((?:WC+[\/:])*)/.source.replace("WC",Dl),bd=/(WCOD+)?/.source.replace("WCOD",yd),Sd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl),Ed=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl),wd=new RegExp("^"+Md+bd+Sd+Ed+"$"),Td=["material","materials","bones","map"],rl=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_d,"")}static parseTrackName(e){let t=wd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Td.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=rl;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var px=new Float32Array(1);var kc=new wt,hr=class{constructor(e,t,n=0,s=1/0){this.ray=new $i(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kc),this}intersectObject(e,t=!0,n=[]){return al(e,this,n,t),n.sort(Hc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)al(e[s],this,n,t);return n.sort(Hc),n}};function Hc(i,e){return i.distance-e.distance}function al(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)al(r[a],e,t,!0)}}var ol=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Nl(i,e,t,n){let s=Ad(n);switch(t){case Tl:return i*e;case Os:return i*e/s.components*s.byteLength;case La:return i*e/s.components*s.byteLength;case Oi:return i*e*2/s.components*s.byteLength;case Da:return i*e*2/s.components*s.byteLength;case Al:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case Na:return i*e*4/s.components*s.byteLength;case gr:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vr:case _r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(i,16)*Math.max(e,8)/4;case Ua:case Oa:return Math.max(i,8)*Math.max(e,8)/2;case za:case ka:case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ha:case yr:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case so:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ro:case ao:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mr:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ad(i){switch(i){case Qt:case bl:return{byteLength:1,components:1};case Us:case Sl:case ln:return{byteLength:2,components:1};case Pa:case Ia:return{byteLength:2,components:4};case kn:case Ca:case An:return{byteLength:4,components:1};case El:case wl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $h(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cd(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){let x=f[h],M=f[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,f[h]=M)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){let M=f[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
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
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
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
#endif`,Wd=`#ifdef USE_BUMPMAP
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qd=`#define PI 3.141592653589793
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
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tf=`vec3 transformedNormal = objectNormal;
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
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
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
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
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
#endif`,Cf=`uniform sampler2D dfgLUT;
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
}`,Pf=`
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
#endif`,If=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hf=`#if defined( USE_POINTS_UV )
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
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gp=`float getShadowMask() {
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
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,zp=`#define DISTANCE
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
}`,kp=`#define DISTANCE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,Zp=`#define LAMBERT
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
}`,$p=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,Qp=`#define PHONG
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
}`,em=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,nm=`#define STANDARD
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
}`,im=`#define TOON
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
}`,sm=`#define TOON
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
}`,rm=`uniform float size;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 color;
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
}`,cm=`uniform float rotation;
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
}`,hm=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Pd,alphahash_pars_fragment:Id,alphamap_fragment:Ld,alphamap_pars_fragment:Dd,alphatest_fragment:Nd,alphatest_pars_fragment:Ud,aomap_fragment:Fd,aomap_pars_fragment:Od,batching_pars_vertex:Bd,batching_vertex:zd,begin_vertex:kd,beginnormal_vertex:Hd,bsdfs:Vd,iridescence_fragment:Gd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:Zd,color_fragment:$d,color_pars_fragment:Jd,color_pars_vertex:Kd,color_vertex:jd,common:Qd,cube_uv_reflection_fragment:ef,defaultnormal_vertex:tf,displacementmap_pars_vertex:nf,displacementmap_vertex:sf,emissivemap_fragment:rf,emissivemap_pars_fragment:af,colorspace_fragment:of,colorspace_pars_fragment:lf,envmap_fragment:cf,envmap_common_pars_fragment:hf,envmap_pars_fragment:uf,envmap_pars_vertex:df,envmap_physical_pars_fragment:Sf,envmap_vertex:ff,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:gf,fog_pars_fragment:xf,gradientmap_pars_fragment:vf,lightmap_pars_fragment:_f,lights_lambert_fragment:yf,lights_lambert_pars_fragment:Mf,lights_pars_begin:bf,lights_toon_fragment:Ef,lights_toon_pars_fragment:wf,lights_phong_fragment:Tf,lights_phong_pars_fragment:Af,lights_physical_fragment:Rf,lights_physical_pars_fragment:Cf,lights_fragment_begin:Pf,lights_fragment_maps:If,lights_fragment_end:Lf,lightprobes_pars_fragment:Df,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Of,map_fragment:Bf,map_pars_fragment:zf,map_particle_fragment:kf,map_particle_pars_fragment:Hf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:Wf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:Zf,normal_fragment_begin:$f,normal_fragment_maps:Jf,normal_pars_fragment:Kf,normal_pars_vertex:jf,normal_vertex:Qf,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:xp,skinning_pars_vertex:vp,skinning_vertex:_p,skinnormal_vertex:yp,specularmap_fragment:Mp,specularmap_pars_fragment:bp,tonemapping_fragment:Sp,tonemapping_pars_fragment:Ep,transmission_fragment:wp,transmission_pars_fragment:Tp,uv_pars_fragment:Ap,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Pp,background_vert:Ip,background_frag:Lp,backgroundCube_vert:Dp,backgroundCube_frag:Np,cube_vert:Up,cube_frag:Fp,depth_vert:Op,depth_frag:Bp,distance_vert:zp,distance_frag:kp,equirect_vert:Hp,equirect_frag:Vp,linedashed_vert:Gp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:Zp,meshmatcap_vert:$p,meshmatcap_frag:Jp,meshnormal_vert:Kp,meshnormal_frag:jp,meshphong_vert:Qp,meshphong_frag:em,meshphysical_vert:tm,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},Ee={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ii={basic:{uniforms:cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:cn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:cn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:cn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:cn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:cn([Ee.points,Ee.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:cn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:cn([Ee.common,Ee.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:cn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:cn([Ee.sprite,Ee.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:cn([Ee.common,Ee.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:cn([Ee.lights,Ee.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ii.physical={uniforms:cn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var mo={r:0,b:0,g:0},um=new wt,Jh=new Ze;Jh.set(-1,0,0,0,1,0,0,0,1);function dm(i,e,t,n,s,r){let a=new Ke(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let y=T.backgroundBlurriness>0;R=e.get(R,y)}return R}function x(T){let R=!1,y=p(T);y===null?g(a,o):y&&y.isColor&&(g(y,1),R=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(T,R){let y=p(R);y&&(y.isCubeTexture||y.mapping===pr)?(c===void 0&&(c=new At(new Bn(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Qi(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jh),c.material.toneMapped=dt.getTransfer(y.colorSpace)!==Mt,(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new At(new jn(2,2),new Jt({name:"BackgroundMaterial",uniforms:Qi(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=dt.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,R){T.getRGB(mo,Il(i)),t.buffers.color.setClear(mo.r,mo.g,mo.b,R,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,R=1){a.set(T),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(a,o)},render:x,addToRenderList:M,dispose:d}}function fm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(F,z,H,I,V){let Z=!1,Y=f(F,I,H,z);r!==Y&&(r=Y,c(r.object)),Z=p(F,I,H,V),Z&&x(F,I,H,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(F,z,H,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function f(F,z,H,I){let V=I.wireframe===!0,Z=n[z.id];Z===void 0&&(Z={},n[z.id]=Z);let Y=F.isInstancedMesh===!0?F.id:0,re=Z[Y];re===void 0&&(re={},Z[Y]=re);let q=re[H.id];q===void 0&&(q={},re[H.id]=q);let Q=q[V];return Q===void 0&&(Q=h(l()),q[V]=Q),Q}function h(F){let z=[],H=[],I=[];for(let V=0;V<t;V++)z[V]=0,H[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:I,object:F,attributes:{},index:null}}function p(F,z,H,I){let V=r.attributes,Z=z.attributes,Y=0,re=H.getAttributes();for(let q in re)if(re[q].location>=0){let ae=V[q],Le=Z[q];if(Le===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(Le=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(Le=F.instanceColor)),ae===void 0||ae.attribute!==Le||Le&&ae.data!==Le.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function x(F,z,H,I){let V={},Z=z.attributes,Y=0,re=H.getAttributes();for(let q in re)if(re[q].location>=0){let ae=Z[q];ae===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor));let Le={};Le.attribute=ae,ae&&ae.data&&(Le.data=ae.data),V[q]=Le,Y++}r.attributes=V,r.attributesNum=Y,r.index=I}function M(){let F=r.newAttributes;for(let z=0,H=F.length;z<H;z++)F[z]=0}function g(F){d(F,0)}function d(F,z){let H=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;H[F]=1,I[F]===0&&(i.enableVertexAttribArray(F),I[F]=1),V[F]!==z&&(i.vertexAttribDivisor(F,z),V[F]=z)}function T(){let F=r.newAttributes,z=r.enabledAttributes;for(let H=0,I=z.length;H<I;H++)z[H]!==F[H]&&(i.disableVertexAttribArray(H),z[H]=0)}function R(F,z,H,I,V,Z,Y){Y===!0?i.vertexAttribIPointer(F,z,H,V,Z):i.vertexAttribPointer(F,z,H,I,V,Z)}function y(F,z,H,I){M();let V=I.attributes,Z=H.getAttributes(),Y=z.defaultAttributeValues;for(let re in Z){let q=Z[re];if(q.location>=0){let Q=V[re];if(Q===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){let ae=Q.normalized,Le=Q.itemSize,ne=e.get(Q);if(ne===void 0)continue;let De=ne.buffer,Ne=ne.type,it=ne.bytesPerElement,j=Ne===i.INT||Ne===i.UNSIGNED_INT||Q.gpuType===Ca;if(Q.isInterleavedBufferAttribute){let ie=Q.data,Te=ie.stride,Fe=Q.offset;if(ie.isInstancedInterleavedBuffer){for(let ye=0;ye<q.locationSize;ye++)d(q.location+ye,ie.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ye=0;ye<q.locationSize;ye++)g(q.location+ye);i.bindBuffer(i.ARRAY_BUFFER,De);for(let ye=0;ye<q.locationSize;ye++)R(q.location+ye,Le/q.locationSize,Ne,ae,Te*it,(Fe+Le/q.locationSize*ye)*it,j)}else{if(Q.isInstancedBufferAttribute){for(let ie=0;ie<q.locationSize;ie++)d(q.location+ie,Q.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ie=0;ie<q.locationSize;ie++)g(q.location+ie);i.bindBuffer(i.ARRAY_BUFFER,De);for(let ie=0;ie<q.locationSize;ie++)R(q.location+ie,Le/q.locationSize,Ne,ae,Le*it,Le/q.locationSize*ie*it,j)}}else if(Y!==void 0){let ae=Y[re];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(q.location,ae);break;case 3:i.vertexAttrib3fv(q.location,ae);break;case 4:i.vertexAttrib4fv(q.location,ae);break;default:i.vertexAttrib1fv(q.location,ae)}}}}T()}function E(){S();for(let F in n){let z=n[F];for(let H in z){let I=z[H];for(let V in I){let Z=I[V];for(let Y in Z)u(Z[Y].object),delete Z[Y];delete I[V]}}delete n[F]}}function b(F){if(n[F.id]===void 0)return;let z=n[F.id];for(let H in z){let I=z[H];for(let V in I){let Z=I[V];for(let Y in Z)u(Z[Y].object),delete Z[Y];delete I[V]}}delete n[F.id]}function P(F){for(let z in n){let H=n[z];for(let I in H){let V=H[I];if(V[F.id]===void 0)continue;let Z=V[F.id];for(let Y in Z)u(Z[Y].object),delete Z[Y];delete V[F.id]}}}function v(F){for(let z in n){let H=n[z],I=F.isInstancedMesh===!0?F.id:0,V=H[I];if(V!==void 0){for(let Z in V){let Y=V[Z];for(let re in Y)u(Y[re].object),delete Y[re];delete V[Z]}delete H[I],Object.keys(H).length===0&&delete n[z]}}}function S(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:g,disableUnusedAttributes:T}}function pm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function mm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==gn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Qt&&P!==An&&!v&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:y,maxSamples:E,samples:b}}function gm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new wn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let x=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!s||x===null||x.length===0||r&&!g)r?u(null):c();else{let T=r?0:n,R=T*4,y=d.clippingState||null;l.value=y,y=u(x,h,R,p);for(let E=0;E!==R;++E)y[E]=t[E];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,x){let M=f!==null?f.length:0,g=null;if(M!==0){if(g=l.value,x!==!0||g===null){let d=p+M*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<d)&&(g=new Float32Array(d));for(let R=0,y=p;R!==M;++R,y+=4)a.copy(f[R]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}var ks=4,xm=6,vm=20,_m=256,br=new Qn,Rh=new Ke,Ul=null,Fl=0,Ol=0,Bl=!1,ym=new B,es=new B,Bi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=ym}=r;Ul=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Fl,Ol),this._renderer.xr.enabled=Bl,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:ln,format:gn,colorSpace:Yn,depthBuffer:!1},s=Ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mm(r)),this._blurMaterial=Sm(r,e,t),this._ggxMaterial=bm(r,e,t)}return s}_compileMaterial(e){let t=new At(new on,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,n,s,r){let l=new an(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Rh),f.toneMapping=zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new Bn,new Jn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,d=!1,T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,d=!0):(g.color.copy(Rh),d=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));let E=this._cubeSize;zs(s,y*E,R>2?E:0,E,E),f.setRenderTarget(s),d&&f.render(M,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ni||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,br)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:x}=this,M=this._sizeLods[n],g=3*M*(n>x-ks?n-x+ks:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,zs(r,g,d,3*M,2*M),s.setRenderTarget(r),s.render(o,br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,zs(e,g,d,3*M,2*M),s.setRenderTarget(e),s.render(o,br)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-ks?s-this._lodMax+ks:0),h=4*(this._cubeSize-u);zs(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,br)}};function Mm(i){let e=[],t=[],n=i,s=i-ks+1+xm;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,x=new Float32Array(p*h*f),M=new Float32Array(p*h*f);for(let d=0;d<f;d++){let T=d%3*2/3-1,R=d>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(y,p*h*d);for(let E=0;E<h;E++){let b=u[E*2]*2-1,P=u[E*2+1]*2-1;d===0?es.set(1,P,b):d===1?es.set(-b,1,-P):d===2?es.set(-b,P,1):d===3?es.set(-1,P,-b):d===4?es.set(-b,-1,P):es.set(b,P,-1),es.toArray(M,(d*h+E)*p)}}let g=new on;g.setAttribute("position",new In(x,p)),g.setAttribute("outputDirection",new In(M,p)),t.push(new At(g,null)),n>ks&&n--}return{lodMeshes:t,sizeLods:e}}function Ch(i,e,t){let n=new Gt(i,e,t);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bm(i,e,t){return new Jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_m,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_o(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Sm(i,e,t){return new Jt({name:"SphericalGaussianBlur",defines:{SAMPLES:vm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_o(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ph(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ih(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function _o(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xo=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new rr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:ti});r.uniforms.tEquirect.value=t;let a=new At(s,r),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Dt),new Sa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Em(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Ta||p===Aa)if(e.has(h)){let x=e.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let M=new xo(x.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,x=p===Ta||p===Aa,M=p===Ni||p===ji;if(x||M){let g=t.get(h),d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Bi(i)),g=x?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let T=h.image;return x&&T&&T.height>0||M&&T&&l(T)?(n===null&&(n=new Bi(i)),g=x?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,p){return p===Ta?h.mapping=Ni:p===Aa&&(h.mapping=ji),h}function l(h){let p=0,x=6;for(let M=0;M<x;M++)h[M]!==void 0&&p++;return p===x}function c(h){let p=h.target;p.removeEventListener("dispose",c);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function wm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Zi("WebGLRenderer: "+n+" extension not supported."),s}}}function Tm(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,x=f.attributes.position,M=0;if(x===void 0)return;if(p!==null){let T=p.array;M=p.version;for(let R=0,y=T.length;R<y;R+=3){let E=T[R+0],b=T[R+1],P=T[R+2];h.push(E,b,b,P,P,E)}}else{let T=x.array;M=x.version;for(let R=0,y=T.length/3-1;R<y;R+=3){let E=R+0,b=R+1,P=R+2;h.push(E,b,b,P,P,E)}}let g=new(x.count>=65535?sr:ir)(h,1);g.version=M;let d=r.get(f);d&&e.remove(d),r.set(f,g)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Am(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let M=0;for(let g=0;g<p;g++)M+=h[g];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Rm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,e,t){let n=new WeakMap,s=new Tt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],R=0;p===!0&&(R=1),x===!0&&(R=2),M===!0&&(R=3);let y=o.attributes.position.count*R,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*E*4*f),P=new nr(b,y,E,f);P.type=An,P.needsUpdate=!0;let v=R*4;for(let N=0;N<f;N++){let F=g[N],z=d[N],H=T[N],I=y*E*4*N;for(let V=0;V<F.count;V++){let Z=V*v;p===!0&&(s.fromBufferAttribute(F,V),b[I+Z+0]=s.x,b[I+Z+1]=s.y,b[I+Z+2]=s.z,b[I+Z+3]=0),x===!0&&(s.fromBufferAttribute(z,V),b[I+Z+4]=s.x,b[I+Z+5]=s.y,b[I+Z+6]=s.z,b[I+Z+7]=0),M===!0&&(s.fromBufferAttribute(H,V),b[I+Z+8]=s.x,b[I+Z+9]=s.y,b[I+Z+10]=s.z,b[I+Z+11]=H.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new be(y,E)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Pm(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Im={[ml]:"LINEAR_TONE_MAPPING",[gl]:"REINHARD_TONE_MAPPING",[xl]:"CINEON_TONE_MAPPING",[vl]:"ACES_FILMIC_TONE_MAPPING",[fr]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[_l]:"CUSTOM_TONE_MAPPING"};function Lm(i,e,t,n,s,r){let a=new Gt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new on;c.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ft([0,2,0,0,2,0],2));let u=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new At(c,u),h=new Qn(-1,1,1,-1,0,1),p=null,x=null,M=!1,g,d=null,T=[],R=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let b=0;b<T.length;b++){let P=T[b];P.setSize&&P.setSize(y,E)}},this.setEffects=function(y){T=y,R=T.length>0&&T[0].isRenderPass===!0;let E=a.width,b=a.height;T.length>0&&o===null&&(o=new Gt(E,b,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(E,b,{type:ln,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<T.length;P++){let v=T[P];v.setSize&&v.setSize(E,b)}},this.begin=function(y,E){if(M||y.toneMapping===zn&&T.length===0)return!1;if(d=E,E!==null){let b=E.width,P=E.height;(a.width!==b||a.height!==P)&&this.setSize(b,P)}return R===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=zn,!0},this.hasRenderPass=function(){return R},this.end=function(y,E){y.toneMapping=g,M=!0;let b=a,P=o;for(let v=0;v<T.length;v++){let S=T[v];S.enabled!==!1&&(S.render(y,P,b,E),S.needsSwap!==!1&&(b=P,P=P===o?l:o))}if(p!==y.outputColorSpace||x!==y.toneMapping){p=y.outputColorSpace,x=y.toneMapping,u.defines={},dt.getTransfer(p)===Mt&&(u.defines.SRGB_TRANSFER="");let v=Im[x];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(d),y.render(f,h),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Kh=new Mn,Hl=new Kn(1,1),jh=new nr,Qh=new aa,eu=new rr,Lh=[],Dh=[],Nh=new Float32Array(16),Uh=new Float32Array(9),Fh=new Float32Array(4);function Vs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yo(i,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function Om(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),Yt(t,n)}}function Bm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),Yt(t,n)}}function zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Nh.set(n),i.uniformMatrix4fv(this.addr,!1,Nh),Yt(t,n)}}function km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Zm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hl.compareFunction=t.isReversedDepthBuffer()?po:fo,r=Hl):r=Kh,t.setTexture2D(e||r,s)}function $m(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qh,s)}function Jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||eu,s)}function Km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jh,s)}function jm(i){switch(i){case 5126:return Dm;case 35664:return Nm;case 35665:return Um;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return km;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Km}}function Qm(i,e){i.uniform1fv(this.addr,e)}function e0(i,e){let t=Vs(e,this.size,2);i.uniform2fv(this.addr,t)}function t0(i,e){let t=Vs(e,this.size,3);i.uniform3fv(this.addr,t)}function n0(i,e){let t=Vs(e,this.size,4);i.uniform4fv(this.addr,t)}function i0(i,e){let t=Vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s0(i,e){let t=Vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function r0(i,e){let t=Vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function a0(i,e){i.uniform1iv(this.addr,e)}function o0(i,e){i.uniform2iv(this.addr,e)}function l0(i,e){i.uniform3iv(this.addr,e)}function c0(i,e){i.uniform4iv(this.addr,e)}function h0(i,e){i.uniform1uiv(this.addr,e)}function u0(i,e){i.uniform2uiv(this.addr,e)}function d0(i,e){i.uniform3uiv(this.addr,e)}function f0(i,e){i.uniform4uiv(this.addr,e)}function p0(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Hl:a=Kh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function m0(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qh,r[a])}function g0(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||eu,r[a])}function x0(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||jh,r[a])}function v0(i){switch(i){case 5126:return Qm;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return x0}}var Vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jm(t.type)}},Gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v0(t.type)}},Wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},zl=/(\w+)(\])?(\[|\.)?/g;function Oh(i,e){i.seq.push(e),i.map[e.id]=e}function _0(i,e,t){let n=i.name,s=n.length;for(zl.lastIndex=0;;){let r=zl.exec(n),a=zl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Oh(t,c===void 0?new Vl(o,i,e):new Gl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Wl(o),Oh(t,f)),t=f}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Bh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var y0=37297,M0=0;function b0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var zh=new Ze;function S0(i){dt._getMatrix(zh,dt.workingColorSpace,i);let e=`mat3( ${zh.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case er:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+b0(i.getShaderSource(e),o)}else return r}function E0(i,e){let t=S0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var w0={[ml]:"Linear",[gl]:"Reinhard",[xl]:"Cineon",[vl]:"ACESFilmic",[fr]:"AgX",[yl]:"Neutral",[_l]:"Custom"};function T0(i,e){let t=w0[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var go=new B;function A0(){dt.getLuminanceCoefficients(go);let i=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function C0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Er(i){return i!==""}function Hh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(i){return i.replace(I0,D0)}var L0=new Map;function D0(i,e){let t=nt[e];if(t===void 0){let n=L0.get(e);if(n!==void 0)t=nt[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xl(t)}var N0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(N0,U0)}function U0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var F0={[ur]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function O0(i){return F0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B0={[Ni]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE_UV"};function z0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":B0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var k0={[ji]:"ENVMAP_MODE_REFRACTION"};function H0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":k0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var V0={[pl]:"ENVMAP_BLENDING_MULTIPLY",[oh]:"ENVMAP_BLENDING_MIX",[lh]:"ENVMAP_BLENDING_ADD"};function G0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":V0[i.combine]||"ENVMAP_BLENDING_NONE"}function W0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function X0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=O0(t),c=z0(t),u=H0(t),f=G0(t),h=W0(t),p=R0(t),x=C0(r),M=s.createProgram(),g,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Er).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Er).join(`
`),d.length>0&&(d+=`
`)):(g=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),d=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?nt.tonemapping_pars_fragment:"",t.toneMapping!==zn?T0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,E0("linearToOutputTexel",t.outputColorSpace),A0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),a=Xl(a),a=Hh(a,t),a=Vh(a,t),o=Xl(o),o=Hh(o,t),o=Vh(o,t),a=Gh(a),o=Gh(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let R=T+g+a,y=T+d+o,E=Bh(s,s.VERTEX_SHADER,R),b=Bh(s,s.FRAGMENT_SHADER,y);s.attachShader(M,E),s.attachShader(M,b),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(F){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(M)||"",H=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(b)||"",V=z.trim(),Z=H.trim(),Y=I.trim(),re=!0,q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,b);else{let Q=kh(s,E,"vertex"),ae=kh(s,b,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+V+`
`+Q+`
`+ae)}else V!==""?We("WebGLProgram: Program Info Log:",V):(Z===""||Y==="")&&(q=!1);q&&(F.diagnostics={runnable:re,programLog:V,vertexShader:{log:Z,prefix:g},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(E),s.deleteShader(b),v=new Hs(s,M),S=P0(s,M)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(M,y0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=b,this}var q0=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yl(e),t.set(e,n)),n}},Yl=class{constructor(e){this.id=q0++,this.code=e,this.usedTimes=0}};function Y0(i){return i===Oi||i===yr||i===Mr}function Z0(i,e,t,n,s,r){let a=new Ts,o=new ql,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,S,N,F,z,H){let I=F.fog,V=z.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,re=e.get(v.envMap||Z,Y),q=re&&re.mapping===pr?re.image.height:null,Q=p[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Le=ae!==void 0?ae.length:0,ne=0;V.morphAttributes.position!==void 0&&(ne=1),V.morphAttributes.normal!==void 0&&(ne=2),V.morphAttributes.color!==void 0&&(ne=3);let De,Ne,it,j;if(Q){let ut=ii[Q];De=ut.vertexShader,Ne=ut.fragmentShader}else{De=v.vertexShader,Ne=v.fragmentShader;let ut=o.getVertexShaderStage(v),$e=o.getFragmentShaderStage(v);o.update(v,ut,$e),it=ut.id,j=$e.id}let ie=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Fe=z.isInstancedMesh===!0,ye=z.isBatchedMesh===!0,ze=!!v.map,bt=!!v.matcap,ke=!!re,st=!!v.aoMap,et=!!v.lightMap,Xe=!!v.bumpMap&&v.wireframe===!1,_t=!!v.normalMap,mt=!!v.displacementMap,kt=!!v.emissiveMap,gt=!!v.metalnessMap,St=!!v.roughnessMap,U=v.anisotropy>0,It=v.clearcoat>0,ft=v.dispersion>0,A=v.retroreflectivity>0,m=v.iridescence>0,k=v.sheen>0,O=v.transmission>0,K=U&&!!v.anisotropyMap,ue=It&&!!v.clearcoatMap,pe=It&&!!v.clearcoatNormalMap,X=It&&!!v.clearcoatRoughnessMap,ee=m&&!!v.iridescenceMap,_e=m&&!!v.iridescenceThicknessMap,Pe=k&&!!v.sheenColorMap,Me=k&&!!v.sheenRoughnessMap,fe=!!v.specularMap,Re=!!v.specularColorMap,Ue=!!v.specularIntensityMap,He=O&&!!v.transmissionMap,L=O&&!!v.thicknessMap,ve=!!v.gradientMap,te=!!v.alphaMap,xe=v.alphaTest>0,Se=!!v.alphaHash,oe=!!v.extensions,Ce=zn;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ce=i.toneMapping);let we={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:De,fragmentShader:Ne,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ye,batchingColor:ye&&z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&z.instanceColor!==null,instancingMorph:Fe&&z.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ze,matcap:bt,envMap:ke,envMapMode:ke&&re.mapping,envMapCubeUVHeight:q,aoMap:st,lightMap:et,bumpMap:Xe,normalMap:_t,displacementMap:mt,emissiveMap:kt,normalMapObjectSpace:_t&&v.normalMapType===uh,normalMapTangentSpace:_t&&v.normalMapType===uo,packedNormalMap:_t&&v.normalMapType===uo&&Y0(v.normalMap.format),metalnessMap:gt,roughnessMap:St,anisotropy:U,anisotropyMap:K,clearcoat:It,clearcoatMap:ue,clearcoatNormalMap:pe,clearcoatRoughnessMap:X,dispersion:ft,retroreflection:A,iridescence:m,iridescenceMap:ee,iridescenceThicknessMap:_e,sheen:k,sheenColorMap:Pe,sheenRoughnessMap:Me,specularMap:fe,specularColorMap:Re,specularIntensityMap:Ue,transmission:O,transmissionMap:He,thicknessMap:L,gradientMap:ve,opaque:v.transparent===!1&&v.blending===Ns&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:xe,alphaHash:Se,combine:v.combine,mapUv:ze&&x(v.map.channel),aoMapUv:st&&x(v.aoMap.channel),lightMapUv:et&&x(v.lightMap.channel),bumpMapUv:Xe&&x(v.bumpMap.channel),normalMapUv:_t&&x(v.normalMap.channel),displacementMapUv:mt&&x(v.displacementMap.channel),emissiveMapUv:kt&&x(v.emissiveMap.channel),metalnessMapUv:gt&&x(v.metalnessMap.channel),roughnessMapUv:St&&x(v.roughnessMap.channel),anisotropyMapUv:K&&x(v.anisotropyMap.channel),clearcoatMapUv:ue&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(v.sheenRoughnessMap.channel),specularMapUv:fe&&x(v.specularMap.channel),specularColorMapUv:Re&&x(v.specularColorMap.channel),specularIntensityMapUv:Ue&&x(v.specularIntensityMap.channel),transmissionMapUv:He&&x(v.transmissionMap.channel),thicknessMapUv:L&&x(v.thicknessMap.channel),alphaMapUv:te&&x(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_t||U),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(ze||te),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&_t===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Te,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:ne,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:ze&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===Mt,decodeVideoTextureEmissive:kt&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mn,flipSided:v.side===zt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:oe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&v.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(d(S,v),T(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function d(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function T(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){let S=p[v.type],N;if(S){let F=ii[S];N=wh.clone(F.uniforms)}else N=v.uniforms;return N}function y(v,S){let N=u.get(S);return N!==void 0?++N.usedTimes:(N=new X0(i,S,v,s),c.push(N),u.set(S,N)),N}function E(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:R,acquireProgram:y,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:P}}function $0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function J0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,M,g,d){let T=i[e];return T===void 0?(T={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:g,group:d},i[e]=T):(T.id=h.id,T.object=h,T.geometry=p,T.material=x,T.materialVariant=a(h),T.groupOrder=M,T.renderOrder=h.renderOrder,T.z=g,T.group=d),e++,T}function l(h,p,x,M,g,d,T){T.reversedDepth===!0&&(g=-g);let R=o(h,p,x,M,g,d);x.transmission>0?n.push(R):x.transparent===!0?s.push(R):t.push(R)}function c(h,p,x,M,g,d){let T=o(h,p,x,M,g,d);x.transmission>0?n.unshift(T):x.transparent===!0?s.unshift(T):t.unshift(T)}function u(h,p){t.length>1&&t.sort(h||J0),n.length>1&&n.sort(p||Xh),s.length>1&&s.sort(p||Xh)}function f(){for(let h=e,p=i.length;h<p;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function K0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new qh,i.set(n,[a])):s>=r.length?(a=new qh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function j0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ke};break;case"SpotLight":t={position:new B,direction:new B,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Q0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var eg=0;function tg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ng(i){let e=new j0,t=Q0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new wt,a=new wt;function o(c){let u=0,f=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let p=0,x=0,M=0,g=0,d=0,T=0,R=0,y=0,E=0,b=0,P=0,v=0,S=0,N=0;c.sort(tg);for(let z=0,H=c.length;z<H;z++){let I=c[z],V=I.color,Z=I.intensity,Y=I.distance,re=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Oi?re=I.shadow.map.texture:re=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=V.r*Z,f+=V.g*Z,h+=V.b*Z;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],Z);N++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,ae=t.get(I);ae.shadowIntensity=Q.intensity,ae.shadowBias=Q.bias,ae.shadowNormalBias=Q.normalBias,ae.shadowRadius=Q.radius,ae.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[x]=ae,n.sunShadowMap[x]=re;let Le=Q.getViewportCount();for(let ne=0;ne<Le;ne++)n.sunShadowMatrix[M+ne]=Q.getMatrix(ne),n.sunShadowCascade[M+ne]=Q._cascadeData[ne];M+=Le,x++}n.sun[p]=q,p++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,ae=t.get(I);ae.shadowIntensity=Q.intensity,ae.shadowBias=Q.bias,ae.shadowNormalBias=Q.normalBias,ae.shadowRadius=Q.radius,ae.shadowMapSize=Q.mapSize,n.directionalShadow[g]=ae,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=I.shadow.matrix,E++}n.directional[g]=q,g++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(V).multiplyScalar(Z),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[T]=q;let Q=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,Q.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[T]=Q.matrix,I.castShadow){let ae=t.get(I);ae.shadowIntensity=Q.intensity,ae.shadowBias=Q.bias,ae.shadowNormalBias=Q.normalBias,ae.shadowRadius=Q.radius,ae.shadowMapSize=Q.mapSize,n.spotShadow[T]=ae,n.spotShadowMap[T]=re,P++}T++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(V).multiplyScalar(Z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=q,R++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let Q=I.shadow,ae=t.get(I);ae.shadowIntensity=Q.intensity,ae.shadowBias=Q.bias,ae.shadowNormalBias=Q.normalBias,ae.shadowRadius=Q.radius,ae.shadowMapSize=Q.mapSize,ae.shadowCameraNear=Q.camera.near,ae.shadowCameraFar=Q.camera.far,n.pointShadow[d]=ae,n.pointShadowMap[d]=re,n.pointShadowMatrix[d]=I.shadow.matrix,b++}n.point[d]=q,d++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(Z),q.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[y]=q,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let F=n.hash;(F.sunLength!==p||F.directionalLength!==g||F.pointLength!==d||F.spotLength!==T||F.rectAreaLength!==R||F.hemiLength!==y||F.numSunShadows!==x||F.numDirectionalShadows!==E||F.numPointShadows!==b||F.numSpotShadows!==P||F.numSpotMaps!==v||F.numLightProbes!==N)&&(n.sun.length=p,n.directional.length=g,n.spot.length=T,n.rectArea.length=R,n.point.length=d,n.hemi.length=y,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+v-S,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=N,F.sunLength=p,F.directionalLength=g,F.pointLength=d,F.spotLength=T,F.rectAreaLength=R,F.hemiLength=y,F.numSunShadows=x,F.numDirectionalShadows=E,F.numPointShadows=b,F.numSpotShadows=P,F.numSpotMaps=v,F.numLightProbes=N,n.version=eg++)}function l(c,u){let f=0,h=0,p=0,x=0,M=0,g=0,d=u.matrixWorldInverse;for(let T=0,R=c.length;T<R;T++){let y=c[T];if(y.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),f++}else if(y.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),h++}else if(y.isSpotLight){let E=n.spot[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),x++}else if(y.isRectAreaLight){let E=n.rectArea[M];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let E=n.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:n}}function Yh(i){let e=new ng(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ig(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Yh(i),e.set(s,[o])):r>=a.length?(o=new Yh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
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
}`,ag=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],og=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Zh=new wt,Sr=new B,kl=new B;function lg(i,e,t){let n=new Cs,s=new be,r=new be,a=new Tt,o=new ca,l=new ha,c={},u=t.maxTextureSize,f={[ei]:zt,[zt]:ei,[mn]:mn},h=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:sg,fragmentShader:rg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let x=new on;x.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new At(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let d=this.type;this.render=function(b,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Wc&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur);let S=i.getRenderTarget(),N=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ti),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let H=d!==this.type;H&&P.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=b.length;I<V;I++){let Z=b[I],Y=Z.shadow;if(Y===void 0){We("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let re=Y.getFrameExtents();s.multiply(re),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,Y.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||H===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ds){if(Z.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Gt(s.x,s.y,{format:Oi,type:ln,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),Y.map.texture.name=Z.name+".shadowMap",Y.map.depthTexture=new Kn(s.x,s.y,An),Y.map.depthTexture.name=Z.name+".shadowMapDepth",Y.map.depthTexture.format=qn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Lt,Y.map.depthTexture.magFilter=Lt}else Z.isPointLight?(Y.map=new xo(s.x),Y.map.depthTexture=new oa(s.x,kn)):(Y.map=new Gt(s.x,s.y),Y.map.depthTexture=new Kn(s.x,s.y,kn)),Y.map.depthTexture.name=Z.name+".shadowMap",Y.map.depthTexture.format=qn,this.type===ur?(Y.map.depthTexture.compareFunction=q?po:fo,Y.map.depthTexture.minFilter=Dt,Y.map.depthTexture.magFilter=Dt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Lt,Y.map.depthTexture.magFilter=Lt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let Q=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Z.isPointLight!==!0&&Y.updateMatrices(Z,v);for(let ae=0;ae<Q;ae++){let Le=Y.getCamera(ae);if(Z.isPointLight){let ne=Y.camera,De=Y.matrix,Ne=Z.distance||ne.far;Ne!==ne.far&&(ne.far=Ne,ne.updateProjectionMatrix()),Sr.setFromMatrixPosition(Z.matrixWorld),ne.position.copy(Sr),kl.copy(ne.position),kl.add(ag[ae]),ne.up.copy(og[ae]),ne.lookAt(kl),ne.updateMatrixWorld(),De.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Zh.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Zh,ne.coordinateSystem,ne.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(Y.map),i.clear());let ne=Y.getViewport(ae);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),z.viewport(a)}n=Y.getFrustum(ae),y(P,v,Le,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Ds&&T(Y,v),Y.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(S,N,F)};function T(b,P){let v=e.update(M);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Gt(s.x,s.y,{format:Oi,type:ln}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(P,null,v,h,M,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(P,null,v,p,M,null)}function R(b,P,v,S){let N=null,F=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)N=F;else if(N=v.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=N.uuid,H=P.uuid,I=c[z];I===void 0&&(I={},c[z]=I);let V=I[H];V===void 0&&(V=N.clone(),I[H]=V,P.addEventListener("dispose",E)),N=V}if(N.visible=P.visible,N.wireframe=P.wireframe,S===Ds?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:f[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let z=i.properties.get(N);z.light=v}return N}function y(b,P,v,S,N){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===Ds)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let H=e.update(b),I=b.material;if(Array.isArray(I)){let V=H.groups;for(let Z=0,Y=V.length;Z<Y;Z++){let re=V[Z],q=I[re.materialIndex];if(q&&q.visible){let Q=R(b,q,S,N);b.onBeforeShadow(i,b,P,v,H,Q,re),i.renderBufferDirect(v,null,H,Q,b,re),b.onAfterShadow(i,b,P,v,H,Q,re)}}}else if(I.visible){let V=R(b,I,S,N);b.onBeforeShadow(i,b,P,v,H,V,null),i.renderBufferDirect(v,null,H,V,b,null),b.onAfterShadow(i,b,P,v,H,V,null)}}let z=b.children;for(let H=0,I=z.length;H<I;H++)y(z[H],P,v,S,N)}function E(b){b.target.removeEventListener("dispose",E);for(let v in c){let S=c[v],N=b.target.uuid;N in S&&(S[N].dispose(),delete S[N])}}}function cg(i,e){function t(){let L=!1,ve=new Tt,te=null,xe=new Tt(0,0,0,0);return{setMask:function(Se){te!==Se&&!L&&(i.colorMask(Se,Se,Se,Se),te=Se)},setLocked:function(Se){L=Se},setClear:function(Se,oe,Ce,we,ut){ut===!0&&(Se*=we,oe*=we,Ce*=we),ve.set(Se,oe,Ce,we),xe.equals(ve)===!1&&(i.clearColor(Se,oe,Ce,we),xe.copy(ve))},reset:function(){L=!1,te=null,xe.set(-1,0,0,0)}}}function n(){let L=!1,ve=!1,te=null,xe=null,Se=null;return{setReversed:function(oe){if(ve!==oe){let Ce=e.get("EXT_clip_control");oe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ve=oe;let we=Se;Se=null,this.setClear(we)}},getReversed:function(){return ve},setTest:function(oe){oe?ie(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(oe){te!==oe&&!L&&(i.depthMask(oe),te=oe)},setFunc:function(oe){if(ve&&(oe=Sh[oe]),xe!==oe){switch(oe){case Zr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case Jr:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case Kr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case Qr:i.depthFunc(i.GREATER);break;case ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=oe}},setLocked:function(oe){L=oe},setClear:function(oe){Se!==oe&&(Se=oe,ve&&(oe=1-oe),i.clearDepth(oe))},reset:function(){L=!1,te=null,xe=null,Se=null,ve=!1}}}function s(){let L=!1,ve=null,te=null,xe=null,Se=null,oe=null,Ce=null,we=null,ut=null;return{setTest:function($e){L||($e?ie(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function($e){ve!==$e&&!L&&(i.stencilMask($e),ve=$e)},setFunc:function($e,Zt,Ot){(te!==$e||xe!==Zt||Se!==Ot)&&(i.stencilFunc($e,Zt,Ot),te=$e,xe=Zt,Se=Ot)},setOp:function($e,Zt,Ot){(oe!==$e||Ce!==Zt||we!==Ot)&&(i.stencilOp($e,Zt,Ot),oe=$e,Ce=Zt,we=Ot)},setLocked:function($e){L=$e},setClear:function($e){ut!==$e&&(i.clearStencil($e),ut=$e)},reset:function(){L=!1,ve=null,te=null,xe=null,Se=null,oe=null,Ce=null,we=null,ut=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,x=[],M=null,g=!1,d=null,T=null,R=null,y=null,E=null,b=null,P=null,v=new Ke(0,0,0),S=0,N=!1,F=null,z=null,H=null,I=null,V=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,re=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=re>=2);let Q=null,ae={},Le=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),De=new Tt().fromArray(Le),Ne=new Tt().fromArray(ne);function it(L,ve,te,xe){let Se=new Uint8Array(4),oe=i.createTexture();i.bindTexture(L,oe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<te;Ce++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(ve+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return oe}let j={};j[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Ms),Xe(!1),_t(ll),ie(i.CULL_FACE),st(ti);function ie(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Te(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Fe(L,ve){return h[L]!==ve?(i.bindFramebuffer(L,ve),h[L]=ve,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function ye(L,ve){let te=x,xe=!1;if(L){te=p.get(ve),te===void 0&&(te=[],p.set(ve,te));let Se=L.textures;if(te.length!==Se.length||te[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ce=Se.length;oe<Ce;oe++)te[oe]=i.COLOR_ATTACHMENT0+oe;te.length=Se.length,xe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,xe=!0);xe&&i.drawBuffers(te)}function ze(L){return M!==L?(i.useProgram(L),M=L,!0):!1}let bt={[gi]:i.FUNC_ADD,[Xc]:i.FUNC_SUBTRACT,[qc]:i.FUNC_REVERSE_SUBTRACT};bt[Yc]=i.MIN,bt[Zc]=i.MAX;let ke={[$c]:i.ZERO,[dr]:i.ONE,[Jc]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[nh]:i.SRC_ALPHA_SATURATE,[eh]:i.DST_COLOR,[jc]:i.DST_ALPHA,[Kc]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[th]:i.ONE_MINUS_DST_COLOR,[Qc]:i.ONE_MINUS_DST_ALPHA,[ih]:i.CONSTANT_COLOR,[sh]:i.ONE_MINUS_CONSTANT_COLOR,[rh]:i.CONSTANT_ALPHA,[ah]:i.ONE_MINUS_CONSTANT_ALPHA};function st(L,ve,te,xe,Se,oe,Ce,we,ut,$e){if(L===ti){g===!0&&(Te(i.BLEND),g=!1);return}if(g===!1&&(ie(i.BLEND),g=!0),L!==wa){if(L!==d||$e!==N){if((T!==gi||E!==gi)&&(i.blendEquation(i.FUNC_ADD),T=gi,E=gi),$e)switch(L){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.ONE,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",L);break}else switch(L){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hl:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",L);break}R=null,y=null,b=null,P=null,v.set(0,0,0),S=0,d=L,N=$e}return}Se=Se||ve,oe=oe||te,Ce=Ce||xe,(ve!==T||Se!==E)&&(i.blendEquationSeparate(bt[ve],bt[Se]),T=ve,E=Se),(te!==R||xe!==y||oe!==b||Ce!==P)&&(i.blendFuncSeparate(ke[te],ke[xe],ke[oe],ke[Ce]),R=te,y=xe,b=oe,P=Ce),(we.equals(v)===!1||ut!==S)&&(i.blendColor(we.r,we.g,we.b,ut),v.copy(we),S=ut),d=L,N=!1}function et(L,ve){L.side===mn?Te(i.CULL_FACE):ie(i.CULL_FACE);let te=L.side===zt;ve&&(te=!te),Xe(te),L.blending===Ns&&L.transparent===!1?st(ti):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),kt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(L){F!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),F=L)}function _t(L){L!==Vc?(ie(i.CULL_FACE),L!==z&&(L===ll?i.cullFace(i.BACK):L===Gc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),z=L}function mt(L){L!==H&&(Y&&i.lineWidth(L),H=L)}function kt(L,ve,te){L?(ie(i.POLYGON_OFFSET_FILL),(I!==ve||V!==te)&&(I=ve,V=te,a.getReversed()&&(ve=-ve),i.polygonOffset(ve,te))):Te(i.POLYGON_OFFSET_FILL)}function gt(L){L?ie(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function St(L){L===void 0&&(L=i.TEXTURE0+Z-1),Q!==L&&(i.activeTexture(L),Q=L)}function U(L,ve,te){te===void 0&&(Q===null?te=i.TEXTURE0+Z-1:te=Q);let xe=ae[te];xe===void 0&&(xe={type:void 0,texture:void 0},ae[te]=xe),(xe.type!==L||xe.texture!==ve)&&(Q!==te&&(i.activeTexture(te),Q=te),i.bindTexture(L,ve||j[L]),xe.type=L,xe.texture=ve)}function It(){let L=ae[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ft(){try{i.compressedTexImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function m(){try{i.texSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function k(){try{i.texSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function ue(){try{i.texStorage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function pe(){try{i.texStorage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function X(){try{i.texImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function ee(){try{i.texImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function _e(L){return f[L]!==void 0?f[L]:i.getParameter(L)}function Pe(L,ve){f[L]!==ve&&(i.pixelStorei(L,ve),f[L]=ve)}function Me(L){De.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),De.copy(L))}function fe(L){Ne.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ne.copy(L))}function Re(L,ve){let te=c.get(ve);te===void 0&&(te=new WeakMap,c.set(ve,te));let xe=te.get(L);xe===void 0&&(xe=i.getUniformBlockIndex(ve,L.name),te.set(L,xe))}function Ue(L,ve){let xe=c.get(ve).get(L);l.get(ve)!==xe&&(i.uniformBlockBinding(ve,xe,L.__bindingPointIndex),l.set(ve,xe))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Q=null,ae={},h={},p=new WeakMap,x=[],M=null,g=!1,d=null,T=null,R=null,y=null,E=null,b=null,P=null,v=new Ke(0,0,0),S=0,N=!1,F=null,z=null,H=null,I=null,V=null,De.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Te,bindFramebuffer:Fe,drawBuffers:ye,useProgram:ze,setBlending:st,setMaterial:et,setFlipSided:Xe,setCullFace:_t,setLineWidth:mt,setPolygonOffset:kt,setScissorTest:gt,activeTexture:St,bindTexture:U,unbindTexture:It,compressedTexImage2D:ft,compressedTexImage3D:A,texImage2D:X,texImage3D:ee,pixelStorei:Pe,getParameter:_e,updateUBOMapping:Re,uniformBlockBinding:Ue,texStorage2D:ue,texStorage3D:pe,texSubImage2D:m,texSubImage3D:k,compressedTexSubImage2D:O,compressedTexSubImage3D:K,scissor:Me,viewport:fe,reset:He}}function hg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap,f=new Set,h,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,m){return x?new OffscreenCanvas(A,m):tr("canvas")}function g(A,m,k){let O=1,K=ft(A);if((K.width>k||K.height>k)&&(O=k/Math.max(K.width,K.height)),O<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ue=Math.floor(O*K.width),pe=Math.floor(O*K.height);h===void 0&&(h=M(ue,pe));let X=m?M(ue,pe):h;return X.width=ue,X.height=pe,X.getContext("2d").drawImage(A,0,0,ue,pe),We("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ue+"x"+pe+")."),X}else return"data"in A&&We("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function d(A){return A.generateMipmaps}function T(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,m,k,O,K,ue=!1){if(A!==null){if(i[A]!==void 0)return i[A];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe;O&&(pe=e.get("EXT_texture_norm16"),pe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=m;if(m===i.RED&&(k===i.FLOAT&&(X=i.R32F),k===i.HALF_FLOAT&&(X=i.R16F),k===i.UNSIGNED_BYTE&&(X=i.R8),k===i.UNSIGNED_SHORT&&pe&&(X=pe.R16_EXT),k===i.SHORT&&pe&&(X=pe.R16_SNORM_EXT)),m===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(X=i.R8UI),k===i.UNSIGNED_SHORT&&(X=i.R16UI),k===i.UNSIGNED_INT&&(X=i.R32UI),k===i.BYTE&&(X=i.R8I),k===i.SHORT&&(X=i.R16I),k===i.INT&&(X=i.R32I)),m===i.RG&&(k===i.FLOAT&&(X=i.RG32F),k===i.HALF_FLOAT&&(X=i.RG16F),k===i.UNSIGNED_BYTE&&(X=i.RG8),k===i.UNSIGNED_SHORT&&pe&&(X=pe.RG16_EXT),k===i.SHORT&&pe&&(X=pe.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(X=i.RG8UI),k===i.UNSIGNED_SHORT&&(X=i.RG16UI),k===i.UNSIGNED_INT&&(X=i.RG32UI),k===i.BYTE&&(X=i.RG8I),k===i.SHORT&&(X=i.RG16I),k===i.INT&&(X=i.RG32I)),m===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(X=i.RGB8UI),k===i.UNSIGNED_SHORT&&(X=i.RGB16UI),k===i.UNSIGNED_INT&&(X=i.RGB32UI),k===i.BYTE&&(X=i.RGB8I),k===i.SHORT&&(X=i.RGB16I),k===i.INT&&(X=i.RGB32I)),m===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),k===i.UNSIGNED_INT&&(X=i.RGBA32UI),k===i.BYTE&&(X=i.RGBA8I),k===i.SHORT&&(X=i.RGBA16I),k===i.INT&&(X=i.RGBA32I)),m===i.RGB&&(k===i.UNSIGNED_SHORT&&pe&&(X=pe.RGB16_EXT),k===i.SHORT&&pe&&(X=pe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),m===i.RGBA){let ee=ue?er:dt.getTransfer(K);k===i.FLOAT&&(X=i.RGBA32F),k===i.HALF_FLOAT&&(X=i.RGBA16F),k===i.UNSIGNED_BYTE&&(X=ee===Mt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&pe&&(X=pe.RGBA16_EXT),k===i.SHORT&&pe&&(X=pe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(A,m){let k;return A?m===null||m===kn||m===Fs?k=i.DEPTH24_STENCIL8:m===An?k=i.DEPTH32F_STENCIL8:m===Us&&(k=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===kn||m===Fs?k=i.DEPTH_COMPONENT24:m===An?k=i.DEPTH_COMPONENT32F:m===Us&&(k=i.DEPTH_COMPONENT16),k}function b(A,m){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==Lt&&A.minFilter!==Dt?Math.log2(Math.max(m.width,m.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?m.mipmaps.length:1}function P(A){let m=A.target;m.removeEventListener("dispose",P),S(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&f.delete(m)}function v(A){let m=A.target;m.removeEventListener("dispose",v),F(m)}function S(A){let m=n.get(A);if(m.__webglInit===void 0)return;let k=A.source,O=p.get(k);if(O){let K=O[m.__cacheKey];K.usedTimes--,K.usedTimes===0&&N(A),Object.keys(O).length===0&&p.delete(k)}n.remove(A)}function N(A){let m=n.get(A);i.deleteTexture(m.__webglTexture);let k=A.source,O=p.get(k);delete O[m.__cacheKey],a.memory.textures--}function F(A){let m=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(m.__webglFramebuffer[O]))for(let K=0;K<m.__webglFramebuffer[O].length;K++)i.deleteFramebuffer(m.__webglFramebuffer[O][K]);else i.deleteFramebuffer(m.__webglFramebuffer[O]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[O])}else{if(Array.isArray(m.__webglFramebuffer))for(let O=0;O<m.__webglFramebuffer.length;O++)i.deleteFramebuffer(m.__webglFramebuffer[O]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let O=0;O<m.__webglColorRenderbuffer.length;O++)m.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[O]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let k=A.textures;for(let O=0,K=k.length;O<K;O++){let ue=n.get(k[O]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(k[O])}n.remove(A)}let z=0;function H(){z=0}function I(){return z}function V(A){z=A}function Z(){let A=z;return A>=s.maxTextures&&We("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function Y(A){let m=[];return m.push(A.wrapS),m.push(A.wrapT),m.push(A.wrapR||0),m.push(A.magFilter),m.push(A.minFilter),m.push(A.anisotropy),m.push(A.internalFormat),m.push(A.format),m.push(A.type),m.push(A.generateMipmaps),m.push(A.premultiplyAlpha),m.push(A.flipY),m.push(A.unpackAlignment),m.push(A.colorSpace),m.join()}function re(A,m){let k=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let O=A.image;if(O===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(k,A,m);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+m)}function q(A,m){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Te(k,A,m);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+m)}function Q(A,m){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Te(k,A,m);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+m)}function ae(A,m){let k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Fe(k,A,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+m)}let Le={[ta]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},ne={[Lt]:i.NEAREST,[ch]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},De={[fh]:i.NEVER,[vh]:i.ALWAYS,[ph]:i.LESS,[fo]:i.LEQUAL,[mh]:i.EQUAL,[po]:i.GEQUAL,[gh]:i.GREATER,[xh]:i.NOTEQUAL};function Ne(A,m){if(m.type===An&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Dt||m.magFilter===Ra||m.magFilter===mr||m.magFilter===Ui||m.minFilter===Dt||m.minFilter===Ra||m.minFilter===mr||m.minFilter===Ui)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Le[m.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Le[m.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Le[m.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ne[m.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ne[m.minFilter]),m.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,De[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Lt||m.minFilter!==mr&&m.minFilter!==Ui||m.type===An&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function it(A,m){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,m.addEventListener("dispose",P));let O=m.source,K=p.get(O);K===void 0&&(K={},p.set(O,K));let ue=Y(m);if(ue!==A.__cacheKey){K[ue]===void 0&&(K[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[ue].usedTimes++;let pe=K[A.__cacheKey];pe!==void 0&&(K[A.__cacheKey].usedTimes--,pe.usedTimes===0&&N(m)),A.__cacheKey=ue,A.__webglTexture=K[ue].texture}return k}function j(A,m,k){return Math.floor(Math.floor(A/k)/m)}function ie(A,m,k,O){let ue=A.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,k,O,m.data);else{ue.sort((Pe,Me)=>Pe.start-Me.start);let pe=0;for(let Pe=1;Pe<ue.length;Pe++){let Me=ue[pe],fe=ue[Pe],Re=Me.start+Me.count,Ue=j(fe.start,m.width,4),He=j(Me.start,m.width,4);fe.start<=Re+1&&Ue===He&&j(fe.start+fe.count-1,m.width,4)===Ue?Me.count=Math.max(Me.count,fe.start+fe.count-Me.start):(++pe,ue[pe]=fe)}ue.length=pe+1;let X=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let Pe=0,Me=ue.length;Pe<Me;Pe++){let fe=ue[Pe],Re=Math.floor(fe.start/4),Ue=Math.ceil(fe.count/4),He=Re%m.width,L=Math.floor(Re/m.width),ve=Ue,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,He,L,ve,te,k,O,m.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,X),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function Te(A,m,k){let O=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(O=i.TEXTURE_3D);let K=it(A,m),ue=m.source;t.bindTexture(O,A.__webglTexture,i.TEXTURE0+k);let pe=n.get(ue);if(ue.version!==pe.__version||K===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let te=dt.getPrimaries(dt.workingColorSpace),xe=m.colorSpace===xi?null:dt.getPrimaries(m.colorSpace),Se=m.colorSpace===xi||te===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let ee=g(m.image,!1,s.maxTextureSize);ee=It(m,ee);let _e=r.convert(m.format,m.colorSpace),Pe=r.convert(m.type),Me=y(m.internalFormat,_e,Pe,m.normalized,m.colorSpace,m.isVideoTexture);Ne(O,m);let fe,Re=m.mipmaps,Ue=m.isVideoTexture!==!0,He=pe.__version===void 0||K===!0,L=ue.dataReady,ve=b(m,ee);if(m.isDepthTexture)Me=E(m.format===Fi,m.type),He&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,_e,Pe,null));else if(m.isDataTexture)if(Re.length>0){Ue&&He&&t.texStorage2D(i.TEXTURE_2D,ve,Me,Re[0].width,Re[0].height);for(let te=0,xe=Re.length;te<xe;te++)fe=Re[te],Ue?L&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe.width,fe.height,_e,Pe,fe.data):t.texImage2D(i.TEXTURE_2D,te,Me,fe.width,fe.height,0,_e,Pe,fe.data);m.generateMipmaps=!1}else Ue?(He&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ee.width,ee.height),L&&ie(m,ee,_e,Pe)):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,_e,Pe,ee.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ue&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,Re[0].width,Re[0].height,ee.depth);for(let te=0,xe=Re.length;te<xe;te++)if(fe=Re[te],m.format!==gn)if(_e!==null)if(Ue){if(L)if(m.layerUpdates.size>0){let Se=Nl(fe.width,fe.height,m.format,m.type);for(let oe of m.layerUpdates){let Ce=fe.data.subarray(oe*Se/fe.data.BYTES_PER_ELEMENT,(oe+1)*Se/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,oe,fe.width,fe.height,1,_e,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ee.depth,_e,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Me,fe.width,fe.height,ee.depth,0,fe.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ee.depth,_e,Pe,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Me,fe.width,fe.height,ee.depth,0,_e,Pe,fe.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Ue&&He&&t.texStorage2D(i.TEXTURE_2D,ve,Me,Re[0].width,Re[0].height);for(let te=0,xe=Re.length;te<xe;te++)fe=Re[te],m.format!==gn?_e!==null?Ue?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,fe.width,fe.height,_e,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Me,fe.width,fe.height,0,fe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?L&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe.width,fe.height,_e,Pe,fe.data):t.texImage2D(i.TEXTURE_2D,te,Me,fe.width,fe.height,0,_e,Pe,fe.data)}else if(m.isDataArrayTexture)if(Ue){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,ee.width,ee.height,ee.depth),L)if(m.layerUpdates.size>0){let te=Nl(ee.width,ee.height,m.format,m.type);for(let xe of m.layerUpdates){let Se=ee.data.subarray(xe*te/ee.data.BYTES_PER_ELEMENT,(xe+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,ee.width,ee.height,1,_e,Pe,Se)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,_e,Pe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,_e,Pe,ee.data);else if(m.isData3DTexture)Ue?(He&&t.texStorage3D(i.TEXTURE_3D,ve,Me,ee.width,ee.height,ee.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,_e,Pe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,_e,Pe,ee.data);else if(m.isFramebufferTexture){if(He)if(Ue)t.texStorage2D(i.TEXTURE_2D,ve,Me,ee.width,ee.height);else{let te=ee.width,xe=ee.height;for(let Se=0;Se<ve;Se++)t.texImage2D(i.TEXTURE_2D,Se,Me,te,xe,0,_e,Pe,null),te>>=1,xe>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ee.parentNode!==te){te.appendChild(ee),f.add(m),te.onpaint=xe=>{let Se=xe.changedElements;for(let oe of f)Se.includes(oe.image)&&(oe.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let Se=i.RGBA,oe=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,oe,Ce,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ue&&He){let te=ft(Re[0]);t.texStorage2D(i.TEXTURE_2D,ve,Me,te.width,te.height)}for(let te=0,xe=Re.length;te<xe;te++)fe=Re[te],Ue?L&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,_e,Pe,fe):t.texImage2D(i.TEXTURE_2D,te,Me,_e,Pe,fe);m.generateMipmaps=!1}else if(Ue){if(He){let te=ft(ee);t.texStorage2D(i.TEXTURE_2D,ve,Me,te.width,te.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Pe,ee)}else t.texImage2D(i.TEXTURE_2D,0,Me,_e,Pe,ee);d(m)&&T(O),pe.__version=ue.version,m.onUpdate&&m.onUpdate(m)}A.__version=m.version}function Fe(A,m,k){if(m.image.length!==6)return;let O=it(A,m),K=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let ue=n.get(K);if(K.version!==ue.__version||O===!0){t.activeTexture(i.TEXTURE0+k);let pe=dt.getPrimaries(dt.workingColorSpace),X=m.colorSpace===xi?null:dt.getPrimaries(m.colorSpace),ee=m.colorSpace===xi||pe===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let _e=m.isCompressedTexture||m.image[0].isCompressedTexture,Pe=m.image[0]&&m.image[0].isDataTexture,Me=[];for(let oe=0;oe<6;oe++)!_e&&!Pe?Me[oe]=g(m.image[oe],!0,s.maxCubemapSize):Me[oe]=Pe?m.image[oe].image:m.image[oe],Me[oe]=It(m,Me[oe]);let fe=Me[0],Re=r.convert(m.format,m.colorSpace),Ue=r.convert(m.type),He=y(m.internalFormat,Re,Ue,m.normalized,m.colorSpace),L=m.isVideoTexture!==!0,ve=ue.__version===void 0||O===!0,te=K.dataReady,xe=b(m,fe);Ne(i.TEXTURE_CUBE_MAP,m);let Se;if(_e){L&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,He,fe.width,fe.height);for(let oe=0;oe<6;oe++){Se=Me[oe].mipmaps;for(let Ce=0;Ce<Se.length;Ce++){let we=Se[Ce];m.format!==gn?Re!==null?L?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,0,0,we.width,we.height,Re,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,He,we.width,we.height,0,we.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,0,0,we.width,we.height,Re,Ue,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,He,we.width,we.height,0,Re,Ue,we.data)}}}else{if(Se=m.mipmaps,L&&ve){Se.length>0&&xe++;let oe=ft(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,He,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Pe){L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Me[oe].width,Me[oe].height,Re,Ue,Me[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,Me[oe].width,Me[oe].height,0,Re,Ue,Me[oe].data);for(let Ce=0;Ce<Se.length;Ce++){let ut=Se[Ce].image[oe].image;L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,0,0,ut.width,ut.height,Re,Ue,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,He,ut.width,ut.height,0,Re,Ue,ut.data)}}else{L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Re,Ue,Me[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,Re,Ue,Me[oe]);for(let Ce=0;Ce<Se.length;Ce++){let we=Se[Ce];L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,0,0,Re,Ue,we.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,He,Re,Ue,we.image[oe])}}}d(m)&&T(i.TEXTURE_CUBE_MAP),ue.__version=K.version,m.onUpdate&&m.onUpdate(m)}A.__version=m.version}function ye(A,m,k,O,K,ue){let pe=r.convert(k.format,k.colorSpace),X=r.convert(k.type),ee=y(k.internalFormat,pe,X,k.normalized,k.colorSpace),_e=n.get(m),Pe=n.get(k);if(Pe.__renderTarget=m,!_e.__hasExternalTextures){let Me=Math.max(1,m.width>>ue),fe=Math.max(1,m.height>>ue);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ue,ee,Me,fe,m.depth,0,pe,X,null):t.texImage2D(K,ue,ee,Me,fe,0,pe,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),St(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,K,Pe.__webglTexture,0,gt(m)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,K,Pe.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(A,m,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),m.depthBuffer){let O=m.depthTexture,K=O&&O.isDepthTexture?O.type:null,ue=E(m.stencilBuffer,K),pe=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;St(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(m),ue,m.width,m.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(m),ue,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ue,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,A)}else{let O=m.textures;for(let K=0;K<O.length;K++){let ue=O[K],pe=r.convert(ue.format,ue.colorSpace),X=r.convert(ue.type),ee=y(ue.internalFormat,pe,X,ue.normalized,ue.colorSpace);St(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(m),ee,m.width,m.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(m),ee,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ee,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(A,m,k){let O=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(m.depthTexture);if(K.__renderTarget=m,(!K.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),O){if(K.__webglInit===void 0&&(K.__webglInit=!0,m.depthTexture.addEventListener("dispose",P)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,m.depthTexture);let _e=r.convert(m.depthTexture.format),Pe=r.convert(m.depthTexture.type),Me;m.depthTexture.format===qn?Me=i.DEPTH_COMPONENT24:m.depthTexture.format===Fi&&(Me=i.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Me,m.width,m.height,0,_e,Pe,null)}}else re(m.depthTexture,0);let ue=K.__webglTexture,pe=gt(m),X=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ee=m.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===qn)St(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,X,ue,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,X,ue,0);else if(m.depthTexture.format===Fi)St(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,X,ue,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,X,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(A){let m=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==A.depthTexture){let O=A.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),O){let K=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,O.removeEventListener("dispose",K)};O.addEventListener("dispose",K),m.__depthDisposeCallback=K}m.__boundDepthTexture=O}if(A.depthTexture&&!m.__autoAllocateDepthBuffer)if(k)for(let O=0;O<6;O++)bt(m.__webglFramebuffer[O],A,O);else{let O=A.texture.mipmaps;O&&O.length>0?bt(m.__webglFramebuffer[0],A,0):bt(m.__webglFramebuffer,A,0)}else if(k){m.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[O]),m.__webglDepthbuffer[O]===void 0)m.__webglDepthbuffer[O]=i.createRenderbuffer(),ze(m.__webglDepthbuffer[O],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=m.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ue)}}else{let O=A.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),ze(m.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(A,m,k){let O=n.get(A);m!==void 0&&ye(O.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ke(A)}function et(A){let m=A.texture,k=n.get(A),O=n.get(m);A.addEventListener("dispose",v);let K=A.textures,ue=A.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=m.version,a.memory.textures++),ue){k.__webglFramebuffer=[];for(let X=0;X<6;X++)if(m.mipmaps&&m.mipmaps.length>0){k.__webglFramebuffer[X]=[];for(let ee=0;ee<m.mipmaps.length;ee++)k.__webglFramebuffer[X][ee]=i.createFramebuffer()}else k.__webglFramebuffer[X]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){k.__webglFramebuffer=[];for(let X=0;X<m.mipmaps.length;X++)k.__webglFramebuffer[X]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(pe)for(let X=0,ee=K.length;X<ee;X++){let _e=n.get(K[X]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&St(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let X=0;X<K.length;X++){let ee=K[X];k.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[X]);let _e=r.convert(ee.format,ee.colorSpace),Pe=r.convert(ee.type),Me=y(ee.internalFormat,_e,Pe,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),fe=gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,k.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,m);for(let X=0;X<6;X++)if(m.mipmaps&&m.mipmaps.length>0)for(let ee=0;ee<m.mipmaps.length;ee++)ye(k.__webglFramebuffer[X][ee],A,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ee);else ye(k.__webglFramebuffer[X],A,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);d(m)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let X=0,ee=K.length;X<ee;X++){let _e=K[X],Pe=n.get(_e),Me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Pe.__webglTexture),Ne(Me,_e),ye(k.__webglFramebuffer,A,_e,i.COLOR_ATTACHMENT0+X,Me,0),d(_e)&&T(Me)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(X=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,O.__webglTexture),Ne(X,m),m.mipmaps&&m.mipmaps.length>0)for(let ee=0;ee<m.mipmaps.length;ee++)ye(k.__webglFramebuffer[ee],A,m,i.COLOR_ATTACHMENT0,X,ee);else ye(k.__webglFramebuffer,A,m,i.COLOR_ATTACHMENT0,X,0);d(m)&&T(X),t.unbindTexture()}A.depthBuffer&&ke(A)}function Xe(A){let m=A.textures;for(let k=0,O=m.length;k<O;k++){let K=m[k];if(d(K)){let ue=R(A),pe=n.get(K).__webglTexture;t.bindTexture(ue,pe),T(ue),t.unbindTexture()}}}let _t=[],mt=[];function kt(A){if(A.samples>0){if(St(A)===!1){let m=A.textures,k=A.width,O=A.height,K=i.COLOR_BUFFER_BIT,ue=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(A),X=m.length>1;if(X)for(let _e=0;_e<m.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let ee=A.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let _e=0;_e<m.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[_e]);let Pe=n.get(m[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,k,O,0,0,k,O,K,i.NEAREST),l===!0&&(_t.length=0,mt.length=0,_t.push(i.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(_t.push(ue),mt.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let _e=0;_e<m.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,pe.__webglColorRenderbuffer[_e]);let Pe=n.get(m[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let m=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function gt(A){return Math.min(s.maxSamples,A.samples)}function St(A){let m=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function U(A){let m=a.render.frame;u.get(A)!==m&&(u.set(A,m),A.update())}function It(A,m){let k=A.colorSpace,O=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Yn&&k!==xi&&(dt.getTransfer(k)===Mt?(O!==gn||K!==Qt)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",k)),m}function ft(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=I,this.setTextureUnits=V,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=ae,this.rebindTextures=st,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ug(i,e){function t(n,s=xi){let r,a=dt.getTransfer(s);if(n===Qt)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===El)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bl)return i.BYTE;if(n===Sl)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===Al)return i.RGB;if(n===gn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Os)return i.RED;if(n===La)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===gr||n===xr||n===vr||n===_r)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===ka||n===Ha||n===Va||n===Ga||n===yr||n===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===ka)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===yr)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===eo||n===to||n===no||n===io||n===so)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===ao||n===oo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ro)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lo||n===co||n===Mr||n===ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
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

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ar(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jt({vertexShader:dg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$l=class extends Zn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,x=null,M=typeof XRWebGLBinding<"u",g=new Zl,d={},T=t.getContextAttributes(),R=null,y=null,E=[],b=[],P=new be,v=null,S=null,N=new an;N.viewport=new Tt;let F=new an;F.viewport=new Tt;let z=[N,F],H=new Ea,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=E[j];return ie===void 0&&(ie=new As,E[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=E[j];return ie===void 0&&(ie=new As,E[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=E[j];return ie===void 0&&(ie=new As,E[j]=ie),ie.getHandSpace()};function Z(j){let ie=b.indexOf(j.inputSource);if(ie===-1)return;let Te=E[ie];Te!==void 0&&(Te.update(j.inputSource,j.frame,c||a),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",re);for(let j=0;j<E.length;j++){let ie=b[j];ie!==null&&(b[j]=null,E[j].disconnect(ie))}I=null,V=null,g.reset();for(let j in d)delete d[j];if(e.setRenderTarget(R),p=null,h=null,f=null,s=null,y=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),S!==null){let j=S.camera;j.fov=S.fov,j.zoom=S.zoom,j.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",re),T.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Fe=null,ye=null;T.depth&&(ye=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=T.stencil?Fi:qn,Fe=T.stencil?Fs:kn);let ze={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Gt(h.textureWidth,h.textureHeight,{format:gn,type:Qt,depthTexture:new Kn(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Te={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Gt(p.framebufferWidth,p.framebufferHeight,{format:gn,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(j){for(let ie=0;ie<j.removed.length;ie++){let Te=j.removed[ie],Fe=b.indexOf(Te);Fe>=0&&(b[Fe]=null,E[Fe].disconnect(Te))}for(let ie=0;ie<j.added.length;ie++){let Te=j.added[ie],Fe=b.indexOf(Te);if(Fe===-1){for(let ze=0;ze<E.length;ze++)if(ze>=b.length){b.push(Te),Fe=ze;break}else if(b[ze]===null){b[ze]=Te,Fe=ze;break}if(Fe===-1)break}let ye=E[Fe];ye&&ye.connect(Te)}}let q=new B,Q=new B;function ae(j,ie,Te){q.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(Te.matrixWorld);let Fe=q.distanceTo(Q),ye=ie.projectionMatrix.elements,ze=Te.projectionMatrix.elements,bt=ye[14]/(ye[10]-1),ke=ye[14]/(ye[10]+1),st=(ye[9]+1)/ye[5],et=(ye[9]-1)/ye[5],Xe=(ye[8]-1)/ye[0],_t=(ze[8]+1)/ze[0],mt=bt*Xe,kt=bt*_t,gt=Fe/(-Xe+_t),St=gt*-Xe;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(St),j.translateZ(gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let U=bt+gt,It=ke+gt,ft=mt-St,A=kt+(Fe-St),m=st*ke/It*U,k=et*ke/It*U;j.projectionMatrix.makePerspective(ft,A,m,k,U,It),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Le(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ie=j.near,Te=j.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),H.near=F.near=N.near=ie,H.far=F.far=N.far=Te,(I!==H.near||V!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,V=H.far),H.layers.mask=j.layers.mask|6,N.layers.mask=H.layers.mask&-5,F.layers.mask=H.layers.mask&-3;let Fe=j.parent,ye=H.cameras;Le(H,Fe);for(let ze=0;ze<ye.length;ze++)Le(ye[ze],Fe);ye.length===2?ae(H,N,F):H.projectionMatrix.copy(N.projectionMatrix),S===null&&j.isPerspectiveCamera&&(S={camera:j,fov:j.fov,zoom:j.zoom}),ne(j,H,Fe)};function ne(j,ie,Te){Te===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Es*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(j){return d[j]};let De=null;function Ne(j,ie){if(u=ie.getViewerPose(c||a),x=ie,u!==null){let Te=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Fe=!1;Te.length!==H.cameras.length&&(H.cameras.length=0,Fe=!0);for(let ke=0;ke<Te.length;ke++){let st=Te[ke],et=null;if(p!==null)et=p.getViewport(st);else{let _t=f.getViewSubImage(h,st);et=_t.viewport,ke===0&&(e.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(y))}let Xe=z[ke];Xe===void 0&&(Xe=new an,Xe.layers.enable(ke),Xe.viewport=new Tt,z[ke]=Xe),Xe.matrix.fromArray(st.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(st.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(et.x,et.y,et.width,et.height),ke===0&&(H.matrix.copy(Xe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Fe===!0&&H.cameras.push(Xe)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let ke=f.getDepthInformation(Te[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,s.renderState)}if(ye&&ye.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let ke=0;ke<Te.length;ke++){let st=Te[ke].camera;if(st){let et=d[st];et||(et=new ar,d[st]=et);let Xe=f.getCameraImage(st);et.sourceTexture=Xe}}}}for(let Te=0;Te<E.length;Te++){let Fe=b[Te],ye=E[Te];Fe!==null&&ye!==void 0&&ye.update(Fe,ie,c||a)}De&&De(j,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),x=null}let it=new $h;it.setAnimationLoop(Ne),this.setAnimationLoop=function(j){De=j},this.dispose=function(){}}},pg=new wt,tu=new Ze;tu.set(-1,0,0,0,1,0,0,0,1);function mg(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Il(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,T,R,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(r(g,d),x(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),M(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,T,R):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===zt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===zt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let T=e.get(d),R=T.envMap,y=T.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tu),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,T,R){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*T,g.scale.value=R*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,T){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){let T=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let b=E.program;n.uniformBlockBinding(y,b)}function c(y,E){let b=s[y.id];b===void 0&&(g(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",T));let P=E.program;n.updateUBOMapping(y,P);let v=e.render.frame;r[y.id]!==v&&(h(y),r[y.id]=v)}function u(y){let E=f();y.__bindingPointIndex=E;let b=i.createBuffer(),P=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let E=s[y.id],b=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,S=b.length;v<S;v++){let N=b[v];if(Array.isArray(N))for(let F=0,z=N.length;F<z;F++)p(N[F],v,F,P);else p(N,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,E,b,P){if(M(y,E,b,P)===!0){let v=y.__offset,S=y.value;if(Array.isArray(S)){let N=0;for(let F=0;F<S.length;F++){let z=S[F],H=d(z);x(z,y.__data,N),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(N+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(S,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function x(y,E,b){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,b)}function M(y,E,b,P){let v=y.value,S=E+"_"+b;if(P[S]===void 0)return typeof v=="number"||typeof v=="boolean"?P[S]=v:ArrayBuffer.isView(v)?P[S]=v.slice():P[S]=v.clone(),!0;{let N=P[S];if(typeof v=="number"||typeof v=="boolean"){if(N!==v)return P[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(N.equals(v)===!1)return N.copy(v),!0}}return!1}function g(y){let E=y.uniforms,b=0,P=16;for(let S=0,N=E.length;S<N;S++){let F=Array.isArray(E[S])?E[S]:[E[S]];for(let z=0,H=F.length;z<H;z++){let I=F[z],V=Array.isArray(I.value)?I.value:[I.value];for(let Z=0,Y=V.length;Z<Y;Z++){let re=V[Z],q=d(re),Q=b%P,ae=Q%q.boundary,Le=Q+ae;b+=ae,Le!==0&&P-Le<q.storage&&(b+=P-Le),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=q.storage}}}let v=b%P;return v>0&&(b+=P-v),y.__size=b,y.__cache={},this}function d(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):We("WebGLRenderer: Unsupported uniform value type.",y),E}function T(y){let E=y.target;E.removeEventListener("dispose",T);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function R(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var xg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function vg(){return ni===null&&(ni=new Ji(xg,16,16,Oi,ln),ni.name="DFG_LUT",ni.minFilter=Dt,ni.magFilter=Dt,ni.wrapS=Xn,ni.wrapT=Xn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var vo=class{constructor(e={}){let{canvas:t=yh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Qt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let M=p,g=new Set([Na,Da,La]),d=new Set([Qt,kn,Us,Fs,Pa,Ia]),T=new Uint32Array(4),R=new Int32Array(4),y=new B,E=null,b=null,P=[],v=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,F=!1,z=null,H=null,I=null,V=null;this._outputColorSpace=fn;let Z=0,Y=0,re=null,q=-1,Q=null,ae=new Tt,Le=new Tt,ne=null,De=new Ke(0),Ne=0,it=t.width,j=t.height,ie=1,Te=null,Fe=null,ye=new Tt(0,0,it,j),ze=new Tt(0,0,it,j),bt=!1,ke=new Cs,st=!1,et=!1,Xe=new wt,_t=new B,mt=new Tt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function St(){return re===null?ie:1}let U=n;function It(_,D){return t.getContext(_,D)}let ft,A,m,k,O,K,ue,pe,X,ee,_e,Pe,Me,fe,Re,Ue,He,L,ve,te,xe,Se,oe;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Zt,!1),U===null){let D="webgl2";if(U=It(D,_),U===null)throw It(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(_){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Zt,!1),qe("WebGLRenderer: "+_.message),_}function Ce(){ft=new wm(U),ft.init(),xe=new ug(U,ft),A=new mm(U,ft,e,xe),m=new cg(U,ft),A.reversedDepthBuffer&&h&&m.buffers.depth.setReversed(!0),H=U.createFramebuffer(),I=U.createFramebuffer(),V=U.createFramebuffer(),k=new Rm(U),O=new $0,K=new hg(U,ft,m,O,A,xe,k),ue=new Em(N),pe=new Cd(U),Se=new fm(U,pe),X=new Tm(U,pe,k,Se),ee=new Pm(U,X,pe,Se,k),L=new Cm(U,A,K),Re=new gm(O),_e=new Z0(N,ue,ft,A,Se,Re),Pe=new mg(N,O),Me=new K0,fe=new ig(ft),He=new dm(N,ue,m,ee,x,l),Ue=new lg(N,ee,A),oe=new gg(U,k,A,m),ve=new pm(U,ft,k),te=new Am(U,ft,k),k.programs=_e.programs,N.capabilities=A,N.extensions=ft,N.properties=O,N.renderLists=Me,N.shadowMap=Ue,N.state=m,N.info=k}M!==Qt&&(S=new Lm(M,t.width,t.height,o,s,r));let we=new $l(N,U);this.xr=we,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let _=ft.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ft.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(_){_!==void 0&&(ie=_,this.setSize(it,j,!1))},this.getSize=function(_){return _.set(it,j)},this.setSize=function(_,D,G=!0){if(we.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}it=_,j=D,t.width=Math.floor(_*ie),t.height=Math.floor(D*ie),G===!0&&(t.style.width=_+"px",t.style.height=D+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,_,D)},this.getDrawingBufferSize=function(_){return _.set(it*ie,j*ie).floor()},this.setDrawingBufferSize=function(_,D,G){it=_,j=D,ie=G,t.width=Math.floor(_*G),t.height=Math.floor(D*G),this.setViewport(0,0,_,D)},this.setEffects=function(_){if(M===Qt){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let D=0;D<_.length;D++)if(_[D].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(ae)},this.getViewport=function(_){return _.copy(ye)},this.setViewport=function(_,D,G,w){_.isVector4?ye.set(_.x,_.y,_.z,_.w):ye.set(_,D,G,w),m.viewport(ae.copy(ye).multiplyScalar(ie).round())},this.getScissor=function(_){return _.copy(ze)},this.setScissor=function(_,D,G,w){_.isVector4?ze.set(_.x,_.y,_.z,_.w):ze.set(_,D,G,w),m.scissor(Le.copy(ze).multiplyScalar(ie).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(_){m.setScissorTest(bt=_)},this.setOpaqueSort=function(_){Te=_},this.setTransparentSort=function(_){Fe=_},this.getClearColor=function(_){return _.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(_=!0,D=!0,G=!0){let w=0;if(_){let C=!1;if(re!==null){let $=re.texture.format;C=g.has($)}if(C){let $=re.texture.type,J=d.has($),se=He.getClearColor(),ce=He.getClearAlpha(),me=se.r,Ae=se.g,Ie=se.b;J?(T[0]=me,T[1]=Ae,T[2]=Ie,T[3]=ce,U.clearBufferuiv(U.COLOR,0,T)):(R[0]=me,R[1]=Ae,R[2]=Ie,R[3]=ce,U.clearBufferiv(U.COLOR,0,R))}else w|=U.COLOR_BUFFER_BIT}D&&(w|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(w|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w!==0&&U.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),z=_},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Zt,!1),He.dispose(),Me.dispose(),fe.dispose(),O.dispose(),ue.dispose(),ee.dispose(),Se.dispose(),oe.dispose(),_e.dispose(),we.dispose(),we.removeEventListener("sessionstart",Mi),we.removeEventListener("sessionend",bn),Xt.stop()};function ut(_){_.preventDefault(),Cl("WebGLRenderer: Context Lost."),F=!0}function $e(){Cl("WebGLRenderer: Context Restored."),F=!1;let _=k.autoReset,D=Ue.enabled,G=Ue.autoUpdate,w=Ue.needsUpdate,C=Ue.type;Ce(),k.autoReset=_,Ue.enabled=D,Ue.autoUpdate=G,Ue.needsUpdate=w,Ue.type=C}function Zt(_){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ot(_){let D=_.target;D.removeEventListener("dispose",Ot),vn(D)}function vn(_){ss(_),O.remove(_)}function ss(_){let D=O.get(_).programs;D!==void 0&&(D.forEach(function(G){_e.releaseProgram(G)}),_.isShaderMaterial&&_e.releaseShaderCache(_))}this.renderBufferDirect=function(_,D,G,w,C,$){D===null&&(D=kt);let J=C.isMesh&&C.matrixWorld.determinantAffine()<0,se=vt(_,D,G,w,C);m.setMaterial(w,J);let ce=G.index,me=1;if(w.wireframe===!0){if(ce=X.getWireframeAttribute(G),ce===void 0)return;me=2}let Ae=G.drawRange,Ie=G.attributes.position,de=Ae.start*me,Ve=(Ae.start+Ae.count)*me;$!==null&&(de=Math.max(de,$.start*me),Ve=Math.min(Ve,($.start+$.count)*me)),ce!==null?(de=Math.max(de,0),Ve=Math.min(Ve,ce.count)):Ie!=null&&(de=Math.max(de,0),Ve=Math.min(Ve,Ie.count));let pt=Ve-de;if(pt<0||pt===1/0)return;Se.setup(C,w,se,G,ce);let lt,ge=ve;if(ce!==null&&(lt=pe.get(ce),ge=te,ge.setIndex(lt)),C.isMesh)w.wireframe===!0?(m.setLineWidth(w.wireframeLinewidth*St()),ge.setMode(U.LINES)):ge.setMode(U.TRIANGLES);else if(C.isLine){let Ge=w.linewidth;Ge===void 0&&(Ge=1),m.setLineWidth(Ge*St()),C.isLineSegments?ge.setMode(U.LINES):C.isLineLoop?ge.setMode(U.LINE_LOOP):ge.setMode(U.LINE_STRIP)}else C.isPoints?ge.setMode(U.POINTS):C.isSprite&&ge.setMode(U.TRIANGLES);if(C.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))ge.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{let Ge=C._multiDrawStarts,le=C._multiDrawCounts,je=C._multiDrawCount,Be=ce?pe.get(ce).bytesPerElement:1,Qe=O.get(w).currentProgram.getUniforms();for(let yt=0;yt<je;yt++)Qe.setValue(U,"_gl_DrawID",yt),ge.render(Ge[yt]/Be,le[yt])}else if(C.isInstancedMesh)ge.renderInstances(de,pt,C.count);else if(G.isInstancedBufferGeometry){let Ge=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,le=Math.min(G.instanceCount,Ge);ge.renderInstances(de,pt,le)}else ge.render(de,pt)};function ai(_,D,G,w){z!==null&&_.isNodeMaterial&&z.setObject(w,_),st===!0&&Re.setState(_,G,!1),_.transparent===!0&&_.side===mn&&_.forceSinglePass===!1?(_.side=zt,_.needsUpdate=!0,Ye(_,D,w),_.side=ei,_.needsUpdate=!0,Ye(_,D,w),_.side=mn):Ye(_,D,w)}this.compile=function(_,D,G=null){G===null&&(G=_),z!==null&&z.renderStart(_,D,G),b=fe.get(G),b.init(D),v.push(b),G.traverseVisible(function(C){C.isLight&&C.layers.test(D.layers)&&(b.pushLight(C),C.castShadow&&b.pushShadow(C))}),_!==G&&_.traverseVisible(function(C){C.isLight&&C.layers.test(D.layers)&&(b.pushLight(C),C.castShadow&&b.pushShadow(C))}),b.setupLights(),z!==null&&z.updateLights(b.state.lightsArray),et=this.localClippingEnabled,st=Re.init(this.clippingPlanes,et),st===!0&&Re.setGlobalState(this.clippingPlanes,D),z!==null&&Ue.render(b.state.shadowsArray,G,D);let w=new Set;return _.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;let $=C.material;if($)if(Array.isArray($))for(let J=0;J<$.length;J++){let se=$[J];ai(se,G,D,C),w.add(se)}else ai($,G,D,C),w.add($)}),b=v.pop(),z!==null&&z.renderEnd(),w},this.compileAsync=function(_,D,G=null){let w=this.compile(_,D,G);return new Promise(C=>{function $(){if(w.forEach(function(J){let ce=O.get(J).currentProgram;(ce===void 0||ce.isReady())&&w.delete(J)}),w.size===0){C(_);return}setTimeout($,10)}ft.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let yi=null;function Je(_){yi&&yi(_)}function Mi(){Xt.stop()}function bn(){Xt.start()}let Xt=new $h;Xt.setAnimationLoop(Je),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(_){yi=_,we.setAnimationLoop(_),_===null?Xt.stop():Xt.start()},we.addEventListener("sessionstart",Mi),we.addEventListener("sessionend",bn),this.render=function(_,D){if(D!==void 0&&D.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(_,D);let G=we.enabled===!0&&we.isPresenting===!0,w=S!==null&&(re===null||G)&&S.begin(N,re);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(D),D=we.getCamera()),_.isScene===!0&&_.onBeforeRender(N,_,D,re),b=fe.get(_,v.length),b.init(D),b.state.textureUnits=K.getTextureUnits(),v.push(b),Xe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ke.setFromProjectionMatrix(Xe,On,D.reversedDepth),et=this.localClippingEnabled,st=Re.init(this.clippingPlanes,et),E=Me.get(_,P.length),E.init(),P.push(E),we.enabled===!0&&we.isPresenting===!0){let J=N.xr.getDepthSensingMesh();J!==null&&oi(J,D,-1/0,N.sortObjects)}oi(_,D,0,N.sortObjects),E.finish(),z!==null&&z.updateLights(b.state.lightsArray),N.sortObjects===!0&&E.sort(Te,Fe),gt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,gt&&He.addToRenderList(E,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Re.beginShadows();let C=b.state.shadowsArray;if(Ue.render(C,_,D),st===!0&&Re.endShadows(),(w&&S.hasRenderPass())===!1){let J=E.opaque,se=E.transmissive;if(b.setupLights(),D.isArrayCamera){let ce=D.cameras;if(se.length>0)for(let me=0,Ae=ce.length;me<Ae;me++){let Ie=ce[me];he(J,se,_,Ie)}gt&&He.render(_);for(let me=0,Ae=ce.length;me<Ae;me++){let Ie=ce[me];W(E,_,Ie,Ie.viewport)}}else se.length>0&&he(J,se,_,D),gt&&He.render(_),W(E,_,D)}re!==null&&Y===0&&(K.updateMultisampleRenderTarget(re),K.updateRenderTargetMipmap(re)),w&&S.end(N),_.isScene===!0&&_.onAfterRender(N,_,D),Se.resetDefaultState(),q=-1,Q=null,v.pop(),v.length>0?(b=v[v.length-1],K.setTextureUnits(b.state.textureUnits),st===!0&&Re.setGlobalState(N.clippingPlanes,b.state.camera)):b=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,z!==null&&z.renderEnd()};function oi(_,D,G,w){if(_.visible===!1)return;if(_.layers.test(D.layers)){if(_.isGroup)G=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(D);else if(_.isLightProbeGrid)b.pushLightProbeGrid(_);else if(_.isLight)b.pushLight(_),_.castShadow&&b.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(ke)){w&&mt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Xe);let J=ee.update(_),se=_.material;se.visible&&E.push(_,J,se,G,mt.z,null,D)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(ke))){let J=ee.update(_),se=_.material;if(w&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),mt.copy(_.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),mt.copy(J.boundingSphere.center)),mt.applyMatrix4(_.matrixWorld).applyMatrix4(Xe)),Array.isArray(se)){let ce=J.groups;for(let me=0,Ae=ce.length;me<Ae;me++){let Ie=ce[me],de=se[Ie.materialIndex];de&&de.visible&&E.push(_,J,de,G,mt.z,Ie,D)}}else se.visible&&E.push(_,J,se,G,mt.z,null,D)}}let $=_.children;for(let J=0,se=$.length;J<se;J++)oi($[J],D,G,w)}function W(_,D,G,w){let{opaque:C,transmissive:$,transparent:J}=_;b.setupLightsView(G),st===!0&&Re.setGlobalState(N.clippingPlanes,G),w&&m.viewport(ae.copy(w)),C.length>0&&Oe(C,D,G),$.length>0&&Oe($,D,G),J.length>0&&Oe(J,D,G),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function he(_,D,G,w){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[w.id]===void 0){let de=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[w.id]=new Gt(1,1,{generateMipmaps:!0,type:de?ln:Qt,minFilter:Ui,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let $=b.state.transmissionRenderTarget[w.id],J=w.viewport||ae;$.setSize(J.z*N.transmissionResolutionScale,J.w*N.transmissionResolutionScale);let se=N.getRenderTarget(),ce=N.getActiveCubeFace(),me=N.getActiveMipmapLevel();N.setRenderTarget($),N.getClearColor(De),Ne=N.getClearAlpha(),Ne<1&&N.setClearColor(16777215,.5),N.clear(),gt&&He.render(G);let Ae=N.toneMapping;N.toneMapping=zn;let Ie=w.viewport;if(w.viewport!==void 0&&(w.viewport=void 0),b.setupLightsView(w),st===!0&&Re.setGlobalState(N.clippingPlanes,w),Oe(_,G,w),K.updateMultisampleRenderTarget($),K.updateRenderTargetMipmap($),ft.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ve=0,pt=D.length;Ve<pt;Ve++){let lt=D[Ve],{object:ge,geometry:Ge,material:le,group:je}=lt;if(le.side===mn&&ge.layers.test(w.layers)){let Be=le.side;le.side=zt,le.needsUpdate=!0,tt(ge,G,w,Ge,le,je),le.side=Be,le.needsUpdate=!0,de=!0}}de===!0&&(K.updateMultisampleRenderTarget($),K.updateRenderTargetMipmap($))}N.setRenderTarget(se,ce,me),N.setClearColor(De,Ne),Ie!==void 0&&(w.viewport=Ie),N.toneMapping=Ae}function Oe(_,D,G){let w=D.isScene===!0?D.overrideMaterial:null;for(let C=0,$=_.length;C<$;C++){let J=_[C],{object:se,geometry:ce,group:me}=J,Ae=J.material;Ae.allowOverride===!0&&w!==null&&(Ae=w),se.layers.test(G.layers)&&tt(se,D,G,ce,Ae,me)}}function tt(_,D,G,w,C,$){z!==null&&C.isNodeMaterial&&z.setObject(_,C),_.onBeforeRender(N,D,G,w,C,$),_.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),C.onBeforeRender(N,D,G,w,_,$),C.transparent===!0&&C.side===mn&&C.forceSinglePass===!1?(C.side=zt,C.needsUpdate=!0,N.renderBufferDirect(G,D,w,C,_,$),C.side=ei,C.needsUpdate=!0,N.renderBufferDirect(G,D,w,C,_,$),C.side=mn):N.renderBufferDirect(G,D,w,C,_,$),_.onAfterRender(N,D,G,w,C,$)}function Ye(_,D,G){D.isScene!==!0&&(D=kt);let w=O.get(_),C=b.state.lights,$=b.state.shadowsArray,J=C.state.version,se=_e.getParameters(_,C.state,$,D,G,b.state.lightProbeGridArray),ce=_e.getProgramCacheKey(se),me=w.programs;w.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,w.fog=D.fog;let Ae=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;w.envMap=ue.get(_.envMap||w.environment,Ae),w.envMapRotation=w.environment!==null&&_.envMap===null?D.environmentRotation:_.envMapRotation,me===void 0&&(_.addEventListener("dispose",Ot),me=new Map,w.programs=me);let Ie=me.get(ce);if(Ie!==void 0){if(w.currentProgram===Ie&&w.lightsStateVersion===J)return rt(_,se),Ie}else se.uniforms=_e.getUniforms(_),z!==null&&_.isNodeMaterial&&z.build(_,G,se),_.onBeforeCompile(se,N),Ie=_e.acquireProgram(se,ce),me.set(ce,Ie),w.uniforms=se.uniforms;let de=w.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(de.clippingPlanes=Re.uniform),rt(_,se),w.needsLights=jt(_),w.lightsStateVersion=J,w.needsLights&&(de.ambientLightColor.value=C.state.ambient,de.lightProbe.value=C.state.probe,de.sunLights.value=C.state.sun,de.sunLightShadows.value=C.state.sunShadow,de.directionalLights.value=C.state.directional,de.directionalLightShadows.value=C.state.directionalShadow,de.spotLights.value=C.state.spot,de.spotLightShadows.value=C.state.spotShadow,de.rectAreaLights.value=C.state.rectArea,de.ltc_1.value=C.state.rectAreaLTC1,de.ltc_2.value=C.state.rectAreaLTC2,de.pointLights.value=C.state.point,de.pointLightShadows.value=C.state.pointShadow,de.hemisphereLights.value=C.state.hemi,de.sunShadowMatrix.value=C.state.sunShadowMatrix,de.sunShadowCascade.value=C.state.sunShadowCascade,de.directionalShadowMatrix.value=C.state.directionalShadowMatrix,de.spotLightMatrix.value=C.state.spotLightMatrix,de.spotLightMap.value=C.state.spotLightMap,de.pointShadowMatrix.value=C.state.pointShadowMatrix),w.lightProbeGrid=b.state.lightProbeGridArray.length>0,w.currentProgram=Ie,w.uniformsList=null,Ie}function Et(_){if(_.uniformsList===null){let D=_.currentProgram.getUniforms();_.uniformsList=Hs.seqWithValue(D.seq,_.uniforms)}return _.uniformsList}function rt(_,D){let G=O.get(_);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Nt(_,D){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let G=0,w=_.length;G<w;G++){let C=_[G];if(C.texture!==null&&C.boundingBox.containsPoint(y))return C}return null}function vt(_,D,G,w,C){D.isScene!==!0&&(D=kt),K.resetTextureUnits();let $=D.fog,J=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?D.environment:null,se=re===null?N.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:dt.workingColorSpace,ce=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,me=ue.get(w.envMap||J,ce),Ae=w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ie=!!G.attributes.tangent&&(!!w.normalMap||w.anisotropy>0),de=!!G.morphAttributes.position,Ve=!!G.morphAttributes.normal,pt=!!G.morphAttributes.color,lt=zn;w.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(lt=N.toneMapping);let ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ge=ge!==void 0?ge.length:0,le=O.get(w),je=b.state.lights;if(st===!0&&(et===!0||_!==Q)){let at=_===Q&&w.id===q;Re.setState(w,_,at)}let Be=!1;w.version===le.__version?(le.needsLights&&le.lightsStateVersion!==je.state.version||le.outputColorSpace!==se||C.isBatchedMesh&&le.batching===!1||!C.isBatchedMesh&&le.batching===!0||C.isBatchedMesh&&le.batchingColor===!0&&C._colorsTexture===null||C.isBatchedMesh&&le.batchingColor===!1&&C._colorsTexture!==null||C.isInstancedMesh&&le.instancing===!1||!C.isInstancedMesh&&le.instancing===!0||C.isSkinnedMesh&&le.skinning===!1||!C.isSkinnedMesh&&le.skinning===!0||C.isInstancedMesh&&le.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&le.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&le.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&le.instancingMorph===!1&&C.morphTexture!==null||le.envMap!==me||w.fog===!0&&le.fog!==$||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==Re.numPlanes||le.numIntersection!==Re.numIntersection)||le.vertexAlphas!==Ae||le.vertexTangents!==Ie||le.morphTargets!==de||le.morphNormals!==Ve||le.morphColors!==pt||le.toneMapping!==lt||le.morphTargetsCount!==Ge||!!le.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Be=!0):(Be=!0,le.__version=w.version);let Qe=le.currentProgram;Be===!0&&(Qe=Ye(w,D,C),z&&w.isNodeMaterial&&z.onUpdateProgram(w,Qe,le));let yt=!1,tn=!1,un=!1,xt=Qe.getUniforms(),Ct=le.uniforms;if(m.useProgram(Qe.program)&&(yt=!0,tn=!0,un=!0),w.id!==q&&(q=w.id,tn=!0),le.needsLights){let at=Nt(b.state.lightProbeGridArray,C);le.lightProbeGrid!==at&&(le.lightProbeGrid=at,tn=!0)}if(yt||Q!==_){m.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),xt.setValue(U,"projectionMatrix",_.projectionMatrix),xt.setValue(U,"viewMatrix",_.matrixWorldInverse);let nn=xt.map.cameraPosition;nn!==void 0&&nn.setValue(U,_t.setFromMatrixPosition(_.matrixWorld)),A.logarithmicDepthBuffer&&xt.setValue(U,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(w.isMeshPhongMaterial||w.isMeshToonMaterial||w.isMeshLambertMaterial||w.isMeshBasicMaterial||w.isMeshStandardMaterial||w.isShaderMaterial)&&xt.setValue(U,"isOrthographic",_.isOrthographicCamera===!0),Q!==_&&(Q=_,tn=!0,un=!0)}if(le.needsLights&&(je.state.sunShadowMap.length>0&&xt.setValue(U,"sunShadowMap",je.state.sunShadowMap,K),je.state.directionalShadowMap.length>0&&xt.setValue(U,"directionalShadowMap",je.state.directionalShadowMap,K),je.state.spotShadowMap.length>0&&xt.setValue(U,"spotShadowMap",je.state.spotShadowMap,K),je.state.pointShadowMap.length>0&&xt.setValue(U,"pointShadowMap",je.state.pointShadowMap,K)),C.isSkinnedMesh){xt.setOptional(U,C,"bindMatrix"),xt.setOptional(U,C,"bindMatrixInverse");let at=C.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),xt.setValue(U,"boneTexture",at.boneTexture,K))}C.isBatchedMesh&&(xt.setOptional(U,C,"batchingTexture"),xt.setValue(U,"batchingTexture",C._matricesTexture,K),xt.setOptional(U,C,"batchingIdTexture"),xt.setValue(U,"batchingIdTexture",C._indirectTexture,K),xt.setOptional(U,C,"batchingColorTexture"),C._colorsTexture!==null&&xt.setValue(U,"batchingColorTexture",C._colorsTexture,K));let Rn=G.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&L.update(C,G,Qe),(tn||le.receiveShadow!==C.receiveShadow)&&(le.receiveShadow=C.receiveShadow,xt.setValue(U,"receiveShadow",C.receiveShadow)),(w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial)&&w.envMap===null&&D.environment!==null&&(Ct.envMapIntensity.value=D.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=vg()),tn){if(xt.setValue(U,"toneMappingExposure",N.toneMappingExposure),le.needsLights&&hn(Ct,un),$&&w.fog===!0&&Pe.refreshFogUniforms(Ct,$),Pe.refreshMaterialUniforms(Ct,w,ie,j,b.state.transmissionRenderTarget[_.id]),le.needsLights&&le.lightProbeGrid){let at=le.lightProbeGrid;Ct.probesSH.value=at.texture,Ct.probesMin.value.copy(at.boundingBox.min),Ct.probesMax.value.copy(at.boundingBox.max),Ct.probesResolution.value.copy(at.resolution)}Hs.upload(U,Et(le),Ct,K)}if(w.isShaderMaterial&&w.uniformsNeedUpdate===!0&&(Hs.upload(U,Et(le),Ct,K),w.uniformsNeedUpdate=!1),w.isSpriteMaterial&&xt.setValue(U,"center",C.center),xt.setValue(U,"modelViewMatrix",C.modelViewMatrix),xt.setValue(U,"normalMatrix",C.normalMatrix),xt.setValue(U,"modelMatrix",C.matrixWorld),w.uniformsGroups!==void 0){let at=w.uniformsGroups;for(let nn=0,ct=at.length;nn<ct;nn++){let Ht=at[nn];oe.update(Ht,Qe),oe.bind(Ht,Qe)}}return Qe}function hn(_,D){_.ambientLightColor.needsUpdate=D,_.lightProbe.needsUpdate=D,_.sunLights.needsUpdate=D,_.sunLightShadows.needsUpdate=D,_.directionalLights.needsUpdate=D,_.directionalLightShadows.needsUpdate=D,_.pointLights.needsUpdate=D,_.pointLightShadows.needsUpdate=D,_.spotLights.needsUpdate=D,_.spotLightShadows.needsUpdate=D,_.rectAreaLights.needsUpdate=D,_.hemisphereLights.needsUpdate=D}function jt(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(_,D,G){let w=O.get(_);w.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,w.__autoAllocateDepthBuffer===!1&&(w.__useRenderToTexture=!1),O.get(_.texture).__webglTexture=D,O.get(_.depthTexture).__webglTexture=w.__autoAllocateDepthBuffer?void 0:G,w.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,D){let G=O.get(_);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(_,D=0,G=0){re=_,Z=D,Y=G;let w=null,C=!1,$=!1;if(_){let se=O.get(_);if(se.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(U.FRAMEBUFFER,se.__webglFramebuffer),ae.copy(_.viewport),Le.copy(_.scissor),ne=_.scissorTest,m.viewport(ae),m.scissor(Le),m.setScissorTest(ne),q=-1;return}else if(se.__webglFramebuffer===void 0)K.setupRenderTarget(_);else if(se.__hasExternalTextures)K.rebindTextures(_,O.get(_.texture).__webglTexture,O.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ae=_.depthTexture;if(se.__boundDepthTexture!==Ae){if(Ae!==null&&O.has(Ae)&&(_.width!==Ae.image.width||_.height!==Ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(_)}}let ce=_.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&($=!0);let me=O.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(me[D])?w=me[D][G]:w=me[D],C=!0):_.samples>0&&K.useMultisampledRTT(_)===!1?w=O.get(_).__webglMultisampledFramebuffer:Array.isArray(me)?w=me[G]:w=me,ae.copy(_.viewport),Le.copy(_.scissor),ne=_.scissorTest}else ae.copy(ye).multiplyScalar(ie).floor(),Le.copy(ze).multiplyScalar(ie).floor(),ne=bt;if(G!==0&&(w=H),m.bindFramebuffer(U.FRAMEBUFFER,w)&&m.drawBuffers(_,w),m.viewport(ae),m.scissor(Le),m.setScissorTest(ne),C){let se=O.get(_.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,se.__webglTexture,G)}else if($){let se=D;for(let ce=0;ce<_.textures.length;ce++){let me=O.get(_.textures[ce]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ce,me.__webglTexture,G,se)}}else if(_!==null&&G!==0){let se=O.get(_.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,se.__webglTexture,G)}q=-1};function _n(_){let D=O.get(_);return(D.__readFormat!==_.format||D.__readType!==_.type)&&(D.__readFormat=_.format,D.__readType=_.type,D.__formatReadable=A.textureFormatReadable(_.format),D.__typeReadable=A.textureTypeReadable(_.type)),D}this.readRenderTargetPixels=function(_,D,G,w,C,$,J,se=0){if(!(_&&_.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=O.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&J!==void 0&&(ce=ce[J]),ce){m.bindFramebuffer(U.FRAMEBUFFER,ce);try{let me=_.textures[se],Ae=me.format,Ie=me.type;_.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+se);let de=_n(me);if(de.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(de.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=_.width-w&&G>=0&&G<=_.height-C&&U.readPixels(D,G,w,C,xe.convert(Ae),xe.convert(Ie),$)}finally{let me=re!==null?O.get(re).__webglFramebuffer:null;m.bindFramebuffer(U.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(_,D,G,w,C,$,J,se=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=O.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&J!==void 0&&(ce=ce[J]),ce)if(D>=0&&D<=_.width-w&&G>=0&&G<=_.height-C){m.bindFramebuffer(U.FRAMEBUFFER,ce);let me=_.textures[se],Ae=me.format,Ie=me.type;_.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+se);let de=_n(me);if(de.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(de.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.bufferData(U.PIXEL_PACK_BUFFER,$.byteLength,U.STREAM_READ),U.readPixels(D,G,w,C,xe.convert(Ae),xe.convert(Ie),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let pt=re!==null?O.get(re).__webglFramebuffer:null;m.bindFramebuffer(U.FRAMEBUFFER,pt);let lt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await bh(U,lt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,$),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ve),U.deleteSync(lt),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,D=null,G=0){let w=Math.pow(2,-G),C=Math.floor(_.image.width*w),$=Math.floor(_.image.height*w),J=D!==null?D.x:0,se=D!==null?D.y:0;K.setTexture2D(_,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,J,se,C,$),m.unbindTexture()},this.copyTextureToTexture=function(_,D,G=null,w=null,C=0,$=0){let J,se,ce,me,Ae,Ie,de,Ve,pt,lt=_.isCompressedTexture?_.mipmaps[$]:_.image;if(G!==null)J=G.max.x-G.min.x,se=G.max.y-G.min.y,ce=G.isBox3?G.max.z-G.min.z:1,me=G.min.x,Ae=G.min.y,Ie=G.isBox3?G.min.z:0;else{let Ct=Math.pow(2,-C);J=Math.floor(lt.width*Ct),se=Math.floor(lt.height*Ct),_.isDataArrayTexture?ce=lt.depth:_.isData3DTexture?ce=Math.floor(lt.depth*Ct):ce=1,me=0,Ae=0,Ie=0}w!==null?(de=w.x,Ve=w.y,pt=w.z):(de=0,Ve=0,pt=0);let ge=xe.convert(D.format),Ge=xe.convert(D.type),le;D.isData3DTexture?(K.setTexture3D(D,0),le=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(K.setTexture2DArray(D,0),le=U.TEXTURE_2D_ARRAY):(K.setTexture2D(D,0),le=U.TEXTURE_2D),m.activeTexture(U.TEXTURE0),m.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),m.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),m.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let je=m.getParameter(U.UNPACK_ROW_LENGTH),Be=m.getParameter(U.UNPACK_IMAGE_HEIGHT),Qe=m.getParameter(U.UNPACK_SKIP_PIXELS),yt=m.getParameter(U.UNPACK_SKIP_ROWS),tn=m.getParameter(U.UNPACK_SKIP_IMAGES);m.pixelStorei(U.UNPACK_ROW_LENGTH,lt.width),m.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt.height),m.pixelStorei(U.UNPACK_SKIP_PIXELS,me),m.pixelStorei(U.UNPACK_SKIP_ROWS,Ae),m.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie);let un=_.isDataArrayTexture||_.isData3DTexture,xt=D.isDataArrayTexture||D.isData3DTexture;if(_.isDepthTexture){let Ct=O.get(_),Rn=O.get(D),at=O.get(Ct.__renderTarget),nn=O.get(Rn.__renderTarget);m.bindFramebuffer(U.READ_FRAMEBUFFER,at.__webglFramebuffer),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let ct=0;ct<ce;ct++)un&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,O.get(_).__webglTexture,C,Ie+ct),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,O.get(D).__webglTexture,$,pt+ct)),U.blitFramebuffer(me,Ae,J,se,de,Ve,J,se,U.DEPTH_BUFFER_BIT,U.NEAREST);m.bindFramebuffer(U.READ_FRAMEBUFFER,null),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(C!==0||_.isRenderTargetTexture||O.has(_)){let Ct=O.get(_),Rn=O.get(D);m.bindFramebuffer(U.READ_FRAMEBUFFER,I),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let at=0;at<ce;at++)un?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.__webglTexture,C,Ie+at):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ct.__webglTexture,C),xt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rn.__webglTexture,$,pt+at):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rn.__webglTexture,$),C!==0?U.blitFramebuffer(me,Ae,J,se,de,Ve,J,se,U.COLOR_BUFFER_BIT,U.NEAREST):xt?U.copyTexSubImage3D(le,$,de,Ve,pt+at,me,Ae,J,se):U.copyTexSubImage2D(le,$,de,Ve,me,Ae,J,se);m.bindFramebuffer(U.READ_FRAMEBUFFER,null),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xt?_.isDataTexture||_.isData3DTexture?U.texSubImage3D(le,$,de,Ve,pt,J,se,ce,ge,Ge,lt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(le,$,de,Ve,pt,J,se,ce,ge,lt.data):U.texSubImage3D(le,$,de,Ve,pt,J,se,ce,ge,Ge,lt):_.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,$,de,Ve,J,se,ge,Ge,lt.data):_.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,$,de,Ve,lt.width,lt.height,ge,lt.data):U.texSubImage2D(U.TEXTURE_2D,$,de,Ve,J,se,ge,Ge,lt);m.pixelStorei(U.UNPACK_ROW_LENGTH,je),m.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Be),m.pixelStorei(U.UNPACK_SKIP_PIXELS,Qe),m.pixelStorei(U.UNPACK_SKIP_ROWS,yt),m.pixelStorei(U.UNPACK_SKIP_IMAGES,tn),$===0&&D.generateMipmaps&&U.generateMipmap(le),m.unbindTexture()},this.initRenderTarget=function(_){O.get(_).__webglFramebuffer===void 0&&K.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?K.setTextureCube(_,0):_.isData3DTexture?K.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?K.setTexture2DArray(_,0):K.setTexture2D(_,0),m.unbindTexture()},this.resetState=function(){Z=0,Y=0,re=null,m.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var en=Math.PI/180,Mo=en*23.4397,wr={lat:55.676,lon:12.578},nu=i=>i.valueOf()/864e5-.5+2440588-2451545,Kl=(i,e)=>Math.atan2(Math.sin(i)*Math.cos(Mo)-Math.tan(e)*Math.sin(Mo),Math.cos(i)),jl=(i,e)=>Math.asin(Math.sin(e)*Math.cos(Mo)+Math.cos(e)*Math.sin(Mo)*Math.sin(i)),_g=(i,e)=>en*(280.16+360.9856235*i)-e,yg=i=>(i=Math.max(i,0),2967e-7/Math.tan(i+.00312536/(i+.08901179)));function iu(i,e,t){let n=-wr.lon*en,s=wr.lat*en,r=_g(i,n)-e,a=Math.asin(Math.sin(s)*Math.sin(t)+Math.cos(s)*Math.cos(t)*Math.cos(r));return a+=yg(a),{az:((Math.atan2(Math.sin(r),Math.cos(r)*Math.sin(s)-Math.tan(t)*Math.cos(s))/en+180)%360+360)%360,el:a/en}}function Ql(i){let e=nu(i),t=en*(357.5291+.98560028*e),n=en*(1.9148*Math.sin(t)+.02*Math.sin(2*t)+3e-4*Math.sin(3*t)),s=t+n+en*102.9372+Math.PI;return iu(e,Kl(s,0),jl(s,0))}function Mg(i){let e=en*(218.316+13.176396*i),t=en*(134.963+13.064993*i),n=en*(93.272+13.22935*i),s=e+en*6.289*Math.sin(t),r=en*5.128*Math.sin(n);return{ra:Kl(s,r),dec:jl(s,r),l:s,b:r}}function bg(i){let e=nu(i),t=Mg(e),n=en*(357.5291+.98560028*e),s=n+en*(1.9148*Math.sin(n)+.02*Math.sin(2*n)+3e-4*Math.sin(3*n))+en*102.9372+Math.PI,r=Kl(s,0),a=jl(s,0),o=Math.acos(Math.sin(a)*Math.sin(t.dec)+Math.cos(a)*Math.cos(t.dec)*Math.cos(r-t.ra)),l=Math.atan2(149598e3*Math.sin(o),385001-149598e3*Math.cos(o));return{...iu(e,t.ra,t.dec),lit:(1+Math.cos(l))/2}}function ec(i){let e=Ql(i),t=1-zi(-8,-1,e.el),n=zi(-12,-2,e.el)*(1-zi(-1,6,e.el)),r=((c,u)=>[1+(c[0]-1)*n+(u[0]-1)*t*(1-n),1+(c[1]-1)*n+(u[1]-1)*t*(1-n),1+(c[2]-1)*n+(u[2]-1)*t*(1-n)])([.55,.7,1.2],[.2,.23,.32]),a=zi(-4,8,e.el);if(e.el>-3){let c=zi(2,24,e.el),u=(6+9*c)*zi(-3,3,e.el);return{kind:e.el>-.83?"sun":"night",az:e.az,el:e.el,shadeEl:Math.max(e.el,1.6),color:[u,u*(.56+.38*c),u*(.34+.52*c)],day:a,night:t,sky:r}}let o=bg(i),l=(3.2+4*o.lit)*zi(0,5,o.el)*zi(-3,-8,e.el);return{kind:o.el>0?"moon":"night",az:o.az,el:o.el,shadeEl:Math.max(o.el,3),color:[l*.72,l*.82,l],day:a,night:t,sky:r}}function zi(i,e,t){let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)}var Gs={wind:4,from:240,cloud:.2,rain:0,temp:12},bo={clear:{wind:2,from:240,cloud:0,rain:0,temp:14},fair:Gs,cloudy:{wind:6,from:250,cloud:.7,rain:0,temp:11},overcast:{wind:5,from:230,cloud:1,rain:0,temp:9},rain:{wind:7,from:220,cloud:1,rain:2.4,temp:8},storm:{wind:17,from:260,cloud:.85,rain:4,temp:7}},su="pintable-weather",Sg=`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${wr.lat}&lon=${wr.lon}`,ki=null,Tr=null,tc=null;function Eg(i){let e=i?.properties?.timeseries??[],t=[];for(let n of e){let s=n.data?.instant?.details;if(!s)continue;let r=n.data.next_1_hours?.details?.precipitation_amount??(n.data.next_6_hours?.details?.precipitation_amount??0)/6;t.push({t:Date.parse(n.time),wind:s.wind_speed??Gs.wind,from:s.wind_from_direction??Gs.from,cloud:(s.cloud_area_fraction??20)/100,rain:r,temp:s.air_temperature??Gs.temp})}return t.filter(n=>Number.isFinite(n.t)).sort((n,s)=>n.t-s.t)}function ru(){if(typeof window>"u")return Promise.resolve();let i=new URLSearchParams(location.search).get("weather");if(i&&bo[i])return Tr=bo[i],Promise.resolve();try{let n=JSON.parse(localStorage.getItem(su)??"null");if(n&&n.until>Date.now()&&n.rows?.length)return ki=n.rows,tc="met",Promise.resolve()}catch{}let e=new AbortController,t=setTimeout(()=>e.abort(),6e3);return fetch(Sg,{signal:e.signal,credentials:"omit"}).then(async n=>{if(!n.ok)throw new Error(`weather ${n.status}`);let s=Eg(await n.json());if(!s.length)throw new Error("weather: empty");ki=s,tc="met";let r=Date.parse(n.headers.get("expires")??"")||Date.now()+30*6e4;try{localStorage.setItem(su,JSON.stringify({until:Math.max(r,Date.now()+10*6e4),rows:s}))}catch{}}).catch(()=>{}).finally(()=>clearTimeout(t))}var wg=(i,e,t)=>i+(((e-i)%360+540)%360-180)*t;function nc(i,e={...Gs}){if(Tr)return Object.assign(e,Tr);if(!ki?.length)return Object.assign(e,Gs);let t=i.valueOf(),n=0;for(;n<ki.length-1&&ki[n+1].t<=t;)n++;let s=ki[n],r=ki[Math.min(n+1,ki.length-1)],a=r.t>s.t?Math.min(1,Math.max(0,(t-s.t)/(r.t-s.t))):0;return e.wind=s.wind+(r.wind-s.wind)*a,e.from=wg(s.from,r.from,a),e.cloud=s.cloud+(r.cloud-s.cloud)*a,e.rain=s.rain+(r.rain-s.rain)*a,e.temp=s.temp+(r.temp-s.temp)*a,e}function au(i){Tr=i&&bo[i]?bo[i]:null}var ic=()=>Tr?"set":tc;function sc(i){let e=i.rain>=4?"heavy rain":i.rain>=.8?"rain":i.rain>=.1?"light rain":i.cloud>.87?"overcast":i.cloud>.55?"cloudy":i.cloud>.2?"fair":"clear";return i.wind>=8?`${e}, wind ${Math.round(i.wind)} m/s`:e}var Ws=typeof location>"u"||new URLSearchParams(location.search).get("pins")!=="coarse",So=Ws?823592:205892,ou=.285,lu=16;var xn=[{name:"Christiansborg",x:200.5,z:213.5,kind:"building",fact:"Finished 1928 \xB7 tower 106 m, the city's tallest",flood:1},{name:"B\xF8rsen",x:293,z:240,kind:"building",fact:"Built 1619\u20131640 \xB7 its 56 m dragon spire fell in the 2024 fire",flood:.9},{name:"Inderhavnen",x:330,z:300,kind:"water"},{name:"Holmens Kirke",x:278,z:192,kind:"building",fact:"An anchor forge of 1563 \xB7 a church since 1619",flood:1},{name:"Den Sorte Diamant",x:263,z:339,kind:"building",fact:"Schmidt Hammer Lassen, 1999",flood:.5},{name:"Christianshavn",x:432,z:352,kind:"district"},{name:"Slotsholmen",x:236,z:271,kind:"district"},{name:"Thorvaldsens Museum",x:149,z:192,kind:"building",fact:"Built 1838\u20131848 \xB7 M. G. Bindesb\xF8ll",flood:.8},{name:"Christians Kirke",x:379,z:377,kind:"building",fact:"Built 1754\u20131759 \xB7 tower 70 m",flood:1},{name:"Nikolaj",x:225,z:104,kind:"building",fact:"Spire raised 1909 \xB7 the city's third-tallest tower",flood:1},{name:"Det Kongelige Teater",x:346,z:79,kind:"building",fact:"Founded 1748 \xB7 this house built 1872\u20131874",flood:1},{name:"Nationalmuseet",x:63,z:288,kind:"building",fact:"The Prince's Mansion \xB7 a museum since 1892",flood:.6},{name:"Frederiksholms Kanal",x:146,z:318,kind:"water"},{name:"Gammel Strand",x:148,z:160,kind:"district"},{name:"B\xF8rsgraven",x:316,z:218,kind:"water"},{name:"Christiansborg Slotskirke",x:172.6,z:178,kind:"building",fact:"Inaugurated 14 May 1826",flood:.9},{name:"Krigsmuseet",x:203,z:301,kind:"building",fact:"Christian IV's arsenal \xB7 163 m long, finished 1604",flood:.5},{name:"Bibliotekshaven",x:229,z:290,kind:"district"},{name:"Christian IV's Bryghus",x:193,z:349,kind:"building",fact:"Built 1608 as a bastion",flood:.7},{name:"Christianshavns Kanal",x:442,z:398,kind:"water"},{name:"Gammel Dok",x:474,z:218,kind:"building",fact:"A warehouse by H. C. Scharling, 1882",flood:.5},{name:"Gammelholm",x:417,z:128,kind:"district"},{name:"Magasin du Nord",x:285.6,z:96,kind:"building",fact:"Department store \xB7 its building completed 1894",flood:.8},{name:"H\xF8jbro Plads",x:183,z:119,kind:"district"},{name:"Hellig\xE5ndskirken",x:108,z:92.5,kind:"building",fact:"One of the city's oldest churches \xB7 spire 1594",flood:.9},{name:"Amagertorv",x:141.5,z:102,kind:"district"}];var rc=[{closed:!0,pts:[303.6,219.5,295.8,217.9,288.4,215,281.7,210.8,274.8,206.9,268.7,201.8,262,197.4,254.7,194.5,248.1,190.1,241.5,185.6,234.8,181.2,228.2,176.8,221.5,172.4,214.9,167.9,208.3,163.5,201.6,159.1,194.6,155.4,187,153,179,153.1,171.4,155.5,163.9,158.2,157.1,162.3,150.2,166.2,144,171.3,137.4,175.8,131.7,181.3,126.4,187.3,121.4,193.4,116.4,199.6,111.2,205.7,106.7,212.2,101.6,218.4,96.5,224.5,91.5,230.7,87.5,237.6,89,245,93.4,251.6,98.5,257.8,102.9,264.4,108,270.5,112.9,276.9,117.5,283.3,122.5,289.5,127.1,296,132.1,302.2,136.7,308.7,141.7,315,146.4,321.4,151.2,327.8,156.3,333.9,160.7,340.5,165.8,346.7,170.3,353.2,175.3,359.4,180.3,365.6,185.6,371.6,191.2,377.2,196.9,382.9,202.5,388.5,208.1,394.1,213.4,400.1,215.3,407.8,216,415.7,217.5,422.4,223.2,416.8,228.9,411.1,234.5,405.5,240.1,399.9,245.8,394.2,251.4,388.6,257.1,382.9,263.2,377.8,268.8,372.2,274.5,366.5,280.1,360.9,285.8,355.2,291.4,349.6,297,344,302.7,338.3,308.3,332.7,314,327,319.7,321.5,326.2,316.8,332.5,312,338.4,306.6,344,301,349.7,295.3,355.3,289.7,361,284,366.6,278.4,372.2,272.8,377.9,267.1,383.2,261.2,384,253.4,383.9,245.4,379.1,239.1,373,234,366.1,230,358.3,229,350.4,228,342.7,226.1,334.9,224.3,327.2,222.7,319.4,221.2,311.5,220]},{closed:!0,pts:[428.6,210.4,422.5,215.5,416.4,220.6,410.7,226.3,405.1,231.9,399.6,237.7,397.9,245.2,393.4,251.6,387.7,257.3,382.1,262.9,376.4,268.6,370.8,274.2,365.2,279.8,359.5,285.5,353.9,291.1,348.2,296.8,342.6,302.4,337,308,331,313.3,324.4,317.8,318.7,323.3,313,329,307.4,334.6,301.8,340.2,296.1,345.9,290.5,351.5,284.8,357.2,279.2,362.8,273.6,368.4,274.2,372,282.2,372,289.9,373.3,296,378.4,302.2,383.5,307.9,388.9,314.1,394,320.2,399.1,326.3,404.2,332.7,408.9,339.3,413.3,346,417.6,352.1,422.7,358,428,364.1,433.1,370.2,438.3,376.1,443.7,382.2,448.8,388.5,453.5,396.2,452.6,401.9,447,407,440.9,412.1,434.8,417.2,428.7,422.2,422.5,427.3,416.4,432.4,410.3,437.5,404.2,442.6,398.1,447.7,391.9,453,386,458.1,379.9,463.2,373.8,468.3,367.7,473.4,361.6,478.5,355.5,483.7,349.3,488.8,343.2,492.2,336.1,495.3,328.7,500.4,322.6,505.4,316.4,507.7,308.8,509.6,301,511.4,293.3,513.3,285.5,515.1,277.7,516.7,269.9,515.9,262,514.9,254.1,513.9,246.2,512.8,238.3,511.1,230.6,507.2,223.6,503.3,216.7,499.4,209.7,495,203,490.2,196.7,484,191.7,477.4,187.3,470.1,187.6,463.5,192.1,456.9,196.6,450.3,201,443.7,205.4,436,207.6]},{closed:!1,pts:[200,443,205.2,436.9,210.3,430.8,215.4,424.7,221,419,226.6,413.4,232.3,407.7,237.9,402.1,243.6,396.4,249.2,390.8,254.9,385.1,261,380,266.6,374.4,272.3,368.7,277.9,363.1,283.5,357.5,289.2,351.8,294.8,346.2,300.5,340.5,306.1,334.9,311.8,329.2,317.4,323.6,323.6,318.6,330.2,314.2,336.2,308.8,341.8,303.2,347.5,297.5,353.1,291.9,358.7,286.3,364.4,280.6,370,275,375.7,269.3,381.3,263.7,387,258,392.6,252.4,397.9,246.4,398.9,238.6,404.3,232.7,409.9,227.1,415.5,221.5,421.7,216.3,427.5,211,433.7,205.9,439.8,200.8,446.4,196.3,452.6,191.2,458.7,186.1,464.4,180.6,470,175]}],To=[{route:0,phase:0,speed:3.2,size:[4.5,1.1,.55,.95]},{route:0,phase:1/3,speed:3.2,size:[4.5,1.1,.55,.95]},{route:0,phase:2/3,speed:3.2,size:[4.5,1.1,.55,.95]},{route:1,phase:.1,speed:3.2,size:[4.5,1.1,.55,.95]},{route:1,phase:.6,speed:3.2,size:[4.5,1.1,.55,.95]},{route:2,phase:.3,speed:5,size:[5,1.5,.7,1.4]}],Ao=To.length,Eo=14,wo=6,hu=rc.map(i=>{let e=i.pts,t=e.length/2,n=[0];for(let s=1;s<=(i.closed?t:t-1);s++){let r=(s-1)%t,a=s%t;n.push(n[s-1]+Math.hypot(e[a*2]-e[r*2],e[a*2+1]-e[r*2+1]))}return n});function cu(i,e,t,n){let s=rc[i],r=s.pts,a=r.length/2,o=hu[i],l=o[o.length-1];e=s.closed?(e%l+l)%l:Math.min(Math.max(e,0),l-.001);let c=0;for(;c<o.length-2&&o[c+1]<=e;)c++;let u=(e-o[c])/Math.max(1e-6,o[c+1]-o[c]),f=d=>(s.closed?(d%a+a)%a:Math.min(Math.max(d,0),a-1))*2,h=f(c-1),p=f(c),x=f(c+1),M=f(c+2);for(let d=0;d<2;d++){let T=r[h+d],R=r[p+d],y=r[x+d],E=r[M+d];t[n+d]=.5*(2*R+(y-T)*u+(2*T-5*R+4*y-E)*u*u+(3*R-T-3*y+E)*u*u*u),t[n+2+d]=.5*(y-T+2*(2*T-5*R+4*y-E)*u+3*(3*R-T-3*y+E)*u*u)}let g=Math.hypot(t[n+2],t[n+3])||1;t[n+2]/=g,t[n+3]/=g}function Tg(i,e,t){let n=(i+2*Eo)/e,s=2*(n+wo),r=(t%s+s)%s,a=r>=n+wo;a&&(r-=n+wo);let o=2*Eo/e,l=r>=n?i:r<o?e*r*r/(2*o):r>n-o?i-e*(n-r)**2/(2*o):Eo+e*(r-o);return{s:a?i-l:l,back:a}}var uu=Float32Array.from(To.flatMap(i=>i.size)),eM=To.map(i=>i.route===2?1:0);function du(i,e){return To.forEach((t,n)=>{let s=hu[t.route],r=s[s.length-1];if(rc[t.route].closed)cu(t.route,t.phase*r+t.speed*i,e,n*4);else{let{s:a,back:o}=Tg(r,t.speed,i+t.phase*2*((r+2*Eo)/t.speed+wo));cu(t.route,a,e,n*4),o&&(e[n*4+2]*=-1,e[n*4+3]*=-1)}}),e}function pu(i,e,t,n){try{i.extensions.has("KHR_parallel_shader_compile")?i.compileAsync(e,t,n??null).then(()=>fu(i),()=>{}):(i.compile(e,t,n??null),fu(i))}catch{}}function fu(i){for(let e of i.info.programs??[])e.getUniforms?.()}var Wt=512,Kt=ou/(Wt/2),Co=Wt/2+1.5,si=-6,Ro=58,gu=2.5,Ag=-1,_i=4,ts={n:Wt,cityM:gu,pitch:Kt,pocket:Co*Kt},Rg=3,Cg=.35,Pg=(i,e)=>Math.round((i?88:132)*(e>1?1.4:1)),Ig="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",ac=`
vec2 mid(ivec2 c) { return (vec2(c) + 0.5) / RES; }`,xu=`
uint pcg(uint v) { uint s = v * 747796405u + 2891336453u; uint w = ((s >> ((s >> 28u) + 4u)) ^ s) * 277803737u; return (w >> 22u) ^ w; }
vec4 rnd(ivec2 c) {
  uint a = pcg(uint(c.x) * 1031u + pcg(uint(c.y))), b = pcg(a), d = pcg(b), e = pcg(d);
  return vec4(uvec4(a, b, d, e) >> 8u) / 16777215.0;
}`,oc=`
#define BOATS ${Ao}
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
}`,Lg=`
uniform highp sampler2D tRest; uniform highp sampler2D tSim;
uniform float uTime; uniform float uSink; uniform float uFloor; uniform float uBoatDip; uniform vec4 uLift;
${ac}
${oc}
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
}`,Dg=`
uniform highp sampler2D tSrc;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy) * 4;
  float m = -1e4;
  for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) m = max(m, texelFetch(tSrc, c + ivec2(i, j), 0).r);
  gl_FragColor = vec4(m);
}`,Ng=`
uniform highp sampler2D tH; uniform highp sampler2D t4; uniform highp sampler2D t16; uniform highp sampler2D t64;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  gl_FragColor = vec4(texelFetch(tH, c, 0).r, texelFetch(t4, c / 4, 0).r, texelFetch(t16, c / 16, 0).r, texelFetch(t64, c / 64, 0).r);
}`,Ug=`
uniform highp sampler2D tH;
${xu}
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
}`,Fg=`
uniform highp sampler2D tSrc; uniform vec2 uDir; uniform float uTan; uniform float uStep; uniform int uInit;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  ivec2 q = ivec2(floor(vec2(c) + 0.5 + uDir * uStep));
  bool inside = all(greaterThanEqual(q, ivec2(0))) && all(lessThan(q, ivec2(NT)));
  // (the first pass reads the heights without the boats, the rest what it made; uStep is in texels)
  vec4 src = inside ? texelFetch(tSrc, q, 0) : vec4(0.0);
  float far = inside ? (uInit == 1 ? src.b : src.r) - uTan * uStep / RES : -1e4;
  gl_FragColor = vec4(uInit == 1 ? far : max(texelFetch(tSrc, c, 0).r, far));
}`,Og=`
uniform highp sampler2D tSim; uniform highp sampler2D tH; uniform highp sampler2D tRest; uniform float uDt;
uniform vec4 uHand; uniform vec2 uHandV; uniform float uHandOn; uniform float uDip; uniform vec4 uDrops[6]; uniform float uBoatDip;
${ac}
${oc}
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
}`,Bg="void main() { gl_FragColor = vec4(0.0); }",zg=`
uniform float uPitch;
varying vec3 vG;
void main() {
  vG = vec3(position.x / uPitch + 256.0, position.y / uPitch, position.z / uPitch + 256.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,kg=`
#include <common>
#include <cube_uv_reflection_fragment>
uniform highp sampler2D tMax; uniform highp sampler2D tRest; uniform highp sampler2D tShadow; uniform highp sampler2D tSim;
uniform sampler2D tOpen; uniform sampler2D envMap; uniform sampler2D tLamp;
uniform vec3 uCamG; uniform mat4 uGtoClip;
uniform vec3 uLight; uniform vec3 uLightColor; uniform vec2 uSunDir; uniform float uTan; uniform float uEnv; uniform float uPix;
uniform float uWell; uniform float uFloor; uniform float uTop; uniform float uLit; uniform float uSun; uniform float uSwell;
uniform vec3 uFill; uniform vec3 uFillColor; uniform float uNight; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uDome; uniform vec3 uGlow;
uniform vec3 uRimAway; uniform vec3 uRimSun; uniform vec3 uAura;
uniform float uRiseT; uniform float uSink; uniform sampler2D studioMap; uniform float uRoom;
uniform vec2 uSpin; uniform float uWind; uniform vec2 uWindDir; uniform float uWindT; uniform float uCloud; uniform vec2 uCloudAt; uniform float uWet;
uniform float uFlood[${xn.length}]; uniform vec2 uPicked;
varying vec3 vG;
${ac}
${oc}

// Round pins, 0.93 of the pitch across, their heads domed a little and rounded at the rim (in pins: RES a unit).
const float RAD = 0.465, CHAMFER = 0.1, DOME = 0.7;
// The city's light after dark (linear): sodium-warm lamps, windows a little whiter, floodlights whiter still.
const vec3 LAMP = vec3(1.0, 0.56, 0.24), WINDOW = vec3(1.0, 0.74, 0.46), FLOOD = vec3(1.0, 0.8, 0.56);

${xu}
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
  // The satin's sheen toward a low sun is some ten times a lit face: a film's shoulder rolls it off above 3, so the
  // flat tops hold a bright grey with their grain in it instead of one white sheet (the harbour's glints keep theirs).
  float L = dot(direct, vec3(0.2126, 0.7152, 0.0722)), over = max(L - 3.0, 0.0);
  direct *= mix(1.0, (3.0 + over / (1.0 + over / 3.0)) / max(L, 1e-4), clamp(broad * 2.4, 0.0, 1.0));
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
    float gap, ao = 1.0, lath = 0.0;
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
        if (boat) col += boatGlow(bI, P, face, h, many) * (uNight * m);
        else col += glow(c, P, face, h, fp, many, rest.a, mt) * m;
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
}`,vi=(i,e=i)=>new Gt(i,e,{type:ln,format:gn,minFilter:Lt,magFilter:Lt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),mu=typeof location<"u"&&Number(new URLSearchParams(location.search).get("pins-debug"))||0;function vu(i){let{renderer:e}=i,t=e.extensions;if(!t.has("EXT_color_buffer_float")&&!t.has("EXT_color_buffer_half_float"))return null;let n=Ws?2:1,s=Wt*n,r=(w,C)=>Math.floor(C*n)*s+Math.floor(w*n),a=new Float32Array(s*s*4),o=new Ji(a,s,s,gn,An);o.minFilter=o.magFilter=Lt;let l=new Float32Array(s*s),c={col:200.5,row:213.5,h:37.4},u=!1,f=!1,h=!0,p=-1,x=1,M=new Float32Array(0),g=!1,d=0,T=!0,R=!1,y=!0,E=-1,b=new Int32Array(0),P=xn.map(()=>null),v=0;async function S(w,C,$=s){for(let J=0;J<w;J+=$)if(C(J,Math.min(w,J+$)),!(performance.now()-v<6)){if(await new Promise(se=>{let ce=new MessageChannel;ce.port1.onmessage=()=>{ce.port1.close(),se()},ce.port2.postMessage(0)}),!h)throw new Error("left");v=performance.now()}}(async()=>{let w=fetch(i.marks).then(ct=>ct.ok?ct.blob():null).then(ct=>ct&&createImageBitmap(ct,{colorSpaceConversion:"none",premultiplyAlpha:"none"})).catch(()=>null),C=await fetch(i.city);if(!C.ok)throw new Error(`city: ${C.status}`);let $=await createImageBitmap(await C.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),J=document.createElement("canvas");J.width=J.height=s;let se=J.getContext("2d",{willReadFrequently:!0});se.drawImage($,0,0),$.close();let ce=se.getImageData(0,0,s,s).data,me=0,Ae=-1,Ie=0,de=[];if(await S(s*s,(ct,Ht)=>{for(let ht=ct;ht<Ht;ht++){let li=ce[ht*4+2];if(li&2){me++;let bi=(ce[ht*4]<<8|ce[ht*4+1])*128/65535,Bt=li&1&&bi<.5?Ag:bi/gu;a[ht*4]=Bt,a[ht*4+1]=li&1&&bi<.5?2:1+.08*Math.min(5,li>>2),a[ht*4+1]===2&&de.push(ht),l[ht]=Bt,Bt>Ae&&(Ae=Bt,Ie=ht)}else a[ht*4]=si,l[ht]=si}}),me!==So||Ae<30||Ae>45)throw new Error(`city: ${me} pins, tallest ${Ae.toFixed(1)}`);let Ve={col:(Ie%s+.5)/n,row:(Math.floor(Ie/s)+.5)/n,h:Ae},pt=new Float32Array(me),lt=7,ge=0,Ge=1/0,le=-1/0,je=()=>(lt=lt*16807%2147483647)/2147483647;await S(s*s,(ct,Ht)=>{for(let ht=ct;ht<Ht;ht++){let li=(ht%s+.5)/n,bi=(Math.floor(ht/s)+.5)/n,Cn=.6+Math.hypot(li-Ve.col,bi-Ve.row)*.0062+(je()-.5)*.09;a[ht*4+2]=Cn,a[ht*4+1]>.5&&(pt[ge++]=Cn,Ge=Math.min(Ge,Cn),le=Math.max(le,Cn))}});let Be=4096,Qe=Be/(le-Ge),yt=new Uint32Array(Be+1),tn=new Float32Array(me),un=ct=>Math.min(Be-1,Math.max(0,Math.floor((ct-Ge)*Qe)));await S(me,(ct,Ht)=>{for(let ht=ct;ht<Ht;ht++)yt[un(pt[ht])+1]++});for(let ct=0;ct<Be;ct++)yt[ct+1]+=yt[ct];let xt=yt.slice(0,Be);await S(me,(ct,Ht)=>{for(let ht=ct;ht<Ht;ht++)tn[xt[un(pt[ht])]++]=pt[ht]}),await S(Be,(ct,Ht)=>{for(let ht=ct;ht<Ht;ht++)tn.subarray(yt[ht],yt[ht+1]).sort()},64),await z(je);let Ct=xn.map(()=>null),Rn=await w;if(Rn){se.clearRect(0,0,s,s),se.drawImage(Rn,0,0),Rn.close();let ct=se.getImageData(0,0,s,s).data,Ht=xn.map(()=>[0,0,0,-1e9,0]);await S(s*s,(Bt,Cn)=>{for(let Ut=Bt;Ut<Cn;Ut++){let Gn=a[Ut*4+1],yn=ct[Ut*4];if(yn>100&&(yn=0),!yn||yn>xn.length||Gn<.5||Gn>1.5)continue;a[Ut*4+3]=-yn;let Dn=Ht[yn-1];Dn[0]++,Dn[1]+=(Ut%s+.5)/n,Dn[2]+=(Math.floor(Ut/s)+.5)/n,a[Ut*4]>Dn[3]&&(Dn[3]=a[Ut*4],Dn[4]=Ut)}});let ht=Bt=>[(Bt%s+.5)/n,(Math.floor(Bt/s)+.5)/n,a[Bt*4]],li=xn.map(()=>[-1e9,-1e9,-1e9,-1e9,-1e9,-1e9,-1e9,-1e9]),bi=xn.map(()=>new Int32Array(8));Ht.forEach(([Bt,Cn,Ut,Gn,yn],Dn)=>{Bt&&(Ct[Dn]={x:Cn/Bt,z:Ut/Bt,top:Gn,reach:0,pins:Bt,hull:ht(yn)})}),await S(s*s,(Bt,Cn)=>{for(let Ut=Bt;Ut<Cn;Ut++){let Gn=a[Ut*4+3]<-.5?-a[Ut*4+3]-1:-1,yn=Gn>=0?Ct[Gn]:null;if(!yn)continue;let Dn=(Ut%s+.5)/n-yn.x,mc=(Math.floor(Ut/s)+.5)/n-yn.z;yn.reach=Math.max(yn.reach,Math.hypot(Dn,mc));for(let rs=0;rs<8;rs++){let gc=rs*Math.PI/4,xc=Dn*Math.cos(gc)+mc*Math.sin(gc);xc>li[Gn][rs]&&(li[Gn][rs]=xc,bi[Gn][rs]=Ut)}}}),Ct.forEach((Bt,Cn)=>{if(Bt)for(let Ut of bi[Cn])Bt.hull.push(...ht(Ut))})}o.source.dataReady=!1,o.needsUpdate=!0,e.initTexture(o),o.source.dataReady=!0;let at=e.getContext(),nn=e.state;await S(s,(ct,Ht)=>{nn.bindTexture(at.TEXTURE_2D,e.properties.get(o).__webglTexture),nn.pixelStorei(at.UNPACK_FLIP_Y_WEBGL,!1),nn.pixelStorei(at.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),nn.pixelStorei(at.UNPACK_ALIGNMENT,4),nn.pixelStorei(at.UNPACK_ROW_LENGTH,0),nn.pixelStorei(at.UNPACK_SKIP_PIXELS,0),nn.pixelStorei(at.UNPACK_SKIP_ROWS,0),at.texSubImage2D(at.TEXTURE_2D,0,0,ct,s,Ht-ct,at.RGBA,at.FLOAT,a.subarray(ct*s*4,Ht*s*4))},64),h&&(c=Ve,M=tn,b=Int32Array.from(de),Ct.forEach((ct,Ht)=>P[Ht]=ct),u=!0,T=!0,i.invalidate())})().catch(w=>{h&&(f=!0,i.onFail(w),i.invalidate())});let N=new Uint8Array(s*s),F=new Ji(N,s,s,Os,Qt);F.minFilter=F.magFilter=Dt;async function z(w){let C=async ge=>{let Ge=new Uint8Array(s*s),le=new Uint8Array(s*s);return await S(s,(je,Be)=>{for(let Qe=je;Qe<Be;Qe++){let yt=0,tn=ge(Qe*s)?1:0;for(let un=0;un<s;un++){let xt=un+1<s&&ge(Qe*s+un+1)?1:0;Ge[Qe*s+un]=yt|tn|xt,yt=tn,tn=xt}}},8),await S(s,(je,Be)=>{for(let Qe=je*s;Qe<Be*s;Qe++)le[Qe]=Ge[Qe]|(Qe>=s?Ge[Qe-s]:0)|(Qe+s<s*s?Ge[Qe+s]:0)},8),le},$=ge=>a[ge*4+1],J=ge=>$(ge)>.5&&$(ge)<1.5,se=ge=>Math.abs($(ge)-1.32)<.02,ce=await C(ge=>J(ge)&&!se(ge)&&a[ge*4]>2),me=await C(ge=>$(ge)===2),Ae=new Float32Array(s*s);await S(s*s,(ge,Ge)=>{for(let le=ge;le<Ge;le++){if(a[le*4+3]=0,!J(le)||a[le*4]>.4)continue;let je=(me[le]?.15:ce[le]?.1:0)/n;je&&w()<je&&(a[le*4+3]=Ae[le]=.6+.4*w())}});let Ie=n,de=3*n,Ve=[];for(let ge=-de;ge<=de;ge++)Ve.push(Math.exp(-(ge*ge)/(2*Ie*Ie)));let pt=2*Math.PI,lt=new Float32Array(s*s);await S(s,(ge,Ge)=>{for(let le=ge;le<Ge;le++)for(let je=0;je<s;je++){let Be=0;for(let Qe=-de;Qe<=de;Qe++){let yt=je+Qe;yt>=0&&yt<s&&(Be+=Ae[le*s+yt]*Ve[Qe+de])}lt[le*s+je]=Be}},8),await S(s,(ge,Ge)=>{for(let le=ge;le<Ge;le++)for(let je=0;je<s;je++){let Be=0;for(let Qe=-de;Qe<=de;Qe++){let yt=le+Qe;yt>=0&&yt<s&&(Be+=lt[yt*s+je]*Ve[Qe+de])}N[le*s+je]=Math.min(255,Math.round(Be/pt*2.5*255))}},8),F.needsUpdate=!0,e.initTexture(F)}let H=new Ln,I=new Qn(-1,1,1,-1,0,1),V=new on;V.setAttribute("position",new Ft([-1,-1,0,3,-1,0,-1,3,0],3));let Z=new At(V);Z.frustumCulled=!1,H.add(Z);let Y={RES:n.toFixed(1),NT:String(s)},re=(w,C)=>new Jt({vertexShader:Ig,fragmentShader:w,uniforms:C,defines:Y,depthTest:!1,depthWrite:!1}),q=vi(s),Q=vi(s),ae=vi(s),Le=vi(s/4),ne=vi(s/16),De=vi(s/64),Ne=vi(s),it=vi(s),j=vi(s),ie=new Gt(s,s,{type:Qt,format:Os,minFilter:Lt,magFilter:Lt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),Te=[q,Q],Fe=()=>Array.from({length:Ao},()=>new Tt),ye={uBoat:{value:Fe()},uBoatOn:{value:0},uBoatDip:{value:0},uBoatSize:{value:Fe().map((w,C)=>w.fromArray(uu,C*4))}},ze=re(Lg,{tRest:{value:o},tSim:{value:q.texture},uTime:{value:0},uSink:{value:0},uFloor:{value:si},uLift:{value:new Tt},...ye}),bt=re(Dg,{tSrc:{value:null}}),ke=re(Ng,{tH:{value:ae.texture},t4:{value:Le.texture},t16:{value:ne.texture},t64:{value:De.texture}}),st=re(Ug,{tH:{value:ae.texture}}),et=re(Fg,{tSrc:{value:null},uDir:{value:new be},uTan:{value:0},uStep:{value:1},uInit:{value:1}}),Xe=re(Og,{tSim:{value:q.texture},tH:{value:ae.texture},tRest:{value:o},uDt:{value:1/120},uHand:{value:new Tt},uHandV:{value:new be},uHandOn:{value:0},uDip:{value:.5},uDrops:{value:Array.from({length:6},()=>new Tt)},...ye,uBoat:{value:Fe()}}),_t=re(Bg,{}),mt=(w,C)=>{Z.material=w,e.setRenderTarget(C),e.render(H,I)};for(let w of[Xe,_t]){let C=e.getRenderTarget();Z.material=w,e.setRenderTarget(Q),pu(e,H,I),e.setRenderTarget(C)}let kt=new Bi(e),gt=null,St=(w,C=ei)=>new Jn({color:w,side:C}),U=(w,C,$)=>new Ke().setRGB(w,C,$,Yn);function It(){let w=new Ln,C=[],$=ce=>(C.push(ce),w.add(ce),ce);$(new At(new Bn(8,6,8),St(U(.004,.0042,.0046),zt)));let J=(ce,me,Ae,Ie)=>{let de=$(new At(new jn(ce,me),St(Ie,mn)));de.position.set(...Ae),de.lookAt(0,.05,0)};J(2.6,.5,[-1.3,.75,-1.6],U(2.3,2.25,2.15)),J(1.4,1.4,[.3,1.8,.4],U(.7,.7,.72));let se=kt.fromScene(w,0,.01,20);return C.forEach(ce=>{ce.geometry.dispose(),ce.material.dispose()}),se}gt=It();function ft(){let w=new Ln,C=[],$=ce=>(C.push(ce),w.add(ce),ce);$(new At(new Bn(8,6,8),St(U(.15,.148,.144),zt)));let J=(ce,me,Ae,Ie)=>{let de=$(new At(new jn(ce,me),St(Ie,mn)));de.position.set(...Ae),de.lookAt(0,.05,0)};J(3.2,3.2,[0,2.8,0],U(1.5,1.48,1.45)),J(2.6,1.4,[-2.2,1.2,1.4],U(1.9,1.87,1.82));let se=kt.fromScene(w,0,.01,20);return C.forEach(ce=>{ce.geometry.dispose(),ce.material.dispose()}),se}let A=ft(),m=gt.texture.image.height,k=Math.log2(m)-2,O={tMax:{value:Ne.texture},tOpen:{value:ie.texture},tRest:{value:o},tShadow:{value:it.texture},tSim:{value:q.texture},tLamp:{value:F},envMap:{value:gt.texture},studioMap:{value:A.texture},uFill:{value:new B(0,1,0)},uFillColor:{value:new B},uNight:{value:0},uSky:{value:new B(1,1,1)},uGround:{value:new B},uDome:{value:new B},uGlow:{value:new B},uRimAway:{value:new B},uRimSun:{value:new B},uAura:{value:new B},uCamG:{value:new B},uGtoClip:{value:new wt},uLight:{value:new B(0,1,0)},uLightColor:{value:new B(10,10,10)},uSunDir:{value:new be(0,1)},uTan:{value:1},uEnv:{value:4.5},uPix:{value:.001},uWell:{value:Co},uFloor:{value:si},uTop:{value:Ro},uLit:{value:1},uSun:{value:1},uSwell:{value:0},uPitch:{value:Kt},uRiseT:{value:0},uSink:{value:0},uRoom:{value:0},uSpin:{value:new be(1,0)},uWind:{value:0},uWindDir:{value:new be(1,0)},uWindT:{value:0},uCloud:{value:0},uCloudAt:{value:new be},uWet:{value:0},uBoat:ye.uBoat,uBoatSize:ye.uBoatSize,uBoatOn:ye.uBoatOn,uFlood:{value:xn.map(w=>w.flood??0)},uPicked:{value:new be}},K=new Jt({vertexShader:zg,fragmentShader:kg,uniforms:O,side:zt,defines:{...Y,STEPS:Pg(i.phone,n),REFLECT_STEPS:56+16*(n-1),LAMP_K:(n*n).toFixed(1),FLOOR_G:si.toFixed(1),...i.phone?{}:{REFLECT:1},...mu?{DEBUG:mu}:{},ENVMAP_TYPE_CUBE_UV:1,CUBEUV_TEXEL_WIDTH:1/(3*Math.max(2**k,112)),CUBEUV_TEXEL_HEIGHT:1/m,CUBEUV_MAX_MIP:k.toFixed(1)}}),ue=new Ki(1,1,1,96,1,!1),pe=Co*Kt/Math.cos(Math.PI/96);ue.scale(pe,(Ro-si+1)*Kt,pe),ue.translate(0,(Ro+si-1)/2*Kt,0);let X=new At(ue,K);X.position.y=i.top;let ee=42,_e=lu,Pe=Math.atan2(Math.sin(ee*Math.PI/180),-Math.cos(ee*Math.PI/180)),Me=Rt.degToRad(_e)-Pe;X.rotation.y=Me,X.updateMatrixWorld();let fe=ec(i.at??new Date),Re=i.at??new Date,Ue=0,He=NaN,L=new B,ve=new B,te=new be,xe=new be(1e6,1e6),Se=new B(0,1,0),oe=new B(.36,.37,.39),Ce=0,we=0,ut=0,$e=nc(Re),Zt=new be(1,0),Ot=0,vn=0;ru().then(()=>{He=NaN,i.invalidate()});let ss=2.95,ai=(w,C,$)=>{let J=Rt.degToRad(w-ss),se=Rt.degToRad(C);return $.set(Math.sin(J)*Math.cos(se),Math.sin(se),-Math.cos(J)*Math.cos(se))};function yi(w){let C=Date.now();if(w!==He||C-Ue>=3e4){He=w,Ue=C,Re=new Date((i.at??new Date).valueOf()+w*36e5),fe=ec(Re),nc(Re,$e),ai(fe.az,fe.shadeEl,ve);let[se,ce,me]=fe.color,Ae=fe.night;O.uLightColor.value.set(se,ce,me).multiplyScalar(1.5),O.uGround.value.set(se*.038+.05*Ae,ce*.038+.028*Ae,me*.038+.012*Ae),O.uFillColor.value.set(3,3.3,4).multiplyScalar(.55*Ae);let Ie=$e.cloud;O.uSky.value.set(...fe.sky).lerp(new B(.8,.82,.86),.5*Ie);let de=1-Rt.smoothstep(fe.el,3,24),Ve=fe.day*(1+.9*Ie),pt=(ge,Ge,le)=>ge.set(Ge[0]+(le[0]-Ge[0])*de,Ge[1]+(le[1]-Ge[1])*de,Ge[2]+(le[2]-Ge[2])*de).lerp(oe,Ie).multiplyScalar(Ve);pt(O.uDome.value,[.15,.22,.4],[.12,.19,.46]),pt(O.uRimAway.value,[.34,.38,.44],[.3,.3,.48]),pt(O.uRimSun.value,[.44,.45,.46],[.95,.52,.24]),pt(O.uAura.value,[.8,.78,.72],[1.7,.85,.3]).multiplyScalar((1-.95*Ie)/(1+.9*Ie)),O.uGlow.value.set(.5,.36,.26).multiplyScalar(Ae*(1+.8*Ie)),O.uNight.value=Ae;let lt=Rt.degToRad($e.from+180-ss);Zt.set(Math.sin(lt),-Math.cos(lt))}we||ut?ai(fe.az+we,Math.max(fe.shadeEl+ut,fe.shadeEl*.5),L):L.copy(ve),L.applyAxisAngle(Se,-Ce),O.uLight.value.copy(L),ai(305,11,O.uFill.value).applyAxisAngle(Se,-Ce),O.uSpin.value.set(Math.cos(Ce),Math.sin(Ce)),O.uWindDir.value.copy(Zt).rotateAround(new be,Ce);let $=Math.hypot(L.x,L.z),J=Math.max(L.y/$,.02);te.set(L.x/$/J,L.z/$/J),te.distanceTo(xe)*c.h*n>.4&&(y=!0)}let Je={x:0,z:0,px:0,pz:0,depth:5,radius:9,on:!1,lastAt:-1e9,water:!1,wet:!1},Mi=null,bn=new wt,Xt=new $i,oi=new B;function W(w,C){if(!u)return null;bn.copy(X.matrixWorld).invert(),Xt.origin.setFromMatrixPosition(C.matrixWorld),oi.set(w.x,w.y,.5).unproject(C),Xt.direction.copy(oi).sub(Xt.origin).normalize(),Xt.applyMatrix4(bn);let $=Xt.origin.clone().divideScalar(Kt).add(new B(Wt/2,0,Wt/2)),J=Xt.direction.clone().normalize();if(J.y>=0)return null;let se=Math.max(0,(Ro-$.y)/J.y),ce=(si-$.y)/J.y,me=he;for(;se<ce;se+=.5/n){let Ae=$.x+J.x*se,Ie=$.y+J.y*se,de=$.z+J.z*se;if(Ae<0||de<0||Ae>=Wt||de>=Wt)continue;let Ve=l[r(Ae,de)];if(!(Ve<=si)&&Ie<=Ve*(1-me))return{x:Ae,z:de}}return null}let he=0,Oe=!1,tt=-1e9,Ye=(i.at??new Date).valueOf()/1e3%86400,Et=!1,rt=new Float32Array(Ao*4),Nt=(w,C)=>{du(C,rt),w.forEach(($,J)=>$.fromArray(rt,J*4))};Nt(ye.uBoat.value,Ye);let vt=[{id:0,y:0,v:0,to:0},{id:0,y:0,v:0,to:0}],hn=w=>w<-.5?(vt[0].id===-w?vt[0].y:0)+(vt[1].id===-w?vt[1].y:0):0,jt=w=>l[w]+hn(a[w*4+3]);function _n(w,C,$){p>=0&&(p=$?_i:Math.min(_i+1,p+C*x/Rg));let J=Math.max(p,0),se=u&&J<_i;O.uRiseT.value=J,he!==E&&(E=he,T=!0);let ce=Je.on||w-Je.lastAt<(Je.water?14e3:4500),me=u&&!$&&he<.6&&J>=_i*.6?$e.rain:0;me>.05&&(tt=w);let Ae=b.length>0&&w-tt<8e3,Ie=u&&he<.5&&J>=_i*.75?1:0,de=ye.uBoatOn;de.value=$?Ie:de.value+(Ie-de.value)*Math.min(1,C*1.2),Math.abs(de.value-Ie)<.002&&(de.value=Ie);let Ve=de.value>0;Ve!==Et&&(Et=Ve,T=!0);let pt=e.getRenderTarget();if((ce||Ae||Ve)&&!$){let ge=Xe.uniforms.uDrops.value,Ge=me>.05?Math.min(6,me*2.2+.6):0;Xe.uniforms.uHandV.value.set(Je.x-Je.px,Je.z-Je.pz).multiplyScalar(Je.on?1/Math.max(C,1/120):0);for(let le=1;le<=2;le++){let je=le/2;Xe.uniforms.tSim.value=Te[d].texture,Xe.uniforms.uHand.value.set(Je.px+(Je.x-Je.px)*je,Je.pz+(Je.z-Je.pz)*je,Je.depth,Je.radius),Xe.uniforms.uHandOn.value=Je.on?1:0,Xe.uniforms.uDip.value=Je.depth<0?1.1:.5,ge.forEach((Be,Qe)=>{if(Qe>=Ge||Math.random()>Ge-Qe){Be.z=0;return}let yt=b[Math.floor(Math.random()*b.length)];Be.set((yt%s+Math.random())/n,(Math.floor(yt/s)+Math.random())/n,30+50*Math.random(),0)}),Ve&&(Ye+=1/120,Nt(Xe.uniforms.uBoat.value,Ye)),mt(Xe,Te[1-d]),d=1-d}g=!0,ce?T=!0:Ve&&(R=!0)}else g&&(mt(_t,Te[0]),mt(_t,Te[1]),d=0,g=!1,Je.water=!1,T=!0);Nt(ye.uBoat.value,Ye),ye.uBoatDip.value=g?Cg:0,O.tSim.value=Te[d].texture,Je.px=Je.x,Je.pz=Je.z,(se||u&&!Oe)&&(T=!0);let lt=!1;for(let ge of vt)if(!(ge.y===ge.to&&ge.v===0)){$&&(ge.y=ge.to,ge.v=0);for(let Ge=0,le=Math.min(C,1/30)/2;Ge<2&&!$;Ge++)ge.v+=(81*(ge.to-ge.y)-2*.42*9*ge.v)*le,ge.y+=ge.v*le;Math.abs(ge.to-ge.y)<.003&&Math.abs(ge.v)<.02?(ge.y=ge.to,ge.v=0):lt=!0,T=!0}if(ze.uniforms.uLift.value.set(vt[0].id,vt[0].y,vt[1].id,vt[1].y),O.uPicked.value.set(vt[0].id,Math.min(1,Math.max(0,vt[0].y/2))),(T||R)&&u&&(Oe=J>=_i,ze.uniforms.tSim.value=Te[d].texture,ze.uniforms.uTime.value=J,ze.uniforms.uSink.value=he,mt(ze,ae),bt.uniforms.tSrc.value=ae.texture,mt(bt,Le),bt.uniforms.tSrc.value=Le.texture,mt(bt,ne),bt.uniforms.tSrc.value=ne.texture,mt(bt,De),mt(ke,Ne),T&&(mt(st,ie),y=!0)),y&&u){let ge=Math.hypot(L.x,L.z);et.uniforms.uDir.value.set(L.x/ge,L.z/ge),et.uniforms.uTan.value=L.y/ge,O.uSunDir.value.set(L.x/ge,L.z/ge),O.uTan.value=L.y/ge,xe.copy(te),et.uniforms.tSrc.value=ae.texture,et.uniforms.uStep.value=1,et.uniforms.uInit.value=1,mt(et,it);let Ge=it,le=j;et.uniforms.uInit.value=0;for(let je=1;je<s;je*=2)et.uniforms.tSrc.value=Ge.texture,et.uniforms.uStep.value=je,mt(et,le),[Ge,le]=[le,Ge];O.tShadow.value=Ge.texture,y=!1}return T=R=!1,e.setRenderTarget(pt),se||ce||Ae||lt||Ve&&!$}let _={value:0},D=new B,G=new wt().makeScale(Kt,Kt,Kt).multiply(new wt().makeTranslation(-Wt/2,0,-Wt/2));return{mesh:X,get ready(){return u},turn(w){w!==Ce&&(Ce=w,X.rotation.y=Me+Ce,X.updateMatrixWorld())},tilt(w,C){w===we&&C===ut||(we=w,ut=C,i.invalidate())},relight(){He=NaN,i.invalidate()},get failed(){return f},get light(){return fe},get risen(){if(p<0||!M.length)return 0;let w=p-.08,C=0,$=M.length;for(;C<$;){let J=C+$>>1;M[J]<=w?C=J+1:$=J}return C},landmark(w){return P[w]??null},get under(){return Mi},lift(w,C){let $=w!==null&&P[w]?w+1:0;$&&vt[1].id===$&&vt.reverse();let[J,se]=vt;!$||J.id===$?J.to=$?C:0:(J.id&&(J.y!==0||J.v!==0)&&Object.assign(se,J,{to:0}),Object.assign(J,{id:$,y:0,v:0,to:C})),i.invalidate()},arrive(){p<0&&u&&(p=0,i.invalidate())},rush(){x=7},get arriving(){return p>=0&&p<_i},get intro(){return p},get lightTime(){return Re},get weather(){return $e},gridToWorld(w,C,$,J){return J.set((w-Wt/2)*Kt,C*Kt,($-Wt/2)*Kt).applyMatrix4(X.matrixWorld)},worldToGrid(w,C){return bn.copy(X.matrixWorld).invert(),C.copy(w).applyMatrix4(bn).divideScalar(Kt),C.set(C.x+Wt/2,C.y,C.z+Wt/2)},heightAt(w,C){return w<0||C<0||w>=Wt||C>=Wt?si:jt(r(w,C))*(1-he)},clear(w,C){let $=Math.hypot(C.x-w.x,C.z-w.z),J=Math.min(400,Math.ceil($/1.5));for(let se=2;se<J;se++){let ce=se/J,me=w.x+(C.x-w.x)*ce,Ae=w.z+(C.z-w.z)*ce;if(me<0||Ae<0||me>=Wt||Ae>=Wt)break;if(jt(r(me,Ae))*(1-he)>w.y+(C.y-w.y)*ce)return!1}return!0},update(w){yi(w.hours),he=w.sink;let C=_n(w.now,w.dt,w.still);X.visible=u,_.value=u?1:0,X.updateMatrixWorld(),bn.copy(X.matrixWorld).invert(),D.setFromMatrixPosition(w.camera.matrixWorld).applyMatrix4(bn),O.uCamG.value.set(D.x/Kt+Wt/2,D.y/Kt,D.z/Kt+Wt/2),O.uGtoClip.value.copy(w.camera.projectionMatrix).multiply(w.camera.matrixWorldInverse).multiply(X.matrixWorld).multiply(G),O.uPix.value=2*Math.tan(Rt.degToRad(w.camera.fov)/2)/Math.max(1,w.height)/(w.camera.zoom||1),O.uEnv.value=w.lit,O.uSun.value=1-Rt.smoothstep(w.sink,.25,.75),O.uSink.value=w.sink,O.uRoom.value=w.room,O.uLit.value=1+.6*fe.day*(1-Rt.smoothstep(w.sink,.55,1));let $=w.still?1:1-Math.exp(-w.dt*2.5);Ot+=(Rt.smoothstep($e.wind,1,14)-Ot)*$;let J=Rt.smoothstep($e.rain,.05,1.2);return vn+=(J-vn)*(J>vn?$:$*.3),O.uWind.value=Ot,O.uWet.value=vn*(1-Rt.smoothstep(w.sink,.3,.8)),O.uCloud.value+=($e.cloud-O.uCloud.value)*$,w.still||(O.uSwell.value+=w.dt*(.6+.9*Ot),O.uWindT.value+=w.dt*(.5+1.5*Ot),O.uCloudAt.value.addScaledVector(O.uWindDir.value,-w.dt*(.012+.03*$e.wind))),C||!w.still&&($e.cloud>.02||Ot>.05)},pointer(w,C,$){let J=w&&$?W(w,C):null,se=performance.now(),ce=J?a[r(J.x,J.z)*4+3]:0;return Mi=J&&ce<-.5?Math.round(-ce)-1:null,!J||Mi!==null&&$==="hover"?(Je.on&&(Je.on=!1,Je.lastAt=se,i.invalidate()),!!J):(Je.on||(Je.px=J.x,Je.pz=J.z),Je.x=J.x,Je.z=J.z,Je.on=!0,Je.depth=$==="press"?-.6:6.5,Je.wet=a[r(J.x,J.z)*4+1]>1.5,Je.wet&&(Je.water=!0),Je.radius=$==="press"?15:10,Je.lastAt=se,i.invalidate(),!0)},patchPlinth(w,C){let $=w.onBeforeCompile;w.onBeforeCompile=(se,ce)=>{$.call(w,se,ce),se.uniforms.uPocket=_,se.vertexShader=se.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPinW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vPinW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),se.fragmentShader=se.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPinW;
uniform float uPocket;`).replace("void main() {",`void main() {
  if (uPocket > 0.5 && vPinW.y > ${(C-8e-4).toFixed(4)} && length(vPinW.xz) < ${(Co*Kt).toFixed(5)}) discard;`)};let J=w.customProgramCacheKey();w.customProgramCacheKey=()=>"pin-pocket|"+J,w.needsUpdate=!0},dispose(){h=!1;for(let w of[q,Q,ae,Le,ne,De,Ne,ie,it,j])w.dispose();for(let w of[ze,bt,ke,st,et,Xe,_t,K])w.dispose();o.dispose(),F.dispose(),V.dispose(),ue.dispose(),gt?.dispose(),A.dispose(),kt.dispose()}}}var Hg="varying vec2 vUv; void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",_u=`
uniform float uNear; uniform float uFar; uniform float uFocus; uniform float uCoc;
// Signed circle of confusion (px): + behind the focus, - in front, from a depth-buffer value. Behind the focus it
// grows at 0.6 of the lens's rate, so the city further off stays legible (a portrait blur hid
// everything beyond the nearest street); in front it keeps the full macro blur.
float coc(float depth) {
  float z = (uNear * uFar) / (uFar - depth * (uFar - uNear));
  float c = 1.0 - uFocus / z;
  return c > 0.0 ? 0.6 * uCoc * c : max(uCoc * c, -1.3 * uCoc);
}`,Vg=`
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 uTexel;
${_u}
void main() {
  vec2 o = uTexel * 0.5;
  vec3 c = texture2D(tColor, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, -o.y)).rgb
         + texture2D(tColor, vUv + vec2(-o.x, o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, o.y)).rgb;
  float d = min(min(texture2D(tDepth, vUv + vec2(-o.x, -o.y)).r, texture2D(tDepth, vUv + vec2(o.x, -o.y)).r),
                min(texture2D(tDepth, vUv + vec2(-o.x, o.y)).r, texture2D(tDepth, vUv + vec2(o.x, o.y)).r));
  gl_FragColor = vec4(c * 0.25, coc(d) * 0.5);            // half-size pixels
}`,Gg=`
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
}`,Wg=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel;
void main() {
  vec2 o = uTexel;
  vec4 c = texture2D(tSrc, vUv) * 4.0
    + (texture2D(tSrc, vUv + vec2(o.x, 0.0)) + texture2D(tSrc, vUv - vec2(o.x, 0.0)) + texture2D(tSrc, vUv + vec2(0.0, o.y)) + texture2D(tSrc, vUv - vec2(0.0, o.y))) * 2.0
    + texture2D(tSrc, vUv + o) + texture2D(tSrc, vUv - o) + texture2D(tSrc, vUv + vec2(o.x, -o.y)) + texture2D(tSrc, vUv + vec2(-o.x, o.y));
  gl_FragColor = c / 16.0;
}`,Xg=`
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
}`,qg=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel;
vec3 at(float x, float y) { return texture2D(tSrc, vUv + uTexel * vec2(x, y)).rgb; }
void main() {
  vec3 c = at(0.0, 0.0) * 0.125
    + (at(-2.0, 2.0) + at(2.0, 2.0) + at(-2.0, -2.0) + at(2.0, -2.0)) * 0.03125
    + (at(0.0, 2.0) + at(-2.0, 0.0) + at(2.0, 0.0) + at(0.0, -2.0)) * 0.0625
    + (at(-1.0, 1.0) + at(1.0, 1.0) + at(-1.0, -1.0) + at(1.0, -1.0)) * 0.125;
  gl_FragColor = vec4(c, 1.0);
}`,Yg=`
varying vec2 vUv;
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uGain;
void main() {
  vec2 o = uTexel;
  vec3 c = texture2D(tSrc, vUv).rgb * 4.0
    + (texture2D(tSrc, vUv + vec2(o.x, 0.0)).rgb + texture2D(tSrc, vUv - vec2(o.x, 0.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, o.y)).rgb + texture2D(tSrc, vUv - vec2(0.0, o.y)).rgb) * 2.0
    + texture2D(tSrc, vUv + o).rgb + texture2D(tSrc, vUv - o).rgb + texture2D(tSrc, vUv + vec2(o.x, -o.y)).rgb + texture2D(tSrc, vUv + vec2(-o.x, o.y)).rgb;
  gl_FragColor = vec4(c * (uGain / 16.0), 1.0);
}`,Zg=`
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tDepth; uniform sampler2D tBlur; uniform vec2 uHalfTexel; uniform float uGrain; uniform float uTime;
uniform float uShade; uniform float uAspect; uniform vec2 uSize; uniform sampler2D tBloom; uniform vec2 uBloomTexel; uniform float uBloom;
${_u}
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
}`,$g=2.4,Jg=.7,Kg=1+.7+.49+.343+.2401,jg=(()=>{let i=typeof location>"u"?null:new URLSearchParams(location.search).get("bloom");return i!==null&&Number.isFinite(Number(i))?Number(i):.3})()/Kg;function yu(i,e){let t=new Gt(1,1,{type:ln,depthTexture:new Kn(1,1),samples:0,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),n=()=>new Gt(1,1,{type:ln,depthBuffer:!1,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),s=n(),r=n(),a=n(),o=[n(),n(),n(),n(),n()],l={uNear:{value:.05},uFar:{value:40},uFocus:{value:1},uCoc:{value:0}},c=(F,z,H={})=>new Jt({vertexShader:Hg,fragmentShader:F,uniforms:z,depthTest:!1,depthWrite:!1,...H}),u=c(Vg,{tColor:{value:t.texture},tDepth:{value:t.depthTexture},uTexel:{value:new be},...l}),f=c(Gg,{tDown:{value:s.texture},uTexel:{value:new be},uRadius:{value:0}},{defines:{SAMPLES:e?30:52}}),h=c(Wg,{tSrc:{value:r.texture},uTexel:{value:new be}}),p=c(Xg,{tDown:{value:s.texture},tSoft:{value:a.texture},uTexel:{value:new be},uExposure:{value:1},uThreshold:{value:$g}}),x=c(qg,{tSrc:{value:null},uTexel:{value:new be}}),M=c(Yg,{tSrc:{value:null},uTexel:{value:new be},uGain:{value:Jg}},{blending:wa,blendEquation:gi,blendSrc:dr,blendDst:dr}),g=c(Zg,{tColor:{value:t.texture},tDepth:{value:t.depthTexture},tBlur:{value:a.texture},uHalfTexel:{value:new be},uGrain:{value:0},uTime:{value:0},uShade:{value:0},uAspect:{value:1},uSize:{value:new be(1,1)},...l,tBloom:{value:o[0].texture},uBloomTexel:{value:new be},uBloom:{value:0}}),d=new Ln,T=new Qn(-1,1,1,-1,0,1),R=new on;R.setAttribute("position",new Ft([-1,-1,0,3,-1,0,-1,3,0],3));let y=new At(R,g);y.frustumCulled=!1,d.add(y);let E=(F,z,H=!1)=>{y.material=F,i.setRenderTarget(z);let I=i.autoClear;i.autoClear=!H,i.render(d,T),i.autoClear=I},b=o.map(()=>new be),P=1,v=1,S=1,N=new B;return{setSize(F,z,H=1){S=Math.max(1,Math.round(F*H));let I=Math.max(1,Math.round(z*H));P=F,v=z,t.setSize(S,I),s.setSize(Math.ceil(S/2),Math.ceil(I/2)),r.setSize(Math.ceil(S/2),Math.ceil(I/2)),a.setSize(Math.ceil(S/2),Math.ceil(I/2)),o.forEach((V,Z)=>{V.setSize(Math.max(1,Math.ceil(S/(4<<Z))),Math.max(1,Math.ceil(I/(4<<Z)))),b[Z].set(1/V.width,1/V.height)}),p.uniforms.uTexel.value.set(1/Math.ceil(S/2),1/Math.ceil(I/2)),g.uniforms.uBloomTexel.value.copy(b[0]),h.uniforms.uTexel.value.set(1/Math.ceil(S/2),1/Math.ceil(I/2)),u.uniforms.uTexel.value.set(1/S,1/I),f.uniforms.uTexel.value.set(1/Math.ceil(S/2),1/Math.ceil(I/2)),g.uniforms.uHalfTexel.value.set(1/Math.ceil(S/2),1/Math.ceil(I/2)),g.uniforms.uSize.value.set(S,I)},render(F,z,H,I,V){i.setRenderTarget(t),i.render(F,z),N.copy(H).applyMatrix4(z.matrixWorldInverse),l.uNear.value=z.near,l.uFar.value=z.far,l.uFocus.value=Math.max(.01,-N.z);let Z=S/40*I;l.uCoc.value=Z,f.uniforms.uRadius.value=Z/2*1.3,g.uniforms.uGrain.value=.022*Math.min(1,I*1.5),g.uniforms.uTime.value=V,g.uniforms.uShade.value=Math.min(1,I*1.2),g.uniforms.uAspect.value=P/v,g.uniforms.uBloom.value=jg*Math.min(1,I*8),E(u,s),E(f,r),E(h,a),p.uniforms.uExposure.value=i.toneMappingExposure,E(p,o[0]);for(let Y=1;Y<o.length;Y++)x.uniforms.tSrc.value=o[Y-1].texture,x.uniforms.uTexel.value=b[Y-1],E(x,o[Y]);for(let Y=o.length-2;Y>=0;Y--)M.uniforms.tSrc.value=o[Y+1].texture,M.uniforms.uTexel.value=b[Y+1],E(M,o[Y],!0);E(g,null)},within(F){let z=i.getRenderTarget();i.setRenderTarget(t);try{F()}finally{i.setRenderTarget(z)}},dispose(){t.depthTexture?.dispose(),t.dispose(),s.dispose(),r.dispose(),a.dispose(),o.forEach(F=>F.dispose()),u.dispose(),f.dispose(),h.dispose(),p.dispose(),x.dispose(),M.dispose(),g.dispose(),R.dispose()}}}var Qg=.3,ex=1.75,tx=6,Hn=Math.PI/180;function Mu(i){let{canvas:e,phone:t}=i,n=new vo({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"});n.setPixelRatio(i.pixelRatio),n.toneMapping=fr,n.toneMappingExposure=Qg,n.outputColorSpace=fn,n.setClearColor(197380,1);let s=!0,r=0,a=i.still,o=!1,l=0,c=0,u=0,f=()=>{!r&&s&&(r=requestAnimationFrame(bn))},h=W=>{s&&(s=!1,cancelAnimationFrame(r),i.onFail(W))},p=vu({renderer:n,top:0,phone:t,at:i.at,city:i.city,marks:i.marks,invalidate:f,onFail:h});if(!p)throw n.dispose(),new Error("pintable: no float render targets");let x=p,M=yu(n,t),g=new Ln;g.add(x.mesh);let d=new an(t?30:24,1,.02,20),T=ts.n,R=ts.pocket,y=ts.n/512,E=new Bi(n),b=(()=>{let W=new Ln,he=(Et,rt,Nt)=>new Ke().setRGB(Et,rt,Nt,Yn),Oe=new At(new Bn(8,6,8),new Jn({color:he(.004,.0042,.0046),side:zt}));W.add(Oe);let tt=(Et,rt,Nt,vt)=>{let hn=new At(new jn(Et,rt),new Jn({color:vt,side:mn}));hn.position.set(...Nt),hn.lookAt(0,.05,0),W.add(hn)};tt(2.6,.5,[-1.3,.75,-1.6],he(2.3,2.25,2.15)),tt(1.4,1.4,[.3,1.8,.4],he(.7,.7,.72));let Ye=E.fromScene(W,0,.01,20);return W.traverse(Et=>{let rt=Et;rt.geometry?.dispose(),rt.material?.dispose()}),Ye})();g.environment=b.texture,g.environmentRotation.y=x.mesh.rotation.y,g.environmentIntensity=1;let P=R+.0085,v=[new be(R,-.006),new be(R,-6e-4),new be(R+5e-4,-5e-5),new be(R+9e-4,0)];for(let W=0;W<=10;W++){let he=W/10*Math.PI/2;v.push(new be(P-.0024+Math.sin(he)*.0024,-.0024+Math.cos(he)*.0024))}v.push(new be(P,-.0075),new be(P-8e-4,-.0083));let S=new Ps(v,192),N=new Ls({color:14277340,metalness:1,roughness:.16,clearcoat:.4,clearcoatRoughness:.08}),F=new At(S,N),z=new Ps([new be(0,-.054),new be(P-.004,-.054),new be(P-8e-4,-.0505),new be(P-8e-4,-.0083),new be(R,-.0083)],192),H=new Ls({color:657931,metalness:.55,roughness:.4,clearcoat:.25,clearcoatRoughness:.35}),I=new At(z,H),V=new Ki(.022,.026,1.6,64,1,!0);V.translate(0,-.054-.8,0);let Z=new Is({color:460552,metalness:.2,roughness:.7}),Y=new At(V,Z);g.add(F,I,Y);let re=new cr(16777215,0);g.add(re,re.target);let q=T/2,Q={x0:-1,x1:1,y0:-1,y1:1},ae=()=>{let W=Math.tan(d.fov*Hn/2),he=W*d.aspect,Oe=R*(d.aspect<.8?1.14:1.08)/(he*(Q.x1-Q.x0)/2),tt=R*(Math.sin(31*Hn)*1.08+.2)/(W*(Q.y1-Q.y0)/2);return Math.min(Math.max(Oe,tt),4.2)},Le=.09,ne={b:148,el:31,dist:1,gx:q,gz:q},De={...ne},Ne=1,it=(W,he,Oe)=>Oe.set(Math.sin(W*Hn)*Math.cos(he*Hn),Math.sin(he*Hn),-Math.cos(W*Hn)*Math.cos(he*Hn)).applyAxisAngle(j,x.mesh.rotation.y),j=new B(0,1,0),ie=new B,Te=new B,Fe=new B,ye=new B,ze=0,bt=W=>Rt.lerp(3,12,Rt.smoothstep(Math.log(W),Math.log(.18),Math.log(.6)));function ke(W){W.dist=Rt.clamp(W.dist,Le,Ne*1.2),W.el=Rt.clamp(W.el,bt(W.dist),82);let he=T/2*.92*(1-Rt.smoothstep(W.dist,Ne*.45,Ne*.95)),Oe=W.gx-q,tt=W.gz-q,Ye=Math.hypot(Oe,tt);Ye>he&&(W.gx=q+Oe/Ye*he,W.gz=q+tt/Ye*he)}let st={el:74,dist:1.25};function et(W){let he=a?1:1-Math.exp(-W*7),Oe=ne.b-De.b;Oe-=360*Math.round(Oe/360),De.b+=Oe*he,De.el+=(ne.el-De.el)*he,De.dist=Math.exp(Math.log(De.dist)+(Math.log(ne.dist)-Math.log(De.dist))*he),De.gx+=(ne.gx-De.gx)*he,De.gz+=(ne.gz-De.gz)*he;let tt=Math.abs(Oe)>.01||Math.abs(ne.el-De.el)>.01||Math.abs(ne.dist/De.dist-1)>5e-4||Math.hypot(ne.gx-De.gx,ne.gz-De.gz)>.02;tt||Object.assign(De,ne);let{b:Ye,el:Et,dist:rt}=De;if(ue&&!K){let _=x.intro,D=_<0?0:Math.min(1,_/(_i-.4)),G=D*D*D*(D*(D*6-15)+10);Et=Rt.lerp(st.el,Et,G),rt=Math.exp(Rt.lerp(Math.log(st.dist*Ne),Math.log(rt),G)),Ye=Ye-40*(1-G)}x.gridToWorld(De.gx,0,De.gz,ie),d.position.copy(ie).addScaledVector(it(Ye,Et,Te),rt),d.lookAt(ie),d.near=rt<.5?.003:.02,d.updateProjectionMatrix(),d.updateMatrixWorld();let Nt=rt<.6?x.heightAt(De.gx,De.gz)*Math.min(1,(.6-rt)/.3):0;x.gridToWorld(De.gx,Math.max(0,Nt)*.6,De.gz,Fe);let vt=_=>-_.applyMatrix4(d.matrixWorldInverse).z,hn=vt(ye.copy(Fe)),jt=we===null?null:x.landmark(we),_n=0;if(jt?.hull){let _=1/0,D=0;for(let G=0;G<jt.hull.length;G+=3)_=Math.min(_,vt(x.gridToWorld(jt.hull[G],jt.hull[G+2]+Zt(),jt.hull[G+1],ye))),D=Math.max(D,vt(x.gridToWorld(jt.hull[G],0,jt.hull[G+1],ye)));_>0&&D>_&&(_n=1.6/(1/_+.6/D)-hn)}return ze=a?_n:ze+(_n-ze)*(1-Math.exp(-W*4)),Math.abs(ze)>1e-5&&Fe.set(0,0,-(hn+ze)).applyMatrix4(d.matrixWorld),tt||Math.abs(_n-ze)>1e-4}let Xe=W=>Rt.lerp(.95,.12,Rt.smoothstep(Math.log(W),Math.log(.28),Math.log(Ne))),_t=new be,mt=new hr,kt=new wn(new B(0,1,0),0),gt=new B,St=new B,U=1,It=1,ft=(W,he,Oe=_t)=>Oe.set(W/U*2-1,-(he/It*2-1));function A(W,he){return mt.setFromCamera(ft(W,he,new be),d),!mt.ray.intersectPlane(kt,gt)||Math.hypot(gt.x-x.mesh.position.x,gt.z-x.mesh.position.z)>R?null:(x.worldToGrid(gt,St),{x:St.x,z:St.z})}let m=new Map,k=null,O=!1,K=!1,ue=!1,pe=null,X=()=>e.getBoundingClientRect();function ee(){K||(K=!0,ue&&(Object.assign(De,_e()),x.rush()))}function _e(){let W=d.position.clone().sub(ie),he=W.length(),Oe=Math.asin(Rt.clamp(W.y/he,-1,1))/Hn;W.applyAxisAngle(j,-x.mesh.rotation.y);let tt=Math.atan2(W.x,-W.z)/Hn,Ye={...De,b:tt,el:Oe,dist:he};return Object.assign(ne,{b:tt,el:Oe,dist:he}),Ye}function Pe(W){if(!o)return;let he=X(),Oe=W.clientX-he.left,tt=W.clientY-he.top;O=W.pointerType==="mouse",ee(),e.setPointerCapture(W.pointerId);let Ye=!A(Oe,tt),Et=W.button===2||W.ctrlKey||W.altKey||m.size>0||a||Ye;if(m.size>0)for(let rt of m.values())rt.mode="turn";m.set(W.pointerId,{mode:Et?"turn":"press",x:Oe,y:tt,id:W.pointerId,beside:Ye&&W.pointerType==="touch"}),m.size===2&&Me(),f()}function Me(){let[W,he]=[...m.values()];pe={d:Math.hypot(W.x-he.x,W.y-he.y),a:Math.atan2(he.y-W.y,he.x-W.x),dist:ne.dist,b:ne.b}}function fe(W){let he=X(),Oe=W.clientX-he.left,tt=W.clientY-he.top,Ye=m.get(W.pointerId);if(!Ye){W.pointerType==="mouse"&&(k={x:Oe,y:tt},O=!0,f());return}let Et=Oe-Ye.x,rt=tt-Ye.y;if(Ye.x=Oe,Ye.y=tt,m.size===2&&pe){let[Nt,vt]=[...m.values()],hn=Math.hypot(Nt.x-vt.x,Nt.y-vt.y),jt=Math.atan2(vt.y-Nt.y,vt.x-Nt.x),_n=pe.d/Math.max(hn,1);He((Nt.x+vt.x)/2,(Nt.y+vt.y)/2,pe.dist*_n/ne.dist),ne.b=pe.b+(jt-pe.a)/Hn,ke(ne)}else Ye.mode==="turn"&&(ne.b-=Et*.28,Ye.beside||(ne.el+=rt*.2),ke(ne));f()}function Re(W){m.delete(W.pointerId),m.size<2&&(pe=null),W.pointerType!=="mouse"&&(k=null),f()}function Ue(W){W.pointerType==="mouse"&&!m.size&&(k=null,f())}function He(W,he,Oe){let tt=ne.dist;ne.dist*=Oe,ke(ne);let Ye=ne.dist/tt,Et=A(W,he);if(Et&&Ye<1)ne.gx+=(Et.x-ne.gx)*(1-Ye),ne.gz+=(Et.z-ne.gz)*(1-Ye);else if(Ye>1){let rt=Math.min(1,(Ye-1)*1.6);ne.gx+=(q-ne.gx)*rt*Rt.smoothstep(ne.dist,Ne*.35,Ne*.9),ne.gz+=(q-ne.gz)*rt*Rt.smoothstep(ne.dist,Ne*.35,Ne*.9)}ke(ne)}function L(W){if(!o)return;W.preventDefault(),ee();let he=X(),Oe=W.clientX-he.left,tt=W.clientY-he.top,Ye=W.deltaMode===1?16:W.deltaMode===2?It:1;!W.ctrlKey&&Math.abs(W.deltaX)>Math.abs(W.deltaY)*1.2?(ne.b-=W.deltaX*Ye*.12,ke(ne)):He(Oe,tt,Math.exp(W.deltaY*Ye*(W.ctrlKey?.01:.0016))),f()}function ve(W){if(!o)return;let he=X(),Oe=A(W.clientX-he.left,W.clientY-he.top);Oe&&(ee(),ne.gx=Oe.x,ne.gz=Oe.z,ne.dist=Math.min(ne.dist,.3),ke(ne),f())}let te=W=>W.preventDefault(),xe=!1;function Se(W){if(!o)return;let he=W.touches,Oe=X();xe=he.length>1||!!A(he[0].clientX-Oe.left,he[0].clientY-Oe.top),xe&&W.preventDefault()}let oe=W=>{(xe||W.touches.length>1)&&W.cancelable&&W.preventDefault()};e.addEventListener("touchstart",Se,{passive:!1}),e.addEventListener("touchmove",oe,{passive:!1}),e.addEventListener("pointerdown",Pe),e.addEventListener("pointermove",fe),e.addEventListener("pointerup",Re),e.addEventListener("pointercancel",Re),e.addEventListener("pointerleave",Ue),e.addEventListener("wheel",L,{passive:!1}),e.addEventListener("dblclick",ve),e.addEventListener("contextmenu",te);let Ce=W=>{W.preventDefault(),h(new Error("WebGL context lost"))};e.addEventListener("webglcontextlost",Ce);let we=null,ut=null,$e=()=>ex/ts.cityM,Zt=()=>tx/ts.cityM;function Ot(W){let he=we??W;he!==ut&&(ut=he,x.lift(he,he===null?0:he===we?Zt():$e()))}let vn=new B;function ss(){let W=we??x.under;if(W===null||!xn[W]?.fact||!x.landmark(W)){i.onLabel(null,0,0);return}let he=x.landmark(W);if(x.gridToWorld(he.x,he.top+(W===we?Zt():$e())+3*y,he.z,vn),vn.project(d),vn.z>1||Math.abs(vn.x)>1.05||Math.abs(vn.y)>1.05){i.onLabel(null,0,0);return}i.onLabel(W,(vn.x*.5+.5)*U,(.5-vn.y*.5)*It)}let ai=0,yi="",Je=new be;function Mi(W,he){x.ready&&!o&&(o=!0,i.onReady()),o&&x.intro<0&&x.arrive(),ue=x.arriving&&!a;let Oe=et(W),tt=[...m.values()].find(_=>_.mode==="press"),Ye=!1;a||!o?x.pointer(null,d,null):tt?Ye=x.pointer(ft(tt.x,tt.y,Je),d,"press"):k&&O&&!m.size?Ye=x.pointer(ft(k.x,k.y,Je),d,"hover"):x.pointer(null,d,null),o&&(a||!ue)&&Ot(Ye&&!tt?x.under:null),e.style.cursor=m.size?tt?"grabbing":"move":Ye?"pointer":"grab";let Et=x.update({now:he,dt:W,camera:d,sink:0,lit:1,room:.35,still:a,height:It,hours:ai}),rt=x.light;it(rt.az-2.95,Math.max(rt.el,1.5),re.position),re.position.multiplyScalar(3);let Nt=(rt.color[0]+rt.color[1]+rt.color[2])/3;re.color.setRGB(rt.color[0]/Math.max(Nt,.001),rt.color[1]/Math.max(Nt,.001),rt.color[2]/Math.max(Nt,.001),Yn),re.intensity=Nt*.9*(1-.8*(x.weather.cloud>.85?1:0));let vt=x.risen;ss();let hn=x.weather,jt=x.lightTime,_n=`${Math.round(vt/997)}|${ue}|${rt.kind}${rt.az.toFixed(0)}/${rt.el.toFixed(0)}|${Math.floor(jt.valueOf()/6e4)}|${sc(hn)}|${ic()}|${x.under}`;return _n!==yi&&(yi=_n,i.onNews({risen:vt,arriving:ue,light:rt,at:jt,weather:sc(hn),source:ic(),under:x.under})),Et||Oe||ue||m.size>0}function bn(W){if(r=0,!s)return;let he=W-l;if(l&&he<1e3/60-3){r=requestAnimationFrame(bn);return}let Oe=l?Math.min(.05,(W-c)/1e3):1/60;l=l&&he<1e3/30?l+1e3/60:W,c=W,a||(u+=Oe);let tt=Mi(Oe,W);x.ready?M.render(g,d,Fe,Xe(De.dist),u):(n.setRenderTarget(null),n.clear()),i.onFrame?.(W,1e3/60),tt||!x.ready?r=requestAnimationFrame(bn):l=0}function Xt(){let W=Math.max(1,e.clientWidth),he=Math.max(1,e.clientHeight);U=W,It=he,n.setSize(W,he,!1),d.aspect=W/he,d.fov=W<700?30:24,Q=i.region?.(W,he)??{x0:-1,x1:1,y0:-1,y1:1},d.setViewOffset(W,he,-(Q.x0+Q.x1)/2*(W/2),(Q.y0+Q.y1)/2*(he/2),W,he),d.updateProjectionMatrix();let Oe=Ne;Ne=ae(),Oe!==Ne&&o&&(ne.dist*=Ne/Oe,De.dist*=Ne/Oe),ke(ne);let tt=Math.tan(d.fov*Hn/2),Ye=a?ne.dist:st.dist*Ne;i.onFit?.(((Q.x0+Q.x1)/2+1)/2*W,(1-(Q.y0+Q.y1)/2)/2*he,R/(Ye*tt)*he);let Et=n.getPixelRatio();M.setSize(Math.round(W*Et),Math.round(he*Et),Math.min(1,1.5/Et)),f()}Ne=1,Xt(),ne.dist=Ne,Object.assign(De,ne);let oi=new ResizeObserver(Xt);return oi.observe(e),f(),{get ready(){return o},get places(){return xn},setMoment(W){ai=(W.valueOf()-i.at.valueOf())/36e5,f()},setSky(W){au(W),x.relight(),f()},choose(W){ee(),we=W;let he=W===null?null:x.landmark(W);he&&(ne.gx=he.x,ne.gz=he.z,ne.dist=Math.min(ne.dist,Rt.clamp(he.reach*ts.pitch*7,.28,.6)),ne.el=Math.max(ne.el,24),ke(ne)),ut=-1,Ot(null),f()},home(){ee(),we=null,ut=-1,Ot(null),Object.assign(ne,{b:ne.b,el:31,dist:Ne,gx:q,gz:q}),f()},key(W){if(!o)return!1;let he=W==="ArrowLeft"?[-8,0,1]:W==="ArrowRight"?[8,0,1]:W==="ArrowUp"?[0,5,1]:W==="ArrowDown"?[0,-5,1]:W==="+"||W==="="?[0,0,.8]:W==="-"||W==="_"?[0,0,1.25]:null;return he?(ee(),ne.b+=he[0],ne.el+=he[1],ne.dist*=he[2],ke(ne),f(),!0):!1},setStill(W){a=W,W&&m.clear(),f()},setPixelRatio(W){n.setPixelRatio(W),Xt()},refit(){Xt()},dispose(){s=!1,cancelAnimationFrame(r),oi.disconnect(),e.removeEventListener("touchstart",Se),e.removeEventListener("touchmove",oe),e.removeEventListener("pointerdown",Pe),e.removeEventListener("pointermove",fe),e.removeEventListener("pointerup",Re),e.removeEventListener("pointercancel",Re),e.removeEventListener("pointerleave",Ue),e.removeEventListener("wheel",L),e.removeEventListener("dblclick",ve),e.removeEventListener("contextmenu",te),e.removeEventListener("webglcontextlost",Ce),x.dispose(),M.dispose(),b.dispose(),E.dispose(),S.dispose(),z.dispose(),V.dispose(),N.dispose(),H.dispose(),Z.dispose(),n.dispose()}}}var nx="Europe/Copenhagen",ix=new Intl.DateTimeFormat("en-GB",{timeZone:nx,year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23"});function lc(i){let e=Object.fromEntries(ix.formatToParts(new Date(i)).map(t=>[t.type,Number(t.value)]));return{y:e.year,m:e.month-1,d:e.day,min:e.hour*60+e.minute,s:e.second}}function cc(i,e,t,n){let s=Date.UTC(i,e,t,0,n),r=l=>{let c=lc(l);return Date.UTC(c.y,c.m,c.d,0,c.min,c.s)-Math.floor(l/1e3)*1e3},a=s-r(s),o=s-r(a);return o!==a&&(a=o),new Date(a)}var Po=i=>`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(Math.round(i%60)).padStart(2,"0")}`,sx=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],rx=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Su=(i,e,t)=>`${sx[new Date(Date.UTC(i,e,t)).getUTCDay()]} ${t} ${rx[e]}`;function Eu(i,e,t){let n=r=>Ql(cc(i,e,t,r)).el+.83,s=[];for(let r=0;r<1440;r+=20){let a=r+20;if(Math.sign(n(r))===Math.sign(n(a)))continue;let o=r,l=a;for(let c=0;c<12;c++){let u=(o+l)/2;Math.sign(n(u))===Math.sign(n(o))?o=u:l=u}s.push(Math.round((o+l)/2))}return s}var ax=["north","north-east","east","south-east","south","south-west","west","north-west"],bu=i=>ax[Math.round((i%360+360)%360/45)%8];function wu(i){return i?i.kind==="sun"?`Sun ${Math.max(0,Math.round(i.el))}\xB0 ${bu(i.az)}`:i.kind==="moon"?`Moon ${Math.round(i.el)}\xB0 ${bu(i.az)}`:"Night":""}var ox=0;function Tu(i){let e=`dial-${++ox}`,t=i.value,n=!1,s=document.createElement("div");s.className="dial",s.innerHTML=`<p class="dial-head"><span class="dial-label" id="${e}"></span><span class="dial-value"></span><span class="dial-note" hidden></span></p>
    <div class="dial-track" role="slider" tabindex="0" aria-labelledby="${e}" aria-valuemin="${i.min}" aria-valuemax="${i.max}">
      <div class="dial-scale"></div><span class="dial-needle" aria-hidden="true"></span></div>`;let r=R=>s.querySelector(R);r(".dial-label").textContent=i.label;let a=r(".dial-value"),o=r(".dial-note"),l=r(".dial-track"),c=r(".dial-scale"),u=Math.round((i.max-i.min)/i.step),f=i.every??10,h="";for(let R=0;R<=u;R+=i.draw??1)h+=`<i class="${R%f===0?"dial-tick dial-tick-long":"dial-tick"}" style="left:${R*i.gap}px"></i>`;let p=R=>{c.innerHTML=h+R.map(y=>`<b class="dial-mark" style="left:${(y-i.min)/i.step*i.gap}px"></b>`).join("")};p(i.marks??[]);let x=R=>Math.min(i.max,Math.max(i.min,Math.round(R/i.step)*i.step));function M(){a.textContent=i.format(t);let R=i.note?.(t)??"";o.hidden=!R,o.textContent=R,l.setAttribute("aria-valuenow",String(t)),l.setAttribute("aria-valuetext",(i.spoken??i.format)(t)),c.style.transform=`translate3d(${-((t-i.min)/i.step)*i.gap}px,0,0)`}function g(R){let y=x(R);y!==t&&(t=y,M(),i.onChange(t))}let d=null;l.addEventListener("pointerdown",R=>{n||(l.setPointerCapture(R.pointerId),d={id:R.pointerId,x:R.clientX,v:t},s.dataset.dragging="")}),l.addEventListener("pointermove",R=>{d&&d.id===R.pointerId&&g(d.v-(R.clientX-d.x)/i.gap*i.step)});let T=()=>{d=null,delete s.dataset.dragging};return l.addEventListener("pointerup",T),l.addEventListener("pointercancel",T),l.addEventListener("wheel",R=>{if(n)return;R.preventDefault();let y=Math.abs(R.deltaX)>Math.abs(R.deltaY)?R.deltaX:R.deltaY;g(t+Math.sign(y)*i.step)},{passive:!1}),l.addEventListener("keydown",R=>{if(n)return;let y=R.key,E=i.step*f,b=y==="ArrowRight"||y==="ArrowUp"?t+i.step:y==="ArrowLeft"||y==="ArrowDown"?t-i.step:y==="PageUp"?t+E:y==="PageDown"?t-E:y==="Home"?i.min:y==="End"?i.max:null;b!==null&&(R.preventDefault(),g(b))}),M(),{el:s,get value(){return t},setMarks(R){p(R)},refresh(){M()},setDisabled(R){n=R,l.tabIndex=R?-1:0,R?(l.setAttribute("aria-disabled","true"),s.dataset.disabled=""):(l.removeAttribute("aria-disabled"),delete s.dataset.disabled)}}}var Vn=i=>document.querySelector(i),qs=Vn(".ps"),hc=Vn(".ps canvas"),ns=Vn(".ps-label"),Au=Vn(".ps-read"),lx=Vn(".ps-hint"),uc=matchMedia("(prefers-reduced-motion: reduce)").matches,Cu=matchMedia("(pointer: coarse)").matches;Vn(".ps-count").textContent=So.toLocaleString("en-GB");var Xs=lc(Date.now()),Hi=[{label:"Today",y:Xs.y,m:Xs.m,d:Xs.d},{label:"21 June",y:Xs.y,m:5,d:21},{label:"21 December",y:Xs.y,m:11,d:21}],Vi=0,Lo=Math.round(Xs.min/5)*5,is=null,ri=null,dc=()=>cc(Hi[Vi].y,Hi[Vi].m,Hi[Vi].d,Lo),Pu=()=>Eu(Hi[Vi].y,Hi[Vi].m,Hi[Vi].d).map(i=>Math.round(i/5)*5),fc=Tu({label:"Hour",value:Lo,min:0,max:1435,step:5,gap:2,every:12,draw:3,marks:Pu(),format:Po,spoken:i=>`${Po(i)} in Copenhagen`,note:()=>wu(is?.light??null),onChange:i=>{Lo=i,ri?.setMoment(dc()),pc()}});Vn(".ps-dials").prepend(fc.el);function Iu(i,e,t){let n=Vn(i);e.forEach((s,r)=>{let a=document.createElement("button");a.type="button",a.className="ps-chip",a.setAttribute("role","radio"),a.textContent=s,a.setAttribute("aria-checked",String(r===0)),a.addEventListener("click",()=>{n.querySelectorAll("button").forEach((o,l)=>o.setAttribute("aria-checked",String(l===r))),t(r)}),n.append(a)})}Iu(".ps-day",Hi.map(i=>i.label),i=>{Vi=i,fc.setMarks(Pu()),ri?.setMoment(dc()),pc()});var cx=[null,"clear","rain","storm"];Iu(".ps-sky",["Forecast","Clear","Rain","Storm"],i=>ri?.setSky(cx[i]));function pc(){let i=Hi[Vi];if(!is){Au.textContent="";return}Au.innerHTML=is.arriving?`<span>${is.risen.toLocaleString("en-GB")} pins</span>`:`<span>${Su(i.y,i.m,i.d)} \xB7 ${Po(Lo)}</span><span>${is.weather}${is.source==="met"?" \xB7 MET Norway":""}</span>`}var Io=Vn(".ps-places");xn.forEach((i,e)=>{if(i.kind!=="building"||!i.fact)return;let t=document.createElement("option");t.value=String(e),t.textContent=i.name,Io.append(t)});Io.addEventListener("change",()=>{Io.value===""?ri?.home():ri?.choose(Number(Io.value))});lx.textContent=uc?"Motion is off: set the hour, the day and the sky.":Cu?"Press the pins \xB7 two fingers turn the table and go closer":"Press the pins \xB7 drag beside the table or right-drag to turn it \xB7 scroll to go closer";var hx=(i,e)=>{let t=hc.getBoundingClientRect(),n=l=>1-2*(l-t.top)/e,s=l=>-1+2*(l-t.left)/i,r=Vn(".ps-head").getBoundingClientRect(),a=Vn(".ps-dials").getBoundingClientRect(),o=n(a.top-14);return e>i*1.1?{x0:-1,x1:1,y0:o,y1:n(r.bottom+10)}:{x0:s(r.right+24),x1:1,y0:o,y1:n(40)}},Ru=()=>{qs.dataset.gl="off"};try{ri=Mu({canvas:hc,city:Ws?"city-fine.png":"city.png",marks:Ws?"landmarks-fine.png":"landmarks.png",phone:matchMedia("(max-width: 700px)").matches,pixelRatio:Math.min(devicePixelRatio||1,Cu?1.5:2),still:uc,at:new Date,region:hx,onReady:()=>{qs.dataset.gl="on",document.fonts?.ready.then(()=>ri?.refit())},onFail:Ru,onFit:(i,e,t)=>{qs.style.setProperty("--ring-x",`${i|0}px`),qs.style.setProperty("--ring-y",`${e|0}px`),qs.style.setProperty("--ring-d",`${t|0}px`)},onNews:i=>{is=i,fc.refresh(),pc()},onLabel:(i,e,t)=>{if(ns.hidden=i===null,i===null)return;ns.style.transform=`translate3d(${e.toFixed(1)}px,${t.toFixed(1)}px,0)`;let n=xn[i];ns.dataset.at!==String(i)&&(ns.dataset.at=String(i),ns.innerHTML="<b></b><span></span>",ns.querySelector("b").textContent=n.name,ns.querySelector("span").textContent=n.fact??"")}}),ri.setMoment(dc())}catch{Ru()}var ux=new IntersectionObserver(([i])=>ri?.setStill(uc||!i.isIntersecting),{threshold:.05});ux.observe(qs);hc.parentElement.addEventListener("keydown",i=>{ri?.key(i.key)&&i.preventDefault()});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
