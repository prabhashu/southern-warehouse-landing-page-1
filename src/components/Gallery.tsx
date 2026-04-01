'use client'

import { MapPin, ArrowRight } from 'lucide-react'

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    caption: 'Modern Kitchen Remodel – Tampa',
    alt: 'Modern kitchen remodel with premium tile and flooring',
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    caption: 'Premium Finishes Available In-Store',
    alt: 'Premium tile finishes and textures available at Southern Design Warehouse',
  },
  {
    image: 'https://images.unsplash.com/photo-1754359667692-34308056cf0e?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Luxury Bathroom Tile Selection',
    alt: 'Luxury bathroom tile selection in Tampa showroom',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    caption: 'Hardwood Flooring & Transitions',
    alt: 'Hardwood flooring options for Tampa homes',
  },
  {
    image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80',
    caption: 'Visit Our Carrollwood Showroom',
    alt: 'Southern Design Warehouse showroom in Carrollwood Tampa',
  },
  {
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80',
    caption: 'Contractor Project Installs',
    alt: 'Professional contractor tile installation project in Tampa',
  },
  {
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80',
    caption: 'Stone & Natural Materials',
    alt: 'Natural stone and premium material selection at Southern Design Warehouse',
  },
]

export default function Gallery() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="gallery" className="gallery-section" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-header centered" data-animate>
          <div style={{ marginBottom: '0.75rem' }}>
            <span className="section-tag">Our Work</span>
          </div>
          <h2 id="gallery-heading" className="display-lg section-title">
            See Our Materials in
            <span style={{ color: 'var(--forest-green)' }}> Real Projects</span>
          </h2>
          <p className="body-lg section-description">
            High-end kitchen and bathroom remodels, stunning tile and flooring installations
            across Tampa Bay. See what&apos;s possible with Southern Design Warehouse materials.
          </p>
        </div>

        <div className="gallery-grid" data-animate data-delay="100">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
              id={`gallery-item-${i + 1}`}
              role="img"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <p className="gallery-caption">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="gallery-cta" data-animate data-delay="200">
          <div style={{
            display: 'inline-flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            gap: '0.875rem',
            padding: '2rem 3rem',
            background: 'white',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border)',
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--forest-green)', fontWeight: 600, fontSize: '1.0625rem' }}>
              <MapPin size={18} />
              Visit Our Showroom Today
            </div>
            <p style={{ color: 'var(--slate-gray)', fontSize: '0.9375rem', textAlign: 'center', lineHeight: 1.6 }}>
              See all these materials in person at our Tampa showroom.
              Walk-ins welcome — no appointment needed!
            </p>
            <button
              id="gallery-cta-showroom"
              className="btn btn-primary"
              onClick={() => scrollTo('contact')}
            >
              Get Directions & Showroom Info
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
