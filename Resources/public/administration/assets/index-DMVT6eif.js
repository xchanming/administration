const e=`{% block sw_sidebar_filter_panel %} <sw-sidebar-item class="sw-sidebar-filter-panel" icon="regular-filter" :badge="activeFilterNumber" :title="$tc('sw-filter-panel.titleSidebarItemFilter')" > {% block sw_sidebar_filter_panel_headline %} <template #headline-content> <a v-if="activeFilterNumber" role="button" tabindex="0" @click="resetAll" @keydown.enter="resetAll" >{{ $tc('sw-sidebar-filter-panel.resetButton') }}</a> </template> {% endblock %} {% block sw_sidebar_filter_panel_content %} <sw-filter-panel ref="filterPanel" v-bind="$attrs" v-on="listeners" /> {% endblock %} </sw-sidebar-item> {% endblock %}`,{Component:t}=Cicada;t.register("sw-sidebar-filter-panel",{template:e,compatConfig:Cicada.compatConfig,props:{activeFilterNumber:{type:Number,required:!0}},computed:{listeners(){return this.isCompatEnabled("INSTANCE_LISTENERS")?this.$listeners:{}}},methods:{resetAll(){this.$refs.filterPanel.resetAll()}}});
//# sourceMappingURL=index-DMVT6eif.js.map
