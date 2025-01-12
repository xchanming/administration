const l=`{% block sw_media_modal_v2 %} <sw-modal ref="swMediaModal" class="sw-media-modal-v2" variant="full" :title="$tc('sw-media.sw-media-modal-v2.titleModal')" @modal-close="onEmitModalClosed" > {% block sw_media_modal_v2_content %} <div class="sw-media-modal-v2__content"> {% block sw_media_modal_v2_tabs %} <sw-tabs position-identifier="sw-media-modal" variant="minimal" :default-item="defaultTab" class="sw-media-modal-v2__tabs" > <template #default="{ active }"> {% block sw_media_modal_v2_tab_items %} {% block sw_media_modal_v2_tab_item_library %} <sw-tabs-item :name="tabNameLibrary" :active-tab="active" :disabled="hasUploads" > {{ $tc('sw-media.sw-media-modal-v2.labelTabItemLibrary') }} </sw-tabs-item> {% endblock %} {% block sw_media_modal_v2_tab_item_upload %} <sw-tabs-item :name="tabNameUpload" :active-tab="active" @click="resetSelection" > {{ $tc('sw-media.sw-media-modal-v2.labelTabItemUpload') }} </sw-tabs-item> {% endblock %} {% endblock %} </template> <template #content="{ active }"> {% block sw_media_modal_v2_tab_content %} <div class="sw-media-modal-v2__tab-content"> {% block sw_media_modal_v2_tab_content_library %} <div v-show="active === tabNameLibrary" class="sw-media-modal-v2__library-content" > {% block sw_media_modal_v2_navigation_and_search %} <div class="sw-media-modal-v2__breadcrumbs-and-search" :class="{'sw-media-modal-v2__breadcrumbs-and-search--compact': compact}" > {% block sw_media_modal_v2_folder_breadcrumbs %} <sw-media-breadcrumbs v-model:currentFolderId="folderId" :small="compact" /> {% endblock %} {% block sw_media_modal_v2_search_field %} <sw-simple-search-field :value="term" @search-term-change="onSearchTermChange" /> {% endblock %} </div> {% endblock %} {% block sw_media_modal_v2_media_library %} <sw-media-library ref="mediaLibrary" :selection="selection" :folder-id="folderId" :term="term" :compact="compact" :allow-multi-select="allowMultiSelect" @update:selection="selection = $event" @media-folder-change="folderId = $event" /> {% endblock %} </div> {% endblock %} {% block sw_media_modal_v2_tab_content_upload %} <div v-show="active === tabNameUpload" class="sw-media-modal-v2__uploads-content" > {% block sw_media_modal_v2_upload_component %} <sw-upload-listener :upload-tag="uploadTag" @media-upload-add="onUploadsAdded" @media-upload-finish="onUploadFinished" @media-upload-fail="onUploadFailed" /> <sw-media-upload-v2 class="sw-media-modal-v2__upload-container" variant="regular" :file-accept="fileAccept" :upload-tag="uploadTag" :default-folder="entityContext" :target-folder-id="folderId" :allow-multi-select="allowMultiSelect" /> {% endblock %} {% block sw_media_modal_v2_uploaded_items %} <sw-media-grid :presentation="compact ? 'list-preview' : 'medium-preview'" :class="{'sw-media-modal-v2__upload-media-grid--compact': compact }" > <sw-media-media-item v-for="upload in uploads" :key="\`sw-media-modal-v2-upload-\${upload.id}\`" :item="upload" :show-context-menu-button="false" :show-selection-indicator="allowMultiSelect" :allow-multi-select="allowMultiSelect" :selected="checkMediaItem(upload)" :editable="false" :is-list="compact" @media-item-selection-remove="onMediaRemoveSelected" @media-item-selection-add="onMediaAddSelected" @media-item-click="onMediaItemSelect" /> </sw-media-grid> {% endblock %} </div> {% endblock %} </div> </template> {% endblock %} </sw-tabs> {% endblock %} {% block sw_media_modal_v2_media_sidebar %} <sw-media-sidebar :items="selection" :current-folder-id="null" @media-sidebar-items-delete="onItemsDeleted" @media-sidebar-folder-items-dissolve="onMediaFoldersDissolved" @media-sidebar-items-move="refreshList" @media-item-selection-remove="onMediaRemoveSelected" /> {% endblock %} </div> {% endblock %} {% block sw_media_modal_v2_modal_footer %} <template #modal-footer> {% block sw_media_modal_v2_button_cancel %} <sw-button @click="onEmitModalClosed"> {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_media_modal_v2_button_confirm_selection %} <sw-button variant="primary" @click="onEmitSelection" > {{ $tc('sw-media.sw-media-modal-v2.labelButtonSaveSelection') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %}`,{Context:a,Utils:o}=Cicada,s={template:l,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","mediaService"],emits:["modal-close","media-modal-selection-change"],props:{initialFolderId:{type:String,required:!1,default:null},entityContext:{type:String,required:!1,default:null},defaultTab:{type:String,required:!1,validValues:["upload","library"],default:"library",validator(e){return["upload","library"].includes(e)}},allowMultiSelect:{type:Boolean,required:!1,default:!0},fileAccept:{type:String,required:!1,default:"image/*"}},data(){return{selection:[],uploads:[],folderId:this.initialFolderId,currentFolder:null,compact:!1,term:"",id:o.createId(),selectedMediaItem:{}}},computed:{mediaRepository(){return this.repositoryFactory.create("media")},mediaFolderRepository(){return this.repositoryFactory.create("media_folder")},tabNameUpload(){return"upload"},tabNameLibrary(){return"library"},hasUploads(){return this.uploads.length>0},uploadTag(){return`sw-media-modal-v2--${this.id}`}},watch:{folderId(){this.fetchCurrentFolder()}},created(){this.createdComponent()},mounted(){this.mountedComponent()},beforeUnmount(){this.beforeDestroyComponent()},methods:{createdComponent(){this.fetchCurrentFolder(),this.addResizeListener()},mountedComponent(){this.getComponentWidth()},beforeDestroyComponent(){this.removeOnResizeListener()},async fetchCurrentFolder(){if(!this.folderId){this.currentFolder=null;return}this.currentFolder=await this.mediaFolderRepository.get(this.folderId,a.api)},addResizeListener(){window.addEventListener("resize",this.getComponentWidth)},removeOnResizeListener(){window.removeEventListener("resize",this.getComponentWidth)},getComponentWidth(){const e=this.$el.getBoundingClientRect().width;this.compact=e<=900},onEmitModalClosed(){this.$emit("modal-close")},onEmitSelection(){const e=this.selection.filter(t=>t.getEntityName()==="media");this.$emit("media-modal-selection-change",e),this.onEmitModalClosed()},refreshList(){this.$refs.mediaLibrary.refreshList()},onMediaRemoveSelected({item:e}){const t=this.selection.findIndex(i=>e.id===i.id);t!==-1&&this.selection.splice(t,1)},onMediaAddSelected({item:e}){this.selection.includes(e)||this.selection.push(e)},onMediaItemSelect({item:e}){this.allowMultiSelect||(this.selection=[e],this.selectedMediaItem=e)},resetSelection(){this.selection.splice(0,this.selection.length)},onItemsDeleted(e){this.onMediaFoldersDissolved(e.folderIds)},onMediaFoldersDissolved(e){this.currentFolder&&(e.some(t=>t===this.currentFolder.id)&&(this.folderId=this.currentFolder.parentId),this.refreshList())},async onUploadsAdded(){await this.mediaService.runUploads(this.uploadTag)},async onUploadFinished({targetId:e}){const t=await this.mediaRepository.get(e,a.api);this.selectedMediaItem=t,this.uploads.some(i=>t.id===i.id)||this.uploads.push(t),this.allowMultiSelect?this.selection.some(d=>t.id===d.id)||this.selection.push(t):this.selection=[t]},onUploadFailed(e){this.uploads=this.uploads.filter(t=>t.id!==e.targetId)},selectMediaItem(e){this.allowMultiSelect||(this.selectedMediaItem=e,this.selection=[e])},checkMediaItem(e){return this.allowMultiSelect?this.selection.includes(e):e.id===this.selectedMediaItem.id},onSearchTermChange(e){this.term=e}}};export{s as default};
//# sourceMappingURL=index-x6acTqHL.js.map
