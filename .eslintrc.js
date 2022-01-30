module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'indent': 'off',
    'object-curly-spacing': 'off',
    'max-len': 'off',
    'quotes': 'off',
    'spaced-comment': 'off',
    'no-multiple-empty-lines': 'off',
    'comma-dangle': 'off',
    'semi': 'off',
    'react/react-in-jsx-scope': 'off',
    'operator-linebreak': 'off',
    'eol-last': 'off',
    "padded-blocks": 'off',
    "no-trailing-spaces": 'off',
    'new-cap': 'off',
    'no-unused-vars': 'error',
    'react/prop-types': 'off',
    'operator-linebreak': 'off',
    'new-cap': 'off',
    'linebreak-style': 'off',
  },
};
