(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[98211],{706943:function(){},498211:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}}),t(806635);let{CicadaError:i}=Cicada.Classes;var s={template:'\n{% block sw_extension_review_creation %}\n<div class="sw-extension-review-creation">\n    \n    {% block sw_extension_review_creation_inputs %}\n    <sw-extension-review-creation-inputs\n        :errors="errors"\n        @changed="onChange"\n    />\n    {% endblock %}\n\n    \n    {% block sw_extension_review_creation_gtc_checkbox %}\n    <sw-gtc-checkbox\n        v-model:value="tocAccepted"\n    />\n    {% endblock %}\n\n    \n    {% block sw_extension_review_creation_buttons %}\n    <div class="sw-extension-review-creation__buttons">\n        \n        {% block sw_extension_review_creation_buttons_submit_button %}\n        <sw-button-process\n            class="sw-extension-review-creation__submit"\n            variant="primary"\n            size="small"\n            :is-loading="isLoading"\n            :process-success="isCreatedSuccessful"\n            :disabled="disabled"\n            @update:process-success="emitCreated"\n            @click="handleCreateReview"\n        >\n            {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-review-creation.submitBtn\') }}\n        </sw-button-process>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,inject:["extensionStoreActionService"],emits:["created"],mixins:["sw-extension-error"],props:{extension:{type:Object,required:!0}},data(){return{tocAccepted:!1,isLoading:!1,isCreatedSuccessful:!1,headline:null,rating:null,text:null,errors:{headlineError:null,ratingError:null}}},computed:{currentUser(){return Cicada.State.get("session").currentUser},userName(){return this.currentUser?`${this.currentUser.name} ${this.currentUser.lastName}`.trim():""},installedVersion(){return Cicada.State.get("cicadaExtensions").myExtensions.data.find(e=>e.name===this.extension.name).version},hasError(){return null!==this.errors.headlineError||null!==this.errors.ratingError},disabled(){return this.hasError||!this.tocAccepted}},watch:{headline(){this.validateHeadline()},rating(){this.validateRating()}},methods:{async handleCreateReview(){if(this.isLoading=!0,this.validateInputs(),this.hasError){this.isLoading=!1;return}let e={extensionId:this.extension.id,authorName:this.userName,headline:this.headline,rating:this.rating,text:this.text,tocAccepted:this.tocAccepted,version:this.installedVersion};await this.createReview(e),this.isLoading=!1},async createReview(e){try{await this.extensionStoreActionService.rateExtension(e),this.isCreatedSuccessful=!0}catch(e){this.showExtensionErrors(e)}},validateInputs(){this.validateHeadline(),this.validateRating()},validateHeadline(){if(null===this.headline||""===this.headline){this.errors.headlineError=new i({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"});return}this.errors.headlineError=null},validateRating(){if(null===this.rating||0===this.rating){this.errors.ratingError=new i({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"});return}this.errors.ratingError=null},onChange(e,n){this[e]=n},emitCreated(){this.$emit("created"),this.isCreatedSuccessful=!1}}}},806635:function(e,n,t){var i=t(706943);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(745346).Z("27e4c581",i,!0,{})}}]);