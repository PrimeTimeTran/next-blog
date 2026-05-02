import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import next from '@next/eslint-plugin-next'

export default [
  js.configs.recommended,

  {
    files: ['app/**/*', 'components/**/*', 'pages/**/*'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // 🔥 THIS IS REQUIRED
        },
      },
    },

    plugins: {
      'react-hooks': reactHooks,
      prettier,
      '@next/next': next,
    },

    rules: {
      // React hooks
      ...reactHooks.configs.recommended.rules,

      // Prettier
      'prettier/prettier': 'error',

      // Next.js
      '@next/next/no-html-link-for-pages': 'error',

      // Your overrides
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',

      // IMPORTANT: undefined checks
      'no-undef': 'error',
    },
  },

  {
    files: ['scripts/**/*', 'lib/content/server/**/*'],
    sourceType: 'module',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'dist/**', 'coverage/**'],
  },
]
