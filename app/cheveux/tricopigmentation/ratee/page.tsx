'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const typesProblemes = [
  {
    titre: 'Points trop gros',
    description: 'Les points sont plus larges que des follicules naturels, aspect "marqueur"',
    gravite: 'modere',
    causes: ['Aiguille trop grosse', 'Pression excessive', 'Technique inadaptée'],
    solutions: ['Détatouage laser pour réduire', 'Attente estompage naturel'],
  },
  {
    titre: 'Points trop rapprochés',
    description: 'Densité excessive, aspect artificiel ou "casque"',
    gravite: 'modere',
    causes: ['Espacement insuffisant', 'Volonté de trop densifier'],
    solutions: ['Détatouage partiel', 'Estompage avec le temps'],
  },
  {
    titre: 'Couleur virant au bleu/vert',
    description: 'Le pigment noir a viré vers des teintes froides',
    gravite: 'severe',
    causes: ['Pigments de mauvaise qualité', 'Implantation trop profonde'],
    solutions: ['Détatouage laser obligatoire', 'Plusieurs séances nécessaires'],
  },
  {
    titre: 'Couleur trop foncée',
    description: 'Le contraste est trop marqué avec la peau',
    gravite: 'leger',
    causes: ['Choix de pigment inadapté', 'Phototype mal évalué'],
    solutions: ['Patience (estompage)', 'Laser pour éclaircir'],
  },
  {
    titre: 'Ligne frontale artificielle',
    description: 'La ligne de cheveux est trop droite, non naturelle',
    gravite: 'severe',
    causes: ['Dessin trop géométrique', 'Manque d\'irrégularités'],
    solutions: ['Détatouage de la ligne', 'Redessin complet'],
  },
  {
    titre: 'Cicatrices visibles',
    description: 'Des marques sont apparues suite au traitement',
    gravite: 'severe',
    causes: ['Aiguille trop profonde', 'Mauvaise cicatrisation'],
    solutions: ['Consultation dermatologue', 'Traitement des cicatrices'],
  },
]

const solutionsCorrection = [
  {
    nom: 'Détatouage laser',
    description: 'Effacement des pigments par laser PicoSecond',
    efficacite: 90,
    seances: '3-8 séances',
    prix: '500€ - 2000€',
    delai: 'Attendre 3 mois minimum',
    details: 'Le laser cible les pigments et les fragmente. Plusieurs séances espacées de 6-8 semaines sont nécessaires. Efficace pour les virages de couleur.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    nom: 'Retouche corrective',
    description: 'Ajustement par un praticien expérimenté',
    efficacite: 70,
    seances: '1-2 séances',
    prix: '300€ - 800€',
    delai: 'Après cicatrisation complète',
    details: 'Un expert peut corriger certains défauts en ajoutant des points ou en améliorant la ligne frontale. Limité aux problèmes mineurs.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    nom: 'Estompage naturel',
    description: 'Laisser le temps faire son œuvre',
    efficacite: 50,
    seances: 'Aucune',
    prix: '0€',
    delai: '2-5 ans',
    details: 'La tricopigmentation s\'estompe naturellement avec le temps. Une option si le problème est mineur et que vous êtes patient.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const signesAlerte = [
  {
    signe: 'Infection',
    description: 'Rougeur, chaleur, pus, fièvre',
    action: 'Consultez un médecin immédiatement',
    urgence: 'critique',
  },
  {
    signe: 'Réaction allergique',
    description: 'Démangeaisons intenses, gonflement persistant',
    action: 'Consultation dermatologue urgente',
    urgence: 'critique',
  },
  {
    signe: 'Cicatrices en relief',
    description: 'Bosses ou creux persistants après cicatrisation',
    action: 'Consultation spécialiste cicatrices',
    urgence: 'important',
  },
  {
    signe: 'Virage de couleur',
    description: 'Bleu, vert ou gris qui apparaît',
    action: 'Consultation détatouage laser',
    urgence: 'modere',
  },
]

const faqs = [
  {
    question: 'Comment savoir si ma tricopigmentation est ratée ?',
    answer: 'Attendez la fin de la cicatrisation (4-6 semaines) pour juger. Une tricopigmentation est ratée si : les points sont visiblement trop gros, la couleur vire au bleu/vert, la ligne frontale est trop géométrique, ou des cicatrices sont apparues. L\'aspect intense juste après la séance est normal.',
  },
  {
    question: 'Le détatouage laser fonctionne-t-il sur le cuir chevelu ?',
    answer: 'Oui, le laser est efficace sur le cuir chevelu. Les lasers PicoSecond (PicoWay, PicoSure) sont les plus adaptés. Comptez 3 à 8 séances selon l\'intensité du pigment. Le cuir chevelu cicatrise généralement bien, mais suivez les consignes post-traitement.',
  },
  {
    question: 'Puis-je refaire une tricopigmentation après un raté ?',
    answer: 'Oui, mais il faut d\'abord corriger le problème existant. En cas de virage de couleur ou points trop gros, un détatouage préalable est souvent nécessaire. Choisissez ensuite un praticien plus expérimenté et validez le design avant de commencer.',
  },
  {
    question: 'Mon praticien refuse de me rembourser, que faire ?',
    answer: 'Le praticien a une obligation de moyens, pas de résultat. Cependant, en cas de faute manifeste (hygiène, technique grossièrement inadaptée), vous pouvez : demander une médiation, signaler à l\'ARS si problème sanitaire, ou consulter un avocat pour préjudice esthétique.',
  },
  {
    question: 'La tricopigmentation ratée peut-elle endommager mes follicules ?',
    answer: 'Non, la tricopigmentation bien réalisée n\'endommage pas les follicules capillaires. Les aiguilles restent en surface (derme papillaire). Seule une technique très agressive pourrait causer des cicatrices, mais les follicules ne sont pas atteints.',
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
    title: 'Prix tricopigmentation',
    slug: '/cheveux/tricopigmentation/prix',
    excerpt: 'Tarifs 2024',
    image: '/placeholder-price.svg',
    category: 'Prix',
  },
  {
    title: 'Détatouage sourcils',
    slug: '/sourcils/detatouage',
    excerpt: 'Techniques laser',
    image: '/placeholder-laser.svg',
    category: 'Correction',
  },
]

export default function TricopigmentationRateePage() {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Cheveux', href: '/cheveux' },
              { label: 'Tricopigmentation', href: '/cheveux/tricopigmentation' },
              { label: 'Ratée', href: '/cheveux/tricopigmentation/ratee' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Solutions & Recours
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Tricopigmentation <span className="text-red-400">Ratée</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Votre tricopigmentation ne correspond pas à vos attentes ?
              Points trop gros, virage de couleur ou ligne artificielle ?
              Découvrez les solutions pour corriger le résultat.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#solutions" className="btn-primary">
                Voir les solutions
              </a>
              <Link href="/cheveux/tricopigmentation" className="btn bg-white/10 text-white hover:bg-white/20">
                Guide tricopigmentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types de problèmes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Problèmes les plus fréquents
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Identifiez votre situation pour trouver la solution adaptée
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {typesProblemes.map((probleme, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-card border-l-4 ${
                  probleme.gravite === 'leger' ? 'border-green-400' :
                  probleme.gravite === 'modere' ? 'border-orange-400' : 'border-red-400'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 rounded-full ${
                    probleme.gravite === 'leger' ? 'bg-green-400' :
                    probleme.gravite === 'modere' ? 'bg-orange-400' : 'bg-red-400'
                  }`} />
                  <h3 className="font-semibold text-charbon">{probleme.titre}</h3>
                </div>
                <p className="text-charbon/70 text-sm mb-4">{probleme.description}</p>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-charbon/50 uppercase">Causes possibles</span>
                    <ul className="mt-1 space-y-1">
                      {probleme.causes.map((cause, idx) => (
                        <li key={idx} className="text-xs text-charbon/60 flex items-center gap-1">
                          <span>•</span> {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs text-charbon/50 uppercase">Solutions</span>
                    <ul className="mt-1 space-y-1">
                      {probleme.solutions.map((sol, idx) => (
                        <li key={idx} className="text-sm text-rose-fonce flex items-center gap-1">
                          <span className="text-xs">→</span> {sol}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-green-400 rounded-full" />
              Correction facile
            </div>
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-orange-400 rounded-full" />
              Correction possible
            </div>
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-red-400 rounded-full" />
              Intervention spécialisée
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les solutions de correction
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {solutionsCorrection.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-card overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedSolution(expandedSolution === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-charbon">
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-charbon text-lg">{solution.nom}</h3>
                        <p className="text-charbon/60 text-sm">{solution.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden md:block">
                        <span className="text-lg font-bold text-rose-fonce">{solution.prix}</span>
                        <p className="text-xs text-charbon/60">{solution.seances}</p>
                      </div>
                      <svg
                        className={`w-6 h-6 text-charbon/40 transition-transform ${
                          expandedSolution === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {expandedSolution === index && (
                  <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                    <p className="text-charbon/70 mb-4">{solution.details}</p>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-slate-50 rounded-lg p-3">
                        <span className="text-xs text-charbon/60">Efficacité</span>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500 rounded-full"
                              style={{ width: `${solution.efficacite}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-charbon">{solution.efficacite}%</span>
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3">
                        <span className="text-xs text-charbon/60">Séances</span>
                        <p className="font-medium text-charbon mt-1">{solution.seances}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3">
                        <span className="text-xs text-charbon/60">Prix</span>
                        <p className="font-medium text-rose-fonce mt-1">{solution.prix}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3">
                        <span className="text-xs text-charbon/60">Délai</span>
                        <p className="font-medium text-charbon mt-1">{solution.delai}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signes d'alerte */}
      <section className="section-padding bg-red-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Signes d'alerte : quand consulter ?
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Certains signes nécessitent une consultation médicale rapide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {signesAlerte.map((alerte, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-card border-l-4 ${
                  alerte.urgence === 'critique' ? 'border-red-500' :
                  alerte.urgence === 'important' ? 'border-orange-400' : 'border-yellow-400'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    alerte.urgence === 'critique' ? 'bg-red-100 text-red-600' :
                    alerte.urgence === 'important' ? 'bg-orange-100 text-orange-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charbon">{alerte.signe}</h3>
                    <p className="text-charbon/70 text-sm mt-1">{alerte.description}</p>
                    <p className={`text-sm font-medium mt-2 ${
                      alerte.urgence === 'critique' ? 'text-red-600' :
                      alerte.urgence === 'important' ? 'text-orange-600' : 'text-yellow-600'
                    }`}>
                      → {alerte.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-rose-fonce to-or-rose">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Besoin d'aide ?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Consultez un spécialiste pour évaluer votre situation et définir la meilleure stratégie de correction
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cheveux/tricopigmentation" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Guide Tricopigmentation
            </Link>
            <Link href="/sourcils/detatouage" className="btn bg-white/20 text-white hover:bg-white/30">
              Techniques de détatouage
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Réponses à vos interrogations"
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
