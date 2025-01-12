const h=`{% block sw_sales_channel_products_assignment_modal %} <sw-modal class="sw-sales-channel-products-assignment-modal" :title="$tc('sw-sales-channel.detail.productAssignmentModal.title')" @modal-close="onCloseModal" > <template #default> {% block sw_sales_channel_products_assignment_modal_tabs %} <sw-tabs class="sw-sales-channel-products-assignment-modal__tabs" position-identifier="sw-sales-channel-products-assignment-modal" default-item="singleProducts" > <template #default="{ active }"> {% block sw_sales_channel_products_assignment_modal_tabs_single_products %} <sw-tabs-item name="singleProducts" :title="$tc('sw-sales-channel.detail.productAssignmentModal.singleProducts')" :active-tab="active" > {{ $tc('sw-sales-channel.detail.productAssignmentModal.singleProducts') }} </sw-tabs-item> {% endblock %} {% block sw_sales_channel_products_assignment_modal_tabs_categories %} <sw-tabs-item name="categories" :title="$tc('sw-sales-channel.detail.productAssignmentModal.categories.title')" :active-tab="active" > {{ $tc('sw-sales-channel.detail.productAssignmentModal.categories.title') }} </sw-tabs-item> {% endblock %} {% block sw_sales_channel_products_assignment_modal_tab_dynamic_product_groups %} <sw-tabs-item name="dynamicProductGroups" :title="$tc('sw-sales-channel.detail.productAssignmentModal.dynamicProductGroups.title')" :active-tab="active" > {{ $tc('sw-sales-channel.detail.productAssignmentModal.dynamicProductGroups.title') }} </sw-tabs-item> {% endblock %} </template> <template #content="{ active }"> <div class="sw-sales-channel-products-assignment-modal__content" :height="tabContentHeight" > {% block sw_sales_channel_products_assignment_modal_tab_content_single_products %} <sw-sales-channel-products-assignment-single-products ref="product" v-hide="active === 'singleProducts'" :sales-channel="salesChannel" :container-style="productContainerStyle" @selection-change="onChangeSelection" /> {% endblock %} {% block sw_sales_channel_products_assignment_modal_tab_content_categories %} <sw-sales-channel-product-assignment-categories ref="category" v-hide="active === 'categories'" :sales-channel="salesChannel" :container-style="categoryContainerStyle" @selection-change="onChangeSelection" @product-loading="setProductLoading" /> {% endblock %} {% block sw_sales_channel_products_assignment_modal_tab_content_dynamic_product_groups %} <sw-sales-channel-products-assignment-dynamic-product-groups ref="productGroup" v-hide="active === 'dynamicProductGroups'" :sales-channel="salesChannel" :container-style="productGroupContainerStyle" @selection-change="onChangeSelection" @product-loading="setProductLoading" /> {% endblock %} </div> </template> </sw-tabs> {% endblock %} </template> <template #modal-footer> {% block sw_sales_channel_products_assignment_modal_footer_cancel %} <sw-button class="sw-sales-channel-products-assignment-modal__close-button" size="small" @click="onCloseModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_sales_channel_products_assignment_modal_footer_submit %} <sw-button size="small" variant="primary" :is-loading="isAssignProductLoading || isProductLoading" @click="onAddProducts" > {{ $tc('sw-sales-channel.detail.products.buttonAddProducts', productCount, { productCount: productCount }) }} </sw-button> {% endblock %} </template> </sw-modal> {% endblock %}`,{uniqBy:m}=Cicada.Utils.array,g=(t,e)=>{t.style.visibility=e.value?"visible":"hidden",t.style.position=e.value?"static":"absolute",t.style.top=e.value?"auto":"0",t.style.left=e.value?"auto":"0",t.style.bottom=e.value?"auto":"0",t.style.right=e.value?"auto":"0",t.style.transform=e.value?"translateX(0)":"translateX(100%)"},_={template:h,compatConfig:Cicada.compatConfig,emits:["modal-close","products-add"],directives:{hide:{beforeMount:g,updated:g}},props:{salesChannel:{type:Object,required:!0},isAssignProductLoading:{type:Boolean,required:!0}},data(){return{singleProducts:[],categoryProducts:[],groupProducts:[],isProductLoading:!1,tabContentHeight:"600px",productContainerStyle:{display:"grid",placeItems:"stretch"},categoryContainerStyle:{display:"grid",placeItems:"stretch"},productGroupContainerStyle:{display:"grid",placeItems:"stretch"}}},computed:{productCount(){return this.products.length},products(){return m([...this.singleProducts,...this.categoryProducts,...this.groupProducts],"id")}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.getProductContainerStyle(),this.getCategoryContainerStyle(),this.getProductGroupContainerStyle()},getProductContainerStyle(){var e,s,a,o,n;const t=`${((n=(o=(a=(s=(e=this.$refs)==null?void 0:e.product)==null?void 0:s.$refs)==null?void 0:a.cardSectionSecondary)==null?void 0:o.$el)==null?void 0:n.offsetHeight)??0}px`;this.isCompatEnabled("INSTANCE_SET")?this.$set(this.productContainerStyle,"grid-template-rows",`auto calc(${this.tabContentHeight} - ${t})`):this.productContainerStyle["grid-template-rows"]=`auto calc(${this.tabContentHeight} - ${t})`},getCategoryContainerStyle(){var a,o,n,c,l,i,r,d,u,p;const t="20px",e=`${((l=(c=(n=(o=(a=this.$refs)==null?void 0:a.category)==null?void 0:o.$refs)==null?void 0:n.alert)==null?void 0:c.$el)==null?void 0:l.offsetHeight)??0}px`,s=`${((p=(u=(d=(r=(i=this.$refs)==null?void 0:i.category)==null?void 0:r.$refs)==null?void 0:d.cardSectionSecondary)==null?void 0:u.$el)==null?void 0:p.offsetHeight)??0}px`;this.isCompatEnabled("INSTANCE_SET")?this.$set(this.categoryContainerStyle,"grid-template-rows",`auto calc(${this.tabContentHeight} - (${t} + ${e} + ${s}))`):this.productContainerStyle["grid-template-rows"]=`auto calc(${this.tabContentHeight} - (${t} + ${e} + ${s}))`},getProductGroupContainerStyle(){var a,o,n,c,l,i,r,d,u,p;const t="20px",e=`${((l=(c=(n=(o=(a=this.$refs)==null?void 0:a.productGroup)==null?void 0:o.$refs)==null?void 0:n.alert)==null?void 0:c.$el)==null?void 0:l.offsetHeight)??0}px`,s=`${((p=(u=(d=(r=(i=this.$refs)==null?void 0:i.productGroup)==null?void 0:r.$refs)==null?void 0:d.cardSectionSecondary)==null?void 0:u.$el)==null?void 0:p.offsetHeight)??0}px`;this.isCompatEnabled("INSTANCE_SET")?this.$set(this.productGroupContainerStyle,"grid-template-rows",`auto calc(${this.tabContentHeight} - (${t} + ${e} + ${s}))`):this.productContainerStyle["grid-template-rows"]=`auto calc(${this.tabContentHeight} - (${t} + ${e} + ${s}))`},onChangeSelection(t,e){this[e]=t},onCloseModal(){this.$emit("modal-close")},onAddProducts(){this.$emit("products-add",this.products)},setProductLoading(t){this.isProductLoading=t}}};export{_ as default};
//# sourceMappingURL=index-DjKCj45B.js.map
