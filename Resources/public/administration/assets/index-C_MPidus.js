const i=`{% block sw_settings_list %} {% block sw_settings_country_index %} <sw-page class="sw-settings-country-list"> {% block sw_settings_country_list_search_bar %} <template #search-bar> <sw-search-bar initial-search-type="country" :placeholder="$tc('sw-settings-country.general.placeholderSearchBar')" :initial-search="term" @search="onSearch" /> </template> {% endblock %} {% block sw_settings_country_list_smart_bar_header %} <template #smart-bar-header> {% block sw_settings_country_list_smart_bar_header_title %} <h2> {% block sw_settings_country_list_smart_bar_header_title_text %} {{ $tc('sw-settings.index.title') }} <sw-icon name="regular-chevron-right-xs" small /> {{ $tc('sw-settings-country.list.textHeadline') }} {% endblock %} {% block sw_settings_country_list_smart_bar_header_amount %} <span v-if="!isLoading" class="sw-page__smart-bar-amount" > ({{ total }}) </span> {% endblock %} </h2> {% endblock %} </template> {% endblock %} {% block sw_settings_country_list_smart_bar_actions %} <template #smart-bar-actions> {% block sw_settings_country_list_smart_bar_actions_add %} <sw-button v-tooltip.bottom="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('country.creator'), showOnDisabledElements: true }" class="sw-settings-country-list__button-create" variant="primary" :router-link="{ name: 'sw.settings.country.create' }" :disabled="!acl.can('country.creator') || undefined" > {{ $tc('sw-settings-country.list.buttonAddCountry') }} </sw-button> {% endblock %} </template> {% endblock %} {% block sw_settings_country_list_language_switch %} <template #language-switch> <sw-language-switch @on-change="onChangeLanguage" /> </template> {% endblock %} {% block sw_settings_country_list_content %} <template #content> <sw-card-view> {% block sw_settings_country_list_content_card %} <sw-card v-if="isLoading || country" position-identifier="sw-settings-country-list" > {% block sw_settings_country_list_grid %} <template #grid> {% block sw_settings_country_list_grid_inner %} <sw-entity-listing ref="swSettingsCountryGrid" class="sw-settings-country-list-grid" :items="country" :columns="getCountryColumns()" :repository="countryRepository" :full-page="false" detail-route="sw.settings.country.detail" :show-selection="true" :is-loading="isLoading" :allow-view="acl.can('country.viewer') || undefined" :allow-edit="acl.can('country.editor') || undefined" :allow-inline-edit="acl.can('country.editor') || undefined" :allow-delete="acl.can('country.deleter') || undefined" @inline-edit-save="onInlineEditSave" > <template #column-active="{ item, isInlineEdit }"> <template v-if="isInlineEdit"> {% block sw_settings_country_list_columns_active_editor %} <sw-checkbox-field v-model:value="item.active" /> {% endblock %} </template> <template v-else> {% block sw_settings_country_list_columns_active_label %} <sw-icon v-if="item.active" name="regular-checkmark-xs" small class="is--active" /> <sw-icon v-else name="regular-times-s" small class="is--inactive" /> {% endblock %} </template> </template> {% block sw_settings_country_list_grid_columns_actions %} <template #actions="{ item }"> {% block sw_settings_country_list_grid_columns_actions_edit %} <sw-context-menu-item :router-link="{ name: 'sw.settings.country.detail', params: { id: item.id, edit: 'edit' }}" :disabled="!acl.can('country.editor') && !acl.can('country.viewer') || undefined" class="sw-country-list__edit-action" > {{ detailPageLinkText }} </sw-context-menu-item> {% endblock %} {% block sw_settings_country_list_grid_columns_actions_delete %} <sw-context-menu-item class="sw-country-list__delete-action" variant="danger" :disabled="!acl.can('country.deleter') || undefined" @click="onDelete(item.id)" > {{ $tc('sw-settings-country.list.contextMenuDelete') }} </sw-context-menu-item> {% endblock %} </template> {% endblock %} {% block sw_settings_country_list_grid_action_modals %} <template #action-modals="{ item }"> {% block sw_settings_country_list_delete_modal %} <sw-modal v-if="showDeleteModal === item.id" :title="$tc('global.default.warning')" variant="small" @modal-close="onCloseDeleteModal" > {% block sw_settings_country_list_delete_modal_confirm_delete_text %} <p class="sw-settings-country-list__confirm-delete-text"> {{ $tc('sw-settings-country.list.textDeleteConfirm', 0, { name: item.name }) }} </p> {% endblock %} {% block sw_settings_country_list_delete_modal_footer %} <template #modal-footer> {% block sw_settings_country_list_delete_modal_cancel %} <sw-button size="small" @click="onCloseDeleteModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_settings_country_list_delete_modal_confirm %} <sw-button variant="danger" size="small" @click="onConfirmDelete(item.id)" > {{ $tc('sw-settings-country.list.buttonDelete') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %} </template> {% endblock %} </sw-entity-listing> {% endblock %} </template> {% endblock %} </sw-card> {% endblock %} </sw-card-view> </template> {% endblock %} </sw-page> {% endblock %} {% endblock %}`,{Mixin:n}=Cicada,{Criteria:s}=Cicada.Data,o={template:i,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],mixins:[n.getByName("listing")],data(){return{entityName:"country",country:null,sortBy:"country.name",isLoading:!1,sortDirection:"ASC",naturalSorting:!0,showDeleteModal:!1}},metaInfo(){return{title:this.$createTitle()}},computed:{countryRepository(){return this.repositoryFactory.create("country")},detailPageLinkText(){return!this.acl.can("country.editor")&&this.acl.can("country.viewer")?this.$tc("global.default.view"):this.$tc("global.default.edit")}},methods:{getList(){const t=new s(this.page,this.limit);this.isLoading=!0,this.naturalSorting=this.sortBy==="name",t.setTerm(this.term),t.addSorting(s.sort(this.sortBy,this.sortDirection,this.naturalSorting)),this.countryRepository.search(t,Cicada.Context.api).then(e=>(this.total=e.total,this.country=e,this.isLoading=!1,e)).catch(()=>{this.isLoading=!1})},onInlineEditSave(t,e){t.then(()=>{this.createNotificationSuccess({message:this.$tc("sw-settings-country.detail.messageSaveSuccess",0,{name:e.name})})}).catch(()=>{this.getList(),this.createNotificationError({message:this.$tc("sw-settings-country.detail.messageSaveError")})})},onChangeLanguage(t){Cicada.State.commit("context/setApiLanguageId",t),this.getList()},onDelete(t){this.showDeleteModal=t},onCloseDeleteModal(){this.showDeleteModal=!1},onConfirmDelete(t){return this.showDeleteModal=!1,this.countryRepository.delete(t).then(()=>{this.getList()})},getCountryColumns(){return[{property:"name",dataIndex:"name",inlineEdit:"string",label:"sw-settings-country.list.columnName",routerLink:"sw.settings.country.detail",primary:!0},{property:"position",inlineEdit:"number",label:"sw-settings-country.list.columnPosition"},{property:"iso",inlineEdit:"string",label:"sw-settings-country.list.columnIso"},{property:"iso3",inlineEdit:"string",label:"sw-settings-country.list.columnIso3"},{property:"active",inlineEdit:"string",label:"sw-settings-country.list.columnActive"}]}}};export{o as default};
//# sourceMappingURL=index-C_MPidus.js.map
