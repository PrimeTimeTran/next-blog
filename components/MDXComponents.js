import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import Pre from '@/components/mdx/Pre'
import Image from '@/components/mdx/Image'
import Snippet from '@/components/mdx/Snippet'
import CustomLink from '@/components/Link'
import TOCInline from '@/components/mdx/TOCInline'
import { TabGroup } from '@/components/mdx/TabGroup'

import { Embed } from '@/components/mdx/Embed'
import { Callout } from '@/components/mdx/Callout'

import OrderBook from '@/components/mdx/OrderBook'
import { BlogNewsletterForm } from '@/components/NewsletterForm'

import ListLayout from '@/layouts/ListLayout'
import KBLayout from '@/layouts/KBLayout'
import BlogLayout from '@/layouts/BlogLayout'
import AuthorLayout from '@/layouts/AuthorLayout'
import { H1, H2, H3, H4, H5, H6 } from '@/lib/theme'

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
  Callout,
  Snippet,
  pre: Pre,
  TabGroup,
  TOCInline,
  a: CustomLink,
  OrderBook,
  BlogNewsletterForm,
}

export function createMDXComponents(registry = {}, embedded) {
  return {
    ...baseComponents,
    Embed: (props) => <Embed {...props} registry={registry} depth={props.depth ?? 0} />,
    wrapper: ({ layout, ...rest }) => {
      const Layout = layouts[layout] || KBLayout
      return <Layout {...rest} embedded={embedded} />
    },
  }
}

export const MDXLayoutRenderer = ({ layout, mdxSource, registry, ...rest }) => {
  const components = useMemo(() => createMDXComponents(registry), [registry])

  const MDXLayout = useMemo(() => {
    if (!mdxSource) return null

    return getMDXComponent(mdxSource)
  }, [mdxSource, components])

  if (!mdxSource || !MDXLayout) return null

  return <MDXLayout layout={layout} components={components} registry={registry} {...rest} />
}
