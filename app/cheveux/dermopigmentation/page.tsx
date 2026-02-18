'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const techniques = [
  {
    id: 'effet-rase',
    nom: 'Effet rasé',
    description: 'Simulation d\'un crâne fraîchement rasé avec des points réguliers',
    ideal: 'Calvitie complète, crâne rasé volontairement',
    resultat: 'Aspect de cheveux courts et denses',
    duree: '3-5 ans',
    popularite: 85,
  },
  {
    id: 'densification',
    nom: 'Densification',
    description: 'Ajout de points entre les cheveux existants pour plus de densité',
    ideal: 'Cheveux clairsemés, alopécie diffuse',
    resultat: 'Illusion de cheveux plus épais',
    duree: '3-5 ans',
    popularite: 70,
  },
  {
    id: 'camouflage-cicatrice',
    nom: 'Camouflage cicatrices',
    description: 'Pigmentation des zones cicatricielles pour masquer les marques',
    ideal: 'Cicatrices post-greffe, accidents, chirurgies',
    resultat: 'Cicatrices moins visibles',
    duree: '3-5 ans',
    popularite: 60,
  },
]

const etapesProcessus = [
  {
    etape: 1,
    titre: 'Consultation',
    description: 'Analyse de votre cuir chevelu, définition des objectifs et du design',
    duree: '30-45 min',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    etape: 2,
    titre: 'Séance 1',
    description: 'Première application des pigments, création de la base',
    duree: '2-4h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    etape: 3,
    titre: 'Cicatrisation',
    description: 'Phase de guérison avec estompage naturel de l\'intensité',
    duree: '2-3 semaines',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    etape: 4,
    titre: 'Séance 2',
    description: 'Densification et perfection du résultat',
    duree: '2-3h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    etape: 5,
    titre: 'Séance 3 (optionnelle)',
    description: 'Finition et ajustements si nécessaire',
    duree: '1-2h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const avantagesInconvenients = {
  avantages: [
    'Non chirurgical et non invasif',
    'Résultat immédiat visible',
    'Pas de cicatrice ni de période de récupération',
    'Prix plus accessible que la greffe',
    'Compatible avec les cheveux existants',
    'Ajustable et réversible dans le temps',
  ],
  inconvenients: [
    'Ne fait pas pousser de vrais cheveux',
    'Nécessite un entretien (retouches)',
    'Durée de vie limitée (3-5 ans)',
    'Résultat optimal en cheveux rasés courts',
    'Choix du praticien crucial',
  ],
}

const candidatsIdeaux = [
  {
    profil: 'Calvitie masculine',
    description: 'Homme avec alopécie androgénétique',
    compatible: true,
  },
  {
    profil: 'Alopécie féminine',
    description: 'Femme avec cheveux clairsemés',
    compatible: true,
  },
  {
    profil: 'Post-greffe',
    description: 'Cicatrices ou zones sans densité après greffe',
    compatible: true,
  },
  {
    profil: 'Cicatrices traumatiques',
    description: 'Accidents, brûlures, chirurgies',
    compatible: true,
  },
  {
    profil: 'Pelade / Alopécie areata',
    description: 'Zones sans cheveux localisées',
    compatible: true,
  },
  {
    profil: 'Cheveux longs style',
    description: 'Personnes souhaitant garder des cheveux longs',
    compatible: false,
  },
]

const faqs = [
  {
    question: 'Quelle est la différence entre dermopigmentation et tricopigmentation ?',
    answer: 'Les deux termes désignent la même technique : l\'implantation de pigments dans le cuir chevelu pour simuler l\'apparence de cheveux. "Tricopigmentation" est le terme le plus utilisé en France, tandis que "dermopigmentation capillaire" ou "scalp micropigmentation" (SMP) sont des équivalents.',
  },
  {
    question: 'La dermopigmentation empêche-t-elle une future greffe ?',
    answer: 'Non, la dermopigmentation n\'empêche pas une greffe de cheveux ultérieure. Les deux sont même souvent combinées : la greffe pour les cheveux réels, la dermopigmentation pour densifier visuellement et camoufler les cicatrices du prélèvement.',
  },
  {
    question: 'Combien de temps dure la dermopigmentation ?',
    answer: 'La dermopigmentation dure en moyenne 3 à 5 ans avant de nécessiter une retouche. L\'estompage est progressif et dépend de facteurs comme l\'exposition au soleil, le type de peau et les soins apportés.',
  },
  {
    question: 'Est-ce douloureux ?',
    answer: 'La plupart des patients décrivent une sensation de grattage ou de picotements légèrement inconfortables mais supportables. Une crème anesthésiante peut être appliquée. Le cuir chevelu est moins sensible que d\'autres zones du visage.',
  },
  {
    question: 'Peut-on nager ou faire du sport après ?',
    answer: 'Il est recommandé d\'éviter la piscine, le sauna et le sport intense pendant 5-7 jours après chaque séance. Après cicatrisation complète, toutes les activités sont possibles sans restriction.',
  },
]

const relatedArticles = [
  {
    title: 'Tricopigmentation',
    slug: '/cheveux/tricopigmentation',
    excerpt: 'Guide détaillé',
    image: '/placeholder-hair.svg',
    category: 'Guide',
  },
  {
    title: 'Prix micropigmentation',
    slug: '/cheveux/micropigmentation-prix',
    excerpt: 'Tarifs 2024',
    image: '/placeholder-price.svg',
    category: 'Prix',
  },
  {
    title: 'Cicatrice cuir chevelu',
    slug: '/cheveux/cicatrice-cuir-chevelu',
    excerpt: 'Solutions',
    image: '/placeholder-scar.svg',
    category: 'Correction',
  },
]

export default function DermopigmentationCheveuxPage() {
  const [activeTechnique, setActiveTechnique] = useState('effet-rase')
  const techniqueActive = techniques.find(t => t.id === activeTechnique)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-slate-800 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-slate-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Cheveux', href: '/cheveux' },
              { label: 'Dermopigmentation', href: '/cheveux/dermopigmentation' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Alternative non chirurgicale
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Dermopigmentation <span className="text-slate-300">Cheveux</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              La dermopigmentation capillaire crée l'illusion de cheveux plus denses
              sans chirurgie. Idéale pour les calvities, cicatrices et zones clairsemées.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-slate-300">100%</span>
                <p className="text-white/70 text-sm">non invasif</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-slate-300">2-3</span>
                <p className="text-white/70 text-sm">séances</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-slate-300">3-5 ans</span>
                <p className="text-white/70 text-sm">durée de vie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les différentes techniques
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Choisissez l'approche adaptée à votre situation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Technique selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {techniques.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTechnique(tech.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTechnique === tech.id
                      ? 'bg-charbon text-white shadow-lg'
                      : 'bg-slate-100 text-charbon hover:bg-slate-200'
                  }`}
                >
                  {tech.nom}
                </button>
              ))}
            </div>

            {/* Technique details */}
            {techniqueActive && (
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-card">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-charbon mb-4">
                      {techniqueActive.nom}
                    </h3>
                    <p className="text-charbon/70 text-lg mb-6">
                      {techniqueActive.description}
                    </p>

                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 border border-slate-100">
                        <span className="text-xs text-charbon/60 uppercase">Idéal pour</span>
                        <p className="font-medium text-charbon mt-1">{techniqueActive.ideal}</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-slate-100">
                        <span className="text-xs text-charbon/60 uppercase">Résultat</span>
                        <p className="font-medium text-charbon mt-1">{techniqueActive.resultat}</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-slate-100">
                        <span className="text-xs text-charbon/60 uppercase">Durée de vie</span>
                        <p className="font-medium text-charbon mt-1">{techniqueActive.duree}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100">
                      <h4 className="font-semibold text-charbon mb-4">Popularité de cette technique</h4>
                      <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden mb-2">
                        <div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-slate-600 to-slate-400 rounded-full transition-all duration-500"
                          style={{ width: `${techniqueActive.popularite}%` }}
                        />
                      </div>
                      <p className="text-right text-sm font-medium text-slate-600">
                        {techniqueActive.popularite}% des patients
                      </p>
                    </div>

                    <div className="mt-6 text-center">
                      <Link
                        href="/cheveux/tricopigmentation/prix"
                        className="btn-primary"
                      >
                        Voir les tarifs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Le processus complet
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              De la consultation au résultat final
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

              {etapesProcessus.map((etape, index) => (
                <div key={index} className="relative flex gap-6 mb-8 last:mb-0">
                  <div className="w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center z-10 flex-shrink-0 text-slate-600">
                    {etape.icon}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-card flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-sm text-slate-500">Étape {etape.etape}</span>
                        <h3 className="font-semibold text-charbon text-lg">{etape.titre}</h3>
                      </div>
                      <span className="bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-600">
                        {etape.duree}
                      </span>
                    </div>
                    <p className="text-charbon/70">{etape.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages / Inconvénients */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Avantages & Limites
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-semibold text-green-700 text-lg mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Avantages
              </h3>
              <ul className="space-y-3">
                {avantagesInconvenients.avantages.map((av, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-green-800">
                    <span className="text-green-500 mt-1">✓</span>
                    {av}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="font-semibold text-orange-700 text-lg mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Limites à connaître
              </h3>
              <ul className="space-y-3">
                {avantagesInconvenients.inconvenients.map((inc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-orange-800">
                    <span className="text-orange-500 mt-1">!</span>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Candidats */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Pour qui est-ce adapté ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {candidatsIdeaux.map((candidat, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-card border-l-4 ${
                  candidat.compatible ? 'border-green-400' : 'border-red-400'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    candidat.compatible ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {candidat.compatible ? '✓' : '✗'}
                  </div>
                  <h3 className="font-semibold text-charbon">{candidat.profil}</h3>
                </div>
                <p className="text-charbon/70 text-sm ml-11">{candidat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-slate-800 to-charbon">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Prêt à retrouver confiance ?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            La dermopigmentation capillaire peut transformer votre apparence de façon naturelle
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cheveux/tricopigmentation/prix" className="btn bg-white text-charbon hover:bg-slate-100">
              Voir les tarifs
            </Link>
            <Link href="/formations/tricopigmentation" className="btn bg-white/20 text-white hover:bg-white/30">
              Se former
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Tout savoir sur la dermopigmentation"
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
