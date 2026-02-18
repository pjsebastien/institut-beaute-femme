'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from './CartContext'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart()

  // Bloquer le scroll quand le drawer est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(price)
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-charbon/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : 'closed'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-nude-rose/30">
          <h2 className="font-playfair text-xl font-semibold text-charbon">
            Votre Panier
            {totalItems > 0 && (
              <span className="ml-2 text-sm font-inter font-normal text-charbon/60">
                ({totalItems} article{totalItems > 1 ? 's' : ''})
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-charbon hover:text-rose-fonce transition-colors"
            aria-label="Fermer le panier"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-rose-pale flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-rose-fonce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-charbon mb-2">
                Votre panier est vide
              </h3>
              <p className="text-sm text-charbon/60 mb-6">
                Découvrez nos produits pour sublimer votre beauté
              </p>
              <Link
                href="/boutique"
                className="btn-primary"
                onClick={onClose}
              >
                Voir la boutique
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-beige-creme rounded-xl"
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-charbon text-sm line-clamp-2 mb-1">
                      {item.product.name}
                    </h4>
                    <p className="text-rose-fonce font-semibold text-sm mb-2">
                      {formatPrice(item.product.price)}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <div className="quantity-selector">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
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
                        <span className="quantity-input flex items-center justify-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
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
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-charbon/40 hover:text-red-500 transition-colors"
                        aria-label="Supprimer l'article"
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
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right">
                    <span className="text-sm font-semibold text-charbon">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-nude-rose/30 p-6">
            {/* Subtotal */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-charbon/70">Sous-total</span>
              <span className="font-semibold text-charbon">
                {formatPrice(totalPrice)}
              </span>
            </div>

            {/* Shipping */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-nude-rose/30">
              <span className="text-charbon/70">Livraison</span>
              <span className="text-sm text-charbon/70">
                Calculée à l&apos;étape suivante
              </span>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-playfair text-lg font-semibold text-charbon">
                Total
              </span>
              <span className="font-playfair text-xl font-bold text-rose-fonce">
                {formatPrice(totalPrice)}
              </span>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Link
                href="/panier"
                className="btn-secondary w-full justify-center"
                onClick={onClose}
              >
                Voir le panier
              </Link>
              <Link
                href="/checkout"
                className="btn-primary w-full justify-center"
                onClick={onClose}
              >
                Commander
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
