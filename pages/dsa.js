import React, { useEffect, useState } from 'react'
import { listPareto, listBlind75 } from '../lib/problems/lists.js'
import allProblems from '../lib/problems/problems-all.json'

const problemCategories = [
  'Array',
  'Binary Search',
  'Linked List',
  'Tree',
  'Interval',
  'Graph',
  'Union Find',
  'Priority Queue',
  'Greedy',
  'Backtracking',
  'Dynamic Programming',
  'Dynamic Programming(2D)',
  'Bit Manipulation',
  'Prefix Sum',
  'Digit DP',
]

const tags = allProblems.map((problem) => problem.tags).flat()
const uniqueTags = Array.from(new Set(tags))

const orderedTags = problemCategories.filter((cat) => uniqueTags.includes(cat))

const tagCounts = {}
orderedTags.forEach((tag) => {
  tagCounts[tag] = allProblems.filter((problem) => problem.tags.includes(tag)).length
})

export default function Review() {
  const [selectedTags, setSelectedTags] = useState([])
  const [filteredProblems, setFilteredProblems] = useState(allProblems)

  useEffect(() => {
    setFilteredProblems(
      allProblems.filter((problem) =>
        selectedTags.length === 0
          ? true
          : selectedTags.some((tag) =>
              problem.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
            )
      )
    )
  }, [selectedTags])

  const onTagSelect = (tag) => {
    setSelectedTags((prev) => {
      const already = prev.includes(tag)
      const newSelected = already ? prev.filter((t) => t !== tag) : [...prev, tag]
      const nextFiltered =
        newSelected.length === 0
          ? allProblems
          : allProblems.filter((problem) =>
              newSelected
                .filter((t) => t !== 'all')
                .some((sel) =>
                  problem.tags.map((pt) => pt.toLowerCase()).includes(sel.toLowerCase())
                )
            )

      setFilteredProblems(nextFiltered)
      return newSelected
    })
  }
  const onSelectRandomProblem = () => {
    const randomIndex = Math.floor(Math.random() * filteredProblems.length)
    const problem = filteredProblems[randomIndex]
    window.open(problem.url, '_blank')
  }
  return (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="text-3xl font-bold">Filter By Tag</span>
            <button
              type="button"
              className={
                'self-end rounded bg-green-700 p-6 py-1' +
                (selectedTags.length === 1 && selectedTags[0] === 'all' ? ' invisible' : '')
              }
              onClick={() => {
                setSelectedTags([])
                setFilteredProblems(allProblems)
              }}
            >
              All({allProblems.length})
            </button>
          </div>
          <div className="flex w-full flex-row flex-wrap ">
            {orderedTags.map((tag) => (
              <div key={tag} className="space-x-6 space-y-2">
                <button
                  type="button"
                  onClick={() => onTagSelect(tag)}
                  className={
                    'mx-1 my-2  min-w-fit rounded p-6 py-1 text-sm ' +
                    (selectedTags.includes(tag) ? 'bg-blue-400' : 'bg-gray-700')
                  }
                >
                  <span className="text-sm">
                    {tag.toUpperCase()}({tagCounts[tag]})
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-1" />
      <div>
        <h2 className="text-3xl font-bold">Lists(2)</h2>
        <button
          type="button"
          className="ml-1 mr-1 h-8 w-48 rounded bg-gray-700 py-1"
          onClick={() => {
            setFilteredProblems(allProblems.filter((problem) => listPareto.includes(problem.lc.id)))
          }}
        >
          Pareto Problems ({listPareto.length})
        </button>
        <button
          type="button"
          className="ml-1 mr-1 h-8 w-48 rounded bg-gray-700 py-1"
          onClick={() => {
            setFilteredProblems(
              allProblems.filter((problem) => listBlind75.includes(problem.lc.id))
            )
          }}
        >
          Blind 75 ({listBlind75.length})
        </button>
      </div>

      <div>
        <div className="flex flex-row justify-between">
          <span className="text-3xl font-bold">Problems({allProblems.length})</span>
          <span>
            <button
              type="button"
              className="ml-1 mr-1 h-8 w-48 rounded bg-green-900 py-1"
              onClick={() => {
                const shuffled = [...filteredProblems].sort(() => 0.5 - Math.random())
                setFilteredProblems(shuffled)
              }}
            >
              Shuffle 🔀
            </button>
            <button
              type="button"
              className="ml-1 mr-1 h-8 w-32 rounded bg-green-900 py-1"
              onClick={onSelectRandomProblem}
            >
              Random 🎲
            </button>
          </span>
        </div>
        {filteredProblems.map((problem, i) => (
          <div key={problem.lc.id}>
            <a
              href={problem.url}
              target="_blank"
              className="flex items-start gap-2 text-primary-500"
              rel="noreferrer"
            >
              <span className="w-6 text-right">{i + 1}. </span>
              <span> {problem.title}</span>
              <span className="text-sm text-gray-400">[{problem.difficulty}]</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
