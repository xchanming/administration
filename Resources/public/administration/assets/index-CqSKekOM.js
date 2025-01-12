const e=`{% block sw_first_run_wizard_mailer_selection %} <div class="sw-first-run-wizard-mailer-selection"> <sw-loader v-if="isLoading" /> <img class="sw-first-run-wizard-mailer-selection__illustration" :src="assetFilter('/administration/static/img/first-run-wizard/mailer-selection.svg')" alt="" > <h4 class="sw-first-run-wizard-mailer-selection__headline"> <strong> {{ $tc('sw-first-run-wizard.mailerSelection.headline') }} </strong> </h4> <p> {{ $tc('sw-first-run-wizard.mailerSelection.description') }} </p> <p class="sw-first-run-wizard-mailer-selection__subline"> <strong> {{ $tc('sw-first-run-wizard.mailerSelection.chooseSubline') }} </strong> </p> <div class="sw-first-run-wizard-mailer-selection__selections"> <div class="sw-first-run-wizard-mailer-selection__selection" :class="{ 'is--selected': mailAgent === 'local' }" role="button" tabindex="0" @click="setMailAgent('local')" @keydown.enter="setMailAgent('local')" > <sw-help-text class="sw-first-run-wizard-mailer-selection__help-text" :text="$tc('sw-first-run-wizard.mailerSelection.localOptionHelptext')" /> <sw-icon name="regular-paper-plane" class="sw-first-run-wizard-mailer-selection__selection-icon" /> <p> {{ $tc('sw-first-run-wizard.mailerSelection.localOption') }} <br> <span class="sw-first-run-wizard-mailer-selection__text-light"> {{ $tc('sw-first-run-wizard.mailerSelection.localOptionSubline') }} </span> </p> </div> <div class="sw-first-run-wizard-mailer-selection__selection" :class="{ 'is--selected': mailAgent === 'smtp' }" role="button" tabindex="0" @click="setMailAgent('smtp')" @keydown.enter="setMailAgent('smtp')" > <sw-icon name="regular-server" class="sw-first-run-wizard-mailer-selection__selection-icon" /> <p> {{ $tc('sw-first-run-wizard.mailerSelection.smtpOption') }} </p> </div> </div> <p class="sw-first-run-wizard-mailer-selection__note"> <span class="sw-first-run-wizard-mailer-selection__text-light"> {{ $tc('sw-first-run-wizard.mailerSelection.configurationNote') }} </span> </p> </div> {% endblock %}`,s={template:e,compatConfig:Cicada.compatConfig,inject:["systemConfigApiService"],emits:["buttons-update","frw-set-title","frw-redirect"],data(){return{mailAgent:null,isLoading:!1}},computed:{nextLabel(){return this.$tc("sw-first-run-wizard.general.buttonNext")},buttonConfig(){const i=Cicada.State.get("context").app.config.settings.disableExtensionManagement?"cicada.account":"paypal.info";return[{key:"back",label:this.$tc("sw-first-run-wizard.general.buttonBack"),position:"left",variant:null,action:"sw.first.run.wizard.index.defaults",disabled:!1},{key:"configure-later",label:this.$tc("sw-first-run-wizard.general.buttonConfigureLater"),position:"right",variant:null,action:`sw.first.run.wizard.index.${i}`,disabled:!1},{key:"next",label:this.nextLabel,position:"right",variant:"primary",action:this.handleSelection.bind(this),disabled:!this.mailAgent}]},assetFilter(){return Cicada.Filter.getByName("asset")}},watch:{buttonConfig(){this.updateButtons()}},created(){this.createdComponent()},methods:{createdComponent(){this.updateButtons(),this.setTitle()},updateButtons(){this.$emit("buttons-update",this.buttonConfig)},setTitle(){this.$emit("frw-set-title",this.$tc("sw-first-run-wizard.mailerSelection.modalTitle"))},async handleSelection(){this.isLoading=!0,this.mailAgent==="smtp"&&(this.$emit("frw-redirect","sw.first.run.wizard.index.mailer.smtp"),this.isLoading=!1),this.mailAgent==="local"&&(this.$emit("frw-redirect","sw.first.run.wizard.index.mailer.local"),this.isLoading=!1)},setMailAgent(t){this.mailAgent=t}}};export{s as default};
//# sourceMappingURL=index-CqSKekOM.js.map
