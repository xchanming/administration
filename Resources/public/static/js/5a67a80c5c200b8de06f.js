(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[2611],{273831:function(){},902611:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}}),t(907951);var s=Cicada.Component.wrapComponentConfig({template:'{% block sw_help_sidebar %}\n<transition\n    v-if="showHelpSidebar"\n    v-bind="$attrs"\n    appear\n    name="sw-help-sidebar__fade"\n>\n    <div\n        class="sw-help-sidebar"\n        role="button"\n        tabindex="0"\n        @mousedown="mouseDown"\n        @keyup.esc="escKey"\n    >\n        <div\n            ref="helpSidebarContainer"\n            class="sw-help-sidebar__container"\n            tabindex="-1"\n        >\n            <div class="sw-help-sidebar__header">\n                <h3 class="sw-help-sidebar__headline">\n                    {{ $tc(\'help-center.sidebar.title\') }}\n                </h3>\n\n                <button\n                    class="sw-help-sidebar__button-close"\n                    :aria-label="$tc(\'help-center.sidebar.ariaLabelButtonClose\')"\n                    @click="closeHelpSidebar"\n                >\n                    <sw-icon\n                        name="regular-times-xs"\n                        size="12px"\n                    />\n                </button>\n            </div>\n\n            <div class="sw-help-sidebar__body">\n                <div class="sw-help-sidebar__navigation">\n                    <sw-extension-component-section\n                        position-identifier="sw-help-sidebar__navigation"\n                    />\n                </div>\n\n                <div class="sw-help-sidebar__support">\n                    <h4 class="sw-help-sidebar__support-title">\n                        {{ $tc(\'help-center.sidebar.support.title\') }}\n                    </h4>\n\n                    {% block sw_help_sidebar_support_content %}\n                    <ul class="sw-help-sidebar__support-content">\n                        {% block sw_help_sidebar_support_documentation %}\n                        <li class="sw-help-sidebar__support-item">\n                            <sw-external-link\n                                class="sw-help-sidebar__support-item-link"\n                                :href="$tc(\'help-center.sidebar.support.documentation.href\')"\n                            >\n                                <sw-icon\n                                    class="sw-help-sidebar__support-item-icon"\n                                    name="solid-content"\n                                    size="16px"\n                                />\n                                {{ $tc(\'help-center.sidebar.support.documentation.text\') }}\n                            </sw-external-link>\n                        </li>\n                        {% endblock %}\n\n                        {% block sw_help_sidebar_support_create_support_request %}\n                        <li class="sw-help-sidebar__support-item">\n                            <sw-external-link\n                                class="sw-help-sidebar__support-item-link"\n                                :href="$tc(\'help-center.sidebar.support.createSupportRequest.href\')"\n                            >\n                                <sw-icon\n                                    class="sw-help-sidebar__support-item-icon"\n                                    name="solid-comments"\n                                    size="16px"\n                                />\n                                {{ $tc(\'help-center.sidebar.support.createSupportRequest.text\') }}\n                            </sw-external-link>\n                        </li>\n                        {% endblock %}\n\n                        {% block sw_help_sidebar_support_placeholder %}\n                        {% endblock %}\n                    </ul>\n                    {% endblock %}\n                </div>\n            </div>\n\n            <div class="sw-help-sidebar__footer">\n                <div class="sw-help-sidebar__shortcut">\n                    <sw-button\n                        v-tooltip="{\n                            message: $tc(\'sw-shortcut-overview.iconTooltip\', 0, { key: \'Shift + ?\' }),\n                            appearance: \'light\',\n                            position: \'top\',\n                            zIndex: 1600,\n                        }"\n                        class="sw-help-sidebar__shortcut-button"\n                        :aria-label="$tc(\'help-center.sidebar.ariaLabelButtonShortcut\')"\n                        @click="openShortcutModal"\n                    >\n                        <sw-icon\n                            name="solid-keyboard"\n                            color="#1f262e"\n                            size="16px"\n                        />\n                        {{ $tc(\'sw-shortcut-overview.title\') }}\n                    </sw-button>\n                </div>\n            </div>\n        </div>\n    </div>\n</transition>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["shortcutService"],props:{selector:{type:String,required:!1,default:"body"}},computed:{showHelpSidebar(){return Cicada.State.get("adminHelpCenter").showHelpSidebar}},watch:{$route(){this.closeHelpSidebar()}},created(){this.createdComponent()},mounted(){this.mountedComponent()},beforeUnmount(){this.beforeUnmountComponent()},unmounted(){this.unmountedComponent()},methods:{createdComponent(){this.shortcutService.startEventListener()},mountedComponent(){let e=document.querySelector(this.selector);e&&(e.appendChild(this.$el),this.setFocusToSidebar())},beforeUnmountComponent(){let e=this.$el;window.setTimeout(()=>{e.remove()},800)},unmountedComponent(){this.shortcutService.stopEventListener()},setFocusToSidebar(){let e=this.$refs.helpSidebarContainer;e&&e.focus()},mouseDown(e){let n=this.$refs.helpSidebarContainer;!n||n.contains(e.target)||this.closeHelpSidebar()},escKey(e){let n=e.target;n&&n.classList.contains("sw-help-sidebar__container")&&n===document.activeElement&&"Escape"===e.key&&this.closeHelpSidebar()},closeHelpSidebar(){Cicada.State.commit("adminHelpCenter/setShowHelpSidebar",!1)},openShortcutModal(){Cicada.State.commit("adminHelpCenter/setShowShortcutModal",!0)}}})},907951:function(e,n,t){var s=t(273831);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),t(745346).Z("a16371fe",s,!0,{})}}]);