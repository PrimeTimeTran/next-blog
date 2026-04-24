import { useRouter } from 'next/router'

export default function SectionContainer({ isSnippets = false, children }) {
  const router = useRouter()
  const path = router.asPath.split(/[?#]/)[0]
  const isBlog = path === '/blog' || (path.startsWith('/blog/') && !path.startsWith('/blog/page/'))
  const isKB = path === '/kb' || (path.startsWith('/kb/') && !path.startsWith('/kb/page/'))
  return (
    <div
      className={
        isKB
          ? 'h-screen w-full px-2'
          : isBlog || isSnippets
          ? 'w-full px-4 sm:px-6 lg:px-8'
          : 'mx-auto max-w-3xl xl:max-w-5xl'
      }
    >
      {children}
    </div>
  )
}
