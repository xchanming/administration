(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[54267],{717715:function(){},454267:function(t,n,o){"use strict";o.r(n),o.d(n,{default:function(){return a}}),o(161461);let{Mixin:i}=Cicada,{Criteria:e}=Cicada.Data;var a={template:'\n{% block sw_promotion_v2_list %}\n<sw-page class="sw-promotion-v2-list">\n\n    \n    {% block sw_promotion_v2_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="promotion"\n            :placeholder="$tc(\'sw-promotion-v2.list.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_list_smart_bar_header %}\n    <template #smart-bar-header>\n\n        \n        {% block sw_promotion_v2_list_smart_bar_header_title %}\n        <h2>\n\n            \n            {% block sw_promotion_v2_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-promotion-v2.list.textTitle\') }}\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n\n        </h2>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_promotion_v2_list_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip="addButtonTooltip"\n            class="sw-promotion-v2-list__smart-bar-button-add"\n            variant="primary"\n            :router-link="{ name: \'sw.promotion.v2.create\' }"\n            :disabled="!acl.can(\'promotion.creator\') || undefined"\n        >\n            {{ $tc(\'sw-promotion-v2.list.buttonAddPromotion\') }}\n        </sw-button>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_list_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_list_content %}\n    <template #content>\n        <div class="sw-promotion-v2-list__content">\n\n            \n            {% block sw_promotion_v2_list_grid %}\n            <sw-entity-listing\n                v-if="entitySearchable"\n                :repository="promotionRepository"\n                :columns="promotionColumns"\n                :items="promotions"\n                detail-route="sw.promotion.v2.detail"\n                :is-loading="isLoading"\n                :allow-inline-edit="acl.can(\'promotion.editor\') || undefined"\n                :show-selection="acl.can(\'promotion.deleter\') || undefined"\n                :allow-edit="acl.can(\'promotion.editor\') || undefined"\n                :allow-view="acl.can(\'promotion.viewer\') || undefined"\n                allow-column-edit\n                full-page\n                @update-records="updateTotal"\n                @selection-change="updateSelection"\n            >\n\n                \n                {% block sw_promotion_v2_list_grid_columns %}\n                \n                {% block sw_promotion_v2_list_grid_columns_active %}\n                <template #column-active="{ item }">\n                    <sw-icon\n                        v-if="item.active"\n                        class="sw-promotion-v2-list__icon-activity is--active"\n                        name="regular-checkmark-xs"\n                    />\n                    <sw-icon\n                        v-else\n                        class="sw-promotion-v2-list__icon-activity is--inactive"\n                        name="regular-times-s"\n                    />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_list_grid_columns_valid_from %}\n                <template #column-validFrom="{ item }">\n                    {{ dateFilter(item.validFrom, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_list_grid_columns_valid_until %}\n                <template #column-validUntil="{ item }">\n                    {{ dateFilter(item.validUntil, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n                </template>\n                {% endblock %}\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_list_grid_columns_actions %}\n                <template #more-actions="{ item }">\n                    {% block sw_promotion_v2_list_grid_columns_actions_duplicate %}\n                    <sw-context-menu-item\n                        :disabled="!acl.can(\'promotion.creator\')"\n                        @click="onDuplicatePromotion(item)"\n                    >\n                        {{ $tc(\'global.default.duplicate\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n\n                \n                {% block sw_promotion_v2_list_grid_columns_actions_delete %}\n                <template #delete-action="{ item, showDelete }">\n                    <sw-context-menu-item\n                        variant="danger"\n                        :disabled="(item && item.orderCount > 0) || !acl.can(\'promotion.deleter\') || undefined"\n                        @click="showDelete(item.id)"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </sw-context-menu-item>\n                </template>\n                {% endblock %}\n                {% endblock %}\n\n            </sw-entity-listing>\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_list_empty_state %}\n            <template v-if="!isLoading && !total">\n                <sw-promotion-v2-empty-state-hero\n                    v-if="isValidTerm(term)"\n                    :title="$tc(\'sw-empty-state.messageNoResultTitle\')"\n                    :description="$tc(\'sw-empty-state.messageNoResultSubline\')"\n                />\n                <sw-promotion-v2-empty-state-hero\n                    v-else\n                    :title="$tc(\'sw-promotion-v2.list.titleEmpty\')"\n                    :description="$tc(\'sw-promotion-v2.list.descriptionEmpty\')"\n                >\n\n                    \n                    {% block sw_promotion_v2_list_empty_state_actions %}\n                    <template #actions>\n                        <sw-button\n                            v-tooltip="addButtonTooltip"\n                            class="sw-promotion-v2-list__empty-state-button-add"\n                            variant="primary"\n                            :router-link="{ name: \'sw.promotion.v2.create\' }"\n                            :disabled="!acl.can(\'promotion.creator\') || undefined"\n                        >\n                            {{ $tc(\'sw-promotion-v2.list.buttonAddPromotion\') }}\n                        </sw-button>\n                    </template>\n                    {% endblock %}\n\n                </sw-promotion-v2-empty-state-hero>\n            </template>\n            {% endblock %}\n\n        </div>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_list_sidebar %}\n    <template #sidebar>\n        <sw-sidebar>\n\n            \n            {% block sw_promotion_v2_list_sidebar_refresh %}\n            <sw-sidebar-item\n                icon="regular-undo"\n                :title="$tc(\'sw-promotion-v2.list.titleSidebarItemRefresh\')"\n                @click="onRefresh"\n            />\n            {% endblock %}\n\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],mixins:[i.getByName("listing"),i.getByName("notification")],data(){return{isLoading:!0,promotions:null,total:0,showDeleteModal:!1,sortBy:"createdAt",sortDirection:"DESC",searchConfigEntity:"promotion"}},metaInfo(){return{title:this.$createTitle()}},computed:{promotionRepository(){return this.repositoryFactory.create("promotion")},promotionCriteria(){return new e(this.page,this.limit).setTerm(this.term).addSorting(e.sort(this.sortBy,this.sortDirection))},promotionColumns(){return this.getPromotionColumns()},addButtonTooltip(){return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("promotion.creator"),showOnDisabledElements:!0,position:"bottom"}},dateFilter(){return Cicada.Filter.getByName("date")}},methods:{async getList(){this.isLoading=!0;let t=await this.addQueryScores(this.term,this.promotionCriteria);return this.entitySearchable?this.promotionRepository.search(t).then(t=>(this.isLoading=!1,this.total=t.total,this.promotions=t,this.promotions)):(this.isLoading=!1,this.total=0,!1)},onChangeLanguage(){this.getList()},getPromotionColumns(){return[{property:"name",label:"sw-promotion-v2.list.columnName",routerLink:"sw.promotion.v2.detail",inlineEdit:"string",allowResize:!0,primary:!0},{property:"active",label:"sw-promotion-v2.list.columnActive",inlineEdit:"boolean",allowResize:!0,align:"center"},{property:"validFrom",label:"sw-promotion-v2.list.columnValidFrom",inlineEdit:"date",allowResize:!0,align:"center"},{property:"validUntil",label:"sw-promotion-v2.list.columnValidUntil",inlineEdit:"date",allowResize:!0,align:"center"}]},updateTotal({total:t}){this.total=t},async onDuplicatePromotion(t){this.isLoading=!0;try{let n={overwrites:{name:`${t.name} ${this.$tc("global.default.copy")}`,code:null,useCodes:!1,useIndividualCodes:!1,individualCodePattern:"",individualCodes:null,active:!1}},o=await this.promotionRepository.clone(t.id,n,Cicada.Context.api);this.$nextTick(()=>{this.$router.push({name:"sw.promotion.v2.detail",params:{id:o.id}})}),this.createNotificationInfo({message:this.$tc("sw-promotion-v2.list.duplicatePromotionInfo")})}catch(t){throw Error(t)}finally{this.isLoading=!1}}}}},161461:function(t,n,o){var i=o(717715);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),o(745346).Z("293500d2",i,!0,{})}}]);