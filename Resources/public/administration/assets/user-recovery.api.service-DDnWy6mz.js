import{A as a}from"./api.service-C76VAMec.js";import"./channel-oRk5-XZJ.js";import"./administration-DCOj2uiN.js";class n extends a{constructor(e,s,t="user"){super(e,s,t),this.name="userRecoveryService",this.context=Cicada.Context}createRecovery(e){const s=`/_action/${this.getApiBasePath()}/user-recovery`;return this.httpClient.post(s,{email:e},{params:{},headers:this.getBasicHeaders()}).then(t=>{a.handleResponse(t)})}checkHash(e){const s=`/_action/${this.getApiBasePath()}/user-recovery/hash`;return this.httpClient.get(s,{params:{hash:e},headers:this.getBasicHeaders()}).then(t=>{a.handleResponse(t)})}updateUserPassword(e,s,t){const r=`/_action/${this.getApiBasePath()}/user-recovery/password`;return this.httpClient.patch(r,{hash:e,password:s,passwordConfirm:t},{params:{},headers:this.getBasicHeaders()}).then(i=>{a.handleResponse(i)})}}export{n as default};
//# sourceMappingURL=user-recovery.api.service-DDnWy6mz.js.map
