import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation Hygiène et Salubrité | Obligatoire Tatouage',
  description: 'Formation hygiène et salubrité obligatoire pour tatouage et maquillage permanent. 21h minimum, certification, prix et organismes agréés.',
  keywords: ['formation hygiène salubrité', 'attestation hygiène tatouage', 'formation obligatoire maquillage permanent', 'HSS'],
  openGraph: {
    title: 'Formation Hygiène et Salubrité | Obligatoire',
    description: 'Formation obligatoire pour exercer le tatouage et le maquillage permanent.',
    images: ['/og-formation-hygiene.jpg'],
  },
}

export default function FormationHygieneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
