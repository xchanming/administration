import{z as c}from"./channel-DxwX5hMG.js";import{u as p}from"./util.service-B_A8c2s1.js";import{A as d}from"./api.service-BUA61cyq.js";import"./administration-BlrHhDOI.js";import"./_baseUniq-B2mRmqmX.js";import"./_baseIteratee-vB4JeBI0.js";import"./camelCase-C_yyocYD.js";import"./string.utils-Bdo6o_1y.js";class C extends d{constructor(t,r,e="order"){super(t,r,e),this.name="orderService"}recalculateOrder(t,r,e={},s={}){const i=`/_action/order/${t}/recalculate`,o=Object.assign(d.getVersionHeader(r),this.getBasicHeaders(s));return this.httpClient.post(i,{},{additionalParams:e,headers:o})}addProductToOrder(t,r,e,s,i={},o={}){const n=`_action/order/${t}/product/${e}`,a=Object.assign(d.getVersionHeader(r),this.getBasicHeaders(o));return this.httpClient.post(n,{quantity:s},{additionalParams:i,headers:a})}addCustomLineItemToOrder(t,r,e,s={},i={}){const o=`_action/order/${t}/lineItem`,n=Object.assign(d.getVersionHeader(r),this.getBasicHeaders(i)),a=c(e.priceDefinition);return a.taxRules=e.priceDefinition.taxRules,a.isCalculated=!0,this.httpClient.post(o,JSON.stringify({label:e.label,quantity:e.quantity,type:e.type,identifier:p.createId(),description:e.description,priceDefinition:a}),{additionalParams:s,headers:n})}addCreditItemToOrder(t,r,e,s={},i={}){const o=`_action/order/${t}/creditItem`,n=Object.assign(d.getVersionHeader(r),this.getBasicHeaders(i)),a=c(e.priceDefinition);return this.httpClient.post(o,JSON.stringify({label:e.label,quantity:e.quantity,type:e.type,identifier:p.createId(),description:e.description,priceDefinition:a}),{additionalParams:s,headers:n})}addPromotionToOrder(t,r,e,s={},i={}){const o=`_action/order/${t}/promotion-item`,n=Object.assign(d.getVersionHeader(r),this.getBasicHeaders(i));return this.httpClient.post(o,JSON.stringify({code:e}),{additionalParams:s,headers:n})}toggleAutomaticPromotions(t,r,e,s={},i={}){const o=`_action/order/${t}/toggleAutomaticPromotions`,n=Object.assign(d.getVersionHeader(r),this.getBasicHeaders(i));return this.httpClient.post(o,JSON.stringify({skipAutomaticPromotions:e}),{additionalParams:s,headers:n})}changeOrderAddress(t,r,e,s){const i=`_action/order-address/${t}/customer-address/${r}`,o={...e},n=this.getBasicHeaders(s);return this.httpClient.post(i,{},{params:o,headers:n})}updateOrderAddresses(t,r,e={},s={}){const i=`_action/order/${t}/order-address`,o=this.getBasicHeaders(s);return this.httpClient.post(i,{mapping:r},{additionalParams:e,headers:o})}}export{C as default};
//# sourceMappingURL=order.api.service-Nc7fn6V3.js.map
