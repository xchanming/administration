const o=`{% block sw_order_detail_state_card %} <sw-card class="sw-order-detail-state-card" position-identifier="sw-order-details-state" :title="title" :is-loading="isLoading" > {% block sw_order_detail_state_card_state %} <div class="sw-order-detail-state-card__state"> <sw-container class="sw-order-detail-state-card__state-container" gap="16px" columns="33% auto auto" > {% block sw_order_detail_state_card_state_select %} <sw-order-state-select-v2 v-tooltip="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('order.editor'), showOnDisabledElements: true }" :transition-options="stateOptions" :state-type="entityName" rounded-style :placeholder="entity.stateMachineState.translated.name" :label="stateLabel" :background-style="stateSelectBackgroundStyle" :disabled="disabled" :is-loading="statesLoading" @state-select="onStateSelected" /> {% endblock %} {% block sw_order_detail_state_card_state_history_text %} <div v-if="lastStateChange" class="sw-order-detail-state-card__state-history-text" > <i18n-t keypath="sw-order.stateCard.labelHistory" > <template #time> <sw-time-ago :date="lastStateChange.createdAt" /> </template> <template #author> {{ lastStateChange.user ? lastStateChange.user.name : $tc('sw-order.stateCard.labelSystemUser') }} </template> </i18n-t> </div> <div v-else></div> {% endblock %} {% block sw_order_detail_state_card_state_history_button %} <sw-external-link class="sw-order-detail-state-card__state-history-button" icon="regular-long-arrow-right" @click="onShowStatusHistory" > {{ $tc('sw-order.stateCard.labelShowHistoryModal') }} </sw-external-link> {% endblock %} </sw-container> {% block sw_order_state_change_card_state_modal %} <sw-order-state-change-modal v-if="showStateChangeModal" :order="order" :is-loading="isLoading" :technical-name="''" @page-leave="onLeaveModalClose" @page-leave-confirm="onLeaveModalConfirm" /> {% endblock %} </div> {% endblock %} {% block sw_order_state_change_card_divider %} <hr class="sw-order-detail-state-card__divider"> {% endblock %} {% block sw_order_state_change_card_content %} <sw-container class="sw-order-detail-state-card__content" columns="1fr 1fr" > <slot></slot> </sw-container> {% endblock %} </sw-card> {% endblock %}`,{Criteria:a}=Cicada.Data,d={template:o,compatConfig:Cicada.compatConfig,inject:["acl","repositoryFactory","orderStateMachineService","stateMachineService","stateStyleDataProviderService"],emits:["show-status-history","save-edits"],mixins:["notification"],props:{order:{type:Object,required:!0},title:{type:String,required:!1,default:""},entity:{type:Object,required:!0},stateLabel:{type:String,required:!1,default:""},isLoading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},data(){return{statesLoading:!1,stateOptions:[],lastStateChange:null,currentActionName:null,showStateChangeModal:!1,stateChangeModalConfirmed:!1}},computed:{stateMachineStateRepository(){return this.repositoryFactory.create("state_machine_state")},stateMachineHistoryRepository(){return this.repositoryFactory.create("state_machine_history")},stateMachineStateCriteria(){const t=new a(1,null);return t.addSorting({field:"name",order:"ASC"}),t.addAssociation("stateMachine"),t.addFilter(a.equals("state_machine_state.stateMachine.technicalName",`${this.entityName}.state`)),t},stateMachineHistoryCriteria(){const t=new a(1,1);return t.addFilter(a.equals("referencedId",this.entity.id)),t.addFilter(a.equals("entityName",this.entityName)),t.addAssociation("user"),t.addSorting({field:"createdAt",order:"DESC"}),t},entityName(){return this.entity.getEntityName()},stateName(){return this.entity.stateMachineState.translated.name},stateSelectBackgroundStyle(){const t=this.entity.stateMachineState.technicalName;return this.stateStyleDataProviderService.getStyle(`${this.entityName}.state`,t).selectBackgroundStyle},stateTransitionMethod(){switch(this.entityName){case"order":return this.orderStateMachineService.transitionOrderState.bind(this.orderStateMachineService);case"order_transaction":return this.orderStateMachineService.transitionOrderTransactionState.bind(this.orderStateMachineService);case"order_delivery":return this.orderStateMachineService.transitionOrderDeliveryState.bind(this.orderStateMachineService);default:return null}}},created(){this.createdComponent()},methods:{createdComponent(){this.getTransitionOptions(),this.getLastChange()},onShowStatusHistory(){this.$emit("show-status-history")},getTransitionOptions(){return this.statesLoading=!0,Promise.all([this.stateMachineStateRepository.search(this.stateMachineStateCriteria),this.stateMachineService.getState(this.entityName,this.entity.id)]).then(t=>(this.stateOptions=this.buildTransitionOptions(t[0],t[1].data.transitions),this.statesLoading=!1,Promise.resolve()))},buildTransitionOptions(t,s){const r=t.map((e,i)=>({stateName:e.technicalName,id:i,name:e.translated.name,disabled:!0}));return r.forEach(e=>{const i=s.filter(n=>n.toStateName===e.stateName);i.length>=1&&(e.disabled=!1,e.id=i[0].actionName)}),r},onStateSelected(t,s){if(!t||!s){this.createStateChangeErrorNotification(this.$tc("sw-order.stateCard.labelErrorNoAction"));return}if(!this.modalConfirmed){this.currentActionName=s,this.showStateChangeModal=!0;return}this.stateChangeModalConfirmed=!1},onLeaveModalClose(){this.stateChangeModalConfirmed=!1,this.currentActionName=null,this.showStateChangeModal=!1},onLeaveModalConfirm(){this.showStateChangeModal=!1,this.stateTransitionMethod(this.entity.id,this.currentActionName).then(()=>(this.getLastChange(),this.getTransitionOptions())).then(()=>{this.$emit("save-edits")}).catch(t=>{this.createStateChangeErrorNotification(t)}).finally(()=>{this.stateChangeModalConfirmed=!1,this.currentActionName=null})},createStateChangeErrorNotification(t){this.createNotificationError({message:this.$tc("sw-order.stateCard.labelErrorStateChange")+t})},getLastChange(){this.lastStateChange=null,this.stateMachineHistoryRepository.search(this.stateMachineHistoryCriteria).then(t=>{this.lastStateChange=t.first()})}}};export{d as default};
//# sourceMappingURL=index-CKvFYQxL.js.map
