import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alopécie Sourcils | Causes & Solutions Dermopigmentation',
  description: 'Perte de sourcils : découvrez les causes de l\'alopécie des sourcils et les solutions de dermopigmentation (microblading, microshading).',
  keywords: ['alopécie sourcil', 'perte sourcils', 'sourcils clairsemés', 'reconstruction sourcils', 'microblading alopécie'],
  openGraph: {
    title: 'Alopécie Sourcils | Causes & Solutions',
    description: 'Guide complet sur l\'alopécie des sourcils et les solutions.',
    images: ['/og-alopecie-sourcils.jpg'],
  },
}

export default function AlopecieSourcilsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
