import { useState, useRef, useEffect } from 'react'

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
          className={`absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${
            copied
              ? 'border-green-400 focus:border-green-400 focus:outline-none'
              : 'border-gray-300'
          }`}
          onClick={onCopy}
        >
          {/* icon */}
        </button>
      )}

      <pre
        ref={textInput}
        className={xLang ? `language-${xLang}` : className}
        style={{ whiteSpace: 'pre' }}
      >
        <code className={xLang ? `language-${xLang}` : ''}>{children}</code>
      </pre>
    </div>
  )
}

export default Pre
