import Link from './Link'
import Footer from './Footer'
import Logo from '@/data/logo.svg'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { route, useRouter } from 'next/router'
import SectionContainer from './SectionContainer'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  const currentRoute = router.asPath

  const isHome = currentRoute === '/'

  return (
    <div className="flex min-h-screen flex-col">
      {/* HEADER */}
      <header className="flex shrink-0 items-center justify-between px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center">
            <Logo />
            <div className="ml-3 hidden text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-4">
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
                        ? 'text-green-600 dark:text-green-400'
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

      <main className="mb-auto">
        <SectionContainer isSnippets={isHome}>{children}</SectionContainer>
      </main>

      <footer className="shrink-0">
        <Footer />
      </footer>
    </div>
  )
}

export default LayoutWrapper
