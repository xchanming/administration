const e='{% block sw_cms_element_sidebar_filter %} <div class="sw-cms-element-sidebar-filter" :class="componentClasses" > <span class="sw-cms-element-sidebar-filter__element"> <sw-icon name="regular-chevron-down-s" color="#C2CCD6" size="12px" /> </span> <span class="sw-cms-element-sidebar-filter__element"> <sw-icon name="regular-chevron-down-s" color="#C2CCD6" size="12px" /> </span> <span class="sw-cms-element-sidebar-filter__element"> <sw-icon name="regular-chevron-down-s" color="#C2CCD6" size="12px" /> </span> <span class="sw-cms-element-sidebar-filter__element"> <sw-icon name="regular-chevron-down-s" color="#C2CCD6" size="12px" /> </span> <span class="sw-cms-element-sidebar-filter__element"> <sw-icon name="regular-chevron-down-s" color="#C2CCD6" size="12px" /> </span> </div> {% endblock %}',s={template:e,mixins:[Shopware.Mixin.getByName("cms-element")],computed:{componentClasses(){return{"is--disabled":this.disabled}}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("sidebar-filter")}}};export{s as default};
