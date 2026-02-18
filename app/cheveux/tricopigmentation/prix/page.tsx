'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const tarifsPrincipaux = [
  {
    zone: 'Calvitie complète',
    description: 'Traitement de l\'ensemble du crâne',
    prixMin: 3000,
    prixMax: 5000,
    seances: '3-4 séances',
    duree: '6-8h au total',
    popularite: 40,
  },
  {
    zone: 'Calvitie partielle (golfes)',
    description: 'Traitement des golfes temporaux uniquement',
    prixMin: 1500,
    prixMax: 2500,
    seances: '2-3 séances',
    duree: '4-5h au total',
    popularite: 85,
  },
  {
    zone: 'Tonsure (sommet)',
    description: 'Traitement du vertex / couronne',
    prixMin: 1800,
    prixMax: 3000,
    seances: '2-3 séances',
    duree: '4-6h au total',
    popularite: 70,
  },
  {
    zone: 'Densification générale',
    description: 'Ajout de densité sur cheveux clairsemés',
    prixMin: 2000,
    prixMax: 3500,
    seances: '2-3 séances',
    duree: '4-6h au total',
    popularite: 60,
  },
  {
    zone: 'Cicatrices (petites)',
    description: 'Camouflage de cicatrices jusqu\'à 10cm',
    prixMin: 500,
    prixMax: 1200,
    seances: '1-2 séances',
    duree: '2-3h au total',
    popularite: 45,
  },
  {
    zone: 'Cicatrices (grandes)',
    description: 'Cicatrices étendues de greffe ou accident',
    prixMin: 1000,
    prixMax: 2000,
    seances: '2-3 séances',
    duree: '4-5h au total',
    popularite: 30,
  },
]

const facteursInfluencant = [
  {
    facteur: 'Étendue de la zone',
    impact: 'Fort',
    description: 'Plus la surface à traiter est grande, plus le prix augmente',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    facteur: 'Nombre de séances',
    impact: 'Fort',
    description: 'Généralement 2-4 séances nécessaires pour un résultat optimal',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    facteur: 'Expérience du praticien',
    impact: 'Moyen',
    description: 'Les experts reconnus pratiquent des tarifs plus élevés',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    facteur: 'Localisation géographique',
    impact: 'Moyen',
    description: 'Paris et grandes villes généralement plus chers',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    facteur: 'Technique utilisée',
    impact: 'Faible',
    description: 'Pointillisme, effet rasé, effet densité peuvent varier',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    facteur: 'Retouches incluses',
    impact: 'Variable',
    description: 'Certains forfaits incluent les retouches, d\'autres non',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

const comparatifGreffe = [
  {
    critere: 'Prix moyen',
    tricopigmentation: '2 000€ - 4 000€',
    greffe: '3 000€ - 15 000€',
    avantage: 'tricopigmentation',
  },
  {
    critere: 'Durée de vie',
    tricopigmentation: '3-5 ans (entretien)',
    greffe: 'Permanent',
    avantage: 'greffe',
  },
  {
    critere: 'Invasivité',
    tricopigmentation: 'Non invasif',
    greffe: 'Chirurgical',
    avantage: 'tricopigmentation',
  },
  {
    critere: 'Temps de récupération',
    tricopigmentation: '2-3 jours',
    greffe: '2-4 semaines',
    avantage: 'tricopigmentation',
  },
  {
    critere: 'Résultat immédiat',
    tricopigmentation: 'Oui',
    greffe: 'Non (6-12 mois)',
    avantage: 'tricopigmentation',
  },
  {
    critere: 'Aspect naturel',
    tricopigmentation: 'Effet rasé/densité',
    greffe: 'Cheveux réels',
    avantage: 'greffe',
  },
]

const faqs = [
  {
    question: 'Combien coûte une tricopigmentation complète ?',
    answer: 'Une tricopigmentation complète (crâne entier) coûte entre 3 000€ et 5 000€ en France. Ce prix inclut généralement 3-4 séances. Pour une zone partielle (golfes ou tonsure), comptez entre 1 500€ et 3 000€.',
  },
  {
    question: 'Le prix inclut-il les retouches ?',
    answer: 'Cela dépend du praticien. Certains forfaits incluent une retouche à 1-2 mois, d\'autres non. Les retouches annuelles (entretien) sont généralement facturées séparément, entre 300€ et 800€ selon l\'étendue.',
  },
  {
    question: 'Pourquoi la tricopigmentation est moins chère que la greffe ?',
    answer: 'La tricopigmentation est une technique non chirurgicale ne nécessitant pas de bloc opératoire ni d\'anesthésie générale. Elle demande moins de temps et de ressources médicales. Cependant, elle nécessite un entretien régulier contrairement à la greffe qui est permanente.',
  },
  {
    question: 'Peut-on payer en plusieurs fois ?',
    answer: 'La plupart des praticiens proposent des facilités de paiement : paiement en 2-4 fois sans frais, ou échelonnement sur plusieurs mois. Certains acceptent également le financement par organismes de crédit.',
  },
  {
    question: 'La tricopigmentation est-elle remboursée ?',
    answer: 'Non, la tricopigmentation est considérée comme une procédure esthétique et n\'est pas remboursée par la Sécurité sociale. Certaines mutuelles peuvent participer partiellement, notamment pour les cas post-cancer ou cicatrices traumatiques.',
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
    title: 'Tricopigmentation ratée',
    slug: '/cheveux/tricopigmentation/ratee',
    excerpt: 'Solutions',
    image: '/placeholder-fix.svg',
    category: 'Correction',
  },
  {
    title: 'Dermopigmentation cheveux',
    slug: '/cheveux/dermopigmentation',
    excerpt: 'Alternative',
    image: '/placeholder-dermo.svg',
    category: 'Technique',
  },
]

export default function TricopigmentationPrixPage() {
  const [activeZone, setActiveZone] = useState<number | null>(null)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-slate-800 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Cheveux', href: '/cheveux' },
              { label: 'Tricopigmentation', href: '/cheveux/tricopigmentation' },
              { label: 'Prix', href: '/cheveux/tricopigmentation/prix' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tarifs 2024
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Prix <span className="text-blue-300">Tricopigmentation</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Guide complet des tarifs de tricopigmentation en France.
              Découvrez les prix par zone, les facteurs qui influencent le coût
              et comparez avec la greffe de cheveux.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-blue-300">1 500€</span>
                <p className="text-white/70 text-sm">à partir de</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-blue-300">3-4</span>
                <p className="text-white/70 text-sm">séances moyennes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-blue-300">3-5 ans</span>
                <p className="text-white/70 text-sm">durée de vie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs par zone */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Tarifs par zone de traitement
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Les prix varient selon l'étendue de la zone à traiter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tarifsPrincipaux.map((tarif, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-card overflow-hidden transition-all cursor-pointer ${
                  activeZone === index ? 'ring-2 ring-blue-500 transform scale-105' : 'hover:shadow-lg'
                }`}
                onClick={() => setActiveZone(activeZone === index ? null : index)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-charbon text-lg">{tarif.zone}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-600">
                        {tarif.prixMin.toLocaleString()}€
                      </span>
                      <span className="text-charbon/60 text-sm block">
                        à {tarif.prixMax.toLocaleString()}€
                      </span>
                    </div>
                  </div>
                  <p className="text-charbon/70 text-sm mb-4">{tarif.description}</p>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-50 rounded-lg p-2">
                      <span className="text-charbon/60">Séances</span>
                      <p className="font-medium text-charbon">{tarif.seances}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2">
                      <span className="text-charbon/60">Durée</span>
                      <p className="font-medium text-charbon">{tarif.duree}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-charbon/60">Popularité</span>
                      <span className="text-blue-600 font-medium">{tarif.popularite}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${tarif.popularite}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facteurs influençant le prix */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Facteurs influençant le prix
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Comprendre ce qui fait varier le coût de votre tricopigmentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {facteursInfluencant.map((facteur, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    {facteur.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-charbon">{facteur.facteur}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      facteur.impact === 'Fort' ? 'bg-red-100 text-red-600' :
                      facteur.impact === 'Moyen' ? 'bg-orange-100 text-orange-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      Impact {facteur.impact.toLowerCase()}
                    </span>
                  </div>
                </div>
                <p className="text-charbon/70 text-sm">{facteur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif avec greffe */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Tricopigmentation vs Greffe de cheveux
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Comparaison pour vous aider à choisir la solution adaptée
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-card overflow-hidden">
              <thead className="bg-charbon text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Critère</th>
                  <th className="px-6 py-4 text-center font-medium">Tricopigmentation</th>
                  <th className="px-6 py-4 text-center font-medium">Greffe de cheveux</th>
                </tr>
              </thead>
              <tbody>
                {comparatifGreffe.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-charbon">{row.critere}</td>
                    <td className={`px-6 py-4 text-center ${
                      row.avantage === 'tricopigmentation' ? 'text-green-600 font-medium' : 'text-charbon/70'
                    }`}>
                      {row.avantage === 'tricopigmentation' && (
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      )}
                      {row.tricopigmentation}
                    </td>
                    <td className={`px-6 py-4 text-center ${
                      row.avantage === 'greffe' ? 'text-green-600 font-medium' : 'text-charbon/70'
                    }`}>
                      {row.avantage === 'greffe' && (
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      )}
                      {row.greffe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-charbon/70 text-sm max-w-2xl mx-auto">
              La tricopigmentation est souvent complémentaire à la greffe : elle peut densifier
              visuellement une greffe ou camoufler les cicatrices post-opératoires.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-slate-800 to-charbon">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Demandez un devis personnalisé
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Chaque cas est unique. Un praticien pourra vous proposer un tarif adapté à votre situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cheveux/tricopigmentation" className="btn bg-white text-charbon hover:bg-slate-100">
              En savoir plus
            </Link>
            <Link href="/formations/tricopigmentation" className="btn bg-white/20 text-white hover:bg-white/30">
              Se former à la technique
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
