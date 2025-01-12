const l=`{% block sw_modal %} <transition name="sw-modal-fade" v-bind="$attrs" appear > {% block sw_modal_element %} <div class="sw-modal" :class="modalClasses" @mousedown="closeModalOnClickOutside" @keyup.esc="closeModalOnEscapeKey" > {% block sw_modal_dialog %} <div ref="dialog" class="sw-modal__dialog" :class="modalDialogClasses" :style="{ maxWidth: size }" role="dialog" aria-labelledby="modalTitleEl" tabindex="-1" > {% block sw_modal_header %} <header v-if="showHeader" class="sw-modal__header" > <slot name="modal-header"> {% block sw_modal_slot_header %} <div class="sw-modal__titles"> <slot name="modal-title"> {% block sw_modal_close %} <h4 id="modalTitleEl" class="sw-modal__title" > {{ title }} </h4> {% endblock %} </slot> <h5 v-if="subtitle" class="sw-modal__subtitle" > {{ subtitle }} </h5> </div> {% block sw_modal_close_button %} <button v-if="closable" class="sw-modal__close" :title="$tc('global.sw-modal.labelClose')" :aria-label="$tc('global.sw-modal.labelClose')" @click.prevent="closeModal" > {% block sw_modal_close_icon %} <sw-icon name="regular-times-s" /> {% endblock %} </button> {% endblock %} {% endblock %} </slot> </header> {% endblock %} {% block sw_modal_body %} <slot name="body"> <div class="sw-modal__body" :class="modalBodyClasses" > {% block sw_modal_loader %} <slot name="modal-loader"> <sw-loader v-if="isLoading" /> </slot> {% endblock %} <slot> {% block sw_modal_slot_default %}{% endblock %} </slot> </div> </slot> {% endblock %} {% block sw_modal_footer %} <footer v-if="showFooter && hasFooterSlot" class="sw-modal__footer" > <slot name="modal-footer"> {% block sw_modal_slot_footer %}{% endblock %} </slot> </footer> {% endblock %} </div> {% endblock %} </div> {% endblock %} </transition> {% endblock %}`,{Component:t}=Cicada,s=Cicada.Utils;t.register("sw-modal",{template:l,compatConfig:Cicada.compatConfig,inheritAttrs:!1,inject:["shortcutService"],emits:["modal-close"],props:{title:{type:String,default:""},subtitle:{type:String,default:null,required:!1},size:{type:String,default:""},variant:{type:String,required:!1,default:"default",validValues:["default","small","large","full"],validator(e){return e.length?["default","small","large","full"].includes(e):!0}},isLoading:{type:Boolean,required:!1,default:!1},selector:{type:String,required:!1,default:"body"},showHeader:{type:Boolean,required:!1,default:!0},showFooter:{type:Boolean,required:!1,default:!0},closable:{type:Boolean,required:!1,default:!0}},data(){return{id:s.createId()}},computed:{modalClasses(){return{[`sw-modal--${this.variant}`]:this.variant&&!this.size,"sw-modal--has-sidebar":this.showHelpSidebar}},modalDialogClasses(){return[`sw-modal--${this.id}`,{"has--header":this.showHeader}]},modalBodyClasses(){return{"has--no-footer":!this.showFooter}},hasFooterSlot(){return!!this.$slots["modal-footer"]},showHelpSidebar(){return Cicada.State.get("adminHelpCenter").showHelpSidebar}},created(){this.createdComponent()},mounted(){this.mountedComponent()},beforeUnmount(){this.beforeDestroyComponent()},unmounted(){this.destroyedComponent()},methods:{createdComponent(){this.shortcutService.stopEventListener()},mountedComponent(){document.querySelector(this.selector).appendChild(this.$el),this.setFocusToModal()},beforeDestroyComponent(){window.setTimeout(()=>{this.$el.remove()},400)},destroyedComponent(){this.shortcutService.startEventListener()},setFocusToModal(){var e,o;(o=(e=this.$el)==null?void 0:e.querySelector)==null||o.call(e,".sw-modal__dialog").focus()},closeModalOnClickOutside(e){this.closable&&(!this.$refs.dialog||!this.$refs.dialog.contains(e.target))&&this.closeModal()},closeModal(){this.$emit("modal-close")},closeModalOnEscapeKey(e){!e.target.classList.contains("sw-modal__dialog")||e.target!==document.activeElement||(e.key==="Escape"||e.keyCode===27)&&this.closeModal()}}});
//# sourceMappingURL=index-DyLmy8Tw.js.map
