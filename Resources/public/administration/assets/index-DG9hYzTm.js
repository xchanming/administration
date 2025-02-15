const r=`{% block sw_sales_channel_detail_product_comparison_preview %} <div class="sw-sales-channel-detail-product-comparison-preview"> {% block sw_sales_channel_detail_product_comparison_preview_modal %} <sw-modal v-if="content" variant="large" :title="$tc('sw-sales-channel.detail.titleProductComparisonPreview')" @modal-close="onModalClose" > {% block sw_sales_channel_detail_product_comparison_preview_modal_errors %} <div v-if="displayErrors"> <h3>{{ $tc('sw-sales-channel.detail.titleProductComparisonPreviewErrors') }}</h3> <div class="sw-sales-channel-detail-product-comparison-preview__scrollable-container"> <p v-for="error in errors" :key="error.message" > <a href="#" @click.prevent="navigateToLine(error.line)" > <sw-icon name="regular-times-hexagon" color="#c0392b" small /> </a> {{ error.message }} </p> </div> </div> {% endblock %} {% block sw_sales_channel_detail_product_comparison_preview_modal_content %} <sw-code-editor ref="previewEditor" mode="text" :editor-config="editorConfig" :soft-wraps="true" :set-focus="false" :value="content" /> {% endblock %} </sw-modal> {% endblock %} </div> {% endblock %}`,o={template:r,emits:["close"],props:{content:{type:String,required:!1,default:null},errors:{type:Array,required:!1,default:()=>[]}},computed:{editorConfig(){return{readOnly:!0}},displayErrors(){return this.errors.length>0}},methods:{onModalClose(){this.$emit("close")},navigateToLine(e){e&&(this.$refs.previewEditor.editor.scrollToLine(e,!0,!0,()=>{}),this.$refs.previewEditor.editor.gotoLine(e,0,!0))}}};export{o as default};
