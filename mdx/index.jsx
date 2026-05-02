import { layouts } from '@/layouts'

import CustomLink from '@/components/Link'
import Image from '@/components/mdx/Image'
import { Embed } from '@/components/mdx/Embed'
import Snippet from '@/components/mdx/Snippet'
import { CallOut } from '@/components/mdx/CallOut'
import TOCInline from '@/components/mdx/TOCInline'
import { Pre, TabGroup } from '@/components/mdx/Code'

import OrderBook from '@/components/mdx/OrderBook'
import { BlogNewsletterForm } from '@/components/NewsletterForm'

import { H1, H2, H3, H4, H5, H6 } from '@/components/HeadingComponents'

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

    wrapper: ({ layout, ...rest }) => {
      const Layout = layouts[layout] || layouts.KBLayout
      return <Layout {...rest} embedded={embedded} />
    },
  }
}
