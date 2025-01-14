(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[47688],{484889:function(){},347688:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return t}}),a(65993);let{Mixin:l}=Cicada,{mapState:i,mapPropertyErrors:s}=Cicada.Component.getComponentHelper();var t={template:'\n{% block sw_landing_page_detail_base %}\n<div class="sw-landing-page-detail-base">\n\n    \n    {% block sw_landing_page_detail_base_information %}\n    <sw-card\n        position-identifier="sw-landing-page-detail-base"\n        :title="$tc(\'sw-landing-page.base.general.headlineInformationCard\')"\n        :is-loading="isLoading"\n    >\n        <sw-container\n            columns="repeat(auto-fit, minmax(150px, 1fr))"\n            gap="0px 30px"\n        >\n\n            \n            {% block sw_landing_page_detail_base_information_name %}\n            <sw-text-field\n                v-model:value="landingPage.name"\n                required\n                name="landingPageName"\n                validation="required"\n                :disabled="!acl.can(\'landing_page.editor\')"\n                :label="$tc(\'sw-landing-page.base.general.labelName\')"\n                :placeholder="placeholder(landingPage, \'name\')"\n                :error="landingPageNameError"\n            />\n            {% endblock %}\n\n            \n            {% block sw_landing_page_detail_base_information_active %}\n            <sw-switch-field\n                v-model:value="landingPage.active"\n                class="sw-landing-page-detail-base__active"\n                name="landingPageActive"\n                :disabled="!acl.can(\'landing_page.editor\')"\n                :label="$tc(\'sw-landing-page.base.general.isActiveLabel\')"\n            />\n            {% endblock %}\n        </sw-container>\n\n        \n        {% block sw_landing_page_detail_base_seo_form_sales_channel %}\n        <sw-entity-multi-select\n            v-model:entityCollection="landingPage.salesChannels"\n            required\n            class="sw-landing-page-detail-base__sales_channel"\n            entity-name="sales_channel"\n            :disabled="!acl.can(\'landing_page.editor\')"\n            :label="$tc(\'sw-landing-page.base.seo.labelSalesChannel\')"\n            :placeholder="$tc(\'sw-landing-page.base.seo.placeholderSalesChannel\')"\n            :error="landingPageSalesChannelsError"\n        />\n        {% endblock %}\n\n        \n        {% block sw_landing_page_detail_base_information_tags %}\n        <sw-entity-tag-select\n            v-if="landingPage && !isLoading"\n            v-model:entity-collection="landingPage.tags"\n            class="sw-landing-page-detail-base__tags"\n            :label="$tc(\'sw-landing-page.base.general.labelTags\')"\n            :placeholder="$tc(\'sw-landing-page.base.general.labelTagsPlaceholder\')"\n            :disabled="!acl.can(\'landing_page.editor\')"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_landing_page_detail_base_seo %}\n    <sw-card\n        position-identifier="sw-landing-page-detail-seo"\n        :title="$tc(\'sw-landing-page.base.seo.title\')"\n        :is-loading="isLoading"\n    >\n        <mt-banner\n            v-if="!isLayoutSet"\n            variant="attention"\n            :title="$tc(\'sw-landing-page.base.seo.notification.noLayoutAssigned\')"\n        >\n            {{ $tc(\'sw-landing-page.base.seo.notification.noLayoutAssigned\') }}\n        </mt-banner>\n\n        \n        {% block sw_landing_page_detail_base_seo_form %}\n        <div class="sw-landing-page-detail-base__seo-form">\n\n            \n            {% block sw_landing_page_detail_base_seo_form_meta_title %}\n            <sw-text-field\n                v-model:value="landingPage.metaTitle"\n                maxlength="255"\n                :disabled="!acl.can(\'landing_page.editor\')"\n                :label="$tc(\'sw-landing-page.base.seo.labelMetaTitle\')"\n                :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaTitle\')"\n                :placeholder="placeholder(landingPage, \'metaTitle\', $tc(\'sw-landing-page.base.seo.placeholderMetaTitle\'))"\n            />\n            {% endblock %}\n\n            \n            {% block sw_landing_page_detail_base_seo_form_meta_description %}\n            <sw-textarea-field\n                v-model:value="landingPage.metaDescription"\n                maxlength="255"\n                :disabled="!acl.can(\'landing_page.editor\')"\n                :label="$tc(\'sw-landing-page.base.seo.labelMetaDescription\')"\n                :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaDescription\')"\n                :placeholder="placeholder(landingPage, \'metaDescription\', $tc(\'sw-landing-page.base.seo.placeholderMetaDescription\'))"\n            />\n            {% endblock %}\n\n            \n            {% block sw_landing_page_detail_base_seo_form_keywords %}\n            <sw-text-field\n                v-model:value="landingPage.keywords"\n                :disabled="!acl.can(\'landing_page.editor\')"\n                :label="$tc(\'sw-landing-page.base.seo.labelKeywords\')"\n                :placeholder="placeholder(landingPage, \'keywords\', $tc(\'sw-landing-page.base.seo.placeholderKeywords\'))"\n            />\n            {% endblock %}\n\n            \n            {% block sw_landing_page_detail_base_seo_form_url %}\n            <sw-text-field\n                v-model:value="landingPage.url"\n                required\n                name="landingPageUrl"\n                :disabled="!acl.can(\'landing_page.editor\')"\n                :label="$tc(\'sw-landing-page.base.seo.labelUrl\')"\n                :placeholder="placeholder(landingPage, \'url\', $tc(\'sw-landing-page.base.seo.placeholderUrl\'))"\n                :error="landingPageUrlError"\n            />\n            {% endblock %}\n\n        </div>\n        {% endblock %}\n\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_landing_page_detail_base_attribute_sets %}\n    <sw-card\n        v-if="customFieldSetsArray.length > 0"\n        position-identifier="sw-landing-page-detail-attribute-sets"\n        :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n        :is-loading="isLoading"\n    >\n        <sw-custom-field-set-renderer\n            :entity="landingPage"\n            :sets="customFieldSetsArray"\n        />\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],mixins:[l.getByName("placeholder")],props:{isLoading:{type:Boolean,required:!0}},computed:{...i("swCategoryDetail",{customFieldSetsArray:e=>e.customFieldSets?e.customFieldSets:[]}),...s("landingPage",["name","url","salesChannels"]),landingPage(){return Cicada.State.get("swCategoryDetail").landingPage},cmsPage(){return Cicada.Store.get("cmsPage").currentPage},isLayoutSet(){return null!==this.landingPage.cmsPageId}}}},65993:function(e,n,a){var l=a(484889);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),a(745346).Z("7504941c",l,!0,{})}}]);