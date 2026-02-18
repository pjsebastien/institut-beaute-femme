import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pelade Sourcils | Reconstruction par Dermopigmentation',
  description: 'Vos sourcils sont touchés par la pelade ? Découvrez le microblading et microshading pour reconstruire des sourcils naturels.',
  keywords: ['pelade sourcils', 'reconstruction sourcils', 'alopecia areata sourcils', 'microblading pelade'],
  openGraph: {
    title: 'Pelade Sourcils | Reconstruction par Dermopigmentation',
    description: 'Solutions de reconstruction des sourcils touchés par la pelade.',
    images: ['/og-pelade-sourcils.jpg'],
  },
}

export default function PeladeSourcilsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
