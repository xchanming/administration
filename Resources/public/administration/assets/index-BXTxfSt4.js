const e='{% block sw_cms_sidebar_navigator_element %} <div class="sw-cms-sidebar__navigator-element"> {% block sw_cms_sidebar_sidebar_navigator_element_label %} <div class="navigator-element__label"> {{ block.name ? block.name : block.type }} </div> {% endblock %} {% block sw_cms_sidebar_sidebar_navigator_element_duplicate %} <div v-if="duplicable && removable" class="navigator-element__action-duplicate" role="button" tabindex="0" @click="onBlockDuplicate" @keydown.enter="onBlockDuplicate" > <sw-icon name="regular-duplicate" size="16" /> </div> <div v-else class="navigator-element__action-duplicate" ></div> {% endblock %} {% block sw_cms_sidebar_sidebar_navigator_element_delete %} <div v-if="removable" class="navigator-element__action-delete" role="button" tabindex="0" @click="onBlockDelete" @keydown.enter="onBlockDelete" > <sw-icon name="regular-trash" size="16" /> </div> {% endblock %} </div> {% endblock %}',l=Cicada.Component.wrapComponentConfig({template:e,compatConfig:Cicada.compatConfig,emits:["block-duplicate","block-delete"],props:{block:{type:Object,required:!0},removable:{type:Boolean,required:!1,default(){return!1}},duplicable:{type:Boolean,required:!1,default(){return!0}}},methods:{onBlockDuplicate(){this.$emit("block-duplicate",this.block)},onBlockDelete(){this.$emit("block-delete",this.block)}}});export{l as default};
//# sourceMappingURL=index-BXTxfSt4.js.map
