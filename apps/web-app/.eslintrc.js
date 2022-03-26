module.exports = {
  extends: '../../.eslintrc.js',
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/vite.config.ts'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
