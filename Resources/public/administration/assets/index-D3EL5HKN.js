const __vite__fileDeps=["assets/index-DwAgngLD.js","assets/channel-oRk5-XZJ.js","assets/administration-DCOj2uiN.js","assets/administration-DZ0QGn6e.css","assets/index-Qj7InBQR.css","assets/index-DAD4T5Ei.js","assets/index-CQbllqBH.css","assets/index-o48YVMQN.js","assets/index-Cu27b83u.css","assets/index-Dn5JGiMd.js","assets/index-JOgvt3B5.css","assets/index-C0RC7HhV.js","assets/index-D58CA3X6.css","assets/index-DgV_VkMU.js","assets/index-opecdmiT.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./administration-DCOj2uiN.js";Cicada.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"settings",key:"rule",roles:{viewer:{privileges:["rule:read","rule_condition:read","customer_group:read","sales_channel:read","tax:read","tax_provider:read","payment_method:read","shipping_method:read","shipping_method_price:read","category:read","product:read","product_manufacturer:read","product_price:read","property_group:read","property_group_option:read","country:read","tag:read","currency:read","custom_field:read","custom_field_set:read","custom_field_set_relation:read","promotion:read","promotion_discount:read","promotion_setgroup:read","app_script_condition:read","flow_sequence:read","user_config:read","user_config:create","user_config:update"],dependencies:[]},editor:{privileges:["rule:update","rule_condition:create","rule_condition:update","rule_condition:delete","shipping_method:update","payment_method:update","promotion_order_rule:create","promotion_order_rule:delete","promotion_persona_rule:create","promotion_persona_rule:delete","promotion_cart_rule:create","promotion_cart_rule:delete"],dependencies:["rule.viewer"]},creator:{privileges:["rule:create"],dependencies:["rule.viewer","rule.editor"]},deleter:{privileges:["rule:delete"],dependencies:["rule.viewer"]}}});const{Module:r}=Cicada;Cicada.Component.register("sw-settings-rule-add-assignment-modal",()=>e(()=>import("./index-DwAgngLD.js"),__vite__mapDeps([0,1,2,3,4])));Cicada.Component.register("sw-settings-rule-add-assignment-listing",()=>e(()=>import("./index-DAD4T5Ei.js"),__vite__mapDeps([5,6])));Cicada.Component.extend("sw-settings-rule-assignment-listing","sw-entity-listing",()=>e(()=>import("./index-DBvNqIMe.js"),[]));Cicada.Component.register("sw-settings-rule-category-tree",()=>e(()=>import("./index-o48YVMQN.js"),__vite__mapDeps([7,8])));Cicada.Component.extend("sw-settings-rule-tree-item","sw-tree-item",()=>e(()=>import("./index--pyJGac2.js"),[]));Cicada.Component.extend("sw-settings-rule-tree","sw-tree",()=>e(()=>import("./index--QmW1cNQ.js"),[]));Cicada.Component.register("sw-settings-rule-list",()=>e(()=>import("./index-Dn5JGiMd.js"),__vite__mapDeps([9,10])));Cicada.Component.register("sw-settings-rule-detail",()=>e(()=>import("./index-C0RC7HhV.js"),__vite__mapDeps([11,12])));Cicada.Component.register("sw-settings-rule-detail-base",()=>e(()=>import("./index-CRHXBQ9H.js"),[]));Cicada.Component.register("sw-settings-rule-detail-assignments",()=>e(()=>import("./index-DgV_VkMU.js"),__vite__mapDeps([13,14])));r.register("sw-settings-rule",{type:"core",name:"settings-rule",title:"sw-settings-rule.general.mainMenuItemGeneral",description:"sw-settings-rule.general.descriptionTextModule",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"rule",routes:{index:{component:"sw-settings-rule-list",path:"index",meta:{parentPath:"sw.settings.index",privilege:"rule.viewer"}},detail:{component:"sw-settings-rule-detail",path:"detail/:id",meta:{parentPath:"sw.settings.rule.index",privilege:"rule.viewer"},props:{default(t){return{ruleId:t.params.id}}},redirect:{name:"sw.settings.rule.detail.base"},children:{base:{component:"sw-settings-rule-detail-base",path:"base",meta:{parentPath:"sw.settings.rule.index",privilege:"rule.viewer"}},assignments:{component:"sw-settings-rule-detail-assignments",path:"assignments",meta:{parentPath:"sw.settings.rule.index",privilege:"rule.viewer"}}}},create:{component:"sw-settings-rule-detail",path:"create",meta:{parentPath:"sw.settings.rule.index",privilege:"rule.creator"},redirect:{name:"sw.settings.rule.create.base"},children:{base:{component:"sw-settings-rule-detail-base",path:"base",meta:{parentPath:"sw.settings.rule.index",privilege:"rule.viewer"}}}}},settingsItem:{group:"shop",to:"sw.settings.rule.index",icon:"regular-rule",privilege:"rule.viewer"}});
//# sourceMappingURL=index-D3EL5HKN.js.map
