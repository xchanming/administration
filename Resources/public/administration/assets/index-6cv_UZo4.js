const t=`{% block sw_field_copyable %} <sw-icon v-tooltip="{ message: tooltipText, width: 220, position: 'top', showDelay: 300, hideDelay: 0 }" class="sw-field-copyable" name="regular-products-s" @click="copyToClipboard" @mouseleave="resetTooltipText" /> {% endblock %}`,{Component:e,Mixin:o}=Shopware,i=Shopware.Utils.dom;e.register("sw-field-copyable",{template:t,mixins:[o.getByName("notification")],props:{copyableText:{type:String,required:!1,default:null},tooltip:{type:Boolean,required:!1,default:!1}},data(){return{wasCopied:!1}},computed:{tooltipText(){return this.wasCopied?this.$tc("global.sw-field-copyable.tooltip.wasCopied"):this.$tc("global.sw-field-copyable.tooltip.canCopy")}},methods:{async copyToClipboard(){if(this.copyableText)try{await i.copyStringToClipboard(this.copyableText),this.tooltip?this.tooltipSuccess():this.notificationSuccess()}catch{this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.sw-field.notification.notificationCopyFailureMessage")})}},tooltipSuccess(){this.wasCopied=!0},notificationSuccess(){this.createNotificationInfo({message:this.$tc("global.sw-field.notification.notificationCopySuccessMessage")})},resetTooltipText(){this.wasCopied=!1}}});
