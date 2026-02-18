import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  children: ReactNode
  href?: string
  hover?: boolean
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({ children, href, hover = true, className = '', padding = 'md' }: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const baseClasses = `bg-white rounded-2xl shadow-card overflow-hidden ${paddingClasses[padding]} ${
    hover ? 'transition-all duration-300 hover:shadow-hover hover:-translate-y-1' : ''
  } ${className}`

  if (href) {
    return (
      <Link href={href} className={`block ${baseClasses}`}>
        {children}
      </Link>
    )
  }

  return <div className={baseClasses}>{children}</div>
}

interface ArticleCardProps {
  title: string
  excerpt: string
  image: string
  href: string
  category?: string
  badge?: string
}

export function ArticleCard({ title, excerpt, image, href, category, badge }: ArticleCardProps) {
  return (
    <Link href={href} className="card-hover group block">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute top-4 left-4 badge-rose">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charbon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        {category && (
          <span className="text-xs font-medium text-rose-fonce uppercase tracking-wide">
            {category}
          </span>
        )}
        <h3 className="font-playfair text-xl font-semibold text-charbon mt-2 mb-3 line-clamp-2 group-hover:text-rose-fonce transition-colors">
          {title}
        </h3>
        <p className="text-sm text-charbon/70 line-clamp-2">
          {excerpt}
        </p>
      </div>
    </Link>
  )
}

interface ProductCardProps {
  name: string
  price: number
  originalPrice?: number
  image: string
  href: string
  rating?: number
  reviewCount?: number
  badge?: string
  onAddToCart?: () => void
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  href,
  rating,
  reviewCount,
  badge,
  onAddToCart,
}: ProductCardProps) {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(value)
  }

  return (
    <div className="product-card">
      <Link href={href} className="block">
        <div className="product-image">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
          <div className="product-overlay" />
          {badge && (
            <span className="absolute top-4 left-4 badge-or">
              {badge}
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link href={href}>
          <h3 className="font-medium text-charbon text-sm line-clamp-2 mb-2 hover:text-rose-fonce transition-colors">
            {name}
          </h3>
        </Link>

        {rating && reviewCount && (
          <div className="flex items-center gap-1 mb-2">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`rating-star ${i < Math.round(rating) ? '' : 'empty'}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <span className="text-xs text-charbon/50">({reviewCount})</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-rose-fonce">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-charbon/40 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          {onAddToCart && (
            <button
              onClick={(e) => {
                e.preventDefault()
                onAddToCart()
              }}
              className="p-2 rounded-full bg-rose-pale text-rose-fonce hover:bg-rose-fonce hover:text-white transition-colors"
              aria-label="Ajouter au panier"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
