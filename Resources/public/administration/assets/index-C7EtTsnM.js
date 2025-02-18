const i=`{% block sw_extension_component_section %} <div> <template v-for="componentSection in componentSections" :key="componentSection.props.locationId" > {# These components should not contain a position identifier because it is generally rendered #} <sw-card v-if="componentSection.component === 'card'" position-identifier="" :title="$tc(componentSection?.props?.title ?? '')" :subtitle="$tc(componentSection?.props?.subtitle ?? '')" :content-padding="componentSection.props?.contentPadding ?? true" > <template v-if="componentSection.props?.tabs" #tabs > <sw-tabs position-identifier="" @new-item-active="setActiveTab($event.name)" > <sw-tabs-item v-for="tab in componentSection.props.tabs" :key="tab.name" :active-tab="getActiveTab(componentSection).name" :name="tab.name" > {{ $tc(tab.label ?? '') }} </sw-tabs-item> </sw-tabs> </template> <sw-iframe-renderer v-if="componentSection.props?.tabs && getActiveTab(componentSection)" :key="getActiveTab(componentSection).name" :src="componentSection.src" :location-id="getActiveTab(componentSection)?.locationId" /> <sw-iframe-renderer v-if="componentSection.props?.locationId && !componentSection.props?.tabs" :src="componentSection.src" :location-id="componentSection.props.locationId" /> </sw-card> </template> </div> {% endblock %}`;var s={};Shopware.Component.register("sw-extension-component-section",{template:i,extensionApiDevtoolInformation:{property:"ui.componentSection",method:"add",positionId:e=>e.positionIdentifier},props:{positionIdentifier:{type:String,required:!0},deprecated:{type:Boolean,required:!1,default:!1},deprecationMessage:{type:String,required:!1,default:""}},computed:{componentSections(){const e=Shopware.Store.get("extensionComponentSections").identifier[this.positionIdentifier]??[];return e.length&&this.deprecated&&e.forEach(o=>{const t=["CORE",`The extension "${o.extensionName}" uses a deprecated position identifier "${this.positionIdentifier}". ${this.deprecationMessage}`];s!=="prod"?Shopware.Utils.debug.error(...t):Shopware.Utils.debug.warn(...t)}),e}},data(){return{activeTabName:""}},methods:{setActiveTab(e){this.activeTabName=e},getActiveTab(e){var o,t;return this.activeTabName?(o=e.props.tabs)==null?void 0:o.find(n=>n.name===this.activeTabName):(t=e.props.tabs)==null?void 0:t[0]}}});
