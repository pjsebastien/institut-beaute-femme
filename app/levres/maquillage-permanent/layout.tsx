import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maquillage Permanent Lèvres | Guide Complet & Techniques',
  description: 'Découvrez le maquillage permanent des lèvres : candy lips, full lips, contour. Techniques, durée, prix et conseils pour des lèvres parfaites.',
  keywords: ['maquillage permanent lèvres', 'candy lips', 'full lips', 'dermopigmentation lèvres', 'tatouage lèvres'],
  openGraph: {
    title: 'Maquillage Permanent Lèvres | Guide Complet & Techniques',
    description: 'Guide complet du maquillage permanent des lèvres : techniques, résultats et prix.',
    images: ['/og-levres.jpg'],
  },
}

export default function MaquillagePermamentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
