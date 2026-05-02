import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import next from '@next/eslint-plugin-next'

export default [
  js.configs.recommended,
  next.configs.recommended,

  // -------------------------
  // APP (browser / react / next)
  // -------------------------
  {
    files: ['pages/**/*', 'components/**/*', 'app/**/*', 'lib/**/*', '**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'warn',
      // ❌ REMOVE THIS
      // 'no-undef': 'off',
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
      env: {
        browser: true,
        node: true,
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
