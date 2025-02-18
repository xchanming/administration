const e=`{% block sw_settings_mailer_index %} <sw-page class="sw-settings-mailer"> {% block sw_settings_mailer_smart_bar_header %} <template #smart-bar-header> {% block sw_settings_mailer_smart_bar_header_title %} <h2> {% block sw_settings_mailer_smart_bar_header_title_text %} {{ $tc('sw-settings.index.title') }} <sw-icon name="regular-chevron-right-xs" small /> {{ $tc('sw-settings-mailer.general.textHeadline') }} {% endblock %} </h2> {% endblock %} </template> {% endblock %} {% block sw_settings_mailer_smart_bar_actions %} <template #smart-bar-actions> {% block sw_settings_mailer_actions_save %} <sw-button-process :is-loading="isLoading" :process-success="isSaveSuccessful" variant="primary" @update:process-success="onSaveFinish" @click="saveMailerSettings" > {{ $tc('sw-settings-mailer.general.buttonSave') }} </sw-button-process> {% endblock %} </template> {% endblock %} {% block sw_settings_mailer_content %} <template #content> <sw-card-view> <sw-skeleton v-if="isLoading" /> <sw-card v-else position-identifier="sw-settings-mailer-configuration" :is-loading="isLoading" :title="$tc('sw-settings-mailer.mailer-configuration.card-title')" > {% block sw_settings_mailer_first_configuration %} <div v-if="isFirstConfiguration" class="sw-settings-mailer__first-configuration" > {% block sw_settings_mailer_first_configuration_headline %} <h4 class="sw-settings-mailer__headline"> <strong> {{ $tc('sw-settings-mailer.first-configuration.headline') }} </strong> </h4> {% endblock %} {% block sw_settings_mailer_first_configuration_description %} <p> {{ $tc('sw-settings-mailer.first-configuration.description') }} </p> {% endblock %} </div> {% endblock %} {% block sw_settings_mailer_headline_agent %} <p class="sw-settings-mailer__headline"> {{ $tc('sw-settings-mailer.mailer-configuration.agent') }} </p> {% endblock %} <div class="sw-settings-mailer__radio-selection"> {% block sw_settings_mailer_agent_options %} <sw-select-field v-model:value="mailerSettings['core.mailerSettings.emailAgent']" > <option value="local"> {{ $tc('sw-settings-mailer.mailer-configuration.local-agent') }} </option> <option value="smtp"> {{ $tc('sw-settings-mailer.mailer-configuration.smtp-server') }} </option> <option value="smtp+oauth"> {{ $tc('sw-settings-mailer.mailer-configuration.smtp-server-oauth') }} </option> <option value=""> {{ $tc('sw-settings-mailer.mailer-configuration.env-file') }} </option> </sw-select-field> <sw-radio-field v-if="mailerSettings['core.mailerSettings.emailAgent'] === 'local'" v-model:value="mailerSettings['core.mailerSettings.sendMailOptions']" :options="emailSendmailOptions" /> {% endblock %} </div> <p v-html="$tc('sw-settings-mailer.helpText')"></p> <sw-switch-field v-if="!isSmtpMode" v-model:value="mailerSettings['core.mailerSettings.disableDelivery']" size="small" :label="$tc('sw-settings-mailer.card-smtp.disable-delivery')" /> </sw-card> {% block sw_settings_mailer_smtp %} <sw-card v-if="isSmtpMode" position-identifier="sw-settings-mailer-smtp-settings" :is-loading="isLoading" title="SMTP server" class="sw-settings-mailer__input-fields" > {% block sw_settings_mailer_smtp_settings %} <sw-settings-mailer-smtp :mailer-settings="mailerSettings" :host-error="smtpHostError" :port-error="smtpPortError" @host-changed="resetSmtpHostError" @port-changed="resetSmtpPortError" /> {% endblock %} </sw-card> {% endblock %} </sw-card-view> </template> {% endblock %} </sw-page> {% endblock %}`,t={"core.mailerSettings.emailAgent":null,"core.mailerSettings.host":null,"core.mailerSettings.port":null,"core.mailerSettings.username":null,"core.mailerSettings.password":null,"core.mailerSettings.encryption":"null","core.mailerSettings.senderAddress":null,"core.mailerSettings.deliveryAddress":null,"core.mailerSettings.disableDelivery":!1},i={template:e,inject:["systemConfigApiService"],mixins:["notification"],data(){return{isLoading:!0,isSaveSuccessful:!1,isFirstConfiguration:!1,mailerSettings:{...t},smtpHostError:null,smtpPortError:null}},metaInfo(){return{title:this.$createTitle()}},computed:{emailSendmailOptions(){return[{value:"-bs",name:this.$tc("sw-settings-mailer.sendmail.sync")},{value:"-t -i",name:this.$tc("sw-settings-mailer.sendmail.async")}]},isSmtpMode(){return["smtp","smtp+oauth"].includes(this.mailerSettings["core.mailerSettings.emailAgent"])}},created(){this.createdComponent()},methods:{async createdComponent(){await this.loadPageContent()},async loadPageContent(){await this.loadMailerSettings(),this.checkFirstConfiguration()},async loadMailerSettings(){this.isLoading=!0,this.mailerSettings=await this.systemConfigApiService.getValues("core.mailerSettings"),Object.keys(this.mailerSettings).length===0&&(this.mailerSettings={"core.mailerSettings.emailAgent":"","core.mailerSettings.sendMailOptions":"-t -i"}),this.isLoading=!1},async saveMailerSettings(){if(this.isLoading=!0,this.mailerSettings["core.mailerSettings.emailAgent"]===""&&(this.mailerSettings["core.mailerSettings.emailAgent"]=null),this.isSmtpMode&&this.validateSmtpConfiguration(),this.smtpHostError!==null||this.smtpPortError!==null){this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("sw-settings-mailer.card-smtp.error.notificationMessage")}),this.isLoading=!1;return}this.mailerSettings["core.mailerSettings.emailAgent"]==="local"&&(this.mailerSettings={...t,"core.mailerSettings.emailAgent":"local"}),await this.systemConfigApiService.saveValues(this.mailerSettings),this.isLoading=!1},async onSaveFinish(){await this.loadPageContent()},checkFirstConfiguration(){this.isFirstConfiguration=!this.mailerSettings["core.mailerSettings.emailAgent"]},validateSmtpConfiguration(){this.smtpHostError=this.mailerSettings["core.mailerSettings.host"]?null:{detail:this.$tc("global.error-codes.c1051bb4-d103-4f74-8988-acbcafc7fdc3")},this.smtpPortError=typeof this.mailerSettings["core.mailerSettings.port"]!="number"?{detail:this.$tc("global.error-codes.c1051bb4-d103-4f74-8988-acbcafc7fdc3")}:null},resetSmtpHostError(){this.smtpHostError=null},resetSmtpPortError(){this.smtpPortError=null}}};export{i as default};
