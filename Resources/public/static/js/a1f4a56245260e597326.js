(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[8144],{983932:function(){},208144:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}}),t(778809);let{Mixin:i,Data:{Criteria:a}}=Cicada;var s={template:'\n{% block sw_integration_list %}\n<sw-page class="sw-integration-list">\n    \n    {% block sw_integration_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_integration_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_integration_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-integration.general.headlineIntegrations\') }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    <template #smart-bar-actions>\n        \n        {% block sw_integration_list_smart_bar_actions %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'integration.creator\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-integration-list__add-integration-action"\n            variant="primary"\n            :disabled="!acl.can(\'integration.creator\')"\n            @click="onCreateIntegration"\n        >\n            {{ $tc(\'sw-integration.general.buttonCreateIntegration\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_integration_list_content %}\n    <template #content>\n        <sw-card-view class="sw-integration-list__content">\n\n            \n            {% block sw_integration_list_introduction %}\n            <sw-card\n                :hero="true"\n                position-identifier="sw-integration-list-introduction"\n            >\n                <h3 class="sw-integration-list__welcome-headline">\n                    {{ $tc(\'sw-integration.general.heroHeadlineIntegrations\') }}\n                </h3>\n                <p>{{ $tc(\'sw-integration.general.heroDescriptionIntegrations\') }}</p>\n            </sw-card>\n            {% endblock %}\n\n            \n            {% block sw_integration_list_overview %}\n            <sw-card\n                :is-loading="isLoading"\n                class="sw-integration-list__overview"\n                position-identifier="sw-integration-list-overview"\n            >\n                \n                {% block sw_integration_list_overview_inner %}\n                \n                {% block sw_integration_list_detail_modal %}\n                <sw-modal\n                    v-if="currentIntegration"\n                    size="550px"\n                    class="sw-integration-list__detail"\n                    :is-loading="isModalLoading"\n                    :title="showSecretAccessKey ? $tc(\'sw-integration.detail.detailModalTitle\') : $tc(\'sw-integration.detail.detailModalTitleEdit\') + \' \' + currentIntegration.label"\n                    @modal-close="onCloseDetailModal"\n                >\n                    \n                    {% block sw_integration_list_detail_modal_inner %}\n\n                    \n                    {% block sw_integration_list_detail_modal_inner_field_label %}\n                    <sw-container\n                        columns="2fr 1fr"\n                        gap="24px"\n                    >\n                        <sw-text-field\n                            v-model:value="currentIntegration.label"\n                            name="sw-field--currentIntegration-label"\n                            :label="$tc(\'sw-integration.detail.labelFieldLabel\')"\n                            :disabled="!acl.can(\'integration.editor\')"\n                        />\n\n                        \n                        {% block sw_integration_list_detail_modal_inner_acl_is_admin %}\n                        <sw-switch-field\n                            v-model:value="currentIntegration.admin"\n                            name="sw-field--currentIntegration-admin"\n                            class="sw-settings-user-detail__grid-is-admin"\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelAdministrator\')"\n                            :disabled="!acl.can(\'admin\')"\n                        />\n                        {% endblock %}\n                    </sw-container>\n                    {% endblock %}\n\n                    \n                    {% block sw_integration_list_detail_modal_inner_acl_roles %}\n                    <sw-entity-multi-select\n                        v-model:entityCollection="currentIntegration.aclRoles"\n                        v-tooltip="{\n                            showDelay: 300,\n                            message: $tc(\'sw-users-permissions.users.user-detail.disabledRoleSelectWarning\'),\n                            disabled: !currentIntegration.admin || !acl.can(\'integration.editor\')\n                        }"\n                        name="sw-field--currentIntegration-aclRoles"\n                        class="sw-settings-user-detail__grid-aclRoles"\n                        :label="$tc(\'sw-users-permissions.users.user-detail.labelRoles\')"\n                        :disabled="currentIntegration.admin || !acl.can(\'integration.editor\')"\n                        label-property="name"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_integration_list_detail_modal_inner_field_accesskey %}\n                    <sw-text-field\n                        v-model:value="currentIntegration.accessKey"\n                        name="sw-field--currentIntegration-accessKey"\n                        :label="$tc(\'sw-integration.detail.idFieldLabel\')"\n                        :disabled="true"\n                        :copyable="true"\n                        :copyable-tooltip="true"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_integration_list_detail_modal_inner_field_secretaccesskey %}\n                    <template v-if="showSecretAccessKey">\n                        <sw-text-field\n                            v-if="secretAccessKeyFieldTypeIsText"\n                            v-model:value="currentIntegration.secretAccessKey"\n                            name="sw-field--currentIntegration-secretAccessKey"\n                            :label="$tc(\'sw-integration.detail.secretFieldLabel\')"\n                            :disabled="true"\n                            :password-toggle-able="false"\n                            :copyable="showSecretAccessKey"\n                            :copyable-tooltip="true"\n                        />\n\n                        <sw-password-field\n                            v-if="secretAccessKeyFieldTypeIsPassword"\n                            v-model:value="currentIntegration.secretAccessKey"\n                            name="sw-field--currentIntegration-secretAccessKey"\n                            :label="$tc(\'sw-integration.detail.secretFieldLabel\')"\n                            :disabled="true"\n                            :password-toggle-able="false"\n                            :copyable="showSecretAccessKey"\n                            :copyable-tooltip="true"\n                        />\n                    </template>\n\n                    <sw-button\n                        v-if="!showSecretAccessKey"\n                        variant="danger"\n                        :disabled="!acl.can(\'integration.editor\')"\n                        :block="true"\n                        @click="onGenerateKeys"\n                    >\n                        {{ $tc(\'sw-integration.detail.buttonCreateNewApiKeys\') }}\n                    </sw-button>\n\n                    \n                    {% block sw_integration_list_detail_modal_inner_field_helpText %}\n                    <div\n                        v-if="!showSecretAccessKey"\n                        class="sw-integration-list__help-text"\n                    >\n                        {{ $tc(\'sw-integration.detail.hintCreateNewApiKeys\') }}\n                    </div>\n                    {% endblock %}\n                    {% endblock %}\n\n                    \n                    {% block sw_integration_list_detail_modal_inner_helptext %}\n                    <sw-alert\n                        v-if="showSecretAccessKey"\n                        variant="warning"\n                        class="sw-integration-list__secret-help-text-alert"\n                    >\n                        {{ $tc(\'sw-integration.detail.secretHelpText\') }}\n                    </sw-alert>\n                    {% endblock %}\n\n                    \n                    {% block sw_integration_list_detail_modal_inner_footer %}\n                    <template #modal-footer>\n                        \n                        {% block sw_integration_list_detail_modal_inner_footer_cancel %}\n                        <sw-button\n                            size="small"\n                            :disabled="isModalLoading"\n                            @click="onCloseDetailModal"\n                        >\n                            {{ $tc(\'global.default.cancel\') }}\n                        </sw-button>\n                        {% endblock %}\n\n                        \n                        {% block sw_integration_list_detail_modal_inner_footer_apply %}\n                        <sw-button\n                            size="small"\n                            class="sw-integration-detail-modal__save-action"\n                            :disabled="(isModalLoading && !!currentIntegration.label) || !acl.can(\'integration.editor\')"\n                            variant="primary"\n                            @click="onSaveIntegration"\n                        >\n                            {{ showSecretAccessKey ? $tc(\'sw-integration.detail.buttonApply\') : $tc(\'sw-integration.detail.buttonApplyEdit\') }}\n                        </sw-button>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n                    {% endblock %}\n                </sw-modal>\n                {% endblock %}\n\n                \n                {% block sw_integration_list_grid %}\n                <sw-entity-listing\n                    v-if="integrations && integrations.length > 0"\n                    :items="integrations"\n                    :columns="integrationColumns"\n                    :repository="integrationRepository"\n                    :full-page="false"\n                    :compact-mode="false"\n                    :allow-column-edit="false"\n                    :show-selection="false"\n                    :show-settings="false"\n                    :allow-view="acl.can(\'integration.viewer\')"\n                    :is-loading="isLoading"\n                >\n\n                    \n                    {% block sw_integration_list_grid_inner_slot_columns_label %}\n                    <template #column-label="{ item }">\n                        <span class="sw-integration-list__app-icon">\n                            <sw-icon name="regular-share" />\n                        </span>\n                        <a\n                            href="#"\n                            @click.prevent="onShowDetailModal(item)"\n                        >\n                            {{ item.label }}\n                        </a>\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_integration_list_grid_inner_slot_columns_writeAccess %}\n                    <template #column-writeAccess="{ item }">\n                        <sw-label\n                            v-if="item.admin"\n                            size="medium"\n                            ghost\n                            caps\n                            light\n                        >\n                            {{ $tc(\'sw-users-permissions.users.user-detail.labelAdministrator\') }}\n                        </sw-label>\n\n                        <span v-if="!item.admin && item.aclRoles && item.aclRoles.length">\n                            <sw-label\n                                v-for="role in item.aclRoles"\n                                :key="role.name"\n                                size="medium"\n                                ghost\n                                caps\n                                light\n                            >\n                                {{ role.name }}\n                            </sw-label>\n                        </span>\n                    </template>\n                    {% endblock %}\n\n                    <template #actions="{ item }">\n                        \n                        {% block sw_integration_list_grid_inner_slot_columns_actions_edit %}\n                        <sw-context-menu-item\n                            class="sw_integration_list__edit-action"\n                            :disabled="!acl.can(\'integration.editor\')"\n                            @click="onShowDetailModal(item)"\n                        >\n                            {{ $tc(\'sw-integration.list.contextMenuEdit\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n\n                        \n                        {% block sw_integration_list_grid_inner_slot_columns_actions_delete %}\n                        <sw-context-menu-item\n                            class="sw_integration_list__delete-action"\n                            variant="danger"\n                            :disabled="!acl.can(\'integration.deleter\')"\n                            @click="showDeleteModal = item.id"\n                        >\n                            {{ $tc(\'sw-integration.list.contextMenuDelete\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n                    </template>\n\n                    <template #action-modals="{ item }">\n                        \n                        {% block sw_integration_list_grid_inner_slot_delete_modal %}\n                        <sw-modal\n                            v-if="showDeleteModal === item.id"\n                            :title="$tc(\'sw-integration.detail.deleteModalTitle\')"\n                            @modal-close="onCloseDeleteModal"\n                        >\n                            \n                            {% block sw_integration_list_grid_inner_slot_delete_modal_confirmtext %}\n                            <p>\n                                {{ $tc(\'sw-integration.detail.confirmDelete\') }}\n                                <strong>"{{ item.label }}"</strong>\n                            </p>\n                            {% endblock %}\n\n                            \n                            {% block sw_integration_list_grid_inner_slot_delete_modal_footer %}\n                            <template #modal-footer>\n                                <sw-button\n                                    size="small"\n                                    @click="onCloseDeleteModal"\n                                >\n                                    {{ $tc(\'global.default.cancel\') }}\n                                </sw-button>\n\n                                <sw-button\n                                    size="small"\n                                    variant="primary"\n                                    @click="onConfirmDelete(item.id)"\n                                >\n                                    {{ $tc(\'sw-integration.detail.buttonDelete\') }}\n                                </sw-button>\n                            </template>\n                            {% endblock %}\n                        </sw-modal>\n                        {% endblock %}\n                    </template>\n                </sw-entity-listing>\n                {% endblock %}\n\n                \n                {% block sw_product_list_empty_state %}\n                <sw-empty-state\n                    v-else\n                    :title="$tc(\'sw-integration.list.messageEmpty\')"\n                    :subline="$tc(\'sw-integration.list.sublineEmpty\')"\n                />\n                {% endblock %}\n                {% endblock %}\n            </sw-card>\n        {% endblock %}\n        </sw-card-view>\n        {% endblock %}\n    </template>\n</sw-page>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["integrationService","repositoryFactory","acl"],mixins:[i.getByName("notification")],data(){return{integrations:null,isLoading:!1,isModalLoading:!1,showDeleteModal:null,currentIntegration:null,showSecretAccessKey:!1}},metaInfo(){return{title:this.$createTitle()}},computed:{integrationRepository(){return this.repositoryFactory.create("integration")},integrationCriteria(){let e=new a(1,25);return e.addFilter(a.equals("deletedAt",null)),e.addFilter(a.equals("app.id",null)),e.addSorting(a.sort("label","ASC")),e.addAssociation("aclRoles"),e},secretAccessKeyFieldTypeIsText(){return this.showSecretAccessKey},secretAccessKeyFieldTypeIsPassword(){return!this.showSecretAccessKey},integrationColumns(){return[{property:"label",label:this.$tc("sw-integration.list.integrationName"),primary:!0},{property:"writeAccess",label:this.$tc("sw-integration.list.permissions")}]}},created(){this.createdComponent()},methods:{createdComponent(){this.getList()},getList(){this.isLoading=!0,this.integrationRepository.search(this.integrationCriteria).then(e=>{this.integrations=e}).finally(()=>{this.isLoading=!1})},onSaveIntegration(){if(!this.currentIntegration)return;let e=this.integrations.find(e=>e.id===this.currentIntegration.id);void 0===e?this.createIntegration():this.updateIntegration(e)},updateIntegration(e){this.isModalLoading=!0,this.integrationRepository.save(e).then(()=>{this.createSavedSuccessNotification(),this.onCloseDetailModal()}).catch(()=>{this.createSavedErrorNotification(),this.onCloseDetailModal()})},createIntegration(){if(!this.currentIntegration.label||!this.currentIntegration.label.length){this.createSavedErrorNotification();return}this.isModalLoading=!0,this.integrationRepository.save(this.currentIntegration).then(()=>{this.createSavedSuccessNotification(),this.getList()}).catch(()=>{this.createSavedErrorNotification()}).finally(()=>{this.$nextTick(()=>{this.onCloseDetailModal()})})},createSavedSuccessNotification(){this.createNotificationSuccess({message:this.$tc("sw-integration.detail.messageSaveSuccess")})},createSavedErrorNotification(){this.createNotificationError({message:this.$tc("sw-integration.detail.messageSaveError")})},onGenerateKeys(){this.currentIntegration&&(this.isModalLoading=!0,this.integrationService.generateKey().then(e=>{this.currentIntegration=this.currentIntegration||this.integrationRepository.create(),this.currentIntegration.accessKey=e.accessKey,this.currentIntegration.secretAccessKey=e.secretAccessKey,this.showSecretAccessKey=!0,this.isModalLoading=!1}).catch(()=>{this.createNotificationError({message:this.$tc("sw-integration.detail.messageCreateNewError")})}))},onShowDetailModal(e){this.currentIntegration=e},onCreateIntegration(){this.currentIntegration=this.integrationRepository.create(),this.onGenerateKeys()},onCloseDetailModal(){this.currentIntegration=null,this.showSecretAccessKey=!1,this.isModalLoading=!1},onCloseDeleteModal(){this.showDeleteModal=null},onConfirmDelete(e){e&&(this.onCloseDeleteModal(),this.integrationRepository.delete(e).then(()=>{this.getList()}))}}}},778809:function(e,n,t){var i=t(983932);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(745346).Z("6e897990",i,!0,{})}}]);