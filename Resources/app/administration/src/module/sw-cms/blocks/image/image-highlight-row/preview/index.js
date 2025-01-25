import template from './sw-cms-preview-image-highlight-row.html.twig';
import './sw-cms-preview-image-highlight-row.scss';

/**
 * @private
 * @sw-package discovery
 */
export default {
    template,

    compatConfig: Cicada.compatConfig,

    computed: {
        assetFilter() {
            return Cicada.Filter.getByName('asset');
        },
    },
};
