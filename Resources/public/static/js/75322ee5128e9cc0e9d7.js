(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[30601],{455403:function(){},30601:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return n}}),o(994481);let{Mixin:i}=Cicada;var n={template:'\n{% block sw_property_search_field %}\n<div class="sw-property-search__toolbar sw-product-variants-configurator-selection__toolbar">\n    <slot name="toolbar">\n        <div class="sw-property-search__search-field-container">\n            <slot name="toolbar-search-field">\n                \n                {% block sw_product_variants_configurator_selection_search_field %}\n                <sw-simple-search-field\n                    ref="searchField"\n                    v-model:value="searchTerm"\n                    size="small"\n                    variant="form"\n                    class="sw-property-search__search-field sw-product-variants-configurator-selection-search__search-field"\n                    :placeholder="$tc(\'sw-property-search.placeholderSearch\')"\n                    :delay="600"\n                    @search-term-change="onSearchOptions"\n                />\n                {% endblock %}\n            </slot>\n        </div>\n    </slot>\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory"],emits:["option-select"],mixins:[i.getByName("notification")],props:{product:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},watch:{disabled(){this.selectOptions(this.$refs.optionGrid)}},computed:{configuratorSettingsRepository(){return this.repositoryFactory.create(this.product.configuratorSettings.entity,this.product.configuratorSettings.source)}},created(){this.createdComponent()},methods:{addOptionCount(){this.groups.forEach(t=>{let e=this.options.filter(e=>e.option.groupId===t.id&&!e.isDeleted);this.$set(t,"optionCount",e.length)}),this.$emit("option-select")},selectOptions(t){t.selectAll(!1),this.preventSelection=!0,this.options.forEach(e=>{e.option&&(e.option.gridDisabled=this.disabled&&!e._isNew,t.selectItem(!e.isDeleted,e.option))}),this.preventSelection=!1},onOptionSelect(t,e){if(this.preventSelection)return;let o=this.options.find(t=>t.optionId===e.id);if(o){this.options.remove(o.id),this.addOptionCount();return}let i=this.configuratorSettingsRepository.create();i.optionId=e.id,i.option=e,this.options.add(i),this.addOptionCount()}}}},994481:function(t,e,o){var i=o(455403);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),o(745346).Z("0a885d29",i,!0,{})}}]);