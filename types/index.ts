// Types pour les produits e-commerce
export interface Product {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: ProductCategory
  tags: string[]
  inStock: boolean
  rating: number
  reviewCount: number
  features: string[]
}

export type ProductCategory =
  | 'soins-post-traitement'
  | 'accessoires-professionnels'
  | 'maquillage-correcteur'

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

// Types pour le contenu SEO
export interface FAQItem {
  question: string
  answer: string
}

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface ArticleMeta {
  title: string
  description: string
  keywords: string[]
  canonical: string
  ogImage?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export interface RelatedArticle {
  title: string
  slug: string
  excerpt: string
  image: string
  category: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  treatment: string
  avatar?: string
}

// Types pour la navigation
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface NavCategory {
  title: string
  items: NavItem[]
}

// Types pour les formations
export interface Formation {
  id: string
  slug: string
  title: string
  description: string
  duration: string
  price: number
  priceFinanced?: string
  level: 'debutant' | 'intermediaire' | 'avance'
  certification: boolean
  cpfEligible: boolean
  poleEmploiEligible: boolean
  modules: string[]
  prerequisites: string[]
  outcomes: string[]
  image: string
}

// Types pour les images avant/après
export interface BeforeAfterImage {
  before: string
  after: string
  treatment: string
  description: string
}

// Schema types pour SEO
export interface ArticleSchema {
  '@context': string
  '@type': string
  headline: string
  description: string
  image: string[]
  datePublished: string
  dateModified: string
  author: {
    '@type': string
    name: string
  }
  publisher: {
    '@type': string
    name: string
    logo: {
      '@type': string
      url: string
    }
  }
}

export interface FAQSchema {
  '@context': string
  '@type': string
  mainEntity: Array<{
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }>
}

export interface ProductSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  image: string[]
  offers: {
    '@type': string
    price: number
    priceCurrency: string
    availability: string
  }
  aggregateRating?: {
    '@type': string
    ratingValue: number
    reviewCount: number
  }
}

export interface BreadcrumbSchema {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item: string
  }>
}
