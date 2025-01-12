import{L as n}from"./order.types-BvKP5qzO.js";const d=`{% block sw_order_create_modal %} <sw-modal class="sw-order-create-initial-modal" :closable="false" :title="$tc('sw-order.initialModal.titleNewOrder')" variant="large" @modal-close="onCloseModal" > <template #default> {% block sw_order_create_modal_tabs %} <sw-tabs class="sw-order-create-initial-modal__tabs" default-item="customer" position-identifier="sw-order-create-initial-modal" > <template #default="{ active }"> {% block sw_order_create_modal_tabs_customer %} <sw-tabs-item class="sw-order-create-initial-modal__tab-customer" name="customer" :active-tab="active" > {{ $tc('sw-order.initialModal.tabCustomer') }} </sw-tabs-item> {% endblock %} {% block sw_order_create_modal_tabs_products %} <sw-tabs-item class="sw-order-create-initial-modal__tab-product" name="products" :active-tab="active" :disabled="!customer || undefined" > {{ $tc('sw-order.initialModal.tabProducts') }} </sw-tabs-item> {% endblock %} {% block sw_order_create_modal_tabs_options %} <sw-tabs-item class="sw-order-create-initial-modal__tab-options" name="options" :active-tab="active" :disabled="!customer || undefined" > {{ $tc('sw-order.initialModal.tabOptions') }} </sw-tabs-item> {% endblock %} {% block sw_order_create_modal_tabs_extension %}{% endblock %} </template> <template #content="{ active }"> {% block sw_order_create_modal_tabs_content %} <div class="sw-order-create-initial-modal__content"> {% block sw_order_create_modal_tabs_content_customer %} <sw-order-customer-grid v-show="active === 'customer'" /> {% endblock %} {% block sw_order_create_modal_tabs_content_products %} <sw-order-line-items-grid-sales-channel v-show="active === 'products'" :is-loading="isProductGridLoading" :sales-channel-id="salesChannelId" :cart="cart" :currency="currency" :is-customer-active="isCustomerActive" @on-save-item="onSaveItem" @on-remove-items="onRemoveItems" /> {% endblock %} {% block sw_order_create_modal_tabs_content_options %} <sw-order-create-options v-if="active === 'options'" :disabled="!customer || undefined" :disabled-auto-promotion="disabledAutoPromotion" :promotion-codes="promotionCodes" :context="context" @promotions-change="updatePromotion" @auto-promotion-toggle="updateAutoPromotionToggle" @shipping-cost-change="updateShippingCost" /> {% endblock %} </div> {% endblock %} </template> </sw-tabs> {% endblock %} </template> <template #modal-footer> {% block sw_order_create_modal_footer_modal_footer_cancel %} <sw-button class="sw-order-create-initial-modal__button-cancel" size="small" @click="onCloseModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_order_create_modal_footer_modal_footer_preview_order %} <sw-button class="sw-order-create-initial-modal__button-preview" size="small" variant="primary" :disabled="!customer || undefined" :is-loading="isLoading" @click="onPreviewOrder" > {{ $tc('sw-order.initialModal.buttonPreviewOrder') }} </sw-button> {% endblock %} </template> </sw-modal> {% endblock %}`,{Component:c,State:e,Mixin:r,Service:l}=Cicada,h=c.wrapComponentConfig({template:d,compatConfig:Cicada.compatConfig,mixins:[r.getByName("notification"),r.getByName("cart-notification")],data(){return{productItems:[],promotionCodes:[],isLoading:!1,isProductGridLoading:!1,disabledAutoPromotion:!1,shippingCosts:null,context:{currencyId:"",paymentMethodId:"",shippingMethodId:"",languageId:"",billingAddressId:"",shippingAddressId:""}}},computed:{salesChannelId(){var t;return((t=this.customer)==null?void 0:t.salesChannelId)??""},salesChannelContext(){return e.get("swOrder").context},currency(){return this.salesChannelContext.currency},cart(){return e.get("swOrder").cart},customer(){return e.get("swOrder").customer},isCustomerActive(){return e.getters["swOrder/isCustomerActive"]},promotionCodeItems(){return this.promotionCodes.map(t=>({type:n.PROMOTION,referencedId:t}))},cartDelivery(){var t;return(t=this.cart)==null?void 0:t.deliveries[0]}},watch:{salesChannelContext(t){var o,s,i,a;this.context={...this.context,currencyId:t.context.currencyId,languageId:t.context.languageIdChain[0],shippingMethodId:t.shippingMethod.id,paymentMethodId:t.paymentMethod.id,billingAddressId:((s=(o=t.customer)==null?void 0:o.activeBillingAddress)==null?void 0:s.id)??"",shippingAddressId:((a=(i=t.customer)==null?void 0:i.activeShippingAddress)==null?void 0:a.id)??""}}},methods:{onCloseModal(){if(!this.customer||!this.cart.token){this.$emit("modal-close");return}this.cancelCart().then(()=>{this.$emit("modal-close")})},async onPreviewOrder(){var o,s;const t=[];this.isLoading=!0,t.push(this.updateOrderContext()),this.disabledAutoPromotion&&t.push(this.disableAutoAppliedPromotions()),this.promotionCodes.length&&t.push(this.addPromotionCodes()),this.shippingCosts!==null&&this.shippingCosts!==((s=(o=this.cartDelivery)==null?void 0:o.shippingCosts)==null?void 0:s.totalPrice)&&t.push(this.modifyShippingCost(this.shippingCosts));try{await Promise.all(t)&&this.$emit("order-preview")}finally{this.isLoading=!1}},async onSaveItem(t){this.isProductGridLoading=!0;try{await e.dispatch("swOrder/saveLineItem",{salesChannelId:this.salesChannelId,contextToken:this.cart.token,item:t})}finally{this.isProductGridLoading=!1}},addPromotionCodes(){var t;return e.dispatch("swOrder/saveMultipleLineItems",{salesChannelId:(t=this.customer)==null?void 0:t.salesChannelId,contextToken:this.cart.token,items:this.promotionCodeItems})},updatePromotion(t){this.promotionCodes=t},async onRemoveItems(t){this.isProductGridLoading=!0;try{await e.dispatch("swOrder/removeLineItems",{salesChannelId:this.salesChannelId,contextToken:this.cart.token,lineItemKeys:t})}finally{this.isProductGridLoading=!1}},updateAutoPromotionToggle(t){this.disabledAutoPromotion=t},updateShippingCost(t){this.shippingCosts=t},updateOrderContext(){return e.dispatch("swOrder/updateOrderContext",{context:this.context,salesChannelId:this.salesChannelId,contextToken:this.cart.token})},disableAutoAppliedPromotions(){const t={salesChannelId:this.salesChannelId};return l("cartStoreService").disableAutomaticPromotions(this.cart.token,t).then(()=>{e.commit("swOrder/setDisabledAutoPromotion",!0)})},modifyShippingCost(t){var s,i;if(!this.cartDelivery)return Promise.resolve();const o=Math.abs(t);return this.cartDelivery.shippingCosts.unitPrice=o,this.cartDelivery.shippingCosts.totalPrice=o,e.dispatch("swOrder/modifyShippingCosts",{salesChannelId:(s=this.customer)==null?void 0:s.salesChannelId,contextToken:this.cart.token,shippingCosts:(i=this.cartDelivery)==null?void 0:i.shippingCosts})},cancelCart(){return e.dispatch("swOrder/cancelCart",{salesChannelId:this.salesChannelId,contextToken:this.cart.token}).then(()=>{this.$emit("modal-close")})}}});export{h as default};
//# sourceMappingURL=index-BSaC_kcv.js.map
