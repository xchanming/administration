/*! @license DOMPurify 3.2.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.3/LICENSE */const{entries:Et,setPrototypeOf:st,isFrozen:Yt,getPrototypeOf:Xt,getOwnPropertyDescriptor:jt}=Object;let{freeze:A,seal:L,create:_t}=Object,{apply:Pe,construct:xe}=typeof Reflect<"u"&&Reflect;A||(A=function(n){return n});L||(L=function(n){return n});Pe||(Pe=function(n,s,l){return n.apply(s,l)});xe||(xe=function(n,s){return new n(...s)});const le=O(Array.prototype.forEach),lt=O(Array.prototype.pop),$=O(Array.prototype.push),ue=O(String.prototype.toLowerCase),Ne=O(String.prototype.toString),ct=O(String.prototype.match),V=O(String.prototype.replace),$t=O(String.prototype.indexOf),Vt=O(String.prototype.trim),b=O(Object.prototype.hasOwnProperty),h=O(RegExp.prototype.test),q=qt(TypeError);function O(r){return function(n){for(var s=arguments.length,l=new Array(s>1?s-1:0),T=1;T<s;T++)l[T-1]=arguments[T];return Pe(r,n,l)}}function qt(r){return function(){for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return xe(r,s)}}function a(r,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ue;st&&st(r,null);let l=n.length;for(;l--;){let T=n[l];if(typeof T=="string"){const N=s(T);N!==T&&(Yt(n)||(n[l]=N),T=N)}r[T]=!0}return r}function Kt(r){for(let n=0;n<r.length;n++)b(r,n)||(r[n]=null);return r}function w(r){const n=_t(null);for(const[s,l]of Et(r))b(r,s)&&(Array.isArray(l)?n[s]=Kt(l):l&&typeof l=="object"&&l.constructor===Object?n[s]=w(l):n[s]=l);return n}function K(r,n){for(;r!==null;){const l=jt(r,n);if(l){if(l.get)return O(l.get);if(typeof l.value=="function")return O(l.value)}r=Xt(r)}function s(){return null}return s}const ft=A(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Me=A(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ie=A(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Zt=A(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ce=A(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Jt=A(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ut=A(["#text"]),mt=A(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),we=A(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),pt=A(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ce=A(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Qt=L(/\{\{[\w\W]*|[\w\W]*\}\}/gm),en=L(/<%[\w\W]*|[\w\W]*%>/gm),tn=L(/\$\{[\w\W]*}/gm),nn=L(/^data-[\-\w.\u00B7-\uFFFF]+$/),on=L(/^aria-[\-\w]+$/),gt=L(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),an=L(/^(?:\w+script|data):/i),rn=L(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ht=L(/^html$/i),sn=L(/^[a-z][.\w]*(-[.\w]+)+$/i);var dt=Object.freeze({__proto__:null,ARIA_ATTR:on,ATTR_WHITESPACE:rn,CUSTOM_ELEMENT:sn,DATA_ATTR:nn,DOCTYPE_NAME:ht,ERB_EXPR:en,IS_ALLOWED_URI:gt,IS_SCRIPT_OR_DATA:an,MUSTACHE_EXPR:Qt,TMPLIT_EXPR:tn});const Z={element:1,text:3,progressingInstruction:7,comment:8,document:9},ln=function(){return typeof window>"u"?null:window},cn=function(n,s){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let l=null;const T="data-tt-policy-suffix";s&&s.hasAttribute(T)&&(l=s.getAttribute(T));const N="dompurify"+(l?"#"+l:"");try{return n.createPolicy(N,{createHTML(P){return P},createScriptURL(P){return P}})}catch{return console.warn("TrustedTypes policy "+N+" could not be created."),null}},Tt=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function At(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ln();const n=i=>At(i);if(n.version="3.2.3",n.removed=[],!r||!r.document||r.document.nodeType!==Z.document)return n.isSupported=!1,n;let{document:s}=r;const l=s,T=l.currentScript,{DocumentFragment:N,HTMLTemplateElement:P,Node:me,Element:ve,NodeFilter:H,NamedNodeMap:St=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:Rt,DOMParser:Ot,trustedTypes:Q}=r,G=ve.prototype,Lt=K(G,"cloneNode"),bt=K(G,"remove"),yt=K(G,"nextSibling"),Dt=K(G,"childNodes"),ee=K(G,"parentNode");if(typeof P=="function"){const i=s.createElement("template");i.content&&i.content.ownerDocument&&(s=i.content.ownerDocument)}let _,W="";const{implementation:pe,createNodeIterator:Nt,createDocumentFragment:Mt,getElementsByTagName:It}=s,{importNode:Ct}=l;let R=Tt();n.isSupported=typeof Et=="function"&&typeof ee=="function"&&pe&&pe.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:de,ERB_EXPR:Te,TMPLIT_EXPR:Ee,DATA_ATTR:wt,ARIA_ATTR:Pt,IS_SCRIPT_OR_DATA:xt,ATTR_WHITESPACE:ke,CUSTOM_ELEMENT:vt}=dt;let{IS_ALLOWED_URI:Ue}=dt,u=null;const Fe=a({},[...ft,...Me,...Ie,...Ce,...ut]);let p=null;const ze=a({},[...mt,...we,...pt,...ce]);let f=Object.seal(_t(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),B=null,_e=null,He=!0,ge=!0,Ge=!1,We=!0,x=!1,he=!0,C=!1,Ae=!1,Se=!1,v=!1,te=!1,ne=!1,Be=!0,Ye=!1;const kt="user-content-";let Re=!0,Y=!1,k={},U=null;const Xe=a({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let je=null;const $e=a({},["audio","video","img","source","image","track"]);let Oe=null;const Ve=a({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),oe="http://www.w3.org/1998/Math/MathML",ie="http://www.w3.org/2000/svg",M="http://www.w3.org/1999/xhtml";let F=M,Le=!1,be=null;const Ut=a({},[oe,ie,M],Ne);let ae=a({},["mi","mo","mn","ms","mtext"]),re=a({},["annotation-xml"]);const Ft=a({},["title","style","font","a","script"]);let X=null;const zt=["application/xhtml+xml","text/html"],Ht="text/html";let m=null,z=null;const Gt=s.createElement("form"),qe=function(e){return e instanceof RegExp||e instanceof Function},ye=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(z&&z===e)){if((!e||typeof e!="object")&&(e={}),e=w(e),X=zt.indexOf(e.PARSER_MEDIA_TYPE)===-1?Ht:e.PARSER_MEDIA_TYPE,m=X==="application/xhtml+xml"?Ne:ue,u=b(e,"ALLOWED_TAGS")?a({},e.ALLOWED_TAGS,m):Fe,p=b(e,"ALLOWED_ATTR")?a({},e.ALLOWED_ATTR,m):ze,be=b(e,"ALLOWED_NAMESPACES")?a({},e.ALLOWED_NAMESPACES,Ne):Ut,Oe=b(e,"ADD_URI_SAFE_ATTR")?a(w(Ve),e.ADD_URI_SAFE_ATTR,m):Ve,je=b(e,"ADD_DATA_URI_TAGS")?a(w($e),e.ADD_DATA_URI_TAGS,m):$e,U=b(e,"FORBID_CONTENTS")?a({},e.FORBID_CONTENTS,m):Xe,B=b(e,"FORBID_TAGS")?a({},e.FORBID_TAGS,m):{},_e=b(e,"FORBID_ATTR")?a({},e.FORBID_ATTR,m):{},k=b(e,"USE_PROFILES")?e.USE_PROFILES:!1,He=e.ALLOW_ARIA_ATTR!==!1,ge=e.ALLOW_DATA_ATTR!==!1,Ge=e.ALLOW_UNKNOWN_PROTOCOLS||!1,We=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,x=e.SAFE_FOR_TEMPLATES||!1,he=e.SAFE_FOR_XML!==!1,C=e.WHOLE_DOCUMENT||!1,v=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,ne=e.RETURN_TRUSTED_TYPE||!1,Se=e.FORCE_BODY||!1,Be=e.SANITIZE_DOM!==!1,Ye=e.SANITIZE_NAMED_PROPS||!1,Re=e.KEEP_CONTENT!==!1,Y=e.IN_PLACE||!1,Ue=e.ALLOWED_URI_REGEXP||gt,F=e.NAMESPACE||M,ae=e.MATHML_TEXT_INTEGRATION_POINTS||ae,re=e.HTML_INTEGRATION_POINTS||re,f=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&qe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&qe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),x&&(ge=!1),te&&(v=!0),k&&(u=a({},ut),p=[],k.html===!0&&(a(u,ft),a(p,mt)),k.svg===!0&&(a(u,Me),a(p,we),a(p,ce)),k.svgFilters===!0&&(a(u,Ie),a(p,we),a(p,ce)),k.mathMl===!0&&(a(u,Ce),a(p,pt),a(p,ce))),e.ADD_TAGS&&(u===Fe&&(u=w(u)),a(u,e.ADD_TAGS,m)),e.ADD_ATTR&&(p===ze&&(p=w(p)),a(p,e.ADD_ATTR,m)),e.ADD_URI_SAFE_ATTR&&a(Oe,e.ADD_URI_SAFE_ATTR,m),e.FORBID_CONTENTS&&(U===Xe&&(U=w(U)),a(U,e.FORBID_CONTENTS,m)),Re&&(u["#text"]=!0),C&&a(u,["html","head","body"]),u.table&&(a(u,["tbody"]),delete B.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');_=e.TRUSTED_TYPES_POLICY,W=_.createHTML("")}else _===void 0&&(_=cn(Q,T)),_!==null&&typeof W=="string"&&(W=_.createHTML(""));A&&A(e),z=e}},Ke=a({},[...Me,...Ie,...Zt]),Ze=a({},[...Ce,...Jt]),Wt=function(e){let t=ee(e);(!t||!t.tagName)&&(t={namespaceURI:F,tagName:"template"});const o=ue(e.tagName),c=ue(t.tagName);return be[e.namespaceURI]?e.namespaceURI===ie?t.namespaceURI===M?o==="svg":t.namespaceURI===oe?o==="svg"&&(c==="annotation-xml"||ae[c]):!!Ke[o]:e.namespaceURI===oe?t.namespaceURI===M?o==="math":t.namespaceURI===ie?o==="math"&&re[c]:!!Ze[o]:e.namespaceURI===M?t.namespaceURI===ie&&!re[c]||t.namespaceURI===oe&&!ae[c]?!1:!Ze[o]&&(Ft[o]||!Ke[o]):!!(X==="application/xhtml+xml"&&be[e.namespaceURI]):!1},y=function(e){$(n.removed,{element:e});try{ee(e).removeChild(e)}catch{bt(e)}},se=function(e,t){try{$(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{$(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is")if(v||te)try{y(t)}catch{}else try{t.setAttribute(e,"")}catch{}},Je=function(e){let t=null,o=null;if(Se)e="<remove></remove>"+e;else{const d=ct(e,/^[\r\n\t ]+/);o=d&&d[0]}X==="application/xhtml+xml"&&F===M&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const c=_?_.createHTML(e):e;if(F===M)try{t=new Ot().parseFromString(c,X)}catch{}if(!t||!t.documentElement){t=pe.createDocument(F,"template",null);try{t.documentElement.innerHTML=Le?W:c}catch{}}const E=t.body||t.documentElement;return e&&o&&E.insertBefore(s.createTextNode(o),E.childNodes[0]||null),F===M?It.call(t,C?"html":"body")[0]:C?t.documentElement:E},Qe=function(e){return Nt.call(e.ownerDocument||e,e,H.SHOW_ELEMENT|H.SHOW_COMMENT|H.SHOW_TEXT|H.SHOW_PROCESSING_INSTRUCTION|H.SHOW_CDATA_SECTION,null)},De=function(e){return e instanceof Rt&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof St)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},et=function(e){return typeof me=="function"&&e instanceof me};function I(i,e,t){le(i,o=>{o.call(n,e,t,z)})}const tt=function(e){let t=null;if(I(R.beforeSanitizeElements,e,null),De(e))return y(e),!0;const o=m(e.nodeName);if(I(R.uponSanitizeElement,e,{tagName:o,allowedTags:u}),e.hasChildNodes()&&!et(e.firstElementChild)&&h(/<[/\w]/g,e.innerHTML)&&h(/<[/\w]/g,e.textContent)||e.nodeType===Z.progressingInstruction||he&&e.nodeType===Z.comment&&h(/<[/\w]/g,e.data))return y(e),!0;if(!u[o]||B[o]){if(!B[o]&&ot(o)&&(f.tagNameCheck instanceof RegExp&&h(f.tagNameCheck,o)||f.tagNameCheck instanceof Function&&f.tagNameCheck(o)))return!1;if(Re&&!U[o]){const c=ee(e)||e.parentNode,E=Dt(e)||e.childNodes;if(E&&c){const d=E.length;for(let S=d-1;S>=0;--S){const D=Lt(E[S],!0);D.__removalCount=(e.__removalCount||0)+1,c.insertBefore(D,yt(e))}}}return y(e),!0}return e instanceof ve&&!Wt(e)||(o==="noscript"||o==="noembed"||o==="noframes")&&h(/<\/no(script|embed|frames)/i,e.innerHTML)?(y(e),!0):(x&&e.nodeType===Z.text&&(t=e.textContent,le([de,Te,Ee],c=>{t=V(t,c," ")}),e.textContent!==t&&($(n.removed,{element:e.cloneNode()}),e.textContent=t)),I(R.afterSanitizeElements,e,null),!1)},nt=function(e,t,o){if(Be&&(t==="id"||t==="name")&&(o in s||o in Gt))return!1;if(!(ge&&!_e[t]&&h(wt,t))){if(!(He&&h(Pt,t))){if(!p[t]||_e[t]){if(!(ot(e)&&(f.tagNameCheck instanceof RegExp&&h(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&h(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||t==="is"&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&h(f.tagNameCheck,o)||f.tagNameCheck instanceof Function&&f.tagNameCheck(o))))return!1}else if(!Oe[t]){if(!h(Ue,V(o,ke,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&$t(o,"data:")===0&&je[e])){if(!(Ge&&!h(xt,V(o,ke,"")))){if(o)return!1}}}}}}return!0},ot=function(e){return e!=="annotation-xml"&&ct(e,vt)},it=function(e){I(R.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||De(e))return;const o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:p,forceKeepAttr:void 0};let c=t.length;for(;c--;){const E=t[c],{name:d,namespaceURI:S,value:D}=E,j=m(d);let g=d==="value"?D:Vt(D);if(o.attrName=j,o.attrValue=g,o.keepAttr=!0,o.forceKeepAttr=void 0,I(R.uponSanitizeAttribute,e,o),g=o.attrValue,Ye&&(j==="id"||j==="name")&&(se(d,e),g=kt+g),he&&h(/((--!?|])>)|<\/(style|title)/i,g)){se(d,e);continue}if(o.forceKeepAttr||(se(d,e),!o.keepAttr))continue;if(!We&&h(/\/>/i,g)){se(d,e);continue}x&&le([de,Te,Ee],rt=>{g=V(g,rt," ")});const at=m(e.nodeName);if(nt(at,j,g)){if(_&&typeof Q=="object"&&typeof Q.getAttributeType=="function"&&!S)switch(Q.getAttributeType(at,j)){case"TrustedHTML":{g=_.createHTML(g);break}case"TrustedScriptURL":{g=_.createScriptURL(g);break}}try{S?e.setAttributeNS(S,d,g):e.setAttribute(d,g),De(e)?y(e):lt(n.removed)}catch{}}}I(R.afterSanitizeAttributes,e,null)},Bt=function i(e){let t=null;const o=Qe(e);for(I(R.beforeSanitizeShadowDOM,e,null);t=o.nextNode();)I(R.uponSanitizeShadowNode,t,null),tt(t),it(t),t.content instanceof N&&i(t.content);I(R.afterSanitizeShadowDOM,e,null)};return n.sanitize=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,o=null,c=null,E=null;if(Le=!i,Le&&(i="<!-->"),typeof i!="string"&&!et(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw q("dirty is not a string, aborting")}else throw q("toString is not a function");if(!n.isSupported)return i;if(Ae||ye(e),n.removed=[],typeof i=="string"&&(Y=!1),Y){if(i.nodeName){const D=m(i.nodeName);if(!u[D]||B[D])throw q("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof me)t=Je("<!---->"),o=t.ownerDocument.importNode(i,!0),o.nodeType===Z.element&&o.nodeName==="BODY"||o.nodeName==="HTML"?t=o:t.appendChild(o);else{if(!v&&!x&&!C&&i.indexOf("<")===-1)return _&&ne?_.createHTML(i):i;if(t=Je(i),!t)return v?null:ne?W:""}t&&Se&&y(t.firstChild);const d=Qe(Y?i:t);for(;c=d.nextNode();)tt(c),it(c),c.content instanceof N&&Bt(c.content);if(Y)return i;if(v){if(te)for(E=Mt.call(t.ownerDocument);t.firstChild;)E.appendChild(t.firstChild);else E=t;return(p.shadowroot||p.shadowrootmode)&&(E=Ct.call(l,E,!0)),E}let S=C?t.outerHTML:t.innerHTML;return C&&u["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&h(ht,t.ownerDocument.doctype.name)&&(S="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+S),x&&le([de,Te,Ee],D=>{S=V(S,D," ")}),_&&ne?_.createHTML(S):S},n.setConfig=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ye(i),Ae=!0},n.clearConfig=function(){z=null,Ae=!1},n.isValidAttribute=function(i,e,t){z||ye({});const o=m(i),c=m(e);return nt(o,c,t)},n.addHook=function(i,e){typeof e=="function"&&$(R[i],e)},n.removeHook=function(i){return lt(R[i])},n.removeHooks=function(i){R[i]=[]},n.removeAllHooks=function(){R=Tt()},n}var J=At();const fe=["beforeSanitizeElements","uponSanitizeElement","afterSanitizeElements","beforeSanitizeAttributes","uponSanitizeAttribute","afterSanitizeAttributes","beforeSanitizeShadowDOM","uponSanitizeShadowNode","afterSanitizeShadowDOM"];class fn{static setConfig(n){return J.setConfig(n)}static clearConfig(){return J.clearConfig()}static addMiddleware(n,s=()=>{}){return fe.includes(n)?(J.addHook(n,s),!0):(Shopware.Utils.debug.warn("Sanitizer",`No middleware found for name "${n}",
                the following are available: ${fe.join(", ")}`),!1)}static removeMiddleware(n){return fe.includes(n)?(J.removeHooks(n),!0):(Shopware.Utils.debug.warn("Sanitizer",`No middleware found for name "${n}",
                the following are available: ${fe.join(", ")}`),!1)}static sanitize(n,s={}){return J.sanitize(n,s)}}export{fn as S};
