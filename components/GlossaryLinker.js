import React from 'react'
import { glossary } from './GlossaryData'

export default function GlossaryLinker({ children }) {
  if (typeof children !== 'string') return <>{children}</>

  let text = children

  glossary.forEach(({ term }) => {
    if (!term) return
    const regex = new RegExp(`\\b${term}\\b`, 'g')
    const url = `/glossary#${term.toLowerCase().replace(/\s+/g, '-')}`
    text = text.replace(regex, `<a href="${url}">${term}</a>`)
  })

  return <span dangerouslySetInnerHTML={{ __html: text }} />
}
