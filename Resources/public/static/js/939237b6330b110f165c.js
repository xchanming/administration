(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[76389],{703199:function(){},476389:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}}),n(689758);let{Mixin:i}=Cicada;var a={template:'\n{% block sw_cms_element_text %}\n<div class="sw-cms-el-text">\n    <div\n        v-if="element.config.content.source === \'mapped\'"\n        class="sw-cms-el-text__mapping-preview content-editor"\n        v-html="$sanitize(demoValue)"\n    ></div>\n\n    <sw-text-editor\n        v-else\n        v-model:value="element.config.content.value"\n        :disabled="disabled"\n        :vertical-align="element.config.verticalAlign.value"\n        :allow-inline-data-mapping="true"\n        :is-inline-edit="true"\n        sanitize-input\n        sanitize-field-name="app_cms_block.template"\n        enable-transparent-background\n        @blur="onBlur"\n        @update:value="onInput"\n    />\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,emits:["element-update"],mixins:[i.getByName("cms-element")],data(){return{editable:!0,demoValue:""}},watch:{"cmsPageState.currentDemoEntity":{handler(){this.updateDemoValue()}},"element.config.content.source":{handler(){this.updateDemoValue()}}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("text")},updateDemoValue(){"mapped"===this.element.config.content.source&&(this.demoValue=this.getDemoValue(this.element.config.content.value))},onBlur(e){this.emitChanges(e)},onInput(e){this.emitChanges(e)},emitChanges(e){e!==this.element.config.content.value&&(this.element.config.content.value=e,this.$emit("element-update",this.element))}}}},689758:function(e,t,n){var i=n(703199);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(745346).Z("204b0002",i,!0,{})}}]);