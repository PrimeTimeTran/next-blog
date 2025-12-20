import React, { useEffect, useState } from 'react'
import problems from '../lib/problems/problems.json'

import problemsDP from '../lib/problems/dp.json'
import problemsGraph from '../lib/problems/graph.json'
import problemsBackTracking from '../lib/problems/backtracking.json'
import problemsBinarySearch from '../lib/problems/binary-search.json'
import problemsBit from '../lib/problems/bit.json'

import paretoProblems from '../leetcode/pareto/pareto-problems.json'

const allProblems = [
  ...problems,
  ...problemsDP,
  ...problemsBackTracking,
  ...problemsGraph,
  ...problemsBinarySearch,
  ...problemsBit,
]
const tags = allProblems.map((problem) => problem.tags).flat()
const uniqueTags = Array.from(new Set(tags))

export default function Review() {
  const [selectedTags, setSelectedTags] = useState([])
  const [randomProblem, setRandomProblem] = useState(null)
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
    setRandomProblem(problem)
  }
  return (
    <div className="flex flex-col gap-6 p-4">
      <h1>Leetcode Problems</h1>
      <div>
        <div className="flex flex-row">
          <h2 className="text-3xl font-bold">Tags</h2>
          <div className="flex w-full flex-row flex-wrap ">
            {uniqueTags.map((tag) => (
              <div key={tag} className="space-x-6 space-y-2">
                <button
                  type="button"
                  className={
                    'mx-6 my-2  min-w-fit rounded p-6 py-1 ' +
                    (selectedTags.includes(tag) ? 'bg-blue-400' : 'bg-gray-700')
                  }
                  onClick={() => onTagSelect(tag)}
                >
                  {tag.toUpperCase()}
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            className={
              'm-6 rounded bg-green-700 p-6 py-1' +
              (selectedTags.length === 1 && selectedTags[0] === 'all' ? ' invisible' : '')
            }
            onClick={() => {
              setSelectedTags([])
              setFilteredProblems(allProblems)
            }}
          >
            Reset to All
          </button>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Random Selection</h2>
          <button
            type="button"
            className="ml-1 mr-1 h-8 w-32 rounded bg-green-900 py-1"
            onClick={onSelectRandomProblem}
          >
            Select Random
          </button>

          <div className={'min-h-[64px] ' + (randomProblem ? 'visible' : 'invisible')}>
            {randomProblem && (
              <a
                className="text-primary-500"
                href={randomProblem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {randomProblem.title}
              </a>
            )}
          </div>

          <button
            type="button"
            className="ml-1 mr-1 h-8 w-48 rounded bg-green-900 py-1"
            onClick={() => {
              const shuffled = [...filteredProblems].sort(() => 0.5 - Math.random())
              setFilteredProblems(shuffled)
            }}
          >
            Shuffle Problems
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold">Problem Lists(2)</h2>
        <button
          type="button"
          className="ml-1 mr-1 h-8 w-48 rounded bg-yellow-400 py-1"
          onClick={() => {
            setFilteredProblems(paretoProblems)
          }}
        >
          Pareto Problems
        </button>
        <button
          type="button"
          className="ml-1 mr-1 h-8 w-48 rounded bg-yellow-400 py-1"
          onClick={() => {
            setFilteredProblems(allProblems)
          }}
        >
          Loi Problems
        </button>
      </div>

      <div>
        <h2 className="text-3xl font-bold">Problems</h2>
        {filteredProblems.map((problem, i) => (
          <div key={problem.lc.id}>
            <a
              href={problem.url}
              target="_blank"
              className="flex items-start gap-2 text-primary-500"
              rel="noreferrer"
            >
              <span className="w-6 text-right">{i + 1}.</span>
              <span>{problem.title}</span>
              <span className="text-sm text-gray-400">[{problem.difficulty}]</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
