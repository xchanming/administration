const i=Cicada.Classes.ApiService;class p extends i{constructor(e,t,s="snippet-set"){super(e,t,s),this.name="snippetSetService"}getCustomList(e=1,t=25,s={},a={}){const n=this.getBasicHeaders();return a={...{sortBy:"id",sortDirection:"ASC"},...a},this.httpClient.post(`/_action/${this.getApiBasePath()}`,{page:e,limit:t,filters:s,sort:a},{headers:n}).then(r=>i.handleResponse(r))}getBaseFiles(){const e={},t=this.getBasicHeaders();return this.httpClient.get(`/_action/${this.getApiBasePath()}/baseFile`,{params:e,headers:t}).then(s=>i.handleResponse(s))}getAuthors(){const e=this.getBasicHeaders();return this.httpClient.get(`/_action/${this.getApiBasePath()}/author`,{headers:e}).then(t=>i.handleResponse(t))}}export{p as default};
//# sourceMappingURL=snippet-set.api.service-DG2xUDqG.js.map
