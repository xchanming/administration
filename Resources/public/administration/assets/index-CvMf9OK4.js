const e='{% block sw_shortcut_overview %} <div class="sw-shortcut-overview"> {% block sw_shortcut_overview_modal %} <sw-modal v-if="showShortcutOverviewModal" class="sw-shortcut-overview--modal" :title="$tc(`sw-shortcut-overview.modalTitle`)" variant="large" @modal-close="onCloseShortcutOverviewModal" > {% block sw_shortcut_overview_modal_section_adding_items %} <h3>{{ $tc(`sw-shortcut-overview.sectionAddingItems`) }}</h3> <sw-shortcut-overview-item v-for="section in sections.addingItems" :key="section.id" :title="section.title" :content="section.content" :privilege="section.privilege" /> {% endblock %} {% block sw_shortcut_overview_modal_section_navigation %} <h3>{{ $tc(`sw-shortcut-overview.sectionNavigation`) }}</h3> <sw-shortcut-overview-item v-for="section in sections.navigation" :key="section.id" :title="section.title" :content="section.content" :privilege="section.privilege" /> {% endblock %} {% block sw_shortcut_overview_modal_section_special_shortcuts %} <h3>{{ $tc(`sw-shortcut-overview.sectionSpecialShortcuts`) }}</h3> <sw-shortcut-overview-item v-for="section in sections.specialShortcuts" :key="section.id" :title="section.title" :content="section.content" :privilege="section.privilege" /> {% endblock %} </sw-modal> {% endblock %} </div> {% endblock %}',{Component:o}=Cicada,t=Cicada.Utils;o.register("sw-shortcut-overview",{template:e,compatConfig:Cicada.compatConfig,emits:["shortcut-open","shortcut-close"],shortcuts:{"?":"onOpenShortcutOverviewModal"},data(){return{showShortcutOverviewModal:!1}},computed:{sections(){return{addingItems:[{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionAddProduct"),content:this.$tc("sw-shortcut-overview.keyboardShortcutAddProduct"),privilege:"product.creator"},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionAddCategory"),content:this.$tc("sw-shortcut-overview.keyboardShortcutAddCategory")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionAddCustomer"),content:this.$tc("sw-shortcut-overview.keyboardShortcutAddCustomer")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionAddProperties"),content:this.$tc("sw-shortcut-overview.keyboardShortcutAddProperties")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionAddManufacturer"),content:this.$tc("sw-shortcut-overview.keyboardShortcutAddManufacturer")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionAddRule"),content:this.$tc("sw-shortcut-overview.keyboardShortcutAddRule")}],navigation:[{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToDashboard"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToDashboard")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToProducts"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToProducts"),privilege:"product.viewer"},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToCategories"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToCategories")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToDynamicProductGroups"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToDynamicProductGroups")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToProperties"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToProperties")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToManufacturers"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToManufacturers")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToOrders"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToOrders")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToCustomers"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToCustomers")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToShoppingExperience"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToShoppingExperience")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToMedia"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToMedia")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToPromotion"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToPromotion")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToNewsletterRecipients"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToNewsletterRecipients")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToSettingsListing"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToSettingsListing")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToSnippets"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToSnippets")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToPayment"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToPayment")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToShipping"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToShipping")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToRuleBuilder"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToRuleBuilder")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionGoToPlugins"),content:this.$tc("sw-shortcut-overview.keyboardShortcutGoToPlugins"),privilege:"system.plugin_maintain"}],specialShortcuts:[{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionSpecialShortcutFocusSearch"),content:this.$tc("sw-shortcut-overview.keyboardShortcutSpecialShortcutFocusSearch")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionSpecialShortcutShortcutListing"),content:this.$tc("sw-shortcut-overview.keyboardShortcutSpecialShortcutShortcutListing")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionSpecialShortcutSaveDetailViewWindows"),content:this.$tc("sw-shortcut-overview.keyboardShortcutSpecialShortcutSaveDetailViewWindows")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionSpecialShortcutSaveDetailViewMac"),content:this.$tc("sw-shortcut-overview.keyboardShortcutSpecialShortcutSaveDetailViewMac")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionSpecialShortcutSaveDetailViewLinux"),content:this.$tc("sw-shortcut-overview.keyboardShortcutSpecialShortcutSaveDetailViewLinux")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionSpecialShortcutCancelDetailView"),content:this.$tc("sw-shortcut-overview.keyboardShortcutSpecialShortcutCancelDetailView")},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionSpecialShortcutClearCacheWindows"),content:this.$tc("sw-shortcut-overview.keyboardShortcutSpecialShortcutClearCacheWindows"),privilege:"system.clear_cache"},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionSpecialShortcutClearCacheMac"),content:this.$tc("sw-shortcut-overview.keyboardShortcutSpecialShortcutClearCacheMac"),privilege:"system.clear_cache"},{id:t.createId(),title:this.$tc("sw-shortcut-overview.functionSpecialShortcutClearCacheLinux"),content:this.$tc("sw-shortcut-overview.keyboardShortcutSpecialShortcutClearCacheLinux"),privilege:"system.clear_cache"}]}}},methods:{onOpenShortcutOverviewModal(){this.showShortcutOverviewModal=!0,this.$emit("shortcut-open")},onCloseShortcutOverviewModal(){this.showShortcutOverviewModal=!1,this.$emit("shortcut-close")}}});
//# sourceMappingURL=index-CvMf9OK4.js.map
