const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-jgthoUQh.js","assets/index-eycbE4bu.css","assets/index-CxdkWslP.js","assets/index-DNCZ6wA7.css"])))=>i.map(i=>d[i]);
import{_ as e}from"./administration-d9Z5Qnc-.js";Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"settings",key:"document",roles:{viewer:{privileges:["document_base_config:read","document_type:read","document_base_config_sales_channel:read","sales_channel:read","order:read","currency:read","custom_field_set:read","custom_field:read","custom_field_set_relation:read"],dependencies:[]},editor:{privileges:["document_base_config:update"],dependencies:["document.viewer"]},creator:{privileges:["document_base_config:create","document_base_config_sales_channel:create"],dependencies:["document.viewer","document.editor"]},deleter:{privileges:["document_base_config:delete"],dependencies:["document.viewer"]}}});const{Module:i,Component:t}=Shopware;t.register("sw-settings-document-list",()=>e(()=>import("./index-jgthoUQh.js"),__vite__mapDeps([0,1])));t.register("sw-settings-document-detail",()=>e(()=>import("./index-CxdkWslP.js"),__vite__mapDeps([2,3])));i.register("sw-settings-document",{type:"core",name:"settings-document",title:"sw-settings-document.general.mainMenuItemGeneral",description:"sw-settings-document.general.description",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"document",routes:{index:{component:"sw-settings-document-list",path:"index",meta:{privilege:"document.viewer",parentPath:"sw.settings.index"}},detail:{component:"sw-settings-document-detail",path:"detail/:id",meta:{privilege:"document.viewer",parentPath:"sw.settings.document.index"},props:{default:n=>({documentConfigId:n.params.id})}},create:{component:"sw-settings-document-detail",path:"create",meta:{privilege:"document.creator",parentPath:"sw.settings.document.index"}}},settingsItem:{group:"commerce",to:"sw.settings.document.index",privilege:"document.viewer",icon:"regular-file-text"}});
