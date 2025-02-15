const n=`{% block sw_extension_my_extensions_index %} <sw-meteor-page class="sw-extension-store-purchased" hide-icon > {% block sw_extension_my_extensions_index_smart_bar_header %} <template #smart-bar-header> {{ $tc('sw-extension.mainMenu.purchased') }} </template> {% endblock %} {% block sw_extension_my_extensions_index_smart_bar_search_slot %} <template #search-bar> {% block sw_extension_my_extensions_index_smart_bar_search_slot_search_bar %} <sw-search-bar initial-search-type="extension" :placeholder="$tc('sw-extension.my-extensions.listing.placeholderSearchBar')" @search="onSearch" /> {% endblock %} </template> {% endblock %} {% block sw_extension_my_extensions_index_smart_bar_tabs %} <template #page-tabs> {% block sw_extension_my_extensions_index_smart_bar_tabs_app %} <sw-tabs-item :route="{ name: 'sw.extension.my-extensions.listing.app', query: queryParams }"> {{ $tc('sw-extension.my-extensions.tabs.app') }} </sw-tabs-item> {% endblock %} {% block sw_extension_my_extensions_index_smart_bar_tabs_theme %} <sw-tabs-item :route="{ name: 'sw.extension.my-extensions.listing.theme', query: queryParams }"> {{ $tc('sw-extension.my-extensions.tabs.theme') }} </sw-tabs-item> {% endblock %} {% block sw_extension_my_extensions_index_smart_bar_tabs_recommendation %} <sw-tabs-item :route="{ name: 'sw.extension.my-extensions.recommendation' }"> {{ $tc('sw-extension.my-extensions.tabs.recommendation') }} </sw-tabs-item> {% endblock %} {% block sw_extension_my_extensions_index_smart_bar_tabs_account %} <sw-tabs-item :route="{ name: 'sw.extension.my-extensions.account' }"> {{ $tc('sw-extension.my-extensions.tabs.shopwareAccount') }} </sw-tabs-item> {% endblock %} </template> {% endblock %} {% block sw_extension_my_extensions_index_smart_bar_actions %} <template #smart-bar-actions> {% block sw_extension_my_extensions_index_smart_bar_actions_file_upload %} <sw-extension-file-upload v-if="acl.can('system.plugin_upload') || !extensionManagementDisabled" /> {% endblock %} </template> {% endblock %} {% block sw_extension_my_extensions_index_body %} <template #default> <router-view /> </template> {% endblock %} </sw-meteor-page> {% endblock %}`,a={template:n,inject:["acl"],computed:{searchValue:{get(){return this.$route.query.term||""},set(e){this.updateRouteQueryTerm(e)}},queryParams(){return{term:this.searchValue||void 0,limit:this.$route.query.limit,page:1}},extensionManagementDisabled(){return Shopware.Store.get("context").app.config.settings.disableExtensionManagement}},methods:{onSearch(e){this.searchValue=e},updateRouteQueryTerm(e){const s=this.$route.query,t={name:this.$route.name,params:this.$route.params,query:{term:e||void 0,limit:this.$route.query.limit,page:1}};Shopware.Utils.types.isEmpty(s)?this.$router.replace(t):this.$router.push(t)}}};export{a as default};
