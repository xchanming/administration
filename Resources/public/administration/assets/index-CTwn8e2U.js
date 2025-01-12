import{s as d}from"./main.vite-CEuAX8cl.js";import"./administration-DCOj2uiN.js";import"./channel-oRk5-XZJ.js";const u=`{% block sw_product_list %} <sw-page class="sw-product-list"> {% block sw_product_list_search_bar %} <template #search-bar> <sw-search-bar initial-search-type="product" :initial-search="term" @search="onSearch" /> </template> {% endblock %} {% block sw_product_list_smart_bar_header %} <template #smart-bar-header> {% block sw_product_list_smart_bar_header_title %} <h2> {% block sw_product_list_smart_bar_header_title_text %} {{ $tc('sw-product.list.textProductOverview') }} {% endblock %} {% block sw_product_list_smart_bar_header_amount %} <span v-if="!isLoading" class="sw-page__smart-bar-amount" > ({{ total }}) </span> {% endblock %} </h2> {% endblock %} </template> {% endblock %} {% block sw_product_list_smart_bar_actions %} <template #smart-bar-actions> <sw-button-group v-tooltip.bottom="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('product.creator'), showOnDisabledElements: true }" class="sw-product-list__add-button-group" split-button > {% block sw_product_list_smart_bar_actions_add %} <sw-button v-tooltip="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('product.creator'), showOnDisabledElements: true }" class="sw-product-list__add-physical-button" :router-link="{ name: 'sw.product.create', query: { creationStates: ['is-physical'] } }" variant="primary" :disabled="!acl.can('product.creator')" > {{ $tc('sw-product.list.buttonAddProduct') }} </sw-button> {% endblock %} {% block sw_product_list_smart_bar_actions_add_download %} <sw-context-button class="sw-product-list__add-other-context-button"> <template #button> {% block sw_product_list_smart_bar_actions_add_download_button %} <sw-button class="sw-product-list__button-context-menu" square variant="primary" :disabled="!acl.can('product.editor')" > <sw-icon name="regular-chevron-down-xs" size="16" /> </sw-button> {% endblock %} </template> {% block sw_product_list_smart_bar_actions_add_download_context_menu_item_downloadable_product %} <sw-context-menu-item v-tooltip="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('product.creator'), showOnDisabledElements: true }" :router-link="{ name: 'sw.product.create', query: { creationStates: ['is-download'] } }" :disabled="!acl.can('product.creator')" > {{ $tc('sw-product.list.buttonAddDownloadableProduct') }} </sw-context-menu-item> {% endblock %} </sw-context-button> {% endblock %} </sw-button-group> </template> {% endblock %} {% block sw_product_list_language_switch %} <template #language-switch> <sw-language-switch @on-change="onChangeLanguage" /> </template> {% endblock %} <template #content> {% block sw_product_list_content %} <div class="sw-product-list__content"> {% block sw_product_list_grid %} <sw-entity-listing v-if="entitySearchable" ref="swProductGrid" class="sw-product-list-grid" :items="products" :columns="productColumns" :repository="productRepository" detail-route="sw.product.detail" :show-selection="true" :is-loading="isLoading" identifier="sw-product-list" :allow-edit="acl.can('product.editor')" :allow-delete="acl.can('product.deleter')" :allow-inline-edit="acl.can('product.editor')" :sort-by="currentSortBy" :sort-direction="sortDirection" :natural-sorting="naturalSorting" :criteria-limit="limit" :disable-data-fetching="true" :allow-bulk-edit="acl.can('product.editor')" @column-sort="onColumnSort" @page-change="onPageChange" @inline-edit-save="onInlineEditSave" @selection-change="updateSelection" @update-records="updateTotal" @bulk-edit-modal-open="onBulkEditModalOpen" > {% block sw_product_list_grid_columns %} {% block sw_product_list_grid_columns_name_preview %} <template #preview-name="{ item }"> <sw-media-preview-v2 :source="item.cover ? item.cover.media : null" /> </template> {% endblock %} {% block sw_product_list_grid_columns_name %} <template #column-name="{ item, isInlineEdit }"> {% block sw_product_list_grid_columns_name_inline_edit %} <sw-text-field v-if="isInlineEdit" v-model:value="item.name" size="small" /> {% endblock %} {% block sw_product_list_grid_columns_name_content %} <div v-else> {% block sw_product_list_grid_columns_name_content_variant_button %} <sw-button v-if="productHasVariants(item)" v-tooltip="{ message: $tc('sw-product.list.variantIndicatorTooltip') }" class="sw-product-list__variant-indicator" size="x-small" @click="openVariantModal(item)" > <sw-icon name="regular-variants" size="14px" /> </sw-button> {% endblock %} {% block sw_product_list_grid_columns_name_content_link %} <router-link :to="{ name: 'sw.product.detail', params: { id: item.id } }"> {{ item.translated ? item.translated.name : item.name }} </router-link> {% endblock %} <sw-label v-if="productIsDigital(item)" class="sw-product-list__digital-indicator" > {{ $tc('sw-product.variations.generatedListColumnContentProductState.is-download') }} </sw-label> </div> {% endblock %} </template> {% endblock %} {% block sw_product_list_grid_columns_active %} <template #column-active="{ item, isInlineEdit }"> {% block sw_product_list_grid_columns_active_inline_edit %} <template v-if="isInlineEdit"> <sw-checkbox-field v-model:value="item.active" /> </template> {% endblock %} {% block sw_product_list_grid_columns_active_content %} <template v-else> <sw-icon v-if="item.active" name="regular-checkmark-xs" small class="is--active" /> <sw-icon v-else name="regular-times-s" small class="is--inactive" /> </template> {% endblock %} </template> {% endblock %} {% block sw_product_list_grid_columns_sales %} <template #column-sales="{ item }"> {% block sw_product_list_grid_columns_sales_content %} <template v-if="productHasVariants(item)"> - </template> <template v-else> {{ item.sales }} </template> {% endblock %} </template> {% endblock %} {% block sw_product_list_grid_columns_price %} <template v-for="currency in currencies" #[\`column-price-\${currency.isoCode}\`]="{ item }" > {{ currencyFilter(getCurrencyPriceByCurrencyId(currency.id, item.price).gross, currency.isoCode) }} </template> {% endblock %} {% block sw_product_list_grid_columns_stock %} <template #column-stock="{ item, isInlineEdit, compact }"> {% block sw_product_list_grid_columns_stock_inline_edit %} <template v-if="isInlineEdit"> <sw-number-field v-model:value="item.stock" :size="compact ? 'small' : 'default'" /> </template> {% endblock %} {% block sw_product_list_grid_columns_stock_content %} <template v-else> {{ item.stock }} <sw-color-badge :variant="stockColorVariantFilter(item.stock)" /> </template> {% endblock %} </template> {% endblock %} <template #column-createdAt="{ item }"> {{ dateFilter(item.createdAt) }} </template> <template #column-updatedAt="{ item }"> {{ dateFilter(item.updatedAt) }} </template> {% block sw_product_list_grid_columns_actions %} <template #more-actions="{ item }"> {% block sw_product_list_grid_columns_actions_duplicate %} <sw-context-menu-item class="sw-product-list-grid__duplicate-action" :disabled="item.parentId != null || !acl.can('product.creator')" @click="onDuplicate(item)" > {{ $tc('sw-product.list.buttonDuplicate') }} </sw-context-menu-item> {% endblock %} {% block sw_product_list_grid_columns_actions_open_variant %} <sw-context-menu-item v-if="productHasVariants(item)" @click="openVariantModal(item)" > {{ $tc('sw-product.list.contextMenuShowVariants') }} </sw-context-menu-item> {% endblock %} </template> {% endblock %} {% endblock %} {% block sw_product_list_bulk_edit_modal %} <template #bulk-edit-modal="{ selection }"> <sw-bulk-edit-modal v-if="showBulkEditModal" class="sw-product-bulk-edit-modal" :selection="selection" :bulk-grid-edit-columns="productBulkEditColumns" @edit-items="onBulkEditItems" @modal-close="showBulkEditModal = false" > {% block sw_product_list_bulk_edit_grid_columns_name %} <template #column-name="{ item }"> <router-link :to="{ name: 'sw.product.detail', params: { id: item.id } }" target="_blank" rel="noreferrer noopener" > {{ item.translated ? item.translated.name : item.name }} </router-link> </template> {% endblock %} {% block sw_product_list_bulk_edit_grid_columns_active %} <template #column-active="{ item }"> <sw-icon small :name="item.active ? 'regular-checkmark-xs' : 'regular-times-s'" :color="item.active ? '#37d046' : '#de294c'" /> </template> {% endblock %} {% block sw_product_list_bulk_edit_grid_columns_price %} <template v-for="currency in currencies" #[\`column-price-\${currency.isoCode}\`]="{ item }" > {{ currencyFilter(getCurrencyPriceByCurrencyId(currency.id, item.price).gross, currency.isoCode) }} </template> {% endblock %} {% block sw_product_list_bulk_edit_grid_columns_stock %} <template #column-stock="{ item }"> {{ item.stock }} <sw-color-badge :variant="stockColorVariantFilter(item.stock)" /> </template> {% endblock %} </sw-bulk-edit-modal> </template> {% endblock %} </sw-entity-listing> {% endblock %} {% block sw_product_list_empty_state %} <template v-if="!isLoading && !total"> <sw-empty-state v-if="filterCriteria.length || isValidTerm(term)" :title="$tc('sw-empty-state.messageNoResultTitle')" > <template #icon> <img :src="assetFilter('/administration/static/img/empty-states/products-empty-state.svg')" :alt="$tc('sw-empty-state.messageNoResultTitle')" > </template> <template #default> {{ $tc('sw-empty-state.messageNoResultSublineBefore') }} <router-link class="sw-empty-state__description-link" :to="{ name: 'sw.profile.index.searchPreferences' }" > {{ $tc('sw-empty-state.messageNoResultSublineLink') }} </router-link> {{ $tc('sw-empty-state.messageNoResultSublineAfter') }} </template> </sw-empty-state> <sw-empty-state v-else :title="$tc('sw-product.list.messageEmpty')" > <template #icon> <img :src="assetFilter('/administration/static/img/empty-states/products-empty-state.svg')" :alt="$tc('sw-product.list.messageEmpty')" > </template> </sw-empty-state> </template> {% endblock %} </div> {% endblock %} {% block sw_product_list_content_clone_modal %} <sw-product-clone-modal v-if="cloning" :product="product" @clone-finish="onDuplicateFinish" /> {% endblock %} {% block sw_product_list_content_variant_modal %} <sw-product-variant-modal v-if="showVariantModal" :product-entity="productEntityVariantModal" @modal-close="closeVariantModal" /> {% endblock %} </template> {% block sw_product_list_sidebar %} <template #sidebar> <sw-sidebar> {% block sw_product_list_sidebar_refresh %} <sw-sidebar-item icon="regular-undo" :title="$tc('sw-product.list.titleSidebarItemRefresh')" @click="onRefresh" /> {% endblock %} <sw-sidebar-filter-panel entity="product" :store-key="storeKey" :active-filter-number="activeFilterNumber" :filters="listFilters" :defaults="defaultFilters" @criteria-changed="updateCriteria" /> </sw-sidebar> </template> {% endblock %} </sw-page> {% endblock %}`,{Mixin:s}=Cicada,{Criteria:r}=Cicada.Data,{cloneDeep:p}=Cicada.Utils.object,w={template:u,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","numberRangeService","acl","filterFactory"],mixins:[s.getByName("notification"),s.getByName("listing"),s.getByName("placeholder")],data(){return{products:null,currencies:[],sortBy:"productNumber",sortDirection:"DESC",naturalSorting:!1,isLoading:!1,isBulkLoading:!1,total:0,product:null,cloning:!1,productEntityVariantModal:!1,filterCriteria:[],defaultFilters:["active-filter","product-without-images-filter","release-date-filter","stock-filter","price-filter","manufacturer-filter","visibilities-filter","categories-filter","sales-filter","tags-filter","product-states-filter"],storeKey:"grid.filter.product",activeFilterNumber:0,showBulkEditModal:!1,searchConfigEntity:"product"}},metaInfo(){return{title:this.$createTitle()}},computed:{productRepository(){return this.repositoryFactory.create("product")},productColumns(){return this.getProductColumns()},currencyRepository(){return this.repositoryFactory.create("currency")},currenciesColumns(){return this.currencies.sort((t,e)=>e.isSystemDefault?1:-1).map(t=>({property:`price-${t.isoCode}`,dataIndex:`price.${t.id}`,label:`${t.name}`,routerLink:"sw.product.detail",allowResize:!0,currencyId:t.id,visible:t.isSystemDefault,align:"right",useCustomSort:!0}))},productCriteria(){const t=new r(this.page,this.limit);return t.setTerm(this.term),t.addSorting(r.sort(this.sortBy,this.sortDirection,this.naturalSorting)),t.addAssociation("cover.media"),t.addAssociation("manufacturer"),t.addAssociation("tax"),this.filterCriteria.forEach(e=>{t.addFilter(e)}),t},currencyCriteria(){return new r(1,500)},showVariantModal(){return!!this.productEntityVariantModal},listFilterOptions(){return{"active-filter":{property:"active",label:this.$tc("sw-product.filters.activeFilter.label"),placeholder:this.$tc("sw-product.filters.activeFilter.placeholder")},"stock-filter":{property:"stock",label:this.$tc("sw-product.filters.stockFilter.label"),numberType:"int",step:1,min:0,fromPlaceholder:this.$tc("sw-product.filters.fromPlaceholder"),toPlaceholder:this.$tc("sw-product.filters.toPlaceholder")},"product-without-images-filter":{property:"media",label:this.$tc("sw-product.filters.imagesFilter.label"),placeholder:this.$tc("sw-product.filters.imagesFilter.placeholder"),optionHasCriteria:this.$tc("sw-product.filters.imagesFilter.textHasCriteria"),optionNoCriteria:this.$tc("sw-product.filters.imagesFilter.textNoCriteria")},"manufacturer-filter":{property:"manufacturer",label:this.$tc("sw-product.filters.manufacturerFilter.label"),placeholder:this.$tc("sw-product.filters.manufacturerFilter.placeholder")},"visibilities-filter":{property:"visibilities.salesChannel",label:this.$tc("sw-product.filters.salesChannelsFilter.label"),placeholder:this.$tc("sw-product.filters.salesChannelsFilter.placeholder")},"categories-filter":{property:"categories",label:this.$tc("sw-product.filters.categoriesFilter.label"),placeholder:this.$tc("sw-product.filters.categoriesFilter.placeholder"),displayPath:!0},"sales-filter":{property:"sales",label:this.$tc("sw-product.filters.salesFilter.label"),digits:20,min:0,fromPlaceholder:this.$tc("sw-product.filters.fromPlaceholder"),toPlaceholder:this.$tc("sw-product.filters.toPlaceholder")},"price-filter":{property:"price",label:this.$tc("sw-product.filters.priceFilter.label"),digits:20,min:0,fromPlaceholder:this.$tc("sw-product.filters.fromPlaceholder"),toPlaceholder:this.$tc("sw-product.filters.toPlaceholder")},"tags-filter":{property:"tags",label:this.$tc("sw-product.filters.tagsFilter.label"),placeholder:this.$tc("sw-product.filters.tagsFilter.placeholder")},"product-states-filter":{property:"states",label:this.$tc("sw-product.filters.productStatesFilter.label"),placeholder:this.$tc("sw-product.filters.productStatesFilter.placeholder"),type:"multi-select-filter",options:[{label:this.$tc("sw-product.filters.productStatesFilter.options.physical"),value:"is-physical"},{label:this.$tc("sw-product.filters.productStatesFilter.options.digital"),value:"is-download"}]},"release-date-filter":{property:"releaseDate",label:this.$tc("sw-product.filters.releaseDateFilter.label"),dateType:"datetime-local",fromFieldLabel:null,toFieldLabel:null,showTimeframe:!0}}},listFilters(){return this.filterFactory.create("product",this.listFilterOptions)},productBulkEditColumns(){return this.productColumns.map(t=>{const{inlineEdit:e,...i}=t;return i})},assetFilter(){return Cicada.Filter.getByName("asset")},currencyFilter(){return Cicada.Filter.getByName("currency")},dateFilter(){return Cicada.Filter.getByName("date")},stockColorVariantFilter(){return Cicada.Filter.getByName("stockColorVariant")}},watch:{productCriteria:{handler(){this.getList()},deep:!0}},beforeRouteLeave(t,e,i){t.name==="sw.product.detail.base"&&this.showVariantModal&&this.closeVariantModal(),this.$nextTick(()=>{i()})},methods:{async getList(){this.isLoading=!0;let t=await Cicada.Service("filterService").mergeWithStoredFilters(this.storeKey,this.productCriteria);t=await this.addQueryScores(this.term,t);const e=p(t);if(t.addFilter(r.equals("product.parentId",null)),e.addFilter(r.not("AND",[r.equals("product.parentId",null)])),this.activeFilterNumber=t.filters.length-1,!this.entitySearchable){this.isLoading=!1,this.total=0;return}this.freshSearchTerm&&t.resetSorting();try{if(this.term){const a=await this.productRepository.search(e);if(a.length>0){const o=[];a.forEach(n=>{o.push(n.parentId)}),t.addQuery(r.equalsAny("id",o),d.HIGH_SEARCH_RANKING)}}const i=await Promise.all([this.productRepository.search(t),this.currencyRepository.search(this.currencyCriteria)]),l=i[0],c=i[1];this.total=l.total,this.products=l,this.currencies=c,this.isLoading=!1,this.selection={}}catch{this.isLoading=!1}},onInlineEditSave(t,e){const i=e.name||this.placeholder(e,"name");return t.then(()=>{this.createNotificationSuccess({message:this.$tc("sw-product.list.messageSaveSuccess",0,{name:i})})}).catch(()=>{this.getList(),this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")})})},onInlineEditCancel(t){t.discardChanges()},updateTotal({total:t}){this.total=t},onChangeLanguage(t){Cicada.State.commit("context/setApiLanguageId",t),this.getList()},updateCriteria(t){this.page=1,this.filterCriteria=t},getCurrencyPriceByCurrencyId(t,e){const i=e.find(l=>l.currencyId===t);return i||{currencyId:null,gross:null,linked:!0,net:null}},getProductColumns(){return[{property:"name",label:this.$tc("sw-product.list.columnName"),routerLink:"sw.product.detail",inlineEdit:"string",allowResize:!0,primary:!0},{property:"productNumber",naturalSorting:!0,label:this.$tc("sw-product.list.columnProductNumber"),align:"right",allowResize:!0},{property:"manufacturer.name",label:this.$tc("sw-product.list.columnManufacturer"),allowResize:!0,visible:!1},{property:"active",label:this.$tc("sw-product.list.columnActive"),inlineEdit:"boolean",allowResize:!0,align:"center"},{property:"sales",label:this.$tc("sw-product.list.columnSales"),allowResize:!0,align:"right"},...this.currenciesColumns,{property:"stock",label:this.$tc("sw-product.list.columnInStock"),inlineEdit:"number",allowResize:!0,align:"right"},{property:"availableStock",label:this.$tc("sw-product.list.columnAvailableStock"),allowResize:!0,align:"right"},{property:"createdAt",label:this.$tc("sw-product.list.columnCreatedAt"),allowResize:!0,visible:!1},{property:"updatedAt",label:this.$tc("sw-product.list.columnUpdatedAt"),allowResize:!0,visible:!1}]},onDuplicate(t){this.product=t,this.cloning=!0},onDuplicateFinish(t){this.cloning=!1,this.product=null,this.$nextTick(()=>{this.$router.push({name:"sw.product.detail",params:{id:t.id}})})},onColumnSort(t){this.onSortColumn(t)},productHasVariants(t){const e=t.childCount;return e!==null&&e>0},productIsDigital(t){return t.states&&t.states.includes("is-download")},openVariantModal(t){this.productEntityVariantModal=t},closeVariantModal(){this.productEntityVariantModal=null},onBulkEditItems(){let t="0";const e=Object.values(this.selection).filter(i=>i.states.includes("is-download"));e.length>0&&(t=e.filter(i=>i.isCloseout).length!==e.length?"1":"2"),this.$router.push({name:"sw.bulk.edit.product",params:{parentId:"null",includesDigital:t}})},onBulkEditModalOpen(){this.showBulkEditModal=!0},onBulkEditModalClose(){this.showBulkEditModal=!1}}};export{w as default};
//# sourceMappingURL=index-CTwn8e2U.js.map
