const d=`{% block sw_settings %} <sw-page class="sw-settings-index" :show-smart-bar="false" > {% block sw_settings_content %} <template #content> <sw-card-view> {% block sw_settings_content_card_view %} <sw-card v-if="feature.isActive('v6.7.0.0')" hero class="sw-settings__card--hero" position-identifier="sw-settings-index" > {% block sw_settings_content_card_view_header %} <h1 class="sw-settings__content-header"> {{ $tc('sw-settings.index.title') }} </h1> {% endblock %} {% block sw_settings_content_card_content_grid %} <div class="sw-settings__content-grid" position-identifier="sw-settings-index-content" > <div v-for="(settingsItems, settingsGroup) in settingsGroups" :key="settingsGroup" class="sw-settings__content-group" > <h2>{{ getGroupLabel(settingsGroup) }}</h2> <sw-settings-item v-for="settingsItem in settingsItems" :id="settingsItem.id" :key="settingsItem.name" :label="getLabel(settingsItem)" :to="getRouteConfig(settingsItem)" :background-enabled="settingsItem.backgroundEnabled" > <template #icon> <component :is="settingsItem.iconComponent" v-if="settingsItem.iconComponent" /> <sw-icon v-else :name="settingsItem.icon" /> </template> </sw-settings-item> </div> </div> {% endblock %} </sw-card> {% endblock %} {# @deprecated tag:v6.7.0 - block will be removed #} {% block sw_settings_content_tabs %} <sw-tabs v-if="!feature.isActive('v6.7.0.0')" class="sw-settings__tabs" position-identifier="sw-settings-index" :is-vertical="true" :small="false" > <template #default="{ active }"> {# @deprecated tag:v6.7.0 - block will be removed #} {% block sw_settings_content_tab_shop %} <sw-tabs-item v-if="settingsGroups['shop']" class="sw-settings__tab-shop" :route="{ name: 'sw.settings.index.shop'}" name="shop" :active-tab="active" :title="$tc('sw-settings.index.tabShop')" > {{ $tc('sw-settings.index.tabShop') }} </sw-tabs-item> {% endblock %} {# @deprecated tag:v6.7.0 - block will be removed #} {% block sw_settings_content_tab_system %} <sw-tabs-item v-if="settingsGroups['system']" class="sw-settings__tab-system" name="system" :route="{ name: 'sw.settings.index.system'}" :active-tab="active" :title="$tc('sw-settings.index.tabSystem')" > {{ $tc('sw-settings.index.tabSystem') }} </sw-tabs-item> {% endblock %} {# @deprecated tag:v6.7.0 - block will be removed #} {% block sw_settings_content_tab_plugins %} <sw-tabs-item v-if="hasPluginConfig()" class="sw-settings__tab-plugins" name="plugins" :route="{ name: 'sw.settings.index.plugins'}" :active-tab="active" :title="$tc('sw-settings.index.tabPlugins')" > {{ $tc('sw-settings.index.tabPlugins') }} </sw-tabs-item> {% endblock %} </template> <template #content="{ active }"> {# @deprecated tag:v6.7.0 - block will be removed #} {% block sw_settings_content_card %} {# @deprecated tag:v6.7.0 - block will be removed #} {% block sw_settings_content_header %} <h1 class="sw-settings__content-header"> {{ $tc('sw-settings.index.title') }} </h1> {% endblock %} <sw-card class="sw-settings__card" position-identifier="sw-settings-index-content" > {# @deprecated tag:v6.7.0 - block will be removed #} {% block sw_settings_content_card_content %} <slot v-for="(settingsItems, settingsGroup) in settingsGroups" :key="settingsGroup" :name="settingsGroup" :aria-label="$tc('sw-settings.index.title')" > <nav v-show="active === settingsGroup" :id="\`sw-settings__content-grid-\${settingsGroup}\`" class="sw-settings__content-grid" > <sw-settings-item v-for="settingsItem in settingsItems" :id="settingsItem.id" :key="settingsItem.name" :label="getLabel(settingsItem)" :to="getRouteConfig(settingsItem)" :background-enabled="settingsItem.backgroundEnabled" > <template #icon> <component :is="settingsItem.iconComponent" v-if="settingsItem.iconComponent" /> <sw-icon v-else :name="settingsItem.icon" /> </template> </sw-settings-item> </nav> </slot> {% endblock %} </sw-card> {% endblock %} </template> </sw-tabs> {% endblock %} </sw-card-view> </template> {% endblock %} </sw-page> {% endblock %}`,{hasOwnProperty:s}=Shopware.Utils.object,p={template:d,inject:["acl","feature"],metaInfo(){return{title:this.$createTitle()}},computed:{settingsGroups(){return Object.entries(Shopware.Store.get("settingsItems").settingsGroups).reduce((n,[c,r])=>{const o=r.filter(e=>e.privilege?this.acl.can(e.privilege):!0).sort((e,i)=>{var a,l;const g=typeof e.label=="string"?e.label:(a=e.label)==null?void 0:a.label,b=typeof i.label=="string"?i.label:(l=i.label)==null?void 0:l.label;return this.$tc(g).localeCompare(this.$tc(b))});return o.length>0&&(n[c]=o),n},{})}},methods:{hasPluginConfig(){return s(this.settingsGroups,"plugins")&&this.settingsGroups.plugins.length>0},getRouteConfig(t){return s(t,"to")?typeof t.to=="string"?{name:t.to}:typeof t.to=="object"?t.to:{}:{}},getLabel(t){return s(t,"label")?typeof t.label=="string"?this.$tc(t.label):typeof t.label!="object"||!s(t.label,"translated")||!s(t.label,"label")||typeof t.label.label!="string"?"":t.label.translated?t.label.label:this.$tc(t.label.label):""},getGroupLabel(t){const n=t.charAt(0).toUpperCase()+t.slice(1);return this.$tc(`sw-settings.index.tab${n}`)}}};export{p as default};
