"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[74624],{174624:function(n,t,e){e.r(t),e.d(t,{default:function(){return o}});var o={template:'\n{% block sw_settings_logging_entry_info %}\n<sw-modal\n    :title="$tc(\'sw-settings-logging.entryInfo.title\')"\n    @modal-close="onClose"\n>\n\n    \n    {% block sw_settings_logging_entry_info_tabs %}\n    <sw-tabs position-identifier="sw-settings-logging-entry-info">\n\n        \n        {% block sw_settings_logging_entry_info_tab_items %}\n        <sw-tabs-item\n            :active="activeTab === \'raw\'"\n            @click="activeTab = \'raw\'"\n        >\n            {{ $tc(\'sw-settings-logging.entryInfo.tabRaw\') }}\n        </sw-tabs-item>\n        {% endblock %}\n\n        <template #content>\n            \n            {% block sw_settings_logging_entry_info_content %}\n            \n            {% block sw_settings_logging_entry_info_raw_content %}\n            <sw-textarea-field\n                v-if="activeTab === \'raw\'"\n                :value="displayString"\n            />\n            {% endblock %}\n            {% endblock %}\n        </template>\n\n    </sw-tabs>\n    {% endblock %}\n\n    \n    {% block sw_settings_logging_entry_info_footer %}\n    <template #modal-footer>\n        \n        {% block sw_settings_logging_entry_info_close_button %}\n        <sw-button\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'sw-settings-logging.entryInfo.actionClose\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n</sw-modal>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,emits:["close"],props:{logEntry:{type:Object,required:!0}},data(){return{activeTab:"raw"}},computed:{displayString(){return JSON.stringify(this.logEntry.context,null,2)}},methods:{onClose(){this.$emit("close")}}}}}]);