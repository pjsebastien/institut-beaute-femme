import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation Maquillage Permanent | Cursus Complet',
  description: 'Formation complète en maquillage permanent : sourcils, lèvres, yeux. Devenez dermopigmentiste certifié(e). Programme, tarifs, financement.',
  keywords: ['formation maquillage permanent', 'formation dermopigmentation', 'devenir maquilleuse permanente', 'cours maquillage permanent'],
  openGraph: {
    title: 'Formation Maquillage Permanent | Cursus Complet',
    description: 'Devenez expert(e) en maquillage permanent.',
    images: ['/og-formation-maquillage-permanent.jpg'],
  },
}

export default function FormationMaquillageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
