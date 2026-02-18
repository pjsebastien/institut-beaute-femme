import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maquillage Permanent Lèvres Raté | Solutions & Corrections',
  description: 'Votre maquillage permanent des lèvres est raté ? Découvrez les solutions : détatouage laser, correction pigmentaire, retouche. Guide complet et prix.',
  keywords: ['maquillage permanent levres raté', 'candy lips raté', 'correction lèvres', 'dermopigmentation raté'],
  openGraph: {
    title: 'Maquillage Permanent Lèvres Raté | Solutions & Corrections',
    description: 'Guide complet pour corriger un maquillage permanent des lèvres raté.',
    images: ['/og-levres-rate.jpg'],
  },
}

export default function RateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
