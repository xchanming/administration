const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CYS0Whyc.js","assets/index-B40pm38k.css","assets/index-DJ9pflAG.js","assets/error-resolver.system-config.data-CuyHI13_.js","assets/extension-api-data.service-BNEYYFaA.js","assets/util.service-DptoGcql.js","assets/channel-Cvr-E4M4.js","assets/_baseUniq-DJKU6o6f.js","assets/_baseIteratee-BDDcCv4P.js","assets/camelCase-FN5n0J2F.js","assets/string.utils-B0MdTyu7.js","assets/index-DClRkTm6.css","assets/index-DEdCq9cl.js","assets/index-_E6Az9kp.css"])))=>i.map(i=>d[i]);
import{_ as s}from"./administration-CcAM5iN0.js";const{Mixin:t,Data:{Criteria:n}}=Shopware,{debug:a}=Shopware.Utils;t.register("sw-settings-list",{mixins:[t.getByName("listing"),t.getByName("notification")],inject:["repositoryFactory"],data(){return{entityName:"",items:[],isLoading:!1,showDeleteModal:!1,deleteEntity:null,steps:[10,25,50]}},computed:{entityRepository(){return this.repositoryFactory.create(this.entityName)},listingCriteria(){const e=new n(this.page,this.limit);return this.term&&e.setTerm(this.term),e},titleSaveSuccess(){return this.$te(`sw-settings-${this.entityName.replace(/[_]/g,"-")}.list.titleDeleteSuccess`)?this.$tc(`sw-settings-${this.entityName.replace(/[_]/g,"-")}.list.titleDeleteSuccess`):this.$tc("global.default.success")},messageSaveSuccess(){if(this.deleteEntity){let e=this.deleteEntity.name;return this.deleteEntity.hasOwnProperty("translated")&&this.deleteEntity.translated.hasOwnProperty("name")&&(e=this.deleteEntity.translated.name),this.$te(`sw-settings-${this.entityName.replace(/[_]/g,"-")}.list.messageDeleteSuccess)`)?this.$tc(`sw-settings-${this.entityName.replace(/[_]/g,"-")}.list.messageDeleteSuccess`,0,{name:e}):this.$tc("global.notification.messageDeleteSuccess",{name:e},0)}return""}},created(){this.entityName===""&&a.warn("sw-settings-list mixin",'You need to define the data property "entityName".')},methods:{getList(){this.isLoading=!0,this.entityRepository.search(this.listingCriteria).then(e=>(this.items=e,this.total=e.total,this.items)).finally(()=>{this.isLoading=!1})},onChangeLanguage(){this.getList()},onDelete(e){this.showDeleteModal=e},onCloseDeleteModal(){this.showDeleteModal=!1},onConfirmDelete(e){return this.deleteEntity=this.items.find(i=>i.id===e),this.onCloseDeleteModal(),this.entityRepository.delete(e).then(()=>{this.createNotificationSuccess({title:this.titleSaveSuccess,message:this.messageSaveSuccess})}).finally(()=>{this.deleteEntity=null,this.getList()})},onInlineEditSave(e){return this.isLoading=!0,this.entityRepository.save(e).finally(()=>{this.isLoading=!1})},onInlineEditCancel(){this.getList()}}});Shopware.Service("privileges").addPrivilegeMappingEntry({category:"additional_permissions",parent:null,key:"system",roles:{system_config:{privileges:["system_config:read","system_config:update","system_config:create","system_config:delete","sales_channel:read","cms_page:read","product_sorting:read","custom_field:read","custom_field_set_relation:read","product_sorting:create","product_sorting:update","product_sorting:delete","seo_url_template:read","seo_url_template:create","seo_url_template:update"],dependencies:[]}}});const{Module:r}=Shopware;Shopware.Component.register("sw-settings-item",()=>s(()=>import("./index-CYS0Whyc.js"),__vite__mapDeps([0,1])));Shopware.Component.register("sw-system-config",()=>s(()=>import("./index-DJ9pflAG.js"),__vite__mapDeps([2,3,4,5,6,7,8,9,10,11])));Shopware.Component.register("sw-settings-index",()=>s(()=>import("./index-DEdCq9cl.js"),__vite__mapDeps([12,13])));r.register("sw-settings",{type:"core",name:"settings",title:"sw-settings.general.mainMenuItemGeneral",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",routes:{index:{component:"sw-settings-index",path:"index",icon:"regular-cog",redirect:{name:"sw.settings.index.shop"},children:{shop:{path:"shop",meta:{component:"sw-settings-index",parentPath:"sw.settings.index"}},system:{path:"system",meta:{component:"sw-settings-index",parentPath:"sw.settings.index"}},plugins:{path:"plugins",meta:{component:"sw-settings-index",parentPath:"sw.settings.index"}}}}},navigation:[{id:"sw-settings",label:"sw-settings.general.mainMenuItemGeneral",color:"#9AA8B5",icon:"regular-cog",path:"sw.settings.index",position:80}]});
