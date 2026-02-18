import { Testimonial } from '@/types'
import Image from 'next/image'

interface TestimonialsProps {
  testimonials: Testimonial[]
  title?: string
  description?: string
}

export default function Testimonials({
  testimonials,
  title = 'Ce que disent nos clientes',
  description,
}: TestimonialsProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">{description}</p>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-beige-creme rounded-2xl p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-rose-poudre/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="rating-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`rating-star ${
                      i < testimonial.rating ? '' : 'empty'
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-charbon/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Treatment Badge */}
              <span className="inline-block badge-rose mb-4">
                {testimonial.treatment}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-nude-rose/30">
                {testimonial.avatar ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-rose-poudre flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-charbon">{testimonial.name}</p>
                  <p className="text-sm text-charbon/60">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
