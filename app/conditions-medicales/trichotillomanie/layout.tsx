import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trichotillomanie | Solutions Dermopigmentation Sourcils',
  description: 'La trichotillomanie cause la perte des sourcils ? Découvrez comment la dermopigmentation peut aider à reconstruire vos sourcils naturellement.',
  keywords: ['trichotillomanie', 'arrachage sourcils', 'perte sourcils', 'dermopigmentation trichotillomanie', 'reconstruction sourcils'],
  openGraph: {
    title: 'Trichotillomanie | Solutions Dermopigmentation',
    description: 'Solutions de dermopigmentation pour la trichotillomanie.',
    images: ['/og-trichotillomanie.jpg'],
  },
}

export default function TrichotillomanieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
