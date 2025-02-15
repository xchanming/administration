const c=`{% block sw_media_quickinfo %} <div class="sw-media-quickinfo"> {% block sw_media_quickinfo_broken_file %} <sw-alert v-if="!item.hasFile" class="sw-media-quickinfo__alert-file-missing" variant="warning" :title="$tc('sw-media.sidebar.infoMissingFile.titleMissingFile')" > {{ $tc('sw-media.sidebar.infoMissingFile.descriptionMissingFile') }} </sw-alert> {% endblock %} {% block sw_media_quickinfo_quickactions %} <sw-media-collapse v-if="editable" :title="$tc('sw-media.sidebar.sections.actions')" :expand-on-loading="true" > <template #content> {% block sw_media_quickinfo_quickactions_content %} <ul class="sw-media-sidebar__quickactions-list"> {% block sw_media_quickinfo_quickactions_replace %} <li v-if="!item.private" v-tooltip="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('media.editor'), showOnDisabledElements: true }" class="quickaction--replace" :class="quickActionClasses(!acl.can('media.editor'))" role="button" tabindex="0" @click="openModalReplace" @keydown.enter="openModalReplace" > <sw-icon small name="regular-files" class="sw-media-sidebar__quickactions-icon" /> {{ $tc('sw-media.sidebar.actions.replace') }} </li> {% endblock %} {% block sw_media_quickinfo_quickactions_download %} <li v-if="item.hasFile" class="sw-media-sidebar__quickaction quickaction--download" > <sw-external-link :href="item.url" download > <sw-icon small name="regular-cloud-download" class="sw-media-sidebar__quickactions-icon" /> {{ $tc('sw-media.sidebar.actions.download') }} </sw-external-link> </li> {% endblock %} {% block sw_media_quickinfo_quickactions_move %} <li v-tooltip="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('media.editor'), showOnDisabledElements: true }" class="quickaction--move" :class="quickActionClasses(!acl.can('media.editor'))" role="button" tabindex="0" @click="openModalMove" @keydown.enter="openModalMove" > <sw-icon small name="regular-file-export" class="sw-media-sidebar__quickactions-icon" /> {{ $tc('sw-media.sidebar.actions.move') }} </li> {% endblock %} {% block sw_media_quickinfo_quickactions_copy_link %} <li v-if="item.hasFile" class="sw-media-sidebar__quickaction quickaction--copy-link" role="button" tabindex="0" @click="copyLinkToClipboard" @keydown.enter="copyLinkToClipboard" > <sw-icon small name="regular-link" class="sw-media-sidebar__quickactions-icon" /> {{ $tc('sw-media.sidebar.actions.copyLink') }} </li> {% endblock %} {% block sw_media_quickinfo_quickactions_delete %} <li v-if="!item.private" v-tooltip="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('media.deleter'), showOnDisabledElements: true }" class="quickaction--delete" :class="quickActionClasses(!acl.can('media.deleter'))" role="button" tabindex="0" @click="openModalDelete" @keydown.enter="openModalDelete" > <sw-icon small name="regular-trash" class="sw-media-sidebar__quickactions-icon is--danger" /> {{ $tc('sw-media.sidebar.actions.delete') }} </li> {% endblock %} </ul> {% endblock %} </template> </sw-media-collapse> {% endblock %} {# @experimental stableVersion:v6.8.0 feature:SPATIAL_BASES #} {% block sw_media_quickinfo_spatial_configuration %} <sw-media-collapse v-if="isSpatial" :title="$tc('sw-media.sidebar.sections.configuration')" :expand-on-loading="true" > <template #content> <sw-inherit-wrapper v-model:value="arReady" :inherited-value="defaultArReady" @update:value="toggleAR" > <template #content="props"> <sw-switch-field :map-inheritance="props" :help-text="buildAugmentedRealityTooltip('sw-media.sidebar.actions.arHelpText')" :label="$tc('sw-media.sidebar.actions.ar')" :disabled="props.isInherited || !editable" :value="props.currentValue" class="sw-media-sidebar__quickactions-switch ar-ready-toggle" @update:value="props.updateCurrentValue" /> </template> </sw-inherit-wrapper> </template> </sw-media-collapse> {% endblock %} {% block sw_media_quickinfo_preview %} <sw-media-collapse v-if="item.hasFile" :expand-on-loading="true" :title="$tc('sw-media.sidebar.sections.preview')" > {% block sw_media_quickinfo_preview_content %} <template #content> <div> {% block sw_media_quickinfo_preview_item %} <sw-media-preview-v2 class="sw-media-quickinfo__media-preview" :source="item.id" :show-controls="true" :use-thumbnails="false" /> {% endblock %} </div> </template> {% endblock %} </sw-media-collapse> {% endblock %} {% block sw_media_quickinfo_metadata %} <sw-media-collapse v-if="item.hasFile" :expand-on-loading="true" :title="$tc('sw-media.sidebar.sections.metadata')" > {% block sw_media_quickinfo_metadata_content %} <template #content> <dl class="sw-media-sidebar__metadata-list"> {% block sw_media_quickinfo_metadata_content_base %} <sw-media-quickinfo-metadata-item class="sw-media-quickinfo-metadata-name" :class="fileNameClasses" :label-name="$tc('sw-media.sidebar.metadata.name')" :truncated="false" > <sw-confirm-field v-if="editable" ref="inlineEditFieldName" class="sw-media-quickinfo-metadata-name" :disabled="!acl.can('media.editor')" compact :value="item.fileName" :error="fileNameError" @input="onChangeFileName" @remove-error="onRemoveFileNameError" /><template v-else> {{ item.fileName }} </template> </sw-media-quickinfo-metadata-item> <sw-media-quickinfo-metadata-item class="sw-media-quickinfo-metadata-file-type" :label-name="$tc('sw-media.sidebar.metadata.fileType')" > {{ item.fileExtension.toUpperCase() }} </sw-media-quickinfo-metadata-item> <sw-media-quickinfo-metadata-item class="sw-media-quickinfo-metadata-alt-field" :label-name="$tc('sw-media.sidebar.metadata.altText')" :truncated="false" > <sw-confirm-field v-if="editable" ref="inlineEditFieldAlt" :disabled="!acl.can('media.editor')" compact :placeholder="placeholder(item, 'alt', $tc('sw-media.sidebar.metadata.altText'))" :value="item.alt" @input="onSubmitAltText" /><template v-else> {{ placeholder(item, 'alt') }} </template> </sw-media-quickinfo-metadata-item> <sw-media-quickinfo-metadata-item class="sw-media-quickinfo-metadata-alt-field" :label-name="$tc('sw-media.sidebar.metadata.title')" :truncated="false" > <sw-confirm-field v-if="editable" ref="inlineEditFieldTitle" :disabled="!acl.can('media.editor')" compact :value="item.title" :placeholder="placeholder(item, 'title', $tc('sw-media.sidebar.metadata.title'))" @input="onSubmitTitle" /><template v-else> {{ placeholder(item, 'title') }} </template> </sw-media-quickinfo-metadata-item> <sw-media-quickinfo-metadata-item class="sw-media-quickinfo-metadata-mimeType" :label-name="$tc('sw-media.sidebar.metadata.mimeType')" > {{ item.mimeType }} </sw-media-quickinfo-metadata-item> <sw-media-quickinfo-metadata-item class="sw-media-quickinfo-metadata-size" :label-name="$tc('sw-media.sidebar.metadata.fileSize')" > {{ fileSize }} </sw-media-quickinfo-metadata-item> <sw-media-quickinfo-metadata-item class="sw-media-quickinfo-metadata-createdAt" :label-name="$tc('sw-media.sidebar.metadata.createdAt')" > {{ createdAt }} </sw-media-quickinfo-metadata-item> {% endblock %} <template v-if="item.metaData"> {% block sw_media_quickinfo_metadata_specific_meta_data %} <template v-if="item.mediaType.name === 'IMAGE'"> {% block sw_media_quickinfo_metadata_content_image %} <sw-media-quickinfo-metadata-item v-if="item.metaData.width" class="sw-media-quickinfo-metadata-width" :label-name="$tc('sw-media.sidebar.metadata.width')" > {{ item.metaData.width }}px </sw-media-quickinfo-metadata-item> <sw-media-quickinfo-metadata-item v-if="item.metaData.height" class="sw-media-quickinfo-metadata-height" :label-name="$tc('sw-media.sidebar.metadata.height')" > {{ item.metaData.height }}px </sw-media-quickinfo-metadata-item> {% endblock %} </template> {% endblock %} </template> </dl> </template> {% endblock %} </sw-media-collapse> {% endblock %} {% block sw_media_quickinfo_tags %} <sw-media-tag :disabled="!acl.can('media.editor')" :media="item" /> {% endblock %} {% block sw_media_quickinfo_usage %} <sw-media-collapse v-if="editable && item.hasFile" :expand-on-loading="true" :title="$tc('sw-media.sidebar.sections.usage')" > <template #content> <sw-media-quickinfo-usage :item="item" /> </template> </sw-media-collapse> {% endblock %} {% block sw_media_quickinfo_modal_replace %} <sw-media-modal-replace v-if="showModalReplace" :item-to-replace="item" @media-replace-modal-item-replaced="emitRefreshMediaLibrary" @media-replace-modal-close="closeModalReplace" /> {% endblock %} {% block sw_media_quickinfo_modal_delete %} <sw-media-modal-delete v-if="showModalDelete" :items-to-delete="[item]" @media-delete-modal-close="closeModalDelete" @media-delete-modal-items-delete="deleteSelectedItems" /> {% endblock %} {% block sw_media_quickinfo_move_modal %} <sw-media-modal-move v-if="showModalMove" :items-to-move="[item]" @media-move-modal-close="closeModalMove" @media-move-modal-items-move="onFolderMoved" /> {% endblock %} {% block sw_media_quickinfo_custom_field_sets %} <sw-custom-field-set-renderer :key="item.id" :disabled="!acl.can('media.editor')" :entity="item" variant="media-collapse" :sets="customFieldSets" :is-loading="isLoading" :is-save-successful="isSaveSuccessful" @save="onSaveCustomFields(item)" @process-finish="saveFinish" /> {% endblock %} </div> {% endblock %}`,{Mixin:l,Context:o,Utils:m}=Shopware,{dom:n,format:d}=m,r={template:c,inject:["mediaService","repositoryFactory","acl","customFieldDataProviderService","systemConfigApiService"],emits:["media-item-rename-success","media-item-replaced","update:item"],mixins:[l.getByName("notification"),l.getByName("media-sidebar-modal-mixin"),l.getByName("placeholder")],props:{item:{required:!0,type:Object,validator(e){return e.getEntityName()==="media"}},editable:{type:Boolean,required:!1,default:!1}},data(){return{customFieldSets:[],isLoading:!1,isSaveSuccessful:!1,showModalReplace:!1,fileNameError:null,arReady:!1,defaultArReady:!1}},computed:{mediaRepository(){return this.repositoryFactory.create("media")},isMediaObject(){return this.item.type==="media"},fileSize(){return d.fileSize(this.item.fileSize)},createdAt(){const e=this.item.uploadedAt||this.item.createdAt;return d.date(e)},fileNameClasses(){return{"has--error":this.fileNameError}},isSpatial(){var e,i,a;return((e=this.item)==null?void 0:e.fileExtension)==="glb"||!!((a=(i=this.item)==null?void 0:i.url)!=null&&a.endsWith(".glb"))}},watch:{"item.id":{handler(){this.fetchSpatialItemConfig(),this.fileNameError=null}}},created(){this.createdComponent()},methods:{createdComponent(){this.loadCustomFieldSets(),this.fetchSpatialItemConfig()},fetchSpatialItemConfig(){this.systemConfigApiService.getValues("core.media").then(e=>{this.defaultArReady=e["core.media.defaultEnableAugmentedReality"]}),this.mediaRepository.get(this.item.id,Shopware.Context.api).then(e=>{var i,a;this.arReady=(a=(i=e==null?void 0:e.config)==null?void 0:i.spatial)==null?void 0:a.arReady})},buildAugmentedRealityTooltip(e){const i={name:"sw.settings.media.index"},t={settingsLink:this.$router.resolve(i).href};return this.$tc(e,0,t)},loadCustomFieldSets(){return this.customFieldDataProviderService.getCustomFieldSets("media").then(e=>{this.customFieldSets=e})},async onSaveCustomFields(e){this.isSaveSuccessful=!1,this.isLoading=!0,await this.mediaRepository.save(e,o.api),this.isSaveSuccessful=!0,this.isLoading=!1},saveFinish(){this.isSaveSuccessful=!1},async copyLinkToClipboard(){if(this.item)try{await n.copyStringToClipboard(this.item.url),this.createNotificationSuccess({message:this.$tc("sw-media.general.notification.urlCopied.message")})}catch{this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.sw-field.notification.notificationCopyFailureMessage")})}},async onSubmitTitle(e){this.item.title=e;try{await this.mediaRepository.save(this.item,o.api)}catch{this.$refs.inlineEditFieldTitle.cancelSubmit()}},async onSubmitAltText(e){this.item.alt=e;try{await this.mediaRepository.save(this.item,o.api)}catch{this.$refs.inlineEditFieldAlt.cancelSubmit()}},async onChangeFileName(e){const{item:i}=this;i.isLoading=!0,this.fileNameError=null;try{await this.mediaService.renameMedia(i.id,e).catch(a=>{const t=["CONTENT__MEDIA_EMPTY_FILE","CONTENT__MEDIA_ILLEGAL_FILE_NAME"];return a.response.data.errors.forEach(s=>{this.fileNameError||!t.includes(s.code)||(this.fileNameError=s)}),Promise.reject(a)}),i.fileName=e,this.createNotificationSuccess({message:this.$tc("global.sw-media-media-item.notification.renamingSuccess.message")}),this.$emit("media-item-rename-success",i)}catch(a){a.response.data.errors.forEach(s=>{this.handleErrorMessage(s)})}finally{i.isLoading=!1}},handleErrorMessage(e){switch(e.code){case"CONTENT__MEDIA_FILE_NAME_IS_TOO_LONG":this.createNotificationError({message:this.$tc("global.sw-media-media-item.notification.fileNameTooLong.message",{length:e.meta.parameters.maxLength},0)});break;default:this.createNotificationError({message:this.$tc("global.sw-media-media-item.notification.renamingError.message")})}},openModalReplace(){this.acl.can("media.editor")&&(this.showModalReplace=!0)},closeModalReplace(){this.showModalReplace=!1},emitRefreshMediaLibrary(){this.closeModalReplace(),this.$nextTick(()=>{this.$emit("media-item-replaced")})},quickActionClasses(e){return["sw-media-sidebar__quickaction",{"sw-media-sidebar__quickaction--disabled":e}]},onRemoveFileNameError(){this.fileNameError=null},toggleAR(e){const i={spatial:{arReady:e,updatedAt:Date.now()}},a={config:{...this.item.config,...i}};this.$emit("update:item",{...this.item,...a})}}};export{r as default};
