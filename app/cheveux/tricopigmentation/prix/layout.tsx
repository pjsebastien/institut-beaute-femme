import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prix Tricopigmentation 2024 | Tarifs & Devis Complet',
  description: 'Découvrez les prix de la tricopigmentation en 2024. Tarifs par zone, facteurs influençant le coût, comparatif avec la greffe de cheveux.',
  keywords: ['tricopigmentation prix', 'micropigmentation cheveux prix', 'tarif tricopigmentation', 'coût micropigmentation capillaire'],
  openGraph: {
    title: 'Prix Tricopigmentation 2024 | Tarifs & Devis Complet',
    description: 'Guide complet des tarifs de tricopigmentation avec comparatifs.',
    images: ['/og-tricopigmentation-prix.jpg'],
  },
}

export default function TricopigmentationPrixLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
