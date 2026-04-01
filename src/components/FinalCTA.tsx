'use client'

import { Phone, MapPin, ArrowRight, Shield } from 'lucide-react'

export default function FinalCTA() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="container">
        <div className="final-cta-inner" data-animate>
          <div style={{ marginBottom: '1.25rem' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              background: 'rgba(45,82,51,0.2)',
              border: '1px solid rgba(45,82,51,0.35)',
              borderRadius: 'var(--radius-full)',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              ✨ Best Materials in Tampa
            </span>
          </div>

          <h2 id="final-cta-heading" className="display-lg final-cta-title">
            Get the Best Flooring & Tile<br />
            <span style={{ color: '#86efac' }}>in Tampa Today</span>
          </h2>

          <p className="final-cta-desc">
            Don&apos;t settle for overpriced or low-quality materials.
            Visit Southern Design Warehouse and get premium products at warehouse pricing.
          </p>
          <p className="final-cta-sub">
            Tampa&apos;s trusted source for flooring, tile, and remodeling materials.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <button
              id="final-cta-quote"
              className="btn btn-primary btn-lg"
              onClick={() => scrollTo('contact')}
              aria-label="Get your free quote from Southern Design Warehouse"
            >
              <ArrowRight size={18} />
              Get Your Free Quote
            </button>
            <a
              id="final-cta-call"
              href="tel:813-000-0000"
              className="btn btn-lg"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.2)',
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
              Call (813-845-1111)
            </a>
            <button
              id="final-cta-showroom"
              className="btn btn-lg"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.2)',
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
              Visit Tampa Showroom
            </button>
          </div>

          <div className="final-trust">
            <Shield size={14} />
            Trusted by homeowners and contractors across Tampa Bay
          </div>
        </div>
      </div>
    </section>
  )
}
