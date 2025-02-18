import{L as o}from"./order.types-BvKP5qzO.js";const d=`{% block sw_order_line_items_grid %} <sw-container type="row" class="sw-order-line-items-grid" > {% block sw_order_line_items_grid_actions %} <sw-container class="sw-order-line-items-grid__actions-container" columns="1fr auto" gap="16px" > {% block sw_order_line_items_grid_line_item_filter %} <div align="left"> <sw-card-filter ref="itemFilter" :placeholder="$tc('sw-order.createBase.placeholderSearchBarItem')" @sw-card-filter-term-change="onSearchTermChange" /> </div> {% endblock %} {% block sw_order_line_items_grid_create_actions %} <div align="right"> {% block sw_order_line_items_grid_create_actions_button_group %} <sw-button-group :disabled="isLoading || undefined"> {% block sw_order_line_items_grid_add_existing_product %} <sw-button class="sw-order-line-items-grid__actions-container-add-product-btn" variant="ghost" size="small" :disabled="!editable || undefined" @click="onInsertExistingItem" > {{ $tc('sw-order.detailBase.buttonAddProduct') }} </sw-button> {% endblock %} {% block sw_order_line_items_grid_create_actions_dropdown %} <sw-context-button> <template #button> <sw-button variant="ghost" size="small" square > <sw-icon name="regular-chevron-down-xs" decorative /> </sw-button> </template> {% block sw_order_line_items_grid_create_actions_dropdown_menu_item %} <sw-context-menu-item v-tooltip.left="{ message: $tc('sw-privileges.tooltip.warning'), disabled: editable, showOnDisabledElements: true }" class="sw-order-line-items-grid__create-custom-item" :disabled="!editable || undefined" @click="onInsertBlankItem" > {{ $tc('sw-order.detailBase.buttonAddBlankProduct') }} </sw-context-menu-item> <sw-context-menu-item v-tooltip.left="{ message: $tc('sw-privileges.tooltip.warning'), disabled: canCreateDiscounts, showOnDisabledElements: true }" class="sw-order-line-items-grid__can-create-discounts-button" :disabled="!canCreateDiscounts || undefined" @click="onInsertCreditItem" > {{ $tc('sw-order.detailBase.buttonAddCredit') }} </sw-context-menu-item> {% endblock %} </sw-context-button> {% endblock %} </sw-button-group> {% endblock %} </div> {% endblock %} </sw-container> {% endblock %} {% block sw_order_line_items_grid_grid %} <sw-data-grid ref="dataGrid" class="sw-order-line-items-grid__data-grid" identifier="sw-order-line-item-grid" :data-source="orderLineItems" :columns="getLineItemColumns" show-settings :show-selection="editable" :is-loading="isLoading" :allow-inline-edit="editable" :is-record-editable="(item) => !isPromotionItem(item)" @inline-edit-cancel="onInlineEditCancel" @inline-edit-save="onInlineEditSave" @selection-change="onSelectionChanged" > {% block sw_order_line_items_grid_grid_columns %} {% block sw_order_line_items_grid_grid_columns_label %} <template #column-label="{ item, isInlineEdit }"> {% block sw_order_line_items_grid_grid_columns_label_inline_edit %} <sw-order-product-select v-if="isInlineEdit" name="sw-field--item-label" :sales-channel-id="salesChannelId" :tax-status="taxStatus" :item="item" /> {% endblock %} {% block sw_order_line_items_grid_grid_columns_label_link %} <div v-else-if="!isInlineEdit && (isProductItem(item) || isContainerItem(item))" class="sw-order-line-items-grid__item-product" > {% block sw_order_line_items_grid_grid_columns_label_nested_modal_button %} <sw-button v-if="hasChildren(item)" v-tooltip="{ message: $tc('sw-order.detailBase.tooltipNestedLineItemsButton') }" class="sw-order-line-items-grid__item-nested-indicator" size="x-small" @click="openNestedLineItemsModal(item)" > {% block sw_order_line_items_grid_grid_columns_label_nested_modal_button_icon %} <sw-icon class="sw-order-line-items-grid__nested-indicator-icon" name="regular-list-xs" size="14px" /> {% endblock %} </sw-button> {% endblock %} {% block sw_order_line_items_grid_column_payload_options %} {% block sw_order_line_items_grid_column_payload_options_link %} <router-link v-if="item.payload && item.payload.options" class="sw-order-line-items-grid__item-payload-options" :title="$tc('sw-order.detailBase.contextMenuShowProduct')" :to="{ name: 'sw.product.detail', params: { id: item.productId } }" > <sw-product-variant-info :variations="item.payload.options"> <div class="sw-order-line-items-grid__item-label"> {{ item.label }} </div> </sw-product-variant-info> </router-link> {% endblock %} {% block sw_order_line_items_grid_column_payload_options_linkless %} <div v-else class="sw-order-line-items-grid__item-payload-options" > <span class="sw-order-line-items-grid__item-label"> {{ item.label }} </span> </div> {% endblock %} {% endblock %} </div> {% endblock %} {% block sw_order_line_items_grid_grid_columns_label_content %} <template v-else> <span class="sw-order-line-items-grid__item-label"> {{ item.label }} </span> </template> {% endblock %} </template> {% endblock %} {% block sw_order_line_items_grid_grid_columns_unit_price %} <template #column-unitPrice="{ item, isInlineEdit }"> {% block sw_order_line_items_grid_grid_columns_unit_price_inline_edit %} <sw-number-field v-if="isInlineEdit && !itemCreatedFromProduct(item.id)" v-model:value="item.priceDefinition.price" name="sw-field--item-priceDefinition-price" placeholder="0" size="small" :min="getMinItemPrice(item.id)" :digits="order.itemRounding.decimals" number-align-end @update:value="checkItemPrice($event, item)" /> {% endblock %} {% block sw_order_line_items_grid_grid_columns_unit_price_content %} <span v-else>{{ currencyFilter(item.unitPrice, order.currency.isoCode, order.itemRounding.decimals) }}</span> {% endblock %} </template> {% endblock %} {% block sw_order_line_items_grid_grid_columns_total_price %} <template #column-totalPrice="{ item }"> {% block sw_order_line_items_grid_grid_columns_total_price_content %} <span> {{ currencyFilter(item.totalPrice, order.currency.isoCode, order.itemRounding.decimals) }} </span> {% endblock %} </template> {% endblock %} {% block sw_order_line_items_grid_grid_columns_quantity %} <template #column-quantity="{ item, isInlineEdit }"> {% block sw_order_line_items_grid_grid_columns_quantity_inline_edit %} <sw-number-field v-if="isInlineEdit && !isCreditItem(item.id)" :value="item.quantity" name="sw-field--item-quantity" number-type="int" :min="1" size="small" placeholder="0" number-align-end @update:value="updateItemQuantity(item, $event)" /> {% endblock %} {% block sw_order_line_items_grid_grid_columns_quantity_content %} <span v-else> {{ item.quantity }} x </span> {% endblock %} </template> {% endblock %} {% block sw_order_line_items_grid_grid_columns_tax %} <template #column-price.taxRules[0]="{ item, isInlineEdit }"> {% block sw_order_line_items_grid_grid_columns_tax_inline_edit %} <sw-number-field v-if="isInlineEdit && showTaxRulesInlineEdit(item)" key="order-line-item-tax-edit-default" v-model:value="item.priceDefinition.taxRules[0].taxRate" name="sw-field--item-priceDefinition-taxRules[0]-taxRate" size="small" placeholder="0" number-align-end /> {% endblock %} {% block sw_order_line_items_grid_grid_columns_tax_content_tooltip %} <span v-else-if="hasMultipleTaxes(item)" v-tooltip="tooltipTaxDetail(item)" class="sw-order-line-items-grid__item-tax-tooltip" > {{ showTaxValue(item) }} </span> {% endblock %} {% block sw_order_line_items_grid_grid_columns_tax_content %} <span v-else-if="item.price && item.price.taxRules.length"> {{ showTaxValue(item) }} </span> {% endblock %} </template> {% endblock %} {% block sw_order_line_items_grid_grid_actions %} <template #actions="{ item, itemIndex }"> {% block sw_order_line_items_grid_grid_actions_show %} <sw-context-menu-item :disabled="!isProductItem(item) || undefined" :router-link="{ name: 'sw.product.detail', params: { id: item.productId } }" > {% block sw_order_line_items_grid_grid_actions_show_label %} {{ $tc('sw-order.detailBase.contextMenuShowProduct') }} {% endblock %} </sw-context-menu-item> {% endblock %} {% block sw_order_line_items_grid_grid_actions_extension %}{% endblock %} {% block sw_order_line_items_grid_grid_actions_delete %} <sw-context-menu-item v-tooltip.left="{ message: $tc('sw-privileges.tooltip.warning'), disabled: editable, showOnDisabledElements: true }" variant="danger" class="sw_order_line_items_grid-item__delete-action" :disabled="!editable || undefined" @click="onDeleteItem(item, itemIndex)" > {% block sw_order_line_items_grid_grid_actions_delete_label %} {{ $tc('sw-order.detailBase.contextMenuDelete') }} {% endblock %} </sw-context-menu-item> {% endblock %} </template> {% endblock %} {% block sw_order_line_items_grid_grid_actions_modals %} <template #action-modals="{ item }"> {% block sw_order_line_items_grid_grid_actions_modals_items %}{% endblock %} <sw-modal v-if="showDeleteModal === item.id" class="sw-order-line-items-grid__delete-item-modal" :title="$tc('global.default.warning')" variant="small" @modal-close="onCloseDeleteModal" > <p class="sw-order-list__confirm-delete-text"> {{ $tc('sw-order.detailBase.textDeleteLineItemConfirm', { label: \`\${item.label}\` }, 0) }} </p> <template #modal-footer> <sw-button size="small" class="sw_order_line_items_grid-actions_modal__close-action" @click="onCloseDeleteModal" > {{ $tc('global.default.cancel') }} </sw-button> <sw-button variant="danger" size="small" class="sw_order_line_items_grid-actions_modal__confirm-action" @click="onConfirmDelete(item.id)" > {{ $tc('global.default.delete') }} </sw-button> </template> </sw-modal> </template> {% endblock %} {% block sw_order_line_items_grid_bulk_actions %} <template #bulk> {% block sw_order_line_items_grid_bulk_actions_delete %} <a class="link link-danger" role="link" tabindex="0" @click="onDeleteSelectedItems" @keydown.enter="onDeleteSelectedItems" > {{ $tc('global.default.delete') }} </a> {% endblock %} {% block sw_order_line_items_grid_bulk_actions_extension %}{% endblock %} </template> {% endblock %} {% endblock %} </sw-data-grid> {% endblock %} {% block sw_order_line_items_nested_line_item_modal %} <sw-order-nested-line-items-modal v-if="nestedLineItemsModal" :line-item="nestedLineItemsModal" :order="order" @modal-close="closeNestedLineItemsModal" /> {% endblock %} </sw-container> {% endblock %}`,{Utils:a}=Shopware,{get:n,format:c}=a,_={template:d,inject:["repositoryFactory","orderService","acl"],emits:["item-edit","existing-item-edit","item-cancel","item-delete"],props:{order:{type:Object,required:!0},context:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},data(){return{isLoading:!1,selectedItems:{},searchTerm:"",nestedLineItemsModal:null,showDeleteModal:!1}},computed:{canCreateDiscounts(){return this.acl.can("orders.create_discounts")},orderLineItemRepository(){return this.repositoryFactory.create("order_line_item")},orderLineItems(){if(!this.searchTerm)return this.order.lineItems;const e=this.searchTerm.split(/[\W_]+/gi);return this.order.lineItems.filter(t=>{var r;if(!t.label)return!1;const i=[t.label.toLowerCase()];return this.isProductNumberColumnVisible&&((r=t.payload)!=null&&r.productNumber)&&i.push(t.payload.productNumber.toLowerCase()),e.every(s=>i.some(l=>l.includes(s.toLowerCase())))})},lineItemTypes(){return o},taxStatus(){return n(this.order,"taxStatus","")},unitPriceLabel(){return this.taxStatus==="net"?this.$tc("sw-order.detailBase.columnPriceNet"):this.taxStatus==="tax-free"?this.$tc("sw-order.detailBase.columnPriceTaxFree"):this.$tc("sw-order.detailBase.columnPriceGross")},getLineItemColumns(){const e=[{property:"quantity",dataIndex:"quantity",label:"sw-order.detailBase.columnQuantity",allowResize:!1,align:"right",inlineEdit:!0,width:"90px"},{property:"label",dataIndex:"label",label:"sw-order.detailBase.columnProductName",allowResize:!1,primary:!0,inlineEdit:!0,multiLine:!0},{property:"payload.productNumber",dataIndex:"payload.productNumber",label:"sw-order.detailBase.columnProductNumber",allowResize:!1,align:"left",visible:!1},{property:"unitPrice",dataIndex:"unitPrice",label:this.unitPriceLabel,allowResize:!1,align:"right",inlineEdit:!0,width:"120px"}];return this.taxStatus!=="tax-free"&&e.push({property:"price.taxRules[0]",label:"sw-order.detailBase.columnTax",allowResize:!1,align:"right",inlineEdit:!0,width:"90px"}),[...e,{property:"totalPrice",dataIndex:"totalPrice",label:this.taxStatus==="gross"?"sw-order.detailBase.columnTotalPriceGross":"sw-order.detailBase.columnTotalPriceNet",allowResize:!1,align:"right",width:"120px"}]},salesChannelId(){var e;return((e=this.order)==null?void 0:e.salesChannelId)??""},isProductNumberColumnVisible(){var e,t;return(t=(e=this.$refs.dataGrid)==null?void 0:e.currentColumns.find(i=>i.property==="payload.productNumber"))==null?void 0:t.visible},currencyFilter(){return Shopware.Filter.getByName("currency")}},methods:{onInlineEditSave(e){return new Promise(t=>{e.isNew()?e.type===this.lineItemTypes.PRODUCT?this.orderService.addProductToOrder(this.order.id,this.order.versionId,e.identifier,e.quantity).then(i=>{this.$emit("item-edit"),t(i)}):e.type===this.lineItemTypes.CREDIT?this.orderService.addCreditItemToOrder(this.order.id,this.order.versionId,e).then(i=>{this.$emit("item-edit"),t(i)}):this.orderService.addCustomLineItemToOrder(this.order.id,this.order.versionId,e).then(i=>{this.$emit("item-edit"),t(i)}):(this.$emit("existing-item-edit"),t())})},onInlineEditCancel(){this.$emit("item-cancel")},createNewOrderLineItem(){const e=this.orderLineItemRepository.create();return e.versionId=this.order.versionId,e.priceDefinition={isCalculated:!1,taxRules:[{taxRate:0,percentage:100}],price:0},e.price={taxRules:[{taxRate:0}],unitPrice:0,quantity:1,totalPrice:0},e.quantity=1,e.unitPrice="...",e.totalPrice="...",e.precision=2,e.label="",e.payload={productNumber:""},e},onInsertBlankItem(){const e=this.createNewOrderLineItem();e.description="custom line item",e.type=this.lineItemTypes.CUSTOM,this.order.lineItems.unshift(e)},onInsertExistingItem(){const e=this.createNewOrderLineItem();e.type=this.lineItemTypes.PRODUCT,this.order.lineItems.unshift(e)},onInsertCreditItem(){const e=this.createNewOrderLineItem();e.description="credit line item",e.type=this.lineItemTypes.CREDIT,this.order.lineItems.unshift(e)},onSelectionChanged(e){this.selectedItems=e},onDeleteSelectedItems(){const e=[];if(Object.values(this.selectedItems).forEach(t=>{if(t.isNew()){const i=this.order.lineItems.findIndex(r=>t.id===(r==null?void 0:r.id));this.order.lineItems.splice(i,1);return}e.push(this.orderLineItemRepository.delete(t.id,this.context))}),!e.length){this.selectedItems={},this.$refs.dataGrid.resetSelection();return}Promise.all(e).then(()=>{this.$emit("item-delete"),this.selectedItems={},this.$refs.dataGrid.resetSelection()})},onDeleteItem(e,t){if(e.isNew()){this.order.lineItems.splice(t,1);return}this.showDeleteModal=e.id},onCloseDeleteModal(){this.showDeleteModal=!1},onConfirmDelete(){this.orderLineItemRepository.delete(this.showDeleteModal,this.context).then(()=>{this.$emit("item-delete")}),this.showDeleteModal=!1},itemCreatedFromProduct(e){const t=this.orderLineItems.find(i=>i.id===e);return t.isNew()&&t.type===this.lineItemTypes.PRODUCT},onSearchTermChange(e){this.searchTerm=e.toLowerCase()},isCreditItem(e){return this.orderLineItems.find(i=>i.id===e).type===this.lineItemTypes.CREDIT},isProductItem(e){return e.type===this.lineItemTypes.PRODUCT},isPromotionItem(e){return e.type===this.lineItemTypes.PROMOTION},isContainerItem(e){return e.type===this.lineItemTypes.CONTAINER},getMinItemPrice(e){return this.isCreditItem(e)?null:0},showTaxValue(e){return(this.isCreditItem(e.id)||this.isPromotionItem(e))&&e.price.taxRules.length>1?this.$tc("sw-order.detailBase.textCreditTax"):`${e.price.taxRules[0].taxRate} %`},checkItemPrice(e,t){if(this.isCreditItem(t.id)){t.priceDefinition.price=Math.abs(e)*-1;return}t.priceDefinition.price=e},tooltipTaxDetail(e){const i=[...e.price.calculatedTaxes].sort((r,s)=>r.taxRate-s.taxRate).map(r=>this.$tc("sw-order.detailBase.taxDetail",{taxRate:r.taxRate,tax:c.currency(r.tax,this.order.currency.isoCode)},0));return{showDelay:300,message:`${this.$tc("sw-order.detailBase.tax")}<br>${i.join("<br>")}`}},openNestedLineItemsModal(e){this.nestedLineItemsModal=e},closeNestedLineItemsModal(){this.nestedLineItemsModal=null},hasChildren(e){return e.children&&e.children.length>0},hasMultipleTaxes(e){return n(e,"price.calculatedTaxes")&&e.price.calculatedTaxes.length>1},updateItemQuantity(e,t=void 0){if(!Number.isInteger(t)){e.type===this.lineItemTypes.CUSTOM&&(e.priceDefinition.quantity=e.quantity);return}this.refreshChildrenQuantity([e],e.quantity,t)},refreshChildrenQuantity(e,t,i){e.forEach(r=>{const s=Math.floor(r.quantity/t)*i;this.hasChildren(r)&&this.refreshChildrenQuantity(r.children,r.quantity,s),r.quantity=s,r.type===this.lineItemTypes.CUSTOM&&(r.priceDefinition.quantity=r.quantity)})},showTaxRulesInlineEdit(e){return!this.itemCreatedFromProduct(e.id)&&e.priceDefinition&&e.priceDefinition.taxRules&&!this.isCreditItem(e.id)}}};export{_ as default};
