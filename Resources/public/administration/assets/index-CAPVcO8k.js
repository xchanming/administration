const h=`{% block sw_order_customer_grid %} <sw-card class="sw-order-customer-grid" position-identifier="sw-order-customer-grid" :is-loading="isSwitchingCustomer" > <template #toolbar> {% block sw_order_customer_grid_toolbar %} <div class="sw-order-customer-grid__toolbar"> {% block sw_order_customer_grid_search_input %} <sw-card-filter ref="customerFilter" @sw-card-filter-term-change="onSearch" /> {% endblock %} {% block sw_order_customer_grid_add_new_customer %} <sw-button class="sw-order-customer-grid__add-customer" variant="ghost" size="small" @click="onShowNewCustomerModal" > {{ $tc('sw-order.initialModal.customerGrid.buttonAddNewCustomer') }} </sw-button> {% endblock %} </div> {% endblock %} </template> <template #grid> <div class="sw-order-customer-grid__container" > {% block sw_order_customer_grid_content %} <sw-entity-listing class="sw-order-customer-grid__content" :show-selection="false" :show-settings="false" :items="customers" :columns="customerColumns" :repository="customerRepository" :is-loading="isLoading" :is-record-disabled="customerUnavailable" > {% block sw_order_customer_grid_content_column_select %} <template #column-select="{ item }"> <div class="sw-field__radio-input"> <input type="radio" :checked="isChecked(item)" :disabled="customerUnavailable(item)" @change="onCheckCustomer(item)" > <div class="sw-field__radio-state"></div> </div> </template> {% endblock %} {% block sw_order_customer_grid_content_grid_column_name %} <template #column-name="{ item }"> <router-link v-if="!customerUnavailable(item)" :to="{ name: 'sw.customer.detail', params: { id: item.id } }" > {{ item.name }} </router-link> <div v-else v-tooltip.top="{ message: $tc('sw-order.initialModal.tooltip.customerUnavailable'), disabled: !customerUnavailable(item), }" > {{ item.name }} </div> </template> {% endblock %} <template #column-salesChannel="{ item }"> {{ item.boundSalesChannelId ? item?.boundSalesChannel.translated.name : $tc('sw-order.initialModal.customerGrid.labelAllChannel') }} </template> {% block sw_settings_product_feature_set_list_grid_columns_actions %} <template #actions="{ item }"> <sw-context-menu-item target="_blank" rel="noopener" :router-link="{ name: 'sw.customer.detail', params: { id: item.id } }" > {{ $tc('sw-order.initialModal.customerGrid.contextOpenButton') }} </sw-context-menu-item> </template> {% endblock %} </sw-entity-listing> {% endblock %} {% block sw_order_customer_grid_empty_state %} <sw-empty-state v-if="showEmptyState" class="sw-order-customer-grid__empty-state" :show-description="false" :title="emptyTitle" > {% block sw_order_customer_grid_empty_state_icon %} <template #icon> <img :src="assetFilter('/administration/static/img/empty-states/customer-empty-state.svg')" :alt="$tc('sw-customer.list.messageEmpty')" > </template> {% endblock %} </sw-empty-state> {% endblock %} </div> {% block sw_order_customer_grid_new_customer_modal %} <sw-order-new-customer-modal v-if="showNewCustomerModal" @on-select-existing-customer="onAddNewCustomer" @close="showNewCustomerModal = false" /> {% endblock %} {% block sw_order_customer_grid_sales_channel_select_modal %} <sw-modal v-if="showSalesChannelSelectModal" class="sw-order-customer-grid__sales-channel-selection-modal" :title="$tc('sw-order.initialModal.customerGrid.titleSelectSalesChannel')" @modal-close="onCloseSalesChannelSelectModal" > <template #default> {% block sw_order_customer_grid_sales_channel_description %} <p class="sw-order-customer-grid__sales-channel-selection--description"> {{ $tc('sw-order.initialModal.customerGrid.descriptionSelectSalesChannel') }} </p> {% endblock %} {% block sw_order_customer_grid_sales_channel_select %} <sw-entity-single-select class="sw-order-customer-grid__sales-channel-selection" entity="sales_channel" :criteria="salesChannelCriteria" :label="$tc('sw-order.initialModal.customerGrid.labelSalesChannel')" :placeholder="$tc('sw-order.initialModal.customerGrid.placeholderSalesChannel')" :value="customer.salesChannelId" @update:value="onSalesChannelChange" /> {% endblock %} {% block sw_order_customer_grid_sales_channel_notification_alert %} <sw-alert class="sw-order-customer-grid__sales-channel-selection--notification-alert" variant="warning" :show-icon="false" > {{ $tc('sw-order.initialModal.customerGrid.alertSelectSalesChannel') }} </sw-alert> {% endblock %} </template> <template #modal-footer> {% block sw_order_customer_grid_sales_channel_action_close %} <sw-button size="small" @click="onCloseSalesChannelSelectModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_order_customer_grid_sales_channel_action_select %} <sw-button size="small" variant="primary" :is-loading="isLoading" :disabled="isSelectSalesChannelDisabled" @click="onSelectSalesChannel" > {{ $tc('sw-order.initialModal.customerGrid.buttonSelectSalesChannel') }} </sw-button> {% endblock %} </template> </sw-modal> {% endblock %} {% block sw_order_customer_grid_customer_changes_modal %} <sw-modal v-if="showCustomerChangesModal" class="sw-order-customer-grid__customer-changes-modal" :title="$tc('sw-order.initialModal.customerGrid.titleCustomerChanges')" @modal-close="onCloseSalesChannelSelectModal" > <template #default> {% block sw_order_customer_grid_customer_changes_modal_description %} <p class="sw-order-customer-grid__customer-changes--description"> {{ $tc('sw-order.initialModal.customerGrid.descriptionCustomerChanges') }} </p> {% endblock %} </template> <template #modal-footer> {% block sw_order_customer_grid_customer_changes_modal_action_close %} <sw-button size="small" @click="onCloseCustomerChangesModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_order_customer_grid_customer_changes_modal_action_changes %} <sw-button size="small" variant="primary" :is-loading="isLoading" @click="onChangeCustomer" > {{ $tc('sw-order.initialModal.customerGrid.buttonChangeCustomer') }} </sw-button> {% endblock %} </template> </sw-modal> {% endblock %} </template> </sw-card> {% endblock %}`,{Component:C,State:s,Mixin:d,Context:m}=Cicada,{Criteria:a}=Cicada.Data,_=C.wrapComponentConfig({template:h,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","feature"],mixins:[d.getByName("listing"),d.getByName("notification")],data(){return{customers:null,isLoading:!1,isSwitchingCustomer:!1,showNewCustomerModal:!1,customer:null,customerDraft:null,disableRouteParams:!0,showSalesChannelSelectModal:!1,showCustomerChangesModal:!1,salesChannelIds:[]}},computed:{customerData(){return s.get("swOrder").customer},customerRepository(){return this.repositoryFactory.create("customer")},customerCriteria(){const e=new a(this.page,this.limit);return e.addAssociation("salesChannel"),e.addAssociation("boundSalesChannel"),e.addSorting(a.sort("createdAt","DESC")),this.term&&e.setTerm(this.term),e},customerCriterion(){const e=new a(1,25);return e.addAssociation("addresses").addAssociation("group").addAssociation("salutation").addAssociation("salesChannel.languages").addAssociation("lastPaymentMethod").addAssociation("defaultBillingAddress.country").addAssociation("defaultBillingAddress.countryState").addAssociation("defaultBillingAddress.salutation").addAssociation("defaultShippingAddress.country").addAssociation("defaultShippingAddress.countryState").addAssociation("defaultShippingAddress.salutation").addAssociation("tags").addAssociation("boundSalesChannel"),e},customerColumns(){return[{property:"select",label:""},{property:"name",dataIndex:"name",label:this.$tc("sw-order.initialModal.customerGrid.columnCustomerName"),primary:!0},{property:"customerNumber",label:this.$tc("sw-order.initialModal.customerGrid.columnCustomerNumber")},{property:"salesChannel",label:this.$tc("sw-order.initialModal.customerGrid.columnSalesChannel")},{property:"email",label:this.$tc("sw-order.initialModal.customerGrid.columnEmailAddress")}]},showEmptyState(){return!this.total&&!this.isLoading},emptyTitle(){return this.term?this.$tc("sw-order.initialModal.customerGrid.textEmptySearch",0,{name:this.term}):this.$tc("sw-customer.list.messageEmpty")},cart(){return s.get("swOrder").cart},assetFilter(){return Cicada.Filter.getByName("asset")},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},salesChannelCriteria(){var t;const e=new a;return e.addFilter(a.equals("active",!0)),(t=this.customer)!=null&&t.boundSalesChannelId&&e.addFilter(a.equals("id",this.customer.boundSalesChannelId)),e},isSelectSalesChannelDisabled(){var e;return(e=this.customer)!=null&&e.salesChannelId?!this.salesChannelIds.includes(this.customer.salesChannelId):!0}},mounted(){this.mountedComponent()},methods:{async mountedComponent(){var e,t;this.salesChannelIds=await this.loadSalesChannel(),this.customerData&&(this.$refs.customerFilter.term=(e=this.customerData)==null?void 0:e.customerNumber,this.onSearch((t=this.customerData)==null?void 0:t.customerNumber),this.onCheckCustomer(this.customerData))},getList(){return this.isLoading=!0,this.customerRepository.search(this.customerCriteria).then(e=>{this.customers=e,this.total=e.total}).finally(()=>{this.isLoading=!1})},onShowNewCustomerModal(){this.showNewCustomerModal=!0},isChecked(e){var t;return e.id===((t=this.customer)==null?void 0:t.id)},async onCheckCustomer(e){var o,r,i,l,n,c;this.customer&&(this.customerDraft=this.customer),this.customer=await this.customerRepository.get(e.id,m.api,this.customerCriterion);const t=(((r=(o=this.customer)==null?void 0:o.salesChannel)==null?void 0:r.languages)||[]).some(u=>u.id===m.api.systemLanguageId);if(!t&&((l=(i=this.customer)==null?void 0:i.salesChannel)!=null&&l.languageId)&&s.commit("context/setLanguageId",this.customer.salesChannel.languageId),t&&!s.getters["context/isSystemDefaultLanguage"]&&s.commit("context/resetLanguageToDefault"),!((n=this.customer)!=null&&n.boundSalesChannelId)){this.showSalesChannelSelectModal=!0;return}if(this.customerDraft&&((c=this.customer)!=null&&c.boundSalesChannelId)&&this.customerDraft.salesChannelId!==this.customer.boundSalesChannelId){this.showCustomerChangesModal=!0;return}this.handleSelectCustomer()},createCart(e){return s.dispatch("swOrder/createCart",{salesChannelId:e})},setCustomer(e){s.dispatch("swOrder/selectExistingCustomer",{customer:e})},async handleSelectCustomer(){var e;this.isSwitchingCustomer=!0;try{this.cart.token||await this.createCart(((e=this.customer)==null?void 0:e.salesChannelId)??""),this.setCustomer(this.customer),await this.updateCustomerContext()}catch{this.createNotificationError({message:this.$tc("sw-order.create.messageSwitchCustomerError")})}finally{this.isSwitchingCustomer=!1}},onAddNewCustomer(e){e&&(this.getList(),this.page=1,this.term="")},updateCustomerContext(){var e,t;return s.dispatch("swOrder/updateCustomerContext",{customerId:(e=this.customer)==null?void 0:e.id,salesChannelId:(t=this.customer)==null?void 0:t.salesChannelId,contextToken:this.cart.token}).then(o=>{o.status===200&&this.getCart()})},getCart(){var e;return s.dispatch("swOrder/getCart",{salesChannelId:(e=this.customer)==null?void 0:e.salesChannelId,contextToken:this.cart.token})},async loadSalesChannel(){const{data:e}=await this.salesChannelRepository.searchIds(this.salesChannelCriteria);return e},onSalesChannelChange(e){this.customer&&(this.customer.salesChannelId=e)},onCloseSalesChannelSelectModal(){this.customer=this.customerDraft,this.showSalesChannelSelectModal=!1},async onSelectSalesChannel(){this.isLoading=!0;try{await this.handleSelectCustomer()}finally{this.isLoading=!1,this.showSalesChannelSelectModal=!1}},customerUnavailable(e){return this.salesChannelIds.length?!!(e!=null&&e.boundSalesChannelId)&&!this.salesChannelIds.includes(e.boundSalesChannelId):!0},async onChangeCustomer(){this.isLoading=!0;try{await this.handleSelectCustomer()}finally{this.isLoading=!1,this.showCustomerChangesModal=!1}},onCloseCustomerChangesModal(){this.customer=this.customerDraft,this.showCustomerChangesModal=!1}}});export{_ as default};
//# sourceMappingURL=index-CAPVcO8k.js.map
