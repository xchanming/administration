const o=`{% block sw_extension_sdk_module %} <sw-page class="sw-extension-sdk-module" :show-search-bar="showSearchBar" :show-smart-bar="showSmartBar" > <template v-if="showSmartBar" #smart-bar-header > {% block sw_extension_sdk_module_header %} <template v-if="!isLoading"> <h2>{{ $tc(module.heading ?? '') }}</h2> </template> {% endblock %} </template> <template v-if="showSmartBar && back" #smart-bar-back > <router-link :to="{ name: back }" > <sw-icon name="regular-chevron-left" small /> </router-link> </template> {% block sw_extension_sdk_module_smart_bar_buttons %} <template v-if="showSmartBar" #smart-bar-actions > <sw-button v-for="button in smartBarButtons" :id="button.buttonId" :key="button.buttonId" :disabled="button.disabled" :variant="button.variant" @click="button.onClickCallback" > {{ $tc(button.label ?? '') }} </sw-button> </template> {% endblock %} <template #content> {% block sw_extension_sdk_module_content %} {% block sw_extension_sdk_module_content_iframe_renderer %} <sw-iframe-renderer v-if="!isLoading" ref="iframeRenderer" :src="module.baseUrl" :location-id="module.locationId" full-screen /> {% endblock %} {% block sw_extension_sdk_module_content_loader %} <sw-loader v-else-if="!timedOut" /> {% endblock %} {% block sw_extension_sdk_module_content_error_state %} <sw-my-apps-error-page v-if="timedOut" /> {% endblock %} {% endblock %} </template> {% block sw_extension_sdk_module_language_switch %} <template v-if="showSmartBar && showLanguageSwitch" #language-switch > <sw-language-switch :change-global-language="true" @on-change="onChangeLanguage" /> </template> {% endblock %} </sw-page> {% endblock %}`;Shopware.Component.register("sw-extension-sdk-module",{template:o,props:{id:{type:String,required:!0},back:{type:String,required:!1,default:null}},data(){return{timedOut:!1,loadingTimeOut:null}},computed:{module(){return Shopware.Store.get("extensionSdkModules").modules.find(e=>e.id===this.id)},isLoading(){return!this.module},showSearchBar(){var e;return((e=this.module)==null?void 0:e.displaySearchBar)??!0},showSmartBar(){var e;return((e=this.module)==null?void 0:e.displaySmartBar)??!0},showLanguageSwitch(){var e;return!!((e=this.module)!=null&&e.displayLanguageSwitch)},smartBarButtons(){return Shopware.Store.get("extensionSdkModules").smartBarButtons.filter(e=>{var t;return e.locationId===((t=this.module)==null?void 0:t.locationId)})}},watch:{"module.locationId"(){this.$refs.iframeRenderer&&(this.$refs.iframeRenderer.$refs.iframe.src=`${this.$refs.iframeRenderer.$refs.iframe.src}`)}},created(){this.loadingTimeOut=window.setTimeout(()=>{this.isLoading&&(this.timedOut=!0,this.loadingTimeOut=null)},7e3)},beforeUnmount(){this.loadingTimeOut&&window.clearTimeout(this.loadingTimeOut)},methods:{onChangeLanguage(e){Shopware.Store.get("context").setApiLanguageId(e)}}});Shopware.Module.register("sw-extension-sdk",{type:"core",name:"sw-extension-sdk",title:"sw-extension-sdk.general.mainMenuItemGeneral",description:"sw-extension-sdk.general.moduleDescription",icon:"regular-view-grid",color:"#9AA8B5",routePrefixPath:"extension",routes:{index:{component:"sw-extension-sdk-module",path:":id/:back?",props:{default(e){const{id:t,back:n}=e.params;return{id:t,back:n}}}}},navigation:[{id:"sw-extension-sdk",label:"sw-extension-sdk.general.mainMenuItemGeneral",icon:"regular-view-grid",color:"#9AA8B5",position:110}]});
