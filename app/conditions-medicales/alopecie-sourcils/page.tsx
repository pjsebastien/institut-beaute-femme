'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const causesAlopecie = [
  {
    categorie: 'Causes hormonales',
    causes: [
      { nom: 'Ménopause', description: 'Baisse des œstrogènes affectant la pilosité' },
      { nom: 'Hypothyroïdie', description: 'Dysfonctionnement thyroïdien ralentissant la repousse' },
      { nom: 'Déséquilibre hormonal', description: 'SOPK, post-grossesse, etc.' },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    categorie: 'Causes médicales',
    causes: [
      { nom: 'Pelade (alopecia areata)', description: 'Maladie auto-immune' },
      { nom: 'Chimiothérapie', description: 'Effet secondaire des traitements' },
      { nom: 'Carences nutritionnelles', description: 'Fer, zinc, biotine, protéines' },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    categorie: 'Causes comportementales',
    causes: [
      { nom: 'Trichotillomanie', description: 'Arrachage compulsif des poils' },
      { nom: 'Épilation excessive', description: 'Dommages aux follicules à force d\'épilation' },
      { nom: 'Frottement répété', description: 'Habitude de se frotter les sourcils' },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
  {
    categorie: 'Autres causes',
    causes: [
      { nom: 'Vieillissement naturel', description: 'Raréfaction progressive avec l\'âge' },
      { nom: 'Cicatrices', description: 'Brûlures, accidents, chirurgies' },
      { nom: 'Dermite séborrhéique', description: 'Inflammation du cuir chevelu/sourcils' },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const solutions = [
  {
    solution: 'Microblading',
    type: 'Dermopigmentation',
    description: 'Technique poil par poil créant l\'illusion de vrais sourcils',
    efficacite: 95,
    duree: '1-2 ans',
    prix: '250€ - 450€',
  },
  {
    solution: 'Microshading',
    type: 'Dermopigmentation',
    description: 'Effet poudré pour une couverture plus importante',
    efficacite: 95,
    duree: '2-3 ans',
    prix: '250€ - 450€',
  },
  {
    solution: 'Sérums de croissance',
    type: 'Traitement topique',
    description: 'Stimuler la repousse naturelle si follicules intacts',
    efficacite: 50,
    duree: 'Usage continu',
    prix: '30€ - 100€/mois',
  },
  {
    solution: 'Minoxidil',
    type: 'Médicament',
    description: 'Prescription médicale pour stimuler la repousse',
    efficacite: 60,
    duree: 'Usage continu',
    prix: '15€ - 30€/mois',
  },
]

const quandConsulter = [
  'Perte soudaine et importante de sourcils',
  'Plaques sans poils sur les sourcils',
  'Perte accompagnée de démangeaisons ou rougeurs',
  'Perte dans d\'autres zones (cils, cheveux)',
  'Autres symptômes associés (fatigue, prise/perte de poids)',
]

const faqs = [
  {
    question: 'L\'alopécie des sourcils est-elle définitive ?',
    answer: 'Pas nécessairement. Certaines formes d\'alopécie sont réversibles une fois la cause traitée (carence, trouble thyroïdien, stress). La pelade peut aussi voir une repousse spontanée. Cependant, si les follicules sont endommagés (épilation excessive, cicatrices), la perte peut être permanente.',
  },
  {
    question: 'Le microblading fonctionne-t-il si mes sourcils repoussent ?',
    answer: 'Oui, le microblading se combine parfaitement avec vos vrais poils s\'ils repoussent. La pigmentation densifie l\'apparence et se fond avec les poils naturels. Si la repousse est complète, la pigmentation s\'estompera naturellement.',
  },
  {
    question: 'Dois-je consulter un médecin avant la dermopigmentation ?',
    answer: 'Oui, il est recommandé de consulter un dermatologue pour identifier la cause de l\'alopécie. Traiter la cause sous-jacente est important, et le médecin pourra confirmer que la dermopigmentation est adaptée à votre cas.',
  },
  {
    question: 'Le maquillage permanent est-il adapté aux sourcils clairsemés ?',
    answer: 'Absolument ! Le microblading et le microshading sont particulièrement efficaces pour les sourcils clairsemés. Ils permettent de créer l\'illusion de densité et de restructurer la forme, tout en gardant un aspect naturel.',
  },
  {
    question: 'Combien de temps dure le résultat ?',
    answer: 'Le microblading dure 1 à 2 ans, le microshading 2 à 3 ans. Des retouches d\'entretien permettent de maintenir le résultat. La durée dépend du type de peau, du mode de vie et de l\'exposition au soleil.',
  },
]

const relatedArticles = [
  {
    title: 'Pelade sourcils',
    slug: '/conditions-medicales/pelade/sourcils',
    excerpt: 'Cause auto-immune',
    image: '/placeholder-pelade.svg',
    category: 'Conditions',
  },
  {
    title: 'Trichotillomanie',
    slug: '/conditions-medicales/trichotillomanie',
    excerpt: 'Cause comportementale',
    image: '/placeholder-tricho.svg',
    category: 'Conditions',
  },
  {
    title: 'Microblading',
    slug: '/sourcils/microblading',
    excerpt: 'Solution esthétique',
    image: '/placeholder-microblading.svg',
    category: 'Technique',
  },
]

export default function AlopecieSourcilsPage() {
  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-amber-900/30 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Conditions médicales', href: '/conditions-medicales' },
              { label: 'Alopécie sourcils', href: '/conditions-medicales/alopecie-sourcils' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Causes & Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Alopécie <span className="text-amber-300">Sourcils</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Perte de sourcils, sourcils clairsemés ? Découvrez les causes possibles
              et les solutions pour retrouver des sourcils naturels et fournis.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#solutions" className="btn-primary">
                Voir les solutions
              </a>
              <a href="#causes" className="btn bg-white/10 text-white hover:bg-white/20">
                Comprendre les causes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section id="causes" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Pourquoi perd-on ses sourcils ?
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              L'alopécie des sourcils peut avoir plusieurs origines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {causesAlopecie.map((cat, index) => (
              <div key={index} className="bg-amber-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-charbon text-lg">{cat.categorie}</h3>
                </div>
                <div className="space-y-3">
                  {cat.causes.map((cause, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3">
                      <h4 className="font-medium text-charbon text-sm">{cause.nom}</h4>
                      <p className="text-charbon/60 text-xs">{cause.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quand consulter */}
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
                  Quand consulter un médecin ?
                </h3>
                <ul className="space-y-2">
                  {quandConsulter.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-charbon/80">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les solutions disponibles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {solutions.map((sol, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-card overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-charbon text-lg">{sol.solution}</h3>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                        {sol.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-charbon/70 text-sm mb-4">{sol.description}</p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-charbon/60">Efficacité</span>
                        <span className="font-medium text-amber-600">{sol.efficacite}%</span>
                      </div>
                      <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-500 rounded-full"
                          style={{ width: `${sol.efficacite}%` }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                      <div>
                        <span className="text-xs text-charbon/60">Durée</span>
                        <p className="font-medium text-charbon text-sm">{sol.duree}</p>
                      </div>
                      <div>
                        <span className="text-xs text-charbon/60">Prix</span>
                        <p className="font-medium text-amber-600 text-sm">{sol.prix}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Retrouvez des sourcils naturels
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            La dermopigmentation offre une solution efficace et durable pour tous types d'alopécie des sourcils.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sourcils/microblading" className="btn bg-white text-amber-600 hover:bg-amber-50">
              Découvrir le microblading
            </Link>
            <Link href="/sourcils/microshading" className="btn bg-white/20 text-white hover:bg-white/30">
              Découvrir le microshading
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Réponses sur l'alopécie des sourcils"
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
