(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[78633],{827400:function(){},378633:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return r}}),i(205367);let{Mixin:t,Context:n}=Cicada,{fileReader:l}=Cicada.Utils,{fileSize:d}=Cicada.Utils.format,o="file-upload",s="url-upload";var r={template:'\n{% block sw_media_upload_v2 %}\n<div class="sw-media-upload-v2">\n    \n    {% block sw_media_upload_v2_compact %}\n    <div\n        v-if="variant == \'compact\'"\n        class="sw-media-upload-v2__content"\n    >\n        <sw-button-group\n            split-button\n        >\n            \n            {% block sw_media_upload_v2_compact_button_file_upload %}\n            <sw-button\n                class="sw-media-upload-v2__button-compact-upload"\n                :disabled="disabled"\n                variant="primary"\n                @click="onClickUpload"\n            >\n                {{ buttonFileUploadLabel }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_media_upload_v2_compact_button_context_menu %}\n            <sw-context-button\n                v-if="uploadUrlFeatureEnabled"\n                :disabled="disabled"\n                class="sw-media-upload-v2__button-open-context-menu"\n            >\n                <template #button>\n                    <sw-button\n                        :disabled="disabled"\n                        square\n                        variant="primary"\n                        class="sw-media-upload-v2__button-context-menu"\n                    >\n                        <sw-icon name="regular-chevron-down-xs" />\n                    </sw-button>\n                </template>\n\n                \n                {% block sw_media_upload_v2_compact_button_context_menu_actions %}\n                <sw-context-menu-item\n                    class="sw-media-upload-v2__button-url-upload"\n                    @click="useUrlUpload"\n                >\n                    {{ $tc(\'global.sw-media-upload-v2.buttonUrlUpload\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </sw-button-group>\n\n        \n        {% block sw_media_upload_v2_compact_url_form %}\n        <sw-media-url-form\n            v-if="isUrlUpload"\n            variant="modal"\n            @modal-close="useFileUpload"\n            @media-url-form-submit="onUrlUpload"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_media_upload_v2_regular %}\n    <div\n        v-if="variant == \'regular\' || variant == \'small\'"\n        class="sw-media-upload-v2__content"\n    >\n        \n        {% block sw_media_upload_v2_regular_header %}\n        <div class="sw-media-upload-v2__header">\n            \n            {% block sw_media_upload_v2_regular_header_label %}\n            \n            <label\n                v-if="label"\n                class="sw-media-upload-v2__label"\n                :class="swFieldLabelClasses"\n            >\n                {{ label }}\n            </label>\n            {% endblock %}\n\n            \n            {% block sw_media_upload_v2_regular_header_helptext %}\n            <sw-help-text\n                v-if="helpText"\n                class="sw-media-upload-v2__help-text"\n                :text="helpText"\n            />\n            {% endblock %}\n\n            \n            {% block sw_media_upload_v2_regular_header_switch %}\n            <sw-context-button\n                v-if="!source && uploadUrlFeatureEnabled"\n                class="sw-media-upload-v2__switch-mode"\n                :disabled="disabled"\n                aria-label="global.sw-media-upload-v2.switchMode"\n            >\n                \n                {% block sw_media_upload_v2_regular_header_switch_file_upload %}\n                <sw-context-menu-item\n                    v-if="!isFileUpload"\n                    :disabled="disabled"\n                    class="sw-media-upload-v2__button-file-upload"\n                    @click="useFileUpload"\n                >\n                    {{ buttonFileUploadLabel }}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_media_upload_v2_regular_header_switch_url_upload %}\n                <sw-context-menu-item\n                    v-if="!isUrlUpload"\n                    class="sw-media-upload-v2__button-url-upload"\n                    @click="useUrlUpload"\n                >\n                    {{ $t(\'global.sw-media-upload-v2.buttonUrlUpload\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_media_upload_v2_regular_drop_zone %}\n        <div\n            ref="dropzone"\n            v-droppable="{ dragGroup: \'media\', onDrop: onDropMedia, validDropCls: \'is--active\' }"\n            class="sw-media-upload-v2__dropzone"\n            :class="isDragActiveClass"\n        >\n\n            \n            {% block sw_media_upload_v2_preview %}\n            <template v-if="variant === \'regular\'">\n                \n                {% block sw_media_upload_v2_regular_preview_file %}\n                <sw-media-preview-v2\n                    v-if="showPreview && (source || preview)"\n                    class="sw-media-upload-v2__preview"\n                    :source="source || preview"\n                />\n                {% endblock %}\n                \n                {% block sw_media_upload_v2_regular_preview_fallback %}\n                <div\n                    v-else\n                    class="sw-media-upload-v2__preview is--fallback"\n                >\n                    <sw-icon\n                        class="sw-media-upload-v2__fallback-icon"\n                        name="regular-image"\n                    />\n                </div>\n                {% endblock %}\n            </template>\n\n            <template v-if="!showPreview && variant === \'regular\'">\n                \n                {% block sw_media_upload_v2_regular_caption %}\n                <div class="sw-media-upload-v2__upload-caption">\n                    <sw-icon name="regular-cloud-upload" />\n                    {{ $tc(\'global.sw-media-upload-v2.caption\') }}\n                </div>\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_media_upload_v2_actions %}\n            <div\n                class="sw-media-upload-v2__actions"\n                :class="{ \'has--source\': source, \'is--small\': variant === \'small\' }"\n            >\n\n                <div\n                    v-if="source"\n                    class="sw-media-upload-v2__file-info"\n                >\n                    <div class="sw-media-upload-v2__file-headline">\n                        {{ mediaNameFilter(source, source.name) }}\n                    </div>\n                    <sw-icon\n                        v-if="!disabled"\n                        class="sw-media-upload-v2__remove-icon"\n                        name="regular-times-xs"\n                        @click="onRemoveMediaItem"\n                    />\n                </div>\n\n                <template v-else>\n                    \n                    {% block sw_media_upload_v2_regular_actions_url %}\n                    <sw-media-url-form\n                        v-if="isUrlUpload"\n                        class="sw-media-upload-v2__url-form"\n                        variant="inline"\n                        @media-url-form-submit="onUrlUpload"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_media_upload_v2_regular_actions_add %}\n                    <template v-if="isFileUpload">\n                        \n                        {% block sw_media_upload_v2_regular_media_sidebar_button %}\n                        <sw-button\n                            v-if="hasOpenMediaButtonListener"\n                            class="sw-media-upload-v2__button open-media-sidebar"\n                            :class="{ \'is--small\': variant === \'small\'}"\n                            variant="primary"\n                            size="small"\n                            :square="variant === \'small\'"\n                            :disabled="disabled"\n                            @click="onClickOpenMediaSidebar"\n                        >\n                            <sw-icon\n                                v-if="variant === \'small\'"\n                                name="regular-plus"\n                                size="16px"\n                            />\n                            <template v-else>\n                                {{ $tc(\'global.sw-media-upload-v2.buttonOpenMedia\') }}\n                            </template>\n                        </sw-button>\n                        {% endblock %}\n\n                        \n                        {% block sw_media_upload_v2_regular_upload_button %}\n                        <sw-button\n                            class="sw-media-upload-v2__button upload"\n                            :class="{ \'is--small\': variant === \'small\'}"\n                            variant="ghost"\n                            size="small"\n                            :disabled="disabled"\n                            @click="onClickUpload"\n                        >\n                            {{ buttonFileUploadLabel }}\n                        </sw-button>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n                </template>\n\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_media_upload_v2_file_input %}\n    <form\n        ref="fileForm"\n        class="sw-media-upload-v2__form"\n    >\n        \n        <input\n            id="files"\n            ref="fileInput"\n            class="sw-media-upload-v2__file-input"\n            type="file"\n            :accept="extensionAccept ? \'*/*\' : fileAccept"\n            :multiple="multiSelect"\n            @change="onFileInputChange"\n        >\n    </form>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","mediaService","configService","feature","fileValidationService"],emits:["media-drop","media-upload-sidebar-open","media-upload-remove-image","media-upload-add-file"],mixins:[t.getByName("notification")],props:{source:{type:[Object,String,File],required:!1,default:null},variant:{type:String,required:!1,validValues:["compact","regular","small"],validator(e){return["compact","regular","small"].includes(e)},default:"regular"},uploadTag:{type:String,required:!0},allowMultiSelect:{type:Boolean,required:!1,default:!0},addFilesOnMultiselect:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null},buttonLabel:{type:String,required:!1,default:""},defaultFolder:{type:String,required:!1,validator(e){return e.length>0},default:null},targetFolderId:{type:String,required:!1,default:null},helpText:{type:String,required:!1,default:null},sourceContext:{type:Object,required:!1,default:null},fileAccept:{type:String,required:!1,default:"*/*"},extensionAccept:{type:String,required:!1,default:null},maxFileSize:{type:Number,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},privateFilesystem:{type:Boolean,required:!1,default:!1},useFileData:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},onMediaUploadSidebarOpen:{type:Function,required:!1,default:null}},data(){return{multiSelect:this.allowMultiSelect,inputType:o,preview:null,isDragActive:!1,defaultFolderId:null,isUploadUrlFeatureEnabled:!1,isLoading:!1}},computed:{defaultFolderRepository(){return this.repositoryFactory.create("media_default_folder")},mediaRepository(){return this.repositoryFactory.create("media","",{keepApiErrors:!0})},showPreview(){return!this.multiSelect},hasOpenMediaButtonListener(){return this.isCompatEnabled("INSTANCE_LISTENERS")?Object.keys(this.$listeners).includes("mediaUploadSidebarOpen"):!!this.onMediaUploadSidebarOpen},isDragActiveClass(){return{"is--active":this.isDragActive,"is--multi":"regular"===this.variant&&!!this.multiSelect,"is--small":"small"===this.variant}},mediaFolderId(){return this.defaultFolderId||this.targetFolderId},isUrlUpload(){return this.inputType===s},isFileUpload(){return this.inputType===o},uploadUrlFeatureEnabled(){return this.isUploadUrlFeatureEnabled},swFieldLabelClasses(){return{"is--required":this.required}},buttonFileUploadLabel(){return""===this.buttonLabel?this.$tc("global.sw-media-upload-v2.buttonFileUpload"):this.buttonLabel},mediaNameFilter(){return Cicada.Filter.getByName("mediaName")}},watch:{async defaultFolder(){this.defaultFolderId=await this.getDefaultFolderId()},disabled(e){e&&(this.isDragActive=!1)}},created(){this.createdComponent()},mounted(){this.mountedComponent()},beforeUnmount(){this.beforeDestroyComponent()},methods:{async createdComponent(){this.mediaService.addListener(this.uploadTag,this.handleMediaServiceUploadEvent),this.mediaFolderId||(this.defaultFolder&&(this.isLoading=!0,this.defaultFolderId=await this.getDefaultFolderId(),this.isLoading=!1),this.configService.getConfig().then(e=>{this.isUploadUrlFeatureEnabled=e.settings.enableUrlFeature}))},mountedComponent(){this.$refs.dropzone&&(["dragover","drop"].forEach(e=>{window.addEventListener(e,this.stopEventPropagation,!1)}),this.$refs.dropzone.addEventListener("drop",this.onDrop),window.addEventListener("dragenter",this.onDragEnter),window.addEventListener("dragleave",this.onDragLeave))},beforeDestroyComponent(){this.mediaService.removeByTag(this.uploadTag),this.mediaService.removeListener(this.uploadTag,this.handleMediaServiceUploadEvent),["dragover","drop"].forEach(e=>{window.addEventListener(e,this.stopEventPropagation,!1)}),window.removeEventListener("dragenter",this.onDragEnter),window.removeEventListener("dragleave",this.onDragLeave)},onDrop(e){if(this.disabled)return;let a=Array.from(e.dataTransfer.files);this.isDragActive=!1,0!==a.length&&this.handleFileCheck(a)},onDropMedia(e){this.disabled||this.$emit("media-drop",e.mediaItem)},onDragEnter(){this.disabled||(this.isDragActive=!0)},onDragLeave(e){if(0===e.screenX&&0===e.screenY){this.isDragActive=!1;return}e.target.closest(".sw-media-upload-v2__dropzone")||(this.isDragActive=!1)},stopEventPropagation(e){e.preventDefault(),e.stopPropagation()},onClickUpload(){this.$refs.fileInput.click()},useUrlUpload(){this.inputType=s},useFileUpload(){this.inputType=o},onClickOpenMediaSidebar(){this.$emit("media-upload-sidebar-open")},onRemoveMediaItem(){this.disabled||(this.preview=null,this.$emit("media-upload-remove-image"))},async onUrlUpload({url:e,fileExtension:a}){let i;this.multiSelect||(this.mediaService.removeByTag(this.uploadTag),this.preview=e);try{i=l.getNameAndExtensionFromUrl(e)}catch(e){this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.sw-media-upload-v2.notification.invalidUrl.message")});return}a&&(i.extension=a);let t=this.getMediaEntityForUpload();await this.mediaRepository.save(t,n.api),this.mediaService.addUpload(this.uploadTag,{src:e,targetId:t.id,isPrivate:t.private,...i}),this.useFileUpload()},onFileInputChange(){let e=Array.from(this.$refs.fileInput.files);e.length&&(this.handleFileCheck(e),this.$refs.fileForm.reset())},async handleUpload(e){this.multiSelect?(this.preview||(this.preview=[]),this.addFilesOnMultiselect?this.preview=[...this.preview,...e]:this.preview=e):(this.mediaService.removeByTag(this.uploadTag),e=[e.pop()],this.preview=e[0]);let a=[],i=e.map(e=>{let{fileName:i,extension:t}=l.getNameAndExtensionFromFile(e),n=this.getMediaEntityForUpload();return a.push(n),{src:e,targetId:n.id,fileName:i,extension:t,isPrivate:n.private}});await this.mediaRepository.saveAll(a,n.api),await this.mediaService.addUploads(this.uploadTag,i)},getMediaEntityForUpload(){let e=this.mediaRepository.create();return e.mediaFolderId=this.mediaFolderId,e.private=this.privateFilesystem,e},async getDefaultFolderId(){return this.mediaService.getDefaultFolderId(this.defaultFolder)},handleMediaServiceUploadEvent({action:e}){"media-upload-fail"===e&&this.onRemoveMediaItem()},checkFileSize(e){return null===this.maxFileSize||e.size<=this.maxFileSize||e.fileSize<=this.maxFileSize||(this.createNotificationError({message:this.$tc("global.sw-media-upload-v2.notification.invalidFileSize.message",0,{name:e.name||e.fileName,limit:d(this.maxFileSize)})}),!1)},checkFileType(e){return!e?.type&&e.id&&(e.type=e.mimeType),!e?.name&&e.id&&(e.name=e.fileName),!!(this.extensionAccept?this.fileValidationService.checkByExtension(e,this.extensionAccept):!!this.fileAccept&&this.fileValidationService.checkByType(e,this.fileAccept))||(this.createNotificationError({message:this.$tc("global.sw-media-upload-v2.notification.invalidFileType.message",0,{name:e.name,supportedTypes:this.extensionAccept||this.fileAccept})}),!1)},handleFileCheck(e){let a=e.filter(e=>this.checkFileSize(e)&&this.checkFileType(e));this.useFileData?(this.preview=this.multiSelect?null:a[0],this.$emit("media-upload-add-file",a)):this.handleUpload(a)}}}},205367:function(e,a,i){var t=i(827400);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),i(745346).Z("774bb75a",t,!0,{})}}]);