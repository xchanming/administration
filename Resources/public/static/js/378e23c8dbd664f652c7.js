(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[34548],{733815:function(){},434548:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}}),t(569340);var o=Cicada.Component.wrapComponentConfig({template:'<div class="sw-extension-app-module-error-page">\n    <img\n        :src="assetFilter(\'administration/static/img/error-pages/app-error.svg\')"\n        alt="Error page background with a cute little space kitty"\n        class="sw-extension-app-module-error-page__illustration"\n    >\n\n    <div class="sw-extension-app-module-error-page__text-content">\n        <h3>{{ $tc(\'sw-extension.sw-extension-app-module-error-page.error.heading\') }}</h3>\n        <p>{{ $tc(\'sw-extension.sw-extension-app-module-error-page.error.phrase\') }}</p>\n        <p>{{ $tc(\'sw-extension.sw-extension-app-module-error-page.error.info\') }}</p>\n\n        <sw-button\n            variant="primary"\n            @click="goBack"\n        >\n            {{ $tc(\'sw-extension.sw-extension-app-module-error-page.error.lblBackButton\') }}\n        </sw-button>\n    </div>\n</div>\n',compatConfig:Cicada.compatConfig,computed:{assetFilter(){return Cicada.Filter.getByName("asset")}},methods:{goBack(){this.$router.go(-1)}}})},569340:function(e,n,t){var o=t(733815);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),t(745346).Z("3c84caf3",o,!0,{})}}]);