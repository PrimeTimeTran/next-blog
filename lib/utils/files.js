import fs from 'fs'
import path from 'path'

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x)

const flattenArray = (input) =>
  input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], [])

const map = (fn) => (input) => input.map(fn)

const walkDir = (fullPath) => {
  return fs.statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath)
}

const pathJoinPrefix = (prefix) => (extraPath) => path.join(prefix, extraPath)

export default function getAllFilesRecursively(dir) {
  let results = []

  const list = fs.readdirSync(dir)

  list.forEach((file) => {
    const fullPath = path.join(dir, file)

    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      results = results.concat(getAllFilesRecursively(fullPath))
    } else {
      results.push(fullPath)
    }
  })

  return results
}
