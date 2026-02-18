import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prix Microshading 2024 | Tarifs & Guide Complet',
  description: 'Découvrez les prix du microshading en France : tarifs moyens de 300€ à 600€, ce qui influence le coût et comment choisir le bon praticien.',
  keywords: ['microshading prix', 'prix microshading', 'tarif microshading', 'cout microshading', 'microshading combien'],
  openGraph: {
    title: 'Prix Microshading 2024 | Tarifs & Guide Complet',
    description: 'Guide complet des prix du microshading en France avec tous les facteurs qui influencent le tarif.',
    images: ['https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200'],
  },
}

export default function PrixLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
