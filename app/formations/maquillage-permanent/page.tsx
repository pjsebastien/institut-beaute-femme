'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const modules = [
  {
    nom: 'Sourcils',
    techniques: ['Microblading', 'Microshading', 'Powder brows', 'Combo brows'],
    duree: '5-7 jours',
    niveau: 'Base',
  },
  {
    nom: 'Lèvres',
    techniques: ['Candy lips', 'Contour lèvres', 'Full lips', 'Aquarelle'],
    duree: '3-4 jours',
    niveau: 'Intermédiaire',
  },
  {
    nom: 'Yeux',
    techniques: ['Eye-liner fin', 'Eye-liner épais', 'Effet smoky', 'Cil à cil'],
    duree: '2-3 jours',
    niveau: 'Avancé',
  },
  {
    nom: 'Correction',
    techniques: ['Neutralisation couleurs', 'Camouflage cicatrices', 'Retouches'],
    duree: '2 jours',
    niveau: 'Expert',
  },
]

const parcours = [
  {
    type: 'Parcours express',
    duree: '2 semaines',
    prix: '3 500€ - 5 000€',
    contenu: 'Sourcils + 1 spécialisation',
    ideal: 'Reconversion rapide',
  },
  {
    type: 'Parcours complet',
    duree: '1 mois',
    prix: '6 000€ - 9 000€',
    contenu: 'Sourcils + Lèvres + Yeux',
    ideal: 'Formation complète',
    populaire: true,
  },
  {
    type: 'Parcours expert',
    duree: '2-3 mois',
    prix: '10 000€ - 15 000€',
    contenu: 'Tout + corrections + business',
    ideal: 'Excellence et autonomie',
  },
]

const debouches = [
  {
    metier: 'Indépendant(e)',
    description: 'Cabinet ou domicile',
    revenu: '3 000€ - 8 000€/mois',
  },
  {
    metier: 'En institut',
    description: 'Salarié(e) ou partenariat',
    revenu: '2 000€ - 4 000€/mois',
  },
  {
    metier: 'Formateur/trice',
    description: 'Après expérience',
    revenu: '500€ - 2 000€/jour',
  },
]

const faqs = [
  {
    question: 'Faut-il être esthéticienne pour faire du maquillage permanent ?',
    answer: 'Non, ce n\'est pas obligatoire en France. Vous devez cependant avoir la formation "hygiène et salubrité" (21h minimum) et une formation technique en maquillage permanent. Un diplôme en esthétique est un plus mais pas requis.',
  },
  {
    question: 'Quelle est la meilleure formation en maquillage permanent ?',
    answer: 'La meilleure formation combine : un formateur actif et expérimenté, des petits groupes, beaucoup de pratique sur modèles réels, une certification reconnue, et un accompagnement post-formation. Comparez plusieurs organismes et demandez des témoignages.',
  },
  {
    question: 'Combien de temps pour être rentable ?',
    answer: 'La plupart des praticiens deviennent rentables entre 3 et 6 mois après leur formation. Cela dépend de votre investissement marketing, votre réseau, et la qualité de votre travail. Prévoyez une trésorerie pour les premiers mois.',
  },
  {
    question: 'Quels équipements faut-il pour débuter ?',
    answer: 'Budget équipement initial : 1 500€ à 3 000€. Comprend : dermographe ou stylo manuel, pigments de base, aiguilles/lames, petit matériel stérile, table d\'examen, éclairage adapté. Certaines formations incluent un kit de démarrage.',
  },
  {
    question: 'Peut-on se former en ligne ?',
    answer: 'La théorie peut être apprise en ligne (colorimétrie, morphologie, hygiène). Cependant, la pratique DOIT être réalisée en présentiel avec un formateur pour maîtriser les gestes techniques sur peaux synthétiques puis modèles réels.',
  },
]

const relatedArticles = [
  {
    title: 'Formation microblading',
    slug: '/formations/microblading',
    excerpt: 'Spécialisation sourcils',
    image: '/placeholder-formation.svg',
    category: 'Formation',
  },
  {
    title: 'Formation hygiène',
    slug: '/formations/hygiene-salubrite',
    excerpt: 'Obligatoire',
    image: '/placeholder-hygiene.svg',
    category: 'Formation',
  },
  {
    title: 'Financement Pôle Emploi',
    slug: '/formations/financement-pole-emploi',
    excerpt: 'Aides disponibles',
    image: '/placeholder-finance.svg',
    category: 'Financement',
  },
]

export default function FormationMaquillagePermanentPage() {
  return (
    <article className="pb-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-fonce via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-rose-poudre rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-or-rose rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Formations', href: '/formations' },
              { label: 'Maquillage permanent', href: '/formations/maquillage-permanent' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Cursus Complet
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Formation <span className="text-rose-poudre">Maquillage Permanent</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Maîtrisez toutes les techniques de dermopigmentation : sourcils, lèvres et yeux.
              Un métier d'avenir avec de nombreux débouchés.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-rose-poudre">4</span>
                <p className="text-white/70 text-sm">modules</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-rose-poudre">1-3</span>
                <p className="text-white/70 text-sm">mois</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-rose-poudre">CPF</span>
                <p className="text-white/70 text-sm">éligible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les modules de formation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {modules.map((mod, index) => (
              <div key={index} className="bg-rose-pale/20 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-charbon text-xl">{mod.nom}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    mod.niveau === 'Base' ? 'bg-green-100 text-green-700' :
                    mod.niveau === 'Intermédiaire' ? 'bg-blue-100 text-blue-700' :
                    mod.niveau === 'Avancé' ? 'bg-purple-100 text-purple-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {mod.niveau}
                  </span>
                </div>
                <p className="text-sm text-rose-fonce mb-3">{mod.duree}</p>
                <ul className="space-y-1">
                  {mod.techniques.map((tech, idx) => (
                    <li key={idx} className="text-sm text-charbon/70 flex items-center gap-2">
                      <span className="w-1 h-1 bg-rose-fonce rounded-full"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Choisissez votre parcours
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {parcours.map((p, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-card overflow-hidden ${
                p.populaire ? 'ring-2 ring-rose-fonce' : ''
              }`}>
                {p.populaire && (
                  <div className="bg-rose-fonce text-white text-center py-2 text-sm font-medium">
                    Le plus populaire
                  </div>
                )}
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-charbon text-xl mb-2">{p.type}</h3>
                  <span className="text-sm text-charbon/60">{p.duree}</span>
                  <p className="text-3xl font-bold text-rose-fonce my-4">{p.prix}</p>
                  <p className="text-charbon/70 text-sm mb-4">{p.contenu}</p>
                  <p className="text-xs bg-rose-pale/50 text-rose-fonce px-3 py-1 rounded-full inline-block">
                    {p.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Débouchés */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les débouchés professionnels
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {debouches.map((d, index) => (
              <div key={index} className="bg-rose-pale/20 rounded-2xl p-6 text-center">
                <h3 className="font-semibold text-charbon text-lg mb-2">{d.metier}</h3>
                <p className="text-charbon/60 text-sm mb-4">{d.description}</p>
                <span className="text-2xl font-bold text-rose-fonce">{d.revenu}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-rose-fonce to-or-rose">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Démarrez votre nouvelle carrière
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Le maquillage permanent est un secteur en pleine croissance.
            Formez-vous et créez votre activité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/formations/hygiene-salubrite" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Formation hygiène obligatoire
            </Link>
            <Link href="/formations/financement-pole-emploi" className="btn bg-white/20 text-white hover:bg-white/30">
              Financement
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Tout savoir sur la formation"
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
