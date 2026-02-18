'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const problemesFrequents = [
  {
    probleme: 'Couleur trop foncée',
    description: 'Les lèvres paraissent trop maquillées ou non naturelles',
    solutions: ['Attendre l\'estompage naturel', 'Détatouage laser', 'Correction pigmentaire'],
    gravite: 'modere',
  },
  {
    probleme: 'Virage de couleur',
    description: 'La couleur vire au rose fluo, orange ou bleu/violet',
    solutions: ['Neutralisation colorimétrique', 'Correction avec pigments complémentaires'],
    gravite: 'modere',
  },
  {
    probleme: 'Asymétrie des lèvres',
    description: 'Les deux côtés ne sont pas identiques',
    solutions: ['Retouche corrective', 'Rééquilibrage des formes'],
    gravite: 'leger',
  },
  {
    probleme: 'Dépassement du contour naturel',
    description: 'Les pigments débordent de la ligne naturelle des lèvres',
    solutions: ['Détatouage laser des zones excédentaires', 'Camouflage'],
    gravite: 'severe',
  },
  {
    probleme: 'Cicatrisation problématique',
    description: 'Croûtes anormales, infection ou cicatrices',
    solutions: ['Consultation médicale', 'Soins adaptés', 'Temps de guérison'],
    gravite: 'severe',
  },
  {
    probleme: 'Couleur effacée',
    description: 'Les pigments n\'ont pas tenu ou ont trop pâli',
    solutions: ['Retouche avec technique adaptée', 'Plusieurs séances'],
    gravite: 'leger',
  },
]

const solutions = [
  {
    nom: 'Détatouage laser',
    description: 'Effacement des pigments par technologie laser',
    efficacite: 90,
    seances: '3-6 séances',
    prix: '400€ - 1000€',
    delai: 'Attendre 3 mois après le maquillage permanent',
    icon: '⚡',
  },
  {
    nom: 'Correction pigmentaire',
    description: 'Neutralisation des virages de couleur',
    efficacite: 80,
    seances: '1-2 séances',
    prix: '200€ - 400€',
    delai: 'Dès la fin de la cicatrisation (6 semaines)',
    icon: '🎨',
  },
  {
    nom: 'Retouche corrective',
    description: 'Ajustement de la forme ou de l\'intensité',
    efficacite: 85,
    seances: '1 séance',
    prix: '150€ - 300€',
    delai: 'Dès la fin de la cicatrisation',
    icon: '✏️',
  },
  {
    nom: 'Camouflage',
    description: 'Recouvrement par un nouveau maquillage permanent',
    efficacite: 70,
    seances: '1-2 séances',
    prix: '300€ - 500€',
    delai: 'Après estompage partiel (6-12 mois)',
    icon: '🖌️',
  },
]

const faqs = [
  {
    question: 'Comment savoir si mon maquillage permanent des lèvres est raté ?',
    answer: 'Un maquillage permanent est considéré comme raté si, après cicatrisation complète (6 semaines) : la couleur a viré (rose fluo, orange, bleu), l\'asymétrie est flagrante, les pigments débordent du contour naturel, ou des cicatrices sont apparues. Pendant la cicatrisation, couleur intense et gonflement sont normaux.',
  },
  {
    question: 'Le laser peut-il effacer un maquillage permanent des lèvres ?',
    answer: 'Oui, le laser est efficace pour effacer les pigments des lèvres. Les lasers PicoSecond (PicoWay, PicoSure) sont les plus adaptés. Comptez 3 à 6 séances espacées de 6-8 semaines. Les lèvres sont une zone plus délicate que les sourcils, la cicatrisation demande plus d\'attention.',
  },
  {
    question: 'Peut-on refaire un candy lips après un raté ?',
    answer: 'Oui, mais il faut d\'abord corriger ou effacer l\'ancien maquillage permanent. Selon la gravité du raté : une simple correction peut suffire, ou un détatouage peut être nécessaire avant de recommencer. Attendez la cicatrisation complète entre les interventions.',
  },
  {
    question: 'Combien coûte la correction d\'un maquillage permanent lèvres raté ?',
    answer: 'Les coûts varient : retouche corrective 150€-300€, correction de couleur 200€-400€, détatouage laser 400€-1000€ au total (3-6 séances). Si le praticien initial est responsable, demandez une correction gratuite.',
  },
  {
    question: 'Comment éviter un maquillage permanent lèvres raté ?',
    answer: 'Choisissez un praticien certifié avec un portfolio de photos après cicatrisation, pas juste après la séance. Validez absolument la couleur et le dessin avant de commencer. Méfiez-vous des prix très bas. Respectez scrupuleusement les consignes post-soin.',
  },
]

const relatedArticles = [
  {
    title: 'Candy Lips',
    slug: '/levres/candy-lips',
    excerpt: 'La technique phare',
    image: '/placeholder-lips.svg',
    category: 'Guide',
  },
  {
    title: 'Cicatrisation candy lips',
    slug: '/levres/candy-lips/cicatrisation',
    excerpt: 'Le processus normal',
    image: '/placeholder-healing.svg',
    category: 'Post-soin',
  },
  {
    title: 'Détatouage sourcils',
    slug: '/sourcils/detatouage',
    excerpt: 'Techniques laser',
    image: '/placeholder-laser.svg',
    category: 'Correction',
  },
]

export default function MaquillagePermamentLevresRatePage() {
  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-poudre rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Lèvres', href: '/levres' },
              { label: 'Maquillage permanent', href: '/levres/maquillage-permanent' },
              { label: 'Raté', href: '/levres/maquillage-permanent/rate' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Solutions & Recours
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Maquillage Permanent Lèvres <span className="text-red-400">Raté</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Votre maquillage permanent des lèvres ne correspond pas à vos attentes ?
              Couleur inappropriée, forme asymétrique ou virage de teinte ?
              Découvrez les solutions pour corriger le résultat.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#solutions" className="btn-primary">
                Voir les solutions
              </a>
              <Link href="/levres/candy-lips" className="btn bg-white/10 text-white hover:bg-white/20">
                Refaire un candy lips
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes fréquents */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les problèmes les plus fréquents
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Identifiez votre situation pour trouver la solution adaptée
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problemesFrequents.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-card border-l-4 ${
                  item.gravite === 'leger' ? 'border-green-400' :
                  item.gravite === 'modere' ? 'border-orange-400' : 'border-red-400'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 rounded-full ${
                    item.gravite === 'leger' ? 'bg-green-400' :
                    item.gravite === 'modere' ? 'bg-orange-400' : 'bg-red-400'
                  }`} />
                  <h3 className="font-semibold text-charbon">{item.probleme}</h3>
                </div>
                <p className="text-charbon/70 text-sm mb-4">{item.description}</p>
                <div>
                  <span className="text-xs text-charbon/50 uppercase">Solutions</span>
                  <ul className="mt-1 space-y-1">
                    {item.solutions.map((sol, idx) => (
                      <li key={idx} className="text-sm text-rose-fonce flex items-center gap-1">
                        <span className="text-xs">→</span> {sol}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-green-400 rounded-full" />
              Correction facile
            </div>
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-orange-400 rounded-full" />
              Correction possible
            </div>
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-red-400 rounded-full" />
              Intervention spécialisée
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les solutions de correction
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {solutions.map((sol, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{sol.icon}</span>
                  <div>
                    <h3 className="font-semibold text-charbon text-lg">{sol.nom}</h3>
                    <p className="text-charbon/60 text-sm">{sol.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-charbon/60">Efficacité</span>
                    <span className="font-medium text-charbon">{sol.efficacite}%</span>
                  </div>
                  <div className="h-2 bg-rose-pale/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-rose-fonce to-or-rose rounded-full"
                      style={{ width: `${sol.efficacite}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-charbon/60">Séances</span>
                    <p className="font-medium text-charbon">{sol.seances}</p>
                  </div>
                  <div>
                    <span className="text-charbon/60">Prix</span>
                    <p className="font-medium text-rose-fonce">{sol.prix}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-nude-rose/30">
                  <span className="text-xs text-charbon/50">Délai</span>
                  <p className="text-sm text-charbon/80">{sol.delai}</p>
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
            Besoin d&apos;aide ?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Consultez un spécialiste pour évaluer votre situation et trouver la meilleure solution
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/levres/candy-lips" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Découvrir le Candy Lips
            </Link>
            <Link href="/sourcils/detatouage" className="btn bg-white/20 text-white hover:bg-white/30">
              Guide détatouage
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Réponses à vos interrogations"
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
