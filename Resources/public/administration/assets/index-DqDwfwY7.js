import{_ as e}from"./administration-d9Z5Qnc-.js";Shopware.Component.register("sw-settings-login-registration",()=>e(()=>import("./index-CyfIiVLF.js"),[]));const{Module:t,Feature:i}=Shopware;t.register("sw-settings-login-registration",{type:"core",name:"settings-login-registration",title:"sw-settings-login-registration.general.mainMenuItemGeneral",description:"sw-settings-login-registration.general.description",version:"1.0.0",targetVersion:"1.0.0",color:"#9AA8B5",icon:"regular-cog",favicon:"icon-module-settings.png",routes:{index:{component:"sw-settings-login-registration",path:"index",meta:{parentPath:"sw.settings.index",privilege:"system.system_config"}}},settingsItem:{group:function(){return i.isActive("v6.7.0.0")?"customer":"shop"},to:"sw.settings.login.registration.index",icon:"regular-sign-in",privilege:"system.system_config"}});
