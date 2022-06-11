'use strict';

module.exports = {
    env: {
        browser: true,
        jest: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: "module"
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    rules: {
        // For the most part we should hope to delete these rules over time
        // these are pretty much all having us ignore lint issues
        // in the recommended settings listed in `extends`
        '@typescript-eslint/array-type': [0, 'generic'],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-angle-bracket-type-assertion': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/prefer-interface': 0,
        'react/display-name': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off'
    },
    settings: {
        react: { version: 'detect' }
    }
};
