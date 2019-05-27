module.exports = {
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  env: {
    node: true,
  },
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
  },
  settings: {
    react: {
      version: "16.4.2",
    },
  },
};
