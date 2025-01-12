import type { PropType } from 'vue';
import './sw-order-create-general-info.scss';
import template from './sw-order-create-general-info.html.twig';
import type { Cart, SalesChannelContext } from '../../order.types';

/**
 * @package checkout
 */

const { Component, Mixin } = Cicada;

/**
 * @private
 */
export default Component.wrapComponentConfig({
    template,

    compatConfig: Cicada.compatConfig,

    inject: [
        'acl',
    ],

    mixins: [
        Mixin.getByName('notification'),
    ],

    props: {
        cart: {
            type: Object as PropType<Cart>,
            required: true,
        },
        context: {
            type: Object as PropType<SalesChannelContext>,
            required: true,
        },
        isLoading: {
            type: Boolean,
            required: true,
        },
    },

    computed: {
        summaryMainHeader(): string {
            if (!this.context.customer) {
                return '';
            }

            return `${this.context.customer.name} (${this.context.customer.email})`;
        },

        paymentMethodName(): string {
            return this.context.paymentMethod?.translated?.distinguishableName ?? '';
        },

        shippingMethodName(): string {
            return this.context.shippingMethod.translated?.name ?? '';
        },

        currencyFilter() {
            return Cicada.Filter.getByName('currency');
        },
    },
});
