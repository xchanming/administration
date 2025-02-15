const a=`<div class="sw-extension-my-extensions-listing"> <sw-skeleton v-if="isLoading" :variant="skeletonVariant" /> <div v-else class="sw-extension-my-extensions-listing__listing-grid" > <sw-alert v-if="!isAppUrlReachable" class="sw-extension-my-extensions-listing__app-url-warning" variant="warning" :title="$tc('sw-app.component.sw-app-wrong-app-url-modal.title')" > <template #default> <div> {{ $tc('sw-app.component.sw-app-wrong-app-url-modal.explanation') }} </div> <div> {{ $tc('sw-app.component.sw-app-wrong-app-url-modal.textGetSupport') }} </div> </template> <template #actions> <sw-button class="sw-app-wrong-app-url-modal__content-link-button" variant="ghost" :link="$tc('sw-app.component.sw-app-wrong-app-url-modal.linkToDocsArticle')" > {{ $tc('sw-app.component.sw-app-wrong-app-url-modal.labelLearnMoreButton') }} </sw-button> </template> </sw-alert> <sw-alert v-if="extensionManagementDisabled" class="sw-extension-my-extensions-listing__runtime-extension-warning" variant="warning" :title="$tc('sw-extension-store.component.sw-extension-my-extensions-listing.alertExtensionManagement.title')" > <template #default> <div> {{ $tc('sw-extension-store.component.sw-extension-my-extensions-listing.alertExtensionManagement.description') }} </div> </template> <template #actions> <sw-external-link href="https://developer.xchanming.com/docs/guides/hosting/installation-updates/extension-managment.html" > {{ $tc('sw-app.component.sw-app-wrong-app-url-modal.labelLearnMoreButton') }} </sw-external-link> </template> </sw-alert> {% block sw_extension_my_extensions_list_empty_state %} <sw-meteor-card v-if="!extensionListPaginated.length && !filterByActiveState" class="sw-extension-my-extensions-listing__empty-state" > <img :src="assetFilter('administration/static/img/empty-states/extensions-empty-state.svg')" alt="" > <h3 v-if="isThemeRoute"> {{ $tc('sw-extension-store.component.sw-extension-my-extensions-listing.themes.titleEmptyState') }} </h3> <h3 v-else> {{ $tc('sw-extension-store.component.sw-extension-my-extensions-listing.apps.titleEmptyState') }} </h3> <p v-if="isThemeRoute"> {{ $tc('sw-extension-store.component.sw-extension-my-extensions-listing.themes.textEmptyState') }} </p> <p v-else> {{ $tc('sw-extension-store.component.sw-extension-my-extensions-listing.apps.textEmptyState') }} </p> <sw-button variant="ghost" @click="isThemeRoute ? openThemesStore() : openStore()" > {{ $tc('sw-extension-store.component.sw-extension-my-extensions-listing.btnOpenStore') }} </sw-button> </sw-meteor-card> {% endblock %} <template v-else> <div class="sw-extension-my-extensions-listing__container"> <sw-extension-my-extensions-listing-controls @update:active-state="changeActiveState" @update:sorting-option="changeSortingOption" /> <sw-extension-component-section v-if="isThemeRoute" position-identifier="sw-extension-my-extensions-listing__before-content" /> <sw-meteor-card v-if="!extensionListPaginated.length && filterByActiveState" class="sw-extension-my-extensions-listing__empty-state" > <img :src="assetFilter('administration/static/img/empty-states/extensions-empty-state.svg')" alt="" > <h3 v-if="isThemeRoute"> {{ $tc('sw-extension-store.component.sw-extension-my-extensions-listing.themes.noActivePlugins') }} </h3> <h3 v-else> {{ $tc('sw-extension-store.component.sw-extension-my-extensions-listing.apps.noActivePlugins') }} </h3> </sw-meteor-card> <template v-else> <template v-for="entry in extensionListPaginated" :key="entry.name" > <component :is="entry.storeLicense ? 'sw-extension-card-bought' : 'sw-self-maintained-extension-card'" :extension="entry" @update-list="updateList" /> </template> <sw-pagination :total="total" :limit="limit" :page="page" @page-change="changePage" /> </template> </div> </template> </div> </div>`,r={template:a,inject:["shopwareExtensionService"],data(){return{filterByActiveState:!1,sortingOption:"updated-at"}},computed:{isAppUrlReachable(){var e;return(e=Shopware.Store.get("context").app.config.settings)==null?void 0:e.appUrlReachable},isLoading(){return Shopware.Store.get("shopwareExtensions").myExtensions.loading},myExtensions(){return Shopware.Store.get("shopwareExtensions").myExtensions.data},extensionList(){const e=this.filterExtensionsByType(this.myExtensions),t=this.sortExtensions(e,this.sortingOption);return this.filterByActiveState?this.filterExtensionsByActiveState(t):t},extensionListPaginated(){const e=(this.page-1)*this.limit;return this.extensionListSearched.slice(e,e+this.limit)},extensionListSearched(){return this.extensionList.filter(e=>{const t=this.term&&this.term.toLowerCase();if(!this.term)return!0;const n=e.label||"",s=e.name||"";return n.toLowerCase().includes(t)||s.toLowerCase().includes(t)})},isAppRoute(){return this.$route.name==="sw.extension.my-extensions.listing.app"},isThemeRoute(){return this.$route.name==="sw.extension.my-extensions.listing.theme"},total(){return this.extensionListSearched.length||0},limit:{get(){return Number(this.$route.query.limit)||25},set(e){this.updateRouteQuery({limit:e})}},page:{get(){return Number(this.$route.query.page)||1},set(e){this.updateRouteQuery({page:e})}},term:{get(){return this.$route.query.term||void 0},set(e){this.updateRouteQuery({term:e,page:1})}},skeletonVariant(){return this.isThemeRoute?"extension-themes":"extension-apps"},assetFilter(){return Shopware.Filter.getByName("asset")},extensionManagementDisabled(){return Shopware.Store.get("context").app.config.settings.disableExtensionManagement}},watch:{"$route.name"(){this.updateList(),this.filterByActiveState=!1}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.updateList(),this.updateRouteQuery()},updateList(){this.shopwareExtensionService.updateExtensionData()},openStore(){this.$router.push({name:"sw.extension.store.listing"})},openThemesStore(){this.$router.push({name:"sw.extension.store.listing.theme"})},updateRouteQuery(e={}){const t=this.$route.query,n=e.limit||this.$route.query.limit,s=e.page||this.$route.query.page,o=e.term||this.$route.query.term,i={name:this.$route.name,params:this.$route.params,query:{limit:n||25,page:s||1,term:o||void 0}};Shopware.Utils.types.isEmpty(t)?this.$router.replace(i):this.$router.push(i)},changePage({page:e,limit:t}){this.updateRouteQuery({page:e,limit:t})},filterExtensionsByType(e){return e.filter(t=>!!(this.isAppRoute&&!t.isTheme||this.isThemeRoute&&t.isTheme))},sortExtensions(e,t){return e.sort((n,s)=>{if(t==="name-asc")return n.label.localeCompare(s.label,{sensitivity:"base"});if(t==="name-desc")return n.label.localeCompare(s.label,{sensitivity:"base"})*-1;if(t==="updated-at"){if(n.updatedAt===null&&s.updatedAt!==null)return 1;if(n.updatedAt!==null&&s.updatedAt===null)return-1;if(s.updatedAt===null&&n.updatedAt===null)return 0;const o=new Date(n.updatedAt.date),i=new Date(s.updatedAt.date);if(o>i)return-1;if(o<i)return 1;if(o===i)return 0}return 0})},changeSortingOption(e){this.sortingOption=e},changeActiveState(e){this.filterByActiveState=e},filterExtensionsByActiveState(e){return e.filter(t=>t.active)}}};export{r as default};
