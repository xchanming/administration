const o=`{% block sw_wizard %} <sw-modal class="sw-wizard" v-bind="$attrs" :title="title" @modal-close="onClose" @page-add="addPage" @page-remove="removePage" > <slot> {% block sw_wizard_slot_default %}{% endblock %} </slot> {% block sw_wizard_slot_footer %} <template #modal-footer> <slot name="footer-left-button"> {% block sw_wizard_slot_footer_left_buttons %} {% block sw_wizard_slot_footer_left_buttons_close %} <sw-button v-if="currentlyActivePage === 0" size="small" :disabled="leftButtonDisabled" @click="onClose" > {{ $tc('sw-wizard.closeButton') }} </sw-button> {% endblock %} {% block sw_wizard_slot_footer_left_buttons_back %} <sw-button v-else size="small" :disabled="leftButtonDisabled" @click="previousPage" > {{ $tc('sw-wizard.backButton') }} </sw-button> {% endblock %} {% endblock %} </slot> <slot name="footer-dot-navigation"> {% block sw_wizard_slot_footer_dot_navigation %} <sw-wizard-dot-navigation v-if="showNavigationDots" :pages="pages" :active-page="currentlyActivePage" /> {% endblock %} </slot> <slot name="footer-right-button"> {% block sw_wizard_slot_footer_right_button %} {% block sw_wizard_slot_footer_right_button_finish %} <sw-button v-if="currentlyActivePage >= pagesCount - 1" size="small" variant="primary" :disabled="rightButtonDisabled" @click="$emit('finish')" > {{ $tc('sw-wizard.finishButton') }} </sw-button> {% endblock %} {% block sw_wizard_slot_footer_right_button_next %} <sw-button v-else size="small" variant="primary" :disabled="rightButtonDisabled" @click="nextPage" > {{ $tc('sw-wizard.nextButton') }} </sw-button> {% endblock %} {% endblock %} </slot> </template> {% endblock %} </sw-modal> {% endblock %}`,{Component:a}=Shopware;a.register("sw-wizard",{template:o,inject:["feature"],provide(){return{swWizardPageAdd:this.addPage,swWizardPageRemove:this.removePage}},emits:["finish","pages-updated","current-page-change","close"],props:{showNavigationDots:{type:Boolean,required:!1,default(){return!1}},activePage:{type:Number,required:!1,default(){return 0}},leftButtonDisabled:{type:Boolean,required:!1,default(){return!1}},rightButtonDisabled:{type:Boolean,required:!1,default(){return!1}}},data(){return{pages:[],currentlyActivePage:this.activePage,title:this.$attrs.title||""}},computed:{hasFooterSlot(){return!!this.$slots["footer-left-button"]||!!this.$slots["footer-right-button"]},pagesCount(){return this.pages.length}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.changePage(this.currentlyActivePage)},addPage(t){this.pages.push(t),this.$emit("pages-updated",this.pages,t,"add"),this.changePage(this.currentlyActivePage)},removePage(t){this.pages=this.pages.filter(e=>e!==t),this.$emit("pages-updated",this.pages,t,"remove")},nextPage(){const t=this.currentlyActivePage+1;return t>this.pagesCount?!1:(this.changePage(t),!0)},previousPage(){const t=this.currentlyActivePage-1;return t<0?!1:(this.changePage(t),!0)},changePage(t){if(!this.pagesCount)return;this.currentlyActivePage=t,this.pages.forEach(s=>{s.isCurrentlyActive=t===s.position});const e=this.pages.find(s=>s.position===t);e&&(this.title=e.title||e.modalTitle),this.$emit("current-page-change",this.currentlyActivePage,e)},onClose(){this.$emit("close")}}});
