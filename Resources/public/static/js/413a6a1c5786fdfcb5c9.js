"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[18112],{218112:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});let{Component:r,State:o,Utils:i,Data:n,Service:a,Mixin:d}=Cicada,{Criteria:c}=n,{get:l,format:m,array:u}=i,{mapGetters:h}=r.getComponentHelper();var p={template:'\n{% block sw_order_create %}\n<sw-card-view>\n    \n    {% block sw_order_create_address_modal %}\n    <sw-order-create-address-modal\n        v-if="showAddressModal"\n        :address="address"\n        :add-address-modal-title="addAddressModalTitle"\n        :edit-address-modal-title="editAddressModalTitle"\n        :customer="customer"\n        :cart="cart"\n        @close-modal="closeModal"\n        @set-customer-address="setCustomerAddress"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_create_promotion_modal %}\n    <sw-order-create-promotion-modal\n        v-if="showPromotionModal"\n        :is-loading="isLoading"\n        :currency="currency"\n        :sales-channel-id="customer.salesChannelId"\n        @close="onClosePromotionModal"\n        @save="onSavePromotionModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_create_details %}\n    <sw-card\n        :title="$tc(\'sw-order.createBase.labelDetailsCard\')"\n        :is-loading="isLoadingDetail"\n        position-identifier="sw-order-create-base-details"\n        class="sw-order-create__card"\n    >\n        <template #grid>\n            <sw-container\n                type="row"\n                class="sw-order-user-card"\n            >\n                <sw-card-section>\n                    \n                    {% block sw_order_create_details_header %}\n                    <sw-order-create-details-header\n                        :customer="customer"\n                        :order-date="orderDate"\n                        :cart-price="cartPrice"\n                        :currency="currency"\n                        @on-select-existing-customer="onSelectExistingCustomer"\n                    />\n                    {% endblock %}\n                    \n                    {% block sw_order_create_details_body %}\n                    <sw-order-create-details-body\n                        :customer="customer"\n                        :is-customer-active="isCustomerActive"\n                        @on-edit-billing-address="onEditBillingAddress"\n                        @on-edit-shipping-address="onEditShippingAddress"\n                    />\n                    {% endblock %}\n                </sw-card-section>\n                <sw-card-section\n                    secondary\n                    divider="top"\n                >\n                    \n                    {% block sw_order_create_details_footer %}\n                    <sw-order-create-details-footer\n                        :customer="customer"\n                        :is-customer-active="isCustomerActive"\n                        :cart="cart"\n                        @loading-change="updateLoading"\n                    />\n                    {% endblock %}\n                </sw-card-section>\n            </sw-container>\n        </template>\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_order_create_base_line_items_card %}\n    <sw-card\n        :title="$tc(\'sw-order.createBase.cardTitleLineItems\')"\n        :is-loading="isLoading"\n        position-identifier="sw-order-create-base-line-items"\n        class="sw-order-create__card sw-order-create-base__line-item-grid-card"\n    >\n        \n        {% block sw_order_create_base_line_items_card_rows %}\n        <template #grid>\n            <sw-container type="row">\n                \n                {% block sw_order_create_base_line_items_grid %}\n                <sw-order-line-items-grid-sales-channel\n                    ref="sw-order-line-item-grid-sales-channel"\n                    :cart="cart"\n                    :currency="currency"\n                    :sales-channel-id="salesChannelId"\n                    :is-loading="isLoading"\n                    :is-customer-active="isCustomerActive"\n                    editable\n                    @on-save-item="onSaveItem"\n                    @on-remove-items="onRemoveItems"\n                />\n                {% endblock %}\n\n                \n                {% block sw_order_create_base_line_items_summary %}\n                <sw-card-section\n                    v-show="cartLineItems.length"\n                    divider="top"\n                    secondary\n                    slim\n                >\n                    <sw-container\n                        columns="1fr 1fr"\n                        class="sw-order-create-summary"\n                    >\n                        <div>\n                            \n                            {% block sw_order_create_base_line_items_switch_promotions %}\n                            <sw-switch-field\n                                v-model:value="disabledAutoPromotionVisibility"\n                                class="sw-order-create-summary__switch-promotions"\n                                :label="$tc(\'sw-order.promotionModal.labelTitle\')"\n                            />\n                            {% endblock %}\n                            \n                            {% block sw_order_create_base_line_items_voucher_field %}\n                            <sw-order-promotion-tag-field\n                                v-model:value="promotionCodeTags"\n                                :disabled="!hasLineItem"\n                                :currency="currency"\n                                :label="$tc(\'sw-order.createBase.labelAddPromotion\')"\n                                :placeholder="$tc(\'sw-order.createBase.placeholderAddPromotion\')"\n                                :error="promotionError"\n                                @on-remove-code="onRemoveExistingCode"\n                            />\n                            {% endblock %}\n                        </div>\n                        <sw-description-list\n                            grid="1fr 1fr"\n                            class="sw-order-create-summary__data"\n                        >\n                            \n                            {% block sw_order_create_base_line_items_summary_entries %}\n                            \n                            {% block sw_order_create_base_line_items_summary_amount %}\n                            <dt>{{ $tc(\'sw-order.createBase.summaryLabelAmount\') }}</dt>\n                            <dd>{{ currencyFilter(cartPrice ? cartPrice.positionPrice : 0, currency.isoCode) }}</dd>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_create_base_line_items_summary_shipping_cost %}\n                            <template v-if="cartDelivery">\n                                <dt>{{ $tc(\'sw-order.createBase.summaryLabelShippingCosts\') }}</dt>\n                                <dd>\n                                    <sw-order-saveable-field\n                                        v-tooltip="{\n                                            showDelay: 300,\n                                            message: shippingCostsDetail,\n                                            disabled: taxStatus === \'tax-free\'\n                                        }"\n                                        type="number"\n                                        editable\n                                        :value="cartDelivery.shippingCosts.totalPrice"\n                                        @value-change="onShippingChargeEdited"\n                                        @update:value="onShippingChargeUpdated"\n                                    >\n                                        {{ currencyFilter(cartDelivery.shippingCosts.totalPrice, currency.isoCode) }}\n                                    </sw-order-saveable-field>\n                                </dd>\n                            </template>\n                            <template\n                                v-for="(_, index) in cartDeliveryDiscounts"\n                                :key="index"\n                            >\n                                <dt>\n                                    {{ $tc(\'sw-order.createBase.discountLabelShippingCosts\') }}\n                                </dt>\n                                <dd>\n                                    {{ currencyFilter(delivery.shippingCosts.totalPrice, currency.isoCode) }}\n                                </dd>\n                            </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_create_base_line_items_summary_amount_without_tax %}\n                            <template v-if="taxStatus !== \'tax-free\'">\n                                <dt><strong>{{ $tc(\'sw-order.createBase.summaryLabelAmountWithoutTaxes\') }}</strong></dt>\n                                <dd><strong>{{ currencyFilter(cartPrice ? cartPrice.netPrice : 0, currency.isoCode) }}</strong></dd>\n                            </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_create_base_line_items_summary_taxes %}\n                            <template v-if="taxStatus !== \'tax-free\'">\n                                <template\n                                    v-for="(calculatedTax, index) in filteredCalculatedTaxes"\n                                    :key="index"\n                                >\n                                    <dt>\n                                        {{ $tc(\'sw-order.createBase.summaryLabelTaxes\', 1, { taxRate: calculatedTax.taxRate }) }}\n                                    </dt>\n                                    <dd>\n                                        {{ currencyFilter(calculatedTax.tax, currency.isoCode) }}\n                                    </dd>\n                                </template>\n                            </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_create_base_line_items_summary_amount_total %}\n                            <template v-if="taxStatus !== \'tax-free\'">\n                                <dt><strong>{{ $tc(\'sw-order.createBase.summaryLabelAmountTotal\') }}</strong></dt>\n                                <dd><strong>{{ currencyFilter(orderTotal, currency.isoCode) }}</strong></dd>\n                                <template v-if="displayRounded">\n                                    <dt><strong>{{ $tc(\'sw-order.createBase.summaryLabelAmountTotalRounded\') }}</strong></dt>\n                                    <dd><strong>{{ currencyFilter(cart.price.totalPrice, currency.isoCode) }}</strong></dd>\n                                </template>\n                            </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_create_base_line_items_summary_amount_free_tax %}\n                            <template v-if="taxStatus === \'tax-free\'">\n                                <dt><strong>{{ $tc(\'sw-order.detailBase.summaryLabelAmount\') }}</strong></dt>\n                                <dd><strong>{{ currencyFilter(cart.price.totalPrice, currency.isoCode) }}</strong></dd>\n                            </template>\n                            {% endblock %}\n                            {% endblock %}\n                        </sw-description-list>\n                    </sw-container>\n                </sw-card-section>\n                {% endblock %}\n            </sw-container>\n        </template>\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</sw-card-view>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["feature"],emits:["error"],mixins:[d.getByName("notification")],data(){return{isLoading:!1,isLoadingDetail:!1,address:{data:null},showAddressModal:!1,addAddressModalTitle:null,editAddressModalTitle:null,promotionError:null,showPromotionModal:!1,disabledAutoPromotionChecked:!1}},computed:{...h("swOrder",["cartErrors"]),customerRepository(){return a("repositoryFactory").create("customer")},customerAddressRepository(){return a("repositoryFactory").create("customer_address")},currencyRepository(){return a("repositoryFactory").create("currency")},customerAddressCriteria(){let e=new c(1,25);return e.addAssociation("salutation"),e.addAssociation("country"),e.addAssociation("countryState"),e},defaultCriteria(){let e=new c(1,25);return e.addAssociation("addresses").addAssociation("group").addAssociation("salutation").addAssociation("salesChannel").addAssociation("lastPaymentMethod").addAssociation("defaultBillingAddress.country").addAssociation("defaultBillingAddress.countryState").addAssociation("defaultBillingAddress.salutation").addAssociation("defaultShippingAddress.country").addAssociation("defaultShippingAddress.countryState").addAssociation("defaultShippingAddress.salutation").addAssociation("tags"),e},orderDate(){let e=new Date;return m.date(e)},customer(){return o.get("swOrder").customer},salesChannelId(){return this.customer?.salesChannelId??""},isCustomerActive(){return o.getters["swOrder/isCustomerActive"]},cart(){return o.get("swOrder").cart},cartLineItems(){return this.cart.lineItems},cartAutomaticPromotionItems(){return this.cartLineItems.filter(e=>"promotion"===e.type&&""===e.payload.code)},cartPrice(){return this.cart.price},currency(){return o.get("swOrder").context.currency},cartDelivery(){return l(this.cart,"deliveries[0]",null)},promotionCodeTags:{get(){return o.get("swOrder").promotionCodes},set(e){o.commit("swOrder/setPromotionCodes",e)}},cartDeliveryDiscounts(){return u.slice(this.cart.deliveries,1)||[]},filteredCalculatedTaxes(){return this.cartPrice&&this.cartPrice.calculatedTaxes?this.sortByTaxRate(this.cartPrice.calculatedTaxes).filter(e=>0!==e.tax):[]},promotionCodeLineItems(){return this.cartLineItems.filter(e=>"promotion"===e.type&&l(e,"payload.code"))},hasLineItem(){return this.cartLineItems.filter(e=>e.hasOwnProperty("id")).length>0},shippingCostsDetail(){if(!this.cartDelivery)return null;let e=this.sortByTaxRate(this.cartDelivery.shippingCosts.calculatedTaxes).map(e=>this.$tc("sw-order.createBase.shippingCostsTax",0,{taxRate:e.taxRate,tax:m.currency(e.tax,this.currency.isoCode)}));return`${this.$tc("sw-order.createBase.tax")}<br>${e.join("<br>")}`},disabledAutoPromotionVisibility:{get(){return this.disabledAutoPromotionChecked},set(e){this.switchAutomaticPromotions(e)}},taxStatus(){return l(this.cart,"price.taxStatus","")},displayRounded(){return!!this.cartPrice&&this.cartPrice.rawTotal!==this.cartPrice.totalPrice},orderTotal(){return this.cartPrice?this.displayRounded?this.cartPrice.rawTotal:this.cartPrice.totalPrice:0},currencyFilter(){return Cicada.Filter.getByName("currency")}},watch:{cart:{deep:!0,handler:"updatePromotionList"},promotionCodeTags:{handler:"handlePromotionCodeTags"},cartErrors:{handler(e){e&&0!==e.length&&Object.values(e).forEach(e=>{switch(e.level){case 0:this.createNotificationSuccess({message:e.message});break;case 10:this.createNotificationWarning({message:e.message});break;default:this.createNotificationError({message:e.message})}})}}},created(){this.createdComponent()},methods:{createdComponent(){let{customer:e}=this.$route.params;e&&(o.commit("swOrder/setCustomer",e),this.onSelectExistingCustomer(e.id))},async createCart(e){await o.dispatch("swOrder/createCart",{salesChannelId:e})},async loadCart(){this.cart.token&&0!==this.cart.lineItems.length&&(this.updateLoading(!0),o.dispatch("swOrder/getCart",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token}).finally(()=>this.updateLoading(!1)))},async onSelectExistingCustomer(e){this.isLoadingDetail=!0;try{let t=await this.customerRepository.get(e,Cicada.Context.api,this.defaultCriteria);this.cart.token||await this.createCart(t.salesChannelId),this.setCustomer(t),this.setCurrency(t),await this.updateCustomerContext()}catch{this.createNotificationError({message:this.$tc("sw-order.create.messageSwitchCustomerError")})}finally{this.isLoadingDetail=!1}},async updateCustomerContext(){await o.dispatch("swOrder/updateCustomerContext",{customerId:this.customer.id,salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token})},setCustomer(e){o.dispatch("swOrder/selectExistingCustomer",{customer:e})},setCurrency(e){this.currencyRepository.get(e.salesChannel.currencyId).then(e=>{o.commit("swOrder/setCurrency",e)})},onEditBillingAddress(){let e="billingAddress",t=this.customer[e]?this.customer[e]:this.customer.defaultBillingAddress;this.addAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleAddBillingAddress"),this.editAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleEditBillingAddress"),this.address={contextId:"billingAddressId",contextDataKey:e,contextDataDefaultId:"defaultBillingAddressId",data:t},this.showAddressModal=!0},onEditShippingAddress(){let e="shippingAddress",t=this.customer[e]?this.customer[e]:this.customer.defaultShippingAddress;this.addAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleAddShippingAddress"),this.editAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleEditShippingAddress"),this.address={contextId:"shippingAddressId",contextDataKey:e,contextDataDefaultId:"defaultShippingAddressId",data:t},this.showAddressModal=!0},setCustomerAddress({contextId:e,data:t}){this.customer[e]=t.id;let s=[{id:this.customer.billingAddressId,dataKey:"billingAddress"},{id:this.customer.shippingAddressId,dataKey:"shippingAddress"},{id:this.customer.defaultBillingAddressId,dataKey:"defaultBillingAddress"},{id:this.customer.defaultShippingAddressId,dataKey:"defaultShippingAddress"}];this.customerAddressRepository.get(t.id,Cicada.Context.api,this.customerAddressCriteria).then(e=>{s.forEach(s=>{s.id===t.id&&(this.customer[s.dataKey]=e)}),this.setCustomer(this.customer)})},closeModal(){this.showAddressModal=!1,this.address.data=null},save(){this.closeModal()},onSaveItem(e){this.updateLoading(!0),o.dispatch("swOrder/saveLineItem",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,item:e}).finally(()=>this.updateLoading(!1))},onRemoveItems(e){this.updateLoading(!0),o.dispatch("swOrder/removeLineItems",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,lineItemKeys:e}).then(()=>{e.forEach(e=>{let t=this.promotionCodeTags.find(t=>t.discountId===e);t&&(this.promotionCodeTags=this.promotionCodeTags.filter(e=>e.discountId!==t.discountId))})}).finally(()=>this.updateLoading(!1))},updateLoading(e){this.isLoading=e},sortByTaxRate(e){return e.sort((e,t)=>e.taxRate-t.taxRate)},onSubmitCode(e){this.updateLoading(!0),o.dispatch("swOrder/addPromotionCode",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,code:e}).finally(()=>this.updateLoading(!1))},onRemoveExistingCode(e){e.isInvalid?this.promotionCodeTags=this.promotionCodeTags.filter(t=>t.code!==e.code):this.onRemoveItems([e.discountId])},updatePromotionList(){this.promotionCodeTags=this.promotionCodeTags.map(e=>{let t=this.promotionCodeLineItems.find(t=>t.payload.code===e.code);return t?{...t.payload,isInvalid:!1}:{...e,isInvalid:!0}}),this.promotionCodeLineItems.forEach(e=>{this.promotionCodeTags.find(t=>t.code===e.payload.code)||(this.promotionCodeTags=[...this.promotionCodeTags,{...e.payload,isInvalid:!1}])})},handlePromotionCodeTags(e,t){if(this.promotionError=null,e.length<t.length)return;let s=this.promotionCodeTags.length,r=this.promotionCodeTags[s-1];e.length>t.length&&this.onSubmitCode(r.code),s>0&&r.isInvalid&&(this.promotionError={detail:this.$tc("sw-order.createBase.textInvalidPromotionCode")})},onShippingChargeEdited(){this.updateLoading(!0),o.dispatch("swOrder/modifyShippingCosts",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,shippingCosts:this.cartDelivery.shippingCosts}).catch(e=>{this.$emit("error",e)}).finally(()=>{this.updateLoading(!1)})},switchAutomaticPromotions(e){this.disabledAutoPromotionChecked=e,this.showPromotionModal=e,this.showPromotionModal||this.enableAutomaticPromotions()},enableAutomaticPromotions(){this.updateLoading(!0);let e={salesChannelId:this.customer.salesChannelId};a("cartStoreService").enableAutomaticPromotions(this.cart.token,e).then(()=>{this.loadCart()})},onClosePromotionModal(){this.showPromotionModal=!1,this.disabledAutoPromotionChecked=!1},onSavePromotionModal(){this.showPromotionModal=!1,this.disabledAutoPromotionChecked=!0,this.loadCart()},onShippingChargeUpdated(e){let t=Math.abs(e);this.cartDelivery.shippingCosts.unitPrice=t,this.cartDelivery.shippingCosts.totalPrice=t}}}}}]);