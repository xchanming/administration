const e=`{% block sw_cms_block_image_bubble_row_preview %} <div class="sw-cms-preview-image-bubble-row"> <div class="sw-cms-preview-image-bubble-row__image"> <img :src="assetFilter('/administration/static/img/cms/preview_camera_small.jpg')" alt="" > </div> <div class="sw-cms-preview-image-bubble-row__image"> <img :src="assetFilter('/administration/static/img/cms/preview_plant_small.jpg')" alt="" > </div> <div class="sw-cms-preview-image-bubble-row__image"> <img :src="assetFilter('/administration/static/img/cms/preview_glasses_small.jpg')" alt="" > </div> </div> {% endblock %}`,s={template:e,computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}};export{s as default};
