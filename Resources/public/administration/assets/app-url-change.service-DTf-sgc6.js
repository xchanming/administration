import{A as s}from"./api.service-BUA61cyq.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";class h extends s{constructor(e,t){super(e,t,null,"application/json"),this.name="appUrlChangeService"}fetchResolverStrategies(){return this.httpClient.get("app-system/app-url-change/strategies",{headers:this.getBasicHeaders()}).then(({data:e})=>Object.entries(e).map(([t,r])=>({name:t,description:r})))}resolveUrlChange({name:e}){return this.httpClient.post("app-system/app-url-change/resolve",{strategy:e},{headers:this.getBasicHeaders()})}getUrlDiff(){return this.httpClient.get("app-system/app-url-change/url-difference",{headers:this.getBasicHeaders()}).then(e=>e.status===204?null:e.data)}}export{h as default};
//# sourceMappingURL=app-url-change.service-DTf-sgc6.js.map
