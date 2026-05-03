import React, { useState } from 'react'
import { CgDanger } from 'react-icons/cg'
import { AiOutlineBug } from 'react-icons/ai'
import { MdOutlineTipsAndUpdates } from 'react-icons/md'

import { callOutTheme } from '@/lib/theme/theme.cjs'

// 💡 Reference: Icons
// https://react-icons.github.io/react-icons/icons/ai/
import {
  FiCode,
  FiInfo,
  FiXCircle,
  FiBookOpen,
  FiFileText,
  FiHelpCircle,
  FiCheckCircle,
  FiAlertTriangle,
  FiMessageSquare,
} from 'react-icons/fi'

const calloutIcons = {
  info: FiInfo,
  note: FiFileText,
  danger: CgDanger,
  bug: AiOutlineBug,
  success: FiCheckCircle,
  quote: FiMessageSquare,
  warning: FiAlertTriangle,
  tip: MdOutlineTipsAndUpdates,

  error: FiXCircle,
  failure: FiXCircle,
  question: FiHelpCircle,

  example: FiCode,
  abstract: FiBookOpen,
}

export function CallOut({
  type = 'note',
  title,
  collapsible,
  collapsed: initialCollapsed,
  children,
  hasEmbed,
}) {
  const [open, setOpen] = useState(!initialCollapsed)

  const Icon = calloutIcons[type]
  const theme = callOutTheme[type] ?? callOutTheme.note

  return (
    <div className={`my-3 w-full rounded-lg border-l-4 p-1 ${theme.border} ${theme.bg}`}>
      <div
        className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5"
        onClick={() => collapsible && setOpen((v) => !v)}
      >
        <div className="flex items-center gap-2 text-sm font-medium">
          {Icon && <Icon className="h-4 w-4 opacity-80" />}
          <span className={theme.text}>{title || type}</span>
        </div>

        {collapsible && <span className="text-xs opacity-60">{open ? '▾' : '▸'}</span>}
      </div>

      {open && (
        <div className={`mt-2 text-sm leading-relaxed ${hasEmbed ? 'px-8 py-4' : 'p-2'}`}>
          {children}
        </div>
      )}
    </div>
  )
}
