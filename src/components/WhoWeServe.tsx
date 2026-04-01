'use client'

import { Home, HardHat, Building2, Palette, ArrowRight, CheckCircle2 } from 'lucide-react'

const serveCards = [
  {
    id: 'homeowners',
    type: 'Homeowners',
    title: 'Transform Your Tampa Home',
    desc: 'Planning a kitchen or bathroom remodel? Visit our showroom and explore high-quality flooring, tile, and materials in person. Our team helps you choose the right products for your style and budget.',
    points: ['Residential Remodels', 'Kitchen & Bath', 'Budget-Friendly Options', 'Design Guidance'],
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
    alt: 'Modern kitchen remodel with premium materials from Southern Design Warehouse Tampa',
  },
  {
    id: 'contractors',
    type: 'Contractors & Builders',
    title: 'Your Reliable Material Partner',
    desc: 'We supply contractors, builders, and interior designers across Tampa with reliable inventory, competitive pricing, and fast turnaround times. Keep your projects moving without costly delays.',
    points: ['New Construction', 'Commercial Projects', 'Bulk Pricing', 'Fast Turnaround'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    alt: 'Contractor supply and building materials available at Southern Design Warehouse Tampa',
  },
]

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="serve-section" aria-labelledby="serve-heading">
      <div className="container">
        <div className="section-header centered" data-animate>
          <div style={{ marginBottom: '0.75rem' }}>
            <span className="section-tag">Who We Serve</span>
          </div>
          <h2 id="serve-heading" className="display-lg section-title">
            Serving Tampa Homeowners<br />
            <span style={{ color: 'var(--forest-green)' }}>& Industry Professionals</span>
          </h2>
          <p className="body-lg section-description">
            From single-room renovations to large commercial builds — we have the
            materials, inventory, and expertise to support every type of project.
          </p>
        </div>

        <div className="serve-grid">
          {serveCards.map((card, i) => (
            <div
              key={card.id}
              id={`serve-${card.id}`}
              className="serve-card"
              data-animate
              data-delay={`${i * 150}`}
            >
              {/* Background Image */}
              <div className="serve-card-bg">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                />
              </div>
              <div className="serve-card-overlay" />

              {/* Content */}
              <div className="serve-card-content">
                <div className="serve-card-type">{card.type}</div>
                <h3 className="serve-card-title">{card.title}</h3>
                <p className="serve-card-desc">{card.desc}</p>
                <div className="serve-card-points">
                  {card.points.map((point, j) => (
                    <div key={j} className="serve-point">
                      <CheckCircle2 size={12} style={{ color: '#86efac' }} />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          data-animate
          style={{
            marginTop: '3rem',
            padding: '1.75rem 2rem',
            background: 'rgba(45,82,51,0.05)',
            border: '1px solid rgba(45,82,51,0.15)',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {[
              { icon: <Home size={18} />, label: 'Residential Remodels' },
              { icon: <Building2 size={18} />, label: 'New Construction' },
              { icon: <HardHat size={18} />, label: 'Commercial Projects' },
              { icon: <Palette size={18} />, label: 'Interior Designers' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--forest-green)', fontSize: '0.9375rem', fontWeight: 500 }}>
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
          <a
            href="#contact"
            id="serve-cta"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn btn-green"
            style={{ flexShrink: 0 }}
          >
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
