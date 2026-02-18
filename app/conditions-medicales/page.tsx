import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import { ArticleCard } from '@/components/ui/Card'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Conditions Médicales | Alopécie, Pelade, Vitiligo et Solutions',
  description: 'Solutions esthétiques pour les conditions médicales : alopécie, pelade, trichotillomanie, vitiligo. Découvrez la dermopigmentation réparatrice et corrective.',
  keywords: ['alopécie', 'pelade', 'trichotillomanie', 'vitiligo', 'dermopigmentation réparatrice'],
}

const articles = [
  {
    title: 'Trichotillomanie : Comprendre et accompagner',
    excerpt: 'La trichotillomanie est un trouble du comportement qui entraîne l\'arrachage des cheveux. Découvrez les causes et les solutions esthétiques.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800',
    href: '/conditions-medicales/trichotillomanie',
    category: 'Comprendre',
    badge: 'Important',
  },
  {
    title: 'Pelade chez la femme : Solutions et accompagnement',
    excerpt: 'La pelade ou alopecia areata provoque une perte de cheveux localisée. Découvrez les options de traitement et les solutions esthétiques.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
    href: '/conditions-medicales/pelade',
    category: 'Solutions',
  },
  {
    title: 'Pelade des sourcils : Reconstruire son regard',
    excerpt: 'La pelade peut affecter les sourcils. Le microblading et la dermopigmentation offrent des solutions pour reconstruire des sourcils naturels.',
    image: 'https://images.unsplash.com/photo-1594359123637-32fcb7aab042?w=800',
    href: '/conditions-medicales/pelade/sourcils',
    category: 'Solutions',
  },
  {
    title: 'Alopécie des sourcils : Causes et traitements',
    excerpt: 'L\'alopécie du sourcil peut avoir diverses origines. Découvrez les causes possibles et les solutions pour retrouver des sourcils fournis.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800',
    href: '/conditions-medicales/alopecie-sourcils',
    category: 'Comprendre',
  },
  {
    title: 'Vitiligo : Dermopigmentation et camouflage',
    excerpt: 'La dermopigmentation peut aider à camoufler les zones dépigmentées causées par le vitiligo sur certaines parties du corps.',
    image: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800',
    href: '/conditions-medicales/vitiligo',
    category: 'Solutions',
  },
  {
    title: 'Pigmentation cicatrice blanche : Correction esthétique',
    excerpt: 'Les cicatrices blanches (achromiques) peuvent être corrigées par dermopigmentation pour les rendre moins visibles.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800',
    href: '/conditions-medicales/pigmentation-cicatrice-blanche',
    category: 'Correction',
  },
]

const faqs = [
  {
    question: 'La dermopigmentation peut-elle traiter toutes les conditions ?',
    answer: 'La dermopigmentation peut améliorer l\'apparence de nombreuses conditions (alopécie, cicatrices, vitiligo), mais elle ne traite pas les causes sous-jacentes. Un avis médical préalable est toujours recommandé pour déterminer si la dermopigmentation est adaptée à votre situation.',
  },
  {
    question: 'Le microblading est-il possible sur des sourcils atteints de pelade ?',
    answer: 'Oui, le microblading peut reconstruire des sourcils affectés par la pelade. Cependant, il est préférable d\'attendre une période de stabilité de la condition et de consulter un dermatologue au préalable.',
  },
  {
    question: 'La dermopigmentation fonctionne-t-elle sur le vitiligo ?',
    answer: 'La dermopigmentation peut camoufler les zones dépigmentées du vitiligo, particulièrement sur les lèvres et les aréoles. Les résultats varient selon l\'étendue et la localisation des zones. Les peaux foncées obtiennent généralement de meilleurs résultats.',
  },
  {
    question: 'Comment accompagner une personne atteinte de trichotillomanie ?',
    answer: 'La trichotillomanie nécessite un accompagnement pluridisciplinaire incluant un suivi psychologique. La dermopigmentation peut aider à restaurer l\'apparence des zones affectées une fois le trouble stabilisé.',
  },
  {
    question: 'Les cicatrices peuvent-elles toutes être pigmentées ?',
    answer: 'Seules les cicatrices blanches (achromiques) et matures (plus d\'un an) peuvent être pigmentées. Les cicatrices rouges, récentes ou en évolution ne doivent pas être traitées. Un examen préalable déterminera l\'éligibilité.',
  },
]

export default function ConditionsMedicalesHubPage() {
  return (
    <>
      <Hero
        title="Conditions Médicales"
        subtitle="Solutions esthétiques adaptées"
        description="Découvrez les solutions de dermopigmentation pour l'alopécie, la pelade, la trichotillomanie, le vitiligo et les cicatrices. Un accompagnement bienveillant pour retrouver confiance."
        image="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200"
        imageAlt="Dermopigmentation réparatrice et corrective"
        size="md"
      />

      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Conditions médicales', href: '/conditions-medicales' },
          ]}
        />
      </div>

      {/* Quick Links */}
      <section className="container-custom pb-12">
        <div className="flex flex-wrap gap-3">
          {['Alopécie', 'Pelade', 'Trichotillomanie', 'Vitiligo', 'Cicatrices'].map((tag) => (
            <Link
              key={tag}
              href={`/conditions-medicales/${tag.toLowerCase().replace('é', 'e')}`}
              className="badge-rose hover:bg-rose-fonce hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="container-custom pb-12">
        <div className="bg-rose-pale/50 border border-rose-poudre rounded-2xl p-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-fonce/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-rose-fonce">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-charbon mb-2">Accompagnement médical recommandé</h3>
              <p className="text-charbon/70">
                Les solutions esthétiques présentées sur ce site ne remplacent pas un avis médical.
                Nous vous recommandons de consulter un dermatologue ou un médecin spécialiste avant
                d&apos;envisager une dermopigmentation pour une condition médicale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-semibold text-charbon mb-8">
            Nos articles sur les conditions médicales
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
                La dermopigmentation au service du bien-être
              </h2>
              <div className="prose-custom">
                <p>
                  Certaines conditions médicales peuvent affecter l&apos;apparence et impacter
                  significativement la confiance en soi. La dermopigmentation offre des solutions
                  adaptées pour aider les personnes à retrouver une image positive d&apos;elles-mêmes.
                </p>
                <h3>Conditions pouvant bénéficier de la dermopigmentation</h3>
                <ul>
                  <li><strong>Alopécie et pelade</strong> : reconstruction des sourcils et densification capillaire</li>
                  <li><strong>Trichotillomanie</strong> : restauration des zones affectées</li>
                  <li><strong>Vitiligo</strong> : camouflage des zones dépigmentées</li>
                  <li><strong>Cicatrices</strong> : atténuation visuelle des cicatrices blanches</li>
                </ul>
                <p>
                  Notre approche est bienveillante et personnalisée. Nous comprenons que derrière
                  chaque demande se cache une histoire et un besoin profond de retrouver confiance.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-hover">
              <Image
                src="https://images.unsplash.com/photo-1594359123637-32fcb7aab042?w=800"
                alt="Accompagnement bienveillant en dermopigmentation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Les réponses aux questions sur la dermopigmentation pour conditions médicales"
      />

      {/* Related Section */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-playfair font-semibold text-charbon mb-4">
            Découvrez aussi
          </h2>
          <p className="text-lg text-charbon/70 mb-8 max-w-2xl mx-auto">
            La dermopigmentation réparatrice pour les reconstructions post-chirurgicales et les corrections esthétiques avancées.
          </p>
          <Link href="/dermopigmentation-reparatrice" className="btn-primary">
            Dermopigmentation réparatrice
          </Link>
        </div>
      </section>
    </>
  )
}
