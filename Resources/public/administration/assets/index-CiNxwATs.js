const s=`{% block sw_media_folder_item %} <sw-media-base-item class="sw-media-folder-item" v-bind="$attrs" :truncate-right="true" :allow-multi-select="!isParent" v-on="listeners" > {% block sw_media_folder_item_preview %} <template #preview="{ item }"> {% block sw_media_folder_parent_icon%} <img v-if="isParent" :src="assetFilter('/administration/static/img/media/folder--back.svg')" class="sw-media-folder-item__folder-thumbnails" alt="Folder back" > {% endblock %} {% block sw_media_folder_default_icon%} <span v-else-if="!!item.defaultFolderId" > <img :src="assetFilter('/administration/static/img/media/' + iconName + '.svg')" class="sw-media-folder-item__folder-thumbnails" :alt="iconName" > <sw-icon v-if="iconConfig.name" class="sw-media-folder-item__folder-thumbnails is--inner" v-bind="iconConfig" /> </span> {% endblock %} {% block sw_media_folder_folder_icon%} <img v-else :src="assetFilter('/administration/static/img/media/folder-thumbnail--large.svg')" class="sw-media-folder-item__folder-thumbnails" alt="Folder thumbnail" > {% endblock %} </template> {% endblock %} {% block sw_media_folder_name %} <template #name="{ item, isInlineEdit, startInlineEdit, endInlineEdit }"> {% block sw_media_base_item_name %} <sw-text-field v-if="!isParent && (isInlineEdit || item.isNew())" v-autofocus class="sw-media-base-item__name-field" :value="item.name" name="media-item-name" @blur="onBlur($event, item, endInlineEdit)" @click.stop @keydown.enter="onBlur($event, item, endInlineEdit)" @keyup.esc="endInlineEdit" /> <div v-else ref="itemName" class="sw-media-base-item__name" :title="item.name" > {{ item.name }} </div> {% endblock %} </template> {% endblock %} {% block sw_media_folder_meta_data %} <template #metadata="{ item }"> <div class="sw-media-folder-item__metadata"> {{ dateFilter(item.createdAt) }} </div> </template> {% endblock %} {% block sw_media_folder_item_context_menu %} <template #context-menu="{ item, startInlineEdit, allowEdit, allowDelete }"> {% block sw_media_folder_item_context_item_show_media %} <sw-context-menu-item class="sw-media-context-item__show-media-action" @click="navigateToFolder(item.id)" > {{ $tc('global.sw-media-folder-item.labelContextMenuShowMedia') }} </sw-context-menu-item> {% endblock %} <slot> {% block sw_media_folder_item_additional_context_menu_slot %}{% endblock %} </slot> {% block sw_media_folder_item_context_group_quick_actions %} <div class="sw-context-menu__group"> {% block sw_media_folder_item_context_item_show_settings %} <sw-context-menu-item class="sw-media-context-item__open-settings-action" @click="openSettings" > {{ $tc('global.sw-media-folder-item.labelContextMenuShowSettings') }} </sw-context-menu-item> {% endblock %} {% block sw_media_folder_item_context_item_move %} <sw-context-menu-item :disabled="!allowEdit" class="sw-media-context-item__move-folder-action" @click="openMoveModal" > {{ $tc('global.sw-media-folder-item.labelContextMenuMove') }} </sw-context-menu-item> {% endblock %} {% block sw_media_folder_item_context_item_dissolve %} <sw-context-menu-item :disabled="!allowEdit" class="sw-media-context-item__dissolve-folder-action" @click="openDissolveModal" > {{ $tc('global.sw-media-folder-item.labelContextMenuDissolve') }} </sw-context-menu-item> {% endblock %} {% block sw_media_folder_item_context_item_rename_item %} <sw-context-menu-item :disabled="!allowEdit" class="sw-media-context-item__rename-folder-action" @click="startInlineEdit" > {{ $tc('global.sw-media-folder-item.labelContextMenuRename') }} </sw-context-menu-item> {% endblock %} {% block sw_media_folder_item_context_item_delete %} <sw-context-menu-item :disabled="!allowDelete" class="sw-media-context-item__delete-folder-action" variant="danger" @click="openDeleteModal" > {{ $tc('global.default.delete') }} </sw-context-menu-item> {% endblock %} </div> {% endblock %} </template> {% endblock %} {% block sw_media_folder_modal_windows %} <template #modal-windows="{ item, allowEdit, allowDelete }"> {% block sw_media_folder_settings_modal %} <sw-media-modal-folder-settings v-if="showSettings" :disabled="!allowEdit" :media-folder-id="item.id" @media-settings-modal-save="refreshIconConfig" @media-settings-modal-close="closeSettings" /> {% endblock %} {% block sw_media_folder_dissolve_modal %} <sw-media-modal-folder-dissolve v-if="showDissolveModal" :items-to-dissolve="[item]" @media-folder-dissolve-modal-dissolve="onFolderDissolved" @media-folder-dissolve-modal-close="closeDissolveModal" /> {% endblock %} {% block sw_media_folder_move_modal %} <sw-media-modal-move v-if="showMoveModal" :items-to-move="[item]" @media-move-modal-close="closeMoveModal" @media-move-modal-items-move="onFolderMoved" /> {% endblock %} {% block sw_media_folder_delete_modal %} <sw-media-modal-delete v-if="showDeleteModal" :items-to-delete="[item]" @media-delete-modal-items-delete="emitItemDeleted" @media-delete-modal-close="closeDeleteModal" /> {% endblock %} </template> {% endblock %} </sw-media-base-item> {% endblock %}`,{Application:d,Mixin:n,Context:a}=Cicada,{warn:m}=Cicada.Utils.debug,r={template:s,compatConfig:Cicada.compatConfig,inheritAttrs:!1,inject:["repositoryFactory"],emits:["media-folder-remove","media-folder-changed","media-folder-delete","media-folder-dissolve","media-folder-move"],mixins:[n.getByName("notification")],props:{isParent:{type:Boolean,required:!1,default:!1}},data(){return{showSettings:!1,showDissolveModal:!1,showMoveModal:!1,showDeleteModal:!1,lastDefaultFolderId:null,iconConfig:{name:"",color:"inherit"}}},computed:{mediaFolderRepository(){return this.repositoryFactory.create("media_folder")},mediaDefaultFolderRepository(){return this.repositoryFactory.create("media_default_folder")},moduleFactory(){return d.getContainer("factory").module},mediaFolder(){return this.$attrs.item},iconName(){switch(this.iconConfig.name){case"regular-box":return"multicolor-folder-thumbnail--green";case"regular-products":return"multicolor-folder-thumbnail--green";case"regular-database":return"multicolor-folder-thumbnail--grey";case"regular-content":return"multicolor-folder-thumbnail--pink";case"regular-cog":return"multicolor-folder-thumbnail--grey";default:return"multicolor-folder-thumbnail"}},assetFilter(){return Cicada.Filter.getByName("asset")},dateFilter(){return Cicada.Filter.getByName("date")},listeners(){return this.isCompatEnabled("INSTANCE_LISTENERS")?this.$listeners:{}}},created(){this.createdComponent()},methods:{createdComponent(){this.getIconConfigFromFolder()},async getIconConfigFromFolder(){var i,l;const{mediaFolder:e}=this;if(!e.defaultFolderId||e.defaultFolderId===this.lastDefaultFolderId)return;this.lastDefaultFolderId=e.defaultFolderId;const t=await this.mediaDefaultFolderRepository.get(e.defaultFolderId,a.api);if(!t)return;const o=this.moduleFactory.getModuleByEntityName(t.entity);if(!o){m("Missing module for default folder entity",t.entity);return}this.iconConfig.name=((i=o.manifest)==null?void 0:i.icon)??"",this.iconConfig.color=((l=o.manifest)==null?void 0:l.color)??"#000000"},async onChangeName(e,t,o){if(!e||!e.trim()){this.rejectRenaming(t,"empty-name",o);return}if(e.includes("<")){this.rejectRenaming(t,"invalid-name",o);return}t.name=e;try{await this.mediaFolderRepository.save(t,a.api),t._isNew=!1}catch(i){this.rejectRenaming(t,i,o)}finally{o()}},onBlur(e,t,o){const i=e.target.value;if(i!==t.name){this.onChangeName(i,t,o);return}o()},rejectRenaming(e,t,o){if(t){let i=this.$tc("global.default.error"),l=this.$tc("global.sw-media-folder-item.notification.renamingError.message");t==="empty-name"?(i=this.$tc("global.default.error"),l=this.$tc("global.sw-media-folder-item.notification.errorBlankItemName.message")):t==="invalid-name"&&(i=this.$tc("global.default.error"),l=this.$tc("global.sw-media-folder-item.notification.errorInvalidItemName.message")),this.createNotificationError({title:i,message:l})}e.isNew()===!0&&this.$emit("media-folder-remove",[e.id]),o()},navigateToFolder(e){this.$router.push({name:"sw.media.index",params:{folderId:e}})},openSettings(){this.showSettings=!0},closeSettings(e){this.showSettings=!1,typeof e=="boolean"&&e===!0&&this.$nextTick(()=>{this.$emit("media-folder-changed")})},openDissolveModal(){this.showDissolveModal=!0},closeDissolveModal(){this.showDissolveModal=!1},openDeleteModal(){this.showDeleteModal=!0},closeDeleteModal(){this.showDeleteModal=!1},emitItemDeleted(e){this.closeDeleteModal(),this.$nextTick(()=>{this.$emit("media-folder-delete",e.folderIds)})},onFolderDissolved(e){this.closeDissolveModal(),this.$nextTick(()=>{this.$emit("media-folder-dissolve",e)})},onFolderMoved(e){this.closeMoveModal(),this.$nextTick(()=>{this.$emit("media-folder-move",e)})},openMoveModal(){this.showMoveModal=!0},closeMoveModal(){this.showMoveModal=!1},async refreshIconConfig(){await this.getIconConfigFromFolder(),this.closeSettings(!0)}}};export{r as default};
//# sourceMappingURL=index-CiNxwATs.js.map
