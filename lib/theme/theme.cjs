// Reference: Tailwind Color Palette
// https://tailscan.com/colors
export const callOutTheme = {
  note: {
    border: 'border-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    text: 'text-blue-600 dark:text-blue-300',
  },

  info: {
    border: 'border-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    text: 'text-sky-600 dark:text-sky-300',
  },

  tip: {
    border: 'border-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    text: 'text-emerald-600 dark:text-emerald-300',
  },

  success: {
    border: 'border-green-400',
    bg: 'bg-green-50 dark:bg-green-950/30',
    text: 'text-green-600 dark:text-green-300',
  },

  warning: {
    border: 'border-yellow-400',
    bg: 'bg-yellow-50 dark:bg-yellow-950/30',
    text: 'text-yellow-600 dark:text-yellow-300',
  },

  danger: {
    border: 'border-red-400',
    bg: 'bg-red-50 dark:bg-red-950/30',
    text: 'text-red-600 dark:text-red-300',
  },

  bug: {
    border: 'border-pink-400',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    text: 'text-pink-600 dark:text-pink-300',
  },

  quote: {
    border: 'border-zinc-400',
    bg: 'bg-zinc-50 dark:bg-zinc-900',
    text: 'text-zinc-600 dark:text-zinc-300',
  },

  question: {
    border: 'border-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    text: 'text-indigo-600 dark:text-indigo-300',
  },

  failure: {
    border: 'border-red-500',
    bg: 'bg-red-50 dark:bg-red-950/30',
    text: 'text-red-600 dark:text-red-300',
  },

  error: {
    border: 'border-red-500',
    bg: 'bg-red-50 dark:bg-red-950/30',
    text: 'text-red-600 dark:text-red-300',
  },

  example: {
    border: 'border-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    text: 'text-violet-600 dark:text-violet-300',
  },

  abstract: {
    border: 'border-slate-400',
    bg: 'bg-slate-50 dark:bg-slate-900',
    text: 'text-slate-600 dark:text-slate-300',
  },
}

export const headingTheme1 = {
  h1: 'text-blue-700 font-semibold',
  h2: 'text-blue-600',
  h3: 'text-blue-500/80',
  h4: 'text-slate-500',
  h5: 'text-slate-500/80',
  h6: 'text-slate-400',
}

export const headingTheme2 = {
  h1: 'text-slate-900 dark:text-white font-semibold',
  h2: 'text-slate-700 dark:text-slate-200',
  h3: 'text-slate-600 dark:text-slate-300',
  h4: 'text-slate-500 dark:text-slate-400',
  h5: 'text-slate-400 dark:text-slate-500',
  h6: 'text-slate-400/80',
}

export const dracula = {
  h1: 'text-[#b58cff] font-semibold',
  h2: 'text-[#ff7ac6]',
  h3: 'text-[#8bdfff]',
  h4: 'text-[#5ee38a]',
  h5: 'text-[#f7e26b]',
  h6: 'text-[#6b7280]',
}
export const headingTheme = dracula

const levelToHeadingKey = {
  0: 'h1',
  1: 'h2',
  2: 'h3',
  3: 'h4',
  4: 'h5',
  5: 'h6',
  6: 'h6',
}

export function getHeadingClass(level) {
  const key = levelToHeadingKey[level] ?? 'h6'
  return headingTheme[key]
}

export const H1 = (props) => <h1 className={headingTheme.h1} {...props} />
export const H2 = (props) => <h2 className={headingTheme.h2} {...props} />
export const H3 = (props) => <h3 className={headingTheme.h3} {...props} />
export const H4 = (props) => <h4 className={headingTheme.h4} {...props} />
export const H5 = (props) => <h5 className={headingTheme.h5} {...props} />
export const H6 = (props) => <h6 className={headingTheme.h6} {...props} />

const flatten = (obj) => Object.values(obj).flatMap((v) => Object.values(v).flat())

export const theme = {
  safelist: flatten(callOutTheme),
}
