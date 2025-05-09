export default function SectionContainer({ isSnippets, children }) {
  const classNames = isSnippets
    ? 'mx-4 sm:mx-6 lg:mx-8 xl:mx-12'
    : 'mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'
  return <div className={classNames}>{children}</div>
}
