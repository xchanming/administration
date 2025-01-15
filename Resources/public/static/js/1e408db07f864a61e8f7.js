(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[71309],{187524:function(){},471309:function(o,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}}),t(920867);let{Criteria:e}=Cicada.Data;var i={template:'\n{% block sw_promotion_v2_cart_condition_form %}\n<div class="sw-promotion-v2-cart-condition-form">\n\n    \n    {% block sw_promotion_v2_cart_condition_form_rules_field %}\n    <sw-promotion-v2-rule-select\n        v-if="promotion"\n        v-model:collection="promotion.cartRules"\n        class="sw-promotion-v2-cart-condition-form__rule-select-cart"\n        :local-mode="promotion.isNew()"\n        :criteria="ruleFilter"\n        :label="$tc(\'sw-promotion-v2.detail.conditions.preConditions.labelCartConditionSelect\')"\n        :placeholder="$tc(\'sw-promotion-v2.detail.conditions.preConditions.placeholderCartConditionSelect\')"\n        :rule-scope="[\'checkout\', \'global\', \'lineItem\']"\n        rule-aware-group-key="cartPromotions"\n        :disabled="isEditingDisabled"\n    />\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_cart_condition_form_use_setgroups_field %}\n    <sw-switch-field\n        v-model:value="promotion.useSetGroups"\n        class="sw-promotion-v2-cart-condition-form__use-setgroups"\n        :disabled="!acl.can(\'promotion.editor\')"\n        :label="$tc(\'sw-promotion-v2.detail.conditions.setgroups.switchGroupsEnabled\')"\n    />\n    {% endblock %}\n\n    <template v-if="promotion.useSetGroups">\n\n        \n        {% block sw_promotion_v2_cart_condition_setgroup_card %}\n        <sw-card\n            v-for="(group, index) in promotion.setgroups"\n            :id="`sw-promotion-v2-cart-condition-form__setgroup-card-${index + 1}`"\n            :key="group.id"\n            position-identifier="sw-promotion-cart-condition-setgroup"\n            class="sw-promotion-v2-cart-condition-form__setgroup-card"\n        >\n\n            \n            {% block sw_promotion_v2_cart_condition_setgroup_card_context_action %}\n            <template #context-actions>\n\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_card_context_action_duplicate %}\n                <sw-context-menu-item\n                    :disabled="isEditingDisabled"\n                    @click="duplicateSetGroup(group)"\n                >\n                    {{ $tc(\'global.default.duplicate\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_card_context_action_delete %}\n                <sw-context-menu-item\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'promotion.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    variant="danger"\n                    :disabled="isEditingDisabled"\n                    @click="deleteSetGroup(group)"\n                >\n                    {{ $tc(\'global.default.delete\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_cart_condition_setgroup_card_title %}\n            <div class="sw-promotion-v2-cart-condition-form__setgroup-card-title">\n                {{ $tc(\'sw-promotion-v2.detail.conditions.setgroups.titleName\') }} {{ index + 1 }}\n            </div>\n            {% endblock %}\n\n            <sw-container\n                columns="1fr 1fr"\n                gap="0px 30px"\n            >\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_mode_field %}\n                <sw-select-field\n                    v-model:value="group.packagerKey"\n                    class="sw-promotion-v2-cart-condition-form__setgroup-mode"\n                    :label="$tc(\'sw-promotion-v2.detail.conditions.setgroups.labelMode\')"\n                    :disabled="isEditingDisabled"\n                >\n                    <option\n                        v-for="packager in packagers"\n                        :key="packager.key"\n                        :value="packager.key"\n                    >\n                        {{ packager.name }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_value_field %}\n                <sw-number-field\n                    v-model:value="group.value"\n                    class="sw-promotion-v2-cart-condition-form__setgroup-value"\n                    :label="$tc(\'sw-promotion-v2.detail.conditions.setgroups.labelValue\')"\n                    :disabled="isEditingDisabled"\n                />\n                {% endblock %}\n\n            </sw-container>\n\n            <sw-container\n                columns="1fr 1fr"\n                gap="0px 30px"\n            >\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_sorting_field %}\n                <sw-select-field\n                    v-model:value="group.sorterKey"\n                    class="sw-promotion-v2-cart-condition-form__setgroup-sorting"\n                    :label="$tc(\'sw-promotion-v2.detail.conditions.setgroups.labelSorting\')"\n                    :disabled="isEditingDisabled"\n                >\n                    <option\n                        v-for="sorter in sorters"\n                        :key="sorter.key"\n                        :value="sorter.key"\n                    >\n                        {{ sorter.name }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n\n            </sw-container>\n\n            <sw-container\n                columns="1fr"\n                gap="0px 30px"\n            >\n\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_rules_field %}\n                <sw-promotion-v2-rule-select\n                    v-model:collection="group.setGroupRules"\n                    class="sw-promotion-v2-cart-condition-form__setgroup-rules"\n                    :label="$tc(\'sw-promotion-v2.detail.conditions.setgroups.labelRules\')"\n                    :placeholder="$tc(\'sw-promotion-v2.detail.conditions.setgroups.placeholder\')"\n                    :criteria="ruleFilter"\n                    :rule-scope="[\'checkout\', \'global\', \'lineItem\']"\n                    :disabled="isEditingDisabled"\n                    rule-aware-group-key="promotionSetGroups"\n                />\n                {% endblock %}\n\n            </sw-container>\n        </sw-card>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_cart_condition_add_group_button %}\n        <div class="sw-promotion-v2-cart-condition-form__add-group-button-container">\n            <sw-button\n                variant="ghost"\n                class="sw-promotion-v2-cart-condition-form__add-group-button"\n                :disabled="isEditingDisabled"\n                @click="addSetGroup"\n            >\n                {{ $tc(\'sw-promotion-v2.detail.conditions.setgroups.buttonAddGroup\') }}\n            </sw-button>\n        </div>\n        {% endblock %}\n\n    </template>\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl","promotionSyncService","feature"],props:{promotion:{type:Object,required:!1,default:null},restrictedRules:{type:Array,required:!1,default(){return[]}}},data(){return{packagerKeys:[],sorterKeys:[]}},computed:{promotionGroupRepository(){return this.repositoryFactory.create("promotion_setgroup")},ruleFilter(){let o=new e(1,25);return o.addAssociation("conditions").addSorting(e.sort("name","ASC",!1)),o},packagers(){let o=[];return this.packagerKeys.forEach(n=>{o.push({key:n,name:this.$tc(`sw-promotion-v2.detail.conditions.setgroups.packager.${n}`)})}),o},sorters(){let o=[];return this.sorterKeys.forEach(n=>{o.push({key:n,name:this.$tc(`sw-promotion-v2.detail.conditions.setgroups.sorter.${n}`)})}),o},isEditingDisabled(){return null===this.promotion||!this.acl.can("promotion.editor")}},watch:{promotion(){this.loadSetGroups()}},created(){this.createdComponent()},methods:{createdComponent(){this.promotion&&this.loadSetGroups(),this.promotionSyncService.loadPackagers().then(o=>{this.packagerKeys=o}),this.promotionSyncService.loadSorters().then(o=>{this.sorterKeys=o})},loadSetGroups(){let o=new e(1,25);o.addFilter(e.equals("promotionId",this.promotion.id)),this.promotionGroupRepository.search(o).then(o=>{this.promotion.setgroups=o})},addSetGroup(){let o=this.promotionGroupRepository.create();o.promotionId=this.promotion.id,o.value=2,o.packagerKey="COUNT",o.sorterKey="PRICE_ASC",this.promotion.setgroups.push(o)},duplicateSetGroup(o){let n=this.promotionGroupRepository.create();n.promotionId=o.promotionId,n.value=o.value,n.packagerKey=o.packagerKey,n.sorterKey=o.sorterKey,this.promotion.setgroups.push(n)},deleteSetGroup(o){let n=Cicada.State.get("swPromotionDetail").setGroupIdsDelete;n.push(o.id),Cicada.State.commit("swPromotionDetail/setSetGroupIdsDelete",n),this.promotion.setgroups=this.promotion.setgroups.filter(n=>n.id!==o.id)}}}},920867:function(o,n,t){var e=t(187524);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.id,e,""]]),e.locals&&(o.exports=e.locals),t(745346).Z("35f65b82",e,!0,{})}}]);