import React, { useEffect, useState } from 'react'
import { listPareto, listBlind75 } from '../lib/problems/lists.js'
import allProblems from '../lib/problems/problems-all.json'

const problemCategories = [
  'String',
  'Array',
  'Binary Search',
  'Matrix',
  'Linked List',
  'Tree',
  'Interval',
  'Graph',
  'Union Find',
  'Priority Queue',
  'Greedy',
  'Backtracking',
  'Dynamic Programming',
  'Dynamic Programming (2D)',
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

// Todo:
// - [x] Sort problems in asc/desc order by difficulty
// - [x] Filter problems by tag, list, difficulty, free/premium

export default function Review() {
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedDifficulties, setSelectedDifficulties] = useState(['e', 'm', 'h'])
  const [selectedList, setSelectedList] = useState('all')
  const [selectedPremium, setSelectedPremium] = useState('all')
  const [sortBy, setSortBy] = useState('none')
  const [filteredProblems, setFilteredProblems] = useState(allProblems)

  useEffect(() => {
    let problems = allProblems

    // Filter by list
    if (selectedList === 'pareto') {
      problems = problems.filter((problem) => listPareto.includes(problem.lc.id))
    } else if (selectedList === 'blind75') {
      problems = problems.filter((problem) => listBlind75.includes(problem.lc.id))
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      problems = problems.filter((problem) =>
        selectedTags.some((tag) =>
          problem.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
        )
      )
    }

    // Filter by difficulties
    if (selectedDifficulties.length > 0) {
      problems = problems.filter((problem) => selectedDifficulties.includes(problem.difficulty))
    }

    // Filter by premium
    if (selectedPremium === 'free') {
      problems = problems.filter((problem) => !problem.lc.premium)
    } else if (selectedPremium === 'premium') {
      problems = problems.filter((problem) => problem.lc.premium)
    }

    // Sort
    if (sortBy === 'difficulty-asc') {
      problems = [...problems].sort((a, b) => {
        const order = { e: 0, m: 1, h: 2 }
        return order[a.difficulty] - order[b.difficulty]
      })
    } else if (sortBy === 'difficulty-desc') {
      problems = [...problems].sort((a, b) => {
        const order = { e: 0, m: 1, h: 2 }
        return order[b.difficulty] - order[a.difficulty]
      })
    }

    setFilteredProblems(problems)
  }, [selectedTags, selectedDifficulties, selectedList, selectedPremium, sortBy])

  const onTagSelect = (tag) => {
    setSelectedTags((prev) => {
      const already = prev.includes(tag)
      return already ? prev.filter((t) => t !== tag) : [...prev, tag]
    })
  }

  const onSelectRandomProblem = () => {
    const randomIndex = Math.floor(Math.random() * filteredProblems.length)
    const problem = filteredProblems[randomIndex]
    window.open(problem.url, '_blank')
  }

  const toggleDifficulty = (difficulty) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty) ? prev.filter((d) => d !== difficulty) : [...prev, difficulty]
    )
  }

  const togglePremium = (premium) => {
    setSelectedPremium(premium)
  }

  const getDifficulty = (difficulty) => {
    switch (difficulty) {
      case 'e':
        return 'text-green-500'
      case 'm':
        return 'text-yellow-500'
      default:
        return 'text-red-500'
    }
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
                'self-end rounded bg-yellow-700 p-6 py-1 text-white ' +
                (selectedTags.length === 0 ? ' invisible' : '')
              }
              onClick={() => setSelectedTags([])}
            >
              Clear Tags
            </button>
          </div>
          <div className="flex w-full flex-row flex-wrap ">
            {orderedTags.map((tag) => (
              <div key={tag} className="space-x-6 space-y-2">
                <button
                  type="button"
                  onClick={() => onTagSelect(tag)}
                  className={
                    'mx-1 my-2  min-w-fit rounded p-6 py-1 text-sm text-white ' +
                    (selectedTags.includes(tag) ? 'bg-green-500' : 'bg-gray-700')
                  }
                >
                  <span className="text-sm">
                    {tag.toUpperCase()}
                    <span className="text-gray-500">({tagCounts[tag]})</span>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-1" />
      <div>
        <h2 className="text-3xl font-bold">Lists</h2>
        <button
          type="button"
          className={`ml-1 mr-1 h-8 w-48 rounded py-1 text-white ${
            selectedList === 'all' ? 'bg-green-600' : 'bg-gray-700'
          }`}
          onClick={() => setSelectedList('all')}
        >
          All Lists <span className="text-gray-500">({allProblems.length})</span>
        </button>
        <button
          type="button"
          className={`ml-1 mr-1 h-8 w-48 rounded py-1 text-white ${
            selectedList === 'pareto' ? 'bg-green-600' : 'bg-gray-700'
          }`}
          onClick={() => setSelectedList('pareto')}
        >
          Pareto Problems <span className="text-gray-500">({listPareto.length})</span>
        </button>
        <button
          type="button"
          className={`ml-1 mr-1 h-8 w-48 rounded py-1 text-white ${
            selectedList === 'blind75' ? 'bg-green-600' : 'bg-gray-700'
          }`}
          onClick={() => setSelectedList('blind75')}
        >
          Blind 75 <span className="text-gray-500">({listBlind75.length})</span>
        </button>
      </div>
      <hr className="my-1" />
      <div>
        <h2 className="text-3xl font-bold">Premium</h2>
        <button
          type="button"
          className={`ml-1 mr-1 h-8 rounded p-2 py-1 text-white ${
            selectedPremium === 'all' ? 'bg-green-600' : 'bg-gray-700'
          }`}
          onClick={() => togglePremium('all')}
        >
          All
        </button>
        <button
          type="button"
          className={`ml-1 mr-1 h-8 rounded p-2 py-1 text-white ${
            selectedPremium === 'free' ? 'bg-green-600' : 'bg-gray-700'
          }`}
          onClick={() => togglePremium('free')}
        >
          Free
        </button>
        <button
          type="button"
          className={`ml-1 mr-1 h-8 rounded p-2 py-1 text-white ${
            selectedPremium === 'premium' ? 'bg-green-600' : 'bg-gray-700'
          }`}
          onClick={() => togglePremium('premium')}
        >
          Premium
        </button>
      </div>
      <hr className="my-1" />
      <div>
        <h2 className="text-3xl font-bold">Sort</h2>
        <button
          type="button"
          className={`ml-1 mr-1 h-8 rounded p-2 py-1 text-white ${
            sortBy === 'none' ? 'bg-green-600' : 'bg-gray-700'
          }`}
          onClick={() => setSortBy('none')}
        >
          None
        </button>
        <button
          type="button"
          className={`ml-1 mr-1 h-8 rounded p-2 py-1 text-white ${
            sortBy === 'difficulty-asc' ? 'bg-green-600' : 'bg-gray-700'
          }`}
          onClick={() => setSortBy('difficulty-asc')}
        >
          Difficulty ↑
        </button>
        <button
          type="button"
          className={`ml-1 mr-1 h-8 rounded p-2 py-1 text-white ${
            sortBy === 'difficulty-desc' ? 'bg-green-600' : 'bg-gray-700'
          }`}
          onClick={() => setSortBy('difficulty-desc')}
        >
          Difficulty ↓
        </button>
      </div>

      <div>
        <div className="flex flex-row justify-between">
          <span className="text-3xl font-bold">Problems</span>
          <div>
            <span>
              <button
                onClick={() => toggleDifficulty('e')}
                type="button"
                className={`ml-1 mr-1 h-8 rounded p-2 py-1 text-white ${
                  selectedDifficulties.includes('e') ? 'bg-green-600' : 'bg-gray-700'
                }`}
              >
                Easy
              </button>

              <button
                onClick={() => toggleDifficulty('m')}
                type="button"
                className={`ml-1 mr-1 h-8 rounded p-2 py-1 text-white ${
                  selectedDifficulties.includes('m') ? 'bg-green-600' : 'bg-gray-700'
                }`}
              >
                Medium
              </button>

              <button
                onClick={() => toggleDifficulty('h')}
                type="button"
                className={`ml-1 mr-1 h-8 rounded p-2 py-1 text-white ${
                  selectedDifficulties.includes('h') ? 'bg-green-600' : 'bg-gray-700'
                }`}
              >
                Hard
              </button>

              <button
                type="button"
                className="ml-1 mr-1 h-8 w-48 rounded bg-yellow-700 py-1 text-white"
                onClick={() => {
                  const shuffled = [...filteredProblems].sort(() => 0.5 - Math.random())
                  setFilteredProblems(shuffled)
                }}
              >
                Shuffle 🎲
              </button>
              <button
                type="button"
                className="ml-1 mr-1 h-8 w-32 rounded bg-yellow-700 py-1 text-white"
                onClick={onSelectRandomProblem}
              >
                Random 👻
              </button>
            </span>
          </div>
        </div>
        {filteredProblems.map((problem, i) => (
          <div key={problem.lc.id}>
            <div className="flex items-start gap-2">
              <span className="w-12 text-right">{i + 1}. </span>
              <a
                href={problem.url}
                target="_blank"
                className="flex items-start gap-2 text-primary-500"
                rel="noreferrer"
              >
                <span> {problem.title}</span>
              </a>
              <span className={'text-sm text-gray-400 ' + getDifficulty(problem.difficulty)}>
                [{problem.difficulty}]
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
