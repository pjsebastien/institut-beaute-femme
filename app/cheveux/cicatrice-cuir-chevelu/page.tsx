'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const typesCicatrices = [
  {
    id: 'greffe-fut',
    type: 'Cicatrice FUT (bandelette)',
    description: 'Cicatrice linéaire à l\'arrière du crâne suite à une greffe par bandelette',
    caracteristiques: ['Ligne horizontale 15-25cm', 'Zone donneuse', 'Souvent visible cheveux courts'],
    traitement: 'Excellent candidat à la tricopigmentation',
    difficulte: 'modere',
    efficacite: 90,
  },
  {
    id: 'greffe-fue',
    type: 'Cicatrices FUE (multiples)',
    description: 'Petites cicatrices rondes dispersées suite à extraction folliculaire',
    caracteristiques: ['Points blancs multiples', 'Moins visibles', 'Zone donneuse'],
    traitement: 'Bonne réponse à la tricopigmentation',
    difficulte: 'facile',
    efficacite: 95,
  },
  {
    id: 'traumatique',
    type: 'Cicatrice traumatique',
    description: 'Suite à un accident, blessure ou brûlure',
    caracteristiques: ['Forme variable', 'Texture irrégulière possible', 'Peut être en relief'],
    traitement: 'Évaluation au cas par cas',
    difficulte: 'variable',
    efficacite: 75,
  },
  {
    id: 'chirurgicale',
    type: 'Cicatrice chirurgicale',
    description: 'Suite à une intervention neurochirurgicale ou autre',
    caracteristiques: ['Ligne précise', 'Parfois longue', 'Peut traverser cheveux'],
    traitement: 'Bonne réponse généralement',
    difficulte: 'modere',
    efficacite: 85,
  },
  {
    id: 'lifting',
    type: 'Cicatrice de lifting',
    description: 'Cicatrices péri-auriculaires suite à lifting facial',
    caracteristiques: ['Près des oreilles', 'Zone hairline', 'Fine généralement'],
    traitement: 'Camouflage efficace',
    difficulte: 'facile',
    efficacite: 90,
  },
]

const processusTraitement = [
  {
    etape: 1,
    titre: 'Évaluation de la cicatrice',
    description: 'Analyse de la texture, couleur, taille et emplacement de la cicatrice',
    points: ['Type de cicatrice', 'État du tissu cicatriciel', 'Attentes réalistes'],
  },
  {
    etape: 2,
    titre: 'Test de pigmentation',
    description: 'Petit test sur une zone discrète pour vérifier la prise du pigment',
    points: ['Réaction du tissu', 'Tenue du pigment', 'Ajustement de la technique'],
  },
  {
    etape: 3,
    titre: 'Séance de pigmentation',
    description: 'Application des pigments point par point sur toute la cicatrice',
    points: ['Dégradé naturel', 'Intégration aux cheveux', 'Plusieurs passages'],
  },
  {
    etape: 4,
    titre: 'Retouche (si nécessaire)',
    description: 'Perfection du résultat après cicatrisation initiale',
    points: ['Zones manquantes', 'Intensification', 'Finition'],
  },
]

const avantApresPoints = [
  {
    avant: 'Cicatrice blanche visible',
    apres: 'Cicatrice fondue dans le cuir chevelu',
  },
  {
    avant: 'Obligé de garder cheveux longs',
    apres: 'Liberté de coupe courte',
  },
  {
    avant: 'Gêne en cas de vent, baignade',
    apres: 'Confiance retrouvée',
  },
  {
    avant: 'Questions embarrassantes',
    apres: 'Cicatrice invisible au quotidien',
  },
]

const tarifs = [
  {
    taille: 'Petite cicatrice',
    description: 'Jusqu\'à 5cm',
    prix: '300€ - 600€',
    seances: '1-2 séances',
  },
  {
    taille: 'Cicatrice moyenne',
    description: '5-15cm (type FUT)',
    prix: '600€ - 1200€',
    seances: '2 séances',
  },
  {
    taille: 'Grande cicatrice',
    description: 'Plus de 15cm ou zones multiples',
    prix: '1000€ - 2000€',
    seances: '2-3 séances',
  },
]

const faqs = [
  {
    question: 'La tricopigmentation fonctionne-t-elle sur toutes les cicatrices ?',
    answer: 'La plupart des cicatrices du cuir chevelu répondent bien à la tricopigmentation. Les cicatrices FUT/FUE, chirurgicales et traumatiques légères sont d\'excellents candidats. Les cicatrices très en relief, chéloïdes ou brûlées sévèrement peuvent avoir des résultats variables et nécessitent une évaluation préalable.',
  },
  {
    question: 'Combien de séances pour camoufler une cicatrice ?',
    answer: 'Généralement 1 à 2 séances suffisent pour les petites cicatrices. Une cicatrice FUT (bandelette) nécessite souvent 2 séances. Les grandes cicatrices traumatiques peuvent demander 2-3 séances. La cicatrice doit être mature (au moins 6 mois) avant traitement.',
  },
  {
    question: 'Le camouflage est-il permanent ?',
    answer: 'Le camouflage dure 3-5 ans avant de s\'estomper progressivement. Une retouche est ensuite nécessaire pour maintenir le résultat. Les cicatrices peuvent nécessiter des retouches plus fréquentes car le tissu cicatriciel retient parfois moins bien les pigments.',
  },
  {
    question: 'Puis-je camoufler une cicatrice récente ?',
    answer: 'Il faut attendre que la cicatrice soit mature, soit environ 6 à 12 mois après la blessure ou l\'intervention. La cicatrice doit être stable, sans rougeur active ni évolution. Un test préalable peut être réalisé pour vérifier la réponse du tissu.',
  },
  {
    question: 'Est-ce douloureux sur une cicatrice ?',
    answer: 'Le tissu cicatriciel est souvent moins sensible que la peau normale, donc la procédure peut être moins inconfortable. Cependant, certaines cicatrices peuvent présenter des zones plus sensibles. Une crème anesthésiante est généralement appliquée.',
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
    title: 'Prix micropigmentation',
    slug: '/cheveux/micropigmentation-prix',
    excerpt: 'Tarifs',
    image: '/placeholder-price.svg',
    category: 'Prix',
  },
]

export default function CicatriceCuirCheveluPage() {
  const [activeCicatrice, setActiveCicatrice] = useState('greffe-fut')
  const cicatriceActive = typesCicatrices.find(c => c.id === activeCicatrice)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-purple-900/30 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Cheveux', href: '/cheveux' },
              { label: 'Cicatrice cuir chevelu', href: '/cheveux/cicatrice-cuir-chevelu' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Camouflage & Correction
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Cicatrice <span className="text-purple-300">Cuir Chevelu</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Camouflage des cicatrices du cuir chevelu par tricopigmentation.
              Cicatrices de greffe, accidents ou chirurgies : retrouvez votre confiance.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-purple-300">90%</span>
                <p className="text-white/70 text-sm">d'efficacité moyenne</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-purple-300">1-2</span>
                <p className="text-white/70 text-sm">séances</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-purple-300">300€</span>
                <p className="text-white/70 text-sm">à partir de</p>
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
              Types de cicatrices traitables
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Sélectionnez votre type de cicatrice pour en savoir plus
            </p>
          </div>

          {/* Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {typesCicatrices.map((cicatrice) => (
              <button
                key={cicatrice.id}
                onClick={() => setActiveCicatrice(cicatrice.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCicatrice === cicatrice.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-purple-100 text-charbon hover:bg-purple-200'
                }`}
              >
                {cicatrice.type}
              </button>
            ))}
          </div>

          {/* Active cicatrice details */}
          {cicatriceActive && (
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-card">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-charbon mb-4">
                    {cicatriceActive.type}
                  </h3>
                  <p className="text-charbon/70 mb-6">{cicatriceActive.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-charbon/60 uppercase mb-2">Caractéristiques</h4>
                      <ul className="space-y-1">
                        {cicatriceActive.caracteristiques.map((carac, idx) => (
                          <li key={idx} className="text-sm text-charbon flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                            {carac}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-purple-100">
                      <h4 className="text-sm font-medium text-charbon/60 uppercase mb-2">Traitement</h4>
                      <p className="text-charbon">{cicatriceActive.traitement}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-purple-100">
                    <h4 className="font-semibold text-charbon mb-4">Efficacité du camouflage</h4>
                    <div className="relative h-4 bg-purple-100 rounded-full overflow-hidden mb-2">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                        style={{ width: `${cicatriceActive.efficacite}%` }}
                      />
                    </div>
                    <p className="text-right text-sm font-medium text-purple-600">
                      {cicatriceActive.efficacite}% d'efficacité
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-purple-100">
                    <h4 className="font-semibold text-charbon mb-4">Difficulté de traitement</h4>
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                      cicatriceActive.difficulte === 'facile' ? 'bg-green-100 text-green-700' :
                      cicatriceActive.difficulte === 'modere' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {cicatriceActive.difficulte === 'facile' ? 'Facile' :
                       cicatriceActive.difficulte === 'modere' ? 'Modérée' : 'Variable'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Avant/Après */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Ce que ça change
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {avantApresPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-xl p-4">
                    <span className="text-xs text-red-600 font-medium uppercase">Avant</span>
                    <p className="text-charbon mt-1">{point.avant}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <span className="text-xs text-green-600 font-medium uppercase">Après</span>
                    <p className="text-charbon mt-1">{point.apres}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Comment ça se passe ?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {processusTraitement.map((etape, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                    {etape.etape}
                  </div>
                  {index < processusTraitement.length - 1 && (
                    <div className="w-0.5 h-full bg-purple-100 mt-2"></div>
                  )}
                </div>
                <div className="bg-purple-50 rounded-2xl p-6 flex-grow">
                  <h3 className="font-semibold text-charbon text-lg mb-2">{etape.titre}</h3>
                  <p className="text-charbon/70 mb-3">{etape.description}</p>
                  <ul className="space-y-1">
                    {etape.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-purple-700 flex items-center gap-2">
                        <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="section-padding bg-purple-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Tarifs camouflage cicatrices
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tarifs.map((tarif, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <h3 className="font-semibold text-charbon text-lg mb-1">{tarif.taille}</h3>
                <p className="text-charbon/60 text-sm mb-4">{tarif.description}</p>
                <span className="text-2xl font-bold text-purple-600">{tarif.prix}</span>
                <p className="text-charbon/60 text-sm mt-2">{tarif.seances}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-purple-800 to-indigo-800">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Libérez-vous de votre cicatrice
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            La tricopigmentation peut transformer votre quotidien en rendant votre cicatrice invisible
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cheveux/tricopigmentation" className="btn bg-white text-purple-800 hover:bg-purple-50">
              Guide tricopigmentation
            </Link>
            <Link href="/cheveux/micropigmentation-prix" className="btn bg-white/20 text-white hover:bg-white/30">
              Voir tous les tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Réponses sur le camouflage des cicatrices"
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
