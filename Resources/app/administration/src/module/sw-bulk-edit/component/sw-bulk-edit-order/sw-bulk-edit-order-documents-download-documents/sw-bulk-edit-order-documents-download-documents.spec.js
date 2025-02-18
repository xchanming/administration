/**
 * @sw-package checkout
 */
import { mount } from '@vue/test-utils';

async function createWrapper() {
    return mount(await wrapTestComponent('sw-bulk-edit-order-documents-download-documents', { sync: true }), {
        global: {
            stubs: {
                'sw-checkbox-field': true,
            },
            provide: {
                repositoryFactory: {
                    create: () => {
                        return {
                            search: () => Promise.resolve(),
                        };
                    },
                },
            },
        },
    });
}

describe('sw-bulk-edit-order-documents-download-documents', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await createWrapper();
    });

    it('should be a Vue.js component', async () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it('should get document types once component created', async () => {
        wrapper.vm.getDocumentTypes = jest.fn(() => Promise.resolve());

        await wrapper.vm.createdComponent();

        expect(wrapper.vm.getDocumentTypes).toHaveBeenCalledTimes(1);
        wrapper.vm.getDocumentTypes.mockRestore();
    });

    it('should be able to get document types', async () => {
        const spy = jest.spyOn(wrapper.vm.documentTypeRepository, 'search').mockImplementation(() => {
            return Promise.resolve([
                {
                    id: 1,
                    technicalName: 'invoice',
                },
                {
                    id: 2,
                    technicalName: 'delivery_note',
                },
            ]);
        });

        await wrapper.vm.createdComponent();

        expect(wrapper.vm.documentTypes).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: 1,
                    technicalName: 'invoice',
                    selected: false,
                }),
                expect.objectContaining({
                    id: 2,
                    technicalName: 'delivery_note',
                    selected: false,
                }),
            ]),
        );
        spy.mockRestore();
    });
});
