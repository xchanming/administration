import{A as n}from"./api.service-DUFBkRAb.js";import"./channel-Cvr-E4M4.js";class h extends n{constructor(e,t,s="seo-url"){super(e,t,s),this.name="seoUrlService"}updateCanonicalUrl(e,t,s={},a={}){const r=`/_action/${this.getApiBasePath()}/canonical`;return Object.assign(a,{"sw-language-id":t}),this.httpClient.patch(r,e,{params:s,headers:this.getBasicHeaders(a)}).then(i=>n.handleResponse(i))}createCustomUrl(e,t,s={},a={}){const r=`/_action/${this.getApiBasePath()}/create-custom-url`;return this.httpClient.post(r,{routeName:e,urls:t},{params:s,headers:this.getBasicHeaders(a)}).then(i=>n.handleResponse(i))}}export{h as default};
