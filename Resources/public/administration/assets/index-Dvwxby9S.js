const n=`{% block sw_condition_and_container %} <div class="sw-condition-or-container" :class="containerRowClass" > {% block sw_condition_or_container_children %} <template v-for="(child, index) in condition[childAssociationField]" :key="\`condition-or-container-child--\${index}\`" > <div v-if="index > 0" class="condition-content__spacer--or" > {{ $tc('global.sw-condition.condition.or') }} </div> <sw-condition-tree-node :parent-condition="condition" :condition="child" :disabled="disabled || undefined" :level="level + 1" /> </template> {% endblock %} {% block sw_condition_or_container_actions %} <div class="sw-condition-or-container__actions"> <sw-button v-tooltip.top="getNoPermissionsTooltip('product_stream.editor')" variant="ghost" size="small" class="sw-condition-or-container__actions--or" :disabled="disabled" @click="onAddPlaceholder" > {{ $tc('global.sw-condition.condition.AddOrCondition') }} </sw-button> <sw-button v-if="level !== 0" v-tooltip.top="getNoPermissionsTooltip('product_stream.editor')" variant="ghost" size="small" class="sw-condition-or-container__actions--sub" :disabled="disabled" @click="onAddAndContainer" > {{ $tc('global.sw-condition.condition.AddSubCondition') }} </sw-button> <sw-button v-tooltip.top="getNoPermissionsTooltip('product_stream.editor')" size="small" class="sw-condition-or-container__actions--delete" :disabled="disabled" @click="onDeleteAll" > <span v-if="level !== 0">{{ $tc('global.sw-condition.condition.deleteConditions') }}</span> <span v-else>{{ $tc('global.sw-condition.condition.deleteAllConditions') }}</span> </sw-button> </div> {% endblock %} </div> {% endblock %}`,{Component:t,Mixin:e}=Shopware;t.register("sw-condition-or-container",{template:n,inject:["acl"],mixins:[e.getByName("ruleContainer")],created(){this.createdComponent()},methods:{createdComponent(){this.nextPosition===0&&this.onAddPlaceholder()},onAddPlaceholder(){if(this.level===0){this.onAddAndContainer();return}this.insertNodeIntoTree(this.condition,this.createCondition(this.conditionDataProviderService.getPlaceholderData(),this.condition.id,this.nextPosition))},onAddAndContainer(){const i=this.createCondition(this.conditionDataProviderService.getAndContainerData(),this.condition.id,this.nextPosition);this.insertNodeIntoTree(this.condition,i),this.condition[this.childAssociationField].length===2&&this.condition[this.childAssociationField][0].type===null&&this.removeNodeFromTree(this.condition,this.condition[this.childAssociationField][0])},onDeleteAll(){if(this.level===0){for(;this.condition[this.childAssociationField].length>0;)this.removeNodeFromTree(this.condition,this.condition[this.childAssociationField][0]);return}this.removeNodeFromTree(this.parentCondition,this.condition)},getNoPermissionsTooltip(i,o=!0){return{showDelay:300,message:this.$tc("sw-privileges.tooltip.warning"),appearance:"dark",showOnDisabledElements:o,disabled:this.acl.can(i)}}}});
