const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BHVOvHak.js","assets/feature-grid-translation.service-CE1xu4QK.js","assets/index-CyseQ3BE.js","assets/index-xFt_8P8Z.css","assets/index-CjcId0lQ.js","assets/index-D4IPtyXc.css"])))=>i.map(i=>d[i]);
import{_ as e}from"./administration-d9Z5Qnc-.js";Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"settings",key:"product_feature_sets",roles:{viewer:{privileges:["product_feature_set:read","custom_field:read","property_group:read","user_config:read","user_config:create","user_config:update"],dependencies:[]},editor:{privileges:["product_feature_set:update"],dependencies:["product_feature_sets.viewer"]},creator:{privileges:["product_feature_set:create"],dependencies:["product_feature_sets.viewer","product_feature_sets.editor"]},deleter:{privileges:["product_feature_set:delete"],dependencies:["product_feature_sets.viewer"]}}});Shopware.Component.register("sw-settings-product-feature-sets-list",()=>e(()=>import("./index-BHVOvHak.js"),__vite__mapDeps([0,1])));Shopware.Component.register("sw-settings-product-feature-sets-detail",()=>e(()=>import("./index-BPnoIgUE.js"),[]));Shopware.Component.register("sw-settings-product-feature-sets-values-card",()=>e(()=>import("./index-CyseQ3BE.js"),__vite__mapDeps([2,1,3])));Shopware.Component.register("sw-settings-product-feature-sets-modal",()=>e(()=>import("./index-CjcId0lQ.js"),__vite__mapDeps([4,5])));const{Module:r}=Shopware;r.register("sw-settings-product-feature-sets",{type:"core",name:"settings-product-feature-sets",title:"sw-settings-product-feature-sets.general.mainMenuItemGeneral",description:"Essential characteristics section in the settings module",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"product_feature_set",routes:{index:{component:"sw-settings-product-feature-sets-list",path:"index",meta:{parentPath:"sw.settings.index",privilege:"product_feature_sets.viewer"}},detail:{component:"sw-settings-product-feature-sets-detail",path:"detail/:id",meta:{parentPath:"sw.settings.product.feature.sets.index",privilege:"product_feature_sets.viewer"},props:{default(t){return{productFeatureSetId:t.params.id}}}},create:{component:"sw-settings-product-feature-sets-detail",path:"create",meta:{parentPath:"sw.settings.product.feature.sets.index",privilege:"product_feature_sets.creator"}}},settingsItem:{group:"commerce",to:"sw.settings.product.feature.sets.index",icon:"regular-check-square",privilege:"product_feature_sets.viewer"}});
