import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eye Liner Permanent Raté | Solutions & Corrections',
  description: 'Votre eye liner permanent est raté ? Découvrez les solutions : détatouage laser, correction, retouche. Guide complet des recours possibles.',
  keywords: ['eye liner permanent raté', 'maquillage permanent yeux raté', 'correction eye liner', 'détatouage eye liner'],
  openGraph: {
    title: 'Eye Liner Permanent Raté | Solutions & Corrections',
    description: 'Guide complet pour corriger un eye liner permanent raté.',
    images: ['/og-eyeliner-rate.jpg'],
  },
}

export default function EyelinerRateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
