(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[27514],{911567:function(){},427514:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s=t(558343);t(532040);let{Component:i,Mixin:o}=Cicada,{mapPropertyErrors:a}=i.getComponentHelper(),{Criteria:c}=Cicada.Data,{cloneDeep:l}=Cicada.Utils.object,r=Cicada.Utils.types;var d=Cicada.Component.wrapComponentConfig({template:'\n{% block sw_cms_sidebar %}\n<sw-sidebar class="sw-cms-sidebar">\n\n    \n    {% block sw_cms_sidebar_page_settings %}\n    <sw-sidebar-item\n        ref="pageConfigSidebar"\n        icon="regular-cog"\n        :title="$tc(\'sw-cms.detail.sidebar.titlePageSettings\')"\n        :has-simple-badge="hasPageConfigErrors"\n        badge-type="error"\n        :disabled="page.locked || disabled"\n    >\n\n        \n        {% block sw_cms_sidebar_page_settings_content %}\n        <sw-sidebar-collapse :expand-on-loading="true">\n\n            \n            {% block sw_cms_sidebar_page_settings_header %}\n            <template #header>\n                <span>{{ $tc(\'sw-cms.detail.sidebar.headerPageSettings\') }}</span>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_cms_sidebar_page_settings_form %}\n            <template #content>\n                <div class="sw-cms-sidebar__settings">\n                    \n                    {% block sw_cms_sidebar_page_settings_name_field %}\n                    <sw-text-field\n                        v-model:value="page.name"\n                        :label="$tc(\'sw-cms.detail.label.pageName\')"\n                        :placeholder="placeholder(page, \'name\')"\n                        :error="pageNameError"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_sidebar_page_settings_css_class_field %}\n                    <sw-text-field\n                        v-model:value="page.cssClass"\n                        :label="$tc(\'sw-cms.detail.label.pageCssClass\')"\n                        :placeholder="placeholder(page, \'cssClass\')"\n                        :help-text="$tc(\'sw-cms.detail.helpText.cssClassField\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_sidebar_page_settings_type_field %}\n                    <sw-select-field\n                        v-tooltip.bottom="tooltipDisabled"\n                        :value="page.type"\n                        :label="$tc(\'sw-cms.detail.label.pageTypeSelection\')"\n                        :disabled="!isSystemDefaultLanguage || page.type === \'product_detail\' || undefined"\n                        @update:value="onPageTypeChange"\n                    >\n                        \n                        {% block sw_cms_sidebar_page_settings_type_field_options %}\n                        <option\n                            v-for="pageType in pageTypes"\n                            :key="pageType.name"\n                            :value="pageType.name"\n                            :disabled="isDisabledPageType(pageType) || undefined"\n                        >\n                            {{ $tc(pageType.title) }}\n                        </option>\n                        {% endblock %}\n                    </sw-select-field>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_sidebar_page_settings_demo_field %}\n                    <sw-entity-single-select\n                        v-if="demoEntity !== null"\n                        v-model:value="demoEntityId"\n                        :label="$tc(\'sw-cms.detail.label.demoEntity\')"\n                        :placeholder="$tc(\'sw-cms.detail.placeholder.demoEntity\')"\n                        :entity="demoEntity"\n                        :criteria="demoCriteria"\n                        :context="demoContext"\n                        show-clearable-button\n                        @update:value="onDemoEntityChange"\n                    >\n\n                        \n                        {% block sw_cms_sidebar_page_settings_demo_field_variant_label %}\n                        <template\n                            v-if="demoEntity === \'product\'"\n                            #selection-label-property="{ item }"\n                        >\n                            <sw-product-variant-info :variations="item.variation">\n                                {{ item.translated.name || item.name }}\n                            </sw-product-variant-info>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_sidebar_page_settings_demo_field_result_item %}\n                        <template\n                            v-if="demoEntity === \'product\'"\n                            #result-item="{ item, index }"\n                        >\n                            <sw-select-result\n                                v-bind="{ item, index }"\n                            >\n\n                                \n                                {% block sw_cms_sidebar_page_settings_demo_field_result_label %}\n                                <span class="sw-select-result__result-item-text">\n                                    <sw-product-variant-info :variations="item.variation">\n                                        {{ item.translated.name || item.name }}\n                                    </sw-product-variant-info>\n                                </span>\n                                {% endblock %}\n                            </sw-select-result>\n                        </template>\n                        {% endblock %}\n                    </sw-entity-single-select>\n                    {% endblock %}\n                </div>\n            </template>\n            {% endblock %}\n        </sw-sidebar-collapse>\n        {% endblock %}\n    </sw-sidebar-item>\n    {% endblock %}\n\n    \n    {% block sw_cms_sidebar_block_overview %}\n    <sw-sidebar-item\n        ref="blockSelectionSidebar"\n        icon="regular-plus-circle"\n        :title="addBlockTitle"\n        :disabled="currentDeviceView === \'form\' || !isSystemDefaultLanguage || page.locked || disabled"\n    >\n        \n        {% block sw_cms_sidebar_block_overview_content %}\n        <div class="sw-cms-sidebar__block-overview">\n\n            \n            {% block sw_cms_sidebar_block_overview_category %}\n            <div class="sw-cms-sidebar__block-category">\n                <sw-select-field\n                    v-model:value="currentBlockCategory"\n                    :label="$tc(\'sw-cms.detail.label.blockCategorySelection\')"\n                >\n                    \n                    {% block sw_cms_sidebar_block_overview_category_options %}\n                    <option\n                        v-for="blockCategory in cmsBlockCategories"\n                        :key="blockCategory.value"\n                        :value="blockCategory.value"\n                    >\n                        {{ $tc(blockCategory.label) }}\n                    </option>\n                    {% endblock %}\n                </sw-select-field>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_cms_sidebar_block_overview_preview %}\n            <div\n                class="sw-cms-sidebar__block-selection"\n            >\n                <sw-empty-state\n                    v-if="cmsBlocksBySelectedBlockCategory.length === 0 && currentBlockCategory === \'favorite\'"\n                    icon="solid-heart"\n                    :absolute="false"\n                    :title="$tc(\'sw-cms.detail.title.blockFavoriteEmptyState\')"\n                >\n                    {{ $tc(\'sw-cms.detail.label.blockFavoriteEmptyState\') }}\n                </sw-empty-state>\n\n                <div\n                    v-for="block in cmsBlocksBySelectedBlockCategory"\n                    :key="block.name"\n                    class="sw-cms-sidebar__block"\n                >\n\n                    <div class="sw-cms-sidebar__block-preview-with-actions">\n                        <div\n                            v-draggable="{ dragGroup: \'cms-stage\', data: { block }, onDrop: onBlockStageDrop }"\n                            class="sw-cms-sidebar__block-preview"\n                            :class="{ \'has--no-label\': !block.label }"\n                        >\n\n                            \n                            {% block sw_cms_sidebar_block_overview_preview_component %}\n                            <component\n                                :is="block.previewComponent"\n                                :block="block"\n                            />\n                            {% endblock %}\n                        </div>\n\n                        \n                        {% block sw_cms_sidebar_block_overview_preview_favorite_action %}\n                        <sw-button\n                            class="sw-cms-sidebar__block-favorite"\n                            size="small"\n                            square\n                            block\n                            :disabled="block.appName === \'SwagCeToRiseUpsellingApp\'"\n                            @click="onToggleBlockFavorite(block.name)"\n                        >\n                            <sw-icon\n                                v-if="cmsBlockFavorites.isFavorite(block.name)"\n                                name="solid-heart"\n                                size="20"\n                                class="sw-cms-sidebar__icon-cms-block-favorite"\n                            />\n                            <sw-icon\n                                v-else\n                                name="regular-heart"\n                                size="20"\n                                class="sw-cms-sidebar__icon-cms-block-favorite"\n                            />\n                        </sw-button>\n                        {% endblock %}\n                    </div>\n\n                    \n                    {% block sw_cms_sidebar_block_overview_preview_label %}\n                    <span\n                        v-if="block.label"\n                        class="sw-cms-sidebar__block-label"\n                    >\n                        {{ $tc(block.label) }}\n                    </span>\n                    {% endblock %}\n                </div>\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </sw-sidebar-item>\n    {% endblock %}\n\n    \n    {% block sw_cms_sidebar_block_and_section_settings %}\n    <sw-sidebar-item\n        ref="itemConfigSidebar"\n        icon="regular-file-edit"\n        :title="sidebarItemSettings"\n        :disabled="(selectedBlock === null && selectedSection === null) || page.locked || disabled"\n        @close-content="onCloseBlockConfig"\n    >\n\n        \n        {% block sw_cms_sidebar_block_settings %}\n        <div class="sw-cms-sidebar__block-settings">\n            <template v-if="selectedBlock !== null">\n\n                \n                {% block sw_cms_sidebar_block_settings_content %}\n                <sw-sidebar-collapse :expand-on-loading="true">\n\n                    \n                    {% block sw_cms_sidebar_block_settings_header %}\n                    <template #header>\n                        <span>\n                            {{ $tc(\'sw-cms.sidebar.contentMenu.generalSettings\') }}\n                        </span>\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_sidebar_block_settings_form %}\n                    <template #content>\n                        <sw-cms-block-config\n                            :block="selectedBlock"\n                            @block-delete="onBlockDelete"\n                            @block-duplicate="onBlockDuplicate"\n                        />\n                    </template>\n                    {% endblock %}\n                </sw-sidebar-collapse>\n                {% endblock %}\n\n                \n                {% block sw_cms_sidebar_block_layout_settings_content %}\n                <sw-sidebar-collapse :expand-on-loading="false">\n\n                    \n                    {% block sw_cms_sidebar_block_layout_settings_header %}\n                    <template #header>\n                        <span> {{ $tc(\'sw-cms.sidebar.contentMenu.layoutSettings\') }}</span>\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_sidebar_block_layout_settings_form %}\n                    <template #content>\n                        <sw-cms-block-layout-config :block="selectedBlock" />\n                    </template>\n                    {% endblock %}\n                </sw-sidebar-collapse>\n                {% endblock %}\n\n                <sw-sidebar-collapse :expand-on-loading="false">\n                    <template #header>\n                        <span>{{ $tc(\'sw-cms.sidebar.contentMenu.visibilitySettings\') }}</span>\n                    </template>\n                    <template #content>\n                        <sw-cms-visibility-config\n                            class="sw-cms-sidebar__visibility-config-block"\n                            :visibility="selectedBlock.visibility"\n                            @visibility-change="(viewport, isVisible) => onVisibilityChange(selectedBlock, viewport, isVisible)"\n                        />\n                    </template>\n                </sw-sidebar-collapse>\n            </template>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_sidebar_section_settings %}\n        <div class="sw-cms-sidebar__section-settings">\n            <template v-if="selectedSection !== null">\n\n                \n                {% block sw_cms_sidebar_section_settings_content %}\n                <sw-sidebar-collapse :expand-on-loading="true">\n\n                    \n                    {% block sw_cms_sidebar_section_settings_header %}\n                    <template #header>\n                        <span>\n                            {{ $tc(\'sw-cms.sidebar.contentMenu.generalSettings\') }}\n                        </span>\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_sidebar_section_settings_form %}\n                    <template #content>\n                        <sw-cms-section-config\n                            :section="selectedSection"\n                            @section-duplicate="onSectionDuplicate"\n                            @section-delete="onSectionDelete"\n                        />\n                    </template>\n                    {% endblock %}\n                </sw-sidebar-collapse>\n\n                <sw-sidebar-collapse :expand-on-loading="false">\n                    <template #header>\n                        <span>{{ $tc(\'sw-cms.sidebar.contentMenu.visibilitySettings\') }}</span>\n                    </template>\n                    <template #content>\n                        <sw-cms-visibility-config\n                            class="sw-cms-sidebar__visibility-config-section"\n                            :visibility="selectedSection.visibility"\n                            @visibility-change="(viewport, isVisible) => onVisibilityChange(selectedSection, viewport, isVisible)"\n                        />\n                    </template>\n                </sw-sidebar-collapse>\n                {% endblock %}\n            </template>\n        </div>\n        {% endblock %}\n    </sw-sidebar-item>\n    {% endblock %}\n\n    \n    {% block sw_cms_sidebar_navigator %}\n    <sw-sidebar-item\n        ref="blockNavigator"\n        icon="regular-layer-group"\n        :title="$tc(\'sw-cms.detail.sidebar.titleNavigator\')"\n        :disabled="!page.sections.length === 0 || currentDeviceView === \'form\' || page.locked || disabled"\n        @click="onSidebarNavigatorClick"\n    >\n        \n        {% block sw_cms_sidebar_navigator_content %}\n        <div class="sw-cms-sidebar__navigator">\n\n            \n            {% block sw_cms_sidebar_navigator_section %}\n            <div\n                v-for="(section, sectionIndex) in page.sections"\n                :id="`sw-cms-sidebar__section-${section.id}`"\n                :key="section.id"\n                class="sw-cms-sidebar__navigator-section"\n            >\n\n                \n                {% block sw_cms_sidebar_navigator_section_header %}\n                <div class="sw-cms-sidebar__navigator-section-header">\n                    <template v-if="section.name">\n                        {{ $tc(\'sw-cms.section.layoutSection\') }} - {{ section.name }}\n                    </template>\n\n                    <template v-else-if="section.type === \'sidebar\'">\n                        {{ $tc(\'sw-cms.section.isSidebar\') }}\n                    </template>\n\n                    <template v-else>\n                        {{ $tc(\'sw-cms.section.isDefault\') }}\n                    </template>\n\n                    \n                    {% block sw_cms_sidebar_navigator_section_menu %}\n                    <sw-context-button :key="section.position">\n\n                        \n                        {% block sw_cms_sidebar_navigator_section_menu_move_up %}\n                        <sw-context-menu-item\n                            class="sw-cms-sidebar__navigator-section-move-up"\n                            :disabled="section.position === 0 || undefined"\n                            @click="moveSectionUp(section)"\n                        >\n                            {{ $tc(\'sw-cms.sidebar.contentMenu.moveUp\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_sidebar_navigator_section_menu_move_down %}\n                        <sw-context-menu-item\n                            class="sw-cms-sidebar__navigator-section-move-down"\n                            :disabled="section.position === page.sections.length - 1 || undefined"\n                            @click="moveSectionDown(section)"\n                        >\n                            {{ $tc(\'sw-cms.sidebar.contentMenu.moveDown\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_sidebar_navigator_section_menu_settings %}\n                        <sw-context-menu-item\n                            class="sw-cms-sidebar__navigator-section-settings"\n                            @click="openSectionSettings(sectionIndex)"\n                        >\n                            {{ $tc(\'sw-cms.sidebar.contentMenu.settings\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_sidebar_navigator_section_menu_duplicate %}\n                        <sw-context-menu-item\n                            class="sw-cms-sidebar__navigator-section-duplicate"\n                            :disabled="!sectionIsDuplicable(section)"\n                            @click="onSectionDuplicate(section)"\n                        >\n                            {{ $tc(\'global.default.duplicate\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_sidebar_navigator_section_menu_delete %}\n                        <sw-context-menu-item\n                            class="sw-cms-sidebar__navigator-section-delete"\n                            variant="danger"\n                            @click="onSectionDelete(section.id)"\n                        >\n                            {{ $tc(\'sw-cms.general.buttonDelete\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n                    </sw-context-button>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_cms_sidebar_navigator_main_elements %}\n                <template v-if="getMainContentBlocks(section.blocks).length > 0">\n                    \n                    {% block sw_cms_sidebar_navigator_main_element %}\n                    <template\n                        v-for="block in getMainContentBlocks(section.blocks)"\n                        :key="block.id"\n                    >\n                        <sw-cms-sidebar-nav-element\n                            v-draggable="getDragData(block, sectionIndex)"\n                            v-droppable="getDropData(block, sectionIndex)"\n                            :block="block"\n                            class="sw-cms-sidebar__navigator-block"\n                            :removable="blockIsRemovable(block)"\n                            :duplicable="blockIsDuplicable(block)"\n                            :class="{ \'is--dragging\': block.isDragging }"\n                            @block-delete="onBlockDelete($event, section)"\n                            @block-duplicate="onBlockDuplicate($event, section)"\n                        />\n                    </template>\n                    {% endblock %}\n                </template>\n\n                <template v-else>\n                    \n                    {% block sw_cms_sidebar_navigator_main_empty %}\n                    <div\n                        :key="section.id + \'_main\'"\n                        v-droppable="getDropData({ position: 0, sectionPosition: \'main\' }, sectionIndex)"\n                        class="sw-cms-sidebar__navigator-empty-element"\n                    >\n                        {{ $tc(\'sw-cms.detail.label.addBlocks\') }}\n                    </div>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                <template v-if="section.type === \'sidebar\'">\n                    <div class="sw-cms-sidebar__navigator-section-spacer"></div>\n\n                    \n                    {% block sw_cms_sidebar_navigator_sidebar_elements %}\n                    <template v-if="getSidebarContentBlocks(section.blocks).length > 0">\n                        \n                        {% block sw_cms_sidebar_navigator_sidebar_element %}\n                        <template\n                            v-for="block in getSidebarContentBlocks(section.blocks)"\n                            :key="block.id"\n                        >\n                            <sw-cms-sidebar-nav-element\n                                v-draggable="getDragData(block, sectionIndex)"\n                                v-droppable="getDropData(block, sectionIndex)"\n                                :block="block"\n                                :removable="blockIsRemovable(block)"\n                                class="sw-cms-sidebar__navigator-block is--sidebar"\n                                :class="{ \'is--dragging\': block.isDragging }"\n                                @block-delete="onBlockDelete($event, section)"\n                                @block-duplicate="onBlockDuplicate($event, section)"\n                            />\n                        </template>\n                        {% endblock %}\n                    </template>\n\n                    <template v-else>\n                        \n                        {% block sw_cms_sidebar_navigator_sidebar_empty %}\n                        <div\n                            :key="section.id + \'_sidebar\'"\n                            v-droppable="getDropData({ position: 0, sectionPosition: \'sidebar\' }, sectionIndex)"\n                            class="sw-cms-sidebar__navigator-empty-element"\n                        >\n                            {{ $tc(\'sw-cms.detail.label.addBlocks\') }}\n                        </div>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n                </template>\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </sw-sidebar-item>\n    {% endblock %}\n\n    \n    {% block sw_cms_sidebar_layout_assignment %}\n    <sw-sidebar-item\n        ref="layoutAssignment"\n        class="sw-cms-sidebar__layout-assignment"\n        icon="regular-share"\n        :title="$tc(\'sw-cms.detail.sidebar.titleLayoutAssignment\')"\n        :disabled="page.locked || disabled"\n    >\n\n        \n        {% block sw_cms_sidebar_layout_assignment_content %}\n        <div class="sw-cms-sidebar__layout-assignment-content">\n            \n            {% block sw_cms_sidebar_layout_assignment_headline %}\n            <h3 class="sw-cms-sidebar__layout-assignment-headline">\n                {{ $tc(\'sw-cms.sidebar.layoutAssignment.headline\') }}\n            </h3>\n            {% endblock %}\n\n            \n            {% block sw_cms_sidebar_layout_assignment_info_text %}\n            <p class="sw-cms-sidebar__layout-assignment-info-text">\n                {{ $tc(\'sw-cms.sidebar.layoutAssignment.infoText\') }}\n            </p>\n            {% endblock %}\n\n            \n            {% block sw_cms_sidebar_layout_assignment_action_open %}\n            <sw-button\n                variant="ghost"\n                size="small"\n                class="sw-cms-sidebar__layout-assignment-open"\n                @click="onOpenLayoutAssignment"\n            >\n                {{ $tc(\'sw-cms.sidebar.layoutAssignment.actionAssignLayout\') }}\n            </sw-button>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        <div\n            v-if="showDefaultLayoutSelection"\n            class="sw-cms-sidebar__layout-set-as-default-content"\n        >\n            <h3 class="sw-cms-sidebar__layout-set-as-default-headline">\n                {{ $tc(\'sw-cms.sidebar.layoutSetAsDefault.headline\') }}\n            </h3>\n\n            <p class="sw-cms-sidebar__layout-set-as-default-info-text">\n                {{ $tc(\'sw-cms.components.setDefaultLayoutModal.infoText\', page.type === \'product_detail\') }}\n            </p>\n\n            <sw-button\n                variant="ghost"\n                size="small"\n                class="sw-cms-sidebar__layout-set-as-default-open"\n                @click="onOpenLayoutSetAsDefault"\n            >\n                {{ $tc(\'sw-cms.sidebar.layoutSetAsDefault.actionSetAsDefaultLayout\') }}\n            </sw-button>\n        </div>\n    </sw-sidebar-item>\n    {% endblock %}\n\n    \n    {% block sw_cms_sidebar_navigator_confirm_modal %}\n    <sw-modal\n        v-if="showSidebarNavigatorModal"\n        class="sw-cms-sidebar__navigator-confirm-modal"\n        :title="$tc(\'global.default.warning\')"\n        variant="small"\n        @modal-close="onSidebarNavigationCancel"\n    >\n\n        \n        {% block sw_cms_sidebar_navigator_confirm_modal_content %}\n        <p class="sw-confirm-modal__text">\n            {{ $tc(\'sw-cms.detail.sidebar.confirmTextNavigator\') }}\n\n            \n            {% block sw_cms_sidebar_navigator_confirm_modal_content_input_reminder %}\n            <sw-checkbox-field\n                v-model:value="navigatorDontRemind"\n                class="sw-cms-sidebar__navigator-confirm-modal-reminder"\n                :label="$tc(\'sw-cms.detail.sidebar.confirmReminderNavigator\')"\n            />\n            {% endblock %}\n        </p>\n        {% endblock %}\n\n        <template #modal-footer>\n            \n            {% block sw_cms_sidebar_navigator_confirm_modal_content_footer %}\n            \n            {% block sw_cms_sidebar_navigator_confirm_modal_content_footer_cancel %}\n            <sw-button\n                class="sw-cms-sidebar__navigator-confirm-modal-cancel"\n                size="small"\n                @click="onSidebarNavigationCancel"\n            >\n                {{ $tc(\'global.default.cancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_cms_sidebar_navigator_confirm_modal_content_footer_confirm %}\n            <sw-button\n                class="sw-cms-sidebar__navigator-confirm-modal-confirm"\n                variant="primary"\n                size="small"\n                @click="onSidebarNavigationConfirm"\n            >\n                {{ $tc(\'global.default.confirm\') }}\n            </sw-button>\n            {% endblock %}\n            {% endblock %}\n        </template>\n    </sw-modal>\n    {% endblock %}\n</sw-sidebar>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["acl","cmsService","repositoryFactory","feature","cmsBlockFavorites","cmsPageTypeService"],emits:["page-type-change","demo-entity-change","page-save","block-stage-drop","current-block-change","section-duplicate","block-duplicate","page-update","open-layout-assignment","open-layout-set-as-default"],mixins:[o.getByName("cms-state"),o.getByName("placeholder")],props:{page:{type:Object,required:!0},demoEntity:{type:String,required:!1,default:null},demoEntityIdProp:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},isDefaultLayout:{type:Boolean,required:!1,default:!1}},data(){return{demoEntityId:this.demoEntityIdProp,currentBlockCategory:"text",currentDragSectionIndex:null,showSidebarNavigatorModal:!1,navigatorDontRemind:!1}},computed:{pageTypes(){return this.cmsPageTypeService.getTypes()},blockRepository(){return this.repositoryFactory.create("cms_block")},slotRepository(){return this.repositoryFactory.create("cms_slot")},cmsBlocks(){let e=Cicada.Store.get("cmsPage").currentPageType;return e?Object.fromEntries(Object.entries(this.cmsService.getCmsBlockRegistry()).filter(([n,t])=>t&&!t.hidden&&this.cmsService.isBlockAllowedInPageType(n,e))):{}},cmsBlockCategories(){let e=[{value:"favorite",label:"sw-cms.detail.label.blockCategoryFavorite"},{value:"text",label:"sw-cms.detail.label.blockCategoryText"},{value:"image",label:"sw-cms.detail.label.blockCategoryImage"},{value:"video",label:"sw-cms.detail.label.blockCategoryVideo"},{value:"text-image",label:"sw-cms.detail.label.blockCategoryTextImage"},{value:"commerce",label:"sw-cms.detail.label.blockCategoryCommerce"},{value:"sidebar",label:"sw-cms.detail.label.blockCategorySidebar"},{value:"form",label:"sw-cms.detail.label.blockCategoryForm"},{value:"html",label:"sw-cms.detail.label.blockCategoryHtml"}];Object.values(this.cmsService.getCmsBlockRegistry()).some(e=>e?.category==="app")&&e.push({value:"app",label:"sw-cms.detail.label.blockCategoryApp"});let n=Object.values(this.cmsService.getCmsBlockRegistry()).map(e=>e?.category);return[...new Set(n)].forEach(n=>{e.some(e=>e.value===n)||this.isDuplicateCategory(n)||e.push({value:n,label:`apps.sw-cms.detail.label.blockCategory.${n}`})}),e},mediaRepository(){return this.repositoryFactory.create("media")},addBlockTitle(){return this.isSystemDefaultLanguage?this.$tc("sw-cms.detail.sidebar.titleBlockOverview"):this.$tc("sw-cms.general.disabledAddingBlocksToolTip")},pageSections(){return this.page.sections},sidebarItemSettings(){return null!==this.selectedBlock?this.$tc("sw-cms.detail.sidebar.titleBlockSettings"):this.$tc("sw-cms.detail.sidebar.titleSectionSettings")},tooltipDisabled(){return{message:this.$tc("sw-cms.detail.tooltip.cannotSelectProductPageLayout"),disabled:"product_detail"!==this.page.type}},demoCriteria(){if("product"===this.demoEntity){let e=new c(1,25);return e.addAssociation("options.group"),e}return new c(1,25)},demoContext(){return"product"===this.demoEntity?{...Cicada.Context.api,inheritance:!0}:Cicada.Context.api},blockTypes(){return Object.keys(this.cmsService.getCmsBlockRegistry())},pageConfigErrors(){return[this.pageNameError].filter(e=>!!e)},hasPageConfigErrors(){return this.pageConfigErrors.length>0},showDefaultLayoutSelection(){return!!(this.acl.can("system_config:read")&&this.acl.can("system_config:update")&&this.acl.can("system_config:create")&&this.acl.can("system_config:delete"))&&("product_list"===this.page.type||"product_detail"===this.page.type)&&!this.isDefaultLayout},cmsBlocksBySelectedBlockCategory(){let e=Object.values(this.cmsBlocks).filter(e=>e&&!e.hidden);return"favorite"===this.currentBlockCategory?e.filter(e=>e&&this.cmsBlockFavorites.isFavorite(e.name)):e.filter(e=>e&&e.category===this.currentBlockCategory)},...a("page",["name"])},created(){this.createdComponent()},methods:{createdComponent(){this.blockTypes.some(e=>this.cmsBlockFavorites.isFavorite(e))&&(this.currentBlockCategory="favorite")},onPageTypeChange(e){this.$emit("page-type-change",e)},onDemoEntityChange(e){this.$emit("demo-entity-change",e)},onCloseBlockConfig(){let e=Cicada.Store.get("cmsPage");e.removeSelectedBlock(),e.removeSelectedSection()},isDisabledPageType(e){return"product_detail"===this.page.type||(this.page.type.includes("custom_entity_")?!e.name.includes("custom_entity_"):"product_detail"===e.name||e.name.includes("custom_entity_"))},openSectionSettings(e){Cicada.Store.get("cmsPage").setSection(this.page.sections[e]),this.$refs.itemConfigSidebar.openContent()},blockIsRemovable(e){let n=this.cmsService.getCmsBlockRegistry();return n[e.type]?.removable&&this.isSystemDefaultLanguage},blockIsUnique(e){return this.page.type===s.Z.PAGE_TYPES.PRODUCT_DETAIL&&e.slots.some(e=>s.Z.UNIQUE_SLOTS_KEBAB.includes(e.type))},blockIsDuplicable(e){return!this.blockIsUnique(e)},sectionIsDuplicable(e){return e.blocks.every(e=>this.blockIsDuplicable(e))},onBlockDragSort(e,n,t){if(!t)return;let s=e.sectionIndex,i=n.sectionIndex,o=this.page.sections[i];if(s<0||s>=this.page.sections.length||i<0||i>=this.page.sections.length)return;e.block.sectionPosition!==n.block.sectionPosition&&(e.block.isDragging=!0,e.block.sectionPosition=n.block.sectionPosition),null===this.currentDragSectionIndex&&(this.currentDragSectionIndex=s);let a=o.blocks.has(e.block.id);if(this.currentDragSectionIndex!==i&&!a){e.block.isDragging=!0;let n=s;this.currentDragSectionIndex!==s&&1===Math.abs(this.currentDragSectionIndex-i)&&(n=this.currentDragSectionIndex),this.currentDragSectionIndex-i<0&&(this.currentDragSectionIndex+=1),this.currentDragSectionIndex-i>0&&(this.currentDragSectionIndex-=1),e.block.sectionId=o.id,o.blocks.add(e.block);let t=this.page.sections[n];t.blocks.remove(e.block.id),t._origin.blocks.remove(e.block.id),this.refreshPosition(t.blocks),this.refreshPosition(o.blocks);return}e.block.position!==n.block.position&&(this.page.sections[i].blocks.moveItem(e.block.position,n.block.position),this.refreshPosition(o.blocks))},refreshPosition(e){return e.forEach((e,n)=>{e.position=n})},onSidebarNavigatorClick(){if(this.$refs.blockNavigator.isActive){if("true"===localStorage.getItem("cmsNavigatorDontRemind")){this.onSidebarNavigationConfirm();return}this.navigatorDontRemind=!1,this.showSidebarNavigatorModal=!0}},onSidebarNavigationConfirm(){this.navigatorDontRemind&&localStorage.setItem("cmsNavigatorDontRemind","true"),this.$emit("page-save"),this.showSidebarNavigatorModal=!1},onSidebarNavigationCancel(){let e=this.$refs.pageConfigSidebar;this.showSidebarNavigatorModal=!1,this.$nextTick(()=>{e.openContent()})},getDragData(e,n){return{delay:300,dragGroup:"cms-navigator",data:{block:e,sectionIndex:n},validDragCls:null,onDragEnter:this.onBlockDragSort.bind(this),onDrop:this.onBlockDragStop.bind(this)}},getDropData(e,n){return{dragGroup:"cms-navigator",data:{block:e,sectionIndex:n,dropIndex:-1,section:null,sectionPosition:""},onDrop:this.onBlockDropAbort.bind(this)}},onBlockDragStop(e){this.currentDragSectionIndex=null,e.block.isDragging=!1},onBlockDropAbort(e,n){let t=e.sectionIndex,s=n.sectionIndex;if(t<0||s<0)return;let i=this.page.sections[t].blocks.has(e.block.id),o=this.page.sections[s].blocks.has(e.block.id);i||o||this.page.sections[t].blocks.add(e.block)},onBlockStageDrop(e,n){if(!n||!e.block||n.dropIndex<0||!n.section)return;let t=this.cmsService.getCmsBlockRegistry(),s=n.section,i=t[e.block.name],o=this.blockRepository.create();o.type=e.block.name,o.position=n.dropIndex,o.sectionPosition=n.sectionPosition,o.sectionId=s.id,o.visibility={desktop:!0,tablet:!0,mobile:!0},Object.assign(o,l(i?.defaultConfig||{})),Object.keys(i?.slots).forEach(e=>{let n=i?.slots[e],t=this.slotRepository.create();if(t.blockId=o.id,t.slot=e,"object"==typeof n){t.type=n.type,n.default&&r.isPlainObject(n.default)&&Object.assign(t,l(n.default));let e=n.default?.data;[e?.media?.source,e?.sliderItems?.source].includes("default")&&(t.config={...t.config,...e})}else t.type=n;o.slots.add(t)}),this.page.sections[s.position].blocks.splice(n.dropIndex,0,o),this.$emit("block-stage-drop"),this.$emit("current-block-change",s.id,o)},moveSectionUp(e){this.page.sections.moveItem(e.position,e.position-1),this.$emit("page-save",!0)},moveSectionDown(e){this.page.sections.moveItem(e.position,e.position+1),this.$emit("page-save",!0)},onSectionDuplicate(e){this.$emit("section-duplicate",e)},onSectionDelete(e){Cicada.Store.get("cmsPage").removeSelectedSection(),this.page.sections.remove(e),this.$emit("page-save")},onBlockDelete(e,n){n||(n=this.page.sections.get(e.sectionId)),n?.blocks?.remove(e.id),this.selectedBlock&&this.selectedBlock.id===e.id&&Cicada.Store.get("cmsPage").removeSelectedBlock(),this.$emit("page-save",!0)},onBlockDuplicate(e,n){n||(n=this.page.sections.get(e.sectionId)),this.$emit("block-duplicate",e,n)},onRemoveSectionBackgroundMedia(e){e.backgroundMediaId=void 0,e.backgroundMedia=void 0,this.pageUpdate()},onSetSectionBackgroundMedia([e],n){n.backgroundMediaId=e.id,n.backgroundMedia=e,this.pageUpdate()},onToggleBlockFavorite(e){this.cmsBlockFavorites.update(!this.cmsBlockFavorites.isFavorite(e),e)},successfulUpload(e,n){n.backgroundMediaId=e.targetId,this.mediaRepository.get(e.targetId).then(e=>{n.backgroundMedia=e??void 0,this.pageUpdate()})},uploadTag(e){return`cms-section-media-config-${e.id}`},getMainContentBlocks(e){return e.filter(e=>this.blockTypeExists(e.type)&&"main"===e.sectionPosition)},getSidebarContentBlocks(e){return e.filter(e=>this.blockTypeExists(e.type)&&"sidebar"===e.sectionPosition)},pageUpdate(){this.$emit("page-update")},onOpenLayoutAssignment(){this.$emit("open-layout-assignment")},onOpenLayoutSetAsDefault(){this.$emit("open-layout-set-as-default")},blockTypeExists(e){return this.blockTypes.includes(e)},onVisibilityChange(e,n,t){e.visibility[n]=t},isDuplicateCategory(e){let n=Cicada.Template.getRenderedTemplate("sw-cms-sidebar");return n?.includes(`value="${e}"`)}}})},532040:function(e,n,t){var s=t(911567);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),t(745346).Z("642a7a34",s,!0,{})}}]);