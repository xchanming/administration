(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[1683],{495837:function(){},401683:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return t}}),i(777965);var t={template:'\n{% block sw_order_document_order_inline_field %}\n<div class="sw-order-inline-field">\n\n    <slot v-if="editable">\n        <sw-confirm-field\n            :value="value"\n            :required="required"\n            @input="onInput"\n        />\n    </slot>\n    <span v-else>\n        {{ displayValue }}\n    </span>\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,emits:["update:value"],props:{value:{type:String,required:!1,default:""},displayValue:{type:String,required:!0,default:""},editable:{type:Boolean,required:!0,default:!1},required:{type:Boolean,required:!1,default:!1}},methods:{onInput(e){this.$emit("update:value",e)}}}},777965:function(e,n,i){var t=i(495837);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),i(745346).Z("3775b62c",t,!0,{})}}]);