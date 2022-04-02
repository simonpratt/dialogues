module.exports = {
  env: {
    node: true,
    es6: true,
    mocha: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': { typescript: {} },
    'react': { version: 'detect' },
  },
  ignorePatterns: ['node_modules', 'dist', '.prettierrc.js'],
};
