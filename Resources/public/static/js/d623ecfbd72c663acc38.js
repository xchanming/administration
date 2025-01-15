(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[505],{952309:function(){},900505:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return u}});var d=t(592767);t(362648);let{Component:n,Context:a,Utils:o,Mixin:r}=Cicada,{mapState:s,mapGetters:l}=n.getComponentHelper(),{isEmpty:c}=o.types;var u={template:'\n{% block sw_product_detail_base %}\n<div class="sw-product-detail-base">\n    <template v-if="isLoading">\n        <sw-skeleton variant="detail-bold" />\n        <sw-skeleton />\n    </template>\n\n    <template v-else>\n        \n        {% block sw_product_detail_base_basic_info_card %}\n        <sw-card\n            v-show="showProductCard(\'general_information\')"\n            class="sw-product-detail-base__info"\n            position-identifier="sw-product-detail-base-info"\n            :title="$tc(\'sw-product.detailBase.cardTitleProductInfo\')"\n        >\n\n            \n            {% block sw_product_detail_base_basic_info_form %}\n            <sw-product-basic-form\n                :show-settings-information="showModeSetting"\n                :allow-edit="acl.can(\'product.editor\')"\n            />\n            {% endblock %}\n\n        </sw-card>\n        {% endblock %}\n\n        <sw-card\n            v-show="productStates.includes(\'is-download\')"\n            class="sw-product-detail-base__downloads"\n            :subtitle="$tc(\'sw-product.detailBase.cardSubtitleDownloads\')"\n            :is-loading="loading.product || loading.customFieldSets || loading.downloads"\n            position-identifier="sw-product-detail-base-downloads"\n        >\n            <template #title>\n                <div class="sw-card__title">\n                    {{ $tc(\'sw-product.detailBase.cardTitleDownloads\') }}\n                </div>\n            </template>\n\n            <sw-product-download-form\n                v-if="mediaFormVisible"\n                :product-id="product.id"\n                :label="$tc(\'sw-product.detailBase.downloadsLabel\')"\n                :disabled="!acl.can(\'product.editor\')"\n                required\n                @media-open="onOpenDownloadMediaModal"\n            />\n        </sw-card>\n\n        \n        {% block sw_product_detail_base_price_card %}\n        <sw-card\n            v-show="showProductCard(\'prices\')"\n            class="sw-product-detail-base__prices"\n            position-identifier="sw-product-detail-base-prices"\n            :title="$tc(\'sw-product.detailBase.cardTitlePrices\')"\n            :is-loading="loading.product"\n        >\n\n            \n            {% block sw_product_detail_base_price_form %}\n            <sw-product-price-form :allow-edit="acl.can(\'product.editor\')" />\n            {% endblock %}\n\n            \n            {% block sw_product_detail_base_advanced_prices_link %}\n            <sw-container\n                v-if="productId"\n                columns="1fr"\n                justify="end"\n            >\n\n                <router-link\n                    :to="{ name: \'sw.product.detail.prices\', params: { id: $route.params.id } }"\n                    class="sw-card__quick-link"\n                >\n                    {{ $tc(\'sw-product.detailBase.linkAdvancedPrices\') }} <sw-icon\n                        name="regular-long-arrow-right"\n                        small\n                    />\n                </router-link>\n            </sw-container>\n            {% endblock %}\n\n        </sw-card>\n        {% endblock %}\n\n        <template v-if="productStates.includes(\'is-download\')">\n            \n            {% block sw_product_detail_deliverability_downloadable_info_card %}\n            <sw-card\n                v-show="showProductCard(\'deliverability\')"\n                class="sw-product-detail-base__deliverability-downloadable"\n                position-identifier="sw-product-detail-base-deliverability-downloadable"\n                :title="$tc(\'sw-product.detailBase.cardTitleDeliverabilityInfo\')"\n            >\n                \n                {% block sw_product_detail_deliverability_downloadable_info_form %}\n                <sw-product-deliverability-downloadable-form :disabled="!acl.can(\'product.editor\')" />\n                {% endblock %}\n            </sw-card>\n            {% endblock %}\n        </template>\n\n        <template v-else>\n            \n            {% block sw_product_detail_deliverability_info_card %}\n            <sw-card\n                v-show="showProductCard(\'deliverability\')"\n                class="sw-product-detail-base__deliverability"\n                position-identifier="sw-product-detail-base-deliverability"\n                :title="$tc(\'sw-product.detailBase.cardTitleDeliverabilityInfo\')"\n            >\n                \n                {% block sw_product_detail_deliverability_info_form %}\n                <sw-product-deliverability-form :allow-edit="acl.can(\'product.editor\')" />\n                {% endblock %}\n            </sw-card>\n            {% endblock %}\n        </template>\n\n        \n        {% block sw_product_detail_base_category_card %}\n        <sw-card\n            v-show="showProductCard(\'visibility_structure\')"\n            class="sw-product-detail-base__visibility-structure"\n            position-identifier="sw-product-detail-base-visibility-structure"\n            :title="$tc(\'sw-product.detailBase.cardTitleAssignment\')"\n            :is-loading="loading.product"\n        >\n\n            \n            {% block sw_product_detail_base_category_form %}\n            <sw-product-category-form :allow-edit="acl.can(\'product.editor\')" />\n            {% endblock %}\n\n        </sw-card>\n        {% endblock %}\n\n        \n        {% block sw_product_detail_base_media %}\n        <sw-inherit-wrapper\n            v-show="showProductCard(\'media\')"\n            ref="productMediaInheritance"\n            v-model:value="product.media"\n            class="sw-product-detail-base__media"\n            :inherited-value="parentProduct.media"\n            :custom-restore-inheritance-function="mediaRestoreInheritanceFunction"\n            :custom-remove-inheritance-function="mediaRemoveInheritanceFunction"\n            is-association\n        >\n            <template #content="{ isInherited, isInheritField, restoreInheritance, removeInheritance }">\n\n                \n                {% block sw_product_detail_base_media_card %}\n                <sw-card\n                    :subtitle="$tc(\'sw-product.detailBase.cardSubtitleMedia\')"\n                    :is-loading="loading.product || loading.customFieldSets || loading.media"\n                    :class="{ \'sw-card__inherited\': isInherited }"\n                    position-identifier="sw-product-detail-base-media"\n                >\n                    <template #title>\n\n                        \n                        {% block sw_product_detail_base_media_card_title %}\n                        <div\n                            class="sw-card__title"\n                            :class="{ \'sw-card__title__inherited\': isInherited }"\n                        >\n                            <sw-inheritance-switch\n                                v-if="isInheritField"\n                                class="sw-inherit-wrapper__inheritance-icon"\n                                :is-inherited="isInherited"\n                                @inheritance-restore="restoreInheritance"\n                                @inheritance-remove="removeInheritance"\n                            />\n                            {# TODO: headline is not clickable yet #}\n                            {{ $tc(\'sw-product.detailBase.cardTitleMedia\') }}\n                        </div>\n                        {% endblock %}\n\n                    </template>\n\n                    \n                    {% block sw_product_detail_base_media_card_form %}\n                    <sw-product-media-form\n                        v-if="mediaFormVisible"\n                        :key="isInherited"\n                        :product-id="isInherited ? parentProduct.id : product.id"\n                        :is-inherited="isInherited"\n                        :disabled="isInherited || !acl.can(\'product.editor\')"\n                        @media-open="onOpenMediaModal"\n                    />\n                    {% endblock %}\n\n                </sw-card>\n                {% endblock %}\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_detail_base_media_modal %}\n        <sw-media-modal-v2\n            v-if="showMediaModal"\n            :initial-folder-id="mediaDefaultFolderId"\n            :entity-context="product.getEntityName()"\n            @media-modal-selection-change="onAddMedia"\n            @modal-close="onCloseMediaModal"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_detail_base_settings_card %}\n        <sw-card\n            v-show="showProductCard(\'labelling\')"\n            class="sw-product-detail-base__labelling-card"\n            position-identifier="sw-product-detail-base-labelling"\n            :title="$tc(\'sw-product.detailBase.cardTitleSettings\')"\n            :is-loading="loading.product"\n        >\n\n            \n            {% block sw_product_detail_base_settings_form %}\n            <sw-product-settings-form :allow-edit="acl.can(\'product.editor\')" />\n            {% endblock %}\n\n        </sw-card>\n        {% endblock %}\n\n    </template>\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],mixins:[r.getByName("notification")],props:{productId:{type:String,required:!1,default:null}},data(){return{showMediaModal:!1,mediaDefaultFolderId:null}},computed:{...s("swProductDetail",["product","parentProduct","customFieldSets","loading"]),...l("swProductDetail",["isLoading","showModeSetting","showProductCard","productStates"]),...s("swProductDetail",{}),mediaFormVisible(){return!this.loading.product&&!this.loading.parentProduct&&!this.loading.customFieldSets&&!this.loading.media},productMediaRepository(){return this.repositoryFactory.create(this.product.media.entity)},mediaDefaultFolderRepository(){return this.repositoryFactory.create("media_default_folder")},mediaDefaultFolderCriteria(){let e=new d.Z(1,1);return e.addAssociation("folder"),e.addFilter(d.Z.equals("entity","product")),e}},watch:{product(){}},created(){this.createdComponent()},methods:{createdComponent(){this.getMediaDefaultFolderId().then(e=>{this.mediaDefaultFolderId=e})},getMediaDefaultFolderId(){return this.mediaDefaultFolderRepository.search(this.mediaDefaultFolderCriteria,a.api).then(e=>{let i=e.first();return i.folder?.id?i.folder.id:null})},mediaRemoveInheritanceFunction(e){return e.forEach(({id:e,mediaId:i,position:t})=>{let d=this.productMediaRepository.create(a.api);Object.assign(d,{mediaId:i,position:t,productId:this.product.id}),this.parentProduct.coverId===e&&(this.product.coverId=d.id),this.product.media.push(d)}),this.$refs.productMediaInheritance.forceInheritanceRemove=!0,this.product.media},mediaRestoreInheritanceFunction(){return this.$refs.productMediaInheritance.forceInheritanceRemove=!1,this.product.coverId=null,this.product.media.getIds().forEach(e=>{this.product.media.remove(e)}),this.product.media},onOpenMediaModal(){this.showMediaModal=!0},onCloseMediaModal(){this.showMediaModal=!1},onOpenDownloadMediaModal(){this.showDownloadMediaModal=!0},onCloseDownloadMediaModal(){this.showDownloadMediaModal=!1},onAddMedia(e){c(e)||e.forEach(e=>{this.addMedia(e).catch(({fileName:e})=>{this.createNotificationError({message:this.$tc("sw-product.mediaForm.errorMediaItemDuplicated",0,{fileName:e})})})})},addMedia(e){if(this.isExistingMedia(e))return Promise.reject(e);let i=this.productMediaRepository.create(a.api);return i.mediaId=e.id,i.media={url:e.url,id:e.id},c(this.product.media)&&!this.isSpatial(i)&&this.setMediaAsCover(i),this.product.media.add(i),Promise.resolve()},isSpatial(e){return e.media?.fileExtension==="glb"||!!e.media?.url?.endsWith(".glb")},isExistingMedia(e){return this.product.media.some(({id:i,mediaId:t})=>i===e.id||t===e.id)},setMediaAsCover(e){e.position=0,this.product.coverId=e.id}}}},362648:function(e,i,t){var d=t(952309);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[e.id,d,""]]),d.locals&&(e.exports=d.locals),t(745346).Z("d23db5ba",d,!0,{})}}]);