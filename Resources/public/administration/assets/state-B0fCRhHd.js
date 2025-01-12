const a={namespaced:!0,state(){return{product:{},parentProduct:{},currencies:[],apiContext:{},taxes:[],variants:[],customFieldSets:[],defaultFeatureSet:{},loading:{init:!1,product:!1,parentProduct:!1,manufacturers:!1,currencies:!1,taxes:!1,customFieldSets:!1,media:!1,rules:!1,variants:!1,defaultFeatureSet:!1,advancedMode:!1},localMode:!1,advancedModeSetting:{},modeSettings:["general_information","prices","deliverability","visibility_structure","media","labelling","measures_packaging","properties","essential_characteristics","custom_fields"],creationStates:[]}},getters:{isLoading:e=>Object.values(e.loading).some(t=>t),defaultCurrency(e){return!e.currencies||!e.currencies.length?{}:e.currencies.find(r=>r.isSystemDefault)||{}},defaultPrice(e,t){let r=e.product.price;if(!r){if(!e.parentProduct.price)return{};r=e.parentProduct.price}return r.find(d=>d.currencyId===t.defaultCurrency.id)},defaultFeatureSet(e){return e.defaultFeatureSet?e.defaultFeatureSet:{}},productTaxRate(e){return e.taxes?e.taxes.find(t=>e.product.taxId?t.id===e.product.taxId:e.parentProduct.taxId?t.id===e.parentProduct.taxId:{}):{}},isChild(e){var t;return(t=e.product)!=null&&t.parentId?!!e.product.parentId:!1},showModeSetting(e){var t,r;return(t=e.product)!=null&&t.parentId?!0:(r=e.advancedModeSetting.value)==null?void 0:r.advancedMode.enabled},showProductCard(e,t){return r=>{var n;return(n=e.product)!=null&&n.parentId?!0:["essential_characteristics","custom_fields","labelling"].includes(r)&&!t.showModeSetting?!1:e.modeSettings.includes(r)}},advanceModeEnabled(e){var t;return(t=e.advancedModeSetting.value)==null?void 0:t.advancedMode.enabled},productStates(e){return e.product.isNew()&&e.creationStates?e.creationStates:e.product.states?e.product.states:[]}},mutations:{setApiContext(e,t){e.apiContext=t},setCustomFields(e,t){e.customFieldSets=e.customFieldSets.map(r=>r.id===t.id?t:r)},setLocalMode(e,t){e.localMode=t},setLoading(e,t){const r=t[0],d=t[1];return typeof d!="boolean"?!1:e.loading[r]!==void 0?(e.loading[r]=d,!0):!1},setAssignedProductsFromCrossSelling(e,{id:t,collection:r}){const d=e.product.crossSellings.get(t);d.assignedProducts=r},setProductId(e,t){e.productId=t},setProduct(e,t){e.product=t},setVariants(e,t){e.variants=t},setParentProduct(e,t){e.parentProduct=t},setCurrencies(e,t){e.currencies=t},setTaxes(e,t){e.taxes=t,e.product&&e.product.taxId===null&&!e.parentProduct&&!e.parentProduct.id&&(e.product.taxId=e.taxes[0].id)},setAttributeSet(e,t){e.customFieldSets=t},setDefaultFeatureSet(e,t){e.defaultFeatureSet=t},setAdvancedModeSetting(e,t){e.advancedModeSetting=t},setModeSettings(e,t){e.modeSettings=t},setCreationStates(e,t){e.creationStates=t}}};export{a as s};
//# sourceMappingURL=state-B0fCRhHd.js.map
