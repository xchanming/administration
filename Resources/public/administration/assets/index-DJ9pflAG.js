import{E as i}from"./error-resolver.system-config.data-CuyHI13_.js";import{d as s}from"./extension-api-data.service-BNEYYFaA.js";import"./util.service-DptoGcql.js";import"./channel-Cvr-E4M4.js";import"./_baseUniq-DJKU6o6f.js";import"./_baseIteratee-BDDcCv4P.js";import"./camelCase-FN5n0J2F.js";import"./string.utils-B0MdTyu7.js";const l=`{% block sw_system_config %} <div class="sw-system-config"> <div v-if="salesChannelSwitchable && config.length > 1" class="sw-system-config__global-sales-channel-switch" > <sw-sales-channel-switch :label="$tc('sw-settings.system-config.labelSalesChannelSelect')" @change-sales-channel-id="onSalesChannelChanged" /> </div> {% block sw_system_config_content_card %} <sw-card v-for="card, index in config" :key="index" position-identifier="sw-system-config-content" :class="\`sw-system-config__card--\${index}\`" :is-loading="isLoading" :title="getInlineSnippet(card.title)" :ai-badge="card.aiBadge" > <slot name="beforeElements" v-bind="{ card, config: actualConfigData[currentSalesChannelId] }" ></slot> <template v-if="salesChannelSwitchable && config.length === 1" #toolbar > <sw-sales-channel-switch :label="$tc('sw-settings.system-config.labelSalesChannelSelect')" @change-sales-channel-id="onSalesChannelChanged" /> </template> <template v-if="hasCssFields"> {% block sw_system_config_content_compile_notice %} <sw-alert variant="warning"> {{ $tc('sw-settings.system-config.compileNotice') }} </sw-alert> {% endblock %} </template> <template v-if="!isLoading"> <template v-for="element in card.elements"> <slot name="card-element" v-bind="{ element: getElementBind(element), config: actualConfigData[currentSalesChannelId], card }" > {% block sw_system_config_content_card_field %} <sw-inherit-wrapper v-model:value="actualConfigData[currentSalesChannelId][element.name]" v-bind="getInheritWrapperBind(element)" :has-parent="isNotDefaultSalesChannel" :inherited-value="getInheritedValue(element)" :class="'sw-system-config--field-' + kebabCase(getElementBind(element).name)" > <template #content="props"> <sw-form-field-renderer v-bind="getElementBind(element, props)" :key="props.isInheritField + props.isInherited" :disabled="props.isInherited" :value="props.currentValue" :error="getFieldError(element.name)" @update:value="props.updateCurrentValue" /> </template> </sw-inherit-wrapper> {% endblock %} </slot> </template> <slot name="card-element-last"></slot> </template> <slot name="afterElements" v-bind="{ card, config: actualConfigData[currentSalesChannelId], index, isNotDefaultSalesChannel, inheritance: actualConfigData.null }" > </slot> </sw-card> {% endblock %} </div> {% endblock %}`,{Mixin:a}=Shopware,{object:r,string:{kebabCase:o}}=Shopware.Utils,{mapSystemConfigErrors:c}=Shopware.Component.getComponentHelper(),y={template:l,inject:["systemConfigApiService"],emits:["loading-changed","config-changed"],mixins:[a.getByName("notification"),a.getByName("sw-inline-snippet")],props:{domain:{required:!0,type:String},salesChannelId:{required:!1,type:String,default:null},salesChannelSwitchable:{type:Boolean,required:!1,default:!1},inherit:{type:Boolean,required:!1,default:!0}},data(){return{currentSalesChannelId:this.salesChannelId,isLoading:!1,config:{},actualConfigData:{},salesChannelModel:null,hasCssFields:!1}},computed:{isNotDefaultSalesChannel(){return this.currentSalesChannelId!==null},typesWithMapInheritanceSupport(){return["text","textarea","url","password","int","float","bool","checkbox","colorpicker"]}},watch:{actualConfigData:{handler(){this.emitConfig()},deep:!0},domain:{handler(){this.createdComponent()}},isLoading(e){this.$emit("loading-changed",e)}},created(){this.createdComponent()},methods:{getFieldError(e){return c(i.ENTITY_NAME,this.salesChannelId,e)},async createdComponent(){var e,t;this.isLoading=!0;try{await this.readConfig(),await this.readAll()}catch(n){(t=(e=n==null?void 0:n.response)==null?void 0:e.data)!=null&&t.errors&&this.createErrorNotification(n.response.data.errors)}finally{this.isLoading=!1}},async readConfig(){this.config=await this.systemConfigApiService.getConfig(this.domain),this.config.every(e=>e==null?void 0:e.elements.every(t=>{var n;return(n=t==null?void 0:t.config)!=null&&n.css?(this.hasCssFields=!0,!1):!0}))},readAll(){return this.isLoading=!0,this.actualConfigData.hasOwnProperty(this.currentSalesChannelId)?(this.isLoading=!1,Promise.resolve()):this.loadCurrentSalesChannelConfig()},async loadCurrentSalesChannelConfig(){this.isLoading=!0;try{const e=await this.systemConfigApiService.getValues(this.domain,this.currentSalesChannelId);this.actualConfigData[this.currentSalesChannelId]=e}finally{this.isLoading=!1}},saveAll(){return this.isLoading=!0,this.systemConfigApiService.batchSave(this.actualConfigData).finally(()=>{this.isLoading=!1})},createErrorNotification(e){let t=`<div>${this.$tc("sw-config-form-renderer.configLoadErrorMessage",e.length)}</div><ul>`;e.forEach(n=>{t=`${t}<li>${n.detail}</li>`}),t+="</ul>",this.createNotificationError({message:t,autoClose:!1})},onSalesChannelChanged(e){this.currentSalesChannelId=e,this.readAll()},hasMapInheritanceSupport(e){const t=e.config?e.config.componentName:void 0;return t==="sw-switch-field"||t==="sw-snippet-field"?!0:this.typesWithMapInheritanceSupport.includes(e.type)},getElementBind(e,t){const n=r.deepCopyObject(e);return this.hasMapInheritanceSupport(e)?n.mapInheritance=t:(delete n.config.label,delete n.config.helpText),["single-select","multi-select"].includes(n.type)&&(n.config.labelProperty="name",n.config.valueProperty="id"),e.type==="text-editor"&&(n.config.componentName="sw-text-editor"),n.config.css&&n.config.helpText===void 0&&(n.config.helpText=this.$tc("sw-settings.system-config.scssHelpText")+e.config.css),n},getInheritWrapperBind(e){return this.hasMapInheritanceSupport(e)?{}:{label:this.getInlineSnippet(e.config.label),helpText:this.getInlineSnippet(e.config.helpText)}},getInheritedValue(e){var n;let t=this.actualConfigData.null[e.name];if(typeof t=="object"&&!Array.isArray(t)&&t!==null&&(t=s(t)),t)return t;if((n=e.config)!=null&&n.componentName&&e.config.componentName==="sw-switch-field")return!1;switch(e.type){case"date":case"datetime":case"single-select":case"colorpicker":case"password":case"url":case"text":case"textarea":case"text-editor":return"";case"multi-select":return[];case"checkbox":case"bool":return!1;case"float":case"int":return 0;default:return null}},emitConfig(){this.$emit("config-changed",this.actualConfigData[this.currentSalesChannelId])},kebabCase(e){return o(e)}}};export{y as default};
