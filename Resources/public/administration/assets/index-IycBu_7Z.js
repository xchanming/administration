const t=`{% block sw_product_modal_delivery %} <sw-modal :title="$tc('sw-product.variations.deliveryModal.modalHeadline')" class="sw-product-modal-delivery" :is-loading="isLoading" @modal-close="$emit('modal-close')" > {% block sw_product_modal_delivery_sidebar %} <div class="sw-product-modal-delivery__sidebar"> {% block sw_product_modal_delivery_sidebar_tabs %} <sw-tabs is-vertical position-identifier="sw-product-modal-delivery" > {% block sw_product_modal_delivery_sidebar_tabs_items %} <sw-tabs-item :active="activeTab == 'order'" @click="activeTab = 'order'" > {{ $tc('sw-product.variations.deliveryModal.order') }} </sw-tabs-item> <sw-tabs-item :active="activeTab == 'media'" @click="activeTab = 'media'" > {{ $tc('sw-product.variations.deliveryModal.media') }} </sw-tabs-item> <sw-tabs-item :active="activeTab == 'listing'" @click="activeTab = 'listing'" > {{ $tc('sw-product.variations.deliveryModal.listing') }} </sw-tabs-item> {% endblock %} </sw-tabs> {% endblock %} {% block sw_product_modal_delivery_sidebar_descriptions %} <p v-if="activeTab == 'order'"> {{ $tc('sw-product.variations.deliveryModal.orderExplanation') }} </p> <p v-if="activeTab == 'media'"> {{ $tc('sw-product.variations.deliveryModal.mediaExplanation') }} </p> <p v-if="activeTab == 'listing'"> {{ $tc('sw-product.variations.deliveryModal.listingExplanation') }} </p> {% endblock %} </div> {% endblock %} {% block sw_product_modal_delivery_main %} <div class="sw-product-modal-delivery__main"> {% block sw_product_modal_delivery_main_order %} <sw-product-variants-delivery-order v-if="activeTab == 'order'" :product="product" :selected-groups="selectedGroups" /> {% endblock %} {% block sw_product_modal_delivery_media %} <sw-product-variants-delivery-media v-if="activeTab == 'media'" :product="product" :selected-groups="selectedGroups" /> {% endblock %} {% block sw_product_modal_delivery_listing %} <sw-product-variants-delivery-listing v-if="activeTab == 'listing'" :product="product" :selected-groups="selectedGroups" /> {% endblock %} </div> {% endblock %} {% block sw_product_modal_delivery_footer %} <template #modal-footer> {% block sw_product_modal_delivery_footer_button_cancel %} <sw-button size="small" @click="cancelDeliveryConfiguration" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_product_modal_delivery_footer_button_save %} <sw-button v-tooltip="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('product.editor'), showOnDisabledElements: true }" class="sw-product-modal-delivery__save-button" :disabled="!acl.can('product.editor')" variant="primary" size="small" @click="saveDeliveryConfiguration" > {{ $tc('sw-product.variations.deliveryModal.save') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %}`,o={template:t,inject:["repositoryFactory","acl"],emits:["modal-close","configuration-close"],props:{product:{type:Object,required:!0},selectedGroups:{type:Array,required:!0}},data(){return{activeTab:"order",isLoading:!1}},computed:{productRepository(){return this.repositoryFactory.create("product")}},created(){this.createdComponent()},methods:{createdComponent(){this.product.variantListingConfig||(this.product.variantListingConfig={displayParent:null,configuratorGroupConfig:[]})},saveDeliveryConfiguration(){this.isLoading=!0;const e=this.handleExpandedListing(this.product);this.productRepository.save(e).then(()=>{this.$emit("configuration-close")})},cancelDeliveryConfiguration(){this.$emit("configuration-close")},handleExpandedListing(e){if(e&&e.listingMode==="expanded"){const i=e.variantListingConfig.configuratorGroupConfig??[];e.variantListingConfig.mainVariantId=null,e.variantListingConfig.displayParent=null,e.variantListingConfig.configuratorGroupConfig=i}return delete e.listingMode,e}}};export{o as default};
