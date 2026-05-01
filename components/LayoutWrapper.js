import Link from './Link'
import Footer from './Footer'
import Logo from '@/data/logo.svg'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { route, useRouter } from 'next/router'
import SectionContainer from './SectionContainer'

import siteMetadata from '@/data/site-metadata'
import headerNavLinks from '@/data/nav-links'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  const currentRoute = router.asPath

  const isHome = currentRoute === '/'

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex shrink-0 items-center justify-between p-4 sm:px-6">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center">
            <Logo />
            <div className="ml-3 hidden text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          </div>
        </Link>
        <Link href="/kb/tool/obsidian/preview/theme1" aria-label={siteMetadata.headerTitle}>
          <div>Knowledge Base</div>
        </Link>
        <div className="flex items-center">
          <div className="hidden sm:flex">
            <div className="hidden sm:flex">
              {headerNavLinks.map((link) => {
                const isActive = currentRoute === link.href
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`p-4 font-medium ${
                      isActive
                        ? 'text-blue-800 dark:text-blue-400'
                        : 'text-gray-700 hover:text-blue-500 dark:text-gray-300'
                    }`}
                  >
                    {link.title}
                  </Link>
                )
              })}
            </div>
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
        <SectionContainer isSnippets={isHome}>{children}</SectionContainer>
      </main>

      <Footer />
    </div>
  )
}

export default LayoutWrapper
