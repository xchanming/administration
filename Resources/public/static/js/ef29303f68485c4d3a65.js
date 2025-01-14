(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[78266],{657328:function(){},678266:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}}),t(96945);let{Filter:d}=Cicada,{Criteria:i}=Cicada.Data;var o={template:'\n{% block sw_order_nested_line_item_modal %}\n<sw-modal\n    class="sw-order-nested-line-items-modal"\n    variant="large"\n    :title="modalTitle"\n    @modal-close="onCloseModal"\n>\n\n    \n    {% block sw_order_nested_line_item_modal_loader %}\n    <sw-loader\n        v-if="isLoading"\n        class="sw-order-nested-line-items-modal__loader"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_nested_line_item_modal_container %}\n    <div\n        v-else\n        class="sw-order-nested-line-items-modal__container"\n    >\n\n        \n        {% block sw_order_nested_line_item_modal_header_container %}\n        <div class="sw-order-nested-line-items-modal__header-container">\n\n            \n            {% block sw_order_nested_line_item_modal_header_label %}\n            <div class="sw-order-nested-line-items-modal__header-label sw-order-nested-line-items-modal__header-item">\n                {{ $tc(\'sw-order.nestedLineItemsModal.headerLabel\') }}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_order_nested_line_item_modal_header_unit_price %}\n            <div class="sw-order-nested-line-items-modal__header-unit-price sw-order-nested-line-items-modal__header-item">\n                {{ $tc(\'sw-order.nestedLineItemsModal.headerUnitPrice\') }}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_order_nested_line_item_modal_header_quantity %}\n            <div class="sw-order-nested-line-items-modal__header-quantity sw-order-nested-line-items-modal__header-item">\n                {{ $tc(\'sw-order.nestedLineItemsModal.headerQuantity\') }}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_order_nested_line_item_modal_header_total_price %}\n            <div class="sw-order-nested-line-items-modal__header-total-price sw-order-nested-line-items-modal__header-item">\n                {{ $tc(\'sw-order.nestedLineItemsModal.headerTotalPrice\') }}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_order_nested_line_item_modal_header_tax %}\n            <div class="sw-order-nested-line-items-modal__header-tax sw-order-nested-line-items-modal__header-item">\n                {{ $tc(\'sw-order.nestedLineItemsModal.headerTax\') }}\n            </div>\n            {% endblock %}\n\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_order_nested_line_item_modal_content %}\n        <sw-order-nested-line-items-row\n            class="sw-order-nested-line-items-modal__content"\n            :line-item="lineItem"\n            :currency="order.currency"\n        />\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_order_nested_line_item_modal_footer %}\n    <template #modal-footer>\n\n        \n        {% block sw_order_nested_line_item_modal_footer_content %}\n        <sw-button\n            variant="primary"\n            size="small"\n            @click="onCloseModal"\n        >\n            {{ $tc(\'global.default.close\') }}\n        </sw-button>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n</sw-modal>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory"],emits:["modal-close"],props:{lineItem:{type:Object,required:!0},order:{type:Object,required:!0}},data(){return{isLoading:!1}},computed:{lineItemRepository(){return this.repositoryFactory.create("order_line_item")},modalTitle(){let e=d.getByName("currency")(this.lineItem.totalPrice,this.order.currency.isoCode);return this.$tc("sw-order.nestedLineItemsModal.titlePrefix",0,{lineItemLabel:this.lineItem.label,price:e})}},created(){this.createdComponent()},methods:{async createdComponent(){null!==this.lineItem&&(this.isLoading=!0,this.lineItem.nestingLevel=0,await this.enrichNestedLineItems(this.lineItem.children))},async enrichNestedLineItems(e,n=1){if(null===e||e.length<=0){this.isLoading=!1;return}let t=e.map(e=>e.id),d=new i(1,25).addFilter(i.equalsAny("parentId",t));d.getAssociation("children").addSorting(i.naturalSorting("label"));let o=await this.lineItemRepository.search(d,Cicada.Context.api),l=[];e.forEach(e=>{e.nestingLevel=n,e.children=o.filter(n=>n.parentId===e.id),e.children.sort(this.naturalSort),l.push(...e.children)}),await this.enrichNestedLineItems(l,n+1)},naturalSort(e,n){return e.label.localeCompare(n.label,"en-GB",{numeric:!0,ignorePunctuation:!0})},onCloseModal(){this.$emit("modal-close")}}}},96945:function(e,n,t){var d=t(657328);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[e.id,d,""]]),d.locals&&(e.exports=d.locals),t(745346).Z("8b96c272",d,!0,{})}}]);