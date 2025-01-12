const l=`{% block sw_condition_type_select %} <sw-grouped-single-select class="sw-condition-type-select sw-condition-type-select__select" size="medium" label-value="label" :value-property="valueProperty" label-property="translatedLabel" :options="typeOptions" :groups="availableGroups" :placeholder="$tc('global.sw-condition.condition.placeholder')" :value="currentValue" :disabled="disabled || undefined" required show-clearable-button @update:value="changeType" @item-selected="changeItem" @search-term-change="typeSearchTerm = $event" > <template #result-item="{item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }" > <sw-select-result v-tooltip="getTooltipConfig(item)" :disabled="item.disabled || restrictedConditions[item.type] !== undefined || undefined" :class="'sw-select-option--' + item.value" :selected="isSelected(item)" v-bind="{ item, index }" @item-select="setValue" > <sw-highlight-text v-if="highlightSearchTerm && !isSelected(item)" :text="getKey(item, labelProperty)" :search-term="searchTerm" /> <template v-else> {{ getKey(item, labelProperty) }} </template> </sw-select-result> </template> </sw-grouped-single-select> {% endblock %}`,{Component:p}=Cicada;p.register("sw-condition-type-select",{template:l,compatConfig:Cicada.compatConfig,inject:["removeNodeFromTree","conditionDataProviderService","restrictedConditions","childAssociationField"],props:{availableTypes:{type:Array,required:!0},condition:{type:Object,required:!0},hasError:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},availableGroups:{type:Array,required:!1,default(){return[]}}},data(){return{typeSearchTerm:""}},computed:{currentValue(){return this.condition.scriptId??this.condition.type},valueProperty(){return this.condition.scriptId?"scriptId":"type"},ucTerm(){return this.typeSearchTerm.toUpperCase()},typeOptions(){return typeof this.typeSearchTerm!="string"||this.typeSearchTerm===""?this.availableTypes:this.availableTypes.filter(({type:i,label:s})=>{const e=i.toUpperCase(),t=s.toUpperCase();return e.includes(this.ucTerm)||t.includes(this.ucTerm)})},typeSelectClasses(){return{"has--error":this.hasError}},arrowColor(){return this.disabled?{primary:"#d1d9e0",secondary:"#d1d9e0"}:this.hasError?{primary:"#DE294C",secondary:"#ffffff"}:{primary:"#758CA3",secondary:"#ffffff"}}},created(){this.createdComponent()},methods:{createdComponent(){this.condition.type==="scriptRule"&&!this.condition.scriptId&&(this.condition.type=null)},changeItem(i){const{type:s,scriptId:e,appScriptCondition:t}=i??{};this.condition.type=s,this.condition.scriptId=e,this.condition.appScriptCondition=t},changeType(i){this.condition.value=null,this.condition[this.childAssociationField]&&this.condition[this.childAssociationField].length>0&&this.condition[this.childAssociationField].forEach(s=>{this.removeNodeFromTree(this.condition,s)}),this.condition.type=i},getTooltipConfig(i){return Object.keys(this.restrictedConditions).includes(i.type)?{disabled:!1,width:260,message:this.$t("sw-restricted-rules.restrictedConditions.restrictedConditionTooltip",{assignments:this.groupAssignments(i)})}:{message:"",disabled:!0}},groupAssignments(i){const s=this.restrictedConditions[i.type].reduce((e,t)=>(t.associationName.startsWith("flowTrigger")?(e.flowTrigger||(e.flowTrigger=[]),e.flowTrigger.push(t)):/promotion/i.test(t.associationName)?(e.promotion||(e.promotion=[]),e.promotion.push(t)):(e[t.associationName]||(e[t.associationName]=[]),e[t.associationName].push(t)),e),{});return Object.entries(s).reduce((e,[t,o],n)=>{let r="";return o.forEach((d,a)=>{a>0&&(r+="<br />"),r+=this.$t(`sw-restricted-rules.restrictedConditions.relation.${t}`,{assignments:`"${this.$tc(d.snippet,1)}"`})}),n>0?`${e} </br> ${r}`:`${e} ${r}`},"")}}});
//# sourceMappingURL=index-B6in2b2i.js.map
