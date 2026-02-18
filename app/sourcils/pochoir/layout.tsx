import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pochoir Sourcils | Guide & Conseils Utilisation',
  description: 'Le pochoir sourcil facilite le maquillage pour des sourcils parfaits et symétriques. Découvrez les types, formes et conseils d\'utilisation.',
  keywords: ['pochoir sourcil', 'pochoir sourcils', 'stencil sourcils', 'forme sourcils', 'tracer sourcils'],
  openGraph: {
    title: 'Pochoir Sourcils | Guide & Conseils Utilisation',
    description: 'Guide complet pour utiliser les pochoirs sourcils : types, formes et techniques.',
    images: ['/og-pochoir.jpg'],
  },
}

export default function PochoirLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
