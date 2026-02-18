'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const joursCicatrisation = [
  {
    jour: 'Jour 1',
    titre: 'Post-séance immédiat',
    description: 'Les paupières sont gonflées et sensibles. La couleur est très intense, c\'est normal ! Le trait peut paraître plus épais que souhaité.',
    symptomes: ['Gonflement des paupières', 'Rougeur autour des yeux', 'Larmoiement possible', 'Trait très intense'],
    soins: ['Appliquer des compresses froides (pas de glace directe)', 'Instiller le collyre recommandé', 'Dormir avec la tête légèrement surélevée'],
    intensite: 100,
    gonflement: 95,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    jour: 'Jour 2-3',
    titre: 'Gonflement maximal',
    description: 'Le gonflement peut être à son maximum, surtout au réveil. Les yeux peuvent être difficiles à ouvrir. Le trait reste très visible.',
    symptomes: ['Gonflement important au réveil', 'Sensation de tiraillement', 'Démangeaisons légères', 'Paupières lourdes'],
    soins: ['Continuer les compresses froides', 'Ne pas frotter les yeux', 'Éviter les écrans prolongés', 'Appliquer la crème cicatrisante'],
    intensite: 95,
    gonflement: 100,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    jour: 'Jour 4-7',
    titre: 'Desquamation',
    description: 'De fines peaux commencent à se détacher. Le gonflement diminue. La couleur peut sembler irrégulière. NE PAS gratter !',
    symptomes: ['Fines pellicules sur le trait', 'Réduction du gonflement', 'Démangeaisons possibles', 'Couleur qui s\'estompe'],
    soins: ['Laisser les peaux tomber naturellement', 'Hydrater avec parcimonie', 'Éviter le maquillage des yeux', 'Ne pas mouiller excessivement'],
    intensite: 60,
    gonflement: 40,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    jour: 'Jour 8-14',
    titre: 'Phase de pâlissement',
    description: 'Le trait peut sembler très pâle ou partiellement effacé. Les pigments remontent ensuite sous la peau.',
    symptomes: ['Trait moins visible', 'Aspect "effacé" possible', 'Peau en voie de guérison', 'Plus de gonflement'],
    soins: ['Patience, la couleur remonte', 'Protection solaire lunettes', 'Reprendre le maquillage des yeux doucement', 'Éviter la piscine'],
    intensite: 35,
    gonflement: 10,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    jour: 'Semaine 3-6',
    titre: 'Résultat définitif',
    description: 'La couleur se stabilise et révèle le résultat final. C\'est le moment d\'évaluer si une retouche est nécessaire.',
    symptomes: ['Couleur stabilisée', 'Trait net et précis', 'Peau complètement guérie', 'Résultat naturel'],
    soins: ['Protection solaire quotidienne', 'Évaluer le besoin de retouche', 'Reprendre routine beauté normale', 'RDV de contrôle'],
    intensite: 70,
    gonflement: 0,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const erreursEviter = [
  {
    erreur: 'Frotter les yeux',
    consequence: 'Arrachement des pigments, infection',
    severite: 'critique',
  },
  {
    erreur: 'Appliquer du maquillage',
    consequence: 'Infection, interférence cicatrisation',
    severite: 'critique',
  },
  {
    erreur: 'Porter des lentilles',
    consequence: 'Irritation, gêne, retard cicatrisation',
    severite: 'important',
  },
  {
    erreur: 'Exposition au soleil',
    consequence: 'Décoloration du pigment',
    severite: 'important',
  },
  {
    erreur: 'Piscine / Sauna',
    consequence: 'Eau chlorée = décoloration',
    severite: 'modere',
  },
  {
    erreur: 'Arracher les peaux',
    consequence: 'Cicatrices, pigments irréguliers',
    severite: 'critique',
  },
]

const faqs = [
  {
    question: 'Combien de temps dure le gonflement après un eye liner permanent ?',
    answer: 'Le gonflement dure généralement 2 à 4 jours, avec un pic au jour 2-3. Il est plus marqué au réveil et diminue au cours de la journée. Des compresses froides aident à réduire le gonflement. Si le gonflement persiste au-delà de 5 jours ou s\'aggrave, consultez votre praticien.',
  },
  {
    question: 'Puis-je porter mes lentilles après un eye liner permanent ?',
    answer: 'Il est recommandé d\'éviter les lentilles pendant 24 à 48 heures après la séance, idéalement jusqu\'à la fin du gonflement (3-4 jours). Portez vos lunettes pendant cette période. Lors de la reprise, assurez-vous d\'avoir des lentilles propres et manipulez-les délicatement.',
  },
  {
    question: 'Ma ligne semble très épaisse, est-ce normal ?',
    answer: 'Oui, c\'est tout à fait normal ! Juste après la séance, le trait paraît 30-40% plus épais en raison du gonflement et de la couche superficielle de pigment. Le trait s\'affine considérablement après cicatrisation. Attendez 4 semaines pour juger le résultat final.',
  },
  {
    question: 'Quand puis-je me maquiller les yeux à nouveau ?',
    answer: 'Attendez minimum 7-10 jours avant de remettre du maquillage sur ou près de l\'eye liner permanent. Pour le mascara, attendez au moins 5-7 jours. Utilisez des produits neufs ou bien désinfectés pour éviter tout risque d\'infection.',
  },
  {
    question: 'Le trait a disparu pendant la cicatrisation, c\'est raté ?',
    answer: 'Non ! C\'est la phase de pâlissement, très courante entre le jour 8 et 14. Les peaux en se détachant emportent les pigments de surface. Les pigments implantés en profondeur remontent ensuite progressivement. Le résultat définitif apparaît vers la 4ème semaine.',
  },
  {
    question: 'Comment dormir après un eye liner permanent ?',
    answer: 'Les premières nuits, essayez de dormir sur le dos avec la tête légèrement surélevée (oreiller supplémentaire). Évitez de dormir sur le ventre ou sur le côté pour ne pas appuyer sur les paupières. Mettez une taie d\'oreiller propre.',
  },
]

const relatedArticles = [
  {
    title: 'Eye Liner Permanent',
    slug: '/yeux/eye-liner-permanent',
    excerpt: 'Guide complet',
    image: '/placeholder-eyeliner.svg',
    category: 'Guide',
  },
  {
    title: 'Eye Liner Permanent Raté',
    slug: '/yeux/eye-liner-permanent/rate',
    excerpt: 'Solutions correctives',
    image: '/placeholder-fix.svg',
    category: 'Correction',
  },
  {
    title: 'Microblading Cicatrisation',
    slug: '/sourcils/microblading/cicatrisation',
    excerpt: 'Comparaison',
    image: '/placeholder-healing.svg',
    category: 'Post-soin',
  },
]

export default function EyelinerCicatrisationPage() {
  const [activeJour, setActiveJour] = useState(0)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-indigo-900/40 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Yeux', href: '/yeux' },
              { label: 'Eye Liner Permanent', href: '/yeux/eye-liner-permanent' },
              { label: 'Cicatrisation', href: '/yeux/eye-liner-permanent/cicatrisation' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Guide Post-Soin
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Cicatrisation <span className="text-indigo-300">Eye Liner Permanent</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Tout ce que vous devez savoir sur la cicatrisation de votre eye liner permanent.
              Guide jour par jour, soins essentiels et conseils d'experts.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-indigo-300">4-6</span>
                <p className="text-white/70 text-sm">semaines totales</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-indigo-300">2-4</span>
                <p className="text-white/70 text-sm">jours de gonflement</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-indigo-300">7-10</span>
                <p className="text-white/70 text-sm">jours sans maquillage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline interactive */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Évolution jour par jour
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Cliquez sur chaque période pour découvrir les symptômes et soins adaptés
            </p>
          </div>

          {/* Timeline navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {joursCicatrisation.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveJour(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeJour === index
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-indigo-100 text-charbon hover:bg-indigo-200'
                }`}
              >
                <span className="w-5 h-5">{item.icon}</span>
                {item.jour}
              </button>
            ))}
          </div>

          {/* Active content */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left: Details */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                  {joursCicatrisation[activeJour].icon}
                </div>
                <div>
                  <span className="text-sm font-medium text-indigo-600">
                    {joursCicatrisation[activeJour].jour}
                  </span>
                  <h3 className="text-2xl font-playfair font-bold text-charbon">
                    {joursCicatrisation[activeJour].titre}
                  </h3>
                </div>
              </div>

              <p className="text-charbon/80 text-lg leading-relaxed mb-6">
                {joursCicatrisation[activeJour].description}
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-charbon mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    Ce que vous observez
                  </h4>
                  <ul className="space-y-2">
                    {joursCicatrisation[activeJour].symptomes.map((symptome, idx) => (
                      <li key={idx} className="text-sm text-charbon/70 flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">•</span>
                        {symptome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-5">
                  <h4 className="font-semibold text-charbon mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Soins à appliquer
                  </h4>
                  <ul className="space-y-2">
                    {joursCicatrisation[activeJour].soins.map((soin, idx) => (
                      <li key={idx} className="text-sm text-charbon/70 flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        {soin}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Meters + Visual */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h4 className="font-semibold text-charbon mb-4">Intensité du trait</h4>
                <div className="space-y-3">
                  {joursCicatrisation.map((jour, idx) => (
                    <div key={idx} className={`transition-all ${activeJour === idx ? 'opacity-100 scale-100' : 'opacity-40 scale-98'}`}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-charbon">{jour.jour}</span>
                        <span className={`font-medium ${activeJour === idx ? 'text-indigo-600' : 'text-charbon/60'}`}>
                          {jour.intensite}%
                        </span>
                      </div>
                      <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-600 rounded-full transition-all"
                          style={{ width: `${jour.intensite}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h4 className="font-semibold text-charbon mb-4">Niveau de gonflement</h4>
                <div className="space-y-3">
                  {joursCicatrisation.map((jour, idx) => (
                    <div key={idx} className={`transition-all ${activeJour === idx ? 'opacity-100 scale-100' : 'opacity-40 scale-98'}`}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-charbon">{jour.jour}</span>
                        <span className={`font-medium ${activeJour === idx ? 'text-orange-500' : 'text-charbon/60'}`}>
                          {jour.gonflement}%
                        </span>
                      </div>
                      <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-400 rounded-full transition-all"
                          style={{ width: `${jour.gonflement}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual indicator */}
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <p className="text-sm text-charbon/70">
                  Zone délicate : les yeux nécessitent des soins particuliers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Erreurs à éviter */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Erreurs à éviter absolument
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              La zone des yeux est sensible, ces erreurs peuvent compromettre le résultat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {erreursEviter.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-card border-l-4 ${
                  item.severite === 'critique' ? 'border-red-500' :
                  item.severite === 'important' ? 'border-orange-400' : 'border-yellow-400'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.severite === 'critique' ? 'bg-red-100 text-red-600' :
                    item.severite === 'important' ? 'bg-orange-100 text-orange-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-charbon">{item.erreur}</h3>
                </div>
                <p className={`text-sm ${
                  item.severite === 'critique' ? 'text-red-600' :
                  item.severite === 'important' ? 'text-orange-600' : 'text-yellow-600'
                }`}>
                  {item.consequence}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              Critique
            </div>
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-orange-400 rounded-full" />
              Important
            </div>
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              Modéré
            </div>
          </div>
        </div>
      </section>

      {/* Tip spécial yeux */}
      <section className="section-padding bg-indigo-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-playfair font-bold mb-4">
              Conseil d'expert
            </h2>
            <p className="text-xl text-white/80 mb-6 leading-relaxed">
              Les compresses froides sont vos meilleures alliées les premiers jours.
              Utilisez des compresses stériles imbibées d'eau fraîche (pas glacée !)
              et appliquez 10 minutes, 3-4 fois par jour pour réduire le gonflement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/boutique" className="btn bg-white text-indigo-900 hover:bg-indigo-100">
                Nos soins post-traitement
              </Link>
              <Link href="/yeux/eye-liner-permanent/rate" className="btn bg-white/20 text-white hover:bg-white/30">
                Problème ? Voir les solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions sur la cicatrisation"
        description="Réponses d'experts à vos interrogations"
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
