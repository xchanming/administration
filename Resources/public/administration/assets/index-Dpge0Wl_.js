const c=`{% block sw_cms_slot %} <div :id="slotElementId" class="sw-cms-slot" :class="componentClasses" > {% block sw_cms_slot_content %} {% block sw_cms_slot_content_component %} <component :is="elementConfig.component" v-if="elementConfig?.component" v-model:element="element" :element-data="elementConfig" :disabled="disabled || undefined" /> {% endblock %} {# This is just a quick inline design which needs to be refactored for a real design implementation #} <div v-else-if="elementNotFound" class="sw-cms-slot__element-not-found" style=" width: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; background-color: #fbe5ea; border: 1px solid #de294c; border-radius: 4px; gap: 16px; " > <sw-icon name="regular-exclamation-circle" color="#de294c" /> <div> <p style="color: #de294c;"> <strong>Element could not be load</strong> </p> <p style="color: #de294c; margin-top: 6px;"> Please try again or select another element. </p> </div> </div> <div v-else> <sw-skeleton-bar style="width: 100%; min-height: 250px;" /> </div> {% block sw_cms_slot_content_preview_overlay %} <div v-if="!active" class="sw-cms-slot__preview-overlay" ></div> {% endblock %} {% block sw_cms_slot_content_overlay %} <div v-if="active" class="sw-cms-slot__overlay" > {% block sw_cms_slot_content_overlay_content %} <div class="sw-cms-slot__actions"> {% block sw_cms_slot_content_overlay_action_settings %} <div v-tooltip.bottom="tooltipDisabled" class="sw-cms-slot__settings-action" :class="cmsSlotSettingsClasses" role="button" tabindex="0" @click="onSettingsButtonClick" @keydown.enter="onSelectElement(element.name)" > <sw-icon name="regular-cog" size="16" /> </div> {% endblock %} {% block sw_cms_slot_content_overlay_action_swap %} <div v-if="elementConfig?.removable !== false" class="sw-cms-slot__element-action" role="button" tabindex="0" @click="onElementButtonClick" @keydown.enter="onSelectElement(element.name)" > <sw-icon name="regular-repeat" size="16" /> </div> {% endblock %} </div> {% endblock %} </div> {% endblock %} {% block sw_cms_slot_content_settings_modal %} <sw-modal v-if="showElementSettings" class="sw-cms-slot__config-modal" :variant="modalVariant" :title="$tc('sw-cms.detail.title.elementSettingsModal')" @modal-close="onCloseSettingsModal" > {% block sw_cms_slot_content_settings_modal_component %} <component :is="elementConfig.configComponent" ref="elementComponentRef" v-model:element="element" :element-data="elementConfig" /> {% endblock %} {% block sw_cms_slot_content_settings_modal_footer %} <template #modal-footer> {% block sw_cms_slot_content_settings_modal_action_confirm %} <sw-button variant="primary" @click="onCloseSettingsModal" > {{ $tc('sw-cms.detail.label.buttonElementSettingsConfirm') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %} {% block sw_cms_slot_content_element_modal %} <sw-modal v-if="showElementSelection" :title="$tc('sw-cms.detail.title.elementChangeModal')" @modal-close="onCloseElementModal" > {% block sw_cms_slot_content_element_modal_selection %} <div class="sw-cms-slot__modal-container"> {% block sw_cms_slot_content_element_modal_selection_groups %} <sw-sidebar-collapse v-for="cmsElementGroup in groupedCmsElements" :key="cmsElementGroup.title" expand-on-loading expand-chevron-direction="up" > <template #header> {{ $tc(cmsElementGroup.title) }} </template> <template #content> <div class="sw-cms-slot__element-selection"> {% block sw_cms_slot_content_element_modal_selection_element %} <template v-for="element in cmsElementGroup.items" :key="element.name" > <div v-if="!element.hidden && element.previewComponent" class="element-selection__element-wrapper" > <div class="element-selection__element"> {% block sw_cms_slot_content_element_modal_selection_element_component %} <component :is="element.previewComponent" class="sw-cms-slot__element-preview" :element-data="element" /> {% endblock %} {% block sw_cms_slot_content_element_modal_selection_element_overlay %} <div class="element-selection__overlay element-selection__overlay-action-select" role="button" tabindex="0" @click="onSelectElement(element)" @keydown.enter="onSelectElement(element)" > <sw-icon name="regular-repeat" size="28" /> </div> {% endblock %} {% block sw_cms_slot_content_element_modal_selection_element_overlay_favorite %} <div class="element-selection__overlay element-selection__overlay-action-favorite" role="button" tabindex="0" @click="onToggleElementFavorite(element.name)" @keydown.enter="onToggleElementFavorite(element.name)" > <sw-icon v-if="cmsElementFavorites.isFavorite(element.name)" name="solid-heart" size="28" /> <sw-icon v-else name="regular-heart" size="28" /> </div> {% endblock %} </div> {% block sw_cms_slot_content_element_modal_selection_element_label %} <span class="element-selection__label">{{ $tc(element.label) }}</span> {% endblock %} </div> </template> {% endblock %} </div> </template> </sw-sidebar-collapse> {% endblock %} </div> {% endblock %} {% block sw_cms_slot_content_element_modal_footer %} <template #modal-footer> {% block sw_cms_slot_content_element_modal_action_abort %} <sw-button @click="onCloseElementModal"> {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %} {% endblock %} </div> {% endblock %}`,{deepCopyObject:s}=Shopware.Utils.object,m=Shopware.Component.wrapComponentConfig({template:c,inject:["cmsService","cmsElementFavorites"],props:{element:{type:Object,required:!0},active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},data(){return{showElementSettings:!1,showElementSelection:!1,elementNotFound:!1}},computed:{slotElementId(){return this.element.id},cmsServiceState(){return this.cmsService.getCmsServiceState()},elementConfig(){return this.cmsServiceState.elementRegistry[this.element.type]},cmsElements(){const e=Shopware.Store.get("cmsPage").currentPageType;if(!e)return{};const t=Object.entries(this.cmsService.getCmsElementRegistry()).filter(([l])=>this.cmsService.isElementAllowedInPageType(l,e));return Object.fromEntries(t)},groupedCmsElements(){const e=[],t=Object.values(this.cmsElements).sort((n,o)=>!n||!o?0:n.name.localeCompare(o.name)),l=t.filter(n=>n&&this.cmsElementFavorites.isFavorite(n.name)),i=t.filter(n=>!n||!this.cmsElementFavorites.isFavorite(n.name));return l.length&&e.push({title:"sw-cms.elements.general.switch.groups.favorites",items:l}),e.push({title:"sw-cms.elements.general.switch.groups.all",items:i}),e},componentClasses(){const e=`sw-cms-slot-${this.element.slot}`;return{"is--disabled":this.disabled,[e]:!!this.element.slot}},cmsSlotSettingsClasses(){var e,t;return(e=this.elementConfig)!=null&&e.defaultConfig&&!((t=this.element)!=null&&t.locked)?null:"is--disabled"},tooltipDisabled(){var e;return(e=this.elementConfig)!=null&&e.disabledConfigInfoTextKey?{message:this.$tc(this.elementConfig.disabledConfigInfoTextKey),disabled:!!this.elementConfig.defaultConfig&&!this.element.locked}:{message:this.$tc("sw-cms.elements.general.config.tab.settings"),disabled:!0}},modalVariant(){return this.element.type==="html"?"full":"large"}},mounted(){this.mountedComponent()},methods:{mountedComponent(){setTimeout(()=>{this.elementConfig||(this.elementNotFound=!0)},1e4)},onSettingsButtonClick(){var e,t;!((e=this.elementConfig)!=null&&e.defaultConfig)||(t=this.element)!=null&&t.locked||(this.showElementSettings=!0)},onCloseSettingsModal(){const e=this.$refs.elementComponentRef;e!=null&&e.handleUpdateContent&&e.handleUpdateContent(),this.showElementSettings=!1},onElementButtonClick(){this.showElementSelection=!0},onCloseElementModal(){this.showElementSelection=!1},onSelectElement(e){var t;this.element.data=s((e==null?void 0:e.defaultData)||{}),this.element.config=s((e==null?void 0:e.defaultConfig)||{}),this.element.type=e.name,this.element.locked=!1,(t=this.element.translated)!=null&&t.config&&(this.element.translated.config={}),this.showElementSelection=!1},onToggleElementFavorite(e){this.cmsElementFavorites.update(!this.cmsElementFavorites.isFavorite(e),e)},elementInElementGroup(e,t){return t==="favorite"?this.cmsElementFavorites.isFavorite(e.name):!0}}});export{m as default};
