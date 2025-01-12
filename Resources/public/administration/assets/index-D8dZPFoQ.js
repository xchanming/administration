const t='{% block sw_promotion_v2_empty_state_hero %} <div v-bind="$attrs" class="sw-promotion-v2-empty-state-hero" > {% block sw_promotion_v2_empty_state_hero_content %} <div class="sw-promotion-v2-empty-state-hero__column-content"> {% block sw_promotion_v2_empty_state_hero_content_title %} <h1 class="sw-promotion-v2-empty-state-hero__title"> {{ title }} </h1> {% endblock %} {% block sw_promotion_v2_empty_state_hero_content_description %} <div v-if="showDescription" class="sw-promotion-v2-empty-state-hero__description" > {{ description }} </div> {% endblock %} {% block sw_promotion_v2_empty_state_hero_content_actions %} <div v-if="actionSlotsAvailable" class="sw-promotion-v2-empty-state-hero__actions" > <slot name="actions"> {% block sw_promotion_v2_empty_state_hero_slot_actions %}{% endblock %} </slot> </div> {% endblock %} </div> {% endblock %} {% block sw_promotion_v2_empty_state_hero_image %} <div class="sw-promotion-v2-empty-state-hero__column-image"> {% block sw_promotion_v2_empty_state_hero_image_asset %} <img class="sw-promotion-v2-empty-state-hero__asset" :src="assetFilter(imagePath)" alt="" > {% endblock %} </div> {% endblock %} </div> {% endblock %}',e={template:t,compatConfig:Cicada.compatConfig,props:{title:{type:String,required:!0},assetPath:{type:String,required:!1,default:""},description:{type:String,required:!1,default:""},hideDescription:{type:Boolean,required:!1,default:!1}},computed:{imagePath(){return this.assetPath||"/administration/static/img/empty-states/promotion-v2-empty-state-hero.svg"},showDescription(){return!this.hideDescription&&this.description&&this.description.length>0},assetFilter(){return Cicada.Filter.getByName("asset")},actionSlotsAvailable(){return this.isCompatEnabled("INSTANCE_SCOPED_SLOTS")?!!this.$slots.actions||!!this.$scopedSlots.actions:!!this.$slots.actions}}};export{e as default};
//# sourceMappingURL=index-D8dZPFoQ.js.map
