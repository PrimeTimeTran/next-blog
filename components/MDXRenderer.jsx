import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { layouts } from '@/layouts'

export default function MDXRenderer({
  mdxSource,
  components = {},
  layout: Layout,
  layoutProps,
  ...rest
}) {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  console.log('HAS TABGROUP IN MDX:', mdxSource.includes('TabGroup'))
  console.log('HAS LOWERCASE:', mdxSource.includes('tabgroup'))
  console.log('COMPONENTS KEYS:', Object.keys(components))
  console.log('HAS TABGROUP:', !!components.TabGroup)

  const WrappedLayout = typeof Layout === 'string' ? layouts[Layout] : Layout

  const content = <Component components={components} />

  if (!WrappedLayout) return content

  return (
    <WrappedLayout {...layoutProps} {...rest}>
      {content}
    </WrappedLayout>
  )
}
