const t=`{% block sw_import_export %} <sw-page class="sw-import-export"> <template #content> <sw-card-view> {% block sw_import_export_tabs %} <sw-tabs position-identifier="sw-import-export"> {% block sw_import_export_tabs_import %} <sw-tabs-item :route="{ name: 'sw.import.export.index.import' }"> {{ $tc('sw-import-export.page.importTab') }} </sw-tabs-item> {% endblock %} {% block sw_import_export_tabs_export %} <sw-tabs-item :route="{ name: 'sw.import.export.index.export' }"> {{ $tc('sw-import-export.page.exportTab') }} </sw-tabs-item> {% endblock %} {% block sw_import_export_tabs_profiles %} <sw-tabs-item :route="{ name: 'sw.import.export.index.profiles' }"> {{ $tc('sw-import-export.page.profileTab') }} </sw-tabs-item> {% endblock %} </sw-tabs> {% endblock %} <router-view ref="tabContent" /> </sw-card-view> </template> {% block sw_import_export_language_switch %} <template #language-switch> <sw-language-switch @on-change="onChangeLanguage" /> </template> {% endblock %} </sw-page> {% endblock %}`,e={template:t,compatConfig:Cicada.compatConfig,inject:["repositoryFactory"],data(){return{}},metaInfo(){return{title:this.$createTitle()}},methods:{onChangeLanguage(){this.$refs.tabContent.reloadContent&&this.$refs.tabContent.reloadContent()}}};export{e as default};
//# sourceMappingURL=index-EE5C5myP.js.map
