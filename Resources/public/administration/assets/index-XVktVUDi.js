const _=`{% block sw_dashboard_index %} <sw-page class="sw-dashboard-index" :show-smart-bar="false" > {% block sw_dashboard_index_content %} <template #content> <sw-card-view class="sw-dashboard-index__content"> {% block sw_dashboard_index_content_intro_card %} {% block sw_dashboard_index_content_intro_content %} <div class="sw-dashboard-index__welcome-text"> {% block sw_dashboard_index_content_intro %} {% block sw_dashboard_index_content_intro_content_headline %} <h1 class="sw-dashboard-index__welcome-title"> {{ welcomeMessage }} </h1> {% endblock %} {% block sw_dashboard_index_content_intro_welcome_message %} <p class="sw-dashboard-index__welcome-message"> {{ welcomeSubline }} </p> {% endblock %} {% endblock %} </div> {% endblock %} {% endblock %} <sw-usage-data-consent-banner :can-be-hidden="true" /> <sw-extension-component-section position-identifier="sw-dashboard__before-content" class="sw-dashboard__before-content" /> {% block sw_dashboard_index_content_info_grid %} <div class="sw-dashboard-index__card-grid"> {% block sw_dashboard_index_content_info_grid_inner %} {% block sw_dashboard_index_content_info__grid_inner_welcome_card %} <div class="sw-dashboard-index__card sw-dashboard-index__card--bg-checklist"> {% block sw_dashboard_index_content_info_grid_welcome_card_content %} {% block sw_dashboard_index_content_info_grid_welcome_headline %} <h2 class="sw-dashboard-index__card-title"> {{ $tc('sw-dashboard.helpcard.headline') }} </h2> {% endblock %} {% block sw_dashboard_index_content_info_grid_welcome_link_list %} <ul class="sw-dashboard-index__card-list"> <li v-for="(key, index) in ['helpcenter','takeOffTip','getToKnowSales']" :key="\`helpcardContent-\${index}\`" class="sw-dashboard-index__card-list-item" > <sw-external-link :href="$tc(\`sw-dashboard.helpcard.\${key}Link\`)"> {{ $tc(\`sw-dashboard.helpcard.\${key}\`) }} </sw-external-link> </li> </ul> {% endblock %} {% endblock %} </div> {% endblock %} {% block sw_dashboard_index_content_grid_info_inner_feedback_card %} <div class="sw-dashboard-index__card sw-dashboard-index__card--dimmed"> {% block sw_dashboard_index_content_info_grid_feedback_card_content %} {% block sw_dashboard_index_content_feedback_headline %} <h2 class="sw-dashboard-index__card-title"> {{ $tc('sw-dashboard.feedbackCard.headline') }} </h2> {% endblock %} {% block sw_dashboard_index_content_feedback_text %} <p class="sw-dashboard-index__card-text"> {{ $tc('sw-dashboard.feedbackCard.text') }} </p> {% endblock %} {% block sw_dashboard_index_content_feedback_link %} <sw-external-link class="sw-dashboard-index__card-button" :href="$tc('sw-dashboard.feedbackCard.feedbackLink')" > {{ $tc('sw-dashboard.feedbackCard.feedback') }} </sw-external-link> {% endblock %} {% endblock %} </div> {% endblock %} {% endblock %} </div> {% endblock %} <sw-extension-component-section position-identifier="sw-dashboard__after-content" class="sw-dashboard__after-content" /> </sw-card-view> </template> {% endblock %} </sw-page> {% endblock %}`,l=Shopware.Component.wrapComponentConfig({template:_,data(){return{cachedHeadlineGreetingKey:null}},metaInfo(){return{title:this.$createTitle()}},computed:{welcomeMessage(){const e=this.greetingName,n=this.$tc(this.cachedHeadlineGreetingKey,1,{greetingName:e});return e?n:n.replace(/\,\s*/,"")},welcomeSubline(){return this.$tc(this.getGreetingTimeKey("daytimeWelcomeText"))},greetingName(){const{currentUser:e}=Shopware.Store.get("session");return(e==null?void 0:e.firstName)||null}},created(){this.createdComponent()},methods:{createdComponent(){this.cachedHeadlineGreetingKey=this.cachedHeadlineGreetingKey??this.getGreetingTimeKey("daytimeHeadline")},getGreetingTimeKey(e="daytimeHeadline"){const n=`sw-dashboard.introduction.${e}`,a=this.getGreetings(e),i=new Date().getHours();if(a===void 0)return"";const t=Object.keys(a).map(d=>parseInt(d.replace("h",""),10)).sort((d,c)=>d-c).reverse(),o=t.find(d=>i>=d)||t[0],s=Math.floor(Math.random()*a[`${o}h`].length);return`${n}.${o}h[${s}]`},getGreetings(e="daytimeHeadline"){var t,o,s,d,c,r;const n=this.$i18n.messages,a=(s=(o=(t=n==null?void 0:n[this.$i18n.locale])==null?void 0:t["sw-dashboard"])==null?void 0:o.introduction)==null?void 0:s[e],i=(r=(c=(d=n==null?void 0:n[this.$i18n.fallbackLocale])==null?void 0:d["sw-dashboard"])==null?void 0:c.introduction)==null?void 0:r[e];return a??i}}});export{l as default};
