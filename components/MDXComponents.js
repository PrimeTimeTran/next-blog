/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import Pre from './Pre'
import Image from './Image'
import Snippet from './Snippet'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import BTCOrderBook from './finance/orderbook'
import { TabGroup } from './TabGroup'
import { BlogNewsletterForm } from './NewsletterForm'
import { CodeBlock } from './code/CodeBlock'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  Snippet,
  BTCOrderBook,
  pre: Pre,
  TabGroup: TabGroup,
  CodeBlock: CodeBlock,
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
