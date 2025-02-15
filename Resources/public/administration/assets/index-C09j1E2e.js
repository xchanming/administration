const e=`{% block sw_inheritance_switch %} <div class="sw-inheritance-switch" :class="{ 'sw-inheritance-switch--disabled': disabled, 'sw-inheritance-switch--is-inherited': isInherited, 'sw-inheritance-switch--is-not-inherited': !isInherited, }" > {% block sw_inheritance_switch_inherit_icon %} <sw-icon v-if="isInherited" key="inherit-icon" v-tooltip="{ message: $tc('global.sw-field.tooltipRemoveInheritance'), disabled: disabled }" name="regular-link-horizontal" size="16px" @click="onClickRemoveInheritance" /> {% endblock %} {% block sw_inheritance_switch_uninherit_icon %} <sw-icon v-else key="uninherit-icon" v-tooltip="{ message: $tc('global.sw-field.tooltipRestoreInheritance'), disabled: disabled }" :class="unInheritClasses" name="regular-link-horizontal-slash" size="16px" @click="onClickRestoreInheritance" /> {% endblock %} </div> {% endblock %}`,{Component:i}=Shopware;i.register("sw-inheritance-switch",{template:e,inject:{restoreInheritanceHandler:{from:"restoreInheritanceHandler",default:null},removeInheritanceHandler:{from:"removeInheritanceHandler",default:null}},emits:["inheritance-restore","inheritance-remove"],props:{isInherited:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!1,default:!1}},computed:{unInheritClasses(){return{"is--clickable":!this.disabled}}},methods:{onClickRestoreInheritance(){this.disabled||(this.$emit("inheritance-restore"),this.restoreInheritanceHandler&&this.restoreInheritanceHandler())},onClickRemoveInheritance(){this.disabled||(this.$emit("inheritance-remove"),this.removeInheritanceHandler&&this.removeInheritanceHandler())}}});
