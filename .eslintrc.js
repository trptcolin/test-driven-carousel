module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'double', {avoidEscape: true}],
    'comma-dangle': ["error", "always-multiline"]
  }
}