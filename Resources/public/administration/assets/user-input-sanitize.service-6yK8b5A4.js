import{A as i}from"./api.service-BUA61cyq.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";class l extends i{constructor(e,t){super(e,t,null,"application/json"),this.name="userInputSanitizeService"}sanitizeInput({html:e,field:t}){return this.httpClient.post("_admin/sanitize-html",{html:e,field:t??null},{headers:this.getBasicHeaders()}).then(s=>i.handleResponse(s))}}export{l as default};
//# sourceMappingURL=user-input-sanitize.service-6yK8b5A4.js.map
