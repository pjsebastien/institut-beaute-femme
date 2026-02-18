'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const symptomes = [
  {
    symptome: 'Arrachage compulsif',
    description: 'Besoin irrépressible de s\'arracher les cheveux ou sourcils',
    zone: 'Sourcils, cils, cuir chevelu',
  },
  {
    symptome: 'Zones clairsemées',
    description: 'Apparition progressive de zones sans poils',
    zone: 'Variable selon les personnes',
  },
  {
    symptome: 'Tension avant l\'arrachage',
    description: 'Montée de tension ou anxiété avant le geste',
    zone: 'Psychologique',
  },
  {
    symptome: 'Soulagement temporaire',
    description: 'Sensation de relâchement après l\'arrachage',
    zone: 'Psychologique',
  },
]

const solutionsDermopigmentation = [
  {
    technique: 'Microblading',
    description: 'Technique poil par poil pour des sourcils naturels',
    ideal: 'Arrachage localisé, zones partielles',
    avantage: 'Résultat hyper-naturel',
    consideration: 'Nécessite un suivi psy parallèle',
  },
  {
    technique: 'Microshading',
    description: 'Technique d\'ombrage pour effet poudré',
    ideal: 'Arrachage étendu, peu de poils restants',
    avantage: 'Couvre mieux les zones vides',
    consideration: 'Aspect plus maquillé',
  },
  {
    technique: 'Technique mixte',
    description: 'Combinaison microblading + microshading',
    ideal: 'Cas modérés à sévères',
    avantage: 'Équilibre naturel et couverture',
    consideration: 'Plus de temps de réalisation',
  },
]

const parcoursRecommande = [
  {
    etape: 1,
    titre: 'Prise en charge psychologique',
    description: 'Consultation avec un spécialiste (psychologue, psychiatre) pour comprendre et traiter le trouble',
    important: true,
  },
  {
    etape: 2,
    titre: 'Stabilisation du trouble',
    description: 'Travailler sur la réduction ou l\'arrêt des comportements d\'arrachage',
    important: true,
  },
  {
    etape: 3,
    titre: 'Consultation dermopigmentation',
    description: 'Évaluation des zones à traiter et discussion des attentes',
    important: false,
  },
  {
    etape: 4,
    titre: 'Séances de dermopigmentation',
    description: 'Reconstruction visuelle des sourcils par pigmentation',
    important: false,
  },
  {
    etape: 5,
    titre: 'Suivi et retouches',
    description: 'Entretien du résultat et accompagnement continu',
    important: false,
  },
]

const temoignage = {
  texte: "La dermopigmentation a changé ma vie. Après des années de lutte contre la trichotillomanie, pouvoir me regarder dans le miroir sans voir les zones vides a été une révélation. Ce n'est pas une solution miracle au trouble, mais c'est une aide précieuse pour retrouver confiance en soi.",
  auteur: "Sophie M.",
  age: "32 ans",
}

const faqs = [
  {
    question: 'La dermopigmentation peut-elle guérir la trichotillomanie ?',
    answer: 'Non, la dermopigmentation ne traite pas la trichotillomanie en elle-même. C\'est un trouble psychologique qui nécessite une prise en charge adaptée (thérapie, parfois médicaments). La dermopigmentation est une solution esthétique complémentaire qui aide à reconstruire l\'apparence des sourcils.',
  },
  {
    question: 'Dois-je avoir arrêté de m\'arracher les sourcils avant la dermopigmentation ?',
    answer: 'Idéalement oui. Si le comportement d\'arrachage persiste, les résultats de la dermopigmentation peuvent être compromis : les poils qui repoussent puis sont arrachés, la peau irritée, le stress qui aggrave le trouble. Un travail thérapeutique préalable est fortement recommandé.',
  },
  {
    question: 'La dermopigmentation résiste-t-elle si je continue à toucher mes sourcils ?',
    answer: 'Le frottement excessif peut accélérer l\'estompage des pigments. Si vous avez encore tendance à toucher la zone, les résultats peuvent durer moins longtemps. C\'est pourquoi la stabilisation du trouble est importante avant le traitement.',
  },
  {
    question: 'Quel est le prix pour reconstruire des sourcils suite à la trichotillomanie ?',
    answer: 'Les tarifs sont similaires à un microblading ou microshading classique : 250€ à 500€ selon la technique et le praticien. Certains professionnels proposent des tarifs adaptés pour les cas médicaux. Une retouche est généralement incluse.',
  },
  {
    question: 'Combien de temps durent les résultats ?',
    answer: 'La dermopigmentation dure généralement 1 à 3 ans pour le microblading, 2 à 3 ans pour le microshading. Des retouches d\'entretien sont nécessaires. La durée peut varier selon votre type de peau et vos habitudes.',
  },
]

const relatedArticles = [
  {
    title: 'Microblading',
    slug: '/sourcils/microblading',
    excerpt: 'Technique poil par poil',
    image: '/placeholder-microblading.svg',
    category: 'Technique',
  },
  {
    title: 'Pelade sourcils',
    slug: '/conditions-medicales/pelade/sourcils',
    excerpt: 'Autre cause de perte',
    image: '/placeholder-pelade.svg',
    category: 'Conditions',
  },
  {
    title: 'Alopécie sourcils',
    slug: '/conditions-medicales/alopecie-sourcils',
    excerpt: 'Solutions',
    image: '/placeholder-alopecie.svg',
    category: 'Conditions',
  },
]

export default function TrichotillomaniePage() {
  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-teal-900/30 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Conditions médicales', href: '/conditions-medicales' },
              { label: 'Trichotillomanie', href: '/conditions-medicales/trichotillomanie' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Accompagnement & Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              <span className="text-teal-300">Trichotillomanie</span> & Dermopigmentation
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              La trichotillomanie affecte vos sourcils ? Découvrez comment la dermopigmentation
              peut vous aider à retrouver une apparence naturelle, en complément d'un suivi adapté.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl">
              <p className="text-white/90 text-sm">
                <strong className="text-teal-300">Important :</strong> La trichotillomanie est un trouble
                reconnu qui nécessite une prise en charge psychologique. La dermopigmentation est une
                aide esthétique complémentaire, pas un traitement du trouble.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprendre la trichotillomanie */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Comprendre la trichotillomanie
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Un trouble du contrôle des impulsions qui touche environ 1-2% de la population
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {symptomes.map((item, index) => (
              <div key={index} className="bg-teal-50 rounded-2xl p-6">
                <h3 className="font-semibold text-charbon mb-2">{item.symptome}</h3>
                <p className="text-charbon/70 text-sm mb-3">{item.description}</p>
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                  {item.zone}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Ce n'est pas un manque de volonté</h4>
                <p className="text-amber-700 text-sm">
                  La trichotillomanie est un trouble psychologique reconnu (DSM-5). Ce n'est pas un défaut
                  de caractère ou un manque de volonté. Un accompagnement professionnel peut aider à
                  comprendre et gérer ce trouble.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions dermopigmentation */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Solutions de dermopigmentation
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Techniques adaptées pour reconstruire visuellement les sourcils
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solutionsDermopigmentation.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-semibold text-charbon text-xl mb-3">{solution.technique}</h3>
                <p className="text-charbon/70 text-sm mb-4">{solution.description}</p>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-teal-600 font-medium uppercase">Idéal pour</span>
                    <p className="text-sm text-charbon">{solution.ideal}</p>
                  </div>
                  <div>
                    <span className="text-xs text-green-600 font-medium uppercase">Avantage</span>
                    <p className="text-sm text-charbon">{solution.avantage}</p>
                  </div>
                  <div>
                    <span className="text-xs text-amber-600 font-medium uppercase">À considérer</span>
                    <p className="text-sm text-charbon">{solution.consideration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours recommandé */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Parcours recommandé
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Une approche globale pour des résultats durables
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {parcoursRecommande.map((etape, index) => (
              <div key={index} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    etape.important
                      ? 'bg-teal-600 text-white'
                      : 'bg-teal-100 text-teal-600'
                  }`}>
                    {etape.etape}
                  </div>
                  {index < parcoursRecommande.length - 1 && (
                    <div className={`w-0.5 h-full mt-2 ${
                      etape.important ? 'bg-teal-600' : 'bg-teal-200'
                    }`}></div>
                  )}
                </div>
                <div className={`rounded-2xl p-6 flex-grow ${
                  etape.important ? 'bg-teal-50 border border-teal-200' : 'bg-gray-50'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-charbon">{etape.titre}</h3>
                    {etape.important && (
                      <span className="text-xs bg-teal-600 text-white px-2 py-0.5 rounded-full">
                        Prioritaire
                      </span>
                    )}
                  </div>
                  <p className="text-charbon/70 text-sm">{etape.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="section-padding bg-teal-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto text-teal-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-white/90 mb-6 leading-relaxed italic">
              "{temoignage.texte}"
            </p>
            <p className="text-teal-300 font-medium">
              {temoignage.auteur}, {temoignage.age}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-teal-700 to-cyan-700">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Vous n'êtes pas seul(e)
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            La trichotillomanie est un trouble reconnu qui peut être accompagné.
            La dermopigmentation peut vous aider à retrouver confiance en parallèle d'un suivi adapté.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sourcils/microblading" className="btn bg-white text-teal-700 hover:bg-teal-50">
              Découvrir le microblading
            </Link>
            <Link href="/sourcils/microshading" className="btn bg-white/20 text-white hover:bg-white/30">
              Découvrir le microshading
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Réponses sur la trichotillomanie et la dermopigmentation"
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
