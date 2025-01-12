const d=`{% block sw_promotion_v2_individual_codes_behavior %} <div class="sw-promotion-v2-individual-codes-behavior"> {% block sw_promotion_v2_individual_codes_behavior_card %} <sw-card v-if="promotion.individualCodes && promotion.individualCodes.length > 0" class="sw-promotion-v2-individual-codes-behavior__card" position-identifier="sw-promotion-individual-codes-behavior" > {% block sw_promotion_v2_individual_codes_behavior_toolbar %} <template #toolbar> {% block sw_promotion_v2_individual_codes_behavior_toolbar_filter %} <sw-card-filter :placeholder="$tc('sw-promotion-v2.detail.base.codes.individual.searchPlaceholder')" @sw-card-filter-term-change="onSearchTermChange" > <template #filter> {% block sw_promotion_v2_individual_codes_behavior_toolbar_filter_add_codes %} <sw-button class="sw-promotion-v2-individual-codes-behavior__add-codes-action" variant="ghost" size="small" :disabled="!acl.can('promotion.editor')" @click="onOpenAddCodesModal" > {{ $tc('sw-promotion-v2.detail.base.codes.individual.addButton') }} </sw-button> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_toolbar_filter_generate_codes %} <sw-button class="sw-promotion-v2-individual-codes-behavior__generate-codes-action" variant="ghost" size="small" :disabled="!acl.can('promotion.editor')" @click="onOpenGenerateCodesModal" > {{ $tc('sw-promotion-v2.detail.base.codes.individual.generateButton') }} </sw-button> {% endblock %} </template> </sw-card-filter> {% endblock %} </template> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_grid %} <template #grid> <sw-one-to-many-grid ref="individualCodesGrid" class="sw-promotion-v2-individual-codes-behavior__grid" :is-loading="isGridLoading" :collection="promotion.individualCodes" :columns="codeColumns" :local-mode="false" sort-by="code" sort-direction="ASC" @selection-change="onSelectionChange" @items-delete-finish="$emit('delete-finish')" > {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed %} <template #column-payload="{ item }"> {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed_icon %} {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed_icon_true %} <sw-icon v-if="!!item.payload" class="sw-promotion-v2-individual-codes-behavior__redeemed-state is--active" name="regular-checkmark-xs" small /> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed_icon_false %} <sw-icon v-else class="sw-promotion-v2-individual-codes-behavior__redeemed-state is--inactive" name="regular-times-s" small /> {% endblock %} {% endblock %} </template> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed_customer %} <template #column-payload.customerName="{ item }"> {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed_customer_link %} <a v-if="item.payload && item.payload.customerId" class="sw-promotion-v2-individual-codes-behavior__redeemed-customer-name" role="link" tabindex="0" @click="routeToCustomer(item.payload)" @keydown.enter="routeToCustomer(item.payload)" > {{ item.payload.customerName }} </a> {% endblock %} </template> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_grid_created_at %} <template #column-createdAt="{ item }"> {{ dateFilter(item.createdAt, { hour: '2-digit', minute: '2-digit' }) }} </template> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_grid_actions %} <template #actions="{ item }"> {% block sw_promotion_v2_individual_codes_behavior_grid_actions_route_to_customer %} <sw-context-menu-item class="sw-promotion-v2-individual-codes-behavior__customer-route-action" :disabled="!(item.payload && item.payload.customerId)" @click="routeToCustomer(item.payload)" > {{ $tc('sw-promotion-v2.detail.base.codes.individual.openCustomer') }} </sw-context-menu-item> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_grid_actions_delete %} <sw-context-menu-item class="sw-promotion-v2-individual-codes-behavior__code-delete-action" variant="danger" :disabled="!acl.can('promotion.editor')" @click="onShowCodeDeleteModal(item.id)" > {{ $tc('sw-property.list.contextMenuDelete') }} </sw-context-menu-item> {% endblock %} </template> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_grid_actions_bulk %} <template #bulk> {% block sw_promotion_v2_individual_codes_behavior_grid_actions_bulk_delete %} <span class="sw-promotion-v2-individual-codes-behavior__code-bulk-delete-action link link-danger" role="button" tabindex="0" @click="onShowCodeBulkDeleteModal" @keydown.enter="onShowCodeBulkDeleteModal" > {{ $tc('global.default.delete') }} </span> {% endblock %} </template> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_grid_action_modals %} <template #action-modals="{ item }"> {% block sw_promotion_v2_individual_codes_behavior_grid_action_delete_modal %} <sw-confirm-modal v-if="codeDeleteModal === item.id" class="sw-promotion-v2-individual-codes-behavior__confirm-delete-modal" type="delete" :text="$tc('sw-promotion-v2.detail.base.codes.individual.textDeleteConfirm', 1, { code: item.code })" @confirm="onConfirmCodeDelete(item.id)" @close="onCloseDeleteModal" @cancel="onCloseDeleteModal" /> {% endblock %} </template> {% endblock %} </sw-one-to-many-grid> </template> {% endblock %} </sw-card> {% endblock %} <sw-card v-else class="sw-promotion-v2-individual-codes-behavior__card" position-identifier="sw-promotion-individual-codes-behavior-empty-state" > {% block sw_promotion_v2_individual_codes_behavior_empty_state %} <sw-empty-state class="sw-promotion-v2-individual-codes-behavior__empty-state" :title="$tc('sw-promotion-v2.detail.base.codes.individual.emptyStateTitle')" :absolute="false" > {% block sw_promotion_v2_individual_codes_behavior_empty_state_icon %} <template #icon> <img class="sw-promotion-v2-individual-codes-behavior__empty-state-icon" :src="assetFilter('/administration/static/img/empty-states/promotion-empty-state.svg')" :alt="$tc('sw-promotion-v2.detail.base.codes.individual.emptyStateTitle')" > </template> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_empty_state_actions %} <template #actions> <sw-button class="sw-promotion-v2-individual-codes-behavior__empty-state-generate-action" variant="ghost" :disabled="!acl.can('promotion.editor')" @click="onOpenGenerateCodesModal" > {{ $tc('sw-promotion-v2.detail.base.codes.individual.generateButton') }} </sw-button> </template> {% endblock %} </sw-empty-state> {% endblock %} </sw-card> {% block sw_promotion_v2_individual_codes_behavior_delete_bulk_modal %} <sw-confirm-modal v-if="codeBulkDeleteModal" class="sw-promotion-v2-individual-codes-behavior__confirm-delete-bulk-modal" type="delete" :text="deleteConfirmText" @confirm="onConfirmCodeBulkDelete" @close="onCloseBulkDeleteModal" @cancel="onCloseBulkDeleteModal" /> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_generate_codes_modal %} <sw-promotion-v2-generate-codes-modal v-if="generateCodesModal" :promotion="promotion" @generate-finish="onGenerateFinish" @close="onCloseGenerateCodesModal" /> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal %} <sw-modal v-if="addCodesModal" class="sw-promotion-v2-individual-codes-behavior__add-codes-modal" variant="small" :title="$tc('sw-promotion-v2.detail.base.codes.individual.addCodesModal.title')" @modal-close="onCloseAddCodesModal" > {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_content %} <div class="sw-promotion-v2-individual-codes-behavior__content"> {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_description %} <p class="sw-promotion-v2-individual-codes-behavior__description"> {{ $tc('sw-promotion-v2.detail.base.codes.individual.addCodesModal.description') }} </p> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_code_amount %} <sw-number-field v-model:value="newCodeAmount" class="sw-promotion-v2-individual-codes-behavior__code-amount" :label="$tc('sw-promotion-v2.detail.base.codes.individual.addCodesModal.codeAmountLabel')" :min="1" /> {% endblock %} </div> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_footer %} <template #modal-footer> {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_footer_cancel %} <sw-button class="sw-promotion-v2-individual-codes-behavior__add-codes-button-cancel" size="small" @click="onCloseAddCodesModal" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_footer_confirm %} <sw-button-process class="sw-promotion-v2-individual-codes-behavior__add-codes-button-confirm" variant="primary" size="small" :is-loading="isAdding" :process-success="false" @click="onAddCodes" > {{ $tc('sw-promotion-v2.detail.base.codes.individual.addCodesModal.addCodesButton') }} </sw-button-process> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %} </div> {% endblock %}`,{Criteria:t}=Cicada.Data,a={template:d,compatConfig:Cicada.compatConfig,inject:["acl","repositoryFactory","promotionCodeApiService","feature"],emits:["delete-finish","generate-finish"],mixins:["notification"],props:{promotion:{type:Object,required:!0}},data(){return{limit:25,isGridLoading:!1,isAdding:!1,codeDeleteModal:!1,codeBulkDeleteModal:!1,generateCodesModal:!1,addCodesModal:!1,newCodeAmount:10,currentSelection:[]}},computed:{promotionRepository(){return this.repositoryFactory.create("promotion")},customerRepository(){return this.repositoryFactory.create("customer")},deleteConfirmText(){return this.currentSelection?this.$tc("sw-promotion-v2.detail.base.codes.individual.textDeleteConfirm",this.currentSelection.length,{code:this.currentSelection[0].code||""}):""},codeColumns(){return[{property:"code",label:this.$tc("sw-promotion-v2.detail.base.codes.individual.columnCode")},{property:"payload",label:this.$tc("sw-promotion-v2.detail.base.codes.individual.columnRedeemed")},{property:"payload.customerName",label:this.$tc("sw-promotion-v2.detail.base.codes.individual.columnCustomer")},{property:"createdAt",label:this.$tc("sw-promotion-v2.detail.base.codes.individual.columnCreatedAt")}]},assetFilter(){return Cicada.Filter.getByName("asset")},dateFilter(){return Cicada.Filter.getByName("date")}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.loadIndividualCodesGrid()},onSearchTermChange(e){this.promotion.individualCodes.criteria.setTerm(e),this.loadIndividualCodesGrid()},loadIndividualCodesGrid(){this.$refs.individualCodesGrid&&(this.isGridLoading=!0,this.promotion.individualCodes.criteria.addSorting(t.naturalSorting("code")),this.$refs.individualCodesGrid.load().then(()=>{this.isGridLoading=!1}))},onSelectionChange(e){this.currentSelection=Object.values(e)},onCodeSelectionChange(e){this.currentSelection=Object.values(e)},onShowCodeDeleteModal(e){this.codeDeleteModal=e},onShowCodeBulkDeleteModal(){this.codeBulkDeleteModal=!0},onConfirmCodeDelete(e){this.onCloseDeleteModal(),this.$refs.individualCodesGrid.deleteItem(e).then(()=>{this.loadIndividualCodesGrid()})},onConfirmCodeBulkDelete(){this.onCloseBulkDeleteModal(),this.$refs.individualCodesGrid.deleteItems().then(()=>{this.loadIndividualCodesGrid()})},onCloseDeleteModal(){this.codeDeleteModal=!1},onCloseBulkDeleteModal(){this.codeBulkDeleteModal=!1},onOpenGenerateCodesModal(){this.generateCodesModal=!0},onGenerateFinish(){this.onCloseGenerateCodesModal(),this.$emit("generate-finish")},onCloseGenerateCodesModal(){this.generateCodesModal=!1},onOpenAddCodesModal(){this.addCodesModal=!0},onAddCodes(){this.isAdding=!0,this.promotionCodeApiService.addIndividualCodes(this.promotion.id,this.newCodeAmount).then(()=>{this.isAdding=!1,this.onCloseAddCodesModal(),this.$emit("generate-finish")}).catch(e=>{this.isAdding=!1,e.response.data.errors.forEach(o=>{let i;switch(o.code){case"PROMOTION__INDIVIDUAL_CODES_PATTERN_INSUFFICIENTLY_COMPLEX":i="notComplexEnoughException";break;case"PROMOTION__INDIVIDUAL_CODES_PATTERN_ALREADY_IN_USE":i="alreadyInUseException";break;default:i="unknownErrorCode";break}this.createNotificationError({autoClose:!1,message:this.$tc(`sw-promotion-v2.detail.base.codes.individual.generateModal.${i}`)})})})},onCloseAddCodesModal(){this.addCodesModal=!1},routeToCustomer(e){return this.customerRepository.get(e.customerId).then(o=>{if(o===null){this.createRoutingErrorNotification(e.customerName);return}this.$router.push({name:"sw.customer.detail",params:{id:o.id}})}).catch(()=>{this.createRoutingErrorNotification(e.customerName)})},createRoutingErrorNotification(e){this.createNotificationError({message:this.$tc("sw-promotion-v2.detail.base.codes.individual.routingError",0,{name:e})})}}};export{a as default};
//# sourceMappingURL=index-BGHKPVCy.js.map
