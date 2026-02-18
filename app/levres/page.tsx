import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import { ArticleCard } from '@/components/ui/Card'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Lèvres | Candy Lips et Maquillage Permanent',
  description: 'Tout savoir sur le maquillage permanent des lèvres : candy lips, techniques, cicatrisation et solutions pour les ratés. Conseils experts pour des lèvres sublimes.',
  keywords: ['candy lips', 'maquillage permanent lèvres', 'dermopigmentation lèvres', 'lèvres'],
}

const articles = [
  {
    title: 'Maquillage permanent des lèvres : Techniques et résultats',
    excerpt: 'Découvrez les différentes techniques de maquillage permanent des lèvres pour retrouver couleur, volume et définition de manière naturelle.',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800',
    href: '/levres/maquillage-permanent',
    category: 'Technique',
    badge: 'Populaire',
  },
  {
    title: 'Candy Lips : La technique pour des lèvres gourmandes',
    excerpt: 'Le candy lips crée un effet lèvres mordues avec un dégradé subtil de couleurs pour un résultat naturel et lumineux.',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=800',
    href: '/levres/candy-lips',
    category: 'Technique',
    badge: 'Tendance',
  },
  {
    title: 'Cicatrisation candy lips : Le processus jour par jour',
    excerpt: 'Suivez l\'évolution de vos lèvres après un candy lips et découvrez les soins essentiels pour un résultat optimal.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
    href: '/levres/candy-lips/cicatrisation',
    category: 'Post-soin',
  },
  {
    title: 'Cicatrisation maquillage permanent lèvres : Les étapes',
    excerpt: 'Comprenez le processus de cicatrisation après un maquillage permanent des lèvres et les précautions à prendre.',
    image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=800',
    href: '/levres/maquillage-permanent/cicatrisation',
    category: 'Post-soin',
  },
  {
    title: 'Maquillage permanent lèvres raté : Solutions et corrections',
    excerpt: 'Face à un maquillage permanent des lèvres insatisfaisant, découvrez les options de correction disponibles.',
    image: 'https://images.unsplash.com/photo-1594359123637-32fcb7aab042?w=800',
    href: '/levres/maquillage-permanent/rate',
    category: 'Correction',
  },
]

const faqs = [
  {
    question: 'Quelle est la différence entre candy lips et maquillage permanent lèvres ?',
    answer: 'Le candy lips est une technique spécifique de maquillage permanent qui crée un effet dégradé avec un centre plus clair et des contours plus soutenus, donnant un aspect naturellement pulpeux. Le maquillage permanent classique peut couvrir l\'ensemble de la lèvre d\'une couleur uniforme.',
  },
  {
    question: 'Combien de temps dure un candy lips ?',
    answer: 'Un candy lips dure généralement entre 1 et 3 ans selon votre type de peau, votre mode de vie et l\'exposition au soleil. Une retouche annuelle est recommandée pour maintenir l\'intensité des couleurs.',
  },
  {
    question: 'Le maquillage permanent des lèvres fait-il mal ?',
    answer: 'La zone des lèvres est sensible, mais une crème anesthésiante est appliquée avant le traitement pour minimiser l\'inconfort. La plupart des clientes décrivent la sensation comme un léger picotement supportable.',
  },
  {
    question: 'Peut-on manger normalement après un candy lips ?',
    answer: 'Il est recommandé d\'éviter les aliments chauds, épicés et acides pendant les premiers jours. Privilégiez les aliments tièdes ou froids et utilisez une paille pour boire. La cicatrisation complète prend environ 2 semaines.',
  },
  {
    question: 'Comment choisir la couleur de son maquillage permanent lèvres ?',
    answer: 'La couleur est choisie en fonction de votre carnation naturelle, de la couleur de vos lèvres et de l\'effet recherché. Le praticien vous proposera plusieurs teintes et pourra les mélanger pour créer une couleur sur-mesure.',
  },
]

export default function LevresHubPage() {
  return (
    <>
      <Hero
        title="Lèvres"
        subtitle="Candy lips et maquillage permanent"
        description="Redonnez couleur et définition à vos lèvres grâce aux techniques de dermopigmentation. Du candy lips au maquillage permanent, trouvez la solution idéale."
        image="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200"
        imageAlt="Maquillage permanent des lèvres candy lips"
        size="md"
      />

      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Lèvres', href: '/levres' },
          ]}
        />
      </div>

      {/* Quick Links */}
      <section className="container-custom pb-12">
        <div className="flex flex-wrap gap-3">
          {['Candy Lips', 'Maquillage permanent', 'Cicatrisation', 'Avant/Après', 'Raté'].map((tag) => (
            <Link
              key={tag}
              href={`/levres/${tag.toLowerCase().replace(' ', '-').replace('é', 'e')}`}
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
            Tous nos articles sur les lèvres
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
                src="https://images.unsplash.com/photo-1599305090598-fe179d501227?w=800"
                alt="Résultat candy lips naturel"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-6">
                Pourquoi opter pour le maquillage permanent des lèvres ?
              </h2>
              <div className="prose-custom">
                <p>
                  Les lèvres sont un élément central du visage qui mérite une attention particulière.
                  Avec l&apos;âge, les lèvres peuvent perdre leur définition, leur couleur naturelle ou leur volume apparent.
                  Le maquillage permanent offre une solution élégante et durable.
                </p>
                <h3>Les bénéfices du maquillage permanent des lèvres</h3>
                <ul>
                  <li>Ravive la couleur naturelle des lèvres</li>
                  <li>Redéfinit le contour pour plus de netteté</li>
                  <li>Corrige les asymétries et irrégularités</li>
                  <li>Effet repulpant optique sans injections</li>
                  <li>Maquillage permanent résistant à l&apos;eau</li>
                </ul>
                <p>
                  Le candy lips est particulièrement apprécié pour son effet naturel &quot;lèvres mordues&quot; qui
                  sublime les lèvres sans effet artificiel. Cette technique utilise un dégradé de 2 à 3 couleurs
                  pour un résultat lumineux et rafraîchissant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={faqs}
        title="Questions fréquentes sur les lèvres"
        description="Les réponses aux questions les plus posées sur le candy lips et le maquillage permanent des lèvres"
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-rose">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Prendre soin de vos lèvres
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez notre baume réparateur spécialement formulé pour la cicatrisation après maquillage permanent des lèvres.
          </p>
          <Link href="/boutique" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
            Voir nos produits
          </Link>
        </div>
      </section>
    </>
  )
}
