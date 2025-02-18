const l=`{% block sw_dynamic_url_field %} <div class="sw-dynamic-url-field"> {% block sw_dynamic_url_field_content %} <div class="sw-dynamic-url-field_link-category"> {% block sw_dynamic_url_field_content_type %} <sw-select-field :value="linkCategory" :label="$tc('sw-text-editor-toolbar.link.labelType')" require @update:value="onSelectFieldChange" > {% block sw_dynamic_url_field_content_type_options %} <option value="link"> {{ $tc('sw-text-editor-toolbar.link.labelUrl') }} </option> <option value="detail"> {{ $tc('sw-text-editor-toolbar.link.labelProduct') }} </option> <option value="navigation"> {{ $tc('sw-text-editor-toolbar.link.labelCategory') }} </option> <option value="media"> {{ $tc('sw-text-editor-toolbar.link.labelMedia') }} </option> <option value="email"> {{ $tc('sw-text-editor-toolbar.link.labelEmail') }} </option> <option value="phone"> {{ $tc('sw-text-editor-toolbar.link.labelPhoneNumber') }} </option> {% endblock %} </sw-select-field> {% endblock %} {% block sw_dynamic_url_field_content_type_inputs %} {% block sw_dynamic_url_field_content_type_inputs_link %} <sw-text-field v-if="linkCategory === 'link'" v-model:value="linkTarget" :label="$tc('sw-text-editor-toolbar.link.linkTo')" :placeholder="$tc('sw-text-editor-toolbar.link.placeholder')" /> {% endblock %} {% block sw_dynamic_url_field_content_type_inputs_phone %} <sw-text-field v-else-if="linkCategory === 'phone'" v-model:value="linkTarget" :label="$tc('sw-text-editor-toolbar.link.linkTo')" :placeholder="$tc('sw-text-editor-toolbar.link.placeholderPhoneNumber')" /> {% endblock %} {% block sw_dynamic_url_field_content_type_inputs_email %} <sw-email-field v-else-if="linkCategory === 'email'" v-model:value="linkTarget" :label="$tc('sw-text-editor-toolbar.link.linkTo')" :placeholder="$tc('sw-text-editor-toolbar.link.placeholderEmail')" /> {% endblock %} {% block sw_dynamic_url_field_content_type_inputs_detail %} <sw-entity-single-select v-else-if="linkCategory === 'detail'" v-model:value="linkTarget" class="sw-dynamic-url-field__entity-single-select" should-show-active-state display-variants entity="product" :criteria="entityFilter" :label="$tc('sw-text-editor-toolbar.link.linkTo')" :placeholder="$tc('sw-text-editor-toolbar.link.placeholderProduct')" show-clearable-button /> {% endblock %} {% block sw_dynamic_url_field_content_type_inputs_category %} <sw-category-tree-field v-else-if="linkCategory === 'navigation'" :label="$tc('sw-text-editor-toolbar.link.linkTo')" :criteria="entityFilter" :placeholder="$tc('sw-text-editor-toolbar.link.placeholderCategory')" :categories-collection="categoryCollection" single-select @selection-add="replaceCategorySelection" @selection-remove="removeCategorySelection" /> {% endblock %} {% block sw_dynamic_url_field_content_type_inputs_media %} <sw-media-field v-else-if="linkCategory === 'media'" v-model:value="linkTarget" :label="$tc('sw-text-editor-toolbar.link.linkTo')" :criteria="entityFilter" single-select /> {% endblock %} {% endblock %} </div> {% endblock %} {% block sw_dynamic_url_field_button_remove %} <sw-button class="sw-dynamic-url-field__link-menu-buttons-button-remove" variant="ghost-danger" size="small" :disabled="!linkTarget" @click="removeLink" > {{ $tc('global.default.remove') }} </sw-button> {% endblock %} </div> {% endblock %}`,{Component:o}=Shopware,{Criteria:i,EntityCollection:a}=Shopware.Data;o.register("sw-dynamic-url-field",{template:l,inject:["repositoryFactory"],props:{value:{type:String,required:!1,default:""}},data(){return{lastEmittedLink:"",linkTarget:"",isHTTPs:!1,displayAsButton:!1,linkCategory:"link",categoryCollection:void 0}},computed:{seoUrlReplacePrefix(){return"124c71d524604ccbad6042edce3ac799"},entityFilter(){const e=new i(1,25);return e.addAssociation("options.group"),e.addFilter(i.multi("OR",[i.equals("product.childCount",0),i.equals("product.childCount",null)])),e},categoryRepository(){return this.repositoryFactory.create("category")}},watch:{value:{async handler(e){if(e===this.lastEmittedLink||typeof e!="string")return;const t=await this.parseLink(e);this.linkCategory=t.type,this.linkTarget=t.target},immediate:!0},linkTarget:{handler(){const e=this.prepareLink();e!==this.value&&(this.lastEmittedLink=e,this.$emit("update:value",e))}}},created(){this.createdComponent()},methods:{createdComponent(){this.categoryCollection=this.getEmptyCategoryCollection()},getEmptyCategoryCollection(){return new a(this.categoryRepository.route,this.categoryRepository.entityName,Shopware.Context.api)},getCategoryCollection(e){const t=new i(1,25).addFilter(i.equals("id",e));return this.categoryRepository.search(t)},async parseLink(e){const t=e.slice(0,-1).split("/");return e.startsWith(this.seoUrlReplacePrefix)&&["navigation","detail","mediaId"].includes(t[1])?(t[1]==="navigation"?this.categoryCollection=await this.getCategoryCollection(t[2]):t[1]==="mediaId"&&(t[1]="media"),{type:t[1],target:t[2]}):e.startsWith("mailto:")?{type:"email",target:e.replace("mailto:","")}:e.startsWith("tel:")?{type:"phone",target:e.replace("tel:","")}:{type:"link",target:e}},replaceCategorySelection(e){this.linkTarget=e.id},removeCategorySelection(){this.linkTarget=""},prepareLink(){if(!this.linkTarget)return"";switch(this.linkCategory){case"detail":return`${this.seoUrlReplacePrefix}/detail/${this.linkTarget}#`;case"navigation":return`${this.seoUrlReplacePrefix}/navigation/${this.linkTarget}#`;case"media":return`${this.seoUrlReplacePrefix}/mediaId/${this.linkTarget}#`;case"email":return`mailto:${this.linkTarget}`;case"phone":return`tel:${this.linkTarget.replace(/\//,"")}`;default:return this.linkTarget}},removeLink(){this.linkTarget=""},onSelectFieldChange(e){this.linkTarget="",this.linkCategory=e}}});
