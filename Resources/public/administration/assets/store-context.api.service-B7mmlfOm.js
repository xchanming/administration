var d=s=>{throw TypeError(s)};var x=(s,i,t)=>i.has(s)||d("Cannot "+t);var m=(s,i,t)=>i.has(s)?d("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(s):i.set(s,t);var p=(s,i,t)=>(x(s,i,"access private method"),t);import{A as C}from"./api.service-BUA61cyq.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";var c,h;class w extends C{constructor(t,n,r="sales-channel-context"){super(t,n,r,"application/json");m(this,c);this.name="contextStoreService"}updateCustomerContext(t,n,r,o={},e={},a=["allowProductPriceOverwrites"]){const u="_proxy/switch-customer",l=this.getBasicHeaders({...e,"sw-context-token":r});return this.httpClient.patch(u,{customerId:t,salesChannelId:n,permissions:a},{...o,headers:l})}updateContext(t,n,r,o={},e={}){const a=`_proxy/store-api/${n}/context`,u=this.getBasicHeaders({...e,"sw-context-token":r});return this.httpClient.patch(a,t,{...o,headers:u})}getSalesChannelContext(t,n,r={},o={}){const e=`_proxy/store-api/${t}/context`,a=this.getBasicHeaders({...o,"sw-context-token":n});return this.httpClient.get(e,{...r,headers:a})}generateImitateCustomerToken(t,n,r={},o={}){const e="_proxy/generate-imitate-customer-token",a=this.getBasicHeaders(o);return this.httpClient.post(e,{customerId:t,salesChannelId:n},{...r,headers:a})}redirectToSalesChannelUrl(t,n,r,o){const e=document.createElement("form");e.method="POST",e.action=`${t}/account/login/imitate-customer`,e.target="_blank",document.body.appendChild(e),p(this,c,h).call(this,e,"token",n),p(this,c,h).call(this,e,"customerId",r),p(this,c,h).call(this,e,"userId",o),e.submit(),e.remove()}}c=new WeakSet,h=function(t,n,r){const o=document.createElement("input");o.type="hidden",o.name=n,o.value=r,t.appendChild(o)};export{w as default};
//# sourceMappingURL=store-context.api.service-B7mmlfOm.js.map
