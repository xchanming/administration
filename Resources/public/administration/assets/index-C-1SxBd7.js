import{m as e}from"./main-BVD2thQ1.js";import"./channel-Cvr-E4M4.js";import"./administration-d9Z5Qnc-.js";const r=`{% block sw_import_export_edit_profile_indicators %} <div class="sw-import-export-edit-profile-indicators"> {% block sw_import_export_edit_profile_indicators_headline %} <h3>{{ $tc('sw-import-export.profile.indicatorHeadline') }}</h3> {% endblock %} {% block sw_import_export_edit_profile_indicators_text %} <p class="sw-import-export-edit-profile-indicators__text"> {{ $tc('sw-import-export.profile.csvDescriptionBlock') }} </p> {% endblock %} <sw-container columns="repeat(2, 1fr)" gap="0 32px" > {% block sw_import_export_edit_profile_indicators_separator_field %} <sw-single-select v-model:value="profile.delimiter" required show-clearable-button class="sw-import-export-edit-profile-indicators__separator-select" :label="$tc('sw-import-export.profile.separatorFieldLabel')" :error="profileDelimiterError" :disabled="profile.systemDefault" :options="supportedDelimiter" /> {% endblock %} {% block sw_import_export_edit_profile_indicators_enclosure_field %} <sw-single-select v-model:value="profile.enclosure" required show-clearable-button class="sw-import-export-edit-profile-indicators__enclosure-select" :label="$tc('sw-import-export.profile.enclosureFieldLabel')" :error="profileEnclosureError" :disabled="profile.systemDefault" :options="supportedEnclosures" /> {% endblock %} </sw-container> </div> {% endblock %}`,l={template:r,props:{profile:{type:Object,required:!0}},computed:{...e("profile",["delimiter","enclosure"]),supportedDelimiter(){return[{value:"^",label:this.$tc("sw-import-export.profile.caretsLabel")},{value:",",label:this.$tc("sw-import-export.profile.commasLabel")},{value:";",label:this.$tc("sw-import-export.profile.semicolonLabel")}]},supportedEnclosures(){return[{value:'"',label:this.$tc("sw-import-export.profile.doubleQuoteLabel")}]}}};export{l as default};
