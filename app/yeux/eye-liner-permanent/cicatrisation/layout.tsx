import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cicatrisation Eye Liner Permanent | Guide Complet Jour par Jour',
  description: 'Guide complet de cicatrisation après eye liner permanent. Étapes, soins post-traitement, gonflement et conseils d\'experts pour un résultat optimal.',
  keywords: ['eye liner permanent cicatrisation', 'cicatrisation maquillage permanent yeux', 'soins post eye liner', 'gonflement eye liner'],
  openGraph: {
    title: 'Cicatrisation Eye Liner Permanent | Guide Complet',
    description: 'Tout savoir sur la cicatrisation de l\'eye liner permanent jour par jour.',
    images: ['/og-eyeliner-cicatrisation.jpg'],
  },
}

export default function CicatrisationEyelinerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
