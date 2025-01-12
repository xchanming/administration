const l=`{% block sw_flow_tag_modal %} <sw-modal class="sw-flow-tag-modal" :title="tagTitle" :closable="false" @modal-close="onClose" > {% block sw_flow_tag_modal_content %} <div class="sw-flow-tag-modal__content"> {% block sw_flow_tag_modal_to_field %} <sw-single-select v-model:value="entity" name="sw-field--entity" class="sw-flow-tag-modal__to-field" required show-clearable-button :label="$tc('sw-flow.modals.tag.labelToField')" :placeholder="$tc('sw-flow.modals.tag.placeholderToField')" :error="entityError" :options="entityOptions" /> {% endblock %} {% block sw_flow_tag_modal_tags_field %} <sw-entity-tag-select v-model:entityCollection="tagCollection" name="sw-field--tagCollection" class="sw-flow-tag-modal__tags-field" required :label="$tc('sw-flow.modals.tag.labelTagsField')" :placeholder="$tc('sw-flow.modals.tag.placeholderTagsField')" :error="tagError" @item-add="onAddTag" @item-remove="onRemoveTag" /> {% endblock %} {% block sw_flow_tag_modal_content_custom %} {% endblock %} </div> {% endblock %} <template #modal-footer> {% block sw_flow_tag_modal_footer_cancel_button %} <sw-button class="sw-flow-tag-modal__cancel-button" size="small" @click="onClose" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_flow_tag_modal_footer_save_button %} <sw-button class="sw-flow-tag-modal__save-button" variant="primary" size="small" @click="onSaveTag" > {{ isNewTag ? $tc('sw-flow.modals.buttonAddAction') : $tc('sw-flow.modals.buttonSaveAction') }} </sw-button> {% endblock %} </template> </sw-modal> {% endblock %}`,{Component:s,Mixin:i,Context:n}=Cicada,{CicadaError:r}=Cicada.Classes,{EntityCollection:c,Criteria:a}=Cicada.Data,{mapState:d}=s.getComponentHelper(),g={template:l,compatConfig:Cicada.compatConfig,inject:["acl","repositoryFactory","flowBuilderService"],emits:["process-finish","modal-close"],mixins:[i.getByName("placeholder"),i.getByName("notification")],props:{sequence:{type:Object,required:!0},action:{type:String,required:!1,default:null}},data(){return{isLoading:!1,entity:null,entityOptions:[],tagCollection:null,tagError:null,entityError:null}},computed:{tagCriteria(){const t=new a(1,25),{config:e}=this.sequence,o=Object.keys(e.tagIds);return o.length&&t.addFilter(a.equalsAny("id",o)),t},isNewTag(){var t;return!((t=this.sequence)!=null&&t.id)},tagRepository(){return this.repositoryFactory.create("tag")},tagTitle(){return this.action?this.action.match(/add.*tag/)?this.$tc("sw-flow.modals.tag.labelAddTag"):this.action.match(/remove.*tag/)?this.$tc("sw-flow.modals.tag.labelRemoveTag"):"":""},...d("swFlowState",["triggerEvent","triggerActions"])},watch:{entity(t){t&&this.entityError&&(this.entityError=null)},tagCollection(t){t&&this.tagError&&(this.tagError=null)}},created(){this.createdComponent()},methods:{createdComponent(){this.getEntityOptions(),this.tagCollection=this.createTagCollection();const{config:t,id:e}=this.sequence;t!=null&&t.entity&&(this.entity=t==null?void 0:t.entity),e&&(t!=null&&t.tagIds)&&this.getTagCollection()},getTagCollection(){return this.tagRepository.search(this.tagCriteria).then(t=>{this.tagCollection=t}).catch(()=>{this.tagCollection=[]})},createTagCollection(){return new c(this.tagRepository.route,this.tagRepository.entityName,n.api)},onAddTag(t){this.tagCollection.add(t)},onRemoveTag(t){this.tagCollection.remove(t)},getEntityOptions(){if(!this.triggerEvent){this.entityOptions=[];return}const t=this.triggerEvent.aware??[],e=this.flowBuilderService.getAvailableEntities(this.action,this.triggerActions,t,["tags"]);e.length&&(this.entity=e[0].value),this.entityOptions=e},getConfig(){const t={};return this.tagCollection.forEach(o=>{Object.assign(t,{[o.id]:o.name})}),{entity:this.entity,tagIds:t}},fieldError(t){return!t||!t.length?new r({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"}):null},onSaveTag(){if(this.tagError=this.fieldError(this.tagCollection),this.entityError=this.fieldError(this.entity),this.tagError||this.entityError)return;const t=this.getConfig(),e={...this.sequence,config:t};this.$emit("process-finish",e),this.onClose()},onClose(){this.tagError=null,this.$emit("modal-close")}}};export{g as default};
//# sourceMappingURL=index-adANv2eM.js.map
