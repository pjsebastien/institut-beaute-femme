import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import { ArticleCard } from '@/components/ui/Card'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Sourcils | Microblading, Microshading et Dermopigmentation',
  description: 'Découvrez toutes les techniques de maquillage permanent des sourcils : microblading, microshading, cicatrisation, retouches et solutions pour les ratés.',
  keywords: ['microblading', 'microshading', 'sourcils', 'dermopigmentation', 'maquillage permanent sourcils'],
}

const articles = [
  {
    title: 'Microblading : La technique poil à poil pour des sourcils naturels',
    excerpt: 'Le microblading est une technique de dermopigmentation manuelle qui permet de dessiner des sourcils ultra-réalistes en imitant les poils naturels.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
    href: '/sourcils/microblading',
    category: 'Technique',
    badge: 'Populaire',
  },
  {
    title: 'Microshading : L\'effet poudré pour des sourcils parfaits',
    excerpt: 'Le microshading crée un effet maquillé naturel grâce à une technique de pointillisme qui donne un résultat plus doux que le microblading.',
    image: 'https://images.unsplash.com/photo-1594359123637-32fcb7aab042?w=800',
    href: '/sourcils/microshading',
    category: 'Technique',
  },
  {
    title: 'Microblading vs Microshading : Quelle technique choisir ?',
    excerpt: 'Comparez les deux techniques phares de la dermopigmentation des sourcils pour faire le choix adapté à votre type de peau et vos envies.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
    href: '/sourcils/microblading-vs-microshading',
    category: 'Comparatif',
  },
  {
    title: 'Cicatrisation du microblading : Jour après jour',
    excerpt: 'Suivez le processus de cicatrisation du microblading étape par étape et découvrez les soins essentiels pour un résultat optimal.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800',
    href: '/sourcils/microblading/cicatrisation',
    category: 'Post-soin',
  },
  {
    title: 'Microblading raté : Solutions et corrections possibles',
    excerpt: 'Découvrez les solutions pour corriger un microblading insatisfaisant : retouche, détatouage laser ou dermopigmentation corrective.',
    image: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800',
    href: '/sourcils/microblading/rate',
    category: 'Correction',
    badge: 'Important',
  },
  {
    title: 'Croûtes après microblading : Est-ce normal ?',
    excerpt: 'Comprendre la formation des croûtes après un microblading et les précautions à prendre pour ne pas compromettre le résultat.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800',
    href: '/sourcils/microblading/croutes',
    category: 'Post-soin',
  },
  {
    title: 'Tatouage sourcils raté : Comment réagir ?',
    excerpt: 'Face à un tatouage de sourcils raté, plusieurs options s\'offrent à vous. Découvrez comment analyser la situation et choisir la meilleure solution.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    href: '/sourcils/tatouage-rate',
    category: 'Correction',
  },
  {
    title: 'Détatouage des sourcils : Techniques et résultats',
    excerpt: 'Le détatouage des sourcils au laser ou par solution saline permet d\'effacer un maquillage permanent insatisfaisant.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800',
    href: '/sourcils/detatouage',
    category: 'Correction',
  },
  {
    title: 'Prix du microshading : Tarifs et facteurs de variation',
    excerpt: 'Tout savoir sur les tarifs du microshading en France : prix moyen, facteurs influençant le coût et conseils pour bien choisir.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800',
    href: '/sourcils/microshading/prix',
    category: 'Prix',
  },
  {
    title: 'Pochoir sourcil : Utilisation et conseils',
    excerpt: 'Apprenez à utiliser un pochoir pour sourcils pour obtenir une forme parfaite et symétrique à la maison.',
    image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?w=800',
    href: '/sourcils/pochoir',
    category: 'Accessoire',
  },
]

const faqs = [
  {
    question: 'Combien coûte un microblading en France ?',
    answer: 'Le prix du microblading varie généralement entre 200€ et 500€ pour une séance complète incluant la première retouche. Les tarifs dépendent de l\'expérience du praticien, de la localisation géographique et de la technique utilisée.',
  },
  {
    question: 'Quelle est la différence entre microblading et microshading ?',
    answer: 'Le microblading utilise une lame pour créer des traits fins imitant les poils, tandis que le microshading utilise une technique de pointillisme pour un effet poudré. Le microblading convient mieux aux peaux sèches, le microshading aux peaux grasses.',
  },
  {
    question: 'Combien de temps dure la cicatrisation ?',
    answer: 'La cicatrisation complète du microblading prend entre 4 et 6 semaines. Les croûtes se forment dans les premiers jours et tombent naturellement entre le 5ème et le 10ème jour. Il est crucial de ne pas les arracher.',
  },
  {
    question: 'Peut-on faire du microblading sur des sourcils existants ?',
    answer: 'Oui, le microblading peut être réalisé sur des sourcils existants pour les densifier ou les restructurer. Le praticien travaillera entre vos poils naturels pour créer un résultat harmonieux.',
  },
  {
    question: 'Comment savoir si mon microblading est raté ?',
    answer: 'Un microblading est considéré comme raté s\'il présente une asymétrie marquée, une couleur inappropriée, des traits trop épais ou irréguliers, ou s\'il ne correspond pas à la forme convenue. Attendez la fin de la cicatrisation avant de juger le résultat.',
  },
]

export default function SourcilsHubPage() {
  return (
    <>
      <Hero
        title="Sourcils"
        subtitle="Microblading, microshading et dermopigmentation"
        description="Découvrez toutes les techniques de maquillage permanent pour obtenir des sourcils parfaits, naturels et adaptés à votre visage."
        image="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200"
        imageAlt="Techniques de maquillage permanent des sourcils"
        size="md"
      />

      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Sourcils', href: '/sourcils' },
          ]}
        />
      </div>

      {/* Quick Links */}
      <section className="container-custom pb-12">
        <div className="flex flex-wrap gap-3">
          {['Microblading', 'Microshading', 'Cicatrisation', 'Raté', 'Prix', 'Détatouage'].map((tag) => (
            <Link
              key={tag}
              href={`/sourcils/${tag.toLowerCase().replace('é', 'e')}`}
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
            Tous nos articles sur les sourcils
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
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-6">
                Pourquoi choisir le maquillage permanent des sourcils ?
              </h2>
              <div className="prose-custom">
                <p>
                  Les sourcils encadrent le visage et jouent un rôle essentiel dans l&apos;expression et l&apos;harmonie des traits.
                  Le maquillage permanent des sourcils offre une solution durable pour celles qui souhaitent des sourcils
                  parfaitement dessinés sans effort quotidien.
                </p>
                <h3>Les avantages du maquillage permanent</h3>
                <ul>
                  <li>Gain de temps considérable chaque matin</li>
                  <li>Résultat naturel et personnalisé</li>
                  <li>Solution idéale pour les sourcils clairsemés</li>
                  <li>Résistant à l&apos;eau et à la transpiration</li>
                  <li>Durée de vie de 12 à 18 mois</li>
                </ul>
                <p>
                  Que vous optiez pour le microblading avec son effet poil à poil ou le microshading avec son
                  rendu poudré, nos articles vous guident pour faire le choix adapté à votre type de peau et
                  vos attentes esthétiques.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-hover">
              <Image
                src="https://images.unsplash.com/photo-1594359123637-32fcb7aab042?w=800"
                alt="Résultat microblading naturel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={faqs}
        title="Questions fréquentes sur les sourcils"
        description="Les réponses aux questions les plus posées sur le microblading et la dermopigmentation des sourcils"
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-rose">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Envie de vous lancer ?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez nos soins post-microblading pour optimiser la cicatrisation et préserver vos pigments.
          </p>
          <Link href="/boutique" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
            Voir nos produits
          </Link>
        </div>
      </section>
    </>
  )
}
