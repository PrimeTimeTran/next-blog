// const visit = require('unist-util-visit')

// module.exports = function glossaryPlugin(glossary) {
//   return function transformer(tree) {
//     visit(tree, 'text', (node, index, parent) => {
//       if (!node.value) return
//       if (['link', 'inlineCode', 'code'].includes(parent.type)) return

//       Object.keys(glossary).forEach((term) => {
//         const regex = new RegExp(`\\b${term}\\b`, 'g')
//         const parts = node.value.split(regex)
//         if (parts.length > 1) {
//           const nodes = []
//           for (let i = 0; i < parts.length; i++) {
//             if (parts[i]) nodes.push({ type: 'text', value: parts[i] })
//             if (i < parts.length - 1) {
//               nodes.push({
//                 type: 'link',
//                 url: glossary[term],
//                 children: [{ type: 'text', value: term }],
//               })
//             }
//           }
//           parent.children.splice(index, 1, ...nodes)
//         }
//       })
//     })
//   }
// }
