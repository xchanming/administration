import{A as a}from"./api.service-DUFBkRAb.js";import"./channel-Cvr-E4M4.js";class c extends a{constructor(t,e,s="usage-data"){super(t,e,s,"application/json"),this.name="usageDataService"}async getConsent(){const t=this.getBasicHeaders(),e={},{data:s}=await this.httpClient.get(`/${this.getApiBasePath()}/consent`,{params:e,headers:t});return s}async acceptConsent(){await this.httpClient.post(`/${this.getApiBasePath()}/accept-consent`,null,{headers:this.getBasicHeaders()})}async revokeConsent(){await this.httpClient.post(`/${this.getApiBasePath()}/revoke-consent`,null,{headers:this.getBasicHeaders()})}async hideBanner(){await this.httpClient.post(`/${this.getApiBasePath()}/hide-consent-banner`,null,{headers:this.getBasicHeaders()})}}export{c as default};
