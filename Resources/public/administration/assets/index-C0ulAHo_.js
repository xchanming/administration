const c=`{% block sw_gtc_checkbox %} <div class="sw-gtc-checkbox"> {% block sw_gtc_checkbox_input %} <sw-checkbox-field :value="value" @update:value="onChange" > <template #label> {% block sw_gtc_checkbox_input_label %} {{ $tc('global.sw-gtc-checkbox.label') }} {% block sw_gtc_checkbox_input_label_link %} <sw-external-link class="sw-external-link" :href="$tc('global.sw-gtc-checkbox.url')" > {% block sw_gtc_checkbox_input_label_text %} {{ $tc('global.sw-gtc-checkbox.link') }} {% endblock %} </sw-external-link> {% endblock %} {% endblock %} </template> </sw-checkbox-field> {% endblock %} </div> {% endblock %}`;Cicada.Component.register("sw-gtc-checkbox",{template:c,compatConfig:Cicada.compatConfig,inject:["feature"],emits:["update:value"],props:{value:{type:Boolean,required:!0}},methods:{onChange(e){this.$emit("update:value",e)}}});
//# sourceMappingURL=index-C0ulAHo_.js.map
