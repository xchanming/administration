const a=`{% block sw_bulk_edit_order_documents_generate_invoice %} <div class="sw-bulk-edit-order-documents-generate-invoice"> {% block sw_bulk_edit_order_documents_generate_invoice_datepicker %} <sw-datepicker v-model:value="generateData.documentDate" class="sw-bulk-edit-order-documents-generate-invoice__item" hide-hint :label="$tc('sw-bulk-edit.order.documents.generateInvoice.labelDatePicker')" :placeholder="$tc('sw-datepicker.date.placeholder')" /> {% endblock %} {% block sw_bulk_edit_order_documents_generate_invoice_textarea %} <sw-textarea-field v-model:value="generateData.documentComment" :label="$tc('sw-bulk-edit.order.documents.generateInvoice.labelTextarea')" :placeholder="$tc('sw-bulk-edit.order.documents.generateInvoice.placeholderTextarea')" /> {% endblock %} {% block sw_bulk_edit_order_documents_generate_invoice_toggle_skip %} <sw-switch-field v-if="feature.isActive('v6.7.0.0')" v-model:value="generateData.forceDocumentCreation" :label="$tc('sw-bulk-edit.order.documents.forceDocumentCreation')" :help-text="$tc('sw-bulk-edit.order.documents.forceDocumentCreationHelpText')" /> {% endblock %} {% block sw_bulk_edit_order_documents_generate_invoice_placeholder %} {% endblock %} </div> {% endblock %}`,{State:c}=Cicada,d={template:a,compatConfig:Cicada.compatConfig,inject:["feature"],computed:{generateData:{get(){var e,t,o;return(o=(t=(e=c.get("swBulkEdit"))==null?void 0:e.orderDocuments)==null?void 0:t.invoice)==null?void 0:o.value},set(e){c.commit("swBulkEdit/setOrderDocumentsValue",{type:"invoice",value:e})}}}};export{d as default};
//# sourceMappingURL=index-TxDi9QME.js.map
