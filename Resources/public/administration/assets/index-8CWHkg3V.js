const{Service:n}=Cicada;function l(e){return e.filter(t=>t.label==="")}function c(e){return e.slice().reverse()}function m(e,t){return c(t),[...e,...t]}const u={namespaced:!0,state:()=>({customer:null,defaultSalesChannel:null,cart:{token:null,lineItems:[],price:{totalPrice:null},deliveries:[]},context:{token:"",customer:null,paymentMethod:{translated:{distinguishableName:""}},shippingMethod:{translated:{name:""}},currency:{isoCode:"CNY",symbol:"¥",totalRounding:{decimals:2}},salesChannel:{id:""},context:{currencyId:"",languageIdChain:[]}},promotionCodes:[],disabledAutoPromotion:!1}),mutations:{setCustomer(e,t){e.context.customer=t,e.customer=t},setDefaultSalesChannel(e,t){e.defaultSalesChannel=t},setCartToken(e,t){e.cart.token=t},setCart(e,t){const r=l(e.cart.lineItems);e.cart=t,e.cart.lineItems=m(r,e.cart.lineItems)},setCartLineItems(e,t){e.cart.lineItems=t},setCurrency(e,t){e.context.currency=t},setContext(e,t){e.context=t},setPromotionCodes(e,t){e.promotionCodes=t},removeEmptyLineItem(e,t){e.cart.lineItems=e.cart.lineItems.filter(r=>r.id!==t)},removeInvalidPromotionCodes(e){e.promotionCodes=e.promotionCodes.filter(t=>!t.isInvalid)},setDisabledAutoPromotion(e,t){e.disabledAutoPromotion=t}},getters:{isCustomerActive(e){var t;return!!((t=e==null?void 0:e.context.customer)!=null&&t.active)},isCartTokenAvailable(e){var t;return!!((t=e==null?void 0:e.cart)!=null&&t.token)},currencyId(e){return(e==null?void 0:e.context.context.currencyId)??""},invalidPromotionCodes(e){return e.promotionCodes.filter(t=>t.isInvalid)},cartErrors(e){var t;return((t=e==null?void 0:e.cart)==null?void 0:t.errors)??null}},actions:{selectExistingCustomer({commit:e},{customer:t}){e("setCustomer",t),e("setDefaultSalesChannel",{...(t==null?void 0:t.salesChannel)??null})},createCart({commit:e},{salesChannelId:t}){return n("cartStoreService").createCart(t).then(r=>{const a=r.data.token;return e("setCartToken",a),a}).then(r=>n("contextStoreService").getSalesChannelContext(t,r).then(a=>e("setContext",a.data)))},getCart({commit:e},{salesChannelId:t,contextToken:r}){if(`${r}`.length!==32)throw new Error("Invalid context token");return Promise.all([n("cartStoreService").getCart(t,r).then(a=>e("setCart",a.data)),n("contextStoreService").getSalesChannelContext(t,r).then(a=>e("setContext",a.data))])},cancelCart(e,{salesChannelId:t,contextToken:r}){if(`${r}`.length!==32)throw new Error("Invalid context token");return n("cartStoreService").cancelCart(t,r)},updateCustomerContext(e,{customerId:t,salesChannelId:r,contextToken:a}){return n("contextStoreService").updateCustomerContext(t,r,a)},updateOrderContext(e,{context:t,salesChannelId:r,contextToken:a}){return n("contextStoreService").updateContext(t,r,a)},getContext(e,{salesChannelId:t,contextToken:r}){return n("contextStoreService").getSalesChannelContext(t,r)},saveOrder(e,{salesChannelId:t,contextToken:r}){return n("checkoutStoreService").checkout(t,r)},removeLineItems({commit:e},{salesChannelId:t,contextToken:r,lineItemKeys:a}){return n("cartStoreService").removeLineItems(t,r,a).then(o=>e("setCart",o.data))},saveLineItem({commit:e},{salesChannelId:t,contextToken:r,item:a}){return n("cartStoreService").saveLineItem(t,r,a).then(o=>e("setCart",o.data))},saveMultipleLineItems({commit:e},{salesChannelId:t,contextToken:r,items:a}){return n("cartStoreService").addMultipleLineItems(t,r,a).then(o=>e("setCart",o.data))},addPromotionCode({commit:e},{salesChannelId:t,contextToken:r,code:a}){return n("cartStoreService").addPromotionCode(t,r,a).then(o=>e("setCart",o.data))},modifyShippingCosts({commit:e},{salesChannelId:t,contextToken:r,shippingCosts:a}){var o;return(o=n("cartStoreService"))==null?void 0:o.modifyShippingCosts(t,r,a).then(i=>e("setCart",i.data.data))},remindPayment(e,{orderTransactionId:t}){return n("orderStateMachineService").transitionOrderTransactionState(t,"remind")}}},h=u,_=`{% block sw_order_create %} <sw-page class="sw-order-create"> {% block sw_order_create_smart_bar_header %} <template #smart-bar-header> {% block sw_order_create_smart_bar_header_title %} <h2 v-if="!showInitialModal"> {% block sw_order_create_smart_bar_header_title_text %} {{ $tc('sw-order.create.textNewOrder') }} {% endblock %} </h2> {% endblock %} </template> {% endblock %} {% block sw_order_create_smart_bar_actions %} <template #smart-bar-actions> {% block sw_order_create_smart_bar_actions_slot %} <template v-if="!showInitialModal"> {% block sw_order_create_smart_bar_actions_cancel %} <sw-button @click="onCancelOrder"> {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_order_create_smart_bar_actions_add %} <sw-button-process variant="primary" :disabled="isLoading" :is-loading="isLoading" :process-success="isSaveSuccessful" @update:process-success="saveFinish" @click.prevent="onSaveOrder" > {{ $tc('sw-order.create.buttonSaveOrder') }} </sw-button-process> {% endblock %} </template> {% endblock %} </template> {% endblock %} {% block sw_order_create_language_switch %} <template #language-switch> <sw-language-switch disabled /> </template> {% endblock %} {% block sw_order_create_content %} <template #content> {% block sw_order_create_content_view %} <sw-card-view> {% block sw_order_create_content_tabs %} <sw-tabs v-if="!showInitialModal" class="sw-order-create__tabs" position-identifier="sw-order-create" > {% block sw_order_create_content_tabs_general %} <sw-tabs-item class="sw-order-create__tab-general" :route="{ name: 'sw.order.create.general' }" :title="$tc('sw-order.detail.tabGeneral')" > {{ $tc('sw-order.detail.tabGeneral') }} </sw-tabs-item> {% endblock %} {% block sw_order_create_content_tabs_details %} <sw-tabs-item class="sw-order-create__tab-details" :route="{ name: 'sw.order.create.details' }" :title="$tc('sw-order.detail.tabDetails')" > {{ $tc('sw-order.detail.tabDetails') }} </sw-tabs-item> {% endblock %} </sw-tabs> {% endblock %} {% block sw_order_create_content_view %} <router-view v-slot="{ Component }" > <component :is="Component" @error="showError" /> </router-view> {% endblock %} </sw-card-view> {% endblock %} {% block sw_order_create_invalid_promotion_modal %} <sw-order-create-invalid-promotion-modal v-if="showInvalidCodeModal" @confirm="removeInvalidCode" @close="closeInvalidCodeModal" /> {% endblock %} {% block sw_order_create_remind_payment_modal %} <sw-modal v-if="showRemindPaymentModal" class="sw-order-create__remind-payment-modal" :title="$tc('sw-order.create.remindPaymentModal.title')" :is-loading="remindPaymentModalLoading" @modal-close="onRemindPaymentModalClose" > {% block sw_order_create_remind_payment_modal_content %} <p>{{ $tc('sw-order.create.remindPaymentModal.text', 0, {paymentMethodName: paymentMethodName }) }}</p> {% endblock %} <template #modal-footer> {% block sw_order_create_remind_payment_modal_footer %} <sw-button class="sw-order-create__remind-payment-modal-decline" size="small" @click="onRemindPaymentModalClose" > {{ $tc('global.default.no') }} </sw-button> <sw-button class="sw-order-create__remind-payment-modal-remind" variant="primary" size="small" @click="onRemindCustomer" > {{ $tc('sw-order.create.remindPaymentModal.primaryAction') }} </sw-button> {% endblock %} </template> </sw-modal> {% endblock %} </template> {% endblock %} </sw-page> {% endblock %}`,{Context:w,State:s,Mixin:C}=Cicada,{Criteria:v}=Cicada.Data,b=Cicada.Component.wrapComponentConfig({template:_,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","feature"],mixins:[C.getByName("notification")],data(){return{isLoading:!1,isSaveSuccessful:!1,showInvalidCodeModal:!1,showRemindPaymentModal:!1,remindPaymentModalLoading:!1,orderId:null,orderTransaction:null,paymentMethodName:""}},computed:{customer(){return s.get("swOrder").customer},cart(){return s.get("swOrder").cart},invalidPromotionCodes(){return s.getters["swOrder/invalidPromotionCodes"]},isSaveOrderValid(){return this.customer&&this.cart.token&&this.cart.lineItems.length&&!this.invalidPromotionCodes.length},paymentMethodRepository(){return this.repositoryFactory.create("payment_method")},showInitialModal(){return this.$route.name==="sw.order.create.initial"}},beforeCreate(){s.registerModule("swOrder",h)},created(){this.createdComponent()},beforeUnmount(){this.unregisterModule()},methods:{createdComponent(){s.getters["context/isSystemDefaultLanguage"]||s.commit("context/resetLanguageToDefault")},unregisterModule(){s.unregisterModule("swOrder")},redirectToOrderList(){this.$router.push({name:"sw.order.index"})},saveFinish(){this.orderId&&(this.isSaveSuccessful=!1,s.commit("context/setLanguageId",localStorage.getItem("sw-admin-current-language")||Cicada.Defaults.systemLanguageId),this.$router.push({name:"sw.order.detail",params:{id:this.orderId}}))},onSaveOrder(){var e;return this.isSaveOrderValid?(this.isLoading=!0,this.isSaveSuccessful=!1,s.dispatch("swOrder/saveOrder",{salesChannelId:(e=this.customer)==null?void 0:e.salesChannelId,contextToken:this.cart.token}).then(t=>{var r,a,o;this.orderId=(r=t==null?void 0:t.data)==null?void 0:r.id,this.orderTransaction=(o=(a=t==null?void 0:t.data)==null?void 0:a.transactions)==null?void 0:o[0],this.orderTransaction&&(this.paymentMethodRepository.get(this.orderTransaction.paymentMethodId,w.api,new v(1,1)).then(i=>{var d;this.paymentMethodName=((d=i==null?void 0:i.translated)==null?void 0:d.distinguishableName)??""}),this.showRemindPaymentModal=!0)}).catch(t=>this.showError(t)).finally(()=>{this.isLoading=!1})):(this.invalidPromotionCodes.length>0?this.openInvalidCodeModal():this.showError(),Promise.resolve())},onCancelOrder(){if(this.customer===null||this.cart===null){this.redirectToOrderList();return}s.dispatch("swOrder/cancelCart",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token}).then(()=>this.redirectToOrderList())},showError(e=null){var r,a,o,i;const t=((i=(o=(a=(r=e==null?void 0:e.response)==null?void 0:r.data)==null?void 0:a.errors)==null?void 0:o[0])==null?void 0:i.detail)||null;this.createNotificationError({message:t||this.$tc("sw-order.create.messageSaveError")})},openInvalidCodeModal(){this.showInvalidCodeModal=!0},closeInvalidCodeModal(){this.showInvalidCodeModal=!1},removeInvalidCode(){s.commit("swOrder/removeInvalidPromotionCodes"),this.closeInvalidCodeModal()},onRemindPaymentModalClose(){this.isSaveSuccessful=!0,this.showRemindPaymentModal=!1},onRemindCustomer(){var e;this.remindPaymentModalLoading=!0,s.dispatch("swOrder/remindPayment",{orderTransactionId:(e=this.orderTransaction)==null?void 0:e.id}).then(()=>{this.remindPaymentModalLoading=!1,this.onRemindPaymentModalClose()})}}});export{b as default};
//# sourceMappingURL=index-8CWHkg3V.js.map
