const __vite__fileDeps=["assets/index-D1GmSs71.js","assets/index-DOQdE2zF.css","assets/index-d33TUnpp.js","assets/sanitizer.helper-9fM03JVT.js","assets/index-DfF7cbxH.css","assets/index-C5zV-vL2.js","assets/index-BlDRLT6r.css","assets/index-D7Hvo3RQ.js","assets/index-CDxbfiP7.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./administration-BlrHhDOI.js";Cicada.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"settings",key:"snippet",roles:{viewer:{privileges:["snippet_set:read"],dependencies:[]},editor:{privileges:["snippet_set:update","snippet:create","snippet:update"],dependencies:["snippet.viewer"]},creator:{privileges:["snippet_set:create","snippet_set:update"],dependencies:["snippet.viewer","snippet.editor"]},deleter:{privileges:["snippet_set:delete","snippet:delete"],dependencies:["snippet.viewer","snippet.editor"]}}});const{Module:t}=Cicada;Cicada.Component.register("sw-settings-snippet-set-list",()=>e(()=>import("./index-D1GmSs71.js"),__vite__mapDeps([0,1])));Cicada.Component.register("sw-settings-snippet-list",()=>e(()=>import("./index-d33TUnpp.js"),__vite__mapDeps([2,3,4])));Cicada.Component.register("sw-settings-snippet-detail",()=>e(()=>import("./index-CePytFi0.js"),[]));Cicada.Component.extend("sw-settings-snippet-create","sw-settings-snippet-detail",()=>e(()=>import("./index-B9mUW3Vk.js"),[]));Cicada.Component.register("sw-settings-snippet-sidebar",()=>e(()=>import("./index-C5zV-vL2.js"),__vite__mapDeps([5,6])));Cicada.Component.register("sw-settings-snippet-filter-switch",()=>e(()=>import("./index-D7Hvo3RQ.js"),__vite__mapDeps([7,8])));t.register("sw-settings-snippet",{type:"core",name:"settings-snippet",title:"sw-settings-snippet.general.mainMenuItemGeneral",description:"sw-settings-snippet.general.description",version:"1.0.0",targetVersion:"1.0.0",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"snippet",routes:{index:{component:"sw-settings-snippet-set-list",path:"index",meta:{parentPath:"sw.settings.index",privilege:"snippet.viewer"}},list:{component:"sw-settings-snippet-list",path:"list",meta:{parentPath:"sw.settings.snippet.index",privilege:"snippet.viewer"}},detail:{component:"sw-settings-snippet-detail",path:"detail/:key",meta:{parentPath:"sw.settings.snippet.list",privilege:"snippet.viewer"}},create:{component:"sw-settings-snippet-create",path:"create",meta:{parentPath:"sw.settings.snippet.list",privilege:"snippet.viewer"}}},settingsItem:{group:"shop",to:"sw.settings.snippet.index",icon:"regular-globe-stand",privilege:"snippet.viewer"}});
//# sourceMappingURL=index-CaHCjLkl.js.map
