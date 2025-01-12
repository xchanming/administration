const __vite__fileDeps=["assets/index-CdyhS-Iw.js","assets/index-CAwfPTqK.css","assets/index-DjqbKCcl.js","assets/index-DOAWCy75.css","assets/index-DemJAhAk.js","assets/index-0IP-NES2.css","assets/index-myW_L55G.js","assets/index-De_jJ9l9.css","assets/index-DLxXbdVt.js","assets/index-DGf6dPXb.css","assets/index-oPoKrA3w.js","assets/index-CiVFztUj.js","assets/index-BPLeS_9Q.css","assets/index-m0gpS0RP.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./administration-DCOj2uiN.js";import p from"./excludedSearchTerm.api.service-puUvEywP.js";import"./api.service-C76VAMec.js";import"./channel-oRk5-XZJ.js";const _=Cicada.Classes.ApiService;class g extends _{constructor(r,t,i="product.indexer"){super(r,t,i),this.name="liveSearchService"}index(r){const t="/_action/indexing/product.indexer",i=this.getHeaders();return this.httpClient.post(t,{offset:r},{headers:i})}getHeaders(){return{Accept:"application/json",Authorization:`Bearer ${this.loginService.getToken()}`,"Content-Type":"application/json"}}}const h=Cicada.Classes.ApiService;class l extends h{constructor(r,t,i="search"){super(r,t,i),this.name="liveSearchService"}search({salesChannelId:r,search:t},i,s={},a={}){const n=`_proxy/store-api/${r}/search`,o={salesChannelId:r,search:t},d={...this.getBasicHeaders(a),"sw-context-token":i};return this.httpClient.post(n,o,{additionalParams:s,headers:d})}}Cicada.Service().register("productIndexService",()=>new g(Cicada.Application.getContainer("init").httpClient,Cicada.Service("loginService")));Cicada.Service().register("liveSearchService",()=>new l(Cicada.Application.getContainer("init").httpClient,Cicada.Service("loginService")));Cicada.Service().register("excludedSearchTermService",()=>new p(Cicada.Application.getContainer("init").httpClient,Cicada.Service("loginService")));Cicada.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"settings",key:"product_search_config",roles:{viewer:{privileges:["product_search_config:read","product_search_config_field:read","custom_field_set:read","product_search_keyword:read","product:read","sales_channel:read","custom_field:read","system:clear:cache"],dependencies:[]},editor:{privileges:["product_search_config:update","product_search_config_field:update","product_search_keyword:update","system:clear:cache"],dependencies:["product_search_config.viewer"]},creator:{privileges:["product_search_config:create","product_search_config_field:create","product_search_keyword:create","system:clear:cache"],dependencies:["product_search_config.viewer","product_search_config.editor"]},deleter:{privileges:["product_search_config:delete","product_search_config_field:delete","product_search_keyword:delete","product_search_config:update","system:clear:cache"],dependencies:["product_search_config.viewer"]}}});const{Module:u}=Cicada;Cicada.Component.register("sw-settings-search",()=>e(()=>import("./index-CBDV6d6R.js"),[]));Cicada.Component.register("sw-settings-search-view-general",()=>e(()=>import("./index-RN0lZWZ2.js"),[]));Cicada.Component.register("sw-settings-search-view-live-search",()=>e(()=>import("./index-BDVgYMRh.js"),[]));Cicada.Component.register("sw-settings-search-search-behaviour",()=>e(()=>import("./index-CdyhS-Iw.js"),__vite__mapDeps([0,1])));Cicada.Component.register("sw-settings-search-searchable-content",()=>e(()=>import("./index-DjqbKCcl.js"),__vite__mapDeps([2,3])));Cicada.Component.register("sw-settings-search-example-modal",()=>e(()=>import("./index-DemJAhAk.js"),__vite__mapDeps([4,5])));Cicada.Component.register("sw-settings-search-searchable-content-general",()=>e(()=>import("./index-DMk1Q_kj.js"),[]));Cicada.Component.register("sw-settings-search-searchable-content-customfields",()=>e(()=>import("./index-DSt7d9y_.js"),[]));Cicada.Component.register("sw-settings-search-excluded-search-terms",()=>e(()=>import("./index-myW_L55G.js"),__vite__mapDeps([6,7])));Cicada.Component.register("sw-settings-search-search-index",()=>e(()=>import("./index-DLxXbdVt.js"),__vite__mapDeps([8,9])));Cicada.Component.register("sw-settings-search-live-search",()=>e(()=>import("./index-oPoKrA3w.js"),__vite__mapDeps([10,11,12,13])));Cicada.Component.register("sw-settings-search-live-search-keyword",()=>e(()=>import("./index-CiVFztUj.js"),__vite__mapDeps([11,12])));u.register("sw-settings-search",{type:"core",name:"settings-product-search-config",title:"sw-settings-search.general.mainMenuItemGeneral",description:"sw-settings-snippet.general.description",version:"1.0.0",targetVersion:"1.0.0",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"product_search_config",routes:{index:{component:"sw-settings-search",path:"index",meta:{parentPath:"sw.settings.index",privilege:"product_search_config.viewer"},redirect:{name:"sw.settings.search.index.general"},children:{general:{component:"sw-settings-search-view-general",path:"general",meta:{parentPath:"sw.settings.index",privilege:"product_search_config.viewer"}},liveSearch:{component:"sw-settings-search-view-live-search",path:"live-search",meta:{parentPath:"sw.settings.index",privilege:"product_search_config.viewer"}}}}},settingsItem:{group:"shop",to:"sw.settings.search.index",icon:"regular-search",privilege:"product_search_config.viewer"}});
//# sourceMappingURL=index-C_6RDalP.js.map
