import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Détatouage Sourcils | Laser, Prix & Guide Complet',
  description: 'Effacez votre microblading ou tatouage sourcils grâce au détatouage laser. Découvrez les techniques, le nombre de séances et les prix.',
  keywords: ['detatouage sourcil', 'détatouage microblading', 'laser sourcils', 'effacer microblading', 'détatouage prix'],
  openGraph: {
    title: 'Détatouage Sourcils | Laser, Prix & Guide Complet',
    description: 'Guide complet du détatouage sourcils : techniques laser, tarifs et processus.',
    images: ['https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200'],
  },
}

export default function DetatouageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
