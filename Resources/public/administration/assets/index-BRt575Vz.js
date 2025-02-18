const i=`{% block sw_settings_price_rounding %} <div class="sw-settings-price-rounding"> {% block sw_settings_price_rounding_header_warning %} <mt-banner v-if="showHeaderWarning" class="sw-settings-price-rounding__header-warning" variant="attention" > {{ $tc('sw-settings-currency.price-rounding.headerWarning') }} </mt-banner> {% endblock %} {% block sw_settings_price_rounding_header_items %} <div role="heading" aria-level="3" class="sw-settings-price-rounding__headline" > {{ $tc('sw-settings-currency.price-rounding.itemsHeadline') }} </div> {% endblock %} {% block sw_settings_price_rounding_subline_items %} <p class="sw-settings-price-rounding__info-text"> {{ $tc('sw-settings-currency.price-rounding.itemsSubline') }} </p> {% endblock %} {% block sw_settings_price_rounding_container_items %} <sw-container class="sw-settings-price-rounding__rounding-container" columns="repeat(auto-fit, minmax(250px, 1fr))" gap="0px 30px" > {% block sw_settings_price_rounding_container_items_decimals %} <sw-number-field v-model:value="itemRounding.decimals" :label="$tc('sw-settings-currency.price-rounding.labelDecimals')" :help-text="$tc('sw-settings-currency.price-rounding.helpTextDecimals')" required number-type="int" :step="1" :min="0" :max="20" @update:value="onChangeDecimals($event, 'itemRounding')" /> {% endblock %} {% block sw_settings_price_rounding_container_items_interval %} <sw-single-select v-model:value="itemRounding.interval" v-tooltip="{ message: $tc('sw-settings-currency.price-rounding.tooltipIntervalDisabled'), disabled: !itemIntervalDisabled, showOnDisabledElements: true }" class="sw-settings-price-rounding__item-interval-select" :label="$tc('sw-settings-currency.price-rounding.labelInterval')" :help-text="$tc('sw-settings-currency.price-rounding.helpTextInterval')" :disabled="itemIntervalDisabled" required :options="intervalOptions" /> {% endblock %} {% block sw_settings_price_rounding_container_items_round_for_net %} <sw-switch-field v-model:value="itemRounding.roundForNet" class="sw-settings-price-rounding__round-for-net-checkbox" :label="$tc('sw-settings-currency.price-rounding.labelRoundForNet')" :help-text="$tc('sw-settings-currency.price-rounding.helpTextRoundForNet')" /> {% endblock %} </sw-container> {% endblock %} {% block sw_settings_price_rounding_spacer %} <hr class="sw-settings-price-rounding__spacer"> {% endblock %} {% block sw_settings_price_rounding_header_grand %} <div role="heading" aria-level="3" class="sw-settings-price-rounding__headline" > {{ $tc('sw-settings-currency.price-rounding.grandHeadline') }} </div> {% endblock %} {% block sw_settings_price_rounding_subline_grand %} <p class="sw-settings-price-rounding__info-text"> {{ $tc('sw-settings-currency.price-rounding.grandSubline') }} </p> {% endblock %} {% block sw_settings_price_rounding_header_info %} <mt-banner v-if="showHeaderInfo" class="sw-settings-price-rounding__header-info" variant="info" > {{ $tc('sw-settings-currency.price-rounding.headerInfo') }} </mt-banner> {% endblock %} {% block sw_settings_price_rounding_container_grand %} <sw-container class="sw-settings-price-rounding__rounding-container" columns="repeat(auto-fit, minmax(250px, 1fr))" gap="0px 30px" > {% block sw_settings_price_rounding_container_grand_decimals %} <sw-number-field v-model:value="totalRounding.decimals" :label="$tc('sw-settings-currency.price-rounding.labelDecimals')" :help-text="$tc('sw-settings-currency.price-rounding.helpTextDecimals')" required number-type="int" :step="1" :min="0" :max="20" @update:value="onChangeDecimals($event, 'totalRounding')" /> {% endblock %} {% block sw_settings_price_rounding_container_grand_interval %} <sw-single-select v-model:value="totalRounding.interval" v-tooltip="{ message: $tc('sw-settings-currency.price-rounding.tooltipIntervalDisabled'), disabled: !totalIntervalDisabled, showOnDisabledElements: true }" class="sw-settings-price-rounding__grand-interval-select" :label="$tc('sw-settings-currency.price-rounding.labelInterval')" :help-text="$tc('sw-settings-currency.price-rounding.helpTextInterval')" required :disabled="totalIntervalDisabled" :options="intervalOptions" /> {% endblock %} {% block sw_settings_price_rounding_container_grand_round_for_net %} <sw-switch-field v-model:value="totalRounding.roundForNet" class="sw-settings-price-rounding__round-for-net-checkbox" :label="$tc('sw-settings-currency.price-rounding.labelRoundForNet')" :help-text="$tc('sw-settings-currency.price-rounding.helpTextRoundForNet')" /> {% endblock %} </sw-container> {% endblock %} </div> {% endblock %}`,t={template:i,props:{itemRounding:{type:Object,required:!1,default(){return{}}},totalRounding:{type:Object,required:!1,default(){return{}}}},data(){return{intervalOptions:[{label:this.$tc("sw-settings-currency.price-rounding.labelIntervalNone"),value:.01},{label:"0.05",value:.05},{label:"0.10",value:.1},{label:"0.50",value:.5},{label:"1.00",value:1}]}},computed:{itemIntervalDisabled(){return this.itemRounding.decimals>2},totalIntervalDisabled(){return this.totalRounding.decimals>2},showHeaderInfo(){return this.totalRounding.interval!==.01||this.itemRounding.decimals!==this.totalRounding.decimals},showHeaderWarning(){return this.totalRounding.interval!==this.itemRounding.interval}},methods:{onChangeDecimals(n,e){n<=2||!["itemRounding","totalRounding"].includes(e)||(this[e].interval=.01)}}};export{t as default};
