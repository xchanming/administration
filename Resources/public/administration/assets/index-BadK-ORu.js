const c=`{% block sw_settings_country_currency_dependent_modal %} <sw-modal class="sw-settings-country-currency-dependent-modal" :title="$tc('sw-settings-country.detail.currencyDependentValues')" @modal-close="closeModal" > {% block sw_settings_country_currency_dependent_modal_content %} <sw-data-grid class="sw-settings-country-currency-dependent-modal__grid" :data-source="currencyDependsValue" :is-loading="isLoading" :show-selection="false || undefined" :plain-appearance="true" :columns="countryCurrencyColumns" > {% block sw_settings_country_currency_dependent_modal_content_hamburger_menu %} <template #customSettings> <sw-settings-country-currency-hamburger-menu :options="menuOptions" @currency-change="changeCurrencyDependentRow" /> </template> {% endblock %} {% block sw_settings_country_currency_dependent_modal_content_currency_name %} <template #column-currencyId="{ item }"> <div class="sw-settings-country-currency-dependent-modal__inheritance-wrapper"> <label>{{ getCurrencyNameById(item.currencyId) }}</label> </div> </template> {% endblock %} {% block sw_settings_country_currency_dependent_grid_column_value %} <template #column-amount="{ item }"> <sw-number-field v-model:value="item.amount" class="sw-settings-country-currency-dependent-modal__input" :min="0" :disabled="(!item.enabled || !acl.can('country.editor')) || undefined" @update:value="reCalculatorInherited(item)" /> </template> {% endblock %} {% block sw_settings_country_currency_dependent_grid_column_is_base_currency %} <template #column-enabled="{ item }"> <sw-radio-field :value="checkBox" :name="radioButtonName" :options="[{ value: item.enabled }]" :disabled="!acl.can('country.editor') || undefined" @update:value="onChangeBaseCurrency(item)" /> </template> {% endblock %} {% block sw_settings_country_currency_dependent_column_actions %} <template #actions="{ item }"> {% block sw_settings_country_currency_dependent_grid_column_action_delete %} <sw-context-menu-item variant="danger" :disabled="(item.enabled || !acl.can('country.editor')) || undefined" @click="changeCurrencyDependentRow(item.currencyId, false)" > {{ $tc('global.default.delete') }} </sw-context-menu-item> {% endblock %} </template> {% endblock %} </sw-data-grid> {% endblock %} {% block sw_settings_country_currency_dependent_modal_footer %} <template #modal-footer> {% block sw_settings_country_currency_dependent_modal_close %} <sw-button class="sw-settings-country-currency-dependent-modal__cancel-button" size="small" :disabled="!acl.can('country.editor') || undefined" @click="closeModal" > {{ $tc('global.default.cancel') }} </sw-button> <sw-button class="sw-settings-country-currency-dependent-modal__save-button" variant="primary" size="small" :disabled="!acl.can('country.editor') || undefined" @click="saveModal" > {{ $tc('global.default.save') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> {% endblock %}`,s=Shopware.Utils,a={template:c,inject:["repositoryFactory","acl"],emits:["modal-close","modal-save","base-item-change"],props:{currencyDependsValue:{type:Array,required:!0},countryId:{type:String,required:!0},userConfig:{type:Object,required:!0},userConfigValues:{type:Object,required:!0},menuOptions:{type:Array,required:!0},taxFreeType:{type:String,required:!1,default:""},isLoading:{type:Boolean,required:!0}},data(){return{inputId:s.createId(),checkBox:!0,basedItem:{}}},computed:{currentUserId(){return Shopware.Store.get("session").currentUser.id},currencyTaxFreeDependentRepository(){return this.repositoryFactory.create("country_currency_tax_free_dependent_value")},radioButtonName(){return`sw-settings-country-currency-dependent-modal-boolean-radio-${this.inputId}`},countryCurrencyColumns(){return[{property:"currencyId",label:"",inlineEdit:"string",primary:!0},{property:"amount",label:this.$tc("sw-settings-country.detail.taxFreeFrom"),inlineEdit:"string",primary:!0},{property:"enabled",label:this.$tc("sw-settings-country.detail.baseCurrency"),inlineEdit:"string"}]}},methods:{closeModal(){this.$emit("modal-close")},saveModal(){this.createUserConfigValue(),this.closeModal(),this.$emit("modal-save")},changeCurrencyDependentRow(e,t){if(t){this.addCurrencyDependentRow(e);return}this.removeCurrencyDependentRow(e)},addCurrencyDependentRow(e){const t={amount:this.calculateInheritedPrice(e),enabled:!1,currencyId:e};this.currencyDependsValue.push(t)},removeCurrencyDependentRow(e){const t=this.currencyDependsValue.find(n=>n.currencyId===e);t&&(this.currencyDependsValue.splice(this.currencyDependsValue.indexOf(t),1),this.userConfigValues[this.taxFreeType]&&this.userConfigValues[this.taxFreeType].splice(this.userConfigValues[this.taxFreeType].indexOf(e),1),this.updateCheckBoxHamburgerMenu(e))},updateCheckBoxHamburgerMenu(e){this.menuOptions.forEach(t=>{t.id===e&&(t.checked=!1)})},onChangeBaseCurrency(e){e.enabled=!0,this.currencyDependsValue.forEach(t=>{t.enabled=t.currencyId===e.currencyId}),this.userConfigValues[this.taxFreeType]&&this.userConfigValues[this.taxFreeType].splice(this.userConfigValues[this.taxFreeType].indexOf(e.currencyId),1),this.menuOptions.forEach(t=>{t.disabled=t.id===e.currencyId}),this.checkBox=!0,this.basedItem=e,this.$emit("base-item-change",this.basedItem)},calculateInheritedPrice(e){const t=this.currencyDependsValue.find(n=>n.enabled===!0);return t?this.getPriceByCurrency(t,e):0},reCalculatorInherited(e){this.currencyDependsValue.forEach(t=>{t.enabled===!1&&(t.amount=this.getPriceByCurrency(e,t.currencyId))})},getPriceByCurrency(e,t){const n=this.getCurrencyById(t),r=this.getCurrencyById(e.currencyId);return!n.factor||!r.factor?0:e.amount/r.factor*n.factor},createUserConfigValue(){return this.userConfig.isNew()?this.createNewUserConfig():this.updateExistedValue()},createNewUserConfig(){this.userConfig.value={[this.countryId]:{[this.taxFreeType]:[]}},this.currencyDependsValue.forEach(e=>{e.enabled||this.userConfig.value[this.countryId][this.taxFreeType].push(e.currencyId)})},updateExistedValue(){let e=this.userConfigValues[this.taxFreeType];e||(this.userConfigValues[this.taxFreeType]=[],e=this.userConfigValues[this.taxFreeType]),this.currencyDependsValue.forEach(t=>{t.enabled||e.push(t.currencyId)}),this.userConfig.value[this.countryId][this.taxFreeType]=[...new Set(e)]},getCurrencyNameById(e){const t=this.menuOptions.find(n=>n.id===e);return(t==null?void 0:t.name)??""},getCurrencyById(e){return this.menuOptions.find(n=>n.id===e)||{}}}};export{a as default};
