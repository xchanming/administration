import{A as h}from"./api.service-DUFBkRAb.js";import"./channel-Cvr-E4M4.js";class $ extends h{constructor(t,e,a="state-machine"){super(t,e,a),this.name="stateMachineService"}getState(t,e,a={},s={},r=null,i={}){const n=h.makeQueryParams({stateFieldName:r,...i}),c=`_action/state-machine/${t}/${e}/state${n}`,o=this.getBasicHeaders(s);return this.httpClient.get(c,{additionalParams:a,headers:o})}transitionState(t,e,a,s={},r={},i=null,n={}){const c=h.makeQueryParams({stateFieldName:i,...n}),o=`_action/state-machine/${t}/${e}/state/${a}${c}`,u=this.getBasicHeaders(r);return this.httpClient.post(o,{},{additionalParams:s,headers:u})}}export{$ as default};
