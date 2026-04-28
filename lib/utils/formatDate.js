import siteMetadata from '@/data/siteMetadata'

export default function formatDate(date) {
  if (!date) return ''

  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
