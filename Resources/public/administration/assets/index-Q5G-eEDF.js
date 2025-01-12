const s=`{% block sw_password_field %} {% block sw_text_field %} <sw-contextual-field class="sw-field--password" v-bind="{ ...$attrs, ...inheritanceAttrs }" :name="formFieldName" @inheritance-restore="$emit('inheritance-restore', $event)" @inheritance-remove="$emit('inheritance-remove', $event)" > <template #sw-field-input="{ identification, disabled, size, setFocusClass, removeFocusClass }"> <div class="sw-field--password__container"> <input :id="identification" :type="showPassword ? 'text' : 'password'" :name="identification" :placeholder="passwordPlaceholder" :disabled="disabled" :value="currentValue" :autocomplete="autocomplete" @input="onInput" @change="onChange" @focus="setFocusClass" @blur="removeFocusClass" v-on="additionalListeners" > <span v-if="passwordToggleAble" :title="showPassword ? $tc('global.sw-field.titleHidePassword') : $tc('global.sw-field.titleShowPassword')" class="sw-field__toggle-password-visibility" role="button" tabindex="0" @click="onTogglePasswordVisibility(disabled)" @keydown.enter="onTogglePasswordVisibility(disabled)" > <sw-icon v-if="showPassword" name="regular-eye-slash" small /> <sw-icon v-else name="regular-eye" small /> </span> </div> </template> <template v-if="copyable" #sw-contextual-field-suffix="{ identification }" > <sw-field-copyable v-if="copyable" :display-name="identification" :copyable-text="currentValue" :tooltip="copyableTooltip" /> </template> <template #label> <slot name="label"></slot> </template> <template #hint> <slot name="hint"></slot> </template> </sw-contextual-field> {% endblock %} {% endblock %}`;Cicada.Component.extend("sw-password-field-deprecated","sw-text-field-deprecated",{template:s,emits:["inheritance-restore","inheritance-remove"],props:{passwordToggleAble:{type:Boolean,required:!1,default:!0},placeholderIsPassword:{type:Boolean,required:!1,default:!1},autocomplete:{type:String,required:!1,default:null}},data(){return{showPassword:!1}},computed:{typeFieldClass(){return this.passwordToggleAble?"sw-field--password":"sw-field--password sw-field--password--untoggable"},passwordPlaceholder(){return this.showPassword||!this.placeholderIsPassword?this.placeholder:"*".repeat(this.placeholder.length?this.placeholder.length:6)}},methods:{onTogglePasswordVisibility(e){e||(this.showPassword=!this.showPassword)}}});
//# sourceMappingURL=index-Q5G-eEDF.js.map
