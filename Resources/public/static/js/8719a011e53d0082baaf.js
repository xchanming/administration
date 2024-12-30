(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[11156],{977933:function(){},11156:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return n}}),s(544712);var n={template:'\n{% block sw_users_permissions_detailed_additional_permissions %}\n<sw-card\n    class="sw-users-permissions-detailed-additional-permissions"\n    position-identifier="sw-users-permissions-detailed-additional-permissions"\n    :title="$tc(\'sw-users-permissions.roles.detailed-additional-permissions.title\')"\n>\n    \n    {% block sw_users_permissions_detailed_additional_permissions_additional_privileges %}\n    <template\n        v-for="privilege in detailedAdditionalPermissions"\n        :key="privilege.key"\n    >\n        \n        {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_headline %}\n        <h4\n            :class="\'sw-users-permissions-additional-permissions_\' + privilege.key"\n        >\n            \n            {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_headline_content %}\n            <strong>\n                {{ $tc(\'sw-privileges.additional_permissions.\' + privilege.key + \'.label\') }}\n            </strong>\n            {% endblock %}\n        </h4>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_switches %}\n        <div\n            class="sw-users-permissions-detailed-additional-permissions__switches"\n        >\n            \n            {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_switches_content %}\n            <template\n                v-for="(value, roleName) in privilege.roles"\n                :key="roleName"\n            >\n                \n                {% block sw_users_permissions_detailed_additional_permissions_additional_privileges_switches_content_switch %}\n                <sw-switch-field\n                    :class="\'sw_users_permissions_detailed_additional_permissions_\' + privilege.key + \'_\' + roleName"\n                    :value="isEntitySelected(roleName)"\n                    :disabled="isEntityDisabled(roleName) || disabled"\n                    :label="roleName"\n                    :bordered="true"\n                    @update:value="changePermissionForEntity(roleName)"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["privileges","aclApiService"],props:{role:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1},detailedPrivileges:{type:Array,required:!0}},data(){return{detailedAdditionalPermissions:[]}},computed:{allGeneralSelectedPrivileges(){return this.privileges.getPrivilegesForAdminPrivilegeKeys(this.role.privileges)}},created(){this.createdComponent()},methods:{createdComponent(){this.setDetailedAdditionalPermissions()},setDetailedAdditionalPermissions(){this.aclApiService.additionalPrivileges().then(e=>{let i={};e.forEach(e=>{i[e]={privileges:[e],dependencies:[]}}),this.detailedAdditionalPermissions.push({category:"additional_permissions",parent:null,key:"routes",roles:i})})},isEntitySelected(e){return[...this.allGeneralSelectedPrivileges,...this.detailedPrivileges].includes(e)},isEntityDisabled(e){return!!this.disabled||this.allGeneralSelectedPrivileges.includes(e)},changePermissionForEntity(e){let i=this.detailedPrivileges.indexOf(e);if(i>=0){this.detailedPrivileges.splice(i,1);return}this.detailedPrivileges.push(e)}}}},544712:function(e,i,s){var n=s(977933);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),s(745346).Z("59b843f8",n,!0,{})}}]);