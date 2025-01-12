"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[70914],{170914:function(e,t,s){s.r(t),s.d(t,{default:function(){return i}});var i={template:'\n{% block sw_settings_custom_field_set_detail_base %}\n<sw-card\n    class="sw-settings-custom-field-set-detail-base"\n    position-identifier="sw-custom-field-detail-base"\n    :title="$tc(\'sw-settings-custom-field.set.detail.titleCardInformation\')"\n>\n    \n    {% block sw_settings_custom_field_set_detail_base_technical_name %}\n    <sw-text-field\n        v-model:value="set.name"\n        name="sw-field--set-name"\n        class="sw-settings-custom-field-set-detail-base__technical-name"\n        :label="$tc(`sw-settings-custom-field.set.detail.labelTechnicalName`)"\n        :help-text="$tc(\'sw-settings-custom-field.general.tooltipTechnicalName\')"\n        :disabled="!set._isNew || !acl.can(\'custom_field.editor\') || undefined"\n        :error="technicalNameError"\n        required\n        @update:value="onTechnicalNameChange"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_base_position %}\n    <sw-number-field\n        v-model:value="set.position"\n        name="sw-field--set-position"\n        class="sw-settings-custom-field-set-detail-base__base-postion"\n        :disabled="!acl.can(\'custom_field.editor\') || undefined"\n        :label="$tc(`sw-settings-custom-field.set.detail.labelPosition`)"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_base_translated %}\n    <sw-switch-field\n        v-if="set.config"\n        v-model:value="set.config.translated"\n        name="sw-field--set-config-translated"\n        class="sw-settings-custom-field-set-detail-base__base-translation"\n        :disabled="!acl.can(\'custom_field.editor\') || undefined"\n        :label="$tc(\'sw-settings-custom-field.set.detail.labelCheckboxTranslated\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_base_labels %}\n    <sw-custom-field-translated-labels\n        v-if="set.config"\n        v-model:config="set.config"\n        :disabled="!acl.can(\'custom_field.editor\') || undefined"\n        :property-names="propertyNames"\n        :locales="locales"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_base_multi_select %}\n    <sw-multi-select\n        id="entities"\n        class="sw-settings-custom-field-set-detail-base__label-entities"\n        :disabled="!acl.can(\'custom_field.editor\') || undefined"\n        :label="$tc(\'sw-settings-custom-field.set.detail.labelEntities\')"\n        :options="relationEntityNames"\n        value-property="entityName"\n        label-property="entityName"\n        :value="selectedRelationEntityNames"\n        :search-function="searchRelationEntityNames"\n        @item-add="onAddRelation"\n        @item-remove="onRemoveRelation"\n    >\n        <template #result-label-property="{ item }">\n            {{ $tc(`global.entities.${item.entityName}`, 2) }}\n        </template>\n\n        <template #selection-label-property="{ item }">\n            {{ $tc(`global.entities.${item.entityName}`, 2) }}\n        </template>\n\n    </sw-multi-select>\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_base_entities %}\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["customFieldDataProviderService","acl"],emits:["reset-errors"],props:{set:{type:Object,required:!0,default(){return{}}},technicalNameError:{type:Object,required:!1,default:null}},data(){return{propertyNames:{label:this.$tc("sw-settings-custom-field.customField.detail.labelLabel")}}},computed:{locales(){return this.set.config.translated&&!0===this.set.config.translated?Object.keys(this.$root.$i18n.messages):[this.$root.$i18n.fallbackLocale]},customFieldSetRelationRepository(){if(this.set.relations)return Cicada.Service("repositoryFactory").create(this.set.relations.entity,this.set.relations.source)},selectedRelationEntityNames(){return this.set.relations?this.set.relations.map(e=>e.entityName):[]},relationEntityNames(){return this.set.relations?this.customFieldDataProviderService.getEntityNames().map(e=>{let t=this.customFieldSetRelationRepository.create();return t.entityName=e,this.isCompatEnabled("INSTANCE_SET")?this.$set(t,"searchField",{}):t.searchField={},Object.keys(this.$root.$i18n.messages).forEach(s=>{this.$te(`global.entities.${e}`)&&(this.isCompatEnabled("INSTANCE_SET")?this.$set(t.searchField,s,this.$tc(`global.entities.${e}`,2,s)):t.searchField[s]=this.$tc(`global.entities.${e}`,2,s))}),t}):[]}},methods:{onAddRelation(e){this.set.relations.push(e)},onRemoveRelation(e){let t=this.set.relations.find(t=>t.entityName===e.entityName);t&&this.set.relations.remove(t.id)},searchRelationEntityNames({options:e,searchTerm:t}){let s=t.toLowerCase();return e.filter(e=>Object.values(e.searchField).some(e=>e.toLowerCase().includes(s)))},onTechnicalNameChange(){this.$emit("reset-errors")}}}}}]);