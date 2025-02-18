const s=`{% block sw_settings_snippet_grid_sidebar %} <sw-sidebar class="sw-snippet-settings__sidebar"> {% block sw_settings_snippet_grid_sidebar_refresh %} <sw-sidebar-item icon="regular-undo" :title="$tc('sw-settings-snippet.list.titleSidebarItemRefresh')" @click="onRefresh" /> {% endblock %} {% block sw_settings_snippet_grid_sidebar_filter %} <sw-sidebar-item ref="filterSideBar" icon="regular-filter" :title="$tc('sw-settings-snippet.list.titleSidebarItemFilter')" :badge="activeFilterNumber" @close-content="closeContent" @click="closeContent" > <template #headline-content> <a v-if="activeFilterNumber" class="sw-snippet-settings__sidebar-reset-all" role="button" tabindex="0" @click="resetAll" > {{ $tc('sw-sidebar-filter-panel.resetButton') }} </a> </template> {% block sw_settings_snippet_grid_sidebar_filter_only_empty %} <sw-settings-snippet-filter-switch name="emptySnippets" group="emptySnippets" type="small" :value="filterSettings?.emptySnippets" :label="$tc('sw-settings-snippet.filter.showOnlyEmpty')" @update:value="onChange" /> {% endblock %} {% block sw_settings_snippet_grid_sidebar_filter_custom %} <sw-settings-snippet-filter-switch name="editedSnippets" group="editedSnippets" type="small" :value="filterSettings?.editedSnippets" :label="$tc('sw-settings-snippet.filter.showOnlyCustom')" @update:value="onChange" /> {% endblock %} {% block sw_settings_snippet_grid_sidebar_filter_added %} <sw-settings-snippet-filter-switch name="addedSnippets" group="addedSnippets" type="small" :value="filterSettings?.addedSnippets" :label="$tc('sw-settings-snippet.filter.showOnlyAdded')" @update:value="onChange" /> {% endblock %} {% block sw_settings_snippet_grid_sidebar_filter_author %} <sw-sidebar-collapse :expand-on-loading="isExpandedAuthorFilters"> <template #header> {{ $tc('sw-settings-snippet.filter.author') }} </template> <template #content> <div v-for="(item, index) in authorFilters" :key="index" > <sw-settings-snippet-filter-switch group="authorFilter" :name="item" :value="filterSettings?.[item]" :label="item" @update:value="onChange" /> </div> </template> </sw-sidebar-collapse> {% endblock %} {% block sw_settings_snippet_grid_sidebar_filter_more %} <sw-sidebar-collapse :expand-on-loading="isExpandedMoreFilters"> <template #header> {{ $tc('sw-settings-snippet.filter.more') }} </template> <template #content> <div v-for="(item, index) in filterItems" :key="index" > <sw-settings-snippet-filter-switch group="namespaceFilters" :name="item" :value="filterSettings?.[item]" :label="item" @update:value="onChange" /> </div> </template> </sw-sidebar-collapse> {% endblock %} </sw-sidebar-item> {% endblock %} </sw-sidebar> {% endblock %}`,i={template:s,emits:["sw-sidebar-close","sw-sidebar-open","change","sw-sidebar-collaps-refresh-grid","sidebar-reset-all"],props:{filterItems:{type:Array,required:!0},authorFilters:{type:Array,required:!0},filterSettings:{type:Object,required:!1,default:null}},computed:{activeFilterNumber(){let e=0;return this.filterSettings&&Object.values(this.filterSettings).forEach(t=>{t===!0&&(e+=1)}),e},isExpandedAuthorFilters(){return this.filterSettings?this.authorFilters.some(e=>this.filterSettings[e]===!0):!1},isExpandedMoreFilters(){return this.filterSettings?this.filterItems.some(e=>this.filterSettings[e]===!0):!1}},methods:{closeContent(){var e,t;if(this.filterSidebarIsOpen){this.$refs.filterSideBar.closeContent(),this.filterSidebarIsOpen=!1,this.$emit("sw-sidebar-close");return}(t=(e=this.$refs.filterSideBar)==null?void 0:e.openContent)==null||t.call(e),this.filterSidebarIsOpen=!0,this.$emit("sw-sidebar-open")},onChange(e){this.$emit("change",e)},onRefresh(){this.$emit("sw-sidebar-collaps-refresh-grid")},resetAll(){this.$emit("sidebar-reset-all")}}};export{i as default};
