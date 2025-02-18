const r='{% block sw_entity_many_to_many_assignment_card %} <sw-card class="sw-many-to-many-assignment-card" position-identifier="sw-many-to-many-assignment" v-bind="$attrs" > {% block sw_entity_many_to_many_assignment_card_content %} <template #default> {% block sw_entity_many_to_many_assignment_card_head %} <div class="sw-many-to-many-assignment-card__select-container"> {% block sw_entity_many_to_many_assignment_card_pre_select %} <slot name="prepend-select"></slot> {% endblock %} {% block sw_entity_many_to_many_assignment_card_select %} <slot name="select"> <sw-select-base ref="selectBase" class="sw-entity-many-to-many-select" :disabled="disabled || undefined" :label="selectLabel" :is-loading="isLoadingResults" v-bind="$attrs" @select-expanded="onSelectExpanded" @select-collapsed="onSelectCollapsed" > <template #sw-select-selection="{ identification, error, disabled, size, expand, collapse }"> {% block sw_entity_many_to_many_assignment_card_search_field %} <input ref="searchInput" tabindex="-1" :placeholder="placeholder" :value="searchTerm" :disabled="disabled" @input="onSearchTermChange" > {% endblock %} </template> <template #results-list> {% block sw_entity_many_to_many_assignment_card_results_list %} <sw-select-result-list ref="swSelectResultList" :options="resultCollection" :is-loading="isLoadingResults" :empty-message="$tc(\'global.sw-entity-many-to-many-select.messageNoResults\', { term: searchTerm }, 0)" :focus-el="$refs.searchInput" @paginate="paginateResult" @item-select="onItemSelect" > <template #before-item-list> {% block sw_entity_many_to_many_assignment_card_results_list_before %} <slot name="before-item-list"></slot> {% endblock %} </template> <template #result-item="{ item, index }"> {% block sw_entity_many_to_many_assignment_card_results_list_result %} <slot name="result-item" v-bind="{ item, index, labelProperty, valueProperty: \'id\', searchTerm, highlightSearchTerm, isSelected, onItemSelect, getKey }" > {% block sw_entity_many_to_many_assignment_card_results_list_list_item %} <sw-select-result :selected="isSelected(item)" v-bind="{ item, index }" @item-select="onItemSelect" > {% block sw_entity_many_to_many_assignment_card_results_list_list_item_label %} <slot name="result-label-property" v-bind="{ item, index, labelProperty, valueProperty: \'id\', searchTerm, highlightSearchTerm, getKey }" > <sw-highlight-text v-if="highlightSearchTerm" :text="getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`)" :search-term="searchTerm" /> <template v-else> {{ getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`) }} </template> </slot> {% endblock %} </sw-select-result> {% endblock %} </slot> {% endblock %} </template> <template #after-item-list> {% block sw_entity_many_to_many_assignment_card_results_list_after %} <slot name="after-item-list"></slot> {% endblock %} </template> </sw-select-result-list> {% endblock %} </template> </sw-select-base> </slot> {% endblock %} </div> {% endblock %} </template> {% endblock %} {% block sw_entity_many_to_many_assignment_card_grid %} <template #grid> <slot name="data-grid"> <sw-data-grid class="sw-many-to-many-assignment-card__grid" :data-source="gridData" :is-loading="isLoadingGrid" :columns="columns" :v-bind="$attrs" :show-selection="false" :plain-appearance="true" > <template v-for="column in columns" #[`column-${column.property}`]="columnProps" > {% block sw_entity_many_to_many_assignment_card_grid_column %} <slot :name="`column-${column.property}`" v-bind="{ ...columnProps, searchTerm, highlightSearchTerm }" ></slot> {% endblock %} </template> <template #actions="{ item }"> {% block sw_entity_many_to_many_assignment_card_grid_column_actions %} <sw-context-menu-item variant="danger" :disabled="disabled || undefined" @click="removeFromGrid(item)" > {{ $tc(\'global.entity-components.labelRemoveAssociation\') }} </sw-context-menu-item> {% endblock %} </template> <template #pagination> {% block sw_entity_many_to_many_assignment_card_grid_footer %} {% block sw_entity_many_to_many_assignment_card_grid_footer_remote_mode %} <template v-if="!localMode"> <sw-pagination v-if="total > 0" v-bind="{ limit, page, total }" :auto-hide="false" @page-change="paginateGrid" /> <div v-else-if="!!searchTerm" class="sw-many-to-many-assignment-card__empty-state" > <sw-icon name="regular-search" size="20px" /> {{ $tc(\'global.sw-select-result-list.messageNoResults\') }} </div> <div v-else class="sw-many-to-many-assignment-card__empty-state" > <slot name="empty-state"></slot> </div> </template> {% endblock %} {% block sw_entity_many_to_many_assignment_card_grid_footer_local_mode %} <template v-else> <div v-if="total === 0" class="sw-many-to-many-assignment-card__empty-state" > <slot name="empty-state"></slot> </div> </template> {% endblock %} {% endblock %} </template> </sw-data-grid> </slot> </template> {% endblock %} </sw-card> {% endblock %}',{Component:l}=Shopware,{debounce:n,get:o}=Shopware.Utils,{Criteria:s,EntityCollection:c}=Shopware.Data;l.register("sw-many-to-many-assignment-card",{template:r,inheritAttrs:!1,inject:["repositoryFactory","feature"],emits:["update:entityCollection","paginate"],props:{columns:{type:Array,required:!0},entityCollection:{type:Array,required:!0},localMode:{type:Boolean,required:!0},resultLimit:{type:Number,required:!1,default:25},criteria:{type:Object,required:!1,default(e){return new s(1,e.resultLimit)}},highlightSearchTerm:{type:Boolean,required:!1,default:!0},labelProperty:{type:String,required:!1,default:"name"},selectLabel:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default(){return Shopware.Snippet.tc("global.entity-components.placeholderToManyAssociationCard")}},searchableFields:{type:Array,required:!1,default(){return[]}},disabled:{type:Boolean,required:!1,default:!1}},data(){return{gridCriteria:null,searchCriteria:null,isLoadingResults:!1,isLoadingGrid:!1,selectedIds:[],resultCollection:null,gridData:[],searchTerm:"",totalAssigned:0,loadingGridState:!1}},computed:{context(){return this.entityCollection.context},languageId(){return this.context.languageId},assignmentRepository(){return this.repositoryFactory.create(this.entityCollection.entity,this.entityCollection.source)},searchRepository(){return this.repositoryFactory.create(this.entityCollection.entity)},page:{get(){return this.gridCriteria.page},set(e){this.gridCriteria.page=e}},limit:{get(){return this.gridCriteria.limit},set(e){this.gridCriteria.page=e}},total(){return this.localMode?this.entityCollection.length:this.gridData.total||0},focusEl(){return this.$refs.searchInput},originalFilters(){return this.criteria.filters}},watch:{criteria:{immediate:!0,handler(){this.gridCriteria=s.fromCriteria(this.criteria),this.searchCriteria=s.fromCriteria(this.criteria),this.localMode||this.paginateGrid()}},entityCollection(){if(this.selectedIds=this.entityCollection.getIds(),!this.localMode){this.paginateGrid();return}this.gridData=this.entityCollection},languageId(){this.localMode||this.paginateGrid()}},created(){this.createdComponent()},methods:{createdComponent(){this.initData()},initData(){if(this.page=1,!this.localMode){this.selectedIds=this.entityCollection.getIds();return}this.gridData=this.entityCollection},onSearchTermChange(e){this.searchTerm=e.target.value||null,this.debouncedSearch()},debouncedSearch:n(function(){this.resetSearchCriteria(),this.searchCriteria.term=this.searchTerm||null,this.addContainsFilter(this.searchCriteria),this.searchItems().then(t=>{this.resultCollection=t})},500),onSelectExpanded(){this.resetSearchCriteria(),this.focusEl.select(),this.searchItems().then(e=>{this.resultCollection=e})},paginateResult(){this.resultCollection.length>=this.resultCollection.total||(this.searchCriteria.page+=1,this.searchItems().then(e=>{this.resultCollection.push(...e)}))},searchItems(){return this.searchRepository.search(this.searchCriteria,this.context).then(e=>{if(!this.localMode){const t=new s(1,this.searchCriteria.limit);t.setIds(e.getIds()),this.assignmentRepository.searchIds(t,this.context).then(({data:i})=>{i.forEach(a=>{this.isSelected({id:a})||this.selectedIds.push(a)})})}return e})},onItemSelect(e){if(this.isSelected(e)){this.removeItem(e);return}if(this.localMode){const t=c.fromCollection(this.entityCollection);t.push(e),this.selectedIds=t.getIds(),this.gridData=t,this.$emit("update:entityCollection",t);return}this.assignmentRepository.assign(e.id,this.context).then(()=>{this.selectedIds.push(e.id)})},removeItem(e){if(this.localMode){const t=this.entityCollection.filter(i=>i.id!==e.id);return this.selectedIds=t.getIds(),this.gridData=t,this.$emit("update:entityCollection",t),Promise.resolve()}return this.assignmentRepository.delete(e.id,this.context).then(()=>{this.selectedIds=this.selectedIds.filter(t=>t!==e.id)})},isSelected(e){return this.selectedIds.some(t=>e.id===t)},resetActiveItem(){this.$refs.swSelectResultList.setActiveItemIndex(0)},onSelectCollapsed(){this.resultCollection=null,this.focusEl.blur(),this.localMode||this.paginateGrid()},resetSearchCriteria(){this.searchCriteria.page=1,this.searchCriteria.term=this.searchTerm||null,this.searchCriteria.limit=this.resultLimit,this.addContainsFilter(this.searchCriteria)},getKey(e,t,i){return o(e,t,i)},paginateGrid({page:e,limit:t}=this.gridCriteria){this.gridCriteria.page=e,this.gridCriteria.limit=t,this.setGridFilter(),this.isLoadingGrid=!0,this.assignmentRepository.search(this.gridCriteria,this.context).then(i=>{this.gridData=i,this.isLoadingGrid=!1,this.$emit("paginate",this.gridData)})},setGridFilter(){this.gridCriteria.term=this.searchTerm||null,this.addContainsFilter(this.gridCriteria)},addContainsFilter(e){if(e.term===null){e.filters=[...this.originalFilters];return}if(this.searchableFields.length>0){const t=this.searchableFields.map(i=>s.contains(i,e.term));e.filters=[...this.criteria.filters,s.multi("OR",t)],e.term=null}},removeFromGrid(e){this.removeItem(e).then(()=>{this.localMode||this.paginateGrid()})}}});
