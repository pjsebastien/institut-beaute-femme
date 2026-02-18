import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cicatrisation Microblading | Guide Jour par Jour',
  description: 'Découvrez les étapes de cicatrisation du microblading jour par jour. Conseils post-soin, erreurs à éviter et timeline complète pour un résultat optimal.',
  keywords: ['microblading cicatrisation', 'cicatrisation microblading jour par jour', 'microblading post soin', 'microblading guérison'],
  openGraph: {
    title: 'Cicatrisation Microblading | Guide Jour par Jour',
    description: 'Timeline complète de la cicatrisation du microblading avec conseils experts.',
    images: ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200'],
  },
}

export default function CicatrisationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
