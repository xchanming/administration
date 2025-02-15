const i='{% block sw_cms_page_select %} <div class="sw-cms-page-select"> <sw-entity-single-select v-bind="bind" ref="component" v-model:value="currentValue" class="sw-cms-page-select-box" entity="cms_page" :criteria="pageTypeCriteria" show-clearable-button /> </div> {% endblock %}',{Mixin:r}=Shopware,{Criteria:n}=Shopware.Data,l=Shopware.Component.wrapComponentConfig({template:i,emits:["update:value"],mixins:[r.getByName("sw-inline-snippet")],props:{pageType:{type:String,required:!0},value:{type:String,required:!1,default:null}},data(){return{currentValue:this.value}},computed:{bind(){return{...this.$attrs,...this.translations}},translations(){return this.getTranslations()},pageTypeCriteria(){const e=new n(1,25);return e.addFilter(n.equals("type",this.pageType)),e}},watch:{currentValue(e){e!==this.value&&this.$emit("update:value",e)},value(){this.currentValue=this.value}},methods:{getTranslations(){const e=["label","placeholder","helpText"],a={};return e.forEach(s=>{const t=this.$attrs[s];t&&t!==""&&(a[s]=this.getInlineSnippet(t))}),a}}});export{l as default};
