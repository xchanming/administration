const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BOkh6Lwu.js","assets/index-wDKx5rL-.css","assets/index-Dn8VXUOI.js","assets/index-9_EW9iOn.css","assets/index-CWA0YpYz.js","assets/index-DbUbOl8n.css","assets/index-CeOYqKgk.js","assets/index-Do3Hcyjs.css","assets/index-DsN2XKYY.js","assets/index-Di93_xbF.css","assets/index-wcdSR1fr.js","assets/index-D4rDUwf1.css","assets/sw-settings-search-live-search-keyword-ByDKTR2-.css","assets/index-Cyu8yEXw.js"])))=>i.map(i=>d[i]);
import{_ as e}from"./administration-d9Z5Qnc-.js";import d from"./excludedSearchTerm.api.service-AEhezz8Y.js";import"./api.service-DUFBkRAb.js";import"./channel-Cvr-E4M4.js";const _=Shopware.Classes.ApiService;class h extends _{constructor(r,t,i="product.indexer"){super(r,t,i),this.name="liveSearchService"}index(r){const t="/_action/indexing/product.indexer",i=this.getHeaders();return this.httpClient.post(t,{offset:r},{headers:i})}getHeaders(){return{Accept:"application/json",Authorization:`Bearer ${this.loginService.getToken()}`,"Content-Type":"application/json"}}}const g=Shopware.Classes.ApiService;class u extends g{constructor(r,t,i="search"){super(r,t,i),this.name="liveSearchService"}search({salesChannelId:r,search:t},i,n={},c={}){const o=`_proxy/store-api/${r}/search`,a={salesChannelId:r,search:t},p={...this.getBasicHeaders(c),"sw-context-token":i};return this.httpClient.post(o,a,{additionalParams:n,headers:p})}}Shopware.Service().register("productIndexService",()=>new h(Shopware.Application.getContainer("init").httpClient,Shopware.Service("loginService")));Shopware.Service().register("liveSearchService",()=>new u(Shopware.Application.getContainer("init").httpClient,Shopware.Service("loginService")));Shopware.Service().register("excludedSearchTermService",()=>new d(Shopware.Application.getContainer("init").httpClient,Shopware.Service("loginService")));Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"settings",key:"product_search_config",roles:{viewer:{privileges:["product_search_config:read","product_search_config_field:read","custom_field_set:read","product_search_keyword:read","product:read","sales_channel:read","custom_field:read","system:clear:cache"],dependencies:[]},editor:{privileges:["product_search_config:update","product_search_config_field:update","product_search_keyword:update","system:clear:cache"],dependencies:["product_search_config.viewer"]},creator:{privileges:["product_search_config:create","product_search_config_field:create","product_search_keyword:create","system:clear:cache"],dependencies:["product_search_config.viewer","product_search_config.editor"]},deleter:{privileges:["product_search_config:delete","product_search_config_field:delete","product_search_keyword:delete","product_search_config:update","system:clear:cache"],dependencies:["product_search_config.viewer"]}}});const{Module:l}=Shopware;Shopware.Component.register("sw-settings-search",()=>e(()=>import("./index-B1DXF8Ko.js"),[]));Shopware.Component.register("sw-settings-search-view-general",()=>e(()=>import("./index-BDt7JT7Z.js"),[]));Shopware.Component.register("sw-settings-search-view-live-search",()=>e(()=>import("./index-BljOaIKa.js"),[]));Shopware.Component.register("sw-settings-search-search-behaviour",()=>e(()=>import("./index-BOkh6Lwu.js"),__vite__mapDeps([0,1])));Shopware.Component.register("sw-settings-search-searchable-content",()=>e(()=>import("./index-Dn8VXUOI.js"),__vite__mapDeps([2,3])));Shopware.Component.register("sw-settings-search-example-modal",()=>e(()=>import("./index-CWA0YpYz.js"),__vite__mapDeps([4,5])));Shopware.Component.register("sw-settings-search-searchable-content-general",()=>e(()=>import("./index-C8fYKtpA.js"),[]));Shopware.Component.register("sw-settings-search-searchable-content-customfields",()=>e(()=>import("./index-DdiNF9Pt.js"),[]));Shopware.Component.register("sw-settings-search-excluded-search-terms",()=>e(()=>import("./index-CeOYqKgk.js"),__vite__mapDeps([6,7])));Shopware.Component.register("sw-settings-search-search-index",()=>e(()=>import("./index-DsN2XKYY.js"),__vite__mapDeps([8,9])));Shopware.Component.register("sw-settings-search-live-search",()=>e(()=>import("./index-wcdSR1fr.js"),__vite__mapDeps([10,11,12])));Shopware.Component.register("sw-settings-search-live-search-keyword",()=>e(()=>import("./index-Cyu8yEXw.js"),__vite__mapDeps([13,12])));l.register("sw-settings-search",{type:"core",name:"settings-product-search-config",title:"sw-settings-search.general.mainMenuItemGeneral",description:"sw-settings-snippet.general.description",version:"1.0.0",targetVersion:"1.0.0",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"product_search_config",routes:{index:{component:"sw-settings-search",path:"index",meta:{parentPath:"sw.settings.index",privilege:"product_search_config.viewer"},redirect:{name:"sw.settings.search.index.general"},children:{general:{component:"sw-settings-search-view-general",path:"general",meta:{parentPath:"sw.settings.index",privilege:"product_search_config.viewer"}},liveSearch:{component:"sw-settings-search-view-live-search",path:"live-search",meta:{parentPath:"sw.settings.index",privilege:"product_search_config.viewer"}}}}},settingsItem:{group:"general",to:"sw.settings.search.index",icon:"regular-search",privilege:"product_search_config.viewer"}});
