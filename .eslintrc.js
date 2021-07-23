module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'import'],
  ignorePatterns: ['node_modules/'],
  rules: {
    'react/prop-types': 0,
    camelcase: 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}