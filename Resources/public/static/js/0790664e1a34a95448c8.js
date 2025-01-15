(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[54269],{534511:function(){},854269:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return r}}),e(464331);let{Mixin:i,Context:o}=Cicada,{Criteria:a}=Cicada.Data;var r={template:'\n\n{% block sw_product_variant_modal %}\n<sw-modal\n    class="sw-product-variant-modal"\n    :title="modalTitle"\n    variant="full"\n    @modal-close="$emit(\'modal-close\')"\n>\n\n    \n    {% block sw_product_variant_modal_body %}\n\n    \n    {% block sw_product_variant_modal_toolbar %}\n    <div class="sw-configuration-option-list__toolbar">\n        \n        {% block sw_product_variant_modal_toolbar_container %}\n        <sw-container\n            columns="1fr minmax(50px, max-content)"\n            gap="0 16px"\n        >\n\n            \n            {% block sw_product_variant_modal_body_label_search %}\n            <sw-simple-search-field\n                v-model:value="searchTerm"\n                class="sw-product-variant-modal__search"\n                size="small"\n                variant="form"\n                @search-term-change="onSearchTermChange"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_option_list_toolbar_container_filter_list %}\n            <div class="sw-product-variant-modal__filter-list-button">\n\n                \n                {% block sw_product_variant_modal_option_list_toolbar_container_filter_list_button %}\n                <sw-button\n                    class="sw-product-variant-modal__button-filter"\n                    @click="toggleFilterMenu"\n                >\n                    {{ $tc(\'sw-product.variations.generatedFilterList\') }}\n                    <sw-icon name="regular-filter" />\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_option_list_toolbar_container_filter_context_menu %}\n                <sw-context-menu\n                    v-show="filterWindowOpen"\n                    class="sw-product-variant-modal__filter-context-menu"\n                >\n                    <sw-container\n                        columns="1fr"\n                        gap="5px"\n                    >\n\n                        \n                        {% block sw_product_variant_modal_option_list_toolbar_container_filter_tree %}\n                        <sw-tree\n                            v-show="filterOptions.length"\n                            :sortable="false"\n                            :items="filterOptions"\n                            :searchable="false"\n                            disable-context-menu\n                            bind-items-to-folder\n                        >\n                            <template #items="{ treeItems, sortable, draggedItem, disableContextMenu, onChangeRoute, checkItem}">\n                                <sw-tree-item\n                                    v-for="(item, index) in treeItems"\n                                    :key="item.id"\n                                    :sortable="false"\n                                    :item="item"\n                                    disable-context-menu\n                                    @check-item="filterOptionChecked"\n                                />\n                            </template>\n                        </sw-tree>\n                        {% endblock %}\n\n                        \n                        {% block sw_product_variant_modal_option_list_toolbar_container_filter_buttons %}\n                        <div class="sw-product-variant-modal__filter-buttons">\n                            \n                            {% block sw_product_variant_modal_option_list_toolbar_container_button_filter_reset %}\n                            <sw-button\n                                class="sw-product-variant-modal__reset-filter"\n                                @click="resetFilterOptions"\n                            >\n                                {{ $tc(\'sw-product.variations.overview.filterReset\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_product_variant_modal_option_list_toolbar_container_button_update_list %}\n                            <sw-button\n                                variant="primary"\n                                @click="fetchProductVariants"\n                            >\n                                {{ $tc(\'sw-product.variations.overview.filter\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </div>\n                        {% endblock %}\n\n                    </sw-container>\n                </sw-context-menu>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variant_modal_body_grid %}\n    <sw-data-grid\n        v-if="productVariants.length > 0"\n        ref="variantGrid"\n        :is-loading="isLoading"\n        :columns="gridColumns"\n        :data-source="productVariants"\n        :sort-by="sortBy"\n        :sort-direction="sortDirection"\n        :allow-inline-edit="acl.can(\'product.editor\')"\n        show-settings\n        @column-sort="onSortColumn"\n        @inline-edit-save="onInlineEditSave"\n        @inline-edit-cancel="onInlineEditCancel"\n    >\n\n        \n        {% block sw_product_variant_modal_body_grid_bulk %}\n        <template #bulk>\n            \n            {% block sw_product_variant_modal_body_grid_bulk_edit %}\n            <span\n                v-if="acl.can(\'product.editor\')"\n                class="link link-primary sw-product-variant-modal__bulk-edit-action"\n                role="link"\n                tabindex="0"\n                @click="toggleBulkEditModal"\n            >\n                {{ $tc(\'global.default.bulkEdit\') }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_bulk_delete %}\n            <span\n                v-if="acl.can(\'product.deleter\')"\n                class="link link-danger sw-product-variant-modal__bulk-delete-action"\n                role="link"\n                tabindex="0"\n                @click="onClickBulkDelete"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </span>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_bulk_edit_modal %}\n        <template #bulk-modals="{ selection }">\n            <sw-bulk-edit-modal\n                v-if="showBulkEditModal"\n                class="sw-product-variant-modal__bulk-edit-modal"\n                :selection="selection"\n                :bulk-grid-edit-columns="gridColumns"\n                @edit-items="onEditItems"\n                @modal-close="toggleBulkEditModal"\n            >\n                \n                {% block sw_product_variant_modal_bulk_edit_modal_column_name %}\n                <template #column-name="{ item }">\n                    <sw-media-preview-v2 :source="getItemMedia(item)" />\n                    <router-link :to="{ name: \'sw.product.detail\', params: { id: item.id } }">\n                        <span\n                            v-if="item.translated.name"\n                            class="sw-product-variant-modal__variant-name"\n                        >\n                            {{ item.translated.name }}\n                        </span>\n                        <sw-product-variant-info\n                            v-else\n                            class="sw-product-variant-modal__variant-options"\n                            :variations="item.variation"\n                            :show-tooltip="false"\n                            :ommit-parenthesis="true"\n                            seperator=", "\n                        />\n                    </router-link>\n                    <sw-product-variant-info\n                        v-if="item.translated.name"\n                        :variations="item.variation"\n                        :show-tooltip="false"\n                    />\n                    <sw-label\n                        v-if="variantIsDigital(item)"\n                        class="sw-product-variant-modal__digital-indicator"\n                    >\n                        {{ $tc(\'sw-product.variations.generatedListColumnContentProductState.is-download\') }}\n                    </sw-label>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_bulk_edit_modal_column_price %}\n                <template #column-price="{ item }">\n                    <sw-inheritance-switch\n                        class="sw-product-variant-modal__price-inheritance-switch"\n                        :is-inherited="item.price === null"\n                        disabled\n                    />\n                    <sw-price-preview\n                        :value="item.price ? item.price : []"\n                        :default-price="productEntity.price[0]"\n                        :tax-rate="productEntity.tax"\n                        :currency="currency"\n                    />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_bulk_edit_modal_column_stock %}\n                <template #column-stock="{ item }">\n                    {{ item.stock }}\n                    <sw-color-badge :variant="stockColorVariant(item.stock)" />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_bulk_edit_modal_column_active %}\n                <template #column-active="{ item }">\n                    <sw-icon\n                        v-if="item.active === true"\n                        class="sw-icon--product-status is--active"\n                        name="regular-checkmark-xs"\n                        small\n                    />\n                    <sw-icon\n                        v-else-if="item.active === false"\n                        class="sw-icon--product-status is--inactive"\n                        name="regular-times-s"\n                        small\n                    />\n                    <sw-icon\n                        v-else\n                        key="inherit-icon"\n                        name="regular-link-horizontal"\n                        size="16"\n                    />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_bulk_edit_modal_column_media %}\n                <template #column-media="{ item }">\n                    <sw-inheritance-switch\n                        class="sw-product-variant-modal__media-inherited-icon"\n                        :is-inherited="isMediaFieldInherited(item)"\n                        disabled\n                    />\n                    <sw-product-variants-media-upload\n                        :source="item"\n                        :upload-tag="item.id"\n                        :is-inherited="isMediaFieldInherited(item)"\n                        :parent-product="productEntity"\n                        disabled\n                    />\n                </template>\n                {% endblock %}\n            </sw-bulk-edit-modal>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_column_name %}\n        <template #column-name="{item, isInlineEdit}">\n\n            \n            {% block sw_product_variant_modal_body_grid_column_name_inline_edit %}\n            <sw-text-field\n                v-if="isInlineEdit"\n                v-model:value="item.name"\n                :placeholder="$tc(\'sw-product.list.variantModalInlineEditProductNamePlaceholder\')"\n                size="small"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_column_name_content %}\n            <template v-else>\n                \n                {% block sw_product_variant_modal_body_grid_column_name_content_media_preview %}\n                <sw-media-preview-v2 :source="getItemMedia(item)" />\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_body_grid_column_name_content_name %}\n                <router-link :to="{ name: \'sw.product.detail\', params: { id: item.id } }">\n                    <span\n                        v-if="item.translated.name"\n                        class="sw-product-variant-modal__variant-name"\n                    >\n                        {{ item.translated.name }}\n                    </span>\n\n                    <sw-product-variant-info\n                        v-else\n                        class="sw-product-variant-modal__variant-options"\n                        :variations="item.variation"\n                        :show-tooltip="false"\n                        :ommit-parenthesis="true"\n                        seperator=", "\n                    />\n                </router-link>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_body_grid_column_name_content_options %}\n                <sw-product-variant-info\n                    v-if="item.translated.name"\n                    :variations="item.variation"\n                    :show-tooltip="false"\n                />\n                {% endblock %}\n\n                <sw-label\n                    v-if="variantIsDigital(item)"\n                    class="sw-product-variant-modal__digital-indicator"\n                >\n                    {{ $tc(\'sw-product.variations.generatedListColumnContentProductState.is-download\') }}\n                </sw-label>\n            </template>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_column_price %}\n        <template #column-price="{item, isInlineEdit}">\n            <template v-if="isInlineEdit">\n                <sw-inheritance-switch\n                    :is-inherited="item.price === null"\n                    class="sw-product-variant-modal__price-inheritance-switch"\n                    @inheritance-restore="onInheritanceRestore(item, currency)"\n                    @inheritance-remove="onInheritanceRemove(item, currency)"\n                />\n\n                <sw-price-field\n                    :value="item.price ? item.price : []"\n                    :default-price="productEntity.price[0]"\n                    :tax-rate="productEntity.tax"\n                    :label="false"\n                    :compact="true"\n                    :disable-suffix="true"\n                    enable-inheritance\n                    :currency="currency"\n                />\n            </template>\n\n            <template v-else>\n                <sw-inheritance-switch\n                    :is-inherited="item.price === null"\n                    class="sw-product-variant-modal__price-inheritance-switch"\n                    disabled\n                />\n\n                <sw-price-preview\n                    :value="item.price ? item.price : []"\n                    :default-price="productEntity.price[0]"\n                    :tax-rate="productEntity.tax"\n                    :currency="currency"\n                />\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_column_stock %}\n        <template #column-stock="{item, isInlineEdit}">\n\n            \n            {% block sw_product_variant_modal_body_grid_column_stock_inline_edit %}\n            <sw-number-field\n                v-if="isInlineEdit"\n                v-model:value="item.stock"\n                :placeholder="$tc(\'sw-product.list.variantModalInlineEditStockPlaceholder\')"\n                size="small"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_column_stock_content %}\n            <template v-else>\n                {{ item.stock }}\n                <sw-color-badge :variant="stockColorVariantFilter(item.stock)" />\n            </template>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_column_active %}\n        <template #column-active="{item, isInlineEdit}">\n\n            \n            {% block sw_product_variant_modal_body_grid_column_active_inline_edit %}\n            <template v-if="isInlineEdit">\n                <sw-checkbox-field\n                    v-model:value="item.active"\n                    :disabled="item.active === null"\n                />\n\n                <sw-inheritance-switch\n                    :is-inherited="item.active === null"\n                    class="sw-product-variant-modal__active-inheritance-switch"\n                    @inheritance-restore="item.active = null"\n                    @inheritance-remove="item.active = true"\n                />\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_column_active_content %}\n            <template v-else>\n\n                \n                {% block sw_product_variant_modal_body_grid_column_active_content_icon_active %}\n                <sw-icon\n                    v-if="item.active === true"\n                    name="regular-checkmark-xs"\n                    small\n                    class="sw-icon--product-status is--active"\n                />\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_body_grid_column_active_content_icon_not_active %}\n                <sw-icon\n                    v-else-if="item.active === false"\n                    name="regular-times-s"\n                    small\n                    class="sw-icon--product-status is--inactive"\n                />\n                {% endblock %}\n\n                <sw-icon\n                    v-else\n                    key="inherit-icon"\n                    name="regular-link-horizontal"\n                    size="16"\n                />\n            </template>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_column_media %}\n        <template\n            #column-media="{ item, isInlineEdit, compact }"\n        >\n            \n            {% block sw_product_variant_modal_body_grid_column_media_inline_edit %}\n            \n            {% block sw_product_variant_modal_body_grid_column_media_inherit %}\n            <sw-inheritance-switch\n                :is-inherited="isMediaFieldInherited(item)"\n                :disabled="!isInlineEdit"\n                class="sw-product-variant-modal__media-inherited-icon"\n                @inheritance-restore="onMediaInheritanceRestore(item, isInlineEdit)"\n                @inheritance-remove="onMediaInheritanceRemove(item, isInlineEdit)"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_column_media_content %}\n            <sw-product-variants-media-upload\n                :source="item"\n                :upload-tag="item.id"\n                :is-inherited="isMediaFieldInherited(item)"\n                :disabled="isInlineEdit ? isMediaFieldInherited(item) : true"\n                :parent-product="productEntity"\n            />\n            {% endblock %}\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_actions %}\n        <template #actions="{item}">\n\n            \n            {% block sw_product_variant_modal_body_grid_actions_edit %}\n            <sw-context-menu-item @click="visitProduct(item.id)">\n                {{ contextMenuEditText }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_actions_delete %}\n            <sw-context-menu-item\n                v-tooltip.left="getNoPermissionsTooltip(\'product.deleter\')"\n                variant="danger"\n                :disabled="!acl.can(\'product.deleter\')"\n                @click="onDeleteVariant(item)"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_pagination %}\n        <template #pagination>\n            <sw-pagination\n                v-if="productVariants.length !== 0"\n                ref="pagination"\n                :page="paginationPage"\n                :limit="paginationLimit"\n                :total="productVariants.total"\n                @page-change="onPageChange"\n            />\n        </template>\n        {% endblock %}\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_product_variant_modal_body_empty_state %}\n    <sw-empty-state\n        v-else\n        title=""\n        :subline="$tc(\'sw-product.list.variantGridEmptyStateSubline\')"\n        :absolute="false"\n    />\n    {% endblock %}\n\n    \n    {% block sw_product_variant_modal_body_delete_modal %}\n    <sw-modal\n        v-if="showDeleteModal"\n        class="sw-product-variant-modal__delete-modal"\n        :title="$tc(\'sw-product.list.variantDeleteModalTitle\')"\n        variant="small"\n        @modal-close="closeDeleteModal"\n    >\n\n        \n        {% block sw_product_variant_modal_body_delete_modal_body_multiple %}\n        <template v-if="toBeDeletedVariants.length > 1">\n\n            \n            {% block sw_product_variant_modal_body_delete_modal_body_multiple_text %}\n            <p>{{ $t(\'sw-product.list.multipleVariantsDeleteModalText\', { amount: toBeDeletedVariants.length }) }}</p>\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_delete_modal_body_multiple_subline %}\n            <p class="sw-product-variant-modal__delete-modal-subline">\n                ({{ $tc(\'sw-product.list.multipleVariantsDeleteModalSubline\') }})\n            </p>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_delete_modal_body_single %}\n        <p v-else>\n            {{ $t(\'sw-product.list.variantDeleteModalText\', { variantName: buildVariantName(toBeDeletedVariants[0]) }) }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_delete_modal_footer %}\n        <template #modal-footer>\n\n            \n            {% block sw_product_variant_modal_body_delete_modal_footer_close %}\n            <sw-button\n                size="small"\n                @click="closeDeleteModal"\n            >\n                {{ $tc(\'global.default.cancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_delete_modal_footer_confirm %}\n            <sw-button-process\n                variant="danger"\n                size="small"\n                :animation-timeout="750"\n                :process-success="isDeletionOver"\n                :is-loading="isDeleteButtonLoading"\n                @click="deleteVariants"\n                @update:process-success="closeDeleteModal"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-button-process>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_product_variant_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_product_variant_modal_footer_visit_main_product %}\n        <div\n            class="sw-product-variant-modal__main-product-link"\n            role="button"\n            tabindex="0"\n            @click="visitProduct(productEntity.id)"\n        >\n            {{ openMainProductText }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_footer_close_button %}\n        <sw-button\n            size="small"\n            @click="$emit(\'modal-close\')"\n        >\n            {{ $tc(\'global.sw-modal.labelClose\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],emits:["modal-close"],mixins:[i.getByName("notification")],props:{productEntity:{type:Object,required:!0}},data(){return{productVariants:[],currency:null,paginationLimit:25,paginationPage:1,toBeDeletedVariants:[],showDeleteModal:!1,searchTerm:"",isDeleteButtonLoading:!1,isDeletionOver:!1,sortDirection:"ASC",sortBy:"productNumber",isLoading:!1,groups:[],filterOptions:[],includeOptions:[],filterWindowOpen:!1,showBulkEditModal:!1}},computed:{modalTitle(){return this.$t("sw-product.list.variantModalTitle",{productName:this.productEntity.translated.name})},openMainProductText(){return this.$t("sw-product.list.openMainProduct",{productName:this.productEntity.translated.name})},productRepository(){return this.repositoryFactory.create("product")},productMediaRepository(){return this.repositoryFactory.create("product_media")},productConfigurationRepository(){return this.repositoryFactory.create("product_configurator_setting")},currencyRepository(){return this.repositoryFactory.create("currency")},groupRepository(){return this.repositoryFactory.create("property_group")},contextMenuEditText(){return this.acl.can("product.editor")?this.$tc("global.default.edit"):this.$tc("global.default.view")},filterCriteria(){return this.includeOptions.length<=0?[]:this.includeOptions.reduce((t,n)=>{let e=t.find(t=>t.id===n.groupId);return e?e.options.push(n.id):t.push({id:n.groupId,options:[n.id]}),t},[]).map(t=>a.equalsAny("product.optionIds",t.options))},productVariantCriteria(){let t=new a(this.paginationPage,this.paginationLimit),n=this.productEntity.id;return t.addFilter(a.equals("parentId",n)),this.searchTerm&&t.setTerm(this.searchTerm),t.getAssociation("options").addAssociation("group"),t.addAssociation("cover.media"),t.addAssociation("media.media"),t.addAssociation("tax"),this.searchTerm&&this.searchTerm.split(" ").forEach(n=>{t.addQuery(a.equals("product.options.name",n),3500),t.addQuery(a.contains("product.options.name",n),500)}),this.filterCriteria&&this.filterCriteria.forEach(n=>{t.addFilter(n)}),t.addSorting(a.sort(this.sortBy,this.sortDirection,!0)),t},gridColumns(){return[{property:"name",dataIndex:"name",label:this.$tc("sw-product.list.columnName"),routerLink:"sw.product.detail",inlineEdit:"string",allowResize:!0},{property:"sales",dataIndex:"sales",label:this.$tc("sw-product.list.columnSales"),allowResize:!0,align:"right"},{property:"price",dataIndex:`price.${this.currency?.id||""}.net`,label:"sw-product.list.columnPrice",allowResize:!0,width:"250px",inlineEdit:"number",align:"right"},{property:"stock",dataIndex:"stock",label:"sw-product.list.columnInStock",allowResize:!0,inlineEdit:"number",align:"right"},{property:"active",dataIndex:"active",label:"sw-product.list.columnActive",allowResize:!0,inlineEdit:"boolean",align:"center"},{property:"productNumber",dataIndex:"productNumber",label:"sw-product.list.columnProductNumber",allowResize:!0,align:"right"},{property:"media",dataIndex:"media",label:this.$tc("sw-product.list.columnMedia"),allowResize:!0,inlineEdit:!0,sortable:!1,visible:!1}]},canBeDeletedCriteria(){let t=new a(1,25),n=this.toBeDeletedVariants.map(t=>t.id);return t.addFilter(a.equalsAny("canonicalProductId",n)),t},groupCriteria(){return new a(1,100)},selectedGroups(){let t=this.productEntity?.configuratorSettings.reduce((t,n)=>(0>t.indexOf(n.option.groupId)&&t.push(n.option.groupId),t),[]);return this.groups?.filter(n=>t.indexOf(n.id)>=0)},filterOptionsListing(){let t=[...this.selectedGroups].sort((t,n)=>t.position-n.position).map((t,n)=>{let e=this.getOptionsForGroup(t.id);return{id:t.id,name:t.name,childCount:e.length,parentId:null,afterId:n>0?this.selectedGroups[n-1].id:null,storeObject:t}}),n=t.reduce((t,n)=>{let e=this.getOptionsForGroup(n.id);return[...t,...e.sort((t,n)=>t.position-n.position).map((t,n)=>{let i=t.option,o=null;return n>0&&(o=e[n-1].option.id),{id:i.id,name:i.name,childCount:0,parentId:i.groupId,afterId:o,storeObject:t}})]},[]);return[...t,...n]},stockColorVariantFilter(){return Cicada.Filter.getByName("stockColorVariant")}},watch:{selectedGroups(){this.filterOptions=this.filterOptionsListing}},created(){this.createdComponent()},methods:{createdComponent(){return this.isLoading=!0,Promise.all([this.fetchProductMedias(),this.fetchProductConfiguration(),this.fetchProductVariants(),this.fetchSystemCurrency(),this.loadGroups()]).finally(()=>{this.isLoading=!1})},fetchProductMedias(){let t=new a;return t.addFilter(a.equals("productId",this.productEntity.id)),this.productMediaRepository.search(t).then(t=>{this.productEntity.media=t})},fetchProductConfiguration(){let t=new a;return t.addAssociation("option"),t.addFilter(a.equals("productId",this.productEntity.id)),this.productConfigurationRepository.search(t).then(t=>{this.productEntity.configuratorSettings=t})},fetchSystemCurrency(){let t=Cicada.Context.app.systemCurrencyId;return this.currencyRepository.get(t).then(t=>{this.currency=t})},fetchProductVariants(){return this.isLoading=!0,this.productRepository.search(this.productVariantCriteria).then(t=>{this.productVariants=t}).finally(()=>{this.isLoading=!1})},getDefaultPriceForVariant(t){return t.price&&t.price.find(t=>t.currencyId===this.defaultCurrency.id)||this.defaultPrice},onInheritanceRestore(t,n){if(!t.price)return;let e=t.price.findIndex(t=>t.currencyId===n.id);e>=0&&(this.isCompatEnabled("INSTANCE_DELETE")?this.$delete(t.price,e):delete t.price[e]),t.price.length<=0&&(t.price=null)},onInheritanceRemove(t,n){t.price||(t.price=[]);let e=this.productEntity.price[0],i={currencyId:n.id,gross:e.gross*n.factor,linked:e.linked,net:e.net*n.factor};this.isCompatEnabled("INSTANCE_SET")?this.$set(t.price,t.price.length,i):t.price.push(i)},sortOptions(t){return[...t].sort((t,n)=>t.position===n.position?t.name>n.name?1:-1:t.position>n.position?1:-1)},buildVariantOptions(t,n=", ",e=!1,i=!1){let o=t.options,a=this.sortOptions(o).reduce((t,e)=>{let o=e.translated.name,a=e.group.translated.name;return t.concat(i?"":a,i?"":": ",o,n)},"").slice(0,-n.length);return e?a:`(${a})`},buildVariantName(t){let n=this.buildVariantOptions(t),e=t.translated.name||this.productEntity.translated.name;return`${e} ${n}`},getVariantPrice(t){let n=t.price;return n?n[0]:this.productEntity.price[0]},onPageChange({limit:t=25,page:n=1}){this.paginationLimit=t,this.paginationPage=n,this.fetchProductVariants()},visitProduct(t){this.$emit("modal-close"),this.$nextTick().then(()=>{this.$router.push({name:"sw.product.detail",params:{id:t}})})},getItemMedia(t){return t.cover?t.cover.media:this.productEntity.cover?this.productEntity.cover.media:null},deleteVariants(){this.isDeleteButtonLoading=!0;let t=this.toBeDeletedVariants.map(t=>t.id),n=this.toBeDeletedVariants[0].translated.name||this.productEntity.translated.name,e=t.length;this.canVariantsBeDeleted().then(i=>{if(!i){this.isDeleteButtonLoading=!1,this.isDeletionOver=!0,this.createNotificationError({message:this.$tc("sw-product.list.notificationVariantDeleteErrorCanonicalUrl",e,{variantName:n})});return}this.productRepository.syncDeleted(t).then(()=>{this.createNotificationSuccess({message:this.$tc("sw-product.list.notificationVariantDeleteSuccess",e,{variantName:n,amount:e})}),this.$refs.variantGrid.resetSelection(),this.fetchProductVariants()}).catch(()=>{this.createNotificationError({message:this.$tc("sw-product.list.notificationVariantDeleteError",e,{variantName:n,amount:e})})}).finally(()=>{this.isDeleteButtonLoading=!1,this.isDeletionOver=!0})})},async canVariantsBeDeleted(){return 0===(await this.productRepository.search(this.canBeDeletedCriteria)).length},onInlineEditSave(t){let n=this.buildVariantName(t);this.productRepository.save(t).then(()=>{this.createNotificationSuccess({message:this.$t("sw-product.list.notificationVariantSaveSuccess",{variantName:n})}),this.fetchProductVariants()})},onInlineEditCancel(){this.fetchProductVariants()},onClickBulkDelete(){let t=this.$refs.variantGrid.selection;this.toBeDeletedVariants=Object.values(t),this.showDeleteModal=!0},closeDeleteModal(){this.showDeleteModal=!1,this.toBeDeletedVariants=[],this.isDeletionOver=!1},onDeleteVariant(t){this.toBeDeletedVariants.push(t),this.showDeleteModal=!0},onSearchTermChange(){this.fetchProductVariants()},onSortColumn(t){this.sortBy===t.dataIndex?this.sortDirection="ASC"===this.sortDirection?"DESC":"ASC":this.sortBy=t.dataIndex,this.fetchProductVariants()},getNoPermissionsTooltip(t,n=!0){return{showDelay:300,message:this.$tc("sw-privileges.tooltip.warning"),appearance:"dark",showOnDisabledElements:n,disabled:this.acl.can(t)}},isMediaFieldInherited(t){return!t.forceMediaInheritanceRemove&&(t.media?t.media.length<=0:!!t.media)},onMediaInheritanceRestore(t,n){n&&(t.forceMediaInheritanceRemove=!1,t.coverId=null,t.media.getIds().forEach(n=>{t.media.remove(n)}))},onMediaInheritanceRemove(t,n){n&&(t.forceMediaInheritanceRemove=!0,this.productEntity.media.forEach(({id:n,mediaId:e,position:i,media:a})=>{let r=this.productMediaRepository.create(o.api);Object.assign(r,{mediaId:e,position:i,productId:this.productEntity.id,media:a}),this.productEntity.coverId===n&&(t.coverId=r.id),t.media.push(r)}))},loadGroups(){return this.groupRepository.search(this.groupCriteria).then(t=>{this.groups=t})},resetFilterOptions(){this.filterOptions=[],this.includeOptions=[],this.$nextTick(()=>{this.filterOptions=this.filterOptionsListing,this.fetchProductVariants()})},filterOptionChecked(t){if(t.checked){this.includeOptions.push({id:t.id,groupId:t.parentId});return}this.includeOptions=this.includeOptions.filter(n=>n.id!==t.id)},getOptionsForGroup(t){return this.productEntity?.configuratorSettings.filter(n=>!n.isDeleted&&n.option.groupId===t)},toggleFilterMenu(){this.filterWindowOpen=!this.filterWindowOpen},toggleBulkEditModal(){this.showBulkEditModal=!this.showBulkEditModal},async onEditItems(){await this.$nextTick();let t="0",n=Object.values(this.$refs.variantGrid.selection).filter(t=>t.states.includes("is-download"));n.length>0&&(t=n.filter(t=>t.isCloseout).length!==n.length?"1":"2"),this.$router.push({name:"sw.bulk.edit.product",params:{parentId:this.productEntity.id,includesDigital:t}})},variantIsDigital(t){return t.states&&t.states.includes("is-download")}}}},464331:function(t,n,e){var i=e(534511);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),e(745346).Z("15ac220f",i,!0,{})}}]);