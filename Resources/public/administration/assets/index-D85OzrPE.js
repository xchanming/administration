const l=`{% block sw_media_quickinfo_multiple %} <div class="sw-media-quickinfo-multiple"> {% block sw_media_quickinfo_multiple_quickactions %} <sw-media-collapse v-if="editable" :title="$tc('sw-media.sidebar.sections.actions')" :expand-on-loading="true" > {% block sw_media_quickinfo_multiple_quickactions_content %} <template #content> <ul class="sw-media-sidebar__quickactions-list"> {% block sw_media_quickinfo_multiple_quickactions_move %} <li class="quickaction--move" :class="quickActionClasses(!acl.can('media.editor'))" role="button" tabindex="0" @click="openModalMove" @keydown.enter="openModalMove" > <sw-icon small name="regular-file-export" class="sw-media-sidebar__quickactions-icon" /> {{ $tc('sw-media.sidebar.actions.move') }} </li> {% endblock %} {% block sw_media_quickinfo_multiple_quickactions_delete %} <li v-if="!isPrivate" class="is--danger" :class="quickActionClasses(!acl.can('media.deleter'))" role="button" tabindex="0" @click="openModalDelete" @keydown.enter="openModalDelete" > <sw-icon small name="regular-trash" class="sw-media-sidebar__quickactions-icon is--danger" /> {{ $tc('sw-media.sidebar.actions.delete') }} </li> {% endblock %} {% block sw_media_quickinfo_folder_quickactions_dissolve %} <li v-if="!hasMedia" class="quickaction--dissolve" :class="quickActionClasses(!acl.can('media.editor'))" role="button" tabindex="0" @click="openFolderDissolve" @keydown.enter="openFolderDissolve" > <sw-icon small name="regular-spinner-star" class="sw-media-sidebar__quickactions-icon" /> {{ $tc('sw-media.sidebar.actions.dissolve') }} </li> {% endblock %} </ul> </template> {% endblock %} </sw-media-collapse> {% endblock %} {% block sw_media_quickinfo_multiple_file_names %} <sw-media-collapse :expand-on-loading="true" :title="$tc('sw-media.sidebar.sections.selectedFiles')" > {% block sw_media_quickinfo_multiple_file_names_content %} <template #content> <label class="sw-media-quickinfo-multiple__second-headline">{{ getFileSizeLabel }}</label> <sw-media-entity-mapper v-for="mediaItem in items" :key="mediaItem.id" :item="mediaItem" :selected="true" :is-list="true" :show-context-menu-button="false" :show-selection-indicator="true" @media-item-selection-remove="onRemoveItemFromSelection" /> </template> {% endblock %} </sw-media-collapse> {% endblock %} {% block sw_media_sidebar_modal_delete %} <sw-media-modal-delete v-if="showModalDelete" :items-to-delete="items" @media-delete-modal-close="closeModalDelete" @media-delete-modal-items-delete="deleteSelectedItems" /> {% endblock %} {% block sw_media_sidebar_folder_dissolve_modal %} <sw-media-modal-folder-dissolve v-if="!hasMedia && showFolderDissolve" :items-to-dissolve="items" @media-folder-dissolve-modal-dissolve="onFolderDissolved" @media-folder-dissolve-modal-close="closeFolderDissolve" /> {% endblock %} {% block sw_media_sidebar_folder_move_modal %} <sw-media-modal-move v-if="showModalMove" :items-to-move="items" @media-move-modal-close="closeModalMove" @media-move-modal-items-move="onFolderMoved" /> {% endblock %} </div> {% endblock %}`,{Mixin:a}=Cicada,o={template:l,compatConfig:Cicada.compatConfig,emits:["media-item-selection-remove"],mixins:[a.getByName("media-sidebar-modal-mixin")],props:{items:{required:!0,type:Array},editable:{type:Boolean,required:!1,default:!1}},computed:{itemsIsAvailable(){return this.items.length>0},getFileSize(){const e=this.items.reduce((i,s)=>i+(s.fileSize||0),0);return Cicada.Utils.format.fileSize(e)},getFileSizeLabel(){return`${this.$tc("sw-media.sidebar.metadata.totalSize")}: ${this.getFileSize}`},hasFolder(){return this.items.some(e=>e.getEntityName()==="media_folder")},hasMedia(){return this.items.some(e=>e.getEntityName()==="media")},isPrivate(){return this.items.some(e=>e.private===!0)}},methods:{onRemoveItemFromSelection(e){this.$emit("media-item-selection-remove",e)},quickActionClassesDelete(e){return["sw-media-sidebar__quickaction",{"sw-media-sidebar__quickaction--disabled":e}]},quickActionClasses(e){return["sw-media-sidebar__quickaction",{"sw-media-sidebar__quickaction--disabled":e}]}}};export{o as default};
//# sourceMappingURL=index-D85OzrPE.js.map
