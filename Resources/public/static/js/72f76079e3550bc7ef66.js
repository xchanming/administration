(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[32880],{333787:function(){},332880:function(i,n,e){"use strict";e.r(n),e.d(n,{default:function(){return a}}),e(280190);let{EntityCollection:s}=Cicada.Data,{isEmpty:l}=Cicada.Utils.types,{cloneDeep:t}=Cicada.Utils.object;var a={template:'\n{% block sw_settings_listing_default_sales_channel %}\n<div class="sw-settings-listing-default-sales-channel">\n    \n    {% block sw_settings_listing_default_sales_channel_loader %}\n    <sw-loader v-if="isLoading || isDefaultSalesChannelLoading" />\n    {% endblock %}\n\n    <template v-else>\n        \n        {% block sw_settings_listing_default_sales_channel_description %}\n        <p class="sw-settings-listing-default-sales-channel__description">\n            {{ $tc(\'sw-settings-listing.index.defaultSalesChannel.description\') }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_default_sales_channel_select %}\n        <sw-entity-multi-id-select\n            v-model:value="configData[null][\'core.defaultSalesChannel.salesChannel\']"\n            :repository="salesChannelRepository"\n            :label="$tc(\'sw-settings.system-config.labelSalesChannelSelect\')"\n            :placeholder="$tc(\'sw-product.visibility.placeholderVisibility\')"\n            @update:value="updateSalesChannel"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_default_sales_channeld_setting %}\n        <div class="sw-settings-listing-default-sales-channel__options-container">\n            \n            {% block sw_settings_listing_default_sales_channel_setting_active %}\n            <sw-switch-field\n                v-model:value="configData[null][\'core.defaultSalesChannel.active\']"\n                class="sw-settings-listing-default-sales-channel__active-switch"\n                :label="$tc(\'sw-product.settingsForm.labelActive\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_settings_listing_default_sales_channel_setting_visibility %}\n            <a\n                v-if="salesChannel.length > 0"\n                class="sw-settings-listing-default-sales-channel__quick-link"\n                role="button"\n                tabindex="0"\n                @click="displayAdvancedVisibility"\n                @keydown.enter="displayAdvancedVisibility"\n            >\n                {{ $tc(\'sw-settings-listing.index.defaultSalesChannel.linkAdvancedVisibility\') }}\n                <sw-icon\n                    class="sw-settings-listing-default-sales-channel__link-icon"\n                    name="regular-long-arrow-right"\n                    small\n                />\n            </a>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_default_sales_channel_select_visibiliy_modal %}\n        <sw-modal\n            v-if="displayVisibilityDetail"\n            variant="large"\n            class="sw-settings-listing-default-sales-channel__visibility-modal"\n            :title="$tc(\'sw-product.visibility.textHeadline\')"\n            @modal-close="closeAdvancedVisibility"\n        >\n            <p>{{ $tc(\'sw-product.visibility.visibilityModalDescription\') }}</p>\n\n            <sw-settings-listing-visibility-detail\n                ref="visibilityConfig"\n                :config="visibilityConfig"\n            />\n\n            <template #modal-footer>\n                <sw-button\n                    variant="primary"\n                    size="small"\n                    @click="closeAdvancedVisibility"\n                >\n                    {{ $tc(\'global.default.apply\') }}\n                </sw-button>\n            </template>\n        </sw-modal>\n        {% endblock %}\n    </template>\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","systemConfigApiService"],props:{isLoading:{type:Boolean,required:!1,default(){return!1}}},data(){return{isDefaultSalesChannelLoading:!1,displayVisibilityDetail:!1,configData:{null:{"core.defaultSalesChannel.active":!0,"core.defaultSalesChannel.salesChannel":[],"core.defaultSalesChannel.visibility":{}}},visibilityConfig:[]}},computed:{salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},salesChannel:{get(){return this.configData?.null?.["core.defaultSalesChannel.salesChannel"]},set(i){this.configData.null["core.defaultSalesChannel.salesChannel"]=i}}},watch:{salesChannel:{handler(){if(!this.salesChannel.length){this.visibilityConfig=[];return}let i=this.salesChannel.map(i=>i.id);this.visibilityConfig=this.visibilityConfig.filter(n=>i.includes(n.id));let n=new Map;this.visibilityConfig.forEach(i=>n.set(i.id,{...i})),this.salesChannel.forEach(i=>{n.set(i,{id:i,visibility:this.configData.null?.["core.defaultSalesChannel.visibility"][i]||30})}),this.visibilityConfig=[...n.values()]},deep:!0}},created(){this.createdComponent()},methods:{createdComponent(){this.fetchSalesChannelsSystemConfig()},fetchSalesChannelsSystemConfig(){this.isDefaultSalesChannelLoading=!0;let i=new s(this.salesChannelRepository.route,this.salesChannelRepository.entityName,Cicada.Context.api);this.systemConfigApiService.getValues("core.defaultSalesChannel").then(n=>{if(this.isDefaultSalesChannelLoading=!1,!l(n)){this.configData.null=n,this.salesChannel.forEach(n=>i.add(n)),this.salesChannel=i;return}this.salesChannel=i})},displayAdvancedVisibility(){this.displayVisibilityDetail=!0},closeAdvancedVisibility(){this.displayVisibilityDetail=!1,this.visibilityConfig=t(this.$refs.visibilityConfig.items),this.configData.null["core.defaultSalesChannel.visibility"]={},this.visibilityConfig.forEach(i=>{this.configData.null["core.defaultSalesChannel.visibility"][i.id]=i.visibility})},saveSalesChannelVisibilityConfig(){return this.systemConfigApiService.batchSave(this.configData)},updateSalesChannel(i){this.salesChannel=i}}}},280190:function(i,n,e){var s=e(333787);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[i.id,s,""]]),s.locals&&(i.exports=s.locals),e(745346).Z("75b319f6",s,!0,{})}}]);