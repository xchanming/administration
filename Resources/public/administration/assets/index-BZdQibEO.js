const d=`{% block sw_mail_header_footer_detail %} <sw-page class="sw-mail-header-footer-detail"> {% block sw_mail_header_footer_detail_header %} <template #smart-bar-header> <h2>{{ placeholder(mailHeaderFooter, 'name', $tc('sw-mail-header-footer.detail.textHeadline')) }}</h2> </template> {% endblock %} {% block sw_mail_header_footer_detail_actions %} <template #smart-bar-actions> {% block sw_mail_header_footer_detail_actions_abort %} <sw-button v-tooltip.bottom="{ message: 'ESC', appearance: 'light' }" :disabled="isLoading" @click="onCancel" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_mail_header_footer_detail_actions_save %} <sw-button-process v-tooltip.bottom="tooltipSave" class="sw-mail-header-footer-detail__save-action" variant="primary" :is-loading="isLoading" :process-success="isSaveSuccessful" :disabled="!allowSave || undefined" @update:process-success="saveFinish" @click.prevent="onSave" > {{ $tc('sw-mail-header-footer.detail.buttonSave') }} </sw-button-process> {% endblock %} </template> {% endblock %} {% block sw_mail_header_footer_detail_language_switch %} <template #language-switch> <sw-language-switch :save-changes-function="saveOnLanguageChange" @on-change="onChangeLanguage" /> </template> {% endblock %} {% block sw_mail_header_footer_detail_content %} <template #content> <sw-card-view sidebar> <template v-if="isLoading"> <sw-skeleton /> <sw-skeleton /> </template> <template v-else-if="mailHeaderFooter"> {% block sw_mail_header_footer_detail_content_language_info %} <sw-language-info :entity-description="placeholder(mailHeaderFooter, 'name', $tc('sw-mail-header-footer.detail.textHeadline'))" /> {% endblock %} {% block sw_mail_header_footer_detail_basic_info %} <sw-card :title="$tc('sw-mail-header-footer.detail.basic.titleCard')" position-identifier="sw-mail-header-footer-detail-basic-info" > {% block sw_mail_header_footer_basic_form_name_field %} <sw-text-field v-model:value="mailHeaderFooter.name" name="sw-field--mailHeaderFooter-name" validation="required" required :label="$tc('sw-mail-header-footer.detail.basic.labelName')" :placeholder="placeholder(mailHeaderFooter, 'name', $tc('sw-mail-header-footer.detail.basic.placeholderName'))" :disabled="!acl.can('mail_templates.editor') || undefined" :error="mailHeaderFooterNameError" /> {% endblock %} {% block sw_mail_header_footer_basic_form_description_field %} <sw-textarea-field v-model:value="mailHeaderFooter.description" name="sw-field--mailHeaderFooter-description" :label="$tc('sw-mail-header-footer.detail.basic.labelDescription')" :placeholder="placeholder(mailHeaderFooter, 'description', $tc('sw-mail-header-footer.detail.basic.placeholderDescription'))" :disabled="!acl.can('mail_templates.editor') || undefined" /> {% endblock %} {% block sw_mail_header_footer_basic_form_sales_channels_field %} <sw-entity-multi-select id="salesChannels" v-model:entity-collection="mailHeaderFooter.salesChannels" class="sw-mail-header-footer-detail__sales-channel" :label="$tc('sw-mail-header-footer.detail.basic.labelSalesChannels')" :placeholder="$tc('sw-mail-header-footer.detail.basic.placeholderSalesChannels')" :disabled="!acl.can('mail_templates.editor') || undefined" /> {% endblock %} </sw-card> {% endblock %} {% block sw_mail_header_footer_detail_content_header %} <sw-card :title="$tc('sw-mail-header-footer.detail.header.titleCard')" position-identifier="sw-mail-header-footer-detail-content-header" > {% block sw_mail_header_footer_detail_content_header_plain_field %} <sw-code-editor v-model:value="mailHeaderFooter.headerPlain" identifier="header_plain" name="header_plain" completion-mode="entity" :label="$tc('sw-mail-header-footer.detail.header.labelPlain')" :placeholder="placeholder(mailHeaderFooter, 'headerPlain', $tc('sw-mail-header-footer.detail.header.placeholderPlain'))" :completer-function="completerFunction" :editor-config="editorConfig" :disabled="!acl.can('mail_templates.editor') || undefined" /> {% endblock %} {% block sw_mail_header_footer_detail_content_header_html_field %} <sw-code-editor v-model:value="mailHeaderFooter.headerHtml" identifier="header_html" name="header_html" completion-mode="entity" :label="$tc('sw-mail-header-footer.detail.header.labelHtml')" :placeholder="placeholder(mailHeaderFooter, 'headerHtml', $tc('sw-mail-header-footer.detail.header.placeholderHtml'))" :completer-function="completerFunction" :editor-config="editorConfig" :disabled="!acl.can('mail_templates.editor') || undefined" /> {% endblock %} </sw-card> {% endblock %} {% block sw_mail_header_footer_detail_content_footer %} <sw-card :title="$tc('sw-mail-header-footer.detail.footer.titleCard')" position-identifier="sw-mail-header-footer-detail-content-footer" > {% block sw_mail_header_footer_detail_content_footer_plain_field %} <sw-code-editor v-model:value="mailHeaderFooter.footerPlain" identifier="footer_plain" name="footer_plain" completion-mode="entity" :label="$tc('sw-mail-header-footer.detail.footer.labelPlain')" :placeholder="placeholder(mailHeaderFooter, 'footerPlain', $tc('sw-mail-header-footer.detail.footer.placeholderPlain'))" :completer-function="completerFunction" :editor-config="editorConfig" :disabled="!acl.can('mail_templates.editor') || undefined" /> {% endblock %} {% block sw_mail_header_footer_detail_content_footer_html_field %} <sw-code-editor v-model:value="mailHeaderFooter.footerHtml" identifier="footer_html" name="footer_html" completion-mode="entity" :label="$tc('sw-mail-header-footer.detail.footer.labelHtml')" :placeholder="placeholder(mailHeaderFooter, 'footerHtml', $tc('sw-mail-header-footer.detail.footer.placeholderHtml'))" :completer-function="completerFunction" :editor-config="editorConfig" :disabled="!acl.can('mail_templates.editor') || undefined" /> {% endblock %} </sw-card> {% endblock %} </template> </sw-card-view> <sw-modal v-if="showModal" :title="$tc('sw-mail-header-footer.modal.title')" @modal-close="onClose" > <div>{{ $tc('sw-mail-header-footer.modal.mainContent') }}</div> <div>{{ $tc('sw-mail-header-footer.modal.affectedList') }}</div> <div class="sw-mail-header-footer-detail__sales-channel-list"> <div v-for="salesChannel in alreadyAssignedSalesChannels" :key="salesChannel.translated.name" class="sw-mail-header-footer-detail__sales-channel-list-entry" > {{ salesChannel.translated.name }} </div> </div> <template #modal-footer> <sw-button @click="onClose"> {{ $tc('global.default.cancel') }} </sw-button> <sw-button-process :is-loading="isLoading" :process-success="isSaveSuccessful" variant="primary" @click="confirmSave" > {{ $tc('global.default.save') }} </sw-button-process> </template> </sw-modal> </template> {% endblock %} </sw-page> {% endblock %}`,{Mixin:r}=Shopware,{Criteria:l}=Shopware.Data,{warn:n}=Shopware.Utils.debug,{mapPropertyErrors:c}=Shopware.Component.getComponentHelper(),m={template:d,inject:["entityMappingService","repositoryFactory","acl"],mixins:[r.getByName("placeholder"),r.getByName("notification")],shortcuts:{"SYSTEMKEY+S":{active(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},data(){return{mailHeaderFooter:null,mailHeaderFooterId:null,isLoading:!0,isSaveSuccessful:!1,editorConfig:{enableBasicAutocompletion:!0},showModal:!1,alreadyAssignedSalesChannels:[]}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{...c("mailHeaderFooter",["name"]),identifier(){return this.placeholder(this.mailHeaderFooter,"name")},mailHeaderFooterRepository(){return this.repositoryFactory.create("mail_header_footer")},mailHeaderFooterCriteria(){const e=new l(1,25);return e.addAssociation("salesChannels"),e},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},completerFunction(){return function(o){function i(a){const t=[];return Object.keys(o.getEntityMapping(a,{salesChannel:"sales_channel"})).forEach(s=>{t.push({value:s})}),t}return i}(this.entityMappingService)},allowSave(){return this.mailHeaderFooter&&this.mailHeaderFooter.isNew()?this.acl.can("mail_templates.creator"):this.acl.can("mail_templates.editor")},tooltipSave(){return this.allowSave?{message:`${this.$device.getSystemKey()} + S`,appearance:"light"}:{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0}}},watch:{"$route.params.id"(){this.createdComponent()}},created(){this.createdComponent()},methods:{onClose(){this.showModal=!1,this.isLoading=!1},async createdComponent(){this.$route.params.id&&(this.mailHeaderFooterId=this.$route.params.id,await this.loadEntityData()),this.isLoading=!1},async loadEntityData(){this.isLoading=!0,this.mailHeaderFooter=await this.mailHeaderFooterRepository.get(this.mailHeaderFooterId,Shopware.Context.api,this.mailHeaderFooterCriteria),this.isLoading=!1},abortOnLanguageChange(){return this.this.mailHeaderFooterRepository.hasChanges(this.mailHeaderFooter)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(){this.loadEntityData()},saveFinish(){this.isSaveSuccessful=!1},onCancel(){this.$router.push({name:"sw.mail.template.index"})},async onSave(){if(this.isSaveSuccessful=!1,this.isLoading=!0,this.mailHeaderFooter.salesChannels.length>0&&await this.findAlreadyAssignedSalesChannels(),this.alreadyAssignedSalesChannels.length){this.showModal=!0,this.isLoading=!1;return}await this.confirmSave()},async confirmSave(){try{this.isLoading=!0,await this.mailHeaderFooterRepository.save(this.mailHeaderFooter),await this.loadEntityData(),this.isSaveSuccessful=!0}catch(e){const o={message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")};this.createNotificationError(o),n(e)}finally{this.isLoading=!1,this.showModal=!1}},async findAlreadyAssignedSalesChannels(){const e=new l(1,25),o=[];this.mailHeaderFooter.salesChannels.forEach(a=>{o.push(a.id)}),e.addFilter(l.equalsAny("id",o));const i=await this.salesChannelRepository.search(e);this.alreadyAssignedSalesChannels=i.reduce((a,t)=>(t.mailHeaderFooterId===null||(this.mailHeaderFooterId||a.push(t),this.mailHeaderFooterId&&t.mailHeaderFooterId!==this.mailHeaderFooterId&&a.push(t)),a),[])}}};export{m as default};
