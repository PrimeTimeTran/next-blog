/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import BTCOrderBook from './finance/orderbook'
import Snippet from './Snippet'
import SnippetTabs from './SnippetTabs'
import GlossaryLinker from './GlossaryLinker'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  Snippet,
  SnippetTabs,
  BTCOrderBook,
  pre: Pre,
  GlossaryLinker: GlossaryLinker,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
