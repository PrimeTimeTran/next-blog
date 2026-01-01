import React, { useEffect, useState, useRef } from 'react'
import { listPareto, listBlind75, neetCode150, neetCode250 } from '../lib/problems/lists.js'
import allProblems from '../lib/problems/problems-all.json'
import solutions from '../lib/problems/solutions.js'
import SolutionSnippet from '../lib/dsa/solution.js'

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
  'Stack',
  'Deque',
  'Monotonic Stack',
  'Monotonic Queue',
]

const tags = allProblems.map((problem) => problem.tags).flat()
const uniqueTags = Array.from(new Set(tags))

const orderedTags = problemCategories.filter((cat) => uniqueTags.includes(cat))

const tagCounts = {}
orderedTags.forEach((tag) => {
  tagCounts[tag] = allProblems.filter((problem) => problem.tags.includes(tag)).length
})

export default function DSA() {
  const sidebarRef = useRef(null)
  const [sortBy, setSortBy] = useState('none')
  const [filteredProblems, setFilteredProblems] = useState(allProblems)
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedDifficulties, setSelectedDifficulties] = useState(['e', 'm', 'h'])
  const [selectedList, setSelectedList] = useState('all')
  const [selectedPremium, setSelectedPremium] = useState('all')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [focusedSolution, setFocusedSolution] = useState({ solutions: [] })
  const [randomlySelected, setRandomlySelected] = useState([])

  useEffect(() => {
    let problems = allProblems

    // Filter by list
    if (selectedList === 'pareto') {
      problems = problems.filter((problem) => listPareto.includes(problem.lc.id))
    } else if (selectedList === 'blind75') {
      problems = problems.filter((problem) => listBlind75.includes(problem.lc.id))
    } else if (selectedList === 'neetCode150') {
      problems = problems.filter((problem) => neetCode150.includes(problem.lc.id))
    } else if (selectedList === 'neetCode250') {
      problems = problems.filter((problem) => neetCode250.includes(problem.lc.id))
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

  useEffect(() => {
    if (isSidebarOpen) {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.3/ace.js'
      script.onload = () => {
        if (window.ace) {
          const editor = window.ace.edit('editor')
          editor.setTheme('ace/theme/monokai')
          editor.session.setMode('ace/mode/javascript')
          editor.setValue('// Write your code here\n', -1)
        }
      }
      document.head.appendChild(script)
    }
  }, [isSidebarOpen])

  useEffect(() => {
    function handleClickOutside(e) {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSidebarOpen])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.altKey && e.code === 'KeyO') {
        e.preventDefault()
        handleShuffle()
      }

      if (e.altKey && e.code === 'KeyR') {
        e.preventDefault()
        handleRandom()
      }
      if (e.altKey && e.code === 'KeyP') {
        e.preventDefault()
        handleNext()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [filteredProblems])

  const onTagSelect = (tag) => {
    setSelectedTags((prev) => {
      const already = prev.includes(tag)
      return already ? prev.filter((t) => t !== tag) : [...prev, tag]
    })
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

  const loadSolution = (problem) => {
    const solution = solutions.find((s) => s.id === problem.lc.id)
    if (solution) {
      setIsSidebarOpen(true)
      setFocusedSolution(solution)
    }
  }

  const hasSolution = (problem) => {
    return solutions.find((s) => s.id === problem.lc.id)
  }

  const handleShuffle = () => {
    const shuffled = [...filteredProblems].sort(() => 0.5 - Math.random())
    setFilteredProblems(shuffled)
  }

  const markAttempted = (problem) => {
    setRandomlySelected((prev) => (prev.includes(problem.lc.id) ? prev : [...prev, problem.lc.id]))
  }

  const handleNext = () => {
    setRandomlySelected((prev) => {
      const problem = filteredProblems.find((p) => !prev.includes(p.lc.id))

      if (!problem) return prev

      window.open(problem.url, '_blank', 'noopener,noreferrer')

      return [...prev, problem.lc.id]
    })
  }

  const handleRandom = () => {
    setRandomlySelected((prev) => {
      const unseen = filteredProblems.filter((p) => !prev.includes(p.lc.id))

      if (!unseen.length) return prev

      const problem = unseen[Math.floor(Math.random() * unseen.length)]

      window.open(problem.url, '_blank', 'noopener,noreferrer')

      return [...prev, problem.lc.id]
    })
  }

  return (
    <div className="flex flex-col gap-2 p-4">
      <div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">Categories</span>
            <div>
              <button
                type="button"
                className={
                  'mx-1 my-1 min-w-fit rounded bg-yellow-700 px-2 py-1 text-xs text-white ' +
                  (selectedTags.length === 0 ? ' invisible' : '')
                }
                onClick={() => setSelectedTags([])}
              >
                Clear Tags
              </button>
              <button
                type="button"
                className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
                  selectedPremium === 'all' ? 'bg-green-600' : 'bg-gray-700'
                }`}
                onClick={() => togglePremium('all')}
              >
                All
              </button>
              <button
                type="button"
                className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
                  selectedPremium === 'free' ? 'bg-green-600' : 'bg-gray-700'
                }`}
                onClick={() => togglePremium('free')}
              >
                Free 🆓
              </button>
              <button
                type="button"
                className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
                  selectedPremium === 'premium' ? 'bg-green-600' : 'bg-gray-700'
                }`}
                onClick={() => togglePremium('premium')}
              >
                Premium 💵
              </button>
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap ">
            {orderedTags.map((tag) => (
              <div key={tag} className="space-x-6 space-y-2">
                <button
                  type="button"
                  onClick={() => onTagSelect(tag)}
                  className={
                    'mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ' +
                    (selectedTags.includes(tag) ? 'bg-green-500' : 'bg-gray-700')
                  }
                >
                  <span>
                    {tag.toUpperCase()}
                    <span className="ml-1 text-gray-400">({tagCounts[tag]})</span>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
      <div className="flex flex-row justify-between">
        <h2 className="text-3xl font-bold">Lists</h2>
        <span>
          <button
            type="button"
            className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
              selectedList === 'all' ? 'bg-green-600' : 'bg-gray-700'
            }`}
            onClick={() => setSelectedList('all')}
          >
            All Lists <span className="text-gray-500">({allProblems.length})</span>
          </button>
          <button
            type="button"
            className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
              selectedList === 'pareto' ? 'bg-green-600' : 'bg-gray-700'
            }`}
            onClick={() => setSelectedList('pareto')}
          >
            Pareto <span className="text-gray-500">({listPareto.length})</span>
          </button>
          <button
            type="button"
            className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
              selectedList === 'blind75' ? 'bg-green-600' : 'bg-gray-700'
            }`}
            onClick={() => setSelectedList('blind75')}
          >
            Blind 75 <span className="text-gray-500">({listBlind75.length})</span>
          </button>
          <button
            type="button"
            className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
              selectedList === 'neetCode150' ? 'bg-green-600' : 'bg-gray-700'
            }`}
            onClick={() => setSelectedList('neetCode150')}
          >
            NeetCode 150 <span className="text-gray-500">({neetCode150.length})</span>
          </button>
          <button
            type="button"
            className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
              selectedList === 'neetCode250' ? 'bg-green-600' : 'bg-gray-700'
            }`}
            onClick={() => setSelectedList('neetCode250')}
          >
            NeetCode 250 <span className="text-gray-500">({neetCode250.length})</span>
          </button>
        </span>
      </div>
      <hr className="border-gray-600" />
      <div>
        <div className="flex w-full justify-between">
          <div>
            <button
              onClick={() => toggleDifficulty('e')}
              type="button"
              className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
                selectedDifficulties.includes('e') ? 'bg-green-600' : 'bg-gray-700'
              }`}
            >
              Easy
            </button>

            <button
              onClick={() => toggleDifficulty('m')}
              type="button"
              className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
                selectedDifficulties.includes('m') ? 'bg-yellow-600' : 'bg-gray-700'
              }`}
            >
              Medium
            </button>

            <button
              onClick={() => toggleDifficulty('h')}
              type="button"
              className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
                selectedDifficulties.includes('h') ? 'bg-red-600' : 'bg-gray-700'
              }`}
            >
              Hard
            </button>
          </div>

          <div>
            <button
              type="button"
              className="mx-1 my-1 min-w-fit rounded bg-blue-700 px-2 py-1 text-xs text-white"
              onClick={handleShuffle}
            >
              Shuffle 🎲 (⌥ + O)
            </button>

            <button
              type="button"
              className="mx-1 my-1 min-w-fit rounded bg-blue-700 px-2 py-1 text-xs text-white"
              onClick={handleRandom}
            >
              Next ⏭️ (⌥ + P)
            </button>
            <button
              type="button"
              className="mx-1 my-1 min-w-fit rounded bg-blue-700 px-2 py-1 text-xs text-white"
              onClick={handleRandom}
            >
              Random 👻 (⌥ + R)
            </button>
          </div>
          <div>
            <button
              type="button"
              className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
                sortBy === 'none' ? 'bg-green-600' : 'bg-gray-700'
              }`}
              onClick={() => setSortBy('none')}
            >
              None
            </button>
            <button
              type="button"
              className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
                sortBy === 'difficulty-asc' ? 'bg-green-600' : 'bg-gray-700'
              }`}
              onClick={() => setSortBy('difficulty-asc')}
            >
              ↑
            </button>
            <button
              type="button"
              className={`mx-1 my-1 min-w-fit rounded px-2 py-1 text-xs text-white ${
                sortBy === 'difficulty-desc' ? 'bg-green-600' : 'bg-gray-700'
              }`}
              onClick={() => setSortBy('difficulty-desc')}
            >
              ↓
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
      <div>
        {filteredProblems.map((problem, i) => (
          <div key={problem.lc.id}>
            <div className="flex items-start gap-2">
              <span className="w-12 text-right">{i + 1}. </span>
              <a
                href={problem.url}
                target="_blank"
                className="flex items-start gap-2 text-primary-500"
                rel="noreferrer"
                onClick={() => markAttempted(problem)}
              >
                <span
                  className={
                    randomlySelected.includes(problem.lc.id) && 'line-through decoration-white'
                  }
                >
                  {problem.title}
                </span>
              </a>
              <span className={'text-sm ' + getDifficulty(problem.difficulty)}>
                [{problem.difficulty}]
              </span>
              {hasSolution(problem) && <button onClick={() => loadSolution(problem)}>📝</button>}
            </div>
          </div>
        ))}
      </div>
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-1/3 overflow-y-auto border bg-white py-2 transition-transform duration-300 ease-in-out dark:bg-gray-900 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            className="ml-1 mr-1 h-8 rounded bg-blue-700 p-2 py-1 text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'Close' : 'Open'}
          </button>
        </div>
        {focusedSolution &&
          focusedSolution.solutions.map((solution, idx) => {
            return <SolutionSnippet solution={solution} key={idx} />
          })}
      </div>
    </div>
  )
}
