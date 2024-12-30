(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[65373],{789407:function(){},865373:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r}}),n(495185);let{Mixin:a}=Cicada,{Criteria:s}=Cicada.Data;var r={template:'\n{% block sw_product_stream_list %}\n<sw-page class="sw-product-stream-list">\n\n    \n    {% block sw_product_stream_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="product_stream"\n            :placeholder="$tc(\'sw-product-stream.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_stream_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_product_stream_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_product_stream_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-product-stream.list.textProductStreamOverview\') }}\n            {% endblock %}\n\n            \n            {% block sw_product_stream_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_stream_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_product_stream_list_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip.bottom="getNoPermissionsTooltip(\'product_stream.creator\')"\n            class="sw-product-stream-list__create-action"\n            :disabled="!acl.can(\'product_stream.creator\')"\n            :router-link="{ name: \'sw.product.stream.create\' }"\n            variant="primary"\n        >\n            {{ $tc(\'sw-product-stream.list.buttonAddProductStream\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_manufacturer_list_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    <template #content>\n\n        \n        {% block sw_product_stream_list_content %}\n        <div class="sw-product-stream-list__content">\n\n            \n            {% block sw_product_stream_list_grid %}\n            <sw-entity-listing\n                v-if="isLoading || (productStreams && entitySearchable)"\n                ref="swProductStreamGrid"\n                class="sw-product-stream-list-grid"\n                :items="productStreams"\n                :columns="getProductStreamColumns()"\n                :repository="productStreamRepository"\n                detail-route="sw.product.stream.detail"\n                :show-selection="acl.can(\'product_stream.deleter\')"\n                :is-loading="isLoading"\n                :disable-data-fetching="true"\n                :sort-by="currentSortBy"\n                :sort-direction="sortDirection"\n                :criteria-limit="limit"\n                :allow-inline-edit="acl.can(\'product_stream.editor\')"\n                identifier="sw-product-stream-list"\n                @page-change="onPageChange"\n                @column-sort="onSortColumn"\n                @inline-edit-save="onInlineEditSave"\n                @items-delete-finish="getList"\n                @delete-item-failed="onDeleteItemFailed"\n                @delete-items-failed="onDeleteItemsFailed"\n            >\n\n                \n                {% block sw_product_stream_list_grid_bulk %}\n                <template #bulk>\n                    <span v-if="!acl.can(\'product_stream.deleter\')"></span>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_stream_list_grid_column_invalid %}\n                <template #column-invalid="{item}">\n                    <template v-if="item.invalid">\n                        {{ $tc(\'sw-product-stream.list.status.invalid\') }}\n                    </template>\n\n                    <template v-else>\n                        {{ $tc(\'sw-product-stream.list.status.valid\') }}\n                    </template>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_stream_list_grid_colum_updated_at %}\n                <template #column-updatedAt="{item}">\n                    <template v-if="item.updatedAt">\n                        {{ dateFilter(item.updatedAt) }}\n                    </template>\n\n                    <template v-else>\n                        {{ dateFilter(item.createdAt) }}\n                    </template>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_stream_list_grid_more_actions %}\n                <template #more-actions="{item}">\n                    \n                    {% block sw_product_stream_list_grid_duplicate_action %}\n                    <sw-context-menu-item\n                        :disabled="!acl.can(\'product_stream.creator\')"\n                        class="sw-entity-listing__context-menu-edit-duplicate"\n                        @click="onDuplicate(item)"\n                    >\n                        {{ $tc(\'global.default.duplicate\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_stream_list_grid_delete_action %}\n                <template #delete-action="{item, showDelete, allowDelete}">\n\n                    <sw-context-menu-item\n                        :disabled="!acl.can(\'product_stream.deleter\') || !allowDelete"\n                        class="sw-entity-listing__context-menu-edit-delete"\n                        variant="danger"\n                        @click="showDelete(item.id)"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </sw-context-menu-item>\n                </template>\n                {% endblock %}\n            </sw-entity-listing>\n            {% endblock %}\n\n            \n            {% block sw_product_stream_list_empty_state %}\n            <template v-else-if="!isLoading && !total">\n                <sw-empty-state\n                    v-if="isValidTerm(term)"\n                    :title="$tc(\'sw-empty-state.messageNoResultTitle\')"\n                >\n                    <template #default>\n                        {{ $tc(\'sw-empty-state.messageNoResultSublineBefore\') }}\n                        <router-link\n                            class="sw-empty-state__description-link"\n                            :to="{ name: \'sw.profile.index.searchPreferences\' }"\n                        >\n                            {{ $tc(\'sw-empty-state.messageNoResultSublineLink\') }}\n                        </router-link>\n                        {{ $tc(\'sw-empty-state.messageNoResultSublineAfter\') }}\n                    </template>\n                </sw-empty-state>\n\n                <sw-empty-state\n                    v-else\n                    :title="$tc(\'sw-product-stream.list.messageEmpty\')"\n                />\n            </template>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_product_stream_list_sidebar %}\n    <template #sidebar>\n        <sw-sidebar>\n\n            \n            {% block sw_product_stream_list_sidebar_refresh %}\n            <sw-sidebar-item\n                icon="regular-undo"\n                :title="$tc(\'sw-product-stream.list.titleSidebarItemRefresh\')"\n                @click="onRefresh"\n            />\n            {% endblock %}\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],mixins:[a.getByName("listing"),a.getByName("notification")],data(){return{productStreams:null,sortBy:"createdAt",sortDirection:"DESC",isLoading:!1,showDeleteModal:!1,searchConfigEntity:"product_stream"}},metaInfo(){return{title:this.$createTitle()}},computed:{productStreamRepository(){return this.repositoryFactory.create("product_stream")},dateFilter(){return Cicada.Filter.getByName("date")}},methods:{onInlineEditSave(t,e){return t.then(()=>{this.createNotificationSuccess({message:this.$tc("sw-product-stream.detail.messageSaveSuccess",0,{name:e.name})})}).catch(()=>{this.getList(),this.createNotificationError({message:this.$tc("sw-product-stream.detail.messageSaveError")})})},onChangeLanguage(){return this.getList()},async getList(){this.isLoading=!0;let t=new s(this.page,this.limit);return(t.setTerm(this.term),this.acl.can("category:read")&&t.addAggregation(s.terms("product_stream","id",null,null,s.count("categories","product_stream.categories.id"))),this.naturalSorting="createdAt"===this.sortBy,t.addSorting(s.sort(this.sortBy,this.sortDirection,this.naturalSorting)),t=await this.addQueryScores(this.term,t),this.entitySearchable)?(this.freshSearchTerm&&t.resetSorting(),this.productStreamRepository.search(t).then(t=>(this.total=t.total,this.productStreams=t,this.isLoading=!1,t)).catch(()=>{this.isLoading=!1})):(this.isLoading=!1,this.total=0,!1)},getProductStreamColumns(){return[{property:"name",dataIndex:"name",inlineEdit:"string",label:"sw-product-stream.list.columnName",routerLink:"sw.product.stream.detail",width:"250px",allowResize:!0,primary:!0},{property:"description",label:"sw-product-stream.list.columnDescription",width:"250px",allowResize:!0},{property:"updatedAt",label:"sw-product-stream.list.columnDateUpdated",align:"right",allowResize:!0},{property:"invalid",label:"sw-product-stream.list.columnStatus",allowResize:!0}]},getNoPermissionsTooltip(t,e=!0){return{showDelay:300,message:this.$tc("sw-privileges.tooltip.warning"),appearance:"dark",showOnDisabledElements:e,disabled:this.acl.can(t)||this.allowDelete}},onDeleteItemFailed({id:t,errorResponse:e}){let n=this.productStreams?.get(t),a=e?.response?.data?.errors?.[0]?.detail||null;if(!n)return;if(!this.productStreams.aggregations.product_stream){this.createNotificationError({message:a});return}let s=this.productStreams.aggregations.product_stream.buckets.filter(e=>e.key===t).at(0).categories.count,r=n.name;if(0===s){this.createNotificationError({message:a});return}this.createNotificationError({message:this.$tc("sw-product-stream.general.errorCategory",s,{name:r,count:s})})},onDeleteItemsFailed({selectedIds:t,errorResponse:e}){t.forEach(t=>{this.onDeleteItemFailed({id:t,errorResponse:e})})},onDuplicate(t){let e={cloneChildren:!0,overwrites:{name:`${t.name||t.translated.name} ${this.$tc("global.default.copy")}`}};this.isLoading=!0,this.productStreamRepository.clone(t.id,e,Cicada.Context.api).then(t=>{let e={name:"sw.product.stream.detail",params:{id:t.id}};this.$router.push(e)}).catch(()=>{this.isLoading=!1,this.createNotificationError({message:this.$tc("global.notification.unspecifiedSaveErrorMessage")})})}}}},495185:function(t,e,n){var a=n(789407);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),n(745346).Z("73f3f6dc",a,!0,{})}}]);