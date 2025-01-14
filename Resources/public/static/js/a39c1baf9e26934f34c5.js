(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[49915],{919827:function(){},149915:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var s=n(207694);n(855936);let{Utils:a}=Cicada,i="SwCategories";var o=Cicada.Component.wrapComponentConfig({template:'<div class="sw-category-detail-custom-entity">\n    <template v-if="category">\n        <sw-card\n            v-if="!Array.isArray(customEntityAssignments)"\n            :title="$tc(\'sw-category.base.customEntity.cardTitle\')"\n            position-identifier="category-detail-custom-entity"\n            class="sw-category-detail-custom-entity__selection-container"\n        >\n            <sw-entity-single-select\n                class="sw-category-detail-custom-entity__assignment"\n                :value="category.customEntityTypeId"\n                :label="$tc(\'sw-category.base.customEntity.assignment.label\')"\n                :help-text="$tc(\'sw-category.base.customEntity.assignment.helpText\')"\n                :disabled="!acl.can(\'category.editor\')"\n                :criteria="customEntityCriteria"\n                entity="custom_entity"\n                required\n                @update:value="onEntityChange"\n            />\n        </sw-card>\n\n        <sw-many-to-many-assignment-card\n            v-else\n            :entity-collection="customEntityAssignments"\n            :title="$tc(\'sw-category.base.customEntity.cardTitle\')"\n            :columns="customEntityColumns"\n            :local-mode="category.isNew()"\n            label-property="cmsAwareTitle"\n            :criteria="sortingCriteria"\n            :select-label="$tc(\'sw-category.base.customEntity.instanceAssignment.label\')"\n            :placeholder="$tc(\'sw-category.base.customEntity.instanceAssignment.placeholder\')"\n            @update:entity-collection="onAssignmentChange"\n        >\n            <template #prepend-select>\n                <sw-entity-single-select\n                    class="sw-category-detail-custom-entity__assignment"\n                    :value="category.customEntityTypeId"\n                    :label="$tc(\'sw-category.base.customEntity.assignment.label\')"\n                    :help-text="$tc(\'sw-category.base.customEntity.assignment.helpText\')"\n                    :disabled="!acl.can(\'category.editor\')"\n                    :criteria="customEntityCriteria"\n                    entity="custom_entity"\n                    required\n                    @update:value="onEntityChange"\n                />\n            </template>\n\n            <template #empty-state>\n                <sw-empty-state\n                    :title="$tc(\'sw-category.base.customEntity.instanceAssignment.emptyState.title\')"\n                    :absolute="false"\n                >\n                    <template #icon>\n                        <img\n                            :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                            alt="$tc(\'sw-category.base.customEntity.instanceAssignment.emptyState.title\')"\n                        >\n                    </template>\n                </sw-empty-state>\n            </template>\n        </sw-many-to-many-assignment-card>\n    </template>\n</div>\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],data(){return{categoryCustomEntityProperty:""}},props:{isLoading:{type:Boolean,required:!1,default:!1}},computed:{customEntityAssignments(){return this.category?.extensions?.[`${this.categoryCustomEntityProperty}${i}`]},customEntityColumns(){return[{dataIndex:"cmsAwareTitle",property:"cmsAwareTitle",label:this.$tc("sw-category.base.customEntity.instanceAssignment.title")}]},category(){return Cicada.State.get("swCategoryDetail").category},customEntityCriteria(){return new s.Z(1,10).addFilter(s.Z.contains("flags","cms-aware"))},sortingCriteria(){return new s.Z(1,10).addSorting(s.Z.sort("cmsAwareTitle","ASC"))},assetFilter(){return Cicada.Filter.getByName("asset")}},created(){this.fetchCustomEntityName()},methods:{onAssignmentChange(t){let e=this.category?.extensions;e&&(e[`${this.categoryCustomEntityProperty}${i}`]=t)},onEntityChange(t,e){this.category&&(this.category.customEntityTypeId=t,this.categoryCustomEntityProperty=a.string.camelCase(e?.name??""))},async fetchCustomEntityName(){if(!this.category?.customEntityTypeId)return;let t=this.repositoryFactory.create("custom_entity"),e=await t.get(this.category.customEntityTypeId);e&&(this.categoryCustomEntityProperty=a.string.camelCase(e.name))}}})},855936:function(t,e,n){var s=n(919827);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),n(745346).Z("04d9f07e",s,!0,{})}}]);