const s=`{% block sw_settings_language_detail %} <sw-page class="sw-settings-language-detail"> {% block sw_settings_language_detail_header %} <template #smart-bar-header> <h2 v-if="languageHasName" > {{ language.name }} </h2> <h2 v-else > {{ $tc('sw-settings-language.detail.textHeadline') }} </h2> </template> {% endblock %} {% block sw_settings_language_detail_actions %} <template #smart-bar-actions> {% block sw_settings_language_detail_actions_abort %} <sw-button v-tooltip.bottom="tooltipCancel" @click="onCancel" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_settings_language_detail_actions_save %} <sw-button-process v-model:process-success="isSaveSuccessful" v-tooltip.bottom="tooltipSave" class="sw-settings-language-detail__save-action" :is-loading="isLoading" :disabled="isLoading || !allowSave || undefined" variant="primary" @click.prevent="onSave" > {{ $tc('sw-settings-language.detail.buttonSave') }} </sw-button-process> {% endblock %} </template> {% endblock %} {% block sw_settings_language_detail_content %} <template #content> <sw-card-view> <sw-skeleton v-if="isLoading" /> <template v-else> {% block sw_settings_language_detail_content_language_info %} <sw-language-info :entity-description="language.name" :is-new-entity="isNewLanguage" /> {% endblock %} {% block sw_settings_language_detail_content_card %} <sw-card :title="$tc('sw-settings-language.detail.titleCard')" position-identifier="sw-settings-language-detail-content" > <sw-container columns="repeat(auto-fit, minmax(250px, 1fr))" gap="0px 30px" > {% block sw_settings_language_detail_content_field_name %} <sw-text-field v-model:value="language.name" name="sw-field--language-name" :disabled="!acl.can('language.editor') || undefined" :label="$tc('sw-settings-language.detail.labelName')" :placeholder="$tc('sw-settings-language.detail.placeholderName')" :error="languageNameError" validation="required" required /> {% endblock %} {% block sw_settings_language_detail_content_field_localeId %} <sw-entity-single-select id="locales" v-model:value="language.localeId" name="sw-field--language-localeId" required show-clearable-button class="sw-settings-language-detail__select-locale" :disabled="!acl.can('language.editor') || undefined" :label="$tc('sw-settings-language.detail.labelLocale')" entity="locale" :placeholder="$tc('sw-settings-language.detail.placeholderPleaseSelect')" :error="languageLocaleIdError" > <template #selection-label-property="{ item, getKey }"> {{ getKey(item, 'translated.name') }}, {{ getKey(item, 'translated.territory') }} </template> <template #result-label-property="{ item, index, labelProperty, searchTerm, highlightSearchTerm, getKey }"> <sw-highlight-text v-if="highlightSearchTerm" :text="\`\${getKey(item, 'translated.name')}, \${getKey(item, 'translated.territory')}\`" :search-term="searchTerm" /> <template v-else> {{ getKey(item, 'translated.name') }}, {{ getKey(item, 'translated.territory') }} </template> </template> </sw-entity-single-select> {% endblock %} {% block sw_settings_language_detail_content_field_iso_code %} <sw-entity-single-select id="iso-codes" v-model:value="language.translationCodeId" class="sw-settings-language-detail__select-iso-code" :disabled="!acl.can('language.editor') || undefined" label-property="code" :label="$tc('sw-settings-language.detail.labelIsoCode')" :required="isIsoCodeRequired" show-clearable-button :placeholder="$tc('sw-settings-language.detail.placeholderPleaseSelect')" entity="locale" > <template #result-item="{ isSelected, setValue, item, index, labelProperty, searchTerm, highlightSearchTerm, getKey }"> <sw-select-result v-tooltip="{ showDelay: 300, message: $tc('sw-settings-language.detail.textIsoCodeIsInUse'), disabled: !isLocaleAlreadyUsed(item?.id) }" :selected="isSelected(item)" v-bind="{ item, index }" @item-select="setValue" > <sw-highlight-text v-if="highlightSearchTerm" :text="(getKey(item,labelProperty) || getKey(item, \`translated.\${labelProperty}\`)) + (isLocaleAlreadyUsed(item?.id) ? '*' : '')" :search-term="searchTerm" /> <template v-else> {{ getKey(item,labelProperty) || getKey(item, \`translated.\${labelProperty}\`) }} </template> </sw-select-result> </template> <template #hint> <div v-if="isLocaleAlreadyUsed(language.translationCodeId)"> {{ $tc('sw-settings-language.detail.textIsoCodeIsInUse') }} </div> </template> </sw-entity-single-select> {% endblock %} {% block sw_settings_language_detail_content_field_parentId %} <sw-entity-single-select id="inherit" v-model:value="language.parentId" name="sw-field--language-parentId" class="sw-settings-language-detail__select-parent" :criteria="parentLanguageCriteria" :disabled="!acl.can('language.editor') || isSystemDefaultLanguageId || undefined" :label="$tc('sw-settings-language.detail.labelParent')" :placeholder="$tc('sw-settings-language.detail.placeholderPleaseSelect')" :help-text="inheritanceTooltipText" entity="language" show-clearable-button @update:value="onInputLanguage" > <template #result-item="{ isSelected, setValue, item, index, labelProperty, searchTerm, highlightSearchTerm, getKey }"> <sw-select-result v-tooltip="{ showDelay: 300, message: $tc('sw-settings-language.detail.textLanguageHasParent'), disabled: !item.parentId }" :disabled="!!item.parentId || undefined" :selected="isSelected(item)" v-bind="{ item, index }" @item-select="setValue" > <sw-highlight-text v-if="highlightSearchTerm" :text="getKey(item,labelProperty) || getKey(item, \`translated.\${labelProperty}\`)" :search-term="searchTerm" /> <template v-else> {{ getKey(item,labelProperty) || getKey(item, \`translated.\${labelProperty}\`) }} </template> </sw-select-result> </template> </sw-entity-single-select> {% endblock %} </sw-container> {% block sw_settings_language_detail_content_alert_change_parent %} <mt-banner v-if="showAlertForChangeParentLanguage" class="sw-settings-language--alert-change-parent" :title="$tc('global.default.warning')" variant="attention" > {{ $tc('sw-settings-language.detail.textAlertChangeParent') }} </mt-banner> {% endblock %} </sw-card> {% endblock %} {% block sw_settings_language_detail_custom_field_sets %} <sw-card v-if="showCustomFields" position-identifier="sw-settings-language-detail-custom-field-sets" :title="$tc('sw-settings-custom-field.general.mainMenuItemGeneral')" :is-loading="isLoading" > <sw-custom-field-set-renderer :entity="language" :disabled="!acl.can('language.editor') || undefined" :sets="customFieldSets" /> </sw-card> {% endblock %} </template> </sw-card-view> </template> {% endblock %} </sw-page> {% endblock %}`,{Mixin:l}=Shopware,{Criteria:a}=Shopware.Data,{mapPropertyErrors:n}=Shopware.Component.getComponentHelper(),i={template:s,inject:["repositoryFactory","acl","customFieldDataProviderService","feature"],mixins:[l.getByName("notification"),l.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":{active(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},props:{languageId:{type:String,required:!1,default:null}},data(){return{language:null,usedTranslationIds:[],showAlertForChangeParentLanguage:!1,isLoading:!1,isSaveSuccessful:!1,customFieldSets:null,parentTranslationCodeId:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.languageHasName?this.language.name:""},languageRepository(){return this.repositoryFactory.create("language")},isIsoCodeRequired(){return!this.language.parentId},languageHasName(){return this.language!==null&&this.language.name},isNewLanguage(){return this.language&&typeof this.language.isNew=="function"?this.language.isNew():!1},usedLocaleCriteria(){return new a(1,null).addFilter(a.not("and",[a.equals("id",this.languageId)])).addAggregation(a.terms("usedTranslationIds","language.translationCode.id",null,null,null))},allowSave(){return this.isNewLanguage?this.acl.can("language.creator"):this.acl.can("language.editor")},tooltipSave(){return this.allowSave?{message:`${this.$device.getSystemKey()} + S`,appearance:"light"}:{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0}},tooltipCancel(){return{message:"ESC",appearance:"light"}},parentLanguageCriteria(){const e=new a(1,25);return e.addFilter(a.not("and",[a.equals("id",this.language.id)])),e},isSystemDefaultLanguageId(){return this.language.id===Shopware.Context.api.systemLanguageId},inheritanceTooltipText(){return this.isSystemDefaultLanguageId?this.$tc("sw-settings-language.detail.tooltipInheritanceNotPossible"):this.$tc("sw-settings-language.detail.tooltipLanguageNotChoosable")},showCustomFields(){return this.customFieldSets&&this.customFieldSets.length>0},...n("language",["localeId","name"])},watch:{languageId(){this.languageId===null&&this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){if(!this.languageId){Shopware.Store.get("context").resetLanguageToDefault(),this.language=this.languageRepository.create();return}this.loadEntityData().then(()=>this.loadCustomFieldSets()).then(()=>{this.languageRepository.search(this.usedLocaleCriteria).then(e=>{this.usedTranslationIds=e.aggregations.usedTranslationIds.buckets.map(t=>t.key)})})},loadEntityData(){return this.isLoading=!0,this.languageRepository.get(this.languageId).then(e=>{this.isLoading=!1,this.language=e,e.parentId&&this.setParentTranslationCodeId(e.parentId)}).catch(()=>{this.isLoading=!1})},loadCustomFieldSets(){return this.customFieldDataProviderService.getCustomFieldSets("language").then(e=>{this.customFieldSets=e})},checkTranslationCodeInheritance(e){return e===this.parentTranslationCodeId},setParentTranslationCodeId(e){this.languageRepository.get(e,Shopware.Context.api).then(t=>{this.parentTranslationCodeId=t.translationCodeId})},onInputLanguage(e){e&&this.setParentTranslationCodeId(e);const t=this.language.getOrigin();this.language.isNew()||!t.parentId||(this.showAlertForChangeParentLanguage=t.parentId!==this.language.parentId)},isLocaleAlreadyUsed(e){return this.usedTranslationIds.some(t=>e===t)},onSave(){this.isLoading=!0,this.languageRepository.save(this.language).then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0,this.languageId||this.$router.push({name:"sw.settings.language.detail",params:{id:this.language.id}})}).catch(()=>{this.isLoading=!1})},onCancel(){this.$router.push({name:"sw.settings.language.index"})}}};export{i as default};
