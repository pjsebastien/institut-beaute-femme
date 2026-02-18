import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Croûtes Microblading | Guide Complet & Conseils',
  description: 'Tout savoir sur les croûtes après microblading : évolution jour par jour, ce qui est normal, erreurs à éviter et quand consulter.',
  keywords: ['microblading croute', 'croutes microblading', 'cicatrisation microblading', 'microblading après'],
  openGraph: {
    title: 'Croûtes Microblading | Guide Complet & Conseils',
    description: 'Guide complet sur les croûtes de microblading : normal vs anormal.',
    images: ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200'],
  },
}

export default function CroutesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
