import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import { ArticleCard } from '@/components/ui/Card'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Dermopigmentation Réparatrice | Reconstruction et Correction Esthétique',
  description: 'Dermopigmentation réparatrice pour aréoles mammaires, cicatrices et reconstruction post-chirurgicale. Techniques médicales de dermographie corrective.',
  keywords: ['dermopigmentation réparatrice', 'aréole mammaire', 'reconstruction', 'cicatrice', 'tatouage médical'],
}

const articles = [
  {
    title: 'Dermopigmentation réparatrice : Techniques et applications',
    excerpt: 'La dermopigmentation réparatrice permet de corriger ou recréer des zones du corps altérées par la chirurgie, un accident ou une pathologie.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800',
    href: '/dermopigmentation-reparatrice',
    category: 'Technique',
    badge: 'Médical',
  },
  {
    title: 'Reconstruction de l\'aréole mammaire après mastectomie',
    excerpt: 'La dermopigmentation permet de recréer l\'apparence d\'une aréole et d\'un mamelon naturels après une reconstruction mammaire.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    href: '/dermopigmentation-reparatrice/areole-mammaire',
    category: 'Reconstruction',
    badge: 'Post-cancer',
  },
  {
    title: 'Tatouage grain de beauté : Esthétique ou reconstruction',
    excerpt: 'Le tatouage de grain de beauté peut être réalisé à des fins esthétiques ou pour reconstruire un grain de beauté retiré chirurgicalement.',
    image: 'https://images.unsplash.com/photo-1594359123637-32fcb7aab042?w=800',
    href: '/dermopigmentation-reparatrice/tatouage-grain-de-beaute',
    category: 'Esthétique',
  },
]

const applications = [
  {
    title: 'Reconstruction mammaire',
    description: 'Recréation de l\'aréole et du mamelon en 3D après mastectomie ou chirurgie reconstructrice',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Cicatrices',
    description: 'Atténuation des cicatrices blanches par repigmentation et harmonisation avec la peau environnante',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'Vitiligo',
    description: 'Camouflage des zones dépigmentées pour uniformiser l\'apparence de la peau',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Brûlures',
    description: 'Reconstruction esthétique des zones affectées par des brûlures anciennes',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    question: 'Qu\'est-ce que la dermopigmentation réparatrice ?',
    answer: 'La dermopigmentation réparatrice est une technique qui consiste à implanter des pigments dans le derme pour corriger ou recréer des zones du corps altérées suite à une chirurgie, un accident, une maladie ou un traitement médical. Elle utilise les mêmes principes que le maquillage permanent mais à des fins médicales ou correctives.',
  },
  {
    question: 'Qui peut bénéficier de la reconstruction d\'aréole mammaire ?',
    answer: 'Les femmes ayant subi une mastectomie (ablation du sein) suivie d\'une reconstruction mammaire peuvent bénéficier de la dermopigmentation pour recréer l\'apparence d\'une aréole et d\'un mamelon. Cette technique représente souvent la dernière étape du parcours de reconstruction.',
  },
  {
    question: 'La dermopigmentation réparatrice est-elle remboursée ?',
    answer: 'Dans certains cas, notamment pour la reconstruction après cancer du sein, la dermopigmentation peut être prise en charge par l\'Assurance Maladie. Les conditions et le niveau de remboursement varient selon les situations. Renseignez-vous auprès de votre médecin et de votre caisse d\'assurance.',
  },
  {
    question: 'Combien de temps faut-il attendre après une chirurgie ?',
    answer: 'Il est généralement recommandé d\'attendre au minimum 12 mois après une chirurgie avant de procéder à une dermopigmentation. Ce délai permet à la cicatrice d\'être suffisamment mature et stable. Votre chirurgien donnera son accord pour le traitement.',
  },
  {
    question: 'Toutes les cicatrices peuvent-elles être pigmentées ?',
    answer: 'Non, seules les cicatrices blanches (achromiques) et matures peuvent être pigmentées. Les cicatrices rouges, récentes, hypertrophiques ou chéloïdes ne sont pas éligibles. Un examen préalable par le praticien déterminera la faisabilité du traitement.',
  },
]

export default function DermopigmentationReparatricePage() {
  return (
    <>
      <Hero
        title="Dermopigmentation Réparatrice"
        subtitle="Reconstruction et correction esthétique"
        description="Techniques de dermopigmentation médicale pour reconstruire et corriger : aréoles mammaires, cicatrices, zones dépigmentées. Une approche bienveillante pour retrouver confiance."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200"
        imageAlt="Dermopigmentation réparatrice et reconstruction"
        size="md"
      />

      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Dermopigmentation réparatrice', href: '/dermopigmentation-reparatrice' },
          ]}
        />
      </div>

      {/* Applications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-4">
              Applications de la dermopigmentation réparatrice
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              La dermopigmentation réparatrice intervient dans de nombreuses situations pour améliorer l&apos;apparence et le bien-être
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-beige-creme rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-rose-pale flex items-center justify-center mb-4 text-rose-fonce">
                  {app.icon}
                </div>
                <h3 className="font-semibold text-charbon mb-2">{app.title}</h3>
                <p className="text-sm text-charbon/70">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-6">
                Reconstruire pour mieux vivre
              </h2>
              <div className="prose-custom">
                <p>
                  La dermopigmentation réparatrice va au-delà de l&apos;esthétique : elle participe
                  à la reconstruction de l&apos;image corporelle et au processus de guérison émotionnelle.
                  Que ce soit après un cancer, un accident ou une malformation, cette technique
                  offre une solution pour se réapproprier son corps.
                </p>
                <h3>L&apos;aréole mammaire : un symbole de renaissance</h3>
                <p>
                  Pour de nombreuses femmes ayant traversé un cancer du sein, la reconstruction
                  de l&apos;aréole mammaire par dermopigmentation représente l&apos;ultime étape de leur
                  parcours. Cette technique permet de recréer une aréole et un mamelon d&apos;aspect
                  naturel, redonnant ainsi au sein reconstruit son apparence complète.
                </p>
                <p>
                  Le résultat en 3D obtenu grâce aux techniques de dermopigmentation avancées
                  est saisissant de réalisme. La couleur, la forme et même l&apos;illusion du relief
                  sont recréés avec minutie pour un rendu harmonieux et naturel.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-hover">
              <Image
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800"
                alt="Dermopigmentation réparatrice professionnelle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-semibold text-charbon mb-8">
            Nos articles sur la dermopigmentation réparatrice
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.href} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Medical Notice */}
      <section className="container-custom py-12">
        <div className="bg-rose-pale/50 border border-rose-poudre rounded-2xl p-8">
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-full bg-rose-fonce/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-rose-fonce">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-semibold text-charbon mb-3">
                Accompagnement médical
              </h3>
              <p className="text-charbon/70 mb-4">
                La dermopigmentation réparatrice s&apos;inscrit souvent dans un parcours médical plus large.
                Nous recommandons de consulter votre médecin ou chirurgien avant d&apos;envisager ce type de
                traitement. Un délai de cicatrisation suffisant et l&apos;accord médical sont nécessaires
                pour garantir un résultat optimal et sécurisé.
              </p>
              <p className="text-sm text-charbon/60">
                En cas de reconstruction post-cancer, renseignez-vous sur les possibilités de prise en charge
                par l&apos;Assurance Maladie et les mutuelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Les réponses aux questions sur la dermopigmentation réparatrice"
      />

      {/* Related */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-playfair font-semibold text-charbon mb-4">
            Voir aussi
          </h2>
          <p className="text-lg text-charbon/70 mb-8 max-w-2xl mx-auto">
            Découvrez nos articles sur les conditions médicales et les solutions esthétiques adaptées.
          </p>
          <Link href="/conditions-medicales" className="btn-primary">
            Conditions médicales
          </Link>
        </div>
      </section>
    </>
  )
}
