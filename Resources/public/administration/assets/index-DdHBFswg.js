const s=`{% block sw_settings_product_feature_set_detail %} <sw-page class="sw-settings-product-feature-sets-detail"> {% block sw_settings_product_feature_set_detail_header %} <template #smart-bar-header> <h2>{{ placeholder(productFeatureSet, 'name', $tc('sw-settings-product-feature-sets.detail.textHeadline')) }}</h2> </template> {% endblock %} {% block sw_settings_product_feature_set_detail_language_switch %} <template #language-switch> <sw-language-switch @on-change="onChangeLanguage" /> </template> {% endblock %} {% block sw_settings_product_feature_set_detail_actions %} <template #smart-bar-actions> {% block sw_settings_product_feature_set_detail_actions_save %} <sw-button-process v-model:processSuccess="isSaveSuccessful" v-tooltip.bottom="tooltipSave" class="sw-settings-currency-detail__save-action" :is-loading="isLoading" :disabled="isLoading || !acl.can('product_feature_sets.editor') || undefined" variant="primary" @update:process-success="saveFinish" @click.prevent="onSave" > {{ $tc('sw-settings-product-feature-sets.detail.buttonSave') }} </sw-button-process> {% endblock %} </template> {% endblock %} {% block sw_settings_product_feature_set_detail_content %} <template #content> <sw-card-view> <template v-if="isLoading"> <sw-skeleton variant="detail-bold" /> <sw-skeleton /> </template> <template v-else> {% block sw_settings_product_feature_set_detail_content_language_info %} <sw-language-info :entity-description="placeholder(productFeatureSet, 'name', $tc('sw-settings-product-feature-sets.detail.textHeadline'))" /> {% endblock %} {% block sw_settings_product_feature_set_detail_content_card %} <sw-card :title="$tc('sw-settings-product-feature-sets.detail.titleCard')" position-identifier="sw-settings-product-feature-sets-detail" > {% block sw_settings_product_feature_set_detail_content_field_name %} <sw-text-field v-model:value="productFeatureSet.name" class="sw-settings-product-feature-sets-detail__name" validation="required" required :error="productFeatureSetNameError" :disabled="!acl.can('product_feature_sets.editor')" :label="$tc('sw-settings-product-feature-sets.detail.labelName')" :placeholder="placeholder(productFeatureSet, 'name', $tc('sw-settings-product-feature-sets.detail.placeholderName'))" /> {% endblock %} {% block sw_settings_product_feature_set_detail_content_field_description %} <sw-textarea-field v-model:value="productFeatureSet.description" :label="$tc('sw-settings-product-feature-sets.detail.labelDescription')" class="sw-settings-product-feature-sets-detail__description" :error="productFeatureSetDescriptionError" :disabled="!acl.can('product_feature_sets.editor')" :placeholder="placeholder(productFeatureSet, 'description', $tc('sw-settings-product-feature-sets.detail.placeholderDescription'))" /> {% endblock %} </sw-card> {% endblock %} {% block sw_settings_product_feature_set_detail_content_values_card %} <sw-settings-product-feature-sets-values-card v-if="productFeatureSet.id" :disabled="!productFeatureSetId || undefined" :allow-edit="acl.can('product_feature_sets.editor') || undefined" class="sw-settings-product-feature-sets-detail__tax-rule-grid" :product-feature-set="productFeatureSet" :is-loading="isLoading" @product-feature-set-rule-save="onSave" /> {% endblock %} </template> </sw-card-view> </template> {% endblock %} </sw-page> {% endblock %}`,{Mixin:t}=Cicada,{mapPropertyErrors:a}=Cicada.Component.getComponentHelper(),r={template:s,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl","feature"],mixins:[t.getByName("notification"),t.getByName("placeholder")],props:{productFeatureSetId:{type:String,required:!1,default:null}},shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},data(){return{productFeatureSet:{},isLoading:!1,isSaveSuccessful:!1}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.productFeatureSet,"name")},productFeatureSetsRepository(){return this.repositoryFactory.create("product_feature_set")},tooltipSave(){return this.acl.can("product_feature_sets.editor")?{message:`${this.$device.getSystemKey()} + S`,appearance:"light"}:{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("product_feature_sets.editor"),showOnDisabledElements:!0}},tooltipCancel(){return{message:"ESC",appearance:"light"}},...a("productFeatureSet",["name","description","features.id"])},watch:{productFeatureSetId(){this.productFeatureSetId||this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){if(this.isLoading=!0,this.productFeatureSetId){this.productFeatureSetsRepository.get(this.productFeatureSetId).then(e=>{e.features&&!e.features.length&&(e.features=[]),this.productFeatureSet=e,this.isLoading=!1});return}this.productFeatureSet=this.productFeatureSetsRepository.create(),this.isLoading=!1},loadEntityData(){this.productFeatureSetsRepository.get(this.productFeatureSetId).then(e=>{e.features&&!e.features.length&&(e.features=[]),this.productFeatureSet=e})},saveFinish(){this.isSaveSuccessful=!1},onSave(){return this.isSaveSuccessful=!1,this.isLoading=!0,this.productFeatureSetsRepository.save(this.productFeatureSet).then(()=>{this.isSaveSuccessful=!0,this.productFeatureSetId||this.$router.push({name:"sw.settings.product.feature.sets.detail",params:{id:this.productFeatureSet.id}})}).then(()=>{this.loadEntityData()}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-product-feature-sets.detail.notificationErrorMessage")})}).finally(()=>{this.isLoading=!1})},onCancel(){this.$router.push({name:"sw.settings.product.feature.sets.index"})},abortOnLanguageChange(){return this.productFeatureSetsRepository.hasChanges(this.productFeatureSet)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(){this.loadEntityData()}}};export{r as default};
//# sourceMappingURL=index-DdHBFswg.js.map
