import{A as a}from"./api.service-DUFBkRAb.js";import"./channel-Cvr-E4M4.js";class c extends a{constructor(e,t,s="user"){super(e,t,s),this.name="userService"}getUser(e={},t={}){const s=e,r=this.getBasicHeaders(t);return this.httpClient.get("/_info/me",{params:s,headers:r}).then(n=>a.handleResponse(n))}updateUser(e={},t={}){const s=e,r=this.getBasicHeaders(t);return this.httpClient.patch("/_info/me",s,{headers:r}).then(n=>a.handleResponse(n))}}export{c as default};
