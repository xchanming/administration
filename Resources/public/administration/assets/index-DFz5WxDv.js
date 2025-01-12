const i=`{% block sw_category_detail_menu %} <sw-card class="sw-category-detail-base__menu" position-identifier="sw-category-detail-menu" :title="$tc('sw-category.base.menu.title')" :is-loading="isLoading" > {% block sw_category_detail_information_visible %} <sw-switch-field v-model:value="reversedVisibility" borderd :disabled="!acl.can('category.editor')" :label="$tc('sw-category.base.menu.visible')" /> {% endblock %} {% block sw_category_detail_menu_media %} <sw-upload-listener :key="category.id + 'uploadListener'" :upload-tag="category.id" auto-upload @media-upload-finish="onSetMediaItem" /> <sw-media-upload-v2 :key="category.id + 'upload'" :label="$tc('sw-category.base.menu.imageLabel')" variant="regular" :disabled="!acl.can('category.editor')" :source="mediaItem" :upload-tag="category.id" :allow-multi-select="false" :default-folder="category.getEntityName()" @media-drop="onMediaDropped" @media-upload-sidebar-open="showMediaModal = true" @media-upload-remove-image="onRemoveMediaItem" /> {% endblock %} {% block sw_category_detail_menu_media_modal %} <sw-media-modal-v2 v-if="showMediaModal" :allow-multi-select="false" :entity-context="category.getEntityName()" @media-modal-selection-change="onMediaSelectionChange" @modal-close="showMediaModal = false" /> {% endblock %} {% block sw_category_detail_menu_description %} <sw-text-editor :key="category.id + 'description'" v-model:value="category.description" class="sw-category-detail-base__description" type="textarea" :disabled="!acl.can('category.editor')" sanitize-input sanitize-field-name="category_translation.description" :label="$tc('sw-category.base.menu.descriptionLabel')" :placeholder="$tc('sw-category.base.menu.descriptionPlaceholder')" /> {% endblock %} </sw-card> {% endblock %}`,o={template:i,compatConfig:Cicada.compatConfig,inject:["acl","repositoryFactory"],props:{category:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},data(){return{showMediaModal:!1}},computed:{reversedVisibility:{get(){return!this.category.visible},set(e){this.category.visible=!e}},mediaItem(){return this.category!==null?this.category.media:null},mediaRepository(){return this.repositoryFactory.create("media")}},methods:{onMediaSelectionChange(e){const a=e[0];a&&this.mediaRepository.get(a.id).then(t=>{this.category.mediaId=t.id,this.category.media=t})},onSetMediaItem({targetId:e}){this.mediaRepository.get(e).then(a=>{this.category.mediaId=e,this.category.media=a})},onRemoveMediaItem(){this.category.mediaId=null,this.category.media=null},onMediaDropped(e){this.onSetMediaItem({targetId:e.id})}}};export{o as default};
//# sourceMappingURL=index-DFz5WxDv.js.map
