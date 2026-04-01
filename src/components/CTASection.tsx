'use client'

import { Phone, MapPin, ArrowRight } from 'lucide-react'

export default function CTASection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cta-section" aria-labelledby="cta-main-heading">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-label">🚀 Ready to Start Your Project?</div>

          <h2 id="cta-main-heading" className="display-lg cta-title">
            Ready to Upgrade Your Space?
          </h2>

          <p className="cta-desc">
            Whether you&apos;re remodeling a home or managing a large project,
            Southern Design Warehouse has the flooring, tile, and materials you need.
          </p>
          <p className="cta-emphasis">Stop searching. Start building.</p>

          <div className="cta-buttons">
            <button
              id="cta-quote-btn"
              className="btn btn-primary btn-lg"
              onClick={() => scrollTo('contact')}
              aria-label="Request a free quote from Southern Design Warehouse"
            >
              <ArrowRight size={18} />
              Request a Free Quote
            </button>
            <a
              id="cta-call-btn"
              href="tel:813-000-0000"
              className="btn btn-lg"
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-full)',
                padding: '1.125rem 2.25rem',
                fontSize: '1.0625rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Phone size={18} />
              Call Now
            </a>
            <button
              id="cta-directions-btn"
              className="btn btn-lg"
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-full)',
                padding: '1.125rem 2.25rem',
                fontSize: '1.0625rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onClick={() => scrollTo('contact')}
            >
              <MapPin size={18} />
              Get Directions
            </button>
          </div>

          <div className="cta-urgency">
            <div className="urgency-dot" />
            Limited stock on select items — Visit today or call to secure your materials
          </div>
        </div>
      </div>
    </section>
  )
}
