const d='{% block sw_tree %} <div class="sw-tree" role="tree" :aria-label="$tc(`${translationContext}.general.treeHeadline`)" > {% block sw_tree_search %} <slot name="search"> <div v-if="searchable" class="sw-tree__search" > <sw-text-field v-model:value="currentTreeSearch" name="treeSearch" :placeholder="$tc(\'sw-tree.general.placeholderSearch\')" size="small" @update:value="searchItems" > <template #prefix> <sw-icon name="regular-search" /> </template> </sw-text-field> </div> </slot> {% endblock %} {% block sw_tree_actions_headline %} <slot name="headline"> <div v-if="checkedElementsCount > 0" class="sw-tree-actions__headline" > <span> {{ $tc(`${translationContext}.general.treeHeadSelected`, 0, { count: checkedElementsCount }) }}:</span> <sw-button class="sw-tree-actions__delete_categories" :disabled="!allowDeleteCategories || undefined" variant="danger" size="small" @click="onDeleteElements(null)" > {{ $tc(\'global.default.delete\') }} </sw-button> </div> <div v-else class="sw-tree-actions__headline" > <span>{{ $tc(`${translationContext}.general.treeHeadline`) }}</span> </div> </slot> {% endblock %} {% block sw_tree_content %} <div class="sw-tree__content"> <div class="tree-items"> {% block sw_tree_items %} <sw-tree-input-field v-if="hasNoItems && allowCreateCategories" :disabled="disableContextMenu" @new-item-create="onCreateNewItem" /> <slot v-else name="items" :tree-items="treeItems" :dragged-item="draggedItem" :new-element-id="newElementId" :check-item="checkItem" :translation-context="translationContext" :on-change-route="onChangeRoute" :sortable="sortable" :disable-context-menu="disableContextMenu" :selected-items-path-ids="selectedItemsPathIds" :checked-item-ids="checkedItemIds" > {% block sw_tree_slot_items %} <sw-tree-item v-for="item in treeItems" :key="item.id" :item="item" :translation-context="translationContext" :dragged-item="draggedItem" :active-parent-ids="selectedItemsPathIds" :active-item-ids="checkedItemIds" @check-item="checkItem" /> {% endblock %} </slot> {% endblock %} </div> </div> {% endblock %} {% block sw_tree_delete_modal %} <sw-modal v-if="showDeleteModal" :title="$tc(\'global.default.warning\')" variant="small" @modal-close="onCloseDeleteModal" > {% block sw_tree_delete_modal_confirm_delete_text %} <div v-if="toDeleteItem"> <p v-if="toDeleteItem.childCount > 0" class="sw_tree__confirm-delete-text" > {{ $tc(`${translationContext}.modal.textDeleteConfirm`, 0, { name: toDeleteItem.data.name || toDeleteItem.data.translated.name }) }}<br> <b>{{ $tc(`${translationContext}.modal.textDeleteChildrenConfirm`) }}</b> </p> <p v-else class="sw_tree__confirm-delete-text" > {{ $tc(`${translationContext}.modal.textDeleteConfirm`, 0, { name: toDeleteItem.data.name || toDeleteItem.data.translated.name }) }} </p> </div> <div v-else> <p v-if="checkedElementsChildCount > 0" class="sw_tree__confirm-delete-text" > {{ $tc(`${translationContext}.modal.textDeleteMultipleConfirm`, 0, { count: checkedElementsCount }) }}<br> <b>{{ $tc(`${translationContext}.modal.textDeleteChildrenConfirm`) }}</b> </p> <p v-else class="sw_tree__confirm-delete-text" > {{ $tc(`${translationContext}.modal.textDeleteMultipleConfirm`, 0, { count: checkedElementsCount }) }} </p> </div> {% endblock %} {% block sw_tree_delete_modal_footer %} <template #modal-footer> {% block sw_tree_delete_modal_cancel %} <sw-button size="small" @click="onCloseDeleteModal" > {{ $tc(\'global.default.cancel\') }} </sw-button> {% endblock %} {% block sw_tree_delete_modal_confirm %} <sw-button variant="danger" size="small" @click="onConfirmDelete()" > {{ $tc(\'global.default.delete\') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %} </div> {% endblock %}',{Component:o}=Cicada,{debounce:c,sort:h}=Cicada.Utils;o.register("sw-tree",{template:d,inject:["feature"],compatConfig:Cicada.compatConfig,provide(){return this.isCompatEnabled("INSTANCE_CHILDREN")?{getItems:this.getItems}:{getItems:this.getItems,startDrag:this.startDrag,endDrag:this.endDrag,moveDrag:this.moveDrag,addSubElement:this.addSubElement,addElement:this.addElement,duplicateElement:this.duplicateElement,onFinishNameingElement:this.onFinishNameingElement,onDeleteElements:this.onDeleteElements,abortCreateElement:this.abortCreateElement}},emits:["checked-elements-count","get-tree-items","search-tree-items","drag-start","drag-end","delete-element","editing-end","batch-delete","save-tree-items"],props:{items:{type:Array,required:!0},rootParentId:{type:String,required:!1,default:()=>null},parentProperty:{type:String,required:!1,default:()=>"parentId"},afterIdProperty:{type:String,required:!1,default:()=>"afterId"},childCountProperty:{type:String,required:!1,default:()=>"childCount"},searchable:{type:Boolean,required:!1,default:()=>!0},activeTreeItemId:{type:String,required:!1,default:()=>""},routeParamsActiveElementId:{type:String,required:!1,default:()=>"id"},translationContext:{type:String,required:!1,default:()=>"sw-tree"},onChangeRoute:{type:Function,required:!1,default:()=>null},disableContextMenu:{type:Boolean,required:!1,default:()=>!1},bindItemsToFolder:{type:Boolean,required:!1,default:()=>!1},sortable:{type:Boolean,required:!1,default:()=>!0},checkItemsInitial:{type:Boolean,required:!1,default:()=>!1},allowDeleteCategories:{type:Boolean,required:!1,default:()=>!0},allowCreateCategories:{type:Boolean,required:!1,default:()=>!0},initiallyExpandedRoot:{type:Boolean,required:!1,default:()=>!1},ariaLabel:{type:String,required:!1,default:null}},data(){return{treeItems:[],draggedItem:null,currentTreeSearch:null,newElementId:null,contextItem:null,currentEditMode:null,addElementPosition:null,_eventFromEdit:null,createdItem:null,checkedElements:{},checkedElementsCount:0,showDeleteModal:!1,toDeleteItem:null,checkedElementsChildCount:0}},computed:{activeElementId(){return this.$route.params[this.routeParamsActiveElementId]||null},isSortable(){return this.currentTreeSearch!==null?!1:this.sortable},isSearched(){return this.currentTreeSearch!==null&&this.currentTreeSearch.length>0},hasActionSlot(){return this.$slots&&this.$slots.actions},hasNoItems(){return this.items.length===1&&this.items[0]&&this.items[0].isDeleted?!0:this.items.length<1},selectedItemsPathIds(){return Object.keys(this.checkedElements).reduce((e,t)=>{var s,r;const n=this.findById(t),i=((r=(s=n==null?void 0:n.data)==null?void 0:s.path)==null?void 0:r.split("|").filter(l=>l.length>0))??"";return[...e,...i]},[])},checkedItemIds(){return Object.keys(this.checkedElements)}},watch:{items:{immediate:!0,handler(){this.treeItems=this.getTreeItems(this.isSearched?null:this.rootParentId),this._eventFromEdit=null},deep:!0},activeTreeItemId(e){e&&this.activeElementId&&this.openTreeById()}},created(){this.createdComponent()},mounted(){this.mountedComponent()},unmounted(){this.$emit("checked-elements-count",0)},beforeUnmount(){this.beforeUnmountedComponent()},methods:{createdComponent(){this.activeTreeItemId&&this.activeElementId&&this.openTreeById(),this.$emit("checked-elements-count",this.checkedElementsCount)},mountedComponent(){this.$el.addEventListener("focusin",this.handleFocusIn),this.$el.addEventListener("keydown",this.handleKeyDown)},beforeUnmountedComponent(){this.$el.removeEventListener("focusin",this.handleFocusIn),this.$el.removeEventListener("keydown",this.handleKeyDown)},handleFocusIn(e){if(e.target.classList.contains("sw-tree-item")||e.target.tagName==="INPUT")return;const t=this.$el.querySelector('.sw-tree-item[aria-current="page"]');if(t)t.focus();else{const n=this.$el.querySelector(".sw-tree-item");n&&n.focus()}},handleKeyDown(e){switch(e.key){case"Tab":{this.$el.setAttribute("inert",""),setTimeout(()=>{this.$el.removeAttribute("inert")},0);break}case"ArrowDown":{const t=this.$el.querySelector(".sw-tree-item:focus");if(!t)break;if(t.getAttribute("aria-expanded")==="true"){const l=t.querySelector(".sw-tree-item");if(l){l.focus();break}}const i=t.nextElementSibling;if(i){i.focus();break}const r=t.parentElement.closest(".sw-tree-item").nextElementSibling;if(r){r.focus();break}break}case"ArrowUp":{const t=document.activeElement;if(!t.classList.contains("sw-tree-item"))break;const n=r=>{if((r==null?void 0:r.getAttribute("aria-expanded"))==="true"){const a=r.querySelectorAll(".sw-tree-item");return a[a.length-1]}return null};let i=t.previousElementSibling;if(i){const r=n(i);r?r.focus():i.focus();break}let s=t.parentElement.closest(".sw-tree-item");for(;s;){if(s.previousElementSibling){i=s.previousElementSibling;const r=n(i);r?r.focus():i.focus();break}s=s.parentElement.closest(".sw-tree-item")}break}case" ":{const t=document.activeElement;if(!t.classList.contains("sw-tree-item"))break;const n=t.getAttribute("data-item-id");if(!n)break;const i=this.findById(n);if(!i)break;i.checked=!i.checked,this.checkItem(i);break}case"Enter":{const t=document.activeElement;if(!t.classList.contains("sw-tree-item"))break;const n=t.getAttribute("data-item-id");if(!n)break;const i=this.findById(n);if(!i)break;this.onChangeRoute(i);break}case"ArrowLeft":{const t=document.activeElement;if(!t.classList.contains("sw-tree-item"))break;const n=t.parentElement.closest(".sw-tree-item");n&&n.focus();break}case"ArrowRight":{const t=document.activeElement;if(!t.classList.contains("sw-tree-item")||!(t.getAttribute("aria-expanded")==="true"))break;const i=t.querySelector(".sw-tree-item");if(i){i.focus();break}break}}},getItems(e=this.rootParentId,t=null){this.$emit("get-tree-items",e,t)},searchItems:c(function(){this.$emit("search-tree-items",this.currentTreeSearch)},600),getTreeItems(e){const t=[];return this.items.forEach(n=>{if(n.isDeleted||e===null&&typeof this.items.find(l=>l.id===n.parentId)<"u"||e!==null&&n[this.parentProperty]!==e)return;const s=n.hasOwnProperty(this.childCountProperty)?n[this.childCountProperty]:0,r=this.findById(n.id);t.push({data:n,id:n.id,schema:n.schema,parentId:e,childCount:s,children:this.getTreeItems(n.id),initialOpened:this.initiallyExpandedRoot&&n.parentId===null,active:!1,activeElementId:this.routeParamsActiveElementId,checked:(r==null?void 0:r.checked)??!!this.checkItemsInitial,disabled:n.disabled,disabledToolTipText:n.disabledToolTipText,[this.afterIdProperty]:n[this.afterIdProperty]})}),h.afterSort(t,this.afterIdProperty)},updateSorting(e){let t=null;return e.forEach(n=>{n.data[this.afterIdProperty]=t,t=n.id}),e},startDrag(e){e.opened=!1,this.draggedItem=e.item,this.$emit("drag-start")},endDrag(){if(!this.droppedItem){this.draggedItem=null;return}const e=this.draggedItem.data.parentId,t=this.droppedItem.data.parentId;if(e!==t){if(e!==null){const s=this.findById(e);s&&(s.childCount-=1,s.data.childCount-=1)}if(t!==null){const s=this.findById(t);s.childCount+=1,s.data.childCount+=1}this.draggedItem.data.parentId=this.droppedItem.data.parentId}const n=this.findTreeByParentId(e);if(this.updateSorting(n),e!==this.droppedItem.parentId){const s=this.findTreeByParentId(this.droppedItem.parentId);this.updateSorting(s)}const i={draggedItem:this.draggedItem,droppedItem:this.droppedItem,oldParentId:e,newParentId:t};this.draggedItem=null,this.droppedItem=null,this.isLoading=!0,this.$emit("drag-end",i)},moveDrag(e,t){if(!e||!t||e.id===t.id)return;const n=this.findTreeByParentId(e.parentId),i=this.findTreeByParentId(t.parentId),s=n.findIndex(l=>l.id===e.id),r=i.findIndex(l=>l.id===t.id);s<0||r<0||(t=i[r],(!this.bindItemsToFolder||e.parentId===t.parentId)&&(n.splice(s,1),i.splice(r,0,e),e.parentId!==t.parentId&&(e.parentId=t.parentId)),this.droppedItem=t)},openTreeById(e=this.activeElementId){const t=this.findById(e);if(t===null)return;this.activeElementId===t.id?t.active=!0:t.initialOpened=!0;const n=t.parentId;t.parentId!==null&&this.openTreeById(n)},findTreeByParentId(e){const t=[{id:null,children:this.treeItems}];for(;t.length>0;){const n=t.shift();if(n.id===e)return n.children;n.children.length&&t.push(...n.children)}return null},findById(e){const t=[{id:null,children:this.treeItems}];for(;t.length>0;){const n=t.shift();if(n.id===e)return n;n.children.length&&t.push(...n.children)}return null},onCreateNewItem(e){if(!e.length||e.length<=0)return;let t=null;t=this.$parent.$parent.createNewElement(null,null,e),this.saveItems();const n=this.getNewTreeItem(t);this.addElement(n,"after")},addSubElement(e){!e||!e.data||!e.data.id||(this.contextItem===null&&(this.contextItem=e),this.currentEditMode=this.addSubElement,this.$parent.$parent.getChildrenFromParent(e.id).then(()=>{const t=e,n=this.$parent.$parent.createNewElement(e,e.id),i=this.getNewTreeItem(n);t.childCount+=1,t.data.childCount+=1,this.newElementId=n.id,this.createdItem=i}))},duplicateElement(e){this.$parent.$parent.duplicateElement(e)},addElement(e,t){let n=null;n=this.$parent.$parent.createNewElement(e);const i=this.getNewTreeItem(n);this.contextItem===null&&(this.contextItem=e),this.addElementPosition===null&&(this.addElementPosition=t),e.hasOwnProperty("parentId")||(e.parentId=null),this.currentEditMode=this.addElement;const s=this.findTreeByParentId(e.parentId),r=this.treeItems.findIndex(a=>a.id===i.id),l=s.findIndex(a=>a.id===e.id);t==="before"?s.splice(l,1,i,e):(this.contextItem=i,s.splice(l,1,e,i)),this.treeItems.splice(r,1),this.updateSorting(s),this.newElementId=n.id,this.createdItem=i},getNewTreeItem(e){const n=e.hasOwnProperty(this.childCountProperty)?e[this.childCountProperty]:0,s=e.hasOwnProperty("parentId")?e.parentId:null;return{data:e,id:e.id,parentId:s,childCount:n,children:0,initialOpened:!1,active:!1}},deleteElement(e){const t=this.findTreeByParentId(e.parentId),n=t.findIndex(i=>i.id===e.id);e.children.length>0&&e.children.forEach(i=>{i.data.isDeleted=!0}),t.splice(n,1),this.updateSorting(t),this.$emit("delete-element",e),this.saveItems()},abortCreateElement(e){if(this._eventFromEdit){this._eventFromEdit=null;return}if(this.currentEditMode!==null){this.deleteElement(e);const t=this.findById(e.parentId);t.id===e.parentId&&t.data&&(t.childCount-=1,t.data.childCount-=1)}this.contextItem=null,this.newElementId=null,this.currentEditMode=null,this.addElementPosition=null,this.$emit("editing-end",{parentId:e.parentId})},onFinishNameingElement(e,t){this.createdItem&&this.createdItem.data.save().then(()=>{this.createdItem=null,this.saveItems(),this.currentEditMode!==null&&this.contextItem&&this.currentEditMode(this.contextItem,this.addElementPosition)}),this._eventFromEdit=t,this.newElementId=null},deleteSelectedElements(){if(this.checkedElements.length<=0)return;(this.isCompatEnabled("INSTANCE_LISTENERS")?typeof this.$listeners["batch-delete"]=="function":typeof this.$attrs.onBatchDelete=="function")?this.$emit("batch-delete",this.checkedElements):Object.values(this.checkedElements).forEach(t=>{const n=this.findById(t);n&&this.deleteElement(n)}),this.checkedElements={},this.checkedElementsCount=0,this.checkedElementsChildCount=0,this.$emit("checked-elements-count",this.checkedElementsCount)},checkItem(e){e.checked?(e.childCount>0&&(this.checkedElementsChildCount+=1),this.isCompatEnabled("INSTANCE_SET")?this.$set(this.checkedElements,e.id,e.id):this.checkedElements[e.id]=e.id,this.checkedElementsCount+=1):(e.childCount>0&&(this.checkedElementsChildCount-=1),this.isCompatEnabled("INSTANCE_DELETE")?this.$delete(this.checkedElements,e.id):delete this.checkedElements[e.id],this.checkedElementsCount-=1),this.$emit("checked-elements-count",this.checkedElementsCount)},saveItems(){this.$emit("save-tree-items")},onDeleteElements(e){this.toDeleteItem=e,this.showDeleteModal=!0},onCloseDeleteModal(){this.showDeleteModal=!1,this.toDeleteItem=null},onConfirmDelete(){this.toDeleteItem?this.deleteElement(this.toDeleteItem):this.deleteSelectedElements(),this.showDeleteModal=!1,this.toDeleteItem=null}}});
//# sourceMappingURL=index-Bd5QvQ5k.js.map
