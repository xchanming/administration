const l=`{% block sw_filter_panel %} <div class="sw-filter-panel"> {% block sw_filter_panel_item %} <div v-for="filter in listFilters" :id="filter.name" :key="filter.name" class="sw-filter-panel__item" > <div v-if="false"></div> {% block sw_filter_panel_extension_point %}{% endblock %} <sw-boolean-filter v-else-if="showFilter(filter, 'boolean-filter')" :filter="filter" :active="!!activeFilters[filter.name]" @filter-update="updateFilter" @filter-reset="resetFilter" /> <sw-existence-filter v-else-if="showFilter(filter, 'existence-filter')" :filter="filter" :active="!!activeFilters[filter.name]" @filter-update="updateFilter" @filter-reset="resetFilter" /> <sw-multi-select-filter v-else-if="showFilter(filter, 'multi-select-filter')" :filter="filter" :active="!!activeFilters[filter.name]" @filter-update="updateFilter" @filter-reset="resetFilter" > {% block sw_multi_select_filter_content_path_label %} <template v-if="filter.displayPath" #selection-label-property="{ item, index }" > <sw-highlight-text :key="item.id" v-tooltip="{ message: getBreadcrumb(item), width: 300 }" selected="" :text="getLabelName(item)" /> </template> {% endblock %} {% block sw_multi_select_filter_content_path_result_item %} <template v-if="filter.displayPath" #result-item="{ item, index }" > <sw-select-result v-bind="{ item, index }" > {% block sw_multi_select_filter_content_path_result_label %} <span class="sw-select-result__result-item-text"> <sw-highlight-text :key="item.id" v-tooltip="{ message: getBreadcrumb(item), width: 300 }" selected="" :text="getLabelName(item)" /> </span> {% endblock %} </sw-select-result> </template> {% endblock %} </sw-multi-select-filter> <sw-date-filter v-else-if="showFilter(filter, 'date-filter')" :filter="filter" :active="!!activeFilters[filter.name]" :config="filter.config" @filter-update="updateFilter" @filter-reset="resetFilter" /> <sw-string-filter v-else-if="showFilter(filter, 'string-filter')" :filter="filter" :active="!!activeFilters[filter.name]" :criteria-filter-type="filter.criteriaFilterType" @filter-update="updateFilter" @filter-reset="resetFilter" /> <sw-number-filter v-else-if="showFilter(filter, 'number-filter')" :filter="filter" :active="!!activeFilters[filter.name]" :step="filter.step" :digits="filter.digits" :number-type="filter.numberType" :min="filter.min" :max="filter.max" allow-empty @filter-update="updateFilter" @filter-reset="resetFilter" /> </div> {% endblock %} </div> {% endblock %}`,{Component:s}=Shopware;s.register("sw-filter-panel",{template:l,inject:["repositoryFactory"],emits:["criteria-changed"],props:{filters:{type:Array,required:!0},defaults:{type:Array,required:!0},storeKey:{type:String,required:!0}},data(){return{activeFilters:{},filterChanged:!1,storedFilters:null}},computed:{criteria(){const e=[];return Object.values(this.activeFilters).forEach(t=>{e.push(...t)}),e},isFilterActive(){return this.activeFiltersNumber>0},activeFiltersNumber(){return Object.keys(this.activeFilters).length},listFilters(){const e={...this.storedFilters},t=[];return this.filters.forEach(i=>{const r={...i};r.value=e[r.name]?e[r.name].value:null,r.filterCriteria=e[r.name]?e[r.name].criteria:null,t.push(r)}),t}},watch:{criteria:{handler(){this.filterChanged&&Shopware.Service("filterService").saveFilters(this.storeKey,this.storedFilters).then(e=>{this.storedFilters=e,this.$emit("criteria-changed",this.criteria)})},deep:!0},$route(){this.filterChanged=!1,this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){Shopware.Service("filterService").getStoredFilters(this.storeKey).then(e=>{this.activeFilters={},this.storedFilters=e,this.listFilters.forEach(t=>{const i=e[t.name]?e[t.name].criteria:null;i&&(this.activeFilters[t.name]=i)})})},updateFilter(e,t,i){this.filterChanged=!0,this.activeFilters[e]=t,this.storedFilters[e]={value:i,criteria:t}},resetFilter(e){this.filterChanged=!0,delete this.activeFilters[e],this.storedFilters[e]={value:null,criteria:null}},resetAll(){this.filterChanged=!0,this.activeFilters={},Object.values(this.storedFilters).forEach(e=>{e.value=null,e.criteria=null})},showFilter(e,t){return e.type===t&&this.defaults.includes(e.name)},getBreadcrumb(e){var t;return e.breadcrumb?e.breadcrumb.join(" / "):((t=e.translated)==null?void 0:t.name)||e.name},getLabelName(e){var t,i;return e.breadcrumb&&e.breadcrumb.length>1?`.. / ${((t=e.translated)==null?void 0:t.name)||e.name} `:((i=e.translated)==null?void 0:i.name)||e.name}}});
