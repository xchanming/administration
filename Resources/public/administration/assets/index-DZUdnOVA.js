const e='{% block sw_wizard_page %} <div v-if="isCurrentlyActive" class="sw-wizard-page" > <slot> {% block sw_wizard_page_slot_default %}{% endblock %} </slot> </div> {% endblock %}',{Component:t}=Cicada;t.register("sw-wizard-page",{template:e,compatConfig:Cicada.compatConfig,inject:["feature","swWizardPageAdd","swWizardPageRemove"],props:{isActive:{type:Boolean,required:!1,default(){return!1}},title:{type:String,required:!1,default(){return""}},position:{type:Number,required:!1,default(){return 0}}},data(){return{isCurrentlyActive:this.isActive,modalTitle:this.title}},created(){this.createdComponent()},unmounted(){this.destroyedComponent()},methods:{createdComponent(){this.isCompatEnabled("INSTANCE_CHILDREN")?this.$parent.$parent.$parent.$emit("page-add",this):this.swWizardPageAdd(this)},destroyedComponent(){this.isCompatEnabled("INSTANCE_CHILDREN")?this.$parent.$parent.$parent.$emit("page-remove",this):this.swWizardPageRemove(this)}}});
//# sourceMappingURL=index-DZUdnOVA.js.map
