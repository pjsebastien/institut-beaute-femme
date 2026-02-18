'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const typesCicatrices = [
  {
    type: 'Cicatrices chirurgicales',
    description: 'Post-opératoires, césariennes, chirurgies diverses',
    traitabilite: 'Excellente',
    considerations: 'Attendre 12-18 mois de maturation',
  },
  {
    type: 'Cicatrices traumatiques',
    description: 'Accidents, coupures, brûlures légères',
    traitabilite: 'Très bonne',
    considerations: 'Évaluer la texture avant traitement',
  },
  {
    type: 'Vergetures',
    description: 'Vergetures blanches/argentées (stade mature)',
    traitabilite: 'Bonne',
    considerations: 'Résultats variables selon profondeur',
  },
  {
    type: 'Cicatrices d\'acné',
    description: 'Marques atrophiques dépigmentées',
    traitabilite: 'Modérée',
    considerations: 'Peut nécessiter plusieurs séances',
  },
  {
    type: 'Cicatrices de greffe',
    description: 'Zones de prélèvement pour greffes de peau',
    traitabilite: 'Bonne',
    considerations: 'Texture peut varier',
  },
]

const processusComplet = [
  {
    phase: 'Évaluation',
    duree: 'Consultation',
    etapes: [
      'Analyse de la cicatrice (texture, couleur, taille)',
      'Évaluation de la maturité (minimum 12 mois)',
      'Test de compatibilité couleur',
      'Discussion des attentes réalistes',
    ],
  },
  {
    phase: 'Test',
    duree: '1 séance + 4-6 semaines',
    etapes: [
      'Pigmentation d\'une petite zone test',
      'Observation de la tenue du pigment',
      'Vérification de la réaction cutanée',
      'Ajustement de la couleur si nécessaire',
    ],
  },
  {
    phase: 'Traitement',
    duree: '1-3 séances',
    etapes: [
      'Pigmentation complète de la cicatrice',
      'Travail en dégradé pour un rendu naturel',
      'Retouche après cicatrisation',
    ],
  },
]

const resultatsAttendus = [
  {
    aspect: 'Atténuation visuelle',
    pourcentage: '60-80%',
    description: 'La cicatrice devient beaucoup moins visible',
  },
  {
    aspect: 'Durée du résultat',
    pourcentage: '2-5 ans',
    description: 'Selon la zone et le type de peau',
  },
  {
    aspect: 'Retouches',
    pourcentage: '1-2 ans',
    description: 'Intervalle recommandé pour maintenir le résultat',
  },
]

const contreIndications = [
  'Cicatrice récente (moins de 12 mois)',
  'Cicatrice chéloïde ou hypertrophique active',
  'Zone instable ou inflammée',
  'Maladie de peau active dans la zone',
  'Grossesse ou allaitement',
  'Traitement immunosuppresseur',
]

const faqs = [
  {
    question: 'La dermopigmentation peut-elle faire disparaître complètement une cicatrice ?',
    answer: 'Non, la dermopigmentation ne fait pas disparaître la cicatrice, elle la camoufle visuellement. La texture de la cicatrice reste, mais la couleur blanche est atténuée pour se fondre avec la peau environnante. Le résultat est une cicatrice beaucoup moins visible, mais pas invisible.',
  },
  {
    question: 'Combien de temps faut-il attendre avant de traiter une cicatrice ?',
    answer: 'Il faut attendre au minimum 12 mois, idéalement 18 mois après la blessure ou l\'intervention. La cicatrice doit être mature : stable en couleur, texture et taille. Une cicatrice encore rouge ou qui évolue n\'est pas prête pour la pigmentation.',
  },
  {
    question: 'Le pigment tient-il bien sur du tissu cicatriciel ?',
    answer: 'Le tissu cicatriciel peut retenir le pigment différemment de la peau normale. C\'est pourquoi un test préalable est essentiel. Généralement, plusieurs séances sont nécessaires pour atteindre l\'intensité souhaitée, et les retouches peuvent être plus fréquentes.',
  },
  {
    question: 'Peut-on traiter une cicatrice en relief (chéloïde) ?',
    answer: 'Les cicatrices chéloïdes ou hypertrophiques actives (en relief) sont contre-indiquées pour la dermopigmentation. Le traumatisme de la pigmentation peut stimuler la cicatrisation et aggraver la chéloïde. Si la cicatrice est stable depuis longtemps, une évaluation prudente est possible.',
  },
  {
    question: 'Combien coûte la pigmentation d\'une cicatrice ?',
    answer: 'Les tarifs varient selon la taille : de 150€ à 300€ pour une petite cicatrice (moins de 5cm), 300€ à 600€ pour une cicatrice moyenne, et 500€ à 1000€+ pour de grandes zones. Le test initial est souvent inclus ou facturé séparément (50-100€).',
  },
]

const relatedArticles = [
  {
    title: 'Vitiligo',
    slug: '/conditions-medicales/vitiligo',
    excerpt: 'Dépigmentation',
    image: '/placeholder-vitiligo.svg',
    category: 'Conditions',
  },
  {
    title: 'Cicatrice cuir chevelu',
    slug: '/cheveux/cicatrice-cuir-chevelu',
    excerpt: 'Spécifique cheveux',
    image: '/placeholder-scar.svg',
    category: 'Cheveux',
  },
  {
    title: 'Dermopigmentation réparatrice',
    slug: '/dermopigmentation-reparatrice',
    excerpt: 'Vue complète',
    image: '/placeholder-repair.svg',
    category: 'Technique',
  },
]

export default function PigmentationCicatriceBlanchePage() {
  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-stone-700 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-stone-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gray-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Conditions médicales', href: '/conditions-medicales' },
              { label: 'Cicatrice blanche', href: '/conditions-medicales/pigmentation-cicatrice-blanche' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
              </svg>
              Camouflage Pigmentaire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Pigmentation <span className="text-stone-300">Cicatrice Blanche</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Les cicatrices blanches (hypopigmentées) peuvent être camouflées par dermopigmentation.
              Redonnez de la couleur à vos cicatrices pour les rendre moins visibles.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-stone-300">60-80%</span>
                <p className="text-white/70 text-sm">d'atténuation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-stone-300">1-3</span>
                <p className="text-white/70 text-sm">séances</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-stone-300">2-5 ans</span>
                <p className="text-white/70 text-sm">durée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de cicatrices */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Cicatrices pouvant être traitées
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Différents types de cicatrices blanches répondent à la dermopigmentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {typesCicatrices.map((cicatrice, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl p-6">
                <h3 className="font-semibold text-charbon text-lg mb-2">{cicatrice.type}</h3>
                <p className="text-charbon/70 text-sm mb-4">{cicatrice.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs text-charbon/60">Traitabilité</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      cicatrice.traitabilite === 'Excellente' ? 'bg-green-100 text-green-700' :
                      cicatrice.traitabilite === 'Très bonne' ? 'bg-emerald-100 text-emerald-700' :
                      cicatrice.traitabilite === 'Bonne' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {cicatrice.traitabilite}
                    </span>
                  </div>
                  <p className="text-xs text-amber-700 bg-amber-50 rounded-lg p-2">
                    {cicatrice.considerations}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Le processus de traitement
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processusComplet.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-charbon">{phase.phase}</h3>
                    <span className="text-xs text-stone-500">{phase.duree}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.etapes.map((etape, idx) => (
                    <li key={idx} className="text-sm text-charbon/70 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 flex-shrink-0"></span>
                      {etape}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats attendus */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Résultats attendus
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {resultatsAttendus.map((resultat, index) => (
              <div key={index} className="text-center bg-stone-50 rounded-2xl p-6">
                <span className="text-3xl font-bold text-stone-700">{resultat.pourcentage}</span>
                <h3 className="font-semibold text-charbon mt-2">{resultat.aspect}</h3>
                <p className="text-charbon/60 text-sm mt-1">{resultat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contre-indications */}
      <section className="section-padding bg-red-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charbon mb-4">
                  Contre-indications
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {contreIndications.map((ci, index) => (
                    <div key={index} className="flex items-center gap-2 text-red-800 text-sm">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {ci}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-stone-700 to-stone-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Vos cicatrices méritent d'être moins visibles
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            La dermopigmentation peut transformer votre rapport à vos cicatrices
            en les rendant beaucoup moins apparentes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/conditions-medicales/vitiligo" className="btn bg-white text-stone-700 hover:bg-stone-50">
              Voir aussi : Vitiligo
            </Link>
            <Link href="/cheveux/cicatrice-cuir-chevelu" className="btn bg-white/20 text-white hover:bg-white/30">
              Cicatrices cuir chevelu
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Réponses sur la pigmentation des cicatrices"
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
