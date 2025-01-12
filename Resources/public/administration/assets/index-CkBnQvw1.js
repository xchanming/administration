const e='{% block sw_cms_element_youtube_video %} <div class="sw-cms-el-youtube-video" :class="displayModeClass" > <iframe class="sw-cms-el-youtube-video__video" :src="videoUrl" :title="iframeTitle" ></iframe> </div> {% endblock %}',{Mixin:t}=Cicada,o={template:e,compatConfig:Cicada.compatConfig,mixins:[t.getByName("cms-element")],computed:{videoID(){return this.element.config.videoID.value},relatedVideos(){return"rel=0&"},loop(){return this.element.config.loop.value?`loop=1&playlist=${this.videoID}&`:""},showControls(){return this.element.config.showControls.value?"controls=1&":"controls=0&"},start(){return this.element.config.start.value===0?"":`start=${this.element.config.start.value}&`},end(){return this.element.config.end.value?`end=${this.element.config.end.value}&`:""},disableKeyboard(){return"disablekb=1"},videoUrl(){return`https://www.youtube-nocookie.com/embed/            ${this.videoID}?            ${this.relatedVideos}            ${this.loop}            ${this.showControls}            ${this.start}            ${this.end}            ${this.disableKeyboard}`.replace(/ /g,"")},displayModeClass(){return this.element.config.displayMode.value==="standard"?"":`is--${this.element.config.displayMode.value}`},iframeTitle(){return this.element.config.iframeTitle.value}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("youtube-video"),this.initElementData("youtube-video")}}};export{o as default};
//# sourceMappingURL=index-CkBnQvw1.js.map
