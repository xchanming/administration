"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[20816],{820816:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});let{EntityCollection:i}=Cicada.Data;var l={template:'\n{% block sw_entity_multi_select_base_selection_list_label_inner %}\n<slot\n    name="selection-label-property"\n    v-bind="{ item, index, labelProperty, valueProperty}"\n>\n    {{ displayLabelProperty(item) }}\n</slot>\n{% endblock %}\n\n\n{% block sw_entity_multi_select_base_results_list_result_label %}\n<slot\n    name="result-label-property"\n    v-bind="{ item, index, labelProperty, valueProperty: \'id\'}"\n>\n    {{ displayLabelProperty(item) }}\n</slot>\n{% endblock %}\n',emits:["item-add"],computed:{salesChannelRepository(){return this.repositoryFactory.create("sales_channel")}},methods:{isSelected(e){return this.currentCollection.some(t=>t.id===e.id)},addItem(e){if(this.isSelected(e)){let t=this.currentCollection.find(t=>t.id===e.id);this.remove(t);return}let t=i.fromCollection(this.currentCollection);t.add(e),this.$emit("item-add",e),this.emitChanges(t),this.onSelectExpanded()}}}}}]);