const o=`{% block sw_notifications %} <transition name="sw-notifications-slide-fade"> {% block sw_notifications_element %} <div v-if="notifications.length" class="sw-notifications" :style="notificationsStyle" > {% block sw_notifications_transition_group %} <transition-group name="sw-notifications-slide-fade"> {% block sw_notifications_item %} <sw-alert v-for="(notification, index) in notifications" :key="notification.uuid" :class="['sw-notifications__notification--' + index, 'sw-notification__alert']" :title="notification.title" :variant="notification.variant" :appearance="notification.system ? 'system' : 'notification'" :notification-index="notification.uuid" :closable="true" @close="onClose(notification)" > {% block sw_notifications_item_content %} <div v-html="$sanitize(notification.message, { ALLOWED_TAGS: ['a', 'b', 'i', 'u', 'br'], ALLOWED_ATTR: ['href', 'target'] })"></div> {% endblock %} {% block sw_notifications_item_actions_slot %} <template #actions> {% block sw_notifications_item_actions %} <template v-for="action in notification.actions" :key="action.label" > {% block sw_notifications_item_action_item %} <sw-button :disabled="action.disabled" @click="handleAction(action, notification)" > {{ action.label }} </sw-button> {% endblock %} </template> {% endblock %} </template> {% endblock %} </sw-alert> {% endblock %} </transition-group> {% endblock %} </div> {% endblock %} </transition> {% endblock %}`,{Component:n}=Cicada;n.register("sw-notifications",{template:o,compatConfig:Cicada.compatConfig,inject:["feature"],props:{position:{type:String,required:!1,default:"topRight",validator(t){return t.length?["topRight","bottomRight"].includes(t):!0}},notificationsGap:{type:String,default:"20px"},notificationsTopGap:{type:String,default:"165px"}},computed:{notifications(){return Object.values(Cicada.State.getters["notification/getGrowlNotificationsObject"])},notificationsStyle(){let t=this.notificationsGap;return`${parseInt(t,10)}`===t&&(t=`${t}px`),this.position==="bottomRight"?{top:"auto",right:t,bottom:t,left:"auto"}:{top:this.notificationsTopGap,right:t,bottom:"auto",left:"auto"}}},methods:{onClose(t){Cicada.State.commit("notification/removeGrowlNotification",t)},handleAction(t,i){if(Cicada.Utils.string.isUrl(t.route)){window.open(t.route);return}t.route&&this.$router.push(t.route),t.method&&typeof t.method=="function"&&t.method.call(),this.onClose(i)}}});
//# sourceMappingURL=index-DZk1bCRV.js.map
