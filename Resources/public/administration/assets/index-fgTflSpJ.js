const e=`{% block sw_cms_element_image_slider_preview %} <div class="sw-cms-el-preview-image-slider"> <sw-icon name="regular-chevron-left" size="10" /> <div> <img :src="assetFilter('/administration/static/img/cms/preview_mountain_small.jpg')" alt="" > </div> <sw-icon name="regular-chevron-right" size="10" /> </div> {% endblock %}`,i={template:e,compatConfig:Cicada.compatConfig,computed:{assetFilter(){return Cicada.Filter.getByName("asset")}}};export{i as default};
//# sourceMappingURL=index-fgTflSpJ.js.map
