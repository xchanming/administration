import{D as i,a as s}from"./promotion.helper-DcTQ5h0i.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";const n=`{% block sw_promotion_detail_discounts %} <div class="sw-promotion-detail-discounts"> {% block sw_promotion_detail_discounts_card_add %} <div class="promotion-detail-discounts__action_add" position-identifier="sw-promotion-detail-discounts" > {% block sw_promotion_detail_discounts_actions_add %} <sw-button v-tooltip="{ message: $tc('sw-privileges.tooltip.warning'), disabled: acl.can('promotion.editor'), showOnDisabledElements: true }" :is-loading="isLoading" variant="ghost" :disabled="(promotion && promotion.hasOrders) || !acl.can('promotion.editor')" @click="onAddDiscount" > {{ $tc('sw-promotion.detail.main.discounts.buttonAddDiscount') }} </sw-button> {% endblock %} </div> {% endblock %} {% block sw_promotion_detail_discounts_items %} <ul class="sw-promotion-detail-discounts__discount-list"> {% block sw_promotion_detail_discounts_item_form %} <sw-promotion-discount-component v-for="discount in discounts" :key="discount.id" :promotion="promotion" :discount="discount" @discount-delete="deleteDiscount" /> {% endblock %} </ul> {% endblock %} </div> {% endblock %}`,r={template:n,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","acl"],data(){return{deleteDiscountId:null,repository:null}},computed:{promotion(){return Cicada.State.get("swPromotionDetail").promotion},isLoading:{get(){return Cicada.State.get("swPromotionDetail").isLoading},set(t){Cicada.State.commit("swPromotionDetail/setIsLoading",t)}},discounts(){return Cicada.State.get("swPromotionDetail").promotion&&Cicada.State.get("swPromotionDetail").promotion.discounts}},methods:{onAddDiscount(){const o=this.repositoryFactory.create(this.discounts.entity,this.discounts.source).create();o.promotionId=this.promotion.id,o.scope=i.CART,o.type=s.PERCENTAGE,o.value=.01,o.considerAdvancedRules=!1,o.sorterKey="PRICE_ASC",o.applierKey="ALL",o.usageKey="ALL",this.discounts.push(o)},deleteDiscount(t){if(t.isNew()){this.discounts.remove(t.id);return}this.isLoading=!0,this.repositoryFactory.create(this.discounts.entity,this.discounts.source).delete(t.id,this.discounts.context).then(()=>{this.discounts.remove(t.id),this.isLoading=!1})}}};export{r as default};
//# sourceMappingURL=index-bZpBQ8NG.js.map
