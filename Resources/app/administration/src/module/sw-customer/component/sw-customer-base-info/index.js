import template from './sw-customer-base-info.html.twig';
import './sw-customer-base-info.scss';
import errorConfig from '../../error-config.json';

import CUSTOMER from '../../constant/sw-customer.constant';

/**
 * @package checkout
 */

const { Criteria } = Cicada.Data;
const { mapPropertyErrors } = Cicada.Component.getComponentHelper();

// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
export default {
    template,

    compatConfig: Cicada.compatConfig,

    inject: [
        'repositoryFactory',
        'feature',
    ],

    props: {
        customer: {
            type: Object,
            required: true,
        },
        customerEditMode: {
            type: Boolean,
            required: true,
            default: false,
        },
        isLoading: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    data() {
        return {
            orderCount: 0,
            customerLanguage: null,
            currencyCode: Cicada.Context.app.systemCurrencyISOCode,
        };
    },

    computed: {
        orderRepository() {
            return this.repositoryFactory.create('order');
        },

        languageRepository() {
            return this.repositoryFactory.create('language');
        },

        languageId() {
            return this.customer.languageId;
        },

        customerLanguageName() {
            if (this.customerLanguage) {
                return this.customerLanguage.name;
            }
            return '…';
        },

        languageCriteria() {
            const criteria = new Criteria(1, 25);
            criteria.addFilter(Criteria.equals('salesChannels.id', this.customer.salesChannelId));

            return criteria;
        },

        orderCriteria() {
            const criteria = new Criteria(1, 1);
            criteria.addFilter(Criteria.equals('order.orderCustomer.customerId', this.$route.params.id));

            return criteria;
        },

        ...mapPropertyErrors('customer', [
            ...errorConfig['sw.customer.detail.base'].customer,
        ]),

        isBusinessAccountType() {
            return this.customer?.accountType === CUSTOMER.ACCOUNT_TYPE_BUSINESS;
        },

        dateFilter() {
            return Cicada.Filter.getByName('date');
        },

        currencyFilter() {
            return Cicada.Filter.getByName('currency');
        },
    },

    watch: {
        languageId: {
            immediate: true,
            handler() {
                this.languageRepository.get(this.languageId).then((language) => {
                    this.customerLanguage = language;
                });
            },
        },
        customer() {
            this.createdComponent();
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.orderRepository.search(this.orderCriteria).then((response) => {
                this.orderCount = response.total;
            });
        },
    },
};
