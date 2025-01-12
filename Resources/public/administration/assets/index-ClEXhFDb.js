const s=`{% block sw_media_modal_folder_dissolve %} <sw-modal variant="small" class="sw-media-modal-folder-dissolve" :title="$tc('global.default.warning')" @modal-close="closeDissolveModal" > {% block sw_media_modal_folder_dissolve_body %} {{ $tc('global.sw-media-modal-folder-dissolve.dissolveMessage', itemsToDissolve.length, { folderName: itemsToDissolve[0].name, count: itemsToDissolve.length }) }} {% endblock %} {% block sw_media_modal_folder_dissolve_footer %} <template #modal-footer> {% block sw_media_modal_folder_dissolve__cancel_button %} <sw-button size="small" @click="closeDissolveModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_media_modal_folder_dissolve_confirm_button %} <sw-button class="sw-media-modal-folder-dissolve__confirm" size="small" variant="danger" @click="dissolveSelection" > {{ $tc('global.sw-media-modal-folder-dissolve.buttonDissolve') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %}`,{Mixin:l}=Cicada,i={template:s,compatConfig:Cicada.compatConfig,inject:["mediaFolderService"],emits:["media-folder-dissolve-modal-close","media-folder-dissolve-modal-dissolve"],mixins:[l.getByName("notification")],props:{itemsToDissolve:{required:!0,type:Array,validator(e){return e.length!==0}}},methods:{closeDissolveModal(e){this.$emit("media-folder-dissolve-modal-close",{originalDomEvent:e})},async _dissolveSelection(e){e.isLoading=!0;try{return await this.mediaFolderService.dissolveFolder(e.id),this.createNotificationSuccess({title:this.$root.$tc("global.default.success"),message:this.$root.$tc("global.sw-media-modal-folder-dissolve.notification.successSingle.message",1,{folderName:e.name})}),e.id}catch{return this.createNotificationError({title:this.$root.$tc("global.default.error"),message:this.$root.$tc("global.sw-media-modal-folder-dissolve.notification.errorSingle.message",1,{folderName:e.name})}),null}finally{e.isLoading=!1}},async dissolveSelection(){const e=[];try{await Promise.all(this.itemsToDissolve.map(o=>(e.push(o.id),this._dissolveSelection(o)))),this.itemsToDissolve.length>1&&this.createNotificationSuccess({title:this.$root.$tc("global.default.success"),message:this.$root.$tc("global.sw-media-modal-folder-dissolve.notification.successOverall.message")}),this.$emit("media-folder-dissolve-modal-dissolve",e)}catch{this.itemsToDissolve.length>1&&this.createNotificationError({title:this.$root.$tc("global.default.error"),message:this.$root.$tc("global.sw-media-modal-folder-dissolve.notification.errorOverall.message")})}}}};export{i as default};
//# sourceMappingURL=index-ClEXhFDb.js.map
