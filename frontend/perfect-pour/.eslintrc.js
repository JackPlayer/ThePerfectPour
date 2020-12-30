module.exports = {
  rules: {
    'linebreak-style': 'off',
  },
  extends: ['airbnb-base', 'plugin:jsdoc/recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
