'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const contenuFormation = [
  {
    module: 'Cadre réglementaire',
    duree: '3h',
    contenu: [
      'Textes de loi et décrets applicables',
      'Responsabilités du professionnel',
      'Contrôles et sanctions',
    ],
  },
  {
    module: 'Risques infectieux',
    duree: '5h',
    contenu: [
      'Micro-organismes pathogènes',
      'Modes de transmission',
      'Maladies transmissibles (hépatites, VIH...)',
    ],
  },
  {
    module: 'Hygiène des locaux',
    duree: '4h',
    contenu: [
      'Aménagement du local',
      'Nettoyage et désinfection',
      'Gestion des déchets (DASRI)',
    ],
  },
  {
    module: 'Stérilisation',
    duree: '5h',
    contenu: [
      'Désinfection du matériel',
      'Stérilisation à l\'autoclave',
      'Utilisation de matériel à usage unique',
    ],
  },
  {
    module: 'Pratiques professionnelles',
    duree: '4h',
    contenu: [
      'Hygiène des mains',
      'Port des EPI (gants, masque)',
      'Préparation de la zone de travail',
    ],
  },
]

const organismesAgrees = [
  {
    type: 'Organismes de formation',
    exemples: ['CNFHP', 'Pigmentropie', 'Académies spécialisées'],
    tarifs: '300€ - 600€',
    modalites: 'Présentiel ou en ligne',
  },
  {
    type: 'Chambres des métiers',
    exemples: ['CMA de votre région'],
    tarifs: '250€ - 400€',
    modalites: 'Généralement présentiel',
  },
  {
    type: 'GRETA / AFPA',
    exemples: ['Organismes publics'],
    tarifs: '200€ - 350€',
    modalites: 'Présentiel',
  },
]

const pointsEssentiels = [
  {
    point: 'Durée minimale',
    detail: '21 heures réparties sur 3 jours minimum',
    obligatoire: true,
  },
  {
    point: 'Validité',
    detail: '5 ans, puis renouvellement obligatoire',
    obligatoire: true,
  },
  {
    point: 'Organisme agréé',
    detail: 'Doit être habilité par l\'ARS',
    obligatoire: true,
  },
  {
    point: 'Attestation',
    detail: 'À conserver et présenter en cas de contrôle',
    obligatoire: true,
  },
  {
    point: 'Préalable',
    detail: 'Avant toute formation technique',
    obligatoire: true,
  },
]

const faqs = [
  {
    question: 'La formation hygiène et salubrité est-elle vraiment obligatoire ?',
    answer: 'Oui, depuis le décret du 19 février 2008, toute personne pratiquant le tatouage, le maquillage permanent ou le piercing doit avoir suivi cette formation. Son absence est passible d\'une amende de 1 500€ et de la fermeture administrative de l\'établissement.',
  },
  {
    question: 'Combien de temps dure la formation ?',
    answer: 'La formation doit durer au minimum 21 heures, généralement réparties sur 3 jours consécutifs ou non. Certains organismes proposent des formats plus longs (4-5 jours) pour approfondir les contenus.',
  },
  {
    question: 'Peut-on faire la formation en ligne ?',
    answer: 'Partiellement. Certains modules théoriques peuvent être suivis en ligne (e-learning). Cependant, une partie pratique en présentiel est généralement requise. Vérifiez que l\'organisme est bien agréé par l\'ARS.',
  },
  {
    question: 'Faut-il renouveler la formation ?',
    answer: 'Oui, l\'attestation est valable 5 ans. Avant l\'expiration, vous devez suivre une formation de mise à jour (généralement plus courte, 7h) pour renouveler votre attestation.',
  },
  {
    question: 'Comment vérifier qu\'un organisme est agréé ?',
    answer: 'Les organismes habilités sont référencés auprès de l\'ARS (Agence Régionale de Santé) de leur région. Vous pouvez contacter l\'ARS pour vérifier ou demander la liste des organismes agréés.',
  },
]

const relatedArticles = [
  {
    title: 'Formation microblading',
    slug: '/formations/microblading',
    excerpt: 'Après l\'hygiène',
    image: '/placeholder-formation.svg',
    category: 'Formation',
  },
  {
    title: 'Formation maquillage permanent',
    slug: '/formations/maquillage-permanent',
    excerpt: 'Cursus complet',
    image: '/placeholder-formation.svg',
    category: 'Formation',
  },
  {
    title: 'Financement Pôle Emploi',
    slug: '/formations/financement-pole-emploi',
    excerpt: 'Aides possibles',
    image: '/placeholder-finance.svg',
    category: 'Financement',
  },
]

export default function FormationHygienePage() {
  return (
    <article className="pb-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-800 via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Formations', href: '/formations' },
              { label: 'Hygiène et salubrité', href: '/formations/hygiene-salubrite' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Formation Obligatoire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Formation <span className="text-green-300">Hygiène et Salubrité</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Formation légalement obligatoire pour exercer le tatouage ou le maquillage permanent.
              21 heures minimum pour protéger vos clients et exercer en toute légalité.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-green-300">21h</span>
                <p className="text-white/70 text-sm">minimum</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-green-300">250€</span>
                <p className="text-white/70 text-sm">à partir de</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-green-300">5 ans</span>
                <p className="text-white/70 text-sm">validité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerte obligatoire */}
      <section className="py-6 bg-red-600">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-white">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-center">
              <strong>OBLIGATOIRE :</strong> Exercer sans cette formation est passible d'une amende de 1 500€ et de fermeture administrative
            </p>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Contenu de la formation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contenuFormation.map((mod, index) => (
              <div key={index} className="bg-green-50 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-charbon">{mod.module}</h3>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    {mod.duree}
                  </span>
                </div>
                <ul className="space-y-2">
                  {mod.contenu.map((item, idx) => (
                    <li key={idx} className="text-sm text-charbon/70 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points essentiels */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Points essentiels à retenir
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {pointsEssentiels.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-4 border-b border-green-200 last:border-0">
                <div>
                  <h4 className="font-semibold text-charbon">{item.point}</h4>
                  <p className="text-charbon/70 text-sm">{item.detail}</p>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Obligatoire
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organismes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Où se former ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {organismesAgrees.map((org, index) => (
              <div key={index} className="bg-green-50 rounded-2xl p-6">
                <h3 className="font-semibold text-charbon text-lg mb-3">{org.type}</h3>
                <p className="text-charbon/60 text-sm mb-4">{org.exemples.join(', ')}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charbon/60">Tarifs</span>
                    <span className="font-medium text-green-700">{org.tarifs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charbon/60">Modalités</span>
                    <span className="text-charbon">{org.modalites}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-green-700 to-emerald-700">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Première étape de votre carrière
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Cette formation est le prérequis indispensable avant toute formation technique.
            Programmez-la en priorité pour exercer en toute légalité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/formations/microblading" className="btn bg-white text-green-700 hover:bg-green-50">
              Formation microblading
            </Link>
            <Link href="/formations/maquillage-permanent" className="btn bg-white/20 text-white hover:bg-white/30">
              Formation complète
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Tout savoir sur la formation hygiène"
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
