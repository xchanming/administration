const l=`{% block sw_bulk_edit_save_modal_confirm %} <div class="sw-bulk-edit-save-modal-confirm"> <p class="sw-bulk-edit-save-modal__help-text"> {{ $tc('sw-bulk-edit.modal.confirm.description', itemTotal, {itemCount: itemTotal}) }} </p> {% block sw_bulk_edit_save_modal_confirm_trigger_flows %} <div v-if="triggeredFlows.length > 0" class="sw-bulk-edit-save-modal-confirm__trigger-flows" > {% block sw_bulk_edit_save_modal_confirm_trigger_flows_switch %} <sw-switch-field v-if="!bulkEditData?.statusMails?.isChanged" v-model:value="isFlowTriggered" name="sw-bulk-edit-save-modal-confirm-trigger-flows-switch" class="sw-bulk-edit-save-modal-confirm__trigger-flows-switch" :label="$tc('sw-bulk-edit.modal.confirm.switchLabel')" :help-text="$tc('sw-bulk-edit.modal.confirm.switchHelpText')" /> {% endblock %} {% block sw_bulk_edit_save_modal_confirm_trigger_flows_alert %} <sw-alert v-show="isFlowTriggered" class="sw-bulk-edit-save-modal-confirm__trigger-flows-alert" > <p>{{ $tc('sw-bulk-edit.modal.confirm.alertTitle') }}</p> <span>{{ triggeredFlows.join(', ') }}</span> </sw-alert> {% endblock %} </div> {% endblock %} <sw-alert variant="warning" class="sw-bulk-edit-save-modal__warning" > {{ $tc('sw-bulk-edit.modal.warningText') }} </sw-alert> </div> {% endblock %}`,s={template:l,emits:["title-set","buttons-update"],props:{itemTotal:{required:!0,type:Number},bulkEditData:{type:Object,required:!1,default:()=>({})}},computed:{isFlowTriggered:{get(){return Shopware.Store.get("swBulkEdit").isFlowTriggered},set(t){Shopware.Store.get("swBulkEdit").setIsFlowTriggered(t)}},triggeredFlows(){const t=[];return Object.entries(this.bulkEditData).forEach(([e,i])=>{e===this.$tc(`sw-bulk-edit.modal.confirm.triggeredFlows.${e}.key`)&&i.isChanged===!0&&t.push(this.$tc(`sw-bulk-edit.modal.confirm.triggeredFlows.${e}.label`))}),t}},created(){this.createdComponent()},methods:{createdComponent(){this.updateButtons(),this.setTitle()},setTitle(){this.$emit("title-set",this.$tc("sw-bulk-edit.modal.confirm.title"))},updateButtons(){const t=[{key:"cancel",label:this.$tc("global.sw-modal.labelClose"),position:"left",action:"",disabled:!1},{key:"next",label:this.$tc("sw-bulk-edit.modal.confirm.buttons.applyChanges"),position:"right",variant:"primary",action:"process",disabled:!1}];this.$emit("buttons-update",t)}}};export{s as default};
