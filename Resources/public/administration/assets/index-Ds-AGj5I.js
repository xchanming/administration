const c='<div :class="classes"> <template v-if="componentName"> <component :is="componentName" /> </template> <template v-else-if="extensionIsApp"> <iframe v-if="signedIframeSrc" ref="iframe" :src="signedIframeSrc" :title="src" width="100%" :height="iFrameHeight" ></iframe> </template> <iframe v-else ref="iframe" :src="iFrameSrc" :title="src" width="100%" :height="iFrameHeight" ></iframe> </div>';Cicada.Component.register("sw-iframe-renderer",{template:c,compatConfig:Cicada.compatConfig,inject:["extensionSdkService"],props:{src:{type:String,required:!0},locationId:{type:String,required:!0},fullScreen:{type:Boolean,required:!1,default:!1}},data(){return{heightHandler:null,urlHandler:null,locationHeight:null,signedIframeSrc:null}},created(){this.heightHandler=Cicada.ExtensionAPI.handle("locationUpdateHeight",({height:e,locationId:i})=>{i===this.locationId&&(this.locationHeight=Number(e)??null)}),this.urlHandler=Cicada.ExtensionAPI.handle("locationUpdateUrl",async({hash:e,pathname:i,searchParams:t,locationId:r})=>{if(r!==this.locationId)return;const a=JSON.stringify(t.filter(([n])=>!["location-id","privileges","shop-id","shop-url","timestamp","sw-version","sw-context-language","sw-user-language","cicada-shop-signature"].includes(n)));await this.$router.replace({query:{[this.locationIdHashQueryKey]:e,[this.locationIdPathnameQueryKey]:i,[this.locationIdSearchParamsQueryKey]:a}})})},beforeUnmount(){this.heightHandler&&this.heightHandler(),this.urlHandler&&this.urlHandler()},computed:{locationIdHashQueryKey(){return`locationId_${this.locationId}_hash`},locationIdPathnameQueryKey(){return`locationId_${this.locationId}_pathname`},locationIdSearchParamsQueryKey(){return`locationId_${this.locationId}_searchParams`},componentName(){return Cicada.State.get("sdkLocation").locations[this.locationId]},extension(){const e=Cicada.State.get("extensions"),i=new URL(this.src).origin+new URL(this.src).pathname;return Object.values(e).find(t=>new URL(t.baseUrl).origin+new URL(t.baseUrl).pathname===i)},extensionIsApp(){var e;return((e=this.extension)==null?void 0:e.type)==="app"},iFrameSrc(){const e=new URL(this.src,window.location.origin);return e.searchParams.append("location-id",this.locationId),e.toString()},iFrameHeight(){return typeof this.locationHeight=="number"?`${this.locationHeight}px`:"100%"},classes(){return{"sw-iframe-renderer":!0,"sw-iframe-renderer--full-screen":this.fullScreen}}},watch:{extension:{immediate:!0,handler(){this.signIframeSrc()}},locationId(){this.signIframeSrc()}},methods:{signIframeSrc(){!this.extension||!this.extensionIsApp||this.extensionSdkService.signIframeSrc(this.extension.name,this.iFrameSrc).then(e=>{const i=e==null?void 0:e.uri;if(!i)return;const t=new URL(i),r=this.$route.query[this.locationIdHashQueryKey],a=this.$route.query[this.locationIdPathnameQueryKey],n=this.$route.query[this.locationIdSearchParamsQueryKey];r&&(t.hash=r),a&&(t.pathname=a),n&&JSON.parse(n).forEach(([s,o])=>{t.searchParams.append(s,o)}),this.signedIframeSrc=t.toString()}).catch(()=>{})}}});
//# sourceMappingURL=index-Ds-AGj5I.js.map
