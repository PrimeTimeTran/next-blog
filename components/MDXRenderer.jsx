import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { layouts } from '@/layouts'

export default function MDXRenderer({
  mdxSource,
  components,
  layout: Layout,
  layoutProps,
  ...rest
}) {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  const WrappedLayout = typeof Layout === 'string' ? layouts[Layout] : Layout

  const content = (
    <Component components={components} /> // 👈 CRITICAL FIX
  )

  if (!WrappedLayout) return content

  return (
    <WrappedLayout {...layoutProps} {...rest}>
      {content}
    </WrappedLayout>
  )
}
