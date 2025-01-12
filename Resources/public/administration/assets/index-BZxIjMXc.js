const e='{% block sw_sidebar_navigation_item %} <button class="sw-sidebar-navigation-item" :class="sidebarItem.sidebarItemClasses" :title="sidebarItem.title" :disabled="sidebarItem.disabled" @click="emitButtonClicked" > {% block sw_sidebar_navigation_item_content %} <sw-icon :name="sidebarItem.icon" /> <i v-if="!sidebarItem.hasSimpleBadge && sidebarItem.badge > 0" class="sidebar-item-badge notification--badge" :class="badgeTypeClasses" >{{ sidebarItem.badge }}</i> <i v-else-if="sidebarItem.hasSimpleBadge" class="sidebar-item-badge dot--badge" :class="badgeTypeClasses" ></i> {% endblock %} </button> {% endblock %}',{Component:i}=Cicada;i.register("sw-sidebar-navigation-item",{template:e,compatConfig:Cicada.compatConfig,emits:["item-click"],props:{sidebarItem:{type:Object,required:!0}},computed:{badgeTypeClasses(){return[`is--${this.sidebarItem.badgeType}`]}},methods:{emitButtonClicked(){this.$emit("item-click",this.sidebarItem)}}});
//# sourceMappingURL=index-BZxIjMXc.js.map
