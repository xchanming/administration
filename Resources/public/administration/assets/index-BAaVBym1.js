const e=`{% block sw_extension_app_module_error_page %} <div class="sw-extension-app-module-error-page"> <img :src="assetFilter('administration/static/img/error-pages/app-error.svg')" alt="Error page background with a cute little space kitty" class="sw-extension-app-module-error-page__illustration" > <div class="sw-extension-app-module-error-page__text-content"> <h3>{{ $tc('sw-extension.sw-extension-app-module-error-page.error.heading') }}</h3> <p>{{ $tc('sw-extension.sw-extension-app-module-error-page.error.phrase') }}</p> <p>{{ $tc('sw-extension.sw-extension-app-module-error-page.error.info') }}</p> <sw-button variant="primary" @click="goBack" > {{ $tc('sw-extension.sw-extension-app-module-error-page.error.lblBackButton') }} </sw-button> </div> </div> {% endblock %}`,r=Shopware.Component.wrapComponentConfig({template:e,computed:{assetFilter(){return Shopware.Filter.getByName("asset")}},methods:{goBack(){this.$router.go(-1)}}});export{r as default};
