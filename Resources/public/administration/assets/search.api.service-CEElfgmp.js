var p=Object.defineProperty;var b=(o,e,r)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var n=(o,e,r)=>b(o,typeof e!="symbol"?e+"":e,r);import{a as l}from"./shopware-BFUjT57S.js";import{A as h}from"./api.service-DUFBkRAb.js";import"./util.service-DptoGcql.js";import"./channel-Cvr-E4M4.js";import"./_baseUniq-DJKU6o6f.js";import"./_baseIteratee-BDDcCv4P.js";import"./camelCase-FN5n0J2F.js";import"./string.utils-B0MdTyu7.js";import"./extension-api-data.service-BNEYYFaA.js";import"./sanitizer.helper-WLpaaNbZ.js";import"./promotion.helper-CtcaAhvM.js";import"./administration-CcAM5iN0.js";import"./order.types-BvKP5qzO.js";class P extends h{constructor(r,s,a="_admin"){super(r,s,a);n(this,"searchAbortController",null);this.name="searchService"}elastic(r,s,a,t={}){const c=this.getBasicHeaders(t);return this.searchAbortController&&!this.searchAbortController.signal.aborted&&this.searchAbortController.abort(),this.searchAbortController=new AbortController,this.httpClient.post(`${this.getApiBasePath()}/es-search`,{term:r,limit:a,entities:s},{headers:c,signal:this.searchAbortController.signal}).then(i=>h.handleResponse(i)).catch(i=>{if(i instanceof l.CanceledError)return{};throw i})}searchQuery(r={},s={}){const a=this.getBasicHeaders(s);return Object.keys(r).forEach(t=>{typeof r[t].parse=="function"&&(r[t]=r[t].parse())}),this.searchAbortController&&!this.searchAbortController.signal.aborted&&this.searchAbortController.abort(),this.searchAbortController=new AbortController,this.httpClient.post(`${this.getApiBasePath()}/search`,r,{headers:a,signal:this.searchAbortController.signal}).then(t=>h.handleResponse(t)).catch(t=>{if(t instanceof l.CanceledError)return{};throw t})}}export{P as default};
