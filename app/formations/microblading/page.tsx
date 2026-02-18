'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const programmeFormation = [
  {
    module: 'Module 1 : Théorie',
    duree: '1 jour',
    contenu: [
      'Histoire et évolution du microblading',
      'Anatomie et physiologie de la peau',
      'Colorimétrie et théorie des pigments',
      'Hygiène et stérilisation',
      'Contre-indications et précautions',
    ],
  },
  {
    module: 'Module 2 : Morphologie',
    duree: '1 jour',
    contenu: [
      'Analyse des visages et symétrie',
      'Techniques de mesure et mapping',
      'Design de sourcils selon morphologie',
      'Dessin au crayon sur peau synthétique',
      'Correction des erreurs fréquentes',
    ],
  },
  {
    module: 'Module 3 : Pratique',
    duree: '2-3 jours',
    contenu: [
      'Manipulation des outils (lames, stylos)',
      'Techniques de tracé poil par poil',
      'Profondeur et angle d\'incision',
      'Pratique sur peaux synthétiques',
      'Pratique sur modèles réels',
    ],
  },
  {
    module: 'Module 4 : Business',
    duree: '0.5 jour',
    contenu: [
      'Installation professionnelle',
      'Aspects juridiques et assurances',
      'Marketing et acquisition clients',
      'Photographie avant/après',
      'Gestion des retouches',
    ],
  },
]

const certifications = [
  {
    nom: 'Certification école privée',
    description: 'Attestation de formation délivrée par l\'organisme',
    reconnaissance: 'Permet d\'exercer en institut',
    validite: 'Illimitée (formation continue recommandée)',
  },
  {
    nom: 'Hygiène et salubrité',
    description: 'Formation obligatoire de 21h minimum',
    reconnaissance: 'Obligatoire pour exercer légalement',
    validite: 'Renouvelable tous les 5 ans',
  },
  {
    nom: 'CPF / RNCP',
    description: 'Certaines formations éligibles au CPF',
    reconnaissance: 'Certification reconnue par l\'État',
    validite: 'Selon le référentiel',
  },
]

const criteresBonneFormation = [
  { critere: 'Pratique sur modèles réels', importance: 'Essentiel' },
  { critere: 'Formateur expérimenté actif', importance: 'Essentiel' },
  { critere: 'Petit groupe (max 6 personnes)', importance: 'Important' },
  { critere: 'Kit de démarrage inclus', importance: 'Appréciable' },
  { critere: 'Accompagnement post-formation', importance: 'Important' },
  { critere: 'Certification reconnue', importance: 'Essentiel' },
]

const tarifs = [
  {
    type: 'Formation initiale courte',
    duree: '3-4 jours',
    prix: '1 500€ - 2 500€',
    contenu: 'Bases du microblading',
  },
  {
    type: 'Formation complète',
    duree: '5-7 jours',
    prix: '2 500€ - 4 000€',
    contenu: 'Microblading + perfectionnement',
  },
  {
    type: 'Masterclass avancée',
    duree: '2-3 jours',
    prix: '1 000€ - 2 000€',
    contenu: 'Pour praticiens confirmés',
  },
]

const faqs = [
  {
    question: 'Quels sont les prérequis pour suivre une formation microblading ?',
    answer: 'Aucun diplôme spécifique n\'est requis pour suivre la formation. Cependant, une formation en esthétique est un plus. Vous devez être majeur(e), avoir une bonne acuité visuelle et une main stable. La formation "hygiène et salubrité" est obligatoire pour exercer.',
  },
  {
    question: 'Combien de temps dure une formation microblading ?',
    answer: 'Une formation de base dure généralement 3 à 5 jours. Une formation complète avec perfectionnement peut aller jusqu\'à 7-10 jours. Comptez ensuite plusieurs mois de pratique avant d\'être vraiment à l\'aise.',
  },
  {
    question: 'Puis-je exercer immédiatement après la formation ?',
    answer: 'Techniquement oui, si vous avez aussi votre attestation d\'hygiène et salubrité. En pratique, il est recommandé de s\'entraîner encore sur des modèles (souvent à tarif réduit) avant de proposer des prestations au prix normal.',
  },
  {
    question: 'La formation microblading est-elle éligible au CPF ?',
    answer: 'Certaines formations sont éligibles au CPF si l\'organisme est certifié Qualiopi et la formation inscrite au RNCP. Renseignez-vous auprès de l\'organisme de formation. Les formations Pôle Emploi sont aussi une option.',
  },
  {
    question: 'Quel revenu peut-on espérer en tant que microbladeuse ?',
    answer: 'Les tarifs d\'une prestation varient de 250€ à 500€ selon la région et l\'expérience. Une praticienne à temps plein peut réaliser 4-6 prestations par semaine, soit un CA mensuel de 4 000€ à 10 000€. Les charges et investissements sont à déduire.',
  },
]

const relatedArticles = [
  {
    title: 'Formation maquillage permanent',
    slug: '/formations/maquillage-permanent',
    excerpt: 'Vue complète',
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
    title: 'Microblading',
    slug: '/sourcils/microblading',
    excerpt: 'La technique',
    image: '/placeholder-microblading.svg',
    category: 'Technique',
  },
]

export default function FormationMicrobladingPage() {
  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-fonce via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-rose-poudre rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-or-rose rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Formations', href: '/formations' },
              { label: 'Microblading', href: '/formations/microblading' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Formation Professionnelle
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Formation <span className="text-rose-poudre">Microblading</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Devenez praticien(ne) certifié(e) en microblading. Programme complet,
              pratique sur modèles réels et accompagnement pour lancer votre activité.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-rose-poudre">3-7</span>
                <p className="text-white/70 text-sm">jours de formation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-rose-poudre">1 500€</span>
                <p className="text-white/70 text-sm">à partir de</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <span className="text-2xl font-bold text-rose-poudre">CPF</span>
                <p className="text-white/70 text-sm">éligible (selon)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Programme de formation
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Un cursus complet pour maîtriser la technique du microblading
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {programmeFormation.map((module, index) => (
              <div key={index} className="bg-rose-pale/20 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-charbon text-lg">{module.module}</h3>
                  <span className="bg-rose-fonce text-white px-3 py-1 rounded-full text-xs">
                    {module.duree}
                  </span>
                </div>
                <ul className="space-y-2">
                  {module.contenu.map((item, idx) => (
                    <li key={idx} className="text-sm text-charbon/70 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-rose-fonce rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Certifications et reconnaissances
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-semibold text-charbon text-lg mb-3">{cert.nom}</h3>
                <p className="text-charbon/70 text-sm mb-4">{cert.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-xs text-charbon/60 uppercase">Reconnaissance</span>
                    <p className="text-charbon">{cert.reconnaissance}</p>
                  </div>
                  <div>
                    <span className="text-xs text-charbon/60 uppercase">Validité</span>
                    <p className="text-rose-fonce">{cert.validite}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Critères bonne formation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Comment choisir sa formation ?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-rose-pale/20 rounded-2xl p-6">
              {criteresBonneFormation.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-rose-pale/30 last:border-0">
                  <span className="text-charbon">{item.critere}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.importance === 'Essentiel' ? 'bg-green-100 text-green-700' :
                    item.importance === 'Important' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.importance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Tarifs indicatifs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tarifs.map((tarif, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <h3 className="font-semibold text-charbon text-lg mb-2">{tarif.type}</h3>
                <span className="text-xs text-charbon/60">{tarif.duree}</span>
                <p className="text-3xl font-bold text-rose-fonce my-4">{tarif.prix}</p>
                <p className="text-charbon/70 text-sm">{tarif.contenu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-rose-fonce to-or-rose">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Lancez votre carrière dans le microblading
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Une formation de qualité est la clé d'une carrière réussie.
            Choisissez un organisme reconnu et investissez dans votre avenir.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/formations/hygiene-salubrite" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Formation hygiène obligatoire
            </Link>
            <Link href="/formations/financement-pole-emploi" className="btn bg-white/20 text-white hover:bg-white/30">
              Financement Pôle Emploi
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Réponses sur la formation microblading"
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
