import template from './sw-first-run-wizard-shopware-account.html.twig';
import './sw-first-run-wizard-shopware-account.scss';

/**
 * @sw-package fundamentals@after-sales
 */
// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
export default {
    template,

    inject: ['firstRunWizardService'],

    emits: [
        'frw-set-title',
        'buttons-update',
        'frw-redirect',
    ],

    data() {
        return {
            shopwareId: '',
            password: '',
            accountError: false,
        };
    },

    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.setTitle();
            this.updateButtons();
        },

        setTitle() {
            this.$emit('frw-set-title', this.$tc('sw-first-run-wizard.shopwareAccount.modalTitle'));
        },

        updateButtons() {
            const disabledExtensionManagement = Shopware.Store.get('context').app.config.settings.disableExtensionManagement;
            const prevRoute = disabledExtensionManagement ? 'mailer.selection' : 'plugins';
            const skipRoute = disabledExtensionManagement ? 'finish' : 'store';

            const buttonConfig = [
                {
                    key: 'back',
                    label: this.$tc('sw-first-run-wizard.general.buttonBack'),
                    position: 'left',
                    variant: null,
                    action: `sw.first.run.wizard.index.${prevRoute}`,
                    disabled: false,
                },
                {
                    key: 'skip',
                    label: this.$tc('sw-first-run-wizard.general.buttonSkip'),
                    position: 'right',
                    variant: null,
                    action: `sw.first.run.wizard.index.${skipRoute}`,
                    disabled: false,
                },
                {
                    key: 'next',
                    label: this.$tc('sw-first-run-wizard.general.buttonNext'),
                    position: 'right',
                    variant: 'primary',
                    action: this.testCredentials.bind(this),
                    disabled: false,
                },
            ];

            this.$emit('buttons-update', buttonConfig);
        },

        testCredentials() {
            const { shopwareId, password } = this;

            return this.firstRunWizardService
                .checkShopwareId({
                    shopwareId,
                    password,
                })
                .then(() => {
                    this.accountError = false;

                    this.$emit('frw-redirect', 'sw.first.run.wizard.index.shopware.domain');

                    return false;
                })
                .catch(() => {
                    this.accountError = true;

                    return true;
                });
        },
    },
};
