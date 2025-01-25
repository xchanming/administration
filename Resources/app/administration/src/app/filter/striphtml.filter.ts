/**
 * @sw-package framework
 */

Cicada.Filter.register('striphtml', (value: string): string => {
    if (!value) {
        return '';
    }

    return value.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, '');
});

/**
 * @private
 */
export default {};
