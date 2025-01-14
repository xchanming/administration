(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[21227],{281156:function(){},321227:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}}),n(564320);let{Context:o}=Cicada,{Criteria:l}=Cicada.Data;var d={template:'\n{% block sw_media_folder_content %}\n<div class="sw-media-folder-content">\n    \n    {% block sw_media_folder_content_folder_listing %}\n    <ul\n        v-if="subFolders.length > 0 || parentFolder !== null"\n        class="sw-media-folder-content__folder-listing"\n    >\n        \n        {% block sw_media_folder_content_list_item %}\n\n        <li\n            v-if="parentFolder !== null"\n            class="sw-media-folder-content__list-item"\n        >\n            <button\n                class="sw-media-folder-content__button sw-media-folder-content__parent-folder"\n                @click="emitInput(parentFolder)"\n            >\n                \n                {% block sw_media_folder_content_folder_icon %}\n                <img\n                    :src="assetFilter(\'/administration/static/img/media/folder-thumbnail.svg\')"\n                    class="sw-media-folder-content__folder-icon"\n                    alt="Folder thumbnail"\n                >\n                {% endblock %}\n                {{ parentFolder.name }}\n            </button>\n        </li>\n\n        <li\n            v-for="(folder, index) in subFolders"\n            :key="folder.id"\n            :class="[{\'is--selected\': folder.id === selectedId}, \'sw-media-folder-content__list-item--\' + index ]"\n            class="sw-media-folder-content__list-item"\n            role="button"\n            tabindex="0"\n            @click="emitInput(folder)"\n            @keydown.enter="emitInput(folder)"\n        >\n\n            \n            {% block sw_media_folder_content_button_folder %}\n            \n            {% block sw_media_folder_content_button_folder_button %}\n            <button class="sw-media-folder-content__button sw-media-folder-content__folder-button">\n                \n                {% block sw_media_folder_content_folder_button_icon %}\n                <img\n                    :src="assetFilter(\'/administration/static/img/media/folder-thumbnail.svg\')"\n                    class="sw-media-folder-content__folder-icon"\n                    alt="Folder thumbnail"\n                >\n                {% endblock %}\n                {{ folder.name }}\n            </button>\n            {% endblock %}\n            \n            {% block sw_media_folder_content_switch_button %}\n            <sw-icon\n                v-if="getChildCount(folder) > 0"\n                class="sw-media-folder-content__switch-button"\n                name="regular-chevron-right-xxs"\n                size="12px"\n            />\n            {% endblock %}\n            {% endblock %}\n        </li>\n        {% endblock %}\n    </ul>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["filterItems","repositoryFactory"],emits:["selected"],props:{startFolderId:{type:String,required:!1,default:null},selectedId:{type:String,required:!1,default:null}},data(){return{subFolders:[],parentFolder:null}},computed:{mediaFolderRepository(){return this.repositoryFactory.create("media_folder")},assetFilter(){return Cicada.Filter.getByName("asset")}},watch:{startFolderId(){this.getSubFolders(this.startFolderId),this.fetchParentFolder(this.startFolderId)}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.getSubFolders(this.startFolderId),this.fetchParentFolder(this.startFolderId)},async getSubFolders(e){let t=new l(1,50).addFilter(l.equals("parentId",e)).addAssociation("children").addSorting(l.sort("name","asc")),n=await this.mediaFolderRepository.search(t,o.api);this.subFolders=n.filter(this.filterItems)},getChildCount(e){return e.children.filter(this.filterItems).length},async fetchParentFolder(e){if(null!==e){let t=await this.mediaFolderRepository.get(e,o.api);this.updateParentFolder(t)}else this.parentFolder=null},async updateParentFolder(e){null===e.id?this.parentFolder=null:null===e.parentId?this.parentFolder={id:null,name:this.$tc("sw-media.index.rootFolderName")}:this.parentFolder=await this.mediaFolderRepository.get(e.parentId,o.api)},emitInput(e){this.$emit("selected",e)}}}},564320:function(e,t,n){var o=n(281156);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),n(745346).Z("59c81640",o,!0,{})}}]);