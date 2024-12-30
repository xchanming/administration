(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[63315],{421676:function(){},463315:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return o}}),t(859073);let{Criteria:n}=Cicada.Data;var o={template:'\n{% block sw_import_export_new_profile_wizard %}\n<sw-wizard\n    ref="wizard"\n    class="sw-import-export-new-profile-wizard"\n    variant="full"\n    :right-button-disabled="nextButtonDisabled"\n    :active-page="currentlyActivePage"\n    @close="onClose"\n    @finish="onFinish"\n    @current-page-change="onCurrentPageChange"\n>\n    \n    {% block sw_import_export_new_profile_wizard_page_general %}\n    <sw-wizard-page\n        :position="0"\n        :title="pageTitleSnippet(\'sw-import-export.profile.generalTab\')"\n    >\n        <sw-import-export-new-profile-wizard-general-page\n            :profile="profile"\n            @next-disable="onNextDisable"\n            @next-allow="onNextAllow"\n        />\n    </sw-wizard-page>\n    {% endblock %}\n    \n    {% block sw_import_export_new_profile_wizard_page_csv %}\n    <sw-wizard-page\n        :position="csvUploadPagePosition"\n        :title="pageTitleSnippet(\'sw-import-export.profile.csvUploadTab\')"\n    >\n        <sw-import-export-new-profile-wizard-csv-page\n            :profile="profile"\n            @next-disable="onNextDisable"\n            @next-allow="onNextAllow"\n        />\n    </sw-wizard-page>\n    {% endblock %}\n    \n    {% block sw_import_export_new_profile_wizard_page_mapping %}\n    <sw-wizard-page\n        :position="2"\n        :title="pageTitleSnippet(\'sw-import-export.profile.mappingsTab\')"\n    >\n        <sw-import-export-new-profile-wizard-mapping-page\n            :profile="profile"\n            :system-required-fields="systemRequiredFields"\n            @next-disable="onNextDisable"\n            @next-allow="onNextAllow"\n        />\n    </sw-wizard-page>\n    {% endblock %}\n\n    \n    {% block sw_import_export_new_profile_wizard_footer_right_button %}\n    <template #footer-right-button>\n        <div class="sw-import-export-new-profile-wizard__footer-right-button-group">\n            \n            {% block sw_import_export_new_profile_wizard_footer_right_button_finish %}\n            <sw-button\n                v-if="showNextButton"\n                size="small"\n                variant="primary"\n                :disabled="nextButtonDisabled"\n                @click="onFinish"\n            >\n                {{ $tc(\'sw-import-export.profile.addProfileLabel\') }}\n            </sw-button>\n            {% endblock %}\n\n            <template v-else>\n                \n                {% block sw_import_export_new_profile_wizard_footer_right_button_skip %}\n                <sw-button\n                    v-if="showCsvSkipButton"\n                    size="small"\n                    @click="onNextPage"\n                >\n                    {{ $tc(\'sw-import-export.profile.skipCsvUpload\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_import_export_new_profile_wizard_footer_right_button_next %}\n                <sw-button\n                    size="small"\n                    variant="primary"\n                    :disabled="nextButtonDisabled"\n                    @click="onNextPage"\n                >\n                    {{ $tc(\'sw-wizard.nextButton\') }}\n                </sw-button>\n            {% endblock %}\n            </template>\n        </div>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_import_export_new_profile_wizard_violation_modal %}\n    <sw-modal\n        v-if="showValidationError"\n        :title="$tc(\'global.default.error\')"\n        class="sw-import-export-new-profile-wizard__violation-modal"\n        @modal-close="resetViolations"\n    >\n\n        \n        {% block sw_import_export_new_profile_wizard_violation_modal_message %}\n        <p>{{ $tc(\'sw-import-export.profile.violationMessage\') }}</p>\n        {% endblock %}\n\n        \n        {% block sw_import_export_new_profile_wizard_violation_modal_required_fields %}\n        <ul>\n            \n            {% block sw_import_export_new_profile_wizard_violation_modal_required_field %}\n            <li\n                v-for="requiredField in missingRequiredFields"\n                :key="requiredField"\n            >\n                {{ requiredField }}\n            </li>\n            {% endblock %}\n        </ul>\n        {% endblock %}\n\n        \n        {% block sw_import_export_new_profile_wizard_violation_modal_footer %}\n        <template #modal-footer>\n            <sw-button\n                size="small"\n                @click="resetViolations"\n            >\n                {{ $tc(\'sw-import-export.profile.closeViolation\') }}\n            </sw-button>\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n</sw-wizard>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","feature","importExportProfileMapping"],emits:["close","profile-save"],props:{profile:{type:Object,required:!0}},data(){return{nextButtonDisabled:!0,missingRequiredFields:[],systemRequiredFields:{},csvUploadPagePosition:1,currentlyActivePage:0,pagesCount:3}},computed:{profileRepository(){return this.repositoryFactory.create("import_export_profile")},showValidationError(){return this.missingRequiredFields.length>0},showNextButton(){return this.currentlyActivePage>=this.pagesCount-1},showCsvSkipButton(){return this.currentlyActivePage===this.csvUploadPagePosition},parentProfileCriteria(){let e=new n(1,25);return e.addFilter(n.equals("sourceEntity",this.profile.sourceEntity)),e.addFilter(n.equals("systemDefault",!0)),e}},watch:{"profile.sourceEntity":{handler(e){e&&this.loadSystemRequiredFieldsForEntity(e)}}},methods:{onClose(){this.$emit("close")},onFinish(){return this.saveProfile()},pageTitleSnippet(e){return`${this.$tc("sw-import-export.profile.newProfileLabel")} - ${this.$tc(e)}`},onNextAllow(){this.nextButtonDisabled=!1},onNextDisable(){this.nextButtonDisabled=!0},loadSystemRequiredFieldsForEntity(e){this.systemRequiredFields=this.importExportProfileMapping.getSystemRequiredFields(e)},saveProfile(){return this.getParentProfileSelected().then(e=>{this.checkValidation(e),0===this.missingRequiredFields.length&&this.$emit("profile-save")})},getParentProfileSelected(){return this.profileRepository.search(this.parentProfileCriteria).then(e=>e.total>0?e[0]:null).catch(()=>{this.createNotificationError({message:this.$tc("sw-import-export.profile.messageSearchParentProfileError")})})},checkValidation(e){if("export"===this.profile.type)return;let i=e?e.mapping:[],t=!1===this.profile.config.createEntities&&!0===this.profile.config.updateEntities,n=this.importExportProfileMapping.validate(this.profile.sourceEntity,this.profile.mapping,i,t);n.missingRequiredFields.length>0&&(this.missingRequiredFields=n.missingRequiredFields)},resetViolations(){this.missingRequiredFields=[]},onCurrentPageChange(e){this.currentlyActivePage=e},onNextPage(){this.$refs.wizard.nextPage()}}}},859073:function(e,i,t){var n=t(421676);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),t(745346).Z("0070d5a6",n,!0,{})}}]);