'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const avantApresImages = [
  {
    avant: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600',
    apres: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600',
    description: 'Sourcils clairsemés transformés en sourcils poudrés et définis',
  },
  {
    avant: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600',
    apres: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
    description: 'Effet ombré naturel pour un regard sublimé',
  },
]

const etapesProcessus = [
  {
    numero: 1,
    titre: 'Consultation',
    description: 'Analyse de votre visage et de vos sourcils naturels pour définir la forme et la teinte idéales.',
    icon: '💬',
    duree: '30 min',
  },
  {
    numero: 2,
    titre: 'Dessin préparatoire',
    description: 'Tracé au crayon de la forme souhaitée. Vous validez avant de commencer.',
    icon: '✏️',
    duree: '15 min',
  },
  {
    numero: 3,
    titre: 'Anesthésie locale',
    description: 'Application d\'une crème anesthésiante pour votre confort.',
    icon: '💊',
    duree: '20 min',
  },
  {
    numero: 4,
    titre: 'Pigmentation',
    description: 'Implantation des pigments par pointillisme pour créer l\'effet poudré.',
    icon: '🎨',
    duree: '60-90 min',
  },
  {
    numero: 5,
    titre: 'Finitions',
    description: 'Ajustements finaux et application du soin post-traitement.',
    icon: '✨',
    duree: '15 min',
  },
]

const comparaison = [
  {
    critere: 'Technique',
    microshading: 'Points de pigment (pointillisme)',
    microblading: 'Traits fins (poils simulés)',
  },
  {
    critere: 'Effet visuel',
    microshading: 'Poudré, doux, rempli',
    microblading: 'Poils naturels, plus discret',
  },
  {
    critere: 'Types de peau idéaux',
    microshading: 'Tous types, même grasse',
    microblading: 'Normale à sèche uniquement',
  },
  {
    critere: 'Durée de vie',
    microshading: '18 à 36 mois',
    microblading: '12 à 24 mois',
  },
  {
    critere: 'Cicatrisation',
    microshading: 'Plus facile, moins de croûtes',
    microblading: 'Croûtes plus visibles',
  },
  {
    critere: 'Retouches',
    microshading: 'Moins fréquentes',
    microblading: 'Plus fréquentes',
  },
]

const faqs = [
  {
    question: 'Qu\'est-ce que le microshading exactement ?',
    answer: 'Le microshading est une technique de maquillage semi-permanent des sourcils qui utilise un dermographe pour créer un effet poudré, ombré. Contrairement au microblading qui trace des traits, le microshading implante des milliers de petits points de pigment pour un résultat similaire à un maquillage au crayon poudré.',
  },
  {
    question: 'Le microshading est-il douloureux ?',
    answer: 'La douleur est minimale grâce à l\'application d\'une crème anesthésiante avant le traitement. La plupart des clientes décrivent une sensation de léger grattement, beaucoup moins intense qu\'un tatouage classique. La zone des sourcils est moins sensible que d\'autres parties du visage.',
  },
  {
    question: 'Combien de temps dure un microshading ?',
    answer: 'Le microshading dure généralement entre 18 et 36 mois, soit plus longtemps que le microblading. Cette durée varie selon votre type de peau, votre mode de vie et votre exposition au soleil. Une retouche est recommandée tous les 12-18 mois pour maintenir l\'intensité.',
  },
  {
    question: 'Le microshading convient-il aux peaux grasses ?',
    answer: 'Oui, c\'est même l\'un de ses avantages majeurs ! Contrairement au microblading qui peut mal vieillir sur peaux grasses, le microshading tient très bien car les points de pigment sont moins susceptibles de s\'étaler ou de devenir flous.',
  },
  {
    question: 'Quelle est la différence entre microshading et powder brows ?',
    answer: 'C\'est la même technique ! Powder brows, ombré brows, sourcils poudrés et microshading désignent tous la même méthode de pigmentation par pointillisme. Les termes varient selon les praticiens et les pays.',
  },
  {
    question: 'Peut-on combiner microblading et microshading ?',
    answer: 'Oui, cette combinaison s\'appelle le "combo brows" ou "hybrid brows". Le microblading est utilisé au début du sourcil pour des poils réalistes, tandis que le microshading remplit le corps et la queue pour plus de densité. C\'est idéal pour un rendu très naturel et défini.',
  },
]

const relatedArticles = [
  {
    title: 'Prix microshading',
    slug: '/sourcils/microshading/prix',
    excerpt: 'Tarifs et ce qui influence le coût',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    category: 'Prix',
  },
  {
    title: 'Microblading vs Microshading',
    slug: '/sourcils/microblading-vs-microshading',
    excerpt: 'Quelle technique choisir ?',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    category: 'Comparatif',
  },
  {
    title: 'Formation microshading',
    slug: '/formations/microshading',
    excerpt: 'Devenir expert en microshading',
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400',
    category: 'Formation',
  },
]

export default function MicroshadingPage() {
  const [activeImage, setActiveImage] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-rose-fonce/40 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-rose-poudre rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-or-rose rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Sourcils', href: '/sourcils' },
              { label: 'Microshading', href: '/sourcils/microshading' },
            ]}
            variant="dark"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Effet Poudré Naturel
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
                Microshading : <span className="text-rose-poudre">Sourcils Poudrés</span> Parfaits
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
                Le microshading crée un effet sourcils maquillés au crayon poudré, naturel et durable.
                Idéal pour tous les types de peau, même grasse.
                Découvrez cette technique qui sublime votre regard.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <span className="text-2xl font-bold text-rose-poudre">18-36</span>
                  <p className="text-white/70 text-sm">mois de durée</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <span className="text-2xl font-bold text-rose-poudre">2h</span>
                  <p className="text-white/70 text-sm">durée séance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <span className="text-2xl font-bold text-rose-poudre">98%</span>
                  <p className="text-white/70 text-sm">satisfaction</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/sourcils/microshading/prix" className="btn-primary">
                  Voir les tarifs
                </Link>
                <Link href="#avant-apres" className="btn bg-white/10 text-white hover:bg-white/20">
                  Voir les résultats
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800"
                  alt="Résultat microshading sourcils poudrés"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charbon/40 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-pale rounded-full flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <p className="font-semibold text-charbon">Effet poudré</p>
                    <p className="text-xs text-charbon/60">Naturel et sophistiqué</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avant/Après Section */}
      <section id="avant-apres" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Résultats Avant / Après
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Découvrez la transformation grâce au microshading
            </p>
          </div>

          {/* Image Selector */}
          <div className="flex justify-center gap-4 mb-8">
            {avantApresImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeImage === index ? 'bg-rose-fonce w-8' : 'bg-rose-pale'
                }`}
              />
            ))}
          </div>

          {/* Before/After Slider */}
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
              {/* After Image (full) */}
              <Image
                src={avantApresImages[activeImage].apres}
                alt="Après microshading"
                fill
                className="object-cover"
              />

              {/* Before Image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <Image
                  src={avantApresImages[activeImage].avant}
                  alt="Avant microshading"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-rose-fonce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                Avant
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                Après
              </div>

              {/* Slider Input (invisible but functional) */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              />
            </div>

            <p className="text-center text-charbon/70 mt-4">
              {avantApresImages[activeImage].description}
            </p>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Comment se déroule une séance ?
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Les 5 étapes d&apos;un microshading réussi
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-rose-poudre hidden md:block" />

              <div className="space-y-6">
                {etapesProcessus.map((etape, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="w-16 h-16 bg-rose-fonce rounded-2xl flex items-center justify-center flex-shrink-0 z-10 text-2xl">
                      {etape.icon}
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-card flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-rose-pale text-rose-fonce px-3 py-1 rounded-full text-sm font-medium">
                          Étape {etape.numero}
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

      {/* Comparaison Microshading vs Microblading */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Microshading vs Microblading
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Comparez les deux techniques pour choisir celle qui vous convient
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-rose-poudre">
                  <th className="py-4 px-6 text-left text-charbon font-semibold">Critère</th>
                  <th className="py-4 px-6 text-center bg-rose-pale/30 text-rose-fonce font-semibold rounded-tl-xl">Microshading</th>
                  <th className="py-4 px-6 text-center text-charbon font-semibold">Microblading</th>
                </tr>
              </thead>
              <tbody>
                {comparaison.map((row, index) => (
                  <tr key={index} className="border-b border-nude-rose/30">
                    <td className="py-4 px-6 text-charbon font-medium">{row.critere}</td>
                    <td className="py-4 px-6 text-center bg-rose-pale/10 text-charbon/80">{row.microshading}</td>
                    <td className="py-4 px-6 text-center text-charbon/80">{row.microblading}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Link href="/sourcils/microblading-vs-microshading" className="btn-secondary">
              Comparatif complet
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Prix */}
      <section className="section-padding bg-gradient-to-r from-rose-fonce to-or-rose">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Prête pour des sourcils parfaits ?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Consultez nos tarifs microshading et trouvez la formule adaptée à vos besoins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sourcils/microshading/prix" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Voir les prix
            </Link>
            <Link href="/formations/microshading" className="btn bg-white/20 text-white hover:bg-white/30">
              Se former au microshading
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes sur le microshading"
        description="Tout ce que vous devez savoir avant de vous lancer"
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
