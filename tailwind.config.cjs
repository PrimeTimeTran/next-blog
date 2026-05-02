const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { safeList } = require('./lib/theme/tailwind-class-generators.cjs')
const { callOutTheme } = require('./lib/theme/theme.cjs')

const flatten = (obj) => Object.values(obj).flatMap((v) => Object.values(v).flat())

const safelist = [
  ...safeList,
  ...flatten(callOutTheme),
  'text-[#b58cff]',
  'text-[#ff7ac6]',
  'text-[#8bdfff]',
  'text-[#5ee38a]',
  'text-[#f7e26b]',
]

module.exports = {
  darkMode: 'class',

  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './layouts/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
    './data/**/*.{mdx,md}',
    './css/**/*.{css}',
  ],

  safelist,

  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },

      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },

      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.blue,
        gray: colors.neutral,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },

            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },

            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },

            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },

            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },

            pre: {
              backgroundColor: theme('colors.gray.900'),
            },

            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              borderRadius: '0.25rem',
              padding: '2px 4px',
            },

            'code::before': {
              content: 'none',
            },

            'code::after': {
              content: 'none',
            },

            hr: {
              borderColor: theme('colors.gray.200'),
            },

            strong: {
              color: theme('colors.gray.900'),
            },

            blockquote: {
              color: theme('colors.gray.700'),
              borderLeftColor: theme('colors.gray.300'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),

            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },

            h1: {
              color: theme('colors.gray.100'),
              fontWeight: '700',
            },

            h2: {
              color: theme('colors.gray.100'),
              fontWeight: '700',
            },

            h3: {
              color: theme('colors.gray.100'),
              fontWeight: '600',
            },

            pre: {
              backgroundColor: theme('colors.gray.900'),
            },

            code: {
              backgroundColor: theme('colors.gray.800'),
            },

            hr: {
              borderColor: theme('colors.gray.700'),
            },

            strong: {
              color: theme('colors.gray.100'),
            },

            blockquote: {
              color: theme('colors.gray.300'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
