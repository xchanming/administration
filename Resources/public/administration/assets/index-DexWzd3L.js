const i='{% block sw_single_select_option %} <li class="sw-select-option" :class="componentClasses" @mouseenter="onMouseEnter($event)" @click.stop="onClicked($event)" > {% block sw_single_select_option_item_text_holder %} <span class="sw-select-option__result-item-text"> {% block sw_single_select_option_item_text %} <slot></slot> {% endblock %} </span> {% endblock %} {% block sw_single_select_option_item_icon_transition %} <transition name="sw-select-appear"> {% block sw_single_select_option_item_icon %} <sw-icon v-if="isInSelections(item) && !selected || selected" name="regular-checkmark-xs" size="16px" /> {% endblock %} </transition> {% endblock %} </li> {% endblock %}',{Component:s}=Shopware;s.register("sw-select-option",{template:i,props:{index:{type:Number,required:!0},item:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1},selected:{type:Boolean,required:!1,default:!1}},data(){return{isActive:!1}},computed:{componentClasses(){return[{"is--active":this.isActive,"is--disabled":this.disabled},`sw-select-option--${this.index}`]}},created(){this.createdComponent()},unmounted(){this.destroyedComponent()},methods:{createdComponent(){this.registerEvents(),this.index===0&&(this.isActive=!0)},destroyedComponent(){this.removeEvents()},registerEvents(){this.$parent.$on("active-item-index-select",this.checkActiveState),this.$parent.$on("on-keyup-enter",this.selectOptionOnEnter)},removeEvents(){this.$parent.$off("active-item-index-select",this.checkActiveState),this.$parent.$off("on-keyup-enter",this.selectOptionOnEnter)},emitActiveResultPosition(e,t){this.$emit({originalDomEvent:e,index:t})},onClicked(e){this.disabled||this.$parent.$emit("option-click",{originalDomEvent:e,item:this.item})},checkActiveState(e){if(e===this.index){this.isActive=!0;return}this.isActive=!1},selectOptionOnEnter(e){e===this.index&&this.onClicked({})},isInSelections(e){return this.$parent.isInSelections(e)},onMouseEnter(e){this.$parent.$emit("option-mouse-over",{originalDomEvent:e,index:this.index}),this.isActive=!0}}});
