const t=`{% block sw_settings_listing_default_sales_channel %} <div class="sw-settings-listing-default-sales-channel"> {% block sw_settings_listing_default_sales_channel_loader %} <sw-loader v-if="isLoading || isDefaultSalesChannelLoading" /> {% endblock %} <template v-else> {% block sw_settings_listing_default_sales_channel_description %} <p class="sw-settings-listing-default-sales-channel__description"> {{ $tc('sw-settings-listing.index.defaultSalesChannel.description') }} </p> {% endblock %} {% block sw_settings_listing_default_sales_channel_select %} <sw-entity-multi-id-select v-model:value="configData[null]['core.defaultSalesChannel.salesChannel']" :repository="salesChannelRepository" :label="$tc('sw-settings.system-config.labelSalesChannelSelect')" :placeholder="$tc('sw-product.visibility.placeholderVisibility')" @update:value="updateSalesChannel" /> {% endblock %} {% block sw_settings_listing_default_sales_channeld_setting %} <div class="sw-settings-listing-default-sales-channel__options-container"> {% block sw_settings_listing_default_sales_channel_setting_active %} <sw-switch-field v-model:value="configData[null]['core.defaultSalesChannel.active']" class="sw-settings-listing-default-sales-channel__active-switch" :label="$tc('sw-product.settingsForm.labelActive')" /> {% endblock %} {% block sw_settings_listing_default_sales_channel_setting_visibility %} <a v-if="salesChannel.length > 0" class="sw-settings-listing-default-sales-channel__quick-link" role="button" tabindex="0" @click="displayAdvancedVisibility" @keydown.enter="displayAdvancedVisibility" > {{ $tc('sw-settings-listing.index.defaultSalesChannel.linkAdvancedVisibility') }} <sw-icon class="sw-settings-listing-default-sales-channel__link-icon" name="regular-long-arrow-right" small /> </a> {% endblock %} </div> {% endblock %} {% block sw_settings_listing_default_sales_channel_select_visibiliy_modal %} <sw-modal v-if="displayVisibilityDetail" variant="large" class="sw-settings-listing-default-sales-channel__visibility-modal" :title="$tc('sw-product.visibility.textHeadline')" @modal-close="closeAdvancedVisibility" > <p>{{ $tc('sw-product.visibility.visibilityModalDescription') }}</p> <sw-settings-listing-visibility-detail ref="visibilityConfig" :config="visibilityConfig" /> <template #modal-footer> <sw-button variant="primary" size="small" @click="closeAdvancedVisibility" > {{ $tc('global.default.apply') }} </sw-button> </template> </sw-modal> {% endblock %} </template> </div> {% endblock %}`,{EntityCollection:a}=Cicada.Data,{isEmpty:n}=Cicada.Utils.types,{cloneDeep:o}=Cicada.Utils.object,c={template:t,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","systemConfigApiService"],props:{isLoading:{type:Boolean,required:!1,default(){return!1}}},data(){return{isDefaultSalesChannelLoading:!1,displayVisibilityDetail:!1,configData:{null:{"core.defaultSalesChannel.active":!0,"core.defaultSalesChannel.salesChannel":[],"core.defaultSalesChannel.visibility":{}}},visibilityConfig:[]}},computed:{salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},salesChannel:{get(){var i,s;return(s=(i=this.configData)==null?void 0:i.null)==null?void 0:s["core.defaultSalesChannel.salesChannel"]},set(i){this.configData.null["core.defaultSalesChannel.salesChannel"]=i}}},watch:{salesChannel:{handler(){if(!this.salesChannel.length){this.visibilityConfig=[];return}const i=this.salesChannel.map(e=>e.id);this.visibilityConfig=this.visibilityConfig.filter(e=>i.includes(e.id));const s=new Map;this.visibilityConfig.forEach(e=>s.set(e.id,{...e})),this.salesChannel.forEach(e=>{var l;s.set(e,{id:e,visibility:((l=this.configData.null)==null?void 0:l["core.defaultSalesChannel.visibility"][e])||30})}),this.visibilityConfig=[...s.values()]},deep:!0}},created(){this.createdComponent()},methods:{createdComponent(){this.fetchSalesChannelsSystemConfig()},fetchSalesChannelsSystemConfig(){this.isDefaultSalesChannelLoading=!0;const i=new a(this.salesChannelRepository.route,this.salesChannelRepository.entityName,Cicada.Context.api);this.systemConfigApiService.getValues("core.defaultSalesChannel").then(s=>{if(this.isDefaultSalesChannelLoading=!1,!n(s)){this.configData.null=s,this.salesChannel.forEach(e=>i.add(e)),this.salesChannel=i;return}this.salesChannel=i})},displayAdvancedVisibility(){this.displayVisibilityDetail=!0},closeAdvancedVisibility(){this.displayVisibilityDetail=!1,this.visibilityConfig=o(this.$refs.visibilityConfig.items),this.configData.null["core.defaultSalesChannel.visibility"]={},this.visibilityConfig.forEach(i=>{this.configData.null["core.defaultSalesChannel.visibility"][i.id]=i.visibility})},saveSalesChannelVisibilityConfig(){return this.systemConfigApiService.batchSave(this.configData)},updateSalesChannel(i){this.salesChannel=i}}};export{c as default};
//# sourceMappingURL=index-DCPh_Ayx.js.map
