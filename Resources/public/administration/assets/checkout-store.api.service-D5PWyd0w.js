import{A as i}from"./api.service-DUFBkRAb.js";import"./channel-Cvr-E4M4.js";class a extends i{constructor(e,t,o="checkout"){super(e,t,o),this.name="checkoutStoreService"}checkout(e,t,o={},r={}){const c=`_proxy-order/${e}`,s={...this.getBasicHeaders(r),"sw-context-token":t};return this.httpClient.post(c,{},{...o,headers:s})}}export{a as default};
