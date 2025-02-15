const s=`{% block sw_flow_detail_flow %} <div class="sw-flow-detail-flow"> {% block sw_flow_detail_flow_content %} <div class="sw-flow-detail-flow__content" :class="{'sw-flow-detail-flow-template': isTemplate }" :style="flowContainerStyle" > <sw-alert v-if="isUnknownTrigger" variant="warning" class="sw-flow-detail-flow__warning-unknow-trigger" > <p>{{ $tc('sw-flow.flowNotification.messageUnknownTriggerWarning') }}</p> <p>{{ $tc('sw-flow.flowNotification.textIntroduce') }}</p> <ul> <li>{{ $tc('sw-flow.flowNotification.textGuide1') }}</li> <li>{{ $tc('sw-flow.flowNotification.textGuide2') }}</li> <li>{{ $tc('sw-flow.flowNotification.textGuide3') }}</li> </ul> </sw-alert> <sw-alert v-if="!isLoading && !isUnknownTrigger && showActionWarning " variant="warning" class="sw-flow-detail-flow__warning-box" > {{ $tc('sw-flow.detail.warningText') }} </sw-alert> {% block sw_flow_detail_trigger_card %} <div class="sw-flow-detail-flow__trigger-card"> {% block sw_flow_detail_flow_trigger_select %} <div class="sw-flow-detail-flow__trigger-select"> {% block sw_flow_detail_flow_single_select %} <sw-flow-trigger :disabled="!acl.can('flow.editor')" :event-name="flow.eventName" :is-unknown-trigger="isUnknownTrigger" @option-select="onEventChange" /> {% endblock %} </div> {% endblock %} {% block sw_flow_detail_flow_trigger_explains %} <div v-if="!flow.eventName" class="sw-flow-detail-flow__trigger-explain" > {% block sw_flow_detail_flow_trigger_explains_title %} <h4>{{ $tc('sw-flow.detail.trigger.title') }}</h4> {% endblock %} {% block sw_flow_detail_flow_trigger_explains_help_text %} <p v-html="$tc('sw-flow.detail.trigger.helpText')"></p> {% endblock %} </div> {% endblock %} </div> {% endblock %} {% block sw_flow_detail_flow_sequence_diagram %} <div v-if="flow.eventName" class="sw-flow-detail-flow__sequence-diagram" > {% block sw_flow_detail_flow_start_line %} <div class="sw-flow-detail-flow__oval"></div> {% endblock %} {% block sw_flow_detail_flow_transition_group %} <transition-group name="list" tag="div" > {% block sw_flow_detail_flow_position %} <div v-for="sequence in formatSequences" :key="getSequenceId(sequence)" class="sw-flow-detail-flow__position list-item" > {% block sw_flow_sequence_icon_plus %} <div class="sw-flow-detail-flow__position-plus" :disabled="!acl.can('flow.editor')" role="button" tabindex="0" @click="onAddRootSequence" @keydown.enter="onAddRootSequence" > <sw-icon small name="regular-plus-xs" /> </div> {% endblock %} {% block sw_flow_sequence_icon_connection %} <div class="sw-flow-detail-flow__position-connection"> <sw-icon small name="regular-chevron-right-s" /> </div> {% endblock %} {% block sw_flow_detail_flow_sequences %} <div class="sw-flow-detail-flow__sequences" > <sw-flow-sequence name="root-sequence" :sequence="sequence" :disabled="!acl.can('flow.editor')" :is-unknown-trigger="isUnknownTrigger" /> </div> {% endblock %} </div> {% endblock %} </transition-group> {% endblock %} </div> {% endblock %} </div> {% endblock %} {% block sw_flow_detail_flow_modal_extension %} {% endblock %} </div> {% endblock %}`,{Component:r,Store:i}=Shopware,a=Shopware.Utils,{cloneDeep:c}=Shopware.Utils.object,{mapState:w}=r.getComponentHelper(),d={template:s,inject:["repositoryFactory","acl","flowActionService","ruleConditionDataProviderService"],props:{isLoading:{type:Boolean,required:!1,default:!1},isNewFlow:{type:Boolean,required:!1,default:!1},isTemplate:{type:Boolean,required:!1,default:!1},isUnknownTrigger:{type:Boolean,required:!1,default:!1}},data(){return{flowContainerStyle:null}},computed:{sequenceRepository(){return this.repositoryFactory.create("flow_sequence")},formatSequences(){return this.convertSequenceData()},rootSequences(){return this.sequences.filter(e=>!e.parentId)},showActionWarning(){return!this.triggerActions.length||!this.sequences.length?!1:this.sequences.some(e=>{const{actionName:o,_isNew:t,ruleId:l}=e;return!o&&l?!1:!t&&!this.hasAvailableAction(o)})},...w(()=>i.get("swFlow"),["flow","triggerActions","sequences","availableActions","hasAvailableAction"])},watch:{rootSequences:{handler(e){if(this.flow.eventName&&!e.length){const o=this.createSequence();i.get("swFlow").addSequence(o)}},immediate:!0},sequences:{handler(){const e=document.getElementsByName("root-sequence");let o=0;this.$nextTick(()=>{if(Array.from(e).forEach(t=>{o=t.offsetWidth>o?t.offsetWidth:o}),o<=870){this.flowContainerStyle=null;return}if(o>870&&o<=1300){this.flowContainerStyle={"max-width":"1300px"};return}this.flowContainerStyle={"max-width":"100%"}})},immediate:!0}},created(){this.createdComponent()},methods:{createdComponent(){var e;(e=this.triggerActions)!=null&&e.length||this.getTriggerActions()},getTriggerActions(){return this.flowActionService.getActions().then(e=>{i.get("swFlow").triggerActions=e})},convertSequenceData(){if(!this.sequences)return[];const o=c(this.sequences).reduce((t,l)=>(Array.isArray(t[l.displayGroup])||(t[l.displayGroup]=[]),t[l.displayGroup].push(l),t),{});return Object.values(o).reduce((t,l)=>{const n=this.convertToTreeData(l);return n&&t.push(n),t},[])},convertToTreeData(e){let o=null;return e.forEach(t=>{if(!t.parentId){o=t.actionName===null?t:{...o,[t.id]:t};return}const l=e.findIndex(n=>n.id===t.parentId);e[l]&&(t.trueCase?e[l].trueBlock={...e[l].trueBlock,[t.id]:t}:e[l].falseBlock={...e[l].falseBlock,[t.id]:t})}),o},createSequence(){let e=this.sequenceRepository.create();const o={...e,parentId:null,ruleId:null,actionName:null,config:{},position:1,displayGroup:1,id:a.createId()};return e=Object.assign(e,o),e},onEventChange(e){if(i.get("swFlow").setEventName(e),Shopware.Store.get("error").removeApiError(`flow.${this.flow.id}.eventName`),!this.rootSequences.length){const o=this.createSequence();i.get("swFlow").addSequence(o)}},onAddRootSequence(){if(!this.acl.can("flow.editor"))return;const e=this.createSequence();e.position=1,e.displayGroup=this.rootSequences[this.rootSequences.length-1].displayGroup+1,i.get("swFlow").addSequence(e)},getSequenceId(e){return e.id?e.displayGroup:Object.values(e)[0].displayGroup}}};export{d as default};
