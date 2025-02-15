import{bs as K,bl as W,bt as D,bu as H,b6 as Y,b0 as J,b7 as Q,bp as X,aY as R,a as L,a$ as Z,ba as ee,b4 as te}from"./channel-Cvr-E4M4.js";import{r as ie}from"./_baseIteratee-BDDcCv4P.js";var f,F;function ne(){if(F)return f;F=1;var e=K(),t=W();function i(n,o){return n&&e(n,o,t)}return f=i,f}var m,x;function se(){if(x)return m;x=1;var e=D();function t(i,n){return function(o,s){if(o==null)return o;if(!e(o))return i(o,s);for(var c=o.length,r=n?c:-1,a=Object(o);(n?r--:++r<c)&&s(a[r],r,a)!==!1;);return o}}return m=t,m}var h,B;function oe(){if(B)return h;B=1;var e=ne(),t=se(),i=t(e);return h=i,h}var b,E;function ce(){if(E)return b;E=1;var e=oe(),t=D();function i(n,o){var s=-1,c=t(n)?Array(n.length):[];return e(n,function(r,a,u){c[++s]=o(r,a,u)}),c}return b=i,b}var q,N;function re(){if(N)return q;N=1;function e(t,i){var n=t.length;for(t.sort(i);n--;)t[n]=t[n].value;return t}return q=e,q}var v,$;function ae(){if($)return v;$=1;var e=H();function t(i,n){if(i!==n){var o=i!==void 0,s=i===null,c=i===i,r=e(i),a=n!==void 0,u=n===null,d=n===n,l=e(n);if(!u&&!l&&!r&&i>n||r&&a&&d&&!u&&!l||s&&a&&d||!o&&d||!c)return 1;if(!s&&!r&&!l&&i<n||l&&o&&c&&!s&&!r||u&&o&&c||!a&&c||!d)return-1}return 0}return v=t,v}var A,O;function le(){if(O)return A;O=1;var e=ae();function t(i,n,o){for(var s=-1,c=i.criteria,r=n.criteria,a=c.length,u=o.length;++s<a;){var d=e(c[s],r[s]);if(d){if(s>=u)return d;var l=o[s];return d*(l=="desc"?-1:1)}}return i.index-n.index}return A=t,A}var g,C;function j(){if(C)return g;C=1;var e=Y(),t=J(),i=ie(),n=ce(),o=re(),s=Q(),c=le(),r=X(),a=R();function u(d,l,P){l.length?l=e(l,function(p){return a(p)?function(_){return t(_,p.length===1?p[0]:p)}:p}):l=[r];var U=-1;l=e(l,s(i));var z=n(d,function(p,_,ge){var I=e(l,function(V){return V(p)});return{criteria:I,index:++U,value:p}});return o(z,function(p,_){return c(p,_,P)})}return g=u,g}var S,M;function ue(){if(M)return S;M=1;var e=j(),t=R();function i(n,o,s,c){return n==null?[]:(t(o)||(o=o==null?[]:[o]),s=c?void 0:s,t(s)||(s=s==null?[]:[s]),e(n,o,s))}return S=i,S}var de=ue();const pe=L(de);var k,G;function we(){if(G)return k;G=1;var e=Z(),t=j(),i=ee(),n=te(),o=i(function(s,c){if(s==null)return[];var r=c.length;return r>1&&n(s,c[0],c[1])?c=[]:r>2&&n(c[0],c[1],c[2])&&(c=[c[0]]),t(s,e(c,1),[])});return k=o,k}var _e=we();const T=L(_e),fe=`{% block sw_flow_sequence_action %} <div class="sw-flow-sequence-action" :class="actionClasses" > {% block sw_flow_sequence_action_card %} <div class="sw-flow-sequence-action__card"> {% block sw_flow_sequence_action_header %} <div class="sw-flow-sequence-action__header"> {% block sw_flow_sequence_action_title %} <div class="sw-flow-sequence-action__title-description"> <h3 class="sw-flow-sequence-action__title"> {{ $tc('sw-flow.detail.sequence.actionTitle') }} </h3> <p class="sw-flow-sequence-action__description"> {{ $tc('sw-flow.detail.sequence.actionDescription') }} </p> </div> {% endblock %} {% block sw_flow_sequence_action_context_menu %} <sw-context-button class="sw-flow-sequence-action__context-button" :class="actionClasses" :disabled="disabled" > {% block sw_flow_sequence_action_remove_action_container %} <sw-context-menu-item variant="danger" class="sw-flow-sequence-action__delete-action-container" @click="removeActionContainer" > {{ $tc('sw-flow.detail.sequence.contextButton.deleteActionContainer') }} </sw-context-menu-item> {% endblock %} </sw-context-button> {% endblock %} </div> {% endblock %} {% block sw_flow_sequence_action_content %} <div class="sw-flow-sequence-action__content"> {% block sw_flow_sequence_action_actions %} <div class="sw-flow-sequence-action__actions"> {% block sw_flow_sequence_action_actions_empty %} <div v-if="sequenceData.length === 1 && !sequence.actionName" class="sw-flow-sequence-action__actions-empty" > <sw-icon size="12px" name="regular-minus-xs" /> <span class="sw-flow-sequence-action__no-action"> {{ $tc('sw-flow.detail.sequence.noActions') }} </span> </div> {% endblock %} {% block sw_flow_sequence_action_actions_list %} <ul v-else class="sw-flow-sequence-action__action-list" > {% block sw_flow_sequence_action_actions_transition_group %} <transition-group name="list" tag="div" > {% block sw_flow_sequence_action_actions_item %} <li v-for="(item, key) in sequenceData" :key="item.id" v-tooltip="{ message: $tc('sw-flow.actions.tooltipActionDisabled'), disabled: !item.disabled }" class="sw-flow-sequence-action__action-item" :class="{'sw-flow-sequence-action__disabled': item.disabled}" role="button" tabindex="0" @click="(event) => onEditAction(item, event.target, key)" @keydown.enter="(event) => onEditAction(item, event.target, key)" > <sw-flow-sequence-action-error v-if="!isValidAction(item.actionName)" :sequence="item" > <template #content> <div class="sw-flow-sequence-action__error-action"> <div class="sw-flow-sequence-action__error-action-title"> <sw-icon name="regular-question-circle-s" size="14px" class="sw-icon-action" /> {{ $tc('sw-flow.actions.unknownLabel') }} </div> <p> {{ $tc('sw-flow.actions.warningText') }} </p> </div> </template> </sw-flow-sequence-action-error> <div v-else> {% block sw_flow_sequence_action_actions_item_header %} <div class="sw-flow-sequence-action__action-header"> <div class="sw-flow-sequence-action__action-icon"> <sw-icon v-if="!item.iconRaw" :name="\`\${item.icon}\`" size="12px" class="sw-icon-action" /> <img v-else class="sw-flow-sequence-action__icon-raw sw-icon" :src="\`data:image/png;base64, \${item.iconRaw}\`" alt="" > </div> {% block sw_flow_sequence_action_actions_item_name %} <div class="sw-flow-sequence-action__action-name"> <h3>{{ item.label }}</h3> </div> {% endblock %} {% block sw_flow_sequence_action_actions_item_context_button %} <sw-context-button ref="contextButton" class="sw-flow-sequence-action__context-button" :disabled="disabled || item.disabled" > {% block sw_flow_sequence_action_actions_item_button_edit %} <sw-context-menu-item v-if="isNotStopFlow(item)" class="sw-flow-sequence-action__edit-action" @click="(event) => onEditAction(item, event.target, key)" > {{ $tc('sw-flow.actions.contextButton.editAction') }} </sw-context-menu-item> {% endblock %} {% block sw_flow_sequence_action_actions_item_button_delete %} <sw-context-menu-item variant="danger" class="sw-flow-sequence-action__delete-action" @click="removeAction(item.id)" > {{ $tc('sw-flow.actions.contextButton.deleteAction') }} </sw-context-menu-item> {% endblock %} {% block sw_flow_sequence_action_actions_item_button_move_up %} <sw-context-menu-item v-if="showMoveOption(item, 'up')" class="sw-flow-sequence-action__move-up" @click="moveAction(item, 'up', key)" > {{ $tc('sw-flow.actions.contextButton.moveUpAction') }} </sw-context-menu-item> {% endblock %} {% block sw_flow_sequence_action_actions_item_button_move_down %} <sw-context-menu-item v-if="showMoveOption(item, 'down')" class="sw-flow-sequence-action__move-down" @click="moveAction(item, 'down', key)" > {{ $tc('sw-flow.actions.contextButton.moveDownAction') }} </sw-context-menu-item> {% endblock %} </sw-context-button> {% endblock %} </div> {% endblock %} </div> {% block sw_flow_sequence_action_actions_item_description %} <div class="sw-flow-sequence-action__action-description" v-html="getActionDescriptions(item)" > </div> {% endblock %} {% block sw_flow_sequence_action_item_custom %} {% endblock %} </li> {% endblock %} </transition-group> {% endblock %} </ul> {% endblock %} </div> {% endblock %} {% block sw_flow_sequence_action_add_select %} <div v-if="showAddAction && !disabled" class="sw-flow-sequence-action__select" > {% block sw_flow_sequence_action_list %} <sw-grouped-single-select class="sw-flow-sequence-action__selection-action" size="small" value="" :placeholder="$tc('sw-flow.actions.placeholderSelectAction')" :options="actionOptions" :groups="groups" :popover-classes="['sw-flow-sequence-action__popover']" :error="fieldError" :disabled="isUnknownTrigger" @update:value="openDynamicModal" > <template #result-item="{ item, index, labelProperty, highlightSearchTerm, isSelected, setValue, getKey }"> <sw-select-result v-tooltip="{ message: $tc('sw-flow.actions.tooltipActionDisabled'), disabled: !item.disabled }" :selected="isSelected(item)" v-bind="{ item, index }" :class="[stopFlowStyle(item.value), {'sw-flow-sequence-action__disabled': item.disabled}]" @item-select="setValue" > {% block sw_flow_sequence_action_select_results_list_result_label %} <sw-icon v-if="!item.iconRaw" :name="\`\${item.icon}\`" size="12px" class="sw-icon-action" /> <img v-else class="sw-flow-sequence-action__icon-raw" :src="\`data:image/png;base64, \${item.iconRaw}\`" alt="" > <sw-highlight-text v-if="highlightSearchTerm" :text="getKey(item, labelProperty)" /> <template v-else> {{ getKey(item, labelProperty) }} </template> {% endblock %} </sw-select-result> </template> </sw-grouped-single-select> {% endblock %} </div> {% endblock %} </div> {% endblock %} </div> {% endblock %} <div v-if="errorArrow" class="sw-flow-sequence-action__true-arrow" > <div class="sw-flow-sequence-action__true-line"></div> <div class="sw-flow-sequence-action__oval"></div> <sw-icon name="regular-chevron-right-s" small /> </div> {% block sw_flow_sequence_action_modal %} <sw-flow-sequence-modal :sequence="currentSequence" :action="selectedAction" :modal-name="modalName" @process-finish="onSaveActionSuccess" @modal-close="onCloseModal" /> {% endblock %} </div> {% endblock %}`,{Component:me,Store:w,Mixin:he}=Shopware,y=Shopware.Utils,{cloneDeep:be}=y.object,{ShopwareError:qe}=Shopware.Classes,{mapState:ve}=me.getComponentHelper(),{snakeCase:Ae}=y.string,ye={template:fe,inject:["repositoryFactory","flowBuilderService","feature"],mixins:[he.getByName("sw-inline-snippet")],props:{sequence:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1},isUnknownTrigger:{type:Boolean,required:!1,default:!1}},data(){return{fieldError:null,selectedAction:"",currentSequence:{},appFlowActions:[],isAppAction:!1}},computed:{sequenceRepository(){return this.repositoryFactory.create("flow_sequence")},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},actionOptions(){const e=this.availableActions.map(t=>this.getActionTitle(t));return this.sortActionOptions(e)},groups(){var t,i,n,o;const e=this.actionGroups.map(s=>({id:s,label:this.$tc(`sw-flow.actions.group.${s}`)}));if((t=this.appActions)!=null&&t.length){const s=this.appActions[0];this.actionGroups.find(r=>{var a;return r===((a=s==null?void 0:s.app)==null?void 0:a.name)})||e.unshift({id:`${(i=s==null?void 0:s.app)==null?void 0:i.name[0].toLowerCase()}${(n=s==null?void 0:s.app)==null?void 0:n.name.slice(1)}`,label:(o=s==null?void 0:s.app)==null?void 0:o.label})}return T(e,["label"])},sequenceData(){return this.sequence.id?[{...this.sequence,...this.getActionTitle(this.sequence.actionName)}]:this.sortByPosition(Object.values(this.sequence).map(e=>({...e,...this.getActionTitle(e.actionName)})))},showAddAction(){return!(this.sequence.actionName===this.stopFlowActionName||this.sequenceData.some(e=>e.actionName===this.stopFlowActionName))},stopFlowActionName(){return this.flowBuilderService.getActionName("STOP_FLOW")},actionClasses(){return{"is--stop-flow":!this.showAddAction,"has--arrow":this.errorArrow}},errorArrow(){return!this.isValidAction(this.sequence)&&this.sequence.actionName&&this.sequence.trueBlock},modalName(){return this.getSelectedAppAction(this.selectedAction)?"sw-flow-app-action-modal":this.flowBuilderService.getActionModalName(this.selectedAction)},currentLocale(){return Shopware.Store.get("session").currentLocale},...ve(()=>w.get("swFlow"),["invalidSequences","stateMachineState","documentTypes","mailTemplates","customerGroups","customFieldSets","customFields","triggerEvent","triggerActions","availableActions","actionGroups","sequences","appActions","getSelectedAppAction"])},watch:{sequence:{handler(){this.setFieldError()}}},methods:{openDynamicModal(e){const t=this.getSelectedAppAction(e);if(t&&(this.isAppAction=!0,this.currentSequence.propsAppFlowAction=t),e===this.stopFlowActionName){this.addAction({name:this.stopFlowActionName,config:null});return}this.selectedAction=e},onSaveActionSuccess(e){const{config:t,id:i}=e;let n=t==null?void 0:t.entity,o=this.selectedAction;const s=this.flowBuilderService.mapActionType(this.selectedAction);s&&n&&(n=Ae(n).replace("_","."),o=s.replace("entity",n)),i?this.editAction({name:o,config:t}):this.addAction({name:o,config:t}),this.onCloseModal()},onCloseModal(){this.currentSequence={},this.selectedAction="",this.isAppAction=!1,delete this.sequence.propsAppFlowAction},addAction(e){if(!e.name)return;const t=this.getSelectedAppAction(e.name);if(!this.sequence.actionName&&this.sequence.id){const i={id:this.sequence.id,actionName:e.name,config:e.config};t&&(i.appFlowActionId=t.id),w.get("swFlow").updateSequence(i)}else{const i=this.sequenceData[this.sequenceData.length-1];let n=this.sequenceRepository.create();const o={...n,parentId:i.parentId,trueCase:i.trueCase,displayGroup:i.displayGroup,ruleId:null,actionName:e.name,position:i.position+1,config:e.config,id:y.createId()};t&&(o.appFlowActionId=t.id),n=Object.assign(n,o),w.get("swFlow").addSequence(n)}this.removeFieldError()},editAction(e){e.name&&w.get("swFlow").updateSequence({id:this.currentSequence.id,actionName:e.name,config:e.config})},removeAction(e){var i;const t=this.sequences.find(n=>n.id===e);t!=null&&t.id&&this.sequences.filter(o=>o.parentId===t.parentId&&o.trueCase===t.trueCase&&o.id!==e).forEach((o,s)=>{w.get("swFlow").updateSequence({id:o.id,position:s+1})}),!this.isAppDisabled(this.getSelectedAppAction((i=this.sequence[e])==null?void 0:i.actionName))&&w.get("swFlow").removeSequences([e])},actionsWithoutStopFlow(){if(this.sequence.id)return[{...this.sequence}];const e=Object.values(this.sequence);return this.sortByPosition(e.filter(t=>t.actionName!==this.stopFlowActionName))},showMoveOption(e,t){const i=this.actionsWithoutStopFlow();return i.length<=1||t==="up"&&i[0].position===e.position||t==="down"&&i[i.length-1].position===e.position?!1:e.actionName!==this.stopFlowActionName},moveAction(e,t,i){if(this.isAppDisabled(this.getSelectedAppAction(e.actionName)))return;const n=this.actionsWithoutStopFlow(),o=n.findIndex(u=>u.position===e.position),s=t==="up"?n[o-1]:n[o+1],c=be(s);w.get("swFlow").updateSequence({id:s.id,position:e.position}),w.get("swFlow").updateSequence({id:e.id,position:c.position});const r=t==="up"?i-1:i+1,a=this.$refs.contextButton;[a[i],a[r]]=[a[r],a[i]]},onEditAction(e,t,i){e.actionName&&e.actionName===this.stopFlowActionName||this.hasAvailableAction(e.actionName)&&(!(e!=null&&e.actionName)||!t||this.$refs.contextButton[i]&&this.$refs.contextButton[i].$el.contains(t)||this.isAppDisabled(this.getSelectedAppAction(e.actionName))||(e.propsAppFlowAction=this.getSelectedAppAction(e.actionName),this.currentSequence=e,this.selectedAction=e.actionName))},removeActionContainer(){const e=this.sequence.id?[this.sequence.id]:Object.keys(this.sequence);w.get("swFlow").removeSequences(e)},getActionTitle(e){var n,o,s,c;if(!e)return null;const t=this.getSelectedAppAction(e);if(t)return{label:t.label||((n=t.translated)==null?void 0:n.label),icon:t.swIcon,iconRaw:t.icon,value:t.name,disabled:!((o=t.app)!=null&&o.active),group:`${(s=t.app)==null?void 0:s.name[0].toLowerCase()}${(c=t.app)==null?void 0:c.name.slice(1)}`};const i=this.flowBuilderService.getActionTitle(e);return{...i,label:this.$tc(i.label),group:this.flowBuilderService.getActionGroupMapping(e)}},sortByPosition(e){return e.sort((t,i)=>t.position-i.position)},stopFlowStyle(e){return{"is--stop-flow":e===this.stopFlowActionName}},getActionDescriptions(e){if(!e.actionName)return"";const t={appActions:this.appActions,customerGroups:this.customerGroups,customFieldSets:this.customFieldSets,customFields:this.customFields,stateMachineState:this.stateMachineState,documentTypes:this.documentTypes,mailTemplates:this.mailTemplates};return this.flowBuilderService.getActionDescriptions(t,e,this)},setFieldError(){var e;if(!((e=this.invalidSequences)!=null&&e.includes(this.sequence.id))){this.fieldError=null;return}this.fieldError=new qe({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})},removeFieldError(){var e;this.fieldError&&(this.fieldError=null,w.get("swFlow").invalidSequences=(e=this.invalidSequences)==null?void 0:e.filter(t=>this.sequence.id!==t))},isNotStopFlow(e){return e.actionName!==this.stopFlowActionName},capitalize(e){return`${e.slice(0,1).toUpperCase()}${e.slice(1)}`},isAppDisabled(e){return e?!e.app.active:!1},getStopFlowIndex(e){return e.map((i,n)=>i.group===this.flowBuilderService.getGroup("GENERAL")?n:!1).filter(i=>i>0).pop()||e.length},sortActionOptions(e){const t=e.pop();e=pe(e,["group","label"]),e.forEach(n=>{n.group&&n.group!==this.flowBuilderService.getGroup("GENERAL")||(n.group=n.group||this.flowBuilderService.getGroup("GENERAL"),e.push(e.splice(e.findIndex(o=>o.group===this.flowBuilderService.getGroup("GENERAL")),1)[0]))}),e=T(e,["group","label"],["esc","esc"]);const i=this.getStopFlowIndex(e)+1;return e.splice(i,0,t),e},hasAvailableAction(e){return this.availableActions.includes(e)},isValidAction(e){return e&&this.hasAvailableAction(e)}}};export{ye as default};
