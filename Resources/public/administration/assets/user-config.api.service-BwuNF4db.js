import{A as i}from"./api.service-BUA61cyq.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";class c extends i{constructor(e,t,s="_info/config-me"){super(e,t,s),this.name="userConfigService"}search(e=null){const t=this.getBasicHeaders(),s={keys:e};return this.httpClient.get(this.getApiBasePath(),{params:s,headers:t}).then(r=>i.handleResponse(r)).catch(r=>{Cicada.Utils.debug.error(r)})}upsert(e){const t=this.getBasicHeaders();return this.httpClient.post(this.getApiBasePath(),e,{headers:t}).then(s=>i.handleResponse(s))}}export{c as default};
//# sourceMappingURL=user-config.api.service-BwuNF4db.js.map
