'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const evolutionCroutes = [
  {
    jour: 'Jours 1-3',
    titre: 'Phase de cicatrisation initiale',
    description: 'Pas encore de croûtes visibles. Les sourcils sont gonflés et très foncés. La zone peut suinter légèrement, c\'est la lymphe qui s\'échappe - c\'est normal !',
    icon: '💧',
    conseil: 'Tamponnez délicatement avec un coton propre si nécessaire.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400',
  },
  {
    jour: 'Jours 4-5',
    titre: 'Début de la formation',
    description: 'La peau commence à sécher et les premières croûtes fines se forment. Les sourcils peuvent démanger - résistez à la tentation de gratter !',
    icon: '🔸',
    conseil: 'Continuez à appliquer la crème cicatrisante en fine couche.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
  },
  {
    jour: 'Jours 6-8',
    titre: 'Croûtes formées',
    description: 'Les croûtes sont maintenant bien présentes. Elles ressemblent à des pellicules fines sur les traits de microblading. La couleur peut sembler tachetée.',
    icon: '📍',
    conseil: 'Ne tirez JAMAIS sur les croûtes, même si elles se décollent partiellement.',
    image: 'https://images.unsplash.com/photo-1594359123637-32fcb7aab042?w=400',
  },
  {
    jour: 'Jours 9-14',
    titre: 'Chute progressive',
    description: 'Les croûtes commencent à tomber naturellement. Certaines zones semblent "effacées" - c\'est la fameuse phase fantôme. Patience !',
    icon: '✨',
    conseil: 'Laissez les croûtes tomber seules lors du nettoyage ou pendant la nuit.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
  },
]

const typeCroutes = [
  {
    type: 'Croûtes fines normales',
    description: 'Pellicules légères, quasi transparentes, suivant les traits du microblading',
    status: 'normal',
    icon: '✅',
    action: 'Continuez les soins normalement',
  },
  {
    type: 'Croûtes épaisses',
    description: 'Croûtes plus marquées, généralement dues à une peau sèche ou une cicatrisation plus lente',
    status: 'attention',
    icon: '⚠️',
    action: 'Hydratez bien, consultez si ça persiste',
  },
  {
    type: 'Croûtes suintantes',
    description: 'Croûtes qui restent humides avec du liquide jaune ou verdâtre',
    status: 'alerte',
    icon: '🚨',
    action: 'Possible infection - Consultez immédiatement',
  },
  {
    type: 'Croûtes avec rougeur intense',
    description: 'Rougeur qui s\'étend autour de la zone avec chaleur ou douleur',
    status: 'alerte',
    icon: '🚨',
    action: 'Signe d\'infection - Consultez un médecin',
  },
]

const erreursCommunes = [
  {
    erreur: 'Arracher les croûtes',
    consequence: 'Enlève les pigments avec, crée des trous dans le résultat final',
    solution: 'Laissez-les tomber naturellement',
  },
  {
    erreur: 'Trop de crème cicatrisante',
    consequence: 'Étouffe la peau, ramollit les croûtes, risque de perte de pigments',
    solution: 'Une fine couche suffit, 2-3 fois par jour',
  },
  {
    erreur: 'Mouiller excessivement',
    consequence: 'Les croûtes gonflent et arrachent les pigments en tombant',
    solution: 'Évitez l\'eau directe les 10 premiers jours',
  },
  {
    erreur: 'Gratter les démangeaisons',
    consequence: 'Même effet que d\'arracher les croûtes',
    solution: 'Tapotez légèrement ou utilisez un coton-tige',
  },
]

const faqs = [
  {
    question: 'Est-ce normal d\'avoir des croûtes après le microblading ?',
    answer: 'Oui, absolument ! Les croûtes font partie du processus normal de cicatrisation. Elles commencent à se former vers le 4ème jour et tombent naturellement entre le 7ème et le 14ème jour. C\'est la peau qui se répare après avoir été travaillée.',
  },
  {
    question: 'Que faire si une croûte est tombée trop tôt ?',
    answer: 'Pas de panique. Si une croûte est tombée naturellement, même un peu tôt, le pigment a eu le temps de se fixer partiellement. La zone peut sembler plus claire mais la couleur peut encore remonter. Si vous avez arraché la croûte accidentellement, la zone concernée pourra être retouchée lors de la séance de perfectionnement.',
  },
  {
    question: 'Mes croûtes emportent de la couleur, c\'est normal ?',
    answer: 'Oui, c\'est tout à fait normal. Les croûtes sont composées de peau morte et de pigments superficiels. Les pigments profonds restent dans la peau. C\'est pourquoi les sourcils semblent très clairs après la chute des croûtes, mais la couleur remonte en 2-3 semaines.',
  },
  {
    question: 'Combien de temps faut-il pour que toutes les croûtes tombent ?',
    answer: 'En général, toutes les croûtes sont tombées entre le 10ème et le 14ème jour. Certaines zones peuvent mettre un peu plus de temps, notamment les coins internes des sourcils. Ne forcez jamais la chute, même si d\'autres zones sont déjà guéries.',
  },
  {
    question: 'Mes croûtes ne tombent pas, que faire ?',
    answer: 'Si après 14 jours certaines croûtes persistent, ne les arrachez pas. Continuez à appliquer la crème cicatrisante et elles finiront par partir. Si après 3 semaines des croûtes sont encore présentes ou si elles semblent anormales (épaisses, rouges, suintantes), consultez votre praticien ou un dermatologue.',
  },
  {
    question: 'Puis-je me maquiller malgré les croûtes ?',
    answer: 'Non, évitez tout maquillage sur et autour des sourcils tant que les croûtes n\'ont pas complètement disparu. Les produits de maquillage peuvent obstruer les pores, provoquer des infections et affecter la bonne prise des pigments. Attendez au moins 2 semaines.',
  },
]

const relatedArticles = [
  {
    title: 'Cicatrisation microblading',
    slug: '/sourcils/microblading/cicatrisation',
    excerpt: 'Guide complet jour par jour',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    category: 'Post-soin',
  },
  {
    title: 'Microblading raté',
    slug: '/sourcils/microblading/rate',
    excerpt: 'Solutions si problème',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400',
    category: 'Problèmes',
  },
  {
    title: 'Soins post-traitement',
    slug: '/boutique',
    excerpt: 'Produits cicatrisants',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    category: 'Boutique',
  },
]

export default function MicrobladingCroutesPage() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-charbon to-rose-fonce/20 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-rose-poudre rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-or-rose rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Sourcils', href: '/sourcils' },
              { label: 'Microblading', href: '/sourcils/microblading' },
              { label: 'Croûtes', href: '/sourcils/microblading/croutes' },
            ]}
            variant="dark"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Guide Cicatrisation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
                Croûtes <span className="text-rose-poudre">Microblading</span>
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
                Les croûtes vous inquiètent ? C&apos;est une étape normale de la cicatrisation !
                Découvrez comment elles évoluent, ce qui est normal et quand s&apos;inquiéter.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <span className="text-2xl font-bold text-rose-poudre">4-14</span>
                  <p className="text-white/70 text-sm">jours de croûtes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <span className="text-2xl font-bold text-rose-poudre">100%</span>
                  <p className="text-white/70 text-sm">normal</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800"
                  alt="Croûtes microblading évolution"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charbon/50 via-transparent to-transparent" />
              </div>

              {/* Info Card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🔬</span>
                  <div>
                    <p className="font-semibold text-charbon text-sm">Phase naturelle</p>
                    <p className="text-xs text-charbon/60">Partie du processus de guérison</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Évolution des croûtes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              L&apos;évolution des croûtes jour par jour
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Suivez le parcours normal de vos croûtes de microblading
            </p>
          </div>

          {/* Phase Selector */}
          <div className="flex overflow-x-auto gap-3 mb-10 pb-2 scrollbar-hide">
            {evolutionCroutes.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all ${
                  activePhase === index
                    ? 'bg-rose-fonce text-white shadow-lg'
                    : 'bg-rose-pale/50 text-charbon hover:bg-rose-pale'
                }`}
              >
                <span className="mr-2">{phase.icon}</span>
                {phase.jour}
              </button>
            ))}
          </div>

          {/* Active Phase Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={evolutionCroutes[activePhase].image}
                alt={evolutionCroutes[activePhase].titre}
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-gradient-to-br from-rose-pale/30 to-white rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-rose-fonce rounded-2xl flex items-center justify-center text-3xl">
                  {evolutionCroutes[activePhase].icon}
                </div>
                <div>
                  <span className="text-sm font-medium text-rose-fonce">
                    {evolutionCroutes[activePhase].jour}
                  </span>
                  <h3 className="text-2xl font-playfair font-bold text-charbon">
                    {evolutionCroutes[activePhase].titre}
                  </h3>
                </div>
              </div>

              <p className="text-charbon/80 text-lg leading-relaxed mb-6">
                {evolutionCroutes[activePhase].description}
              </p>

              <div className="bg-white rounded-xl p-5 border-l-4 border-rose-fonce">
                <p className="text-charbon font-medium flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  {evolutionCroutes[activePhase].conseil}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de croûtes */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Reconnaître les types de croûtes
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Apprenez à distinguer ce qui est normal de ce qui nécessite une consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {typeCroutes.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-card border-l-4 ${
                  item.status === 'normal' ? 'border-green-500' :
                  item.status === 'attention' ? 'border-orange-500' : 'border-red-500'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-charbon mb-2">{item.type}</h3>
                    <p className="text-charbon/70 text-sm mb-4">{item.description}</p>
                    <p className={`text-sm font-medium ${
                      item.status === 'normal' ? 'text-green-600' :
                      item.status === 'attention' ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      → {item.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Erreurs à éviter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les erreurs à ne pas faire
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Ces comportements peuvent compromettre votre résultat final
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {erreursCommunes.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🚫</span>
                  <h3 className="font-semibold text-charbon">{item.erreur}</h3>
                </div>
                <p className="text-red-600 text-sm mb-3">
                  <strong>Conséquence :</strong> {item.consequence}
                </p>
                <p className="text-green-600 text-sm">
                  <strong>✓ À faire :</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Produits */}
      <section className="section-padding bg-gradient-to-r from-rose-fonce to-or-rose">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Optimisez votre cicatrisation
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Notre crème cicatrisante spéciale microblading aide à maintenir
            les croûtes hydratées sans les étouffer.
          </p>
          <Link href="/boutique" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
            Découvrir nos soins
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions sur les croûtes"
        description="Réponses à vos inquiétudes les plus courantes"
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
