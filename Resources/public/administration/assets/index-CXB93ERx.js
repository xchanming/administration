import{m as r}from"./administration-BlrHhDOI.js";const{Component:e}=Cicada;e.register("sw-arrow-field",{compatConfig:Cicada.compatConfig,render(){return r("div",{class:{"sw-arrow-field":!0,"is--disabled":this.disabled}},[typeof this.$slots.default=="function"?this.$slots.default():this.$slots.default,this.getArrow()])},props:{primary:{type:String,required:!1,default:"#ffffff"},secondary:{type:String,required:!1,default:"#d1d9e0"},disabled:{type:Boolean,required:!1,default:!1}},computed:{arrowFill(){return this.primary==="#ffffff"||!this.primary?"transparent":this.primary}},methods:{getArrow(){return r("div",{class:{"sw-arrow-field__arrow":!0}},[r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 100",preserveAspectRatio:"none"},[r("path",{d:"M 0 0 L 12 50 L 0 100 Z",fill:this.arrowFill,stroke:"none"}),r("polyline",{points:"0 0 12 50 0 100",fill:"none",stroke:this.secondary,"stroke-width":1})])])}}});
//# sourceMappingURL=index-CXB93ERx.js.map
