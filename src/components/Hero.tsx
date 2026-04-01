'use client'

import { Phone, MapPin, ArrowRight, CheckCircle2, Star, Package, Truck } from 'lucide-react'

const valueTags = [
  { icon: '📦', text: 'Huge In-Stock Selection' },
  { icon: '💰', text: 'Contractor Pricing Available' },
  { icon: '🏠', text: 'Tampa Showroom' },
  { icon: '⚡', text: 'Fast Pickup & Reliable Supply' },
]

const trustItems = [
  'Serving Tampa Bay Homeowners & Contractors',
  'Quality Materials You Can Trust',
  'Competitive Warehouse Pricing',
]

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Background */}
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
          alt="Premium flooring and remodeling materials showroom"
          className="hero-bg-image"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay" />
        <div className="hero-grid-pattern" />
      </div>

      {/* Decorative orbs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '8%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(45,82,51,0.25) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(232,76,61,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container hero-content">
        {/* Eyebrow */}
        <div className="hero-eyebrow animate-fade-up">
          <span className="hero-eyebrow-dot" />
          Tampa&apos;s Premier Design Warehouse
        </div>

        {/* Headline */}
        <h1 className="display-xl hero-headline animate-fade-up animate-delay-1">
          Premium Flooring & Tile <br />
          <span className="accent">at Warehouse Prices</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline animate-fade-up animate-delay-2">
          Upgrade your home or project with high-quality materials sourced for homeowners,
          contractors, and builders across Tampa, Carrollwood, and surrounding areas.
        </p>

        {/* Value Tags */}
        <div className="hero-value-tags animate-fade-up animate-delay-3">
          {valueTags.map((tag, i) => (
            <div key={i} className="hero-tag">
              <span className="hero-tag-icon">{tag.icon}</span>
              {tag.text}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta-group animate-fade-up animate-delay-4">
          <button
            id="hero-cta-quote"
            className="btn btn-primary btn-lg"
            onClick={() => scrollTo('contact')}
            aria-label="Get a free quote from Southern Design Warehouse"
          >
            <ArrowRight size={18} />
            Get a Free Quote
          </button>
          <a
            id="hero-cta-call"
            href="tel:813-000-0000"
            className="btn btn-secondary btn-lg"
            aria-label="Call Southern Design Warehouse at 813-XXX-XXXX"
          >
            <Phone size={18} />
            Call Now (813-845-1111)
          </a>
          <button
            id="hero-cta-showroom"
            className="btn"
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(10px)',
              padding: '1.125rem 1.75rem',
              fontSize: '1.0625rem',
              borderRadius: 'var(--radius-full)',
            }}
            onClick={() => scrollTo('contact')}
            aria-label="Visit Southern Design Warehouse showroom"
          >
            <MapPin size={18} />
            Visit Our Showroom
          </button>
        </div>

        {/* Trust Bar */}
        <div className="hero-trust-bar animate-fade-up animate-delay-5">
          {trustItems.map((item, i) => (
            <div key={i} className="trust-item">
              <CheckCircle2 size={16} className="trust-check" style={{ color: '#86efac' }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Stats Cards */}
      <div style={{
        position: 'absolute',
        right: '4%',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        zIndex: 2,
      }} className="hero-float-cards">
        {[
          { icon: <Star size={18} />, value: '4.9/5', label: 'Customer Rating' },
          { icon: <Package size={18} />, value: '500+', label: 'Products In-Stock' },
          { icon: <Truck size={18} />, value: '15+', label: 'Years Experience' },
        ].map((card, i) => (
          <div
            key={i}
            className="floating"
            style={{
              animationDelay: `${i * 1.5}s`,
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              minWidth: '190px',
            }}
          >
            <div style={{
              width: 40,
              height: 40,
              background: 'rgba(45,82,51,0.5)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#86efac',
              flexShrink: 0,
            }}>
              {card.icon}
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>
                {card.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.125rem' }}>
                {card.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>

      <style>{`
        @media (max-width: 1279px) {
          .hero-float-cards {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
