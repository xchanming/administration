import{A as s}from"./api.service-C76VAMec.js";import"./channel-oRk5-XZJ.js";import"./administration-DCOj2uiN.js";class c extends s{constructor(t,i){super(t,i,null,"application/json"),this.name="notificationsService"}fetchNotifications(t,i=null){return this.httpClient.get("notification/message",{params:{limit:t,latestTimestamp:i},headers:this.getBasicHeaders()}).then(({data:e})=>e)}}export{c as default};
//# sourceMappingURL=notifications.service-Bj00wK2R.js.map
