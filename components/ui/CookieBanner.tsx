'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté/refusé les cookies
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Afficher la bannière après un court délai pour ne pas gêner le chargement initial
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const refuseCookies = () => {
    localStorage.setItem('cookie-consent', 'refused')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-nude-rose/30 p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icône cookie */}
          <div className="w-12 h-12 bg-rose-pale rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-rose-fonce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Texte */}
          <div className="flex-1">
            <p className="text-charbon text-sm leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site.
              En continuant, vous acceptez notre{' '}
              <Link href="/politique-confidentialite" className="text-rose-fonce hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>

          {/* Boutons */}
          <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={refuseCookies}
              className="flex-1 md:flex-initial px-4 py-2 text-sm text-charbon/70 hover:text-charbon border border-nude-rose rounded-lg transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-initial px-4 py-2 text-sm bg-rose-fonce text-white rounded-lg hover:bg-or-rose transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
