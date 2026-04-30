import { useEffect, useState } from 'react'

export default function useScrollShrink(threshold = 40) {
  const [shrunk, setShrunk] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShrunk(window.scrollY > threshold)
    }

    onScroll() // set initial state
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return shrunk
}
