const i=`{% block sw_settings_media_index %} <sw-page class="sw-settings-media"> {% block sw_settings_media_header %} <template #smart-bar-header> <h2>{{ $tc('sw-settings.index.title') }} <sw-icon name="regular-chevron-right-xs" small /> {{ $tc('sw-settings-media.general.title') }} </h2> </template> {% endblock %} {% block sw_settings_media_smart_bar_actions %} <template #smart-bar-actions> {% block sw_settings_media_actions_save %} <sw-button-process class="sw-settings-media__save-action" :is-loading="isLoading" :process-success="isSaveSuccessful" :disabled="isLoading" variant="primary" @update:process-success="saveFinish" @click="onSave" > {{ $tc('sw-settings-media.general.buttonSave') }} </sw-button-process> {% endblock %} </template> {% endblock %} {% block sw_settings_media_content %} <template #content> <sw-card-view> <template v-if="isLoading"> <sw-skeleton /> <sw-skeleton /> </template> <sw-system-config v-show="!isLoading" ref="systemConfig" domain="core.media" @loading-changed="onLoadingChanged" > <template #card-element-last> <mt-slider v-if="!isLoading" v-model="sliderValue" :min="0" :max="100" @input="onSliderChange" /> </template> </sw-system-config> </sw-card-view> </template> {% endblock %} </sw-page> {% endblock %}`,{Mixin:a}=Cicada,n={template:i,compatConfig:Cicada.compatConfig,inject:["systemConfigApiService"],mixins:[a.getByName("notification")],data(){return{isLoading:!1,isSaveSuccessful:!1,sliderValue:0}},metaInfo(){return{title:this.$createTitle()}},created(){this.createdComponent()},methods:{async createdComponent(){var e,t;this.isLoading=!0;try{const s=await this.systemConfigApiService.getValues("core.media");this.sliderValue=s["core.media.defaultLightIntensity"]!==void 0?s["core.media.defaultLightIntensity"]:100}catch(s){(t=(e=s==null?void 0:s.response)==null?void 0:e.data)!=null&&t.errors&&this.createErrorNotification(s.response.data.errors)}finally{this.isLoading=!1}},saveFinish(){this.isSaveSuccessful=!1},onSave(){this.isSaveSuccessful=!1,this.isLoading=!0,this.$refs.systemConfig.saveAll().then(async()=>{this.isLoading=!1,this.isSaveSuccessful=!0,await this.systemConfigApiService.batchSave({null:{"core.media.defaultLightIntensity":this.sliderValue}})}).catch(e=>{this.isLoading=!1,this.createNotificationError({message:e})})},onLoadingChanged(e){this.isLoading=e},onSliderChange(e){this.sliderValue=e}}};export{n as default};
//# sourceMappingURL=index-BjIf12PB.js.map
