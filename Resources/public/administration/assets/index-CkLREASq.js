const t=`{% block sw_condition_value_content %} <div class="sw-condition-line-item-goods-total"> {% block sw_condition_line_item_goods_total_field_operator %} <sw-condition-operator-select v-bind="{ operators, condition }" :disabled="disabled || undefined" /> {% endblock %} <div class="sw-condition-line-item-goods-total__value"> {% block sw_condition_line_item_goods_total_field_count %} <sw-number-field v-model:value="count" name="sw-field--count" class="sw-contidion-line-item-goods-total__numfield" size="medium" number-type="int" :step="1" :disabled="disabled || undefined" /> {% endblock %} {% block sw_condition_line_item_goods_total_filter_button %} <div class="sw-condition-line-item-goods-total__filter"> <sw-button v-tooltip="{ message: $tc('sw-settings-rule.conditionFilter.infoText') }" :disabled="disabled || undefined" @click="showFilterModal = true" > <sw-icon name="regular-filter-s" small /> </sw-button> </div> {% endblock %} </div> {% block sw_condition_line_item_goods_total_condition_modal %} <sw-condition-modal v-if="showFilterModal" :disabled="disabled || undefined" v-bind="{ condition, conditionDataProviderService }" @modal-close="showFilterModal = false" /> {% endblock %} </div> {% endblock %}`,{Component:o}=Shopware,{mapPropertyErrors:i}=o.getComponentHelper();o.extend("sw-condition-line-item-goods-total","sw-condition-base",{template:t,data(){return{showFilterModal:!1}},computed:{operators(){return this.conditionDataProviderService.getOperatorSet("number")},count:{get(){return this.ensureValueExist(),this.condition.value.count},set(e){this.ensureValueExist(),this.condition.value={...this.condition.value,count:e}}},...i("condition",["value.operator","value.count"]),currentError(){return this.conditionValueOperatorError||this.conditionValueCountError}}});
