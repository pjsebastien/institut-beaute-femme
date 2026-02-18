'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const typesProblemes = [
  {
    id: 'couleur',
    titre: 'Problèmes de couleur',
    icon: '🎨',
    problemes: [
      {
        nom: 'Couleur trop foncée',
        description: 'Les sourcils sont beaucoup plus sombres que prévu, donnant un aspect "tatouage".',
        causes: ['Pigments trop foncés', 'Trop de passages', 'Mauvaise évaluation du teint'],
        solutions: ['Attendre l\'estompage naturel (6-12 mois)', 'Retouche pour éclaircir', 'Détatouage laser si nécessaire'],
        gravite: 'modere',
      },
      {
        nom: 'Virage de couleur',
        description: 'La couleur vire au rouge, orange, gris ou bleu avec le temps.',
        causes: ['Pigments de mauvaise qualité', 'Mélange incompatible', 'Réaction avec la peau'],
        solutions: ['Correction de couleur', 'Neutralisation des pigments', 'Détatouage partiel'],
        gravite: 'modere',
      },
      {
        nom: 'Couleur trop claire/effacée',
        description: 'Les sourcils sont à peine visibles après cicatrisation.',
        causes: ['Pigments implantés trop superficiellement', 'Mauvaise prise de la peau', 'Type de peau grasse'],
        solutions: ['Retouche avec technique adaptée', 'Changement de technique', 'Plusieurs séances'],
        gravite: 'leger',
      },
    ],
  },
  {
    id: 'forme',
    titre: 'Problèmes de forme',
    icon: '📐',
    problemes: [
      {
        nom: 'Asymétrie flagrante',
        description: 'Les deux sourcils ont des formes ou hauteurs visiblement différentes.',
        causes: ['Mauvais dessin préparatoire', 'Praticien inexpérimenté', 'Mouvement du client'],
        solutions: ['Retouche corrective', 'Équilibrage des deux côtés', 'Détatouage partiel'],
        gravite: 'severe',
      },
      {
        nom: 'Forme inadaptée',
        description: 'La forme ne correspond pas à votre visage ou vos attentes.',
        causes: ['Communication insuffisante', 'Non-validation du dessin', 'Erreur de jugement'],
        solutions: ['Correction possible selon les cas', 'Détatouage des zones excédentaires', 'Camouflage'],
        gravite: 'modere',
      },
      {
        nom: 'Sourcils trop épais',
        description: 'Les sourcils sont plus larges que souhaité, aspect non naturel.',
        causes: ['Dépassement du cadre naturel', 'Tendance à suivre une mode', 'Erreur d\'évaluation'],
        solutions: ['Détatouage laser des bords', 'Attendre l\'estompage', 'Maquillage correcteur'],
        gravite: 'modere',
      },
    ],
  },
  {
    id: 'technique',
    titre: 'Problèmes techniques',
    icon: '⚠️',
    problemes: [
      {
        nom: 'Traits grossiers',
        description: 'Les poils simulés sont épais, flous ou ressemblent à des traits de feutre.',
        causes: ['Lame inadaptée', 'Pression trop forte', 'Praticien non qualifié'],
        solutions: ['Correction délicate possible', 'Camouflage par microshading', 'Détatouage si nécessaire'],
        gravite: 'severe',
      },
      {
        nom: 'Cicatrices visibles',
        description: 'Des marques ou cicatrices sont apparues dans la zone traitée.',
        causes: ['Pénétration trop profonde', 'Mauvaise cicatrisation', 'Arrachement des croûtes'],
        solutions: ['Consultation dermatologique', 'Traitements cicatriciels', 'Temps de guérison'],
        gravite: 'severe',
      },
      {
        nom: 'Infection',
        description: 'Rougeur, gonflement, pus ou douleur persistante après plusieurs jours.',
        causes: ['Hygiène insuffisante', 'Matériel non stérile', 'Mauvais soins post-traitement'],
        solutions: ['Consultation médicale URGENTE', 'Antibiotiques si prescrits', 'Soins antiseptiques'],
        gravite: 'severe',
      },
    ],
  },
]

const etapesRecours = [
  {
    numero: 1,
    titre: 'Documentez le problème',
    description: 'Prenez des photos en lumière naturelle, notez la date du soin et les symptômes observés.',
    icon: '📸',
  },
  {
    numero: 2,
    titre: 'Contactez votre praticien',
    description: 'Exposez calmement le problème. Un professionnel sérieux proposera une solution.',
    icon: '📞',
  },
  {
    numero: 3,
    titre: 'Demandez une retouche gratuite',
    description: 'La plupart des praticiens incluent une retouche. En cas de défaut, elle peut être prioritaire.',
    icon: '🔄',
  },
  {
    numero: 4,
    titre: 'Consultez un autre expert',
    description: 'Si le dialogue est impossible, demandez l\'avis d\'un autre professionnel reconnu.',
    icon: '👩‍⚕️',
  },
  {
    numero: 5,
    titre: 'Recours légaux si nécessaire',
    description: 'En cas de préjudice, vous pouvez signaler auprès de la DGCCRF ou consulter un avocat.',
    icon: '⚖️',
  },
]

const faqs = [
  {
    question: 'Comment savoir si mon microblading est raté ?',
    answer: 'Un microblading est considéré comme raté si : la forme est visiblement asymétrique, la couleur a viré (orange, gris, bleu), les traits sont grossiers et non naturels, des cicatrices sont apparues, ou le résultat ne correspond pas du tout à ce qui était convenu. Attendez cependant la fin de la cicatrisation (4-6 semaines) avant de juger, car l\'aspect évolue beaucoup.',
  },
  {
    question: 'Peut-on corriger un microblading raté ?',
    answer: 'Oui, dans la plupart des cas. Les options incluent : une retouche corrective pour ajuster couleur ou forme, un microshading pour camoufler des traits grossiers, une correction de couleur pour neutraliser les virages, ou un détatouage laser pour effacer partiellement ou totalement. La solution dépend du problème spécifique.',
  },
  {
    question: 'Combien coûte la correction d\'un microblading raté ?',
    answer: 'Les coûts varient : une retouche corrective coûte 100€ à 300€, une correction de couleur 150€ à 400€, et un détatouage laser 100€ à 300€ par séance (3-8 séances nécessaires). Si le praticien initial est responsable, demandez d\'abord une correction gratuite.',
  },
  {
    question: 'Puis-je me faire rembourser un microblading raté ?',
    answer: 'Le remboursement n\'est pas automatique mais possible en cas de faute avérée du praticien. Documentez le problème avec photos, consultez un autre professionnel pour un avis, et tentez d\'abord une médiation. En dernier recours, vous pouvez saisir la DGCCRF ou un tribunal.',
  },
  {
    question: 'Combien de temps attendre avant de corriger ?',
    answer: 'Attendez minimum 6-8 semaines après le premier traitement pour que la cicatrisation soit complète. Pour un détatouage laser, attendez 3 mois. Cette patience est nécessaire car l\'aspect évolue beaucoup et certains "défauts" s\'atténuent naturellement.',
  },
  {
    question: 'Le détatouage laser est-il douloureux ?',
    answer: 'La douleur est comparable à des claquements d\'élastique sur la peau. Une crème anesthésiante est généralement appliquée. Plusieurs séances espacées de 6-8 semaines sont nécessaires. Les sourcils peuvent être sensibles quelques jours après chaque séance.',
  },
]

const relatedArticles = [
  {
    title: 'Détatouage sourcils',
    slug: '/sourcils/detatouage',
    excerpt: 'Effacer un microblading au laser',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400',
    category: 'Solution',
  },
  {
    title: 'Microblading cicatrisation',
    slug: '/sourcils/microblading/cicatrisation',
    excerpt: 'Le processus normal',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    category: 'Post-soin',
  },
  {
    title: 'Formation microblading',
    slug: '/formations/microblading',
    excerpt: 'Choisir un bon praticien',
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400',
    category: 'Formation',
  },
]

export default function MicrobladingRatePage() {
  const [activeCategorie, setActiveCategorie] = useState('couleur')
  const [expandedProbleme, setExpandedProbleme] = useState<string | null>(null)

  const categorieActive = typesProblemes.find(c => c.id === activeCategorie)

  return (
    <article className="pb-16">
      {/* Hero Section - Urgent/Alert Style */}
      <section className="relative bg-gradient-to-br from-red-900 via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-poudre rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Sourcils', href: '/sourcils' },
              { label: 'Microblading', href: '/sourcils/microblading' },
              { label: 'Raté', href: '/sourcils/microblading/rate' },
            ]}
            variant="dark"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Solutions & Recours
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
                Microblading <span className="text-red-400">raté</span> : que faire ?
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
                Votre microblading ne correspond pas à vos attentes ? Pas de panique !
                Découvrez comment identifier le problème et les solutions pour y remédier.
                La plupart des cas sont corrigibles.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#solutions" className="btn-primary">
                  Voir les solutions
                </a>
                <a href="#recours" className="btn bg-white/10 text-white hover:bg-white/20">
                  Mes recours
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800"
                  alt="Correction microblading raté"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charbon/70 via-transparent to-transparent" />
              </div>

              {/* Alert Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl max-w-[220px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✅</span>
                  </div>
                  <div>
                    <p className="font-semibold text-charbon text-sm">90% des cas</p>
                    <p className="text-xs text-charbon/60">sont corrigibles avec les bonnes techniques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de problèmes */}
      <section id="solutions" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Identifiez votre problème
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Sélectionnez la catégorie correspondant à votre situation pour trouver les solutions adaptées
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {typesProblemes.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategorie(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategorie === cat.id
                    ? 'bg-rose-fonce text-white shadow-lg'
                    : 'bg-rose-pale/50 text-charbon hover:bg-rose-pale'
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                {cat.titre}
              </button>
            ))}
          </div>

          {/* Problems List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {categorieActive?.problemes.map((probleme, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 overflow-hidden transition-all ${
                  probleme.gravite === 'severe' ? 'border-red-200' :
                  probleme.gravite === 'modere' ? 'border-orange-200' : 'border-green-200'
                }`}
              >
                <button
                  onClick={() => setExpandedProbleme(expandedProbleme === probleme.nom ? null : probleme.nom)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      probleme.gravite === 'severe' ? 'bg-red-500' :
                      probleme.gravite === 'modere' ? 'bg-orange-500' : 'bg-green-500'
                    }`} />
                    <div>
                      <h3 className="font-semibold text-charbon text-lg">{probleme.nom}</h3>
                      <p className="text-charbon/60 text-sm">{probleme.description}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-charbon/40 transition-transform ${expandedProbleme === probleme.nom ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedProbleme === probleme.nom && (
                  <div className="px-6 pb-6 border-t border-nude-rose/30">
                    <div className="grid md:grid-cols-2 gap-6 pt-6">
                      <div>
                        <h4 className="font-medium text-charbon mb-3 flex items-center gap-2">
                          <span className="text-red-500">⚠️</span> Causes possibles
                        </h4>
                        <ul className="space-y-2">
                          {probleme.causes.map((cause, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-charbon/70 text-sm">
                              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                              {cause}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-charbon mb-3 flex items-center gap-2">
                          <span className="text-green-500">✅</span> Solutions
                        </h4>
                        <ul className="space-y-2">
                          {probleme.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-charbon/70 text-sm">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Gravité Legend */}
          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              Facile à corriger
            </div>
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-orange-500 rounded-full" />
              Correction possible
            </div>
            <div className="flex items-center gap-2 text-sm text-charbon/60">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              Intervention spécialisée
            </div>
          </div>
        </div>
      </section>

      {/* Étapes de recours */}
      <section id="recours" className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Vos étapes de recours
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Suivez ces étapes pour faire valoir vos droits et obtenir une correction
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-rose-poudre hidden md:block" />

              <div className="space-y-6">
                {etapesRecours.map((etape, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-card flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-2xl">{etape.icon}</span>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-card flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-rose-pale text-rose-fonce px-3 py-1 rounded-full text-sm font-medium">
                          Étape {etape.numero}
                        </span>
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

      {/* CTA Consultation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-rose-fonce to-or-rose rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-playfair font-bold mb-4">
              Besoin d&apos;un avis professionnel ?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Consultez un praticien certifié pour évaluer votre situation et vous proposer
              les meilleures options de correction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/sourcils/detatouage" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
                En savoir plus sur le détatouage
              </Link>
              <Link href="/formations/microblading" className="btn bg-white/20 text-white hover:bg-white/30">
                Trouver un bon praticien
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Tout savoir sur les corrections de microblading"
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
