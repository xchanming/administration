import{A as t}from"./api.service-DUFBkRAb.js";import"./channel-Cvr-E4M4.js";class o extends t{constructor(e,s){super(e,s,"","application/json"),this.name="appModulesService"}async fetchAppModules(){const{data:e}=await this.httpClient.get("app-system/modules",{headers:this.getBasicHeaders()});return e.modules}}export{o as default};
