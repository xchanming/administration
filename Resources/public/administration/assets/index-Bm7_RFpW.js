const d=`{% block sw_order_create_details_body %} <sw-container class="sw-order-create-details-body" columns="minmax(min-content, 1fr) minmax(min-content, 1fr)" gap="0 32px" > <div> {% block sw_order_create_details_body_email %} <sw-text-field v-model:value="email" disabled size="small" class="sw-order-create-details-body__item" :label="$tc('sw-order.createBase.detailsBody.labelEmail')" :placeholder="$tc('sw-order.createBase.detailsBody.placeholderEmail')" /> {% endblock %} {% block sw_order_create_details_body_billing_address %} <div v-if="isCustomerActive" class="sw-order-create-details-body__item is-billing" > <p class="sw-order-create-details-body__item-label"> {{ $tc('sw-order.createBase.detailsBody.labelBillingAddress') }} <sw-button class="sw-order-create-details-body__item-label-button" @click="onEditBillingAddress" > {{ $tc('sw-order.detailBase.buttonEditAddress') }} </sw-button> </p> <sw-address :address="billingAddress" /> </div> <sw-textarea-field v-else disabled class="sw-order-create-details-body__item" :label="$tc('sw-order.createBase.detailsBody.labelBillingAddress')" :placeholder="$tc('sw-order.createBase.detailsBody.placeholder')" /> {% endblock %} </div> <div> {% block sw_order_create_details_body_phone_number %} <sw-text-field v-model:value="phoneNumber" disabled size="small" class="sw-order-create-details-body__item" :label="$tc('sw-order.createBase.detailsBody.labelPhoneNumber')" :placeholder="$tc('sw-order.createBase.detailsBody.placeholderPhoneNumber')" /> {% endblock %} {% block sw_order_create_details_body_shipping_address %} <div v-if="isCustomerActive" class="sw-order-create-details-body__item is-shipping" > <template v-if="isAddressIdentical"> {% block sw_order_create_details_body_shipping_address_identical %} <p class="sw-order-create-details-body__item-label"> {{ $tc('sw-order.createBase.detailsBody.labelShippingAddress') }} <sw-button class="sw-order-create-details-body__item-label-button" @click="onEditShippingAddress" > {{ $tc('sw-order.detailBase.buttonEditAddress') }} </sw-button> </p> <div class="sw-order-create-details-body__address-identical"> <span class="sw-order-create-details-body__address-identical-text"> {{ $tc('sw-order.createBase.detailsBody.textIdentical') }} </span> </div> {% endblock %} </template> <template v-else> {% block sw_order_create_details_body_shipping_address_content %} <p class="sw-order-create-details-body__item-label"> {{ $tc('sw-order.createBase.detailsBody.labelShippingAddress') }} <sw-button class="sw-order-create-details-body__item-label-button" @click="onEditShippingAddress" > {{ $tc('sw-order.detailBase.buttonEditAddress') }} </sw-button> </p> <sw-address :address="shippingAddress" /> {% endblock %} </template> </div> <sw-textarea-field v-else disabled class="sw-order-create-details-body__item" :label="$tc('sw-order.createBase.detailsBody.labelShippingAddress')" :placeholder="$tc('sw-order.createBase.detailsBody.placeholder')" /> {% endblock %} </div> </sw-container> {% endblock %}`,t={template:d,compatConfig:Cicada.compatConfig,emits:["on-edit-billing-address","on-edit-shipping-address"],props:{customer:{type:Object},isCustomerActive:{type:Boolean,default:!1}},computed:{email:{get(){return this.customer?this.customer.email:null},set(e){this.customer&&(this.customer.email=e)}},phoneNumber:{get(){return this.customer?this.customer.defaultBillingAddress.phoneNumber:null},set(e){this.customer&&(this.customer.defaultBillingAddress.phoneNumber=e)}},billingAddress:{get(){if(this.customer){const{billingAddress:e,defaultBillingAddress:s}=this.customer;return e||s}return null},set(e){this.customer&&(this.customer.billingAddress=e)}},shippingAddress:{get(){if(this.customer){const{shippingAddress:e,defaultShippingAddress:s}=this.customer;return e||s}return null},set(e){this.customer&&(this.customer.shippingAddress=e)}},isAddressIdentical(){var e,s;return((e=this.shippingAddress)==null?void 0:e.id)===((s=this.billingAddress)==null?void 0:s.id)}},methods:{onEditBillingAddress(){this.$emit("on-edit-billing-address")},onEditShippingAddress(){this.$emit("on-edit-shipping-address")}}};export{t as default};
//# sourceMappingURL=index-Bm7_RFpW.js.map
