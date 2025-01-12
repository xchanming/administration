const c=`{% block sw_media_upload_v2 %} <div class="sw-media-upload-v2"> {% block sw_media_upload_v2_compact %} <div v-if="variant == 'compact'" class="sw-media-upload-v2__content" > <sw-button-group split-button > {% block sw_media_upload_v2_compact_button_file_upload %} <sw-button class="sw-media-upload-v2__button-compact-upload" :disabled="disabled" variant="primary" @click="onClickUpload" > {{ buttonFileUploadLabel }} </sw-button> {% endblock %} {% block sw_media_upload_v2_compact_button_context_menu %} <sw-context-button v-if="uploadUrlFeatureEnabled" :disabled="disabled" class="sw-media-upload-v2__button-open-context-menu" > <template #button> <sw-button :disabled="disabled" square variant="primary" class="sw-media-upload-v2__button-context-menu" > <sw-icon name="regular-chevron-down-xs" /> </sw-button> </template> {% block sw_media_upload_v2_compact_button_context_menu_actions %} <sw-context-menu-item class="sw-media-upload-v2__button-url-upload" @click="useUrlUpload" > {{ $tc('global.sw-media-upload-v2.buttonUrlUpload') }} </sw-context-menu-item> {% endblock %} </sw-context-button> {% endblock %} </sw-button-group> {% block sw_media_upload_v2_compact_url_form %} <sw-media-url-form v-if="isUrlUpload" variant="modal" @modal-close="useFileUpload" @media-url-form-submit="onUrlUpload" /> {% endblock %} </div> {% endblock %} {% block sw_media_upload_v2_regular %} <div v-if="variant == 'regular' || variant == 'small'" class="sw-media-upload-v2__content" > {% block sw_media_upload_v2_regular_header %} <div class="sw-media-upload-v2__header"> {% block sw_media_upload_v2_regular_header_label %} <label v-if="label" class="sw-media-upload-v2__label" :class="swFieldLabelClasses" > {{ label }} </label> {% endblock %} {% block sw_media_upload_v2_regular_header_helptext %} <sw-help-text v-if="helpText" class="sw-media-upload-v2__help-text" :text="helpText" /> {% endblock %} {% block sw_media_upload_v2_regular_header_switch %} <sw-context-button v-if="!source && uploadUrlFeatureEnabled" class="sw-media-upload-v2__switch-mode" :disabled="disabled" aria-label="global.sw-media-upload-v2.switchMode" > {% block sw_media_upload_v2_regular_header_switch_file_upload %} <sw-context-menu-item v-if="!isFileUpload" :disabled="disabled" class="sw-media-upload-v2__button-file-upload" @click="useFileUpload" > {{ buttonFileUploadLabel }} </sw-context-menu-item> {% endblock %} {% block sw_media_upload_v2_regular_header_switch_url_upload %} <sw-context-menu-item v-if="!isUrlUpload" class="sw-media-upload-v2__button-url-upload" @click="useUrlUpload" > {{ $t('global.sw-media-upload-v2.buttonUrlUpload') }} </sw-context-menu-item> {% endblock %} </sw-context-button> {% endblock %} </div> {% endblock %} {% block sw_media_upload_v2_regular_drop_zone %} <div ref="dropzone" v-droppable="{ dragGroup: 'media', onDrop: onDropMedia, validDropCls: 'is--active' }" class="sw-media-upload-v2__dropzone" :class="isDragActiveClass" > {% block sw_media_upload_v2_preview %} <template v-if="variant === 'regular'"> {% block sw_media_upload_v2_regular_preview_file %} <sw-media-preview-v2 v-if="showPreview && (source || preview)" class="sw-media-upload-v2__preview" :source="source || preview" /> {% endblock %} {% block sw_media_upload_v2_regular_preview_fallback %} <div v-else class="sw-media-upload-v2__preview is--fallback" > <sw-icon class="sw-media-upload-v2__fallback-icon" name="regular-image" /> </div> {% endblock %} </template> <template v-if="!showPreview && variant === 'regular'"> {% block sw_media_upload_v2_regular_caption %} <div class="sw-media-upload-v2__upload-caption"> <sw-icon name="regular-cloud-upload" /> {{ $tc('global.sw-media-upload-v2.caption') }} </div> {% endblock %} </template> {% endblock %} {% block sw_media_upload_v2_actions %} <div class="sw-media-upload-v2__actions" :class="{ 'has--source': source, 'is--small': variant === 'small' }" > <div v-if="source" class="sw-media-upload-v2__file-info" > <div class="sw-media-upload-v2__file-headline"> {{ mediaNameFilter(source, source.name) }} </div> <sw-icon v-if="!disabled" class="sw-media-upload-v2__remove-icon" name="regular-times-xs" @click="onRemoveMediaItem" /> </div> <template v-else> {% block sw_media_upload_v2_regular_actions_url %} <sw-media-url-form v-if="isUrlUpload" class="sw-media-upload-v2__url-form" variant="inline" @media-url-form-submit="onUrlUpload" /> {% endblock %} {% block sw_media_upload_v2_regular_actions_add %} <template v-if="isFileUpload"> {% block sw_media_upload_v2_regular_media_sidebar_button %} <sw-button v-if="hasOpenMediaButtonListener" class="sw-media-upload-v2__button open-media-sidebar" :class="{ 'is--small': variant === 'small'}" variant="primary" size="small" :square="variant === 'small'" :disabled="disabled" @click="onClickOpenMediaSidebar" > <sw-icon v-if="variant === 'small'" name="regular-plus" size="16px" /> <template v-else> {{ $tc('global.sw-media-upload-v2.buttonOpenMedia') }} </template> </sw-button> {% endblock %} {% block sw_media_upload_v2_regular_upload_button %} <sw-button class="sw-media-upload-v2__button upload" :class="{ 'is--small': variant === 'small'}" variant="ghost" size="small" :disabled="disabled" @click="onClickUpload" > {{ buttonFileUploadLabel }} </sw-button> {% endblock %} </template> {% endblock %} </template> </div> {% endblock %} </div> {% endblock %} </div> {% endblock %} {% block sw_media_upload_v2_file_input %} <form ref="fileForm" class="sw-media-upload-v2__form" > <input id="files" ref="fileInput" class="sw-media-upload-v2__file-input" type="file" :accept="extensionAccept ? '*/*' : fileAccept" :multiple="multiSelect" @change="onFileInputChange" > </form> {% endblock %} </div> {% endblock %}`,{Mixin:p,Context:o}=Cicada,{fileReader:r}=Cicada.Utils,{fileSize:m}=Cicada.Utils.format,s="file-upload",n="url-upload",v={template:c,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","mediaService","configService","feature","fileValidationService"],emits:["media-drop","media-upload-sidebar-open","media-upload-remove-image","media-upload-add-file"],mixins:[p.getByName("notification")],props:{source:{type:[Object,String,File],required:!1,default:null},variant:{type:String,required:!1,validValues:["compact","regular","small"],validator(e){return["compact","regular","small"].includes(e)},default:"regular"},uploadTag:{type:String,required:!0},allowMultiSelect:{type:Boolean,required:!1,default:!0},addFilesOnMultiselect:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null},buttonLabel:{type:String,required:!1,default:""},defaultFolder:{type:String,required:!1,validator(e){return e.length>0},default:null},targetFolderId:{type:String,required:!1,default:null},helpText:{type:String,required:!1,default:null},sourceContext:{type:Object,required:!1,default:null},fileAccept:{type:String,required:!1,default:"*/*"},extensionAccept:{type:String,required:!1,default:null},maxFileSize:{type:Number,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},privateFilesystem:{type:Boolean,required:!1,default:!1},useFileData:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},onMediaUploadSidebarOpen:{type:Function,required:!1,default:null}},data(){return{multiSelect:this.allowMultiSelect,inputType:s,preview:null,isDragActive:!1,defaultFolderId:null,isUploadUrlFeatureEnabled:!1,isLoading:!1}},computed:{defaultFolderRepository(){return this.repositoryFactory.create("media_default_folder")},mediaRepository(){return this.repositoryFactory.create("media","",{keepApiErrors:!0})},showPreview(){return!this.multiSelect},hasOpenMediaButtonListener(){return this.isCompatEnabled("INSTANCE_LISTENERS")?Object.keys(this.$listeners).includes("mediaUploadSidebarOpen"):!!this.onMediaUploadSidebarOpen},isDragActiveClass(){return{"is--active":this.isDragActive,"is--multi":this.variant==="regular"&&!!this.multiSelect,"is--small":this.variant==="small"}},mediaFolderId(){return this.defaultFolderId||this.targetFolderId},isUrlUpload(){return this.inputType===n},isFileUpload(){return this.inputType===s},uploadUrlFeatureEnabled(){return this.isUploadUrlFeatureEnabled},swFieldLabelClasses(){return{"is--required":this.required}},buttonFileUploadLabel(){return this.buttonLabel===""?this.$tc("global.sw-media-upload-v2.buttonFileUpload"):this.buttonLabel},mediaNameFilter(){return Cicada.Filter.getByName("mediaName")}},watch:{async defaultFolder(){this.defaultFolderId=await this.getDefaultFolderId()},disabled(e){e&&(this.isDragActive=!1)}},created(){this.createdComponent()},mounted(){this.mountedComponent()},beforeUnmount(){this.beforeDestroyComponent()},methods:{async createdComponent(){this.mediaService.addListener(this.uploadTag,this.handleMediaServiceUploadEvent),!this.mediaFolderId&&(this.defaultFolder&&(this.isLoading=!0,this.defaultFolderId=await this.getDefaultFolderId(),this.isLoading=!1),this.configService.getConfig().then(e=>{this.isUploadUrlFeatureEnabled=e.settings.enableUrlFeature}))},mountedComponent(){this.$refs.dropzone&&(["dragover","drop"].forEach(e=>{window.addEventListener(e,this.stopEventPropagation,!1)}),this.$refs.dropzone.addEventListener("drop",this.onDrop),window.addEventListener("dragenter",this.onDragEnter),window.addEventListener("dragleave",this.onDragLeave))},beforeDestroyComponent(){this.mediaService.removeByTag(this.uploadTag),this.mediaService.removeListener(this.uploadTag,this.handleMediaServiceUploadEvent),["dragover","drop"].forEach(e=>{window.addEventListener(e,this.stopEventPropagation,!1)}),window.removeEventListener("dragenter",this.onDragEnter),window.removeEventListener("dragleave",this.onDragLeave)},onDrop(e){if(this.disabled)return;const a=Array.from(e.dataTransfer.files);this.isDragActive=!1,a.length!==0&&this.handleFileCheck(a)},onDropMedia(e){this.disabled||this.$emit("media-drop",e.mediaItem)},onDragEnter(){this.disabled||(this.isDragActive=!0)},onDragLeave(e){if(e.screenX===0&&e.screenY===0){this.isDragActive=!1;return}e.target.closest(".sw-media-upload-v2__dropzone")||(this.isDragActive=!1)},stopEventPropagation(e){e.preventDefault(),e.stopPropagation()},onClickUpload(){this.$refs.fileInput.click()},useUrlUpload(){this.inputType=n},useFileUpload(){this.inputType=s},onClickOpenMediaSidebar(){this.$emit("media-upload-sidebar-open")},onRemoveMediaItem(){this.disabled||(this.preview=null,this.$emit("media-upload-remove-image"))},async onUrlUpload({url:e,fileExtension:a}){this.multiSelect||(this.mediaService.removeByTag(this.uploadTag),this.preview=e);let i;try{i=r.getNameAndExtensionFromUrl(e)}catch{this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.sw-media-upload-v2.notification.invalidUrl.message")});return}a&&(i.extension=a);const t=this.getMediaEntityForUpload();await this.mediaRepository.save(t,o.api),this.mediaService.addUpload(this.uploadTag,{src:e,targetId:t.id,isPrivate:t.private,...i}),this.useFileUpload()},onFileInputChange(){const e=Array.from(this.$refs.fileInput.files);e.length&&(this.handleFileCheck(e),this.$refs.fileForm.reset())},async handleUpload(e){this.multiSelect?(this.preview||(this.preview=[]),this.addFilesOnMultiselect?this.preview=[...this.preview,...e]:this.preview=e):(this.mediaService.removeByTag(this.uploadTag),e=[e.pop()],this.preview=e[0]);const a=[],i=e.map(t=>{const{fileName:d,extension:u}=r.getNameAndExtensionFromFile(t),l=this.getMediaEntityForUpload();return a.push(l),{src:t,targetId:l.id,fileName:d,extension:u,isPrivate:l.private}});await this.mediaRepository.saveAll(a,o.api),await this.mediaService.addUploads(this.uploadTag,i)},getMediaEntityForUpload(){const e=this.mediaRepository.create();return e.mediaFolderId=this.mediaFolderId,e.private=this.privateFilesystem,e},async getDefaultFolderId(){return this.mediaService.getDefaultFolderId(this.defaultFolder)},handleMediaServiceUploadEvent({action:e}){e==="media-upload-fail"&&this.onRemoveMediaItem()},checkFileSize(e){return this.maxFileSize===null||e.size<=this.maxFileSize||e.fileSize<=this.maxFileSize?!0:(this.createNotificationError({message:this.$tc("global.sw-media-upload-v2.notification.invalidFileSize.message",0,{name:e.name||e.fileName,limit:m(this.maxFileSize)})}),!1)},checkFileType(e){return!(e!=null&&e.type)&&e.id&&(e.type=e.mimeType),!(e!=null&&e.name)&&e.id&&(e.name=e.fileName),(this.extensionAccept?this.fileValidationService.checkByExtension(e,this.extensionAccept):this.fileAccept?this.fileValidationService.checkByType(e,this.fileAccept):!1)?!0:(this.createNotificationError({message:this.$tc("global.sw-media-upload-v2.notification.invalidFileType.message",0,{name:e.name,supportedTypes:this.extensionAccept||this.fileAccept})}),!1)},handleFileCheck(e){const a=e.filter(i=>this.checkFileSize(i)&&this.checkFileType(i));this.useFileData?(this.preview=this.multiSelect?null:a[0],this.$emit("media-upload-add-file",a)):this.handleUpload(a)}}};export{v as default};
//# sourceMappingURL=index-B6ViCAQC.js.map
