import{_ as ve,a as v,A as ee,u as be,B as te,D as ye,G as Ae,H as re,I as we,J as Ce,K as xe,L as Re,N as Ee,O as $e,P as Fe,Q as ne,r as ie,R as Ie,T as ae,U as Oe,V as Se,W as Le,X as Ne,c as ke,Y as oe,z as Ue,h as De,Z as Te,$ as Pe,b as We,m as je,a0 as Me,a1 as Ve,a2 as Ge,a3 as ze,t as _,a4 as qe}from"./channel-oRk5-XZJ.js";import{n as Be,l as se,_ as Ke,a as Xe,b as Ze}from"./_baseUniq-S2dU3oH3.js";import{_ as L}from"./_baseIteratee-CqDR5IDS.js";import{_ as N}from"./camelCase-D7-BemT7.js";import{s as b}from"./string.utils-CcfYXjow.js";import{g as Ye}from"./administration-DCOj2uiN.js";function He(t="Core",...e){}function Je(t="Core",...e){}var Qe=ve,et=function(){return Qe.Date.now()},tt=et,rt=ee,I=tt,V=be,nt="Expected a function",it=Math.max,at=Math.min;function ot(t,e,r){var o,g,l,f,m,s,h=0,c=!1,n=!1,i=!0;if(typeof t!="function")throw new TypeError(nt);e=V(e)||0,rt(r)&&(c=!!r.leading,n="maxWait"in r,l=n?it(V(r.maxWait)||0,e):l,i="trailing"in r?!!r.trailing:i);function u(d){var y=o,w=g;return o=g=void 0,h=d,f=t.apply(w,y),f}function a(d){return h=d,m=setTimeout(x,e),c?u(d):f}function p(d){var y=d-s,w=d-h,M=e-y;return n?at(M,l-w):M}function W(d){var y=d-s,w=d-h;return s===void 0||y>=e||y<0||n&&w>=l}function x(){var d=I();if(W(d))return j(d);m=setTimeout(x,p(d))}function j(d){return m=void 0,i&&o?u(d):(o=g=void 0,f)}function pe(){m!==void 0&&clearTimeout(m),h=0,o=s=g=m=void 0}function _e(){return m===void 0?f:j(I())}function F(){var d=I(),y=W(d);if(o=arguments,g=this,s=d,y){if(m===void 0)return a(s);if(n)return clearTimeout(m),m=setTimeout(x,e),u(s)}return m===void 0&&(m=setTimeout(x,e)),f}return F.cancel=pe,F.flush=_e,F}var ce=ot;const st=v(ce);var ct=ce,ut=ee,lt="Expected a function";function ft(t,e,r){var o=!0,g=!0;if(typeof t!="function")throw new TypeError(lt);return ut(r)&&(o="leading"in r?!!r.leading:o,g="trailing"in r?!!r.trailing:g),ct(t,e,{leading:o,maxWait:e,trailing:g})}var ht=ft;const gt=v(ht);function mt(){}var k=mt,dt=te,pt=k;function R(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=void 0}R.prototype=dt(pt.prototype);R.prototype.constructor=R;var U=R,G=ye,_t=G&&new G,vt=_t,z=vt,bt=Be,yt=z?function(t){return z.get(t)}:bt,ue=yt,At={},wt=At,q=wt,Ct=Object.prototype,xt=Ct.hasOwnProperty;function Rt(t){for(var e=t.name+"",r=q[e],o=xt.call(q,e)?r.length:0;o--;){var g=r[o],l=g.func;if(l==null||l==t)return g.name}return e}var le=Rt,Et=te,$t=k,Ft=4294967295;function E(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ft,this.__views__=[]}E.prototype=Et($t.prototype);E.prototype.constructor=E;var D=E,It=D,Ot=U,St=Ae;function Lt(t){if(t instanceof It)return t.clone();var e=new Ot(t.__wrapped__,t.__chain__);return e.__actions__=St(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}var Nt=Lt,kt=D,B=U,Ut=k,Dt=re,Tt=we,Pt=Nt,Wt=Object.prototype,jt=Wt.hasOwnProperty;function $(t){if(Tt(t)&&!Dt(t)&&!(t instanceof kt)){if(t instanceof B)return t;if(jt.call(t,"__wrapped__"))return Pt(t)}return new B(t)}$.prototype=Ut.prototype;$.prototype.constructor=$;var Mt=$,Vt=D,Gt=ue,zt=le,qt=Mt;function Bt(t){var e=zt(t),r=qt[e];if(typeof r!="function"||!(e in Vt.prototype))return!1;if(t===r)return!0;var o=Gt(r);return!!o&&t===o[0]}var Kt=Bt,K=U,Xt=Ce,Zt=ue,O=le,Yt=re,X=Kt,Ht="Expected a function",Jt=8,Qt=32,er=128,tr=256;function rr(t){return Xt(function(e){var r=e.length,o=r,g=K.prototype.thru;for(t&&e.reverse();o--;){var l=e[o];if(typeof l!="function")throw new TypeError(Ht);if(g&&!f&&O(l)=="wrapper")var f=new K([],!0)}for(o=f?o:r;++o<r;){l=e[o];var m=O(l),s=m=="wrapper"?Zt(l):void 0;s&&X(s[0])&&s[1]==(er|Jt|Qt|tr)&&!s[4].length&&s[9]==1?f=f[O(s[0])].apply(f,s[3]):f=l.length==1&&X(l)?f[m]():f.thru(l)}return function(){var h=arguments,c=h[0];if(f&&h.length==1&&Yt(c))return f.plant(c).value();for(var n=0,i=r?e[n].apply(this,h):c;++n<r;)i=e[n].call(this,i);return i}})}var nr=rr,ir=nr,ar=ir(),or=ar;const sr=v(or);var cr=xe,ur=1/0;function lr(t){var e=t==null?0:t.length;return e?cr(t,ur):[]}var fr=lr;const hr=v(fr);/**
 * uuidv7: An experimental implementation of the proposed UUID Version 7
 *
 * @license Apache-2.0
 * @copyright 2021-2023 LiosK
 * @packageDocumentation
 */const Z="0123456789abcdef";class A{constructor(e){this.bytes=e}static ofInner(e){if(e.length!==16)throw new TypeError("not 128-bit length");return new A(e)}static fromFieldsV7(e,r,o,g){if(!Number.isInteger(e)||!Number.isInteger(r)||!Number.isInteger(o)||!Number.isInteger(g)||e<0||r<0||o<0||g<0||e>0xffffffffffff||r>4095||o>1073741823||g>4294967295)throw new RangeError("invalid field value");const l=new Uint8Array(16);return l[0]=e/2**40,l[1]=e/2**32,l[2]=e/2**24,l[3]=e/2**16,l[4]=e/2**8,l[5]=e,l[6]=112|r>>>8,l[7]=r,l[8]=128|o>>>24,l[9]=o>>>16,l[10]=o>>>8,l[11]=o,l[12]=g>>>24,l[13]=g>>>16,l[14]=g>>>8,l[15]=g,new A(l)}static parse(e){var r;const g=(r=/^([0-9A-Fa-f]{8})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{4})-([0-9A-Fa-f]{12})$/.exec(e))===null||r===void 0?void 0:r.slice(1,6).join("");if(g){const l=new Uint8Array(16);for(let f=0;f<16;f+=4){const m=parseInt(g.substring(2*f,2*f+8),16);l[f+0]=m>>>24,l[f+1]=m>>>16,l[f+2]=m>>>8,l[f+3]=m}return new A(l)}else throw new SyntaxError("could not parse UUID string")}toString(){let e="";for(let r=0;r<this.bytes.length;r++)e+=Z.charAt(this.bytes[r]>>>4),e+=Z.charAt(this.bytes[r]&15),(r===3||r===5||r===7||r===9)&&(e+="-");return e}toJSON(){return this.toString()}getType(){return this.getVariant()}getVariant(){const e=this.bytes[8]>>>4;if(e<0)throw new Error("unreachable");if(e<=7)return this.bytes.every(r=>r===0)?"NIL":"VAR_0";if(e<=11)return"VAR_10";if(e<=13)return"VAR_110";if(e<=15)return this.bytes.every(r=>r===255)?"MAX":"VAR_RESERVED";throw new Error("unreachable")}getVersion(){return this.getVariant()==="VAR_10"?this.bytes[6]>>>4:void 0}clone(){return new A(this.bytes.slice(0))}equals(e){return this.compareTo(e)===0}compareTo(e){for(let r=0;r<16;r++){const o=this.bytes[r]-e.bytes[r];if(o!==0)return Math.sign(o)}return 0}}class T{constructor(e){this.random=e,this.timestamp=0,this.counter=0}static create(){return new T(new gr)}generate(){return this.generateOrResetCore(Date.now(),1e4)}generateOrAbort(){return this.generateOrAbortCore(Date.now(),1e4)}generateOrResetCore(e,r){let o=this.generateOrAbortCore(e,r);return o===void 0&&(this.timestamp=0,o=this.generateOrAbortCore(e,r)),o}generateOrAbortCore(e,r){if(!Number.isInteger(e)||e<1||e>0xffffffffffff)throw new RangeError("`unixTsMs` must be a 48-bit positive integer");if(r<0||r>0xffffffffffff)throw new RangeError("`rollbackAllowance` out of reasonable range");if(e>this.timestamp)this.timestamp=e,this.resetCounter();else if(e+r>this.timestamp)this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter());else return;return A.fromFieldsV7(this.timestamp,Math.trunc(this.counter/2**30),this.counter&2**30-1,this.random.nextUint32())}resetCounter(){this.counter=this.random.nextUint32()*1024+(this.random.nextUint32()&1023)}}let fe=t=>{if(typeof UUIDV7_DENY_WEAK_RNG<"u"&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available");for(let e=0;e<t.length;e++)t[e]=Math.trunc(Math.random()*65536)*65536+Math.trunc(Math.random()*65536);return t};typeof crypto<"u"&&crypto.getRandomValues&&(fe=t=>crypto.getRandomValues(t));class gr{constructor(){this.buffer=new Uint32Array(8),this.cursor=99}nextUint32(){return this.cursor>=this.buffer.length&&(fe(this.buffer),this.cursor=0),this.buffer[this.cursor++]}}let Y;const mr=()=>dr().toString(),dr=()=>(Y||(Y=T.create())).generate();var pr=Re,_r=N;function vr(t,e){return e.length<2?t:pr(t,_r(e,0,-1))}var br=vr,yr=Ee,Ar=se,wr=br,Cr=$e;function xr(t,e){return e=yr(e,t),t=wr(t,e),t==null||delete t[Cr(Ar(e))]}var Rr=xr,Er=Rr,$r=Fe,Fr=Array.prototype,Ir=Fr.splice;function Or(t,e){for(var r=t?e.length:0,o=r-1;r--;){var g=e[r];if(r==o||g!==l){var l=g;$r(g)?Ir.call(t,g,1):Er(t,g)}}return t}var Sr=Or,Lr=L,Nr=Sr;function kr(t,e){var r=[];if(!(t&&t.length))return r;var o=-1,g=[],l=t.length;for(e=Lr(e);++o<l;){var f=t[o];e(f,o,t)&&(r.push(f),g.push(o))}return Nr(t,g),r}var Ur=kr;const Dr=v(Ur);var Tr=N,Pr=ne,H=ie;function Wr(t,e,r){var o=t==null?0:t.length;return o?(r&&typeof r!="number"&&Pr(t,e,r)?(e=0,r=o):(e=e==null?0:H(e),r=r===void 0?o:H(r)),Tr(t,e,r)):[]}var jr=Wr;const Mr=v(jr);var Vr=L,Gr=Ke;function zr(t,e){return t&&t.length?Gr(t,Vr(e)):[]}var qr=zr;const Br=v(qr);var Kr=N,Xr=ne,Zr=ie,Yr=Math.ceil,Hr=Math.max;function Jr(t,e,r){(r?Xr(t,e,r):e===void 0)?e=1:e=Hr(Zr(e),0);var o=t==null?0:t.length;if(!o||e<1)return[];for(var g=0,l=0,f=Array(Yr(o/e));g<o;)f[l++]=Kr(t,g,g+=e);return f}var Qr=Jr;const en=v(Qr);var tn=Ie,rn=Xe,nn=Ze,an=ae,on=Oe,J=Se,sn=Math.min;function cn(t,e,r){for(var o=r?nn:rn,g=t[0].length,l=t.length,f=l,m=Array(l),s=1/0,h=[];f--;){var c=t[f];f&&e&&(c=an(c,on(e))),s=sn(c.length,s),m[f]=!r&&(e||g>=120&&c.length>=120)?new tn(f&&c):void 0}c=t[0];var n=-1,i=m[0];e:for(;++n<g&&h.length<s;){var u=c[n],a=e?e(u):u;if(u=r||u!==0?u:0,!(i?J(i,a):o(h,a,r))){for(f=l;--f;){var p=m[f];if(!(p?J(p,a):o(t[f],a,r)))continue e}i&&i.push(a),h.push(u)}}return h}var un=cn,ln=Le;function fn(t){return ln(t)?t:[]}var hn=fn,gn=ae,mn=un,dn=L,pn=Ne,_n=hn,Q=se,vn=pn(function(t){var e=Q(t),r=gn(t,_n);return e===Q(r)?e=void 0:r.pop(),r.length&&r[0]===t[0]?mn(r,dn(e)):[]}),bn=vn;const yn=v(bn);var he={exports:{}};(function(t,e){(function(r,o){t.exports=o()})(ke,function(){return function(r){function o(l){if(g[l])return g[l].exports;var f=g[l]={i:l,l:!1,exports:{}};return r[l].call(f.exports,f,f.exports,o),f.l=!0,f.exports}var g={};return o.m=r,o.c=g,o.i=function(l){return l},o.d=function(l,f,m){o.o(l,f)||Object.defineProperty(l,f,{configurable:!1,enumerable:!0,get:m})},o.n=function(l){var f=l&&l.__esModule?function(){return l.default}:function(){return l};return o.d(f,"a",f),f},o.o=function(l,f){return Object.prototype.hasOwnProperty.call(l,f)},o.p="",o(o.s=1)}([function(r,o,g){function l(s,h){if(!(s instanceof h))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var f=function(){function s(h,c){for(var n=0;n<c.length;n++){var i=c[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(h,i.key,i)}}return function(h,c,n){return c&&s(h.prototype,c),n&&s(h,n),h}}(),m=function(){function s(){l(this,s)}return f(s,null,[{key:"hash",value:function(h){return s.hex(s.md51(h))}},{key:"md5cycle",value:function(h,c){var n=h[0],i=h[1],u=h[2],a=h[3];n=s.ff(n,i,u,a,c[0],7,-680876936),a=s.ff(a,n,i,u,c[1],12,-389564586),u=s.ff(u,a,n,i,c[2],17,606105819),i=s.ff(i,u,a,n,c[3],22,-1044525330),n=s.ff(n,i,u,a,c[4],7,-176418897),a=s.ff(a,n,i,u,c[5],12,1200080426),u=s.ff(u,a,n,i,c[6],17,-1473231341),i=s.ff(i,u,a,n,c[7],22,-45705983),n=s.ff(n,i,u,a,c[8],7,1770035416),a=s.ff(a,n,i,u,c[9],12,-1958414417),u=s.ff(u,a,n,i,c[10],17,-42063),i=s.ff(i,u,a,n,c[11],22,-1990404162),n=s.ff(n,i,u,a,c[12],7,1804603682),a=s.ff(a,n,i,u,c[13],12,-40341101),u=s.ff(u,a,n,i,c[14],17,-1502002290),i=s.ff(i,u,a,n,c[15],22,1236535329),n=s.gg(n,i,u,a,c[1],5,-165796510),a=s.gg(a,n,i,u,c[6],9,-1069501632),u=s.gg(u,a,n,i,c[11],14,643717713),i=s.gg(i,u,a,n,c[0],20,-373897302),n=s.gg(n,i,u,a,c[5],5,-701558691),a=s.gg(a,n,i,u,c[10],9,38016083),u=s.gg(u,a,n,i,c[15],14,-660478335),i=s.gg(i,u,a,n,c[4],20,-405537848),n=s.gg(n,i,u,a,c[9],5,568446438),a=s.gg(a,n,i,u,c[14],9,-1019803690),u=s.gg(u,a,n,i,c[3],14,-187363961),i=s.gg(i,u,a,n,c[8],20,1163531501),n=s.gg(n,i,u,a,c[13],5,-1444681467),a=s.gg(a,n,i,u,c[2],9,-51403784),u=s.gg(u,a,n,i,c[7],14,1735328473),i=s.gg(i,u,a,n,c[12],20,-1926607734),n=s.hh(n,i,u,a,c[5],4,-378558),a=s.hh(a,n,i,u,c[8],11,-2022574463),u=s.hh(u,a,n,i,c[11],16,1839030562),i=s.hh(i,u,a,n,c[14],23,-35309556),n=s.hh(n,i,u,a,c[1],4,-1530992060),a=s.hh(a,n,i,u,c[4],11,1272893353),u=s.hh(u,a,n,i,c[7],16,-155497632),i=s.hh(i,u,a,n,c[10],23,-1094730640),n=s.hh(n,i,u,a,c[13],4,681279174),a=s.hh(a,n,i,u,c[0],11,-358537222),u=s.hh(u,a,n,i,c[3],16,-722521979),i=s.hh(i,u,a,n,c[6],23,76029189),n=s.hh(n,i,u,a,c[9],4,-640364487),a=s.hh(a,n,i,u,c[12],11,-421815835),u=s.hh(u,a,n,i,c[15],16,530742520),i=s.hh(i,u,a,n,c[2],23,-995338651),n=s.ii(n,i,u,a,c[0],6,-198630844),a=s.ii(a,n,i,u,c[7],10,1126891415),u=s.ii(u,a,n,i,c[14],15,-1416354905),i=s.ii(i,u,a,n,c[5],21,-57434055),n=s.ii(n,i,u,a,c[12],6,1700485571),a=s.ii(a,n,i,u,c[3],10,-1894986606),u=s.ii(u,a,n,i,c[10],15,-1051523),i=s.ii(i,u,a,n,c[1],21,-2054922799),n=s.ii(n,i,u,a,c[8],6,1873313359),a=s.ii(a,n,i,u,c[15],10,-30611744),u=s.ii(u,a,n,i,c[6],15,-1560198380),i=s.ii(i,u,a,n,c[13],21,1309151649),n=s.ii(n,i,u,a,c[4],6,-145523070),a=s.ii(a,n,i,u,c[11],10,-1120210379),u=s.ii(u,a,n,i,c[2],15,718787259),i=s.ii(i,u,a,n,c[9],21,-343485551),h[0]=n+h[0]&4294967295,h[1]=i+h[1]&4294967295,h[2]=u+h[2]&4294967295,h[3]=a+h[3]&4294967295}},{key:"cmn",value:function(h,c,n,i,u,a){return((c=(c+h&4294967295)+(i+a&4294967295)&4294967295)<<u|c>>>32-u)+n&4294967295}},{key:"ff",value:function(h,c,n,i,u,a,p){return s.cmn(c&n|~c&i,h,c,u,a,p)}},{key:"gg",value:function(h,c,n,i,u,a,p){return s.cmn(c&i|n&~i,h,c,u,a,p)}},{key:"hh",value:function(h,c,n,i,u,a,p){return s.cmn(c^n^i,h,c,u,a,p)}},{key:"ii",value:function(h,c,n,i,u,a,p){return s.cmn(n^(c|~i),h,c,u,a,p)}},{key:"md51",value:function(h){var c=h.length,n=[1732584193,-271733879,-1732584194,271733878],i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],u=0,a=64;for(a;a<=c;a+=64)s.md5cycle(n,s.md5blk(h.substring(a-64,a)));for(h=h.substring(a-64),a=0,u=h.length,a;a<u;a++)i[a>>2]|=h.charCodeAt(a)<<(a%4<<3);if(i[a>>2]|=128<<(a%4<<3),a>55)for(s.md5cycle(n,i),a=0;a<16;a++)i[a]=0;return i[14]=8*c,s.md5cycle(n,i),n}},{key:"md5blk",value:function(h){var c=[],n=0;for(n;n<64;n+=4)c[n>>2]=h.charCodeAt(n)+(h.charCodeAt(n+1)<<8)+(h.charCodeAt(n+2)<<16)+(h.charCodeAt(n+3)<<24);return c}},{key:"rhex",value:function(h){var c="";return c+=s.hexArray[h>>4&15]+s.hexArray[h>>0&15],c+=s.hexArray[h>>12&15]+s.hexArray[h>>8&15],c+=s.hexArray[h>>20&15]+s.hexArray[h>>16&15],c+=s.hexArray[h>>28&15]+s.hexArray[h>>24&15]}},{key:"hex",value:function(h){var c=h.length,n=0;for(n;n<c;n++)h[n]=s.rhex(h[n]);return h.join("")}}]),s}();m.hexArray=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],o.default=m},function(r,o,g){r.exports=g(0)}])})})(he);var An=he.exports;const wn=v(An);function Cn(t,e,r,o={}){const g=r!==void 0?{minimumFractionDigits:r,maximumFractionDigits:r}:{minimumFractionDigits:2,maximumFractionDigits:20},l={style:"currency",currency:e||Cicada.Context.app.systemCurrencyISOCode,...g,...o};let f="";try{f=t.toLocaleString(o.language??Cicada.State.get("session").currentLocale??"zh-CN",l)}catch(m){console.error(m),m.name==="RangeError"&&(l.style="decimal",delete l.currency,f=t.toLocaleString(o.language??Cicada.State.get("session").currentLocale??"zh-CN",l))}return f.replace(new RegExp("^[A-Za-z]+(?=\\p{Sc})","gu"),"").trim()}function xn(t,e={}){var f,m,s;if(!t)return"";const r=new Date(t);if(isNaN(r))return"";const o=Cicada.Application.getContainer("factory").locale.getLastKnownLocale(),g=((s=(m=(f=Cicada==null?void 0:Cicada.State)==null?void 0:f.get("session"))==null?void 0:m.currentUser)==null?void 0:s.timeZone)??"UTC";return new Intl.DateTimeFormat(o,{timeZone:e.skipTimezoneConversion?void 0:g,year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",...e}).format(r)}function Rn(t=new Date){var o;const e=((o=Cicada.State.get("session").currentUser)==null?void 0:o.timeZone)??"UTC",r=t.toLocaleDateString("en-GB",{timeZone:e,year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"});return new Date(r)}function ge(t){return wn.hash(t)}function En(t,e="zh-CN"){const o=["B","KB","MB","GB"];let g=Number.parseInt(String(t),10),l=0;for(;l<o.length;l+=1){const f=g/1024;if(f<.9)break;g=f}return`${g.toFixed(2).toLocaleString(e)}${o[l]}`}function $n(t,e=!0){const r=t.toISOString();return e?r:r.split("T")[0]}function Fn(t){return t instanceof HTMLElement?t.offsetHeight-t.clientHeight:0}function In(t){return t instanceof HTMLElement?t.offsetWidth-t.clientWidth:0}async function On(t){await navigator.clipboard.writeText(t)}const S={getScrollbarHeight:Fn,getScrollbarWidth:In,copyStringToClipboard:On};function P(t,e,r){t.onerror=()=>{t.abort(),r(new DOMException("Problem parsing file."))},t.onload=()=>{e(t.result)}}function me(t){const e=t.split(".");return e.length===1?{extension:"",fileName:t}:e.length===2&&!e[0]?{extension:"",fileName:t}:{extension:e.pop(),fileName:e.join(".")}}function Sn(t){const e=new FileReader;return new Promise((r,o)=>{P(e,r,o),e.readAsArrayBuffer(t)})}function Ln(t){const e=new FileReader;return new Promise((r,o)=>{P(e,r,o),e.readAsDataURL(t)})}function Nn(t){const e=new FileReader;return new Promise((r,o)=>{P(e,r,o),e.readAsText(t)})}function kn(t){return me(t.name)}function Un(t){let e=t.href.split("/").pop();if(!e)throw new Error("Invalid URL");const r=e.indexOf("?");return r>0&&(e=e.substring(0,r)),e=decodeURI(e),me(e)}const C={readFileAsArrayBuffer:Sn,readFileAsDataURL:Ln,readFileAsText:Nn,getNameAndExtensionFromFile:kn,getNameAndExtensionFromUrl:Un},Dn={afterSort:Tn};function Tn(t,e="afterId"){if(t.length===0)return t;t.sort((l,f)=>l.data[e]===f.data[e]&&l.data[e]===null?0:f.data[e]===null?1:l.data[e]===null?-1:0);const r=t.shift(),o=[r];let g=r&&r.id;for(;t.length>0;){let l=!0;if(t.forEach((f,m)=>{f.data[e]===g&&(o.push(f),g=f.id,t.splice(m,1),l=!1)}),l){const f=t.shift();if(o.push(f),!t.length)break;g=f&&f.data[e]}}return o}function Pn(){const t=Ye(),e=t==null?void 0:t.subTree,r=[];return e&&de(e,r),r}function de(t,e){if(t.component)e.push(t.component.proxy);else if(t.shapeFlag&16){const r=t.children;for(let o=0;o<r.length;o++)de(r[o],e)}}const Wn={getCompatChildren:Pn};function jn(t){return{all:t=t||new Map,on:function(e,r){var o=t.get(e);o?o.push(r):t.set(e,[r])},off:function(e,r){var o=t.get(e);o&&(r?o.splice(o.indexOf(r)>>>0,1):t.set(e,[]))},emit:function(e,r){var o=t.get(e);o&&o.slice().map(function(g){g(r)}),(o=t.get("*"))&&o.slice().map(function(g){g(e,r)})}}}const Mn=jn(),Vn={getPlaceholderSnippet:Gn};function Gn(t){switch(t){case"datetime":case"date":case"time":return`sw-datepicker.${t}.placeholder`;default:return""}}const zn={deepCopyObject:Ue,hasOwnProperty:De,getObjectDiff:Te,getArrayChanges:Pe,cloneDeep:We,merge:je,mergeWith:Me,deepMergeObject:Ve,get:oe,set:Ge,pick:ze},qn={warn:He,error:Je},Bn={currency:Cn,date:xn,dateWithUserTimezone:Rn,fileSize:En,md5:ge,toISODate:$n},Kn={getScrollbarHeight:S.getScrollbarHeight,getScrollbarWidth:S.getScrollbarWidth,copyStringToClipboard:S.copyStringToClipboard},Xn={capitalizeString:b.capitalizeString,camelCase:b.camelCase,upperFirst:b.upperFirst,kebabCase:b.kebabCase,snakeCase:b.snakeCase,md5:ge,isEmptyOrSpaces:b.isEmptyOrSpaces,isUrl:b.isUrl,isValidIp:b.isValidIp,isValidCidr:b.isValidCidr},Zn={isObject:_.isObject,isPlainObject:_.isPlainObject,isEmpty:_.isEmpty,isRegExp:_.isRegExp,isArray:_.isArray,isFunction:_.isFunction,isDate:_.isDate,isString:_.isString,isBoolean:_.isBoolean,isEqual:_.isEqual,isNumber:_.isNumber,isUndefined:qe},Yn={readAsArrayBuffer:C.readFileAsArrayBuffer,readAsDataURL:C.readFileAsDataURL,readAsText:C.readFileAsText,getNameAndExtensionFromFile:C.getNameAndExtensionFromFile,getNameAndExtensionFromUrl:C.getNameAndExtensionFromUrl},Hn={afterSort:Dn.afterSort},Jn={flattenDeep:hr,remove:Dr,slice:Mr,uniqBy:Br,chunk:en,intersectionBy:yn},Qn={getPlaceholderSnippet:Vn.getPlaceholderSnippet},ci={createId:ei,throttle:gt,debounce:st,flow:sr,get:oe,object:zn,debug:qn,format:Bn,dom:Kn,string:Xn,types:Zn,fileReader:Yn,sort:Hn,array:Jn,moveItem:ti,VueHelper:Wn,EventBus:Mn,genericRuleCondition:Qn};function ei(){return mr().replace(/-/g,"")}function ti(t,e,r){if(r===null&&(r=t.length),e<0||e>=t.length||r===e)return;const o=t.find((f,m)=>m===e);if(!o)return;const g=t.filter((f,m)=>m!==e),l=[...g.slice(0,r),o,...g.slice(r)];t.splice(0,t.length,...l)}export{Jn as a,Kn as d,Yn as f,zn as o,Zn as t,ci as u,He as w};
//# sourceMappingURL=util.service-B7bLiCAI.js.map
