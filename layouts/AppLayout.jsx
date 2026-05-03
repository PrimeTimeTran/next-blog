import { useRouter } from 'next/router'

import Logo from '@/data/logo.svg'
import { Link } from '@/components/mdx'
import headerNavLinks from '@/data/nav-links'
import siteMetadata from '@/data/site-metadata'

import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch'
import SectionContainer from '@/components/SectionContainer'

const AppLayout = ({ children }) => {
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
        <div className="flex items-center">
          <div className="hidden sm:flex">
            <div className="hidden sm:flex">
              {(headerNavLinks ?? []).map((link) => {
                const isActive = currentRoute === link.href
                const Icon = link.icon

                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`p-4 font-medium transition-colors flex items-center gap-2 ${
                      isActive
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-meta hover:text-primary-500 dark:text-meta hover:dark:text-primary-400'
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
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

export default AppLayout
