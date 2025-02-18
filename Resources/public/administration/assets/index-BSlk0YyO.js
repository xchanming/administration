const e=`{% block sw_product_settings_form %} <div class="sw-product-settings-form"> {% block sw_product_settings_form_content %} <sw-container columns="1fr 1fr 1fr" gap="0px 30px" > {% block sw_product_settings_form_release_date_field %} <sw-inherit-wrapper v-model:value="product.releaseDate" :has-parent="!!parentProduct.id" :inherited-value="parentProduct.releaseDate" > <template #content="props"> <sw-datepicker :map-inheritance="props" date-type="datetime" :disabled="props.isInherited || !allowEdit" :error="productReleaseDateError" :label="$tc('sw-product.settingsForm.labelReleaseDate')" :placeholder="$tc('sw-product.settingsForm.placeholderReleaseDate')" :value="props.currentValue" @update:value="props.updateCurrentValue" /> </template> </sw-inherit-wrapper> {% endblock %} {% block sw_product_settings_form_ean_field %} <sw-inherit-wrapper v-model:value="product.ean" :has-parent="!!parentProduct.id" :inherited-value="parentProduct.ean" > <template #content="props"> <sw-text-field :map-inheritance="props" :error="productEanError" :label="$tc('sw-product.settingsForm.labelEan')" :placeholder="$tc('sw-product.settingsForm.placeholderEan')" :disabled="props.isInherited || !allowEdit" :value="props.currentValue" @update:value="props.updateCurrentValue" /> </template> </sw-inherit-wrapper> {% endblock %} {% block sw_product_settings_form_manufacturer_number_field %} <sw-inherit-wrapper v-model:value="product.manufacturerNumber" :has-parent="!!parentProduct.id" :inherited-value="parentProduct.manufacturerNumber" > <template #content="props"> <sw-text-field :map-inheritance="props" :error="productManufacturerNumberError" :label="$tc('sw-product.settingsForm.labelManufacturerNumber')" :placeholder="$tc('sw-product.settingsForm.placeholderManufacturerNumber')" :disabled="props.isInherited || !allowEdit" :value="props.currentValue" @update:value="props.updateCurrentValue" /> </template> </sw-inherit-wrapper> {% endblock %} </sw-container> {% endblock %} </div> {% endblock %}`,{mapPropertyErrors:r}=Shopware.Component.getComponentHelper(),t={template:e,props:{allowEdit:{type:Boolean,required:!1,default:!0}},computed:{product(){return Shopware.Store.get("swProductDetail").product},parentProduct(){return Shopware.Store.get("swProductDetail").parentProduct},...r("product",["releaseDate","stock","minPurchase","maxPurchase","ean","manufacturerNumber","shippingFree","markAsTopseller"])}};export{t as default};
