const s=`{% block sw_button %} {% block sw_button_router_link %} <router-link v-if="routerLink && !disabled" v-slot="{ href, navigate }" :to="routerLink" custom > <a :href="href" class="sw-button" :class="buttonClasses" v-bind="$attrs" @click="navigate($event)" > {% block sw_button_router_link_content %} <span class="sw-button__content"> <slot> {% block sw_button_router_link_slot_default %}{% endblock %} </slot> </span> {% endblock %} </a> </router-link> <span v-else-if="routerLink && disabled" class="sw-button" :class="buttonClasses" v-bind="$attrs" > {% block sw_button_router_link_content %} <span class="sw-button__content"> <slot> {% block sw_button_router_link_slot_default %}{% endblock %} </slot> </span> {% endblock %} </span> {% endblock %} {% block sw_button_link %} <a v-else-if="link" :href="!disabled ? link : ''" target="_blank" rel="noopener" class="sw-button" :class="buttonClasses" v-bind="$attrs" > {% block sw_button_link_content %} <span class="sw-button__content"> <slot> {% block sw_button_link_slot_default %}{% endblock %} </slot> </span> {% endblock %} </a> {% endblock %} {% block sw_button_button %} <button v-else class="sw-button" :class="buttonClasses" :disabled="disabled || isLoading" v-bind="filteredAttributes" > {% block sw_button_button_content %} <sw-loader v-if="isLoading" class="sw-button_loader" size="20px" /> <span class="sw-button__content" :class="contentVisibilityClass" > <slot> {% block sw_button_button_slot_default %}{% endblock %} </slot> </span> {% endblock %} </button> {% endblock %} {% endblock %}`,{Component:e}=Shopware;e.register("sw-button-deprecated",{template:s,inheritAttrs:!1,props:{disabled:{type:Boolean,required:!1,default:!1},variant:{type:String,required:!1,default:"",validValues:["primary","ghost","danger","ghost-danger","contrast","context"],validator(t){return t.length?["primary","ghost","danger","ghost-danger","contrast","context"].includes(t):!0}},size:{type:String,required:!1,default:"",validValues:["x-small","small"],validator(t){return t.length?["x-small","small"].includes(t):!0}},square:{type:Boolean,required:!1,default:!1},block:{type:Boolean,required:!1,default:!1},routerLink:{type:Object,required:!1},link:{type:String,required:!1,default:null},isLoading:{type:Boolean,default:!1,required:!1}},computed:{buttonClasses(){return{[`sw-button--${this.variant}`]:this.variant,[`sw-button--${this.size}`]:this.size,"sw-button--block":this.block,"sw-button--disabled":this.disabled,"sw-button--square":this.square}},contentVisibilityClass(){return{"is--hidden":this.isLoading}},filteredAttributes(){const t={...this.$attrs};return this.disabled&&(t.onClick=null),t}}});
