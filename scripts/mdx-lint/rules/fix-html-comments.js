// rules/fix-html-comments.js

module.exports = function (str) {
  return str.replace(/<!--([\s\S]*?)-->/g, (_, comment) => {
    return `{/* ${comment.trim()} */}`
  })
}
