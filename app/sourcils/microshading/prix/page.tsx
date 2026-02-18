'use client'

import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const tarifs = [
  {
    nom: 'Microshading Complet',
    description: 'Première séance + retouche incluse (4-6 semaines après)',
    prix: '350€ - 500€',
    populaire: true,
    inclus: [
      'Consultation personnalisée',
      'Dessin préparatoire',
      'Première séance de pigmentation',
      'Retouche de perfectionnement',
      'Crème cicatrisante offerte',
    ],
  },
  {
    nom: 'Retouche annuelle',
    description: 'Pour maintenir l\'intensité après 12-18 mois',
    prix: '150€ - 250€',
    populaire: false,
    inclus: [
      'Évaluation du microshading existant',
      'Rafraîchissement de la couleur',
      'Ajustements si nécessaire',
    ],
  },
  {
    nom: 'Combo Brows',
    description: 'Microblading + Microshading pour un résultat hybride',
    prix: '400€ - 600€',
    populaire: false,
    inclus: [
      'Microblading tête du sourcil',
      'Microshading corps et queue',
      'Retouche incluse',
      'Effet hyper naturel',
    ],
  },
  {
    nom: 'Correction',
    description: 'Correction d\'un ancien maquillage permanent',
    prix: '250€ - 450€',
    populaire: false,
    inclus: [
      'Évaluation de la correction nécessaire',
      'Neutralisation des anciens pigments si besoin',
      'Nouveau microshading',
      'Retouche incluse',
    ],
  },
]

const facteursPrix = [
  {
    facteur: 'Expérience du praticien',
    description: 'Un expert certifié avec des années d\'expérience justifie un tarif plus élevé',
    impact: 'Élevé',
    icon: '👩‍⚕️',
  },
  {
    facteur: 'Localisation géographique',
    description: 'Paris et grandes villes sont généralement plus chers que les régions',
    impact: 'Moyen',
    icon: '📍',
  },
  {
    facteur: 'Qualité des pigments',
    description: 'Les pigments premium offrent une meilleure tenue et des couleurs stables',
    impact: 'Élevé',
    icon: '🎨',
  },
  {
    facteur: 'Standing du salon',
    description: 'Un institut haut de gamme inclut souvent des services supplémentaires',
    impact: 'Moyen',
    icon: '✨',
  },
  {
    facteur: 'Inclusions',
    description: 'Certains tarifs incluent la retouche, d\'autres non',
    impact: 'Élevé',
    icon: '📋',
  },
]

const faqs = [
  {
    question: 'Quel est le prix moyen d\'un microshading en France ?',
    answer: 'En France, le prix d\'un microshading varie entre 300€ et 600€ pour une prestation complète (première séance + retouche). Les tarifs moyens se situent autour de 400€. Paris et les grandes villes affichent généralement des prix plus élevés (400€-600€) que les régions (300€-450€).',
  },
  {
    question: 'La retouche est-elle incluse dans le prix ?',
    answer: 'Cela dépend des praticiens. Un tarif "tout compris" inclut généralement la retouche de perfectionnement (4-6 semaines après). Si le prix vous semble bas, vérifiez si la retouche est incluse - elle peut coûter 100€ à 200€ supplémentaires si facturée séparément.',
  },
  {
    question: 'Pourquoi les prix varient-ils autant ?',
    answer: 'Les écarts de prix s\'expliquent par l\'expérience du praticien, la qualité des pigments utilisés, la localisation du salon, les inclusions (retouche, produits de soin), et le standing de l\'établissement. Un prix trop bas peut être le signe d\'un manque d\'expérience ou de matériel de moindre qualité.',
  },
  {
    question: 'Le microshading est-il plus cher que le microblading ?',
    answer: 'Les deux techniques ont généralement des prix similaires, oscillant entre 300€ et 600€. Le combo brows (microblading + microshading) est légèrement plus cher car il combine les deux techniques (400€ à 650€).',
  },
  {
    question: 'Existe-t-il des facilités de paiement ?',
    answer: 'Beaucoup de praticiens proposent des paiements en plusieurs fois sans frais. Certains acceptent également les chèques cadeaux beauté ou les cartes cadeaux. N\'hésitez pas à demander lors de votre consultation.',
  },
  {
    question: 'Dois-je me méfier des prix très bas ?',
    answer: 'Oui, un prix anormalement bas (moins de 200€) doit vous alerter. Il peut indiquer un praticien peu expérimenté, des pigments de mauvaise qualité, des conditions d\'hygiène insuffisantes, ou l\'absence de retouche incluse. La qualité et la sécurité ont un coût.',
  },
]

const relatedArticles = [
  {
    title: 'Microshading guide complet',
    slug: '/sourcils/microshading',
    excerpt: 'Tout savoir sur la technique',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400',
    category: 'Technique',
  },
  {
    title: 'Formation microshading',
    slug: '/formations/microshading',
    excerpt: 'Devenir expert certifié',
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400',
    category: 'Formation',
  },
  {
    title: 'Microblading vs Microshading',
    slug: '/sourcils/microblading-vs-microshading',
    excerpt: 'Comparez les techniques',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    category: 'Comparatif',
  },
]

export default function MicroshadingPrixPage() {
  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-charbon to-or-rose/30 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-or-rose rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-poudre rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Sourcils', href: '/sourcils' },
              { label: 'Microshading', href: '/sourcils/microshading' },
              { label: 'Prix', href: '/sourcils/microshading/prix' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Guide Tarifaire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Prix du <span className="text-or-rose">Microshading</span> en 2024
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed max-w-3xl text-shadow-sm">
              Découvrez les tarifs du microshading en France, ce qui influence les prix
              et comment reconnaître un bon rapport qualité-prix.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-or-rose">300€</span>
                <p className="text-white/70 text-sm">prix minimum</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-or-rose">400€</span>
                <p className="text-white/70 text-sm">prix moyen</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-or-rose">600€</span>
                <p className="text-white/70 text-sm">haut de gamme</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grille tarifaire */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Grille tarifaire indicative
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Les prix moyens pratiqués en France
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tarifs.map((tarif, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 shadow-card border-2 transition-all hover:shadow-hover ${
                  tarif.populaire ? 'border-rose-fonce' : 'border-transparent'
                }`}
              >
                {tarif.populaire && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-fonce text-white px-4 py-1 rounded-full text-sm font-medium">
                    Le plus demandé
                  </div>
                )}

                <h3 className="font-semibold text-charbon text-lg mb-2 mt-2">{tarif.nom}</h3>
                <p className="text-charbon/60 text-sm mb-4">{tarif.description}</p>

                <div className="mb-6">
                  <span className="text-3xl font-playfair font-bold text-rose-fonce">{tarif.prix}</span>
                </div>

                <ul className="space-y-3">
                  {tarif.inclus.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-charbon/70">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facteurs de prix */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Ce qui influence le prix
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Comprendre pourquoi les tarifs varient d&apos;un praticien à l&apos;autre
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {facteursPrix.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-charbon">{item.facteur}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.impact === 'Élevé' ? 'bg-rose-pale text-rose-fonce' : 'bg-nude-rose/50 text-charbon/60'
                    }`}>
                      Impact {item.impact.toLowerCase()}
                    </span>
                  </div>
                </div>
                <p className="text-charbon/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseil prix */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-red-50 to-rose-pale/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">⚠️</span>
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold text-charbon mb-4">
                  Attention aux prix trop bas
                </h3>
                <p className="text-charbon/80 mb-4">
                  Un microshading à moins de 200€ doit vous alerter. Voici les risques potentiels :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-charbon/70">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    Praticien peu expérimenté ou non certifié
                  </li>
                  <li className="flex items-center gap-2 text-charbon/70">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    Pigments de mauvaise qualité (virage de couleur)
                  </li>
                  <li className="flex items-center gap-2 text-charbon/70">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    Conditions d&apos;hygiène insuffisantes
                  </li>
                  <li className="flex items-center gap-2 text-charbon/70">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    Retouche non incluse (coût caché)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions sur les prix"
        description="Réponses à vos questions tarifaires"
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
