import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist', 'storybook-static', 'coverage', 'node_modules', 'old-src/**'] },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        alert: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        encodeURI: 'readonly',
        Event: 'readonly',
        KeyboardEvent: 'readonly',
        MouseEvent: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLInputElement: 'readonly'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'max-lines-per-function': ['warn', { max: 220, skipBlankLines: true, skipComments: true }],
      'max-lines': ['warn', { max: 350, skipBlankLines: true, skipComments: true }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^([A-Z]|_)' }]
    }
  }
];
