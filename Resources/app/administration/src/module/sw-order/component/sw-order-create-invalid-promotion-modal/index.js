import template from './sw-order-create-invalid-promotion-modal.html.twig';
import './sw-order-create-invalid-promotion-modal.scss';

/**
 * @sw-package checkout
 */

const { State } = Cicada;

// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
export default {
    template,

    compatConfig: Cicada.compatConfig,

    emits: [
        'close',
        'confirm',
    ],

    computed: {
        invalidPromotionCodes() {
            return State.getters['swOrder/invalidPromotionCodes'];
        },
    },

    methods: {
        onClose() {
            this.$emit('close');
        },

        onConfirm() {
            this.$emit('confirm');
        },
    },
};
