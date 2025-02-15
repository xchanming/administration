const l=`{% block sw_single_select_base_results_list_result %} <template #result-item="{ item, index }"> <slot name="result-group" v-bind="{ shouldShowGroupTitle, item, index, getGroupLabel, getGroupClasses }" > <li v-if="shouldShowGroupTitle(item, index)" :class="getGroupClasses(item)" @click.stop > {{ getGroupLabel(item) }} </li> </slot> <slot name="result-item" v-bind="{ item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }" > <sw-select-result :disabled="item.disabled" :class="'sw-select-option--' + item.value" :selected="isSelected(item)" v-bind="{ item, index }" @item-select="setValue" > {% block sw_single_select_base_results_list_result_label %} <slot name="result-label-property" v-bind="{ item, index, labelProperty, valueProperty, searchTerm, highlightSearchTerm, getKey }" > <sw-highlight-text v-if="highlightSearchTerm && !isSelected(item)" :text="getKey(item, labelProperty)" :search-term="searchTerm" /> <template v-else> {{ getKey(item, labelProperty) }} </template> </slot> {% endblock %} </sw-select-result> </slot> </template> {% endblock %}`,{Component:r}=Shopware;r.extend("sw-grouped-single-select","sw-single-select",{template:l,inject:["feature"],props:{groups:{type:Array,required:!0},groupIdProperty:{type:String,required:!1,default:"id"}},methods:{getGroupClasses(t){const e=["sw-grouped-single-select__group-separator"];return t.group==="misc"&&e.push("sw_grouped-single-select_group-misc-separator"),e},getGroupLabel(t){const e=this.groups.find(s=>s[this.groupIdProperty]===t.group);return(e==null?void 0:e.label)??""},shouldShowGroupTitle(t,e){var s;return t.group&&t.group!==((s=this.visibleResults[e-1])==null?void 0:s.group)}}});
