'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationItems } from './Navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  // Fermer le menu quand on change de page
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // Bloquer le scroll quand le menu est ouvert
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

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href]
    )
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
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

      {/* Menu */}
      <div
        className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-nude-rose/30">
          <Link href="/" className="flex items-center gap-3" onClick={onClose}>
            <div className="w-10 h-10 rounded-full bg-gradient-rose flex items-center justify-center">
              <span className="text-white font-playfair font-bold text-lg">IB</span>
            </div>
            <span className="font-playfair text-xl font-semibold text-charbon">
              Institut Beauté
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-charbon hover:text-rose-fonce transition-colors"
            aria-label="Fermer le menu"
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

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex-1 py-3 text-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-rose-fonce'
                        : 'text-charbon hover:text-rose-fonce'
                    }`}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleExpanded(item.href)}
                      className="p-2 text-charbon hover:text-rose-fonce transition-colors"
                      aria-label={expandedItems.includes(item.href) ? 'Réduire' : 'Développer'}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-5 h-5 transition-transform ${
                          expandedItems.includes(item.href) ? 'rotate-180' : ''
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Sous-menu */}
                {item.children && expandedItems.includes(item.href) && (
                  <ul className="pl-4 mt-2 space-y-2 border-l-2 border-rose-poudre/50">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block py-2 pl-4 text-sm transition-colors ${
                            pathname === child.href
                              ? 'text-rose-fonce font-medium'
                              : 'text-charbon/70 hover:text-rose-fonce'
                          }`}
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-nude-rose/30">
          <Link
            href="/boutique"
            className="btn-primary w-full justify-center"
            onClick={onClose}
          >
            Découvrir la Boutique
          </Link>
        </div>
      </div>
    </>
  )
}
