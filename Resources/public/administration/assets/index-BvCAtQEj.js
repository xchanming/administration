const t='{% block sw_description_list %} <dl class="sw-description-list" :style="descriptionListStyles" > <slot> {% block sw_description_list_slot_default %}{% endblock %} </slot> </dl> {% endblock %}',{Component:s}=Cicada;s.register("sw-description-list",{template:t,compatConfig:Cicada.compatConfig,props:{grid:{type:String,required:!1,default:"1fr"}},computed:{descriptionListStyles(){return{"grid-template-columns":this.grid}}}});
//# sourceMappingURL=index-BvCAtQEj.js.map
