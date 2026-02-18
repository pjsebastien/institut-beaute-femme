import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation Microblading Pôle Emploi | Financement & Aides',
  description: 'Financez votre formation microblading avec Pôle Emploi, CPF ou aides régionales. Guide complet des dispositifs de financement.',
  keywords: ['formation microblading pole emploi', 'financement formation maquillage permanent', 'CPF microblading', 'aide formation esthétique'],
  openGraph: {
    title: 'Formation Microblading Pôle Emploi | Financement',
    description: 'Guide des aides pour financer votre formation.',
    images: ['/og-financement-formation.jpg'],
  },
}

export default function FinancementLayout({ children }: { children: React.ReactNode }) {
  return children
}
