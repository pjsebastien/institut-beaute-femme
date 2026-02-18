'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const typesPochoirs = [
  {
    id: 'plastique',
    nom: 'Pochoirs plastique',
    description: 'Pochoirs rigides réutilisables pour une utilisation quotidienne',
    avantages: ['Réutilisables', 'Faciles à nettoyer', 'Durables', 'Prix abordable'],
    inconvenients: ['Moins de formes disponibles', 'Moins précis', 'Taille unique'],
    prix: '5€ - 15€ (lot)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: 'autocollant',
    nom: 'Pochoirs autocollants',
    description: 'Stickers à usage unique pour un tracé précis',
    avantages: ['Très précis', 'Adhèrent à la peau', 'Grande variété de formes', 'Utilisation facile'],
    inconvenients: ['Usage unique', 'Plus coûteux à long terme', 'Peut irriter les peaux sensibles'],
    prix: '8€ - 20€ (lot de 10-20)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'professionnel',
    nom: 'Pochoirs professionnels',
    description: 'Kit de mesure et pochoirs pour les praticiens',
    avantages: ['Ultra précis', 'Système de mesure intégré', 'Qualité supérieure', 'Toutes morphologies'],
    inconvenients: ['Prix élevé', 'Nécessite formation', 'Usage professionnel'],
    prix: '30€ - 100€ (kit complet)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const formesSourcils = [
  { nom: 'Arqué', description: 'Arc prononcé, idéal pour visages ronds ou carrés', popularite: 85 },
  { nom: 'Droit', description: 'Ligne horizontale, moderne et naturel', popularite: 70 },
  { nom: 'S-Shape', description: 'Forme en S subtile, très tendance', popularite: 90 },
  { nom: 'Arrondi', description: 'Arc doux, adoucit les traits anguleux', popularite: 75 },
  { nom: 'Ailé', description: 'Queue relevée, effet lifting', popularite: 65 },
]

const etapesUtilisation = [
  {
    numero: 1,
    titre: 'Choisir la forme',
    description: 'Sélectionnez le pochoir adapté à votre morphologie de visage',
    icon: '🎯',
  },
  {
    numero: 2,
    titre: 'Positionner',
    description: 'Alignez le pochoir avec vos sourcils naturels, centré sur votre arcade',
    icon: '📐',
  },
  {
    numero: 3,
    titre: 'Tracer le contour',
    description: 'Utilisez un crayon à sourcils pour dessiner le contour dans le pochoir',
    icon: '✏️',
  },
  {
    numero: 4,
    titre: 'Remplir',
    description: 'Remplissez l\'intérieur avec un fard, une poudre ou un crayon',
    icon: '🖌️',
  },
  {
    numero: 5,
    titre: 'Retirer et estomper',
    description: 'Retirez le pochoir et estompez pour un résultat naturel',
    icon: '✨',
  },
]

const produitsAssocies = [
  {
    nom: 'Kit pochoirs professionnels',
    prix: '14,90€',
    slug: '/boutique/pochoirs-sourcils-lot-12',
    description: 'Lot de 12 formes différentes',
  },
  {
    nom: 'Crayon sourcils waterproof',
    prix: '16,90€',
    slug: '/boutique/crayon-sourcils-waterproof',
    description: 'Idéal pour tracer les contours',
  },
  {
    nom: 'Palette ombrage',
    prix: '22,90€',
    slug: '/boutique/palette-ombrage-sourcils',
    description: '4 teintes pour un remplissage parfait',
  },
]

const faqs = [
  {
    question: 'Comment choisir la forme de pochoir adaptée à mon visage ?',
    answer: 'Le choix dépend de la forme de votre visage : visage rond → sourcils arqués pour allonger, visage carré → sourcils arrondis pour adoucir, visage ovale → toutes les formes conviennent, visage allongé → sourcils droits ou légèrement arqués. En cas de doute, optez pour une forme proche de vos sourcils naturels.',
  },
  {
    question: 'Puis-je utiliser un pochoir pour du maquillage permanent ?',
    answer: 'Oui, les pochoirs sont souvent utilisés par les praticiens en dermopigmentation pour créer le dessin préparatoire. Ils permettent de visualiser le résultat et de valider la forme avec la cliente avant de commencer la pigmentation.',
  },
  {
    question: 'Les pochoirs abîment-ils les sourcils ?',
    answer: 'Non, les pochoirs ne sont pas en contact direct avec les poils et n\'affectent pas leur croissance. Les pochoirs autocollants peuvent légèrement tirer sur les poils au retrait, mais sans conséquence. Évitez simplement de tirer brusquement.',
  },
  {
    question: 'Comment nettoyer mes pochoirs réutilisables ?',
    answer: 'Nettoyez vos pochoirs plastique après chaque utilisation avec un coton imbibé de démaquillant ou d\'eau savonneuse. Séchez-les bien avant de les ranger. Évitez les solvants agressifs qui pourraient les déformer.',
  },
  {
    question: 'Les pochoirs conviennent-ils aux débutantes ?',
    answer: 'Absolument ! Les pochoirs sont justement conçus pour faciliter le maquillage des sourcils, même pour les débutantes. Ils offrent un guide précis et permettent d\'obtenir une forme symétrique sans expérience préalable.',
  },
  {
    question: 'Puis-je créer mon propre pochoir ?',
    answer: 'Oui, vous pouvez créer un pochoir personnalisé avec une feuille de plastique transparent et un cutter de précision. Tracez d\'abord la forme idéale de vos sourcils (ou faites-vous aider par un professionnel), puis découpez délicatement.',
  },
]

const relatedArticles = [
  {
    title: 'Microblading',
    slug: '/sourcils/microblading',
    excerpt: 'Alternative permanente aux pochoirs',
    image: '/placeholder-microblading.svg',
    category: 'Technique',
  },
  {
    title: 'Microshading',
    slug: '/sourcils/microshading',
    excerpt: 'Sourcils poudrés durables',
    image: '/placeholder-microshading.svg',
    category: 'Technique',
  },
  {
    title: 'Boutique',
    slug: '/boutique',
    excerpt: 'Tous nos pochoirs et accessoires',
    image: '/placeholder-boutique.svg',
    category: 'Boutique',
  },
]

export default function PochoirPage() {
  const [activeType, setActiveType] = useState('plastique')
  const activeTypeData = typesPochoirs.find(t => t.id === activeType)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-rose-fonce/30 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-rose-poudre rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-or-rose rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Sourcils', href: '/sourcils' },
              { label: 'Pochoir', href: '/sourcils/pochoir' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Accessoire Maquillage
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Pochoir <span className="text-rose-poudre">Sourcils</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Le pochoir sourcil est l&apos;accessoire indispensable pour tracer des sourcils parfaits
              et symétriques. Découvrez les différents types, comment les utiliser et nos
              conseils pour choisir la forme adaptée à votre visage.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/boutique" className="btn-primary">
                Voir nos pochoirs
              </Link>
              <a href="#utilisation" className="btn bg-white/10 text-white hover:bg-white/20">
                Comment les utiliser
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Types de pochoirs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les types de pochoirs
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Choisissez le pochoir adapté à vos besoins
            </p>
          </div>

          {/* Type Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {typesPochoirs.map((type) => (
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
                {type.nom}
              </button>
            ))}
          </div>

          {/* Active Type Content */}
          {activeTypeData && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-rose-pale/30 to-white rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-rose-fonce">{activeTypeData.icon}</span>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-charbon">{activeTypeData.nom}</h3>
                    <p className="text-charbon/70">{activeTypeData.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-2xl p-5">
                    <h4 className="font-semibold text-green-800 mb-3">Avantages</h4>
                    <ul className="space-y-2">
                      {activeTypeData.avantages.map((avantage, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-green-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          {avantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-2xl p-5">
                    <h4 className="font-semibold text-orange-800 mb-3">Inconvénients</h4>
                    <ul className="space-y-2">
                      {activeTypeData.inconvenients.map((inconvenient, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-orange-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                          {inconvenient}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 text-center">
                  <span className="text-charbon/60 text-sm">Prix moyen</span>
                  <p className="text-2xl font-bold text-rose-fonce">{activeTypeData.prix}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Formes populaires */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les formes de sourcils populaires
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Découvrez les formes les plus demandées
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {formesSourcils.map((forme, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-charbon text-lg">{forme.nom}</h3>
                  <span className="text-rose-fonce font-bold">{forme.popularite}%</span>
                </div>
                <p className="text-charbon/70 text-sm mb-4">{forme.description}</p>
                <div className="h-2 bg-nude-rose/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-fonce to-or-rose rounded-full"
                    style={{ width: `${forme.popularite}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment utiliser */}
      <section id="utilisation" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Comment utiliser un pochoir ?
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              5 étapes pour des sourcils parfaits
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {etapesUtilisation.map((etape) => (
              <div key={etape.numero} className="flex-1 min-w-[180px] max-w-[220px]">
                <div className="bg-gradient-to-br from-rose-pale/30 to-white rounded-2xl p-6 text-center h-full">
                  <div className="w-14 h-14 bg-rose-fonce rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    {etape.icon}
                  </div>
                  <span className="text-rose-fonce font-bold text-sm">Étape {etape.numero}</span>
                  <h3 className="font-semibold text-charbon mt-1 mb-2">{etape.titre}</h3>
                  <p className="text-charbon/70 text-sm">{etape.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Nos pochoirs et accessoires
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {produitsAssocies.map((produit, index) => (
              <Link
                key={index}
                href={produit.slug}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all group"
              >
                <div className="aspect-square bg-rose-pale/30 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-rose-fonce/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-charbon group-hover:text-rose-fonce transition-colors">{produit.nom}</h3>
                <p className="text-charbon/60 text-sm mb-2">{produit.description}</p>
                <span className="text-rose-fonce font-bold">{produit.prix}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/boutique" className="btn-primary">
              Voir toute la boutique
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions sur les pochoirs"
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
