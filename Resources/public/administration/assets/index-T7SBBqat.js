const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BkifhltI.js","assets/channel-Cvr-E4M4.js","assets/index-DKR0YF68.css","assets/index-DeP4Qxyv.js","assets/index-BHgd0_Wa.css","assets/index-i0faDWem.js","assets/index-BpL9Mz5L.css","assets/index-Bg0A8sbA.js","assets/index-5U_c3D9s.css","assets/index-BsdBPzow.js","assets/index-DwozgXH-.css","assets/index-C19YgU6N.js","assets/index-BLPPqkfG.css"])))=>i.map(i=>d[i]);
import{_ as e}from"./administration-CcAM5iN0.js";Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"settings",key:"rule",roles:{viewer:{privileges:["rule:read","rule_condition:read","customer_group:read","sales_channel:read","tax:read","tax_provider:read","payment_method:read","shipping_method:read","shipping_method_price:read","category:read","product:read","product_manufacturer:read","product_price:read","property_group:read","property_group_option:read","country:read","tag:read","currency:read","custom_field:read","custom_field_set:read","custom_field_set_relation:read","promotion:read","promotion_discount:read","promotion_setgroup:read","app_script_condition:read","flow_sequence:read","user_config:read","user_config:create","user_config:update"],dependencies:[]},editor:{privileges:["rule:update","rule_condition:create","rule_condition:update","rule_condition:delete","shipping_method:update","payment_method:update","promotion_order_rule:create","promotion_order_rule:delete","promotion_persona_rule:create","promotion_persona_rule:delete","promotion_cart_rule:create","promotion_cart_rule:delete"],dependencies:["rule.viewer"]},creator:{privileges:["rule:create"],dependencies:["rule.viewer","rule.editor"]},deleter:{privileges:["rule:delete"],dependencies:["rule.viewer"]}}});const{Module:r}=Shopware;Shopware.Component.register("sw-settings-rule-add-assignment-modal",()=>e(()=>import("./index-BkifhltI.js"),__vite__mapDeps([0,1,2])));Shopware.Component.register("sw-settings-rule-add-assignment-listing",()=>e(()=>import("./index-DeP4Qxyv.js"),__vite__mapDeps([3,4])));Shopware.Component.extend("sw-settings-rule-assignment-listing","sw-entity-listing",()=>e(()=>import("./index-BGszvUcA.js"),[]));Shopware.Component.register("sw-settings-rule-category-tree",()=>e(()=>import("./index-i0faDWem.js"),__vite__mapDeps([5,6])));Shopware.Component.extend("sw-settings-rule-tree-item","sw-tree-item",()=>e(()=>import("./index-C8JDfNDP.js"),[]));Shopware.Component.extend("sw-settings-rule-tree","sw-tree",()=>e(()=>import("./index-3KhK9TT0.js"),[]));Shopware.Component.register("sw-settings-rule-list",()=>e(()=>import("./index-Bg0A8sbA.js"),__vite__mapDeps([7,8])));Shopware.Component.register("sw-settings-rule-detail",()=>e(()=>import("./index-BsdBPzow.js"),__vite__mapDeps([9,10])));Shopware.Component.register("sw-settings-rule-detail-base",()=>e(()=>import("./index-D0V_uwf5.js"),[]));Shopware.Component.register("sw-settings-rule-detail-assignments",()=>e(()=>import("./index-C19YgU6N.js"),__vite__mapDeps([11,12])));r.register("sw-settings-rule",{type:"core",name:"settings-rule",title:"sw-settings-rule.general.mainMenuItemGeneral",description:"sw-settings-rule.general.descriptionTextModule",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"rule",routes:{index:{component:"sw-settings-rule-list",path:"index",meta:{parentPath:"sw.settings.index",privilege:"rule.viewer"}},detail:{component:"sw-settings-rule-detail",path:"detail/:id",meta:{parentPath:"sw.settings.rule.index",privilege:"rule.viewer"},props:{default(t){return{ruleId:t.params.id}}},redirect:{name:"sw.settings.rule.detail.base"},children:{base:{component:"sw-settings-rule-detail-base",path:"base",meta:{parentPath:"sw.settings.rule.index",privilege:"rule.viewer"}},assignments:{component:"sw-settings-rule-detail-assignments",path:"assignments",meta:{parentPath:"sw.settings.rule.index",privilege:"rule.viewer"}}}},create:{component:"sw-settings-rule-detail",path:"create",meta:{parentPath:"sw.settings.rule.index",privilege:"rule.creator"},redirect:{name:"sw.settings.rule.create.base"},children:{base:{component:"sw-settings-rule-detail-base",path:"base",meta:{parentPath:"sw.settings.rule.index",privilege:"rule.viewer"}}}}},settingsItem:{group:"automation",to:"sw.settings.rule.index",icon:"regular-rule",privilege:"rule.viewer"}});
