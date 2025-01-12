import{C as s}from"./index-Bf-oW9e8.js";import"./administration-DCOj2uiN.js";import"./main.vite-CEuAX8cl.js";import"./channel-oRk5-XZJ.js";import"./user-config.class-C-zJul6z.js";const r='{% block sw_cms_element_image_gallery %} <div class="sw-cms-el-image-gallery" :class="[galleryPositionClass, currentDeviceViewClass]" :style="verticalAlignStyle" > {% block sw_cms_element_image_gallery_grid %} <div ref="galleryItemHolder" class="sw-cms-el-image-gallery__grid" > <template v-if="mediaUrls && mediaUrls.length"> <div class="sw-cms-el-image-gallery__item-holder"> {% block sw_cms_element_image_gallery_selection %} <template v-for="(sliderItem, index) in mediaUrls" :key="index" > <sw-media-list-selection-item-v2 v-if="index < galleryLimit" :item="sliderItem.media" :class="activeMediaClass(sliderItem.media)" hide-actions hide-tooltip @click="onChangeGalleryImage(sliderItem.media, index)" /> </template> {% endblock %} </div> </template> <template v-else> {% block sw_cms_element_image_gallery_empty %} <div class="sw-cms-el-image-gallery__item-holder"> <img v-for="mediaItem in getPlaceholderItems()" :key="mediaItem.url" class="sw-cms-el-image-gallery__item-placeholder" :src="mediaItem.url" alt="" > </div> {% endblock %} </template> {% block sw_cms_element_image_gallery_nav_arrow %} <div v-if="element.config.sliderItems.value.length > galleryLimit" class="sw-cms-el-image-gallery__grid-arrow" > <sw-icon name="regular-chevron-down" size="20" /> </div> {% endblock %} </div> {% endblock %} {% block sw_cms_element_image_gallery_slider %} <sw-cms-el-image-slider :element="element" :active-media="activeMedia" @active-image-change="onChangeGalleryImage" /> {% endblock %} </div> {% endblock %}',{Mixin:n,Filter:m}=Cicada,h={template:r,compatConfig:Cicada.compatConfig,mixins:[n.getByName("cms-element")],data(){return{galleryLimit:3,activeMedia:null}},computed:{currentDeviceView(){return this.cmsPageState.currentCmsDeviceView},galleryPositionClass(){return`is--preview-${this.element.config.galleryPosition.value}`},currentDeviceViewClass(){return this.currentDeviceView?`is--${this.currentDeviceView}`:null},verticalAlignStyle(){return this.element.config.verticalAlign.value?`align-content: ${this.element.config.verticalAlign.value};`:null},mediaUrls(){var i,t,l;const e=(i=this.element)==null?void 0:i.config;return!e||e.source==="default"?[]:e.source==="mapped"?this.getDemoValue(e.sliderItems.value)||[]:((l=(t=this.element)==null?void 0:t.data)==null?void 0:l.sliderItems)||[]},isProductPage(){var e,i;return(((i=(e=this.cmsPageState)==null?void 0:e.currentPage)==null?void 0:i.type)??"")==="product_detail"},assetFilter(){return m.getByName("asset")}},watch:{currentDeviceView(){this.currentDeviceView==="mobile"&&(this.galleryLimit=0),setTimeout(()=>{this.setGalleryLimit()},400)},"element.config.galleryPosition.value":{deep:!0,handler(){this.$nextTick(()=>{this.setGalleryLimit()})}},"element.config.sliderItems.value":{handler(e){if(!e){this.element.config.sliderItems.value=[];return}this.$nextTick(()=>{this.setGalleryLimit()})}}},created(){this.createdComponent()},mounted(){this.mountedComponent()},methods:{createdComponent(){var e,i,t,l,a;this.initElementConfig("image-gallery"),this.initElementData("image-gallery"),!(!this.isProductPage||(t=(i=(e=this.element)==null?void 0:e.translated)==null?void 0:i.config)!=null&&t.sliderItems||(a=(l=this.element)==null?void 0:l.data)!=null&&a.sliderItems)&&(this.element.config.sliderItems.source="mapped",this.element.config.sliderItems.value="product.media",this.element.config.navigationDots.value="inside",this.element.config.zoom.value=!0,this.element.config.fullScreen.value=!0,this.element.config.displayMode.value="contain",this.element.config.minHeight.value="430px")},mountedComponent(){this.setGalleryLimit()},getPlaceholderItems(){var e,i;if(((i=(e=this.element)==null?void 0:e.config)==null?void 0:i.source)!=="default"){const t=s.MEDIA.previewMountain.slice(s.MEDIA.previewMountain.lastIndexOf("/")+1),l=s.MEDIA.previewGlasses.slice(s.MEDIA.previewGlasses.lastIndexOf("/")+1),a=s.MEDIA.previewPlant.slice(s.MEDIA.previewPlant.lastIndexOf("/")+1);return[{url:this.assetFilter(`administration/static/img/cms/${t}`)},{url:this.assetFilter(`administration/static/img/cms/${l}`)},{url:this.assetFilter(`administration/static/img/cms/${a}`)}]}return this.element.config.sliderItems.value.map(t=>{const l=t.fileName.slice(t.fileName.lastIndexOf("/")+1);return{url:this.assetFilter(`/administration/static/img/cms/${l}`)}})},onChangeGalleryImage(e,i=0){e.sliderIndex=i,this.activeMedia=e},activeMediaClass(e){return this.activeMedia?{"is--active":e.id===this.activeMedia.id}:null},setGalleryLimit(){if(this.element.config.sliderItems.value.length===0)return;let e=0,i=0;const t=8;this.element.config.galleryPosition.value==="underneath"?(e=this.$refs.galleryItemHolder.offsetWidth-36,i=92):(e=this.$refs.galleryItemHolder.offsetHeight,i=64),this.galleryLimit=Math.floor(e/(i+t))}}};export{h as default};
//# sourceMappingURL=index-BgvNqWgc.js.map
