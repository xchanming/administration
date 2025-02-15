const a=`{% block sw_app_app_url_changed_modal %} <sw-modal class="sw-app-app-url-changed-modal" variant="large" :title="$tc('sw-app.component.sw-app-app-url-changed-modal.title')" :is-loading="isLoading" @modal-close="closeModal" > <template #default> {% block sw_app_app_url_changed_modal_content %} {% block sw_app_app_url_changed_modal_content_description %} <div class="sw-app-app-url-changed-modal__content-description"> <h3>{{ $tc('sw-app.component.sw-app-app-url-changed-modal.explanationHeader') }}</h3> <div class="sw-app-app-url-changed-modal__content-description-change"> <span> <b> {{ $tc('sw-app.component.sw-app-app-url-changed-modal.oldLabel') }} </b> {{ urlDiff.oldUrl }} </span> <br> <span> <b> {{ $tc('sw-app.component.sw-app-app-url-changed-modal.newLabel') }} </b> {{ urlDiff.newUrl }} </span> </div> {% block sw_app_app_url_changed_modal_description_explanation %} {{ $tc('sw-app.component.sw-app-app-url-changed-modal.explanation') }} {% endblock %} </div> {% endblock %} {% block sw_app_app_url_changed_modal_content_strategies %} <div v-for="(strategy, index) in strategies" :key="\`content-strategies-\${index}\`" class="sw-app-app-url-changed-modal__content-choices" > <sw-button class="sw-app-app-url-changed-modal__content-migration-strategy" :class="getActiveStyle(strategy)" block @click="setSelectedStrategy(strategy)" > <template v-if="isSelected(strategy)"> <sw-icon class="sw-app-app-url-changed-modal__migration-button-center" small color="#ffffff" name="regular-circle" /> <sw-icon small color="#189eff" name="regular-circle-xxs" /> </template> <sw-icon v-else small name="regular-circle" /> <span class="sw-app-app-url-changed-modal__content-choices-label"> {{ getStrategyLabel(strategy) }} </span> <span class="sw-app-app-url-changed-modal__content-choices-description"> {{ getStrategyDescription(strategy) }} </span> </sw-button> </div> {% endblock %} {% endblock %} </template> <template #modal-footer> <sw-button @click="closeModal"> {{ $tc('global.default.cancel') }} </sw-button> <sw-button variant="primary" @click="confirm" > {{ $tc('sw-app.component.sw-app-app-url-changed-modal.confirmation') }} </sw-button> </template> </sw-modal> {% endblock %}`,{Component:t}=Shopware;t.register("sw-app-app-url-changed-modal",{template:a,inject:["appUrlChangeService"],emits:["modal-close"],mixins:[Shopware.Mixin.getByName("notification")],props:{urlDiff:{type:Object,required:!0}},data(){return{strategies:[],selectedStrategy:null,isLoading:!0}},created(){this.appUrlChangeService.fetchResolverStrategies().then(e=>{this.strategies=e,this.selectedStrategy=e[0]}).then(()=>{this.isLoading=!1})},methods:{closeModal(){this.$emit("modal-close")},setSelectedStrategy(e){this.selectedStrategy=e},isSelected({name:e}){return!!this.selectedStrategy&&this.selectedStrategy.name===e},getStrategyLabel({name:e}){return this.$tc(`sw-app.component.sw-app-app-url-changed-modal.${e}.name`)},getStrategyDescription({name:e}){return this.$tc(`sw-app.component.sw-app-app-url-changed-modal.${e}.description`)},getActiveStyle({name:e}){return{"sw-app-app-url-changed-modal__content-migration-strategy--active":e===this.selectedStrategy.name}},confirm(){this.appUrlChangeService.resolveUrlChange(this.selectedStrategy).then(()=>{this.createNotificationSuccess({message:this.$tc("sw-app.component.sw-app-app-url-changed-modal.success")})}).then(this.closeModal).catch(()=>{this.createNotificationError({message:this.$tc("sw-app.component.sw-app-app-url-changed-modal.error")})})}}});
