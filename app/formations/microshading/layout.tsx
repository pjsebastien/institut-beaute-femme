import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation Microshading | Technique Ombré Sourcils',
  description: 'Formation microshading : maîtrisez la technique powder brows et ombré shading. Programme, certification et tarifs.',
  keywords: ['formation microshading', 'formation powder brows', 'cours microshading', 'formation ombre sourcils'],
  openGraph: {
    title: 'Formation Microshading | Technique Ombré Sourcils',
    description: 'Devenez expert(e) en microshading.',
    images: ['/og-formation-microshading.jpg'],
  },
}

export default function FormationMicroshadingLayout({ children }: { children: React.ReactNode }) {
  return children
}
