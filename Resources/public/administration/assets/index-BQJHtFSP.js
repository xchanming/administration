import{C as r}from"./channel-Cvr-E4M4.js";const l=`{% block sw_product_detail_base %} <div class="sw-product-detail-base"> <template v-if="isLoading"> <sw-skeleton variant="detail-bold" /> <sw-skeleton /> </template> <template v-else> {% block sw_product_detail_base_basic_info_card %} <sw-card v-show="showProductCard('general_information')" class="sw-product-detail-base__info" position-identifier="sw-product-detail-base-info" :title="$tc('sw-product.detailBase.cardTitleProductInfo')" > {% block sw_product_detail_base_basic_info_form %} <sw-product-basic-form :show-settings-information="showModeSetting" :allow-edit="acl.can('product.editor')" /> {% endblock %} </sw-card> {% endblock %} <mt-card v-if="productStates.includes('is-download')" class="sw-product-detail-base__downloads" :subtitle="$tc('sw-product.detailBase.cardSubtitleDownloads')" :is-loading="loading.product || loading.customFieldSets || loading.downloads" position-identifier="sw-product-detail-base-downloads" > <template #title> <div class="sw-card__title"> {{ $tc('sw-product.detailBase.cardTitleDownloads') }} </div> </template> <sw-product-download-form v-if="mediaFormVisible" :product-id="product.id" :label="$tc('sw-product.detailBase.downloadsLabel')" :disabled="!acl.can('product.editor')" required @media-open="onOpenDownloadMediaModal" /> </mt-card> {% block sw_product_detail_base_price_card %} <sw-card v-show="showProductCard('prices')" class="sw-product-detail-base__prices" position-identifier="sw-product-detail-base-prices" :title="$tc('sw-product.detailBase.cardTitlePrices')" :is-loading="loading.product" > {% block sw_product_detail_base_price_form %} <sw-product-price-form :allow-edit="acl.can('product.editor')" /> {% endblock %} {% block sw_product_detail_base_advanced_prices_link %} <sw-container v-if="productId" columns="1fr" justify="end" > <router-link :to="{ name: 'sw.product.detail.prices', params: { id: $route.params.id } }" class="sw-card__quick-link" > {{ $tc('sw-product.detailBase.linkAdvancedPrices') }} <sw-icon name="regular-long-arrow-right" small /> </router-link> </sw-container> {% endblock %} </sw-card> {% endblock %} <template v-if="productStates.includes('is-download')"> {% block sw_product_detail_deliverability_downloadable_info_card %} <sw-card v-show="showProductCard('deliverability')" class="sw-product-detail-base__deliverability-downloadable" position-identifier="sw-product-detail-base-deliverability-downloadable" :title="$tc('sw-product.detailBase.cardTitleDeliverabilityInfo')" > {% block sw_product_detail_deliverability_downloadable_info_form %} <sw-product-deliverability-downloadable-form :disabled="!acl.can('product.editor')" /> {% endblock %} </sw-card> {% endblock %} </template> <template v-else> {% block sw_product_detail_deliverability_info_card %} <sw-card v-show="showProductCard('deliverability')" class="sw-product-detail-base__deliverability" position-identifier="sw-product-detail-base-deliverability" :title="$tc('sw-product.detailBase.cardTitleDeliverabilityInfo')" > {% block sw_product_detail_deliverability_info_form %} <sw-product-deliverability-form :allow-edit="acl.can('product.editor')" /> {% endblock %} </sw-card> {% endblock %} </template> {% block sw_product_detail_base_category_card %} <sw-card v-show="showProductCard('visibility_structure')" class="sw-product-detail-base__visibility-structure" position-identifier="sw-product-detail-base-visibility-structure" :title="$tc('sw-product.detailBase.cardTitleAssignment')" :is-loading="loading.product" > {% block sw_product_detail_base_category_form %} <sw-product-category-form :allow-edit="acl.can('product.editor')" /> {% endblock %} </sw-card> {% endblock %} {% block sw_product_detail_base_media %} <sw-inherit-wrapper v-show="showProductCard('media')" ref="productMediaInheritance" v-model:value="product.media" class="sw-product-detail-base__media" :inherited-value="parentProduct.media" :custom-restore-inheritance-function="mediaRestoreInheritanceFunction" :custom-remove-inheritance-function="mediaRemoveInheritanceFunction" is-association > <template #content="{ isInherited, isInheritField, restoreInheritance, removeInheritance }"> {% block sw_product_detail_base_media_card %} <sw-card :subtitle="$tc('sw-product.detailBase.cardSubtitleMedia')" :is-loading="loading.product || loading.customFieldSets || loading.media" :class="{ 'sw-card__inherited': isInherited }" position-identifier="sw-product-detail-base-media" > <template #title> {% block sw_product_detail_base_media_card_title %} <div class="sw-card__title" :class="{ 'sw-card__title__inherited': isInherited }" > <sw-inheritance-switch v-if="isInheritField" class="sw-inherit-wrapper__inheritance-icon" :is-inherited="isInherited" @inheritance-restore="restoreInheritance" @inheritance-remove="removeInheritance" /> {# TODO: headline is not clickable yet #} {{ $tc('sw-product.detailBase.cardTitleMedia') }} </div> {% endblock %} </template> {% block sw_product_detail_base_media_card_form %} <sw-product-media-form v-if="mediaFormVisible" :key="isInherited" :product-id="isInherited ? parentProduct.id : product.id" :is-inherited="isInherited" :disabled="isInherited || !acl.can('product.editor')" @media-open="onOpenMediaModal" /> {% endblock %} </sw-card> {% endblock %} </template> </sw-inherit-wrapper> {% endblock %} {% block sw_product_detail_base_media_modal %} <sw-media-modal-v2 v-if="showMediaModal" :initial-folder-id="mediaDefaultFolderId" :entity-context="product.getEntityName()" @media-modal-selection-change="onAddMedia" @modal-close="onCloseMediaModal" /> {% endblock %} {% block sw_product_detail_base_settings_card %} <sw-card v-show="showProductCard('labelling')" class="sw-product-detail-base__labelling-card" position-identifier="sw-product-detail-base-labelling" :title="$tc('sw-product.detailBase.cardTitleSettings')" :is-loading="loading.product" > {% block sw_product_detail_base_settings_form %} <sw-product-settings-form :allow-edit="acl.can('product.editor')" /> {% endblock %} </sw-card> {% endblock %} </template> </div> {% endblock %}`,{Context:a,Utils:c,Mixin:n}=Shopware,{isEmpty:s}=c.types,p={template:l,inject:["repositoryFactory","acl"],mixins:[n.getByName("notification")],props:{productId:{type:String,required:!1,default:null}},data(){return{showMediaModal:!1,mediaDefaultFolderId:null}},computed:{product(){return Shopware.Store.get("swProductDetail").product},parentProduct(){return Shopware.Store.get("swProductDetail").parentProduct},customFieldSets(){return Shopware.Store.get("swProductDetail").customFieldSets},loading(){return Shopware.Store.get("swProductDetail").loading},isLoading(){return Shopware.Store.get("swProductDetail").isLoading},showModeSetting(){return Shopware.Store.get("swProductDetail").showModeSetting},productStates(){return Shopware.Store.get("swProductDetail").productStates},mediaFormVisible(){return!this.loading.product&&!this.loading.parentProduct&&!this.loading.customFieldSets&&!this.loading.media},productMediaRepository(){return this.repositoryFactory.create(this.product.media.entity)},mediaDefaultFolderRepository(){return this.repositoryFactory.create("media_default_folder")},mediaDefaultFolderCriteria(){const e=new r(1,1);return e.addAssociation("folder"),e.addFilter(r.equals("entity","product")),e}},watch:{product(){}},created(){this.createdComponent()},methods:{createdComponent(){this.getMediaDefaultFolderId().then(e=>{this.mediaDefaultFolderId=e})},showProductCard(e){return Shopware.Store.get("swProductDetail").showProductCard(e)},getMediaDefaultFolderId(){return this.mediaDefaultFolderRepository.search(this.mediaDefaultFolderCriteria,a.api).then(e=>{var i;const t=e.first();return(i=t.folder)!=null&&i.id?t.folder.id:null})},mediaRemoveInheritanceFunction(e){return e.forEach(({id:t,mediaId:i,position:d})=>{const o=this.productMediaRepository.create(a.api);Object.assign(o,{mediaId:i,position:d,productId:this.product.id}),this.parentProduct.coverId===t&&(this.product.coverId=o.id),this.product.media.push(o)}),this.$refs.productMediaInheritance.forceInheritanceRemove=!0,this.product.media},mediaRestoreInheritanceFunction(){return this.$refs.productMediaInheritance.forceInheritanceRemove=!1,this.product.coverId=null,this.product.media.getIds().forEach(e=>{this.product.media.remove(e)}),this.product.media},onOpenMediaModal(){this.showMediaModal=!0},onCloseMediaModal(){this.showMediaModal=!1},onOpenDownloadMediaModal(){this.showDownloadMediaModal=!0},onCloseDownloadMediaModal(){this.showDownloadMediaModal=!1},onAddMedia(e){s(e)||e.forEach(t=>{this.addMedia(t).catch(({fileName:i})=>{this.createNotificationError({message:this.$tc("sw-product.mediaForm.errorMediaItemDuplicated",{fileName:i},0)})})})},addMedia(e){if(this.isExistingMedia(e))return Promise.reject(e);const t=this.productMediaRepository.create(a.api);return t.mediaId=e.id,t.media={url:e.url,id:e.id},s(this.product.media)&&!this.isSpatial(t)&&this.setMediaAsCover(t),this.product.media.add(t),Promise.resolve()},isSpatial(e){var t,i,d;return((t=e.media)==null?void 0:t.fileExtension)==="glb"?!0:!!((d=(i=e.media)==null?void 0:i.url)!=null&&d.endsWith(".glb"))},isExistingMedia(e){return this.product.media.some(({id:t,mediaId:i})=>t===e.id||i===e.id)},setMediaAsCover(e){e.position=0,this.product.coverId=e.id}}};export{p as default};
