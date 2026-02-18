'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const typesProblemes = [
  {
    id: 'forme',
    nom: 'Problèmes de forme',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    problemes: [
      {
        titre: 'Trait trop épais',
        description: 'L\'eye liner est plus large que souhaité',
        gravite: 'modere',
        solutions: ['Détatouage laser partiel', 'Attendre l\'estompage naturel'],
      },
      {
        titre: 'Trait irrégulier',
        description: 'La ligne n\'est pas uniforme, avec des variations',
        gravite: 'leger',
        solutions: ['Retouche corrective', 'Remplissage des zones claires'],
      },
      {
        titre: 'Asymétrie',
        description: 'Les deux yeux ne sont pas identiques',
        gravite: 'modere',
        solutions: ['Retouche pour harmoniser', 'Légère correction laser'],
      },
      {
        titre: 'Forme non désirée',
        description: 'La virgule ou l\'aile ne correspond pas au souhait',
        gravite: 'severe',
        solutions: ['Détatouage laser ciblé', 'Correction par camouflage'],
      },
    ],
  },
  {
    id: 'couleur',
    nom: 'Problèmes de couleur',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    problemes: [
      {
        titre: 'Virage au bleu',
        description: 'Le noir a viré vers des teintes bleutées/grises',
        gravite: 'modere',
        solutions: ['Neutralisation avec pigments chauds', 'Détatouage si virage important'],
      },
      {
        titre: 'Couleur trop intense',
        description: 'Le trait est trop foncé, non naturel',
        gravite: 'leger',
        solutions: ['Attendre l\'estompage (2-3 ans)', 'Laser pour éclaircir'],
      },
      {
        titre: 'Couleur trop pâle',
        description: 'L\'eye liner est à peine visible',
        gravite: 'leger',
        solutions: ['Retouche avec intensification', 'Nouvelle séance'],
      },
      {
        titre: 'Dispersion du pigment',
        description: 'Le pigment a migré, créant un effet flou',
        gravite: 'severe',
        solutions: ['Détatouage laser', 'Temps + correction'],
      },
    ],
  },
  {
    id: 'position',
    nom: 'Problèmes de position',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    problemes: [
      {
        titre: 'Trop proche des cils',
        description: 'L\'eye liner est sur la ligne des cils',
        gravite: 'leger',
        solutions: ['Généralement acceptable', 'Épaissir légèrement si souhaité'],
      },
      {
        titre: 'Trop éloigné des cils',
        description: 'Espace visible entre les cils et le trait',
        gravite: 'modere',
        solutions: ['Remplissage interciliaire', 'Retouche de raccord'],
      },
      {
        titre: 'Débordement paupière',
        description: 'Le pigment a débordé sur la paupière mobile',
        gravite: 'severe',
        solutions: ['Détatouage laser ciblé', 'Zone délicate = spécialiste'],
      },
    ],
  },
  {
    id: 'cicatrisation',
    nom: 'Problèmes de cicatrisation',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    problemes: [
      {
        titre: 'Cicatrices',
        description: 'Marques permanentes après la cicatrisation',
        gravite: 'severe',
        solutions: ['Consultation dermatologue', 'Traitements cicatriciels'],
      },
      {
        titre: 'Réaction allergique',
        description: 'Gonflement persistant, rougeurs, démangeaisons',
        gravite: 'severe',
        solutions: ['Consultation médicale urgente', 'Détatouage si nécessaire'],
      },
      {
        titre: 'Perte totale de pigment',
        description: 'Le trait a complètement disparu',
        gravite: 'leger',
        solutions: ['Nouvelle séance possible', 'Adapter la technique'],
      },
    ],
  },
]

const solutionsCorrection = [
  {
    nom: 'Détatouage laser',
    description: 'Effacement des pigments par technologie laser',
    efficacite: 85,
    seances: '2-5 séances',
    prix: '300€ - 800€',
    delai: '3 mois après le maquillage',
    avantages: ['Effacement précis', 'Adapté zone yeux', 'Résultat définitif'],
    inconvenients: ['Zone sensible', 'Plusieurs séances', 'Coût élevé'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    nom: 'Correction pigmentaire',
    description: 'Neutralisation des virages de couleur',
    efficacite: 75,
    seances: '1-2 séances',
    prix: '150€ - 350€',
    delai: '6 semaines après cicatrisation',
    avantages: ['Moins invasif', 'Corrige les couleurs', 'Rapide'],
    inconvenients: ['Limité aux virages de couleur', 'Temporaire'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
      </svg>
    ),
  },
  {
    nom: 'Retouche corrective',
    description: 'Ajustement de la forme ou remplissage',
    efficacite: 80,
    seances: '1 séance',
    prix: '100€ - 250€',
    delai: 'Dès cicatrisation complète',
    avantages: ['Simple', 'Économique', 'Amélioration immédiate'],
    inconvenients: ['Limité aux défauts mineurs', 'Ajoute du pigment'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    question: 'Comment savoir si mon eye liner permanent est raté ?',
    answer: 'Attendez la fin de la cicatrisation (4-6 semaines) pour juger. Un eye liner est considéré raté si : le trait est très asymétrique, la couleur a viré (bleu, gris), le pigment a migré créant un effet flou, ou des cicatrices sont apparues. Pendant la cicatrisation, aspect intense et gonflement sont normaux.',
  },
  {
    question: 'Le détatouage laser est-il dangereux près des yeux ?',
    answer: 'Le détatouage laser près des yeux est sécuritaire quand pratiqué par un professionnel expérimenté. Des protections oculaires spéciales (coques métalliques) sont placées sous les paupières. Choisissez un praticien spécialisé dans le détatouage péri-oculaire pour minimiser les risques.',
  },
  {
    question: 'Mon eye liner a viré au bleu, que faire ?',
    answer: 'Le virage au bleu est fréquent avec les pigments noirs de mauvaise qualité. Deux options : la neutralisation avec des pigments orangés/chauds pour corriger la teinte, ou le détatouage laser si le virage est trop prononcé. Consultez un spécialiste pour évaluer la meilleure solution.',
  },
  {
    question: 'Puis-je refaire un eye liner après un raté ?',
    answer: 'Oui, mais il faut d\'abord traiter le problème existant. Si c\'est un défaut mineur, une retouche peut suffire. Pour un raté important, un détatouage partiel ou total est souvent nécessaire avant de recommencer. Attendez minimum 3-6 mois entre les interventions.',
  },
  {
    question: 'Le praticien doit-il rembourser en cas de raté ?',
    answer: 'Légalement, le praticien a une obligation de moyens, pas de résultat. Cependant, un bon professionnel propose généralement une retouche gratuite. En cas de faute avérée (technique, hygiène), vous pouvez engager une procédure. Gardez photos et documents de la séance.',
  },
]

const relatedArticles = [
  {
    title: 'Eye Liner Permanent',
    slug: '/yeux/eye-liner-permanent',
    excerpt: 'Guide complet',
    image: '/placeholder-eyeliner.svg',
    category: 'Guide',
  },
  {
    title: 'Cicatrisation Eye Liner',
    slug: '/yeux/eye-liner-permanent/cicatrisation',
    excerpt: 'Post-soin',
    image: '/placeholder-healing.svg',
    category: 'Soins',
  },
  {
    title: 'Détatouage sourcils',
    slug: '/sourcils/detatouage',
    excerpt: 'Techniques laser',
    image: '/placeholder-laser.svg',
    category: 'Correction',
  },
]

export default function EyelinerRatePage() {
  const [activeCategorie, setActiveCategorie] = useState('forme')
  const categorieActive = typesProblemes.find(c => c.id === activeCategorie)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Yeux', href: '/yeux' },
              { label: 'Eye Liner Permanent', href: '/yeux/eye-liner-permanent' },
              { label: 'Raté', href: '/yeux/eye-liner-permanent/rate' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Solutions & Corrections
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Eye Liner Permanent <span className="text-red-400">Raté</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Votre eye liner permanent ne correspond pas à vos attentes ?
              Trait trop épais, virage de couleur ou asymétrie ?
              Découvrez les solutions pour corriger le résultat.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#solutions" className="btn-primary">
                Voir les solutions
              </a>
              <Link href="/yeux/eye-liner-permanent" className="btn bg-white/10 text-white hover:bg-white/20">
                Guide eye liner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types de problèmes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Identifiez votre problème
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Sélectionnez la catégorie correspondant à votre situation
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {typesProblemes.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategorie(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeCategorie === cat.id
                    ? 'bg-charbon text-white shadow-lg'
                    : 'bg-gray-100 text-charbon hover:bg-gray-200'
                }`}
              >
                <span className={activeCategorie === cat.id ? 'text-rose-poudre' : 'text-charbon/60'}>
                  {cat.icon}
                </span>
                {cat.nom}
              </button>
            ))}
          </div>

          {/* Active category content */}
          {categorieActive && (
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {categorieActive.problemes.map((probleme, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-card border-l-4 ${
                    probleme.gravite === 'leger' ? 'border-green-400' :
                    probleme.gravite === 'modere' ? 'border-orange-400' : 'border-red-400'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full ${
                      probleme.gravite === 'leger' ? 'bg-green-400' :
                      probleme.gravite === 'modere' ? 'bg-orange-400' : 'bg-red-400'
                    }`} />
                    <h3 className="font-semibold text-charbon text-lg">{probleme.titre}</h3>
                  </div>
                  <p className="text-charbon/70 text-sm mb-4">{probleme.description}</p>
                  <div>
                    <span className="text-xs text-charbon/50 uppercase font-medium">Solutions possibles</span>
                    <ul className="mt-2 space-y-1">
                      {probleme.solutions.map((sol, idx) => (
                        <li key={idx} className="text-sm text-rose-fonce flex items-center gap-2">
                          <span className="text-xs">→</span>
                          {sol}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Légende gravité */}
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

      {/* Solutions de correction */}
      <section id="solutions" className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les solutions de correction
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Comparatif des techniques pour corriger un eye liner permanent raté
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solutionsCorrection.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-card overflow-hidden">
                <div className="bg-gradient-to-r from-charbon to-gray-700 p-6 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{solution.nom}</h3>
                  <p className="text-white/70 text-sm">{solution.description}</p>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-charbon/60">Efficacité</span>
                      <span className="font-medium text-charbon">{solution.efficacite}%</span>
                    </div>
                    <div className="h-2 bg-rose-pale/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-fonce to-or-rose rounded-full"
                        style={{ width: `${solution.efficacite}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-charbon/60">Séances</span>
                      <p className="font-medium text-charbon">{solution.seances}</p>
                    </div>
                    <div>
                      <span className="text-charbon/60">Prix</span>
                      <p className="font-medium text-rose-fonce">{solution.prix}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-nude-rose/30">
                    <span className="text-xs text-charbon/50">Délai</span>
                    <p className="text-sm text-charbon/80">{solution.delai}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div>
                      <span className="text-xs text-green-600 font-medium">Avantages</span>
                      <ul className="mt-1 space-y-1">
                        {solution.avantages.map((av, idx) => (
                          <li key={idx} className="text-xs text-charbon/70 flex items-start gap-1">
                            <span className="text-green-500">+</span>
                            {av}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-xs text-red-600 font-medium">Inconvénients</span>
                      <ul className="mt-1 space-y-1">
                        {solution.inconvenients.map((inc, idx) => (
                          <li key={idx} className="text-xs text-charbon/70 flex items-start gap-1">
                            <span className="text-red-500">-</span>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alerte zone sensible */}
      <section className="section-padding bg-amber-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-card border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charbon mb-2">
                    Zone oculaire = Zone sensible
                  </h3>
                  <p className="text-charbon/70 mb-4">
                    Le contour des yeux est une zone particulièrement délicate. Toute intervention
                    corrective doit être réalisée par un professionnel expérimenté, spécialisé
                    dans les traitements péri-oculaires.
                  </p>
                  <ul className="space-y-2 text-sm text-charbon/80">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Exigez des protections oculaires adaptées (coques métalliques)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      Vérifiez l'expérience du praticien sur cette zone
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      En cas de doute, consultez un ophtalmologue
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-rose-fonce to-or-rose">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Besoin de conseils personnalisés ?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Consultez un spécialiste pour évaluer votre situation et définir la meilleure stratégie de correction
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/yeux/eye-liner-permanent" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Guide Eye Liner
            </Link>
            <Link href="/sourcils/detatouage" className="btn bg-white/20 text-white hover:bg-white/30">
              Techniques de détatouage
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Réponses d'experts sur les eye liners ratés"
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
