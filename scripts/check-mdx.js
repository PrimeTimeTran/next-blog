#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { bundleMDX } = require('mdx-bundler')

const ROOT = process.cwd()
const KB_PATH = path.join(ROOT, 'data', 'kb')

function walk(dir) {
  let results = []
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)

    if (stat.isDirectory()) {
      results = results.concat(walk(full))
    } else if (full.endsWith('.md') || full.endsWith('.mdx')) {
      results.push(full)
    }
  }
  return results
}

async function checkFile(file) {
  const source = fs.readFileSync(file, 'utf8')

  try {
    await bundleMDX({
      source,
      cwd: process.cwd(),
    })
    return null
  } catch (error) {
    return { file, error }
  }
}

async function run() {
  const files = walk(KB_PATH)

  let failed = []

  for (const file of files) {
    const result = await checkFile(file)

    if (result) {
      failed.push(result)

      console.log('\n🚨', file)

      const err = result.error

      if (err?.errors) {
        err.errors.forEach((e) => {
          console.log('  →', e.text)

          if (e.location) {
            console.log(`    at line ${e.location.line}, col ${e.location.column}`)
          }
        })
      } else {
        console.log(err.message || err)
      }
    }
  }

  console.log('\n======================')
  console.log(`❌ Failed: ${failed.length} files`)
  console.log('======================')
}

run()
