const o=`{% block sw_select_base %} <sw-block-field class="sw-select" :class="swFieldClasses" v-bind="$attrs" :disabled="disabled" v-on="listeners" > <template #sw-field-input="{ identification, error, disabled, size, setFocusClass, removeFocusClass }"> <div ref="selectWrapper" class="sw-select__selection" tabindex="0" :aria-expanded="expanded ? 'true' : 'false'" @click.stop="expand" @focus="expand" @keydown.tab="collapse" @keydown.esc="collapse" > <slot name="sw-select-selection" v-bind="{ identification, error, disabled, size, expand, collapse }" ></slot> </div> <div class="sw-select__selection-indicators"> <sw-loader v-if="isLoading" class="sw-select__select-indicator" size="16px" /> <button v-if="!disabled && showClearableButton" class="sw-select__select-indicator-hitbox" data-clearable-button :aria-label="$tc('global.sw-select-base.buttonClear')" @click.prevent.stop="emitClear" @keydown.tab.stop="focusParentSelect" > <sw-icon class="sw-select__select-indicator sw-select__select-indicator-clear" name="regular-times-s" small /> </button> <sw-icon class="sw-select__select-indicator sw-select__select-indicator-expand" :class="{ 'sw-select__select-indicator-expand--rotated': !expanded }" name="regular-chevron-up-xs" small @click.stop="toggleExpand" /> </div> <template v-if="expanded"> <transition name="sw-select-result-list-fade-down"> <slot name="results-list" v-bind="{ collapse }" ></slot> </transition> </template> </template> <template #label> <slot name="label"></slot> </template> <template #hint> <slot name="hint"></slot> </template> </sw-block-field> {% endblock %}`,{Component:n}=Cicada;n.register("sw-select-base",{template:o,compatConfig:Cicada.compatConfig,inheritAttrs:!1,emits:["select-expanded","select-collapsed","clear"],props:{isLoading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showClearableButton:{type:Boolean,required:!1,default:!1}},data(){return{expanded:!1}},computed:{swFieldClasses(){return{"has--focus":this.expanded}},listeners(){return this.isCompatEnabled("INSTANCE_LISTENERS")?this.$listeners:{}}},mounted(){this.onMounted()},beforeUnmount(){this.onBeforeUnmount()},methods:{onMounted(){document.addEventListener("keydown",this.handleKeydown)},onBeforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)},handleKeydown(e){this.expanded&&(e.key==="Escape"||e.key==="Esc")&&this.collapse()},toggleExpand(){this.expanded?this.collapse():this.expand()},expand(){this.expanded||this.disabled||(this.expanded=!0,document.addEventListener("click",this.listenToClickOutside),this.$emit("select-expanded"))},collapse(e){var t;document.removeEventListener("click",this.listenToClickOutside),this.expanded=!1,((t=e==null?void 0:e.target)==null?void 0:t.dataset.clearableButton)===void 0&&this.$emit("select-collapsed"),e&&(e!=null&&e.shiftKey)&&(e.preventDefault(),this.focusPreviousFormElement())},focusPreviousFormElement(){const e='a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',t=this.$el.querySelector(e),s=[...document.querySelectorAll(e)].filter(l=>!l.hasAttribute("disabled")&&l.dataset.clearableButton===void 0);s.forEach((l,a)=>{if(a>0&&l===t){const i=s[a-1];i.click(),i.focus()}})},listenToClickOutside(e){let t=e.path;typeof t>"u"&&(t=this.computePath(e)),t.find(s=>s===this.$el)||this.collapse()},computePath(e){const t=[];let s=e.target;for(;s;)t.push(s),s=s.parentElement;return t},emitClear(){this.$emit("clear")},focusParentSelect(e){e&&(e!=null&&e.shiftKey)&&(this.$refs.selectWrapper.click(),e.preventDefault())}}});
//# sourceMappingURL=index-Bk_eoKyU.js.map
