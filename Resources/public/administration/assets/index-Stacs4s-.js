const i=`{% block sw_custom_field_type_base_content %} {% block sw_custom_field_type_select_options %}{% endblock %} {% block sw_custom_field_type_select_add_option %}{% endblock %} {% block sw_custom_field_type_select_multi %}{% endblock %} {% parent() %} {% block sw_custom_field_type_entity_type %} <sw-single-select v-model:value="currentCustomField.config.entity" :disabled="!currentCustomField._isNew || undefined" :help-text="$tc('sw-settings-custom-field.customField.detail.helpTextEntitySelect')" :label="$tc('sw-settings-custom-field.customField.detail.labelEntityTypeSelect')" :options="sortedEntityTypes" show-clearable-button @update:value="onChangeEntityType" /> {% endblock %} {% block sw_custom_field_type_entity_multi %}{% endblock %} {% endblock %}`,{Criteria:l}=Shopware.Data,o={template:i,inject:["repositoryFactory"],mounted(){this.customEntityRepository.search(new l,Shopware.Context.api).then(t=>{this.customEntities=t})},data(){return{customEntities:[]}},computed:{entityTypes(){const t=[{label:this.$tc("sw-settings-custom-field.customField.entity.product"),value:"product"},{label:this.$tc("sw-settings-custom-field.customField.entity.category"),value:"category"},{label:this.$tc("sw-settings-custom-field.customField.entity.shippingMethod"),value:"shipping_method"},{label:this.$tc("sw-settings-custom-field.customField.entity.paymentMethod"),value:"payment_method"},{label:this.$tc("sw-settings-custom-field.customField.entity.country"),value:"country"},{label:this.$tc("sw-settings-custom-field.customField.entity.customer"),value:"customer",config:{labelProperty:["firstName","lastName"]}},{label:this.$tc("sw-settings-custom-field.customField.entity.salesChannel"),value:"sales_channel"},{label:this.$tc("sw-settings-custom-field.customField.entity.manufacturer"),value:"product_manufacturer"},{label:this.$tc("sw-settings-custom-field.customField.entity.dynamicProductGroup"),value:"product_stream"},{label:this.$tc("sw-settings-custom-field.customField.entity.shoppingExperienceLayout"),value:"cms_page"}];return this.customFieldsAwareCustomEntities.forEach(e=>{t.push({label:this.$tc(`${e.name}.label`),value:e.name,config:{labelProperty:e.labelProperty}})}),t},customFieldsAwareCustomEntities(){return this.customEntities.filter(t=>t.customFieldsAware)},customEntityRepository(){return this.repositoryFactory.create("custom_entity")},sortedEntityTypes(){return this.entityTypes.sort((t,e)=>t.label.localeCompare(e.label))}},methods:{createdComponent(){this.currentCustomField.config.hasOwnProperty("options")&&delete this.currentCustomField.config.options;const t=this.currentCustomField.config.componentName;(!t||!["sw-entity-single-select","sw-entity-multi-id-select"].includes(t))&&(this.currentCustomField.config.componentName="sw-entity-single-select"),this.multiSelectSwitchDisabled=!this.currentCustomField._isNew,this.multiSelectSwitch=t==="sw-entity-multi-id-select"},onChangeEntityType(t){const e=this.entityTypes.find(s=>s.value===t);delete this.currentCustomField.config.labelProperty,e.hasOwnProperty("config")&&e.config.hasOwnProperty("labelProperty")&&(this.currentCustomField.config.labelProperty=e.config.labelProperty)},onChangeMultiSelectSwitch(t){if(t){this.currentCustomField.config.componentName="sw-entity-multi-id-select";return}this.currentCustomField.config.componentName="sw-entity-single-select"}}};export{o as default};
