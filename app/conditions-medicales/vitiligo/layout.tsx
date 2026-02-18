import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vitiligo | Dermopigmentation & Camouflage',
  description: 'Camouflage du vitiligo par dermopigmentation. Repigmentation des lèvres, sourcils et zones dépigmentées. Solutions et conseils.',
  keywords: ['vitiligo', 'dermopigmentation vitiligo', 'camouflage vitiligo', 'repigmentation', 'taches blanches peau'],
  openGraph: {
    title: 'Vitiligo | Dermopigmentation & Camouflage',
    description: 'Solutions de dermopigmentation pour le vitiligo.',
    images: ['/og-vitiligo.jpg'],
  },
}

export default function VitiligoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
