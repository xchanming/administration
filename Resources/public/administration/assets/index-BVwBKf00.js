const n=`{% block sw_integration_list %} <sw-page class="sw-integration-list"> {% block sw_integration_list_smart_bar_header %} <template #smart-bar-header> {% block sw_integration_list_smart_bar_header_title %} <h2> {% block sw_integration_list_smart_bar_header_title_text %} {{ $tc('sw-settings.index.title') }} <sw-icon name="regular-chevron-right-xs" small /> {{ $tc('sw-integration.general.headlineIntegrations') }} {% endblock %} </h2> {% endblock %} </template> {% endblock %} <template #smart-bar-actions> {% block sw_integration_list_smart_bar_actions %} <sw-button v-tooltip.bottom="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('integration.creator'), showOnDisabledElements: true }" class="sw-integration-list__add-integration-action" variant="primary" :disabled="!acl.can('integration.creator')" @click="onCreateIntegration" > {{ $tc('sw-integration.general.buttonCreateIntegration') }} </sw-button> {% endblock %} </template> {% block sw_integration_list_content %} <template #content> <sw-card-view class="sw-integration-list__content"> {% block sw_integration_list_introduction %} <sw-card :hero="true" position-identifier="sw-integration-list-introduction" > <h3 class="sw-integration-list__welcome-headline"> {{ $tc('sw-integration.general.heroHeadlineIntegrations') }} </h3> <p>{{ $tc('sw-integration.general.heroDescriptionIntegrations') }}</p> </sw-card> {% endblock %} {% block sw_integration_list_overview %} <sw-card :is-loading="isLoading" class="sw-integration-list__overview" position-identifier="sw-integration-list-overview" > {% block sw_integration_list_overview_inner %} {% block sw_integration_list_detail_modal %} <sw-modal v-if="currentIntegration" size="550px" class="sw-integration-list__detail" :is-loading="isModalLoading" :title="showSecretAccessKey ? $tc('sw-integration.detail.detailModalTitle') : $tc('sw-integration.detail.detailModalTitleEdit') + ' ' + currentIntegration.label" @modal-close="onCloseDetailModal" > {% block sw_integration_list_detail_modal_inner %} {% block sw_integration_list_detail_modal_inner_field_label %} <sw-container columns="2fr 1fr" gap="24px" > <sw-text-field v-model:value="currentIntegration.label" name="sw-field--currentIntegration-label" :label="$tc('sw-integration.detail.labelFieldLabel')" :disabled="!acl.can('integration.editor')" /> {% block sw_integration_list_detail_modal_inner_acl_is_admin %} <sw-switch-field v-model:value="currentIntegration.admin" name="sw-field--currentIntegration-admin" class="sw-settings-user-detail__grid-is-admin" :label="$tc('sw-users-permissions.users.user-detail.labelAdministrator')" :disabled="!acl.can('admin')" /> {% endblock %} </sw-container> {% endblock %} {% block sw_integration_list_detail_modal_inner_acl_roles %} <sw-entity-multi-select v-model:entity-collection="currentIntegration.aclRoles" v-tooltip="{ showDelay: 300, message: $tc('sw-users-permissions.users.user-detail.disabledRoleSelectWarning'), disabled: !currentIntegration.admin || !acl.can('integration.editor') }" name="sw-field--currentIntegration-aclRoles" class="sw-settings-user-detail__grid-aclRoles" :label="$tc('sw-users-permissions.users.user-detail.labelRoles')" :disabled="currentIntegration.admin || !acl.can('integration.editor')" label-property="name" /> {% endblock %} {% block sw_integration_list_detail_modal_inner_field_accesskey %} <sw-text-field v-model:value="currentIntegration.accessKey" name="sw-field--currentIntegration-accessKey" :label="$tc('sw-integration.detail.idFieldLabel')" :disabled="true" :copyable="true" :copyable-tooltip="true" /> {% endblock %} {% block sw_integration_list_detail_modal_inner_field_secretaccesskey %} <template v-if="showSecretAccessKey"> <sw-text-field v-if="secretAccessKeyFieldTypeIsText" v-model:value="currentIntegration.secretAccessKey" name="sw-field--currentIntegration-secretAccessKey" :label="$tc('sw-integration.detail.secretFieldLabel')" :disabled="true" :password-toggle-able="false" :copyable="showSecretAccessKey" :copyable-tooltip="true" /> <sw-password-field v-if="secretAccessKeyFieldTypeIsPassword" v-model:value="currentIntegration.secretAccessKey" name="sw-field--currentIntegration-secretAccessKey" :label="$tc('sw-integration.detail.secretFieldLabel')" :disabled="true" :password-toggle-able="false" :copyable="showSecretAccessKey" :copyable-tooltip="true" /> </template> <sw-button v-if="!showSecretAccessKey" variant="danger" :disabled="!acl.can('integration.editor')" :block="true" @click="onGenerateKeys" > {{ $tc('sw-integration.detail.buttonCreateNewApiKeys') }} </sw-button> {% block sw_integration_list_detail_modal_inner_field_helpText %} <div v-if="!showSecretAccessKey" class="sw-integration-list__help-text" > {{ $tc('sw-integration.detail.hintCreateNewApiKeys') }} </div> {% endblock %} {% endblock %} {% block sw_integration_list_detail_modal_inner_helptext %} <sw-alert v-if="showSecretAccessKey" variant="warning" class="sw-integration-list__secret-help-text-alert" > {{ $tc('sw-integration.detail.secretHelpText') }} </sw-alert> {% endblock %} {% block sw_integration_list_detail_modal_inner_footer %} <template #modal-footer> {% block sw_integration_list_detail_modal_inner_footer_cancel %} <sw-button size="small" :disabled="isModalLoading" @click="onCloseDetailModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_integration_list_detail_modal_inner_footer_apply %} <sw-button size="small" class="sw-integration-detail-modal__save-action" :disabled="(isModalLoading && !!currentIntegration.label) || !acl.can('integration.editor')" variant="primary" @click="onSaveIntegration" > {{ showSecretAccessKey ? $tc('sw-integration.detail.buttonApply') : $tc('sw-integration.detail.buttonApplyEdit') }} </sw-button> {% endblock %} </template> {% endblock %} {% endblock %} </sw-modal> {% endblock %} {% block sw_integration_list_grid %} <sw-entity-listing v-if="integrations && integrations.length > 0" :items="integrations" :columns="integrationColumns" :repository="integrationRepository" :full-page="false" :compact-mode="false" :allow-column-edit="false" :show-selection="false" :show-settings="false" :allow-view="acl.can('integration.viewer')" :is-loading="isLoading" > {% block sw_integration_list_grid_inner_slot_columns_label %} <template #column-label="{ item }"> <span class="sw-integration-list__app-icon"> <sw-icon name="regular-share" /> </span> <a href="#" @click.prevent="onShowDetailModal(item)" > {{ item.label }} </a> </template> {% endblock %} {% block sw_integration_list_grid_inner_slot_columns_writeAccess %} <template #column-writeAccess="{ item }"> <sw-label v-if="item.admin" size="medium" ghost caps light > {{ $tc('sw-users-permissions.users.user-detail.labelAdministrator') }} </sw-label> <span v-if="!item.admin && item.aclRoles && item.aclRoles.length"> <sw-label v-for="role in item.aclRoles" :key="role.name" size="medium" ghost caps light > {{ role.name }} </sw-label> </span> </template> {% endblock %} <template #actions="{ item }"> {% block sw_integration_list_grid_inner_slot_columns_actions_edit %} <sw-context-menu-item class="sw_integration_list__edit-action" :disabled="!acl.can('integration.editor')" @click="onShowDetailModal(item)" > {{ $tc('sw-integration.list.contextMenuEdit') }} </sw-context-menu-item> {% endblock %} {% block sw_integration_list_grid_inner_slot_columns_actions_delete %} <sw-context-menu-item class="sw_integration_list__delete-action" variant="danger" :disabled="!acl.can('integration.deleter')" @click="showDeleteModal = item.id" > {{ $tc('sw-integration.list.contextMenuDelete') }} </sw-context-menu-item> {% endblock %} </template> <template #action-modals="{ item }"> {% block sw_integration_list_grid_inner_slot_delete_modal %} <sw-modal v-if="showDeleteModal === item.id" :title="$tc('sw-integration.detail.deleteModalTitle')" @modal-close="onCloseDeleteModal" > {% block sw_integration_list_grid_inner_slot_delete_modal_confirmtext %} <p> {{ $tc('sw-integration.detail.confirmDelete') }} <strong>"{{ item.label }}"</strong> </p> {% endblock %} {% block sw_integration_list_grid_inner_slot_delete_modal_footer %} <template #modal-footer> <sw-button size="small" @click="onCloseDeleteModal" > {{ $tc('global.default.cancel') }} </sw-button> <sw-button size="small" variant="primary" @click="onConfirmDelete(item.id)" > {{ $tc('sw-integration.detail.buttonDelete') }} </sw-button> </template> {% endblock %} </sw-modal> {% endblock %} </template> </sw-entity-listing> {% endblock %} {% block sw_product_list_empty_state %} <sw-empty-state v-else :title="$tc('sw-integration.list.messageEmpty')" :subline="$tc('sw-integration.list.sublineEmpty')" /> {% endblock %} {% endblock %} </sw-card> {% endblock %} </sw-card-view> {% endblock %} </template> </sw-page> {% endblock %}`,{Mixin:s,Data:{Criteria:t}}=Shopware,a={template:n,inject:["integrationService","repositoryFactory","acl"],mixins:[s.getByName("notification")],data(){return{integrations:null,isLoading:!1,isModalLoading:!1,showDeleteModal:null,currentIntegration:null,showSecretAccessKey:!1}},metaInfo(){return{title:this.$createTitle()}},computed:{integrationRepository(){return this.repositoryFactory.create("integration")},integrationCriteria(){const e=new t(1,25);return e.addFilter(t.equals("deletedAt",null)),e.addFilter(t.equals("app.id",null)),e.addSorting(t.sort("label","ASC")),e.addAssociation("aclRoles"),e},secretAccessKeyFieldTypeIsText(){return this.showSecretAccessKey},secretAccessKeyFieldTypeIsPassword(){return!this.showSecretAccessKey},integrationColumns(){return[{property:"label",label:this.$tc("sw-integration.list.integrationName"),primary:!0},{property:"writeAccess",label:this.$tc("sw-integration.list.permissions")}]}},created(){this.createdComponent()},methods:{createdComponent(){this.getList()},getList(){this.isLoading=!0,this.integrationRepository.search(this.integrationCriteria).then(e=>{this.integrations=e}).finally(()=>{this.isLoading=!1})},onSaveIntegration(){if(!this.currentIntegration)return;const e=this.integrations.find(i=>i.id===this.currentIntegration.id);typeof e>"u"?this.createIntegration():this.updateIntegration(e)},updateIntegration(e){this.isModalLoading=!0,this.integrationRepository.save(e).then(()=>{this.createSavedSuccessNotification(),this.onCloseDetailModal()}).catch(()=>{this.createSavedErrorNotification(),this.onCloseDetailModal()})},createIntegration(){if(!this.currentIntegration.label||!this.currentIntegration.label.length){this.createSavedErrorNotification();return}this.isModalLoading=!0,this.integrationRepository.save(this.currentIntegration).then(()=>{this.createSavedSuccessNotification(),this.getList()}).catch(()=>{this.createSavedErrorNotification()}).finally(()=>{this.$nextTick(()=>{this.onCloseDetailModal()})})},createSavedSuccessNotification(){this.createNotificationSuccess({message:this.$tc("sw-integration.detail.messageSaveSuccess")})},createSavedErrorNotification(){this.createNotificationError({message:this.$tc("sw-integration.detail.messageSaveError")})},onGenerateKeys(){this.currentIntegration&&(this.isModalLoading=!0,this.integrationService.generateKey().then(e=>{this.currentIntegration=this.currentIntegration||this.integrationRepository.create(),this.currentIntegration.accessKey=e.accessKey,this.currentIntegration.secretAccessKey=e.secretAccessKey,this.showSecretAccessKey=!0,this.isModalLoading=!1}).catch(()=>{this.createNotificationError({message:this.$tc("sw-integration.detail.messageCreateNewError")})}))},onShowDetailModal(e){this.currentIntegration=e},onCreateIntegration(){this.currentIntegration=this.integrationRepository.create(),this.onGenerateKeys()},onCloseDetailModal(){this.currentIntegration=null,this.showSecretAccessKey=!1,this.isModalLoading=!1},onCloseDeleteModal(){this.showDeleteModal=null},onConfirmDelete(e){e&&(this.onCloseDeleteModal(),this.integrationRepository.delete(e).then(()=>{this.getList()}))}}};export{a as default};
