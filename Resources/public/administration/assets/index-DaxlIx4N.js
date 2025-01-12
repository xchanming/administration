const t=`{% block sw_order_create_details_header %} <div class="sw-order-create-details-header"> {% block sw_order_create_details_new_customer_modal %} <sw-order-new-customer-modal v-if="showNewCustomerModal" @close="onCloseNewCustomerModal" @on-select-existing-customer="onSelectExistingCustomer" /> {% endblock %} {% block sw_order_create_details_header_profile %} <sw-container class="sw-order-user-card__container" columns="80px 1fr max-content" gap="0 24px" > {% block sw_order_create_details_header_profile_avatar %} <sw-avatar v-if="customer" size="80px" :color="$route.meta.$module.color" :name="customer.name" /> <sw-avatar v-else size="80px" color="#f9fafb" /> {% endblock %} {% block sw_order_create_details_header_profile_searching %} <div class="sw-order-user-card__metadata"> <div class="sw-order-user-card__metadata-user-name"> {{ $tc('sw-order.createBase.detailsHeader.textCustomer') }} </div> <sw-container columns="1fr 128px" gap="0 8px" > {% block sw_order_create_search_customer %} <sw-entity-single-select size="small" entity="customer" :criteria="customerCriteria" label-property="name" :value="customerId" :placeholder="$tc('sw-order.createBase.detailsHeader.placeholder')" show-clearable-button @update:value="onSelectExistingCustomer" > {% block sw_order_create_search_customer_slot_selection_label_property %} <template #selection-label-property="{ item: customer, getKey }"> {{ getKey(customer, 'name') || getKey(customer, \`translated.name\`) }} </template> {% endblock %} {% block sw_order_create_search_customer_slot_result_item %} <template #result-item="{ item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }"> <sw-select-result :selected="isSelected(item)" v-bind="{ item, index }" class="sw-order-create-details-header__customer-result" @item-select="setValue" > {% block sw_order_create_search_customer_slot_result_item_content_container %} <div class="sw-order-create-details-header__customer-result-item has-many-childrens"> <div> {% block sw_order_create_search_customer_slot_result_item_name %} <sw-highlight-text v-if="highlightSearchTerm" :text="getKey(item, 'name') || getKey(item, \`translated.name\`)" :search-term="searchTerm" /> {% endblock %} </div> {% block sw_order_create_search_customer_slot_result_item_number %} <sw-highlight-text v-if="highlightSearchTerm" :text="getKey(item, 'customerNumber') || getKey(item, \`translated.customerNumber\`)" :search-term="searchTerm" class="text-truncate" /> {% endblock %} </div> <div v-if="getKey(item, 'company') || getKey(item, \`translated.company\`)" class="sw-order-create-details-header__customer-result-item" > {% block sw_order_create_search_customer_slot_result_item_company %} <sw-highlight-text v-if="highlightSearchTerm" :text="getKey(item, 'company') || getKey(item, \`translated.company\`)" :search-term="searchTerm" /> {% endblock %} </div> <div class="sw-order-create-details-header__customer-result-item text-gray-500"> {% block sw_order_create_search_customer_slot_result_item_address %} {{ item.defaultBillingAddress.street }} <br> {{ item.defaultBillingAddress.zipcode }} {{ item.defaultBillingAddress.city }} <br> {{ item.defaultBillingAddress.country.name }} {% endblock %} </div> {% endblock %} </sw-select-result> </template> {% endblock %} </sw-entity-single-select> {% endblock %} <sw-button size="small" @click="onShowNewCustomerModal" > {{ $tc('sw-order.createBase.detailsHeader.buttonAddNewCustomer') }} </sw-button> </sw-container> </div> {% endblock %} {% block sw_order_create_details_header_profile_summary %} <div class="sw-order-user-card__info-summary"> <div class="sw-order-user-card__metadata-price"> {{ currencyFilter(cartPrice ? cartPrice.totalPrice : 0, currency.isoCode) }} </div> <div class="sw-order-user-card__metadata-item"> {{ orderDate }} </div> </div> {% endblock %} <slot></slot> </sw-container> {% endblock %} </div> {% endblock %}`,{Criteria:r}=Cicada.Data,s={template:t,compatConfig:Cicada.compatConfig,emits:["on-select-existing-customer"],props:{customer:{type:Object},orderDate:{type:String,required:!0},cartPrice:{type:Object},currency:{type:Object}},data(){return{showNewCustomerModal:!1}},computed:{customerId:{get(){return this.customer?this.customer.id:""},set(e){this.customer&&(this.customer.id=e)}},customerCriteria(){const e=new r(1,25);return e.addAssociation("defaultBillingAddress.country"),e},currencyFilter(){return Cicada.Filter.getByName("currency")}},methods:{onSelectExistingCustomer(e){e&&this.$emit("on-select-existing-customer",e)},onShowNewCustomerModal(){this.showNewCustomerModal=!0},onCloseNewCustomerModal(){this.showNewCustomerModal=!1}}};export{s as default};
//# sourceMappingURL=index-DaxlIx4N.js.map
