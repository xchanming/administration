const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DHvQWFCB.js","assets/index-C238DibU.css","assets/index-B-5cUiKr.js","assets/index-BuBQ5krv.css","assets/index-DFeJIBoY.js","assets/index-CSRhpFLg.css"])))=>i.map(i=>d[i]);
import{_ as e}from"./administration-d9Z5Qnc-.js";import{s as r}from"./main-BVD2thQ1.js";import"./channel-Cvr-E4M4.js";Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"catalogues",key:"property",roles:{viewer:{privileges:["property_group_option:read","property_group:read","media_default_folder:read","media_folder:read","media:read","user_config:read","user_config:create","user_config:update","custom_field_set:read","custom_field:read","custom_field_set_relation:read"],dependencies:[]},editor:{privileges:["property_group_option:update","property_group_option:update","property_group_option:delete","property_group_option:create","property_group:update","media:create","tag:read","product_media:read","product:read","category:read","product_manufacturer:read","mail_template_media:read","mail_template:read","document_base_config:read","user:read","payment_method:read","shipping_method:read"],dependencies:["property.viewer"]},creator:{privileges:["property_group:create"],dependencies:["property.viewer","property.editor"]},deleter:{privileges:["property_group:delete"],dependencies:["property.viewer"]}}});const p={_searchable:!1,name:{_searchable:!0,_score:r.HIGH_SEARCH_RANKING},options:{name:{_searchable:!0,_score:r.HIGH_SEARCH_RANKING}}},{Module:o}=Shopware;Shopware.Component.register("sw-property-list",()=>e(()=>import("./index-DHvQWFCB.js"),__vite__mapDeps([0,1])));Shopware.Component.register("sw-property-detail",()=>e(()=>import("./index-B-5cUiKr.js"),__vite__mapDeps([2,3])));Shopware.Component.extend("sw-property-create","sw-property-detail",()=>e(()=>import("./index-DSN-9zAC.js"),[]));Shopware.Component.register("sw-property-option-detail",()=>e(()=>import("./index-BgWpQIZl.js"),[]));Shopware.Component.register("sw-property-detail-base",()=>e(()=>import("./index-DcJhBXAy.js"),[]));Shopware.Component.register("sw-property-option-list",()=>e(()=>import("./index-DFeJIBoY.js"),__vite__mapDeps([4,5])));o.register("sw-property",{type:"core",name:"property",title:"sw-property.general.mainMenuItemGeneral",description:"sw-property.general.descriptionTextModule",version:"1.0.0",targetVersion:"1.0.0",color:"#57D9A3",icon:"regular-products",favicon:"icon-module-products.png",entity:"property_group",routes:{index:{components:{default:"sw-property-list"},path:"index",alias:"/",meta:{privilege:"property.viewer"}},detail:{component:"sw-property-detail",path:"detail/:id",props:{default:t=>({groupId:t.params.id})},meta:{parentPath:"sw.property.index",privilege:"property.viewer"}},create:{component:"sw-property-create",path:"create",meta:{parentPath:"sw.property.index",privilege:"property.creator"}},option:{component:"sw-property-option-detail",path:"detail/:groupId/option/:optionId",meta:{parentPath:"sw.property.detail",privilege:"property.editor"}}},navigation:[{id:"sw-property",label:"sw-property.general.mainMenuItemGeneral",parent:"sw-catalogue",path:"sw.property.index",position:40,privilege:"property.viewer"}],defaultSearchConfiguration:p});
