const a='{% block sw_string_filter %} <sw-base-filter :title="filter.label" :show-reset-button="!!filter.value" :active="active" @filter-reset="resetFilter" > {% block sw_string_filter_content %} <mt-text-field :model-value="filter.value" :placeholder="filter.placeholder" @change="updateFilter" /> {% endblock %} </sw-base-filter> {% endblock %}',{Criteria:r}=Cicada.Data,s=Cicada.Component.wrapComponentConfig({template:a,compatConfig:Cicada.compatConfig,props:{filter:{type:Object,required:!0},active:{type:Boolean,required:!0},criteriaFilterType:{type:String,required:!1,default:"contains",validValues:["contains","equals","equalsAny","prefix","suffix"],validator(e){return["contains","equals","equalsAny","prefix","suffix"].includes(e)}}},methods:{updateFilter(e){if(!e||typeof this.filter.property!="string"){this.resetFilter();return}let t=e,i;this.criteriaFilterType==="equalsAny"?(t=e.split(",").map(l=>l.trim()),i=r.equalsAny(this.filter.property,t)):i=r[this.criteriaFilterType](this.filter.property,t),this.$emit("filter-update",this.filter.name,[i],t)},resetFilter(){this.$emit("filter-reset",this.filter.name)}}});export{s as default};
//# sourceMappingURL=index-Syz8PX2p.js.map
