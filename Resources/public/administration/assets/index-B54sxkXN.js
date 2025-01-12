const i=`{% block sw_product_detail_layout %} <div v-if="isLoading"> <sw-skeleton variant="detail-bold" /> <sw-skeleton /> </div> <div v-else class="sw-product-detail-layout" > {% block sw_product_detail_layout_assignment %} <sw-card position-identifier="sw-product-detail-layout-assignment" :title="$tc('sw-product.layout.title')" :subtitle="$tc('sw-product.layout.subtitle')" > {% block sw_product_detail_layout_content %} <sw-product-layout-assignment :cms-page="currentPage" @modal-layout-open="onOpenLayoutModal" @button-edit-click="onOpenInPageBuilder" @button-delete-click="onResetLayout" /> {% endblock %} {% block sw_product_detail_layout_modal %} <sw-cms-layout-modal v-if="showLayoutModal" :headline="$tc('sw-product.layoutAssignment.subtitle')" :pre-selection="currentPage" :cms-page-types="['product_detail']" @modal-layout-select="onSelectLayout" @modal-close="onCloseLayoutModal" /> {% endblock %} </sw-card> {% endblock %} {% block sw_product_detail_layout_cms_config %} <template v-if="acl.can('product.editor') && currentPage"> {% block sw_product_detail_layout_cms_config_form %} <sw-cms-page-form v-if="showCmsForm" :page="currentPage" :element-update="elementUpdate" /> <sw-card v-else class="sw-product-detail-layout__no-config" position-identifier="sw-product-detail-layout-no-config" :is-loading="isConfigLoading" > <p>{{ $tc('sw-product.layout.textNoConfig') }}</p> </sw-card> {% endblock %} {% block sw_product_detail_layout_cms_content_info %} <sw-card hero position-identifier="sw-product-detail-layout-cms-info" > <p class="sw-product-detail-layout__content-info"> {{ $tc('sw-product.layout.textContentInfo') }} </p> </sw-card> {% endblock %} </template> {% endblock %} </div> {% endblock %}`,{Component:n,State:c,Context:r,Utils:d}=Cicada,{Criteria:s}=Cicada.Data,{mapState:l,mapGetters:u}=n.getComponentHelper(),{cloneDeep:p,merge:g,get:m}=d.object,h={template:i,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","cmsService","feature","acl"],data(){return{showLayoutModal:!1,isConfigLoading:!1}},computed:{cmsPageRepository(){return this.repositoryFactory.create("cms_page")},cmsPageId(){return m(this.product,"cmsPageId",null)},showCmsForm(){return(!this.isLoading||!this.isConfigLoading)&&!this.currentPage.locked},...l("swProductDetail",["product"]),...u("swProductDetail",["isLoading"]),cmsPageCriteria(){const t=new s(1,25);return t.addAssociation("previewMedia"),t.addAssociation("sections"),t.getAssociation("sections").addSorting(s.sort("position")),t.addAssociation("sections.blocks"),t.getAssociation("sections.blocks").addSorting(s.sort("position","ASC")).addAssociation("slots"),t},languageId(){return Cicada.Context.api.languageId},currentPage(){return Cicada.Store.get("cmsPage").currentPage},cmsPageState(){return Cicada.Store.get("cmsPage")}},watch:{cmsPageId(){this.cmsPageState.resetCmsPageState(),this.handleGetCmsPage()},product:{deep:!0,handler(t){t&&this.updateCmsPageDataMapping()}},languageId(){this.cmsPageState.resetCmsPageState(),this.handleGetCmsPage()}},created(){this.createdComponent()},methods:{createdComponent(){var e;(((e=this.currentPage)==null?void 0:e.sections)??[]).length||this.handleGetCmsPage()},onOpenLayoutModal(){this.acl.can("product.editor")&&(this.showLayoutModal=!0)},onCloseLayoutModal(){this.showLayoutModal=!1},onOpenInPageBuilder(){this.currentPage?this.$router.push({name:"sw.cms.detail",params:{id:this.currentPage.id}}):this.$router.push({name:"sw.cms.create"})},onSelectLayout(t){this.product&&(this.product.cmsPageId=t,this.product.slotConfig=null,c.commit("swProductDetail/setProduct",this.product))},handleGetCmsPage(){this.cmsPageId&&(this.isConfigLoading=!0,this.cmsPageRepository.get(this.cmsPageId,r.api,this.cmsPageCriteria).then(t=>{this.product.slotConfig&&t&&t.sections.forEach(e=>{e.blocks.forEach(a=>{a.slots.forEach(o=>{this.product.slotConfig[o.id]&&(o.config=o.config||{},g(o.config,p(this.product.slotConfig[o.id])))})})}),this.cmsPageState.setCurrentPage(t),this.updateCmsPageDataMapping(),this.isConfigLoading=!1}))},updateCmsPageDataMapping(){this.cmsPageState.setCurrentMappingEntity("product"),this.cmsPageState.setCurrentMappingTypes(this.cmsService.getEntityMappingTypes("product")),this.cmsPageState.setCurrentDemoEntity(this.product)},onResetLayout(){this.onSelectLayout(null)},elementUpdate(t){var a;const e=(a=this.product.slotConfig[t.id])==null?void 0:a.content;e&&e.value&&(e.value=t.config.content.value)}}};export{h as default};
//# sourceMappingURL=index-B54sxkXN.js.map
