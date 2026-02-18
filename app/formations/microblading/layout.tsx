import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation Microblading | Devenir Praticien Certifié',
  description: 'Formation professionnelle microblading : programme complet, certification, prix. Devenez expert en maquillage permanent des sourcils.',
  keywords: ['formation microblading', 'devenir microblading', 'certification microblading', 'cours microblading', 'formation sourcils'],
  openGraph: {
    title: 'Formation Microblading | Devenir Praticien Certifié',
    description: 'Devenez praticien microblading certifié.',
    images: ['/og-formation-microblading.jpg'],
  },
}

export default function FormationMicrobladingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
