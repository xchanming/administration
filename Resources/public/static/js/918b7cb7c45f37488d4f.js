(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[74763],{303664:function(){},74763:function(o,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}}),s(814743);var l=Cicada.Component.wrapComponentConfig({template:'\n{% block sw_cms_toolbar %}\n<div class="sw-cms-toolbar">\n    \n    {% block sw_cms_toolbar_title %}\n    <div class="sw-cms-toolbar__title">\n        <slot name="title">\n            \n            {% block sw_cms_toolbar_slot_title %}{% endblock %}\n        </slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_toolbar_tools %}\n    <div class="sw-cms-toolbar__tools">\n        <slot name="tools">\n            \n            {% block sw_cms_toolbar_slot_tools %}{% endblock %}\n        </slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_toolbar_language_switch %}\n    <div class="sw-cms-toolbar__language-selection">\n        <slot name="language-switch">\n            \n            {% block sw_cms_toolbar_slot_language_switch %}{% endblock %}\n        </slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_toolbar_actions %}\n    <div class="sw-cms-toolbar__actions">\n\n        <sw-app-actions />\n\n        <slot name="actions">\n            \n            {% block sw_cms_toolbar_slot_actions %}{% endblock %}\n        </slot>\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig})},814743:function(o,n,s){var l=s(303664);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[o.id,l,""]]),l.locals&&(o.exports=l.locals),s(745346).Z("6f0133b6",l,!0,{})}}]);