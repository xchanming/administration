(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[69957],{817052:function(){},469957:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return t}}),n(833298);var t=Cicada.Component.wrapComponentConfig({template:'\n{% block sw_dashboard_index %}\n<sw-page\n    class="sw-dashboard-index"\n    :show-smart-bar="false"\n>\n    \n    {% block sw_dashboard_index_content %}\n    <template #content>\n        <sw-card-view class="sw-dashboard-index__content">\n\n            <sw-extension-component-section\n                position-identifier="sw-dashboard__before-content"\n                class="sw-dashboard__before-content"\n            />\n\n            <sw-dashboard-statistics />\n\n            <sw-extension-component-section\n                position-identifier="sw-dashboard__after-content"\n                class="sw-dashboard__after-content"\n            />\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,data(){},metaInfo(){return{title:this.$createTitle()}},created(){this.createdComponent()},methods:{createdComponent(){Cicada.ExtensionAPI.publishData({id:"sw-dashboard-detail__todayOrderData",path:"todayOrderData",scope:this,deprecated:!0,deprecationMessage:"No replacement available, use API instead."}),Cicada.ExtensionAPI.publishData({id:"sw-dashboard-detail__statisticDateRanges",path:"statisticDateRanges",scope:this,deprecated:!0,deprecationMessage:"No replacement available, use API instead."})}}})},833298:function(e,a,n){var t=n(817052);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),n(745346).Z("6265ad34",t,!0,{})}}]);