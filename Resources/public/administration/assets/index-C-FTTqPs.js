import{e as l}from"./error-config-C8sUzeHP.js";import{C as o}from"./sw-customer.constant-v-M3S1F-.js";import{A as m}from"./api.service-BUA61cyq.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";const i=`{% block sw_customer_card %} <sw-card class="sw-customer-card" position-identifier="sw-customer" :title="title" :is-loading="isLoading" > {% block sw_customer_card_header_right %} <template #header-right> {% block sw_customer_card_imitate_customer_modal %} <sw-customer-imitate-customer-modal v-if="showImitateCustomerModal" :customer="customer" @modal-close="onCloseImitateCustomerModal" /> {% endblock %} {% block sw_customer_card_action_customer_impersonation %} <sw-button v-tooltip="{ message: $tc(customer.guest ? 'sw-customer.card.tooltipImitateCustomerGuest' : 'sw-privileges.tooltip.warning'), disabled: !customer.guest && acl.can('api_proxy_imitate-customer'), showOnDisabledElements: true }" :disabled="!canUseCustomerImitation" variant="action" @click="onImitateCustomer" > <template v-if="hasSingleBoundSalesChannelUrl"> {{ $tc('sw-customer.card.buttonImitateCustomer') }} <sw-icon name="regular-external-link-s" size="12px" /> </template> <template v-else> {{ $tc('sw-customer.card.buttonImitateCustomer') }} </template> </sw-button> {% endblock %} </template> {% endblock %} {% block sw_customer_card_rows %} <template #grid> <sw-container rows="auto auto"> {% block sw_customer_card_row_primary %} <sw-card-section divider="bottom"> {% block sw_customer_card_metadata_container %} <sw-container columns="80px 1fr max-content" gap="0px 30px" > {% block sw_customer_card_avatar %} <sw-avatar size="80px" :source-context="customer" :name="customer.name" /> {% endblock %} {% block sw_customer_card_metadata %} <div class="sw-customer-card__metadata"> {% block sw_customer_card_metadata_customer_name %} {% block sw_custsomer_card_metadata_customer_name_label %} <template v-if="!editMode"> <div v-if="customer" class="sw-customer-card__metadata-customer-name" > {{ fullName }} <sw-label v-if="customer.guest" appearance="pill" size="small" class="sw-customer-card__metadata-customer-guest-label" > {{ $tc('sw-customer.card.labelGuest') }} </sw-label> </div> </template> {% endblock %} {% block sw_customer_card_metadata_customer_name_editor %} <div v-else> <sw-container columns="1fr 1fr" gap="10px" > {% block sw_customer_card_account_type_field %} <sw-single-select v-model:value="customer.accountType" name="sw-field--customer-accountType" class="sw-customer-card__account-type-select" :label="$tc('sw-customer.customerType.labelAccountType')" :placeholder="$tc('sw-customer.customerType.placeholderAccountType')" :options="accountTypeOptions" /> {% endblock %} {% block sw_customer_card_metadata_customer_name_editor_salutation %} <sw-entity-single-select v-model:value="customer.salutationId" name="sw-field--customer-salutationId" class="sw-customer-card__salutation-select" entity="salutation" label-property="displayName" :label="$tc('sw-customer.card.labelSalutation')" :criteria="salutationCriteria" /> {% endblock %} {% block sw_customer_card_metadata_customer_name_editor_title %} <sw-text-field v-model:value="customer.title" name="sw-field--customer-title" :label="$tc('sw-customer.card.labelTitle')" :placeholder="$tc('sw-customer.card.placeholderTitle')" /> {% endblock %} </sw-container> <sw-container columns="1fr 1fr" gap="10px" > {% block sw_customer_card_metadata_customer_name_editor_name %} <sw-text-field v-model:value="customer.name" name="sw-field--customer-name" :label="$tc('sw-customer.card.labelName')" validation="required" required :error="customerNameError" :placeholder="$tc('sw-customer.card.placeholderName')" /> {% endblock %} {% block sw_customer_card_metadata_customer_name_editor_company %} <sw-text-field v-model:value="customer.company" name="sw-field--customer-company" :required="isBusinessAccountType" :error="customerCompanyError" :label="$tc('sw-customer.card.labelCompany')" :placeholder="$tc('sw-customer.card.placeholderCompany')" /> {% endblock %} </sw-container> <sw-container columns="1fr 1fr" gap="10px" > {% block sw_customer_base_form_phone_number_editor %} <sw-text-field v-model:value="customer.phoneNumber" name="sw-field--customer-phoneNumber" :label="$tc('sw-customer.card.labelPhoneNumber')" :placeholder="$tc('sw-customer.card.placeholderPhoneNumber')" :error="customerPhoneNumberError" /> {% endblock %} {% block sw_customer_card_vat_ids %} <sw-text-field v-if="editMode && isBusinessAccountType" v-model:value="customer.vatIds[0]" name="vatId" :label="$tc('sw-customer.card.labelVatId')" :placeholder="$tc('sw-customer.card.placeholderVatId')" :error="customerVatIdsError" /> {% endblock %} </sw-container> </div> {% endblock %} {% endblock %} {% block sw_customer_card_metadata_customer_email %} {% block sw_customer_card_metadata_customer_email_label %} <div v-if="customer.email && !editMode" class="sw-customer-card__metadata-item " > <a class="sw-customer-card-email-link" :href="getMailTo(customer.email)" >{{ emailIdnFilter(customer.email) }}</a> </div> {% endblock %} {% block sw_customer_card_metadata_customer_email_editor %} <sw-email-field v-else v-model:value="customer.email" name="sw-field--customer-email" validation="required" required :label="$tc('sw-customer.card.labelEmail')" :placeholder="$tc('sw-customer.card.placeholderEmail')" :error="customerEmailError" /> {% endblock %} {% endblock %} {% block sw_customer_card_password %} <sw-password-field v-if="editMode" v-model:value="customer.passwordNew" name="sw-field--customer-passwordNew" autocomplete="new-password" :disabled="customer.guest" :label="$tc('sw-profile.index.labelNewPassword')" :placeholder="$tc('sw-customer.card.placeholderNewPassword')" :error="customerPasswordError" /> {% endblock %} {% block sw_customer_card_password_confirm %} <sw-password-field v-if="editMode" v-model:value="customer.passwordConfirm" name="sw-field--customer-passwordConfirm" autocomplete="new-password" :disabled="customer.guest" :label="$tc('sw-profile.index.labelNewPasswordConfirm')" :placeholder="$tc('sw-customer.card.placeholderNewPasswordConfirm')" :error="customerPasswordConfirmError" /> {% endblock %} {% block sw_customer_card_metadata_customer_tag %} <sw-entity-tag-select v-model:entityCollection="customer.tags" name="sw-field--customer-tags" :label="editMode ? $tc('sw-customer.baseForm.labelTags') : ''" class="sw-customer-card__tag-select" :disabled="!editMode" :size="editMode ? 'default' : 'medium'" /> {% endblock %} {% block sw_customer_card_metadata_additional %} <slot name="metadata-additional"> {% block sw_customer_card_slot_metadata_additional %}{% endblock %} </slot> {% endblock %} {% block sw_customer_card_actions %} <div v-if="hasActionSlot" class="sw-customer-card__actions" > <slot name="actions"> {% block sw_customer_card_slot_actions %}{% endblock %} </slot> </div> {% endblock %} </div> {% endblock %} </sw-container> {% endblock %} </sw-card-section> {% endblock %} {% block sw_customer_card_row_secondary %} <sw-card-section secondary slim > <slot name="default"> {% block sw_customer_card_slot_default %}{% endblock %} </slot> </sw-card-section> {% endblock %} </sw-container> </template> {% endblock %} </sw-card> {% endblock %}`,{Mixin:r,Defaults:c}=Cicada,{mapPropertyErrors:d}=Cicada.Component.getComponentHelper(),{Criteria:a}=Cicada.Data,b={template:i,compatConfig:Cicada.compatConfig,inject:["acl","contextStoreService","repositoryFactory"],mixins:[r.getByName("notification"),r.getByName("salutation")],props:{customer:{type:Object,required:!0},title:{type:String,required:!0},editMode:{type:Boolean,required:!1,default:!1},isLoading:{type:Boolean,required:!1,default:!1}},data(){return{showImitateCustomerModal:!1}},computed:{hasActionSlot(){var e;return!!((e=this.$slots.actions)!=null&&e[0])},hasAdditionalDataSlot(){var e;return!!((e=this.$slots["data-additional"])!=null&&e[0])},hasSummarySlot(){var e;return!!((e=this.$slots.summary)!=null&&e[0])},moduleColor(){return this.$route.meta.$module?this.$route.meta.$module.color:""},fullName(){const e={name:this.salutation(this.customer),company:this.customer.company};return Object.values(e).filter(t=>t!==null).join(" - ").trim()},salutationCriteria(){const e=new a(1,25);return e.addFilter(a.not("or",[a.equals("id",c.defaultSalutationId)])),e},...d("customer",[...l["sw.customer.detail.base"].customer]),accountTypeOptions(){return[{value:o.ACCOUNT_TYPE_PRIVATE,label:this.$tc("sw-customer.customerType.labelPrivate")},{value:o.ACCOUNT_TYPE_BUSINESS,label:this.$tc("sw-customer.customerType.labelBusiness")}]},isBusinessAccountType(){var e;return((e=this.customer)==null?void 0:e.accountType)===o.ACCOUNT_TYPE_BUSINESS},canUseCustomerImitation(){var e;return this.customer.guest||this.customer.boundSalesChannel&&(this.customer.boundSalesChannel.typeId!==c.storefrontSalesChannelTypeId||!((e=this.customer.boundSalesChannel.domains)!=null&&e.length))?!1:this.acl.can("api_proxy_imitate-customer")},hasSingleBoundSalesChannelUrl(){var e,t;return((t=(e=this.customer.boundSalesChannel)==null?void 0:e.domains)==null?void 0:t.length)===1},currentUser(){return Cicada.State.get("session").currentUser},emailIdnFilter(){return Cicada.Filter.getByName("decode-idn-email")}},watch:{"customer.accountType"(e){e===o.ACCOUNT_TYPE_BUSINESS||!this.customerCompanyError||Cicada.State.dispatch("error/removeApiError",{expression:`customer.${this.customer.id}.company`})}},methods:{getMailTo(e){return`mailto:${e}`},async onImitateCustomer(){if(this.hasSingleBoundSalesChannelUrl){this.contextStoreService.generateImitateCustomerToken(this.customer.id,this.customer.boundSalesChannel.id).then(e=>{var s;const t=m.handleResponse(e);this.contextStoreService.redirectToSalesChannelUrl(this.customer.boundSalesChannel.domains.first().url,t.token,this.customer.id,(s=this.currentUser)==null?void 0:s.id)}).catch(()=>{this.createNotificationError({message:this.$tc("sw-customer.detail.notificationImitateCustomerErrorMessage")})});return}this.showImitateCustomerModal=!0},onCloseImitateCustomerModal(){this.showImitateCustomerModal=!1}}};export{b as default};
//# sourceMappingURL=index-C-FTTqPs.js.map
