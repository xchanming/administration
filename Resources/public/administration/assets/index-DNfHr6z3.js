const __vite__fileDeps=["assets/index-BUGRojRK.js","assets/index-Cbwq7WYO.css","assets/index-BbZlgX6e.js","assets/index-CTJx99B6.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./administration-BlrHhDOI.js";Cicada.Service("privileges").addPrivilegeMappingEntry({category:"additional_permissions",parent:null,key:"system",roles:{logging:{privileges:["log_entry:read","log_entry:create","log_entry:update","log_entry:delete"],dependencies:[]}}});Cicada.Component.register("sw-settings-logging-list",()=>e(()=>import("./index-BUGRojRK.js"),__vite__mapDeps([0,1])));Cicada.Component.register("sw-settings-logging-entry-info",()=>e(()=>import("./index-DfyzEwaE.js"),[]));Cicada.Component.extend("sw-settings-logging-mail-sent-info","sw-settings-logging-entry-info",()=>e(()=>import("./index-BbZlgX6e.js"),__vite__mapDeps([2,3])));const{Module:t}=Cicada;t.register("sw-settings-logging",{type:"core",name:"settings-logging",title:"sw-settings-logging.general.mainMenuItemGeneral",description:"Log viewer",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"log_entry",routes:{index:{component:"sw-settings-logging-list",path:"list",meta:{parentPath:"sw.settings.index.system",privilege:"system.logging"}}},settingsItem:{group:"system",to:"sw.settings.logging.index",icon:"regular-server",privilege:"system.logging"}});
//# sourceMappingURL=index-DNfHr6z3.js.map
