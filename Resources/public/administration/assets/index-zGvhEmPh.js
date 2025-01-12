const t=`{% block sw_property_detail_language_switch %} <template #language-switch> <sw-language-switch disabled /> </template> {% endblock %} {% block sw_property_detail_content_language_info %} <sw-language-info :entity-description="placeholder(propertyGroup, 'name', $tc('sw-property.detail.textHeadline'))" is-new-entity /> {% endblock %} {% block sw_property_detail_content_option_list %} <sw-card class="sw-property-create__option-list-empty-state" position-identifier="sw-property-create-empty-state" :title="$tc('sw-property.detail.cardTitle')" > <sw-empty-state title="" :subline="$tc('sw-property.detail.optionEmptyStateSubline')" :absolute="false" > <template #icon> <img :src="assetFilter('/administration/static/img/empty-states/products-empty-state.svg')" alt="" > </template> </sw-empty-state> </sw-card> {% endblock %}`,e={template:t,data(){return{newId:null}},computed:{assetFilter(){return Cicada.Filter.getByName("asset")}},methods:{createdComponent(){Cicada.State.getters["context/isSystemDefaultLanguage"]||(Cicada.Context.api.languageId=Cicada.Context.api.systemLanguageId),this.propertyGroup=this.propertyRepository.create(),this.propertyGroup.sortingType="alphanumeric",this.propertyGroup.displayType="text",this.propertyGroup.position=1,this.propertyGroup.filterable=!0,this.propertyGroup.visibleOnProductDetailPage=!0,this.newId=this.propertyGroup.id,this.isLoading=!1},saveFinish(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.property.detail",params:{id:this.newId}})},onSave(){this.$super("onSave")}}};export{e as default};
//# sourceMappingURL=index-zGvhEmPh.js.map
