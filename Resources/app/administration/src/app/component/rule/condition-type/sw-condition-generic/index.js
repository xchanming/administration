import template from './sw-condition-generic.html.twig';
import './sw-condition-generic.scss';

const { Component, Mixin } = Cicada;
const { getPlaceholderSnippet } = Cicada.Utils.genericRuleCondition;

/**
 * @public
 * @package services-settings
 * @description Condition for generic rules. This component must a be child of sw-condition-tree.
 * @status prototype
 * @example-type code-only
 * @component-example
 * <sw-condition-generic :condition="condition" :level="0"></sw-condition-generic>
 */
Component.extend('sw-condition-generic', 'sw-condition-base', {
    template,
    inheritAttrs: false,

    mixins: [
        Mixin.getByName('generic-condition'),
    ],

    data() {
        return {
            matchesAll: false,
        };
    },

    methods: {
        getPlaceholder(fieldType) {
            return this.$tc(getPlaceholderSnippet(fieldType));
        },
    },
});
