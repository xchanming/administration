import{A as s}from"./api.service-C76VAMec.js";import"./channel-oRk5-XZJ.js";import"./administration-DCOj2uiN.js";class h extends s{constructor(e,t){super(e,t,null,"application/json"),this.name="appUrlChangeService"}fetchResolverStrategies(){return this.httpClient.get("app-system/app-url-change/strategies",{headers:this.getBasicHeaders()}).then(({data:e})=>Object.entries(e).map(([t,r])=>({name:t,description:r})))}resolveUrlChange({name:e}){return this.httpClient.post("app-system/app-url-change/resolve",{strategy:e},{headers:this.getBasicHeaders()})}getUrlDiff(){return this.httpClient.get("app-system/app-url-change/url-difference",{headers:this.getBasicHeaders()}).then(e=>e.status===204?null:e.data)}}export{h as default};
//# sourceMappingURL=app-url-change.service-gKWuaV9Q.js.map
