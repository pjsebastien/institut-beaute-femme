'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const zonesTraitables = [
  {
    zone: 'Lèvres',
    description: 'Repigmentation du contour ou de l\'ensemble des lèvres',
    technique: 'Candy lips / Dermopigmentation labiale',
    efficacite: 85,
    considerations: 'Zone stable nécessaire, test préalable recommandé',
  },
  {
    zone: 'Sourcils',
    description: 'Reconstruction de sourcils dépigmentés',
    technique: 'Microblading / Microshading',
    efficacite: 90,
    considerations: 'Peut être combiné avec des poils existants',
  },
  {
    zone: 'Contour des yeux',
    description: 'Eye-liner pour uniformiser le regard',
    technique: 'Dermopigmentation péri-oculaire',
    efficacite: 85,
    considerations: 'Zone délicate, praticien expérimenté requis',
  },
  {
    zone: 'Petites zones corporelles',
    description: 'Petites taches sur visage, mains, etc.',
    technique: 'Camouflage pigmentaire',
    efficacite: 70,
    considerations: 'Résultats variables, test essentiel',
  },
]

const avantagesLimites = {
  avantages: [
    'Résultat immédiat visible',
    'Amélioration de la confiance en soi',
    'Pas de maquillage quotidien nécessaire',
    'Dure plusieurs années',
    'Technique peu invasive',
  ],
  limites: [
    'Ne traite pas le vitiligo en lui-même',
    'Le vitiligo peut évoluer après la pigmentation',
    'Retouches régulières nécessaires',
    'Résultats variables selon les zones',
    'Test préalable obligatoire',
  ],
}

const processusTraitement = [
  {
    etape: 1,
    titre: 'Consultation médicale',
    description: 'Validation avec votre dermatologue que la zone est stable',
  },
  {
    etape: 2,
    titre: 'Test de pigmentation',
    description: 'Petit test sur une zone discrète pour vérifier la tenue et la couleur',
  },
  {
    etape: 3,
    titre: 'Attente & évaluation',
    description: '4-6 semaines d\'observation du test',
  },
  {
    etape: 4,
    titre: 'Séance complète',
    description: 'Pigmentation de la zone si le test est concluant',
  },
  {
    etape: 5,
    titre: 'Retouche',
    description: 'Perfectionnement après 4-6 semaines',
  },
]

const faqs = [
  {
    question: 'La dermopigmentation peut-elle traiter le vitiligo ?',
    answer: 'La dermopigmentation ne guérit pas le vitiligo, c\'est une maladie auto-immune qui nécessite un suivi médical. Elle permet uniquement de camoufler visuellement les zones dépigmentées en y implantant des pigments de couleur proche de votre carnation naturelle.',
  },
  {
    question: 'Que se passe-t-il si mon vitiligo s\'étend ?',
    answer: 'Si le vitiligo s\'étend dans la zone traitée, de nouvelles taches blanches peuvent apparaître à côté de la zone pigmentée. C\'est pourquoi il est crucial d\'attendre une phase stable du vitiligo avant de procéder, et de maintenir un suivi dermatologique.',
  },
  {
    question: 'Le test de pigmentation est-il vraiment nécessaire ?',
    answer: 'Oui, absolument. La peau atteinte de vitiligo peut réagir différemment : le pigment peut ne pas tenir, virer de couleur, ou la peau peut mal cicatriser. Le test permet d\'évaluer la réponse de VOTRE peau avant un traitement complet.',
  },
  {
    question: 'Combien de temps dure le résultat ?',
    answer: 'La durée varie selon la zone et la personne : généralement 1 à 3 ans pour les lèvres et sourcils. La peau dépigmentée peut parfois retenir moins bien les pigments, nécessitant des retouches plus fréquentes.',
  },
  {
    question: 'Le camouflage est-il visible sous le soleil ?',
    answer: 'Un bon camouflage bien réalisé reste naturel sous toutes les lumières. Cependant, la peau dépigmentée réagit différemment au soleil (elle ne bronze pas), ce qui peut créer un contraste en été. La protection solaire reste importante.',
  },
]

const relatedArticles = [
  {
    title: 'Cicatrice blanche',
    slug: '/conditions-medicales/pigmentation-cicatrice-blanche',
    excerpt: 'Camouflage',
    image: '/placeholder-scar.svg',
    category: 'Conditions',
  },
  {
    title: 'Candy Lips',
    slug: '/levres/candy-lips',
    excerpt: 'Lèvres',
    image: '/placeholder-lips.svg',
    category: 'Technique',
  },
  {
    title: 'Microblading',
    slug: '/sourcils/microblading',
    excerpt: 'Sourcils',
    image: '/placeholder-microblading.svg',
    category: 'Technique',
  },
]

export default function VitiligoPage() {
  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-sky-900/30 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-sky-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Conditions médicales', href: '/conditions-medicales' },
              { label: 'Vitiligo', href: '/conditions-medicales/vitiligo' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
              </svg>
              Camouflage Pigmentaire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              <span className="text-sky-300">Vitiligo</span> & Dermopigmentation
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Le vitiligo crée des zones de peau dépigmentées. La dermopigmentation peut aider
              à uniformiser l'apparence du visage, notamment les lèvres et les sourcils.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl">
              <p className="text-white/90 text-sm">
                <strong className="text-sky-300">Note importante :</strong> La dermopigmentation
                ne traite pas le vitiligo. Elle permet uniquement un camouflage esthétique
                des zones dépigmentées stables. Un suivi dermatologique reste essentiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zones traitables */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Zones pouvant être traitées
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              La dermopigmentation est particulièrement efficace sur certaines zones du visage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {zonesTraitables.map((zone, index) => (
              <div key={index} className="bg-sky-50 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-charbon text-xl">{zone.zone}</h3>
                  <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full text-xs">
                    {zone.technique}
                  </span>
                </div>
                <p className="text-charbon/70 text-sm mb-4">{zone.description}</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-charbon/60">Efficacité</span>
                      <span className="font-medium text-sky-600">{zone.efficacite}%</span>
                    </div>
                    <div className="h-2 bg-sky-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sky-500 rounded-full"
                        style={{ width: `${zone.efficacite}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-amber-700 bg-amber-50 rounded-lg p-2">
                    {zone.considerations}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages & Limites */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Ce qu'il faut savoir
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-semibold text-green-700 text-lg mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Avantages
              </h3>
              <ul className="space-y-3">
                {avantagesLimites.avantages.map((av, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-green-800 text-sm">
                    <span className="text-green-500 mt-1">✓</span>
                    {av}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="font-semibold text-orange-700 text-lg mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Limites à connaître
              </h3>
              <ul className="space-y-3">
                {avantagesLimites.limites.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-orange-800 text-sm">
                    <span className="text-orange-500 mt-1">!</span>
                    {lim}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Le processus de traitement
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Un protocole adapté au vitiligo avec phase de test obligatoire
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {processusTraitement.map((etape, index) => (
              <div key={index} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-semibold">
                    {etape.etape}
                  </div>
                  {index < processusTraitement.length - 1 && (
                    <div className="w-0.5 h-full bg-sky-200 mt-2"></div>
                  )}
                </div>
                <div className="bg-sky-50 rounded-2xl p-6 flex-grow">
                  <h3 className="font-semibold text-charbon">{etape.titre}</h3>
                  <p className="text-charbon/70 text-sm">{etape.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-sky-700 to-blue-700">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Le vitiligo ne définit pas qui vous êtes
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            La dermopigmentation peut vous aider à vous sentir plus à l'aise au quotidien,
            en complément de votre suivi médical.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/levres/candy-lips" className="btn bg-white text-sky-700 hover:bg-sky-50">
              Repigmentation lèvres
            </Link>
            <Link href="/sourcils/microblading" className="btn bg-white/20 text-white hover:bg-white/30">
              Repigmentation sourcils
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Réponses sur le vitiligo et la dermopigmentation"
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
