'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const forfaits = [
  {
    categorie: 'Calvitie légère',
    description: 'Golfes frontaux ou début de tonsure',
    prixMin: 1200,
    prixMax: 2000,
    seances: '2 séances',
    inclus: ['Consultation initiale', 'Design personnalisé', '2 séances de pigmentation', '1 retouche à 6 semaines'],
  },
  {
    categorie: 'Calvitie modérée',
    description: 'Golfes + tonsure ou zone étendue',
    prixMin: 2000,
    prixMax: 3500,
    seances: '2-3 séances',
    inclus: ['Consultation initiale', 'Design personnalisé', '2-3 séances', '1 retouche incluse'],
    populaire: true,
  },
  {
    categorie: 'Calvitie complète',
    description: 'Traitement du crâne entier',
    prixMin: 3000,
    prixMax: 5000,
    seances: '3-4 séances',
    inclus: ['Consultation initiale', 'Design complet', '3-4 séances', 'Retouche incluse', 'Suivi personnalisé'],
  },
  {
    categorie: 'Cicatrices',
    description: 'Camouflage de cicatrices',
    prixMin: 400,
    prixMax: 1500,
    seances: '1-2 séances',
    inclus: ['Évaluation de la cicatrice', 'Pigmentation adaptée', 'Retouche si nécessaire'],
  },
]

const tarifsRetouches = [
  {
    type: 'Retouche 1-2 ans',
    description: 'Rafraîchissement léger',
    prix: '300€ - 600€',
  },
  {
    type: 'Retouche 2-3 ans',
    description: 'Repigmentation modérée',
    prix: '500€ - 900€',
  },
  {
    type: 'Retouche complète',
    description: 'Après 4+ ans',
    prix: '800€ - 1500€',
  },
]

const budgetConseils = [
  {
    conseil: 'Comparez plusieurs devis',
    description: 'Demandez au moins 3 consultations avant de vous décider',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    conseil: 'Privilégiez l\'expérience',
    description: 'Un praticien moins cher mais inexpérimenté peut coûter plus à corriger',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    conseil: 'Demandez ce qui est inclus',
    description: 'Certains forfaits incluent les retouches, d\'autres non',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    conseil: 'Prévoyez les retouches',
    description: 'Budgétez les retouches d\'entretien tous les 2-3 ans',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    question: 'Pourquoi les prix varient-ils autant ?',
    answer: 'Les tarifs varient selon : l\'étendue de la zone à traiter, le nombre de séances nécessaires, l\'expérience du praticien, la localisation géographique (Paris plus cher), et ce qui est inclus (retouches ou non). Un devis personnalisé après consultation est toujours recommandé.',
  },
  {
    question: 'La micropigmentation est-elle remboursée ?',
    answer: 'Non, la micropigmentation capillaire est considérée comme un acte esthétique et n\'est pas prise en charge par l\'Assurance Maladie. Certaines mutuelles peuvent offrir une participation pour les cas médicaux (alopécie pathologique, cicatrices post-cancer).',
  },
  {
    question: 'Peut-on payer en plusieurs fois ?',
    answer: 'Oui, la plupart des praticiens proposent des facilités de paiement : paiement échelonné sur 2-4 fois sans frais, ou financement via organismes de crédit. Renseignez-vous lors de la consultation.',
  },
  {
    question: 'Le prix inclut-il les retouches ?',
    answer: 'Cela dépend du praticien. Beaucoup incluent une retouche à 4-6 semaines dans le forfait initial. Les retouches d\'entretien (après 2-3 ans) sont généralement facturées séparément.',
  },
  {
    question: 'Est-ce moins cher qu\'une greffe de cheveux ?',
    answer: 'Généralement oui. Une micropigmentation complète coûte 3 000€-5 000€, tandis qu\'une greffe FUE peut coûter 5 000€-15 000€. Cependant, la micropigmentation nécessite des retouches, alors que la greffe est permanente.',
  },
]

const relatedArticles = [
  {
    title: 'Tricopigmentation',
    slug: '/cheveux/tricopigmentation',
    excerpt: 'Guide complet',
    image: '/placeholder-hair.svg',
    category: 'Guide',
  },
  {
    title: 'Dermopigmentation cheveux',
    slug: '/cheveux/dermopigmentation',
    excerpt: 'Technique',
    image: '/placeholder-dermo.svg',
    category: 'Technique',
  },
  {
    title: 'Tricopigmentation ratée',
    slug: '/cheveux/tricopigmentation/ratee',
    excerpt: 'Solutions',
    image: '/placeholder-fix.svg',
    category: 'Correction',
  },
]

export default function MicropigmentationPrixPage() {
  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-emerald-900/30 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Cheveux', href: '/cheveux' },
              { label: 'Micropigmentation prix', href: '/cheveux/micropigmentation-prix' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tarifs 2024
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Prix <span className="text-emerald-300">Micropigmentation Cheveux</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed text-shadow-sm">
              Guide complet des tarifs de micropigmentation capillaire en France.
              Forfaits par zone, retouches et conseils pour bien budgétiser.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-emerald-300">1 200€</span>
                <p className="text-white/70 text-sm">à partir de</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-emerald-300">5 000€</span>
                <p className="text-white/70 text-sm">traitement complet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forfaits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Forfaits par étendue
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Les tarifs varient principalement selon la surface à traiter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {forfaits.map((forfait, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-card overflow-hidden ${
                  forfait.populaire ? 'ring-2 ring-emerald-500' : ''
                }`}
              >
                {forfait.populaire && (
                  <div className="bg-emerald-500 text-white text-center py-2 text-sm font-medium">
                    Le plus demandé
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-charbon text-xl">{forfait.categorie}</h3>
                      <p className="text-charbon/60 text-sm">{forfait.description}</p>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                      {forfait.seances}
                    </span>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-charbon">
                      {forfait.prixMin.toLocaleString()}€
                    </span>
                    <span className="text-charbon/60"> - </span>
                    <span className="text-3xl font-bold text-charbon">
                      {forfait.prixMax.toLocaleString()}€
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-charbon mb-2">Ce qui est inclus :</h4>
                    <ul className="space-y-2">
                      {forfait.inclus.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-charbon/70">
                          <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retouches */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Tarifs des retouches
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              La micropigmentation nécessite un entretien régulier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tarifsRetouches.map((retouche, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <h3 className="font-semibold text-charbon text-lg mb-2">{retouche.type}</h3>
                <p className="text-charbon/60 text-sm mb-4">{retouche.description}</p>
                <span className="text-2xl font-bold text-emerald-600">{retouche.prix}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-2xl mx-auto bg-amber-50 rounded-xl p-6 text-center">
            <p className="text-amber-800">
              <strong>À noter :</strong> Prévoyez une retouche tous les 2-3 ans pour maintenir un résultat optimal.
              Le coût sur 10 ans reste inférieur à une greffe de cheveux.
            </p>
          </div>
        </div>
      </section>

      {/* Conseils budget */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Conseils pour votre budget
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {budgetConseils.map((conseil, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  {conseil.icon}
                </div>
                <h3 className="font-semibold text-charbon mb-2">{conseil.conseil}</h3>
                <p className="text-charbon/60 text-sm">{conseil.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-emerald-800 to-teal-800">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Obtenez un devis personnalisé
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Chaque cas est unique. Consultez un praticien pour un tarif adapté à votre situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cheveux/tricopigmentation" className="btn bg-white text-emerald-800 hover:bg-emerald-50">
              En savoir plus
            </Link>
            <Link href="/formations/tricopigmentation" className="btn bg-white/20 text-white hover:bg-white/30">
              Devenir praticien
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions sur les prix"
        description="Réponses à vos interrogations tarifaires"
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
