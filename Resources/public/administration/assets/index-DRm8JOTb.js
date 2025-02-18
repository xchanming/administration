const c='{% block sw_entity_many_to_many_select %} <sw-select-base ref="selectBase" class="sw-entity-many-to-many-select" :is-loading="isLoading" v-bind="$attrs" @select-expanded="onSelectExpanded" @select-collapsed="onSelectCollapsed" > {% block sw_entity_many_to_many_select_base %} {% block sw_entity_many_to_many_select_base_selection %} <template #sw-select-selection="{ identification, error, disabled, size, expand, collapse }"> {% block sw_entity_many_to_many_select_base_selection_slot %} {% block sw_entity_many_to_many_select_advanced_selection_modal %} <component :is="advancedSelectionComponent" v-if="isAdvancedSelectionActive && isAdvancedSelectionModalVisible" :initial-search-term="searchTerm" :initial-selection="entityCollection" v-bind="advancedSelectionParameters" @modal-close="closeAdvancedSelectionModal" @selection-submit="onAdvancedSelectionSubmit" /> {% endblock %} <sw-select-selection-list ref="selectionList" :selections="visibleValues" :invisible-count="invisibleValueCount" value-property="id" v-bind="{ size, labelProperty, placeholder, searchTerm, disabled }" @total-count-click="paginateDisplayList" @item-remove="remove" @search-term-change="onSearchTermChange" > {% block sw_entity_many_to_many_select_base_selection_list %} {% block sw_entity_many_to_many_select_base_selection_list_label %} <template #label-property="{ item, index, labelProperty, valueProperty }"> <slot name="selection-label-property" v-bind="{ item, index, labelProperty, valueProperty, getKey}" > {{ getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`) }} </slot> </template> {% endblock %} {% endblock %} </sw-select-selection-list> {% endblock %} </template> {% endblock %} {% block sw_entity_many_to_many_select_base_results %} <template #results-list> {% block sw_entity_many_to_many_select_base_results_slot %} <sw-select-result-list ref="swSelectResultList" :options="resultCollection" :is-loading="isLoading" :empty-message="$tc(\'global.sw-entity-many-to-many-select.messageNoResults\', { term: searchTerm }, 0)" :focus-el="$refs.selectionList.getFocusEl()" @paginate="paginateResult" @item-select="addItem" > {% block sw_entity_many_to_many_select_base_results_list %} {% block sw_entity_many_to_many_select_base_results_list_before %} <template #before-item-list> {% block sw_entity_many_to_many_select_base_results_list_before_advanced_selection %} <div v-if="isAdvancedSelectionActive" class="sw-many-to-many-select-filtering__advanced-selection sw-select-result" @click="openAdvancedSelectionModal" > {{ $tc(\'global.sw-entity-advanced-selection-modal.link\') }} </div> {% endblock %} {% block sw_entity_single_select_base_results_list_before_slot %} <slot name="before-item-list"></slot> {% endblock %} </template> {% endblock %} {% block sw_entity_many_to_many_select_base_results_list_result %} <template #result-item="{ item, index }"> <slot name="result-item" v-bind="{ item, index, labelProperty, valueProperty: \'id\', searchTerm, highlightSearchTerm, isSelected, addItem, getKey }" > <sw-select-result :selected="isSelected(item)" v-bind="{ item, index }" @item-select="addItem" > {% block sw_entity_many_to_many_select_base_results_list_result_label %} <slot name="result-label-property" v-bind="{ item, index, labelProperty, valueProperty: \'id\', searchTerm, highlightSearchTerm, getKey }" > <sw-highlight-text v-if="highlightSearchTerm" :text="getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`)" :search-term="searchTerm" /> <template v-else> {{ getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`) }} </template> </slot> {% endblock %} </sw-select-result> </slot> </template> {% endblock %} {% block sw_entity_many_to_many_select_base_results_list_after %} <template #after-item-list> <slot name="after-item-list"></slot> </template> {% endblock %} {% endblock %} </sw-select-result-list> {% endblock %} </template> {% endblock %} {% endblock %} <template #label> <slot name="label"></slot> </template> <template #hint> <slot name="hint"></slot> </template> </sw-select-base> {% endblock %}',{Component:a}=Shopware,{debounce:h,get:d}=Shopware.Utils,{deepCopyObject:m}=Shopware.Utils.object,{Criteria:o,EntityCollection:y}=Shopware.Data;a.register("sw-entity-many-to-many-select",{template:c,inheritAttrs:!1,inject:["repositoryFactory","feature"],emits:["search","update:entityCollection","item-add","item-remove","search-term-change"],props:{labelProperty:{type:String,required:!1,default:"name"},resultLimit:{type:Number,required:!1,default:25},valueLimit:{type:Number,required:!1,default:5},localMode:{type:Boolean,default:!1},criteria:{type:Object,required:!1,default(e){return new o(1,e.resultLimit)}},highlightSearchTerm:{type:Boolean,required:!1,default:!0},placeholder:{type:String,required:!1,default:""},entityCollection:{type:Array,required:!0},context:{type:Object,required:!1,default(){return Shopware.Context.api}},advancedSelectionComponent:{type:String,required:!1,default:""},advancedSelectionParameters:{type:Object,required:!1,default(){return{}}}},data(){return{searchTerm:"",searchCriteria:null,isLoading:!1,resultCollection:null,displayItemsResultCollection:null,totalAssigned:0,displayItemLimit:this.valueLimit,isAdvancedSelectionModalVisible:!1}},computed:{repository(){return this.repositoryFactory.create(this.entityCollection.entity,this.entityCollection.source)},searchRepository(){return this.repositoryFactory.create(this.entityCollection.entity)},selectedIds:{get(){return this.entityCollection.getIds()},set(e){this.emitChanges(e)}},visibleValues(){return!this.entityCollection||this.entityCollection.length<=0?[]:this.entityCollection.slice(0,this.displayItemLimit)},invisibleValueCount(){return this.entityCollection?this.displayItemLimit>this.entityCollection.length?Math.max(0,this.totalAssigned-this.entityCollection.length):Math.max(0,this.totalAssigned-this.displayItemLimit):0},isAdvancedSelectionActive(){return this.advancedSelectionComponent&&a.getComponentRegistry().has(this.advancedSelectionComponent)}},watch:{entityCollection(e){e.length<=0&&this.totalAssigned>0&&this.initData()}},created(){this.createdComponent()},methods:{createdComponent(){this.initData()},initData(){return this.entityCollection.criteria.setLimit(this.valueLimit),this.searchCriteria=new o(1,this.resultLimit),this.displayAssigned(this.entityCollection),this.localMode?Promise.resolve():this.fetchDisplayItems()},isSelected(e){return this.selectedIds.includes(e.id)},fetchDisplayItems(){return this.isLoading=!0,this.repository.search(this.entityCollection.criteria,this.entityCollection.context).then(e=>(this.displayAssigned(e),this.isLoading=!1,e))},displayAssigned(e){e.total?this.totalAssigned=e.total:this.totalAssigned=e.length,e.forEach(t=>{this.entityCollection.has(t.id)||this.entityCollection.push(t)})},displaySearch(e){this.resultCollection?e.forEach(t=>{this.resultCollection.has(t.id)||this.resultCollection.push(t)}):this.resultCollection=e},sendSearchRequest(){return this.isLoading=!0,this.criteria&&(this.searchCriteria.filters=this.criteria.filters,this.searchCriteria.associations=this.criteria.associations,this.searchCriteria.sortings=this.criteria.sortings),this.searchRepository.search(this.searchCriteria,Shopware.Context.api).then(e=>e.length<=0?(this.isLoading=!1,e):this.localMode?(this.displaySearch(e),this.isLoading=!1,Promise.resolve(e)):this.findAssignedEntities(e.getIds(),e))},findAssignedEntities(e,t){const s=new o(1,25);return s.setIds(e),this.repository.searchIds(s,this.entityCollection.context).then(l=>(l.data.forEach(r=>{this.entityCollection.has(r)||this.entityCollection.add(t.get(r))}),this.displaySearch(t),this.isLoading=!1,t))},search(){if(this.searchCriteria.term===this.searchTerm)return Promise.resolve();this.resetSearchCriteria(),this.resultCollection=null;const e=this.sendSearchRequest();return e.then(()=>{this.resetActiveItem()}),this.$emit("search",e),e},paginateResult(){!this.resultCollection||this.resultCollection.total<this.searchCriteria.page*this.searchCriteria.limit||(this.searchCriteria.setPage(this.searchCriteria.page+1),this.sendSearchRequest())},paginateDisplayList(){this.totalAssigned<this.entityCollection.criteria.page*this.entityCollection.criteria.limit||(this.entityCollection.criteria.setPage(this.entityCollection.criteria.page+1),this.displayItemLimit=this.entityCollection.criteria.page*this.entityCollection.criteria.limit,this.fetchDisplayItems())},emitChanges(e){const t=new y(this.entityCollection.source,this.entityCollection.entity,this.entityCollection.context,this.entityCollection.criteria);e.forEach(s=>{let l=this.entityCollection.get(s);l===null&&(l=this.resultCollection.get(s)),t.push(m(l))}),this.$emit("update:entityCollection",t)},addItem(e){return this.isSelected(e)?(this.remove(e),Promise.resolve()):(this.$emit("item-add",e),this.selectedIds=[...this.selectedIds,e.id],this.$refs.selectionList.select(),this.$refs.selectionList.focus(),this.localMode?(this.totalAssigned+=1,Promise.resolve()):(this.isLoading=!0,this.repository.assign(e.id,this.entityCollection.context).then(t=>(this.totalAssigned+=1,this.isLoading=!1,t))))},remove(e){return this.$emit("item-remove",e),this.localMode?(this.removeIdFromList(e.id),Promise.resolve()):(this.isLoading=!0,this.repository.delete(e.id,this.entityCollection.context).then(t=>(this.removeIdFromList(e.id),this.isLoading=!1,t)))},removeIdFromList(e){this.totalAssigned-=1,this.selectedIds=this.selectedIds.filter(t=>t!==e)},resetSearchCriteria(){this.searchCriteria.setPage(1),this.searchCriteria.setTerm(this.searchTerm),this.searchCriteria.setLimit(this.resultLimit)},onSelectExpanded(){this.resetSearchCriteria(),this.resultCollection=null,this.sendSearchRequest().then(()=>{this.resetActiveItem()}),this.$refs.selectionList.focus()},onSelectCollapsed(){this.$refs.selectionList.blur()},onSearchTermChange(e){this.searchTerm=e,this.$emit("search-term-change",e),this.debouncedSearch(e)},resetActiveItem(){var e;(e=this.$refs.swSelectResultList)==null||e.setActiveItemIndex(0)},debouncedSearch:h(function(){this.search()},400),resetResultCollection(){this.resultCollection=null,this.$refs.selectBase.expanded&&this.sendSearchRequest()},getKey(e,t,s){return d(e,t,s)},openAdvancedSelectionModal(){this.isAdvancedSelectionModalVisible=!0},closeAdvancedSelectionModal(){this.isAdvancedSelectionModalVisible=!1},onAdvancedSelectionSubmit(e){this.isLoading=!0;const t=e.filter(i=>!this.selectedIds.includes(i.id)),s=this.selectedIds.filter(i=>!e.some(n=>n.id===i)),l=t.map(i=>(this.$emit("item-add",i),this.selectedIds=[...this.selectedIds,i.id],this.localMode?(this.totalAssigned+=1,Promise.resolve()):this.repository.assign(i.id,this.entityCollection.context).then(n=>(this.totalAssigned+=1,n)))),r=s.map(i=>(this.$emit("item-remove",this.entityCollection.get(i)),this.localMode?(this.removeIdFromList(i),Promise.resolve()):(this.isLoading=!0,this.repository.delete(i,this.entityCollection.context).then(n=>(this.removeIdFromList(i),n)))));Promise.all([...l,...r]).then(()=>{this.$refs.selectionList.select(),this.$refs.selectionList.focus(),this.isLoading=!1})}}});
