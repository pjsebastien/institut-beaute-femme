import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pigmentation Cicatrice Blanche | Camouflage Dermopigmentation',
  description: 'Camouflage des cicatrices blanches par dermopigmentation. Technique, résultats, prix. Redonnez de la couleur à vos cicatrices.',
  keywords: ['pigmentation cicatrice blanche', 'camouflage cicatrice', 'dermopigmentation cicatrice', 'tatouage cicatrice'],
  openGraph: {
    title: 'Pigmentation Cicatrice Blanche | Camouflage',
    description: 'Solutions de camouflage pour les cicatrices blanches.',
    images: ['/og-cicatrice-blanche.jpg'],
  },
}

export default function PigmentationCicatriceBlancheLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
