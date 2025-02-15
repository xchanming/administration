import{aM as x}from"./channel-Cvr-E4M4.js";import{u as C}from"./util.service-DptoGcql.js";import{A as I}from"./api.service-DUFBkRAb.js";import{L as d,P as u}from"./order.types-BvKP5qzO.js";import"./_baseUniq-DJKU6o6f.js";import"./_baseIteratee-BDDcCv4P.js";import"./camelCase-FN5n0J2F.js";import"./string.utils-B0MdTyu7.js";class U extends I{constructor(t,e,r="cart"){super(t,e,r),this.name="cartStoreService"}mapLineItemTypeToPriceType(t){return{[d.PRODUCT]:u.QUANTITY,[d.CUSTOM]:u.QUANTITY,[d.CREDIT]:u.ABSOLUTE}[t]}createCart(t,e={},r={}){return this.getCart(t,null,e,r)}getCart(t,e,r={},i={}){const s=`_proxy/store-api/${t}/checkout/cart`,o=this.getBasicHeaders({...i});return e&&(o["sw-context-token"]=e),this.httpClient.get(s,{...r,headers:o})}cancelCart(t,e,r={},i={}){const s=`_proxy/store-api/${t}/checkout/cart`,o=this.getBasicHeaders({...i,"sw-context-token":e});return this.httpClient.delete(s,{...r,headers:o})}removeLineItems(t,e,r,i={},s={}){const o=`_proxy/store-api/${t}/checkout/cart/line-item`,a=this.getBasicHeaders({...s,"sw-context-token":e});return this.httpClient.delete(o,{...i,headers:a,data:{ids:r}})}getRouteForItem(t,e){return`_proxy/store-api/${e}/checkout/cart/line-item`}shouldPriceUpdated(t,e){var a,c,n,p,l,h,y;const r=((a=t.price)==null?void 0:a.unitPrice)!==t.priceDefinition.price,i=(((p=(n=(c=t.price)==null?void 0:c.taxRules)==null?void 0:n[0])==null?void 0:p.taxRate)??null)!==(((y=(h=(l=t.priceDefinition)==null?void 0:l.taxRules)==null?void 0:h[0])==null?void 0:y.taxRate)??null),s=t.type===d.CUSTOM;return!!(!e&&r||i||s&&!r)}getPayloadForItem(t,e,r,i){let s=null;return this.shouldPriceUpdated(t,r)&&(s=x(t.priceDefinition),s.taxRules=t.priceDefinition.taxRules,s.quantity=t.quantity,s.type=this.mapLineItemTypeToPriceType(t.type)),{items:[{id:i,referencedId:i,label:t.label,quantity:t.quantity,type:t.type,description:t.description,priceDefinition:s,stackable:!0,removable:!0,salesChannelId:e}]}}saveLineItem(t,e,r,i={},s={}){const o=r._isNew&&r.type===d.PRODUCT,a=r.identifier||r.id||C.createId(),c=this.getRouteForItem(a,t),n={...this.getBasicHeaders(s),"sw-context-token":e},p=this.getPayloadForItem(r,t,o,a);return r._isNew?this.httpClient.post(c,p,{...i,headers:n}):this.httpClient.patch(c,p,{...i,headers:n})}addPromotionCode(t,e,r,i={},s={}){const o=`_proxy/store-api/${t}/checkout/cart/line-item`,a={...this.getBasicHeaders(s),"sw-context-token":e},c={items:[{type:d.PROMOTION,referencedId:r}]};return this.httpClient.post(o,c,{...i,headers:a})}modifyShippingCosts(t,e,r,i={},s={}){const o="_proxy/modify-shipping-costs",a={...this.getBasicHeaders(i),"sw-context-token":e};return this.httpClient.patch(o,{salesChannelId:t,shippingCosts:r},{...s,headers:a})}disableAutomaticPromotions(t,e={salesChannelId:null},r={}){const i="_proxy/disable-automatic-promotions",s={...this.getBasicHeaders(r),"sw-context-token":t},o={salesChannelId:e.salesChannelId};return this.httpClient.patch(i,o,{...e,headers:s})}enableAutomaticPromotions(t,e={salesChannelId:null},r={}){const i="_proxy/enable-automatic-promotions",s={...this.getBasicHeaders(r),"sw-context-token":t},o={salesChannelId:e.salesChannelId};return this.httpClient.patch(i,o,{...e,headers:s})}addMultipleLineItems(t,e,r,i={},s={}){const o=`_proxy/store-api/${t}/checkout/cart/line-item`,a={...this.getBasicHeaders(s),"sw-context-token":e},c=r.map(n=>{if(n.type===d.PROMOTION)return n;const p=n.identifier||n.id||C.createId();return{id:p,referencedId:p,label:n.label,quantity:n.quantity,type:n.type,description:n.description,priceDefinition:n.type===d.PRODUCT?null:n.priceDefinition,stackable:!0,removable:!0,salesChannelId:t}});return this.httpClient.post(o,{items:c},{...i,headers:a})}}export{U as default};
