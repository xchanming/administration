const l=`{% block sw_order_create %} <sw-card-view> {% block sw_order_create_address_modal %} <sw-order-create-address-modal v-if="showAddressModal" :address="address" :add-address-modal-title="addAddressModalTitle" :edit-address-modal-title="editAddressModalTitle" :customer="customer" :cart="cart" @close-modal="closeModal" @set-customer-address="setCustomerAddress" /> {% endblock %} {% block sw_order_create_promotion_modal %} <sw-order-create-promotion-modal v-if="showPromotionModal" :is-loading="isLoading" :currency="currency" :sales-channel-id="customer.salesChannelId" @close="onClosePromotionModal" @save="onSavePromotionModal" /> {% endblock %} {% block sw_order_create_details %} <sw-card :title="$tc('sw-order.createBase.labelDetailsCard')" :is-loading="isLoadingDetail" position-identifier="sw-order-create-base-details" class="sw-order-create__card" > <template #grid> <sw-container type="row" class="sw-order-user-card" > <sw-card-section> {% block sw_order_create_details_header %} <sw-order-create-details-header :customer="customer" :order-date="orderDate" :cart-price="cartPrice" :currency="currency" @on-select-existing-customer="onSelectExistingCustomer" /> {% endblock %} {% block sw_order_create_details_body %} <sw-order-create-details-body :customer="customer" :is-customer-active="isCustomerActive" @on-edit-billing-address="onEditBillingAddress" @on-edit-shipping-address="onEditShippingAddress" /> {% endblock %} </sw-card-section> <sw-card-section secondary divider="top" > {% block sw_order_create_details_footer %} <sw-order-create-details-footer :customer="customer" :is-customer-active="isCustomerActive" :cart="cart" @loading-change="updateLoading" /> {% endblock %} </sw-card-section> </sw-container> </template> </sw-card> {% endblock %} {% block sw_order_create_base_line_items_card %} <sw-card :title="$tc('sw-order.createBase.cardTitleLineItems')" :is-loading="isLoading" position-identifier="sw-order-create-base-line-items" class="sw-order-create__card sw-order-create-base__line-item-grid-card" > {% block sw_order_create_base_line_items_card_rows %} <template #grid> <sw-container type="row"> {% block sw_order_create_base_line_items_grid %} <sw-order-line-items-grid-sales-channel ref="sw-order-line-item-grid-sales-channel" :cart="cart" :currency="currency" :sales-channel-id="salesChannelId" :is-loading="isLoading" :is-customer-active="isCustomerActive" editable @on-save-item="onSaveItem" @on-remove-items="onRemoveItems" /> {% endblock %} {% block sw_order_create_base_line_items_summary %} <sw-card-section v-show="cartLineItems.length" divider="top" secondary slim > <sw-container columns="1fr 1fr" class="sw-order-create-summary" > <div> {% block sw_order_create_base_line_items_switch_promotions %} <sw-switch-field v-model:value="disabledAutoPromotionVisibility" class="sw-order-create-summary__switch-promotions" :label="$tc('sw-order.promotionModal.labelTitle')" /> {% endblock %} {% block sw_order_create_base_line_items_voucher_field %} <sw-order-promotion-tag-field v-model:value="promotionCodeTags" :disabled="!hasLineItem" :currency="currency" :label="$tc('sw-order.createBase.labelAddPromotion')" :placeholder="$tc('sw-order.createBase.placeholderAddPromotion')" :error="promotionError" @on-remove-code="onRemoveExistingCode" /> {% endblock %} </div> <sw-description-list grid="1fr 1fr" class="sw-order-create-summary__data" > {% block sw_order_create_base_line_items_summary_entries %} {% block sw_order_create_base_line_items_summary_amount %} <dt>{{ $tc('sw-order.createBase.summaryLabelAmount') }}</dt> <dd>{{ currencyFilter(cartPrice ? cartPrice.positionPrice : 0, currency.isoCode) }}</dd> {% endblock %} {% block sw_order_create_base_line_items_summary_shipping_cost %} <template v-if="cartDelivery"> <dt>{{ $tc('sw-order.createBase.summaryLabelShippingCosts') }}</dt> <dd> <sw-order-saveable-field v-tooltip="{ showDelay: 300, message: shippingCostsDetail, disabled: taxStatus === 'tax-free' }" type="number" editable :value="cartDelivery.shippingCosts.totalPrice" @value-change="onShippingChargeEdited" @update:value="onShippingChargeUpdated" > {{ currencyFilter(cartDelivery.shippingCosts.totalPrice, currency.isoCode) }} </sw-order-saveable-field> </dd> </template> <template v-for="(_, index) in cartDeliveryDiscounts" :key="index" > <dt> {{ $tc('sw-order.createBase.discountLabelShippingCosts') }} </dt> <dd> {{ currencyFilter(delivery.shippingCosts.totalPrice, currency.isoCode) }} </dd> </template> {% endblock %} {% block sw_order_create_base_line_items_summary_amount_without_tax %} <template v-if="taxStatus !== 'tax-free'"> <dt><strong>{{ $tc('sw-order.createBase.summaryLabelAmountWithoutTaxes') }}</strong></dt> <dd><strong>{{ currencyFilter(cartPrice ? cartPrice.netPrice : 0, currency.isoCode) }}</strong></dd> </template> {% endblock %} {% block sw_order_create_base_line_items_summary_taxes %} <template v-if="taxStatus !== 'tax-free'"> <template v-for="(calculatedTax, index) in filteredCalculatedTaxes" :key="index" > <dt> {{ $tc('sw-order.createBase.summaryLabelTaxes', 1, { taxRate: calculatedTax.taxRate }) }} </dt> <dd> {{ currencyFilter(calculatedTax.tax, currency.isoCode) }} </dd> </template> </template> {% endblock %} {% block sw_order_create_base_line_items_summary_amount_total %} <template v-if="taxStatus !== 'tax-free'"> <dt><strong>{{ $tc('sw-order.createBase.summaryLabelAmountTotal') }}</strong></dt> <dd><strong>{{ currencyFilter(orderTotal, currency.isoCode) }}</strong></dd> <template v-if="displayRounded"> <dt><strong>{{ $tc('sw-order.createBase.summaryLabelAmountTotalRounded') }}</strong></dt> <dd><strong>{{ currencyFilter(cart.price.totalPrice, currency.isoCode) }}</strong></dd> </template> </template> {% endblock %} {% block sw_order_create_base_line_items_summary_amount_free_tax %} <template v-if="taxStatus === 'tax-free'"> <dt><strong>{{ $tc('sw-order.detailBase.summaryLabelAmount') }}</strong></dt> <dd><strong>{{ currencyFilter(cart.price.totalPrice, currency.isoCode) }}</strong></dd> </template> {% endblock %} {% endblock %} </sw-description-list> </sw-container> </sw-card-section> {% endblock %} </sw-container> </template> {% endblock %} </sw-card> {% endblock %} </sw-card-view> {% endblock %}`,{Component:m,State:r,Utils:u,Data:h,Service:a,Mixin:p}=Cicada,{Criteria:n}=h,{get:i,format:c,array:g}=u,{mapGetters:C}=m.getComponentHelper(),y={template:l,compatConfig:Cicada.compatConfig,inject:["feature"],emits:["error"],mixins:[p.getByName("notification")],data(){return{isLoading:!1,isLoadingDetail:!1,address:{data:null},showAddressModal:!1,addAddressModalTitle:null,editAddressModalTitle:null,promotionError:null,showPromotionModal:!1,disabledAutoPromotionChecked:!1}},computed:{...C("swOrder",["cartErrors"]),customerRepository(){return a("repositoryFactory").create("customer")},customerAddressRepository(){return a("repositoryFactory").create("customer_address")},currencyRepository(){return a("repositoryFactory").create("currency")},customerAddressCriteria(){const e=new n(1,25);return e.addAssociation("salutation"),e.addAssociation("country"),e.addAssociation("countryState"),e},defaultCriteria(){const e=new n(1,25);return e.addAssociation("addresses").addAssociation("group").addAssociation("salutation").addAssociation("salesChannel").addAssociation("lastPaymentMethod").addAssociation("defaultBillingAddress.country").addAssociation("defaultBillingAddress.countryState").addAssociation("defaultBillingAddress.salutation").addAssociation("defaultShippingAddress.country").addAssociation("defaultShippingAddress.countryState").addAssociation("defaultShippingAddress.salutation").addAssociation("tags"),e},orderDate(){const e=new Date;return c.date(e)},customer(){return r.get("swOrder").customer},salesChannelId(){var e;return((e=this.customer)==null?void 0:e.salesChannelId)??""},isCustomerActive(){return r.getters["swOrder/isCustomerActive"]},cart(){return r.get("swOrder").cart},cartLineItems(){return this.cart.lineItems},cartAutomaticPromotionItems(){return this.cartLineItems.filter(e=>e.type==="promotion"&&e.payload.code==="")},cartPrice(){return this.cart.price},currency(){return r.get("swOrder").context.currency},cartDelivery(){return i(this.cart,"deliveries[0]",null)},promotionCodeTags:{get(){return r.get("swOrder").promotionCodes},set(e){r.commit("swOrder/setPromotionCodes",e)}},cartDeliveryDiscounts(){return g.slice(this.cart.deliveries,1)||[]},filteredCalculatedTaxes(){return!this.cartPrice||!this.cartPrice.calculatedTaxes?[]:this.sortByTaxRate(this.cartPrice.calculatedTaxes).filter(e=>e.tax!==0)},promotionCodeLineItems(){return this.cartLineItems.filter(e=>e.type==="promotion"&&i(e,"payload.code"))},hasLineItem(){return this.cartLineItems.filter(e=>e.hasOwnProperty("id")).length>0},shippingCostsDetail(){if(!this.cartDelivery)return null;const t=this.sortByTaxRate(this.cartDelivery.shippingCosts.calculatedTaxes).map(s=>this.$tc("sw-order.createBase.shippingCostsTax",0,{taxRate:s.taxRate,tax:c.currency(s.tax,this.currency.isoCode)}));return`${this.$tc("sw-order.createBase.tax")}<br>${t.join("<br>")}`},disabledAutoPromotionVisibility:{get(){return this.disabledAutoPromotionChecked},set(e){this.switchAutomaticPromotions(e)}},taxStatus(){return i(this.cart,"price.taxStatus","")},displayRounded(){return this.cartPrice?this.cartPrice.rawTotal!==this.cartPrice.totalPrice:!1},orderTotal(){return this.cartPrice?this.displayRounded?this.cartPrice.rawTotal:this.cartPrice.totalPrice:0},currencyFilter(){return Cicada.Filter.getByName("currency")}},watch:{cart:{deep:!0,handler:"updatePromotionList"},promotionCodeTags:{handler:"handlePromotionCodeTags"},cartErrors:{handler(e){!e||e.length===0||Object.values(e).forEach(t=>{switch(t.level){case 0:{this.createNotificationSuccess({message:t.message});break}case 10:{this.createNotificationWarning({message:t.message});break}default:{this.createNotificationError({message:t.message});break}}})}}},created(){this.createdComponent()},methods:{createdComponent(){const{customer:e}=this.$route.params;e&&(r.commit("swOrder/setCustomer",e),this.onSelectExistingCustomer(e.id))},async createCart(e){await r.dispatch("swOrder/createCart",{salesChannelId:e})},async loadCart(){!this.cart.token||this.cart.lineItems.length===0||(this.updateLoading(!0),r.dispatch("swOrder/getCart",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token}).finally(()=>this.updateLoading(!1)))},async onSelectExistingCustomer(e){this.isLoadingDetail=!0;try{const t=await this.customerRepository.get(e,Cicada.Context.api,this.defaultCriteria);this.cart.token||await this.createCart(t.salesChannelId),this.setCustomer(t),this.setCurrency(t),await this.updateCustomerContext()}catch{this.createNotificationError({message:this.$tc("sw-order.create.messageSwitchCustomerError")})}finally{this.isLoadingDetail=!1}},async updateCustomerContext(){await r.dispatch("swOrder/updateCustomerContext",{customerId:this.customer.id,salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token})},setCustomer(e){r.dispatch("swOrder/selectExistingCustomer",{customer:e})},setCurrency(e){this.currencyRepository.get(e.salesChannel.currencyId).then(t=>{r.commit("swOrder/setCurrency",t)})},onEditBillingAddress(){const e="billingAddressId",t="billingAddress",s="defaultBillingAddressId",o=this.customer[t]?this.customer[t]:this.customer.defaultBillingAddress;this.addAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleAddBillingAddress"),this.editAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleEditBillingAddress"),this.address={contextId:e,contextDataKey:t,contextDataDefaultId:s,data:o},this.showAddressModal=!0},onEditShippingAddress(){const e="shippingAddressId",t="shippingAddress",s="defaultShippingAddressId",o=this.customer[t]?this.customer[t]:this.customer.defaultShippingAddress;this.addAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleAddShippingAddress"),this.editAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleEditShippingAddress"),this.address={contextId:e,contextDataKey:t,contextDataDefaultId:s,data:o},this.showAddressModal=!0},setCustomerAddress({contextId:e,data:t}){this.customer[e]=t.id;const s=[{id:this.customer.billingAddressId,dataKey:"billingAddress"},{id:this.customer.shippingAddressId,dataKey:"shippingAddress"},{id:this.customer.defaultBillingAddressId,dataKey:"defaultBillingAddress"},{id:this.customer.defaultShippingAddressId,dataKey:"defaultShippingAddress"}];this.customerAddressRepository.get(t.id,Cicada.Context.api,this.customerAddressCriteria).then(o=>{s.forEach(d=>{d.id===t.id&&(this.customer[d.dataKey]=o)}),this.setCustomer(this.customer)})},closeModal(){this.showAddressModal=!1,this.address.data=null},save(){this.closeModal()},onSaveItem(e){this.updateLoading(!0),r.dispatch("swOrder/saveLineItem",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,item:e}).finally(()=>this.updateLoading(!1))},onRemoveItems(e){this.updateLoading(!0),r.dispatch("swOrder/removeLineItems",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,lineItemKeys:e}).then(()=>{e.forEach(t=>{const s=this.promotionCodeTags.find(o=>o.discountId===t);s&&(this.promotionCodeTags=this.promotionCodeTags.filter(o=>o.discountId!==s.discountId))})}).finally(()=>this.updateLoading(!1))},updateLoading(e){this.isLoading=e},sortByTaxRate(e){return e.sort((t,s)=>t.taxRate-s.taxRate)},onSubmitCode(e){this.updateLoading(!0),r.dispatch("swOrder/addPromotionCode",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,code:e}).finally(()=>this.updateLoading(!1))},onRemoveExistingCode(e){e.isInvalid?this.promotionCodeTags=this.promotionCodeTags.filter(t=>t.code!==e.code):this.onRemoveItems([e.discountId])},updatePromotionList(){this.promotionCodeTags=this.promotionCodeTags.map(e=>{const t=this.promotionCodeLineItems.find(s=>s.payload.code===e.code);return t?{...t.payload,isInvalid:!1}:{...e,isInvalid:!0}}),this.promotionCodeLineItems.forEach(e=>{this.promotionCodeTags.find(s=>s.code===e.payload.code)||(this.promotionCodeTags=[...this.promotionCodeTags,{...e.payload,isInvalid:!1}])})},handlePromotionCodeTags(e,t){if(this.promotionError=null,e.length<t.length)return;const s=this.promotionCodeTags.length,o=this.promotionCodeTags[s-1];e.length>t.length&&this.onSubmitCode(o.code),s>0&&o.isInvalid&&(this.promotionError={detail:this.$tc("sw-order.createBase.textInvalidPromotionCode")})},onShippingChargeEdited(){this.updateLoading(!0),r.dispatch("swOrder/modifyShippingCosts",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,shippingCosts:this.cartDelivery.shippingCosts}).catch(e=>{this.$emit("error",e)}).finally(()=>{this.updateLoading(!1)})},switchAutomaticPromotions(e){this.disabledAutoPromotionChecked=e,this.showPromotionModal=e,this.showPromotionModal||this.enableAutomaticPromotions()},enableAutomaticPromotions(){this.updateLoading(!0);const e={salesChannelId:this.customer.salesChannelId};a("cartStoreService").enableAutomaticPromotions(this.cart.token,e).then(()=>{this.loadCart()})},onClosePromotionModal(){this.showPromotionModal=!1,this.disabledAutoPromotionChecked=!1},onSavePromotionModal(){this.showPromotionModal=!1,this.disabledAutoPromotionChecked=!0,this.loadCart()},onShippingChargeUpdated(e){const t=Math.abs(e);this.cartDelivery.shippingCosts.unitPrice=t,this.cartDelivery.shippingCosts.totalPrice=t}}};export{y as default};
//# sourceMappingURL=index-BkO3c4i3.js.map
