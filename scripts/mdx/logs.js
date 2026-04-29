const { DEBUG } = require('./config')

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
  enabled: true,

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
  section,
}
