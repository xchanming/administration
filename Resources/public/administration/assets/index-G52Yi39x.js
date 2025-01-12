const p=`{% block sw_product_stream_detail %} <sw-page class="sw-product-stream-detail"> {% block sw_product_stream_detail_header %} <template #smart-bar-header> <h2 v-if="productStream"> {{ productStream.name }} </h2> <h2 v-else class="sw-product-stream-detail__empty-title" > {{ placeholder(productStream, 'name', $tc('sw-product-stream.detail.textHeadline')) }} </h2> </template> {% endblock %} {% block sw_product_stream_detail_actions %} <template #smart-bar-actions> {% block sw_product_stream_detail_actions_abort %} <sw-button v-tooltip.bottom="tooltipCancel" :disabled="isLoading" @click="onCancel" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} <sw-button-group v-tooltip.bottom="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('product_stream.editor'), showOnDisabledElements: true }" class="sw-product-stream-detail__save-button-group" :split-button="true" > {% block sw_product_stream_detail_actions_save %} <sw-button-process v-model:processSuccess="isSaveSuccessful" v-tooltip.bottom="tooltipSave" class="sw-product-stream-detail__save-action" :is-loading="isLoading" :disabled="!acl.can('product_stream.editor')" variant="primary" @click.prevent="onSave" > {{ $tc('sw-product-stream.detail.buttonSave') }} </sw-button-process> {% endblock %} {% block sw_product_stream_detail_actions_save_context_menu %} <sw-context-button> <template #button> <sw-button class="sw-product-stream-detail__button-context-menu" square variant="primary" :disabled="isLoading || !acl.can('product_stream.editor')" > <sw-icon name="regular-chevron-down-xs" /> </sw-button> </template> {% block sw_product_stream_detail_actions_save_context_menu_actions %} {% block sw_product_stream_detail_actions_duplicate %} <sw-context-menu-item class="sw-product-stream-detail__save-duplicate-action" :disabled="!acl.can('product_stream.creator') || !acl.can('product_stream.editor')" @click="onDuplicate" > {{ $tc('sw-product.detail.buttonSaveDuplicate') }} </sw-context-menu-item> {% endblock %} {% endblock %} </sw-context-button> {% endblock %} </sw-button-group> </template> {% endblock %} {% block sw_product_stream_detail_language_switch %} <template #language-switch> <sw-language-switch :save-changes-function="saveOnLanguageChange" :abort-change-function="abortOnLanguageChange" :disabled="!productStreamId" @on-change="onChangeLanguage" /> </template> {% endblock %} {% block sw_product_stream_detail_content %} <template #content> <sw-card-view> <template v-if="isLoading || customFieldsLoading"> <sw-skeleton variant="detail-bold" /> <sw-skeleton /> </template> <template v-else> {% block sw_product_stream_detail_content_language_info %} <sw-language-info :entity-description="placeholder(productStream, 'name', $tc('sw-product-stream.detail.textHeadline'))" /> {% endblock %} {% block sw_product_stream_detail_basic_info %} <sw-card position-identifier="sw-product-stream-detail-basic-info" :large="true" :title="$tc('sw-product-stream.detail.titleCard')" > {% block sw_product_basic_form_name_field %} <sw-text-field v-if="productStream" v-model:value="productStream.name" v-tooltip.bottom="getNoPermissionsTooltip('product_stream.editor')" name="sw-field--productStream-name" :label="$tc('sw-product-stream.detail.labelName')" :validation="nameRequired" :required="isSystemLanguage" :placeholder="placeholder(productStream, 'name', $tc('sw-product-stream.detail.placeholderName'))" :error="productStreamNameError" :disabled="!acl.can('product_stream.editor')" /> {% endblock %} {% block sw_product_basic_form_description_field %} <sw-textarea-field v-if="productStream" v-model:value="productStream.description" v-tooltip.bottom="getNoPermissionsTooltip('product_stream.editor')" name="sw-field--productStream-description" :label="$tc('sw-product-stream.detail.labelDescription')" :placeholder="placeholder(productStream, 'description', $tc('sw-product-stream.detail.placeholderDescription'))" :disabled="!acl.can('product_stream.editor')" /> {% endblock %} </sw-card> {% endblock %} {% block sw_product_stream_detail_filter %} <sw-card :large="true" position-identifier="sw-product-stream-detail-filter" class="sw-product-stream-detail__condition_container" :class="{ 'is--disabled': !acl.can('product_stream.editor') }" :title="$tc('sw-product-stream.detail.titleFilter')" > {% block sw_product_stream_detail_filter_tree %} <sw-condition-tree v-if="productStream" :initial-conditions="productStreamFilters" :condition-repository="productStreamFiltersRepository" :condition-data-provider-service="productStreamConditionService" child-association-field="queries" association-field="productStreamId" :association-value="productStream.id" :root-condition="null" :disabled="!acl.can('product_stream.editor')" @conditions-changed="updateFilterTree" /> {% endblock %} {% block sw_product_stream_detail_filter_preview_button %} <sw-button class="sw-product-stream-detail__open_modal_preview" @click.prevent="openModalPreview" > {{ $tc('sw-product-stream.detail.buttonOpenPreview') }} </sw-button> {% endblock %} </sw-card> {% endblock %} {% block sw_prouct_stream_detail_preview_modal %} <sw-product-stream-modal-preview v-if="showModalPreview" ref="modalPreview" :filters="productStreamFiltersTree" @modal-close="closeModalPreview" /> {% endblock %} {% block sw_prouct_stream_detail_custom_field_sets %} <sw-card v-if="showCustomFields" position-identifier="sw-product-stream-detail-custom-field-sets" :large="true" :title="$tc('sw-settings-custom-field.general.mainMenuItemGeneral')" > <sw-custom-field-set-renderer :entity="productStream" :disabled="!acl.can('product_stream.editor')" :sets="customFieldSets" /> </sw-card> {% endblock %} </template> </sw-card-view> </template> {% endblock %} </sw-page> {% endblock %}`,{Mixin:d,Context:a}=Cicada,{mapPropertyErrors:m}=Cicada.Component.getComponentHelper(),{Criteria:s}=Cicada.Data,h={template:p,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","productStreamConditionService","acl","customFieldDataProviderService"],provide(){return{productCustomFields:this.productCustomFields}},beforeRouteLeave(t,e,r){if(this.showModalPreview){this.showModalPreview=!1,this.$nextTick(()=>r());return}r()},mixins:[d.getByName("placeholder"),d.getByName("notification"),d.getByName("discard-detail-page-changes")("productStream"),d.getByName("sw-inline-snippet")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},props:{productStreamId:{type:String,required:!1,default:null}},data(){return{isLoading:!1,customFieldsLoading:!1,isSaveSuccessful:!1,productStream:null,productStreamFilters:null,productStreamFiltersTree:null,deletedProductStreamFilters:[],productCustomFields:{},showModalPreview:!1,languageId:null,customFieldSets:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.productStream,"name")},productStreamRepository(){return this.repositoryFactory.create("product_stream")},productStreamFiltersRepository(){return this.productStream?this.repositoryFactory.create(this.productStream.filters.entity,this.productStream.filters.source):null},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},tooltipSave(){return this.acl.can("product_stream.editor")?{message:`${this.$device.getSystemKey()} + S`,appearance:"light"}:{message:this.$tc("sw-privileges.tooltip.warning"),appearance:"dark",showOnDisabledElements:!0}},tooltipCancel(){return{message:"ESC",appearance:"light"}},isSystemLanguage(){return this.languageId===a.api.systemLanguageId},nameRequired(){return this.isSystemLanguage},...m("productStream",["name"]),showCustomFields(){return this.productStream&&this.customFieldSets&&this.customFieldSets.length>0}},watch:{productStreamId:{immediate:!0,handler(){if(!this.productStreamId){this.createProductStream();return}this.isLoading=!0,this.loadEntityData(this.productStreamId).then(()=>{this.isLoading=!1})}}},created(){this.createdComponent()},methods:{createdComponent(){Cicada.ExtensionAPI.publishData({id:"sw-product-stream-detail__productStream",path:"productStream",scope:this}),this.languageId=a.api.languageId,this.productStreamId&&this.getProductCustomFields(),this.loadCustomFieldSets()},loadCustomFieldSets(){this.customFieldDataProviderService.getCustomFieldSets("product_stream").then(t=>{this.customFieldSets=t})},createProductStream(){this.getProductCustomFields().then(()=>{a.api.languageId=a.api.systemLanguageId,this.productStream=this.productStreamRepository.create(a.api),this.productStreamFilters=this.productStream.filters})},loadEntityData(t){return this.productStreamRepository.get(t,a.api).then(e=>(this.productStream=e,this.loadFilters()))},loadFilters(t=null){if(t===null){const r=new s(1,25);return r.addFilter(s.equals("productStreamId",this.productStreamId)),this.productStreamFiltersRepository.search(r,a.api).then(o=>this.loadFilters(o))}if(t.length>=t.total)return this.productStreamFilters=t,Promise.resolve();const e=s.fromCriteria(t.criteria);return e.page+=1,this.productStreamFiltersRepository.search(e,t.context).then(r=>(t.push(...r),t.criteria=r.criteria,t.total=r.total,this.loadFilters(t)))},abortOnLanguageChange(){return this.productStreamRepository.hasChanges(this.productStream)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(t){this.languageId=t,this.isLoading=!0,this.loadEntityData(this.productStream.id).then(()=>{this.isLoading=!1})},onDuplicate(){return this.onSave().then(()=>{const t={cloneChildren:!0,overwrites:{name:`${this.productStream.name||this.productStream.translated.name} ${this.$tc("global.default.copy")}`}};return this.isLoading=!0,this.productStreamRepository.clone(this.productStream.id,t,Cicada.Context.api).then(e=>{const r={name:"sw.product.stream.detail",params:{id:e.id}};this.$router.push(r)}).catch(()=>{this.isLoading=!1,this.createNotificationError({message:this.$tc("global.notification.unspecifiedSaveErrorMessage")})})})},onSave(){return this.isSaveSuccessful=!1,this.isLoading=!0,this.productStream.isNew()?(this.productStream.filters=this.productStreamFiltersTree,this.saveProductStream().then(()=>{this.$router.push({name:"sw.product.stream.detail",params:{id:this.productStream.id}}),this.isSaveSuccessful=!0}).catch(()=>{this.showErrorNotification(),this.isLoading=!1})):this.productStreamRepository.save(this.productStream,a.api).then(this.syncProductStreamFilters).then(()=>this.loadEntityData(this.productStream.id)).then(()=>{this.isSaveSuccessful=!0,this.isLoading=!1}).catch(()=>{this.isLoading=!1,this.showErrorNotification()})},showErrorNotification(){this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")})},saveProductStream(){return this.productStreamRepository.save(this.productStream,a.api)},syncProductStreamFilters(){return this.productStreamFiltersRepository.sync(this.productStreamFiltersTree,a.api).then(()=>this.deletedProductStreamFilters.length>0?this.productStreamFiltersRepository.syncDeleted(this.deletedProductStreamFilters,a.api).then(()=>{this.deletedProductStreamFilters=[]}):Promise.resolve())},onCancel(){this.$router.push({name:"sw.product.stream.index"})},openModalPreview(){this.showModalPreview=!0},closeModalPreview(){this.showModalPreview=!1},getProductCustomFields(){this.customFieldsLoading=!0;const t=new s(1,null);t.addFilter(s.equals("relations.entityName","product"));const e=[];return this.customFieldSetRepository.search(t,a.api).then(r=>{const o=new s(1,null);o.addAssociation("customFields").addAssociation("relations"),r.forEach(l=>{e.push(this.customFieldSetRepository.get(l.id,a.api,o).then(n=>{const u=n.customFields.reduce((c,i)=>(c[i.name]=this.mapCustomFieldType({type:i.type,value:`customFields.${i.name}`,label:this.getCustomFieldLabel(i),config:i.config}),c),{});Object.assign(this.productCustomFields,u)}))}),Promise.all(e).then(()=>{this.customFieldsLoading=!1})})},getCustomFieldLabel(t){return this.getInlineSnippet(t.config.label)||t.name},mapCustomFieldType(t){switch(t.type){case"bool":t.type="boolean";break;case"html":case"text":t.type="string";break;case"date":t.type="string",t.format="date-time";break}return t},updateFilterTree({conditions:t,deletedIds:e}){this.productStreamFiltersTree=t,this.deletedProductStreamFilters=[...this.deletedProductStreamFilters,...e]},getNoPermissionsTooltip(t,e=!0){return{showDelay:300,message:this.$tc("sw-privileges.tooltip.warning"),appearance:"dark",showOnDisabledElements:e,disabled:this.acl.can(t)}}}};export{h as default};
//# sourceMappingURL=index-G52Yi39x.js.map
