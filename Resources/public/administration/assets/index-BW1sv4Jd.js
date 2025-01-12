const l=`{% block sw_media_field %} <div class="sw-media-field"> {% block sw_media_field_label %} <label v-if="showLabel" class="sw-media-field__label" > <slot name="label"> {{ label }} </slot> </label> {% endblock %} {% block sw_media_field_input %} <div class="sw-media-field__input-container" :class="mediaFieldClasses" > {% block sw_media_field_preview %} <sw-media-media-item v-if="mediaEntity" class="sw-media-field__media-list-item sw-media-field__input" :item="mediaEntity" :is-list="true" :show-context-menu-button="false" :editable="false" /> <div v-else class="sw-media-field__empty-preview sw-media-field__input" ></div> {% endblock %} {% block sw_media_field_toggle_button %} <sw-button class="sw-media-field__toggle-button" square :disabled="disabled" @click="onTogglePicker" > {% block sw_media_field_media_icon %} <sw-icon name="regular-image" /> {% endblock %} {% block sw_media_field_media_popover %} <sw-popover v-if="showPicker" :z-index="1000" popover-class="sw-media-field__expanded-content" class="sw-media-field__popover" > <div @click.stop> {% block sw_media_field_action_bar %} <div class="sw-media-field__actions_bar"> {% block sw_media_field_action_bar_button_toggle %} <sw-button class="sw-media-field__action-button" @click="toggleUploadField" > <sw-icon class="sw-media-field__icon-add" name="regular-plus" small /> {{ toggleButtonLabel }} </sw-button> {% endblock %} {% block sw_media_field_action_bar_button_unlink %} <sw-button v-if="mediaId" class="sw-media-field__action-button is--remove" @click="removeLink" > <sw-icon class="sw-media-field__icon-remove" name="regular-times-circle-s" small /> {{ $tc('global.sw-media-field.labelUnlink') }} </sw-button> {% endblock %} </div> {% endblock %} {% block sw_media_field_upload_component %} <sw-upload-listener :upload-tag="uploadTag" auto-upload @media-upload-finish="exposeNewId" /> <sw-media-upload-v2 v-if="showUploadField" variant="regular" :file-accept="fileAccept" :default-folder="defaultFolder" :allow-multi-select="false" :upload-tag="uploadTag" :disabled="disabled" /> {% endblock %} <div v-else class="sw-media-field__media-selection" > {% block sw_media_field_search_field %} <sw-simple-search-field v-model:value="searchTerm" @search-term-change="onSearchTermChange" /> {% endblock %} {% block sw_media_field_media_list %} <sw-loader v-if="isLoadingSuggestions" class="sw-media-field__picker-loader" /> <ul v-else class="sw-media-field__suggestion-list" > <li v-for="suggestion in suggestedItems" :key="suggestion.id" class="sw-media-field__suggestion-list-entry" > {% block sw_media_field_suggestion_preview %} <sw-media-media-item class="sw-media-field__media-list-item" :item="suggestion" :is-list="true" :show-context-menu-button="false" @media-item-click="mediaItemChanged(suggestion.id)" /> {% endblock %} </li> </ul> {% endblock %} <sw-pagination v-bind="{ page, limit, total }" :total-visible="4" :steps="[5]" @page-change="onPageChange" /> </div> </div> </sw-popover> {% endblock %} </sw-button> {% endblock %} </div> {% endblock %} </div> {% endblock %}`,{Context:s,Utils:a}=Cicada,{Criteria:i}=Cicada.Data,d={template:l,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","feature"],emits:["update:value"],props:{value:{type:String,required:!1,default:null},disabled:{type:Boolean,default:!1,required:!1},label:{type:String,required:!1,default:null},defaultFolder:{type:String,required:!1,validator(e){return e.length>0},default:null},fileAccept:{type:String,required:!1,default:"*/*"}},data(){return{searchTerm:"",mediaEntity:null,showPicker:!1,showUploadField:!1,suggestedItems:[],isLoadingSuggestions:!1,pickerClasses:{},uploadTag:a.createId(),page:1,limit:5,total:0}},computed:{mediaId:{get(){return this.value},set(e){this.$emit("update:value",e)}},mediaRepository(){return this.repositoryFactory.create("media")},mediaFieldClasses(){return{"is--active":this.showPicker}},toggleButtonLabel(){return this.showUploadField?this.$tc("global.sw-media-field.labelToggleSearchExisting"):this.$tc("global.sw-media-field.labelToggleUploadNew")},suggestionCriteria(){const e=new i(this.page,this.limit);return e.addFilter(i.not("AND",[i.equals("uploadedAt",null)])),this.searchTerm&&e.addFilter(i.multi("OR",[i.contains("fileName",this.searchTerm),i.contains("fileExtension",this.searchTerm)])),this.defaultFolder&&e.addFilter(i.equals("mediaFolder.defaultFolder.entity",this.defaultFolder)),e}},watch:{mediaId(e){this.fetchItem(e),this.$emit("update:value",e)}},created(){this.createdComponent()},methods:{createdComponent(){this.fetchItem()},onSearchTermChange(e){this.searchTerm=e,this.page=1,this.fetchSuggestions()},async fetchItem(e=this.mediaId){if(!e){this.mediaEntity=null;return}this.mediaEntity=await this.mediaRepository.get(e,s.api)},async fetchSuggestions(){this.isLoadingSuggestions=!0;try{this.suggestedItems=await this.mediaRepository.search(this.suggestionCriteria,s.api),this.total=this.suggestedItems.total}catch(e){throw new Error(e)}finally{this.isLoadingSuggestions=!1}},onTogglePicker(){this.page=1,this.limit=5,this.total=0,this.showPicker=!this.showPicker,this.showPicker&&(this.showUploadField=!1,this.computePickerPositionAndStyle(),this.fetchSuggestions())},mediaItemChanged(e){this.$emit("update:value",e),this.onTogglePicker()},removeLink(){this.$emit("update:value",null)},computePickerPositionAndStyle(){if(!this.$el){this.pickerClasses={};return}const e=this.$el.getBoundingClientRect();this.pickerClasses={top:`${e.height+5}px`}},toggleUploadField(){this.showUploadField=!this.showUploadField},exposeNewId({targetId:e}){this.$emit("update:value",e),this.showUploadField=!1,this.showPicker=!1},showLabel(){var e,t;return!!this.label||!!this.$slots.label||!!((t=(e=this.$scopedSlots)==null?void 0:e.label)!=null&&t.call(e))},onPageChange({page:e,limit:t}){this.page=e,this.limit=t,this.fetchSuggestions()}}};export{d as default};
//# sourceMappingURL=index-BW1sv4Jd.js.map
