'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const etapesReconstruction = [
  {
    etape: 1,
    titre: 'Stabilisation de la pelade',
    description: 'Attendre que les sourcils soient stables depuis au moins 3 mois',
    conseil: 'Consultez votre dermatologue pour valider la stabilité',
  },
  {
    etape: 2,
    titre: 'Consultation spécialisée',
    description: 'Évaluation des zones à traiter et choix de la technique',
    conseil: 'Apportez des photos de vos sourcils avant la pelade',
  },
  {
    etape: 3,
    titre: 'Design personnalisé',
    description: 'Dessin de la forme idéale adaptée à votre visage',
    conseil: 'Prenez le temps de valider le dessin avant la pigmentation',
  },
  {
    etape: 4,
    titre: 'Séance de pigmentation',
    description: 'Application des pigments selon la technique choisie',
    conseil: 'Prévoir 2h pour une séance complète',
  },
  {
    etape: 5,
    titre: 'Retouche',
    description: 'Perfectionnement du résultat 4-6 semaines après',
    conseil: 'Notez les zones à ajuster pour en discuter',
  },
]

const techniques = [
  {
    nom: 'Microblading',
    description: 'Technique poil par poil pour un rendu ultra-naturel',
    ideal: 'Perte partielle ou totale, peau normale',
    avantages: ['Aspect très naturel', 'Imitation des vrais poils', 'Résultat subtil'],
    duree: '1-2 ans',
    prix: '250€ - 450€',
  },
  {
    nom: 'Microshading',
    description: 'Technique d\'ombrage pour effet poudré/maquillé',
    ideal: 'Perte totale, peaux grasses ou sensibles',
    avantages: ['Meilleure couvrance', 'Tient plus longtemps', 'Convient peaux grasses'],
    duree: '2-3 ans',
    prix: '250€ - 450€',
  },
  {
    nom: 'Combo (Mixte)',
    description: 'Combinaison microblading + microshading',
    ideal: 'Résultat optimal, reconstruction complète',
    avantages: ['Poils + remplissage', 'Très réaliste', 'Adapté à tous'],
    duree: '2-3 ans',
    prix: '350€ - 500€',
  },
]

const temoignages = [
  {
    texte: "Après avoir perdu mes sourcils à cause de la pelade, je me maquillais tous les jours. Le microblading a changé ma vie : je me réveille avec des sourcils naturels.",
    auteur: "Marie L.",
    technique: "Microblading",
  },
  {
    texte: "J'avais peur que ça ne tienne pas avec ma pelade. Deux ans après, mes sourcils sont toujours beaux. Une vraie libération.",
    auteur: "Nadia K.",
    technique: "Microshading",
  },
]

const faqs = [
  {
    question: 'Le microblading tient-il sur une peau de pelade ?',
    answer: 'Oui, la peau affectée par la pelade réagit généralement normalement à la dermopigmentation. L\'important est que la zone soit stable (pas de repousse active ni d\'extension). Les résultats durent généralement aussi longtemps que sur une peau normale.',
  },
  {
    question: 'Et si mes sourcils repoussent après le microblading ?',
    answer: 'C\'est une excellente nouvelle ! Vos vrais poils se mélangeront naturellement avec la pigmentation. Si la repousse est complète et dense, la pigmentation s\'estompera progressivement. Vous pouvez choisir de ne pas faire de retouche si vos sourcils sont revenus.',
  },
  {
    question: 'Dois-je attendre que ma pelade soit guérie ?',
    answer: 'Pas nécessairement "guérie", mais stabilisée. On recommande d\'attendre au moins 3-6 mois sans changement (pas de nouvelle plaque, pas de repousse active) avant de procéder. Votre dermatologue peut vous confirmer la stabilité.',
  },
  {
    question: 'La dermopigmentation peut-elle déclencher une poussée de pelade ?',
    answer: 'Il n\'y a pas de preuve que la dermopigmentation déclenche des poussées de pelade. Cependant, le stress lié à toute intervention peut théoriquement affecter une maladie auto-immune. Choisissez un moment où vous êtes sereine.',
  },
  {
    question: 'Combien de temps faut-il prévoir pour la reconstruction complète ?',
    answer: 'Comptez environ 2-3 mois au total : une première séance, puis une retouche 4-6 semaines après. La cicatrisation entre les séances dure environ 2-3 semaines. Le résultat final est visible 6-8 semaines après la dernière séance.',
  },
]

const relatedArticles = [
  {
    title: 'Pelade femme',
    slug: '/conditions-medicales/pelade',
    excerpt: 'Vue générale',
    image: '/placeholder-pelade.svg',
    category: 'Conditions',
  },
  {
    title: 'Microblading',
    slug: '/sourcils/microblading',
    excerpt: 'Technique détaillée',
    image: '/placeholder-microblading.svg',
    category: 'Technique',
  },
  {
    title: 'Alopécie sourcils',
    slug: '/conditions-medicales/alopecie-sourcils',
    excerpt: 'Autres causes',
    image: '/placeholder-alopecie.svg',
    category: 'Conditions',
  },
]

export default function PeladeSourcilsPage() {
  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-fuchsia-900/30 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-fuchsia-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Conditions médicales', href: '/conditions-medicales' },
              { label: 'Pelade', href: '/conditions-medicales/pelade' },
              { label: 'Sourcils', href: '/conditions-medicales/pelade/sourcils' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Reconstruction Sourcils
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Pelade <span className="text-fuchsia-300">Sourcils</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Vos sourcils sont touchés par la pelade ? Le microblading et le microshading
              permettent de reconstruire des sourcils naturels et de retrouver confiance.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-fuchsia-300">90%</span>
                <p className="text-white/70 text-sm">de satisfaction</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-fuchsia-300">2-3 ans</span>
                <p className="text-white/70 text-sm">de durée</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-fuchsia-300">2</span>
                <p className="text-white/70 text-sm">séances</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Étapes de reconstruction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les étapes de la reconstruction
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Un parcours en 5 étapes pour retrouver vos sourcils
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {etapesReconstruction.map((etape, index) => (
              <div key={index} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-fuchsia-100 rounded-full flex items-center justify-center text-fuchsia-600 font-semibold">
                    {etape.etape}
                  </div>
                  {index < etapesReconstruction.length - 1 && (
                    <div className="w-0.5 h-full bg-fuchsia-200 mt-2"></div>
                  )}
                </div>
                <div className="bg-fuchsia-50 rounded-2xl p-6 flex-grow">
                  <h3 className="font-semibold text-charbon text-lg mb-2">{etape.titre}</h3>
                  <p className="text-charbon/70 text-sm mb-3">{etape.description}</p>
                  <p className="text-fuchsia-700 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {etape.conseil}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Quelle technique choisir ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techniques.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-card overflow-hidden">
                <div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 p-4 text-white">
                  <h3 className="font-semibold text-xl">{tech.nom}</h3>
                  <p className="text-white/80 text-sm">{tech.description}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs text-charbon/60 uppercase">Idéal pour</span>
                    <p className="text-sm text-charbon">{tech.ideal}</p>
                  </div>
                  <div>
                    <span className="text-xs text-charbon/60 uppercase">Avantages</span>
                    <ul className="mt-1 space-y-1">
                      {tech.avantages.map((av, idx) => (
                        <li key={idx} className="text-sm text-charbon flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                          {av}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-xs text-charbon/60">Durée</span>
                      <p className="font-medium text-charbon">{tech.duree}</p>
                    </div>
                    <div>
                      <span className="text-xs text-charbon/60">Prix</span>
                      <p className="font-medium text-fuchsia-600">{tech.prix}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-padding bg-fuchsia-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              Elles témoignent
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {temoignages.map((temoignage, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <svg className="w-8 h-8 text-fuchsia-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white/90 mb-4 italic">"{temoignage.texte}"</p>
                <div className="flex justify-between items-center">
                  <span className="text-fuchsia-300 font-medium">{temoignage.auteur}</span>
                  <span className="text-white/60 text-sm">{temoignage.technique}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-fuchsia-600 to-pink-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Retrouvez vos sourcils
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            La reconstruction des sourcils peut transformer votre quotidien et votre confiance en vous.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sourcils/microblading" className="btn bg-white text-fuchsia-600 hover:bg-fuchsia-50">
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
        description="Réponses sur la reconstruction des sourcils"
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
