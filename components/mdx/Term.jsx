// components/Term.jsx
import Link from 'next/link'

export function Term({ href, children, short, icon, tone = 'default' }) {
  return (
    <span className={`term term--${tone} group relative`}>
      <Link href={href} className="term__link">
        {icon && <span className="term__icon">{icon}</span>}
        {children}
      </Link>

      {short && <div className="term__preview">{short}</div>}
    </span>
  )
}
