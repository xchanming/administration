import{E as i}from"./error-resolver.system-config.data-Cbnv_v_4.js";import"./CicadaError-VTJe91--.js";import"./util.service-B_A8c2s1.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";import"./_baseUniq-B2mRmqmX.js";import"./_baseIteratee-vB4JeBI0.js";import"./camelCase-C_yyocYD.js";import"./string.utils-Bdo6o_1y.js";const s=`{% block sw_system_config %} <div class="sw-system-config"> <div v-if="salesChannelSwitchable && config.length > 1" class="sw-system-config__global-sales-channel-switch" > <sw-sales-channel-switch :label="$tc('sw-settings.system-config.labelSalesChannelSelect')" @change-sales-channel-id="onSalesChannelChanged" /> </div> {% block sw_system_config_content_card %} <sw-card v-for="card, index in config" :key="index" position-identifier="sw-system-config-content" :class="\`sw-system-config__card--\${index}\`" :is-loading="isLoading" :title="getInlineSnippet(card.title)" :ai-badge="card.aiBadge" > <slot name="beforeElements" v-bind="{ card, config: actualConfigData[currentSalesChannelId] }" ></slot> <template v-if="salesChannelSwitchable && config.length === 1" #toolbar > <sw-sales-channel-switch :label="$tc('sw-settings.system-config.labelSalesChannelSelect')" @change-sales-channel-id="onSalesChannelChanged" /> </template> <template v-if="hasCssFields"> {% block sw_system_config_content_compile_notice %} <sw-alert variant="warning"> {{ $tc('sw-settings.system-config.compileNotice') }} </sw-alert> {% endblock %} </template> <template v-if="!isLoading"> <template v-for="element in card.elements"> <slot name="card-element" v-bind="{ element: getElementBind(element), config: actualConfigData[currentSalesChannelId], card }" > {% block sw_system_config_content_card_field %} <sw-inherit-wrapper v-model:value="actualConfigData[currentSalesChannelId][element.name]" v-bind="getInheritWrapperBind(element)" :has-parent="isNotDefaultSalesChannel" :inherited-value="getInheritedValue(element)" :class="'sw-system-config--field-' + kebabCase(getElementBind(element).name)" > <template #content="props"> <sw-form-field-renderer v-bind="getElementBind(element, props)" :key="props.isInheritField + props.isInherited" :disabled="props.isInherited" :value="props.currentValue" :error="getFieldError(element.name)" @update:value="props.updateCurrentValue" /> </template> </sw-inherit-wrapper> {% endblock %} </slot> </template> <slot name="card-element-last"></slot> </template> <slot name="afterElements" v-bind="{ card, config: actualConfigData[currentSalesChannelId], index, isNotDefaultSalesChannel, inheritance: actualConfigData.null }" > </slot> </sw-card> {% endblock %} </div> {% endblock %}`,{Mixin:a}=Cicada,{object:l,string:{kebabCase:r}}=Cicada.Utils,{mapSystemConfigErrors:o}=Cicada.Component.getComponentHelper(),y={template:s,compatConfig:Cicada.compatConfig,inject:["systemConfigApiService"],emits:["loading-changed","config-changed"],mixins:[a.getByName("notification"),a.getByName("sw-inline-snippet")],props:{domain:{required:!0,type:String},salesChannelId:{required:!1,type:String,default:null},salesChannelSwitchable:{type:Boolean,required:!1,default:!1},inherit:{type:Boolean,required:!1,default:!0}},data(){return{currentSalesChannelId:this.salesChannelId,isLoading:!1,config:{},actualConfigData:{},salesChannelModel:null,hasCssFields:!1}},computed:{isNotDefaultSalesChannel(){return this.currentSalesChannelId!==null},typesWithMapInheritanceSupport(){return["text","textarea","url","password","int","float","bool","checkbox","colorpicker"]}},watch:{actualConfigData:{handler(){this.emitConfig()},deep:!0},domain:{handler(){this.createdComponent()}},isLoading(e){this.$emit("loading-changed",e)}},created(){this.createdComponent()},methods:{getFieldError(e){return o(i.ENTITY_NAME,this.salesChannelId,e)},async createdComponent(){var e,n;this.isLoading=!0;try{await this.readConfig(),await this.readAll()}catch(t){(n=(e=t==null?void 0:t.response)==null?void 0:e.data)!=null&&n.errors&&this.createErrorNotification(t.response.data.errors)}finally{this.isLoading=!1}},async readConfig(){this.config=await this.systemConfigApiService.getConfig(this.domain),this.config.every(e=>e==null?void 0:e.elements.every(n=>{var t;return(t=n==null?void 0:n.config)!=null&&t.css?(this.hasCssFields=!0,!1):!0}))},readAll(){return this.isLoading=!0,this.actualConfigData.hasOwnProperty(this.currentSalesChannelId)?(this.isLoading=!1,Promise.resolve()):this.loadCurrentSalesChannelConfig()},async loadCurrentSalesChannelConfig(){this.isLoading=!0;try{const e=await this.systemConfigApiService.getValues(this.domain,this.currentSalesChannelId);this.isCompatEnabled("INSTANCE_SET")?this.$set(this.actualConfigData,this.currentSalesChannelId,e):this.actualConfigData[this.currentSalesChannelId]=e}finally{this.isLoading=!1}},saveAll(){return this.isLoading=!0,this.systemConfigApiService.batchSave(this.actualConfigData).finally(()=>{this.isLoading=!1})},createErrorNotification(e){let n=`<div>${this.$tc("sw-config-form-renderer.configLoadErrorMessage",e.length)}</div><ul>`;e.forEach(t=>{n=`${n}<li>${t.detail}</li>`}),n+="</ul>",this.createNotificationError({message:n,autoClose:!1})},onSalesChannelChanged(e){this.currentSalesChannelId=e,this.readAll()},hasMapInheritanceSupport(e){const n=e.config?e.config.componentName:void 0;return n==="sw-switch-field"||n==="sw-snippet-field"?!0:this.typesWithMapInheritanceSupport.includes(e.type)},getElementBind(e,n){const t=l.deepCopyObject(e);return this.hasMapInheritanceSupport(e)?t.mapInheritance=n:(delete t.config.label,delete t.config.helpText),["single-select","multi-select"].includes(t.type)&&(t.config.labelProperty="name",t.config.valueProperty="id"),e.type==="text-editor"&&(t.config.componentName="sw-text-editor"),t.config.css&&t.config.helpText===void 0&&(t.config.helpText=this.$tc("sw-settings.system-config.scssHelpText")+e.config.css),t},getInheritWrapperBind(e){return this.hasMapInheritanceSupport(e)?{}:{label:this.getInlineSnippet(e.config.label),helpText:this.getInlineSnippet(e.config.helpText)}},getInheritedValue(e){var t;const n=this.actualConfigData.null[e.name];if(n)return n;if((t=e.config)!=null&&t.componentName&&e.config.componentName==="sw-switch-field")return!1;switch(e.type){case"date":case"datetime":case"single-select":case"colorpicker":case"password":case"url":case"text":case"textarea":case"text-editor":return"";case"multi-select":return[];case"checkbox":case"bool":return!1;case"float":case"int":return 0;default:return null}},emitConfig(){this.$emit("config-changed",this.actualConfigData[this.currentSalesChannelId])},kebabCase(e){return r(e)}}};export{y as default};
//# sourceMappingURL=index-CbmlitAl.js.map
