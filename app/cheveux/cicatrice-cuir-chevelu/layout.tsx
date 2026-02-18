import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cicatrice Cuir Chevelu | Solutions de Camouflage',
  description: 'Camouflage des cicatrices du cuir chevelu par tricopigmentation. Solutions pour cicatrices de greffe, accidents, chirurgies. Guide complet.',
  keywords: ['cicatrice cuir chevelu', 'camouflage cicatrice cheveux', 'cicatrice greffe cheveux', 'tricopigmentation cicatrice'],
  openGraph: {
    title: 'Cicatrice Cuir Chevelu | Solutions de Camouflage',
    description: 'Guide complet pour camoufler les cicatrices du cuir chevelu.',
    images: ['/og-cicatrice-cheveux.jpg'],
  },
}

export default function CicatriceCuirCheveluLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
