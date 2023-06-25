module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['@react-native', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars' : [
      'error',
      {
        argsIgnorePattern: '^_'
      }
    ],
    'no-unused-vars' : 'off',
    'no-shadow' : 'off',
    '@typescript-eslint/no-shadow': 11,
    'no-undef' : 'off',
  },
};
