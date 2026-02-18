import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation Tricopigmentation | Micropigmentation Capillaire',
  description: 'Formation tricopigmentation : devenez expert en micropigmentation du cuir chevelu. Programme complet, certification et débouchés.',
  keywords: ['formation tricopigmentation', 'formation micropigmentation capillaire', 'cours SMP', 'formation cheveux'],
  openGraph: {
    title: 'Formation Tricopigmentation | Micropigmentation Capillaire',
    description: 'Devenez expert en tricopigmentation.',
    images: ['/og-formation-tricopigmentation.jpg'],
  },
}

export default function FormationTricopigmentationLayout({ children }: { children: React.ReactNode }) {
  return children
}
