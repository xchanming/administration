const t=`{% block sw_custom_field_type_base_content %} {% parent() %} {% block sw_custom_field_type_number_container %} <sw-container columns="1fr 1fr" gap="0 20px" > {% block sw_custom_field_type_number_container_numbertype %} <sw-select-field v-model:value="currentCustomField.config.numberType" :label="$tc('sw-settings-custom-field.customField.detail.labelNumberType')" :options="numberTypes" /> {% endblock %} {% block sw_custom_field_type_number_container_step %} <sw-number-field v-model:value="currentCustomField.config.step" :label="$tc('sw-settings-custom-field.customField.detail.labelStep')" /> {% endblock %} {% block sw_custom_field_type_number_container_min %} <sw-number-field v-model:value="currentCustomField.config.min" :label="$tc('sw-settings-custom-field.customField.detail.labelMin')" /> {% endblock %} {% block sw_custom_field_type_number_container_max %} <sw-number-field v-model:value="currentCustomField.config.max" :label="$tc('sw-settings-custom-field.customField.detail.labelMax')" /> {% endblock %} </sw-container> {% endblock %} {% endblock %}`,l={template:t,data(){return{propertyNames:{label:this.$tc("sw-settings-custom-field.customField.detail.labelLabel"),placeholder:this.$tc("sw-settings-custom-field.customField.detail.labelPlaceholder"),helpText:this.$tc("sw-settings-custom-field.customField.detail.labelHelpText")},numberTypes:[{id:"int",name:this.$tc("sw-settings-custom-field.customField.detail.labelInt")},{id:"float",name:this.$tc("sw-settings-custom-field.customField.detail.labelFloat")}]}},watch:{"currentCustomField.config.numberType"(e){this.currentCustomField.type=e}},created(){this.createdComponent()},methods:{createdComponent(){this.currentCustomField.config.numberType||this.$set(this.currentCustomField.config,"numberType","int")}}};export{l as default};
