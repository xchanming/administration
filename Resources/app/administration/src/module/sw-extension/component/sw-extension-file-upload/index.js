import template from './sw-extension-file-upload.html.twig';
import './sw-extension-file-upload.scss';
import pluginErrorHandler from '../../service/extension-error-handler.service';

const { Mixin } = Cicada;
const { Criteria } = Cicada.Data;

const USER_CONFIG_KEY = 'extension.plugin_upload';

/**
 * @package checkout
 * @private
 */
export default {
    template,

    compatConfig: Cicada.compatConfig,

    inject: [
        'extensionStoreActionService',
        'repositoryFactory',
    ],

    mixins: [
        Mixin.getByName('notification'),
    ],

    data() {
        return {
            isLoading: true,
            confirmModalVisible: false,
            shouldHideConfirmModal: false,
            pluginUploadUserConfig: null,
        };
    },

    computed: {
        userConfigRepository() {
            return this.repositoryFactory.create('user_config');
        },

        currentUser() {
            return Cicada.State.get('session').currentUser;
        },

        userConfigCriteria() {
            const criteria = new Criteria(1, 25);

            criteria.addFilter(Criteria.equals('key', USER_CONFIG_KEY));
            criteria.addFilter(Criteria.equals('userId', this.currentUser?.id));

            return criteria;
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        async createdComponent() {
            await this.getUserConfig();
            this.isLoading = false;
        },

        onClickUpload() {
            this.$refs.fileInput.click();
        },

        onFileInputChange() {
            const newFiles = Array.from(this.$refs.fileInput.files);
            this.handleUpload(newFiles);
            this.$refs.fileForm.reset();
        },

        handleUpload(files) {
            this.isLoading = true;
            const formData = new FormData();
            formData.append('file', files[0]);

            return this.extensionStoreActionService
                .upload(formData)
                .then(() => {
                    Cicada.Service('cicadaExtensionService')
                        .updateExtensionData()
                        .then(() => {
                            return this.createNotificationSuccess({
                                message: this.$tc('sw-extension.my-extensions.fileUpload.messageUploadSuccess'),
                            });
                        });
                })
                .catch((exception) => {
                    const mappedErrors = pluginErrorHandler.mapErrors(exception.response.data.errors);
                    mappedErrors.forEach((error) => {
                        if (error.parameters) {
                            this.showStoreError(error);
                            return;
                        }

                        const message = [
                            this.$tc(error.message),
                            error.details,
                        ]
                            .filter(Boolean)
                            .join('<br />');

                        this.createNotificationError({
                            message: message,
                        });
                    });
                })
                .finally(() => {
                    this.isLoading = false;
                    this.confirmModalVisible = false;

                    if (this.shouldHideConfirmModal === true) {
                        this.saveConfig(true);
                    }
                });
        },

        showStoreError(error) {
            const docLink = this.$tc('sw-extension.errors.messageToTheCicadaDocumentation', 0, error.parameters);
            this.createNotificationError({
                message: `${error.message} ${docLink}`,
                autoClose: false,
            });
        },

        showConfirmModal() {
            if (this.pluginUploadUserConfig.value.hide_upload_warning === true) {
                this.onClickUpload();
                return;
            }

            this.confirmModalVisible = true;
        },

        closeConfirmModal() {
            this.confirmModalVisible = false;
        },

        getUserConfig() {
            return this.userConfigRepository.search(this.userConfigCriteria, Cicada.Context.api).then((response) => {
                if (response.length) {
                    this.pluginUploadUserConfig = response.first();
                } else {
                    this.pluginUploadUserConfig = this.userConfigRepository.create(Cicada.Context.api);
                    this.pluginUploadUserConfig.key = USER_CONFIG_KEY;
                    this.pluginUploadUserConfig.userId = this.currentUser?.id;
                    this.pluginUploadUserConfig.value = {
                        hide_upload_warning: false,
                    };
                }
            });
        },

        saveConfig(value) {
            this.pluginUploadUserConfig.value = {
                hide_upload_warning: value,
            };

            this.userConfigRepository.save(this.pluginUploadUserConfig, Cicada.Context.api).then(() => {
                this.getUserConfig();
            });
        },
    },
};
