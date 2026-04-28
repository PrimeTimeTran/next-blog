module.exports = function fixJsxTags(content) {
  return content.replace(/<(\/?)([a-zA-Z][a-zA-Z0-9-_]*)>/g, (match, slash, tag) => {
    const allowed = new Set(['sub', 'sup', 'br', 'hr', 'img'])

    // keep real HTML-ish tags
    if (allowed.has(tag.toLowerCase())) return match

    // escape everything else
    return `{'<${slash}${tag}>'}`
  })
}
