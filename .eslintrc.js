/* eslint-disable prettier/prettier */
const path = require('path');

module.exports = {
  env: {
    node: true,
    es2021: true,
    'jest/globals': true,
    // https://stackoverflow.com/questions/41858052/solving-linter-error-no-undef-for-document
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {
        // this will make sure eslint resolves absolute paths properly.
        project: path.resolve(__dirname, 'src'),
      },
    },
  },
  plugins: [
    '@typescript-eslint',
    'testing-library',
    'jest',
    'import',
    'prettier',
  ],
  rules: {
    // for the compatability with the auto-generated types by apollo-tools
    camelcase: 'off',
    'prettier/prettier': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library#usage
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debug': 'warn',
    'testing-library/no-dom-import': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/issues/2502 - linonetwo 10 Sep 2020
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    'class-methods-use-this': 0,
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    // https://stackoverflow.com/a/63961972/2791678
    'no-shadow': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // https://github.com/ts-engine/ts-engine/blob/master/packages/eslint-config/index.js#L56
    '@typescript-eslint/no-unused-vars': 'error',
    'no-param-reassign': [2, { props: false }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: false,
        caseSensitive: true,
      },
    ],
  },
  overrides: [
    {
      files: '*',
      rules: {
        'no-undef': 'off',
      },
    },
    {
      // https://github.com/testing-library/eslint-plugin-testing-library#eslint-overrides
      // Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
