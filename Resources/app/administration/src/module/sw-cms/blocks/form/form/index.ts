/**
 * @private
 * @package discovery
 */
Cicada.Component.register('sw-cms-preview-form', () => import('./preview'));
/**
 * @private
 * @package discovery
 */
Cicada.Component.register('sw-cms-block-form', () => import('./component'));

/**
 * @private
 * @package discovery
 */
Cicada.Service('cmsService').registerCmsBlock({
    name: 'form',
    label: 'sw-cms.blocks.form.form.label',
    category: 'form',
    component: 'sw-cms-block-form',
    previewComponent: 'sw-cms-preview-form',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: {
            type: 'form',
        },
    },
});
