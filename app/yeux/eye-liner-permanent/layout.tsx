import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eye-Liner Permanent | Guide Complet & Techniques',
  description: 'Découvrez l\'eye-liner permanent : techniques (interstitiel, trait fin, cat-eye), durée, prix et conseils pour un regard sublimé.',
  keywords: ['maquillage permanent eye liner', 'eye liner permanent', 'tatouage eye liner', 'dermopigmentation yeux'],
  openGraph: {
    title: 'Eye-Liner Permanent | Guide Complet & Techniques',
    description: 'Guide complet de l\'eye-liner permanent : techniques, résultats et prix.',
    images: ['/og-eyeliner.jpg'],
  },
}

export default function EyeLinerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
