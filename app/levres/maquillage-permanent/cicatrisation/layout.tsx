import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cicatrisation Maquillage Permanent Lèvres | Guide Complet',
  description: 'Guide complet de cicatrisation après maquillage permanent des lèvres. Étapes jour par jour, soins post-traitement et conseils d\'experts.',
  keywords: ['maquillage permanent levres cicatrisation', 'cicatrisation lèvres', 'soins post maquillage permanent', 'healing lips'],
  openGraph: {
    title: 'Cicatrisation Maquillage Permanent Lèvres | Guide Complet',
    description: 'Tout savoir sur la cicatrisation du maquillage permanent des lèvres.',
    images: ['/og-levres-cicatrisation.jpg'],
  },
}

export default function CicatrisationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
