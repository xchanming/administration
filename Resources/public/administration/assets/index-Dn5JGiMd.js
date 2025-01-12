const a=`{% block sw_settings_list %} {% block sw_settings_rule_index %} <sw-page class="sw-settings-rule-list"> {% block sw_settings_rule_list_search_bar %} <template #search-bar> <sw-search-bar initial-search-type="rule" :placeholder="$tc('sw-settings-rule.general.placeholderSearchBar')" :initial-search="term" @search="onSearch" /> </template> {% endblock %} {% block sw_settings_rule_list_smart_bar_header %} <template #smart-bar-header> {% block sw_settings_rule_list_smart_bar_header_title %} <h2> {% block sw_settings_rule_list_smart_bar_header_title_text %} {{ $tc('sw-settings.index.title') }} <sw-icon name="regular-chevron-right-xs" small /> {{ $tc('sw-settings-rule.list.textHeadline') }} {% endblock %} {% block sw_settings_rule_list_smart_bar_header_title_amount %} <span v-if="!isLoading" class="sw-page__smart-bar-amount" > ({{ total }}) </span> {% endblock %} </h2> {% endblock %} </template> {% endblock %} {% block sw_settings_rule_list_smart_bar_actions %} <template #smart-bar-actions> {% block sw_settings_rule_list_smart_bar_actions_add %} <sw-button v-tooltip="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('rule.creator'), showOnDisabledElements: true }" :router-link="{ name: 'sw.settings.rule.create' }" :disabled="!acl.can('rule.creator') || undefined" variant="primary" > {{ $tc('sw-settings-rule.list.buttonAddRule') }} </sw-button> {% endblock %} </template> {% endblock %} <template #language-switch> <sw-language-switch @on-change="onChangeLanguage" /> </template> {% block sw_settings_rule_list_content %} <template #content> {% block sw_settings_rule_list_content_card %} <div class="sw-settings-rule-list__content"> {% block sw_settings_rule_list_grid %} <sw-entity-listing v-if="isLoading || rules" ref="swRuleGrid" identifier="sw-settings-rule-list" class="sw-rule-list-grid" :items="rules" :columns="getRuleColumns()" :repository="ruleRepository" :is-loading="isLoading" :full-page="true" :show-selection="acl.can('rule.deleter') || undefined" :allow-edit="acl.can('rule.editor') || undefined" :allow-delete="acl.can('rule.deleter') || undefined" detail-route="sw.settings.rule.detail" :disable-data-fetching="true" :sort-by="sortBy" :sort-direction="sortDirection" @column-sort="onSortColumn" @page-change="onPageChange" @inline-edit-save="onInlineEditSave" @items-delete-finish="getList" > {% block sw_settings_rule_list_grid_column_tags %} <template #column-tags="{ item }"> <span class="sw-data-grid__cell-value"> <sw-label v-for="tag in item.tags" :key="tag.id" > {{ tag.name }} </sw-label> </span> </template> {% endblock %} {% block sw_settings_rule_list_grid_column_assignments %} <template v-for="(propertyName, index) in assignmentProperties" :key="index" #[\`column-\${propertyName}\`]="{ item }" > <span class="sw-data-grid__cell-value" > {{ getCounts(propertyName, item.id) }} {{ $tc(\`sw-settings-rule.list.assignments.\${propertyName}\`, getCounts(propertyName, item.id)) }} </span> </template> {% endblock %} <template #column-invalid="{item}"> <template v-if="item.invalid"> {{ $tc('sw-settings-rule.list.invalid') }} </template> <template v-else> {{ $tc('sw-settings-rule.list.valid') }} </template> </template> <template #column-updatedAt="{item}"> {{ dateFilter(item.updatedAt) }} </template> <template #column-createdAt="{item}"> {{ dateFilter(item.createdAt) }} </template> {% block sw_settings_rule_list_grid_columns_actions %} <template #more-actions="{ item }"> {% block sw_settings_rule_list_grid_columns_actions_duplicate %} <sw-context-menu-item :disabled="!acl.can('rule.creator')" @click="onDuplicate(item)" > {{ $tc('sw-settings-rule.list.contextMenuDuplicate') }} </sw-context-menu-item> {% endblock %} </template> {% endblock %} </sw-entity-listing> {% endblock %} {% block sw_settings_rule_list_empty_message %} <sw-empty-state v-else-if="!isLoading && !total" :title="$tc('sw-settings-rule.list.messageEmpty')" /> {% endblock %} </div> {% endblock %} </template> {% block sw_settings_rule_list_sidebar %} <template #sidebar> <sw-sidebar> {% block sw_settings_rule_list_sidebar_refresh %} <sw-sidebar-item icon="regular-undo" :title="$tc('sw-settings-rule.list.titleSidebarItemRefresh')" @click="onRefresh" /> {% endblock %} {% block sw_settings_rule_list_sidebar_filter %} <sw-sidebar-filter-panel entity="rule" :store-key="storeKey" :active-filter-number="activeFilterNumber" :filters="listFilters" :defaults="defaultFilters" @criteria-changed="updateCriteria" /> {% endblock %} </sw-sidebar> </template> {% endblock %} {% endblock %} </sw-page> {% endblock %} {% endblock %}`,{Mixin:r}=Cicada,{Criteria:s}=Cicada.Data,n={template:a,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl","filterFactory","ruleConditionDataProviderService","filterService"],mixins:[r.getByName("listing"),r.getByName("notification")],data(){return{rules:null,isLoading:!1,sortBy:"name",storeKey:"grid.filter.rule",activeFilterNumber:0,defaultFilters:["conditions","conditionGroups","assignments","tags"],filterCriteria:[]}},metaInfo(){return{title:this.$createTitle()}},computed:{getRuleDefinition(){return Cicada.EntityDefinition.get("rule")},ruleRepository(){return this.repositoryFactory.create("rule")},conditionFilterOptions(){const t=this.ruleConditionDataProviderService.getConditions().map(e=>({value:e.type,label:this.$tc(e.label)}));return t.sort((e,i)=>e.label.localeCompare(i.label)),t},groupFilterOptions(){const t=[];return Object.values(this.ruleConditionDataProviderService.getGroups()).forEach(e=>{const i=this.ruleConditionDataProviderService.getByGroup(e.id).map(l=>l.type).join("|");t.push({value:i,label:this.$tc(e.name)})}),t.sort((e,i)=>e.label.localeCompare(i.label)),t},associationFilterOptions(){const t=[];return this.assignmentProperties.forEach(e=>{t.push({value:e,label:this.$tc(`sw-settings-rule.filter.assignmentFilter.values.${e}`)})}),t.sort((e,i)=>e.label.localeCompare(i.label)),t},listFilters(){const t={conditionGroups:{property:"conditions.type",label:this.$tc("sw-settings-rule.filter.groupFilter.label"),placeholder:this.$tc("sw-settings-rule.filter.groupFilter.placeholder"),type:"multi-select-filter",options:this.groupFilterOptions},conditions:{property:"conditions.type",label:this.$tc("sw-settings-rule.filter.conditionFilter.label"),placeholder:this.$tc("sw-settings-rule.filter.conditionFilter.placeholder"),type:"multi-select-filter",options:this.conditionFilterOptions},assignments:{existingType:!0,property:"conditions",label:this.$tc("sw-settings-rule.filter.assignmentFilter.label"),placeholder:this.$tc("sw-settings-rule.filter.assignmentFilter.placeholder"),type:"multi-select-filter",options:this.associationFilterOptions},tags:{property:"tags",label:this.$tc("sw-settings-rule.filter.tagFilter.label"),placeholder:this.$tc("sw-settings-rule.filter.tagFilter.placeholder"),criteria:new s(1,25).addSorting(s.sort("name"))}};return this.filterFactory.create("rule",t)},listCriteria(){const t=new s(this.page,this.limit);t.setTerm(this.term);const e=["createdAt","updatedAt"].includes(this.sortBy),i=s.sort(this.sortBy,this.sortDirection,e);return this.assignmentProperties.includes(this.sortBy)&&(i.field+=".id",i.type="count"),t.addSorting(i),t.addAssociation("tags"),this.setAggregations(t),this.filterCriteria.forEach(l=>{t.addFilter(l)}),t},assignmentProperties(){const t=[];return Object.keys(this.getRuleDefinition.properties).forEach(e=>{if(e==="conditions"||e==="tags")return;const i=this.getRuleDefinition.properties[e];(i.relation==="many_to_many"||i.relation==="one_to_many")&&t.push(e)}),t},dateFilter(){return Cicada.Filter.getByName("date")}},methods:{setAggregations(t){Object.keys(this.getRuleDefinition.properties).forEach(e=>{if(e==="conditions"||e==="tags")return;const i=this.getRuleDefinition.properties[e];(i.relation==="many_to_many"||i.relation==="one_to_many")&&t.addAggregation(s.terms(e,"id",null,null,s.count(e,`rule.${e}.id`)))})},getCounts(t,e){const i=this.rules.aggregations[t].buckets.find(l=>l.key===e);return!i||!i[t]||!i[t].count?0:i[t].count},async getList(){this.isLoading=!0;const t=await this.filterService.mergeWithStoredFilters(this.storeKey,this.listCriteria);this.activeFilterNumber=t.filters.length,this.ruleRepository.search(t).then(e=>(this.total=e.total,this.rules=e,this.isLoading=!1,e)).catch(()=>{this.isLoading=!1})},onChangeLanguage(t){Cicada.State.commit("context/setApiLanguageId",t),this.getList()},onDuplicate(t){const e={overwrites:{name:`${t.name} ${this.$tc("global.default.copy")}`,createdAt:null}};this.ruleRepository.clone(t.id,e,Cicada.Context.api).then(i=>{this.$router.push({name:"sw.settings.rule.detail",params:{id:i.id}})})},onInlineEditSave(t,e){return this.isLoading=!0,t.then(()=>{this.isLoading=!1,this.createNotificationSuccess({message:this.$tc("sw-settings-rule.detail.messageSaveSuccess",0,{name:e.name})})}).catch(()=>{this.getList(),this.createNotificationError({message:this.$tc("sw-settings-rule.detail.messageSaveError")})})},updateCriteria(t){return this.page=1,this.filterCriteria=t,this.getList()},getRuleColumns(){const t=[{property:"name",dataIndex:"name",inlineEdit:"string",label:"sw-settings-rule.list.columnName",routerLink:"sw.settings.rule.detail",width:"250px",allowResize:!0,primary:!0},{property:"priority",label:"sw-settings-rule.list.columnPriority",inlineEdit:"number",allowResize:!0},{property:"description",label:"sw-settings-rule.list.columnDescription",width:"250px",allowResize:!0},{property:"updatedAt",label:"sw-settings-rule.list.columnDateUpdated",align:"right",allowResize:!0},{property:"createdAt",label:"sw-settings-rule.list.columnDateCreated",align:"right",allowResize:!0},{property:"invalid",label:"sw-settings-rule.list.columnStatus",allowResize:!0},{property:"tags",label:"sw-settings-rule.list.columnTags",width:"250px",allowResize:!0,sortable:!1,visible:!1}];return this.assignmentProperties.forEach(e=>{const i=e.charAt(0).toUpperCase()+e.slice(1);t.push({property:`${e}`,label:`sw-settings-rule.list.column${i}`,width:"250px",allowResize:!0,sortable:!0,visible:!1})}),t}}};export{n as default};
//# sourceMappingURL=index-Dn5JGiMd.js.map
