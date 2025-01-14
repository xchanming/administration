(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[28280],{142302:function(){},728280:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return a}});var i=s(843045);s(410708);let{Mixin:n,Data:{Criteria:l}}=Cicada;var a={template:'\n{% block sw_settings_snippet_list %}\n<sw-page class="sw-settings-snippet-list">\n\n    \n    {% block sw_settings_snippet_set_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="snippet"\n            :placeholder="$tc(\'sw-settings-snippet.general.placeholderSearchBarSnippets\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_list_smart_bar_header %}\n    <template #smart-bar-header>\n        {# Hack for fixing this problem: https://github.com/vuejs/core/issues/9308 #}\n        <div style="display: none;"></div>\n        \n        {% block sw_settings_snippet_list_smart_bar_header_title %}\n        <h2\n            v-if="!isLoading && snippetSets"\n            class="sw-settings-snippet-list__smart_bar_header"\n        >\n            \n            {% block sw_settings_snippet_list_smart_bar_header_title_text %}\n            <span class="sw-settings_snippet_list__smart-bar-title-text">\n                {{ $tc(\'sw-settings-snippet.list.textSnippetList\', snippetSets.length, { setName: metaName }) }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_settings_snippet_list_smart_bar_header_amount %}\n            <span class="sw-page__smart-bar-amount">\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_snippet_list_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip.bottom="getNoPermissionsTooltip(\'snippet.creator\')"\n            :router-link="{ name: \'sw.settings.snippet.create\', query: { ids: queryIds, limit, page } }"\n            :disabled="isLoading || !acl.can(\'snippet.creator\') || undefined"\n            variant="primary"\n        >\n            {{ $tc(\'sw-settings-snippet.list.buttonAdd\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_list_content %}\n    <template #content>\n        <div class="sw-settings-snippet-list__content">\n\n            \n            {% block sw_settings_snippet_list_grid %}\n            <sw-data-grid\n                :is-loading="isLoading || !snippetSets"\n                :data-source="grid"\n                :columns="columns"\n                class="sw-settings-snippet-list__grid"\n                :full-page="true"\n                :skeleton-item-amount="skeletonItemAmount"\n                :sort-by="sortBy"\n                :sort-direction="sortDirection"\n                :allow-inline-edit="acl.can(\'snippet.editor\')"\n                :allow-column-edit="true"\n                :show-settings="true"\n                :show-selection="false"\n                @column-sort="onSortColumn"\n                @page-change="onPageChange"\n                @inline-edit-cancel="onInlineEditCancel"\n                @inline-edit-save="onInlineEditSave"\n            >\n\n                \n                {% block sw_settings_salutations_list_columns %}\n                \n                {% block sw_settings_snippet_list_column_id %}\n                <template\n                    #column-id="{ item, isInlineEdit }"\n                >\n                    \n                    {% block sw_settings_snippet_list_column_id_inline_edit %}\n                    <template v-if="isInlineEdit">\n                        {{ item.id }}\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_snippet_list_column_id_content %}\n                    <template v-else>\n                        <router-link\n                            :to="{\n                                name: \'sw.settings.snippet.detail\',\n                                params: { key: item[metaId].translationKey, origin: item[metaId].translationKey },\n                                query: { ids: queryIds, limit, page }\n                            }"\n                        >\n                            {{ item.id }}\n                        </router-link>\n                    </template>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_snippet_list_column_value %}\n                <template\n                    v-for="set in snippetSets"\n                    :key="set.id"\n                    #[`column-${set.id}`]="{ item, compact, isInlineEdit }"\n                >\n                    \n                    {% block sw_settings_snippet_list_column_value_inline_edit %}\n                    <template v-if="isInlineEdit">\n                        <sw-text-field\n                            v-model:value="item[set.id].value"\n                            :placeholder="item[set.id].origin || $tc(\'sw-settings-snippet.general.placeholderValue\')"\n                            :size="compact ? \'small\' : \'default\'"\n                        />\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_snippet_list_column_value_content %}\n                    <template v-else>\n                        {{ item[set.id].value }}\n                    </template>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_snippet_list_grid_column_actions %}\n                <template #actions="{ item }">\n                    \n                    {% block sw_settings_snippet_list_grid_column_actions_edit %}\n                    <sw-context-menu-item\n                        class="sw-settings-snippet-list__edit-action"\n                        :router-link="{\n                            name: \'sw.settings.snippet.detail\',\n                            params: { key: item[metaId].translationKey, origin: item[metaId].translationKey },\n                            query: { ids: queryIds, limit, page }\n                        }"\n                    >\n                        {{ contextMenuEditSnippet }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_snippet_list_grid_column_actions_delete %}\n                    <sw-context-menu-item\n                        v-tooltip.left="getNoPermissionsTooltip(\'snippet.deleter\')"\n                        class="sw-settings-snippet-list__delete-action"\n                        variant="danger"\n                        :disabled="!acl.can(\'snippet.deleter\') || undefined"\n                        @click="onReset(item)"\n                    >\n                        {{ $tc(\'sw-settings-snippet.list.contextMenuDelete\', item.isCustomSnippet) }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_salutation_list_action_modals %}\n                \n                {% block sw_settings_snippet_list_delete_modal %}\n                <template\n                    #action-modals="{ item }"\n                >\n                    <sw-modal\n                        v-if="showDeleteModal === item"\n                        class="sw-settings-snippet-list__delete-modal"\n                        :title="$tc(\'global.default.warning\')"\n                        variant="large"\n                        @modal-close="onCloseDeleteModal"\n                    >\n                        \n                        {% block sw_settings_snippet_list_delete_modal_text %}\n                        \n                        {% block sw_settings_snippet_list_delete_modal_text_reset %}\n                        <span\n                            v-if="!item.isCustomSnippet"\n                            class="sw-settings-snippet-list__delete-modal-confirm-reset-text"\n                        >\n                            {{ $tc(\'sw-settings-snippet.list.textResetConfirm\', queryIdCount, { key: item[metaId].translationKey }) }}\n                        </span>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_snippet_list_delete_modal_text_delete %}\n                        <span\n                            v-else\n                            class="sw-settings-snippet-list__delete-modal-confirm-delete-text"\n                        >\n                            {{ $tc(\'sw-settings-snippet.list.textDeleteConfirm\', 0, { key: item[metaId].translationKey }) }}\n                        </span>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_snippet_list_delete_modal_grid %}\n                        <sw-grid\n                            v-if="!item.isCustomSnippet && resetItems.length > 1"\n                            class="sw-settings-snippet-list__delete-modal-grid"\n                            :items="resetItems"\n                            table\n                            @sw-grid-select-item="onSelectionChanged"\n                            @sw-grid-select-all="onSelectionChanged"\n                        >\n                            \n                            {% block sw_settings_snippet_list_delete_modal_grid_template %}\n                            <template\n                                #columns="{ item }"\n                            >\n                                \n                                {% block sw_settings_snippet_list_delete_modal_grid_name %}\n                                <sw-grid-column\n                                    :label="$tc(\'sw-settings-snippet.list.columnHeaderGridColumnTitleSet\')"\n                                    flex="minmax(150px, 1fr)"\n                                >\n                                    {{ item.setName }}\n                                </sw-grid-column>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_snippet_list_delete_modal_grid_value %}\n                                <sw-grid-column\n                                    :label="$tc(\'sw-settings-snippet.list.columnValue\')"\n                                    flex="minmax(50px,1fr)"\n                                >\n                                    {{ item.value }}\n                                </sw-grid-column>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_snippet_list_delete_modal_grid_origin %}\n                                <sw-grid-column\n                                    :label="$tc(\'sw-settings-snippet.list.columnHeaderResetTo\')"\n                                    flex="minmax(50px,1fr)"\n                                >\n                                    {{ item.origin }}\n                                </sw-grid-column>\n                                {% endblock %}\n                            </template>\n                            {% endblock %}\n                        </sw-grid>\n                        {% endblock %}\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_snippet_list_delete_modal_footer %}\n                        <template #modal-footer>\n                            \n                            {% block sw_settings_snippet_list_delete_modal_cancel %}\n                            <sw-button\n                                size="small"\n                                @click="onCloseDeleteModal"\n                            >\n                                {{ $tc(\'global.default.cancel\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_snippet_list_delete_modal_confirm %}\n                            <sw-button\n                                :disabled="hasResetableItems && !item.isCustomSnippet && resetItems.length !== 1 || undefined"\n                                variant="danger"\n                                size="small"\n                                @click="onConfirmReset(item)"\n                            >\n                                {{ $tc(\'sw-settings-snippet.list.contextMenuDelete\', item.isCustomSnippet) }}\n                            </sw-button>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-modal>\n                </template>\n                {% endblock %}\n                {% endblock %}\n                {% endblock %}\n\n                \n                {% block sw_settings_snippet_list_grid_pagination %}\n                <template #pagination>\n                    <sw-pagination\n                        :page="page"\n                        :limit="limit"\n                        :total="total"\n                        :total-visible="7"\n                        :steps="steps"\n                        @page-change="onPageChange"\n                    />\n                </template>\n                {% endblock %}\n\n            </sw-data-grid>\n            {% endblock %}\n        </div>\n    </template>\n\n    <template #sidebar>\n        \n        {% block sw_settings_snippet_list_grid_sidebar %}\n        <sw-settings-snippet-sidebar\n            class="sw-settings-snippet-list__grid-sidebar"\n            :filter-items="filterItems"\n            :author-filters="authorFilters"\n            :filter-settings="filterSettings"\n            @sidebar-reset-all="onResetAll"\n            @change="onChange"\n            @sw-sidebar-collaps-refresh-grid="getList"\n            @sw-sidebar-close="onSidebarClose"\n        />\n        {% endblock %}\n    </template>\n\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["snippetSetService","snippetService","userService","repositoryFactory","acl","userConfigService"],mixins:[n.getByName("sw-settings-list")],data(){return{entityName:"snippet",sortBy:"id",sortDirection:"ASC",metaId:"",currentAuthor:"",snippetSets:null,hasResetableItems:!0,showOnlyEdited:!1,showOnlyAdded:!1,emptySnippets:!1,grid:[],resetItems:[],filterItems:[],authorFilters:[],appliedFilter:[],appliedAuthors:[],emptyIcon:this.$route.meta.$module.icon,skeletonItemAmount:25,filterSettings:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.snippetSets?this.$tc("sw-settings-snippet.list.identifier",this.snippetSets.length,{setName:this.metaName}):""},columns(){return this.getColumns()},snippetRepository(){return this.repositoryFactory.create("snippet")},snippetSetRepository(){return this.repositoryFactory.create("snippet_set")},queryIds(){return Array.isArray(this.$route.query.ids)?this.$route.query.ids:[this.$route.query.ids]},snippetSetCriteria(){let t=new l(1,25);return t.addFilter(l.equalsAny("id",this.queryIds)),t.addSorting(l.sort("name","ASC")),this.term&&t.setTerm(this.term),t},queryIdCount(){return this.queryIds.length},metaName(){return this.snippetSets[0]?.name},filter(){let t={};return this.showOnlyEdited&&(t.edited=!0),this.showOnlyAdded&&(t.added=!0),this.emptySnippets&&(t.empty=!0),this.term&&(t.term=this.term),this.appliedFilter.length>0&&(t.namespace=this.appliedFilter),this.appliedAuthors.length>0&&(t.author=this.appliedAuthors),t},contextMenuEditSnippet(){return this.acl.can("snippet.editor")?this.$tc("global.default.edit"):this.$tc("global.default.view")},hasActiveFilters(){return!!this.filterSettings&&Object.values(this.filterSettings).some(t=>!0===t)},activeFilters(){let t={};return this.hasActiveFilters&&(this.filterSettings.editedSnippets&&(t={...t,edited:!0}),this.filterSettings.addedSnippets&&(t={...t,added:!0}),this.filterSettings.emptySnippets&&(t={...t,empty:!0}),t={...t,author:[]},this.authorFilters.forEach(e=>{!0===this.filterSettings[e]&&t.author.push(e)}),t={...t,namespace:[]},this.filterItems.forEach(e=>{!0===this.filterSettings[e]&&t.namespace.push(e)})),t}},created(){this.createdComponent()},beforeUnmount(){this.beforeDestroyComponent()},methods:{async createdComponent(){this.addEventListeners(),this.snippetSetRepository.search(this.snippetSetCriteria).then(t=>{this.snippetSets=t}),this.userService.getUser().then(t=>{this.currentAuthor=`user/${t.data.username}`});let t=await this.snippetService.getFilter();this.filterItems=t.data;let e=await this.snippetSetService.getAuthors();this.authorFilters=e.data,await this.getFilterSettings(),this.hasActiveFilters&&this.initializeSnippetSet(this.activeFilters)},beforeDestroyComponent(){this.saveUserConfig(),this.removeEventListeners()},addEventListeners(){window.addEventListener("beforeunload",t=>this.beforeUnloadListener(t))},removeEventListeners(){window.removeEventListener("beforeunload",t=>this.beforeUnloadListener(t))},beforeUnloadListener(t){this.saveUserConfig()},async getFilterSettings(){let t=await this.getUserConfig();this.filterSettings=t.data["grid.filter.setting-snippet-list"]?t.data["grid.filter.setting-snippet-list"]:this.createFilterSettings()},getUserConfig(){return this.userConfigService.search(["grid.filter.setting-snippet-list"])},saveUserConfig(){return this.userConfigService.upsert({"grid.filter.setting-snippet-list":this.filterSettings})},createFilterSettings(){let t=this.authorFilters.reduce((t,e)=>({...t,[e]:!1}),{}),e=this.filterItems.reduce((t,e)=>({...t,[e]:!1}),{});return{emptySnippets:!1,editedSnippets:!1,addedSnippets:!1,...t,...e}},getList(){this.hasActiveFilters?this.initializeSnippetSet(this.activeFilters):this.initializeSnippetSet()},getColumns(){let t=[{property:"id",label:"sw-settings-snippet.list.columnKey",inlineEdit:!0,allowResize:!0,rawData:!0,primary:!0}];return this.snippetSets&&this.snippetSets.forEach(e=>{t.push({property:e.id,label:e.name,allowResize:!0,inlineEdit:"string",rawData:!0})}),t},initializeSnippetSet(t=this.filter){if(!this.$route.query.ids){this.backRoutingError();return}this.isLoading=!0;let e={sortBy:this.sortBy,sortDirection:this.sortDirection};this.snippetSetService.getCustomList(this.page,this.limit,t,e).then(t=>{this.metaId=this.queryIds[0],this.total=t.total,this.grid=this.prepareGrid(t.data),this.isLoading=!1})},prepareGrid(t){return Object.values(t).reduce((t,e)=>(t.push(function(t){let e=t.reduce((t,e)=>(e.resetTo=e.value,t[e.setId]=e,t.isCustomSnippet=e.author.includes("user/"),t),{});return e.id=t[0].translationKey,e}(e)),t),[])},onEdit(t){t?.id&&this.$router.push({name:"sw.settings.snippet.detail",params:{id:t.id}})},onInlineEditSave(t){let e=[],s=t[this.metaId].translationKey;this.snippetSets.forEach(s=>{let n=t[s.id];if(n.value=i.Z.sanitize(n.value),n.value||"string"==typeof n.value||(n.value=n.origin),n.hasOwnProperty("author")&&""!==n.author||(n.author=this.currentAuthor),n.origin!==n.value){let t=this.snippetRepository.create();n.id&&(t._isNew=!1),t.author=n.author,t.id=n.id,t.value=n.value,t.origin=n.origin,t.translationKey=n.translationKey,t.setId=n.setId,e.push(this.snippetRepository.save(t))}else null===n.id||n.author.startsWith("user/")||e.push(this.snippetRepository.delete(n.id))}),Promise.all(e).then(()=>{this.inlineSaveSuccessMessage(s),this.getList()}).catch(()=>{this.inlineSaveErrorMessage(s),this.getList()})},onInlineEditCancel(t){Object.keys(t).forEach(e=>{let s=t[e];"object"==typeof s&&void 0!==s.value&&(s.value=s.resetTo)})},onEmptyClick(){this.showOnlyEdited=!1,this.getList()},onSearch(t){this.term=t,this.page=1,this.updateRoute({term:t,page:1},{ids:this.queryIds})},backRoutingError(){this.$router.push({name:"sw.settings.snippet.index"}),this.createNotificationError({message:this.$tc("sw-settings-snippet.general.errorBackRoutingMessage")})},inlineSaveSuccessMessage(t){let e=this.$tc("global.default.success"),s=this.$tc("sw-settings-snippet.list.messageSaveSuccess",this.queryIdCount,{key:t});this.createNotificationSuccess({title:e,message:s})},inlineSaveErrorMessage(t){let e=this.$tc("global.default.error"),s=this.$tc("sw-settings-snippet.list.messageSaveError",this.queryIdCount,{key:t});this.createNotificationError({title:e,message:s})},onReset(t){this.isLoading=!0,this.snippetSetRepository.search(this.snippetSetCriteria).then(e=>{let s=[],i=Array.isArray(this.$route.query.ids)?this.$route.query.ids:[this.$route.query.ids];Object.values(t).forEach((t,n)=>{t instanceof Object&&i.find(e=>e===t.setId)&&(t.setName=this.getName(e,t.setId),null===t.id&&(t.id=n,t.isFileSnippet=!0),s.push(t))}),this.resetItems=s.sort((t,e)=>t.setName<=e.setName?-1:1),this.showDeleteModal=t}).finally(()=>{this.isLoading=!1})},getName(t,e){let s="";return t.forEach(t=>{t.id===e&&(s=t.name)}),s},onSelectionChanged(t){this.snippetSelection=t,this.hasResetableItems=0===Object.keys(t).length},onConfirmReset(t){let e;let s=[];e=this.showOnlyEdited?Object.values(t).filter(t=>"string"!=typeof t):void 0!==this.snippetSelection?Object.values(this.snippetSelection):Object.values(this.resetItems),this.showDeleteModal=!1,this.$nextTick(()=>{e.forEach(e=>{e.hasOwnProperty("isFileSnippet")||null===e.id||(e.isCustomSnippet=t.isCustomSnippet,this.isLoading=!0,s.push(this.snippetRepository.delete(e.id).then(()=>{this.createSuccessMessage(e)}).catch(()=>{this.createResetErrorNote(e)})))}),Promise.all(s).then(()=>{this.isLoading=!1,this.getList()}).catch(()=>{this.isLoading=!1,this.getList()})})},createSuccessMessage(t){let e=this.$tc("global.default.success"),s=this.$tc("sw-settings-snippet.list.resetSuccessMessage",!t.isCustomSnippet,{key:t.value});this.createNotificationSuccess({title:e,message:s})},createResetErrorNote(t){let e=this.$tc("global.default.error"),s=this.$tc("sw-settings-snippet.list.resetErrorMessage",t.isCustomSnippet?2:0,{key:t.value});this.createNotificationError({title:e,message:s})},onChange(t){if(this.$set(this.filterSettings,[t.name],t.value),this.page=1,"editedSnippets"===t.group){this.showOnlyEdited=t.value,this.initializeSnippetSet();return}if("addedSnippets"===t.group){this.showOnlyAdded=t.value,this.initializeSnippetSet();return}if("emptySnippets"===t.group){this.emptySnippets=t.value,this.initializeSnippetSet();return}let e="appliedFilter";if("authorFilter"===t.group&&(e="appliedAuthors"),t.value){if(-1!==this[e].indexOf(t.name))return;this[e].push(t.name),this.initializeSnippetSet();return}this[e].splice(this[e].indexOf(t.name),1),this.initializeSnippetSet()},onSidebarClose(){this.showOnlyEdited=!1,this.emptySnippets=!1,this.appliedAuthors=[],this.appliedFilter=[],this.initializeSnippetSet()},onSortColumn(t){"ASC"===this.sortDirection&&t.dataIndex===this.sortBy?this.sortDirection="DESC":this.sortDirection="ASC",this.updateRoute({sortDirection:this.sortDirection,sortBy:t.dataIndex},{ids:this.queryIds})},onPageChange({page:t,limit:e}){this.updateRoute({page:t,limit:e},{ids:this.queryIds})},getNoPermissionsTooltip(t,e=!0){return{showDelay:300,appearance:"dark",showOnDisabledElements:e,disabled:this.acl.can(t),message:this.$tc("sw-privileges.tooltip.warning")}},onResetAll(){this.showOnlyEdited=!1,this.showOnlyAdded=!1,this.emptySnippets=!1,this.appliedFilter=[],this.appliedAuthors=[],Object.keys(this.filterSettings).forEach(t=>{this.isCompatEnabled("INSTANCE_SET")?this.$set(this.filterSettings,t,!1):this.filterSettings[t]=!1}),this.initializeSnippetSet({})}}}},410708:function(t,e,s){var i=s(142302);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),s(745346).Z("b5a00d5c",i,!0,{})}}]);