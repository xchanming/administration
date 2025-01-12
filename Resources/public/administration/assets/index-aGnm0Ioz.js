const t='{% block sw_confirm_field %} <div class="sw-confirm-field" :class="confirmFieldClasses" > {% block sw_confirm_field_input_field %} <sw-text-field v-model:value="draft" v-bind="$attrs" :required="required" :disabled="disabled" :error="error" validation="required" @focus="onStartEditing" @blur="onBlurField" @keyup.enter="onSubmitFromKey" @keyup.esc="onCancelFromKey" @update:value="onInput" /> {% endblock %} {% block sw_confirm_field_button_list %} <span v-show="isEditing" class="sw-confirm-field__button-list" > {% block sw_confirm_field_cancel_button %} <sw-button :disabled="disabled" class="sw-confirm-field__button sw-confirm-field__button--cancel" square size="x-small" tabindex="-1" @click="onCancelSubmit" > {% block sw_field_inline_cancel_submit_button_icon %} <mt-icon size="10px" name="regular-times-xs" /> {% endblock %} </sw-button> {% endblock %} {% block sw_confirm_field_confirm_button %} <sw-button class="sw-confirm-field__button sw-confirm-field__button--submit" :disabled="preventEmptySubmit && !draft || disabled" square size="x-small" variant="primary" tabindex="-1" @click="onSubmitValue" > {% block sw_field_inline_submit_button_icon %} <mt-icon size="10px" name="regular-checkmark-xxs" /> {% endblock %} </sw-button> {% endblock %} </span> {% endblock %} </div> {% endblock %}',{Component:s}=Cicada;s.register("sw-confirm-field",{template:t,compatConfig:Cicada.compatConfig,emits:["remove-error","blur","submit-cancel","input"],props:{value:{type:String,required:!1,default:""},compact:{type:Boolean,required:!1,default:!1},preventEmptySubmit:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},error:{type:Object,required:!1,default:null}},data(){return{hasSubmittedFromKey:!1,isEditing:!1,draft:this.value,event:null}},computed:{confirmFieldClasses(){return{"sw-confirm-field--compact":this.compact,"sw-confirm-field--editing":this.isEditing,"has--error":!!this.error}}},watch:{value(){this.draft=this.value}},beforeUnmount(){this.$emit("remove-error")},methods:{removeActionButtons(){this.isEditing=!1},onStartEditing(){this.isEditing=!0},onBlurField(e){var i;if((i=e==null?void 0:e.relatedTarget)!=null&&i.classList.contains("sw-confirm-field__button")||this.hasSubmittedFromKey){this.hasSubmittedFromKey=!1;return}this.$emit("blur"),this.cancelSubmit()},cancelSubmit(){this.removeActionButtons(),this.draft=this.value},onCancelFromKey({target:e}){this.cancelSubmit(),e.blur()},onCancelSubmit(){this.$emit("submit-cancel"),this.cancelSubmit(),this.isEditing=!1},submitValue(){this.draft!==this.value&&this.$emit("input",this.draft,this.event)},onSubmitFromKey(){this.hasSubmittedFromKey=!0,this.event="key",this.submitValue(),this.isEditing=!1},onSubmitValue(){this.event="click",this.submitValue(),this.isEditing=!1},onInput(){this.$emit("remove-error")}}});
//# sourceMappingURL=index-aGnm0Ioz.js.map
