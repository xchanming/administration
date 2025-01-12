const i=`{% block sw_settings_list %} {% block sw_settings_currency_index %} <sw-page class="sw-settings-currency-list"> {% block sw_settings_currency_list_language_switch %} <template #language-switch> <sw-language-switch @on-change="onChangeLanguage" /> </template>> {% endblock %} {% block sw_settings_currency_list_search_bar %} <template #search-bar> <sw-search-bar initial-search-type="currency" :placeholder="$tc('sw-settings-currency.general.placeholderSearchBar')" :initial-search="term" @search="onSearch" /> </template> {% endblock %} {% block sw_settings_currency_list_smart_bar_header %} <template #smart-bar-header> {% block sw_settings_currency_list_smart_bar_header_title %} <h2> {% block sw_settings_currency_list_smart_bar_header_title_text %} {{ $tc('sw-settings.index.title') }} <sw-icon name="regular-chevron-right-xs" small /> {{ $tc('sw-settings-currency.list.textHeadline') }} {% endblock %} {% block sw_settings_currency_list_smart_bar_header_amount %} <span v-if="!isLoading" class="sw-page__smart-bar-amount" > ({{ total }}) </span> {% endblock %} </h2> {% endblock %} </template> {% endblock %} {% block sw_settings_currency_list_smart_bar_actions %} <template #smart-bar-actions> {% block sw_settings_currency_list_smart_bar_actions_add %} <sw-button :router-link="{ name: 'sw.settings.currency.create' }" class="sw-settings-currency-list__button-create" :disabled="!acl.can('currencies.creator') || undefined" variant="primary" > {{ $tc('sw-settings-currency.list.buttonAddCurrency') }} </sw-button> {% endblock %} </template> {% endblock %} <template #content> {% block sw_settings_currency_list_content %} <div class="sw-currency-list__content"> <sw-entity-listing v-if="isLoading || currency" ref="swSettingsCurrencyGrid" class="sw-settings-currency-list-grid" :items="currency" :columns="getCurrencyColumns()" :repository="currencyRepository" :full-page="false" :allow-edit="acl.can('currencies.editor')" :allow-delete="acl.can('currencies.deleter')" :allow-inline-edit="acl.can('currencies.editor') || undefined" detail-route="sw.settings.currency.detail" :show-selection="false" :is-loading="isLoading" :sort-by="sortBy" :sort-direction="sortDirection" :disable-data-fetching="true" identifier="sw-settings-currency-list" @page-change="onPageChange" @column-sort="onSortColumn" @inline-edit-save="onInlineEditSave" > {% block sw_settings_currency_list_grid_columns_actions %} <template #actions="{ item }"> {% block sw_settings_currency_list_grid_columns_actions_edit %} <sw-context-menu-item :disabled="!acl.can('currencies.editor') || undefined" :router-link="{ name: 'sw.settings.currency.detail', params: { id: item.id, edit: 'edit' }}" class="sw-currency-list__edit-action" > {{ $tc('sw-settings-currency.list.contextMenuEdit') }} </sw-context-menu-item> {% endblock %} {% block sw_settings_currency_list_grid_columns_actions_delete %} <sw-context-menu-item :disabled="item.isSystemDefault || !acl.can('currencies.deleter') || undefined" variant="danger" class="sw-currency-list__delete-action" @click="onDelete(item.id)" > {{ $tc('sw-settings-currency.list.contextMenuDelete') }} </sw-context-menu-item> {% endblock %} </template> {% endblock %} {% block sw_settings_currency_list_grid_action_modals %} <template #action-modals="{ item }"> {% block sw_settings_currency_list_delete_modal %} <sw-modal v-if="showDeleteModal === item.id" :title="$tc('global.default.warning')" variant="small" @modal-close="onCloseDeleteModal" > {% block sw_settings_currency_list_delete_modal_confirm_delete_text %} <p class="sw-settings-currency-list__confirm-delete-text"> {{ $tc('sw-settings-currency.list.textDeleteConfirm', 0, { name: item.name }) }} </p> {% endblock %} {% block sw_settings_currency_list_delete_modal_footer %} <template #modal-footer> {% block sw_settings_currency_list_delete_modal_cancel %} <sw-button size="small" @click="onCloseDeleteModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_settings_currency_list_delete_modal_confirm %} <sw-button variant="danger" size="small" @click="onConfirmDelete(item.id)" > {{ $tc('sw-settings-currency.list.buttonDelete') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %} </template> {% endblock %} </sw-entity-listing> </div> {% endblock %} </template> </sw-page> {% endblock %} {% endblock %}`,{Mixin:s}=Cicada,{Criteria:n}=Cicada.Data,c={template:i,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],mixins:[s.getByName("listing"),s.getByName("notification")],data(){return{entityName:"currency",currency:null,sortBy:"currency.name",isLoading:!1,sortDirection:"ASC",naturalSorting:!0,showDeleteModal:!1}},metaInfo(){return{title:this.$createTitle()}},computed:{currencyRepository(){return this.repositoryFactory.create("currency")}},methods:{metaInfo(){return{title:this.$createTitle()}},getList(){const e=new n(this.page,this.limit);this.isLoading=!0,this.naturalSorting=this.sortBy==="name",e.setTerm(this.term),e.addSorting(n.sort(this.sortBy,this.sortDirection,this.naturalSorting)),this.currencyRepository.search(e).then(t=>(this.total=t.total,this.currency=t,this.isLoading=!1,t)).catch(()=>{this.isLoading=!1})},onChangeLanguage(e){Cicada.State.commit("context/setApiLanguageId",e),this.getList()},onInlineEditSave(e,t){e.then(()=>{this.createNotificationSuccess({message:this.$tc("sw-settings-currency.detail.messageSaveSuccess",0,{name:t.name})})}).catch(()=>{this.getList(),this.createNotificationError({message:this.$tc("sw-settings-currency.detail.messageSaveError")})})},onDelete(e){this.showDeleteModal=e},onCloseDeleteModal(){this.showDeleteModal=!1},onConfirmDelete(e){return this.showDeleteModal=!1,this.currencyRepository.delete(e).then(()=>{this.getList()})},getCurrencyColumns(){return[{property:"name",dataIndex:"name",inlineEdit:"string",label:"sw-settings-currency.list.columnName",routerLink:"sw.settings.currency.detail",width:"250px",primary:!0},{property:"shortName",inlineEdit:"string",label:"sw-settings-currency.list.columnShortName"},{property:"symbol",inlineEdit:"string",label:"sw-settings-currency.list.columnSymbol"},{property:"factor",inlineEdit:"string",label:"sw-settings-currency.list.columnFactor"}]}}};export{c as default};
//# sourceMappingURL=index-CVR-cZm9.js.map
