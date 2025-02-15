const e=`{% block sw_settings_item %} <router-link :to="to" class="sw-settings-item" :class="classes" > {% block sw_settings_item_icon %} <div class="sw-settings-item__icon" :class="{ 'background--enabled': backgroundEnabled === true }" > <slot name="icon"></slot> </div> {% endblock %} {% block sw_settings_item_label %} <div class="sw-settings-item__label"> <slot name="label"> {{ label }} </slot> </div> {% endblock %} </router-link> {% endblock %}`,s={template:e,props:{label:{required:!0,type:String},to:{required:!0,type:Object,default(){return{}}},disabled:{required:!1,type:Boolean,default:!1},backgroundEnabled:{required:!1,type:Boolean,default:!0}},computed:{classes(){return{"is--disabled":this.disabled}}}};export{s as default};
