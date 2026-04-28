#!/usr/bin/env node

const { run } = require('./runner')

const args = process.argv.slice(2)
const isDry = args.includes('--dry')

run({
  dir: 'data/kb',
  dry: isDry,
})
