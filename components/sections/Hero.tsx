import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  image?: string
  imageAlt?: string
  badge?: string
  centered?: boolean
  overlay?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  imageAlt = '',
  badge,
  centered = false,
  overlay = false,
  size = 'md',
}: HeroProps) {
  const sizeClasses = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
  }

  if (image && overlay) {
    // Hero avec image de fond
    return (
      <section className={`relative ${sizeClasses[size]} overflow-hidden`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          {/* Strong overlay for guaranteed text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-charbon/90 via-charbon/70 to-charbon/50" />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            {badge && (
              <span className="inline-block bg-rose-fonce/80 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm">
                {badge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 animate-slide-up text-shadow-hero">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white font-playfair italic mb-4 animate-slide-up animate-delay-100 text-shadow-sm">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-lg text-white mb-8 animate-slide-up animate-delay-200 text-shadow-sm">
                {description}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-wrap gap-4 animate-slide-up animate-delay-300">
                {primaryCTA && (
                  <Link href={primaryCTA.href} className="btn-primary">
                    {primaryCTA.label}
                  </Link>
                )}
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className="btn bg-white/20 text-white border-2 border-white/30 hover:bg-white hover:text-charbon backdrop-blur-sm"
                  >
                    {secondaryCTA.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Hero standard
  return (
    <section className={`bg-gradient-hero ${sizeClasses[size]}`}>
      <div className="container-custom">
        <div
          className={`${
            centered
              ? 'text-center max-w-4xl mx-auto'
              : image
              ? 'grid lg:grid-cols-2 gap-12 items-center'
              : 'max-w-4xl'
          }`}
        >
          {/* Text Content */}
          <div className={centered ? '' : 'order-1'}>
            {badge && (
              <span className="inline-block badge-rose mb-6 animate-fade-in">
                {badge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-charbon mb-6 animate-slide-up text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-rose-fonce font-playfair italic mb-4 animate-slide-up animate-delay-100">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-lg text-charbon/70 mb-8 animate-slide-up animate-delay-200">
                {description}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div
                className={`flex flex-wrap gap-4 animate-slide-up animate-delay-300 ${
                  centered ? 'justify-center' : ''
                }`}
              >
                {primaryCTA && (
                  <Link href={primaryCTA.href} className="btn-primary">
                    {primaryCTA.label}
                  </Link>
                )}
                {secondaryCTA && (
                  <Link href={secondaryCTA.href} className="btn-secondary">
                    {secondaryCTA.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Image */}
          {image && !overlay && (
            <div className="order-2 relative animate-fade-in">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-hover">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-poudre rounded-full opacity-50 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-nude-rose rounded-full opacity-30 -z-10" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
