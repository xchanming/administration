const o=`{% block sw_sortable_list_container %} {% block sw_sortable_list %} <ul v-if="hasItems" class="sw-sortable-list" > <slot v-bind="{ sortedItems, sortable }"> {% block sw_sortable_list_item %} <li v-for="item in sortedItems" :key="item.id" v-draggable="{ ...mergedDragConfig, data: item }" v-droppable="{ ...mergedDragConfig, data: item }" class="sw-sortable-list__item" > <slot name="item" v-bind="{ item, sortable }" ></slot> </li> {% endblock %} </slot> </ul> {% endblock %} {% block sw_sortable_list_empty_state %} <sw-empty-state v-else class="sw-sortable-list__empty-state" :title="$tc('sw-empty-state.messageNoResultTitle')" /> {% endblock %} {% endblock %}`,{Component:c}=Cicada,a={delay:300,dragGroup:"sw-sortable-list",validDragCls:"is--valid-drag",preventEvent:!0,disabled:!1},n={speed:50,margin:100,accelerationMargin:0};c.register("sw-sortable-list",{template:o,compatConfig:Cicada.compatConfig,props:{items:{type:Array,required:!0},sortable:{type:Boolean,required:!1,default(){return!0}},dragConf:{type:Object,required:!1,default(){return a}},scrollOnDrag:{type:Boolean,required:!1,default(){return!1}},scrollOnDragConf:{type:Object,required:!1,default(){return n}}},data(){return{defaultConfig:a,defaultScrollOnDragConf:n,sortedItems:[...this.items],dragElement:null,scrollEventTicking:!1}},computed:{hasItems(){return this.items.length>0},isSortable(){return this.sortable},mergedDragConfig(){return this.defaultConfig.onDragStart=this.onDragStart,this.defaultConfig.onDragEnter=this.onDragEnter,this.defaultConfig.onDrop=this.onDrop,{...this.defaultConfig,...this.dragConf}},mergedScrollOnDragConfig(){return{...this.defaultScrollOnDragConf,...this.scrollOnDragConf}},scrollableParent(){return this.findScrollableParent(this.$el)}},methods:{findScrollableParent(t){return t===null?null:t.scrollHeight>t.clientHeight?t:this.findScrollableParent(t.parentElement)},hasOrderChanged(){return JSON.stringify(this.sortedItems)===JSON.stringify(this.items)},onDragEnter(t,e){if(!this.isSortable||!t||!e||t.id===(e==null?void 0:e.id))return;this.scrollOnDrag&&this.scroll();const r=this.sortedItems.findIndex(s=>s.id===t.id),l=this.sortedItems.findIndex(s=>s.id===e.id);r<0||l<0||this.sortedItems.splice(l,0,this.sortedItems.splice(r,1)[0])},onDragStart(t,e,r){this.dragElement=r,this.scrollOnDrag&&this.scrollableParent!==null&&this.scrollableParent.addEventListener("scroll",this.onScroll)},onScroll(){this.scrollEventTicking||(window.requestAnimationFrame(()=>{this.scroll(),this.scrollEventTicking=!1}),this.scrollEventTicking=!0)},scroll(){if(!this.scrollableParent||!this.dragElement)return;const t=this.scrollableParent.getBoundingClientRect(),e=this.dragElement.getBoundingClientRect(),r=e.top-t.top,l=t.bottom-e.bottom,s=Math.round((this.scrollableParent.scrollHeight-this.scrollableParent.clientHeight)/this.scrollableParent.scrollTop);let i=this.mergedScrollOnDragConfig.speed;r<this.mergedScrollOnDragConfig.margin&&s!==0&&(r<this.mergedScrollOnDragConfig.accelerationMargin&&(i*=1+Math.abs(r/20)),this.scrollableParent.scrollBy({top:-i,left:0,behavior:"smooth"})),l<this.mergedScrollOnDragConfig.margin&&s!==100&&(l<this.mergedScrollOnDragConfig.accelerationMargin&&(i*=1+Math.abs(l/20)),this.scrollableParent.scrollBy({top:i,left:0,behavior:"smooth"}))},onDrop(){this.dragElement=null,this.scrollOnDrag&&this.scrollableParent!==null&&this.scrollableParent.removeEventListener("scroll",this.onScroll),this.isSortable&&this.$emit("items-sorted",this.sortedItems,this.hasOrderChanged())}}});
//# sourceMappingURL=index-CJ2pePZy.js.map
