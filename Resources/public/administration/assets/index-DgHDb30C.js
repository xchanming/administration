const l=`{% block sw_entity_advanced_selection_modal %} <sw-modal class="sw-entity-advanced-selection-modal" v-bind="$attrs" variant="large" :title="modalTitle" @modal-close="$emit('modal-close')" > {% block sw_entity_advanced_selection_modal_content_card %} <sw-card class="sw-entity-advanced-selection-modal__content" position-identifier="sw-entity-advanced-selection-modal-content" :large="true" :is-loading="isLoading" > <template #toolbar> {% block sw_entity_advanced_selection_modal_toolbar %} <sw-card-filter class="sw-entity-advanced-selection-modal__card-filter" :placeholder="$tc('global.sw-entity-advanced-selection-modal.searchPlaceholder')" :initial-search-term="initialSearchTerm" @sw-card-filter-term-change="onSearch" > <template #filter> <div class="sw-entity-advanced-selection-modal__filter-list-button"> {% block sw_entity_advanced_selection_modal_toolbar_filter_button %} <sw-button size="small" @click="filterWindowOpen = !filterWindowOpen" > <sw-icon name="regular-filter-s" small /> <i v-if="activeFilterNumber > 0" class="sw-entity-advanced-selection-modal__filter-badge" >{{ activeFilterNumber }}</i> {{ $tc('global.sw-entity-advanced-selection-modal.filter') }} </sw-button> {% endblock %} {% block sw_entity_advanced_selection_modal_toolbar_filter_panel %} <sw-context-menu v-show="filterWindowOpen"> {% block sw_entity_advanced_selection_modal_toolbar_filter_panel_headline %} <h3 class="sw-entity-advanced-selection-modal__filter-headline"> {{ $tc('global.sw-entity-advanced-selection-modal.filter') }} </h3> {% endblock %} {% block sw_entity_advanced_selection_modal_toolbar_filter_panel_filters %} <div class="sw-entity-advanced-selection-modal__filter-panel"> {# TODO - NEXT-20791 : remove store-key property. Filters should not be stored somewhere #} <sw-filter-panel ref="filterPanel" class="sw-entity-advanced-selection-modal__filter-panel" entity="product" :store-key="storeKey" :active-filter-number="activeFilterNumber" :filters="listFilters" :defaults="defaultFilters" @criteria-changed="updateCriteria" /> </div> {% endblock %} {% block sw_entity_advanced_selection_modal_toolbar_filter_panel_footer %} <div class="sw-entity-advanced-selection-modal__filter-footer"> <a role="button" class="sw-entity-advanced-selection-modal__filter-reset" @click="clearFilters" > {{ $tc('global.sw-entity-advanced-selection-modal.resetFilters') }} </a> </div> {% endblock %} </sw-context-menu> {% endblock %} </div> </template> </sw-card-filter> {% endblock %} </template> <template #grid> {% block sw_entity_advanced_selection_modal_list_grid %} <sw-entity-advanced-selection-modal-grid v-if="entities && entities.length" class="sw-entity-advanced-selection-modal__grid" :items="entities" :columns="entityColumns" :repository="entityRepository" :full-page="true" :plain-appearance="true" :compact-mode="true" :show-selection="true" :show-actions="true" :show-settings="true" :is-loading="isLoading" :allow-view="acl.can(\`\${entityName}.viewer\`)" :allow-edit="false" :allow-delete="false" :allow-inline-edit="false" :allow-bulk-edit="false" :disable-data-fetching="true" :sort-by="sortBy" :sort-direction="sortDirection" :maximum-select-items="isSingleSelect ? 1 : null" :pre-selection="currentSelection" :is-record-selectable-callback="isRecordSelectableCallback" @selection-change="onSelectionChange" @column-sort="onSortColumn" @page-change="onPageChange" > {% block sw_entity_advanced_selection_modal_list_grid_slots %} {# Re-expose essential column slots #} <template v-for="column in previewColumns" #[\`preview-\${column.property}\`]="slotData" > <slot :name="\`preview-\${column.property}\`" v-bind="slotData" ></slot> </template> <template v-for="column in entityColumns" #[\`column-\${column.property}\`]="slotData" > <slot :name="\`column-\${column.property}\`" v-bind="{ ...slotData, aggregations }" ></slot> </template> {% endblock %} </sw-entity-advanced-selection-modal-grid> {% endblock %} {% block sw_entity_advanced_selection_modal_list_empty_state %} <sw-empty-state v-else class="sw-entity-advanced-selection-modal__empty-state" :absolute="false" :show-description="true" :title="$tc('sw-empty-state.messageNoResultTitle')" :subline="$tc('sw-empty-state.messageNoResultSublineSimple')" > <template #icon> <img :src="assetFilter(emptyImagePath)" :alt="$tc('sw-empty-state.messageNoResultTitle')" > </template> </sw-empty-state> {% endblock %} </template> </sw-card> {% endblock %} <template #modal-footer> {% block sw_entity_advanced_selection_modal_button_cancel %} <sw-button size="small" class="sw-entity-advanced-selection-modal__button-cancel" @click="$emit('modal-close')" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_entity_advanced_selection_modal_button_apply %} <sw-button variant="primary" size="small" class="sw-entity-advanced-selection-modal__button-apply" :disabled="isLoading" @click="onApply" > {{ $tc('global.sw-entity-advanced-selection-modal.applySelection') }} </sw-button> {% endblock %} </template> </sw-modal> {% endblock %}`,{Component:s,Mixin:n}=Shopware,{debounce:r}=Shopware.Utils,{Criteria:a}=Shopware.Data;s.register("sw-entity-advanced-selection-modal",{template:l,inject:["acl","repositoryFactory","filterFactory","filterService"],emits:["modal-close","selection-submit"],mixins:[n.getByName("listing")],props:{entityName:{type:String,required:!0},entityDisplayText:{type:String,required:!0},storeKey:{type:String,required:!0},entityColumns:{type:Array,required:!0},entityFilters:{type:Object,required:!0},emptyImagePath:{type:String,required:!0},entityAssociations:{type:Array,required:!1,default(){return[]}},isSingleSelect:{type:Boolean,required:!1,default:!1},isRecordSelectableCallback:{type:Function,required:!1,default:void 0},criteriaFilters:{type:Array,required:!1,default(){return[]}},criteriaAggregations:{type:Array,required:!1,default(){return[]}},entityContext:{type:Object,required:!1,default(){return Shopware.Context.api}},initialSearchTerm:{type:String,required:!1,default(){return""}},initialSelection:{type:Array,required:!1,default(){return[]}},disablePreviews:{type:Boolean,required:!1,default:!1}},data(){return{isLoading:!0,entities:[],aggregations:[],currentSelection:{},filterCriteria:[],disableRouteParams:!0,filterWindowOpen:!1}},computed:{modalTitle(){return this.$tc("global.sw-entity-advanced-selection-modal.title",{entity:this.entityDisplayText},1)},entityRepository(){return this.repositoryFactory.create(this.entityName)},entityDefinition(){return Shopware.EntityDefinition.get(this.entityName)},assignmentProperties(){const e=[];return Object.entries(this.entityDefinition.properties).forEach(([t,i])=>{(i.relation==="many_to_many"||i.relation==="one_to_many")&&e.push(t)}),e},allEntityAssociations(){const e=new Set(this.entityAssociations);return this.entityColumns.forEach(t=>{if(t.property&&t.property.includes(".")){const i=t.property.lastIndexOf(".");e.add(t.property.slice(0,i))}}),Object.values(this.entityFilters).forEach(t=>{if(t.property&&t.property.includes(".")){const i=t.property.lastIndexOf(".");e.add(t.property.slice(0,i))}}),e},entityCriteria(){const e=new a(this.page,this.limit);return e.setTerm(this.term),this.sortBy&&this.sortBy.split(",").forEach(t=>{const i=a.sort(t,this.sortDirection,this.naturalSorting);this.assignmentProperties.includes(this.sortBy)&&(i.field+=".id",i.type="count"),e.addSorting(i)}),this.allEntityAssociations.forEach(t=>{e.addAssociation(t)}),this.criteriaFilters.forEach(t=>{e.addFilter(t)}),this.filterCriteria.forEach(t=>{e.addFilter(t)}),this.criteriaAggregations.forEach(t=>{e.addAggregation(t)}),e},activeFilterNumber(){return this.filterCriteria.length},defaultFilters(){return Object.keys(this.entityFilters)},listFilters(){return this.filterFactory.create(this.entityName,this.entityFilters)},previewColumns(){return this.disablePreviews?[]:this.entityColumns},assetFilter(){return Shopware.Filter.getByName("asset")}},created(){this.createdComponent()},methods:{createdComponent(){this.isLoading=!0,this.term=`${this.initialSearchTerm}`,this.initialSelection.forEach(e=>{this.currentSelection[e.id]=e}),this.filterService.getStoredCriteria(this.storeKey).then(e=>(this.filterCriteria.push(...e),this.isLoading=!1,this.getList()))},async getList(){return this.isLoading?Promise.resolve():(this.isLoading=!0,this.entityRepository.search(this.entityCriteria,this.entityContext).then(e=>(this.total=e.total,this.entities=e,this.aggregations=e.aggregations,this.isLoading=!1,e)).catch(()=>{this.isLoading=!1}))},onSelectionChange(e){this.currentSelection=e},onApply(){const e=Object.values(this.currentSelection);this.$emit("selection-submit",e),this.$emit("modal-close")},updateCriteria(e){this.page=1,this.filterCriteria=e,this.debouncedGetList()},debouncedGetList:r(function(){this.getList()},400),clearFilters(){this.$refs.filterPanel.resetAll()}}});
