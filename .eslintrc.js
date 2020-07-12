module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      tsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    strict: 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
  },
}
