"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[62515],{362515:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});let{Component:i,Mixin:t}=Cicada,{CicadaError:l}=Cicada.Classes,{mapState:o}=i.getComponentHelper();var d={template:'\n{% block sw_flow_affiliate_and_campaign_code_modal %}\n<sw-modal\n    class="sw-flow-affiliate-and-campaign-code-modal"\n    :title="$tc(\'sw-flow.modals.affiliateAndCampaignCode.title\')"\n    :closable="false"\n    @modal-close="onClose"\n>\n    \n    {% block sw_flow_affiliate_and_campaign_code_modal_content %}\n    <div class="sw-flow-affiliate-and-campaign-code-modal__content">\n        \n        {% block sw_flow_affiliate_and_campaign_code_modal_entity %}\n        <sw-single-select\n            v-model:value="entity"\n            name="sw-field--entity"\n            class="sw-flow-affiliate-and-campaign-code-modal__entity"\n            required\n            show-clearable-button\n            :label="$tc(\'sw-flow.modals.affiliateAndCampaignCode.labelEntity\')"\n            :placeholder="$tc(\'sw-flow.modals.affiliateAndCampaignCode.placeholderEntity\')"\n            :error="entityError"\n            :options="entityOptions"\n        />\n        {% endblock %}\n\n        <sw-container\n            columns="3fr 1fr"\n            gap="16px"\n        >\n            \n            {% block sw_flow_affiliate_and_campaign_code_modal_affiliate_code %}\n            <sw-text-field\n                v-model:value="affiliateCode.value"\n                name="sw-field--affiliateCode-value"\n                class="sw-flow-affiliate-and-campaign-code-modal__affiliate-code"\n                :label="$tc(\'sw-flow.modals.affiliateAndCampaignCode.labelAffiliateCode\')"\n                :placeholder="$tc(\'sw-flow.modals.affiliateAndCampaignCode.placeholderAffiliateCode\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_flow_affiliate_and_campaign_code_modal_affiliate_code_overwrite %}\n            <sw-switch-field\n                v-model:value="affiliateCode.upsert"\n                name="sw-field--affiliateCode-upsert"\n                class="sw-flow-affiliate-and-campaign-code-modal__affiliate-code-overwrite"\n                :label="$tc(\'sw-flow.modals.affiliateAndCampaignCode.overwrite\')"\n            />\n            {% endblock %}\n        </sw-container>\n\n        <sw-container\n            columns="3fr 1fr"\n            gap="16px"\n        >\n            \n            {% block sw_flow_affiliate_and_campaign_code_modal_campaign_code %}\n            <sw-text-field\n                v-model:value="campaignCode.value"\n                name="sw-field--campaignCode-value"\n                class="sw-flow-affiliate-and-campaign-code-modal__campaign-code"\n                :label="$tc(\'sw-flow.modals.affiliateAndCampaignCode.labelCampaignCode\')"\n                :placeholder="$tc(\'sw-flow.modals.affiliateAndCampaignCode.placeholderCampaignCode\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_flow_affiliate_and_campaign_code_modal_campaign_code_overwrite %}\n            <sw-switch-field\n                v-model:value="campaignCode.upsert"\n                name="sw-field--campaignCode-upsert"\n                class="sw-flow-affiliate-and-campaign-code-modal__campaign-code-overwrite"\n                :label="$tc(\'sw-flow.modals.affiliateAndCampaignCode.overwrite\')"\n            />\n            {% endblock %}\n        </sw-container>\n    </div>\n    {% endblock %}\n\n    <template #modal-footer>\n        \n        {% block sw_flow_affiliate_and_campaign_code_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-affiliate-and-campaign-code-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_affiliate_and_campaign_code_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-affiliate-and-campaign-code-modal__save-button"\n            variant="primary"\n            size="small"\n            @click="onSave"\n        >\n            {{ sequence.id ? $tc(\'sw-flow.modals.buttonSaveAction\') : $tc(\'sw-flow.modals.buttonAddAction\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n</sw-modal>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["flowBuilderService"],emits:["process-finish","modal-close"],mixins:[t.getByName("placeholder"),t.getByName("notification")],props:{sequence:{type:Object,required:!0},action:{type:String,required:!1,default:null}},data(){return{entityError:null,entity:null,affiliateCode:{value:null,upsert:!1},campaignCode:{value:null,upsert:!1}}},computed:{entityOptions(){if(!this.triggerEvent)return[];let e=this.triggerEvent.aware??[];return this.flowBuilderService.getAvailableEntities(this.action,this.triggerActions,e,[])},...o("swFlowState",["triggerEvent","triggerActions"])},watch:{entity(e){e&&this.entityError&&(this.entityError=null)}},created(){this.createdComponent()},methods:{createdComponent(){let e=this.flowBuilderService.getEntityNameByAction(this.action);this.entityOptions.length&&(this.entity=this.entityOptions.find(a=>a.value===e)?.value||this.entityOptions[0].value),this.sequence.config&&(this.entity=this.sequence.config.entity,this.affiliateCode={...this.sequence.config.affiliateCode},this.campaignCode={...this.sequence.config.campaignCode})},fieldError(e){return e&&e.length?null:new l({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})},onSave(){if(this.entityError=this.fieldError(this.entity),this.entityError)return;let e={entity:this.entity,affiliateCode:this.affiliateCode,campaignCode:this.campaignCode},a={...this.sequence,config:e};this.$emit("process-finish",a),this.onClose()},onClose(){this.$emit("modal-close")}}}}}]);