const __vite__fileDeps=["assets/index-Ns88hl4p.js","assets/index-CFKrdwlr.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./administration-DCOj2uiN.js";Cicada.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"settings",key:"integration",roles:{viewer:{privileges:["integration:read","acl_role:read","app:read"],dependencies:[]},editor:{privileges:["integration:update","api_action_access-key_integration","integration_role:create","integration_role:delete"],dependencies:["integration.viewer"]},creator:{privileges:["integration:create"],dependencies:["integration.viewer","integration.editor"]},deleter:{privileges:["integration:delete"],dependencies:["integration.viewer"]}}});const{Module:i}=Cicada;Cicada.Component.register("sw-integration-list",()=>e(()=>import("./index-Ns88hl4p.js"),__vite__mapDeps([0,1])));i.register("sw-integration",{type:"core",name:"integration",title:"sw-integration.general.mainMenuItemIndex",description:"The module for managing integrations.",version:"1.0.0",targetVersion:"1.0.0",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"integration",routes:{index:{component:"sw-integration-list",path:"index",meta:{parentPath:"sw.settings.index.system",privilege:"integration.viewer"}}},settingsItem:{group:"system",to:"sw.integration.index",icon:"regular-cog",privilege:"integration.viewer"}});
//# sourceMappingURL=index-wKcKqQo-.js.map
