var c=Object.defineProperty;var m=(a,n,e)=>n in a?c(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e;var p=(a,n,e)=>m(a,typeof n!="symbol"?n+"":n,e);import{E as l}from"./error-resolver.system-config.data-Cbnv_v_4.js";import{A as o}from"./api.service-BUA61cyq.js";import"./CicadaError-VTJe91--.js";import"./util.service-B_A8c2s1.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";import"./_baseUniq-B2mRmqmX.js";import"./_baseIteratee-vB4JeBI0.js";import"./camelCase-C_yyocYD.js";import"./string.utils-Bdo6o_1y.js";class H extends o{constructor(e,s,r="system-config"){super(e,s,r);p(this,"errorResolver");this.name="systemConfigApiService",this.errorResolver=new l}checkConfig(e,s={},r={}){return this.httpClient.get("_action/system-config/check",{params:{domain:e,...s},headers:this.getBasicHeaders(r)}).then(t=>o.handleResponse(t))}getConfig(e,s={},r={}){return this.httpClient.get("_action/system-config/schema",{params:{domain:e,...s},headers:this.getBasicHeaders(r)}).then(t=>o.handleResponse(t))}getValues(e,s=null,r={},t={}){return this.httpClient.get("_action/system-config",{params:{domain:e,salesChannelId:s,...r},headers:this.getBasicHeaders(t)}).then(i=>o.handleResponse(i)).then(i=>Array.isArray(i)?{}:i)}saveValues(e,s=null,r={},t={}){return this.httpClient.post("_action/system-config",e,{params:{salesChannelId:s,...r},headers:this.getBasicHeaders(t)}).then(i=>o.handleResponse(i))}batchSave(e,s={},r={}){return this.httpClient.post("_action/system-config/batch",e,{params:{...s},headers:this.getBasicHeaders(r)}).then(t=>(this.errorResolver.cleanWriteErrors(),o.handleResponse(t))).catch(t=>{var i,h;throw this.errorResolver.handleWriteErrors((h=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:h.errors),t})}}export{H as default};
//# sourceMappingURL=system-config.api.service--Sm0e3iY.js.map
