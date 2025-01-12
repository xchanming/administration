const __vite__fileDeps=["assets/index-ClEmtveq.js","assets/state-B0fCRhHd.js","assets/index-D6N9NQ4V.css","assets/index-DEpoxmQp.js","assets/sw-bulk-edit.state-CBUvT6ts.js","assets/index-Bh_Jw1vj.css","assets/index-D199fYxT.js","assets/index-IRm60Pj7.css","assets/index-BmApwJmL.js","assets/index-BwRNA_ug.css","assets/index-TxDi9QME.js","assets/index-BnQyhITY.css","assets/index-CwVyIOwx.js","assets/index-A9bILiYc.css","assets/index-T_7KegdE.js","assets/index-DGgDz0pQ.css","assets/index-DE_YFSp7.js","assets/index-CCVvE3wi.css","assets/index-DosWT6BY.js","assets/index-tdxK8_9k.css","assets/index-CiDmI9HO.js","assets/index-BSOxzkOM.css","assets/index-87nyH1YV.js","assets/index-Dvch-XQa.css","assets/index-B9uJE-vl.js","assets/index-Nux0bkbM.css","assets/index-bCzFFo7C.js","assets/index-BfFG3Llz.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as f}from"./administration-BlrHhDOI.js";import{R as b}from"./retry.helper-BDu6eVqs.js";const{object:V}=Cicada.Utils,{Criteria:k}=Cicada.Data,v=Object.freeze({OVERWRITE:"overwrite",CLEAR:"clear",ADD:"add",REMOVE:"remove"}),{types:R}=Cicada.Utils,{getObjectDiff:L}=Cicada.Utils.object;class S{constructor(){this.syncService=Cicada.Service("syncService"),this.repositoryFactory=Cicada.Service("repositoryFactory"),this.entityName=null,this.entityIds=[],this.groupedPayload={upsert:{},delete:{}}}async buildBulkSyncPayload(t){const e=Cicada.EntityDefinition.get(this.entityName);if(!e)throw Error(`No schema found for entity ${this.entityName}`);return this.groupedPayload.delete[this.entityName]={},this.groupedPayload.upsert[this.entityName]={},await Promise.all(t.map(async i=>{if(!Object.values(v).includes(i.type))return;const r=e.getField(i.field);if(!r){Cicada.Utils.debug.warn("Entity factory",`Property ${this.entityName}.${i.field} not found`);return}const s=e.isOneToOneAssociation(r);if(e.isToManyAssociation(r)||s)try{await this._handleAssociationChange(r,i,s);return}catch(o){Cicada.Utils.debug.warn(o);return}const a=this._castDefaultValueIfNecessary(i,r.type);this.entityIds.forEach(o=>{var n;(n=this.groupedPayload.upsert[this.entityName])[o]??(n[o]={id:o}),this.groupedPayload.upsert[this.entityName][o][i.field]=a})})),this._transformSyncPayload(this.groupedPayload)}_transformSyncPayload(t){const e={};return Object.keys(t).forEach(i=>{const r=t[i];Object.keys(r).length!==0&&Object.keys(r).forEach(s=>{const a=Object.values(r[s]);if(a.length===0)return;const o=`${i}-${s}`;e[o]??(e[o]={action:i,entity:s,payload:[]}),e[o].payload.push(...a.flat())})}),e}async _handleAssociationChange(t,e,i=!1){const{mapping:r,entity:s,local:a,reference:o,localField:n,referenceField:l}=t,p=!!r;let d;e.referenceEntity=r??s,this.groupedPayload.delete[e.referenceEntity]={},this.groupedPayload.upsert[e.referenceEntity]={};const u=Array.isArray(e.value)?e.value:[e.value];e.value=u.filter(Boolean),p?(e.localKey=a,e.referenceKey=o,d=await this._fetchManyToManyAssociated(t,e)):(e.localKey=n,e.referenceKey=l,d=await this._fetchOneToManyAssociated(t,e));const{referenceEntity:y,localKey:h,referenceKey:c,type:_}=e;if([v.CLEAR,v.REMOVE].includes(_)){this.groupedPayload.delete[y]={...this._transformDeletePayload(d,h,c)};return}_===v.OVERWRITE&&(this.groupedPayload.delete[y]={...this._transformDeletePayload(d,h,c)}),p?this._detectManyToManyChange(e,d):i?this._detectOneToOneChange(e,d):this._detectOneToManyChange(e,d)}_detectOneToManyChange(t,e){const{referenceEntity:i,referenceKey:r,localKey:s,mappingReferenceField:a,value:o,type:n}=t,l=this._getEditableProperties(i);a&&l.push(a),o.forEach(p=>{const d=p;p=V.pick(p,l),this.entityIds.forEach(u=>{var P;const y={...p};y[r]=u;const c=a?`${d[a??s]}.${u}`:u,_=e[c]??[];if(a&&n===v.ADD&&_.length>0)return;let E=null;n===v.OVERWRITE&&_.length===1&&(E={..._[0]},e[c].shift(),delete this.groupedPayload.delete[i][c]);const C=this._getOneToManyChange(y,s,a,E);C===null||Object.keys(C).length===0||((P=this.groupedPayload.upsert[i])[c]??(P[c]=[]),this.groupedPayload.upsert[i][c].push(C))})})}_detectOneToOneChange(t,e){const{referenceEntity:i,referenceKey:r,localKey:s,value:a}=t,o=this._getEditableProperties(i);a.forEach(n=>{n=V.pick(n,o),this.entityIds.forEach(l=>{var c;const p={...n};p[r]=l;const d=l,u=e[d]??[];let y=null;u.length===1&&(y={...u[0]},e[d].shift(),delete this.groupedPayload.delete[i][d]);const h=this._getOneToManyChange(p,s,null,y);h===null||Object.keys(h).length===0||((c=this.groupedPayload.upsert[i])[d]??(c[d]=[]),this.groupedPayload.upsert[i][d].push(h))})})}_getOneToManyChange(t,e,i,r=null){const s={};i&&(s[i]=t[i]),r&&(s[e]=r[e],delete t[e],delete t[i]),Object.keys(t).forEach(o=>{(!r||t[o]!==void 0&&this._isFieldValueChanged(t[o],r[o]))&&(s[o]=t[o])}),r&&delete s[i];const a=Object.keys(s).some(o=>o!==e);return r&&!a?null:s}_detectManyToManyChange(t,e){const{referenceEntity:i,referenceKey:r,localKey:s,value:a}=t;a.forEach(o=>{this.entityIds.forEach(n=>{const l=o.id,p=`${l}.${n}`;if(e[p]){delete this.groupedPayload.delete[i][p];return}this.groupedPayload.upsert[i][p]=[{[r]:l,[s]:n}]})})}_castDefaultValueIfNecessary(t,e){const{value:i,type:r}=t;return r===v.CLEAR?["int","float"].includes(e)?0:null:i===""||typeof i>"u"?null:i}async _fetchOneToManyAssociated(t,e,i=1,r={}){const{entity:s,referenceField:a}=t,o=new k(i,500);if(o.addFilter(k.equalsAny(a,this.entityIds)),e.mappingReferenceField&&e.type===v.REMOVE){const d=e.value.map(u=>u[e.mappingReferenceField]);d&&d.filter(Boolean)&&o.addFilter(k.equalsAny(e.mappingReferenceField,d))}const l=await this.repositoryFactory.create(s).search(o);l.forEach(d=>{let u=d[a];if(e.mappingReferenceField){const{[a]:y,[e.mappingReferenceField]:h}=d;u=`${h}.${y}`}r.hasOwnProperty(u)?r[u].push(d):r[u]=[d]});const p=Object.keys(r).reduce((d,u)=>d+r[u].length,0);return l.total>p?this._fetchOneToManyAssociated(t,e,i+1,r):r}async _fetchManyToManyAssociated(t,e,i=1,r={}){const{referenceField:s,mapping:a,local:o,reference:n}=t,l=e.type===v.REMOVE?e.value.map(h=>h[s]):null,p=new k(i,500);p.addFilter(k.equalsAny(o,this.entityIds)),l&&l.filter(Boolean)&&p.addFilter(k.equalsAny(n,l));const u=await this.repositoryFactory.create(a).searchIds(p);return u.data.forEach(h=>{const{[o]:c,[n]:_}=h,E=`${_}.${c}`;r[E]=[h]}),u.total>Object.keys(r).length?this._fetchManyToManyAssociated(t,e,i+1,r):r}_getEditableProperties(t){const e=Cicada.EntityDefinition.get(t),i=e.filterProperties(r=>e.isScalarField(r)||e.isJsonField(r)||!r.flags||r.flags.write_protected);return Object.keys(i).filter(r=>!["updatedAt","createdAt"].includes(r))}_transformDeletePayload(t,e,i){const r={};return Object.keys(t).forEach(s=>{(t[s]??[]).forEach(o=>{const{id:n,[e]:l,[i]:p}=o;r[s]??(r[s]=[]),n?r[s].push({id:n}):r[s].push({[e]:l,[i]:p})})}),r}_isFieldValueChanged(t,e){return R.isObject(t)&&R.isObject(e)?Object.keys(L(t,e)).length>0:!R.isEqual(t,e)}}const O=Cicada.Utils.types,{Service:F,Application:x}=Cicada,{Criteria:j}=Cicada.Data,{cloneDeep:$}=Cicada.Utils.object;class B extends S{constructor(){super(),this.name="bulkEditProductHandler",this.calculatePriceService=x.getContainer("factory").apiService.getByName("calculate-price"),this.entityName="product",this.entityIds=[],this.products={}}async bulkEdit(t,e){var l,p,d;this.entityIds=t;const i=(l=e.find(u=>u.field==="taxId"))==null?void 0:l.value,r=(p=e.find(u=>u.field==="price"))==null?void 0:p.value,s=(d=e.find(u=>u.field==="purchasePrices"))==null?void 0:d.value;let a=[];(i||r||s)&&await this.getProducts(),this.shouldRecalculateTax(i,r,s)&&(a=await this.recalculatePrices(i,r,s),e=e.filter(u=>u.field!=="taxId")),(r||s)&&(a=this.updatePriceDirectly(r,s,a),e=e.filter(u=>u.field!=="price"&&u.field!=="purchasePrices"));const o=await this.buildBulkSyncPayload(e);if(a.length&&(!O.isEmpty(o)&&"upsert-product"in o?o["upsert-product"].payload=this.mapProductPricesToSyncPayload(o["upsert-product"].payload,a):o["upsert-product"]={action:"upsert",entity:"product",payload:a}),O.isEmpty(o))return Promise.resolve({data:[]});const n=JSON.stringify(o,(u,y)=>y===void 0?null:y);return b.retry(()=>this.syncService.sync(n,{},{"single-operation":1,"sw-language-id":Cicada.Context.api.languageId}))}shouldRecalculateTax(t,e,i){return t&&this.isNullPrice(e,i)}isNullPrice(t,e){return!t||!t[0].listPrice||!t[0].regulationPrice||!e}mapProductPricesToSyncPayload(t,e){const i=[];return t.forEach(r=>{const s=e.find(a=>a.id===r.id);s&&(r={...r,...s},e=e.filter(a=>a.id!==r.id)),i.push(r)}),i.concat(e)}getProducts(){const t=F("repositoryFactory").create("product"),e=new j(1,25);return e.setIds(this.entityIds),t.search(e,Cicada.Context.api).then(i=>{this.products=i})}async recalculatePrices(t,e,i){const r={},s={},a={},o={},n=this.products.filter(c=>c.taxId!==t);n.forEach(c=>{var _,E,C,P,w,A,D,M;if(!e){const g=(E=(_=c.price)==null?void 0:_.filter(m=>m.linked))==null?void 0:E.map(m=>this.getRecalculatePrice(m));O.isEmpty(g)||(r[c.id]=g)}if(!e||!e[0].listPrice){const g=(P=(C=c.price)==null?void 0:C.filter(m=>{var T;return(T=m.listPrice)==null?void 0:T.linked}))==null?void 0:P.map(m=>this.getRecalculatePrice(m.listPrice));O.isEmpty(g)||(s[c.id]=g)}if(!e||!e[0].regulationPrice){const g=(A=(w=c.price)==null?void 0:w.filter(m=>{var T;return(T=m.regulationPrice)==null?void 0:T.linked}))==null?void 0:A.map(m=>this.getRecalculatePrice(m.regulationPrice));O.isEmpty(g)||(a[c.id]=g)}if(!i){const g=(M=(D=c.purchasePrices)==null?void 0:D.filter(m=>m.linked))==null?void 0:M.map(m=>this.getRecalculatePrice(m));O.isEmpty(g)||(o[c.id]=g)}});const l=await Promise.all([this.calculatePrices(t,r),this.calculatePrices(t,s),this.calculatePrices(t,a),this.calculatePrices(t,o)]),p=l[0],d=l[1],u=l[2],y=l[3],h=[];return n.forEach(c=>{const _=p[c.id]??[],E=d[c.id]??[],C=u[c.id]??[],P=y[c.id]??[],w={id:c.id,taxId:t};c.price&&(w.price=this.getCalculatedPrices(c.price,_,E,C)),c.purchasePrices&&(w.purchasePrices=this.getCalculatedPrices(c.purchasePrices,P)),h.push(w)}),h}getRecalculatePrice(t){return{price:t.gross,currencyId:t.currencyId}}async calculatePrices(t,e){return e===null||Object.keys(e).length===0?{}:this.calculatePriceService.calculatePrices(t,e)}getCalculatedPrices(t,e,i=[],r=[]){const s=[];return t.forEach(a=>{const{currencyId:o,listPrice:n,regulationPrice:l}=a;if(a.linked&&e[o]&&(a.net=a.gross-this.getTax(e[o].calculatedTaxes)),n!=null&&n.linked&&i[o]&&(a.listPrice.net=n.gross-this.getTax(i[o].calculatedTaxes)),l!=null&&l.linked&&r[o]){const p=r[o].calculatedTaxes;a.regulationPrice.net=l.gross-this.getTax(p)}s.push(a)}),s}getTax(t){let e=0;return t.forEach(i=>{e+=i.tax}),e}updatePriceDirectly(t,e,i){const r=[];return this.products.forEach(s=>{const a=i.find(n=>n.id===s.id),o=a??{id:s.id};if(t){const n=(a==null?void 0:a.price)??s.price;o.price=this.updatePrice(t[0],n)}e&&(o.purchasePrices=this.updatePrice(e[0],s.purchasePrices)),a&&(i=i.filter(n=>n.id!==s.id)),r.push(o)}),r.concat(i)}updatePrice(t,e){const i=t.currencyId;let r=[];const s=(e==null?void 0:e.find(o=>o.currencyId===i))??null,a=this.getPrice(t,s);return e&&(r=e.filter(o=>o.currencyId!==i)),r.push(a),r}getPrice(t,e){const i=e==null?void 0:e.listPrice,r=e==null?void 0:e.regulationPrice;let s=$(t);return s=this.formatPrice(s,e),s.listPrice?s.listPrice=this.formatPrice(s.listPrice,i):i&&(s.listPrice=i),s.regulationPrice?s.regulationPrice=this.formatPrice(s.regulationPrice,r):r&&(s.regulationPrice=r),s}formatPrice(t,e){return t.gross===null&&(t.linked=!1,t.gross=(e==null?void 0:e.gross)??0),t.net===null&&(t.linked=!1,t.net=(e==null?void 0:e.net)??0),t}}const{Criteria:N}=Cicada.Data,{types:H}=Cicada.Utils;class K extends S{constructor(){super(),this.name="BulkEditOrderHandler",this.entityIds=[],this.orderStateMachineService=Cicada.Service("orderStateMachineService"),this.orderRepository=Cicada.Service("repositoryFactory").create("order"),this.entityName="order"}async bulkEditStatus(t,e){this.entityIds=t;let i=[];const r=Cicada.State.get("swBulkEdit").isFlowTriggered,s=await this.orderRepository.search(this.getCriteria());return e.forEach(a=>{a.value&&(i=s.map(o=>{var l,p;const n={documentTypes:a.documentTypes,skipSentDocuments:a.skipSentDocuments,sendMail:a.sendMail};switch(a.field){case"orderTransactions":return this.orderStateMachineService.transitionOrderTransactionState((l=o.transactions.first())==null?void 0:l.id,a.value,n,{},{"sw-skip-trigger-flow":!r});case"orderDeliveries":return this.orderStateMachineService.transitionOrderDeliveryState((p=o.deliveries.first())==null?void 0:p.id,a.value,n,{},{"sw-skip-trigger-flow":!r});default:return this.orderStateMachineService.transitionOrderState(o.id,a.value,n,{},{"sw-skip-trigger-flow":!r})}}))}),Promise.all(i)}async bulkEdit(t,e){this.entityIds=t;const i=await this.buildBulkSyncPayload(e);return H.isEmpty(i)?Promise.resolve({data:[]}):b.retry(()=>this.syncService.sync(i,{},{"single-operation":1,"sw-language-id":Cicada.Context.api.languageId}))}getCriteria(){const t=new N(1,25);return t.setIds(this.entityIds),t.getAssociation("deliveries"),t.getAssociation("transactions"),t}}const U=Cicada.Utils.types;class q extends S{constructor(){super(),this.name="bulkEditCustomerHandler",this.entityName="customer",this.entityIds=[],this.customerGroupRegistrationService=Cicada.Service("customerGroupRegistrationService"),this.customerRepository=Cicada.Service("repositoryFactory").create("customer")}async bulkEdit(t,e){this.entityIds=t;const i=await this.buildBulkSyncPayload(e);return U.isEmpty(i)?Promise.resolve({success:!0}):b.retry(()=>this.syncService.sync(i,{},{"single-operation":1,"sw-language-id":Cicada.Context.api.languageId}))}async bulkEditRequestedGroup(t,e){const i=[],r=Cicada.State.get("swBulkEdit").isFlowTriggered;return e.forEach(s=>{if(s.value)switch(s.value){case"decline":i.push(b.retry(()=>{this.customerGroupRegistrationService.decline(t,{},{"sw-skip-trigger-flow":!r},{silentError:!0})}));break;case"accept":i.push(b.retry(()=>{this.customerGroupRegistrationService.accept(t,{},{"sw-skip-trigger-flow":!r},{silentError:!0})}));break;default:throw new Error}}),Promise.all(i)}}class G{constructor(){this.handlers={product:()=>new B,order:()=>new K,customer:()=>new q}}getHandler(t){if(!this.handlers[t])throw Error(`Bulk Edit Handler not found for ${t} module`);return this.handlers[t]()}}Cicada.Service().register("bulkEditApiFactory",()=>new G);Cicada.Component.register("sw-bulk-edit-product",()=>f(()=>import("./index-ClEmtveq.js"),__vite__mapDeps([0,1,2])));Cicada.Component.register("sw-bulk-edit-order",()=>f(()=>import("./index-DEpoxmQp.js"),__vite__mapDeps([3,4,5])));Cicada.Component.register("sw-bulk-edit-customer",()=>f(()=>import("./index-D199fYxT.js"),__vite__mapDeps([6,4,7])));Cicada.Component.register("sw-bulk-edit-order-documents",()=>f(()=>import("./index-BmApwJmL.js"),__vite__mapDeps([8,9])));Cicada.Component.register("sw-bulk-edit-order-documents-generate-invoice",()=>f(()=>import("./index-TxDi9QME.js"),__vite__mapDeps([10,11])));Cicada.Component.extend("sw-bulk-edit-order-documents-generate-cancellation-invoice","sw-bulk-edit-order-documents-generate-invoice",()=>f(()=>import("./index-XkeuZnAw.js"),[]));Cicada.Component.extend("sw-bulk-edit-order-documents-generate-delivery-note","sw-bulk-edit-order-documents-generate-invoice",()=>f(()=>import("./index-ObzinBUh.js"),[]));Cicada.Component.extend("sw-bulk-edit-order-documents-generate-credit-note","sw-bulk-edit-order-documents-generate-invoice",()=>f(()=>import("./index-CjHR2j15.js"),[]));Cicada.Component.register("sw-bulk-edit-order-documents-download-documents",()=>f(()=>import("./index-CwVyIOwx.js"),__vite__mapDeps([12,13])));Cicada.Component.extend("sw-bulk-edit-custom-fields","sw-custom-field-set-renderer",()=>f(()=>import("./index-T_7KegdE.js"),__vite__mapDeps([14,15])));Cicada.Component.register("sw-bulk-edit-change-type",()=>f(()=>import("./index-DE_YFSp7.js"),__vite__mapDeps([16,17])));Cicada.Component.register("sw-bulk-edit-change-type-field-renderer",()=>f(()=>import("./index-DosWT6BY.js"),__vite__mapDeps([18,19])));Cicada.Component.extend("sw-bulk-edit-form-field-renderer","sw-form-field-renderer",()=>f(()=>import("./index-5ESPawL2.js"),[]));Cicada.Component.register("sw-bulk-edit-product-visibility",()=>f(()=>import("./index-ClAyI9Dq.js"),[]));Cicada.Component.register("sw-bulk-edit-product-media",()=>f(()=>import("./index-CtNz1SvQ.js"),[]));Cicada.Component.extend("sw-bulk-edit-product-media-form","sw-product-media-form",()=>f(()=>import("./index-B20ChIn7.js"),[]));Cicada.Component.extend("sw-bulk-edit-product-description","sw-text-editor",()=>f(()=>import("./index-BRkitR14.js"),[]));Cicada.Component.register("sw-bulk-edit-save-modal",()=>f(()=>import("./index-CiDmI9HO.js"),__vite__mapDeps([20,21])));Cicada.Component.register("sw-bulk-edit-save-modal-confirm",()=>f(()=>import("./index-87nyH1YV.js"),__vite__mapDeps([22,23])));Cicada.Component.register("sw-bulk-edit-save-modal-process",()=>f(()=>import("./index-B9uJE-vl.js"),__vite__mapDeps([24,25])));Cicada.Component.register("sw-bulk-edit-save-modal-success",()=>f(()=>import("./index-bCzFFo7C.js"),__vite__mapDeps([26,27])));Cicada.Component.register("sw-bulk-edit-save-modal-error",()=>f(()=>import("./index-Duy-iBiY.js"),[]));const{Module:W}=Cicada;W.register("sw-bulk-edit",{type:"core",name:"bulk-edit",title:"sw-bulk-edit.general.mainMenuTitle",description:"sw-bulk-edit.general.descriptionTextModule",version:"1.0.0",targetVersion:"1.0.0",routes:{product:{component:"sw-bulk-edit-product",path:"product/:parentId/:includesDigital",meta:{parentPath:"sw.product.index"},children:{save:{component:"sw-bulk-edit-save-modal",path:"save",redirect:{name:"sw.bulk.edit.product.save.confirm"},children:{confirm:{component:"sw-bulk-edit-save-modal-confirm",path:"confirm"},process:{component:"sw-bulk-edit-save-modal-process",path:"process"},success:{component:"sw-bulk-edit-save-modal-success",path:"success"},error:{component:"sw-bulk-edit-save-modal-error",path:"error"}}}}},order:{component:"sw-bulk-edit-order",path:"order/:excludeDelivery",meta:{parentPath:"sw.order.index"},children:{save:{component:"sw-bulk-edit-save-modal",path:"save",redirect:{name:"sw.bulk.edit.order.save.confirm"},children:{confirm:{component:"sw-bulk-edit-save-modal-confirm",path:"confirm"},process:{component:"sw-bulk-edit-save-modal-process",path:"process"},success:{component:"sw-bulk-edit-save-modal-success",path:"success"},error:{component:"sw-bulk-edit-save-modal-error",path:"error"}}}}},customer:{component:"sw-bulk-edit-customer",path:"customer",meta:{parentPath:"sw.customer.index"},children:{save:{component:"sw-bulk-edit-save-modal",path:"save",redirect:{name:"sw.bulk.edit.customer.save.confirm"},children:{confirm:{component:"sw-bulk-edit-save-modal-confirm",path:"confirm"},process:{component:"sw-bulk-edit-save-modal-process",path:"process"},success:{component:"sw-bulk-edit-save-modal-success",path:"success"},error:{component:"sw-bulk-edit-save-modal-error",path:"error"}}}}}}});
//# sourceMappingURL=index-DtRNJpg9.js.map
