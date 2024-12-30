"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[40483],{640483:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var i={template:'\n{% block sw_category_detail_menu %}\n<sw-card\n    class="sw-category-detail-base__menu"\n    position-identifier="sw-category-detail-menu"\n    :title="$tc(\'sw-category.base.menu.title\')"\n    :is-loading="isLoading"\n>\n\n    \n    {% block sw_category_detail_information_visible %}\n    <sw-switch-field\n        v-model:value="reversedVisibility"\n        borderd\n        :disabled="!acl.can(\'category.editor\')"\n        :label="$tc(\'sw-category.base.menu.visible\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_category_detail_menu_media %}\n    <sw-upload-listener\n        :key="category.id + \'uploadListener\'"\n        :upload-tag="category.id"\n        auto-upload\n        @media-upload-finish="onSetMediaItem"\n    />\n    <sw-media-upload-v2\n        :key="category.id + \'upload\'"\n        :label="$tc(\'sw-category.base.menu.imageLabel\')"\n        variant="regular"\n        :disabled="!acl.can(\'category.editor\')"\n        :source="mediaItem"\n        :upload-tag="category.id"\n        :allow-multi-select="false"\n        :default-folder="category.getEntityName()"\n        @media-drop="onMediaDropped"\n        @media-upload-sidebar-open="showMediaModal = true"\n        @media-upload-remove-image="onRemoveMediaItem"\n    />\n    {% endblock %}\n\n    \n    {% block sw_category_detail_menu_media_modal %}\n    <sw-media-modal-v2\n        v-if="showMediaModal"\n        :allow-multi-select="false"\n        :entity-context="category.getEntityName()"\n        @media-modal-selection-change="onMediaSelectionChange"\n        @modal-close="showMediaModal = false"\n    />\n    {% endblock %}\n\n    \n    {% block sw_category_detail_menu_description %}\n    <sw-text-editor\n        :key="category.id + \'description\'"\n        v-model:value="category.description"\n        class="sw-category-detail-base__description"\n        type="textarea"\n        :disabled="!acl.can(\'category.editor\')"\n        sanitize-input\n        sanitize-field-name="category_translation.description"\n        :label="$tc(\'sw-category.base.menu.descriptionLabel\')"\n        :placeholder="$tc(\'sw-category.base.menu.descriptionPlaceholder\')"\n    />\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["acl","repositoryFactory"],props:{category:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},data(){return{showMediaModal:!1}},computed:{reversedVisibility:{get(){return!this.category.visible},set(e){this.category.visible=!e}},mediaItem(){return null!==this.category?this.category.media:null},mediaRepository(){return this.repositoryFactory.create("media")}},methods:{onMediaSelectionChange(e){let a=e[0];a&&this.mediaRepository.get(a.id).then(e=>{this.category.mediaId=e.id,this.category.media=e})},onSetMediaItem({targetId:e}){this.mediaRepository.get(e).then(a=>{this.category.mediaId=e,this.category.media=a})},onRemoveMediaItem(){this.category.mediaId=null,this.category.media=null},onMediaDropped(e){this.onSetMediaItem({targetId:e.id})}}}}}]);