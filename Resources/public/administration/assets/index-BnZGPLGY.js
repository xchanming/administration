const __vite__fileDeps=["assets/index-BLABIQEn.js","assets/main.vite-GBE0T_D3.js","assets/administration-BlrHhDOI.js","assets/administration-DZ0QGn6e.css","assets/channel-DxwX5hMG.js","assets/main-qZSDg39z.css","assets/index-CjKUr-L4.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./administration-BlrHhDOI.js";Cicada.Service("privileges").addPrivilegeMappingEntry({category:"additional_permissions",parent:null,key:"system",roles:{clear_cache:{privileges:["system:clear:cache","system:cache:info","api_action_cache_index"],dependencies:[]}}});const{Module:i}=Cicada;Cicada.Component.register("sw-settings-cache-index",()=>e(()=>import("./index-BLABIQEn.js"),__vite__mapDeps([0,1,2,3,4,5,6])));Cicada.Component.register("sw-settings-cache-modal",()=>e(()=>import("./index-Dy1TfYBe.js"),[]));i.register("sw-settings-cache",{type:"core",name:"settings-cache",title:"sw-settings-cache.general.mainMenuItemGeneral",description:"sw-settings-cache.general.description",version:"1.0.0",targetVersion:"1.0.0",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",routes:{index:{component:"sw-settings-cache-index",path:"index",meta:{parentPath:"sw.settings.index.system",privilege:"system.clear_cache"}}},settingsItem:{privilege:"system.clear_cache",group:"system",to:"sw.settings.cache.index",icon:"regular-files"}});
//# sourceMappingURL=index-BnZGPLGY.js.map
