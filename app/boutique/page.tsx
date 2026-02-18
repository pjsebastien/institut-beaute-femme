'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { useCart } from '@/components/cart/CartContext'
import { products, getAllCategories } from '@/lib/products'
import { Product } from '@/types'

const categoryNames: Record<string, string> = {
  'soins-post-traitement': 'Soins Post-Traitement',
  'accessoires-professionnels': 'Accessoires Professionnels',
  'maquillage-correcteur': 'Maquillage Correcteur',
}

export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { addToCart } = useCart()
  const categories = getAllCategories()

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(price)
  }

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Boutique', href: '/boutique' },
            ]}
          />
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charbon mb-4">
              Notre Boutique
            </h1>
            <p className="text-xl text-charbon/70 max-w-2xl mx-auto">
              Découvrez notre sélection de soins post-traitement, accessoires professionnels et
              maquillage correcteur pour sublimer et entretenir vos sourcils, lèvres et cheveux.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-nude-rose/30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-rose-fonce text-white'
                  : 'bg-rose-pale text-charbon hover:bg-rose-poudre'
              }`}
            >
              Tous les produits ({products.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat.slug
                    ? 'bg-rose-fonce text-white'
                    : 'bg-rose-pale text-charbon hover:bg-rose-poudre'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          {selectedCategory && (
            <h2 className="text-2xl font-playfair font-semibold text-charbon mb-8">
              {categoryNames[selectedCategory]}
            </h2>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <Link href={`/boutique/${product.slug}`} className="block">
                  <div className="product-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="product-overlay" />
                    {product.originalPrice && (
                      <span className="absolute top-4 left-4 badge-or">
                        Promo
                      </span>
                    )}
                  </div>
                </Link>
                <div className="p-4">
                  <span className="text-xs font-medium text-rose-fonce uppercase tracking-wide">
                    {categoryNames[product.category]}
                  </span>
                  <Link href={`/boutique/${product.slug}`}>
                    <h3 className="font-medium text-charbon text-sm mt-1 mb-2 line-clamp-2 hover:text-rose-fonce transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={`rating-star ${i < Math.round(product.rating) ? '' : 'empty'}`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-charbon/50">({product.reviewCount})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-rose-fonce">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-charbon/40 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                title: 'Livraison rapide',
                description: 'Expédition sous 24-48h',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Paiement sécurisé',
                description: 'Transactions 100% sécurisées',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                ),
                title: 'Satisfait ou remboursé',
                description: '14 jours pour changer d\'avis',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                ),
                title: 'Support expert',
                description: 'Conseils personnalisés',
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-rose-pale flex items-center justify-center mx-auto mb-4 text-rose-fonce">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-charbon mb-1">{benefit.title}</h3>
                <p className="text-sm text-charbon/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
