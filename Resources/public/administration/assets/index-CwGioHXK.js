const i='{% block sw_container %} <div class="sw-container" :style="currentCssGrid" > <slot> {% block sw_container_slot_default %}{% endblock %} </slot> </div> {% endblock %}',{Component:n}=Shopware,{warn:a}=Shopware.Utils.debug;n.register("sw-container",{template:i,props:{columns:{type:String,default:"",required:!1},rows:{type:String,default:"",required:!1},gap:{type:String,default:"",required:!1},justify:{type:String,required:!1,default:"stretch",validValues:["start","end","center","stretch","left","right"],validator(e){return["start","end","center","stretch","left","right"].includes(e)}},align:{type:String,required:!1,default:"stretch",validValues:["start","end","center","stretch"],validator(e){return["start","end","center","stretch"].includes(e)}},breakpoints:{type:Object,default(){return{}},required:!1}},data(){return{currentCssGrid:this.buildCssGrid()}},created(){this.createdComponent()},methods:{createdComponent(){this.registerResizeListener()},registerResizeListener(){const e=this;this.$device.onResize({listener(){e.updateCssGrid()},component:this})},updateCssGrid(){this.currentCssGrid=this.buildCssGrid()},buildCssGrid(){let e=this.buildCssGridProps();return Object.keys(this.breakpoints).length===0||Object.keys(this.breakpoints).find(t=>{const s=Number.parseInt(t,10),r=this.breakpoints[t];return Number.isNaN(s)&&a(this.$options.name,`Unable to register breakpoint "${t}".
                        The breakpoint key has to be a number equal to your desired pixel value.`,r),s>this.$device.getViewportWidth()?(e=this.buildCssGridProps(r),e):null}),e},cssGridDefaults(){return{columns:this.columns,rows:this.rows,gap:this.gap,justify:this.justify,align:this.align}},buildCssGridProps(e={}){const t=Object.assign(this.cssGridDefaults(),e);return{"grid-template-columns":t.columns,"grid-template-rows":t.rows,"grid-gap":t.gap,"justify-items":t.justify,"align-items":t.align}}}});
