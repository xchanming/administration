(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[11748],{755829:function(){},211748:function(t,r,s){"use strict";s.r(r),s.d(r,{default:function(){return e}}),s(986026);var e={template:'\n{% block sw_import_export_progress %}\n<div class="sw-import-export-progress">\n    <div class="sw-import-export-progress__progress">\n        \n        {% block sw_import_export_progress_start_process %}\n        <sw-button\n            :disabled="disableButton || undefined"\n            class="sw-import-export-progress__start-process-action"\n            size="small"\n            variant="primary"\n            @click="$emit(\'process-start\')"\n        >\n            <template v-if="activityType === \'import\'">\n                {{ $tc(\'sw-import-export.progress.startImportLabel\') }}\n            </template>\n            <template v-else>\n                {{ $tc(\'sw-import-export.progress.startExportLabel\') }}\n            </template>\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_import_export_progress_start_process_dryrun %}\n        <sw-button\n            v-if="activityType === \'import\'"\n            :disabled="disableButton || undefined"\n            class="sw-import-export-progress__start-process-dryrun-action"\n            size="small"\n            @click="$emit(\'process-start-dryrun\')"\n        >\n            {{ $tc(\'sw-import-export.progress.startImportDryrunLabel\') }}\n        </sw-button>\n        {% endblock %}\n    </div>\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["feature"],emits:["process-start","process-start-dryrun"],props:{activityType:{type:String,required:!1,default:"import",validValues:["import","export"],validator(t){return["import","export"].includes(t)}},disableButton:{type:Boolean,required:!1,default:!0}}}},986026:function(t,r,s){var e=s(755829);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals),s(745346).Z("c222c2f6",e,!0,{})}}]);