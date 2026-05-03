'use client'
import { usePathname } from 'next/navigation'

export default function SectionContainer({ isSnippets = false, children }) {
  const pathname = usePathname()
  const path = pathname.split(/[?#]/)[0]
  const isBlog = path === '/blog' || (path.startsWith('/blog/') && !path.startsWith('/blog/page/'))
  const isKB = path === '/kb' || (path.startsWith('/kb/') && !path.startsWith('/kb/page/'))
  return (
    <div
      className={
        isKB
          ? 'flex h-full w-full flex-col px-2'
          : isBlog || isSnippets
            ? 'w-full px-4 sm:px-6 lg:px-8 '
            : 'mx-auto max-w-3xl xl:max-w-5xl'
      }
    >
      {children}
    </div>
  )
}
