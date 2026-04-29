const { DEBUG, DRY_RUN } = require('./config')

/* -------------------------
 * HELPERS
 * ------------------------ */

function log(key, ...args) {
  if (DEBUG[key]) console.log(...args)
}

function section(title) {
  if (DEBUG.summary) console.log(`\n=== ${title} ===`)
}

const DIAG = {
  enabled: false,
  buffer: {
    fixes: [],
    render: [],
    runRules: [],
    tokenizer: [],
  },
  emit(type, payload) {
    if (!this.enabled) return
    if (!this.buffer[type]) this.buffer[type] = []

    this.buffer[type].push(payload)
  },
  summarizePipeline() {
    if (!this.enabled) return

    for (const [key, logs] of Object.entries(this.buffer)) {
      if (!logs.length) continue

      console.log(`\n--- ${key.toUpperCase()} (${logs.length}) ---`)

      for (const log of logs.slice(0, 10)) {
        console.log(log)
      }

      if (logs.length > 10) {
        console.log(`... +${logs.length - 10} more`)
      }
    }

    // reset after run (important)
    this.clear()
  },
  summarize(regions, fixes, diagnostics) {
    section('SUMMARY')
    console.log('REGIONS:', regions.length)
    console.log('FIXES:', fixes.length)
    console.log('DIAGNOSTICS:', diagnostics.length)
  },
  summarizeFileViolations(file, diagnostics) {
    if (!diagnostics.length) return
    section(`⚠️ RULE VIOLATIONS: ${file}`)
    if (DEBUG.verbose) {
      for (const d of diagnostics) {
        console.log('\n-------------------------')
        console.log(`📛 Rule: ${d.rule}`)
        console.log(`📝 Message: ${d.message}`)
        console.log(`#️⃣  Line: ${d.location.startLine}`)

        console.log('\n🔍 Context Window:\n')

        const window = d.context?.window || []

        // compute padding for alignment
        const maxLine = Math.max(...window.map((w) => String(w.lineNumber).length))
        const maxType = Math.max(...window.map((w) => w.type.length))

        for (const w of window) {
          const marker = w.isTarget ? '👉' : '  '

          const lineNum = String(w.lineNumber).padStart(maxLine, ' ')
          const type = w.type.padEnd(maxType, ' ')

          const raw = w.raw ?? ''

          console.log(`${marker} ${lineNum}: ${type} | ${raw}`)
        }
      }
    } else {
      for (const d of diagnostics) {
        console.log({
          rule: d.rule,
          message: d.message,
          snippet: d.snippet,
          line: d.line,
        })
      }
    }
  },

  summarizeScriptRun(changed) {
    section('DONE')
    console.log({ changed, mode: DRY_RUN ? 'dry' : 'write' })
  },

  clear() {
    for (const key in this.buffer) {
      this.buffer[key] = []
    }
  },

  log(event) {
    if (!this.enabled) return
    console.log(`
🆔 File: ${event.file}

#️⃣ Location: ${event.line}:${event.column}

📐 Rule: ${event.rule}

💬 Message: ${event.message}

📄 Snippet:
${event.snippet}
`)
  },
}

function diff(original, rebuilt) {
  if (!DEBUG.diff) return

  section('DIFF')

  console.log({
    lossless: original === rebuilt,
    originalLen: original.length,
    rebuiltLen: rebuilt.length,
  })

  if (original === rebuilt) return

  for (let i = 0; i < Math.min(original.length, rebuilt.length); i++) {
    if (original[i] !== rebuilt[i]) {
      console.log({
        index: i,
        original: original.slice(i, i + 40),
        rebuilt: rebuilt.slice(i, i + 40),
      })
      break
    }
  }
}

module.exports = {
  log,
  diff,
  DIAG,
  section,
}
