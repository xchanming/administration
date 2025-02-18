const n='{% block sw_tree_item %} <div class="sw-tree-item" :class="styling" role="treeitem" :aria-label="getName(item)" :tabindex="active ? 0 : -1" :aria-current="active ? \'page\' : undefined" :aria-expanded="isOpened ? \'true\' : \'false\'" :data-item-id="item.id" :aria-owns="item.id" :aria-selected="checked" > {% block sw_tree_item_element %} <div v-droppable="{ dragGroup: \'sw-tree-item\', data: item }" v-draggable="dragConf" class="sw-tree-item__element" > {% block sw_tree_item_element_leaf_icon %} <div v-if="item.childCount <= 0" class="sw-tree-item__leaf" ></div> {% endblock %} {% block sw_tree_item_element_toggle %} <div v-else class="sw-tree-item__toggle" role="button" tabindex="0" :aria-label="$t(\'sw-tree-item.toggleTreeItem\', { name: getName(item) })" :aria-expanded="opened ? \'true\' : \'false\'" @click="openTreeItem(); getTreeItemChildren(item)" @keydown.enter="openTreeItem(); getTreeItemChildren(item)" > {% block sw_tree_item_element_toggle_icon %} <mt-icon size="24px" :name="opened ? \'regular-chevron-down-xxs\' : \'regular-chevron-right-xxs\'" /> {% endblock %} </div> {% endblock %} {% block sw_tree_item_element_selection %} <div class="sw-tree-item__selection"> <sw-checkbox-field v-if="displayCheckbox" :disabled="currentEditElement === item.data.id" :ghost-value="checkedGhost" :value="checked" :aria-label="$t(\'sw-tree-item.toggleItem\', { name: getName(item) })" @update:value="toggleItemCheck($event, item)" /> </div> {% endblock %} {% block sw_tree_item_element_grip %} <slot name="grip"> <div v-if="item.childCount > 0" class="sw-tree-item__icon" > <mt-icon v-if="opened" name="regular-folder-open" size="16px" /> <mt-icon v-else name="regular-folder" size="16px" /> </div> <div v-else class="sw-tree-item__icon" > <mt-icon name="regular-circle-xxs" size="24px" /> </div> </slot> {% endblock %} {% block sw_tree_item_element_content %} <div ref="item" v-tooltip="{ message: item.disabledToolTipText, disabled: !item.disabledToolTipText, }" class="sw-tree-item__content" > <slot name="content" v-bind="{ item, openTreeItem, getName }" > {% block sw_tree_items_item_content_edit %} <template v-if="currentEditElement === item.data.id"> <sw-confirm-field v-model="item.data.name" class="sw-tree-detail__edit-tree-item" :prevent-empty-submit="true" :placeholder="$tc(`${translationContext}.general.buttonCreate`)" @input="onFinishNameingElement" @blur="onBlurTreeItemInput(item)" @submit-cancel="onCancelSubmit(item)" /> </template> {% endblock %} {% block sw_tree_items_item_content_default %} <template v-else> <a v-if="onChangeRoute" class="tree-link" :href="showItemUrl(item)" @click.prevent="onChangeRoute(item)" > <span class="sw-tree-item__label">{{ getName(item) }}</span> </a> <span v-else class="sw-tree-item__label" >{{ getName(item) }}</span> </template> {% endblock %} </slot> </div> {% endblock %} {% block sw_tree_item_element_actions %} <div class="sw-tree-item__actions"> {% block sw_tree_items_active_state %} <mt-icon v-if="shouldShowActiveState" size="6px" :color="getActiveIconColor(item)" name="solid-circle-xxxs" /> {% endblock %} <slot name="actions" :item="item" :open-tree-item="openTreeItem" :add-element="addElement" :add-sub-element="addSubElement" :on-duplicate="onDuplicate" :on-change-route="onChangeRoute" :delete-element="deleteElement" :tool-tip="toolTip" :is-disabled="isDisabled" > <sw-context-button v-tooltip="toolTip" class="sw-tree-item__context_button" :disabled="isDisabled || undefined" > {% block sw_tree_items_actions_without_position %} <sw-context-menu-item v-if="allowCreateWithoutPosition" class="sw-tree-item__without-position-action" @click="addElement(item)" > {{ $tc(`${translationContext}.general.actions.withoutPosition`) }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_actions_before %} <sw-context-menu-item v-if="!allowCreateWithoutPosition" :disabled="!allowNewCategories || undefined" class="sw-tree-item__before-action" @click="addElement(item, \'before\')" > {{ $tc(`${translationContext}.general.actions.createBefore`) }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_actions_after %} <sw-context-menu-item v-if="!allowCreateWithoutPosition" :disabled="!allowNewCategories || undefined" class="sw-tree-item__after-action" @click="addElement(item, \'after\')" > {{ $tc(`${translationContext}.general.actions.createAfter`) }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_actions_sub %} <sw-context-menu-item v-if="!allowCreateWithoutPosition" :disabled="!allowNewCategories || undefined" class="sw-tree-item__sub-action" @click="addSubElement(item); openTreeItem(true)" > {{ $tc(`${translationContext}.general.actions.createSub`) }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_actions_duplicate %} <sw-context-menu-item v-if="allowDuplicate" class="sw-context-menu__duplicate-action" @click="onDuplicate(item)" > {{ $tc(`global.default.duplicate`) }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_actions_group %} <div class="sw-context-menu__group"> {% block sw_tree_items_actions_edit %} <sw-context-menu-item @click="onChangeRoute(item)"> {{ $tc(\'global.default.edit\') }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_actions_delete %} <sw-context-menu-item class="sw-context-menu__group-button-delete" :disabled="!allowDeleteCategories || undefined" variant="danger" @click="deleteElement(item)" > {{ $tc(\'global.default.delete\') }} </sw-context-menu-item> {% endblock %} </div> {% endblock %} </sw-context-button> </slot> </div> {% endblock %} </div> {% endblock %} {# ToDO: Repeat statt duplicated Content #} {% block sw_tree_item_children_transition %} <transition name="fade"> {% block sw_tree_item_children_content %} <div v-if="isOpened && item.children.length > 0" :id="item.id" class="sw-tree-item__children" role="group" :aria-label="$tc(`sw-tree-item.childrenLabel`, { name: getName(item) })" > {% block sw_tree_item_children_items %} <sw-tree-item v-for="child in item.children" :key="child.id" :item="child" :dragged-item="draggedItem" :new-element-id="newElementId" :translation-context="translationContext" :on-change-route="onChangeRoute" :active-parent-ids="activeParentIds" :active-item-ids="activeItemIds" :mark-inactive="markInactive" :sortable="sortable" :should-focus="shouldFocus" :active-focus-id="activeFocusId" :display-checkbox="displayCheckbox" :disable-context-menu="disableContextMenu" :get-is-highlighted="getIsHighlighted" @check-item="emitCheckedItem" > {% block sw_tree_item_children_items_slots %} <template #content="{ item, openTreeItem, getName: innerGetName }"> {% block sw_tree_item_children_items_slot_content %} <sw-vnode-renderer v-if="contentSlot" :node="renderContentSlotNode({ item, openTreeItem, getName })" /> {% block sw_tree_item_children_items_slot_content_default_block %} <template v-else> {% block sw_tree_item_children_items_slot_content_edit %} <template v-if="currentEditElement === item.data.id"> <sw-confirm-field v-model="item.data.name" class="sw-tree-detail__edit-tree-item" :prevent-empty-submit="true" :placeholder="$tc(`${translationContext}.general.buttonCreate`)" @input="onFinishNameingElement" @blur="onBlurTreeItemInput(item)" @submit-cancel="onCancelSubmit(item)" /> </template> {% endblock %} {% block sw_tree_item_children_items_slot_content_default %} <template v-else> <a v-if="onChangeRoute" class="tree-link" :href="showItemUrl(item)" @click.prevent="onChangeRoute(item)" > <span class="sw-tree-item__label">{{ getName(item) }}</span> </a> <span v-else class="sw-tree-item__label" >{{ getName(item) }}</span> </template> {% endblock %} </template> {% endblock %} {% endblock %} </template> <template #actions="{ item, openTreeItem }"> {% block sw_tree_item_children_items_slot_actions %} {% block sw_tree_items_transition_active_state %} <mt-icon v-if="shouldShowActiveState" size="6px" :color="getActiveIconColor(item)" name="solid-circle-xxxs" /> {% endblock %} <sw-vnode-renderer v-if="actionsSlot" :node="renderActionsSlotNode({ item, openTreeItem })" /> <template v-else> <sw-context-button v-tooltip="toolTip" :disabled="isDisabled" > {% block sw_tree_items_transition_actions_without_position %} <sw-context-menu-item v-if="allowCreateWithoutPosition" class="sw-tree-item__without-position-action" @click="addElement(item)" > {{ $tc(`${translationContext}.general.actions.withoutPosition`) }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_transition_actions_before %} <sw-context-menu-item v-if="!allowCreateWithoutPosition" :disabled="!allowNewCategories || undefined" class="sw-tree-item__before-action" @click="addElement(item, \'before\')" > {{ $tc(`${translationContext}.general.actions.createBefore`) }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_transition_actions_after %} <sw-context-menu-item v-if="!allowCreateWithoutPosition" :disabled="!allowNewCategories" class="sw-tree-item__after-action" @click="addElement(item, \'after\')" > {{ $tc(`${translationContext}.general.actions.createAfter`) }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_transition_actions_sub %} <sw-context-menu-item v-if="!allowCreateWithoutPosition" :disabled="!allowNewCategories" class="sw-tree-item__sub-action" @click="addSubElement(item); openTreeItem(true)" > {{ $tc(`${translationContext}.general.actions.createSub`) }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_transition_actions_duplicate %} <sw-context-menu-item v-if="allowDuplicate" class="sw-context-menu__duplicate-action" @click="onDuplicate(item)" > {{ $tc(`global.default.duplicate`) }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_transition_actions_group %} <div class="sw-context-menu__group"> {% block sw_tree_items_transition_actions_edit %} <sw-context-menu-item @click="onChangeRoute(item)"> {{ $tc(\'global.default.edit\') }} </sw-context-menu-item> {% endblock %} {% block sw_tree_items_transition_actions_delete %} <sw-context-menu-item class="sw-context-menu__group-button-delete" :disabled="!allowDeleteCategories || undefined" variant="danger" @click="deleteElement(item)" > {{ $tc(\'global.default.delete\') }} </sw-context-menu-item> {% endblock %} </div> {% endblock %} </sw-context-button> </template> {% endblock %} </template> {% endblock %} </sw-tree-item> {% endblock %} </div> {% endblock %} <div v-else-if="isLoading" class="sw-tree-item__children" > <sw-skeleton variant="tree-item" /> <sw-skeleton variant="tree-item" /> <sw-skeleton variant="tree-item" /> <sw-skeleton variant="tree-item" /> <sw-skeleton variant="tree-item" /> </div> </transition> {% endblock %} </div> {% endblock %}',{Component:l}=Shopware;l.register("sw-tree-item",{template:n,inject:{feature:{from:"feature",default:null},getItems:{from:"getItems",default:null},treeStartDrag:{from:"startDrag",default:null},treeEndDrag:{from:"endDrag",default:null},treeMoveDrag:{from:"moveDrag",default:null},treeAddSubElement:{from:"addSubElement",default:null},treeAddElement:{from:"addElement",default:null},treeDuplicateElement:{from:"duplicateElement",default:null},treeOnFinishNameingElement:{from:"onFinishNameingElement",default:null},treeOnDeleteElements:{from:"onDeleteElements",default:null},treeAbortCreateElement:{from:"abortCreateElement",default:null}},emits:["check-item"],props:{item:{type:Object,required:!0,default:()=>({})},draggedItem:{type:Object,required:!1,default:()=>null},newElementId:{type:String,required:!1,default:()=>null},translationContext:{type:String,default:()=>"sw-tree"},onChangeRoute:{type:Function,default:()=>null},disableContextMenu:{type:Boolean,default:()=>!1},contextMenuTooltipText:{type:String,required:!1,default:()=>null},activeParentIds:{type:Array,required:!1,default:()=>null},activeItemIds:{type:Array,required:!1,default:()=>null},sortable:{type:Boolean,required:!1,default:()=>!0},markInactive:{type:Boolean,required:!1,default:!1},shouldFocus:{type:Boolean,required:!1,default:!1},shouldShowActiveState:{type:Boolean,required:!1,default:!1},activeFocusId:{type:String,required:!1,default:()=>""},displayCheckbox:{type:Boolean,required:!1,default:()=>!0},allowNewCategories:{type:Boolean,required:!1,default:()=>!0},allowDeleteCategories:{type:Boolean,required:!1,default:()=>!0},allowCreateWithoutPosition:{type:Boolean,required:!1,default:()=>!1},allowDuplicate:{type:Boolean,required:!1,default:()=>!1},getItemUrl:{type:Function,required:!1,default:()=>null},getIsHighlighted:{type:Function,required:!1,default:()=>!1}},data(){return{opened:this.item.initialOpened,active:this.item.active,selected:!1,isLeaf:!1,isLoading:!1,dragEl:null,dragStartX:0,dragStartY:0,mouseStartX:0,mouseStartY:0,rootParent:null,checkedGhost:!1,currentEditElement:null}},computed:{checked:{get(){return this.item.checked},set(e){this.item.checked=e}},activeElementId(){return this.$route.params[this.item.activeElementId]||null},isOpened(){return this.item.initialOpened&&(this.openTreeItem(!0),this.getTreeItemChildren(this.item),this.item.initialOpened=!1),this.opened},isDragging(){return this.draggedItem===null?!1:this.draggedItem.data.id===this.item.data.id},styling(){return{"is--dragging":this.isDragging,"is--active":this.active,"is--opened":this.isOpened,"is--no-children":this.item.childCount<=0,"is--marked-inactive":this.markInactive&&!this.item.data.active,"is--focus":this.shouldFocus&&this.activeFocusId===this.item.id,"is--no-checkbox":!this.displayCheckbox,"is--highlighted":this.isHighlighted,"is--disabled":this.item.disabled}},dragConf(){return{delay:300,validDragCls:null,dragGroup:"sw-tree-item",data:this.item,onDragStart:this.dragStart,onDragEnter:this.onMouseEnter,onDrop:this.dragEnd,preventEvent:!0,disabled:!this.sortable}},parentScope(){return{addSubElement:this.treeAddSubElement,addElement:this.treeAddElement,duplicateElement:this.treeDuplicateElement,onFinishNameingElement:this.treeOnFinishNameingElement,onDeleteElements:this.treeOnDeleteElements,abortCreateElement:this.treeAbortCreateElement}},toolTip(){return this.contextMenuTooltipText!==null?{showDelay:300,message:this.contextMenuTooltipText,disabled:!this.disableContextMenu}:{showDelay:300,message:this.$tc(`${this.translationContext}.general.actions.actionsDisabledInLanguage`),disabled:!this.disableContextMenu}},isDisabled(){return this.currentEditElement!==null||this.disableContextMenu},isHighlighted(){return this.getIsHighlighted(this.item)},contentSlot(){return this.$slots.content},actionsSlot(){return this.$slots.actions}},watch:{activeElementId(e){this.active=e===this.item.id},newElementId(e){this.currentEditElement=e},activeParentIds:{handler(){this.activeParentIds&&(this.checkedGhost=this.activeParentIds.indexOf(this.item.id)>=0)},immediate:!0,deep:!0},activeItemIds:{handler(){this.activeItemIds&&(this.checked=this.activeItemIds.indexOf(this.item.id)>=0)},immediate:!0,deep:!0}},updated(){this.updatedComponent()},mounted(){this.mountedComponent()},beforeUnmount(){this.beforeUnmountComponent()},methods:{updatedComponent(){(this.item.children.length>0||this.item.childCount<=0)&&(this.isLoading=!1)},mountedComponent(){this.$el.addEventListener("keydown",this.handleKeyDown),this.item.active&&this.$el.querySelector(".sw-tree-item.is--active input")&&this.$el.querySelector(".sw-tree-item.is--active input").focus(),this.newElementId&&(this.currentEditElement=this.newElementId,this.editElementName()),this.updatedComponent()},beforeUnmountComponent(){this.$el.removeEventListener("keydown",this.handleKeyDown)},handleKeyDown(e){if(e.target===this.$el)switch(e.key){case"ArrowRight":{if(this.opened)break;this.openTreeItem(),this.getTreeItemChildren(this.item),e.stopPropagation(),e.preventDefault();break}case"ArrowLeft":{if(!this.opened)break;this.openTreeItem(!1),e.stopPropagation(),e.preventDefault();break}}},openTreeItem(e=!this.opened){this.isDragging||(this.opened=e)},getTreeItemChildren(e){this.isDragging||this.isLoading||e.children.length<=0&&(this.isLoading=!0,this.getItems(e.data.id,e.data.schema))},dragStart(e,t,i){this.isDragging||this.isLoading||(this.dragEl=i,this.treeStartDrag(this))},dragEnd(){this.treeEndDrag()},onMouseEnter(e,t){t&&this.treeMoveDrag(e,t)},startDrag(e){return this.treeStartDrag(e)},endDrag(){this.treeEndDrag()},moveDrag(e,t){return this.treeMoveDrag(e,t)},emitCheckedItem(e){this.$emit("check-item",e)},toggleItemCheck(e,t){this.checkedGhost&&!t.checked?(this.checked=!0,this.item.checked=!0):(this.checked=e,this.item.checked=e),this.$emit("check-item",t)},addSubElement(e){this.parentScope.addSubElement(e)},addElement(e,t){this.parentScope.addElement(e,t)},duplicateElement(e){this.parentScope.duplicateElement(e)},onDuplicate(e){this.duplicateElement(e),this.openTreeItem(!0)},editElementName(){this.$nextTick(()=>{const e=this.$el.querySelector(".sw-tree-detail__edit-tree-item input");e&&e.focus()})},onFinishNameingElement(e,t){this.$nextTick(()=>{this.parentScope.onFinishNameingElement(e,t)})},onBlurTreeItemInput(e){this.abortCreateElement(e)},onCancelSubmit(e){this.abortCreateElement(e)},abortCreateElement(e){this.parentScope.abortCreateElement(e)},deleteElement(e){this.parentScope.onDeleteElements(e)},getName(e){return e.data.translated?e.data.name||e.data.translated.name:e.data.name},getActiveIconColor(e){var t;return(t=e.data)!=null&&t.active&&e.data.active===!0?"#37d046":"#d1d9e0"},showItemUrl(e){return this.getItemUrl?this.getItemUrl(e):!1},renderContentSlotNode({item:e,openTreeItem:t,getName:i}){return this.$slots.content({item:e,openTreeItem:t,getName:i})},renderActionsSlotNode({item:e,openTreeItem:t}){return this.$slots.actions({item:e,openTreeItem:t})}}});
