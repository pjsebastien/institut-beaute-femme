'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { useCart } from '@/components/cart/CartContext'
import { getProductBySlug, getRelatedProducts } from '@/lib/products'

const categoryNames: Record<string, string> = {
  'soins-post-traitement': 'Soins Post-Traitement',
  'accessoires-professionnels': 'Accessoires Professionnels',
  'maquillage-correcteur': 'Maquillage Correcteur',
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addToCart, isInCart } = useCart()

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(params.slug)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(price)
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Boutique', href: '/boutique' },
            { label: categoryNames[product.category], href: `/boutique?category=${product.category}` },
            { label: product.name, href: `/boutique/${product.slug}` },
          ]}
        />
      </div>

      {/* Product Detail */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-card mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.originalPrice && (
                  <span className="absolute top-4 left-4 badge-or">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden ${
                        selectedImage === index
                          ? 'ring-2 ring-rose-fonce'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <span className="text-sm font-medium text-rose-fonce uppercase tracking-wide">
                {categoryNames[product.category]}
              </span>
              <h1 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mt-2 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-5 h-5 ${
                        i < Math.round(product.rating) ? 'text-or-rose' : 'text-nude-rose/50'
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
                <span className="text-charbon/60">
                  {product.rating} ({product.reviewCount} avis)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-rose-fonce">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-charbon/40 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-charbon/70 mb-8 leading-relaxed">
                {product.longDescription}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-charbon mb-3">Caractéristiques</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-charbon/70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-rose-fonce"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="quantity-selector">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="quantity-btn"
                    aria-label="Diminuer la quantité"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="quantity-input"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="quantity-btn"
                    aria-label="Augmenter la quantité"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="btn-primary flex-1"
                >
                  {isInCart(product.id) ? 'Ajouter encore' : 'Ajouter au panier'}
                </button>
              </div>

              {/* Stock */}
              <p className="flex items-center gap-2 text-sm">
                {product.inStock ? (
                  <>
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-green-600">En stock</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-red-600">Rupture de stock</span>
                  </>
                )}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-nude-rose/30">
                {product.tags.map((tag) => (
                  <span key={tag} className="badge-rose">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-beige-creme">
          <div className="container-custom">
            <h2 className="text-2xl font-playfair font-semibold text-charbon mb-8">
              Produits similaires
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/boutique/${relatedProduct.slug}`}
                  className="product-card group"
                >
                  <div className="product-image">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                    <div className="product-overlay" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-charbon text-sm line-clamp-2 mb-2 group-hover:text-rose-fonce transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <span className="font-semibold text-rose-fonce">
                      {formatPrice(relatedProduct.price)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
