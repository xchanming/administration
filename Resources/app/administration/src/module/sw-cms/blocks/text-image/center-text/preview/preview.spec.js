/**
 * @sw-package discovery
 */
import { runGenericCmsTest } from 'src/module/sw-cms/test-utils';
import component from './index';

describe('src/module/sw-cms/blocks/center-text/preview', () => {
    runGenericCmsTest(component);
});
