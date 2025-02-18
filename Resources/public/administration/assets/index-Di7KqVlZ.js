const o=`{% block sw_order_address_modal %} <sw-modal :title="$tc('sw-order.addressSelection.modalTitleEditAddress')" :is-loading="isLoading" @modal-close="onClose" > {% block sw_order_address_modal_content %} <sw-tabs class="sw-order-address-modal" position-identifier="sw-order-address-modal" default-item="edit" @new-item-active="onNewActiveItem" > <template #default="{ active }"> {% block sw_order_address_modal_tabs %} {% block sw_order_address_modal_tab_edit_address %} <sw-tabs-item name="edit" :active-tab="active" > {{ $tc('sw-order.addressSelection.headlineTabEditAddress') }} </sw-tabs-item> {% endblock %} {% block sw_order_address_modal_tab_select_address %} <sw-tabs-item name="addresses" :active-tab="active" > {{ $tc('sw-order.addressSelection.headlineTabSelectAddress') }} </sw-tabs-item> {% endblock %} {% endblock %} </template> <template #content="{ active }"> {% block sw_order_address_modal_tabs_content %} <div v-if="active==='edit'"> {% block sw_order_address_modal_tabs_content_edit_address %} <sw-customer-address-form :address="address" :customer="orderCustomer" :countries="countries" /> <sw-custom-field-set-renderer :entity="address" variant="tabs" :sets="addressCustomFieldSets" /> {% endblock %} </div> <div v-if="active==='addresses'"> {% block sw_order_address_modal_tabs_content_select_address %} <sw-button v-for="address in availableAddresses" :key="address.id" block :class="addressButtonClasses(address.id)" @click="onExistingAddressSelected(address)" > {{ address.company }} <br> {{ salutationFilter(address) }}<br> {{ address.street }} <br> {{ address.zipcode }} {{ address.city }}<br> {{ placeholder(address.country, 'name') }}<br> </sw-button> {% endblock %} </div> {% endblock %} </template> </sw-tabs> {% endblock %} {% block sw_order_address_modal_actions %} <template #modal-footer> {% block sw_order_address_modal_action_close %} <sw-button size="small" @click="onClose" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_order_address_modal_actions_apply %} <sw-button variant="primary" size="small" @click="onSave" > {{ $tc('global.default.apply') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %}`,{Mixin:r}=Shopware,{Criteria:s}=Shopware.Data,i={template:o,inject:["repositoryFactory"],emits:["reset","address-select","save"],mixins:[r.getByName("notification"),r.getByName("placeholder")],props:{address:{type:Object,required:!0,default:()=>{}},countries:{type:Array,required:!0,default(){return[]}},order:{type:Object,required:!0,default:()=>{}},versionContext:{type:Object,required:!0,default:()=>{}}},data(){return{availableAddresses:[],selectedAddressId:0,isLoading:!1,addressCustomFieldSets:[]}},computed:{customerCriteria(){const e=new s(1,1);return e.setIds([this.orderCustomer.customerId]),e.addAssociation("addresses"),e},customFieldSetCriteria(){const e=new s(1,null);return e.addFilter(s.equals("relations.entityName","customer_address")),e.addAssociation("customFields"),e},customerRepository(){return this.repositoryFactory.create("customer")},orderRepository(){return this.repositoryFactory.create("order")},orderCustomer(){return this.order.orderCustomer},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},salutationFilter(){return Shopware.Filter.getByName("salutation")}},created(){this.createdComponent()},methods:{createdComponent(){this.orderCustomer&&this.orderCustomer.customerId&&this.getCustomerInfo(),this.getCustomFieldSetData()},getCustomerInfo(){this.isLoading=!0,this.customerRepository.search(this.customerCriteria).then(e=>(this.availableAddresses=e[0].addresses,Shopware.Store.get("error").resetApiErrors())).finally(()=>{this.isLoading=!1})},onNewActiveItem(){this.selectedAddressId=0},addressButtonClasses(e){return`sw-order-address-modal__entry${e===this.selectedAddressId?" sw-order-address-modal__entry__selected":""}`},onExistingAddressSelected(e){this.selectedAddressId=e.id},onClose(){this.$emit("reset")},onSave(){this.isLoading=!0;const e=this.order.addresses[0].country.shippingAvailable;if(!e&&typeof e=="boolean"){this.createNotificationError({message:this.$tc("sw-order.detail.messageShippingNotAvailable")}),this.isLoading=!1;return}new Promise(t=>{if(this.selectedAddressId!==0){const d=this.availableAddresses.find(a=>a.id===this.selectedAddressId);this.$emit("address-select",d),t()}else this.orderRepository.save(this.order,this.versionContext).then(()=>{this.$emit("save")}).catch(()=>{this.createNotificationError({message:this.$tc("sw-order.detail.messageSaveError")})}).finally(()=>{t()})}).finally(()=>{this.isLoading=!1})},getCustomFieldSetData(){this.customFieldSetRepository.search(this.customFieldSetCriteria).then(e=>{this.addressCustomFieldSets=e})}}};export{i as default};
