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

module.exports = {
  log,
  section,
}
