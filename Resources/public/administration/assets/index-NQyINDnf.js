const __vite__fileDeps=["assets/index-WyQZ-zga.js","assets/index-C2cAgIdL.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./administration-BlrHhDOI.js";import{s as t}from"./main.vite-GBE0T_D3.js";import"./channel-DxwX5hMG.js";Cicada.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"settings",key:"customer_groups",roles:{viewer:{privileges:["customer_group:read","sales_channel:read","customer:read","seo_url:read","sales_channel_domain:read","custom_field_set:read","custom_field:read","custom_field_set_relation:read"],dependencies:[]},editor:{privileges:["customer_group:update","customer_group_registration_sales_channels:create","customer_group_registration_sales_channels:delete"],dependencies:["customer_groups.viewer"]},creator:{privileges:["customer_group:create"],dependencies:["customer_groups.viewer","customer_groups.editor"]},deleter:{privileges:["customer_group:delete","seo_url:delete"],dependencies:["customer_groups.viewer"]}}});const s={_searchable:!1,name:{_searchable:!0,_score:t.HIGH_SEARCH_RANKING}};Cicada.Component.register("sw-settings-customer-group-list",()=>e(()=>import("./index-BLGR4Uj1.js"),[]));Cicada.Component.register("sw-settings-customer-group-detail",()=>e(()=>import("./index-WyQZ-zga.js"),__vite__mapDeps([0,1])));Cicada.Component.extend("sw-settings-customer-group-create","sw-settings-customer-group-detail",()=>e(()=>import("./index-BDf6lC4T.js"),[]));const{Module:o}=Cicada;o.register("sw-settings-customer-group",{type:"core",name:"settings-customer-group",title:"sw-settings-customer-group.general.mainMenuItemGeneral",description:"sw-settings-customer-group.general.description",version:"1.0.0",targetVersion:"1.0.0",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"customer_group",routes:{index:{component:"sw-settings-customer-group-list",path:"index",meta:{parentPath:"sw.settings.index",privilege:"customer_groups.viewer"}},detail:{component:"sw-settings-customer-group-detail",path:"detail/:id",meta:{parentPath:"sw.settings.customer.group.index",privilege:"customer_groups.viewer"},props:{default(r){return{customerGroupId:r.params.id}}}},create:{component:"sw-settings-customer-group-create",path:"create",meta:{parentPath:"sw.settings.customer.group.index",privilege:"customer_groups.creator"}}},settingsItem:{group:"shop",to:"sw.settings.customer.group.index",icon:"regular-users",privilege:"customer_groups.viewer"},defaultSearchConfiguration:s});
//# sourceMappingURL=index-NQyINDnf.js.map
