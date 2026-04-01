'use client'

import { Phone, MapPin, Mail, Globe, ImageIcon, MessageCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  services: [
    { label: 'Flooring & Hardwood', href: '#products' },
    { label: 'Tile & Stone', href: '#products' },
    { label: 'Kitchen Materials', href: '#products' },
    { label: 'Bathroom Remodel', href: '#products' },
    { label: 'Contractor Supply', href: '#who-we-serve' },
  ],
  company: [
    { label: 'Why Choose Us', href: '#why-choose' },
    { label: 'Who We Serve', href: '#who-we-serve' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Image
                src="/Logo.png"
                alt="Southern Design Warehouse Logo"
                width={200}
                height={76}
                style={{ objectFit: 'contain', height: '70px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="footer-desc">
              Tampa&apos;s premier destination for flooring, tile, and remodeling materials.
              Warehouse prices. Showroom experience. Serving Tampa Bay since 2009.
            </p>
            <div className="footer-social">
              {[
                { icon: <Globe size={16} />, href: '#', label: 'Facebook' },
                { icon: <ImageIcon size={16} />, href: '#', label: 'Instagram' },
                { icon: <MessageCircle size={16} />, href: '#', label: 'Twitter' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="social-link"
                  aria-label={`Visit our ${social.label} page`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-col-title">Services</h3>
            <ul className="footer-links">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}>
                    <ArrowRight size={12} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-links">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}>
                    <ArrowRight size={12} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-col-title">Contact</h3>
            <div>
              <div className="footer-contact-item">
                <Phone size={15} className="footer-contact-icon" style={{ color: 'var(--forest-green)' }} />
                <div>
                  <div className="footer-contact-text">Call Us</div>
                  <a href="tel:813-000-0000" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.9rem' }}>
                    (813)-845-1111
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={15} className="footer-contact-icon" style={{ color: 'var(--forest-green)' }} />
                <div>
                  <div className="footer-contact-text">Email Us</div>
                  <a href="mailto:info@southerndesignwarehouse.com" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.875rem' }}>
                    info@southerndesign<br />warehouse.com
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <MapPin size={15} className="footer-contact-icon" style={{ color: 'var(--forest-green)' }} />
                <div>
                  <div className="footer-contact-text">Visit Us</div>
                  <div style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.9rem' }}>
                    Tampa, FL<br />Walk-ins Welcome
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Southern Design Warehouse. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
