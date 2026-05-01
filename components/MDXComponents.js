import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import Pre from '@/components/Pre'
import Image from '@/components/Image'
import Snippet from '@/components/Snippet'
import CustomLink from '@/components/Link'
import TOCInline from '@/components/TOCInline'
import { TabGroup } from '@/components/TabGroup'

import { Embed } from '@/components/mdx/Embed'
import { Callout } from '@/components/mdx/Callout'

import BTCOrderBook from '@/components/finance/orderbook'
import { BlogNewsletterForm } from '@/components/NewsletterForm'

import ListLayout from '@/layouts/ListLayout'
import KBLayout from '@/layouts/KBLayout'
import BlogLayout from '@/layouts/BlogLayout'

const layouts = {
  ListLayout,
  KBLayout,
  BlogLayout,
}
export const baseComponents = {
  Image,
  Callout,
  Snippet,
  pre: Pre,
  TabGroup,
  TOCInline,
  a: CustomLink,
  BTCOrderBook,
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
  }, [mdxSource])

  if (!mdxSource || !MDXLayout) return null

  return <MDXLayout layout={layout} components={components} registry={registry} {...rest} />
}
