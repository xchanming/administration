const a=`{% block sw_cms_create_wizard %} <div class="sw-cms-create-wizard"> <div class="sw-cms-create-wizard__inner"> {% block sw_cms_create_wizard_first_step %} <div v-if="step === 1" class="sw-cms-create-wizard__step-1" > <h2 class="sw-cms-create-wizard__title"> {{ $tc('sw-cms.createWizard.choosePageTypeTitle') }} </h2> {% block sw_cms_create_wizard_page_type %} <div class="sw-cms-create-wizard__page-type-selection"> {% block sw_cms_create_wizard_page_type_options %} <div v-for="pageType in visiblePageTypes" :key="pageType.name" class="sw-cms-create-wizard__page-type" :class="pageType.class" role="button" tabindex="0" @click="onPageTypeSelect(pageType.name)" @keyup.enter="onPageTypeSelect(pageType.name)" > <sw-icon :name="pageType.icon" size="24" /> <p>{{ $tc(pageType.title) }}</p> </div> {% endblock %} </div> {% endblock %} {% block sw_cms_create_wizard_first_step_abort %} <router-link class="sw-cms-create-wizard__back" :to="{ name: 'sw.cms.index' }" > <sw-icon name="regular-times-s" small /> {{ $tc('global.default.cancel') }} </router-link> {% endblock %} {% block sw_cms_create_wizard_first_step_helptext %} <p class="sw-cms-create-wizard__step1-helptext"> {{ $tc('sw-cms.createWizard.choosePageTypeHelpText') }} </p> {% endblock %} </div> {% endblock %} {% block sw_cms_create_wizard_second_step %} <div v-if="step === 2" class="sw-cms-create-wizard__step-2" > <h2 class="sw-cms-create-wizard__title"> {{ $tc('sw-cms.createWizard.chooseSectionTitle') }} </h2> {% block sw_cms_create_wizard_section %} <div class="sw-cms-create-wizard__section-selection"> <sw-cms-stage-section-selection @section-select="onSectionSelect" /> </div> {% endblock %} {% block sw_cms_create_wizard_second_step_back %} <div class="sw-cms-create-wizard__back" role="button" tabindex="0" @click="goToStep('pageType')" @keydown.enter="goToStep('pageType')" > <sw-icon name="regular-long-arrow-left" small /> {{ $tc('sw-cms.createWizard.stepBack') }} </div> {% endblock %} {% block sw_cms_create_wizard_second_step_helptext %} <p class="sw-cms-create-wizard__step2-helptext"> {{ $tc('sw-cms.createWizard.chooseSectionHelpText') }} </p> {% endblock %} </div> {% endblock %} {% block sw_cms_create_wizard_third_step %} <div v-if="step === 3" class="sw-cms-create-wizard__step-3" > <h2 class="sw-cms-create-wizard__title"> {{ $tc('sw-cms.createWizard.chooseNameTitle') }} </h2> <div class="sw-cms-create-wizard__name-select"> {% block sw_cms_create_wizard_page_preview %} <div class="sw-cms-create-wizard__page-preview"> <div class="sw-cms-create-wizard__preview_image" :style="pagePreviewStyle" ></div> <div class="sw-cms-create-wizard__preview_info"> <sw-icon :name="currentPageType?.icon" size="16" /> <p>{{ $tc((currentPageType?.title ?? "")) }}</p> </div> </div> {% endblock %} {% block sw_cms_create_wizard_page_completion %} <div class="sw-cms-create-wizard__page-completion"> {% block sw_cms_create_wizard_page_name %} <sw-text-field v-model:value="page.name" class="sw-cms-create-wizard__page-completion-name" :label="$tc('sw-cms.detail.label.pageName')" :placeholder="$tc('sw-cms.detail.label.pageNamePlaceholder')" @keypress.enter="onCompletePageCreation" /> {% endblock %} <sw-single-select v-if="isCustomEntityType" v-model:value="page.entity" class="sw-cms-create-wizard__page-completion-custom-entity" :label="$tc('sw-cms.detail.label.pageEntity')" :placeholder="$tc('sw-cms.detail.label.pageEntityPlaceholder')" :options="customEntities" require /> {% block sw_cms_create_wizard_page_completion_buttons %} <div class="sw-cms-create-wizard__page-completion-buttons"> {% block sw_cms_create_wizard_page_completion_save_button %} <sw-button variant="primary" :disabled="!isCompletable" @click="onCompletePageCreation" > {{ $tc('sw-cms.createWizard.createLayout') }} </sw-button> {% endblock %} </div> {% endblock %} </div> {% endblock %} </div> {% block sw_cms_create_wizard_third_step_back %} <div class="sw-cms-create-wizard__back" role="button" tabindex="0" @click="goToStep('sectionType')" @keydown.enter="goToStep('sectionType')" > <sw-icon name="regular-long-arrow-left" small /> {{ $tc('sw-cms.createWizard.stepBack') }} </div> {% endblock %} </div> {% endblock %} </div> </div> {% endblock %}`,{Filter:c}=Cicada,i=Cicada.Component.wrapComponentConfig({template:a,compatConfig:Cicada.compatConfig,inject:["feature","cmsPageTypeService","customEntityDefinitionService"],emits:["on-section-select","wizard-complete"],props:{page:{type:Object,required:!0}},data(){return{step:1,steps:{pageType:1,sectionType:2,pageName:3}}},computed:{visiblePageTypes(){return this.cmsPageTypeService.getVisibleTypes()},currentPageType(){return this.cmsPageTypeService.getType(this.page.type)},isCustomEntityType(){return this.page.type.startsWith("custom_entity_")},isCompletable(){return[this.page.name,!this.isCustomEntityType||this.page.entity].every(e=>e)},customEntities(){return this.customEntityDefinitionService.getCmsAwareDefinitions().map(e=>{const t=`${e.entity}.moduleTitle`,s=e.entity;return{value:s,label:this.$te(t)?this.$tc(t):s}})},pagePreviewMedia(){const e=this.page.sections??[];return e.length<1?"":`url(${this.assetFilter(`administration/static/img/cms/preview_${this.page.type}_${e[0].type}.png`)})`},pagePreviewStyle(){return{"background-image":this.pagePreviewMedia,"background-size":"cover"}},assetFilter(){return c.getByName("asset")},cmsPageStore(){return Cicada.Store.get("cmsPage")}},watch:{step(e){this.getStepName(e)==="sectionType"&&(this.page.sections=new Cicada.Data.EntityCollection(`/cms-page/${this.page.id}/sections`,"cms_section",Cicada.Context.api))}},methods:{goToStep(e){this.step=this.steps[e]},getStepName(e){const t=Object.entries(this.steps).find(s=>e===s[1]);return t?t[0]:""},onPageTypeSelect(e){this.cmsPageStore.setCurrentPageType(e),this.page.type=e,this.goToStep("sectionType")},onSectionSelect(e){this.goToStep("pageName"),this.$emit("on-section-select",e)},onCompletePageCreation(){this.page.name&&this.$emit("wizard-complete")}}});export{i as default};
//# sourceMappingURL=index-BcHdcCqM.js.map
