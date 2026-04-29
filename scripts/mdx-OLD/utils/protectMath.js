function extractMathBlocks(content) {
  const blocks = []

  // block math
  content = content.replace(/\$\$[\s\S]*?\$\$/g, (m) => {
    const token = `@@MATH_${blocks.length}@@`
    blocks.push(m)
    return token
  })

  // inline math (IMPORTANT)
  content = content.replace(/\$(?!\$)[^$]+\$/g, (m) => {
    const token = `@@MATH_${blocks.length}@@`
    blocks.push(m)
    return token
  })

  return { content, blocks }
}

function restoreMathBlocks(content, blocks) {
  let out = content

  blocks.forEach((block, i) => {
    out = out.replaceAll(`@@MATH_${i}@@`, block)
  })

  return out
}

module.exports = {
  extractMathBlocks,
  restoreMathBlocks,
}
