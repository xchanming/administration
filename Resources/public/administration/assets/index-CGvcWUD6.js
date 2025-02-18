const e=`{% block sw_grid_row %} <div ref="swGridRow" class="sw-grid-row" role="row" tabindex="0" @dblclick="onInlineEditStart($event.currentTarget)" > {% block sw_grid_row_actions %} <div class="sw-grid-row__actions"> <slot name="actions"> {% block sw_grid_row_slot_actions %} <sw-button size="small" @click="onInlineEditCancel(id, index)" > {{ $tc('global.default.cancel') }} </sw-button> <sw-button class="sw-grid-row__inline-edit-action" variant="primary" size="small" @click="onInlineEditFinish" > {{ $tc('global.default.save') }} </sw-button> {% endblock %} </slot> </div> {% endblock %} <slot> {% block sw_grid_row_slot_default %}{% endblock %} </slot> </div> {% endblock %}`,{Component:n}=Shopware,s=Shopware.Utils;n.register("sw-grid-row",{template:e,inject:{swGridInlineEditStart:{from:"swGridInlineEditStart",default:null},swGridInlineEditCancel:{from:"swGridInlineEditCancel",default:null},swOnInlineEditStart:{from:"swOnInlineEditStart",default:null},swRegisterGridDisableInlineEditListener:{from:"swRegisterGridDisableInlineEditListener",default:null},swUnregisterGridDisableInlineEditListener:{from:"swUnregisterGridDisableInlineEditListener",default:null},swGridSetColumns:{from:"swGridSetColumns",default:null}},emits:["inline-edit-finish"],props:{item:{type:Object,required:!0},index:{type:Number,required:!1,default:null},allowInlineEdit:{type:Boolean,required:!1,default:!0}},data(){return{columns:[],isEditingActive:!1,inlineEditingCls:"is--inline-editing",id:s.createId()}},watch:{isEditingActive(){if(this.isEditingActive){this.$refs.swGridRow.classList.add(this.inlineEditingCls);return}this.$refs.swGridRow.classList.remove(this.inlineEditingCls)}},created(){this.createdComponent()},beforeUnmount(){this.swUnregisterGridDisableInlineEditListener(this.onInlineEditCancel)},methods:{createdComponent(){this.swGridSetColumns(this.columns),this.swRegisterGridDisableInlineEditListener(this.onInlineEditCancel)},onInlineEditStart(){if(!this.allowInlineEdit||this.$device.getViewportWidth()<960)return;let i=!1;this.columns.forEach(t=>{(t.editable||i)&&(i=!0)}),!(this.isEditingActive||!i)&&(this.isEditingActive=!0,this.swGridInlineEditStart(this.id),this.swOnInlineEditStart(this.item))},onInlineEditCancel(i,t){i&&i!==this.id||(this.isEditingActive=!1,this.swGridInlineEditCancel(this.item,t))},onInlineEditFinish(){this.isEditingActive=!1,this.$emit("inline-edit-finish",this.item)}}});
