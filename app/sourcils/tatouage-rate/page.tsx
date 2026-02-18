'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const typesRates = [
  {
    id: 'forme',
    titre: 'Problèmes de forme',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    problemes: ['Asymétrie marquée', 'Forme inadaptée au visage', 'Sourcils trop arqués ou trop droits', 'Position incorrecte'],
    solutions: ['Correction pigmentaire', 'Détatouage partiel au laser', 'Camouflage'],
  },
  {
    id: 'couleur',
    titre: 'Problèmes de couleur',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    problemes: ['Couleur trop foncée', 'Virage au bleu/gris', 'Virage au rouge/orange', 'Teinte non naturelle'],
    solutions: ['Neutralisation colorimétrique', 'Détatouage laser', 'Correction de couleur'],
  },
  {
    id: 'technique',
    titre: 'Défauts techniques',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    problemes: ['Traits grossiers ou flous', 'Bavures de pigment', 'Cicatrices visibles', 'Pigmentation irrégulière'],
    solutions: ['Détatouage complet', 'Camouflage microshading', 'Traitement cicatriciel'],
  },
]

const solutionsDetaillees = [
  {
    nom: 'Détatouage laser',
    description: 'Effacement complet ou partiel des pigments grâce au laser',
    efficacite: 95,
    seances: '3 à 8 séances',
    prix: '400€ - 1200€ total',
    ideal: 'Tatouages très foncés ou mal positionnés',
    icon: '⚡',
  },
  {
    nom: 'Correction pigmentaire',
    description: 'Neutralisation des virages de couleur par ajout de pigments correcteurs',
    efficacite: 80,
    seances: '1 à 2 séances',
    prix: '150€ - 400€',
    ideal: 'Virages de couleur (bleu, orange, gris)',
    icon: '🎨',
  },
  {
    nom: 'Camouflage',
    description: 'Recouvrement par un nouveau maquillage permanent mieux réalisé',
    efficacite: 75,
    seances: '1 à 2 séances',
    prix: '250€ - 500€',
    ideal: 'Corrections légères de forme ou de densité',
    icon: '✨',
  },
  {
    nom: 'Solution saline',
    description: 'Extraction des pigments par solution osmotique',
    efficacite: 70,
    seances: '4 à 8 séances',
    prix: '400€ - 1400€',
    ideal: 'Alternative au laser, tous types de pigments',
    icon: '💧',
  },
]

const etapesAction = [
  { numero: 1, titre: 'Documentez', description: 'Photographiez vos sourcils sous différents éclairages' },
  { numero: 2, titre: 'Attendez', description: 'Laissez passer la cicatrisation complète (6 semaines minimum)' },
  { numero: 3, titre: 'Consultez', description: 'Prenez RDV avec un spécialiste en correction' },
  { numero: 4, titre: 'Évaluez', description: 'Obtenez un diagnostic et un plan de traitement' },
  { numero: 5, titre: 'Décidez', description: 'Choisissez la solution adaptée à votre situation' },
]

const faqs = [
  {
    question: 'Mon tatouage sourcils est-il vraiment raté ou dois-je attendre ?',
    answer: 'Attendez impérativement 4 à 6 semaines (fin de cicatrisation) avant de juger. Durant cette période, la couleur peut paraître trop foncée puis trop claire avant de se stabiliser. Un vrai raté se caractérise par une asymétrie flagrante, un virage de couleur persistant, des traits grossiers ou une forme complètement inadaptée après cicatrisation.',
  },
  {
    question: 'Puis-je poursuivre le praticien en justice ?',
    answer: 'En cas de préjudice avéré, vous pouvez : documenter le problème (photos, certificat médical), tenter une médiation amiable, signaler à la DGCCRF, et en dernier recours saisir le tribunal. Cependant, la procédure est longue et coûteuse. Une correction est souvent plus rapide et moins stressante.',
  },
  {
    question: 'Combien coûte la correction d\'un tatouage sourcils raté ?',
    answer: 'Les coûts varient selon la solution : détatouage laser (400€-1200€ total), correction pigmentaire (150€-400€), camouflage (250€-500€). Un budget moyen de 500€ à 800€ permet généralement de corriger la plupart des situations.',
  },
  {
    question: 'Le laser peut-il tout effacer ?',
    answer: 'Le laser est efficace à 90-95% sur la plupart des pigments. Cependant, certains pigments blancs ou chair peuvent foncer temporairement avec le laser. Un praticien expérimenté évaluera la faisabilité lors de la consultation.',
  },
  {
    question: 'Puis-je refaire un tatouage après correction ?',
    answer: 'Oui, une fois la correction terminée et la peau cicatrisée (2-3 mois minimum), vous pouvez refaire un maquillage permanent. Choisissez cette fois un praticien certifié avec un portfolio de travaux cicatrisés.',
  },
  {
    question: 'Comment éviter un nouveau raté ?',
    answer: 'Pour votre prochain tatouage : vérifiez les certifications et formations du praticien, examinez son portfolio (photos après cicatrisation, pas juste après la séance), lisez les avis clients, exigez une consultation préalable, validez le dessin avant pigmentation, et n\'hésitez pas à poser des questions.',
  },
]

const relatedArticles = [
  {
    title: 'Microblading raté',
    slug: '/sourcils/microblading/rate',
    excerpt: 'Solutions spécifiques au microblading',
    image: '/placeholder-eyebrow.svg',
    category: 'Correction',
  },
  {
    title: 'Détatouage sourcils',
    slug: '/sourcils/detatouage',
    excerpt: 'Guide complet du laser',
    image: '/placeholder-laser.svg',
    category: 'Technique',
  },
  {
    title: 'Formation microblading',
    slug: '/formations/microblading',
    excerpt: 'Reconnaître un bon praticien',
    image: '/placeholder-formation.svg',
    category: 'Formation',
  },
]

export default function TatouageRatePage() {
  const [activeType, setActiveType] = useState('forme')
  const activeTypeData = typesRates.find(t => t.id === activeType)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-poudre rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Sourcils', href: '/sourcils' },
              { label: 'Tatouage raté', href: '/sourcils/tatouage-rate' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Guide de Correction
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Tatouage Sourcils <span className="text-red-400">Raté</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Votre tatouage de sourcils ne correspond pas à vos attentes ?
              Asymétrie, couleur inappropriée ou forme insatisfaisante : découvrez
              toutes les solutions pour retrouver des sourcils harmonieux.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#solutions" className="btn-primary">
                Voir les solutions
              </a>
              <Link href="/sourcils/detatouage" className="btn bg-white/10 text-white hover:bg-white/20">
                Détatouage laser
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types de ratés */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Identifiez votre problème
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Sélectionnez la catégorie qui correspond à votre situation
            </p>
          </div>

          {/* Type Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {typesRates.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all ${
                  activeType === type.id
                    ? 'bg-rose-fonce text-white shadow-lg'
                    : 'bg-rose-pale/50 text-charbon hover:bg-rose-pale'
                }`}
              >
                <span className={activeType === type.id ? 'text-white' : 'text-rose-fonce'}>
                  {type.icon}
                </span>
                {type.titre}
              </button>
            ))}
          </div>

          {/* Active Type Content */}
          {activeTypeData && (
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Problèmes fréquents
                  </h3>
                  <ul className="space-y-3">
                    {activeTypeData.problemes.map((probleme, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-red-700">
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                        {probleme}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Solutions possibles
                  </h3>
                  <ul className="space-y-3">
                    {activeTypeData.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-green-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Solutions détaillées */}
      <section id="solutions" className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les solutions de correction
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Comparez les différentes options disponibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {solutionsDetaillees.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{solution.icon}</span>
                  <div>
                    <h3 className="font-semibold text-charbon text-lg">{solution.nom}</h3>
                    <p className="text-charbon/60 text-sm">{solution.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-charbon/60">Efficacité</span>
                    <span className="font-medium text-charbon">{solution.efficacite}%</span>
                  </div>
                  <div className="h-2 bg-nude-rose/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-rose-fonce to-or-rose rounded-full"
                      style={{ width: `${solution.efficacite}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-charbon/60">Séances</span>
                    <p className="font-medium text-charbon">{solution.seances}</p>
                  </div>
                  <div>
                    <span className="text-charbon/60">Prix</span>
                    <p className="font-medium text-rose-fonce">{solution.prix}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-nude-rose/30">
                  <span className="text-xs text-charbon/50">Idéal pour</span>
                  <p className="text-sm text-charbon/80">{solution.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes d'action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Que faire maintenant ?
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Suivez ces étapes pour corriger votre tatouage
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {etapesAction.map((etape) => (
              <div key={etape.numero} className="flex-1 min-w-[200px] bg-gradient-to-br from-rose-pale/30 to-white rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-rose-fonce text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {etape.numero}
                </div>
                <h3 className="font-semibold text-charbon mb-2">{etape.titre}</h3>
                <p className="text-charbon/70 text-sm">{etape.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-rose-fonce to-or-rose">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Besoin d&apos;aide pour corriger votre tatouage ?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Consultez nos guides détaillés sur le détatouage et la correction
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sourcils/detatouage" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Guide détatouage
            </Link>
            <Link href="/sourcils/microblading/rate" className="btn bg-white/20 text-white hover:bg-white/30">
              Microblading raté
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
