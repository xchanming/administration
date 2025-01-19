(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[67636],{889263:function(){},967636:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}}),n(344959);var o=n(37698),s=n(539613),a=n(456737);let{Mixin:r,Defaults:c}=Cicada,{mapPropertyErrors:l}=Cicada.Component.getComponentHelper(),{Criteria:i}=Cicada.Data;var m={template:'\n{% block sw_customer_card %}\n<sw-card\n    class="sw-customer-card"\n    position-identifier="sw-customer"\n    :title="title"\n    :is-loading="isLoading"\n>\n    \n    {% block sw_customer_card_header_right %}\n    <template #header-right>\n        \n        {% block sw_customer_card_imitate_customer_modal %}\n        <sw-customer-imitate-customer-modal\n            v-if="showImitateCustomerModal"\n            :customer="customer"\n            @modal-close="onCloseImitateCustomerModal"\n        />\n        {% endblock %}\n\n        \n        {% block sw_customer_card_action_customer_impersonation %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(customer.guest ? \'sw-customer.card.tooltipImitateCustomerGuest\' : \'sw-privileges.tooltip.warning\'),\n                disabled: !customer.guest && acl.can(\'api_proxy_imitate-customer\'),\n                showOnDisabledElements: true\n            }"\n            :disabled="!canUseCustomerImitation"\n            variant="action"\n            @click="onImitateCustomer"\n        >\n            <template v-if="hasSingleBoundSalesChannelUrl">\n                {{ $tc(\'sw-customer.card.buttonImitateCustomer\') }}\n                <sw-icon\n                    name="regular-external-link-s"\n                    size="12px"\n                />\n            </template>\n            <template v-else>\n                {{ $tc(\'sw-customer.card.buttonImitateCustomer\') }}\n            </template>\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_customer_card_rows %}\n    <template #grid>\n        <sw-container rows="auto auto">\n            \n            {% block sw_customer_card_row_primary %}\n            <sw-card-section divider="bottom">\n                \n                {% block sw_customer_card_metadata_container %}\n                <sw-container\n                    columns="80px 1fr max-content"\n                    gap="0px 30px"\n                >\n                    \n                    {% block sw_customer_card_avatar %}\n                    <sw-avatar\n                        size="80px"\n                        :source-context="customer"\n                        :name="customer.name"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_customer_card_metadata %}\n                    <div class="sw-customer-card__metadata">\n                        \n                        {% block sw_customer_card_metadata_customer_name %}\n                        \n                        {% block sw_custsomer_card_metadata_customer_name_label %}\n                        <template v-if="!editMode">\n                            <div\n                                v-if="customer"\n                                class="sw-customer-card__metadata-customer-name"\n                            >\n                                {{ fullName }}\n                                <sw-label\n                                    v-if="customer.guest"\n                                    appearance="pill"\n                                    size="small"\n                                    class="sw-customer-card__metadata-customer-guest-label"\n                                >\n                                    {{ $tc(\'sw-customer.card.labelGuest\') }}\n                                </sw-label>\n                            </div>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_metadata_customer_name_editor %}\n                        <div v-else>\n                            <sw-container\n                                columns="1fr 1fr"\n                                gap="10px"\n                            >\n                                \n                                {% block sw_customer_card_account_type_field %}\n                                <sw-single-select\n                                    v-model:value="customer.accountType"\n                                    name="sw-field--customer-accountType"\n                                    class="sw-customer-card__account-type-select"\n                                    :label="$tc(\'sw-customer.customerType.labelAccountType\')"\n                                    :placeholder="$tc(\'sw-customer.customerType.placeholderAccountType\')"\n                                    :options="accountTypeOptions"\n                                />\n                                {% endblock %}\n\n                                \n                                {% block sw_customer_card_metadata_customer_name_editor_salutation %}\n                                <sw-entity-single-select\n                                    v-model:value="customer.salutationId"\n                                    name="sw-field--customer-salutationId"\n                                    class="sw-customer-card__salutation-select"\n                                    entity="salutation"\n                                    label-property="displayName"\n                                    :label="$tc(\'sw-customer.card.labelSalutation\')"\n                                    :criteria="salutationCriteria"\n                                />\n                                {% endblock %}\n\n                                \n                                {% block sw_customer_card_metadata_customer_name_editor_title %}\n                                <sw-text-field\n                                    v-model:value="customer.title"\n                                    name="sw-field--customer-title"\n                                    :label="$tc(\'sw-customer.card.labelTitle\')"\n                                    :placeholder="$tc(\'sw-customer.card.placeholderTitle\')"\n                                />\n                                {% endblock %}\n                            </sw-container>\n\n                            <sw-container\n                                columns="1fr 1fr"\n                                gap="10px"\n                            >\n                                \n                                {% block sw_customer_card_metadata_customer_name_editor_name %}\n                                <sw-text-field\n                                    v-model:value="customer.name"\n                                    name="sw-field--customer-name"\n                                    :label="$tc(\'sw-customer.card.labelName\')"\n                                    validation="required"\n                                    required\n                                    :error="customerNameError"\n                                    :placeholder="$tc(\'sw-customer.card.placeholderName\')"\n                                />\n                                {% endblock %}\n\n                                \n                                {% block sw_customer_card_metadata_customer_name_editor_company %}\n                                <sw-text-field\n                                    v-model:value="customer.company"\n                                    name="sw-field--customer-company"\n                                    :required="isBusinessAccountType"\n                                    :error="customerCompanyError"\n                                    :label="$tc(\'sw-customer.card.labelCompany\')"\n                                    :placeholder="$tc(\'sw-customer.card.placeholderCompany\')"\n                                />\n                                {% endblock %}\n                            </sw-container>\n                            <sw-container\n                                columns="1fr 1fr"\n                                gap="10px"\n                            >\n                                \n                            {% block sw_customer_base_form_phone_number_editor %}\n                                <sw-text-field\n                                    v-model:value="customer.phoneNumber"\n                                    name="sw-field--customer-phoneNumber"\n                                    :label="$tc(\'sw-customer.card.labelPhoneNumber\')"\n                                    :placeholder="$tc(\'sw-customer.card.placeholderPhoneNumber\')"\n                                    :error="customerPhoneNumberError"\n                                />\n                            {% endblock %}\n                                \n                            {% block sw_customer_card_vat_ids %}\n                                <sw-text-field\n                                    v-if="editMode && isBusinessAccountType"\n                                    v-model:value="customer.vatIds[0]"\n                                    name="vatId"\n                                    :label="$tc(\'sw-customer.card.labelVatId\')"\n                                    :placeholder="$tc(\'sw-customer.card.placeholderVatId\')"\n                                    :error="customerVatIdsError"\n                                />\n                            {% endblock %}\n                            </sw-container>\n                        </div>\n                        {% endblock %}\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_metadata_customer_email %}\n                        \n                        {% block sw_customer_card_metadata_customer_email_label %}\n                        <div\n                            v-if="customer.email && !editMode"\n                            class="sw-customer-card__metadata-item "\n                        >\n                            <a\n                                class="sw-customer-card-email-link"\n                                :href="getMailTo(customer.email)"\n                            >{{ emailIdnFilter(customer.email) }}</a>\n                        </div>\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_metadata_customer_email_editor %}\n                        <sw-email-field\n                            v-else\n                            v-model:value="customer.email"\n                            name="sw-field--customer-email"\n                            validation="required"\n                            required\n                            :label="$tc(\'sw-customer.card.labelEmail\')"\n                            :placeholder="$tc(\'sw-customer.card.placeholderEmail\')"\n                            :error="customerEmailError"\n                        />\n                        {% endblock %}\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_password %}\n                        <sw-password-field\n                            v-if="editMode"\n                            v-model:value="customer.passwordNew"\n                            name="sw-field--customer-passwordNew"\n                            autocomplete="new-password"\n                            :disabled="customer.guest"\n                            :label="$tc(\'sw-profile.index.labelNewPassword\')"\n                            :placeholder="$tc(\'sw-customer.card.placeholderNewPassword\')"\n                            :error="customerPasswordError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_password_confirm %}\n                        <sw-password-field\n                            v-if="editMode"\n                            v-model:value="customer.passwordConfirm"\n                            name="sw-field--customer-passwordConfirm"\n                            autocomplete="new-password"\n                            :disabled="customer.guest"\n                            :label="$tc(\'sw-profile.index.labelNewPasswordConfirm\')"\n                            :placeholder="$tc(\'sw-customer.card.placeholderNewPasswordConfirm\')"\n                            :error="customerPasswordConfirmError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_metadata_customer_tag %}\n                        <sw-entity-tag-select\n                            v-model:entityCollection="customer.tags"\n                            name="sw-field--customer-tags"\n                            :label="editMode ? $tc(\'sw-customer.baseForm.labelTags\') : \'\'"\n                            class="sw-customer-card__tag-select"\n                            :disabled="!editMode"\n                            :size="editMode ? \'default\' : \'medium\'"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_metadata_additional %}\n                        <slot name="metadata-additional">\n                            \n                            {% block sw_customer_card_slot_metadata_additional %}{% endblock %}\n                        </slot>\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_actions %}\n                        <div\n                            v-if="hasActionSlot"\n                            class="sw-customer-card__actions"\n                        >\n                            <slot name="actions">\n                                \n                                {% block sw_customer_card_slot_actions %}{% endblock %}\n                            </slot>\n                        </div>\n                        {% endblock %}\n                    </div>\n\n                    {% endblock %}\n                </sw-container>\n                {% endblock %}\n            </sw-card-section>\n            {% endblock %}\n\n            \n            {% block sw_customer_card_row_secondary %}\n            <sw-card-section\n                secondary\n                slim\n            >\n                <slot name="default">\n                    \n                    {% block sw_customer_card_slot_default %}{% endblock %}\n                </slot>\n            </sw-card-section>\n            {% endblock %}\n        </sw-container>\n    </template>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["acl","contextStoreService","repositoryFactory"],mixins:[r.getByName("notification"),r.getByName("salutation")],props:{customer:{type:Object,required:!0},title:{type:String,required:!0},editMode:{type:Boolean,required:!1,default:!1},isLoading:{type:Boolean,required:!1,default:!1}},data(){return{showImitateCustomerModal:!1}},computed:{hasActionSlot(){return!!this.$slots.actions?.[0]},hasAdditionalDataSlot(){return!!this.$slots["data-additional"]?.[0]},hasSummarySlot(){return!!this.$slots.summary?.[0]},moduleColor(){return this.$route.meta.$module?this.$route.meta.$module.color:""},fullName(){return Object.values({name:this.salutation(this.customer),company:this.customer.company}).filter(e=>null!==e).join(" - ").trim()},salutationCriteria(){let e=new i(1,25);return e.addFilter(i.not("or",[i.equals("id",c.defaultSalutationId)])),e},...l("customer",[...o["sw.customer.detail.base"].customer]),accountTypeOptions(){return[{value:s.Z.ACCOUNT_TYPE_PRIVATE,label:this.$tc("sw-customer.customerType.labelPrivate")},{value:s.Z.ACCOUNT_TYPE_BUSINESS,label:this.$tc("sw-customer.customerType.labelBusiness")}]},isBusinessAccountType(){return this.customer?.accountType===s.Z.ACCOUNT_TYPE_BUSINESS},canUseCustomerImitation(){return!this.customer.guest&&(!this.customer.boundSalesChannel||this.customer.boundSalesChannel.typeId===c.storefrontSalesChannelTypeId&&!!this.customer.boundSalesChannel.domains?.length)&&this.acl.can("api_proxy_imitate-customer")},hasSingleBoundSalesChannelUrl(){return this.customer.boundSalesChannel?.domains?.length===1},currentUser(){return Cicada.State.get("session").currentUser},emailIdnFilter(){return Cicada.Filter.getByName("decode-idn-email")}},watch:{"customer.accountType"(e){e!==s.Z.ACCOUNT_TYPE_BUSINESS&&this.customerCompanyError&&Cicada.State.dispatch("error/removeApiError",{expression:`customer.${this.customer.id}.company`})}},methods:{getMailTo(e){return`mailto:${e}`},async onImitateCustomer(){if(this.hasSingleBoundSalesChannelUrl){this.contextStoreService.generateImitateCustomerToken(this.customer.id,this.customer.boundSalesChannel.id).then(e=>{let t=a.Z.handleResponse(e);this.contextStoreService.redirectToSalesChannelUrl(this.customer.boundSalesChannel.domains.first().url,t.token,this.customer.id,this.currentUser?.id)}).catch(()=>{this.createNotificationError({message:this.$tc("sw-customer.detail.notificationImitateCustomerErrorMessage")})});return}this.showImitateCustomerModal=!0},onCloseImitateCustomerModal(){this.showImitateCustomerModal=!1}}}},539613:function(e,t){"use strict";t.Z=Object.freeze({ACCOUNT_TYPE_PRIVATE:"private",ACCOUNT_TYPE_BUSINESS:"business"})},344959:function(e,t,n){var o=n(889263);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),n(745346).Z("7b224ee8",o,!0,{})},37698:function(e){"use strict";e.exports=JSON.parse('{"sw.customer.detail.base":{"customer":["salutationId","name","email","groupId","salesChannelId","customerNumber","password","vatIds","company","passwordNew","passwordConfirm"]}}')}}]);