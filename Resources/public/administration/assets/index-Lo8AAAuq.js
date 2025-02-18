const l=`{% block sw_users_permissions_detailed_additional_permissions %} <sw-card class="sw-users-permissions-detailed-additional-permissions" position-identifier="sw-users-permissions-detailed-additional-permissions" :title="$tc('sw-users-permissions.roles.detailed-additional-permissions.title')" > {% block sw_users_permissions_detailed_additional_permissions_additional_privileges %} <template v-for="privilege in detailedAdditionalPermissions" :key="privilege.key" > {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_headline %} <h4 :class="'sw-users-permissions-additional-permissions_' + privilege.key" > {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_headline_content %} <strong> {{ $tc('sw-privileges.additional_permissions.' + privilege.key + '.label') }} </strong> {% endblock %} </h4> {% endblock %} {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_switches %} <div class="sw-users-permissions-detailed-additional-permissions__switches" > {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_switches_content %} <template v-for="(value, roleName) in privilege.roles" :key="roleName" > {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_switches_content_switch %} <sw-switch-field :class="'sw_users_permissions_detailed_additional_permissions_' + privilege.key + '_' + roleName" :value="isEntitySelected(roleName)" :disabled="isEntityDisabled(roleName) || disabled" :label="roleName" :bordered="true" @update:value="changePermissionForEntity(roleName)" /> {% endblock %} </template> {% endblock %} </div> {% endblock %} </template> {% endblock %} </sw-card> {% endblock %}`,t={template:l,inject:["privileges","aclApiService"],props:{role:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1},detailedPrivileges:{type:Array,required:!0}},data(){return{detailedAdditionalPermissions:[]}},computed:{allGeneralSelectedPrivileges(){return this.privileges.getPrivilegesForAdminPrivilegeKeys(this.role.privileges)}},created(){this.createdComponent()},methods:{createdComponent(){this.setDetailedAdditionalPermissions()},setDetailedAdditionalPermissions(){this.aclApiService.additionalPrivileges().then(e=>{const i={};e.forEach(s=>{i[s]={privileges:[s],dependencies:[]}}),this.detailedAdditionalPermissions.push({category:"additional_permissions",parent:null,key:"routes",roles:i})})},isEntitySelected(e){return[...this.allGeneralSelectedPrivileges,...this.detailedPrivileges].includes(e)},isEntityDisabled(e){return this.disabled?!0:this.allGeneralSelectedPrivileges.includes(e)},changePermissionForEntity(e){const i=this.detailedPrivileges.indexOf(e);if(i>=0){this.detailedPrivileges.splice(i,1);return}this.detailedPrivileges.push(e)}}};export{t as default};
