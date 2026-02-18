import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tricopigmentation Ratée | Solutions & Corrections',
  description: 'Votre tricopigmentation est ratée ? Découvrez les solutions : détatouage laser, correction, retouche. Guide complet des recours possibles.',
  keywords: ['tricopigmentation ratée', 'micropigmentation cheveux raté', 'correction tricopigmentation', 'détatouage tricopigmentation'],
  openGraph: {
    title: 'Tricopigmentation Ratée | Solutions & Corrections',
    description: 'Guide complet pour corriger une tricopigmentation ratée.',
    images: ['/og-tricopigmentation-ratee.jpg'],
  },
}

export default function TricopigmentationRateeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
