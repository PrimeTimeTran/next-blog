const DEBUG = process.env.DEBUG || ''
// const DEBUG = 'bundle'

const enabled = new Set(DEBUG.split(',')?.filter(Boolean))

function createLogger(namespace) {
  return (...args) => {
    if (!enabled.has(namespace) && !enabled.has('*')) return
    console.log(`[${namespace}]`, ...args)
  }
}

export const log = {
  mdx: createLogger('mdx'),
  bundle: createLogger('bundle'),
  content: createLogger('content'),
  tabgroup: createLogger('tabgroup'),
  embed: createLogger('embed'),
  registry: createLogger('registry'),
}
