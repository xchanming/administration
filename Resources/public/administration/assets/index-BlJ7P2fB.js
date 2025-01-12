const __vite__fileDeps=["assets/index-C_MPidus.js","assets/index-B8MDUoCU.css","assets/index-CHNeqv99.js","assets/index-Cna96vDF.css","assets/index-WZmv1cqO.js","assets/index-X4Sdxe9I.css","assets/index-DIgzwgH4.js","assets/index-Bu5KGYdh.css","assets/index-Bb-TuTaW.js","assets/index-D1pC9NCV.css","assets/index-D9C0gmJg.js","assets/index-q49h4Dm3.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./administration-DCOj2uiN.js";import{b as g}from"./camelCase-D7-BemT7.js";import"./channel-oRk5-XZJ.js";const y=`<div class="sw-settings-country-address-handling"> <sw-card position-identifier="sw-settings-country-address-handling-options" :title="$tc('sw-settings-country.detail.titleOptions')" :is-loading="isLoading" > <sw-container class="sw-settings-country-address-handling__options-container"> <sw-switch-field :value="country.forceStateInRegistration" class="sw-settings-country-address-handling__option-items" bordered :disabled="!acl.can('country.editor') || undefined" :label="$tc('sw-settings-country.detail.labelForceStateInRegistration')" @update:value="updateCountry('forceStateInRegistration', $event)" /> <sw-switch-field :value="country.postalCodeRequired" class="sw-settings-country-address-handling__option-items" bordered :disabled="!acl.can('country.editor') || undefined" :label="$tc('sw-settings-country.detail.labelPostalCodeRequired')" @update:value="updateCountry('postalCodeRequired', $event)" /> <sw-switch-field :value="country.checkPostalCodePattern" class="sw-settings-country-address-handling__option-items" bordered :disabled="!hasDefaultPostalCodePattern || !acl.can('country.editor') || undefined" :label="$tc('sw-settings-country.detail.labelCheckPostalCodePattern')" :help-text="$tc('sw-settings-country.detail.helpTextCheckPostalCodePattern')" @update:value="updateCountry('checkPostalCodePattern', $event)" /> <div class="sw-settings-country-address-handling__option-items advanced-postal-code"> <sw-switch-field :value="country.checkAdvancedPostalCodePattern" class="sw-settings-country-address-handling__option-items" :disabled="!acl.can('country.editor') || disabledAdvancedPostalCodePattern || undefined" :label="$tc('sw-settings-country.detail.labelCheckAdvancedPostalCodePattern')" :help-text="$tc('sw-settings-country.detail.helpTextAdvancedPostalCodePattern', 0, {5: '{5}', 4: '{4}', 2: '{2}'})" @update:value="updateCountry('checkAdvancedPostalCodePattern', $event)" /> <sw-text-field :value="country.advancedPostalCodePattern" class="sw-settings-country-address-handling__text-field" :class="{'is--disabled': !country.checkAdvancedPostalCodePattern}" :disabled="!acl.can('country.editor') || undefined" :placeholder="$tc('sw-settings-country.detail.placeholderAdvancedPostalCodePattern')" @update:value="updateCountry('advancedPostalCodePattern', $event)" /> </div> </sw-container> </sw-card> <sw-card position-identifier="sw-settings-country-address-handling-formatting" :title="$tc('sw-settings-country.detail.titleFormatting')" :is-loading="isLoading" > <sw-container class="sw-settings-country-address-handling__options-container"> <div class="sw-settings-country-address-handling__address-markup"> <sw-multi-snippet-drag-and-drop v-for="(snippet, index) in addressFormat" :key="index" v-droppable="{ data: { snippet, index }, dragGroup: 'sw-multi-snippet' }" v-draggable="{ ...dragConf, data: { snippet, index }}" :value="snippet" :line-position="index" :get-label-property="getLabelProperty" :total-lines="addressFormat.length" @update:value="change" @drop-end="onDropEnd" @position-move="moveToNewPosition" @add-new-line="addNewLineAt" @open-snippet-modal="openSnippetModal" /> </div> <div class="sw-settings-country-address-handling__address-preview"> <div class="sw-card__title"> {{ $tc('sw-settings-country.detail.previewTitle') }} </div> <sw-entity-single-select v-model:value="customerId" class="sw-settings-country-address-handling__customer-select" :label="$tc('sw-settings-country.detail.labelCustomer')" :placeholder="$tc('sw-settings-country.detail.placeholderSelectCustomer')" entity="customer" show-clearable-button :criteria="customerCriteria" :label-callback="customerLabel" @update:value="onChangeCustomer" /> <sw-settings-country-preview-template :formatting-address="formattingAddress" /> <sw-button class="sw-settings-country-address-handling__button-reset" variant="ghost-danger" @click="resetMarkup" > {{ $tc('sw-settings-country.detail.buttonResetMarkup') }} </sw-button> </div> </sw-container> </sw-card> <sw-settings-country-new-snippet-modal v-if="isOpenModal" :selections="snippets" :current-position="currentPosition" :address-format="addressFormat" :get-label-property="getLabelProperty" @change="change" @modal-close="onCloseModal" /> </div>`,{Component:w}=Cicada,{Criteria:v}=Cicada.Data,{cloneDeep:m}=Cicada.Utils.object,h=[["address/company","symbol/dash","address/department"],["address/name"],["address/street"],["address/zipcode","address/city"],["address/country"]];w.register("sw-settings-country-address-handling",{template:y,compatConfig:Cicada.compatConfig,inject:["acl","customSnippetApiService"],props:{country:{type:Object,required:!0},isLoading:{type:Boolean,required:!0}},data(){return{advancedPostalCodePattern:null,draggedItem:null,droppedItem:null,snippets:[],customerId:null,customer:null,isOpenModal:!1,currentPosition:null,formattingAddress:""}},computed:{customerCriteria(){const e=new v(1,null);return e.addAssociation("salutation").addAssociation("defaultBillingAddress.country").addAssociation("defaultBillingAddress.countryState").addAssociation("defaultBillingAddress.salutation"),e},dragConf(){return{delay:200,dragGroup:"sw-multi-snippet",validDragCls:"is--valid-drag",onDragStart:this.onDragStart,onDragEnter:this.onDragEnter,onDrop:this.onDrop,preventEvent:!1}},addressFormat(){return this.country.addressFormat},hasDefaultPostalCodePattern(){return!!this.country.defaultPostalCodePattern},disabledAdvancedPostalCodePattern(){return this.hasDefaultPostalCodePattern?!this.country.checkPostalCodePattern:!1}},watch:{"country.checkPostalCodePattern"(e){e||(this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country,"checkAdvancedPostalCodePattern",!1):this.updateCountry("checkAdvancedPostalCodePattern",!1))},"country.checkAdvancedPostalCodePattern"(e){var t;if(e){if(this.country.advancedPostalCodePattern&&!this.advancedPostalCodePattern)return;this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country,"advancedPostalCodePattern",this.advancedPostalCodePattern||this.country.defaultPostalCodePattern):this.$emit("update:country","advancedPostalCodePattern",this.advancedPostalCodePattern||this.country.defaultPostalCodePattern);return}this.hasDefaultPostalCodePattern||(this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country,"checkPostalCodePattern",e):this.updateCountry("checkPostalCodePattern",e)),this.advancedPostalCodePattern=((t=this.country)==null?void 0:t.advancedPostalCodePattern)??null,this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country,"advancedPostalCodePattern",null):this.updateCountry("advancedPostalCodePattern",null)},"country.addressFormat"(e){var t;e&&this.renderFormattingAddress((t=this.customer)==null?void 0:t.defaultBillingAddress)}},created(){this.createdComponent()},methods:{createdComponent(){this.advancedPostalCodePattern=m(this.country.advancedPostalCodePattern),this.getSnippets()},onDragStart(e,t,s){this.draggedItem=e.data},onDragEnter(e,t){this.draggedItem&&(!e||!t||(this.droppedItem=t))},onDrop(e,t){var s,i,n;!((s=this.addressFormat)!=null&&s.length)||!this.droppedItem||!this.draggedItem||[(i=this.draggedItem)==null?void 0:i.index,(n=this.droppedItem)==null?void 0:n.index].every(r=>typeof r=="number")&&(this.country.addressFormat=Object.assign([],this.country.addressFormat,{[this.draggedItem.index]:this.country.addressFormat[this.droppedItem.index],[this.droppedItem.index]:this.country.addressFormat[this.draggedItem.index]}),this.draggedItem=null,this.droppedItem=null)},onDropEnd(e,{dragData:t,dropData:s}){if(typeof(s==null?void 0:s.linePosition)=="number"&&typeof(t==null?void 0:t.linePosition)=="number"&&t.linePosition!==s.linePosition){this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country.addressFormat[t.linePosition],t.index,s.snippet):this.$emit("update:country",`addressFormat[${t.linePosition}][${t.index}]`,s.snippet),this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country.addressFormat[s.linePosition],s.index,t.snippet):this.$emit("update:country",`addressFormat[${s.linePosition}][${s.index}]`,t.snippet);return}this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country.addressFormat,`${s.index}`,[...this.country.addressFormat[s.index],t.snippet]):this.$emit("update:country",`addressFormat[${s.index}]`,[...this.country.addressFormat[s.index],t.snippet]),this.isCompatEnabled("INSTANCE_SET")?(this.country.addressFormat[e].splice(t.index,1),this.$set(this.country.addressFormat,e,this.country.addressFormat[e])):(this.country.addressFormat[e].splice(t.index,1),this.updateCountry(`addressFormat[${e}]`,this.country.addressFormat[e]))},moveToNewPosition(e,t){if(!this.addressFormat)return;t=typeof t!="number"?this.addressFormat.length-1:t;const s=this.country.addressFormat[e];this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country,"addressFormat",this.swapPosition(e,t,[s])??[]):this.updateCountry("addressFormat",this.swapPosition(e,t,[s])??[])},addNewLineAt(e,t){var n;if(!((n=this.addressFormat)!=null&&n.length))return;const s=this.addressFormat[e],i=t==="above"?[[],s]:[s,[]];this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country,"addressFormat",this.swapPosition(e,e,i)??[]):this.updateCountry("addressFormat",this.swapPosition(e,e,i)??[])},swapPosition(e,t,s){var n;if(!((n=this.addressFormat)!=null&&n.length))return null;const i=[...this.country.addressFormat.filter((r,a)=>a!==e)];return i.splice(t,0,...s),i},change(e,t){if(!t){this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country,"addressFormat",this.addressFormat.filter((s,i)=>e!==i)):this.updateCountry("addressFormat",this.addressFormat.filter((s,i)=>e!==i));return}this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country.addressFormat,e,t):this.updateCountry(`addressFormat[${e}]`,t)},customerLabel(e){return e?`${e.name}`:""},onChangeCustomer(e,t){this.customer=null,!(!e||!t)&&(this.customer=t,this.renderFormattingAddress(this.customer.defaultBillingAddress))},resetMarkup(){this.isCompatEnabled("INSTANCE_SET")?this.$set(this.country,"addressFormat",m(h)):this.updateCountry("addressFormat",m(h))},openSnippetModal(e){this.isOpenModal=!0,this.currentPosition=e},onCloseModal(){this.currentPosition=null,this.isOpenModal=!1},getSnippets(){return this.customSnippetApiService.snippets().then(e=>{const t=e.data;this.snippets=t==null?void 0:t.map(s=>({id:s,name:this.getLabelProperty(s)}))}).catch(()=>{})},renderFormattingAddress(e){return e?this.customSnippetApiService.render(e,this.country.addressFormat).then(t=>{const{rendered:s}=t;this.formattingAddress=s}):(this.formattingAddress="",Promise.resolve())},getLabelProperty(e){const t=e.split("/").map(s=>g(s)).join(".");return this.$te(`sw-custom-snippet.${t}`)?this.$tc(`sw-custom-snippet.${t}`):e},updateCountry(e,t){this.$emit("update:country",e,t)}}});const C=`<sw-modal class="sw-settings-country-new-snippet-modal" :title="$tc('sw-settings-country.detail.newSnippetModalTitle')" @modal-close="onCloseModal" > <sw-contextual-field class="sw-settings-country-new-snippet-modal__search-field" required :disabled="disabled" :error="null" > <template #sw-field-input="{ identification, disabled, error, size, setFocusClass, removeFocusClass }"> <input ref="searchInput" v-model="searchTerm" type="text" class="sw-settings-country-new-snippet-modal__input-field" :placeholder="$tc('sw-settings-country.detail.placeholderSearchSnippet')" :disabled="disabled" @input="debouncedSearch" > <sw-loader v-if="isLoading" class="sw-settings-country-new-snippet-modal__loader" size="16px" /> <sw-icon class="sw-settings-country-new-snippet-modal__search-icon" name="regular-search-s" small /> </template> </sw-contextual-field> <sw-tree :sortable="false" :items="searchResults" :searchable="false" :disable-context-menu="true" bind-items-to-folder :active-tree-item-id="activeFocusId" initially-expanded-root route-params-active-element-id="snippet" > <template #headline> <span></span> </template> <template #search> <span></span> </template> <template #items="{ treeItems, sortable, disableContextMenu, onChangeRoute, newElementId, checkItem, checkedItemIds, selectedItemsPathIds, }" > <sw-tree-item v-for="item in treeItems" :key="item.id" should-focus :item="item" :active="item.active" :sortable="sortable" :on-change-route="onChangeRoute" :active-parent-ids="selectedItemsPathIds" :active-item-ids="checkedItemIds" @check-item="checkItem" > <template #actions="{ item }"> <sw-button v-if="item.childCount === 0" @click="addElement(item.data)" > {{ $tc('sw-settings-country.detail.buttonInsertSnippet') }} </sw-button> </template> </sw-tree-item> </template> </sw-tree> <sw-select-base class="sw-multi-snippet-select" :is-loading="isLoading" :error="null" v-bind="$attrs" v-on="listeners" > <template #sw-select-selection="{ identification, error, disabled, size, expand, collapse }"> <ul ref="selectionList" class="sw-select-selection-list" > <li v-for="(snippet, index) in selection" :key="index" class="sw-select-selection-list__item-holder" :class="'sw-select-selection-list__item-holder--' + index" :data-id="snippet" > <slot name="selected-option" v-bind="{ snippet, defaultLabel: snippet, disabled }" > <sw-label :dismissable="true" :size="size" @dismiss="onClickDismiss(index)" > <span class="sw-select-selection-list__item"> <slot name="label-property" v-bind="{ item: snippet, index }" > {{ getLabelProperty(snippet) }} </slot> </span> </sw-label> </slot> </li> <li> <slot name="input"> <input class="sw-select-selection-list__input" type="text" :disabled="disabled || undefined" > </slot> </li> </ul> </template> </sw-select-base> </sw-modal>`,{Component:f}=Cicada,b=Cicada.Utils;f.register("sw-settings-country-new-snippet-modal",{template:C,compatConfig:Cicada.compatConfig,props:{selections:{type:Array,required:!1,default:()=>[]},currentPosition:{type:Number,required:!0},addressFormat:{type:Array,required:!0},disabled:{type:Boolean,required:!1,default:!1},getLabelProperty:{type:Function,required:!1,default:e=>e}},data(){return{searchTerm:"",isLoading:!1,searchResults:null,activeFocusId:null}},computed:{selection(){return this.addressFormat[this.currentPosition]},listeners(){const e={};return this.isCompatEnabled("INSTANCE_LISTENERS")?this.$listeners:e}},watch:{activeFocusId:{immediate:!0,handler(e){this.$route.params.snippet=e}}},created(){this.createdComponent()},methods:{createdComponent(){this.getSnippetsTree(this.selections)},onCloseModal(){this.$emit("modal-close")},addElement(e){this.addressFormat[this.currentPosition].push(e.id.replace(".","/")),this.$emit("change",this.currentPosition,this.addressFormat[this.currentPosition])},debouncedSearch:b.debounce(function(){if(!this.searchTerm){this.getSnippetsTree(this.selections);return}this.search()},750),search(){this.activeFocusId=null;const e=this.searchTerm.split(/[\W_]+/gi);if(!e)return;const t=this.selections.filter(s=>e.every(i=>s.name.toLowerCase().includes(i.toLowerCase())));t.length!==0&&(this.activeFocusId=t[0].id,this.getSnippetsTree(t))},getSnippetsTree(e){const t={},s=(n,r,a)=>{var p;const{keyWords:o,name:d}=r,l=o[n],u=o[n+1];a[l]=a[l]||{id:l,name:d,parentId:null,children:{}},u&&(a[l].children[u]=((p=a[l])==null?void 0:p.children[u])||{id:`${a[l].id}.${u}`,name:d,parentId:a[l].id,children:{}},s(n+1,{keyWords:o,name:d},a[l].children))},i=(n,r=[])=>{const a=({parentId:o=null,id:d,children:l,name:u})=>{const[p]=o?d.split(".").reverse():[d];return Object.values(l).length?p.replace(/_|-/g," "):u};return n.forEach(o=>{const d=o.children?Object.values(o.children):[];r.push({id:o.id,name:a(o),childCount:d.length,parentId:o.parentId,children:{}}),d.length>0&&(r=i(d,r))}),r};e.forEach(n=>{const r=n.id.split("/");r.length!==0&&s(0,{keyWords:r,...n},t)}),this.searchResults=i(Object.values(t))},onClickDismiss(e){this.$emit("change",this.currentPosition,this.addressFormat[this.currentPosition].filter((t,s)=>s!==e))}}});const P=`<div class="sw-multi-snippet-drag-and-drop"> <sw-icon class="sw-multi-snippet-drag-and-drop__action" name="regular-grip-vertical" size="12" /> <sw-select-base class="sw-multi-snippet-select" :is-loading="isLoading" :error="errorObject" v-bind="$attrs" v-on="listeners" > <template #sw-select-selection="{ identification, error, disabled, size, expand, collapse }"> <ul ref="selectionList" class="sw-select-selection-list" > <li v-for="(snippet, index) in value" :key="index" class="sw-select-selection-list__item-holder" :class="'sw-select-selection-list__item-holder--' + index" :data-id="snippet" > <slot name="selected-option" v-bind="{ snippet, defaultLabel: snippet, disabled, linePosition }" > <sw-label v-droppable="{ ...mergedDropConfig, data: { snippet, index, linePosition }}" v-draggable="{ ...mergedDragConfig, data: { snippet, index, linePosition }}" :dismissable="!isSelectionDisabled(snippet)" :size="size" @dismiss="onClickDismiss(index)" > <span class="sw-select-selection-list__item"> <slot name="label-property" v-bind="{ item: snippet, index, getLabelProperty }" > {{ getLabelProperty(snippet) }} </slot> </span> </sw-label> </slot> </li> <li> <slot name="input"> <input class="sw-select-selection-list__input" type="text" :disabled="disabled" > </slot> </li> </ul> </template> </sw-select-base> <sw-context-button class="sw-multi-snippet-drag-and-drop__context-button"> <sw-context-menu-item :disabled="isMaxLines" @click="openModal" > {{ $tc('sw-settings-country.general.actions.newSnippet') }} </sw-context-menu-item> <sw-context-menu-item :disabled="isMaxLines" @click="addNewLineAt('above')" > {{ $tc('sw-settings-country.general.actions.createBefore') }} </sw-context-menu-item> <sw-context-menu-item :disabled="isMaxLines" @click="addNewLineAt('below')" > {{ $tc('sw-settings-country.general.actions.createAfter') }} </sw-context-menu-item> <sw-context-menu-item :disabled="isMinLines" @click="moveToNewPosition(0)" > {{ $tc('sw-settings-country.general.actions.moveTop') }} </sw-context-menu-item> <sw-context-menu-item :disabled="isMinLines" @click="moveToNewPosition" > {{ $tc('sw-settings-country.general.actions.moveBottom') }} </sw-context-menu-item> <sw-context-menu-item variant="danger" :disabled="isMinLines" @click="onDelete" > {{ $tc('global.default.delete') }} </sw-context-menu-item> </sw-context-button> </div>`,{Component:_}=Cicada,E=1,$=10;_.register("sw-multi-snippet-drag-and-drop",{template:P,compatConfig:Cicada.compatConfig,inject:["feature"],props:{value:{type:Array,required:!0},totalLines:{type:Number,required:!0},linePosition:{type:Number,required:!0},isLoading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},selectionDisablingMethod:{type:Function,required:!1,default:()=>!1},dragConfig:{type:Object,required:!1,default(e){return{delay:200,dragGroup:"sw-multi-snippet",validDragCls:"is--valid-drag",preventEvent:!0,disabled:e.disabled}}},dropConfig:{type:Object,required:!1,default(e){return{delay:200,dragGroup:"sw-multi-snippet",validDragCls:"is--valid-drag",preventEvent:!0,disabled:e.disabled}}},getLabelProperty:{type:Function,required:!1,default:e=>e}},data(){return{defaultConfig:{delay:200,dragGroup:"sw-multi-snippet",validDragCls:"is--valid-drag",preventEvent:!0,disabled:this.disabled}}},computed:{errorObject(){return null},mergedDragConfig(){return{...this.defaultConfig,onDragStart:this.onDragStart,onDragEnter:this.onDragEnter,onDrop:this.onDrop,...this.dragConfig}},mergedDropConfig(){return{...this.defaultConfig,...this.dropConfig}},isMaxLines(){return this.totalLines>=$},isMinLines(){return this.totalLines<=E},listeners(){let e={};return this.isCompatEnabled("INSTANCE_LISTENERS")&&(e=this.$listeners),e}},methods:{onDragStart(e,t,s){this.$emit("drag-start",{config:e,element:t,dragElement:s})},onDragEnter(e,t){!e||!t||this.$emit("drag-enter",{dragData:e,dropData:t})},onDrop(e,t){if(!(!e||!t)){if(e.linePosition===t.linePosition){const s=Object.assign([],this.value,{[e.index]:this.value[t.index],[t.index]:this.value[e.index]});this.$emit("update:value",this.linePosition,s);return}this.$emit("drop-end",this.linePosition,{dragData:e,dropData:t})}},isSelectionDisabled(e){return this.disabled?!0:this.selectionDisablingMethod(e)},onClickDismiss(e){this.$emit("update:value",this.linePosition,this.value.filter((t,s)=>s!==e))},addNewLineAt(e){this.$emit("add-new-line",this.linePosition,e)},moveToNewPosition(e=null){this.$emit("position-move",this.linePosition,e)},onDelete(){this.$emit("update:value",this.linePosition)},openModal(){this.$emit("open-snippet-modal",this.linePosition)}}});const x='<div class="sw-settings-country-preview-template"> <div v-html="displayFormattingAddress"></div> </div>',{Component:A}=Cicada;A.register("sw-settings-country-preview-template",{template:x,props:{formattingAddress:{type:String,required:!0}},computed:{displayFormattingAddress(){return this.formattingAddress}}});Cicada.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"settings",key:"country",roles:{viewer:{privileges:["country:read","country_state:read","custom_field_set:read","custom_field:read","custom_field_set_relation:read","currency:read","user_config:read","customer:read","salutation:read","customer_address:read"],dependencies:[]},editor:{privileges:["country:update","country_state:read","country_state:create","country_state:update","country_state:delete"],dependencies:["country.viewer"]},creator:{privileges:["country:create"],dependencies:["country.viewer","country.editor"]},deleter:{privileges:["country:delete"],dependencies:["country.viewer"]}}});const{Module:I}=Cicada;Cicada.Component.register("sw-settings-country-list",()=>c(()=>import("./index-C_MPidus.js"),__vite__mapDeps([0,1])));Cicada.Component.register("sw-settings-country-detail",()=>c(()=>import("./index-CHNeqv99.js"),__vite__mapDeps([2,3])));Cicada.Component.extend("sw-settings-country-create","sw-settings-country-detail",()=>c(()=>import("./index-esDUM5Jm.js"),[]));Cicada.Component.register("sw-country-state-detail",()=>c(()=>import("./index-DtAqIPTA.js"),[]));Cicada.Component.register("sw-settings-country-general",()=>c(()=>import("./index-WZmv1cqO.js"),__vite__mapDeps([4,5])));Cicada.Component.register("sw-settings-country-state",()=>c(()=>import("./index-DIgzwgH4.js"),__vite__mapDeps([6,7])));Cicada.Component.register("sw-settings-country-currency-dependent-modal",()=>c(()=>import("./index-Bb-TuTaW.js"),__vite__mapDeps([8,9])));Cicada.Component.register("sw-settings-country-currency-hamburger-menu",()=>c(()=>import("./index-D9C0gmJg.js"),__vite__mapDeps([10,11])));I.register("sw-settings-country",{type:"core",name:"settings-country",title:"sw-settings-country.general.mainMenuItemGeneral",description:"Country section in the settings module",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",entity:"country",routes:{index:{component:"sw-settings-country-list",path:"index",meta:{parentPath:"sw.settings.index",privilege:"country.viewer"}},detail:{component:"sw-settings-country-detail",path:"detail/:id",meta:{parentPath:"sw.settings.country.index",privileges:["country.viewer","country.editor"]},redirect:{name:"sw.settings.country.detail.general"},children:{general:{component:"sw-settings-country-general",path:"general",meta:{parentPath:"sw.settings.country.index",privileges:["country.editor","country.creator"]}},state:{component:"sw-settings-country-state",path:"state",meta:{parentPath:"sw.settings.country.index",privileges:["country.editor","country.creator"]}},"address-handling":{component:"sw-settings-country-address-handling",path:"address-handling",meta:{parentPath:"sw.settings.country.index",privileges:["country.editor","country.creator"]}}}},create:{component:"sw-settings-country-create",path:"create",meta:{parentPath:"sw.settings.country.index",privilege:"country.creator"},redirect:{name:"sw.settings.country.create.general"},children:{general:{component:"sw-settings-country-general",path:"general",meta:{parentPath:"sw.settings.country.index",privilege:"country.creator"}},state:{component:"sw-settings-country-state",path:"state",meta:{parentPath:"sw.settings.country.index",privilege:"country.creator"}},"address-handling":{component:"sw-settings-country-address-handling",path:"address-handling",meta:{parentPath:"sw.settings.country.index",privileges:"country.creator"}}}}},settingsItem:{group:"shop",to:"sw.settings.country.index",icon:"regular-map",privilege:"country.viewer"}});
//# sourceMappingURL=index-BlJ7P2fB.js.map
