(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[80978],{122318:function(){},780978:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return r}}),t(534008);let{Mixin:n}=Cicada,{Criteria:o}=Cicada.Data,{warn:i}=Cicada.Utils.debug,{mapPropertyErrors:l}=Cicada.Component.getComponentHelper();var r={template:'\n{% block sw_mail_header_footer_detail %}\n<sw-page class="sw-mail-header-footer-detail">\n\n    \n    {% block sw_mail_header_footer_detail_header %}\n    <template #smart-bar-header>\n        <h2>{{ placeholder(mailHeaderFooter, \'name\', $tc(\'sw-mail-header-footer.detail.textHeadline\')) }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_mail_header_footer_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_mail_header_footer_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: \'ESC\',\n                appearance: \'light\'\n            }"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_mail_header_footer_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-mail-header-footer-detail__save-action"\n            variant="primary"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!allowSave || undefined"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-mail-header-footer.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_mail_header_footer_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_mail_header_footer_detail_content %}\n    <template #content>\n        <sw-card-view sidebar>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else-if="mailHeaderFooter">\n                \n                {% block sw_mail_header_footer_detail_content_language_info %}\n                <sw-language-info\n                    :entity-description="placeholder(mailHeaderFooter, \'name\', $tc(\'sw-mail-header-footer.detail.textHeadline\'))"\n                />\n                {% endblock %}\n\n                \n                {% block sw_mail_header_footer_detail_basic_info %}\n                <sw-card\n                    :title="$tc(\'sw-mail-header-footer.detail.basic.titleCard\')"\n                    position-identifier="sw-mail-header-footer-detail-basic-info"\n                >\n                    \n                    {% block sw_mail_header_footer_basic_form_name_field %}\n                    <sw-text-field\n                        v-model:value="mailHeaderFooter.name"\n                        name="sw-field--mailHeaderFooter-name"\n                        validation="required"\n                        required\n                        :label="$tc(\'sw-mail-header-footer.detail.basic.labelName\')"\n                        :placeholder="placeholder(mailHeaderFooter, \'name\', $tc(\'sw-mail-header-footer.detail.basic.placeholderName\'))"\n                        :disabled="!acl.can(\'mail_templates.editor\') || undefined"\n                        :error="mailHeaderFooterNameError"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_header_footer_basic_form_description_field %}\n                    <sw-textarea-field\n                        v-model:value="mailHeaderFooter.description"\n                        name="sw-field--mailHeaderFooter-description"\n                        :label="$tc(\'sw-mail-header-footer.detail.basic.labelDescription\')"\n                        :placeholder="placeholder(mailHeaderFooter, \'description\', $tc(\'sw-mail-header-footer.detail.basic.placeholderDescription\'))"\n                        :disabled="!acl.can(\'mail_templates.editor\') || undefined"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_header_footer_basic_form_sales_channels_field %}\n                    <sw-entity-multi-select\n                        id="salesChannels"\n                        v-model:entityCollection="mailHeaderFooter.salesChannels"\n                        class="sw-mail-header-footer-detail__sales-channel"\n                        :label="$tc(\'sw-mail-header-footer.detail.basic.labelSalesChannels\')"\n                        :placeholder="$tc(\'sw-mail-header-footer.detail.basic.placeholderSalesChannels\')"\n                        :disabled="!acl.can(\'mail_templates.editor\') || undefined"\n                    />\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_mail_header_footer_detail_content_header %}\n                <sw-card\n                    :title="$tc(\'sw-mail-header-footer.detail.header.titleCard\')"\n                    position-identifier="sw-mail-header-footer-detail-content-header"\n                >\n                    \n                    {% block sw_mail_header_footer_detail_content_header_plain_field %}\n                    <sw-code-editor\n                        v-model:value="mailHeaderFooter.headerPlain"\n                        identifier="header_plain"\n                        name="header_plain"\n                        completion-mode="entity"\n                        :label="$tc(\'sw-mail-header-footer.detail.header.labelPlain\')"\n                        :placeholder="placeholder(mailHeaderFooter, \'headerPlain\', $tc(\'sw-mail-header-footer.detail.header.placeholderPlain\'))"\n                        :completer-function="completerFunction"\n                        :editor-config="editorConfig"\n                        :disabled="!acl.can(\'mail_templates.editor\') || undefined"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_header_footer_detail_content_header_html_field %}\n                    <sw-code-editor\n                        v-model:value="mailHeaderFooter.headerHtml"\n                        identifier="header_html"\n                        name="header_html"\n                        completion-mode="entity"\n                        :label="$tc(\'sw-mail-header-footer.detail.header.labelHtml\')"\n                        :placeholder="placeholder(mailHeaderFooter, \'headerHtml\', $tc(\'sw-mail-header-footer.detail.header.placeholderHtml\'))"\n                        :completer-function="completerFunction"\n                        :editor-config="editorConfig"\n                        :disabled="!acl.can(\'mail_templates.editor\') || undefined"\n                    />\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_mail_header_footer_detail_content_footer %}\n                <sw-card\n                    :title="$tc(\'sw-mail-header-footer.detail.footer.titleCard\')"\n                    position-identifier="sw-mail-header-footer-detail-content-footer"\n                >\n                    \n                    {% block sw_mail_header_footer_detail_content_footer_plain_field %}\n                    <sw-code-editor\n                        v-model:value="mailHeaderFooter.footerPlain"\n                        identifier="footer_plain"\n                        name="footer_plain"\n                        completion-mode="entity"\n                        :label="$tc(\'sw-mail-header-footer.detail.footer.labelPlain\')"\n                        :placeholder="placeholder(mailHeaderFooter, \'footerPlain\', $tc(\'sw-mail-header-footer.detail.footer.placeholderPlain\'))"\n                        :completer-function="completerFunction"\n                        :editor-config="editorConfig"\n                        :disabled="!acl.can(\'mail_templates.editor\') || undefined"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_header_footer_detail_content_footer_html_field %}\n                    <sw-code-editor\n                        v-model:value="mailHeaderFooter.footerHtml"\n                        identifier="footer_html"\n                        name="footer_html"\n                        completion-mode="entity"\n                        :label="$tc(\'sw-mail-header-footer.detail.footer.labelHtml\')"\n                        :placeholder="placeholder(mailHeaderFooter, \'footerHtml\', $tc(\'sw-mail-header-footer.detail.footer.placeholderHtml\'))"\n                        :completer-function="completerFunction"\n                        :editor-config="editorConfig"\n                        :disabled="!acl.can(\'mail_templates.editor\') || undefined"\n                    />\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n\n        <sw-modal\n            v-if="showModal"\n            :title="$tc(\'sw-mail-header-footer.modal.title\')"\n            @modal-close="onClose"\n        >\n            <div>{{ $tc(\'sw-mail-header-footer.modal.mainContent\') }}</div>\n            <div>{{ $tc(\'sw-mail-header-footer.modal.affectedList\') }}</div>\n            <div class="sw-mail-header-footer-detail__sales-channel-list">\n                <div\n                    v-for="salesChannel in alreadyAssignedSalesChannels"\n                    :key="salesChannel.translated.name"\n                    class="sw-mail-header-footer-detail__sales-channel-list-entry"\n                >\n                    {{ salesChannel.translated.name }}\n                </div>\n            </div>\n\n            <template #modal-footer>\n                <sw-button @click="onClose">\n                    {{ $tc(\'global.default.cancel\') }}\n                </sw-button>\n                <sw-button-process\n                    :is-loading="isLoading"\n                    :process-success="isSaveSuccessful"\n                    variant="primary"\n                    @click="confirmSave"\n                >\n                    {{ $tc(\'global.default.save\') }}\n                </sw-button-process>\n            </template>\n        </sw-modal>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["entityMappingService","repositoryFactory","acl"],mixins:[n.getByName("placeholder"),n.getByName("notification")],shortcuts:{"SYSTEMKEY+S":{active(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},data(){return{mailHeaderFooter:null,mailHeaderFooterId:null,isLoading:!0,isSaveSuccessful:!1,editorConfig:{enableBasicAutocompletion:!0},showModal:!1,alreadyAssignedSalesChannels:[]}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{...l("mailHeaderFooter",["name"]),identifier(){return this.placeholder(this.mailHeaderFooter,"name")},mailHeaderFooterRepository(){return this.repositoryFactory.create("mail_header_footer")},mailHeaderFooterCriteria(){let e=new o(1,25);return e.addAssociation("salesChannels"),e},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},completerFunction(){var e;return e=this.entityMappingService,function(a){let t=[];return Object.keys(e.getEntityMapping(a,{salesChannel:"sales_channel"})).forEach(e=>{t.push({value:e})}),t}},allowSave(){return this.mailHeaderFooter&&this.mailHeaderFooter.isNew()?this.acl.can("mail_templates.creator"):this.acl.can("mail_templates.editor")},tooltipSave(){if(!this.allowSave)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0};let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}}},watch:{"$route.params.id"(){this.createdComponent()}},created(){this.createdComponent()},methods:{onClose(){this.showModal=!1,this.isLoading=!1},async createdComponent(){this.$route.params.id&&(this.mailHeaderFooterId=this.$route.params.id,await this.loadEntityData()),this.isLoading=!1},async loadEntityData(){this.isLoading=!0,this.mailHeaderFooter=await this.mailHeaderFooterRepository.get(this.mailHeaderFooterId,Cicada.Context.api,this.mailHeaderFooterCriteria),this.isLoading=!1},abortOnLanguageChange(){return this.this.mailHeaderFooterRepository.hasChanges(this.mailHeaderFooter)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(){this.loadEntityData()},saveFinish(){this.isSaveSuccessful=!1},onCancel(){this.$router.push({name:"sw.mail.template.index"})},async onSave(){if(this.isSaveSuccessful=!1,this.isLoading=!0,this.mailHeaderFooter.salesChannels.length>0&&await this.findAlreadyAssignedSalesChannels(),this.alreadyAssignedSalesChannels.length){this.showModal=!0,this.isLoading=!1;return}await this.confirmSave()},async confirmSave(){try{this.isLoading=!0,await this.mailHeaderFooterRepository.save(this.mailHeaderFooter),await this.loadEntityData(),this.isSaveSuccessful=!0}catch(a){let e={message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")};this.createNotificationError(e),i(a)}finally{this.isLoading=!1,this.showModal=!1}},async findAlreadyAssignedSalesChannels(){let e=new o(1,25),a=[];this.mailHeaderFooter.salesChannels.forEach(e=>{a.push(e.id)}),e.addFilter(o.equalsAny("id",a));let t=await this.salesChannelRepository.search(e);this.alreadyAssignedSalesChannels=t.reduce((e,a)=>(null===a.mailHeaderFooterId||(this.mailHeaderFooterId||e.push(a),this.mailHeaderFooterId&&a.mailHeaderFooterId!==this.mailHeaderFooterId&&e.push(a)),e),[])}}}},534008:function(e,a,t){var n=t(122318);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),t(745346).Z("bbdc84a0",n,!0,{})}}]);