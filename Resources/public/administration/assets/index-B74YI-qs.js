const e=`{% block sw_settings_tax_rule_type_zip_code %} <sw-text-field v-model:value="taxRule.data.zipCode" :label="$tc('sw-settings-tax.taxRuleCard.labelZipCode')" /> {% endblock %}`,t={template:e,props:{taxRule:{type:Object,required:!0}},created(){this.createdComponent()},methods:{createdComponent(){this.taxRule.data||(this.taxRule.data={zipCode:""})}}};export{t as default};
