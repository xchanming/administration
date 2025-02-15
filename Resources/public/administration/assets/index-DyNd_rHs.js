const s=`{% block sw_label %} <span class="sw-label" :class="labelClasses" @click.stop="$emit('selected')" > {% block sw_label_status_color_badge %} <sw-color-badge v-if="appearance === 'badged'" :variant="variant" :rounded="true" /> {% endblock %} {% block sw_label_text_holder %} <span class="sw-label__caption"> <slot> {% block sw_label_slot_default %}{% endblock %} </slot> </span> {% endblock %} {% block sw_label_dismiss %} <button v-if="showDismissable" class="sw-label__dismiss" :title="$tc('global.default.remove')" @click.prevent.stop="$emit('dismiss')" > {% block sw_select_selection_dismiss_icon %} <slot name="dismiss-icon"> <sw-icon name="regular-times-s" /> </slot> {% endblock %} </button> {% endblock %} </span> {% endblock %}`,{Component:l}=Shopware;l.register("sw-label",{template:s,emits:["selected","dismiss"],props:{variant:{type:String,required:!1,default:"",validValues:["info","danger","success","warning","neutral","neutral-reversed","primary"],validator(e){return e.length?["info","danger","success","warning","neutral","neutral-reversed","primary"].includes(e):!0}},size:{type:String,required:!1,default:"default",validValues:["small","medium","default"],validator(e){return["small","medium","default"].includes(e)}},appearance:{type:String,required:!1,default:"default",validValues:["default","pill","circle","badged"],validator(e){return["default","pill","circle","badged"].includes(e)}},ghost:{type:Boolean,required:!1,default:!1},caps:{type:Boolean,required:!1,default:!1},dismissable:{type:Boolean,required:!1,default:!0},light:{type:Boolean,required:!1,default:!1},onDismiss:{type:Function,required:!1,default:null}},computed:{labelClasses(){return[`sw-label--appearance-${this.appearance}`,`sw-label--size-${this.size}`,{[`sw-label--${this.variant}`]:this.variant,"sw-label--dismissable":this.showDismissable,"sw-label--ghost":this.ghost,"sw-label--caps":this.caps,"sw-label--light":this.light}]},showDismissable(){return!!this.$props.onDismiss&&this.dismissable}}});
