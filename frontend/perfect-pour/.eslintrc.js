module.exports = {
  rules: {
    'linebreak-style': ['warn', 'windows'],
  },
  extends: ['airbnb-base', 'plugin:jsdoc/recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
