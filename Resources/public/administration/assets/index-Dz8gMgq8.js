const t=`{% block sw_purchase_price_field %} <sw-price-field name="sw-purchase-price-field" :value="purchasePrice" class="sw-purchase-price-field" :tax-rate="taxRate" :disabled="disabled" :gross-label="$tc('sw-product.priceForm.labelPurchasePriceGross')" :net-label="$tc('sw-product.priceForm.labelPurchasePriceNet')" :compact="compact" :label="label" :error="error" :currency="currency" @change="purchasePriceChanged" /> {% endblock %}`,{Component:a}=Cicada;a.register("sw-purchase-price-field",{template:t,compatConfig:Cicada.compatConfig,emits:["update:value"],props:{price:{type:Array,required:!0},compact:{type:Boolean,required:!1,default:!1},taxRate:{type:Object,required:!0},error:{type:Object,required:!1,default:null},label:{required:!1,default:!0},disabled:{required:!1,default:!1},currency:{type:Object,required:!0}},computed:{purchasePrice:{get(){const e=this.price.find(r=>r.currencyId===this.currency.id);return e?[e]:[{gross:null,currencyId:this.currency.id,linked:!0,net:null}]},set(e){let r=this.price.find(c=>c.currencyId===e.currencyId);r?r=e:this.price.push(e),this.$emit("update:value",this.price)}}},methods:{purchasePriceChanged(e){this.purchasePrice=e}}});
//# sourceMappingURL=index-Dz8gMgq8.js.map
