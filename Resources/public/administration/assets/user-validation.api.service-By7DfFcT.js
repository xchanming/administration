import{A as o}from"./api.service-DUFBkRAb.js";import"./channel-Cvr-E4M4.js";class d extends o{constructor(e,s,t="check-email-unique"){super(e,s,t),this.name="userValidationService"}checkUserEmail({email:e,id:s},t={},a={}){const r=t,n=this.getBasicHeaders(a),i={email:e,id:s};return this.httpClient.post(`/_action/user/${this.apiEndpoint}`,i,{params:r,headers:n}).then(c=>o.handleResponse(c))}checkUserUsername({username:e,id:s},t={},a={}){const r=t,n=this.getBasicHeaders(a),i={username:e,id:s};return this.httpClient.post("/_action/user/check-username-unique",i,{params:r,headers:n}).then(c=>o.handleResponse(c))}}export{d as default};
