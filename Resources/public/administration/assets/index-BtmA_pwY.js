const t='{% block sw_bulk_edit_change_type_field_renderer %} <div class="sw-bulk-edit-change-field-renderer"> <template v-for="(formField, index) in formFields" :key="`formField-${index}`" > {% block sw_bulk_edit_change_type_field_renderer_container %} <sw-container v-if="formField && bulkEditData[formField.name]" columns="240px 1fr" gap="32px" :class="`sw-bulk-edit-change-field__container sw-bulk-edit-change-field-${formField.name}`" > {% block sw_bulk_edit_change_type_field_renderer_change_field %} <div class="sw-bulk-edit-change-field-renderer__change-field"> {% block sw_bulk_edit_change_type_field_renderer_change_field_title %} <sw-checkbox-field v-model:value="bulkEditData[formField.name].isChanged" class="sw-bulk-edit-change-field__change" :label="!formField.config.changeLabel ? $tc(\'sw-bulk-edit.general.defaultChangeLabel\') : formField.config.changeLabel" :help-text="formField.labelHelpText" :disabled="!!bulkEditData[formField.name].disabled" @update:value="onChangeToggle($event, formField.name)" /> {% endblock %} {% block sw_bulk_edit_change_type_field_renderer_change_field_subtitle %} <span v-if="formField.config.changeSubLabel"> {{ formField.config.changeSubLabel }} </span> {% endblock %} </div> {% endblock %} {% block sw_bulk_edit_change_type_field_renderer_change_form_value_field %} <sw-bulk-edit-change-type v-if="showSelectBoxType(formField)" v-model:value="bulkEditData[formField.name].type" :allow-overwrite="getConfigValue(formField, \'allowOverwrite\')" :allow-clear="getConfigValue(formField, \'allowClear\')" :allow-add="getConfigValue(formField, \'allowAdd\')" :allow-remove="getConfigValue(formField, \'allowRemove\')" > <template #value-field="{ isDisplayingValue }"> <slot name="valueFieldWithBoxType" v-bind="{formField, entity, index, isDisplayingValue }" > <template v-if="formField.canInherit && isDisplayingValue"> <div class="sw-bulk-edit-change-field-renderer__inheritance-group-field is--select-box-type"> <sw-inheritance-switch :is-inherited="bulkEditData[formField.name].isInherited" @inheritance-restore="onInheritanceRestore(formField)" @inheritance-remove="onInheritanceRemove(formField)" /> <sw-bulk-edit-form-field-renderer v-bind="formField" :key="`formField-${index}`" v-model:value="entity[formField.name]" @update:value="onChangeValue($event, formField.name)" /> </div> </template> <template v-else> <sw-bulk-edit-form-field-renderer v-if="isDisplayingValue" v-bind="formField" :key="`formField-${index}`" v-model:value="entity[formField.name]" @update:value="onChangeValue($event, formField.name)" /> </template> </slot> </template> </sw-bulk-edit-change-type> {% endblock %} {% block sw_bulk_edit_change_type_field_renderer_change_form_value_field_without_change_type %} <template v-if="!showSelectBoxType(formField)"> <slot name="valueField" v-bind="{formField, entity, index, isDisplayingValue }" > <template v-if="formField.canInherit"> <div class="sw-bulk-edit-change-field-renderer__inheritance-group-field"> <sw-inheritance-switch :is-inherited="bulkEditData[formField.name].isInherited" @inheritance-restore="onInheritanceRestore(formField)" @inheritance-remove="onInheritanceRemove(formField)" /> <sw-bulk-edit-form-field-renderer v-bind="formField" :key="`formField-${index}`" v-model:value="entity[formField.name]" @update:value="onChangeValue($event, formField.name)" /> </div> </template> <template v-else> <sw-bulk-edit-form-field-renderer v-bind="formField" :key="`formField-${index}`" v-model:value="entity[formField.name]" @update:value="onChangeValue($event, formField.name)" /> </template> </slot> </template> {% endblock %} </sw-container> {% endblock %} </template> </div> {% endblock %}',n={template:t,inject:["feature"],emits:["change-value","inheritance-restore","inheritance-remove"],props:{bulkEditData:{type:Object,required:!0},formFields:{type:Array,required:!0},entity:{type:Object,required:!0},disabled:{type:Boolean,default:!1}},data(){return{isDisplayingValue:!0}},methods:{hasFormFieldConfig(e){return!!e.config},getConfigValue(e,i){return!this.hasFormFieldConfig(e)||!e.config[i]?null:e.config[i]},showSelectBoxType(e){return this.getConfigValue(e,"allowOverwrite")===!0||this.getConfigValue(e,"allowClear")===!0||this.getConfigValue(e,"allowAdd")===!0||this.getConfigValue(e,"allowRemove")===!0},onChangeValue(e,i,l=!0){l&&(this.entity[i]=e),this.bulkEditData[i].isInherited||(this.bulkEditData[i].value=e),this.$emit("change-value",i,e)},onChangeToggle(e,i){this.onChangeValue(e,i,!1)},onInheritanceRestore(e){this.$emit("inheritance-restore",e)},onInheritanceRemove(e){this.$emit("inheritance-remove",e)}}};export{n as default};
