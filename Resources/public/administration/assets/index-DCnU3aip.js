import{_ as e}from"./administration-CcAM5iN0.js";Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"settings",key:"salutation",roles:{viewer:{privileges:["salutation:read","custom_field_set:read","custom_field:read","custom_field_set_relation:read"],dependencies:[]},editor:{privileges:["salutation:update"],dependencies:["salutation.viewer"]},creator:{privileges:["salutation:create"],dependencies:["salutation.viewer","salutation.editor"]},deleter:{privileges:["salutation:delete"],dependencies:["salutation.viewer"]}}});Shopware.Component.register("sw-settings-salutation-list",()=>e(()=>import("./index-B26nD_qJ.js"),[]));Shopware.Component.register("sw-settings-salutation-detail",()=>e(()=>import("./index-BK3_GdRL.js"),[]));const{Module:i}=Shopware;i.register("sw-settings-salutation",{type:"core",name:"settings-salutation",title:"sw-settings-salutation.general.mainMenuItemGeneral",description:"sw-settings-snippet.general.description",version:"1.0.0",targetVersion:"1.0.0",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"salutation",routes:{index:{component:"sw-settings-salutation-list",path:"index",meta:{parentPath:"sw.settings.index",privilege:"salutation.viewer"}},detail:{component:"sw-settings-salutation-detail",path:"detail/:id",meta:{parentPath:"sw.settings.salutation.index",privilege:"salutation.viewer"},props:{default(t){return{salutationId:t.params.id}}}},create:{component:"sw-settings-salutation-detail",path:"create",meta:{parentPath:"sw.settings.salutation.index",privilege:"salutation.creator"}}},settingsItem:{group:"customer",to:"sw.settings.salutation.index",icon:"regular-comments",privilege:"salutation.viewer"}});
