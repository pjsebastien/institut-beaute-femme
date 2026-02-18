import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Microblading vs Microshading | Comparatif Complet 2024',
  description: 'Microblading ou microshading ? Découvrez les différences entre ces deux techniques de maquillage permanent des sourcils et choisissez celle qui vous convient.',
  keywords: ['difference microblading microshading', 'microblading vs microshading', 'microshading ou microblading', 'comparatif sourcils'],
  openGraph: {
    title: 'Microblading vs Microshading | Comparatif Complet 2024',
    description: 'Comparaison détaillée pour vous aider à choisir entre microblading et microshading.',
    images: ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200'],
  },
}

export default function ComparatifLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
