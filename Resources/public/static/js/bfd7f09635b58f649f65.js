(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[8804],{40325:function(){},408804:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(55387);let{Mixin:a}=Cicada,{Criteria:i}=Cicada.Data;var s=Cicada.Component.wrapComponentConfig({template:'\n{% block sw_cms_page_select %}\n<div class="sw-cms-page-select">\n    <sw-entity-single-select\n        v-bind="bind"\n        ref="component"\n        v-model:value="currentValue"\n        class="sw-cms-page-select-box"\n        entity="cms_page"\n        :criteria="pageTypeCriteria"\n        show-clearable-button\n    />\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,emits:["update:value"],mixins:[a.getByName("sw-inline-snippet")],props:{pageType:{type:String,required:!0},value:{type:String,required:!1,default:null}},data(){return{currentValue:this.value}},computed:{bind(){return{...this.$attrs,...this.translations}},translations(){return this.getTranslations()},pageTypeCriteria(){let e=new i(1,25);return e.addFilter(i.equals("type",this.pageType)),e}},watch:{currentValue(e){e!==this.value&&this.$emit("update:value",e)},value(){this.currentValue=this.value}},methods:{getTranslations(){let e={};return["label","placeholder","helpText"].forEach(t=>{let n=this.$attrs[t];n&&""!==n&&(e[t]=this.getInlineSnippet(n))}),e}}})},55387:function(e,t,n){var a=n(40325);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),n(745346).Z("3f2154c4",a,!0,{})}}]);