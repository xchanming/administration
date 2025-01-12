const l=`{% block sw_settings_delivery_time_list %} <sw-page class="sw-settings-delivery-time-list"> {% block sw_settings_delivery_time_list_smart_bar_header %} <template #smart-bar-header> {% block sw_settings_delivery_time_list_smart_bar_header_title %} <h2> {% block sw_settings_delivery_time_list_smart_bar_header_title_text %} {{ $tc('sw-settings.index.title') }} <sw-icon name="regular-chevron-right-xs" small /> {{ $tc('sw-settings-delivery-time.list.textHeadline') }} {% endblock %} </h2> {% endblock %} </template> {% endblock %} {% block sw_settings_delivery_time_list_search_bar %} <template #search-bar> <sw-search-bar initial-search-type="delivery_time" :placeholder="$tc('sw-settings-delivery-time.general.placeholder')" :initial-search="term" @search="onSearch" /> </template> {% endblock %} {% block sw_settings_delivery_time_list_language_switch %} <template #language-switch> <sw-language-switch @on-change="onChangeLanguage" /> </template> {% endblock %} {% block sw_settings_delivery_time_list_smart_bar_actions %} <template #smart-bar-actions> {% block sw_settings_delivery_time_list_smart_bar_actions_create %} <sw-button v-tooltip.bottom="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('delivery_times.creator'), showOnDisabledElements: true }" class="sw-settings-delivery-time-list__create" variant="primary" :disabled="!acl.can('delivery_times.creator') || undefined" :router-link="{ name: 'sw.settings.delivery.time.create' }" > {{ $tc('sw-settings-delivery-time.general.buttonCreate') }} </sw-button> {% endblock %} </template> {% endblock %} {% block sw_settings_delivery_time_list_content %} <template #content> {% block sw_settings_delivery_time_list_content_inner %} <sw-card-view> {% block sw_settings_delivery_time_list_grid_wrapper %} <sw-card position-identifier="sw-settings-delivery-time-list-grid-wrapper"> <template #grid> {% block sw_settings_delivery_time_list_grid %} <sw-entity-listing class="sw-settings-delivery-time-list-grid" :items="deliveryTimes" :columns="deliveryTimeColumns()" :repository="deliveryTimeRepository" detail-route="sw.settings.delivery.time.detail" :allow-view="acl.can('delivery_times.viewer')" :allow-edit="acl.can('delivery_times.editor')" :allow-delete="acl.can('delivery_times.deleter')" :sort-by="sortBy" :sort-direction="sortDirection" :allow-column-edit="false" :show-selection="acl.can('delivery_times.deleter') || undefined" :show-settings="false" :is-loading="isLoading" :full-page="false" :disable-data-fetching="true" @column-sort="onSortColumn" @page-change="onPageChange" > {% block sw_settings_delivery_time_list_grid_column_unit %} <template #column-unit="{ item }"> {{ $tc(\`sw-settings-delivery-time.list.columnUnit_\${item.unit}\`) }} </template> {% endblock %} </sw-entity-listing> {% endblock %} </template> </sw-card> {% endblock %} </sw-card-view> {% endblock %} </template> {% endblock %} </sw-page> {% endblock %}`,{Mixin:i}=Cicada,{Criteria:s}=Cicada.Data,r={template:l,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],mixins:[i.getByName("listing"),i.getByName("placeholder")],data(){return{deliveryTimes:null,isLoading:!1,sortBy:"createdAt",sortDirection:"DESC"}},metaInfo(){return{title:this.$createTitle()}},computed:{deliveryTimeRepository(){return this.repositoryFactory.create("delivery_time")}},methods:{getList(){const t=new s(this.page,this.limit);t.setTerm(this.term),t.addSorting(s.sort(this.sortBy,this.sortDirection)),this.isLoading=!0,this.deliveryTimeRepository.search(t).then(e=>(this.total=e.total,this.deliveryTimes=e,this.isLoading=!1,e)).catch(e=>(this.createNotificationError({message:this.$tc("sw-settings-delivery-time.list.errorLoad")}),this.isLoading=!1,e))},onChangeLanguage(){this.getList()},deliveryTimeColumns(){return[{property:"name",label:"sw-settings-delivery-time.list.columnName",primary:!0,routerLink:"sw.settings.delivery.time.detail"},{property:"unit",label:"sw-settings-delivery-time.list.columnUnit"},{property:"min",label:"sw-settings-delivery-time.list.columnMin"},{property:"max",label:"sw-settings-delivery-time.list.columnMax"}]}}};export{r as default};
//# sourceMappingURL=index-Bfpmu9l5.js.map
