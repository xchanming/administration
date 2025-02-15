const l=`{% block sw_meteor_single_select %} <div class="sw-meteor-single-select"> {% block sw_meteor_single_select_preview %} <div class="sw-meteor-single-select__preview" role="button" tabindex="0" @click="toggleResultList" @keydown.enter="toggleResultList" > <span class="sw-meteor-single-select__label"> {{ label }}: </span> <span class="sw-meteor-single-select__selected-value-label"> {{ selectedValueLabel }} </span> <sw-icon name="regular-chevron-down-xxs" /> </div> {% endblock %} {% block sw_meteor_single_select_result_list %} <div class="sw-meteor-single-select__result-list"> <sw-select-result-list v-if="isExpanded" :popover-classes="['sw-meteor-single-select__popover']" :popover-resize-width="false" :options="results" :is-loading="isLoading" :empty-message="$tc('global.sw-meteor-single-select.messageNoResults', { term: searchTerm }, 0)" @paginate="$emit('paginate')" @item-select="setValue" @outside-click="closeResultList" > <template v-if="searchable" #before-item-list > <slot name="before-item-list"> <sw-simple-search-field ref="searchField" :value="searchTerm" size="small" variant="form" @update:value="searchTerm = $event" @search-term-change="onInputSearchTerm" /> </slot> </template> <template #result-item="{ item, index }"> <slot name="result-item" v-bind="{ item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }" > <sw-select-result :class="'sw-meteor-select-option--' + item.value" :selected="isSelected(item)" v-bind="{ item, index }" @item-select="setValue" > <slot name="result-label-property" v-bind="{ item, index, labelProperty, valueProperty, searchTerm, highlightSearchTerm, getKey }" > <sw-highlight-text v-if="highlightSearchTerm && !isSelected(item)" :text="getKey(item, labelProperty)" :search-term="searchTerm" /> <template v-else> {{ getKey(item, labelProperty) }} </template> </slot> </sw-select-result> </slot> </template> <template #after-item-list> <slot name="after-item-list"></slot> </template> </sw-select-result-list> </div> {% endblock %} </div> {% endblock %}`,{Component:i,Mixin:r}=Shopware,{debounce:a,get:o}=Shopware.Utils;i.register("sw-meteor-single-select",{template:l,inject:["feature"],emits:["paginate","update:value","search"],mixins:[r.getByName("remove-api-error")],props:{options:{required:!0,type:Array},value:{required:!0},label:{type:String,required:!1,default:""},isLoading:{type:Boolean,required:!1,default:!1},highlightSearchTerm:{type:Boolean,required:!1,default:!0},placeholder:{type:String,required:!1,default:""},labelProperty:{type:String,required:!1,default:"label"},valueProperty:{type:String,required:!1,default:"value"}},data(){return{searchTerm:"",isExpanded:!1,results:this.options,itemRecentlySelected:!1}},computed:{currentValue:{get(){return this.value},set(e){this.$emit("update:value",e)}},inputClasses(){return{"is--expanded":this.isExpanded}},selectionTextClasses(){return{"is--placeholder":!this.singleSelection}},singleSelection:{get(){return this.options.find(e=>this.getKey(e,this.valueProperty)===this.currentValue)},set(e){this.currentValue=this.getKey(e,this.valueProperty)}},selectedValueLabel(){return this.singleSelection?this.getKey(this.singleSelection,this.labelProperty):this.placeholder},searchable(){return this.options.length>=7}},methods:{isSelected(e){return this.getKey(e,this.valueProperty)===this.value},toggleResultList(){this.isExpanded?this.closeResultList():this.openResultList()},openResultList(){this.results=this.options,this.isExpanded=!0},closeResultList(){this.isExpanded=!1,this.searchTerm=""},setValue(e){this.itemRecentlySelected=!0,this.singleSelection=e,this.closeResultList()},onInputSearchTerm(){this.debouncedSearch()},debouncedSearch:a(function(){this.search()},100),search(){this.$emit("search",this.searchTerm),this.results=this.options.filter(e=>{const t=this.getKey(e,this.labelProperty);return t?t.toLowerCase().includes(this.searchTerm.toLowerCase()):!1})},getKey(e,t,s){return o(e,t,s)}}});
