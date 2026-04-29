const path = require('path')

const args = process.argv.slice(2)

const VERBOSE = args.includes('--verbose')
const DRY_RUN = args.includes('--dry')

const targetArg = args.find((a) => !a.startsWith('--'))

const ROOT = process.cwd()

const TARGET_DIR = targetArg
  ? path.isAbsolute(targetArg)
    ? targetArg
    : path.join(ROOT, targetArg)
  : path.join(ROOT, 'data', 'kb')

const DEBUG = {
  walk: false,
  tokenizer: false,
  sanitizer: false,
  render: false,
  diff: false,
  summary: true,
  files: false, // per-file metadata logs
  verbose: true,
  runRules: true,
}

module.exports = {
  DEBUG,
  DRY_RUN,
  TARGET_DIR,
}
