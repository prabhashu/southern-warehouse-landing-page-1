'use client'

interface StatsBarProps {}

const stats = [
  { value: '500+', label: 'Products In-Stock' },
  { value: '15+', label: 'Years Serving Tampa' },
  { value: '2,000+', label: 'Projects Completed' },
  { value: '100%', label: 'Quality Guarantee' },
]

export default function StatsBar({}: StatsBarProps) {
  return (
    <div className="stats-bar" aria-label="Company statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item" data-animate data-delay={`${i * 100}`}>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
