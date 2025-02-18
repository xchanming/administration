const l=`{% block sw_mail_template_list_grid %} <sw-card :title="$tc('sw-mail-template.list.titleMailTemplateList')" position-identifier="sw-mail-template-list" > {% block sw_mail_template_list_grid_empty_state %} <sw-empty-state v-if="!isLoading && !showListing" :title="$tc('sw-mail-template.list.emptyStateTitle')" :subline="$tc('sw-mail-template.list.emptyStateSubTitle')" :absolute="false" > {% block sw_mail_template_list_grid_empty_state_icon %} <template #icon> <img :src="assetFilter('/administration/static/img/empty-states/settings-empty-state.svg')" alt="" > </template> {% endblock %} </sw-empty-state> {% endblock %} <template #grid> <sw-entity-listing v-if="isLoading || showListing" id="mailTemplateGrid" class="sw-mail-templates-list-grid" detail-route="sw.mail.template.detail" identifier="sw-mail-template-list" :items="mailTemplates" :columns="getListColumns()" :repository="mailTemplateRepository" :full-page="false" :is-loading="isLoading" :allow-view="acl.can('mail_templates.viewer')" :allow-edit="acl.can('mail_templates.editor')" :allow-delete="acl.can('mail_templates.deleter')" :show-selection="acl.can('mail_templates.deleter') || undefined" :skeleton-item-amount="skeletonItemAmount" @update-records="updateRecords" > {% block sw_mail_template_list_grid_columns %} {% endblock %} {% block sw_mail_template_list_grid_actions %} <template #more-actions="{ item }"> {% block sw_mail_template_list_grid_columns_actions_duplicate %} <sw-context-menu-item class="sw-mail-template-list-grid__duplicate-action" :disabled="!acl.can('mail_templates.creator') || undefined" @click="onDuplicate(item.id)" > {{ $tc('sw-mail-template.list.contextMenuDuplicate') }} </sw-context-menu-item> {% endblock %} </template> {% endblock %} </sw-entity-listing> </template> </sw-card> {% endblock %}`,{Mixin:i}=Shopware,{Criteria:a}=Shopware.Data,s={template:l,inject:["repositoryFactory","acl"],mixins:[i.getByName("listing"),i.getByName("notification")],props:{searchTerm:{type:String,required:!1,default:""}},data(){return{mailTemplates:null,showDeleteModal:null,isLoading:!1}},computed:{mailTemplateRepository(){return this.repositoryFactory.create("mail_template")},skeletonItemAmount(){return this.mailTemplates&&this.mailTemplates.length!==0?this.mailTemplates.length:3},showListing(){return!!this.mailTemplates&&this.mailTemplates.length!==0},assetFilter(){return Shopware.Filter.getByName("asset")}},watch:{searchTerm(){this.getList()}},methods:{getList(){this.isLoading=!0;const t=new a(this.page,this.limit);t.addAssociation("mailTemplateType").addSorting(a.sort("mailTemplateType.name")),this.searchTerm&&t.setTerm(this.searchTerm),this.mailTemplateRepository.search(t).then(e=>(this.total=e.total,this.mailTemplates=e,this.isLoading=!1,this.mailTemplates))},getListColumns(){return[{property:"mailTemplateType.name",dataIndex:"mailTemplateType.name",label:"sw-mail-template.list.columnMailType",allowResize:!0,routerLink:"sw.mail.template.detail",primary:!0},{property:"description",dataIndex:"description",label:"sw-mail-template.list.columnDescription",allowResize:!0}]},onChangeLanguage(t){this.getList(t)},onDuplicate(t){this.isLoading=!0,this.mailTemplateRepository.clone(t).then(e=>{this.getList(),this.isLoading=!1,this.$router.push({name:"sw.mail.template.detail",params:{id:e.id}})})},updateRecords(t){this.mailTemplates=t}}};export{s as default};
