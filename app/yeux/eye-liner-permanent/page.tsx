'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const techniques = [
  {
    id: 'interstitiel',
    nom: 'Eye-liner interstitiel',
    description: 'Pigmentation entre les cils pour densifier la ligne des cils sans trait visible',
    effet: 'Ultra naturel, cils plus fournis',
    ideal: 'Quotidien, look discret',
    intensite: 30,
    icon: '👁️',
  },
  {
    id: 'fin',
    nom: 'Trait fin classique',
    description: 'Ligne fine le long de la paupière supérieure',
    effet: 'Définition élégante',
    ideal: 'Maquillage léger au quotidien',
    intensite: 50,
    icon: '✏️',
  },
  {
    id: 'epais',
    nom: 'Trait épaissi',
    description: 'Ligne plus marquée pour un regard intense',
    effet: 'Glamour, sophistiqué',
    ideal: 'Look maquillé permanent',
    intensite: 70,
    icon: '🖊️',
  },
  {
    id: 'chat',
    nom: 'Eye-liner ailé',
    description: 'Trait avec virgule pour un effet cat-eye',
    effet: 'Regard félin, lifting optique',
    ideal: 'Look sophistiqué',
    intensite: 85,
    icon: '😺',
  },
]

const avantages = [
  { titre: 'Regard défini 24h/24', description: 'Fini les traces de mascara ou d\'eye-liner qui coule', icon: '⏰' },
  { titre: 'Gain de temps', description: 'Plus besoin de tracer un trait symétrique chaque matin', icon: '⏱️' },
  { titre: 'Résiste à tout', description: 'Piscine, sport, émotions... votre regard reste parfait', icon: '💦' },
  { titre: 'Effet cils plus denses', description: 'L\'interstitiel donne l\'illusion de cils plus fournis', icon: '✨' },
  { titre: 'Corrige les asymétries', description: 'Harmonise la forme des yeux', icon: '⚖️' },
  { titre: 'Longue durée', description: '2 à 5 ans selon la technique', icon: '📅' },
]

const contrindications = [
  'Grossesse et allaitement',
  'Conjonctivite ou infection oculaire',
  'Glaucome ou problèmes de pression oculaire',
  'Chirurgie oculaire récente (moins de 3 mois)',
  'Extensions de cils (à retirer avant)',
  'Traitement Roaccutane en cours',
  'Diabète non stabilisé',
  'Allergies aux pigments',
]

const faqs = [
  {
    question: 'L\'eye-liner permanent fait-il mal ?',
    answer: 'La zone des yeux est sensible, mais une crème anesthésiante est appliquée avant le traitement. La plupart des clientes décrivent une gêne modérée, comme une sensation de grattement. Les yeux peuvent larmoyer pendant la séance, c\'est tout à fait normal.',
  },
  {
    question: 'Combien de temps dure l\'eye-liner permanent ?',
    answer: 'La durée varie selon la technique : l\'interstitiel dure 2-3 ans, le trait fin 3-4 ans, et le trait épais ou ailé 4-5 ans. La tenue dépend aussi de votre type de peau et de votre exposition au soleil.',
  },
  {
    question: 'Peut-on faire les deux paupières (supérieure et inférieure) ?',
    answer: 'Oui, mais la paupière inférieure est plus délicate et s\'estompe plus vite. Elle est généralement traitée avec un trait plus discret. Beaucoup de clientes optent pour un trait supérieur marqué et un interstitiel inférieur.',
  },
  {
    question: 'Puis-je porter des lentilles après la séance ?',
    answer: 'Il est recommandé de ne pas porter de lentilles le jour de la séance et les 3-5 jours suivants. Les yeux peuvent être sensibles et légèrement gonflés. Prévoyez des lunettes pour cette période.',
  },
  {
    question: 'Quels sont les risques ?',
    answer: 'Avec un praticien qualifié et dans des conditions d\'hygiène optimales, les risques sont minimes. Un léger gonflement et des rougeurs sont normaux les premiers jours. Les complications (infections, réactions allergiques) sont rares si les contre-indications sont respectées.',
  },
  {
    question: 'Quel est le prix d\'un eye-liner permanent ?',
    answer: 'Les prix varient : interstitiel 200€-300€, trait fin 250€-400€, trait épais ou ailé 300€-500€. Un traitement des deux paupières (supérieure et inférieure) coûte généralement 400€-600€. La retouche est souvent incluse.',
  },
]

const relatedArticles = [
  {
    title: 'Cicatrisation eye-liner',
    slug: '/yeux/eye-liner-permanent/cicatrisation',
    excerpt: 'Le processus jour par jour',
    image: '/placeholder-eye.svg',
    category: 'Post-soin',
  },
  {
    title: 'Eye-liner raté',
    slug: '/yeux/eye-liner-permanent/rate',
    excerpt: 'Solutions de correction',
    image: '/placeholder-fix.svg',
    category: 'Correction',
  },
  {
    title: 'Formation maquillage permanent',
    slug: '/formations/maquillage-permanent',
    excerpt: 'Devenir expert',
    image: '/placeholder-formation.svg',
    category: 'Formation',
  },
]

export default function EyeLinerPermanentPage() {
  const [activeTechnique, setActiveTechnique] = useState('interstitiel')
  const techniqueActive = techniques.find(t => t.id === activeTechnique)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-charbon to-violet-900/30 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-violet-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-poudre rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Yeux', href: '/yeux' },
              { label: 'Eye-liner permanent', href: '/yeux/eye-liner-permanent' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Regard Sublimé
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Eye-Liner <span className="text-violet-300">Permanent</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Un regard défini et intense 24h/24, sans retouche. Du trait interstitiel discret
              au cat-eye sophistiqué, trouvez la technique qui sublime vos yeux.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-violet-300">2-5</span>
                <p className="text-white/70 text-sm">ans de durée</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-violet-300">1-2h</span>
                <p className="text-white/70 text-sm">durée séance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-violet-300">96%</span>
                <p className="text-white/70 text-sm">satisfaction</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#techniques" className="btn-primary">
                Découvrir les techniques
              </a>
              <Link href="/yeux/eye-liner-permanent/cicatrisation" className="btn bg-white/10 text-white hover:bg-white/20">
                La cicatrisation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les avantages de l&apos;eye-liner permanent
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {avantages.map((avantage, index) => (
              <div key={index} className="bg-gradient-to-br from-violet-50 to-white rounded-2xl p-6 text-center shadow-card">
                <span className="text-4xl mb-4 block">{avantage.icon}</span>
                <h3 className="font-semibold text-charbon mb-2">{avantage.titre}</h3>
                <p className="text-charbon/70 text-sm">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section id="techniques" className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les différentes techniques
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Du plus discret au plus intense
            </p>
          </div>

          {/* Technique Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {techniques.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTechnique(tech.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeTechnique === tech.id
                    ? 'bg-violet-600 text-white shadow-lg'
                    : 'bg-white text-charbon hover:bg-violet-50 shadow-card'
                }`}
              >
                <span className="text-xl">{tech.icon}</span>
                {tech.nom}
              </button>
            ))}
          </div>

          {/* Active Technique */}
          {techniqueActive && (
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{techniqueActive.icon}</span>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-charbon">{techniqueActive.nom}</h3>
                  <p className="text-charbon/70">{techniqueActive.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-charbon/60">Intensité</span>
                  <span className="font-medium text-charbon">{techniqueActive.intensite}%</span>
                </div>
                <div className="h-3 bg-violet-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-400 to-violet-600 rounded-full"
                    style={{ width: `${techniqueActive.intensite}%` }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-violet-50 rounded-xl p-4 text-center">
                  <span className="text-charbon/60 text-sm">Effet</span>
                  <p className="font-medium text-charbon">{techniqueActive.effet}</p>
                </div>
                <div className="bg-violet-50 rounded-xl p-4 text-center">
                  <span className="text-charbon/60 text-sm">Idéal pour</span>
                  <p className="font-medium text-charbon">{techniqueActive.ideal}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contre-indications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 border border-red-100">
              <h2 className="text-2xl font-playfair font-bold text-charbon mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Contre-indications
              </h2>
              <p className="text-charbon/70 mb-6">
                L&apos;eye-liner permanent n&apos;est pas recommandé dans les cas suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {contrindications.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-charbon/80">
                    <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-violet-600 to-violet-800">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Sublimez votre regard
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Consultez notre guide de cicatrisation pour préparer votre séance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/yeux/eye-liner-permanent/cicatrisation" className="btn bg-white text-violet-700 hover:bg-violet-50">
              Guide cicatrisation
            </Link>
            <Link href="/boutique" className="btn bg-white/20 text-white hover:bg-white/30">
              Soins contour des yeux
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir"
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
