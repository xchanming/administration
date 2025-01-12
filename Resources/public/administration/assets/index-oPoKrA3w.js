import"./index-CiVFztUj.js";const a=`{% block sw_settings_search_view_live_search_card %} <sw-card class="sw-settings-search-live-search" position-identifier="sw-settings-search-live-search" :title="$tc('sw-settings-search.liveSearchTab.titleCard')" > {% block sw_settings_search_view_live_search_rebuild_index_row %} <div class="sw-settings-search-live-search__rebuild-index-row"> {% block sw_settings_search_view_live_search_description %} <div class="sw-settings-search-live-search__description"> {{ $tc('sw-settings-search.liveSearchTab.textDescription') }} </div> {% endblock %} {% block sw_settings_search_view_live_search_show_example_link %} <sw-container columns="1fr" justify="end" > <a class="sw-settings-search-live-search__show-example-link" role="button" tabindex="0" @click="onShowExampleModal" > {{ $tc('sw-settings-search.generalTab.linkExample') }} <sw-icon name="regular-long-arrow-right" small /> </a> </sw-container> {% endblock %} {% block sw_settings_search_searchable_show_example_modal %} <sw-settings-search-example-modal v-if="showExampleModal" @modal-close="onCloseExampleModal" /> {% endblock %} </div> {% endblock %} {% block sw_settings_search_view_live_search_sales_channel %} <sw-single-select class="sw-settings-search-live-search__sales-channel-select" value-property="id" label-property="translated.name" :placeholder="$tc('sw-settings-search.liveSearchTab.textPlaceholderSalesChannel')" :label="$tc('sw-settings-search.liveSearchTab.labelSalesChannelSelect')" :value="salesChannelId" :options="salesChannels" show-clearable-button @update:value="changeSalesChannel" /> {% endblock %} {% block sw_settings_search_view_live_search_input %} <sw-simple-search-field v-model:value="liveSearchTerm" class="sw-settings-search-live-search__search_box" variant="form" :delay="1000" :disabled="!isSearchEnable || undefined" @search-term-change="searchOnStorefront" > {% block sw_settings_search_view_live_search_search_icon_wrapper %} <template #sw-simple-search-field-icon> {% block sw_settings_search_view_live_search_search_icon %} <sw-icon class="sw-settings-search-live-search__search-icon" name="regular-search-s" small @click="searchOnStorefront" /> {% endblock %} </template> {% endblock %} </sw-simple-search-field> {% endblock %} {% block sw_settings_search_view_live_search_results %} <div class="sw-settings-search-live-search__search-results"> {% block sw_search_bar_results_empty_state %} <sw-loader v-if="searchInProgress" /> {% endblock %} {% block sw_settings_search_view_live_search_results_no_result %} <div v-if="products && products.length === 0" class="sw-settings-search-live-search__no-result" > {{ $tc('sw-settings-search.liveSearchTab.textNoResult') }} </div> {% endblock %} {% block sw_settings_search_view_live_search_results_search_grid %} <sw-data-grid v-if="products && products.length > 0" class="sw-settings-search-live-search__grid-result" :plain-appearance="true" :show-selection="false" :show-actions="false" :data-source="products" :is-loading="searchInProgress" :columns="searchColumns" > {% block sw_settings_search_view_live_search_results_search_grid_columns %} {% block sw_settings_search_view_live_search_results_search_grid_name %} <template #column-name="{ item }"> <sw-product-variant-info :variations="item.variation" :show-tooltip="false" > <sw-settings-search-live-search-keyword :text="(item.name || item.translated.name)" :search-term="liveSearchTerm" /> </sw-product-variant-info> </template> {% endblock %} {% block sw_settings_search_view_live_search_results_search_grid_score %} <template #column-score="{ item }"> <span class="sw-settings-search-live-search__grid-result__score"> {{ Math.round(parseFloat(item.extensions.search._score)) }} </span> </template> {% endblock %} {% endblock %} </sw-data-grid> {% endblock %} </div> {% endblock %} </sw-card> {% endblock %}`,{Mixin:t}=Cicada,{Criteria:l}=Cicada.Data,c={template:a,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","liveSearchService"],emits:["live-search-results-change","sales-channel-change"],mixins:[t.getByName("notification")],props:{currentSalesChannelId:{type:String,required:!1,default:null},searchTerms:{type:String,required:!1,default:null},searchResults:{type:Object,required:!1,default:null}},data(){return{liveSearchTerm:"",salesChannels:[],salesChannelId:this.currentSalesChannelId,liveSearchResults:null,searchInProgress:!1,showExampleModal:!1}},computed:{salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},isSearchEnable(){return this.salesChannelId!==null},searchColumns(){return[{property:"name",label:this.$tc("sw-settings-search.liveSearchTab.labelName"),rawData:!0},{property:"score",label:this.$tc("sw-settings-search.liveSearchTab.labelScore"),rawData:!0}]},products(){return this.liveSearchResults&&this.liveSearchResults.elements}},created(){this.createdComponent()},methods:{createdComponent(){this.fetchSalesChannels(),this.liveSearchTerm=this.searchTerms,this.liveSearchResults=this.searchResults},searchOnStorefront(){this.liveSearchTerm.length&&(this.searchInProgress=!0,this.liveSearchService.search({salesChannelId:this.salesChannelId,search:this.liveSearchTerm},{},{},{"sw-language-id":Cicada.Context.api.languageId}).then(e=>{this.liveSearchResults=e.data,this.searchInProgress=!1,this.$emit("live-search-results-change",{searchTerms:this.liveSearchTerm,searchResults:this.liveSearchResults})}).catch(e=>{const s=e.response.status===500?this.$tc("sw-settings-search.notification.notSupportedLanguageError"):e.message;this.createNotificationError({message:s})}).finally(()=>{this.searchInProgress=!1}))},fetchSalesChannels(){this.salesChannelRepository.search(new l(1,25)).then(e=>{this.salesChannels=e})},changeSalesChannel(e){this.salesChannelId=e,this.$emit("sales-channel-change",e)},onShowExampleModal(){this.showExampleModal=!0},onCloseExampleModal(){this.showExampleModal=!1}}};export{c as default};
//# sourceMappingURL=index-oPoKrA3w.js.map
