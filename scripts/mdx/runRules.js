const noH2 = require('./rules/no-h2')

const rules = [noH2]

function runRules(region, file, original) {
  console.log('RULE CHECK:', region.type)
  const diagnostics = []

  let updatedRegion = region

  for (const rule of rules) {
    const result = rule(updatedRegion, file, original)

    updatedRegion = result.region

    if (result.diagnostics?.length) {
      diagnostics.push(...result.diagnostics)
    }
  }

  return {
    region: updatedRegion,
    diagnostics,
  }
}

function runRules2(region, file, original) {
  console.log('RULE CHECK:', region.type)

  return {
    region,
    diagnostics: [],
    fixes: [],
  }
}

function runRules3(region) {
  return {
    region,
    diagnostics: [
      {
        rule: 'debug-rule',
        message: 'hit rule engine',
        line: 1,
        snippet: region.value.slice(0, 40),
      },
    ],
    fixes: [],
  }
}

function runRules4(region, file, original) {
  const diagnostics = []
  const fixes = []

  const lines = region.value.split('\n')

  lines.forEach((line, i) => {
    if (line.startsWith('## ')) {
      diagnostics.push({
        rule: 'force-h2-to-h1',
        message: 'H2 detected (test rule)',
        line: i + 1,
        snippet: line,
      })

      fixes.push({
        type: 'replace-line',
        original: line,
        replacement: '# FIXED ' + line.slice(3),
      })
    }
  })

  return {
    region,
    diagnostics,
    fixes,
  }
}

module.exports = { runRules: runRules4 }
