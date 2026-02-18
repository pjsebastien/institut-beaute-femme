import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation Dermopigmentation | Cursus Expert Complet',
  description: 'Formation complète en dermopigmentation : esthétique et réparatrice. Sourcils, lèvres, yeux, aréoles, cicatrices. Certification professionnelle.',
  keywords: ['formation dermopigmentation', 'formation dermopigmentation réparatrice', 'devenir dermopigmentiste', 'cours dermopigmentation'],
  openGraph: {
    title: 'Formation Dermopigmentation | Cursus Expert',
    description: 'Devenez dermopigmentiste certifié(e).',
    images: ['/og-formation-dermopigmentation.jpg'],
  },
}

export default function FormationDermopigmentationLayout({ children }: { children: React.ReactNode }) {
  return children
}
