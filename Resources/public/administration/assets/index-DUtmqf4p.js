const s=`{% block sw_cms_block_cross_selling_preview %} <div class="sw-cms-block-preview-cross-selling"> <h4>{{ $tc('sw-cms.elements.crossSelling.preview.label.crossSellingTitle') }}</h4> <div class="sw-cms-block-preview-cross-selling__slider"> <sw-icon name="regular-chevron-left" size="10" /> <template v-for="block in 4" :key="block" > {% block sw_cms_block_cross_selling_preview_box %} <div class="sw-cms-block-preview-cross-selling__product-box" > <img class="sw-cms-block-preview-cross-selling__product-image" :src="assetFilter('/administration/static/img/cms/preview_glasses_small.jpg')" alt="" > <div class="sw-cms-block-preview-cross-selling__product-info"> <div class="sw-cms-block-preview-cross-selling__product-skeleton"></div> <div class="sw-cms-block-preview-cross-selling__product-skeleton"></div> <div class="sw-cms-block-preview-cross-selling__product-skeleton"></div> </div> <div class="sw-cms-block-preview-cross-selling__product-action"></div> </div> {% endblock %} </template> <sw-icon name="regular-chevron-right" size="10" /> </div> </div> {% endblock %}`,e={template:s,compatConfig:Cicada.compatConfig,computed:{assetFilter(){return Cicada.Filter.getByName("asset")}}};export{e as default};
//# sourceMappingURL=index-DUtmqf4p.js.map
