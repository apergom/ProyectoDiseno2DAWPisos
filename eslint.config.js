import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    // Código de la app: corre en el navegador.
    files: ['js/**/*.js'],
    languageOptions: {
      globals: globals.browser,
    },
  },
];
