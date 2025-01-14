"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[53133],{453133:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(102908),s=n(869905);let{Component:o,Mixin:a,State:i}=Cicada,{Criteria:d}=Cicada.Data;var l=o.wrapComponentConfig({template:'\n{% block sw_order_create_details %}\n<div class="sw-order-create-details">\n    <sw-loader v-if="isLoading" />\n\n    \n    {% block sw_order_create_details_promotion_modal %}\n    <sw-order-create-promotion-modal\n        v-if="showPromotionModal"\n        :is-loading="isLoading"\n        :currency="currency"\n        :sales-channel-id="salesChannelId"\n        @close="onClosePromotionModal"\n        @save="onSavePromotionModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_create_details_payment %}\n    <sw-card\n        class="sw-order-create-details__payment"\n        position-identifier="sw-order-create-details-payment"\n        :title="$tc(\'sw-order.createBase.detailsTab.labelTransactionCard\')"\n    >\n        <sw-container\n            class="sw_order_create-details__payment-container"\n            gap="0px 30px"\n            columns="1fr 1fr"\n        >\n            <sw-order-customer-address-select\n                v-model:value="context.billingAddressId"\n                :label="$tc(\'sw-order.createBase.labelBillingAddress\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderBillingAddress\')"\n                :same-address-value="context.shippingAddressId"\n                :customer="customer"\n            />\n\n            <sw-entity-single-select\n                v-model:value="context.paymentMethodId"\n                entity="payment_method"\n                label-property="distinguishableName"\n                class="sw_order_create-details__payment-method"\n                :criteria="paymentMethodCriteria"\n                :label="$tc(\'sw-order.createBase.labelPaymentMethod\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderPaymentMethod\')"\n                show-clearable-button\n                required\n            />\n\n            <sw-entity-single-select\n                v-model:value="context.currencyId"\n                class="sw_order_create-details__currency"\n                entity="currency"\n                :criteria="currencyCriteria"\n                :label="$tc(\'sw-order.createBase.labelCurrency\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderCurrency\')"\n                show-clearable-button\n                required\n            />\n        </sw-container>\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_order_create_details_shipping %}\n    <sw-card\n        class="sw-order-create-details__shipping"\n        position-identifier="sw-order-create-details-shipping"\n        :title="$tc(\'sw-order.createBase.detailsTab.labelDeliveryCard\')"\n    >\n        <sw-container\n            class="sw_order_create_details__shipping-container"\n            gap="0px 30px"\n            columns="1fr 1fr"\n        >\n            <sw-order-customer-address-select\n                v-model:value="context.shippingAddressId"\n                :label="$tc(\'sw-order.createBase.labelShippingAddress\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderShippingAddress\')"\n                :same-address-label="$tc(\'sw-order.initialModal.options.textSameAsBillingAddress\')"\n                :same-address-value="context.billingAddressId"\n                :customer="customer"\n            />\n\n            <sw-entity-single-select\n                v-model:value="context.shippingMethodId"\n                show-clearable-button\n                class="sw_order_create-details__shipping"\n                entity="shipping_method"\n                :criteria="shippingMethodCriteria"\n                :label="$tc(\'sw-order.createBase.labelShippingMethod\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderShippingMethod\')"\n                required\n            />\n\n            <sw-number-field\n                v-model:value="shippingCosts"\n                :label="$tc(\'sw-order.createBase.labelShippingCosts\')"\n                :min="0"\n                fill-digits\n                required\n            >\n                <template #suffix>\n                    {{ currency.symbol }}\n                </template>\n            </sw-number-field>\n\n            <sw-datepicker\n                v-model:value="deliveryDate"\n                disabled\n                hide-hint\n                :label="$tc(\'sw-order.detailDeliveries.labelDeliveryDate\')"\n            />\n        </sw-container>\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_order_create_details_order %}\n    <sw-card\n        class="sw-order-create-details__order"\n        position-identifier="sw-order-create-details-order"\n        :title="$tc(\'sw-order.createBase.detailsTab.labelOrderCard\')"\n    >\n        <sw-container\n            class="sw_order_create_details__order-container"\n            gap="0px 30px"\n            columns="1fr 1fr"\n        >\n            \n            {% block sw_order_create_details_email %}\n            <sw-text-field\n                v-model:value="email"\n                disabled\n                class="sw-order-create-details__email"\n                :label="$tc(\'sw-order.createBase.labelEmail\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderEmail\')"\n                required\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_create_details_phone_number %}\n            <sw-text-field\n                v-model:value="phoneNumber"\n                disabled\n                class="sw-order-create-details__phone-number"\n                :label="$tc(\'sw-order.createBase.labelPhoneNumber\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderPhoneNumber\')"\n                required\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_create_details__order_sales_channel %}\n            <sw-entity-single-select\n                v-model:value="salesChannelId"\n                disabled\n                entity="sales_channel"\n                class="sw-order-create-options__sales-channel"\n                :label="$tc(\'sw-order.createBase.labelSalesChannel\')"\n                required\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_create_details_order_language %}\n            <sw-entity-single-select\n                v-model:value="context.languageId"\n                entity="language"\n                class="sw-order-create-options__order-language"\n                :criteria="languageCriteria"\n                :label="$tc(\'sw-order.createBase.labelOrderLanguage\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderOrderLanguage\')"\n                show-clearable-button\n                required\n            />\n        {% endblock %}\n        </sw-container>\n\n        \n        {% block sw_order_create_details_voucher_field %}\n        <sw-order-promotion-tag-field\n            v-model:value="promotionCodeTags"\n            :disabled="!hasLineItem"\n            :currency="currency"\n            :label="$tc(\'sw-order.createBase.labelAddPromotion\')"\n            :placeholder="$tc(\'sw-order.createBase.placeholderAddPromotion\')"\n            :error="promotionError"\n            @on-remove-code="onRemoveExistingCode"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_switch_disable_auto_promotion %}\n        <sw-switch-field\n            class="sw-order-create-details__disable-auto-promotion"\n            :value="disabledAutoPromotion"\n            :label="$tc(\'sw-order.createBase.labelToggleAutomaticPromotions\')"\n            @update:value="toggleAutomaticPromotions"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","cartStoreService"],mixins:[a.getByName("notification"),a.getByName("cart-notification")],data(){return{showPromotionModal:!1,promotionError:null,isLoading:!1,context:{currencyId:"",paymentMethodId:"",shippingMethodId:"",languageId:"",billingAddressId:"",shippingAddressId:""}}},computed:{salesChannelId(){return this.salesChannelContext?.salesChannel.id||""},customer(){return i.get("swOrder").customer},cart(){return i.get("swOrder").cart},currency(){return i.get("swOrder").context.currency},salesChannelContext(){return i.get("swOrder").context},email(){return this.customer?.email||""},phoneNumber(){return this.customer?.defaultBillingAddress?.phoneNumber||""},cartDelivery(){return(0,s.U2)(this.cart,"deliveries[0]",null)},shippingCosts:{get(){return this.cartDelivery?.shippingCosts.totalPrice||0},set(e){this.modifyShippingCosts(e)}},deliveryDate(){return this.cartDelivery?.deliveryDate.earliest||""},shippingMethodCriteria(){let e=new d(1,25);return e.addFilter(d.equals("salesChannels.id",this.salesChannelId)),e},paymentMethodCriteria(){let e=new d(1,25);return e.addFilter(d.equals("salesChannels.id",this.salesChannelId)),e.addFilter(d.equals("active",1)),e},languageCriteria(){let e=new d(1,25);return e.addFilter(d.equals("salesChannels.id",this.salesChannelId)),e},currencyCriteria(){let e=new d(1,25);return e.addFilter(d.equals("salesChannels.id",this.salesChannelId)),e},currencyRepository(){return this.repositoryFactory.create("currency")},isCartTokenAvailable(){return i.getters["swOrder/isCartTokenAvailable"]},hasLineItem(){return this.cart?.lineItems.filter(e=>e.hasOwnProperty("id")).length>0},promotionCodeLineItems(){return this.cart?.lineItems.filter(e=>e.type===r.S.PROMOTION&&e?.payload?.code)},disabledAutoPromotion(){return i.get("swOrder").disabledAutoPromotion},promotionCodeTags:{get(){return i.get("swOrder").promotionCodes},set(e){i.commit("swOrder/setPromotionCodes",e)}}},watch:{context:{deep:!0,handler(){this.customer&&this.isCartTokenAvailable&&(this.isLoading=!0,this.updateContext().finally(()=>{this.isLoading=!1}))}},cart:{deep:!0,immediate:!0,handler:"updatePromotionList"},promotionCodeTags:{handler:"handlePromotionCodeTags"},"context.languageId"(e){e&&i.commit("context/setLanguageId",e)}},created(){this.createdComponent()},methods:{createdComponent(){this.customer||this.$nextTick(()=>{this.$router.push({name:"sw.order.create.initial"})}),this.context={...this.context,currencyId:this.salesChannelContext.context.currencyId,languageId:this.salesChannelContext.context.languageIdChain[0],shippingMethodId:this.salesChannelContext.shippingMethod.id,paymentMethodId:this.salesChannelContext.paymentMethod.id,billingAddressId:this.salesChannelContext.customer?.activeBillingAddress?.id??"",shippingAddressId:this.salesChannelContext.customer?.activeShippingAddress?.id??""}},updateContext(){return i.dispatch("swOrder/updateOrderContext",{context:this.context,salesChannelId:this.customer?.salesChannelId,contextToken:this.cart.token}).then(()=>this.loadCart())},loadCart(){return i.dispatch("swOrder/getCart",{salesChannelId:this.customer?.salesChannelId,contextToken:this.cart.token})},onRemoveExistingCode(e){return e.isInvalid?(this.promotionCodeTags=this.promotionCodeTags.filter(t=>t.code!==e.code),Promise.resolve()):this.onRemoveItems([e.discountId])},onRemoveItems(e){return this.isLoading=!0,i.dispatch("swOrder/removeLineItems",{salesChannelId:this.customer?.salesChannelId,contextToken:this.cart.token,lineItemKeys:e}).then(()=>{e.forEach(e=>{let t=this.promotionCodeTags.find(t=>t.discountId===e);t&&(this.promotionCodeTags=this.promotionCodeTags.filter(e=>e.discountId!==t.discountId))})}).finally(()=>{this.isLoading=!1})},updatePromotionList(){this.promotionCodeTags=this.promotionCodeTags.map(e=>{let t=this.promotionCodeLineItems.find(t=>t.payload?.code===e.code);return t?{...t.payload,isInvalid:!1}:{...e,isInvalid:!0}}),this.promotionCodeLineItems.forEach(e=>{this.promotionCodeTags.find(t=>t.code===e.payload?.code)||(this.promotionCodeTags=[...this.promotionCodeTags,{...e.payload,isInvalid:!1}])})},toggleAutomaticPromotions(e){if(this.showPromotionModal=e,e){i.commit("swOrder/setDisabledAutoPromotion",!0);return}this.isLoading=!0,this.cartStoreService.enableAutomaticPromotions(this.cart.token,{salesChannelId:this.salesChannelId}).then(()=>(i.commit("swOrder/setDisabledAutoPromotion",!1),this.loadCart())).finally(()=>{this.isLoading=!1})},onClosePromotionModal(){this.showPromotionModal=!1,i.commit("swOrder/setDisabledAutoPromotion",!1)},onSavePromotionModal(){return this.showPromotionModal=!1,i.commit("swOrder/setDisabledAutoPromotion",!0),this.loadCart().finally(()=>{this.isLoading=!1})},modifyShippingCosts(e){let t=Math.abs(e);this.cartDelivery&&(this.cartDelivery.shippingCosts.unitPrice=t,this.cartDelivery.shippingCosts.totalPrice=t,this.isLoading=!0,i.dispatch("swOrder/modifyShippingCosts",{salesChannelId:this.salesChannelId,contextToken:this.cart.token,shippingCosts:this.cartDelivery.shippingCosts}).catch(e=>{this.$emit("error",e)}).finally(()=>{this.isLoading=!1}))},handlePromotionCodeTags(e,t){if(this.promotionError=null,e.length<t.length)return;let n=this.promotionCodeTags.length,r=this.promotionCodeTags[n-1];e.length>t.length&&this.onSubmitCode(r.code),n>0&&r.isInvalid&&(this.promotionError={detail:this.$tc("sw-order.createBase.textInvalidPromotionCode")})},onSubmitCode(e){return this.isLoading=!0,i.dispatch("swOrder/addPromotionCode",{salesChannelId:this.customer?.salesChannelId,contextToken:this.cart.token,code:e}).finally(()=>{this.isLoading=!1})}}})}}]);