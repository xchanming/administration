const e=`{% block sw_cms_block_image_two_column_preview %} <div class="sw-cms-preview-image-two-column"> <img :src="assetFilter('/administration/static/img/cms/preview_camera_small.jpg')" alt="" > <img :src="assetFilter('/administration/static/img/cms/preview_plant_small.jpg')" alt="" > </div> {% endblock %}`,t={template:e,computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}};export{t as default};
