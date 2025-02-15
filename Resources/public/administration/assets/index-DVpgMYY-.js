const s=`{% block sw_cms_element_youtube_video_config %} <div class="sw-cms-el-config-youtube-video"> {% block sw_cms_element_youtube_video_config_video_id %} <sw-text-field v-model:value="videoID" class="sw-cms-el-config-youtube-video__video-id" :label="$tc('sw-cms.elements.vimeoVideo.config.label.videoId')" :placeholder="$tc('sw-cms.elements.vimeoVideo.config.placeholder.videoId')" /> {% endblock %} {% block sw_cms_element_youtube_video_config_title %} <sw-text-field v-model:value="element.config.iframeTitle.value" :label="$tc('sw-cms.elements.vimeoVideo.config.label.videoTitle')" :placeholder="$tc('sw-cms.elements.vimeoVideo.config.placeholder.videoTitle')" /> {% endblock %} <div class="sw-cms-el-config-youtube-video__switches"> {% block sw_cms_element_youtube_video_config_autoplay %} <sw-switch-field v-model:value="element.config.autoPlay.value" :label="$tc('sw-cms.elements.vimeoVideo.config.label.autoPlay')" :help-text="$tc('sw-cms.elements.vimeoVideo.config.helpText.autoPlay')" /> {% endblock %} {% block sw_cms_element_youtube_video_config_loop %} <sw-switch-field v-model:value="element.config.loop.value" :label="$tc('sw-cms.elements.vimeoVideo.config.label.loop')" /> {% endblock %} {% block sw_cms_element_youtube_video_config_show_controls %} <sw-switch-field v-model:value="element.config.showControls.value" :label="$tc('sw-cms.elements.vimeoVideo.config.label.showControls')" /> {% endblock %} {% block sw_cms_element_youtube_video_config_advanced_privacy_mode %} <sw-switch-field v-model:value="element.config.advancedPrivacyMode.value" :label="$tc('sw-cms.elements.vimeoVideo.config.label.advancedPrivacy')" :help-text="$tc('sw-cms.elements.vimeoVideo.config.helpText.advancedPrivacy')" /> {% endblock %} </div> <div class="sw-cms-el-config-youtube-video__start-and-end"> {% block sw_cms_element_youtube_video_config_start %} <sw-text-field :value="startValue" :label="$tc('sw-cms.elements.vimeoVideo.config.label.start')" placeholder="0:00" @update:value="setTimeValue($event, 'start')" /> {% endblock %} {% block sw_cms_element_youtube_video_config_end %} <sw-text-field :value="endValue" :label="$tc('sw-cms.elements.vimeoVideo.config.label.end')" placeholder="0:00" @update:value="setTimeValue($event, 'end')" /> {% endblock %} </div> {% block sw_cms_element_youtube_video_config_display_mode %} <sw-select-field v-model:value="element.config.displayMode.value" :placeholder="$tc('sw-cms.elements.general.config.label.displayMode')" :label="$tc('sw-cms.elements.general.config.label.displayMode')" > <option value="standard"> {{ $tc('sw-cms.elements.general.config.label.displayModeStandard') }} </option> <option value="streched"> {{ $tc('sw-cms.elements.general.config.label.displayModeStretch') }} </option> </sw-select-field> {% endblock %} {% block sw_cms_element_youtube_video_config_needs_confirmation %} <div class="sw-cms-el-config-youtube-video__confirmation"> <sw-switch-field v-model:value="element.config.needsConfirmation.value" :label="$tc('sw-cms.elements.vimeoVideo.config.label.needsConfirmation')" /> </div> {% endblock %} {% block sw_cms_element_youtube_video_config_preview_media %} <sw-cms-mapping-field v-if="element.config.needsConfirmation.value" v-model:config="element.config.previewMedia" :label="$tc('sw-cms.elements.vimeoVideo.config.label.previewImage')" value-types="entity" entity="media" > <sw-media-upload-v2 variant="regular" :upload-tag="uploadTag" :source="previewSource" :allow-multi-select="false" :default-folder="cmsPageState.pageEntityName" :caption="$tc('sw-cms.elements.general.config.caption.mediaUpload')" @media-upload-sidebar-open="onOpenMediaModal" @media-upload-remove-image="onImageRemove" /> {% block sw_cms_element_youtube_video_config_preview_media_display %} <template #preview="{ demoValue }"> <div class="sw-cms-el-config-image__mapping-preview"> <img v-if="demoValue.url" :src="demoValue.url" alt="" > <sw-alert v-else class="sw-cms-el-config-image__preview-info" variant="info" > {{ $tc('sw-cms.detail.label.mappingEmptyPreview') }} </sw-alert> </div> </template> {% endblock %} </sw-cms-mapping-field> {% block sw_cms_element_youtube_video_config_preview_media_upload_listener %} <sw-upload-listener :upload-tag="uploadTag" auto-upload @media-upload-finish="onImageUpload" /> {% endblock %} {% block sw_cms_element_youtube_video_config_preview_media_modal %} <sw-media-modal-v2 v-if="mediaModalIsOpen" variant="full" :caption="$tc('sw-cms.elements.general.config.caption.mediaUpload')" :entity-context="cmsPageState.entityName" :allow-multi-select="false" :initial-folder-id="cmsPageState.defaultMediaFolderId" @media-upload-remove-image="onImageRemove" @media-modal-selection-change="onSelectionChanges" @modal-close="onCloseModal" /> {% endblock %} {% endblock %} </div> {% endblock %}`,{Mixin:d}=Shopware,c={template:s,inject:["repositoryFactory"],emits:["element-update"],mixins:[d.getByName("cms-element")],data(){return{mediaModalIsOpen:!1,initialFolderId:null}},computed:{startValue(){return this.convertTimeToInputFormat(this.element.config.start.value).string},endValue(){return this.convertTimeToInputFormat(this.element.config.end.value).string},videoID:{get(){return this.element.config.videoID.value},set(t){this.element.config.videoID.value=this.shortenLink(t)}},mediaRepository(){return this.repositoryFactory.create("media")},uploadTag(){return`cms-element-youtube-video-config-${this.element.id}`},previewSource(){return this.element.data&&this.element.data.previewMedia&&this.element.data.previewMedia.id?this.element.data.previewMedia:this.element.config.previewMedia.value}},created(){this.createdComponent()},methods:{setTimeValue(t,e){this.element.config[e].value=this.convertTimeToUrlFormat(t).string},createdComponent(){this.initElementConfig("youtube-video")},convertTimeToInputFormat(t){const e={};let i=t;/^[0-9]*$/.test(t)||(i=0);const l=Math.floor(i/60);let o=i-l*60;return e.minutes=l,e.seconds=o,o.toString().length===1&&(o=`0${o}`),e.string=`${l}:${o}`,e},convertTimeToUrlFormat(t){const e={};let i=t;/[0-9]?[0-9]:[0-9][0-9]/.test(i)||(i="00:00");const l=i.split(":");return e.minutes=Number(l[0]),e.seconds=Number(l[1]),e.string=e.minutes*60+e.seconds,e},shortenLink(t){const e=new URL(t);switch(e.hostname){case"www.youtu.be":case"youtu.be":return e.pathname.substring(1);case"www.youtube.com":case"youtube.com":return e.searchParams.get("v");default:return t}},async onImageUpload({targetId:t}){const e=await this.mediaRepository.get(t);this.element.config.previewMedia.value=e.id,this.updateElementData(e),this.$emit("element-update",this.element)},onImageRemove(){this.element.config.previewMedia.value=null,this.updateElementData(),this.$emit("element-update",this.element)},onCloseModal(){this.mediaModalIsOpen=!1},onSelectionChanges(t){const e=t[0];this.element.config.previewMedia.value=e.id,this.updateElementData(e),this.$emit("element-update",this.element)},updateElementData(t=null){this.element.data.previewMediaId=t===null?null:t.id,this.element.data.previewMedia=t},onOpenMediaModal(){this.mediaModalIsOpen=!0}}};export{c as default};
