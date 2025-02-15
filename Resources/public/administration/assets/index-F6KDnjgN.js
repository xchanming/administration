const e='{# v-on="$listeners" needed becaues vue/compat removes them from $attrs #} {# New mt-button component #} {% block sw_button %} <mt-button v-if="useMeteorComponent" v-bind="$attrs" @click="onClick" > <slot></slot> </mt-button> {% endblock %} {# v-on="$listeners" needed becaues vue/compat removes them from $attrs #} {# Deprecated component #} {% block sw_button_deprecated %} <sw-button-deprecated v-else v-bind="$attrs" :router-link="routerLink" > <slot></slot> </sw-button-deprecated> {% endblock %}',{Component:t}=Shopware;t.register("sw-button",{template:e,props:{routerLink:{type:[String,Object],default:null,required:!1}},computed:{useMeteorComponent(){return Shopware.Feature.isActive("ENABLE_METEOR_COMPONENTS")?!0:(Shopware.Utils.debug.warn("sw-button",'The old usage of "sw-button" is deprecated and will be removed in v6.7.0.0. Please use "mt-button" instead.'),!1)}},methods:{onClick(){this.routerLink&&this.$router.push(this.routerLink)}}});
