import{A as s}from"./api.service-DUFBkRAb.js";import"./channel-Cvr-E4M4.js";class f extends s{constructor(e,i,t="config"){super(e,i,t),this.name="configService"}getConfig(e={},i={}){const t=e,n=this.getBasicHeaders(i);return new Promise(o=>{this.httpClient.get("/_info/config",{params:t,headers:n}).then(r=>{o(s.handleResponse(r))})})}}export{f as default};
