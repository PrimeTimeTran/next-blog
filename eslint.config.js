import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import next from '@next/eslint-plugin-next'

export default [
  js.configs.recommended,
  next.configs.recommended,

  // -------------------------
  // APP (browser / react / next)
  // -------------------------
  {
    files: ['pages/**/*', 'components/**/*', 'app/**/*'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier,
      // '@next/next': next,
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',

      // IMPORTANT: keep OFF in hybrid projects
      'no-undef': 'off',
    },
  },

  // -------------------------
  // SERVER / SCRIPTS (node)
  // -------------------------
  {
    files: ['scripts/**/*', 'lib/content/server/**/*', 'pages/api/**/*'],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'no-undef': 'off',
    },
  },

  {
    files: ['scratchpads/**/*'],

    languageOptions: {
      globals: {
        console: true,
        setTimeout: true,
        fetch: true,
        URL: true,
        document: true, // if browser-like scripts
      },
    },

    rules: {
      'no-undef': 'off',
    },
  },

  // -------------------------
  // IGNORE GENERATED / BUILD / MDX OUTPUT
  // -------------------------
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'dist/**', 'coverage/**', '**/*.mdx.js'],
  },
]
