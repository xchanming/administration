const r=`{% block sw_cms_element_product_box %} <div v-if="product" class="sw-cms-el-product-box" :class="\`box-\${element.config.boxLayout.value}\`" > {% block sw_cms_element_product_box_content %} <div class="sw-cms-el-product-box__content" :style="verticalAlignStyle" > {% block sw_cms_element_product_box_badges %} <div class="sw-cms-el-product-box__badges"> <div v-if="product.hasPseudoPrice" class="sw-cms-el-product-box__badge-discount" > &#37; </div> <div v-if="product.markAsTopseller" class="sw-cms-el-product-box__badge-topseller" > {{ $tc('sw-cms.elements.productBox.component.label.badgeTopseller') }} </div> <div v-if="product.newProduct" class="sw-cms-el-product-box__badge-new" > {{ $tc('sw-cms.elements.productBox.component.label.badgeNew') }} </div> </div> {% endblock %} {% block sw_cms_element_product_box_media %} <div class="sw-cms-el-product-box__media"> <a href="#" :title="placeholder(product, 'name')" class="sw-cms-el-product-box__image-link" > <img class="sw-cms-el-product-box__image" :class="displayModeClass" :src="mediaUrl" :alt="altTag" > </a> </div> {% endblock %} {% block sw_cms_element_product_box_info_skeleton %} <div v-if="displaySkeleton" class="sw-cms-el-product-box__info" > {% block sw_cms_element_product_box_name_skeleton %} <div class="sw-cms-el-product-box__skeleton-name"></div> {% endblock %} {% block sw_cms_element_product_box_description_skeleton %} <div class="sw-cms-el-product-box__skeleton-description"></div> <div class="sw-cms-el-product-box__skeleton-description"></div> <div class="sw-cms-el-product-box__skeleton-description"></div> {% endblock %} {% block sw_cms_element_product_box_price_skeleton %} <div class="sw-cms-el-product-box__skeleton-price"></div> {% endblock %} {% block sw_cms_element_product_box_actions_skeleton %} <div class="sw-cms-el-product-box__actions"> <a href="#" class="sw-cms-el-product-box__buy-action" > {{ $tc('sw-cms.elements.productBox.component.label.actionBuy') }} </a> </div> {% endblock %} </div> {% endblock %} {% block sw_cms_element_product_box_info %} <div v-else class="sw-cms-el-product-box__info" > {% block sw_cms_element_product_box_name %} <a href="#" class="sw-cms-el-product-box__name" :title="placeholder(product, 'name')" > {{ placeholder(product, 'name', product.name) }} </a> {% endblock %} {% block sw_cms_element_product_box_description %} <div v-if="element.config.boxLayout.value === 'standard'" class="sw-cms-el-product-box__description" > {{ truncateFilter(placeholder(product, 'description', product.description), 200, true, '...') }} </div> {% endblock %} {% block sw_cms_element_product_box_price_info %} <div class="sw-cms-el-product-box__price-info"> {% block sw_cms_element_product_box_price_unit %} <div v-if="product.purchaseUnit && product.purchaseUnit !== 0" class="sw-cms-el-product-box__price-unit" > <span class="sw-cms-el-product-box__price-unit-label">{{ $tc('sw-cms.elements.productBox.component.label.priceUnitContent') }} </span> <span class="sw-cms-el-product-box__price-unit-content">{{ product.purchaseUnit }} {{ product.packUnit }}</span><br> <span v-if="product.purchaseUnit && product.referenceUnit && product.purchaseUnit !== product.referenceUnit" class="sw-cms-el-product-box__price-unit-reference" > ({{ currencyFilter(product.price[0].gross * product.referenceUnit / product.purchaseUnit, 'EUR') }} * / {{ product.referenceUnit }} {{ product.packUnit }}) </span> </div> {% endblock %} {% block sw_cms_element_product_box_price %} <div class="sw-cms-el-product-box__price"> {{ currencyFilter(product.price[0].gross, 'EUR') }} </div> {% endblock %} </div> {% endblock %} {% block sw_cms_element_product_box_actions %} <div class="sw-cms-el-product-box__actions"> <a href="#" class="sw-cms-el-product-box__buy-action" > {{ $tc('sw-cms.elements.productBox.component.label.actionBuy') }} </a> </div> {% endblock %} </div> {% endblock %} </div> {% endblock %} </div> {% endblock %}`,{Mixin:s,Filter:t}=Shopware,l={template:r,mixins:[s.getByName("cms-element"),s.getByName("placeholder")],computed:{product(){var e,c;return(c=(e=this.element)==null?void 0:e.data)!=null&&c.product?this.element.data.product:{name:"Lorem ipsum dolor",description:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.`,price:[{gross:19.9}],cover:{media:{url:"/administration/static/img/cms/preview_glasses_large.jpg",alt:"Lorem Ipsum dolor"}}}},displaySkeleton(){var e,c;return!((c=(e=this.element)==null?void 0:e.data)!=null&&c.product)},mediaUrl(){return this.product.cover&&this.product.cover.media?this.product.cover.media.id?this.product.cover.media.url:this.assetFilter(this.product.cover.media.url):this.assetFilter("administration/static/img/cms/preview_glasses_large.jpg")},altTag(){var e,c,o;return(o=(c=(e=this.product)==null?void 0:e.cover)==null?void 0:c.media)!=null&&o.alt?this.product.cover.media.alt:null},displayModeClass(){return this.element.config.displayMode.value==="standard"?null:`is--${this.element.config.displayMode.value}`},verticalAlignStyle(){var e,c;return(c=(e=this.element.config)==null?void 0:e.verticalAlign)!=null&&c.value?`align-content: ${this.element.config.verticalAlign.value};`:null},assetFilter(){return t.getByName("asset")},truncateFilter(){return t.getByName("truncate")},currencyFilter(){return t.getByName("currency")}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("product-box"),this.initElementData("product-box")}}};export{l as default};
