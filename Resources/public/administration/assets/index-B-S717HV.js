const i=`{% block sw_image_slider %} <div v-if="images.length > 0" class="sw-image-slider" :style="wrapperStyles" > {% block sw_image_slider_image_container %} <div class="sw-image-slider__image-container" :style="containerStyles" > {% block sw_image_slider_image_container_scrollable %} <div class="sw-image-slider__image-scrollable" :style="scrollableContainerStyles" > {% block sw_image_slider_images %} <div v-for="(image, index) in images" :key="index" class="sw-image-slider__element-wrapper" :aria-hidden="isHiddenItem(index) || undefined" :style="componentStyles" > {% block sw_image_slider_image_images_container %} <div class="sw-image-slider__element-container" :class="elementClasses(index)" :style="elementStyles(image, index)" role="button" tabindex="0" @click="onSetCurrentItem(index)" @keydown.enter="onSetCurrentItem(index)" > {% block sw_image_slider_image %} <img class="sw-image-slider__element-image" :class="imageClasses(index)" :style="[borderStyles(image), imageStyles]" :src="getImage(image)" :alt="imageAlt(index)" > {% endblock %} </div> {% endblock %} {% block sw_image_slider_element_description %} <div v-if="hasValidDescription(image)" class="sw-image-slider__element-description" :style="componentStyles" > {{ image.description }} </div> {% endblock %} </div> {% endblock %} </div> {% endblock %} {% block sw_image_slider_image_container_arrows %} <template v-if="showArrows"> {% block sw_image_slider_image_container_arrow_left %} <div class="sw-image-slider__arrow arrow-left" role="button" tabindex="0" @click="goToPreviousImage" @keydown.enter="goToPreviousImage" > <sw-icon name="regular-chevron-left" /> </div> {% endblock %} {% block sw_image_slider_image_container_arrow_right %} <div class="sw-image-slider__arrow arrow-right" role="button" tabindex="0" @click="goToNextImage" @keydown.enter="goToNextImage" > <sw-icon name="regular-chevron-right" /> </div> {% endblock %} </template> {% endblock %} </div> {% endblock %} {% block sw_image_slider_button_container %} <div v-if="showButtons" class="sw-image-slider__buttons" :class="buttonClasses" > {% block sw_image_slider_buttons %} <button v-for="(item, index) in buttonList" :key="index" class="sw-image-slider__buttons-element" :class="{ 'is--active': index === currentPageNumber }" @click="setCurrentPageNumber(index)" > {{ imageAlt(index) }} </button> {% endblock %} </div> {% endblock %} </div> {% endblock %}`,{Filter:r}=Cicada,s={template:i,compatConfig:Cicada.compatConfig,emits:["image-change"],props:{images:{type:Array,required:!0},canvasWidth:{type:Number,required:!1,default:0,validator(e){return e>=0}},canvasHeight:{type:Number,required:!1,default:0,validator(e){return e>=0}},gap:{type:Number,required:!1,default:20,validator(e){return e>=0}},elementPadding:{type:Number,required:!1,default:0,validator(e){return e>=0}},navigationType:{type:String,required:!1,default:"arrow",validator(e){return["arrow","button","all"].includes(e)}},enableDescriptions:{type:Boolean,required:!1,default:!1},overflow:{type:String,required:!1,default:"hidden",validator(e){return["hidden","visible"].includes(e)}},rewind:{type:Boolean,required:!1,default:!1},bordered:{type:Boolean,required:!1,default:!0},rounded:{type:Boolean,required:!1,default:!0},autoWidth:{type:Boolean,required:!1,default:!1},itemPerPage:{type:Number,required:!1,default:1},initialIndex:{type:Number,required:!1,default:0},arrowStyle:{type:String,required:!1,default:"inside",validator(e){return["inside","outside","none"].includes(e)}},buttonStyle:{type:String,required:!1,default:"outside",validator(e){return["inside","outside","none"].includes(e)}},displayMode:{type:String,required:!1,default:"cover",validator(e){return["contain","cover","none"].includes(e)}}},data(){return{currentPageNumber:0,currentItemIndex:0}},computed:{totalPage(){return Math.ceil(this.images.length/this.itemPerPage)},remainder(){return this.images.length%this.itemPerPage},buttonList(){return this.itemPerPage===1?this.images:this.images.filter((e,t)=>t%this.itemPerPage===0)},wrapperStyles(){return{width:this.canvasWidth?`${this.canvasWidth}px`:"100%"}},componentStyles(){return{width:this.autoWidth?"auto":`${100/this.images.length}%`}},containerStyles(){const e=this.arrowStyle==="outside"?112:0;return{width:this.canvasWidth?`${this.canvasWidth-e}px`:`calc(100% - ${e}px)`,overflowX:this.overflow,margin:this.arrowStyle==="outside"?"0 56px":0}},scrollableContainerStyles(){if(this.itemPerPage===1||this.remainder===0||this.images.length<=this.itemPerPage)return{width:`${this.totalPage*100}%`,gap:`${this.gap}px`,transform:`translateX(-${this.currentPageNumber/this.totalPage*100}%)`};const e=100/this.images.length,t=this.currentPageNumber===this.totalPage-1?((this.currentPageNumber-1)*this.itemPerPage+this.remainder)*e:this.currentPageNumber*this.itemPerPage*e;return{width:`${(this.totalPage-1+this.remainder/this.itemPerPage)*100}%`,gap:`${this.gap}px`,transform:`translateX(-${t}%)`}},imageStyles(){return{objectFit:this.displayMode}},buttonClasses(){return{"is--button-inside":this.buttonStyle==="inside"}},showButtons(){return this.images.length>=2&&this.images.length>this.itemPerPage&&["button","all"].includes(this.navigationType)},showArrows(){return this.images.length>this.itemPerPage&&["arrow","all"].includes(this.navigationType)}},watch:{initialIndex:{immediate:!0,handler(e){this.onSetCurrentItem(e)}}},methods:{setCurrentPageNumber(e){this.currentPageNumber=e},isImageObject(e){return typeof e=="object"},hasValidDescription(e){return this.enableDescriptions&&this.isImageObject(e)&&e.hasOwnProperty("description")&&e.description.length>=1},getImage(e){const t=this.isImageObject(e)?e.src:e;try{new URL(t)}catch{return r.getByName("asset")(t)}return t},imageAlt(e){return this.$tc("sw-image-slider.imageAlt",0,{index:e+1,total:this.images.length})},goToPreviousImage(){this.currentPageNumber=this.rewind&&this.currentPageNumber===0?this.totalPage-1:Math.max(this.currentPageNumber-1,0),this.itemPerPage===1&&(this.currentItemIndex=this.currentPageNumber,this.$emit("image-change",this.currentPageNumber))},goToNextImage(){this.currentPageNumber=this.rewind&&this.currentPageNumber===this.totalPage-1?0:Math.min(this.currentPageNumber+1,this.totalPage-1),this.itemPerPage===1&&(this.currentItemIndex=this.currentPageNumber,this.$emit("image-change",this.currentPageNumber))},elementClasses(e){return[{"is--active":e===this.currentItemIndex&&this.itemPerPage>1},{"is--bordered":this.bordered},{"is--rounded":this.rounded}]},elementStyles(e,t){return{cursor:t===this.currentItemIndex?"default":"pointer",height:this.canvasHeight?`${this.canvasHeight}px`:"100%",padding:this.elementPadding?`${this.elementPadding}px`:0,...this.borderStyles(e)}},imageClasses(e){return{"is--active":e===this.currentItemIndex,"is--auto-width":this.autoWidth}},borderStyles(e){return this.hasValidDescription(e)?{borderBottomLeftRadius:0,borderBottomRightRadius:0}:{}},onSetCurrentItem(e){e!==this.currentItemIndex&&(this.currentPageNumber=Math.floor(e/this.itemPerPage),this.currentItemIndex=e,this.$emit("image-change",e))},isHiddenItem(e){return this.itemPerPage===1?e!==this.currentItemIndex:this.currentPageNumber===this.totalPage-1?e<this.images.length-this.itemPerPage:this.currentPageNumber*this.itemPerPage>e||e>=(this.currentPageNumber+1)*this.itemPerPage}}};export{s as default};
//# sourceMappingURL=index-B-S717HV.js.map
