const s=`{% block sw_sales_channel_detail_content_tabs %}{% endblock %} {% block sw_sales_channel_detail_language_switch %} <template #language-switch> <sw-language-switch disabled /> </template> {% endblock %} {% block sw_sales_channel_detail_content_language_info %} <sw-language-info :entity-description="placeholder(salesChannel, 'name', $tc('sw-sales-channel.detail.textHeadline'))" is-new-entity /> {% endblock %}`,n=Shopware.Utils,a=(e,l,t)=>{e.name.includes("sw.sales.channel.create")&&!e.params.id&&(e.params.id=n.createId()),t()},i={template:s,beforeRouteEnter:a,beforeRouteUpdate:a,computed:{allowSaving(){return this.acl.can("sales_channel.creator")}},methods:{createdComponent(){this.$route.params.typeId&&(Shopware.Store.get("context").isSystemDefaultLanguage||Shopware.Store.get("context").resetLanguageToDefault(),this.salesChannel=this.salesChannelRepository.create(),this.salesChannel.typeId=this.$route.params.typeId,this.salesChannel.active=!1,this.$super("createdComponent"))},saveFinish(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.sales.channel.detail",params:{id:this.salesChannel.id}})},onSave(){this.$super("onSave")}}};export{i as default};
