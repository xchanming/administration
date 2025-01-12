const m=`{% block sw_media_media_item %} <sw-media-base-item class="sw-media-media-item" v-bind="$attrs" v-on="listeners" > {% block sw_media_media_item_preview %} <template #preview="{ item }"> <sw-media-preview-v2 :source="item" :media-is-private="item.private" @media-preview-play="emitPlayEvent($event, item)" /> </template> {% endblock %} {% block sw_media_media_item_name_container %} <template #name="{ item, isInlineEdit, startInlineEdit, endInlineEdit }"> <sw-text-field v-if="isInlineEdit" v-autofocus class="sw-media-base-item__name-field" :value="item.fileName" name="media-item-name" @blur="onBlur($event, item, endInlineEdit)" @keyup.esc="endInlineEdit" @click.stop @keydown.enter="endInlineEdit" /> <div v-else ref="itemName" class="sw-media-base-item__name" :title="\`\${item.fileName}.\${item.fileExtension}\`" role="menuitem" tabindex="0" @dblclick="startInlineEdit" > <template v-if="item.hasFile"> {{ mediaNameFilter(item) }} </template> </div> </template> {% endblock %} {% block sw_media_media_item_metadata %} <template #metadata="{ item }"> <div class="sw-media-media-item__metadata"> {{ dateFilter(item.uploadedAt) }}, {{ fileSizeFilter(item.fileSize, locale) }} </div> </template> {% endblock %} {% block sw_media_media_item_context_menu %} <template #context-menu="{ item, startInlineEdit, allowEdit, allowDelete }"> <slot> {% block sw_media_media_item_additional_context_menu_slot %}{% endblock %} </slot> {% block sw_media_media_item_context_group_quick_actions %} <div :class="defaultContextMenuClass"> {% block sw_media_media_item_context_item_rename_item %} <sw-context-menu-item :disabled="!item.hasFile || item.private || !allowEdit" @click="startInlineEdit" > {{ $tc('global.sw-media-media-item.labelContextMenuRename') }} </sw-context-menu-item> {% endblock %} {% block sw_media_media_item_context_item_copy_item_link %} <sw-context-menu-item v-if="item.hasFile" @click="copyItemLink(item)" > {{ $tc('global.sw-media-media-item.labelContextMenuCopyLink') }} </sw-context-menu-item> {% endblock %} {% block sw_media_media_item_context_item_replace %} <sw-context-menu-item :disabled="item.private || !allowEdit" class="sw-media-context-item__replace-media-action" @click="openModalReplace" > {{ $tc('global.sw-media-media-item.labelContextMenuReplace') }} </sw-context-menu-item> {% endblock %} {% block sw_media_media_item_context_item_move %} <sw-context-menu-item :disabled="!allowEdit" class="sw-media-context-item__move-media-action" @click="openModalMove" > {{ $tc('global.sw-media-media-item.labelContextMenuMove') }} </sw-context-menu-item> {% endblock %} {% block sw_media_media_item_context_item_delete %} <sw-context-menu-item :disabled="item.private || !allowDelete" variant="danger" @click="openModalDelete" > {{ $tc('global.default.delete') }} </sw-context-menu-item> {% endblock %} </div> {% endblock %} </template> {% endblock %} <template #modal-windows="{ item, allowEdit, allowDelete }"> {% block sw_media_media_item_modal_replace %} <sw-media-modal-replace v-if="showModalReplace && allowEdit" :item-to-replace="item" @media-replace-modal-item-replaced="emitRefreshMediaLibrary" @media-replace-modal-close="closeModalReplace" /> {% endblock %} {% block sw_media_media_item_delete_modal %} <sw-media-modal-delete v-if="showModalDelete && allowDelete" :items-to-delete="[item]" @media-delete-modal-items-delete="emitItemDeleted" @media-delete-modal-close="closeModalDelete" /> {% endblock %} {% block sw_media_media_item_move_modal %} <sw-media-modal-move v-if="showModalMove && allowEdit" :items-to-move="[item]" @media-move-modal-close="closeModalMove" @media-move-modal-items-move="onMediaItemMoved" /> {% endblock %} </template> </sw-media-base-item> {% endblock %}`,{Mixin:o}=Cicada,{dom:s}=Cicada.Utils,n={template:m,compatConfig:Cicada.compatConfig,inheritAttrs:!1,inject:["mediaService"],emits:["media-item-rename-success","media-item-play","media-item-delete","media-folder-move","media-item-replaced"],mixins:[o.getByName("notification")],data(){return{showModalReplace:!1,showModalDelete:!1,showModalMove:!1}},computed:{locale(){return this.$root.$i18n.locale},defaultContextMenuClass(){return{"sw-context-menu__group":this.$slots.default}},mediaNameFilter(){return Cicada.Filter.getByName("mediaName")},dateFilter(){return Cicada.Filter.getByName("date")},fileSizeFilter(){return Cicada.Filter.getByName("fileSize")},listeners(){return this.isCompatEnabled("INSTANCE_LISTENERS")?this.$listeners:{}}},methods:{async onChangeName(e,t,i){if(!e||!e.trim()){this.rejectRenaming(i);return}t.isLoading=!0;try{await this.mediaService.renameMedia(t.id,e),t.fileName=e,t.isLoading=!1,this.createNotificationSuccess({message:this.$tc("global.sw-media-media-item.notification.renamingSuccess.message")}),this.$emit("media-item-rename-success",t)}catch(a){a.response.data.errors.forEach(l=>{this.handleErrorMessage(l)})}finally{t.isLoading=!1,i()}},handleErrorMessage(e){switch(e.code){case"CONTENT__MEDIA_FILE_NAME_IS_TOO_LONG":this.createNotificationError({message:this.$tc("global.sw-media-media-item.notification.fileNameTooLong.message",0,{length:e.meta.parameters.maxLength})});break;default:this.createNotificationError({message:this.$tc("global.sw-media-media-item.notification.renamingError.message")})}},rejectRenaming(e){this.createNotificationError({message:this.$tc("global.sw-media-media-item.notification.errorBlankItemName.message")}),e()},onBlur(e,t,i){const a=e.target.value;if(a!==t.fileName){this.onChangeName(a,t,i);return}i()},emitPlayEvent(e,t){if(!this.selected){this.$emit("media-item-play",{originalDomEvent:e,item:t});return}this.removeFromSelection(e)},async copyItemLink(e){try{await s.copyStringToClipboard(e.url),this.createNotificationSuccess({message:this.$tc("sw-media.general.notification.urlCopied.message")})}catch{this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.sw-field.notification.notificationCopyFailureMessage")})}},openModalDelete(){this.showModalDelete=!0},closeModalDelete(){this.showModalDelete=!1},async emitItemDeleted(e){this.closeModalDelete();const t=await e;this.$emit("media-item-delete",t.mediaIds)},openModalReplace(){this.showModalReplace=!0},closeModalReplace(){this.showModalReplace=!1},openModalMove(){this.showModalMove=!0},closeModalMove(){this.showModalMove=!1},async onMediaItemMoved(e){this.closeModalMove();const t=await e;this.$emit("media-folder-move",t)},emitRefreshMediaLibrary(){this.closeModalReplace(),this.$nextTick(()=>{this.$emit("media-item-replaced")})}}};export{n as default};
//# sourceMappingURL=index-_kCl0aVm.js.map
