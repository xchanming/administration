const a=`{% block sw_settings_tax_provider %} <sw-page class="sw-settings-tax-tax-provider-detail"> <template #smart-bar-header> <h2 v-if="label"> {{ label }} </h2> <h2 v-else> {{ $tc('sw-settings-tax.taxProviderDetail.textHeadline') }} </h2> </template> <template #smart-bar-actions> <sw-button v-tooltip.bottom="{ message: 'ESC', appearance: 'light' }" :disabled="isLoading" @click="onCancel" > {{ $tc('global.default.cancel') }} </sw-button> <sw-button-process v-model:processSuccess="isSaveSuccessful" class="sw-settings-tax-tax-provider-detail__save-action" variant="primary" :is-loading="isLoading" :disabled="isLoading || !allowSave || undefined" @click.prevent="onSave" > {{ $tc('global.default.save') }} </sw-button-process> </template> <template #content> <sw-card-view> <template v-if="isLoading"> <sw-skeleton /> <sw-skeleton /> </template> <template v-else> <sw-alert class="sw-settings-tax-tax-provider-detail-info" :title="$tc('sw-settings-tax.taxProviderDetail.infoTitle')" variant="info" > {{ $tc('sw-settings-tax.taxProviderDetail.infoText') }} </sw-alert> <sw-card position-identifier="sw-settings-tax-tax-provider-detail-settings" :title="$tc('sw-settings-tax.taxProviderDetail.cardTitleSettings')" :is-loading="isLoading" > <sw-container columns="5fr 1fr" gap="0px 30px" > <sw-number-field v-model:value="taxProvider.priority" class="sw-settings-tax-tax-provider-detail__field-priority" :disabled="true" :label="$tc('sw-settings-tax.taxProviderDetail.labelPriority')" /> <sw-switch-field v-model:value="taxProvider.active" class="sw-settings-tax-tax-provider-detail__field-active" :disabled="!acl.can('tax.editor') || undefined" :label="$tc('sw-settings-tax.taxProviderDetail.labelActive')" /> </sw-container> </sw-card> <sw-card position-identifier="sw-settings-tax-tax-provider-detail-availability" :title="$tc('sw-settings-tax.taxProviderDetail.cardTitleAvailability')" :is-loading="isLoading" > <sw-select-rule-create v-if="!isLoading" class="sw-settings-tax-tax-provider-detail__field-availability-rule" :disabled="!acl.can('tax.editor') || undefined" :rule-id="taxProvider.availabilityRuleId" :rule-filter="ruleFilter" :placeholder="$tc('sw-settings-tax.taxProviderDetail.placeholderAvailabilityRule')" rule-aware-group-key="taxProvider" @save-rule="onSaveRule" @dismiss-rule="onDismissRule" /> </sw-card> <sw-extension-component-section v-if="hasIdentifier" :position-identifier="positionIdentifier" /> </template> </sw-card-view> </template> </sw-page> {% endblock %}`,{Component:s,Mixin:r}=Cicada,{Criteria:i}=Cicada.Data,o=s.wrapComponentConfig({template:a,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],mixins:[r.getByName("notification")],props:{taxProviderId:{type:String,required:!1,default:""}},data(){return{taxProvider:void 0,isLoading:!1,isSaveSuccessful:!1}},metaInfo(){return{title:this.$createTitle()}},computed:{label(){var e,t;return((t=(e=this.taxProvider)==null?void 0:e.translated)==null?void 0:t.name)||""},taxProviderRepository(){return this.repositoryFactory.create("tax_provider")},allowSave(){return this.acl.can("tax.editor")},ruleFilter(){const e=new i(1,25);return e.addFilter(i.multi("OR",[i.contains("rule.moduleTypes.types","tax_provider"),i.equals("rule.moduleTypes",null)])),e.addSorting(i.sort("name","ASC",!1)),e},hasIdentifier(){var e;return!!((e=this.taxProvider)!=null&&e.identifier)},positionIdentifier(){var t;return this.hasIdentifier?`sw-settings-tax-tax-provider-detail-custom-${((t=this.taxProvider)==null?void 0:t.identifier)||""}`:""}},created(){this.createdComponent()},methods:{createdComponent(){this.loadTaxProvider()},loadTaxProvider(){return this.isLoading=!0,this.taxProviderId?this.taxProviderRepository.get(this.taxProviderId).then(e=>{this.taxProvider=e,this.isLoading=!1}):(this.isLoading=!1,Promise.resolve())},onSave(){return this.isSaveSuccessful=!1,this.isLoading=!0,this.taxProvider?this.taxProviderRepository.save(this.taxProvider).then(()=>(this.isSaveSuccessful=!0,this.loadTaxProvider())).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-tax.detail.messageSaveError")}),this.isLoading=!1}):Promise.resolve()},onCancel(){this.$router.push({name:"sw.settings.tax.index"})},onSaveRule(e){this.taxProvider&&(this.taxProvider.availabilityRuleId=e)},onDismissRule(){this.taxProvider&&(this.taxProvider.availabilityRuleId=void 0)}}});export{o as default};
//# sourceMappingURL=index-CFqhdzGe.js.map
