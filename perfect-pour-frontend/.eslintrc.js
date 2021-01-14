module.exports = {
  extends: ['airbnb-base', 'plugin:jsdoc/recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    jest: true,
  },
};
