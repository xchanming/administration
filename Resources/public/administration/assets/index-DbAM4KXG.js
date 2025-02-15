const a=`{% block sw_settings_state_machine_detail %} <sw-page class="sw-settings-state-machine-detail"> {% block sw_settings_state_machine_detail_smart_bar_header %} <template #smart-bar-header> <h2> {{ placeholder(stateMachine, 'name') }} </h2> </template> {% endblock %} {% block sw_settings_state_machine_detail_language_switch %} <template #language-switch> <sw-language-switch :disabled="stateMachine === null" @on-change="onChangeLanguage" /> </template> {% endblock %} {% block sw_settings_state_machine_detail_smart_bar_actions %} <template #smart-bar-actions> {% block sw_settings_state_machine_detail_smart_bar_actions_cancel %} <sw-button v-tooltip.bottom="tooltipCancel" class="sw-settings-state-machine-detail__cancel" @click="onCancel" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_settings_state_machine_detail_smart_bar_actions_save %} <sw-button-process v-model:process-success="isSaveSuccessful" v-tooltip.bottom="tooltipSave" class="sw-settings-state-machine-detail__save" variant="primary" :is-loading="isLoading" :disabled="isLoading || !allowSave" @click="onSave" > {{ $tc('global.default.save') }} </sw-button-process> {% endblock %} </template> {% endblock %} {% block sw_settings_state_machine_detail_content %} <template #content> <sw-card-view> {% block sw_settings_state_machine_detail_content_card %} <sw-card v-if="!isLoading" position-identifier="sw-settings-state-machine-detail-content" :title="$tc('sw-settings-state-machine.detail.stateMachineCardTitle')" > <sw-container columns="repeat(auto-fit, minmax(250px, 1fr))" gap="0px 30px" > {% block sw_settings_state_machine_detail_content_card_name %} <sw-text-field v-model:value="stateMachine.name" :label="$tc('sw-settings-state-machine.detail.fieldLabels.name')" :error="stateMachineNameError" required /> {% endblock %} {% block sw_settings_state_machine_detail_content_card_technical_name %} <sw-text-field v-model:value="stateMachine.technicalName" :label="$tc('sw-settings-state-machine.detail.fieldLabels.technicalName')" :disabled="true" required /> {% endblock %} </sw-container> </sw-card> {% endblock %} <sw-skeleton v-else /> {% block sw_settings_state_machine_detail_content_list %} <sw-settings-state-machine-state-list ref="stateMachineStateList" :state-machine-id="stateMachineId" /> {% endblock %} </sw-card-view> </template> {% endblock %} </sw-page> {% endblock %}`,{Component:s,Mixin:t}=Shopware,{mapPropertyErrors:i}=Shopware.Component.getComponentHelper(),n=s.wrapComponentConfig({template:a,compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],mixins:[t.getByName("notification"),t.getByName("placeholder"),t.getByName("discard-detail-page-changes")("stateMachine")],props:{stateMachineId:{type:String,required:!0}},shortcuts:{"SYSTEMKEY+S":{active(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},data(){return{stateMachine:null,isLoading:!1,isSaveSuccessful:!1}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){var e;return((e=this.stateMachine)==null?void 0:e.name)??""},stateMachineRepository(){return this.repositoryFactory.create("state_machine")},allowSave(){return this.acl.can("state_machine.editor")},tooltipSave(){return this.allowSave?{message:`${this.$device.getSystemKey()} + S`,appearance:"light"}:{message:this.$tc("sw-privileges.tooltip.warning"),showOnDisabledElements:!0}},tooltipCancel(){return{message:"ESC",appearance:"light"}},...i("stateMachine",["name"])},watch:{stateMachineId(){this.loadStateMachine()}},created(){this.createdComponent()},methods:{createdComponent(){this.loadStateMachine()},async loadStateMachine(){this.isLoading=!0;try{this.stateMachine=await this.stateMachineRepository.get(this.stateMachineId)}catch(e){this.createNotificationError({message:this.$tc(e.message)})}finally{this.isLoading=!1}},onChangeLanguage(){this.loadStateMachine(),this.$refs.stateMachineStateList.loadStateMachineStates()},onCancel(){this.$router.push({name:"sw.settings.state.machine.index"})},async onSave(){if(this.stateMachine!==null){this.isSaveSuccessful=!1,this.isLoading=!0;try{await this.stateMachineRepository.save(this.stateMachine),await this.loadStateMachine(),this.isSaveSuccessful=!0}catch{this.createNotificationError({message:this.$tc("sw-settings-state-machine.notification.errorMessage")})}finally{this.isLoading=!1}}}}});export{n as default};
