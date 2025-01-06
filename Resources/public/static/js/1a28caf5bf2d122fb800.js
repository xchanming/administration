(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[26846],{467762:function(){},126846:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}}),t(236434);var i=t(498786),s={template:'\n{% block sw_extension_card_base_activation_switch %}\n    {% parent %}\n\n<sw-extension-deactivation-modal\n    v-if="showDeactivationModal"\n    :extension-name="label"\n    :is-licensed="license !== null"\n    :is-loading="isLoading"\n    @modal-close="closeDeactivationModal"\n    @extension-deactivate="closeModalAndDeactivateExtension"\n/>\n{% endblock %}\n\n\n{% block sw_extension_card_base_info_content %}\n    {% parent %}\n\n<section v-if="priceInfo && extension.storeLicense.variant === \'rent\'">\n    <span class="sw-extension-card-bought__info-price">\n        {{ priceInfo }}\n    </span>\n</section>\n\n<section v-if="subscriptionExpiredText">\n    <span\n        class="sw-extension-card-bought__info-subscription-expiry"\n        :class="subscriptionExpiredTextClasses"\n    >\n        <sw-icon\n            v-if="isExpiredTestPhase || isExpiredRent"\n            name="solid-exclamation-circle"\n            size="14"\n            small\n        />\n        {{ subscriptionExpiredText }}\n    </span>\n</section>\n{% endblock %}\n\n\n{% block sw_extension_card_base_context_menu_actions %}\n<sw-context-menu-item\n    v-if="detailLink"\n    class="sw-extension-card-bought__detail-link"\n    :router-link="detailLink"\n>\n    {{ $tc(\'sw-extension-store.component.sw-extension-card-base.contextMenu.seeDetailsLabel\') }}\n</sw-context-menu-item>\n\n<sw-context-menu-item\n    v-if="isInstalled && extension.storeLicense"\n    class="sw-extension-card-bought__rate-link"\n    @click="openRatingModal"\n>\n    {{ $tc(\'sw-extension-store.component.sw-extension-card-base.contextMenu.rateLabel\') }}\n</sw-context-menu-item>\n\n    {% parent %}\n{% endblock %}\n\n\n{% block sw_extension_card_base_modals %}\n    {% parent %}\n\n<sw-extension-rating-modal\n    v-if="showRatingModal"\n    :extension="extension"\n    @modal-close="closeRatingModal"\n/>\n\n<sw-modal\n    v-if="showExtensionInstallationFailedModal"\n    :title="extension.label"\n    variant="small"\n    class="sw-extension-card-bought__installation-failed-modal"\n    @modal-close="closeInstallationFailedNotification"\n>\n    <sw-extension-adding-failed\n        :extension-name="extension.name"\n        :title="installationFailedError && installationFailedError.title"\n        :detail="installationFailedError && installationFailedError.message"\n        :documentation-link="installationFailedError && installationFailedError.parameters && installationFailedError.parameters.documentationLink"\n        @close="closeInstallationFailedNotification"\n    />\n</sw-modal>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,mixins:["sw-extension-error"],props:{extension:{type:Object,required:!1,default:null}},data(){return{showDeactivationModal:!1,showRatingModal:!1,showExtensionInstallationFailedModal:!1,installationFailedError:null}},computed:{extensionCardClasses(){return{"sw-extension-card-bought":!0,...this.$super("extensionCardClasses")}},priceInfo(){return this.extension?.storeLicense?.paymentText??""},detailLink(){return{name:"sw.extension.store.detail",params:{id:String(this.extension.storeExtension?this.extension.storeExtension.id:this.extension.id)}}},subscriptionExpiredText(){let e=this.extension?.storeLicense?.expirationDate??null;if(null===e)return null;let n=new Date(e).toLocaleDateString();return this.extension?.storeLicense?.variant!=="test"||this.extension?.storeLicense?.expired?this.isExpiredTestPhase?this.$t("sw-extension-store.component.sw-extension-card-bought.testPhaseExpiredAt",{date:n}):this.isExpiredRent?this.$t("sw-extension-store.component.sw-extension-card-bought.rentExpiredAt",{date:n}):this.$t("sw-extension-store.component.sw-extension-card-bought.rentWillExpireAt",{date:n}):this.$t("sw-extension-store.component.sw-extension-card-bought.testPhaseWillExpireAt",{date:n})},isExpiredRent(){return this.extension?.storeLicense?.variant==="rent"&&this.extension?.storeLicense?.expired},isExpiredTestPhase(){return this.extension?.storeLicense?.variant==="test"&&this.extension?.storeLicense?.expired},subscriptionExpiredTextClasses(){return{"is--expired-test-phase":this.isExpiredTestPhase,"is--expired-rent":this.isExpiredRent}},showContextMenu(){return!!this.detailLink||!!this.isInstalled&&!!this.extension.storeLicense||this.$super("showContextMenu")}},methods:{async changeExtensionStatus(){if(this.isActive){await this.activateExtension();return}if(!this.license||this.license.variant!==this.cicadaExtensionService.EXTENSION_VARIANT_TYPES.RENT){await this.deactivateExtension();return}this.showDeactivationModal=!0,this.$nextTick(()=>{this.extension.active=!this.extension.active})},async activateExtension(){try{this.isLoading=!0,await this.cicadaExtensionService.activateExtension(this.extension.name,this.extension.type),this.extension.active=!0,this.clearCacheAndReloadPage()}catch(e){this.extension.active=!1,this.showExtensionErrors(e)}finally{this.isLoading=!1}},async deactivateExtension(){try{this.isLoading=!0,await this.cicadaExtensionService.deactivateExtension(this.extension.name,this.extension.type),this.extension.active=!1,this.clearCacheAndReloadPage()}catch(e){this.extension.active=!0,this.showExtensionErrors(e)}finally{this.isLoading=!1}},closeDeactivationModal(){this.showDeactivationModal=!1},async closeModalAndDeactivateExtension(){await this.deactivateExtension(),this.showDeactivationModal=!1},async installExtension(){this.isLoading=!0;try{"store"===this.extension.source&&await this.extensionStoreActionService.downloadExtension(this.extension.name),await this.cicadaExtensionService.installExtension(this.extension.name,this.extension.type),await this.clearCacheAndReloadPage()}catch(n){this.showExtensionErrors(n);let e=i.Z.mapErrors(n.response.data.errors)?.[0];e.parameters?this.installationFailedError=e:this.installationFailedError={title:this.$tc(e.title),message:this.$tc(e.message)},this.showExtensionInstallationFailedModal=!0}finally{this.isLoading=!1}},async installAndActivateExtension(){this.isLoading=!0;try{"store"===this.extension.source&&await this.extensionStoreActionService.downloadExtension(this.extension.name),await this.cicadaExtensionService.installExtension(this.extension.name,this.extension.type),await this.cicadaExtensionService.activateExtension(this.extension.name,this.extension.type),await this.clearCacheAndReloadPage()}catch(n){this.showExtensionErrors(n);let e=i.Z.mapErrors(n.response.data.errors)?.[0];e.parameters?this.installationFailedError=e:this.installationFailedError={title:this.$tc(e.title),message:this.$tc(e.message)},this.showExtensionInstallationFailedModal=!0}finally{this.isLoading=!1}},async cancelAndRemoveExtension(){try{this.closeRemovalModal(),this.isLoading=!0,this.extension.storeLicense.expirationDate||await this.cicadaExtensionService.cancelLicense(this.extension.storeLicense.id),await this.cicadaExtensionService.removeExtension(this.extension.name,this.extension.type),this.$nextTick(()=>{this.emitUpdateList()})}catch(e){this.showExtensionErrors(e)}finally{this.isLoading=!1}},openRatingModal(){this.showRatingModal=!0},closeRatingModal(){this.showRatingModal=!1},closeInstallationFailedNotification(){this.showExtensionInstallationFailedModal=!1}}}},236434:function(e,n,t){var i=t(467762);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(745346).Z("582dd312",i,!0,{})}}]);