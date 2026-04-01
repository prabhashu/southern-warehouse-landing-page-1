'use client'

import { useState } from 'react'
import { Phone, MapPin, Mail, Send, CheckCircle2, User, MessageSquare } from 'lucide-react'

const contactDetails = [
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '(813)-845-1111',
    link: 'tel:813-845-1111',
    id: 'contact-phone',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Tampa, FL — Carrollwood Area\nWalk-ins Welcome',
    link: null,
    id: 'contact-location',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'info@southerndesignwarehouse.com',
    link: 'mailto:info@southerndesignwarehouse.com',
    id: 'contact-email',
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info" data-animate-left>
            <div className="contact-tag-wrapper">
              <span className="section-tag">Contact Us</span>
            </div>
            <h2 id="contact-heading" className="display-md contact-info-title">
              Let&apos;s Talk About<br />
              <span style={{ color: 'var(--forest-green)' }}>Your Project</span>
            </h2>
            <p className="body-lg contact-info-desc">
              Ready to start your renovation or need a quote? Our team at Southern Design
              Warehouse is here to help. Reach out today!
            </p>

            <div className="contact-details">
              {contactDetails.map((detail) => (
                <div key={detail.id} className="contact-detail">
                  <div className="contact-detail-icon">{detail.icon}</div>
                  <div>
                    <div className="contact-detail-label">{detail.label}</div>
                    {detail.link ? (
                      <a
                        id={detail.id}
                        href={detail.link}
                        className="contact-detail-value"
                        style={{ color: 'var(--charcoal)' }}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <div className="contact-detail-value" style={{ whiteSpace: 'pre-line' }}>
                        {detail.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="showroom-hours-box">
              <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>
                Showroom Hours
              </h3>
              {[
                { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
                { day: 'Saturday', hours: '9:00 AM – 5:00 PM' },
                { day: 'Sunday', hours: 'Closed' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--slate-gray)' }}>{item.day}</span>
                  <span style={{ fontWeight: 600, color: 'var(--charcoal)' }}>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper" data-animate-right data-delay="200">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  background: 'rgba(45,82,51,0.08)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <CheckCircle2 size={36} style={{ color: 'var(--forest-green)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--slate-gray)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you for reaching out! Our team will contact you within 24 hours
                  to discuss your project and provide a free quote.
                </p>
                <button
                  className="btn btn-green"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="form-title">Get Your Free Quote</h3>
                <p className="form-subtitle">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  aria-label="Contact and quote request form"
                >
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-input"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-input"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        autoComplete="family-name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="(813) XXX-XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="projectType" className="form-label">Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        className="form-select"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your project type</option>
                        <option value="kitchen-remodel">Kitchen Remodel</option>
                        <option value="bathroom-remodel">Bathroom Remodel</option>
                        <option value="flooring">Flooring Installation</option>
                        <option value="new-construction">New Construction</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="message" className="form-label">Tell Us About Your Project</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        placeholder="Describe your project, materials needed, timeline, and any specific questions..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      marginTop: '1.25rem',
                      opacity: loading ? 0.75 : 1,
                      cursor: loading ? 'wait' : 'pointer',
                    }}
                  >
                    {loading ? (
                      <>Sending Message...</>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Message & Get Free Quote
                      </>
                    )}
                  </button>

                  <p style={{ textAlign: 'center', marginTop: '0.875rem', fontSize: '0.8125rem', color: 'var(--slate-gray)' }}>
                    🔒 Your information is secure and will never be shared.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
