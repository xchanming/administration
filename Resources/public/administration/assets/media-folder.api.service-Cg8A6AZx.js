import{A as i}from"./api.service-DUFBkRAb.js";import"./channel-Cvr-E4M4.js";class p extends i{constructor(s,e,t="media-folder"){super(s,e,t),this.name="mediaFolderService"}dissolveFolder(s){const e=`/_action/${this.getApiBasePath(s)}/dissolve`;return this.httpClient.post(e,"",{params:{},headers:this.getBasicHeaders()}).then(t=>i.handleResponse(t))}moveFolder(s,e){e&&(e=`/${e}`);const t=`/_action/${this.getApiBasePath(s)}/move${e}`;return this.httpClient.post(t,"",{params:{},headers:this.getBasicHeaders()}).then(r=>i.handleResponse(r))}}export{p as default};
