const e=`{% block sw_extension_uninstall_modal %} <sw-modal class="sw-extension-uninstall-modal" :title="title" variant="small" @modal-close="emitClose" > {% block sw_extension_uninstall_modal_content %} <template #default> {% block sw_installed_extension_card_removal_content_modal_body %} <p> {{ $tc('sw-extension-store.component.sw-extension-uninstall-modal.description') }} </p> <p class="sw-extension-uninstall-modal__bold-paragraph"> {{ $tc('sw-extension-store.component.sw-extension-uninstall-modal.alert') }} </p> <p> <sw-switch-field v-model:value="removePluginData" :label="$tc('sw-extension-store.component.sw-extension-uninstall-modal.labelRemovePluginData')" :help-text="$tc('sw-extension-store.component.sw-extension-uninstall-modal.helpTextRemovePluginData')" /> </p> {% endblock %} </template> <template #modal-footer> {% block sw_extension_uninstall_modal_footer %} {% block sw_extension_uninstall_modal_footer_cancel %} <sw-button size="small" :disabled="isLoading" @click="emitClose" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_extension_uninstall_modal_footer_uninstall %} <sw-button variant="danger" size="small" :is-loading="isLoading" @click="emitUninstall" > {{ $tc('sw-extension-store.component.sw-extension-uninstall-modal.buttonLabel') }} </sw-button> {% endblock %} {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %}`,t={template:e,emits:["modal-close","uninstall-extension"],props:{extensionName:{type:String,required:!0},isLicensed:{type:Boolean,required:!0},isLoading:{type:Boolean,required:!0}},data(){return{removePluginData:!1}},computed:{title(){return this.$t("sw-extension-store.component.sw-extension-uninstall-modal.title",{extensionName:this.extensionName})}},methods:{emitClose(){this.isLoading||this.$emit("modal-close")},emitUninstall(){this.$emit("uninstall-extension",this.removePluginData)}}};export{t as default};
