const o=`{% block sw_entity_multi_select_base_selection_list_label_inner %} <slot name="selection-label-property" v-bind="{ item, index, labelProperty, valueProperty}" > {{ displayLabelProperty(item) }} </slot> {% endblock %} {% block sw_entity_multi_select_base_results_list_result_label %} <slot name="result-label-property" v-bind="{ item, index, labelProperty, valueProperty: 'id'}" > {{ displayLabelProperty(item) }} </slot> {% endblock %}`,{EntityCollection:s}=Cicada.Data,n={template:o,emits:["item-add"],computed:{salesChannelRepository(){return this.repositoryFactory.create("sales_channel")}},methods:{isSelected(e){return this.currentCollection.some(t=>t.id===e.id)},addItem(e){if(this.isSelected(e)){const l=this.currentCollection.find(i=>i.id===e.id);this.remove(l);return}const t=s.fromCollection(this.currentCollection);t.add(e),this.$emit("item-add",e),this.emitChanges(t),this.onSelectExpanded()}}};export{n as default};
//# sourceMappingURL=index-CPFEdVoG.js.map
