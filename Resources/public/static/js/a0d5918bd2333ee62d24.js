"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[65473],{765473:function(n,a,e){e.r(a),e.d(a,{default:function(){return l}});var l={template:'\n{% block sw_flow_leave_page_modal %}\n<sw-modal\n    :title="$tc(\'sw-flow.leavePageModal.headline\')"\n    class="sw-flow-leave-page-modal"\n    variant="small"\n    @modal-close="onCancel"\n>\n    \n    {% block sw_flow_leave_page_modal_content %}\n    {{ $tc(\'sw-flow.leavePageModal.description\') }}\n    {% endblock %}\n\n    <template #modal-footer>\n        \n        {% block sw_flow_leave_page_modal_actions %}\n        \n        {% block sw_flow_leave_page_modal_action_cancel %}\n        <sw-button\n            size="small"\n            class="sw-flow-leave-page-modal__stay-on-page"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_leave_page_modal_action_confirm %}\n        <sw-button\n            variant="primary"\n            size="small"\n            class="sw-flow-leave-page-modal__leave-page"\n            @click="onConfirm"\n        >\n            {{ $tc(\'sw-flow.leavePageModal.confirmButton\') }}\n        </sw-button>\n        {% endblock %}\n        {% endblock %}\n    </template>\n</sw-modal>\n{% endblock %}\n',emits:["page-leave-confirm","page-leave-cancel"],compatConfig:Cicada.compatConfig,methods:{onConfirm(){this.$emit("page-leave-confirm")},onCancel(){this.$emit("page-leave-cancel")}}}}}]);