const n=`{% block sw_inheritance_warning %} <div class="sw-inheritance-warning"> {% block sw_inheritance_warning_icon %} <sw-icon size="16px" name="regular-link-horizontal" /> {% endblock %} {% block sw_inheritance_warning_text %} <p> {{ $tc('sw-inheritance-warning.infoTextInheritedField', name, { moduleName: name }) }} </p> {% endblock %} </div> {% endblock %}`,{Component:e}=Shopware;e.register("sw-inheritance-warning",{template:n,props:{name:{type:String,required:!0}}});
