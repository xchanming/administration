(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[67424],{69585:function(){},167424:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return a}}),n(796119);let{Context:t,Utils:s}=Cicada,{Criteria:l}=Cicada.Data;var a={template:'\n{% block sw_media_field %}\n<div class="sw-media-field">\n    \n    {% block sw_media_field_label %}\n    \n    <label\n        v-if="showLabel"\n        class="sw-media-field__label"\n    >\n        <slot name="label">\n            {{ label }}\n        </slot>\n    </label>\n    {% endblock %}\n\n    \n    {% block sw_media_field_input %}\n    <div\n        class="sw-media-field__input-container"\n        :class="mediaFieldClasses"\n    >\n        \n        {% block sw_media_field_preview %}\n        <sw-media-media-item\n            v-if="mediaEntity"\n            class="sw-media-field__media-list-item sw-media-field__input"\n            :item="mediaEntity"\n            :is-list="true"\n            :show-context-menu-button="false"\n            :editable="false"\n        />\n        <div\n            v-else\n            class="sw-media-field__empty-preview sw-media-field__input"\n        ></div>\n        {% endblock %}\n\n        \n        {% block sw_media_field_toggle_button %}\n        <sw-button\n            class="sw-media-field__toggle-button"\n            square\n            :disabled="disabled"\n            @click="onTogglePicker"\n        >\n            \n            {% block sw_media_field_media_icon %}\n            <sw-icon name="regular-image" />\n            {% endblock %}\n\n            \n            {% block sw_media_field_media_popover %}\n            <sw-popover\n                v-if="showPicker"\n                :z-index="1000"\n                popover-class="sw-media-field__expanded-content"\n                class="sw-media-field__popover"\n            >\n                <div @click.stop>\n                    \n                    {% block sw_media_field_action_bar %}\n                    <div class="sw-media-field__actions_bar">\n                        \n                        {% block sw_media_field_action_bar_button_toggle %}\n                        <sw-button\n                            class="sw-media-field__action-button"\n                            @click="toggleUploadField"\n                        >\n                            <sw-icon\n                                class="sw-media-field__icon-add"\n                                name="regular-plus"\n                                small\n                            />\n                            {{ toggleButtonLabel }}\n                        </sw-button>\n                        {% endblock %}\n\n                        \n                        {% block sw_media_field_action_bar_button_unlink %}\n                        <sw-button\n                            v-if="mediaId"\n                            class="sw-media-field__action-button is--remove"\n                            @click="removeLink"\n                        >\n                            <sw-icon\n                                class="sw-media-field__icon-remove"\n                                name="regular-times-circle-s"\n                                small\n                            />\n                            {{ $tc(\'global.sw-media-field.labelUnlink\') }}\n                        </sw-button>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_media_field_upload_component %}\n                    <sw-upload-listener\n                        :upload-tag="uploadTag"\n                        auto-upload\n                        @media-upload-finish="exposeNewId"\n                    />\n\n                    <sw-media-upload-v2\n                        v-if="showUploadField"\n                        variant="regular"\n                        :file-accept="fileAccept"\n                        :default-folder="defaultFolder"\n                        :allow-multi-select="false"\n                        :upload-tag="uploadTag"\n                        :disabled="disabled"\n                    />\n                    {% endblock %}\n\n                    <div\n                        v-else\n                        class="sw-media-field__media-selection"\n                    >\n                        \n                        {% block sw_media_field_search_field %}\n                        <sw-simple-search-field\n                            v-model:value="searchTerm"\n                            @search-term-change="onSearchTermChange"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_media_field_media_list %}\n                        <sw-loader\n                            v-if="isLoadingSuggestions"\n                            class="sw-media-field__picker-loader"\n                        />\n\n                        <ul\n                            v-else\n                            class="sw-media-field__suggestion-list"\n                        >\n                            <li\n                                v-for="suggestion in suggestedItems"\n                                :key="suggestion.id"\n                                class="sw-media-field__suggestion-list-entry"\n                            >\n                                \n                                {% block sw_media_field_suggestion_preview %}\n                                <sw-media-media-item\n                                    class="sw-media-field__media-list-item"\n                                    :item="suggestion"\n                                    :is-list="true"\n                                    :show-context-menu-button="false"\n                                    @media-item-click="mediaItemChanged(suggestion.id)"\n                                />\n                                {% endblock %}\n                            </li>\n                        </ul>\n                        {% endblock %}\n\n                        <sw-pagination\n                            v-bind="{ page, limit, total }"\n                            :total-visible="4"\n                            :steps="[5]"\n                            @page-change="onPageChange"\n                        />\n                    </div>\n                </div>\n            </sw-popover>\n            {% endblock %}\n        </sw-button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","feature"],emits:["update:value"],props:{value:{type:String,required:!1,default:null},disabled:{type:Boolean,default:!1,required:!1},label:{type:String,required:!1,default:null},defaultFolder:{type:String,required:!1,validator(e){return e.length>0},default:null},fileAccept:{type:String,required:!1,default:"*/*"}},data(){return{searchTerm:"",mediaEntity:null,showPicker:!1,showUploadField:!1,suggestedItems:[],isLoadingSuggestions:!1,pickerClasses:{},uploadTag:s.createId(),page:1,limit:5,total:0}},computed:{mediaId:{get(){return this.value},set(e){this.$emit("update:value",e)}},mediaRepository(){return this.repositoryFactory.create("media")},mediaFieldClasses(){return{"is--active":this.showPicker}},toggleButtonLabel(){return this.showUploadField?this.$tc("global.sw-media-field.labelToggleSearchExisting"):this.$tc("global.sw-media-field.labelToggleUploadNew")},suggestionCriteria(){let e=new l(this.page,this.limit);return e.addFilter(l.not("AND",[l.equals("uploadedAt",null)])),this.searchTerm&&e.addFilter(l.multi("OR",[l.contains("fileName",this.searchTerm),l.contains("fileExtension",this.searchTerm)])),this.defaultFolder&&e.addFilter(l.equals("mediaFolder.defaultFolder.entity",this.defaultFolder)),e}},watch:{mediaId(e){this.fetchItem(e),this.$emit("update:value",e)}},created(){this.createdComponent()},methods:{createdComponent(){this.fetchItem()},onSearchTermChange(e){this.searchTerm=e,this.page=1,this.fetchSuggestions()},async fetchItem(e=this.mediaId){if(!e){this.mediaEntity=null;return}this.mediaEntity=await this.mediaRepository.get(e,t.api)},async fetchSuggestions(){this.isLoadingSuggestions=!0;try{this.suggestedItems=await this.mediaRepository.search(this.suggestionCriteria,t.api),this.total=this.suggestedItems.total}catch(e){throw Error(e)}finally{this.isLoadingSuggestions=!1}},onTogglePicker(){this.page=1,this.limit=5,this.total=0,this.showPicker=!this.showPicker,this.showPicker&&(this.showUploadField=!1,this.computePickerPositionAndStyle(),this.fetchSuggestions())},mediaItemChanged(e){this.$emit("update:value",e),this.onTogglePicker()},removeLink(){this.$emit("update:value",null)},computePickerPositionAndStyle(){if(!this.$el){this.pickerClasses={};return}let e=this.$el.getBoundingClientRect();this.pickerClasses={top:`${e.height+5}px`}},toggleUploadField(){this.showUploadField=!this.showUploadField},exposeNewId({targetId:e}){this.$emit("update:value",e),this.showUploadField=!1,this.showPicker=!1},showLabel(){return!!this.label||!!this.$slots.label||!!this.$scopedSlots?.label?.()},onPageChange({page:e,limit:i}){this.page=e,this.limit=i,this.fetchSuggestions()}}}},796119:function(e,i,n){var t=n(69585);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),n(745346).Z("166145b0",t,!0,{})}}]);