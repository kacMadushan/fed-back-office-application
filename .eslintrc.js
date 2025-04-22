module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
    },
    plugins: [
        'simple-import-sort'
    ],
    rules: {
        'react/prop-types': 'off',
        'react-refresh/only-export-components': 'off',
        'react/no-unescaped-entities': 'off',
        'no-unused-vars': 'off',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // External packages come first
                    ['^@?\\w'],
                    // Internal files
                    ['^@/'],
                    // Colocated files
                    ['^\\.\\./', '^\\./'],
                    // Style imports
                    ['^.+\\.?(css)$'],
                ],
            },
        ],
    },
};