const o=`{% block sw_product_add_properties_modal %} <sw-modal v-if="properties" class="sw-product-add-properties-modal" :title="$tc('sw-product.properties.addPropertiesModal.title')" @modal-close="onCancel" > {% block sw_product_add_properties_modal_filled_state %} <div v-if="propertiesAvailable"> {% block sw_product_add_properties_modal_filled_state_header %} {% block sw_product_add_properties_modal_filled_state_search_field %} <sw-property-search ref="propertySearch" class="sw-product-add-properties-modal__search" :options="newProperties" :overlay="false" :collapsible="false" @option-select="onSelectOption" > <template #toolbar="{ focus, input, searchTerm }" > {% block sw_property_search_field %} <div class="sw-property-search__toolbar sw-product-add-properties-modal__toolbar"> <slot name="toolbar"> <div class="sw-property-search__search-field-container"> <slot name="toolbar-search-field"> {% block sw_productadd_properties_selection_search_field %} <sw-simple-search-field ref="searchField" size="small" variant="form" class="sw-property-search__search-field sw-product-add-properties-modal__search-field" :value="searchTerm" :placeholder="$tc('sw-property-search.placeholderSearch')" @focus="focus" @update:value="input" @option-select="onSelectOption" /> {% endblock %} </slot> </div> </slot> <sw-extension-teaser-popover position-identifier="sw-product-add-properties-assistant-button" /> </div> {% endblock %} </template> </sw-property-search> {% endblock %} {% endblock %} </div> {% endblock %} {% block sw_product_add_properties_modal_empty_state %} <sw-empty-state v-if="!propertiesAvailable" :absolute="false" :title="$tc('sw-product.properties.addPropertiesModal.titleEmptyState')" :subline="$tc('sw-product.properties.addPropertiesModal.descriptionEmptyState')" > <template #icon> {% block sw_product_add_properties_modal_empty_state_image %} <img :src="assetFilter('/administration/static/img/empty-states/products-empty-state.svg')" :alt="$tc('sw-product.properties.addPropertiesModal.titleEmptyState')" > {% endblock %} </template> <template #actions> {% block sw_product_properties_empty_state_button_property %} <sw-button variant="ghost" @click="onOpenProperties" > {{ $tc('sw-product.properties.buttonAddProperties') }} </sw-button> {% endblock %} </template> </sw-empty-state> {% endblock %} <template #modal-footer> {% block sw_product_add_properties_modal_button_cancel %} <sw-button size="small" @click="onCancel" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_product_add_properties_modal_button_save %} <sw-button v-if="showSaveButton" class="sw-product-add-properties-modal__button-save" variant="primary" size="small" @click="onSave" > {{ $tc('global.default.save') }} </sw-button> {% endblock %} </template> </sw-modal> {% endblock %}`,r={template:o,compatConfig:Cicada.compatConfig,inject:["repositoryFactory"],emits:["modal-cancel","modal-save"],props:{newProperties:{type:Array,required:!0},propertiesAvailable:{type:Boolean,required:!1,default:!0}},data(){return{properties:[]}},computed:{showSaveButton(){return this.propertiesAvailable},assetFilter(){return Cicada.Filter.getByName("asset")}},methods:{onCancel(){this.$emit("modal-cancel")},onSave(){this.$emit("modal-save",this.newProperties)},onOpenProperties(){this.$emit("modal-cancel"),this.$nextTick(()=>{this.$router.push({name:"sw.property.index"})})},onSelectOption(e){const t=e.item;e.selected===!0?this.newProperties.add(t):this.newProperties.remove(t.id)}}};export{r as default};
//# sourceMappingURL=index-B_53Kn44.js.map
