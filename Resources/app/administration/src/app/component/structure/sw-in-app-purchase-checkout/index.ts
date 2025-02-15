import type { InAppPurchaseRequest } from '../../../store/in-app-purchase-checkout.store';
import template from './sw-in-app-purchase-checkout.html.twig';

const { Component } = Shopware;

/**
 * @sw-package checkout
 *
 * @private
 */
// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
Component.register('sw-in-app-purchase-checkout', {
    template,

    computed: {
        entry(): InAppPurchaseRequest | null {
            const store = Shopware.Store.get('inAppPurchaseCheckout');
            return store.entry;
        },
    },

    methods: {
        closeModal() {
            const store = Shopware.Store.get('inAppPurchaseCheckout');
            store.dismiss();
        },
    },
});
