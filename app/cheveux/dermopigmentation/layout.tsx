import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dermopigmentation Cheveux | Alternative à la Greffe',
  description: 'Découvrez la dermopigmentation des cheveux : technique, résultats, prix. Alternative non chirurgicale à la greffe pour densifier visuellement le cuir chevelu.',
  keywords: ['dermopigmentation cheveux', 'micropigmentation capillaire', 'tatouage cheveux', 'alternative greffe cheveux'],
  openGraph: {
    title: 'Dermopigmentation Cheveux | Alternative à la Greffe',
    description: 'Guide complet sur la dermopigmentation capillaire.',
    images: ['/og-dermopigmentation-cheveux.jpg'],
  },
}

export default function DermopigmentationCheveuxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
