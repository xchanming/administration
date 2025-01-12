const s=`{% block sw_flow_change_customer_status_modal %} <sw-modal class="sw-flow-change-customer-status-modal" :title="$tc('sw-flow.modals.customerStatus.titleChangeCustomerStatus')" :closable="false" @modal-close="onClose" > {% block sw_flow_change_customer_status_modal_select %} <sw-single-select v-model:value="active" name="sw-field--active" required :highlight-search-term="false" class="sw-flow-change-customer-status-modal__type-select" :options="options" :label="$tc('sw-flow.modals.customerStatus.labelCustomerStatus')" :placeholder="$tc('sw-flow.modals.customerStatus.placeholderCustomerStatus')" /> {% endblock %} {% block sw_flow_change_customer_status_modal_footer %} <template #modal-footer> {% block sw_flow_change_customer_status_modal_footer_cancel_button %} <sw-button class="sw-flow-change-customer-status-modal__cancel-button" size="small" @click="onClose" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_flow_change_customer_status_modal_footer_save_button %} <sw-button class="sw-flow-change-customer-status-modal__save-button" variant="primary" size="small" @click="onAddAction" > {{ sequence.id ? $tc('sw-flow.modals.buttonSaveAction') : $tc('sw-flow.modals.buttonAddAction') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %}`,{Component:o}=Cicada,{mapState:a}=o.getComponentHelper(),l={template:s,compatConfig:Cicada.compatConfig,inject:["repositoryFactory"],emits:["modal-close","process-finish"],props:{sequence:{type:Object,required:!0}},data(){return{active:!0,fieldError:null}},computed:{...a("swFlowState",["customerStatus"]),options(){return[{value:!0,label:this.$tc("sw-flow.modals.customerStatus.active")},{value:!1,label:this.$tc("sw-flow.modals.customerStatus.inactive")}]}},created(){this.createdComponent()},methods:{createdComponent(){var t,e;if((t=this.sequence)!=null&&t.config){this.active=(e=this.sequence)==null?void 0:e.config.active;return}this.active=!0},onClose(){this.$emit("modal-close")},onAddAction(){this.sequence.config={active:this.active},this.$emit("process-finish",this.sequence)}}};export{l as default};
//# sourceMappingURL=index-BwRxiqmT.js.map
