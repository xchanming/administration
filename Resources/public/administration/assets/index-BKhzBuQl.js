const __vite__fileDeps=["assets/index-Dlg2l93J.js","assets/index-DwcDXJoE.css","assets/index-CuReH6-d.js","assets/index-DGRN6-sY.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./administration-BlrHhDOI.js";import{s as i}from"./main.vite-GBE0T_D3.js";import"./channel-DxwX5hMG.js";Cicada.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"marketing",key:"newsletter_recipient",roles:{viewer:{privileges:["newsletter_recipient:read","customer_group:read","sales_channel:read","salutation:read","customer:read","tag:read","user_config:read","user_config:create","user_config:update"],dependencies:[]},editor:{privileges:["newsletter_recipient:update",Cicada.Service("privileges").getPrivileges("media.creator")],dependencies:["newsletter_recipient.viewer"]},creator:{privileges:["newsletter_recipient:create"],dependencies:["newsletter_recipient.viewer","newsletter_recipient.editor"]},deleter:{privileges:["newsletter_recipient:delete"],dependencies:["newsletter_recipient.viewer"]}}});const t={_searchable:!1,email:{_searchable:!0,_score:i.HIGH_SEARCH_RANKING}},{Module:r}=Cicada;Cicada.Component.register("sw-newsletter-recipient-list",()=>e(()=>import("./index-Dlg2l93J.js"),__vite__mapDeps([0,1])));Cicada.Component.register("sw-newsletter-recipient-detail",()=>e(()=>import("./index-CuReH6-d.js"),__vite__mapDeps([2,3])));Cicada.Component.register("sw-newsletter-recipient-filter-switch",()=>e(()=>import("./index-MXb2kSYu.js"),[]));r.register("sw-newsletter-recipient",{type:"core",name:"newsletter-recipient",title:"sw-newsletter-recipient.general.mainMenuItemGeneral",description:"sw-newsletter-recipient.general.description",version:"1.0.0",targetVersion:"1.0.0",color:"#FFD700",icon:"regular-megaphone",favicon:"icon-module-marketing.png",entity:"newsletter_recipient",entityDisplayProperty:"email",routes:{index:{component:"sw-newsletter-recipient-list",path:"index",meta:{privilege:"newsletter_recipient.viewer"}},detail:{component:"sw-newsletter-recipient-detail",path:"detail/:id",meta:{privilege:"newsletter_recipient.viewer",parentPath:"sw.newsletter.recipient.index"}}},navigation:[{id:"sw-newsletter-recipient",icon:"regular-megaphone",color:"#FFD700",path:"sw.newsletter.recipient.index",privilege:"newsletter_recipient.viewer",label:"sw-newsletter-recipient.general.mainMenuItemGeneral",parent:"sw-marketing"}],defaultSearchConfiguration:t});
//# sourceMappingURL=index-BKhzBuQl.js.map
