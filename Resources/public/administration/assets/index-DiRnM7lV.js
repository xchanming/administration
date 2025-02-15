const t=`{% block sw_language_switch %} <div class="sw-language-switch"> {% block sw_language_switch_modal %} <sw-modal v-if="showUnsavedChangesModal" :title="$tc('sw-language-switch.titleModalUnsavedChanges')" variant="small" @modal-close="onCloseChangesModal" > {% block sw_language_switch_message %} <p>{{ $tc('sw-language-switch.messageModalUnsavedChanges') }}</p> {% endblock %} {% block sw_language_switch_footer %} <template #modal-footer> {% block sw_language_switch_footer_button_close %} <sw-button id="sw-language-switch-close-button" size="small" @click="onCloseChangesModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_language_switch_footer_button_revert %} <sw-button id="sw-language-switch-revert-changes-button" size="small" @click="onClickRevertUnsavedChanges" > {{ $tc('sw-language-switch.titleModalButtonRevertUnsavedChanges') }} </sw-button> {% endblock %} {% block sw_language_switch_footer_button_save %} <sw-button id="sw-language-switch-save-changes-button" v-tooltip="{ message: $tc('sw-privileges.tooltip.warning'), disabled: allowEdit, showOnDisabledElements: true }" variant="primary" :disabled="!allowEdit || undefined" size="small" @click="onClickSaveChanges" > {{ $tc('global.default.save') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %} {% block sw_language_switch_select %} <sw-entity-single-select id="language" class="sw-language-switch__select" entity="language" :disabled="disabled || undefined" :criteria="languageCriteria" size="medium" required :value="languageId" :result-limit="Infinity" @update:value="onInput" /> {% endblock %} </div> {% endblock %}`,{Component:n}=Shopware,{warn:s}=Shopware.Utils.debug,{Criteria:a}=Shopware.Data;n.register("sw-language-switch",{template:t,emits:["on-change"],props:{disabled:{type:Boolean,required:!1,default:!1},changeGlobalLanguage:{type:Boolean,required:!1,default:!0},abortChangeFunction:{type:Function,required:!1,default:()=>{}},saveChangesFunction:{type:Function,required:!1,default:()=>{}},savePermission:{type:Boolean,required:!1,default:!0},allowEdit:{type:Boolean,required:!1,default:!0}},data(){return{languageId:"",lastLanguageId:"",newLanguageId:"",showUnsavedChangesModal:!1}},computed:{languageCriteria(){const e=new a(1,25);return e.addSorting(a.sort("name","ASC",!1)),e}},created(){this.createdComponent()},unmounted(){this.destroyedComponent()},methods:{createdComponent(){this.languageId=Shopware.Context.api.languageId,this.lastLanguageId=this.languageId,Shopware.Utils.EventBus.on("on-change-language-clicked",this.changeToNewLanguage)},destroyedComponent(){Shopware.Utils.EventBus.off("on-change-language-clicked",this.changeToNewLanguage)},onInput(e){this.languageId=e,this.newLanguageId=e,this.checkAbort()},checkAbort(){if(typeof this.abortChangeFunction=="function"&&this.savePermission&&this.abortChangeFunction({oldLanguageId:this.lastLanguageId,newLanguageId:this.languageId})){this.showUnsavedChangesModal=!0,this.languageId=this.lastLanguageId;return}this.emitChange()},emitChange(){this.lastLanguageId=this.languageId,this.changeGlobalLanguage&&(Shopware.Store.get("context").api.languageId=this.languageId,Shopware.Utils.EventBus.emit("sw-language-switch-change-application-language",{languageId:this.languageId})),this.$emit("on-change",this.languageId)},onCloseChangesModal(){this.showUnsavedChangesModal=!1,this.newLanguageId=""},onClickSaveChanges(){let e={};return typeof this.saveChangesFunction=="function"?e=this.saveChangesFunction():s("sw-language-switch","You need to implement an own save function to save the changes!"),Promise.resolve(e).then(()=>{this.changeToNewLanguage(),this.onCloseChangesModal()})},onClickRevertUnsavedChanges(){this.changeToNewLanguage(),this.onCloseChangesModal()},changeToNewLanguage(e){e&&(this.newLanguageId=e),this.languageId=this.newLanguageId,this.newLanguageId="",this.emitChange()}}});
