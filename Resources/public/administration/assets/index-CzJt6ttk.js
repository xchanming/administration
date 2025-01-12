const o=`{% block sw_import_export_activity_result_modal %} <sw-modal class="sw-import-export-activity-result-modal" :title="$tc('sw-import-export.activity.result.modalTitle')" variant="large" @modal-close="$emit('result-close')" > {% block sw_import_export_activity_result_modal_info %} <div class="sw-import-export-activity-result-modal__info"> {% block sw_import_export_activity_result_modal_info_mainEntity %} <sw-card class="sw-import-export-activity-result-modal__main-activity" position-identifier="sw-import-export-activity-result-modal-main-activity" :title="$tc('sw-import-export.activity.result.mainEntity.title', 0, { entity: mainEntity })" > {% block sw_import_export_activity_result_modal_info_mainEntity_list %} <dl class="sw-import-export-activity-result-modal__main-activity-content"> {% block sw_import_export_activity_result_modal_info_mainEntity_list_insert %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__main-activity-insert"> <dt>{{ $tc('sw-import-export.activity.result.mainEntity.insert') }}</dt> <dd>{{ mainEntityResult.insert }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_mainEntity_list_update %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__main-activity-update"> <dt>{{ $tc('sw-import-export.activity.result.mainEntity.update') }}</dt> <dd>{{ mainEntityResult.update }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_mainEntity_list_insert_error %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__main-activity-insert-error"> <dt>{{ $tc('sw-import-export.activity.result.mainEntity.insertError') }}</dt> <dd>{{ mainEntityResult.insertError }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_mainEntity_list_update_error %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__main-activity-update-error"> <dt>{{ $tc('sw-import-export.activity.result.mainEntity.updateError') }}</dt> <dd>{{ mainEntityResult.updateError }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_mainEntity_list_insert_skip %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__main-activity-insert-skip"> <dt>{{ $tc('sw-import-export.activity.result.mainEntity.insertSkip') }}</dt> <dd>{{ mainEntityResult.insertSkip }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_mainEntity_list_update_skip %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__main-activity-update-skip"> <dt>{{ $tc('sw-import-export.activity.result.mainEntity.updateSkip') }}</dt> <dd>{{ mainEntityResult.updateSkip }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_mainEntity_list_other_error %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__main-activity-other-error"> <dt>{{ $tc('sw-import-export.activity.result.mainEntity.otherError') }}</dt> <dd>{{ mainEntityResult.otherError }}</dd> </div> {% endblock %} </dl> {% endblock %} </sw-card> {% endblock %} {% block sw_import_export_activity_result_modal_info_log %} <sw-card class="sw-import-export-activity-result-modal__log-info" position-identifier="sw-import-export-activity-result-modal-log-info" :title="$tc('sw-import-export.activity.result.logInfo.title')" > {% block sw_import_export_activity_result_modal_info_log_list %} <dl class="sw-import-export-activity-result-modal__log-info-content"> {% block sw_import_export_activity_result_modal_info_log_list_file_name %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__log-info-file-name"> <dt>{{ $tc('sw-import-export.activity.result.logInfo.labelFilename') }}</dt> <dd>{{ logEntity.file.originalName }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_log_list_profile %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__log-info-profile"> <dt>{{ $tc('sw-import-export.activity.result.logInfo.labelProfile') }}</dt> <dd>{{ logEntity.profile.label }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_log_list_imported %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__log-info-imported"> <dt>{{ $tc('sw-import-export.activity.result.logInfo.labelImported') }}</dt> <dd>{{ logEntity.records }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_log_list_file_size %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__log-info-file-size"> <dt>{{ $tc('sw-import-export.activity.result.logInfo.labelSize') }}</dt> <dd>{{ calculateFileSize(logEntity.file.size) }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_log_list_date %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__log-info-date"> <dt>{{ $tc('sw-import-export.activity.result.logInfo.labelDate') }}</dt> <dd>{{ dateFilter(logEntity.createdAt, { hour: '2-digit', minute: '2-digit' }) }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_log_user %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__log-info-user"> <dt>{{ $tc('sw-import-export.activity.result.logInfo.labelUser') }}</dt> <dd>{{ logEntity.username }}</dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_log_list_state %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__log-info-state"> <dt>{{ $tc('sw-import-export.activity.result.logInfo.labelState') }}</dt> <dd> <sw-color-badge v-if="logEntity.state === 'failed'" class="sw-import-export-activity-result-modal__color-badge" variant="error" rounded /> <sw-color-badge v-else-if="logEntity.state === 'succeeded'" class="sw-import-export-activity-result-modal__color-badge" variant="success" rounded /> <sw-color-badge v-else class="sw-import-export-activity-result-modal__color-badge" rounded /> {{ getStateLabel(logEntity.state) }} </dd> </div> {% endblock %} {% block sw_import_export_activity_result_modal_info_log_list_type %} <div class="sw-import-export-activity-result-modal__list-item sw-import-export-activity-result-modal__log-info-type"> <dt>{{ $tc('sw-import-export.activity.result.logInfo.labelType') }}</dt> <dd>{{ logTypeText }}</dd> </div> {% endblock %} </dl> {% endblock %} </sw-card> {% endblock %} </div> {% endblock %} {% block sw_import_export_activity_result_modal_download %} <div class="sw-import-export-activity-result-modal__download-section"> {% block sw_import_export_activity_result_modal_download_records_button %} <sw-button class="sw-import-export-activity-result-modal__download-button" size="small" @click="openDownload(logEntity.file.id)" > {{ $tc('sw-import-export.activity.result.labelDownloadFile') }} </sw-button> {% endblock %} {% block sw_import_export_activity_result_modal_download_invalid_records_button %} <sw-button v-if="logEntity.invalidRecordsLog" class="sw-import-export-activity-result-modal__download-failed" size="small" @click="openDownload(logEntity.invalidRecordsLog.file.id)" > {{ $tc('sw-import-export.activity.result.labelDownloadInvalidFile') }} </sw-button> {% endblock %} </div> {% endblock %} {% block sw_import_export_activity_result_modal_activity %} <div class="sw-import-export-activity-result-modal__acitvity"> {% block sw_import_export_activity_result_modal_activity_headline %} <h3 class="sw-import-export-activity-result-modal__acitvity-headline"> {{ $tc('sw-import-export.activity.result.activityHeadline') }} </h3> {% endblock %} {% block sw_import_export_activity_result_modal_activity_description %} <p class="sw-import-export-activity-result-modal__acitvity-description"> {{ $tc('sw-import-export.activity.result.activityDescription', 0, { entity: mainEntity }) }} </p> {% endblock %} {% block sw_import_export_activity_result_modal_activity_table %} <sw-grid table :items="result" :selectable="false" > {% block sw_import_export_activity_result_modal_activity_table_columns %} <template #columns="{ item }"> {% block sw_import_export_activity_result_modal_activity_table_columns_label %} <sw-grid-column flex="minmax(100px, 2fr)" :label="$tc('sw-import-export.activity.result.entityName')" :class="\`sw-import-export-activity-result-modal__column-\${item.entityName}-label\`" > {{ item.entityName }} </sw-grid-column> {% endblock %} {% block sw_import_export_activity_result_modal_activity_table_columns_changes %} <sw-grid-column flex="minmax(50px, 1fr)" :label="$tc('sw-import-export.activity.result.changes')" :class="\`sw-import-export-activity-result-modal__column-\${item.entityName}-changes\`" > {{ item.insert + item.update }} </sw-grid-column> {% endblock %} {% block sw_import_export_activity_result_modal_activity_table_columns_errors %} <sw-grid-column flex="minmax(50px, 1fr)" :label="$tc('sw-import-export.activity.result.errors')" :class="\`sw-import-export-activity-result-modal__column-\${item.entityName}-errors\`" > {{ item.insertError + item.updateError }} </sw-grid-column> {% endblock %} {% block sw_import_export_activity_result_modal_activity_table_columns_skipped %} <sw-grid-column flex="minmax(50px, 1fr)" :label="$tc('sw-import-export.activity.result.skipped')" :class="\`sw-import-export-activity-result-modal__column-\${item.entityName}-skipped\`" > {{ item.insertSkip + item.updateSkip }} </sw-grid-column> {% endblock %} </template> {% endblock %} </sw-grid> {% endblock %} </div> {% endblock %} </sw-modal> {% endblock %}`,{format:e}=Cicada.Utils,l={template:o,compatConfig:Cicada.compatConfig,inject:["importExport"],emits:["result-close"],props:{logEntity:{type:Object,required:!1,default(){return{}}}},computed:{mainEntity(){return this.logEntity.profile.sourceEntity},mainEntityResult(){return this.logEntity.result[this.mainEntity]},result(){return Object.keys(this.logEntity.result).reduce((t,i)=>(i!==this.mainEntity&&t.push({id:i,entityName:i,...this.logEntity.result[i]}),t),[])},logTypeText(){return this.$tc(`sw-import-export.activity.detail.${this.logEntity.activity}Label`)},dateFilter(){return Cicada.Filter.getByName("date")}},methods:{calculateFileSize(t){return e.fileSize(t)},async openDownload(t){return window.open(await this.importExport.getDownloadUrl(t),"_blank")},getStateLabel(t){const i=`sw-import-export.activity.status.${t}`;return this.$te(i)?this.$tc(i):t}}};export{l as default};
//# sourceMappingURL=index-CzJt6ttk.js.map
