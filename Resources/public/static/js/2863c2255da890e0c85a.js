(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[47437],{457690:function(){},147437:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return i}}),t(980640);let{Mixin:s}=Cicada,{Criteria:a}=Cicada.Data;var i={template:'\n{% block sw_settings_list %}\n\n{% block sw_settings_number_range_index %}\n<sw-page class="sw-settings-number-range-list">\n\n    \n    {% block sw_settings_number_range_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="number_range"\n            :placeholder="$tc(\'sw-settings-number-range.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_number_range_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_number_range_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_number_range_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            /> {{ $tc(\'sw-settings-number-range.list.textHeadline\') }}\n            {% endblock %}\n\n            \n            {% block sw_settings_number_range_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_number_range_list_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_number_range_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_number_range_list_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'number_ranges.creator\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-number-range-list__add-number-range"\n            variant="primary"\n            :disabled="!acl.can(\'number_ranges.creator\') || undefined"\n            :router-link="{ name: \'sw.settings.number.range.create\' }"\n        >\n            {{ $tc(\'sw-settings-number-range.list.buttonAddNumberRange\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_number_range_list_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_settings_number_range_list_content_card %}\n            <sw-card\n                v-if="isLoading || numberRange"\n                position-identifier="sw-settings-number-range-list-content"\n            >\n                \n                {% block sw_settings_number_range_list_grid %}\n                <template #grid>\n                    \n                    {% block sw_settings_number_range_list_grid_inner %}\n                    <sw-entity-listing\n                        ref="swSettingsNumberRangeGrid"\n                        class="sw-settings-number-range-list-grid"\n                        :items="numberRange"\n                        :columns="getNumberRangeColumns()"\n                        :repository="numberRangeRepository"\n                        :disable-data-fetching="true"\n                        :sort-by="sortBy"\n                        :sort-direction="sortDirection"\n                        :full-page="false"\n                        detail-route="sw.settings.number.range.detail"\n                        :show-selection="false"\n                        :is-loading="isLoading"\n                        :allow-edit="acl.can(\'number_ranges.editor\') || undefined"\n                        :allow-inline-edit="acl.can(\'number_ranges.editor\') || undefined"\n                        :allow-delete="acl.can(\'number_ranges.deleter\') || undefined"\n                        :allow-view="acl.can(\'number_ranges.viewer\') || undefined"\n                        @page-change="onPageChange"\n                        @column-sort="onSortColumn"\n                    >\n                        \n                        {% block sw_number_range_list_grid_columns_name %}\n                        <template #column-global="{ item }">\n                            <sw-label\n                                v-if="item.type.global || item.global"\n                                class="sw-settings-number-range-list__columns-assignment-tag"\n                                size="medium"\n                            >\n                                {{ $tc(\'sw-settings-number-range.list.global\') }}\n                            </sw-label>\n\n                            <template v-if="!item.type.global && !item.global">\n                                <sw-label\n                                    v-for="numberRangeSalesChannel in item.numberRangeSalesChannels"\n                                    :key="numberRangeSalesChannel.id"\n                                    class="sw-settings-number-range-list__columns-assignment-tag"\n                                    size="medium"\n                                >\n                                    {{ numberRangeSalesChannel.salesChannel.translated.name }}\n                                </sw-label>\n                            </template>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_list_grid_columns_actions %}\n                        <template #actions="{ item }">\n                            \n                            {% block sw_settings_number_range_list_grid_columns_actions_edit %}\n                            <sw-context-menu-item\n                                class="sw-entity-listing__context-menu-edit-action"\n                                :disabled="!acl.can(\'number_ranges.editor\') || undefined"\n                                :router-link="{ name: \'sw.settings.number.range.detail\', params: { id: item.id, edit: \'edit\' }}"\n                            >\n                                {{ $tc(\'sw-settings-number-range.list.contextMenuEdit\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_number_range_list_grid_columns_actions_delete %}\n                            <sw-context-menu-item\n                                class="sw-entity-listing__context-menu-edit-delete"\n                                variant="danger"\n                                :disabled="!acl.can(\'number_ranges.deleter\') || undefined"\n                                @click="onDelete(item.id)"\n                            >\n                                {{ $tc(\'sw-settings-number-range.list.contextMenuDelete\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_list_grid_action_modals %}\n                        <template #action-modals="{ item }">\n                            \n                            {% block sw_settings_number_range_list_delete_modal %}\n                            <sw-modal\n                                v-if="showDeleteModal === item.id"\n                                :title="$tc(\'global.default.warning\')"\n                                variant="small"\n                                @modal-close="onCloseDeleteModal"\n                            >\n                                \n                                {% block sw_settings_number_range_list_delete_modal_confirm_delete_text %}\n                                <p class="sw-settings-number-range-list__confirm-delete-text">\n                                    {{ $tc(\'sw-settings-number-range.list.textDeleteConfirm\', 0, { name: item.name }) }}\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_number_range_list_delete_modal_footer %}\n                                <template #modal-footer>\n                                    \n                                    {% block sw_settings_number_range_list_delete_modal_cancel %}\n                                    <sw-button\n                                        size="small"\n                                        @click="onCloseDeleteModal"\n                                    >\n                                        {{ $tc(\'global.default.cancel\') }}\n                                    </sw-button>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_settings_number_range_list_delete_modal_confirm %}\n                                    <sw-button\n                                        variant="danger"\n                                        size="small"\n                                        @click="onConfirmDelete(item.id)"\n                                    >\n                                        {{ $tc(\'sw-settings-number-range.list.buttonDelete\') }}\n                                    </sw-button>\n                                    {% endblock %}\n                                </template>\n                                {% endblock %}\n                            </sw-modal>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-entity-listing>\n                    \n                    {% block sw_settings_number_ranges_set_list_empty_message %}\n                    <sw-empty-state\n                        v-if="!isLoading && !total"\n                        :title="$tc(\'sw-settings-number-range.list.messageEmpty\')"\n                    />\n                    {% endblock %}\n                    {% endblock %}\n                </template>\n                {% endblock %}\n            </sw-card>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n    {% endblock %}\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],mixins:[s.getByName("notification"),s.getByName("listing"),s.getByName("placeholder")],data(){return{entityName:"number_range",numberRange:null,sortBy:"name",isLoading:!1,sortDirection:"DESC",naturalSorting:!0,showDeleteModal:!1}},metaInfo(){return{title:this.$createTitle()}},computed:{filters(){return[]},expandButtonClass(){return{"is--hidden":this.expanded}},collapseButtonClass(){return{"is--hidden":!this.expanded}},numberRangeRepository(){return this.repositoryFactory.create("number_range")}},methods:{getList(){let n=new a(this.page,this.limit);this.isLoading=!0,this.naturalSorting="name"===this.sortBy,n.setTerm(this.term),n.addSorting(a.sort(this.sortBy,this.sortDirection,this.naturalSorting)),n.addAssociation("type"),n.addAssociation("numberRangeSalesChannels"),n.addAssociation("numberRangeSalesChannels.salesChannel"),this.numberRangeRepository.search(n).then(n=>(this.total=n.total,this.numberRange=n,this.isLoading=!1,n)).catch(()=>{this.isLoading=!1})},getNumberRangeColumns(){return[{property:"name",dataIndex:"name",label:"sw-settings-number-range.list.columnName",routerLink:"sw.settings.number.range.detail",primary:!0,inlineEdit:"string"},{property:"type.typeName",label:"sw-settings-number-range.list.columnUsedIn"},{property:"global",label:"sw-settings-number-range.list.columnAssignment"}]},onDelete(n){this.showDeleteModal=n},onCloseDeleteModal(){this.showDeleteModal=!1},onConfirmDelete(n){return this.showDeleteModal=!1,this.numberRangeRepository.delete(n).then(()=>{this.getList()})},onChangeLanguage(){this.getList()},onInlineEditSave(n,e){n.then(()=>{this.createNotificationSuccess({message:this.$tc("sw-settings-number-range.detail.messageSaveSuccess",0,{name:e.name})})}).catch(()=>{this.getList(),this.createNotificationError({message:this.$tc("sw-settings-number-range.detail.messageSaveError")})})}}}},980640:function(n,e,t){var s=t(457690);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[n.id,s,""]]),s.locals&&(n.exports=s.locals),t(745346).Z("292f1cf4",s,!0,{})}}]);