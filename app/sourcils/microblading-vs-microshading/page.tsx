'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const comparaison = [
  {
    critere: 'Technique utilisée',
    microblading: {
      value: 'Lame manuelle',
      description: 'Incisions fines créant des traits semblables à des poils',
    },
    microshading: {
      value: 'Dermographe électrique',
      description: 'Points de pigment créant un effet poudré/ombré',
    },
  },
  {
    critere: 'Effet visuel',
    microblading: {
      value: 'Poils naturels',
      description: 'Imite parfaitement les poils de sourcils un par un',
    },
    microshading: {
      value: 'Maquillage poudré',
      description: 'Effet crayon ou fard à sourcils, plus rempli',
    },
  },
  {
    critere: 'Types de peau idéaux',
    microblading: {
      value: 'Normale à sèche',
      description: 'Déconseillé sur peau grasse (traits qui s\'étalent)',
    },
    microshading: {
      value: 'Tous types',
      description: 'Excellent sur peau grasse et mature',
    },
  },
  {
    critere: 'Durée de vie',
    microblading: {
      value: '12-24 mois',
      description: 'S\'estompe plus rapidement, retouches fréquentes',
    },
    microshading: {
      value: '18-36 mois',
      description: 'Tenue plus longue, moins de retouches',
    },
  },
  {
    critere: 'Cicatrisation',
    microblading: {
      value: 'Plus délicate',
      description: 'Croûtes plus visibles sur les traits',
    },
    microshading: {
      value: 'Plus facile',
      description: 'Croûtes fines et moins apparentes',
    },
  },
  {
    critere: 'Niveau de douleur',
    microblading: {
      value: 'Modéré',
      description: 'Sensation de grattement plus prononcée',
    },
    microshading: {
      value: 'Léger',
      description: 'Généralement mieux toléré',
    },
  },
  {
    critere: 'Prix moyen',
    microblading: {
      value: '350€ - 500€',
      description: 'Première séance + retouche',
    },
    microshading: {
      value: '350€ - 500€',
      description: 'Première séance + retouche',
    },
  },
]

const profilsRecommandes = [
  {
    profil: 'Sourcils clairsemés à combler',
    recommandation: 'microblading',
    raison: 'Les traits individuels s\'intègrent parfaitement aux poils existants',
    icon: '👤',
  },
  {
    profil: 'Peau grasse ou mixte',
    recommandation: 'microshading',
    raison: 'Les points de pigment ne s\'étalent pas contrairement aux traits',
    icon: '💧',
  },
  {
    profil: 'Effet maquillé permanent',
    recommandation: 'microshading',
    raison: 'Donne l\'impression d\'avoir toujours du maquillage sourcils',
    icon: '💄',
  },
  {
    profil: 'Peau mature',
    recommandation: 'microshading',
    raison: 'Meilleure tenue sur peau qui a perdu en élasticité',
    icon: '🌸',
  },
  {
    profil: 'Alopécie ou pelade',
    recommandation: 'microshading',
    raison: 'Couvre mieux les zones sans aucun poil',
    icon: '🩺',
  },
  {
    profil: 'Look ultra naturel',
    recommandation: 'microblading',
    raison: 'L\'effet poil par poil est le plus réaliste',
    icon: '🌿',
  },
  {
    profil: 'Combo brows',
    recommandation: 'les deux',
    raison: 'Microblading pour le naturel + microshading pour la densité',
    icon: '✨',
  },
]

const faqs = [
  {
    question: 'Quelle est la différence principale entre microblading et microshading ?',
    answer: 'Le microblading utilise une lame manuelle pour créer des traits imitant des poils naturels, tandis que le microshading utilise un dermographe pour implanter des points de pigment créant un effet poudré. Le microblading donne un look ultra-naturel, le microshading un effet maquillé.',
  },
  {
    question: 'Lequel dure le plus longtemps ?',
    answer: 'Le microshading dure généralement plus longtemps (18-36 mois) que le microblading (12-24 mois). Les points de pigment du microshading sont plus stables et moins susceptibles de s\'estomper ou de s\'étaler avec le temps.',
  },
  {
    question: 'Puis-je faire les deux en même temps ?',
    answer: 'Oui, c\'est ce qu\'on appelle le "combo brows" ou "hybrid brows". Le praticien utilise le microblading pour la tête du sourcil (effet poils naturels) et le microshading pour le corps et la queue (densité et définition). C\'est souvent considéré comme le meilleur des deux mondes.',
  },
  {
    question: 'Lequel est le moins douloureux ?',
    answer: 'Le microshading est généralement considéré comme moins douloureux. Le dermographe est plus doux que la lame du microblading. Cependant, une crème anesthésiante est utilisée dans les deux cas et la différence reste légère.',
  },
  {
    question: 'Quel est le meilleur choix pour une peau grasse ?',
    answer: 'Le microshading est fortement recommandé pour les peaux grasses. Les traits de microblading ont tendance à s\'étaler et à devenir flous sur ce type de peau, tandis que les points de microshading restent nets. Évitez le microblading si vous avez la peau grasse.',
  },
  {
    question: 'Lequel est le plus cher ?',
    answer: 'Les deux techniques ont des prix similaires, entre 350€ et 500€ en moyenne pour une prestation complète (première séance + retouche). Le combo brows est légèrement plus cher (400€ à 600€) car il combine les deux techniques.',
  },
]

const relatedArticles = [
  {
    title: 'Microblading guide complet',
    slug: '/sourcils/microblading',
    excerpt: 'Tout sur la technique poil par poil',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    category: 'Guide',
  },
  {
    title: 'Microshading guide complet',
    slug: '/sourcils/microshading',
    excerpt: 'Tout sur les sourcils poudrés',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400',
    category: 'Guide',
  },
  {
    title: 'Formation dermopigmentation',
    slug: '/formations/dermopigmentation',
    excerpt: 'Maîtrisez les deux techniques',
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400',
    category: 'Formation',
  },
]

export default function MicrobladingVsMicroshadingPage() {
  const [activeVue, setActiveVue] = useState<'tableau' | 'profils'>('tableau')

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-rose-fonce/30 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-poudre rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-or-rose rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Sourcils', href: '/sourcils' },
              { label: 'Microblading vs Microshading', href: '/sourcils/microblading-vs-microshading' },
            ]}
            variant="dark"
          />

          <div className="text-center max-w-4xl mx-auto mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Comparatif Complet
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              <span className="text-rose-poudre">Microblading</span> vs <span className="text-or-rose">Microshading</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Deux techniques, deux résultats différents. Découvrez les avantages et inconvénients
              de chaque méthode pour faire le bon choix selon votre profil.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-rose-poudre/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <span className="text-3xl mb-2 block">✏️</span>
                <h3 className="text-white font-semibold">Microblading</h3>
                <p className="text-white/60 text-sm">Effet poils naturels</p>
              </div>
              <div className="flex items-center">
                <span className="text-4xl text-white/40">VS</span>
              </div>
              <div className="bg-or-rose/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <span className="text-3xl mb-2 block">🎨</span>
                <h3 className="text-white font-semibold">Microshading</h3>
                <p className="text-white/60 text-sm">Effet poudré</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vue Toggle */}
      <section className="bg-white py-8 border-b border-nude-rose/30 sticky top-0 z-20">
        <div className="container-custom">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveVue('tableau')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeVue === 'tableau'
                  ? 'bg-rose-fonce text-white shadow-lg'
                  : 'bg-rose-pale/50 text-charbon hover:bg-rose-pale'
              }`}
            >
              📊 Comparaison détaillée
            </button>
            <button
              onClick={() => setActiveVue('profils')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeVue === 'profils'
                  ? 'bg-rose-fonce text-white shadow-lg'
                  : 'bg-rose-pale/50 text-charbon hover:bg-rose-pale'
              }`}
            >
              👤 Selon votre profil
            </button>
          </div>
        </div>
      </section>

      {/* Comparaison Tableau */}
      {activeVue === 'tableau' && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-4 px-6 text-left text-charbon font-semibold bg-beige-creme rounded-tl-2xl">
                      Critère
                    </th>
                    <th className="py-4 px-6 text-center bg-rose-pale/50">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xl">✏️</span>
                        <span className="font-semibold text-charbon">Microblading</span>
                      </div>
                    </th>
                    <th className="py-4 px-6 text-center bg-or-rose/20 rounded-tr-2xl">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xl">🎨</span>
                        <span className="font-semibold text-charbon">Microshading</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparaison.map((row, index) => (
                    <tr key={index} className="border-b border-nude-rose/30">
                      <td className="py-5 px-6 bg-beige-creme/50 font-medium text-charbon">
                        {row.critere}
                      </td>
                      <td className="py-5 px-6 bg-rose-pale/10">
                        <div className="text-center">
                          <p className="font-semibold text-charbon">{row.microblading.value}</p>
                          <p className="text-sm text-charbon/60 mt-1">{row.microblading.description}</p>
                        </div>
                      </td>
                      <td className="py-5 px-6 bg-or-rose/5">
                        <div className="text-center">
                          <p className="font-semibold text-charbon">{row.microshading.value}</p>
                          <p className="text-sm text-charbon/60 mt-1">{row.microshading.description}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Profils Recommandés */}
      {activeVue === 'profils' && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
                Quelle technique pour vous ?
              </h2>
              <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
                Trouvez la recommandation adaptée à votre profil
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {profilsRecommandes.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-card border-2 border-transparent hover:border-rose-poudre transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="font-semibold text-charbon">{item.profil}</h3>
                  </div>
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    item.recommandation === 'microblading' ? 'bg-rose-pale text-rose-fonce' :
                    item.recommandation === 'microshading' ? 'bg-or-rose/20 text-or-rose' :
                    'bg-gradient-to-r from-rose-pale to-or-rose/20 text-charbon'
                  }`}>
                    → {item.recommandation === 'les deux' ? 'Combo Brows' : item.recommandation.charAt(0).toUpperCase() + item.recommandation.slice(1)}
                  </div>
                  <p className="text-charbon/70 text-sm">{item.raison}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Combo Brows */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-rose-fonce/10 to-or-rose/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-gradient-to-r from-rose-fonce to-or-rose text-white px-4 py-2 rounded-full text-sm font-medium">
                  Le meilleur des deux mondes
                </span>
                <h2 className="text-3xl font-playfair font-bold text-charbon mt-6 mb-4">
                  Le Combo Brows
                </h2>
                <p className="text-charbon/70 mb-6">
                  Pourquoi choisir quand on peut avoir les deux ? Le combo brows combine
                  microblading et microshading pour un résultat optimal :
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-charbon/80">
                    <span className="w-6 h-6 bg-rose-pale rounded-full flex items-center justify-center">✏️</span>
                    <strong>Microblading</strong> sur la tête du sourcil pour des poils réalistes
                  </li>
                  <li className="flex items-center gap-3 text-charbon/80">
                    <span className="w-6 h-6 bg-or-rose/30 rounded-full flex items-center justify-center">🎨</span>
                    <strong>Microshading</strong> sur le corps et la queue pour la densité
                  </li>
                </ul>
                <Link href="/sourcils/microblading" className="btn-primary">
                  En savoir plus
                </Link>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600"
                  alt="Combo brows résultat"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Tout ce qu'il faut savoir pour choisir"
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
