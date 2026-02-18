'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const cicatrisationJours = [
  {
    jour: 'Jour 1',
    titre: 'Juste après la séance',
    description: 'Les sourcils sont intenses, légèrement gonflés. C\'est normal ! La couleur paraît 40% plus foncée qu\'elle ne le sera au final.',
    conseils: ['Nettoyer délicatement avec eau micellaire', 'Appliquer la crème cicatrisante', 'Ne pas mouiller excessivement'],
    couleur: 'bg-rose-fonce',
    intensite: 100,
  },
  {
    jour: 'Jours 2-3',
    titre: 'Début de la cicatrisation',
    description: 'Les sourcils commencent à sécher. Une légère sensation de tiraillement est normale. La couleur reste très intense.',
    conseils: ['Continuer la crème cicatrisante 2x/jour', 'Éviter la transpiration excessive', 'Ne pas gratter'],
    couleur: 'bg-rose-fonce/90',
    intensite: 95,
  },
  {
    jour: 'Jours 4-7',
    titre: 'Formation des croûtes',
    description: 'Des petites croûtes fines se forment. NE PAS les arracher ! Elles vont tomber naturellement, emportant une partie de la couleur.',
    conseils: ['Patience, ne touchez pas !', 'Hydrater légèrement si tiraillement', 'Éviter maquillage sur la zone'],
    couleur: 'bg-or-rose',
    intensite: 80,
  },
  {
    jour: 'Jours 8-14',
    titre: 'Chute des croûtes',
    description: 'Les croûtes tombent progressivement. Les sourcils semblent très clairs, presque effacés. C\'est la phase "fantôme" - ne paniquez pas !',
    conseils: ['C\'est normal, la couleur va remonter', 'Continuer à hydrater', 'Protéger du soleil'],
    couleur: 'bg-nude-rose',
    intensite: 40,
  },
  {
    jour: 'Semaines 3-4',
    titre: 'Remontée de la couleur',
    description: 'La couleur commence à remonter sous la peau. Les pigments se stabilisent et le résultat final commence à apparaître.',
    conseils: ['Observer l\'évolution', 'Maintenir une bonne hydratation', 'Noter les zones à retoucher'],
    couleur: 'bg-rose-poudre',
    intensite: 70,
  },
  {
    jour: 'Semaines 5-6',
    titre: 'Résultat final',
    description: 'La cicatrisation est complète. La couleur est stabilisée et vous pouvez voir le résultat définitif. C\'est le moment de la retouche si nécessaire.',
    conseils: ['Évaluer le résultat avec votre praticien', 'Planifier la retouche', 'Profiter de vos nouveaux sourcils !'],
    couleur: 'bg-rose-fonce/80',
    intensite: 85,
  },
]

const erreursEviter = [
  {
    erreur: 'Arracher les croûtes',
    consequence: 'Risque d\'arrachement des pigments et de cicatrices',
    icon: '🚫',
  },
  {
    erreur: 'Exposition au soleil',
    consequence: 'Décoloration prématurée et cicatrisation ralentie',
    icon: '☀️',
  },
  {
    erreur: 'Piscine / Sauna',
    consequence: 'Infection possible et dilution des pigments',
    icon: '🏊',
  },
  {
    erreur: 'Maquillage sur la zone',
    consequence: 'Obstruction des pores et risque d\'infection',
    icon: '💄',
  },
  {
    erreur: 'Sport intensif',
    consequence: 'La transpiration peut affecter la prise des pigments',
    icon: '🏃',
  },
  {
    erreur: 'Soins du visage agressifs',
    consequence: 'Exfoliation prématurée des pigments',
    icon: '🧴',
  },
]

const faqs = [
  {
    question: 'Combien de temps dure la cicatrisation du microblading ?',
    answer: 'La cicatrisation complète du microblading prend entre 4 et 6 semaines. Les croûtes tombent généralement entre le 7ème et le 14ème jour. La couleur définitive apparaît vers la 4ème semaine, moment où vous pouvez évaluer le résultat final et planifier une éventuelle retouche.',
  },
  {
    question: 'Est-ce normal que mes sourcils soient très foncés après le microblading ?',
    answer: 'Oui, c\'est tout à fait normal ! Juste après la séance, les sourcils paraissent 30 à 40% plus foncés que le résultat final. Cette intensité diminue progressivement pendant la cicatrisation. Ne jugez pas le résultat avant 4 semaines minimum.',
  },
  {
    question: 'Pourquoi mes sourcils ont presque disparu après les croûtes ?',
    answer: 'C\'est la fameuse "phase fantôme" ! Quand les croûtes tombent (jours 8-14), elles emportent une couche superficielle de pigments. Les sourcils semblent très clairs ou effacés. Pas de panique : la couleur remonte progressivement sous la peau pendant les semaines 3-4.',
  },
  {
    question: 'Puis-je mettre de l\'eau sur mes sourcils ?',
    answer: 'Évitez de mouiller directement vos sourcils pendant les 10 premiers jours. Lors du nettoyage du visage, contournez la zone. Si de l\'eau touche vos sourcils, tamponnez délicatement avec un mouchoir propre. Après 10 jours, vous pouvez reprendre un nettoyage normal.',
  },
  {
    question: 'Quelle crème utiliser pour la cicatrisation ?',
    answer: 'Utilisez uniquement la crème cicatrisante fournie par votre praticien ou une crème qu\'il vous recommande. Généralement, il s\'agit d\'une crème à base de vitamine A et E, type Cicaplast ou crème spéciale dermopigmentation. Appliquez une fine couche 2 à 3 fois par jour.',
  },
  {
    question: 'Quand puis-je me maquiller les sourcils ?',
    answer: 'Attendez au minimum 2 semaines, idéalement 3-4 semaines, avant d\'appliquer du maquillage sur vos sourcils. La zone doit être complètement cicatrisée pour éviter tout risque d\'infection ou d\'interférence avec les pigments.',
  },
]

const relatedArticles = [
  {
    title: 'Microblading croûtes',
    slug: '/sourcils/microblading/croutes',
    excerpt: 'Comprendre la formation des croûtes',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    category: 'Post-soin',
  },
  {
    title: 'Microblading raté',
    slug: '/sourcils/microblading/rate',
    excerpt: 'Solutions si ça ne se passe pas bien',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400',
    category: 'Problèmes',
  },
  {
    title: 'Microblading guide complet',
    slug: '/sourcils/microblading',
    excerpt: 'Tout savoir sur la technique',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400',
    category: 'Guide',
  },
]

export default function MicrobladingCicatrisationPage() {
  const [activeJour, setActiveJour] = useState(0)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-charbon to-rose-fonce/30 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-poudre rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-or-rose rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Sourcils', href: '/sourcils' },
              { label: 'Microblading', href: '/sourcils/microblading' },
              { label: 'Cicatrisation', href: '/sourcils/microblading/cicatrisation' },
            ]}
            variant="dark"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Guide Post-Soin
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
                Cicatrisation <span className="text-rose-poudre">Microblading</span>
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
                Jour par jour, découvrez les étapes de la cicatrisation de votre microblading.
                Suivez notre guide pour un résultat optimal et apprenez à identifier ce qui est
                normal de ce qui ne l&apos;est pas.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <span className="text-3xl font-bold text-rose-poudre">4-6</span>
                  <p className="text-white/70 text-sm">semaines de cicatrisation</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <span className="text-3xl font-bold text-rose-poudre">7-14</span>
                  <p className="text-white/70 text-sm">jours pour les croûtes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <span className="text-3xl font-bold text-rose-poudre">2-3x</span>
                  <p className="text-white/70 text-sm">crème par jour</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800"
                  alt="Cicatrisation microblading étapes"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charbon/60 via-transparent to-transparent" />
              </div>

              {/* Floating Timeline Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-rose-pale rounded-full flex items-center justify-center">
                    <span className="text-xl">📅</span>
                  </div>
                  <div>
                    <p className="font-semibold text-charbon">Timeline</p>
                    <p className="text-xs text-charbon/60">6 étapes clés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les étapes de cicatrisation jour par jour
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Cliquez sur chaque période pour découvrir ce qui se passe et les conseils adaptés
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {cicatrisationJours.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveJour(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeJour === index
                    ? 'bg-rose-fonce text-white shadow-lg'
                    : 'bg-rose-pale/50 text-charbon hover:bg-rose-pale'
                }`}
              >
                {item.jour}
              </button>
            ))}
          </div>

          {/* Active Day Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-gradient-to-br from-rose-pale/30 to-white rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${cicatrisationJours[activeJour].couleur} rounded-2xl flex items-center justify-center text-white text-2xl font-bold`}>
                  {activeJour + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-charbon">
                    {cicatrisationJours[activeJour].jour}
                  </h3>
                  <p className="text-rose-fonce font-medium">
                    {cicatrisationJours[activeJour].titre}
                  </p>
                </div>
              </div>

              <p className="text-charbon/80 text-lg leading-relaxed mb-6">
                {cicatrisationJours[activeJour].description}
              </p>

              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-charbon mb-4 flex items-center gap-2">
                  <span className="text-xl">✅</span> Conseils pour cette période
                </h4>
                <ul className="space-y-3">
                  {cicatrisationJours[activeJour].conseils.map((conseil, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-rose-pale rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-rose-fonce text-sm">✓</span>
                      </span>
                      <span className="text-charbon/80">{conseil}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Intensity Meter */}
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-xl font-playfair font-bold text-charbon mb-6">
                Intensité de la couleur
              </h3>

              <div className="space-y-6">
                {cicatrisationJours.map((item, index) => (
                  <div key={index} className={`transition-opacity ${activeJour === index ? 'opacity-100' : 'opacity-40'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-charbon">{item.jour}</span>
                      <span className="text-sm text-charbon/60">{item.intensite}%</span>
                    </div>
                    <div className="h-3 bg-nude-rose/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.couleur} rounded-full transition-all duration-500`}
                        style={{ width: `${item.intensite}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-rose-pale/30 rounded-xl">
                <p className="text-sm text-charbon/70">
                  <strong className="text-charbon">💡 À retenir :</strong> La phase "fantôme" (jours 8-14)
                  est normale. La couleur remonte toujours après !
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
              Les erreurs à éviter absolument
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Ces comportements peuvent compromettre votre résultat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {erreursEviter.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all border-l-4 border-red-400"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="font-semibold text-charbon">{item.erreur}</h3>
                </div>
                <p className="text-charbon/70 text-sm">{item.consequence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit de soins CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-rose-fonce to-or-rose rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-4">
                  Kit de soins post-microblading
                </h2>
                <p className="text-white/90 mb-6">
                  Nos produits spécialement formulés pour optimiser la cicatrisation
                  et prolonger la durée de votre microblading.
                </p>
                <Link href="/boutique" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
                  Découvrir le kit
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500"
                  alt="Kit soins post-microblading"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions sur la cicatrisation"
        description="Les réponses à vos inquiétudes les plus courantes"
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
