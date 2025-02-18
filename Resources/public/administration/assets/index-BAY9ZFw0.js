const t='{# v-on="$listeners" needed becaues vue/compat removes them from $attrs #} {# New mt-checkbox component #} {% block sw_checkbox_field %} <mt-checkbox v-if="useMeteorComponent" v-bind="$attrs" :checked="compatValue" @update:checked="handleUpdateChecked" > <template v-for="(index, name) in getSlots()" #[name]="data" > <slot :name="name" v-bind="data" > </slot> </template> <slot></slot> </mt-checkbox> {% endblock %} {# v-on="$listeners" needed becaues vue/compat removes them from $attrs #} {# Deprecated component #} {% block sw_checkbox_field_deprecated %} <sw-checkbox-field-deprecated v-else v-bind="$attrs" :value="value" > <template v-for="(index, name) in getSlots()" #[name]="data" > <slot :name="name" v-bind="data || {}" > </slot> </template> </sw-checkbox-field-deprecated> {% endblock %}',{Component:a}=Shopware;a.register("sw-checkbox-field",{template:t,props:{modelValue:{type:String,required:!1,default:null},value:{type:Boolean,required:!1,default:null}},computed:{useMeteorComponent(){return Shopware.Feature.isActive("ENABLE_METEOR_COMPONENTS")?!0:(Shopware.Utils.debug.warn("sw-checkbox-field",'The old usage of "sw-checkbox-field" is deprecated and will be removed in v6.7.0.0. Please use "mt-checkbox" instead.'),!1)},compatValue:{get(){return this.value===null||this.value===void 0?this.modelValue:this.value},set(e){this.$emit("update:value",e),this.$emit("update:modelValue",e)}}},methods:{getSlots(){return this.$slots},handleUpdateChecked(e){this.$emit("update:checked",e),this.$emit("update:value",e)}}});
