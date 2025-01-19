(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[51609],{717187:function(e){"use strict";var t,n="object"==typeof Reflect?Reflect:null,i=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise(function(n,i){function r(n){e.removeListener(t,o),i(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}f(e,t,o,{once:!0}),"error"!==t&&"function"==typeof e.on&&f(e,"error",r,{once:!0})})},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var a=10;function s(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function d(e,t,n,i){if(s(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount;else if("function"==typeof a?a=o[t]=i?[n,a]:[a,n]:i?a.unshift(n):a.push(n),(r=l(e))>0&&a.length>r&&!a.warned){a.warned=!0;var r,o,a,d=Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");d.name="MaxListenersExceededWarning",d.emitter=e,d.type=t,d.count=a.length,console&&console.warn&&console.warn(d)}return e}function c(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function u(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=c.bind(i);return r.listener=n,i.wrapFn=r,r}function p(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):g(r,r.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(e,t){for(var n=Array(t),i=0;i<t;++i)n[i]=e[i];return n}function f(e,t,n,i){if("function"==typeof e.on)i.once?e.once(t,n):e.on(t,n);else if("function"==typeof e.addEventListener)e.addEventListener(t,function r(o){i.once&&e.removeEventListener(t,r),n(o)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||r(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),o.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return l(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var a,s=Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var l=o[e];if(void 0===l)return!1;if("function"==typeof l)i(l,this,t);else for(var d=l.length,c=g(l,d),n=0;n<d;++n)i(c[n],this,t);return!0},o.prototype.addListener=function(e,t){return d(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return d(this,e,t,!0)},o.prototype.once=function(e,t){return s(t),this.on(e,u(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,u(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,i,r,o,a;if(s(t),void 0===(i=this._events)||void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,r=o;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,a||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0==arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},o.prototype.listeners=function(e){return p(this,e,!0)},o.prototype.rawListeners=function(e){return p(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},o.prototype.listenerCount=h,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},529296:function(){},551609:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var i=n(717187),r=n.n(i),o=n(196357);let{deepCopyObject:a}=Cicada.Utils.object,{md5:s}=Cicada.Utils.format;class l extends r(){constructor(){super(),this.product=null,this.productIds=[],this.syncService=Cicada.Service("syncService"),this.cacheService=Cicada.Service("cacheApiService"),this.httpClient=this.syncService.httpClient,this.languageId=null}saveVariants(e){return new Promise(t=>{this.emit("progress-max",{type:"delete",progress:e.deleteQueue.length});let n=e.deleteQueue.map(e=>({id:e}));this.processQueue("delete",n,0,10,t)}).then(()=>(this.emit("progress-max",{type:"upsert",progress:e.createQueue.length}),new Promise(t=>{this.processQueue("upsert",e.createQueue,0,10,t)}))).then(()=>{this.indexProducts(this.productIds)})}generateVariants(e,t,n=!1){this.product=t;let i=this.product.configuratorSettings;return this.product.variantListingConfig&&(this.product.variantListingConfig.displayParent||this.product.variantListingConfig.configuratorGroupConfig||this.product.variantListingConfig.mainVariantId)||(this.product.variantListingConfig={},this.product.variantListingConfig.displayParent=!0),new Promise(()=>{let t=this.groupTheOptions(i);if(t.length<=0){this.loadExisting(this.product.id).then(e=>{let t=Object.keys(e).map(e=>e);this.emit("queues",{createQueue:[],deleteQueue:n?[]:t})});return}let r=this.buildCombinations(t);this.loadExisting(this.product.id).then(t=>this.filterVariations(r,t,e,n)).then(e=>{this.emit("queues",e)})})}filterVariations(e,t,n,i=!1){let r=this.product.configuratorSettings;return new Promise(o=>{let l=[],d={},c={},u={};for(let[e,n]of Object.entries(t)){let t=s(JSON.stringify(n.options.sort()));d[t]=e,u[t]=n.productNumber,c[n.productNumber]=!0}let p=[];i||(p=a(d));let h=e.map(e=>e.sort()),g=r.reduce((e,t)=>(e.push({id:t.option.id,price:t.price}),e),[]);this.emit("progress-max",{type:"calc",progress:h.length});let f=1;h.forEach(e=>{let t=s(JSON.stringify(e));void 0!==d[t]&&delete p[t]}),Object.keys(p).forEach(e=>{delete c[u[e]]}),h.forEach(e=>{if(void 0!==d[s(JSON.stringify(e))])return;let t=e.map(e=>({id:e})),i={};t.map(e=>e.id).forEach(e=>{g.forEach(t=>{t.price&&t.id===e&&t.price.forEach(e=>{let t;let r=e.currencyId,o=t=i[r]?i[r]:this.product.price.find(t=>t.currencyId===e.currencyId);if(!t){let t=n.find(e=>e.isSystemDefault),i=this.product.price.find(e=>e.currencyId===t.id),r=n.find(t=>t.id===e.currencyId);o={net:i.net*r.factor,gross:i.gross*r.factor}}let a=o.gross+e.gross,s=o.net+e.net;i[r]={currencyId:e.currencyId,gross:a,linked:e.linked,net:s}})})});let r=this.createNumber(this.product.productNumber,f,c);f=r.increment;let o={parentId:this.product.id,options:t,stock:0,productNumber:r.number};(i=Object.values(i)).length>0&&(o.price=i),l.push(o)}),p=Object.values(p);let v=this.filterRestrictions(l);o({deleteQueue:p,createQueue:v})})}createNumber(e,t,n){let i=!0,r=null;for(;i;)r=`${e}.${t}`,i=n.hasOwnProperty(r),t+=1;return{number:r,increment:t}}filterRestrictions(e){let t=(this.product.variantRestrictions||[]).map(e=>e.values.map(e=>e.options));return t.length<=0?e:e.filter(e=>{let n=e.options.map(e=>e.id);return t.reduce((e,t)=>!t.reduce((e,t)=>!!t.find(e=>n.indexOf(e)>=0)&&e,!0)&&e,!0)})}loadExisting(e){return this.httpClient.get(`/_action/product/${e}/combinations`,{headers:this.syncService.getBasicHeaders()}).then(e=>e.data)}groupTheOptions(e){return Object.values(e.reduce((e,t)=>{let n=t.option.groupId,i=e[n];return i?i.push(t.option.id):e[n]=[t.option.id],e},{}))}buildCombinations(e,t=[],n=null,i=0){let r=[];return(null!==n&&t.push(n),i>=e.length)?r.push(t):e[i].forEach(n=>{this.buildCombinations(e,t.slice(),n,i+1).forEach(e=>{r.push(e)})}),r}processQueue(e,t,n,i,r){let a=t.slice(n,n+i);if(a.length<=0){r();return}this.emit("progress-actual",{type:e,progress:n});let s=[{action:e,entity:"product",payload:a}],l={"single-operation":1};o.Z.retry(()=>this.syncService.sync(s,{"indexing-behavior":"disable-indexing"},l)).then(o=>{this.productIds.concat(o.data?.product??[]).concat(o.data?.deleted?.product??[]),this.processQueue(e,t,n+i,i,r)})}indexProducts(e){e.length<=0||this.cacheService.indexProducts(e)}}n(466959);let{Criteria:d}=Cicada.Data,{Mixin:c,Context:u}=Cicada,{mapState:p}=Cicada.Component.getComponentHelper();var h={template:'\n{% block sw_product_modal_variant_generation %}\n<sw-modal\n    v-if="!showUploadModal"\n    :title="$tc(\'sw-product.variations.configuratorModal.title\')"\n    class="sw-product-modal-variant-generation"\n    @modal-close="$emit(\'modal-close\')"\n>\n\n    \n    {% block sw_product_modal_variant_generation_sidebar %}\n    <div class="sw-product-modal-variant-generation__sidebar">\n        \n        {% block sw_product_modal_variant_generation_sidebar_tabs %}\n        <sw-tabs\n            is-vertical\n            position-identifier="sw-product-modal-variant-generation"\n        >\n            \n            {% block sw_product_modal_variant_generation_sidebar_tabs_items %}\n\n            \n            {% block sw_product_modal_variant_generation_sidebar_tabs_item_options %}\n            <sw-tabs-item\n                class="sw-variant-modal__option-selection"\n                :active="activeTab == \'options\'"\n                @click="activeTab = \'options\'"\n            >\n                {{ $tc(\'sw-product.variations.configuratorModal.selectOptions\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            \n            {% block sw_product_modal_variant_generation_sidebar_tabs_item_prices %}\n            <sw-tabs-item\n                v-show="variantsNumber"\n                class="sw-variant-modal__surcharge-configuration"\n                :active="activeTab == \'prices\'"\n                @click="activeTab = \'prices\'"\n            >\n                {{ $tc(\'sw-product.variations.configuratorModal.priceSurcharges\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            \n            {% block sw_product_modal_variant_generation_sidebar_tabs_item_restrictions %}\n            <sw-tabs-item\n                v-show="variantsNumber"\n                class="sw-variant-modal__restriction-configuration"\n                :active="activeTab == \'restrictions\'"\n                @click="activeTab = \'restrictions\'"\n            >\n                {{ $tc(\'sw-product.variations.configuratorModal.defineRestrictions\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            {% endblock %}\n        </sw-tabs>\n        {% endblock %}\n\n        \n        {% block sw_product_modal_variant_generation_sidebar_descriptions %}\n        \n        {% block sw_product_modal_variant_generation_sidebar_descriptions_options %}\n        <div v-if="activeTab == \'options\'">\n            <p>{{ $tc(\'sw-product.variations.configuratorModal.selectOptionsExplanation\') }}</p>\n            \n            {% block sw_product_modal_variant_generation_sidebar_add_only_selected %}\n            <sw-switch-field\n                v-model:value="isAddOnly"\n                :label="$tc(\'sw-product.variations.configuratorModal.addVariantsOnly\')"\n            />\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_product_modal_variant_generation_sidebar_descriptions_restrictions %}\n        <p v-else-if="activeTab == \'restrictions\'">\n            {{ $tc(\'sw-product.variations.configuratorModal.selectRestrictionsExplanation\') }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_product_modal_variant_generation_sidebar_descriptions_prices %}\n        <p v-else-if="activeTab == \'prices\'">\n            {{ $tc(\'sw-product.variations.configuratorModal.selectPricesExplanation\') }}\n        </p>\n        {% endblock %}\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_modal_variant_generation_main %}\n    <div class="sw-product-modal-variant-generation__main">\n        {# @deprecated tag:v6.7.0 - The property :disabled will be removed, use isAddOnly instead #}\n        \n        {% block sw_product_modal_variant_generation_main_configurator_selection %}\n        <sw-product-variants-configurator-selection\n            v-show="activeTab == \'options\'"\n            :product="product"\n            :options="product.configuratorSettings"\n            :overlay="false"\n            :collapsible="false"\n            :disabled="isAddOnly"\n            :is-add-only="isAddOnly"\n            @variations-finish-generate="$emit(\'variations-finish-generate\')"\n            @option-select="calcVariantsNumber()"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_modal_variant_generation_main_configurator_prices %}\n        <sw-product-variants-configurator-prices\n            v-if="activeTab == \'prices\'"\n            :product="product"\n            :selected-groups="selectedGroups"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_modal_variant_generation_main_configurator_restrictions %}\n        <sw-product-variants-configurator-restrictions\n            v-if="activeTab == \'restrictions\'"\n            :product="product"\n            :selected-groups="selectedGroups"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_modal_variant_generation_footer %}\n    <template #modal-footer>\n        \n        {% block sw_product_modal_variant_generation_footer_cancel %}\n        <sw-button\n            size="small"\n            @click="onModalCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n        \n        {% block sw_product_modal_variant_generation_footer_generate %}\n        <sw-button\n            class="sw-product-variant-generation__next-action"\n            variant="primary"\n            size="small"\n            @click="showNextStep"\n        >\n            {{ $tc(\'sw-product.variations.nextModalButton\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n</sw-modal>\n\n<sw-modal\n    v-else\n    :title="$tc(\'sw-product.variations.configuratorModal.title\')"\n    class="sw-product-modal-variant-generation sw-product-modal-variant-generation__upload_files"\n    @modal-close="$emit(\'modal-close\')"\n>\n    <div class="sw-product-modal-variant-generation__infoBox">\n        {{ $tc(\'sw-product.variations.configuratorModal.uploadInfoBoxHeader\') }}\n        <div class="sw-product-modal-variant-generation__infoBoxContent">\n            <span class="sw-product-modal-variant-generation__variant-amount">\n                {{ $tc(\'sw-product.variations.configuratorModal.uploadInfoBoxCount\', variantGenerationQueue.createQueue.length, { count: variantGenerationQueue.createQueue.length }) }}\n            </span>\n            {{ $tc(\'sw-product.variations.configuratorModal.uploadInfoBoxCreateLabel\', variantGenerationQueue.createQueue.length, { count: variantGenerationQueue.createQueue.length }) }}\n\n            <span class="sw-product-modal-variant-generation__variant-amount">\n                {{ $tc(\'sw-product.variations.configuratorModal.uploadInfoBoxCount\', variantGenerationQueue.deleteQueue.length, { count: variantGenerationQueue.deleteQueue.length }) }}\n            </span>\n            {{ $tc(\'sw-product.variations.configuratorModal.uploadInfoBoxDeleteLabel\', variantGenerationQueue.deleteQueue.length, { count: variantGenerationQueue.deleteQueue.length }) }}\n        </div>\n    </div>\n\n    <template v-if="variantGenerationQueue.createQueue.length > 0">\n        <div class="sw-product-modal-variant-generation__upload-card">\n            <div class="sw-product-modal-variant-generation__card-title">\n                {{ $tc(\'sw-product.variations.configuratorModal.uploadCardDescription\') }}\n            </div>\n\n            <div class="sw-product-modal-variant-generation__upload-all-container">\n                <sw-switch-field\n                    :label="$tc(\'sw-product.variations.configuratorModal.digitalVariantSwitch\')"\n                    @update:value="onChangeAllVariantValues"\n                />\n                <div class="sw-product-modal-variant-generation__upload-all">\n                    <sw-upload-listener\n                        upload-tag="upload_all"\n                        auto-upload\n                        @media-upload-finish="successfulUpload"\n                    />\n                    <sw-media-compact-upload-v2\n                        v-if="productDownloadFolderId"\n                        :button-label="$tc(\'sw-product.variations.configuratorModal.uploadAllButton\')"\n                        :remove-button-label="$tc(\'sw-product.variations.configuratorModal.removeAllButton\')"\n                        upload-tag="upload_all"\n                        private-filesystem\n                        :source-multiselect="downloadFilesForAllVariants.length > 0 ? downloadFilesForAllVariants : null"\n                        allow-multi-select\n                        add-files-on-multiselect\n                        :target-folder-id="productDownloadFolderId"\n                        file-accept="*/*"\n                        @delete-item="(file) => removeFileForAllVariants(file)"\n                    />\n                </div>\n            </div>\n\n            <div class="sw-product-modal-variant-generation__toolbar">\n                <sw-card-filter\n                    :placeholder="$tc(\'sw-product.variations.configuratorModal.uploadCardSearchPlaceholder\')"\n                    @sw-card-filter-term-change="onTermChange"\n                />\n            </div>\n\n            <sw-data-grid\n                class="sw-product-modal-variant-generation__grid"\n                :data-source="paginatedVariantArray"\n                :show-selection="false"\n                :show-header="false"\n                :show-actions="false"\n                :compact-mode="false"\n                :plain-appearance="true"\n                :columns="[\n                    { property: \'options\', label: \'Optionen\' },\n                ]"\n            >\n                <template #column-options="{ item }">\n                    <div>\n                        <template\n                            v-for="(option, index) in item.options"\n                            :key="index"\n                        >\n                            <span\n                                v-if="option.entity"\n                            >\n                                {{ option.entity.group.translated?.name || option.entity.group.name }}:\n                                {{ option.entity.translated?.name || option.entity.name }}\n                                <template v-if="index != Object.keys(item.options).length - 1">|</template>\n                            </span>\n                        </template>\n                    </div>\n\n                    <div\n                        :key="item.id"\n                        class="sw-data-grid__item"\n                    >\n                        <sw-switch-field\n                            label="Digital"\n                            :value="item.productStates.includes(\'is-download\')"\n                            @update:value="(event) => onChangeVariantValue(event, item)"\n                        />\n                        <sw-upload-listener\n                            :upload-tag="item.productNumber"\n                            auto-upload\n                            @media-upload-finish="(event) => successfulUpload(event, item)"\n                        />\n                        <sw-media-compact-upload-v2\n                            v-if="productDownloadFolderId"\n                            :upload-tag="item.productNumber"\n                            :disabled="item.productStates.length === 0"\n                            private-filesystem\n                            allow-multi-select\n                            add-files-on-multiselect\n                            :source-multiselect="item.downloads.length > 0 ? item.downloads : null"\n                            :target-folder-id="productDownloadFolderId"\n                            file-accept="*/*"\n                            @delete-item="(file) => removeFile(`${file.fileName}.${file.fileExtension}`, item)"\n                        />\n                    </div>\n                </template>\n\n                <template #pagination>\n                    <sw-pagination\n                        :page="page"\n                        :limit="limit"\n                        :total="total"\n                        :total-visible="7"\n                        @page-change="handlePageChange"\n                    />\n                </template>\n            </sw-data-grid>\n        </div>\n    </template>\n\n    <template #modal-footer>\n        <sw-button\n            size="small"\n            @click="showUploadModal = false"\n        >\n            {{ $tc(\'sw-product.variations.backVariationsButton\') }}\n        </sw-button>\n\n        <sw-button\n            :disabled="isGenerateButtonDisabled"\n            class="sw-product-variant-generation__generate-action"\n            :variant="buttonVariant"\n            size="small"\n            @click="generateVariants()"\n        >\n            {{ buttonLabel }}\n        </sw-button>\n    </template>\n\n    <template #modal-loader>\n        <transition name="generate-variant-progress-bar-transition">\n            <div\n                v-if="isLoading"\n                class="generate-variant-progress-bar__wrapper"\n            >\n                <sw-progress-bar\n                    class="generate-variant-progress-bar"\n                    :value="progressInPercentage"\n                />\n\n                <span class="generate-variant-progress-bar__description">\n                    {{ actualProgress }} {{ $tc(\'sw-product.variations.progressTypeOf\') }} {{ maxProgress }} {{ $tc(\'sw-product.variations.progressTypeVariation\') }} {{ progressMessage }}\n                </span>\n            </div>\n        </transition>\n    </template>\n</sw-modal>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["repositoryFactory","mediaService","swProductDetailLoadAll"],emits:["modal-close","variations-finish-generate"],mixins:[c.getByName("listing")],props:{product:{type:Object,required:!0},groups:{type:Array,required:!0},selectedGroups:{type:Array,required:!0},actualStatus:{type:String,default:"is-physical",required:!1}},data(){return{activeTab:"options",isLoading:!1,actualProgress:0,maxProgress:0,progressType:"",variantsNumber:0,variantsGenerator:null,showUploadModal:!1,variantGenerationQueue:{createQueue:[],deleteQueue:[]},term:"",paginatedVariantArray:[],disableRouteParams:!0,downloadFilesForAllVariants:[],usageOfFiles:{},idToIndex:{},productDownloadFolderId:null,isAddOnly:!1,originalConfiguratorSettings:[]}},computed:{...p("swProductDetail",["currencies"]),productRepository(){return this.repositoryFactory.create("product")},optionRepository(){return this.repositoryFactory.create("property_group_option")},mediaRepository(){return this.repositoryFactory.create("media")},progressInPercentage(){return this.actualProgress/(100*this.maxProgress)},progressMessage(){return"delete"===this.progressType?this.$tc("sw-product.variations.progressTypeDeleted"):"upsert"===this.progressType?this.$tc("sw-product.variations.progressTypeGenerated"):"calc"===this.progressType?this.$tc("sw-product.variations.progressTypeCalculated"):""},buttonVariant(){return this.variantsNumber<=0?"danger":"primary"},buttonLabel(){return this.variantsNumber<=0?this.$tc("sw-product.variations.deleteVariationsButton"):this.$tc("sw-product.variations.generateVariationsButton")},isGenerateButtonDisabled(){return this.variantGenerationQueue.createQueue.some(e=>0===e.downloads.length&&e.productStates?.includes("is-download"))}},watch:{variantGenerationQueue(){this.getList(),this.showUploadModal=!0},isAddOnly(){if(this.isAddOnly){this.emptyConfiguratorSettings();return}this.addOriginalConfiguratorSettings()}},created(){this.createdComponent()},methods:{createdComponent(){this.mediaService.getDefaultFolderId("product_download").then(e=>{this.productDownloadFolderId=e}),this.variantsGenerator=new l,this.term="",this.variantsGenerator.on("queues",e=>{let t=this.product.configuratorSettings.reduce((e,t)=>(0>e.indexOf(t.option.id)&&e.push(t.option.id),e),[]);if(t.length>0){let n=new d(1,500);n.addFilter(d.equalsAny("id",t)),n.addAssociation("group"),this.optionRepository.search(n).then(t=>{e.createQueue.forEach((e,n)=>{e.options.forEach(e=>{e.entity=t.get(e.id)}),e.options.sort((e,t)=>{let n=e.entity.group.name,i=t.entity.group.name;return n.localeCompare(i)}),e.downloads=[],e.productStates=[],e.id=e.productNumber,this.idToIndex[e.id]=n}),this.variantGenerationQueue=e,this.total=e.createQueue.length})}else this.variantGenerationQueue=e,this.total=e.createQueue.length;this.isLoading=!1}),this.variantsGenerator.on("progress-max",e=>{this.maxProgress=e.progress,this.progressType=e.type}),this.variantsGenerator.on("progress-actual",e=>{this.actualProgress=e.progress,this.progressType=e.type})},removeFile(e,t){t.downloads=t.downloads.filter(t=>`${t.fileName}.${t.fileExtension}`!==e),this.usageOfFiles[e]=this.usageOfFiles[e].filter(e=>e!==t.id),0===this.usageOfFiles[e].length&&delete this.usageOfFiles[e],this.usageOfFiles[e]||(this.downloadFilesForAllVariants=this.downloadFilesForAllVariants.filter(t=>`${t.fileName}.${t.fileExtension}`!==e))},removeFileForAllVariants(e){let t=`${e.fileName}.${e.fileExtension}`,n=this.usageOfFiles[t];n&&(n.forEach(e=>{let n=this.idToIndex[e],i=this.variantGenerationQueue.createQueue[n];i.downloads=i.downloads.filter(e=>`${e.fileName}.${e.fileExtension}`!==t)}),delete this.usageOfFiles[t]),this.downloadFilesForAllVariants=this.downloadFilesForAllVariants.filter(t=>t.id!==e.id)},getList(){if(!this.variantGenerationQueue){this.paginatedVariantArray=[];return}let e=[];this.variantGenerationQueue.createQueue.forEach(t=>{t.options.some(n=>(!!(n.entity.translated?.name||n.entity.name).toUpperCase().includes(this.term.toUpperCase())||""===this.term)&&(e.push(t),!0))});let t=this.page*this.limit-this.limit,n=t+this.limit;this.total=e.length,this.paginatedVariantArray=e.slice(t,n)},handlePageChange(e){this.onPageChange(e),this.getList()},generateVariants(){this.isLoading=!0,this.variantGenerationQueue.createQueue.forEach(e=>{delete e.id,e.productStates.includes("is-download")&&(e.maxPurchase=1,e.minPurchase=1,e.isCloseout=!1,e.shippingFree=!1);let t=[];e.downloads.forEach(e=>{t.push({mediaId:e.id})}),e.downloads=t}),this.variantsGenerator.saveVariants(this.variantGenerationQueue).then(()=>(this.addOriginalConfiguratorSettings(),this.productRepository.save(this.product))).then(()=>{this.$emit("variations-finish-generate"),this.$emit("modal-close"),this.isLoading=!1,this.actualProgress=0,this.maxProgress=0,this.swProductDetailLoadAll()})},showNextStep(){this.isLoading=!0,this.variantsGenerator.generateVariants(this.currencies,this.product,this.isAddOnly),this.isLoading=!1},calcVariantsNumber(){let e=Object.values(this.product.configuratorSettings.reduce((e,t)=>{let n=t.option.groupId,i=e[n];return i?i.push(t.option.id):e[n]=[t.option.id],e},{}));this.variantsNumber=e.length>0?e.map(e=>e.length).reduce((e,t)=>e*t):0},onChangeAllVariantValues(e){let t=this.variantGenerationQueue.createQueue;if(this.term&&(t=this.paginatedVariantArray),!e){this.usageOfFiles={},t.forEach(e=>{e.downloads=[],e.productStates=[]}),this.getList();return}t.forEach(e=>{e.downloads=[...this.downloadFilesForAllVariants],this.updateUsageForAllVariantFiles(e.id),e.productStates=["is-download"]}),this.getList()},onChangeVariantValue(e,t){if(!e){Object.keys(this.usageOfFiles).forEach(e=>{this.usageOfFiles[e]=this.usageOfFiles[e].filter(e=>e!==t.id),0===this.usageOfFiles[e].length&&(delete this.usageOfFiles[e],this.downloadFilesForAllVariants=this.downloadFilesForAllVariants.filter(t=>`${t.fileName}.${t.fileExtension}`!==e))}),t.downloads=[],t.productStates=[];return}t.downloads=[...this.downloadFilesForAllVariants],this.updateUsageForAllVariantFiles(t.id),t.productStates=["is-download"]},isUploadDisabled(e){return 0===e.downloads.length},isExistingMedia(e,t){return e.some(({id:e})=>e===t)},successfulUpload(e,t){this.mediaRepository.get(e.targetId,u.api).then(n=>{if(t){if(this.isExistingMedia(t.downloads,e.targetId))return;t.downloads.push(n),this.pushFileToUsageList(`${n.fileName}.${n.fileExtension}`,t.id);return}this.isExistingMedia(this.downloadFilesForAllVariants,e.targetId)||this.downloadFilesForAllVariants.push(n);let i=this.variantGenerationQueue.createQueue;this.term&&(i=this.paginatedVariantArray),i.forEach(t=>{t.productStates.includes("is-download")&&!this.isExistingMedia(t.downloads,e.targetId)&&(t.downloads.push(n),this.pushFileToUsageList(`${n.fileName}.${n.fileExtension}`,t.id))})})},updateUsageForAllVariantFiles(e){this.downloadFilesForAllVariants.forEach(t=>{this.pushFileToUsageList(`${t.fileName}.${t.fileExtension}`,e)})},pushFileToUsageList(e,t){this.usageOfFiles[e]||(this.usageOfFiles[e]=[]),this.usageOfFiles[e].push(t)},onModalCancel(){this.addOriginalConfiguratorSettings(),this.$emit("modal-close")},addOriginalConfiguratorSettings(){this.removeDuplicateEntries(),this.originalConfiguratorSettings.forEach(e=>{this.product.configuratorSettings.add(e)}),this.calcVariantsNumber()},emptyConfiguratorSettings(){this.originalConfiguratorSettings=[],this.product.configuratorSettings.getIds().forEach(e=>{this.originalConfiguratorSettings.push(this.product.configuratorSettings.get(e)),this.product.configuratorSettings.remove(e)}),this.calcVariantsNumber()},onTermChange(e){this.term=e,this.getList()},removeDuplicateEntries(){let e=this;this.product.configuratorSettings.getIds().forEach(t=>{let n=e.product.configuratorSettings.get(t);void 0!==this.originalConfiguratorSettings.find(e=>e.optionId===n.optionId)&&e.product.configuratorSettings.remove(t)})}}}},466959:function(e,t,n){var i=n(529296);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(745346).Z("cfbefe6a",i,!0,{})}}]);