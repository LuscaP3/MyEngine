import Oo from"https://cdn.skypack.dev/@dimforge/rapier3d-compat";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="178",bh=0,Bo=1,Sh=2,hl=1,dl=2,En=3,pn=0,Ot=1,$t=2,Wn=0,Pi=1,zo=2,ko=3,Ho=4,Eh=5,ai=100,Th=101,Ah=102,Rh=103,Ch=104,Ph=200,Ih=201,Lh=202,Dh=203,la=204,ha=205,Uh=206,Nh=207,Fh=208,Oh=209,Bh=210,zh=211,kh=212,Hh=213,Vh=214,da=0,ua=1,fa=2,Ui=3,pa=4,ma=5,_a=6,ga=7,eo=0,Gh=1,Wh=2,Xn=0,Xh=1,jh=2,qh=3,Yh=4,Kh=5,$h=6,Zh=7,Vo="attached",Jh="detached",ul=300,Ni=301,Fi=302,ya=303,xa=304,ms=306,jn=1e3,Vn=1001,hs=1002,Et=1003,fl=1004,sr=1005,Gt=1006,ts=1007,Rn=1008,mn=1009,pl=1010,ml=1011,dr=1012,to=1013,li=1014,sn=1015,xr=1016,no=1017,io=1018,ur=1020,_l=35902,gl=1021,yl=1022,Zt=1023,fr=1026,pr=1027,ro=1028,so=1029,xl=1030,ao=1031,oo=1033,ns=33776,is=33777,rs=33778,ss=33779,va=35840,wa=35841,Ma=35842,ba=35843,Sa=36196,Ea=37492,Ta=37496,Aa=37808,Ra=37809,Ca=37810,Pa=37811,Ia=37812,La=37813,Da=37814,Ua=37815,Na=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,as=36492,Ha=36494,Va=36495,vl=36283,Ga=36284,Wa=36285,Xa=36286,mr=2300,_r=2301,Ss=2302,Go=2400,Wo=2401,Xo=2402,Qh=2500,ed=0,wl=1,ja=2,td=3200,nd=3201,co=0,id=1,Hn="",wt="srgb",Ut="srgb-linear",ds="linear",nt="srgb",ui=7680,jo=519,rd=512,sd=513,ad=514,Ml=515,od=516,cd=517,ld=518,hd=519,qa=35044,qo="300 es",Cn=2e3,us=2001;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yo=1234567;const or=Math.PI/180,Oi=180/Math.PI;function an(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function ke(r,e,t){return Math.max(e,Math.min(t,r))}function lo(r,e){return(r%e+e)%e}function dd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ud(r,e,t){return r!==e?(t-r)/(e-r):0}function cr(r,e,t){return(1-t)*r+t*e}function fd(r,e,t,n){return cr(r,e,1-Math.exp(-t*n))}function pd(r,e=1){return e-Math.abs(lo(r,e*2)-e)}function md(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function _d(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yd(r,e){return r+Math.random()*(e-r)}function xd(r){return r*(.5-Math.random())}function vd(r){r!==void 0&&(Yo=r);let e=Yo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wd(r){return r*or}function Md(r){return r*Oi}function bd(r){return(r&r-1)===0&&r!==0}function Sd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ed(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Td(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),d=a((e+n)/2),h=s((e-n)/2),u=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*d,c*h,c*u,o*l);break;case"YZY":r.set(c*u,o*d,c*h,o*l);break;case"ZXZ":r.set(c*h,c*u,o*d,o*l);break;case"XZX":r.set(o*d,c*g,c*m,o*l);break;case"YXY":r.set(c*m,o*d,c*g,o*l);break;case"ZYZ":r.set(c*g,c*m,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ad={DEG2RAD:or,RAD2DEG:Oi,generateUUID:an,clamp:ke,euclideanModulo:lo,mapLinear:dd,inverseLerp:ud,lerp:cr,damp:fd,pingpong:pd,smoothstep:md,smootherstep:_d,randInt:gd,randFloat:yd,randFloatSpread:xd,seededRandom:vd,degToRad:wd,radToDeg:Md,isPowerOfTwo:bd,ceilPowerOfTwo:Sd,floorPowerOfTwo:Ed,setQuaternionFromProperEuler:Td,normalize:Qe,denormalize:nn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],d=n[i+2],h=n[i+3];const u=s[a+0],m=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(h!==y||c!==u||l!==m||d!==g){let _=1-o;const f=c*u+l*m+d*g+h*y,S=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const I=Math.sqrt(E),A=Math.atan2(I,f*S);_=Math.sin(_*A)/I,o=Math.sin(o*A)/I}const M=o*S;if(c=c*_+u*M,l=l*_+m*M,d=d*_+g*M,h=h*_+y*M,_===1-o){const I=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=I,l*=I,d*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],d=n[i+3],h=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+d*h+c*m-l*u,e[t+1]=c*g+d*u+l*h-o*m,e[t+2]=l*g+d*m+o*u-c*h,e[t+3]=d*g-o*h-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(i/2),h=o(s/2),u=c(n/2),m=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*d*h+l*m*g,this._y=l*m*h-u*d*g,this._z=l*d*g+u*m*h,this._w=l*d*h-u*m*g;break;case"YXZ":this._x=u*d*h+l*m*g,this._y=l*m*h-u*d*g,this._z=l*d*g-u*m*h,this._w=l*d*h+u*m*g;break;case"ZXY":this._x=u*d*h-l*m*g,this._y=l*m*h+u*d*g,this._z=l*d*g+u*m*h,this._w=l*d*h-u*m*g;break;case"ZYX":this._x=u*d*h-l*m*g,this._y=l*m*h+u*d*g,this._z=l*d*g-u*m*h,this._w=l*d*h+u*m*g;break;case"YZX":this._x=u*d*h+l*m*g,this._y=l*m*h+u*d*g,this._z=l*d*g-u*m*h,this._w=l*d*h-u*m*g;break;case"XZY":this._x=u*d*h-l*m*g,this._y=l*m*h-u*d*g,this._z=l*d*g+u*m*h,this._w=l*d*h+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+i*l-s*c,this._y=i*d+a*c+s*o-n*l,this._z=s*d+a*l+n*c-i*o,this._w=a*d-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ko.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ko.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),d=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*d,this.y=n+c*d+o*l-s*h,this.z=i+c*h+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Es.copy(this).projectOnVector(e),this.sub(Es)}reflect(e){return this.sub(Es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Es=new D,Ko=new Yn;class Ne{constructor(e,t,n,i,s,a,o,c,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],m=n[5],g=n[8],y=i[0],_=i[3],f=i[6],S=i[1],E=i[4],M=i[7],I=i[2],A=i[5],C=i[8];return s[0]=a*y+o*S+c*I,s[3]=a*_+o*E+c*A,s[6]=a*f+o*M+c*C,s[1]=l*y+d*S+h*I,s[4]=l*_+d*E+h*A,s[7]=l*f+d*M+h*C,s[2]=u*y+m*S+g*I,s[5]=u*_+m*E+g*A,s[8]=u*f+m*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*s*d+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,u=o*c-d*s,m=l*s-a*c,g=t*h+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(i*l-d*n)*y,e[2]=(o*n-i*a)*y,e[3]=u*y,e[4]=(d*t-i*c)*y,e[5]=(i*s-o*t)*y,e[6]=m*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ts.makeScale(e,t)),this}rotate(e){return this.premultiply(Ts.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ts.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ts=new Ne;function bl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function gr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rd(){const r=gr("canvas");return r.style.display="block",r}const $o={};function Ii(r){r in $o||($o[r]=!0,console.warn(r))}function Cd(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Pd(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Id(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zo=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jo=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){const r={enabled:!0,workingColorSpace:Ut,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?ds:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ii("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ii("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ut]:{primaries:e,whitePoint:n,transfer:ds,toXYZ:Zo,fromXYZ:Jo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Zo,fromXYZ:Jo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),r}const Xe=Ld();function In(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Li(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fi;class Dd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fi===void 0&&(fi=gr("canvas")),fi.width=e.width,fi.height=e.height;const i=fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=In(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ud=0;class ho{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=an(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(As(i[a].image)):s.push(As(i[a]))}else s=As(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function As(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Dd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nd=0;const Rs=new D;let Bt=class os extends Gi{constructor(e=os.DEFAULT_IMAGE,t=os.DEFAULT_MAPPING,n=Vn,i=Vn,s=Gt,a=Rn,o=Zt,c=mn,l=os.DEFAULT_ANISOTROPY,d=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=an(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rs).x}get height(){return this.source.getSize(Rs).y}get depth(){return this.source.getSize(Rs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=ul;Bt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],m=c[5],g=c[9],y=c[2],_=c[6],f=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(g-_)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(g+_)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,M=(m+1)/2,I=(f+1)/2,A=(d+u)/4,C=(h+y)/4,F=(g+_)/4;return E>M&&E>I?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=C/n):M>I?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=F/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=C/s,i=F/s),this.set(n,i,s,t),this}let S=Math.sqrt((_-g)*(_-g)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(_-g)/S,this.y=(h-y)/S,this.z=(u-d)/S,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fd extends Gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Bt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sl extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Od extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Ar.subVectors(this.max,$i),pi.subVectors(e.a,$i),mi.subVectors(e.b,$i),_i.subVectors(e.c,$i),Un.subVectors(mi,pi),Nn.subVectors(_i,mi),Zn.subVectors(pi,_i);let t=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Zn.z,Zn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Zn.z,0,-Zn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Zn.y,Zn.x,0];return!Cs(t,pi,mi,_i,Ar)||(t=[1,0,0,0,1,0,0,0,1],!Cs(t,pi,mi,_i,Ar))?!1:(Rr.crossVectors(Un,Nn),t=[Rr.x,Rr.y,Rr.z],Cs(t,pi,mi,_i,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xn=[new D,new D,new D,new D,new D,new D,new D,new D],Qt=new D,Tr=new Ln,pi=new D,mi=new D,_i=new D,Un=new D,Nn=new D,Zn=new D,$i=new D,Ar=new D,Rr=new D,Jn=new D;function Cs(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Jn.fromArray(r,s);const o=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),c=e.dot(Jn),l=t.dot(Jn),d=n.dot(Jn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Bd=new Ln,Zi=new D,Ps=new D;let _n=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(Ps)),this.expandByPoint(Zi.copy(e.center).sub(Ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const vn=new D,Is=new D,Cr=new D,Fn=new D,Ls=new D,Pr=new D,Ds=new D;class _s{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Is.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Is);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Cr),o=Fn.dot(this.direction),c=-Fn.dot(Cr),l=Fn.lengthSq(),d=Math.abs(1-a*a);let h,u,m,g;if(d>0)if(h=a*c-o,u=a*o-c,g=s*d,h>=0)if(u>=-g)if(u<=g){const y=1/d;h*=y,u*=y,m=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*c)+l;else u=-s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+u*(u+2*c)+l);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Is).addScaledVector(Cr,u),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,i,s){Ls.subVectors(t,e),Pr.subVectors(n,e),Ds.crossVectors(Ls,Pr);let a=this.direction.dot(Ds),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,e);const c=o*this.direction.dot(Pr.crossVectors(Fn,Pr));if(c<0)return null;const l=o*this.direction.dot(Ls.cross(Fn));if(l<0||c+l>a)return null;const d=-o*Fn.dot(Ds);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,i,s,a,o,c,l,d,h,u,m,g,y,_){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,d,h,u,m,g,y,_)}set(e,t,n,i,s,a,o,c,l,d,h,u,m,g,y,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=d,f[10]=h,f[14]=u,f[3]=m,f[7]=g,f[11]=y,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),s=1/gi.setFromMatrixColumn(e,1).length(),a=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,m=a*h,g=o*d,y=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,m=c*h,g=l*d,y=l*h;t[0]=u+y*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=y+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,m=c*h,g=l*d,y=l*h;t[0]=u-y*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=y-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,m=a*h,g=o*d,y=o*h;t[0]=c*d,t[4]=g*l-m,t[8]=u*l+y,t[1]=c*h,t[5]=y*l+u,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,m=a*l,g=o*c,y=o*l;t[0]=c*d,t[4]=y-u*h,t[8]=g*h+m,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=m*h+g,t[10]=u-y*h}else if(e.order==="XZY"){const u=a*c,m=a*l,g=o*c,y=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+y,t[5]=a*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*d,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,kd)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),On.crossVectors(n,Ht),On.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),On.crossVectors(n,Ht)),On.normalize(),Ir.crossVectors(Ht,On),i[0]=On.x,i[4]=Ir.x,i[8]=Ht.x,i[1]=On.y,i[5]=Ir.y,i[9]=Ht.y,i[2]=On.z,i[6]=Ir.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],m=n[13],g=n[2],y=n[6],_=n[10],f=n[14],S=n[3],E=n[7],M=n[11],I=n[15],A=i[0],C=i[4],F=i[8],b=i[12],w=i[1],L=i[5],G=i[9],k=i[13],X=i[2],J=i[6],W=i[10],te=i[14],H=i[3],ce=i[7],fe=i[11],be=i[15];return s[0]=a*A+o*w+c*X+l*H,s[4]=a*C+o*L+c*J+l*ce,s[8]=a*F+o*G+c*W+l*fe,s[12]=a*b+o*k+c*te+l*be,s[1]=d*A+h*w+u*X+m*H,s[5]=d*C+h*L+u*J+m*ce,s[9]=d*F+h*G+u*W+m*fe,s[13]=d*b+h*k+u*te+m*be,s[2]=g*A+y*w+_*X+f*H,s[6]=g*C+y*L+_*J+f*ce,s[10]=g*F+y*G+_*W+f*fe,s[14]=g*b+y*k+_*te+f*be,s[3]=S*A+E*w+M*X+I*H,s[7]=S*C+E*L+M*J+I*ce,s[11]=S*F+E*G+M*W+I*fe,s[15]=S*b+E*k+M*te+I*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],m=e[14],g=e[3],y=e[7],_=e[11],f=e[15];return g*(+s*c*h-i*l*h-s*o*u+n*l*u+i*o*m-n*c*m)+y*(+t*c*m-t*l*u+s*a*u-i*a*m+i*l*d-s*c*d)+_*(+t*l*h-t*o*m-s*a*h+n*a*m+s*o*d-n*l*d)+f*(-i*o*d-t*c*h+t*o*u+i*a*h-n*a*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],m=e[11],g=e[12],y=e[13],_=e[14],f=e[15],S=h*_*l-y*u*l+y*c*m-o*_*m-h*c*f+o*u*f,E=g*u*l-d*_*l-g*c*m+a*_*m+d*c*f-a*u*f,M=d*y*l-g*h*l+g*o*m-a*y*m-d*o*f+a*h*f,I=g*h*c-d*y*c-g*o*u+a*y*u+d*o*_-a*h*_,A=t*S+n*E+i*M+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=S*C,e[1]=(y*u*s-h*_*s-y*i*m+n*_*m+h*i*f-n*u*f)*C,e[2]=(o*_*s-y*c*s+y*i*l-n*_*l-o*i*f+n*c*f)*C,e[3]=(h*c*s-o*u*s-h*i*l+n*u*l+o*i*m-n*c*m)*C,e[4]=E*C,e[5]=(d*_*s-g*u*s+g*i*m-t*_*m-d*i*f+t*u*f)*C,e[6]=(g*c*s-a*_*s-g*i*l+t*_*l+a*i*f-t*c*f)*C,e[7]=(a*u*s-d*c*s+d*i*l-t*u*l-a*i*m+t*c*m)*C,e[8]=M*C,e[9]=(g*h*s-d*y*s-g*n*m+t*y*m+d*n*f-t*h*f)*C,e[10]=(a*y*s-g*o*s+g*n*l-t*y*l-a*n*f+t*o*f)*C,e[11]=(d*o*s-a*h*s-d*n*l+t*h*l+a*n*m-t*o*m)*C,e[12]=I*C,e[13]=(d*y*i-g*h*i+g*n*u-t*y*u-d*n*_+t*h*_)*C,e[14]=(g*o*i-a*y*i-g*n*c+t*y*c+a*n*_-t*o*_)*C,e[15]=(a*h*i-d*o*i+d*n*c-t*h*c-a*n*u+t*o*u)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,d*o+n,d*c-i*a,0,l*c-i*o,d*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,h=o+o,u=s*l,m=s*d,g=s*h,y=a*d,_=a*h,f=o*h,S=c*l,E=c*d,M=c*h,I=n.x,A=n.y,C=n.z;return i[0]=(1-(y+f))*I,i[1]=(m+M)*I,i[2]=(g-E)*I,i[3]=0,i[4]=(m-M)*A,i[5]=(1-(u+f))*A,i[6]=(_+S)*A,i[7]=0,i[8]=(g+E)*C,i[9]=(_-S)*C,i[10]=(1-(u+y))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=gi.set(i[0],i[1],i[2]).length();const a=gi.set(i[4],i[5],i[6]).length(),o=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const l=1/s,d=1/a,h=1/o;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=d,en.elements[5]*=d,en.elements[6]*=d,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Cn){const c=this.elements,l=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let m,g;if(o===Cn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===us)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Cn){const c=this.elements,l=1/(t-e),d=1/(n-i),h=1/(a-s),u=(t+e)*l,m=(n+i)*d;let g,y;if(o===Cn)g=(a+s)*h,y=-2*h;else if(o===us)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new D,en=new Fe,zd=new D(0,0,0),kd=new D(1,1,1),On=new D,Ir=new D,Ht=new D,Qo=new Fe,ec=new Yn;class cn{constructor(e=0,t=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],d=i[9],h=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hd=0;const tc=new D,yi=new Yn,wn=new Fe,Lr=new D,Ji=new D,Vd=new D,Gd=new Yn,nc=new D(1,0,0),ic=new D(0,1,0),rc=new D(0,0,1),sc={type:"added"},Wd={type:"removed"},xi={type:"childadded",child:null},Us={type:"childremoved",child:null};class ut extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new D,t=new cn,n=new Yn,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ne}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Ji,Lr,this.up):wn.lookAt(Lr,Ji,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(wn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),xi.child=e,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wd),Us.child=e,this.dispatchEvent(Us),Us.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),xi.child=e,this.dispatchEvent(xi),xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new D(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new D,Mn=new D,Ns=new D,bn=new D,vi=new D,wi=new D,ac=new D,Fs=new D,Os=new D,Bs=new D,zs=new Ze,ks=new Ze,Hs=new Ze;class rn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){tn.subVectors(i,t),Mn.subVectors(n,t),Ns.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(Mn),c=tn.dot(Ns),l=Mn.dot(Mn),d=Mn.dot(Ns),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(l*c-o*d)*u,g=(a*d-o*c)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,bn.x),c.addScaledVector(a,bn.y),c.addScaledVector(o,bn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return zs.setScalar(0),ks.setScalar(0),Hs.setScalar(0),zs.fromBufferAttribute(e,t),ks.fromBufferAttribute(e,n),Hs.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(zs,s.x),a.addScaledVector(ks,s.y),a.addScaledVector(Hs,s.z),a}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),Mn.subVectors(e,t),tn.cross(Mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),tn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;vi.subVectors(i,n),wi.subVectors(s,n),Fs.subVectors(e,n);const c=vi.dot(Fs),l=wi.dot(Fs);if(c<=0&&l<=0)return t.copy(n);Os.subVectors(e,i);const d=vi.dot(Os),h=wi.dot(Os);if(d>=0&&h<=d)return t.copy(i);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(vi,a);Bs.subVectors(e,s);const m=vi.dot(Bs),g=wi.dot(Bs);if(g>=0&&m<=g)return t.copy(s);const y=m*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(wi,o);const _=d*g-m*h;if(_<=0&&h-d>=0&&m-g>=0)return ac.subVectors(s,i),o=(h-d)/(h-d+(m-g)),t.copy(i).addScaledVector(ac,o);const f=1/(_+y+u);return a=y*f,o=u*f,t.copy(n).addScaledVector(vi,a).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Vs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=lo(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vs(a,s,e+1/3),this.g=Vs(a,s,e),this.b=Vs(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=Tl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Xe.workingToColorSpace(At.copy(this),e),Math.round(ke(At.r*255,0,255))*65536+Math.round(ke(At.g*255,0,255))*256+Math.round(ke(At.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(At.copy(this),t);const n=At.r,i=At.g,s=At.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=wt){Xe.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,i=At.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Dr);const n=cr(Bn.h,Dr.h,t),i=cr(Bn.s,Dr.s,t),s=cr(Bn.l,Dr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ie;Ie.NAMES=Tl;let Xd=0;class on extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=an(),this.name="",this.type="Material",this.blending=Pi,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ha,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gn extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new D,Ur=new Ve;let jd=0;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}}class Al extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rl extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qd=0;const qt=new Fe,Gs=new ut,Mi=new D,Vt=new Ln,Qi=new Ln,vt=new D;class Wt extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bl(e)?Rl:Al)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Gs.lookAt(e),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Vt.min,Qi.min),Vt.expandByPoint(vt),vt.addVectors(Vt.max,Qi.max),Vt.expandByPoint(vt)):(Vt.expandByPoint(Qi.min),Vt.expandByPoint(Qi.max))}Vt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)vt.fromBufferAttribute(o,l),c&&(Mi.fromBufferAttribute(e,l),vt.add(Mi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new D,c[F]=new D;const l=new D,d=new D,h=new D,u=new Ve,m=new Ve,g=new Ve,y=new D,_=new D;function f(F,b,w){l.fromBufferAttribute(n,F),d.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),u.fromBufferAttribute(s,F),m.fromBufferAttribute(s,b),g.fromBufferAttribute(s,w),d.sub(l),h.sub(l),m.sub(u),g.sub(u);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(L),_.copy(h).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(L),o[F].add(y),o[b].add(y),o[w].add(y),c[F].add(_),c[b].add(_),c[w].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let F=0,b=S.length;F<b;++F){const w=S[F],L=w.start,G=w.count;for(let k=L,X=L+G;k<X;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new D,M=new D,I=new D,A=new D;function C(F){I.fromBufferAttribute(i,F),A.copy(I);const b=o[F];E.copy(b),E.sub(I.multiplyScalar(I.dot(b))).normalize(),M.crossVectors(A,b);const L=M.dot(c[F])<0?-1:1;a.setXYZW(F,E.x,E.y,E.z,L)}for(let F=0,b=S.length;F<b;++F){const w=S[F],L=w.start,G=w.count;for(let k=L,X=L+G;k<X;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,a=new D,o=new D,c=new D,l=new D,d=new D,h=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),y=e.getX(u+1),_=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let m=0,g=0;for(let y=0,_=c.length;y<_;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*d;for(let f=0;f<d;f++)u[g++]=l[m++]}return new Dt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],m=e(u,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const m=l[h];d.push(m.toJSON(e.data))}d.length>0&&(i[c]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],h=s[l];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new Fe,Qn=new _s,Nr=new _n,cc=new D,Fr=new D,Or=new D,Br=new D,Ws=new D,zr=new D,lc=new D,kr=new D;class Mt extends ut{constructor(e=new Wt,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){zr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],h=s[c];d!==0&&(Ws.fromBufferAttribute(h,e),a?zr.addScaledVector(Ws,d):zr.addScaledVector(Ws.sub(t),d))}t.add(zr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Qn.copy(e.ray).recast(e.near),!(Nr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Nr,cc)===null||Qn.origin.distanceToSquared(cc)>(e.far-e.near)**2))&&(oc.copy(s).invert(),Qn.copy(e.ray).applyMatrix4(oc),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const _=u[g],f=a[_.materialIndex],S=Math.max(_.start,m.start),E=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let M=S,I=E;M<I;M+=3){const A=o.getX(M),C=o.getX(M+1),F=o.getX(M+2);i=Hr(this,f,e,n,l,d,h,A,C,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let _=g,f=y;_<f;_+=3){const S=o.getX(_),E=o.getX(_+1),M=o.getX(_+2);i=Hr(this,a,e,n,l,d,h,S,E,M),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const _=u[g],f=a[_.materialIndex],S=Math.max(_.start,m.start),E=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let M=S,I=E;M<I;M+=3){const A=M,C=M+1,F=M+2;i=Hr(this,f,e,n,l,d,h,A,C,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let _=g,f=y;_<f;_+=3){const S=_,E=_+1,M=_+2;i=Hr(this,a,e,n,l,d,h,S,E,M),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function Yd(r,e,t,n,i,s,a,o){let c;if(e.side===Ot?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===pn,o),c===null)return null;kr.copy(o),kr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(kr);return l<t.near||l>t.far?null:{distance:l,point:kr.clone(),object:r}}function Hr(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Fr),r.getVertexPosition(c,Or),r.getVertexPosition(l,Br);const d=Yd(r,e,t,n,Fr,Or,Br,lc);if(d){const h=new D;rn.getBarycoord(lc,Fr,Or,Br,h),i&&(d.uv=rn.getInterpolatedAttribute(i,o,c,l,h,new Ve)),s&&(d.uv1=rn.getInterpolatedAttribute(s,o,c,l,h,new Ve)),a&&(d.normal=rn.getInterpolatedAttribute(a,o,c,l,h,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new D,materialIndex:0};rn.getNormal(Fr,Or,Br,u.normal),d.face=u,d.barycoord=h}return d}class Wi extends Wt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],h=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(h,2));function g(y,_,f,S,E,M,I,A,C,F,b){const w=M/C,L=I/F,G=M/2,k=I/2,X=A/2,J=C+1,W=F+1;let te=0,H=0;const ce=new D;for(let fe=0;fe<W;fe++){const be=fe*L-k;for(let ze=0;ze<J;ze++){const it=ze*w-G;ce[y]=it*S,ce[_]=be*E,ce[f]=X,l.push(ce.x,ce.y,ce.z),ce[y]=0,ce[_]=0,ce[f]=A>0?1:-1,d.push(ce.x,ce.y,ce.z),h.push(ze/C),h.push(1-fe/F),te+=1}}for(let fe=0;fe<F;fe++)for(let be=0;be<C;be++){const ze=u+be+J*fe,it=u+be+J*(fe+1),q=u+(be+1)+J*(fe+1),ne=u+(be+1)+J*fe;c.push(ze,it,ne),c.push(it,q,ne),H+=6}o.addGroup(m,H,b),m+=H,u+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(r){const e={};for(let t=0;t<r.length;t++){const n=Bi(r[t]);for(const i in n)e[i]=n[i]}return e}function Kd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Cl(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const $d={clone:Bi,merge:It};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pl extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new D,hc=new Ve,dc=new Ve;class Lt extends Pl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,hc,dc),t.subVectors(dc,hc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,Si=1;class Qd extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Lt(bi,Si,e,t);i.layers=this.layers,this.add(i);const s=new Lt(bi,Si,e,t);s.layers=this.layers,this.add(s);const a=new Lt(bi,Si,e,t);a.layers=this.layers,this.add(a);const o=new Lt(bi,Si,e,t);o.layers=this.layers,this.add(o);const c=new Lt(bi,Si,e,t);c.layers=this.layers,this.add(c);const l=new Lt(bi,Si,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Il extends Bt{constructor(e=[],t=Ni,n,i,s,a,o,c,l,d){super(e,t,n,i,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eu extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Il(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Wn});s.uniforms.tEquirect.value=t;const a=new Mt(i,s),o=t.minFilter;return t.minFilter===Rn&&(t.minFilter=Gt),new Qd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class ci extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tu={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const _=t.getJointPose(y,n),f=this._getHandJoint(l,y);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tu)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ci;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ll extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new D;class uo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const uc=new D,fc=new Ze,pc=new Ze,iu=new D,mc=new Fe,Vr=new D,js=new _n,_c=new Fe,qs=new _s;class ru extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vo,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vr),this.boundingBox.expandByPoint(Vr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vr),this.boundingSphere.expandByPoint(Vr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(i),e.ray.intersectsSphere(js)!==!1&&(_c.copy(i).invert(),qs.copy(e.ray).applyMatrix4(_c),!(this.boundingBox!==null&&qs.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;fc.fromBufferAttribute(i.attributes.skinIndex,e),pc.fromBufferAttribute(i.attributes.skinWeight,e),uc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=pc.getComponent(s);if(a!==0){const o=fc.getComponent(s);mc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(iu.copy(uc).applyMatrix4(mc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Dl extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ul extends Bt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Et,d=Et,h,u){super(null,a,o,c,l,d,i,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gc=new Fe,su=new Fe;class fo{constructor(e=[],t=[]){this.uuid=an(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:su;gc.multiplyMatrices(o,t[s]),gc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ul(t,e,e,Zt,sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Dl),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ya extends Dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ei=new Fe,yc=new Fe,Gr=[],xc=new Ln,au=new Fe,er=new Mt,tr=new _n;class ou extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ya(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,au)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),xc.copy(e.boundingBox).applyMatrix4(Ei),this.boundingBox.union(xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),tr.copy(e.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),e.ray.intersectsSphere(tr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ei),yc.multiplyMatrices(n,Ei),er.matrixWorld=yc,er.raycast(e,Gr);for(let a=0,o=Gr.length;a<o;a++){const c=Gr[a];c.instanceId=s,c.object=this,t.push(c)}Gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ul(new Float32Array(i*this.count),i,this.count,ro,sn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ys=new D,cu=new D,lu=new Ne;let ri=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ys.subVectors(n,t).cross(cu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ys),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lu.getNormalMatrix(e),i=this.coplanarPoint(Ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ei=new _n,hu=new Ve(.5,.5),Wr=new D;class po{constructor(e=new ri,t=new ri,n=new ri,i=new ri,s=new ri,a=new ri){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],d=i[5],h=i[6],u=i[7],m=i[8],g=i[9],y=i[10],_=i[11],f=i[12],S=i[13],E=i[14],M=i[15];if(n[0].setComponents(c-s,u-l,_-m,M-f).normalize(),n[1].setComponents(c+s,u+l,_+m,M+f).normalize(),n[2].setComponents(c+a,u+d,_+g,M+S).normalize(),n[3].setComponents(c-a,u-d,_-g,M-S).normalize(),n[4].setComponents(c-o,u-h,_-y,M-E).normalize(),t===Cn)n[5].setComponents(c+o,u+h,_+y,M+E).normalize();else if(t===us)n[5].setComponents(o,h,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);const t=hu.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wr.x=i.normal.x>0?e.max.x:e.min.x,Wr.y=i.normal.y>0?e.max.y:e.min.y,Wr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nl extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fs=new D,ps=new D,vc=new Fe,nr=new _s,Xr=new _n,Ks=new D,wc=new D;class mo extends ut{constructor(e=new Wt,t=new Nl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)fs.fromBufferAttribute(t,i-1),ps.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fs.distanceTo(ps);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(i),Xr.radius+=s,e.ray.intersectsSphere(Xr)===!1)return;vc.copy(i).invert(),nr.copy(e.ray).applyMatrix4(vc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=m,_=g-1;y<_;y+=l){const f=d.getX(y),S=d.getX(y+1),E=jr(this,e,nr,c,f,S,y);E&&t.push(E)}if(this.isLineLoop){const y=d.getX(g-1),_=d.getX(m),f=jr(this,e,nr,c,y,_,g-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=m,_=g-1;y<_;y+=l){const f=jr(this,e,nr,c,y,y+1,y);f&&t.push(f)}if(this.isLineLoop){const y=jr(this,e,nr,c,g-1,m,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jr(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(fs.fromBufferAttribute(o,i),ps.fromBufferAttribute(o,s),t.distanceSqToSegment(fs,ps,Ks,wc)>n)return;Ks.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Ks);if(!(l<e.near||l>e.far))return{distance:l,point:wc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Mc=new D,bc=new D;class du extends mo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Mc.fromBufferAttribute(t,i),bc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mc.distanceTo(bc);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uu extends mo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fl extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sc=new Fe,Ka=new _s,qr=new _n,Yr=new D;class fu extends ut{constructor(e=new Wt,t=new Fl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),qr.radius+=s,e.ray.intersectsSphere(qr)===!1)return;Sc.copy(i).invert(),Ka.copy(e.ray).applyMatrix4(Sc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=u,y=m;g<y;g++){const _=l.getX(g);Yr.fromBufferAttribute(h,_),Ec(Yr,_,c,i,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=u,y=m;g<y;g++)Yr.fromBufferAttribute(h,g),Ec(Yr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ec(r,e,t,n,i,s,a){const o=Ka.distanceSqToPoint(r);if(o<t){const c=new D;Ka.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ol extends Bt{constructor(e,t,n=li,i,s,a,o=Et,c=Et,l,d=fr,h=1){if(d!==fr&&d!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,i,s,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _o extends Wt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],d=t/2,h=Math.PI/2*e,u=t,m=2*h+u,g=n*2+s,y=i+1,_=new D,f=new D;for(let S=0;S<=g;S++){let E=0,M=0,I=0,A=0;if(S<=n){const b=S/n,w=b*Math.PI/2;M=-d-e*Math.cos(w),I=e*Math.sin(w),A=-e*Math.cos(w),E=b*h}else if(S<=n+s){const b=(S-n)/s;M=-d+b*t,I=e,A=0,E=h+b*u}else{const b=(S-n-s)/n,w=b*Math.PI/2;M=d+e*Math.sin(w),I=e*Math.cos(w),A=e*Math.sin(w),E=h+u+b*h}const C=Math.max(0,Math.min(1,E/m));let F=0;S===0?F=.5/i:S===g&&(F=-.5/i);for(let b=0;b<=i;b++){const w=b/i,L=w*Math.PI*2,G=Math.sin(L),k=Math.cos(L);f.x=-I*k,f.y=M,f.z=I*G,o.push(f.x,f.y,f.z),_.set(-I*k,A,I*G),_.normalize(),c.push(_.x,_.y,_.z),l.push(w+F,C)}if(S>0){const b=(S-1)*y;for(let w=0;w<i;w++){const L=b+w,G=b+w+1,k=S*y+w,X=S*y+w+1;a.push(L,G,k),a.push(G,X,k)}}}this.setIndex(a),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class go extends Wt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new D,d=new Ve;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const m=n+h/t*i;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,c.push(d.x,d.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vr extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,d=c+1,h=e/o,u=t/c,m=[],g=[],y=[],_=[];for(let f=0;f<d;f++){const S=f*u-a;for(let E=0;E<l;E++){const M=E*h-s;g.push(M,-S,0),y.push(0,0,1),_.push(E/o),_.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const E=S+l*f,M=S+l*(f+1),I=S+1+l*(f+1),A=S+1+l*f;m.push(E,M,A),m.push(M,I,A)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(y,3)),this.setAttribute("uv",new bt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.widthSegments,e.heightSegments)}}class yo extends Wt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],h=new D,u=new D,m=[],g=[],y=[],_=[];for(let f=0;f<=n;f++){const S=[],E=f/n;let M=0;f===0&&a===0?M=.5/t:f===n&&c===Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){const A=I/t;h.x=-e*Math.cos(i+A*s)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(i+A*s)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),y.push(u.x,u.y,u.z),_.push(A+M,1-E),S.push(l++)}d.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){const E=d[f][S+1],M=d[f][S],I=d[f+1][S],A=d[f+1][S+1];(f!==0||a>0)&&m.push(E,M,A),(f!==n-1||c<Math.PI)&&m.push(M,I,A)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(y,3)),this.setAttribute("uv",new bt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xo extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gn extends xo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pu extends on{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mu extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _u extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Kr(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function gu(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function yu(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Bl(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class wr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xu extends wr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Go,endingEnd:Go}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wo:s=e,o=2*t-n;break;case Xo:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wo:a=e,c=2*n-t;break;case Xo:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),y=g*g,_=y*g,f=-u*_+2*u*y-u*g,S=(1+u)*_+(-1.5-2*u)*y+(-.5+u)*g+1,E=(-1-m)*_+(1.5+m)*y+.5*g,M=m*_-m*y;for(let I=0;I!==o;++I)s[I]=f*a[d+I]+S*a[l+I]+E*a[c+I]+M*a[h+I];return s}}class vu extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==o;++u)s[u]=a[l+u]*h+a[c+u]*d;return s}}class wu extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ln{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case _r:t=this.InterpolantFactoryMethodLinear;break;case Ss:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return _r;case this.InterpolantFactoryMethodSmooth:return Ss}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&gu(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ss,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,u=h-n,m=h+n;for(let g=0;g!==n;++g){const y=t[h+g];if(y!==t[u+g]||y!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[h+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=_r;class Xi extends ln{constructor(e,t,n){super(e,t,n)}}Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=mr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class zl extends ln{constructor(e,t,n,i){super(e,t,n,i)}}zl.prototype.ValueTypeName="color";class zi extends ln{constructor(e,t,n,i){super(e,t,n,i)}}zi.prototype.ValueTypeName="number";class Mu extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let d=l+o;l!==d;l+=4)Yn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class ki extends ln{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Mu(this.times,this.values,this.getValueSize(),e)}}ki.prototype.ValueTypeName="quaternion";ki.prototype.InterpolantFactoryMethodSmooth=void 0;class ji extends ln{constructor(e,t,n){super(e,t,n)}}ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=mr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Hi extends ln{constructor(e,t,n,i){super(e,t,n,i)}}Hi.prototype.ValueTypeName="vector";class bu{constructor(e="",t=-1,n=[],i=Qh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=an(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Eu(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(ln.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const d=yu(c);c=Tc(c,1,d),l=Tc(l,1,d),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new zi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(s);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,m,g,y){if(m.length!==0){const _=[],f=[];Bl(m,_,f,g),_.length!==0&&y.push(new h(u,_,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const m={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let y=0;y<u[g].morphTargets.length;y++)m[u[g].morphTargets[y]]=-1;for(const y in m){const _=[],f=[];for(let S=0;S!==u[g].morphTargets.length;++S){const E=u[g];_.push(E.time),f.push(E.morphTarget===y?1:0)}i.push(new zi(".morphTargetInfluence["+y+"]",_,f))}c=m.length*a}else{const m=".bones["+t[h].name+"]";n(Hi,m+".position",u,"pos",i),n(ki,m+".quaternion",u,"rot",i),n(Hi,m+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Su(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zi;case"vector":case"vector2":case"vector3":case"vector4":return Hi;case"color":return zl;case"quaternion":return ki;case"bool":case"boolean":return Xi;case"string":return ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Eu(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Su(r.type);if(r.times===void 0){const t=[],n=[];Bl(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Pn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Tu{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const Au=new Tu;class qi{constructor(e){this.manager=e!==void 0?e:Au,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sn={};class Ru extends Error{constructor(e,t){super(e),this.response=t}}class kl extends qi{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Sn[e]!==void 0){Sn[e].push({onLoad:t,onProgress:n,onError:i});return}Sn[e]=[],Sn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=Sn[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=u?parseInt(u):0,g=m!==0;let y=0;const _=new ReadableStream({start(f){S();function S(){h.read().then(({done:E,value:M})=>{if(E)f.close();else{y+=M.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let A=0,C=d.length;A<C;A++){const F=d[A];F.onProgress&&F.onProgress(I)}f.enqueue(M),S()}},E=>{f.error(E)})}}});return new Response(_)}else throw new Ru(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(u);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Pn.add(`file:${e}`,l);const d=Sn[e];delete Sn[e];for(let h=0,u=d.length;h<u;h++){const m=d[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const d=Sn[e];if(d===void 0)throw this.manager.itemError(e),l;delete Sn[e];for(let h=0,u=d.length;h<u;h++){const m=d[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const Ti=new WeakMap;class Cu extends qi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Pn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Ti.get(a);h===void 0&&(h=[],Ti.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=gr("img");function c(){d(),t&&t(this);const h=Ti.get(this)||[];for(let u=0;u<h.length;u++){const m=h[u];m.onLoad&&m.onLoad(this)}Ti.delete(this),s.manager.itemEnd(e)}function l(h){d(),i&&i(h),Pn.remove(`image:${e}`);const u=Ti.get(this)||[];for(let m=0;m<u.length;m++){const g=u[m];g.onError&&g.onError(h)}Ti.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Pn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Hl extends qi{constructor(e){super(e)}load(e,t,n,i){const s=new Bt,a=new Cu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class gs extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const $s=new Fe,Ac=new D,Rc=new D;class vo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ac),Rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rc),t.updateMatrixWorld(),$s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pu extends vo{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Oi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Iu extends gs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Pu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Cc=new Fe,ir=new D,Zs=new D;class Lu extends vo{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(ir),Zs.copy(n.position),Zs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zs),n.updateMatrixWorld(),i.makeTranslation(-ir.x,-ir.y,-ir.z),Cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc)}}class Du extends gs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ys extends Pl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Uu extends vo{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vl extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Uu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nu extends gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class lr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Js=new WeakMap;class Fu extends qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Pn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(Js.has(a)===!0)i&&i(Js.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Pn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Js.set(c,l),Pn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Pn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}}class Ou extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const wo="\\[\\]\\.:\\/",Bu=new RegExp("["+wo+"]","g"),Mo="[^"+wo+"]",zu="[^"+wo.replace("\\.","")+"]",ku=/((?:WC+[\/:])*)/.source.replace("WC",Mo),Hu=/(WCOD+)?/.source.replace("WCOD",zu),Vu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mo),Gu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mo),Wu=new RegExp("^"+ku+Hu+Vu+Gu+"$"),Xu=["material","materials","bones","map"];class ju{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bu,"")}static parseTrackName(e){const t=Wu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Xu.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=ju;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Pc(r,e,t,n){const i=qu(n);switch(t){case gl:return r*e;case ro:return r*e/i.components*i.byteLength;case so:return r*e/i.components*i.byteLength;case xl:return r*e*2/i.components*i.byteLength;case ao:return r*e*2/i.components*i.byteLength;case yl:return r*e*3/i.components*i.byteLength;case Zt:return r*e*4/i.components*i.byteLength;case oo:return r*e*4/i.components*i.byteLength;case ns:case is:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rs:case ss:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wa:case ba:return Math.max(r,16)*Math.max(e,8)/4;case va:case Ma:return Math.max(r,8)*Math.max(e,8)/2;case Sa:case Ea:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ta:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case La:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case as:case Ha:case Va:return Math.ceil(r/4)*Math.ceil(e/4)*16;case vl:case Ga:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Wa:case Xa:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qu(r){switch(r){case mn:case pl:return{byteLength:1,components:1};case dr:case ml:case xr:return{byteLength:2,components:1};case no:case io:return{byteLength:2,components:4};case li:case to:case sn:return{byteLength:4,components:1};case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gl(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Yu(r){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=r.SHORT;else if(l instanceof Uint32Array)m=r.UNSIGNED_INT;else if(l instanceof Int32Array)m=r.INT;else if(l instanceof Int8Array)m=r.BYTE;else if(l instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(r.bindBuffer(l,o),h.length===0)r.bufferSubData(l,0,d);else{h.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<h.length;m++){const g=h[u],y=h[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,h[u]=y)}h.length=u+1;for(let m=0,g=h.length;m<g;m++){const y=h[m];r.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
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
#endif`,Zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tf=`#ifdef USE_AOMAP
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
#endif`,rf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lf=`#ifdef USE_IRIDESCENCE
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
#endif`,hf=`#ifdef USE_BUMPMAP
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Vf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Gf=`ToonMaterial material;
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
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Yf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sp=`#if defined( USE_POINTS_UV )
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
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
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
#endif`,up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`#include <common>
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
}`,nm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,im=`#define DISTANCE
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
}`,rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,dm=`#define LAMBERT
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
}`,um=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,fm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,_m=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gm=`#define PHONG
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
}`,ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,xm=`#define STANDARD
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
}`,vm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,wm=`#define TOON
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
}`,Mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bm=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Am=`uniform float rotation;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Ku,alphahash_pars_fragment:$u,alphamap_fragment:Zu,alphamap_pars_fragment:Ju,alphatest_fragment:Qu,alphatest_pars_fragment:ef,aomap_fragment:tf,aomap_pars_fragment:nf,batching_pars_vertex:rf,batching_vertex:sf,begin_vertex:af,beginnormal_vertex:of,bsdfs:cf,iridescence_fragment:lf,bumpmap_pars_fragment:hf,clipping_planes_fragment:df,clipping_planes_pars_fragment:uf,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:_f,color_pars_vertex:gf,color_vertex:yf,common:xf,cube_uv_reflection_fragment:vf,defaultnormal_vertex:wf,displacementmap_pars_vertex:Mf,displacementmap_vertex:bf,emissivemap_fragment:Sf,emissivemap_pars_fragment:Ef,colorspace_fragment:Tf,colorspace_pars_fragment:Af,envmap_fragment:Rf,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Pf,envmap_pars_vertex:If,envmap_physical_pars_fragment:Vf,envmap_vertex:Lf,fog_vertex:Df,fog_pars_vertex:Uf,fog_fragment:Nf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Of,lightmap_pars_fragment:Bf,lights_lambert_fragment:zf,lights_lambert_pars_fragment:kf,lights_pars_begin:Hf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:jf,lights_physical_fragment:qf,lights_physical_pars_fragment:Yf,lights_fragment_begin:Kf,lights_fragment_maps:$f,lights_fragment_end:Zf,logdepthbuf_fragment:Jf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:tp,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:rp,map_particle_pars_fragment:sp,metalnessmap_fragment:ap,metalnessmap_pars_fragment:op,morphinstance_vertex:cp,morphcolor_vertex:lp,morphnormal_vertex:hp,morphtarget_pars_vertex:dp,morphtarget_vertex:up,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:_p,normal_vertex:gp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:vp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Mp,opaque_fragment:bp,packing:Sp,premultiplied_alpha_fragment:Ep,project_vertex:Tp,dithering_fragment:Ap,dithering_pars_fragment:Rp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Lp,shadowmap_vertex:Dp,shadowmask_pars_fragment:Up,skinbase_vertex:Np,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:zp,specularmap_pars_fragment:kp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Vp,transmission_fragment:Gp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:jp,uv_vertex:qp,worldpos_vertex:Yp,background_vert:Kp,background_frag:$p,backgroundCube_vert:Zp,backgroundCube_frag:Jp,cube_vert:Qp,cube_frag:em,depth_vert:tm,depth_frag:nm,distanceRGBA_vert:im,distanceRGBA_frag:rm,equirect_vert:sm,equirect_frag:am,linedashed_vert:om,linedashed_frag:cm,meshbasic_vert:lm,meshbasic_frag:hm,meshlambert_vert:dm,meshlambert_frag:um,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:_m,meshphong_vert:gm,meshphong_frag:ym,meshphysical_vert:xm,meshphysical_frag:vm,meshtoon_vert:wm,meshtoon_frag:Mm,points_vert:bm,points_frag:Sm,shadow_vert:Em,shadow_frag:Tm,sprite_vert:Am,sprite_frag:Rm},re={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},dn={basic:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:It([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:It([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:It([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:It([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:It([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:It([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:It([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:It([re.lights,re.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};dn.physical={uniforms:It([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const $r={r:0,b:0,g:0},ti=new cn,Cm=new Fe;function Pm(r,e,t,n,i,s,a){const o=new Ie(0);let c=s===!0?0:1,l,d,h=null,u=0,m=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function y(E){let M=!1;const I=g(E);I===null?f(o,c):I&&I.isColor&&(f(I,1),M=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(E,M){const I=g(M);I&&(I.isCubeTexture||I.mapping===ms)?(d===void 0&&(d=new Mt(new Wi(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Bi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),ti.copy(M.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),d.material.uniforms.envMap.value=I,d.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(ti)),d.material.toneMapped=Xe.getTransfer(I.colorSpace)!==nt,(h!==I||u!==I.version||m!==r.toneMapping)&&(d.material.needsUpdate=!0,h=I,u=I.version,m=r.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Mt(new vr(2,2),new qn({name:"BackgroundMaterial",uniforms:Bi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(I.colorSpace)!==nt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||u!==I.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,h=I,u=I.version,m=r.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,M){E.getRGB($r,Cl(r)),n.buffers.color.setClear($r.r,$r.g,$r.b,M,a)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),c=M,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:y,addToRenderList:_,dispose:S}}function Im(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(w,L,G,k,X){let J=!1;const W=h(k,G,L);s!==W&&(s=W,l(s.object)),J=m(w,k,G,X),J&&g(w,k,G,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(w,L,G,k),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return r.createVertexArray()}function l(w){return r.bindVertexArray(w)}function d(w){return r.deleteVertexArray(w)}function h(w,L,G){const k=G.wireframe===!0;let X=n[w.id];X===void 0&&(X={},n[w.id]=X);let J=X[L.id];J===void 0&&(J={},X[L.id]=J);let W=J[k];return W===void 0&&(W=u(c()),J[k]=W),W}function u(w){const L=[],G=[],k=[];for(let X=0;X<t;X++)L[X]=0,G[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:k,object:w,attributes:{},index:null}}function m(w,L,G,k){const X=s.attributes,J=L.attributes;let W=0;const te=G.getAttributes();for(const H in te)if(te[H].location>=0){const fe=X[H];let be=J[H];if(be===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(be=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(be=w.instanceColor)),fe===void 0||fe.attribute!==be||be&&fe.data!==be.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function g(w,L,G,k){const X={},J=L.attributes;let W=0;const te=G.getAttributes();for(const H in te)if(te[H].location>=0){let fe=J[H];fe===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor));const be={};be.attribute=fe,fe&&fe.data&&(be.data=fe.data),X[H]=be,W++}s.attributes=X,s.attributesNum=W,s.index=k}function y(){const w=s.newAttributes;for(let L=0,G=w.length;L<G;L++)w[L]=0}function _(w){f(w,0)}function f(w,L){const G=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;G[w]=1,k[w]===0&&(r.enableVertexAttribArray(w),k[w]=1),X[w]!==L&&(r.vertexAttribDivisor(w,L),X[w]=L)}function S(){const w=s.newAttributes,L=s.enabledAttributes;for(let G=0,k=L.length;G<k;G++)L[G]!==w[G]&&(r.disableVertexAttribArray(G),L[G]=0)}function E(w,L,G,k,X,J,W){W===!0?r.vertexAttribIPointer(w,L,G,X,J):r.vertexAttribPointer(w,L,G,k,X,J)}function M(w,L,G,k){y();const X=k.attributes,J=G.getAttributes(),W=L.defaultAttributeValues;for(const te in J){const H=J[te];if(H.location>=0){let ce=X[te];if(ce===void 0&&(te==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),te==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),ce!==void 0){const fe=ce.normalized,be=ce.itemSize,ze=e.get(ce);if(ze===void 0)continue;const it=ze.buffer,q=ze.type,ne=ze.bytesPerElement,we=q===r.INT||q===r.UNSIGNED_INT||ce.gpuType===to;if(ce.isInterleavedBufferAttribute){const le=ce.data,Me=le.stride,Ye=ce.offset;if(le.isInstancedInterleavedBuffer){for(let Ce=0;Ce<H.locationSize;Ce++)f(H.location+Ce,le.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<H.locationSize;Ce++)_(H.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,it);for(let Ce=0;Ce<H.locationSize;Ce++)E(H.location+Ce,be/H.locationSize,q,fe,Me*ne,(Ye+be/H.locationSize*Ce)*ne,we)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)f(H.location+le,ce.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<H.locationSize;le++)_(H.location+le);r.bindBuffer(r.ARRAY_BUFFER,it);for(let le=0;le<H.locationSize;le++)E(H.location+le,be/H.locationSize,q,fe,be*ne,be/H.locationSize*le*ne,we)}}else if(W!==void 0){const fe=W[te];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(H.location,fe);break;case 3:r.vertexAttrib3fv(H.location,fe);break;case 4:r.vertexAttrib4fv(H.location,fe);break;default:r.vertexAttrib1fv(H.location,fe)}}}}S()}function I(){F();for(const w in n){const L=n[w];for(const G in L){const k=L[G];for(const X in k)d(k[X].object),delete k[X];delete L[G]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const G in L){const k=L[G];for(const X in k)d(k[X].object),delete k[X];delete L[G]}delete n[w.id]}function C(w){for(const L in n){const G=n[L];if(G[w.id]===void 0)continue;const k=G[w.id];for(const X in k)d(k[X].object),delete k[X];delete G[w.id]}}function F(){b(),a=!0,s!==i&&(s=i,l(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:F,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:_,disableUnusedAttributes:S}}function Lm(r,e,t){let n;function i(l){n=l}function s(l,d){r.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,h){h!==0&&(r.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=d[g];t.update(m,n,1)}function c(l,d,h,u){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],d[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,h);let g=0;for(let y=0;y<h;y++)g+=d[y]*u[y];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Dm(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Zt&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==mn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==sn&&!F)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:I,maxSamples:A}}function Um(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ri,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||i;return i=u,n=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,m){const g=h.clippingPlanes,y=h.clipIntersection,_=h.clipShadows,f=r.get(h);if(!i||g===null||g.length===0||s&&!_)s?d(null):l();else{const S=s?0:n,E=S*4;let M=f.clippingState||null;c.value=M,M=d(g,u,E,m);for(let I=0;I!==E;++I)M[I]=t[I];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,m,g){const y=h!==null?h.length:0;let _=null;if(y!==0){if(_=c.value,g!==!0||_===null){const f=m+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(_===null||_.length<f)&&(_=new Float32Array(f));for(let E=0,M=m;E!==y;++E,M+=4)a.copy(h[E]).applyMatrix4(S,o),a.normal.toArray(_,M),_[M+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function Nm(r){let e=new WeakMap;function t(a,o){return o===ya?a.mapping=Ni:o===xa&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ya||o===xa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new eu(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ci=4,Ic=[.125,.215,.35,.446,.526,.582],oi=20,Qs=new ys,Lc=new Ie;let ea=null,ta=0,na=0,ia=!1;const si=(1+Math.sqrt(5))/2,Ai=1/si,Dc=[new D(-si,Ai,0),new D(si,Ai,0),new D(-Ai,0,si),new D(Ai,0,si),new D(0,si,-Ai),new D(0,si,Ai),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Fm=new D;class Uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Fm}=s;ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ea,ta,na),this._renderer.xr.enabled=ia,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:xr,format:Zt,colorSpace:Ut,depthBuffer:!1},i=Nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Om(s)),this._blurMaterial=Bm(s,e,t)}return i}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,n,i,s){const c=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(Lc),h.toneMapping=Xn,h.autoClear=!1;const g=new Gn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),y=new Mt(new Wi,g);let _=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,_=!0):(g.color.copy(Lc),_=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[S],s.y,s.z)):E===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[S]));const M=this._cubeSize;Zr(i,E*M,S>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(y,c),h.render(e,c)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=m,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ni||e.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Mt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Dc[(i-s-1)%Dc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Mt(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*oi-1),y=s/g,_=isFinite(s)?1+Math.floor(d*y):oi;_>oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${oi}`);const f=[];let S=0;for(let C=0;C<oi;++C){const F=C/y,b=Math.exp(-F*F/2);f.push(b),C===0?S+=b:C<_&&(S+=2*b)}for(let C=0;C<f.length;C++)f[C]=f[C]/S;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const M=this._sizeLods[i],I=3*M*(i>E-Ci?i-E+Ci:0),A=4*(this._cubeSize-M);Zr(t,I,A,3*M,2*M),c.setRenderTarget(t),c.render(h,Qs)}}function Om(r){const e=[],t=[],n=[];let i=r;const s=r-Ci+1+Ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Ci?c=Ic[a-r+Ci-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,y=3,_=2,f=1,S=new Float32Array(y*g*m),E=new Float32Array(_*g*m),M=new Float32Array(f*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,F=A>2?0:-1,b=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];S.set(b,y*g*A),E.set(u,_*g*A);const w=[A,A,A,A,A,A];M.set(w,f*g*A)}const I=new Wt;I.setAttribute("position",new Dt(S,y)),I.setAttribute("uv",new Dt(E,_)),I.setAttribute("faceIndex",new Dt(M,f)),e.push(I),i>Ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nc(r,e,t){const n=new hi(r,e,t);return n.texture.mapping=ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Bm(r,e,t){const n=new Float32Array(oi),i=new D(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Fc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Oc(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zm(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ya||c===xa,d=c===Ni||c===Fi;if(l||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Uc(r)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return l&&m&&m.height>0||d&&m&&i(m)?(t===null&&(t=new Uc(r)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function km(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ii("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hm(r,e,t,n){const i={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const m in u)e.update(u[m],r.ARRAY_BUFFER)}function l(h){const u=[],m=h.index,g=h.attributes.position;let y=0;if(m!==null){const S=m.array;y=m.version;for(let E=0,M=S.length;E<M;E+=3){const I=S[E+0],A=S[E+1],C=S[E+2];u.push(I,A,A,C,C,I)}}else if(g!==void 0){const S=g.array;y=g.version;for(let E=0,M=S.length/3-1;E<M;E+=3){const I=E+0,A=E+1,C=E+2;u.push(I,A,A,C,C,I)}}else return;const _=new(bl(u)?Rl:Al)(u,1);_.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,_)}function d(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function Vm(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,m){r.drawElements(n,m,s,u*a),t.update(m,n,1)}function l(u,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,u*a,g),t.update(m,n,g))}function d(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,u,0,g);let _=0;for(let f=0;f<g;f++)_+=m[f];t.update(_,n,1)}function h(u,m,g,y){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<u.length;f++)l(u[f]/a,m[f],y[f]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,s,u,0,y,0,g);let f=0;for(let S=0;S<g;S++)f+=m[S]*y[S];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Gm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wm(r,e,t){const n=new WeakMap,i=new Ze;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let M=o.attributes.position.count*E,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*I*4*h),C=new Sl(A,M,I,h);C.type=sn,C.needsUpdate=!0;const F=E*4;for(let w=0;w<h;w++){const L=_[w],G=f[w],k=S[w],X=M*I*4*w;for(let J=0;J<L.count;J++){const W=J*F;m===!0&&(i.fromBufferAttribute(L,J),A[X+W+0]=i.x,A[X+W+1]=i.y,A[X+W+2]=i.z,A[X+W+3]=0),g===!0&&(i.fromBufferAttribute(G,J),A[X+W+4]=i.x,A[X+W+5]=i.y,A[X+W+6]=i.z,A[X+W+7]=0),y===!0&&(i.fromBufferAttribute(k,J),A[X+W+8]=i.x,A[X+W+9]=i.y,A[X+W+10]=i.z,A[X+W+11]=k.itemSize===4?i.w:1)}}u={count:h,texture:C,size:new Ve(M,I)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let y=0;y<l.length;y++)m+=l[y];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Xm(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Wl=new Bt,Bc=new Ol(1,1),Xl=new Sl,jl=new Od,ql=new Il,zc=[],kc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Gc=new Float32Array(4);function Yi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=zc[i];if(s===void 0&&(s=new Float32Array(i),zc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function xt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function xs(r,e){let t=kc[e];t===void 0&&(t=new Int32Array(e),kc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function jm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),xt(t,e)}}function Ym(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),xt(t,e)}}function Km(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),xt(t,e)}}function $m(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Gc.set(n),r.uniformMatrix2fv(this.addr,!1,Gc),xt(t,n)}}function Zm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Vc.set(n),r.uniformMatrix3fv(this.addr,!1,Vc),xt(t,n)}}function Jm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Hc.set(n),r.uniformMatrix4fv(this.addr,!1,Hc),xt(t,n)}}function Qm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function e_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),xt(t,e)}}function t_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),xt(t,e)}}function n_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),xt(t,e)}}function i_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function r_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),xt(t,e)}}function s_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),xt(t,e)}}function a_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),xt(t,e)}}function o_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Bc.compareFunction=Ml,s=Bc):s=Wl,t.setTexture2D(e||s,i)}function c_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jl,i)}function l_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ql,i)}function h_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xl,i)}function d_(r){switch(r){case 5126:return jm;case 35664:return qm;case 35665:return Ym;case 35666:return Km;case 35674:return $m;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return r_;case 36295:return s_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return h_}}function u_(r,e){r.uniform1fv(this.addr,e)}function f_(r,e){const t=Yi(e,this.size,2);r.uniform2fv(this.addr,t)}function p_(r,e){const t=Yi(e,this.size,3);r.uniform3fv(this.addr,t)}function m_(r,e){const t=Yi(e,this.size,4);r.uniform4fv(this.addr,t)}function __(r,e){const t=Yi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function g_(r,e){const t=Yi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function y_(r,e){const t=Yi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function x_(r,e){r.uniform1iv(this.addr,e)}function v_(r,e){r.uniform2iv(this.addr,e)}function w_(r,e){r.uniform3iv(this.addr,e)}function M_(r,e){r.uniform4iv(this.addr,e)}function b_(r,e){r.uniform1uiv(this.addr,e)}function S_(r,e){r.uniform2uiv(this.addr,e)}function E_(r,e){r.uniform3uiv(this.addr,e)}function T_(r,e){r.uniform4uiv(this.addr,e)}function A_(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wl,s[a])}function R_(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||jl,s[a])}function C_(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ql,s[a])}function P_(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Xl,s[a])}function I_(r){switch(r){case 5126:return u_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return __;case 35675:return g_;case 35676:return y_;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return w_;case 35669:case 35673:return M_;case 5125:return b_;case 36294:return S_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}class L_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=d_(t.type)}}class D_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I_(t.type)}}class U_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function Wc(r,e){r.seq.push(e),r.map[e.id]=e}function N_(r,e,t){const n=r.name,i=n.length;for(ra.lastIndex=0;;){const s=ra.exec(n),a=ra.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Wc(t,l===void 0?new L_(o,r,e):new D_(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new U_(o),Wc(t,h)),t=h}}}class cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);N_(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Xc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const F_=37297;let O_=0;function B_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const jc=new Ne;function z_(r){Xe._getMatrix(jc,Xe.workingColorSpace,r);const e=`mat3( ${jc.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case ds:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function qc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+B_(r.getShaderSource(e),a)}else return i}function k_(r,e){const t=z_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function H_(r,e){let t;switch(e){case Xh:t="Linear";break;case jh:t="Reinhard";break;case qh:t="Cineon";break;case Yh:t="ACESFilmic";break;case $h:t="AgX";break;case Zh:t="Neutral";break;case Kh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jr=new D;function V_(){Xe.getLuminanceCoefficients(Jr);const r=Jr.x.toFixed(4),e=Jr.y.toFixed(4),t=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function W_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ar(r){return r!==""}function Yc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(r){return r.replace(j_,Y_)}const q_=new Map;function Y_(r,e){let t=Be[e];if(t===void 0){const n=q_.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $a(t)}const K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(r){return r.replace(K_,$_)}function $_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===dl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function J_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ni:case Fi:e="ENVMAP_TYPE_CUBE";break;case ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Fi:e="ENVMAP_MODE_REFRACTION";break}return e}function eg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case eo:e="ENVMAP_BLENDING_MULTIPLY";break;case Gh:e="ENVMAP_BLENDING_MIX";break;case Wh:e="ENVMAP_BLENDING_ADD";break}return e}function tg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ng(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Z_(t),l=J_(t),d=Q_(t),h=eg(t),u=tg(t),m=G_(t),g=W_(s),y=i.createProgram();let _,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),f.length>0&&(f+=`
`)):(_=[Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),f=[Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Xn?H_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,k_("linearToOutputTexel",t.outputColorSpace),V_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),a=$a(a),a=Yc(a,t),a=Kc(a,t),o=$a(o),o=Yc(o,t),o=Kc(o,t),a=$c(a),o=$c(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",t.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=S+_+a,M=S+f+o,I=Xc(i,i.VERTEX_SHADER,E),A=Xc(i,i.FRAGMENT_SHADER,M);i.attachShader(y,I),i.attachShader(y,A),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function C(L){if(r.debug.checkShaderErrors){const G=i.getProgramInfoLog(y).trim(),k=i.getShaderInfoLog(I).trim(),X=i.getShaderInfoLog(A).trim();let J=!0,W=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,y,I,A);else{const te=qc(i,I,"vertex"),H=qc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+te+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||X==="")&&(W=!1);W&&(L.diagnostics={runnable:J,programLog:G,vertexShader:{log:k,prefix:_},fragmentShader:{log:X,prefix:f}})}i.deleteShader(I),i.deleteShader(A),F=new cs(i,y),b=X_(i,y)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(y,F_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=A,this}let ig=0;class rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sg(e),t.set(e,n)),n}}class sg{constructor(e){this.id=ig++,this.code=e,this.usedTimes=0}}function ag(r,e,t,n,i,s,a){const o=new El,c=new rg,l=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function _(b,w,L,G,k){const X=G.fog,J=k.geometry,W=b.isMeshStandardMaterial?G.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),H=te&&te.mapping===ms?te.image.height:null,ce=g[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const fe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,be=fe!==void 0?fe.length:0;let ze=0;J.morphAttributes.position!==void 0&&(ze=1),J.morphAttributes.normal!==void 0&&(ze=2),J.morphAttributes.color!==void 0&&(ze=3);let it,q,ne,we;if(ce){const Je=dn[ce];it=Je.vertexShader,q=Je.fragmentShader}else it=b.vertexShader,q=b.fragmentShader,c.update(b),ne=c.getVertexShaderID(b),we=c.getFragmentShaderID(b);const le=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Ye=k.isInstancedMesh===!0,Ce=k.isBatchedMesh===!0,lt=!!b.map,ht=!!b.matcap,Ke=!!te,R=!!b.aoMap,Rt=!!b.lightMap,$e=!!b.bumpMap,st=!!b.normalMap,ye=!!b.displacementMap,je=!!b.emissiveMap,Ee=!!b.metalnessMap,Oe=!!b.roughnessMap,gt=b.anisotropy>0,T=b.clearcoat>0,x=b.dispersion>0,O=b.iridescence>0,j=b.sheen>0,K=b.transmission>0,V=gt&&!!b.anisotropyMap,xe=T&&!!b.clearcoatMap,se=T&&!!b.clearcoatNormalMap,ge=T&&!!b.clearcoatRoughnessMap,ve=O&&!!b.iridescenceMap,$=O&&!!b.iridescenceThicknessMap,de=j&&!!b.sheenColorMap,Re=j&&!!b.sheenRoughnessMap,Ae=!!b.specularMap,ie=!!b.specularColorMap,De=!!b.specularIntensityMap,P=K&&!!b.transmissionMap,ae=K&&!!b.thicknessMap,Z=!!b.gradientMap,pe=!!b.alphaMap,Q=b.alphaTest>0,Y=!!b.alphaHash,me=!!b.extensions;let Ue=Xn;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ue=r.toneMapping);const at={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:it,fragmentShader:q,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&k._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&k.instanceColor!==null,instancingMorph:Ye&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ut,alphaToCoverage:!!b.alphaToCoverage,map:lt,matcap:ht,envMap:Ke,envMapMode:Ke&&te.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:Rt,bumpMap:$e,normalMap:st,displacementMap:u&&ye,emissiveMap:je,normalMapObjectSpace:st&&b.normalMapType===id,normalMapTangentSpace:st&&b.normalMapType===co,metalnessMap:Ee,roughnessMap:Oe,anisotropy:gt,anisotropyMap:V,clearcoat:T,clearcoatMap:xe,clearcoatNormalMap:se,clearcoatRoughnessMap:ge,dispersion:x,iridescence:O,iridescenceMap:ve,iridescenceThicknessMap:$,sheen:j,sheenColorMap:de,sheenRoughnessMap:Re,specularMap:Ae,specularColorMap:ie,specularIntensityMap:De,transmission:K,transmissionMap:P,thicknessMap:ae,gradientMap:Z,opaque:b.transparent===!1&&b.blending===Pi&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:Y,combine:b.combine,mapUv:lt&&y(b.map.channel),aoMapUv:R&&y(b.aoMap.channel),lightMapUv:Rt&&y(b.lightMap.channel),bumpMapUv:$e&&y(b.bumpMap.channel),normalMapUv:st&&y(b.normalMap.channel),displacementMapUv:ye&&y(b.displacementMap.channel),emissiveMapUv:je&&y(b.emissiveMap.channel),metalnessMapUv:Ee&&y(b.metalnessMap.channel),roughnessMapUv:Oe&&y(b.roughnessMap.channel),anisotropyMapUv:V&&y(b.anisotropyMap.channel),clearcoatMapUv:xe&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:$&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:de&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Re&&y(b.sheenRoughnessMap.channel),specularMapUv:Ae&&y(b.specularMap.channel),specularColorMapUv:ie&&y(b.specularColorMap.channel),specularIntensityMapUv:De&&y(b.specularIntensityMap.channel),transmissionMapUv:P&&y(b.transmissionMap.channel),thicknessMapUv:ae&&y(b.thicknessMap.channel),alphaMapUv:pe&&y(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(st||gt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(lt||pe),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Me,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ue,decodeVideoTexture:lt&&b.map.isVideoTexture===!0&&Xe.getTransfer(b.map.colorSpace)===nt,decodeVideoTextureEmissive:je&&b.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(b.emissiveMap.colorSpace)===nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$t,flipSided:b.side===Ot,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:me&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&b.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function f(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)w.push(L),w.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(S(w,b),E(w,b),w.push(r.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function S(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function E(b,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),w.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const w=g[b.type];let L;if(w){const G=dn[w];L=$d.clone(G.uniforms)}else L=b.uniforms;return L}function I(b,w){let L;for(let G=0,k=d.length;G<k;G++){const X=d[G];if(X.cacheKey===w){L=X,++L.usedTimes;break}}return L===void 0&&(L=new ng(r,w,b,s),d.push(L)),L}function A(b){if(--b.usedTimes===0){const w=d.indexOf(b);d[w]=d[d.length-1],d.pop(),b.destroy()}}function C(b){c.remove(b)}function F(){c.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:M,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:d,dispose:F}}function og(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function cg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Jc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,u,m,g,y,_){let f=r[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:m,groupOrder:g,renderOrder:h.renderOrder,z:y,group:_},r[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=_),e++,f}function o(h,u,m,g,y,_){const f=a(h,u,m,g,y,_);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):t.push(f)}function c(h,u,m,g,y,_){const f=a(h,u,m,g,y,_);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,u){t.length>1&&t.sort(h||cg),n.length>1&&n.sort(u||Jc),i.length>1&&i.sort(u||Jc)}function d(){for(let h=e,u=r.length;h<u;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:d,sort:l}}function lg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Qc,r.set(n,[a])):i>=s.length?(a=new Qc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function hg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function dg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ug=0;function fg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pg(r){const e=new hg,t=dg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,s=new Fe,a=new Fe;function o(l){let d=0,h=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,y=0,_=0,f=0,S=0,E=0,M=0,I=0,A=0,C=0;l.sort(fg);for(let b=0,w=l.length;b<w;b++){const L=l[b],G=L.color,k=L.intensity,X=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=G.r*k,h+=G.g*k,u+=G.b*k;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],k);C++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const te=L.shadow,H=t.get(L);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=W,m++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(G).multiplyScalar(k),W.distance=X,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[y]=W;const te=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,te.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[y]=te.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=J,M++}y++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(G).multiplyScalar(k),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=W,_++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const te=L.shadow,H=t.get(L);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,H.shadowCameraNear=te.camera.near,H.shadowCameraFar=te.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(k),W.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[f]=W,f++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==_||F.hemiLength!==f||F.numDirectionalShadows!==S||F.numPointShadows!==E||F.numSpotShadows!==M||F.numSpotMaps!==I||F.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=_,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,F.directionalLength=m,F.pointLength=g,F.spotLength=y,F.rectAreaLength=_,F.hemiLength=f,F.numDirectionalShadows=S,F.numPointShadows=E,F.numSpotShadows=M,F.numSpotMaps=I,F.numLightProbes=C,n.version=ug++)}function c(l,d){let h=0,u=0,m=0,g=0,y=0;const _=d.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const E=l[f];if(E.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),h++}else if(E.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),m++}else if(E.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(_),a.identity(),s.copy(E.matrixWorld),s.premultiply(_),a.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(_),u++}else if(E.isHemisphereLight){const M=n.hemi[y];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(_),y++}}}return{setup:o,setupView:c,state:n}}function el(r){const e=new pg(r),t=[],n=[];function i(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function mg(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new el(r),e.set(i,[o])):s>=a.length?(o=new el(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yg(r,e,t){let n=new po;const i=new Ve,s=new Ve,a=new Ze,o=new mu({depthPacking:nd}),c=new _u,l={},d=t.maxTextureSize,h={[pn]:Ot,[Ot]:pn,[$t]:$t},u=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:_g,fragmentShader:gg}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mt(g,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let f=this.type;this.render=function(A,C,F){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;const b=r.getRenderTarget(),w=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Wn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=f!==En&&this.type===En,X=f===En&&this.type!==En;for(let J=0,W=A.length;J<W;J++){const te=A[J],H=te.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ce=H.getFrameExtents();if(i.multiply(ce),s.copy(H.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/ce.x),i.x=s.x*ce.x,H.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/ce.y),i.y=s.y*ce.y,H.mapSize.y=s.y)),H.map===null||k===!0||X===!0){const be=this.type!==En?{minFilter:Et,magFilter:Et}:{};H.map!==null&&H.map.dispose(),H.map=new hi(i.x,i.y,be),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const fe=H.getViewportCount();for(let be=0;be<fe;be++){const ze=H.getViewport(be);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),G.viewport(a),H.updateMatrices(te,be),n=H.getFrustum(),M(C,F,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===En&&S(H,F),H.needsUpdate=!1}f=this.type,_.needsUpdate=!1,r.setRenderTarget(b,w,L)};function S(A,C){const F=e.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hi(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,F,u,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,F,m,y,null)}function E(A,C,F,b){let w=null;const L=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)w=L;else if(w=F.isPointLight===!0?c:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const G=w.uuid,k=C.uuid;let X=l[G];X===void 0&&(X={},l[G]=X);let J=X[k];J===void 0&&(J=w.clone(),X[k]=J,C.addEventListener("dispose",I)),w=J}if(w.visible=C.visible,w.wireframe=C.wireframe,b===En?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:h[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const G=r.properties.get(w);G.light=F}return w}function M(A,C,F,b,w){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===En)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const k=e.update(A),X=A.material;if(Array.isArray(X)){const J=k.groups;for(let W=0,te=J.length;W<te;W++){const H=J[W],ce=X[H.materialIndex];if(ce&&ce.visible){const fe=E(A,ce,b,w);A.onBeforeShadow(r,A,C,F,k,fe,H),r.renderBufferDirect(F,null,k,fe,A,H),A.onAfterShadow(r,A,C,F,k,fe,H)}}}else if(X.visible){const J=E(A,X,b,w);A.onBeforeShadow(r,A,C,F,k,J,null),r.renderBufferDirect(F,null,k,J,A,null),A.onAfterShadow(r,A,C,F,k,J,null)}}const G=A.children;for(let k=0,X=G.length;k<X;k++)M(G[k],C,F,b,w)}function I(A){A.target.removeEventListener("dispose",I);for(const F in l){const b=l[F],w=A.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const xg={[da]:ua,[fa]:_a,[pa]:ga,[Ui]:ma,[ua]:da,[_a]:fa,[ga]:pa,[ma]:Ui};function vg(r,e){function t(){let P=!1;const ae=new Ze;let Z=null;const pe=new Ze(0,0,0,0);return{setMask:function(Q){Z!==Q&&!P&&(r.colorMask(Q,Q,Q,Q),Z=Q)},setLocked:function(Q){P=Q},setClear:function(Q,Y,me,Ue,at){at===!0&&(Q*=Ue,Y*=Ue,me*=Ue),ae.set(Q,Y,me,Ue),pe.equals(ae)===!1&&(r.clearColor(Q,Y,me,Ue),pe.copy(ae))},reset:function(){P=!1,Z=null,pe.set(-1,0,0,0)}}}function n(){let P=!1,ae=!1,Z=null,pe=null,Q=null;return{setReversed:function(Y){if(ae!==Y){const me=e.get("EXT_clip_control");Y?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ae=Y;const Ue=Q;Q=null,this.setClear(Ue)}},getReversed:function(){return ae},setTest:function(Y){Y?le(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(Y){Z!==Y&&!P&&(r.depthMask(Y),Z=Y)},setFunc:function(Y){if(ae&&(Y=xg[Y]),pe!==Y){switch(Y){case da:r.depthFunc(r.NEVER);break;case ua:r.depthFunc(r.ALWAYS);break;case fa:r.depthFunc(r.LESS);break;case Ui:r.depthFunc(r.LEQUAL);break;case pa:r.depthFunc(r.EQUAL);break;case ma:r.depthFunc(r.GEQUAL);break;case _a:r.depthFunc(r.GREATER);break;case ga:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Y}},setLocked:function(Y){P=Y},setClear:function(Y){Q!==Y&&(ae&&(Y=1-Y),r.clearDepth(Y),Q=Y)},reset:function(){P=!1,Z=null,pe=null,Q=null,ae=!1}}}function i(){let P=!1,ae=null,Z=null,pe=null,Q=null,Y=null,me=null,Ue=null,at=null;return{setTest:function(Je){P||(Je?le(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Je){ae!==Je&&!P&&(r.stencilMask(Je),ae=Je)},setFunc:function(Je,Jt,yn){(Z!==Je||pe!==Jt||Q!==yn)&&(r.stencilFunc(Je,Jt,yn),Z=Je,pe=Jt,Q=yn)},setOp:function(Je,Jt,yn){(Y!==Je||me!==Jt||Ue!==yn)&&(r.stencilOp(Je,Jt,yn),Y=Je,me=Jt,Ue=yn)},setLocked:function(Je){P=Je},setClear:function(Je){at!==Je&&(r.clearStencil(Je),at=Je)},reset:function(){P=!1,ae=null,Z=null,pe=null,Q=null,Y=null,me=null,Ue=null,at=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let d={},h={},u=new WeakMap,m=[],g=null,y=!1,_=null,f=null,S=null,E=null,M=null,I=null,A=null,C=new Ie(0,0,0),F=0,b=!1,w=null,L=null,G=null,k=null,X=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,te=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=te>=2);let ce=null,fe={};const be=r.getParameter(r.SCISSOR_BOX),ze=r.getParameter(r.VIEWPORT),it=new Ze().fromArray(be),q=new Ze().fromArray(ze);function ne(P,ae,Z,pe){const Q=new Uint8Array(4),Y=r.createTexture();r.bindTexture(P,Y),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let me=0;me<Z;me++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage2D(ae+me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q);return Y}const we={};we[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),we[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),we[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(r.DEPTH_TEST),a.setFunc(Ui),$e(!1),st(Bo),le(r.CULL_FACE),R(Wn);function le(P){d[P]!==!0&&(r.enable(P),d[P]=!0)}function Me(P){d[P]!==!1&&(r.disable(P),d[P]=!1)}function Ye(P,ae){return h[P]!==ae?(r.bindFramebuffer(P,ae),h[P]=ae,P===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ae),P===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ce(P,ae){let Z=m,pe=!1;if(P){Z=u.get(ae),Z===void 0&&(Z=[],u.set(ae,Z));const Q=P.textures;if(Z.length!==Q.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let Y=0,me=Q.length;Y<me;Y++)Z[Y]=r.COLOR_ATTACHMENT0+Y;Z.length=Q.length,pe=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,pe=!0);pe&&r.drawBuffers(Z)}function lt(P){return g!==P?(r.useProgram(P),g=P,!0):!1}const ht={[ai]:r.FUNC_ADD,[Th]:r.FUNC_SUBTRACT,[Ah]:r.FUNC_REVERSE_SUBTRACT};ht[Rh]=r.MIN,ht[Ch]=r.MAX;const Ke={[Ph]:r.ZERO,[Ih]:r.ONE,[Lh]:r.SRC_COLOR,[la]:r.SRC_ALPHA,[Bh]:r.SRC_ALPHA_SATURATE,[Fh]:r.DST_COLOR,[Uh]:r.DST_ALPHA,[Dh]:r.ONE_MINUS_SRC_COLOR,[ha]:r.ONE_MINUS_SRC_ALPHA,[Oh]:r.ONE_MINUS_DST_COLOR,[Nh]:r.ONE_MINUS_DST_ALPHA,[zh]:r.CONSTANT_COLOR,[kh]:r.ONE_MINUS_CONSTANT_COLOR,[Hh]:r.CONSTANT_ALPHA,[Vh]:r.ONE_MINUS_CONSTANT_ALPHA};function R(P,ae,Z,pe,Q,Y,me,Ue,at,Je){if(P===Wn){y===!0&&(Me(r.BLEND),y=!1);return}if(y===!1&&(le(r.BLEND),y=!0),P!==Eh){if(P!==_||Je!==b){if((f!==ai||M!==ai)&&(r.blendEquation(r.FUNC_ADD),f=ai,M=ai),Je)switch(P){case Pi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zo:r.blendFunc(r.ONE,r.ONE);break;case ko:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ho:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Pi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ko:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,E=null,I=null,A=null,C.set(0,0,0),F=0,_=P,b=Je}return}Q=Q||ae,Y=Y||Z,me=me||pe,(ae!==f||Q!==M)&&(r.blendEquationSeparate(ht[ae],ht[Q]),f=ae,M=Q),(Z!==S||pe!==E||Y!==I||me!==A)&&(r.blendFuncSeparate(Ke[Z],Ke[pe],Ke[Y],Ke[me]),S=Z,E=pe,I=Y,A=me),(Ue.equals(C)===!1||at!==F)&&(r.blendColor(Ue.r,Ue.g,Ue.b,at),C.copy(Ue),F=at),_=P,b=!1}function Rt(P,ae){P.side===$t?Me(r.CULL_FACE):le(r.CULL_FACE);let Z=P.side===Ot;ae&&(Z=!Z),$e(Z),P.blending===Pi&&P.transparent===!1?R(Wn):R(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const pe=P.stencilWrite;o.setTest(pe),pe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),je(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function $e(P){w!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),w=P)}function st(P){P!==bh?(le(r.CULL_FACE),P!==L&&(P===Bo?r.cullFace(r.BACK):P===Sh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),L=P}function ye(P){P!==G&&(W&&r.lineWidth(P),G=P)}function je(P,ae,Z){P?(le(r.POLYGON_OFFSET_FILL),(k!==ae||X!==Z)&&(r.polygonOffset(ae,Z),k=ae,X=Z)):Me(r.POLYGON_OFFSET_FILL)}function Ee(P){P?le(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function Oe(P){P===void 0&&(P=r.TEXTURE0+J-1),ce!==P&&(r.activeTexture(P),ce=P)}function gt(P,ae,Z){Z===void 0&&(ce===null?Z=r.TEXTURE0+J-1:Z=ce);let pe=fe[Z];pe===void 0&&(pe={type:void 0,texture:void 0},fe[Z]=pe),(pe.type!==P||pe.texture!==ae)&&(ce!==Z&&(r.activeTexture(Z),ce=Z),r.bindTexture(P,ae||we[P]),pe.type=P,pe.texture=ae)}function T(){const P=fe[ce];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{r.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{r.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{r.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{r.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{r.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{r.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{r.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(P){it.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),it.copy(P))}function Re(P){q.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Ae(P,ae){let Z=l.get(ae);Z===void 0&&(Z=new WeakMap,l.set(ae,Z));let pe=Z.get(P);pe===void 0&&(pe=r.getUniformBlockIndex(ae,P.name),Z.set(P,pe))}function ie(P,ae){const pe=l.get(ae).get(P);c.get(ae)!==pe&&(r.uniformBlockBinding(ae,pe,P.__bindingPointIndex),c.set(ae,pe))}function De(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ce=null,fe={},h={},u=new WeakMap,m=[],g=null,y=!1,_=null,f=null,S=null,E=null,M=null,I=null,A=null,C=new Ie(0,0,0),F=0,b=!1,w=null,L=null,G=null,k=null,X=null,it.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Me,bindFramebuffer:Ye,drawBuffers:Ce,useProgram:lt,setBlending:R,setMaterial:Rt,setFlipSided:$e,setCullFace:st,setLineWidth:ye,setPolygonOffset:je,setScissorTest:Ee,activeTexture:Oe,bindTexture:gt,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:ve,texImage3D:$,updateUBOMapping:Ae,uniformBlockBinding:ie,texStorage2D:se,texStorage3D:ge,texSubImage2D:j,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:xe,scissor:de,viewport:Re,reset:De}}function wg(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,d=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):gr("canvas")}function y(T,x,O){let j=1;const K=gt(T);if((K.width>O||K.height>O)&&(j=O/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const V=Math.floor(j*K.width),xe=Math.floor(j*K.height);h===void 0&&(h=g(V,xe));const se=x?g(V,xe):h;return se.width=V,se.height=xe,se.getContext("2d").drawImage(T,0,0,V,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+xe+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function _(T){return T.generateMipmaps}function f(T){r.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(T,x,O,j,K=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V=x;if(x===r.RED&&(O===r.FLOAT&&(V=r.R32F),O===r.HALF_FLOAT&&(V=r.R16F),O===r.UNSIGNED_BYTE&&(V=r.R8)),x===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(V=r.R8UI),O===r.UNSIGNED_SHORT&&(V=r.R16UI),O===r.UNSIGNED_INT&&(V=r.R32UI),O===r.BYTE&&(V=r.R8I),O===r.SHORT&&(V=r.R16I),O===r.INT&&(V=r.R32I)),x===r.RG&&(O===r.FLOAT&&(V=r.RG32F),O===r.HALF_FLOAT&&(V=r.RG16F),O===r.UNSIGNED_BYTE&&(V=r.RG8)),x===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(V=r.RG8UI),O===r.UNSIGNED_SHORT&&(V=r.RG16UI),O===r.UNSIGNED_INT&&(V=r.RG32UI),O===r.BYTE&&(V=r.RG8I),O===r.SHORT&&(V=r.RG16I),O===r.INT&&(V=r.RG32I)),x===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(V=r.RGB8UI),O===r.UNSIGNED_SHORT&&(V=r.RGB16UI),O===r.UNSIGNED_INT&&(V=r.RGB32UI),O===r.BYTE&&(V=r.RGB8I),O===r.SHORT&&(V=r.RGB16I),O===r.INT&&(V=r.RGB32I)),x===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(V=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(V=r.RGBA16UI),O===r.UNSIGNED_INT&&(V=r.RGBA32UI),O===r.BYTE&&(V=r.RGBA8I),O===r.SHORT&&(V=r.RGBA16I),O===r.INT&&(V=r.RGBA32I)),x===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(V=r.RGB9_E5),x===r.RGBA){const xe=K?ds:Xe.getTransfer(j);O===r.FLOAT&&(V=r.RGBA32F),O===r.HALF_FLOAT&&(V=r.RGBA16F),O===r.UNSIGNED_BYTE&&(V=xe===nt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(V=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(V=r.RGB5_A1)}return(V===r.R16F||V===r.R32F||V===r.RG16F||V===r.RG32F||V===r.RGBA16F||V===r.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function M(T,x){let O;return T?x===null||x===li||x===ur?O=r.DEPTH24_STENCIL8:x===sn?O=r.DEPTH32F_STENCIL8:x===dr&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===li||x===ur?O=r.DEPTH_COMPONENT24:x===sn?O=r.DEPTH_COMPONENT32F:x===dr&&(O=r.DEPTH_COMPONENT16),O}function I(T,x){return _(T)===!0||T.isFramebufferTexture&&T.minFilter!==Et&&T.minFilter!==Gt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),F(x),x.isVideoTexture&&d.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),w(x)}function F(T){const x=n.get(T);if(x.__webglInit===void 0)return;const O=T.source,j=u.get(O);if(j){const K=j[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(T),Object.keys(j).length===0&&u.delete(O)}n.remove(T)}function b(T){const x=n.get(T);r.deleteTexture(x.__webglTexture);const O=T.source,j=u.get(O);delete j[x.__cacheKey],a.memory.textures--}function w(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let K=0;K<x.__webglFramebuffer[j].length;K++)r.deleteFramebuffer(x.__webglFramebuffer[j][K]);else r.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)r.deleteFramebuffer(x.__webglFramebuffer[j]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=T.textures;for(let j=0,K=O.length;j<K;j++){const V=n.get(O[j]);V.__webglTexture&&(r.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(O[j])}n.remove(T)}let L=0;function G(){L=0}function k(){const T=L;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),L+=1,T}function X(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function J(T,x){const O=n.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(O,T,x);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+x)}function W(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){we(O,T,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+x)}function te(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){we(O,T,x);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+x)}function H(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){le(O,T,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+x)}const ce={[jn]:r.REPEAT,[Vn]:r.CLAMP_TO_EDGE,[hs]:r.MIRRORED_REPEAT},fe={[Et]:r.NEAREST,[fl]:r.NEAREST_MIPMAP_NEAREST,[sr]:r.NEAREST_MIPMAP_LINEAR,[Gt]:r.LINEAR,[ts]:r.LINEAR_MIPMAP_NEAREST,[Rn]:r.LINEAR_MIPMAP_LINEAR},be={[rd]:r.NEVER,[hd]:r.ALWAYS,[sd]:r.LESS,[Ml]:r.LEQUAL,[ad]:r.EQUAL,[ld]:r.GEQUAL,[od]:r.GREATER,[cd]:r.NOTEQUAL};function ze(T,x){if(x.type===sn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Gt||x.magFilter===ts||x.magFilter===sr||x.magFilter===Rn||x.minFilter===Gt||x.minFilter===ts||x.minFilter===sr||x.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,ce[x.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,ce[x.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,ce[x.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,fe[x.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Et||x.minFilter!==sr&&x.minFilter!==Rn||x.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function it(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const j=x.source;let K=u.get(j);K===void 0&&(K={},u.set(j,K));const V=X(x);if(V!==T.__cacheKey){K[V]===void 0&&(K[V]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[V].usedTimes++;const xe=K[T.__cacheKey];xe!==void 0&&(K[T.__cacheKey].usedTimes--,xe.usedTimes===0&&b(x)),T.__cacheKey=V,T.__webglTexture=K[V].texture}return O}function q(T,x,O){return Math.floor(Math.floor(T/O)/x)}function ne(T,x,O,j){const V=T.updateRanges;if(V.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,O,j,x.data);else{V.sort(($,de)=>$.start-de.start);let xe=0;for(let $=1;$<V.length;$++){const de=V[xe],Re=V[$],Ae=de.start+de.count,ie=q(Re.start,x.width,4),De=q(de.start,x.width,4);Re.start<=Ae+1&&ie===De&&q(Re.start+Re.count-1,x.width,4)===ie?de.count=Math.max(de.count,Re.start+Re.count-de.start):(++xe,V[xe]=Re)}V.length=xe+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),ge=r.getParameter(r.UNPACK_SKIP_PIXELS),ve=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let $=0,de=V.length;$<de;$++){const Re=V[$],Ae=Math.floor(Re.start/4),ie=Math.ceil(Re.count/4),De=Ae%x.width,P=Math.floor(Ae/x.width),ae=ie,Z=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,De),r.pixelStorei(r.UNPACK_SKIP_ROWS,P),t.texSubImage2D(r.TEXTURE_2D,0,De,P,ae,Z,O,j,x.data)}T.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,ve)}}function we(T,x,O){let j=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=r.TEXTURE_3D);const K=it(T,x),V=x.source;t.bindTexture(j,T.__webglTexture,r.TEXTURE0+O);const xe=n.get(V);if(V.version!==xe.__version||K===!0){t.activeTexture(r.TEXTURE0+O);const se=Xe.getPrimaries(Xe.workingColorSpace),ge=x.colorSpace===Hn?null:Xe.getPrimaries(x.colorSpace),ve=x.colorSpace===Hn||se===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let $=y(x.image,!1,i.maxTextureSize);$=Oe(x,$);const de=s.convert(x.format,x.colorSpace),Re=s.convert(x.type);let Ae=E(x.internalFormat,de,Re,x.colorSpace,x.isVideoTexture);ze(j,x);let ie;const De=x.mipmaps,P=x.isVideoTexture!==!0,ae=xe.__version===void 0||K===!0,Z=V.dataReady,pe=I(x,$);if(x.isDepthTexture)Ae=M(x.format===pr,x.type),ae&&(P?t.texStorage2D(r.TEXTURE_2D,1,Ae,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,Ae,$.width,$.height,0,de,Re,null));else if(x.isDataTexture)if(De.length>0){P&&ae&&t.texStorage2D(r.TEXTURE_2D,pe,Ae,De[0].width,De[0].height);for(let Q=0,Y=De.length;Q<Y;Q++)ie=De[Q],P?Z&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,ie.width,ie.height,de,Re,ie.data):t.texImage2D(r.TEXTURE_2D,Q,Ae,ie.width,ie.height,0,de,Re,ie.data);x.generateMipmaps=!1}else P?(ae&&t.texStorage2D(r.TEXTURE_2D,pe,Ae,$.width,$.height),Z&&ne(x,$,de,Re)):t.texImage2D(r.TEXTURE_2D,0,Ae,$.width,$.height,0,de,Re,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){P&&ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Ae,De[0].width,De[0].height,$.depth);for(let Q=0,Y=De.length;Q<Y;Q++)if(ie=De[Q],x.format!==Zt)if(de!==null)if(P){if(Z)if(x.layerUpdates.size>0){const me=Pc(ie.width,ie.height,x.format,x.type);for(const Ue of x.layerUpdates){const at=ie.data.subarray(Ue*me/ie.data.BYTES_PER_ELEMENT,(Ue+1)*me/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,Ue,ie.width,ie.height,1,de,at)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ie.width,ie.height,$.depth,de,ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,Ae,ie.width,ie.height,$.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?Z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ie.width,ie.height,$.depth,de,Re,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,Ae,ie.width,ie.height,$.depth,0,de,Re,ie.data)}else{P&&ae&&t.texStorage2D(r.TEXTURE_2D,pe,Ae,De[0].width,De[0].height);for(let Q=0,Y=De.length;Q<Y;Q++)ie=De[Q],x.format!==Zt?de!==null?P?Z&&t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,ie.width,ie.height,de,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,Ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?Z&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,ie.width,ie.height,de,Re,ie.data):t.texImage2D(r.TEXTURE_2D,Q,Ae,ie.width,ie.height,0,de,Re,ie.data)}else if(x.isDataArrayTexture)if(P){if(ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Ae,$.width,$.height,$.depth),Z)if(x.layerUpdates.size>0){const Q=Pc($.width,$.height,x.format,x.type);for(const Y of x.layerUpdates){const me=$.data.subarray(Y*Q/$.data.BYTES_PER_ELEMENT,(Y+1)*Q/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,$.width,$.height,1,de,Re,me)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,de,Re,$.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,$.width,$.height,$.depth,0,de,Re,$.data);else if(x.isData3DTexture)P?(ae&&t.texStorage3D(r.TEXTURE_3D,pe,Ae,$.width,$.height,$.depth),Z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,de,Re,$.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,$.width,$.height,$.depth,0,de,Re,$.data);else if(x.isFramebufferTexture){if(ae)if(P)t.texStorage2D(r.TEXTURE_2D,pe,Ae,$.width,$.height);else{let Q=$.width,Y=$.height;for(let me=0;me<pe;me++)t.texImage2D(r.TEXTURE_2D,me,Ae,Q,Y,0,de,Re,null),Q>>=1,Y>>=1}}else if(De.length>0){if(P&&ae){const Q=gt(De[0]);t.texStorage2D(r.TEXTURE_2D,pe,Ae,Q.width,Q.height)}for(let Q=0,Y=De.length;Q<Y;Q++)ie=De[Q],P?Z&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,de,Re,ie):t.texImage2D(r.TEXTURE_2D,Q,Ae,de,Re,ie);x.generateMipmaps=!1}else if(P){if(ae){const Q=gt($);t.texStorage2D(r.TEXTURE_2D,pe,Ae,Q.width,Q.height)}Z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Re,$)}else t.texImage2D(r.TEXTURE_2D,0,Ae,de,Re,$);_(x)&&f(j),xe.__version=V.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function le(T,x,O){if(x.image.length!==6)return;const j=it(T,x),K=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+O);const V=n.get(K);if(K.version!==V.__version||j===!0){t.activeTexture(r.TEXTURE0+O);const xe=Xe.getPrimaries(Xe.workingColorSpace),se=x.colorSpace===Hn?null:Xe.getPrimaries(x.colorSpace),ge=x.colorSpace===Hn||xe===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,$=x.image[0]&&x.image[0].isDataTexture,de=[];for(let Y=0;Y<6;Y++)!ve&&!$?de[Y]=y(x.image[Y],!0,i.maxCubemapSize):de[Y]=$?x.image[Y].image:x.image[Y],de[Y]=Oe(x,de[Y]);const Re=de[0],Ae=s.convert(x.format,x.colorSpace),ie=s.convert(x.type),De=E(x.internalFormat,Ae,ie,x.colorSpace),P=x.isVideoTexture!==!0,ae=V.__version===void 0||j===!0,Z=K.dataReady;let pe=I(x,Re);ze(r.TEXTURE_CUBE_MAP,x);let Q;if(ve){P&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,De,Re.width,Re.height);for(let Y=0;Y<6;Y++){Q=de[Y].mipmaps;for(let me=0;me<Q.length;me++){const Ue=Q[me];x.format!==Zt?Ae!==null?P?Z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,Ue.width,Ue.height,Ae,Ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,De,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,Ue.width,Ue.height,Ae,ie,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,De,Ue.width,Ue.height,0,Ae,ie,Ue.data)}}}else{if(Q=x.mipmaps,P&&ae){Q.length>0&&pe++;const Y=gt(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,De,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if($){P?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,de[Y].width,de[Y].height,Ae,ie,de[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,De,de[Y].width,de[Y].height,0,Ae,ie,de[Y].data);for(let me=0;me<Q.length;me++){const at=Q[me].image[Y].image;P?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,at.width,at.height,Ae,ie,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,De,at.width,at.height,0,Ae,ie,at.data)}}else{P?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ae,ie,de[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,De,Ae,ie,de[Y]);for(let me=0;me<Q.length;me++){const Ue=Q[me];P?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,Ae,ie,Ue.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,De,Ae,ie,Ue.image[Y])}}}_(x)&&f(r.TEXTURE_CUBE_MAP),V.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Me(T,x,O,j,K,V){const xe=s.convert(O.format,O.colorSpace),se=s.convert(O.type),ge=E(O.internalFormat,xe,se,O.colorSpace),ve=n.get(x),$=n.get(O);if($.__renderTarget=x,!ve.__hasExternalTextures){const de=Math.max(1,x.width>>V),Re=Math.max(1,x.height>>V);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,V,ge,de,Re,x.depth,0,xe,se,null):t.texImage2D(K,V,ge,de,Re,0,xe,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),je(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,K,$.__webglTexture,0,ye(x)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,K,$.__webglTexture,V),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(T,x,O){if(r.bindRenderbuffer(r.RENDERBUFFER,T),x.depthBuffer){const j=x.depthTexture,K=j&&j.isDepthTexture?j.type:null,V=M(x.stencilBuffer,K),xe=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=ye(x);je(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,V,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,V,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,V,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,T)}else{const j=x.textures;for(let K=0;K<j.length;K++){const V=j[K],xe=s.convert(V.format,V.colorSpace),se=s.convert(V.type),ge=E(V.internalFormat,xe,se,V.colorSpace),ve=ye(x);O&&je(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,ge,x.width,x.height):je(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,ge,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ge,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const K=j.__webglTexture,V=ye(x);if(x.depthTexture.format===fr)je(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(x.depthTexture.format===pr)je(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function lt(T){const x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=j}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const j=T.texture.mipmaps;j&&j.length>0?Ce(x.__webglFramebuffer[0],T):Ce(x.__webglFramebuffer,T)}else if(O){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=r.createRenderbuffer(),Ye(x.__webglDepthbuffer[j],T,!1);else{const K=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,V),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,V)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ye(x.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,V),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,V)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(T,x,O){const j=n.get(T);x!==void 0&&Me(j.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&lt(T)}function Ke(T){const x=T.texture,O=n.get(T),j=n.get(x);T.addEventListener("dispose",C);const K=T.textures,V=T.isWebGLCubeRenderTarget===!0,xe=K.length>1;if(xe||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=x.version,a.memory.textures++),V){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let ge=0;ge<x.mipmaps.length;ge++)O.__webglFramebuffer[se][ge]=r.createFramebuffer()}else O.__webglFramebuffer[se]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)O.__webglFramebuffer[se]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(xe)for(let se=0,ge=K.length;se<ge;se++){const ve=n.get(K[se]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&je(T)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<K.length;se++){const ge=K[se];O.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const ve=s.convert(ge.format,ge.colorSpace),$=s.convert(ge.type),de=E(ge.internalFormat,ve,$,ge.colorSpace,T.isXRRenderTarget===!0),Re=ye(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,de,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,O.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ye(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(V){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),ze(r.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)Me(O.__webglFramebuffer[se][ge],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ge);else Me(O.__webglFramebuffer[se],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);_(x)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let se=0,ge=K.length;se<ge;se++){const ve=K[se],$=n.get(ve);t.bindTexture(r.TEXTURE_2D,$.__webglTexture),ze(r.TEXTURE_2D,ve),Me(O.__webglFramebuffer,T,ve,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),_(ve)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),ze(se,x),x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)Me(O.__webglFramebuffer[ge],T,x,r.COLOR_ATTACHMENT0,se,ge);else Me(O.__webglFramebuffer,T,x,r.COLOR_ATTACHMENT0,se,0);_(x)&&f(se),t.unbindTexture()}T.depthBuffer&&lt(T)}function R(T){const x=T.textures;for(let O=0,j=x.length;O<j;O++){const K=x[O];if(_(K)){const V=S(T),xe=n.get(K).__webglTexture;t.bindTexture(V,xe),f(V),t.unbindTexture()}}}const Rt=[],$e=[];function st(T){if(T.samples>0){if(je(T)===!1){const x=T.textures,O=T.width,j=T.height;let K=r.COLOR_BUFFER_BIT;const V=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(T),se=x.length>1;if(se)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ge=T.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const $=n.get(x[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$,0)}r.blitFramebuffer(0,0,O,j,0,0,O,j,K,r.NEAREST),c===!0&&(Rt.length=0,$e.length=0,Rt.push(r.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Rt.push(V),$e.push(V),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,$e)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const $=n.get(x[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,$,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function ye(T){return Math.min(i.maxSamples,T.samples)}function je(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(T){const x=a.render.frame;d.get(T)!==x&&(d.set(T,x),T.update())}function Oe(T,x){const O=T.colorSpace,j=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ut&&O!==Hn&&(Xe.getTransfer(O)===nt?(j!==Zt||K!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function gt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=te,this.setTextureCube=H,this.rebindTextures=ht,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=je}function Mg(r,e){function t(n,i=Hn){let s;const a=Xe.getTransfer(i);if(n===mn)return r.UNSIGNED_BYTE;if(n===no)return r.UNSIGNED_SHORT_4_4_4_4;if(n===io)return r.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===pl)return r.BYTE;if(n===ml)return r.SHORT;if(n===dr)return r.UNSIGNED_SHORT;if(n===to)return r.INT;if(n===li)return r.UNSIGNED_INT;if(n===sn)return r.FLOAT;if(n===xr)return r.HALF_FLOAT;if(n===gl)return r.ALPHA;if(n===yl)return r.RGB;if(n===Zt)return r.RGBA;if(n===fr)return r.DEPTH_COMPONENT;if(n===pr)return r.DEPTH_STENCIL;if(n===ro)return r.RED;if(n===so)return r.RED_INTEGER;if(n===xl)return r.RG;if(n===ao)return r.RG_INTEGER;if(n===oo)return r.RGBA_INTEGER;if(n===ns||n===is||n===rs||n===ss)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===wa||n===Ma||n===ba)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===va)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===Ea||n===Ta)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sa||n===Ea)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Aa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===as||n===Ha||n===Va)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===as)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===Ga||n===Wa||n===Xa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===as)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
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

}`;class Eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Bt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qn({vertexShader:bg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tg extends Gi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,m=null,g=null;const y=new Eg,_=t.getContextAttributes();let f=null,S=null;const E=[],M=[],I=new Ve;let A=null;const C=new Lt;C.viewport=new Ze;const F=new Lt;F.viewport=new Ze;const b=[C,F],w=new Ou;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=E[q];return ne===void 0&&(ne=new Xs,E[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=E[q];return ne===void 0&&(ne=new Xs,E[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=E[q];return ne===void 0&&(ne=new Xs,E[q]=ne),ne.getHandSpace()};function k(q){const ne=M.indexOf(q.inputSource);if(ne===-1)return;const we=E[ne];we!==void 0&&(we.update(q.inputSource,q.frame,l||a),we.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",J);for(let q=0;q<E.length;q++){const ne=M[q];ne!==null&&(M[q]=null,E[q].disconnect(ne))}L=null,G=null,y.reset(),e.setRenderTarget(f),m=null,u=null,h=null,i=null,S=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",X),i.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,le=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=_.stencil?pr:fr,le=_.stencil?ur:li);const Ye={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(Ye),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new hi(u.textureWidth,u.textureHeight,{format:Zt,type:mn,depthTexture:new Ol(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const we={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,we),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new hi(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(q){for(let ne=0;ne<q.removed.length;ne++){const we=q.removed[ne],le=M.indexOf(we);le>=0&&(M[le]=null,E[le].disconnect(we))}for(let ne=0;ne<q.added.length;ne++){const we=q.added[ne];let le=M.indexOf(we);if(le===-1){for(let Ye=0;Ye<E.length;Ye++)if(Ye>=M.length){M.push(we),le=Ye;break}else if(M[Ye]===null){M[Ye]=we,le=Ye;break}if(le===-1)break}const Me=E[le];Me&&Me.connect(we)}}const W=new D,te=new D;function H(q,ne,we){W.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(we.matrixWorld);const le=W.distanceTo(te),Me=ne.projectionMatrix.elements,Ye=we.projectionMatrix.elements,Ce=Me[14]/(Me[10]-1),lt=Me[14]/(Me[10]+1),ht=(Me[9]+1)/Me[5],Ke=(Me[9]-1)/Me[5],R=(Me[8]-1)/Me[0],Rt=(Ye[8]+1)/Ye[0],$e=Ce*R,st=Ce*Rt,ye=le/(-R+Rt),je=ye*-R;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(je),q.translateZ(ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Me[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ee=Ce+ye,Oe=lt+ye,gt=$e-je,T=st+(le-je),x=ht*lt/Oe*Ee,O=Ke*lt/Oe*Ee;q.projectionMatrix.makePerspective(gt,T,x,O,Ee,Oe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ce(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ne=q.near,we=q.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(we=y.depthFar)),w.near=F.near=C.near=ne,w.far=F.far=C.far=we,(L!==w.near||G!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,G=w.far),C.layers.mask=q.layers.mask|2,F.layers.mask=q.layers.mask|4,w.layers.mask=C.layers.mask|F.layers.mask;const le=q.parent,Me=w.cameras;ce(w,le);for(let Ye=0;Ye<Me.length;Ye++)ce(Me[Ye],le);Me.length===2?H(w,C,F):w.projectionMatrix.copy(C.projectionMatrix),fe(q,w,le)};function fe(q,ne,we){we===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(we.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Oi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(w)};let be=null;function ze(q,ne){if(d=ne.getViewerPose(l||a),g=ne,d!==null){const we=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let le=!1;we.length!==w.cameras.length&&(w.cameras.length=0,le=!0);for(let Ce=0;Ce<we.length;Ce++){const lt=we[Ce];let ht=null;if(m!==null)ht=m.getViewport(lt);else{const R=h.getViewSubImage(u,lt);ht=R.viewport,Ce===0&&(e.setRenderTargetTextures(S,R.colorTexture,R.depthStencilTexture),e.setRenderTarget(S))}let Ke=b[Ce];Ke===void 0&&(Ke=new Lt,Ke.layers.enable(Ce),Ke.viewport=new Ze,b[Ce]=Ke),Ke.matrix.fromArray(lt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(lt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ht.x,ht.y,ht.width,ht.height),Ce===0&&(w.matrix.copy(Ke.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),le===!0&&w.cameras.push(Ke)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ce=h.getDepthInformation(we[0]);Ce&&Ce.isValid&&Ce.texture&&y.init(e,Ce,i.renderState)}}for(let we=0;we<E.length;we++){const le=M[we],Me=E[we];le!==null&&Me!==void 0&&Me.update(le,ne,l||a)}be&&be(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const it=new Gl;it.setAnimationLoop(ze),this.setAnimationLoop=function(q){be=q},this.dispose=function(){}}}const ni=new cn,Ag=new Fe;function Rg(r,e){function t(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,Cl(r)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function i(_,f,S,E,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(_,f):f.isMeshToonMaterial?(s(_,f),h(_,f)):f.isMeshPhongMaterial?(s(_,f),d(_,f)):f.isMeshStandardMaterial?(s(_,f),u(_,f),f.isMeshPhysicalMaterial&&m(_,f,M)):f.isMeshMatcapMaterial?(s(_,f),g(_,f)):f.isMeshDepthMaterial?s(_,f):f.isMeshDistanceMaterial?(s(_,f),y(_,f)):f.isMeshNormalMaterial?s(_,f):f.isLineBasicMaterial?(a(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?c(_,f,S,E):f.isSpriteMaterial?l(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,t(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===Ot&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,t(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===Ot&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,t(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,t(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const S=e.get(f),E=S.envMap,M=S.envMapRotation;E&&(_.envMap.value=E,ni.copy(M),ni.x*=-1,ni.y*=-1,ni.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),_.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(ni)),_.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,_.aoMapTransform))}function a(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function c(_,f,S,E){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*S,_.scale.value=E*.5,f.map&&(_.map.value=f.map,t(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function l(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function d(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function h(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function u(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function m(_,f,S){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,f){f.matcap&&(_.matcap.value=f.matcap)}function y(_,f){const S=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cg(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){const M=E.program;n.uniformBlockBinding(S,M)}function l(S,E){let M=i[S.id];M===void 0&&(g(S),M=d(S),i[S.id]=M,S.addEventListener("dispose",_));const I=E.program;n.updateUBOMapping(S,I);const A=e.render.frame;s[S.id]!==A&&(u(S),s[S.id]=A)}function d(S){const E=h();S.__bindingPointIndex=E;const M=r.createBuffer(),I=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,I,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,M),M}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const E=i[S.id],M=S.uniforms,I=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let A=0,C=M.length;A<C;A++){const F=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,w=F.length;b<w;b++){const L=F[b];if(m(L,A,b,I)===!0){const G=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let J=0;J<k.length;J++){const W=k[J],te=y(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,G+X,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(S,E,M,I){const A=S.value,C=E+"_"+M;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{const F=I[C];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return I[C]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(S){const E=S.uniforms;let M=0;const I=16;for(let C=0,F=E.length;C<F;C++){const b=Array.isArray(E[C])?E[C]:[E[C]];for(let w=0,L=b.length;w<L;w++){const G=b[w],k=Array.isArray(G.value)?G.value:[G.value];for(let X=0,J=k.length;X<J;X++){const W=k[X],te=y(W),H=M%I,ce=H%te.boundary,fe=H+ce;M+=ce,fe!==0&&I-fe<te.storage&&(M+=I-fe),G.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=te.storage}}}const A=M%I;return A>0&&(M+=I-A),S.__size=M,S.__cache={},this}function y(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function _(S){const E=S.target;E.removeEventListener("dispose",_);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function f(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:c,update:l,dispose:f}}class Pg{constructor(e={}){const{canvas:t=Rd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),y=new Int32Array(4);let _=null,f=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let I=!1;this._outputColorSpace=wt;let A=0,C=0,F=null,b=-1,w=null;const L=new Ze,G=new Ze;let k=null;const X=new Ie(0);let J=0,W=t.width,te=t.height,H=1,ce=null,fe=null;const be=new Ze(0,0,W,te),ze=new Ze(0,0,W,te);let it=!1;const q=new po;let ne=!1,we=!1;const le=new Fe,Me=new Fe,Ye=new D,Ce=new Ze,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Ke(){return F===null?H:1}let R=n;function Rt(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",Y,!1),R===null){const U="webgl2";if(R=Rt(U,v),R===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let $e,st,ye,je,Ee,Oe,gt,T,x,O,j,K,V,xe,se,ge,ve,$,de,Re,Ae,ie,De,P;function ae(){$e=new km(R),$e.init(),ie=new Mg(R,$e),st=new Dm(R,$e,e,ie),ye=new vg(R,$e),st.reverseDepthBuffer&&u&&ye.buffers.depth.setReversed(!0),je=new Gm(R),Ee=new og,Oe=new wg(R,$e,ye,Ee,st,ie,je),gt=new Nm(M),T=new zm(M),x=new Yu(R),De=new Im(R,x),O=new Hm(R,x,je,De),j=new Xm(R,O,x,je),de=new Wm(R,st,Oe),ge=new Um(Ee),K=new ag(M,gt,T,$e,st,De,ge),V=new Rg(M,Ee),xe=new lg,se=new mg($e),$=new Pm(M,gt,T,ye,j,m,c),ve=new yg(M,j,st),P=new Cg(R,je,st,ye),Re=new Lm(R,$e,je),Ae=new Vm(R,$e,je),je.programs=K.programs,M.capabilities=st,M.extensions=$e,M.properties=Ee,M.renderLists=xe,M.shadowMap=ve,M.state=ye,M.info=je}ae();const Z=new Tg(M,R);this.xr=Z,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=$e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=$e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(W,te,!1))},this.getSize=function(v){return v.set(W,te)},this.setSize=function(v,U,B=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,te=U,t.width=Math.floor(v*H),t.height=Math.floor(U*H),B===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(W*H,te*H).floor()},this.setDrawingBufferSize=function(v,U,B){W=v,te=U,H=B,t.width=Math.floor(v*B),t.height=Math.floor(U*B),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(be)},this.setViewport=function(v,U,B,z){v.isVector4?be.set(v.x,v.y,v.z,v.w):be.set(v,U,B,z),ye.viewport(L.copy(be).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(ze)},this.setScissor=function(v,U,B,z){v.isVector4?ze.set(v.x,v.y,v.z,v.w):ze.set(v,U,B,z),ye.scissor(G.copy(ze).multiplyScalar(H).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(v){ye.setScissorTest(it=v)},this.setOpaqueSort=function(v){ce=v},this.setTransparentSort=function(v){fe=v},this.getClearColor=function(v){return v.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor(...arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,B=!0){let z=0;if(v){let N=!1;if(F!==null){const ee=F.texture.format;N=ee===oo||ee===ao||ee===so}if(N){const ee=F.texture.type,oe=ee===mn||ee===li||ee===dr||ee===ur||ee===no||ee===io,_e=$.getClearColor(),ue=$.getClearAlpha(),Pe=_e.r,Le=_e.g,Se=_e.b;oe?(g[0]=Pe,g[1]=Le,g[2]=Se,g[3]=ue,R.clearBufferuiv(R.COLOR,0,g)):(y[0]=Pe,y[1]=Le,y[2]=Se,y[3]=ue,R.clearBufferiv(R.COLOR,0,y))}else z|=R.COLOR_BUFFER_BIT}U&&(z|=R.DEPTH_BUFFER_BIT),B&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),$.dispose(),xe.dispose(),se.dispose(),Ee.dispose(),gt.dispose(),T.dispose(),j.dispose(),De.dispose(),P.dispose(),K.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Po),Z.removeEventListener("sessionend",Io),Kn.stop()};function pe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const v=je.autoReset,U=ve.enabled,B=ve.autoUpdate,z=ve.needsUpdate,N=ve.type;ae(),je.autoReset=v,ve.enabled=U,ve.autoUpdate=B,ve.needsUpdate=z,ve.type=N}function Y(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function me(v){const U=v.target;U.removeEventListener("dispose",me),Ue(U)}function Ue(v){at(v),Ee.remove(v)}function at(v){const U=Ee.get(v).programs;U!==void 0&&(U.forEach(function(B){K.releaseProgram(B)}),v.isShaderMaterial&&K.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,B,z,N,ee){U===null&&(U=lt);const oe=N.isMesh&&N.matrixWorld.determinant()<0,_e=gh(v,U,B,z,N);ye.setMaterial(z,oe);let ue=B.index,Pe=1;if(z.wireframe===!0){if(ue=O.getWireframeAttribute(B),ue===void 0)return;Pe=2}const Le=B.drawRange,Se=B.attributes.position;let Ge=Le.start*Pe,tt=(Le.start+Le.count)*Pe;ee!==null&&(Ge=Math.max(Ge,ee.start*Pe),tt=Math.min(tt,(ee.start+ee.count)*Pe)),ue!==null?(Ge=Math.max(Ge,0),tt=Math.min(tt,ue.count)):Se!=null&&(Ge=Math.max(Ge,0),tt=Math.min(tt,Se.count));const ft=tt-Ge;if(ft<0||ft===1/0)return;De.setup(N,z,_e,B,ue);let ot,rt=Re;if(ue!==null&&(ot=x.get(ue),rt=Ae,rt.setIndex(ot)),N.isMesh)z.wireframe===!0?(ye.setLineWidth(z.wireframeLinewidth*Ke()),rt.setMode(R.LINES)):rt.setMode(R.TRIANGLES);else if(N.isLine){let Te=z.linewidth;Te===void 0&&(Te=1),ye.setLineWidth(Te*Ke()),N.isLineSegments?rt.setMode(R.LINES):N.isLineLoop?rt.setMode(R.LINE_LOOP):rt.setMode(R.LINE_STRIP)}else N.isPoints?rt.setMode(R.POINTS):N.isSprite&&rt.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ii("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Te=N._multiDrawStarts,dt=N._multiDrawCounts,qe=N._multiDrawCount,zt=ue?x.get(ue).bytesPerElement:1,di=Ee.get(z).currentProgram.getUniforms();for(let kt=0;kt<qe;kt++)di.setValue(R,"_gl_DrawID",kt),rt.render(Te[kt]/zt,dt[kt])}else if(N.isInstancedMesh)rt.renderInstances(Ge,ft,N.count);else if(B.isInstancedBufferGeometry){const Te=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,dt=Math.min(B.instanceCount,Te);rt.renderInstances(Ge,ft,dt)}else rt.render(Ge,ft)};function Je(v,U,B){v.transparent===!0&&v.side===$t&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,Er(v,U,B),v.side=pn,v.needsUpdate=!0,Er(v,U,B),v.side=$t):Er(v,U,B)}this.compile=function(v,U,B=null){B===null&&(B=v),f=se.get(B),f.init(U),E.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),v!==B&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const z=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let oe=0;oe<ee.length;oe++){const _e=ee[oe];Je(_e,B,N),z.add(_e)}else Je(ee,B,N),z.add(ee)}),f=E.pop(),z},this.compileAsync=function(v,U,B=null){const z=this.compile(v,U,B);return new Promise(N=>{function ee(){if(z.forEach(function(oe){Ee.get(oe).currentProgram.isReady()&&z.delete(oe)}),z.size===0){N(v);return}setTimeout(ee,10)}$e.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Jt=null;function yn(v){Jt&&Jt(v)}function Po(){Kn.stop()}function Io(){Kn.start()}const Kn=new Gl;Kn.setAnimationLoop(yn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(v){Jt=v,Z.setAnimationLoop(v),v===null?Kn.stop():Kn.start()},Z.addEventListener("sessionstart",Po),Z.addEventListener("sessionend",Io),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,U,F),f=se.get(v,E.length),f.init(U),E.push(f),Me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Me),we=this.localClippingEnabled,ne=ge.init(this.clippingPlanes,we),_=xe.get(v,S.length),_.init(),S.push(_),Z.enabled===!0&&Z.isPresenting===!0){const ee=M.xr.getDepthSensingMesh();ee!==null&&Ms(ee,U,-1/0,M.sortObjects)}Ms(v,U,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(ce,fe),ht=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ht&&$.addToRenderList(_,v),this.info.render.frame++,ne===!0&&ge.beginShadows();const B=f.state.shadowsArray;ve.render(B,v,U),ne===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,N=_.transmissive;if(f.setupLights(),U.isArrayCamera){const ee=U.cameras;if(N.length>0)for(let oe=0,_e=ee.length;oe<_e;oe++){const ue=ee[oe];Do(z,N,v,ue)}ht&&$.render(v);for(let oe=0,_e=ee.length;oe<_e;oe++){const ue=ee[oe];Lo(_,v,ue,ue.viewport)}}else N.length>0&&Do(z,N,v,U),ht&&$.render(v),Lo(_,v,U);F!==null&&C===0&&(Oe.updateMultisampleRenderTarget(F),Oe.updateRenderTargetMipmap(F)),v.isScene===!0&&v.onAfterRender(M,v,U),De.resetDefaultState(),b=-1,w=null,E.pop(),E.length>0?(f=E[E.length-1],ne===!0&&ge.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?_=S[S.length-1]:_=null};function Ms(v,U,B,z){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){z&&Ce.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Me);const oe=j.update(v),_e=v.material;_e.visible&&_.push(v,oe,_e,B,Ce.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||q.intersectsObject(v))){const oe=j.update(v),_e=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ce.copy(v.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ce.copy(oe.boundingSphere.center)),Ce.applyMatrix4(v.matrixWorld).applyMatrix4(Me)),Array.isArray(_e)){const ue=oe.groups;for(let Pe=0,Le=ue.length;Pe<Le;Pe++){const Se=ue[Pe],Ge=_e[Se.materialIndex];Ge&&Ge.visible&&_.push(v,oe,Ge,B,Ce.z,Se)}}else _e.visible&&_.push(v,oe,_e,B,Ce.z,null)}}const ee=v.children;for(let oe=0,_e=ee.length;oe<_e;oe++)Ms(ee[oe],U,B,z)}function Lo(v,U,B,z){const N=v.opaque,ee=v.transmissive,oe=v.transparent;f.setupLightsView(B),ne===!0&&ge.setGlobalState(M.clippingPlanes,B),z&&ye.viewport(L.copy(z)),N.length>0&&Sr(N,U,B),ee.length>0&&Sr(ee,U,B),oe.length>0&&Sr(oe,U,B),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Do(v,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new hi(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?xr:mn,minFilter:Rn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ee=f.state.transmissionRenderTarget[z.id],oe=z.viewport||L;ee.setSize(oe.z*M.transmissionResolutionScale,oe.w*M.transmissionResolutionScale);const _e=M.getRenderTarget(),ue=M.getActiveCubeFace(),Pe=M.getActiveMipmapLevel();M.setRenderTarget(ee),M.getClearColor(X),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),ht&&$.render(B);const Le=M.toneMapping;M.toneMapping=Xn;const Se=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),ne===!0&&ge.setGlobalState(M.clippingPlanes,z),Sr(v,B,z),Oe.updateMultisampleRenderTarget(ee),Oe.updateRenderTargetMipmap(ee),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let tt=0,ft=U.length;tt<ft;tt++){const ot=U[tt],rt=ot.object,Te=ot.geometry,dt=ot.material,qe=ot.group;if(dt.side===$t&&rt.layers.test(z.layers)){const zt=dt.side;dt.side=Ot,dt.needsUpdate=!0,Uo(rt,B,z,Te,dt,qe),dt.side=zt,dt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Oe.updateMultisampleRenderTarget(ee),Oe.updateRenderTargetMipmap(ee))}M.setRenderTarget(_e,ue,Pe),M.setClearColor(X,J),Se!==void 0&&(z.viewport=Se),M.toneMapping=Le}function Sr(v,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ee=v.length;N<ee;N++){const oe=v[N],_e=oe.object,ue=oe.geometry,Pe=oe.group;let Le=oe.material;Le.allowOverride===!0&&z!==null&&(Le=z),_e.layers.test(B.layers)&&Uo(_e,U,B,ue,Le,Pe)}}function Uo(v,U,B,z,N,ee){v.onBeforeRender(M,U,B,z,N,ee),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(M,U,B,z,v,ee),N.transparent===!0&&N.side===$t&&N.forceSinglePass===!1?(N.side=Ot,N.needsUpdate=!0,M.renderBufferDirect(B,U,z,N,v,ee),N.side=pn,N.needsUpdate=!0,M.renderBufferDirect(B,U,z,N,v,ee),N.side=$t):M.renderBufferDirect(B,U,z,N,v,ee),v.onAfterRender(M,U,B,z,N,ee)}function Er(v,U,B){U.isScene!==!0&&(U=lt);const z=Ee.get(v),N=f.state.lights,ee=f.state.shadowsArray,oe=N.state.version,_e=K.getParameters(v,N.state,ee,U,B),ue=K.getProgramCacheKey(_e);let Pe=z.programs;z.environment=v.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(v.isMeshStandardMaterial?T:gt).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Pe===void 0&&(v.addEventListener("dispose",me),Pe=new Map,z.programs=Pe);let Le=Pe.get(ue);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===oe)return Fo(v,_e),Le}else _e.uniforms=K.getUniforms(v),v.onBeforeCompile(_e,M),Le=K.acquireProgram(_e,ue),Pe.set(ue,Le),z.uniforms=_e.uniforms;const Se=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Se.clippingPlanes=ge.uniform),Fo(v,_e),z.needsLights=xh(v),z.lightsStateVersion=oe,z.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function No(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=cs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Fo(v,U){const B=Ee.get(v);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function gh(v,U,B,z,N){U.isScene!==!0&&(U=lt),Oe.resetTextureUnits();const ee=U.fog,oe=z.isMeshStandardMaterial?U.environment:null,_e=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ut,ue=(z.isMeshStandardMaterial?T:gt).get(z.envMap||oe),Pe=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Se=!!B.morphAttributes.position,Ge=!!B.morphAttributes.normal,tt=!!B.morphAttributes.color;let ft=Xn;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ft=M.toneMapping);const ot=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=ot!==void 0?ot.length:0,Te=Ee.get(z),dt=f.state.lights;if(ne===!0&&(we===!0||v!==w)){const Ct=v===w&&z.id===b;ge.setState(z,v,Ct)}let qe=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==dt.state.version||Te.outputColorSpace!==_e||N.isBatchedMesh&&Te.batching===!1||!N.isBatchedMesh&&Te.batching===!0||N.isBatchedMesh&&Te.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Te.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Te.instancing===!1||!N.isInstancedMesh&&Te.instancing===!0||N.isSkinnedMesh&&Te.skinning===!1||!N.isSkinnedMesh&&Te.skinning===!0||N.isInstancedMesh&&Te.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Te.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Te.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Te.instancingMorph===!1&&N.morphTexture!==null||Te.envMap!==ue||z.fog===!0&&Te.fog!==ee||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ge.numPlanes||Te.numIntersection!==ge.numIntersection)||Te.vertexAlphas!==Pe||Te.vertexTangents!==Le||Te.morphTargets!==Se||Te.morphNormals!==Ge||Te.morphColors!==tt||Te.toneMapping!==ft||Te.morphTargetsCount!==rt)&&(qe=!0):(qe=!0,Te.__version=z.version);let zt=Te.currentProgram;qe===!0&&(zt=Er(z,U,N));let di=!1,kt=!1,Ki=!1;const ct=zt.getUniforms(),Xt=Te.uniforms;if(ye.useProgram(zt.program)&&(di=!0,kt=!0,Ki=!0),z.id!==b&&(b=z.id,kt=!0),di||w!==v){ye.buffers.depth.getReversed()?(le.copy(v.projectionMatrix),Pd(le),Id(le),ct.setValue(R,"projectionMatrix",le)):ct.setValue(R,"projectionMatrix",v.projectionMatrix),ct.setValue(R,"viewMatrix",v.matrixWorldInverse);const Ft=ct.map.cameraPosition;Ft!==void 0&&Ft.setValue(R,Ye.setFromMatrixPosition(v.matrixWorld)),st.logarithmicDepthBuffer&&ct.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),w!==v&&(w=v,kt=!0,Ki=!0)}if(N.isSkinnedMesh){ct.setOptional(R,N,"bindMatrix"),ct.setOptional(R,N,"bindMatrixInverse");const Ct=N.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ct.setValue(R,"boneTexture",Ct.boneTexture,Oe))}N.isBatchedMesh&&(ct.setOptional(R,N,"batchingTexture"),ct.setValue(R,"batchingTexture",N._matricesTexture,Oe),ct.setOptional(R,N,"batchingIdTexture"),ct.setValue(R,"batchingIdTexture",N._indirectTexture,Oe),ct.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(R,"batchingColorTexture",N._colorsTexture,Oe));const jt=B.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&de.update(N,B,zt),(kt||Te.receiveShadow!==N.receiveShadow)&&(Te.receiveShadow=N.receiveShadow,ct.setValue(R,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Xt.envMap.value=ue,Xt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Xt.envMapIntensity.value=U.environmentIntensity),kt&&(ct.setValue(R,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&yh(Xt,Ki),ee&&z.fog===!0&&V.refreshFogUniforms(Xt,ee),V.refreshMaterialUniforms(Xt,z,H,te,f.state.transmissionRenderTarget[v.id]),cs.upload(R,No(Te),Xt,Oe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(cs.upload(R,No(Te),Xt,Oe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(R,"center",N.center),ct.setValue(R,"modelViewMatrix",N.modelViewMatrix),ct.setValue(R,"normalMatrix",N.normalMatrix),ct.setValue(R,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ct=z.uniformsGroups;for(let Ft=0,bs=Ct.length;Ft<bs;Ft++){const $n=Ct[Ft];P.update($n,zt),P.bind($n,zt)}}return zt}function yh(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function xh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,U,B){const z=Ee.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ee.get(v.texture).__webglTexture=U,Ee.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const B=Ee.get(v);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const vh=R.createFramebuffer();this.setRenderTarget=function(v,U=0,B=0){F=v,A=U,C=B;let z=!0,N=null,ee=!1,oe=!1;if(v){const ue=Ee.get(v);if(ue.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(ue.__webglFramebuffer===void 0)Oe.setupRenderTarget(v);else if(ue.__hasExternalTextures)Oe.rebindTextures(v,Ee.get(v.texture).__webglTexture,Ee.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Se=v.depthTexture;if(ue.__boundDepthTexture!==Se){if(Se!==null&&Ee.has(Se)&&(v.width!==Se.image.width||v.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(v)}}const Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(oe=!0);const Le=Ee.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?N=Le[U][B]:N=Le[U],ee=!0):v.samples>0&&Oe.useMultisampledRTT(v)===!1?N=Ee.get(v).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[B]:N=Le,L.copy(v.viewport),G.copy(v.scissor),k=v.scissorTest}else L.copy(be).multiplyScalar(H).floor(),G.copy(ze).multiplyScalar(H).floor(),k=it;if(B!==0&&(N=vh),ye.bindFramebuffer(R.FRAMEBUFFER,N)&&z&&ye.drawBuffers(v,N),ye.viewport(L),ye.scissor(G),ye.setScissorTest(k),ee){const ue=Ee.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,B)}else if(oe){const ue=Ee.get(v.texture),Pe=U;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ue.__webglTexture,B,Pe)}else if(v!==null&&B!==0){const ue=Ee.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ue.__webglTexture,B)}b=-1},this.readRenderTargetPixels=function(v,U,B,z,N,ee,oe,_e=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=Ee.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue){ye.bindFramebuffer(R.FRAMEBUFFER,ue);try{const Pe=v.textures[_e],Le=Pe.format,Se=Pe.type;if(!st.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-z&&B>=0&&B<=v.height-N&&(v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(U,B,z,N,ie.convert(Le),ie.convert(Se),ee))}finally{const Pe=F!==null?Ee.get(F).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(v,U,B,z,N,ee,oe,_e=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=Ee.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue)if(U>=0&&U<=v.width-z&&B>=0&&B<=v.height-N){ye.bindFramebuffer(R.FRAMEBUFFER,ue);const Pe=v.textures[_e],Le=Pe.format,Se=Pe.type;if(!st.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ge),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(U,B,z,N,ie.convert(Le),ie.convert(Se),0);const tt=F!==null?Ee.get(F).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,tt);const ft=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Cd(R,ft,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ge),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(Ge),R.deleteSync(ft),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,B=0){const z=Math.pow(2,-B),N=Math.floor(v.image.width*z),ee=Math.floor(v.image.height*z),oe=U!==null?U.x:0,_e=U!==null?U.y:0;Oe.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,oe,_e,N,ee),ye.unbindTexture()};const wh=R.createFramebuffer(),Mh=R.createFramebuffer();this.copyTextureToTexture=function(v,U,B=null,z=null,N=0,ee=null){ee===null&&(N!==0?(Ii("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=N,N=0):ee=0);let oe,_e,ue,Pe,Le,Se,Ge,tt,ft;const ot=v.isCompressedTexture?v.mipmaps[ee]:v.image;if(B!==null)oe=B.max.x-B.min.x,_e=B.max.y-B.min.y,ue=B.isBox3?B.max.z-B.min.z:1,Pe=B.min.x,Le=B.min.y,Se=B.isBox3?B.min.z:0;else{const jt=Math.pow(2,-N);oe=Math.floor(ot.width*jt),_e=Math.floor(ot.height*jt),v.isDataArrayTexture?ue=ot.depth:v.isData3DTexture?ue=Math.floor(ot.depth*jt):ue=1,Pe=0,Le=0,Se=0}z!==null?(Ge=z.x,tt=z.y,ft=z.z):(Ge=0,tt=0,ft=0);const rt=ie.convert(U.format),Te=ie.convert(U.type);let dt;U.isData3DTexture?(Oe.setTexture3D(U,0),dt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Oe.setTexture2DArray(U,0),dt=R.TEXTURE_2D_ARRAY):(Oe.setTexture2D(U,0),dt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const qe=R.getParameter(R.UNPACK_ROW_LENGTH),zt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),di=R.getParameter(R.UNPACK_SKIP_PIXELS),kt=R.getParameter(R.UNPACK_SKIP_ROWS),Ki=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ot.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Le),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Se);const ct=v.isDataArrayTexture||v.isData3DTexture,Xt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const jt=Ee.get(v),Ct=Ee.get(U),Ft=Ee.get(jt.__renderTarget),bs=Ee.get(Ct.__renderTarget);ye.bindFramebuffer(R.READ_FRAMEBUFFER,Ft.__webglFramebuffer),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let $n=0;$n<ue;$n++)ct&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(v).__webglTexture,N,Se+$n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,ee,ft+$n)),R.blitFramebuffer(Pe,Le,oe,_e,Ge,tt,oe,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||Ee.has(v)){const jt=Ee.get(v),Ct=Ee.get(U);ye.bindFramebuffer(R.READ_FRAMEBUFFER,wh),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,Mh);for(let Ft=0;Ft<ue;Ft++)ct?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,jt.__webglTexture,N,Se+Ft):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,jt.__webglTexture,N),Xt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ct.__webglTexture,ee,ft+Ft):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ct.__webglTexture,ee),N!==0?R.blitFramebuffer(Pe,Le,oe,_e,Ge,tt,oe,_e,R.COLOR_BUFFER_BIT,R.NEAREST):Xt?R.copyTexSubImage3D(dt,ee,Ge,tt,ft+Ft,Pe,Le,oe,_e):R.copyTexSubImage2D(dt,ee,Ge,tt,Pe,Le,oe,_e);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Xt?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(dt,ee,Ge,tt,ft,oe,_e,ue,rt,Te,ot.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(dt,ee,Ge,tt,ft,oe,_e,ue,rt,ot.data):R.texSubImage3D(dt,ee,Ge,tt,ft,oe,_e,ue,rt,Te,ot):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ee,Ge,tt,oe,_e,rt,Te,ot.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ee,Ge,tt,ot.width,ot.height,rt,ot.data):R.texSubImage2D(R.TEXTURE_2D,ee,Ge,tt,oe,_e,rt,Te,ot);R.pixelStorei(R.UNPACK_ROW_LENGTH,qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,zt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,di),R.pixelStorei(R.UNPACK_SKIP_ROWS,kt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ki),ee===0&&U.generateMipmaps&&R.generateMipmap(dt),ye.unbindTexture()},this.copyTextureToTexture3D=function(v,U,B=null,z=null,N=0){return Ii('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,U,B,z,N)},this.initRenderTarget=function(v){Ee.get(v).__webglFramebuffer===void 0&&Oe.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Oe.setTextureCube(v,0):v.isData3DTexture?Oe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Oe.setTexture2DArray(v,0):Oe.setTexture2D(v,0),ye.unbindTexture()},this.resetState=function(){A=0,C=0,F=null,ye.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}function Mr(){return{phong:new pu({color:"#ffffff"}),basic:new Gn({color:"#ffffff"})}}function Yl(r,{width:e=1,height:t=1,depth:n=1,materialType:i="phong"}){const s=new Wi(e,t,n),a=Mr()[i],o=new Mt(s,a);return r.add(o),{mesh:o,material:a,geometry:s}}function Ig(r,{radius:e=1,widthSegments:t=32,heightSegments:n=32,materialType:i="phong"}){const s=new yo(e,t,n),a=Mr()[i],o=new Mt(s,a);return r.add(o),{mesh:o,material:a,geometry:s}}function Lg(r,{radius:e=1,height:t=2,capSegments:n=8,radialSegments:i=16,heightSegments:s=1,materialType:a="phong"}){const o=new _o(e,t,n,i,s),c=Mr()[a],l=new Mt(o,c);return r.add(l),{mesh:l,material:c,geometry:o}}function Kl(r,{radius:e=1,segments:t=32,materialType:n="phong"}){const i=new go(e,t),s=Mr()[n],a=new Mt(i,s);return r.add(a),{mesh:a,material:s,geometry:i}}function So(r,{width:e=1,height:t=1,materialType:n="phong"}){const i=new vr(e,t),s=Mr()[n],a=new Mt(i,s);return r.add(a),{mesh:a,material:s,geometry:i}}function Eo(r,e,t,n){r.remove(e),n.dispose(),Array.isArray(t)?t.forEach(i=>{i.map&&i.map.dispose(),i.dispose()}):(e.material.map&&e.material.map.dispose(),e.material.dispose())}class Dn{static#e=void 0;constructor(){}async init(){await Oo.init()}static get(){return Oo}}function vs(){const r=Dn.get();return{fixed:r.RigidBodyDesc.fixed(),dynamic:r.RigidBodyDesc.dynamic(),kinematicPosition:r.RigidBodyDesc.kinematicPositionBased(),kinematicVelocity:r.RigidBodyDesc.kinematicVelocityBased()}}function To(r,{width:e=1,height:t=1,depth:n=1,colliderType:i="dynamic"}){const s=Dn.get(),a=vs()[i],o=r.createRigidBody(a),c=s.ColliderDesc.cuboid(e,t,n),l=r.createCollider(c,o);return{body:o,collider:l,colliderDesc:c}}function Dg(r,{radius:e=1,colliderType:t="dynamic"}){const n=Dn.get(),i=vs()[t],s=r.createRigidBody(i),a=n.ColliderDesc.ball(e),o=r.createCollider(a,s);return{body:s,collider:o,colliderDesc:a}}function Ug(r,{radius:e=1,halfHeight:t=1,colliderType:n="dynamic"}){const i=Dn.get(),s=vs()[n],a=r.createRigidBody(s),o=i.ColliderDesc.capsule(t,e),c=r.createCollider(o,a);return{body:a,collider:c,colliderDesc:o}}function Ng(r,{radius:e=.5,halfHeight:t=1,colliderType:n="dynamic"}){const i=Dn.get(),s=vs()[n],a=r.createRigidBody(s),o=i.ColliderDesc.cylinder(t,e),c=r.createCollider(o,a);return{body:a,collider:c,colliderDesc:o}}class un{_Mesh;_Geometry;_Material;_Body;_Collider;_ColliderDesc;_Scene;_World;static#e=[];constructor(){un.#e.push(this)}static synchronize(){un.#e.forEach(e=>{e.synchronize()})}setTexture(e){this._Mesh.material.map=e}setColor(e){this._Mesh.material.color.set(e)}setMaterial(e){this._Mesh.material.dispose(),this._Mesh.material=e}castShadow(e){this._Mesh.castShadow=e}receiveShadow(e){this._Mesh.receiveShadow=e}isRendering(e){this._Mesh.visible=e}getMesh(){return this._Mesh}getGeometry(){return this._Geometry}getMaterial(){return this._Material}setPosition(e,t,n){let i=e;typeof e=="number"&&(i={x:e,y:t,z:n}),this._Body.setTranslation(i,!0)}getLinearVelocity(){return this._Body.linvel()}setLinearVelocity(e,t,n){let i=e;typeof e=="number"&&(i={x:e,y:t,z:n}),this._Body.setLinvel(i,!0)}applyLinearVelocity(e,t,n){let i=e;typeof e=="number"&&(i={x:e,y:t,z:n});const s=this._Body.linvel();i.x+=s.x,i.y+=s.y,i.z+=s.z,this._Body.setLinvel(i,!0)}setAngularVelocity(e,t,n){let i=e;typeof e=="number"&&(i={x:e,y:t,z:n}),this._Body.setAngvel(i,!0)}applyForce(e,t,n){let i=e;typeof e=="number"&&(i={x:e,y:t,z:n}),this._Body.addForce(i,!0)}applyImpulse(e,t,n){let i=e;typeof e=="number"&&(i={x:e,y:t,z:n}),this._Body.applyImpulse(i,!0)}getPosition(){return this._Body.translation()}translate(e,t,n){let i=e;typeof e=="number"&&(i={x:e,y:t,z:n});const s=this.getPosition(),a=s.x+i.x,o=s.y+i.y,c=s.z+i.z;this._Body.setTranslation({x:a,y:o,z:c},!0)}setRotation(e,t,n,i){let s=t;typeof t=="number"&&(s={x:t,y:n,z:i});const a=e*Math.PI/180,o=Math.sin(a/2),c=Math.cos(a/2),l={x:s.x*o,y:s.y*o,z:s.z*o,w:c};this._Body.setRotation(l,!0)}getBody(){return this._Body}getCollider(){return this._Collider}setMass(e){this._Collider.setDensity(e)}setLinearDamping(e){this._Body.setLinearDamping(e)}setAngularDamping(e){this._Body.setAngularDamping(e)}lockRotation(e,t,n){this._Body.lockRotations(!0,e,t,n)}setFriction(e){this._Collider.setFriction(e)}setRestitution(e){this._Collider.setRestitution(e)}synchronize(){const e=this._Body.translation(),t=this._Body.rotation();this._Mesh.position.set(e.x,e.y,e.z),this._Mesh.quaternion.set(t.x,t.y,t.z,t.w)}dispose(){Eo(this._Scene,this._Mesh,this._Material,this._Geometry),this._World.removeRigidBody(this._Body),this._World.removeCollider(this._Collider,!0);const e=un.#e.indexOf(this);e!==-1&&un.#e.splice(e,1)}setLifeTime(e){setTimeout(()=>{this.dispose()},e*1e3)}}class br extends un{constructor(e,t,{width:n=1,height:i=1,depth:s=1,materialType:a="phong",colliderType:o="dynamic"}){super();const c=To(t,{width:n/2,height:i/2,depth:s/2,colliderType:o});this._Body=c.body,this._Collider=c.collider,this._ColliderDesc=c.colliderDesc,this._Collider.setCollisionGroups(1<<16|65535);const h=Yl(e,{width:n,height:i,depth:s,materialType:a});this._Scene=e,this._World=t,this._Mesh=h.mesh,this._Geometry=h.geometry,this._Material=h.material}}class Fg extends un{constructor(e,t,{radius:n=1,height:i=1,capSegments:s=8,radialSegments:a=16,heightSegments:o=1,materialType:c="phong",colliderType:l="dynamic"}){super();const d=Ug(t,{halfHeight:i/2,radius:n,colliderType:l});this._Body=d.body,this._Collider=d.collider,this._ColliderDesc=d.colliderDesc,this._Collider.setCollisionGroups(1<<16|65535);const m=Lg(e,{radius:n,capSegments:s,radialSegments:a,height:o,materialType:c});this._Scene=e,this._World=t,this._Mesh=m.mesh,this._Geometry=m.geometry,this._Material=m.material}}function tl(r,e){if(e===ed)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ja||e===wl){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ja)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Og extends qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vg(t)}),this.register(function(t){return new Gg(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new Qg(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new Xg(t)}),this.register(function(t){return new jg(t)}),this.register(function(t){return new qg(t)}),this.register(function(t){return new Yg(t)}),this.register(function(t){return new Hg(t)}),this.register(function(t){return new Kg(t)}),this.register(function(t){return new Wg(t)}),this.register(function(t){return new Zg(t)}),this.register(function(t){return new $g(t)}),this.register(function(t){return new zg(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ny(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=lr.extractUrlBase(e);a=lr.resolveURL(l,this.path)}else a=lr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new kl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(d){t(d),s.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$l){try{a[He.KHR_BINARY_GLTF]=new iy(e)}catch(h){i&&i(h);return}s=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new _y(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const h=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(h){case He.KHR_MATERIALS_UNLIT:a[h]=new kg;break;case He.KHR_DRACO_MESH_COMPRESSION:a[h]=new ry(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[h]=new sy;break;case He.KHR_MESH_QUANTIZATION:a[h]=new ay;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Bg(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zg{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const d=new Ie(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],Ut);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Vl(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Du(d),l.distance=h;break;case"spot":l=new Iu(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Tn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class kg{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Gn}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ut),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,wt))}return Promise.all(i)}}class Hg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Vg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(o,o)}return Promise.all(s)}}class Gg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Wg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Xg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ut)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,wt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class jg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class qg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(o[0],o[1],o[2],Ut),Promise.all(s)}}class Yg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Kg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(o[0],o[1],o[2],Ut),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,wt)),Promise.all(s)}}class $g{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Zg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Jg{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Qg{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class ey{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class ty{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(m),d,h,u,i.mode,i.filter),m})})}else return null}}class ny{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Yt.TRIANGLES&&l.mode!==Yt.TRIANGLE_STRIP&&l.mode!==Yt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],u=l[0].count,m=[];for(const g of h){const y=new Fe,_=new D,f=new Yn,S=new D(1,1,1),E=new ou(g.geometry,g.material,u);for(let M=0;M<u;M++)c.TRANSLATION&&_.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,M),c.SCALE&&S.fromBufferAttribute(c.SCALE,M),E.setMatrixAt(M,y.compose(_,f,S));for(const M in c)if(M==="_COLOR_0"){const I=c[M];E.instanceColor=new Ya(I.array,I.itemSize,I.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);ut.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),m.push(E)}return d.isGroup?(d.clear(),d.add(...m),d):m[0]}))}}const $l="glTF",rr=12,nl={JSON:1313821514,BIN:5130562};class iy{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$l)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-rr,s=new DataView(e,rr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===nl.JSON){const l=new Uint8Array(e,rr+a,o);this.content=n.decode(l)}else if(c===nl.BIN){const l=rr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ry{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const h=Za[d]||d.toLowerCase();o[h]=a[d]}for(const d in e.attributes){const h=Za[d]||d.toLowerCase();if(a[d]!==void 0){const u=n.accessors[e.attributes[d]],m=Di[u.componentType];l[h]=m.name,c[h]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(m){for(const g in m.attributes){const y=m.attributes[g],_=c[g];_!==void 0&&(y.normalized=_)}h(m)},o,l,Ut,u)})})}}class sy{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ay{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class Zl extends wr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=i-t,h=(n-t)/d,u=h*h,m=u*h,g=e*l,y=g-l,_=-2*m+3*u,f=m-u,S=1-_,E=f-u+h;for(let M=0;M!==o;M++){const I=a[y+M+o],A=a[y+M+c]*d,C=a[g+M+o],F=a[g+M]*d;s[M]=S*I+E*A+_*C+f*F}return s}}const oy=new Yn;class cy extends Zl{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return oy.fromArray(s).normalize().toArray(s),s}}const Yt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Di={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},il={9728:Et,9729:Gt,9984:fl,9985:ts,9986:sr,9987:Rn},rl={33071:Vn,33648:hs,10497:jn},sa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Za={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ly={CUBICSPLINE:void 0,LINEAR:_r,STEP:mr},aa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new xo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pn})),r.DefaultMaterial}function ii(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Tn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dy(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,d=e.length;l<d;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(u)}if(s){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],u=l[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function uy(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fy(r){let e;const t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oa(t.attributes):e=r.indices+":"+oa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+oa(r.targets[n]);return e}function oa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ja(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function py(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const my=new Fe;class _y{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Bg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Hl(this.options.manager):this.textureLoader=new Fu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ii(s,o,i),Tn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())s(d,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(lr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=sa[i.type],o=Di[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Dt(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=sa[i.type],l=Di[i.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,u=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let y,_;if(m&&m!==h){const f=Math.floor(u/m),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let E=t.cache.get(S);E||(y=new l(o,f*m,i.count*m/d),E=new nu(y,m/d),t.cache.add(S,E)),_=new uo(E,c,u%m/d,g)}else o===null?y=new l(i.count*c):y=new l(o,u,i.count*c),_=new Dt(y,c,g);if(i.sparse!==void 0){const f=sa.SCALAR,S=Di[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,I=new S(a[1],E,i.sparse.count*f),A=new l(a[2],M,i.sparse.count*c);o!==null&&(_=new Dt(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let C=0,F=I.length;C<F;C++){const b=I[C];if(_.setX(b,A[C*c]),c>=2&&_.setY(b,A[C*c+1]),c>=3&&_.setZ(b,A[C*c+2]),c>=4&&_.setW(b,A[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=g}return _})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(s.samplers||{})[a.sampler]||{};return d.magFilter=il[u.magFilter]||Gt,d.minFilter=il[u.minFilter]||Rn,d.wrapS=rl[u.wrapS]||jn,d.wrapT=rl[u.wrapT]||jn,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Et&&d.minFilter!==Gt,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(u,m){let g=u;t.isImageBitmapLoader===!0&&(g=function(y){const _=new Bt(y);_.needsUpdate=!0,u(_)}),t.load(lr.resolveURL(h,s.path),g,void 0,m)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Tn(h,a),h.userData.mimeType=a.mimeType||py(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Fl,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Nl,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[He.KHR_MATERIALS_UNLIT]){const h=i[He.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Ut),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,wt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=$t);const d=s.alphaMode||aa.OPAQUE;if(d===aa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===aa.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Gn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ve(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Gn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Gn){const h=s.emissiveFactor;o.emissive=new Ie().setRGB(h[0],h[1],h[2],Ut)}return s.emissiveTexture!==void 0&&a!==Gn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,wt)),Promise.all(l).then(function(){const h=new a(o);return s.name&&(h.name=s.name),Tn(h,s),t.associations.set(h,{materials:e}),s.extensions&&ii(i,h,s),h})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return sl(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=fy(l),h=i[d];if(h)a.push(h.promise);else{let u;l.extensions&&l.extensions[He.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=sl(new Wt,l,t),i[d]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?hy(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let m=0,g=d.length;m<g;m++){const y=d[m],_=a[m];let f;const S=l[m];if(_.mode===Yt.TRIANGLES||_.mode===Yt.TRIANGLE_STRIP||_.mode===Yt.TRIANGLE_FAN||_.mode===void 0)f=s.isSkinnedMesh===!0?new ru(y,S):new Mt(y,S),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),_.mode===Yt.TRIANGLE_STRIP?f.geometry=tl(f.geometry,wl):_.mode===Yt.TRIANGLE_FAN&&(f.geometry=tl(f.geometry,ja));else if(_.mode===Yt.LINES)f=new du(y,S);else if(_.mode===Yt.LINE_STRIP)f=new mo(y,S);else if(_.mode===Yt.LINE_LOOP)f=new uu(y,S);else if(_.mode===Yt.POINTS)f=new fu(y,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(f.geometry.morphAttributes).length>0&&uy(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Tn(f,s),_.extensions&&ii(i,f,_),t.assignFinalMaterial(f),h.push(f)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return s.extensions&&ii(i,h[0],s),h[0];const u=new ci;s.extensions&&ii(i,u,s),t.associations.set(u,{meshes:e});for(let m=0,g=h.length;m<g;m++)u.add(h[m]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Ad.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ys(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Tn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const h=a[l];if(h){o.push(h);const u=new Fe;s!==null&&u.fromArray(s.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new fo(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const m=i.channels[h],g=i.samplers[m.sampler],y=m.target,_=y.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",S)),l.push(g),d.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const u=h[0],m=h[1],g=h[2],y=h[3],_=h[4],f=[];for(let S=0,E=u.length;S<E;S++){const M=u[S],I=m[S],A=g[S],C=y[S],F=_[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const b=n._createAnimationTracks(M,I,A,C,F);if(b)for(let w=0;w<b.length;w++)f.push(b[w])}return new bu(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,d=o.length;l<d;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const d=l[0],h=l[1],u=l[2];u!==null&&d.traverse(function(m){m.isSkinnedMesh&&m.bind(u,my)});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(s.isBone===!0?d=new Dl:l.length>1?d=new ci:l.length===1?d=l[0]:d=new ut,d!==l[0])for(let h=0,u=l.length;h<u;h++)d.add(l[h]);if(s.name&&(d.userData.name=s.name,d.name=a),Tn(d,s),s.extensions&&ii(n,d,s),s.matrix!==void 0){const h=new Fe;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);if(!i.associations.has(d))i.associations.set(d,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(d);i.associations.set(d,{...h})}return i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ci;n.name&&(s.name=i.createUniqueName(n.name)),Tn(s,n),n.extensions&&ii(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,h=c.length;d<h;d++)s.add(c[d]);const l=d=>{const h=new Map;for(const[u,m]of i.associations)(u instanceof on||u instanceof Bt)&&h.set(u,m);return d.traverse(u=>{const m=i.associations.get(u);m!=null&&h.set(u,m)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];kn[s.path]===kn.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(kn[s.path]){case kn.weights:l=zi;break;case kn.rotation:l=ki;break;case kn.translation:case kn.scale:l=Hi;break;default:switch(n.itemSize){case 1:l=zi;break;case 2:case 3:default:l=Hi;break}break}const d=i.interpolation!==void 0?ly[i.interpolation]:_r,h=this._getArrayFromAccessor(n);for(let u=0,m=c.length;u<m;u++){const g=new l(c[u]+"."+kn[s.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ja(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ki?cy:Zl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gy(r,e,t){const n=e.attributes,i=new Ln;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){const d=Ja(Di[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new D,c=new D;for(let l=0,d=s.length;l<d;l++){const h=s[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],m=u.min,g=u.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),u.normalized){const y=Ja(Di[u.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new _n;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function sl(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=Za[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Xe.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Tn(r,e),gy(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?dy(r,e.targets,t):r})}const yy="/MyEngine/assets/rapier_wasm3d_bg-DQFbLwuB.wasm",xy=async(r={},e)=>{let t;if(e.startsWith("data:")){const n=e.replace(/^data:.*?base64,/,"");let i;if(typeof Buffer=="function"&&typeof Buffer.from=="function")i=Buffer.from(n,"base64");else if(typeof atob=="function"){const s=atob(n);i=new Uint8Array(s.length);for(let a=0;a<s.length;a++)i[a]=s.charCodeAt(a)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(i,r)}else{const n=await fetch(e),i=n.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&i.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(n,r);else{const s=await n.arrayBuffer();t=await WebAssembly.instantiate(s,r)}}return t.instance.exports};let he;function vy(r){he=r}const An=new Array(128).fill(void 0);An.push(void 0,null,!0,!1);function We(r){return An[r]}let hr=An.length;function pt(r){hr===An.length&&An.push(An.length+1);const e=hr;return hr=An[e],An[e]=r,e}function ws(r,e){try{return r.apply(this,e)}catch(t){he.__wbindgen_export_0(pt(t))}}const wy=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let Jl=new wy("utf-8",{ignoreBOM:!0,fatal:!0});Jl.decode();let Qr=null;function My(){return(Qr===null||Qr.byteLength===0)&&(Qr=new Uint8Array(he.memory.buffer)),Qr}function Ql(r,e){return r=r>>>0,Jl.decode(My().subarray(r,r+e))}function Vi(r){return r==null}let Ri=null;function al(){return(Ri===null||Ri.buffer.detached===!0||Ri.buffer.detached===void 0&&Ri.buffer!==he.memory.buffer)&&(Ri=new DataView(he.memory.buffer)),Ri}function by(r){r<132||(An[r]=hr,hr=r)}function Sy(r){const e=We(r);return by(r),e}typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawbroadphase_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawccdsolver_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawcharactercollision_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawcolliderset_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawcollidershapecasthit_free(r>>>0,1));const ol=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>he.__wbg_rawcontactforceevent_free(r>>>0,1));class Ao{static __wrap(e){e=e>>>0;const t=Object.create(Ao.prototype);return t.__wbg_ptr=e,ol.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ol.unregister(this),e}free(){const e=this.__destroy_into_raw();he.__wbg_rawcontactforceevent_free(e,0)}collider1(){return he.rawcharactercollision_handle(this.__wbg_ptr)}collider2(){return he.rawcontactforceevent_collider2(this.__wbg_ptr)}total_force(){const e=he.rawcontactforceevent_total_force(this.__wbg_ptr);return Kt.__wrap(e)}total_force_magnitude(){return he.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}max_force_direction(){const e=he.rawcontactforceevent_max_force_direction(this.__wbg_ptr);return Kt.__wrap(e)}max_force_magnitude(){return he.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}}typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawcontactmanifold_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawcontactpair_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawdebugrenderpipeline_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawdeserializedworld_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawdynamicraycastvehiclecontroller_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_raweventqueue_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawgenericjoint_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawimpulsejointset_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawintegrationparameters_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawislandmanager_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawkinematiccharactercontroller_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawmultibodyjointset_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawnarrowphase_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawphysicspipeline_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawpidcontroller_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawpointcolliderprojection_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawpointprojection_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawraycolliderhit_free(r>>>0,1));const cl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>he.__wbg_rawraycolliderintersection_free(r>>>0,1));class Ro{static __wrap(e){e=e>>>0;const t=Object.create(Ro.prototype);return t.__wbg_ptr=e,cl.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,cl.unregister(this),e}free(){const e=this.__destroy_into_raw();he.__wbg_rawraycolliderintersection_free(e,0)}colliderHandle(){return he.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){const e=he.rawcollidershapecasthit_witness1(this.__wbg_ptr);return Kt.__wrap(e)}time_of_impact(){return he.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return he.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){const e=he.rawpointcolliderprojection_featureId(this.__wbg_ptr);return e===4294967297?void 0:e}}typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawrayintersection_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawrigidbodyset_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawrotation_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawsdpmatrix3_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawserializationpipeline_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawshape_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawshapecasthit_free(r>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(r=>he.__wbg_rawshapecontact_free(r>>>0,1));const ca=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>he.__wbg_rawvector_free(r>>>0,1));class Kt{static __wrap(e){e=e>>>0;const t=Object.create(Kt.prototype);return t.__wbg_ptr=e,ca.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ca.unregister(this),e}free(){const e=this.__destroy_into_raw();he.__wbg_rawvector_free(e,0)}static zero(){const e=he.rawvector_zero();return Kt.__wrap(e)}constructor(e,t,n){const i=he.rawvector_new(e,t,n);return this.__wbg_ptr=i>>>0,ca.register(this,this.__wbg_ptr,this),this}get x(){return he.rawrotation_x(this.__wbg_ptr)}set x(e){he.rawvector_set_x(this.__wbg_ptr,e)}get y(){return he.rawintegrationparameters_dt(this.__wbg_ptr)}set y(e){he.rawintegrationparameters_set_dt(this.__wbg_ptr,e)}get z(){return he.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}set z(e){he.rawvector_set_z(this.__wbg_ptr,e)}xyz(){const e=he.rawvector_xyz(this.__wbg_ptr);return Kt.__wrap(e)}yxz(){const e=he.rawvector_yxz(this.__wbg_ptr);return Kt.__wrap(e)}zxy(){const e=he.rawvector_zxy(this.__wbg_ptr);return Kt.__wrap(e)}xzy(){const e=he.rawvector_xzy(this.__wbg_ptr);return Kt.__wrap(e)}yzx(){const e=he.rawvector_yzx(this.__wbg_ptr);return Kt.__wrap(e)}zyx(){const e=he.rawvector_zyx(this.__wbg_ptr);return Kt.__wrap(e)}}function Ey(r,e,t,n){const i=We(r).bind(We(e),We(t),We(n));return pt(i)}function Ty(r){const e=We(r).buffer;return pt(e)}function Ay(){return ws(function(r,e){const t=We(r).call(We(e));return pt(t)},arguments)}function Ry(){return ws(function(r,e,t){const n=We(r).call(We(e),We(t));return pt(n)},arguments)}function Cy(){return ws(function(r,e,t,n){const i=We(r).call(We(e),We(t),We(n));return pt(i)},arguments)}function Py(){return ws(function(r,e,t,n,i){const s=We(r).call(We(e),We(t),We(n),We(i));return pt(s)},arguments)}function Iy(r){return We(r).length}function Ly(r){return We(r).length}function Dy(r){const e=new Uint8Array(We(r));return pt(e)}function Uy(r,e){const t=new Function(Ql(r,e));return pt(t)}function Ny(r,e,t){const n=new Uint8Array(We(r),e>>>0,t>>>0);return pt(n)}function Fy(r,e,t){const n=new Float32Array(We(r),e>>>0,t>>>0);return pt(n)}function Oy(r){const e=new Float32Array(r>>>0);return pt(e)}function By(r){return We(r).now()}function zy(r){const e=We(r).performance;return pt(e)}function ky(r){const e=Ao.__wrap(r);return pt(e)}function Hy(r){const e=Ro.__wrap(r);return pt(e)}function Vy(r,e,t){We(r).set(We(e),t>>>0)}function Gy(r,e,t){We(r).set(We(e),t>>>0)}function Wy(){const r=typeof global>"u"?null:global;return Vi(r)?0:pt(r)}function Xy(){const r=typeof globalThis>"u"?null:globalThis;return Vi(r)?0:pt(r)}function jy(){const r=typeof self>"u"?null:self;return Vi(r)?0:pt(r)}function qy(){const r=typeof window>"u"?null:window;return Vi(r)?0:pt(r)}function Yy(r){const e=We(r);return typeof e=="boolean"?e?1:0:2}function Ky(r){return typeof We(r)=="function"}function $y(r){return We(r)===void 0}function Zy(){const r=he.memory;return pt(r)}function Jy(r,e){const t=We(e),n=typeof t=="number"?t:void 0;al().setFloat64(r+8*1,Vi(n)?0:n,!0),al().setInt32(r+4*0,!Vi(n),!0)}function Qy(r){return pt(r)}function ex(r){const e=We(r);return pt(e)}function tx(r){Sy(r)}function nx(r,e){throw new Error(Ql(r,e))}URL=globalThis.URL;const p=await xy({"./rapier_wasm3d_bg.js":{__wbindgen_number_new:Qy,__wbindgen_boolean_get:Yy,__wbindgen_object_drop_ref:tx,__wbindgen_number_get:Jy,__wbindgen_is_function:Ky,__wbg_rawraycolliderintersection_new:Hy,__wbg_rawcontactforceevent_new:ky,__wbg_performance_7a3ffd0b17f663ad:zy,__wbindgen_is_undefined:$y,__wbg_now_2c95c9de01293173:By,__wbindgen_object_clone_ref:ex,__wbg_newnoargs_105ed471475aaf50:Uy,__wbg_call_672a4d21634d4a24:Ay,__wbg_call_7cccdd69e0791ae2:Ry,__wbg_call_833bed5770ea2041:Cy,__wbg_call_b8adc8b1d0a0d8eb:Py,__wbg_bind_c8359b1cba058168:Ey,__wbg_buffer_609cc3eee51ed158:Ty,__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0:Xy,__wbg_static_accessor_SELF_37c5d418e4bf5819:jy,__wbg_static_accessor_WINDOW_5de37043a91a9c40:qy,__wbg_static_accessor_GLOBAL_88a902d13a557d07:Wy,__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a:Ny,__wbg_new_a12002a7f91c75be:Dy,__wbg_set_65595bdd868b3009:Gy,__wbg_length_a446193dc22c12f8:Ly,__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354:Fy,__wbg_set_10bad9bee0e9c58b:Vy,__wbg_length_3b4f022188ae8db6:Iy,__wbg_newwithlength_5a5efe313cfd59f1:Oy,__wbindgen_throw:nx,__wbindgen_memory:Zy}},yy),ix=p.memory,rx=p.version,sx=p.__wbg_rawkinematiccharactercontroller_free,ax=p.rawkinematiccharactercontroller_new,ox=p.rawkinematiccharactercontroller_setUp,cx=p.rawkinematiccharactercontroller_normalNudgeFactor,lx=p.rawkinematiccharactercontroller_setNormalNudgeFactor,hx=p.rawkinematiccharactercontroller_setOffset,dx=p.rawkinematiccharactercontroller_slideEnabled,ux=p.rawkinematiccharactercontroller_setSlideEnabled,fx=p.rawkinematiccharactercontroller_autostepMaxHeight,px=p.rawkinematiccharactercontroller_autostepMinWidth,mx=p.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,_x=p.rawkinematiccharactercontroller_autostepEnabled,gx=p.rawkinematiccharactercontroller_enableAutostep,yx=p.rawkinematiccharactercontroller_disableAutostep,xx=p.rawkinematiccharactercontroller_maxSlopeClimbAngle,vx=p.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,wx=p.rawkinematiccharactercontroller_minSlopeSlideAngle,Mx=p.rawkinematiccharactercontroller_setMinSlopeSlideAngle,bx=p.rawkinematiccharactercontroller_snapToGroundDistance,Sx=p.rawkinematiccharactercontroller_enableSnapToGround,Ex=p.rawkinematiccharactercontroller_disableSnapToGround,Tx=p.rawkinematiccharactercontroller_snapToGroundEnabled,Ax=p.rawkinematiccharactercontroller_computeColliderMovement,Rx=p.rawkinematiccharactercontroller_computedMovement,Cx=p.rawkinematiccharactercontroller_computedGrounded,Px=p.rawkinematiccharactercontroller_numComputedCollisions,Ix=p.rawkinematiccharactercontroller_computedCollision,Lx=p.__wbg_rawcharactercollision_free,Dx=p.rawcharactercollision_new,Ux=p.rawcharactercollision_handle,Nx=p.rawcharactercollision_translationDeltaApplied,Fx=p.rawcharactercollision_translationDeltaRemaining,Ox=p.rawcharactercollision_toi,Bx=p.rawcharactercollision_worldWitness1,zx=p.rawcharactercollision_worldWitness2,kx=p.rawcharactercollision_worldNormal1,Hx=p.rawcharactercollision_worldNormal2,Vx=p.__wbg_rawpidcontroller_free,Gx=p.rawpidcontroller_new,Wx=p.rawpidcontroller_set_kp,Xx=p.rawpidcontroller_set_ki,jx=p.rawpidcontroller_set_kd,qx=p.rawpidcontroller_set_axes_mask,Yx=p.rawpidcontroller_reset_integrals,Kx=p.rawpidcontroller_apply_linear_correction,$x=p.rawpidcontroller_apply_angular_correction,Zx=p.rawpidcontroller_linear_correction,Jx=p.rawpidcontroller_angular_correction,Qx=p.__wbg_rawdynamicraycastvehiclecontroller_free,ev=p.rawdynamicraycastvehiclecontroller_new,tv=p.rawdynamicraycastvehiclecontroller_current_vehicle_speed,nv=p.rawdynamicraycastvehiclecontroller_chassis,iv=p.rawdynamicraycastvehiclecontroller_index_up_axis,rv=p.rawdynamicraycastvehiclecontroller_set_index_up_axis,sv=p.rawdynamicraycastvehiclecontroller_index_forward_axis,av=p.rawdynamicraycastvehiclecontroller_set_index_forward_axis,ov=p.rawdynamicraycastvehiclecontroller_add_wheel,cv=p.rawdynamicraycastvehiclecontroller_num_wheels,lv=p.rawdynamicraycastvehiclecontroller_update_vehicle,hv=p.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs,dv=p.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs,uv=p.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length,fv=p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length,pv=p.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel,mv=p.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel,_v=p.rawdynamicraycastvehiclecontroller_wheel_radius,gv=p.rawdynamicraycastvehiclecontroller_set_wheel_radius,yv=p.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness,xv=p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness,vv=p.rawdynamicraycastvehiclecontroller_wheel_suspension_compression,wv=p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression,Mv=p.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation,bv=p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation,Sv=p.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force,Ev=p.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force,Tv=p.rawdynamicraycastvehiclecontroller_wheel_brake,Av=p.rawdynamicraycastvehiclecontroller_set_wheel_brake,Rv=p.rawdynamicraycastvehiclecontroller_wheel_steering,Cv=p.rawdynamicraycastvehiclecontroller_set_wheel_steering,Pv=p.rawdynamicraycastvehiclecontroller_wheel_engine_force,Iv=p.rawdynamicraycastvehiclecontroller_set_wheel_engine_force,Lv=p.rawdynamicraycastvehiclecontroller_wheel_direction_cs,Dv=p.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs,Uv=p.rawdynamicraycastvehiclecontroller_wheel_axle_cs,Nv=p.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs,Fv=p.rawdynamicraycastvehiclecontroller_wheel_friction_slip,Ov=p.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip,Bv=p.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness,zv=p.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness,kv=p.rawdynamicraycastvehiclecontroller_wheel_rotation,Hv=p.rawdynamicraycastvehiclecontroller_wheel_forward_impulse,Vv=p.rawdynamicraycastvehiclecontroller_wheel_side_impulse,Gv=p.rawdynamicraycastvehiclecontroller_wheel_suspension_force,Wv=p.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws,Xv=p.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws,jv=p.rawdynamicraycastvehiclecontroller_wheel_suspension_length,qv=p.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws,Yv=p.rawdynamicraycastvehiclecontroller_wheel_is_in_contact,Kv=p.rawdynamicraycastvehiclecontroller_wheel_ground_object,$v=p.__wbg_rawccdsolver_free,Zv=p.rawccdsolver_new,Jv=p.rawimpulsejointset_jointType,Qv=p.rawimpulsejointset_jointBodyHandle1,ew=p.rawimpulsejointset_jointBodyHandle2,tw=p.rawimpulsejointset_jointFrameX1,nw=p.rawimpulsejointset_jointFrameX2,iw=p.rawimpulsejointset_jointAnchor1,rw=p.rawimpulsejointset_jointAnchor2,sw=p.rawimpulsejointset_jointSetAnchor1,aw=p.rawimpulsejointset_jointSetAnchor2,ow=p.rawimpulsejointset_jointContactsEnabled,cw=p.rawimpulsejointset_jointSetContactsEnabled,lw=p.rawimpulsejointset_jointLimitsEnabled,hw=p.rawimpulsejointset_jointLimitsMin,dw=p.rawimpulsejointset_jointLimitsMax,uw=p.rawimpulsejointset_jointSetLimits,fw=p.rawimpulsejointset_jointConfigureMotorModel,pw=p.rawimpulsejointset_jointConfigureMotorVelocity,mw=p.rawimpulsejointset_jointConfigureMotorPosition,_w=p.rawimpulsejointset_jointConfigureMotor,gw=p.__wbg_rawimpulsejointset_free,yw=p.rawimpulsejointset_new,xw=p.rawimpulsejointset_createJoint,vw=p.rawimpulsejointset_remove,ww=p.rawimpulsejointset_len,Mw=p.rawimpulsejointset_contains,bw=p.rawimpulsejointset_forEachJointHandle,Sw=p.rawimpulsejointset_forEachJointAttachedToRigidBody,Ew=p.__wbg_rawintegrationparameters_free,Tw=p.rawintegrationparameters_new,Aw=p.rawintegrationparameters_dt,Rw=p.rawintegrationparameters_contact_erp,Cw=p.rawintegrationparameters_numSolverIterations,Pw=p.rawintegrationparameters_minIslandSize,Iw=p.rawintegrationparameters_maxCcdSubsteps,Lw=p.rawintegrationparameters_lengthUnit,Dw=p.rawintegrationparameters_set_dt,Uw=p.rawintegrationparameters_set_contact_natural_frequency,Nw=p.rawintegrationparameters_set_normalizedAllowedLinearError,Fw=p.rawintegrationparameters_set_normalizedPredictionDistance,Ow=p.rawintegrationparameters_set_numSolverIterations,Bw=p.rawintegrationparameters_set_minIslandSize,zw=p.rawintegrationparameters_set_maxCcdSubsteps,kw=p.rawintegrationparameters_set_lengthUnit,Hw=p.rawintegrationparameters_switchToStandardPgsSolver,Vw=p.rawintegrationparameters_switchToSmallStepsPgsSolver,Gw=p.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart,Ww=p.__wbg_rawislandmanager_free,Xw=p.rawislandmanager_new,jw=p.rawislandmanager_forEachActiveRigidBodyHandle,qw=p.__wbg_rawgenericjoint_free,Yw=p.rawgenericjoint_generic,Kw=p.rawgenericjoint_spring,$w=p.rawgenericjoint_rope,Zw=p.rawgenericjoint_spherical,Jw=p.rawgenericjoint_prismatic,Qw=p.rawgenericjoint_fixed,e0=p.rawgenericjoint_revolute,t0=p.rawmultibodyjointset_jointType,n0=p.rawmultibodyjointset_jointFrameX1,i0=p.rawmultibodyjointset_jointFrameX2,r0=p.rawmultibodyjointset_jointAnchor1,s0=p.rawmultibodyjointset_jointAnchor2,a0=p.rawmultibodyjointset_jointContactsEnabled,o0=p.rawmultibodyjointset_jointSetContactsEnabled,c0=p.rawmultibodyjointset_jointLimitsEnabled,l0=p.rawmultibodyjointset_jointLimitsMin,h0=p.rawmultibodyjointset_jointLimitsMax,d0=p.__wbg_rawmultibodyjointset_free,u0=p.rawmultibodyjointset_new,f0=p.rawmultibodyjointset_createJoint,p0=p.rawmultibodyjointset_remove,m0=p.rawmultibodyjointset_contains,_0=p.rawmultibodyjointset_forEachJointHandle,g0=p.rawmultibodyjointset_forEachJointAttachedToRigidBody,y0=p.rawrigidbodyset_rbTranslation,x0=p.rawrigidbodyset_rbRotation,v0=p.rawrigidbodyset_rbSleep,w0=p.rawrigidbodyset_rbIsSleeping,M0=p.rawrigidbodyset_rbIsMoving,b0=p.rawrigidbodyset_rbNextTranslation,S0=p.rawrigidbodyset_rbNextRotation,E0=p.rawrigidbodyset_rbSetTranslation,T0=p.rawrigidbodyset_rbSetRotation,A0=p.rawrigidbodyset_rbSetLinvel,R0=p.rawrigidbodyset_rbSetAngvel,C0=p.rawrigidbodyset_rbSetNextKinematicTranslation,P0=p.rawrigidbodyset_rbSetNextKinematicRotation,I0=p.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,L0=p.rawrigidbodyset_rbSetAdditionalMass,D0=p.rawrigidbodyset_rbSetAdditionalMassProperties,U0=p.rawrigidbodyset_rbLinvel,N0=p.rawrigidbodyset_rbAngvel,F0=p.rawrigidbodyset_rbVelocityAtPoint,O0=p.rawrigidbodyset_rbLockTranslations,B0=p.rawrigidbodyset_rbSetEnabledTranslations,z0=p.rawrigidbodyset_rbLockRotations,k0=p.rawrigidbodyset_rbSetEnabledRotations,H0=p.rawrigidbodyset_rbDominanceGroup,V0=p.rawrigidbodyset_rbSetDominanceGroup,G0=p.rawrigidbodyset_rbEnableCcd,W0=p.rawrigidbodyset_rbSetSoftCcdPrediction,X0=p.rawrigidbodyset_rbMass,j0=p.rawrigidbodyset_rbInvMass,q0=p.rawrigidbodyset_rbEffectiveInvMass,Y0=p.rawrigidbodyset_rbLocalCom,K0=p.rawrigidbodyset_rbWorldCom,$0=p.rawrigidbodyset_rbInvPrincipalInertiaSqrt,Z0=p.rawrigidbodyset_rbPrincipalInertiaLocalFrame,J0=p.rawrigidbodyset_rbPrincipalInertia,Q0=p.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt,eM=p.rawrigidbodyset_rbEffectiveAngularInertia,tM=p.rawrigidbodyset_rbWakeUp,nM=p.rawrigidbodyset_rbIsCcdEnabled,iM=p.rawrigidbodyset_rbSoftCcdPrediction,rM=p.rawrigidbodyset_rbNumColliders,sM=p.rawrigidbodyset_rbCollider,aM=p.rawrigidbodyset_rbBodyType,oM=p.rawrigidbodyset_rbSetBodyType,cM=p.rawrigidbodyset_rbIsFixed,lM=p.rawrigidbodyset_rbIsKinematic,hM=p.rawrigidbodyset_rbIsDynamic,dM=p.rawrigidbodyset_rbLinearDamping,uM=p.rawrigidbodyset_rbAngularDamping,fM=p.rawrigidbodyset_rbSetLinearDamping,pM=p.rawrigidbodyset_rbSetAngularDamping,mM=p.rawrigidbodyset_rbSetEnabled,_M=p.rawrigidbodyset_rbIsEnabled,gM=p.rawrigidbodyset_rbGravityScale,yM=p.rawrigidbodyset_rbSetGravityScale,xM=p.rawrigidbodyset_rbResetForces,vM=p.rawrigidbodyset_rbResetTorques,wM=p.rawrigidbodyset_rbAddForce,MM=p.rawrigidbodyset_rbApplyImpulse,bM=p.rawrigidbodyset_rbAddTorque,SM=p.rawrigidbodyset_rbApplyTorqueImpulse,EM=p.rawrigidbodyset_rbAddForceAtPoint,TM=p.rawrigidbodyset_rbApplyImpulseAtPoint,AM=p.rawrigidbodyset_rbAdditionalSolverIterations,RM=p.rawrigidbodyset_rbSetAdditionalSolverIterations,CM=p.rawrigidbodyset_rbUserData,PM=p.rawrigidbodyset_rbSetUserData,IM=p.rawrigidbodyset_rbUserForce,LM=p.rawrigidbodyset_rbUserTorque,DM=p.__wbg_rawrigidbodyset_free,UM=p.rawrigidbodyset_new,NM=p.rawrigidbodyset_createRigidBody,FM=p.rawrigidbodyset_remove,OM=p.rawrigidbodyset_contains,BM=p.rawrigidbodyset_forEachRigidBodyHandle,zM=p.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,kM=p.__wbg_rawbroadphase_free,HM=p.rawbroadphase_new,VM=p.rawbroadphase_castRay,GM=p.rawbroadphase_castRayAndGetNormal,WM=p.rawbroadphase_intersectionsWithRay,XM=p.rawbroadphase_intersectionWithShape,jM=p.rawbroadphase_projectPoint,qM=p.rawbroadphase_projectPointAndGetFeature,YM=p.rawbroadphase_intersectionsWithPoint,KM=p.rawbroadphase_castShape,$M=p.rawbroadphase_intersectionsWithShape,ZM=p.rawbroadphase_collidersWithAabbIntersectingAabb,JM=p.rawcolliderset_coTranslation,QM=p.rawcolliderset_coRotation,eb=p.rawcolliderset_coTranslationWrtParent,tb=p.rawcolliderset_coRotationWrtParent,nb=p.rawcolliderset_coSetTranslation,ib=p.rawcolliderset_coSetTranslationWrtParent,rb=p.rawcolliderset_coSetRotation,sb=p.rawcolliderset_coSetRotationWrtParent,ab=p.rawcolliderset_coIsSensor,ob=p.rawcolliderset_coShapeType,cb=p.rawcolliderset_coHalfspaceNormal,lb=p.rawcolliderset_coHalfExtents,hb=p.rawcolliderset_coSetHalfExtents,db=p.rawcolliderset_coRadius,ub=p.rawcolliderset_coSetRadius,fb=p.rawcolliderset_coHalfHeight,pb=p.rawcolliderset_coSetHalfHeight,mb=p.rawcolliderset_coRoundRadius,_b=p.rawcolliderset_coSetRoundRadius,gb=p.rawcolliderset_coVoxelData,yb=p.rawcolliderset_coVoxelSize,xb=p.rawcolliderset_coSetVoxel,vb=p.rawcolliderset_coPropagateVoxelChange,wb=p.rawcolliderset_coCombineVoxelStates,Mb=p.rawcolliderset_coVertices,bb=p.rawcolliderset_coIndices,Sb=p.rawcolliderset_coTriMeshFlags,Eb=p.rawcolliderset_coHeightFieldFlags,Tb=p.rawcolliderset_coHeightfieldHeights,Ab=p.rawcolliderset_coHeightfieldScale,Rb=p.rawcolliderset_coHeightfieldNRows,Cb=p.rawcolliderset_coHeightfieldNCols,Pb=p.rawcolliderset_coParent,Ib=p.rawcolliderset_coSetEnabled,Lb=p.rawcolliderset_coIsEnabled,Db=p.rawcolliderset_coSetContactSkin,Ub=p.rawcolliderset_coContactSkin,Nb=p.rawcolliderset_coFriction,Fb=p.rawcolliderset_coRestitution,Ob=p.rawcolliderset_coDensity,Bb=p.rawcolliderset_coMass,zb=p.rawcolliderset_coVolume,kb=p.rawcolliderset_coCollisionGroups,Hb=p.rawcolliderset_coSolverGroups,Vb=p.rawcolliderset_coActiveHooks,Gb=p.rawcolliderset_coActiveCollisionTypes,Wb=p.rawcolliderset_coActiveEvents,Xb=p.rawcolliderset_coContactForceEventThreshold,jb=p.rawcolliderset_coContainsPoint,qb=p.rawcolliderset_coCastShape,Yb=p.rawcolliderset_coCastCollider,Kb=p.rawcolliderset_coIntersectsShape,$b=p.rawcolliderset_coContactShape,Zb=p.rawcolliderset_coContactCollider,Jb=p.rawcolliderset_coProjectPoint,Qb=p.rawcolliderset_coIntersectsRay,eS=p.rawcolliderset_coCastRay,tS=p.rawcolliderset_coCastRayAndGetNormal,nS=p.rawcolliderset_coSetSensor,iS=p.rawcolliderset_coSetRestitution,rS=p.rawcolliderset_coSetFriction,sS=p.rawcolliderset_coFrictionCombineRule,aS=p.rawcolliderset_coSetFrictionCombineRule,oS=p.rawcolliderset_coRestitutionCombineRule,cS=p.rawcolliderset_coSetRestitutionCombineRule,lS=p.rawcolliderset_coSetCollisionGroups,hS=p.rawcolliderset_coSetSolverGroups,dS=p.rawcolliderset_coSetActiveHooks,uS=p.rawcolliderset_coSetActiveEvents,fS=p.rawcolliderset_coSetActiveCollisionTypes,pS=p.rawcolliderset_coSetShape,mS=p.rawcolliderset_coSetContactForceEventThreshold,_S=p.rawcolliderset_coSetDensity,gS=p.rawcolliderset_coSetMass,yS=p.rawcolliderset_coSetMassProperties,xS=p.__wbg_rawcolliderset_free,vS=p.rawcolliderset_new,wS=p.rawcolliderset_len,MS=p.rawcolliderset_contains,bS=p.rawcolliderset_createCollider,SS=p.rawcolliderset_remove,ES=p.rawcolliderset_forEachColliderHandle,TS=p.__wbg_rawshapecontact_free,AS=p.__wbg_rawnarrowphase_free,RS=p.rawnarrowphase_new,CS=p.rawnarrowphase_contact_pairs_with,PS=p.rawnarrowphase_contact_pair,IS=p.rawnarrowphase_intersection_pairs_with,LS=p.rawnarrowphase_intersection_pair,DS=p.__wbg_rawcontactmanifold_free,US=p.rawcontactpair_collider1,NS=p.rawcontactpair_collider2,FS=p.rawcontactpair_numContactManifolds,OS=p.rawcontactpair_contactManifold,BS=p.rawcontactmanifold_normal,zS=p.rawcontactmanifold_local_n1,kS=p.rawcontactmanifold_local_n2,HS=p.rawcontactmanifold_subshape1,VS=p.rawcontactmanifold_subshape2,GS=p.rawcontactmanifold_num_contacts,WS=p.rawcontactmanifold_contact_local_p1,XS=p.rawcontactmanifold_contact_local_p2,jS=p.rawcontactmanifold_contact_dist,qS=p.rawcontactmanifold_contact_fid1,YS=p.rawcontactmanifold_contact_fid2,KS=p.rawcontactmanifold_contact_impulse,$S=p.rawcontactmanifold_contact_tangent_impulse_x,ZS=p.rawcontactmanifold_contact_tangent_impulse_y,JS=p.rawcontactmanifold_num_solver_contacts,QS=p.rawcontactmanifold_solver_contact_point,eE=p.rawcontactmanifold_solver_contact_dist,tE=p.rawcontactmanifold_solver_contact_friction,nE=p.rawcontactmanifold_solver_contact_restitution,iE=p.rawcontactmanifold_solver_contact_tangent_velocity,rE=p.__wbg_rawpointprojection_free,sE=p.rawpointprojection_point,aE=p.rawpointprojection_isInside,oE=p.__wbg_rawpointcolliderprojection_free,cE=p.rawpointcolliderprojection_colliderHandle,lE=p.rawpointcolliderprojection_point,hE=p.rawpointcolliderprojection_isInside,dE=p.rawpointcolliderprojection_featureType,uE=p.rawpointcolliderprojection_featureId,fE=p.__wbg_rawrayintersection_free,pE=p.__wbg_rawraycolliderhit_free,mE=p.__wbg_rawshape_free,_E=p.rawshape_cuboid,gE=p.rawshape_roundCuboid,yE=p.rawshape_ball,xE=p.rawshape_halfspace,vE=p.rawshape_capsule,wE=p.rawshape_cylinder,ME=p.rawshape_roundCylinder,bE=p.rawshape_cone,SE=p.rawshape_roundCone,EE=p.rawshape_voxels,TE=p.rawshape_voxelsFromPoints,AE=p.rawshape_polyline,RE=p.rawshape_trimesh,CE=p.rawshape_heightfield,PE=p.rawshape_segment,IE=p.rawshape_triangle,LE=p.rawshape_roundTriangle,DE=p.rawshape_convexHull,UE=p.rawshape_roundConvexHull,NE=p.rawshape_convexMesh,FE=p.rawshape_roundConvexMesh,OE=p.rawshape_castShape,BE=p.rawshape_intersectsShape,zE=p.rawshape_contactShape,kE=p.rawshape_containsPoint,HE=p.rawshape_projectPoint,VE=p.rawshape_intersectsRay,GE=p.rawshape_castRay,WE=p.rawshape_castRayAndGetNormal,XE=p.__wbg_rawshapecasthit_free,jE=p.rawshapecasthit_witness1,qE=p.rawshapecasthit_normal1,YE=p.rawshapecasthit_normal2,KE=p.__wbg_rawcollidershapecasthit_free,$E=p.rawcollidershapecasthit_time_of_impact,ZE=p.rawcollidershapecasthit_witness1,JE=p.rawcollidershapecasthit_witness2,QE=p.rawrotation_new,eT=p.rawrotation_identity,tT=p.rawrotation_x,nT=p.rawrotation_w,iT=p.rawvector_zero,rT=p.rawvector_new,sT=p.rawvector_set_x,aT=p.rawvector_set_z,oT=p.rawvector_xyz,cT=p.rawvector_yxz,lT=p.rawvector_zxy,hT=p.rawvector_xzy,dT=p.rawvector_yzx,uT=p.rawvector_zyx,fT=p.rawsdpmatrix3_elements,pT=p.__wbg_rawdebugrenderpipeline_free,mT=p.rawdebugrenderpipeline_new,_T=p.rawdebugrenderpipeline_vertices,gT=p.rawdebugrenderpipeline_colors,yT=p.rawdebugrenderpipeline_render,xT=p.__wbg_raweventqueue_free,vT=p.__wbg_rawcontactforceevent_free,wT=p.rawcontactforceevent_collider2,MT=p.rawcontactforceevent_total_force,bT=p.rawcontactforceevent_total_force_magnitude,ST=p.rawcontactforceevent_max_force_direction,ET=p.rawcontactforceevent_max_force_magnitude,TT=p.raweventqueue_new,AT=p.raweventqueue_drainCollisionEvents,RT=p.raweventqueue_drainContactForceEvents,CT=p.raweventqueue_clear,PT=p.__wbg_rawphysicspipeline_free,IT=p.rawphysicspipeline_new,LT=p.rawphysicspipeline_set_profiler_enabled,DT=p.rawphysicspipeline_is_profiler_enabled,UT=p.rawphysicspipeline_timing_step,NT=p.rawphysicspipeline_timing_collision_detection,FT=p.rawphysicspipeline_timing_broad_phase,OT=p.rawphysicspipeline_timing_narrow_phase,BT=p.rawphysicspipeline_timing_solver,zT=p.rawphysicspipeline_timing_velocity_assembly,kT=p.rawphysicspipeline_timing_velocity_resolution,HT=p.rawphysicspipeline_timing_velocity_update,VT=p.rawphysicspipeline_timing_velocity_writeback,GT=p.rawphysicspipeline_timing_ccd,WT=p.rawphysicspipeline_timing_ccd_toi_computation,XT=p.rawphysicspipeline_timing_ccd_broad_phase,jT=p.rawphysicspipeline_timing_ccd_narrow_phase,qT=p.rawphysicspipeline_timing_ccd_solver,YT=p.rawphysicspipeline_timing_island_construction,KT=p.rawphysicspipeline_timing_user_changes,$T=p.rawphysicspipeline_step,ZT=p.rawphysicspipeline_stepWithEvents,JT=p.__wbg_rawdeserializedworld_free,QT=p.rawdeserializedworld_takeGravity,eA=p.rawdeserializedworld_takeIntegrationParameters,tA=p.rawdeserializedworld_takeIslandManager,nA=p.rawdeserializedworld_takeBroadPhase,iA=p.rawdeserializedworld_takeNarrowPhase,rA=p.rawdeserializedworld_takeBodies,sA=p.rawdeserializedworld_takeColliders,aA=p.rawdeserializedworld_takeImpulseJoints,oA=p.rawdeserializedworld_takeMultibodyJoints,cA=p.__wbg_rawserializationpipeline_free,lA=p.rawserializationpipeline_new,hA=p.rawserializationpipeline_serializeAll,dA=p.rawserializationpipeline_deserializeAll,uA=p.rawintegrationparameters_set_numAdditionalFrictionIterations,fA=p.rawintegrationparameters_set_numInternalPgsIterations,pA=p.rawvector_set_y,mA=p.reserve_memory,_A=p.rawkinematiccharactercontroller_up,gA=p.rawshapecontact_normal2,yA=p.rawshapecontact_point1,xA=p.rawshapecontact_point2,vA=p.rawrayintersection_normal,wA=p.rawraycolliderintersection_normal,MA=p.rawshapecontact_normal1,bA=p.rawcollidershapecasthit_normal1,SA=p.rawcollidershapecasthit_normal2,EA=p.rawshapecasthit_witness2,TA=p.rawkinematiccharactercontroller_offset,AA=p.rawintegrationparameters_normalizedAllowedLinearError,RA=p.rawintegrationparameters_numAdditionalFrictionIterations,CA=p.rawintegrationparameters_numInternalPgsIterations,PA=p.rawrigidbodyset_len,IA=p.rawshapecontact_distance,LA=p.rawrayintersection_featureType,DA=p.rawraycolliderintersection_colliderHandle,UA=p.rawrayintersection_time_of_impact,NA=p.rawraycolliderintersection_featureType,FA=p.rawraycolliderhit_colliderHandle,OA=p.rawraycolliderintersection_time_of_impact,BA=p.rawcollidershapecasthit_colliderHandle,zA=p.rawraycolliderhit_timeOfImpact,kA=p.rawshapecasthit_time_of_impact,HA=p.rawrotation_y,VA=p.rawrotation_z,GA=p.rawvector_x,WA=p.rawvector_y,XA=p.rawvector_z,jA=p.rawcontactforceevent_collider1,qA=p.rawintegrationparameters_normalizedPredictionDistance,YA=p.rawrayintersection_featureId,KA=p.rawraycolliderintersection_featureId,$A=p.rawcolliderset_isHandleValid,ZA=p.__wbg_rawcontactpair_free,JA=p.__wbg_rawraycolliderintersection_free,QA=p.__wbg_rawrotation_free,eR=p.__wbg_rawvector_free,tR=p.__wbg_rawsdpmatrix3_free,nR=p.__wbindgen_export_0,iR=p.__wbindgen_add_to_stack_pointer,rR=p.__wbindgen_export_1,sR=p.__wbindgen_export_2,aR=Object.freeze(Object.defineProperty({__proto__:null,__wbg_rawbroadphase_free:kM,__wbg_rawccdsolver_free:$v,__wbg_rawcharactercollision_free:Lx,__wbg_rawcolliderset_free:xS,__wbg_rawcollidershapecasthit_free:KE,__wbg_rawcontactforceevent_free:vT,__wbg_rawcontactmanifold_free:DS,__wbg_rawcontactpair_free:ZA,__wbg_rawdebugrenderpipeline_free:pT,__wbg_rawdeserializedworld_free:JT,__wbg_rawdynamicraycastvehiclecontroller_free:Qx,__wbg_raweventqueue_free:xT,__wbg_rawgenericjoint_free:qw,__wbg_rawimpulsejointset_free:gw,__wbg_rawintegrationparameters_free:Ew,__wbg_rawislandmanager_free:Ww,__wbg_rawkinematiccharactercontroller_free:sx,__wbg_rawmultibodyjointset_free:d0,__wbg_rawnarrowphase_free:AS,__wbg_rawphysicspipeline_free:PT,__wbg_rawpidcontroller_free:Vx,__wbg_rawpointcolliderprojection_free:oE,__wbg_rawpointprojection_free:rE,__wbg_rawraycolliderhit_free:pE,__wbg_rawraycolliderintersection_free:JA,__wbg_rawrayintersection_free:fE,__wbg_rawrigidbodyset_free:DM,__wbg_rawrotation_free:QA,__wbg_rawsdpmatrix3_free:tR,__wbg_rawserializationpipeline_free:cA,__wbg_rawshape_free:mE,__wbg_rawshapecasthit_free:XE,__wbg_rawshapecontact_free:TS,__wbg_rawvector_free:eR,__wbindgen_add_to_stack_pointer:iR,__wbindgen_export_0:nR,__wbindgen_export_1:rR,__wbindgen_export_2:sR,memory:ix,rawbroadphase_castRay:VM,rawbroadphase_castRayAndGetNormal:GM,rawbroadphase_castShape:KM,rawbroadphase_collidersWithAabbIntersectingAabb:ZM,rawbroadphase_intersectionWithShape:XM,rawbroadphase_intersectionsWithPoint:YM,rawbroadphase_intersectionsWithRay:WM,rawbroadphase_intersectionsWithShape:$M,rawbroadphase_new:HM,rawbroadphase_projectPoint:jM,rawbroadphase_projectPointAndGetFeature:qM,rawccdsolver_new:Zv,rawcharactercollision_handle:Ux,rawcharactercollision_new:Dx,rawcharactercollision_toi:Ox,rawcharactercollision_translationDeltaApplied:Nx,rawcharactercollision_translationDeltaRemaining:Fx,rawcharactercollision_worldNormal1:kx,rawcharactercollision_worldNormal2:Hx,rawcharactercollision_worldWitness1:Bx,rawcharactercollision_worldWitness2:zx,rawcolliderset_coActiveCollisionTypes:Gb,rawcolliderset_coActiveEvents:Wb,rawcolliderset_coActiveHooks:Vb,rawcolliderset_coCastCollider:Yb,rawcolliderset_coCastRay:eS,rawcolliderset_coCastRayAndGetNormal:tS,rawcolliderset_coCastShape:qb,rawcolliderset_coCollisionGroups:kb,rawcolliderset_coCombineVoxelStates:wb,rawcolliderset_coContactCollider:Zb,rawcolliderset_coContactForceEventThreshold:Xb,rawcolliderset_coContactShape:$b,rawcolliderset_coContactSkin:Ub,rawcolliderset_coContainsPoint:jb,rawcolliderset_coDensity:Ob,rawcolliderset_coFriction:Nb,rawcolliderset_coFrictionCombineRule:sS,rawcolliderset_coHalfExtents:lb,rawcolliderset_coHalfHeight:fb,rawcolliderset_coHalfspaceNormal:cb,rawcolliderset_coHeightFieldFlags:Eb,rawcolliderset_coHeightfieldHeights:Tb,rawcolliderset_coHeightfieldNCols:Cb,rawcolliderset_coHeightfieldNRows:Rb,rawcolliderset_coHeightfieldScale:Ab,rawcolliderset_coIndices:bb,rawcolliderset_coIntersectsRay:Qb,rawcolliderset_coIntersectsShape:Kb,rawcolliderset_coIsEnabled:Lb,rawcolliderset_coIsSensor:ab,rawcolliderset_coMass:Bb,rawcolliderset_coParent:Pb,rawcolliderset_coProjectPoint:Jb,rawcolliderset_coPropagateVoxelChange:vb,rawcolliderset_coRadius:db,rawcolliderset_coRestitution:Fb,rawcolliderset_coRestitutionCombineRule:oS,rawcolliderset_coRotation:QM,rawcolliderset_coRotationWrtParent:tb,rawcolliderset_coRoundRadius:mb,rawcolliderset_coSetActiveCollisionTypes:fS,rawcolliderset_coSetActiveEvents:uS,rawcolliderset_coSetActiveHooks:dS,rawcolliderset_coSetCollisionGroups:lS,rawcolliderset_coSetContactForceEventThreshold:mS,rawcolliderset_coSetContactSkin:Db,rawcolliderset_coSetDensity:_S,rawcolliderset_coSetEnabled:Ib,rawcolliderset_coSetFriction:rS,rawcolliderset_coSetFrictionCombineRule:aS,rawcolliderset_coSetHalfExtents:hb,rawcolliderset_coSetHalfHeight:pb,rawcolliderset_coSetMass:gS,rawcolliderset_coSetMassProperties:yS,rawcolliderset_coSetRadius:ub,rawcolliderset_coSetRestitution:iS,rawcolliderset_coSetRestitutionCombineRule:cS,rawcolliderset_coSetRotation:rb,rawcolliderset_coSetRotationWrtParent:sb,rawcolliderset_coSetRoundRadius:_b,rawcolliderset_coSetSensor:nS,rawcolliderset_coSetShape:pS,rawcolliderset_coSetSolverGroups:hS,rawcolliderset_coSetTranslation:nb,rawcolliderset_coSetTranslationWrtParent:ib,rawcolliderset_coSetVoxel:xb,rawcolliderset_coShapeType:ob,rawcolliderset_coSolverGroups:Hb,rawcolliderset_coTranslation:JM,rawcolliderset_coTranslationWrtParent:eb,rawcolliderset_coTriMeshFlags:Sb,rawcolliderset_coVertices:Mb,rawcolliderset_coVolume:zb,rawcolliderset_coVoxelData:gb,rawcolliderset_coVoxelSize:yb,rawcolliderset_contains:MS,rawcolliderset_createCollider:bS,rawcolliderset_forEachColliderHandle:ES,rawcolliderset_isHandleValid:$A,rawcolliderset_len:wS,rawcolliderset_new:vS,rawcolliderset_remove:SS,rawcollidershapecasthit_colliderHandle:BA,rawcollidershapecasthit_normal1:bA,rawcollidershapecasthit_normal2:SA,rawcollidershapecasthit_time_of_impact:$E,rawcollidershapecasthit_witness1:ZE,rawcollidershapecasthit_witness2:JE,rawcontactforceevent_collider1:jA,rawcontactforceevent_collider2:wT,rawcontactforceevent_max_force_direction:ST,rawcontactforceevent_max_force_magnitude:ET,rawcontactforceevent_total_force:MT,rawcontactforceevent_total_force_magnitude:bT,rawcontactmanifold_contact_dist:jS,rawcontactmanifold_contact_fid1:qS,rawcontactmanifold_contact_fid2:YS,rawcontactmanifold_contact_impulse:KS,rawcontactmanifold_contact_local_p1:WS,rawcontactmanifold_contact_local_p2:XS,rawcontactmanifold_contact_tangent_impulse_x:$S,rawcontactmanifold_contact_tangent_impulse_y:ZS,rawcontactmanifold_local_n1:zS,rawcontactmanifold_local_n2:kS,rawcontactmanifold_normal:BS,rawcontactmanifold_num_contacts:GS,rawcontactmanifold_num_solver_contacts:JS,rawcontactmanifold_solver_contact_dist:eE,rawcontactmanifold_solver_contact_friction:tE,rawcontactmanifold_solver_contact_point:QS,rawcontactmanifold_solver_contact_restitution:nE,rawcontactmanifold_solver_contact_tangent_velocity:iE,rawcontactmanifold_subshape1:HS,rawcontactmanifold_subshape2:VS,rawcontactpair_collider1:US,rawcontactpair_collider2:NS,rawcontactpair_contactManifold:OS,rawcontactpair_numContactManifolds:FS,rawdebugrenderpipeline_colors:gT,rawdebugrenderpipeline_new:mT,rawdebugrenderpipeline_render:yT,rawdebugrenderpipeline_vertices:_T,rawdeserializedworld_takeBodies:rA,rawdeserializedworld_takeBroadPhase:nA,rawdeserializedworld_takeColliders:sA,rawdeserializedworld_takeGravity:QT,rawdeserializedworld_takeImpulseJoints:aA,rawdeserializedworld_takeIntegrationParameters:eA,rawdeserializedworld_takeIslandManager:tA,rawdeserializedworld_takeMultibodyJoints:oA,rawdeserializedworld_takeNarrowPhase:iA,rawdynamicraycastvehiclecontroller_add_wheel:ov,rawdynamicraycastvehiclecontroller_chassis:nv,rawdynamicraycastvehiclecontroller_current_vehicle_speed:tv,rawdynamicraycastvehiclecontroller_index_forward_axis:sv,rawdynamicraycastvehiclecontroller_index_up_axis:iv,rawdynamicraycastvehiclecontroller_new:ev,rawdynamicraycastvehiclecontroller_num_wheels:cv,rawdynamicraycastvehiclecontroller_set_index_forward_axis:av,rawdynamicraycastvehiclecontroller_set_index_up_axis:rv,rawdynamicraycastvehiclecontroller_set_wheel_axle_cs:Nv,rawdynamicraycastvehiclecontroller_set_wheel_brake:Av,rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs:dv,rawdynamicraycastvehiclecontroller_set_wheel_direction_cs:Dv,rawdynamicraycastvehiclecontroller_set_wheel_engine_force:Iv,rawdynamicraycastvehiclecontroller_set_wheel_friction_slip:Ov,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force:Ev,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel:mv,rawdynamicraycastvehiclecontroller_set_wheel_radius:gv,rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness:zv,rawdynamicraycastvehiclecontroller_set_wheel_steering:Cv,rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression:wv,rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation:bv,rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length:fv,rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness:xv,rawdynamicraycastvehiclecontroller_update_vehicle:lv,rawdynamicraycastvehiclecontroller_wheel_axle_cs:Uv,rawdynamicraycastvehiclecontroller_wheel_brake:Tv,rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs:hv,rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws:Wv,rawdynamicraycastvehiclecontroller_wheel_contact_point_ws:Xv,rawdynamicraycastvehiclecontroller_wheel_direction_cs:Lv,rawdynamicraycastvehiclecontroller_wheel_engine_force:Pv,rawdynamicraycastvehiclecontroller_wheel_forward_impulse:Hv,rawdynamicraycastvehiclecontroller_wheel_friction_slip:Fv,rawdynamicraycastvehiclecontroller_wheel_ground_object:Kv,rawdynamicraycastvehiclecontroller_wheel_hard_point_ws:qv,rawdynamicraycastvehiclecontroller_wheel_is_in_contact:Yv,rawdynamicraycastvehiclecontroller_wheel_max_suspension_force:Sv,rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel:pv,rawdynamicraycastvehiclecontroller_wheel_radius:_v,rawdynamicraycastvehiclecontroller_wheel_rotation:kv,rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness:Bv,rawdynamicraycastvehiclecontroller_wheel_side_impulse:Vv,rawdynamicraycastvehiclecontroller_wheel_steering:Rv,rawdynamicraycastvehiclecontroller_wheel_suspension_compression:vv,rawdynamicraycastvehiclecontroller_wheel_suspension_force:Gv,rawdynamicraycastvehiclecontroller_wheel_suspension_length:jv,rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation:Mv,rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length:uv,rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness:yv,raweventqueue_clear:CT,raweventqueue_drainCollisionEvents:AT,raweventqueue_drainContactForceEvents:RT,raweventqueue_new:TT,rawgenericjoint_fixed:Qw,rawgenericjoint_generic:Yw,rawgenericjoint_prismatic:Jw,rawgenericjoint_revolute:e0,rawgenericjoint_rope:$w,rawgenericjoint_spherical:Zw,rawgenericjoint_spring:Kw,rawimpulsejointset_contains:Mw,rawimpulsejointset_createJoint:xw,rawimpulsejointset_forEachJointAttachedToRigidBody:Sw,rawimpulsejointset_forEachJointHandle:bw,rawimpulsejointset_jointAnchor1:iw,rawimpulsejointset_jointAnchor2:rw,rawimpulsejointset_jointBodyHandle1:Qv,rawimpulsejointset_jointBodyHandle2:ew,rawimpulsejointset_jointConfigureMotor:_w,rawimpulsejointset_jointConfigureMotorModel:fw,rawimpulsejointset_jointConfigureMotorPosition:mw,rawimpulsejointset_jointConfigureMotorVelocity:pw,rawimpulsejointset_jointContactsEnabled:ow,rawimpulsejointset_jointFrameX1:tw,rawimpulsejointset_jointFrameX2:nw,rawimpulsejointset_jointLimitsEnabled:lw,rawimpulsejointset_jointLimitsMax:dw,rawimpulsejointset_jointLimitsMin:hw,rawimpulsejointset_jointSetAnchor1:sw,rawimpulsejointset_jointSetAnchor2:aw,rawimpulsejointset_jointSetContactsEnabled:cw,rawimpulsejointset_jointSetLimits:uw,rawimpulsejointset_jointType:Jv,rawimpulsejointset_len:ww,rawimpulsejointset_new:yw,rawimpulsejointset_remove:vw,rawintegrationparameters_contact_erp:Rw,rawintegrationparameters_dt:Aw,rawintegrationparameters_lengthUnit:Lw,rawintegrationparameters_maxCcdSubsteps:Iw,rawintegrationparameters_minIslandSize:Pw,rawintegrationparameters_new:Tw,rawintegrationparameters_normalizedAllowedLinearError:AA,rawintegrationparameters_normalizedPredictionDistance:qA,rawintegrationparameters_numAdditionalFrictionIterations:RA,rawintegrationparameters_numInternalPgsIterations:CA,rawintegrationparameters_numSolverIterations:Cw,rawintegrationparameters_set_contact_natural_frequency:Uw,rawintegrationparameters_set_dt:Dw,rawintegrationparameters_set_lengthUnit:kw,rawintegrationparameters_set_maxCcdSubsteps:zw,rawintegrationparameters_set_minIslandSize:Bw,rawintegrationparameters_set_normalizedAllowedLinearError:Nw,rawintegrationparameters_set_normalizedPredictionDistance:Fw,rawintegrationparameters_set_numAdditionalFrictionIterations:uA,rawintegrationparameters_set_numInternalPgsIterations:fA,rawintegrationparameters_set_numSolverIterations:Ow,rawintegrationparameters_switchToSmallStepsPgsSolver:Vw,rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart:Gw,rawintegrationparameters_switchToStandardPgsSolver:Hw,rawislandmanager_forEachActiveRigidBodyHandle:jw,rawislandmanager_new:Xw,rawkinematiccharactercontroller_autostepEnabled:_x,rawkinematiccharactercontroller_autostepIncludesDynamicBodies:mx,rawkinematiccharactercontroller_autostepMaxHeight:fx,rawkinematiccharactercontroller_autostepMinWidth:px,rawkinematiccharactercontroller_computeColliderMovement:Ax,rawkinematiccharactercontroller_computedCollision:Ix,rawkinematiccharactercontroller_computedGrounded:Cx,rawkinematiccharactercontroller_computedMovement:Rx,rawkinematiccharactercontroller_disableAutostep:yx,rawkinematiccharactercontroller_disableSnapToGround:Ex,rawkinematiccharactercontroller_enableAutostep:gx,rawkinematiccharactercontroller_enableSnapToGround:Sx,rawkinematiccharactercontroller_maxSlopeClimbAngle:xx,rawkinematiccharactercontroller_minSlopeSlideAngle:wx,rawkinematiccharactercontroller_new:ax,rawkinematiccharactercontroller_normalNudgeFactor:cx,rawkinematiccharactercontroller_numComputedCollisions:Px,rawkinematiccharactercontroller_offset:TA,rawkinematiccharactercontroller_setMaxSlopeClimbAngle:vx,rawkinematiccharactercontroller_setMinSlopeSlideAngle:Mx,rawkinematiccharactercontroller_setNormalNudgeFactor:lx,rawkinematiccharactercontroller_setOffset:hx,rawkinematiccharactercontroller_setSlideEnabled:ux,rawkinematiccharactercontroller_setUp:ox,rawkinematiccharactercontroller_slideEnabled:dx,rawkinematiccharactercontroller_snapToGroundDistance:bx,rawkinematiccharactercontroller_snapToGroundEnabled:Tx,rawkinematiccharactercontroller_up:_A,rawmultibodyjointset_contains:m0,rawmultibodyjointset_createJoint:f0,rawmultibodyjointset_forEachJointAttachedToRigidBody:g0,rawmultibodyjointset_forEachJointHandle:_0,rawmultibodyjointset_jointAnchor1:r0,rawmultibodyjointset_jointAnchor2:s0,rawmultibodyjointset_jointContactsEnabled:a0,rawmultibodyjointset_jointFrameX1:n0,rawmultibodyjointset_jointFrameX2:i0,rawmultibodyjointset_jointLimitsEnabled:c0,rawmultibodyjointset_jointLimitsMax:h0,rawmultibodyjointset_jointLimitsMin:l0,rawmultibodyjointset_jointSetContactsEnabled:o0,rawmultibodyjointset_jointType:t0,rawmultibodyjointset_new:u0,rawmultibodyjointset_remove:p0,rawnarrowphase_contact_pair:PS,rawnarrowphase_contact_pairs_with:CS,rawnarrowphase_intersection_pair:LS,rawnarrowphase_intersection_pairs_with:IS,rawnarrowphase_new:RS,rawphysicspipeline_is_profiler_enabled:DT,rawphysicspipeline_new:IT,rawphysicspipeline_set_profiler_enabled:LT,rawphysicspipeline_step:$T,rawphysicspipeline_stepWithEvents:ZT,rawphysicspipeline_timing_broad_phase:FT,rawphysicspipeline_timing_ccd:GT,rawphysicspipeline_timing_ccd_broad_phase:XT,rawphysicspipeline_timing_ccd_narrow_phase:jT,rawphysicspipeline_timing_ccd_solver:qT,rawphysicspipeline_timing_ccd_toi_computation:WT,rawphysicspipeline_timing_collision_detection:NT,rawphysicspipeline_timing_island_construction:YT,rawphysicspipeline_timing_narrow_phase:OT,rawphysicspipeline_timing_solver:BT,rawphysicspipeline_timing_step:UT,rawphysicspipeline_timing_user_changes:KT,rawphysicspipeline_timing_velocity_assembly:zT,rawphysicspipeline_timing_velocity_resolution:kT,rawphysicspipeline_timing_velocity_update:HT,rawphysicspipeline_timing_velocity_writeback:VT,rawpidcontroller_angular_correction:Jx,rawpidcontroller_apply_angular_correction:$x,rawpidcontroller_apply_linear_correction:Kx,rawpidcontroller_linear_correction:Zx,rawpidcontroller_new:Gx,rawpidcontroller_reset_integrals:Yx,rawpidcontroller_set_axes_mask:qx,rawpidcontroller_set_kd:jx,rawpidcontroller_set_ki:Xx,rawpidcontroller_set_kp:Wx,rawpointcolliderprojection_colliderHandle:cE,rawpointcolliderprojection_featureId:uE,rawpointcolliderprojection_featureType:dE,rawpointcolliderprojection_isInside:hE,rawpointcolliderprojection_point:lE,rawpointprojection_isInside:aE,rawpointprojection_point:sE,rawraycolliderhit_colliderHandle:FA,rawraycolliderhit_timeOfImpact:zA,rawraycolliderintersection_colliderHandle:DA,rawraycolliderintersection_featureId:KA,rawraycolliderintersection_featureType:NA,rawraycolliderintersection_normal:wA,rawraycolliderintersection_time_of_impact:OA,rawrayintersection_featureId:YA,rawrayintersection_featureType:LA,rawrayintersection_normal:vA,rawrayintersection_time_of_impact:UA,rawrigidbodyset_contains:OM,rawrigidbodyset_createRigidBody:NM,rawrigidbodyset_forEachRigidBodyHandle:BM,rawrigidbodyset_len:PA,rawrigidbodyset_new:UM,rawrigidbodyset_propagateModifiedBodyPositionsToColliders:zM,rawrigidbodyset_rbAddForce:wM,rawrigidbodyset_rbAddForceAtPoint:EM,rawrigidbodyset_rbAddTorque:bM,rawrigidbodyset_rbAdditionalSolverIterations:AM,rawrigidbodyset_rbAngularDamping:uM,rawrigidbodyset_rbAngvel:N0,rawrigidbodyset_rbApplyImpulse:MM,rawrigidbodyset_rbApplyImpulseAtPoint:TM,rawrigidbodyset_rbApplyTorqueImpulse:SM,rawrigidbodyset_rbBodyType:aM,rawrigidbodyset_rbCollider:sM,rawrigidbodyset_rbDominanceGroup:H0,rawrigidbodyset_rbEffectiveAngularInertia:eM,rawrigidbodyset_rbEffectiveInvMass:q0,rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt:Q0,rawrigidbodyset_rbEnableCcd:G0,rawrigidbodyset_rbGravityScale:gM,rawrigidbodyset_rbInvMass:j0,rawrigidbodyset_rbInvPrincipalInertiaSqrt:$0,rawrigidbodyset_rbIsCcdEnabled:nM,rawrigidbodyset_rbIsDynamic:hM,rawrigidbodyset_rbIsEnabled:_M,rawrigidbodyset_rbIsFixed:cM,rawrigidbodyset_rbIsKinematic:lM,rawrigidbodyset_rbIsMoving:M0,rawrigidbodyset_rbIsSleeping:w0,rawrigidbodyset_rbLinearDamping:dM,rawrigidbodyset_rbLinvel:U0,rawrigidbodyset_rbLocalCom:Y0,rawrigidbodyset_rbLockRotations:z0,rawrigidbodyset_rbLockTranslations:O0,rawrigidbodyset_rbMass:X0,rawrigidbodyset_rbNextRotation:S0,rawrigidbodyset_rbNextTranslation:b0,rawrigidbodyset_rbNumColliders:rM,rawrigidbodyset_rbPrincipalInertia:J0,rawrigidbodyset_rbPrincipalInertiaLocalFrame:Z0,rawrigidbodyset_rbRecomputeMassPropertiesFromColliders:I0,rawrigidbodyset_rbResetForces:xM,rawrigidbodyset_rbResetTorques:vM,rawrigidbodyset_rbRotation:x0,rawrigidbodyset_rbSetAdditionalMass:L0,rawrigidbodyset_rbSetAdditionalMassProperties:D0,rawrigidbodyset_rbSetAdditionalSolverIterations:RM,rawrigidbodyset_rbSetAngularDamping:pM,rawrigidbodyset_rbSetAngvel:R0,rawrigidbodyset_rbSetBodyType:oM,rawrigidbodyset_rbSetDominanceGroup:V0,rawrigidbodyset_rbSetEnabled:mM,rawrigidbodyset_rbSetEnabledRotations:k0,rawrigidbodyset_rbSetEnabledTranslations:B0,rawrigidbodyset_rbSetGravityScale:yM,rawrigidbodyset_rbSetLinearDamping:fM,rawrigidbodyset_rbSetLinvel:A0,rawrigidbodyset_rbSetNextKinematicRotation:P0,rawrigidbodyset_rbSetNextKinematicTranslation:C0,rawrigidbodyset_rbSetRotation:T0,rawrigidbodyset_rbSetSoftCcdPrediction:W0,rawrigidbodyset_rbSetTranslation:E0,rawrigidbodyset_rbSetUserData:PM,rawrigidbodyset_rbSleep:v0,rawrigidbodyset_rbSoftCcdPrediction:iM,rawrigidbodyset_rbTranslation:y0,rawrigidbodyset_rbUserData:CM,rawrigidbodyset_rbUserForce:IM,rawrigidbodyset_rbUserTorque:LM,rawrigidbodyset_rbVelocityAtPoint:F0,rawrigidbodyset_rbWakeUp:tM,rawrigidbodyset_rbWorldCom:K0,rawrigidbodyset_remove:FM,rawrotation_identity:eT,rawrotation_new:QE,rawrotation_w:nT,rawrotation_x:tT,rawrotation_y:HA,rawrotation_z:VA,rawsdpmatrix3_elements:fT,rawserializationpipeline_deserializeAll:dA,rawserializationpipeline_new:lA,rawserializationpipeline_serializeAll:hA,rawshape_ball:yE,rawshape_capsule:vE,rawshape_castRay:GE,rawshape_castRayAndGetNormal:WE,rawshape_castShape:OE,rawshape_cone:bE,rawshape_contactShape:zE,rawshape_containsPoint:kE,rawshape_convexHull:DE,rawshape_convexMesh:NE,rawshape_cuboid:_E,rawshape_cylinder:wE,rawshape_halfspace:xE,rawshape_heightfield:CE,rawshape_intersectsRay:VE,rawshape_intersectsShape:BE,rawshape_polyline:AE,rawshape_projectPoint:HE,rawshape_roundCone:SE,rawshape_roundConvexHull:UE,rawshape_roundConvexMesh:FE,rawshape_roundCuboid:gE,rawshape_roundCylinder:ME,rawshape_roundTriangle:LE,rawshape_segment:PE,rawshape_triangle:IE,rawshape_trimesh:RE,rawshape_voxels:EE,rawshape_voxelsFromPoints:TE,rawshapecasthit_normal1:qE,rawshapecasthit_normal2:YE,rawshapecasthit_time_of_impact:kA,rawshapecasthit_witness1:jE,rawshapecasthit_witness2:EA,rawshapecontact_distance:IA,rawshapecontact_normal1:MA,rawshapecontact_normal2:gA,rawshapecontact_point1:yA,rawshapecontact_point2:xA,rawvector_new:rT,rawvector_set_x:sT,rawvector_set_y:pA,rawvector_set_z:aT,rawvector_x:GA,rawvector_xyz:oT,rawvector_xzy:hT,rawvector_y:WA,rawvector_yxz:cT,rawvector_yzx:dT,rawvector_z:XA,rawvector_zero:iT,rawvector_zxy:lT,rawvector_zyx:uT,reserve_memory:mA,version:rx},Symbol.toStringTag,{value:"Module"}));vy(aR);class eh{#e=void 0;#t;#n=[];#i=[];#s=[];constructor(e,t,n){this.#t=t;const i=Dn.get(),s=new Og,a="/MyEngine/"+n;s.load(a,o=>{this.#e=o.scene,e.add(this.#e),o.scene.traverse(c=>{if(c.isMesh){c.updateMatrixWorld(!0);const l=c.geometry.clone();if(l.applyMatrix4(c.matrixWorld),!l.index){const y=l.getAttribute("position").count,_=new(y>65535?Uint32Array:Uint16Array)(y);for(let f=0;f<y;f++)_[f]=f;l.setIndex(new THREE.BufferAttribute(_,1))}const d=l.attributes.position.array,h=l.index.array;this.#i.push(d),this.#s.push(h);const u=i.RigidBodyDesc.fixed(),m=t.createRigidBody(u),g=t.createCollider(i.ColliderDesc.trimesh(d,h),m);this.#n.push({body:m,collider:g})}})})}castShadow(e){this.#e==null?setTimeout(()=>{this.castShadow(e)},10):this.#e.traverse(t=>{t.isMesh&&(t.castShadow=e)})}receiveShadow(e){this.#e==null?setTimeout(()=>{this.receiveShadow(e)},10):this.#e.traverse(t=>{t.isMesh&&(t.receiveShadow=e)})}setPosition(e,t,n){let i=e;typeof e=="number"&&(i={x:e,y:t,z:n}),this.#n.length==0?setTimeout(()=>{this.setPosition(i)},10):(this.#n.forEach(s=>{s.body.setTranslation(i,!0)}),this.#e.position.set(i.x,i.y,i.z))}}let yr=class th{x=0;y=0;z=0;constructor(e,t,n){this.x=e,this.y=t,this.z=n}normalize(){const e=this.length();e!=0&&(this.x/=e,this.y/=e,this.z/=e)}length(){return Math.sqrt(this.x**2+this.y**2+this.z**2)}clone(){return new th(this.x,this.y,this.z)}add(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}multiply(e){this.x*=e,this.y*=e,this.z*=e}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){const t=this.y*e.z-this.z*e.y,n=this.z*e.x-this.x*e.z,i=this.x*e.y-this.y*e.x;this.x=t,this.y=n,this.z=i}};class oR extends un{constructor(e,t,{radius:n=1,widthSegments:i=32,heightSegments:s=32,materialType:a="phong",colliderType:o="dynamic"}){super();const c=Dg(t,{radius:n,colliderType:o});this._Body=c.body,this._Collider=c.collider,this._ColliderDesc=c.colliderDesc,this._Collider.setCollisionGroups(1<<16|65535);const h=Ig(e,{radius:n,widthSegments:i,heightSegments:s});this._Scene=e,this._World=t,this._Mesh=h.mesh,this._Geometry=h.geometry,this._Material=h.material}}class cR{#e;#t;#n;#i;#s;#r=2;#a=1/2;constructor(e,t,n){this.#t=n,this.#e=new Fg(e,t,{radius:.5,height:1,colliderType:"dynamic"}),this.#e.lockRotation(!0,!1,!0),this.#e.setLinearDamping(.2),this.#e.getCollider().setCollisionGroups(2<<16|1),this.#i=t,this.#s=e}applyMovement(e){const t=this.#t.genTranslationVector(e);t.y=0,t.normalize(),t.multiply(this.#a);const n=this.#e.getLinearVelocity();new yr(Math.abs(n.x),0,Math.abs(n.z)).length()<this.#r&&this.#e.applyLinearVelocity(t.x,0,t.z),e.has("Space")&&this.isOnGround()&&this.#e.applyImpulse(0,8,0)}isOnGround(){const e=this.#e.getPosition(),t=Dn.get(),n=new t.Ray({x:e.x,y:e.y-.9,z:e.z},{x:0,y:-1,z:0}),i=this.#i.castRay(n,100,!0,0,4294901761);return!!(i&&(i.collider,i.timeOfImpact>=0&&i.timeOfImpact<=.1))}setPosition(e,t,n){this.#e.setPosition(e,t,n)}getPosition(){return this.#e.getPosition()}synchronize(){this.#t.position.x=this.#e.getPosition().x,this.#t.position.y=this.#e.getPosition().y+.5,this.#t.position.z=this.#e.getPosition().z}}class lR extends un{constructor(e,t,{width:n=1,height:i=1,depth:s=.001,materialType:a="phong",colliderType:o="dynamic"}){super();const c=To(t,{width:n/2,height:i/2,depth:s/2,colliderType:o});this._Body=c.body,this._Collider=c.collider,this._ColliderDesc=c.colliderDesc,this._Collider.setCollisionGroups(1<<16|65535);const h=So(e,{width:n,height:i,materialType:a});this._Scene=e,this._World=t,this._Mesh=h.mesh,this._Geometry=h.geometry,this._Material=h.material,this.setRotation(-90,1,0,0)}}class ll{x=0;y=0;constructor(e,t){this.x=e,this.y=t}normalize(){const e=this.length();e!=0&&(this.x/=e,this.y/=e)}length(){return Math.sqrt(this.x**2,this.y**2)}clone(){return new Vec3(this.x,this.y)}add(e){this.x+=e.x,this.y+=e.y}multiply(e){this.x*=e,this.y*=e}cross(e){}}class hR{#e=90;#t=0;#n=new yr(0,0,0);constructor(){this.updatePosition()}updatePosition(){this.#n.x=Math.sin(this.#e*Math.PI/180)*Math.cos(this.#t*Math.PI/180),this.#n.y=Math.cos(this.#e*Math.PI/180),this.#n.z=Math.sin(this.#e*Math.PI/180)*Math.sin(this.#t*Math.PI/180)}increasePhi(e){const t=this.#e+e;this.#e=t<180&&t>0?t:this.#e}increaseTheta(e){this.#t=this.#t+e>=360?0:this.#t+e,this.#t=this.#t+e<=-360?0:this.#t+e}getPosition(e){const t=this.#n.clone();return t.add(e),t}getVector(){return this.#n.clone()}}class dR extends Lt{#e=new hR;constructor(e=75,t=window.innerWidth/window.innerHeight,n=.1,i=1e3){super(e,t,n,i);const s=this.#e.getPosition(this.position);this.lookAt(s.x,s.y,s.z)}sensibility=.1;renderDistance=10;fov=75;speed=.125;updateOrientation(e,t){this.#e.increasePhi(t*this.sensibility),this.#e.increaseTheta(e*this.sensibility),this.#e.updatePosition();const n=this.#e.getPosition(this.position);this.lookAt(n.x,n.y,n.z)}genTranslationVector(e){const t=new yr(0,0,0);if(e.has("KeyW")||e.has("KeyS")){const i=this.#e.getVector(),s=new ll(i.x,i.z);s.normalize(),e.has("KeyW")&&(t.x+=s.x,t.z+=s.y),e.has("KeyS")&&(t.x-=s.x,t.z-=s.y)}if(e.has("KeyA")||e.has("KeyD")){const i=this.#e.getVector(),s=new ll(-i.z,i.x);s.normalize(),e.has("KeyA")&&(t.x-=s.x,t.z-=s.y),e.has("KeyD")&&(t.x+=s.x,t.z+=s.y)}let n=0;return e.has("Space")&&(n+=.5),e.has("ShiftLeft")&&(n-=.5),t.normalize(),t.y=n,t}applyMovement(e){const t=this.genTranslationVector(e);t.multiply(this.speed),this.translate(t.x,t.y,t.z)}translate(e,t,n){this.position.x+=e,this.position.y+=t,this.position.z+=n}setPosition(e,t,n){this.position.set(e,t,n)}getPosition(){return new yr(this.position.x,this.position.y,this.position.z).clone()}getTargetPosition(){return this.#e.getPosition(this.position)}getTargetVector(){return this.#e.getVector()}updateProjection(e,t){this.aspect=e/t,this.updateProjectionMatrix()}}class uR extends ys{constructor(e,t,n,i){super(e/-2,e/2,t/2,t/-2,n,i)}updateProjection(e,t){this.left=-e/2,this.right=e/2,this.top=t/2,this.bottom=-t/2,this.updateProjectionMatrix()}}class fR extends Pg{#e=[];constructor(e){const t=document.querySelector(e);super({antialias:!0,canvas:t})}getCanvas(){return this.domElement}addCamera(e){this.#e.push(e)}resizeCameras(){const e=this.domElement,t=window.devicePixelRatio,n=Math.floor(e.clientWidth*t),i=Math.floor(e.clientHeight*t);(e.width!==n||e.height!==i)&&(this.setSize(n,i,!1),this.#e.forEach(a=>{a.updateProjection(n,i)}))}}class pR{#e;#t;#n;#i;constructor(e){const t=e.domElement,n=t.clientWidth,i=t.clientHeight;this.#e=new Ll,this.#t=new uR(n,i,-10,1e3),this.#i=e,this.#n=Kl(this.#e,{radius:5,segments:16,materialType:"basic"}),this.#e.add(this.#n.mesh),e.addCamera(this.#t)}render(){this.#i.render(this.#e,this.#t)}}class mt{#e;#t;#n;static#i=[];constructor(e,t,n){this.#e=e,this.#t=t,this.#n=n}static#s(e){if(mt.#i.find(n=>n.getPath()==e))throw new Error(`The texture path "${e}" was already loaded!`)}static#r(e){if(mt.#i.find(n=>n.getIdentifier()==e))throw new Error(`Identifier "${e}" already exists!`)}static async loadTexture(e,t){mt.#r(e),mt.#s(t);const n=new Hl,i="/MyEngine//"+t,s=await n.loadAsync(i);s.colorSpace=wt;const a=new mt(e,t,s);mt.#i.push(a)}static getTextureById(e){const t=mt.#i.find(n=>n.getIdentifier()==e);if(!t)throw new Error(`Texture identifier "${e}" does not exists!`);return t.getTexture().clone()}getIdentifier(){return this.#e}getPath(){return this.#t}getTexture(){return this.#n}}class mR{keysPressed=new Set;#e=0;#t=0;leftClick=!1;rightClick=!1;middleClick=!1;constructor(e){document.addEventListener("keydown",t=>{this.keysPressed.add(t.code)}),document.addEventListener("keyup",t=>{this.keysPressed.delete(t.code)}),e.addEventListener("click",()=>{e.requestPointerLock()}),document.addEventListener("mousedown",(function(t){switch(t.button){case 0:this.leftClick=!0;break;case 1:this.middleClick=!0;break;case 2:this.rightClick=!0;break}}).bind(this)),document.addEventListener("mouseup",(function(t){switch(t.button){case 0:this.leftClick=!1;break;case 1:this.middleClick=!1;break;case 2:this.rightClick=!1;break}}).bind(this)),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===e?document.addEventListener("mousemove",this.#n,!1):document.removeEventListener("mousemove",this.#n,!1)})}#n=e=>{this.#e=e.movementX||0,this.#t=e.movementY||0};getMovementX(){let e=this.#e;return this.#e=0,e}getMovementY(){let e=this.#t;return this.#t=0,e}}class nh{#e;#t;#n;#i;#s;#r={x:0,y:0,z:0};#a;constructor(e,t,n=1,i=1){t.wrapS=jn,t.repeat.set(n,i),this.#a=e,this.#s=t.image.width/100*n,this.#i=t.image.height/100*i;const s=So(e,{width:this.#s,height:this.#i,materialType:"phong"});s.mesh.position.y=this.#i/2,this.#r.y=this.#i/2,this.#e=s.mesh,this.#t=s.geometry,this.#n=s.material,this.#n.map=t,this.#n.transparent=!0,this.#n.alphaTest=.5}setDoubleSide(e){e?this.#n.side=$t:this.#n.side=pn}getWidth(){return this.#s}getHeight(){return this.#i}setPosition(e,t,n){let i=e;typeof e=="number"&&(i={x:e,y:t,z:n}),this.#e.position.set(i.x,i.y,i.z),this.#r=i}translate(e,t,n){let i=e;typeof e=="number"&&(i={x:e,y:t,z:n});const s=this.#r;this.#e.position.set(s.x+i.x,s.y+i.y,s.z+i.z),this.#r={x:s.x+i.x,y:s.y+i.y,z:s.z+i.z}}rotate(e){this.#e.rotation.y=e*Math.PI/180}align(e){const t=new yr(e.x-this.#r.x,0,e.z-this.#r.z);t.normalize();const n=Math.atan2(t.x,t.z);this.#e.rotation.y=n}dispose(){Eo(scene,this.#e,this.#n,this.#t)}}class ih{_Shadow;_Surface;_Body;_Scene;_World;constructor(e,t){this._Scene=e,this._World=t}setPosition(e,t,n){let i=e;typeof e=="number"&&(i={x:e,y:t,z:n}),this._Shadow&&this._Shadow.mesh.position.set(i.x,i.y+.001,i.z),i.y+=this.getHeight()/2,this._Body.body.setTranslation(i,!0),this._Surface.setPosition(i)}setRotation(e){this._Surface.rotate(e),e=e*Math.PI/180;const t={x:0,y:Math.sin(e/2),z:0,w:Math.cos(e/2)};this._Shadow&&(this._Shadow.mesh.rotation.z=e),this._Body.body.setRotation(t,!0)}getWidth(){return this._Surface.getWidth()}getHeight(){return this._Surface.getHeight()}dispose(){Eo(scene),this._World.removeRigidBody(this._Body),this._World.removeCollider(this._Body.collider,!0)}}class Co extends ih{constructor(e,t,n="tree1"){super(e,t);const i=mt.getTextureById(n);this._Surface=new nh(e,i),this._Shadow=Kl(e,{radius:1.5}),this._Shadow.mesh.rotation.x=-90*Math.PI/180,this._Shadow.mesh.position.y=.001,this._Shadow.material.color.set("#2b2b2b"),this._Shadow.material.transparent=!0,this._Shadow.material.opacity=.5,this._Body=Ng(t,{halfHeight:3,radius:.25,colliderType:"fixed"}),this._Body.body.setTranslation({x:0,y:this.getHeight()/2,z:0},!0)}align(e){this._Surface.align(e)}}class _R extends ih{constructor(e,t,n=1,i="fence1"){super(e,t);const s=mt.getTextureById(i);s.wrapS=jn,s.repeat.set(n,1),this._Surface=new nh(e,s,n,1),this._Surface.setDoubleSide(!0),this._Shadow=So(e,{width:this.getWidth(),height:.25}),this._Shadow.mesh.rotation.x=-90*Math.PI/180,this._Shadow.material.color.set("#2b2b2b"),this._Shadow.material.transparent=!0,this._Shadow.material.opacity=.5,this._Shadow.mesh.position.y=.01,this._Body=To(t,{width:this.getWidth()/2,height:this.getHeight()/2,depth:.25,colliderType:"fixed"}),this._Body.body.setTranslation({x:0,y:this.getHeight()/2,z:0},!0)}}const gR=[{identifier:"tree1",path:"assets/textures/tree-1.png"},{identifier:"fence1",path:"assets/textures/white-fence.png"}],yR={textures:gR};async function xR(){for(const r of yR.textures)await mt.loadTexture(r.identifier,r.path)}const vR=new Dn;await vR.init();const wR=Dn.get(),Nt=new wR.World({x:0,y:-9.81,z:0}),St=new Ll,fn=new fR("#scene");fn.shadowMap.enabled=!0;fn.shadowMap.type=dl;fn.autoClear=!1;fn.setClearColor("#a1e0f0");const hn=new dR;hn.setPosition(0,5,0);fn.addCamera(hn);const es=new mR(fn.getCanvas()),ls=new cR(St,Nt,hn);ls.setPosition(10,10,0);const MR=new pR(fn),rh=new Yl(St,{width:1024,height:1024,depth:1024,materialType:"basic"});await mt.loadTexture("background","assets/textures/background.png");rh.material.map=mt.getTextureById("background");rh.material.side=$t;const sh=new lR(St,Nt,{width:256,height:256,materialType:"basic",colliderType:"fixed"});await mt.loadTexture("grid","assets/textures/grid.png");const ah=mt.getTextureById("grid");ah.magFilter=Et;sh.setTexture(ah);const oh=sh.getMaterial();oh.transparent=!0;oh.magFilter=Et;const bR=new eh(St,Nt,"assets/models/Tardis.gltf");bR.setPosition(-8,0,-27);const SR=new eh(St,Nt,"assets/models/Predio.gltf");SR.setPosition(6,0,30);await xR();const ch=new Co(St,Nt);ch.setPosition(-12,0,22);const lh=new Co(St,Nt);lh.setPosition(-20,0,19);const hh=new Co(St,Nt);hh.setPosition(1,0,16);const ER=new _R(St,Nt,10);ER.setPosition(0,0,13);await mt.loadTexture("container","assets/textures/container-2.png");const dh=new br(St,Nt,{width:1.6,height:1.6,depth:1.6});dh.setPosition(0,1,0);dh.setTexture(mt.getTextureById("container"));const uh=new br(St,Nt,{width:1.6,height:1.6,depth:1.6});uh.setTexture(mt.getTextureById("container"));uh.setPosition(.25,2.6,0);const fh=new br(St,Nt,{width:1.6,height:1.6,depth:1.6});fh.setTexture(mt.getTextureById("container"));fh.setPosition(2,1,1);const ph=new br(St,Nt,{width:1.6,height:1.6,depth:1.6});ph.setTexture(mt.getTextureById("container"));ph.setPosition(-2,1,1.5);const mh=new br(St,Nt,{width:1.6,height:1.6,depth:1.6});mh.setTexture(mt.getTextureById("container"));mh.setPosition(-6,1,3);const TR=new Nu("#ffffff");St.add(TR);const AR=new Vl("#ffffff",.5);St.add(AR);function _h(r){const e=document.getElementById("PlayerPos"),t=ls.getPosition();if(e.textContent="Position:  "+Math.round(t.x)+", "+Math.round(t.y)+", "+Math.round(t.z),hn.updateOrientation(es.getMovementX(),es.getMovementY()),ls.applyMovement(es.keysPressed),Nt.step(),ch.align(hn.getPosition()),lh.align(hn.getPosition()),hh.align(hn.getPosition()),ls.synchronize(),un.synchronize(),fn.clear(),fn.render(St,hn),MR.render(),fn.resizeCameras(),es.leftClick){const n=new oR(St,Nt,{radius:.25});n.setPosition(hn.getTargetPosition()),n.setLifeTime(5),n.setMass(2);const i=hn.getTargetVector();n.applyImpulse(i.x,i.y,i.z)}requestAnimationFrame(_h)}requestAnimationFrame(_h);
