const l='{% block sw_simple_search_field %} <div class="sw-simple-search-field"> {% block sw_simple_search_field_input %} <sw-text-field class="sw-simple-search-field__input" :class="fieldClasses" :placeholder="placeholder" v-bind="$attrs" :value="value" v-on="listeners" @update:value="onInput" /> {% endblock %} {% block sw_simple_search_field_search_icon %} <slot name="sw-simple-search-field-icon"> {% block sw_simple_search_field_slot_search_icon %} <sw-icon v-if="icon" class="sw-simple-search-field__search-icon" :name="icon" small /> {% endblock %} </slot> {% endblock %} </div> {% endblock %}',{Component:a,Utils:t}=Cicada;a.register("sw-simple-search-field",{template:l,inheritAttrs:!1,compatConfig:Cicada.compatConfig,emits:["update:value","search-term-change"],props:{variant:{type:String,required:!1,default:"default",validValues:["default","inverted","form"],validator(e){return e.length?["default","inverted","form"].includes(e):!0}},value:{type:String,default:null,required:!1},delay:{type:Number,required:!1,default:400},icon:{type:String,required:!1,default:"regular-search-s"}},data(){return{onSearchTermChanged:t.debounce(function(s){this.$emit("search-term-change",s)},this.delay)}},computed:{fieldClasses(){return[`sw-simple-search-field--${this.variant}`]},placeholder(){return this.$attrs.placeholder||this.$tc("global.sw-simple-search-field.defaultPlaceholder")},listeners(){return this.isCompatEnabled("INSTANCE_LISTENERS")?this.$listeners:{}}},methods:{onInput(e){this.$emit("update:value",e),this.onSearchTermChanged(e)}}});
//# sourceMappingURL=index-Br0VJD4j.js.map
