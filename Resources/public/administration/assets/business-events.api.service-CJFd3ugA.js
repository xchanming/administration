import{A as n}from"./api.service-BUA61cyq.js";import"./channel-DxwX5hMG.js";import"./administration-BlrHhDOI.js";class u extends n{constructor(e,s,t="business-events"){super(e,s,t),this.name="businessEventService"}getBusinessEvents(e={},s={}){const t=e,i=this.getBasicHeaders(s);return this.httpClient.get("/_info/events.json",{params:t,headers:i}).then(r=>n.handleResponse(r))}}export{u as default};
//# sourceMappingURL=business-events.api.service-CJFd3ugA.js.map
