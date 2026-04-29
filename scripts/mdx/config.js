import path from 'path'

export const args = process.argv.slice(2)

export const VERBOSE = args.includes('--verbose')
export const DRY_RUN = args.includes('--dry')

export const targetArg = args.find((a) => !a.startsWith('--'))

export const ROOT = process.cwd()

export const TARGET_DIR = targetArg
  ? path.isAbsolute(targetArg)
    ? targetArg
    : path.join(ROOT, targetArg)
  : path.join(ROOT, 'data', 'kb')

export const DEBUG = {
  walk: false,
  tokenizer: false,
  sanitizer: false,
  render: false,
  diff: false,
  summary: true,
  files: false,
  verbose: true,
}
