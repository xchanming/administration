const c=`{% block sw_settings_shipping_price_matrix %} <sw-card :title="cardTitle" :is-loading="isLoading" class="sw-settings-shipping-price-matrix" position-identifier="sw-settings-shipping-price-matrix" > {% block sw_settings_shipping_price_matrix_topbar_alert %} <sw-alert v-if="priceGroup.isNew" class="sw-settings-shipping-price-matrix__new-matrix-alert" variant="warning" :title="$tc('global.default.warning')" :closable="false" > {{ $tc('sw-settings-shipping.priceMatrix.newMatrixAlertMessage') }} </sw-alert> {% endblock %} {% block sw_settings_shipping_price_matrix_topbar %} <sw-container columns="1fr auto 35px" gap="0px 24px" class="sw-settings-shipping-price-matrix__top-container" > {% block sw_settings_shipping_price_matrix_topbar_rule_select %} <sw-select-rule-create class="sw-settings-shipping-price-matrix__top-container-rule-select" :rule-id="priceGroup.ruleId" :rule-filter="ruleFilterCriteria" size="small" :disabled="disabled || undefined" :placeholder="mainRulePlaceholder" rule-aware-group-key="shippingMethodPrices" :restricted-rule-ids="restrictedRuleIds" :restricted-rule-ids-tooltip-label="$tc('sw-settings-shipping.priceMatrix.ruleAlreadyUsedOrRestricted')" @save-rule="onSaveMainRule" /> {% endblock %} {% block sw_settings_shipping_price_matrix_topbar_new_price %} <sw-button size="x-small" class="sw-settings-shipping-price-matrix__top-container-add-new-rule" :variant="!showDataGrid ? '': 'ghost'" :disabled="!showDataGrid || disabled" @click="onAddNewShippingPrice" > <template v-if="isRuleMatrix"> {{ $tc('sw-settings-shipping.priceMatrix.addNewRule') }} </template> <template v-else> {{ $tc('sw-settings-shipping.priceMatrix.addNewShippingPrice') }} </template> </sw-button> {% endblock %} {% block sw_settings_shipping_price_matrix_topbar_context_button %} <sw-context-button :disabled="!showDataGrid || disabled" class="sw-settings-shipping-price-matrix__price-group-context" > {% block sw_settings_shipping_price_matrix_topbar_context_button_duplicate %} <sw-context-menu-item v-tooltip="{ showDelay: 300, showOnDisabledElements: true, message: $tc('sw-settings-shipping.priceMatrix.newMatrixAlreadyExists'), disabled: !newPriceMatrixExists }" :disabled="newPriceMatrixExists" class="sw-settings-shipping-price-matrix__action-duplicate" @click="$emit('duplicate-price-matrix', priceGroup)" > {{ $tc('sw-settings-shipping.priceMatrix.duplicateMatrixContextLabel') }} </sw-context-menu-item> {% endblock %} {% block sw_settings_shipping_price_matrix_topbar_context_button_delete %} <sw-context-menu-item class="sw-settings-shipping-price-matrix__action-delete" variant="danger" @click="onDeletePriceMatrix" > {{ $tc('sw-settings-shipping.priceMatrix.deleteMatrixContextLabel') }} </sw-context-menu-item> {% endblock %} </sw-context-button> {% endblock %} </sw-container> {% endblock %} {% block sw_settings_shipping_price_matrix_price_grid %} <sw-data-grid v-if="showDataGrid" :data-source="prices" :columns="ruleColumns" :show-selection="false" :show-settings="true" :compact-mode="true" > {% block sw_settings_shipping_price_matrix_price_grid_column_calculcation_rule %} <template #column-calculationRule="{ item, itemIndex, compact }" > <sw-select-rule-create class="sw-settings-shipping-price-matrix__column-calculation-rule-select" size="small" :disabled="disabled" :rule-id="item.calculationRuleId" :rule-filter="shippingRuleFilterCriteria" :placeholder="$tc('sw-settings-shipping.priceMatrix.chooseCustomRule')" rule-aware-group-key="shippingMethodPriceCalculations" :restricted-rule-ids="usedCalculationRules" :restricted-rule-ids-tooltip-label="$tc('sw-settings-shipping.priceMatrix.ruleAlreadyUsedInMatrix')" @save-rule="(ruleId) => onSaveCustomShippingRule(ruleId, item)" > <template #rule-modal="{ showRuleModal, onSaveRule, onCloseRuleModal }"> <sw-price-rule-modal v-if="showRuleModal" rule-aware-group-key="shippingMethodPriceCalculations" @save="onSaveRule" @modal-close="onCloseRuleModal" /> </template> </sw-select-rule-create> </template> {% endblock %} {% block sw_settings_shipping_price_matrix_price_grid_column_quantity_start %} <template #column-quantityStart="{ item, itemIndex, compact }" > <sw-number-field v-model:value="item.quantityStart" :disabled="disabled" :name="\`sw-field--\${item.id}-quantity-start\`" :number-type="numberFieldType" :size="compact ? 'small' : 'default'" :min="priceGroup.prices[itemIndex - 1] ? priceGroup.prices[itemIndex - 1].quantityEnd : 0" :max="item.quantityEnd ? item.quantityEnd : null" :digits="3" /> </template> {% endblock %} {% block sw_settings_shipping_price_matrix_price_grid_column_quantity_end %} <template #column-quantityEnd="{ item, itemIndex, compact }" > <sw-number-field v-model:value="item.quantityEnd" :disabled="disabled" :name="\`sw-field--\${item.id}-quantity-end\`" :number-type="numberFieldType" :size="compact ? 'small' : 'default'" :placeholder="$tc('sw-settings-shipping.priceMatrix.any')" :validation="item.quantityEnd === null || item.quantityEnd > item.quantityStart" :min="item.quantityStart" :digits="3" @update:value="onQuantityEndChange(item)" /> </template> {% endblock %} {% block sw_settings_shipping_price_matrix_price_grid_currencies_list %} <template v-for="currency in currencies" :key="currency.isoCode" #[\`column-price-\${currency.isoCode}\`]="{ item, column, compact }" > <sw-inherit-wrapper class="sw-settings-shipping-price-matrix__price" :value="getPrice(item, currency)" :has-parent="!currency.isSystemDefault" :inherited-value="currency.isSystemDefault ? null : convertDefaultPriceToCurrencyPrice(item, currency)" @update:value="setPrice(item, currency, $event)" > <template #content="props"> <sw-inheritance-switch v-if="!currency.isSystemDefault" class="sw-settings-shipping-price-matrix__price-inherit-icon" :is-inherited="props.isInherited" :disabled="disabled" @inheritance-restore="props.restoreInheritance" @inheritance-remove="props.removeInheritance" /> <sw-number-field v-model:value="props.currentValue.gross" :name="\`sw-field--\${item.id}-\${currency.id}-gross\`" :size="compact ? 'small' : 'default'" class="sw-settings-shipping-price-matrix__price-input" :digits="50" :disabled="props.isInherited || disabled" /> <sw-number-field v-model:value="props.currentValue.net" :name="\`sw-field--\${item.id}-\${currency.id}-net\`" :size="compact ? 'small' : 'default'" class="sw-settings-shipping-price-matrix__price-input" :digits="50" :disabled="props.isInherited || disabled" /> </template> </sw-inherit-wrapper> </template> {% endblock %} {% block sw_settings_shipping_price_matrix_price_grid_actions %} <template #actions="{ item }"> {% block sw_settings_shipping_price_matrix_price_grid_actions_delete %} <sw-context-menu-item :disabled="disableDeleteButton || disabled" variant="danger" @click="onDeleteShippingPrice(item)" > {{ $tc('sw-settings-shipping.priceMatrix.contextMenuDeletePrice') }} </sw-context-menu-item> {% endblock %} </template> {% endblock %} </sw-data-grid> <div v-if="showDataGrid && !showAllPrices" class="sw-settings-shipping-price-matrix__price-load-all" > <sw-button variant="ghost" size="small" class="sw-settings-shipping-price-matrix__price-load-all-button" @click="updateShowAllPrices" > {{ $tc('sw-settings-shipping.priceMatrix.buttonLoadAllPrices') }} </sw-button> </div> {% endblock %} {% block sw_settings_shipping_price_matrix_empty %} <div v-else class="sw-settings-shipping-price-matrix__empty" > {% block sw_settings_shipping_price_matrix_empty_text %} <p class="sw-settings-shipping-price-matrix__empty-text"> {{ $tc('sw-settings-shipping.priceMatrix.emptyText') }} </p> {% endblock %} <sw-container columns="1fr 10px 1fr" gap="0px 24px" > {% block sw_settings_shipping_price_matrix_empty_property_store %} <sw-single-select class="sw-settings-shipping-price-matrix__empty--select-property" :options="calculationTypes" :value="priceGroup.calculation" :disabled="disabled" size="small" show-clearable-button :placeholder="$tc('sw-settings-shipping.priceMatrix.selectProperty')" @update:value="onCalculationChange" /> {% endblock %} <p class="sw-settings-shipping-price-matrix__empty-text-or"> {{ $tc('sw-settings-shipping.priceMatrix.textOr') }} </p> {% block sw_settings_shipping_price_matrix_empty_rule_select %} <sw-select-rule-create size="small" :disabled="disabled" :placeholder="$tc('sw-settings-shipping.priceMatrix.chooseCustomRule')" rule-aware-group-key="shippingMethodPriceCalculations" :restricted-rule-ids="usedCalculationRules" :restricted-rule-ids-tooltip-label="$tc('sw-settings-shipping.priceMatrix.ruleAlreadyUsedInMatrix')" @save-rule="(ruleId) => { onSaveCustomShippingRule(ruleId) }" > <template #rule-modal="{ showRuleModal, onSaveRule, onCloseRuleModal }"> <sw-price-rule-modal v-if="showRuleModal" rule-aware-group-key="shippingMethodPriceCalculations" @save="onSaveRule" @modal-close="onCloseRuleModal" /> </template> </sw-select-rule-create> {% endblock %} </sw-container> </div> {% endblock %} {% block sw_settings_shipping_price_matrix_delete_modal %} <sw-modal v-if="showDeleteModal" :title="$tc('global.default.warning')" variant="small" @modal-close="onCloseDeleteModal" > {% block sw_settings_shipping_price_matrix_delete_modal_confirm_delete_text %} <p class="sw-settings-shipping-price-matrix__confirm-delete-text"> {{ confirmDeleteText }} </p> {% endblock %} {% block sw_settings_shipping_price_matrix_delete_modal_footer %} <template #modal-footer> {% block sw_settings_shipping_price_matrix_delete_modal_cancel %} <sw-button size="small" @click="onCloseDeleteModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_settings_shipping_price_matrix_delete_modal_confirm %} <sw-button variant="danger" size="small" @click="onConfirmDeleteShippingPrice" > {{ $tc('sw-settings-shipping.priceMatrix.buttonDelete') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %} </sw-card> {% endblock %}`,{Mixin:l,Context:n,Data:{Criteria:s}}=Cicada,{cloneDeep:p}=Cicada.Utils.object,{mapState:o,mapGetters:u}=Cicada.Component.getComponentHelper(),d={template:c,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","feature"],emits:["duplicate-price-matrix","delete-price-matrix"],mixins:[l.getByName("placeholder"),l.getByName("notification")],props:{priceGroup:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data(){return{calculationTypes:[{label:this.$tc("sw-settings-shipping.priceMatrix.calculationLineItemCount"),value:1},{label:this.$tc("sw-settings-shipping.priceMatrix.calculationPrice"),value:2},{label:this.$tc("sw-settings-shipping.priceMatrix.calculationWeight"),value:3},{label:this.$tc("sw-settings-shipping.priceMatrix.calculationVolume"),value:4}],showDeleteModal:!1,isLoading:!1,ruleColumns:[],showAllPrices:!0}},computed:{...o("swShippingDetail",["shippingMethod","currencies","restrictedRuleIds"]),...u("swShippingDetail",["defaultCurrency","usedRules","unrestrictedPriceMatrixExists","newPriceMatrixExists"]),ruleRepository(){return this.repositoryFactory.create("rule")},shippingPriceRepository(){return this.repositoryFactory.create("shipping_method_price")},labelQuantityStart(){return{1:"sw-settings-shipping.priceMatrix.columnQuantityStart",2:"sw-settings-shipping.priceMatrix.columnPriceStart",3:"sw-settings-shipping.priceMatrix.columnWeightStart",4:"sw-settings-shipping.priceMatrix.columnVolumeStart"}[this.priceGroup.calculation]||"sw-settings-shipping.priceMatrix.columnQuantityStart"},labelQuantityEnd(){return{1:"sw-settings-shipping.priceMatrix.columnQuantityEnd",2:"sw-settings-shipping.priceMatrix.columnPriceEnd",3:"sw-settings-shipping.priceMatrix.columnWeightEnd",4:"sw-settings-shipping.priceMatrix.columnVolumeEnd"}[this.priceGroup.calculation]||"sw-settings-shipping.priceMatrix.columnQuantityEnd"},numberFieldType(){return{1:"int",2:"float",3:"float",4:"float"}[this.priceGroup.calculation]||"float"},confirmDeleteText(){const e=this.priceGroup.rule?this.priceGroup.rule.name:"";return this.$tc("sw-settings-shipping.priceMatrix.textDeleteConfirm",+!!this.priceGroup.rule,{name:e})},currencyColumns(){return this.currencies.map((e,i)=>{let t=e.translated.name||e.name;return t=`${t} ${this.$tc("sw-settings-shipping.priceMatrix.labelGrossNet")}`,{property:`price-${e.isoCode}`,label:t,visible:i===0,allowResize:!0,primary:!!e.isSystemDefault,rawData:!1,width:"200px"}})},showDataGrid(){return!!this.priceGroup.calculation||this.priceGroup.prices.some(e=>e.calculationRuleId)},disableDeleteButton(){return this.priceGroup.prices.length<=1},ruleFilterCriteria(){const e=new s(1,25);return e.addSorting(s.sort("name","ASC",!1)).addFilter(s.multi("OR",[s.contains("rule.moduleTypes.types","price"),s.equals("rule.moduleTypes",null)])),Cicada.Feature.isActive("v6.7.0.0")||e.addAssociation("conditions"),e},shippingRuleFilterCriteria(){const e=new s(1,25);return e.addFilter(s.multi("OR",[s.contains("rule.moduleTypes.types","shipping"),s.equals("rule.moduleTypes",null)])),Cicada.Feature.isActive("v6.7.0.0")||e.addAssociation("conditions"),e},isRuleMatrix(){return!this.priceGroup.calculation},usedCalculationRules(){const e=[];return this.isRuleMatrix&&this.priceGroup.prices.forEach(i=>{e.includes(i.calculationRuleId)||e.push(i.calculationRuleId)}),e},mainRulePlaceholder(){return this.priceGroup.isNew?this.$tc("sw-settings-shipping.priceMatrix.chooseOrCreateRule"):this.$tc("sw-settings-shipping.priceMatrix.noRestriction")},cardTitle(){return!this.priceGroup.rule&&!this.priceGroup.isNew?this.$tc("sw-settings-shipping.priceMatrix.noRestriction"):this.priceGroup.rule?this.priceGroup.rule.name:this.$tc("sw-settings-shipping.priceMatrix.titleCard")},prices(){return this.showAllPrices?this.priceGroup.prices:[this.priceGroup.prices[0]]}},watch:{isRuleMatrix(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){this.ruleColumns=[],this.showAllPrices=this.priceGroup.prices.length<=1,this.isRuleMatrix?this.ruleColumns.push({property:"calculationRule",label:"sw-settings-shipping.priceMatrix.columnCalculationRule",allowResize:!0,primary:!0,rawData:!0,width:"250px"}):(this.ruleColumns.push({property:"quantityStart",label:this.labelQuantityStart,allowResize:!0,primary:!0,rawData:!0,width:"130px"}),this.ruleColumns.push({property:"quantityEnd",label:this.labelQuantityEnd,allowResize:!0,rawData:!0,primary:!0,width:"130px"})),this.ruleColumns.push(...this.currencyColumns)},onAddNewShippingPrice(){this.updateShowAllPrices();const e=this.priceGroup.prices[this.priceGroup.prices.length-1],i=this.shippingPriceRepository.create(n.api);if(i.shippingMethodId=this.shippingMethod.id,i.ruleId=this.priceGroup.ruleId,i.currencyPrice=p(e.currencyPrice),e._inNewMatrix&&(i._inNewMatrix=!0),this.isRuleMatrix){this.shippingMethod.prices.push(i);return}e.quantityEnd||(e.quantityEnd=e.quantityStart),i.calculation=e.calculation,this.priceGroup.calculation===1?i.quantityStart=e.quantityEnd+1>1?e.quantityEnd+1:2:i.quantityStart=e.quantityEnd,i.quantityEnd=null,this.shippingMethod.prices.push(i)},onSaveMainRule(e){if(!e&&this.unrestrictedPriceMatrixExists&&this.priceGroup.ruleId!==e){this.createNotificationError({message:this.$tc("sw-settings-shipping.priceMatrix.unrestrictedRuleAlreadyExistsMessage")});return}this.ruleRepository.get(e,n.api).then(i=>{this.priceGroup.prices.forEach(t=>{t.ruleId=e,t.rule=i,t._inNewMatrix&&delete t._inNewMatrix})})},onSaveCustomShippingRule(e,i){i||(i=this.priceGroup.prices[0]),this.$nextTick(()=>{this.isLoading=!0}),this.ruleRepository.get(e,n.api).then(t=>{i.calculationRuleId=e,i.calculationRule=t,this.isLoading=!1})},onCalculationChange(e){this.priceGroup.prices.forEach(i=>{i.calculation=Number(e),i.ruleId=this.priceGroup.ruleId})},onDeletePriceMatrix(){this.showDeleteModal=!0},onConfirmDeleteShippingPrice(){this.showDeleteModal=!1,this.$nextTick(()=>{this.$emit("delete-price-matrix",this.priceGroup)})},onCloseDeleteModal(){this.showDeleteModal=!1},onDeleteShippingPrice(e){if(this.priceGroup.prices.length<=1){this.createNotificationInfo({message:this.$tc("sw-settings-shipping.priceMatrix.deletionNotPossibleMessage")});return}const i=this.priceGroup.prices.indexOf(e);if(typeof e.quantityEnd>"u"||e.quantityEnd===null){const t=this.priceGroup.prices[i-1];t.quantityEnd=null}else{const t=this.priceGroup.prices[i+1];t.quantityStart=e.quantityStart}this.shippingMethod.prices.remove(e.id)},convertDefaultPriceToCurrencyPrice(e,i){e.currencyPrice||this.initCurrencyPrice(e);const t=e.currencyPrice.find(r=>r.currencyId===this.defaultCurrency.id);return this.convertPrice(t,i)},initCurrencyPrice(e){e.currencyPrice=[{currencyId:this.defaultCurrency.id,gross:0,linked:!1,net:0}]},getPrice(e,i){const t=this.getPriceOfCurrency(e,i);return t||null},setPrice(e,i,t){if(!t){e.currencyPrice=e.currencyPrice.filter(a=>a.currencyId!==i.id);return}const r={currencyId:i.id,gross:t.gross,linked:!1,net:t.net};e.currencyPrice.push(r)},getPriceOfCurrency(e,i){return e.currencyPrice||this.initCurrencyPrice(e),e.currencyPrice.find(t=>t.currencyId===i.id)},convertPrice(e,i){return{net:e.net*i.factor,gross:e.gross*i.factor,currencyId:i.id,linked:!1}},onQuantityEndChange(e){this.priceGroup.prices.indexOf(e)+1===this.priceGroup.prices.length&&this.onAddNewShippingPrice()},updateShowAllPrices(){this.showAllPrices=!0}}};export{d as default};
//# sourceMappingURL=index-Pl60hHaU.js.map
