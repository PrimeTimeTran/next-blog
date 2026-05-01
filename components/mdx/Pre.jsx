import { useState, useRef } from 'react'

const Pre = ({ children, className, lang }) => {
  const textInput = useRef(null)
  const onEnter = () => setHovered(true)
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)

  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }

  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(textInput.current.textContent)
    setTimeout(() => setCopied(false), 2000)
  }

  const langFromClass = className?.match(/language-(\w+)/)?.[1]
  const xLang = lang || langFromClass

  return (
    <div onMouseEnter={onEnter} onMouseLeave={onExit} className="relative">
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          className={`absolute right-2 top-2 h-8 w-8 rounded border-2 bg-white
            p-1 text-gray-700 shadow-sm
            dark:bg-gray-800 dark:text-gray-200
            ${
              copied
                ? 'border-green-400 dark:border-green-400'
                : 'border-gray-300 dark:border-gray-600'
            }
          `}
          onClick={onCopy}
        >
          {/* icon */}
        </button>
      )}

      <pre
        ref={textInput}
        className={`
          ${xLang ? `language-${xLang}` : ''}
          
        `}
      >
        <code className={xLang ? `language-${xLang}` : ''}>{children}</code>
      </pre>
    </div>
  )
}

export default Pre
