import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import { ArticleCard } from '@/components/ui/Card'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Cheveux | Tricopigmentation et Dermopigmentation Capillaire',
  description: 'Découvrez la tricopigmentation et la dermopigmentation capillaire : solutions pour la calvitie, cicatrices du cuir chevelu et alopécie. Prix, techniques et résultats.',
  keywords: ['tricopigmentation', 'dermopigmentation cheveux', 'micropigmentation capillaire', 'calvitie', 'alopécie'],
}

const articles = [
  {
    title: 'Tricopigmentation : La solution contre la calvitie',
    excerpt: 'La tricopigmentation est une technique de micropigmentation du cuir chevelu qui permet de créer l\'illusion d\'une chevelure dense et naturelle.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800',
    href: '/cheveux/tricopigmentation',
    category: 'Technique',
    badge: 'Populaire',
  },
  {
    title: 'Prix de la tricopigmentation : Tarifs en France',
    excerpt: 'Tout savoir sur les tarifs de la tricopigmentation en France : prix par séance, facteurs de variation et options de financement.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800',
    href: '/cheveux/tricopigmentation/prix',
    category: 'Prix',
  },
  {
    title: 'Tricopigmentation ratée : Solutions et corrections',
    excerpt: 'Face à une tricopigmentation insatisfaisante, découvrez les options de correction et de retouche disponibles.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    href: '/cheveux/tricopigmentation/ratee',
    category: 'Correction',
  },
  {
    title: 'Dermopigmentation des cheveux : Alternative à la greffe',
    excerpt: 'La dermopigmentation capillaire offre une alternative non chirurgicale efficace pour masquer la calvitie et densifier visuellement les cheveux.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800',
    href: '/cheveux/dermopigmentation',
    category: 'Technique',
  },
  {
    title: 'Prix de la micropigmentation capillaire',
    excerpt: 'Comparez les prix de la micropigmentation capillaire et découvrez les facteurs qui influencent le coût du traitement.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800',
    href: '/cheveux/micropigmentation-prix',
    category: 'Prix',
  },
  {
    title: 'Cicatrice du cuir chevelu : Solutions esthétiques',
    excerpt: 'La tricopigmentation permet de camoufler efficacement les cicatrices du cuir chevelu pour un résultat naturel et discret.',
    image: 'https://images.unsplash.com/photo-1612004387350-0588e3f5f0cd?w=800',
    href: '/cheveux/cicatrice-cuir-chevelu',
    category: 'Correction',
  },
]

const faqs = [
  {
    question: 'Qu\'est-ce que la tricopigmentation ?',
    answer: 'La tricopigmentation est une technique de micropigmentation du cuir chevelu qui consiste à implanter des pigments dans le derme pour créer l\'illusion de cheveux rasés ou densifier visuellement une chevelure clairsemée. Elle convient aux hommes et aux femmes.',
  },
  {
    question: 'Combien coûte une tricopigmentation ?',
    answer: 'Le prix de la tricopigmentation varie entre 400€ et 3500€ selon l\'étendue de la zone à traiter. Un traitement complet crâne rasé coûte généralement autour de 1600€ par séance, tandis que le camouflage de cicatrices se situe entre 300€ et 1000€.',
  },
  {
    question: 'La tricopigmentation est-elle permanente ?',
    answer: 'La tricopigmentation est semi-permanente et dure généralement entre 12 et 24 mois. Des retouches annuelles sont recommandées pour maintenir l\'intensité et la fraîcheur du résultat.',
  },
  {
    question: 'Combien de séances sont nécessaires ?',
    answer: 'En général, 2 à 3 séances espacées de 2 à 4 semaines sont nécessaires pour obtenir un résultat optimal. Le nombre exact dépend de la zone à traiter et du résultat souhaité.',
  },
  {
    question: 'La tricopigmentation convient-elle aux femmes ?',
    answer: 'Absolument. La tricopigmentation est aussi efficace pour les femmes souffrant d\'alopécie, de cheveux clairsemés ou souhaitant camoufler une cicatrice. La technique est adaptée pour créer un effet de densité naturel.',
  },
]

export default function CheveuxHubPage() {
  return (
    <>
      <Hero
        title="Cheveux"
        subtitle="Tricopigmentation et dermopigmentation capillaire"
        description="Solutions innovantes pour la calvitie, l'alopécie et les cicatrices du cuir chevelu. Retrouvez confiance grâce à la micropigmentation capillaire."
        image="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200"
        imageAlt="Tricopigmentation et solutions capillaires"
        size="md"
      />

      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Cheveux', href: '/cheveux' },
          ]}
        />
      </div>

      {/* Quick Links */}
      <section className="container-custom pb-12">
        <div className="flex flex-wrap gap-3">
          {['Tricopigmentation', 'Dermopigmentation', 'Prix', 'Cicatrices', 'Femmes'].map((tag) => (
            <Link
              key={tag}
              href={`/cheveux/${tag.toLowerCase()}`}
              className="badge-rose hover:bg-rose-fonce hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-semibold text-charbon mb-8">
            Nos articles sur la tricopigmentation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.href} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-hover">
              <Image
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800"
                alt="Résultat tricopigmentation naturel"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-6">
                Retrouver confiance grâce à la tricopigmentation
              </h2>
              <div className="prose-custom">
                <p>
                  La perte de cheveux peut avoir un impact significatif sur l&apos;estime de soi.
                  La tricopigmentation offre une solution efficace, non chirurgicale et immédiate
                  pour retrouver l&apos;apparence d&apos;une chevelure dense.
                </p>
                <h3>Pour qui est destinée la tricopigmentation ?</h3>
                <ul>
                  <li>Hommes souffrant de calvitie (tous stades)</li>
                  <li>Femmes avec des cheveux clairsemés</li>
                  <li>Personnes avec des cicatrices du cuir chevelu</li>
                  <li>Patients post-greffe souhaitant densifier le résultat</li>
                  <li>Personnes souffrant d&apos;alopécie areata</li>
                </ul>
                <p>
                  Contrairement à la greffe de cheveux, la tricopigmentation offre un résultat
                  immédiat, sans chirurgie et à un coût nettement inférieur. Le résultat est
                  naturel et indétectable lorsqu&apos;il est réalisé par un professionnel qualifié.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={faqs}
        title="Questions fréquentes sur la tricopigmentation"
        description="Les réponses aux questions les plus posées sur la micropigmentation capillaire"
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-rose">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Prendre soin de votre cuir chevelu
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez notre huile régénérante spécialement formulée pour le cuir chevelu après tricopigmentation.
          </p>
          <Link href="/boutique" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
            Voir nos produits
          </Link>
        </div>
      </section>
    </>
  )
}
