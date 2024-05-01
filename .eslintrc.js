module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-unused-vars": ["error"],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "no-console": "warn",
  },
};
