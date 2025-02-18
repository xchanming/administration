import{e as a}from"./extension-error-handler.service-2kuyx48j.js";const r=`{% block sw_extension_file_upload %} <div class="sw-extension-file-upload"> {% block sw_extension_file_upload_content %} <div class="sw-extension-file-upload__content"> {% block sw_extension_file_upload_button %} <sw-button class="sw-extension-file-upload__button" :is-loading="isLoading" variant="primary" @click="showConfirmModal" > {{ $tc('sw-extension.my-extensions.fileUpload.buttonFileUpload') }} </sw-button> {% endblock %} {% block sw_extension_file_upload_form %} <form ref="fileForm" class="sw-extension-file-upload__form" > <input id="files" ref="fileInput" class="sw-extension-file-upload__file-input" type="file" @change="onFileInputChange" > </form> {% endblock %} </div> {% endblock %} {% block sw_extension_file_upload_confirm_modal %} <sw-modal v-if="confirmModalVisible" class="sw-extension-file-upload-confirm-modal" :title="$tc('sw-extension.my-extensions.fileUpload.titleWarningModal')" variant="small" @modal-close="closeConfirmModal" > {% block sw_extension_file_upload_confirm_modal_content %} <template #default> {% block sw_extension_file_upload_confirm_modal_body %} <p> {{ $tc('sw-extension.my-extensions.fileUpload.descriptionWarningModal') }} </p> {% endblock %} </template> <template #modal-footer> {% block sw_extension_file_upload_confirm_modal_footer %} {% block sw_extension_file_upload_confirm_modal_footer_checkbox %} <sw-checkbox-field v-model:value="shouldHideConfirmModal" > {% block sw_extension_file_upload_confirm_modal_footer_checkbox_label %} <template #label> {{ $tc('sw-extension.my-extensions.fileUpload.textHideWarning') }} </template> {% endblock %} </sw-checkbox-field> {% endblock %} {% block sw_extension_file_upload_confirm_modal_footer_buttons %} <div> {% block sw_extension_file_upload_confirm_modal_footer_cancel %} <sw-button size="small" :disabled="isLoading" @click="closeConfirmModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_extension_file_upload_confirm_modal_footer_continue %} <sw-button variant="primary" size="small" :is-loading="isLoading" @click="onClickUpload" > {{ $tc('global.default.confirm') }} </sw-button> {% endblock %} </div> {% endblock %} {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %} </div> {% endblock %}`,{Mixin:d}=Shopware,{Criteria:n}=Shopware.Data,s="extension.plugin_upload",p={template:r,inject:["extensionStoreActionService","repositoryFactory"],mixins:[d.getByName("notification")],data(){return{isLoading:!0,confirmModalVisible:!1,shouldHideConfirmModal:!1,pluginUploadUserConfig:null}},computed:{userConfigRepository(){return this.repositoryFactory.create("user_config")},currentUser(){return Shopware.Store.get("session").currentUser},userConfigCriteria(){var o;const e=new n(1,25);return e.addFilter(n.equals("key",s)),e.addFilter(n.equals("userId",(o=this.currentUser)==null?void 0:o.id)),e}},created(){this.createdComponent()},methods:{async createdComponent(){await this.getUserConfig(),this.isLoading=!1},onClickUpload(){this.$refs.fileInput.click()},onFileInputChange(){const e=Array.from(this.$refs.fileInput.files);this.handleUpload(e),this.$refs.fileForm.reset()},handleUpload(e){this.isLoading=!0;const o=new FormData;return o.append("file",e[0]),this.extensionStoreActionService.upload(o).then(()=>{Shopware.Service("shopwareExtensionService").updateExtensionData().then(()=>this.createNotificationSuccess({message:this.$tc("sw-extension.my-extensions.fileUpload.messageUploadSuccess")}))}).catch(t=>{a.mapErrors(t.response.data.errors).forEach(i=>{if(i.parameters){this.showStoreError(i);return}const l=[this.$tc(i.message),i.details].filter(Boolean).join("<br />");this.createNotificationError({message:l})})}).finally(()=>{this.isLoading=!1,this.confirmModalVisible=!1,this.shouldHideConfirmModal===!0&&this.saveConfig(!0)})},showStoreError(e){const o=this.$tc("sw-extension.errors.messageToTheShopwareDocumentation",e.parameters,0);this.createNotificationError({message:`${e.message} ${o}`,autoClose:!1})},showConfirmModal(){if(this.pluginUploadUserConfig.value.hide_upload_warning===!0){this.onClickUpload();return}this.confirmModalVisible=!0},closeConfirmModal(){this.confirmModalVisible=!1},getUserConfig(){return this.userConfigRepository.search(this.userConfigCriteria,Shopware.Context.api).then(e=>{var o;e.length?this.pluginUploadUserConfig=e.first():(this.pluginUploadUserConfig=this.userConfigRepository.create(Shopware.Context.api),this.pluginUploadUserConfig.key=s,this.pluginUploadUserConfig.userId=(o=this.currentUser)==null?void 0:o.id,this.pluginUploadUserConfig.value={hide_upload_warning:!1})})},saveConfig(e){this.pluginUploadUserConfig.value={hide_upload_warning:e},this.userConfigRepository.save(this.pluginUploadUserConfig,Shopware.Context.api).then(()=>{this.getUserConfig()})}}};export{p as default};
