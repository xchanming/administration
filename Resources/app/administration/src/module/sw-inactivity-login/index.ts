import './page/index';

import type { RouteLocationNamedRaw } from 'vue-router';
import zhCN from './snippet/zh-CN.json';
import enGB from './snippet/en-GB.json';

const { Module } = Shopware;

/**
 * @sw-package framework
 *
 * @private
 */
Module.register('sw-inactivity-login', {
    type: 'core',
    name: 'inactivity-login',
    title: 'sw-inactivity-login.general.mainMenuItemIndex',
    description: 'sw-inactivity-login.general.description',
    version: '1.0.0',
    targetVersion: '1.0.0',
    color: '#F19D12',

    snippets: {
        'zh-CN': zhCN,
        'en-GB': enGB,
    },

    routes: {
        index: {
            component: 'sw-inactivity-login',
            path: '/inactivity/login/:id',
            coreRoute: true,
            props: {
                default(route: RouteLocationNamedRaw) {
                    return {
                        hash: route.params?.id,
                    };
                },
            },
        },
    },
});
