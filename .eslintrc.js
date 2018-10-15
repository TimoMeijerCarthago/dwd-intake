module.exports = {
    extends: '',
    parser: 'babel-eslint',
    plugins: [
        'react', 'jsx-a11y', 'import'
    ],
    rules: {
        'comma-dangle': [
            2, 'never'
        ],
        'no-cond-assign': 2,
        'no-console': 1,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 0,
        'no-extra-semi': 2,
        'no-func-assign': 0,
        'no-inner-declarations': 0,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unreachable': 2,
        'use-isnan': 1,
        'valid-jsdoc': 1,
        'valid-typeof': 2,
        'no-unexpected-multiline': 0,

        'accessor-pairs': 0,
        'block-scoped-var': 2,
        complexity: 0,
        'consistent-return': 2,
        curly: 2,
        'default-case': 2,
        'dot-notation': 1,
        'dot-location': [
            2, 'property'
        ],
        eqeqeq: [
            2, 'smart'
        ],
        'guard-for-in': 0,
        'no-alert': 0,
        'no-caller': 1,
        'no-else-return': 0,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 0,
        'no-floating-decimal': 2,
        'no-implicit-coercion': 0,
        'no-implied-eval': 2,
        'no-invalid-this': 0,
        'no-iterator': 0,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-param-reassign': 2,
        'no-process-env': 1,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 2,
        'no-warning-comments': 0,
        'no-with': 2,
        radix: 0,
        'vars-on-top': 1,
        'wrap-iife': [
            2, 'inside'
        ],
        yoda: 0,

        'init-declarations': 0,
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-shadow-restricted-names': 2,
        'no-shadow': 2,
        'no-undef-init': 2,
        'no-undef': 2,
        'no-undefined': 0,
        'no-unused-vars': 2,
        'no-use-before-define': [
            2, 'nofunc'
        ],

        camelcase: 2,
        'no-multiple-empty-lines': [
            2, {
                max: 2
            }
        ],
        indent: [
            2,
            4, {
                SwitchCase: 1
            }
        ],
        'brace-style': [
            2, '1tbs'
        ],
        'key-spacing': 2,
        'array-bracket-spacing': [
            2, 'always'
        ],
        'new-cap': [
            2, {
                capIsNew: false
            }
        ],
        quotes: [
            2, 'single'
        ],
        'no-new-object': 2,
        strict: 0,
        'block-spacing': 2,
        'computed-property-spacing': [
            2, 'never'
        ],
        'no-mixed-spaces-and-tabs': 2,
        'no-underscore-dangle': 0,
        'object-curly-spacing': [
            2, 'always'
        ],
        'semi-spacing': [
            2, {
                before: false,
                after: true
            }
        ],
        'keyword-spacing': [
            'error', {
                overrides: {
                    if: {
                        after: true
                    },
                    for: {
                        after: true
                    },
                    while: {
                        after: true
                    }
                }
            }
        ],

        'space-before-blocks': [
            2, 'always'
        ],
        'arrow-parens': [
            2, 'always'
        ],
        semi: [
            2, 'never'
        ],
        'space-before-function-paren': [
            2, 'never'
        ],
        'jsx-quotes': [
            2, 'prefer-single'
        ],
        'object-shorthand': [
            'error', 'always'
        ],

        'react/display-name': 0,
        'react/jsx-boolean-value': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-no-bind': [
            2, {
                allowArrowFunctions: true
            }
        ],
        'react/jsx-sort-props': 0,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-multi-comp': 0,
        'react/no-unknown-property': 2,
        'react/prop-types': [
            2, {
                ignore: ['children']
            }
        ],
        'react/react-in-jsx-scope': 2,
        'react/self-closing-comp': 2,
        'react/wrap-multilines': 2,
        'react/jsx-curly-spacing': [
            2, 'always'
        ],
        'react/forbid-prop-types': 0,
        'react/wrap-multilines': 0
    },
    globals: {
        console: 1,
        global: 1,
        document: 1,
        localStorage: 1,
        window: 1,
        URLSearchParams: 1,
        event: 1,
        Promise: 1,
        process: 1,
        require: 1,
        module: 1
    }
}
