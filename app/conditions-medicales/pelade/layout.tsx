import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pelade Femme | Solutions Dermopigmentation',
  description: 'La pelade cause la perte de vos cheveux ou sourcils ? Découvrez les solutions de dermopigmentation pour retrouver une apparence naturelle.',
  keywords: ['pelade femme', 'alopecia areata', 'perte cheveux femme', 'dermopigmentation pelade', 'pelade traitement'],
  openGraph: {
    title: 'Pelade Femme | Solutions Dermopigmentation',
    description: 'Solutions de dermopigmentation pour la pelade chez la femme.',
    images: ['/og-pelade-femme.jpg'],
  },
}

export default function PeladeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
