const t=`{% block sw_extension_adding_failed %} <div class="sw-extension-adding-failed"> {% block sw_extension_adding_failed_icon %} <sw-circle-icon :size="72" icon-name="regular-times-circle-s" variant="danger" /> {% endblock %} {% block sw_extension_adding_failed_headline %} <h3>{{ title || headline }}</h3> {% endblock %} {% block sw_extension_adding_failed_notification %} <p>{{ detail || text }}</p> <p v-if="documentationLink"> <a :href="documentationLink"> {{ documentationLink }} </a> </p> {% endblock %} {% block sw_extension_adding_failed_licence_cancellation %} <template v-if="isRent"> <p class="sw-extension-adding-failed__text-licence-cancellation"> {{ $tc('sw-extension-store.component.sw-extension-adding-failed.installationFailed.notificationLicense') }} </p> <i18n-t tag="p" keypath="sw-extension-store.component.sw-extension-adding-failed.installationFailed.textSupport" > <template #mail> <a :href="\`mailto:\${$tc('sw-extension-store.component.sw-extension-adding-failed.installationFailed.supportEmail')}\`"> {{ $tc('sw-extension-store.component.sw-extension-adding-failed.installationFailed.supportEmail') }} </a> </template> <template #phone> <a :href="\`tel:\${$tc('sw-extension-store.component.sw-extension-adding-failed.installationFailed.supportPhone')}\`"> {{ $tc('sw-extension-store.component.sw-extension-adding-failed.installationFailed.supportPhone') }} </a> </template> </i18n-t> </template> {% endblock %} {% block sw_extension_adding_failed_button_close %} <sw-button variant="primary" block @click="$emit('close')" > {{ $tc('global.default.close') }} </sw-button> {% endblock %} </div> {% endblock %}`,i={template:t,inject:["shopwareExtensionService"],emits:["close"],props:{extensionName:{type:String,required:!0},title:{type:String,required:!1,default:null},detail:{type:String,required:!1,default:null},documentationLink:{type:String,required:!1,default:null}},computed:{myExtensions(){return Shopware.Store.get("shopwareExtensions").myExtensions},extension(){return this.myExtensions.data.find(e=>e.name===this.extensionName)},isRent(){var e,n;return((n=(e=this.extension)==null?void 0:e.storeLicense)==null?void 0:n.variant)===this.shopwareExtensionService.EXTENSION_VARIANT_TYPES.RENT},headline(){return this.extension===void 0?this.$tc("sw-extension-store.component.sw-extension-adding-failed.titleFailure"):this.$tc("sw-extension-store.component.sw-extension-adding-failed.installationFailed.titleFailure")},text(){return this.extension===void 0?this.$tc("sw-extension-store.component.sw-extension-adding-failed.textProblem"):this.$tc("sw-extension-store.component.sw-extension-adding-failed.installationFailed.textProblem")}}};export{i as default};
