const e=`{% block sw_media_tag %} <div class="sw-media-tag"> <sw-media-collapse :title="$tc('global.sw-tag-field.title')" :expand-on-loading="true" > {% block sw_media_tag_input %} <template #content> <sw-entity-tag-select v-model:entityCollection="media.tags" :disabled="disabled" @update:entity-collection="handleChange" /> </template> {% endblock %} </sw-media-collapse> </div> {% endblock %}`,t={template:e,compatConfig:Cicada.compatConfig,inject:["repositoryFactory"],props:{media:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{mediaRepository(){return this.repositoryFactory.create("media")}},methods:{handleChange(){this.mediaRepository.save(this.media)}}};export{t as default};
//# sourceMappingURL=index-D53NOEzP.js.map
