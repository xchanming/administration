"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[31754],{331754:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});let{mapPropertyErrors:t,mapState:a}=Cicada.Component.getComponentHelper();var p={template:'\n{% block sw_product_settings_form %}\n<div class="sw-product-settings-form">\n    \n    {% block sw_product_settings_form_content %}\n    <sw-container\n        columns="1fr 1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_settings_form_release_date_field %}\n        <sw-inherit-wrapper\n            v-model:value="product.releaseDate"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.releaseDate"\n        >\n            <template #content="props">\n\n                <sw-datepicker\n                    :map-inheritance="props"\n                    date-type="datetime"\n                    :disabled="props.isInherited || !allowEdit"\n                    :error="productReleaseDateError"\n                    :label="$tc(\'sw-product.settingsForm.labelReleaseDate\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderReleaseDate\')"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_settings_form_ean_field %}\n        <sw-inherit-wrapper\n            v-model:value="product.ean"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.ean"\n        >\n            <template #content="props">\n\n                <sw-text-field\n                    :map-inheritance="props"\n                    :error="productEanError"\n                    :label="$tc(\'sw-product.settingsForm.labelEan\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderEan\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_settings_form_manufacturer_number_field %}\n        <sw-inherit-wrapper\n            v-model:value="product.manufacturerNumber"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.manufacturerNumber"\n        >\n            <template #content="props">\n\n                <sw-text-field\n                    :map-inheritance="props"\n                    :error="productManufacturerNumberError"\n                    :label="$tc(\'sw-product.settingsForm.labelManufacturerNumber\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderManufacturerNumber\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Cicada.compatConfig,props:{allowEdit:{type:Boolean,required:!1,default:!0}},computed:{...a("swProductDetail",["product","parentProduct"]),...t("product",["releaseDate","stock","minPurchase","maxPurchase","ean","manufacturerNumber","shippingFree","markAsTopseller"])}}}}]);