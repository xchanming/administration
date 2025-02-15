const n=`{% block sw_flow_set_entity_custom_field_modal %} <sw-modal class="sw-flow-set-entity-custom-field-modal" :title="$tc('sw-flow.modals.setEntityCustomField.title')" :closable="false" @modal-close="onClose" > {% block sw_flow_set_entity_custom_field_modal_content %} <div class="sw-flow-set-entity-custom-field-modal__content"> {% block sw_flow_tag_modal_to_field %} <sw-single-select v-model:value="entity" name="sw-field--entity" class="sw-flow-set-entity-custom-field-modal__entity-field" required show-clearable-button :label="$tc('sw-flow.modals.setEntityCustomField.labelToField')" :placeholder="$tc('sw-flow.modals.setEntityCustomField.placeholderToField')" :error="entityError" :options="entityOptions" @update:value="onEntityChange()" /> {% endblock %} {% block sw_flow_set_entity_custom_field_modal_category %} <sw-entity-single-select v-model:value="customFieldSetId" name="sw-field--customFieldSetId" class="sw-flow-set-entity-custom-field-modal__custom-field-set" entity="custom_field_set" required :label-property="labelProperty" :disabled="!entity" :criteria="customFieldSetCriteria" :label="$tc('sw-flow.modals.setEntityCustomField.customFieldSet')" :placeholder="$tc('sw-flow.modals.setEntityCustomField.customFieldSetPlaceHolder')" :error="customFieldSetError" @update:value="(id, customFieldSet) => onCustomFieldSetChange(id, customFieldSet)" > <template #selection-label-property="{ item }"> {{ getInlineSnippet(item.config.label) || item.name }} </template> <template #result-label-property="{ item }"> {{ getInlineSnippet(item.config.label) || item.name }} </template> </sw-entity-single-select> {% endblock %} {% block sw_flow_set_entity_custom_field_modal_field_name %} <sw-entity-single-select v-model:value="customFieldId" name="sw-field--customFieldId" class="sw-flow-set-entity-custom-field-modal__custom-field" entity="custom_field" required :label-property="labelProperty" :label="$tc('sw-flow.modals.setEntityCustomField.customField')" :disabled="!customFieldSetId" :criteria="customFieldCriteria" :placeholder="$tc('sw-flow.modals.setEntityCustomField.customFieldPlaceHolder')" :error="customFieldError" @update:value="(id, customField) => onCustomFieldChange(id, customField)" > <template #selection-label-property="{ item }"> {{ getInlineSnippet(item.config.label) || item.name }} </template> <template #result-label-property="{ item }"> {{ getInlineSnippet(item.config.label) || item.name }} </template> </sw-entity-single-select> {% endblock %} {% block sw_flow_set_entity_custom_field_modal_field_value_options %} <sw-single-select v-if="customFieldId" v-model:value="fieldOptionSelected" name="sw-field--fieldOptionSelected" class="sw-flow-set-entity-custom-field-modal__custom-field-value-options" :options="fieldOptions" :label="$tc('sw-flow.modals.setEntityCustomField.customFieldOption')" :highlight-search-term="false" /> {% endblock %} {% block sw_flow_set_entity_custom_field_modal_field_value %} <sw-form-field-renderer v-if="showFieldValue" v-model:value="customFieldValue" name="sw-field--customFieldValue" class="sw-flow-set-entity-custom-field-modal__custom-field-value" :config="renderedFieldConfig" bordered > <template #label> {{ $tc('sw-flow.modals.setEntityCustomField.prefixFieldName') }} {{ getInlineSnippet(customField.config.label) || customField.name }} </template> </sw-form-field-renderer> {% endblock %} </div> {% endblock %} {% block sw_flow_set_entity_custom_field_modal_custom %} {% endblock %} {% block sw_flow_set_entity_custom_field_modal_footer %} <template #modal-footer> {% block sw_flow_set_entity_custom_field_modal_footer_cancel_button %} <sw-button class="sw-flow-set-entity-custom-field-modal__cancel-button" @click="onClose" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_flow_set_entity_custom_field_modal_footer_save_button %} <sw-button class="sw-flow-set-entity-custom-field-modal__save-button" variant="primary" @click="onAddAction" > {{ sequence.id ? $tc('sw-flow.modals.buttonSaveAction') : $tc('sw-flow.modals.buttonAddAction') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %}`,{Component:r,Mixin:s,Store:c}=Shopware,{Criteria:i}=Shopware.Data,{mapState:a}=r.getComponentHelper(),{ShopwareError:u}=Shopware.Classes,m={template:n,inject:["repositoryFactory","flowBuilderService"],emits:["modal-close","process-finish"],mixins:[s.getByName("sw-inline-snippet"),s.getByName("notification")],props:{sequence:{type:Object,required:!0},action:{type:String,required:!1,default:null}},data(){return{customFieldSetId:null,customFieldId:null,customFieldValue:null,customFieldSetError:null,customFieldError:null,config:{},renderedFieldConfig:{},fieldOptions:[],fieldOptionSelected:"upsert",customField:{config:{label:""}},entity:null,entityError:null,entityOptions:[]}},computed:{customFieldRepository(){return this.repositoryFactory.create("custom_field")},customFieldCriteria(){const e=new i(1,25);return e.addFilter(i.equals("customFieldSetId",this.customFieldSetId)),e},customFieldSetCriteria(){if(!this.entity)return null;const e=new i(1,25);return e.addFilter(i.equals("relations.entityName",this.convertToEntityTechnicalName(this.entity))),e},showFieldValue(){return this.customFieldId&&this.fieldOptionSelected!=="clear"},defaultFieldOptions(){return[{value:"upsert",label:`${this.$tc("sw-flow.modals.setEntityCustomField.options.overwrite")}`},{value:"create",label:`${this.$tc("sw-flow.modals.setEntityCustomField.options.notOverwrite")}`},{value:"clear",label:`${this.$tc("sw-flow.modals.setEntityCustomField.options.clear")}`}]},multipleFieldOptions(){return[...this.defaultFieldOptions,{value:"add",label:`${this.$tc("global.default.add")}`},{value:"remove",label:`${this.$tc("global.default.remove")}`}]},labelProperty(){return`config.label.${Shopware.Store.get("session").currentLocale}`},...a(()=>c.get("swFlow"),["triggerEvent","customFieldSets","customFields","triggerActions"])},watch:{entity(e){e&&this.entityError&&(this.entityError=null)},renderedFieldConfig(e){e.customFieldType==="colorpicker"&&!this.renderedFieldConfig.zIndex&&(this.renderedFieldConfig={...this.renderedFieldConfig,zIndex:1001}),this.fieldOptions=this.getFieldOptions(this.renderedFieldConfig)},customFieldSetId(e){e&&this.customFieldSetError&&(this.customFieldSetError=null)},customFieldId(e){e&&this.customFieldError&&(this.customFieldError=null)}},created(){this.createdComponent()},methods:{createdComponent(){this.getEntityOptions(),this.sequence.config&&(this.entity=this.sequence.config.entity,this.customFieldSetId=this.sequence.config.customFieldSetId,this.customFieldSetLabel=this.sequence.config.customFieldSetLabel,this.customFieldId=this.sequence.config.customFieldId,this.customFieldLabel=this.sequence.config.customFieldLabel,this.customFieldValue=this.sequence.config.customFieldValue,this.getCustomFieldRendered())},getCustomFieldRendered(){this.customFieldRepository.get(this.customFieldId).then(e=>{this.customField=e,this.renderedFieldConfig=this.validateOptionSelectFieldLabel(e.config)}).catch(()=>{this.createNotificationError({message:this.$tc("global.notification.unspecifiedSaveErrorMessage")})}).finally(()=>{this.fieldOptionSelected=this.sequence.config.option})},onEntityChange(){this.customFieldSetId=null},onCustomFieldSetChange(e,t){t&&(Shopware.Store.get("swFlow").customFieldSets=[...this.customFieldSets,t],this.customFieldId=null,this.customFieldValue=null,this.renderedFieldConfig={})},onCustomFieldChange(e,t){t&&(this.customField=t,Shopware.Store.get("swFlow").customFields=[...this.customFields,t],this.customFieldValue=null,this.renderedFieldConfig=this.validateOptionSelectFieldLabel(t.config),this.renderedFieldConfig.componentName==="sw-entity-multi-id-select"&&(this.customFieldValue=[]))},validateOptionSelectFieldLabel(e){return e.options&&e.options.forEach(t=>{t.label=this.getInlineSnippet(t.label)||t.value}),e},onClose(){this.customFieldSetError=null,this.customFieldError=null,this.$emit("modal-close")},onAddAction(){var t;if(this.entityError=this.fieldError(this.entity),this.customFieldSetError=this.entity?this.fieldError(this.customFieldSetId):null,this.customFieldError=this.customFieldSetId?this.fieldError(this.customFieldId):null,this.customFieldSetError||this.customFieldError||this.entityError)return;const e={...this.sequence,config:{entity:this.entity,customFieldSetId:this.customFieldSetId,customFieldId:this.customFieldId,customFieldValue:this.customFieldValue,option:this.fieldOptionSelected,optionLabel:(t=this.fieldOptions.find(l=>l.value===this.fieldOptionSelected))==null?void 0:t.label}};this.$emit("process-finish",e)},fieldError(e){return!e||!e.length?new u({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"}):null},getFieldOptions(e){switch(e.componentName){case"sw-entity-multi-id-select":case"sw-multi-select":return this.multipleFieldOptions;default:return this.defaultFieldOptions}},getEntityOptions(){var o;if(!this.triggerEvent){this.entityOptions=[];return}const e=this.triggerEvent.aware??[],t=this.flowBuilderService.getAvailableEntities(this.action,this.triggerActions,e,["customFields"]),l=this.flowBuilderService.getEntityNameByAction(this.action);t.length&&(this.entity=((o=t.find(d=>d.value===l))==null?void 0:o.value)||t[0].value),this.entityOptions=t},convertToEntityTechnicalName(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}}};export{m as default};
