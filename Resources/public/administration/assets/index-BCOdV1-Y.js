const l=`{% block sw_cms_el_buy_box %} <div class="sw-cms-el-buy-box" :style="alignStyle" > <div v-if="(product && !isProductPageType) || currentDemoEntity" class="sw-cms-el-buy-box__content" > {% block sw_cms_el_buy_box_product_info %} {% block sw_cms_el_buy_box_product_price %} <div class="sw-cms-el-buy-box__price"> {{ currencyFilter(product.price[0].gross, 'EUR') }} </div> {% endblock %} {% block sw_cms_el_buy_box_product_tax_info %} <div class="sw-cms-el-buy-box__tax-info"> {{ $tc('sw-cms.elements.buyBox.component.label.taxInfo') }} </div> {% endblock %} {% block sw_cms_el_buy_box_product_shipping_info %} <ul class="sw-cms-el-buy-box__shipping-info"> <li v-if="product.shippingFree"> {{ $tc('sw-cms.elements.buyBox.component.label.deliveryShippingFree') }} </li> <li v-if="product.deliveryTime"> {{ $tc('sw-cms.elements.buyBox.component.label.deliveryTime', 0, {name: placeholder(product, 'deliveryTime.name', product.deliveryTime.name)}) }} </li> </ul> {% endblock %} {% block sw_cms_el_buy_box_product_variants %} <template v-if="product.parentId || product.childCount > 0"> <p class="sw-cms-el-buy-box__variant-title"> {{ $tc('sw-cms.elements.buyBox.component.label.variants') }} </p> <div class="sw-cms-el-buy-box__variants"> <div class="sw-cms-el-buy-box__variant"></div> <div class="sw-cms-el-buy-box__variant"></div> <div class="sw-cms-el-buy-box__variant"></div> </div> </template> {% endblock %} {% block sw_cms_el_buy_box_form %} <div class="sw-cms-el-buy-box__form"> {% block sw_cms_element_buy_box_form_select_quantity %} <sw-block-field class="sw-cms-el-buy-box__quantity"> <template #sw-field-input> <select> <option :value="product.minPurchase" selected > {{ product.minPurchase }} </option> </select> <div class="sw-cms-el-buy-box__icon"> <sw-icon name="regular-chevron-up-xxs" decorative /> <sw-icon name="regular-chevron-down-xxs" decorative /> </div> </template> </sw-block-field> {% endblock %} {% block sw_cms_element_buy_box_form_action %} <div class="sw-cms-el-buy-box__actions"> <a href="#" class="sw-cms-el-buy-box__buy-action" > {{ $tc('sw-cms.elements.buyBox.component.label.actionBuy') }} </a> </div> {% endblock %} </div> {% endblock %} {% block sw_cms_element_buy_box_product_number %} <div class="sw-cms-el-buy-box__product-number"> <span class="sw-cms-el-buy-box__product-number-title"> {{ $tc('sw-cms.elements.buyBox.component.label.productNumber') }} </span> <span>{{ product.productNumber }}</span> </div> {% endblock %} {% endblock %} </div> <div v-else class="sw-cms-el-buy-box__skeleton" > {% block sw_cms_element_buybox_skeleton %} {% block sw_cms_element_buybox_skeleton_info %} <div class="sw-cms-el-buy-box__placeholder"></div> <div class="sw-cms-el-buy-box__placeholder"></div> <div class="sw-cms-el-buy-box__placeholder"></div> <div class="sw-cms-el-buy-box__placeholder"></div> {% endblock %} {% block sw_cms_element_buybox_skeleton_form %} <div class="sw-cms-el-buy-box__form"> {% block sw_cms_element_buybox_skeleton_quantity %} <sw-block-field class="sw-cms-el-buy-box__quantity"> <template #sw-field-input> <select> <option value="1" selected > 1 </option> </select> <div class="sw-cms-el-buy-box__icon"> <sw-icon name="regular-chevron-up-xxs" small decorative /> <sw-icon name="regular-chevron-down-xxs" small decorative /> </div> </template> </sw-block-field> {% endblock %} {% block sw_cms_element_buy_box_skeleton_action %} <div class="sw-cms-el-buy-box__actions"> <a href="#" class="sw-cms-el-buy-box__buy-action" > {{ $tc('sw-cms.elements.buyBox.component.label.actionBuy') }} </a> </div> {% endblock %} </div> {% endblock %} {% block sw_cms_element_buybox_skeleton_product_number %} <div class="sw-cms-el-buy-box__placeholder"></div> {% endblock %} {% endblock %} </div> </div> {% endblock %}`,{Mixin:c}=Cicada,o={template:l,compatConfig:Cicada.compatConfig,mixins:[c.getByName("cms-element"),c.getByName("placeholder")],computed:{product(){var e,s,t;return this.currentDemoEntity?this.currentDemoEntity:(e=this.element.data)!=null&&e.product?((t=(s=this.element)==null?void 0:s.data)==null?void 0:t.product)??null:{name:"Lorem Ipsum dolor",productNumber:"XXXXXX",minPurchase:1,deliveryTime:{name:"1-3 days"},price:[{gross:0}]}},pageType(){var e,s;return((s=(e=this.cmsPageState)==null?void 0:e.currentPage)==null?void 0:s.type)??""},isProductPageType(){return this.pageType==="product_detail"},alignStyle(){var e,s;return(s=(e=this.element.config)==null?void 0:e.alignment)!=null&&s.value?`justify-content: ${this.element.config.alignment.value};`:null},currentDemoEntity(){return this.cmsPageState.currentMappingEntity==="product"?this.cmsPageState.currentDemoEntity:null},currencyFilter(){return Cicada.Filter.getByName("currency")}},watch:{pageType(e){this.isCompatEnabled("INSTANCE_SET")?this.$set(this.element,"locked",e==="product_detail"):this.element.locked=e==="product_detail"}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("buy-box"),this.initElementData("buy-box"),this.isCompatEnabled("INSTANCE_SET")?this.$set(this.element,"locked",this.isProductPageType):this.element.locked=this.isProductPageType}}};export{o as default};
//# sourceMappingURL=index-BCOdV1-Y.js.map
