const r=`{% block sw_category_entry_point_card %} <sw-card class="sw-category-entry-point-card" position-identifier="sw-category-entry-point" :title="$tc('sw-category.base.entry-point-card.cardTitle')" > {% block sw_category_entry_point_card_selection %} <sw-single-select v-model:value="selectedEntryPoint" class="sw-category-entry-point-card__entry-point-selection" :options="entryPoints" :label="$tc('sw-category.base.entry-point-card.labelEntryPoint')" :placeholder="$tc('sw-category.base.entry-point-card.placeholderEntryPoint')" :help-text="helpText" :disabled="hasExistingNavigation || !acl.can('category.editor')" show-clearable-button @update:value="onEntryPointChange" /> {% endblock %} {% block sw_category_entry_point_card_navigation_headline %} <p v-if="hasExistingNavigation"> {{ $tc('sw-category.base.entry-point-card.existingNavigationDescription') }} </p> {% endblock %} {% block sw_category_entry_point_card_navigation_list %} <div v-if="hasExistingNavigation" class="sw-category-entry-point-card__navigation-list" > {% block sw_category_detail_entry_point_navigation_list_link %} <router-link v-for="salesChannel in initialNavigationSalesChannels" :key="salesChannel.id" :to="{ name: 'sw.sales.channel.detail.base', params: { id: salesChannel.id }}" class="sw-category-entry-point-card__navigation-entry" > {{ salesChannel.translated.name }} </router-link> {% endblock %} </div> {% endblock %} {% block sw_category_entry_point_card_sales_channel_selection %} <sw-category-sales-channel-multi-select v-if="associatedCollection" class="sw-category-entry-point-card__sales-channel-selection" :entity-collection="associatedCollection" :label="salesChannelSelectionLabel" :criteria="salesChannelCriteria" :placeholder="$tc('sw-category.base.entry-point-card.placeholderSalesChannels')" :disabled="!selectedEntryPoint || !acl.can('category.editor')" @update:entity-collection="onSalesChannelChange" /> {% endblock %} {% block sw_category_entry_point_card_button_configure_home %} <sw-button class="sw-category-entry-point-card__button-configure-home" variant="ghost" size="small" :disabled="selectedEntryPoint !== 'navigationSalesChannels' || category.navigationSalesChannels.length === 0" @click="openConfigureHomeModal" > {{ $tc('sw-category.base.entry-point-card.buttonConfigureHome') }} </sw-button> {% endblock %} {% block sw_category_entry_point_card_configure_home_modal %} <sw-category-entry-point-modal v-if="configureHomeModalVisible" :sales-channel-collection="category.navigationSalesChannels" @modal-close="closeConfigureHomeModal" /> {% endblock %} </sw-card> {% endblock %}`,{Context:o}=Cicada,{Criteria:i,EntityCollection:s}=Cicada.Data,c={template:r,compatConfig:Cicada.compatConfig,inject:["acl"],props:{category:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},data(){return{selectedEntryPoint:this.getInitialEntryPointFromCategory(),initialNavigationSalesChannels:this.category.navigationSalesChannels,addedNavigationSalesChannels:new s("/sales_channel","sales_channel",o.api),configureHomeModalVisible:!1}},computed:{entryPoints(){return[{value:"navigationSalesChannels",label:this.$tc("sw-category.base.entry-point-card.types.labelMainNavigation")},{value:"footerSalesChannels",label:this.$tc("sw-category.base.entry-point-card.types.labelFooterNavigation")},{value:"serviceSalesChannels",label:this.$tc("sw-category.base.entry-point-card.types.labelServiceNavigation")}]},associatedCollection(){return this.hasExistingNavigation?this.addedNavigationSalesChannels:this.category[this.selectedEntryPoint]},helpText(){switch(this.selectedEntryPoint){case"navigationSalesChannels":return this.$tc("sw-category.base.entry-point-card.types.helpTextMainNavigation");case"footerSalesChannels":return this.$tc("sw-category.base.entry-point-card.types.helpTextFooterNavigation");case"serviceSalesChannels":return this.$tc("sw-category.base.entry-point-card.types.helpTextServiceNavigation");default:return""}},hasExistingNavigation(){return this.initialNavigationSalesChannels.length>0},salesChannelSelectionLabel(){return this.hasExistingNavigation?this.$tc("sw-category.base.entry-point-card.labelSalesChannelsAdd"):this.$tc("global.entities.sales_channel",2)},salesChannelCriteria(){const e=new i(1,25);return this.hasExistingNavigation&&e.addFilter(i.not("or",[i.equalsAny("id",this.initialNavigationSalesChannels.getIds())])),e}},watch:{category(e){this.initialNavigationSalesChannels=e.navigationSalesChannels,this.addedNavigationSalesChannels=new s("/sales_channel","sales_channel",o.api),this.selectedEntryPoint=this.getInitialEntryPointFromCategory()}},methods:{getInitialEntryPointFromCategory(){return this.category.navigationSalesChannels&&this.category.navigationSalesChannels.length>0?"navigationSalesChannels":this.category.footerSalesChannels&&this.category.footerSalesChannels.length>0?"footerSalesChannels":this.category.serviceSalesChannels&&this.category.serviceSalesChannels.length>0?"serviceSalesChannels":""},onEntryPointChange(){this.resetSalesChannelCollections()},onSalesChannelChange(e){const n=this.selectedEntryPoint;if(this.hasExistingNavigation){const t=s.fromCollection(this.initialNavigationSalesChannels);e.forEach(a=>{t.add(a)}),this.addedNavigationSalesChannels=e,e=t}e.source=this.category[n].source,this.resetSalesChannelCollections(),this.category[n]=e},resetSalesChannelCollections(){const e=this.selectedEntryPoint;this.entryPoints.reduce((t,{value:a})=>(a===e||t.push(this.category[a]),t),[]).forEach(t=>{t.getIds().forEach(l=>{t.remove(l)})})},openConfigureHomeModal(){this.configureHomeModalVisible=!0},closeConfigureHomeModal(){this.configureHomeModalVisible=!1}}};export{c as default};
//# sourceMappingURL=index-B6YvlQHc.js.map
