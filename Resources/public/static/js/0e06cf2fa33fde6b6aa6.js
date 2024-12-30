(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[57203],{570214:function(){},857203:function(t,e,l){"use strict";l.r(e),l.d(e,{default:function(){return s}}),l(78937);let{Mixin:n,Data:{Criteria:a}}=Cicada;var s=Cicada.Component.wrapComponentConfig({template:'<sw-card\n    class="sw-flow-list-flow-templates-card"\n    position-identifier="sw-flow-list-flow-templates-card"\n>\n    <div class="sw-flow-list-my-templates">\n        <div class="sw-flow-list-my-templates__content">\n            <sw-entity-listing\n                v-if="total"\n                class="sw-flow-list-my-templates__grid"\n                :show-settings="false"\n                :allow-column-edit="false"\n                :allow-view="false"\n                :allow-edit="false"\n                :allow-delete="false"\n                :allow-bulk-edit="false"\n                :columns="flowTemplateColumns"\n                :sort-by="sortBy"\n                :sort-direction="sortDirection"\n                :repository="flowTemplateRepository"\n                :items="flowTemplates"\n                :is-loading="isLoading"\n                :full-page="false"\n                :show-selection="false"\n                :show-actions="false"\n                :plain-appearance="true"\n                @column-sort="onSortColumn"\n                @page-change="onPageChange"\n            >\n                <template #column-name="{ item }">\n                    <a\n                        class="sw-flow-list-my-flows__content__update-flow-template-link"\n                        role="link"\n                        tabindex="0"\n                        @click="onEditFlow(item)"\n                        @keydown.enter="onEditFlow(item)"\n                    >\n                        {{ item.name }}\n                    </a>\n                </template>\n\n                <template #column-createFlow="{ item }">\n                    \n                    <sw-internal-link\n                        :router-link="{ name: \'sw.flow.create\', params: { flowTemplateId: item.id }}"\n                        :disabled="!acl.can(\'flow.creator\')"\n                        class="sw-flow-list-my-flows__content__create-flow-link"\n                    >\n                        {{ $tc(\'sw-flow.template.create\') }}\n                    </sw-internal-link>\n                </template>\n            </sw-entity-listing>\n\n            <sw-empty-state\n                v-else\n                class="sw-flow-list-my_templates__empty-state"\n                :title="$tc(\'sw-flow.list.emptyStateTitle\')"\n                :subline="$tc(\'sw-flow.list.emptyStateSubTitle\')"\n            >\n                <template #icon>\n                    <img\n                        :alt="$tc(\'sw-flow.list.emptyStateTitle\')"\n                        :src="assetFilter(\'/administration/static/img/empty-states/settings-empty-state.svg\')"\n                    >\n                </template>\n            </sw-empty-state>\n        </div>\n    </div>\n</sw-card>\n',compatConfig:Cicada.compatConfig,inject:["acl","repositoryFactory"],mixins:[n.getByName("listing")],props:{searchTerm:{type:String,required:!1,default:""}},data(){return{sortBy:"createdAt",sortDirection:"DESC",total:0,isLoading:!1,flowTemplates:[]}},metaInfo(){return{title:this.$createTitle()}},computed:{flowTemplateRepository(){return this.repositoryFactory.create("flow_template")},flowTemplateCriteria(){let t=new a(1,25);return this.searchTerm&&t.setTerm(this.searchTerm),t.addSorting(a.sort(this.sortBy,this.sortDirection)).addSorting(a.sort("updatedAt","DESC")),t},flowTemplateColumns(){return[{property:"name",dataIndex:"name",label:this.$tc("sw-flow.list.labelColumnName"),allowResize:!1,align:"left"},{property:"config.description",label:this.$tc("sw-flow.list.labelColumnDescription"),allowResize:!1,sortable:!1,align:"left"},{property:"createFlow",label:"",allowResize:!1,sortable:!1,align:"right"}]},assetFilter(){return Cicada.Filter.getByName("asset")}},watch:{searchTerm:{immediate:!0,handler(t){this.onSearch(t)}}},created(){this.createComponent()},methods:{createComponent(){this.getList()},getList(){this.isLoading=!0,this.flowTemplateRepository.search(this.flowTemplateCriteria).then(t=>{this.total=t.total,this.flowTemplates=t}).finally(()=>{this.isLoading=!1})},onEditFlow(t){t?.id&&this.$router.push({name:"sw.flow.detail",params:{id:t.id},query:{type:"template"}})}}})},78937:function(t,e,l){var n=l(570214);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),l(745346).Z("346f7487",n,!0,{})}}]);