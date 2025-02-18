const e='{% block sw_cms_el_vimeo_video %} <div class="sw-cms-el-vimeo-video"> <iframe class="sw-cms-el-vimeo-video__video" :title="iframeTitle" :src="videoUrl" ></iframe> </div> {% endblock %}',{Mixin:t}=Shopware,i={template:e,mixins:[t.getByName("cms-element")],computed:{videoID(){return this.element.config.videoID.value},byLine(){return this.element.config.byLine.value?"":`byline=${this.element.config.byLine.value}&`},color(){return this.element.config.color.value?`color=${this.element.config.color.value}&`.replace("#",""):""},doNotTrack(){return this.element.config.doNotTrack.value?`dnt=${this.element.config.doNotTrack.value}&`:""},loop(){return this.element.config.loop.value?`loop=${this.element.config.loop.value}&`:""},mute(){return this.element.config.mute.value?`mute=${this.element.config.mute.value}&`:""},title(){return this.element.config.title.value?"":`title=${this.element.config.title.value}&`},portrait(){return this.element.config.portrait.value?"":`portrait=${this.element.config.portrait.value}`},controls(){return this.element.config.controls.value?"":`controls=${this.element.config.value}`},videoUrl(){return`https://player.vimeo.com/video/
            ${this.videoID}?            ${this.byLine}            ${this.color}            ${this.doNotTrack}            ${this.loop}            ${this.controls}            ${this.title}            ${this.portrait}`.replace(/ /g,"")},iframeTitle(){return this.element.config.iframeTitle.value}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("vimeo-video"),this.initElementData("vimeo-video")}}};export{i as default};
