(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="165",Dr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fx=0,vd=1,Vx=2,qp=1,zx=2,ss=3,Vs=0,In=1,ls=2,Us=0,ao=1,yd=2,Md=3,Sd=4,Bx=5,ur=100,kx=101,Hx=102,Gx=103,Wx=104,Xx=200,qx=201,Yx=202,jx=203,Au=204,Nu=205,$x=206,Kx=207,Zx=208,Jx=209,Qx=210,ev=211,tv=212,nv=213,iv=214,sv=0,rv=1,ov=2,vc=3,av=4,cv=5,lv=6,uv=7,Wc=0,hv=1,dv=2,ni=0,Yp=1,jp=2,$p=3,Kp=4,fv=5,Zp=6,pv=7,Jp=300,Mo=301,So=302,bu=303,wu=304,Xc=306,Ru=1e3,fr=1001,Cu=1002,Sn=1003,mv=1004,Va=1005,Ei=1006,_l=1007,Rs=1008,zs=1009,gv=1010,_v=1011,yc=1012,Qp=1013,To=1014,us=1015,Na=1016,em=1017,tm=1018,Eo=1020,xv=35902,vv=1021,yv=1022,ki=1023,Mv=1024,Sv=1025,co=1026,Ao=1027,Tv=1028,nm=1029,Ev=1030,im=1031,sm=1033,xl=33776,vl=33777,yl=33778,Ml=33779,Td=35840,Ed=35841,Ad=35842,Nd=35843,bd=36196,wd=37492,Rd=37496,Cd=37808,Pd=37809,Ld=37810,Id=37811,Dd=37812,Ud=37813,Od=37814,Fd=37815,Vd=37816,zd=37817,Bd=37818,kd=37819,Hd=37820,Gd=37821,Sl=36492,Wd=36494,Xd=36495,Av=36283,qd=36284,Yd=36285,jd=36286,Nv=3200,bv=3201,ps=0,rm=1,ws="",Si="srgb",Ii="srgb-linear",mh="display-p3",qc="display-p3-linear",Mc="linear",bt="srgb",Sc="rec709",Tc="p3",Or=7680,$d=519,wv=512,om=513,Rv=514,am=515,Cv=516,Pv=517,Lv=518,Iv=519,Ec=35044,Pu=35048,Kd="300 es",bi=2e3,No=2001;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zd=1234567;const ra=Math.PI/180,bo=180/Math.PI;function ds(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function dn(s,e,t){return Math.max(e,Math.min(t,s))}function gh(s,e){return(s%e+e)%e}function Dv(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Uv(s,e,t){return s!==e?(t-s)/(e-s):0}function oa(s,e,t){return(1-t)*s+t*e}function Ov(s,e,t,n){return oa(s,e,1-Math.exp(-t*n))}function Fv(s,e=1){return e-Math.abs(gh(s,e*2)-e)}function Vv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function zv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Bv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function kv(s,e){return s+Math.random()*(e-s)}function Hv(s){return s*(.5-Math.random())}function Gv(s){s!==void 0&&(Zd=s);let e=Zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wv(s){return s*ra}function Xv(s){return s*bo}function qv(s){return(s&s-1)===0&&s!==0}function Yv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $v(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*_,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*_,a*l);break;case"ZYZ":s.set(c*_,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function gt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Yc={DEG2RAD:ra,RAD2DEG:bo,generateUUID:ds,clamp:dn,euclideanModulo:gh,mapLinear:Dv,inverseLerp:Uv,lerp:oa,damp:Ov,pingpong:Fv,smoothstep:Vv,smootherstep:zv,randInt:Bv,randFloat:kv,randFloatSpread:Hv,seededRandom:Gv,degToRad:Wv,radToDeg:Xv,isPowerOfTwo:qv,ceilPowerOfTwo:Yv,floorPowerOfTwo:jv,setQuaternionFromProperEuler:$v,normalize:gt,denormalize:Ai};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,i,r,o,a,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],M=i[1],x=i[4],S=i[7],w=i[2],b=i[5],E=i[8];return r[0]=o*g+a*M+c*w,r[3]=o*p+a*x+c*b,r[6]=o*m+a*S+c*E,r[1]=l*g+u*M+h*w,r[4]=l*p+u*x+h*b,r[7]=l*m+u*S+h*E,r[2]=d*g+f*M+_*w,r[5]=d*p+f*x+_*b,r[8]=d*m+f*S+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tl=new $e;function cm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function da(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kv(){const s=da("canvas");return s.style.display="block",s}const Jd={};function _h(s){s in Jd||(Jd[s]=!0,console.warn(s))}function Zv(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Qd=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ef=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),za={[Ii]:{transfer:Mc,primaries:Sc,toReference:s=>s,fromReference:s=>s},[Si]:{transfer:bt,primaries:Sc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[qc]:{transfer:Mc,primaries:Tc,toReference:s=>s.applyMatrix3(ef),fromReference:s=>s.applyMatrix3(Qd)},[mh]:{transfer:bt,primaries:Tc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ef),fromReference:s=>s.applyMatrix3(Qd).convertLinearToSRGB()}},Jv=new Set([Ii,qc]),_t={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Jv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=za[e].toReference,i=za[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return za[s].primaries},getTransfer:function(s){return s===ws?Mc:za[s].transfer}};function lo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function El(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fr;class Qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=da("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=lo(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lo(t[n]/255)*255):t[n]=lo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ey=0;class lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Al(i[o].image)):r.push(Al(i[o]))}else r=Al(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Al(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ty=0;class Tn extends _s{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=fr,i=fr,r=Ei,o=Rs,a=ki,c=zs,l=Tn.DEFAULT_ANISOTROPY,u=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=ds(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ru:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case Cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ru:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case Cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Jp;Tn.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],_=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,S=(f+1)/2,w=(m+1)/2,b=(u+d)/4,E=(h+g)/4,R=(_+p)/4;return x>S&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=E/n):S>w?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=b/i,r=R/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=E/r,i=R/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-g)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bs extends _s{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends Bs{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xh extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ny extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==d||l!==f||u!==_){let p=1-a;const m=c*d+l*f+u*_+h*g,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const w=Math.sqrt(x),b=Math.atan2(w,m*M);p=Math.sin(p*b)/w,a=Math.sin(a*b)/w}const S=a*M;if(c=c*p+d*S,l=l*p+f*S,u=u*p+_*S,h=h*p+g*S,p===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*f-l*d,e[t+1]=c*_+u*d+l*h-a*f,e[t+2]=l*_+u*f+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"YZX":this._x=d*u*h+l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h-d*f*_;break;case"XZY":this._x=d*u*h-l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nl.copy(this).projectOnVector(e),this.sub(Nl)}reflect(e){return this.sub(Nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nl=new O,tf=new Mr;class ba{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),ka.subVectors(this.max,Yo),Vr.subVectors(e.a,Yo),zr.subVectors(e.b,Yo),Br.subVectors(e.c,Yo),Ms.subVectors(zr,Vr),Ss.subVectors(Br,zr),Zs.subVectors(Vr,Br);let t=[0,-Ms.z,Ms.y,0,-Ss.z,Ss.y,0,-Zs.z,Zs.y,Ms.z,0,-Ms.x,Ss.z,0,-Ss.x,Zs.z,0,-Zs.x,-Ms.y,Ms.x,0,-Ss.y,Ss.x,0,-Zs.y,Zs.x,0];return!bl(t,Vr,zr,Br,ka)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,Vr,zr,Br,ka))?!1:(Ha.crossVectors(Ms,Ss),t=[Ha.x,Ha.y,Ha.z],bl(t,Vr,zr,Br,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new O,new O,new O,new O,new O,new O,new O,new O],vi=new O,Ba=new ba,Vr=new O,zr=new O,Br=new O,Ms=new O,Ss=new O,Zs=new O,Yo=new O,ka=new O,Ha=new O,Js=new O;function bl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Js.fromArray(s,r);const a=i.x*Math.abs(Js.x)+i.y*Math.abs(Js.y)+i.z*Math.abs(Js.z),c=e.dot(Js),l=t.dot(Js),u=n.dot(Js);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const iy=new ba,jo=new O,wl=new O;class vh{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):iy.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const t=jo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(jo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(wl)),this.expandByPoint(jo.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const es=new O,Rl=new O,Ga=new O,Ts=new O,Cl=new O,Wa=new O,Pl=new O;class um{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(es.copy(this.origin).addScaledVector(this.direction,t),es.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rl.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),Ts.copy(this.origin).sub(Rl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ga),a=Ts.dot(this.direction),c=-Ts.dot(Ga),l=Ts.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*c-a,d=o*a-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Rl).addScaledVector(Ga,d),f}intersectSphere(e,t){es.subVectors(e.center,this.origin);const n=es.dot(this.direction),i=es.dot(es)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,es)!==null}intersectTriangle(e,t,n,i,r){Cl.subVectors(t,e),Wa.subVectors(n,e),Pl.crossVectors(Cl,Wa);let o=this.direction.dot(Pl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ts.subVectors(this.origin,e);const c=a*this.direction.dot(Wa.crossVectors(Ts,Wa));if(c<0)return null;const l=a*this.direction.dot(Cl.cross(Ts));if(l<0||c+l>o)return null;const u=-a*Ts.dot(Pl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,_,g,p){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,_,g,p)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/kr.setFromMatrixColumn(e,0).length(),r=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+_*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=_+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,_=l*u,g=l*h;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,_=l*u,g=l*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-f,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=f*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*c,f=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sy,e,ry)}lookAt(e,t,n){const i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Es.crossVectors(n,jn),Es.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Es.crossVectors(n,jn)),Es.normalize(),Xa.crossVectors(jn,Es),i[0]=Es.x,i[4]=Xa.x,i[8]=jn.x,i[1]=Es.y,i[5]=Xa.y,i[9]=jn.y,i[2]=Es.z,i[6]=Xa.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],x=n[7],S=n[11],w=n[15],b=i[0],E=i[4],R=i[8],y=i[12],T=i[1],L=i[5],H=i[9],B=i[13],ne=i[2],ee=i[6],Y=i[10],ie=i[14],K=i[3],ve=i[7],Me=i[11],Te=i[15];return r[0]=o*b+a*T+c*ne+l*K,r[4]=o*E+a*L+c*ee+l*ve,r[8]=o*R+a*H+c*Y+l*Me,r[12]=o*y+a*B+c*ie+l*Te,r[1]=u*b+h*T+d*ne+f*K,r[5]=u*E+h*L+d*ee+f*ve,r[9]=u*R+h*H+d*Y+f*Me,r[13]=u*y+h*B+d*ie+f*Te,r[2]=_*b+g*T+p*ne+m*K,r[6]=_*E+g*L+p*ee+m*ve,r[10]=_*R+g*H+p*Y+m*Me,r[14]=_*y+g*B+p*ie+m*Te,r[3]=M*b+x*T+S*ne+w*K,r[7]=M*E+x*L+S*ee+w*ve,r[11]=M*R+x*H+S*Y+w*Me,r[15]=M*y+x*B+S*ie+w*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+g*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+p*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+m*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],M=h*p*l-g*d*l+g*c*f-a*p*f-h*c*m+a*d*m,x=_*d*l-u*p*l-_*c*f+o*p*f+u*c*m-o*d*m,S=u*g*l-_*h*l+_*a*f-o*g*f-u*a*m+o*h*m,w=_*h*c-u*g*c-_*a*d+o*g*d+u*a*p-o*h*p,b=t*M+n*x+i*S+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=M*E,e[1]=(g*d*r-h*p*r-g*i*f+n*p*f+h*i*m-n*d*m)*E,e[2]=(a*p*r-g*c*r+g*i*l-n*p*l-a*i*m+n*c*m)*E,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*E,e[4]=x*E,e[5]=(u*p*r-_*d*r+_*i*f-t*p*f-u*i*m+t*d*m)*E,e[6]=(_*c*r-o*p*r-_*i*l+t*p*l+o*i*m-t*c*m)*E,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*E,e[8]=S*E,e[9]=(_*h*r-u*g*r-_*n*f+t*g*f+u*n*m-t*h*m)*E,e[10]=(o*g*r-_*a*r+_*n*l-t*g*l-o*n*m+t*a*m)*E,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*E,e[12]=w*E,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*p+t*h*p)*E,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*p-t*a*p)*E,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,_=r*h,g=o*u,p=o*h,m=a*h,M=c*l,x=c*u,S=c*h,w=n.x,b=n.y,E=n.z;return i[0]=(1-(g+m))*w,i[1]=(f+S)*w,i[2]=(_-x)*w,i[3]=0,i[4]=(f-S)*b,i[5]=(1-(d+m))*b,i[6]=(p+M)*b,i[7]=0,i[8]=(_+x)*E,i[9]=(p-M)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=kr.set(i[0],i[1],i[2]).length();const o=kr.set(i[4],i[5],i[6]).length(),a=kr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yi.copy(this);const l=1/r,u=1/o,h=1/a;return yi.elements[0]*=l,yi.elements[1]*=l,yi.elements[2]*=l,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=h,yi.elements[9]*=h,yi.elements[10]*=h,t.setFromRotationMatrix(yi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=bi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===bi)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===No)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=bi){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,f=(n+i)*u;let _,g;if(a===bi)_=(o+r)*h,g=-2*h;else if(a===No)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const kr=new O,yi=new wt,sy=new O(0,0,0),ry=new O(1,1,1),Es=new O,Xa=new O,jn=new O,nf=new wt,sf=new Mr;class gi{constructor(e=0,t=0,n=0,i=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sf.setFromEuler(this),this.setFromQuaternion(sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oy=0;const rf=new O,Hr=new Mr,ts=new wt,qa=new O,$o=new O,ay=new O,cy=new Mr,of=new O(1,0,0),af=new O(0,1,0),cf=new O(0,0,1),lf={type:"added"},ly={type:"removed"},Gr={type:"childadded",child:null},Ll={type:"childremoved",child:null};class en extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new O,t=new gi,n=new Mr,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new $e}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(of,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(cf,e)}translateOnAxis(e,t){return rf.copy(e).applyQuaternion(this.quaternion),this.position.add(rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(of,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt($o,qa,this.up):ts.lookAt(qa,$o,this.up),this.quaternion.setFromRotationMatrix(ts),i&&(ts.extractRotation(i.matrixWorld),Hr.setFromRotationMatrix(ts),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ly),Ll.child=e,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ts.multiply(e.parent.matrixWorld)),e.applyMatrix4(ts),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,ay),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}en.DEFAULT_UP=new O(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new O,ns=new O,Il=new O,is=new O,Wr=new O,Xr=new O,uf=new O,Dl=new O,Ul=new O,Ol=new O;class zi{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mi.subVectors(e,t),i.cross(Mi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Mi.subVectors(i,t),ns.subVectors(n,t),Il.subVectors(e,t);const o=Mi.dot(Mi),a=Mi.dot(ns),c=Mi.dot(Il),l=ns.dot(ns),u=ns.dot(Il),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,_=(o*u-a*c)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,is)===null?!1:is.x>=0&&is.y>=0&&is.x+is.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,is)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,is.x),c.addScaledVector(o,is.y),c.addScaledVector(a,is.z),c)}static isFrontFacing(e,t,n,i){return Mi.subVectors(n,t),ns.subVectors(e,t),Mi.cross(ns).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),Mi.cross(ns).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return zi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Wr.subVectors(i,n),Xr.subVectors(r,n),Dl.subVectors(e,n);const c=Wr.dot(Dl),l=Xr.dot(Dl);if(c<=0&&l<=0)return t.copy(n);Ul.subVectors(e,i);const u=Wr.dot(Ul),h=Xr.dot(Ul);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Wr,o);Ol.subVectors(e,r);const f=Wr.dot(Ol),_=Xr.dot(Ol);if(_>=0&&f<=_)return t.copy(r);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Xr,a);const p=u*_-f*h;if(p<=0&&h-u>=0&&f-_>=0)return uf.subVectors(r,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(uf,a);const m=1/(p+g+d);return o=g*m,a=d*m,t.copy(n).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Fl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=gh(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fl(o,r,e+1/3),this.g=Fl(o,r,e),this.b=Fl(o,r,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=Si){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Si){const n=dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}copyLinearToSRGB(e){return this.r=El(e.r),this.g=El(e.g),this.b=El(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return _t.fromWorkingColorSpace(yn.copy(this),e),Math.round(dn(yn.r*255,0,255))*65536+Math.round(dn(yn.g*255,0,255))*256+Math.round(dn(yn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,i=yn.g,r=yn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Si){_t.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,i=yn.b;return e!==Si?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(As),this.setHSL(As.h+e,As.s+t,As.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(As),e.getHSL(Ya);const n=oa(As.h,Ya.h,t),i=oa(As.s,Ya.s,t),r=oa(As.l,Ya.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Fe;Fe.NAMES=dm;let uy=0;class Nn extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=ao,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Nu,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(n.blending=this.blending),this.side!==Vs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Au&&(n.blendSrc=this.blendSrc),this.blendDst!==Nu&&(n.blendDst=this.blendDst),this.blendEquation!==ur&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$d&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yh extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new O,ja=new Ae;class mi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=us,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _h("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}}class fm extends mi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pm extends mi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dn extends mi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hy=0;const ci=new wt,Vl=new en,qr=new O,$n=new ba,Ko=new ba,on=new O;class $i extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cm(e)?pm:fm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ko.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors($n.min,Ko.min),$n.expandByPoint(on),on.addVectors($n.max,Ko.max),$n.expandByPoint(on)):($n.expandByPoint(Ko.min),$n.expandByPoint(Ko.max))}$n.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)on.fromBufferAttribute(a,l),c&&(qr.fromBufferAttribute(e,l),on.add(qr)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new O,c[R]=new O;const l=new O,u=new O,h=new O,d=new Ae,f=new Ae,_=new Ae,g=new O,p=new O;function m(R,y,T){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,y),_.fromBufferAttribute(r,T),u.sub(l),h.sub(l),f.sub(d),_.sub(d);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(L),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(L),a[R].add(g),a[y].add(g),a[T].add(g),c[R].add(p),c[y].add(p),c[T].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,y=M.length;R<y;++R){const T=M[R],L=T.start,H=T.count;for(let B=L,ne=L+H;B<ne;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new O,S=new O,w=new O,b=new O;function E(R){w.fromBufferAttribute(i,R),b.copy(w);const y=a[R];x.copy(y),x.sub(w.multiplyScalar(w.dot(y))).normalize(),S.crossVectors(b,y);const L=S.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,y=M.length;R<y;++R){const T=M[R],L=T.start,H=T.count;for(let B=L,ne=L+H;B<ne;B+=3)E(e.getX(B+0)),E(e.getX(B+1)),E(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,_=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*u;for(let m=0;m<u;m++)d[_++]=l[f++]}return new mi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $i,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hf=new wt,Qs=new um,$a=new vh,df=new O,Yr=new O,jr=new O,$r=new O,zl=new O,Ka=new O,Za=new Ae,Ja=new Ae,Qa=new Ae,ff=new O,pf=new O,mf=new O,ec=new O,tc=new O;class di extends en{constructor(e=new $i,t=new yh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ka.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(zl.fromBufferAttribute(h,e),o?Ka.addScaledVector(zl,u):Ka.addScaledVector(zl.sub(t),u))}t.add(Ka)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),Qs.copy(e.ray).recast(e.near),!($a.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere($a,df)===null||Qs.origin.distanceToSquared(df)>(e.far-e.near)**2))&&(hf.copy(r).invert(),Qs.copy(e.ray).applyMatrix4(hf),!(n.boundingBox!==null&&Qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,w=x;S<w;S+=3){const b=a.getX(S),E=a.getX(S+1),R=a.getX(S+2);i=nc(this,m,e,n,l,u,h,b,E,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);i=nc(this,o,e,n,l,u,h,M,x,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,w=x;S<w;S+=3){const b=S,E=S+1,R=S+2;i=nc(this,m,e,n,l,u,h,b,E,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=p,x=p+1,S=p+2;i=nc(this,o,e,n,l,u,h,M,x,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function dy(s,e,t,n,i,r,o,a){let c;if(e.side===In?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Vs,a),c===null)return null;tc.copy(a),tc.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(tc);return l<t.near||l>t.far?null:{distance:l,point:tc.clone(),object:s}}function nc(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Yr),s.getVertexPosition(c,jr),s.getVertexPosition(l,$r);const u=dy(s,e,t,n,Yr,jr,$r,ec);if(u){i&&(Za.fromBufferAttribute(i,a),Ja.fromBufferAttribute(i,c),Qa.fromBufferAttribute(i,l),u.uv=zi.getInterpolation(ec,Yr,jr,$r,Za,Ja,Qa,new Ae)),r&&(Za.fromBufferAttribute(r,a),Ja.fromBufferAttribute(r,c),Qa.fromBufferAttribute(r,l),u.uv1=zi.getInterpolation(ec,Yr,jr,$r,Za,Ja,Qa,new Ae)),o&&(ff.fromBufferAttribute(o,a),pf.fromBufferAttribute(o,c),mf.fromBufferAttribute(o,l),u.normal=zi.getInterpolation(ec,Yr,jr,$r,ff,pf,mf,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new O,materialIndex:0};zi.getNormal(Yr,jr,$r,h.normal),u.face=h}return u}class wa extends $i{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Dn(l,3)),this.setAttribute("normal",new Dn(u,3)),this.setAttribute("uv",new Dn(h,2));function _(g,p,m,M,x,S,w,b,E,R,y){const T=S/E,L=w/R,H=S/2,B=w/2,ne=b/2,ee=E+1,Y=R+1;let ie=0,K=0;const ve=new O;for(let Me=0;Me<Y;Me++){const Te=Me*L-B;for(let He=0;He<ee;He++){const at=He*T-H;ve[g]=at*M,ve[p]=Te*x,ve[m]=ne,l.push(ve.x,ve.y,ve.z),ve[g]=0,ve[p]=0,ve[m]=b>0?1:-1,u.push(ve.x,ve.y,ve.z),h.push(He/E),h.push(1-Me/R),ie+=1}}for(let Me=0;Me<R;Me++)for(let Te=0;Te<E;Te++){const He=d+Te+ee*Me,at=d+Te+ee*(Me+1),te=d+(Te+1)+ee*(Me+1),ce=d+(Te+1)+ee*Me;c.push(He,at,ce),c.push(at,te,ce),K+=6}a.addGroup(f,K,y),f+=K,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const n=wo(s[t]);for(const i in n)e[i]=n[i]}return e}function fy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const py={clone:wo,merge:Cn};var my=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ks extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=my,this.fragmentShader=gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=fy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gm extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new O,gf=new Ae,_f=new Ae;class On extends gm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,gf,_f),t.subVectors(_f,gf)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Zr=1;class _y extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new On(Kr,Zr,e,t);i.layers=this.layers,this.add(i);const r=new On(Kr,Zr,e,t);r.layers=this.layers,this.add(r);const o=new On(Kr,Zr,e,t);o.layers=this.layers,this.add(o);const a=new On(Kr,Zr,e,t);a.layers=this.layers,this.add(a);const c=new On(Kr,Zr,e,t);c.layers=this.layers,this.add(c);const l=new On(Kr,Zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class _m extends Tn{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Mo,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xy extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _m(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wa(5,5,5),r=new ks({name:"CubemapFromEquirect",uniforms:wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:Us});r.uniforms.tEquirect.value=t;const o=new di(i,r),a=t.minFilter;return t.minFilter===Rs&&(t.minFilter=Ei),new _y(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Bl=new O,vy=new O,yy=new $e;class os{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bl.subVectors(n,t).cross(vy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yy.getNormalMatrix(e),i=this.coplanarPoint(Bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new vh,ic=new O;class Mh{constructor(e=new os,t=new os,n=new os,i=new os,r=new os,o=new os){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],M=i[13],x=i[14],S=i[15];if(n[0].setComponents(c-r,d-l,p-f,S-m).normalize(),n[1].setComponents(c+r,d+l,p+f,S+m).normalize(),n[2].setComponents(c+o,d+u,p+_,S+M).normalize(),n[3].setComponents(c-o,d-u,p-_,S-M).normalize(),n[4].setComponents(c-a,d-h,p-g,S-x).normalize(),t===bi)n[5].setComponents(c+a,d+h,p+g,S+x).normalize();else if(t===No)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ic.x=i.normal.x>0?e.max.x:e.min.x,ic.y=i.normal.y>0?e.max.y:e.min.y,ic.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function My(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(s.bindBuffer(l,a),h.count===-1&&d.length===0&&s.bufferSubData(l,0,u),d.length!==0){for(let f=0,_=d.length;f<_;f++){const g=d[f];s.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class jc extends $i{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*d-o;for(let x=0;x<l;x++){const S=x*h-r;_.push(S,-M,0),g.push(0,0,1),p.push(x/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){const x=M+l*m,S=M+l*(m+1),w=M+1+l*(m+1),b=M+1+l*m;f.push(x,S,b),f.push(S,w,b)}this.setIndex(f),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ty=`#ifdef USE_ALPHAHASH
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
#endif`,Ey=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,by=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
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
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uy=`#ifdef USE_IRIDESCENCE
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
#endif`,Oy=`#ifdef USE_BUMPMAP
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
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xy=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,qy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yy=`vec3 transformedNormal = objectNormal;
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
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lM=`#ifdef USE_GRADIENTMAP
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
}`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fM=`uniform bool receiveShadow;
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
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vM=`PhysicalMaterial material;
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
#endif`,yM=`struct PhysicalMaterial {
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
}`,MM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
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
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PM=`#if defined( USE_POINTS_UV )
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
#endif`,LM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`#ifdef USE_MORPHTARGETS
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
#endif`,VM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
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
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,ZM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cS=`#ifdef USE_SKINNING
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
#endif`,lS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uS=`#ifdef USE_SKINNING
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
#endif`,hS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pS=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mS=`#ifdef USE_TRANSMISSION
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
#endif`,gS=`#ifdef USE_TRANSMISSION
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
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SS=`uniform sampler2D t2D;
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ES=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`#include <common>
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
}`,wS=`#if DEPTH_PACKING == 3200
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
	#endif
}`,RS=`#define DISTANCE
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
}`,CS=`#define DISTANCE
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
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`uniform float scale;
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
}`,DS=`uniform vec3 diffuse;
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
}`,US=`#include <common>
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
}`,OS=`uniform vec3 diffuse;
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
}`,FS=`#define LAMBERT
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
}`,VS=`#define LAMBERT
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
}`,zS=`#define MATCAP
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
}`,BS=`#define MATCAP
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
}`,kS=`#define NORMAL
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
}`,HS=`#define NORMAL
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
}`,GS=`#define PHONG
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
}`,WS=`#define PHONG
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
}`,XS=`#define STANDARD
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
}`,qS=`#define STANDARD
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
}`,YS=`#define TOON
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
}`,jS=`#define TOON
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
}`,$S=`uniform float size;
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
}`,KS=`uniform vec3 diffuse;
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
}`,ZS=`#include <common>
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
}`,JS=`uniform vec3 color;
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
}`,QS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,eT=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Sy,alphahash_pars_fragment:Ty,alphamap_fragment:Ey,alphamap_pars_fragment:Ay,alphatest_fragment:Ny,alphatest_pars_fragment:by,aomap_fragment:wy,aomap_pars_fragment:Ry,batching_pars_vertex:Cy,batching_vertex:Py,begin_vertex:Ly,beginnormal_vertex:Iy,bsdfs:Dy,iridescence_fragment:Uy,bumpmap_pars_fragment:Oy,clipping_planes_fragment:Fy,clipping_planes_pars_fragment:Vy,clipping_planes_pars_vertex:zy,clipping_planes_vertex:By,color_fragment:ky,color_pars_fragment:Hy,color_pars_vertex:Gy,color_vertex:Wy,common:Xy,cube_uv_reflection_fragment:qy,defaultnormal_vertex:Yy,displacementmap_pars_vertex:jy,displacementmap_vertex:$y,emissivemap_fragment:Ky,emissivemap_pars_fragment:Zy,colorspace_fragment:Jy,colorspace_pars_fragment:Qy,envmap_fragment:eM,envmap_common_pars_fragment:tM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:pM,envmap_vertex:sM,fog_vertex:rM,fog_pars_vertex:oM,fog_fragment:aM,fog_pars_fragment:cM,gradientmap_pars_fragment:lM,lightmap_pars_fragment:uM,lights_lambert_fragment:hM,lights_lambert_pars_fragment:dM,lights_pars_begin:fM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:_M,lights_phong_pars_fragment:xM,lights_physical_fragment:vM,lights_physical_pars_fragment:yM,lights_fragment_begin:MM,lights_fragment_maps:SM,lights_fragment_end:TM,logdepthbuf_fragment:EM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:NM,logdepthbuf_vertex:bM,map_fragment:wM,map_pars_fragment:RM,map_particle_fragment:CM,map_particle_pars_fragment:PM,metalnessmap_fragment:LM,metalnessmap_pars_fragment:IM,morphinstance_vertex:DM,morphcolor_vertex:UM,morphnormal_vertex:OM,morphtarget_pars_vertex:FM,morphtarget_vertex:VM,normal_fragment_begin:zM,normal_fragment_maps:BM,normal_pars_fragment:kM,normal_pars_vertex:HM,normal_vertex:GM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:jM,opaque_fragment:$M,packing:KM,premultiplied_alpha_fragment:ZM,project_vertex:JM,dithering_fragment:QM,dithering_pars_fragment:eS,roughnessmap_fragment:tS,roughnessmap_pars_fragment:nS,shadowmap_pars_fragment:iS,shadowmap_pars_vertex:sS,shadowmap_vertex:rS,shadowmask_pars_fragment:oS,skinbase_vertex:aS,skinning_pars_vertex:cS,skinning_vertex:lS,skinnormal_vertex:uS,specularmap_fragment:hS,specularmap_pars_fragment:dS,tonemapping_fragment:fS,tonemapping_pars_fragment:pS,transmission_fragment:mS,transmission_pars_fragment:gS,uv_pars_fragment:_S,uv_pars_vertex:xS,uv_vertex:vS,worldpos_vertex:yS,background_vert:MS,background_frag:SS,backgroundCube_vert:TS,backgroundCube_frag:ES,cube_vert:AS,cube_frag:NS,depth_vert:bS,depth_frag:wS,distanceRGBA_vert:RS,distanceRGBA_frag:CS,equirect_vert:PS,equirect_frag:LS,linedashed_vert:IS,linedashed_frag:DS,meshbasic_vert:US,meshbasic_frag:OS,meshlambert_vert:FS,meshlambert_frag:VS,meshmatcap_vert:zS,meshmatcap_frag:BS,meshnormal_vert:kS,meshnormal_frag:HS,meshphong_vert:GS,meshphong_frag:WS,meshphysical_vert:XS,meshphysical_frag:qS,meshtoon_vert:YS,meshtoon_frag:jS,points_vert:$S,points_frag:KS,shadow_vert:ZS,shadow_frag:JS,sprite_vert:QS,sprite_frag:eT},_e={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Oi={basic:{uniforms:Cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Cn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Cn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Cn([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Cn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Cn([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Cn([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Cn([_e.common,_e.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Cn([_e.lights,_e.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Oi.physical={uniforms:Cn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const sc={r:0,b:0,g:0},tr=new gi,tT=new wt;function nT(s,e,t,n,i,r,o){const a=new Fe(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function g(M){let x=!1;const S=_(M);S===null?m(a,c):S&&S.isColor&&(m(S,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Xc)?(u===void 0&&(u=new di(new wa(1,1,1),new ks({name:"BackgroundCubeMaterial",uniforms:wo(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),tr.copy(x.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(tr)),u.material.toneMapped=_t.getTransfer(S.colorSpace)!==bt,(h!==S||d!==S.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new di(new jc(2,2),new ks({name:"BackgroundMaterial",uniforms:wo(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=_t.getTransfer(S.colorSpace)!==bt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,x){M.getRGB(sc,mm(s)),n.buffers.color.setClear(sc.r,sc.g,sc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:g,addToRenderList:p}}function iT(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(T,L,H,B,ne){let ee=!1;const Y=h(B,H,L);r!==Y&&(r=Y,l(r.object)),ee=f(T,B,H,ne),ee&&_(T,B,H,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,S(T,L,H,B),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function c(){return s.createVertexArray()}function l(T){return s.bindVertexArray(T)}function u(T){return s.deleteVertexArray(T)}function h(T,L,H){const B=H.wireframe===!0;let ne=n[T.id];ne===void 0&&(ne={},n[T.id]=ne);let ee=ne[L.id];ee===void 0&&(ee={},ne[L.id]=ee);let Y=ee[B];return Y===void 0&&(Y=d(c()),ee[B]=Y),Y}function d(T){const L=[],H=[],B=[];for(let ne=0;ne<t;ne++)L[ne]=0,H[ne]=0,B[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:B,object:T,attributes:{},index:null}}function f(T,L,H,B){const ne=r.attributes,ee=L.attributes;let Y=0;const ie=H.getAttributes();for(const K in ie)if(ie[K].location>=0){const Me=ne[K];let Te=ee[K];if(Te===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(Te=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(Te=T.instanceColor)),Me===void 0||Me.attribute!==Te||Te&&Me.data!==Te.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function _(T,L,H,B){const ne={},ee=L.attributes;let Y=0;const ie=H.getAttributes();for(const K in ie)if(ie[K].location>=0){let Me=ee[K];Me===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor));const Te={};Te.attribute=Me,Me&&Me.data&&(Te.data=Me.data),ne[K]=Te,Y++}r.attributes=ne,r.attributesNum=Y,r.index=B}function g(){const T=r.newAttributes;for(let L=0,H=T.length;L<H;L++)T[L]=0}function p(T){m(T,0)}function m(T,L){const H=r.newAttributes,B=r.enabledAttributes,ne=r.attributeDivisors;H[T]=1,B[T]===0&&(s.enableVertexAttribArray(T),B[T]=1),ne[T]!==L&&(s.vertexAttribDivisor(T,L),ne[T]=L)}function M(){const T=r.newAttributes,L=r.enabledAttributes;for(let H=0,B=L.length;H<B;H++)L[H]!==T[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function x(T,L,H,B,ne,ee,Y){Y===!0?s.vertexAttribIPointer(T,L,H,ne,ee):s.vertexAttribPointer(T,L,H,B,ne,ee)}function S(T,L,H,B){g();const ne=B.attributes,ee=H.getAttributes(),Y=L.defaultAttributeValues;for(const ie in ee){const K=ee[ie];if(K.location>=0){let ve=ne[ie];if(ve===void 0&&(ie==="instanceMatrix"&&T.instanceMatrix&&(ve=T.instanceMatrix),ie==="instanceColor"&&T.instanceColor&&(ve=T.instanceColor)),ve!==void 0){const Me=ve.normalized,Te=ve.itemSize,He=e.get(ve);if(He===void 0)continue;const at=He.buffer,te=He.type,ce=He.bytesPerElement,be=te===s.INT||te===s.UNSIGNED_INT||ve.gpuType===Qp;if(ve.isInterleavedBufferAttribute){const xe=ve.data,Ze=xe.stride,We=ve.offset;if(xe.isInstancedInterleavedBuffer){for(let nt=0;nt<K.locationSize;nt++)m(K.location+nt,xe.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let nt=0;nt<K.locationSize;nt++)p(K.location+nt);s.bindBuffer(s.ARRAY_BUFFER,at);for(let nt=0;nt<K.locationSize;nt++)x(K.location+nt,Te/K.locationSize,te,Me,Ze*ce,(We+Te/K.locationSize*nt)*ce,be)}else{if(ve.isInstancedBufferAttribute){for(let xe=0;xe<K.locationSize;xe++)m(K.location+xe,ve.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let xe=0;xe<K.locationSize;xe++)p(K.location+xe);s.bindBuffer(s.ARRAY_BUFFER,at);for(let xe=0;xe<K.locationSize;xe++)x(K.location+xe,Te/K.locationSize,te,Me,Te*ce,Te/K.locationSize*xe*ce,be)}}else if(Y!==void 0){const Me=Y[ie];if(Me!==void 0)switch(Me.length){case 2:s.vertexAttrib2fv(K.location,Me);break;case 3:s.vertexAttrib3fv(K.location,Me);break;case 4:s.vertexAttrib4fv(K.location,Me);break;default:s.vertexAttrib1fv(K.location,Me)}}}}M()}function w(){R();for(const T in n){const L=n[T];for(const H in L){const B=L[H];for(const ne in B)u(B[ne].object),delete B[ne];delete L[H]}delete n[T]}}function b(T){if(n[T.id]===void 0)return;const L=n[T.id];for(const H in L){const B=L[H];for(const ne in B)u(B[ne].object),delete B[ne];delete L[H]}delete n[T.id]}function E(T){for(const L in n){const H=n[L];if(H[T.id]===void 0)continue;const B=H[T.id];for(const ne in B)u(B[ne].object),delete B[ne];delete H[T.id]}}function R(){y(),o=!0,r!==i&&(r=i,l(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function sT(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(l[f],u[f]);else{d.multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<d.length;g++)t.update(_,n,d[g])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rT(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==ki&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const E=b===Na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==zs&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==us&&!E)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:S,maxSamples:w}}function oT(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new os,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,x=M*4;let S=m.clippingState||null;c.value=S,S=u(_,d,x,f);for(let w=0;w!==x;++w)S[w]=t[w];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const m=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=f;x!==g;++x,S+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function aT(s){let e=new WeakMap;function t(o,a){return a===bu?o.mapping=Mo:a===wu&&(o.mapping=So),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bu||a===wu)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new xy(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Sh extends gm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const eo=4,xf=[.125,.215,.35,.446,.526,.582],hr=20,kl=new Sh,vf=new Fe;let Hl=null,Gl=0,Wl=0,Xl=!1;const ar=(1+Math.sqrt(5))/2,Jr=1/ar,yf=[new O(-ar,Jr,0),new O(ar,Jr,0),new O(-Jr,0,ar),new O(Jr,0,ar),new O(0,ar,-Jr),new O(0,ar,Jr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Mf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Hl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Gl,Wl),this._renderer.xr.enabled=Xl,e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mo||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Na,format:ki,colorSpace:Ii,depthBuffer:!1},i=Sf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cT(r)),this._blurMaterial=lT(r,e,t)}return i}_compileMaterial(e){const t=new di(this._lodPlanes[0],e);this._renderer.compile(t,kl)}_sceneToCubeUV(e,t,n,i){const a=new On(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(vf),u.toneMapping=ni,u.autoClear=!1;const f=new yh({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),_=new di(new wa,f);let g=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,g=!0):(f.color.copy(vf),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):M===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const x=this._cubeSize;rc(i,M*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mo||e.mapping===So;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;rc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,kl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yf[(i-r-1)%yf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new di(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hr-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):hr;p>hr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hr}`);const m=[];let M=0;for(let E=0;E<hr;++E){const R=E/g,y=Math.exp(-R*R/2);m.push(y),E===0?M+=y:E<p&&(M+=2*y)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const S=this._sizeLods[i],w=3*S*(i>x-eo?i-x+eo:0),b=4*(this._cubeSize-S);rc(t,w,b,3*S,2*S),c.setRenderTarget(t),c.render(h,kl)}}function cT(s){const e=[],t=[],n=[];let i=s;const r=s-eo+1+xf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-eo?c=xf[o-s+eo-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,p=2,m=1,M=new Float32Array(g*_*f),x=new Float32Array(p*_*f),S=new Float32Array(m*_*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,R=b>2?0:-1,y=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];M.set(y,g*_*b),x.set(d,p*_*b);const T=[b,b,b,b,b,b];S.set(T,m*_*b)}const w=new $i;w.setAttribute("position",new mi(M,g)),w.setAttribute("uv",new mi(x,p)),w.setAttribute("faceIndex",new mi(S,m)),e.push(w),i>eo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sf(s,e,t){const n=new yr(s,e,t);return n.texture.mapping=Xc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function lT(s,e,t){const n=new Float32Array(hr),i=new O(0,1,0);return new ks({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Tf(){return new ks({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Ef(){return new ks({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Th(){return`

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
	`}function uT(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===bu||c===wu,u=c===Mo||c===So;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Mf(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Mf(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function hT(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&_h("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dT(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let x=0,S=M.length;x<S;x+=3){const w=M[x+0],b=M[x+1],E=M[x+2];d.push(w,b,b,E,E,w)}}else if(_!==void 0){const M=_.array;g=_.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const w=x+0,b=x+1,E=x+2;d.push(w,b,b,E,E,w)}}else return;const p=new(cm(d)?pm:fm)(d,1);p.version=g;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function fT(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(d[p]/o,f[p]);else{g.multiDrawElementsWEBGL(n,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];t.update(p,n,1)}}function h(d,f,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let m=0;for(let M=0;M<_;M++)m+=f[M];for(let M=0;M<g.length;M++)t.update(m,n,g[M])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function pT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function mT(s,e,t){const n=new WeakMap,i=new lt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let T=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let w=a.attributes.position.count*S,b=1;w>e.maxTextureSize&&(b=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*b*4*h),R=new xh(E,w,b,h);R.type=us,R.needsUpdate=!0;const y=S*4;for(let L=0;L<h;L++){const H=m[L],B=M[L],ne=x[L],ee=w*b*4*L;for(let Y=0;Y<H.count;Y++){const ie=Y*y;_===!0&&(i.fromBufferAttribute(H,Y),E[ee+ie+0]=i.x,E[ee+ie+1]=i.y,E[ee+ie+2]=i.z,E[ee+ie+3]=0),g===!0&&(i.fromBufferAttribute(B,Y),E[ee+ie+4]=i.x,E[ee+ie+5]=i.y,E[ee+ie+6]=i.z,E[ee+ie+7]=0),p===!0&&(i.fromBufferAttribute(ne,Y),E[ee+ie+8]=i.x,E[ee+ie+9]=i.y,E[ee+ie+10]=i.z,E[ee+ie+11]=ne.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new Ae(w,b)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function gT(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Ra extends Tn{constructor(e,t,n,i,r,o,a,c,l,u=co){if(u!==co&&u!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===co&&(n=To),n===void 0&&u===Ao&&(n=Eo),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vm=new Tn,ym=new Ra(1,1);ym.compareFunction=am;const Mm=new xh,Sm=new ny,Tm=new _m,Af=[],Nf=[],bf=new Float32Array(16),wf=new Float32Array(9),Rf=new Float32Array(4);function Fo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Af[i];if(r===void 0&&(r=new Float32Array(i),Af[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function $c(s,e){let t=Nf[e];t===void 0&&(t=new Int32Array(e),Nf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function _T(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function vT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function yT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function MT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Rf.set(n),s.uniformMatrix2fv(this.addr,!1,Rf),nn(t,n)}}function ST(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;wf.set(n),s.uniformMatrix3fv(this.addr,!1,wf),nn(t,n)}}function TT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;bf.set(n),s.uniformMatrix4fv(this.addr,!1,bf),nn(t,n)}}function ET(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function AT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function NT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function bT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function wT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function RT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function CT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function PT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function LT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?ym:vm;t.setTexture2D(e||r,i)}function IT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sm,i)}function DT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tm,i)}function UT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Mm,i)}function OT(s){switch(s){case 5126:return _T;case 35664:return xT;case 35665:return vT;case 35666:return yT;case 35674:return MT;case 35675:return ST;case 35676:return TT;case 5124:case 35670:return ET;case 35667:case 35671:return AT;case 35668:case 35672:return NT;case 35669:case 35673:return bT;case 5125:return wT;case 36294:return RT;case 36295:return CT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}function FT(s,e){s.uniform1fv(this.addr,e)}function VT(s,e){const t=Fo(e,this.size,2);s.uniform2fv(this.addr,t)}function zT(s,e){const t=Fo(e,this.size,3);s.uniform3fv(this.addr,t)}function BT(s,e){const t=Fo(e,this.size,4);s.uniform4fv(this.addr,t)}function kT(s,e){const t=Fo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function HT(s,e){const t=Fo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function GT(s,e){const t=Fo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function WT(s,e){s.uniform1iv(this.addr,e)}function XT(s,e){s.uniform2iv(this.addr,e)}function qT(s,e){s.uniform3iv(this.addr,e)}function YT(s,e){s.uniform4iv(this.addr,e)}function jT(s,e){s.uniform1uiv(this.addr,e)}function $T(s,e){s.uniform2uiv(this.addr,e)}function KT(s,e){s.uniform3uiv(this.addr,e)}function ZT(s,e){s.uniform4uiv(this.addr,e)}function JT(s,e,t){const n=this.cache,i=e.length,r=$c(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||vm,r[o])}function QT(s,e,t){const n=this.cache,i=e.length,r=$c(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Sm,r[o])}function eE(s,e,t){const n=this.cache,i=e.length,r=$c(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Tm,r[o])}function tE(s,e,t){const n=this.cache,i=e.length,r=$c(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Mm,r[o])}function nE(s){switch(s){case 5126:return FT;case 35664:return VT;case 35665:return zT;case 35666:return BT;case 35674:return kT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return WT;case 35667:case 35671:return XT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return jT;case 36294:return $T;case 36295:return KT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return eE;case 36289:case 36303:case 36311:case 36292:return tE}}class iE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=OT(t.type)}}class sE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nE(t.type)}}class rE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function Cf(s,e){s.seq.push(e),s.map[e.id]=e}function oE(s,e,t){const n=s.name,i=n.length;for(ql.lastIndex=0;;){const r=ql.exec(n),o=ql.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Cf(t,l===void 0?new iE(a,s,e):new sE(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new rE(a),Cf(t,h)),t=h}}}class dc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);oE(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Pf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const aE=37297;let cE=0;function lE(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function uE(s){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(s);let n;switch(e===t?n="":e===Tc&&t===Sc?n="LinearDisplayP3ToLinearSRGB":e===Sc&&t===Tc&&(n="LinearSRGBToLinearDisplayP3"),s){case Ii:case qc:return[n,"LinearTransferOETF"];case Si:case mh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Lf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+lE(s.getShaderSource(e),o)}else return i}function hE(s,e){const t=uE(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dE(s,e){let t;switch(e){case Yp:t="Linear";break;case jp:t="Reinhard";break;case $p:t="OptimizedCineon";break;case Kp:t="ACESFilmic";break;case Zp:t="AgX";break;case pv:t="Neutral";break;case fv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function pE(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mE(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function na(s){return s!==""}function If(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(s){return s.replace(gE,xE)}const _E=new Map;function xE(s,e){let t=Ke[e];if(t===void 0){const n=_E.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lu(t)}const vE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(s){return s.replace(vE,yE)}function yE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Of(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ME(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===zx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ss&&(e="SHADOWMAP_TYPE_VSM"),e}function SE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mo:case So:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function EE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wc:e="ENVMAP_BLENDING_MULTIPLY";break;case hv:e="ENVMAP_BLENDING_MIX";break;case dv:e="ENVMAP_BLENDING_ADD";break}return e}function AE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function NE(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ME(t),l=SE(t),u=TE(t),h=EE(t),d=AE(t),f=fE(t),_=pE(r),g=i.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(na).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(na).join(`
`),m.length>0&&(m+=`
`)):(p=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),m=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ni?dE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,hE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),o=Lu(o),o=If(o,t),o=Df(o,t),a=Lu(a),a=If(a,t),a=Df(a,t),o=Uf(o),a=Uf(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+o,S=M+m+a,w=Pf(i,i.VERTEX_SHADER,x),b=Pf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,w),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(L){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(w).trim(),ne=i.getShaderInfoLog(b).trim();let ee=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,b);else{const ie=Lf(i,w,"vertex"),K=Lf(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+ie+`
`+K)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||ne==="")&&(Y=!1);Y&&(L.diagnostics={runnable:ee,programLog:H,vertexShader:{log:B,prefix:p},fragmentShader:{log:ne,prefix:m}})}i.deleteShader(w),i.deleteShader(b),R=new dc(i,g),y=mE(i,g)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,aE)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=b,this}let bE=0;class wE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new RE(e),t.set(e,n)),n}}class RE{constructor(e){this.id=bE++,this.code=e,this.usedTimes=0}}function CE(s,e,t,n,i,r,o){const a=new hm,c=new wE,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,T,L,H,B){const ne=H.fog,ee=B.geometry,Y=y.isMeshStandardMaterial?H.environment:null,ie=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),K=ie&&ie.mapping===Xc?ie.image.height:null,ve=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const Me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Te=Me!==void 0?Me.length:0;let He=0;ee.morphAttributes.position!==void 0&&(He=1),ee.morphAttributes.normal!==void 0&&(He=2),ee.morphAttributes.color!==void 0&&(He=3);let at,te,ce,be;if(ve){const ut=Oi[ve];at=ut.vertexShader,te=ut.fragmentShader}else at=y.vertexShader,te=y.fragmentShader,c.update(y),ce=c.getVertexShaderID(y),be=c.getFragmentShaderID(y);const xe=s.getRenderTarget(),Ze=B.isInstancedMesh===!0,We=B.isBatchedMesh===!0,nt=!!y.map,U=!!y.matcap,it=!!ie,tt=!!y.aoMap,Tt=!!y.lightMap,De=!!y.bumpMap,st=!!y.normalMap,Je=!!y.displacementMap,Xe=!!y.emissiveMap,Lt=!!y.metalnessMap,P=!!y.roughnessMap,A=y.anisotropy>0,j=y.clearcoat>0,re=y.dispersion>0,ae=y.iridescence>0,le=y.sheen>0,Pe=y.transmission>0,ge=A&&!!y.anisotropyMap,me=j&&!!y.clearcoatMap,qe=j&&!!y.clearcoatNormalMap,ue=j&&!!y.clearcoatRoughnessMap,Re=ae&&!!y.iridescenceMap,et=ae&&!!y.iridescenceThicknessMap,Ve=le&&!!y.sheenColorMap,ye=le&&!!y.sheenRoughnessMap,Ye=!!y.specularMap,je=!!y.specularColorMap,Ft=!!y.specularIntensityMap,v=Pe&&!!y.transmissionMap,$=Pe&&!!y.thicknessMap,G=!!y.gradientMap,Z=!!y.alphaMap,oe=y.alphaTest>0,Le=!!y.alphaHash,Ge=!!y.extensions;let Vt=ni;y.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Vt=s.toneMapping);const qt={shaderID:ve,shaderType:y.type,shaderName:y.name,vertexShader:at,fragmentShader:te,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:be,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:We,batchingColor:We&&B._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&B.instanceColor!==null,instancingMorph:Ze&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ii,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:U,envMap:it,envMapMode:it&&ie.mapping,envMapCubeUVHeight:K,aoMap:tt,lightMap:Tt,bumpMap:De,normalMap:st,displacementMap:d&&Je,emissiveMap:Xe,normalMapObjectSpace:st&&y.normalMapType===rm,normalMapTangentSpace:st&&y.normalMapType===ps,metalnessMap:Lt,roughnessMap:P,anisotropy:A,anisotropyMap:ge,clearcoat:j,clearcoatMap:me,clearcoatNormalMap:qe,clearcoatRoughnessMap:ue,dispersion:re,iridescence:ae,iridescenceMap:Re,iridescenceThicknessMap:et,sheen:le,sheenColorMap:Ve,sheenRoughnessMap:ye,specularMap:Ye,specularColorMap:je,specularIntensityMap:Ft,transmission:Pe,transmissionMap:v,thicknessMap:$,gradientMap:G,opaque:y.transparent===!1&&y.blending===ao&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:oe,alphaHash:Le,combine:y.combine,mapUv:nt&&g(y.map.channel),aoMapUv:tt&&g(y.aoMap.channel),lightMapUv:Tt&&g(y.lightMap.channel),bumpMapUv:De&&g(y.bumpMap.channel),normalMapUv:st&&g(y.normalMap.channel),displacementMapUv:Je&&g(y.displacementMap.channel),emissiveMapUv:Xe&&g(y.emissiveMap.channel),metalnessMapUv:Lt&&g(y.metalnessMap.channel),roughnessMapUv:P&&g(y.roughnessMap.channel),anisotropyMapUv:ge&&g(y.anisotropyMap.channel),clearcoatMapUv:me&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:qe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(y.sheenRoughnessMap.channel),specularMapUv:Ye&&g(y.specularMap.channel),specularColorMapUv:je&&g(y.specularColorMap.channel),specularIntensityMapUv:Ft&&g(y.specularIntensityMap.channel),transmissionMapUv:v&&g(y.transmissionMap.channel),thicknessMapUv:$&&g(y.thicknessMap.channel),alphaMapUv:Z&&g(y.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(st||A),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ee.attributes.uv&&(nt||Z),fog:!!ne,useFog:y.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:He,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&_t.getTransfer(y.map.colorSpace)===bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ls,flipSided:y.side===In,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ge&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ge&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function m(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)T.push(L),T.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(M(T,y),x(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function M(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.transmission&&a.enable(14),T.sheen&&a.enable(15),T.opaque&&a.enable(16),T.pointsUvs&&a.enable(17),T.decodeVideoTexture&&a.enable(18),T.alphaToCoverage&&a.enable(19),y.push(a.mask)}function S(y){const T=_[y.type];let L;if(T){const H=Oi[T];L=py.clone(H.uniforms)}else L=y.uniforms;return L}function w(y,T){let L;for(let H=0,B=u.length;H<B;H++){const ne=u[H];if(ne.cacheKey===T){L=ne,++L.usedTimes;break}}return L===void 0&&(L=new NE(s,T,y,r),u.push(L)),L}function b(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function E(y){c.remove(y)}function R(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:w,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:R}}function PE(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function LE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ff(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,g,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,d,f,_,g,p){const m=o(h,d,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(h,d,f,_,g,p){const m=o(h,d,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||LE),n.length>1&&n.sort(d||Ff),i.length>1&&i.sort(d||Ff)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function IE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Vf,s.set(n,[o])):i>=r.length?(o=new Vf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function DE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Fe};break;case"SpotLight":t={position:new O,direction:new O,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function UE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let OE=0;function FE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function VE(s){const e=new DE,t=UE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const i=new O,r=new wt,o=new wt;function a(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,M=0,x=0,S=0,w=0,b=0,E=0;l.sort(FE);for(let y=0,T=l.length;y<T;y++){const L=l[y],H=L.color,B=L.intensity,ne=L.distance,ee=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*B,h+=H.g*B,d+=H.b*B;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],B);E++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,K=t.get(L);K.shadowBias=ie.bias,K.shadowNormalBias=ie.normalBias,K.shadowRadius=ie.radius,K.shadowMapSize=ie.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=ee,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=Y,f++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(H).multiplyScalar(B),Y.distance=ne,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[g]=Y;const ie=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,ie.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[g]=ie.matrix,L.castShadow){const K=t.get(L);K.shadowBias=ie.bias,K.shadowNormalBias=ie.normalBias,K.shadowRadius=ie.radius,K.shadowMapSize=ie.mapSize,n.spotShadow[g]=K,n.spotShadowMap[g]=ee,S++}g++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(H).multiplyScalar(B),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=Y,p++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const ie=L.shadow,K=t.get(L);K.shadowBias=ie.bias,K.shadowNormalBias=ie.normalBias,K.shadowRadius=ie.radius,K.shadowMapSize=ie.mapSize,K.shadowCameraNear=ie.camera.near,K.shadowCameraFar=ie.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=ee,n.pointShadowMatrix[_]=L.shadow.matrix,x++}n.point[_]=Y,_++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(B),Y.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[m]=Y,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==w||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=w,R.numLightProbes=E,n.version=OE++)}function c(l,u){let h=0,d=0,f=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const x=l[m];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(x.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function zf(s){const e=new VE(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function zE(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new zf(s),e.set(i,[a])):r>=o.length?(a=new zf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class BE extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kE extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GE=`uniform sampler2D shadow_pass;
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
}`;function WE(s,e,t){let n=new Mh;const i=new Ae,r=new Ae,o=new lt,a=new BE({depthPacking:bv}),c=new kE,l={},u=t.maxTextureSize,h={[Vs]:In,[In]:Vs,[ls]:ls},d=new ks({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:HE,fragmentShader:GE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new $i;_.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new di(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qp;let m=this.type;this.render=function(b,E,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const y=s.getRenderTarget(),T=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Us),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=m!==ss&&this.type===ss,ne=m===ss&&this.type!==ss;for(let ee=0,Y=b.length;ee<Y;ee++){const ie=b[ee],K=ie.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const ve=K.getFrameExtents();if(i.multiply(ve),r.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ve.x),i.x=r.x*ve.x,K.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ve.y),i.y=r.y*ve.y,K.mapSize.y=r.y)),K.map===null||B===!0||ne===!0){const Te=this.type!==ss?{minFilter:Sn,magFilter:Sn}:{};K.map!==null&&K.map.dispose(),K.map=new yr(i.x,i.y,Te),K.map.texture.name=ie.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const Me=K.getViewportCount();for(let Te=0;Te<Me;Te++){const He=K.getViewport(Te);o.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),H.viewport(o),K.updateMatrices(ie,Te),n=K.getFrustum(),S(E,R,K.camera,ie,this.type)}K.isPointLightShadow!==!0&&this.type===ss&&M(K,R),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(y,T,L)};function M(b,E){const R=e.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yr(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,R,d,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,R,f,g,null)}function x(b,E,R,y){let T=null;const L=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)T=L;else if(T=R.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=T.uuid,B=E.uuid;let ne=l[H];ne===void 0&&(ne={},l[H]=ne);let ee=ne[B];ee===void 0&&(ee=T.clone(),ne[B]=ee,E.addEventListener("dispose",w)),T=ee}if(T.visible=E.visible,T.wireframe=E.wireframe,y===ss?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:h[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=s.properties.get(T);H.light=R}return T}function S(b,E,R,y,T){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===ss)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const B=e.update(b),ne=b.material;if(Array.isArray(ne)){const ee=B.groups;for(let Y=0,ie=ee.length;Y<ie;Y++){const K=ee[Y],ve=ne[K.materialIndex];if(ve&&ve.visible){const Me=x(b,ve,y,T);b.onBeforeShadow(s,b,E,R,B,Me,K),s.renderBufferDirect(R,null,B,Me,b,K),b.onAfterShadow(s,b,E,R,B,Me,K)}}}else if(ne.visible){const ee=x(b,ne,y,T);b.onBeforeShadow(s,b,E,R,B,ee,null),s.renderBufferDirect(R,null,B,ee,b,null),b.onAfterShadow(s,b,E,R,B,ee,null)}}const H=b.children;for(let B=0,ne=H.length;B<ne;B++)S(H[B],E,R,y,T)}function w(b){b.target.removeEventListener("dispose",w);for(const R in l){const y=l[R],T=b.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function XE(s){function e(){let v=!1;const $=new lt;let G=null;const Z=new lt(0,0,0,0);return{setMask:function(oe){G!==oe&&!v&&(s.colorMask(oe,oe,oe,oe),G=oe)},setLocked:function(oe){v=oe},setClear:function(oe,Le,Ge,Vt,qt){qt===!0&&(oe*=Vt,Le*=Vt,Ge*=Vt),$.set(oe,Le,Ge,Vt),Z.equals($)===!1&&(s.clearColor(oe,Le,Ge,Vt),Z.copy($))},reset:function(){v=!1,G=null,Z.set(-1,0,0,0)}}}function t(){let v=!1,$=null,G=null,Z=null;return{setTest:function(oe){oe?be(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(oe){$!==oe&&!v&&(s.depthMask(oe),$=oe)},setFunc:function(oe){if(G!==oe){switch(oe){case sv:s.depthFunc(s.NEVER);break;case rv:s.depthFunc(s.ALWAYS);break;case ov:s.depthFunc(s.LESS);break;case vc:s.depthFunc(s.LEQUAL);break;case av:s.depthFunc(s.EQUAL);break;case cv:s.depthFunc(s.GEQUAL);break;case lv:s.depthFunc(s.GREATER);break;case uv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}G=oe}},setLocked:function(oe){v=oe},setClear:function(oe){Z!==oe&&(s.clearDepth(oe),Z=oe)},reset:function(){v=!1,$=null,G=null,Z=null}}}function n(){let v=!1,$=null,G=null,Z=null,oe=null,Le=null,Ge=null,Vt=null,qt=null;return{setTest:function(ut){v||(ut?be(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(ut){$!==ut&&!v&&(s.stencilMask(ut),$=ut)},setFunc:function(ut,Yt,jt){(G!==ut||Z!==Yt||oe!==jt)&&(s.stencilFunc(ut,Yt,jt),G=ut,Z=Yt,oe=jt)},setOp:function(ut,Yt,jt){(Le!==ut||Ge!==Yt||Vt!==jt)&&(s.stencilOp(ut,Yt,jt),Le=ut,Ge=Yt,Vt=jt)},setLocked:function(ut){v=ut},setClear:function(ut){qt!==ut&&(s.clearStencil(ut),qt=ut)},reset:function(){v=!1,$=null,G=null,Z=null,oe=null,Le=null,Ge=null,Vt=null,qt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,M=null,x=null,S=null,w=null,b=new Fe(0,0,0),E=0,R=!1,y=null,T=null,L=null,H=null,B=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Y=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ee=Y>=1):ie.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ee=Y>=2);let K=null,ve={};const Me=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),He=new lt().fromArray(Me),at=new lt().fromArray(Te);function te(v,$,G,Z){const oe=new Uint8Array(4),Le=s.createTexture();s.bindTexture(v,Le),s.texParameteri(v,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(v,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<G;Ge++)v===s.TEXTURE_3D||v===s.TEXTURE_2D_ARRAY?s.texImage3D($,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D($+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return Le}const ce={};ce[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),be(s.DEPTH_TEST),r.setFunc(vc),De(!1),st(vd),be(s.CULL_FACE),tt(Us);function be(v){l[v]!==!0&&(s.enable(v),l[v]=!0)}function xe(v){l[v]!==!1&&(s.disable(v),l[v]=!1)}function Ze(v,$){return u[v]!==$?(s.bindFramebuffer(v,$),u[v]=$,v===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=$),v===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=$),!0):!1}function We(v,$){let G=d,Z=!1;if(v){G=h.get($),G===void 0&&(G=[],h.set($,G));const oe=v.textures;if(G.length!==oe.length||G[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,Ge=oe.length;Le<Ge;Le++)G[Le]=s.COLOR_ATTACHMENT0+Le;G.length=oe.length,Z=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,Z=!0);Z&&s.drawBuffers(G)}function nt(v){return f!==v?(s.useProgram(v),f=v,!0):!1}const U={[ur]:s.FUNC_ADD,[kx]:s.FUNC_SUBTRACT,[Hx]:s.FUNC_REVERSE_SUBTRACT};U[Gx]=s.MIN,U[Wx]=s.MAX;const it={[Xx]:s.ZERO,[qx]:s.ONE,[Yx]:s.SRC_COLOR,[Au]:s.SRC_ALPHA,[Qx]:s.SRC_ALPHA_SATURATE,[Zx]:s.DST_COLOR,[$x]:s.DST_ALPHA,[jx]:s.ONE_MINUS_SRC_COLOR,[Nu]:s.ONE_MINUS_SRC_ALPHA,[Jx]:s.ONE_MINUS_DST_COLOR,[Kx]:s.ONE_MINUS_DST_ALPHA,[ev]:s.CONSTANT_COLOR,[tv]:s.ONE_MINUS_CONSTANT_COLOR,[nv]:s.CONSTANT_ALPHA,[iv]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(v,$,G,Z,oe,Le,Ge,Vt,qt,ut){if(v===Us){_===!0&&(xe(s.BLEND),_=!1);return}if(_===!1&&(be(s.BLEND),_=!0),v!==Bx){if(v!==g||ut!==R){if((p!==ur||x!==ur)&&(s.blendEquation(s.FUNC_ADD),p=ur,x=ur),ut)switch(v){case ao:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yd:s.blendFunc(s.ONE,s.ONE);break;case Md:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case ao:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Md:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}m=null,M=null,S=null,w=null,b.set(0,0,0),E=0,g=v,R=ut}return}oe=oe||$,Le=Le||G,Ge=Ge||Z,($!==p||oe!==x)&&(s.blendEquationSeparate(U[$],U[oe]),p=$,x=oe),(G!==m||Z!==M||Le!==S||Ge!==w)&&(s.blendFuncSeparate(it[G],it[Z],it[Le],it[Ge]),m=G,M=Z,S=Le,w=Ge),(Vt.equals(b)===!1||qt!==E)&&(s.blendColor(Vt.r,Vt.g,Vt.b,qt),b.copy(Vt),E=qt),g=v,R=!1}function Tt(v,$){v.side===ls?xe(s.CULL_FACE):be(s.CULL_FACE);let G=v.side===In;$&&(G=!G),De(G),v.blending===ao&&v.transparent===!1?tt(Us):tt(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),i.setMask(v.colorWrite);const Z=v.stencilWrite;o.setTest(Z),Z&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Xe(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function De(v){y!==v&&(v?s.frontFace(s.CW):s.frontFace(s.CCW),y=v)}function st(v){v!==Fx?(be(s.CULL_FACE),v!==T&&(v===vd?s.cullFace(s.BACK):v===Vx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),T=v}function Je(v){v!==L&&(ee&&s.lineWidth(v),L=v)}function Xe(v,$,G){v?(be(s.POLYGON_OFFSET_FILL),(H!==$||B!==G)&&(s.polygonOffset($,G),H=$,B=G)):xe(s.POLYGON_OFFSET_FILL)}function Lt(v){v?be(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function P(v){v===void 0&&(v=s.TEXTURE0+ne-1),K!==v&&(s.activeTexture(v),K=v)}function A(v,$,G){G===void 0&&(K===null?G=s.TEXTURE0+ne-1:G=K);let Z=ve[G];Z===void 0&&(Z={type:void 0,texture:void 0},ve[G]=Z),(Z.type!==v||Z.texture!==$)&&(K!==G&&(s.activeTexture(G),K=G),s.bindTexture(v,$||ce[v]),Z.type=v,Z.texture=$)}function j(){const v=ve[K];v!==void 0&&v.type!==void 0&&(s.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ae(){try{s.compressedTexImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function le(){try{s.texSubImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Pe(){try{s.texSubImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function qe(){try{s.texStorage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ue(){try{s.texStorage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Re(){try{s.texImage2D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function et(){try{s.texImage3D.apply(s,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ve(v){He.equals(v)===!1&&(s.scissor(v.x,v.y,v.z,v.w),He.copy(v))}function ye(v){at.equals(v)===!1&&(s.viewport(v.x,v.y,v.z,v.w),at.copy(v))}function Ye(v,$){let G=c.get($);G===void 0&&(G=new WeakMap,c.set($,G));let Z=G.get(v);Z===void 0&&(Z=s.getUniformBlockIndex($,v.name),G.set(v,Z))}function je(v,$){const Z=c.get($).get(v);a.get($)!==Z&&(s.uniformBlockBinding($,Z,v.__bindingPointIndex),a.set($,Z))}function Ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},K=null,ve={},u={},h=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,M=null,x=null,S=null,w=null,b=new Fe(0,0,0),E=0,R=!1,y=null,T=null,L=null,H=null,B=null,He.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:be,disable:xe,bindFramebuffer:Ze,drawBuffers:We,useProgram:nt,setBlending:tt,setMaterial:Tt,setFlipSided:De,setCullFace:st,setLineWidth:Je,setPolygonOffset:Xe,setScissorTest:Lt,activeTexture:P,bindTexture:A,unbindTexture:j,compressedTexImage2D:re,compressedTexImage3D:ae,texImage2D:Re,texImage3D:et,updateUBOMapping:Ye,uniformBlockBinding:je,texStorage2D:qe,texStorage3D:ue,texSubImage2D:le,texSubImage3D:Pe,compressedTexSubImage2D:ge,compressedTexSubImage3D:me,scissor:Ve,viewport:ye,reset:Ft}}function qE(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ae,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,A){return f?new OffscreenCanvas(P,A):da("canvas")}function g(P,A,j){let re=1;const ae=Lt(P);if((ae.width>j||ae.height>j)&&(re=j/Math.max(ae.width,ae.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const le=Math.floor(re*ae.width),Pe=Math.floor(re*ae.height);h===void 0&&(h=_(le,Pe));const ge=A?_(le,Pe):h;return ge.width=le,ge.height=Pe,ge.getContext("2d").drawImage(P,0,0,le,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+le+"x"+Pe+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==Sn&&P.minFilter!==Ei}function m(P){s.generateMipmap(P)}function M(P,A,j,re,ae=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le=A;if(A===s.RED&&(j===s.FLOAT&&(le=s.R32F),j===s.HALF_FLOAT&&(le=s.R16F),j===s.UNSIGNED_BYTE&&(le=s.R8)),A===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(le=s.R8UI),j===s.UNSIGNED_SHORT&&(le=s.R16UI),j===s.UNSIGNED_INT&&(le=s.R32UI),j===s.BYTE&&(le=s.R8I),j===s.SHORT&&(le=s.R16I),j===s.INT&&(le=s.R32I)),A===s.RG&&(j===s.FLOAT&&(le=s.RG32F),j===s.HALF_FLOAT&&(le=s.RG16F),j===s.UNSIGNED_BYTE&&(le=s.RG8)),A===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(le=s.RG8UI),j===s.UNSIGNED_SHORT&&(le=s.RG16UI),j===s.UNSIGNED_INT&&(le=s.RG32UI),j===s.BYTE&&(le=s.RG8I),j===s.SHORT&&(le=s.RG16I),j===s.INT&&(le=s.RG32I)),A===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),A===s.RGBA){const Pe=ae?Mc:_t.getTransfer(re);j===s.FLOAT&&(le=s.RGBA32F),j===s.HALF_FLOAT&&(le=s.RGBA16F),j===s.UNSIGNED_BYTE&&(le=Pe===bt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function x(P,A){let j;return P?A===null||A===To||A===Eo?j=s.DEPTH24_STENCIL8:A===us?j=s.DEPTH32F_STENCIL8:A===yc&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===To||A===Eo?j=s.DEPTH_COMPONENT24:A===us?j=s.DEPTH_COMPONENT32F:A===yc&&(j=s.DEPTH_COMPONENT16),j}function S(P,A){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==Ei?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){const A=P.target;A.removeEventListener("dispose",w),E(A),A.isVideoTexture&&u.delete(A)}function b(P){const A=P.target;A.removeEventListener("dispose",b),y(A)}function E(P){const A=n.get(P);if(A.__webglInit===void 0)return;const j=P.source,re=d.get(j);if(re){const ae=re[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(P),Object.keys(re).length===0&&d.delete(j)}n.remove(P)}function R(P){const A=n.get(P);s.deleteTexture(A.__webglTexture);const j=P.source,re=d.get(j);delete re[A.__cacheKey],o.memory.textures--}function y(P){const A=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(A.__webglFramebuffer[re]))for(let ae=0;ae<A.__webglFramebuffer[re].length;ae++)s.deleteFramebuffer(A.__webglFramebuffer[re][ae]);else s.deleteFramebuffer(A.__webglFramebuffer[re]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[re])}else{if(Array.isArray(A.__webglFramebuffer))for(let re=0;re<A.__webglFramebuffer.length;re++)s.deleteFramebuffer(A.__webglFramebuffer[re]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let re=0;re<A.__webglColorRenderbuffer.length;re++)A.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[re]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const j=P.textures;for(let re=0,ae=j.length;re<ae;re++){const le=n.get(j[re]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(j[re])}n.remove(P)}let T=0;function L(){T=0}function H(){const P=T;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),T+=1,P}function B(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ne(P,A){const j=n.get(P);if(P.isVideoTexture&&Je(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(j,P,A);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+A)}function ee(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){at(j,P,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+A)}function Y(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){at(j,P,A);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+A)}function ie(P,A){const j=n.get(P);if(P.version>0&&j.__version!==P.version){te(j,P,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+A)}const K={[Ru]:s.REPEAT,[fr]:s.CLAMP_TO_EDGE,[Cu]:s.MIRRORED_REPEAT},ve={[Sn]:s.NEAREST,[mv]:s.NEAREST_MIPMAP_NEAREST,[Va]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[_l]:s.LINEAR_MIPMAP_NEAREST,[Rs]:s.LINEAR_MIPMAP_LINEAR},Me={[wv]:s.NEVER,[Iv]:s.ALWAYS,[om]:s.LESS,[am]:s.LEQUAL,[Rv]:s.EQUAL,[Lv]:s.GEQUAL,[Cv]:s.GREATER,[Pv]:s.NOTEQUAL};function Te(P,A){if(A.type===us&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ei||A.magFilter===_l||A.magFilter===Va||A.magFilter===Rs||A.minFilter===Ei||A.minFilter===_l||A.minFilter===Va||A.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,K[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,K[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,K[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ve[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ve[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Sn||A.minFilter!==Va&&A.minFilter!==Rs||A.type===us&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function He(P,A){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",w));const re=A.source;let ae=d.get(re);ae===void 0&&(ae={},d.set(re,ae));const le=B(A);if(le!==P.__cacheKey){ae[le]===void 0&&(ae[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ae[le].usedTimes++;const Pe=ae[P.__cacheKey];Pe!==void 0&&(ae[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&R(A)),P.__cacheKey=le,P.__webglTexture=ae[le].texture}return j}function at(P,A,j){let re=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(re=s.TEXTURE_3D);const ae=He(P,A),le=A.source;t.bindTexture(re,P.__webglTexture,s.TEXTURE0+j);const Pe=n.get(le);if(le.version!==Pe.__version||ae===!0){t.activeTexture(s.TEXTURE0+j);const ge=_t.getPrimaries(_t.workingColorSpace),me=A.colorSpace===ws?null:_t.getPrimaries(A.colorSpace),qe=A.colorSpace===ws||ge===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ue=g(A.image,!1,i.maxTextureSize);ue=Xe(A,ue);const Re=r.convert(A.format,A.colorSpace),et=r.convert(A.type);let Ve=M(A.internalFormat,Re,et,A.colorSpace,A.isVideoTexture);Te(re,A);let ye;const Ye=A.mipmaps,je=A.isVideoTexture!==!0,Ft=Pe.__version===void 0||ae===!0,v=le.dataReady,$=S(A,ue);if(A.isDepthTexture)Ve=x(A.format===Ao,A.type),Ft&&(je?t.texStorage2D(s.TEXTURE_2D,1,Ve,ue.width,ue.height):t.texImage2D(s.TEXTURE_2D,0,Ve,ue.width,ue.height,0,Re,et,null));else if(A.isDataTexture)if(Ye.length>0){je&&Ft&&t.texStorage2D(s.TEXTURE_2D,$,Ve,Ye[0].width,Ye[0].height);for(let G=0,Z=Ye.length;G<Z;G++)ye=Ye[G],je?v&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,ye.width,ye.height,Re,et,ye.data):t.texImage2D(s.TEXTURE_2D,G,Ve,ye.width,ye.height,0,Re,et,ye.data);A.generateMipmaps=!1}else je?(Ft&&t.texStorage2D(s.TEXTURE_2D,$,Ve,ue.width,ue.height),v&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue.width,ue.height,Re,et,ue.data)):t.texImage2D(s.TEXTURE_2D,0,Ve,ue.width,ue.height,0,Re,et,ue.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){je&&Ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$,Ve,Ye[0].width,Ye[0].height,ue.depth);for(let G=0,Z=Ye.length;G<Z;G++)if(ye=Ye[G],A.format!==ki)if(Re!==null)if(je){if(v)if(A.layerUpdates.size>0){for(const oe of A.layerUpdates){const Le=ye.width*ye.height;t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,oe,ye.width,ye.height,1,Re,ye.data.slice(Le*oe,Le*(oe+1)),0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,ye.width,ye.height,ue.depth,Re,ye.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Ve,ye.width,ye.height,ue.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?v&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,ye.width,ye.height,ue.depth,Re,et,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,G,Ve,ye.width,ye.height,ue.depth,0,Re,et,ye.data)}else{je&&Ft&&t.texStorage2D(s.TEXTURE_2D,$,Ve,Ye[0].width,Ye[0].height);for(let G=0,Z=Ye.length;G<Z;G++)ye=Ye[G],A.format!==ki?Re!==null?je?v&&t.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,ye.width,ye.height,Re,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,G,Ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?v&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,ye.width,ye.height,Re,et,ye.data):t.texImage2D(s.TEXTURE_2D,G,Ve,ye.width,ye.height,0,Re,et,ye.data)}else if(A.isDataArrayTexture)if(je){if(Ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$,Ve,ue.width,ue.height,ue.depth),v)if(A.layerUpdates.size>0){let G;switch(et){case s.UNSIGNED_BYTE:switch(Re){case s.ALPHA:G=1;break;case s.LUMINANCE:G=1;break;case s.LUMINANCE_ALPHA:G=2;break;case s.RGB:G=3;break;case s.RGBA:G=4;break;default:throw new Error(`Unknown texel size for format ${Re}.`)}break;case s.UNSIGNED_SHORT_4_4_4_4:case s.UNSIGNED_SHORT_5_5_5_1:case s.UNSIGNED_SHORT_5_6_5:G=1;break;default:throw new Error(`Unknown texel size for type ${et}.`)}const Z=ue.width*ue.height*G;for(const oe of A.layerUpdates)t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,oe,ue.width,ue.height,1,Re,et,ue.data.slice(Z*oe,Z*(oe+1)));A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Re,et,ue.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,ue.width,ue.height,ue.depth,0,Re,et,ue.data);else if(A.isData3DTexture)je?(Ft&&t.texStorage3D(s.TEXTURE_3D,$,Ve,ue.width,ue.height,ue.depth),v&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Re,et,ue.data)):t.texImage3D(s.TEXTURE_3D,0,Ve,ue.width,ue.height,ue.depth,0,Re,et,ue.data);else if(A.isFramebufferTexture){if(Ft)if(je)t.texStorage2D(s.TEXTURE_2D,$,Ve,ue.width,ue.height);else{let G=ue.width,Z=ue.height;for(let oe=0;oe<$;oe++)t.texImage2D(s.TEXTURE_2D,oe,Ve,G,Z,0,Re,et,null),G>>=1,Z>>=1}}else if(Ye.length>0){if(je&&Ft){const G=Lt(Ye[0]);t.texStorage2D(s.TEXTURE_2D,$,Ve,G.width,G.height)}for(let G=0,Z=Ye.length;G<Z;G++)ye=Ye[G],je?v&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,Re,et,ye):t.texImage2D(s.TEXTURE_2D,G,Ve,Re,et,ye);A.generateMipmaps=!1}else if(je){if(Ft){const G=Lt(ue);t.texStorage2D(s.TEXTURE_2D,$,Ve,G.width,G.height)}v&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,et,ue)}else t.texImage2D(s.TEXTURE_2D,0,Ve,Re,et,ue);p(A)&&m(re),Pe.__version=le.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function te(P,A,j){if(A.image.length!==6)return;const re=He(P,A),ae=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);const le=n.get(ae);if(ae.version!==le.__version||re===!0){t.activeTexture(s.TEXTURE0+j);const Pe=_t.getPrimaries(_t.workingColorSpace),ge=A.colorSpace===ws?null:_t.getPrimaries(A.colorSpace),me=A.colorSpace===ws||Pe===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const qe=A.isCompressedTexture||A.image[0].isCompressedTexture,ue=A.image[0]&&A.image[0].isDataTexture,Re=[];for(let Z=0;Z<6;Z++)!qe&&!ue?Re[Z]=g(A.image[Z],!0,i.maxCubemapSize):Re[Z]=ue?A.image[Z].image:A.image[Z],Re[Z]=Xe(A,Re[Z]);const et=Re[0],Ve=r.convert(A.format,A.colorSpace),ye=r.convert(A.type),Ye=M(A.internalFormat,Ve,ye,A.colorSpace),je=A.isVideoTexture!==!0,Ft=le.__version===void 0||re===!0,v=ae.dataReady;let $=S(A,et);Te(s.TEXTURE_CUBE_MAP,A);let G;if(qe){je&&Ft&&t.texStorage2D(s.TEXTURE_CUBE_MAP,$,Ye,et.width,et.height);for(let Z=0;Z<6;Z++){G=Re[Z].mipmaps;for(let oe=0;oe<G.length;oe++){const Le=G[oe];A.format!==ki?Ve!==null?je?v&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Le.width,Le.height,Ve,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?v&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Le.width,Le.height,Ve,ye,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Ye,Le.width,Le.height,0,Ve,ye,Le.data)}}}else{if(G=A.mipmaps,je&&Ft){G.length>0&&$++;const Z=Lt(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,$,Ye,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ue){je?v&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re[Z].width,Re[Z].height,Ve,ye,Re[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,Re[Z].width,Re[Z].height,0,Ve,ye,Re[Z].data);for(let oe=0;oe<G.length;oe++){const Ge=G[oe].image[Z].image;je?v&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Ge.width,Ge.height,Ve,ye,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Ye,Ge.width,Ge.height,0,Ve,ye,Ge.data)}}else{je?v&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ve,ye,Re[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,Ve,ye,Re[Z]);for(let oe=0;oe<G.length;oe++){const Le=G[oe];je?v&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Ve,ye,Le.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Ye,Ve,ye,Le.image[Z])}}}p(A)&&m(s.TEXTURE_CUBE_MAP),le.__version=ae.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ce(P,A,j,re,ae,le){const Pe=r.convert(j.format,j.colorSpace),ge=r.convert(j.type),me=M(j.internalFormat,Pe,ge,j.colorSpace);if(!n.get(A).__hasExternalTextures){const ue=Math.max(1,A.width>>le),Re=Math.max(1,A.height>>le);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,le,me,ue,Re,A.depth,0,Pe,ge,null):t.texImage2D(ae,le,me,ue,Re,0,Pe,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),st(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ae,n.get(j).__webglTexture,0,De(A)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ae,n.get(j).__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(P,A,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){const re=A.depthTexture,ae=re&&re.isDepthTexture?re.type:null,le=x(A.stencilBuffer,ae),Pe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=De(A);st(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,le,A.width,A.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,le,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,le,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,P)}else{const re=A.textures;for(let ae=0;ae<re.length;ae++){const le=re[ae],Pe=r.convert(le.format,le.colorSpace),ge=r.convert(le.type),me=M(le.internalFormat,Pe,ge,le.colorSpace),qe=De(A);j&&st(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,me,A.width,A.height):st(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,me,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ne(A.depthTexture,0);const re=n.get(A.depthTexture).__webglTexture,ae=De(A);if(A.depthTexture.format===co)st(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(A.depthTexture.format===Ao)st(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ze(P){const A=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");xe(A.__webglFramebuffer,P)}else if(j){A.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[re]),A.__webglDepthbuffer[re]=s.createRenderbuffer(),be(A.__webglDepthbuffer[re],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),be(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(P,A,j){const re=n.get(P);A!==void 0&&ce(re.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Ze(P)}function nt(P){const A=P.texture,j=n.get(P),re=n.get(A);P.addEventListener("dispose",b);const ae=P.textures,le=P.isWebGLCubeRenderTarget===!0,Pe=ae.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=A.version,o.memory.textures++),le){j.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[ge]=[];for(let me=0;me<A.mipmaps.length;me++)j.__webglFramebuffer[ge][me]=s.createFramebuffer()}else j.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let ge=0;ge<A.mipmaps.length;ge++)j.__webglFramebuffer[ge]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let ge=0,me=ae.length;ge<me;ge++){const qe=n.get(ae[ge]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&st(P)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ge=0;ge<ae.length;ge++){const me=ae[ge];j.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[ge]);const qe=r.convert(me.format,me.colorSpace),ue=r.convert(me.type),Re=M(me.internalFormat,qe,ue,me.colorSpace,P.isXRRenderTarget===!0),et=De(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Re,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,j.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),be(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Te(s.TEXTURE_CUBE_MAP,A);for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)ce(j.__webglFramebuffer[ge][me],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,me);else ce(j.__webglFramebuffer[ge],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(A)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ge=0,me=ae.length;ge<me;ge++){const qe=ae[ge],ue=n.get(qe);t.bindTexture(s.TEXTURE_2D,ue.__webglTexture),Te(s.TEXTURE_2D,qe),ce(j.__webglFramebuffer,P,qe,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,0),p(qe)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,re.__webglTexture),Te(ge,A),A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)ce(j.__webglFramebuffer[me],P,A,s.COLOR_ATTACHMENT0,ge,me);else ce(j.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,ge,0);p(A)&&m(ge),t.unbindTexture()}P.depthBuffer&&Ze(P)}function U(P){const A=P.textures;for(let j=0,re=A.length;j<re;j++){const ae=A[j];if(p(ae)){const le=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Pe=n.get(ae).__webglTexture;t.bindTexture(le,Pe),m(le),t.unbindTexture()}}}const it=[],tt=[];function Tt(P){if(P.samples>0){if(st(P)===!1){const A=P.textures,j=P.width,re=P.height;let ae=s.COLOR_BUFFER_BIT;const le=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=n.get(P),ge=A.length>1;if(ge)for(let me=0;me<A.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let me=0;me<A.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[me]);const qe=n.get(A[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qe,0)}s.blitFramebuffer(0,0,j,re,0,0,j,re,ae,s.NEAREST),c===!0&&(it.length=0,tt.length=0,it.push(s.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(it.push(le),tt.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,tt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let me=0;me<A.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[me]);const qe=n.get(A[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function De(P){return Math.min(i.maxSamples,P.samples)}function st(P){const A=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Je(P){const A=o.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function Xe(P,A){const j=P.colorSpace,re=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==Ii&&j!==ws&&(_t.getTransfer(j)===bt?(re!==ki||ae!==zs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}function Lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=ne,this.setTexture2DArray=ee,this.setTexture3D=Y,this.setTextureCube=ie,this.rebindTextures=We,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=st}function YE(s,e){function t(n,i=ws){let r;const o=_t.getTransfer(i);if(n===zs)return s.UNSIGNED_BYTE;if(n===em)return s.UNSIGNED_SHORT_4_4_4_4;if(n===tm)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xv)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gv)return s.BYTE;if(n===_v)return s.SHORT;if(n===yc)return s.UNSIGNED_SHORT;if(n===Qp)return s.INT;if(n===To)return s.UNSIGNED_INT;if(n===us)return s.FLOAT;if(n===Na)return s.HALF_FLOAT;if(n===vv)return s.ALPHA;if(n===yv)return s.RGB;if(n===ki)return s.RGBA;if(n===Mv)return s.LUMINANCE;if(n===Sv)return s.LUMINANCE_ALPHA;if(n===co)return s.DEPTH_COMPONENT;if(n===Ao)return s.DEPTH_STENCIL;if(n===Tv)return s.RED;if(n===nm)return s.RED_INTEGER;if(n===Ev)return s.RG;if(n===im)return s.RG_INTEGER;if(n===sm)return s.RGBA_INTEGER;if(n===xl||n===vl||n===yl||n===Ml)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ml)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Td||n===Ed||n===Ad||n===Nd)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Td)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ed)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ad)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bd||n===wd||n===Rd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bd||n===wd)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rd)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cd||n===Pd||n===Ld||n===Id||n===Dd||n===Ud||n===Od||n===Fd||n===Vd||n===zd||n===Bd||n===kd||n===Hd||n===Gd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cd)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pd)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ld)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Id)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dd)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ud)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Od)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fd)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vd)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zd)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bd)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kd)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hd)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gd)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===Wd||n===Xd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Av||n===qd||n===Yd||n===jd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Eo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class jE extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oc extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $E={type:"move"};class Yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($E)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new oc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZE=`
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

}`;class JE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Tn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ks({vertexShader:KE,fragmentShader:ZE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new di(new jc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class QE extends _s{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,_=null;const g=new JE,p=t.getContextAttributes();let m=null,M=null;const x=[],S=[],w=new Ae;let b=null;const E=new On;E.layers.enable(1),E.viewport=new lt;const R=new On;R.layers.enable(2),R.viewport=new lt;const y=[E,R],T=new jE;T.layers.enable(1),T.layers.enable(2);let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=x[te];return ce===void 0&&(ce=new Yl,x[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=x[te];return ce===void 0&&(ce=new Yl,x[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=x[te];return ce===void 0&&(ce=new Yl,x[te]=ce),ce.getHandSpace()};function B(te){const ce=S.indexOf(te.inputSource);if(ce===-1)return;const be=x[ce];be!==void 0&&(be.update(te.inputSource,te.frame,l||o),be.dispatchEvent({type:te.type,data:te.inputSource}))}function ne(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",ne),i.removeEventListener("inputsourceschange",ee);for(let te=0;te<x.length;te++){const ce=S[te];ce!==null&&(S[te]=null,x[te].disconnect(ce))}L=null,H=null,g.reset(),e.setRenderTarget(m),f=null,d=null,h=null,i=null,M=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",ne),i.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const ce={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new yr(f.framebufferWidth,f.framebufferHeight,{format:ki,type:zs,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ce=null,be=null,xe=null;p.depth&&(xe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?Ao:co,be=p.stencil?Eo:To);const Ze={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ze),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new yr(d.textureWidth,d.textureHeight,{format:ki,type:zs,depthTexture:new Ra(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function ee(te){for(let ce=0;ce<te.removed.length;ce++){const be=te.removed[ce],xe=S.indexOf(be);xe>=0&&(S[xe]=null,x[xe].disconnect(be))}for(let ce=0;ce<te.added.length;ce++){const be=te.added[ce];let xe=S.indexOf(be);if(xe===-1){for(let We=0;We<x.length;We++)if(We>=S.length){S.push(be),xe=We;break}else if(S[We]===null){S[We]=be,xe=We;break}if(xe===-1)break}const Ze=x[xe];Ze&&Ze.connect(be)}}const Y=new O,ie=new O;function K(te,ce,be){Y.setFromMatrixPosition(ce.matrixWorld),ie.setFromMatrixPosition(be.matrixWorld);const xe=Y.distanceTo(ie),Ze=ce.projectionMatrix.elements,We=be.projectionMatrix.elements,nt=Ze[14]/(Ze[10]-1),U=Ze[14]/(Ze[10]+1),it=(Ze[9]+1)/Ze[5],tt=(Ze[9]-1)/Ze[5],Tt=(Ze[8]-1)/Ze[0],De=(We[8]+1)/We[0],st=nt*Tt,Je=nt*De,Xe=xe/(-Tt+De),Lt=Xe*-Tt;ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Lt),te.translateZ(Xe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const P=nt+Xe,A=U+Xe,j=st-Lt,re=Je+(xe-Lt),ae=it*U/A*P,le=tt*U/A*P;te.projectionMatrix.makePerspective(j,re,ae,le,P,A),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ve(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;g.texture!==null&&(te.near=g.depthNear,te.far=g.depthFar),T.near=R.near=E.near=te.near,T.far=R.far=E.far=te.far,(L!==T.near||H!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,H=T.far,E.near=L,E.far=H,R.near=L,R.far=H,E.updateProjectionMatrix(),R.updateProjectionMatrix(),te.updateProjectionMatrix());const ce=te.parent,be=T.cameras;ve(T,ce);for(let xe=0;xe<be.length;xe++)ve(be[xe],ce);be.length===2?K(T,E,R):T.projectionMatrix.copy(E.projectionMatrix),Me(te,T,ce)};function Me(te,ce,be){be===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(be.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=bo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)};let Te=null;function He(te,ce){if(u=ce.getViewerPose(l||o),_=ce,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let xe=!1;be.length!==T.cameras.length&&(T.cameras.length=0,xe=!0);for(let We=0;We<be.length;We++){const nt=be[We];let U=null;if(f!==null)U=f.getViewport(nt);else{const tt=h.getViewSubImage(d,nt);U=tt.viewport,We===0&&(e.setRenderTargetTextures(M,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(M))}let it=y[We];it===void 0&&(it=new On,it.layers.enable(We),it.viewport=new lt,y[We]=it),it.matrix.fromArray(nt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(nt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(U.x,U.y,U.width,U.height),We===0&&(T.matrix.copy(it.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),xe===!0&&T.cameras.push(it)}const Ze=i.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")){const We=h.getDepthInformation(be[0]);We&&We.isValid&&We.texture&&g.init(e,We,i.renderState)}}for(let be=0;be<x.length;be++){const xe=S[be],Ze=x[be];xe!==null&&Ze!==void 0&&Ze.update(xe,ce,l||o)}Te&&Te(te,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}const at=new xm;at.setAnimationLoop(He),this.setAnimationLoop=function(te){Te=te},this.dispose=function(){}}}const nr=new gi,eA=new wt;function tA(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,mm(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===In&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===In&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,S=M.envMapRotation;x&&(p.envMap.value=x,nr.copy(S),nr.x*=-1,nr.y*=-1,nr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),p.envMapRotation.value.setFromMatrix4(eA.makeRotationFromEuler(nr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===In&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nA(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const S=x.program;n.uniformBlockBinding(M,S)}function l(M,x){let S=i[M.id];S===void 0&&(_(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const w=x.program;n.updateUBOMapping(M,w);const b=e.render.frame;r[M.id]!==b&&(d(M),r[M.id]=b)}function u(M){const x=h();M.__bindingPointIndex=x;const S=s.createBuffer(),w=M.__size,b=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,w,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],S=M.uniforms,w=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,E=S.length;b<E;b++){const R=Array.isArray(S[b])?S[b]:[S[b]];for(let y=0,T=R.length;y<T;y++){const L=R[y];if(f(L,b,y,w)===!0){const H=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let ne=0;for(let ee=0;ee<B.length;ee++){const Y=B[ee],ie=g(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,H+ne,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,ne),ne+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,x,S,w){const b=M.value,E=x+"_"+S;if(w[E]===void 0)return typeof b=="number"||typeof b=="boolean"?w[E]=b:w[E]=b.clone(),!0;{const R=w[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return w[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function _(M){const x=M.uniforms;let S=0;const w=16;for(let E=0,R=x.length;E<R;E++){const y=Array.isArray(x[E])?x[E]:[x[E]];for(let T=0,L=y.length;T<L;T++){const H=y[T],B=Array.isArray(H.value)?H.value:[H.value];for(let ne=0,ee=B.length;ne<ee;ne++){const Y=B[ne],ie=g(Y),K=S%w;K!==0&&w-K<ie.boundary&&(S+=w-K),H.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=ie.storage}}}const b=S%w;return b>0&&(S+=w-b),M.__size=S,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class iA{constructor(e={}){const{canvas:t=Kv(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Si,this.toneMapping=ni,this.toneMappingExposure=1;const x=this;let S=!1,w=0,b=0,E=null,R=-1,y=null;const T=new lt,L=new lt;let H=null;const B=new Fe(0);let ne=0,ee=t.width,Y=t.height,ie=1,K=null,ve=null;const Me=new lt(0,0,ee,Y),Te=new lt(0,0,ee,Y);let He=!1;const at=new Mh;let te=!1,ce=!1;const be=new wt,xe=new O,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function nt(){return E===null?ie:1}let U=n;function it(N,V){return t.getContext(N,V)}try{const N={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ph}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Z,!1),U===null){const V="webgl2";if(U=it(V,N),U===null)throw it(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let tt,Tt,De,st,Je,Xe,Lt,P,A,j,re,ae,le,Pe,ge,me,qe,ue,Re,et,Ve,ye,Ye,je;function Ft(){tt=new hT(U),tt.init(),ye=new YE(U,tt),Tt=new rT(U,tt,e,ye),De=new XE(U),st=new pT(U),Je=new PE,Xe=new qE(U,tt,De,Je,Tt,ye,st),Lt=new aT(x),P=new uT(x),A=new My(U),Ye=new iT(U,A),j=new dT(U,A,st,Ye),re=new gT(U,j,A,st),Re=new mT(U,Tt,Xe),me=new oT(Je),ae=new CE(x,Lt,P,tt,Tt,Ye,me),le=new tA(x,Je),Pe=new IE,ge=new zE(tt),ue=new nT(x,Lt,P,De,re,d,c),qe=new WE(x,re,Tt),je=new nA(U,st,Tt,De),et=new sT(U,tt,st),Ve=new fT(U,tt,st),st.programs=ae.programs,x.capabilities=Tt,x.extensions=tt,x.properties=Je,x.renderLists=Pe,x.shadowMap=qe,x.state=De,x.info=st}Ft();const v=new QE(x,U);this.xr=v,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const N=tt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=tt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(N){N!==void 0&&(ie=N,this.setSize(ee,Y,!1))},this.getSize=function(N){return N.set(ee,Y)},this.setSize=function(N,V,X=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=N,Y=V,t.width=Math.floor(N*ie),t.height=Math.floor(V*ie),X===!0&&(t.style.width=N+"px",t.style.height=V+"px"),this.setViewport(0,0,N,V)},this.getDrawingBufferSize=function(N){return N.set(ee*ie,Y*ie).floor()},this.setDrawingBufferSize=function(N,V,X){ee=N,Y=V,ie=X,t.width=Math.floor(N*X),t.height=Math.floor(V*X),this.setViewport(0,0,N,V)},this.getCurrentViewport=function(N){return N.copy(T)},this.getViewport=function(N){return N.copy(Me)},this.setViewport=function(N,V,X,q){N.isVector4?Me.set(N.x,N.y,N.z,N.w):Me.set(N,V,X,q),De.viewport(T.copy(Me).multiplyScalar(ie).round())},this.getScissor=function(N){return N.copy(Te)},this.setScissor=function(N,V,X,q){N.isVector4?Te.set(N.x,N.y,N.z,N.w):Te.set(N,V,X,q),De.scissor(L.copy(Te).multiplyScalar(ie).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(N){De.setScissorTest(He=N)},this.setOpaqueSort=function(N){K=N},this.setTransparentSort=function(N){ve=N},this.getClearColor=function(N){return N.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(N=!0,V=!0,X=!0){let q=0;if(N){let k=!1;if(E!==null){const de=E.texture.format;k=de===sm||de===im||de===nm}if(k){const de=E.texture.type,Se=de===zs||de===To||de===yc||de===Eo||de===em||de===tm,we=ue.getClearColor(),Ce=ue.getClearAlpha(),ze=we.r,Be=we.g,Oe=we.b;Se?(f[0]=ze,f[1]=Be,f[2]=Oe,f[3]=Ce,U.clearBufferuiv(U.COLOR,0,f)):(_[0]=ze,_[1]=Be,_[2]=Oe,_[3]=Ce,U.clearBufferiv(U.COLOR,0,_))}else q|=U.COLOR_BUFFER_BIT}V&&(q|=U.DEPTH_BUFFER_BIT),X&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Pe.dispose(),ge.dispose(),Je.dispose(),Lt.dispose(),P.dispose(),re.dispose(),Ye.dispose(),je.dispose(),ae.dispose(),v.dispose(),v.removeEventListener("sessionstart",Yt),v.removeEventListener("sessionend",jt),Xn.stop()};function $(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const N=st.autoReset,V=qe.enabled,X=qe.autoUpdate,q=qe.needsUpdate,k=qe.type;Ft(),st.autoReset=N,qe.enabled=V,qe.autoUpdate=X,qe.needsUpdate=q,qe.type=k}function Z(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function oe(N){const V=N.target;V.removeEventListener("dispose",oe),Le(V)}function Le(N){Ge(N),Je.remove(N)}function Ge(N){const V=Je.get(N).programs;V!==void 0&&(V.forEach(function(X){ae.releaseProgram(X)}),N.isShaderMaterial&&ae.releaseShaderCache(N))}this.renderBufferDirect=function(N,V,X,q,k,de){V===null&&(V=Ze);const Se=k.isMesh&&k.matrixWorld.determinant()<0,we=Ix(N,V,X,q,k);De.setMaterial(q,Se);let Ce=X.index,ze=1;if(q.wireframe===!0){if(Ce=j.getWireframeAttribute(X),Ce===void 0)return;ze=2}const Be=X.drawRange,Oe=X.attributes.position;let ft=Be.start*ze,zt=(Be.start+Be.count)*ze;de!==null&&(ft=Math.max(ft,de.start*ze),zt=Math.min(zt,(de.start+de.count)*ze)),Ce!==null?(ft=Math.max(ft,0),zt=Math.min(zt,Ce.count)):Oe!=null&&(ft=Math.max(ft,0),zt=Math.min(zt,Oe.count));const Bt=zt-ft;if(Bt<0||Bt===1/0)return;Ye.setup(k,q,we,X,Ce);let Yn,mt=et;if(Ce!==null&&(Yn=A.get(Ce),mt=Ve,mt.setIndex(Yn)),k.isMesh)q.wireframe===!0?(De.setLineWidth(q.wireframeLinewidth*nt()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if(k.isLine){let Ie=q.linewidth;Ie===void 0&&(Ie=1),De.setLineWidth(Ie*nt()),k.isLineSegments?mt.setMode(U.LINES):k.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else k.isPoints?mt.setMode(U.POINTS):k.isSprite&&mt.setMode(U.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?mt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)mt.renderInstances(ft,Bt,k.count);else if(X.isInstancedBufferGeometry){const Ie=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wn=Math.min(X.instanceCount,Ie);mt.renderInstances(ft,Bt,wn)}else mt.render(ft,Bt)};function Vt(N,V,X){N.transparent===!0&&N.side===ls&&N.forceSinglePass===!1?(N.side=In,N.needsUpdate=!0,Oa(N,V,X),N.side=Vs,N.needsUpdate=!0,Oa(N,V,X),N.side=ls):Oa(N,V,X)}this.compile=function(N,V,X=null){X===null&&(X=N),p=ge.get(X),p.init(V),M.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),N!==X&&N.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const q=new Set;return N.traverse(function(k){const de=k.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const we=de[Se];Vt(we,X,k),q.add(we)}else Vt(de,X,k),q.add(de)}),M.pop(),p=null,q},this.compileAsync=function(N,V,X=null){const q=this.compile(N,V,X);return new Promise(k=>{function de(){if(q.forEach(function(Se){Je.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){k(N);return}setTimeout(de,10)}tt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let qt=null;function ut(N){qt&&qt(N)}function Yt(){Xn.stop()}function jt(){Xn.start()}const Xn=new xm;Xn.setAnimationLoop(ut),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(N){qt=N,v.setAnimationLoop(N),N===null?Xn.stop():Xn.start()},v.addEventListener("sessionstart",Yt),v.addEventListener("sessionend",jt),this.render=function(N,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(V),V=v.getCamera()),N.isScene===!0&&N.onBeforeRender(x,N,V,E),p=ge.get(N,M.length),p.init(V),M.push(p),be.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),at.setFromProjectionMatrix(be),ce=this.localClippingEnabled,te=me.init(this.clippingPlanes,ce),g=Pe.get(N,m.length),g.init(),m.push(g),v.enabled===!0&&v.isPresenting===!0){const de=x.xr.getDepthSensingMesh();de!==null&&qn(de,V,-1/0,x.sortObjects)}qn(N,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(K,ve),We=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,We&&ue.addToRenderList(g,N),this.info.render.frame++,te===!0&&me.beginShadows();const X=p.state.shadowsArray;qe.render(X,N,V),te===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,k=g.transmissive;if(p.setupLights(),V.isArrayCamera){const de=V.cameras;if(k.length>0)for(let Se=0,we=de.length;Se<we;Se++){const Ce=de[Se];js(q,k,N,Ce)}We&&ue.render(N);for(let Se=0,we=de.length;Se<we;Se++){const Ce=de[Se];vs(g,N,Ce,Ce.viewport)}}else k.length>0&&js(q,k,N,V),We&&ue.render(N),vs(g,N,V);E!==null&&(Xe.updateMultisampleRenderTarget(E),Xe.updateRenderTargetMipmap(E)),N.isScene===!0&&N.onAfterRender(x,N,V),Ye.resetDefaultState(),R=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],te===!0&&me.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function qn(N,V,X,q){if(N.visible===!1)return;if(N.layers.test(V.layers)){if(N.isGroup)X=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(V);else if(N.isLight)p.pushLight(N),N.castShadow&&p.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||at.intersectsSprite(N)){q&&xe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(be);const Se=re.update(N),we=N.material;we.visible&&g.push(N,Se,we,X,xe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||at.intersectsObject(N))){const Se=re.update(N),we=N.material;if(q&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),xe.copy(N.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),xe.copy(Se.boundingSphere.center)),xe.applyMatrix4(N.matrixWorld).applyMatrix4(be)),Array.isArray(we)){const Ce=Se.groups;for(let ze=0,Be=Ce.length;ze<Be;ze++){const Oe=Ce[ze],ft=we[Oe.materialIndex];ft&&ft.visible&&g.push(N,Se,ft,X,xe.z,Oe)}}else we.visible&&g.push(N,Se,we,X,xe.z,null)}}const de=N.children;for(let Se=0,we=de.length;Se<we;Se++)qn(de[Se],V,X,q)}function vs(N,V,X,q){const k=N.opaque,de=N.transmissive,Se=N.transparent;p.setupLightsView(X),te===!0&&me.setGlobalState(x.clippingPlanes,X),q&&De.viewport(T.copy(q)),k.length>0&&$s(k,V,X),de.length>0&&$s(de,V,X),Se.length>0&&$s(Se,V,X),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function js(N,V,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new yr(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Na:zs,minFilter:Rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const de=p.state.transmissionRenderTarget[q.id],Se=q.viewport||T;de.setSize(Se.z,Se.w);const we=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor(B),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),We?ue.render(X):x.clear();const Ce=x.toneMapping;x.toneMapping=ni;const ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),te===!0&&me.setGlobalState(x.clippingPlanes,q),$s(N,X,q),Xe.updateMultisampleRenderTarget(de),Xe.updateRenderTargetMipmap(de),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Oe=0,ft=V.length;Oe<ft;Oe++){const zt=V[Oe],Bt=zt.object,Yn=zt.geometry,mt=zt.material,Ie=zt.group;if(mt.side===ls&&Bt.layers.test(q.layers)){const wn=mt.side;mt.side=In,mt.needsUpdate=!0,md(Bt,X,q,Yn,mt,Ie),mt.side=wn,mt.needsUpdate=!0,Be=!0}}Be===!0&&(Xe.updateMultisampleRenderTarget(de),Xe.updateRenderTargetMipmap(de))}x.setRenderTarget(we),x.setClearColor(B,ne),ze!==void 0&&(q.viewport=ze),x.toneMapping=Ce}function $s(N,V,X){const q=V.isScene===!0?V.overrideMaterial:null;for(let k=0,de=N.length;k<de;k++){const Se=N[k],we=Se.object,Ce=Se.geometry,ze=q===null?Se.material:q,Be=Se.group;we.layers.test(X.layers)&&md(we,V,X,Ce,ze,Be)}}function md(N,V,X,q,k,de){N.onBeforeRender(x,V,X,q,k,de),N.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),k.onBeforeRender(x,V,X,q,N,de),k.transparent===!0&&k.side===ls&&k.forceSinglePass===!1?(k.side=In,k.needsUpdate=!0,x.renderBufferDirect(X,V,q,k,N,de),k.side=Vs,k.needsUpdate=!0,x.renderBufferDirect(X,V,q,k,N,de),k.side=ls):x.renderBufferDirect(X,V,q,k,N,de),N.onAfterRender(x,V,X,q,k,de)}function Oa(N,V,X){V.isScene!==!0&&(V=Ze);const q=Je.get(N),k=p.state.lights,de=p.state.shadowsArray,Se=k.state.version,we=ae.getParameters(N,k.state,de,V,X),Ce=ae.getProgramCacheKey(we);let ze=q.programs;q.environment=N.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(N.isMeshStandardMaterial?P:Lt).get(N.envMap||q.environment),q.envMapRotation=q.environment!==null&&N.envMap===null?V.environmentRotation:N.envMapRotation,ze===void 0&&(N.addEventListener("dispose",oe),ze=new Map,q.programs=ze);let Be=ze.get(Ce);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===Se)return _d(N,we),Be}else we.uniforms=ae.getUniforms(N),N.onBuild(X,we,x),N.onBeforeCompile(we,x),Be=ae.acquireProgram(we,Ce),ze.set(Ce,Be),q.uniforms=we.uniforms;const Oe=q.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Oe.clippingPlanes=me.uniform),_d(N,we),q.needsLights=Ux(N),q.lightsStateVersion=Se,q.needsLights&&(Oe.ambientLightColor.value=k.state.ambient,Oe.lightProbe.value=k.state.probe,Oe.directionalLights.value=k.state.directional,Oe.directionalLightShadows.value=k.state.directionalShadow,Oe.spotLights.value=k.state.spot,Oe.spotLightShadows.value=k.state.spotShadow,Oe.rectAreaLights.value=k.state.rectArea,Oe.ltc_1.value=k.state.rectAreaLTC1,Oe.ltc_2.value=k.state.rectAreaLTC2,Oe.pointLights.value=k.state.point,Oe.pointLightShadows.value=k.state.pointShadow,Oe.hemisphereLights.value=k.state.hemi,Oe.directionalShadowMap.value=k.state.directionalShadowMap,Oe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Oe.spotShadowMap.value=k.state.spotShadowMap,Oe.spotLightMatrix.value=k.state.spotLightMatrix,Oe.spotLightMap.value=k.state.spotLightMap,Oe.pointShadowMap.value=k.state.pointShadowMap,Oe.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function gd(N){if(N.uniformsList===null){const V=N.currentProgram.getUniforms();N.uniformsList=dc.seqWithValue(V.seq,N.uniforms)}return N.uniformsList}function _d(N,V){const X=Je.get(N);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.batchingColor=V.batchingColor,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.instancingMorph=V.instancingMorph,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function Ix(N,V,X,q,k){V.isScene!==!0&&(V=Ze),Xe.resetTextureUnits();const de=V.fog,Se=q.isMeshStandardMaterial?V.environment:null,we=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ii,Ce=(q.isMeshStandardMaterial?P:Lt).get(q.envMap||Se),ze=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Oe=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,zt=!!X.morphAttributes.color;let Bt=ni;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Bt=x.toneMapping);const Yn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=Yn!==void 0?Yn.length:0,Ie=Je.get(q),wn=p.state.lights;if(te===!0&&(ce===!0||N!==y)){const ai=N===y&&q.id===R;me.setState(q,N,ai)}let vt=!1;q.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==wn.state.version||Ie.outputColorSpace!==we||k.isBatchedMesh&&Ie.batching===!1||!k.isBatchedMesh&&Ie.batching===!0||k.isBatchedMesh&&Ie.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ie.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ie.instancing===!1||!k.isInstancedMesh&&Ie.instancing===!0||k.isSkinnedMesh&&Ie.skinning===!1||!k.isSkinnedMesh&&Ie.skinning===!0||k.isInstancedMesh&&Ie.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ie.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ie.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ie.instancingMorph===!1&&k.morphTexture!==null||Ie.envMap!==Ce||q.fog===!0&&Ie.fog!==de||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==me.numPlanes||Ie.numIntersection!==me.numIntersection)||Ie.vertexAlphas!==ze||Ie.vertexTangents!==Be||Ie.morphTargets!==Oe||Ie.morphNormals!==ft||Ie.morphColors!==zt||Ie.toneMapping!==Bt||Ie.morphTargetsCount!==mt)&&(vt=!0):(vt=!0,Ie.__version=q.version);let Ji=Ie.currentProgram;vt===!0&&(Ji=Oa(q,V,k));let Fa=!1,Ks=!1,pl=!1;const rn=Ji.getUniforms(),ys=Ie.uniforms;if(De.useProgram(Ji.program)&&(Fa=!0,Ks=!0,pl=!0),q.id!==R&&(R=q.id,Ks=!0),Fa||y!==N){rn.setValue(U,"projectionMatrix",N.projectionMatrix),rn.setValue(U,"viewMatrix",N.matrixWorldInverse);const ai=rn.map.cameraPosition;ai!==void 0&&ai.setValue(U,xe.setFromMatrixPosition(N.matrixWorld)),Tt.logarithmicDepthBuffer&&rn.setValue(U,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&rn.setValue(U,"isOrthographic",N.isOrthographicCamera===!0),y!==N&&(y=N,Ks=!0,pl=!0)}if(k.isSkinnedMesh){rn.setOptional(U,k,"bindMatrix"),rn.setOptional(U,k,"bindMatrixInverse");const ai=k.skeleton;ai&&(ai.boneTexture===null&&ai.computeBoneTexture(),rn.setValue(U,"boneTexture",ai.boneTexture,Xe))}k.isBatchedMesh&&(rn.setOptional(U,k,"batchingTexture"),rn.setValue(U,"batchingTexture",k._matricesTexture,Xe),rn.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&rn.setValue(U,"batchingColorTexture",k._colorsTexture,Xe));const ml=X.morphAttributes;if((ml.position!==void 0||ml.normal!==void 0||ml.color!==void 0)&&Re.update(k,X,Ji),(Ks||Ie.receiveShadow!==k.receiveShadow)&&(Ie.receiveShadow=k.receiveShadow,rn.setValue(U,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ys.envMap.value=Ce,ys.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&V.environment!==null&&(ys.envMapIntensity.value=V.environmentIntensity),Ks&&(rn.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&Dx(ys,pl),de&&q.fog===!0&&le.refreshFogUniforms(ys,de),le.refreshMaterialUniforms(ys,q,ie,Y,p.state.transmissionRenderTarget[N.id]),dc.upload(U,gd(Ie),ys,Xe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(dc.upload(U,gd(Ie),ys,Xe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&rn.setValue(U,"center",k.center),rn.setValue(U,"modelViewMatrix",k.modelViewMatrix),rn.setValue(U,"normalMatrix",k.normalMatrix),rn.setValue(U,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ai=q.uniformsGroups;for(let gl=0,Ox=ai.length;gl<Ox;gl++){const xd=ai[gl];je.update(xd,Ji),je.bind(xd,Ji)}}return Ji}function Dx(N,V){N.ambientLightColor.needsUpdate=V,N.lightProbe.needsUpdate=V,N.directionalLights.needsUpdate=V,N.directionalLightShadows.needsUpdate=V,N.pointLights.needsUpdate=V,N.pointLightShadows.needsUpdate=V,N.spotLights.needsUpdate=V,N.spotLightShadows.needsUpdate=V,N.rectAreaLights.needsUpdate=V,N.hemisphereLights.needsUpdate=V}function Ux(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(N,V,X){Je.get(N.texture).__webglTexture=V,Je.get(N.depthTexture).__webglTexture=X;const q=Je.get(N);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,V){const X=Je.get(N);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(N,V=0,X=0){E=N,w=V,b=X;let q=!0,k=null,de=!1,Se=!1;if(N){const Ce=Je.get(N);Ce.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(U.FRAMEBUFFER,null),q=!1):Ce.__webglFramebuffer===void 0?Xe.setupRenderTarget(N):Ce.__hasExternalTextures&&Xe.rebindTextures(N,Je.get(N.texture).__webglTexture,Je.get(N.depthTexture).__webglTexture);const ze=N.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const Be=Je.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Be[V])?k=Be[V][X]:k=Be[V],de=!0):N.samples>0&&Xe.useMultisampledRTT(N)===!1?k=Je.get(N).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[X]:k=Be,T.copy(N.viewport),L.copy(N.scissor),H=N.scissorTest}else T.copy(Me).multiplyScalar(ie).floor(),L.copy(Te).multiplyScalar(ie).floor(),H=He;if(De.bindFramebuffer(U.FRAMEBUFFER,k)&&q&&De.drawBuffers(N,k),De.viewport(T),De.scissor(L),De.setScissorTest(H),de){const Ce=Je.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ce.__webglTexture,X)}else if(Se){const Ce=Je.get(N.texture),ze=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.__webglTexture,X||0,ze)}R=-1},this.readRenderTargetPixels=function(N,V,X,q,k,de,Se){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Je.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){De.bindFramebuffer(U.FRAMEBUFFER,we);try{const Ce=N.texture,ze=Ce.format,Be=Ce.type;if(!Tt.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=N.width-q&&X>=0&&X<=N.height-k&&U.readPixels(V,X,q,k,ye.convert(ze),ye.convert(Be),de)}finally{const Ce=E!==null?Je.get(E).__webglFramebuffer:null;De.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(N,V,X,q,k,de,Se){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Je.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){De.bindFramebuffer(U.FRAMEBUFFER,we);try{const Ce=N.texture,ze=Ce.format,Be=Ce.type;if(!Tt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=N.width-q&&X>=0&&X<=N.height-k){const Oe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),U.readPixels(V,X,q,k,ye.convert(ze),ye.convert(Be),0),U.flush();const ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await Zv(U,ft,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de)}finally{U.deleteBuffer(Oe),U.deleteSync(ft)}return de}}finally{const Ce=E!==null?Je.get(E).__webglFramebuffer:null;De.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(N,V=null,X=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,N=arguments[1]);const q=Math.pow(2,-X),k=Math.floor(N.image.width*q),de=Math.floor(N.image.height*q),Se=V!==null?V.x:0,we=V!==null?V.y:0;Xe.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Se,we,k,de),De.unbindTexture()},this.copyTextureToTexture=function(N,V,X=null,q=null,k=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,N=arguments[1],V=arguments[2],k=arguments[3]||0,X=null);let de,Se,we,Ce,ze,Be;X!==null?(de=X.max.x-X.min.x,Se=X.max.y-X.min.y,we=X.min.x,Ce=X.min.y):(de=N.image.width,Se=N.image.height,we=0,Ce=0),q!==null?(ze=q.x,Be=q.y):(ze=0,Be=0);const Oe=ye.convert(V.format),ft=ye.convert(V.type);Xe.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const zt=U.getParameter(U.UNPACK_ROW_LENGTH),Bt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Yn=U.getParameter(U.UNPACK_SKIP_PIXELS),mt=U.getParameter(U.UNPACK_SKIP_ROWS),Ie=U.getParameter(U.UNPACK_SKIP_IMAGES),wn=N.isCompressedTexture?N.mipmaps[k]:N.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,wn.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,wn.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,we),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ce),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,ze,Be,de,Se,Oe,ft,wn.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,ze,Be,wn.width,wn.height,Oe,wn.data):U.texSubImage2D(U.TEXTURE_2D,k,ze,Be,Oe,ft,wn),U.pixelStorei(U.UNPACK_ROW_LENGTH,zt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Bt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Yn),U.pixelStorei(U.UNPACK_SKIP_ROWS,mt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie),k===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(N,V,X=null,q=null,k=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,N=arguments[2],V=arguments[3],k=arguments[4]||0);let de,Se,we,Ce,ze,Be,Oe,ft,zt;const Bt=N.isCompressedTexture?N.mipmaps[k]:N.image;X!==null?(de=X.max.x-X.min.x,Se=X.max.y-X.min.y,we=X.max.z-X.min.z,Ce=X.min.x,ze=X.min.y,Be=X.min.z):(de=Bt.width,Se=Bt.height,we=Bt.depth,Ce=0,ze=0,Be=0),q!==null?(Oe=q.x,ft=q.y,zt=q.z):(Oe=0,ft=0,zt=0);const Yn=ye.convert(V.format),mt=ye.convert(V.type);let Ie;if(V.isData3DTexture)Xe.setTexture3D(V,0),Ie=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Xe.setTexture2DArray(V,0),Ie=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const wn=U.getParameter(U.UNPACK_ROW_LENGTH),vt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ji=U.getParameter(U.UNPACK_SKIP_PIXELS),Fa=U.getParameter(U.UNPACK_SKIP_ROWS),Ks=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Bt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Bt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be),N.isDataTexture||N.isData3DTexture?U.texSubImage3D(Ie,k,Oe,ft,zt,de,Se,we,Yn,mt,Bt.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Ie,k,Oe,ft,zt,de,Se,we,Yn,Bt.data):U.texSubImage3D(Ie,k,Oe,ft,zt,de,Se,we,Yn,mt,Bt),U.pixelStorei(U.UNPACK_ROW_LENGTH,wn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ji),U.pixelStorei(U.UNPACK_SKIP_ROWS,Fa),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ks),k===0&&V.generateMipmaps&&U.generateMipmap(Ie),De.unbindTexture()},this.initRenderTarget=function(N){Je.get(N).__webglFramebuffer===void 0&&Xe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Xe.setTextureCube(N,0):N.isData3DTexture?Xe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Xe.setTexture2DArray(N,0):Xe.setTexture2D(N,0),De.unbindTexture()},this.resetState=function(){w=0,b=0,E=null,De.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===mh?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===qc?"display-p3":"srgb"}}class sA extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Em{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ds()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _h("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ds()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ds()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new O;class Eh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new mi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rA extends Nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class oA extends mi{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Am extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class Nm extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class bm extends Tn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Sn,this.minFilter=Sn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ah extends $i{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new O,d=new O,f=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const M=[],x=m/n;let S=0;m===0&&o===0?S=.5/t:m===n&&c===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const b=w/t;h.x=-e*Math.cos(i+b*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+b*r)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),p.push(b+S,1-x),M.push(l++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const x=u[m][M+1],S=u[m][M],w=u[m+1][M],b=u[m+1][M+1];(m!==0||o>0)&&f.push(x,S,b),(m!==n-1||c<Math.PI)&&f.push(S,w,b)}this.setIndex(f),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nh extends $i{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],u=[],h=new O,d=new O,f=new O,_=new O,g=new O,p=new O,m=new O;for(let x=0;x<=n;++x){const S=x/n*r*Math.PI*2;M(S,r,o,e,f),M(S+.01,r,o,e,_),p.subVectors(_,f),m.addVectors(_,f),g.crossVectors(p,m),m.crossVectors(g,p),g.normalize(),m.normalize();for(let w=0;w<=i;++w){const b=w/i*Math.PI*2,E=-t*Math.cos(b),R=t*Math.sin(b);h.x=f.x+(E*m.x+R*g.x),h.y=f.y+(E*m.y+R*g.y),h.z=f.z+(E*m.z+R*g.z),c.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),u.push(x/n),u.push(w/i)}}for(let x=1;x<=n;x++)for(let S=1;S<=i;S++){const w=(i+1)*(x-1)+(S-1),b=(i+1)*x+(S-1),E=(i+1)*x+S,R=(i+1)*(x-1)+S;a.push(w,b,R),a.push(b,E,R)}this.setIndex(a),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(l,3)),this.setAttribute("uv",new Dn(u,2));function M(x,S,w,b,E){const R=Math.cos(x),y=Math.sin(x),T=w/S*x,L=Math.cos(T);E.x=b*(2+L)*.5*R,E.y=b*(2+L)*y*.5,E.z=b*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class aA extends Nn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Kc extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cA extends Kc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class lA extends Nn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uA extends Nn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class hA extends Nn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class dA extends Nn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fA extends Nn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wm extends Am{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Bf={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class pA{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],_=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const mA=new pA;class bh{constructor(e){this.manager=e!==void 0?e:mA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bh.DEFAULT_MATERIAL_NAME="__DEFAULT";class gA extends bh{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bf.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=da("img");function c(){u(),Bf.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Rm extends bh{constructor(e){super(e)}load(e,t,n,i){const r=new Tn,o=new gA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ca extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class _A extends Ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const jl=new wt,kf=new O,Hf=new O;class wh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mh,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(kf),Hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hf),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xA extends wh{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Rh extends Ca{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gf=new wt,Zo=new O,$l=new O;class vA extends wh{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zo),$l.copy(n.position),$l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($l),n.updateMatrixWorld(),i.makeTranslation(-Zo.x,-Zo.y,-Zo.z),Gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gf)}}class Ch extends Ca{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yA extends wh{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class MA extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new yA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cm extends Ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class SA extends Em{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Wf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);const Xf={type:"change"},Kl={type:"start"},qf={type:"end"},ac=new um,Yf=new os,TA=Math.cos(70*Yc.DEG2RAD);class EA extends _s{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dr.ROTATE,MIDDLE:Dr.DOLLY,RIGHT:Dr.PAN},this.touches={ONE:Ur.ROTATE,TWO:Ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",me),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",me),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xf),n.update(),r=i.NONE},this.update=function(){const v=new O,$=new Mr().setFromUnitVectors(e.up,new O(0,1,0)),G=$.clone().invert(),Z=new O,oe=new Mr,Le=new O,Ge=2*Math.PI;return function(qt=null){const ut=n.object.position;v.copy(ut).sub(n.target),v.applyQuaternion($),a.setFromVector3(v),n.autoRotate&&r===i.NONE&&H(T(qt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Yt=n.minAzimuthAngle,jt=n.maxAzimuthAngle;isFinite(Yt)&&isFinite(jt)&&(Yt<-Math.PI?Yt+=Ge:Yt>Math.PI&&(Yt-=Ge),jt<-Math.PI?jt+=Ge:jt>Math.PI&&(jt-=Ge),Yt<=jt?a.theta=Math.max(Yt,Math.min(jt,a.theta)):a.theta=a.theta>(Yt+jt)/2?Math.max(Yt,a.theta):Math.min(jt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Xn=!1;if(n.zoomToCursor&&b||n.object.isOrthographicCamera)a.radius=Me(a.radius);else{const qn=a.radius;a.radius=Me(a.radius*l),Xn=qn!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(G),ut.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&b){let qn=null;if(n.object.isPerspectiveCamera){const vs=v.length();qn=Me(vs*l);const js=vs-qn;n.object.position.addScaledVector(S,js),n.object.updateMatrixWorld(),Xn=!!js}else if(n.object.isOrthographicCamera){const vs=new O(w.x,w.y,0);vs.unproject(n.object);const js=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Xn=js!==n.object.zoom;const $s=new O(w.x,w.y,0);$s.unproject(n.object),n.object.position.sub($s).add(vs),n.object.updateMatrixWorld(),qn=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;qn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(qn).add(n.object.position):(ac.origin.copy(n.object.position),ac.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ac.direction))<TA?e.lookAt(n.target):(Yf.setFromNormalAndCoplanarPoint(n.object.up,n.target),ac.intersectPlane(Yf,n.target))))}else if(n.object.isOrthographicCamera){const qn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),qn!==n.object.zoom&&(n.object.updateProjectionMatrix(),Xn=!0)}return l=1,b=!1,Xn||Z.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o||Le.distanceToSquared(n.target)>o?(n.dispatchEvent(Xf),Z.copy(n.object.position),oe.copy(n.object.quaternion),Le.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Re),n.domElement.removeEventListener("pointerdown",Lt),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",A),n.domElement.getRootNode().removeEventListener("keydown",Pe,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",me),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Wf,c=new Wf;let l=1;const u=new O,h=new Ae,d=new Ae,f=new Ae,_=new Ae,g=new Ae,p=new Ae,m=new Ae,M=new Ae,x=new Ae,S=new O,w=new Ae;let b=!1;const E=[],R={};let y=!1;function T(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function L(v){const $=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*$)}function H(v){c.theta-=v}function B(v){c.phi-=v}const ne=function(){const v=new O;return function(G,Z){v.setFromMatrixColumn(Z,0),v.multiplyScalar(-G),u.add(v)}}(),ee=function(){const v=new O;return function(G,Z){n.screenSpacePanning===!0?v.setFromMatrixColumn(Z,1):(v.setFromMatrixColumn(Z,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(G),u.add(v)}}(),Y=function(){const v=new O;return function(G,Z){const oe=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;v.copy(Le).sub(n.target);let Ge=v.length();Ge*=Math.tan(n.object.fov/2*Math.PI/180),ne(2*G*Ge/oe.clientHeight,n.object.matrix),ee(2*Z*Ge/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ne(G*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),ee(Z*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ie(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ve(v,$){if(!n.zoomToCursor)return;b=!0;const G=n.domElement.getBoundingClientRect(),Z=v-G.left,oe=$-G.top,Le=G.width,Ge=G.height;w.x=Z/Le*2-1,w.y=-(oe/Ge)*2+1,S.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function Me(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function Te(v){h.set(v.clientX,v.clientY)}function He(v){ve(v.clientX,v.clientX),m.set(v.clientX,v.clientY)}function at(v){_.set(v.clientX,v.clientY)}function te(v){d.set(v.clientX,v.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const $=n.domElement;H(2*Math.PI*f.x/$.clientHeight),B(2*Math.PI*f.y/$.clientHeight),h.copy(d),n.update()}function ce(v){M.set(v.clientX,v.clientY),x.subVectors(M,m),x.y>0?ie(L(x.y)):x.y<0&&K(L(x.y)),m.copy(M),n.update()}function be(v){g.set(v.clientX,v.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),Y(p.x,p.y),_.copy(g),n.update()}function xe(v){ve(v.clientX,v.clientY),v.deltaY<0?K(L(v.deltaY)):v.deltaY>0&&ie(L(v.deltaY)),n.update()}function Ze(v){let $=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),$=!0;break}$&&(v.preventDefault(),n.update())}function We(v){if(E.length===1)h.set(v.pageX,v.pageY);else{const $=je(v),G=.5*(v.pageX+$.x),Z=.5*(v.pageY+$.y);h.set(G,Z)}}function nt(v){if(E.length===1)_.set(v.pageX,v.pageY);else{const $=je(v),G=.5*(v.pageX+$.x),Z=.5*(v.pageY+$.y);_.set(G,Z)}}function U(v){const $=je(v),G=v.pageX-$.x,Z=v.pageY-$.y,oe=Math.sqrt(G*G+Z*Z);m.set(0,oe)}function it(v){n.enableZoom&&U(v),n.enablePan&&nt(v)}function tt(v){n.enableZoom&&U(v),n.enableRotate&&We(v)}function Tt(v){if(E.length==1)d.set(v.pageX,v.pageY);else{const G=je(v),Z=.5*(v.pageX+G.x),oe=.5*(v.pageY+G.y);d.set(Z,oe)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const $=n.domElement;H(2*Math.PI*f.x/$.clientHeight),B(2*Math.PI*f.y/$.clientHeight),h.copy(d)}function De(v){if(E.length===1)g.set(v.pageX,v.pageY);else{const $=je(v),G=.5*(v.pageX+$.x),Z=.5*(v.pageY+$.y);g.set(G,Z)}p.subVectors(g,_).multiplyScalar(n.panSpeed),Y(p.x,p.y),_.copy(g)}function st(v){const $=je(v),G=v.pageX-$.x,Z=v.pageY-$.y,oe=Math.sqrt(G*G+Z*Z);M.set(0,oe),x.set(0,Math.pow(M.y/m.y,n.zoomSpeed)),ie(x.y),m.copy(M);const Le=(v.pageX+$.x)*.5,Ge=(v.pageY+$.y)*.5;ve(Le,Ge)}function Je(v){n.enableZoom&&st(v),n.enablePan&&De(v)}function Xe(v){n.enableZoom&&st(v),n.enableRotate&&Tt(v)}function Lt(v){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",A)),!ye(v)&&(et(v),v.pointerType==="touch"?qe(v):j(v)))}function P(v){n.enabled!==!1&&(v.pointerType==="touch"?ue(v):re(v))}function A(v){switch(Ve(v),E.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",A),n.dispatchEvent(qf),r=i.NONE;break;case 1:const $=E[0],G=R[$];qe({pointerId:$,pageX:G.x,pageY:G.y});break}}function j(v){let $;switch(v.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Dr.DOLLY:if(n.enableZoom===!1)return;He(v),r=i.DOLLY;break;case Dr.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;at(v),r=i.PAN}else{if(n.enableRotate===!1)return;Te(v),r=i.ROTATE}break;case Dr.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;Te(v),r=i.ROTATE}else{if(n.enablePan===!1)return;at(v),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Kl)}function re(v){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;te(v);break;case i.DOLLY:if(n.enableZoom===!1)return;ce(v);break;case i.PAN:if(n.enablePan===!1)return;be(v);break}}function ae(v){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(v.preventDefault(),n.dispatchEvent(Kl),xe(le(v)),n.dispatchEvent(qf))}function le(v){const $=v.deltaMode,G={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch($){case 1:G.deltaY*=16;break;case 2:G.deltaY*=100;break}return v.ctrlKey&&!y&&(G.deltaY*=10),G}function Pe(v){v.key==="Control"&&(y=!0,n.domElement.getRootNode().addEventListener("keyup",ge,{passive:!0,capture:!0}))}function ge(v){v.key==="Control"&&(y=!1,n.domElement.getRootNode().removeEventListener("keyup",ge,{passive:!0,capture:!0}))}function me(v){n.enabled===!1||n.enablePan===!1||Ze(v)}function qe(v){switch(Ye(v),E.length){case 1:switch(n.touches.ONE){case Ur.ROTATE:if(n.enableRotate===!1)return;We(v),r=i.TOUCH_ROTATE;break;case Ur.PAN:if(n.enablePan===!1)return;nt(v),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ur.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(v),r=i.TOUCH_DOLLY_PAN;break;case Ur.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;tt(v),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Kl)}function ue(v){switch(Ye(v),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Tt(v),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;De(v),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Je(v),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(v),n.update();break;default:r=i.NONE}}function Re(v){n.enabled!==!1&&v.preventDefault()}function et(v){E.push(v.pointerId)}function Ve(v){delete R[v.pointerId];for(let $=0;$<E.length;$++)if(E[$]==v.pointerId){E.splice($,1);return}}function ye(v){for(let $=0;$<E.length;$++)if(E[$]==v.pointerId)return!0;return!1}function Ye(v){let $=R[v.pointerId];$===void 0&&($=new Ae,R[v.pointerId]=$),$.set(v.pageX,v.pageY)}function je(v){const $=v.pointerId===E[0]?E[1]:E[0];return R[$]}n.domElement.addEventListener("contextmenu",Re),n.domElement.addEventListener("pointerdown",Lt),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",ae,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Pe,{passive:!0,capture:!0}),this.update()}}class AA extends Rh{constructor(e,t,n,i,r,o){super(e,t,n,i,r,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}const jf={VERTEX:"vertex",FRAGMENT:"fragment"},Nt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},Zc=["x","y","z","w"];function Pm(s,e=!1){let t="{";s.isNode===!0&&(t+=s.id);for(const{property:n,childNode:i}of Ac(s))t+=","+n.slice(0,-4)+":"+i.getCacheKey(e);return t+="}",t}function*Ac(s,e=!1){for(const t in s){if(t.startsWith("_")===!0)continue;const n=s[t];if(Array.isArray(n)===!0)for(let i=0;i<n.length;i++){const r=n[i];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:i,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const i in n){const r=n[i];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:i,childNode:r})}}}function Cs(s){if(s==null)return null;const e=typeof s;return s.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":s.isVector2===!0?"vec2":s.isVector3===!0?"vec3":s.isVector4===!0?"vec4":s.isMatrix3===!0?"mat3":s.isMatrix4===!0?"mat4":s.isColor===!0?"color":s instanceof ArrayBuffer?"ArrayBuffer":null}function Lm(s,...e){const t=s?s.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),s==="color"?new Fe(...e):t==="vec2"?new Ae(...e):t==="vec3"?new O(...e):t==="vec4"?new lt(...e):t==="mat3"?new $e(...e):t==="mat4"?new wt(...e):s==="bool"?e[0]||!1:s==="float"||s==="int"||s==="uint"?e[0]||0:s==="string"?e[0]||"":s==="ArrayBuffer"?Dm(e[0]):null}function Im(s){let e="";const t=new Uint8Array(s);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function Dm(s){return Uint8Array.from(atob(s),e=>e.charCodeAt(0)).buffer}const $f=new Map;let NA=0;class Ue extends _s{constructor(e=null){super(),this.nodeType=e,this.updateType=Nt.NONE,this.updateBeforeType=Nt.NONE,this.uuid=Yc.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.global=!1,this.isNode=!0,Object.defineProperty(this,"id",{value:NA++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,Nt.FRAME)}onRenderUpdate(e){return this.onUpdate(e,Nt.RENDER)}onObjectUpdate(e){return this.onUpdate(e,Nt.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return this.global}*getChildren(){for(const{childNode:e}of Ac(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=Pm(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getElementType(e){const t=this.getNodeType(e);return e.getElementType(t)}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);let n=0;for(const i of this.getChildren())t["node"+n++]=i;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const i of Object.values(n))i&&i.isNode===!0&&i.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let i=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0||e.context.tempRead===!1){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const c of Object.values(o))c&&c.isNode===!0&&c.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);i=c.snippet,i===void 0&&(i=this.generate(e)||"",c.snippet=i),i=e.format(i,a,t)}else i=this.generate(e,t)||"";return e.removeChain(this),i}getSerializeChildren(){return Ac(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:i,index:r,childNode:o}of t)r!==void 0?(n[i]===void 0&&(n[i]=Number.isInteger(r)?[]:{}),n[i][r]=o.toJSON(e.meta).uuid):n[i]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const i=[];for(const r of e.inputNodes[n])i.push(t[r]);this[n]=i}else if(typeof e.inputNodes[n]=="object"){const i={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];i[r]=t[o]}this[n]=i}else{const i=e.inputNodes[n];this[n]=t[i]}}}toJSON(e){const{uuid:t,type:n}=this,i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},i!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(i){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function se(s,e){if(typeof e!="function"||!s)throw new Error(`Node class ${s} is not a class`);if($f.has(s)){console.warn(`Redefinition of node class ${s}`);return}$f.set(s,e),e.type=s}class St extends Ue{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const i=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(e.context.tempRead!==!1&&r.propertyName!==void 0)return e.format(r.propertyName,i,t);if(e.context.tempWrite!==!1&&i!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,i),a=e.getVarFromNode(this,null,i),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),r.snippet=o,r.propertyName=c,e.format(r.propertyName,i,t)}}return super.build(e,t)}}se("TempNode",St);class Vo extends Ue{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}se("ArrayElementNode",Vo);class Ph extends Ue{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const i of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(i))&&(n=i);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,i=this.getNodeType(e),r=n.build(e,i);return e.format(r,i,t)}}se("ConvertNode",Ph);class Um extends St{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),i=this.nodes,r=e.getComponentType(n),o=[];for(const c of i){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),o.push(l)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}se("JoinNode",Um);const bA=Zc.join("");class Iu extends Ue{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(Zc.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,i=e.getTypeLength(n.getNodeType(e));let r=null;if(i>1){let o=null;this.getVectorLength()>=i&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,o);this.components.length===i&&this.components===bA.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}se("SplitNode",Iu);class Om extends St{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:i}=this,r=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=i.build(e,o),c=t.build(e,r),l=e.getTypeLength(r),u=[];for(let h=0;h<l;h++){const d=Zc[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(r)}( ${u.join(", ")} )`}}se("SetNode",Om);class Jc extends Ue{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?Cs(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=Cs(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=Im(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?Lm(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}se("InputNode",Jc);class Ki extends Jc{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}se("ConstNode",Ki);let Ro=null;const to=new Map;function z(s,e){if(to.has(s)){console.warn(`Redefinition of node element ${s}`);return}if(typeof e!="function")throw new Error(`Node element ${s} is not a function`);to.set(s,e)}const Kf=s=>s.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Fm={setup(s,e){const t=e.shift();return s(tl(t),...e)},get(s,e,t){if(typeof e=="string"&&s[e]===void 0){if(s.isStackNode!==!0&&e==="assign")return(...n)=>(Ro.assign(t,...n),t);if(to.has(e)){const n=to.get(e);return s.isStackNode?(...i)=>t.add(n(...i)):(...i)=>n(t,...i)}else{if(e==="self")return s;if(e.endsWith("Assign")&&to.has(e.slice(0,e.length-6))){const n=to.get(e.slice(0,e.length-6));return s.isStackNode?(...i)=>t.assign(i[0],n(...i)):(...i)=>t.assign(n(t,...i))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=Kf(e),pe(new Iu(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Kf(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>pe(new Om(s,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),pe(new Iu(s,e));if(/^\d+$/.test(e)===!0)return pe(new Vo(t,new Ki(Number(e),"uint")))}}}return Reflect.get(s,e,t)},set(s,e,t,n){return typeof e=="string"&&s[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(s,e,t,n)}},Zl=new WeakMap,Zf=new WeakMap,wA=function(s,e=null){const t=Cs(s);if(t==="node"){let n=Zl.get(s);return n===void 0&&(n=new Proxy(s,Fm),Zl.set(s,n),Zl.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return pe(Du(s,e));if(t==="shader")return J(s)}return s},RA=function(s,e=null){for(const t in s)s[t]=pe(s[t],e);return s},CA=function(s,e=null){const t=s.length;for(let n=0;n<t;n++)s[n]=pe(s[n],e);return s},PA=function(s,e=null,t=null,n=null){const i=r=>pe(n!==null?Object.assign(r,n):r);return e===null?(...r)=>i(new s(...uo(r))):t!==null?(t=pe(t),(...r)=>i(new s(e,...uo(r),t))):(...r)=>i(new s(e,...uo(r)))},LA=function(s,...e){return pe(new s(...uo(e)))};class IA extends Ue{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode===null&&(t.outputNode=this.setupOutput(e)),t.outputNode.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=Zf.get(e.constructor);o===void 0&&(o=new WeakMap,Zf.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=pe(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),pe(a.call(n))}const i=t.jsFunc,r=n!==null?i(n,e.stack,e):i(e.stack,e);return pe(r)}setup(e){const{outputNode:t}=e.getNodeProperties(this);return t||this.setupOutput(e)}setupOutput(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class DA extends Ue{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return tl(e),pe(new IA(this,e))}setup(){return this.call()}}const UA=[!1,!0],OA=[0,1,2,3],FA=[-1,-2],Vm=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Lh=new Map;for(const s of UA)Lh.set(s,new Ki(s));const Ih=new Map;for(const s of OA)Ih.set(s,new Ki(s,"uint"));const Dh=new Map([...Ih].map(s=>new Ki(s.value,"int")));for(const s of FA)Dh.set(s,new Ki(s,"int"));const Qc=new Map([...Dh].map(s=>new Ki(s.value)));for(const s of Vm)Qc.set(s,new Ki(s));for(const s of Vm)Qc.set(-s,new Ki(-s));const el={bool:Lh,uint:Ih,ints:Dh,float:Qc},Jf=new Map([...Lh,...Qc]),Du=(s,e)=>Jf.has(s)?Jf.get(s):s.isNode===!0?s:new Ki(s,e),VA=s=>{try{return s.getNodeType()}catch{return}},xt=function(s,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(s)&&t.every(i=>typeof i!="object"))&&(t=[Lm(s,...t)]),t.length===1&&e!==null&&e.has(t[0]))return pe(e.get(t[0]));if(t.length===1){const i=Du(t[0],s);return VA(i)===s?pe(i):pe(new Ph(i,s))}const n=t.map(i=>Du(i));return pe(new Um(n,s))}},Qf=s=>s&&s.value,zA=s=>s!=null?s.nodeType||s.convertTo||(typeof s=="string"?s:null):null;function aa(s){return new Proxy(new DA(s),Fm)}const pe=(s,e=null)=>wA(s,e),tl=(s,e=null)=>new RA(s,e),uo=(s,e=null)=>new CA(s,e),W=(...s)=>new PA(...s),he=(...s)=>new LA(...s),J=s=>{const e=new aa(s),t=(...n)=>{let i;return tl(n),n[0]&&n[0].isNode?i=[...n]:i=n[0],e.call(i)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};se("ShaderNode",aa);z("toGlobal",s=>(s.global=!0,s));const ep=s=>{Ro=s},BA=()=>Ro,Qe=(...s)=>Ro.if(...s);function kA(s){return Ro&&Ro.add(s),s}z("append",kA);const HA=new xt("color"),C=new xt("float",el.float),I=new xt("int",el.ints),fe=new xt("uint",el.uint),Sr=new xt("bool",el.bool),Ne=new xt("vec2"),pr=new xt("ivec2"),GA=new xt("uvec2"),WA=new xt("bvec2"),D=new xt("vec3"),XA=new xt("ivec3"),Pa=new xt("uvec3"),zm=new xt("bvec3"),Ee=new xt("vec4"),qA=new xt("ivec4"),YA=new xt("uvec4"),jA=new xt("bvec4"),Uh=new xt("mat2"),$A=new xt("imat2"),KA=new xt("umat2"),ZA=new xt("bmat2"),Ci=new xt("mat3"),JA=new xt("imat3"),QA=new xt("umat3"),eN=new xt("bmat3"),ho=new xt("mat4"),tN=new xt("imat4"),nN=new xt("umat4"),iN=new xt("bmat4");z("toColor",HA);z("toFloat",C);z("toInt",I);z("toUint",fe);z("toBool",Sr);z("toVec2",Ne);z("toIvec2",pr);z("toUvec2",GA);z("toBvec2",WA);z("toVec3",D);z("toIvec3",XA);z("toUvec3",Pa);z("toBvec3",zm);z("toVec4",Ee);z("toIvec4",qA);z("toUvec4",YA);z("toBvec4",jA);z("toMat2",Uh);z("toImat2",$A);z("toUmat2",KA);z("toBmat2",ZA);z("toMat3",Ci);z("toImat3",JA);z("toUmat3",QA);z("toBmat3",eN);z("toMat4",ho);z("toImat4",tN);z("toUmat4",nN);z("toBmat4",iN);const sN=W(Vo),rN=(s,e)=>pe(new Ph(pe(s),e));z("element",sN);z("convert",rN);class Bm extends St{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return Zc.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:i}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=i.build(e,o),l=i.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(r){const d=e.getVarFromNode(this,null,o),f=e.getPropertyName(d);e.addLineFlowCode(`${f} = ${c}`);const _=n.node.context({assign:!0}).build(e);for(let g=0;g<n.components.length;g++){const p=n.components[g];e.addLineFlowCode(`${_}.${p} = ${f}[ ${g} ]`)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,o,t)}}const oN=W(Bm);se("AssignNode",Bm);z("assign",oN);class km extends Ue{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}setupVarying(e){const t=e.getNodeProperties(this);let n=t.varying;if(n===void 0){const i=this.name,r=this.getNodeType(e);t.varying=n=e.getVaryingFromNode(this,i,r),t.node=this.node}return n.needsInterpolation||(n.needsInterpolation=e.shaderStage==="fragment"),n}setup(e){this.setupVarying(e)}generate(e){const t=e.getNodeProperties(this),n=this.setupVarying(e);if(t.propertyName===void 0){const i=this.getNodeType(e),r=e.getPropertyName(n,jf.VERTEX);e.flowNodeFromShaderStage(jf.VERTEX,this.node,i,r),t.propertyName=r}return e.getPropertyName(n)}}const Jt=W(km);z("varying",Jt);se("VaryingNode",km);class Oh extends Ue{constructor(e,t=null,n=null){super(t),this.defaultNode=n,this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const i=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(i)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):Jt(this).build(e,n)}else{console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`);const{defaultNode:r}=this;return r!==null?r.build(e,n):e.generateConst(n)}}}const fn=(s,e,t)=>pe(new Oh(s,e,pe(t)));se("AttributeNode",Oh);class Hm extends Ue{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const Gm=W(Hm);z("bypass",Gm);se("BypassNode",Hm);let aN=0;class cN{constructor(){this.id=aN++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class Wm extends Ue{constructor(e,t=new cN){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),i=this.cache||e.globalCache;e.setCache(i);const r=this.node.build(e,...t);return e.setCache(n),r}}const Nc=W(Wm),lN=s=>Nc(s,null);z("cache",Nc);z("globalCache",lN);se("CacheNode",Wm);class Fh extends Ue{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}analyze(e){this.node.build(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const i=this.node.build(e,t);return e.setContext(n),i}}const fs=W(Fh),uN=(s,e)=>fs(s,{label:e});z("context",fs);z("label",uN);se("ContextNode",Fh);class Xi extends Ue{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let i;if(n===Xi.VERTEX)i=e.getVertexIndex();else if(n===Xi.INSTANCE)i=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=i:r=Jt(this).build(e,t),r}}Xi.VERTEX="vertex";Xi.INSTANCE="instance";const hN=he(Xi,Xi.VERTEX),Xm=he(Xi,Xi.INSTANCE);se("IndexNode",Xi);class nl{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class qm extends Ue{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,i=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(i),o=t.build(e,i.type);return e.addLineFlowCode(`${r} = ${o}`),r}}const bc=W(qm);z("temp",bc);z("toVar",(...s)=>bc(...s).append());se("VarNode",qm);class dt extends Ue{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const Dt=(s,e)=>pe(new dt(s,e)),Di=(s,e)=>pe(new dt(s,e,!0)),At=he(dt,"vec4","DiffuseColor"),Ps=he(dt,"float","Roughness"),wc=he(dt,"float","Metalness"),Uu=he(dt,"float","Clearcoat"),Rc=he(dt,"float","ClearcoatRoughness"),no=he(dt,"vec3","Sheen"),Vh=he(dt,"float","SheenRoughness"),zh=he(dt,"float","Iridescence"),Ym=he(dt,"float","IridescenceIOR"),jm=he(dt,"float","IridescenceThickness"),Ou=he(dt,"float","AlphaT"),cr=he(dt,"float","Anisotropy"),fc=he(dt,"vec3","AnisotropyT"),fo=he(dt,"vec3","AnisotropyB"),Ti=he(dt,"color","SpecularColor"),Cc=he(dt,"float","SpecularF90"),Fu=he(dt,"float","Shininess"),dN=he(dt,"vec4","Output"),po=he(dt,"float","dashSize"),Pc=he(dt,"float","gapSize");he(dt,"float","pointWidth");const pc=he(dt,"float","IOR"),Vu=he(dt,"float","Transmission"),$m=he(dt,"float","Thickness"),Km=he(dt,"float","AttenuationDistance"),Zm=he(dt,"color","AttenuationColor"),Jm=he(dt,"float","Dispersion");se("PropertyNode",dt);class fN extends dt{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}se("ParameterNode",fN);class Bh extends Ue{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const i of t)i.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}W(Bh);se("CodeNode",Bh);class pN extends Bh{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),i=n.name,r=n.type,o=e.getCodeFromNode(this,r);i!==""&&(o.name=i);const a=e.getPropertyName(o);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),f=l[h].build(e,"property");c=c.replace(d,f)}return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}se("FunctionNode",pN);class kh extends Ue{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const mN=s=>new kh(s),Qm=s=>new kh(s,!0);Qm("frame");Qm("render");const gN=mN("object");se("UniformGroupNode",kh);class wr extends Jc{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=gN}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(i=>{const r=e(i,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),i=this.getUniformHash(e);let r=e.getNodeFromHash(i);r===void 0&&(e.setHashNode(this,i),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const ct=(s,e)=>{const t=zA(e||s),n=s&&s.isNode===!0?s.node&&s.node.value||s.value:s;return pe(new wr(n,t))};se("UniformNode",wr);const Zi=s=>fn("uv"+(s>0?s:""),"vec2");class eg extends Ue{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),i=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${i} )`,this.getNodeType(e),t)}}const Hh=W(eg);z("textureSize",Hh);se("TextureSizeNode",eg);class Pt extends St{constructor(e,t,n,...i){if(super(),this.op=e,i.length>0){let r=n;for(let o=0;o<i.length;o++)r=new Pt(e,r,i[o]);n=r}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,i=this.aNode,r=this.bNode,o=i.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,i=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=i.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=i.build(e,a),u=typeof r<"u"?r.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const ri=W(Pt,"+"),Xt=W(Pt,"-"),rt=W(Pt,"*"),Hs=W(Pt,"/"),_N=W(Pt,"%"),xN=W(Pt,"=="),vN=W(Pt,"!="),yN=W(Pt,"<"),tg=W(Pt,">"),MN=W(Pt,"<="),SN=W(Pt,">="),TN=W(Pt,"&&"),EN=W(Pt,"||"),AN=W(Pt,"!"),NN=W(Pt,"^^"),bN=W(Pt,"&"),wN=W(Pt,"~"),RN=W(Pt,"|"),CN=W(Pt,"^"),PN=W(Pt,"<<"),LN=W(Pt,">>");z("add",ri);z("sub",Xt);z("mul",rt);z("div",Hs);z("remainder",_N);z("equal",xN);z("notEqual",vN);z("lessThan",yN);z("greaterThan",tg);z("lessThanEqual",MN);z("greaterThanEqual",SN);z("and",TN);z("or",EN);z("not",AN);z("xor",NN);z("bitAnd",bN);z("bitNot",wN);z("bitOr",RN);z("bitXor",CN);z("shiftLeft",PN);z("shiftRight",LN);se("OperatorNode",Pt);class F extends St{constructor(e,t,n=null,i=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=i}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,i=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(i)?0:e.getTypeLength(i);return r>o&&r>a?t:o>a?n:a>r?i:t}getNodeType(e){const t=this.method;return t===F.LENGTH||t===F.DISTANCE||t===F.DOT?"float":t===F.CROSS?"vec3":t===F.ALL?"bool":t===F.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===F.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,i=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===F.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=Ee(D(h),0):u=Ee(D(u),0);const d=rt(u,h).xyz;return fa(d).build(e,t)}else{if(n===F.NEGATE)return e.format("( - "+o.build(e,r)+" )",i,t);if(n===F.ONE_MINUS)return Xt(1,o).build(e,t);if(n===F.RECIPROCAL)return Hs(1,o).build(e,t);if(n===F.DIFFERENCE)return Zt(Xt(o,a)).build(e,t);{const u=[];return n===F.CROSS||n===F.MOD?u.push(o.build(e,i),a.build(e,i)):n===F.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l&&(n===F.MIN||n===F.MAX)||n===F.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===F.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===F.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,i)}( ${u.join(", ")} )`,i,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}F.ALL="all";F.ANY="any";F.EQUALS="equals";F.RADIANS="radians";F.DEGREES="degrees";F.EXP="exp";F.EXP2="exp2";F.LOG="log";F.LOG2="log2";F.SQRT="sqrt";F.INVERSE_SQRT="inversesqrt";F.FLOOR="floor";F.CEIL="ceil";F.NORMALIZE="normalize";F.FRACT="fract";F.SIN="sin";F.COS="cos";F.TAN="tan";F.ASIN="asin";F.ACOS="acos";F.ATAN="atan";F.ABS="abs";F.SIGN="sign";F.LENGTH="length";F.NEGATE="negate";F.ONE_MINUS="oneMinus";F.DFDX="dFdx";F.DFDY="dFdy";F.ROUND="round";F.RECIPROCAL="reciprocal";F.TRUNC="trunc";F.FWIDTH="fwidth";F.BITCAST="bitcast";F.ATAN2="atan2";F.MIN="min";F.MAX="max";F.MOD="mod";F.STEP="step";F.REFLECT="reflect";F.DISTANCE="distance";F.DIFFERENCE="difference";F.DOT="dot";F.CROSS="cross";F.POW="pow";F.TRANSFORM_DIRECTION="transformDirection";F.MIX="mix";F.CLAMP="clamp";F.REFRACT="refract";F.SMOOTHSTEP="smoothstep";F.FACEFORWARD="faceforward";const ng=C(1e-6);C(1e6);const tp=C(Math.PI);C(Math.PI*2);const ig=W(F,F.ALL),IN=W(F,F.ANY),DN=W(F,F.EQUALS),UN=W(F,F.RADIANS),ON=W(F,F.DEGREES),sg=W(F,F.EXP),zu=W(F,F.EXP2),rg=W(F,F.LOG),il=W(F,F.LOG2),Rr=W(F,F.SQRT),FN=W(F,F.INVERSE_SQRT),zo=W(F,F.FLOOR),og=W(F,F.CEIL),fa=W(F,F.NORMALIZE),sl=W(F,F.FRACT),as=W(F,F.SIN),bs=W(F,F.COS),VN=W(F,F.TAN),zN=W(F,F.ASIN),BN=W(F,F.ACOS),kN=W(F,F.ATAN),Zt=W(F,F.ABS),Gh=W(F,F.SIGN),mo=W(F,F.LENGTH),HN=W(F,F.NEGATE),GN=W(F,F.ONE_MINUS),WN=W(F,F.DFDX),XN=W(F,F.DFDY),qN=W(F,F.ROUND),YN=W(F,F.RECIPROCAL),ag=W(F,F.TRUNC),jN=W(F,F.FWIDTH);W(F,F.BITCAST);const $N=W(F,F.ATAN2),Ni=W(F,F.MIN),pn=W(F,F.MAX),KN=W(F,F.MOD),ZN=W(F,F.STEP),JN=W(F,F.REFLECT),QN=W(F,F.DISTANCE),eb=W(F,F.DIFFERENCE),Bo=W(F,F.DOT),cg=W(F,F.CROSS),Hi=W(F,F.POW),lg=W(F,F.POW,2),tb=W(F,F.POW,3),nb=W(F,F.POW,4),ib=W(F,F.TRANSFORM_DIRECTION),sb=s=>rt(Gh(s),Hi(Zt(s),1/3)),rb=s=>Bo(s,s),sn=W(F,F.MIX),Co=(s,e=0,t=1)=>pe(new F(F.CLAMP,pe(s),pe(e),pe(t))),ob=s=>Co(s),ug=W(F,F.REFRACT),qi=W(F,F.SMOOTHSTEP),ab=W(F,F.FACEFORWARD),cb=(s,e,t)=>sn(e,t,s),lb=(s,e,t)=>qi(e,t,s);z("all",ig);z("any",IN);z("equals",DN);z("radians",UN);z("degrees",ON);z("exp",sg);z("exp2",zu);z("log",rg);z("log2",il);z("sqrt",Rr);z("inverseSqrt",FN);z("floor",zo);z("ceil",og);z("normalize",fa);z("fract",sl);z("sin",as);z("cos",bs);z("tan",VN);z("asin",zN);z("acos",BN);z("atan",kN);z("abs",Zt);z("sign",Gh);z("length",mo);z("lengthSq",rb);z("negate",HN);z("oneMinus",GN);z("dFdx",WN);z("dFdy",XN);z("round",qN);z("reciprocal",YN);z("trunc",ag);z("fwidth",jN);z("atan2",$N);z("min",Ni);z("max",pn);z("mod",KN);z("step",ZN);z("reflect",JN);z("distance",QN);z("dot",Bo);z("cross",cg);z("pow",Hi);z("pow2",lg);z("pow3",tb);z("pow4",nb);z("transformDirection",ib);z("mix",cb);z("clamp",Co);z("refract",ug);z("smoothstep",lb);z("faceForward",ab);z("difference",eb);z("saturate",ob);z("cbrt",sb);se("MathNode",F);const ub=J(s=>{const{value:e}=s,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),i=t.mul(.0773993808),r=t.lessThanEqual(.04045),o=sn(n,i,r);return Ee(o,e.a)}),hb=J(s=>{const{value:e}=s,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),i=t.mul(12.92),r=t.lessThanEqual(.0031308),o=sn(n,i,r);return Ee(o,e.a)}),np=s=>{let e=null;return s===Ii?e="Linear":s===Si&&(e="sRGB"),e},hg=(s,e)=>np(s)+"To"+np(e);class Gn extends St{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===Gn.LINEAR_TO_LINEAR?t:db[e]({value:t})}}Gn.LINEAR_TO_LINEAR="LinearToLinear";Gn.LINEAR_TO_sRGB="LinearTosRGB";Gn.sRGB_TO_LINEAR="sRGBToLinear";const db={[Gn.LINEAR_TO_sRGB]:hb,[Gn.sRGB_TO_LINEAR]:ub},fb=(s,e)=>pe(new Gn(hg(Ii,e),pe(s))),dg=(s,e)=>pe(new Gn(hg(e,Ii),pe(s))),pb=W(Gn,Gn.LINEAR_TO_sRGB),mb=W(Gn,Gn.sRGB_TO_LINEAR);z("linearTosRGB",pb);z("sRGBToLinear",mb);z("linearToColorSpace",fb);z("colorSpaceToLinear",dg);se("ColorSpaceNode",Gn);class fg extends Ue{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),i=this.snippet;if(n==="void")e.addLineFlowCode(i);else return e.format(`( ${i} )`,n,t)}}const rl=W(fg);se("ExpressionNode",fg);class pg extends wr{constructor(e){super(0),this.textureNode=e,this.updateType=Nt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:i,height:r}=n;this.value=Math.log2(Math.max(i,r))}}}const gb=W(pg);se("MaxMipLevelNode",pg);class Cr extends wr{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=Nt.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return Zi(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return ct(t.matrix).mul(D(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?Nt.FRAME:Nt.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let i=this.levelNode;i===null&&e.context.getTextureLevel&&(i=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=i,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,i,r,o,a){const c=this.value;let l;return i?l=e.generateTextureLevel(c,t,n,i,r):a?l=e.generateTextureGrad(c,t,n,a,r):o?l=e.generateTextureCompare(c,t,n,o,r):this.sampler===!1?l=e.generateTextureLoad(c,t,n,r):l=e.generateTexture(c,t,n,r),l}generate(e,t){const n=e.getNodeProperties(this),i=this.value;if(!i||i.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:f,gradNode:_}=n,g=this.generateUV(e,u),p=h?h.build(e,"float"):null,m=f?f.build(e,"int"):null,M=d?d.build(e,"float"):null,x=_?[_[0].build(e,"vec2"),_[1].build(e,"vec2")]:null,S=e.getVarFromNode(this);a=e.getPropertyName(S);const w=this.generateSnippet(e,r,g,p,m,M,x);e.addLineFlowCode(`${a} = ${w}`),e.context.tempWrite!==!1&&(o.snippet=w,o.propertyName=a)}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(i)&&(c=dg(rl(c,l),i.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,pe(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(gb(t)),t.referenceNode=this,pe(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return Hh(this,e)}compare(e){const t=this.clone();return t.compareNode=pe(e),t.referenceNode=this,pe(t)}grad(e,t){const n=this.clone();return n.gradNode=[pe(e),pe(t)],n.referenceNode=this,pe(n)}depth(e){const t=this.clone();return t.depthNode=pe(e),t.referenceNode=this,pe(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const ii=W(Cr),dr=(...s)=>ii(...s).setSampler(!1);z("texture",ii);se("TextureNode",Cr);class ol extends wr{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getElementType(e){return this.getNodeType(e)}getInputType(){return"buffer"}}const Wh=(s,e,t)=>pe(new ol(s,e,t));se("BufferNode",ol);class _b extends Vo{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class mg extends ol{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=Nt.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),i=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const o=r*4;t[o]=e[r]}else if(i==="color")for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.r,t[o+1]=a.g,t[o+2]=a.b||0}else for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z||0,t[o+3]=a.w||0}}setup(e){const t=this.array.length;return this._elementType=this.elementType===null?Cs(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType),this.value=new Float32Array(t*4),this.bufferCount=t,super.setup(e)}element(e){return pe(new _b(this,pe(e)))}}const Bu=(s,e)=>pe(new mg(s,e));se("UniformsNode",mg);class xb extends Vo{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),i=this.getNodeType();return e.format(t,n,i)}}class ko extends Ue{constructor(e,t,n=null,i=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=i,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=Nt.OBJECT}element(e){return pe(new xb(this,pe(e)))}setNodeType(e){let t=null;this.count!==null?t=Wh(null,e,this.count):Array.isArray(this.getValueFromReference())?t=Bu(null,e):e==="texture"?t=ii(null):t=ct(null,e),this.node=t}getNodeType(e){return this.node===null&&this.updateValue(),this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let i=1;i<t.length;i++)n=n[t[i]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const Pi=(s,e,t)=>pe(new ko(s,e,t)),vb=(s,e,t,n)=>pe(new ko(s,e,n,t));se("ReferenceNode",ko);class gg extends ko{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const hs=(s,e,t)=>pe(new gg(s,e,t));se("MaterialReferenceNode",gg);const Jl=ct("float").onRenderUpdate(({camera:s})=>s.near),Ql=ct("float").onRenderUpdate(({camera:s})=>s.far),yb=ct("float").onRenderUpdate(({camera:s})=>2/(Math.log(s.far+1)/Math.LN2)),Fi=ct("mat4").onRenderUpdate(({camera:s})=>s.projectionMatrix),Ho=ct("mat4").onRenderUpdate(({camera:s})=>s.matrixWorldInverse),_g=ct(new O).onRenderUpdate(({camera:s},e)=>e.value.setFromMatrixPosition(s.matrixWorld));class ke extends Ue{constructor(e=ke.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=Nt.OBJECT,this._uniformNode=new wr(null)}getNodeType(){const e=this.scope;if(e===ke.WORLD_MATRIX||e===ke.VIEW_MATRIX)return"mat4";if(e===ke.NORMAL_MATRIX)return"mat3";if(e===ke.POSITION||e===ke.VIEW_POSITION||e===ke.DIRECTION||e===ke.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,i=this.scope;if(i===ke.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(i===ke.NORMAL_MATRIX)n.value=t.normalMatrix;else if(i===ke.WORLD_MATRIX)n.value=t.matrixWorld;else if(i===ke.POSITION)n.value=n.value||new O,n.value.setFromMatrixPosition(t.matrixWorld);else if(i===ke.SCALE)n.value=n.value||new O,n.value.setFromMatrixScale(t.matrixWorld);else if(i===ke.DIRECTION)n.value=n.value||new O,t.getWorldDirection(n.value);else if(i===ke.VIEW_POSITION){const r=e.camera;n.value=n.value||new O,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===ke.WORLD_MATRIX||t===ke.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===ke.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===ke.POSITION||t===ke.VIEW_POSITION||t===ke.DIRECTION||t===ke.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}ke.VIEW_MATRIX="viewMatrix";ke.NORMAL_MATRIX="normalMatrix";ke.WORLD_MATRIX="worldMatrix";ke.POSITION="position";ke.SCALE="scale";ke.VIEW_POSITION="viewPosition";ke.DIRECTION="direction";W(ke,ke.DIRECTION);W(ke,ke.VIEW_MATRIX);W(ke,ke.NORMAL_MATRIX);W(ke,ke.WORLD_MATRIX);const ku=W(ke,ke.POSITION);W(ke,ke.SCALE);const xg=W(ke,ke.VIEW_POSITION);se("Object3DNode",ke);class xn extends ke{constructor(e=xn.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}he(xn,xn.DIRECTION);const Tr=he(xn,xn.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),vg=he(xn,xn.NORMAL_MATRIX),pa=he(xn,xn.WORLD_MATRIX);he(xn,xn.POSITION);he(xn,xn.SCALE);he(xn,xn.VIEW_POSITION);const Mb=ct(new wt).onObjectUpdate(({object:s},e)=>e.value.copy(s.matrixWorld).invert());se("ModelNode",xn);const Lc=fn("normal","vec3",D(0,1,0)),Li=Lc.toVar("normalLocal"),Gs=Jt(vg.mul(Li),"v_normalView").normalize().toVar("normalView"),Sb=Jt(Gs.transformDirection(Ho),"v_normalWorld").normalize().toVar("transformedNormalWorld"),Wt=Dt("vec3","transformedNormalView"),yg=Wt.transformDirection(Ho).normalize().toVar("transformedNormalWorld"),io=Dt("vec3","transformedClearcoatNormalView"),ip=new Map;class Q extends Ue{constructor(e){super(),this.scope=e}getCache(e,t){let n=ip.get(e);return n===void 0&&(n=hs(e,t),ip.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let i=null;if(n===Q.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?i=r.mul(this.getTexture("map")):i=r}else if(n===Q.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?i=r.mul(this.getTexture("alpha")):i=r}else if(n===Q.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?i=this.getTexture("specular").r:i=C(1);else if(n===Q.SPECULAR_INTENSITY){const r=this.getFloat(n);t.specularMap?i=r.mul(this.getTexture(n).a):i=r}else if(n===Q.SPECULAR_COLOR){const r=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?i=r.mul(this.getTexture(n).rgb):i=r}else if(n===Q.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).g):i=r}else if(n===Q.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?i=r.mul(this.getTexture(n).b):i=r}else if(n===Q.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?i=r.mul(this.getTexture(n)):i=r}else if(n===Q.NORMAL)t.normalMap?i=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?i=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):i=Gs;else if(n===Q.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===Q.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===Q.CLEARCOAT_NORMAL)t.clearcoatNormalMap?i=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):i=Gs;else if(n===Q.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?i=r.mul(this.getTexture("sheenColor").rgb):i=r}else if(n===Q.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).a):i=r,i=i.clamp(.07,1)}else if(n===Q.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const r=this.getTexture(n);i=Uh(Jo.x,Jo.y,Jo.y.negate(),Jo.x).mul(r.rg.mul(2).sub(Ne(1)).normalize().mul(r.b))}else i=Jo;else if(n===Q.IRIDESCENCE_THICKNESS){const r=Pi("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=Pi("0","float",t.iridescenceThicknessRange);i=r.sub(o).mul(this.getTexture(n).g).add(o)}else i=r}else if(n===Q.TRANSMISSION){const r=this.getFloat(n);t.transmissionMap?i=r.mul(this.getTexture(n).r):i=r}else if(n===Q.THICKNESS){const r=this.getFloat(n);t.thicknessMap?i=r.mul(this.getTexture(n).g):i=r}else if(n===Q.IOR)i=this.getFloat(n);else{const r=this.getNodeType(e);i=this.getCache(n,r)}return i}}Q.ALPHA_TEST="alphaTest";Q.COLOR="color";Q.OPACITY="opacity";Q.SHININESS="shininess";Q.SPECULAR="specular";Q.SPECULAR_STRENGTH="specularStrength";Q.SPECULAR_INTENSITY="specularIntensity";Q.SPECULAR_COLOR="specularColor";Q.REFLECTIVITY="reflectivity";Q.ROUGHNESS="roughness";Q.METALNESS="metalness";Q.NORMAL="normal";Q.CLEARCOAT="clearcoat";Q.CLEARCOAT_ROUGHNESS="clearcoatRoughness";Q.CLEARCOAT_NORMAL="clearcoatNormal";Q.EMISSIVE="emissive";Q.ROTATION="rotation";Q.SHEEN="sheen";Q.SHEEN_ROUGHNESS="sheenRoughness";Q.ANISOTROPY="anisotropy";Q.IRIDESCENCE="iridescence";Q.IRIDESCENCE_IOR="iridescenceIOR";Q.IRIDESCENCE_THICKNESS="iridescenceThickness";Q.IOR="ior";Q.TRANSMISSION="transmission";Q.THICKNESS="thickness";Q.ATTENUATION_DISTANCE="attenuationDistance";Q.ATTENUATION_COLOR="attenuationColor";Q.LINE_SCALE="scale";Q.LINE_DASH_SIZE="dashSize";Q.LINE_GAP_SIZE="gapSize";Q.LINE_WIDTH="linewidth";Q.LINE_DASH_OFFSET="dashOffset";Q.POINT_WIDTH="pointWidth";Q.DISPERSION="dispersion";const Tb=he(Q,Q.ALPHA_TEST),ma=he(Q,Q.COLOR),Eb=he(Q,Q.SHININESS),Ab=he(Q,Q.EMISSIVE),Mg=he(Q,Q.OPACITY),Nb=he(Q,Q.SPECULAR),sp=he(Q,Q.SPECULAR_INTENSITY),bb=he(Q,Q.SPECULAR_COLOR),wb=he(Q,Q.SPECULAR_STRENGTH);he(Q,Q.REFLECTIVITY);const Rb=he(Q,Q.ROUGHNESS),Cb=he(Q,Q.METALNESS),Pb=he(Q,Q.NORMAL),Lb=he(Q,Q.CLEARCOAT),Ib=he(Q,Q.CLEARCOAT_ROUGHNESS),Db=he(Q,Q.CLEARCOAT_NORMAL),Ub=he(Q,Q.ROTATION),Ob=he(Q,Q.SHEEN),Fb=he(Q,Q.SHEEN_ROUGHNESS),Vb=he(Q,Q.ANISOTROPY),zb=he(Q,Q.IRIDESCENCE),Bb=he(Q,Q.IRIDESCENCE_IOR),kb=he(Q,Q.IRIDESCENCE_THICKNESS),Hb=he(Q,Q.TRANSMISSION),Gb=he(Q,Q.THICKNESS),Wb=he(Q,Q.IOR),Xb=he(Q,Q.ATTENUATION_DISTANCE),qb=he(Q,Q.ATTENUATION_COLOR),Hu=he(Q,Q.LINE_SCALE),Sg=he(Q,Q.LINE_DASH_SIZE),Tg=he(Q,Q.LINE_GAP_SIZE),eu=he(Q,Q.LINE_WIDTH),rp=he(Q,Q.LINE_DASH_OFFSET),Yb=he(Q,Q.POINT_WIDTH),jb=he(Q,Q.DISPERSION),Jo=ct(new Ae).onReference(function(s){return s.material}).onRenderUpdate(function({material:s}){this.value.set(s.anisotropy*Math.cos(s.anisotropyRotation),s.anisotropy*Math.sin(s.anisotropyRotation))});se("MaterialNode",Q);const Pn=fn("position","vec3"),gn=Pn.toVar("positionLocal"),Gu=Jt(pa.mul(gn).xyz,"v_positionWorld"),$b=Jt(gn.transformDirection(pa),"v_positionWorldDirection").normalize().toVar("positionWorldDirection"),Qn=Jt(Tr.mul(gn).xyz,"v_positionView"),Ut=Jt(Qn.negate(),"v_positionViewDirection").normalize().toVar("positionViewDirection");class Eg extends St{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Jt(e.context.mvp);const t=this.positionNode||gn;return Fi.mul(Tr).mul(t)}}const op=W(Eg);se("ModelViewProjectionNode",Eg);class Ag extends Jc{constructor(e,t=null,n=0,i=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=i,this.usage=Ec,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,i=e.getTypeLength(t),r=this.bufferStride||i,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new Em(n,r),c=new Eh(a,i,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),i=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=i,r=i):r=Jt(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const al=(s,e,t,n)=>pe(new Ag(s,e,t,n)),Kb=(s,e,t,n)=>al(s,e,t,n).setUsage(Pu),ap=(s,e,t,n)=>al(s,e,t,n).setInstanced(!0),cp=(s,e,t,n)=>Kb(s,e,t,n).setInstanced(!0);z("toAttribute",s=>al(s.value));se("BufferAttributeNode",Ag);class Ng extends Ue{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new SA(c.array,16,1),u=c.usage===Pu?cp:ap,h=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=ho(...h),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new oA(n.array,3),l=n.usage===Pu?cp:ap;this.instanceColorNode=D(l(c,"vec3",3,0))}const i=e.mul(gn).xyz,r=Ci(e[0].xyz,e[1].xyz,e[2].xyz),o=Li.div(D(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;gn.assign(i),Li.assign(a),this.instanceColorNode!==null&&Di("vec3","vInstanceColor").assign(this.instanceColorNode)}}const Zb=W(Ng);se("InstanceNode",Ng);const bg=J((s,e)=>(e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents(),fn("tangent","vec4")))(),Xh=bg.xyz.toVar("tangentLocal"),wg=Jt(Tr.mul(Ee(Xh,0)).xyz,"v_tangentView").normalize().toVar("tangentView");class Rg extends Ue{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(this.batchingIdNode=fn("batchId"));const t=this.batchMesh._matricesTexture,n=Hh(dr(t),0),i=C(I(this.batchingIdNode)).mul(4).toVar(),r=I(i.mod(n)),o=I(i).div(I(n)),a=ho(dr(t,pr(r,o)),dr(t,pr(r.add(1),o)),dr(t,pr(r.add(2),o)),dr(t,pr(r.add(3),o))),c=Ci(a[0].xyz,a[1].xyz,a[2].xyz);gn.assign(a.mul(gn));const l=Li.div(D(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),u=c.mul(l).xyz;Li.assign(u),e.hasGeometryAttribute("tangent")&&Xh.mulAssign(c)}}const Jb=W(Rg);se("batch",Rg);class Cg extends Ue{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=Nt.OBJECT,this.skinIndexNode=fn("skinIndex","uvec4"),this.skinWeightNode=fn("skinWeight","vec4");let n,i,r;t?(n=Pi("bindMatrix","mat4"),i=Pi("bindMatrixInverse","mat4"),r=vb("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=ct(e.bindMatrix,"mat4"),i=ct(e.bindMatrixInverse,"mat4"),r=Wh(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=i,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:i,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),h=i.mul(gn),d=ri(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),f=r.mul(d).xyz;let _=ri(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));_=r.mul(_).mul(i);const g=_.transformDirection(Li).xyz;gn.assign(f),Li.assign(g),e.hasGeometryAttribute("tangent")&&Xh.assign(g)}generate(e,t){if(t!=="void")return gn.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const Qb=s=>pe(new Cg(s,!0));se("SkinningNode",Cg);class Pg extends Ue{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let i=0,r=this.params.length-1;i<r;i++){const o=this.params[i],a=o.isNode!==!0&&o.name||this.getVarName(i),c=o.isNode!==!0&&o.type||"int";n[a]=rl(a,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},i=this.params,r=t.stackNode;for(let c=0,l=i.length-1;c<l;c++){const u=i[c];let h=null,d=null,f=null,_=null,g=null,p=null;u.isNode?(_="int",f=this.getVarName(c),h="0",d=u.build(e,_),g="<"):(_=u.type||"int",f=u.name||this.getVarName(c),h=u.start,d=u.end,g=u.condition,p=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,_)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,_)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",g=">="):d!==void 0&&h===void 0&&(h="0",g="<"),g===void 0&&(Number(h)>Number(d)?g=">=":g="<"));const m={start:h,end:d,condition:g},M=m.start,x=m.end;let S="",w="",b="";p||(_==="int"||_==="uint"?g.includes("<")?p="++":p="--":g.includes("<")?p="+= 1.":p="-= 1."),S+=e.getVar(_,f)+" = "+M,w+=f+" "+g+" "+x,b+=f+" "+p;const E=`for ( ${S}; ${w}; ${b} )`;e.addFlowCode((c===0?`
`:"")+e.tab+E+` {

`).addFlowTab()}const o=fs(r,n).build(e,"void"),a=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+o);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),a}}const yt=(...s)=>pe(new Pg(uo(s,"int"))).append(),Lg=()=>rl("break").append();z("loop",(s,...e)=>Gm(s,yt(...e)));se("LoopNode",Pg);const tu=new WeakMap,Kn=new lt,lp=J(({bufferMap:s,influence:e,stride:t,width:n,depth:i,offset:r})=>{const o=I(hN).mul(t).add(r),a=o.div(n),c=o.sub(a.mul(n));return dr(s,pr(c,a)).depth(i).mul(e)});function ew(s){const e=s.morphAttributes.position!==void 0,t=s.morphAttributes.normal!==void 0,n=s.morphAttributes.color!==void 0,i=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,r=i!==void 0?i.length:0;let o=tu.get(s);if(o===void 0||o.count!==r){let M=function(){p.dispose(),tu.delete(s),s.removeEventListener("dispose",M)};var a=M;o!==void 0&&o.texture.dispose();const c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=s.attributes.position.count*h,f=1;const _=4096;d>_&&(f=Math.ceil(d/_),d=_);const g=new Float32Array(d*f*4*r),p=new xh(g,d,f,r);p.type=us,p.needsUpdate=!0;const m=h*4;for(let x=0;x<r;x++){const S=c[x],w=l[x],b=u[x],E=d*f*4*x;for(let R=0;R<S.count;R++){const y=R*m;e===!0&&(Kn.fromBufferAttribute(S,R),g[E+y+0]=Kn.x,g[E+y+1]=Kn.y,g[E+y+2]=Kn.z,g[E+y+3]=0),t===!0&&(Kn.fromBufferAttribute(w,R),g[E+y+4]=Kn.x,g[E+y+5]=Kn.y,g[E+y+6]=Kn.z,g[E+y+7]=0),n===!0&&(Kn.fromBufferAttribute(b,R),g[E+y+8]=Kn.x,g[E+y+9]=Kn.y,g[E+y+10]=Kn.z,g[E+y+11]=b.itemSize===4?Kn.w:1)}}o={count:r,texture:p,stride:h,size:new Ae(d,f)},tu.set(s,o),s.addEventListener("dispose",M)}return o}class Ig extends Ue{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=ct(1),this.updateType=Nt.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,i=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=ew(t);n===!0&&gn.mulAssign(this.morphBaseInfluence),i===!0&&Li.mulAssign(this.morphBaseInfluence);const u=I(l.width);yt(o,({i:h})=>{const d=C(0).toVar();this.mesh.isInstancedMesh===!0&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(dr(this.mesh.morphTexture,pr(I(h).add(1),I(Xm))).r):d.assign(Pi("morphTargetInfluences","float").element(h).toVar()),n===!0&&gn.addAssign(lp({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:I(0)})),i===!0&&Li.addAssign(lp({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:I(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const tw=W(Ig);se("MorphNode",Ig);const nw=Ut.negate().reflect(Wt),iw=nw.transformDirection(Ho).toVar("reflectVector");class Dg extends Cr{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return iw}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===No||!n.isRenderTargetTexture?D(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const Ug=W(Dg);z("cubeTexture",Ug);se("CubeTextureNode",Dg);class La extends Ue{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}se("LightingNode",La);let Qo=null;class Pr extends La{constructor(e=null){super(),this.updateType=Nt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new Fe,this._defaultColorNode=ct(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){const{object:t}=e;if(t.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){Qo===null&&(Qo=e.createNodeMaterial(),Qo.fragmentNode=Ee(0,0,0,1),Qo.isShadowNodeMaterial=!0);const i=this.light.shadow,r=e.createRenderTarget(i.mapSize.width,i.mapSize.height),o=new Ra;o.minFilter=Sn,o.magFilter=Sn,o.image.width=i.mapSize.width,o.image.height=i.mapSize.height,o.compareFunction=om,r.depthTexture=o,i.camera.updateProjectionMatrix();const a=Pi("bias","float",i),c=Pi("normalBias","float",i),l=t.material.shadowPositionNode||Gu;let u=ct(i.matrix).mul(l.add(Sb.mul(c)));u=u.xyz.div(u.w);const h=u.x.greaterThanEqual(0).and(u.x.lessThanEqual(1)).and(u.y.greaterThanEqual(0)).and(u.y.lessThanEqual(1)).and(u.z.lessThanEqual(1));let d=u.z.add(a);e.renderer.coordinateSystem===No&&(d=d.mul(2).sub(1)),u=D(u.x,u.y.oneMinus(),d),n=((p,m,M)=>ii(p,m).compare(M))(o,u.xy,u.z);const _=ii(r.texture,u),g=h.mix(1,n.mix(_.a.mix(1,_),1));this.rtt=r,this.colorNode=this.colorNode.mul(g),this.shadowNode=n,this.shadowMaskNode=g,this.updateBeforeType=Nt.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:i,scene:r,camera:o}=e,a=r.overrideMaterial;r.overrideMaterial=Qo,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n),n.shadow.camera.layers.mask=o.layers.mask;const c=i.toneMapping,l=i.getRenderTarget(),u=i.getRenderObjectFunction();i.setRenderObjectFunction((h,...d)=>{h.castShadow===!0&&i.renderObject(h,...d)}),i.setRenderTarget(t),i.toneMapping=ni,i.render(r,n.shadow.camera),i.setRenderTarget(l),i.setRenderObjectFunction(u),i.toneMapping=c,r.overrideMaterial=a}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}se("AnalyticLightNode",Pr);const Ic=new WeakMap,sw=s=>s.sort((e,t)=>e.id-t.id);class rw extends Ue{constructor(e=[]){super("vec3"),this.totalDiffuseNode=D().temp("totalDiffuse"),this.totalSpecularNode=D().temp("totalSpecular"),this.outgoingLightNode=D().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}analyze(e){const t=e.getDataFromNode(this);for(const n of t.nodes)n.build(e)}setup(e){const t=e.context,n=t.lightingModel;let i=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=i;const c=e.addStack(),l=e.getDataFromNode(this);l.nodes=c.nodes,n.start(t,c,e);for(const m of r)m.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:u,backdropAlpha:h}=t,{directDiffuse:d,directSpecular:f,indirectDiffuse:_,indirectSpecular:g}=t.reflectedLight;let p=d.add(_);u!==null&&(h!==null?p=D(h.mix(p,u)):p=D(u),t.material.transparent=!0),o.assign(p),a.assign(f.add(g)),i.assign(o.add(a)),n.finish(t,c,e),i=i.bypass(e.removeStack())}return i}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=sw(e);for(const n of e){let i=this._getLightNodeById(n.id);if(i===null){const r=n.constructor,o=Ic.has(r)?Ic.get(r):Pr;i=pe(new o(n))}t.push(i)}return this.lightNodes=t,this._hash=null,this}}const ow=W(rw);function Go(s,e){if(Ic.has(s)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof s!="function")throw new Error(`Light ${s.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);Ic.set(s,e)}class Og extends La{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}se("AONode",Og);class Fg extends Fh{constructor(e,t=null,n=null,i=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=i,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=D().temp("directDiffuse"),i=D().temp("directSpecular"),r=D().temp("indirectDiffuse"),o=D().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:i,indirectDiffuse:r,indirectSpecular:o};return{radiance:D().temp("radiance"),irradiance:D().temp("irradiance"),iblIrradiance:D().temp("iblIrradiance"),ambientOcclusion:C(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const Vg=W(Fg);z("lightingContext",Vg);se("LightingContextNode",Fg);const aw=s=>s.mul(bg.w).xyz,cw=Jt(aw(Gs.cross(wg)),"v_bitangentView").normalize().toVar("bitangentView"),so=Ci(wg,cw,Gs);Ut.mul(so);const lw=(()=>{let s=fo.cross(Ut);return s=s.cross(fo).normalize(),s=sn(s,Wt,cr.mul(Ps.oneMinus()).oneMinus().pow2().pow2()).normalize(),s})();class qh extends Ue{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e,t){const n=this.getNodeType(e),i={tempWrite:!1},r=e.getDataFromNode(this);if(r.nodeProperty!==void 0)return r.nodeProperty;const{ifNode:o,elseNode:a}=this,c=t!=="void",l=c?Dt(n).build(e):"";r.nodeProperty=l;const u=fs(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=fs(o,i).build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=fs(a,i).build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const ei=W(qh);z("cond",ei);se("CondNode",qh);const up=C(1),Wu=C(-2),cc=C(.8),nu=C(-1),lc=C(.4),iu=C(2),uc=C(.305),su=C(3),hp=C(.21),uw=C(4),dp=C(4),hw=C(16),dw=J(([s])=>{const e=D(Zt(s)).toVar(),t=C(-1).toVar();return Qe(e.x.greaterThan(e.z),()=>{Qe(e.x.greaterThan(e.y),()=>{t.assign(ei(s.x.greaterThan(0),0,3))}).else(()=>{t.assign(ei(s.y.greaterThan(0),1,4))})}).else(()=>{Qe(e.z.greaterThan(e.y),()=>{t.assign(ei(s.z.greaterThan(0),2,5))}).else(()=>{t.assign(ei(s.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),fw=J(([s,e])=>{const t=Ne().toVar();return Qe(e.equal(0),()=>{t.assign(Ne(s.z,s.y).div(Zt(s.x)))}).elseif(e.equal(1),()=>{t.assign(Ne(s.x.negate(),s.z.negate()).div(Zt(s.y)))}).elseif(e.equal(2),()=>{t.assign(Ne(s.x.negate(),s.y).div(Zt(s.z)))}).elseif(e.equal(3),()=>{t.assign(Ne(s.z.negate(),s.y).div(Zt(s.x)))}).elseif(e.equal(4),()=>{t.assign(Ne(s.x.negate(),s.z).div(Zt(s.y)))}).else(()=>{t.assign(Ne(s.x,s.y).div(Zt(s.z)))}),rt(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),pw=J(([s])=>{const e=C(0).toVar();return Qe(s.greaterThanEqual(cc),()=>{e.assign(up.sub(s).mul(nu.sub(Wu)).div(up.sub(cc)).add(Wu))}).elseif(s.greaterThanEqual(lc),()=>{e.assign(cc.sub(s).mul(iu.sub(nu)).div(cc.sub(lc)).add(nu))}).elseif(s.greaterThanEqual(uc),()=>{e.assign(lc.sub(s).mul(su.sub(iu)).div(lc.sub(uc)).add(iu))}).elseif(s.greaterThanEqual(hp),()=>{e.assign(uc.sub(s).mul(uw.sub(su)).div(uc.sub(hp)).add(su))}).else(()=>{e.assign(C(-2).mul(il(rt(1.16,s))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});J(([s,e])=>{const t=s.toVar();t.assign(rt(2,t).sub(1));const n=D(t,1).toVar();return Qe(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const mw=J(([s,e,t,n,i,r])=>{const o=C(t),a=D(e),c=Co(pw(o),Wu,r),l=sl(c),u=zo(c),h=D(Xu(s,a,u,n,i,r)).toVar();return Qe(l.notEqual(0),()=>{const d=D(Xu(s,a,u.add(1),n,i,r)).toVar();h.assign(sn(h,d,l))}),h}),Xu=J(([s,e,t,n,i,r])=>{const o=C(t).toVar(),a=D(e),c=C(dw(a)).toVar(),l=C(pn(dp.sub(o),0)).toVar();o.assign(pn(o,dp));const u=C(zu(o)).toVar(),h=Ne(fw(a,c).mul(u.sub(2)).add(1)).toVar();return Qe(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(rt(3,hw))),h.y.addAssign(rt(4,zu(r).sub(u))),h.x.mulAssign(n),h.y.mulAssign(i),s.uv(h).grad(Ne(),Ne())}),ru=J(({envMap:s,mipInt:e,outputDirection:t,theta:n,axis:i,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const c=bs(n),l=t.mul(c).add(i.cross(t).mul(as(n))).add(i.mul(i.dot(t).mul(c.oneMinus())));return Xu(s,l,e,r,o,a)});J(({n:s,latitudinal:e,poleAxis:t,outputDirection:n,weights:i,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=D(ei(e,t,cg(t,n))).toVar();Qe(ig(d.equals(D(0))),()=>{d.assign(D(n.z,0,n.x.negate()))}),d.assign(fa(d));const f=D().toVar();return f.addAssign(i.element(I(0)).mul(ru({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),yt({start:I(1),end:s},({i:_})=>{Qe(_.greaterThanEqual(r),()=>{Lg()});const g=C(o.mul(C(_))).toVar();f.addAssign(i.element(_).mul(ru({theta:g.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),f.addAssign(i.element(_).mul(ru({theta:g,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),Ee(f,1)});let Dc=null;const fp=new WeakMap;function gw(s){const e=Math.log2(s)-2,t=1/s;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function _w(s){let e=fp.get(s);if((e!==void 0?e.pmremVersion:-1)!==s.pmremVersion){if(s.isCubeTexture){if(s.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=Dc.fromCubemap(s,e)}else{if(s.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=Dc.fromEquirectangular(s,e)}e.pmremVersion=s.pmremVersion,fp.set(s,e)}return e.texture}class zg extends St{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=ii(null),this._width=ct(0),this._height=ct(0),this._maxMip=ct(0),this.updateBeforeType=Nt.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=gw(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=_w(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){Dc===null&&(Dc=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===bi&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=D(t.x.negate(),t.yz));let i=this.levelNode;return i===null&&e.context.getTextureLevel&&(i=e.context.getTextureLevel(this)),mw(this._texture,t,i,this._width,this._height,this._maxMip)}}const xw=W(zg);se("PMREMNode",zg);const pp=new WeakMap;class Bg extends La{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let d=pp.get(t.value);d===void 0&&(d=xw(t.value),pp.set(t.value,d)),t=d}const{material:n}=e,r=n.envMap?Pi("envMapIntensity","float",e.material):Pi("environmentIntensity","float",e.scene),a=n.useAnisotropy===!0||n.anisotropy>0?lw:Wt,c=fs(t,mp(Ps,a)).mul(r),l=fs(t,vw(yg)).mul(Math.PI).mul(r),u=Nc(c);e.context.radiance.addAssign(u),e.context.iblIrradiance.addAssign(l);const h=e.context.lightingModel.clearcoatRadiance;if(h){const d=fs(t,mp(Rc,io)).mul(r),f=Nc(d);h.addAssign(f)}}}const mp=(s,e)=>{let t=null;return{getUV:()=>(t===null&&(t=Ut.negate().reflect(e),t=s.mul(s).mix(t,e).normalize(),t=t.transformDirection(Ho)),t),getTextureLevel:()=>s}},vw=s=>({getUV:()=>s,getTextureLevel:()=>C(1)});se("EnvironmentNode",Bg);class kg extends La{constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}se("IrradianceNode",kg);let ou,au;class ht extends Ue{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===ht.VIEWPORT?"vec4":this.scope===ht.COORDINATE?"vec3":"vec2"}getUpdateType(){let e=Nt.NONE;return(this.scope===ht.RESOLUTION||this.scope===ht.VIEWPORT)&&(e=Nt.RENDER),this.updateType=e,e}update({renderer:e}){this.scope===ht.VIEWPORT?e.getViewport(au):e.getDrawingBufferSize(ou)}setup(){const e=this.scope;let t=null;if(e===ht.RESOLUTION)t=ct(ou||(ou=new Ae));else if(e===ht.VIEWPORT)t=ct(au||(au=new lt));else{t=yw.div(qu);let n=t.x,i=t.y;/bottom/i.test(e)&&(i=i.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=Ne(n,i)}return t}generate(e){if(this.scope===ht.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(qu).outputNode.build(e);t=`${e.getType("vec3")}( ${t}.x, ${n}.y - ${t}.y, ${t}.z )`}return t}return super.generate(e)}}ht.COORDINATE="coordinate";ht.RESOLUTION="resolution";ht.VIEWPORT="viewport";ht.TOP_LEFT="topLeft";ht.BOTTOM_LEFT="bottomLeft";ht.TOP_RIGHT="topRight";ht.BOTTOM_RIGHT="bottomRight";const yw=he(ht,ht.COORDINATE),qu=he(ht,ht.RESOLUTION),go=he(ht,ht.VIEWPORT),ga=he(ht,ht.TOP_LEFT);he(ht,ht.BOTTOM_LEFT);he(ht,ht.TOP_RIGHT);he(ht,ht.BOTTOM_RIGHT);se("ViewportNode",ht);const ea=new Ae;class Ia extends Cr{constructor(e=ga,t=null,n=null){n===null&&(n=new bm,n.minFilter=Rs),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=Nt.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(ea);const n=this.value;(n.image.width!==ea.width||n.image.height!==ea.height)&&(n.image.width=ea.width,n.image.height=ea.height,n.needsUpdate=!0);const i=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=i}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const Mw=W(Ia),Hg=W(Ia,null,null,{generateMipmaps:!0});z("viewportTexture",Mw);z("viewportMipTexture",Hg);se("ViewportTextureNode",Ia);let cu=null;class Gg extends Ia{constructor(e=ga,t=null){cu===null&&(cu=new Ra),super(e,t,cu)}}const Wg=W(Gg);z("viewportDepthTexture",Wg);se("ViewportDepthTextureNode",Gg);class mn extends Ue{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===mn.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===mn.DEPTH)t=Yu(Qn.z,Jl,Ql);else if(e===mn.DEPTH_TEXTURE){const n=this.valueNode||Wg(),i=Xg(n,Jl,Ql);t=Yu(i,Jl,Ql)}else e===mn.DEPTH_PIXEL&&this.valueNode!==null&&(t=qg().assign(this.valueNode));return t}}const Yu=(s,e,t)=>s.add(e).div(e.sub(t)),Xg=(s,e,t)=>e.mul(t).div(t.sub(e).mul(s).sub(t));mn.DEPTH="depth";mn.DEPTH_TEXTURE="depthTexture";mn.DEPTH_PIXEL="depthPixel";const qg=W(mn,mn.DEPTH_PIXEL);he(mn,mn.DEPTH);W(mn,mn.DEPTH_TEXTURE);const Yg=he(mn,mn.DEPTH_PIXEL);Yg.assign=s=>qg(s);se("ViewportDepthNode",mn);class Ws extends Ue{constructor(e=Ws.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:i,globalClippingCount:r}=t,o=r+i,a=n?o-i:o;return this.scope===Ws.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,o,a):this.setupDefault(t.planes,o,a)}setupAlphaToCoverage(e,t,n){return J(()=>{const i=Bu(e),r=Dt("float","distanceToPlane"),o=Dt("float","distanceToGradient"),a=Dt("float","clipOpacity");a.assign(1);let c;if(yt(n,({i:l})=>{c=i.element(l),r.assign(Qn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),a.mulAssign(qi(o.negate(),o,r)),a.equal(0).discard()}),n<t){const l=Dt("float","unionclipOpacity");l.assign(1),yt({start:n,end:t},({i:u})=>{c=i.element(u),r.assign(Qn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),l.mulAssign(qi(o.negate(),o,r).oneMinus())}),a.mulAssign(l.oneMinus())}At.a.mulAssign(a),At.a.equal(0).discard()})()}setupDefault(e,t,n){return J(()=>{const i=Bu(e);let r;if(yt(n,({i:o})=>{r=i.element(o),Qn.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const o=Dt("bool","clipped");o.assign(!0),yt({start:n,end:t},({i:a})=>{r=i.element(a),o.assign(Qn.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}Ws.ALPHA_TO_COVERAGE="alphaToCoverage";Ws.DEFAULT="default";const Sw=()=>pe(new Ws),Tw=()=>pe(new Ws(Ws.ALPHA_TO_COVERAGE));class jg extends Ue{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===bi&&n.side===In?"false":e.getFrontFacing()}}const Ew=he(jg),Uc=C(Ew).mul(2).sub(1);se("FrontFacingNode",jg);const ju=new Map;class bn extends Nn{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Pm(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.depthWrite===!0&&this.setupDepth(e),this.fragmentNode===null){this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const i=this.setupLighting(e);n!==null&&e.stack.add(n);const r=Ee(i,At.a).max(0);t=this.setupOutput(e,r),dN.assign(t),this.outputNode!==null&&(t=this.outputNode)}else{let i=this.fragmentNode;i.isOutputStructNode!==!0&&(i=Ee(i)),t=this.setupOutput(e,i)}e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){if(e.clippingContext===null)return null;const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let i=null;return(t||n)&&(this.alphaToCoverage?i=Tw():e.stack.add(Sw())),i}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=op().w.add(1).log2().mul(yb).mul(.5)),n!==null&&Yg.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;if(e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&tw(t).append(),t.isSkinnedMesh===!0&&Qb(t).append(),this.displacementMap){const r=hs("displacementMap","texture"),o=hs("displacementScale","float"),a=hs("displacementBias","float");gn.addAssign(Li.normalize().mul(r.x.mul(o).add(a)))}t.isBatchedMesh&&Jb(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&Zb(t).append(),this.positionNode!==null&&gn.assign(this.positionNode);const i=op();return e.context.vertex=e.removeStack(),e.context.mvp=i,i}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Ee(this.colorNode):ma;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Ee(n.xyz.mul(fn("color","vec3")),n.a)),e.instanceColor&&(n=Di("vec3","vInstanceColor").mul(n)),At.assign(n);const i=this.opacityNode?C(this.opacityNode):Mg;if(At.a.assign(At.a.mul(i)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?C(this.alphaTestNode):Tb;At.a.lessThanEqual(r).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=Qn.dFdx().cross(Qn.dFdy()).normalize();Wt.assign(e.mul(Uc))}else{const e=this.normalNode?D(this.normalNode):Pb;Wt.assign(e.mul(Uc))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?Ug(this.envMap):ii(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];if(t&&n.push(new Bg(t)),e.material.lightMap&&n.push(new kg(hs("lightMap","texture"))),this.aoNode!==null||e.material.aoMap){const r=this.aoNode!==null?this.aoNode:ii(e.material.aoMap);n.push(new Og(r))}let i=this.lightsNode||e.lightsNode;return n.length>0&&(i=ow([...i.lightNodes,...n])),i}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:i,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=At.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=Vg(a,l,n,i)}else n!==null&&(c=D(i!==null?sn(c,n,i):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(D(r||Ab))),c}setupOutput(e,t){const n=e.fogNode;return n&&(t=Ee(n.mix(t.rgb,n.colorNode),t.a)),t}setDefaultValues(e){for(const n in e){const i=e[n];this[n]===void 0&&(this[n]=i,i&&i.clone&&(this[n]=i.clone()))}const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=Nn.prototype.toJSON.call(this,e),i=Ac(this);n.inputNodes={};for(const{property:o,childNode:a}of i)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.shadowPositionNode=e.shadowPositionNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=Aw(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const i in e)n[i]=e[i];return n}}function hn(s,e){if(typeof e!="function"||!s)throw new Error(`Node material ${s} is not a class`);if(ju.has(s)){console.warn(`Redefinition of node material ${s}`);return}ju.set(s,e),e.type=s}function Aw(s){const e=ju.get(s);if(e!==void 0)return new e}hn("NodeMaterial",bn);class $g extends Ue{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new aa(t);return this._currentCond=ei(e,n),this.add(this._currentCond)}elseif(e,t){const n=new aa(t),i=ei(e,n);return this._currentCond.elseNode=i,this._currentCond=i,this}else(e){return this._currentCond.elseNode=new aa(e),this}build(e,...t){const n=BA();ep(this);for(const i of this.nodes)i.build(e,"void");return ep(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}W($g);se("StackNode",$g);class Kg extends St{constructor(e=$b){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return Ne(t,n)}}W(Kg);se("EquirectUVNode",Kg);class Zg extends Ue{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}se("StructTypeNode",Zg);class Jg extends Ue{constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let i=0;i<t.length;i++)n.push(t[i].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new Zg(n)).name}generate(e,t){const n=e.getOutputStructName(),i=this.members,r=n!==""?n+".":"";for(let o=0;o<i.length;o++){const a=i[o].build(e,t);e.addLineFlowCode(`${r}m${o} = ${a}`)}return n}}W(Jg);se("OutputStructNode",Jg);class Qg extends Ue{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.toUint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).toFloat().mul(1/2**32)}}const Nw=W(Qg);z("hash",Nw);se("HashNode",Qg);const $u=(s,e)=>Hi(rt(4,s.mul(Xt(1,s))),e),bw=(s,e)=>s.lessThan(.5)?$u(s.mul(2),e).div(2):Xt(1,$u(rt(Xt(1,s),2),e).div(2)),ww=(s,e,t)=>Hi(Hs(Hi(s,e),ri(Hi(s,e),Hi(Xt(1,s),t))),1/e),Rw=(s,e)=>as(tp.mul(e.mul(s).sub(1))).div(tp.mul(e.mul(s).sub(1)));z("parabola",$u);z("gain",bw);z("pcurve",ww);z("sinc",Rw);const Vi=J(([s])=>s.fract().sub(.5).abs()),e_=J(([s])=>D(Vi(s.z.add(Vi(s.y.mul(1)))),Vi(s.z.add(Vi(s.x.mul(1)))),Vi(s.y.add(Vi(s.x.mul(1)))))),Cw=J(([s,e,t])=>{const n=D(s).toVar(),i=C(1.4).toVar(),r=C(0).toVar(),o=D(n).toVar();return yt({start:C(0),end:C(3),type:"float",condition:"<="},()=>{const a=D(e_(o.mul(2))).toVar();n.addAssign(a.add(t.mul(C(.1).mul(e)))),o.mulAssign(1.8),i.mulAssign(1.5),n.mulAssign(1.2);const c=C(Vi(n.z.add(Vi(n.x.add(Vi(n.y)))))).toVar();r.addAssign(c.div(i)),o.addAssign(.14)}),r});Vi.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});e_.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});Cw.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let lu;class t_ extends qh{constructor(e){lu=lu||rl("discard"),super(e,lu)}}const Pw=W(t_),Lw=s=>Pw(s).append();z("discard",Lw);se("DiscardNode",t_);class n_ extends Ue{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let i=null,r=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],f=l[h];d.getNodeType(e)===f.type?u++:u=0}u>r&&(i=o,r=u)}}this._candidateFnCall=n=i(...t)}return n}}const Iw=W(n_),xi=s=>(...e)=>Iw(s,...e);se("FunctionOverloadingNode",n_);class i_ extends St{constructor(){super("vec2")}setup(){const e=D(Ut.z,0,Ut.x.negate()).normalize(),t=Ut.cross(e);return Ne(e.dot(Wt),t.dot(Wt)).mul(.495).add(.5)}}const Dw=he(i_);se("MatcapUVNode",i_);class Fn extends wr{constructor(e=Fn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=Nt.FRAME}update(e){const t=this.scope,n=this.scale;t===Fn.LOCAL?this.value+=e.deltaTime*n:t===Fn.DELTA?this.value=e.deltaTime*n:t===Fn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}Fn.LOCAL="local";Fn.GLOBAL="global";Fn.DELTA="delta";Fn.FRAME="frame";const Uw=(s,e=0)=>pe(new Fn(Fn.LOCAL,s,e));he(Fn,Fn.FRAME).toUint();se("TimerNode",Fn);class Qt extends Ue{constructor(e=Qt.SINE,t=Uw()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=pe(this.timeNode);let n=null;return e===Qt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Qt.SQUARE?n=t.fract().round():e===Qt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Qt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Qt.SINE="sine";Qt.SQUARE="square";Qt.TRIANGLE="triangle";Qt.SAWTOOTH="sawtooth";W(Qt,Qt.SINE);W(Qt,Qt.SQUARE);W(Qt,Qt.TRIANGLE);W(Qt,Qt.SAWTOOTH);se("OscNode",Qt);class Yi extends St{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===Yi.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===Yi.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}Yi.DIRECTION_TO_COLOR="directionToColor";Yi.COLOR_TO_DIRECTION="colorToDirection";const s_=W(Yi,Yi.DIRECTION_TO_COLOR),Ow=W(Yi,Yi.COLOR_TO_DIRECTION);z("directionToColor",s_);z("colorToDirection",Ow);se("PackingNode",Yi);class Yh extends Ue{constructor(e,t,n,i=C(0),r=C(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=i,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:i,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(i)).add(i)}}const Fw=W(Yh,null,null,{doClamp:!1}),Vw=W(Yh);z("remap",Fw);z("remapClamp",Vw);se("RemapNode",Yh);class r_ extends St{constructor(e,t,n=Ne(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const zw=W(r_);z("rotateUV",zw);se("RotateUVNode",r_);class o_ extends St{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return Uh(r,o,o.negate(),r).mul(n)}else{const r=t,o=ho(Ee(1,0,0,0),Ee(0,bs(r.x),as(r.x).negate(),0),Ee(0,as(r.x),bs(r.x),0),Ee(0,0,0,1)),a=ho(Ee(bs(r.y),0,as(r.y),0),Ee(0,1,0,0),Ee(as(r.y).negate(),0,bs(r.y),0),Ee(0,0,0,1)),c=ho(Ee(bs(r.z),as(r.z).negate(),0,0),Ee(as(r.z),bs(r.z),0,0),Ee(0,0,1,0),Ee(0,0,0,1));return o.mul(a).mul(c).mul(Ee(n,1)).xyz}}}const Bw=W(o_);z("rotate",Bw);se("RotateNode",o_);class a_ extends Ue{constructor(e,t=Zi(),n=C(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:i,height:r}=n,o=e.mod(i.mul(r)).floor(),a=o.mod(i),c=r.sub(o.add(1).div(i).ceil()),l=n.reciprocal(),u=Ne(a,c);return t.add(u).mul(l)}}W(a_);se("SpriteSheetUVNode",a_);class c_ extends Vo{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const i=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&i!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(i!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const l_=W(c_);z("storageElement",l_);se("StorageArrayElementNode",c_);class u_ extends Ue{constructor(e,t=null,n=null,i=C(1),r=gn,o=Li){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=i,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:i,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(D(1)));const c=r.yz.mul(i),l=r.zx.mul(i),u=r.xy.mul(i),h=e.value,d=t!==null?t.value:h,f=n!==null?n.value:h,_=ii(h,c).mul(a.x),g=ii(d,l).mul(a.y),p=ii(f,u).mul(a.z);return ri(_,g,p)}}const kw=W(u_),Hw=(...s)=>kw(...s);z("triplanarTexture",Hw);se("TriplanarTexturesNode",u_);new os;new O;new O;new O;new wt;new O(0,0,-1);new lt;new O;new O;new lt;new Ae;new Bs;Ne(ga.x.oneMinus(),ga.y);class Gw extends Oh{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let i;return n===!0?i=super.generate(e):i=e.generateConst(this.nodeType,new lt(1,1,1,1)),i}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}se("VertexColorNode",Gw);class h_ extends ko{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const Ww=(s,e,t)=>pe(new h_(s,e,t));se("RendererReferenceNode",h_);const cl=1/6,d_=s=>rt(cl,rt(s,rt(s,s.negate().add(3)).sub(3)).add(1)),Ku=s=>rt(cl,rt(s,rt(s,rt(3,s).sub(6))).add(4)),f_=s=>rt(cl,rt(s,rt(s,rt(-3,s).add(3)).add(3)).add(1)),Zu=s=>rt(cl,Hi(s,3)),gp=s=>d_(s).add(Ku(s)),_p=s=>f_(s).add(Zu(s)),xp=s=>ri(-1,Ku(s).div(d_(s).add(Ku(s)))),vp=s=>ri(1,Zu(s).div(f_(s).add(Zu(s)))),yp=(s,e,t)=>{const n=s.uvNode,i=rt(n,e.zw).add(.5),r=zo(i),o=sl(i),a=gp(o.x),c=_p(o.x),l=xp(o.x),u=vp(o.x),h=xp(o.y),d=vp(o.y),f=Ne(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),_=Ne(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),g=Ne(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),p=Ne(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),m=gp(o.y).mul(ri(a.mul(s.uv(f).level(t)),c.mul(s.uv(_).level(t)))),M=_p(o.y).mul(ri(a.mul(s.uv(g).level(t)),c.mul(s.uv(p).level(t))));return m.add(M)},Xw=(s,e)=>{const t=Ne(s.size(I(e))),n=Ne(s.size(I(e.add(1)))),i=Hs(1,t),r=Hs(1,n),o=yp(s,Ee(i,t),zo(e)),a=yp(s,Ee(r,n),og(e));return sl(e).mix(o,a)};class p_ extends St{constructor(e,t=C(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return Xw(this.textureNode,this.blurNode)}}const qw=W(p_);z("bicubic",qw);se("TextureBicubicNode",p_);class m_ extends Ue{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}he(m_);se("PointUVNode",m_);class wi extends Ue{constructor(e=wi.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let i;return t===wi.BACKGROUND_BLURRINESS?i=Pi("backgroundBlurriness","float",n):t===wi.BACKGROUND_INTENSITY?i=Pi("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),i}}wi.BACKGROUND_BLURRINESS="backgroundBlurriness";wi.BACKGROUND_INTENSITY="backgroundIntensity";he(wi,wi.BACKGROUND_BLURRINESS);he(wi,wi.BACKGROUND_INTENSITY);se("SceneNode",wi);class Yw extends ol{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getInputType(){return"storageBuffer"}element(e){return l_(this,e)}setBufferObject(e){return this.bufferObject=e,this}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=al(this.value),this._varying=Jt(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}se("StorageBufferNode",Yw);const jw={WriteOnly:"write-only",ReadOnly:"read-only",ReadWrite:"read-write"};class g_ extends Cr{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStorageTextureNode=!0,this.access=jw.WriteOnly}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}setAccess(e){return this.access=e,this}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:i}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=i.build(e,"vec4"),c=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(c)}}W(g_);se("StorageTextureNode",g_);const $w=J(({texture:s,uv:e})=>{const n=D().temp();return Qe(e.x.lessThan(1e-4),()=>{n.assign(D(1,0,0))}).elseif(e.y.lessThan(1e-4),()=>{n.assign(D(0,1,0))}).elseif(e.z.lessThan(1e-4),()=>{n.assign(D(0,0,1))}).elseif(e.x.greaterThan(1-1e-4),()=>{n.assign(D(-1,0,0))}).elseif(e.y.greaterThan(1-1e-4),()=>{n.assign(D(0,-1,0))}).elseif(e.z.greaterThan(1-1e-4),()=>{n.assign(D(0,0,-1))}).else(()=>{const r=s.uv(e.add(D(-.01,0,0))).r.sub(s.uv(e.add(D(.01,0,0))).r),o=s.uv(e.add(D(0,-.01,0))).r.sub(s.uv(e.add(D(0,.01,0))).r),a=s.uv(e.add(D(0,0,-.01))).r.sub(s.uv(e.add(D(0,0,.01))).r);n.assign(D(r,o,a))}),n.normalize()});class __ extends Cr{constructor(e,t=null,n=null){super(e,t,n),this.isTexture3DNode=!0}getInputType(){return"texture3D"}getDefaultUV(){return D(.5,.5,.5)}setUpdateMatrix(){}setupUV(e,t){return t}generateUV(e,t){return t.build(e,"vec3")}normal(e){return $w({texture:this,uv:e})}}const Kw=W(__);se("Texture3DNode",__);class Zw extends ko{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}se("UserDataNode",Zw);const Jw=J(({base:s,blend:e})=>{const t=n=>e[n].lessThan(ng).cond(e[n],s[n].oneMinus().div(e[n]).oneMinus().max(0));return D(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),Qw=J(({base:s,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],s[n].div(e[n].oneMinus()).max(0));return D(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),e1=J(({base:s,blend:e})=>{const t=n=>s[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return D(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),t1=J(({base:s,blend:e})=>{const t=n=>s[n].lessThan(.5).cond(s[n].mul(e[n],2),s[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return D(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class ln extends St{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,i={base:t,blend:n};let r=null;return e===ln.BURN?r=Jw(i):e===ln.DODGE?r=Qw(i):e===ln.SCREEN?r=e1(i):e===ln.OVERLAY&&(r=t1(i)),r}}ln.BURN="burn";ln.DODGE="dodge";ln.SCREEN="screen";ln.OVERLAY="overlay";const n1=W(ln,ln.BURN),i1=W(ln,ln.DODGE),s1=W(ln,ln.OVERLAY),r1=W(ln,ln.SCREEN);z("burn",n1);z("dodge",i1);z("overlay",s1);z("screen",r1);se("BlendModeNode",ln);const o1=J(({textureNode:s,bumpScale:e})=>{const t=i=>s.cache().context({getUV:r=>i(r.uvNode||Zi()),forceUVContext:!0}),n=C(t(i=>i));return Ne(C(t(i=>i.add(i.dFdx()))).sub(n),C(t(i=>i.add(i.dFdy()))).sub(n)).mul(e)}),a1=J(s=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=s,i=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),c=o.cross(i),l=i.dot(a).mul(Uc),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class x_ extends St{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=o1({textureNode:this.textureNode,bumpScale:e});return a1({surf_pos:Qn,surf_norm:Gs,dHdxy:t})}}const c1=W(x_);z("bumpMap",c1);se("BumpMapNode",x_);const l1=J(({color:s,adjustment:e})=>e.mix(v_(s.rgb),s.rgb)),u1=J(({color:s,adjustment:e})=>{const t=ri(s.r,s.g,s.b).div(3),n=s.r.max(s.g.max(s.b)),i=n.sub(t).mul(e).mul(-3);return sn(s.rgb,n,i)}),h1=J(({color:s,adjustment:e})=>{const t=D(.57735,.57735,.57735),n=e.cos();return D(s.rgb.mul(n).add(t.cross(s.rgb).mul(e.sin()).add(t.mul(Bo(t,s.rgb).mul(n.oneMinus())))))});class Vn extends St{constructor(e,t,n=C(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,i={color:t,adjustment:n};let r=null;return e===Vn.SATURATION?r=l1(i):e===Vn.VIBRANCE?r=u1(i):e===Vn.HUE?r=h1(i):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}Vn.SATURATION="saturation";Vn.VIBRANCE="vibrance";Vn.HUE="hue";const d1=W(Vn,Vn.SATURATION),f1=W(Vn,Vn.VIBRANCE),p1=W(Vn,Vn.HUE),m1=D(.2125,.7154,.0721),v_=(s,e=m1)=>Bo(s,e),y_=(s,e)=>sn(D(0),s,v_(s).sub(e).max(0));z("saturation",d1);z("vibrance",f1);z("hue",p1);z("threshold",y_);se("ColorAdjustmentNode",Vn);const g1=J(s=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:i}=s,r=e.dFdx(),o=e.dFdy(),a=i.dFdx(),c=i.dFdy(),l=t,u=o.cross(l),h=l.cross(r),d=u.mul(a.x).add(h.mul(c.x)),f=u.mul(a.y).add(h.mul(c.y)),_=d.dot(d).max(f.dot(f)),g=Uc.mul(_.inverseSqrt());return ri(d.mul(n.x,g),f.mul(n.y,g),l.mul(n.z)).normalize()});class M_ extends St{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=ps}setup(e){const{normalMapType:t,scaleNode:n}=this;let i=this.node.mul(2).sub(1);n!==null&&(i=D(i.xy.mul(n),i.z));let r=null;return t===rm?r=vg.mul(i).normalize():t===ps&&(e.hasGeometryAttribute("tangent")===!0?r=so.mul(i).normalize():r=g1({eye_pos:Qn,surf_norm:Gs,mapN:i,uv:Zi()})),r}}const _1=W(M_);z("normalMap",_1);se("NormalMapNode",M_);class S_ extends St{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const x1=W(S_);z("posterize",x1);se("PosterizeNode",S_);const v1=J(({color:s,exposure:e})=>s.mul(e).clamp()),y1=J(({color:s,exposure:e})=>(s=s.mul(e),s.div(s.add(1)).clamp())),M1=J(({color:s,exposure:e})=>{s=s.mul(e),s=s.sub(.004).max(0);const t=s.mul(s.mul(6.2).add(.5)),n=s.mul(s.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),S1=J(({color:s})=>{const e=s.mul(s.add(.0245786)).sub(90537e-9),t=s.mul(s.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),T1=J(({color:s,exposure:e})=>{const t=Ci(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=Ci(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return s=s.mul(e).div(.6),s=t.mul(s),s=S1({color:s}),s=n.mul(s),s.clamp()}),E1=Ci(D(1.6605,-.1246,-.0182),D(-.5876,1.1329,-.1006),D(-.0728,-.0083,1.1187)),A1=Ci(D(.6274,.0691,.0164),D(.3293,.9195,.088),D(.0433,.0113,.8956)),N1=J(([s])=>{const e=D(s).toVar(),t=D(e.mul(e)).toVar(),n=D(t.mul(t)).toVar();return C(15.5).mul(n.mul(t)).sub(rt(40.14,n.mul(e))).add(rt(31.96,n).sub(rt(6.868,t.mul(e))).add(rt(.4298,t).add(rt(.1191,e).sub(.00232))))}),b1=J(({color:s,exposure:e})=>{const t=D(s).toVar(),n=Ci(D(.856627153315983,.137318972929847,.11189821299995),D(.0951212405381588,.761241990602591,.0767994186031903),D(.0482516061458583,.101439036467562,.811302368396859)),i=Ci(D(1.1271005818144368,-.1413297634984383,-.14132976349843826),D(-.11060664309660323,1.157823702216272,-.11060664309660294),D(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=C(-12.47393),o=C(4.026069);return t.mulAssign(e),t.assign(A1.mul(t)),t.assign(n.mul(t)),t.assign(pn(t,1e-10)),t.assign(il(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(Co(t,0,1)),t.assign(N1(t)),t.assign(i.mul(t)),t.assign(Hi(pn(D(0),t),D(2.2))),t.assign(E1.mul(t)),t.assign(Co(t,0,1)),t}),w1={[Yp]:v1,[jp]:y1,[$p]:M1,[Kp]:T1,[Zp]:b1};class T_ extends St{constructor(e=ni,t=C1,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===ni)return t;const i={exposure:this.exposureNode,color:t},r=w1[n];let o=null;return r?o=r(i):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const R1=(s,e,t)=>pe(new T_(s,pe(e),pe(t))),C1=Ww("toneMappingExposure","float");z("toneMapping",(s,e,t)=>R1(e,t,s));se("ToneMappingNode",T_);let uu=null;class E_ extends Ia{constructor(e=ga,t=null){uu===null&&(uu=new bm),super(e,t,uu)}updateReference(){return this}}const P1=W(E_);z("viewportSharedTexture",P1);se("ViewportSharedTextureNode",E_);const L1=new Ae;class Ju extends Cr{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class Da extends St{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const i=new Ra;i.isRenderTargetTexture=!0,i.name="PostProcessingDepth";const r=new Bs(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Na});r.texture.name="PostProcessing",r.depthTexture=i,this.renderTarget=r,this.updateBeforeType=Nt.FRAME,this._textureNode=pe(new Ju(this,r.texture)),this._depthTextureNode=pe(new Ju(this,i)),this._depthNode=null,this._viewZNode=null,this._cameraNear=ct(0),this._cameraFar=ct(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=Xg(this._depthTextureNode,e,t)}return this._viewZNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=Yu(this.getViewZNode(),e,t)}return this._depthNode}setup(){return this.scope===Da.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:i}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(L1);this.setSize(r.width,r.height);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=i.near,this._cameraFar.value=i.far,t.toneMapping=ni,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,i),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget.setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}Da.COLOR="color";Da.DEPTH="depth";const jh=(s,e)=>pe(new Ju(s,e));se("PassNode",Da);const hu=new Sh(-1,1,1,-1,0,1);class I1 extends $i{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dn(t,2))}}const D1=new I1;class ll extends di{constructor(e=null){super(D1,e),this.camera=hu}renderAsync(e){return e.renderAsync(this,hu)}render(e){e.render(this,hu)}}const Mp=new ll,Sp=new ll;class U1 extends St{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=Ne(1),this._invSize=ct(new Ae),this._passDirection=ct(new Ae),this._horizontalRT=new Bs,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new Bs,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=jh(this,this._verticalRT.texture),this.updateBeforeType=Nt.RENDER,this.resolution=new Ae(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value,r=t.getRenderTarget(),o=n.value;Mp.material=this._material,Sp.material=this._material,this.setSize(i.image.width,i.image.height);const a=i.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),Mp.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),Sp.render(t),t.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Ee();const n=t.uvNode||Zi(),i=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=J(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=Ne(this.directionNode).mul(this._passDirection),d=C(l[0]).toVar(),f=Ee(i(n).mul(d)).toVar();for(let _=1;_<c;_++){const g=C(_),p=C(l[_]),m=Ne(h.mul(u.mul(g))).toVar(),M=Ee(i(n.add(m))),x=Ee(i(n.sub(m)));f.addAssign(M.add(x).mul(p)),d.addAssign(rt(2,p))}return f.div(d)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const O1=(s,e)=>pe(new U1(pe(s),e));z("gaussianBlur",O1);const du=new Ae,Tp=new ll;class F1 extends St{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=ii(),this.damp=ct(t),this._compRT=new Bs,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new Bs,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=jh(this,this._compRT.texture),this.updateBeforeType=Nt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,r=n.value.type;this._compRT.texture.type=r,this._oldRT.texture.type=r,t.getDrawingBufferSize(du),this.setSize(du.x,du.y);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget(),l=n.value;this.textureNodeOld.value=this._oldRT.texture,t.toneMapping=ni,t.toneMappingNode=null,t.setRenderTarget(this._compRT),Tp.render(t);const u=this._oldRT;this._oldRT=this._compRT,this._compRT=u,t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c),n.value=l}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Ee();const i=t.uvNode||Zi();n.uvNode=i;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),o=J(([u,h])=>{const d=C(h).toVar(),f=Ee(u).toVar();return pn(Gh(f.sub(d)),0)}),a=J(()=>{const u=Ee(n),h=Ee(r(i));return u.mulAssign(this.damp.mul(o(u,.1))),pn(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),Tp.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const V1=(s,e)=>pe(new F1(pe(s),e));z("afterImage",V1);const Ep=new ll;class z1 extends St{constructor(e,t,n,i){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=D(.1,0,1),this.samples=i,this.resolution=new Ae(1,1),this._renderTarget=new Bs,this._renderTarget.texture.name="anamorphic",this._invSize=ct(new Ae),this._textureNode=jh(this,this._renderTarget.texture),this.updateBeforeType=Nt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value;this._renderTarget.texture.type=i.type;const r=t.getRenderTarget(),o=n.value;Ep.material=this._material,this.setSize(i.image.width,i.image.height),t.setRenderTarget(this._renderTarget),Ep.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Ee();const n=t.uvNode||Zi(),i=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=J(()=>{const c=this.samples,l=Math.floor(c/2),u=D(0).toVar();return yt({start:-l,end:l},({i:h})=>{const d=C(h).abs().div(l).oneMinus(),f=Ne(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),_=i(f),g=y_(_,this.tresholdNode).mul(d);u.addAssign(g)}),u.mul(this.colorNode)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const B1=(s,e=.9,t=3,n=32)=>pe(new z1(pe(s),pe(e),pe(t),n));z("anamorphic",B1);class A_ extends St{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,i=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const c=i[a],l=r[a];t.push(l.build(e,c.type))}else for(const a of i){const c=r[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const k1=(s,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?uo(e):tl(e[0]),pe(new A_(pe(s),e)));z("call",k1);se("FunctionCallNode",A_);class N_ extends Ue{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new _s,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:C()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=Im(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=Dm(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const mc=W(N_);z("scriptableValue",mc);se("ScriptableValueNode",N_);class b_ extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const i=t(...n);return this.set(e,i),i}}}class H1{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const fu=new b_;class w_ extends Ue{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new b_,this._output=mc(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=mc(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=mc(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const i=this.getObject()[e];if(typeof i=="function")return i(...t)}async callAsync(e,...t){const i=this.getObject()[e];if(typeof i=="function")return i.constructor.name==="AsyncFunction"?await i(...t):i(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new H1(this),i=fu.get("THREE"),r=fu.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,fu,e,t,i,r];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:C()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),i="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=i+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const G1=W(w_);z("scriptable",G1);se("ScriptableNode",w_);class ul extends Ue{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||Qn.z).negate()}setup(){return this.factorNode}}const W1=W(ul);z("fog",W1);se("FogNode",ul);class R_ extends ul{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return qi(this.nearNode,this.farNode,t)}}const X1=W(R_);z("rangeFog",X1);se("FogRangeNode",R_);class C_ extends ul{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const q1=W(C_);z("densityFog",q1);se("FogExp2Node",C_);let ir=null,sr=null;class P_ extends Ue{constructor(e=C(),t=C()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(Cs(this.minNode.value)),n=e.getTypeLength(Cs(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const i=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(Cs(i)),a=e.getTypeLength(Cs(r));ir=ir||new lt,sr=sr||new lt,ir.setScalar(0),sr.setScalar(0),o===1?ir.setScalar(i):i.isColor?ir.set(i.r,i.g,i.b):ir.set(i.x,i.y,i.z||0,i.w||0),a===1?sr.setScalar(r):r.isColor?sr.set(r.r,r.g,r.b):sr.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const f=d%c,_=ir.getComponent(f),g=sr.getComponent(f);u[d]=Yc.lerp(_,g,Math.random())}const h=this.getNodeType(e);n=Wh(u,"vec4",t.count).element(Xm).convert(h)}else n=C(0);return n}}W(P_);se("RangeNode",P_);class L_ extends Ue{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=Nt.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let i=1;i<t.length;i++)n*=t[i];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const Y1=(s,e,t)=>pe(new L_(pe(s),e,t));z("compute",Y1);se("ComputeNode",L_);class Er extends Ue{constructor(e=Er.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Er.TARGET_DIRECTION&&(n=Ho.transformDirection(ku(t).sub(ku(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Er.TARGET_DIRECTION="targetDirection";const I_=W(Er,Er.TARGET_DIRECTION);se("LightNode",Er);const D_=J(s=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=s,i=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(i.mul(e.div(t).pow4().oneMinus().clamp().pow2()),i)});class U_ extends Pr{constructor(e=null){super(e),this.cutoffDistanceNode=ct(0),this.decayExponentNode=ct(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:i,light:r}=this,o=e.context.lightingModel,a=xg(r).sub(Qn),c=a.normalize(),l=a.length(),u=D_({lightDistance:l,cutoffDistance:n,decayExponent:i}),h=t.mul(u),d=e.context.reflectedLight;o.direct({lightDirection:c,lightColor:h,reflectedLight:d,shadowMask:this.shadowMaskNode},e.stack,e)}}se("PointLightNode",U_);Go(Ch,U_);class O_ extends Pr{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,i=I_(this.light),r=e.context.reflectedLight;t.direct({lightDirection:i,lightColor:n,reflectedLight:r,shadowMask:this.shadowMaskNode},e.stack,e)}}se("DirectionalLightNode",O_);Go(MA,O_);class $h extends Pr{constructor(e=null){super(e),this.coneCosNode=ct(0),this.penumbraCosNode=ct(0),this.cutoffDistanceNode=ct(0),this.decayExponentNode=ct(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return qi(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:i,decayExponentNode:r,light:o}=this,a=xg(o).sub(Qn),c=a.normalize(),l=c.dot(I_(o)),u=this.getSpotAttenuation(l),h=a.length(),d=D_({lightDistance:h,cutoffDistance:i,decayExponent:r}),f=n.mul(u).mul(d),_=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:f,reflectedLight:_,shadowMask:this.shadowMaskNode},e.stack,e)}}se("SpotLightNode",$h);Go(Rh,$h);class F_ extends $h{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const i=e.acos().mul(1/Math.PI);n=ii(t,Ne(i,0),0).r}else n=super.getSpotAttenuation(e);return n}}se("IESSpotLightNode",F_);Go(AA,F_);class V_ extends Pr{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}se("AmbientLightNode",V_);Go(Cm,V_);class z_ extends Pr{constructor(e=null){super(e),this.lightPositionNode=ku(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=ct(new Fe)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:i}=this,o=Gs.dot(i).mul(.5).add(.5),a=sn(n,t,o);e.context.irradiance.addAssign(a)}}se("HemisphereLightNode",z_);Go(_A,z_);const j1=J(s=>{const e=s.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class B_ extends St{constructor(e=Zi()){super("float"),this.uvNode=e}setup(){return j1({uv:this.uvNode})}}const $1=W(B_);z("checker",$1);se("CheckerNode",B_);const K1=new Nm;class Z1 extends bn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(K1),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=J(()=>{Jt(Ne(),"vUv").assign(Zi());const n=fn("instancePosition"),i=Dt("vec4","mvPos");i.assign(Tr.mul(Ee(n,1)));const r=go.z.div(go.w),o=Fi.mul(i),a=Dt("vec2","offset");return a.assign(Pn.xy),a.assign(a.mul(Yb)),a.assign(a.div(go.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(Ee(a,0,0))),o})(),this.fragmentNode=J(()=>{const n=Jt(Ne(),"vUv"),i=Dt("float","alpha");i.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(e){const l=Dt("float","dlen");l.assign(a.fwidth()),i.assign(qi(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=fn("instanceColor").mul(ma):c=ma,Ee(c,i)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}hn("InstancedPointsNodeMaterial",Z1);const J1=new Am;class Q1 extends bn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(J1),this.setValues(e)}}hn("LineBasicNodeMaterial",Q1);const eR=new wm;class tR extends bn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(eR),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?C(this.dashScaleNode):Hu,n=this.dashSizeNode?C(this.dashSizeNode):Sg,i=this.dashSizeNode?C(this.dashGapNode):Tg;po.assign(n),Pc.assign(i);const r=Jt(fn("lineDistance").mul(t));(e?r.add(e):r).mod(po.add(Pc)).greaterThan(po).discard()}}hn("LineDashedNodeMaterial",tR);const nR=new wm;class iR extends bn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(nR),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setup(e){this.setupShaders(),super.setup(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,i=this.worldUnits,r=J(({start:a,end:c})=>{const l=Fi.element(2).element(2),d=Fi.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Ee(sn(a.xyz,c.xyz,d),c.w)});this.vertexNode=J(()=>{Di("vec2","vUv").assign(Zi());const a=fn("instanceStart"),c=fn("instanceEnd"),l=Dt("vec4","start"),u=Dt("vec4","end");l.assign(Tr.mul(Ee(a,1))),u.assign(Tr.mul(Ee(c,1))),i&&(Di("vec3","worldStart").assign(l.xyz),Di("vec3","worldEnd").assign(u.xyz));const h=go.z.div(go.w),d=Fi.element(2).element(3).equal(-1);Qe(d,()=>{Qe(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const f=Fi.mul(l),_=Fi.mul(u),g=f.xyz.div(f.w),p=_.xyz.div(_.w),m=p.xy.sub(g.xy).temp();m.x.assign(m.x.mul(h)),m.assign(m.normalize());const M=bc(Ee());if(i){const x=u.xyz.sub(l.xyz).normalize(),S=sn(l.xyz,u.xyz,.5).normalize(),w=x.cross(S).normalize(),b=x.cross(w),E=Di("vec4","worldPos");E.assign(Pn.y.lessThan(.5).cond(l,u));const R=eu.mul(.5);E.addAssign(Ee(Pn.x.lessThan(0).cond(w.mul(R),w.mul(R).negate()),0)),n||(E.addAssign(Ee(Pn.y.lessThan(.5).cond(x.mul(R).negate(),x.mul(R)),0)),E.addAssign(Ee(b.mul(R),0)),Qe(Pn.y.greaterThan(1).or(Pn.y.lessThan(0)),()=>{E.subAssign(Ee(b.mul(2).mul(R),0))})),M.assign(Fi.mul(E));const y=bc(D());y.assign(Pn.y.lessThan(.5).cond(g,p)),M.z.assign(y.z.mul(M.w))}else{const x=Dt("vec2","offset");x.assign(Ne(m.y,m.x.negate())),m.x.assign(m.x.div(h)),x.x.assign(x.x.div(h)),x.assign(Pn.x.lessThan(0).cond(x.negate(),x)),Qe(Pn.y.lessThan(0),()=>{x.assign(x.sub(m))}).elseif(Pn.y.greaterThan(1),()=>{x.assign(x.add(m))}),x.assign(x.mul(eu)),x.assign(x.div(go.w)),M.assign(Pn.y.lessThan(.5).cond(f,_)),x.assign(x.mul(M.w)),M.assign(M.add(Ee(x,0,0)))}return M})();const o=J(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),f=c.sub(a),_=h.dot(d),g=d.dot(f),p=h.dot(f),m=d.dot(d),x=f.dot(f).mul(m).sub(g.mul(g)),w=_.mul(g).sub(p.mul(m)).div(x).clamp(),b=_.add(g.mul(w)).div(m).clamp();return Ne(w,b)});this.fragmentNode=J(()=>{const a=Di("vec2","vUv");if(n){const u=this.offsetNode?C(this.offsetNodeNode):rp,h=this.dashScaleNode?C(this.dashScaleNode):Hu,d=this.dashSizeNode?C(this.dashSizeNode):Sg,f=this.dashSizeNode?C(this.dashGapNode):Tg;po.assign(d),Pc.assign(f);const _=fn("instanceDistanceStart"),g=fn("instanceDistanceEnd"),p=Pn.y.lessThan(.5).cond(h.mul(_),Hu.mul(g)),m=Jt(p.add(rp)),M=u?m.add(u):m;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),M.mod(po.add(Pc)).greaterThan(po).discard()}const c=Dt("float","alpha");if(c.assign(1),i){const u=Di("vec3","worldStart"),h=Di("vec3","worldEnd"),d=Di("vec4","worldPos").xyz.normalize().mul(1e5),f=h.sub(u),_=o({p1:u,p2:h,p3:D(0,0,0),p4:d}),g=u.add(f.mul(_.x)),p=d.mul(_.y),x=g.sub(p).length().div(eu);if(!n)if(e){const S=x.fwidth();c.assign(qi(S.negate().add(.5),S.add(.5),x).oneMinus())}else x.greaterThan(.5).discard()}else if(e){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),f=Dt("float","dlen");f.assign(d.fwidth()),Qe(a.y.abs().greaterThan(1),()=>{c.assign(qi(f.oneMinus(),f.add(1),d).oneMinus())})}else Qe(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=fn("instanceColorStart"),h=fn("instanceColorEnd");l=Pn.y.lessThan(.5).cond(u,h).mul(ma)}else l=ma;return Ee(l,c)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.needsUpdate=!0)}}hn("Line2NodeMaterial",iR);const sR=new hA;class rR extends bn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(sR),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?C(this.opacityNode):Mg;At.assign(Ee(s_(Wt),e))}}hn("MeshNormalNodeMaterial",rR);const oR=new yh;class aR extends bn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(oR),this.setValues(e)}}hn("MeshBasicNodeMaterial",aR);const _a=J(({f0:s,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return s.mul(n.oneMinus()).add(e.mul(n))}),Po=J(s=>s.diffuseColor.mul(1/Math.PI)),cR=()=>C(.25),lR=J(({dotNH:s})=>Fu.mul(C(.5)).add(1).mul(C(1/Math.PI)).mul(s.pow(Fu))),uR=J(({lightDirection:s})=>{const e=s.add(Ut).normalize(),t=Wt.dot(e).clamp(),n=Ut.dot(e).clamp(),i=_a({f0:Ti,f90:1,dotVH:n}),r=cR(),o=lR({dotNH:t});return i.mul(r).mul(o)});class k_ extends nl{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Wt.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(Po({diffuseColor:At.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(uR({lightDirection:e})).mul(wb))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(Po({diffuseColor:At})))}}const hR=new dA;class dR extends bn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(hR),this.setValues(e)}setupLightingModel(){return new k_(!1)}}hn("MeshLambertNodeMaterial",dR);const fR=new lA;class pR extends bn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(fR),this.setValues(e)}setupLightingModel(){return new k_}setupVariants(){const e=(this.shininessNode?C(this.shininessNode):Eb).max(1e-4);Fu.assign(e);const t=this.specularNode||Nb;Ti.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}hn("MeshPhongNodeMaterial",pR);const mR=J(()=>{const s=Lc.dFdx().abs().max(Lc.dFdy().abs());return s.x.max(s.y).max(s.z)}),H_=J(s=>{const{roughness:e}=s,t=mR();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),gR=J(({alpha:s,dotNL:e,dotNV:t})=>{const n=s.pow2(),i=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),r=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return Hs(.5,i.add(r).max(ng))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),_R=J(({alphaT:s,alphaB:e,dotTV:t,dotBV:n,dotTL:i,dotBL:r,dotNV:o,dotNL:a})=>{const c=a.mul(D(s.mul(t),e.mul(n),o).length()),l=o.mul(D(s.mul(i),e.mul(r),a).length());return Hs(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),xR=J(({alpha:s,dotNH:e})=>{const t=s.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),vR=C(1/Math.PI),yR=J(({alphaT:s,alphaB:e,dotNH:t,dotTH:n,dotBH:i})=>{const r=s.mul(e),o=D(e.mul(n),s.mul(i),r.mul(t)),a=o.dot(o),c=r.div(a);return vR.mul(r.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),Ap=J(s=>{const{lightDirection:e,f0:t,f90:n,roughness:i,f:r,USE_IRIDESCENCE:o,USE_ANISOTROPY:a}=s,c=s.normalView||Wt,l=i.pow2(),u=e.add(Ut).normalize(),h=c.dot(e).clamp(),d=c.dot(Ut).clamp(),f=c.dot(u).clamp(),_=Ut.dot(u).clamp();let g=_a({f0:t,f90:n,dotVH:_}),p,m;if(Qf(o)&&(g=zh.mix(g,r)),Qf(a)){const M=fc.dot(e),x=fc.dot(Ut),S=fc.dot(u),w=fo.dot(e),b=fo.dot(Ut),E=fo.dot(u);p=_R({alphaT:Ou,alphaB:l,dotTV:x,dotBV:b,dotTL:M,dotBL:w,dotNV:d,dotNL:h}),m=yR({alphaT:Ou,alphaB:l,dotNH:f,dotTH:S,dotBH:E})}else p=gR({alpha:l,dotNL:h,dotNV:d}),m=xR({alpha:l,dotNH:f});return g.mul(p).mul(m)}),G_=J(({roughness:s,dotNV:e})=>{const t=Ee(-1,-.0275,-.572,.022),n=Ee(1,.0425,1.04,-.04),i=s.mul(t).add(n),r=i.x.mul(i.x).min(e.mul(-9.28).exp2()).mul(i.x).add(i.y);return Ne(-1.04,1.04).mul(r).add(i.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),W_=J(s=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:i}=s,r=G_({dotNV:e,roughness:i});return t.mul(r.x).add(n.mul(r.y))}),MR=J(({f:s,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),i=n.mul(n),r=n.mul(i,i).clamp(0,.9999);return s.sub(D(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),SR=J(({roughness:s,dotNH:e})=>{const t=s.pow2(),n=C(1).div(t),r=e.pow2().oneMinus().max(.0078125);return C(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),TR=J(({dotNV:s,dotNL:e})=>C(1).div(C(4).mul(e.add(s).sub(e.mul(s))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),ER=J(({lightDirection:s})=>{const e=s.add(Ut).normalize(),t=Wt.dot(s).clamp(),n=Wt.dot(Ut).clamp(),i=Wt.dot(e).clamp(),r=SR({roughness:Vh,dotNH:i}),o=TR({dotNV:n,dotNL:t});return no.mul(r).mul(o)}),Np=J(([s,e,t,n,i])=>{const r=D(ug(e.negate(),fa(s),Hs(1,n))),o=D(mo(i[0].xyz),mo(i[1].xyz),mo(i[2].xyz));return fa(r).mul(t.mul(o))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),AR=J(([s,e])=>s.mul(Co(e.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),NR=Hg(),bp=J(([s,e,t])=>{const n=NR.uv(s),i=il(C(qu.x)).mul(AR(e,t));return n.bicubic(i)}),wp=J(([s,e,t])=>(Qe(t.notEqual(0),()=>{const n=rg(e).negate().div(t);return sg(n.negate().mul(s))}),D(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),bR=J(([s,e,t,n,i,r,o,a,c,l,u,h,d,f,_])=>{let g,p;if(_){g=Ee().toVar(),p=D().toVar();const w=u.sub(1).mul(_.mul(.025)),b=D(u.sub(w),u,u.add(w));yt({start:0,end:3},({i:E})=>{const R=b.element(E),y=Np(s,e,h,R,a),T=o.add(y),L=l.mul(c.mul(Ee(T,1))),H=Ne(L.xy.div(L.w)).toVar();H.addAssign(1),H.divAssign(2),H.assign(Ne(H.x,H.y.oneMinus()));const B=bp(H,t,R);g.element(E).assign(B.element(E)),g.a.addAssign(B.a),p.element(E).assign(n.element(E).mul(wp(mo(y),d,f).element(E)))}),g.a.divAssign(3)}else{const w=Np(s,e,h,u,a),b=o.add(w),E=l.mul(c.mul(Ee(b,1))),R=Ne(E.xy.div(E.w)).toVar();R.addAssign(1),R.divAssign(2),R.assign(Ne(R.x,R.y.oneMinus())),g=bp(R,t,u),p=n.mul(wp(mo(w),d,f))}const m=p.rgb.mul(g.rgb),M=s.dot(e).clamp(),x=D(W_({dotNV:M,specularColor:i,specularF90:r,roughness:t})),S=p.r.add(p.g,p.b).div(3);return Ee(x.oneMinus().mul(m),g.a.oneMinus().mul(S).oneMinus())}),wR=Ci(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),RR=s=>{const e=s.sqrt();return D(1).add(e).div(D(1).sub(e))},Rp=(s,e)=>s.sub(e).div(s.add(e)).pow2(),CR=(s,e)=>{const t=s.mul(2*Math.PI*1e-9),n=D(54856e-17,44201e-17,52481e-17),i=D(1681e3,1795300,2208400),r=D(43278e5,93046e5,66121e5),o=C(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(i.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return a=D(a.x.add(o),a.y,a.z).div(10685e-11),wR.mul(a)},PR=J(({outsideIOR:s,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:i})=>{const r=sn(s,e,qi(0,.03,n)),o=s.div(r).pow2().mul(C(1).sub(t.pow2())),c=C(1).sub(o).sqrt(),l=Rp(r,s),u=_a({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=r.lessThan(s).cond(Math.PI,0),f=C(Math.PI).sub(d),_=RR(i.clamp(0,.9999)),g=Rp(_,r.toVec3()),p=_a({f0:g,f90:1,dotVH:c}),m=D(_.x.lessThan(r).cond(Math.PI,0),_.y.lessThan(r).cond(Math.PI,0),_.z.lessThan(r).cond(Math.PI,0)),M=r.mul(n,c,2),x=D(f).add(m),S=u.mul(p).clamp(1e-5,.9999),w=S.sqrt(),b=h.pow2().mul(p).div(D(1).sub(S));let R=u.add(b),y=b.sub(h);for(let T=1;T<=2;++T){y=y.mul(w);const L=CR(C(T).mul(M),C(T).mul(x)).mul(2);R=R.add(y.mul(L))}return R.max(D(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),LR=J(({normal:s,viewDir:e,roughness:t})=>{const n=s.dot(e).saturate(),i=t.pow2(),r=ei(t.lessThan(.25),C(-339.2).mul(i).add(C(161.4).mul(t)).sub(25.9),C(-8.48).mul(i).add(C(14.3).mul(t)).sub(9.95)),o=ei(t.lessThan(.25),C(44).mul(i).sub(C(23.7).mul(t)).add(3.26),C(1.97).mul(i).sub(C(3.27).mul(t)).add(.72));return ei(t.lessThan(.25),0,C(.1).mul(t).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),pu=D(.04),mu=C(1);class Kh extends nl{constructor(e=!1,t=!1,n=!1,i=!1,r=!1,o=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.anisotropy=i,this.transmission=r,this.dispersion=o,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(e){if(this.clearcoat===!0&&(this.clearcoatRadiance=D().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=D().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=D().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=D().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=D().temp("sheenSpecularIndirect")),this.iridescence===!0){const t=Wt.dot(Ut).clamp();this.iridescenceFresnel=PR({outsideIOR:C(1),eta2:Ym,cosTheta1:t,thinFilmThickness:jm,baseF0:Ti}),this.iridescenceF0=MR({f:this.iridescenceFresnel,f90:1,dotVH:t})}if(this.transmission===!0){const t=Gu,n=_g.sub(Gu).normalize(),i=yg;e.backdrop=bR(i,n,Ps,At,Ti,Cc,t,pa,Ho,Fi,pc,$m,Zm,Km,this.dispersion?Jm:null),e.backdropAlpha=Vu,At.a.mulAssign(sn(1,e.backdrop.a,Vu))}}computeMultiscattering(e,t,n){const i=Wt.dot(Ut).clamp(),r=G_({roughness:Ps,dotNV:i}),a=(this.iridescenceF0?zh.mix(Ti,this.iridescenceF0):Ti).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=Ti.add(Ti.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Wt.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(ER({lightDirection:e}))),this.clearcoat===!0){const a=io.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(Ap({lightDirection:e,f0:pu,f90:mu,roughness:Rc,normalView:io})))}n.directDiffuse.addAssign(r.mul(Po({diffuseColor:At.rgb}))),n.directSpecular.addAssign(r.mul(Ap({lightDirection:e,f0:Ti,f90:1,roughness:Ps,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(Po({diffuseColor:At})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(no,LR({normal:Wt,viewDir:Ut,roughness:Vh}))),this.clearcoat===!0){const l=io.dot(Ut).clamp(),u=W_({dotNV:l,specularColor:pu,specularF90:mu,roughness:Rc});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const i=D().temp("singleScattering"),r=D().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(i,r,Cc);const a=i.add(r),c=At.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(i)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(c.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const i=Wt.dot(Ut).clamp().add(e),r=Ps.mul(-16).oneMinus().negate().exp2(),o=e.sub(i.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=io.dot(Ut).clamp(),i=_a({dotVH:n,f0:pu,f90:mu}),r=t.mul(Uu.mul(i).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(Uu));t.assign(r)}if(this.sheen===!0){const n=no.r.max(no.g).max(no.b).mul(.157).oneMinus(),i=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(i)}}}const IR=new Kc;class X_ extends bn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(IR),this.setValues(e)}setupLightingModel(){return new Kh}setupSpecular(){const e=sn(D(.04),At.rgb,wc);Ti.assign(e),Cc.assign(1)}setupVariants(){const e=this.metalnessNode?C(this.metalnessNode):Cb;wc.assign(e);let t=this.roughnessNode?C(this.roughnessNode):Rb;t=H_({roughness:t}),Ps.assign(t),this.setupSpecular(),At.assign(Ee(At.rgb.mul(e.oneMinus()),At.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}hn("MeshStandardNodeMaterial",X_);const DR=new cA;class q_ extends X_{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.dispersionNode=null,this.anisotropyNode=null,this.setDefaultValues(DR),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}get useDispersion(){return this.dispersion>0||this.dispersionNode!==null}setupSpecular(){const e=this.iorNode?C(this.iorNode):Wb;pc.assign(e),Ti.assign(sn(Ni(lg(pc.sub(1).div(pc.add(1))).mul(bb),D(1)).mul(sp),At.rgb,wc)),Cc.assign(sn(sp,1,wc))}setupLightingModel(){return new Kh(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission,this.useDispersion)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?C(this.clearcoatNode):Lb,n=this.clearcoatRoughnessNode?C(this.clearcoatRoughnessNode):Ib;Uu.assign(t),Rc.assign(H_({roughness:n}))}if(this.useSheen){const t=this.sheenNode?D(this.sheenNode):Ob,n=this.sheenRoughnessNode?C(this.sheenRoughnessNode):Fb;no.assign(t),Vh.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?C(this.iridescenceNode):zb,n=this.iridescenceIORNode?C(this.iridescenceIORNode):Bb,i=this.iridescenceThicknessNode?C(this.iridescenceThicknessNode):kb;zh.assign(t),Ym.assign(n),jm.assign(i)}if(this.useAnisotropy){const t=(this.anisotropyNode?Ne(this.anisotropyNode):Vb).toVar();cr.assign(t.length()),Qe(cr.equal(0),()=>{t.assign(Ne(1,0))}).else(()=>{t.divAssign(cr),cr.assign(cr.saturate())}),Ou.assign(cr.pow2().mix(Ps.pow2(),1)),fc.assign(so[0].mul(t.x).add(so[1].mul(t.y))),fo.assign(so[1].mul(t.x).sub(so[0].mul(t.y)))}if(this.useTransmission){const t=this.transmissionNode?C(this.transmissionNode):Hb,n=this.thicknessNode?C(this.thicknessNode):Gb,i=this.attenuationDistanceNode?C(this.attenuationDistanceNode):Xb,r=this.attenuationColorNode?D(this.attenuationColorNode):qb;if(Vu.assign(t),$m.assign(n),Km.assign(i),Zm.assign(r),this.useDispersion){const o=this.dispersionNode?C(this.dispersionNode):jb;Jm.assign(o)}}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?D(this.clearcoatNormalNode):Db;io.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,this.dispersionNode=e.dispersionNode,this.anisotropyNode=e.anisotropyNode,super.copy(e)}}hn("MeshPhysicalNodeMaterial",q_);class UR extends Kh{constructor(e,t,n,i){super(e,t,n),this.useSSS=i}direct({lightDirection:e,lightColor:t,reflectedLight:n},i,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=o,f=e.add(Wt.mul(c)).normalize(),_=C(Ut.dot(f.negate()).saturate().pow(h).mul(d)),g=D(_.add(l).mul(a));n.directDiffuse.addAssign(g.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},i,r)}}class OR extends q_{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=C(.1),this.thicknessAmbientNode=C(0),this.thicknessAttenuationNode=C(.1),this.thicknessPowerNode=C(2),this.thicknessScaleNode=C(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new UR(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}hn("MeshSSSNodeMaterial",OR);const FR=J(({normal:s,lightDirection:e,builder:t})=>{const n=s.dot(e),i=Ne(n.mul(.5).add(.5),0);if(t.material.gradientMap){const r=hs("gradientMap","texture").context({getUV:()=>i});return D(r.r)}else{const r=i.fwidth().mul(.5);return sn(D(.7),D(1),qi(C(.7).sub(r.x),C(.7).add(r.x),i.x))}});class VR extends nl{direct({lightDirection:e,lightColor:t,reflectedLight:n},i,r){const o=FR({normal:Lc,lightDirection:e,builder:r}).mul(t);n.directDiffuse.addAssign(o.mul(Po({diffuseColor:At.rgb})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(Po({diffuseColor:At})))}}const zR=new uA;class BR extends bn{constructor(e){super(),this.isMeshToonNodeMaterial=!0,this.lights=!0,this.setDefaultValues(zR),this.setValues(e)}setupLightingModel(){return new VR}}hn("MeshToonNodeMaterial",BR);const kR=new fA;class HR extends bn{constructor(e){super(),this.isMeshMatcapNodeMaterial=!0,this.lights=!1,this.setDefaultValues(kR),this.setValues(e)}setupVariants(e){const t=Dw;let n;e.material.matcap?n=hs("matcap","texture").context({getUV:()=>t}):n=D(sn(.2,.8,t.y)),At.rgb.mulAssign(n.rgb)}}hn("MeshMatcapNodeMaterial",HR);const GR=new Nm;class WR extends bn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(GR),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}hn("PointsNodeMaterial",WR);const XR=new rA;class qR extends bn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(XR),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:i,scaleNode:r}=this,o=gn;let a=Tr.mul(D(n||0)),c=Ne(pa[0].xyz.length(),pa[1].xyz.length());r!==null&&(c=c.mul(r));let l=o.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(ct(e.center).sub(.5))),l=l.mul(c);const u=C(i||Ub),h=l.rotate(u);a=Ee(a.xy.add(h),a.zw);const d=Fi.mul(a);return t.vertex=o,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}hn("SpriteNodeMaterial",qR);class YR extends nl{constructor(){super(),this.shadowNode=C(1).toVar("shadowMask")}direct({shadowMask:e}){this.shadowNode.mulAssign(e)}finish(e){At.a.mulAssign(this.shadowNode.oneMinus()),e.outgoingLight.rgb.assign(At.rgb)}}const jR=new aA;class $R extends bn{constructor(e){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues(jR),this.setValues(e)}setupLightingModel(){return new YR}}hn("ShadowNodeMaterial",$R);class KR extends bn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.isVolumeNodeMaterial=!0,this.testNode=null,this.setValues(e)}setup(e){const t=Kw(this.map,null,0),n=J(({orig:i,dir:r})=>{const o=D(-.5),a=D(.5),c=r.reciprocal(),l=o.sub(i).mul(c),u=a.sub(i).mul(c),h=Ni(l,u),d=pn(l,u),f=pn(h.x,pn(h.y,h.z)),_=Ni(d.x,Ni(d.y,d.z));return Ne(f,_)});this.fragmentNode=J(()=>{const i=Jt(D(Mb.mul(Ee(_g,1)))),o=Jt(Pn.sub(i)).normalize(),a=Dt("vec2","bounds").assign(n({orig:i,dir:o}));a.x.greaterThan(a.y).discard(),a.assign(Ne(pn(a.x,0),a.y));const c=Dt("vec3","p").assign(i.add(a.x.mul(o))),l=Dt("vec3","inc").assign(D(o.abs().reciprocal())),u=Dt("float","delta").assign(Ni(l.x,Ni(l.y,l.z)));u.divAssign(hs("steps","float"));const h=Dt("vec4","ac").assign(Ee(hs("base","color"),0));return yt({type:"float",start:a.x,end:a.y,update:"+= delta"},()=>{const d=Dt("float","d").assign(t.uv(c.add(.5)).r);this.testNode!==null?this.testNode({map:t,mapValue:d,probe:c,finalColor:h}).append():(h.a.assign(1),Lg()),c.addAssign(o.mul(u))}),h.a.equal(0).discard(),Ee(h)})(),super.setup(e)}}hn("VolumeNodeMaterial",KR);const _o=J(([s,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),r=Sr(s).toVar();return ei(r,i,n)}),xa=J(([s,e])=>{const t=Sr(e).toVar(),n=C(s).toVar();return ei(t,n.negate(),n)}),kt=J(([s])=>{const e=C(s).toVar();return I(zo(e))}),Rt=J(([s,e])=>{const t=C(s).toVar();return e.assign(kt(t)),t.sub(C(e))}),Y_=J(([s,e,t,n,i,r])=>{const o=C(r).toVar(),a=C(i).toVar(),c=C(n).toVar(),l=C(t).toVar(),u=C(e).toVar(),h=C(s).toVar(),d=C(Xt(1,a)).toVar();return Xt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),j_=J(([s,e,t,n,i,r])=>{const o=C(r).toVar(),a=C(i).toVar(),c=D(n).toVar(),l=D(t).toVar(),u=D(e).toVar(),h=D(s).toVar(),d=C(Xt(1,a)).toVar();return Xt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),$_=xi([Y_,j_]),K_=J(([s,e,t,n,i,r,o,a,c,l,u])=>{const h=C(u).toVar(),d=C(l).toVar(),f=C(c).toVar(),_=C(a).toVar(),g=C(o).toVar(),p=C(r).toVar(),m=C(i).toVar(),M=C(n).toVar(),x=C(t).toVar(),S=C(e).toVar(),w=C(s).toVar(),b=C(Xt(1,f)).toVar(),E=C(Xt(1,d)).toVar();return C(Xt(1,h)).toVar().mul(E.mul(w.mul(b).add(S.mul(f))).add(d.mul(x.mul(b).add(M.mul(f))))).add(h.mul(E.mul(m.mul(b).add(p.mul(f))).add(d.mul(g.mul(b).add(_.mul(f))))))}),Z_=J(([s,e,t,n,i,r,o,a,c,l,u])=>{const h=C(u).toVar(),d=C(l).toVar(),f=C(c).toVar(),_=D(a).toVar(),g=D(o).toVar(),p=D(r).toVar(),m=D(i).toVar(),M=D(n).toVar(),x=D(t).toVar(),S=D(e).toVar(),w=D(s).toVar(),b=C(Xt(1,f)).toVar(),E=C(Xt(1,d)).toVar();return C(Xt(1,h)).toVar().mul(E.mul(w.mul(b).add(S.mul(f))).add(d.mul(x.mul(b).add(M.mul(f))))).add(h.mul(E.mul(m.mul(b).add(p.mul(f))).add(d.mul(g.mul(b).add(_.mul(f))))))}),J_=xi([K_,Z_]),Q_=J(([s,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),r=fe(s).toVar(),o=fe(r.bitAnd(fe(7))).toVar(),a=C(_o(o.lessThan(fe(4)),i,n)).toVar(),c=C(rt(2,_o(o.lessThan(fe(4)),n,i))).toVar();return xa(a,Sr(o.bitAnd(fe(1)))).add(xa(c,Sr(o.bitAnd(fe(2)))))}),e0=J(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=C(e).toVar(),a=fe(s).toVar(),c=fe(a.bitAnd(fe(15))).toVar(),l=C(_o(c.lessThan(fe(8)),o,r)).toVar(),u=C(_o(c.lessThan(fe(4)),r,_o(c.equal(fe(12)).or(c.equal(fe(14))),o,i))).toVar();return xa(l,Sr(c.bitAnd(fe(1)))).add(xa(u,Sr(c.bitAnd(fe(2)))))}),an=xi([Q_,e0]),t0=J(([s,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),r=Pa(s).toVar();return D(an(r.x,i,n),an(r.y,i,n),an(r.z,i,n))}),n0=J(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=C(e).toVar(),a=Pa(s).toVar();return D(an(a.x,o,r,i),an(a.y,o,r,i),an(a.z,o,r,i))}),ui=xi([t0,n0]),i0=J(([s])=>{const e=C(s).toVar();return rt(.6616,e)}),s0=J(([s])=>{const e=C(s).toVar();return rt(.982,e)}),r0=J(([s])=>{const e=D(s).toVar();return rt(.6616,e)}),o0=xi([i0,r0]),a0=J(([s])=>{const e=D(s).toVar();return rt(.982,e)}),c0=xi([s0,a0]),Un=J(([s,e])=>{const t=I(e).toVar(),n=fe(s).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(I(32).sub(t)))}),l0=J(([s,e,t])=>{s.subAssign(t),s.bitXorAssign(Un(t,I(4))),t.addAssign(e),e.subAssign(s),e.bitXorAssign(Un(s,I(6))),s.addAssign(t),t.subAssign(e),t.bitXorAssign(Un(e,I(8))),e.addAssign(s),s.subAssign(t),s.bitXorAssign(Un(t,I(16))),t.addAssign(e),e.subAssign(s),e.bitXorAssign(Un(s,I(19))),s.addAssign(t),t.subAssign(e),t.bitXorAssign(Un(e,I(4))),e.addAssign(s)}),Wo=J(([s,e,t])=>{const n=fe(t).toVar(),i=fe(e).toVar(),r=fe(s).toVar();return n.bitXorAssign(i),n.subAssign(Un(i,I(14))),r.bitXorAssign(n),r.subAssign(Un(n,I(11))),i.bitXorAssign(r),i.subAssign(Un(r,I(25))),n.bitXorAssign(i),n.subAssign(Un(i,I(16))),r.bitXorAssign(n),r.subAssign(Un(n,I(4))),i.bitXorAssign(r),i.subAssign(Un(r,I(14))),n.bitXorAssign(i),n.subAssign(Un(i,I(24))),n}),_n=J(([s])=>{const e=fe(s).toVar();return C(e).div(C(fe(I(4294967295))))}),Ri=J(([s])=>{const e=C(s).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),u0=J(([s])=>{const e=I(s).toVar(),t=fe(fe(1)).toVar(),n=fe(fe(I(3735928559)).add(t.shiftLeft(fe(2)).add(fe(13)))).toVar();return Wo(n.add(fe(e)),n,n)}),h0=J(([s,e])=>{const t=I(e).toVar(),n=I(s).toVar(),i=fe(fe(2)).toVar(),r=fe().toVar(),o=fe().toVar(),a=fe().toVar();return r.assign(o.assign(a.assign(fe(I(3735928559)).add(i.shiftLeft(fe(2)).add(fe(13)))))),r.addAssign(fe(n)),o.addAssign(fe(t)),Wo(r,o,a)}),d0=J(([s,e,t])=>{const n=I(t).toVar(),i=I(e).toVar(),r=I(s).toVar(),o=fe(fe(3)).toVar(),a=fe().toVar(),c=fe().toVar(),l=fe().toVar();return a.assign(c.assign(l.assign(fe(I(3735928559)).add(o.shiftLeft(fe(2)).add(fe(13)))))),a.addAssign(fe(r)),c.addAssign(fe(i)),l.addAssign(fe(n)),Wo(a,c,l)}),f0=J(([s,e,t,n])=>{const i=I(n).toVar(),r=I(t).toVar(),o=I(e).toVar(),a=I(s).toVar(),c=fe(fe(4)).toVar(),l=fe().toVar(),u=fe().toVar(),h=fe().toVar();return l.assign(u.assign(h.assign(fe(I(3735928559)).add(c.shiftLeft(fe(2)).add(fe(13)))))),l.addAssign(fe(a)),u.addAssign(fe(o)),h.addAssign(fe(r)),l0(l,u,h),l.addAssign(fe(i)),Wo(l,u,h)}),p0=J(([s,e,t,n,i])=>{const r=I(i).toVar(),o=I(n).toVar(),a=I(t).toVar(),c=I(e).toVar(),l=I(s).toVar(),u=fe(fe(5)).toVar(),h=fe().toVar(),d=fe().toVar(),f=fe().toVar();return h.assign(d.assign(f.assign(fe(I(3735928559)).add(u.shiftLeft(fe(2)).add(fe(13)))))),h.addAssign(fe(l)),d.addAssign(fe(c)),f.addAssign(fe(a)),l0(h,d,f),h.addAssign(fe(o)),d.addAssign(fe(r)),Wo(h,d,f)}),pt=xi([u0,h0,d0,f0,p0]),m0=J(([s,e])=>{const t=I(e).toVar(),n=I(s).toVar(),i=fe(pt(n,t)).toVar(),r=Pa().toVar();return r.x.assign(i.bitAnd(I(255))),r.y.assign(i.shiftRight(I(8)).bitAnd(I(255))),r.z.assign(i.shiftRight(I(16)).bitAnd(I(255))),r}),g0=J(([s,e,t])=>{const n=I(t).toVar(),i=I(e).toVar(),r=I(s).toVar(),o=fe(pt(r,i,n)).toVar(),a=Pa().toVar();return a.x.assign(o.bitAnd(I(255))),a.y.assign(o.shiftRight(I(8)).bitAnd(I(255))),a.z.assign(o.shiftRight(I(16)).bitAnd(I(255))),a}),hi=xi([m0,g0]),_0=J(([s])=>{const e=Ne(s).toVar(),t=I().toVar(),n=I().toVar(),i=C(Rt(e.x,t)).toVar(),r=C(Rt(e.y,n)).toVar(),o=C(Ri(i)).toVar(),a=C(Ri(r)).toVar(),c=C($_(an(pt(t,n),i,r),an(pt(t.add(I(1)),n),i.sub(1),r),an(pt(t,n.add(I(1))),i,r.sub(1)),an(pt(t.add(I(1)),n.add(I(1))),i.sub(1),r.sub(1)),o,a)).toVar();return o0(c)}),x0=J(([s])=>{const e=D(s).toVar(),t=I().toVar(),n=I().toVar(),i=I().toVar(),r=C(Rt(e.x,t)).toVar(),o=C(Rt(e.y,n)).toVar(),a=C(Rt(e.z,i)).toVar(),c=C(Ri(r)).toVar(),l=C(Ri(o)).toVar(),u=C(Ri(a)).toVar(),h=C(J_(an(pt(t,n,i),r,o,a),an(pt(t.add(I(1)),n,i),r.sub(1),o,a),an(pt(t,n.add(I(1)),i),r,o.sub(1),a),an(pt(t.add(I(1)),n.add(I(1)),i),r.sub(1),o.sub(1),a),an(pt(t,n,i.add(I(1))),r,o,a.sub(1)),an(pt(t.add(I(1)),n,i.add(I(1))),r.sub(1),o,a.sub(1)),an(pt(t,n.add(I(1)),i.add(I(1))),r,o.sub(1),a.sub(1)),an(pt(t.add(I(1)),n.add(I(1)),i.add(I(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return c0(h)}),ZR=xi([_0,x0]),v0=J(([s])=>{const e=Ne(s).toVar(),t=I().toVar(),n=I().toVar(),i=C(Rt(e.x,t)).toVar(),r=C(Rt(e.y,n)).toVar(),o=C(Ri(i)).toVar(),a=C(Ri(r)).toVar(),c=D($_(ui(hi(t,n),i,r),ui(hi(t.add(I(1)),n),i.sub(1),r),ui(hi(t,n.add(I(1))),i,r.sub(1)),ui(hi(t.add(I(1)),n.add(I(1))),i.sub(1),r.sub(1)),o,a)).toVar();return o0(c)}),y0=J(([s])=>{const e=D(s).toVar(),t=I().toVar(),n=I().toVar(),i=I().toVar(),r=C(Rt(e.x,t)).toVar(),o=C(Rt(e.y,n)).toVar(),a=C(Rt(e.z,i)).toVar(),c=C(Ri(r)).toVar(),l=C(Ri(o)).toVar(),u=C(Ri(a)).toVar(),h=D(J_(ui(hi(t,n,i),r,o,a),ui(hi(t.add(I(1)),n,i),r.sub(1),o,a),ui(hi(t,n.add(I(1)),i),r,o.sub(1),a),ui(hi(t.add(I(1)),n.add(I(1)),i),r.sub(1),o.sub(1),a),ui(hi(t,n,i.add(I(1))),r,o,a.sub(1)),ui(hi(t.add(I(1)),n,i.add(I(1))),r.sub(1),o,a.sub(1)),ui(hi(t,n.add(I(1)),i.add(I(1))),r,o.sub(1),a.sub(1)),ui(hi(t.add(I(1)),n.add(I(1)),i.add(I(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return c0(h)}),JR=xi([v0,y0]),QR=J(([s])=>{const e=C(s).toVar(),t=I(kt(e)).toVar();return _n(pt(t))}),eC=J(([s])=>{const e=Ne(s).toVar(),t=I(kt(e.x)).toVar(),n=I(kt(e.y)).toVar();return _n(pt(t,n))}),tC=J(([s])=>{const e=D(s).toVar(),t=I(kt(e.x)).toVar(),n=I(kt(e.y)).toVar(),i=I(kt(e.z)).toVar();return _n(pt(t,n,i))}),nC=J(([s])=>{const e=Ee(s).toVar(),t=I(kt(e.x)).toVar(),n=I(kt(e.y)).toVar(),i=I(kt(e.z)).toVar(),r=I(kt(e.w)).toVar();return _n(pt(t,n,i,r))}),M0=J(([s])=>{const e=C(s).toVar(),t=I(kt(e)).toVar();return D(_n(pt(t,I(0))),_n(pt(t,I(1))),_n(pt(t,I(2))))}),S0=J(([s])=>{const e=Ne(s).toVar(),t=I(kt(e.x)).toVar(),n=I(kt(e.y)).toVar();return D(_n(pt(t,n,I(0))),_n(pt(t,n,I(1))),_n(pt(t,n,I(2))))}),T0=J(([s])=>{const e=D(s).toVar(),t=I(kt(e.x)).toVar(),n=I(kt(e.y)).toVar(),i=I(kt(e.z)).toVar();return D(_n(pt(t,n,i,I(0))),_n(pt(t,n,i,I(1))),_n(pt(t,n,i,I(2))))}),E0=J(([s])=>{const e=Ee(s).toVar(),t=I(kt(e.x)).toVar(),n=I(kt(e.y)).toVar(),i=I(kt(e.z)).toVar(),r=I(kt(e.w)).toVar();return D(_n(pt(t,n,i,r,I(0))),_n(pt(t,n,i,r,I(1))),_n(pt(t,n,i,r,I(2))))}),A0=xi([M0,S0,T0,E0]),Oc=J(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=I(e).toVar(),a=D(s).toVar(),c=C(0).toVar(),l=C(1).toVar();return yt({start:I(0),end:o},({i:u})=>{c.addAssign(l.mul(ZR(a))),l.mulAssign(i),a.mulAssign(r)}),c}),N0=J(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=I(e).toVar(),a=D(s).toVar(),c=D(0).toVar(),l=C(1).toVar();return yt({start:I(0),end:o},({i:u})=>{c.addAssign(l.mul(JR(a))),l.mulAssign(i),a.mulAssign(r)}),c}),iC=J(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=I(e).toVar(),a=D(s).toVar();return Ne(Oc(a,o,r,i),Oc(a.add(D(I(19),I(193),I(17))),o,r,i))}),sC=J(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=I(e).toVar(),a=D(s).toVar(),c=D(N0(a,o,r,i)).toVar(),l=C(Oc(a.add(D(I(19),I(193),I(17))),o,r,i)).toVar();return Ee(c,l)}),b0=J(([s,e,t,n,i,r,o])=>{const a=I(o).toVar(),c=C(r).toVar(),l=I(i).toVar(),u=I(n).toVar(),h=I(t).toVar(),d=I(e).toVar(),f=Ne(s).toVar(),_=D(A0(Ne(d.add(u),h.add(l)))).toVar(),g=Ne(_.x,_.y).toVar();g.subAssign(.5),g.mulAssign(c),g.addAssign(.5);const p=Ne(Ne(C(d),C(h)).add(g)).toVar(),m=Ne(p.sub(f)).toVar();return Qe(a.equal(I(2)),()=>Zt(m.x).add(Zt(m.y))),Qe(a.equal(I(3)),()=>pn(Zt(m.x),Zt(m.y))),Bo(m,m)}),w0=J(([s,e,t,n,i,r,o,a,c])=>{const l=I(c).toVar(),u=C(a).toVar(),h=I(o).toVar(),d=I(r).toVar(),f=I(i).toVar(),_=I(n).toVar(),g=I(t).toVar(),p=I(e).toVar(),m=D(s).toVar(),M=D(A0(D(p.add(f),g.add(d),_.add(h)))).toVar();M.subAssign(.5),M.mulAssign(u),M.addAssign(.5);const x=D(D(C(p),C(g),C(_)).add(M)).toVar(),S=D(x.sub(m)).toVar();return Qe(l.equal(I(2)),()=>Zt(S.x).add(Zt(S.y).add(Zt(S.z)))),Qe(l.equal(I(3)),()=>pn(pn(Zt(S.x),Zt(S.y)),Zt(S.z))),Bo(S,S)}),Xo=xi([b0,w0]),rC=J(([s,e,t])=>{const n=I(t).toVar(),i=C(e).toVar(),r=Ne(s).toVar(),o=I().toVar(),a=I().toVar(),c=Ne(Rt(r.x,o),Rt(r.y,a)).toVar(),l=C(1e6).toVar();return yt({start:-1,end:I(1),name:"x",condition:"<="},({x:u})=>{yt({start:-1,end:I(1),name:"y",condition:"<="},({y:h})=>{const d=C(Xo(c,u,h,o,a,i,n)).toVar();l.assign(Ni(l,d))})}),Qe(n.equal(I(0)),()=>{l.assign(Rr(l))}),l}),oC=J(([s,e,t])=>{const n=I(t).toVar(),i=C(e).toVar(),r=Ne(s).toVar(),o=I().toVar(),a=I().toVar(),c=Ne(Rt(r.x,o),Rt(r.y,a)).toVar(),l=Ne(1e6,1e6).toVar();return yt({start:-1,end:I(1),name:"x",condition:"<="},({x:u})=>{yt({start:-1,end:I(1),name:"y",condition:"<="},({y:h})=>{const d=C(Xo(c,u,h,o,a,i,n)).toVar();Qe(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),Qe(n.equal(I(0)),()=>{l.assign(Rr(l))}),l}),aC=J(([s,e,t])=>{const n=I(t).toVar(),i=C(e).toVar(),r=Ne(s).toVar(),o=I().toVar(),a=I().toVar(),c=Ne(Rt(r.x,o),Rt(r.y,a)).toVar(),l=D(1e6,1e6,1e6).toVar();return yt({start:-1,end:I(1),name:"x",condition:"<="},({x:u})=>{yt({start:-1,end:I(1),name:"y",condition:"<="},({y:h})=>{const d=C(Xo(c,u,h,o,a,i,n)).toVar();Qe(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),Qe(n.equal(I(0)),()=>{l.assign(Rr(l))}),l}),cC=J(([s,e,t])=>{const n=I(t).toVar(),i=C(e).toVar(),r=D(s).toVar(),o=I().toVar(),a=I().toVar(),c=I().toVar(),l=D(Rt(r.x,o),Rt(r.y,a),Rt(r.z,c)).toVar(),u=C(1e6).toVar();return yt({start:-1,end:I(1),name:"x",condition:"<="},({x:h})=>{yt({start:-1,end:I(1),name:"y",condition:"<="},({y:d})=>{yt({start:-1,end:I(1),name:"z",condition:"<="},({z:f})=>{const _=C(Xo(l,h,d,f,o,a,c,i,n)).toVar();u.assign(Ni(u,_))})})}),Qe(n.equal(I(0)),()=>{u.assign(Rr(u))}),u}),lC=J(([s,e,t])=>{const n=I(t).toVar(),i=C(e).toVar(),r=D(s).toVar(),o=I().toVar(),a=I().toVar(),c=I().toVar(),l=D(Rt(r.x,o),Rt(r.y,a),Rt(r.z,c)).toVar(),u=Ne(1e6,1e6).toVar();return yt({start:-1,end:I(1),name:"x",condition:"<="},({x:h})=>{yt({start:-1,end:I(1),name:"y",condition:"<="},({y:d})=>{yt({start:-1,end:I(1),name:"z",condition:"<="},({z:f})=>{const _=C(Xo(l,h,d,f,o,a,c,i,n)).toVar();Qe(_.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(_)}).elseif(_.lessThan(u.y),()=>{u.y.assign(_)})})})}),Qe(n.equal(I(0)),()=>{u.assign(Rr(u))}),u}),uC=J(([s,e,t])=>{const n=I(t).toVar(),i=C(e).toVar(),r=D(s).toVar(),o=I().toVar(),a=I().toVar(),c=I().toVar(),l=D(Rt(r.x,o),Rt(r.y,a),Rt(r.z,c)).toVar(),u=D(1e6,1e6,1e6).toVar();return yt({start:-1,end:I(1),name:"x",condition:"<="},({x:h})=>{yt({start:-1,end:I(1),name:"y",condition:"<="},({y:d})=>{yt({start:-1,end:I(1),name:"z",condition:"<="},({z:f})=>{const _=C(Xo(l,h,d,f,o,a,c,i,n)).toVar();Qe(_.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(_)}).elseif(_.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(_)}).elseif(_.lessThan(u.z),()=>{u.z.assign(_)})})})}),Qe(n.equal(I(0)),()=>{u.assign(Rr(u))}),u});_o.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});xa.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});kt.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});Y_.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});j_.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});K_.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Z_.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Q_.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});e0.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});t0.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});n0.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});i0.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});s0.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});r0.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});a0.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Un.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});Wo.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});_n.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});Ri.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});u0.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});h0.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});d0.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});f0.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});p0.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});m0.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});g0.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});_0.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});x0.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});v0.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});y0.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});QR.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});eC.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});tC.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});nC.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});M0.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});S0.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});T0.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});E0.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});Oc.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});N0.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});iC.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});sC.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});b0.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});w0.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});rC.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});oC.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});aC.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});cC.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});lC.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});uC.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const hC=J(([s])=>{const e=D(s).toVar(),t=C(e.x).toVar(),n=C(e.y).toVar(),i=C(e.z).toVar();Qe(n.lessThan(1e-4),()=>D(i,i,i)).else(()=>{t.assign(rt(6,t.sub(zo(t))));const r=I(ag(t)).toVar(),o=C(t.sub(C(r))).toVar(),a=C(i.mul(Xt(1,n))).toVar(),c=C(i.mul(Xt(1,n.mul(o)))).toVar(),l=C(i.mul(Xt(1,n.mul(Xt(1,o))))).toVar();return Qe(r.equal(I(0)),()=>D(i,l,a)).elseif(r.equal(I(1)),()=>D(c,i,a)).elseif(r.equal(I(2)),()=>D(a,i,l)).elseif(r.equal(I(3)),()=>D(a,c,i)).elseif(r.equal(I(4)),()=>D(l,a,i)),D(i,a,c)})}),dC=J(([s])=>{const e=D(s).toVar(),t=C(e.x).toVar(),n=C(e.y).toVar(),i=C(e.z).toVar(),r=C(Ni(t,Ni(n,i))).toVar(),o=C(pn(t,pn(n,i))).toVar(),a=C(o.sub(r)).toVar(),c=C().toVar(),l=C().toVar(),u=C().toVar();return u.assign(o),Qe(o.greaterThan(0),()=>{l.assign(a.div(o))}).else(()=>{l.assign(0)}),Qe(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{Qe(t.greaterThanEqual(o),()=>{c.assign(n.sub(i).div(a))}).elseif(n.greaterThanEqual(o),()=>{c.assign(ri(2,i.sub(t).div(a)))}).else(()=>{c.assign(ri(4,t.sub(n).div(a)))}),c.mulAssign(1/6),Qe(c.lessThan(0),()=>{c.addAssign(1)})}),D(c,l,u)});hC.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});dC.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const fC=J(([s])=>{const e=D(s).toVar(),t=zm(tg(e,D(.04045))).toVar(),n=D(e.div(12.92)).toVar(),i=D(Hi(pn(e.add(D(.055)),D(0)).div(1.055),D(2.4))).toVar();return sn(n,i,t)});fC.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});function rs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function R0(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Lo={duration:.5,overwrite:!1,delay:0},Zh,En,Ct,fi=1e8,Et=1/fi,Qu=Math.PI*2,pC=Qu/4,mC=0,C0=Math.sqrt,gC=Math.cos,_C=Math.sin,un=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},ms=function(e){return typeof e=="number"},Jh=function(e){return typeof e>"u"},ji=function(e){return typeof e=="object"},zn=function(e){return e!==!1},Qh=function(){return typeof window<"u"},hc=function(e){return Ht(e)||un(e)},P0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,eh=/(?:-?\.?\d|\.)+/gi,L0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,I0=/[+-]=-?[.\d]+/,D0=/[^,'"\[\]\s]+/gi,xC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,Ui,th,ed,oi={},Fc={},U0,O0=function(e){return(Fc=Ar(e,oi))&&Wn},td=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},va=function(e,t){return!t&&console.warn(e)},F0=function(e,t){return e&&(oi[e]=t)&&Fc&&(Fc[e]=t)||oi},ya=function(){return 0},vC={suppressEvents:!0,isStart:!0,kill:!1},gc={suppressEvents:!0,kill:!1},yC={suppressEvents:!0},nd={},Os=[],nh={},V0,Zn={},_u={},Cp=30,_c=[],id="",sd=function(e){var t=e[0],n,i;if(ji(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=_c.length;i--&&!_c[i].targetTest(t););n=_c[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new cx(e[i],n)))||e.splice(i,1);return e},gr=function(e){return e._gsap||sd(pi(e))[0]._gsap},z0=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():Jh(n)&&e.getAttribute&&e.getAttribute(t)||n},Bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},cn=function(e){return Math.round(e*1e7)/1e7||0},xo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},MC=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Vc=function(){var e=Os.length,t=Os.slice(0),n,i;for(nh={},Os.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},B0=function(e,t,n,i){Os.length&&!En&&Vc(),e.render(t,n,En&&t<0&&(e._initted||e._startAt)),Os.length&&!En&&Vc()},k0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(D0).length<2?t:un(e)?e.trim():e},H0=function(e){return e},_i=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},SC=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ar=function(e,t){for(var n in t)e[n]=t[n];return e},Pp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ji(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},zc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ca=function(e){var t=e.parent||It,n=e.keyframes?SC(An(e.keyframes)):_i;if(zn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},TC=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},G0=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},hl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Xs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},EC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ih=function(e,t,n,i){return e._startAt&&(En?e._startAt.revert(gc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},AC=function s(e){return!e||e._ts&&s(e.parent)},Lp=function(e){return e._repeat?Io(e._tTime,e=e.duration()+e._rDelay)*e:0},Io=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Bc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},dl=function(e){return e._end=cn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},fl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=cn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),dl(e),n._dirty||_r(n,e)),e},W0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Bc(e.rawTime(),t),(!t._dur||Ua(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),_r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Bi=function(e,t,n,i){return t.parent&&Xs(t),t._start=cn((ms(n)?n:n||e!==It?li(e,n,t):e._time)+t._delay),t._end=cn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),G0(e,t,"_first","_last",e._sort?"_start":0),sh(t)||(e._recent=t),i||W0(e,t),e._ts<0&&fl(e,e._tTime),e},X0=function(e,t){return(oi.ScrollTrigger||td("scrollTrigger",t))&&oi.ScrollTrigger.create(t,e)},q0=function(e,t,n,i,r){if(od(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!En&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&V0!==Jn.frame)return Os.push(e),e._lazy=[r,i],1},NC=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},sh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bC=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&NC(e)&&!(!e._initted&&sh(e))||(e._ts<0||e._dp._ts<0)&&!sh(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=Ua(0,e._tDur,t),u=Io(c,a),e._yoyo&&u&1&&(o=1-o),u!==Io(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||En||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&q0(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&ih(e,t,n,!0),e._onUpdate&&!n&&ti(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Xs(e,1),!n&&!En&&(ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wC=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Do=function(e,t,n,i){var r=e._repeat,o=cn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:cn(o*(r+1)+e._rDelay*r):o,a>0&&!i&&fl(e,e._tTime=e._tDur*a),e.parent&&dl(e),n||_r(e.parent,e),e},Ip=function(e){return e instanceof Ln?_r(e):Do(e,e._dur)},RC={_start:0,endTime:ya,totalDuration:ya},li=function s(e,t,n){var i=e.labels,r=e._recent||RC,o=e.duration()>=fi?r.endTime(!1):e._dur,a,c,l;return un(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(An(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},la=function(e,t,n){var i=ms(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=zn(c.vars.inherit)&&c.parent;o.immediateRender=zn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Kt(t[0],o,t[r+1])},Ys=function(e,t){return e||e===0?t(e):t},Ua=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!un(e)||!(t=xC.exec(e))?"":t[1]},CC=function(e,t,n){return Ys(n,function(i){return Ua(e,t,i)})},rh=[].slice,Y0=function(e,t){return e&&ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ji(e[0]))&&!e.nodeType&&e!==Ui},PC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return un(i)&&!t||Y0(i,1)?(r=n).push.apply(r,pi(i)):n.push(i)})||n},pi=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):un(e)&&!n&&(th||!Uo())?rh.call((t||ed).querySelectorAll(e),0):An(e)?PC(e,n):Y0(e)?rh.call(e,0):e?[e]:[]},oh=function(e){return e=pi(e)[0]||va("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return pi(t,n.querySelectorAll?n:n===e?va("Invalid scope")||ed.createElement("div"):e)}},j0=function(e){return e.sort(function(){return .5-Math.random()})},$0=function(e){if(Ht(e))return e;var t=ji(e)?e:{each:e},n=xr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,h=i;return un(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,p=o[g],m,M,x,S,w,b,E,R,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,fi])[1],!y){for(E=-fi;E<(E=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=o[g]=[],m=c?Math.min(y,g)*u-.5:i%y,M=y===fi?0:c?g*h/y-.5:i/y|0,E=0,R=fi,b=0;b<g;b++)x=b%y-m,S=M-(b/y|0),p[b]=w=l?Math.abs(l==="y"?S:x):C0(x*x+S*S),w>E&&(E=w),w<R&&(R=w);i==="random"&&j0(p),p.max=E-R,p.min=R,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:l?l==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=Mn(t.amount||t.each)||0,n=n&&g<0?rx(n):n}return g=(p[d]-p.min)/p.max||0,cn(p.b+(n?n(g):g)*p.v)+p.u}},ah=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=cn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ms(n)?0:Mn(n))}},K0=function(e,t){var n=An(e),i,r;return!n&&ji(e)&&(i=n=e.radius||fi,e.values?(e=pi(e.values),(r=!ms(e[0]))&&(i*=i)):e=ah(e.increment)),Ys(t,n?Ht(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=fi,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-a,f=e[h].y-c,d=d*d+f*f):d=Math.abs(e[h]-a),d<l&&(l=d,u=h);return u=!i||l<=i?e[u]:o,r||u===o||ms(o)?u:u+Mn(o)}:ah(e))},Z0=function(e,t,n,i){return Ys(An(e)?!t:n===!0?!!(n=0):!i,function(){return An(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},LC=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},IC=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},DC=function(e,t,n){return Q0(e,t,0,1,n)},J0=function(e,t,n){return Ys(n,function(i){return e[~~t(i)]})},UC=function s(e,t,n){var i=t-e;return An(e)?J0(e,s(0,e.length),t):Ys(n,function(r){return(i+(r-e)%i)%i+e})},OC=function s(e,t,n){var i=t-e,r=i*2;return An(e)?J0(e,s(0,e.length-1),t):Ys(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Ma=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?D0:eh),n+=e.substr(t,i-t)+Z0(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Q0=function(e,t,n,i,r){var o=t-e,a=i-n;return Ys(r,function(c){return n+((c-e)/o*a||0)})},FC=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=un(e),a={},c,l,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(An(e)&&!An(t)){for(u=[],h=e.length,d=h-2,l=1;l<h;l++)u.push(s(e[l-1],e[l]));h--,r=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=Ar(An(e)?[]:{},e));if(!u){for(c in t)rd.call(a,e,c,"get",t[c]);r=function(_){return ld(_,a)||(o?e.p:e)}}}return Ys(n,r)},Dp=function(e,t,n){var i=e.labels,r=fi,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},ti=function(e,t,n){var i=e.vars,r=i[t],o=Ct,a=e._ctx,c,l,u;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&Os.length&&Vc(),a&&(Ct=a),u=c?r.apply(l,c):r.call(l),Ct=o,u},ia=function(e){return Xs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!En),e.progress()<1&&ti(e,"onInterrupt"),e},oo,ex=[],tx=function(e){if(e)if(e=!e.name&&e.default||e,Qh()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ya,render:ld,add:rd,kill:QC,modifier:JC,rawVars:0},o={targetTest:0,get:0,getSetter:cd,aliases:{},register:0};if(Uo(),e!==i){if(Zn[t])return;_i(i,_i(zc(e,r),o)),Ar(i.prototype,Ar(r,zc(e,o))),Zn[i.prop=t]=i,e.targetTest&&(_c.push(i),nd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}F0(t,i),e.register&&e.register(Wn,i,kn)}else ex.push(e)},Mt=255,sa={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},xu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},nx=function(e,t,n){var i=e?ms(e)?[e>>16,e>>8&Mt,e&Mt]:0:sa.black,r,o,a,c,l,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sa[e])i=sa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(eh),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=xu(c+1/3,r,o),i[1]=xu(c,r,o),i[2]=xu(c-1/3,r,o);else if(~e.indexOf("="))return i=e.match(L0),n&&i.length<4&&(i[3]=1),i}else i=e.match(eh)||sa.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Mt,o=i[1]/Mt,a=i[2]/Mt,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?c=l=0:(f=h-d,l=u>.5?f/(2-h-d):f/(h+d),c=h===r?(o-a)/f+(o<a?6:0):h===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ix=function(e){var t=[],n=[],i=-1;return e.split(Fs).forEach(function(r){var o=r.match(ro)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Up=function(e,t,n){var i="",r=(e+i).match(Fs),o=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!r)return e;if(r=r.map(function(d){return(d=nx(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=ix(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Fs,"1").split(ro),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(Fs),h=l.length-1;a<h;a++)i+=l[a]+r[a];return i+l[h]},Fs=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sa)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),VC=/hsl[a]?\(/,sx=function(e){var t=e.join(" "),n;if(Fs.lastIndex=0,Fs.test(t))return n=VC.test(t),e[1]=Up(e[1],n),e[0]=Up(e[0],n,ix(e[1])),!0},Sa,Jn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,u,h,d,f,_=function g(p){var m=s()-i,M=p===!0,x,S,w,b;if((m>e||m<0)&&(n+=m-t),i+=m,w=i-n,x=w-o,(x>0||M)&&(b=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,o+=x+(x>=r?4:r-x),S=1),M||(c=l(g)),S)for(f=0;f<a.length;f++)a[f](w,d,b,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){U0&&(!th&&Qh()&&(Ui=th=window,ed=Ui.document||{},oi.gsap=Wn,(Ui.gsapVersions||(Ui.gsapVersions=[])).push(Wn.version),O0(Fc||Ui.GreenSockGlobals||!Ui.gsap&&Ui||{}),ex.forEach(tx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Sa=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Sa=0,l=ya},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,m,M){var x=m?function(S,w,b,E){p(S,w,b,E),h.remove(x)}:p;return h.remove(p),a[M?"unshift":"push"](x),Uo(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h}(),Uo=function(){return!Sa&&Jn.wake()},ot={},zC=/^[\d.\-M][\d.\-,\s]/,BC=/["']/g,kC=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(BC,"").trim():+l,i=c.substr(a+1).trim();return t},HC=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},GC=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[kC(t[1])]:HC(e).split(",").map(k0)):ot._CE&&zC.test(e)?ot._CE("",e):n},rx=function(e){return function(t){return 1-e(1-t)}},ox=function s(e,t){for(var n=e._first,i;n;)n instanceof Ln?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},xr=function(e,t){return e&&(Ht(e)?e:ot[e]||GC(e))||t},Lr=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Bn(e,function(a){ot[a]=oi[a]=r,ot[o=a.toLowerCase()]=n;for(var c in r)ot[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ot[a+"."+c]=r[c]}),r},ax=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vu=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Qu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*_C((u-o)*r)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:ax(a);return r=Qu/r,c.config=function(l,u){return s(e,l,u)},c},yu=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:ax(n);return i.config=function(r){return s(e,r)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Lr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Lr("Elastic",vu("in"),vu("out"),vu());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Lr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Lr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Lr("Circ",function(s){return-(C0(1-s*s)-1)});Lr("Sine",function(s){return s===1?1:-gC(s*pC)+1});Lr("Back",yu("in"),yu("out"),yu());ot.SteppedEase=ot.steps=oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Et;return function(a){return((i*Ua(0,o,a)|0)+r)*n}}};Lo.ease=ot["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return id+=s+","+s+"Params,"});var cx=function(e,t){this.id=mC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:z0,this.set=t?t.getSetter:cd},Ta=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Do(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),Sa||Jn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Do(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Uo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(fl(this,n),!r._dp||r.parent||W0(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),B0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Io(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Bc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(Ua(-Math.abs(this._delay),this._tDur,r),i!==!1),dl(this),EC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Uo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=yC);var i=En;return En=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),En=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ip(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ip(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(li(this,n),zn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,zn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Et)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Ht(n)?n:H0,a=function(){var l=i.then;i.then=null,Ht(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ia(this)},s}();_i(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Ln=function(s){R0(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=zn(n.sortChildren),It&&Bi(n.parent||It,rs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&X0(rs(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return la(0,arguments,this),this},t.from=function(i,r,o){return la(1,arguments,this),this},t.fromTo=function(i,r,o,a){return la(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,ca(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Kt(i,r,li(this,o),1),this},t.call=function(i,r,o){return Bi(this,Kt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,c,l,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new Kt(i,o,li(this,c)),this},t.staggerFrom=function(i,r,o,a,c,l,u){return o.runBackwards=1,ca(o).immediateRender=zn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,u)},t.staggerFromTo=function(i,r,o,a,c,l,u,h){return a.startAt=o,ca(a).immediateRender=zn(a.immediateRender),this.staggerTo(i,r,a,c,l,u,h)},t.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:cn(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,g,p,m,M,x,S,w,b,E;if(this!==It&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),d=u,S=this._start,x=this._ts,m=!x,h&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(d=cn(u%p),u===c?(g=this._repeat,d=l):(g=~~(u/p),g&&g===u/p&&(d=l,g--),d>l&&(d=l)),w=Io(this._tTime,p),!a&&this._tTime&&w!==g&&this._tTime-w*p-this._dur<=0&&(w=g),b&&g&1&&(d=l-d,E=1),g!==w&&!this._lock){var R=b&&w&1,y=R===(b&&g&1);if(g<w&&(R=!R),a=R?0:u%l?l:u,this._lock=1,this.render(a||(E?0:cn(g*p)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,y&&(this._lock=2,a=R?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;ox(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=wC(this,cn(a),cn(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!g&&(ti(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-Et);break}}f=_}else{f=this._last;for(var T=i<0?i:d;f;){if(_=f._prev,(f._act||T<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,r,o||En&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=T?-Et:Et);break}}f=_}}if(M&&!r&&(this.pause(),M.render(d>=a?0:-Et)._zTime=d>=a?1:-1,this._ts))return this._start=S,dl(this),this.render(i,r,o);this._onUpdate&&!r&&ti(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Xs(this,1),!r&&!(i<0&&!a)&&(u||a||!c)&&(ti(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(ms(r)||(r=li(this,r,i)),!(i instanceof Ta)){if(An(i))return i.forEach(function(a){return o.add(a,r)}),this;if(un(i))return this.addLabel(i,r);if(Ht(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Bi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-fi);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Kt?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return un(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(hl(this,i),i===this._recent&&(this._recent=this._last),_r(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=cn(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=li(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Kt.delayedCall(0,r||ya,o);return a.data="isPause",this._hasPause=1,Bi(this,a,li(this,i))},t.removePause=function(i){var r=this._first;for(i=li(this,i);r;)r._start===i&&r.data==="isPause"&&Xs(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Ls!==a[c]&&a[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=pi(i),c=this._first,l=ms(r),u;c;)c instanceof Kt?MC(c._targets,a)&&(l?(!Ls||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(u=c.getTweensOf(a,r)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=li(o,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,f,_=Kt.to(o,_i({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==p&&Do(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,_i({startAt:{time:li(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Dp(this,li(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Dp(this,li(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return _r(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),_r(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,c=fi,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bi(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;Do(o,o===It&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(It._ts&&(B0(It,Bc(i,It)),V0=Jn.frame),Jn.frame>=Cp){Cp+=si.autoSleep||120;var r=It._first;if((!r||!r._ts)&&si.autoSleep&&Jn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Jn.sleep()}}},e}(Ta);_i(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var WC=function(e,t,n,i,r,o,a){var c=new kn(this._pt,e,t,0,1,px,null,r),l=0,u=0,h,d,f,_,g,p,m,M;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ma(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),d=n.match(gu)||[];h=gu.exec(i);)_=h[0],g=i.substring(l,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(p=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?xo(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},l=gu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(I0.test(i)||m)&&(c.e=0),this._pt=c,c},rd=function(e,t,n,i,r,o,a,c,l,u){Ht(i)&&(i=i(r||0,e,o));var h=e[t],d=n!=="get"?n:Ht(h)?l?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,f=Ht(h)?l?$C:dx:ad,_;if(un(i)&&(~i.indexOf("random(")&&(i=Ma(i)),i.charAt(1)==="="&&(_=xo(d,i)+(Mn(d)||0),(_||_===0)&&(i=_))),!u||d!==i||ch)return!isNaN(d*i)&&i!==""?(_=new kn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?ZC:fx,0,f),l&&(_.fp=l),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&td(t,i),WC.call(this,e,t,d,i,f,c||si.stringFilter,l))},XC=function(e,t,n,i,r){if(Ht(e)&&(e=ua(e,r,t,n,i)),!ji(e)||e.style&&e.nodeType||An(e)||P0(e))return un(e)?ua(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=ua(e[a],r,t,n,i);return o},lx=function(e,t,n,i,r,o){var a,c,l,u;if(Zn[e]&&(a=new Zn[e]).init(r,a.rawVars?t[e]:XC(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new kn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==oo))for(l=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Ls,ch,od=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!Zh,S=e.timeline,w,b,E,R,y,T,L,H,B,ne,ee,Y,ie;if(S&&(!d||!r)&&(r="none"),e._ease=xr(r,Lo.ease),e._yEase=h?rx(xr(h===!0?r:h,Lo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(H=p[0]?gr(p[0]).harness:0,Y=H&&i[H.prop],w=zc(i,nd),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?gc:vC),g._lazy=0),o){if(Xs(e._startAt=Kt.set(p,_i({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&zn(c),startAt:null,delay:0,onUpdate:l&&function(){return ti(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En||!a&&!f)&&e._startAt.revert(gc),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),E=_i({overwrite:!1,data:"isFromStart",lazy:a&&!g&&zn(c),immediateRender:a,stagger:0,parent:m},w),Y&&(E[H.prop]=Y),Xs(e._startAt=Kt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(En?e._startAt.revert(gc):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&zn(c)||c&&!_,b=0;b<p.length;b++){if(y=p[b],L=y._gsap||sd(p)[b]._gsap,e._ptLookup[b]=ne={},nh[L.id]&&Os.length&&Vc(),ee=M===p?b:M.indexOf(y),H&&(B=new H).init(y,Y||w,e,ee,M)!==!1&&(e._pt=R=new kn(e._pt,y,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(K){ne[K]=R}),B.priority&&(T=1)),!H||Y)for(E in w)Zn[E]&&(B=lx(E,w,e,ee,y,M))?B.priority&&(T=1):ne[E]=R=rd.call(e,y,E,"get",w[E],ee,M,0,i.stringFilter);e._op&&e._op[b]&&e.kill(y,e._op[b]),x&&e._pt&&(Ls=e,It.killTweensOf(y,ne,e.globalTime(t)),ie=!e.parent,Ls=0),e._pt&&c&&(nh[L.id]=1)}T&&mx(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!ie,d&&t<=0&&S.render(fi,!0,!0)},qC=function(e,t,n,i,r,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ch=1,e.vars[t]="+=0",od(e,a),ch=0,c?va(t+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Gt(n)+Mn(h.e)),h.b&&(h.b=u.s+Mn(h.b))},YC=function(e,t){var n=e[0]?gr(e[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return t;r=Ar({},t);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},jC=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(An(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},ua=function(e,t,n,i,r){return Ht(e)?e.call(t,n,i,r):un(e)&&~e.indexOf("random(")?Ma(e):e},ux=id+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",hx={};Bn(ux+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return hx[s]=1});var Kt=function(s){R0(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:ca(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,p=c.scrollTrigger,m=c.yoyoEase,M=i.parent||It,x=(An(n)||P0(n)?ms(n[0]):"length"in i)?[n]:pi(n),S,w,b,E,R,y,T,L;if(a._targets=x.length?sd(x):va("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||hc(l)||hc(u)){if(i=a.vars,S=a.timeline=new Ln({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:x}),S.kill(),S.parent=S._dp=rs(a),S._start=0,d||hc(l)||hc(u)){if(E=x.length,T=d&&$0(d),ji(d))for(R in d)~ux.indexOf(R)&&(L||(L={}),L[R]=d[R]);for(w=0;w<E;w++)b=zc(i,hx),b.stagger=0,m&&(b.yoyoEase=m),L&&Ar(b,L),y=x[w],b.duration=+ua(l,rs(a),w,y,x),b.delay=(+ua(u,rs(a),w,y,x)||0)-a._delay,!d&&E===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),S.to(y,b,T?T(w,y,x):0),S._ease=ot.none;S.duration()?l=u=0:a.timeline=0}else if(_){ca(_i(S.vars.defaults,{ease:"none"})),S._ease=xr(_.ease||i.ease||"none");var H=0,B,ne,ee;if(An(_))_.forEach(function(Y){return S.to(x,Y,">")}),S.duration();else{b={};for(R in _)R==="ease"||R==="easeEach"||jC(R,_[R],b,_.easeEach);for(R in b)for(B=b[R].sort(function(Y,ie){return Y.t-ie.t}),H=0,w=0;w<B.length;w++)ne=B[w],ee={ease:ne.e,duration:(ne.t-(w?B[w-1].t:0))/100*l},ee[R]=ne.v,S.to(x,ee,H),H+=ee.duration;S.duration()<l&&S.to({},{duration:l-S.duration()})}}l||a.duration(l=S.duration())}else a.timeline=0;return f===!0&&!Zh&&(Ls=rs(a),It.killTweensOf(x),Ls=0),Bi(M,rs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!_&&a._start===cn(M._time)&&zn(h)&&AC(rs(a))&&M.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-u)||0)),p&&X0(rs(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Et&&!u?c:i<Et?0:i,d,f,_,g,p,m,M,x,S;if(!l)bC(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,x=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,o);if(d=cn(h%g),h===c?(_=this._repeat,d=l):(_=~~(h/g),_&&_===cn(h/g)&&(d=l,_--),d>l&&(d=l)),m=this._yoyo&&_&1,m&&(S=this._yEase,d=l-d),p=Io(this._tTime,g),d===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(x&&this._yEase&&ox(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(cn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(q0(this,u?i:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(d/l),this._from&&(this.ratio=M=1-M),d&&!a&&!r&&!_&&(ti(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&ih(this,i,r,o),ti(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&ti(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ih(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Xs(this,1),!r&&!(u&&!a)&&(h||a||m)&&(ti(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,c){Sa||Jn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||od(this,l),u=this._ease(l/this._dur),qC(this,i,r,o,a,u,l,c)?this.resetTo(i,r,o,a,1):(fl(this,0),this.parent||G0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ls&&Ls.vars.overwrite!==!0)._first||ia(this),this.parent&&o!==this.timeline.totalDuration()&&Do(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?pi(i):a,l=this._ptLookup,u=this._pt,h,d,f,_,g,p,m;if((!r||r==="all")&&TC(a,c))return r==="all"&&(this._pt=0),ia(this);for(h=this._op=this._op||[],r!=="all"&&(un(r)&&(g={},Bn(r,function(M){return g[M]=1}),r=g),r=YC(a,r)),m=a.length;m--;)if(~c.indexOf(a[m])){d=l[m],r==="all"?(h[m]=r,_=d,f={}):(f=h[m]=h[m]||{},_=r);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&hl(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&ia(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return la(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return la(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return It.killTweensOf(i,r,o)},e}(Ta);_i(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(s){Kt[s]=function(){var e=new Ln,t=rh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var ad=function(e,t,n){return e[t]=n},dx=function(e,t,n){return e[t](n)},$C=function(e,t,n,i){return e[t](i.fp,n)},KC=function(e,t,n){return e.setAttribute(t,n)},cd=function(e,t){return Ht(e[t])?dx:Jh(e[t])&&e.setAttribute?KC:ad},fx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ZC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},px=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ld=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},JC=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},QC=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?hl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},eP=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},mx=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},kn=function(){function s(t,n,i,r,o,a,c,l,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||fx,this.d=c||this,this.set=l||ad,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=eP,this.m=n,this.mt=r,this.tween=i},s}();Bn(id+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return nd[s]=1});oi.TweenMax=oi.TweenLite=Kt;oi.TimelineLite=oi.TimelineMax=Ln;It=new Ln({sortChildren:!1,defaults:Lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=sx;var vr=[],xc={},tP=[],Op=0,nP=0,Mu=function(e){return(xc[e]||tP).map(function(t){return t()})},lh=function(){var e=Date.now(),t=[];e-Op>2&&(Mu("matchMediaInit"),vr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=Ui.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),Mu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Op=e,Mu("matchMedia"))},gx=function(){function s(t,n){this.selector=n&&oh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=nP++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ht(n)&&(r=i,i=n,n=Ht);var o=this,a=function(){var l=Ct,u=o.selector,h;return l&&l!==o&&l.data.push(o),r&&(o.selector=oh(r)),Ct=o,h=i.apply(o,arguments),Ht(h)&&o._r.push(h),Ct=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ht?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Ln?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Kt)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=vr.length;o--;)vr[o].id===this.id&&vr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),iP=function(){function s(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ji(n)||(n={matches:n});var o=new gx(0,r||this.scope),a=o.conditions={},c,l,u;Ct&&!o.selector&&(o.selector=Ct.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=Ui.matchMedia(n[l]),c&&(vr.indexOf(o)<0&&vr.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(lh):c.addEventListener("change",lh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),kc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return tx(i)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){un(e)&&(e=pi(e)[0]);var r=gr(e||{}).get,o=n?H0:k0;return n==="native"&&(n=""),e&&(t?o((Zn[t]&&Zn[t].get||r)(e,t,n,i)):function(a,c,l){return o((Zn[a]&&Zn[a].get||r)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=pi(e),e.length>1){var i=e.map(function(u){return Wn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Zn[t],a=gr(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var h=new o;oo._pt=0,h.init(e,n?u+n:u,oo,0,[e]),h.render(1,h),oo._pt&&ld(1,oo)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Wn.to(e,Ar((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return r.resetTo(t,c,l,u)};return o.tween=r,o},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xr(e.ease,Lo.ease)),Pp(Lo,e||{})},config:function(e){return Pp(si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Zn[a]&&!oi[a]&&va(t+" effect requires "+a+" plugin.")}),_u[t]=function(a,c,l){return n(pi(a),_i(c||{},r),l)},o&&(Ln.prototype[t]=function(a,c,l){return this.add(_u[t](a,ji(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ot[e]=xr(t)},parseEase:function(e,t){return arguments.length?xr(e,t):ot},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ln(e),i,r;for(n.smoothChildTiming=zn(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Bi(n,i,i._start-i._delay),i=r;return Bi(It,n,0),n},context:function(e,t){return e?new gx(e,t):Ct},matchMedia:function(e){return new iP(e)},matchMediaRefresh:function(){return vr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||lh()},addEventListener:function(e,t){var n=xc[e]||(xc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:UC,wrapYoyo:OC,distribute:$0,random:Z0,snap:K0,normalize:DC,getUnit:Mn,clamp:CC,splitColor:nx,toArray:pi,selector:oh,mapRange:Q0,pipe:LC,unitize:IC,interpolate:FC,shuffle:j0},install:O0,effects:_u,ticker:Jn,updateRoot:Ln.updateRoot,plugins:Zn,globalTimeline:It,core:{PropTween:kn,globals:F0,Tween:Kt,Timeline:Ln,Animation:Ta,getCache:gr,_removeLinkedListItem:hl,reverting:function(){return En},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return Zh=e}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return kc[s]=Kt[s]});Jn.add(Ln.updateRoot);oo=kc.to({},{duration:0});var sP=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},rP=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=sP(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Su=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(un(r)&&(c={},Bn(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}rP(a,r)}}}},Wn=kc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)En?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Su("roundProps",ah),Su("modifiers"),Su("snap",K0))||kc;Kt.version=Ln.version=Wn.version="3.12.5";U0=1;Qh()&&Uo();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fp,Is,vo,ud,mr,Vp,hd,oP=function(){return typeof window<"u"},gs={},lr=180/Math.PI,yo=Math.PI/180,Qr=Math.atan2,zp=1e8,dd=/([A-Z])/g,aP=/(left|right|width|margin|padding|x)/i,cP=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hP=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},_x=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},xx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},dP=function(e,t,n){return e.style[t]=n},fP=function(e,t,n){return e.style.setProperty(t,n)},pP=function(e,t,n){return e._gsap[t]=n},mP=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},gP=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},_P=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Ot="transform",Hn=Ot+"Origin",xP=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in gs&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=cs(i,a)}):this.tfm[e]=o.x?o[e]:cs(i,e),e===Hn&&(this.tfm.zOrigin=o.zOrigin);else return Gi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Hn,t,"")),e=Ot}(r||t)&&this.props.push(e,t,r[e])},vx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vP=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(dd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=hd(),(!r||!r.isStart)&&!n[Ot]&&(vx(n),i.zOrigin&&n[Hn]&&(n[Hn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},yx=function(e,t){var n={target:e,props:[],revert:vP,save:xP};return e._gsap||Wn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Mx,hh=function(e,t){var n=Is.createElementNS?Is.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Is.createElement(e);return n&&n.style?n:Is.createElement(e)},Wi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(dd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Oo(t)||t,1)||""},Bp="O,Moz,ms,Ms,Webkit".split(","),Oo=function(e,t,n){var i=t||mr,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Bp[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Bp[o]:"")+e},dh=function(){oP()&&window.document&&(Fp=window,Is=Fp.document,vo=Is.documentElement,mr=hh("div")||{style:{}},hh("div"),Ot=Oo(Ot),Hn=Ot+"Origin",mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Mx=!!Oo("perspective"),hd=Wn.core.reverting,ud=1)},Tu=function s(e){var t=hh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(vo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),vo.removeChild(t),this.style.cssText=r,o},kp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Sx=function(e){var t;try{t=e.getBBox()}catch{t=Tu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Tu||(t=Tu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+kp(e,["x","cx","x1"])||0,y:+kp(e,["y","cy","y1"])||0,width:0,height:0}:t},Tx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Sx(e))},Nr=function(e,t){if(t){var n=e.style,i;t in gs&&t!==Hn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(dd,"-$1").toLowerCase())):n.removeAttribute(t)}},Ds=function(e,t,n,i,r,o){var a=new kn(e._pt,t,n,0,1,o?xx:_x);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Hp={deg:1,rad:1,turn:1},yP={grid:1,flex:1},qs=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=mr.style,c=aP.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,p,m;if(i===o||!r||Hp[i]||Hp[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),m=e.getCTM&&Tx(e),(f||o==="%")&&(gs[t]||~t.indexOf("adius")))return _=m?e.getBBox()[c?"width":"height"]:e[u],Gt(f?r/_*h:r/100*_);if(a[c?"width":"height"]=h+(d?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Is||!g.appendChild)&&(g=Is.body),p=g._gsap,p&&f&&p.width&&c&&p.time===Jn.time&&!p.uncache)return Gt(r/p.width*h);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,_=e[u],M?e.style[t]=M:Nr(e,t)}else(f||o==="%")&&!yP[Wi(g,"display")]&&(a.position=Wi(e,"position")),g===e&&(a.position="static"),g.appendChild(mr),_=mr[u],g.removeChild(mr),a.position="absolute";return c&&f&&(p=gr(g),p.time=Jn.time,p.width=g[u]),Gt(d?_*r/h:_&&r?h/_*r:0)},cs=function(e,t,n,i){var r;return ud||dh(),t in Gi&&t!=="transform"&&(t=Gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),gs[t]&&t!=="transform"?(r=Aa(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Gc(Wi(e,Hn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Hc[t]&&Hc[t](e,t,n)||Wi(e,t)||z0(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qs(e,t,r,n)+n:r},MP=function(e,t,n,i){if(!n||n==="none"){var r=Oo(t,e,1),o=r&&Wi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Wi(e,"borderTopColor"))}var a=new kn(this._pt,e.style,t,0,1,px),c=0,l=0,u,h,d,f,_,g,p,m,M,x,S,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Wi(e,t)||i,g?e.style[t]=g:Nr(e,t)),u=[n,i],sx(u),n=u[0],i=u[1],d=n.match(ro)||[],w=i.match(ro)||[],w.length){for(;h=ro.exec(i);)p=h[0],M=i.substring(c,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=d[l++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),p.charAt(1)==="="&&(p=xo(f,p)+S),m=parseFloat(p),x=p.substr((m+"").length),c=ro.lastIndex-x.length,x||(x=x||si.units[t]||S,c===i.length&&(i+=x,a.e+=x)),S!==x&&(f=qs(e,t,g,x)||0),a._pt={_next:a._pt,p:M||l===1?M:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?xx:_x;return I0.test(i)&&(a.e=0),this._pt=a,a},Gp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},SP=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Gp[n]||n,t[1]=Gp[i]||i,t.join(" ")},TP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],gs[a]&&(c=1,a=a==="transformOrigin"?Hn:Ot),Nr(n,a);c&&(Nr(n,Ot),o&&(o.svg&&n.removeAttribute("transform"),Aa(n,1),o.uncache=1,vx(i)))}},Hc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new kn(e._pt,t,n,0,0,TP);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Ea=[1,0,0,1,0,0],Ex={},Ax=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Wp=function(e){var t=Wi(e,Ot);return Ax(t)?Ea:t.substr(7).match(L0).map(Gt)},fd=function(e,t){var n=e._gsap||gr(e),i=e.style,r=Wp(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Ea:r):(r===Ea&&!e.offsetParent&&e!==vo&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(l=1,a=e.nextElementSibling,vo.appendChild(e)),r=Wp(e),c?i.display=c:Nr(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):vo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},fh=function(e,t,n,i,r,o){var a=e._gsap,c=r||fd(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=c[0],_=c[1],g=c[2],p=c[3],m=c[4],M=c[5],x=t.split(" "),S=parseFloat(x[0])||0,w=parseFloat(x[1])||0,b,E,R,y;n?c!==Ea&&(E=f*p-_*g)&&(R=S*(p/E)+w*(-g/E)+(g*M-p*m)/E,y=S*(-_/E)+w*(f/E)-(f*M-_*m)/E,S=R,w=y):(b=Sx(e),S=b.x+(~x[0].indexOf("%")?S/100*b.width:S),w=b.y+(~(x[1]||x[0]).indexOf("%")?w/100*b.height:w)),i||i!==!1&&a.smooth?(m=S-l,M=w-u,a.xOffset=h+(m*f+M*g)-m,a.yOffset=d+(m*_+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Hn]="0px 0px",o&&(Ds(o,a,"xOrigin",l,S),Ds(o,a,"yOrigin",u,w),Ds(o,a,"xOffset",h,a.xOffset),Ds(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},Aa=function(e,t){var n=e._gsap||new cx(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Wi(e,Hn)||"0",u,h,d,f,_,g,p,m,M,x,S,w,b,E,R,y,T,L,H,B,ne,ee,Y,ie,K,ve,Me,Te,He,at,te,ce;return u=h=d=g=p=m=M=x=S=0,f=_=1,n.svg=!!(e.getCTM&&Tx(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ot]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ot]!=="none"?c[Ot]:"")),i.scale=i.rotate=i.translate="none"),E=fd(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),l=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",ie=""):ie=!t&&e.getAttribute("data-svg-origin"),fh(e,ie||l,!!ie||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,b=n.yOrigin||0,E!==Ea&&(L=E[0],H=E[1],B=E[2],ne=E[3],u=ee=E[4],h=Y=E[5],E.length===6?(f=Math.sqrt(L*L+H*H),_=Math.sqrt(ne*ne+B*B),g=L||H?Qr(H,L)*lr:0,M=B||ne?Qr(B,ne)*lr+g:0,M&&(_*=Math.abs(Math.cos(M*yo))),n.svg&&(u-=w-(w*L+b*B),h-=b-(w*H+b*ne))):(ce=E[6],at=E[7],Me=E[8],Te=E[9],He=E[10],te=E[11],u=E[12],h=E[13],d=E[14],R=Qr(ce,He),p=R*lr,R&&(y=Math.cos(-R),T=Math.sin(-R),ie=ee*y+Me*T,K=Y*y+Te*T,ve=ce*y+He*T,Me=ee*-T+Me*y,Te=Y*-T+Te*y,He=ce*-T+He*y,te=at*-T+te*y,ee=ie,Y=K,ce=ve),R=Qr(-B,He),m=R*lr,R&&(y=Math.cos(-R),T=Math.sin(-R),ie=L*y-Me*T,K=H*y-Te*T,ve=B*y-He*T,te=ne*T+te*y,L=ie,H=K,B=ve),R=Qr(H,L),g=R*lr,R&&(y=Math.cos(R),T=Math.sin(R),ie=L*y+H*T,K=ee*y+Y*T,H=H*y-L*T,Y=Y*y-ee*T,L=ie,ee=K),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Gt(Math.sqrt(L*L+H*H+B*B)),_=Gt(Math.sqrt(Y*Y+ce*ce)),R=Qr(ee,Y),M=Math.abs(R)>2e-4?R*lr:0,S=te?1/(te<0?-te:te):0),n.svg&&(ie=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ax(Wi(e,Ot)),ie&&e.setAttribute("transform",ie))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Gt(f),n.scaleY=Gt(_),n.rotation=Gt(g)+a,n.rotationX=Gt(p)+a,n.rotationY=Gt(m)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Hn]=Gc(l)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?AP:Mx?Nx:EP,n.uncache=0,n},Gc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Eu=function(e,t,n){var i=Mn(t);return Gt(parseFloat(t)+parseFloat(qs(e,"x",n+"px",i)))+i},EP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Nx(e,t)},rr="0deg",ta="0px",or=") ",Nx=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,x=n.zOrigin,S="",w=m==="auto"&&e&&e!==1||m===!0;if(x&&(h!==rr||u!==rr)){var b=parseFloat(u)*yo,E=Math.sin(b),R=Math.cos(b),y;b=parseFloat(h)*yo,y=Math.cos(b),o=Eu(M,o,E*y*-x),a=Eu(M,a,-Math.sin(b)*-x),c=Eu(M,c,R*y*-x+x)}p!==ta&&(S+="perspective("+p+or),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(w||o!==ta||a!==ta||c!==ta)&&(S+=c!==ta||w?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+or),l!==rr&&(S+="rotate("+l+or),u!==rr&&(S+="rotateY("+u+or),h!==rr&&(S+="rotateX("+h+or),(d!==rr||f!==rr)&&(S+="skew("+d+", "+f+or),(_!==1||g!==1)&&(S+="scale("+_+", "+g+or),M.style[Ot]=S||"translate(0, 0)"},AP=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,x=parseFloat(o),S=parseFloat(a),w,b,E,R,y;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=yo,l*=yo,w=Math.cos(c)*h,b=Math.sin(c)*h,E=Math.sin(c-l)*-d,R=Math.cos(c-l)*d,l&&(u*=yo,y=Math.tan(l-u),y=Math.sqrt(1+y*y),E*=y,R*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),w*=y,b*=y)),w=Gt(w),b=Gt(b),E=Gt(E),R=Gt(R)):(w=h,R=d,b=E=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=qs(f,"x",o,"px"),S=qs(f,"y",a,"px")),(_||g||p||m)&&(x=Gt(x+_-(_*w+g*E)+p),S=Gt(S+g-(_*b+g*R)+m)),(i||r)&&(y=f.getBBox(),x=Gt(x+i/100*y.width),S=Gt(S+r/100*y.height)),y="matrix("+w+","+b+","+E+","+R+","+x+","+S+")",f.setAttribute("transform",y),M&&(f.style[Ot]=y)},NP=function(e,t,n,i,r){var o=360,a=un(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?lr:1),l=c-i,u=i+l+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*zp)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*zp)%o-~~(l/o)*o)),e._pt=d=new kn(e._pt,t,n,i,l,lP),d.e=u,d.u="deg",e._props.push(n),d},Xp=function(e,t){for(var n in t)e[n]=t[n];return e},bP=function(e,t,n){var i=Xp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ot]=t,a=Aa(n,1),Nr(n,Ot),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ot],o[Ot]=t,a=Aa(n,1),o[Ot]=l);for(c in gs)l=i[c],u=a[c],l!==u&&r.indexOf(c)<0&&(f=Mn(l),_=Mn(u),h=f!==_?qs(n,c,l,_):parseFloat(l),d=parseFloat(u),e._pt=new kn(e._pt,a,c,h,d-h,uh),e._pt.u=_||0,e._props.push(c));Xp(a,i)};Bn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Hc[e>1?"border"+s:s]=function(a,c,l,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return cs(a,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(c,f,h)}});var bx={name:"css",register:dh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,c=n.vars.startAt,l,u,h,d,f,_,g,p,m,M,x,S,w,b,E,R;ud||dh(),this.styles=this.styles||yx(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Zn[g]&&lx(g,t,n,i,e,r)))){if(f=typeof u,_=Hc[g],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ma(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Fs.lastIndex=0,Fs.test(l)||(p=Mn(l),m=Mn(u)),m?p!==m&&(l=qs(e,g,l,m)+m):p&&(u+=p),this.add(a,"setProperty",l,u,i,r,0,0,g),o.push(g),R.push(g,0,a[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,e,r):c[g],un(l)&&~l.indexOf("random(")&&(l=Ma(l)),Mn(l+"")||l==="auto"||(l+=si.units[g]||Mn(cs(e,g))||""),(l+"").charAt(1)==="="&&(l=cs(e,g))):l=cs(e,g),d=parseFloat(l),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in Gi&&(g==="autoAlpha"&&(d===1&&cs(e,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,a.visibility),Ds(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Gi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in gs,x){if(this.styles.save(g),S||(w=e._gsap,w.renderTransform&&!t.parseTransform||Aa(e,t.parseTransform),b=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new kn(this._pt,a,Ot,0,1,w.renderTransform,w,0,-1),S.dep=1),g==="scale")this._pt=new kn(this._pt,w,"scaleY",w.scaleY,(M?xo(w.scaleY,M+h):h)-w.scaleY||0,uh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Hn,0,a[Hn]),u=SP(u),w.svg?fh(e,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==w.zOrigin&&Ds(this,w,"zOrigin",w.zOrigin,m),Ds(this,a,g,Gc(l),Gc(u)));continue}else if(g==="svgOrigin"){fh(e,u,1,b,0,this);continue}else if(g in Ex){NP(this,w,g,d,M?xo(d,M+u):u);continue}else if(g==="smoothOrigin"){Ds(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){bP(this,u,e);continue}}else g in a||(g=Oo(g)||g);if(x||(h||h===0)&&(d||d===0)&&!cP.test(u)&&g in a)p=(l+"").substr((d+"").length),h||(h=0),m=Mn(u)||(g in si.units?si.units[g]:p),p!==m&&(d=qs(e,g,l,m)),this._pt=new kn(this._pt,x?w:a,g,d,(M?xo(d,M+h):h)-d,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?hP:uh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=uP);else if(g in a)MP.call(this,e,g,l,M?M+u:u);else if(g in e)this.add(e,g,l||e[g],M?M+u:u,i,r);else if(g!=="parseTransform"){td(g,u);continue}x||(g in a?R.push(g,0,a[g]):R.push(g,1,l||e[g])),o.push(g)}}E&&mx(this)},render:function(e,t){if(t.tween._time||!hd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:cs,aliases:Gi,getSetter:function(e,t,n){var i=Gi[t];return i&&i.indexOf(",")<0&&(t=i),t in gs&&t!==Hn&&(e._gsap.x||cs(e,"x"))?n&&Vp===n?t==="scale"?mP:pP:(Vp=n||{})&&(t==="scale"?gP:_P):e.style&&!Jh(e.style[t])?dP:~t.indexOf("-")?fP:cd(e,t)},core:{_removeProperty:Nr,_getMatrix:fd}};Wn.utils.checkPrefix=Oo;Wn.core.getStyleSaver=yx;(function(s,e,t,n){var i=Bn(s+","+e+","+t,function(r){gs[r]=1});Bn(e,function(r){si.units[r]="deg",Ex[r]=1}),Gi[i[13]]=s+","+e,Bn(n,function(r){var o=r.split(":");Gi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){si.units[s]="px"});Wn.registerPlugin(bx);var pd=Wn.registerPlugin(bx)||Wn;pd.core.Tween;const Ir=new sA,br=new On(75,window.innerWidth/window.innerHeight,.1,1e3),xs=new iA;xs.setSize(window.innerWidth,window.innerHeight);xs.setAnimationLoop(IP);document.body.appendChild(xs.domElement);const wP=new Nh(1.5,.5,200,16),RP=new Kc({color:12632256,roughness:0,metalness:0}),ha=new di(wP,RP);Ir.add(ha);br.position.z=10;const wx=new Rh(16711680,100);wx.position.set(5,5,10);const Rx=new Ch(56576,100);Rx.position.set(-5,3,3);const Cx=new Ch(255,100);Cx.position.set(-7,8,3);const CP=new Cm(16777215,1);Ir.add(wx,CP,Rx,Cx);const qo=new EA(br,xs.domElement);qo.enableDamping=!0;qo.enablePan=!1;qo.enableZoom=!1;qo.autoRotate=!0;qo.autoRotateSpeed=.2;function PP(){const s=new Ah(.25,24,24),e=new Kc({color:12303291,roughness:0,metalness:0}),t=new di(s,e),[n,i,r]=Array(3).fill().map(()=>Yc.randFloatSpread(200));t.position.set(n,i,r),Ir.add(t)}Array(200).fill().forEach(PP);const LP=new Rm().load("space.jpg");Ir.background=LP;new Rm().load("me.jpg");document.querySelector(".webgl");xs.render(Ir,br);window.addEventListener("resize",()=>{sizes.width=window.innerWidth,sizes.height=window.innerHeight,br.updateProjectionMatrix(),br.aspect=sizes.width/sizes.height,xs.setSize(sizes.width,sizes,height)});const Px=()=>{xs.render(Ir,br),window.requestAnimationFrame(Px)};Px();xs.setPixelRatio(2);function IP(){ha.rotation.x+=.01,ha.rotation.y+=.01,ha.rotation.z+=.01,qo.update(),xs.render(Ir,br)}const Lx=pd.timeline({defaults:{duration:4}}),DP=pd.timeline({defaults:{duration:2}});Lx.fromTo(ha.scale,{z:0,x:0,y:0},{z:1,x:1,y:1});Lx.fromTo(".title",{opacity:0},{opacity:1});DP.fromTo("nav",{y:"-100%"},{y:"0%"});document.addEventListener("DOMContentLoaded",function(){var s=document.getElementById("aboutMeLink"),e=document.getElementById("aboutMePopup"),t=document.getElementById("aboutMeDetails"),n=document.querySelectorAll(".close");s.onclick=function(i){i.preventDefault(),t.innerHTML="Hello! I'm Keelan, a Cyber Security undergraduate with a passion for all things computer science. My journey into the tech world is unique, starting with a solid foundation in the military, where I served as an Air Traffic Controller for nearly six years. This experience has honed my attention to detail, discipline, and problem-solving skills, which I now channel into the field of cybersecurity and computer science.<br><br>I am deeply fascinated by the endless possibilities within computer science and spend much of my spare time developing tools and applications using Python and C. Recently, I've began learning C++.<br><br>Beyond programming, I enjoy participating in Capture The Flag (CTF) competitions and exploring challenges on platforms like Hack The Box, where I can put my skills to the test and continuously learn new techniques. My interests also extend to web development, where I dabble in both front-end and back-end technologies.<br><br>As I transition from my military career to fully immerse myself in the world of computer science, I am eager to apply my skills and knowledge to real-world challenges, collaborate with like-minded individuals, and contribute to the ever-evolving tech landscape. Thank you for visiting my portfolio, and I look forward to connecting with you!",e.classList.remove("hidden"),e.classList.add("opacity-100"),e.querySelector(".popup-content").classList.add("scale-100")},n.forEach(function(i){i.onclick=function(){e.classList.remove("opacity-100"),e.querySelector(".popup-content").classList.remove("scale-100"),setTimeout(function(){e.classList.add("hidden")},300)}}),window.onclick=function(i){i.target==e&&(e.classList.remove("opacity-100"),e.querySelector(".popup-content").classList.remove("scale-100"),setTimeout(function(){e.classList.add("hidden")},300))}});
