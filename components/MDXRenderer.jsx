import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { layouts } from '@/layouts'
import { log } from '@/lib/debug/logger'

export default function MDXRenderer({
  mdxSource,
  components = {},
  layout: Layout,
  layoutProps,
  ...rest
}) {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  log.bundle('HAS TABGROUP IN MDX:', mdxSource.includes('TabGroup'))
  log.bundle('HAS LOWERCASE:', mdxSource.includes('tabgroup'))
  log.bundle('COMPONENTS KEYS:', Object.keys(components))
  log.bundle('HAS TABGROUP:', !!components.TabGroup)

  const WrappedLayout = typeof Layout === 'string' ? layouts[Layout] : Layout

  const content = <Component components={components} />

  if (!WrappedLayout) return content

  return (
    <WrappedLayout {...layoutProps} {...rest}>
      {content}
    </WrappedLayout>
  )
}
