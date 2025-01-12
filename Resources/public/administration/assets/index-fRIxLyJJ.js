import{a as n,D as s,P as d}from"./promotion.helper-DcTQ5h0i.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";const u=`{% block sw_promotion_discount_component %} <sw-card class="sw-promotion-discount-component" position-identifier="sw-promotion-discount-component" :title="$tc('sw-promotion.detail.main.discounts.card')" > <sw-context-button class="sw-promotion-discount-component__context-button"> {% block sw_promotion_detail_discounts_item_context_button_delete %} <sw-context-menu-item v-tooltip="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('promotion.editor'), showOnDisabledElements: true }" variant="danger" class="sw-promotion-context-item__delete-action" :disabled="isEditingDisabled" @click="onShowDeleteModal" > {{ $tc('sw-promotion.detail.main.discounts.buttonDeleteDiscount') }} </sw-context-menu-item> {% endblock %} </sw-context-button> <sw-container columns="1fr 1fr" gap="0px 30px" > {% block sw_promotion_discount_component_scope %} <sw-select-field ref="selectFieldScope" v-model:value="discount.scope" required validation="required" :label="$tc('sw-promotion.detail.main.discounts.labelScope')" :disabled="isEditingDisabled" :is-loading="isLoading" @update:value="onDiscountScopeChanged" > <option v-for="scope in scopes" :key="scope.key" :value="scope.key" > {{ scope.name }} </option> </sw-select-field> {% endblock %} {% block sw_promotion_discount_condition_consider_product_rules_field %} <template v-if="displayAdvancedRuleOption"> <sw-switch-field v-model:value="discount.considerAdvancedRules" bordered :label="$tc('sw-promotion.detail.main.discounts.flagProductScopeLabel')" :disabled="isEditingDisabled" /> </template> {% endblock %} </sw-container> {% block sw_promotion_discount_condition_rules_form %} <template v-if="!shippingScope && discount.considerAdvancedRules === true"> <div v-if="!isSetGroup"> <sw-promotion-v2-rule-select v-model:collection="discount.discountRules" class="sw-promotion-discount-component__select-discount-rules" :local-mode="discount.isNew()" :criteria="ruleFilter" :label="$tc('sw-promotion.detail.main.discounts.labelRules')" :placeholder="$tc('sw-promotion.detail.main.discounts.placeholder')" :disabled="isEditingDisabled" :restricted-rules="restrictedRules" :restriction-snippet="promotionDiscountSnippet" rule-aware-group-key="promotionDiscounts" /> </div> <sw-container columns="1fr 1fr" gap="0px 30px" > {% block sw_promotion_cart_condition_setgroup_filter_apply_field %} <sw-select-field v-if="!isSet" v-model:value="discount.applierKey" :label="$tc('sw-promotion.detail.main.discounts.labelApplyCount')" :disabled="isEditingDisabled" > <option v-for="applier in graduationAppliers" :key="applier.key" :value="applier.key" > {{ applier.name }} </option> </sw-select-field> {% endblock %} {% block sw_promotion_cart_condition_setgroup_filter_usage_field %} <sw-select-field v-if="isMaxUsageVisible" v-model:value="discount.usageKey" :label="$tc('sw-promotion.detail.main.discounts.labelMaxCount')" :disabled="isEditingDisabled" > <option v-for="count in graduationCounts" :key="count.key" :value="count.key" > {{ count.name }} </option> </sw-select-field> {% endblock %} </sw-container> <template v-if="discount.applierKey!=='ALL'"> <sw-container columns="1fr 1fr" gap="0px 30px" > {% block sw_promotion_cart_condition_setgroup_filter_sorting_field %} <sw-select-field v-model:value="discount.sorterKey" :label="$tc('sw-promotion.detail.main.discounts.labelSorting')" :disabled="isEditingDisabled" > <option v-for="sorter in graduationSorters" :key="sorter.key" :value="sorter.key" > {{ sorter.name }} </option> </sw-select-field> {% endblock %} {% block sw_promotion_cart_condition_setgroup_filter_picker_field %} <sw-select-field v-if="isPickingModeVisible" v-model:value="discount.pickerKey" :label="$tc('sw-promotion.detail.main.discounts.labelPicking')" :disabled="isEditingDisabled" > <option v-for="picker in graduationPickers" :key="picker.key" :value="picker.key" > {{ picker.name }} </option> </sw-select-field> {% endblock %} </sw-container> </template> </template> {% endblock %} <sw-container columns="1fr 1fr" gap="0px 30px" > {% block sw_promotion_discount_component_type %} <sw-select-field v-model:value="discount.type" class="sw-promotion-discount-component__type-select" :label="$tc('sw-promotion.detail.main.discounts.labelType')" :disabled="isEditingDisabled" @update:value="onDiscountTypeChanged" > <option v-for="type in types" :key="type.key" :value="type.key" > {{ type.name }} </option> </sw-select-field> {% endblock %} {% block sw_promotion_discount_component_value %} <sw-number-field class="sw-promotion-discount-component__discount-value" validation="required" required :digits="50" :value="discount.value" :label="$tc('sw-promotion.detail.main.discounts.labelValue')" :placeholder="$tc('sw-promotion.detail.main.discounts.placeholderValue')" :disabled="isEditingDisabled" @update:value="onDiscountValueChanged" > <template #suffix> {{ valueSuffix }} </template> </sw-number-field> {% endblock %} </sw-container> {% block sw_promotion_discount_max_value %} <sw-container v-if="showMaxValueSettings" :key="1" columns="1fr 1fr" justify="end" > {% block sw_promotion_discount_max_value_field %} <sw-number-field v-model:value="discount.maxValue" :label="$tc('sw-promotion.detail.main.discounts.labelMaxValue')" :help-text="maxValueAdvancedPricesTooltip" :disabled="isEditingDisabled" @update:value="onMaxValueChanged" > <template #suffix> {{ maxValueSuffix }} </template> </sw-number-field> {% endblock %} {% block sw_promotion_discount_max_value_advanced_prices %} <a v-if="showMaxValueAdvancedPrices" class="sw-card__quick-link advanced-prices" role="button" tabindex="0" @click="onClickAdvancedPrices" @keydown.enter="onClickAdvancedPrices" > {{ $tc('sw-promotion.detail.main.discounts.linkAdvancedPrices') }} <sw-icon name="regular-long-arrow-right" small /> </a> {% endblock %} </sw-container> {% endblock %} {% block sw_promotion_discount_advanced_prices_link %} <sw-container v-if="showAbsoluteAdvancedPricesSettings" :key="2" columns="1fr" justify="end" > <a class="sw-card__quick-link advanced-prices" role="button" tabindex="0" @click="onClickAdvancedPrices" @keydown.enter="onClickAdvancedPrices" > {{ $tc('sw-promotion.detail.main.discounts.linkAdvancedPrices') }} <sw-icon name="regular-long-arrow-right" small /> </a> </sw-container> {% endblock %} {% block sw_promotion_discount_advanced_prices_modal %} <sw-modal v-if="displayAdvancedPrices" :title="$tc('sw-promotion.detail.main.discounts.pricesModal.advancedPricesHeader')" class="sw-promotion-discount-form__advanced-prices-modal" @modal-close="onCloseAdvancedPricesModal" > <sw-one-to-many-grid :collection="discount.promotionDiscountPrices" :local-mode="true" :columns="currencyPriceColumns" :show-selection="false" :is-loading="isLoading" :show-actions="!isEditingDisabled" > <template #column-currency.translated.name="{ item }"> <p>{{ item.currency.translated.name }}</p> </template> <template #column-price="{ item }"> <sw-number-field v-model:value="item.price" type="text" size="small" :disabled="isEditingDisabled" > <template #suffix> {{ item.currency.symbol }} </template> </sw-number-field> </template> </sw-one-to-many-grid> <template #modal-footer> <sw-button variant="primary" size="small" @click="onCloseAdvancedPricesModal" > {{ $tc('sw-promotion.detail.main.discounts.pricesModal.closeModal') }} </sw-button> </template> </sw-modal> {% endblock %} {% block sw_promotion_detail_discounts_modal_delete %} <sw-modal v-if="showDeleteModal" variant="small" :title="$tc('sw-promotion.detail.main.discounts.delete.confirmTitle')" class="sw-promotion-detail-discounts-modal" @modal-close="onCloseDeleteModal" > {% block sw_promotion_detail_discounts_modal_delete_text %} <p> {{ $tc('sw-promotion.detail.main.discounts.delete.confirmText') }} </p> {% endblock %} {% block sw_promotion_detail_discounts_modal_delete_footer %} <template #modal-footer> {% block sw_promotion_detail_discounts_modal_delete_action_cancel %} <sw-button size="small" @click="onCloseDeleteModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_promotion_detail_discounts_modal_delete_action_delete %} <sw-button size="small" variant="danger" class="sw-promotion-discount-delete-button" @click="onConfirmDelete" > {{ $tc('sw-promotion.detail.main.discounts.delete.buttonDelete') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %} </sw-card> {% endblock %}`;class p{getValueSuffix(t,i="?"){return t===n.PERCENTAGE?"%":i}getMinValue(){return 0}getMaxValue(t){return t===n.PERCENTAGE?100:null}getFixedValue(t,i){return i===n.PERCENTAGE&&(t=t>100?this.getMaxValue(i):t),t<=this.getMinValue()&&(t=this.getMinValue()),t}}const{Mixin:m}=Cicada,{Criteria:a}=Cicada.Data,c=new p,v={template:u,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl","feature","ruleConditionDataProviderService"],emits:["discount-delete"],mixins:[m.getByName("placeholder")],props:{promotion:{type:Object,required:!0},discount:{type:Object,required:!0}},data(){return{displayAdvancedPrices:!1,currencies:[],defaultCurrency:null,isLoading:!1,showRuleModal:!1,showDeleteModal:!1,currencySymbol:null,allowProductRules:!1,cartScope:this.discount.scope===s.CART,shippingScope:this.discount.scope===s.DELIVERY,considerAdvancedRules:this.discount.considerAdvancedRules,availableSetGroups:[],syncService:null,httpClient:null,sorterKeys:[],pickerKeys:[],restrictedRules:[]}},computed:{advancedPricesRepo(){return this.repositoryFactory.create("promotion_discount_prices")},repositoryGroups(){return this.repositoryFactory.create("promotion_setgroup")},currencyRepository(){return this.repositoryFactory.create("currency")},ruleFilter(){const e=new a(1,25);return e.addAssociation("conditions"),e.addSorting(a.sort("name","ASC",!1)),e},currencyPriceColumns(){return[{property:"currency.translated.name",label:this.$tc("sw-promotion.detail.main.discounts.pricesModal.labelCurrency")},{property:"price",dataIndex:"price",label:this.$tc("sw-promotion.detail.main.discounts.pricesModal.labelPrice")}]},scopes(){const e=[{key:s.CART,name:this.$tc("sw-promotion.detail.main.discounts.valueScopeCart")},{key:s.DELIVERY,name:this.$tc("sw-promotion.detail.main.discounts.valueScopeDelivery")},{key:s.SET,name:this.$tc("sw-promotion.detail.main.discounts.valueScopeSet")}];let t=1;return this.availableSetGroups.forEach(()=>{const i=`${s.SETGROUP}-${t}`,o=`${this.$tc("sw-promotion.detail.main.discounts.valueScopeSetGroup")}-${t}`;e.push({key:i,name:o}),t+=1}),e},types(){const e=[{key:n.ABSOLUTE,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeAbsolute")},{key:n.PERCENTAGE,name:this.$tc("sw-promotion.detail.main.discounts.valueTypePercentage")},{key:n.FIXED_UNIT,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeFixedUnit")}];return this.cartScope||e.push({key:n.FIXED,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeFixed")}),this.cartScope&&this.discount.considerAdvancedRules&&e.push({key:n.FIXED,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeFixed")}),e},valueSuffix(){return c.getValueSuffix(this.discount.type,this.currencySymbol)},maxValueSuffix(){return this.currencySymbol},showMaxValueSettings(){return this.discount.type===n.PERCENTAGE},showAbsoluteAdvancedPricesSettings(){return this.discount.type===n.ABSOLUTE||this.discount.type===n.FIXED},showMaxValueAdvancedPrices(){return this.discount.type===n.PERCENTAGE&&this.discount.maxValue!==null},maxValueAdvancedPricesTooltip(){return this.discount.type===n.PERCENTAGE&&this.discount.maxValue!==null&&this.discount.promotionDiscountPrices.length>0?this.$tc("sw-promotion.detail.main.discounts.helpTextMaxValueAdvancedPrices"):""},isEditingDisabled(){return this.acl.can("promotion.editor")?!d.isEditingAllowed(this.promotion):!0},displayAdvancedRuleOption(){return this.discount.scope!==s.DELIVERY},graduationSorters(){const e=[];return this.sorterKeys.forEach(t=>{e.push({key:t,name:this.$tc(`sw-promotion-v2.detail.conditions.filter.sorter.${t}`)})}),e},graduationPickers(){const e=[];return this.pickerKeys.forEach(t=>{e.push({key:t,name:this.$tc(`sw-promotion-v2.detail.conditions.filter.picker.${t}`)})}),e},isSetGroup(){return this.discount.scope.split("-")[0]===s.SETGROUP},isSet(){return this.discount.scope===s.SET},graduationAppliers(){const e=[{key:"ALL",name:this.$tc("sw-promotion-v2.detail.conditions.filter.applier.ALL")}];let t=10;const i=this.discount.scope.split("-");if(i[0]===s.SETGROUP){let r=0;this.availableSetGroups.forEach(l=>{r+=1,r===parseInt(i[1],10)&&l.value<t&&l.packagerKey==="COUNT"&&(t=l.value)})}let o;for(o=1;o<=t;o+=1)e.push({key:o,name:this.$tc("sw-promotion-v2.detail.conditions.filter.applier.SELECT",0,{count:o})});return e},graduationCounts(){const e=[{key:"ALL",name:this.$tc("sw-promotion-v2.detail.conditions.filter.counter.ALL")}];let t;for(t=1;t<10;t+=1)e.push({key:t,name:this.$tc("sw-promotion-v2.detail.conditions.filter.counter.SELECT",0,{count:t})});return e},isPickingModeVisible(){return!!(this.discount.scope.startsWith(s.SETGROUP)||this.discount.scope===s.SET)},isMaxUsageVisible(){return this.discount.scope!==s.CART},promotionDiscountSnippet(){return this.$tc(this.ruleConditionDataProviderService.getAwarenessConfigurationByAssignmentName("promotionDiscounts").snippet,2)}},created(){this.createdComponent()},methods:{createdComponent(){this.syncService=Cicada.Service("syncService"),this.httpClient=this.syncService.httpClient,this.currencyRepository.search(new a(1,25)).then(e=>{this.currencies=e,this.defaultCurrency=this.currencies.find(t=>t.isSystemDefault),this.currencySymbol=this.defaultCurrency.symbol}),this.isLoading=!0,this.loadSetGroups().then(()=>{this.isLoading=!1}),this.loadSorters().then(e=>{this.sorterKeys=e}),this.loadPickers().then(e=>{this.pickerKeys=e}),this.loadRestrictedRules()},onDiscountScopeChanged(e){this.cartScope=e===s.CART,this.shippingScope=e===s.DELIVERY,e===s.DELIVERY?this.discount.considerAdvancedRules=!1:this.discount.considerAdvancedRules=this.considerAdvancedRules,this.discount.pickerKey="",this.discount.usageKey="ALL",this.isPickingModeVisible&&(this.discount.pickerKey=this.pickerKeys[0])},onDiscountTypeChanged(){this.discount.value=c.getFixedValue(this.discount.value,this.discount.type)},onDiscountValueChanged(e){this.discount.value=c.getFixedValue(e,this.discount.type)},onMaxValueChanged(e){e===0&&(this.discount.maxValue=null,this.clearAdvancedPrices())},onClickAdvancedPrices(){this.currencies.forEach(e=>{this.isMemberOfCollection(e)||(this.showMaxValueAdvancedPrices?this.prepareAdvancedPrices(e,this.discount.maxValue):this.prepareAdvancedPrices(e,this.discount.value))}),this.displayAdvancedPrices=!0},prepareAdvancedPrices(e,t){let i=c.getMinValue();t!==void 0&&(i=t),i*=e.factor,i<c.getMinValue()&&(i=c.getMinValue());const o=this.advancedPricesRepo.create(Cicada.Context.api);o.discountId=this.discount.id,o.price=i,o.currencyId=e.id,o.currency=e,this.discount.promotionDiscountPrices.add(o)},clearAdvancedPrices(){const e=this.discount.promotionDiscountPrices.getIds();let t;for(t=0;t<e.length;t+=1)this.discount.promotionDiscountPrices.remove(e[t])},isMemberOfCollection(e){let t=!1;const i=e.id;return this.discount.promotionDiscountPrices.forEach(o=>{o.currencyId===i&&(t=!0,o.currency=e)}),t},onCloseAdvancedPricesModal(){this.discount.type===n.PERCENTAGE&&this.discount.maxValue===null?this.clearAdvancedPrices():this.discount.promotionDiscountPrices.forEach(e=>{e.price=c.getFixedValue(e.price,n.ABSOLUTE)}),this.displayAdvancedPrices=!1},onShowDeleteModal(){this.showDeleteModal=!0},onCloseDeleteModal(){this.showDeleteModal=!1},onConfirmDelete(){this.onCloseDeleteModal(),this.$nextTick(()=>{this.$emit("discount-delete",this.discount)})},async loadSetGroups(){const e=new a(1,25);return e.addFilter(a.equals("promotionId",this.promotion.id)),await this.repositoryGroups.search(e).then(t=>{this.availableSetGroups=t}),!0},async loadSorters(){return this.httpClient.get("/_action/promotion/setgroup/sorter",{headers:this.syncService.getBasicHeaders()}).then(e=>e.data)},async loadPickers(){return this.httpClient.get("/_action/promotion/discount/picker",{headers:this.syncService.getBasicHeaders()}).then(e=>e.data)},loadRestrictedRules(){this.ruleConditionDataProviderService.getRestrictedRules("promotionSetGroups").then(e=>{this.restrictedRules=e})}}};export{v as default};
//# sourceMappingURL=index-fRIxLyJJ.js.map
