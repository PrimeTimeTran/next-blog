import { classify } from './helpers.js'

export function createRuleContext({ file, lines }) {
  const isMeaningful = (line) => line && line.trim().length > 0

  const getPrevMeaningful = (i) => {
    for (let j = i - 1; j >= 0; j--) {
      if (isMeaningful(lines[j])) return lines[j]
    }
    return null
  }

  const getNextMeaningful = (i) => {
    for (let j = i + 1; j < lines.length; j++) {
      if (isMeaningful(lines[j])) return lines[j]
    }
    return null
  }

  // ✅ NEW: context window (THIS is what you want for debugging)
  const getWindow = (i, radius = 2) => {
    const start = Math.max(0, i - radius)
    const end = Math.min(lines.length - 1, i + radius)

    return lines.slice(start, end + 1).map((line, idx) => ({
      lineNumber: start + idx + 1,
      raw: line,
      type: classify(line),
      isTarget: start + idx === i,
    }))
  }

  return {
    file,
    lines,

    getLine: (i) => lines[i] ?? null,

    getPrevLine: (i) => lines[i - 1] ?? null,
    getNextLine: (i) => lines[i + 1] ?? null,

    getPrevMeaningful,
    getNextMeaningful,

    // ✅ ADD THIS
    getWindow,
  }
}
