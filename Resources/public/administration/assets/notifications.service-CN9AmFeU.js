import{A as s}from"./api.service-BUA61cyq.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";class c extends s{constructor(t,i){super(t,i,null,"application/json"),this.name="notificationsService"}fetchNotifications(t,i=null){return this.httpClient.get("notification/message",{params:{limit:t,latestTimestamp:i},headers:this.getBasicHeaders()}).then(({data:e})=>e)}}export{c as default};
//# sourceMappingURL=notifications.service-CN9AmFeU.js.map
