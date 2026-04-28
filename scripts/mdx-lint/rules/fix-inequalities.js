// rules/fix-inequalities.js

module.exports = function (str) {
  return str.replace(/\|\s*<=\s*\|/g, '| `<=` |').replace(/\|\s*>=\s*\|/g, '| `>=` |')
}
