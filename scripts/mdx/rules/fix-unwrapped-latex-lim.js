// rules/fix-unwrapped-latex-lim.js

module.exports = function (str) {
  return str.replace(/(^|\n)(\\lim_[^\n]+)/g, (_, prefix, expr) => `${prefix}$${expr}$`)
}
