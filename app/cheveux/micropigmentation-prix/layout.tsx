import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prix Micropigmentation Cheveux 2024 | Tarifs Complets',
  description: 'Tarifs micropigmentation capillaire en 2024. Prix par zone, facteurs de coût, comparatif greffe. Guide complet pour budgétiser votre traitement.',
  keywords: ['micropigmentation cheveux prix', 'tarif micropigmentation capillaire', 'coût SMP', 'prix tatouage cheveux'],
  openGraph: {
    title: 'Prix Micropigmentation Cheveux 2024 | Tarifs Complets',
    description: 'Guide des tarifs de micropigmentation capillaire.',
    images: ['/og-micropigmentation-prix.jpg'],
  },
}

export default function MicropigmentationPrixLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
