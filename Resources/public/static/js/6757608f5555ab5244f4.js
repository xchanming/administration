(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[52103],{206617:function(){},152103:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var a=t(456737);t(325222);let{Mixin:o}=Cicada,{Criteria:s}=Cicada.Data;var i={template:'\n\n{% block sw_customer_imitate_customer_modal %}\n<sw-modal\n    :title="modalTitle"\n    class="sw-customer-imitate-customer-modal"\n    @modal-close="onCancel"\n>\n    \n    {% block sw_customer_imitate_customer_modal_alert %}\n    <sw-alert>\n        <i18n-t\n            keypath="sw-customer.imitateCustomerModal.modalInfo"\n            tag="p"\n        >\n            <template #logout>\n                <b>{{ $tc(\'sw-customer.imitateCustomerModal.modalInfoLogout\') }}</b>\n            </template>\n        </i18n-t>\n    </sw-alert>\n    {% endblock %}\n\n    \n    {% block sw_customer_imitate_customer_modal_description %}\n    <div class="imitate-customer-modal-description">\n        {{ modalDescription }}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_customer_imitate_customer_modal_body %}\n    <sw-container\n        class="imitate-customer-modal-container"\n        columns="1fr"\n        gap="8px 0px"\n    >\n        \n        {% block sw_customer_imitate_customer_modal_sales_channel_domain_items %}\n        <sw-context-menu-item\n            v-for="salesChannelDomain of salesChannelDomains"\n            :key="salesChannelDomain.id"\n            target="_blank"\n            @click="onSalesChannelDomainMenuItemClick(salesChannelDomain.salesChannelId, salesChannelDomain.url)"\n        >\n\n            <div\n                class="imitate-customer-modal-item-content"\n                columns="1fr 1fr"\n                gap="10px 0px"\n            >\n                <div class="imitate-customer-modal-item-header">\n                    {{ salesChannelDomain.salesChannel.name }}\n                </div>\n                <div class="imitate-customer-modal-item-url">\n                    {{ salesChannelDomain.url }}\n                </div>\n                <sw-icon\n                    name="regular-external-link-s"\n                    size="16px"\n                />\n            </div>\n        </sw-context-menu-item>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_customer_imitate_customer_modal_footer %}\n    <template #modal-footer>\n        \n        <div>\n            \n            {% block sw_customer_imitate_customer_modal_footer_cancel %}\n            <sw-button\n                size="small"\n                @click="onCancel"\n            >\n                {{ $tc(\'sw-customer.imitateCustomerModal.labelCancel\') }}\n            </sw-button>\n            {% endblock %}\n        </div>\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","contextStoreService"],emits:["modal-close"],mixins:[o.getByName("notification")],props:{customer:{type:Object,required:!0}},data(){return{salesChannelDomains:[]}},computed:{modalTitle(){return this.$tc("sw-customer.imitateCustomerModal.modalTitle",{name:this.customer.name})},modalDescription(){return this.$tc("sw-customer.imitateCustomerModal.modalDescription",{name:this.customer.name})},salesChannelDomainRepository(){return this.repositoryFactory.create("sales_channel_domain")},currentUser(){return Cicada.State.get("session").currentUser},salesChannelDomainCriteria(){let e=new s;return e.addAssociation("salesChannel"),e.addFilter(s.equals("salesChannel.typeId",Cicada.Defaults.storefrontSalesChannelTypeId)),e.addSorting(s.sort("salesChannel.name","ASC")),e.addSorting(s.sort("languageId","DESC")),this.customer.boundSalesChannelId&&e.addFilter(s.equals("salesChannelId",this.customer.boundSalesChannelId)),e}},created(){this.createdComponent()},methods:{async createdComponent(){this.fetchSalesChannelDomains()},async onSalesChannelDomainMenuItemClick(e,n){this.contextStoreService.generateImitateCustomerToken(this.customer.id,e).then(e=>{let t=a.Z.handleResponse(e);this.contextStoreService.redirectToSalesChannelUrl(n,t.token,this.customer.id,this.currentUser?.id)}).catch(()=>{this.createNotificationError({message:this.$tc("sw-customer.detail.notificationImitateCustomerErrorMessage")})})},onCancel(){this.$emit("modal-close")},fetchSalesChannelDomains(){this.salesChannelDomainRepository.search(this.salesChannelDomainCriteria,Cicada.Context.api).then(e=>{this.salesChannelDomains=e})}}}},325222:function(e,n,t){var a=t(206617);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),t(745346).Z("3ba96774",a,!0,{})}}]);