const e=`{% block sw_condition_value_content %} <div class="sw-condition-goods-price"> {% block sw_condition_goods_price_field_operator %} <sw-condition-operator-select v-bind="{ operators, condition }" :disabled="disabled || undefined" /> {% endblock %} <div class="sw-condition-goods-price__value"> {% block sw_condition_goods_price_field_amount %} <sw-number-field v-model:value="amount" name="sw-field--amount" class="sw-contidion-goods-price__numfield" size="medium" number-type="float" :min="0" :digits="20" :disabled="disabled || undefined" /> {% endblock %} {% block sw_condition_goods_price_filter_button %} <div class="sw-condition-goods-price__filter"> <sw-button v-tooltip="{ message: $tc('sw-settings-rule.conditionFilter.infoText') }" :disabled="disabled || undefined" @click="showFilterModal = true" > <sw-icon name="regular-filter-s" small /> </sw-button> </div> {% endblock %} </div> {% block sw_condition_goods_price_condition_modal %} <sw-condition-modal v-if="showFilterModal" :disabled="disabled || undefined" v-bind="{ condition, conditionDataProviderService }" @modal-close="showFilterModal = false" /> {% endblock %} </div> {% endblock %}`,{Component:o}=Shopware,{mapPropertyErrors:n}=o.getComponentHelper();o.extend("sw-condition-goods-price","sw-condition-base",{template:e,data(){return{showFilterModal:!1}},computed:{operators(){return this.conditionDataProviderService.getOperatorSet("number")},amount:{get(){return this.ensureValueExist(),this.condition.value.amount},set(i){this.ensureValueExist(),this.condition.value={...this.condition.value,amount:i}}},...n("condition",["value.operator","value.amount"]),currentError(){return this.conditionValueOperatorError||this.conditionValueAmountError}}});
