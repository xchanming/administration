const n=Cicada.Classes.ApiService;class p extends n{constructor(e,t,s="integration"){super(e,t,s),this.name="integrationService"}generateKey(e={},t={},s=!1){const a=e,i=this.getBasicHeaders(t),r=s?"/_action/access-key/user":"/_action/access-key/intergration";return this.httpClient.get(r,{params:a,headers:i}).then(c=>n.handleResponse(c))}}export{p as default};
//# sourceMappingURL=integration.api.service-DqvoQp0q.js.map
