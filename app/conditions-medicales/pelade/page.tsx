'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const typesPelade = [
  {
    type: 'Pelade en plaques',
    description: 'La forme la plus courante : plaques rondes ou ovales sans cheveux',
    frequence: '80% des cas',
    evolution: 'Souvent régressive',
    dermopigmentation: 'Possible si zones stables',
  },
  {
    type: 'Pelade totale',
    description: 'Perte totale des cheveux du cuir chevelu',
    frequence: '10% des cas',
    evolution: 'Variable',
    dermopigmentation: 'Tricopigmentation possible',
  },
  {
    type: 'Pelade universelle',
    description: 'Perte de tous les poils du corps (cheveux, sourcils, cils...)',
    frequence: '5% des cas',
    evolution: 'Souvent chronique',
    dermopigmentation: 'Sourcils et scalp possibles',
  },
  {
    type: 'Pelade ophiasique',
    description: 'Perte en bande sur les côtés et l\'arrière du crâne',
    frequence: '5% des cas',
    evolution: 'Plus résistante',
    dermopigmentation: 'Camouflage possible',
  },
]

const solutionsDermopigmentation = [
  {
    zone: 'Cuir chevelu',
    technique: 'Tricopigmentation',
    description: 'Simulation de cheveux rasés ou densification des zones clairsemées',
    prerequis: 'Zone stable depuis plusieurs mois',
    efficacite: 85,
  },
  {
    zone: 'Sourcils',
    technique: 'Microblading / Microshading',
    description: 'Reconstruction de sourcils naturels ou effet maquillé',
    prerequis: 'Zone stable, pas de repousse active',
    efficacite: 90,
  },
  {
    zone: 'Contour des yeux',
    technique: 'Eye-liner permanent',
    description: 'Renforcement du regard en cas de perte de cils',
    prerequis: 'Peau saine autour des yeux',
    efficacite: 90,
  },
]

const accompagnement = [
  {
    aspect: 'Médical',
    description: 'Consultation dermatologue pour diagnostic et traitement éventuel',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    aspect: 'Psychologique',
    description: 'La pelade peut affecter l\'estime de soi, un soutien est recommandé',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    aspect: 'Esthétique',
    description: 'La dermopigmentation comme solution complémentaire',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
]

const faqs = [
  {
    question: 'La dermopigmentation est-elle adaptée à la pelade ?',
    answer: 'Oui, la dermopigmentation peut être une excellente solution pour la pelade, notamment pour les sourcils et le cuir chevelu. L\'essentiel est d\'attendre que les zones soient stables (pas de repousse ni d\'extension active) avant de procéder. Une consultation avec votre dermatologue est recommandée.',
  },
  {
    question: 'Que se passe-t-il si mes cheveux repoussent après la dermopigmentation ?',
    answer: 'Si vos cheveux repoussent (ce qui est possible avec la pelade), la dermopigmentation se fondra avec vos vrais cheveux. Ce n\'est pas un problème, au contraire : la pigmentation densifiera l\'apparence. Si la repousse est totale, la dermopigmentation s\'estompera naturellement.',
  },
  {
    question: 'La pelade peut-elle revenir après la dermopigmentation ?',
    answer: 'Malheureusement oui, la pelade est une maladie auto-immune imprévisible. De nouvelles plaques peuvent apparaître, y compris sur des zones traitées. C\'est pourquoi une stabilisation préalable est importante, et des retouches peuvent être nécessaires.',
  },
  {
    question: 'La dermopigmentation est-elle remboursée pour la pelade ?',
    answer: 'En général non, la dermopigmentation est considérée comme esthétique. Cependant, certaines mutuelles peuvent participer pour les cas médicaux avérés. Renseignez-vous auprès de votre mutuelle avec un certificat médical.',
  },
  {
    question: 'Combien de temps dure la dermopigmentation avec une pelade ?',
    answer: 'La durée est similaire aux cas classiques : 1-3 ans pour le microblading sourcils, 3-5 ans pour la tricopigmentation. La peau des patients atteints de pelade réagit généralement normalement à la pigmentation.',
  },
]

const relatedArticles = [
  {
    title: 'Pelade sourcils',
    slug: '/conditions-medicales/pelade/sourcils',
    excerpt: 'Focus sourcils',
    image: '/placeholder-pelade.svg',
    category: 'Conditions',
  },
  {
    title: 'Alopécie sourcils',
    slug: '/conditions-medicales/alopecie-sourcils',
    excerpt: 'Autres causes',
    image: '/placeholder-alopecie.svg',
    category: 'Conditions',
  },
  {
    title: 'Tricopigmentation',
    slug: '/cheveux/tricopigmentation',
    excerpt: 'Pour le cuir chevelu',
    image: '/placeholder-hair.svg',
    category: 'Technique',
  },
]

export default function PeladePage() {
  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-violet-900/30 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-violet-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Conditions médicales', href: '/conditions-medicales' },
              { label: 'Pelade', href: '/conditions-medicales/pelade' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Alopecia Areata
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              <span className="text-violet-300">Pelade</span> chez la Femme
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              La pelade (alopecia areata) touche environ 2% de la population.
              Découvrez comment la dermopigmentation peut vous aider à retrouver
              confiance en complément d'un suivi médical.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/conditions-medicales/pelade/sourcils" className="btn-primary">
                Focus sourcils
              </Link>
              <Link href="/cheveux/tricopigmentation" className="btn bg-white/10 text-white hover:bg-white/20">
                Cuir chevelu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types de pelade */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les différentes formes de pelade
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Comprendre votre type de pelade pour mieux envisager les solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {typesPelade.map((type, index) => (
              <div key={index} className="bg-violet-50 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-charbon text-lg">{type.type}</h3>
                  <span className="bg-violet-100 text-violet-700 px-2 py-1 rounded-full text-xs">
                    {type.frequence}
                  </span>
                </div>
                <p className="text-charbon/70 text-sm mb-4">{type.description}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-xs text-charbon/60 uppercase">Évolution</span>
                    <p className="text-charbon">{type.evolution}</p>
                  </div>
                  <div>
                    <span className="text-xs text-charbon/60 uppercase">Dermopigmentation</span>
                    <p className="text-violet-700">{type.dermopigmentation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Solutions de dermopigmentation
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Techniques adaptées selon la zone touchée
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solutionsDermopigmentation.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-charbon text-lg">{solution.zone}</h3>
                  <span className="bg-violet-100 text-violet-700 px-2 py-1 rounded-full text-xs">
                    {solution.technique}
                  </span>
                </div>
                <p className="text-charbon/70 text-sm mb-4">{solution.description}</p>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-charbon/60 uppercase">Prérequis</span>
                    <p className="text-sm text-charbon">{solution.prerequis}</p>
                  </div>
                  <div>
                    <span className="text-xs text-charbon/60 uppercase">Efficacité</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-2 bg-violet-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-violet-500 rounded-full"
                          style={{ width: `${solution.efficacite}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-violet-600">{solution.efficacite}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnement global */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Un accompagnement global
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              La pelade nécessite une approche pluridisciplinaire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {accompagnement.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-violet-100 rounded-full flex items-center justify-center text-violet-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-charbon text-lg mb-2">{item.aspect}</h3>
                <p className="text-charbon/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-violet-700 to-purple-700">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            La pelade ne définit pas qui vous êtes
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Des solutions existent pour vous aider à vous sentir bien dans votre peau.
            La dermopigmentation peut être un premier pas vers la confiance retrouvée.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/conditions-medicales/pelade/sourcils" className="btn bg-white text-violet-700 hover:bg-violet-50">
              Solutions sourcils
            </Link>
            <Link href="/cheveux/tricopigmentation" className="btn bg-white/20 text-white hover:bg-white/30">
              Solutions cuir chevelu
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Réponses sur la pelade et la dermopigmentation"
      />

      {/* Author & Related */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AuthorBox />
            <RelatedArticles articles={relatedArticles} />
          </div>
        </div>
      </section>
    </article>
  )
}
