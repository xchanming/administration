import{A as s}from"./api.service-DUFBkRAb.js";import"./channel-Cvr-E4M4.js";class p extends s{constructor(e,t){super(e,t,null,"application/json"),this.name="appUrlChangeService"}fetchResolverStrategies(){return this.httpClient.get("app-system/app-url-change/strategies",{headers:this.getBasicHeaders()}).then(({data:e})=>Object.entries(e).map(([t,r])=>({name:t,description:r})))}resolveUrlChange({name:e}){return this.httpClient.post("app-system/app-url-change/resolve",{strategy:e},{headers:this.getBasicHeaders()})}getUrlDiff(){return this.httpClient.get("app-system/app-url-change/url-difference",{headers:this.getBasicHeaders()}).then(e=>e.status===204?null:e.data)}}export{p as default};
