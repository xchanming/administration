import{a as Y}from"./channel-DxwX5hMG.js";import{R as Z}from"./retry.helper-BDu6eVqs.js";import"./administration-BlrHhDOI.js";const ee=`{% block sw_product_modal_variant_generation %} <sw-modal v-if="!showUploadModal" :title="$tc('sw-product.variations.configuratorModal.title')" class="sw-product-modal-variant-generation" @modal-close="$emit('modal-close')" > {% block sw_product_modal_variant_generation_sidebar %} <div class="sw-product-modal-variant-generation__sidebar"> {% block sw_product_modal_variant_generation_sidebar_tabs %} <sw-tabs is-vertical position-identifier="sw-product-modal-variant-generation" > {% block sw_product_modal_variant_generation_sidebar_tabs_items %} {% block sw_product_modal_variant_generation_sidebar_tabs_item_options %} <sw-tabs-item class="sw-variant-modal__option-selection" :active="activeTab == 'options'" @click="activeTab = 'options'" > {{ $tc('sw-product.variations.configuratorModal.selectOptions') }} </sw-tabs-item> {% endblock %} {% block sw_product_modal_variant_generation_sidebar_tabs_item_prices %} <sw-tabs-item v-show="variantsNumber" class="sw-variant-modal__surcharge-configuration" :active="activeTab == 'prices'" @click="activeTab = 'prices'" > {{ $tc('sw-product.variations.configuratorModal.priceSurcharges') }} </sw-tabs-item> {% endblock %} {% block sw_product_modal_variant_generation_sidebar_tabs_item_restrictions %} <sw-tabs-item v-show="variantsNumber" class="sw-variant-modal__restriction-configuration" :active="activeTab == 'restrictions'" @click="activeTab = 'restrictions'" > {{ $tc('sw-product.variations.configuratorModal.defineRestrictions') }} </sw-tabs-item> {% endblock %} {% endblock %} </sw-tabs> {% endblock %} {% block sw_product_modal_variant_generation_sidebar_descriptions %} {% block sw_product_modal_variant_generation_sidebar_descriptions_options %} <div v-if="activeTab == 'options'"> <p>{{ $tc('sw-product.variations.configuratorModal.selectOptionsExplanation') }}</p> {% block sw_product_modal_variant_generation_sidebar_add_only_selected %} <sw-switch-field v-model:value="isAddOnly" :label="$tc('sw-product.variations.configuratorModal.addVariantsOnly')" /> {% endblock %} </div> {% endblock %} {% block sw_product_modal_variant_generation_sidebar_descriptions_restrictions %} <p v-else-if="activeTab == 'restrictions'"> {{ $tc('sw-product.variations.configuratorModal.selectRestrictionsExplanation') }} </p> {% endblock %} {% block sw_product_modal_variant_generation_sidebar_descriptions_prices %} <p v-else-if="activeTab == 'prices'"> {{ $tc('sw-product.variations.configuratorModal.selectPricesExplanation') }} </p> {% endblock %} {% endblock %} </div> {% endblock %} {% block sw_product_modal_variant_generation_main %} <div class="sw-product-modal-variant-generation__main"> {# @deprecated tag:v6.7.0 - The property :disabled will be removed, use isAddOnly instead #} {% block sw_product_modal_variant_generation_main_configurator_selection %} <sw-product-variants-configurator-selection v-show="activeTab == 'options'" :product="product" :options="product.configuratorSettings" :overlay="false" :collapsible="false" :disabled="isAddOnly" :is-add-only="isAddOnly" @variations-finish-generate="$emit('variations-finish-generate')" @option-select="calcVariantsNumber()" /> {% endblock %} {% block sw_product_modal_variant_generation_main_configurator_prices %} <sw-product-variants-configurator-prices v-if="activeTab == 'prices'" :product="product" :selected-groups="selectedGroups" /> {% endblock %} {% block sw_product_modal_variant_generation_main_configurator_restrictions %} <sw-product-variants-configurator-restrictions v-if="activeTab == 'restrictions'" :product="product" :selected-groups="selectedGroups" /> {% endblock %} </div> {% endblock %} {% block sw_product_modal_variant_generation_footer %} <template #modal-footer> {% block sw_product_modal_variant_generation_footer_cancel %} <sw-button size="small" @click="onModalCancel" > {{ $tc('global.default.cancel') }} </sw-button> {% endblock %} {% block sw_product_modal_variant_generation_footer_generate %} <sw-button class="sw-product-variant-generation__next-action" variant="primary" size="small" @click="showNextStep" > {{ $tc('sw-product.variations.nextModalButton') }} </sw-button> {% endblock %} </template> {% endblock %} </sw-modal> <sw-modal v-else :title="$tc('sw-product.variations.configuratorModal.title')" class="sw-product-modal-variant-generation sw-product-modal-variant-generation__upload_files" @modal-close="$emit('modal-close')" > <div class="sw-product-modal-variant-generation__infoBox"> {{ $tc('sw-product.variations.configuratorModal.uploadInfoBoxHeader') }} <div class="sw-product-modal-variant-generation__infoBoxContent"> <span class="sw-product-modal-variant-generation__variant-amount"> {{ $tc('sw-product.variations.configuratorModal.uploadInfoBoxCount', variantGenerationQueue.createQueue.length, { count: variantGenerationQueue.createQueue.length }) }} </span> {{ $tc('sw-product.variations.configuratorModal.uploadInfoBoxCreateLabel', variantGenerationQueue.createQueue.length, { count: variantGenerationQueue.createQueue.length }) }} <span class="sw-product-modal-variant-generation__variant-amount"> {{ $tc('sw-product.variations.configuratorModal.uploadInfoBoxCount', variantGenerationQueue.deleteQueue.length, { count: variantGenerationQueue.deleteQueue.length }) }} </span> {{ $tc('sw-product.variations.configuratorModal.uploadInfoBoxDeleteLabel', variantGenerationQueue.deleteQueue.length, { count: variantGenerationQueue.deleteQueue.length }) }} </div> </div> <template v-if="variantGenerationQueue.createQueue.length > 0"> <div class="sw-product-modal-variant-generation__upload-card"> <div class="sw-product-modal-variant-generation__card-title"> {{ $tc('sw-product.variations.configuratorModal.uploadCardDescription') }} </div> <div class="sw-product-modal-variant-generation__upload-all-container"> <sw-switch-field :label="$tc('sw-product.variations.configuratorModal.digitalVariantSwitch')" @update:value="onChangeAllVariantValues" /> <div class="sw-product-modal-variant-generation__upload-all"> <sw-upload-listener upload-tag="upload_all" auto-upload @media-upload-finish="successfulUpload" /> <sw-media-compact-upload-v2 v-if="productDownloadFolderId" :button-label="$tc('sw-product.variations.configuratorModal.uploadAllButton')" :remove-button-label="$tc('sw-product.variations.configuratorModal.removeAllButton')" upload-tag="upload_all" private-filesystem :source-multiselect="downloadFilesForAllVariants.length > 0 ? downloadFilesForAllVariants : null" allow-multi-select add-files-on-multiselect :target-folder-id="productDownloadFolderId" file-accept="*/*" @delete-item="(file) => removeFileForAllVariants(file)" /> </div> </div> <div class="sw-product-modal-variant-generation__toolbar"> <sw-card-filter :placeholder="$tc('sw-product.variations.configuratorModal.uploadCardSearchPlaceholder')" @sw-card-filter-term-change="onTermChange" /> </div> <sw-data-grid class="sw-product-modal-variant-generation__grid" :data-source="paginatedVariantArray" :show-selection="false" :show-header="false" :show-actions="false" :compact-mode="false" :plain-appearance="true" :columns="[ { property: 'options', label: 'Optionen' }, ]" > <template #column-options="{ item }"> <div> <template v-for="(option, index) in item.options" :key="index" > <span v-if="option.entity" > {{ option.entity.group.translated?.name || option.entity.group.name }}: {{ option.entity.translated?.name || option.entity.name }} <template v-if="index != Object.keys(item.options).length - 1">|</template> </span> </template> </div> <div :key="item.id" class="sw-data-grid__item" > <sw-switch-field label="Digital" :value="item.productStates.includes('is-download')" @update:value="(event) => onChangeVariantValue(event, item)" /> <sw-upload-listener :upload-tag="item.productNumber" auto-upload @media-upload-finish="(event) => successfulUpload(event, item)" /> <sw-media-compact-upload-v2 v-if="productDownloadFolderId" :upload-tag="item.productNumber" :disabled="item.productStates.length === 0" private-filesystem allow-multi-select add-files-on-multiselect :source-multiselect="item.downloads.length > 0 ? item.downloads : null" :target-folder-id="productDownloadFolderId" file-accept="*/*" @delete-item="(file) => removeFile(\`\${file.fileName}.\${file.fileExtension}\`, item)" /> </div> </template> <template #pagination> <sw-pagination :page="page" :limit="limit" :total="total" :total-visible="7" @page-change="handlePageChange" /> </template> </sw-data-grid> </div> </template> <template #modal-footer> <sw-button size="small" @click="showUploadModal = false" > {{ $tc('sw-product.variations.backVariationsButton') }} </sw-button> <sw-button :disabled="isGenerateButtonDisabled" class="sw-product-variant-generation__generate-action" :variant="buttonVariant" size="small" @click="generateVariants()" > {{ buttonLabel }} </sw-button> </template> <template #modal-loader> <transition name="generate-variant-progress-bar-transition"> <div v-if="isLoading" class="generate-variant-progress-bar__wrapper" > <sw-progress-bar class="generate-variant-progress-bar" :value="progressInPercentage" /> <span class="generate-variant-progress-bar__description"> {{ actualProgress }} {{ $tc('sw-product.variations.progressTypeOf') }} {{ maxProgress }} {{ $tc('sw-product.variations.progressTypeVariation') }} {{ progressMessage }} </span> </div> </transition> </template> </sw-modal> {% endblock %}`;var $={exports:{}},w=typeof Reflect=="object"?Reflect:null,T=w&&typeof w.apply=="function"?w.apply:function(e,i,r){return Function.prototype.apply.call(e,i,r)},x;w&&typeof w.ownKeys=="function"?x=w.ownKeys:Object.getOwnPropertySymbols?x=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:x=function(e){return Object.getOwnPropertyNames(e)};function te(t){console&&console.warn&&console.warn(t)}var R=Number.isNaN||function(e){return e!==e};function a(){a.init.call(this)}$.exports=a;$.exports.once=se;a.EventEmitter=a;a.prototype._events=void 0;a.prototype._eventsCount=0;a.prototype._maxListeners=void 0;var N=10;function C(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return N},set:function(t){if(typeof t!="number"||t<0||R(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");N=t}});a.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};a.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||R(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function j(t){return t._maxListeners===void 0?a.defaultMaxListeners:t._maxListeners}a.prototype.getMaxListeners=function(){return j(this)};a.prototype.emit=function(e){for(var i=[],r=1;r<arguments.length;r++)i.push(arguments[r]);var n=e==="error",o=this._events;if(o!==void 0)n=n&&o.error===void 0;else if(!n)return!1;if(n){var s;if(i.length>0&&(s=i[0]),s instanceof Error)throw s;var l=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw l.context=s,l}var d=o[e];if(d===void 0)return!1;if(typeof d=="function")T(d,this,i);else for(var u=d.length,h=K(d,u),r=0;r<u;++r)T(h[r],this,i);return!0};function D(t,e,i,r){var n,o,s;if(C(i),o=t._events,o===void 0?(o=t._events=Object.create(null),t._eventsCount=0):(o.newListener!==void 0&&(t.emit("newListener",e,i.listener?i.listener:i),o=t._events),s=o[e]),s===void 0)s=o[e]=i,++t._eventsCount;else if(typeof s=="function"?s=o[e]=r?[i,s]:[s,i]:r?s.unshift(i):s.push(i),n=j(t),n>0&&s.length>n&&!s.warned){s.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=s.length,te(l)}return t}a.prototype.addListener=function(e,i){return D(this,e,i,!1)};a.prototype.on=a.prototype.addListener;a.prototype.prependListener=function(e,i){return D(this,e,i,!0)};function ie(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function U(t,e,i){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:i},n=ie.bind(r);return n.listener=i,r.wrapFn=n,n}a.prototype.once=function(e,i){return C(i),this.on(e,U(this,e,i)),this};a.prototype.prependOnceListener=function(e,i){return C(i),this.prependListener(e,U(this,e,i)),this};a.prototype.removeListener=function(e,i){var r,n,o,s,l;if(C(i),n=this._events,n===void 0)return this;if(r=n[e],r===void 0)return this;if(r===i||r.listener===i)--this._eventsCount===0?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||i));else if(typeof r!="function"){for(o=-1,s=r.length-1;s>=0;s--)if(r[s]===i||r[s].listener===i){l=r[s].listener,o=s;break}if(o<0)return this;o===0?r.shift():re(r,o),r.length===1&&(n[e]=r[0]),n.removeListener!==void 0&&this.emit("removeListener",e,l||i)}return this};a.prototype.off=a.prototype.removeListener;a.prototype.removeAllListeners=function(e){var i,r,n;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[e]),this;if(arguments.length===0){var o=Object.keys(r),s;for(n=0;n<o.length;++n)s=o[n],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(i=r[e],typeof i=="function")this.removeListener(e,i);else if(i!==void 0)for(n=i.length-1;n>=0;n--)this.removeListener(e,i[n]);return this};function B(t,e,i){var r=t._events;if(r===void 0)return[];var n=r[e];return n===void 0?[]:typeof n=="function"?i?[n.listener||n]:[n]:i?ne(n):K(n,n.length)}a.prototype.listeners=function(e){return B(this,e,!0)};a.prototype.rawListeners=function(e){return B(this,e,!1)};a.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):H.call(t,e)};a.prototype.listenerCount=H;function H(t){var e=this._events;if(e!==void 0){var i=e[t];if(typeof i=="function")return 1;if(i!==void 0)return i.length}return 0}a.prototype.eventNames=function(){return this._eventsCount>0?x(this._events):[]};function K(t,e){for(var i=new Array(e),r=0;r<e;++r)i[r]=t[r];return i}function re(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function ne(t){for(var e=new Array(t.length),i=0;i<e.length;++i)e[i]=t[i].listener||t[i];return e}function se(t,e){return new Promise(function(i,r){function n(s){t.removeListener(e,o),r(s)}function o(){typeof t.removeListener=="function"&&t.removeListener("error",n),i([].slice.call(arguments))}z(t,e,o,{once:!0}),e!=="error"&&oe(t,n,{once:!0})})}function oe(t,e,i){typeof t.on=="function"&&z(t,"error",e,i)}function z(t,e,i,r){if(typeof t.on=="function")r.once?t.once(e,i):t.on(e,i);else if(typeof t.addEventListener=="function")t.addEventListener(e,function n(o){r.once&&t.removeEventListener(e,n),i(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var ae=$.exports;const le=Y(ae),{deepCopyObject:de}=Cicada.Utils.object,{md5:V}=Cicada.Utils.format;class ue extends le{constructor(){super(),this.product=null,this.productIds=[],this.syncService=Cicada.Service("syncService"),this.cacheService=Cicada.Service("cacheApiService"),this.httpClient=this.syncService.httpClient,this.languageId=null}saveVariants(e){return new Promise(i=>{this.emit("progress-max",{type:"delete",progress:e.deleteQueue.length});const r=e.deleteQueue.map(n=>({id:n}));this.processQueue("delete",r,0,10,i)}).then(()=>(this.emit("progress-max",{type:"upsert",progress:e.createQueue.length}),new Promise(i=>{this.processQueue("upsert",e.createQueue,0,10,i)}))).then(()=>{this.indexProducts(this.productIds)})}generateVariants(e,i,r=!1){this.product=i;const n=this.product.configuratorSettings;return(!this.product.variantListingConfig||!this.product.variantListingConfig.displayParent&&!this.product.variantListingConfig.configuratorGroupConfig&&!this.product.variantListingConfig.mainVariantId)&&(this.product.variantListingConfig={},this.product.variantListingConfig.displayParent=!0),new Promise(()=>{const o=this.groupTheOptions(n);if(o.length<=0){this.loadExisting(this.product.id).then(l=>{const d=Object.keys(l).map(u=>u);this.emit("queues",{createQueue:[],deleteQueue:r?[]:d})});return}const s=this.buildCombinations(o);this.loadExisting(this.product.id).then(l=>this.filterVariations(s,l,e,r)).then(l=>{this.emit("queues",l)})})}filterVariations(e,i,r,n=!1){const o=this.product.configuratorSettings;return new Promise(s=>{const l=[],d={},u={},h={};for(const[c,p]of Object.entries(i)){const y=V(JSON.stringify(p.options.sort()));d[y]=c,h[y]=p.productNumber,u[p.productNumber]=!0}let f=[];n||(f=de(d));const g=e.map(c=>c.sort()),W=o.reduce((c,p)=>(c.push({id:p.option.id,price:p.price}),c),[]);this.emit("progress-max",{type:"calc",progress:g.length});let Q=1;g.forEach(c=>{const p=V(JSON.stringify(c));d[p]!==void 0&&delete f[p]}),Object.keys(f).forEach(c=>{delete u[h[c]]}),g.forEach(c=>{const p=V(JSON.stringify(c));if(d[p]!==void 0)return;const k=c.map(_=>({id:_}));let v={};k.map(_=>_.id).forEach(_=>{W.forEach(F=>{F.price&&F.id===_&&F.price.forEach(m=>{const O=m.currencyId;let L;v[O]?L=v[O]:L=this.product.price.find(S=>S.currencyId===m.currencyId);let E=L;if(!L){const S=r.find(b=>b.isSystemDefault),P=this.product.price.find(b=>b.currencyId===S.id),M=r.find(b=>b.id===m.currencyId);E={net:P.net*M.factor,gross:P.gross*M.factor}}const q=E.gross+m.gross,X=E.net+m.net;v[O]={currencyId:m.currencyId,gross:q,linked:m.linked,net:X}})})});const A=this.createNumber(this.product.productNumber,Q,u);Q=A.increment;const I={parentId:this.product.id,options:k,stock:0,productNumber:A.number};v=Object.values(v),v.length>0&&(I.price=v),l.push(I)}),f=Object.values(f);const J=this.filterRestrictions(l);s({deleteQueue:f,createQueue:J})})}createNumber(e,i,r){let n=!0,o=null;for(;n;)o=`${e}.${i}`,n=r.hasOwnProperty(o),i+=1;return{number:o,increment:i}}filterRestrictions(e){const r=(this.product.variantRestrictions||[]).map(n=>n.values.map(o=>o.options));return r.length<=0?e:e.filter(n=>{const o=n.options.map(s=>s.id);return r.reduce((s,l)=>l.reduce((u,h)=>h.find(g=>o.indexOf(g)>=0)?u:!1,!0)?!1:s,!0)})}loadExisting(e){return this.httpClient.get(`/_action/product/${e}/combinations`,{headers:this.syncService.getBasicHeaders()}).then(i=>i.data)}groupTheOptions(e){const i=e.reduce((r,n)=>{const o=n.option.groupId,s=r[o];return s?(s.push(n.option.id),r):(r[o]=[n.option.id],r)},{});return Object.values(i)}buildCombinations(e,i=[],r=null,n=0){const o=[];return r!==null&&i.push(r),n>=e.length?(o.push(i),o):(e[n].forEach(s=>{this.buildCombinations(e,i.slice(),s,n+1).forEach(d=>{o.push(d)})}),o)}processQueue(e,i,r,n,o){const s=i.slice(r,r+n);if(s.length<=0){o();return}this.emit("progress-actual",{type:e,progress:r});const l=[{action:e,entity:"product",payload:s}],d={"single-operation":1};Z.retry(()=>this.syncService.sync(l,{"indexing-behavior":"disable-indexing"},d)).then(u=>{var h,f,g;this.productIds.concat(((h=u.data)==null?void 0:h.product)??[]).concat(((g=(f=u.data)==null?void 0:f.deleted)==null?void 0:g.product)??[]),this.processQueue(e,i,r+n,n,o)})}indexProducts(e){e.length<=0||this.cacheService.indexProducts(e)}}const{Criteria:G}=Cicada.Data,{Mixin:ce,Context:pe}=Cicada,{mapState:fe}=Cicada.Component.getComponentHelper(),me={template:ee,compatConfig:Cicada.compatConfig,inject:["repositoryFactory","mediaService","swProductDetailLoadAll"],emits:["modal-close","variations-finish-generate"],mixins:[ce.getByName("listing")],props:{product:{type:Object,required:!0},groups:{type:Array,required:!0},selectedGroups:{type:Array,required:!0},actualStatus:{type:String,default:"is-physical",required:!1}},data(){return{activeTab:"options",isLoading:!1,actualProgress:0,maxProgress:0,progressType:"",variantsNumber:0,variantsGenerator:null,showUploadModal:!1,variantGenerationQueue:{createQueue:[],deleteQueue:[]},term:"",paginatedVariantArray:[],disableRouteParams:!0,downloadFilesForAllVariants:[],usageOfFiles:{},idToIndex:{},productDownloadFolderId:null,isAddOnly:!1,originalConfiguratorSettings:[]}},computed:{...fe("swProductDetail",["currencies"]),productRepository(){return this.repositoryFactory.create("product")},optionRepository(){return this.repositoryFactory.create("property_group_option")},mediaRepository(){return this.repositoryFactory.create("media")},progressInPercentage(){return this.actualProgress/(this.maxProgress*100)},progressMessage(){return this.progressType==="delete"?this.$tc("sw-product.variations.progressTypeDeleted"):this.progressType==="upsert"?this.$tc("sw-product.variations.progressTypeGenerated"):this.progressType==="calc"?this.$tc("sw-product.variations.progressTypeCalculated"):""},buttonVariant(){return this.variantsNumber<=0?"danger":"primary"},buttonLabel(){return this.variantsNumber<=0?this.$tc("sw-product.variations.deleteVariationsButton"):this.$tc("sw-product.variations.generateVariationsButton")},isGenerateButtonDisabled(){return this.variantGenerationQueue.createQueue.some(t=>{var e;return t.downloads.length===0&&((e=t.productStates)==null?void 0:e.includes("is-download"))})}},watch:{variantGenerationQueue(){this.getList(),this.showUploadModal=!0},isAddOnly(){if(this.isAddOnly){this.emptyConfiguratorSettings();return}this.addOriginalConfiguratorSettings()}},created(){this.createdComponent()},methods:{createdComponent(){this.mediaService.getDefaultFolderId("product_download").then(t=>{this.productDownloadFolderId=t}),this.variantsGenerator=new ue,this.term="",this.variantsGenerator.on("queues",t=>{const e=this.product.configuratorSettings.reduce((i,r)=>(i.indexOf(r.option.id)<0&&i.push(r.option.id),i),[]);if(e.length>0){const i=new G(1,500);i.addFilter(G.equalsAny("id",e)),i.addAssociation("group"),this.optionRepository.search(i).then(r=>{t.createQueue.forEach((n,o)=>{n.options.forEach(s=>{s.entity=r.get(s.id)}),n.options.sort((s,l)=>{const d=s.entity.group.name,u=l.entity.group.name;return d.localeCompare(u)}),n.downloads=[],n.productStates=[],n.id=n.productNumber,this.idToIndex[n.id]=o}),this.variantGenerationQueue=t,this.total=t.createQueue.length})}else this.variantGenerationQueue=t,this.total=t.createQueue.length;this.isLoading=!1}),this.variantsGenerator.on("progress-max",t=>{this.maxProgress=t.progress,this.progressType=t.type}),this.variantsGenerator.on("progress-actual",t=>{this.actualProgress=t.progress,this.progressType=t.type})},removeFile(t,e){e.downloads=e.downloads.filter(r=>`${r.fileName}.${r.fileExtension}`!==t),this.usageOfFiles[t]=this.usageOfFiles[t].filter(r=>r!==e.id),this.usageOfFiles[t].length===0&&delete this.usageOfFiles[t],this.usageOfFiles[t]||(this.downloadFilesForAllVariants=this.downloadFilesForAllVariants.filter(r=>`${r.fileName}.${r.fileExtension}`!==t))},removeFileForAllVariants(t){const e=`${t.fileName}.${t.fileExtension}`,i=this.usageOfFiles[e];i&&(i.forEach(r=>{const n=this.idToIndex[r],o=this.variantGenerationQueue.createQueue[n];o.downloads=o.downloads.filter(s=>`${s.fileName}.${s.fileExtension}`!==e)}),delete this.usageOfFiles[e]),this.downloadFilesForAllVariants=this.downloadFilesForAllVariants.filter(r=>r.id!==t.id)},getList(){if(!this.variantGenerationQueue){this.paginatedVariantArray=[];return}const t=[];this.variantGenerationQueue.createQueue.forEach(r=>{r.options.some(n=>{var s;return(((s=n.entity.translated)==null?void 0:s.name)||n.entity.name).toUpperCase().includes(this.term.toUpperCase())||this.term===""?(t.push(r),!0):!1})});const e=this.page*this.limit-this.limit,i=e+this.limit;this.total=t.length,this.paginatedVariantArray=t.slice(e,i)},handlePageChange(t){this.onPageChange(t),this.getList()},generateVariants(){this.isLoading=!0,this.variantGenerationQueue.createQueue.forEach(t=>{delete t.id,t.productStates.includes("is-download")&&(t.maxPurchase=1,t.minPurchase=1,t.isCloseout=!1,t.shippingFree=!1);const e=[];t.downloads.forEach(i=>{e.push({mediaId:i.id})}),t.downloads=e}),this.variantsGenerator.saveVariants(this.variantGenerationQueue).then(()=>(this.addOriginalConfiguratorSettings(),this.productRepository.save(this.product))).then(()=>{this.$emit("variations-finish-generate"),this.$emit("modal-close"),this.isLoading=!1,this.actualProgress=0,this.maxProgress=0,this.swProductDetailLoadAll()})},showNextStep(){this.isLoading=!0,this.variantsGenerator.generateVariants(this.currencies,this.product,this.isAddOnly),this.isLoading=!1},calcVariantsNumber(){const t=this.product.configuratorSettings.reduce((i,r)=>{const n=r.option.groupId,o=i[n];return o?(o.push(r.option.id),i):(i[n]=[r.option.id],i)},{}),e=Object.values(t);this.variantsNumber=e.length>0?e.map(i=>i.length).reduce((i,r)=>i*r):0},onChangeAllVariantValues(t){let e=this.variantGenerationQueue.createQueue;if(this.term&&(e=this.paginatedVariantArray),!t){this.usageOfFiles={},e.forEach(i=>{i.downloads=[],i.productStates=[]}),this.getList();return}e.forEach(i=>{i.downloads=[...this.downloadFilesForAllVariants],this.updateUsageForAllVariantFiles(i.id),i.productStates=["is-download"]}),this.getList()},onChangeVariantValue(t,e){if(!t){Object.keys(this.usageOfFiles).forEach(i=>{this.usageOfFiles[i]=this.usageOfFiles[i].filter(r=>r!==e.id),this.usageOfFiles[i].length===0&&(delete this.usageOfFiles[i],this.downloadFilesForAllVariants=this.downloadFilesForAllVariants.filter(r=>`${r.fileName}.${r.fileExtension}`!==i))}),e.downloads=[],e.productStates=[];return}e.downloads=[...this.downloadFilesForAllVariants],this.updateUsageForAllVariantFiles(e.id),e.productStates=["is-download"]},isUploadDisabled(t){return t.downloads.length===0},isExistingMedia(t,e){return t.some(({id:i})=>i===e)},successfulUpload(t,e){this.mediaRepository.get(t.targetId,pe.api).then(i=>{if(e){if(this.isExistingMedia(e.downloads,t.targetId))return;e.downloads.push(i),this.pushFileToUsageList(`${i.fileName}.${i.fileExtension}`,e.id);return}this.isExistingMedia(this.downloadFilesForAllVariants,t.targetId)||this.downloadFilesForAllVariants.push(i);let r=this.variantGenerationQueue.createQueue;this.term&&(r=this.paginatedVariantArray),r.forEach(n=>{if(n.productStates.includes("is-download")){if(this.isExistingMedia(n.downloads,t.targetId))return;n.downloads.push(i),this.pushFileToUsageList(`${i.fileName}.${i.fileExtension}`,n.id)}})})},updateUsageForAllVariantFiles(t){this.downloadFilesForAllVariants.forEach(e=>{this.pushFileToUsageList(`${e.fileName}.${e.fileExtension}`,t)})},pushFileToUsageList(t,e){this.usageOfFiles[t]||(this.usageOfFiles[t]=[]),this.usageOfFiles[t].push(e)},onModalCancel(){this.addOriginalConfiguratorSettings(),this.$emit("modal-close")},addOriginalConfiguratorSettings(){this.removeDuplicateEntries(),this.originalConfiguratorSettings.forEach(t=>{this.product.configuratorSettings.add(t)}),this.calcVariantsNumber()},emptyConfiguratorSettings(){this.originalConfiguratorSettings=[],this.product.configuratorSettings.getIds().forEach(t=>{this.originalConfiguratorSettings.push(this.product.configuratorSettings.get(t)),this.product.configuratorSettings.remove(t)}),this.calcVariantsNumber()},onTermChange(t){this.term=t,this.getList()},removeDuplicateEntries(){const t=this;this.product.configuratorSettings.getIds().forEach(e=>{const i=t.product.configuratorSettings.get(e);this.originalConfiguratorSettings.find(r=>r.optionId===i.optionId)!==void 0&&t.product.configuratorSettings.remove(e)})}}};export{me as default};
//# sourceMappingURL=index-BwMca_Dx.js.map
