const s=`{% block sw_settings_payment_sorting_modal %} <sw-modal class="sw-settings-payment-sorting-modal" :title="$tc('sw-settings-payment.sorting-modal.modalTitle')" @modal-close="closeModal" > {% block sw_settings_payment_sorting_modal_content %} <template #body> {% block sw_settings_payment_sorting_modal_content_subtitle %} <div class="sw-modal__body sw-settings-payment-sorting-modal__subtitle"> {{ $tc('sw-settings-payment.sorting-modal.subTitle') }} </div> {% endblock %} {% block sw_settings_payment_sorting_modal_content_list %} <div class="sw-modal__body"> <sw-sortable-list class="sw-settings-payment-sorting-modal__payment-method-list" :items="sortedPaymentMethods" :scroll-on-drag="true" :scroll-on-drag-conf="scrollOnDragConf" @items-sorted="onSort" > {% block sw_settings_payment_sorting_modal_content_payment_method %} <template #item="{ item: paymentMethod }"> <div class="sw-settings-payment-sorting-modal__payment-method-list-item" :class="!paymentMethod.active ? 'is--disabled' : ''" > {% block sw_settings_payment_sorting_modal_content_payment_method_action %} <sw-icon class="sw-settings-payment-sorting-modal__payment-method-list-item__action" name="regular-grip-vertical" /> {% endblock %} {% block sw_settings_payment_sorting_modal_content_payment_method_icon %} <img v-if="isShopwareDefaultPaymentMethod(paymentMethod)" class="sw-settings-payment-sorting-modal__payment-method-list-item__icon" :src="assetFilter('/administration/static/img/checkout/shopware_payment_method.svg')" alt="" > <sw-media-preview-v2 v-else class="sw-settings-payment-sorting-modal__payment-method-list-item__icon" :source="paymentMethod.media ? paymentMethod.media : null" /> {% endblock %} {% block sw_settings_payment_sorting_modal_content_payment_method_name %} <div class="sw-settings-payment-sorting-modal__payment-method-list-item__name"> {{ paymentMethod.translated.distinguishableName }} </div> {% endblock %} </div> </template> {% endblock %} </sw-sortable-list> </div> {% endblock %} </template> {% endblock %} {% block sw_settings_payment_sorting_modal_footer %} <template #modal-footer> {% block sw_settings_payment_sorting_modal_footer_cancel_button %} <sw-button class="sw-settings-payment-sorting-modal__cancel-button" @click="closeModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_settings_payment_sorting_modal_footer_save_button %} <sw-button-process class="sw-settings-payment-sorting-modal__save-button" variant="primary" :is-loading="isSaving" :disabled="!acl.can('category.editor')" :process-success="false" @click="applyChanges" > {{ $tc('global.default.save') }} </sw-button-process> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %}`,{Mixin:a}=Shopware,o={template:s,inject:["acl","repositoryFactory"],emits:["modal-close","modal-save"],mixins:[a.getByName("notification")],props:{paymentMethods:{type:Array,required:!0}},data(){return{isSaving:!1,originalPaymentMethods:[...this.paymentMethods],sortedPaymentMethods:[...this.paymentMethods],scrollOnDragConf:{speed:50,margin:130,accelerationMargin:-10}}},computed:{paymentMethodRepository(){return this.repositoryFactory.create("payment_method")},assetFilter(){return Shopware.Filter.getByName("asset")}},methods:{closeModal(){this.$emit("modal-close")},applyChanges(){return this.isSaving=!0,this.sortedPaymentMethods.map((t,e)=>(t.position=e+1,t)),this.paymentMethodRepository.saveAll(this.sortedPaymentMethods,Shopware.Context.api).then(()=>{this.isSaving=!1,this.$emit("modal-close"),this.$emit("modal-save"),this.createNotificationSuccess({message:this.$tc("sw-settings-payment.sorting-modal.saveSuccessful")})}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-payment.sorting-modal.errorMessage")})})},onSort(t){this.sortedPaymentMethods=t},isShopwareDefaultPaymentMethod(t){return["Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\DebitPayment","Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\InvoicePayment","Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\CashPayment","Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\PrePayment"].includes(t.handlerIdentifier)}}};export{o as default};
