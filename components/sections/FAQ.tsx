'use client'

import { useState } from 'react'
import { FAQItem } from '@/types'
import { generateFAQSchema } from '@/lib/seo'

interface FAQProps {
  items: FAQItem[]
  title?: string
  description?: string
}

export default function FAQ({ items, title = 'Questions Fréquentes', description }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const schema = generateFAQSchema(items)

  return (
    <section className="section-padding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-charbon/70">{description}</p>
            )}
          </div>

          {/* FAQ List */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            {items.map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="faq-question"
                  aria-expanded={openIndex === index}
                >
                  <span className="pr-8 text-left">{item.question}</span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-rose-pale flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-rose-fonce"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="faq-answer px-6">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
