import{A as l}from"./api.service-BUA61cyq.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";class R extends l{constructor(t,n,e="mail-template"){super(t,n,e),this.name="mailService"}sendMailTemplate(t,n,e,s,a,r=!1,i=[],h=null,p=null,m=null){var d,o,c,u;const M=`/_action/${this.getApiBasePath()}/send`;return this.httpClient.post(M,{contentHtml:e.contentHtml??((d=e.translated)==null?void 0:d.contentHtml),contentPlain:e.contentPlain??((o=e.translated)==null?void 0:o.contentPlain),mailTemplateData:h??e.mailTemplateType.templateData,recipients:{[t]:n},salesChannelId:a,mediaIds:s.getIds(),subject:e.subject??((c=e.translated)==null?void 0:c.subject),senderMail:e.senderMail,senderName:e.senderName??((u=e.translated)==null?void 0:u.senderName),documentIds:i,testMode:r,mailTemplateTypeId:p,mailTemplateId:m},{headers:this.getBasicHeaders()}).then(P=>l.handleResponse(P))}testMailTemplate(t,n,e,s,a,r,i=[]){return this.sendMailTemplate(t,t,n,e,s,!0,i,null,a,r)}buildRenderPreview(t,n){const e=`/_action/${this.getApiBasePath()}/build`;return this.httpClient.post(e,{mailTemplateType:t,mailTemplate:n},{headers:this.getBasicHeaders()}).then(s=>l.handleResponse(s))}}export{R as default};
//# sourceMappingURL=mail.api.service-DuzL2pxv.js.map
