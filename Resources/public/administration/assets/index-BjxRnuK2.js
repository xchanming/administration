const l=`{% block sw_condition_value_content %} <div class="sw-condition-customer-custom-field sw-condition__condition-value"> {% block sw_condition_customer_custom_field_field %} <sw-entity-single-select ref="selectedField" v-model:value="selectedField" entity="custom_field" :criteria="customFieldCriteria" :placeholder="$tc('global.sw-condition.condition.lineItemCustomField.field.customFieldSelect.placeholder')" :disabled="disabled || undefined" size="medium" show-clearable-button @update:value="onFieldChange" > <template #selection-label-property="slotProps"> {{ getInlineSnippet(slotProps.item.config.label) || slotProps.item.name }} </template> <template #result-label-property="slotProps"> {{ getInlineSnippet(slotProps.item.config.label) || slotProps.item.name }} </template> <template #result-description-property="slotProps"> {% block sw_condition_customer_custom_field_field_description %} {{ getInlineSnippet(slotProps.item.customFieldSet.config.label) || slotProps.item.customFieldSet.name }} {% endblock %} </template> </sw-entity-single-select> {% endblock %} {% block sw_condition_customer_custom_field_operator %} <sw-condition-operator-select v-if="renderedField" v-bind="{ operators, condition }" :disabled="disabled || undefined" /> {% endblock %} {% block sw_condition_customer_custom_field_value %} <sw-form-field-renderer v-if="renderedField" :value="renderedFieldValue" :config="renderedField.config" :disabled="disabled || undefined" size="medium" @update:value="renderedFieldValue = $event" /> {% endblock %} </div> {% endblock %}`,{Component:i,Mixin:o}=Cicada,{mapPropertyErrors:d}=i.getComponentHelper(),{Criteria:t}=Cicada.Data;i.extend("sw-condition-customer-custom-field","sw-condition-base",{template:l,inject:["repositoryFactory","feature"],mixins:[o.getByName("sw-inline-snippet")],computed:{customFieldCriteria(){const e=new t(1,25);return e.addAssociation("customFieldSet"),e.addFilter(t.equals("customFieldSet.relations.entityName","customer")),e.addSorting(t.sort("customFieldSet.name","ASC")),e},operator:{get(){return this.ensureValueExist(),this.condition.value.operator},set(e){this.ensureValueExist(),this.condition.value={...this.condition.value,operator:e}}},renderedField:{get(){return this.ensureValueExist(),this.condition.value.renderedField},set(e){this.ensureValueExist(),this.condition.value={...this.condition.value,renderedField:e}}},selectedField:{get(){return this.ensureValueExist(),this.condition.value.selectedField},set(e){this.ensureValueExist(),this.condition.value={...this.condition.value,selectedField:e}}},selectedFieldSet:{get(){return this.ensureValueExist(),this.condition.value.selectedFieldSet},set(e){this.ensureValueExist(),this.condition.value={...this.condition.value,selectedFieldSet:e}}},renderedFieldValue:{get(){return this.ensureValueExist(),this.condition.value.renderedFieldValue},set(e){this.ensureValueExist(),this.condition.value={...this.condition.value,renderedFieldValue:e}}},operators(){return this.conditionDataProviderService.getOperatorSetByComponent(this.renderedField)},...d("condition",["value.renderedField","value.selectedField","value.selectedFieldSet","value.operator","value.renderedFieldValue"]),currentError(){return this.conditionValueRenderedFieldError||this.conditionValueSelectedFieldError||this.conditionValueSelectedFieldSetError||this.conditionValueOperatorError||this.conditionValueRenderedFieldValueError}},methods:{onFieldChange(e){this.$refs.selectedField.resultCollection.has(e)?(this.renderedField=this.$refs.selectedField.resultCollection.get(e),this.selectedFieldSet=this.renderedField.customFieldSetId):this.renderedField=null,this.operator=null,this.renderedFieldValue=null}}});
//# sourceMappingURL=index-BjxRnuK2.js.map
