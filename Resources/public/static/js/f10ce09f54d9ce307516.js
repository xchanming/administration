"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[64703],{64703:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var s={template:'\n{% block sw_settings_seo %}\n<sw-page class="sw-settings-seo">\n\n    \n    {% block sw_settings_seo_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_seo_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_seo_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-seo.general.textHeadline\') }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_seo_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_seo_smart_bar_actions_add %}\n        <sw-button\n            variant="primary"\n            @click="onClickSave()"\n        >\n            {{ $tc(\'sw-settings-seo.general.buttonSave\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_seo_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_settings_seo_content_inner %}\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <div v-show="!isLoading">\n                \n                {% block sw_settings_seo_content_inner_seo_url_template %}\n                <sw-seo-url-template-card ref="seoUrlTemplateCard" />\n                {% endblock %}\n\n                \n                {% block sw_settings_seo_content_inner_redirect %}\n                <sw-system-config\n                    ref="systemConfig"\n                    domain="core.seo"\n                    @loading-changed="onLoadingChanged"\n                />\n                {% endblock %}\n            </div>\n\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,data(){return{isLoading:!1}},metaInfo(){return{title:this.$createTitle()}},methods:{onClickSave(){this.$refs.seoUrlTemplateCard.onClickSave(),this.$refs.systemConfig.saveAll()},onLoadingChanged(n){this.isLoading=n}}}}}]);