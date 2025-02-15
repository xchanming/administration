import{e as o}from"./extension-error-handler.service-2kuyx48j.js";const i=`{% block sw_extension_my_extensions_account %} <div v-if="isLoading"> <sw-skeleton /> <sw-skeleton /> </div> <sw-meteor-card v-else class="sw-extension-my-extensions-account" > <div class="sw-extension-my-extensions-account__wrapper"> <div class="sw-extension-my-extensions-account__wrapper-illustration"> <img :src="assetFilter('/administration/static/img/plugin-manager--login.png')" :alt="$tc('sw-extension.my-extensions.account.headline')" > </div> <div class="sw-extension-my-extensions-account__wrapper-content"> <template v-if="isLoggedIn"> <h3>{{ $tc('sw-extension.my-extensions.account.headline') }}</h3> <p>{{ $tc('sw-extension.my-extensions.account.isLoggedIn') }}</p> <div class="sw-extension-my-extensions-account__wrapper-content-login-status"> <sw-avatar size="36px" color="#E3F3FF" placeholder /> <span class="sw-extension-my-extensions-account__wrapper-content-login-status-id">{{ userInfo.email }}</span> <sw-button class="sw-extension-my-extensions-account__logout-button" variant="primary" size="small" @click="logout" > {{ $tc('sw-extension.my-extensions.account.logout') }} </sw-button> </div> </template> <template v-else> <h3>{{ $tc('sw-extension.my-extensions.account.headline') }}</h3> <div class="sw-extension-my-extensions-account__wrapper-content-login-message"> <p>{{ $tc('sw-extension.my-extensions.account.loginMessage') }}</p> </div> <div> <p>{{ $tc('sw-extension.my-extensions.account.register') }}</p> <a class="new-account-link" :href="$tc('sw-extension.my-extensions.account.registerUrl')" target="_blank" rel="noopener" > {{ $tc('sw-extension.my-extensions.account.registerNow') }} </a> </div> <div class="sw-extension-my-extensions-account__wrapper-content-login-form"> <sw-text-field v-model:value="form.shopwareId" class="sw-extension-my-extensions-account__shopware-id-field" required :label="$tc('sw-extension.my-extensions.account.mailLabel')" :placeholder="$tc('sw-extension.my-extensions.account.mailPlaceholder')" /> <sw-password-field v-model:value="form.password" class="sw-extension-my-extensions-account__password-field" :label="$tc('sw-extension.my-extensions.account.passwordLabel')" :placeholder="$tc('sw-extension.my-extensions.account.passwordPlaceholder')" @keyup.enter="login" /> </div> <div class="sw-extension-my-extensions-account__wrapper-content-login-footer"> <a :href="$tc('sw-extension.my-extensions.account.recoveryUrl')" target="_blank" rel="noopener" > {{ $tc('sw-extension.my-extensions.account.passwordForgot') }} </a> <sw-button class="sw-extension-my-extensions-account__login-button" variant="primary" size="small" @click="login" > {{ $tc('sw-extension.my-extensions.account.login') }} </sw-button> </div> </template> </div> </div> </sw-meteor-card> {% endblock %}`,{Store:n,Mixin:a,Filter:r}=Shopware,l=Shopware.Component.wrapComponentConfig({template:i,inject:["systemConfigApiService","shopwareExtensionService","storeService"],mixins:[a.getByName("notification")],data(){return{isLoading:!0,unsubscribeStore:null,form:{password:"",shopwareId:""}}},computed:{userInfo(){return n.get("shopwareExtensions").userInfo},isLoggedIn(){return n.get("shopwareExtensions").userInfo!==null},assetFilter(){return r.getByName("asset")}},created(){this.createdComponent().then(()=>{this.unsubscribeStore=n.get("shopwareExtensions").$onAction(({name:e,args:s})=>this.showErrorNotification({type:e,payload:s}))}).catch(()=>{})},beforeUnmount(){this.unsubscribeStore!==null&&this.unsubscribeStore()},methods:{async createdComponent(){try{this.isLoading=!0,await this.shopwareExtensionService.checkLogin()}finally{this.isLoading=!1}},async logout(){try{await this.storeService.logout(),this.$emit("logout-success")}catch(e){this.commitErrors(e)}finally{await this.shopwareExtensionService.checkLogin()}},async login(){this.isLoading=!0;try{await this.storeService.login(this.form.shopwareId,this.form.password),this.$emit("login-success"),this.createNotificationSuccess({message:this.$tc("sw-extension.my-extensions.account.loginNotificationMessage")})}catch(e){this.commitErrors(e)}finally{await this.shopwareExtensionService.checkLogin(),this.isLoading=!1}},showErrorNotification({type:e,payload:s}){e==="pluginErrorsMapped"&&s.forEach(t=>{if(t.parameters){this.showApiNotification(t);return}this.createNotificationError({message:this.$tc(t.message)})})},showApiNotification(e){const s=this.$tc("sw-extension.errors.messageToTheShopwareDocumentation",e.parameters,0);this.createNotificationError({title:e.title,message:`${e.message} ${s}`,autoClose:!1})},commitErrors(e){if(e.response){const s=o.mapErrors(e.response.data.errors);Shopware.Store.get("shopwareExtensions").pluginErrorsMapped(s)}throw e}}});export{l as default};
