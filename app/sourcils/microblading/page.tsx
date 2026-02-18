'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import { BeforeAfterSlider } from '@/components/sections/BeforeAfter'
import AuthorBox from '@/components/content/AuthorBox'

const faqs = [
  {
    question: 'Qu\'est-ce que le microblading exactement ?',
    answer: 'Le microblading est une technique de dermopigmentation semi-permanente qui consiste à implanter des pigments dans la couche superficielle de la peau à l\'aide d\'une lame composée de micro-aiguilles. Cette méthode permet de dessiner des traits fins qui imitent parfaitement les poils naturels du sourcil, créant un effet réaliste et naturel.',
  },
  {
    question: 'Le microblading fait-il mal ?',
    answer: 'La sensation est généralement décrite comme un léger grattement ou un picotement. Une crème anesthésiante est appliquée avant le traitement pour minimiser l\'inconfort. La douleur varie selon la sensibilité de chaque personne, mais la plupart des clientes trouvent la procédure tout à fait supportable.',
  },
  {
    question: 'Combien de temps dure un microblading ?',
    answer: 'Le microblading dure généralement entre 12 et 18 mois, parfois jusqu\'à 24 mois selon le type de peau, le mode de vie et les soins apportés. Une retouche est recommandée après 4 à 6 semaines, puis une fois par an pour maintenir un résultat optimal.',
  },
  {
    question: 'Qui peut faire un microblading ?',
    answer: 'Le microblading convient à la plupart des personnes souhaitant densifier, restructurer ou redessiner leurs sourcils. Il est particulièrement adapté aux personnes ayant des sourcils clairsemés, asymétriques ou surépilés. Certaines contre-indications existent : grossesse, allaitement, diabète non contrôlé, maladies de peau actives.',
  },
  {
    question: 'Comment choisir son praticien microblading ?',
    answer: 'Choisissez un praticien formé et certifié, disposant d\'une attestation d\'hygiène et salubrité. Consultez son portfolio de réalisations, lisez les avis clients et privilégiez les professionnels qui proposent une consultation préalable pour étudier votre morphologie et vos attentes.',
  },
  {
    question: 'Quelle est la différence avec un tatouage classique ?',
    answer: 'Contrairement au tatouage traditionnel, le microblading utilise des pigments semi-permanents implantés moins profondément dans la peau. Les pigments sont conçus pour s\'estomper naturellement avec le temps, ce qui permet d\'adapter la forme et la couleur aux évolutions du visage.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Étude de votre morphologie, choix de la forme et de la teinte idéales',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Dessin',
    description: 'Tracé au crayon pour visualiser et valider la forme souhaitée',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Anesthésie',
    description: 'Application d\'une crème anesthésiante pour un confort optimal',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Pigmentation',
    description: 'Création des traits poil à poil avec précision et expertise',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Retouche',
    description: 'Séance de perfectionnement 4 à 6 semaines après',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
]

const candidats = [
  { text: 'Sourcils clairsemés ou quasi inexistants', suitable: true },
  { text: 'Sourcils surépilés ayant du mal à repousser', suitable: true },
  { text: 'Sourcils asymétriques à rééquilibrer', suitable: true },
  { text: 'Pelade ou alopécie des sourcils', suitable: true },
  { text: 'Gain de temps dans la routine maquillage', suitable: true },
  { text: 'Grossesse ou allaitement', suitable: false },
  { text: 'Diabète non contrôlé', suitable: false },
  { text: 'Maladies de peau actives', suitable: false },
]

const relatedArticles = [
  {
    title: 'Microshading',
    description: 'L\'alternative effet poudré',
    href: '/sourcils/microshading',
    image: 'https://images.unsplash.com/photo-1594359123637-32fcb7aab042?w=400',
  },
  {
    title: 'Cicatrisation',
    description: 'Le processus jour par jour',
    href: '/sourcils/microblading/cicatrisation',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400',
  },
  {
    title: 'Microblading raté',
    description: 'Solutions et corrections',
    href: '/sourcils/microblading/rate',
    image: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=400',
  },
]

export default function MicrobladingPage() {
  const [activeTab, setActiveTab] = useState<'seche' | 'grasse'>('seche')

  return (
    <article>
      {/* Hero Section */}
      <section className="relative bg-charbon overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-rose-poudre rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-or-rose rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10 py-12">
          <Breadcrumb
            items={[
              { label: 'Sourcils', href: '/sourcils' },
              { label: 'Microblading', href: '/sourcils/microblading' },
            ]}
            variant="dark"
          />
        </div>

        <div className="container-custom relative z-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <span className="w-2 h-2 bg-rose-poudre rounded-full animate-pulse" />
                <span className="text-sm font-medium text-shadow-sm">Technique n°1 en France</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight text-shadow-hero">
                Microblading
                <span className="block text-rose-poudre">Sourcils naturels</span>
                <span className="block text-2xl md:text-3xl font-normal text-white/90 mt-2">
                  poil à poil
                </span>
              </h1>

              <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
                Une technique de dermopigmentation manuelle qui redessine vos sourcils
                avec une précision exceptionnelle. Chaque trait imite un poil naturel
                pour un résultat bluffant de réalisme.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '12-18', label: 'mois de durée' },
                  { value: '2h', label: 'par séance' },
                  { value: '95%', label: 'satisfaction' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm">
                    <span className="block text-2xl font-playfair font-bold text-rose-poudre">
                      {stat.value}
                    </span>
                    <span className="text-xs text-white/60">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/boutique"
                  className="inline-flex items-center gap-2 bg-rose-fonce text-white px-6 py-3 rounded-xl font-medium hover:bg-or-rose transition-colors"
                >
                  Soins post-microblading
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="#etapes"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  Comment ça marche ?
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800"
                  alt="Résultat microblading naturel et réaliste"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charbon/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-hover p-4 max-w-xs animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-pale rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-rose-fonce">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-or-rose">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-charbon/70 mt-1">+500 avis positifs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Microblading */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-rose-fonce font-medium text-sm uppercase tracking-wider">
                Comprendre la technique
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mt-2 mb-6">
                Le microblading, c&apos;est quoi ?
              </h2>
              <div className="space-y-4 text-charbon/80">
                <p className="text-lg">
                  Le <strong className="text-charbon">microblading</strong>, également appelé broderie des sourcils,
                  est une méthode de maquillage semi-permanent qui a révolutionné le monde de la beauté.
                </p>
                <p>
                  Contrairement aux techniques traditionnelles de tatouage, le microblading utilise un
                  <strong className="text-charbon"> outil manuel équipé de micro-lames</strong> pour créer
                  des incisions superficielles dans lesquelles sont déposés des pigments.
                </p>
                <p>
                  Cette technique artisanale permet de dessiner des traits ultra-fins qui imitent
                  parfaitement la direction, l&apos;épaisseur et la texture des poils naturels.
                  Le résultat est saisissant : des sourcils d&apos;aspect naturel, même vus de près.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: '✓', text: 'Résultat ultra-naturel' },
                  { icon: '✓', text: 'Semi-permanent (12-18 mois)' },
                  { icon: '✓', text: 'Technique manuelle précise' },
                  { icon: '✓', text: 'Personnalisé à votre visage' },
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-rose-pale/30 rounded-xl">
                    <span className="w-6 h-6 bg-rose-fonce text-white rounded-full flex items-center justify-center text-sm">
                      {point.icon}
                    </span>
                    <span className="text-sm font-medium text-charbon">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Before/After Slider */}
            <div>
              <h3 className="text-lg font-semibold text-charbon mb-4 text-center">
                Glissez pour comparer avant/après
              </h3>
              <BeforeAfterSlider
                before="https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600"
                after="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600"
                beforeLabel="Avant"
                afterLabel="Après"
              />
              <p className="text-center text-sm text-charbon/60 mt-4">
                Restructuration complète des sourcils avec effet poil à poil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-rose-fonce font-medium text-sm uppercase tracking-wider">
              Êtes-vous concernée ?
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mt-2 mb-4">
              Pour qui est le microblading ?
            </h2>
            <p className="text-charbon/70">
              Le microblading s&apos;adresse à toutes les personnes souhaitant sublimer leurs sourcils,
              mais certaines conditions peuvent être des contre-indications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Suitable */}
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charbon">Idéal pour</h3>
              </div>
              <ul className="space-y-3">
                {candidats.filter(c => c.suitable).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-charbon/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Suitable */}
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charbon">Contre-indications</h3>
              </div>
              <ul className="space-y-3">
                {candidats.filter(c => !c.suitable).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="text-charbon/80">{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-charbon/60 mt-6 p-4 bg-rose-pale/30 rounded-xl">
                En cas de doute, consultez votre médecin ou demandez conseil à votre praticien.
              </p>
            </div>
          </div>

          {/* Skin Type Selector */}
          <div className="max-w-2xl mx-auto mt-12 bg-white rounded-3xl p-8 shadow-card">
            <h3 className="text-xl font-semibold text-charbon mb-4 text-center">
              Quel résultat selon votre type de peau ?
            </h3>
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setActiveTab('seche')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'seche'
                    ? 'bg-rose-fonce text-white shadow-soft'
                    : 'bg-rose-pale/50 text-charbon hover:bg-rose-pale'
                }`}
              >
                Peau sèche/normale
              </button>
              <button
                onClick={() => setActiveTab('grasse')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'grasse'
                    ? 'bg-rose-fonce text-white shadow-soft'
                    : 'bg-rose-pale/50 text-charbon hover:bg-rose-pale'
                }`}
              >
                Peau grasse/mixte
              </button>
            </div>
            <div className="text-center">
              {activeTab === 'seche' ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl">✨</span>
                    <span className="text-lg font-medium text-green-600">Résultat optimal</span>
                  </div>
                  <p className="text-charbon/70">
                    Les peaux sèches retiennent parfaitement les pigments. Les traits restent nets
                    et bien définis. Le microblading est idéal pour vous.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl">💡</span>
                    <span className="text-lg font-medium text-amber-600">Alternative recommandée</span>
                  </div>
                  <p className="text-charbon/70">
                    Les peaux grasses peuvent faire &quot;baver&quot; les traits. Le <Link href="/sourcils/microshading" className="text-rose-fonce hover:underline">microshading</Link> ou
                    la technique combo (microblading + ombrage) est souvent préférable.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="etapes" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-rose-fonce font-medium text-sm uppercase tracking-wider">
              Le processus
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mt-2 mb-4">
              Comment se déroule une séance ?
            </h2>
            <p className="text-charbon/70">
              Une séance de microblading dure environ 2 heures et se déroule en 5 étapes
              pour garantir un résultat parfait et personnalisé.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-rose-poudre/30 -translate-y-1/2" />

            <div className="grid lg:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  {/* Step Card */}
                  <div className="bg-beige-creme rounded-2xl p-6 h-full hover:shadow-hover transition-shadow">
                    <div className="w-14 h-14 bg-rose-fonce text-white rounded-2xl flex items-center justify-center mb-4 relative z-10">
                      {step.icon}
                    </div>
                    <span className="text-rose-fonce/50 font-playfair text-3xl font-bold">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-charbon mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-charbon/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-charbon text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-rose-poudre font-medium text-sm uppercase tracking-wider">
                Investissement
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mt-2 mb-6">
                Quel est le prix du microblading ?
              </h2>
              <p className="text-white/80 mb-8">
                Les tarifs varient selon l&apos;expérience du praticien, la localisation et les prestations incluses.
                Voici une fourchette de prix pratiquée en France.
              </p>

              <div className="space-y-4">
                {[
                  { service: 'Séance complète (avec 1ère retouche)', price: '250€ - 500€', popular: true },
                  { service: 'Retouche annuelle', price: '100€ - 200€', popular: false },
                  { service: 'Retouche après 6 mois', price: '80€ - 150€', popular: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-4 rounded-xl ${
                      item.popular ? 'bg-rose-fonce' : 'bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.popular && (
                        <span className="px-2 py-1 bg-white/20 rounded text-xs">Populaire</span>
                      )}
                      <span>{item.service}</span>
                    </div>
                    <span className="font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-500/20 border border-amber-500/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-400 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-sm text-white/80">
                    <strong className="text-white">Attention aux prix trop bas !</strong> Ils peuvent cacher un manque de formation,
                    des pigments de mauvaise qualité ou des conditions d&apos;hygiène insuffisantes.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600"
                alt="Séance de microblading"
                width={600}
                height={400}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Post Care */}
      <section className="section-padding bg-rose-pale/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-rose-fonce font-medium text-sm uppercase tracking-wider">
                Après la séance
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mt-2 mb-4">
                Les soins post-microblading
              </h2>
              <p className="text-charbon/70">
                Une bonne cicatrisation est la clé d&apos;un résultat durable. Suivez ces recommandations
                essentielles pour les jours suivant votre séance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '💧', title: 'Hydrater', text: 'Appliquer la crème cicatrisante fournie matin et soir' },
                { icon: '🚿', title: 'Protéger', text: 'Ne pas mouiller les sourcils pendant 7 jours' },
                { icon: '💄', title: 'Patience', text: 'Éviter le maquillage sur la zone pendant 10 jours' },
                { icon: '🙅‍♀️', title: 'Ne pas toucher', text: 'Ne pas gratter ni arracher les croûtes' },
                { icon: '☀️', title: 'Soleil', text: 'Éviter le soleil, sauna et piscine pendant 2 semaines' },
                { icon: '🏃‍♀️', title: 'Sport', text: 'Pas de sport intense pendant 48 heures' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-shadow">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-semibold text-charbon mb-2">{item.title}</h3>
                  <p className="text-sm text-charbon/70">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-rose rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-playfair font-semibold mb-4">
                Optimisez votre cicatrisation
              </h3>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">
                Notre crème cicatrisante spécialement formulée accélère la guérison
                tout en préservant l&apos;intensité des pigments.
              </p>
              <Link
                href="/boutique"
                className="inline-flex items-center gap-2 bg-white text-rose-fonce px-6 py-3 rounded-xl font-medium hover:bg-beige-creme transition-colors"
              >
                Découvrir nos produits
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12 text-rose-poudre mx-auto mb-6">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-playfair text-charbon leading-relaxed mb-6">
              &ldquo;Le microblading m&apos;a changé la vie. Après des années à dessiner mes sourcils
              chaque matin, je me réveille maintenant avec un regard structuré et naturel.
              C&apos;est un gain de temps et de confiance inestimable.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-rose-pale rounded-full flex items-center justify-center">
                <span className="font-semibold text-rose-fonce">M</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-charbon">Marie</p>
                <p className="text-sm text-charbon/60">34 ans, Paris</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir avant de vous lancer"
      />

      {/* Related Articles */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <h2 className="text-2xl font-playfair font-semibold text-charbon mb-8">
            Articles connexes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article, i) => (
              <Link
                key={i}
                href={article.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-charbon group-hover:text-rose-fonce transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-charbon/60 mt-1">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AuthorBox />
          </div>
        </div>
      </section>
    </article>
  )
}
