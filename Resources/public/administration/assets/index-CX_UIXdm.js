const d='{% block sw_radio_field %} <sw-base-field class="sw-field--radio" :class="classes" :name="formFieldName" v-bind="{ ...$attrs, ...inheritanceAttrs }" > <template #sw-field-input="{ identification, helpText, error, disabled }"> <sw-help-text v-if="helpText" :text="helpText" /> <div class="sw-field__radio-group"> <div v-for="(option, index) in options" :key="index" class="sw-field__radio-option group-bordered" :class="{ \'sw-field__radio-option-checked\': currentIndex === index, \'is--disabled\': disabled || option.disabled }" > <div class="sw-field__radio-input"> <input :id="`${identification}-${index}`" type="radio" :name="identification" :value="index" :disabled="disabled || option.disabled" :checked="currentIndex === index" @change="onChange" > <div class="sw-field__radio-state"></div> </div> <label class="sw-field__radio-option-label" :class="{\'error--selection\': !!error && currentIndex === index}" :for="`${identification}-${index}`" > <span>{{ option.name }}</span> {% block sw_radio_field_help_text %} <sw-help-text v-if="option.helpText" :text="option.helpText" /> {% endblock %} <div v-if="option.description" class="sw-field__radio-option-description" > {{ option.description }} </div> </label> <slot :name="`custom-field-${option.value}`" v-bind="{ option, disabled, checked: currentIndex === index }" ></slot> </div> </div> <div v-if="description" class="sw-field__radio-description" > {{ description }} </div> </template> <template #label> <slot name="label"></slot> </template> <template #hint> <slot name="hint"></slot> </template> </sw-base-field> {% endblock %}',{Component:o,Mixin:t}=Cicada;o.register("sw-radio-field",{template:d,compatConfig:Cicada.compatConfig,inheritAttrs:!1,inject:["feature"],emits:["update:value"],mixins:[t.getByName("sw-form-field"),t.getByName("remove-api-error")],props:{bordered:{type:Boolean,required:!1,default:!1},block:{type:Boolean,required:!1,default:!1},description:{type:String,required:!1,default:null},options:{type:Array,required:!1,default:()=>[]},value:{required:!1}},computed:{classes(){return[{"sw-field--radio-bordered":this.bordered,"sw-field--radio-block":this.block}]},currentIndex(){const e=this.options.findIndex(i=>i.value===this.value);return e<0&&console.warn(`Given value "${this.value}" does not exists in given options`),e}},methods:{onChange(e){const i=e.target.value;this.options[i]===void 0&&console.warn(`Selected index "${this.value}" does not exists in given options`),this.$emit("update:value",this.options[i].value)}}});
//# sourceMappingURL=index-CX_UIXdm.js.map
