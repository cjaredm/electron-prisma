module.exports = {
  extends: 'erb',
  plugins: ['@typescript-eslint'],
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    'no-await-in-loop': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    eqeqeq: 'off',
    'trailing-comma': 'off',
    'comma-dangle': 'off',
    'comma-style': 'off',
    singleQuote: 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'single-quote': 'off',
    'import/named': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'promise/always-return': 'off',
    'prefer-destructuring': 'off',
    'import/no-relative-packages': 'off',
    'import/no-cycle': 'off',
    'no-restricted-syntax': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn'
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.ts')
      },
      typescript: {}
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  }
};
