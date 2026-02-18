import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Microshading | Sourcils Poudrés Effet Naturel',
  description: 'Le microshading crée des sourcils poudrés parfaits avec un effet maquillage naturel. Découvrez la technique, les résultats avant/après et les prix.',
  keywords: ['microshading', 'microshading avant apres', 'sourcils poudrés', 'powder brows', 'ombré brows'],
  openGraph: {
    title: 'Microshading | Sourcils Poudrés Effet Naturel',
    description: 'Technique de maquillage permanent pour des sourcils poudrés naturels et durables.',
    images: ['https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200'],
  },
}

export default function MicroshadingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
