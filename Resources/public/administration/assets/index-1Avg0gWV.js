const e=`{% block sw_cms_block_image_text_centered_preview %} <div class="sw-cms-preview-text-on-image"> <div class="sw-cms-preview-text-on-image__content"> <div class="sw-cms-preview-text-on-image__image"> <img :src="assetFilter('/administration/static/img/cms/preview_mountain_small.jpg')" alt="" > </div> <div class="sw-cms-preview-text-on-image__text"> <h2>Lorem ipsum dolor</h2> <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p> </div> </div> </div> {% endblock %}`,t={template:e,computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}};export{t as default};
