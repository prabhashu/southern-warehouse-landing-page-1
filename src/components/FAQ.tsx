'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    id: 'faq-1',
    question: 'Do you offer flooring and tile in Tampa?',
    answer:
      'Yes! We carry a wide range of flooring, tile, cabinetry, and remodeling materials available for pickup or showroom viewing in Tampa. Our large in-stock inventory includes hardwood, laminate, luxury vinyl, ceramic tile, porcelain, natural stone, and much more.',
  },
  {
    id: 'faq-2',
    question: 'Can contractors buy in bulk?',
    answer:
      'Absolutely. We offer special contractor pricing and bulk supply options for ongoing projects. Whether you\'re building new construction or managing multiple remodels, we have the inventory and pricing structure to support your business.',
  },
  {
    id: 'faq-3',
    question: 'Do I need an appointment to visit the showroom?',
    answer:
      'No appointment needed — walk-ins are always welcome! Our showroom team is ready to assist you during business hours. We recommend calling ahead if you have specific products or large quantities in mind so we can prepare.',
  },
  {
    id: 'faq-4',
    question: 'Do you help homeowners choose materials?',
    answer:
      'Yes, absolutely! Our experienced design team helps you select the right products based on your style preferences, project requirements, and budget. We\'ll guide you through options for flooring, tile, and other materials to ensure you make the best choice for your home.',
  },
  {
    id: 'faq-5',
    question: 'Where are you located in Tampa?',
    answer:
      'We are located in Tampa, serving Carrollwood, North Tampa, and surrounding areas across Tampa Bay. Contact us for our exact address and directions. We\'re easily accessible from major highways and offer convenient parking.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-header centered" data-animate>
          <div style={{ marginBottom: '0.75rem' }}>
            <span className="section-tag">FAQ</span>
          </div>
          <h2 id="faq-heading" className="display-lg section-title">
            Frequently Asked
            <span style={{ color: 'var(--forest-green)' }}> Questions</span>
          </h2>
          <p className="body-lg section-description">
            Everything you need to know about Southern Design Warehouse and our products.
            Still have questions? Give us a call anytime.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div
              key={faq.id}
              id={faq.id}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              data-animate
              data-delay={`${i * 80}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`answer-${faq.id}`}
              >
                <span className="faq-q-text">{faq.question}</span>
                <div className="faq-icon">
                  <Plus size={16} />
                </div>
              </button>
              <div
                id={`answer-${faq.id}`}
                className="faq-answer"
                role="region"
                aria-labelledby={faq.id}
              >
                <div className="faq-answer-inner">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
