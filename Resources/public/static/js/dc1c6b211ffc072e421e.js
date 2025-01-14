(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[77591],{309095:function(){},77591:function(r,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}}),t(196800);let{Criteria:e}=Cicada.Data;var o={template:'\n{% block sw_product_variants_configurator_prices %}\n<div class="sw-product-variants-configurator-prices">\n    <sw-alert\n        class="sw-product-variants-configurator-prices__alert"\n        variant="info"\n    >\n        {{ $tc(\'sw-product.variations.configuratorModal.surchargeNotice\') }}\n    </sw-alert>\n    <div class="sw-product-variants-configurator-prices__table">\n        \n        {% block sw_product_variants_configurator_prices_groups %}\n        <div class="sw-product-variants-configurator-prices__groups">\n            <ul>\n                <li\n                    v-for="group in selectedGroups"\n                    :key="group.id"\n                    class="sw-product-variants-configurator-prices__groupElement"\n                    :class="{\'is--selected\': activeGroup.id == group.id}"\n                    role="button"\n                    tabindex="0"\n                    @click="activeGroup = group"\n                    @keydown.enter="activeGroup = group"\n                >\n                    <sw-icon\n                        name="regular-folder"\n                        size="16px"\n                    />\n                    {{ group.translated.name }}\n                </li>\n            </ul>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_configurator_prices_prices %}\n        <div class="sw-product-variants-configurator-prices__prices">\n            \n            {% block sw_product_variants_configurator_prices_search %}\n            <div class="sw-product-variants-configurator-prices__search">\n                \n                {% block sw_product_variants_configurator_prices_search_field %}\n                <sw-simple-search-field\n                    v-model:value="term"\n                    size="small"\n                    variant="form"\n                    :placeholder="$tc(\'sw-product.variations.configuratorModal.searchPlaceholder\')"\n                />\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_configurator_prices_grid_wrapper %}\n            <div class="sw-product-variants-configurator-prices__grid-wrapper">\n                \n                {% block sw_product_variants_configurator_prices_data_grid %}\n                <sw-data-grid\n                    v-if="optionsForGroup.length"\n                    :data-source="optionsForGroup"\n                    :show-selection="false"\n                    :columns="optionColumns"\n                    show-settings\n                    full-page\n                >\n\n                    \n                    {% block sw_product_variants_configurator_prices_column_name %}\n                    <template\n                        #column-name="{ item, isInlineEdit, compact }"\n                    >\n                        {{ item.option.translated.name }}\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_product_variants_configurator_prices_column_currency %}\n                    <template\n                        v-for="currency in currenciesList"\n                        :key="currency.id"\n                        #[`column-currency.${currency.id}`]="{ item, isInlineEdit, compact }"\n                    >\n\n                        <sw-product-variants-price-field\n                            :price="getCurrencyOfOption(item, currency.id)"\n                            :tax-rate="product.taxId"\n                            :currency="currency"\n                            compact\n                        />\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_product_variants_configurator_prices_actions %}\n                    <template\n                        #actions="{ item }"\n                    >\n                        \n                        {% block sw_product_variants_configurator_prices_actions_items %}\n                        <sw-context-menu-item\n                            variant="danger"\n                            @click="resetSurcharges(item, true)"\n                        >\n                            {{ $tc(\'sw-product.variations.configuratorModal.resetSurcharges\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n                </sw-data-grid>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    \n    {% block sw_product_variants_configurator_prices_loader %}\n    <sw-loader v-if="isLoading" />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory"],props:{product:{type:Object,required:!0},selectedGroups:{type:Array,required:!0}},data(){return{activeGroup:{},term:"",optionsForGroup:[],currencies:{},isLoading:!0}},computed:{currencyRepository(){return this.repositoryFactory.create("currency")},currenciesList(){return this.currencies.map(r=>({id:r.id,name:r.name,symbol:r.symbol}))},optionColumns(){return[{property:"name",label:this.$tc("sw-product.variations.configuratorModal.priceOptions"),rawData:!0},...this.currenciesList.map(r=>({property:`currency.${r.id}`,label:r.name,rawData:!0,allowResize:!0,width:"200px"}))]}},watch:{activeGroup(){this.getOptionsForGroup()}},mounted(){this.mountedComponent()},methods:{onSearchTermChange(){this.getOptionsForGroup()},mountedComponent(){this.isLoading=!1,this.loadCurrencies()},loadCurrencies(){this.currencyRepository.search(new e(1,25)).then(r=>{this.currencies=r})},getOptionsForGroup(){this.optionsForGroup=this.product.configuratorSettings.filter(r=>r.option.groupId===this.activeGroup.id&&(this.resetSurcharges(r),!0)).filter(r=>r.option.translated.name.toLowerCase().includes(this.term.toLowerCase()))},resetSurcharges(r,n=!1){Array.isArray(r.price)&&r.price&&r.price.length>0&&!n||(this.isCompatEnabled("INSTANCE_SET")?this.$set(r,"price",[]):r.price=[],this.currenciesList.forEach(n=>{if(!r.price.find(r=>r.currencyId===n.id)){let t={currencyId:n.id,gross:0,linked:!0,net:0};r.price.push(t)}}))},getCurrencyOfOption(r,n){return r.price.find(r=>r.currencyId===n)}}}},196800:function(r,n,t){var e=t(309095);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[r.id,e,""]]),e.locals&&(r.exports=e.locals),t(745346).Z("ca609caa",e,!0,{})}}]);