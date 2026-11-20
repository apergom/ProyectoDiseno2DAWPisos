import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['node_modules/**'],
  },
  js.configs.recommended,
  {
    // Código de la app: se ejecuta en el navegador, con módulos ES.
    files: ['js/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      eqeqeq: ['error', 'smart'],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  {
    // Propio config de ESLint: se ejecuta en Node, también como módulo ES.
    files: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
];
