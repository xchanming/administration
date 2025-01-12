const n=Cicada.Classes.ApiService;class c extends n{constructor(e,s,t="language-plugins"){super(e,s,t),this.name="languagePluginService"}getPlugins(e={},s={}){const t=e,a=this.getBasicHeaders(s);return this.httpClient.get(`/_action/store/${this.apiEndpoint}`,{params:t,headers:a}).then(i=>n.handleResponse(i))}}export{c as default};
//# sourceMappingURL=language-plugin.api.service-DN_zsfpj.js.map
