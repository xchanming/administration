import template from './sw-category-seo-form.html.twig';

/**
 * @package inventory
 */
// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
export default {
    template,

    compatConfig: Cicada.compatConfig,

    inject: ['acl'],

    props: {
        category: {
            type: Object,
            required: true,
        },
    },
};
