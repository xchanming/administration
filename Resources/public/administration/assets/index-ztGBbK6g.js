const t='{% block sw_order_nested_line_items_row %} <div class="sw-order-nested-line-items-row"> {% block sw_order_nested_line_items_row_content %} <div v-if="renderParent" class="sw-order-nested-line-items-row__content" > {% block sw_order_nested_line_items_row_content_label %} <div class="sw-order-nested-line-items-row__label sw-order-nested-line-items-row__item"> {% block sw_order_nested_line_items_row_content_label_nesting %} <div v-for="index in (lineItem.nestingLevel - 1)" :key="index" class="sw-order-nested-line-items-row__nesting-level" ></div> {% endblock %} {% block sw_order_nested_line_items_row_content_label_content %} <div class="sw-order-nested-line-items-row__label-content"> {{ lineItem.label }} </div> {% endblock %} </div> {% endblock %} {% block sw_order_nested_line_items_row_content_unit_price %} <div class="sw-order-nested-line-items-row__unit-price sw-order-nested-line-items-row__item"> {% block sw_order_nested_line_items_row_content_unit_price_content %} {{ currencyFilter(lineItem.unitPrice, currency.isoCode) }} {% endblock %} </div> {% endblock %} {% block sw_order_nested_line_items_row_content_quantity %} <div class="sw-order-nested-line-items-row__quantity sw-order-nested-line-items-row__item"> {% block sw_order_nested_line_items_row_content_quantity_content %} {{ lineItem.quantity }} {% endblock %} </div> {% endblock %} {% block sw_order_nested_line_items_row_content_total_price %} <div class="sw-order-nested-line-items-row__total-price sw-order-nested-line-items-row__item"> {% block sw_order_nested_line_items_row_content_total_price_content %} {{ currencyFilter(lineItem.totalPrice, currency.isoCode) }} {% endblock %} </div> {% endblock %} {% block sw_order_nested_line_items_row_content_tax %} <div class="sw-order-nested-line-items-row__tax sw-order-nested-line-items-row__item"> {% block sw_order_nested_line_items_row_content_tax_content %} {{ (lineItem.price.taxRules.length > 0) ? `${lineItem.price.taxRules[0].taxRate} %` : \'0%\' }} {% endblock %} </div> {% endblock %} </div> {% endblock %} {% block sw_order_nested_line_items_row_nesting %} <template v-if="lineItem.children.length > 0"> <sw-order-nested-line-items-row v-for="child in lineItem.children" :key="child.id" :line-item="child" :currency="currency" :render-parent="true" /> </template> {% endblock %} </div> {% endblock %}',n={template:t,compatConfig:Cicada.compatConfig,props:{lineItem:{type:Object,required:!0},currency:{type:Object,required:!0},renderParent:{type:Boolean,required:!1,default(){return!1}}},computed:{currencyFilter(){return Cicada.Filter.getByName("currency")}},methods:{getNestingClasses(e){return[`nesting-level-${e}`]}}};export{n as default};
//# sourceMappingURL=index-ztGBbK6g.js.map
