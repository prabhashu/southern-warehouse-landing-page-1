'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X, MapPin } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Why Us', href: '#why-choose' },
  { label: 'Products', href: '#products' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar-inner">
          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} aria-label="Southern Design Warehouse - Home">
            <Image
              src="/Logo.png"
              alt="Southern Design Warehouse Logo"
              width={160}
              height={60}
              style={{
                objectFit: 'contain',
                height: '52px',
                width: 'auto',
                filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                transition: 'filter 0.3s ease',
              }}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <ul className="navbar-nav" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <button
                  id={`nav-${link.href.replace('#', '')}`}
                  className="nav-link"
                  role="menuitem"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <a
              href="tel:813-845-1111"
              id="nav-phone-cta"
              className={`btn ${scrolled ? 'btn-outline-green' : 'btn-secondary'}`}
              style={{ padding: '0.625rem 1.125rem', fontSize: '0.875rem' }}
              aria-label="Call Southern Design Warehouse"
            >
              <Phone size={15} />
              813-845-1111
            </a>
            <button
              id="nav-quote-cta"
              className="btn btn-primary"
              style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}
              onClick={() => handleNavClick('#contact')}
              aria-label="Get a free quote"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{ color: scrolled ? 'var(--charcoal)' : 'white' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <button
          className="mobile-menu-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation menu"
        >
          <X size={22} />
        </button>

        {/* Mobile Logo */}
        <div style={{ marginBottom: '1.25rem' }}>
          <Image
            src="/Logo.png"
            alt="Southern Design Warehouse Logo"
            width={180}
            height={68}
            style={{ objectFit: 'contain', height: '64px', width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {navLinks.map((link) => (
          <button
            key={link.href}
            className="nav-link"
            onClick={() => handleNavClick(link.href)}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}
          >
            {link.label}
          </button>
        ))}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem', width: '100%', maxWidth: '280px' }}>
          <a href="tel:813-000-0000" className="btn btn-secondary" style={{ justifyContent: 'center' }}>
            <Phone size={16} />
            813-XXX-XXXX
          </a>
          <button
            className="btn btn-primary"
            onClick={() => handleNavClick('#contact')}
            style={{ justifyContent: 'center' }}
          >
            Get Free Quote
          </button>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
          <MapPin size={14} />
          Tampa, FL — Walk-ins Welcome
        </div>
      </div>
    </>
  )
}
