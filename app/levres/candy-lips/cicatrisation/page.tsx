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
    titre: 'Juste après la séance',
    description: 'Les lèvres sont gonflées et la couleur est TRÈS intense (40-50% plus foncée que le résultat final). C\'est tout à fait normal !',
    conseils: ['Appliquer la crème cicatrisante toutes les 2h', 'Boire à la paille', 'Éviter les aliments chauds'],
    intensite: 100,
    gonflement: 90,
    icon: '🔥',
  },
  {
    jour: 'Jours 2-3',
    titre: 'Gonflement maximal',
    description: 'Le gonflement peut être à son maximum. Les lèvres peuvent tirailler. La couleur reste très intense.',
    conseils: ['Continuer la crème régulièrement', 'Éviter de manger épicé/acide', 'Ne pas mouiller excessivement'],
    intensite: 95,
    gonflement: 100,
    icon: '💧',
  },
  {
    jour: 'Jours 4-5',
    titre: 'Début du pelage',
    description: 'Le gonflement diminue. Des petites peaux commencent à se détacher. NE PAS les arracher !',
    conseils: ['Laisser les peaux tomber naturellement', 'Hydrater fréquemment', 'Éviter de lécher les lèvres'],
    intensite: 80,
    gonflement: 60,
    icon: '🍂',
  },
  {
    jour: 'Jours 6-8',
    titre: 'Pelage actif',
    description: 'Les peaux se détachent en emportant du pigment. Les lèvres peuvent sembler très claires ou irrégulières. Patience !',
    conseils: ['Pas de panique si la couleur semble disparaître', 'Continuer à hydrater', 'Ne pas toucher'],
    intensite: 40,
    gonflement: 30,
    icon: '✨',
  },
  {
    jour: 'Jours 9-14',
    titre: 'Phase fantôme',
    description: 'Les lèvres peuvent sembler presque "effacées". La couleur est sous la peau et va remonter progressivement.',
    conseils: ['La couleur va remonter', 'Protéger du soleil', 'Pas de maquillage sur les lèvres'],
    intensite: 30,
    gonflement: 10,
    icon: '👻',
  },
  {
    jour: 'Semaines 3-6',
    titre: 'Remontée de couleur',
    description: 'La couleur remonte progressivement. Le résultat définitif apparaît vers la 4ème semaine. C\'est le moment de la retouche si nécessaire.',
    conseils: ['Observer l\'évolution', 'Prendre RDV pour la retouche', 'Protéger du soleil'],
    intensite: 70,
    gonflement: 0,
    icon: '🌸',
  },
]

const erreursEviter = [
  { erreur: 'Arracher les peaux', consequence: 'Arrachement des pigments, résultat irrégulier', icon: '🚫' },
  { erreur: 'Manger chaud/épicé', consequence: 'Irritation, gonflement prolongé', icon: '🌶️' },
  { erreur: 'Embrasser', consequence: 'Transfert de bactéries, infection possible', icon: '💋' },
  { erreur: 'Mettre du rouge à lèvres', consequence: 'Infection, interférence avec les pigments', icon: '💄' },
  { erreur: 'S\'exposer au soleil', consequence: 'Décoloration, cicatrisation ralentie', icon: '☀️' },
  { erreur: 'Faire du sport intense', consequence: 'Transpiration, gonflement', icon: '🏃' },
]

const faqs = [
  {
    question: 'Combien de temps dure la cicatrisation du candy lips ?',
    answer: 'La cicatrisation complète prend 4 à 6 semaines. Les peaux tombent entre le 4ème et le 10ème jour. La couleur définitive apparaît vers la 4ème semaine. Une retouche est généralement prévue à 4-6 semaines pour parfaire le résultat.',
  },
  {
    question: 'Pourquoi mes lèvres sont très foncées après la séance ?',
    answer: 'C\'est tout à fait normal ! Juste après la séance, les lèvres paraissent 40 à 50% plus foncées que le résultat final. Cette intensité diminue progressivement avec le pelage et la cicatrisation. Ne jugez pas le résultat avant 4 semaines.',
  },
  {
    question: 'Mes lèvres ont perdu toute leur couleur, c\'est normal ?',
    answer: 'Oui ! C\'est la fameuse "phase fantôme" qui survient entre le 8ème et le 14ème jour. Quand les peaux tombent, elles emportent les pigments superficiels. Les pigments profonds remontent ensuite progressivement sous la peau.',
  },
  {
    question: 'Puis-je manger normalement ?',
    answer: 'Les premiers 7 jours, évitez : les aliments chauds, épicés, acides (agrumes, tomates), salés. Utilisez une paille pour boire. Après le pelage, vous pouvez reprendre une alimentation normale progressivement.',
  },
  {
    question: 'Quelle crème utiliser pour la cicatrisation ?',
    answer: 'Utilisez uniquement la crème fournie par votre praticien ou celle qu\'il recommande. Généralement, il s\'agit d\'une crème cicatrisante type Cicaplast, Bepanthen ou crème spéciale dermopigmentation. Appliquez une fine couche toutes les 2-3 heures.',
  },
  {
    question: 'Quand puis-je remettre du rouge à lèvres ?',
    answer: 'Attendez au minimum 2 semaines, idéalement 3-4 semaines, après la séance. Les lèvres doivent être complètement cicatrisées. Commencez par des produits doux et naturels.',
  },
]

const relatedArticles = [
  {
    title: 'Candy Lips guide',
    slug: '/levres/candy-lips',
    excerpt: 'Tout sur la technique',
    image: '/placeholder-lips.svg',
    category: 'Guide',
  },
  {
    title: 'Maquillage permanent lèvres raté',
    slug: '/levres/maquillage-permanent/rate',
    excerpt: 'Solutions si problème',
    image: '/placeholder-fix.svg',
    category: 'Correction',
  },
  {
    title: 'Soins post-traitement',
    slug: '/boutique',
    excerpt: 'Produits cicatrisants',
    image: '/placeholder-products.svg',
    category: 'Boutique',
  },
]

export default function CandyLipsCicatrisationPage() {
  const [activeJour, setActiveJour] = useState(0)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-rose-fonce/40 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-poudre rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-or-rose rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Lèvres', href: '/levres' },
              { label: 'Candy Lips', href: '/levres/candy-lips' },
              { label: 'Cicatrisation', href: '/levres/candy-lips/cicatrisation' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Guide Post-Soin
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Cicatrisation <span className="text-rose-poudre">Candy Lips</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Jour par jour, découvrez les étapes de la cicatrisation de votre candy lips.
              Suivez nos conseils pour un résultat optimal et apprenez à ne pas paniquer !
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-rose-poudre">4-6</span>
                <p className="text-white/70 text-sm">semaines de cicatrisation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-rose-poudre">4-10</span>
                <p className="text-white/70 text-sm">jours de pelage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              L&apos;évolution jour par jour
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Cliquez sur chaque période pour voir ce qui se passe
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {joursCicatrisation.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveJour(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeJour === index
                    ? 'bg-rose-fonce text-white shadow-lg'
                    : 'bg-rose-pale/50 text-charbon hover:bg-rose-pale'
                }`}
              >
                <span>{item.icon}</span>
                {item.jour}
              </button>
            ))}
          </div>

          {/* Active Day Content */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-rose-pale/30 to-white rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{joursCicatrisation[activeJour].icon}</span>
                <div>
                  <span className="text-sm font-medium text-rose-fonce">
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

              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-semibold text-charbon mb-4">Conseils</h4>
                <ul className="space-y-3">
                  {joursCicatrisation[activeJour].conseils.map((conseil, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-charbon/80">
                      <span className="w-6 h-6 bg-rose-pale rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-rose-fonce text-sm">✓</span>
                      </span>
                      {conseil}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Meters */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h4 className="font-semibold text-charbon mb-4">Intensité de la couleur</h4>
                <div className="space-y-4">
                  {joursCicatrisation.map((item, index) => (
                    <div key={index} className={`transition-opacity ${activeJour === index ? 'opacity-100' : 'opacity-40'}`}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-charbon">{item.jour}</span>
                        <span className="text-sm text-charbon/60">{item.intensite}%</span>
                      </div>
                      <div className="h-2 bg-rose-pale/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-rose-fonce rounded-full transition-all"
                          style={{ width: `${item.intensite}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h4 className="font-semibold text-charbon mb-4">Gonflement</h4>
                <div className="space-y-4">
                  {joursCicatrisation.map((item, index) => (
                    <div key={index} className={`transition-opacity ${activeJour === index ? 'opacity-100' : 'opacity-40'}`}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-charbon">{item.jour}</span>
                        <span className="text-sm text-charbon/60">{item.gonflement}%</span>
                      </div>
                      <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-400 rounded-full transition-all"
                          style={{ width: `${item.gonflement}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
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
              Ce qu&apos;il ne faut surtout pas faire
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {erreursEviter.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card border-l-4 border-red-400">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-semibold text-charbon">{item.erreur}</h3>
                </div>
                <p className="text-red-600 text-sm">{item.consequence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-rose-fonce to-or-rose">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Optimisez votre cicatrisation
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Notre baume réparateur est spécialement formulé pour la cicatrisation des lèvres
          </p>
          <Link href="/boutique" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
            Découvrir nos soins
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions sur la cicatrisation"
        description="Réponses à vos inquiétudes"
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
