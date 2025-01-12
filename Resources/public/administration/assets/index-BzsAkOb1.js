const r='{% block sw_card_search_bar %} <div class="sw-card-filter"> {% block sw_card_filter_bar_container %} <div :class="hasFilterClass"> {% block sw_card_filter_bar_container_field %} <sw-simple-search-field v-model:value="term" size="small" variant="form" :placeholder="placeholder" :delay="delay" @search-term-change="onSearchTermChange" /> {% endblock %} </div> {% endblock %} {% block sw_card_filter_bar_container_field_filter %} <div class="sw-card-filter-filter"> <slot name="filter"></slot> </div> {% endblock %} </div> {% endblock %}',{Component:t}=Cicada;t.register("sw-card-filter",{template:r,compatConfig:Cicada.compatConfig,emits:["sw-card-filter-term-change"],props:{placeholder:{type:String,required:!1,default:""},delay:{type:Number,required:!1,default:500},initialSearchTerm:{type:String,required:!1,default:""}},data(){return{term:""}},computed:{hasFilter(){return!!this.$slots.filter},hasFilterClass(){const e=["sw-card-filter-container"];return this.hasFilter&&e.push("hasFilter"),e.join(" ")}},created(){this.createdComponent()},methods:{createdComponent(){this.term=`${this.initialSearchTerm}`},onSearchTermChange(){this.$emit("sw-card-filter-term-change",this.term)}}});
//# sourceMappingURL=index-BzsAkOb1.js.map
