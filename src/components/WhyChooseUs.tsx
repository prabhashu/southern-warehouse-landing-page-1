'use client'

import { Tag, Users, MapPin, Zap } from 'lucide-react'

const features = [
  {
    number: '01',
    icon: <Tag size={20} />,
    title: 'Warehouse Pricing, Showroom Experience',
    desc: 'Get premium flooring, tile & remodeling materials without retail markups. We bring the warehouse savings directly to you.',
  },
  {
    number: '02',
    icon: <Users size={20} />,
    title: 'Built for Contractors & Homeowners',
    desc: 'Whether you\'re managing multiple projects or remodeling your home, we have the inventory, support, and pricing you need.',
  },
  {
    number: '03',
    icon: <MapPin size={20} />,
    title: 'Local Tampa Experts',
    desc: 'We understand the styles, trends, and needs of homes in Carrollwood, North Tampa, and surrounding areas across Tampa Bay.',
  },
  {
    number: '04',
    icon: <Zap size={20} />,
    title: 'In-Stock & Ready to Go',
    desc: 'No long delays or back-orders. Get what you need when you need it with our large in-stock inventory ready for pickup.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="why-section" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header" data-animate>
          <div className="section-eyebrow">
            <span className="section-tag">Why Choose Us</span>
          </div>
          <h2 id="why-heading" className="display-lg section-title">
            Why Tampa Chooses<br />
            <span style={{ color: 'var(--forest-green)' }}>Southern Design Warehouse</span>
          </h2>
          <p className="body-lg section-description">
            When it comes to remodeling materials in Tampa, you need more than just products.
            You need reliability, quality, and a partner who understands your project.
            We combine showroom experience with warehouse pricing.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, i) => (
            <div
              key={i}
              className="why-card"
              id={`why-card-${i + 1}`}
              data-animate
              data-delay={`${i * 100}`}
            >
              <div className="why-card-number">{feature.number}</div>
              <div className="why-card-icon">{feature.icon}</div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
