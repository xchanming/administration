import template from './sw-flow-generate-document-modal.html.twig';

const { Component, Store } = Shopware;
const { Criteria } = Shopware.Data;
const { mapState } = Component.getComponentHelper();
const { ShopwareError } = Shopware.Classes;

/**
 * @private
 * @sw-package after-sales
 */
export default {
    template,

    inject: [
        'repositoryFactory',
    ],

    emits: [
        'modal-close',
        'process-finish',
    ],

    props: {
        sequence: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            documentTypesSelected: [],
            fieldError: null,
        };
    },

    computed: {
        documentTypeRepository() {
            return this.repositoryFactory.create('document_type');
        },

        documentTypeCriteria() {
            const criteria = new Criteria(1, 100);
            criteria.addSorting(Criteria.sort('name', 'ASC'));

            return criteria;
        },

        ...mapState(() => Store.get('swFlow'), ['documentTypes']),
    },

    watch: {
        documentTypesSelected(value) {
            if (value.length > 0 && this.fieldError) {
                this.fieldError = null;
            }
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            if (this.sequence?.config?.documentType) {
                this.documentTypesSelected = [this.sequence.config];
            } else {
                this.documentTypesSelected = this.sequence?.config?.documentTypes || [];
            }

            this.documentTypesSelected = this.documentTypesSelected.map((type) => {
                return type.documentType;
            });

            if (!this.documentTypes.length) {
                this.documentTypeRepository.search(this.documentTypeCriteria).then((data) => {
                    Shopware.Store.get('swFlow').documentTypes = data;
                });
            }
        },

        onClose() {
            this.$emit('modal-close');
        },

        onAddAction() {
            if (!this.documentTypesSelected.length) {
                this.fieldError = new ShopwareError({
                    code: 'c1051bb4-d103-4f74-8988-acbcafc7fdc3',
                });

                return;
            }

            let sequence = {
                ...this.sequence,
            };

            const documentTypes = this.documentTypesSelected.map((documentType) => {
                return {
                    documentType: documentType,
                    documentRangerType: `document_${documentType}`,
                };
            });

            sequence = {
                ...sequence,
                config: {
                    documentTypes,
                },
            };

            this.$emit('process-finish', sequence);
        },
    },
};
