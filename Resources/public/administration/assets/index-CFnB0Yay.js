import{s as i}from"./string.utils-Bdo6o_1y.js";import"./camelCase-C_yyocYD.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";const t=`{% block sw_import_export_new_profile_wizard_general_page %} <div class="sw-import-export-new-profile-wizard-general-page"> {% block sw_import_export_new_profile_wizard_general_page_general %} <sw-import-export-edit-profile-general :profile="profile" /> {% endblock %} {% block sw_import_export_new_profile_wizard_general_page_indicators %} <sw-import-export-edit-profile-field-indicators :profile="profile" /> {% endblock %} {% block sw_import_export_new_profile_wizard_general_page_import_settings %} <sw-import-export-edit-profile-import-settings v-if="profile.type !== 'export'" :profile="profile" /> {% endblock %} </div> {% endblock %}`,s={template:t,compatConfig:Cicada.compatConfig,emits:["next-allow","next-disable"],props:{profile:{type:Object,required:!0}},computed:{inputValid(){return this.isFieldFilled(this.profile.sourceEntity)&&this.isFieldFilled(this.profile.type)&&this.isFieldFilled(this.profile.label)}},watch:{inputValid:{immediate:!0,handler(e){if(e){this.$emit("next-allow");return}this.$emit("next-disable")}}},methods:{isFieldFilled(e){return!!e||!i.isEmptyOrSpaces(e)}}};export{s as default};
//# sourceMappingURL=index-CFnB0Yay.js.map
