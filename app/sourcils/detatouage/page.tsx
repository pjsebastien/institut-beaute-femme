'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const techniquesDetatouage = [
  {
    id: 'laser',
    nom: 'Détatouage Laser',
    description: 'La technique de référence pour effacer les pigments de maquillage permanent',
    avantages: [
      'Efficace sur la plupart des pigments',
      'Résultats prévisibles',
      'Pas de cicatrice si bien réalisé',
      'Approuvé par les autorités de santé',
    ],
    inconvenients: [
      '3 à 8 séances nécessaires',
      'Coût total élevé (400€-1200€)',
      'Délai entre séances (6-8 semaines)',
      'Peut temporairement blanchir la peau',
    ],
    typesLaser: [
      { nom: 'PicoSecond (PicoWay, PicoSure)', efficacite: 'Excellent', seances: '3-5' },
      { nom: 'Q-Switched ND-YAG', efficacite: 'Très bon', seances: '5-8' },
      { nom: 'Alexandrite', efficacite: 'Bon', seances: '4-7' },
    ],
    icon: '⚡',
  },
  {
    id: 'salin',
    nom: 'Solution Saline',
    description: 'Alternative douce au laser utilisant une solution osmotique',
    avantages: [
      'Moins agressif que le laser',
      'Fonctionne sur tous types de pigments',
      'Prix par séance plus abordable',
      'Peut traiter les pigments blancs',
    ],
    inconvenients: [
      'Plus de séances nécessaires',
      'Cicatrisation plus longue',
      'Moins efficace sur pigments profonds',
      'Risque de croûtes importantes',
    ],
    typesLaser: [],
    icon: '💧',
  },
  {
    id: 'camouflage',
    nom: 'Correction Pigmentaire',
    description: 'Neutralisation par ajout de pigments correcteurs',
    avantages: [
      'Une seule séance possible',
      'Résultat immédiat',
      'Moins invasif',
      'Transforme plutôt qu\'efface',
    ],
    inconvenients: [
      'Ne supprime pas les pigments',
      'Limité aux corrections de couleur',
      'Nécessite un expert en colorimétrie',
      'Peut s\'estomper',
    ],
    typesLaser: [],
    icon: '🎨',
  },
]

const processusLaser = [
  {
    etape: 1,
    titre: 'Consultation initiale',
    description: 'Évaluation des pigments, type de peau et estimation du nombre de séances',
    duree: '30 min',
    icon: '👩‍⚕️',
  },
  {
    etape: 2,
    titre: 'Préparation de la peau',
    description: 'Nettoyage et application d\'une crème anesthésiante',
    duree: '20 min',
    icon: '🧴',
  },
  {
    etape: 3,
    titre: 'Traitement laser',
    description: 'Passages du laser sur la zone, sensation de picotements/chaleur',
    duree: '10-20 min',
    icon: '⚡',
  },
  {
    etape: 4,
    titre: 'Soins post-traitement',
    description: 'Application de crème apaisante et consignes de cicatrisation',
    duree: '10 min',
    icon: '✨',
  },
  {
    etape: 5,
    titre: 'Cicatrisation',
    description: 'La zone blanchit puis les pigments s\'éclaircissent progressivement',
    duree: '4-6 sem',
    icon: '📅',
  },
]

const tarifsIndicatifs = [
  { technique: 'Laser PicoSecond', parSeance: '100€ - 200€', nombreSeances: '3-5', total: '300€ - 1000€' },
  { technique: 'Laser Q-Switched', parSeance: '80€ - 150€', nombreSeances: '5-8', total: '400€ - 1200€' },
  { technique: 'Solution saline', parSeance: '100€ - 180€', nombreSeances: '4-8', total: '400€ - 1440€' },
  { technique: 'Correction pigmentaire', parSeance: '150€ - 350€', nombreSeances: '1-2', total: '150€ - 700€' },
]

const faqs = [
  {
    question: 'Combien de séances faut-il pour effacer un microblading ?',
    answer: 'En moyenne, il faut 3 à 8 séances de laser pour effacer complètement un microblading. Le nombre exact dépend de la profondeur des pigments, de leur couleur, de l\'ancienneté du tatouage et de votre type de peau. Les lasers PicoSecond nécessitent généralement moins de séances.',
  },
  {
    question: 'Le détatouage laser fait-il mal ?',
    answer: 'La douleur est souvent comparée à des claquements d\'élastique ou des micro-brûlures. Une crème anesthésiante est appliquée avant le traitement pour réduire l\'inconfort. Après la séance, la zone peut être sensible pendant quelques jours, similaire à un coup de soleil.',
  },
  {
    question: 'Peut-on refaire un microblading après un détatouage ?',
    answer: 'Oui, c\'est tout à fait possible. Il est recommandé d\'attendre 2-3 mois après la dernière séance de laser pour que la peau soit complètement cicatrisée. Un praticien pourra alors réaliser un nouveau microblading sur une base vierge.',
  },
  {
    question: 'Le laser peut-il laisser des cicatrices ?',
    answer: 'Avec un praticien qualifié et les bons réglages, le risque de cicatrice est minimal. Cependant, une mauvaise utilisation ou un non-respect des soins post-traitement peut entraîner des cicatrices. Choisissez un centre spécialisé avec du matériel récent.',
  },
  {
    question: 'Pourquoi les pigments blanchissent-ils après le laser ?',
    answer: 'Le blanchiment immédiat après le laser (appelé "frosting") est une réaction normale. Il est causé par les bulles de gaz créées par la fragmentation des pigments. Ce blanchiment disparaît en quelques minutes à quelques heures. Les pigments s\'éclaircissent ensuite progressivement sur plusieurs semaines.',
  },
  {
    question: 'Quelle est la différence entre laser PicoSecond et Q-Switched ?',
    answer: 'Le laser PicoSecond émet des impulsions ultra-courtes (picosecondes) qui fragmentent les pigments plus finement. Il est plus efficace et nécessite moins de séances. Le Q-Switched est une technologie plus ancienne mais éprouvée. Le PicoSecond est recommandé mais plus coûteux.',
  },
]

const relatedArticles = [
  {
    title: 'Microblading raté',
    slug: '/sourcils/microblading/rate',
    excerpt: 'Que faire en cas d\'échec',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400',
    category: 'Problèmes',
  },
  {
    title: 'Tatouage sourcils raté',
    slug: '/sourcils/tatouage-rate',
    excerpt: 'Solutions de correction',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    category: 'Correction',
  },
  {
    title: 'Microblading guide',
    slug: '/sourcils/microblading',
    excerpt: 'Refaire après détatouage',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    category: 'Guide',
  },
]

export default function DetatouagePage() {
  const [activeTechnique, setActiveTechnique] = useState('laser')
  const technique = techniquesDetatouage.find(t => t.id === activeTechnique)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-charbon to-blue-900/30 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-poudre rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Sourcils', href: '/sourcils' },
              { label: 'Détatouage', href: '/sourcils/detatouage' },
            ]}
            variant="dark"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Solutions d&apos;effacement
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
                Détatouage <span className="text-blue-300">Sourcils</span>
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
                Vous souhaitez effacer un microblading, microshading ou tatouage des sourcils ?
                Découvrez les techniques de détatouage, leurs résultats et leurs coûts.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <span className="text-2xl font-bold text-blue-300">3-8</span>
                  <p className="text-white/70 text-sm">séances laser</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <span className="text-2xl font-bold text-blue-300">400€+</span>
                  <p className="text-white/70 text-sm">coût moyen</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <span className="text-2xl font-bold text-blue-300">95%</span>
                  <p className="text-white/70 text-sm">efficacité</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800"
                  alt="Détatouage laser sourcils"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charbon/50 via-transparent to-transparent" />
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
              Les techniques de détatouage
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Choisissez la méthode adaptée à votre situation
            </p>
          </div>

          {/* Technique Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {techniquesDetatouage.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTechnique(t.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTechnique === t.id
                    ? 'bg-charbon text-white shadow-lg'
                    : 'bg-rose-pale/50 text-charbon hover:bg-rose-pale'
                }`}
              >
                <span className="text-xl">{t.icon}</span>
                {t.nom}
              </button>
            ))}
          </div>

          {/* Technique Content */}
          {technique && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-beige-creme to-white rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{technique.icon}</span>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-charbon">{technique.nom}</h3>
                    <p className="text-charbon/70">{technique.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                      <span>✅</span> Avantages
                    </h4>
                    <ul className="space-y-2">
                      {technique.avantages.map((avantage, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-green-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          {avantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                      <span>⚠️</span> Inconvénients
                    </h4>
                    <ul className="space-y-2">
                      {technique.inconvenients.map((inconvenient, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-red-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          {inconvenient}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {technique.typesLaser.length > 0 && (
                  <div className="mt-6 bg-white rounded-2xl p-6">
                    <h4 className="font-semibold text-charbon mb-4">Types de laser</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {technique.typesLaser.map((laser, idx) => (
                        <div key={idx} className="bg-beige-creme rounded-xl p-4">
                          <p className="font-medium text-charbon">{laser.nom}</p>
                          <p className="text-sm text-charbon/60">Efficacité : {laser.efficacite}</p>
                          <p className="text-sm text-charbon/60">{laser.seances} séances</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Processus Laser */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Comment se déroule une séance laser ?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />

              <div className="space-y-6">
                {processusLaser.map((etape, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-card flex items-center justify-center flex-shrink-0 z-10 text-2xl">
                      {etape.icon}
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-card flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          Étape {etape.etape}
                        </span>
                        <span className="text-charbon/50 text-sm">{etape.duree}</span>
                      </div>
                      <h3 className="font-semibold text-charbon text-lg mb-2">{etape.titre}</h3>
                      <p className="text-charbon/70">{etape.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Tarifs indicatifs
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Coûts moyens constatés en France
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-charbon/20">
                  <th className="py-4 px-6 text-left text-charbon font-semibold">Technique</th>
                  <th className="py-4 px-6 text-center text-charbon font-semibold">Par séance</th>
                  <th className="py-4 px-6 text-center text-charbon font-semibold">Nombre séances</th>
                  <th className="py-4 px-6 text-center text-charbon font-semibold">Coût total</th>
                </tr>
              </thead>
              <tbody>
                {tarifsIndicatifs.map((tarif, index) => (
                  <tr key={index} className="border-b border-nude-rose/30">
                    <td className="py-4 px-6 font-medium text-charbon">{tarif.technique}</td>
                    <td className="py-4 px-6 text-center text-charbon/70">{tarif.parSeance}</td>
                    <td className="py-4 px-6 text-center text-charbon/70">{tarif.nombreSeances}</td>
                    <td className="py-4 px-6 text-center font-semibold text-rose-fonce">{tarif.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions sur le détatouage"
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
