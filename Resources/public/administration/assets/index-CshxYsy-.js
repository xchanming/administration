import{C as i}from"./sw-customer.constant-v-M3S1F-.js";const n=`{% block sw_customer_create %} <sw-page class="sw-customer-create"> {% block sw_customer_create_header %} <template #smart-bar-header> <h2>{{ salutationFilter(customer, $tc('sw-customer.general.newCustomer')) }}</h2> </template> {% endblock %} {% block sw_customer_create_language_switch %} <template #language-switch> <sw-language-switch v-tooltip="{ message: $tc('sw-customer.general.tooltipLanguageSwitch') }" disabled /> </template> {% endblock %} {% block sw_customer_create_actions %} <template #smart-bar-actions> <sw-button-process class="sw-customer-create__save-action" :is-loading="isLoading" :disabled="isLoading" :process-success="isSaveSuccessful" variant="primary" @update:process-success="saveFinish" @click.prevent="onSave" > {{ $tc('sw-customer.detail.buttonSave') }} </sw-button-process> </template> {% endblock %} {% block sw_customer_create_content %} <template #content> <sw-card-view> {% block sw_customer_create_base_form %} <sw-card :title="$tc('sw-customer.detailBase.labelAccountCard')" position-identifier="sw-customer-create-base-form" > <sw-customer-base-form v-if="customer" :is-loading="isLoading" :customer="customer" @sales-channel-change="onChangeSalesChannel" /> </sw-card> {% endblock %} {% block sw_customer_create_adress_form %} <sw-card :title="$tc('sw-customer.detailBase.labelAddressesCard')" position-identifier="sw-customer-create-address-form" > <sw-customer-address-form v-if="customer" v-bind="{ customer, address }" /> </sw-card> {% endblock %} </sw-card-view> </template> {% endblock %} </sw-page> {% endblock %}`,{mapPropertyErrors:u}=Shopware.Component.getComponentHelper(),{ShopwareError:d}=Shopware.Classes,{Mixin:l}=Shopware,{Criteria:o}=Shopware.Data,h={template:n,inject:["repositoryFactory","numberRangeService","systemConfigApiService","customerValidationService"],mixins:[l.getByName("notification")],data(){return{customer:null,address:null,customerNumberPreview:"",isSaveSuccessful:!1,isLoading:!1}},computed:{...u("address",["company"]),customerRepository(){return this.repositoryFactory.create("customer")},validCompanyField(){var e;return this.customer.accountType===i.ACCOUNT_TYPE_BUSINESS?(e=this.address.company)==null?void 0:e.trim().length:!0},languageRepository(){return this.repositoryFactory.create("language")},languageCriteria(){var s;const e=new o;return e.setLimit(1),(s=this.customer)!=null&&s.salesChannelId&&e.addFilter(o.equals("salesChannelDefaultAssignments.id",this.customer.salesChannelId)),e},languageId(){var e;return this.loadLanguage((e=this.customer)==null?void 0:e.salesChannelId)},salutationRepository(){return this.repositoryFactory.create("salutation")},salutationCriteria(){const e=new o(1,1);return e.addFilter(o.equals("salutationKey","not_specified")),e},salutationFilter(){return Shopware.Filter.getByName("salutation")}},watch:{"customer.salesChannelId"(e){this.systemConfigApiService.getValues("core.systemWideLoginRegistration").then(s=>{s["core.systemWideLoginRegistration.isCustomerBoundToSalesChannel"]&&(this.customer.boundSalesChannelId=e)})},"customer.accountType"(e){e===i.ACCOUNT_TYPE_BUSINESS||!this.addressCompanyError||Shopware.Store.get("error").removeApiError(`customer_address.${this.address.id}.company`)}},created(){this.createdComponent()},methods:{async createdComponent(){const e=await this.getDefaultSalutation();Shopware.Store.get("context").resetLanguageToDefault(),this.customer=this.customerRepository.create();const s=this.repositoryFactory.create(this.customer.addresses.entity,this.customer.addresses.source);this.customer.accountType=i.ACCOUNT_TYPE_PRIVATE,this.address=s.create(),this.customer.addresses.add(this.address),this.customer.defaultBillingAddressId=this.address.id,this.customer.defaultShippingAddressId=this.address.id,this.customer.password="",this.customer.vatIds=[],this.customer.salutationId=e,this.address.salutationId=e},saveFinish(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.customer.detail",params:{id:this.customer.id}})},validateEmail(){const{id:e,email:s,boundSalesChannelId:t}=this.customer;return s?this.customerValidationService.checkCustomerEmail({id:e,email:s,boundSalesChannelId:t}).then(r=>r).catch(r=>{Shopware.Store.get("error").addApiError({expression:`customer.${this.customer.id}.email`,error:new d(r.response.data.errors[0])})}):Promise.resolve({isValid:!0})},async onSave(){this.isLoading=!0;let e=!1;const s=await this.validateEmail();(!s||!s.isValid)&&(e=!0),this.isSaveSuccessful=!1;let t=Promise.resolve();if(this.customerNumberPreview===this.customer.customerNumber&&(t=this.numberRangeService.reserve("customer",this.customer.salesChannelId).then(a=>{this.customerNumberPreview="reserved",this.customer.customerNumber=a.number})),this.validCompanyField||(this.createErrorMessageForCompanyField(),e=!0),e)return this.createNotificationError({message:this.$tc("sw-customer.detail.messageSaveError")}),this.isLoading=!1,!1;const r=await this.languageId,c={...Shopware.Context.api,languageId:r};return t.then(()=>this.customerRepository.save(this.customer,c).then(a=>(this.isLoading=!1,this.isSaveSuccessful=!0,a)).catch(a=>{throw this.createNotificationError({message:this.$tc("sw-customer.detail.messageSaveError")}),this.isLoading=!1,a}))},onChangeSalesChannel(e){this.customer.salesChannelId=e,this.numberRangeService.reserve("customer",e,!0).then(s=>{this.customerNumberPreview=s.number,this.customer.customerNumber=s.number})},createErrorMessageForCompanyField(){this.isLoading=!1,Shopware.Store.get("error").addApiError({expression:`customer_address.${this.address.id}.company`,error:new Shopware.Classes.ShopwareError({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})}),this.createNotificationError({message:this.$tc("sw-customer.error.COMPANY_IS_REQUIRED")})},async loadLanguage(e){const s=Shopware.Context.api.languageId;if(!e)return s;const t=await this.languageRepository.searchIds(this.languageCriteria);return t!=null&&t.data?t.data[0]:s},async getDefaultSalutation(){var s;return(s=(await this.salutationRepository.searchIds(this.salutationCriteria)).data)==null?void 0:s[0]}}};export{h as default};
