import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cicatrisation Candy Lips | Guide Jour par Jour',
  description: 'Découvrez les étapes de cicatrisation du candy lips jour par jour. Conseils post-soin, erreurs à éviter et timeline complète.',
  keywords: ['candy lips cicatrisation', 'cicatrisation lèvres', 'candy lips après', 'candy lips jour par jour'],
  openGraph: {
    title: 'Cicatrisation Candy Lips | Guide Jour par Jour',
    description: 'Timeline complète de la cicatrisation du candy lips avec conseils experts.',
    images: ['/og-candy-lips-cicatrisation.jpg'],
  },
}

export default function CicatrisationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
