import { useState } from 'react'

export function TabGroup({ children }) {
  const tabs = children.filter(Boolean)
  const [active, setActive] = useState(0)

  return (
    <div className="tab-group">
      <div className="tab flex gap-2">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`tablinks ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      <div className="tab-panels">
        {tabs.map((tab, i) => (
          <div key={i} className="tabcontent" style={{ display: i === active ? 'block' : 'none' }}>
            {tab.props.children}
          </div>
        ))}
      </div>
    </div>
  )
}
