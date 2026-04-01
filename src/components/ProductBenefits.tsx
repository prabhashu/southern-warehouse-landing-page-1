'use client'

import { Shield, Palette, Wrench, LayoutGrid, Home, Award } from 'lucide-react'

const benefits = [
  {
    icon: <Shield size={18} />,
    title: 'Durable & Long-Lasting Materials',
    desc: 'Designed to withstand daily use and maintain their look for years to come.',
  },
  {
    icon: <Palette size={18} />,
    title: 'Modern & Timeless Designs',
    desc: 'Options that fit both contemporary and classic Tampa homes beautifully.',
  },
  {
    icon: <Wrench size={18} />,
    title: 'Easy Installation Options',
    desc: 'Perfect for contractors and DIY homeowners alike. Our team advises on best fit.',
  },
  {
    icon: <LayoutGrid size={18} />,
    title: 'Wide Selection Available',
    desc: 'Different styles, colors, and finishes — all in one convenient Tampa location.',
  },
  {
    icon: <Home size={18} />,
    title: 'Kitchen & Bathroom Specialists',
    desc: 'Upgrade your space with materials that increase property value significantly.',
  },
]

export default function ProductBenefits() {
  return (
    <section id="products" className="benefits-section" aria-labelledby="benefits-heading">
      <div className="container">
        <div className="benefits-grid">
          {/* Left: Content */}
          <div data-animate-left>
            <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="section-tag">Product Benefits</span>
            </div>
            <h2 id="benefits-heading" className="display-lg section-title" style={{ marginBottom: '1rem' }}>
              High-Quality Materials Built for
              <span style={{ color: 'var(--forest-green)' }}> Performance & Style</span>
            </h2>
            <p className="body-lg" style={{ marginBottom: '2rem', color: 'var(--slate-gray)' }}>
              Our materials are carefully selected to deliver durability, aesthetics,
              and long-term value for your home or project. Serving Tampa homeowners
              and contractors with the best in remodeling materials.
            </p>

            <div className="benefits-list">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="benefit-item"
                  id={`benefit-${i + 1}`}
                  data-animate
                  data-delay={`${i * 80}`}
                >
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-desc">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="benefits-visual" data-animate-right data-delay="200">
            <div className="benefits-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Premium kitchen remodeling materials and tile display at Southern Design Warehouse Tampa"
                loading="lazy"
              />
            </div>

            {/* Floating Badge */}
            <div className="benefits-badge-float floating" style={{ animationDelay: '1s' }}>
              <div className="float-badge-icon">
                <Award size={22} style={{ color: 'var(--forest-green)' }} />
              </div>
              <div>
                <div className="float-badge-label">Serving Tampa Since</div>
                <div className="float-badge-value">2009</div>
              </div>
            </div>

            {/* Second floating badge */}
            <div
              className="benefits-float-badge-top floating"
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '-1.5rem',
                background: 'var(--forest-green)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.25rem',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                zIndex: 2,
                animationDelay: '2.5s',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '1.375rem',
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1,
                }}>
                  500+
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.125rem' }}>
                  Products In-Stock
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
