const n=`{% block sw_cms_element_image_slider %} <div class="sw-cms-el-image-slider" :class="outsideNavArrows" :style="verticalAlignStyle" > {% block sw_cms_element_image_slider_img %} <div class="sw-cms-el-image-slider__image-box" :class="[displayModeClass, navDotsClass]" :style="styles" > <video v-if="activeMedia?.mediaType?.name === 'VIDEO'" class="sw-cms-el-image-slider__video" :src="activeMedia?.url" controls > {{ $tc('global.sw-media-preview-v2.fallbackVideoTagSupport') }} </video> <img v-else class="sw-cms-el-image-slider__image" :src="imgSrc" alt="" > </div> {% endblock %} <template v-if="element.data !== null"> {% block sw_cms_element_image_slider_nav %} <div class="sw-cms-el-image-slider__navigation"> {% block sw_cms_element_image_slider_nav_dots %} <div v-if="element.config.navigationDots.value !== null" class="sw-cms-el-image-slider__navigation-dots" :class="navDotsClass" > <div class="sw-cms-el-image-slider__navigation-buttons"> <template v-if="sliderItems?.length > 0"> <div v-for="(sliderItem, index) in sliderItems" :key="index" :class="activeButtonClass(sliderItem.media.url)" class="sw-cms-el-image-slider__navigation-button" role="button" tabindex="0" @click="setSliderItem(sliderItem.media, index)" @keydown.enter="setSliderItem(sliderItem.media, index)" ></div> </template> <template v-else> <div class="sw-cms-el-image-slider__navigation-button is--active"></div> <div class="sw-cms-el-image-slider__navigation-button"></div> <div class="sw-cms-el-image-slider__navigation-button"></div> </template> </div> </div> {% endblock %} {% block sw_cms_element_image_slider_nav_arrows %} <div v-if="element.config.navigationArrows.value !== null" class="sw-cms-el-image-slider__navigation-arrows" :class="[navArrowsClass, navDotsClass]" > <sw-icon class="sw-cms-el-image-slider__navigation-button" name="regular-chevron-left" size="24" @click="setSliderArrowItem(-1)" /> <sw-icon class="sw-cms-el-image-slider__navigation-button" name="regular-chevron-right" size="24" @click="setSliderArrowItem(1)" /> </div> {% endblock %} </div> {% endblock %} </template> <template v-else> {% block sw_cms_element_image_slider_nav_default %} <div class="sw-cms-el-image-slider__navigation"> <div class="sw-cms-el-image-slider__navigation-arrows is--nav-outside"> <sw-icon class="sw-cms-el-image-slider__navigation-button" name="regular-chevron-left" size="24" /> <sw-icon class="sw-cms-el-image-slider__navigation-button" name="regular-chevron-right" size="24" /> </div> </div> {% endblock %} </template> </div> {% endblock %}`,{Mixin:r,Filter:m}=Cicada,o={template:n,compatConfig:Cicada.compatConfig,inject:["feature"],emits:["active-image-change"],mixins:[r.getByName("cms-element")],props:{activeMedia:{type:[Object,null],required:!1,default:null}},data(){return{columnCount:7,columnWidth:90,sliderPos:0,imgPath:"/administration/static/img/cms/preview_mountain_large.jpg",imgSrc:""}},computed:{gridAutoRows(){return`grid-auto-rows: ${this.columnWidth}`},uploadTag(){return`cms-element-media-config-${this.element.id}`},sliderItems(){var s,t,l,a;const e=(t=(s=this.element)==null?void 0:s.config)==null?void 0:t.sliderItems,i=(a=(l=this.element)==null?void 0:l.data)==null?void 0:a.sliderItems;return(e==null?void 0:e.source)==="mapped"?this.getDemoValue(e.value)||[]:(i==null?void 0:i.length)>0?i:[]},displayModeClass(){return this.element.config.displayMode.value==="standard"?null:`is--${this.element.config.displayMode.value}`},styles(){return this.element.config.displayMode.value==="cover"&&this.element.config.minHeight.value!==0?{"min-height":this.element.config.minHeight.value}:{}},outsideNavArrows(){return this.element.config.navigationArrows.value==="outside"?"has--outside-arrows":null},navDotsClass(){return this.element.config.navigationDots.value?`is--dot-${this.element.config.navigationDots.value}`:null},navArrowsClass(){return this.element.config.navigationArrows.value?`is--nav-${this.element.config.navigationArrows.value}`:null},verticalAlignStyle(){return this.element.config.verticalAlign.value?`align-self: ${this.element.config.verticalAlign.value};`:null},assetFilter(){return m.getByName("asset")}},watch:{sliderItems:{handler(e){(e==null?void 0:e.length)>0?(this.imgSrc=e[0].media.url,this.$emit("active-image-change",e[0].media)):this.imgSrc=this.assetFilter(this.imgPath)},deep:!0},activeMedia(){this.sliderPos=this.activeMedia.sliderIndex,this.imgSrc=this.activeMedia.url}},created(){this.createdComponent()},methods:{createdComponent(){var e;this.initElementConfig("image-slider"),this.initElementData("image-slider"),((e=this.sliderItems)==null?void 0:e.length)>0?(this.imgSrc=this.sliderItems[0].media.url,this.$emit("active-image-change",this.sliderItems[this.sliderPos].media)):this.imgSrc=this.assetFilter(this.imgPath)},setSliderItem(e,i){this.imgSrc=e.url,this.sliderPos=i,this.$emit("active-image-change",e,i)},activeButtonClass(e){return{"is--active":this.imgSrc===e}},setSliderArrowItem(e=1){this.sliderItems.length<2||(this.sliderPos+=e,this.sliderPos<0&&(this.sliderPos=this.sliderItems.length-1),this.sliderPos>this.sliderItems.length-1&&(this.sliderPos=0),this.imgSrc=this.sliderItems[this.sliderPos].media.url,this.$emit("active-image-change",this.sliderItems[this.sliderPos].media,this.sliderPos))}}};export{o as default};
//# sourceMappingURL=index-BHOzeG0k.js.map
