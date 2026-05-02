import CustomLink from '@/components/Link'
import Image from '@/components/mdx/Image'
import { Embed } from '@/components/mdx/Embed'
import Snippet from '@/components/mdx/Snippet'
import { CallOut } from '@/components/mdx/CallOut'
import TOCInline from '@/components/mdx/TOCInline'
import { Pre, TabGroup } from '@/components/mdx/Code'

import OrderBook from '@/components/mdx/OrderBook'
import { BlogNewsletterForm } from '@/components/NewsletterForm'

import KBLayout from '@/layouts/KBLayout'
import ListLayout from '@/layouts/ListLayout'
import BlogLayout from '@/layouts/BlogLayout'
import AuthorLayout from '@/layouts/AuthorLayout'

import { H1, H2, H3, H4, H5, H6 } from '@/lib/theme/theme.cjs'

const layouts = {
  KBLayout,
  ListLayout,
  BlogLayout,
  AuthorLayout,
}
export const baseComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  Image,
  Embed,
  CallOut,
  Snippet,
  pre: Pre,
  TOCInline,
  a: CustomLink,
  OrderBook,
  tabGroup: TabGroup,
  TabGroup: TabGroup,
  BlogNewsletterForm,
}

export function createMDXComponents(registry = {}, embedded) {
  return {
    ...baseComponents,
    // Embed: (props) => <Embed {...props} registry={registry} depth={props.depth ?? 0} />,
    wrapper: ({ layout, ...rest }) => {
      const Layout = layouts[layout] || KBLayout
      return <Layout {...rest} embedded={embedded} />
    },
  }
}

// export const MDXLayoutRenderer = ({ layout, mdxSource, registry, ...rest }) => {
//   const components = useMemo(() => createMDXComponents(registry), [registry])

//   const MDXContent = useMemo(() => {
//     if (!mdxSource) return null
//     return getMDXComponent(mdxSource)
//   }, [mdxSource])

//   if (!mdxSource || !MDXContent) return null

//   return (
//     <MDXContent
//       components={components} // 👈 THIS is the missing link
//       {...rest}
//     />
//   )
// }
