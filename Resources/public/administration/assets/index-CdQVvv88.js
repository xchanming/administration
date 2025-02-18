const r=`{% block sw_order_state_card_entry %} <div class="sw-order-state-history-card-entry"> {% block sw_order_state_card_entry_headline %} <div> <h2 v-if="title"> {{ title }} </h2> </div> {% endblock %} {% block sw_order_state_card_entry_history %} <div v-for="(entry, index) in history" :key="index" class="sw-order-state-card__history-entry" :class="\`sw-order-state-history__entry--\${index}\`" > {% block sw_order_state_card_entry_icon %} <sw-label appearance="circle" :class="getBackgroundColorFromState(entry.state.technicalName)" > <sw-icon :name="getIconFromState(entry.state.technicalName)" :class="getIconColorFromState(entry.state.technicalName)" size="16" /> </sw-label> {% endblock %} {% block sw_order_state_card_entry_description %} <span class="sw-order-state-card__text">{{ entry.state.translated.name }}</span> {% endblock %} {% block sw_order_state_card_entry_date %} <span v-tooltip="{ showDelay: 300, message:userDisplayName(entry.user) }" class="sw-order-state-card__date" > {{ dateFilter(entry.createdAt, { hour: '2-digit', minute: '2-digit' }) }} </span> {% endblock %} </div> {% endblock %} {% block sw_order_state_card_entry_state_select %} <sw-order-state-select :transition-options="transitionOptions" :disabled="disabled" v-bind="$attrs" /> {% endblock %} </div> {% endblock %}`,a={template:r,inject:["stateStyleDataProviderService"],props:{history:{type:Array,required:!0},transitionOptions:{type:Array,required:!0},stateMachineName:{type:String,required:!0},title:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1}},computed:{dateFilter(){return Shopware.Filter.getByName("date")}},methods:{userDisplayName(e){let t="";return e===null?t=this.$tc("sw-order.stateCard.labelSystemUser"):t=e.username,`${this.$tc("sw-order.stateCard.labelLastEditedBy")} ${t}`},getIconFromState(e){return this.stateStyleDataProviderService.getStyle(this.stateMachineName,e).icon},getIconColorFromState(e){return this.stateStyleDataProviderService.getStyle(this.stateMachineName,e).iconStyle},getBackgroundColorFromState(e){return this.stateStyleDataProviderService.getStyle(this.stateMachineName,e).iconBackgroundStyle}}};export{a as default};
