import { useState } from 'react'

const calloutStyles = {
  note: 'border-blue-400 bg-blue-50 dark:bg-blue-950/30',
  info: 'border-sky-400 bg-sky-50 dark:bg-sky-950/30',
  tip: 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30',
  success: 'border-green-400 bg-green-50 dark:bg-green-950/30',
  warning: 'border-yellow-400 bg-yellow-50 dark:bg-yellow-950/30',
  danger: 'border-red-400 bg-red-50 dark:bg-red-950/30',
  bug: 'border-pink-400 bg-pink-50 dark:bg-pink-950/30',
  quote: 'border-zinc-400 bg-zinc-50 dark:bg-zinc-900',
}

export function Callout({
  type = 'note',
  title,
  collapsible,
  collapsed: initialCollapsed,
  children,
}) {
  const [open, setOpen] = useState(!initialCollapsed)
  const style = calloutStyles[type] ?? 'border-zinc-300 bg-zinc-50 dark:bg-zinc-900'

  return (
    <div className={`my-3 w-full rounded-lg border-l-4 px-4 py-3 ${style}`}>
      {/* header */}
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => collapsible && setOpen((v) => !v)}
      >
        <div className="text-sm font-medium">{title || type}</div>

        {collapsible && <span className="text-xs opacity-60">{open ? '▾' : '▸'}</span>}
      </div>

      {/* body */}
      {open && <div className="mt-2 text-sm leading-relaxed">{children}</div>}
    </div>
  )
}
