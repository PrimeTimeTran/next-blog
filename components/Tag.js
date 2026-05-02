import Link from 'next/link'
import kebabCase from '@/lib/utils/kebab-case'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-800 dark:hover:text-primary-300"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
