import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/ui/CookieBanner'
import { CartProvider } from '@/components/cart/CartContext'
import { generateLocalBusinessSchema, generateWebsiteSchema } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://institutbeautedefemme.fr'),
  title: {
    default: 'Institut Beauté de Femme | Maquillage Permanent & Dermopigmentation',
    template: '%s | Institut Beauté de Femme',
  },
  description:
    'Spécialiste du maquillage permanent : microblading, candy lips, eye-liner permanent, tricopigmentation. Conseils experts et soins de qualité pour sublimer votre beauté naturelle.',
  keywords: [
    'microblading',
    'maquillage permanent',
    'candy lips',
    'dermopigmentation',
    'tricopigmentation',
    'eye liner permanent',
    'sourcils',
    'institut beauté',
  ],
  authors: [{ name: 'Institut Beauté de Femme' }],
  creator: 'Institut Beauté de Femme',
  publisher: 'Institut Beauté de Femme',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://institutbeautedefemme.fr',
    siteName: 'Institut Beauté de Femme',
    title: 'Institut Beauté de Femme | Maquillage Permanent & Dermopigmentation',
    description:
      'Spécialiste du maquillage permanent : microblading, candy lips, eye-liner permanent, tricopigmentation. Conseils experts et soins de qualité.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Institut Beauté de Femme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Institut Beauté de Femme | Maquillage Permanent & Dermopigmentation',
    description:
      'Spécialiste du maquillage permanent : microblading, candy lips, eye-liner permanent, tricopigmentation.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = generateLocalBusinessSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieBanner />
        </CartProvider>
      </body>
    </html>
  )
}
