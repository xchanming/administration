const t=`{% block sw_tree_input_field %} <div class="sw-tree-item sw-tree-input-field is--no-children" :class="classes" > {% block sw_tree_input_fieldelement %} <div class="sw-tree-item__element"> {% block sw_tree_input_fieldelement_grip %} <div class="sw-tree-item__icon"> <sw-icon v-if="!disabled" name="regular-circle-xxs" size="18" /> </div> {% endblock %} {% block sw_tree_input_fieldelement_content %} <div class="sw-tree-item__content"> <slot name="content"> {% block sw_tree_input_fieldslot_content %} <sw-confirm-field :value="currentValue" :disabled="disabled" :placeholder="$tc('sw-tree.general.buttonCreate')" @input="createNewItem" /> {% endblock %} </slot> <span v-if="disabled" class="sw-tree-input-field__language-warning" > {{ $tc('sw-tree.general.actions.actionsDisabledInLanguage') }}. </span> </div> {% endblock %} </div> {% endblock %} </div> {% endblock %}`,{Component:s}=Shopware;s.register("sw-tree-input-field",{template:t,emits:["new-item-create"],props:{currentValue:{type:String,required:!1},disabled:{type:Boolean,default:!1}},computed:{classes(){return{"is--disabled":this.disabled}}},methods:{createNewItem(e){this.$emit("new-item-create",e)}}});
