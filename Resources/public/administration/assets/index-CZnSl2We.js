const t=`{% block sw_product_settings_mode %} <sw-context-button v-tooltip="{ message: $tc('sw-product.general.tooltipModeSettings') }" class="sw-product-settings-mode" :menu-width="300" :auto-close="false" > <template #button> {% block sw_product_settings_mode_trigger %} <sw-button class="sw-product-settings-mode__trigger" size="x-small" square :aria-label="$tc('sw-product.general.tooltipModeSettings')" > {% block sw_product_settings_mode_trigger_icon %} <sw-icon name="regular-bars-s" size="16px" /> {% endblock %} </sw-button> {% endblock %} </template> {% block sw_product_settings_mode_content %} {% block sw_product_settings_mode_main %} <div class="sw-product-settings-mode__container"> {% block sw_product_settings_mode_advanced_switch %} <sw-switch-field v-model:value="advancedMode.enabled" class="sw-product-settings-mode__advanced-mode" size="medium" :label="$tc(advancedMode.label)" @update:value="onChangeSetting" /> {% endblock %} </div> {% endblock %} {% block sw_product_settings_mode_devider %} <sw-context-menu-divider /> {% endblock %} {% block sw_product_settings_mode_list %} <transition-group class="sw-product-settings-mode__container sw-product-settings-mode__list" name="item-list" tag="div" > {% block sw_product_settings_mode_item %} <div v-for="(item, index) in settings" :key="item.key" class="sw-product-settings-mode__item" > {% block sw_product_settings_mode_item_visibility_checkbox %} <sw-checkbox-field v-model:value="item.enabled" :disabled="!advancedMode.enabled" :label="$tc(item.label)" @update:value="onChangeSettingItem" /> {% endblock %} </div> {% endblock %} </transition-group> {% endblock %} {% block sw_product_settings_mode_loader %} <sw-loader v-if="isLoading" /> {% endblock %} {% endblock %} </sw-context-button> {% endblock %}`,s={template:t,compatConfig:Cicada.compatConfig,emits:["settings-change","settings-item-change"],props:{modeSettings:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!0}},computed:{advancedMode(){return this.modeSettings.value.advancedMode},settings(){switch(this.$route.name){case"sw.product.detail.base":return this.modeSettings.value.settings.filter(({name:e})=>e==="general");case"sw.product.detail.specifications":return this.modeSettings.value.settings.filter(({name:e})=>e==="specifications");default:return this.modeSettings.value.settings}}},methods:{onChangeSetting(){this.$emit("settings-change")},onChangeSettingItem(){this.$emit("settings-item-change")}}};export{s as default};
//# sourceMappingURL=index-CZnSl2We.js.map
