const a=`{% block sw_discard_changes_modal %} <sw-modal variant="small" :title="$t('sw-discard-changes-modal.title')" @modal-close="keepEditing" > {% block sw_discard_changes_modal_text %} <p class="sw-discard-changes-modal-delete-text"> {{ $t('sw-discard-changes-modal.message') }} </p> {% endblock %} {% block sw_discard_changes_modal_footer %} <template #modal-footer> {% block sw_discard_changes_modal_discard_changes_modal_cancel %} <sw-button @click="keepEditing"> {{ $t('sw-discard-changes-modal.actions.keepEditing') }} </sw-button> <sw-button variant="danger" @click="discardChanges" > {{ $t('sw-discard-changes-modal.actions.discard') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %}`,{Component:d}=Cicada;d.register("sw-discard-changes-modal",{template:a,compatConfig:Cicada.compatConfig,emits:["keep-editing","discard-changes"],methods:{keepEditing(){this.$emit("keep-editing")},discardChanges(){this.$emit("discard-changes")}}});
//# sourceMappingURL=index-AaZRAEgj.js.map
