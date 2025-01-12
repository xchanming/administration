import{C as l}from"./channel-oRk5-XZJ.js";import"./administration-DCOj2uiN.js";const n=`{% block sw_cms_element_product_box_config %} <div class="sw-cms-el-config-product-box"> {% block sw_cms_element_product_box_config_product_select %} <sw-entity-single-select ref="cmsProductSelection" v-model:value="element.config.product.value" :label="$tc('sw-cms.elements.productBox.config.label.selection')" :placeholder="$tc('sw-cms.elements.productBox.config.placeholder.selection')" entity="product" :criteria="productCriteria" :context="productSelectContext" show-clearable-button @update:value="onProductChange" > <template #selection-label-property="{ item }"> <sw-product-variant-info :variations="item.variation" > {{ item.translated.name || item.name }} </sw-product-variant-info> </template> <template #result-item="{ item, index }"> <slot name="result-item" v-bind="{ item, index }" > <sw-select-result v-bind="{ item, index }" > {% block sw_entity_single_select_base_results_list_result_label %} <span class="sw-select-result__result-item-text"> <sw-product-variant-info :variations="item.variation"> {{ item.translated.name || item.name }} </sw-product-variant-info> </span> {% endblock %} </sw-select-result> </slot> </template> </sw-entity-single-select> {% endblock %} {% block sw_cms_element_product_box_config_layout_select %} <sw-select-field v-model:value="element.config.boxLayout.value" :label="$tc('sw-cms.elements.productBox.config.label.layoutType')" > {% block sw_cms_element_product_box_config_layout_select_options %} <option value="standard"> {{ $tc('sw-cms.elements.productBox.config.label.layoutTypeStandard') }} </option> <option value="image"> {{ $tc('sw-cms.elements.productBox.config.label.layoutTypeImage') }} </option> <option value="minimal"> {{ $tc('sw-cms.elements.productBox.config.label.layoutTypeMinimal') }} </option> {% endblock %} </sw-select-field> {% endblock %} {% block sw_cms_element_product_box_config_displaymode_select %} <sw-select-field v-model:value="element.config.displayMode.value" :label="$tc('sw-cms.elements.general.config.label.displayMode')" > {% block sw_cms_element_product_box_config_displaymode_select_options %} <option value="standard"> {{ $tc('sw-cms.elements.general.config.label.displayModeStandard') }} </option> <option value="cover"> {{ $tc('sw-cms.elements.general.config.label.displayModeCover') }} </option> <option value="contain"> {{ $tc('sw-cms.elements.general.config.label.displayModeContain') }} </option> {% endblock %} </sw-select-field> {% endblock %} {% block sw_cms_element_product_box_config_settings_vertical_align %} <sw-select-field v-model:value="element.config.verticalAlign.value" :label="$tc('sw-cms.elements.general.config.label.verticalAlign')" :placeholder="$tc('sw-cms.elements.general.config.label.verticalAlign')" > {% block sw_cms_element_product_box_config_settings_vertical_align_options %} <option value="flex-start"> {{ $tc('sw-cms.elements.general.config.label.verticalAlignTop') }} </option> <option value="center"> {{ $tc('sw-cms.elements.general.config.label.verticalAlignCenter') }} </option> <option value="flex-end"> {{ $tc('sw-cms.elements.general.config.label.verticalAlignBottom') }} </option> {% endblock %} </sw-select-field> {% endblock %} </div> {% endblock %}`,{Mixin:i}=Cicada,a={template:n,compatConfig:Cicada.compatConfig,inject:["repositoryFactory"],emits:["element-update"],mixins:[i.getByName("cms-element")],computed:{productRepository(){return this.repositoryFactory.create("product")},productSelectContext(){const e={...Cicada.Context.api};return e.inheritance=!0,e},productCriteria(){const e=new l(1,25);return e.addAssociation("options.group"),e}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("product-box")},onProductChange(e){if(!e)this.element.config.product.value=null,this.isCompatEnabled("INSTANCE_SET")?(this.$set(this.element.data,"productId",null),this.$set(this.element.data,"product",null)):(this.element.data.productId=null,this.element.data.product=null);else{const t=new l(1,25);t.addAssociation("cover"),t.addAssociation("options.group"),this.productRepository.get(e,this.productSelectContext,t).then(o=>{this.element.config.product.value=e,this.isCompatEnabled("INSTANCE_SET")?(this.$set(this.element.data,"productId",e),this.$set(this.element.data,"product",o)):(this.element.data.productId=e,this.element.data.product=o)})}this.$emit("element-update",this.element)}}};export{a as default};
//# sourceMappingURL=index-fKba9yxj.js.map
