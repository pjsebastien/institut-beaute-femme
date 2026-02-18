import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Microblading | Sourcils Naturels Poil à Poil',
  description: 'Le microblading est une technique de dermopigmentation manuelle qui crée des sourcils naturels poil à poil. Découvrez le processus, les résultats, prix et soins post-traitement.',
  keywords: ['microblading', 'microblading sourcils', 'dermopigmentation', 'sourcils poil à poil', 'maquillage permanent sourcils'],
  openGraph: {
    title: 'Microblading | Sourcils Naturels Poil à Poil',
    description: 'Le microblading est une technique de dermopigmentation manuelle qui crée des sourcils naturels poil à poil.',
    images: ['/images/microblading-og.jpg'],
  },
}

export default function MicrobladingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
