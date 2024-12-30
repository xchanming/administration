(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[51378],{867314:function(){},51378:function(n,s,e){"use strict";e.r(s),e.d(s,{default:function(){return o}}),e(453306);var o={template:'\n{% block sw_extension_permissions_modal %}\n<sw-modal\n    class="sw-extension-permissions-modal"\n    :title="modalTitle"\n    variant="small"\n    v-on="listeners"\n>\n    \n    {% block sw_extension_permissions_modal_content %}\n    \n    {% block sw_extension_permissions_modal_intro %}\n    <div class="sw-extension-permissions-modal__intro">\n        \n        {% block sw_extension_permissions_modal_intro_image %}\n        <img\n            class="sw-extension-permissions-modal__image"\n            :src="assetFilter(\'/administration/static/img/extension-store/permissions.svg\')"\n            alt=""\n        >\n        {% endblock %}\n\n        \n        {% block sw_extension_permissions_modal_intro_text %}\n        <p class="sw-extension-permissions-modal__description">\n            {{ descriptionText }}\n        </p>\n\n        <p\n            v-if="domainsList.length > 0"\n            class="sw-extension-permissions-modal__domain-hint"\n        >\n            {{ $tc(\'sw-extension-store.component.sw-extension-permissions-modal.domainHint\') }}\n        </p>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_extension_permissions_modal_categories %}\n    <div class="sw-extension-permissions-modal__categories">\n        \n        {% block sw_extension_permissions_modal_category %}\n        <div\n            v-for="(permission, key) in permissionsWithGroupedOperations"\n            :key="key"\n            class="sw-extension-permissions-modal__category"\n        >\n            \n            {% block sw_extension_permissions_modal_category_inner %}\n            \n            {% block sw_extension_permissions_modal_category_label %}\n            <span class="sw-extension-permissions-modal__category-label">\n                {{ categoryLabel(key) }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_extension_permissions_modal_link %}\n            <sw-button\n                class="sw-extension-permissions-modal__link"\n                @click="openDetailsModal(key)"\n            >\n                {{ $tc(\'sw-extension-store.component.sw-extension-permissions-modal.textEntities\') }}\n                <sw-icon\n                    name="regular-long-arrow-right"\n                    size="12px"\n                />\n            </sw-button>\n            {% endblock %}\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_extension_permissions_modal_category_domains %}\n        <div\n            v-if="domainsList.length > 0"\n            class="sw-extension-permissions-modal__category"\n        >\n            <span class="sw-extension-permissions-modal__category-label">\n                {{ $tc(\'sw-extension-store.component.sw-extension-permissions-modal.domains\') }}\n            </span>\n\n            <sw-button\n                class="sw-extension-permissions-modal__link"\n                @click="toggleDomainsModal(true)"\n            >\n                {{ $tc(\'sw-extension-store.component.sw-extension-permissions-modal.showDomains\') }}\n\n                <sw-icon\n                    name="regular-long-arrow-right"\n                    size="12px"\n                />\n            </sw-button>\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_extension_permissions_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_extension_permissions_modal_footer_inner %}\n        \n        {% block sw_extension_permissions_modal_footer_close %}\n        <sw-button\n            :variant="actionLabel === null ? \'primary\' : \'\'"\n            size="small"\n            @click="close"\n        >\n            {{ closeBtnLabel }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_extension_permissions_modal_footer_action %}\n        <sw-button\n            v-if="actionLabel"\n            variant="primary"\n            size="small"\n            @click="closeWithAction"\n        >\n            {{ actionLabel }}\n        </sw-button>\n        {% endblock %}\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_permissions_modal_details %}\n    <sw-extension-permissions-details-modal\n        v-if="showDetailsModal"\n        :modal-title="modalTitle"\n        :permissions="permissionsWithGroupedOperations"\n        :selected-entity="selectedEntity"\n        @modal-close="closeDetailsModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_extension_permissions_modal_domains %}\n    <sw-extension-domains-modal\n        v-if="showDomainsModal"\n        :extension-label="extensionLabel"\n        :domains="domainsList"\n        @modal-close="toggleDomainsModal(false)"\n    />\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,emits:["modal-close","close-with-action"],props:{permissions:{type:Object,required:!0},domains:{type:Array,required:!1,default:()=>[]},extensionLabel:{type:String,required:!0},actionLabel:{type:String,required:!1,default:null},closeLabel:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null}},data(){return{showDetailsModal:!1,showDomainsModal:!1,selectedEntity:""}},computed:{modalTitle(){return this.title?this.title:this.$tc("sw-extension-store.component.sw-extension-permissions-modal.title",1,{extensionLabel:this.extensionLabel})},permissionsWithGroupedOperations(){return Object.fromEntries(Object.entries(this.permissions).map(([n,s])=>[n,s=s.reduce((n,s)=>{let e=s.entity;return"additional_privileges"===e?n[s.operation]=[]:n[e]=(n[e]||[]).concat(s.operation),n},{})]))},domainsList(){return this.domains&&Array.isArray(this.domains)?this.domains:[]},closeBtnLabel(){return this.closeLabel?this.closeLabel:this.$tc("global.sw-modal.labelClose")},descriptionText(){return this.description?this.description:this.$tc("sw-extension-store.component.sw-extension-permissions-modal.description",1,{extensionLabel:this.extensionLabel})},assetFilter(){return Cicada.Filter.getByName("asset")},listeners(){return this.isCompatEnabled("INSTANCE_LISTENERS")?this.$listeners:{}}},methods:{close(){this.$emit("modal-close")},closeWithAction(){this.$emit("close-with-action")},categoryLabel(n){return this.$tc(`entityCategories.${n}.title`)},openDetailsModal(n){this.selectedEntity=n,this.showDetailsModal=!0},closeDetailsModal(){this.selectedEntity="",this.showDetailsModal=!1},toggleDomainsModal(n){this.showDomainsModal=!!n}}}},453306:function(n,s,e){var o=e(867314);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals),e(745346).Z("465ae36e",o,!0,{})}}]);