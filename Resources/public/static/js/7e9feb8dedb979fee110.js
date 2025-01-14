"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[45104],{645104:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});let{Criteria:s}=Cicada.Data;var o={template:'\n{% block sw_promotion_v2_sales_channel_selection %}\n<sw-multi-select\n    v-model:value="salesChannelIds"\n    v-bind="$attrs"\n    :options="salesChannels"\n    value-property="id"\n    label-property="name"\n>\n\n    \n    {% block sw_promotion_v2_sales_channel_selection_label %}\n    <template #selection-label-property="{ item }">\n        {{ item.name || item.translated.name }}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_sales_channel_selection_result_label %}\n    <template #result-label-property="{ item }">\n        {{ item.name || item.translated.name }}\n    </template>\n    {% endblock %}\n\n</sw-multi-select>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory"],props:{promotion:{type:Object,required:!1,default:null}},data(){return{salesChannels:[],sortBy:"name"}},computed:{salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},promotionSalesChannelRepository(){return this.promotion?this.repositoryFactory.create(this.promotion.salesChannels.entity,this.promotion.salesChannels.source):null},salesChannelIds:{get(){return this.promotion?this.promotion.salesChannels.map(e=>e.salesChannelId):[]},set(e){e=e||[];let{deleted:n,added:t}=this.getChangeset(e);if(this.promotion.isNew()){this.handleLocalMode(n,t);return}this.handleWithRepository(n,t)}},salesChannelCriteria(){let e=new s(1,500);return e.addSorting(s.sort(this.sortBy,this.sortDirection,this.naturalSorting)),e}},created(){this.createdComponent()},methods:{createdComponent(){this.salesChannelRepository.search(this.salesChannelCriteria).then(e=>{this.salesChannels=e})},getChangeset(e){let n=[],t=[];return e.forEach(e=>{this.promotion.salesChannels.find(n=>n.salesChannelId===e)||t.push(e)}),this.promotion.salesChannels.forEach(t=>{e.includes(t.salesChannelId)||n.push(t.salesChannelId)}),{deleted:n,added:t}},getAssociationBySalesChannelId(e){return this.promotion.salesChannels.find(n=>n.salesChannelId===e)},handleLocalMode(e,n){e.forEach(e=>{let n=this.getAssociationBySalesChannelId(e);this.promotion.salesChannels.remove(n.id)}),n.forEach(e=>{let n=this.promotionSalesChannelRepository.create(this.promotion.salesChannels.context);n.salesChannelId=e,n.promotionId=this.promotion.id,n.priority=1,this.promotion.salesChannels.add(n)})},handleWithRepository(e,n){e.forEach(e=>{let n=this.getAssociationBySalesChannelId(e);this.promotion.salesChannels.remove(n.id)}),n.forEach(e=>{let n=this.promotionSalesChannelRepository.create(this.promotion.salesChannels.context);n.salesChannelId=e,n.promotionId=this.promotion.id,n.priority=1,this.promotion.salesChannels.add(n)})}}}}}]);