'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const phasesCicatrisation = [
  {
    phase: 1,
    periode: 'Jour 1-3',
    titre: 'Phase inflammatoire',
    description: 'Gonflement et sensibilité sont normaux. La couleur est très intense, jusqu\'à 50% plus foncée que le résultat final.',
    symptomes: ['Gonflement modéré à important', 'Couleur très vive', 'Légère sensibilité', 'Sensation de tiraillement'],
    soins: ['Appliquer le baume cicatrisant toutes les 2h', 'Nettoyer délicatement matin et soir', 'Éviter de mouiller excessivement'],
    alertes: ['Gonflement asymétrique excessif', 'Douleur intense', 'Écoulement suspect'],
    intensiteCouleur: 100,
    gonflement: 85,
  },
  {
    phase: 2,
    periode: 'Jour 4-7',
    titre: 'Phase de desquamation',
    description: 'Les peaux commencent à se détacher naturellement. Ne surtout pas les arracher !',
    symptomes: ['Apparition de peaux sèches', 'Démangeaisons légères', 'Réduction du gonflement', 'Couleur qui s\'estompe'],
    soins: ['Continuer le baume cicatrisant', 'Laisser les peaux tomber seules', 'Hydrater régulièrement'],
    alertes: ['Peaux arrachées = pigments perdus', 'Croûtes épaisses anormales'],
    intensiteCouleur: 70,
    gonflement: 40,
  },
  {
    phase: 3,
    periode: 'Jour 8-14',
    titre: 'Phase fantôme',
    description: 'La couleur peut sembler avoir disparu. C\'est normal ! Les pigments remontent progressivement.',
    symptomes: ['Couleur très pâle', 'Aspect "effacé"', 'Peau en voie de guérison', 'Moins de sensibilité'],
    soins: ['Continuer l\'hydratation', 'Protéger du soleil', 'Éviter le maquillage'],
    alertes: ['Patience requise', 'Ne pas paniquer si couleur semble partie'],
    intensiteCouleur: 30,
    gonflement: 10,
  },
  {
    phase: 4,
    periode: 'Semaine 3-6',
    titre: 'Phase de maturation',
    description: 'La couleur remonte et se stabilise. Le résultat définitif apparaît vers la 4ème semaine.',
    symptomes: ['Remontée progressive de couleur', 'Stabilisation du pigment', 'Aspect naturel', 'Peau totalement guérie'],
    soins: ['Protection solaire SPF 30+', 'Hydratation quotidienne', 'Éviter les exfoliants'],
    alertes: ['Évaluer si retouche nécessaire', 'RDV de contrôle recommandé'],
    intensiteCouleur: 75,
    gonflement: 0,
  },
]

const conseilsEssentiels = [
  {
    categorie: 'Alimentation',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    faire: ['Boire à la paille', 'Aliments tièdes ou froids', 'Découper les aliments en petits morceaux'],
    eviter: ['Aliments chauds', 'Épicé et acide', 'Café et alcool les premiers jours'],
  },
  {
    categorie: 'Hygiène',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    faire: ['Nettoyer matin et soir en douceur', 'Appliquer le baume régulièrement', 'Utiliser des cotons propres'],
    eviter: ['Frotter les lèvres', 'Produits parfumés', 'Dentifrice sur les lèvres'],
  },
  {
    categorie: 'Activités',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    faire: ['Repos les premiers jours', 'Dormir sur le dos si possible', 'Activités calmes'],
    eviter: ['Sport intense (7 jours)', 'Sauna, hammam, piscine', 'Exposition soleil'],
  },
  {
    categorie: 'Soins',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    faire: ['Crème cicatrisante recommandée', 'SPF dès la 2ème semaine', 'Hydratation intensive'],
    eviter: ['Maquillage (2 semaines)', 'Gommages', 'Produits anti-âge agressifs'],
  },
]

const faqs = [
  {
    question: 'Combien de temps dure la cicatrisation complète ?',
    answer: 'La cicatrisation complète du maquillage permanent des lèvres prend 4 à 6 semaines. Les peaux tombent entre le 4ème et 10ème jour. La couleur définitive apparaît vers la 4ème semaine, moment idéal pour évaluer si une retouche est nécessaire.',
  },
  {
    question: 'Pourquoi la couleur est si foncée juste après ?',
    answer: 'C\'est totalement normal ! Juste après la séance, les pigments sont en surface et la peau est inflammée, ce qui intensifie la couleur de 40 à 50%. Cette intensité va diminuer progressivement avec la cicatrisation pour révéler la teinte finale plus naturelle.',
  },
  {
    question: 'Ma couleur a disparu, c\'est raté ?',
    answer: 'Non ! C\'est la fameuse "phase fantôme" entre le 8ème et 14ème jour. Quand les peaux se détachent, elles emportent les pigments superficiels. Les pigments implantés en profondeur remontent ensuite progressivement sous la peau. La couleur finale apparaît vers la 3ème-4ème semaine.',
  },
  {
    question: 'Puis-je embrasser pendant la cicatrisation ?',
    answer: 'Il est recommandé d\'éviter les baisers pendant les 7 à 10 premiers jours. Le contact avec une autre peau peut transférer des bactéries et perturber la cicatrisation. Après le pelage complet, vous pouvez reprendre progressivement.',
  },
  {
    question: 'Quel baume utiliser pour la cicatrisation ?',
    answer: 'Utilisez exclusivement le baume recommandé par votre praticien. Généralement, il s\'agit de crèmes cicatrisantes type Cicaplast, Bepanthen ou baume spécial dermopigmentation. Appliquez une fine couche toutes les 2-3 heures les premiers jours, puis 3-4 fois par jour ensuite.',
  },
  {
    question: 'Quand puis-je remettre du rouge à lèvres ?',
    answer: 'Attendez minimum 2 semaines, idéalement 3-4 semaines après la séance. Commencez par des produits doux et naturels. Évitez les rouges à lèvres mats très asséchants au début.',
  },
]

const relatedArticles = [
  {
    title: 'Candy Lips',
    slug: '/levres/candy-lips',
    excerpt: 'Technique aquarelle',
    image: '/placeholder-lips.svg',
    category: 'Guide',
  },
  {
    title: 'Maquillage permanent lèvres raté',
    slug: '/levres/maquillage-permanent/rate',
    excerpt: 'Solutions correctives',
    image: '/placeholder-fix.svg',
    category: 'Correction',
  },
  {
    title: 'Boutique soins',
    slug: '/boutique',
    excerpt: 'Baumes cicatrisants',
    image: '/placeholder-products.svg',
    category: 'Produits',
  },
]

export default function MaquillagePermamentCicatrisationPage() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-rose-fonce/30 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-72 h-72 bg-rose-poudre rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-or-rose rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Lèvres', href: '/levres' },
              { label: 'Maquillage permanent', href: '/levres/maquillage-permanent' },
              { label: 'Cicatrisation', href: '/levres/maquillage-permanent/cicatrisation' },
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
              Cicatrisation du <span className="text-rose-poudre">Maquillage Permanent Lèvres</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Suivez l'évolution de votre cicatrisation phase par phase.
              Conseils d'experts, soins adaptés et réponses à toutes vos questions.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-rose-poudre">4-6</span>
                <p className="text-white/70 text-sm">semaines totales</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-rose-poudre">4</span>
                <p className="text-white/70 text-sm">phases distinctes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-rose-poudre">1</span>
                <p className="text-white/70 text-sm">retouche incluse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline des phases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les 4 phases de cicatrisation
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Cliquez sur chaque phase pour découvrir ce qui se passe et comment réagir
            </p>
          </div>

          {/* Phase selector */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-rose-pale/30 rounded-full p-1">
              {phasesCicatrisation.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activePhase === index
                      ? 'bg-rose-fonce text-white shadow-lg'
                      : 'text-charbon hover:bg-rose-pale/50'
                  }`}
                >
                  Phase {phase.phase}
                </button>
              ))}
            </div>
          </div>

          {/* Active phase content */}
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left: Info */}
              <div className="lg:col-span-3 bg-gradient-to-br from-rose-pale/30 to-white rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-rose-fonce/10 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-rose-fonce">
                      {phasesCicatrisation[activePhase].phase}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-rose-fonce">
                      {phasesCicatrisation[activePhase].periode}
                    </span>
                    <h3 className="text-2xl font-playfair font-bold text-charbon">
                      {phasesCicatrisation[activePhase].titre}
                    </h3>
                  </div>
                </div>

                <p className="text-charbon/80 text-lg leading-relaxed mb-6">
                  {phasesCicatrisation[activePhase].description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-5">
                    <h4 className="font-semibold text-charbon mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Symptômes normaux
                    </h4>
                    <ul className="space-y-2">
                      {phasesCicatrisation[activePhase].symptomes.map((symptome, idx) => (
                        <li key={idx} className="text-sm text-charbon/70 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {symptome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-5">
                    <h4 className="font-semibold text-charbon mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Soins recommandés
                    </h4>
                    <ul className="space-y-2">
                      {phasesCicatrisation[activePhase].soins.map((soin, idx) => (
                        <li key={idx} className="text-sm text-charbon/70 flex items-start gap-2">
                          <span className="text-green-400 mt-1">✓</span>
                          {soin}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Alertes */}
                <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-4">
                  <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Points d'attention
                  </h4>
                  <ul className="space-y-1">
                    {phasesCicatrisation[activePhase].alertes.map((alerte, idx) => (
                      <li key={idx} className="text-sm text-orange-700">{alerte}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Meters */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h4 className="font-semibold text-charbon mb-4">Intensité de la couleur</h4>
                  <div className="relative h-4 bg-rose-pale/30 rounded-full overflow-hidden mb-2">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-rose-fonce to-or-rose rounded-full transition-all duration-500"
                      style={{ width: `${phasesCicatrisation[activePhase].intensiteCouleur}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charbon/60">Pâle</span>
                    <span className="font-medium text-rose-fonce">{phasesCicatrisation[activePhase].intensiteCouleur}%</span>
                    <span className="text-charbon/60">Intense</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h4 className="font-semibold text-charbon mb-4">Niveau de gonflement</h4>
                  <div className="relative h-4 bg-orange-100 rounded-full overflow-hidden mb-2">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full transition-all duration-500"
                      style={{ width: `${phasesCicatrisation[activePhase].gonflement}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charbon/60">Normal</span>
                    <span className="font-medium text-orange-500">{phasesCicatrisation[activePhase].gonflement}%</span>
                    <span className="text-charbon/60">Gonflé</span>
                  </div>
                </div>

                {/* Mini timeline */}
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h4 className="font-semibold text-charbon mb-4">Progression</h4>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-rose-pale"></div>
                    {phasesCicatrisation.map((phase, idx) => (
                      <div
                        key={idx}
                        className={`relative flex items-center gap-4 py-2 cursor-pointer ${
                          idx === activePhase ? 'opacity-100' : 'opacity-50'
                        }`}
                        onClick={() => setActivePhase(idx)}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                          idx <= activePhase ? 'bg-rose-fonce text-white' : 'bg-rose-pale text-charbon'
                        }`}>
                          {idx < activePhase ? '✓' : phase.phase}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-charbon">{phase.periode}</p>
                          <p className="text-xs text-charbon/60">{phase.titre}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils essentiels */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Conseils essentiels
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Les do et don't pour une cicatrisation optimale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {conseilsEssentiels.map((conseil, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="w-12 h-12 bg-rose-pale/50 rounded-xl flex items-center justify-center text-rose-fonce mb-4">
                  {conseil.icon}
                </div>
                <h3 className="font-semibold text-charbon text-lg mb-4">{conseil.categorie}</h3>

                <div className="mb-4">
                  <span className="text-xs font-medium text-green-600 uppercase">À faire</span>
                  <ul className="mt-2 space-y-1">
                    {conseil.faire.map((item, idx) => (
                      <li key={idx} className="text-sm text-charbon/70 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-xs font-medium text-red-600 uppercase">À éviter</span>
                  <ul className="mt-2 space-y-1">
                    {conseil.eviter.map((item, idx) => (
                      <li key={idx} className="text-sm text-charbon/70 flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
            Optimisez votre cicatrisation
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez nos soins post-traitement spécialement formulés pour la cicatrisation des lèvres
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/boutique" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Voir nos baumes
            </Link>
            <Link href="/levres/candy-lips" className="btn bg-white/20 text-white hover:bg-white/30">
              Technique Candy Lips
            </Link>
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
