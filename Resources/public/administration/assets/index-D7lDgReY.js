import{m as i}from"./main.vite-GBE0T_D3.js";import"./administration-BlrHhDOI.js";import"./channel-DxwX5hMG.js";const o=`{% block sw_import_export_edit_profile_general %} <div class="sw-import-export-edit-profile-general"> {% block sw_import_export_edit_profile_general_text %} <p class="sw-import-export-edit-profile-general__text"> {{ $tc('sw-import-export.profile.descriptionBlock') }} </p> {% endblock %} {% block sw_import_export_edit_profile_general_container %} <sw-container columns="1fr 1fr" gap="0 32px" > {% block sw_import_export_edit_profile_general_container_name %} <sw-text-field v-model:value="profile.label" :label="$tc('sw-import-export.profile.profileNameFieldLabel')" required :disabled="profile.systemDefault" :error="profileNameError" :placeholder="profile.translated.label" /> {% endblock %} {% block sw_import_export_edit_profile_general_container_technical_name %} <sw-text-field v-model:value="profile.technicalName" :label="$tc('sw-import-export.profile.technicalNameFieldLabel')" required :disabled="profile.systemDefault" :placeholder="profile.technicalName" /> {% endblock %} {% block sw_import_export_edit_profile_general_container_object_type %} <span v-tooltip="{ message: $tc('sw-import-export.profile.objectTypeFieldTooltipText'), disabled: mappingLength <= 0, showOnDisabledElements: false }" class="sw-import-export-edit-profile-general__object-type-field" > {% block sw_import_export_edit_profile_general_container_object_type_select %} <sw-single-select ref="objectTypeSelect" v-model:value="profile.sourceEntity" class="sw-import-export-edit-profile-general__object-type-select" :label="$tc('sw-import-export.profile.objectTypeFieldLabel')" required :options="supportedEntities" :disabled="profile.systemDefault || mappingLength > 0" :error="profileSourceEntityError" :show-clearable-button="!(profile.systemDefault || mappingLength > 0)" > <template #result-item="{ item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }" > {% block sw_import_export_edit_profile_general_container_object_type_select_result %} <sw-select-result v-tooltip="{ showDelay: 300, message: $tc('sw-import-export.profile.objectTypeDisabledText'), disabled: !shouldDisableObjectType(item) }" :disabled="item.disabled || shouldDisableObjectType(item)" :class="'sw-select-option--' + item.value" :selected="isSelected(item)" v-bind="{ item, index }" @item-select="setValue" > {% block sw_import_export_edit_profile_general_container_object_type_select_result_highlight %} <sw-highlight-text v-if="highlightSearchTerm && !isSelected(item)" :text="getKey(item, labelProperty)" :search-term="searchTerm" /> {% endblock %} {% block sw_import_export_edit_profile_general_container_object_type_select_result_text %} <template v-else> {{ getKey(item, labelProperty) }} </template> {% endblock %} </sw-select-result> {% endblock %} </template> </sw-single-select> {% endblock %} </span> {% endblock %} {% block sw_import_export_edit_profile_general_container_type %} <sw-single-select v-model:value="profile.type" class="sw-import-export-edit-profile-general__type-select" :label="$tc('sw-import-export.profile.typeFieldLabel')" required :options="supportedProfileTypes" :disabled="profile.systemDefault" :error="profileTypeError" :show-clearable-button="!profile.systemDefault" > <template #result-item="{ item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }" > {% block sw_import_export_edit_profile_general_container_type_result %} <sw-select-result v-tooltip="{ showDelay: 300, message: $tc('sw-import-export.profile.profileTypeDisabledText'), disabled: !shouldDisableProfileType(item) }" :disabled="item.disabled || shouldDisableProfileType(item)" :class="'sw-select-option--' + item.value" :selected="isSelected(item)" v-bind="{ item, index }" @item-select="setValue" > {% block sw_import_export_edit_profile_general_container_type_result_highlight %} <sw-highlight-text v-if="highlightSearchTerm && !isSelected(item)" :text="getKey(item, labelProperty)" :search-term="searchTerm" /> {% endblock %} {% block sw_import_export_edit_profile_general_container_type_result_text %} <template v-else> {{ getKey(item, labelProperty) }} </template> {% endblock %} </sw-select-result> {% endblock %} </template> </sw-single-select> {% endblock %} </sw-container> {% endblock %} </div> {% endblock %}`,e={IMPORT:"import",EXPORT:"export",IMPORT_EXPORT:"import-export"},c={template:o,compatConfig:Cicada.compatConfig,inject:["feature"],props:{profile:{type:Object,required:!0}},computed:{...i("profile",["name","sourceEntity","type"]),supportedProfileTypes(){return[{value:e.IMPORT_EXPORT,label:this.$tc("sw-import-export.profile.types.importExportLabel")},{value:e.IMPORT,label:this.$tc("sw-import-export.profile.types.importLabel")},{value:e.EXPORT,label:this.$tc("sw-import-export.profile.types.exportLabel")}]},supportedEntities(){return[{value:"product",label:this.$tc("sw-import-export.profile.productLabel"),type:e.IMPORT_EXPORT},{value:"customer",label:this.$tc("sw-import-export.profile.customerLabel"),type:e.IMPORT_EXPORT},{value:"category",label:this.$tc("sw-import-export.profile.categoriesLabel"),type:e.IMPORT_EXPORT},{value:"order",label:this.$tc("sw-import-export.profile.orderLabel"),type:e.EXPORT},{value:"media",label:this.$tc("sw-import-export.profile.mediaLabel"),type:e.IMPORT_EXPORT},{value:"newsletter_recipient",label:this.$tc("sw-import-export.profile.newsletterRecipientLabel"),type:e.IMPORT_EXPORT},{value:"property_group_option",label:this.$tc("sw-import-export.profile.propertyLabel"),type:e.IMPORT_EXPORT},{value:"product_configurator_setting",label:this.$tc("sw-import-export.profile.configuratorSettingLabel"),type:e.IMPORT_EXPORT},{value:"product_cross_selling",label:this.$tc("sw-import-export.profile.productCrossSellingLabel"),type:e.IMPORT_EXPORT},{value:"promotion_discount",label:this.$tc("sw-import-export.profile.promotionDiscountLabel"),type:e.IMPORT_EXPORT},{value:"promotion_individual_code",label:this.$tc("sw-import-export.profile.promotionIndividualCodesLabel"),type:e.IMPORT_EXPORT},{value:"product_price",label:this.$tc("sw-import-export.profile.productPriceLabel"),type:e.IMPORT_EXPORT}]},mappingLength(){return this.profile.mapping?this.profile.mapping.length:0}},methods:{shouldDisableProfileType(t){if(!this.profile.sourceEntity)return!1;const l=this.supportedEntities.find(r=>r.value===this.profile.sourceEntity);return l.type===e.IMPORT_EXPORT?!1:l.type===e.IMPORT?t.value!==e.IMPORT:l.type===e.EXPORT?t.value!==e.EXPORT:!0},shouldDisableObjectType(t){return this.profile.type?this.profile.type===e.IMPORT_EXPORT?t.type!==e.IMPORT_EXPORT:this.profile.type===e.IMPORT?![e.IMPORT,e.IMPORT_EXPORT].includes(t.type):this.profile.type===e.EXPORT?![e.EXPORT,e.IMPORT_EXPORT].includes(t.type):!0:!1}}};export{c as default};
//# sourceMappingURL=index-D7lDgReY.js.map
