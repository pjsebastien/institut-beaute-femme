'use client'

import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { useCart } from '@/components/cart/CartContext'

export default function PanierPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(price)
  }

  if (items.length === 0) {
    return (
      <div className="container-custom py-16">
        <Breadcrumb
          items={[
            { label: 'Panier', href: '/panier' },
          ]}
        />
        <div className="text-center py-16">
          <div className="w-24 h-24 rounded-full bg-rose-pale flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-rose-fonce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-playfair font-semibold text-charbon mb-4">
            Votre panier est vide
          </h1>
          <p className="text-charbon/70 mb-8">
            Découvrez nos produits pour sublimer votre beauté
          </p>
          <Link href="/boutique" className="btn-primary">
            Découvrir la boutique
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Panier', href: '/panier' },
          ]}
        />
      </div>

      <section className="pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-8">
            Votre panier ({totalItems} article{totalItems > 1 ? 's' : ''})
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                {/* Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-beige-creme border-b border-nude-rose/30">
                  <div className="col-span-6 text-sm font-medium text-charbon/70">Produit</div>
                  <div className="col-span-2 text-sm font-medium text-charbon/70 text-center">Prix</div>
                  <div className="col-span-2 text-sm font-medium text-charbon/70 text-center">Quantité</div>
                  <div className="col-span-2 text-sm font-medium text-charbon/70 text-right">Total</div>
                </div>

                {/* Items */}
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-nude-rose/30 last:border-b-0"
                  >
                    {/* Product Info */}
                    <div className="md:col-span-6 flex gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/boutique/${item.product.slug}`}
                          className="font-medium text-charbon hover:text-rose-fonce transition-colors line-clamp-2"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-sm text-red-500 hover:text-red-600 mt-2"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                      <span className="md:hidden text-charbon/70">Prix :</span>
                      <span className="font-medium text-charbon">
                        {formatPrice(item.product.price)}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                      <span className="md:hidden text-charbon/70">Quantité :</span>
                      <div className="quantity-selector">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                          </svg>
                        </button>
                        <span className="quantity-input flex items-center justify-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="md:col-span-2 flex items-center justify-between md:justify-end">
                      <span className="md:hidden text-charbon/70">Total :</span>
                      <span className="font-semibold text-rose-fonce">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Actions */}
                <div className="p-4 bg-beige-creme flex flex-wrap justify-between gap-4">
                  <button
                    onClick={clearCart}
                    className="text-sm text-charbon/60 hover:text-red-500 transition-colors"
                  >
                    Vider le panier
                  </button>
                  <Link
                    href="/boutique"
                    className="text-sm text-rose-fonce hover:text-or-rose transition-colors"
                  >
                    Continuer mes achats
                  </Link>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
                <h2 className="font-playfair text-xl font-semibold text-charbon mb-6">
                  Récapitulatif
                </h2>

                <div className="space-y-3 pb-4 border-b border-nude-rose/30">
                  <div className="flex justify-between text-charbon/70">
                    <span>Sous-total</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-charbon/70">
                    <span>Livraison</span>
                    <span className="text-sm">Calculée à l&apos;étape suivante</span>
                  </div>
                </div>

                <div className="flex justify-between py-4 border-b border-nude-rose/30">
                  <span className="font-semibold text-charbon">Total</span>
                  <span className="font-playfair text-xl font-bold text-rose-fonce">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                <button className="btn-primary w-full mt-6">
                  Passer commande
                </button>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-charbon/60">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    Paiement 100% sécurisé
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charbon/60">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                    Livraison sous 24-48h
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charbon/60">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    14 jours satisfait ou remboursé
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
