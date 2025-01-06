(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[77387],{543274:function(){},77387:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}}),t(554782);let{Mixin:i}=Cicada;var l={template:'\n{% block sw_cms_element_product_slider %}\n<div\n    class="sw-cms-el-product-slider"\n    :class="classes"\n    :style="verticalAlignStyle"\n>\n    \n    {% block sw_cms_element_product_slider_title %}\n    <div\n        v-if="element.config.title.value"\n        class="sw-cms-el-product-slider__title"\n    >\n        {{ element.config.title.value }}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_product_slider_content %}\n    <div class="sw-cms-el-product-slider__content">\n        \n        {% block sw_cms_element_product_slider_arrow_left %}\n        <div\n            v-if="hasNavigationArrows"\n            class="sw-cms-el-product-slider__navigation is--left-arrow"\n            :class="navArrowsClasses"\n        >\n            <sw-icon\n                class="sw-cms-el-product-slider__navigation-button"\n                name="regular-chevron-left"\n                size="24"\n            />\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_element_product_slider_product_holder %}\n        <div\n            ref="productHolder"\n            class="sw-cms-el-product-slider__product-holder"\n            :style="sliderBoxMinWidth"\n        >\n            <template v-if="!element.data || !element.data.products">\n                \n                {% block sw_cms_element_product_slider_demo_data %}\n                <sw-cms-el-product-box\n                    v-for="index in sliderBoxLimit"\n                    :key="index"\n                    :element="demoProductElement"\n                />\n                {% endblock %}\n            </template>\n\n            <template v-else>\n                \n                {% block sw_cms_element_product_slider_products %}\n                <template\n                    v-for="(product, index) in element.data.products"\n                    :key="index"\n                >\n                    <sw-cms-el-product-box\n                        v-if="index < sliderBoxLimit"\n                        :element="getProductEl(product)"\n                    />\n                </template>\n                {% endblock %}\n            </template>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_element_product_slider_arrow_right %}\n        <div\n            v-if="hasNavigationArrows"\n            class="sw-cms-el-product-slider__navigation is--right-arrow"\n            :class="navArrowsClasses"\n        >\n            <sw-icon\n                class="sw-cms-el-product-slider__navigation-button"\n                name="regular-chevron-right"\n                size="24"\n            />\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["feature"],mixins:[i.getByName("cms-element")],data(){return{sliderBoxLimit:3}},computed:{demoProductElement(){return{config:{boxLayout:{source:"static",value:this.element.config.boxLayout.value},displayMode:{source:"static",value:this.element.config.displayMode.value}},data:null}},hasNavigation(){return this.hasNavigationArrows},hasNavigationArrows(){return["inside","outside"].includes(this.element.config.navigationArrows.value)},classes(){return{"has--navigation-indent":"outside"===this.element.config.navigationArrows.value,"has--border":!!this.element.config.border.value}},navArrowsClasses(){return this.hasNavigationArrows?[`has--arrow-${this.element.config.navigationArrows.value}`]:null},sliderBoxMinWidth(){return this.element.config.elMinWidth.value&&this.element.config.elMinWidth.value.indexOf("px")>-1?`repeat(auto-fit, minmax(${this.element.config.elMinWidth.value}, 1fr))`:null},currentDeviceView(){return this.cmsPageState.currentCmsDeviceView},verticalAlignStyle(){return this.element.config.verticalAlign.value?`align-self: ${this.element.config.verticalAlign.value};`:null}},watch:{"element.config.elMinWidth.value":{handler(){this.setSliderRowLimit()}},currentDeviceView(){setTimeout(()=>{this.setSliderRowLimit()},400)}},created(){this.createdComponent()},mounted(){this.mountedComponent()},methods:{createdComponent(){this.initElementConfig("product-slider"),this.initElementData("product-slider")},mountedComponent(){this.setSliderRowLimit()},setSliderRowLimit(){let e=this.$refs.productHolder?.offsetWidth;if(void 0===e)return;if("mobile"===this.currentDeviceView||e<500){this.sliderBoxLimit=1;return}if(!this.element.config.elMinWidth.value||"px"===this.element.config.elMinWidth.value||-1===this.element.config.elMinWidth.value.indexOf("px")){this.sliderBoxLimit=3;return}if(0>=parseInt(this.element.config.elMinWidth.value.replace("px",""),10))return;let n=parseInt(this.element.config.elMinWidth.value.replace("px",""),10);n>=300&&(n-=100),this.sliderBoxLimit=Math.floor(e/(n+32))},getProductEl(e){return{config:{boxLayout:{source:"static",value:this.element.config.boxLayout.value},displayMode:{source:"static",value:this.element.config.displayMode.value}},data:{product:e}}}}}},554782:function(e,n,t){var i=t(543274);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(745346).Z("7516132d",i,!0,{})}}]);