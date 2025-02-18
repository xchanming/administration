const n=`{% block sw_settings_units %} <sw-page class="sw-settings-units"> <template #search-bar> <sw-search-bar /> </template> <template #smart-bar-header> <h2> {{ $tc('sw-settings.index.title') }} <sw-icon name="regular-chevron-right-xs" small /> {{ $tc('sw-settings-units.general.mainMenuItemGeneral') }} </h2> </template> <template #smart-bar-actions> <sw-button v-tooltip="tooltipCreate" class="sw-settings-units__create-action" variant="primary" :disabled="isAddingUnitsDisabled || !acl.can('scale_unit.creator') || undefined" @click="createNewUnit" > {{ $tc('sw-settings-units.general.createNewUnit') }} </sw-button> </template> <template #language-switch> <sw-language-switch :disabled="!!newUnit || undefined" @on-change="onChangeLanguage" /> </template> <template #content> <sw-card-view> <sw-card position-identifier="sw-settings-units-content" :class="{ 'sw-settings-units-card-empty': isEmpty }" > <sw-empty-state v-if="!isLoading && isEmpty" :title="$tc('sw-settings-units.empty-state.title')" :subline="$tc('sw-settings-units.empty-state.subline')" icon="regular-balance-scale" /> <template #grid> <sw-data-grid v-show="isLoading || !isEmpty" ref="swDataGrid" class="sw-settings-units-grid" :is-loading="isLoading" :data-source="unitList" :columns="unitColumns()" :show-selection="false" :allow-inline-edit="acl.can('scale_unit.editor') || undefined" :skeleton-item-amount="placeholderAmount" @inline-edit-save="saveUnit" @inline-edit-cancel="cancelUnit" > <template #actions="{ item }"> <sw-context-menu-item class="sw-settings-units__edit-action" :disabled="!acl.can('scale_unit.editor') || undefined" @click="editUnit(item)" > {{ $tc('global.default.edit') }} </sw-context-menu-item> <sw-context-menu-divider /> <sw-context-menu-item class="sw-settings-units__delete-action" variant="danger" :disabled="!acl.can('scale_unit.deleter') || undefined" @click="deleteUnit(item)" > {{ $tc('global.default.delete') }} </sw-context-menu-item> </template> </sw-data-grid> </template> </sw-card> </sw-card-view> </template> </sw-page> {% endblock %}`,{Mixin:a}=Shopware,{Criteria:s}=Shopware.Data,r={template:n,inject:["repositoryFactory","acl"],mixins:[a.getByName("notification")],data(){return{isLoading:!0,placeholderAmount:7,unitsCriteria:null,units:[],newUnit:null}},metaInfo(){return{title:this.$createTitle()}},computed:{unitRepository(){return this.repositoryFactory.create("unit")},unitList(){return this.newUnit?[...this.units,this.newUnit]:this.units},isEmpty(){return this.unitList.length<=0},tooltipCreate(){return this.acl.can("scale_unit.creator")?{showOnDisabledElements:!0,message:this.$tc("sw-settings-units.general.disableAddNewUnitMessage"),disabled:!this.isAddingUnitsDisabled}:{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("scale_unit.creator"),showOnDisabledElements:!0}},isAddingUnitsDisabled(){return Shopware.Context.api.languageId!==Shopware.Context.api.systemLanguageId}},created(){this.createdComponent()},methods:{createdComponent(){this.unitsCriteria=this.createUnitsCriteria(),this.loadUnits()},createUnitsCriteria(){const t=new s(1,500);return t.addSorting(s.sort("name","ASC",!1)),t},loadUnits(){this.isLoading=!0,this.unitRepository.search(this.unitsCriteria).then(t=>{this.units=t,this.placeholderAmount=t.total,this.isLoading=!1})},createNewUnit(){this.$router.push({name:"sw.settings.units.create"})},saveUnit(t){this.isLoading=!0,this.unitRepository.save(t).then(()=>{this.isLoading=!1,this.loadUnits(),this.newUnit=null;const e=this.$tc("global.default.success"),i=this.$tc("sw-settings-units.notification.successMessage");this.createNotificationSuccess({title:e,message:i})}).catch(()=>{this.isLoading=!1;const e=this.$tc("global.default.error"),i=this.$tc("sw-settings-units.notification.errorMessage");this.createNotificationError({title:e,message:i})})},cancelUnit(){this.loadUnits(),this.newUnit=null},deleteUnit(t){this.isLoading=!0,this.unitRepository.delete(t.id).then(()=>{this.isLoading=!1,this.loadUnits()})},activateInlineEdit(t){this.$refs.swDataGrid.currentInlineEditId=t,this.$refs.swDataGrid.isInlineEditActive=!0},unitColumns(){return[{property:"name",label:"sw-settings-units.grid.columnName",routerLink:"sw.settings.units.detail"},{property:"shortCode",label:"sw-settings-units.grid.columnShortCode"}]},onChangeLanguage(){this.loadUnits()},editUnit(t){this.$router.push({name:"sw.settings.units.detail",params:{id:t.id}})}}};export{r as default};
