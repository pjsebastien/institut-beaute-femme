import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tatouage Sourcils Raté | Solutions de Correction',
  description: 'Votre tatouage de sourcils est raté ? Découvrez toutes les solutions : détatouage laser, correction pigmentaire, camouflage. Guide complet et prix.',
  keywords: ['tatouage sourcils raté', 'correction tatouage sourcils', 'sourcils ratés', 'maquillage permanent raté'],
  openGraph: {
    title: 'Tatouage Sourcils Raté | Solutions de Correction',
    description: 'Guide complet pour corriger un tatouage de sourcils raté : solutions, prix et conseils.',
    images: ['/og-sourcils-rate.jpg'],
  },
}

export default function TatouageRateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
