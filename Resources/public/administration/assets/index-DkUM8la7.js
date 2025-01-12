const p=`{% block sw_import_export_activity %} <div class="sw-import-export-activity"> {% block sw_import_export_activity_listing %} <sw-entity-listing v-if="showGrid" :repository="logRepository" :items="logs" :columns="exportActivityColumns" sort-by="createdAt" sort-direction="DESC" :show-selection="false" :allow-column-edit="false" :full-page="true" > {% block sw_import_export_activity_listing_size %} <template #column-file.size="{ item }"> {{ calculateFileSize(item.file.size) }} </template> {% endblock %} {% block sw_import_export_activity_listing_records %} <template #column-records="{ item }"> {{ item.records }} </template> {% endblock %} <template #column-label-invalidRecords="{ column }"> {{ $te(column.label) ? $t(column.label) : column.label }} <sw-help-text class="sw-import-export-activity__invalid-records-help-text" :text="$t('sw-import-export.activity.invalidHelpText')" /> </template> {% block sw_import_export_activity_listing_invalid_records %} <template #column-invalidRecords="{ item }"> <template v-if="item.invalidRecordsLog"> {{ item.invalidRecordsLog.records }} </template> <template v-else> 0 </template> </template> {% endblock %} {% block sw_import_export_activity_listing_createdAt %} <template #column-createdAt="{ item }"> <sw-label v-if="item.activity === 'dryrun'" size="small" appearance="pill" > {{ $t('sw-import-export.activity.dryrun') }} </sw-label> <a href="#" @click.prevent="onShowLog(item)" > {{ dateFilter(item.createdAt, { hour: '2-digit', minute: '2-digit' }) }} </a> </template> {% endblock %} {% block sw_import_export_activity_listing_state %} <template #column-state="{ item }"> <sw-color-badge v-if="item.state === 'failed'" variant="error" rounded /> <sw-color-badge v-else-if="item.state === 'succeeded'" variant="success" rounded /> <sw-color-badge v-else rounded /> <span :class="getStateClass(item.state)">{{ getStateLabel(item.state) }}</span> </template> {% endblock %} {% block sw_import_export_activity_listing_actions %} <template #actions="{ item }"> {% block sw_import_export_activity_listing_actions_show_results %} <sw-context-menu-item v-if="item.result && Object.keys(item.result).length" class="sw-import-export-activity__results-action" @click="onShowResult(item)" > {{ $t('sw-import-export.activity.contextMenu.showResults') }} </sw-context-menu-item> {% endblock %} {% block sw_import_export_activity_listing_actions_show_log_info %} <sw-context-menu-item v-if="type === 'export'" class="sw-import-export-activity__log-info-action" @click="onShowLog(item)" > {{ $t('sw-import-export.activity.contextMenu.showLogInfo') }} </sw-context-menu-item> {% endblock %} {% block sw_import_export_activity_listing_actions_download_file %} <a class="sw-import-export-activity__download-action" role="button" tabindex="0" @click="openProcessFileDownload(item)" @keydown.enter="openProcessFileDownload(item)" > <sw-context-menu-item :disabled="type === 'export' && item.state !== 'succeeded'"> {{ downloadFileText }} </sw-context-menu-item> </a> {% endblock %} {% block sw_import_export_activity_listing_actions_open_profile %} <sw-context-menu-item @click="onOpenProfile(item.profileId)"> {{ $t('sw-import-export.activity.contextMenu.showProfile') }} </sw-context-menu-item> {% endblock %} {% block sw_import_export_activity_listing_actions_abort_process %} <sw-context-menu-item v-if="item.state === 'progress'" class="sw-import-export-activity__abort-process-action" variant="danger" @click="onAbortProcess(item)" > {{ $t('sw-import-export.activity.contextMenu.abortProcess') }} </sw-context-menu-item> {% endblock %} {% block sw_import_export_activity_listing_actions_download_invalid %} <template v-if="item.invalidRecordsLog"> <a class="sw-import-export-activity__download-action" role="button" tabindex="0" @click="openProcessFileDownload(item.invalidRecordsLog)" @keydown.enter="openProcessFileDownload(item.invalidRecordsLog)" > <sw-context-menu-item> {{ $t('sw-import-export.activity.contextMenu.downloadInvalidFile') }} </sw-context-menu-item> </a> </template> {% endblock %} </template> {% endblock %} </sw-entity-listing> {% endblock %} {% block sw_import_export_activity_spinner %} <sw-loader v-else-if="showSpinner" /> {% endblock %} {% block sw_import_export_activity_empty_state %} <sw-empty-state v-if="showEmptyState" :title="emptyStateTitle" :subline="emptyStateSubLine" :absolute="false" icon="regular-database" /> {% endblock %} {% block sw_import_export_activity_log_info_modal %} <sw-import-export-activity-log-info-modal v-if="showDetailModal" :log-entity="selectedLog" @log-close="closeSelectedLog" /> {% endblock %} {% block sw_import_export_activity_result_modal %} <sw-import-export-activity-result-modal v-if="showResultModal" :log-entity="selectedLog" :result="selectedResult" @result-close="closeSelectedResult" /> {% endblock %} {% block sw_import_export_activity_modal %} <sw-import-export-edit-profile-modal v-if="selectedProfile" :profile="selectedProfile" @profile-save="saveSelectedProfile" @profile-close="closeSelectedProfile" /> {% endblock %} </div> {% endblock %}`,{Mixin:d}=Cicada,{Criteria:i,EntityCollection:s}=Cicada.Data,{format:m}=Cicada.Utils,u={template:p,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","importExport","feature"],mixins:[d.getByName("notification")],props:{type:{type:String,required:!1,default:"import",validValues:["import","export"],validator(t){return["import","export"].includes(t)}}},data(){return{logs:new s("/import-export-log","import_export_log",null),isLoading:!1,selectedProfile:null,selectedLog:null,selectedResult:null,activitiesReloadIntervall:1e4,activitiesReloadTimer:null,showDetailModal:!1,showResultModal:!1,stateText:{import:{succeeded:"sw-import-export.importer.messageImportSuccess",failed:"sw-import-export.importer.messageImportError"},dryrun:{succeeded:"sw-import-export.importer.messageImportSuccess",failed:"sw-import-export.importer.messageImportError"},export:{succeeded:"sw-import-export.exporter.messageExportSuccess",failed:"sw-import-export.exporter.messageExportError"}}}},computed:{logRepository(){return this.repositoryFactory.create("import_export_log")},profileRepository(){return this.repositoryFactory.create("import_export_profile")},activityCriteria(){const t=new Cicada.Data.Criteria;return this.type==="import"?t.addFilter(i.multi("OR",[i.equals("activity","import"),i.equals("activity","dryrun")])):this.type==="export"&&t.addFilter(i.equals("activity","export")),t.addSorting(i.sort("createdAt","DESC")),t.setPage(1),t.addAssociation("user"),t.addAssociation("file"),t.addAssociation("profile"),t.getAssociation("invalidRecordsLog").addAssociation("file"),t},exportActivityColumns(){return[{property:"createdAt",dataIndex:"createdAt",label:"sw-import-export.activity.columns.date",allowResize:!0,primary:!0},{property:"profileName",dataIndex:"profile.label",label:"sw-import-export.activity.columns.profile",allowResize:!0,primary:!1},{property:"state",dataIndex:"state",label:"sw-import-export.activity.columns.state",allowResize:!0,primary:!1},{property:"records",dataIndex:"records",label:"sw-import-export.activity.columns.records",allowResize:!0,primary:!1},...this.type==="import"?[{property:"invalidRecords",dataIndex:"records",label:"sw-import-export.activity.columns.invalidRecords",allowResize:!0,primary:!1}]:[],{property:"file.size",dataIndex:"file.size",label:"sw-import-export.activity.columns.size",allowResize:!0,primary:!1},{property:"user.lastName",dataIndex:"user.lastName",label:"sw-import-export.activity.columns.user",allowResize:!0,primary:!1}]},hasActivitiesInProgress(){return this.logs.filter(t=>t.state==="progress").length>0},downloadFileText(){return this.type==="export"?this.$t("sw-import-export.activity.contextMenu.downloadExportFile"):this.$t("sw-import-export.activity.contextMenu.downloadImportFile")},showGrid(){return!this.isLoading&&!!this.logs.length>0},showEmptyState(){return!this.isLoading&&!!this.logs.length<=0},showSpinner(){return this.isLoading},emptyStateSubLine(){return this.type==="export"?this.$t("sw-import-export.activity.emptyState.subLineExport"):this.$t("sw-import-export.activity.emptyState.subLineImport")},emptyStateTitle(){return this.type==="export"?this.$t("sw-import-export.activity.emptyState.titleExport"):this.$t("sw-import-export.activity.emptyState.titleImport")},dateFilter(){return Cicada.Filter.getByName("date")}},watch:{hasActivitiesInProgress(t){t&&!this.activitiesReloadTimer?this.activitiesReloadTimer=window.setInterval(this.updateActivitiesInProgress.bind(this),this.activitiesReloadIntervall):this.activitiesReloadTimer&&(window.clearInterval(this.activitiesReloadTimer),this.activitiesReloadTimer=null)}},created(){this.createdComponent()},unmounted(){this.activitiesReloadTimer&&window.clearInterval(this.activitiesReloadTimer)},methods:{createdComponent(){return this.fetchActivities()},addActivity(t){this.logs.addAt(t,0)},async fetchActivities(){this.isLoading=!0,this.logRepository.search(this.activityCriteria).then(t=>t instanceof s?(this.updateActivitiesFromLogs(t),this.logs=t,Promise.resolve()):Promise.reject(new Error(this.$t("global.notification.notificationLoadingDataErrorMessage")))).catch(t=>{this.createNotificationError({message:(t==null?void 0:t.message)??this.$t("global.notification.notificationLoadingDataErrorMessage")})}).finally(()=>{this.isLoading=!1})},async updateActivitiesInProgress(){const t=i.fromCriteria(this.activityCriteria);t.setIds(this.logs.filter(e=>e.state==="progress").getIds()),t.addAssociation("file"),this.logRepository.search(t).then(e=>e instanceof s?(this.updateActivitiesFromLogs(e),Promise.resolve()):Promise.reject(new Error(this.$t("global.notification.notificationLoadingDataErrorMessage")))).catch(e=>{this.createNotificationError({message:(e==null?void 0:e.message)??this.$t("global.notification.notificationLoadingDataErrorMessage")})})},updateActivitiesFromLogs(t){t.forEach(e=>{var a,l;const o=this.logs.get(e.id);if(!o)return;const n=o.state;if(Object.keys(e).forEach(c=>{o[c]=e[c]}),n===e.state)return;const r={message:this.$tc(((l=(a=this.stateText)==null?void 0:a[e.activity])==null?void 0:l[e.state])??"",e.state==="failed"&&e.invalidRecordsLog?2:1,{profile:e.profileName})};if(e.state==="succeeded"){this.createNotificationSuccess(r),e.activity==="import"&&e.records===0&&this.createNotificationWarning({message:this.$t("sw-import-export.importer.messageImportWarning")});return}this.createNotificationError(r)})},async onOpenProfile(t){this.profileRepository.get(t).then(e=>{this.selectedProfile=e}).catch(e=>{this.createNotificationError({message:(e==null?void 0:e.message)??this.$t("global.notification.notificationLoadingDataErrorMessage")})})},onAbortProcess(t){this.importExport.cancel(t.id).then(()=>{this.fetchActivities()})},closeSelectedProfile(){this.selectedProfile=null},onShowLog(t){this.selectedLog=t,this.showDetailModal=!0},onShowResult(t){this.selectedLog=t,this.showResultModal=!0},closeSelectedLog(){this.selectedLog=null,this.showDetailModal=!1},closeSelectedResult(){this.selectedResult=null,this.showResultModal=!1},async openProcessFileDownload(t){return this.type==="export"&&t.state!=="succeeded"?null:window.open(await this.importExport.getDownloadUrl(t.fileId),"_blank")},saveSelectedProfile(){this.isLoading=!0,this.profileRepository.save(this.selectedProfile).then(()=>{this.selectedProfile=null,this.createNotificationSuccess({message:this.$t("sw-import-export.profile.messageSaveSuccess")})}).catch(()=>{this.createNotificationError({message:this.$t("sw-import-export.profile.messageSaveError")})}).finally(()=>{this.isLoading=!1})},calculateFileSize(t){return m.fileSize(t)},getStateLabel(t){const e=`sw-import-export.activity.status.${t}`;return this.$te(e)?this.$t(e):t},getStateClass(t){return{"sw-import-export-activity__progress-indicator":t==="progress"}}}};export{u as default};
//# sourceMappingURL=index-DkUM8la7.js.map
