import{P as a,a as i}from"./main.vite-CEuAX8cl.js";import"./administration-DCOj2uiN.js";import"./channel-oRk5-XZJ.js";const o=`{% block sw_settings_cache_index %} <sw-page class="sw-settings-cache"> {% block sw_settings_cache_smart_bar_header %} <template #smart-bar-header> {% block sw_settings_cache_smart_bar_header_title %} <h2> {% block sw_settings_cache_smart_bar_header_title_text %} {{ $tc('sw-settings.index.title') }} <sw-icon name="regular-chevron-right-xs" small /> {{ $tc('sw-settings-cache.general.mainMenuItemGeneral') }} {% endblock %} </h2> {% endblock %} </template> {% endblock %} {% block sw_settings_cache_content %} <template #content> <sw-card-view> <template v-if="componentIsBuilding"> <sw-skeleton /> <sw-skeleton /> </template> <sw-card v-else position-identifier="sw-settings-cache-content" :title="$tc('sw-settings-cache.general.mainMenuItemGeneral')" :is-loading="isLoading" > {% block sw_settings_cache_content_toolbar %} <template #toolbar> <sw-card-section secondary> <sw-container class="sw-settings-cache__card-toolbar" columns="1fr 1fr" rows="repeat(2, 40px)" > {% block sw_settings_cache_content_toolbar_environment %} <div> {% block sw_settings_cache_content_toolbar_environment_heading %} <p class="sw-settings-cache__card-toolbar-heading"> {{ $tc('sw-settings-cache.toolbar.environment') }} </p> {% endblock %} {% block sw_settings_cache_content_toolbar_environment_text %} <p>{{ environmentValue }}</p> {% endblock %} </div> {% endblock %} {% block sw_settings_cache_content_toolbar_http_cache %} <div> {% block sw_settings_cache_content_toolbar_http_cache_heading %} <p class="sw-settings-cache__card-toolbar-heading"> {{ $tc('sw-settings-cache.toolbar.httpCache') }} </p> {% endblock %} {% block sw_settings_cache_content_toolbar_http_cache_text %} <p>{{ httpCacheValue }}</p> {% endblock %} </div> {% endblock %} {% block sw_settings_cache_content_toolbar_cache_adapter %} <div> {% block sw_settings_cache_content_toolbar_cache_adapter_heading %} <p class="sw-settings-cache__card-toolbar-heading"> {{ $tc('sw-settings-cache.toolbar.cacheAdapter') }} </p> {% endblock %} {% block sw_settings_cache_content_toolbar_cache_adapter_text %} <p>{{ cacheAdapterValue }}</p> {% endblock %} </div> {% endblock %} </sw-container> </sw-card-section> </template> {% endblock %} {% block sw_settings_cache_content_clear_data_cache_row %} <sw-card-section v-if="feature.isActive('cache_rework')" divider="bottom" > <sw-container align="center" columns="1fr auto" gap="20px" > <div> {% block sw_settings_cache_content_clear_data_cache_row_heading %} <p class="sw-settings-cache__card-section-heading"> {{ $tc('sw-settings-cache.section.clearDataCachesHeadline') }} </p> {% endblock %} {% block sw_settings_cache_content_clear_data_cache_row_text %} <p>{{ $tc('sw-settings-cache.section.clearDataCachesText') }}</p> {% endblock %} </div> {% block sw_settings_cache_content_clear_data_cache_row_button %} <sw-button-process variant="ghost" :is-loading="processes.normalClearCache" :process-success="processSuccess.normalClearCache" @update:process-success="resetButtons" @click="clearDataCache" > {{ $tc('sw-settings-cache.section.clearDataCachesButton') }} </sw-button-process> {% endblock %} </sw-container> </sw-card-section> {% endblock %} {% block sw_settings_cache_content_clear_cache_row %} <sw-card-section divider="bottom"> <sw-container align="center" columns="1fr auto" gap="20px" > <div> {% block sw_settings_cache_content_clear_cache_row_heading %} <p class="sw-settings-cache__card-section-heading"> {{ $tc('sw-settings-cache.section.clearCachesHeadline') }} </p> {% endblock %} {% block sw_settings_cache_content_clear_cache_row_text %} <p>{{ $tc('sw-settings-cache.section.clearCachesText') }}</p> {% endblock %} </div> {% block sw_settings_cache_content_clear_cache_row_button %} <sw-button-process variant="ghost" :is-loading="processes.normalClearCache" :process-success="processSuccess.normalClearCache" @update:process-success="resetButtons" @click="clearCache" > {{ $tc('sw-settings-cache.section.clearCachesButton') }} </sw-button-process> {% endblock %} </sw-container> </sw-card-section> {% endblock %} {% block sw_settings_cache_content_indexes_row %} <sw-card-section class="sw-settings-cache__card-indexes"> <sw-container> {% block sw_settings_cache_content_indexes_row_heading %} <p class="sw-settings-cache__card-section-heading"> {{ $tc('sw-settings-cache.section.indexesHeadline') }} </p> {% endblock %} {% block sw_settings_cache_content_indexes_row_text %} <p>{{ $tc('sw-settings-cache.section.indexesText') }}</p> {% endblock %} </sw-container> <sw-container columns="2fr 3fr 1fr" gap="10px" justify="end" align="end" > <sw-select-field v-model:value="indexingMethod" name="indexingMethod" class="sw-settings-cache__skip-indexers-select" :label="$tc('sw-settings-cache.section.indexingModeLabel')" :disabled="processes.updateIndexes" > <option value="skip"> {{ $tc('sw-settings-cache.section.indexingModeOptionSkipLabel') }} </option> <option value="only"> {{ $tc('sw-settings-cache.section.indexingModeOptionOnlyLabel') }} </option> </sw-select-field> {% block sw_settings_cache_content_indexes_row_skip_select %} <sw-select-base class="sw-settings-cache__indexers-select" :label="indexingMethod === 'skip' ? $tc('sw-settings-cache.section.indexesSkipSelectLabel') : $tc('sw-settings-cache.section.indexesOnlySelectLabel')" :disabled="processes.updateIndexes" > <template #sw-select-selection> <sw-label v-for="(selection, index) in indexerSelection" :key="index" @dismiss="changeSelection(false, selection)" > {{ selection }} </sw-label> <sw-label ghost class="sw-settings-cache__indexers-placeholder" > {{ indexingMethod === 'skip' ? $tc('sw-settings-cache.section.indexesSkipSelectPlaceholder') : $tc('sw-settings-cache.section.indexesOnlySelectPlaceholder') }} </sw-label> </template> <template #results-list> <sw-select-result-list :options="[indexers]"> <template #result-item="{ item, index }"> <ul class="sw-settings-cache__indexers-list" @click.stop > <li v-for="(updaters, indexer) in item" :key="indexer" > <sw-checkbox-field class="sw-settings-cache__indexers-entry" :value="indexerSelection.includes(indexer)" :label="indexer" :name="indexer" size="small" @update:value="changeSelection($event, indexer)" /> <ul> <li v-for="(updater, index) in updaters" :key="index" > <sw-checkbox-field class="sw-settings-cache__indexers-entry" :value="indexerSelection.includes(updater) || indexerSelection.includes(indexer)" :label="updater" :name="updater" size="small" :disabled="indexerSelection.includes(indexer)" @click.prevent @update:value="changeSelection($event, updater)" /> </li> </ul> </li> </ul> </template> </sw-select-result-list> </template> </sw-select-base> {% endblock %} {% block sw_settings_cache_content_indexes_row_button %} <sw-button-process name="updateIndexesButton" class="sw-button--large" variant="ghost" :is-loading="processes.updateIndexes" :process-success="processSuccess.updateIndexes" @update:process-success="resetButtons" @click="updateIndexes" > {{ $tc('sw-settings-cache.section.indexesButton') }} </sw-button-process> {% endblock %} </sw-container> </sw-card-section> {% endblock %} </sw-card> </sw-card-view> </template> {% endblock %} </sw-page> {% endblock %}`,{Mixin:r}=Cicada,_={template:o,compatConfig:Cicada.compatConfig,inject:["cacheApiService","feature"],mixins:[r.getByName("notification")],data(){return{componentIsBuilding:!0,isLoading:!0,cacheInfo:null,processes:{normalClearCache:!1,updateIndexes:!1},processSuccess:{normalClearCache:!1,updateIndexes:!1},indexingMethod:"skip",indexerSelection:[],indexers:{"category.indexer":["category.child-count","category.tree","category.breadcrumb","category.seo-url"],"customer.indexer":["customer.many-to-many-id-field"],"landing_page.indexer":["landing_page.many-to-many-id-field","landing_page.seo-url"],"media.indexer":[],"media_folder.indexer":["media_folder.child-count"],"media_folder_configuration.indexer":[],"payment_method.indexer":[],"product.indexer":["product.inheritance","product.stock","product.variant-listing","product.child-count","product.many-to-many-id-field","product.category-denormalizer","product.cheapest-price","product.rating-average","product.stream","product.search-keyword","product.seo-url"],"product_stream.indexer":[],"product_stream_mapping.indexer":[],"promotion.indexer":["promotion.exclusion","promotion.redemption"],"rule.indexer":["rule.payload"],"sales_channel.indexer":["sales_channel.many-to-many"],"flow.indexer":[],"newsletter_recipient.indexer":[]}}},metaInfo(){return{title:this.$createTitle()}},computed:{httpCacheValue(){return this.cacheInfo===null?"":this.cacheInfo.httpCache?this.$tc("sw-settings-cache.toolbar.httpCacheOn"):this.$tc("sw-settings-cache.toolbar.httpCacheOff")},environmentValue(){return this.cacheInfo===null?"":this.cacheInfo.environment==="dev"?this.$tc("sw-settings-cache.toolbar.environmentDev"):this.$tc("sw-settings-cache.toolbar.environmentProd")},cacheAdapterValue(){return this.cacheInfo===null?"":this.cacheInfo.cacheAdapter}},created(){this.createdComponent()},methods:{createdComponent(){this.cacheApiService.info().then(e=>{this.cacheInfo=e.data,this.componentIsBuilding=!1,this.isLoading=!1})},resetButtons(){this.processSuccess={normalClearCache:!1,updateIndexes:!1}},decreaseWorkerPoll(){Cicada.State.commit("notification/setWorkerProcessPollInterval",a),setTimeout(()=>{Cicada.State.commit("notification/setWorkerProcessPollInterval",i)},6e4)},clearDataCache(){this.createNotificationInfo({message:this.$tc("sw-settings-cache.notifications.clearDataCache.started")}),this.processes.normalClearCache=!0,this.cacheApiService.delayed().then(()=>{this.processSuccess.normalClearCache=!0,this.createNotificationSuccess({message:this.$tc("sw-settings-cache.notifications.clearDataCache.success")})}).catch(()=>{this.processSuccess.normalClearCache=!1,this.createNotificationError({message:this.$tc("sw-settings-cache.notifications.clearDataCache.error")})}).finally(()=>{this.processes.normalClearCache=!1})},clearCache(){this.createNotificationInfo({message:this.$tc("sw-settings-cache.notifications.clearCache.started")}),this.processes.normalClearCache=!0,this.cacheApiService.clear().then(()=>{this.processSuccess.normalClearCache=!0,this.createNotificationSuccess({message:this.$tc("sw-settings-cache.notifications.clearCache.success")})}).catch(()=>{this.processSuccess.normalClearCache=!1,this.createNotificationError({message:this.$tc("sw-settings-cache.notifications.clearCache.error")})}).finally(()=>{this.processes.normalClearCache=!1})},updateIndexes(){this.processes.updateIndexes=!0;let e=[];const t=[];this.indexingMethod==="skip"?e=this.indexerSelection:this.createOnlySelection(t),this.cacheApiService.index(e,t).then(()=>{this.decreaseWorkerPoll(),this.createNotificationInfo({message:this.$tc("sw-settings-cache.notifications.index.started")}),this.processSuccess.updateIndexes=!0}).catch(()=>{this.processSuccess.updateIndexes=!1}).finally(()=>{this.processes.updateIndexes=!1})},changeSelection(e,t){if(e){this.indexerSelection.push(t);return}const s=this.indexerSelection.indexOf(t);s>-1&&this.indexerSelection.splice(s,1)},createOnlySelection(e){for(const[t,s]of Object.entries(this.indexers)){this.indexerSelection.indexOf(t)>-1&&e.push(t);const c=[];for(const n of s)this.indexerSelection.indexOf(n)>-1&&c.push(n);c.length>0&&e.push(t),e.push(...c)}},flipIndexers(){const e=[];for(const[t,s]of Object.entries(this.indexers))s.length>0?e.push(...s):e.push(t);this.indexerSelection=e.filter(t=>this.indexerSelection.indexOf(t)===-1)}}};export{_ as default};
//# sourceMappingURL=index-BszQOsqQ.js.map
