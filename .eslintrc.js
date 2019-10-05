module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    "react-app",
    "prettier"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "prettier"
  ],
  rules: {
    "semi": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-quotes": [
      1,
      "prefer-double"
    ],
    "no-restricted-globals": [
      "error",
      {
          "name": "event",
          "message": "Use local parameter instead."
      },
      {
          "name": "fdescribe",
          "message": "Do not commit fdescribe. Use describe instead."
      }
  ]
  },
};